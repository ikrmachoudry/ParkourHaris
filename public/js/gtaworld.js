// HARIS CITY: builds the 3D city (terrain, roads, buildings, trees, lamps, traffic) and its collision into the World.
import { bodyHalf } from './hitbox.js';
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { buildTrafficMesh } from './cityvis.js';
import { TrafficAI } from './trafficai.js';
import { makeWeaponModel } from './weaponmodels.js';
import { GT, gtaH, gtaBase, RAMPS, PARK, gtaRoads, gtaBuildings, gtaCars, mtRoad, mtC, PARKS, TRAFFIC, trafficPos, BLK, REPAIR, HOMES, homeW, LOBBY, STUNT, BANK, POLICE, ARMS, AUTOS, SUMMIT, SNIPE, snipeClear } from './gta.js';

const col = new THREE.Color();
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// night: which windows are lit (a 4x4 block of window cells, matches windowTexture's layout; read through the second uv set)
function litWindowTexture(glass, seed) {
  const S = 512, cv = document.createElement('canvas'); cv.width = cv.height = S; const g = cv.getContext('2d'), R = rng(seed);
  g.fillStyle = '#000'; g.fillRect(0, 0, S, S);
  const wx = glass ? 6 : 26, wy = glass ? 10 : 22, ww = 128 - wx * 2, wh = glass ? 86 : 78, cols = ['#ffd890', '#ffe7b0', '#ffc878', '#cfe4ff', '#ffdca0'];
  for (let cy = 0; cy < 4; cy++) for (let cx = 0; cx < 4; cx++) { if (cx === 0 && cy === 3) continue; if (R() > (glass ? 0.62 : 0.5)) continue; g.fillStyle = cols[Math.floor(R() * cols.length)]; g.fillRect(cx * 128 + wx, cy * 128 + wy, ww, wh); }
  const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.channel = 1; return t;
}

function windowTexture(glass) {
  const S = 128, cv = document.createElement('canvas'); cv.width = cv.height = S; const g = cv.getContext('2d');
  g.fillStyle = glass ? '#c9d3df' : '#ffffff'; g.fillRect(0, 0, S, S);
  const wx = glass ? 6 : 26, wy = glass ? 10 : 22, ww = S - wx * 2, wh = glass ? 86 : 78;
  g.fillStyle = 'rgba(0,0,0,0.22)'; g.fillRect(wx - 3, wy - 3, ww + 6, wh + 10);                     // recess shadow
  g.fillStyle = glass ? '#5b6676' : '#e9e4dc'; g.fillRect(wx - 2, wy - 2, ww + 4, wh + 4);          // frame
  const gr = g.createLinearGradient(0, wy, 0, wy + wh); gr.addColorStop(0, glass ? '#7fb2e0' : '#a9d3f5'); gr.addColorStop(0.55, glass ? '#2f5f8f' : '#6b9dc9'); gr.addColorStop(1, glass ? '#1d3a58' : '#4a6f94');
  g.fillStyle = gr; g.fillRect(wx, wy, ww, wh);
  g.fillStyle = 'rgba(255,255,255,0.28)'; g.beginPath(); g.moveTo(wx, wy + wh * 0.6); g.lineTo(wx + ww * 0.55, wy); g.lineTo(wx + ww * 0.8, wy); g.lineTo(wx, wy + wh * 0.95); g.fill();   // sky reflection streak
  g.fillStyle = glass ? '#5b6676' : '#e9e4dc'; g.fillRect(S / 2 - 1.5, wy, 3, wh); if (!glass) g.fillRect(wx, wy + wh * 0.46, ww, 3);   // mullions
  if (!glass) { g.fillStyle = '#bdb6aa'; g.fillRect(wx - 6, wy + wh + 3, ww + 12, 5); g.fillStyle = 'rgba(0,0,0,0.18)'; g.fillRect(wx - 6, wy + wh + 8, ww + 12, 4); }   // sill + its shadow
  const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

// ---- procedural detail textures (tileable): grain / patchiness for ground, asphalt, concrete
function grainTexture(size, mean, amp, fine, seed, o = {}) {
  const R = rng(seed), G = 16, grid = Array.from({ length: G * G }, () => R()), cv = document.createElement('canvas'); cv.width = cv.height = size;
  const g = cv.getContext('2d'); if (!g || !g.createImageData) return new THREE.Texture();
  const im = g.createImageData(size, size); if (!im || !im.data) return new THREE.Texture();
  const at = (i, j) => grid[((j % G) + G) % G * G + ((i % G) + G) % G];
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const fx = x / size * G, fy = y / size * G, i = Math.floor(fx), j = Math.floor(fy), tx = fx - i, ty = fy - j, sx = tx * tx * (3 - 2 * tx), sy = ty * ty * (3 - 2 * ty);
    const lo = at(i, j) * (1 - sx) * (1 - sy) + at(i + 1, j) * sx * (1 - sy) + at(i, j + 1) * (1 - sx) * sy + at(i + 1, j + 1) * sx * sy;
    const v = Math.max(0, Math.min(255, mean + (lo - 0.5) * amp + (R() - 0.5) * fine)), k = (y * size + x) * 4; im.data[k] = im.data[k + 1] = im.data[k + 2] = v; im.data[k + 3] = 255;
  }
  g.putImageData(im, 0, 0);
  if (o.cracks) { g.strokeStyle = 'rgba(10,10,14,0.2)'; g.lineWidth = 1.2; for (let c = 0; c < o.cracks; c++) { let x = R() * size, y = R() * size; g.beginPath(); g.moveTo(x, y); for (let k = 0; k < 7; k++) { x += (R() - 0.5) * 38; y += (R() - 0.3) * 30; g.lineTo(x, y); } g.stroke(); } }
  if (o.patches) { for (let c = 0; c < o.patches; c++) { g.fillStyle = `rgba(0,0,0,${0.06 + R() * 0.08})`; g.beginPath(); g.ellipse(R() * size, R() * size, 8 + R() * 30, 4 + R() * 14, R() * 3, 0, 7); g.fill(); } }
  const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}

// one building = a textured box (windows repeat by size); uv of the roof / floor points at a blank corner of the texture
function buildingGeo(b) {
  const g = new THREE.BoxGeometry(b.w, b.h, b.d), uv = g.attributes.uv, nrm = g.attributes.normal;
  for (let i = 0; i < uv.count; i++) {
    const ny = nrm.getY(i), nx = Math.abs(nrm.getX(i)), u = uv.getX(i), v = uv.getY(i);
    if (Math.abs(ny) > 0.5) { uv.setXY(i, 0.02 + u * 0.05, 0.02 + v * 0.05); continue; }
    const wide = nx > 0.5 ? b.d : b.w;
    uv.setXY(i, u * wide / 4.2, v * b.h / 3.6);
  }
  { const u1 = new Float32Array(uv.count * 2); for (let i = 0; i < uv.count; i++) { u1[i * 2] = uv.getX(i) / 4; u1[i * 2 + 1] = uv.getY(i) / 4; } g.setAttribute('uv1', new THREE.BufferAttribute(u1, 2)); }
  g.translate(b.x, b.h / 2, b.z);
  const c = col.set(b.col), n = g.attributes.position.count, cs = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { cs[i * 3] = c.r; cs[i * 3 + 1] = c.g; cs[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(cs, 3));
  return g;
}

// roads: asphalt ribbons + lane dashes as one coloured mesh
function roadGeo(roads, h) {
  const pos = [], cols = [], idx = []; let n = 0;
  const quad = (a, b, c, d, color) => { const cc = col.set(color); for (const p of [a, b, c, d]) { pos.push(p[0], p[1], p[2]); cols.push(cc.r, cc.g, cc.b); } idx.push(n, n + 1, n + 2, n, n + 2, n + 3); n += 4; };
  const ribbon = (ax, az, ay, bx, bz, by, hw, color, up) => {
    const dx = bx - ax, dz = bz - az, L = Math.hypot(dx, dz) || 1, nx = -dz / L * hw, nz = dx / L * hw;
    quad([ax - nx, ay + up, az - nz], [ax + nx, ay + up, az + nz], [bx + nx, by + up, bz + nz], [bx - nx, by + up, bz - nz], color);
  };
  for (const s of roads.segs) {
    const L = Math.hypot(s.bx - s.ax, s.bz - s.az), pieces = Math.max(1, Math.ceil(L / 6));
    for (let i = 0; i < pieces; i++) {
      const t0 = i / pieces, t1 = (i + 1) / pieces, x0 = s.ax + (s.bx - s.ax) * t0, z0 = s.az + (s.bz - s.az) * t0, x1 = s.ax + (s.bx - s.ax) * (t1 + 0.04), z1 = s.az + (s.bz - s.az) * (t1 + 0.04);
      const y0 = s.y0 + ((s.y1 === undefined ? s.y0 : s.y1) - s.y0) * t0, y1 = s.y0 + ((s.y1 === undefined ? s.y0 : s.y1) - s.y0) * Math.min(1, t1 + 0.04);
      ribbon(x0, z0, y0, x1, z1, y1, s.hw, '#3d414e', 0.09);
      ribbon(x0, z0, y0, x1, z1, y1, s.hw - 0.25, '#464b5a', 0.095);
      { // continuous white edge lines (not through junctions)
        const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2; let junction = false;
        if (s.g[0] === 'x') junction = GT.GRID.some((g) => Math.abs(mz - g) < GT.HW + 0.5); else if (s.g[0] === 'z') junction = GT.GRID.some((g) => Math.abs(mx - g) < GT.HW + 0.5);
        if (!junction && (s.g[0] === 'x' || s.g[0] === 'z' || s.g === 'ring')) { const dx = x1 - x0, dz = z1 - z0, Ls = Math.hypot(dx, dz) || 1, ox = -dz / Ls * (s.hw - 0.55), oz = dx / Ls * (s.hw - 0.55); for (const sg of [-1, 1]) ribbon(x0 + ox * sg, z0 + oz * sg, y0, x1 + ox * sg, z1 + oz * sg, y1, 0.07, '#e9e9e4', 0.105); }
      }
      if (s.g === 'link' || i % 2 === 0) {
        // skip dashes at crossings of the grid
        const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2; let skip = false;
        if (s.g[0] === 'x') skip = GT.GRID.some((g) => Math.abs(mz - g) < GT.HW + 1); else if (s.g[0] === 'z') skip = GT.GRID.some((g) => Math.abs(mx - g) < GT.HW + 1);
        if (!skip) ribbon(x0, z0, y0, x1, z1, y1 - (y1 - y0) * 0.2, 0.08, '#f2f2ee', 0.11);
      }
    }
  }
  { // zebra crossings on every arm of every junction of the city grid
    const G = GT.GRID, hw = GT.HW;
    for (const gx of G) for (const gz of G) for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const ex = gx + dx * 60, ez = gz + dz * 60; if (Math.abs(ex) > 241 || Math.abs(ez) > 241) continue;   // that arm of the junction does not exist
      const cx = gx + dx * (hw + 2.2), cz = gz + dz * (hw + 2.2);
      for (let k = -5; k <= 5; k++) { // stripes run along the road, the row of stripes goes across it
        const lx = dx !== 0 ? cx : cx + k * 1.1, lz = dx !== 0 ? cz + k * 1.1 : cz, hx = dx !== 0 ? 1.4 : 0.28, hz = dx !== 0 ? 0.28 : 1.4;
        quad([lx - hx, 0.108, lz - hz], [lx - hx, 0.108, lz + hz], [lx + hx, 0.108, lz + hz], [lx + hx, 0.108, lz - hz], '#eeeeea');
      }
      // stop line before the crossing
      const sx = gx + dx * (hw + 4.6), sz = gz + dz * (hw + 4.6), a = dx !== 0 ? 0.2 : hw - 0.8, b2 = dx !== 0 ? hw - 0.8 : 0.2;
      quad([sx - a, 0.108, sz - b2], [sx - a, 0.108, sz + b2], [sx + a, 0.108, sz + b2], [sx + a, 0.108, sz - b2], '#eeeeea');
    }
  }
  for (const p of roads.plazas) { // round plazas (the summit one is grass with a small paved circle in the middle)
    if (p.g === 'summit') {
      for (const [rr, yy, cc] of [[15.5, 0.093, '#5aa03a'], [5.5, 0.098, '#464b5a']]) { const seg = 28; for (let i = 0; i < seg; i++) { const a0 = i / seg * Math.PI * 2, a1 = (i + 1) / seg * Math.PI * 2; quad([p.x, p.y + yy, p.z], [p.x + Math.cos(a0) * rr, p.y + yy, p.z + Math.sin(a0) * rr], [p.x + Math.cos(a1) * rr, p.y + yy, p.z + Math.sin(a1) * rr], [p.x, p.y + yy, p.z], cc); } }
      continue;
    }
    const seg = 28; for (let i = 0; i < seg; i++) { const a0 = i / seg * Math.PI * 2, a1 = (i + 1) / seg * Math.PI * 2; quad([p.x, p.y + 0.095, p.z], [p.x + Math.cos(a0) * p.r, p.y + 0.095, p.z + Math.sin(a0) * p.r], [p.x + Math.cos(a1) * p.r, p.y + 0.095, p.z + Math.sin(a1) * p.r], [p.x, p.y + 0.095, p.z], '#464b5a'); }
  }
  void h;
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3)); { const uv = new Float32Array(pos.length / 3 * 2); for (let i = 0; i < pos.length / 3; i++) { uv[i * 2] = pos[i * 3] / 7; uv[i * 2 + 1] = pos[i * 3 + 2] / 7; } g.setAttribute('uv', new THREE.BufferAttribute(uv, 2)); } g.setIndex(idx); g.computeVertexNormals();
  return g;
}

