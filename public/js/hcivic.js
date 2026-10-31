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
