import { buildLevel } from '../public/js/levels.js';
import { newBody, stepBody } from '../public/js/physics.js';
import { gtaH, gtaRoads, mtRoad, GT, gtaBuildings, gtaCars } from '../public/js/gta.js';
import { newCar, stepCar, corridor } from '../public/js/car.js';
let bad = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) bad++; };
const { world, info } = buildLevel(0, true, null, 1);
ok(world.terrain === gtaH && info.cars.length === 38, 'city built: 38 vehicles, terrain on');
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
const sb = newBody(); sb.x = 420; sb.z = 300; sb.y = gtaH(420, 300); let ev = false; for (let i = 0; i < 1500 && !ev; i++) { stepBody(world, sb, 1 / 60, { mx: 1, mz: 0 }); if (sb.events.includes('fell')) ev = true; sb.events.length = 0; }
ok(!ev && sb.swim > 0.5 && Math.abs(sb.y - (GT.SEA - 0.95)) < 0.7, 'walking into the sea makes you swim, not respawn (x ' + sb.x.toFixed(0) + ', y ' + sb.y.toFixed(2) + ', swim ' + (sb.swim || 0).toFixed(2) + ')');
// building is solid
const bd = gtaBuildings()[0]; const wb = newBody(); wb.x = bd.x - bd.w / 2 - 3; wb.z = bd.z; wb.y = 0.2; for (let i = 0; i < 120; i++) stepBody(world, wb, 1 / 60, { mx: 1, mz: 0 }); ok(wb.x < bd.x - bd.w / 2 + 0.1, 'buildings block you');
// ---- cars: free driving over the whole island
const tr = info.track;
const drive = (car, tx, tz, secs, gas = 1, cb) => { let t = 0; for (let i = 0; i < 60 * secs; i++) { const want = Math.atan2(tx - car.x, tz - car.z); let d = want - car.yaw; d = Math.atan2(Math.sin(d), Math.cos(d)); stepCar(car, 1 / 60, { gas, steer: Math.max(-1, Math.min(1, -d * 2.5)), hb: false }, tr, [], t); t += 1 / 60; if (cb) cb(car, t); } };
ok(typeof tr.terrain === 'function' && tr.boxes.length > 50, 'cars use the terrain (free driving) and know the buildings');
// the mountain road: a real car follows the spiral road up to the summit
{ const p0 = mtRoad(0), p1 = mtRoad(0.03), car = newCar(11, p0.x, p0.z, Math.atan2(p1.x - p0.x, p1.z - p0.z)); car.y = p0.y; let t = 0, u = 0.03, off = false;
  while (u <= 1 && t < 400) { const w = mtRoad(Math.min(1, u)); const want = Math.atan2(w.x - car.x, w.z - car.z); let d = want - car.yaw; d = Math.atan2(Math.sin(d), Math.cos(d));
    stepCar(car, 1 / 60, { gas: Math.hypot(car.vx, car.vz) < 12 ? 1 : 0.2, steer: Math.max(-1, Math.min(1, -d * 3)) }, tr, [], t); t += 1 / 60; if (Math.hypot(w.x - car.x, w.z - car.z) < 7) u += 0.015; if (!Number.isFinite(car.x)) break; }
  ok(car.y > 35, 'a sedan drives up the mountain road to the summit (y ' + car.y.toFixed(1) + ' in ' + t.toFixed(0) + ' s)'); void off; }
// buildings stop the car
{ const bd = gtaBuildings()[3]; const car = newCar(11, bd.x, bd.z - bd.d / 2 - 30, 0); drive(car, bd.x, bd.z, 4); ok(car.z < bd.z - bd.d / 2 + 0.5, 'a car cannot drive through a building'); }
// the sea stops the car
{ const car = newCar(11, 440, 300, Math.PI / 2); drive(car, 600, 300, 8); ok(car.wet > 0 && Number.isFinite(car.x), 'a car that drives into the sea gets wet and loses its drive (x ' + car.x.toFixed(0) + ', wet ' + (car.wet || 0).toFixed(1) + ')');
  for (let i = 0; i < 60 * 40; i++) stepCar(car, 1 / 60, { gas: 0, steer: 0 }, tr, [], 10);
  ok(car.sunk && Math.abs(car.y - gtaH(car.x, car.z)) < 0.2 && Math.hypot(car.vx, car.vz) < 0.5, 'then it sinks to the sea bed and stays there (y ' + car.y.toFixed(2) + ', bed ' + gtaH(car.x, car.z).toFixed(2) + ')'); }
