// Haris City motorbikes: a procedural rigged bike (frame, tank, engine, exhaust, raked fork with steering, spinning wheels).
// Same interface as buildHeroCar (group / steer / spin / setColor / repair ...) so the city vehicle code treats it like a car.
// Car space: +x = nose, +y = up, +z = right.  Everything is merged per material, so a bike costs only ~12 draw calls.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// wr = wheel radius, headY = steering head height, rake = fork angle (rad), seatY = top of the seat
export const BIKE_KINDS = {
  sport:   { wr: 0.33, tw: 0.085, headY: 0.96, rake: 0.42, seatY: 0.80, tank: [0.60, 0.25, 0.30], fair: true,  bar: 'clip', tail: 1, chrome: false, fender: 0 },
  cruiser: { wr: 0.34, tw: 0.11,  headY: 1.00, rake: 0.58, seatY: 0.70, tank: [0.56, 0.30, 0.36], fair: false, bar: 'wide', tail: 0, chrome: true,  fender: 0 },
  dirt:    { wr: 0.38, tw: 0.07,  headY: 1.12, rake: 0.36, seatY: 0.93, tank: [0.46, 0.24, 0.26], fair: false, bar: 'high', tail: 1, chrome: false, fender: 1 },
};
const REAR_X = -0.70;
export const bikeWheelbase = (kind) => { const K = BIKE_KINDS[kind]; return 0.46 + Math.sin(K.rake) * (K.headY - K.wr) / Math.cos(K.rake) - REAR_X; };

const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3();
const xf = (g, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) => { _e.set(rx, ry, rz); _q.setFromEuler(_e); _m.compose(_p.set(x, y, z), _q, _s.set(sx, sy, sz)); g.applyMatrix4(_m); return g; };
const ng = (g) => { const o = g.index ? g.toNonIndexed() : g; o.deleteAttribute('uv'); return o; };
const rbox = (w, h, d, r = 0.03) => new RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2 - 0.001, h / 2 - 0.001, d / 2 - 0.001));

