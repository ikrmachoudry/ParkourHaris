// v340: bots climb the tower spiral when the player is up there (pure logic)
import { CombatSim, cmbH } from '../public/js/combat.js';
let bad = 0; const ok = (c, m) => { if (!c) { bad++; console.log('FAIL', m); } else console.log('PASS', m); };
for (const ti of [0, 3]) {
  const sim = new CombatSim(5, 1), T = sim.L.towers[ti], b = sim.bots[0];
  const P = { id: 1, x: T.x + 1, z: T.z - 1, y: T.py, hp: 100, alive: true, mv: 0, stn: 0 };
  b.x = T.x + 4; b.z = T.z + 12; b.y = null; b.alert = 999; let maxY = 0, nan = 0, t1 = 0;
  for (let i = 0; i < 30 * 120; i++) { sim.tick(1 / 30, [P]); b.alert = 999; b.hp = 100; if (b.y != null) { maxY = Math.max(maxY, b.y); if (!t1 && b.y > T.py - 0.5) t1 = i / 30; } if (!Number.isFinite(b.x + b.z)) nan++; sim.drain(); }
  ok(maxY > T.py - 0.6, 'tower ' + ti + ': bot climbed to the roof (height ' + (T.py - T.gy).toFixed(0) + ' m, top reached at ' + t1.toFixed(0) + ' s, max y ' + maxY.toFixed(1) + ')');
  ok(!nan, 'no NaN');
  P.y = undefined; P.x = T.x + 30; P.z = T.z + 30; for (let i = 0; i < 30 * 90; i++) { sim.tick(1 / 30, [P]); b.alert = 999; b.hp = 100; sim.drain(); }
  ok(b.y == null, 'tower ' + ti + ': when the player leaves the bot comes back down (y ' + b.y + ')');
}
console.log(bad ? 'FAILED' : 'TOWER BOTS OK'); process.exit(bad ? 1 : 0);
