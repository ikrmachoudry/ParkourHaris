// Headless checks for the realistic vehicle model (cityveh.js)
import { CITY_VEH, newCityState, stepCityCar } from '../public/js/cityveh.js';
let bad = 0; const ok = (c, m) => { if (!c) bad++; console.log((c ? 'PASS ' : 'FAIL ') + m); };
const flat = { terrain: () => 0, boxes: [], segs: [], plazas: [], edge: 1e9 };
const mk = (spec) => newCityState({ id: spec.id, x: 0, z: 0, y: 0, pitch: 0, yaw: 0, vx: 0, vz: 0, speed: 0, steer: 0, driver: 1, parked: false, vy: 0, vyg: 0, air: false }, spec);
const sim = (c, spec, secs, f, track = flat, others = []) => { const dt = 1 / 60; for (let i = 0; i < secs * 60; i++) stepCityCar(c, dt, f(i * dt, c), track, others, spec, null); };
const kmh = (c) => Math.abs(c.speed) * 3.6;
for (const sp of CITY_VEH) {
  let c = mk(sp), t100 = -1; for (let i = 0; i < 60 * 40 && t100 < 0; i++) { stepCityCar(c, 1 / 60, { gas: 1, steer: 0 }, flat, [], sp, null); if (kmh(c) >= 100) t100 = i / 60; }
  sim(c, sp, 60, () => ({ gas: 1, steer: 0 })); const top = kmh(c);
  c = mk(sp); sim(c, sp, 14, () => ({ gas: 1, steer: 0 })); const z0 = c.z, v0 = kmh(c); let dist = 0;
  for (let i = 0; i < 60 * 20; i++) { stepCityCar(c, 1 / 60, { gas: -1, steer: 0 }, flat, [], sp, null); if (c.speed < 0.2) { dist = c.z - z0; break; } }
  console.log(`${sp.name.padEnd(10)} 0-100: ${t100 < 0 ? 'n/a' : t100.toFixed(1) + 's'}  top: ${top.toFixed(0)} km/h  braking from ${v0.toFixed(0)} km/h: ${dist.toFixed(0)} m`);
  ok(Number.isFinite(c.x) && Number.isFinite(c.yaw), sp.name + ' stays finite');
}
const S = CITY_VEH[0], F = CITY_VEH[6];
{ const c = mk(S); sim(c, S, 5, () => ({ gas: 0, steer: 0 })); ok(c.speed === 0 && Math.hypot(c.x, c.z) < 0.01, 'a parked car stays still'); }
{ const c = mk(S); sim(c, S, 1, () => ({ gas: 1, steer: 0 })); sim(c, S, 6, () => ({ gas: 0.3, steer: 1 })); const r = Math.hypot(c.vx, c.vz); ok(c.yaw < -1, 'steering right at low speed turns the car right (yaw falls): ' + c.yaw.toFixed(2)); void r; }
{ const c = mk(S); sim(c, S, 3, (t) => ({ gas: t < 2.2 ? 1 : 0, steer: 0 })); const u = c.speed; sim(c, S, 3, (t) => ({ gas: 0, steer: 0 })); ok(c.speed < u && c.speed > 0, 'a car coasting slows down gently (' + (u * 3.6).toFixed(0) + ' -> ' + (c.speed * 3.6).toFixed(0) + ' km/h)'); }
{ const c = mk(S); sim(c, S, 3, () => ({ gas: -1, steer: 0 })); ok(c.speed < -2 && c.speed > -5, 'reverse is slow (' + c.speed.toFixed(1) + ' m/s)'); }
{ // minimum turning circle from low speed full lock: about 4.5-7 m radius
  const c = mk(S); sim(c, S, 2, () => ({ gas: 0.25, steer: 1 })); sim(c, S, 6, () => ({ gas: 0.15, steer: 1 })); const sp = Math.hypot(c.vx, c.vz), R = sp / Math.abs(c.yr); ok(R > 3.5 && R < 9, 'turning circle radius ' + R.toFixed(1) + ' m at ' + (sp * 3.6).toFixed(0) + ' km/h'); }
{ // lane change at 80 km/h: stays controllable, no spin
  const c = mk(S); sim(c, S, 9, () => ({ gas: 0.4, steer: 0 })); const v = kmh(c);
  sim(c, S, 0.6, () => ({ gas: 0, steer: 0.35 })); sim(c, S, 0.9, () => ({ gas: 0, steer: -0.35 })); sim(c, S, 0.8, () => ({ gas: 0, steer: 0 }));
  ok(Math.abs(c.yaw) < 0.9 && Math.abs(c.vl || 0) < 3, 'lane change at ' + v.toFixed(0) + ' km/h is stable (yaw ' + c.yaw.toFixed(2) + ')'); }
{ // full lock at 120 km/h: the car understeers / slides but must not spin round like a top
  const c = mk(F); sim(c, F, 14, () => ({ gas: 1, steer: 0 })); const v = kmh(c); sim(c, F, 3, () => ({ gas: 0.6, steer: 1 }));
  const slideDeg = Math.abs(Math.atan2(-(c.vx * -Math.cos(c.yaw) + c.vz * Math.sin(c.yaw)), c.vx * Math.sin(c.yaw) + c.vz * Math.cos(c.yaw))) * 57.3;
  ok(Math.abs(c.yr) < 2.5 && slideDeg < 60, 'full lock at ' + v.toFixed(0) + ' km/h: yaw rate ' + c.yr.toFixed(2) + ' rad/s, slide angle ' + slideDeg.toFixed(0) + ' deg'); }
{ // handbrake turn makes the rear step out
  const c = mk(S); sim(c, S, 7, () => ({ gas: 1, steer: 0 })); sim(c, S, 0.3, () => ({ gas: 0, steer: 0.8, hb: true })); const slip = Math.abs(c.vl || 0);
  sim(c, S, 0.6, () => ({ gas: 0, steer: 0.8, hb: true })); ok(c.skid > 0.3 && Math.abs(c.yr) > 0.5, 'handbrake turn slides (skid ' + c.skid.toFixed(2) + ', yaw rate ' + c.yr.toFixed(2) + ')'); void slip; }
{ // crash into a wall at ~70 km/h: stops, never tunnels, makes a crash event
  const track = { terrain: () => 0, boxes: [{ x0: -20, x1: 20, z0: 60, z1: 70, h: 20 }], segs: [], plazas: [], edge: 1e9 };
  const c = mk(S); let ev = '', worst = 0; for (let i = 0; i < 60 * 12; i++) { const e = stepCityCar(c, 1 / 60, { gas: 1, steer: 0 }, track, [], S, null); if (e === 'crash') ev = e; worst = Math.max(worst, c.z); }
  ok(ev === 'crash' && worst < 60 && Number.isFinite(c.z), 'a head-on crash at speed is detected and the car stays outside the wall (max z ' + worst.toFixed(2) + ')'); }
{ // fast sports car cannot tunnel through a thin wall
  const track = { terrain: () => 0, boxes: [{ x0: -20, x1: 20, z0: 200, z1: 200.6, h: 20 }], segs: [], plazas: [], edge: 1e9 };
  const c = mk(F); let worst = 0; for (let i = 0; i < 60 * 25; i++) { stepCityCar(c, 1 / 30, { gas: 1, steer: 0 }, track, [], F, null); worst = Math.max(worst, c.z); }
  ok(worst < 200.6, 'a 300 km/h car does not pass through a thin wall (max z ' + worst.toFixed(2) + ')'); }
{ // two cars: a parked car is a solid obstacle
  const o = mk(S); o.x = 0; o.z = 40; o.parked = true; o.driver = -1; o.yaw = 0; const c = mk(S); let worst = 0;
  for (let i = 0; i < 60 * 8; i++) { stepCityCar(c, 1 / 60, { gas: 1, steer: 0 }, flat, [o], S, null); worst = Math.max(worst, c.z); }
  ok(worst < 40 - 4.0, 'a car cannot drive through a parked car (nose stops at z ' + worst.toFixed(2) + ' + half length)'); }
console.log(bad ? 'CITYVEH: FAILURES' : 'CITYVEH OK'); process.exit(bad ? 1 : 0);
