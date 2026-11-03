// v336: HEADROOM test - walks every building with a flood fill of what a player can reach (step 0.34, jump 0.72, body 0.3 x 1.78) and fails if anybody can stand where a ceiling is lower than his body (sitting between two layers)
import { layout, cmbH } from '../public/js/combat.js';
const L = layout(); const R = 0.3, H = 1.78, STEP = 0.34, JUMP = 0.72, G = 0.5;
const solids = L.solids.filter(s => s.k !== 'tree' && s.k !== 'cliff' || true);
// spatial index 4m
const idx = new Map(); const key = (i, j) => i * 100003 + j; for (const s of solids) { for (let i = Math.floor(s.x0 / 4); i <= Math.floor(s.x1 / 4); i++) for (let j = Math.floor(s.z0 / 4); j <= Math.floor(s.z1 / 4); j++) { const k = key(i, j); (idx.get(k) || idx.set(k, []).get(k)).push(s); } }
const near = (x, z) => idx.get(key(Math.floor(x / 4), Math.floor(z / 4))) || [];
const blocked = (x, z, t) => { for (const s of near(x, z)) { if (s.y1 <= t + STEP || s.y0 >= t + H) continue; if (x > s.x0 - R && x < s.x1 + R && z > s.z0 - R && z < s.z1 + R) return true; } return false; };
const tops = (x, z) => { const o = [cmbH(x, z)]; for (const s of near(x, z)) if (x > s.x0 - 0.28 && x < s.x1 + 0.28 && z > s.z0 - 0.28 && z < s.z1 + 0.28) o.push(s.y1); return o; };
const res = new Map(); let reachableTotal = 0;
for (const B of L.buildings) { const x0 = B.x - B.w / 2 - 6, x1 = B.x + B.w / 2 + 6, z0 = B.z - B.d / 2 - 6, z1 = B.z + B.d / 2 + 6; const nx = Math.round((x1 - x0) / G), nz = Math.round((z1 - z0) / G);
  const seen = new Set(); const q = []; const id = (i, j, t) => i + ',' + j + ',' + Math.round(t * 20);
  const add = (i, j, t) => { const k = id(i, j, t); if (seen.has(k)) return; seen.add(k); q.push([i, j, t]); };
  for (let i = 0; i <= nx; i++) for (let j = 0; j <= nz; j++) if (i === 0 || j === 0 || i === nx || j === nz) { const x = x0 + i * G, z = z0 + j * G, t = cmbH(x, z); if (!blocked(x, z, t)) add(i, j, t); }
  let head = 0; const info = [];
  while (head < q.length && q.length < 400000) { const [i, j, t] = q[head++]; const x = x0 + i * G, z = z0 + j * G; info.push([x, z, t]);
    for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]]) { const ni = i + di, nj = j + dj; if (ni < 0 || nj < 0 || ni > nx || nj > nz) continue; const x2 = x0 + ni * G, z2 = z0 + nj * G;
      for (const t2 of tops(x2, z2)) { if (t2 - t > JUMP) continue; if (blocked(x2, z2, t2)) continue; if (t2 < t - 0.01 && false) continue; add(ni, nj, t2); } } }
  reachableTotal += info.length;
  // summarise reachable surfaces that are well above the terrain
  for (const [x, z, t] of info) { const rel = t - B.fy; if (rel < 1.0) continue; // above ground
    // overhead clearance
    let clr = 99; for (const s of near(x, z)) { if (x > s.x0 - R && x < s.x1 + R && z > s.z0 - R && z < s.z1 + R && s.y0 >= t + H - 0.01) clr = Math.min(clr, s.y0 - t); }
    const k = B.kind + '@' + Math.round(B.x) + ',' + Math.round(B.z) + ' rel' + (Math.round(rel * 5) / 5).toFixed(1) + (clr < 2.05 ? ' CRAMPED clr' + clr.toFixed(2) : ''); res.set(k, (res.get(k) || 0) + 1); } }
let bad = 0; for (const [k, n] of res) { const m = /clr([\d.]+)/.exec(k); if (m && +m[1] < 1.79) { bad += n; console.log('FAIL', n, k); } }
console.log('reachable states', reachableTotal, '- props capped under ceilings:', L.headFix);
console.log(bad ? 'FAILED ' + bad : 'PASS nobody can stand with a ceiling lower than his head'); process.exit(bad ? 1 : 0);
