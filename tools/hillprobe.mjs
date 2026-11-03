// v368: HILL CLIPPING probe (Jang map): checks, over the whole map, where things meet sloping ground.
// node --import ./tools/mock-register.js tools/hillprobe.mjs
import { layout, cmbH, cmbG, setMeshStep } from '../public/js/combat.js';
const L = layout(); setMeshStep(+process.env.STEP || 5);
console.log('layout keys', Object.keys(L).join(','));
const slope = (x, z) => Math.hypot(cmbH(x + 1, z) - cmbH(x - 1, z), cmbH(x, z + 1) - cmbH(x, z - 1)) / 2;
// 1. buildings: terrain just outside each wall vs the floor
let gaps = [], buried = [];
for (const b of L.buildings) {
  const hw = b.w / 2, hd = b.d / 2, pts = [];
  for (let t = -1; t <= 1.001; t += 0.25) { pts.push([b.x + t * hw, b.z - hd - 0.4], [b.x + t * hw, b.z + hd + 0.4], [b.x - hw - 0.4, b.z + t * hd], [b.x + hw + 0.4, b.z + t * hd]); }
  let lo = 1e9, hi = -1e9; for (const [x, z] of pts) { const h = cmbG(x, z); lo = Math.min(lo, h - b.fy); hi = Math.max(hi, h - b.fy); }
  if (lo < -0.55) gaps.push([b.kind, Math.round(b.x), Math.round(b.z), lo.toFixed(2)]);
  if (hi > 0.25) buried.push([b.kind, Math.round(b.x), Math.round(b.z), hi.toFixed(2)]);
}
console.log('buildings', L.buildings.length, '| ground drops > 0.55 m below the floor beside a wall (gap / floating):', gaps.length, '| ground rises > 0.25 m above the floor beside a wall (buried):', buried.length);
console.log(' gaps', JSON.stringify(gaps.slice(0, 12))); console.log(' buried', JSON.stringify(buried.slice(0, 12)));
// 2. trees on steep ground
const t0 = L.trees[0]; console.log('tree sample', JSON.stringify(t0));
let steepT = 0; for (const t of L.trees) if (slope(t.x, t.z) > 0.7) steepT++; console.log('trees on slope > 35 deg:', steepT, '/', L.trees.length);
// 3. props / solids that rest on the ground: bottom above or below the ground
let floating = [], sunk = [];
for (const s of L.solids) { if (s.k !== 'prop') continue; const cx = (s.x0 + s.x1) / 2, cz = (s.z0 + s.z1) / 2; let lo = 1e9, hi = -1e9; for (const [x, z] of [[s.x0, s.z0], [s.x1, s.z0], [s.x0, s.z1], [s.x1, s.z1], [cx, cz]]) { const h = cmbG(x, z); lo = Math.min(lo, h); hi = Math.max(hi, h); }
  if (s.y0 - lo > 0.5 && s.y0 > -50) floating.push([Math.round(cx), Math.round(cz), (s.y0 - lo).toFixed(2), (s.y1 - s.y0).toFixed(1)]); if (hi - s.y0 > 0.6) sunk.push([Math.round(cx), Math.round(cz), (hi - s.y0).toFixed(2)]); }
console.log('props floating >0.5 m above the ground at their lowest corner:', floating.length, JSON.stringify(floating.slice(0, 8)), '| props with ground >0.6 m above their base:', sunk.length, JSON.stringify(sunk.slice(0, 8)));
// 4. loot / spawns
let lootBad = 0; for (const s of L.spots) { const g = cmbG(s.x, s.z); if (s.y != null && Math.abs(s.y - g) > 0.6 && s.y < g + 0.3) lootBad++; } console.log('loot spots below the ground:', lootBad);
// 5. mesh step vs exact ground difference (phone step 5 vs laptop step 3)
let worst = 0, wx = 0, wz = 0; for (let x = -300; x < 300; x += 1.7) for (let z = -300; z < 300; z += 1.7) { setMeshStep(5); const a = cmbG(x, z); setMeshStep(3); const b = cmbG(x, z); const d = Math.abs(a - b); if (d > worst) { worst = d; wx = x; wz = z; } } console.log('phone mesh (5 m) vs laptop mesh (3 m): worst height difference', worst.toFixed(2), 'm at', Math.round(wx), Math.round(wz));
setMeshStep(5); let worst2 = 0; for (let x = -300; x < 300; x += 1.3) for (let z = -300; z < 300; z += 1.3) { const d = Math.abs(cmbG(x, z) - cmbH(x, z)); if (d > worst2) worst2 = d; } console.log('phone mesh vs exact ground: worst', worst2.toFixed(2), 'm');
