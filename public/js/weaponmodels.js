// Standalone 3D weapon models (baseball bat, pistol, AK-47) for the shop walls. Gun frame: +z = barrel, +y = up, origin = grip.
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { clone as skClone } from 'three/examples/jsm/utils/SkeletonUtils.js';
import GUNS from './guns.json' with { type: 'json' };   // the seven real low-poly guns (Ultimate Gun Pack by Quaternius, CC0), pre-converted to flat-coloured triangles in millimetres

const M = {};
const mat = (k, o) => M[k] || (M[k] = new THREE.MeshStandardMaterial(o));
const steel = () => mat('steel', { color: '#2c2f34', roughness: 0.35, metalness: 0.85 });
const black = () => mat('black', { color: '#121214', roughness: 0.6, metalness: 0.3 });
const wood = () => mat('wood', { color: '#c4915a', roughness: 0.55, metalness: 0.02 });
const dwood = () => mat('dwood', { color: '#7a4421', roughness: 0.55, metalness: 0.02 });
const part = (g, w, h, d, x, y, z, m, rx = 0) => { const q = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); q.position.set(x, y, z); q.rotation.x = rx; g.add(q); return q; };
const cyl = (g, r0, r1, len, x, y, z, m, axis = 'z') => { const q = new THREE.Mesh(new THREE.CylinderGeometry(r0, r1, len, 10), m); if (axis === 'z') q.rotation.x = Math.PI / 2; q.position.set(x, y, z); g.add(q); return q; };

export function makeWeaponModel(kind) {
  { const gm = gunMesh(kind); if (gm) return gm; }
  const g = new THREE.Group();
  if (kind === 'pistol') {
    part(g, 0.032, 0.04, 0.2, 0, 0.074, 0.03, steel()); part(g, 0.028, 0.03, 0.14, 0, 0.044, 0.01, black()); part(g, 0.032, 0.11, 0.046, 0, 0, -0.012, black(), -0.12);
    part(g, 0.007, 0.034, 0.05, 0, 0.034, 0.05, black()); part(g, 0.01, 0.014, 0.012, 0, 0.098, 0.115, steel()); part(g, 0.014, 0.012, 0.012, 0, 0.098, -0.055, steel()); cyl(g, 0.0085, 0.0085, 0.03, 0, 0.074, 0.14, steel());
  } else if (kind === 'ak') {
    part(g, 0.045, 0.07, 0.34, 0, 0.07, 0.12, steel()); part(g, 0.04, 0.04, 0.24, 0, 0.065, 0.4, dwood()); part(g, 0.036, 0.022, 0.2, 0, 0.115, 0.38, black());
    part(g, 0.03, 0.12, 0.05, 0, -0.01, 0, dwood(), -0.2); part(g, 0.034, 0.17, 0.07, 0, -0.03, 0.2, black(), 0.35); part(g, 0.04, 0.09, 0.3, 0, 0.04, -0.26, dwood(), 0.12);
    part(g, 0.008, 0.035, 0.008, 0, 0.14, 0.52, steel()); part(g, 0.01, 0.025, 0.012, 0, 0.14, 0.14, steel()); cyl(g, 0.0085, 0.0085, 0.2, 0, 0.075, 0.62, steel());
  } else if (kind === 'sniper') {   // long barrel, scope on top, wooden stock (same gun frame as the pistol: +z = barrel)
    part(g, 0.04, 0.07, 0.4, 0, 0.07, 0.1, black()); part(g, 0.05, 0.09, 0.34, 0, 0.04, -0.3, dwood(), 0.08); part(g, 0.03, 0.12, 0.05, 0, -0.01, 0, dwood(), -0.2); part(g, 0.03, 0.12, 0.06, 0, -0.03, 0.22, black(), 0.3);
    cyl(g, 0.011, 0.011, 0.62, 0, 0.085, 0.7, steel()); cyl(g, 0.024, 0.024, 0.3, 0, 0.17, 0.1, black()); cyl(g, 0.032, 0.032, 0.05, 0, 0.17, 0.27, black()); part(g, 0.012, 0.05, 0.02, 0, 0.12, 0.05, black()); part(g, 0.012, 0.05, 0.02, 0, 0.12, 0.2, black());
  } else if (kind === 'grenade') {   // olive hand grenade with a spoon lever and a pin ring: origin = the centre of the body
    const gm = mat('nade', { color: '#4d6128', roughness: 0.6, metalness: 0.25 }), body = new THREE.Mesh(new THREE.SphereGeometry(0.06, 14, 10), gm); body.scale.y = 1.2; g.add(body);
    for (const y of [-0.035, 0, 0.035]) { const r = new THREE.Mesh(new THREE.TorusGeometry(0.0585 * Math.sqrt(1 - (y / 0.072) ** 2), 0.004, 5, 18), black()); r.rotation.x = Math.PI / 2; r.position.y = y; g.add(r); }
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.022, 0.045, 10), steel()); cap.position.y = 0.092; g.add(cap);
    const lev = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.09, 0.028), steel()); lev.position.set(0.042, 0.065, 0); lev.rotation.z = -0.12; g.add(lev);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.017, 0.003, 5, 12), steel()); ring.position.set(-0.025, 0.105, 0); g.add(ring);
  } else {   // bat: the long axis is y here; the caller lays it down
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.016, 0.8, 12), wood()); body.position.y = 0.3; g.add(body);
    const knob = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.03, 10), wood()); knob.position.y = -0.11; g.add(knob);
    const tip = new THREE.Mesh(new THREE.SphereGeometry(0.036, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), wood()); tip.position.y = 0.7; g.add(tip);
    const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.0185, 0.0185, 0.2, 10), black()); grip.position.y = -0.0; g.add(grip);
  }
  return g;
}

