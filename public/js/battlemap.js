// BATTLE MAP graphics (client only): turns the data of combat.js into a detailed, mobile-friendly landscape.
// Everything is generated in code (no downloads): textured terrain, river banks, roads with markings, a bridge, ~50 buildings with windows / doors / roofs / furniture,
// instanced forests (pines + broadleaf), bushes, boulders and swaying grass that is only created near the player, fields, fences, power lines, silos and a windmill.
// quality 0 = phones (fewer / shorter things), 1 = middle, 2 = laptops.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { TW, towerWins, CMB, cmbH, riverX, layout, BRIDGE, ROADS, FIELDS, distRoad, onPad, inField, fbm } from './combat.js';

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

export function buildBattleMap(quality = 1) { flags.length = 0;
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
  { const step = q === 0 ? 5 : q === 1 ? 4 : 3, half = H + 26, n = Math.round(2 * half / step), vs = (n + 1) * (n + 1), pos = new Float32Array(vs * 3), col = new Float32Array(vs * 3), uv = new Float32Array(vs * 2), hh = new Float32Array(vs), cn = new Float32Array(vs);
    for (let j = 0; j <= n; j++) for (let i = 0; i <= n; i++) { const x = -half + i * step, z = -half + j * step, k = j * (n + 1) + i; hh[k] = cmbH(x, z); pos[k * 3] = x; pos[k * 3 + 1] = hh[k]; pos[k * 3 + 2] = z; uv[k * 2] = x / 9; uv[k * 2 + 1] = z / 9; }
    const c = new THREE.Color(), grassA = new THREE.Color('#6f9a3e'), grassB = new THREE.Color('#9aa34a'), dry = new THREE.Color('#b5a85a'), sand = new THREE.Color('#bba982'), rock = new THREE.Color('#8e8778'), snow = new THREE.Color('#d9dcdf'), mud = new THREE.Color('#6a5a3e'), field = new THREE.Color('#79a143'), concC = new THREE.Color('#b9b8b0');
    for (let j = 0; j <= n; j++) for (let i = 0; i <= n; i++) {
      const k = j * (n + 1) + i, x = pos[k * 3], z = pos[k * 3 + 2], h = hh[k], hx = hh[j * (n + 1) + Math.min(n, i + 1)] - hh[j * (n + 1) + Math.max(0, i - 1)], hz = hh[Math.min(n, j + 1) * (n + 1) + i] - hh[Math.max(0, j - 1) * (n + 1) + i], slope = Math.hypot(hx, hz) / (2 * step);
      const f = fbm(x * 0.02 + 9, z * 0.02 + 4, 77, 3), f2 = fbm(x * 0.07, z * 0.07, 5, 2); c.copy(grassA).lerp(grassB, smooth(0.35, 0.7, f)).lerp(dry, smooth(0.55, 0.85, f2) * 0.5);
      c.lerp(mud, smooth(0.5, 0.75, fbm(x * 0.05 + 1, z * 0.05, 31, 2)) * 0.25);
      if (h < 1.0) c.lerp(sand, smooth(1.0, -0.8, h) * 0.9); if (h < -1.0) c.lerp(mud, 0.6);   // river banks and the bed
      c.lerp(rock, smooth(0.42, 0.85, slope + (h > 30 ? 0.15 : 0)));   // steep hillsides are rock
      if (h > 50) c.lerp(snow, smooth(50, 62, h) * 0.8);
      const dr = distRoad(x, z); if (dr < 2.5) c.lerp(sand, 0.25 * (1 - dr / 2.5));
      const cz0 = conc(x, z); cn[k] = cz0; if (cz0 > 0) c.lerp(concC, cz0 * (h < 0.4 ? 0 : 1)); cn[k] = h < 0.4 ? 0 : cz0;
      const sh = 0.92 + 0.16 * (fbm(x * 0.4, z * 0.4, 8, 2));   // a little speckle
      col[k * 3] = c.r * sh; col[k * 3 + 1] = c.g * sh; col[k * 3 + 2] = c.b * sh;
    }
    const idx = new Uint32Array(n * n * 6); let q6 = 0; for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) { const a = j * (n + 1) + i, b = a + 1, d = a + n + 1, e = d + 1; idx[q6++] = a; idx[q6++] = d; idx[q6++] = b; idx[q6++] = b; idx[q6++] = d; idx[q6++] = e; }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); g.setAttribute('aConc', new THREE.BufferAttribute(cn, 1)); g.setIndex(new THREE.BufferAttribute(idx, 1)); g.computeVertexNormals();
    const tmat = new THREE.MeshStandardMaterial({ vertexColors: true, map: T.grass, bumpMap: T.grassBump, bumpScale: 2.2, roughness: 0.96 });
    tmat.onBeforeCompile = (sh) => { sh.vertexShader = 'attribute float aConc;\nvarying float vConc;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n vConc = aConc;'); sh.fragmentShader = 'varying float vConc;\n' + sh.fragmentShader.replace('#include <color_fragment>', '#include <color_fragment>\n { float lum = dot(texture2D(map, vMapUv).rgb, vec3(0.3333)); diffuseColor.rgb = mix(diffuseColor.rgb, vColor.rgb * (0.35 + 2.2 * lum), vConc); }'); };
    const tm = new THREE.Mesh(g, tmat); tm.receiveShadow = true; tm.frustumCulled = false; group.add(tm);
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
    const wallC = b.c, trimC = b.kind === 'house' || b.kind === 'shop' || b.kind === 'apart' || b.kind === 'clinic' ? '#f2efe6' : '#3a3530';
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
    else if (b.kind !== 'clinic') { for (const [x0, z0, x1, z1] of [[-hx, -hz, hx, -hz + 0.3], [-hx, hz - 0.3, hx, hz], [-hx, -hz, -hx + 0.3, hz], [hx - 0.3, -hz, hx, hz]]) B.box('wall', b.x + x0 - 0.3, fy + tri + 0.3, b.z + z0 - 0.3, b.x + x1 + 0.3, fy + tri + 0.85, b.z + z1 + 0.3, wallC, 0.03); if (b.kind !== 'clinic') B.box('trim', b.x - 2, fy + tri + 0.3, b.z - 1.5, b.x + 1.2, fy + tri + 1.2, b.z + 0.8, '#6c6c70', 0.02); }   // flat roof: a parapet and a roof box
    if (b.kind === 'clinic') {   // Dr. Ikrma's house: cream bands between the floors, a red cross on the front, a water tank on a V-shaped roof
      const fh = b.fh, cr = '#f4eddc', roofY = fy + tri + 0.3;
      const zf = b.z + hz, bx = b.x, capY = fy + tri + 0.85;
      // -- a copy of Dr. Ikrma's real house (the Danial Clinic photo): sandstone walls, arched windows with black iron grilles, blind arches at both ends,
      //    spiked balusters on the roof, a tall arched tower bay over the door with a white sign board, shop shutters + boards under a brown awning
      const tan = '#b88f66', cream = '#e8d3ae', dark = '#1b1a1a', iron = '#141414', zO = zf + 0.2;
      for (const [yy, ov, hh] of [[fy + fh - 0.05, 0.16, 0.34], [fy + tri, 0.34, 0.3]]) for (const [x0, z0, x1, z1] of [[-hx - ov, -hz - ov, hx + ov, -hz + 0.1], [-hx - ov, hz - 0.1, hx + ov, hz + ov], [-hx - ov, -hz - ov, -hx + 0.1, hz + ov], [hx - 0.1, -hz - ov, hx + ov, hz + ov]]) B.box('trim', b.x + x0, yy, b.z + z0, b.x + x1, yy + hh, b.z + z1, tan, 0);
      for (const sx of [-1, 1]) B.box('trim', bx + sx * (hx - 0.35) - 0.35, fy, zf - 0.02, bx + sx * (hx - 0.35) + 0.35, fy + tri + 0.3, zf + 0.22, tan, 0);   // corner pilasters
      const half = (cx, yy, r, z0, z1, col) => { const g = new THREE.CylinderGeometry(r, r, z1 - z0, 18, 1, false, Math.PI / 2, Math.PI); g.rotateX(Math.PI / 2); g.translate(cx, yy, (z0 + z1) / 2); B.add('trim', g, col, 0); };
      for (const o of b.openings) if (o.k === 'win') {
        const alongX = o.s === 'N' || o.s === 'S', sg = o.s === 'N' || o.s === 'W' ? -1 : 1, f = (alongX ? b.d : b.w) / 2 * sg, ex = alongX ? b.x + o.c : b.x + f, ez = alongX ? b.z + f : b.z + o.c, y0 = fy + o.y0, y1 = fy + o.y1, hw = o.hw, up = o.y0 > fh;
        const arch = (r, th, dz, col, yy) => { const g = new THREE.CylinderGeometry(r, r, th, 14, 1, false, Math.PI / 2, Math.PI); g.rotateX(Math.PI / 2); if (!alongX) g.rotateY(Math.PI / 2); g.translate(ex + (alongX ? 0 : sg * dz), yy, ez + (alongX ? sg * dz : 0)); B.add('trim', g, col, 0); };
        if (up) { arch(hw + 0.22, 0.2, 0.2, tan, y1); arch(hw + 0.02, 0.26, 0.2, dark, y1); }   // the arched surround and its dark fanlight
        else if (alongX) B.box('trim', ex - hw - 0.25, y1 + 0.05, ez + sg * 0.2 - 0.1, ex + hw + 0.25, y1 + 0.3, ez + sg * 0.2 + 0.1, tan, 0); else B.box('trim', ex + sg * 0.2 - 0.1, y1 + 0.05, ez - hw - 0.25, ex + sg * 0.2 + 0.1, y1 + 0.3, ez + hw + 0.25, tan, 0);
        const top = up ? y1 + hw * 0.7 : y1;
        for (let i = -3; i <= 3; i++) { const xx = i * hw / 3.2; if (alongX) B.box('trim', ex + xx - 0.02, y0, ez + sg * 0.3 - 0.02, ex + xx + 0.02, top, ez + sg * 0.3 + 0.02, iron, 0); else B.box('trim', ex + sg * 0.3 - 0.02, y0, ez + xx - 0.02, ex + sg * 0.3 + 0.02, top, ez + xx + 0.02, iron, 0); }   // black iron grille bars
        if (alongX) B.box('trim', ex - hw, (y0 + y1) / 2, ez + sg * 0.3 - 0.03, ex + hw, (y0 + y1) / 2 + 0.05, ez + sg * 0.3 + 0.03, iron, 0); else B.box('trim', ex + sg * 0.3 - 0.03, (y0 + y1) / 2, ez - hw, ex + sg * 0.3 + 0.03, (y0 + y1) / 2 + 0.05, ez + hw, iron, 0);
      }
      const plane = (w, h, x, y, z, map, alpha) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial(alpha ? { map, transparent: true, alphaTest: 0.5 } : { map })); m.position.set(x, y, z); group.add(m); return m; };
      // blind arches with the cracked stone pattern at both ends of the upper floor
      for (const sx of [-1, 1]) { const cx = bx + sx * 12.3, hw2 = 1.3, ya = fy + 3.95, sp = fy + 5.7, hh = sp - ya + hw2;
        B.box('trim', cx - hw2 - 0.15, ya - 0.1, zO, cx + hw2 + 0.15, sp, zO + 0.06, tan, 0); half(cx, sp, hw2 + 0.15, zO, zO + 0.06, tan);
        plane(hw2 * 2, hh, cx, ya + hh / 2, zO + 0.08, signTex('', '', '', 160, 188, 5), true); }
      // roof: a balustrade of spiked balusters between square posts, all round
      B.box('trim', bx - hx - 0.34, capY, b.z - hz - 0.34, bx + hx + 0.34, capY + 0.1, b.z + hz + 0.34, tan, 0);
      { const sp = new THREE.OctahedronGeometry(0.2); sp.scale(0.5, 2.1, 0.5); const geos = []; const posts = [];
        for (const [x0, z0, x1, z1, al] of [[-hx, -hz, hx, -hz, 1], [-hx, hz, hx, hz, 1], [-hx, -hz, -hx, hz, 0], [hx, -hz, hx, hz, 0]]) {
          const len = al ? x1 - x0 : z1 - z0, gap = (pz0) => !al && x0 > 0 && Math.abs(pz0 - b.z) < 2.3; for (let u = 0.3; u < len; u += 0.5) { const px = al ? bx + x0 + u : bx + x0, pz = al ? b.z + z0 : b.z + z0 + u; if (gap(pz)) continue; const g = sp.clone(); g.translate(px, capY + 0.1 + 0.42, pz); geos.push(g); }
          for (let u = 0; u <= len + 0.01; u += 2.4) { const px = al ? bx + x0 + u : bx + x0, pz = al ? b.z + z0 : b.z + z0 + u; if (gap(pz) && Math.abs(pz - b.z) < 2.0) continue; B.box('trim', px - 0.11, capY + 0.1, pz - 0.11, px + 0.11, capY + 0.86, pz + 0.11, cream, 0); }
          if (al) B.box('trim', bx + x0 - 0.1, capY + 0.86, b.z + z0 - 0.1, bx + x1 + 0.1, capY + 0.96, b.z + z0 + 0.1, cream, 0); else if (x0 > 0) { B.box('trim', bx + x0 - 0.1, capY + 0.86, b.z + z0 - 0.1, bx + x0 + 0.1, capY + 0.96, b.z - 2.2, cream, 0); B.box('trim', bx + x0 - 0.1, capY + 0.86, b.z + 2.2, bx + x0 + 0.1, capY + 0.96, b.z + z1 + 0.1, cream, 0); } else B.box('trim', bx + x0 - 0.1, capY + 0.86, b.z + z0 - 0.1, bx + x0 + 0.1, capY + 0.96, b.z + z1 + 0.1, cream, 0); }
        if (geos.length) B.add('trim', mergeGeometries(geos), cream, 0); }
      // the tall arched tower bay over the door: the white sign board, a ledge, and the niche with two tall blue windows
      { const bw = 1.9, spr = fy + 9.1, bzb = zO - 0.6, bzf = zO + 0.2, yb = fy + 3.7;
        B.box('wall', bx - bw, yb, bzb, bx + bw, spr, bzf, b.c, 0.02); half(bx, spr, bw, bzb, bzf, b.c);
        for (const sx of [-1, 1]) B.box('trim', bx + sx * bw - (sx > 0 ? 0 : 0.18), yb, bzf - 0.05, bx + sx * bw + (sx > 0 ? 0.18 : 0), spr, bzf + 0.12, tan, 0); half(bx, spr, bw + 0.18, bzf - 0.05, bzf + 0.12, tan);
        B.box('trim', bx - bw - 0.3, fy + 6.0, bzf - 0.05, bx + bw + 0.3, fy + 6.16, bzf + 0.4, tan, 0);   // the ledge under the niche
        B.box('trim', bx - 1.45, fy + 6.45, bzf, bx + 1.45, spr, bzf + 0.04, dark, 0); half(bx, spr, 1.45, bzf, bzf + 0.04, dark);
        for (const sx of [-1, 1]) { const x0 = sx > 0 ? 0.32 : -1.28, x1 = sx > 0 ? 1.28 : -0.32; B.box('trim', bx + x0, fy + 6.65, bzf + 0.04, bx + x1, fy + 8.6, bzf + 0.07, '#46658f', 0); half(bx + (x0 + x1) / 2, fy + 8.6, 0.48, bzf + 0.04, bzf + 0.07, '#46658f'); B.box('trim', bx + (x0 + x1) / 2 - 0.02, fy + 6.65, bzf + 0.07, bx + (x0 + x1) / 2 + 0.02, fy + 9.05, bzf + 0.09, iron, 0); }
        B.box('trim', bx - 0.3, fy + 6.45, bzf + 0.04, bx + 0.3, spr + 0.9, bzf + 0.1, cream, 0); B.box('trim', bx - 0.18, fy + 7.4, bzf + 0.1, bx + 0.18, fy + 7.8, bzf + 0.13, '#3f5d46', 0);
        B.box('trim', bx - 1.38, fy + 4.0, bzf, bx + 1.38, fy + 5.7, bzf + 0.05, tan, 0);
        plane(2.5, 1.55, bx, fy + 4.85, bzf + 0.07, signTex('ساڈا گھر', '', '', 400, 248, 3)); }
      // shop shutters + boards on the ground floor, under a brown awning
      B.box('trim', bx - hx - 0.1, fy + 3.12, zO, bx + hx + 0.1, fy + 3.26, zO + 0.95, '#8a6347', 0); B.box('trim', bx - hx - 0.1, fy + 3.02, zO + 0.9, bx + hx + 0.1, fy + 3.26, zO + 0.95, '#6d4c35', 0);
      for (const sx of [-1, 1]) { plane(3.3, 2.35, bx + sx * 11.95, fy + 1.22, zO + 0.04, signTex('', '', '', 160, 170, 4));
        plane(3.3, 0.55, bx + sx * 11.95, fy + 2.78, zO + 0.04, signTex('', sx > 0 ? '#2d6b57' : '#f4f0e2', sx > 0 ? '#ffffff' : '#1d2f6e', 330, 56, 2));
        plane(1.7, 0.95, bx + sx * 3.05, fy + 2.0, zO + 0.04, signTex('', sx > 0 ? '#e8c040' : '#f4f0e2', '#1d1d1d', 170, 96, 2));
        B.box('trim', bx + sx * 3.05 - 0.9, fy + 1.48, zO, bx + sx * 3.05 + 0.9, fy + 2.52, zO + 0.03, tan, 0); }
      B.box('trim', bx + 6.4, fy + fh + 2.0, zf, bx + 7.5, fy + fh + 2.55, zf + 0.45, '#ecebe7', 0.01); B.box('trim', bx + 6.5, fy + fh + 2.1, zf + 0.44, bx + 7.4, fy + fh + 2.14, zf + 0.46, '#8a8a8a', 0); B.box('trim', bx + 6.5, fy + fh + 2.3, zf + 0.44, bx + 7.4, fy + fh + 2.34, zf + 0.46, '#8a8a8a', 0);
      for (const yy of [fy + fh - 1.3, fy + fh - 1.55, fy + fh + 1.6]) B.box('trim', bx - hx, yy, zf + 0.34, bx + hx, yy + 0.025, zf + 0.37, '#17171a', 0);
      const tx = b.x + 10, tz = b.z - 5; { const g = new THREE.CylinderGeometry(0.95, 1.05, 1.5, 14); g.translate(tx, roofY + 0.75 + 0.4, tz); B.add('metal', g, '#1d2024', 0.02); const g2 = new THREE.CylinderGeometry(0.3, 0.3, 0.12, 10); g2.translate(tx, roofY + 2.0 + 0.2, tz); B.add('metal', g2, '#2d3136', 0); }
      B.box('metal', tx - 1.1, roofY, tz - 1.1, tx + 1.1, roofY + 0.4, tz + 1.1, '#8d9096', 0.02);
      // v247: no second roof over the tank any more; the stair hole gets a bright yellow rim (you can see where the stairs go down) and the jump-down gap in the east railing a yellow edge line
      if (b.roofHole) { const H = b.roofHole, y0 = roofY + 0.02, y1 = roofY + 0.06, w = 0.14; for (const [a, c, d, e] of [[H.x0 - w, H.z0 - w, H.x1 + w, H.z0], [H.x0 - w, H.z1, H.x1 + w, H.z1 + w], [H.x0 - w, H.z0, H.x0, H.z1], [H.x1, H.z0, H.x1 + w, H.z1]]) B.box('trim', b.x + a, y0, b.z + c, b.x + d, y1, b.z + e, '#ffd23f', 0); }
      B.box('trim', b.x + hx - 0.5, roofY + 0.02, b.z - 2.2, b.x + hx - 0.36, roofY + 0.06, b.z + 2.2, '#ffd23f', 0);
    }
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
    const mat = p.k === 'container' ? 'metal' : p.k === 'pallet' || p.k === 'crate' || p.k === 'bale' || p.k === 'stall' || p.k === 'bench' || p.k === 'desk' || p.k === 'counter' ? 'wood' : p.k === 'rack' || p.k === 'barrel' ? 'metal' : p.k === 'barrier' ? 'wall' : 'trim';
    B.box(mat, p.x - p.w / 2, p.y - (p.k === 'container' || p.k === 'crate' || p.k === 'sandbag' || p.k === 'barrel' || p.k === 'barrier' ? 0.4 : 0), p.z - p.d / 2, p.x + p.w / 2, p.y + p.h, p.z + p.d / 2, p.c, 0.06);
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
    const t = L.towers.find((q) => Math.abs(q.x - p.x) < 0.1 && Math.abs(q.z - p.z) < 0.1), py = t.py, gy = p.y, X = p.x, Z = p.z, wc = '#a5a59f';
    const O = TW.O, S2 = TW.S2, K = TW.K;
    // v222: a ROUND tower - a real cylinder wall with a door, a round core, and a true spiral stair (wedge-shaped steps, no corners, no landings)
    const NS = TW.n, DPH = 2 * Math.PI / TW.per, ST = TW.ST, DOOR = TW.door;
    const sector = (r0, r1, ph0, ph1, y0, h, seg = 6) => {   // a ring slice (r0..r1, angle ph0..ph1 measured from the door side), as a solid
      const sh = new THREE.Shape(), a0 = ph0 - Math.PI / 2, a1 = ph1 - Math.PI / 2, full = ph1 - ph0 >= Math.PI * 2 - 1e-6;
      if (r0 <= 0.001) { sh.absarc(0, 0, r1, 0, Math.PI * 2, false); } else if (full) { sh.absarc(0, 0, r1, 0, Math.PI * 2, false); const hole = new THREE.Path(); hole.absarc(0, 0, r0, 0, Math.PI * 2, true); sh.holes.push(hole); }
      else { sh.moveTo(r1 * Math.cos(a0), r1 * Math.sin(a0)); sh.absarc(0, 0, r1, a0, a1, false); sh.lineTo(r0 * Math.cos(a1), r0 * Math.sin(a1)); sh.absarc(0, 0, r0, a1, a0, true); sh.closePath(); }
      const g = new THREE.ExtrudeGeometry(sh, { depth: h, bevelEnabled: false, curveSegments: seg }); g.rotateX(-Math.PI / 2); g.translate(X, y0, Z); return g; };
    B.add('wall', sector(S2, O, DOOR, Math.PI * 2 - DOOR, gy - 1, 3.9, 56), wc, 0.04);   // the wall below the door lintel: open at the door
    { let cur = gy + 2.9; for (const w of towerWins(gy)) { B.add('wall', sector(S2, O, 0, Math.PI * 2, cur, w.y0 - cur, 56), wc, 0.04); B.add('wall', sector(S2, O, w.ph + w.hw, w.ph - w.hw + Math.PI * 2, w.y0, w.y1 - w.y0, 56), wc, 0.04); cur = w.y1; }   // v237: the wall with the shooting windows cut out
      B.add('wall', sector(S2, O, TW.ledge + TW.lhw, TW.ledge - TW.lhw + Math.PI * 2, cur, py + 1.2 - cur, 56), wc, 0.04); B.add('wall', sector(S2, O, TW.ledge - TW.lhw, TW.ledge + TW.lhw, cur, py - 0.3 - cur, 12), wc, 0.04);   // v251: the roof wall has a gap = the LEDGE to jump from
      B.add('wall', sector(O - 0.9, O + 0.02, TW.ledge - TW.lhw, TW.ledge + TW.lhw, py - 0.3, 0.34, 8), '#ffcc00', 0.03); B.add('wall', sector(O - 0.45, O + 0.03, TW.ledge - TW.lhw, TW.ledge + TW.lhw, py - 0.3, 0.345, 8), '#1c1c1c', 0.03); }   // yellow + black hazard edge
    B.add('wall', sector(0, K, 0, Math.PI * 2, gy - 1, py - 0.3 - (gy - 1), 28), wc, 0.04);   // the round core
    for (let y = gy + 3.4; y < py; y += 3.4) { const bg = new THREE.CylinderGeometry(O + 0.06, O + 0.06, 0.22, 56, 1, true); bg.translate(X, y + 0.11, Z); B.add('trim', bg, '#8d8d87', 0); }   // bands round the shaft
    { const bg = new THREE.CylinderGeometry(O + 0.08, O + 0.08, 0.15, 56, 1, true, TW.ledge + TW.lhw, Math.PI * 2 - 2 * TW.lhw); bg.translate(X, py + 0.875, Z); B.add('trim', bg, '#8d8d87', 0); } B.box('trim', X - 1.5, gy + 2.9, Z + O - 0.05, X + 1.5, gy + 3.05, Z + O + 0.05, '#6a6a66', 0);
    B.add('wall', sector(0, K + 0.01, 0, Math.PI * 2, py - 0.3, 0.3, 28), '#94948e', 0.03); B.add('wall', sector(K, S2 + 0.02, 0, TW.open, py - 0.3, 0.3, 28), '#94948e', 0.03);   // the roof (open over the last steps)
    for (let i = 0; i < NS; i++) { const top = gy + (i + 1) * ST, g = sector(K - 0.02, S2 - 0.42, i * DPH, (i + 1) * DPH + 0.004, top - 0.5, 0.5, 2); B.add('wall', g, '#8a8a84', 0.05); }   // the steps: one wedge each, 0.3 m higher than the one before
    B.box('metal', X + 2.0, py, Z - 2.2, X + 2.2, py + 7.5, Z - 2.0, '#cfcfcf', 0);   // the flag mast
    const fl = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 2.2, 12, 6), new THREE.MeshBasicMaterial({ map: flagTex(t.flag), side: THREE.DoubleSide })); fl.position.set(X + 2.2 + 1.7, py + 6.2, Z - 2.1); fl.userData.base = fl.geometry.attributes.position.array.slice(); flags.push(fl); group.add(fl);
    // the parachute pack on the roof, with a marker you can see from far off
    { const ic = new THREE.Group(), M = (c) => new THREE.MeshBasicMaterial({ color: c, side: THREE.DoubleSide }), mo = M('#ff7a1a'), mw = M('#f4f1e6');   // v222: a spinning PARACHUTE symbol (canopy, lines, pack) instead of a plain box
      for (let k = 0; k < 8; k++) { const c = new THREE.Mesh(new THREE.SphereGeometry(0.95, 5, 6, k * Math.PI / 4, Math.PI / 4, 0, Math.PI / 2), k % 2 ? mw : mo); c.scale.y = 0.75; c.position.y = 0.55; ic.add(c); }
      const lm = M('#e8e4d6'); for (let k = 0; k < 8; k++) { const an = k * Math.PI / 4 + Math.PI / 8, x = Math.cos(an) * 0.93, z = Math.sin(an) * 0.93, d = new THREE.Vector3(-x, -1.03, -z), l = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, d.length(), 3), lm); l.position.set(x + d.x / 2, 0.55 + d.y / 2, z + d.z / 2); l.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()); ic.add(l); }
      const pk = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.44, 0.22), M('#3f5d34')); pk.position.y = -0.7; ic.add(pk); ic.scale.setScalar(0.5); ic.position.set(X, py + 1.15, Z - 0.2); ic.userData.y0 = py + 1.15; group.add(ic); ICONS.push(ic);
      const pad = new THREE.Mesh(new THREE.RingGeometry(0.75, 0.95, 32), new THREE.MeshBasicMaterial({ color: '#ffb02a', transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false })); pad.rotation.x = -Math.PI / 2; pad.position.set(X, py + 0.04, Z - 0.2); group.add(pad); }
    { const cv = document.createElement('canvas'); cv.width = 256; cv.height = 256; const g = cv.getContext('2d');   // v251: a small PARACHUTE picture on a sign at the ledge: "jump from here"
      g.fillStyle = '#ffd60a'; g.fillRect(0, 0, 256, 256); g.fillStyle = '#16161a'; g.fillRect(8, 8, 240, 240); g.fillStyle = '#ffd60a'; g.fillRect(14, 14, 228, 228);
      for (let k = 0; k < 6; k++) { g.fillStyle = k % 2 ? '#f4f1e6' : '#e8442a'; g.beginPath(); g.moveTo(128, 120); g.arc(128, 120, 78, Math.PI + k * Math.PI / 6, Math.PI + (k + 1) * Math.PI / 6); g.closePath(); g.fill(); }
      g.strokeStyle = '#222'; g.lineWidth = 2; for (let k = 0; k <= 6; k++) { const a = Math.PI + k * Math.PI / 6; g.beginPath(); g.moveTo(128 + Math.cos(a) * 78, 120 + Math.sin(a) * 78); g.lineTo(128, 172); g.stroke(); }
      g.fillStyle = '#222'; g.fillRect(122, 172, 12, 18); g.beginPath(); g.arc(128, 168, 5, 0, 7); g.fill(); g.font = 'bold 30px sans-serif'; g.textAlign = 'center'; g.fillText('JUMP HERE', 128, 222);
      const tx = new THREE.CanvasTexture(cv), sg = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.1), new THREE.MeshBasicMaterial({ map: tx, side: THREE.DoubleSide })), r = S2 - 0.5; sg.position.set(X + Math.sin(TW.ledge) * r, py + 0.75, Z + Math.cos(TW.ledge) * r); sg.rotation.y = TW.ledge + Math.PI; group.add(sg);
      const pole = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.06), new THREE.MeshBasicMaterial({ color: '#555' })); pole.position.set(sg.position.x, py + 0.25, sg.position.z); group.add(pole); }
    const bm = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 14, 10, 1, true), new THREE.MeshBasicMaterial({ color: '#ffb02a', transparent: true, opacity: 0.22, depthWrite: false, side: THREE.DoubleSide })); bm.position.set(X, py + 7, Z - 0.2); group.add(bm);
  } else generic(p); }
  // the base's fence: posts, two rails and a sloping barbed top; farm fences round the fields
  const postFence = (x0, z0, x1, z1, col, h, step) => { const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, z1 - z0) / step)); for (let i = 0; i <= n; i++) { const x = x0 + (x1 - x0) * i / n, z = z0 + (z1 - z0) * i / n, y = cmbH(x, z); B.box('trim', x - 0.07, y - 0.3, z - 0.07, x + 0.07, y + h, z + 0.07, col, 0.05); if (i < n) { const xn = x0 + (x1 - x0) * (i + 1) / n, zn = z0 + (z1 - z0) * (i + 1) / n, yn = cmbH(xn, zn); for (const k of [0.45, 0.92]) { const g = new THREE.BoxGeometry(Math.hypot(xn - x, zn - z), 0.06, 0.05); g.rotateZ(Math.atan2(yn - y, Math.hypot(xn - x, zn - z))); g.rotateY(-Math.atan2(zn - z, xn - x)); g.translate((x + xn) / 2, (y + yn) / 2 + h * k, (z + zn) / 2); B.add('trim', g, col, 0.04); } } } };
  for (const f of L.fences) postFence(f.x0, f.z0, f.x1, f.z1, f.col || '#6c7078', f.h || 1.15, 3);   /* v258: low fences with gates (they are solid now) */
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
  const FADE = { v: new THREE.Vector2(120, 140) };
  const matInst = (o, fade) => { const m = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, ...o }); if (fade) m.onBeforeCompile = (sh) => { sh.uniforms.uFade = { value: fade }; sh.vertexShader = 'varying float vFd;\n' + sh.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\nvFd = length(mvPosition.xyz);'); sh.fragmentShader = 'varying float vFd;\nuniform vec2 uFade;\n' + sh.fragmentShader.replace('void main() {', 'void main() {\n float dt = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));\n if (vFd > uFade.x && (vFd - uFade.x) / (uFade.y - uFade.x) > dt) discard;'); }; return m; };
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
  const makeInst = (geo, mat, items, cull, cast, setCol, farGeo, farMat, farCull) => {   // items: [{x,y,z,s,r}] -> chunked InstancedMeshes (120 m cells)
    const cells = new Map(); for (const it of items) { const k = Math.floor((it.x + H) / 120) + ',' + Math.floor((it.z + H) / 120); let a = cells.get(k); if (!a) cells.set(k, a = []); a.push(it); }
    for (const a of cells.values()) {
      const im = new THREE.InstancedMesh(geo, mat, a.length); a.forEach((it, i) => { dummy.position.set(it.x, it.y, it.z); dummy.rotation.set(0, it.r, 0); dummy.scale.set(it.s * (it.sx || 1), it.s * (it.sy || 1), it.s * (it.sx || 1)); dummy.updateMatrix(); im.setMatrixAt(i, dummy.matrix); if (setCol) { setCol(tcol, it); im.setColorAt(i, tcol); } });
      im.instanceMatrix.needsUpdate = true; im.computeBoundingSphere(); im.castShadow = cast; im.receiveShadow = true; im.userData.c = [im.boundingSphere.center.x, im.boundingSphere.center.z]; im.userData.cull = cull + im.boundingSphere.radius; group.add(im); VEG.push(im);
      if (farGeo) { const fm = new THREE.InstancedMesh(farGeo, farMat, a.length); fm.instanceMatrix = im.instanceMatrix; if (im.instanceColor) fm.instanceColor = im.instanceColor; fm.count = a.length; fm.boundingSphere = im.boundingSphere; fm.castShadow = false; fm.receiveShadow = false; fm.frustumCulled = true; fm.userData.c = im.userData.c; fm.userData.near = cull - 20; fm.userData.cull = farCull + im.boundingSphere.radius; fm.visible = false; group.add(fm); VEG.push(fm); }
    }
  };
const farPine = (() => { const gs = [colorize(new THREE.CylinderGeometry(0.2, 0.3, 2.5, 4).translate(0, 1.25, 0).toNonIndexed(), () => [0.28, 0.2, 0.13]), colorize(new THREE.ConeGeometry(2.3, 6.5, 5, 1, true).translate(0, 5.2, 0).toNonIndexed(), (x, y) => lerpc([0.025, 0.085, 0.04], [0.07, 0.17, 0.07], (y - 2) / 6.5))]; return mergeGeometries(gs); })();
  const farOak = (() => { const gs = [colorize(new THREE.CylinderGeometry(0.25, 0.35, 3, 4).translate(0, 1.5, 0).toNonIndexed(), () => [0.3, 0.22, 0.15]), colorize(new THREE.IcosahedronGeometry(2.6, 0).translate(0, 4.8, 0).toNonIndexed(), (x, y) => lerpc([0.05, 0.13, 0.04], [0.16, 0.27, 0.08], (y - 2) / 5))]; return mergeGeometries(gs); })();
  const treeCull = q === 0 ? 140 : q === 1 ? 200 : 260, farCull = q === 0 ? 330 : q === 1 ? 430 : 520;
  FADE.v.set(treeCull - 25, treeCull);
  const farMatT = matInst({ roughness: 1 }, new THREE.Vector2(farCull - 60, farCull));
  makeInst(pineG, matInst({ flatShading: false }, FADE.v), L.trees.filter((t) => t.pine).map((t) => ({ ...t, s: t.s * 0.95, r: t.r })), treeCull, true, (c, it) => c.setScalar(0.85 + ((it.x * 12.9898 + it.z * 78.233) % 1 + 1) % 1 * 0.3), farPine, farMatT, farCull);
  makeInst(oakG, matInst({}, FADE.v), L.trees.filter((t) => !t.pine).map((t) => ({ ...t, s: t.s * 0.9 })), treeCull, true, (c, it) => { const k = ((it.x * 3.1 + it.z * 7.7) % 1 + 1) % 1; c.setRGB(0.85 + k * 0.3, 0.85 + (1 - k) * 0.25, 0.8 + k * 0.1); }, farOak, farMatT, farCull);
  // no boulders and no bushes: concrete barriers (combat.js) are the cover

  // ---- grass: created cell by cell (50 m) when the player gets close, swaying in the wind
  const grassG = (() => { const gs = [], gr = rngS(3), nb = q === 0 ? 4 : 7; for (let i = 0; i < nb; i++) { const a = i / nb * Math.PI + gr() * 0.5, h = 0.22 + gr() * 0.3, w = 0.045, ox = (gr() - 0.5) * 0.4, oz = (gr() - 0.5) * 0.4, bend = (gr() - 0.5) * 0.18, ca = Math.cos(a), sa = Math.sin(a);
      const P = [[-w, 0, 0], [w, 0, 0], [bend * 0.5 - w * 0.5, h * 0.55, 0], [bend * 0.5 + w * 0.5, h * 0.55, 0], [bend, h, 0]].map(([x, y, z]) => [ox + x * ca - z * sa, y, oz + x * sa + z * ca]), t = [P[0], P[1], P[2], P[1], P[3], P[2], P[2], P[3], P[4]], pos = new Float32Array(t.length * 3), col = new Float32Array(t.length * 3);
      t.forEach((v, k) => { pos[k * 3] = v[0]; pos[k * 3 + 1] = v[1]; pos[k * 3 + 2] = v[2]; const c = lerpc([0.04, 0.09, 0.025], [0.2, 0.32, 0.07], v[1] / (h + 0.01)); col.set(c, k * 3); }); const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(col, 3)); gs.push(g); } const m = mergeGeometries(gs); m.computeVertexNormals(); return m; })();
  const grassMat = matInst({ side: THREE.DoubleSide, roughness: 1 });
  grassMat.onBeforeCompile = (sh) => { sh.uniforms.uTime = uni.time; sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\n#ifdef USE_INSTANCING\n float sw = sin(uTime * 1.7 + instanceMatrix[3].x * 0.35 + instanceMatrix[3].z * 0.27) * 0.5 + sin(uTime * 3.1 + instanceMatrix[3].z * 0.6) * 0.15;\n transformed.x += sw * 0.22 * position.y; transformed.z += sw * 0.1 * position.y;\n#endif'); };
  const GR = { cell: 50, range: q === 0 ? 52 : q === 1 ? 78 : 105, dens: q === 0 ? 0.05 : q === 1 ? 0.09 : 0.15, done: new Map(), queue: [] };
  const grassCell = (ci, cj) => {
    const x0 = -H + ci * GR.cell, z0 = -H + cj * GR.cell, gr = rngS(ci * 7919 + cj * 104729 + 1), n = Math.round(GR.cell * GR.cell * GR.dens), items = [];
    for (let i = 0; i < n; i++) { const x = x0 + gr() * GR.cell, z = z0 + gr() * GR.cell, y = cmbH(x, z); if (y < -0.1 || y > 36) continue; if (distRoad(x, z) < 1.6 || onPad(x, z, 2.5) || inField(x, z) || conc(x, z) > 0.3) continue; const dx = cmbH(x + 1.5, z) - y, dz = cmbH(x, z + 1.5) - y; if (Math.hypot(dx, dz) > 0.75) continue; const d = fbm(x * 0.04, z * 0.04, 91, 2); if (d < 0.3) continue; items.push({ x, y, z, s: 0.8 + gr() * 0.7, sy: 0.7 + d * 0.8, r: gr() * 6.28, d }); }
    if (!items.length) return null;
    const im = new THREE.InstancedMesh(grassG, grassMat, items.length); const cc = new THREE.Color();
    items.forEach((it, i) => { dummy.position.set(it.x, it.y - 0.04, it.z); dummy.rotation.set(0, it.r, 0); dummy.scale.set(it.s, it.sy, it.s); dummy.updateMatrix(); im.setMatrixAt(i, dummy.matrix); const k = fbm(it.x * 0.03 + 3, it.z * 0.03, 12, 2); cc.setRGB(0.8 + k * 0.5, 0.9 + k * 0.3, 0.6 + (1 - k) * 0.3); im.setColorAt(i, cc); });
    im.instanceMatrix.needsUpdate = true; im.computeBoundingSphere(); im.castShadow = false; im.receiveShadow = false; group.add(im); return im;
  };
  const NC = Math.ceil(2 * H / GR.cell);

  // ================================================================ per-frame: wind, draw-distance culling, grass streaming
  let tAcc = 0, fAcc = 0, fN = 0, ov = null;
  const stats = (dt) => { fAcc += dt; fN++; if (fAcc < 0.5) return; const r = window.__ph && window.__ph.rend, on = /[?&]stats/.test(location.search) || window.__showStats; if (on) { if (!ov) { ov = document.createElement('div'); ov.style.cssText = 'position:fixed;left:6px;top:6px;z-index:99;font:11px monospace;color:#0f0;background:#0008;padding:3px 6px;pointer-events:none;white-space:pre'; document.body.appendChild(ov); } ov.textContent = (fN / fAcc).toFixed(0) + ' fps  ' + (fAcc / fN * 1000).toFixed(1) + ' ms' + (r ? '\n' + (r.info.render.triangles / 1000).toFixed(0) + 'k tris  ' + r.info.render.calls + ' calls' : ''); } else if (ov) { ov.remove(); ov = null; } fAcc = 0; fN = 0; };
  const update = (dt, camPos) => {
    uni.time.value += dt; stats(dt); for (const ic of ICONS) { ic.rotation.y += dt * 1.3; ic.position.y = ic.userData.y0 + Math.sin(uni.time.value * 2) * 0.12; } for (const f of flags) { const p = f.geometry.attributes.position, b0 = f.userData.base, tt = uni.time.value; for (let i = 0; i < p.count; i++) { const bx = b0[i * 3], k2 = (bx + 1.7) / 3.4; p.setZ(i, Math.sin(bx * 2.6 - tt * 4.2) * 0.14 * k2); p.setY(i, b0[i * 3 + 1] - Math.sin(bx * 2.1 - tt * 3.3) * 0.04 * k2); } p.needsUpdate = true; } const cx = camPos.x - CMB.x, cz = camPos.z - CMB.z; tAcc += dt;
    for (const m of VEG) { const c = m.userData.c, d = Math.hypot(c[0] - cx, c[1] - cz); m.visible = d < m.userData.cull && d >= (m.userData.near || 0); }
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
// how concrete the ground is at (x, z): 1 round the buildings and in big paved patches, 0 on open meadow
const conc = (x, z) => { let c = onPad(x, z, 7) ? 1 : onPad(x, z, 14) ? 0.6 : 0; const f = fbm(x * 0.013 + 40, z * 0.013 - 17, 91, 3); c = Math.max(c, smooth(0.46, 0.58, f) * 0.95); return c; };
const flags = [], ICONS = [];
const urduFam = '"GameUrdu","Noto Nastaliq Urdu","Jameel Noori Nastaleeq","Urdu Typesetting","Noto Naskh Arabic","Segoe UI",Tahoma,Arial,sans-serif';
const signTex = (txt, bg, fg, w, h, kind) => { const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d');
  const tex = () => { const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t; };
  if (kind === 3) {   // a white sign board with Urdu writing (right to left), redrawn once the fonts are ready
    const t = tex(), draw = () => { g.clearRect(0, 0, w, h); g.fillStyle = '#f7f4ec'; g.fillRect(0, 0, w, h); g.strokeStyle = '#1a2f73'; g.lineWidth = 7; g.strokeRect(4, 4, w - 8, h - 8); g.lineWidth = 2; g.strokeRect(16, 16, w - 32, h - 32);
      g.fillStyle = '#10256b'; g.direction = 'rtl'; g.textAlign = 'center'; g.textBaseline = 'middle'; let px = Math.round(h * 0.66); g.font = 'bold ' + px + 'px ' + urduFam; while (g.measureText(txt).width > w - 70 && px > 20) { px -= 4; g.font = 'bold ' + px + 'px ' + urduFam; }
      g.fillText(txt, w / 2, h / 2 + h * 0.03); t.needsUpdate = true; };
    draw(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw); return t; }
  if (kind === 4) {   // grey rolling shutter
    g.fillStyle = '#8b939b'; g.fillRect(0, 0, w, h); for (let y = 0; y < h; y += 7) { g.fillStyle = y % 14 ? '#7d858d' : '#9aa2aa'; g.fillRect(0, y, w, 3); } g.fillStyle = '#5d646b'; g.fillRect(0, h - 8, w, 8); return tex(); }
  if (kind === 5) {   // an arched panel with a cracked stone pattern (transparent outside the arch)
    const r = w / 2; g.beginPath(); g.moveTo(0, h); g.lineTo(0, r); g.arc(r, r, r, Math.PI, 0); g.lineTo(w, h); g.closePath(); g.fillStyle = '#d8bc92'; g.fill(); g.save(); g.clip();
    g.strokeStyle = '#bd9d72'; g.lineWidth = 1.5; let s = 7; const rn = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
    for (let i = 0; i < 34; i++) { g.beginPath(); let x = rn() * w, y = rn() * h; g.moveTo(x, y); for (let k = 0; k < 3; k++) { x += (rn() - 0.5) * 36; y += (rn() - 0.5) * 36; g.lineTo(x, y); } g.stroke(); }
    g.restore(); g.strokeStyle = '#b08a5c'; g.lineWidth = 5; g.beginPath(); g.moveTo(2, h); g.lineTo(2, r); g.arc(r, r, r - 2, Math.PI, 0); g.lineTo(w - 2, h); g.stroke(); return tex(); }
  g.fillStyle = bg; g.fillRect(0, 0, w, h); g.strokeStyle = kind === 1 ? '#ffffff' : '#b0a890'; g.lineWidth = 4; g.strokeRect(5, 5, w - 10, h - 10);
  g.fillStyle = fg; g.strokeStyle = fg; if (kind === 1) { g.font = '900 ' + Math.round(h * 0.5) + 'px Arial, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(txt, w / 2, h / 2 + 3, w - 30); }
  else { g.lineWidth = Math.max(3, h * 0.04); g.lineCap = 'round'; const rows = h > 100 ? 2 : 1; for (let r = 0; r < rows; r++) { g.beginPath(); let x = w - 30; const y = h / (rows + 1) * (r + 1); g.moveTo(x, y); while (x > 40) { const l = 14 + ((x * 7 + r * 13) % 22); g.bezierCurveTo(x - l * 0.3, y - h * 0.16, x - l * 0.7, y + h * 0.13, x - l, y + ((x * 3) % 9) - 4); x -= l; if (((x * 5) | 0) % 4 === 0) { g.moveTo(x + 4, y - h * 0.15); g.lineTo(x + 4, y - h * 0.22); g.moveTo(x - l * 0.3, y); } } g.stroke(); } }
  return tex(); };
const flagTex = (k) => { const c = document.createElement('canvas'); c.width = 340; c.height = 220; const g = c.getContext('2d'), W = 340, Hh = 220;
  const star = (cx, cy, r, col) => { g.fillStyle = col; g.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.4 : r; g.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } g.fill(); };
  if (k === 'pk') { g.fillStyle = '#01411c'; g.fillRect(0, 0, W, Hh); g.fillStyle = '#fff'; g.fillRect(0, 0, W / 4, Hh); g.fillStyle = '#fff'; g.beginPath(); g.arc(W * 0.62, Hh / 2, 62, 0, 7); g.fill(); g.fillStyle = '#01411c'; g.beginPath(); g.arc(W * 0.62 + 20, Hh / 2 - 6, 52, 0, 7); g.fill(); star(W * 0.69, Hh * 0.38, 22, '#fff'); }
  else if (k === 'us') { for (let i = 0; i < 13; i++) { g.fillStyle = i % 2 ? '#fff' : '#b22234'; g.fillRect(0, i * Hh / 13, W, Hh / 13 + 1); } g.fillStyle = '#3c3b6e'; g.fillRect(0, 0, W * 0.4, Hh * 7 / 13); g.fillStyle = '#fff'; for (let r = 0; r < 5; r++) for (let q2 = 0; q2 < 6; q2++) { g.beginPath(); g.arc(14 + q2 * 21 + (r % 2) * 10, 14 + r * 20, 3.4, 0, 7); g.fill(); } }
  else { g.fillStyle = '#000'; g.fillRect(0, 0, W, Hh / 3); g.fillStyle = '#fff'; g.fillRect(0, Hh / 3, W, Hh / 3); g.fillStyle = '#007a3d'; g.fillRect(0, Hh * 2 / 3, W, Hh / 3 + 1); g.fillStyle = '#ce1126'; g.beginPath(); g.moveTo(0, 0); g.lineTo(W * 0.38, Hh / 2); g.lineTo(0, Hh); g.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; };
const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
