// BATTLE MAP graphics (client only): turns the data of combat.js into a detailed, mobile-friendly landscape.
// Everything is generated in code (no downloads): textured terrain, river banks, roads with markings, a bridge, ~50 buildings with windows / doors / roofs / furniture,
// instanced forests (pines + broadleaf), bushes, boulders and swaying grass that is only created near the player, fields, fences, power lines, silos and a windmill.
// quality 0 = phones (fewer / shorter things), 1 = middle, 2 = laptops.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { CMB, cmbH, riverX, layout, BRIDGE, ROADS, FIELDS, distRoad, onPad, inField, fbm } from './combat.js';

const H = CMB.half, SRGB = THREE.SRGBColorSpace;
const rngS = (s) => () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };

// ---------------------------------------------------------------- procedural textures (tileable value noise painted on small canvases)
function lattice(per, seed) { const r = rngS(seed), a = new Float32Array(per * per); for (let i = 0; i < a.length; i++) a[i] = r(); return a; }
function tnoise(a, per, x, y) { const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi, u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), m = (q) => ((q % per) + per) % per, g = (i, j) => a[m(j) * per + m(i)]; return g(xi, yi) * (1 - u) * (1 - v) + g(xi + 1, yi) * u * (1 - v) + g(xi, yi + 1) * (1 - u) * v + g(xi + 1, yi + 1) * u * v; }
function paint(size, fn, opts = {}) {
  const cv = document.createElement('canvas'); cv.width = cv.height = size; const g = cv.getContext('2d'), im = g.createImageData(size, size), d = im.data;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) { const c = fn(x / size, y / size, x, y), o = (y * size + x) * 4; d[o] = c[0]; d[o + 1] = c[1]; d[o + 2] = c[2]; d[o + 3] = 255; }
  g.putImageData(im, 0, 0); const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = opts.linear ? THREE.NoColorSpace : SRGB; t.anisotropy = 4; return t;
}
function makeTextures(q) {
  const S = q === 0 ? 128 : 256, la = lattice(8, 1), lb = lattice(16, 2), lc = lattice(32, 3), ld = lattice(64, 4);
  const fb = (u, v) => 0.5 * tnoise(la, 8, u * 8, v * 8) + 0.3 * tnoise(lb, 16, u * 16, v * 16) + 0.2 * tnoise(lc, 32, u * 32, v * 32);
  const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  const T = {};
  T.grass = paint(S, (u, v, x, y) => { const n = fb(u, v), f = tnoise(ld, 64, u * 64, v * 64), c = mix([70, 104, 44], [112, 142, 62], n); const k = 0.82 + f * 0.36; return [c[0] * k, c[1] * k, c[2] * k * 0.95]; });
  T.grassBump = paint(S, (u, v) => { const n = tnoise(ld, 64, u * 64, v * 64) * 255; return [n, n, n]; }, { linear: true });
  T.rock = paint(S, (u, v) => { const n = fb(u, v), r = Math.abs(tnoise(lb, 16, u * 16, v * 16) - 0.5) * 2, c = 120 + n * 70 - (r < 0.1 ? 50 : 0); return [c * 1.0, c * 0.96, c * 0.88]; });
  T.wall = paint(S, (u, v) => { const n = fb(u, v), g = tnoise(ld, 64, u * 64, v * 64), s = (v > 0.92 ? (v - 0.92) * 400 : 0) * 0.4, k = 232 - n * 26 - g * 20 - s; return [k, k * 0.985, k * 0.96]; });
  T.wood = paint(S, (u, v) => { const plank = Math.floor(u * 8), edge = Math.abs((u * 8) % 1 - 0.5) > 0.47 ? 0.5 : 1, grain = tnoise(lc, 32, u * 8 * 3, v * 32 * 0.4 + plank * 3.7), k = (170 + grain * 70) * edge; return [k, k * 0.92, k * 0.82]; });
  T.metal = paint(S, (u, v) => { const rib = 0.5 + 0.5 * Math.sin(u * Math.PI * 2 * 16), n = tnoise(lc, 32, u * 32, v * 8), k = 175 + rib * 60 - n * 36; return [k, k, k * 1.02]; });
  T.roof = paint(S, (u, v) => { const row = Math.floor(v * 8), off = (row % 2) * 0.5, tu = ((u * 8 + off) % 1), edge = tu < 0.05 || ((v * 8) % 1) < 0.1 ? 0.62 : 1, n = tnoise(lc, 32, u * 32, v * 32), k = (190 + n * 60) * edge; return [k, k * 0.97, k * 0.94]; });
  T.conc = paint(S, (u, v) => { const n = fb(u, v), g = tnoise(ld, 64, u * 64, v * 64), seam = (u * 4 % 1 < 0.01 || v * 4 % 1 < 0.01) ? 0.78 : 1, k = (186 + n * 44 - g * 26) * seam; return [k, k, k * 0.98]; });
  T.asphalt = paint(S, (u, v) => { const g = tnoise(ld, 64, u * 64, v * 64), n = fb(u, v), crack = Math.abs(tnoise(lb, 16, u * 16, v * 16) - 0.5) < 0.012 ? 0.6 : 1, k = (74 + g * 38 + n * 16) * crack; return [k, k, k * 1.04]; });
  T.dirt = paint(S, (u, v) => { const n = fb(u, v), g = tnoise(ld, 64, u * 64, v * 64), peb = g > 0.86 ? 1.25 : 1, k = (0.78 + n * 0.5) * peb; return [150 * k, 116 * k, 78 * k]; });
  return T;
}

