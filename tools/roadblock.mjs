// props that sit on / right beside a road (a prop whose footprint reaches within 1 m of the road edge)
import { layout, distRoad } from '../public/js/combat.js';
const L = layout(), bad = {};
for (const p of L.props) { const r = Math.max(p.w, p.d) / 2, dr = distRoad(p.x, p.z); if (dr < r + 1.0) { (bad[p.k] || (bad[p.k] = [])).push(p.x.toFixed(0) + ',' + p.z.toFixed(0) + ' dr' + dr.toFixed(1) + ' ' + p.w + 'x' + p.d); } }
let n = 0; for (const k in bad) { n += bad[k].length; console.log(k, bad[k].length, JSON.stringify(bad[k].slice(0, 6))); }
console.log('props near/on roads:', n, 'of', L.props.length);
