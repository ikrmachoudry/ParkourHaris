// COMBAT MISSION: the hidden battle map (far outside the city, no road leads there) and the bots that fight on it.
// This file has NO three.js and no DOM: the map layout (walls, rooms, trees, loot spots) and the bot brain are plain data and maths, so they can be unit tested in node.
export const CMB = { x: 1500, z: 1500, half: 110 };   // map centre (the server accepts positions up to 2000) and half size: 220 x 220 m
export const COMBAT_MS = 300000;                        // a match lasts 5 minutes
export const cmbInside = (x, z) => Math.abs(x - CMB.x) < CMB.half + 8 && Math.abs(z - CMB.z) < CMB.half + 8;

const seeded = (s) => () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
const T = 0.4;   // wall thickness

// a room: four walls with door gaps, a roof slab, an optional inner wall (two rooms).  Everything in map-local metres; returns solids {x0,z0,x1,z1,y0,y1,k}
function room(o) {
  const out = [], hx = o.w / 2, hz = o.d / 2, h = o.h, dw = 3.4, DH = 2.8;
  const wall = (x0, z0, x1, z1, y0, y1, k = 'wall') => out.push({ x0: o.x + x0, z0: o.z + z0, x1: o.x + x1, z1: o.z + z1, y0, y1, k });
  const doors = o.doors || [];
  const side = (s, alongX, fixed, len) => {
    const ds = doors.filter((d) => d.s === s).map((d) => d.o).sort((a, b) => a - b); let a = -len / 2;
    const seg = (p, q, y0, y1) => { if (q - p < 0.05) return; if (alongX) wall(p, fixed - T / 2, q, fixed + T / 2, y0, y1); else wall(fixed - T / 2, p, fixed + T / 2, q, y0, y1); };
    for (const d of ds) { seg(a, d - dw / 2, 0, h); seg(d - dw / 2, d + dw / 2, DH, h); a = d + dw / 2; }   // (above a door: the lintel)
    seg(a, len / 2, 0, h);
  };
  side('N', true, -hz, o.w); side('S', true, hz, o.w); side('W', false, -hx, o.d); side('E', false, hx, o.d);
  if (o.part) {   // inner wall with a doorway: part = { ax: 'x' wall runs along x at z = pos | 'z' wall runs along z at x = pos, pos, gap }
    const p = o.part, len = p.ax === 'x' ? o.w : o.d; let a = -len / 2;
    const seg = (s, e, y0, y1) => { if (e - s < 0.05) return; if (p.ax === 'x') wall(s, p.pos - T / 2, e, p.pos + T / 2, y0, y1); else wall(p.pos - T / 2, s, p.pos + T / 2, e, y0, y1); };
    seg(a, p.gap - dw / 2, 0, h); seg(p.gap - dw / 2, p.gap + dw / 2, DH, h); seg(p.gap + dw / 2, len / 2, 0, h);
  }
  wall(-hx - 0.3, -hz - 0.3, hx + 0.3, hz + 0.3, h, h + 0.3, 'roof');
  return out;
}

export const BUILDINGS = [
  { x: 45, z: -62, w: 24, d: 16, h: 4, doors: [{ s: 'S', o: -6 }, { s: 'W', o: 2 }], part: { ax: 'z', pos: 3, gap: -2 }, c: '#c9b79a' },
  { x: 82, z: -58, w: 16, d: 14, h: 4, doors: [{ s: 'N', o: 0 }, { s: 'W', o: -2 }, { s: 'S', o: 3 }], c: '#b7c4cc' },
  { x: 45, z: 55, w: 20, d: 18, h: 4, doors: [{ s: 'N', o: 4 }, { s: 'S', o: -3 }], part: { ax: 'x', pos: 1, gap: 4 }, c: '#d1b39a' },
  { x: 84, z: 48, w: 26, d: 22, h: 6.5, doors: [{ s: 'W', o: -5 }, { s: 'W', o: 6 }, { s: 'N', o: 0 }], c: '#9aa6a0' },   // the warehouse
  { x: 56, z: -14, w: 8, d: 8, h: 3, doors: [{ s: 'N', o: 0 }, { s: 'S', o: 0 }], c: '#c4a882' },
  { x: -58, z: -68, w: 10, d: 8, h: 3.2, doors: [{ s: 'E', o: 0 }], c: '#8a6a4a' },    // jungle cabins
  { x: -62, z: 58, w: 10, d: 8, h: 3.2, doors: [{ s: 'N', o: 0 }, { s: 'E', o: 1 }], c: '#8a6a4a' },
  { x: -20, z: 78, w: 14, d: 10, h: 3.6, doors: [{ s: 'N', o: -2 }, { s: 'E', o: 0 }], c: '#b9a58a' },
];
export const ROADS = [   // visual only (the ground is flat): x0,z0,x1,z1,width
  [-110, 0, 110, 0, 9], [0, -110, 0, 110, 9], [30, -75, 30, 75, 7], [-70, -40, -70, 40, 5], [-70, 0, 0, 0, 5],
];

