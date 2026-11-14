// v516: lag compensation - a bullet aimed at where a MOVING bot was (server time st of the shooter's snapshot) must hit although the bot has moved on
import { CombatHost } from '../combatserver.js';
import { CMB, cmbH, rayWalls } from '../public/js/combat.js';
let ok = 0, bad = 0, tried = 0;
for (let seed = 1; seed <= 6; seed++) {
  const h = new CombatHost(seed, () => {}, () => {}, 'medium', 6); const P = [{ id: 1, x: CMB.x + 250, z: CMB.z + 250, y: 0, al: 1, tm: 0 }];
  for (let i = 0; i < 40; i++) h.tick(0.05, P);
  const bi = h.sim.bots.findIndex((b) => b.alive && !b.droid); if (bi < 0) continue; const b = h.sim.bots[bi];
  const t0 = h.sim.t, x0 = b.x, z0 = b.z;
  for (let i = 0; i < 14; i++) h.tick(0.05, P);   // 0.7 s later
  const moved = Math.hypot(b.x - x0, b.z - z0); if (moved < 1.2) continue;
  // shooter 12 m away from the OLD position, along z, aiming at the old chest height
  const sx = x0, sz = z0 - 12; if (rayWalls(h.sim.L, sx, sz, 0, 1, 12, 1.3, undefined) < 11.9) continue; tried++;
  const g = cmbH(sx, sz), gb = cmbH(x0, z0), cam = g + 1.6, sl = (gb + 1.1 - cam) / 12;
  const hp0 = b.hp; const px = { id: 1, jx: CMB.x + sx, jz: CMB.z + sz, ws: null };
  const mk = (st) => ({ t: 'cshoot', st, ox: sx, oz: sz, fx: 0, fz: 1, range: 100, dmg: 3, y: cam - 0.15, b0: cam, bs: sl, bk: 0 });
  h.shoot(px, mk(undefined)); const missNow = b.hp === hp0;
  h.shoot(px, mk(t0)); const hitOld = b.hp < hp0;
  console.log('seed', seed, 'moved', moved.toFixed(1), 'm; shot at now-position: ' + (missNow ? 'miss' : 'hit') + ' | shot with lag compensation: ' + (hitOld ? 'HIT' : 'miss'));
  if (hitOld) ok++; else bad++;
}
console.log('cases', tried, 'compensated hits', ok); console.log(bad || !ok ? 'LAGCOMP FAIL' : 'LAGCOMP OK'); if (bad || !ok) process.exitCode = 1;
