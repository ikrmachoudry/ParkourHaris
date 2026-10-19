// Traffic AI + economy rules (pure logic, no rendering):  node tools/test_traffic.js
import { TrafficAI } from '../public/js/trafficai.js';
import { TRAFFIC, trafficPos } from '../public/js/gta.js';
import { Wallet, WEAPONS, carPrice } from '../public/js/economy.js';

let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
globalThis.localStorage = { _: {}, getItem(k) { return this._[k] ?? null; }, setItem(k, v) { this._[k] = v; } };

const mk = () => { const cars = []; TRAFFIC.forEach((L, li) => { for (let k = 0; k < L.n; k++) { const p = trafficPos(L, k, 0); cars.push({ L, k, m: null, st: { id: 11, x: p.x, z: p.z, yaw: p.yaw, vx: p.vx, vz: p.vz, speed: L.sp, driver: 1000 + li * 5 + k, hl: 2.3, hw: 0.95 } }); } }); return cars; };
const ctx = (o = {}) => ({ me: null, carSt: null, cars: [], aim: null, honk: () => { ctx.honks++; }, driverOut: (c, m) => { ctx.out = m; }, ...o });
ctx.honks = 0;

// 1. free-flowing traffic keeps its rail position: no drift against the pure function
{ const cars = mk(), ai = new TrafficAI(cars); let t = 100; ai.update(t, ctx()); for (let i = 0; i < 600; i++) { t += 1 / 30; ai.update(t, ctx()); }
  const c = cars[7], p = trafficPos(c.L, c.k, t); ok(Math.hypot(c.st.x - p.x, c.st.z - p.z) < 0.5, 'undisturbed traffic stays in sync with the shared clock'); }

// 2. somebody standing in the lane: the car stops in front of him, never touches him, and honks
{ const cars = mk(), ai = new TrafficAI(cars); let t = 50; ai.update(t, ctx()); const straight = (q) => { for (let d = 26; d < 60; d += 2) { const w = trafficPos(q.L, q.k, q.tau + d / q.L.sp); if (Math.abs(w.yaw - q.st.yaw) > 1e-6) return false; } return true; }; const c = cars.find((q) => straight(q)); c.brave = false;
  let ahead = null; for (let d = 26; d < 60; d += 2) { const q = trafficPos(c.L, c.k, c.tau + d / c.L.sp); if (Math.abs(q.yaw - c.st.yaw) < 1e-6) { ahead = q; break; } }
  const fx = Math.sin(c.st.yaw), fz = Math.cos(c.st.yaw), me = { x: ahead.x, z: ahead.z }; ctx.honks = 0; let minGap = 1e9;
  for (let i = 0; i < 400; i++) { t += 1 / 30; ai.update(t, ctx({ me })); const g = (me.x - c.st.x) * fx + (me.z - c.st.z) * fz - 2.3; minGap = Math.min(minGap, g); }
  ok(c.v < 0.05, 'the car comes to a full stop (v=' + c.v.toFixed(2) + ')'); ok(minGap > 0.4, 'and never reaches the person (closest gap ' + minGap.toFixed(2) + ' m)'); ok(ctx.honks >= 2, 'the driver honks while blocked (' + ctx.honks + ')');
  // the car behind queues up instead of ramming
  const behind = cars.filter((q) => q !== c && q.L === c.L).map((q) => ({ q, d: Math.hypot(q.st.x - c.st.x, q.st.z - c.st.z) })).sort((a, b) => a.d - b.d)[0];
  void behind;
  // when the person steps away, it drives on
  for (let i = 0; i < 300; i++) { t += 1 / 30; ai.update(t, ctx()); } ok(c.v > 5, 'after the person leaves the car drives on again (v=' + c.v.toFixed(1) + ')'); }

// 3. a gun pointed at the car: it stops dead, then the driver gets out with his hands up
{ const cars = mk(), ai = new TrafficAI(cars); const c = cars.find((q) => q.L.sp === 12 && q.k === 1); let t = 80; ai.update(t, ctx()); ctx.out = null;
  const fx = Math.sin(c.st.yaw), fz = Math.cos(c.st.yaw), me = { x: c.st.x + fx * 25, z: c.st.z + fz * 25 }, aim = { x: me.x, z: me.z, dx: -fx, dz: -fz };
  for (let i = 0; i < 300; i++) { t += 1 / 30; ai.update(t, ctx({ me: null, aim })); }
  ok(c.mode === 'abandoned' && ctx.out, 'driver surrenders and leaves the car (' + c.mode + ', ' + ctx.out + ')'); ok(!!ai.nearestJack(c.st.x + 2, c.st.z), 'the empty car can be taken');
  ai.take(c); ok(!c.vis && c.mode === 'gone', 'a taken car leaves the traffic'); }

// 4. carjack on a stopped car: struggle holds it still, a moving car cannot be jacked
{ const cars = mk(), ai = new TrafficAI(cars); const c = cars[3]; ai.update(10, ctx()); ok(!ai.nearestJack(c.st.x + 2, c.st.z), 'a car doing 9+ m/s cannot be jacked'); c.v = 0; const j = ai.nearestJack(c.st.x + 2, c.st.z); ok(j === c, 'a stopped car can');
  ai.begin(c); for (let i = 0; i < 30; i++) ai.update(10 + i / 30, ctx()); ok(c.v === 0 && c.mode === 'struggle', 'the car stays put during the struggle'); }

// 5. shot at: the driver floors it
{ const cars = mk(), ai = new TrafficAI(cars); const c = cars[0]; ai.update(5, ctx()); ai.hit(c); let t = 5; for (let i = 0; i < 90; i++) { t += 1 / 30; ai.update(t, ctx()); } ok(c.v > c.L.sp * 1.1, 'a shot-at driver speeds up (v=' + c.v.toFixed(1) + ' vs ' + c.L.sp + ')'); }

// 6. economy: buying, ammo, shooting, reloading, selling
{ localStorage._ = {}; const w = new Wallet(); ok(w.money === 400, 'start cash $400');
  ok(w.buy('bat') && w.money === 365, 'bat costs $35 (real price)'); ok(!w.buy('pistol') && !w.owns('pistol') && w.money === 365, 'cannot buy a pistol you cannot afford'); w.add(5000); ok(w.buy('pistol') && w.mag('pistol') === 12 && w.reserve('pistol') === 24, 'pistol comes with a magazine and spare ammo');
  for (let i = 0; i < 12; i++) w.shoot('pistol'); ok(!w.shoot('pistol'), 'empty magazine cannot fire'); ok(w.reload('pistol') && w.mag('pistol') === 12 && w.reserve('pistol') === 12, 'reload moves spare ammo into the magazine');
  ok(w.buyAmmo('pistol') && w.reserve('pistol') === 36, 'ammo pack'); ok(w.buy('ak') && w.cycle().join() === ',bat,pistol,ak', 'AK-47 bought, cycle order');
  const w2 = new Wallet(); ok(w2.money === w.money && w2.owns('ak'), 'cash and weapons are saved');
  ok(carPrice(14, 100) > carPrice(14, 30), 'a wrecked car sells for less'); ok(WEAPONS.ak.price > WEAPONS.pistol.price && WEAPONS.pistol.price > WEAPONS.bat.price, 'price ladder'); }

console.log(fails ? 'TRAFFIC FAILED ' + fails : 'TRAFFIC OK'); process.exit(fails ? 1 : 0);