function build() {
  const R = seeded(2024), solids = [], trees = [], rocks = [], crates = [], H = CMB.half;
  for (const b of BUILDINGS) solids.push(...room(b));
  // crates along the inner walls of the bigger buildings (cover) and a few outdoors
  const crate = (x, z, s = 1.4) => { crates.push({ x, z, s }); solids.push({ x0: x - s / 2, z0: z - s / 2, x1: x + s / 2, z1: z + s / 2, y0: 0, y1: s, k: 'crate' }); };
  for (const b of BUILDINGS) if (b.w >= 14) { const ix = b.w / 2 - 1.3, iz = b.d / 2 - 1.3; crate(b.x - ix, b.z + iz); crate(b.x + ix, b.z - iz); if (b.w >= 20) { crate(b.x + ix, b.z + iz); crate(b.x - ix + 1.5, b.z + iz); } }
  for (const [x, z] of [[18, -12], [20, 14], [38, 12], [70, 8], [-12, 24], [-28, -22], [8, 40], [14, -48], [72, -32], [96, 8]]) { crate(x, z); if (R() < 0.6) crate(x + 1.5, z + 0.2, 1.1); }
  // the bus shelter in the middle: four posts and a roof
  for (const [x, z] of [[-8, -30], [-2, -30], [-8, -36], [-2, -36]]) solids.push({ x0: x - 0.2, z0: z - 0.2, x1: x + 0.2, z1: z + 0.2, y0: 0, y1: 4.5, k: 'post' });
  solids.push({ x0: -9, z0: -37, x1: -1, z1: -29, y0: 4.2, y1: 4.5, k: 'roof' });
  // the cliff wall round the map: nobody leaves
  const W = 6; for (const [x0, z0, x1, z1] of [[-H - W, -H - W, H + W, -H], [-H - W, H, H + W, H + W], [-H - W, -H, -H, H], [H, -H, H + W, H]]) solids.push({ x0, z0, x1, z1, y0: 0, y1: 16, k: 'cliff' });
  const open = (x, z, m) => { for (const s of solids) { if (s.y1 < 0.3 || s.y0 > 1.6) continue; if (x > s.x0 - m && x < s.x1 + m && z > s.z0 - m && z < s.z1 + m) return false; } return true; };
  const onRoad = (x, z, m = 0) => ROADS.some(([a, b, c, d, w]) => x > Math.min(a, c) - w / 2 - m && x < Math.max(a, c) + w / 2 + m && z > Math.min(b, d) - w / 2 - m && z < Math.max(b, d) + w / 2 + m);
  // jungle: the whole west half is thick with trees and rocks
  let tries = 0; while (trees.length < 230 && tries++ < 4000) {
    const x = -H + 4 + R() * (H - 4 - 6), z = -H + 4 + R() * (2 * H - 8); if (onRoad(x, z, 2.5) || !open(x, z, 3.2)) continue;
    if (trees.some((t) => (t.x - x) ** 2 + (t.z - z) ** 2 < 14)) continue;
    const s = 1.7 + R() * 1.1; trees.push({ x, z, s }); solids.push({ x0: x - 0.35, z0: z - 0.35, x1: x + 0.35, z1: z + 0.35, y0: 0, y1: 6, k: 'tree' });
  }
  tries = 0; while (rocks.length < 40 && tries++ < 3000) {
    const x = -H + 5 + R() * (2 * H - 10), z = -H + 5 + R() * (2 * H - 10); if (onRoad(x, z, 2.5) || !open(x, z, 3)) continue;
    const s = 0.9 + R() * 0.8; rocks.push({ x, z, s }); solids.push({ x0: x - s, z0: z - s, x1: x + s, z1: z + s, y0: 0, y1: s * 1.3, k: 'rock' });
  }
  // a few trees round the compound and along the roads
  for (let i = 0; i < 26; i++) { const x = -5 + R() * 112, z = -H + 6 + R() * (2 * H - 12); if (onRoad(x, z, 3) || !open(x, z, 3.5) || trees.some((t) => (t.x - x) ** 2 + (t.z - z) ** 2 < 25)) continue; const s = 1.5 + R() * 0.8; trees.push({ x, z, s }); solids.push({ x0: x - 0.3, z0: z - 0.3, x1: x + 0.3, z1: z + 0.3, y0: 0, y1: 6, k: 'tree' }); }
  // loot spots: inside every room, on the roads, in the jungle (all checked against the walls: nothing is ever half inside a wall)
  const spots = [], add = (x, z) => { if (Math.abs(x) < H - 3 && Math.abs(z) < H - 3 && open(x, z, 1.0) && !spots.some((s) => (s.x - x) ** 2 + (s.z - z) ** 2 < 9)) spots.push({ x, z }); };
  for (const b of BUILDINGS) { const ix = b.w / 2 - 2.6, iz = b.d / 2 - 2.6; for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1], [0, 0]]) add(b.x + sx * ix, b.z + sz * iz); if (b.w >= 14) add(b.x + 2.5, b.z - 1.5); }
  for (let i = 0; i < 400 && spots.length < 90; i++) { const x = -H + 6 + R() * (2 * H - 12), z = -H + 6 + R() * (2 * H - 12); if (!open(x, z, 2.2)) continue; add(x, z); }
  const spawns = []; tries = 0; while (spawns.length < 20 && tries++ < 3000) { const x = -H + 8 + R() * (2 * H - 16), z = -H + 8 + R() * (2 * H - 16); if (!open(x, z, 2.2) || spawns.some((s) => (s.x - x) ** 2 + (s.z - z) ** 2 < 900)) continue; spawns.push({ x, z }); }
  // the navigation grid for the bots: 2 m cells, free when nothing solid is within 0.55 m
  const CS = 2, N = Math.round(2 * H / CS), cell = (i) => -H + (i + 0.5) * CS, free = new Uint8Array(N * N);
  for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) free[i * N + j] = open(cell(i), cell(j), 0.5) ? 1 : 0;
  return { solids, trees, rocks, crates, spots, spawns, nav: { N, free, cell: CS, H } };
}
let _L = null;
export const layout = () => _L || (_L = build());

