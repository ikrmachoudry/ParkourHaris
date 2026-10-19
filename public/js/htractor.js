// Farm tractor: small procedural model with the same interface as a hero car (see hrick.js / hcar.js).
// Model space: +x = nose, +y = up, +z = right.  Big rear wheels, small steering front wheels, open seat under a roll-over canopy.
import * as THREE from 'three';

export const TRACTOR = { L: 3.7, w: 2.0, wb: 2.0, seatX: -0.4, seatTop: 1.12 };

export function buildTractor({ paint = '#c8262c', detail = 'hi' } = {}) {
  const hi = detail !== 'lo';
  const mat = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: o.r ?? 0.6, metalness: o.m ?? 0.15, emissive: o.e || '#000', emissiveIntensity: o.ei || 0 });
  const mats = { paint: mat(paint, { r: 0.45, m: 0.3 }), dark: mat('#23252e', { r: 0.75 }), tire: mat('#141416', { r: 0.95, m: 0 }), rim: mat('#e2b814', { r: 0.4, m: 0.4 }), seat: mat('#2b2b30', { r: 0.9, m: 0 }),
    grey: mat('#6b7078', { r: 0.5, m: 0.5 }), chrome: mat('#d9dce4', { r: 0.2, m: 0.9 }), head: mat('#fff6d0', { e: '#fff1b0', ei: 0.6 }), tail: mat('#7a1018', { e: '#ff2030', ei: 0.35 }) };
  const g = new THREE.Group();
  const box = (m, sx, sy, sz, x, y, z, rx = 0, ry = 0, rz = 0) => { const o = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), m); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); o.castShadow = true; g.add(o); return o; };
  const cyl = (m, r, h, x, y, z, seg = 10) => { const o = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), m); o.position.set(x, y, z); o.castShadow = true; g.add(o); return o; };
  const RR = 0.8, RW = 0.5, FR = 0.42, FW = 0.24, rearX = -0.55, frontX = 1.45, rz = 0.98, fz = 0.7;
  // engine block + hood, front weight, chassis, gearbox / rear axle housing
  box(mats.grey, 1.9, 0.5, 0.62, 0.55, 0.68, 0);                       // chassis
  box(mats.paint, 1.45, 0.62, 0.78, 1.0, 1.12, 0);                       // engine hood
  box(mats.paint, 0.5, 0.36, 0.7, 1.7, 0.98, 0, 0, 0, -0.25);          // radiator grille slopes forward
  box(mats.dark, 0.06, 0.34, 0.6, 1.98, 0.98, 0);                       // grille face
  box(mats.paint, 1.0, 0.7, 0.72, -0.45, 0.95, 0);                      // gearbox
  box(mats.grey, 0.22, 0.22, rz * 2, rearX, RR, 0);                     // rear axle
  box(mats.grey, 0.18, 0.18, fz * 2, frontX, FR, 0);                    // front axle
  // mudguards over the rear wheels
  for (const z of [-rz, rz]) box(mats.paint, 1.35, 0.06, 0.62, rearX, RR * 2 + 0.18, z * 1.0, 0, 0, 0);
  // seat + steering wheel + pedals
  box(mats.seat, 0.5, 0.12, 0.5, TRACTOR.seatX, TRACTOR.seatTop - 0.12, 0);
  box(mats.seat, 0.1, 0.46, 0.48, TRACTOR.seatX - 0.24, TRACTOR.seatTop + 0.1, 0);
  cyl(mats.dark, 0.03, 0.55, 0.28, 1.45, 0).rotation.z = -0.55;
  { const w = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.025, 6, 16), mats.dark); w.position.set(0.18, 1.72, 0); w.rotation.set(Math.PI / 2 - 0.5, 0, 0); g.add(w); }
  // roll-over canopy: four posts and a flat roof
  for (const [x, z] of [[0.2, 0.55], [0.2, -0.55], [-0.95, 0.55], [-0.95, -0.55]]) box(mats.dark, 0.06, 1.2, 0.06, x, 2.0, z);
  box(mats.paint, 1.45, 0.06, 1.3, -0.4, 2.62, 0);
  // exhaust pipe, headlights, tail lights
  cyl(mats.chrome, 0.045, 0.95, 1.25, 1.95, 0.22, 8);
  for (const z of [-0.28, 0.28]) { const hl = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), mats.head); hl.position.set(2.0, 1.12, z); g.add(hl); }
  for (const z of [-0.55, 0.55]) box(mats.tail, 0.05, 0.1, 0.14, -1.08, 1.4, z);
  // drawbar hook at the back
  box(mats.dark, 0.5, 0.07, 0.07, -1.5, 0.52, 0);
  // wheels
  const wheels = [];
  const mkWheel = (x, z, r, w, front) => {
    const steer = new THREE.Group(); steer.position.set(x, r, z); g.add(steer);
    const spin = new THREE.Group(); steer.add(spin);
    const t = new THREE.Mesh(new THREE.CylinderGeometry(r, r, w, hi ? 26 : 14), mats.tire); t.rotation.x = Math.PI / 2; t.castShadow = true; spin.add(t);
    const rm = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.58, r * 0.58, w + 0.02, hi ? 14 : 8), mats.rim); rm.rotation.x = Math.PI / 2; spin.add(rm);
    if (hi) { const lugs = front ? 14 : 18; for (let k = 0; k < lugs; k++) { const a = k / lugs * Math.PI * 2, l = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.06, w * 0.96), mats.tire); l.position.set(Math.cos(a) * (r + 0.02), Math.sin(a) * (r + 0.02), 0); l.rotation.z = a; spin.add(l); } }   // tread bars
    wheels.push({ spin, steer, front });
  };
  mkWheel(rearX, rz, RR, RW, false); mkWheel(rearX, -rz, RR, RW, false);
  mkWheel(frontX, fz, FR, FW, true); mkWheel(frontX, -fz, FR, FW, true);
  return {
    group: g, mats, lamp: null, police: null,
    setDoor() {}, setLid() {}, dent() {}, hurtLook() {}, repair() {},
    steer(a) { for (const w of wheels) if (w.front) w.steer.rotation.y = a; },
    spin(a) { for (const w of wheels) w.spin.rotation.z = -a * (w.front ? 0.81 : 0.43); },   // wheel angle follows distance: r = 0.34 is what the animation assumes, these wheels are bigger
    setColor(c) { mats.paint.color.set(c); },
  };
}
