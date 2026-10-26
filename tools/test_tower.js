// the three towers: a walker can go in at the door, climb the spiral stairs and stand on the roof
import { World } from '../public/js/world.js';
import { newBody, stepBody } from '../public/js/physics.js';
import { layout, CMB } from '../public/js/combat.js';
globalThis.window = globalThis;
let bad = 0; const ok = (c, m) => { if (!c) bad++; console.log((c ? 'PASS ' : 'FAIL ') + m); };
const L = layout();
for (const t of L.towers) {
  const w = new World(); for (const q of L.solids) if (Math.abs((q.x0 + q.x1) / 2 - t.x) < 8 && Math.abs((q.z0 + q.z1) / 2 - t.z) < 8) w.addStatic(CMB.x + q.x0, q.y0, CMB.z + q.z0, CMB.x + q.x1, q.y1, CMB.z + q.z1, { name: 'building' });
  w.terrain = () => t.gy;
  const b = newBody(); b.x = CMB.x + t.x - 0.4; b.z = CMB.z + t.z + 6; b.y = t.gy; b.grounded = true;
  const a = t.a, q = a / 2, ring = (s) => { const u = ((s % 16) + 16) % 16; if (u < 2) return [u * q, a]; if (u < 6) return [a, a - (u - 2) * q]; if (u < 10) return [a - (u - 6) * q, -a]; if (u < 14) return [-a, -a + (u - 10) * q]; return [-a + (u - 14) * q, a]; };
  const way = [[CMB.x + t.x - 0.4, CMB.z + t.z + 3.4], [CMB.x + t.x - 0.4, CMB.z + t.z + t.a]]; for (let i = 0; i < t.n; i++) { const [x, z] = ring(i * 0.5); way.push([CMB.x + t.x + x, CMB.z + t.z + z]); }
  way.push([CMB.x + t.x + 0.6, CMB.z + t.z - 0.5]);
  let wi = 0, maxy = 0, f = 0;
  for (; f < 60 * 120 && wi < way.length; f++) {
    const [wx, wz] = way[wi], dx = wx - b.x, dz = wz - b.z, d = Math.hypot(dx, dz); if (d < 0.35 && (wi > 1 ? b.y > t.gy + (wi - 2) * 0.3 - 0.5 : true)) { wi++; continue; }
    w.update(f / 60, 1 / 60); stepBody(w, b, 1 / 60, { mx: dx / d, mz: dz / d, jumpPressed: false, jumpHeld: false }); b.events.length = 0; maxy = Math.max(maxy, b.y);
  }
  ok(wi >= way.length && b.y > t.py - 0.6, `tower ${t.flag}: climbed to y ${(b.y - t.gy).toFixed(1)} of ${(t.py - t.gy).toFixed(1)} in ${(f / 60).toFixed(0)} s (waypoint ${wi}/${way.length})`);
}
console.log(bad ? 'TOWER FAIL' : 'TOWER OK');
