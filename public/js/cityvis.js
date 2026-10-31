// Visual side of the city vehicles: wraps a procedural hero car (hcar.js) so it behaves like the old arcade car meshes
// (position + yaw on the outer group, userData.seat for the driver) and adds suspension roll / pitch, wheel spin, door animation.
import { syncDamage, applySag } from './cardamage.js';
import * as THREE from 'three';
import { buildHeroCar, CAR_STYLES } from './hcar.js';
import { buildHeroBike, BIKE_KINDS } from './hbike.js';
import { cityVeh } from './cityveh.js';
import { buildRickshaw, RICK } from './hrick.js';
import { buildTractor, TRACTOR } from './htractor.js';
import { buildTruck, TRUCK } from './htruck.js';
import { buildJeep, JEEP } from './hjeep.js';
import { buildCivic, CIVIC } from './hcivic.js';
import { buildBus, BUS } from './hbus.js';
import { buildBoat, BOATS } from './hboat.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const camPos = new THREE.Vector3(1e6, 0, 0);
export const setCityCamera = (p) => camPos.copy(p);
export const CULL = { far: 280 };   // vehicles further than this (m) from the camera are not drawn at all (fog hides them anyway); set by the quality level
export const farCar = (x, z) => { const dx = x - camPos.x, dz = z - camPos.z; return dx * dx + dz * dz > CULL.far * CULL.far; };

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
let blobTex = null;
function blob() {
  if (!blobTex) { const cv = document.createElement('canvas'); cv.width = cv.height = 64; const g = cv.getContext('2d'), gr = g.createRadialGradient(32, 32, 4, 32, 32, 32); gr.addColorStop(0, 'rgba(0,0,0,0.55)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); blobTex = new THREE.CanvasTexture(cv); }
  return blobTex;
}

// freeze a finished hero car (doors shut, wheels at rest) into a handful of merged meshes: far-away cars cost ~11 draw calls instead of ~70
function bakeCar(root, keep = []) {
  root.updateMatrixWorld(true);
  const groups = new Map(), flat = { metal: [], matte: [], mid: [] };   // flat: plain opaque parts of every colour, merged into ONE vertex-coloured mesh (far cars cost ~5 draw calls instead of ~13)
  root.traverse((o) => {
    if (!o.isMesh) return; const m = o.material;
    let geo = o.geometry.clone(); if (geo.index) geo = geo.toNonIndexed(); geo.applyMatrix4(o.matrixWorld);
    if ((m.isMeshStandardMaterial || m.isMeshPhysicalMaterial) && !m.transparent && !(m.emissive && m.emissive.getHex() !== 0) && !keep.includes(m) && !m.map) {
      for (const k of Object.keys(geo.attributes)) if (k !== 'position' && k !== 'normal') geo.deleteAttribute(k);
      if (!geo.attributes.normal) geo.computeVertexNormals();
      const n = geo.attributes.position.count, arr = new Float32Array(n * 3), src = m.vertexColors ? geo.attributes.color : null;
      for (let i = 0; i < n; i++) { const k = i * 3; arr[k] = m.color.r * (src ? src.getX(i) : 1); arr[k + 1] = m.color.g * (src ? src.getY(i) : 1); arr[k + 2] = m.color.b * (src ? src.getZ(i) : 1); }
      if (m.vertexColors && !src) { /* no colours stored: plain material colour */ }
      geo.setAttribute('color', new THREE.BufferAttribute(arr, 3)); flat[m.metalness >= 0.5 ? 'metal' : m.roughness >= 0.7 ? 'matte' : 'mid'].push(geo); return;
    }
    const key = [m.type, m.color ? m.color.getHex() : 0, m.opacity, m.side, m.emissiveIntensity, m.transparent].join('|');
    let g = groups.get(key); if (!g) { g = { m, geos: [] }; groups.set(key, g); } g.geos.push(geo);
  });
  const out = new THREE.Group();
  for (const g of groups.values()) {
    const geo = mergeGeometries(g.geos, false); if (!geo) continue;
    const mesh = new THREE.Mesh(geo, g.m); mesh.castShadow = true; mesh.receiveShadow = !g.m.transparent; if (g.m.transparent) mesh.renderOrder = 5; out.add(mesh);
  }
  for (const k of ['metal', 'matte', 'mid']) if (flat[k].length) { const geo = mergeGeometries(flat[k], false); if (geo) { const mesh = new THREE.Mesh(geo, FLAT_MATS[k]); mesh.castShadow = true; mesh.receiveShadow = true; out.add(mesh); } }
  return out;
}
const FLAT_MATS = { metal: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.28, metalness: 0.85 }), matte: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0 }), mid: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0.15 }) };