// ---------------------------------------------------------------- merged geometry batches (chunked so that distant parts are culled)
const CH = 150;   // chunk size for merged static meshes
class Batches {
  constructor(mats) { this.mats = mats; this.map = new Map(); }
  // g = a THREE geometry already positioned in map-local coordinates; col = colour (hex string or [r,g,b])
  add(mat, g, col, jitter = 0) {
    g.computeBoundingBox(); const bb = g.boundingBox, cx = Math.floor(((bb.min.x + bb.max.x) / 2 + H) / CH), cz = Math.floor(((bb.min.z + bb.max.z) / 2 + H) / CH);
    const nrm = g.attributes.normal, pos = g.attributes.position, n = pos.count, uv = new Float32Array(n * 2), colr = new Float32Array(n * 3), c = Array.isArray(col) ? col : (_c.set(col), [_c.r * 0.8, _c.g * 0.8, _c.b * 0.8]), j = 1 + (Math.random() - 0.5) * jitter;
    const us = this.mats[mat].uvs || 2.4;
    for (let i = 0; i < n; i++) {   // world-aligned texture coordinates from the dominant normal axis
      const nx = Math.abs(nrm.getX(i)), ny = Math.abs(nrm.getY(i)), nz = Math.abs(nrm.getZ(i)), x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
      if (ny >= nx && ny >= nz) { uv[i * 2] = x / us; uv[i * 2 + 1] = z / us; } else if (nx >= nz) { uv[i * 2] = z / us; uv[i * 2 + 1] = y / us; } else { uv[i * 2] = x / us; uv[i * 2 + 1] = y / us; }
      const shade = 0.78 + 0.22 * (ny * 0.7 + 0.3) + (nx > nz ? -0.04 : 0.02); colr[i * 3] = Math.min(1, c[0] * j * shade); colr[i * 3 + 1] = Math.min(1, c[1] * j * shade); colr[i * 3 + 2] = Math.min(1, c[2] * j * shade);
    }
    g.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); g.setAttribute('color', new THREE.BufferAttribute(colr, 3));
    if (g.index) g = g.toNonIndexed(); const key = cx + ',' + cz + ',' + mat; let a = this.map.get(key); if (!a) this.map.set(key, a = { cx, cz, mat, gs: [] }); a.gs.push(g);
  }
  box(mat, x0, y0, z0, x1, y1, z1, col, jitter = 0.06) { const g = new THREE.BoxGeometry(x1 - x0, y1 - y0, z1 - z0); g.translate((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2); this.add(mat, g, col, jitter); }
  finish(group, shadows = true) {
    const out = [];
    for (const a of this.map.values()) {
      const gs = a.gs.map((g) => { const h = g.clone(); for (const k of Object.keys(h.attributes)) if (!['position', 'normal', 'uv', 'color'].includes(k)) h.deleteAttribute(k); return h; });
      const geo = mergeGeometries(gs, false); if (!geo) continue; const m = new THREE.Mesh(geo, this.mats[a.mat].m); m.castShadow = shadows && !this.mats[a.mat].noCast; m.receiveShadow = true; m.userData.chunk = [(a.cx + 0.5) * CH - H, (a.cz + 0.5) * CH - H]; m.matrixAutoUpdate = false; group.add(m); out.push(m);
      for (const g of gs) g.dispose();
    }
    return out;
  }
}
const _c = new THREE.Color();

