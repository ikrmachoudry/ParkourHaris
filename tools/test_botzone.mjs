// v579: a bot standing in the blue storm takes damage and runs for the circle (it used to stand and fight in the storm)
import { CombatSim } from '../public/js/combat.js';
import { zoneAt } from '../public/js/zone.js';
let bad = 0; const ok = (c, m) => { console.log(c ? 'PASS' : 'FAIL', m); if (!c) bad++; };
const sim = new CombatSim(7, 3), b = sim.bots.find((q) => !q.droid) || sim.bots[0];
sim.t = 340; const zn = zoneAt(sim.Z, sim.t);
const ang = 1.1, out = { x: zn.x + Math.cos(ang) * (zn.r + 40), z: zn.z + Math.sin(ang) * (zn.r + 40) };
b.alive = true; b.hp = 100; b.y = null; b.x = out.x; b.z = out.z; b.alert = 0; b.hide = 0;
const P = { id: 1, x: out.x + 12, z: out.z + 8, y: undefined, hp: 100, alive: true, mv: 0, stn: 0, tm: 0 };   // a human 14 m away shooting range: a bot that FIGHTS would stand here
const d0 = Math.hypot(b.x - zn.x, b.z - zn.z); let minD = d0, hp1 = 100;
for (let i = 0; i < 30 * 12; i++) { sim.t += 1 / 30; sim.tick(1 / 30, [P]); sim.drain(); if (i === 30 * 3) hp1 = b.hp; const zz = zoneAt(sim.Z, sim.t); minD = Math.min(minD, Math.hypot(b.x - zz.x, b.z - zz.z)); }
console.log('start dist to circle centre', d0.toFixed(1), 'radius', zn.r.toFixed(1), 'after 12 s dist', minD.toFixed(1), 'hp after 3 s', hp1.toFixed(1), 'hp after 12 s', b.hp.toFixed(1), 'alive', b.alive);
ok(hp1 < 100 || !b.alive, 'the bot is hurt by the storm within 3 s');
ok(minD < d0 - 15, 'the bot moved toward the circle (' + (d0 - minD).toFixed(0) + ' m closer)');
console.log(bad ? 'BOTZONE FAILED' : 'BOTZONE OK'); process.exit(bad ? 1 : 0);