export function buildHeroBike(opts = {}) {
  const { kind = 'sport', paint = '#d4141c', detail = 'hi' } = opts, K = BIKE_KINDS[kind] || BIKE_KINDS.sport, hi = detail !== 'lo';
  const mats = {
    paint: new THREE.MeshPhysicalMaterial({ color: paint, metalness: 0.5, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.06, envMapIntensity: 1.2 }),
    dark: new THREE.MeshStandardMaterial({ color: '#1a1b20', roughness: 0.65, metalness: 0.45 }),
    chrome: new THREE.MeshStandardMaterial({ color: '#d8dce2', roughness: 0.18, metalness: 1, envMapIntensity: 1.4 }),
    seat: new THREE.MeshStandardMaterial({ color: '#17171a', roughness: 0.9 }),
    head: new THREE.MeshStandardMaterial({ color: '#fff6dc', emissive: '#ffefc2', emissiveIntensity: 0.7, roughness: 0.15 }),
    tail: new THREE.MeshStandardMaterial({ color: '#8a0707', emissive: '#e01010', emissiveIntensity: 1.0, roughness: 0.25 }),
    tire: new THREE.MeshStandardMaterial({ color: '#0c0c0d', roughness: 0.92 }),
    rim: new THREE.MeshStandardMaterial({ color: '#c7cbd2', roughness: 0.22, metalness: 1, envMapIntensity: 1.3 }),
    glass: new THREE.MeshStandardMaterial({ color: '#0e1822', roughness: 0.04, metalness: 0.85, transparent: true, opacity: 0.5, depthWrite: false }),
  };
  const group = new THREE.Group();
  const merged = (acc) => { const g = new THREE.Group(); for (const k in acc) if (acc[k].length) { const m = new THREE.Mesh(mergeGeometries(acc[k], false), mats[k]); m.castShadow = true; if (k === 'glass') m.renderOrder = 6; g.add(m); } return g; };
  const mkAcc = () => ({ paint: [], dark: [], chrome: [], seat: [], head: [], tail: [], glass: [] });
  const bar = (acc, key, x1, y1, x2, y2, z, t = 0.035) => { const L = Math.hypot(x2 - x1, y2 - y1); acc[key].push(xf(ng(new THREE.BoxGeometry(L, t, t)), (x1 + x2) / 2, (y1 + y2) / 2, z, 0, 0, Math.atan2(y2 - y1, x2 - x1))); };
  const cyl = (acc, key, r, len, x, y, z, rx, ry, rz, seg = 10) => acc[key].push(xf(ng(new THREE.CylinderGeometry(r, r, len, hi ? seg : 6)), x, y, z, rx, ry, rz));
  const box = (acc, key, w, h, d, x, y, z, rz = 0, r = 0.03) => acc[key].push(xf(ng(rbox(w, h, d, r)), x, y, z, 0, 0, rz));

  // ---- one wheel: tyre, rim with spokes, brake disc (spins about z)
  const wheel = (dirt) => {
    const spin = new THREE.Group(), R = K.wr, tw = K.tw;
    const tire = ng(new THREE.TorusGeometry(R - tw, tw, hi ? 10 : 6, hi ? 28 : 14));
    if (dirt) tire.applyMatrix4(new THREE.Matrix4().makeScale(1, 1, 0.9));
    const rim = [ng(xf(new THREE.CylinderGeometry(R - tw * 1.55, R - tw * 1.55, 0.035, hi ? 22 : 10, 1, true), 0, 0, 0, Math.PI / 2, 0, 0))];
    for (let i = 0; i < (hi ? 5 : 3); i++) rim.push(xf(ng(new THREE.BoxGeometry(2 * (R - tw * 1.5), 0.022, 0.022)), 0, 0, 0, 0, 0, (i * Math.PI) / (hi ? 5 : 3)));
    rim.push(ng(xf(new THREE.CylinderGeometry(0.045, 0.045, 0.1, 8), 0, 0, 0, Math.PI / 2, 0, 0)));
    const disc = ng(xf(new THREE.CylinderGeometry(R * 0.55, R * 0.55, 0.012, hi ? 18 : 8), 0, 0, 0.055, Math.PI / 2, 0, 0));
    const tm = new THREE.Mesh(tire, mats.tire), rm = new THREE.Mesh(mergeGeometries(rim, false), mats.rim), dm = new THREE.Mesh(disc, mats.dark);
    rm.material = mats.rim; for (const m of [tm, rm, dm]) m.castShadow = true;
    spin.add(tm, rm, dm); return spin;
  };

  // ---- frame, engine, tank, seat, tail, exhaust (static)
  const S = mkAcc(), sy = K.seatY, hy = K.headY, tk = K.tank;
  box(S, 'dark', 0.46, 0.36, 0.30, 0.0, 0.52, 0, 0, 0.05);                      // engine block
  box(S, 'dark', 0.22, 0.22, 0.28, 0.14, 0.76, 0, -0.35, 0.04);                 // cylinder head
  cyl(S, 'chrome', 0.07, 0.34, -0.08, 0.5, 0, Math.PI / 2, 0, 0);               // side cover
  for (const z of [-0.11, 0.11]) {
    bar(S, 'dark', 0.46, hy - 0.08, 0.02, 0.56, z); bar(S, 'dark', 0.02, 0.56, -0.4, 0.62, z); bar(S, 'dark', -0.4, 0.62, -0.68, K.wr + 0.22, z); bar(S, 'dark', 0.46, hy - 0.04, -0.2, sy - 0.08, z, 0.03);
    bar(S, 'dark', -0.28, 0.46, REAR_X, K.wr, z * 1.15, 0.045);                  // swing-arm
    cyl(S, 'dark', 0.055, 0.12, 0.0, 0.34, z * 2.2, Math.PI / 2, 0, 0);          // foot-peg
  }
  bar(S, 'chrome', -0.30, 0.64, -0.48, 0.46, 0.09, 0.03);                        // rear shock
  box(S, 'paint', tk[0], tk[1], tk[2], 0.14, hy + 0.005 + (K.chrome ? 0.0 : 0), 0, K.chrome ? 0 : -0.07, 0.065);                // tank
  box(S, 'seat', K.chrome ? 0.70 : 0.62, 0.1, K.chrome ? 0.34 : 0.27, -0.32, sy - 0.05, 0, K.chrome ? 0 : 0.02, 0.04);         // seat
  if (K.tail) { box(S, 'paint', 0.52, 0.17, 0.22, -0.66, sy + 0.04, 0, 0.18, 0.05); box(S, 'tail', 0.05, 0.07, 0.17, -0.93, sy + 0.1, 0, 0.18, 0.02); }
  else { box(S, 'paint', 0.42, 0.06, 0.34, -0.74, K.wr + 0.27, 0, 0, 0.03); box(S, 'tail', 0.05, 0.07, 0.15, -0.95, K.wr + 0.27, 0, 0, 0.02); }
  box(S, 'dark', 0.5, 0.025, 0.18, -0.72, K.wr + (K.tail ? 0.17 : 0.2), 0, K.tail ? 0.25 : 0.05, 0.01);   // rear mud-guard
  // exhaust (right side) with a flared end
  cyl(S, 'chrome', 0.045, 0.78, -0.30, 0.34, 0.2, 0, 0, Math.PI / 2);
  cyl(S, 'chrome', 0.06, 0.2, -0.72, K.chrome ? 0.34 : 0.4, 0.2, 0, 0, Math.PI / 2 + (K.chrome ? 0 : 0.18));
  if (K.chrome) cyl(S, 'chrome', 0.05, 0.7, -0.32, 0.42, -0.2, 0, 0, Math.PI / 2);
  if (K.fair) {   // sport fairing + screen
    box(S, 'paint', 0.34, 0.36, 0.34, 0.52, hy + 0.0, 0, -0.35, 0.08);
    box(S, 'paint', 0.16, 0.2, 0.3, 0.7, hy - 0.1, 0, 0, 0.07);
    S.glass.push(xf(ng(rbox(0.04, 0.2, 0.28, 0.015)), 0.5, hy + 0.2, 0, 0, 0, -0.55));
    cyl(S, 'dark', 0.04, 0.14, 0.4, hy + 0.12, 0, Math.PI / 2, 0, 0);
  }
  group.add(merged(S));
  // rear wheel
  const rearSpin = wheel(kind === 'dirt'); rearSpin.position.set(REAR_X, K.wr, 0); group.add(rearSpin);

  // ---- steering assembly: raked head -> steer pivot -> fork legs, bars, headlight, front wheel
  const Lf = (hy - K.wr) / Math.cos(K.rake), frontX = 0.46 + Math.sin(K.rake) * Lf;
  const rakeG = new THREE.Group(); rakeG.position.set(0.46, hy, 0); rakeG.rotation.z = K.rake;
  const steerG = new THREE.Group(); rakeG.add(steerG);
  const F = mkAcc();
  for (const z of [-0.09, 0.09]) { cyl(F, K.chrome || kind === 'dirt' ? 'chrome' : 'dark', 0.026, Lf * 0.95, 0, -Lf * 0.5, z, 0, 0, 0); cyl(F, 'dark', 0.036, Lf * 0.36, 0, -Lf * 0.78, z, 0, 0, 0); }
  box(F, 'dark', 0.1, 0.04, 0.3, 0, -0.04, 0, 0, 0.015);
  cyl(F, 'dark', 0.03, 0.1, 0, 0.0, 0, 0, 0, 0);                                         // steering stem
  const grips = [];
  if (K.bar === 'clip') { for (const z of [-1, 1]) { cyl(F, 'dark', 0.014, 0.2, -0.02, -0.01, z * 0.2, Math.PI / 2, 0, 0); cyl(F, 'seat', 0.02, 0.1, -0.02, -0.01, z * 0.33, Math.PI / 2, 0, 0); grips.push([-0.02, -0.01, z * 0.33]); } }
  else if (K.bar === 'wide') { cyl(F, 'chrome', 0.014, 0.86, -0.1, 0.1, 0, Math.PI / 2, 0, 0); for (const z of [-1, 1]) { cyl(F, 'chrome', 0.014, 0.14, -0.04, 0.05, z * 0.1, 0, 0, 0.4 * z); cyl(F, 'seat', 0.021, 0.12, -0.1, 0.1, z * 0.4, Math.PI / 2, 0, 0); grips.push([-0.1, 0.1, z * 0.4]); } }
  else { cyl(F, 'dark', 0.014, 0.78, -0.03, 0.17, 0, Math.PI / 2, 0, 0); for (const z of [-1, 1]) { cyl(F, 'dark', 0.014, 0.16, -0.02, 0.1, z * 0.1, 0, 0, 0); cyl(F, 'seat', 0.021, 0.12, -0.03, 0.17, z * 0.36, Math.PI / 2, 0, 0); grips.push([-0.03, 0.17, z * 0.36]); } }
  F.head.push(xf(ng(new THREE.SphereGeometry(K.fair ? 0.001 : 0.1, hi ? 12 : 6, hi ? 8 : 4)), 0.14, -0.1, 0));
  if (K.fair) F.head.push(xf(ng(rbox(0.05, 0.08, 0.2, 0.02)), 0.69 - 0.46, -0.14, 0));
  F.paint.push(xf(ng(rbox(0.46, 0.035, K.fender ? 0.1 : 0.16, 0.012)), 0, -Lf + K.wr + (K.fender ? 0.17 : 0.07), 0, 0, 0, K.fender ? -0.35 : 0));      // front mud-guard
  const sg = merged(F); steerG.add(sg);
  const frontSpin = wheel(kind === 'dirt'); frontSpin.position.set(0, -Lf, 0); steerG.add(frontSpin);
  group.add(rakeG);

  group.traverse((o) => { if (o.isMesh) o.receiveShadow = o.material !== mats.glass; });
  const frontPos = new THREE.Vector3(frontX, K.wr, 0);
  return {
    group, mats, wheels: [], style: K, kind, grips, frontPos, lamp: null,
    steer(a) { steerG.rotation.y = a; },
    spin(a) { rearSpin.rotation.z = -a; frontSpin.rotation.z = -a; },
    setDoor() {}, setLid() {}, dent() {}, hurtLook() {}, repair() {},
    setColor(c) { mats.paint.color.set(c); },
  };
}
