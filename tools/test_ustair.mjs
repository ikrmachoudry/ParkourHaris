// v353: the wide U-stair: walk lane A up, round the landing, down lane B to the next floor, on every U-stair building
import { World } from '../public/js/world.js';
import { newBody, stepBody } from '../public/js/physics.js';
import { layout, CMB, cmbH } from '../public/js/combat.js';
globalThis.window = globalThis;
const L = layout(); const w = new World(); w.terrain = (x, z) => cmbH(x - CMB.x, z - CMB.z);
for (const q of L.solids) w.addStatic(CMB.x + q.x0, q.y0, CMB.z + q.z0, CMB.x + q.x1, q.y1, CMB.z + q.z1, { name: 'building' });
let bad = 0, n = 0;
for (const b of L.buildings) {
  const st = b.stairs; if (!st || st.ax !== 'U') continue; n++;
  const bd = newBody(); const ax = b.x + st.x0 + st.cw / 2, bx = b.x + st.xb0 + st.cw / 2, zs = b.z + st.zE + 0.3, zn = b.z + st.zN + 0.5;
  bd.x = CMB.x + ax; bd.z = CMB.z + zs + 0.5; bd.y = b.fy + 0.02; bd.grounded = true;
  const go = (tx, tz, fr) => { for (let i = 0; i < fr; i++) { const dx = CMB.x + tx - bd.x, dz = CMB.z + tz - bd.z, l = Math.hypot(dx, dz) || 1; w.update(i / 60, 1 / 60); stepBody(w, bd, 1 / 60, { mx: dx / l * Math.min(1, l * 4), mz: dz / l * Math.min(1, l * 4) }); bd.events.length = 0; } };
  go(ax, zs, 60); go(ax, zn, 360); const yTop = bd.y - b.fy; go(bx, zn, 90); go(bx, zs - 0.2, 360);
  const up = yTop > 1.2, ok = bd.y - b.fy > st.rise * 0.8; if (!(up && ok)) { bad++; console.log('FAIL', b.kind, b.x, b.z, 'landing y', yTop.toFixed(2), 'end y', (bd.y - b.fy).toFixed(2), 'rise', st.rise.toFixed(2)); }
}
console.log('U-stair buildings', n, 'failed', bad);
