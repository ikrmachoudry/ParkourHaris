// v269: the black Honda Civic Si coupe (the GLB from Haris's garage). Same interface as hjeep.js / hcar.js. The file (3.6 MB) is fetched the first time a Civic is built; the car appears when it has arrived.
// Model space: +z nose, +x right, y up, ground at y = 0.0713. Wheels are cut out of the body (rim + tyre + disc) and hung on a steering pivot + a spin pivot.
import * as THREE from 'three';
import { loadGlb } from './glbactor.js';
export const CIVIC = { L: 4.47, w: 1.95, wb: 2.6, seatX: -0.25, seatR: 0.38, seatTop: 0.75 };
let SRC = null, P = null; const waiting = [];
const BODY = new THREE.MeshStandardMaterial({ color: '#14141a', roughness: 0.35, metalness: 0.25 });   // placeholder for the paint material until the file is in
function prep(sc) {
  sc.traverse((o) => { if (!o.isMesh) return; o.castShadow = true; const m = o.material; if (!m) return;
    if (m.name === 'CIVIC13') { m.color.set('#0c0c10'); m.roughness = 0.35; m.metalness = 0.25; }   // the paint: BLACK (it was red)
    if (m.name === 'glass') { m.transparent = true; m.opacity = 0.35; m.depthWrite = false; } });
}
export function preloadCivic() {
  if (!P) P = loadGlb('models/civic.glb').then((g) => { SRC = g.scene; prep(SRC); SRC.updateMatrixWorld(true); for (const f of waiting.splice(0)) f(); }).catch((e) => console.warn('civic', e));
  return P;
}
export function buildCivic({ detail = 'hi' } = {}) {
  void detail;
  const g = new THREE.Group(), inner = new THREE.Group(), wheels = [], mats = { paint: BODY };
  inner.rotation.y = Math.PI / 2; g.add(inner);   // model +z (nose) -> car space +x
  const fill = () => {
    const m = SRC.clone(true), parts = [];
    m.scale.setScalar(100); m.position.y = -0.0713; m.updateMatrixWorld(true);   // the file is in centimetres / 100: its own nodes scale it by 0.01, so x100 gives metres (4.47 m long)
    m.traverse((o) => { if (o.isMesh && o.material && /^(CIVIC13_rin|llanta|disk)$/.test(o.material.name)) parts.push(o); });
    const by = new Map();
    for (const o of parts) { const b = new THREE.Box3().setFromObject(o), c = b.getCenter(new THREE.Vector3()), k = (c.x > 0 ? 'r' : 'l') + (c.z > 0 ? 'f' : 'b'); let e = by.get(k); if (!e) by.set(k, e = { box: new THREE.Box3(), list: [] }); e.box.union(b); e.list.push(o); }
    inner.add(m);
    for (const [k, e] of by) { const c = e.box.getCenter(new THREE.Vector3()), steer = new THREE.Group(), spin = new THREE.Group(); steer.position.copy(c); steer.add(spin); inner.add(steer); wheels.push({ steer, spin, front: k[1] === 'f', list: e.list }); }
    g.updateMatrixWorld(true);
    for (const w of wheels) for (const o of w.list) w.spin.attach(o);
    mats.paint = BODY;
    m.traverse((o) => { if (!o.isMesh || !o.material) return; const nm = o.material.name; if (nm === 'CIVIC13_luz2' || nm === 'CIVIC13_luz') { o.material = o.material.clone(); const mt = o.material; mt.emissive = new THREE.Color(nm === 'CIVIC13_luz2' ? '#fff1b8' : '#ff2a2a'); mt.emissiveIntensity = nm === 'CIVIC13_luz2' ? 0.15 : 0.1; if (nm === 'CIVIC13_luz2') mats.head = mt; else { mats.tail = mt; mt.color.set('#0c0404'); mt.emissive.set('#240606'); mt.emissiveIntensity = 0.1; } } });
    /* v309: Haris's real Civic (8th gen) has ROUND tail lamps, two per side: round red lamp discs sit on the rear of the model (the file itself is untouched); they follow the brake / light button through mats.tail.userData.twin */
    { const dm = new THREE.MeshStandardMaterial({ color: '#7a0b0b', roughness: 0.25, metalness: 0.1, emissive: new THREE.Color('#ff1a1a'), emissiveIntensity: 0.35 }), rim = new THREE.MeshStandardMaterial({ color: '#1a0606', roughness: 0.5 }), gd = new THREE.CircleGeometry(0.062, 28), gr = new THREE.CircleGeometry(0.076, 28);
      for (const sd of [-1, 1]) for (const zz of [0.45, 0.61]) { const z = sd * zz, y = 0.79, xo = zz > 0.55 ? 0.03 : 0;
        const r1 = new THREE.Mesh(gr, rim); r1.position.set(-2.105 + xo, y, z); r1.rotation.y = -Math.PI / 2; g.add(r1);
        const d1 = new THREE.Mesh(gd, dm); d1.position.set(-2.111 + xo, y, z); d1.rotation.y = -Math.PI / 2; g.add(d1); }
      if (mats.tail) { mats.tail.userData.twin = dm; mats.tail.userData.twin0 = 0.35; } }   // v278: headlamps + tail lamps light up with the L / lights button
  };
  if (SRC) fill(); else { waiting.push(fill); preloadCivic(); }
  return {
    group: g, mats, lamp: null, police: null,
    setDoor() {}, setLid() {}, dent() {}, hurtLook() {}, repair() {},
    steer(a) { for (const w of wheels) if (w.front) w.steer.rotation.y = a; },
    spin(a) { for (const w of wheels) w.spin.rotation.x = a * 0.78; },
    setColor() {},   // always black
  };
}
