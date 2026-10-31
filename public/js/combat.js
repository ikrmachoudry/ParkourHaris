// COMBAT MISSION: the BATTLE MAP far outside the city (no road leads there) and the bots that fight on it.
// This file has NO three.js and no DOM: terrain, towns, roads, buildings (with windows, doors, stairs and furniture), forests and loot spots are plain data and maths,
// so they can be unit tested in node, the server builds the same collision, and battlemap.js (client only) turns the data into graphics.
export const TW = { ST: 0.3, n: 144, a: 2.65, K: 1.3, S2: 3.85, O: 4.4, per: 24, door: 0.34, open: 195 * Math.PI / 180, ledge: Math.PI / 2, lhw: 0.34 };   // v222: ROUND towers with a true spiral stair (24 steps a turn, 4 turns). K = core radius, S2 = inner wall radius, O = outer radius, door = half angle of the door gap, open = where the roof opening starts (angle from the door, going up)   // the three parachute towers: 96 steps x 0.3 m = 29 m
// v237: shooting windows in the tower wall: one a turn, alternating east / west, 0.9 m above the step you stand on, 1.3 m high, so you can look out, peek and shoot (and be shot)
export const towerWins = (gy) => { const o = [], dph = 2 * Math.PI / TW.per; for (let t = 0; t * TW.per + 18 < TW.n; t++) { const ph = t % 2 ? 1.5 * Math.PI : 0.5 * Math.PI, i = t * TW.per + Math.round(ph / dph), fy = gy + (i + 1) * TW.ST; o.push({ ph, hw: 0.12, y0: fy + 0.9, y1: fy + 2.2 }); } return o; };
export const CMB = { x: 1500, z: 1500, half: 300 };   // map centre (the server accepts positions up to 2000) and half size: 600 x 600 m
export const COMBAT_MS = 900000;                        // a match lasts 15 minutes
export const cmbInside = (x, z) => Math.abs(x - CMB.x) < CMB.half + 14 && Math.abs(z - CMB.z) < CMB.half + 14;
const H = CMB.half;
import { makeZone, zoneAt, airPoint, airLand } from './zone.js';

const seeded = (s) => () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const hash2 = (x, z, s) => { let h = (Math.imul(x | 0, 374761393) + Math.imul(z | 0, 668265263) + Math.imul(s | 0, 1274126177)) | 0; h = Math.imul(h ^ (h >>> 13), 1274126177); return ((h ^ (h >>> 16)) >>> 0) / 4294967296; };
export const vnoise = (x, z, s) => { const xi = Math.floor(x), zi = Math.floor(z), xf = x - xi, zf = z - zi, u = xf * xf * (3 - 2 * xf), v = zf * zf * (3 - 2 * zf); const a = hash2(xi, zi, s), b = hash2(xi + 1, zi, s), c = hash2(xi, zi + 1, s), d = hash2(xi + 1, zi + 1, s); return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v; };
export const fbm = (x, z, s, o = 4) => { let a = 0.5, f = 1, t = 0, n = 0; for (let i = 0; i < o; i++) { t += a * vnoise(x * f, z * f, s + i * 7); n += a; a *= 0.5; f *= 2; } return t / n; };

// ---------------------------------------------------------------- terrain (map-local metres; x east, z south)
export const SEA_Y = -1.2;   // the sea / river water level of the whole game (gta.js GT.SEA)
export const riverX = (z) => -90 + 50 * Math.sin(z * 0.011 + 0.6) + 18 * Math.sin(z * 0.037 + 2);
export function rawH(x, z) {
  let h = 6 + (fbm(x * 0.0055, z * 0.0055, 11, 4) - 0.5) * 28 + (fbm(x * 0.03, z * 0.03, 21, 3) - 0.5) * 3.2;
  h += 36 * Math.exp(-(((x - 170) ** 2 + (z + 150) ** 2) / (2 * 62 * 62)));   // the military hill (north east)
  h += 13 * Math.exp(-(((x + 190) ** 2 + (z + 170) ** 2) / (2 * 45 * 45)));   // a knoll in the north west
  const d = Math.abs(x - riverX(z)), k = smooth(26, 6, d); h = h * (1 - k) + (-2.9) * k;   // the river valley: deep enough to swim
  const r = Math.max(Math.abs(x), Math.abs(z)); h += 55 * Math.pow(smooth(H - 55, H - 6, r), 1.4);   // the mountains round the edge
  return h;
}
const PADS = [];   // flat building sites {x0,z0,x1,z1,y}: the ground is levelled under every building and blended into the hillside over 9 m
export function cmbH(x, z) {
  const raw = rawH(x, z); let ws = 0, wy = 0, wm = 0;
  for (const p of PADS) {
    if (x < p.x0 - 9 || x > p.x1 + 9 || z < p.z0 - 9 || z > p.z1 + 9) continue;
    const d = Math.hypot(Math.max(p.x0 - x, 0, x - p.x1), Math.max(p.z0 - z, 0, z - p.z1)); if (d >= 9) continue;
    if (d === 0) return p.y;   // inside a building site: exactly level
    const w = 1 - smooth(0, 9, d); ws += w; wy += w * p.y; if (w > wm) wm = w;
  }
  return ws > 0 ? raw + (wy / ws - raw) * wm : raw;   // near several sites: blend towards their average level
}

// v275: the ground you WALK on is the very triangle mesh that is DRAWN (same grid, same diagonal), so you can never sink into a lump of the terrain or float over a dip
let MSTEP = 3; export function setMeshStep(st) { MSTEP = st; }
export function cmbG(x, z) {
  const half = H + 26, s = MSTEP; if (x < -half || z < -half || x >= half - s || z >= half - s) return cmbH(x, z);
  const i = Math.floor((x + half) / s), j = Math.floor((z + half) / s), x0 = -half + i * s, z0 = -half + j * s, u = (x - x0) / s, v = (z - z0) / s;
  const a = cmbH(x0, z0), b = cmbH(x0 + s, z0), d = cmbH(x0, z0 + s);
  if (u + v <= 1) return a + (b - a) * u + (d - a) * v;
  return cmbH(x0 + s, z0 + s) + (b - cmbH(x0 + s, z0 + s)) * (1 - v) + (d - cmbH(x0 + s, z0 + s)) * (1 - u);
}

// ---------------------------------------------------------------- buildings
const SL = 0.3, BASE = -0.6, TH = 0.4;   // floor slab thickness, how far walls reach below the floor, wall thickness
const WALLS = ['#e6d9bd', '#d8c7a0', '#cfd8d4', '#e0b9a2', '#d9d3c4', '#c9b79a', '#bfcfd6', '#e8d9a8'];
const ROOFS = ['#9b4b36', '#7a3f2e', '#5d5f66', '#8c5a3a', '#6b4a3a'];
const KIND = {
  house: { fh: 3.0, win: { ww: 1.4, y0: 0.95, y1: 2.2, gap: 4.2 }, fur: 'home', roof: 'gable' },
  shop: { fh: 3.4, win: { ww: 3.0, y0: 0.8, y1: 2.5, gap: 5.2 }, fur: 'shop', roof: 'flat' },
  apart: { fh: 3.1, fl: 2, win: { ww: 1.4, y0: 0.95, y1: 2.2, gap: 3.8 }, fur: 'home', roof: 'flat' },
  school: { fh: 3.4, fl: 2, win: { ww: 1.8, y0: 0.95, y1: 2.4, gap: 4.6 }, fur: 'school', roof: 'flat' },
  church: { fh: 6.5, win: { ww: 1.0, y0: 2.4, y1: 5.0, gap: 4.4 }, fur: 'church', roof: 'gable' },
  barn: { fh: 6.2, win: { ww: 1.0, y0: 3.6, y1: 4.6, gap: 6 }, fur: 'barn', roof: 'gable' },
  warehouse: { fh: 7, win: { ww: 2.4, y0: 4.6, y1: 6.0, gap: 6.2 }, fur: 'ware', roof: 'lowgable' },
  hangar: { fh: 9, win: { ww: 2.4, y0: 6.0, y1: 7.6, gap: 7 }, fur: 'ware', roof: 'lowgable' },
  barracks: { fh: 3.2, win: { ww: 1.2, y0: 1.0, y1: 2.2, gap: 3.6 }, fur: 'barracks', roof: 'gable' },
  shack: { fh: 2.6, win: { ww: 1.0, y0: 1.0, y1: 2.0, gap: 4 }, fur: 'shack', roof: 'pent' },
  cabin: { fh: 2.9, win: { ww: 1.1, y0: 1.0, y1: 2.1, gap: 3.8 }, fur: 'shack', roof: 'gable' },
  clinic: { fh: 3.4, fl: 2, win: { ww: 1.8, y0: 0.95, y1: 2.1, gap: 4.4, csS: [-8.5, -4.9, 4.9, 8.5] }, fur: 'clinic', roof: 'flat' },
  ghar: { fh: 3.4, fl: 2, win: { ww: 1.6, y0: 0.95, y1: 2.1, gap: 4.6 }, fur: 'ghar', roof: 'flat' },
  kiosk: { fh: 3.0, win: { ww: 2.2, y0: 0.9, y1: 2.3, gap: 3 }, fur: 'shop', roof: 'flat' },
};
const SIDES = { N: [true, -1], S: [true, 1], W: [false, -1], E: [false, 1] };
const OPP = { N: 'S', S: 'N', W: 'E', E: 'W' };

