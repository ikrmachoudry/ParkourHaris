const NB = +process.env.NB || 0.7, LIFT = +process.env.LIFT || 0.05, STEP = +process.env.STEP || 1.5;
import { ROADS, cmbG } from '../public/js/combat.js';
globalThis.window = globalThis;
const spline = (pts) => { if (pts.length < 3) return pts; const out = []; for (let i = 0; i + 1 < pts.length; i++) { const p0 = pts[Math.max(0, i - 1)], p1 = pts[i], p2 = pts[i + 1], p3 = pts[Math.min(pts.length - 1, i + 2)]; for (let t = 0; t < 1; t += 0.125) { const t2 = t * t, t3 = t2 * t, f = (a, b, c, d) => 0.5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3); out.push([f(p0[0], p1[0], p2[0], p3[0]), f(p0[1], p1[1], p2[1], p3[1])]); } } out.push(pts[pts.length - 1]); return out; };
const sample = (pts, step) => { const out = []; for (let i = 0; i + 1 < pts.length; i++) { const [ax, az] = pts[i], [bx, bz] = pts[i + 1], n = Math.max(1, Math.ceil(Math.hypot(bx - ax, bz - az) / step)); for (let k = 0; k < n; k++) out.push([ax + (bx - ax) * k / n, az + (bz - az) * k / n]); } out.push(pts[pts.length - 1]); return out; };
const Y = (x, z) => Math.max(cmbG(x, z), cmbG(x + NB, z), cmbG(x - NB, z), cmbG(x, z + NB), cmbG(x, z - NB)) + LIFT;
ROADS.forEach((r, ri) => { const pts = sample(spline(r.pts), STEP); let worst = 0, sum = 0, n = 0, over = 0;
  for (let i = 1; i + 1 < pts.length; i++) { const a = pts[i - 1], b = pts[i + 1], p = pts[i], L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1, nx = -(b[1] - a[1]) / L, nz = (b[0] - a[0]) / L;
    for (const o of [-r.w / 2, 0, r.w / 2]) { const x = p[0] + nx * o, z = p[1] + nz * o, e = Y(x, z) - cmbG(x, z); worst = Math.max(worst, e); sum += e; n++; if (e > 0.12) over++; } }
  console.log('road', ri, 'road above the walking surface: avg', (sum / n).toFixed(3), 'max', worst.toFixed(2), '| over 12 cm:', (100 * over / n).toFixed(1) + '%'); });
