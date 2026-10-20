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
import { buildBus, BUS } from './hbus.js';
import { buildF1, F1 } from './hf1.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const camPos = new THREE.Vector3(1e6, 0, 0);
export const setCityCamera = (p) => camPos.copy(p);

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
let blobTex = null;
function blob() {
  if (!blobTex) { const cv = document.createElement('canvas'); cv.width = cv.height = 64; const g = cv.getContext('2d'), gr = g.createRadialGradient(32, 32, 4, 32, 32, 32); gr.addColorStop(0, 'rgba(0,0,0,0.55)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); blobTex = new THREE.CanvasTexture(cv); }
  return blobTex;
}

// freeze a finished hero car (doors shut, wheels at rest) into a handful of merged meshes: far-away cars cost ~11 draw calls instead of ~70
function bakeCar(root) {
  root.updateMatrixWorld(true);
  const groups = new Map();
  root.traverse((o) => {
    if (!o.isMesh) return; const m = o.material;
    const key = [m.type, m.color ? m.color.getHex() : 0, m.opacity, m.side, m.emissiveIntensity, m.transparent].join('|');
    let g = groups.get(key); if (!g) { g = { m, geos: [] }; groups.set(key, g); }
    let geo = o.geometry.clone(); if (geo.index) geo = geo.toNonIndexed(); geo.applyMatrix4(o.matrixWorld); g.geos.push(geo);
  });
  const out = new THREE.Group();
  for (const g of groups.values()) {
    const geo = mergeGeometries(g.geos, false); if (!geo) continue;
    const mesh = new THREE.Mesh(geo, g.m); mesh.castShadow = true; mesh.receiveShadow = !g.m.transparent; if (g.m.transparent) mesh.renderOrder = 5; out.add(mesh);
  }
  return out;
}

// a motorbike: same shape of userData as a car, plus bike:true (the rider straddles it and it leans into turns)
function buildBikeMesh(spec, lo, bakedOnly) {
  const K = BIKE_KINDS[spec.kind], opts = { kind: spec.kind, paint: spec.paint };
  const full = bakedOnly ? null : buildHeroBike({ ...opts, detail: lo ? 'lo' : 'hi' });
  const baked = bakeCar(buildHeroBike({ ...opts, detail: 'lo' }).group);
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

const MODELS = { rick: [buildRickshaw, RICK, 0.62, 0.92, 0], tractor: [buildTractor, TRACTOR, 0.8, 0.96, 0], truck: [buildTruck, TRUCK, 1.3, 1, TRUCK.seatR], bus: [buildBus, BUS, 1.4, 1, BUS.seatR], f1: [buildF1, F1, 0.5, 0.85, 0] };   // builder, size, seat height of the rider's origin, rider scale, seat offset to the right
function buildRickMesh(spec, lo, bakedOnly) {
  const [build, RICK, seatY, seatS, seatR] = MODELS[spec.model];
  const full = bakedOnly ? null : build({ paint: spec.paint, detail: lo ? 'lo' : 'hi' });
  const bk = build({ paint: spec.paint, detail: 'lo' }), baked = bakeCar(bk.group);
  const g = new THREE.Group(), rot = new THREE.Group();
  rot.rotation.y = -Math.PI / 2; if (full) rot.add(full.group); rot.add(baked); g.add(rot); baked.visible = !!bakedOnly;
  const sh = new THREE.Mesh(new THREE.PlaneGeometry(RICK.L * 1.25, RICK.w * 2.6), new THREE.MeshBasicMaterial({ map: blob(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
  sh.rotation.x = -Math.PI / 2; sh.rotation.z = Math.PI / 2; sh.position.y = 0.03; g.add(sh);
  g.userData = {
    hero: full || bk, spec, baked, bakedOnly, full: full ? full.group : baked, wheels: [], pivots: [], seat: { z: RICK.seatX, y: 0.8 },
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
  const baked = bakeCar((loCar || buildHeroCar({ ...opts, detail: 'lo' })).group);   // before it is parented: positions stay in car space
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
  { // level of detail: the full animated car near the camera or when somebody is inside, the merged baked copy far away
    const dx = mesh.position.x - camPos.x, dz = mesh.position.z - camPos.z, d2 = dx * dx + dz * dz;
    const near = !u.bakedOnly && (st.driver !== -1 || d2 < (u.near ? 26 * 26 : 19 * 19));
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
  return m;
}

// burnt-out wreck: paint turns to soot on both the animated and the baked copy; restoreCar brings the paint back
const _paintMats = (mesh) => { const out = []; mesh.traverse((o) => { if (o.isMesh && o.material && o.material.type === 'MeshPhysicalMaterial' && out.indexOf(o.material) < 0) out.push(o.material); }); return out; };
export function charCar(mesh) { const u = mesh.userData; if (u.charred) return; u.charred = true; for (const m of _paintMats(mesh)) { m.userData.c0 = m.color.getHex(); m.color.set('#17140f'); m.roughness = 0.95; m.metalness = 0.1; m.clearcoat = 0; } }
export function restoreCar(mesh) { const u = mesh.userData; if (!u.charred) return; u.charred = false; for (const m of _paintMats(mesh)) { if (m.userData.c0 !== undefined) m.color.setHex(m.userData.c0); m.roughness = 0.34; m.metalness = 0.55; m.clearcoat = 1; } }