// one building: wall solids (with door and window openings), floors + a staircase for two storeys, a roof slab.  Everything map-local; y is absolute.
function buildSolids(o) {
  const nfl = o.fl || 1, fh = o.fh, top = nfl * fh + (nfl - 1) * SL, fy = o.fy, out = [], hx = o.w / 2, hz = o.d / 2, openings = [];
  const wall = (x0, z0, x1, z1, y0, y1, k = 'wall') => out.push({ x0: o.x + x0, z0: o.z + z0, x1: o.x + x1, z1: o.z + z1, y0: fy + y0, y1: fy + y1, k });
  const W = o.win || {};
  for (const s of ['N', 'S', 'W', 'E']) {
    const [alongX, sg] = SIDES[s], len = alongX ? o.w : o.d, fixed = sg * (alongX ? hz : hx), cols = [];
    for (const d of (o.doors || []).filter((q) => q.s === s)) { const hw = (d.w || 3.4) / 2, h = d.h || 2.5; cols.push({ c: d.o, hw, holes: [[0, h]] }); openings.push({ s, c: d.o, hw, y0: 0, y1: h, k: 'door' }); }
    if (W.ww && !(o.noWin || []).includes(s)) {
      const cs = s === 'S' && W.csS, n = cs ? cs.length : Math.floor((len - 3.2) / W.gap) + 1;
      for (let i = 0; i < n; i++) {
        const c = cs ? cs[i] : -(n - 1) * W.gap / 2 + i * W.gap; if (cols.some((q) => Math.abs(q.c - c) < q.hw + W.ww / 2 + 0.7)) continue;
        const holes = []; for (let f = 0; f < nfl; f++) holes.push([f * (fh + SL) + W.y0, f * (fh + SL) + W.y1]);
        cols.push({ c, hw: W.ww / 2, holes }); for (const [a, b] of holes) openings.push({ s, c, hw: W.ww / 2, y0: a, y1: b, k: 'win' });
      }
    }
    cols.sort((a, b) => a.c - b.c);
    const seg = (p, q, y0, y1) => { if (q - p < 0.04 || y1 - y0 < 0.04) return; if (alongX) wall(p, fixed - TH / 2, q, fixed + TH / 2, y0, y1); else wall(fixed - TH / 2, p, fixed + TH / 2, q, y0, y1); };
    let a = -len / 2 - (alongX ? TH / 2 : 0);
    for (const c of cols) {
      seg(a, c.c - c.hw, BASE, top); let y = BASE;
      for (const [h0, h1] of c.holes.sort((p, q) => p[0] - q[0])) { seg(c.c - c.hw, c.c + c.hw, y, h0); y = h1; }
      seg(c.c - c.hw, c.c + c.hw, y, top); a = c.c + c.hw;
    }
    seg(a, len / 2 + (alongX ? TH / 2 : 0), BASE, top);
  }
  if (o.part) {   // an inner wall with a doorway on the ground floor
    const p = o.part, len = p.ax === 'x' ? o.w : o.d, dw = 3.4; let a = -len / 2 + TH / 2;
    const seg = (s, e, y0, y1) => { if (e - s < 0.05) return; if (p.ax === 'x') wall(s, p.pos - TH / 2, e, p.pos + TH / 2, y0, y1); else wall(p.pos - TH / 2, s, p.pos + TH / 2, e, y0, y1); };
    seg(a, p.gap - dw / 2, 0, fh); seg(p.gap - dw / 2, p.gap + dw / 2, 2.5, fh); seg(p.gap + dw / 2, len / 2 - TH / 2, 0, fh);
    o.partDoor = { ax: p.ax, pos: p.pos, gap: p.gap, w: dw };
  }
  let hole = null, hole2 = null;
  if (nfl > 1) {   // the staircase (runs along x against the north wall) and the upper floor with a hole over it
    const st = { ...(o.stair || { x0: -hx + 1.6, z0: -hz + TH / 2 + 0.45, dir: 1 }) }, rise = fh + SL, n = Math.ceil(rise / 0.27), step = rise / n, tread = 0.5, sw = 2.0; st.z0 += 0.5;   /* v255: a clear 0.95 m aisle between the flight and the wall (it used to touch) */
    for (let i = 0; i < n; i++) { const xa = st.dir > 0 ? st.x0 + i * tread : st.x0 - (i + 1) * tread; wall(xa, st.z0, xa + tread, st.z0 + sw, -0.1, (i + 1) * step, 'step'); }
    const hx0 = st.dir > 0 ? st.x0 : st.x0 - (n - 1) * tread, hx1 = hx0 + (n - 1) * tread; hole = { x0: hx0, x1: hx1, z0: st.z0, z1: st.z0 + sw }; o.stairs = { ...st, n, tread, sw, rise, step };
    if (o.stair2) {   /* v264/v268: a SECOND staircase (the new door beside the garage). ax 'z' = a straight flight going away from the door (dir -1 rises towards -z), ax 'x' = along the wall */
      const t2 = { tr: 0.5, ...o.stair2 }, tr2 = t2.tr, n2 = Math.ceil(rise / 0.27);
      if (t2.ax === 'z') {
        for (let i = 0; i < n2; i++) { const za = t2.dir < 0 ? t2.z0 - (i + 1) * tr2 : t2.z0 + i * tr2; wall(t2.x0, za, t2.x0 + sw, za + tr2, -0.1, (i + 1) * (rise / n2), 'step'); }
        const gz0 = t2.dir < 0 ? t2.z0 - (n2 - 1) * tr2 : t2.z0; hole2 = { x0: t2.x0, x1: t2.x0 + sw, z0: gz0, z1: gz0 + (n2 - 1) * tr2 }; o.stairs2 = { ...t2, n: n2, tread: tr2, sw, rise, step: rise / n2 };
      } else {
        t2.z0 += 0.5;
        for (let i = 0; i < n2; i++) { const xa = t2.dir > 0 ? t2.x0 + i * tr2 : t2.x0 - (i + 1) * tr2; wall(xa, t2.z0, xa + tr2, t2.z0 + sw, -0.1, (i + 1) * (rise / n2), 'step'); }
        const gx0 = t2.dir > 0 ? t2.x0 : t2.x0 - (n2 - 1) * tr2; hole2 = { x0: gx0, x1: gx0 + (n2 - 1) * tr2, z0: t2.z0, z1: t2.z0 + sw }; o.stairs2 = { ...t2, n: n2, tread: tr2, sw, rise, step: rise / n2 };
      }
    }
    const holes = [hole].concat(hole2 ? [hole2] : []).sort((u, v) => u.z0 - v.z0);
    for (let f = 1; f < nfl; f++) {
      const yb = f * (fh + SL) - SL, yt = f * (fh + SL), X0 = -hx, X1 = hx, Z0 = -hz, Z1 = hz; let zc = Z0;
      for (const h of holes) { wall(X0, zc, X1, h.z0, yb, yt, 'floor'); wall(X0, h.z0, h.x0, h.z1, yb, yt, 'floor'); wall(h.x1, h.z0, X1, h.z1, yb, yt, 'floor'); zc = h.z1; }
      wall(X0, zc, X1, Z1, yb, yt, 'floor');
    }
  }
  for (const q of (o.inner || [])) {   // inner partitions with doorways, per floor (hospital below, home above)
    const y0 = q.f * (fh + SL), run = (p, r, lo, hi) => { if (r - p < 0.04) return; if (q.ax === 'z') wall(q.pos - 0.15, p, q.pos + 0.15, r, lo, hi); else wall(p, q.pos - 0.15, r, q.pos + 0.15, lo, hi); };
    let cur = q.a; for (const [c, w] of (q.gaps || []).slice().sort((u, v) => u[0] - v[0])) { run(cur, c - w / 2, y0, y0 + fh); run(c - w / 2, c + w / 2, y0 + 2.5, y0 + fh); cur = c + w / 2; } run(cur, q.b, y0, y0 + fh);
  }
  if (o.roofStair) {   // a second flight up to the roof terrace; the roof slab has a hole over it and a parapet round the edge
    const st = o.roofStair, rise = fh + SL, n = Math.ceil(rise / 0.3), step = rise / n, tread = 0.45, sw = 1.5;
    for (let i = 0; i < n; i++) { const xa = st.x0 + i * tread; wall(xa, st.z0, xa + tread, st.z0 + sw, rise - 0.1, rise + (i + 1) * step, 'step'); }
    const h0 = st.x0, h1 = st.x0 + (n - 1) * tread, X0 = -hx - 0.3, X1 = hx + 0.3, Z0 = -hz - 0.3, Z1 = hz + 0.3;
    wall(X0, Z0, X1, st.z0, top, top + SL, 'roof'); wall(X0, st.z0 + sw, X1, Z1, top, top + SL, 'roof'); wall(X0, st.z0, h0, st.z0 + sw, top, top + SL, 'roof'); wall(h1, st.z0, X1, st.z0 + sw, top, top + SL, 'roof');
    o.roofHole = { x0: h0, x1: h1, z0: st.z0, z1: st.z0 + sw };
    for (const [a0, b0, c0, d0] of [[-hx, -hz, hx, -hz + 0.3], [-hx, hz - 0.3, hx, hz], [-hx, -hz, -hx + 0.3, hz], [hx - 0.3, -hz, hx, -2.2], [hx - 0.3, 2.2, hx, hz]]) wall(a0, b0, c0, d0, top + SL, top + SL + 1.1, 'wall');   // v247: a 4.4 m gap in the east parapet = jump down from the roof (PUBG: roofs have edges you can drop over)
    if (o.tank) { const t = o.tank; wall(t.x - 1.2, t.z - 1.2, t.x + 1.2, t.z + 1.2, top + SL, top + SL + 2.4, 'prop'); }
  } else
    wall(-hx - 0.3, -hz - 0.3, hx + 0.3, hz + 0.3, top, top + SL, 'roof');
  if (o.bay) wall(-o.bay, hz - 0.6, o.bay, hz + 0.2, top + SL, top + SL + 3.5, 'wall');   // the tower bay over the front door stands on the roof
  o.openings = openings; o.top = top; o.hole = hole; o.hole2 = hole2 || null;
  return out;
}

// ---------------------------------------------------------------- the list of buildings
const BUILDINGS = [];
const BASE_Y = Math.round(rawH(170, -150) * 10) / 10;   // the whole military compound is one level plateau
const RB = seeded(4242);
// v255: the push (dx, dz, 1 m) that moves a w x d building away from the nearest road it overlaps, or null when it is clear
function roadClear(x, z, w, d) {
  let bd = 1e9, bq = null;
  for (const [ax, az, bx, bz, rw] of ROADSEGS) {
    const dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz || 1;
    for (let t = 0; t <= 1.0001; t += 0.02) { const px = ax + dx * t, pz = az + dz * t, ex = Math.max(0, Math.abs(px - x) - w / 2), ez = Math.max(0, Math.abs(pz - z) - d / 2), dd = Math.hypot(ex, ez) - rw / 2 - 2.5; if (dd < bd) { bd = dd; bq = [x - px, z - pz]; } }
  }
  if (bd >= 0 || !bq) return null; const l = Math.hypot(bq[0], bq[1]) || 1; return [bq[0] / l * 1.5, bq[1] / l * 1.5];
}
function mk(kind, x, z, w, d, front, ov = {}) {
  if (ov.fy === undefined) { for (let k = 0; k < 30; k++) { const q = roadClear(x, z, w, d); if (!q) break; x += q[0]; z += q[1]; x = Math.round(x * 2) / 2; z = Math.round(z * 2) / 2; } }   /* v255: a road never runs through a room: a building that sits on a road is moved sideways until it is clear (rect to road centre line >= half road + 2.5 m) */
  const K = KIND[kind], rr = RB, fy = ov.fy !== undefined ? ov.fy : Math.round(rawH(x, z) * 10) / 10;
  const o = { kind, x, z, w, d, front, fy, fh: ov.fh || K.fh, fl: K.fl || 1, win: ov.win === null ? null : (ov.win || K.win), roof: K.roof, fur: K.fur, c: ov.c || WALLS[Math.floor(rr() * WALLS.length)], rc: ov.rc || ROOFS[Math.floor(rr() * ROOFS.length)], noWin: ov.noWin || [] };
  const alongX = front === 'N' || front === 'S', len = alongX ? w : d, big = kind === 'warehouse' || kind === 'hangar' || kind === 'barn';
  const dh = big ? 4.6 : 2.5, dwid = kind === 'hangar' ? 12 : big ? 5 : 3.4;
  o.doors = ov.doors || [{ s: front, o: big ? 0 : Math.round((rr() - 0.5) * len * 0.4 * 2) / 2, w: dwid, h: dh }];
  if (!ov.doors && len >= 8) o.doors.push({ s: OPP[front], o: big ? 0 : Math.round((rr() - 0.5) * (alongX ? w : d) * 0.4), w: big ? 3.4 : 3.4, h: 2.5 });
  if (!ov.doors && (big || kind === 'school') && (alongX ? d : w) >= 12) o.doors.push({ s: alongX ? 'W' : 'N', o: 0, w: 3.4, h: 2.5 });
  if ((kind === 'house' || kind === 'cabin') && w >= 10 && ov.part !== null) o.part = { ax: 'z', pos: Math.round((rr() - 0.5) * w * 0.3), gap: Math.round((rr() - 0.5) * 3) };
  if (kind === 'apart' || kind === 'barracks' || kind === 'school') o.part = o.part || undefined;
  if (kind === 'barracks') o.part = { ax: 'z', pos: 0, gap: 0 };
  if (ov.stair) o.stair = ov.stair;
  if ((K.fl || 1) > 1 && !ov.inner) {   /* v255: no door opens onto the foot of the staircase: a door on the stair wall slides to the free part of that wall (or goes when there is no room) */
    const S0 = o.stair || { x0: -w / 2 + 1.6, z0: -d / 2 }, sx0 = S0.x0 - 0.8, sx1 = S0.x0 + 7.4 + 0.8, sideS = S0.z0 < 0 ? 'N' : 'S', hx_ = w / 2, hz_ = d / 2;
    if (sideS === 'N' || sideS === 'S') o.doors = o.doors.filter((q) => { if (q.s !== sideS) return true; const hw = (q.w || 3.4) / 2; if (q.o + hw < sx0 || q.o - hw > sx1) return true;
      const fr0 = sx1 + hw + 0.2, fr1 = hx_ - 1.6 - hw, fl0 = -hx_ + 1.6 + hw, fl1 = sx0 - hw - 0.2;
      if (fr1 >= fr0) { q.o = Math.round((fr0 + fr1) / 2 * 2) / 2; return true; } if (fl1 >= fl0) { q.o = Math.round((fl0 + fl1) / 2 * 2) / 2; return true; }
      return q.s === front && o.doors.length < 2; });
  }
  if (o.part && o.part.ax === 'z') {   /* v258: the inner wall must never end at a door / window / the stairs of the outside wall: slide it to the nearest clean spot (or leave it out) */
    const bad = (pp) => { for (const q of o.doors) if ((q.s === 'N' || q.s === 'S') && Math.abs(pp - q.o) < (q.w || 3.4) / 2 + 1.0) return true;
      if (o.win && o.win.ww) for (const sd of ['N', 'S']) { if ((o.noWin || []).includes(sd)) continue; const cs2 = sd === 'S' && o.win.csS, n2 = cs2 ? cs2.length : Math.floor((w - 3.2) / o.win.gap) + 1; for (let i = 0; i < n2; i++) { const c = cs2 ? cs2[i] : -(n2 - 1) * o.win.gap / 2 + i * o.win.gap; if (Math.abs(pp - c) < o.win.ww / 2 + 0.9) return true; } }
      if (o.stair && Math.abs(pp - (o.stair.x0 + 3.5)) < 5.5) return true; return false; };
    let best = null; for (let dlt = 0; dlt <= w * 0.4; dlt += 0.5) for (const sg of [1, -1]) { const pp = o.part.pos + sg * dlt; if (best === null && Math.abs(pp) < w / 2 - 2.5 && !bad(pp)) best = pp; }
    if (best === null) o.part = undefined; else o.part.pos = best;
  }
  if (ov.stair2) o.stair2 = ov.stair2; if (ov.inner) o.inner = ov.inner; if (ov.roofStair) o.roofStair = ov.roofStair; if (ov.tank) o.tank = ov.tank; if (ov.bay) o.bay = ov.bay;
  o.solids = buildSolids(o);
  PADS.push({ x0: x - w / 2 - 2.6, x1: x + w / 2 + 2.6, z0: z - d / 2 - 2.6, z1: z + d / 2 + 2.6, y: fy });
  BUILDINGS.push(o); return o;
}
// extra pads (the base compound square, bridge ends)
const padRect = (x0, z0, x1, z1, y) => PADS.push({ x0, z0, x1, z1, y });

// the river bridge on the road to the farm
export const BRIDGE = (() => { const z = 62, c = riverX(z), xa = c + 30, xb = c - 30; return { z, c, xa, xb, y: Math.round(Math.max(rawH(xa, z), rawH(xb, z)) * 10) / 10 + 0.4, w: 6.6 }; })();
padRect(BRIDGE.xa - 4, BRIDGE.z - 5, BRIDGE.xa + 6, BRIDGE.z + 5, BRIDGE.y); padRect(BRIDGE.xb - 6, BRIDGE.z - 5, BRIDGE.xb + 4, BRIDGE.z + 5, BRIDGE.y);

