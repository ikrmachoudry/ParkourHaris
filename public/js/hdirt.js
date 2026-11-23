// v607: Haris's own DIRT BIKE (the GLB he downloaded: mid-poly, 2.7k triangles, one orange bike, 512 px texture, 283 KB). Jang only (vehicle id 36).
// Same interface as hbike.js / hcivic.js (group / steer / spin / setColor / repair ...). The file is fetched on the loading screen (preloadDirt); a bike built before it arrives fills in as soon as it has.
// The model is cut into FOUR meshes that share ONE material: frame (body + swing-arm + engine), handlebar + fork (turns about the real steering axis), front wheel, rear wheel -> 4 draw calls per bike.
// Model space (the file): x right, y up, z BACK (the bike faces -z), ground at y = -0.786, wheel radius 0.348, wheelbase 1.39. Car space of the game: +x = nose, +y = up, +z = right.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { loadGlb } from './glbactor.js';

export const DIRT = { L: 2.09, w: 0.8, wb: 1.39, seatTop: 0.99 };
const GROUND = 0.786, MID = -0.085;                                  // model y of the road / model z half way between the axles
const STEER_AXIS = new THREE.Vector3(0.0063, 0.888, 0.458);         // the fork axis (up and back) in model space: through the handlebar pivot and both ends of the front axle
let SRC = null, P = null; const waiting = [];
export function preloadDirt() {
  if (!P) P = loadGlb('models/dirtbike.glb').then((g) => { SRC = g.scene; SRC.updateMatrixWorld(true); for (const f of waiting.splice(0)) f(); }).catch((e) => console.warn('dirtbike', e));
  return P;
}
const part = (o) => { const n = (o.name || '').toLowerCase(); return n.startsWith('throttle') ? 'bar' : n.startsWith('fork') ? 'bar' : n.startsWith('front_wheel') ? 'fw' : n.startsWith('rear_wheel') ? 'rw' : 'body'; };   // body, swingarm, motor and the frame mesh are all 'body'
export function buildDirtBike() {
  const g = new THREE.Group(), inner = new THREE.Group(), steer = new THREE.Group(), fwP = new THREE.Group(), rwP = new THREE.Group(), mats = { paint: null };
  inner.rotation.y = -Math.PI / 2; inner.position.set(MID, GROUND, 0); g.add(inner);   // model -z (nose) -> car +x, centred on the wheelbase, tyres on y = 0
  let ready = false;
  const fill = () => {
    ready = true;
    const by = { body: [], bar: [], fw: [], rw: [] }; let mat = null;
    SRC.updateMatrixWorld(true);
    SRC.traverse((o) => { if (!o.isMesh) return; const k = part(o), ge = o.geometry.clone().applyMatrix4(o.matrixWorld); for (const a of Object.keys(ge.attributes)) if (!['position', 'normal', 'uv'].includes(a)) ge.deleteAttribute(a); by[k].push(ge); mat = mat || o.material; });
    if (!mat) return; mats.paint = mat;
    const pivot = new THREE.Vector3(-0.001, 0.208, -0.446), fa = new THREE.Vector3(-0.006, -0.438, -0.779), ra = new THREE.Vector3(0.002, -0.436, 0.609);   // handlebar pivot, front axle, rear axle (model space)
    const mk = (list, c) => { const ge = mergeGeometries(list.map((q) => (q.index ? q.toNonIndexed() : q)), false); ge.translate(-c.x, -c.y, -c.z); const m = new THREE.Mesh(ge, mat); m.castShadow = true; m.receiveShadow = false; return m; };
    const body = mk(by.body, new THREE.Vector3()); inner.add(body);
    steer.position.copy(pivot); inner.add(steer); steer.add(mk(by.bar, pivot));
    fwP.position.copy(fa).sub(pivot); steer.add(fwP); fwP.add(mk(by.fw, fa));
    rwP.position.copy(ra); inner.add(rwP); rwP.add(mk(by.rw, ra));
    for (const q of [...by.body, ...by.bar, ...by.fw, ...by.rw]) q.dispose();
  };
  if (SRC) fill(); else { waiting.push(fill); preloadDirt(); }
  return {
    group: g, mats, lamp: null, police: null, grips: [], get ready() { return ready; },
    steer(a) { steer.quaternion.setFromAxisAngle(STEER_AXIS, a); },    // a > 0: the nose turns left (about the fork axis)
    spin(a) { fwP.rotation.x = -a; rwP.rotation.x = -a; },             // the axles run along the model x axis
    setDoor() {}, setLid() {}, dent() {}, hurtLook() {}, repair() {}, setColor() {},
  };
}
