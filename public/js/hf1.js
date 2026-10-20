// Formula 1 car: low open-wheel racer with front and rear wings, nose cone, sidepods, halo and a driver's cockpit. Same interface as htruck.js.
// Model space: +x = nose, +y = up, +z = right. The driver sits in the middle (seatR 0).
import * as THREE from 'three';

export const F1 = { L: 5.2, w: 2.0, wb: 3.4, seatX: 0.25, seatR: 0, seatTop: 0.5 };

export function buildF1({ paint = '#d71920', detail = 'hi' } = {}) {
  const hi = detail !== 'lo';
  const mat = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: o.r ?? 0.4, metalness: o.m ?? 0.3, emissive: o.e || '#000', emissiveIntensity: o.ei || 0 });
  const mats = { paint: mat(paint, { r: 0.28, m: 0.5 }), white: mat('#f4f4f4', { r: 0.4 }), dark: mat('#17181d', { r: 0.7, m: 0.1 }), carbon: mat('#202228', { r: 0.45, m: 0.5 }), tire: mat('#101012', { r: 0.9, m: 0 }), rim: mat('#c9ccd4', { r: 0.3, m: 0.8 }),
    seat: mat('#2a2a30', { r: 0.9, m: 0 }), tail: mat('#7a1018', { e: '#ff2030', ei: 0.5 }), yellow: mat('#ffd23f', { r: 0.5, m: 0.1 }) };
  const g = new THREE.Group();
  const box = (m, sx, sy, sz, x, y, z, rx = 0, ry = 0, rz = 0) => { const o = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), m); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); o.castShadow = true; g.add(o); return o; };
  const cyl = (m, r, h, x, y, z, rot = [0, 0, 0], seg = 12, r2) => { const o = new THREE.Mesh(new THREE.CylinderGeometry(r2 ?? r, r, h, seg), m); o.position.set(x, y, z); o.rotation.set(...rot); o.castShadow = true; g.add(o); return o; };
  const RF = 0.34, RR = 0.38, frontX = 1.75, rearX = -1.65;
  // monocoque, nose cone, engine cover with airbox, floor
  box(mats.paint, 2.6, 0.42, 0.62, 0.1, 0.5, 0);
  cyl(mats.paint, 0.2, 2.0, 2.0, 0.42, 0, [0, 0, Math.PI / 2], 14, 0.1);   // nose cone narrowing to the tip (+x)
  box(mats.paint, 1.7, 0.44, 0.5, -1.15, 0.55, 0);
  box(mats.carbon, 0.36, 0.38, 0.3, -0.55, 0.88, 0);                       // airbox over the driver's head
  box(mats.carbon, 4.2, 0.06, 1.1, -0.2, 0.2, 0);                          // floor
  // sidepods
  for (const sd of [-1, 1]) { box(mats.paint, 1.5, 0.36, 0.5, -0.35, 0.42, sd * 0.62); box(mats.white, 0.5, 0.12, 0.5, 0.45, 0.4, sd * 0.62); }
  // cockpit: seat, helmet, halo
  box(mats.seat, 0.7, 0.1, 0.4, F1.seatX, F1.seatTop - 0.12, 0); box(mats.seat, 0.12, 0.4, 0.4, F1.seatX - 0.36, F1.seatTop + 0.08, 0);
  { const h = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.025, 6, 20, Math.PI), mats.carbon); h.position.set(0.5, 0.82, 0); h.rotation.set(0, Math.PI / 2, 0); g.add(h); }
  box(mats.carbon, 0.04, 0.3, 0.04, 0.78, 0.72, 0);
  { const st = new THREE.Mesh(new THREE.TorusGeometry(0.14, 0.02, 6, 14), mats.dark); st.position.set(0.82, 0.72, 0); st.rotation.set(0.5, Math.PI / 2, 0); g.add(st); }   // steering wheel
  // front wing (two planes + end plates), rear wing (two planes + end plates + pillar)
  box(mats.carbon, 0.5, 0.05, 2.0, 2.85, 0.16, 0); box(mats.paint, 0.35, 0.04, 1.9, 2.55, 0.26, 0);
  for (const sd of [-1, 1]) { box(mats.white, 0.7, 0.26, 0.04, 2.8, 0.26, sd * 1.0); box(mats.white, 0.7, 0.4, 0.04, -2.6, 0.78, sd * 0.9); }
  box(mats.carbon, 0.6, 0.05, 1.8, -2.55, 1.0, 0); box(mats.paint, 0.4, 0.04, 1.8, -2.45, 0.78, 0); box(mats.carbon, 0.1, 0.5, 0.1, -2.3, 0.6, 0);
  box(mats.tail, 0.06, 0.12, 0.2, -2.88, 0.62, 0);
  // suspension arms
  if (hi) for (const sd of [-1, 1]) for (const x of [frontX, rearX]) { box(mats.dark, 0.05, 0.05, 0.62, x - 0.1, 0.42, sd * 0.62).rotation.x = 0; }
  // wheels: big exposed slicks
  const wheels = [];
  const mkWheel = (x, z, R, w, front) => {
    const steer = new THREE.Group(); steer.position.set(x, R, z); g.add(steer);
    const spin = new THREE.Group(); steer.add(spin);
    const t = new THREE.Mesh(new THREE.CylinderGeometry(R, R, w, hi ? 24 : 12), mats.tire); t.rotation.x = Math.PI / 2; t.castShadow = true; spin.add(t);
    const r = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.6, R * 0.6, w + 0.02, hi ? 14 : 8), mats.rim); r.rotation.x = Math.PI / 2; spin.add(r);
    if (hi) { const s = new THREE.Mesh(new THREE.BoxGeometry(0.05, R * 1.1, w + 0.04), mats.yellow); spin.add(s); }
    wheels.push({ spin, steer, front });
  };
  for (const sd of [-1, 1]) { mkWheel(frontX, sd * 0.98, RF, 0.34, true); mkWheel(rearX, sd * 0.95, RR, 0.46, false); }
  return {
    group: g, mats, lamp: null, police: null,
    setDoor() {}, setLid() {}, dent() {}, hurtLook() {}, repair() {},
    steer(a) { for (const w of wheels) if (w.front) w.steer.rotation.y = a; },
    spin(a) { for (const w of wheels) w.spin.rotation.z = -a; },
    setColor(c) { mats.paint.color.set(c); },
  };
}
