// v263: the REAL (mid-poly, shrunk) models of the loot, crates, sandbags, barrels, tank, airdrop and parachute. Every file is under 350 KB and 3.6k triangles (most 400-1500).
// They are fetched on the loading screen; propModel() hands out cheap clones that SHARE the geometry and the material.
import * as THREE from 'three';
import { loadGlb } from './glbactor.js';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
export const PROP_NAMES = ['ammo', 'medkit', 'pills', 'syringe', 'grenade', 'scope', 'smgscope', 'vest', 'helmet', 'goldbox', 'airdrop', 'chute', 'tank', 'barrel', 'crate', 'sandbags', 'sandwall'];
export const PROP_FILES = PROP_NAMES.map((n) => 'models/props/' + n + '.glb');
const S = {}, DIM = {}, PARTS = {};
export const preloadProps = () => Promise.all(PROP_NAMES.map((n) => loadGlb('models/props/' + n + '.glb').then((g) => { S[n] = g.scene; g.scene.updateMatrixWorld(true); const b = new THREE.Box3().setFromObject(g.scene); DIM[n] = b.getSize(new THREE.Vector3()); }, (e) => console.warn('prop', n, e))));
export const hasProp = (n) => !!S[n];
export const propDim = (n) => DIM[n] || null;
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
