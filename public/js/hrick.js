// Auto rickshaw (three-wheeler): a small procedural model with the same interface as a hero car (hcar.js), so cityvis.js can treat it like a car.
// Model space: +x = nose, +y = up, +z = right.  One front wheel on a steering fork, two rear wheels, canopy roof, bench seat behind the driver.
import * as THREE from 'three';

export const RICK = { L: 2.75, w: 1.3, wb: 1.9, wr: 0.27, seatX: 0.2 };

export function buildRickshaw({ paint = '#1f9d55', detail = 'hi' } = {}) {
  const hi = detail !== 'lo';
  const mat = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: o.r ?? 0.55, metalness: o.m ?? 0.15, emissive: o.e || '#000', emissiveIntensity: o.ei || 0, transparent: !!o.t, opacity: o.t ? o.o : 1 });
  const mats = { paint: mat(paint, { r: 0.4, m: 0.35 }), canopy: mat('#17181c'), dark: mat('#23252e', { r: 0.7 }), tire: mat('#16161b', { r: 0.85, m: 0 }), rim: mat('#cfd3dc', { r: 0.3, m: 0.8 }),
    seat: mat('#2b2b30', { r: 0.9, m: 0 }), glass: mat('#a8d4e8', { t: true, o: 0.35, r: 0.1 }), head: mat('#fff6d0', { e: '#fff1b0', ei: 0.6 }), tail: mat('#7a1018', { e: '#ff2030', ei: 0.35 }), chrome: mat('#d9dce4', { r: 0.2, m: 0.9 }) };
  const g = new THREE.Group();
  const box = (m, sx, sy, sz, x, y, z, rx = 0, ry = 0, rz = 0) => { const o = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), m); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); o.castShadow = true; g.add(o); return o; };
  const cyl = (m, r, h, x, y, z, rx, ry, rz, seg = 10) => { const o = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), m); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); o.castShadow = true; g.add(o); return o; };
  const R = RICK.wr, rearX = -0.78, frontX = 1.12;
  // chassis + lower body (green), rear tub and front cowl
  box(mats.dark, 2.05, 0.1, 0.9, 0.0, 0.34, 0);
  box(mats.paint, 1.35, 0.42, 1.18, -0.55, 0.62, 0);            // passenger tub
  box(mats.paint, 0.95, 0.5, 0.78, 0.6, 0.6, 0);                // front cowl
  box(mats.paint, 0.5, 0.34, 0.66, 1.18, 0.5, 0, 0, 0, -0.35);  // nose slopes down to the front wheel
  box(mats.paint, 0.08, 0.5, 1.18, -1.25, 0.66, 0);             // rear panel
  // front mudguard over the single wheel
  box(mats.paint, 0.62, 0.05, 0.3, frontX, 0.64, 0, 0, 0, 0.08);
  // canopy roof (black) on four pillars + a windscreen
  box(mats.canopy, 2.05, 0.07, 1.24, -0.3, 1.78, 0, 0, 0, -0.02);
  box(mats.canopy, 0.34, 0.06, 1.0, 0.9, 1.74, 0, 0, 0, -0.12);   // peak over the windscreen
  for (const [x, z] of [[0.62, 0.4], [0.62, -0.4], [-1.22, 0.58], [-1.22, -0.58]]) box(mats.chrome, 0.05, x > 0 ? 0.96 : 1.1, 0.05, x, x > 0 ? 1.27 : 1.22, z);
  box(mats.glass, 0.04, 0.58, 0.78, 0.66, 1.28, 0, 0, 0, 0.12);
  // rear curtain / back of the hood (black)
  box(mats.canopy, 0.05, 0.62, 1.1, -1.25, 1.35, 0);
  // seats: driver (front) and passenger bench (rear)
  box(mats.seat, 0.42, 0.12, 0.5, RICK.seatX + 0.08, 0.86, 0);
  box(mats.seat, 0.1, 0.42, 0.5, RICK.seatX - 0.17, 1.1, 0);
  box(mats.seat, 0.5, 0.14, 1.04, -0.7, 0.88, 0);
  box(mats.seat, 0.1, 0.5, 1.04, -1.12, 1.15, 0);
  // headlight + tail lights
  const hl = new THREE.Mesh(new THREE.SphereGeometry(0.1, 10, 8), mats.head); hl.position.set(1.36, 0.62, 0); g.add(hl);
  for (const z of [-0.5, 0.5]) box(mats.tail, 0.05, 0.1, 0.14, -1.27, 0.7, z);
  // wheels: [spin group, steer group]
  const wheels = [];
  const mkWheel = (x, z, front) => {
    const steer = new THREE.Group(); steer.position.set(x, R, z); g.add(steer);
    const spin = new THREE.Group(); steer.add(spin);
    const t = new THREE.Mesh(new THREE.CylinderGeometry(R, R, 0.15, hi ? 20 : 12), mats.tire); t.rotation.x = Math.PI / 2; t.castShadow = true; spin.add(t);
    const r = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.62, R * 0.62, 0.16, hi ? 12 : 8), mats.rim); r.rotation.x = Math.PI / 2; spin.add(r);
    if (hi) for (let k = 0; k < 3; k++) { const s = new THREE.Mesh(new THREE.BoxGeometry(0.03, R * 1.1, 0.17), mats.dark); s.rotation.z = k * Math.PI / 3; spin.add(s); }
    wheels.push({ spin, steer, front });
  };
  mkWheel(frontX, 0, true); mkWheel(rearX, 0.58, false); mkWheel(rearX, -0.58, false);
  // fork + handlebar
  box(mats.chrome, 0.05, 0.62, 0.05, frontX - 0.04, 0.52, 0.12, 0, 0, 0.2); box(mats.chrome, 0.05, 0.62, 0.05, frontX - 0.04, 0.52, -0.12, 0, 0, 0.2);
  box(mats.chrome, 0.06, 0.04, 0.78, 0.5, 1.0, 0);
  // round the wheel spin/steer conventions to match hcar.js: steer(a) turns the front wheel, spin(a) rolls all
  return {
    group: g, mats, lamp: null, police: null,
    setDoor() {}, setLid() {}, dent() {}, hurtLook() {}, repair() {},
    steer(a) { for (const w of wheels) if (w.front) w.steer.rotation.y = a; },
    spin(a) { for (const w of wheels) w.spin.rotation.z = -a; },
    setColor(c) { mats.paint.color.set(c); },
  };
}