// ---- geometry helpers (map-local coordinates, y is height)
export function hitsSolid(L, x, z, r, y = 1.0) { for (const s of L.solids) { if (s.y1 < 0.3 || s.y0 > y) continue; if (x > s.x0 - r && x < s.x1 + r && z > s.z0 - r && z < s.z1 + r) return s; } return null; }
// the first distance along a ray (x,z) + t*(dx,dz), t <= len, where it enters a solid that is between y0..y1 high (walls, trees...); len when clear
export function rayWalls(L, x, z, dx, dz, len, y = 1.3) {
  let best = len;
  for (const s of L.solids) {
    if (s.k === 'roof' || s.y1 < y - 0.4 || s.y0 > y + 0.2) continue;
    let t0 = 0, t1 = best; if (Math.abs(dx) < 1e-9) { if (x < s.x0 || x > s.x1) continue; } else { let a = (s.x0 - x) / dx, b = (s.x1 - x) / dx; if (a > b) { const q = a; a = b; b = q; } t0 = Math.max(t0, a); t1 = Math.min(t1, b); }
    if (t0 > t1) continue;
    if (Math.abs(dz) < 1e-9) { if (z < s.z0 || z > s.z1) continue; } else { let a = (s.z0 - z) / dz, b = (s.z1 - z) / dz; if (a > b) { const q = a; a = b; b = q; } t0 = Math.max(t0, a); t1 = Math.min(t1, b); }
    if (t0 > t1 || t1 < 0) continue; if (t0 < best) best = Math.max(0, t0);
  }
  return best;
}
export function los(L, ax, az, bx, bz) { const dx = bx - ax, dz = bz - az, d = Math.hypot(dx, dz); if (d < 0.01) return true; return rayWalls(L, ax, az, dx / d, dz / d, d, 1.4) >= d - 0.05; }

