// POLI RICKSHAW: the director with a scripted rickshaw (no browser)
import { PARKSTOP } from '../public/js/polirick.js';
import { PoliDirector, RICK_START, OFFICER_START, STATION, POLI_BRIEF_MS, ROUTE, routeAt } from '../public/js/polirick.js';
import { homeSpawnPos } from '../public/js/zombie.js';
let fails = 0; const ok = (c, m) => { if (!c) { fails++; console.log('FAIL', m); } else console.log('PASS', m); };
function mk() {
  const ev = []; let res = null; const P = { 1: { ...homeSpawnPos(0), y: 0, a: 0 } };
  const D = new PoliDirector({ getP: (id) => P[id] || null, onSnap: (m) => { for (const e of m.ev) ev.push(e[0]); D.last = m; }, onEnd: (o, w) => { res = { ok: o, why: w }; } }); D.start([1]);
  return { D, ev, P, get res() { return res; } };
}
const step = (D, s, dt = 0.1) => { for (let t = 0; t < s; t += dt) D.tick(dt); };
{ const g = mk(); step(g.D, POLI_BRIEF_MS / 1000 + 8); ok(g.D.st === 'play', 'play after the brief'); ok(g.D.zs.length > 0, 'zombies come out at the house'); ok(g.D.last.po && g.D.last.po.o[4] === 0, 'snapshot carries the officer, not aboard'); }
{ const g = mk(); step(g.D, POLI_BRIEF_MS / 1000 + 2);   // nobody drives: the zombies reach the rickshaw / officer and wreck it
  step(g.D, 120); ok(g.res && !g.res.ok && ['rick', 'officer'].includes(g.res.why), 'left alone, the zombies win (' + (g.res && g.res.why) + ')'); }
{ const g = mk(); step(g.D, POLI_BRIEF_MS / 1000 + 1);
  g.D.setRick(1, { x: OFFICER_START.x + 2, z: OFFICER_START.z + 1, yaw: 0, sp: 1, hp: 100, drv: 1 }); step(g.D, 0.2);
  ok(g.D.off.aboard && g.ev.includes('pboard'), 'driving up to the officer: he gets in');
  { const g2 = mk(); step(g2.D, POLI_BRIEF_MS / 1000 + 1); g2.D.setRick(1, { x: OFFICER_START.x + 2, z: OFFICER_START.z, yaw: 0, sp: 1, hp: 100, drv: 1 }); step(g2.D, 0.2); g2.D.setRick(1, { x: STATION.x, z: STATION.z, yaw: 0, sp: 8, hp: 100, drv: 1 }); step(g2.D, 0.3); ok(g2.res && !g2.res.ok && g2.res.why === 'early', 'the station before the stunt park fails the mission'); }
  g.D.setRick(1, { x: PARKSTOP.x, z: PARKSTOP.z, yaw: 0, sp: 8, hp: 100, drv: 1 }); step(g.D, 0.2); ok(g.D.parked && g.ev.includes('ppark'), 'the stunt park is checked off');
  // then to the station at 12 m/s: arrives
  let s = 0; const total = routeAt(1e6, 1e6).len; let done = false;
  for (let i = 0; i < 4000 && !g.res; i++) { s += 12 * 0.1; const q = (() => { let acc = 0; for (let k = 0; k + 1 < ROUTE.length; k++) { const a = ROUTE[k], b = ROUTE[k + 1], L = Math.hypot(b[0] - a[0], b[1] - a[1]); if (s <= acc + L || k === ROUTE.length - 2) { const t = Math.min(1, (s - acc) / L); return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]; } acc += L; } })(); g.D.setRick(1, { x: q[0], z: q[1], yaw: 0, sp: 12, hp: 100, drv: 1 }); g.D.tick(0.1); }
  ok(g.res && g.res.ok, 'arriving at the station with the officer wins (' + JSON.stringify(g.res) + ')'); ok(g.ev.includes('pamb'), 'there were ambushes on the way'); void total; void STATION; }
{ const g = mk(); step(g.D, POLI_BRIEF_MS / 1000 + 1); g.D.setRick(1, { x: RICK_START.x, z: RICK_START.z, yaw: 0, sp: 0, hp: 100, drv: 1 }); step(g.D, 0.2);
  g.D.setRick(1, { x: RICK_START.x, z: RICK_START.z, yaw: 0, sp: 0, hp: 0, drv: 1 }); step(g.D, 0.3); ok(g.res && !g.res.ok && g.res.why === 'wreck', 'a wrecked rickshaw fails the mission'); }
{ const g = mk(); step(g.D, POLI_BRIEF_MS / 1000 + 1); g.D.setRick(1, { x: OFFICER_START.x + 1, z: OFFICER_START.z, yaw: 0, sp: 0, hp: 100, drv: 1 }); step(g.D, 0.2);
  g.P[1] = { x: 0, y: 0, z: 0, a: 0 }; const z = { id: 99, x: g.D.rick.x + 1, z: g.D.rick.z, yaw: 0, hp: 100, vm: 1, v: 1, atk: 0, hurt: 0, dead: 0, att: 0 }; g.D.zs = [z]; g.D.ambT = 999; const h0 = g.D.rick.hp; step(g.D, 3);
  ok(g.D.rick.hp < h0, 'a zombie next to the rickshaw damages it'); ok(g.D.hit(1, 99, 100) && g.D.zs.find((q) => q.id === 99).hp === 0, 'a hit kills the zombie'); }
ok(routeAt(RICK_START.x, RICK_START.z).at < 3 && routeAt(STATION.x, STATION.z).off < 1, 'the route starts at the yard and ends at the station');
console.log(fails ? 'POLI FAILED' : 'POLI OK'); process.exit(fails ? 1 : 0);