export function buildBattleMap(quality = 1) {
  const q = quality, L = layout(), T = makeTextures(q), group = new THREE.Group(), R = rngS(99), uni = { time: { value: 0 } };
  group.position.set(CMB.x, 0, CMB.z);   // everything below is in map-local coordinates
  const std = (o) => new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0, ...o });
  const MATS = {
    wall: { m: std({ map: T.wall, bumpMap: T.wall, bumpScale: 1.0 }), uvs: 2.6 }, wood: { m: std({ map: T.wood, roughness: 0.85 }), uvs: 2.2 }, metal: { m: std({ map: T.metal, roughness: 0.5, metalness: 0.4 }), uvs: 2.4 },
    roof: { m: std({ map: T.roof, bumpMap: T.roof, bumpScale: 1.4, roughness: 0.8, side: THREE.DoubleSide }), uvs: 2.2 }, conc: { m: std({ map: T.conc, bumpMap: T.conc, bumpScale: 0.6 }), uvs: 3 }, trim: { m: std({ roughness: 0.7 }), uvs: 4 },
    rock: { m: std({ map: T.rock, bumpMap: T.rock, bumpScale: 2, roughness: 1 }), uvs: 3 },
  };
  const B = new Batches(MATS), meshes = [];

  // ================================================================ terrain
  { const step = q === 0 ? 5 : q === 1 ? 4 : 3, half = H + 26, n = Math.round(2 * half / step), vs = (n + 1) * (n + 1), pos = new Float32Array(vs * 3), col = new Float32Array(vs * 3), uv = new Float32Array(vs * 2), hh = new Float32Array(vs);
    for (let j = 0; j <= n; j++) for (let i = 0; i <= n; i++) { const x = -half + i * step, z = -half + j * step, k = j * (n + 1) + i; hh[k] = cmbH(x, z); pos[k * 3] = x; pos[k * 3 + 1] = hh[k]; pos[k * 3 + 2] = z; uv[k * 2] = x / 9; uv[k * 2 + 1] = z / 9; }
    const c = new THREE.Color(), grassA = new THREE.Color('#6f9a3e'), grassB = new THREE.Color('#9aa34a'), dry = new THREE.Color('#b5a85a'), sand = new THREE.Color('#bba982'), rock = new THREE.Color('#8e8778'), snow = new THREE.Color('#d9dcdf'), mud = new THREE.Color('#6a5a3e'), field = new THREE.Color('#79a143');
    for (let j = 0; j <= n; j++) for (let i = 0; i <= n; i++) {
      const k = j * (n + 1) + i, x = pos[k * 3], z = pos[k * 3 + 2], h = hh[k], hx = hh[j * (n + 1) + Math.min(n, i + 1)] - hh[j * (n + 1) + Math.max(0, i - 1)], hz = hh[Math.min(n, j + 1) * (n + 1) + i] - hh[Math.max(0, j - 1) * (n + 1) + i], slope = Math.hypot(hx, hz) / (2 * step);
      const f = fbm(x * 0.02 + 9, z * 0.02 + 4, 77, 3), f2 = fbm(x * 0.07, z * 0.07, 5, 2); c.copy(grassA).lerp(grassB, smooth(0.35, 0.7, f)).lerp(dry, smooth(0.55, 0.85, f2) * 0.5);
      c.lerp(mud, smooth(0.5, 0.75, fbm(x * 0.05 + 1, z * 0.05, 31, 2)) * 0.25);
      if (h < 1.0) c.lerp(sand, smooth(1.0, -0.8, h) * 0.9); if (h < -1.0) c.lerp(mud, 0.6);   // river banks and the bed
      c.lerp(rock, smooth(0.42, 0.85, slope + (h > 30 ? 0.15 : 0)));   // steep hillsides are rock
      if (h > 50) c.lerp(snow, smooth(50, 62, h) * 0.8);
      const dr = distRoad(x, z); if (dr < 2.5) c.lerp(sand, 0.25 * (1 - dr / 2.5));
      const sh = 0.92 + 0.16 * (fbm(x * 0.4, z * 0.4, 8, 2));   // a little speckle
      col[k * 3] = c.r * sh; col[k * 3 + 1] = c.g * sh; col[k * 3 + 2] = c.b * sh;
    }
    const idx = new Uint32Array(n * n * 6); let q6 = 0; for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) { const a = j * (n + 1) + i, b = a + 1, d = a + n + 1, e = d + 1; idx[q6++] = a; idx[q6++] = d; idx[q6++] = b; idx[q6++] = b; idx[q6++] = d; idx[q6++] = e; }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); g.setIndex(new THREE.BufferAttribute(idx, 1)); g.computeVertexNormals();
    const tm = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, map: T.grass, bumpMap: T.grassBump, bumpScale: 2.2, roughness: 0.96 })); tm.receiveShadow = true; tm.frustumCulled = false; group.add(tm);
    { const sh = new THREE.Shape(); sh.moveTo(-3000, -3000); sh.lineTo(3000, -3000); sh.lineTo(3000, 3000); sh.lineTo(-3000, 3000); sh.lineTo(-3000, -3000); const hole = new THREE.Path(); hole.moveTo(-half, -half); hole.lineTo(-half, half); hole.lineTo(half, half); hole.lineTo(half, -half); hole.lineTo(-half, -half); sh.holes.push(hole);
      const far = new THREE.Mesh(new THREE.ShapeGeometry(sh), new THREE.MeshStandardMaterial({ color: '#7d7766', roughness: 1, side: THREE.DoubleSide })); far.rotation.x = -Math.PI / 2; far.position.y = 44; group.add(far); }   // the high plateau beyond the mountains
  }

  // ================================================================ roads (ribbons that follow the ground), markings, bridge
  { const ribbon = (pts, w, y, colFn, uvLen) => {
      const N = pts.length, pos = new Float32Array(N * 6), col = new Float32Array(N * 6), uv = new Float32Array(N * 4), idx = []; let acc = 0;
      for (let i = 0; i < N; i++) {
        const p = pts[i], a = pts[Math.max(0, i - 1)], b = pts[Math.min(N - 1, i + 1)]; let tx = b[0] - a[0], tz = b[1] - a[1]; const tl = Math.hypot(tx, tz) || 1; tx /= tl; tz /= tl; const nx = -tz, nz = tx;
        if (i) acc += Math.hypot(p[0] - pts[i - 1][0], p[1] - pts[i - 1][1]);
        for (let s = 0; s < 2; s++) { const sg = s ? 1 : -1, x = p[0] + nx * sg * w / 2, z = p[1] + nz * sg * w / 2, o = (i * 2 + s); pos[o * 3] = x; pos[o * 3 + 1] = cmbH(x, z) + y; pos[o * 3 + 2] = z; const cc = colFn(s, i); col[o * 3] = cc[0]; col[o * 3 + 1] = cc[1]; col[o * 3 + 2] = cc[2]; uv[o * 2] = s * w / uvLen; uv[o * 2 + 1] = acc / uvLen; }
        if (i < N - 1) { const o = i * 2; idx.push(o, o + 1, o + 2, o + 1, o + 3, o + 2); }
      }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals(); return g;
    };
    const sample = (pts, step) => { const out = []; for (let i = 0; i + 1 < pts.length; i++) { const [ax, az] = pts[i], [bx, bz] = pts[i + 1], n = Math.max(1, Math.ceil(Math.hypot(bx - ax, bz - az) / step)); for (let k = 0; k < n; k++) out.push([ax + (bx - ax) * k / n, az + (bz - az) * k / n]); } out.push(pts[pts.length - 1]); return out; };
    // smooth the corners with a Catmull-Rom spline first
    const spline = (pts) => { if (pts.length < 3) return pts; const out = []; for (let i = 0; i + 1 < pts.length; i++) { const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)]; for (let t = 0; t < 1; t += 0.125) { const t2 = t * t, t3 = t2 * t, f = (a, b, c, d) => 0.5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3); out.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])]); } } out.push(pts[pts.length - 1]); return out; };
    const asphalt = new THREE.MeshStandardMaterial({ vertexColors: true, map: T.asphalt, bumpMap: T.asphalt, bumpScale: 0.8, roughness: 0.85, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    const dirtM = new THREE.MeshStandardMaterial({ vertexColors: true, map: T.dirt, bumpMap: T.dirt, bumpScale: 1.5, roughness: 1, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    const paintM = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
    const rg = [], dg = [], pg = [];
    for (const r of ROADS) {
      const pts = sample(spline(r.pts), 3);
      if (r.dirt) { dg.push(ribbon(pts, r.w + 0.8, 0.06, () => [0.7, 0.62, 0.5], 4)); for (const off of [-1.1, 1.1]) { const sh = pts.map((p, i) => { const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)]; let tx = b[0] - a[0], tz = b[1] - a[1]; const l = Math.hypot(tx, tz) || 1; return [p[0] - tz / l * off, p[1] + tx / l * off]; }); dg.push(ribbon(sh, 0.6, 0.075, () => [0.46, 0.4, 0.33], 6)); } }
      else {
        rg.push(ribbon(pts, r.w, 0.06, () => [1, 1, 1], 3.2));
        for (const sgn of [-1, 1]) { const sh = pts.map((p, i) => { const a = pts[Math.max(0, i - 1)], b = pts[Math.min(pts.length - 1, i + 1)]; let tx = b[0] - a[0], tz = b[1] - a[1]; const l = Math.hypot(tx, tz) || 1; return [p[0] - tz / l * sgn * (r.w / 2 - 0.35), p[1] + tx / l * sgn * (r.w / 2 - 0.35)]; }); pg.push(ribbon(sh, 0.16, 0.075, () => [0.9, 0.9, 0.85], 4)); }
        for (let i = 0; i + 4 < pts.length; i += 6) pg.push(ribbon(pts.slice(i, i + 3), 0.18, 0.08, () => [0.95, 0.85, 0.35], 4));   // the dashed centre line
      }
    }
    const add = (gs, mat) => { if (!gs.length) return; const m = new THREE.Mesh(mergeGeometries(gs), mat); m.receiveShadow = true; group.add(m); };
    add(rg, asphalt); add(dg, dirtM); add(pg, paintM);
  }
  // the bridge
  { const y = BRIDGE.y, z0 = BRIDGE.z - BRIDGE.w / 2, z1 = BRIDGE.z + BRIDGE.w / 2, xa = BRIDGE.xb, xb = BRIDGE.xa;
    B.box('conc', xa, y - 0.9, z0, xb, y, z1, '#9a9a94', 0.02); B.box('trim', xa, y + 0.0, z0 + 0.35, xb, y + 0.05, z1 - 0.35, '#444448', 0);
    for (const zz of [z0, z1 - 0.25]) { B.box('conc', xa, y, zz, xb, y + 1.1, zz + 0.25, '#b8b6ad', 0.02); }
    for (let x = xa + 2; x < xb; x += 9) { B.box('conc', x - 0.8, -3.2, BRIDGE.z - 1.0, x + 0.8, y - 0.9, BRIDGE.z + 1.0, '#8c8a82', 0.02); }
    for (let x = xa + 1; x < xb; x += 3) for (const zz of [z0 + 0.1, z1 - 0.1]) B.box('trim', x - 0.08, y + 1.1, zz - 0.08, x + 0.08, y + 1.5, zz + 0.08, '#555', 0); }

  // ================================================================ buildings
  const WALLMAT = { house: 'wall', shop: 'wall', apart: 'wall', school: 'wall', church: 'wall', barracks: 'wall', barn: 'wood', shack: 'wood', cabin: 'wood', warehouse: 'metal', hangar: 'metal', kiosk: 'wall' };
  const roofTri = (x0, z0, x1, z1, y0, rh, ridgeAlongX, col, over = 0.55, lowK = 1) => {   // a gable roof (a triangular prism) with an overhang
    const a = x0 - over, b = x1 + over, c = z0 - over, d = z1 + over, hy = y0 + rh, my = (ridgeAlongX ? (c + d) / 2 : (a + b) / 2), p = [];
    const quad = (v) => { p.push(...v[0], ...v[1], ...v[2], ...v[0], ...v[2], ...v[3]); }, tri = (v) => p.push(...v[0], ...v[1], ...v[2]);
    if (ridgeAlongX) { quad([[a, y0, c], [b, y0, c], [b, hy, my], [a, hy, my]]); quad([[a, y0, d], [a, hy, my], [b, hy, my], [b, y0, d]]); tri([[a, y0, c], [a, hy, my], [a, y0, d]]); tri([[b, y0, c], [b, y0, d], [b, hy, my]]); }
    else { quad([[a, y0, c], [my, hy, c], [my, hy, d], [a, y0, d]]); quad([[b, y0, c], [b, y0, d], [my, hy, d], [my, hy, c]]); tri([[a, y0, c], [b, y0, c], [my, hy, c]]); tri([[a, y0, d], [my, hy, d], [b, y0, d]]); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3)); g.computeVertexNormals(); B.add('roof', g, col, 0.05);
  };
  for (const b of L.buildings) {
    const wm = WALLMAT[b.kind] || 'wall', fy = b.fy, hx = b.w / 2, hz = b.d / 2, tri = b.top || 3;
    const wallC = b.c, trimC = b.kind === 'house' || b.kind === 'shop' || b.kind === 'apart' ? '#f2efe6' : '#3a3530';
    for (const s of b.solids) {
      if (s.k === 'wall') B.box(wm, s.x0, s.y0, s.z0, s.x1, s.y1, s.z1, wallC, 0.04);
      else if (s.k === 'floor') B.box('wood', s.x0, s.y0, s.z0, s.x1, s.y1, s.z1, '#8c6b48', 0.05);
      else if (s.k === 'step') B.box('wood', s.x0, s.y0, s.z0, s.x1, s.y1, s.z1, '#9a7650', 0.08);
      else if (s.k === 'roof') { B.box('conc', s.x0, s.y0, s.z0, s.x1, s.y1, s.z1, b.roof === 'flat' ? '#8d8b84' : '#cfc6b2', 0.02); }
    }
    // the floor inside
    B.box('conc', b.x - hx + 0.1, fy + 0.01, b.z - hz + 0.1, b.x + hx - 0.1, fy + 0.07, b.z + hz - 0.1, b.kind === 'warehouse' || b.kind === 'hangar' ? '#8a8a86' : b.kind === 'shack' || b.kind === 'cabin' || b.kind === 'house' ? '#a8896a' : '#b0aaa0', 0.03);
    // frames round doors and windows
    for (const o of b.openings) {
      const alongX = o.s === 'N' || o.s === 'S', sg = o.s === 'N' || o.s === 'W' ? -1 : 1, f = (alongX ? b.d : b.w) / 2 * sg, ex = alongX ? b.x + o.c : b.x + f, ez = alongX ? b.z + f : b.z + o.c, y0 = fy + o.y0, y1 = fy + o.y1, hw = o.hw, th = 0.14, pr = 0.26, off = sg * 0.2;
      const fb = (xa, ya, xb, yb, dz) => { if (alongX) B.box('trim', ex + xa, ya, ez + off - pr / 2 + dz, ex + xb, yb, ez + off + pr / 2 + dz, trimC, 0); else B.box('trim', ex + off - pr / 2 + dz, ya, ez + xa, ex + off + pr / 2 + dz, yb, ez + xb, trimC, 0); };
      fb(-hw - th, y0, -hw, y1 + th, 0); fb(hw, y0, hw + th, y1 + th, 0); fb(-hw - th, y1, hw + th, y1 + th, 0);
      if (o.k === 'win') { fb(-hw - th, y0 - th, hw + th, y0, 0.08 * sg); fb(-0.03, y0, 0.03, y1, -0.05 * sg); fb(-hw, (y0 + y1) / 2 - 0.03, hw, (y0 + y1) / 2 + 0.03, -0.05 * sg); }   // sill, and a window cross
    }
    // roofs
    const along = b.w >= b.d, rc = b.rc;
    if (b.roof === 'gable') roofTri(b.x - hx, b.z - hz, b.x + hx, b.z + hz, fy + tri + 0.3, Math.min(b.w, b.d) * 0.33, !along ? false : true, rc);
    else if (b.roof === 'lowgable') roofTri(b.x - hx, b.z - hz, b.x + hx, b.z + hz, fy + tri + 0.3, Math.min(b.w, b.d) * 0.12 + 0.6, along, b.c === '#b5a48c' ? '#7a6a58' : '#6e7a84', 0.3);
    else if (b.roof === 'pent') { const g = new THREE.BoxGeometry(b.w + 1.0, 0.18, b.d + 1.0); g.rotateZ(-0.12); g.translate(b.x, fy + tri + 0.55, b.z); B.add('roof', g, rc, 0.05); }
    else { for (const [x0, z0, x1, z1] of [[-hx, -hz, hx, -hz + 0.3], [-hx, hz - 0.3, hx, hz], [-hx, -hz, -hx + 0.3, hz], [hx - 0.3, -hz, hx, hz]]) B.box('wall', b.x + x0 - 0.3, fy + tri + 0.3, b.z + z0 - 0.3, b.x + x1 + 0.3, fy + tri + 0.85, b.z + z1 + 0.3, wallC, 0.03); B.box('trim', b.x - 2, fy + tri + 0.3, b.z - 1.5, b.x + 1.2, fy + tri + 1.2, b.z + 0.8, '#6c6c70', 0.02); }   // flat roof: a parapet and a roof box
    if (b.kind === 'house' || b.kind === 'cabin') B.box('conc', b.x + (along ? hx * 0.4 : 0), fy + tri + 0.3, b.z + (along ? 0 : hz * 0.4) + 0.5, b.x + (along ? hx * 0.4 : 0) + 0.7, fy + tri + 2.3 + Math.min(b.w, b.d) * 0.2, b.z + (along ? 0 : hz * 0.4) + 1.2, '#8a5a48', 0.05);   // a chimney
    if (b.kind === 'church') { const sx = b.x, sz = b.z + (b.front === 'S' ? hz - 2.4 : -hz + 2.4); B.box('wall', sx - 2.4, fy + tri, sz - 2.4, sx + 2.4, fy + tri + 7, sz + 2.4, b.c, 0.02); roofTri(sx - 2.4, sz - 2.4, sx + 2.4, sz + 2.4, fy + tri + 7, 4, true, '#5d5f66', 0.3); B.box('trim', sx - 0.1, fy + tri + 11, sz - 0.1, sx + 0.1, fy + tri + 13, sz + 0.1, '#ddd', 0); B.box('trim', sx - 0.6, fy + tri + 12.2, sz - 0.07, sx + 0.6, fy + tri + 12.4, sz + 0.07, '#ddd', 0); }
    if (b.kind === 'hangar' || b.kind === 'warehouse') { B.box('trim', b.x - hx, fy + 0.0, b.z + (b.front === 'S' ? hz : -hz) - 0.05, b.x + hx, fy + 0.5, b.z + (b.front === 'S' ? hz : -hz) + 0.05, '#555', 0); }
  }
  // props: furniture, containers, sandbags, crates, barrels, silo, tanks, windmill, towers
  const mp = { bed: (p) => { B.box('wood', p.x - p.w / 2, p.y + 0.2, p.z - p.d / 2, p.x + p.w / 2, p.y + 0.35, p.z + p.d / 2, '#7a5636', 0.04); B.box('trim', p.x - p.w / 2 + 0.05, p.y + 0.35, p.z - p.d / 2 + 0.05, p.x + p.w / 2 - 0.05, p.y + 0.55, p.z + p.d / 2 - 0.05, ['#a9b6c8', '#c8a9a9', '#a9c8b0', '#7f9a7a'][Math.floor(R() * 4)], 0.05); B.box('trim', p.x - p.w / 2 + 0.05, p.y + 0.55, p.z - p.d / 2 + 0.05, p.x - p.w / 2 + 0.45, p.y + 0.65, p.z + p.d / 2 - 0.05, '#f0f0f0', 0); },
    table: (p) => { B.box('wood', p.x - p.w / 2, p.y + 0.7, p.z - p.d / 2, p.x + p.w / 2, p.y + 0.76, p.z + p.d / 2, '#a37a4c', 0.03); for (const sx of [-1, 1]) for (const sz of [-1, 1]) B.box('wood', p.x + sx * (p.w / 2 - 0.08) - 0.04, p.y, p.z + sz * (p.d / 2 - 0.08) - 0.04, p.x + sx * (p.w / 2 - 0.08) + 0.04, p.y + 0.7, p.z + sz * (p.d / 2 - 0.08) + 0.04, '#7a5636', 0); },
    chair: (p) => { B.box('wood', p.x - 0.22, p.y + 0.42, p.z - 0.22, p.x + 0.22, p.y + 0.47, p.z + 0.22, '#7a5636', 0.03); B.box('wood', p.x - 0.22, p.y + 0.47, p.z - 0.22, p.x + 0.22, p.y + 0.95, p.z - 0.18, '#7a5636', 0.03); for (const sx of [-1, 1]) for (const sz of [-1, 1]) B.box('wood', p.x + sx * 0.18 - 0.02, p.y, p.z + sz * 0.18 - 0.02, p.x + sx * 0.18 + 0.02, p.y + 0.42, p.z + sz * 0.18 + 0.02, '#6a4a30', 0); },
    wardrobe: (p) => { B.box('wood', p.x - p.w / 2, p.y, p.z - p.d / 2, p.x + p.w / 2, p.y + p.h, p.z + p.d / 2, '#6a4a30', 0.05); B.box('trim', p.x - 0.03, p.y + 0.1, p.z + p.d / 2, p.x + 0.03, p.y + p.h - 0.1, p.z + p.d / 2 + 0.02, '#2a1c10', 0); },
    shelf: (p) => { B.box('wood', p.x - p.w / 2, p.y, p.z - p.d / 2, p.x + p.w / 2, p.y + p.h, p.z + p.d / 2, '#7a5638', 0.04); for (let i = 1; i < 4; i++) B.box('trim', p.x - p.w / 2 + 0.04, p.y + p.h * i / 4, p.z - p.d / 2 - 0.01, p.x + p.w / 2 - 0.04, p.y + p.h * i / 4 + 0.04, p.z + p.d / 2 + 0.01, '#c9c0a8', 0.1); },
  };
  const generic = (p) => {
    const mat = p.k === 'container' ? 'metal' : p.k === 'pallet' || p.k === 'crate' || p.k === 'bale' || p.k === 'stall' || p.k === 'bench' || p.k === 'desk' || p.k === 'counter' ? 'wood' : p.k === 'rack' || p.k === 'barrel' ? 'metal' : 'trim';
    B.box(mat, p.x - p.w / 2, p.y - (p.k === 'container' || p.k === 'crate' || p.k === 'sandbag' || p.k === 'barrel' ? 0.2 : 0), p.z - p.d / 2, p.x + p.w / 2, p.y + p.h, p.z + p.d / 2, p.c, 0.06);
    if (p.k === 'crate') { B.box('trim', p.x - p.w / 2 - 0.02, p.y + p.h * 0.45, p.z - p.d / 2 - 0.02, p.x + p.w / 2 + 0.02, p.y + p.h * 0.55, p.z + p.d / 2 + 0.02, '#6a4a28', 0); }
    if (p.k === 'container') { for (let i = -2; i <= 2; i++) { if (p.w > p.d) B.box('trim', p.x + i * 1.2 - 0.05, p.y, p.z - p.d / 2 - 0.05, p.x + i * 1.2 + 0.05, p.y + p.h, p.z + p.d / 2 + 0.05, p.c, 0.1); else B.box('trim', p.x - p.w / 2 - 0.05, p.y, p.z + i * 1.2 - 0.05, p.x + p.w / 2 + 0.05, p.y + p.h, p.z + i * 1.2 + 0.05, p.c, 0.1); } }
    if (p.k === 'bale') { B.box('trim', p.x - p.w / 2 - 0.02, p.y + 0.4, p.z - p.d / 2 - 0.02, p.x + p.w / 2 + 0.02, p.y + 0.46, p.z + p.d / 2 + 0.02, '#8a6a30', 0); }
  };
  const round = (p) => {
    const cyl = (r0, r1, h, seg, y, col, mat = 'metal') => { const g = new THREE.CylinderGeometry(r0, r1, h, seg); g.translate(p.x, p.y + y + h / 2, p.z); B.add(mat, g, col, 0.03); };
    if (p.t === 'silo') { cyl(p.r, p.r, p.h, 14, 0, '#b9bec4'); const d = new THREE.SphereGeometry(p.r, 14, 6, 0, Math.PI * 2, 0, Math.PI / 2); d.translate(p.x, p.y + p.h, p.z); B.add('metal', d, '#9ea4ab', 0.02); }
    else if (p.t === 'tank') { cyl(p.r, p.r, p.h, 16, 0, '#d6d8db'); cyl(p.r * 0.35, p.r * 0.35, 1.0, 8, p.h, '#777'); for (const yy of [2, 5.5]) cyl(p.r + 0.06, p.r + 0.06, 0.18, 16, yy, '#9a4a3a'); }
    else if (p.t === 'chimney') { cyl(p.r, p.r * 1.45, p.h, 12, 0, '#9a6a5a', 'wall'); for (const yy of [8, 16, 22]) cyl(p.r * 1.1, p.r * 1.1, 0.8, 12, yy, '#ddd'); }
    else if (p.t === 'windmill') { cyl(p.r * 0.5, p.r, p.h, 8, 0, '#e8e0d0', 'wall'); const g = new THREE.ConeGeometry(p.r * 1.1, 2.4, 8); g.translate(p.x, p.y + p.h + 1.2, p.z); B.add('roof', g, '#6a4030', 0.02); }
  };
  for (const p of L.props) { if (mp[p.k]) mp[p.k](p); else if (p.k === 'round') round(p); else if (p.k === 'tower') {
    const t = L.towers.find((q) => Math.abs(q.x - p.x) < 0.1 && Math.abs(q.z - p.z) < 0.1), py = t.py;
    for (const [dx, dz] of [[-2, -2], [2, -2], [-2, 2], [2, 2]]) B.box('wood', p.x + dx - 0.25, p.y - 1, p.z + dz - 0.25, p.x + dx + 0.25, py, p.z + dz + 0.25, '#6a5a40', 0.04);
    for (let y = p.y + 1.5; y < py; y += 2.4) { B.box('wood', p.x - 2, y, p.z - 2.05, p.x + 2, y + 0.14, p.z - 1.95, '#6a5a40', 0); B.box('wood', p.x - 2, y, p.z + 1.95, p.x + 2, y + 0.14, p.z + 2.05, '#6a5a40', 0); }
    B.box('wood', p.x - 2.6, py - 0.3, p.z - 2.6, p.x + 2.6, py, p.z + 2.6, '#8a7250', 0.03);
    for (const [a, b, c2, d2] of [[-2.6, -2.6, 2.6, -2.35], [-2.6, 2.35, 2.6, 2.6], [-2.6, -2.6, -2.35, 2.6], [2.35, -1.2, 2.6, 2.6]]) B.box('wood', p.x + a, py, p.z + b, p.x + c2, py + 1.1, p.z + d2, '#7a6444', 0.04);
    B.box('wood', p.x - 2.9, py + 2.6, p.z - 2.9, p.x + 2.9, py + 2.8, p.z + 2.9, '#5a4a3a', 0); for (const [dx, dz] of [[-2.5, -2.5], [2.5, -2.5], [-2.5, 2.5], [2.5, 2.5]]) B.box('wood', p.x + dx - 0.1, py, p.z + dz - 0.1, p.x + dx + 0.1, py + 2.7, p.z + dz + 0.1, '#6a5a40', 0);
    for (const s of L.solids) if (s.k === 'step' && s.x0 > p.x + 2.5 && s.x0 < p.x + 2.7 && s.z0 > p.z - 3 && s.z0 < p.z + 9) B.box('wood', s.x0, s.y0, s.z0, s.x1, s.y1, s.z1, '#9a7650', 0.06);
  } else generic(p); }
  // the base's fence: posts, two rails and a sloping barbed top; farm fences round the fields
  const postFence = (x0, z0, x1, z1, col, h, step) => { const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, z1 - z0) / step)); for (let i = 0; i <= n; i++) { const x = x0 + (x1 - x0) * i / n, z = z0 + (z1 - z0) * i / n, y = cmbH(x, z); B.box('trim', x - 0.07, y - 0.3, z - 0.07, x + 0.07, y + h, z + 0.07, col, 0.05); if (i < n) { const xn = x0 + (x1 - x0) * (i + 1) / n, zn = z0 + (z1 - z0) * (i + 1) / n, yn = cmbH(xn, zn); for (const k of [0.45, 0.92]) { const g = new THREE.BoxGeometry(Math.hypot(xn - x, zn - z), 0.06, 0.05); g.rotateZ(Math.atan2(yn - y, Math.hypot(xn - x, zn - z))); g.rotateY(-Math.atan2(zn - z, xn - x)); g.translate((x + xn) / 2, (y + yn) / 2 + h * k, (z + zn) / 2); B.add('trim', g, col, 0.04); } } } };
  for (const f of L.fences) postFence(f.x0, f.z0, f.x1, f.z1, '#6c7078', 2.2, 3.2);
  for (const [x0, z0, x1, z1] of FIELDS) { postFence(x0, z0, x1, z0, '#8a6a4a', 1.1, 3); postFence(x0, z1, x1, z1, '#8a6a4a', 1.1, 3); postFence(x0, z0, x0, z1, '#8a6a4a', 1.1, 3); postFence(x1, z0, x1, z1, '#8a6a4a', 1.1, 3); }
  // the fields: draped crop rows (vertex-coloured stripes)
  { const gs = []; for (const [x0, z0, x1, z1, base] of FIELDS) {
      const nx = Math.round((x1 - x0) / 2), nz = Math.round((z1 - z0) / 4), pos = [], col = [], c0 = new THREE.Color(base);
      for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) { const xa = x0 + i * 2, xb = xa + 2, za = z0 + j * 4, zb = za + 4, k = (i % 2 ? 0.78 : 1) * (0.9 + 0.2 * fbm(xa * 0.1, za * 0.1, 3, 2)); for (const [x, z] of [[xa, za], [xa, zb], [xb, za], [xb, za], [xa, zb], [xb, zb]]) { pos.push(x, cmbH(x, z) + 0.07, z); col.push(c0.r * k, c0.g * k, c0.b * k); } }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.computeVertexNormals(); gs.push(g); }
    const m = new THREE.Mesh(mergeGeometries(gs), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 1, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 })); m.receiveShadow = true; group.add(m); }
  // power poles along the highway with sagging wires
  { const hw = ROADS[0].pts, poles = [], wireP = []; let acc = 0, next = 0; for (let i = 0; i + 1 < hw.length; i++) { const [ax, az] = hw[i], [bx, bz] = hw[i + 1], len = Math.hypot(bx - ax, bz - az), nx = -(bz - az) / len, nz = (bx - ax) / len; for (let d = next - acc; d < len; d += 42) { if (d < 0) continue; const x = ax + (bx - ax) * d / len + nx * 6, z = az + (bz - az) * d / len + nz * 6; if (cmbH(x, z) > 0.2 && !onPad(x, z, 3)) poles.push([x, z]); } acc += len; next = Math.ceil(acc / 42) * 42; }
    for (const [x, z] of poles) { const y = cmbH(x, z); B.box('wood', x - 0.13, y - 0.4, z - 0.13, x + 0.13, y + 8.5, z + 0.13, '#5a4630', 0.05); B.box('wood', x - 1.3, y + 7.9, z - 0.07, x + 1.3, y + 8.05, z + 0.07, '#4a3a28', 0.05); }
    for (let i = 0; i + 1 < poles.length; i++) { const [ax, az] = poles[i], [bx, bz] = poles[i + 1]; if (Math.hypot(bx - ax, bz - az) > 70) continue; for (const o of [-1.2, 0, 1.2]) { let px = ax, py = cmbH(ax, az) + 8 , pz = az; for (let k = 1; k <= 6; k++) { const t = k / 6, x = ax + (bx - ax) * t, z = az + (bz - az) * t, y = cmbH(ax, az) * (1 - t) + cmbH(bx, bz) * t + 8 - 1.4 * Math.sin(Math.PI * t); wireP.push(px + o, py, pz, x + o, y, z); px = x; py = y; pz = z; } } }
    if (wireP.length) { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(wireP, 3)); const l = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: '#22252a' })); l.frustumCulled = false; group.add(l); } }
  meshes.push(...B.finish(group, true));

  // ================================================================ instanced vegetation
  const matInst = (o) => new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, ...o });
  const colorize = (g, fn) => { const p = g.attributes.position, c = new Float32Array(p.count * 3); for (let i = 0; i < p.count; i++) { const cc = fn(p.getX(i), p.getY(i), p.getZ(i)); c[i * 3] = cc[0]; c[i * 3 + 1] = cc[1]; c[i * 3 + 2] = cc[2]; } g.setAttribute('color', new THREE.BufferAttribute(c, 3)); return g; };
  const lerpc = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  const part = (g, y, fn) => { g.translate(0, y, 0); return colorize(g.toNonIndexed(), fn); };
  const pineG = (() => { const gs = [], bark = [0.28, 0.2, 0.13], tr = new THREE.CylinderGeometry(0.16, 0.28, 3.2, 6, 1); gs.push(colorize(tr.translate(0, 1.6, 0).toNonIndexed(), () => bark));
    const tiers = q === 0 ? [[2.4, 3.0, 1.8], [1.8, 2.8, 3.8], [1.2, 2.6, 5.6]] : [[2.5, 2.6, 1.6], [2.1, 2.5, 2.9], [1.7, 2.4, 4.2], [1.2, 2.3, 5.5], [0.7, 2.0, 6.6]];
    tiers.forEach(([r, h, y], i) => { const c = new THREE.ConeGeometry(r, h, q === 0 ? 6 : 8, 1, true); gs.push(colorize(c.translate(0, y + h / 2, 0).toNonIndexed(), (x, yy) => lerpc([0.025, 0.085, 0.04], [0.075, 0.19, 0.08], Math.min(1, (yy - y) / h + i * 0.05)))); }); return mergeGeometries(gs); })();
  const oakG = (() => { const gs = [], bark = [0.3, 0.22, 0.15], tr = new THREE.CylinderGeometry(0.2, 0.34, 3.0, 6, 1); gs.push(colorize(tr.translate(0, 1.5, 0).toNonIndexed(), () => bark)); const lr = rngS(5);
    for (const [x, y, z, r] of [[0, 4.6, 0, 2.1], [1.2, 3.9, 0.5, 1.5], [-1.2, 4.0, -0.4, 1.6], [0.2, 5.6, 0.3, 1.3], [-0.2, 3.6, 1.3, 1.3]].slice(0, q === 0 ? 3 : 5)) { const b = new THREE.IcosahedronGeometry(r, 0); gs.push(colorize(b.translate(x, y, z).toNonIndexed(), (px, py) => lerpc([0.05, 0.13, 0.04], [0.2, 0.31, 0.09], Math.min(1, Math.max(0, (py - (y - r)) / (2 * r)) * 0.8 + lr() * 0.15)))); } return mergeGeometries(gs); })();
  const bushG = (() => { const gs = []; for (const [x, z, r] of [[0, 0, 0.55], [0.5, 0.2, 0.4], [-0.4, 0.3, 0.42]]) { const b = new THREE.IcosahedronGeometry(r, 0); gs.push(colorize(b.translate(x, r * 0.8, z).toNonIndexed(), (px, py) => lerpc([0.05, 0.12, 0.04], [0.16, 0.27, 0.08], py / (r * 1.6 + 0.2)))); } return mergeGeometries(gs); })();
  const rockG = (() => { const g = new THREE.DodecahedronGeometry(1, 0); const p = g.attributes.position, rr = rngS(17); for (let i = 0; i < p.count; i++) { const k = 0.8 + rr() * 0.35; p.setXYZ(i, p.getX(i) * k * 1.15, p.getY(i) * k * 0.8, p.getZ(i) * k); } g.computeVertexNormals(); return colorize(g.toNonIndexed(), (x, y) => lerpc([0.2, 0.19, 0.17], [0.34, 0.33, 0.3], (y + 1) / 2)); })();
  const VEG = []; const dummy = new THREE.Object3D(), tcol = new THREE.Color();
  const makeInst = (geo, mat, items, cull, cast, setCol) => {   // items: [{x,y,z,s,r}] -> chunked InstancedMeshes (120 m cells)
    const cells = new Map(); for (const it of items) { const k = Math.floor((it.x + H) / 120) + ',' + Math.floor((it.z + H) / 120); let a = cells.get(k); if (!a) cells.set(k, a = []); a.push(it); }
    for (const a of cells.values()) {
      const im = new THREE.InstancedMesh(geo, mat, a.length); a.forEach((it, i) => { dummy.position.set(it.x, it.y, it.z); dummy.rotation.set(0, it.r, 0); dummy.scale.set(it.s * (it.sx || 1), it.s * (it.sy || 1), it.s * (it.sx || 1)); dummy.updateMatrix(); im.setMatrixAt(i, dummy.matrix); if (setCol) { setCol(tcol, it); im.setColorAt(i, tcol); } });
      im.instanceMatrix.needsUpdate = true; im.computeBoundingSphere(); im.castShadow = cast; im.receiveShadow = true; im.userData.c = [im.boundingSphere.center.x, im.boundingSphere.center.z]; im.userData.cull = cull + im.boundingSphere.radius; group.add(im); VEG.push(im);
    }
  };
  const treeCull = q === 0 ? 140 : q === 1 ? 200 : 260;
  makeInst(pineG, matInst({ flatShading: false }), L.trees.filter((t) => t.pine).map((t) => ({ ...t, s: t.s * 0.95, r: t.r })), treeCull, true, (c, it) => c.setScalar(0.85 + ((it.x * 12.9898 + it.z * 78.233) % 1 + 1) % 1 * 0.3));
  makeInst(oakG, matInst({}), L.trees.filter((t) => !t.pine).map((t) => ({ ...t, s: t.s * 0.9 })), treeCull, true, (c, it) => { const k = ((it.x * 3.1 + it.z * 7.7) % 1 + 1) % 1; c.setRGB(0.85 + k * 0.3, 0.85 + (1 - k) * 0.25, 0.8 + k * 0.1); });
  makeInst(rockG, matInst({ roughness: 1 }), L.rocks.map((r) => ({ ...r, y: r.y + r.s * 0.2, s: r.s })), q === 0 ? 170 : 260, true, (c, it) => c.setScalar(0.85 + ((it.x * 5.3 + it.z) % 1 + 1) % 1 * 0.25));
  // bushes: scattered near forests and along roads / rivers
  { const items = [], br = rngS(31), want = q === 0 ? 900 : q === 1 ? 1800 : 3000; for (let tries = 0; items.length < want && tries < want * 5; tries++) { const x = (br() * 2 - 1) * (H - 16), z = (br() * 2 - 1) * (H - 16), y = cmbH(x, z); if (y < 0 || distRoad(x, z) < 1.5 || onPad(x, z, 3) || fbm(x * 0.013 + 5, z * 0.013 - 3, 41, 3) < 0.38 + br() * 0.15) continue; items.push({ x, y, z, s: 0.8 + br() * 1.0, r: br() * 6.28 }); }
    makeInst(bushG, matInst({}), items, q === 0 ? 90 : 140, false, (c) => c.setRGB(0.8 + br() * 0.4, 0.85 + br() * 0.3, 0.8 + br() * 0.2)); }

  // ---- grass: created cell by cell (50 m) when the player gets close, swaying in the wind
  const grassG = (() => { const gs = [], gr = rngS(3), nb = q === 0 ? 4 : 7; for (let i = 0; i < nb; i++) { const a = i / nb * Math.PI + gr() * 0.5, h = 0.22 + gr() * 0.3, w = 0.045, ox = (gr() - 0.5) * 0.4, oz = (gr() - 0.5) * 0.4, bend = (gr() - 0.5) * 0.18, ca = Math.cos(a), sa = Math.sin(a);
      const P = [[-w, 0, 0], [w, 0, 0], [bend * 0.5 - w * 0.5, h * 0.55, 0], [bend * 0.5 + w * 0.5, h * 0.55, 0], [bend, h, 0]].map(([x, y, z]) => [ox + x * ca - z * sa, y, oz + x * sa + z * ca]), t = [P[0], P[1], P[2], P[1], P[3], P[2], P[2], P[3], P[4]], pos = new Float32Array(t.length * 3), col = new Float32Array(t.length * 3);
      t.forEach((v, k) => { pos[k * 3] = v[0]; pos[k * 3 + 1] = v[1]; pos[k * 3 + 2] = v[2]; const c = lerpc([0.04, 0.09, 0.025], [0.2, 0.32, 0.07], v[1] / (h + 0.01)); col.set(c, k * 3); }); const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3)); gs.push(g); } const m = mergeGeometries(gs); m.computeVertexNormals(); return m; })();
  const grassMat = matInst({ side: THREE.DoubleSide, roughness: 1 });
  grassMat.onBeforeCompile = (sh) => { sh.uniforms.uTime = uni.time; sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n#ifdef USE_INSTANCING\n float sw = sin(uTime * 1.7 + instanceMatrix[3].x * 0.35 + instanceMatrix[3].z * 0.27) * 0.5 + sin(uTime * 3.1 + instanceMatrix[3].z * 0.6) * 0.15;\n transformed.x += sw * 0.22 * position.y; transformed.z += sw * 0.1 * position.y;\n#endif'); };
  const GR = { cell: 50, range: q === 0 ? 52 : q === 1 ? 78 : 105, dens: q === 0 ? 0.11 : q === 1 ? 0.22 : 0.38, done: new Map(), queue: [] };
  const grassCell = (ci, cj) => {
    const x0 = -H + ci * GR.cell, z0 = -H + cj * GR.cell, gr = rngS(ci * 7919 + cj * 104729 + 1), n = Math.round(GR.cell * GR.cell * GR.dens), items = [];
    for (let i = 0; i < n; i++) { const x = x0 + gr() * GR.cell, z = z0 + gr() * GR.cell, y = cmbH(x, z); if (y < -0.1 || y > 36) continue; if (distRoad(x, z) < 1.6 || onPad(x, z, 2.5) || inField(x, z)) continue; const dx = cmbH(x + 1.5, z) - y, dz = cmbH(x, z + 1.5) - y; if (Math.hypot(dx, dz) > 0.75) continue; const d = fbm(x * 0.04, z * 0.04, 91, 2); if (d < 0.3) continue; items.push({ x, y, z, s: 0.8 + gr() * 0.7, sy: 0.7 + d * 0.8, r: gr() * 6.28, d }); }
    if (!items.length) return null;
    const im = new THREE.InstancedMesh(grassG, grassMat, items.length); const cc = new THREE.Color();
    items.forEach((it, i) => { dummy.position.set(it.x, it.y - 0.04, it.z); dummy.rotation.set(0, it.r, 0); dummy.scale.set(it.s, it.sy, it.s); dummy.updateMatrix(); im.setMatrixAt(i, dummy.matrix); const k = fbm(it.x * 0.03 + 3, it.z * 0.03, 12, 2); cc.setRGB(0.8 + k * 0.5, 0.9 + k * 0.3, 0.6 + (1 - k) * 0.3); im.setColorAt(i, cc); });
    im.instanceMatrix.needsUpdate = true; im.computeBoundingSphere(); im.castShadow = false; im.receiveShadow = false; group.add(im); return im;
  };
  const NC = Math.ceil(2 * H / GR.cell);

  // ================================================================ per-frame: wind, draw-distance culling, grass streaming
  let tAcc = 0;
  const update = (dt, camPos) => {
    uni.time.value += dt; const cx = camPos.x - CMB.x, cz = camPos.z - CMB.z; tAcc += dt;
    for (const m of VEG) { const c = m.userData.c, d = Math.hypot(c[0] - cx, c[1] - cz); m.visible = d < m.userData.cull; }
    for (const m of meshes) { const c = m.userData.chunk, d = Math.hypot(c[0] - cx, c[1] - cz); m.visible = d < (q === 0 ? 300 : 460) + CH; }
    const ci0 = Math.floor((cx - GR.range + H) / GR.cell), ci1 = Math.floor((cx + GR.range + H) / GR.cell), cj0 = Math.floor((cz - GR.range + H) / GR.cell), cj1 = Math.floor((cz + GR.range + H) / GR.cell);
    for (const [k, v] of GR.done) { if (!v) continue; const [ci, cj] = k.split(',').map(Number), mx = -H + (ci + 0.5) * GR.cell, mz = -H + (cj + 0.5) * GR.cell; v.visible = Math.hypot(mx - cx, mz - cz) < GR.range + GR.cell * 0.75; }
    let made = 0;
    for (let ci = Math.max(0, ci0); ci <= Math.min(NC - 1, ci1) && made < 1; ci++) for (let cj = Math.max(0, cj0); cj <= Math.min(NC - 1, cj1) && made < 1; cj++) {
      const k = ci + ',' + cj; if (GR.done.has(k)) continue; const mx = -H + (ci + 0.5) * GR.cell, mz = -H + (cj + 0.5) * GR.cell; if (Math.hypot(mx - cx, mz - cz) > GR.range + GR.cell * 0.5) continue;
      GR.done.set(k, grassCell(ci, cj)); made++;
    }
  };
  // build the first grass cells now so the ground is not bald when the match starts
  const warm = (camPos) => { const cx = camPos.x - CMB.x, cz = camPos.z - CMB.z; for (let ci = Math.floor((cx - 60 + H) / GR.cell); ci <= Math.floor((cx + 60 + H) / GR.cell); ci++) for (let cj = Math.floor((cz - 60 + H) / GR.cell); cj <= Math.floor((cz + 60 + H) / GR.cell); cj++) { const k = ci + ',' + cj; if (ci < 0 || cj < 0 || ci >= NC || cj >= NC || GR.done.has(k)) continue; GR.done.set(k, grassCell(ci, cj)); } };
  return { group, update, warm, quality: q };
}
const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
