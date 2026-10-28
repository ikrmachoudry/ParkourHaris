// Off-road jeep (4 seats): same interface as hcar.js / htruck.js. Geometry comes from jeepdata.js (decoded once, shared).
import * as THREE from 'three';
import { toCreasedNormals } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { JEEP_DATA as D } from './jeepdata.js';

export const JEEP = { L: 4.1, w: 1.8, wb: 2.54, seatX: -0.3, seatR: 0.4, seatTop: 0.9 };
const dec = (b64, C) => { const s = atob(b64), u = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); return new C(u.buffer); };
const cache = new Map();
const geo = (key, d) => {
  if (cache.has(key)) return cache.get(key);
  const q = dec(d.p, Int16Array), pos = new Float32Array(q.length); for (let i = 0; i < q.length; i++) pos[i] = q[i] / 8000;
  let g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setIndex(new THREE.BufferAttribute(dec(d.i, Uint16Array), 1));
  g = toCreasedNormals(g, 0.75); cache.set(key, g); return g;
};

export function buildJeep({ paint = '#4f6b3a', detail = 'hi' } = {}) {
  void detail;
  const mat = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: o.r ?? 0.7, metalness: o.m ?? 0.1, emissive: o.e || '#000', emissiveIntensity: o.ei || 0, transparent: !!o.t, opacity: o.t ? o.o : 1, depthWrite: !o.t });
  const mats = { paint: mat(paint, { r: 0.55, m: 0.2 }), dark: mat('#2b2e2c', { r: 0.8, m: 0.1 }), tire: mat('#151517', { r: 0.95, m: 0 }), rim: mat('#9a9ea6', { r: 0.4, m: 0.6 }), glass: mat('#a8d4e8', { t: true, o: 0.4, r: 0.1 }),
    head: mat('#fff6d0', { e: '#fff1b0', ei: 0.6 }), tail: mat('#7a1018', { e: '#ff2030', ei: 0.35 }) };
  const g = new THREE.Group();
  const add = (m, parent) => { m.castShadow = true; parent.add(m); return m; };
  for (const k of ['paint', 'dark', 'glass', 'head', 'tail', 'tire', 'rim']) if (D.parts[k]) add(new THREE.Mesh(geo(k, D.parts[k]), mats[k]), g);
  const wheels = [];
  D.wheels.forEach((w, i) => {
    const steer = new THREE.Group(), spin = new THREE.Group(); steer.position.set(w.x, w.y, w.z); steer.add(spin); g.add(steer);
    if (w.tire) add(new THREE.Mesh(geo('wt' + i, w.tire), mats.tire), spin); if (w.rim) add(new THREE.Mesh(geo('wr' + i, w.rim), mats.rim), spin);
    wheels.push({ spin, steer, front: w.front });
  });
  return {
    group: g, mats, lamp: null, police: null,
    setDoor() {}, setLid() {}, dent() {}, hurtLook() {}, repair() {},
    steer(a) { for (const w of wheels) if (w.front) w.steer.rotation.y = a; },
    spin(a) { for (const w of wheels) w.spin.rotation.z = -a * 0.7; },   // tyre radius 0.48 against the 0.34 the animation assumes
    setColor(c) { mats.paint.color.set(c); },
  };
}