// ---------------------------------------------------------------- roads (polylines: [x, z] points; w = width; dirt = a track)
export const ROADS = [
  { w: 7, pts: [[62, 238], [60, 200], [50, 172], [48, 120], [48, 95], [50, 50], [58, 12], [85, -50], [120, -92], [150, -112], [166, -108]] },
  { w: 6, pts: [[-24, 95], [48, 95], [135, 95], [168, 112], [176, 140], [178, 168]] },
  { w: 6, pts: [[49, 66], [10, 64], [BRIDGE.xa, BRIDGE.z]] },
  { w: 6, pts: [[BRIDGE.xb, BRIDGE.z], [-100, 58], [-128, 40], [-146, 30]] },
  { w: 6, pts: [[166, -108], [165, -132], [165, -168]] },
  { w: 4.5, dirt: 1, pts: [[58, 12], [10, -22], [-30, -60], [-52, -100], [-60, -150]] },
  { w: 4.5, dirt: 1, pts: [[85, -50], [140, -40], [200, -38], [232, -42]] },
  { w: 4.5, dirt: 1, pts: [[-130, 40], [-170, 20], [-200, -40], [-212, -90], [-170, -146]] },
  { w: 4.5, dirt: 1, pts: [[48, 170], [10, 200], [-26, 222]] },
  { w: 4.5, dirt: 1, pts: [[135, 95], [190, 80], [224, 70]] },
  { w: 4.5, dirt: 1, pts: [[58, -150], [66, -204]] },
];
const segsOf = () => { const a = []; for (const r of ROADS) for (let i = 0; i + 1 < r.pts.length; i++) a.push([r.pts[i][0], r.pts[i][1], r.pts[i + 1][0], r.pts[i + 1][1], r.w]); return a; };
const ROADSEGS = segsOf();
export function distRoad(x, z) {
  let best = 1e9;
  for (const [ax, az, bx, bz, w] of ROADSEGS) {
    const dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz, t = l2 ? Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / l2)) : 0, d = Math.hypot(x - (ax + t * dx), z - (az + t * dz)) - w / 2;
    if (d < best) best = d;
  }
  return best;   // metres from the road edge (negative = on the road)
}
// ---- Haris Town (centre east): two streets, houses, shops, apartments, a church and the school
for (const x of [6, 22]) { mk('house', x, 79, 10 + (x === 22 ? 1 : 0), 9, 'S'); mk('house', x, 111, 10 + (x === 22 ? 1 : 0), 9, 'N'); }
for (const x of [84, 100, 116]) { mk('house', x, 79, 10, 9, 'S'); if (x > 84) mk('house', x, 111, 10, 9, 'N'); }
mk('shop', 66, 78, 14, 10, 'S'); mk('apart', 68, 114, 18, 12, 'N', { stair: { x0: -6, z0: -6 + TH / 2 + 0.45, dir: 1 } });
mk('shop', 30, 50, 12, 9, 'S'); mk('church', 12, 40, 10, 18, 'S', { win: { ww: 1.0, y0: 2.4, y1: 5.0, gap: 4.4 } });
mk('school', 96, 46, 30, 12, 'S', { stair: { x0: -12, z0: -6 + TH / 2 + 0.45, dir: 1 } });
mk('house', 30, 142, 11, 9, 'N'); mk('apart', 72, 146, 18, 12, 'N', { stair: { x0: -6, z0: -6 + TH / 2 + 0.45, dir: 1 } }); mk('house', 100, 142, 10, 9, 'N'); mk('shop', 122, 146, 12, 10, 'W');
mk('kiosk', 62, 192, 8, 6, 'W');   // the petrol station on the highway
// ---- the military base on the hill (north east): barracks, HQ, hangar, sheds
for (const z of [-176, -158, -140]) mk('barracks', 148, z, 24, 9, 'E', { fy: BASE_Y });
mk('apart', 198, -150, 14, 12, 'W', { fy: BASE_Y, c: '#9aa38a', stair: { x0: -4, z0: -6 + TH / 2 + 0.45, dir: 1 } }); mk('hangar', 186, -112, 32, 20, 'S', { fy: BASE_Y, c: '#8f9a8a' });
mk('shack', 124, -128, 6, 5, 'E', { fy: BASE_Y, c: '#8f9a8a' }); mk('shack', 214, -176, 6, 5, 'W', { fy: BASE_Y, c: '#8f9a8a' });
// ---- the industrial yard (south east)
mk('warehouse', 160, 160, 26, 22, 'N', { c: '#a8b0b3' }); mk('warehouse', 196, 160, 26, 22, 'N', { c: '#b5a48c' }); mk('warehouse', 196, 196, 36, 18, 'W', { c: '#9aa6b0' });
mk('shack', 150, 196, 6, 5, 'E', { c: '#b0a890' });
// ---- the farm west of the river
mk('house', -150, 20, 11, 9, 'E'); mk('barn', -178, 58, 22, 14, 'N', { c: '#a14b3a', rc: '#3f3f44' }); mk('shack', -148, 52, 8, 6, 'N');
// ---- the river village (east bank) and cabins in the forests
for (let i = 0; i < 6; i++) { const z = -150 + i * 22, x = Math.round(riverX(z) + 40 + ((i % 2) * 8)); mk(i % 3 === 2 ? 'cabin' : 'shack', x, z, i % 3 === 2 ? 8 : 6, i % 3 === 2 ? 7 : 5, 'E'); }
for (const [x, z, f] of [[-170, -150, 'S'], [-215, -90, 'E'], [-100, -225, 'S'], [-10, -205, 'S'], [70, -205, 'W'], [235, -40, 'W'], [225, 70, 'W'], [-30, 225, 'N'], [-140, 120, 'E'], [-120, 150, 'E']]) mk('cabin', x, z, 8, 7, f);

export const FIELDS = [[-236, -44, -186, 22, '#c9b45a'], [-240, 30, -212, 100, '#79a143'], [-236, 110, -190, 150, '#d8c070']];   // crop fields on the farm (visual only; nothing grows or stands on them)
export const inField = (x, z, m = 2) => FIELDS.some((f) => x > f[0] - m && x < f[2] + m && z > f[1] - m && z < f[3] + m);
export const onPad = (x, z, m = 0) => { for (const o of BUILDINGS) if (x > o.x - o.w / 2 - m && x < o.x + o.w / 2 + m && z > o.z - o.d / 2 - m && z < o.z + o.d / 2 + m) return true; return false; };
// ---- Dr. Ikrma's house: hospital on the ground floor (reception, admission rooms, operation theatre, wards), the family home upstairs (a big lobby with five bedrooms round it), a roof terrace with a water tank
{ const CL = { w: 28, d: 20 }, cand = []; for (let x = -200; x <= 230; x += 8) for (let z = -190; z <= 220; z += 8) cand.push([x, z]); cand.sort((p, q) => Math.hypot(p[0] - 50, p[1] - 30) - Math.hypot(q[0] - 50, q[1] - 30));
  const free = (x, z) => { for (const [dx, dz] of [[0, 0], [-1, -1], [1, -1], [-1, 1], [1, 1], [2, -1], [2, 1], [2, 0]]) if (Math.abs(rawH(x + dx * 14, z + dz * 10) - rawH(x, z)) > 1.6) return false; return rawH(x, z) > 2.5 && rawH(x, z) < 20 && Math.abs(x - riverX(z)) > 40 && distRoad(x, z) > 24 && !inField(x, z, 20) && !(x > 100 && x < 240 && z > -205 && z < -84) && !BUILDINGS.some((o) => Math.abs(o.x - (x + 16)) < (o.w + 60) / 2 + 12 && Math.abs(o.z - z) < (o.d + 20) / 2 + 12); };
  const pick = cand.find(([x, z]) => free(x, z)) || [60, 40];
  const hs = CL.d / 2 - TH / 2 - 0.2 - 0.0;
  mk('clinic', pick[0], pick[1], CL.w, CL.d, 'S', { c: '#ead0aa', bay: 1.9, doors: [{ s: 'S', o: 0, w: 3.8, h: 2.9 }, { s: 'S', o: 9, w: 2.0, h: 2.5 }, { s: 'W', o: 5, w: 2.2, h: 2.5 }], stair: { x0: -5.4, z0: -CL.d / 2 + TH / 2 + 0.45, dir: 1 }, stair2: { ax: 'z', x0: 8.0, z0: 9.5, dir: -1, tr: 0.38 }, roofStair: { x0: 0.5, z0: -CL.d / 2 + TH / 2 + 0.45 }, tank: { x: 11.6, z: -8.3 },
    inner: [
      { f: 0, ax: 'z', pos: -6, a: -9.8, b: 9.8, gaps: [[-6.4, 1.8], [0, 1.8], [6.4, 1.8]] }, { f: 0, ax: 'z', pos: 6, a: -9.8, b: 3.4, gaps: [[-4.8, 2.4]] },
      { f: 0, ax: 'x', pos: -3.2, a: -13.8, b: -6 }, { f: 0, ax: 'x', pos: 3.2, a: -13.8, b: -6 }, { f: 0, ax: 'x', pos: 0, a: 6, b: 13.8 },
      // v264 UPSTAIRS = the family floor from the video: a big HALL in the west, the lobby with the two flights in the middle, a long AISLE along the south (the new stair from the door beside the garage arrives in it), a bedroom and HARIS'S GAME ROOM in the east
      { f: 1, ax: 'z', pos: -6, a: -9.8, b: 9.8, gaps: [[-2, 2.4], [6.6, 3.0]] }, { f: 1, ax: 'x', pos: 3.4, a: -6, b: 13.8, gaps: [[0, 2.4], [9, 2.4]] },
      { f: 1, ax: 'z', pos: 6.8, a: -9.8, b: 3.4, gaps: [[-6.4, 1.8]] }, { f: 1, ax: 'x', pos: -3.2, a: 6.8, b: 13.8 }] });
  /* v268: Haris's brother's home built on to the east side of the villa: an open GARAGE below (empty, the Mehran comes later), rooms above; and the CIVIC DA GARAGE moves on to the right of it */
  { const fy0 = Math.round(rawH(pick[0], pick[1]) * 10) / 10; padRect(pick[0] - 24, pick[1] + 6, pick[0] + 43, pick[1] + 32, fy0); /* v270: a flat, plain yard in front of the villa and the two new houses (no ditches, no bumps) */ const hx2 = pick[0] + 14 + 4.5, h0 = mk('apart', hx2, pick[1], 9, 20, 'S', { fy: fy0, fh: 3.4, c: '#b5683a', doors: [{ s: 'S', o: 1.4, w: 4.0, h: 2.8 }, { s: 'N', o: 0, w: 2.0, h: 2.5 }], stair: { x0: -3.6, z0: -20 / 2 + TH / 2 + 0.45, dir: 1 } }); const bb = BUILDINGS[BUILDINGS.length - 1]; bb.home = true; bb.noLoot = true; bb.fur = null;
    mk('shop', pick[0] + 14 + 9 + 3.2, pick[1] + 5, 6, 10, 'S', { fy: fy0, fh: 3.4, c: '#d9c9a3', doors: [{ s: 'S', o: 0, w: 3.3, h: 3.1 }, { s: 'N', o: 0, w: 2.0, h: 2.5 }] }); const cb = BUILDINGS[BUILDINGS.length - 1]; cb.civic = true; cb.noLoot = true; cb.fur = null;
    cb.shutter = { x0: cb.x - 1.65, x1: cb.x + 1.65, z0: cb.z + cb.d / 2 - TH, z1: cb.z + cb.d / 2, y0: cb.fy, y1: cb.fy + 3.1, k: 'shutter', open: false }; cb.solids.push(cb.shutter); }
}
// ---- more town: houses, shops, flats and sheds scattered over the open ground, mostly beside the roads (concrete country, not meadows)
{ const RX = seeded(777), kinds = [['house', 10, 9], ['house', 11, 9], ['shop', 12, 9], ['apart', 16, 12], ['warehouse', 22, 18], ['cabin', 8, 7], ['shack', 6, 5], ['house', 10, 9], ['shop', 14, 10]], fr = ['N', 'S', 'E', 'W'];
  for (let tries = 0, n = 0; n < 48 && tries < 6000; tries++) {
    const [kind, w, d] = kinds[Math.floor(RX() * kinds.length)], x = Math.round((RX() * 2 - 1) * (H - 50)), z = Math.round((RX() * 2 - 1) * (H - 50)), m = 7;
    const dr = distRoad(x, z); if (dr < Math.max(w, d) / 2 + 3 || dr > 38 || Math.abs(x - riverX(z)) < 24 || inField(x, z, 12)) continue;
    if (x > 100 && x < 240 && z > -205 && z < -84) continue; if (x > BRIDGE.xb - 14 && x < BRIDGE.xa + 14 && Math.abs(z - BRIDGE.z) < 16) continue;
    if (BUILDINGS.some((o) => Math.abs(o.x - x) < (o.w + w) / 2 + m && Math.abs(o.z - z) < (o.d + d) / 2 + m)) continue;
    const h0 = rawH(x, z); if (h0 < 1.5 || h0 > 24) continue; let flat = true; for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) if (Math.abs(rawH(x + sx * w / 2, z + sz * d / 2) - h0) > 1.1) flat = false; if (!flat) continue;
    mk(kind, x, z, w, d, fr[Math.floor(RX() * 4)], kind === 'apart' ? { stair: { x0: -w / 2 + 2, z0: -d / 2 + TH / 2 + 0.45, dir: 1 } } : {}); n++;
  } }

