// v263: the REAL (mid-poly, shrunk) models of the loot, crates, sandbags, barrels, tank, airdrop and parachute. Every file is under 350 KB and 3.6k triangles (most 400-1500).
// They are fetched on the loading screen; propModel() hands out cheap clones that SHARE the geometry and the material.
import * as THREE from 'three';
import { loadGlb } from './glbactor.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
export const PROP_NAMES = ['ammo', 'medkit', 'pills', 'syringe', 'grenade', 'molotov', 'scope', 'smgscope', 'vest', 'helmet', 'goldbox', 'airdrop', 'chute', 'tank', 'barrel', 'crate', 'sandbags', 'sandwall', 'stairs', 'ladder', 'wtower', 'reeds', 'tuft', 'jetpack', 'kit'];
export const PROP_FILES = PROP_NAMES.map((n) => 'models/props/' + n + '.glb');
const S = {}, DIM = {}, PARTS = {};
let PP = null;
export const preloadProps = () => PP || (PP = Promise.all(PROP_NAMES.map((n) => loadGlb('models/props/' + n + '.glb').then((g) => { S[n] = g.scene; g.scene.updateMatrixWorld(true); const b = new THREE.Box3().setFromObject(g.scene); DIM[n] = b.getSize(new THREE.Vector3()); }, (e) => console.warn('prop', n, e)))));
export const hasProp = (n) => !!S[n];
export const propDim = (n) => DIM[n] || null;
// v644: the street / room kit (models/props/kit.glb): twelve Poly Haven CC0 props shrunk to 250-1000 triangles with their colour baked into vertex colours (no texture, one material). kitGeo(name) = a fresh copy of one piece in metres, origin = bottom centre.
const KIT = {};
export function kitGeo(n) {
  if (!S.kit) return null; if (!KIT[n]) { let f = null; S.kit.updateMatrixWorld(true); S.kit.traverse((o) => { if (o.isMesh && (o.name === n || (o.parent && o.parent.name === n))) f = o; }); if (!f) return null;
    const g = f.geometry.clone().applyMatrix4(f.matrixWorld); for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'color'].includes(k)) g.deleteAttribute(k);
    if (g.attributes.color) { const a = g.attributes.color, c = new Float32Array(a.count * 3); for (let i = 0; i < a.count; i++) { c[i * 3] = a.getX(i); c[i * 3 + 1] = a.getY(i); c[i * 3 + 2] = a.getZ(i); } g.setAttribute('color', new THREE.BufferAttribute(c, 3)); }
    g.computeBoundingBox(); KIT[n] = g; }
  return KIT[n].clone();
}
export function propModel(n, tint) {   // a clone that shares geometry + material (tint: a colour string multiplies the texture on a private material copy)
  if (!S[n]) return null; const m = S[n].clone(true);
  if (tint) { const c = new THREE.Color(tint), seen = new Map(); m.traverse((o) => { if (o.isMesh) { let q = seen.get(o.material); if (!q) { q = o.material.clone(); q.color.multiply(c); seen.set(o.material, q); } o.material = q; } }); }
  return m;
}
// the model cut into one geometry per material (model units, origin = bottom centre) so the map can merge many copies into its chunks
export function propParts(n) {
  if (!S[n]) return null; if (PARTS[n]) return PARTS[n];
  const by = new Map(); S[n].updateMatrixWorld(true);
  S[n].traverse((o) => { if (!o.isMesh) return; const g = o.geometry.clone().applyMatrix4(o.matrixWorld); for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k); if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2)); if (!g.attributes.normal) g.computeVertexNormals(); const ng = g.index ? g.toNonIndexed() : g; let a = by.get(o.material); if (!a) by.set(o.material, a = []); a.push(ng); });
  return PARTS[n] = [...by].map(([mat, gs]) => ({ mat, geo: mergeGeometries(gs, false) }));
}
