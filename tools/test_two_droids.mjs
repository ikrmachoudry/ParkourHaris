// v507: two droids (one per team) in one match: each stays by its own human, never hurts him, and fights the other team
import { CombatSim, CMB } from '../public/js/combat.js';
const s = new CombatSim(5, 6); const d0 = s.addDroid(0), d1 = s.addDroid(1); s.ptm = { 1: 0, 2: 1 };
const PL = [{ id: 1, x: -60, z: -60, y: undefined, hp: 100, alive: true, mv: 0, stn: 0, tm: 0 }, { id: 2, x: 60, z: 60, y: undefined, hp: 100, alive: true, mv: 0, stn: 0, tm: 1 }];
let bad = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) bad++; };
for (let i = 0; i < 400; i++) s.tick(0.1, PL);
const dist = (d, p) => Math.hypot(d.x - p.x, d.z - p.z);
ok(s.droids.length === 2 && d0.placed && d1.placed, 'both droids landed (placed)');
ok(dist(d0, PL[0]) < 40, 'droid 0 is with its human (' + dist(d0, PL[0]).toFixed(0) + ' m)'); ok(dist(d1, PL[1]) < 40, 'droid 1 is with its human (' + dist(d1, PL[1]).toFixed(0) + ' m)');
ok(dist(d0, PL[1]) > 20 && dist(d1, PL[0]) > 20, 'each droid follows its OWN human, not the other team');
const c0 = s.candsFor(d0, PL); ok(!c0.some((q) => q.id === 1), 'droid 0 never targets its own human (it only engages enemies within 45 m of him)');
const cn = s.candsFor(s.bots.find((b) => !b.droid), PL); ok(cn.length >= 3, 'normal bots can shoot both humans and both droids (' + cn.length + ' targets)');
// the other team's droid is a target for droid 0 once the humans are far apart but droids close
d1.x = d0.x + 10; d1.z = d0.z; d0.mate = { x: d0.x, z: d0.z }; d0.mateD = 0; ok(s.candsFor(d0, PL).some((q) => q.bt === d1), 'droid 0 may shoot droid 1 (other team)'); ok(!s.candsFor(d0, PL).some((q) => q.bt === d0), 'never itself');
console.log(bad ? 'TWO DROIDS FAIL' : 'TWO DROIDS OK'); if (bad) process.exitCode = 1;