// ---------------------------------------------------------------- the world: solids, trees, rocks, props, loot spots, spawns, nav grid
function build() {
  const R = seeded(2024), solids = [], trees = [], rocks = [], props = [], fences = [], bucket = new Map(), B = 8;
  const addS = (s) => { solids.push(s); for (let i = Math.floor((s.x0 - 1) / B); i <= Math.floor((s.x1 + 1) / B); i++) for (let j = Math.floor((s.z0 - 1) / B); j <= Math.floor((s.z1 + 1) / B); j++) { const k = i * 4099 + j; let a = bucket.get(k); if (!a) bucket.set(k, a = []); a.push(s); } return s; };
  const box = (x0, z0, x1, z1, y0, y1, k) => addS({ x0, z0, x1, z1, y0, y1, k });
  for (const b of BUILDINGS) for (const s of b.solids) addS(s);
  // furniture inside the rooms (bigger things are solid cover; the loot spots keep away from all of it)
  const furn = (b) => {
    const hx = b.w / 2 - TH - 0.1, hz = b.d / 2 - TH - 0.1, fy = b.fy, put = (x, z, w, d, h, c, k, solid = true) => {
      if (b.hole2 && x + w / 2 > b.hole2.x0 - 0.8 && x - w / 2 < b.hole2.x1 + 0.8 && z + d / 2 > b.hole2.z0 - 0.8 && z - d / 2 < b.hole2.z1 + 0.8) return;
      if (b.hole && x + w / 2 > b.hole.x0 - 0.8 && x - w / 2 < b.hole.x1 + 0.8 && z + d / 2 > b.hole.z0 - 0.8 && z - d / 2 < b.hole.z1 + 0.8) return;
      for (const dr of b.doors) { const al = dr.s === 'N' || dr.s === 'S', sg = dr.s === 'N' || dr.s === 'W' ? -1 : 1, ex = al ? dr.o : sg * (b.w / 2 - 1.8), ez = al ? sg * (b.d / 2 - 1.8) : dr.o; if (Math.abs(x - ex) < w / 2 + 1.9 && Math.abs(z - ez) < d / 2 + 1.9) return; }
      if (b.partDoor) { const p = b.partDoor; if (p.ax === 'z' ? (Math.abs(x - p.pos) < w / 2 + 1.5 && Math.abs(z - p.gap) < d / 2 + 2.2) : (Math.abs(z - p.pos) < d / 2 + 1.5 && Math.abs(x - p.gap) < w / 2 + 2.2)) return; if (p.ax === 'z' && Math.abs(x - p.pos) < w / 2 + 0.3) return; }
      const it = { x: b.x + x, z: b.z + z, y: fy, w, d, h, c, k }; props.push(it); if (solid && h > 0.45) addS({ x0: it.x - w / 2, z0: it.z - d / 2, x1: it.x + w / 2, z1: it.z + d / 2, y0: fy, y1: fy + h, k: 'prop' });
    };
    const f = b.fur;
    if (f === 'home') { put(-hx + 1.2, -hz + 1.2, 2.1, 1.1, 0.6, '#8a6a4a', 'bed'); put(hx - 1.2, hz - 1.0, 1.4, 0.7, 2.0, '#6a4a30', 'wardrobe'); put(0.5, 0.5, 1.6, 0.9, 0.75, '#a07848', 'table'); put(hx - 0.7, -hz + 1.4, 0.45, 0.45, 0.45, '#7a5a3a', 'chair', false); put(-1.2, hz - 0.7, 1.8, 0.5, 1.6, '#7a5638', 'shelf'); }
    else if (f === 'shop') { put(0, -hz + 2.6, Math.min(6, b.w - 4), 0.8, 1.05, '#8a6a4a', 'counter'); put(-hx + 0.6, 0, 0.5, Math.min(6, b.d - 3), 1.8, '#9a9a9a', 'shelf'); put(hx - 0.6, 1, 0.5, Math.min(5, b.d - 3), 1.8, '#9a9a9a', 'shelf'); put(0, hz - 1.6, 1.2, 1.2, 0.9, '#c9a165', 'crate'); }
    else if (f === 'school') { for (const z of [-0.8, 2.0]) for (const x of [-4, 0, 4, 8]) put(x, z, 1.4, 0.7, 0.75, '#b08a58', 'desk'); put(hx - 0.5, 0, 0.4, 3, 1.0, '#2c4a3c', 'board', false); }
    else if (f === 'church') { for (const z of [-2, 1, 4]) for (const x of [-2.2, 2.2]) put(x, z, 1.8, 0.5, 0.9, '#6a4a30', 'bench'); put(0, -hz + 1.6, 2.2, 1.0, 1.0, '#8a8a82', 'altar'); }
    else if (f === 'barn') { for (const [x, z] of [[-6, -3], [-5, 2], [6, -3], [7, 2.4]]) put(x, z, 1.5, 1.5, 1.3, '#c9a64a', 'bale'); put(0, -hz + 1.2, 3, 1.2, 1.2, '#7a5638', 'stall'); }
    else if (f === 'ware') { for (const [x, z] of [[-8, -6], [-8, 4], [0, -7], [8, 6], [8, -5], [-1, 6]]) put(x, z, 2.4, 2.4, 2.4, '#b08a58', 'pallet'); put(hx - 1.2, 0, 1.4, 4, 3.2, '#7a8a96', 'rack'); put(-hx + 1.2, -3, 1.4, 4, 3.2, '#7a8a96', 'rack'); }
    else if (f === 'barracks') { for (const z of [-3, -0.5, 2, 4]) { put(-hx + 1.2, z, 2.0, 0.9, 0.55, '#6a7a5a', 'bed'); put(hx - 1.2, z, 2.0, 0.9, 0.55, '#6a7a5a', 'bed'); } }
    else if (f === 'clinic') {
      const P = (fl, x, z, w, d, h, c, k, solid = true) => { const y = b.fy + fl * (b.fh + SL), it = { x: b.x + x, z: b.z + z, y, w, d, h, c, k }; props.push(it); if (solid && h > 0.45) addS({ x0: it.x - w / 2, z0: it.z - d / 2, x1: it.x + w / 2, z1: it.z + d / 2, y0: y, y1: y + h, k: 'prop' }); };
      P(0, -3.5, 7.2, 5, 0.9, 1.1, '#e8eef2', 'counter'); for (const x of [3.2, 4.6]) P(0, x, 8.6, 1.0, 0.5, 0.9, '#6a8fb0', 'bench');   // reception desk and waiting chairs
      P(0, -10, -6.4, 2.1, 1.0, 0.6, '#f2f5f7', 'bed'); P(0, -12.4, -4.2, 0.9, 0.5, 1.7, '#cfd8dc', 'shelf');   // admission room 1
      P(0, -10, 0, 2.1, 1.0, 0.6, '#f2f5f7', 'bed'); P(0, -10, 2.2, 1.4, 0.9, 0.75, '#cfd8dc', 'table');   // admission room 2
      for (const [x, z] of [[-10.6, 5.4], [-7.4, 5.4], [-10.6, 8.4], [-7.4, 8.4]]) P(0, x, z, 2.1, 1.0, 0.6, '#f2f5f7', 'bed');   // ward
      P(0, 10, -4.8, 1.1, 2.4, 0.95, '#dfe7ea', 'table'); P(0, 12.8, -8.4, 0.6, 3.4, 1.6, '#9fb4bf', 'shelf'); P(0, 8.2, -8.6, 2.6, 0.7, 1.0, '#b8c6cc', 'counter');   // operation theatre: the table, instrument shelves
      for (const x of [8.2, 11.6]) P(0, x, 1.6, 2.1, 1.0, 0.6, '#f2f5f7', 'bed');   // second ward (v264: the new stair from the garage-side door fills its south half)
      P(1, 0, -2, 3.2, 1.0, 0.8, '#7a5a3a', 'table'); P(1, -3.6, -4, 2.6, 0.9, 0.85, '#5a6a7a', 'bench'); P(1, 3.6, -4, 2.6, 0.9, 0.85, '#5a6a7a', 'bench');   // the lobby: a sofa each side and a table
      P(1, -9.8, -2, 3.0, 1.0, 0.8, '#7a5a3a', 'table'); P(1, -12.9, 0, 0.9, 3.4, 0.85, '#5a6a7a', 'bench'); P(1, -9.8, -8.2, 2.8, 0.9, 0.85, '#5a6a7a', 'bench'); P(1, -9.8, 4.0, 2.8, 0.9, 0.85, '#5a6a7a', 'bench'); P(1, -7.0, -9.0, 0.7, 1.2, 1.9, '#6a4a30', 'wardrobe'); P(1, -13.1, 7.6, 0.5, 2.4, 1.8, '#7a5638', 'shelf');   // the big HALL (west end)
      P(1, 10.6, -8.3, 2.1, 1.1, 0.6, '#b9835a', 'bed'); P(1, 13.2, -5.4, 0.6, 1.6, 2.0, '#6a4a30', 'wardrobe');   // the bedroom (north east)
      P(1, 10.4, -2.3, 2.6, 0.9, 0.78, '#7a5a3a', 'desk'); P(1, 10.4, -2.6, 1.0, 0.1, 0.5, '#15181c', 'screen', false); P(1, 9.0, -2.3, 0.8, 0.5, 0.5, '#111418', 'crate'); P(1, 10.4, -1.1, 0.5, 0.5, 0.5, '#2a2d33', 'chair', false); P(1, 13.0, 1.8, 1.0, 2.1, 0.6, '#b9835a', 'bed'); P(1, 7.5, 1.2, 0.5, 1.8, 1.8, '#7a5638', 'shelf');   // HARIS'S GAME ROOM (desk, monitor, PC, bed)
    }
    else if (f === 'ghar') {
      const P = (fl, x, z, w, d, h, c, k, solid = true) => { const y = b.fy + fl * (b.fh + SL), it = { x: b.x + x, z: b.z + z, y, w, d, h, c, k }; props.push(it); if (solid && h > 0.45) addS({ x0: it.x - w / 2, z0: it.z - d / 2, x1: it.x + w / 2, z1: it.z + d / 2, y0: y, y1: y + h, k: 'prop' }); };
      P(0, 6, -7, 3.2, 1.0, 0.8, '#7a5a3a', 'table'); P(0, 1.5, -2, 2.6, 0.9, 0.85, '#5a6a7a', 'bench'); P(0, 9.5, -2, 2.6, 0.9, 0.85, '#5a6a7a', 'bench'); P(0, 6, 5.5, 1.8, 0.7, 0.75, '#a07848', 'table'); P(0, 11.2, 7.5, 0.6, 3, 1.6, '#6a4a30', 'shelf');   // the ground floor hall
      P(1, -7.5, -2, 3.0, 1.0, 0.8, '#7a5a3a', 'table'); P(1, -10.8, 0, 0.9, 3.4, 0.85, '#5a6a7a', 'bench'); P(1, -7.5, -7.8, 2.8, 0.9, 0.85, '#5a6a7a', 'bench'); P(1, -7.5, 4.2, 2.8, 0.9, 0.85, '#5a6a7a', 'bench'); P(1, -4.4, -8.4, 0.7, 1.2, 1.9, '#6a4a30', 'wardrobe');   // the big HALL (upstairs, west end)
      P(1, -0.8, -8, 2.1, 1.1, 0.6, '#b9835a', 'bed'); P(1, 1.0, -4, 0.6, 1.6, 2.0, '#6a4a30', 'wardrobe');   // room 1
      P(1, 4.6, -8, 2.1, 1.1, 0.6, '#b9835a', 'bed'); P(1, 6.4, -4, 0.6, 1.6, 2.0, '#6a4a30', 'wardrobe');   // room 2
      P(1, 9.4, -8.6, 2.6, 0.9, 0.78, '#7a5a3a', 'desk'); P(1, 9.4, -8.9, 1.0, 0.1, 0.5, '#15181c', 'screen', false); P(1, 8.1, -8.6, 0.8, 0.5, 0.5, '#111418', 'crate'); P(1, 9.4, -7.4, 0.5, 0.5, 0.5, '#2a2d33', 'chair', false); P(1, 11.2, -2.5, 1.0, 2.1, 0.6, '#b9835a', 'bed'); P(1, 8.0, 2.0, 0.5, 1.8, 1.8, '#7a5638', 'shelf');   // the last room: HARIS'S GAME ROOM (desk, monitor, PC, bed)
    }
    else if (f === 'shack') { put(-hx + 0.9, -hz + 0.8, 1.8, 0.9, 0.55, '#8a6a4a', 'bed'); put(hx - 0.8, hz - 0.7, 0.9, 0.9, 0.9, '#a07848', 'table'); }
  };
  for (const b of BUILDINGS) furn(b);
  // the bridge: a solid deck with rails, pylons in the river
  { const z0 = BRIDGE.z - BRIDGE.w / 2, z1 = BRIDGE.z + BRIDGE.w / 2, y = BRIDGE.y; box(BRIDGE.xb, z0, BRIDGE.xa, z1, y - 0.5, y, 'deck'); box(BRIDGE.xb, z0, BRIDGE.xa, z0 + 0.25, y, y + 1.1, 'rail'); box(BRIDGE.xb, z1 - 0.25, BRIDGE.xa, z1, y, y + 1.1, 'rail'); }
  // outdoor props: containers, sandbags, barrels, crates, stacks of pipes
  const outside = [];
  const crate = (x, z, w = 1.3, d = 1.3, h = 1.3, c = '#9a6a3a', k = 'crate', y = null, solid = true) => { const gy = y === null ? cmbH(x, z) : y; const it = { x, z, y: gy, w, d, h, c, k }; props.push(it); if (solid) addS({ x0: x - w / 2, z0: z - d / 2, x1: x + w / 2, z1: z + d / 2, y0: gy - 0.4, y1: gy + h, k: 'prop', vault: (k === 'sandbag' || (k === 'ruin' && h <= 1.3)) ? 1 : 0 }); outside.push(it); return it; };
  const container = (x, z, along = 'x', c = '#c0482e', stack = 1) => { const w = along === 'x' ? 6.1 : 2.5, d = along === 'x' ? 2.5 : 6.1, gy = cmbH(x, z); for (let s = 0; s < stack; s++) { const it = { x, z, y: gy + s * 2.6, w, d, h: 2.6, c: s ? '#2f5d8a' : c, k: 'container' }; props.push(it); addS({ x0: x - w / 2, z0: z - d / 2, x1: x + w / 2, z1: z + d / 2, y0: gy + s * 2.6 - (s ? 0 : 0.4), y1: gy + (s + 1) * 2.6, k: 'prop' }); } };
  // the base: a fence round the compound with a gate on the south side, sandbags, containers
  const FB = { x0: 112, z0: -192, x1: 228, z1: -96, gate: [158, 174] };
  padRect(FB.x0 + 5, FB.z0 + 5, FB.x1 - 5, FB.z1 - 5, BASE_Y);
  const fence = (x0, z0, x1, z1, h = 1.15, col = '#6c7078') => { fences.push({ x0, z0, x1, z1, h, col }); const alongX = Math.abs(z1 - z0) < 0.1, n = Math.ceil(Math.hypot(x1 - x0, z1 - z0) / 6); for (let i = 0; i < n; i++) { const t0 = i / n, t1 = (i + 1) / n, ax = x0 + (x1 - x0) * t0, az = z0 + (z1 - z0) * t0, bx = x0 + (x1 - x0) * t1, bz = z0 + (z1 - z0) * t1, gy = Math.max(cmbH(ax, az), cmbH(bx, bz)); addS({ x0: Math.min(ax, bx) - (alongX ? 0 : 0.15), x1: Math.max(ax, bx) + (alongX ? 0 : 0.15), z0: Math.min(az, bz) - (alongX ? 0.15 : 0), z1: Math.max(az, bz) + (alongX ? 0.15 : 0), y0: gy - 1.5, y1: gy + h, k: 'fence', vault: 1 }); } };   /* v258: fences are LOW (1.15 m): you cannot walk through them and must VAULT them; gates and gaps let the bots through */
  const fenceGap = (x0, z0, x1, z1, g0, g1, h, col) => { const l = Math.hypot(x1 - x0, z1 - z0), f = (d) => [x0 + (x1 - x0) * d / l, z0 + (z1 - z0) * d / l]; const p0 = f(g0), p1 = f(g1); fence(x0, z0, p0[0], p0[1], h, col); fence(p1[0], p1[1], x1, z1, h, col); };
  fenceGap(FB.x0, FB.z0, FB.x1, FB.z0, 38, 54); fenceGap(FB.x0, FB.z0, FB.x0, FB.z1, 40, 56); fenceGap(FB.x1, FB.z0, FB.x1, FB.z1, 40, 56); fence(FB.x0, FB.z1, FB.gate[0], FB.z1); fence(FB.gate[1], FB.z1, FB.x1, FB.z1);   /* gates on all four sides (bots were stuck at the fence) */
  for (const [fx0, fz0, fx1, fz1] of FIELDS) { const w = fx1 - fx0, d = fz1 - fz0; fenceGap(fx0, fz0, fx1, fz0, w / 2 - 3, w / 2 + 3, 1.15, '#8a6a4a'); fenceGap(fx0, fz1, fx1, fz1, w / 2 - 3, w / 2 + 3, 1.15, '#8a6a4a'); fenceGap(fx0, fz0, fx0, fz1, d / 2 - 3, d / 2 + 3, 1.15, '#8a6a4a'); fenceGap(fx1, fz0, fx1, fz1, d / 2 - 3, d / 2 + 3, 1.15, '#8a6a4a'); }
  for (const [x, z, a] of [[105, -170, 'z'], [235, -90, 'x'], [176, -100, 'x'], [160, -100, 'x'], [165, -186, 'x']]) { if (Math.abs(x - 105) < 1) continue; container(x, z, a, ['#6a7a5a', '#8a6a4a', '#5a6a7a'][Math.floor(R() * 3)]); }
  for (let i = 0; i < 6; i++) container(236 + (i % 2) * 7, 126 + Math.floor(i / 2) * 7, 'x', ['#c0482e', '#2f5d8a', '#c9a22b', '#4a7a4a'][i % 4], i % 3 === 0 ? 2 : 1);   // the container yard (south east)
  for (const [x, z] of [[118, -108], [214, -110], [124, -178], [220, -184]]) { crate(x, z, 1.6, 0.6, 0.9, '#a89a74', 'sandbag'); crate(x + 1.8, z, 1.6, 0.6, 0.9, '#a89a74', 'sandbag'); }
  // v237: broken walls (a high piece and a lower broken piece) round the base: walls you can jump over to get across or take cover
  for (const [x, z, r] of [[132, -150, 0], [205, -135, 0], [146, -104, 1], [200, -168, 1], [168, -176, 0], [128, -124, 1]]) { crate(x, z, r ? 0.45 : 3.4, r ? 3.4 : 0.45, 1.15, '#9a978f', 'sandbag'); crate(x + (r ? 0 : 3.6), z + (r ? 3.6 : 0), r ? 0.45 : 2.2, r ? 2.2 : 0.45, 0.75, '#9a978f', 'sandbag'); }
  // three concrete towers: closed shaft, a door at the bottom, a spiral staircase inside, a flat roof with a parachute and a flag
  const tower = (x, z, flag) => {
    const y0 = Math.round(rawH(x, z) * 10) / 10; padRect(x - 7, z - 7, x + 7, z + 7, y0);
    const gy = y0, ST = TW.ST, n = TW.n, H2 = n * ST, py = gy + H2, a = TW.a, K = TW.K, S2 = TW.S2, O = TW.O, dph = 2 * Math.PI / TW.per;   // phi = the angle round the shaft: 0 = the door side (south), growing to the east, north, west...
    const W = (x0, z0, x1, z1, ya, yb, k = 'prop') => addS({ x0: x + x0, z0: z + z0, x1: x + x1, z1: z + z1, y0: ya, y1: yb, k });
    // the round wall: a ring of small cells (the collision is boxes, the drawing in battlemap.js is a real cylinder)
    { const wins = towerWins(gy), rc = S2 + 0.3, cell = 0.3, nn = 60; for (let q = 0; q < nn; q++) { const f = q * 2 * Math.PI / nn, cx = Math.sin(f) * rc, cz = Math.cos(f) * rc, door = cz > 0 && Math.abs(cx) < 1.45; const yb = door ? gy + 2.9 : gy - 1, fa = Math.atan2(cx, cz), ws = wins.filter((w) => { let d = (fa - w.ph) % (2 * Math.PI); if (d > Math.PI) d -= 2 * Math.PI; if (d < -Math.PI) d += 2 * Math.PI; return Math.abs(d) < w.hw + 0.05; });   // cells in front of a window are split: wall below the sill, wall above the lintel
      let cur = yb; for (const w of ws) { if (w.y0 > cur) W(cx - cell, cz - cell, cx + cell, cz + cell, cur, w.y0); cur = w.y1; } { let dl = (fa - TW.ledge) % (2 * Math.PI); if (dl > Math.PI) dl -= 2 * Math.PI; if (dl < -Math.PI) dl += 2 * Math.PI; W(cx - cell, cz - cell, cx + cell, cz + cell, cur, Math.abs(dl) < TW.lhw + 0.04 ? py - 0.3 : py + 1.2); } } }   // the door is on the south side, 2.9 m high; v251: a LEDGE on the east side of the roof: no parapet there, you walk off the edge
    W(-0.95, -0.95, 0.95, 0.95, gy - 1, py - 0.3); W(-K, -0.5, K, 0.5, gy - 1, py - 0.3); W(-0.5, -K, 0.5, K, gy - 1, py - 0.3);   // the round core in the middle: the stairs wind round it, nobody can fall into a well
    // the roof: a disc, open over the last steps (from the opening angle up to the door side)
    for (let ix = -5; ix < 5; ix++) for (let iz = -5; iz < 5; iz++) { const cx = ix * 0.8 + 0.4, cz = iz * 0.8 + 0.4, r = Math.hypot(cx, cz); if (r > S2 + 0.35) continue; let ph = Math.atan2(cx, cz); if (ph < 0) ph += 2 * Math.PI; if (r > K + 0.5 && ph > TW.open) continue; W(cx - 0.4, cz - 0.4, cx + 0.4, cz + 0.4, py - 0.3, py, 'floor'); }
    // the spiral: every step is a small ring of box cells (finer where it is wide) so you walk up it smoothly
    for (let i = 0; i < n; i++) { const top = gy + (i + 1) * ST;
      for (let rr = 0; rr < 5; rr++) { const r = K + 0.35 + rr * 0.4, arc = r * dph, m = Math.max(1, Math.ceil(arc / 0.45));
        for (let j = 0; j < m; j++) { const ph = i * dph + (j + 0.5) / m * dph, sn = Math.abs(Math.sin(ph)), cs = Math.abs(Math.cos(ph)), hr = 0.2, ht = arc / m / 2, hx = sn * hr + cs * ht + 0.01, hz = cs * hr + sn * ht + 0.01, px = Math.sin(ph) * r, pz = Math.cos(ph) * r; W(px - hx, pz - hz, px + hx, pz + hz, top - 0.5, top, 'step'); } } }
    props.push({ x, z, y: gy, w: 2 * O, d: 2 * O, h: H2, c: '#a5a59f', k: 'tower', flag });
    return { x, z, gy, py, n, step: ST, flag, a };
  };
  const towers = [tower(116, -186, 'pk'), tower(212, -128, 'us'), tower(0, -120, 'ps')];
  // big round things: a silo and a windmill on the farm, fuel tanks and a chimney in the yard (a solid box each; battlemap.js draws them round)
  const round = (x, z, r, h, c, t) => { const gy = cmbH(x, z); padRect(x - r - 2, z - r - 2, x + r + 2, z + r + 2, Math.round(rawH(x, z) * 10) / 10); const y = Math.round(rawH(x, z) * 10) / 10; props.push({ x, z, y, w: 2 * r, d: 2 * r, h, c, k: 'round', t, r }); addS({ x0: x - r * 0.9, z0: z - r * 0.9, x1: x + r * 0.9, z1: z + r * 0.9, y0: y - 1, y1: y + h, k: 'prop' }); };
  round(-198, 52, 3.2, 13, '#b8bcc2', 'silo'); round(-128, 84, 2.4, 14, '#d8d0c0', 'windmill');
  for (const [x, z] of [[140, 205], [140, 224], [121, 214]]) round(x, z, 5, 8, '#c9ccd0', 'tank'); round(222, 196, 1.6, 26, '#9a6a5a', 'chimney');
  // ---- forests: jittered grid, density from noise, kept off roads, buildings and the river
  const CELL = 6;
  for (let gx = -H + 14; gx < H - 14; gx += CELL) for (let gz = -H + 14; gz < H - 14; gz += CELL) {
    const x = gx + R() * CELL, z = gz + R() * CELL, f = fbm(x * 0.011 + 5, z * 0.011 - 3, 41, 3), dr = Math.abs(x - riverX(z));
    let p = smooth(0.40, 0.60, f) * 0.95 + 0.05 + (dr > 14 && dr < 44 ? 0.2 : 0); p *= 0.14; if (R() > p) continue;
    if (distRoad(x, z) < 4 || onPad(x, z, 9) || inField(x, z, 4) || (x > BRIDGE.xb - 8 && x < BRIDGE.xa + 8 && Math.abs(z - BRIDGE.z) < 9)) continue;
    if (x > FB.x0 - 2 && x < FB.x1 + 2 && z > FB.z0 - 2 && z < FB.z1 + 2) continue;
    const gy = cmbH(x, z); if (gy < -0.2) continue;
    const pine = gy > 11 || f > 0.56 ? R() < 0.82 : R() < 0.3, s = (pine ? 1.5 : 1.3) + R() * 1.0;
    trees.push({ x, z, s, pine, y: gy, r: R() * 6.28 }); addS({ x0: x - 0.32, z0: z - 0.32, x1: x + 0.32, z1: z + 0.32, y0: gy - 0.6, y1: gy + 7, k: 'tree' });
  }
  // concrete instead of boulders: jersey barriers, blocks and slabs in clusters (cover everywhere)
  { const CC = ['#9d9d98', '#a8a8a2', '#8f8f8b', '#b2b1aa'];
    for (let tries = 0, n = 0; n < 230 && tries < 9000; tries++) {
      const x = (R() * 2 - 1) * (H - 24), z = (R() * 2 - 1) * (H - 24), gy = cmbH(x, z); if (gy < 0.2 || distRoad(x, z) < 3 || onPad(x, z, 5) || inField(x, z, 3) || (x > FB.x0 - 2 && x < FB.x1 + 2 && z > FB.z0 - 2 && z < FB.z1 + 2)) continue;
      const kind = R(), ang = R() < 0.5, c = CC[Math.floor(R() * 4)]; n++;
      if (kind < 0.45) { const m = 2 + Math.floor(R() * 3); for (let i = 0; i < m; i++) { const bx = ang ? x + i * 3.2 : x, bz = ang ? z : z + i * 3.2; if (cmbH(bx, bz) < 0.2) continue; crate(bx, bz, ang ? 3.0 : 0.9, ang ? 0.9 : 3.0, 1.15, c, 'barrier'); } }
      else if (kind < 0.58) { const m = 6 + Math.floor(R() * 4), HT = [2.7, 2.6, 2.1, 1.2, 1.7, 0.8, 1.1, 2.3, 2.7, 1.5, 0.9, 2.0], o0 = Math.floor(R() * 12);   /* v258: a PUBG ruin wall: concrete with a jagged broken top; the low pieces (under 1.3 m) can be climbed over */
        for (let i = 0; i < m; i++) { const bx = ang ? x + i * 1.0 : x, bz = ang ? z : z + i * 1.0, h = HT[(o0 + i) % 12]; if (cmbH(bx, bz) < 0.2 || distRoad(bx, bz) < 3) continue; crate(bx, bz, ang ? 1.0 : 0.32, ang ? 0.32 : 1.0, h, '#b4b3ac', 'ruin'); } }
      else if (kind < 0.75) { crate(x, z, 2.2, 2.2, 1.5, c, 'barrier'); if (R() < 0.6) crate(x + 2.3, z + 0.4, 2.0, 2.0, 1.0, c, 'barrier'); if (R() < 0.35) crate(x + 0.2, z + 0.2, 1.6, 1.6, 2.6, c, 'barrier'); }
      else { crate(x, z, ang ? 5.5 : 0.6, ang ? 0.6 : 5.5, 2.4, c, 'barrier'); crate(ang ? x - 2.6 : x + 1.2, ang ? z + 1.2 : z - 2.6, ang ? 0.6 : 2.4, ang ? 2.4 : 0.6, 2.4, c, 'barrier'); }
    } }
  // some wandering crates / barrels near the buildings and roads (cover)
  for (const b of BUILDINGS) if (R() < 0.7) { const sx = (R() < 0.5 ? -1 : 1) * (b.w / 2 + 2.4), sz = (R() - 0.5) * b.d; crate(b.x + sx, b.z + sz); if (R() < 0.5) crate(b.x + sx + 1.4, b.z + sz + 0.3, 1.1, 1.1, 1.1); }
  for (let i = 0; i < 40; i++) { const x = (R() * 2 - 1) * (H - 40), z = (R() * 2 - 1) * (H - 40), gy = cmbH(x, z), dr = distRoad(x, z); if (gy < 0 || dr > 5 || dr < 1.5 || onPad(x, z, 5)) continue; crate(x, z, 0.7, 0.7, 0.95, '#6a8a9a', 'barrel'); }
  /* v263: PUBG-style oil drums beside the warehouses / hangars / barns and in the base */
  for (const b of BUILDINGS) if (b.kind === 'warehouse' || b.kind === 'hangar' || b.kind === 'barn') for (let i = 0; i < 3; i++) { const bx = b.x + b.w / 2 + 1.6, bz = b.z - 1.5 + i * 1.0; if (cmbH(bx, bz) > 0.2 && distRoad(bx, bz) > 3) crate(bx, bz, 0.7, 0.7, 0.95, '#6a8a9a', 'barrel'); }
  for (const [x, z] of [[122, -150], [123.2, -149], [215, -142], [214, -143.3], [150, -108], [151.2, -108.6], [190, -184], [191.1, -183]]) crate(x, z, 0.7, 0.7, 0.95, '#6a8a9a', 'barrel');
  // ---- the cliff wall round the map: nobody leaves
  const W = 12; for (const [x0, z0, x1, z1] of [[-H - W, -H - W, H + W, -H + 4], [-H - W, H - 4, H + W, H + W], [-H - W, -H, -H + 4, H], [H - 4, -H, H + W, H]]) addS({ x0, z0, x1, z1, y0: -5, y1: 140, k: 'cliff' });
  const open = (x, z, m) => { const gy = cmbH(x, z); const i0 = Math.floor((x - m) / B), i1 = Math.floor((x + m) / B), j0 = Math.floor((z - m) / B), j1 = Math.floor((z + m) / B); for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) { const a = bucket.get(i * 4099 + j); if (!a) continue; for (const s of a) { if (s.y1 < gy + 0.3 || s.y0 > gy + 1.6) continue; if (x > s.x0 - m && x < s.x1 + m && z > s.z0 - m && z < s.z1 + m) return false; } } return true; };
  // loot spots: inside every room, round the buildings, along the roads, in the forests (checked against everything solid: nothing is ever half inside a wall)
  const spots = [], add = (x, z, w) => { if (Math.abs(x) < H - 20 && Math.abs(z) < H - 20 && cmbH(x, z) > -0.4 && open(x, z, 1.0) && !spots.some((s) => (s.x - x) ** 2 + (s.z - z) ** 2 < 6)) spots.push(w ? { x, z, w: 1 } : { x, z }); };
  for (const b of BUILDINGS) {
    if (b.noLoot) continue;
    const ix = b.w / 2 - 1.8, iz = b.d / 2 - 1.8; for (let f = 0; f < b.fl; f++) { /* ground floor spots only: the sim has no floors */ if (f) break; for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1], [0, 0], [0.5, -0.5], [-0.5, 0.5]]) add(b.x + sx * ix, b.z + sz * iz, b.kind !== 'shack' && b.kind !== 'cabin' && (Math.floor(Math.abs(b.x * 3 + b.z * 7 + sx * 5 + sz * 11)) % 2) === 0); }   /* v264: every other room corner is a WEAPON spot: guns turn up in rooms all over the map (and because each match has its own seed, in different rooms each time) */
    for (const [sx, sz] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) add(b.x + sx * (b.w / 2 + 2.2), b.z + sz * (b.d / 2 + 2.2));
  }
  for (let i = 0; i < 1500 && spots.length < 330; i++) { const x = (R() * 2 - 1) * (H - 24), z = (R() * 2 - 1) * (H - 24), dr = distRoad(x, z); if (dr > 40 && R() < 0.6) continue; add(x, z); }
  // v258: weapons on the SECOND floors and roof terraces too (y = the floor you stand on); the clinic roof (Sada Ghar) always carries a scope, an SMG and an AK
  const openY = (x, z, m, y) => { const i0 = Math.floor((x - m) / B), i1 = Math.floor((x + m) / B), j0 = Math.floor((z - m) / B), j1 = Math.floor((z + m) / B); for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) { const a = bucket.get(i * 4099 + j); if (!a) continue; for (const q of a) { if (q.k === 'roof' || q.k === 'floor') continue; if (q.y1 < y + 0.3 || q.y0 > y + 1.6) continue; if (x > q.x0 - m && x < q.x1 + m && z > q.z0 - m && z < q.z1 + m) return false; } } return true; };
  const hasFloor = (x, z, y) => { const a = bucket.get(Math.floor(x / B) * 4099 + Math.floor(z / B)); if (!a) return false; for (const q of a) if ((q.k === 'floor' || q.k === 'roof') && Math.abs(q.y1 - y) < 0.12 && x > q.x0 + 0.2 && x < q.x1 - 0.2 && z > q.z0 + 0.2 && z < q.z1 - 0.2) return true; return false; };
  const addY = (x, z, y, o = {}) => { if (!hasFloor(x, z, y) || !openY(x, z, 0.9, y) || spots.some((q) => (q.x - x) ** 2 + (q.z - z) ** 2 < 4 && Math.abs((q.y === undefined ? 0 : q.y) - y) < 1.5)) return false; spots.push({ x, z, y, w: 1, ...o }); return true; };
  for (const b of BUILDINGS) {
    if (b.noLoot) continue;
    if ((b.fl || 1) >= 2) { const y2 = b.fy + b.fh + SL, ix = b.w / 2 - 1.8, iz = b.d / 2 - 1.8; for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1], [0, 0], [0.5, -0.5], [-0.5, 0.5], [0.5, 0.5], [-0.5, -0.5]]) { const x = b.x + sx * ix, z = b.z + sz * iz; const st = b.stairs; if (st) { const hx0 = st.dir > 0 ? st.x0 : st.x0 - (st.n - 1) * st.tread; if (x > b.x + hx0 - 2 && x < b.x + hx0 + (st.n - 1) * st.tread + 2 && z > b.z + st.z0 - 2 && z < b.z + st.z0 + st.sw + 2) continue; } addY(x, z, y2); } }
    if (b.roofStair) { const yr = b.fy + b.fl * b.fh + (b.fl - 1) * SL + SL; for (const [sx, sz] of [[-0.6, 0.5], [0.6, 0.5], [0.6, -0.3], [-0.6, -0.3], [0, 0.7]]) addY(b.x + sx * (b.w / 2 - 2.5), b.z + sz * (b.d / 2 - 2.5), yr); }
  }
  { const cl = BUILDINGS.find((q) => q.kind === 'clinic'); if (cl) { const yr = cl.fy + cl.fl * cl.fh + (cl.fl - 1) * SL + SL; let n = 0; for (const [sx, sz] of [[-3.2, 3.0], [-1.6, 3.4], [0, 3.0], [1.6, 3.4], [3.2, 3.0], [-3.2, 5.0], [0, 5.0], [3.2, 5.0], [-5, 4], [5, 4], [-7, 3], [7, 3], [-7, 6], [7, 6]]) { if (n >= 6) break; const f = ['sscope', 'sniper', 'smg', 'ak', 'ammo', 'ammo'][n]; if (hasFloor(cl.x + sx, cl.z + sz, yr) && openY(cl.x + sx, cl.z + sz, 0.6, yr)) { spots.push({ x: cl.x + sx, z: cl.z + sz, y: yr, force: f }); n++; } } } }
  const spawns = []; for (let tries = 0; spawns.length < 26 && tries < 6000; tries++) { const x = (R() * 2 - 1) * (H - 30), z = (R() * 2 - 1) * (H - 30); if (!open(x, z, 2.2) || cmbH(x, z) < 0.5 || spawns.some((s) => (s.x - x) ** 2 + (s.z - z) ** 2 < 3600)) continue; spawns.push({ x, z }); }
  // the navigation grid for the bots: 2 m cells, free when nothing solid is within 0.5 m (built the first time a match needs it)
  let nav = null;
  const L = {
    solids, trees, rocks, props, fences, buildings: BUILDINGS, roads: ROADS, bridge: BRIDGE, towers, spots, spawns, base: FB, bucket, B,
    get crates() { return outside; },
    get nav() { if (nav) return nav; const CS = 2, N = Math.round(2 * H / CS), cell = (i) => -H + (i + 0.5) * CS, free = new Uint8Array(N * N); for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) { const x = cell(i), z = cell(j); free[i * N + j] = cmbH(x, z) > -0.5 && open(x, z, 0.5) ? 1 : 0; } return (nav = { N, free, cell: CS, H }); },
  };
  return L;
}
let _L = null;
export const layout = () => _L || (_L = build());

