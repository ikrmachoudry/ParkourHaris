// City bus (Pakistani intercity style: long body, big window band, destination board, roof rack): procedural model with the same interface as htruck.js.
// Model space: +x = nose, +y = up, +z = right (the driver sits at the front, on the right).
import * as THREE from 'three';

export const BUS = { L: 11.5, w: 2.6, wb: 6.2, seatX: 4.3, seatR: 0.7, seatTop: 1.55 };

export function buildBus({ paint = '#1a7f4b', detail = 'hi' } = {}) {
  const hi = detail !== 'lo';
  const mat = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: o.r ?? 0.6, metalness: o.m ?? 0.15, emissive: o.e || '#000', emissiveIntensity: o.ei || 0, transparent: !!o.t, opacity: o.t ? o.o : 1 });
  const mats = { paint: mat(paint, { r: 0.4, m: 0.35 }), white: mat('#f2f2ee', { r: 0.6 }), trimY: mat('#f0b81c', { r: 0.5 }), trimR: mat('#d4382c', { r: 0.5 }), dark: mat('#23252e', { r: 0.75 }),
    tire: mat('#141416', { r: 0.9, m: 0 }), rim: mat('#c9ccd4', { r: 0.35, m: 0.7 }), seat: mat('#3a3a40', { r: 0.9, m: 0 }), glass: mat('#8fc4de', { t: true, o: 0.55, r: 0.1 }),
    chrome: mat('#d9dce4', { r: 0.2, m: 0.9 }), head: mat('#fff6d0', { e: '#fff1b0', ei: 0.6 }), tail: mat('#7a1018', { e: '#ff2030', ei: 0.35 }), board: mat('#ffd23f', { e: '#ffb300', ei: 0.35 }) };
  const g = new THREE.Group();
  const box = (m, sx, sy, sz, x, y, z, rx = 0, ry = 0, rz = 0) => { const o = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, sz), m); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); o.castShadow = true; g.add(o); return o; };
  const cyl = (m, r, h, x, y, z, seg = 10) => { const o = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), m); o.position.set(x, y, z); o.castShadow = true; g.add(o); return o; };
  const R = 0.55, frontX = 3.7, rearX = -2.5;
  // chassis, body: lower painted skirt, white upper body with a window band, painted roof edge
  box(mats.dark, 11.0, 0.3, 1.9, 0, 0.78, 0);
  box(mats.paint, 11.5, 1.0, 2.6, 0, 1.3, 0);                                   // skirt
  box(mats.white, 11.4, 1.35, 2.56, 0, 2.5, 0);                                  // upper body
  box(mats.paint, 11.5, 0.16, 2.62, 0, 3.26, 0);                                 // roof edge
  box(mats.white, 11.2, 0.12, 2.5, 0, 3.4, 0);                                   // roof
  box(mats.trimY, 11.52, 0.1, 2.62, 0, 1.84, 0); box(mats.trimR, 11.52, 0.07, 2.64, 0, 1.72, 0);   // stripes along the flanks
  // window band on both flanks, the windscreen, the rear window
  for (const sd of [-1, 1]) { box(mats.glass, 10.0, 0.82, 0.05, -0.3, 2.62, sd * 1.29); for (let k = -5; k <= 4; k++) box(mats.white, 0.07, 0.86, 0.07, k * 1.0 + 0.1, 2.62, sd * 1.3); }
  box(mats.glass, 0.06, 1.0, 2.3, 5.72, 2.5, 0, 0, 0, 0.1);
  box(mats.glass, 0.06, 0.8, 2.1, -5.74, 2.6, 0);
  box(mats.board, 0.05, 0.28, 1.7, 5.76, 3.05, 0);                              // destination board
  // front: grille, bumper, lamps
  box(mats.dark, 0.06, 0.6, 1.8, 5.77, 1.35, 0); box(mats.chrome, 0.22, 0.26, 2.5, 5.85, 0.8, 0); box(mats.chrome, 0.2, 0.2, 2.5, -5.8, 0.8, 0);
  for (const z of [-0.95, 0.95]) { const hl = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), mats.head); hl.position.set(5.74, 1.35, z); g.add(hl); }
  for (const z of [-1.05, 1.05]) box(mats.tail, 0.06, 0.3, 0.3, -5.78, 1.5, z);
  // roof rack with luggage
  if (hi) { for (let k = 0; k < 5; k++) box(mats.dark, 0.06, 0.18, 2.3, -4 + k * 1.9, 3.55, 0); box(mats.dark, 8.0, 0.05, 0.06, 0, 3.64, 1.1); box(mats.dark, 8.0, 0.05, 0.06, 0, 3.64, -1.1); box(mats.trimR, 2.2, 0.5, 1.3, -1.8, 3.72, 0.2); box(mats.trimY, 1.6, 0.4, 1.1, 1.0, 3.68, -0.3); }
  // seat, steering wheel (driver at the front on the right)
  box(mats.seat, 0.6, 0.14, 0.62, BUS.seatX, BUS.seatTop - 0.1, BUS.seatR);
  box(mats.seat, 0.12, 0.7, 0.62, BUS.seatX - 0.32, BUS.seatTop + 0.25, BUS.seatR);
  cyl(mats.dark, 0.04, 0.6, BUS.seatX + 0.55, BUS.seatTop + 0.2, BUS.seatR).rotation.z = -0.8;
  { const w = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.03, 6, 18), mats.dark); w.position.set(BUS.seatX + 0.42, BUS.seatTop + 0.38, BUS.seatR); w.rotation.set(Math.PI / 2 - 0.8, 0, 0); g.add(w); }
  for (const sd of [-1, 1]) box(mats.dark, 0.05, 0.4, 0.22, 5.5, 2.3, sd * 1.5);   // mirrors
  // wheels: single front pair, dual rear axle
  const wheels = [];
  const mkWheel = (x, z, w, front) => {
    const steer = new THREE.Group(); steer.position.set(x, R, z); g.add(steer);
    const spin = new THREE.Group(); steer.add(spin);
    const t = new THREE.Mesh(new THREE.CylinderGeometry(R, R, w, hi ? 24 : 12), mats.tire); t.rotation.x = Math.PI / 2; t.castShadow = true; spin.add(t);
    const r = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.55, R * 0.55, w + 0.02, hi ? 12 : 8), mats.rim); r.rotation.x = Math.PI / 2; spin.add(r);
    if (hi) for (let k = 0; k < 5; k++) { const s = new THREE.Mesh(new THREE.BoxGeometry(0.06, R * 0.95, w + 0.04), mats.dark); s.rotation.z = k * Math.PI / 5; spin.add(s); }
    wheels.push({ spin, steer, front });
  };
  mkWheel(frontX, 1.1, 0.36, true); mkWheel(frontX, -1.1, 0.36, true);
  for (const z of [-1.15, 1.15]) { mkWheel(rearX, z, 0.34, false); mkWheel(rearX, z * 0.72, 0.34, false); }
  for (const x of [frontX, rearX]) for (const z of [-1.0, 1.0]) box(mats.paint, 1.4, 0.06, 0.55, x, R * 2 + 0.2, z * 1.12);   // mudguards
  return {
    group: g, mats, lamp: null, police: null,
    setDoor() {}, setLid() {}, dent() {}, hurtLook() {}, repair() {},
    steer(a) { for (const w of wheels) if (w.front) w.steer.rotation.y = a; },
    spin(a) { for (const w of wheels) w.spin.rotation.z = -a * 0.62; },   // r = 0.55 against the 0.34 the animation assumes
    setColor(c) { mats.paint.color.set(c); },
  };
}