// the realistic cars on the highway: the sports car is fast, the sedan slower
{ const a = newCar(17, -118, 0, Math.PI / 2), b2 = newCar(11, -118, 0, Math.PI / 2); let va = 0, vb = 0; drive(a, 118, 0, 22, 1, (c) => { va = Math.max(va, c.speed); }); drive(b2, 118, 0, 22, 1, (c) => { vb = Math.max(vb, c.speed); });
  ok(va * 3.6 > 110 && va > vb * 1.2, 'sports car ' + (va * 3.6).toFixed(0) + ' km/h vs sedan ' + (vb * 3.6).toFixed(0) + ' km/h'); }
// the sniper hill: ONE smooth S-bend road (no hairpin) that a car can climb, while the bare hillside beside it is a struggle
{ const { SNIPE, SNIPE_ACCESS } = await import('../public/js/gta.js'); const H = SNIPE.hill; let turn = 0;
  for (let i = 2; i < H.length; i++) { const a = Math.atan2(H[i - 1][1] - H[i - 2][1], H[i - 1][0] - H[i - 2][0]), b = Math.atan2(H[i][1] - H[i - 1][1], H[i][0] - H[i - 1][0]); let d = Math.abs(b - a); d = Math.min(d, 6.2832 - d); turn = Math.max(turn, d); }
  ok(turn < 0.5, 'the hill road has no sharp bend (max ' + (turn * 57.3).toFixed(0) + ' deg between points)');
  const e = SNIPE_ACCESS[SNIPE_ACCESS.length - 1]; ok(Math.hypot(H[0][0] - e[0], H[0][1] - e[1]) < 0.5, 'the hill road starts exactly where the access road ends');
  const start = H[0], nx = H[1]; const car = newCar(11, start[0], start[1], Math.atan2(nx[0] - start[0], nx[1] - start[1])); car.y = 0; let t = 0, k = 1;
  while (k < H.length && t < 120) { const w = H[k]; const want = Math.atan2(w[0] - car.x, w[1] - car.z); let d = want - car.yaw; d = Math.atan2(Math.sin(d), Math.cos(d));
    stepCar(car, 1 / 60, { gas: Math.hypot(car.vx, car.vz) < 9 ? 1 : 0.3, steer: Math.max(-1, Math.min(1, -d * 3)) }, tr, [], t); t += 1 / 60; if (Math.hypot(w[0] - car.x, w[1] - car.z) < 6) k++; if (!Number.isFinite(car.x)) break; }
  ok(car.y > 16 && k >= H.length, 'a sedan drives up the sniper hill road to the pad (y ' + car.y.toFixed(1) + ' in ' + t.toFixed(0) + ' s)');
  // the straight bare slope: from the plain right up the steep north-east face
  const c2 = newCar(11, 205, 300, Math.atan2(180 - 205, 334 - 300)); c2.y = gtaH(205, 300); let t2 = 0; while (t2 < 12) { stepCar(c2, 1 / 60, { gas: 1, steer: 0 }, tr, [], t2); t2 += 1 / 60; }
  ok(Number.isFinite(c2.x), 'a car on the bare hillside stays sane (y ' + c2.y.toFixed(1) + ')'); }
// no stunt ramps any more: the city street is flat
ok(gtaH(0, -40) === 0 && gtaH(-60, -100) === 0, 'the avenues are flat (no ramps)');
console.log(bad ? 'GTA: FAILURES' : 'GTA OK'); process.exit(bad ? 1 : 0);
