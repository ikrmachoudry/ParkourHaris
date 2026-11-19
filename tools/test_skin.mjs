// v580: some bots carry a MILITARY SKIN; killing one leaves it on his gold box once (a respawned bot does not carry another)
import { CombatSim } from '../public/js/combat.js';
let bad = 0; const ok = (c, m) => { console.log(c ? 'PASS' : 'FAIL', m); if (!c) bad++; };
for (const seed of [1, 7, 33]) {
  const sim = new CombatSim(seed, 3), c = sim.bots.filter((b) => b.skin && !b.droid);
  ok(c.length >= 1, 'seed ' + seed + ': ' + c.length + ' of ' + sim.bots.length + ' bots carry a skin');
  const b = c[0]; if (!b) continue; sim.hurt(b, 999, 0, 0, 1);
  ok(sim.loot.some((l) => l.k === 'skin' && l.gold === 1 && l.alive), 'dying bot drops the skin'); ok(!b.skin, 'and no longer carries one');
}
console.log(bad ? 'SKIN FAILED' : 'SKIN OK'); process.exit(bad ? 1 : 0);
