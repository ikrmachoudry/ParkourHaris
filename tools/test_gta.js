import { buildLevel } from '../public/js/levels.js';
import { newBody, stepBody } from '../public/js/physics.js';
import { gtaH, gtaRoads, mtRoad, GT, gtaBuildings } from '../public/js/gta.js';
import { newCar, stepCar, corridor } from '../public/js/car.js';
let bad = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) bad++; };
const { world, info } = buildLevel(7, true, null, 1);
ok(world.terrain === gtaH && info.cars.length === 8, 'city built: 8 cars, terrain on');
ok(Math.abs(gtaH(0, 0)) < 1e-6 && Math.abs(gtaH(90, -40)) < 1e-6, 'city is flat');
const top = mtRoad(1); ok(gtaH(top.x, top.z) > 38, 'summit is high (' + gtaH(top.x, top.z).toFixed(1) + ')');
let maxSlope = 0; for (let u = 0; u < 1; u += 0.005) { const a = mtRoad(u), b = mtRoad(u + 0.005); maxSlope = Math.max(maxSlope, Math.abs(b.y - a.y) / Math.hypot(b.x - a.x, b.z - a.z)); }
ok(maxSlope < 0.2, 'mountain road slope is drivable (' + maxSlope.toFixed(3) + ')');
let maxErr = 0; for (let u = 0; u <= 1; u += 0.01) { const p = mtRoad(u); maxErr = Math.max(maxErr, Math.abs(gtaH(p.x, p.z) - p.y)); } ok(maxErr < 0.01, 'ground under the road = road height (err ' + maxErr.toFixed(4) + ')');
// a person stands on the ground and walks over a building-free line up a hill
const b = newBody(); b.x = 4; b.y = 0; b.z = 9; for (let i = 0; i < 60; i++) stepBody(world, b, 1 / 60, { mx: 0, mz: 0 }); ok(b.grounded && Math.abs(b.y) < 0.01, 'spawn: stands on the road');
// walk up the mountain road following it
let hy = 0, fell = false; const bb = newBody(); const p0 = mtRoad(0); bb.x = p0.x; bb.z = p0.z; bb.y = 0.5;
for (let u = 0.01; u <= 0.5; u += 0.01) { const p = mtRoad(u); for (let k = 0; k < 90; k++) { const dx = p.x - bb.x, dz = p.z - bb.z, d = Math.hypot(dx, dz) || 1; stepBody(world, bb, 1 / 60, { mx: dx / d, mz: dz / d, jumpPressed: false, jumpHeld: false }); bb.events.length = 0; if (d < 1.5) break; } if (bb.y < -2) fell = true; hy = bb.y; }
ok(!fell && hy > 15, 'a player walks up the spiral road to height ' + hy.toFixed(1));
// walk straight into the sea: must respawn event (fell) eventually
const sb = newBody(); sb.x = 250; sb.z = 100; sb.y = gtaH(250, 100); let ev = false; for (let i = 0; i < 1500 && !ev; i++) { stepBody(world, sb, 1 / 60, { mx: 1, mz: 0 }); if (sb.events.includes('fell')) ev = true; sb.events.length = 0; }
ok(ev, 'walking into the sea triggers a respawn (x ' + sb.x.toFixed(0) + ')');
// building is solid
const bd = gtaBuildings()[0]; const wb = newBody(); wb.x = bd.x - bd.w / 2 - 3; wb.z = bd.z; wb.y = 0.2; for (let i = 0; i < 120; i++) stepBody(world, wb, 1 / 60, { mx: 1, mz: 0 }); ok(wb.x < bd.x - bd.w / 2 + 0.1, 'buildings block you');
// car drives up the mountain
const car = newCar(0, p0.x + 3, p0.z + 3, 0); const tr = info.track; let t = 0; car.y = 0;
for (let i = 0; i < 60 * 150; i++) { const c = corridor(tr, car.x, car.z, 1.5, car.y); const tgt = mtRoad(Math.min(1, 0.001 + (car._u || 0))); const near = mtRoad(car._u || 0); if (Math.hypot(near.x - car.x, near.z - car.z) < 9) car._u = Math.min(1, (car._u || 0) + 0.004);
  const T = mtRoad(Math.min(1, (car._u || 0) + 0.03)); const want = Math.atan2(T.x - car.x, T.z - car.z); let d = want - car.yaw; d = Math.atan2(Math.sin(d), Math.cos(d));
  stepCar(car, 1 / 60, { gas: 1, steer: Math.max(-1, Math.min(1, -d * 2.5)), hb: false }, tr, [], t); t += 1 / 60; void tgt; void c; }
console.log('car', car.x.toFixed(1), car.z.toFixed(1), car.speed.toFixed(1), car.yaw.toFixed(2)); ok(car.y > 25, 'car climbs the mountain road (y ' + car.y.toFixed(1) + ', u ' + (car._u || 0).toFixed(2) + ')');
console.log(bad ? 'GTA: FAILURES' : 'GTA OK'); process.exit(bad ? 1 : 0);
