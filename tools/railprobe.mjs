// v372: finds floors cut into pieces by banisters / guard rails (a pocket you cannot walk to without vaulting).
// node --import ./tools/mock-register.js tools/railprobe.mjs
import { layout, hitsSolid } from '../public/js/combat.js';
const L = layout(), R = 0.3, CS = 0.3, out = [];
for (const b of L.buildings) {
  const nf = b.fl || 1; const SL = 0.3;
  for (let f = 0; f < nf; f++) {
    const y = b.fy + f * (b.fh + SL) + 0.06, hw = b.w / 2 - 0.5, hd = b.d / 2 - 0.5, nx = Math.floor(2 * hw / CS), nz = Math.floor(2 * hd / CS);
    const ok = new Uint8Array(nx * nz), comp = new Int32Array(nx * nz);
    for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++) { const x = b.x - hw + i * CS, z = b.z - hd + j * CS; ok[i * nz + j] = hitsSolid(L, x, z, R, y) ? 0 : 1; }
    let n = 0; const sizes = [];
    for (let s = 0; s < nx * nz; s++) { if (!ok[s] || comp[s]) continue; n++; let c = 0; const st = [s]; comp[s] = n; while (st.length) { const q = st.pop(); c++; const i = (q / nz) | 0, j = q % nz; for (const [di, dj] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const a = i + di, d = j + dj; if (a < 0 || d < 0 || a >= nx || d >= nz) continue; const k = a * nz + d; if (ok[k] && !comp[k]) { comp[k] = n; st.push(k); } } } sizes.push(c); }
    const big = sizes.map((c) => c * CS * CS).filter((a) => a > 2.5);
    if (big.length > 1) out.push([b.kind, Math.round(b.x), Math.round(b.z), 'floor', f, 'pieces(m2):', big.map((a) => a.toFixed(0)).join('+')]);
  }
}
console.log('buildings', L.buildings.length, 'floors cut into separate pieces:', out.length); for (const o of out) console.log(' ', o.join(' '));
