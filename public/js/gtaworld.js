// HARIS CITY: builds the 3D city (terrain, roads, buildings, trees, lamps, traffic) and its collision into the World.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { buildTrafficMesh } from './cityvis.js';
import { GT, gtaH, gtaBase, RAMPS, PARK, gtaRoads, gtaBuildings, gtaCars, mtRoad, mtC, PARKS, TRAFFIC, trafficPos, BLK, REPAIR, HOMES, homeW, LOBBY, STUNT, BANK, POLICE } from './gta.js';

const col = new THREE.Color();
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

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
  for (const p of roads.plazas) { // round plazas
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
    if (h > 33) tmp.lerp(col.set('#ffffff'), smooth(33, 41, h));                                    // snow on the summit
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
  info.gta = { buildings: B, roads };
  if (world.headless) return;

  // ---- ground
  const gTex = grainTexture(256, 215, 38, 30, 11, { patches: 4 }), aTex = grainTexture(256, 195, 36, 50, 21, { cracks: 4, patches: 5 });
  const tm = new THREE.Mesh(terrainGeo(), new THREE.MeshStandardMaterial({ vertexColors: true, map: gTex, bumpMap: gTex, bumpScale: 1.6, roughness: 0.95, metalness: 0 })); tm.receiveShadow = true; world.group.add(tm);
  const rm = new THREE.Mesh(roadGeo(roads), new THREE.MeshStandardMaterial({ vertexColors: true, map: aTex, bumpMap: aTex, bumpScale: 1.1, roughness: 0.82, metalness: 0.05 })); rm.receiveShadow = true; world.group.add(rm);
  // ---- buildings (windows) + roofs / awnings
  const wt = windowTexture(false), wg = windowTexture(true), wallTex = grainTexture(128, 235, 30, 22, 31);
  const plain = B.filter((b) => b.zone > 0), towers = B.filter((b) => b.zone === 0);
  const bm = new THREE.Mesh(mergeGeometries(plain.map(buildingGeo)), new THREE.MeshStandardMaterial({ vertexColors: true, map: wt, bumpMap: wallTex, bumpScale: 0.6, roughness: 0.78, metalness: 0.02 })); bm.castShadow = true; bm.receiveShadow = true; world.group.add(bm);
  const gm = new THREE.Mesh(mergeGeometries(towers.map(buildingGeo)), new THREE.MeshStandardMaterial({ vertexColors: true, map: wg, roughness: 0.22, metalness: 0.55, envMapIntensity: 1.5 })); gm.castShadow = true; gm.receiveShadow = true; world.group.add(gm);
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
      // boundary fence (inside the lot, never on the pavement): the front has a driveway gap and a footpath gap. It is solid.
      { const fc = (x0, x1, z0, z1) => { put(Bx(x1 - x0, 0.9, z1 - z0), (x0 + x1) / 2, 0.7, (z0 + z1) / 2, '#4b4e55'); const p = P(x0, z0), q = P(x1, z1), X0 = Math.min(p.x, q.x), X1 = Math.max(p.x, q.x), Z0 = Math.min(p.z, q.z), Z1 = Math.max(p.z, q.z);
          world.addSolid(X0, 0.2, Z0, X1, 1.15, Z1, { name: 'prop' }); roads.boxes.push({ x0: X0, x1: X1, z0: Z0, z1: Z1, h: 1.15 }); };
        for (const [a, b] of [[-9.9, -5.8], [-0.9, 2.5], [4.3, 9.9]]) fc(a, b, 9.7, 9.9);
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
  // ---- forest on the hills and the mountain
  for (let i = 0, n = 0; i < 4000 && n < 520; i++) {
    const x = (R() - 0.5) * 1000, z = (R() - 0.5) * 1000, h = gtaH(x, z); if (h < 1.2 || h > 30 || Math.max(Math.abs(x), Math.abs(z)) < 300) continue;
    const gx = (gtaH(x + 2, z) - gtaH(x - 2, z)) / 4, gz = (gtaH(x, z + 2) - gtaH(x, z - 2)) / 4; if (Math.hypot(gx, gz) > 0.55) continue;
    if (Math.abs(z) < 24 && x > 230) continue; // keep the highway clear
    let onRoad = false; for (let u = 0; u <= 1; u += 0.02) { const p = mtRoad(u); if (Math.hypot(p.x - x, p.z - z) < 13) { onRoad = true; break; } } if (onRoad) continue;
    plant(x, h, z, 1.2 + R() * 1.2, true); n++;
  }
  // ---- lookout + summit props
  { const M = GT.MT, y = mtC(M.Rt); wm.add(new THREE.CylinderGeometry(0.15, 0.2, 9, 6), M.cx, y + 4.5, M.cz, '#ddd'); world.glow.add(new THREE.BoxGeometry(3.4, 1.8, 0.1), M.cx + 1.7, y + 8, M.cz, '#ff6b9d'); }
  // ---- stunt ramps (orange wedges with white stripes + glowing top edge)
  for (const [rx, rz, yaw, len, hg, w] of RAMPS) {
    const sh = new THREE.Shape(); sh.moveTo(0, 0); sh.lineTo(len, 0); sh.lineTo(len, hg); sh.lineTo(0, 0);
    const g1 = new THREE.ExtrudeGeometry(sh, { depth: w, bevelEnabled: false }); g1.translate(0, 0, -w / 2);
    wm.add(g1, rx, 0.02, rz, '#ff8a00', 0, yaw - Math.PI / 2, 0);
    const n = 5; for (let i = 0; i < n; i++) { const u0 = (i + 0.5) / n * len, hh = hg * u0 / len; const st = new THREE.BoxGeometry(len / n * 0.45, 0.06, w * 0.96); st.rotateZ(Math.atan2(hg, len)); wm.add(st, rx + Math.sin(yaw) * u0, hh + 0.08, rz + Math.cos(yaw) * u0, '#ffffff', 0, yaw - Math.PI / 2, 0); }
    world.glow.add(new THREE.BoxGeometry(0.25, 0.25, w), rx + Math.sin(yaw) * len, hg + 0.12, rz + Math.cos(yaw) * len, '#ffee00', 0, yaw - Math.PI / 2, 0);
  }
  // ---- traffic: real cars (merged, cheap) circling the avenues; they are solid for you and for people on foot
  const traffic = [], tl = info.trafficList = [], tcol = ['#c9c9cf', '#1f3a5f', '#9a2b2b', '#e8e2d0', '#2d5a3d', '#6a6f78', '#d9b34a', '#4a2b5e', '#2b2b30'], tids = [11, 12, 13, 14, 16, 18];
  TRAFFIC.forEach((L, li) => { for (let k = 0; k < L.n; k++) { const i = li * 5 + k, id = tids[i % tids.length], m = buildTrafficMesh(id, id === 14 ? null : tcol[i % tcol.length]); m.rotation.order = 'YXZ'; world.group.add(m); const p = trafficPos(L, k, 0), st = { id, x: p.x, y: 0, z: p.z, yaw: p.yaw, vx: p.vx, vz: p.vz, speed: L.sp, driver: 1000 + i, parked: false, heavy: true, hl: id === 12 ? 1.98 : 2.3, hw: 0.95 }; tl.push(st); traffic.push({ L, k, m, st }); } });
  world.updaters.push((t) => { for (const c of traffic) { const p = trafficPos(c.L, c.k, t), st = c.st; st.x = p.x; st.z = p.z; st.yaw = p.yaw; st.vx = p.vx; st.vz = p.vz; c.m.position.set(p.x, 0, p.z); c.m.rotation.y = p.yaw; } });
}

const FOL = ['#3e6b34', '#4a7c3a', '#56893f', '#3a5f2f', '#668f45', '#4f7a36'];
function tree(batch, x, y, z, s, R, pine = false) {
  const c = FOL[Math.floor(R() * FOL.length)], c2 = FOL[Math.floor(R() * FOL.length)];
  if (pine) { // distant forest: dark pines
    batch.add(new THREE.CylinderGeometry(0.2 * s, 0.3 * s, 1.8 * s, 5), x, y + 0.9 * s, z, '#5a4331');
    batch.add(new THREE.ConeGeometry(1.5 * s, 3.2 * s, 7), x, y + 3.0 * s, z, '#2f5d34'); batch.add(new THREE.ConeGeometry(1.1 * s, 2.5 * s, 7), x, y + 4.5 * s, z, '#2f5d34');
    return;
  }
  // broad-leaf street tree: a tapering trunk and a lumpy crown made of a few overlapping blobs
  batch.add(new THREE.CylinderGeometry(0.2 * s, 0.32 * s, 2.4 * s, 7), x, y + 1.2 * s, z, '#5d4a3a');
  batch.add(new THREE.CylinderGeometry(0.1 * s, 0.17 * s, 1.5 * s, 6), x + 0.35 * s, y + 2.7 * s, z, '#5d4a3a', 0, 0, -0.55);
  batch.add(new THREE.CylinderGeometry(0.1 * s, 0.17 * s, 1.5 * s, 6), x - 0.3 * s, y + 2.8 * s, z + 0.1 * s, '#5d4a3a', 0, 0, 0.5);
  const blob = new THREE.IcosahedronGeometry(1, 1);
  batch.add(blob, x, y + 3.6 * s, z, c, 0, R() * 6, 0, 2.2 * s, 1.55 * s, 2.2 * s);
  batch.add(blob, x + (R() - 0.5) * 1.6 * s, y + 4.3 * s, z + (R() - 0.5) * 1.6 * s, c2, 0, R() * 6, 0, 1.5 * s, 1.2 * s, 1.5 * s);
  batch.add(blob, x + (R() - 0.5) * 2.2 * s, y + 3.1 * s, z + (R() - 0.5) * 2.2 * s, c, 0, R() * 6, 0, 1.3 * s, 1.0 * s, 1.3 * s);
}