// ---- geometry helpers (map-local coordinates, y is absolute height)
export function hitsSolid(L, x, z, r, gy) {
  if (gy === undefined) gy = cmbH(x, z); const B = L.B, i0 = Math.floor((x - r) / B), i1 = Math.floor((x + r) / B), j0 = Math.floor((z - r) / B), j1 = Math.floor((z + r) / B);
  for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) { const a = L.bucket.get(i * 4099 + j); if (!a) continue; for (const s of a) { if (s.y1 < gy + 0.3 || s.y0 > gy + 1.0) continue; if (x > s.x0 - r && x < s.x1 + r && z > s.z0 - r && z < s.z1 + r) return s; } }
  return null;
}
// the highest roof / floor / crate top under (x,z) that is at or below yTop + 0.35 (what a parachutist can land on); -1e9 when none
export function supportY(L, x, z, r, yTop) {
  const B = L.B, i0 = Math.floor((x - r) / B), i1 = Math.floor((x + r) / B), j0 = Math.floor((z - r) / B), j1 = Math.floor((z + r) / B); let best = -1e9;
  for (let i = i0; i <= i1; i++) for (let j = j0; j <= j1; j++) { const a = L.bucket.get(i * 4099 + j); if (!a) continue; for (const s of a) { if (s.k !== 'roof' && s.k !== 'floor' && s.k !== 'prop' && s.k !== 'step') continue; if (s.y1 > yTop + 0.35 || s.y1 <= best) continue; if (x > s.x0 - r && x < s.x1 + r && z > s.z0 - r && z < s.z1 + r) best = s.y1; } }
  return best;
}
// the first distance along a ray (x,z) + t*(dx,dz), t <= len, where it enters a solid at body height (walls, trees...); len when clear
export function rayWalls(L, x, z, dx, dz, len, hy = 1.3, yAbs) {
  let best = len; const y = yAbs !== undefined ? yAbs : cmbH(x, z) + hy, B = L.B, steps = Math.ceil(len / (B * 0.7)), seen = new Set();
  for (let k = 0; k <= steps; k++) {
    const px = x + dx * Math.min(len, k * B * 0.7), pz = z + dz * Math.min(len, k * B * 0.7), ci = Math.floor(px / B), cj = Math.floor(pz / B);
    for (let i = ci - 1; i <= ci + 1; i++) for (let j = cj - 1; j <= cj + 1; j++) {
      const key = i * 4099 + j; if (seen.has(key)) continue; seen.add(key); const a = L.bucket.get(key); if (!a) continue;
      for (const s of a) {
        if (s.k === 'roof' || s.k === 'floor' || s.y1 < y - 0.4 || s.y0 > y + 0.2) continue;
        let t0 = 0, t1 = best; if (Math.abs(dx) < 1e-9) { if (x < s.x0 || x > s.x1) continue; } else { let p = (s.x0 - x) / dx, q = (s.x1 - x) / dx; if (p > q) { const w = p; p = q; q = w; } t0 = Math.max(t0, p); t1 = Math.min(t1, q); }
        if (t0 > t1) continue;
        if (Math.abs(dz) < 1e-9) { if (z < s.z0 || z > s.z1) continue; } else { let p = (s.z0 - z) / dz, q = (s.z1 - z) / dz; if (p > q) { const w = p; p = q; q = w; } t0 = Math.max(t0, p); t1 = Math.min(t1, q); }
        if (t0 > t1 || t1 < 0) continue; if (t0 < best) best = Math.max(0, t0);
      }
    }
  }
  return best;
}
// v258: can a bullet fly from the bot (ground ay) to the player (height py) without crossing ANY solid (walls, pillars, floors, roofs)? 3D: samples the sloped line every 0.5 m
export function shotClear(L, ax, az, bx, bz, ay, by) {
  const dx = bx - ax, dz = bz - az, d = Math.hypot(dx, dz); if (d < 0.8) return true; const B = L.B, n = Math.ceil(d / 0.5), y0 = (ay === undefined ? cmbH(ax, az) : ay) + 1.3, y1 = (by === undefined ? cmbH(bx, bz) : by) + 1.3;
  for (let k = 1; k < n; k++) {
    const t = k / n, x = ax + dx * t, z = az + dz * t, y = y0 + (y1 - y0) * t, a = L.bucket.get(Math.floor(x / B) * 4099 + Math.floor(z / B)); if (!a) continue;
    for (const s of a) { if (y < s.y0 - 0.05 || y > s.y1 + 0.05 || x < s.x0 || x > s.x1 || z < s.z0 || z > s.z1) continue; if (k * 0.5 < 0.45 || (n - k) * 0.5 < 0.45) continue; return false; }
  }
  return true;
}
export function los(L, ax, az, bx, bz) { const dx = bx - ax, dz = bz - az, d = Math.hypot(dx, dz); if (d < 0.01) return true; return rayWalls(L, ax, az, dx / d, dz / d, d, 1.4) >= d - 0.05; }