function terrainGeo() {
  const N = 220, S = GT.HALF * 2, step = S / N, pos = new Float32Array((N + 1) * (N + 1) * 3), cs = new Float32Array((N + 1) * (N + 1) * 3), idx = [];
  const R = rng(99), tmp = new THREE.Color();
  for (let j = 0; j <= N; j++) for (let i = 0; i <= N; i++) {
    const x = -GT.HALF + i * step, z = -GT.HALF + j * step, h = gtaBase(x, z), k = (j * (N + 1) + i) * 3;
    pos[k] = x; pos[k + 1] = h; pos[k + 2] = z;
    const gx = (gtaBase(x + 2, z) - gtaBase(x - 2, z)) / 4, gz = (gtaBase(x, z + 2) - gtaBase(x, z - 2)) / 4, slope = Math.hypot(gx, gz), box = Math.max(Math.abs(x), Math.abs(z));
    const city = 1 - smooth(255, 310, box);
    { const f1 = Math.sin(x * 0.021 + 1.7) * Math.sin(z * 0.017 + 0.3), f2 = Math.sin(x * 0.063 + z * 0.041), f3 = Math.sin(x * 0.011 - z * 0.019 + 2.2);
      tmp.set('#7dab4a').lerp(col.set('#bcb35c'), smooth(-0.1, 0.8, f1 + f2 * 0.45)).lerp(col.set('#5d8c3b'), smooth(0.1, 1, -f1 - f3 * 0.4) * 0.7).multiplyScalar(0.93 + R() * 0.12); }
    if (h < 0.9 && box > 400) tmp.lerp(col.set('#f0dd9f'), smooth(0.9, 0.2, h) * 0.9 + 0.1);   // beach
    if (h < -0.4) tmp.lerp(col.set('#d8c68a'), 0.8);
    tmp.lerp(col.set('#8d8274'), smooth(0.62, 1.0, slope));                                        // rock on steep ground
    if (h > 33) tmp.lerp(col.set('#ffffff'), smooth(33, 41, h));                                    // snow on the upper slopes
    { const mr = Math.hypot(x - GT.MT.cx, z - GT.MT.cz); tmp.lerp(col.set('#5fa23a').multiplyScalar(0.9 + R() * 0.2), 1 - smooth(GT.MT.Rt + 14, GT.MT.Rt + 36, mr)); }   // the summit top is a green meadow
    tmp.lerp(col.set('#aab2bb'), city);                                                             // the city ground is paved
    cs[k] = tmp.r; cs[k + 1] = tmp.g; cs[k + 2] = tmp.b;
  }
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { const a = j * (N + 1) + i, b = a + 1, c = a + N + 1, d = c + 1; idx.push(a, c, b, b, c, d); }
  const uvs = new Float32Array((N + 1) * (N + 1) * 2); for (let q = 0; q < (N + 1) * (N + 1); q++) { uvs[q * 2] = pos[q * 3] / 9; uvs[q * 2 + 1] = pos[q * 3 + 2] / 9; }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(cs, 3)); g.setAttribute('uv', new THREE.BufferAttribute(uvs, 2)); g.setIndex(idx); g.computeVertexNormals();
  return g;
}

function signTexture(text, bg, fg) {
  const cv = document.createElement('canvas'); cv.width = 512; cv.height = 128; const g = cv.getContext('2d');
  g.fillStyle = bg; g.fillRect(0, 0, 512, 128); g.strokeStyle = fg; g.lineWidth = 8; g.strokeRect(8, 8, 496, 112);
  g.fillStyle = fg; let fs = 72; g.font = 'bold ' + fs + 'px Arial Black, Arial, sans-serif'; while (g.measureText(text).width > 450 && fs > 24) { fs -= 4; g.font = 'bold ' + fs + 'px Arial Black, Arial, sans-serif'; } g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, 256, 68);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}

// house walls in local coords [x0, x1, z0, z1, height]: the front door gap is x 2.7..4.1, the garage opening x -5.5..-1.1, the garage/house door z -4.6..-3.0
const T = 0.3, WH = 3.6;
const AUTOS_SHOW = [[-12, 11, '#c0392b'], [-4, 12, '#f1f5f9'], [4, 14, '#1f3a5f'], [12, 16, '#d9b34a']];   // [x offset, car id, colour] of the cars on display
// the Mission Lobby walls relative to its centre [x0, x1, z0, z1]: back, left, right and the front with a 4 m door gap
export const LOBBY_WALLS = [[-8, 8, -5.5, -5.2], [-8, -7.7, -5.5, 5.5], [7.7, 8, -5.5, 5.5], [-8, -2, 5.2, 5.5], [2, 8, 5.2, 5.5]];
export const HOME_WALLS = [
  [-6, 6, -7.25, -7.25 + T, WH], [-6, -6 + T, -7.25, 1.25, WH], [6 - T, 6, -7.25, 1.25, WH],
  [-6, -5.5, 1.25 - T, 1.25, WH], [-1.1, 2.7, 1.25 - T, 1.25, WH], [4.1, 6, 1.25 - T, 1.25, WH],
  [-1.1, -0.8, -7.25, -4.6, WH], [-1.1, -0.8, -3.0, 1.25, WH],
  // furniture
  [3.35, 5.65, -4.4, -3.3, 0.9], [3.9, 5.1, -5.65, -4.95, 0.5], [3.8, 5.2, -6.9, -6.4, 0.9], [0.5, 3.3, -6.9, -6.2, 0.95], [-0.4, 0.4, -6.9, -6.2, 1.8],
  [4.05, 5.65, -1.95, 0.15, 0.6], [-4.7, -2.1, -6.9, -6.2, 0.95], [-5.65, -5.2, -6.9, -5.3, 1.9],
];
// the INTELLIMUM infinity mark: a lemniscate drawn with a teal -> indigo stroke
export function drawInfinity(g, cx, cy, a, lw) {
  const gr = g.createLinearGradient(cx - a, cy, cx + a, cy); gr.addColorStop(0, '#22d3ee'); gr.addColorStop(1, '#6366f1');
  g.strokeStyle = gr; g.lineWidth = lw; g.lineCap = 'round'; g.lineJoin = 'round'; g.beginPath();
  for (let i = 0; i <= 120; i++) { const t = i / 120 * Math.PI * 2, d = 1 + Math.sin(t) ** 2, x = cx + a * Math.cos(t) / d, y = cy + a * Math.sin(t) * Math.cos(t) / d * 1.25; i ? g.lineTo(x, y) : g.moveTo(x, y); }
  g.closePath(); g.stroke();
}
// the big lit AK-47 over the weapon store: a rugged, worn rifle (wood furniture, banana magazine, scratches) glowing in neon on a dark board
function akSignTexture() {
  const cv = document.createElement('canvas'); cv.width = 1024; cv.height = 512; const g = cv.getContext('2d');
  const bg = g.createLinearGradient(0, 0, 0, 512); bg.addColorStop(0, '#1a0a0c'); bg.addColorStop(1, '#2a1014'); g.fillStyle = bg; g.fillRect(0, 0, 1024, 512);
  g.shadowColor = '#ff3b3b'; g.shadowBlur = 26; g.strokeStyle = '#ff5a4a'; g.lineWidth = 9; g.strokeRect(14, 14, 996, 484); g.strokeStyle = '#ffb347'; g.lineWidth = 3; g.strokeRect(30, 30, 964, 452);
  g.shadowBlur = 0;
  const poly = (pts, fill, stroke) => { g.beginPath(); pts.forEach((p, k) => (k ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1]))); g.closePath(); g.fillStyle = fill; g.fill(); if (stroke) { g.strokeStyle = stroke; g.lineWidth = 3; g.stroke(); } };
  g.save(); g.translate(0, 70);
  g.shadowColor = '#ff7a2a'; g.shadowBlur = 24;   // warm glow round the whole rifle
  poly([[80, 285], [260, 262], [275, 340], [150, 388], [112, 372]], '#7a4020', '#ffb347');                                  // butt stock (wood)
  poly([[260, 258], [500, 250], [520, 335], [275, 342]], '#2e3239', '#9aa3ad');                                             // receiver
  poly([[270, 258], [505, 250], [500, 238], [285, 244]], '#3a3f47', '#9aa3ad');                                             // dust cover
  poly([[505, 262], [700, 266], [705, 322], [520, 330]], '#8e5226', '#ffb347');                                             // wooden hand guard
  poly([[505, 240], [770, 244], [770, 262], [505, 262]], '#2a2d33', '#9aa3ad');                                             // gas tube
  poly([[700, 286], [940, 292], [940, 310], [705, 312]], '#23262c', '#9aa3ad');                                             // barrel
  poly([[940, 284], [985, 282], [985, 318], [940, 316]], '#1b1d22', '#ffb347');                                             // muzzle brake
  poly([[880, 262], [892, 262], [892, 292], [880, 292]], '#23262c', '#9aa3ad');                                             // front sight
  poly([[400, 332], [472, 332], [500, 420], [520, 462], [462, 468], [424, 420]], '#3a3f47', '#9aa3ad');                     // banana magazine
  poly([[300, 338], [352, 338], [372, 430], [318, 438]], '#6b3a1c', '#ffb347');                                             // pistol grip
  g.strokeStyle = '#9aa3ad'; g.lineWidth = 6; g.beginPath(); g.moveTo(352, 340); g.quadraticCurveTo(372, 392, 398, 342); g.stroke();   // trigger guard
  g.shadowBlur = 0;
  // wear: scratches, chipped edges and rust spots
  g.strokeStyle = 'rgba(255,230,190,.55)'; g.lineWidth = 2; for (let k = 0; k < 26; k++) { const x = 120 + (k * 137) % 780, y = 270 + (k * 53) % 120, l = 14 + (k * 29) % 38; g.beginPath(); g.moveTo(x, y); g.lineTo(x + l, y - 5 - (k % 4) * 3); g.stroke(); }
  for (let k = 0; k < 16; k++) { g.fillStyle = 'rgba(150,70,20,.55)'; g.beginPath(); g.arc(280 + (k * 97) % 480, 262 + (k * 41) % 70, 3 + k % 4, 0, 6.3); g.fill(); }
  g.restore();
  g.textAlign = 'center'; g.textBaseline = 'middle'; g.shadowColor = '#ff2a2a'; g.shadowBlur = 30; g.fillStyle = '#ffe9c4';
  g.font = 'bold 118px Arial Black, Arial, sans-serif'; g.fillText('AK-47', 512, 108); g.shadowBlur = 14; g.fillStyle = '#ffd23f'; g.font = 'bold 44px Arial Black, Arial, sans-serif'; g.fillText('WEAPON STORE  \u2022  GUNS & AMMO', 512, 470);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