// a gun from the pack as a THREE group: gun frame +z = barrel, +y = up, origin = grip; null when the pack has no such gun.  kind: pistol revolver smg ak m4 shotgun sniper
const GEO = {}, GMAT = {};
// the detailed guns (Sketchfab, CC BY: see the credits in the pause menu): loaded on first use, then they replace the flat-coloured stand-ins. models/guns/manifest.json holds each gun's frame matrix.
const GLB = {}; let MAN = null;
const glbGun = (kind) => GLB[kind] || (GLB[kind] = (typeof document === 'undefined' ? Promise.resolve(null) : (MAN || (MAN = fetch('models/guns/manifest.json').then((r) => r.json()).catch(() => ({}))))).then((man) => !man || !man[kind] ? null : new Promise((res) => new GLTFLoader().load('models/guns/' + kind + '.glb', (g) => {
  g.scene.traverse((o) => { if (o.isMesh) { o.castShadow = false; o.frustumCulled = false; (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => { if (m && m.map) m.map.colorSpace = THREE.SRGBColorSpace; if (m && m.metalness > 0.6) m.metalness = 0.6; }); } });
  g.scene.applyMatrix4(new THREE.Matrix4().fromArray(man[kind])); res(g.scene);
}, undefined, () => res(null)))));
export function gunMesh(kind) {
  const d = GUNS[kind]; if (!d) return null; const g = new THREE.Group();
  if (!GEO[kind]) GEO[kind] = d.g.map(([r, gg, b, s, k]) => { const geo = new THREE.BufferGeometry(); const a = new Float32Array(k * 3); for (let i = 0; i < k * 3; i++) a[i] = d.p[s * 3 + i] / 1000; geo.setAttribute('position', new THREE.BufferAttribute(a, 3)); geo.computeVertexNormals(); return { geo, key: r + ',' + gg + ',' + b, c: [r, gg, b] }; });
  for (const { geo, key, c } of GEO[kind]) { const m = GMAT[key] || (GMAT[key] = new THREE.MeshStandardMaterial({ color: new THREE.Color().setRGB(Math.min(1, c[0] * 1.5 + 0.03), Math.min(1, c[1] * 1.5 + 0.03), Math.min(1, c[2] * 1.5 + 0.03), THREE.LinearSRGBColorSpace), roughness: 0.55, metalness: 0.25, flatShading: true })); const me = new THREE.Mesh(geo, m); me.castShadow = true; g.add(me); }
  glbGun(kind).then((src) => { if (!src) return; g.clear(); g.add(skClone(src)); });
  return g;
}
