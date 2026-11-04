import { layout, cmbH, supportY } from '../public/js/combat.js';
const L = layout(); const SINK = new Set(['container', 'crate', 'sandbag', 'ruin', 'barrel', 'barrier']); const out = {}; let n = 0;
for (const p of L.props) { if (p.k === 'tower') continue; const hw = p.w / 2, hd = p.d / 2; let lo = 1e9; for (const [dx, dz] of [[-hw, -hd], [hw, -hd], [-hw, hd], [hw, hd], [0, 0]]) { const g = cmbH(p.x + dx, p.z + dz); const sup = supportY(L, p.x + dx, p.z + dz, 0.05, p.y + 0.3); lo = Math.min(lo, Math.max(g, sup)); }
  const bottom = p.y - (SINK.has(p.k) ? 0.4 : 0.05), gap = bottom - lo; n++; if (gap > 0.12) (out[p.k] = out[p.k] || []).push([p.x.toFixed(1), p.z.toFixed(1), 'w', p.w, 'd', p.d, 'bottom', bottom.toFixed(2), 'lowest ground', lo.toFixed(2), 'GAP', gap.toFixed(2)].join(' ')); }
console.log('props', n, 'floating (some side >12 cm in the air):', Object.keys(out).map((k) => k + ' ' + out[k].length).join(', ')); for (const k in out) { console.log('--', k); out[k].slice(0, 6).forEach((s) => console.log('  ', s)); }
// trees
let tf = 0; for (const t of L.trees) { const g = cmbH(t.x, t.z); if (t.y - g > 0.6) tf++; } console.log('trees raised >0.6 m above the ground:', tf, 'of', L.trees.length);
