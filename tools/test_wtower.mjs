// v564: the watch towers: walk up the stair into the cabin (real player physics), hide behind the sill, shoot through the windows, towers do not overlap anything
import { World } from '../public/js/world.js';
import { newBody, stepBody } from '../public/js/physics.js';
import { layout, CMB, cmbH, rayWalls, hitsSolid } from '../public/js/combat.js';
globalThis.window = globalThis;
const L = layout(); const w = new World(); w.terrain = (x, z) => cmbH(x - CMB.x, z - CMB.z);
for (const q of L.solids) w.addStatic(CMB.x + q.x0, q.y0, CMB.z + q.z0, CMB.x + q.x1, q.y1, CMB.z + q.z1, { name: 'x' });
let bad = 0; const ck = (c, m) => { if (!c) { bad++; console.log('FAIL', m); } };
console.log('watch towers', L.wtowers.length); ck(L.wtowers.length >= 6, 'at least 6 towers placed');
for (const t of L.wtowers) {
  const th = t.rot * Math.PI / 2, c = Math.round(Math.cos(th)), s = Math.round(Math.sin(th)), W = (a, b) => [t.x + a * c - b * s, t.z + a * s + b * c];
  const bd = newBody(); const [sx, sz] = W(0.56, 4.4); bd.x = CMB.x + sx; bd.z = CMB.z + sz; bd.y = t.gy + 0.02; bd.grounded = true;
  const go = (tx, tz, fr) => { for (let i = 0; i < fr; i++) { const dx = CMB.x + tx - bd.x, dz = CMB.z + tz - bd.z, l = Math.hypot(dx, dz) || 1; w.update(i / 60, 1 / 60); stepBody(w, bd, 1 / 60, { mx: dx / l * Math.min(1, l * 4), mz: dz / l * Math.min(1, l * 4), jump: false, run: false }); } };
  const [ux, uz] = W(0.56, 1.7), [cx, cz] = W(0, 0);
  go(...W(0.56, 3.6), 120); const y0 = bd.y - t.gy; go(ux, uz, 480); const yTop = bd.y - t.gy; go(cx, cz, 240); const yIn = bd.y - t.gy;
  ck(yTop > 2.7, 'tower ' + t.x + ',' + t.z + ' stair climbed (y ' + yTop.toFixed(2) + ' at the top, ' + y0.toFixed(2) + ' at the foot)'); ck(Math.abs(yIn - 3.06) < 0.15, 'tower ' + t.x + ',' + t.z + ' standing in the cabin at ' + yIn.toFixed(2) + ' (floor 3.06)');
  // shooting: from the cabin centre towards the nearest window on the side: standing height passes, lying / crouching is covered
  const [ox, oz] = W(0, 0), [dx, dz] = [-s * 0 + c * 1, s * 1], hi = rayWalls(L, ox, oz, dx, dz, 30, undefined, t.fy + 1.55), lo = rayWalls(L, ox, oz, dx, dz, 30, undefined, t.fy + 0.6);
  ck(hi > 20, 'tower ' + t.x + ',' + t.z + ' standing eye line passes the window (' + hi.toFixed(1) + ')'); ck(lo < 3, 'tower ' + t.x + ',' + t.z + ' a crouched / low shot is stopped by the sill (' + lo.toFixed(1) + ')');
}
console.log(bad ? 'WTOWER FAIL ' + bad : 'WTOWER OK'); if (bad) process.exitCode = 1;
