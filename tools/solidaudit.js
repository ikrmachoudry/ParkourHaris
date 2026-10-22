// Finds scenery that a pedestrian could walk into: any visual box/cylinder between ankle and head height whose footprint is not covered by a solid.
// node --import ./tools/mock-register.js tools/clipaudit.js     (prints the uncovered pieces grouped by the source line that created them)
import * as THREE from 'three';
const ctxStub = new Proxy({}, { get: (t, k) => (k === 'measureText' ? () => ({ width: 120 }) : k === 'createLinearGradient' || k === 'createRadialGradient' ? () => ({ addColorStop() {} }) : (typeof k === 'string' ? (() => ctxStub) : undefined)) });
globalThis.document = { createElement: () => ({ width: 0, height: 0, getContext: () => ctxStub, style: {} }), fonts: { load: async () => {} } };
globalThis.window = globalThis;
const W = await import('../public/js/world.js');
const recs = [];
const origAdd = W.Batch.prototype.add;
W.Batch.prototype.add = function (geo, ...a) {
  origAdd.call(this, geo, ...a);
  const g = this.list[this.list.length - 1]; g.computeBoundingBox(); const b = g.boundingBox;
  const fr = new Error().stack.split('\n').slice(2, 5).map((l) => (l.match(/(\w+\.js):(\d+):(\d+)/) || [])[0] || ''); const st = (/^gtaworld\.js:247:/.test(fr[0]) ? fr[1] : fr[0]).replace(/^.*\//, '');
  recs.push({ x0: b.min.x, x1: b.max.x, y0: b.min.y, y1: b.max.y, z0: b.min.z, z1: b.max.z, type: geo.type, src: st, col: a[3] });
};
const { buildLevel } = await import('../public/js/levels.js');
const S = await import('../public/js/scenery.js');
const { world, info } = buildLevel(0, false, null, 1);
const scene = new THREE.Scene(); scene.add(world.group); S.buildScenery(scene, info.key, info, world);
// Finds INVISIBLE solids: a collision box that has no visual piece anywhere near it (the opposite of clipaudit.js).
// node --import ./tools/mock-register.js tools/solidaudit.js
const solids = world.solids.filter((s) => s.active !== false);
const bad = [];
for (const s of solids) {
  const h = s.y1 - s.y0; if (h < 0.05) continue;
  const m = 0.9;
  const vis = recs.some((r) => r.x0 < s.x1 + m && r.x1 > s.x0 - m && r.z0 < s.z1 + m && r.z1 > s.z0 - m && r.y1 > s.y0 - 0.5 && r.y0 < s.y1 + 0.5);
  if (!vis) bad.push(s);
}
console.log('solids', solids.length, 'visual pieces', recs.length, 'solids with NO visual nearby:', bad.length);
for (const s of bad.slice(0, +process.env.TOP || 60)) console.log(' ', (s.name || '-').padEnd(10), 'x', s.x0.toFixed(1), s.x1.toFixed(1), 'z', s.z0.toFixed(1), s.z1.toFixed(1), 'y', s.y0.toFixed(1), s.y1.toFixed(1));
