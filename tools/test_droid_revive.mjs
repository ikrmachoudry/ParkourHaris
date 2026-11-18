// v568: INTELLIDROID revives its downed human when it has time; never teleports to a respawn-parachute landing
import { CombatSim } from '../public/js/combat.js';
let bad = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) bad++; };
const mk = () => { const s = new CombatSim(5, 0); s.soloDroid = true; s.noRespawn = true; const d = s.addDroid(0); return { s, d }; };
const P = (x, z, o = {}) => ({ x, z, y: undefined, hp: 1, alive: true, mv: 0, stn: 2, tm: 0, dn: false, rd: false, ...o });
const dist = (d, p) => Math.hypot(d.x - p.x, d.z - p.z);
// 1. no enemies: the droid lands, I go down 40 m from it, it runs over and revives me after ~7 s
{ const { s, d } = mk(); const p = P(0, 0); for (let i = 0; i < 80; i++) s.tick(0.1, [p]); s.drain();
  d.x = 40; d.z = 0; d.path = null; p.dn = true; let ev = null, t = 0, arrived = -1;
  for (let i = 0; i < 600 && !ev; i++) { s.tick(0.1, [p]); t += 0.1; if (arrived < 0 && dist(d, p) < 1.7) arrived = t; ev = s.drain().find((e) => e.k === 'drev'); }
  ok(!!ev, 'droid revives me (drev event after ' + t.toFixed(1) + ' s)'); ok(arrived > 0 && t - arrived >= 6.8 && t - arrived < 8, 'it kneels beside me about 7 s (arrived ' + arrived.toFixed(1) + ' s, done ' + t.toFixed(1) + ' s)'); ok(arrived > 2 && arrived < 15, 'it ran to me first (' + arrived.toFixed(1) + ' s for ~40 m)'); }
// 2. an enemy bot close by: it fights, it does not revive
{ const { s, d } = mk(); const p = P(0, 0); for (let i = 0; i < 80; i++) s.tick(0.1, [p]); s.drain();
  d.x = 3; d.z = 0; p.dn = true; const e = s.bots.find((b) => !b.droid); if (e) { e.x = 12; e.z = 5; e.alive = true; } else s.bots.push(Object.assign(s.newBot(5), { x: 12, z: 5, alive: true }));
  let ev = null; for (let i = 0; i < 100 && !ev; i++) { const en = s.bots.find((b) => !b.droid); en.x = 12; en.z = 5; en.alive = true; s.tick(0.1, [p]); ev = s.drain().find((q) => q.k === 'drev'); }
  ok(!ev, 'no revive while an enemy is 13 m away (the droid fights first)'); }
// 3. not down: nothing happens
{ const { s, d } = mk(); const p = P(0, 0, { hp: 100, stn: 0 }); for (let i = 0; i < 200; i++) s.tick(0.1, [p]); ok(!s.drain().some((e) => e.k === 'drev'), 'no revive when I am standing'); }
// 4. respawn parachute (rd): the droid is NOT teleported next to my landing even 200 m away
{ const { s, d } = mk(); const p = P(0, 0, { hp: 100, stn: 0 }); for (let i = 0; i < 80; i++) s.tick(0.1, [p]); d.x = 0; d.z = 0;
  const q = P(200, 200, { hp: 100, stn: 0, rd: true }); s.tick(0.1, [q]); ok(dist(d, q) > 150, 'after a respawn drop the droid stays where it was (' + dist(d, q).toFixed(0) + ' m from me), no teleport');
  const q2 = P(200, 200, { hp: 100, stn: 0, rd: false }); d.x = 0; d.z = 0; s.tick(0.1, [q2]); ok(dist(d, q2) < 20, 'a normal 200 m gap still gets the old catch-up jump (' + dist(d, q2).toFixed(0) + ')'); }
console.log(bad ? 'DROID REVIVE FAIL' : 'DROID REVIVE OK'); if (bad) process.exitCode = 1;
