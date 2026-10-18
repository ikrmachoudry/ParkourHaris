// HARIS CITY: builds the 3D city (terrain, roads, buildings, trees, lamps, traffic) and its collision into the World.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { GT, gtaH, gtaBase, RAMPS, gtaRoads, gtaBuildings, gtaCars, mtRoad, mtC, PARKS, TRAFFIC, trafficPos } from './gta.js';

const col = new THREE.Color();
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

function windowTexture() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 64; const g = cv.getContext('2d');
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, 64, 64);
  g.fillStyle = '#7a8aa6'; g.fillRect(14, 12, 36, 40);
  g.fillStyle = '#bfe3ff'; g.fillRect(16, 14, 32, 17);
  g.fillStyle = '#9ccbf0'; g.fillRect(16, 33, 32, 17);
  g.fillStyle = '#ffffff'; g.fillRect(31, 14, 2, 36);
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
      if (s.g === 'link' || i % 2 === 0) {
        // skip dashes at crossings of the grid
        const mx = (x0 + x1) / 2, mz = (z0 + z1) / 2; let skip = false;
        if (s.g[0] === 'x') skip = GT.GRID.some((g) => Math.abs(mz - g) < GT.HW + 1); else if (s.g[0] === 'z') skip = GT.GRID.some((g) => Math.abs(mx - g) < GT.HW + 1);
        if (!skip) ribbon(x0, z0, y0, x1, z1, y1, 0.16, '#ffd84a', 0.11);
      }
    }
  }
  for (const p of roads.plazas) { // round plazas
    const seg = 28; for (let i = 0; i < seg; i++) { const a0 = i / seg * Math.PI * 2, a1 = (i + 1) / seg * Math.PI * 2; quad([p.x, p.y + 0.095, p.z], [p.x + Math.cos(a0) * p.r, p.y + 0.095, p.z + Math.sin(a0) * p.r], [p.x + Math.cos(a1) * p.r, p.y + 0.095, p.z + Math.sin(a1) * p.r], [p.x, p.y + 0.095, p.z], '#464b5a'); }
  }
  void h;
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3)); g.setIndex(idx); g.computeVertexNormals();
  return g;
}

function terrainGeo() {
  const N = 160, S = GT.HALF * 2, step = S / N, pos = new Float32Array((N + 1) * (N + 1) * 3), cs = new Float32Array((N + 1) * (N + 1) * 3), idx = [];
  const R = rng(99), tmp = new THREE.Color();
  for (let j = 0; j <= N; j++) for (let i = 0; i <= N; i++) {
    const x = -GT.HALF + i * step, z = -GT.HALF + j * step, h = gtaBase(x, z), k = (j * (N + 1) + i) * 3;
    pos[k] = x; pos[k + 1] = h; pos[k + 2] = z;
    const gx = (gtaBase(x + 2, z) - gtaBase(x - 2, z)) / 4, gz = (gtaBase(x, z + 2) - gtaBase(x, z - 2)) / 4, slope = Math.hypot(gx, gz), box = Math.max(Math.abs(x), Math.abs(z));
    const city = 1 - smooth(150, 205, box);
    tmp.set(R() < 0.5 ? '#6fc24f' : '#62b947');
    if (h < 0.9 && box > 250) tmp.lerp(col.set('#f0dd9f'), smooth(0.9, 0.2, h) * 0.9 + 0.1);   // beach
    if (h < -0.4) tmp.lerp(col.set('#d8c68a'), 0.8);
    tmp.lerp(col.set('#8d8274'), smooth(0.62, 1.0, slope));                                        // rock on steep ground
    if (h > 33) tmp.lerp(col.set('#ffffff'), smooth(33, 41, h));                                    // snow on the summit
    tmp.lerp(col.set('#aab2bb'), city);                                                             // the city ground is paved
    cs[k] = tmp.r; cs[k + 1] = tmp.g; cs[k + 2] = tmp.b;
  }
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { const a = j * (N + 1) + i, b = a + 1, c = a + N + 1, d = c + 1; idx.push(a, c, b, b, c, d); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.BufferAttribute(cs, 3)); g.setIndex(idx); g.computeVertexNormals();
  return g;
}

