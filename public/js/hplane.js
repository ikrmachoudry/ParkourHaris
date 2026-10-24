// AIRPLANE model (the jet at the Stunt Park). Model space: +x = nose, +y = up, +z = right. Wheels touch y = 0 when parked.
import * as THREE from 'three';
export const PLANE = { L: 15, w: 4.2, seatX: 2.2, seatR: 0, seatTop: 1.9 };
export function buildPlane({ paint = '#e9eef3', detail = 'hi' } = {}) {
  const hi = detail !== 'lo';
  const mat = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: o.r ?? 0.4, metalness: o.m ?? 0.3, transparent: !!o.t, opacity: o.o ?? 1, emissive: o.e || '#000', emissiveIntensity: o.ei || 0 });
  const mats = { paint: mat(paint, { r: 0.25, m: 0.35 }), red: mat('#c8202c'), dark: mat('#1e2127', { r: 0.7 }), glass: mat('#6fb3d8', { t: true, o: 0.7, r: 0.05 }), metal: mat('#8d949e', { r: 0.3, m: 0.8 }), tyre: mat('#111214', { r: 0.9, m: 0 }), glow: mat('#ff7a1a', { e: '#ff6a00', ei: 0.8 }) };
  const g = new THREE.Group();
  const add = (geo, m, x, y, z, rx = 0, ry = 0, rz = 0) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); o.castShadow = hi; g.add(o); return o; };
  const box = (m, sx, sy, sz, x, y, z, rx = 0, ry = 0, rz = 0) => add(new THREE.BoxGeometry(sx, sy, sz), m, x, y, z, rx, ry, rz);
  const seg = hi ? 16 : 8, Y = 1.75;   // fuselage axis height above the ground
  // fuselage (along x): a cylinder, a pointed nose, a tapered tail
  add(new THREE.CylinderGeometry(0.95, 0.95, 8, seg), mats.paint, 0, Y, 0, 0, 0, Math.PI / 2);
  add(new THREE.ConeGeometry(0.95, 4, seg), mats.paint, 6, Y, 0, 0, 0, -Math.PI / 2);
  add(new THREE.CylinderGeometry(0.95, 0.55, 3.5, seg), mats.paint, -5.7, Y, 0, 0, 0, Math.PI / 2);
  add(new THREE.CylinderGeometry(0.5, 0.5, 0.5, seg), mats.metal, -7.7, Y, 0, 0, 0, Math.PI / 2);
  add(new THREE.CylinderGeometry(0.38, 0.38, 0.2, seg), mats.glow, -8.0, Y, 0, 0, 0, Math.PI / 2);
  box(mats.red, 8, 0.12, 1.9, 0, Y, 0);   // a stripe along the belly line
  // canopy
  const can = add(new THREE.SphereGeometry(0.85, seg, 8), mats.glass, 2.7, Y + 0.7, 0); can.scale.set(2.2, 0.7, 0.8);
  // swept wings (delta-ish): boxes angled back
  for (const s of [-1, 1]) {
    box(mats.paint, 4.6, 0.16, 5.4, -1, Y - 0.35, s * 2.9, 0, s * 0.62, 0).userData.noHit = true;
    box(mats.red, 1.0, 0.18, 0.5, -3.2, Y - 0.35, s * 5.4, 0, s * 0.62, 0).userData.noHit = true;
    box(mats.paint, 2.0, 0.12, 2.0, -6.8, Y, s * 1.7, 0, s * 0.5, 0).userData.noHit = true;   // tail planes
  }
  // tail fin
  box(mats.paint, 3, 2.6, 0.16, -6.4, Y + 1.7, 0, 0, 0, -0.45); box(mats.red, 1.2, 0.5, 0.18, -7.5, Y + 2.9, 0, 0, 0, -0.45);
  // landing gear: nose + two mains
  for (const [x, z] of [[4.2, 0], [-1.4, 1.5], [-1.4, -1.5]]) { box(mats.metal, 0.12, Y - 0.5, 0.12, x, (Y - 0.5) / 2 + 0.3, z); add(new THREE.CylinderGeometry(0.34, 0.34, 0.26, 10), mats.tyre, x, 0.34, z, Math.PI / 2, 0, 0); }
  return { group: g, mats, lamp: null, police: null, setDoor() {}, setLid() {}, dent() {}, hurtLook() {}, repair() {}, steer() {}, spin() {}, setColor(c) { mats.paint.color.set(c); } };
}
