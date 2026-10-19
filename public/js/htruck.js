// Cargo truck (Pakistani-style: bonnet, cab, big decorated cargo box): procedural model with the same interface as hcar.js / hrick.js.
// Model space: +x = nose, +y = up, +z = right (the driver sits on the right, like in the cars).
import * as THREE from 'three';

export const TRUCK = { L: 7.6, w: 2.5, wb: 4.3, seatX: 1.75, seatR: 0.62, seatTop: 1.5 };

export function buildTruck({ paint = '#1f5fbf', detail = 'hi' } = {}) {
  const hi = detail !== 'lo';
  const mat = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: o.r ?? 0.6, metalness: o.m ?? 0.15, emissive: o.e || '#000', emissiveIntensity: o.ei || 0, transparent: !!o.t, opacity: o.t ? o.o : 1 });
  const mats = { paint: mat(paint, { r: 0.4, m: 0.35 }), box: mat('#e9e1c8', { r: 0.7, m: 0.05 }), trimC: mat('#d4382c', { r: 0.5 }), trimY: mat('#f0b81c', { r: 0.5 }), dark: mat('#23252e', { r: 0.75 }),
    tire: mat('#141416', { r: 0.9, m: 0 }), rim: mat('#c9ccd4', { r: 0.35, m: 0.7 }), seat: mat('#3a3a40', { r: 0.9, m: 0 }), glass: mat('#a8d4e8', { t: true, o: 0.4, r: 0.1 }),
    chrome: mat('#d9dce4', { r: 0.2, m: 0.9 }), head: mat('#fff6d0', { e: '#fff1b0', ei: 0.6 }), tail: mat('#7a1018', { e: '#ff2030', ei: 0.35 }) };
  const g = new THREE.Group();
  const box = (m, sx, sy, sz, x, y, z, rx = 0, ry = 0, rz = 0) => { const o = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), m); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); o.castShadow = true; g.add(o); return o; };
  const cyl = (m, r, h, x, y, z, seg = 10) => { const o = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), m); o.position.set(x, y, z); o.castShadow = true; g.add(o); return o; };
  const R = 0.56, frontX = 2.9, rearX1 = -1.4, rearX2 = -2.7;
  // chassis rails and bumper
  box(mats.dark, 7.2, 0.28, 1.1, -0.1, 0.92, 0);
  box(mats.chrome, 0.24, 0.3, 2.3, 3.95, 0.78, 0);
  // bonnet, grille, cab
  box(mats.paint, 1.25, 1.0, 2.1, 3.2, 1.7, 0);
  box(mats.dark, 0.06, 0.7, 1.6, 3.84, 1.6, 0);
  box(mats.paint, 1.7, 1.85, 2.4, 1.85, 2.2, 0);
  box(mats.glass, 0.06, 0.82, 2.1, 2.72, 2.62, 0, 0, 0, 0.18);          // windscreen
  box(mats.glass, 1.0, 0.72, 0.05, 1.9, 2.62, 1.21); box(mats.glass, 1.0, 0.72, 0.05, 1.9, 2.62, -1.21);   // side windows
  box(mats.trimY, 1.72, 0.12, 2.42, 1.85, 1.6, 0);                        // yellow band round the cab
  box(mats.trimC, 1.72, 0.07, 2.44, 1.85, 3.1, 0);                        // red band under the roof edge
  box(mats.paint, 1.9, 0.08, 2.6, 1.75, 3.17, 0);                         // roof with an overhang
  // cargo box with a stripe pattern
  box(mats.box, 4.9, 2.2, 2.5, -1.55, 2.28, 0);
  box(mats.trimC, 4.92, 0.28, 2.52, -1.55, 1.52, 0);
  box(mats.trimY, 4.92, 0.12, 2.52, -1.55, 1.82, 0);
  box(mats.trimC, 4.92, 0.12, 2.52, -1.55, 3.2, 0);
  box(mats.paint, 4.96, 0.1, 2.54, -1.55, 3.4, 0);
  for (const x of [-3.2, -1.55, 0.1]) box(mats.dark, 0.08, 2.0, 2.56, x, 2.3, 0);   // slats of the side boards
  // seat, steering wheel (driver on the right)
  box(mats.seat, 0.6, 0.14, 0.62, TRUCK.seatX, TRUCK.seatTop - 0.1, TRUCK.seatR);
  box(mats.seat, 0.12, 0.62, 0.62, TRUCK.seatX - 0.32, TRUCK.seatTop + 0.22, TRUCK.seatR);
  cyl(mats.dark, 0.04, 0.6, 2.38, 1.95, TRUCK.seatR).rotation.z = -0.9;
  { const w = new THREE.Mesh(new THREE.TorusGeometry(0.26, 0.03, 6, 18), mats.dark); w.position.set(2.2, 2.15, TRUCK.seatR); w.rotation.set(Math.PI / 2 - 0.9, 0, 0); g.add(w); }
  // lamps, exhaust stack, mirrors, tanks
  for (const z of [-0.75, 0.75]) { const hl = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), mats.head); hl.position.set(3.86, 1.95, z); g.add(hl); }
  for (const z of [-1.05, 1.05]) box(mats.tail, 0.06, 0.2, 0.3, -4.02, 1.3, z);
  cyl(mats.chrome, 0.07, 1.9, 0.78, 2.7, -1.35, 8);
  for (const z of [-1.4, 1.4]) box(mats.dark, 0.05, 0.4, 0.22, 2.7, 2.7, z);
  cyl(mats.chrome, 0.22, 1.1, -0.2, 0.9, 1.0, 12).rotation.x = Math.PI / 2;
  // wheels: single front pair, dual rear axle (two tyres a side)
  const wheels = [];
  const mkWheel = (x, z, w, front) => {
    const steer = new THREE.Group(); steer.position.set(x, R, z); g.add(steer);
    const spin = new THREE.Group(); steer.add(spin);
    const t = new THREE.Mesh(new THREE.CylinderGeometry(R, R, w, hi ? 24 : 12), mats.tire); t.rotation.x = Math.PI / 2; t.castShadow = true; spin.add(t);
    const r = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.55, R * 0.55, w + 0.02, hi ? 12 : 8), mats.rim); r.rotation.x = Math.PI / 2; spin.add(r);
    if (hi) for (let k = 0; k < 5; k++) { const s = new THREE.Mesh(new THREE.BoxGeometry(0.06, R * 0.95, w + 0.04), mats.dark); s.rotation.z = k * Math.PI / 5; spin.add(s); }
    wheels.push({ spin, steer, front });
  };
  mkWheel(frontX, 1.05, 0.36, true); mkWheel(frontX, -1.05, 0.36, true);
  for (const x of [rearX1, rearX2]) for (const z of [-1.2, 1.2]) { mkWheel(x, z, 0.34, false); mkWheel(x, z * 0.72, 0.34, false); }
  // mudguards
  for (const z of [-1.08, 1.08]) box(mats.paint, 1.3, 0.06, 0.5, frontX, R * 2 + 0.16, z);
  return {
    group: g, mats, lamp: null, police: null,
    setDoor() {}, setLid() {}, dent() {}, hurtLook() {}, repair() {},
    steer(a) { for (const w of wheels) if (w.front) w.steer.rotation.y = a; },
    spin(a) { for (const w of wheels) w.spin.rotation.z = -a * 0.6; },   // r = 0.56 against the 0.34 the animation assumes
    setColor(c) { mats.paint.color.set(c); },
  };
}
