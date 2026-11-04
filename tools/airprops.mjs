// v391: lists props that hang in the air (nothing solid within 0.25 m below their base). usage: node --import ./tools/mock-register.js tools/airprops.mjs
import { layout, cmbH, supportY } from '../public/js/combat.js';
const L = layout(); const out = {}; let n = 0;
for (const p of L.props) { if (p.k === 'tower' || p.k === 'tank' || p.k === 'silo') continue; const g = cmbH(p.x, p.z); let sup = Math.max(g, supportY(L, p.x, p.z, Math.min(p.w, p.d) * 0.3, p.y + 0.3)); const gap = p.y - sup; n++; if (gap > 0.25) (out[p.k] = out[p.k] || []).push([p.x.toFixed(1), p.z.toFixed(1), 'y', p.y.toFixed(2), 'support', sup.toFixed(2), 'gap', gap.toFixed(2)].join(' ')); }
console.log('props', n, 'kinds in air:', Object.keys(out).map((k) => k + ' ' + out[k].length).join(', ')); for (const k in out) { console.log('--', k); out[k].slice(0, 8).forEach((s) => console.log('  ', s)); }