// a motorbike: same shape of userData as a car, plus bike:true (the rider straddles it and it leans into turns)
function buildBikeMesh(spec, lo, bakedOnly) {
  const K = BIKE_KINDS[spec.kind], opts = { kind: spec.kind, paint: spec.paint };
  const full = bakedOnly ? null : buildHeroBike({ ...opts, detail: lo ? 'lo' : 'hi' });
  const bkB = buildHeroBike({ ...opts, detail: 'lo' }), baked = bakeCar(bkB.group, [(bkB.mats || {}).paint]);
  const g = new THREE.Group(), rot = new THREE.Group();
  rot.rotation.y = -Math.PI / 2; if (full) rot.add(full.group); rot.add(baked); g.add(rot); baked.visible = !!bakedOnly;
  const sh = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.1), new THREE.MeshBasicMaterial({ map: blob(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
  sh.rotation.x = -Math.PI / 2; sh.rotation.z = Math.PI / 2; sh.position.y = 0.03; g.add(sh);
  g.userData = {
    hero: full || { dent() {}, hurtLook() {}, repair() {}, setColor() {}, mats: {} }, spec, baked, bakedOnly, full: full ? full.group : baked, wheels: [], pivots: [], bike: true, kind: spec.kind,
    seat: { z: -0.3, y: K.seatY }, seatF: -0.3, seatR: 0, seatY: K.seatY - 0.23, seatS: 1, lamp: null, grips: full ? full.grips : [],
    ph: 0, door: 0, doorT: 9, lastDrv: -1, roll: 0, pit: 0, yawP: null, yr: 0,
  };
  return g;
}

const MODELS = { rick: [buildRickshaw, RICK, 0.62, 0.92, 0], tractor: [buildTractor, TRACTOR, 0.8, 0.96, 0], truck: [buildTruck, TRUCK, 1.3, 1, TRUCK.seatR], bus: [buildBus, BUS, 1.4, 1, BUS.seatR], jeep: [buildJeep, JEEP, 0.78, 1, JEEP.seatR], civic: [buildCivic, CIVIC, 0.62, 0.86, CIVIC.seatR],
  speedboat: [(o) => buildBoat({ ...o, hull: 'speedboat' }), BOATS.speedboat, BOATS.speedboat.seatTop - 0.15, 1, BOATS.speedboat.seatR], fishboat: [(o) => buildBoat({ ...o, hull: 'fishboat' }), BOATS.fishboat, BOATS.fishboat.seatTop - 0.15, 1, BOATS.fishboat.seatR], yacht: [(o) => buildBoat({ ...o, hull: 'yacht' }), BOATS.yacht, BOATS.yacht.seatTop - 0.15, 1, BOATS.yacht.seatR] };   // builder, size, seat height of the rider's origin, rider scale, seat offset to the right
function buildRickMesh(spec, lo, bakedOnly) {
  const [build, RICK, seatY, seatS, seatR] = MODELS[spec.model];
  const isC = spec.model === 'civic';   // v269: the GLB Civic has no merged distance copy: the full model is always shown
  const full = bakedOnly && !isC ? null : build({ paint: spec.paint, detail: lo ? 'lo' : 'hi' });
  const bk = isC ? full : build({ paint: spec.paint, detail: 'lo' }), baked = isC ? new THREE.Group() : bakeCar(bk.group, [(bk.mats || {}).paint]);
  const g = new THREE.Group(), rot = new THREE.Group();
  rot.rotation.y = -Math.PI / 2; if (full) rot.add(full.group); rot.add(baked); g.add(rot); baked.visible = !!bakedOnly && !isC;
  const sh = new THREE.Mesh(new THREE.PlaneGeometry(RICK.L * 1.25, RICK.w * 2.6), new THREE.MeshBasicMaterial({ map: blob(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
  sh.rotation.x = -Math.PI / 2; sh.rotation.z = Math.PI / 2; sh.position.y = 0.03; sh.visible = !spec.boat; g.add(sh);
  g.userData = {
    hero: full || bk, spec, baked, bakedOnly: bakedOnly && !isC, keepFull: isC, full: full ? full.group : baked, wheels: [], pivots: [], seat: { z: RICK.seatX, y: 0.8 },
    seatF: RICK.seatX, seatR, seatY, seatS, lamp: null,
    ph: 0, door: 0, doorT: 9, lastDrv: -1, roll: 0, pit: 0, yawP: null, yr: 0,
  };
  return g;
}

export function buildCityMesh(id, lo = false, bakedOnly = false) {
  if (cityVeh(id).kind) return buildBikeMesh(cityVeh(id), lo, bakedOnly);
  if (cityVeh(id).model) return buildRickMesh(cityVeh(id), lo, bakedOnly);
  const spec = cityVeh(id), sp = CAR_STYLES[spec.style];
  const opts = { style: spec.style, paint: spec.paint, extra: spec.extra };
  const loCar = (lo || bakedOnly) ? buildHeroCar({ ...opts, detail: 'lo' }) : null;       // cheap copy for distance
  const car = loCar && (lo || bakedOnly) ? loCar : buildHeroCar({ ...opts, detail: 'hi' });
  const g = new THREE.Group(), tilt = new THREE.Group(), rot = new THREE.Group();
  const bkC = loCar || buildHeroCar({ ...opts, detail: 'lo' }), baked = bakeCar(bkC.group, [(bkC.mats || {}).paint]);   // before it is parented: positions stay in car space
  rot.rotation.y = -Math.PI / 2; if (bakedOnly) rot.add(baked); else rot.add(car.group, baked); g.add(rot); baked.visible = bakedOnly;   // car space +x (nose) -> world forward (+z of the outer group)
  void tilt;
  const sh = new THREE.Mesh(new THREE.PlaneGeometry(sp.L * 1.25, sp.w * 3.1), new THREE.MeshBasicMaterial({ map: blob(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
  sh.rotation.x = -Math.PI / 2; sh.rotation.z = Math.PI / 2; sh.position.y = 0.03; g.add(sh);
  const fy = sp.yb - 0.27 - (sp.twoDoor ? 0.07 : 0);
  g.userData = {
    hero: car, spec, baked, bakedOnly, full: car.group, wheels: [], pivots: [], seat: { z: sp.seatX[0], y: 0.13 + fy },
    seatF: sp.seatX[0], seatR: 0.38, seatY: 0.14 + fy, seatS: Math.max(0.8, Math.min(1, (Math.max(...sp.prof.map((q) => q[1])) - 0.07 - (0.14 + fy)) / 1.2)), lamp: car.lamp,
    ph: 0, door: 0, doorT: 9, lastDrv: -1, roll: 0, pit: 0, yawP: null, yr: 0,
  };
  return g;
}

// per-frame: wheels, steering, body roll / pitch, driver door
export function animateCityMesh(mesh, st, dt) {
  const u = mesh.userData, car = u.hero, spec = u.spec;
  const sag = (st.dmg || u.dmKey) ? syncDamage(mesh, st) : null;   // bullet holes, cracked glass, flat tyres
  if (st.driver === -1 && farCar(mesh.position.x, mesh.position.z)) { if (mesh.visible) { mesh.visible = false; u.farHid = true; } return; } if (u.farHid) { mesh.visible = true; u.farHid = false; }
  { // level of detail: the full animated car near the camera or when somebody is inside, the merged baked copy far away
    const dx = mesh.position.x - camPos.x, dz = mesh.position.z - camPos.z, d2 = dx * dx + dz * dz;
    const near = u.keepFull || !u.bakedOnly && (st.driver !== -1 || d2 < (u.near ? 26 * 26 : 19 * 19));
    if (near !== !!u.near || u.near === undefined) { u.near = near; u.full.visible = near; u.baked.visible = !near; }
    if (!near) { mesh.rotation.z = 0; mesh.rotation.x = -(st.pitch || 0); applySag(mesh, sag); return; }
  }
  const spd = st.speed || 0;
  // yaw rate (remote cars have none): from the change of heading
  let yaw = st.yaw; if (u.yawP === null) u.yawP = yaw;
  let dy = ((yaw - u.yawP + Math.PI * 3) % (Math.PI * 2)) - Math.PI; u.yawP = yaw;
  const yr = st.ownd ? st.yr : dy / Math.max(dt, 1e-3);
  u.yr += (clamp(yr, -3, 3) - u.yr) * Math.min(1, dt * 8);
  const ay = st.ownd ? st.ay : spd * u.yr;                // lateral accel, left-positive
  const ax = st.ownd ? st.ax : ((spd - (u.sp || spd)) / Math.max(dt, 1e-3));
  u.sp = spd;
  u.ph += (spd / 0.34) * dt; car.spin(u.ph);
  if (u.bike) {   // bikes lean INTO the turn (about the line where the tyres touch the road)
    car.steer(-(st.steer || 0) * Math.min(0.5, 14 / Math.max(1, spd * spd) + 0.04));
    u.roll += (clamp(-ay * 0.085 + (st.steer || 0) * Math.min(1, Math.abs(spd) / 8) * 0.12, -0.62, 0.62) - u.roll) * Math.min(1, dt * 7);
    u.pit += (clamp(-ax * 0.006, -0.12, 0.1) - u.pit) * Math.min(1, dt * 7);
    mesh.rotation.z = u.roll; mesh.rotation.x = -(st.pitch || 0) + u.pit; return;
  }
  const dMax = Math.min(0.58, 26 / Math.max(1, spd * spd));
  car.steer(-(st.steer || 0) * dMax);
  u.roll += (clamp(ay * 0.0065, -0.075, 0.075) - u.roll) * Math.min(1, dt * 9);
  u.pit += (clamp(-ax * 0.0042, -0.05, 0.05) - u.pit) * Math.min(1, dt * 9);
  mesh.rotation.z = u.roll; mesh.rotation.x = -(st.pitch || 0) + u.pit; applySag(mesh, sag);
  // doors: driver door swings open when somebody gets in / out, then shuts
  if (st.driver !== u.lastDrv) { u.lastDrv = st.driver; u.doorT = 0; }
  u.doorT += dt;
  const t = u.doorT, k = t < 0.35 ? t / 0.35 : t < 1.5 ? 1 : t < 2.0 ? 1 - (t - 1.5) / 0.5 : 0;
  const e = k * k * (3 - 2 * k);
  if (e !== u.door) { u.door = e; car.setDoor(0, e); }
  if (car.police) car.police.on = st.driver !== -1 || st.siren !== false;
}

// traffic: only the cheap baked copy (never animated) in its own colour
export function buildTrafficMesh(id, paint) {
  const m = buildCityMesh(id, true, true);
  if (paint) m.userData.hero.setColor(paint);
  if (!m.userData.bike && !m.userData.spec.boat) addDriver(m, id);
  return m;
}

// a small, cheap, STATIC driver (hips, torso, arms to the wheel, head) sitting exactly where the hero seat is: scaled so the head stays under the roof, nothing pokes out of the floor or the sides
const _drvGeo = []; const _drvMat = {};
function driverGeo() {
  if (_drvGeo[0]) return _drvGeo[0];
  const parts = [[0.4, 0.14, 0.46, 0, 0.07, 0.2, 0], [0.42, 0.52, 0.24, 0, 0.4, -0.02, 1], [0.11, 0.11, 0.5, -0.2, 0.42, 0.24, 1], [0.11, 0.11, 0.5, 0.2, 0.42, 0.24, 1], [0.15, 0.18, 0.15, 0, 0.7, -0.01, 2], [0.2, 0.22, 0.22, 0, 0.84, 0, 2]];
  const pos = [], idx = [], grp = [[], [], []];
  const g = new THREE.BufferGeometry(), arr = [], ind = []; let vo = 0; const starts = [];
  const cols = [];
  for (const [w, h, d, x, y, z, k] of parts) {
    const b = new THREE.BoxGeometry(w, h, d); b.translate(x, y, z); const pa = b.attributes.position, ia = b.index.array;
    for (let i = 0; i < pa.count; i++) { arr.push(pa.getX(i), pa.getY(i), pa.getZ(i)); cols.push(k); }
    for (let i = 0; i < ia.length; i++) ind.push(ia[i] + vo); vo += pa.count; b.dispose();
  }
  void pos; void idx; void grp; void starts;
  g.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3)); g.setIndex(ind); g.computeVertexNormals();
  // vertex colour: 0 trousers, 1 shirt, 2 skin
  const C = [new THREE.Color('#2a2f3a'), null, new THREE.Color('#b98462')], out = [];
  _drvGeo[0] = { g, cols, C, out };
  return _drvGeo[0];
}
function addDriver(m, id) {
  const u = m.userData, D = driverGeo(), shirt = ['#b8b8b0', '#3a5f8a', '#8a3a3a', '#d8c9a0', '#3f7a4f', '#7a5a9a'][id % 6], skin = ['#b98462', '#8d5a3b', '#e0ac85', '#6b4429'][id % 4];
  const key = shirt + skin;
  if (!_drvMat[key]) { const geo = D.g.clone(), col = []; for (const k of D.cols) { const c = k === 0 ? D.C[0] : k === 1 ? new THREE.Color(shirt) : new THREE.Color(skin); col.push(c.r, c.g, c.b); } geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); _drvMat[key] = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ vertexColors: true })); }
  const d = _drvMat[key].clone(); d.position.set(-(u.seatR || 0), u.seatY, u.seatF || 0); d.scale.setScalar((u.seatS || 1) * 0.92); d.matrixAutoUpdate = true;
  m.add(d); u.drv = d;
}

// burnt-out wreck: paint turns to soot on both the animated and the baked copy; restoreCar brings the paint back
const _paintMats = (mesh) => { const out = []; mesh.traverse((o) => { if (o.isMesh && o.material && o.material.type === 'MeshPhysicalMaterial' && out.indexOf(o.material) < 0) out.push(o.material); }); return out; };
export function charCar(mesh) { const u = mesh.userData; if (u.charred) return; u.charred = true; try { u.hero && u.hero.hurtLook && u.hero.hurtLook(0, true); } catch (e) { /* noop */ } for (const m of _paintMats(mesh)) { m.userData.c0 = m.color.getHex(); m.color.set('#17140f'); m.roughness = 0.95; m.metalness = 0.1; m.clearcoat = 0; } }
export function restoreCar(mesh) { const u = mesh.userData; if (!u.charred) return; u.charred = false; try { u.hero && u.hero.repair && u.hero.repair(); } catch (e) { /* noop */ } for (const m of _paintMats(mesh)) { if (m.userData.c0 !== undefined) m.color.setHex(m.userData.c0); m.roughness = 0.34; m.metalness = 0.55; m.clearcoat = 1; } }