// v254 VAULT (PUBG): only the low broken walls / sandbag rows can be climbed over. From (x,z) [map-local] heading (dx,dz) look up to 1.3 m ahead for such a piece; it must be crossed
// across its thin side (not along it), be between 0.35 and 1.4 m above the ground you stand on, and there must be free ground behind it. Returns where you land, or null.
export function vaultSpot(L, x, z, dx, dz, feetY) {   // v271: works at EVERY point of a fence / low wall: the side you stand on decides the way over (not the sign of your stick), angled approaches are fine, uphill / downhill ground is allowed, and you land just behind it (not off the edge)
  const l = Math.hypot(dx, dz); if (l < 0.01) return null; dx /= l; dz /= l; const B = L.B;
  for (let d = 0.2; d <= 1.5; d += 0.1) {
    const px = x + dx * d, pz = z + dz * d, a = L.bucket.get(Math.floor(px / B) * 4099 + Math.floor(pz / B)); if (!a) continue;
    for (const s of a) {
      if (!s.vault || px < s.x0 - 0.25 || px > s.x1 + 0.25 || pz < s.z0 - 0.25 || pz > s.z1 + 0.25) continue;
      const hgt = s.y1 - feetY; if (hgt < 0.2 || hgt > 1.7) continue;
      const thinX = s.x1 - s.x0 < s.z1 - s.z0, nx = thinX ? (x < (s.x0 + s.x1) / 2 ? 1 : -1) : 0, nz = thinX ? 0 : (z < (s.z0 + s.z1) / 2 ? 1 : -1), dot = dx * nx + dz * nz; if (dot < 0.2) continue;
      const far = thinX ? (nx > 0 ? s.x1 : s.x0) : (nz > 0 ? s.z1 : s.z0);
      for (const off of [0.65, 0.95, 1.4]) { const tx = thinX ? far + nx * off : (x + (px - x)), tz = thinX ? pz : far + nz * off; if (hitsSolid(L, tx, tz, 0.35, cmbH(tx, tz))) continue; if (Math.abs(cmbH(tx, tz) - feetY) > 1.8) continue; return { tx, tz, top: s.y1, dx: nx, dz: nz }; }
    }
  }
  return null;
}
// A* over the 2 m grid with a binary heap: returns a list of [x, z] waypoints (map-local) or null
export function findPath(L, ax, az, bx, bz) {
  const { N, free, cell } = L.nav, idx = (v) => Math.max(0, Math.min(N - 1, Math.floor((v + H) / cell)));
  const near = (i, j) => { if (free[i * N + j]) return [i, j]; for (let r = 1; r < 4; r++) for (let di = -r; di <= r; di++) for (let dj = -r; dj <= r; dj++) { const a = i + di, b = j + dj; if (a >= 0 && b >= 0 && a < N && b < N && free[a * N + b]) return [a, b]; } return null; };
  const s = near(idx(ax), idx(az)), g = near(idx(bx), idx(bz)); if (!s || !g) return null;
  const key = (i, j) => i * N + j, gs = new Map([[key(...s), 0]]), from = new Map(), closed = new Set(), heap = [[0, ...s]];
  const push = (e) => { heap.push(e); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { let m = i; const l = 2 * i + 1, r = l + 1; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
  const hh = (i, j) => Math.hypot(i - g[0], j - g[1]);
  while (heap.length) {
    const [, i, j] = pop(), kk = key(i, j); if (closed.has(kk)) continue; closed.add(kk);
    if (i === g[0] && j === g[1]) { const p = []; let c = kk; while (c !== undefined) { const ci = Math.floor(c / N), cj = c % N; p.push([-H + (ci + 0.5) * cell, -H + (cj + 0.5) * cell]); c = from.get(c); } return p.reverse(); }
    for (let di = -1; di <= 1; di++) for (let dj = -1; dj <= 1; dj++) {
      if (!di && !dj) continue; const a = i + di, b = j + dj; if (a < 0 || b < 0 || a >= N || b >= N || !free[key(a, b)]) continue;
      if (di && dj && (!free[key(i + di, j)] || !free[key(i, j + dj)])) continue;   // no cutting corners
      const ng = gs.get(kk) + (di && dj ? 1.414 : 1), nk = key(a, b); if (ng < (gs.has(nk) ? gs.get(nk) : 1e9)) { gs.set(nk, ng); from.set(nk, kk); push([ng + hh(a, b), a, b]); }
    }
    if (closed.size > 30000) return null;
  }
  return null;
}

// ---- the loot
export const LOOT_KINDS = ['pistol', 'pistol', 'revolver', 'revolver', 'smg', 'smg', 'ak', 'ak', 'm4', 'm4', 'shotgun', 'shotgun', 'sniper', 'vest', 'helmet', 'grenade', 'grenade', 'grenade', 'ammo', 'ammo', 'ammo', 'ammo', 'ammo', 'med', 'med', 'med', 'inject', 'inject', 'pills', 'pills', 'pills', 'smoke', 'smoke', 'scope', 'sscope', 'sscope'];
export const WEAPON_KINDS = ['smg', 'ak', 'm4', 'shotgun', 'sniper', 'revolver', 'pistol', 'ak', 'm4', 'smg', 'ammo', 'ammo', 'med'];
export const LOOT_COUNT = 110, LOOT_RESPAWN = 22;

// ---- the match: bots + loot + score (map-local coordinates; the scene adds CMB.x / CMB.z)
const BOT = { pistol: { cd: 0.55, dmg: 9, acc: 0.5 }, ak: { cd: 0.17, dmg: 6, acc: 0.42 } };
export class CombatSim {
  constructor(seed = 1, nBots = 8) {
    this.L = layout(); this.R = seeded(seed >>> 0 || 1); this.t = 0; this.events = []; this.kills = 0; this.deaths = 0; this.nBots = nBots;
    this.bots = []; for (let i = 0; i < nBots; i++) this.bots.push(this.newBot(i));
    this.loot = []; this.used = new Set(); for (let i = 0; i < LOOT_COUNT; i++) this.spawnLoot(); this.L.spots.forEach((sp, k) => { if (sp.force) { this.used.add(k); this.loot.push({ k: sp.force, x: sp.x, z: sp.z, y: sp.y, spot: k, alive: true, id: (this._id = (this._id || 0) + 1) }); } });
    this.Z = makeZone(seed >>> 0 || 1); this.airN = 0; this.airSent = false;   // v251: the bots follow the blue circle, the airdrop plane flies on a schedule
  }
  pick(arr) { return arr[Math.floor(this.R() * arr.length)]; }
  nearSpawn(b) { const c = this.L.spawns.filter((s) => Math.hypot(s.x - b.x, s.z - b.z) < 170 && Math.hypot(s.x - b.x, s.z - b.z) > 30); return c.length ? this.pick(c) : this.pick(this.L.spawns); }
  spawnPoint(avoid) { const L = this.L; let best = null, bd = -1; for (let i = 0; i < 6; i++) { const p = this.pick(L.spawns); const d = avoid ? Math.hypot(p.x - avoid.x, p.z - avoid.z) : 99; if (d > bd) { bd = d; best = p; } } return best; }
  newBot(i) { const p = this.spawnPoint(null), w = this.R() < 0.45 ? 'pistol' : 'ak'; return { id: i, x: p.x, z: p.z, yaw: this.R() * 6.28, hp: 100, alive: true, respawn: 0, weapon: w, path: null, pi: 0, think: 0, cool: 1, react: 0, seen: false, speed: 0, walk: false, strafe: 1, strafeT: 0, flash: 0, dieT: 0, alert: 0 }; }
  spawnLoot(avoid) {
    const L = this.L; for (let tries = 0; tries < 40; tries++) {
      const k = Math.floor(this.R() * L.spots.length); if (this.used.has(k)) continue; const s = L.spots[k];
      if (avoid && Math.hypot(s.x - avoid.x, s.z - avoid.z) < 8) continue;
      if (s.force) continue; this.used.add(k); const it = { k: this.pick(s.w ? WEAPON_KINDS : LOOT_KINDS), x: s.x, z: s.z, y: s.y, spot: k, alive: true, id: (this._id = (this._id || 0) + 1) }; this.loot.push(it); return it;
    } return null;
  }
  // v251: put an item on the ground anywhere (a dead bot's gold box, an airdrop): it vanishes after `life` seconds (0 = stays)
  addLootAt(k, x, z, o = {}) { const it = { k, x, z, spot: -1, alive: true, id: (this._id = (this._id || 0) + 1), nt: this.t + (o.nt || 0), gold: o.gold || 0, am: o.am || 0 }; if (o.life) it.exp = this.t + o.life; this.loot.push(it); this.events.push({ k: 'lootnew', id: it.id }); return it; }
  // a spot inside the circle (cx, cz, r) the bots can walk to: any spawn point of the island that lies in it, else the middle
  zoneSpot(cx, cz, r, near) { const c = this.L.spawns.filter((s) => Math.hypot(s.x - cx, s.z - cz) < r * 0.9 && (!near || Math.hypot(s.x - near.x, s.z - near.z) < near.d)); if (c.length) return this.pick(c); const a = this.R() * 6.28, d = Math.sqrt(this.R()) * r * 0.6; return { x: cx + Math.cos(a) * d, z: cz + Math.sin(a) * d }; }
  // the player walks over loot: returns the item (and removes it; a new one appears somewhere else after LOOT_RESPAWN seconds)
  take(px, pz, can, py) {   // can(item) = false leaves the item on the ground (backpack full, hands full...)
    for (const it of this.loot) { if (!it.alive || (it.nt && it.nt > this.t)) continue; if ((it.x - px) ** 2 + (it.z - pz) ** 2 < 1.8 * 1.8) { if (it.y !== undefined && py !== undefined && Math.abs(py - it.y) > 1.7) continue; if (can && !can(it)) continue; it.alive = false; if (it.spot >= 0) { if (this.L.spots[it.spot] && this.L.spots[it.spot].force) (this.pendF || (this.pendF = [])).push({ t: this.t + LOOT_RESPAWN, k: it.spot }); else { this.used.delete(it.spot); (this.pend || (this.pend = [])).push(this.t + LOOT_RESPAWN); } } this.events.push({ k: 'lootgone', id: it.id }); return it; } }
    return null;
  }
  // the nearest item within reach that take() refused (for the "E - swap" prompt)
  near(px, pz, py) { let best = null, bd = 2.2 * 2.2; for (const it of this.loot) { if (!it.alive || (it.nt && it.nt > this.t)) continue; if (it.y !== undefined && py !== undefined && Math.abs(py - it.y) > 1.7) continue; const d = (it.x - px) ** 2 + (it.z - pz) ** 2; if (d < bd) { bd = d; best = it; } } return best; }
  // the player drops something: it lies on the ground (it cannot be picked up again for 1.5 s) and never respawns
  dropLoot(k, x, z, gold) { const it = { k, x, z, spot: -1, alive: true, nt: this.t + 1.5, id: (this._id = (this._id || 0) + 1), gold: gold ? 1 : 0 }; if (gold) it.exp = this.t + 150; this.loot.push(it); this.events.push({ k: 'lootnew', id: it.id }); return it; }
  // smoke clouds block the bots' sight
  addSmoke(x, z, r = 6.5, t = 15) { (this.smokes || (this.smokes = [])).push({ x, z, r, t }); }
  smoked(ax, az, bx, bz) { if (!this.smokes) return false; for (const s of this.smokes) { const dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz || 1; let u = ((s.x - ax) * dx + (s.z - az) * dz) / l2; u = Math.max(0, Math.min(1, u)); if ((ax + dx * u - s.x) ** 2 + (az + dz * u - s.z) ** 2 < s.r * s.r) return true; } return false; }
  // a bullet from (ox,oz) along (fx,fz): the nearest bot it reaches before a wall.  returns the distance or -1
  shoot(ox, oz, fx, fz, range, dmg, yAbs, by) {
    const wall = rayWalls(this.L, ox, oz, fx, fz, range, 1.3, yAbs); let best = null, bd = Math.min(range, wall);
    for (const b of this.bots) { if (!b.alive) continue; const dx = b.x - ox, dz = b.z - oz, a = dx * fx + dz * fz; if (a < 0.2 || a > bd) continue; const pr = Math.abs(-dx * fz + dz * fx); if (pr > 0.65) continue; best = b; bd = a; }
    if (best) this.hurt(best, dmg * 34, ox, oz, by); return best ? bd : (wall < range ? wall : -1);
  }
  melee(x, z, fx, fz, reach, dmg, by) { let n = 0; for (const b of this.bots) { if (!b.alive) continue; const dx = b.x - x, dz = b.z - z, d = Math.hypot(dx, dz); if (d > reach || d < 1e-3 || (dx * fx + dz * fz) / d < 0.25) continue; this.hurt(b, dmg, x, z, by); n++; } return n; }
  blast(x, z, r, dmg, by) { for (const b of this.bots) { if (!b.alive) continue; const d = Math.hypot(b.x - x, b.z - z); if (d > r + 0.6) continue; if (d > 1.5 && !los(this.L, x, z, b.x, b.z)) continue; this.hurt(b, dmg * Math.max(0.35, 1.1 - 0.65 * d / r) * 28, x, z, by); } }
  hurt(b, d, fromX, fromZ, by) {
    if (!b.alive) return; b.hp -= d; b.flash = 0.15; b.alert = 8; if (b.hp <= 0) { b.alive = false; b.respawn = 7; b.dieT = 0; this.kills++; this.events.push({ k: 'kill', id: b.id, x: b.x, z: b.z, w: b.weapon, by });
      const gk = [b.weapon, 'ammo', this.pick(['ammo', 'med', 'inject', 'pills', 'grenade', 'smoke'])]; gk.forEach((k, i) => { const a = i * 2.1 + 0.5, ox = Math.cos(a) * 0.7, oz = Math.sin(a) * 0.7, ok = !hitsSolid(this.L, b.x + ox, b.z + oz, 0.2); this.addLootAt(k, b.x + (ok ? ox : 0), b.z + (ok ? oz : 0), { gold: 1, life: 150, am: k === 'ak' ? { mag: 30, res: 60 } : k === 'pistol' ? { mag: 12, res: 24 } : 0 }); }); }   // v251: a dead bot leaves a GOLD box with its gun + ammo (+ one more thing) for whoever shot it
   
    else this.events.push({ k: 'bothit', id: b.id, x: b.x, z: b.z });
  }
  // move a circle through the walls (slides along them)
  step(o, dx, dz, r = 0.45) {
    const L = this.L; let nx = o.x + dx; if (!hitsSolid(L, nx, o.z, r)) o.x = nx; let nz = o.z + dz; if (!hitsSolid(L, o.x, nz, r)) o.z = nz;
  }
  tick(dt, PA) {   // PA = { x, z, hp, alive } of the player (map-local) - v245: or a LIST of players (the shared match on the server): every bot fights the nearest one
    this.t += dt; const L = this.L, PL = Array.isArray(PA) ? PA : [PA], P0 = PL[0];
    if (this.smokes) { for (const sm of this.smokes) sm.t -= dt; this.smokes = this.smokes.filter((sm) => sm.t > 0); }
    const zn = this.Z ? zoneAt(this.Z, this.t) : null; this._zn = zn;
    for (const it of this.loot) if (it.alive && it.exp && this.t > it.exp) { it.alive = false; this.events.push({ k: 'lootgone', id: it.id }); }
    if (this.Z && this.airN < this.Z.AD.length) {   // v251: the airdrop: the plane appears, later the crate lands and its loot lies there for everybody
      const n = this.airN, q = this.Z.AD[n];
      if (!this.airSent && this.t >= q.t0) { this.airSent = true; const pt = airPoint(this.Z, n); this.events.push({ k: 'airplane', n, x: pt.x, z: pt.z, hd: pt.hd }); }
      if (this.airSent && this.t >= airLand(q)) { const pt = airPoint(this.Z, n); this.airSent = false; this.airN++; const gun = ['m4', 'ak', 'sniper'][n % 3], ks = [gun, gun === 'sniper' ? 'sscope' : 'ammo', 'ammo', 'ammo', 'med', 'med', 'inject', 'grenade'];
        ks.forEach((k, i) => { const a = i * 0.785, ox = Math.cos(a) * 1.5, oz = Math.sin(a) * 1.5, ok = !hitsSolid(this.L, pt.x + ox, pt.z + oz, 0.2); this.addLootAt(k, pt.x + (ok ? ox : 0), pt.z + (ok ? oz : 0), { gold: 2, life: 400, am: k === 'm4' || k === 'ak' ? { mag: 30, res: 90 } : k === 'sniper' ? { mag: 5, res: 20 } : 0 }); });
        this.events.push({ k: 'airland', n, x: pt.x, z: pt.z }); }
    }
    if (this.pendF) for (let i = this.pendF.length - 1; i >= 0; i--) if (this.t >= this.pendF[i].t) { const sp = this.L.spots[this.pendF[i].k]; this.pendF.splice(i, 1); const it = { k: sp.force, x: sp.x, z: sp.z, y: sp.y, spot: this.L.spots.indexOf(sp), alive: true, id: (this._id = (this._id || 0) + 1) }; this.loot.push(it); this.events.push({ k: 'lootnew', id: it.id }); }
    if (this.pend) for (let i = this.pend.length - 1; i >= 0; i--) if (this.t >= this.pend[i]) { this.pend.splice(i, 1); const it = this.spawnLoot(P0); if (it) this.events.push({ k: 'lootnew', id: it.id }); }
    if (this.loot.length > LOOT_COUNT + 6) this.loot = this.loot.filter((it) => it.alive);
    for (const b of this.bots) {
      if (!b.alive) { b.dieT += dt; b.respawn -= dt; if (b.respawn <= 0) { let p = this.spawnPoint(P0); const w = b.weapon; if (zn && Math.hypot(p.x - zn.x, p.z - zn.z) > zn.r * 0.95) p = this.zoneSpot(zn.x, zn.z, zn.r); Object.assign(b, this.newBot(b.id), { x: p.x, z: p.z, weapon: w }); this.events.push({ k: 'bot', id: b.id }); } continue; }
      if (b.flash > 0) b.flash -= dt; if (b.alert > 0) b.alert -= dt;
      if (zn && Math.hypot(b.x - zn.x, b.z - zn.z) > zn.r + 2) { b.zt = (b.zt || 0) + dt; if (b.zt >= 1) { b.zt -= 1; this.hurt(b, zn.dps * 0.7, 0, 0, -2); if (!b.alive) continue; } } else b.zt = 0;   // v251: bots take the blue-circle damage too
      let P = P0; if (PL.length > 1) { let bd = 1e18; for (const q of PL) { const dd = (q.x - b.x) ** 2 + (q.z - b.z) ** 2 + (q.alive ? 0 : 1e6); if (dd < bd) { bd = dd; P = q; } } }   // v245: the nearest living player
      const dx = P.x - b.x, dz = P.z - b.z, d = Math.hypot(dx, dz) || 1;
      let sees = P.alive && d < (b.alert > 0 ? 70 : 48) && los(L, b.x, b.z, P.x, P.z) && !this.smoked(b.x, b.z, P.x, P.z);
      if (sees && b.alert <= 0) { let da = Math.atan2(dx, dz) - b.yaw; da = Math.abs(Math.atan2(Math.sin(da), Math.cos(da))); if (da > 1.9 && d > 10) sees = false; }
      if (sees && !b.seen) { b.seen = true; b.react = 0.55 + this.R() * 0.4; } else if (!sees && b.seen) { b.seen = false; b.alert = Math.max(b.alert, 6); b.path = null; }
      let mx = 0, mz = 0, sp = 0;
      if (sees) {   // fight: face the player, keep a distance, strafe, shoot
        const want = Math.atan2(dx, dz); let da = Math.atan2(Math.sin(want - b.yaw), Math.cos(want - b.yaw)); b.yaw += da * Math.min(1, dt * 7);
        b.strafeT -= dt; if (b.strafeT <= 0) { b.strafeT = 1 + this.R() * 1.6; b.strafe = this.R() < 0.5 ? -1 : 1; }
        const ux = dx / d, uz = dz / d; let f = d > 26 ? 1 : d < 12 ? -0.7 : 0.15; mx = ux * f - uz * b.strafe * 0.8; mz = uz * f + ux * b.strafe * 0.8; sp = 3.3; b.walk = false;
        if (b.react > 0) b.react -= dt; else { b.cool -= dt; if (b.cool <= 0) { const W = BOT[b.weapon]; b.cool = W.cd * (0.85 + this.R() * 0.5); const acc = Math.max(0.06, W.acc - d / 160); if (!shotClear(L, b.x, b.z, P.x, P.z, undefined, P.y)) { b.cool = 0.25; b.seen = false; b.alert = Math.max(b.alert, 4); continue; } const hit = this.R() < acc; this.events.push({ k: 'shot', id: b.id, x: b.x, z: b.z, tx: P.x, tz: P.z, tp: P.id, hit, dmg: hit ? W.dmg * (0.8 + this.R() * 0.5) : 0, w: b.weapon }); } }
      } else {   // roam: follow a path to somewhere far, or (when alerted) go to where the player is
        b.think -= dt;
        if (!b.path || b.pi >= b.path.length || b.think <= 0) {
          b.think = 5 + this.R() * 5; let tgt = b.alert > 0 && d < 70 ? { x: P.x, z: P.z } : this.nearSpawn(b);
          if (zn) { const out = Math.hypot(b.x - zn.nx, b.z - zn.nz) > zn.nr * 0.92, tOut = Math.hypot(tgt.x - zn.nx, tgt.z - zn.nz) > zn.nr; if (out || tOut) { tgt = this.zoneSpot(zn.nx, zn.nz, zn.nr, out ? null : { x: b.x, z: b.z, d: 150 }); if (out) b.think = 4 + this.R() * 3; } }   /* v251: stay inside the NEXT circle: run into it as soon as it is shown */
          b.path = findPath(L, b.x, b.z, tgt.x, tgt.z); b.pi = 0;
        }
        if (b.path && b.pi < b.path.length) {
          const [wx, wz] = b.path[b.pi], ex = wx - b.x, ez = wz - b.z, ed = Math.hypot(ex, ez); if (ed < 1.4) b.pi++; else { mx = ex / ed; mz = ez / ed; sp = b.alert > 0 || (zn && Math.hypot(b.x - zn.nx, b.z - zn.nz) > zn.nr) ? 4.2 : 2.2; b.walk = b.alert <= 0; const want = Math.atan2(ex, ez); const da = Math.atan2(Math.sin(want - b.yaw), Math.cos(want - b.yaw)); b.yaw += da * Math.min(1, dt * 8); }
        }
      }
      const l = Math.hypot(mx, mz); if (l > 0.01 && sp > 0) { this.step(b, mx / l * sp * dt, mz / l * sp * dt); b.speed = sp; } else b.speed = 0;
    }
  }
  drain() { const e = this.events; this.events = []; return e; }
}
// v269: the CIVIC DA GARAGE shutter: open = the solid is pushed far below the ground (nothing hits it, cars drive through); closed = it fills the doorway again
export function setShutter(b, open) { const s = b && b.shutter; if (!s) return; if (s.oy1 === undefined) { s.oy0 = s.y0; s.oy1 = s.y1; } s.open = !!open; s.y0 = open ? -9999 : s.oy0; s.y1 = open ? -9998 : s.oy1; s._cb = null; if (s._ws) s._ws.active = !open; }
