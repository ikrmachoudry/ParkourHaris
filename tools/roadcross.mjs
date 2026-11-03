import { ROADS, cmbH } from '../public/js/combat.js';
globalThis.window = globalThis;
for (const ri of [0, 4, 7]) { const r = ROADS[ri]; let worst = 0, wp = null;
  for (let i = 0; i + 1 < r.pts.length; i++) { const [ax, az] = r.pts[i], [bx, bz] = r.pts[i + 1], L = Math.hypot(bx - ax, bz - az), nx = -(bz - az) / L, nz = (bx - ax) / L; for (let d = 0; d < L; d += 4) { const x = ax + (bx - ax) * d / L, z = az + (bz - az) * d / L; const a = cmbH(x + nx * r.w / 2, z + nz * r.w / 2), b = cmbH(x - nx * r.w / 2, z - nz * r.w / 2), s = Math.abs(a - b); if (s > worst) { worst = s; wp = [Math.round(x), Math.round(z)]; } } }
  console.log('road', ri, 'max height difference between the two edges', worst.toFixed(2), 'm at', wp); }
{ const r = ROADS[0]; for (const t of [0.0, 0.25, 0.5, 0.75, 1]) { const [ax, az] = r.pts[9], [bx, bz] = r.pts[10]; const x = ax + (bx - ax) * t, z = az + (bz - az) * t; console.log('end seg', Math.round(x), Math.round(z), cmbH(x, z).toFixed(1)); } }