function intellimumTexture() {
  const cv = document.createElement('canvas'); cv.width = 1024; cv.height = 256; const g = cv.getContext('2d');
  const bg = g.createLinearGradient(0, 0, 1024, 0); bg.addColorStop(0, '#0b1530'); bg.addColorStop(1, '#101c3f'); g.fillStyle = bg; g.fillRect(0, 0, 1024, 256);
  g.strokeStyle = '#22d3ee'; g.lineWidth = 6; g.strokeRect(8, 8, 1008, 240);
  drawInfinity(g, 150, 128, 105, 22);
  // one line: INTELLIMUM (white) AUTOS (cyan), as large as fits next to the logo
  g.textAlign = 'left'; g.textBaseline = 'middle'; const F = (n) => 'bold ' + n + 'px Arial Black, Arial, sans-serif';
  let fs = 120; g.font = F(fs); while (g.measureText('INTELLIMUM AUTOS').width > 700 && fs > 30) { fs -= 2; g.font = F(fs); }
  const w1 = g.measureText('INTELLIMUM ').width; g.fillStyle = '#ffffff'; g.fillText('INTELLIMUM', 290, 132); g.fillStyle = '#22d3ee'; g.fillText('AUTOS', 290 + w1, 132);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
export function buildGta(world, th, info, seed) {
  world.waterY = GT.SEA; world.killY = -2.6;
  world.terrain = gtaH;
  const roads = gtaRoads(); info.track = roads; info.cars = gtaCars();
  // the city blocks (pavements, lots, driveways, garages) sit 0.2 m above the avenues: cars must ride on that too, or their tyres sink into the ground (a short ramp over the kerb)
  const kerbH = (x, z) => { let k = 0; for (const bx of BLK) { const dx = Math.abs(x - bx); if (dx > 24.5) continue; for (const bz of BLK) { const e = 23.5 - Math.max(dx, Math.abs(z - bz)); if (e > -1) { k = Math.max(k, Math.min(1, (e + 1) / 1.1)); } } } return 0.2 * k; };
  roads.terrain = (x, z) => gtaH(x, z) + (z > -245 && z < 245 && x > -245 && x < 245 ? kerbH(x, z) : 0);   // cars drive anywhere: they follow the ground, jump off ramps, bounce off buildings info.spawn = { x: 4, y: 0, z: 9 };
  info.finishZ = -99999; info.finishY = 99999;
  const B = gtaBuildings();
  // ---- collision: blocks (a low kerb), buildings, the park fountains
  for (const bx of BLK) for (const bz of BLK) world.addSolid(bx - 23.5, 0, bz - 23.5, bx + 23.5, 0.2, bz + 23.5, { name: 'block' });
  for (const b of B) world.addSolid(b.x - b.w / 2, 0, b.z - b.d / 2, b.x + b.w / 2, b.h, b.z + b.d / 2, { name: 'building' });
  for (const [px, pz] of PARKS) world.addSolid(px - 2.85, 0.2, pz - 2.85, px + 2.85, 1.2, pz + 2.85, { name: 'fountain' });
  roads.boxes = [...B.map((b) => ({ x0: b.x - b.w / 2, x1: b.x + b.w / 2, z0: b.z - b.d / 2, z1: b.z + b.d / 2, h: b.h })), ...PARKS.map(([px, pz]) => ({ x0: px - 2.85, x1: px + 2.85, z0: pz - 2.85, z1: pz + 2.85, h: 1.2 }))];
  { // landmark colliders: the repair workshop and the four houses
    const S = REPAIR.shop; world.addSolid(S.x - S.w / 2, 0, S.z - S.d / 2, S.x + S.w / 2, S.h, S.z + S.d / 2, { name: 'building' }); roads.boxes.push({ x0: S.x - S.w / 2, x1: S.x + S.w / 2, z0: S.z - S.d / 2, z1: S.z + S.d / 2, h: S.h });
    for (const h of HOMES) for (const [a, b, c, d, hh] of HOME_WALLS) {   // hollow houses: real walls with door gaps (you can walk in), no solid box
      const p = homeW(h, a, c), q = homeW(h, b, d), x0 = Math.min(p.x, q.x), x1 = Math.max(p.x, q.x), z0 = Math.min(p.z, q.z), z1 = Math.max(p.z, q.z);
      world.addSolid(x0, 0, z0, x1, hh, z1, { name: 'building' }); if (hh > 1.5) roads.boxes.push({ x0, x1, z0, z1, h: hh });
    }
  }
  for (const S of [BANK, POLICE]) { world.addSolid(S.x - S.w / 2, 0, S.z - S.d / 2, S.x + S.w / 2, S.h, S.z + S.d / 2, { name: 'building' }); roads.boxes.push({ x0: S.x - S.w / 2, x1: S.x + S.w / 2, z0: S.z - S.d / 2, z1: S.z + S.d / 2, h: S.h }); }   // the bank and the police station (nobody can go in)
  { const L = LOBBY, hw = L.w / 2, hd = L.d / 2, T3 = 0.3;   // the Mission Lobby: hollow, walk in through the front door
    for (const [a, b, c, d] of LOBBY_WALLS) { const x0 = L.x + a, x1 = L.x + b, z0 = L.z + c, z1 = L.z + d; world.addSolid(x0, 0, z0, x1, 4, z1, { name: 'building' }); roads.boxes.push({ x0, x1, z0, z1, h: 4 }); }
    world.addSolid(L.x - hw + T3, 0.2, L.z - hd + T3, L.x + hw - T3, 0.26, L.z + hd - T3, { name: 'prop' });
    for (const [px, pz] of [[STUNT.finishX, -7.5], [STUNT.finishX, 7.5]]) { world.addSolid(px - 0.3, 0, pz - 0.3, px + 0.3, 6, pz + 0.3, { name: 'prop' }); roads.boxes.push({ x0: px - 0.3, x1: px + 0.3, z0: pz - 0.3, z1: pz + 0.3, h: 6 }); } }
  { const L = ARMS;   // the weapon store: hollow, walk in through the front door (same walls as the lobby)
    for (const [a, b, c, d] of LOBBY_WALLS) { const x0 = L.x + a, x1 = L.x + b, z0 = L.z + c, z1 = L.z + d; world.addSolid(x0, 0, z0, x1, 4, z1, { name: 'building' }); roads.boxes.push({ x0, x1, z0, z1, h: 4 }); }
    world.addSolid(L.x - 2.6, 0.2, L.z - 4.9, L.x + 2.6, 1.25, L.z - 3.9, { name: 'prop' });   // counter
    world.addSolid(L.x - L.w / 2 + 0.3, 0.2, L.z - L.d / 2 + 0.3, L.x + L.w / 2 - 0.3, 0.26, L.z + L.d / 2 - 0.3, { name: 'prop' }); }
  { const S = AUTOS.showroom;   // INTELLIMUM AUTOS: the glass showroom is solid; four cars stand on plinths in front of it
    world.addSolid(S.x - S.w / 2, 0, S.z - S.d / 2, S.x + S.w / 2, S.h, S.z + S.d / 2, { name: 'building' }); roads.boxes.push({ x0: S.x - S.w / 2, x1: S.x + S.w / 2, z0: S.z - S.d / 2, z1: S.z + S.d / 2, h: S.h });
    for (const [dx] of AUTOS_SHOW) { world.addSolid(S.x + dx - 1.15, 0, 22.8 - 2.5, S.x + dx + 1.15, 1.6, 22.8 + 2.5, { name: 'prop' }); roads.boxes.push({ x0: S.x + dx - 1.15, x1: S.x + dx + 1.15, z0: 22.8 - 2.5, z1: 22.8 + 2.5, h: 1.6 }); }
    for (const px of [-17.5, 17.5]) { world.addSolid(S.x + px - 0.5, 0, 24, S.x + px + 0.5, 9, 25, { name: 'prop' }); roads.boxes.push({ x0: S.x + px - 0.5, x1: S.x + px + 0.5, z0: 24, z1: 25, h: 9 }); } }
  info.gta = { buildings: B, roads };
  if (world.headless) return;

  // ---- ground
  const gTex = grainTexture(256, 215, 38, 30, 11, { patches: 4 }), aTex = grainTexture(256, 195, 36, 50, 21, { cracks: 4, patches: 5 });
  const tm = new THREE.Mesh(terrainGeo(), new THREE.MeshStandardMaterial({ vertexColors: true, map: gTex, bumpMap: gTex, bumpScale: 1.6, roughness: 0.95, metalness: 0 })); tm.receiveShadow = true; world.group.add(tm);
  const rm = new THREE.Mesh(roadGeo(roads), new THREE.MeshStandardMaterial({ vertexColors: true, map: aTex, bumpMap: aTex, bumpScale: 1.1, roughness: 0.82, metalness: 0.05 })); rm.receiveShadow = true; world.group.add(rm);
  // ---- buildings (windows) + roofs / awnings
  const wt = windowTexture(false), wg = windowTexture(true), wallTex = grainTexture(128, 235, 30, 22, 31);
  const plain = B.filter((b) => b.zone > 0), towers = B.filter((b) => b.zone === 0);
  const bm = new THREE.Mesh(mergeGeometries(plain.map(buildingGeo)), new THREE.MeshStandardMaterial({ vertexColors: true, map: wt, bumpMap: wallTex, bumpScale: 0.6, roughness: 0.78, metalness: 0.02, emissive: '#ffffff', emissiveMap: litWindowTexture(false, 5), emissiveIntensity: 0 })); bm.castShadow = true; bm.receiveShadow = true; world.group.add(bm);
  const gm = new THREE.Mesh(mergeGeometries(towers.map(buildingGeo)), new THREE.MeshStandardMaterial({ vertexColors: true, map: wg, roughness: 0.22, metalness: 0.55, envMapIntensity: 1.5, emissive: '#ffffff', emissiveMap: litWindowTexture(true, 9), emissiveIntensity: 0 })); gm.castShadow = true; gm.receiveShadow = true; world.group.add(gm);
  world.nightMats = [bm.material, gm.material]; world.lampPools = [];
  const wm = world.main, R = rng(seed || 7), kerb = '#d9dde2';
  const props = roads.props = [];   // thin solid things (tree trunks, lamp posts, benches): cars bump into them, people cannot walk through
  const solidProp = (x, z, r, h, y = 0) => { world.addSolid(x - r, y, z - r, x + r, y + h, z + r, { name: 'prop' }); props.push({ x0: x - r, x1: x + r, z0: z - r, z1: z + r, h: y + h }); };
  const plant = (x, y, z, sc, pine) => { tree(wm, x, y, z, sc, R, pine); solidProp(x, z, 0.3 * sc, 3, y); };
  const lampPost = (x, z, side, horiz) => { // slim steel pole with a swept arm over the road and a lamp head
    wm.add(new THREE.CylinderGeometry(0.08, 0.13, 7.2, 8), x, 3.6, z, '#4d545e');
    const ax = horiz ? 0 : -side * 0.9, az = horiz ? -side * 0.9 : 0;
    wm.add(new THREE.BoxGeometry(horiz ? 0.1 : 1.9, 0.1, horiz ? 1.9 : 0.1), x + ax, 7.15, z + az, '#4d545e');
    wm.add(new THREE.BoxGeometry(horiz ? 0.34 : 0.7, 0.14, horiz ? 0.7 : 0.34), x + ax * 1.9, 7.1, z + az * 1.9, '#9aa1aa');
    world.glow.add(new THREE.BoxGeometry(horiz ? 0.28 : 0.55, 0.05, horiz ? 0.55 : 0.28), x + ax * 1.9, 7.02, z + az * 1.9, '#fff1c4');
    world.lampPools.push([x + ax * 1.9, z + az * 1.9]);
    solidProp(x, z, 0.16, 7);
  };
  for (const bx of BLK) for (const bz of BLK) {
    const park = PARKS.some((p) => p[0] === bx && p[1] === bz);
    wm.add(world.rbox(47, 0.2, 47, 0.05), bx, 0.1, bz, park ? '#7ccf5b' : kerb);
  }
  for (const b of B) {
    wm.add(new THREE.BoxGeometry(b.w + 0.8, 0.5, b.d + 0.8), b.x, b.h + 0.25, b.z, '#4a4f5e');                 // roof slab
    wm.add(new THREE.BoxGeometry(b.w + 0.04, 1.3, b.d + 0.04), b.x, 0.65, b.z, '#6a6470');                         // stone plinth
    wm.add(new THREE.BoxGeometry(b.w + 1.3, 0.55, b.d + 1.3), b.x, b.h - 0.3, b.z, '#ece4d3');                    // cornice
    if (b.h > 34) for (let y = 20; y < b.h - 6; y += 20) wm.add(new THREE.BoxGeometry(b.w + 0.45, 0.35, b.d + 0.45), b.x, y, b.z, '#d9d2c4');   // floor ledges
    { const rx = b.x - b.w * 0.25, rz = b.z - b.d * 0.2, ty = b.h + 0.5;                                      // rooftop water tank on legs + dish + AC boxes
      wm.add(new THREE.BoxGeometry(1.6, 1.3, 1.6), rx, ty + 0.65, rz, '#4a4f5e');
      wm.add(new THREE.CylinderGeometry(1.05, 1.05, 1.5, 8), rx, ty + 2.0, rz, R() < 0.5 ? '#1e1e24' : '#2b4c7e'); wm.add(new THREE.CylinderGeometry(0.95, 1.05, 0.2, 8), rx, ty + 2.85, rz, '#d9d9d9');
      wm.add(new THREE.BoxGeometry(1.6, 1.0, 1.0), b.x + b.w * 0.25, ty + 0.5, b.z + b.d * 0.2, '#c8ccd2'); wm.add(new THREE.SphereGeometry(0.55, 6, 3, 0, Math.PI * 2, 0, 1.2), b.x + b.w * 0.1, ty + 1.2, b.z + b.d * 0.3, '#f2f2f2', 0.9, 0, 0); }
    wm.add(new THREE.BoxGeometry(b.w + 0.9, 0.4, b.d + 0.9), b.x, 3.7, b.z, ['#e63946', '#2a9d8f', '#f4a261', '#457b9d'][Math.floor(R() * 4)]);   // shop awning band
    if (b.h > 14) { wm.add(new THREE.BoxGeometry(3, 1.6, 3), b.x + (R() - 0.5) * b.w * 0.4, b.h + 1.3, b.z + (R() - 0.5) * b.d * 0.4, '#9aa3ad'); }
    if (b.tower) { wm.add(new THREE.CylinderGeometry(0.25, 0.4, 24, 6), b.x, b.h + 12, b.z, '#c9d1d9'); world.glow.add(new THREE.SphereGeometry(0.9, 8, 6), b.x, b.h + 24, b.z, '#ff3b3b'); wm.add(new THREE.BoxGeometry(b.w * 0.6, 8, b.d * 0.6), b.x, b.h + 4, b.z, '#6ea5d6'); }
  }
  // ---- AUTO REPAIR: workshop with roller doors, a canopy over the repair bay, tyres and drums
  { const S = REPAIR.shop, bx = REPAIR.x, bz = REPAIR.z, Bx = (w, h, d) => new THREE.BoxGeometry(w, h, d);
    wm.add(Bx(46, 0.06, 40), S.x, 0.23, 28, '#8a9098');                                   // concrete forecourt
    wm.add(Bx(S.w, S.h, S.d), S.x, S.h / 2, S.z, '#d9d3c3');
    wm.add(Bx(S.w + 1, 0.5, S.d + 1), S.x, S.h + 0.25, S.z, '#3b3f4a');
    wm.add(Bx(S.w + 0.2, 1.3, S.d + 0.2), S.x, S.h - 1.0, S.z, '#e8b020');
    const fz = S.z - S.d / 2 - 0.12;
    for (let i = -1; i <= 1; i++) { wm.add(Bx(8.2, 5, 0.3), S.x + i * 11, 2.6, fz, '#e07a1a'); for (let k = 0; k < 6; k++) wm.add(Bx(8.2, 0.08, 0.34), S.x + i * 11, 0.7 + k * 0.8, fz - 0.02, '#a8530c'); wm.add(Bx(8.8, 0.35, 0.4), S.x + i * 11, 5.3, fz, '#2b2f38'); }
    for (let i = -1; i <= 1; i++) world.addSolid(S.x + i * 11 - 4.4, 0, fz - 0.17, S.x + i * 11 + 4.4, 5.4, fz + 0.23, { name: 'prop' });   // the shutters
    wm.add(Bx(4.5, 2.2, 0.2), S.x - 15, 3.4, fz, '#9fd0f0'); wm.add(Bx(4.5, 2.2, 0.2), S.x + 15, 3.4, fz, '#9fd0f0');
    const sg = new THREE.Mesh(new THREE.PlaneGeometry(14, 3.5), new THREE.MeshBasicMaterial({ map: signTexture('AUTO REPAIR', '#173a8a', '#ffd23f'), toneMapped: false }));
    sg.position.set(S.x, S.h + 3.2, S.z - S.d / 2 - 0.4); sg.rotation.y = Math.PI; world.group.add(sg);
    { const sb = sg.clone(); sb.material = sg.material; sb.rotation.y = Math.PI; sb.position.set(S.x, S.h + 3.2, S.z - S.d / 2 - 0.45); }
    wm.add(Bx(0.4, 3.4, 0.4), S.x - 5.5, S.h + 1.7, S.z - S.d / 2 - 0.2, '#3b3f4a'); wm.add(Bx(0.4, 3.4, 0.4), S.x + 5.5, S.h + 1.7, S.z - S.d / 2 - 0.2, '#3b3f4a');
    // canopy over the bay
    for (const [dx, dz] of [[-6.5, -5.2], [6.5, -5.2], [-6.5, 5.2], [6.5, 5.2]]) { wm.add(new THREE.CylinderGeometry(0.25, 0.25, 5.6, 8), bx + dx, 2.9, bz + dz, '#e8e8ee'); solidProp(bx + dx, bz + dz, 0.28, 5.6); }
    wm.add(Bx(15.5, 0.5, 12.6), bx, 5.85, bz, '#2b6cb0'); wm.add(Bx(15.7, 0.18, 12.8), bx, 5.55, bz, '#ffffff');
    world.glow.add(Bx(13, 0.06, 0.5), bx, 5.5, bz - 3, '#fff6d8'); world.glow.add(Bx(13, 0.06, 0.5), bx, 5.5, bz + 3, '#fff6d8');
    // the bay: dark pad, yellow ring and a wrench
    const ringG = new THREE.RingGeometry(3.7, 4.4, 40); ringG.rotateX(-Math.PI / 2); wm.add(new THREE.CylinderGeometry(4.5, 4.5, 0.04, 40), bx, 0.27, bz, '#2a2f3a'); wm.add(ringG, bx, 0.34, bz, '#ffd23f');
    wm.add(Bx(0.5, 0.06, 4.4), bx, 0.37, bz, '#ffd23f', 0, 0.6, 0); wm.add(new THREE.CylinderGeometry(0.75, 0.75, 0.06, 12), bx + 1.55, 0.37, bz + 1.15, '#ffd23f'); wm.add(new THREE.CylinderGeometry(0.5, 0.5, 0.06, 12), bx - 1.55, 0.45, bz - 1.15, '#2a2f3a');
    // props: tyre stacks, oil drums, a tool cabinet, cones
    for (let i = 0; i < 3; i++) { for (let k = 0; k < 4; k++) wm.add(new THREE.TorusGeometry(0.42, 0.18, 8, 14), S.x + 18.5 + i * 0.1, 0.22 + k * 0.38, S.z - S.d / 2 - 1.3 - i * 1.0, '#17171a', Math.PI / 2, 0, 0); solidProp(S.x + 18.5, S.z - S.d / 2 - 1.3 - i * 1.0, 0.6, 1.6); }
    for (let i = 0; i < 3; i++) { wm.add(new THREE.CylinderGeometry(0.42, 0.42, 1.0, 12), S.x - 18 + i * 0.9, 0.75, S.z - S.d / 2 - 1.2, ['#c0392b', '#2b6cb0', '#f1c40f'][i]); solidProp(S.x - 18 + i * 0.9, S.z - S.d / 2 - 1.2, 0.45, 1.2); }
    wm.add(Bx(1.8, 1.6, 0.9), S.x - 20, 1.0, S.z - S.d / 2 - 0.6, '#c0392b'); solidProp(S.x - 20, S.z - S.d / 2 - 0.6, 0.9, 1.6);
    for (const [dx, dz] of [[-8, -3], [8, -3], [-8, 3], [8, 3]]) { wm.add(new THREE.ConeGeometry(0.28, 0.7, 10), bx + dx, 0.62, bz + dz, '#ff6a1a'); solidProp(bx + dx, bz + dz, 0.26, 0.7, 0.2); }
    plant(S.x - 21, 0.2, 14, 0.9); plant(S.x + 21, 0.2, 14, 0.9);
  }
  // ---- HOMES: a house for each player (Haris, Hannan, Hanbal, Dawood) with garage, driveway, fence, porch and garden
  { const roofC = ['#8a3b2e', '#4a5a6a', '#6b4f3a', '#3d4d3d'], wallC = ['#efe3cf', '#e5ddd0', '#f0e8d8', '#dcd6c8'], Bx = (w, h, d) => new THREE.BoxGeometry(w, h, d);
    HOMES.forEach((h, i) => {
      const P = (lx, lz) => homeW(h, lx, lz), put = (g, lx, y, lz, c, ry = 0) => { const p = P(lx, lz); wm.add(g, p.x, y, p.z, c, 0, h.yaw + ry, 0); };
      const solid = (x0, x1, z0, z1, hh) => { const p = P(x0, z0), q = P(x1, z1); world.addSolid(Math.min(p.x, q.x), 0.2, Math.min(p.z, q.z), Math.max(p.x, q.x), hh, Math.max(p.z, q.z), { name: 'prop' }); };
      put(Bx(20, 0.06, 20), 0, 0.19, 0, '#6fbf4f');                                // lawn
      put(Bx(6.7, 0.06, 8.1), 2.45, 0.25, -3.0, '#b88a5a'); solid(-0.8, 5.7, -6.95, 0.95, 0.28);   // wooden floor (you stand on it)
      put(Bx(4.6, 0.05, 8.1), -3.4, 0.21, -3.0, '#4a4d53');                       // garage floor (its top, 0.235, sits clearly above the lawn's 0.22: no flicker)
      for (const [a, b, c, d, hh] of HOME_WALLS) if (hh === WH) put(Bx(b - a, hh - 0.2, d - c), (a + b) / 2, 0.2 + (hh - 0.2) / 2, (c + d) / 2, wallC[i]);
      for (const [x0, x1, lz] of [[-5.5, -1.1, 1.1], [2.7, 4.1, 1.1], [-1.1, -0.8, -3.8]]) { /* lintels over the openings */
        if (lz === -3.8) put(Bx(0.3, 1.0, 1.6), -0.95, 3.1, lz, wallC[i]); else put(Bx(x1 - x0, 0.9, T), (x0 + x1) / 2, 3.15, lz + 0.05, wallC[i]); }
      for (const dx of [2.64, 4.16]) put(Bx(0.12, 2.65, 0.4), dx, 1.62, 1.1, '#f4f1ea');                       // door frame
      put(Bx(0.06, 2.4, 1.3), 2.8, 1.5, 0.35, h.color);                                                         // front door, swung open
      put(Bx(12.3, 0.2, 8.8), 0, 3.7, -3, '#f6f1e6');                                                          // ceiling slab (also the floor of the roof)
      const rg = new THREE.ConeGeometry(1, 1, 4); rg.rotateY(Math.PI / 4); rg.scale(13.4 / Math.SQRT2, 2.4, 10.2 / Math.SQRT2); put(rg, 0, 3.8 + 1.2, -3, roofC[i]);   // hip roof
      put(Bx(1.0, 3.2, 1.0), -3, 5.4, -5.6, '#8a5a4a');                                                         // chimney
      world.glow.add(Bx(0.3, 0.3, 0.12), P(2.1, 1.45).x, 2.7, P(2.1, 1.45).z, '#fff0b8');                    // porch light
      put(Bx(4.6, 0.22, 2.4), 3.4, 0.31, 2.4, '#b9bdc4'); put(Bx(5.0, 0.2, 2.6), 3.4, 3.35, 2.5, roofC[i]);  // porch step + porch roof
      put(new THREE.CylinderGeometry(0.1, 0.1, 3.0, 8), 5.7, 1.85, 3.6, '#f4f1ea'); put(new THREE.CylinderGeometry(0.1, 0.1, 3.0, 8), 1.1, 1.85, 3.6, '#f4f1ea');
      for (const [wx, wy, lz] of [[0.2, 2.0, 1.3], [5.1, 2.0, 1.3]]) { put(Bx(1.4, 1.3, 0.12), wx, wy, lz, '#9fd0f0'); put(Bx(1.6, 0.1, 0.18), wx, wy - 0.7, lz, '#f4f1ea'); }
      for (const lx of [-3, 3]) put(Bx(1.9, 1.3, 0.12), lx, 2.0, -7.3, '#9fd0f0');                              // back windows
      for (const sx of [-6.05, 6.05]) put(Bx(0.12, 1.3, 1.9), sx, 2.0, -3, '#9fd0f0');                          // side windows
      world.glow.add(Bx(1.0, 0.7, 0.06), P(0.2, 1.37).x, 2.0, P(0.2, 1.37).z, '#ffe2a0', 0, h.yaw, 0);          // a warm lit window
      // --- interior: living room (sofa, TV, table), kitchen, bed; garage with a workbench, shelf and tyres
      put(Bx(2.6, 0.02, 1.8), 4.5, 0.3, -4.6, h.color);                                                          // rug in the player's colour
      put(Bx(2.3, 0.45, 0.95), 4.5, 0.52, -3.9, '#6b5a8a'); put(Bx(2.3, 0.6, 0.25), 4.5, 0.95, -3.45, '#5a4a78'); put(Bx(0.25, 0.4, 0.95), 3.45, 0.75, -3.9, '#5a4a78'); put(Bx(0.25, 0.4, 0.95), 5.55, 0.75, -3.9, '#5a4a78');
      put(Bx(1.2, 0.4, 0.7), 4.5, 0.5, -5.3, '#7a5233');
      put(Bx(1.8, 0.5, 0.5), 4.5, 0.55, -6.65, '#3a2c20'); put(Bx(1.6, 0.9, 0.08), 4.5, 1.4, -6.85, '#111214'); world.glow.add(Bx(1.45, 0.76, 0.02), P(4.5, -6.8).x, 1.4, P(4.5, -6.8).z, '#6fd3ff', 0, h.yaw, 0);
      put(Bx(2.8, 0.9, 0.7), 1.9, 0.73, -6.55, '#e9e4d8'); put(Bx(2.9, 0.06, 0.76), 1.9, 1.2, -6.55, '#3b3f46'); put(Bx(0.8, 1.8, 0.7), 0.0, 1.18, -6.55, '#d6dae0'); put(Bx(0.05, 0.6, 0.02), 0.28, 1.5, -6.19, '#888');
      put(new THREE.CylinderGeometry(0.55, 0.55, 0.06, 14), 1.6, 0.78, -3.9, '#8a6a46'); put(new THREE.CylinderGeometry(0.08, 0.08, 0.5, 8), 1.6, 0.5, -3.9, '#6a4f33'); for (const dz of [-0.9, 0.9]) put(Bx(0.5, 0.45, 0.5), 1.6, 0.52, -3.9 + dz, '#c0392b');
      put(Bx(1.6, 0.3, 2.1), 4.85, 0.45, -0.9, '#6b4a2f'); put(Bx(1.5, 0.2, 2.0), 4.85, 0.7, -0.9, '#f1eee6'); put(Bx(1.52, 0.12, 1.2), 4.85, 0.82, -0.4, h.color); put(Bx(0.9, 0.12, 0.4), 4.85, 0.86, -1.7, '#ffffff'); put(Bx(0.1, 0.9, 1.7), 5.6, 0.95, -0.9, '#6b4a2f');
      world.glow.add(Bx(0.55, 0.05, 0.55), P(2.5, -1.5).x, 3.58, P(2.5, -1.5).z, '#fff4cf'); world.glow.add(Bx(0.55, 0.05, 0.55), P(2.5, -5.0).x, 3.58, P(2.5, -5.0).z, '#fff4cf'); world.glow.add(Bx(0.55, 0.05, 0.55), P(-3.4, -3.0).x, 3.58, P(-3.4, -3.0).z, '#fff4cf');
      put(Bx(2.6, 0.9, 0.7), -3.4, 0.7, -6.55, '#8a5a34'); put(Bx(0.5, 0.35, 0.35), -4.2, 1.3, -6.55, '#d93a3a'); put(Bx(0.4, 2.0, 1.6), -5.45, 1.2, -6.1, '#6a6f78'); for (let k = 0; k < 3; k++) put(Bx(0.3, 0.3, 0.5), -5.4, 0.8 + k * 0.6, -6.1, ['#e8a33d', '#3d8ee8', '#5fcf6a'][k]);
      put(new THREE.CylinderGeometry(0.42, 0.42, 0.5, 12), -1.7, 0.5, -6.6, '#17171a'); put(new THREE.CylinderGeometry(0.42, 0.42, 0.5, 12), -1.7, 1.0, -6.6, '#202024');
      for (const dx of [-2.0, 2.0]) put(Bx(0.08, 0.02, 6.4), -3.4 + dx, 0.245, -3.0, '#e8c53a');                // parking bay lines
      // name plaque on the wall above the garage + a big sign at the garden gate
      { const nm = h.name.toUpperCase() + ' HOME', tex = signTexture(nm, '#12202e', h.color), mk = (wd, ht) => new THREE.Mesh(new THREE.PlaneGeometry(wd, ht), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }));
        const pl = mk(4.0, 0.9), pp = P(-3.3, 1.46); pl.position.set(pp.x, 3.15, pp.z); pl.rotation.y = h.yaw; world.group.add(pl);
        const bg = mk(5.6, 1.4), gp = P(3.4, 9.45); bg.position.set(gp.x, 2.7, gp.z); bg.rotation.y = h.yaw; world.group.add(bg);
        put(Bx(0.18, 3.0, 0.18), 0.7, 1.5, 9.45, '#4a4f58'); put(Bx(0.18, 3.0, 0.18), 6.1, 1.5, 9.45, '#4a4f58'); }
      put(Bx(4.8, 0.06, 8.8), -3.3, 0.21, 5.6, '#3a3d43'); put(Bx(1.3, 0.06, 8.4), 3.4, 0.21, 5.6, '#565a61');   // driveway + footpath: tops at 0.24, above the lawn (0.22) - same-height tops flickered (z-fighting)
      // boundary fence (inside the lot, never on the pavement): the front is open between the two corner posts. It is solid.
      { const fc = (x0, x1, z0, z1) => { put(Bx(x1 - x0, 0.9, z1 - z0), (x0 + x1) / 2, 0.7, (z0 + z1) / 2, '#4b4e55'); const p = P(x0, z0), q = P(x1, z1), X0 = Math.min(p.x, q.x), X1 = Math.max(p.x, q.x), Z0 = Math.min(p.z, q.z), Z1 = Math.max(p.z, q.z);
          world.addSolid(X0, 0.2, Z0, X1, 1.15, Z1, { name: 'prop' }); roads.boxes.push({ x0: X0, x1: X1, z0: Z0, z1: Z1, h: 1.15 }); };
        for (const [a, b] of [[-9.9, -8.4], [8.4, 9.9]]) fc(a, b, 9.7, 9.9);   // wide open gate: only the two corner posts of the front fence are left, so a truck / tractor can drive straight out of the yard
        fc(-9.9, -9.7, -9.9, 9.9); fc(9.7, 9.9, -9.9, 9.9); fc(-9.7, 9.7, -9.9, -9.7); }
      put(new THREE.CylinderGeometry(0.07, 0.07, 1.1, 6), 6.2, 0.8, 9.2, '#4a4f58'); put(Bx(0.55, 0.38, 0.3), 6.2, 1.45, 9.2, h.color);       // mailbox in the player's colour
      put(Bx(2.6, 0.18, 1.4), 6.6, 0.4, -8.6, '#8a5a34'); put(Bx(2.6, 0.5, 0.1), 6.6, 0.75, -9.2, '#8a5a34');                                // garden bench
      { const t1 = P(-8.3, -7.8), t2 = P(8.0, 7.6), t3 = P(8.4, -4); plant(t1.x, 0.2, t1.z, 1.0); plant(t2.x, 0.2, t2.z, 0.85); plant(t3.x, 0.2, t3.z, 0.8); }
      // everything you can see inside and around the house is solid
      for (const [a, b, c, d, hh] of [[3.35, 5.65, -4.4, -3.3, 1.25], [3.9, 5.1, -5.65, -4.95, 0.7], [3.6, 5.4, -6.95, -6.4, 1.9], [0.5, 3.3, -6.95, -6.2, 1.3], [-0.4, 0.4, -6.95, -6.2, 2.1],
        [1.05, 2.15, -4.45, -3.35, 0.9], [1.35, 1.85, -5.05, -2.75, 0.8], [4.05, 5.65, -1.95, 0.15, 0.95], [-4.7, -2.1, -6.95, -6.2, 1.2], [-5.65, -5.25, -6.95, -5.3, 2.2], [-2.15, -1.25, -7.05, -6.15, 1.0],
        [1.1, 5.7, 1.2, 3.6, 0.42], [5.6, 5.8, 3.5, 3.7, 3.4], [1.0, 1.2, 3.5, 3.7, 3.4], [0.6, 0.8, 9.35, 9.55, 3.0], [6.0, 6.2, 9.35, 9.55, 3.0], [6.1, 6.3, 9.1, 9.3, 1.7], [5.3, 7.9, -9.3, -7.9, 1.0], [2.75, 2.85, -0.3, 1.0, 2.7]]) solid(a, b, c, d, hh);
      for (const lx of [-1.5, 0.3, 2.1]) solid(lx - 0.3, lx + 0.3, 1.6, 2.2, 0.85);
      [-1.5, 0.3, 2.1].forEach((lx, q) => { const f = P(lx, 1.9); wm.add(new THREE.SphereGeometry(0.34, 7, 6), f.x, 0.5, f.z, ['#e63946', '#f4a261', '#ff9ec7'][q]); });   // shrubs/flowers along the wall
    });
  }
  // ---- CITY BANK (door faces north, onto the z = 60 avenue) and POLICE STATION (door faces south): just buildings with a name, nobody can enter
  { const Bx = (w, h, d) => new THREE.BoxGeometry(w, h, d), sign = (txt, bg, fg, w, h) => new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: signTexture(txt, bg, fg), toneMapped: false }));
    { const S = BANK, fz = S.z - S.d / 2;
      wm.add(Bx(44, 0.06, 20), S.x, 0.23, fz - 9, '#b9b4a8');                                        // paved forecourt (the police cars park here)
      wm.add(Bx(S.w + 0.1, 1.2, S.d + 0.1), S.x, 0.6, S.z, '#8d8578');
      wm.add(Bx(S.w, S.h, S.d), S.x, S.h / 2 + 0.02, S.z, '#e6dcc6');
      wm.add(Bx(S.w + 1.4, 0.8, S.d + 1.4), S.x, S.h + 0.4, S.z, '#4a4f5e');
      wm.add(Bx(S.w + 0.8, 0.8, S.d + 0.8), S.x, S.h - 0.5, S.z, '#f1ead8');
      for (let i = -2; i <= 2; i += 1) wm.add(Bx(1.8, 6.5, 0.3), S.x + i * 6.2, 7.2, fz - 0.14, '#2f4a66');     // tall dark windows between the columns
      wm.add(Bx(6.4, 5.2, 0.3), S.x, 3.8, fz - 0.16, '#6b5320'); wm.add(Bx(5.2, 4.4, 0.34), S.x, 3.6, fz - 0.2, '#c9a227');   // the vault door
      world.addSolid(S.x - 3.2, 0, fz - 0.31, S.x + 3.2, 6.4, fz - 0.01, { name: 'prop' });   // vault door
      world.glow.add(Bx(4.4, 0.18, 0.1), S.x, 6.2, fz - 0.42, '#ffe08a');
      for (let i = -3; i <= 3; i++) { const cx = S.x + i * 4.6; wm.add(new THREE.CylinderGeometry(0.62, 0.7, 10.6, 14), cx, 6.5, fz - 2.6, '#f4efe2'); wm.add(Bx(1.7, 0.45, 1.7), cx, 11.95, fz - 2.6, '#d9d2c0'); wm.add(Bx(1.6, 0.4, 1.6), cx, 1.4, fz - 2.6, '#d9d2c0'); solidProp(cx, fz - 2.6, 0.7, 11); }
      wm.add(Bx(33.6, 1.1, 6.2), S.x, 12.7, fz - 2.8, '#f1ead8'); wm.add(Bx(34.2, 0.5, 6.6), S.x, 13.5, fz - 2.8, '#4a4f5e');
      wm.add(Bx(31, 0.1, 4.6), S.x, 0.25, fz - 3.6, '#a8a294'); wm.add(Bx(27, 0.1, 3.4), S.x, 0.29, fz - 3.0, '#bdb7a8'); world.addSolid(S.x - 15.5, 0, fz - 5.9, S.x + 15.5, 0.3, fz - 1.3, { name: 'step' }); world.addSolid(S.x - 13.5, 0, fz - 4.7, S.x + 13.5, 0.34, fz - 1.3, { name: 'step' });   // steps (walkable)
      wm.add(Bx(20.4, 4.4, 0.3), S.x, 16.3, fz - 0.4, '#14304f');                                             // name board on the roof
      const sg = sign('CITY BANK', '#14304f', '#ffd23f', 19.6, 3.9); sg.position.set(S.x, 16.3, fz - 0.58); sg.rotation.y = Math.PI; world.group.add(sg);
      wm.add(new THREE.CylinderGeometry(0.1, 0.12, 6, 8), S.x + 14.5, 18.4, fz + 3, '#c9d1d9'); wm.add(Bx(2.6, 1.6, 0.06), S.x + 15.9, 20.6, fz + 3, '#1c7c3c');
    }
    { const S = POLICE, fz = S.z + S.d / 2;
      wm.add(Bx(44, 0.06, 24), S.x, 0.23, fz + 10.5, '#8e939c');                                       // forecourt with the delivery ring
      wm.add(Bx(S.w + 0.1, 1.0, S.d + 0.1), S.x, 0.5, S.z, '#6a7280');
      wm.add(Bx(S.w, S.h, S.d), S.x, S.h / 2 + 0.02, S.z, '#cdd6e6');
      wm.add(Bx(S.w + 0.3, 1.5, S.d + 0.3), S.x, 9.4, S.z, '#1f3f8a');
      wm.add(Bx(S.w + 1.4, 0.8, S.d + 1.4), S.x, S.h + 0.4, S.z, '#3b4254');
      for (const i of [-3, -2, 2, 3]) wm.add(Bx(3.4, 2.6, 0.24), S.x + i * 4.6, 5.4, fz + 0.1, '#9fd0f0');
      wm.add(Bx(6.4, 4.0, 0.3), S.x, 2.3, fz + 0.12, '#9fd0f0'); wm.add(Bx(0.3, 4.0, 0.36), S.x, 2.3, fz + 0.14, '#1f3f8a');   // glass double door
      world.addSolid(S.x - 3.2, 0, fz - 0.03, S.x + 3.2, 4.3, fz + 0.3, { name: 'prop' });   // glass double door
      wm.add(Bx(10, 0.5, 3.4), S.x, 4.8, fz + 1.7, '#1f3f8a'); solidProp(S.x - 4.6, fz + 3.1, 0.2, 4.8); solidProp(S.x + 4.6, fz + 3.1, 0.2, 4.8);
      wm.add(Bx(14.6, 3.6, 0.3), S.x, 14.2, fz - 0.4, '#1f3f8a');
      const sg = sign('POLICE', '#1f3f8a', '#ffffff', 14, 3.2); sg.position.set(S.x, 14.2, fz - 0.22); world.group.add(sg);
      world.glow.add(Bx(1.6, 0.4, 0.8), S.x - 12, S.h + 1.0, fz - 2, '#ff2a2a'); world.glow.add(Bx(1.6, 0.4, 0.8), S.x + 12, S.h + 1.0, fz - 2, '#2a6bff');
      wm.add(new THREE.CylinderGeometry(0.08, 0.1, 7, 8), S.x - 15, S.h + 4, S.z, '#c9d1d9');
      const Z = POLICE.zone, ringG = new THREE.RingGeometry(Z.r - 0.9, Z.r, 56); ringG.rotateX(-Math.PI / 2);   // the drop-off ring (the thief is delivered here)
      world.glow.add(ringG, Z.x, 0.31, Z.z, '#4ade80'); wm.add(new THREE.CylinderGeometry(Z.r - 0.9, Z.r - 0.9, 0.03, 56), Z.x, 0.28, Z.z, '#1d3a2a');
    }
  }
  // ---- MISSION LOBBY (walk in, step on the glowing pad) + the stunt-course start line and finish gate
  { const L = LOBBY, Bx = (a, b, c) => new THREE.BoxGeometry(a, b, c), mk = (tex, ww, hh) => new THREE.Mesh(new THREE.PlaneGeometry(ww, hh), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }));
    wm.add(Bx(L.w + 5, 0.06, L.d + 7), L.x, 0.22, L.z + 1.5, '#4b4f58');                                  // forecourt
    wm.add(Bx(L.w - 0.6, 0.06, L.d - 0.6), L.x, 0.23, L.z, '#2b2540');                                     // interior floor
    for (const [a, b, c, d] of LOBBY_WALLS) wm.add(Bx(b - a, 3.8, d - c), L.x + (a + b) / 2, 2.1, L.z + (c + d) / 2, '#efe9fb');
    wm.add(Bx(4, 0.9, 0.3), L.x, 3.55, L.z + 5.35, '#efe9fb');                                              // lintel over the door
    wm.add(Bx(L.w + 0.6, 0.45, L.d + 0.6), L.x, 4.2, L.z, '#a855f7'); wm.add(Bx(L.w + 0.2, 0.2, L.d + 0.2), L.x, 4.02, L.z, '#f6f1e6');   // ceiling + purple roof slab
    wm.add(Bx(L.w + 0.8, 0.5, 0.4), L.x, 3.4, L.z + 5.55, '#a855f7');                                       // purple band on the front
    { const s = mk(signTexture('MISSION LOBBY', '#241a3b', '#ffd23f'), 10, 2.5); s.position.set(L.x, 5.9, L.z + 5.5); world.group.add(s);
      wm.add(Bx(0.25, 2.2, 0.25), L.x - 4.6, 5.1, L.z + 5.45, '#3b3f4a'); wm.add(Bx(0.25, 2.2, 0.25), L.x + 4.6, 5.1, L.z + 5.45, '#3b3f4a'); }
    { const s = mk(signTexture(STUNT.name, '#12202e', '#5ef0ff'), 7, 1.75); s.position.set(L.x, 2.5, L.z - 5.1); world.group.add(s); }   // the mission board on the back wall
    world.glow.add(new THREE.CylinderGeometry(1.9, 1.9, 0.05, 28), L.pad.x, 0.28, L.pad.z, '#ffd23f'); world.glow.add(new THREE.CylinderGeometry(1.2, 1.2, 0.07, 24), L.pad.x, 0.29, L.pad.z, '#a855f7');
    world.glow.add(Bx(2.4, 0.06, 0.6), L.x - 4, 3.9, L.z, '#fff4cf'); world.glow.add(Bx(2.4, 0.06, 0.6), L.x + 4, 3.9, L.z, '#fff4cf'); world.glow.add(Bx(2.4, 0.06, 0.6), L.x, 3.9, L.z - 2.5, '#fff4cf');
    wm.add(Bx(5, 0.9, 0.7), L.x, 0.7, L.z - 4.5, '#3a2f55'); wm.add(Bx(5.2, 0.08, 0.8), L.x, 1.2, L.z - 4.5, '#a855f7');                       // reception desk
    for (const sx of [-5.5, 5.5]) { wm.add(Bx(1.6, 0.4, 3), L.x + sx, 0.5, L.z + 0.5, '#5b4a8a'); wm.add(Bx(0.3, 0.8, 3), L.x + sx + Math.sign(sx) * 0.7, 0.8, L.z + 0.5, '#4a3b77'); }   // benches
    world.addSolid(L.x - 2.6, 0.2, L.z - 4.9, L.x + 2.6, 1.25, L.z - 4.1, { name: 'prop' });
    for (const sx of [-5.5, 5.5]) world.addSolid(L.x + sx - 1.0, 0.2, L.z - 1.0, L.x + sx + 1.0, 1.2, L.z + 2.0, { name: 'prop' });
    // stunt course: start line + lane marks, finish gate
    const S = STUNT; wm.add(Bx(0.6, 0.02, 14), S.startX - 4, 0.05, 0, '#ffffff'); for (const z of S.lanes) wm.add(Bx(5, 0.02, 0.15), S.startX - 1.5, 0.05, z + 1.5, '#ffd23f');
    for (const pz of [-7.5, 7.5]) wm.add(Bx(0.6, 6, 0.6), S.finishX, 3, pz, '#d62828');
    { const cv = document.createElement('canvas'); cv.width = 512; cv.height = 96; const g = cv.getContext('2d'); for (let i = 0; i < 16; i++) for (let j = 0; j < 3; j++) { g.fillStyle = (i + j) % 2 ? '#111' : '#fff'; g.fillRect(i * 32, j * 32, 32, 32); }
      const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; const bn = mk(t, 15, 2.8); bn.rotation.y = Math.PI / 2; bn.position.set(S.finishX, 6.2, 0); world.group.add(bn); const bn2 = bn.clone(); bn2.rotation.y = -Math.PI / 2; bn2.position.x += 0.05; world.group.add(bn2); }
  }
  // ---- WEAPON STORE: a hollow shop with a counter, the weapons on the walls and a red pad to stand on
  { const L = ARMS, Bx = (a, b, c) => new THREE.BoxGeometry(a, b, c), mk = (tex, ww, hh) => new THREE.Mesh(new THREE.PlaneGeometry(ww, hh), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }));
    wm.add(Bx(L.w + 5, 0.06, L.d + 7), L.x, 0.22, L.z + 1.5, '#4b4f58');
    wm.add(Bx(L.w - 0.6, 0.06, L.d - 0.6), L.x, 0.23, L.z, '#2a2024');
    for (const [a, b, c, d] of LOBBY_WALLS) wm.add(Bx(b - a, 3.8, d - c), L.x + (a + b) / 2, 2.1, L.z + (c + d) / 2, '#e8e2dc');
    wm.add(Bx(4, 0.9, 0.3), L.x, 3.55, L.z + 5.35, '#e8e2dc');
    wm.add(Bx(L.w + 0.6, 0.45, L.d + 0.6), L.x, 4.2, L.z, '#e63946'); wm.add(Bx(L.w + 0.2, 0.2, L.d + 0.2), L.x, 4.02, L.z, '#f6f1e6');
    wm.add(Bx(L.w + 0.8, 0.5, 0.4), L.x, 3.4, L.z + 5.55, '#e63946');
    { const s2 = mk(signTexture('WEAPON STORE', '#2a0f12', '#ffd23f'), 10, 2.5); s2.position.set(L.x, 5.9, L.z + 5.5); world.group.add(s2);
      wm.add(Bx(0.25, 2.2, 0.25), L.x - 4.6, 5.1, L.z + 5.45, '#3b3f4a'); wm.add(Bx(0.25, 2.2, 0.25), L.x + 4.6, 5.1, L.z + 5.45, '#3b3f4a'); }
    world.glow.add(new THREE.CylinderGeometry(1.9, 1.9, 0.05, 28), L.pad.x, 0.28, L.pad.z + 0.0, '#ff4d5a'); world.glow.add(new THREE.CylinderGeometry(1.2, 1.2, 0.07, 24), L.pad.x, 0.29, L.pad.z, '#ffd23f');
    for (const dx of [-4, 0, 4]) world.glow.add(Bx(2.4, 0.06, 0.6), L.x + dx, 3.9, L.z - 1, '#fff4cf');
    wm.add(Bx(5, 1.1, 1), L.x, 0.75, L.z - 4.4, '#3a2a2e'); wm.add(Bx(5.2, 0.08, 1.1), L.x, 1.3, L.z - 4.4, '#e63946');   // counter
    // weapon racks on the walls: real models (pistols on the east wall, AK-47s on the west wall, bats on the back wall), each group on a dark board with a coloured light strip
    wm.add(Bx(0.12, 3.0, 5.8), L.x - 7.64, 2.05, L.z - 0.2, '#a7adb7'); wm.add(Bx(0.12, 3.0, 5.8), L.x + 7.64, 2.05, L.z - 0.2, '#d9dde3');   // light boards: the dark guns stand out
    wm.add(Bx(5.6, 2.2, 0.12), L.x - 4.9, 2.5, L.z - 5.14, '#1c1f26'); wm.add(Bx(5.6, 2.2, 0.12), L.x + 4.9, 2.5, L.z - 5.14, '#1c1f26');
    world.glow.add(Bx(0.05, 0.07, 5.8), L.x + 7.56, 0.55, L.z - 0.2, '#22d3ee'); world.glow.add(Bx(0.05, 0.07, 5.8), L.x - 7.56, 0.55, L.z - 0.2, '#ff4d5a');
    world.glow.add(Bx(5.6, 0.07, 0.05), L.x - 4.9, 1.34, L.z - 5.06, '#ffb347'); world.glow.add(Bx(5.6, 0.07, 0.05), L.x + 4.9, 1.34, L.z - 5.06, '#ffb347');
    const put = (kind, x, y, z, ry, rz, sc) => { const m = makeWeaponModel(kind); m.position.set(x, y, z); m.rotation.set(0, ry, rz); m.scale.setScalar(sc); world.group.add(m); };
    for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) put('pistol', L.x + 7.5, 1.45 + r * 0.8, L.z - 2.25 + c * 1.45, 0, 0, 3.4);                      // pistols, barrels to the right
    for (let r = 0; r < 4; r++) put('ak', L.x - 7.5, 1.3 + r * 0.7, L.z - 0.2 + (r % 2 ? 0.3 : -0.3), Math.PI, 0, 1.7);                                      // AK-47s, barrels to the left
    for (let r = 0; r < 3; r++) for (const sx of [-1, 1]) for (const cx of [3.7, 6.0]) put('bat', L.x + sx * cx, 1.75 + r * 0.62, L.z - 5.0, 0, Math.PI / 2, 1.9);   // bats laid across the back wall
    { const bw = 15, bh = 7.5, by = 4.43 + 3.2 + bh / 2, bz = L.z + 0.4, tex = akSignTexture(), mat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false });   // the big lit AK-47 board on the roof, readable from the street (+z) and from behind
      for (const px of [-5.5, 5.5]) wm.add(Bx(0.45, 3.4, 0.45), L.x + px, 4.43 + 1.7, bz, '#2a2d35');
      const f = new THREE.Mesh(new THREE.PlaneGeometry(bw, bh), mat); f.position.set(L.x, by, bz + 0.12); world.group.add(f);
      const k = new THREE.Mesh(new THREE.PlaneGeometry(bw, bh), mat); k.position.set(L.x, by, bz - 0.12); k.rotation.y = Math.PI; world.group.add(k);
      world.addSolid(L.x - bw / 2, by - bh / 2, bz - 0.15, L.x + bw / 2, by + bh / 2, bz + 0.15, { name: 'prop' }); world.addSolid(L.x - 5.75, 4.4, bz - 0.25, L.x - 5.25, 7.7, bz + 0.25, { name: 'prop' }); world.addSolid(L.x + 5.25, 4.4, bz - 0.25, L.x + 5.75, 7.7, bz + 0.25, { name: 'prop' });
      for (const [gx, gy, gw, gh] of [[0, by + bh / 2 + 0.08, bw + 0.3, 0.14], [0, by - bh / 2 - 0.08, bw + 0.3, 0.14]]) world.glow.add(Bx(gw, gh, 0.14), L.x + gx, gy, bz, '#ff3b3b');
      for (const sx of [-1, 1]) world.glow.add(Bx(0.14, bh + 0.3, 0.14), L.x + sx * (bw / 2 + 0.08), by, bz, '#ff3b3b'); }
    { const s3 = mk(signTexture('BAT   PISTOL   AK-47', '#2a0f12', '#ffffff'), 7, 1.0); s3.position.set(L.x, 2.7, L.z - 5.1); world.group.add(s3); } }
  // ---- INTELLIMUM AUTOS: a glass showroom, four display cars, a pylon sign with the infinity logo and the SELL ring on the lot
  { const S = AUTOS.showroom, Z = AUTOS.zone, Bx = (a, b, c) => new THREE.BoxGeometry(a, b, c), fz = S.z + S.d / 2;
    wm.add(Bx(46, 0.06, 40), AUTOS.x, 0.22, 30, '#3f434c');                                                   // black-top lot
    wm.add(Bx(S.w, S.h, S.d), S.x, S.h / 2, S.z, '#e9edf2'); wm.add(Bx(S.w + 1, 0.5, S.d + 1), S.x, S.h + 0.25, S.z, '#0f1a33');
    wm.add(Bx(S.w - 2, 3.6, 0.3), S.x, 2.2, fz + 0.08, '#8fd8ee'); wm.add(Bx(S.w - 1.6, 0.4, 0.45), S.x, 4.2, fz + 0.1, '#0f1a33');   // the glass front
    for (let i = -3; i <= 3; i++) wm.add(Bx(0.25, 3.8, 0.4), S.x + i * 4.2, 2.1, fz + 0.1, '#0f1a33');
    world.addSolid(S.x - (S.w - 2) / 2, 0, fz - 0.07, S.x + (S.w - 2) / 2, 4.4, fz + 0.33, { name: 'prop' });   // the glass front / mullions stick out of the wall: solid so nobody stands inside them
    for (const px of [-17.5, 17.5]) { wm.add(Bx(0.9, 9, 0.9), S.x + px, 4.5, 24.5, '#0f1a33'); }                      // sign pylons
    // the name boards: every board has a face towards the lot (+z, rotation 0) and one towards the showroom (rotation PI), both reading left to right
    const nameBoard = (w, h, x, y, z) => { const tex = intellimumTexture(), mat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false });
      const f = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); f.position.set(x, y, z + 0.07); world.group.add(f);
      const k = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); k.position.set(x, y, z - 0.07); k.rotation.y = Math.PI; world.group.add(k);
      world.addSolid(x - w / 2, y - h / 2, z - 0.1, x + w / 2, y + h / 2, z + 0.1, { name: 'prop' }); };
    nameBoard(34.6, 8.65, S.x, 9.2, 24.5);                                                                   // the pylon sign over the lot
    { const rz = S.z + 0.5; for (const px of [-8, 8]) wm.add(Bx(0.5, 8.4, 0.5), S.x + px, S.h + 0.5 + 4.2, rz, '#0f1a33');   // the roof sign: INTELLIMUM AUTOS on top of the showroom
      nameBoard(26, 6.5, S.x, S.h + 0.5 + 8.4 + 3.25, rz); world.glow.add(Bx(26, 0.12, 0.12), S.x, S.h + 0.5 + 8.4 + 6.56, rz, '#22d3ee'); }
    world.glow.add(Bx(34, 0.12, 0.12), S.x, 13.6, 24.5, '#22d3ee');
    for (const [dx, id, c] of AUTOS_SHOW) {                                                                     // display cars on plinths
      wm.add(Bx(2.3, 0.35, 5), S.x + dx, 0.38, 22.8, '#cfd6df'); const m = buildTrafficMesh(id, c); m.position.set(S.x + dx, 0.55, 22.8); m.rotation.y = Math.PI * (dx < 0 ? 0.88 : 1.12); world.group.add(m); }
    const ring = new THREE.RingGeometry(Z.r - 0.9, Z.r, 56); ring.rotateX(-Math.PI / 2);                          // the sell ring
    world.glow.add(ring, Z.x, 0.31, Z.z, '#22d3ee'); wm.add(new THREE.CylinderGeometry(Z.r - 0.9, Z.r - 0.9, 0.03, 56), Z.x, 0.28, Z.z, '#10303a');
    for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2; world.glow.add(Bx(0.5, 0.06, 2.2), Z.x + Math.cos(a) * (Z.r - 2.0), 0.33, Z.z + Math.sin(a) * (Z.r - 2.0), '#ffd23f', 0, -a, 0); }
    { const cv = document.createElement('canvas'); cv.width = 512; cv.height = 512; const g = cv.getContext('2d');   // the disc inside the ring: logo + the slogan, upright for a driver coming in from the street (south)
      g.fillStyle = '#10303a'; g.beginPath(); g.arc(256, 256, 252, 0, Math.PI * 2); g.fill();
      drawInfinity(g, 256, 140, 112, 22); g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillStyle = '#ffffff'; g.font = 'bold 54px Arial Black, Arial'; g.fillText('SELL VEHICLES', 256, 296);
      g.fillStyle = '#ffd23f'; g.font = 'bold 72px Arial Black, Arial'; g.fillText('AND GET $', 256, 380);
      const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; const pl = new THREE.Mesh(new THREE.PlaneGeometry(9.4, 9.4), new THREE.MeshBasicMaterial({ map: t, toneMapped: false, transparent: true, depthWrite: false })); pl.rotation.x = -Math.PI / 2; pl.position.set(Z.x, 0.36, Z.z); world.group.add(pl); }
  }
  // ---- the STUNT PARK: boost pads, a lit tunnel, a start gate and the parking grid for the four white cars
  { const P = PARK, Bx = (a, b, c) => new THREE.BoxGeometry(a, b, c), solid = (x0, z0, x1, z1, h) => { world.addSolid(x0, 0, z0, x1, h, z1, { name: 'prop' }); roads.boxes.push({ x0, x1, z0, z1, h }); };
    // speed boosters: dark pad + glowing chevrons pointing the way to drive
    for (const b of P.boosts) {
      wm.add(Bx(b.rx * 2, 0.05, b.rz * 1.7), b.x, 0.135, b.z, '#16222f');
      for (let k = -1; k <= 1; k++) { const tx = b.x + b.dir * (k * 4.2 + 1.8);
        for (const sg of [-1, 1]) world.glow.add(Bx(4.2, 0.06, 0.65), tx - b.dir * 1.5, 0.19, b.z + sg * 1.5, '#7dff5a', 0, b.dir * sg * Math.PI / 4, 0); }
      for (const sg of [-1, 1]) world.glow.add(Bx(b.rx * 2, 0.06, 0.22), b.x, 0.19, b.z + sg * b.rz * 0.85, '#ffee00');
    }
    // the tunnel: two solid walls, a roof you can see (cars never reach it), light strips and striped portals
    { const T = P.tunnel, L = T.x1 - T.x0, cx = (T.x0 + T.x1) / 2, zs = [T.z - T.half - 1, T.z + T.half + 1];
      for (const zc of zs) { wm.add(Bx(L, T.h, 1), cx, T.h / 2, zc, '#aab3c2'); solid(T.x0, zc - 0.5, T.x1, zc + 0.5, T.h); }
      wm.add(Bx(L + 0.6, 0.7, T.half * 2 + 3.2), cx, T.h + 0.35, T.z, '#7b8494');
      for (let x = T.x0 + 2; x < T.x1; x += 4.5) { world.glow.add(Bx(0.5, 0.08, T.half * 1.5), x, T.h - 0.05, T.z, '#fff1b5'); for (const zc of zs) world.glow.add(Bx(2.2, 0.1, 0.06), x, 1.2, zc + (zc < T.z ? 0.55 : -0.55), '#ffb347'); }
      for (const xp of [T.x0, T.x1]) for (let i = 0; i < 8; i++) { const sl = (T.half * 2 + 2) / 8; wm.add(Bx(0.7, 1.2, sl), xp, T.h - 0.7, T.z - T.half - 1 + (i + 0.5) * sl, i % 2 ? '#111' : '#ffd23f'); }   // hazard-striped portals
    }
    // start gate over the top straight + a checkered start line
    { const G = P.gate; for (const sg of [-1, 1]) { wm.add(Bx(0.7, 7, 0.7), G.x, 3.5, G.z + sg * 13.2, '#d62828'); solid(G.x - 0.35, G.z + sg * 13.2 - 0.35, G.x + 0.35, G.z + sg * 13.2 + 0.35, 7); }
      const cv = document.createElement('canvas'); cv.width = 512; cv.height = 64; const g = cv.getContext('2d'); for (let i = 0; i < 32; i++) for (let j = 0; j < 4; j++) { g.fillStyle = (i + j) % 2 ? '#111' : '#fff'; g.fillRect(i * 16, j * 16, 16, 16); }
      const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; const m1 = new THREE.Mesh(new THREE.PlaneGeometry(26.4, 2), new THREE.MeshBasicMaterial({ map: t, toneMapped: false, side: THREE.DoubleSide })); m1.rotation.y = Math.PI / 2; m1.position.set(G.x, 7.2, G.z); world.group.add(m1);
      const m2 = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 21), new THREE.MeshBasicMaterial({ map: t, toneMapped: false })); m2.rotation.x = -Math.PI / 2; m2.rotation.z = Math.PI / 2; m2.position.set(G.x + 3, 0.13, G.z); world.group.add(m2); }
    // crash barriers round the whole pad (concrete blocks, red / white)
    for (const [x0, z0, x1, z1] of P.walls) { solid(x0, z0, x1, z1, P.wallH); const horiz = x1 - x0 > z1 - z0, L = horiz ? x1 - x0 : z1 - z0, n = Math.round(L / 6);
      for (let i = 0; i < n; i++) { const a = i / n * L, b = (i + 1) / n * L, c0 = i % 2 ? '#d62828' : '#f1f1f1'; if (horiz) wm.add(Bx(b - a, P.wallH, z1 - z0), x0 + (a + b) / 2, P.wallH / 2, (z0 + z1) / 2, c0); else wm.add(Bx(x1 - x0, P.wallH, b - a), (x0 + x1) / 2, P.wallH / 2, z0 + (a + b) / 2, c0); } }
    wm.add(Bx(9, 0.05, 7), P.cxW + 44, 0.07, 93.5, '#6b1f24');   // the racing car's pad
    wm.add(Bx(15, 0.05, 20), P.cxW + 62, 0.07, 93.5, '#3b3f4a');   // the bus bay in the infield
    // the parking grid in the infield
    { const Sp = P.spawn; wm.add(Bx(9, 0.05, 4 * Sp.step + 1), Sp.x, 0.07, Sp.z + 1.5 * Sp.step, '#3b3f4a');
      for (let k = 0; k <= 4; k++) wm.add(Bx(6.4, 0.02, 0.12), Sp.x, 0.11, Sp.z + (k - 0.5) * Sp.step, '#ffd23f'); }
  }
  // ---- parks: fountain + trees + benches
  for (const [px, pz] of PARKS) {
    wm.add(new THREE.CylinderGeometry(2.6, 2.8, 1.0, 14), px, 0.7, pz, '#b8c2cc'); wm.add(new THREE.CylinderGeometry(2.0, 2.0, 0.2, 14), px, 1.22, pz, '#5ec8f0'); wm.add(new THREE.CylinderGeometry(0.3, 0.4, 2.4, 8), px, 2.2, pz, '#b8c2cc'); world.glow.add(new THREE.SphereGeometry(0.7, 8, 6), px, 3.6, pz, '#bff0ff');
    for (let i = 0; i < 16; i++) { const x = px + (R() - 0.5) * 42, z = pz + (R() - 0.5) * 42; if (Math.hypot(x - px, z - pz) < 6) continue; plant(x, 0.2, z, 0.9 + R() * 0.7); }
    for (const a of [0, 1, 2, 3]) { const x = px + Math.cos(a * 1.57) * 8, z = pz + Math.sin(a * 1.57) * 8; wm.add(world.rbox(2.4, 0.3, 0.8, 0.05), x, 0.55, z, '#8a5a34'); wm.add(world.rbox(2.4, 0.6, 0.15, 0.03), x, 0.9, z + 0.35, '#8a5a34'); solidProp(x, z, 1.2, 0.9, 0.2); }
  }
  // ---- street trees + lamps along every avenue
  for (const g of GT.GRID) for (const side of [-1, 1]) for (let t = -224; t <= 224; t += 14) {
    if (GT.GRID.some((q) => Math.abs(t - q) < 10)) continue;
    const o = side * (GT.HW + 2.2), lamp = ((t + 224) / 14) % 2 === 0;
    for (const [x, z, horiz] of [[g + o, t, false], [t, g + o, true]]) { if (x > 12 && x < 48 && Math.abs(z) > 66 && Math.abs(z) < 72) continue;   // keep the forecourts of the bank and the police station clear
      if (lamp) lampPost(x, z, side, horiz); else plant(x, 0.2, z, 0.8 + R() * 0.3); }
  }
  // ---- grass tufts (they sway in the wind), flowers and bushes on every lawn: parks, house gardens, the summit meadow
  scatterGrass(world, R);
  // ---- forest on the hills and the mountain
  for (let i = 0, n = 0; i < 4000 && n < 520; i++) {
    const x = (R() - 0.5) * 1000, z = (R() - 0.5) * 1000, h = gtaH(x, z); if (h < 1.2 || h > 30 || Math.max(Math.abs(x), Math.abs(z)) < 300) continue;
    const gx = (gtaH(x + 2, z) - gtaH(x - 2, z)) / 4, gz = (gtaH(x, z + 2) - gtaH(x, z - 2)) / 4; if (Math.hypot(gx, gz) > 0.55) continue;
    if (Math.abs(z) < 24 && x > 230) continue; // keep the highway clear
    let onRoad = false; for (let u = 0; u <= 1; u += 0.02) { const p = mtRoad(u); if (Math.hypot(p.x - x, p.z - z) < 13) { onRoad = true; break; } } if (onRoad) continue;
    if (snipeClear(x, z)) continue;
    plant(x, h, z, 1.2 + R() * 1.2, true); n++;
  }
  // ---- the summit meadow: big old trees and boulders to hide behind (SUMMIT.covers: the thief ambush uses the same list) plus a ring of ordinary trees
  { const M = GT.MT, y = mtC(M.Rt);
    for (const c of SUMMIT.covers) { if (c.kind === 'tree') { tree(wm, c.x, y, c.z, 2.6, R); solidProp(c.x, c.z, 0.8, 5, y); }
      else { wm.add(new THREE.DodecahedronGeometry(1.9, 0), c.x, y + 0.9, c.z, '#7e7b73', R() * 3, R() * 3, 0); wm.add(new THREE.DodecahedronGeometry(1.2, 0), c.x + 1.2, y + 0.5, c.z + 0.6, '#8a867d', R() * 3, R() * 3, 0); solidProp(c.x, c.z, 1.55, 2.4, y); } }   // (the meadow is dead flat, so y is the same everywhere)
    const arr = M.th0 + M.T * Math.PI * 2;
    for (let k = 0; k < 14; k++) { const a = arr + (50 + k * 22.8) * Math.PI / 180, rad = 16.5 + R() * 1.5, px = M.cx + Math.cos(a) * rad, pz = M.cz + Math.sin(a) * rad; plant(px, gtaH(px, pz), pz, 1.8 + R() * 0.9); }
    for (let k = 0; k < 18; k++) { const a = R() * 6.28, rad = 3 + R() * 6; if (Math.abs(((a - arr) % 6.2832) + 6.2832) % 6.2832 < 0.7) continue; wm.add(new THREE.SphereGeometry(0.35 + R() * 0.3, 5, 4), M.cx + Math.cos(a) * rad, y + 0.15, M.cz + Math.sin(a) * rad, '#4f8f33'); } }   // bushes
  // ---- lookout + summit props
  { const M = GT.MT, y = mtC(M.Rt); wm.add(new THREE.CylinderGeometry(0.15, 0.2, 9, 6), M.cx, y + 4.5, M.cz, '#ddd'); world.glow.add(new THREE.BoxGeometry(3.4, 1.8, 0.1), M.cx + 1.7, y + 8, M.cz, '#ff6b9d'); }
  // ---- SNIPE THE TRUCK: the concrete tunnel through the ridge, the red bail-out line, the sniper's circled pad and a crash barrier round it
  { const S = SNIPE, T = S.tun, Bx = (a, b, c) => new THREE.BoxGeometry(a, b, c), L = T.z1 - T.z0, cz = (T.z0 + T.z1) / 2, top = 15.5, outer = 22;
    const solid = (x0, z0, x1, z1, h, y0 = 0, box = true) => { world.addSolid(x0, y0, z0, x1, h, z1, { name: 'prop' }); if (box) roads.boxes.push({ x0, x1, z0, z1, h }); };
    for (const sg of [-1, 1]) {   // the two rock walls beside the road (solid for cars) and the roof slab (solid for people and bullets only)
      const xa = sg < 0 ? T.x - outer : T.x + T.half, xb = sg < 0 ? T.x - T.half : T.x + outer;
      wm.add(Bx(xb - xa, top, L), (xa + xb) / 2, top / 2, cz, '#8a8478'); solid(sg < 0 ? xa : xa - 0.3, T.z0, sg < 0 ? xb + 0.3 : xb, T.z1, top);
      wm.add(Bx(0.3, T.h, L - 0.4), T.x + sg * (T.half - 0.15), T.h / 2, cz, '#4a4f5a');   // the inner lining
    }
    wm.add(Bx(T.half * 2 + 0.6, top - T.h, L), T.x, T.h + (top - T.h) / 2, cz, '#8a8478'); solid(T.x - T.half, T.z0, T.x + T.half, T.z1, top, T.h, false);
    wm.add(Bx(T.half * 2, 0.12, L), T.x, T.h - 0.06, cz, '#3a3e48');
    for (let z = T.z0 + 3; z < T.z1; z += 5) world.glow.add(Bx(T.half * 1.3, 0.1, 0.5), T.x, T.h - 0.2, z, '#fff1b5');
    for (let z = T.z0 + 3; z < T.z1; z += 5) for (const sg of [-1, 1]) world.glow.add(Bx(0.1, 0.12, 2.4), T.x + sg * (T.half - 0.35), 1.1, z, '#ffb347');
    for (const zp of [T.z0, T.z1]) for (let i = 0; i < 8; i++) { const sl = T.half * 2 / 8; wm.add(Bx(sl, 0.9, 0.7), T.x - T.half + (i + 0.5) * sl, T.h - 0.45, zp + (zp === T.z0 ? -0.35 : 0.35), i % 2 ? '#111' : '#ffd23f'); }   // hazard-striped portals
    // the red line across the road: the truck driver pulls out here
    { const z = S.bail.z; world.glow.add(Bx(GT.HW * 2, 0.05, 1.4), S.road[0][0], 0.16, z, '#ff2a2a'); for (let k = -3; k <= 3; k++) world.glow.add(Bx(1.1, 0.06, 3.2), S.road[0][0] + k * 1.7, 0.17, z - 3.2, k % 2 ? '#ffffff' : '#ff2a2a'); }
    // the sniper's pad: a glowing yellow ring, a low crash barrier on the open side
    { const P = S.pad; world.glow.add(new THREE.RingGeometry(P.r - 1.0, P.r, 48), P.x, P.y + 0.16, P.z, '#ffd23f', -Math.PI / 2, 0, 0); world.glow.add(new THREE.RingGeometry(P.r - 4.2, P.r - 3.7, 48), P.x, P.y + 0.16, P.z, '#ffd23f', -Math.PI / 2, 0, 0);
      wm.add(Bx(0.5, 0.2, 0.5), P.x, P.y + 0.05, P.z, '#ffd23f'); }
  }
  // ---- stunt ramps (orange wedges with white stripes + glowing top edge)
  for (const [rx, rz, yaw, len, hg, w] of RAMPS) {
    const sh = new THREE.Shape(); sh.moveTo(0, 0); sh.lineTo(len, 0); sh.lineTo(len, hg); sh.lineTo(0, 0);
    const g1 = new THREE.ExtrudeGeometry(sh, { depth: w, bevelEnabled: false }); g1.translate(0, 0, -w / 2);
    wm.add(g1, rx, 0.02, rz, '#ff8a00', 0, yaw - Math.PI / 2, 0);
    const n = 5; for (let i = 0; i < n; i++) { const u0 = (i + 0.5) / n * len, hh = hg * u0 / len; const st = new THREE.BoxGeometry(len / n * 0.3, 0.06, w * 0.96); st.rotateZ(Math.atan2(hg, len)); wm.add(st, rx + Math.sin(yaw) * u0, hh + 0.08, rz + Math.cos(yaw) * u0, '#ffffff', 0, yaw - Math.PI / 2, 0); }
    world.glow.add(new THREE.BoxGeometry(0.25, 0.25, w), rx + Math.sin(yaw) * len, hg + 0.12, rz + Math.cos(yaw) * len, '#ffee00', 0, yaw - Math.PI / 2, 0);
  }
  // ---- traffic: real cars (merged, cheap) circling the avenues; they are solid for you and for people on foot
  const traffic = [], tl = info.trafficList = [], tcol = ['#c9c9cf', '#1f3a5f', '#9a2b2b', '#e8e2d0', '#2d5a3d', '#6a6f78', '#d9b34a', '#4a2b5e', '#2b2b30'], tids = [11, 12, 13, 14, 16, 18];
  TRAFFIC.forEach((L, li) => { for (let k = 0; k < L.n; k++) { const i = li * 5 + k, id = tids[i % tids.length], m = buildTrafficMesh(id, id === 14 ? null : tcol[i % tcol.length]); m.rotation.order = 'YXZ'; world.group.add(m); const p = trafficPos(L, k, 0), bh = bodyHalf(m) || { hl: 2.4, hw: 1.05 }, st = { id, x: p.x, y: 0, z: p.z, yaw: p.yaw, vx: p.vx, vz: p.vz, speed: L.sp, driver: 1000 + i, parked: false, heavy: true, hl: bh.hl - 0.03, hw: bh.hw - 0.03 }; /* the solid box is the real size of the body (the flat shadow plane does not count) */ tl.push(st); traffic.push({ L, k, m, st }); } });
  const tai = info.tai = new TrafficAI(traffic), dctx = { me: null, carSt: null, cars: [], aim: null };
  world.updaters.push((t) => { tai.update(t, info.trafficCtx || dctx); });
}


