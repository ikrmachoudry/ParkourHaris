import { buildLevel } from '../public/js/levels.js';
import { newBody, stepBody } from '../public/js/physics.js';
import { gtaH, gtaRoads, mtRoad, GT, gtaBuildings, gtaCars } from '../public/js/gta.js';
import { TH, newThugs, stealThug, hitThug, stepThugs } from '../public/js/thugs.js';
import { newCar, stepCar, corridor } from '../public/js/car.js';
let bad = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) bad++; };
const { world, info } = buildLevel(7, true, null, 1);
ok(world.terrain === gtaH && info.cars.length === 8, 'city built: 8 vehicles, terrain on');
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
// ---- cars: free driving over the whole island
const tr = info.track;
const drive = (car, tx, tz, secs, gas = 1, cb) => { let t = 0; for (let i = 0; i < 60 * secs; i++) { const want = Math.atan2(tx - car.x, tz - car.z); let d = want - car.yaw; d = Math.atan2(Math.sin(d), Math.cos(d)); stepCar(car, 1 / 60, { gas, steer: Math.max(-1, Math.min(1, -d * 2.5)), hb: false }, tr, [], t); t += 1 / 60; if (cb) cb(car, t); } };
ok(tr.terrain === gtaH && tr.boxes.length > 50, 'cars use the terrain (free driving) and know the buildings');
// off-road: up the mountain slope from the city side, straight over the grass
{ const car = newCar(0, -140, -100, Math.atan2(-215 + 140, -215 + 100)); drive(car, -215, -215, 40); ok(car.y > 25, 'a car drives straight up the mountain off-road (y ' + car.y.toFixed(1) + ')'); }
// ramp: hit the kicker at speed -> airborne, lands again
{ const car = newCar(0, -60, -140, 0); let air = 0, maxY = 0; drive(car, -60, -60, 8, 1, (c) => { if (c.air) air++; maxY = Math.max(maxY, c.y); }); ok(air > 10 && maxY > 3, 'a ramp launches the car (air frames ' + air + ', top ' + maxY.toFixed(1) + ' m)'); ok(!car.air && Math.abs(car.y - gtaH(car.x, car.z)) < 0.2, 'and it lands on the ground'); }
// highway mega ramp with the super car: big jump
{ const car = newCar(10, 150, 0, Math.PI / 2); let air = 0, vmax = 0, far = 0; drive(car, 330, 0, 9, 1, (c) => { if (c.air) air++; vmax = Math.max(vmax, Math.hypot(c.vx, c.vz)); }); ok(vmax * 3.6 > 250, 'super car passes 250 km/h (' + (vmax * 3.6).toFixed(0) + ')'); ok(vmax * 3.6 <= 301, 'super car is limited to ~300 km/h'); ok(air > 20, 'mega ramp = long flight (' + air + ' frames)'); void far; }
// super bike 190, normal bike less
{ const a = newCar(9, 0, -60, 0), b2 = newCar(8, 20, -60, 0); let va = 0, vb = 0; drive(a, 0, 100, 12, 1, (c) => { va = Math.max(va, c.speed); }); drive(b2, 20, 100, 12, 1, (c) => { vb = Math.max(vb, c.speed); }); ok(va * 3.6 > 170 && va * 3.6 < 195, 'super bike ~190 km/h (' + (va * 3.6).toFixed(0) + ')'); ok(vb * 3.6 < 125, 'bike is slower (' + (vb * 3.6).toFixed(0) + ')'); }
// buildings stop the car
{ const bd = gtaBuildings()[3]; const car = newCar(0, bd.x, bd.z - bd.d / 2 - 30, 0); drive(car, bd.x, bd.z, 4); ok(car.z < bd.z - bd.d / 2 + 0.5, 'a car cannot drive through a building'); }
// the sea stops the car
{ const car = newCar(0, 300, 200, Math.PI / 2); drive(car, 390, 200, 8); ok(gtaH(car.x, car.z) > -0.6, 'a car cannot drive into the sea (x ' + car.x.toFixed(0) + ')'); }
// a person can walk up a ramp
{ const pb = newBody(); pb.x = -60; pb.z = -104; pb.y = 0; for (let i = 0; i < 120; i++) stepBody(world, pb, 1 / 60, { mx: 0, mz: 1 }); ok(pb.y > 2.5, 'a person walks up a stunt ramp (y ' + pb.y.toFixed(1) + ')'); }
// THUGS: seated -> steal -> chase + punch -> bat x4 -> dead
{ const cars = gtaCars(), ths = newThugs(cars); ok(ths.length === 8 && ths.every((t) => t.st === TH.SEAT), 'a thug sits in each of the 8 vehicles');
  ok(!hitThug(ths, 0, cars[0].x, cars[0].z + 1, 0, 1, false), 'cannot bat a thug who is still sitting in the car');
  const c = cars[0]; ok(stealThug(ths, 0, 'me', c.x, c.z + 3, c.x, c.z), 'stealing wakes the thug'); ok(!stealThug(ths, 0, 'me', c.x, c.z + 3, c.x, c.z), 'cannot steal twice');
  const me = { id: 'me', x: c.x + 20, y: 0, z: c.z + 20 }; let hits = 0;
  for (let i = 0; i < 400; i++) for (const e of stepThugs(ths, 1 / 20, [me], gtaH)) if (e.k === 'hit') hits++;
  ok(Math.hypot(ths[0].x - me.x, ths[0].z - me.z) < 2.2, 'the thug chases and reaches the player'); ok(hits >= 3 && hits < 20, 'he punches with a cooldown (' + hits + ' hits in 20 s)');
  ok(ths[1].st === TH.SEAT, 'other thugs stay seated');
  let ev = null, swings = 0; for (let i = 0; i < 6 && !(ev && ev.k === 'die'); i++) { ths[0].x = me.x + 1.5; ths[0].z = me.z; ev = hitThug(ths, 0, me.x, me.z, 1, 0, false); if (ev) swings++; }
  ok(ev && ev.k === 'die' && swings === TH.HP && ths[0].st === TH.DEAD, 'he takes ' + TH.HP + ' bat hits then dies'); ok(!hitThug(ths, 0, me.x, me.z, 1, 0, false), 'a dead thug cannot be hit');
  const far = { id: 'me', x: 0, y: 0, z: 0 }; ths[2].st = TH.FIGHT; ths[2].x = 5; ths[2].z = 5; ok(!hitThug(ths, 2, far.x - 6, far.z, 1, 0, false), 'a bat swing from far away misses'); }
console.log(bad ? 'GTA: FAILURES' : 'GTA OK'); process.exit(bad ? 1 : 0);