export function buildGta(world, th, info, seed) {
  world.waterY = GT.SEA; world.killY = -2.6;
  world.terrain = gtaH;
  const roads = gtaRoads(); info.track = roads; info.cars = gtaCars();
  roads.terrain = gtaH;   // cars drive anywhere: they follow the ground, jump off ramps, bounce off buildings info.spawn = { x: 4, y: 0, z: 9 };
  info.finishZ = -99999; info.finishY = 99999;
  const B = gtaBuildings();
  // ---- collision: blocks (a low kerb), buildings, the park fountains
  for (const bx of [-90, -30, 30, 90]) for (const bz of [-90, -30, 30, 90]) world.addSolid(bx - 23.5, 0, bz - 23.5, bx + 23.5, 0.2, bz + 23.5, { name: 'block' });
  for (const b of B) world.addSolid(b.x - b.w / 2, 0, b.z - b.d / 2, b.x + b.w / 2, b.h, b.z + b.d / 2, { name: 'building' });
  for (const [px, pz] of PARKS) world.addSolid(px - 2.6, 0.2, pz - 2.6, px + 2.6, 1.2, pz + 2.6, { name: 'fountain' });
  roads.boxes = [...B.map((b) => ({ x0: b.x - b.w / 2, x1: b.x + b.w / 2, z0: b.z - b.d / 2, z1: b.z + b.d / 2, h: b.h })), ...PARKS.map(([px, pz]) => ({ x0: px - 2.6, x1: px + 2.6, z0: pz - 2.6, z1: pz + 2.6, h: 1.2 }))];
  info.gta = { buildings: B, roads };
  if (world.headless) return;

  // ---- ground
  const tm = new THREE.Mesh(terrainGeo(), new THREE.MeshLambertMaterial({ vertexColors: true })); tm.receiveShadow = true; world.group.add(tm);
  const rm = new THREE.Mesh(roadGeo(roads), new THREE.MeshLambertMaterial({ vertexColors: true })); rm.receiveShadow = true; world.group.add(rm);
  // ---- buildings (windows) + roofs / awnings
  const wt = windowTexture(), geos = B.map(buildingGeo);
  const bm = new THREE.Mesh(mergeGeometries(geos), new THREE.MeshLambertMaterial({ vertexColors: true, map: wt })); bm.castShadow = true; bm.receiveShadow = true; world.group.add(bm);
  const wm = world.main, R = rng(seed || 7), kerb = '#d9dde2';
  for (const bx of [-90, -30, 30, 90]) for (const bz of [-90, -30, 30, 90]) {
    const park = PARKS.some((p) => p[0] === bx && p[1] === bz);
    wm.add(world.rbox(47, 0.2, 47, 0.05), bx, 0.1, bz, park ? '#7ccf5b' : kerb);
  }
  for (const b of B) {
    wm.add(world.rbox(b.w + 0.8, 0.5, b.d + 0.8, 0.1), b.x, b.h + 0.25, b.z, '#4a4f5e');                 // roof slab
    wm.add(world.rbox(b.w + 0.9, 0.4, b.d + 0.9, 0.08), b.x, 3.7, b.z, ['#e63946', '#2a9d8f', '#f4a261', '#457b9d'][Math.floor(R() * 4)]);   // shop awning band
    if (b.h > 14) { wm.add(world.rbox(3, 1.6, 3, 0.2), b.x + (R() - 0.5) * b.w * 0.4, b.h + 1.3, b.z + (R() - 0.5) * b.d * 0.4, '#9aa3ad'); }
    if (b.tower) { wm.add(new THREE.CylinderGeometry(0.25, 0.4, 24, 6), b.x, b.h + 12, b.z, '#c9d1d9'); world.glow.add(new THREE.SphereGeometry(0.9, 8, 6), b.x, b.h + 24, b.z, '#ff3b3b'); wm.add(world.rbox(b.w * 0.6, 8, b.d * 0.6, 0.3), b.x, b.h + 4, b.z, '#6ea5d6'); }
  }
  // ---- parks: fountain + trees + benches
  for (const [px, pz] of PARKS) {
    wm.add(new THREE.CylinderGeometry(2.6, 2.8, 1.0, 14), px, 0.7, pz, '#b8c2cc'); wm.add(new THREE.CylinderGeometry(2.0, 2.0, 0.2, 14), px, 1.22, pz, '#5ec8f0'); wm.add(new THREE.CylinderGeometry(0.3, 0.4, 2.4, 8), px, 2.2, pz, '#b8c2cc'); world.glow.add(new THREE.SphereGeometry(0.7, 8, 6), px, 3.6, pz, '#bff0ff');
    for (let i = 0; i < 16; i++) { const x = px + (R() - 0.5) * 42, z = pz + (R() - 0.5) * 42; if (Math.hypot(x - px, z - pz) < 6) continue; tree(wm, x, 0.2, z, 0.9 + R() * 0.7, R); }
    for (const a of [0, 1, 2, 3]) { const x = px + Math.cos(a * 1.57) * 8, z = pz + Math.sin(a * 1.57) * 8; wm.add(world.rbox(2.4, 0.3, 0.8, 0.05), x, 0.55, z, '#8a5a34'); wm.add(world.rbox(2.4, 0.6, 0.15, 0.03), x, 0.9, z + 0.35, '#8a5a34'); }
  }
  // ---- street trees + lamps along every avenue
  for (const g of GT.GRID) for (const side of [-1, 1]) for (let t = -112; t <= 112; t += 14) {
    if (GT.GRID.some((q) => Math.abs(t - q) < 10)) continue;
    const o = side * (GT.HW + 2.2), lamp = ((t + 112) / 14) % 2 === 0;
    for (const [x, z] of [[g + o, t], [t, g + o]]) { if (lamp) { wm.add(new THREE.CylinderGeometry(0.12, 0.16, 6, 6), x, 3.2, z, '#59606b'); world.glow.add(new THREE.SphereGeometry(0.42, 8, 6), x, 6.4, z, '#fff3b0'); } else tree(wm, x, 0.2, z, 0.8 + R() * 0.3, R); }
  }
  // ---- forest on the hills and the mountain
  for (let i = 0, n = 0; i < 2600 && n < 380; i++) {
    const x = (R() - 0.5) * 700, z = (R() - 0.5) * 700, h = gtaH(x, z); if (h < 1.2 || h > 30 || Math.max(Math.abs(x), Math.abs(z)) < 160) continue;
    const gx = (gtaH(x + 2, z) - gtaH(x - 2, z)) / 4, gz = (gtaH(x, z + 2) - gtaH(x, z - 2)) / 4; if (Math.hypot(gx, gz) > 0.55) continue;
    if (Math.abs(z) < 24 && x > 100) continue; // keep the highway clear
    let onRoad = false; for (let u = 0; u <= 1; u += 0.02) { const p = mtRoad(u); if (Math.hypot(p.x - x, p.z - z) < 13) { onRoad = true; break; } } if (onRoad) continue;
    tree(wm, x, h, z, 1.2 + R() * 1.2, R); n++;
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
  // ---- traffic: cars drive round the avenues all day (they are scenery; they never hit you)
  const traffic = [];
  TRAFFIC.forEach((L, li) => { for (let k = 0; k < L.n; k++) { const m = trafficCar(TCOL[(li * 3 + k) % TCOL.length]); world.group.add(m); traffic.push({ L, k, m }); } });
  world.updaters.push((t) => { for (const c of traffic) { const p = trafficPos(c.L, c.k, t); c.m.position.set(p.x, 0, p.z); c.m.rotation.y = p.yaw; } });
}

const TCOL = ['#e63946', '#2a9d8f', '#f4a261', '#457b9d', '#ffd23f', '#9b5de5', '#f1f1f1', '#2b2d42'];
let TG = null;
function trafficCar(color) { // cheap cartoon car (about 80 triangles) - the traffic is only scenery
  if (!TG) TG = { body: new THREE.BoxGeometry(1.9, 0.7, 4.2), cab: new THREE.BoxGeometry(1.6, 0.6, 2.0), wh: new THREE.CylinderGeometry(0.42, 0.42, 0.3, 8).rotateZ(Math.PI / 2), wm: new THREE.MeshLambertMaterial({ color: '#222' }), gm: new THREE.MeshLambertMaterial({ color: '#bfe3ff' }) };
  const g = new THREE.Group(), body = new THREE.Mesh(TG.body, new THREE.MeshLambertMaterial({ color })), cab = new THREE.Mesh(TG.cab, TG.gm);
  body.position.y = 0.75; cab.position.set(0, 1.3, -0.2); body.castShadow = true; g.add(body, cab);
  for (const [x, z] of [[0.95, 1.3], [-0.95, 1.3], [0.95, -1.3], [-0.95, -1.3]]) { const w = new THREE.Mesh(TG.wh, TG.wm); w.position.set(x, 0.42, z); g.add(w); }
  return g;
}
function tree(batch, x, y, z, s, R) {
  const c = ['#2f9e44', '#3bb54f', '#2b8a3e'][Math.floor(R() * 3)];
  batch.add(new THREE.CylinderGeometry(0.2 * s, 0.3 * s, 1.8 * s, 5), x, y + 0.9 * s, z, '#7a5230');
  batch.add(new THREE.ConeGeometry(1.5 * s, 3.2 * s, 6), x, y + 3.0 * s, z, c);
  batch.add(new THREE.ConeGeometry(1.1 * s, 2.5 * s, 6), x, y + 4.5 * s, z, c);
}
