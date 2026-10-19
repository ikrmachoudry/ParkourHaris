// Shared city: the host's traffic + pedestrians reach a guest unchanged:  node --import ./tools/mock-register.js tools/test_netsync.js
import { TrafficAI } from '../public/js/trafficai.js';
import { TRAFFIC, trafficPos } from '../public/js/gta.js';
import { Peds } from '../public/js/peds.js';

let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const mk = () => { const cars = []; TRAFFIC.forEach((L, li) => { for (let k = 0; k < L.n; k++) { const p = trafficPos(L, k, 0); cars.push({ L, k, m: null, st: { id: 11, x: p.x, z: p.z, yaw: p.yaw, vx: p.vx, vz: p.vz, speed: L.sp, driver: 1000 + li * 5 + k, hl: 2.3, hw: 0.95 } }); } }); return cars; };
const ctx = (o = {}) => ({ me: null, carSt: null, cars: [], aim: null, honk() {}, driverOut() {}, ...o });
let simMs = 0; performance.now = () => simMs;   // simulated time

// ---- traffic: host blocks a car with a person, the guest's copy stops at the same place
{ const hc = mk(), gc = mk(), H = new TrafficAI(hc), G = new TrafficAI(gc); G.puppet = true;
  let t = 50; H.update(t, ctx()); G.update(t, ctx());
  const straight = (q) => { for (let d = 26; d < 60; d += 2) { const w = trafficPos(q.L, q.k, q.tau + d / q.L.sp); if (Math.abs(w.yaw - q.st.yaw) > 1e-6) return false; } return true; };
  const c = hc.find((q) => straight(q)), idx = hc.indexOf(c); c.brave = false;
  const ahead = trafficPos(c.L, c.k, c.tau + 24 / c.L.sp), person = { x: ahead.x, z: ahead.z };
  for (let i = 0; i < 300; i++) { t += 1 / 30; H.update(t, ctx({ persons: [person] })); if (i % 5 === 0) G.applySnap(H.snapshot()); G.update(t, ctx()); }
  const g = gc[idx];
  ok(c.v < 0.05, 'host car stopped for the person standing in its lane'); ok(g.v < 0.1 && Math.hypot(g.st.x - c.st.x, g.st.z - c.st.z) < 0.6, 'the guest sees that car stopped at the same place (' + Math.hypot(g.st.x - c.st.x, g.st.z - c.st.z).toFixed(2) + ' m apart)');
  const far = gc.filter((q, i) => i !== idx).every((q, i) => { const h = hc[gc.indexOf(q)]; return Math.hypot(q.st.x - h.st.x, q.st.z - h.st.z) < 3; }); ok(far, 'all the other cars are within 3 m of the host');
  H.begin(c); for (let i = 0; i < 20; i++) { t += 1 / 30; H.update(t, ctx()); } G.applySnap(H.snapshot()); G.update(t, ctx()); ok(g.mode === 'struggle', 'the guest sees the carjack struggle');
  H.take(c); G.applySnap(H.snapshot()); G.update(t + 0.05, ctx()); ok(!g.vis && g.mode === 'gone', 'a jacked car disappears for the guest too'); }

// ---- pedestrians
{ const scene = { add() {}, remove() {} }, HP = new Peds(scene, 12), GP = new Peds(scene, 12); GP.puppet = true;
  const cam = { x: 0, z: 0 }; let t = 70; const step = (n) => { for (let i = 0; i < n; i++) { t += 1 / 30; simMs += 1000 / 30; HP.update(1 / 30, t, { x: 1e5, z: 1e5 }, [], null, null, {}); if (i % 5 === 0) GP.applySnap(HP.snapshot()); GP.update(1 / 30, t, { x: 1e5, z: 1e5 }, [], null, null, {}); } };
  step(10); const p = HP.list[3]; p.st = 'flee'; p.dx = 1; p.dz = 0; p.timer = 3; p.hp = 1; step(60);
  const q = GP.list[3]; ok(q.st === 'flee' && Math.hypot(q.x - p.x, q.z - p.z) < 1.2, 'a fleeing person runs the same way on the guest (' + Math.hypot(q.x - p.x, q.z - p.z).toFixed(2) + ' m)');
  ok(Math.abs(q.hp - p.hp) < 0.02, 'with the same health');
  const a = HP.adopt(5, 5, 0, false, 'fly', 2); step(10); ok(GP.byIndex(a.i) && GP.byIndex(a.i).temp, 'a driver thrown out of a car appears on the guest');
  step(30 * 30); ok(HP.list.filter((x) => x.temp).length === GP.list.filter((x) => x.temp).length, 'and leaves again when the host removes him');
  const w = HP.list[5]; step(1); ok(Math.hypot(GP.list[5].x - w.x, GP.list[5].z - w.z) < 0.8, 'people walking normally are at the same place'); void cam; }

console.log(fails ? 'NETSYNC FAILED ' + fails : 'NETSYNC OK'); process.exit(fails ? 1 : 0);