// A* over the 3 m grid: returns a list of [x, z] waypoints (map-local) or null
export function findPath(L, ax, az, bx, bz) {
  const { N, free, cell, H } = L.nav, idx = (v) => Math.max(0, Math.min(N - 1, Math.floor((v + H) / cell)));
  const near = (i, j) => { if (free[i * N + j]) return [i, j]; for (let r = 1; r < 4; r++) for (let di = -r; di <= r; di++) for (let dj = -r; dj <= r; dj++) { const a = i + di, b = j + dj; if (a >= 0 && b >= 0 && a < N && b < N && free[a * N + b]) return [a, b]; } return null; };
  const s = near(idx(ax), idx(az)), g = near(idx(bx), idx(bz)); if (!s || !g) return null;
  const key = (i, j) => i * N + j, gs = new Map([[key(...s), 0]]), from = new Map(), open = [[0, ...s]], closed = new Set();
  const hh = (i, j) => Math.hypot(i - g[0], j - g[1]);
  while (open.length) {
    let bi = 0; for (let k = 1; k < open.length; k++) if (open[k][0] < open[bi][0]) bi = k; const [, i, j] = open.splice(bi, 1)[0], kk = key(i, j);
    if (closed.has(kk)) continue; closed.add(kk);
    if (i === g[0] && j === g[1]) { const p = []; let c = kk; while (c !== undefined) { const ci = Math.floor(c / N), cj = c % N; p.push([-H + (ci + 0.5) * cell, -H + (cj + 0.5) * cell]); c = from.get(c); } return p.reverse(); }
    for (let di = -1; di <= 1; di++) for (let dj = -1; dj <= 1; dj++) {
      if (!di && !dj) continue; const a = i + di, b = j + dj; if (a < 0 || b < 0 || a >= N || b >= N || !free[key(a, b)]) continue;
      if (di && dj && (!free[key(i + di, j)] || !free[key(i, j + dj)])) continue;   // no cutting corners
      const ng = gs.get(kk) + (di && dj ? 1.414 : 1), nk = key(a, b); if (ng < (gs.has(nk) ? gs.get(nk) : 1e9)) { gs.set(nk, ng); from.set(nk, kk); open.push([ng + hh(a, b), a, b]); }
    }
    if (closed.size > 12000) return null;
  }
  return null;
}

// ---- the loot
export const LOOT_KINDS = ['pistol', 'pistol', 'revolver', 'revolver', 'smg', 'smg', 'ak', 'ak', 'm4', 'm4', 'shotgun', 'shotgun', 'sniper', 'bat', 'bat', 'grenade', 'grenade', 'grenade', 'ammo', 'ammo', 'ammo', 'ammo', 'ammo', 'med', 'med', 'med'];
export const LOOT_COUNT = 34, LOOT_RESPAWN = 22;