// ---- grass: every tuft is a handful of thin blades (7 triangles) drawn in ONE mesh; a small vertex shader sways the tips with the wind (weather.js feeds the uniforms)
function scatterGrass(world, R) {
  const pos = [], nor = [], col = [], sway = [], gc = new THREE.Color(), bush = world.main;
  const DARK = ['#2f5a22', '#35622a', '#2b4f20'], LIGHT = ['#8fbf4a', '#7fb040', '#a3c957', '#6fa238'];
  const tuft = (x, y, z, sc) => {
    const nb = LOWQ ? 5 : 7, dk = DARK[Math.floor(R() * 3)], lt = LIGHT[Math.floor(R() * 4)];
    for (let b = 0; b < nb; b++) {
      const a = R() * 6.283, d = R() * 0.14 * sc, bx = x + Math.cos(a) * d, bz = z + Math.sin(a) * d, h = (0.26 + R() * 0.3) * sc, w = 0.035 * sc, ba = R() * 6.283, bend = (0.06 + R() * 0.12) * sc, wa = ba + Math.PI / 2;
      const v = [[bx - Math.cos(wa) * w, y, bz - Math.sin(wa) * w, 0, dk], [bx + Math.cos(wa) * w, y, bz + Math.sin(wa) * w, 0, dk], [bx + Math.cos(ba) * bend, y + h, bz + Math.sin(ba) * bend, 1, lt]];
      for (const q of v) { pos.push(q[0], q[1], q[2]); nor.push(0, 1, 0); gc.set(q[4]); col.push(gc.r, gc.g, gc.b); sway.push(q[3]); }
    }
  };
  const flower = (x, y, z) => { const c = ['#ffd23f', '#ff6b9d', '#ffffff', '#c77dff', '#ff9a3c'][Math.floor(R() * 5)]; bush.add(new THREE.OctahedronGeometry(0.07 + R() * 0.04, 0), x, y + 0.32 + R() * 0.12, z, c); };
  const bushAt = (x, y, z, r, flow) => { const c = FOL[Math.floor(R() * FOL.length)]; world.addSolid(x - r * 1.05, y, z - r * 1.05, x + r * 1.05, y + r * 0.85, z + r * 1.05, { name: 'prop' }); for (let k = 0; k < (LOWQ ? 2 : 3); k++) { const ox = (R() - 0.5) * r * 0.6, oz = (R() - 0.5) * r * 0.6; const g = new THREE.IcosahedronGeometry(1, LOWQ ? 0 : 1); bush.add(g, x + ox, y + r * 0.28, z + oz, c, 0, R() * 6, 0, r * (0.7 + R() * 0.3), r * 0.55, r * (0.7 + R() * 0.3)); } if (flow) for (let k = 0; k < 4; k++) flower(x + (R() - 0.5) * r * 1.2, y + r * 0.3, z + (R() - 0.5) * r * 1.2); };
  const dens = LOWQ ? 0.5 : 1;
  // parks (42 m squares around a fountain)
  for (const [px, pz] of PARKS) {
    for (let i = 0, n = Math.floor(240 * dens); i < n; i++) { const x = px + (R() - 0.5) * 40, z = pz + (R() - 0.5) * 40; if (Math.hypot(x - px, z - pz) < 4.4) continue; tuft(x, 0.2, z, 0.8 + R() * 0.7); if (R() < 0.05) flower(x, 0.2, z); }
    for (let i = 0; i < 9; i++) { const x = px + (R() - 0.5) * 38, z = pz + (R() - 0.5) * 38; if (Math.hypot(x - px, z - pz) < 7) continue; bushAt(x, 0.2, z, 0.8 + R() * 0.5, true); }
  }
  // house gardens: the front lawn (not the driveway / footpath / porch) and the back garden
  for (const h of HOMES) {
    for (let i = 0, n = Math.floor(70 * dens); i < n; i++) { const lx = (R() - 0.5) * 18.4, lz = 2.2 + R() * 7.2; if ((lx > -5.9 && lx < -0.7) || (lx > 2.5 && lx < 4.3) || (lx > 0.8 && lz < 4)) continue; const p = homeW(h, lx, lz); tuft(p.x, 0.22, p.z, 0.8 + R() * 0.5); if (R() < 0.06) flower(p.x, 0.22, p.z); }
    for (let i = 0, n = Math.floor(40 * dens); i < n; i++) { const lx = (R() - 0.5) * 18, lz = -9.2 + R() * 2; const p = homeW(h, lx, lz); tuft(p.x, 0.22, p.z, 0.8 + R() * 0.5); }
    for (const [lx, lz] of [[-8.6, 3], [8.6, 3], [-8.6, 8.3], [8.8, 8.8]]) { const p = homeW(h, lx, lz); bushAt(p.x, 0.22, p.z, 0.8 + R() * 0.3, R() < 0.6); }
  }
  // the summit meadow
  { const M = GT.MT, y = mtC(M.Rt); for (let i = 0, n = Math.floor(260 * dens); i < n; i++) { const a = R() * 6.283, r = 2.5 + R() * 13.5; tuft(M.cx + Math.cos(a) * r, y, M.cz + Math.sin(a) * r, 0.9 + R() * 0.6); if (R() < 0.04) flower(M.cx + Math.cos(a) * r, y, M.cz + Math.sin(a) * r); } }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); g.setAttribute('sway', new THREE.Float32BufferAttribute(sway, 1));
  const wu = world.windU = { time: { value: 0 }, wind: { value: new THREE.Vector2() } };
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0, side: THREE.DoubleSide });
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = wu.time; sh.uniforms.uWind = wu.wind;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nattribute float sway; uniform float uTime; uniform vec2 uWind;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        float sp = length(uWind); float sw = sway * (0.45 + 0.35 * sp);
        transformed.x += sw * (sin(uTime * 2.1 + position.x * 0.9 + position.z * 0.6) * 0.045 + uWind.x * 0.05);
        transformed.z += sw * (cos(uTime * 1.7 + position.z * 0.8 + position.x * 0.5) * 0.045 + uWind.y * 0.05);`);
  };
  const m = new THREE.Mesh(g, mat); m.castShadow = false; m.receiveShadow = true; m.frustumCulled = false; world.group.add(m);
}

const FOL = ['#3e6b34', '#4a7c3a', '#56893f', '#3a5f2f', '#668f45', '#4f7a36'];
const LOWQ = typeof window !== 'undefined' && typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches;   // phones / tablets get lighter vegetation
const _lc = new THREE.Color(), _dc = new THREE.Color();
// one leaf clump: a small faceted ball, lighter on top and darker underneath so the crown has depth
function clump(batch, x, y, z, r, base, R, top) {
  const g = new THREE.IcosahedronGeometry(1, LOWQ ? 0 : 1), p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const k = 0.86 + R() * 0.28; p.setXYZ(i, p.getX(i) * k, p.getY(i) * k * 0.82, p.getZ(i) * k); }   // lumpy, a little flattened
  _lc.set(base).offsetHSL((R() - 0.5) * 0.03, (R() - 0.5) * 0.08, (top - 0.5) * 0.16 + (R() - 0.5) * 0.04);
  batch.add(g, x, y, z, '#' + _lc.getHexString(), 0, R() * 6.28, 0, r, r, r);
}
function tree(batch, x, y, z, s, R, pine = false) {
  const c = FOL[Math.floor(R() * FOL.length)], c2 = FOL[Math.floor(R() * FOL.length)];
  if (pine) { // distant forest: dark pines with layered skirts
    batch.add(new THREE.CylinderGeometry(0.2 * s, 0.3 * s, 1.8 * s, 6), x, y + 0.9 * s, z, '#5a4331');
    const tiers = LOWQ ? 3 : 5;
    for (let k = 0; k < tiers; k++) { const f = k / (tiers - 1); batch.add(new THREE.ConeGeometry((1.7 - f * 1.0) * s, (2.0 - f * 0.5) * s, LOWQ ? 7 : 9), x, y + (2.0 + f * 3.4) * s, z, f > 0.6 ? '#356b39' : '#2a5430', 0, R() * 6, 0); }
    return;
  }
  // broad-leaf street tree: a flared, tapering trunk with branches reaching into a crown made of many faceted leaf clumps
  const bark = '#5d4a3a', bark2 = '#4a3a2e';
  batch.add(new THREE.CylinderGeometry(0.17 * s, 0.33 * s, 3.4 * s, 8), x, y + 1.7 * s, z, bark);
  batch.add(new THREE.CylinderGeometry(0.33 * s, 0.5 * s, 0.2 * s, 8), x, y + 0.1 * s, z, bark2);   // root flare (low: it stays below walking height)
  const nb = LOWQ ? 3 : 5;
  for (let k = 0; k < nb; k++) { const a = k / nb * 6.283 + R(), tilt = 0.5 + R() * 0.35, L = (1.5 + R() * 0.6) * s;
    const g = new THREE.CylinderGeometry(0.06 * s, 0.14 * s, L, 5); g.translate(0, L / 2, 0);   // base at the origin so it can be tilted about its foot
    batch.add(g, x, y + 3.0 * s, z, bark, Math.sin(a) * tilt, 0, -Math.cos(a) * tilt); }
  const cy = y + 4.7 * s, ra = 2.15 * s, rb = 1.4 * s, n = LOWQ ? 14 : 26;
  for (let k = 0; k < n; k++) {   // clumps spread over the surface of an ellipsoid (golden spiral) plus a few in the middle
    const f = (k + 0.5) / n, phi = Math.acos(1 - 2 * f * 0.92 - 0.04), th = k * 2.39996 + R() * 0.3, inner = k % 4 === 3 ? 0.55 : 1;
    const px = Math.sin(phi) * Math.cos(th) * ra * inner, py = Math.cos(phi) * rb * inner, pz = Math.sin(phi) * Math.sin(th) * ra * inner;
    clump(batch, x + px, cy + py, z + pz, (0.78 + R() * 0.4) * s, k % 3 ? c : c2, R, (py / rb + 1) / 2);
  }
  clump(batch, x, cy, z, 1.15 * s, c, R, 0.45);
}
