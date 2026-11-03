// v376: finds same-facing coplanar faces of overlapping wall / floor boxes in a building = z-fighting (white flickery patches). usage: node --import ./tools/mock-register.js tools/zfight.mjs [kind]
import { layout } from '../public/js/combat.js';
const L = layout(), kind = process.argv[2] || 'clinic', E = 0.002;
for (const b of L.buildings.filter((q) => q.kind === kind)) {
  const S = b.solids.filter((s) => s.k === 'wall' || s.k === 'floor' || s.k === 'roof'), out = [];
  const ov = (a0, a1, c0, c1) => Math.min(a1, c1) - Math.max(a0, c0);
  for (let i = 0; i < S.length; i++) for (let j = i + 1; j < S.length; j++) { const a = S[i], c = S[j];
    for (const [ax, lo, hi, o1, o2] of [['x', 'x0', 'x1', ['y0', 'y1'], ['z0', 'z1']], ['y', 'y0', 'y1', ['x0', 'x1'], ['z0', 'z1']], ['z', 'z0', 'z1', ['x0', 'x1'], ['y0', 'y1']]]) {
      const A = ov(a[o1[0]], a[o1[1]], c[o1[0]], c[o1[1]]), B = ov(a[o2[0]], a[o2[1]], c[o2[0]], c[o2[1]]); if (A < 0.02 || B < 0.02) continue;
      if (Math.abs(a[lo] - c[lo]) < E) out.push([ax + '-', a, c, A * B]); if (Math.abs(a[hi] - c[hi]) < E) out.push([ax + '+', a, c, A * B]); } }
  console.log(b.kind, b.x.toFixed(1), b.z.toFixed(1), 'boxes', S.length, 'coplanar same-facing overlaps:', out.length);
  const f = (s) => `${s.k}[${s.x0.toFixed(2)},${s.y0.toFixed(2)},${s.z0.toFixed(2)} .. ${s.x1.toFixed(2)},${s.y1.toFixed(2)},${s.z1.toFixed(2)}]`;
  for (const [ax, a, c, ar] of out.slice(0, 40)) console.log(' ', ax, 'area', ar.toFixed(2), f(a), '|', f(c));
}