// ---- the match: bots + loot + score (map-local coordinates; the scene adds CMB.x / CMB.z)
const BOT = { pistol: { cd: 0.55, dmg: 9, acc: 0.5 }, ak: { cd: 0.17, dmg: 6, acc: 0.42 } };
export class CombatSim {
  constructor(seed = 1, nBots = 8) {
    this.L = layout(); this.R = seeded(seed >>> 0 || 1); this.t = 0; this.events = []; this.kills = 0; this.deaths = 0; this.nBots = nBots;
    this.bots = []; for (let i = 0; i < nBots; i++) this.bots.push(this.newBot(i));
    this.loot = []; this.used = new Set(); for (let i = 0; i < LOOT_COUNT; i++) this.spawnLoot();
  }
  pick(arr) { return arr[Math.floor(this.R() * arr.length)]; }
  spawnPoint(avoid) { const L = this.L; let best = null, bd = -1; for (let i = 0; i < 6; i++) { const p = this.pick(L.spawns); const d = avoid ? Math.hypot(p.x - avoid.x, p.z - avoid.z) : 99; if (d > bd) { bd = d; best = p; } } return best; }
  newBot(i) { const p = this.spawnPoint(null), w = this.R() < 0.45 ? 'pistol' : 'ak'; return { id: i, x: p.x, z: p.z, yaw: this.R() * 6.28, hp: 100, alive: true, respawn: 0, weapon: w, path: null, pi: 0, think: 0, cool: 1, react: 0, seen: false, speed: 0, walk: false, strafe: 1, strafeT: 0, flash: 0, dieT: 0, alert: 0 }; }
  spawnLoot(avoid) {
    const L = this.L; for (let tries = 0; tries < 40; tries++) {
      const k = Math.floor(this.R() * L.spots.length); if (this.used.has(k)) continue; const s = L.spots[k];
      if (avoid && Math.hypot(s.x - avoid.x, s.z - avoid.z) < 8) continue;
      this.used.add(k); const it = { k: this.pick(LOOT_KINDS), x: s.x, z: s.z, spot: k, alive: true, id: (this._id = (this._id || 0) + 1) }; this.loot.push(it); return it;
    } return null;
  }
  // the player walks over loot: returns the item (and removes it; a new one appears somewhere else after LOOT_RESPAWN seconds)
  take(px, pz) {
    for (const it of this.loot) { if (!it.alive) continue; if ((it.x - px) ** 2 + (it.z - pz) ** 2 < 1.5 * 1.5) { it.alive = false; this.used.delete(it.spot); this.events.push({ k: 'lootgone', id: it.id }); (this.pend || (this.pend = [])).push(this.t + LOOT_RESPAWN); return it; } }
    return null;
  }
  // a bullet from (ox,oz) along (fx,fz): the nearest bot it reaches before a wall.  returns the distance or -1
  shoot(ox, oz, fx, fz, range, dmg) {
    const wall = rayWalls(this.L, ox, oz, fx, fz, range, 1.3); let best = null, bd = Math.min(range, wall);
    for (const b of this.bots) { if (!b.alive) continue; const dx = b.x - ox, dz = b.z - oz, a = dx * fx + dz * fz; if (a < 0.2 || a > bd) continue; const pr = Math.abs(-dx * fz + dz * fx); if (pr > 0.65) continue; best = b; bd = a; }
    if (best) this.hurt(best, dmg * 34, ox, oz); return best ? bd : (wall < range ? wall : -1);
  }
  melee(x, z, fx, fz, reach, dmg) { let n = 0; for (const b of this.bots) { if (!b.alive) continue; const dx = b.x - x, dz = b.z - z, d = Math.hypot(dx, dz); if (d > reach || d < 1e-3 || (dx * fx + dz * fz) / d < 0.25) continue; this.hurt(b, dmg, x, z); n++; } return n; }
  blast(x, z, r, dmg) { for (const b of this.bots) { if (!b.alive) continue; const d = Math.hypot(b.x - x, b.z - z); if (d > r + 0.6) continue; if (d > 1.5 && !los(this.L, x, z, b.x, b.z)) continue; this.hurt(b, dmg * Math.max(0.35, 1.1 - 0.65 * d / r) * 28, x, z); } }
  hurt(b, d, fromX, fromZ) {
    if (!b.alive) return; b.hp -= d; b.flash = 0.15; b.alert = 8; if (b.hp <= 0) { b.alive = false; b.respawn = 7; b.dieT = 0; this.kills++; this.events.push({ k: 'kill', id: b.id, x: b.x, z: b.z, w: b.weapon }); }
    else this.events.push({ k: 'bothit', id: b.id, x: b.x, z: b.z });
  }
  // move a circle through the walls (slides along them)
  step(o, dx, dz, r = 0.45) {
    const L = this.L; let nx = o.x + dx; if (!hitsSolid(L, nx, o.z, r, 1.0)) o.x = nx; let nz = o.z + dz; if (!hitsSolid(L, o.x, nz, r, 1.0)) o.z = nz;
  }
  tick(dt, P) {   // P = { x, z, hp, alive } of the player (map-local)
    this.t += dt; const L = this.L;
    if (this.pend) for (let i = this.pend.length - 1; i >= 0; i--) if (this.t >= this.pend[i]) { this.pend.splice(i, 1); const it = this.spawnLoot(P); if (it) this.events.push({ k: 'lootnew', id: it.id }); }
    if (this.loot.length > LOOT_COUNT + 6) this.loot = this.loot.filter((it) => it.alive);
    for (const b of this.bots) {
      if (!b.alive) { b.dieT += dt; b.respawn -= dt; if (b.respawn <= 0) { const p = this.spawnPoint(P), w = b.weapon; Object.assign(b, this.newBot(b.id), { x: p.x, z: p.z, weapon: w }); this.events.push({ k: 'bot', id: b.id }); } continue; }
      if (b.flash > 0) b.flash -= dt; if (b.alert > 0) b.alert -= dt;
      const dx = P.x - b.x, dz = P.z - b.z, d = Math.hypot(dx, dz) || 1;
      let sees = P.alive && d < (b.alert > 0 ? 70 : 48) && los(L, b.x, b.z, P.x, P.z);
      if (sees && b.alert <= 0) { let da = Math.atan2(dx, dz) - b.yaw; da = Math.abs(Math.atan2(Math.sin(da), Math.cos(da))); if (da > 1.9 && d > 10) sees = false; }
      if (sees && !b.seen) { b.seen = true; b.react = 0.55 + this.R() * 0.4; } else if (!sees && b.seen) { b.seen = false; b.alert = Math.max(b.alert, 6); b.path = null; }
      let mx = 0, mz = 0, sp = 0;
      if (sees) {   // fight: face the player, keep a distance, strafe, shoot
        const want = Math.atan2(dx, dz); let da = Math.atan2(Math.sin(want - b.yaw), Math.cos(want - b.yaw)); b.yaw += da * Math.min(1, dt * 7);
        b.strafeT -= dt; if (b.strafeT <= 0) { b.strafeT = 1 + this.R() * 1.6; b.strafe = this.R() < 0.5 ? -1 : 1; }
        const ux = dx / d, uz = dz / d; let f = d > 26 ? 1 : d < 12 ? -0.7 : 0.15; mx = ux * f - uz * b.strafe * 0.8; mz = uz * f + ux * b.strafe * 0.8; sp = 3.3; b.walk = false;
        if (b.react > 0) b.react -= dt; else { b.cool -= dt; if (b.cool <= 0) { const W = BOT[b.weapon]; b.cool = W.cd * (0.85 + this.R() * 0.5); const acc = Math.max(0.06, W.acc - d / 160); const hit = this.R() < acc; this.events.push({ k: 'shot', id: b.id, x: b.x, z: b.z, tx: P.x, tz: P.z, hit, dmg: hit ? W.dmg * (0.8 + this.R() * 0.5) : 0, w: b.weapon }); } }
      } else {   // roam: follow a path to somewhere far, or (when alerted) go to where the player is
        b.think -= dt;
        if (!b.path || b.pi >= b.path.length || b.think <= 0) {
          b.think = 5 + this.R() * 5; const tgt = b.alert > 0 && d < 70 ? { x: P.x, z: P.z } : this.pick(L.spawns); b.path = findPath(L, b.x, b.z, tgt.x, tgt.z); b.pi = 0;
        }
        if (b.path && b.pi < b.path.length) {
          const [wx, wz] = b.path[b.pi], ex = wx - b.x, ez = wz - b.z, ed = Math.hypot(ex, ez); if (ed < 1.4) b.pi++; else { mx = ex / ed; mz = ez / ed; sp = b.alert > 0 ? 4.2 : 2.2; b.walk = b.alert <= 0; const want = Math.atan2(ex, ez); const da = Math.atan2(Math.sin(want - b.yaw), Math.cos(want - b.yaw)); b.yaw += da * Math.min(1, dt * 8); }
        }
      }
      const l = Math.hypot(mx, mz); if (l > 0.01 && sp > 0) { this.step(b, mx / l * sp * dt, mz / l * sp * dt); b.speed = sp; } else b.speed = 0;
    }
  }
  drain() { const e = this.events; this.events = []; return e; }
}
