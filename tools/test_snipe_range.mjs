// v505: a sniper shot aimed at a bot's chest must hit at every distance up to the weapon's range (bullet drop used to carry it under the bot beyond ~380 m)
import { CombatSim, bulletK, cmbH, rayWalls } from '../public/js/combat.js';
import { WEAPONS } from '../public/js/economy.js';
let bad = 0, tested = 0;
const s0 = new CombatSim(3, 1);
// find clear shooting lines along z (no wall / tree / terrain solid for 560 m) and test every distance on them
for (let x = -280; x <= 280 && tested < 4; x += 7) {
  const probe = rayWalls(s0.L, x, -290, 0, 1, 580, 1.3, undefined); if (probe < 579) continue; tested++;
  for (const D of [100, 250, 400, 500, 570]) {
    const s = new CombatSim(3, 1); const b = s.bots[0]; b.alive = true; b.hp = 1e6; b.y = null; b.stn = 0; b.x = x; b.z = -290 + D; const g = cmbH(x, -290), gb = cmbH(b.x, b.z);
    const cam = g + 1.7, chest = gb + 1.2, sl = (chest - cam) / D;
    const r = s.shoot(x, -290, 0, 1, WEAPONS.sniper.range, 6, cam - 0.15, undefined, undefined, { y: cam, sl, k: bulletK('sniper') });
    const hit = r >= 0 && Math.abs(r - D) < 3; if (!hit) { bad++; console.log('line x', x, 'D', D, 'miss', r); }
  }
}
console.log('clear lines tested:', tested); console.log(bad || !tested ? 'SNIPE RANGE FAIL' : 'SNIPE RANGE OK'); if (bad || !tested) process.exitCode = 1;
