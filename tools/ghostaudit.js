// Finds invisible car obstacles: collision boxes/props with no visual under them, plus inland dips that act like sea for cars.
// node --import ./tools/mock-register.js tools/ghostaudit.js
import * as THREE from 'three';
const ctxStub = new Proxy({}, { get: (t, k) => (k === 'measureText' ? () => ({ width: 120 }) : k === 'createLinearGradient' || k === 'createRadialGradient' ? () => ({ addColorStop() {} }) : (typeof k === 'string' ? (() => {}) : undefined)) });
globalThis.document = { createElement: () => ({ width: 0, height: 0, getContext: () => ctxStub, style: {} }), fonts: { load: async () => {} } };
globalThis.window = globalThis;
const W = await import('../public/js/world.js');
const recs = []; const origAdd = W.Batch.prototype.add;
W.Batch.prototype.add = function (geo, ...a) { origAdd.call(this, geo, ...a); const g = this.list[this.list.length - 1]; g.computeBoundingBox(); const b = g.boundingBox; recs.push({ x0: b.min.x, x1: b.max.x, y0: b.min.y, y1: b.max.y, z0: b.min.z, z1: b.max.z }); };
const { buildLevel } = await import('../public/js/levels.js');
const S = await import('../public/js/scenery.js');
const { world, info } = buildLevel(0, false, null, 1);
const scene = new THREE.Scene(); scene.add(world.group); try { S.buildScenery(scene, info.key, info, world); } catch (e) { console.log("scenery err", e.message); }
const { gtaBuildings } = await import('../public/js/gta.js'); const BLD = gtaBuildings(); const tr = info.track; const T = tr.terrain;
const all = [...(tr.boxes || []).map((b) => ({ ...b, k: 'box' })), ...(tr.props || []).map((b) => ({ ...b, k: 'prop' }))];
let ghosts = 0;
for (const b of all) {
  if (b.h < 0.4) continue;
  if (BLD.some((q) => Math.abs((q.x - q.w / 2) - b.x0) < 0.6 && Math.abs((q.x + q.w / 2) - b.x1) < 0.6 && Math.abs((q.z - q.d / 2) - b.z0) < 0.6)) continue;
  const m = 0.6; const vis = recs.some((r) => r.x0 < b.x1 + m && r.x1 > b.x0 - m && r.z0 < b.z1 + m && r.z1 > b.z0 - m && r.y1 > 0.3 && r.y0 < b.h + 0.5);
  if (!vis) { ghosts++; console.log('GHOST', b.k, 'x', b.x0.toFixed(1), b.x1.toFixed(1), 'z', b.z0.toFixed(1), b.z1.toFixed(1), 'h', b.h.toFixed(1)); }
}
console.log('boxes+props', all.length, 'ghosts', ghosts, 'visual recs', recs.length);
// inland dips below the sea threshold (-0.8) that are not the real coast
let dips = 0; const seen = [];
for (let x = -535; x <= 535; x += 3) for (let z = -535; z <= 535; z += 3) { if (T(x, z) < -0.8 && Math.max(Math.abs(x), Math.abs(z)) < 470) { const edge = Math.max(Math.abs(x), Math.abs(z)); seen.push([x, z, T(x, z), edge]); } }
console.log('terrain cells below sea level:', seen.length);
const grid = new Map(); for (const [x, z, h] of seen) { const k = Math.round(x / 60) + ',' + Math.round(z / 60); const e = grid.get(k) || { n: 0, x, z, h }; e.n++; grid.set(k, e); }
for (const [k, e] of grid) console.log(' water region', k, 'cells', e.n, 'e.g.', e.x, e.z, e.h.toFixed(1));
