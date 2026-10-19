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
const TOL = +process.env.TOL || 0.12;   // a piece that sticks out of a solid by less than this is hidden by the player's own body (capsule R 0.3, visual half-thickness about 0.2)
const solids = world.solids.filter((s) => s.name !== 'block');
const bad = new Map();
for (const r of recs) {
  if (r.type === 'ExtrudeGeometry') continue;   // stunt ramps are ground height (rampH), not solids
  const h = r.y1 - r.y0, dx = r.x1 - r.x0, dz = r.z1 - r.z0;
  if (!(r.y1 > 0.55 && r.y0 < 1.7 && h >= 0.3 && dx >= 0.12 && dz >= 0.12 && dx < 90 && dz < 90)) continue;
  if (/Plane|Ring|Circle|Sphere|Torus|Cone/.test(r.type) && h < 0.6) continue;
  const lo = Math.max(r.y0, 0.3), hi = Math.min(r.y1, 1.7);
  const near = solids.filter((s) => s.x0 < r.x1 + TOL && s.x1 > r.x0 - TOL && s.z0 < r.z1 + TOL && s.z1 > r.z0 - TOL && s.y0 < hi && s.y1 > lo);
  const st = Math.max(0.1, Math.min(0.25, Math.min(dx, dz) / 6)); let n = 0, miss = 0;
  for (let x = r.x0 + st / 2; x < r.x1; x += st) for (let z = r.z0 + st / 2; z < r.z1; z += st) { n++; if (!near.some((s) => x >= s.x0 - TOL && x <= s.x1 + TOL && z >= s.z0 - TOL && z <= s.z1 + TOL)) miss++; }
  const area = miss * st * st;
  if (n && (miss / n > 0.3 || area > 0.7)) { const k = r.src; const e = bad.get(k) || { n: 0, ex: r, area: 0 }; e.n++; e.area += area; bad.set(k, e); }
}
const out = [...bad.entries()].sort((a, b) => b[1].area - a[1].area);
console.log('visual pieces:', recs.length, ' solids:', solids.length, ' uncovered groups:', out.length);
for (const [k, e] of out.slice(0, +process.env.TOP || 40)) console.log(String(e.n).padStart(4), 'x', e.ex.type.replace('Geometry', ''), 'e.g. size', (e.ex.x1 - e.ex.x0).toFixed(1) + 'x' + (e.ex.y1 - e.ex.y0).toFixed(1) + 'x' + (e.ex.z1 - e.ex.z0).toFixed(1), 'at', e.ex.x0.toFixed(0) + ',' + e.ex.z0.toFixed(0), ' <- ' + k);
