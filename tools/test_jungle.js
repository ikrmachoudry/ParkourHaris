// Jungle map physics: spawn is clear, hill can be walked up (ramps/tiers), trunks are solid, walls hold, mushrooms bounce.
import { buildLevel } from '../public/js/levels.js';
import { newBody, stepBody } from '../public/js/physics.js';
import { jungleLayout, HILL, J } from '../public/js/jlayout.js';
const { world, info } = buildLevel(1, true);
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const L = jungleLayout();
ok(L.trees.length >= 60, 'trees placed: ' + L.trees.length);
ok(!L.trees.some((t) => Math.hypot(t.x, t.z) < 16), 'spawn clearing has no trees');
// walk a bot along waypoints
function walk(b, pts, maxT = 40) {
  let t = 0;
  for (const [tx, tz] of pts) {
    for (let i = 0; i < maxT * 90; i++) {
      const dx = tx - b.x, dz = tz - b.z, d = Math.hypot(dx, dz); if (d < 1.2) break;
      stepBody(world, b, 1 / 90, { mx: dx / d, mz: dz / d, jumpPressed: false, jumpHeld: false }); b.events.length = 0; t += 1 / 90;
    }
  }
  return t;
}
const b = newBody(); b.x = 0; b.y = 0.01; b.z = 1.5;
walk(b, [[0, 0]]); ok(Math.abs(b.y) < 0.2 && b.grounded, 'standing on the grass at spawn (y ' + b.y.toFixed(2) + ')');
// up the hill: R1 -> tier1 -> R2 -> tier2 -> R3 -> summit
const hx = HILL.x, hz = HILL.z;
const route = [[hx - 8, hz + 40], [hx - 8, hz + 12], [hx - 8, hz - 2], [hx + 8, hz - 2], [hx + 8, hz - 22], [hx + 8, hz - 27], [hx - 6, hz - 27], [hx - 6, hz - 40], [hx - 6, hz - 52], [HILL.sx, HILL.sz]];
b.x = hx - 8; b.z = hz + 40; b.y = 0.01; b.vx = b.vz = 0;
walk(b, route);
ok(b.y > 14.5 && Math.hypot(b.x - HILL.sx, b.z - HILL.sz) < 3, `climbed to the summit (y ${b.y.toFixed(2)} at ${b.x.toFixed(1)},${b.z.toFixed(1)})`);
// tree trunks are solid
const t = L.trees[0]; const b2 = newBody(); b2.x = t.x; b2.z = t.z + 8; b2.y = 0.01; walk(b2, [[t.x, t.z - 6]], 6);
ok(Math.hypot(b2.x - t.x, b2.z - t.z) > 0.7, 'a tree trunk blocks the player (dist ' + Math.hypot(b2.x - t.x, b2.z - t.z).toFixed(2) + ')');
// walls hold
const b3 = newBody(); b3.x = 80; b3.z = -50; b3.y = 0.01; walk(b3, [[140, -50]], 6); ok(b3.x < J.HX + 0.1, 'east wall holds (x ' + b3.x.toFixed(2) + ')');
const b4 = newBody(); b4.x = 0; b4.z = -200; b4.y = 0.01; walk(b4, [[0, -300]], 8); ok(b4.z > J.ZN - 0.1, 'north wall holds (z ' + b4.z.toFixed(2) + ')');
// bounce mushroom launches
const sh = info.shrooms[0]; const b5 = newBody(); b5.x = sh[0]; b5.z = sh[1] + 5; b5.y = 0.01; walk(b5, [[sh[0], sh[1]]], 6); let maxY = 0;
for (let i = 0; i < 200; i++) { stepBody(world, b5, 1 / 90, { mx: 0, mz: 0 }); maxY = Math.max(maxY, b5.y); b5.events.length = 0; }
ok(maxY > 4, 'bounce mushroom launches the player (peak y ' + maxY.toFixed(1) + ')');
console.log(fails ? 'FAILED' : 'JUNGLE OK'); process.exit(fails ? 1 : 0);
