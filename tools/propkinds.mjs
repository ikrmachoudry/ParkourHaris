import { layout, distRoad, ROADS } from '../public/js/combat.js';
const L = layout(); const by = {};
for (const p of L.props) { const b = by[p.k] || (by[p.k] = { n: 0, road: 0, ex: [] }); b.n++; const dr = distRoad(p.x, p.z); if (dr < 4) { b.road++; if (b.ex.length < 3) b.ex.push(p.x.toFixed(0) + ',' + p.z.toFixed(0) + ' dr' + dr.toFixed(1) + ' ' + p.w + 'x' + p.d + 'x' + p.h); } }
console.log(Object.entries(by).map(([k, b]) => k + ':' + b.n + (b.road ? '(' + b.road + ' near road)' : '')).join('  '));
for (const k of ['sandbag', 'crate', 'barrel']) console.log(k, JSON.stringify(by[k] && by[k].ex));
console.log('roads', ROADS.length, JSON.stringify(ROADS.map((r) => ({ w: r.w, main: r.main, n: (r.pts || r.p || []).length }))).slice(0, 300));
