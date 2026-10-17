// Fun Map checks: walk the main road + the maze solution to the final door, air pad hover, slide, trampoline, no-death floor.
import { buildLevel } from '../public/js/levels.js';
import { newBody, stepBody, respawn } from '../public/js/physics.js';
import { newCar, stepCar, CAR_SPECS, corridor } from '../public/js/car.js';
const DT = 1 / 90, idle = { mx: 0, mz: 0, jumpPressed: false, jumpHeld: false, divePressed: false };
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const { world, info } = buildLevel(5, true);
ok(world.waterY < -30 && world.killY < -50, 'kill plane far below the park (nothing to fall into)');

function walk(waypoints, startPos, maxT = 200) {
  const b = newBody(); respawn(b, startPos[0], 0.05, startPos[1], Math.PI);
  let t = 20, wi = 0;
  for (let i = 0; i < maxT * 90; i++) {
    world.update(t, DT); world.carry(b);
    const [wx, wz] = waypoints[wi], dx = wx - b.x, dz = wz - b.z, d = Math.hypot(dx, dz);
    if (d < 1.2 && wi < waypoints.length - 1) wi++;
    stepBody(world, b, DT, { mx: d > 0.01 ? dx / d : 0, mz: d > 0.01 ? dz / d : 0, jumpPressed: false, jumpHeld: false, divePressed: false });
    b.events.length = 0; t += DT;
    if (b.z < info.finishZ && b.y > info.finishY - 3) return { ok: true, t: +(i * DT).toFixed(1), wi, n: waypoints.length };
    if (b.y < -3) return { ok: false, why: 'fell', z: b.z, x: b.x };
  }
  return { ok: false, why: 'timeout', wi, n: waypoints.length, x: +b.x.toFixed(1), z: +b.z.toFixed(1) };
}
const road = [[11, -20], [11, -70], [11, -140], [11, -200], [11, -230], [0, -232], [11, -300], [0, -350]];
const wp = [...road, ...info.mazePath, [0, -420], [0, -430]];
const r = walk(wp, [0, 1.5]);
ok(r.ok, `walk start -> maze -> final door: ${JSON.stringify(r)}  (maze path has ${info.mazePath.length} cells)`);
ok(r.ok && r.t < 200, 'route takes well under the 480 s limit');

// air pad: float up and hover near the top
{
  const z = world.zones[0], b = newBody(); respawn(b, z.x, 0.05, z.z, Math.PI); let t = 5, maxY = 0;
  for (let i = 0; i < 90 * 8; i++) { world.update(t, DT); stepBody(world, b, DT, idle); b.events.length = 0; t += DT; maxY = Math.max(maxY, b.y); }
  ok(maxY > z.y1 - 4 && b.y > z.y1 - 5 && b.y < z.y1 + 1, `air pad lifts to ${maxY.toFixed(1)} m and hovers (now ${b.y.toFixed(1)}; top ${z.y1})`);
}
// trampoline onto the sky deck
{
  const deck = world.solids.find((s) => s.y1 === 9 && s.x0 > 20 && s.z1 < -40);
  const m = world.discs.find((d) => d.bounce === 29), b = newBody(); respawn(b, m.cx, 0.05, m.cz, Math.PI); let t = 5, on = false;
  for (let i = 0; i < 90 * 5; i++) {
    world.update(t, DT); world.carry(b);
    stepBody(world, b, DT, { ...idle, mx: 1, mz: 0 }); b.events.length = 0; t += DT; if (b.grounded && b.ground === deck) on = true;
  }
  ok(on, 'mushroom launches you onto the sky deck');
}
// slide from the tower top to the ground
{
  const b = newBody(); respawn(b, -28, 10.05, -108.5, Math.PI); let t = 5, minY = 99, zEnd = 0;
  for (let i = 0; i < 90 * 12; i++) { world.update(t, DT); world.carry(b); stepBody(world, b, DT, { ...idle, mz: -1 }); b.events.length = 0; t += DT; minY = Math.min(minY, b.y); zEnd = b.z; }
  ok(minY > -1 && zEnd < -140, `slide carries you down to the ground (z ${zEnd.toFixed(1)}, min y ${minY.toFixed(2)})`);
}
// ferris wheel gondola lifts a rider
{
  const g = world.solids.filter((s) => s.moving && Math.abs(s.x1 - s.x0 - 5) < 0.01 && s.x0 < -25 && s.x0 > -35 && s.z0 < -200);
  ok(g.length === 6, `ferris wheel has ${g.length} gondolas`);
}
// cannon: flies ~20 m forward, lands safely
{
  const cn = world.discs.find((d) => d.push), b = newBody(); respawn(b, cn.cx, 0.05, cn.cz, Math.PI); let t = 5, landZ = null, air = false;
  for (let i = 0; i < 90 * 5; i++) { world.update(t, DT); world.carry(b); stepBody(world, b, DT, { ...idle, mz: 0 }); if (!b.grounded) air = true; if (air && b.grounded && landZ === null) landZ = b.z; b.events.length = 0; t += DT; }
  ok(landZ !== null && cn.cz - landZ > 14 && b.y > -0.5, `cannon throws you ${landZ === null ? '?' : (cn.cz - landZ).toFixed(1)} m forward and you land safely`);
}
// drop tower lifts a rider
{
  const lift = world.solids.find((s) => s.moving && Math.abs(s.x1 - s.x0 - 6) < 0.01 && s.x0 < -30 && s.x0 > -36 && s.z0 < -78 && s.z0 > -90);
  const b = newBody(); respawn(b, (lift.x0 + lift.x1) / 2, 0.15, (lift.z0 + lift.z1) / 2, Math.PI); let t = 13 * 3 + 0.2, maxY = 0;
  for (let i = 0; i < 90 * 8; i++) { world.update(t, DT); world.carry(b); stepBody(world, b, DT, idle); b.events.length = 0; t += DT; maxY = Math.max(maxY, b.y); }
  ok(maxY > 12, `drop tower lifts the rider to ${maxY.toFixed(1)} m`);
}
// pirate ship carries a rider
{
  const ship = world.solids.find((s) => s.moving && Math.abs(s.x1 - s.x0 - 10) < 0.01 && Math.abs(s.z1 - s.z0 - 5) < 0.01);
  const b = newBody(); respawn(b, (ship.x0 + ship.x1) / 2, ship.y1 + 0.05, (ship.z0 + ship.z1) / 2, Math.PI); let t = 0, minZ = 0, maxZ = 0, off = false;
  for (let i = 0; i < 90 * 14; i++) { world.update(t, DT); world.carry(b); stepBody(world, b, DT, idle); b.events.length = 0; t += DT; minZ = Math.min(minZ, b.z + 70); maxZ = Math.max(maxZ, b.z + 70); if (b.y < -0.5) off = true; }
  ok(!off && maxZ - minZ > 8, `pirate ship swings the rider ${(maxZ - minZ).toFixed(1)} m`);
}
// ---- cars: 4 different cars wait at the CAR STATION; a long road runs down the map and joins the oval; roads have boundaries
{
  const TR = info.track;
  ok(info.cars.length === 4 && new Set(CAR_SPECS.map((c) => c.color)).size === 4, '4 cars with 4 different colours');
  ok(info.cars.every((c) => corridor(TR, c.x, c.z, 1.5).d < 0 && c.z > -40 && c.x > 45), 'all 4 cars are parked inside the car station at the start of the long road');
  ok([[56, -27], [56, -150], [56, -300], [40, -300], [29, -300], [0, -339], [-29, -300], [56, -420]].every(([x, z]) => corridor(TR, x, z, 0.5).d < 0), 'road network is connected: station -> highway -> connector -> oval, and the far turn-around');
  ok(corridor(TR, 20, -150, 1.5).d > 5 && corridor(TR, 0, -50, 1.5).d > 5, 'the meadow / rides are outside the roads (cars cannot drive there)');
  { const big = { segs: [{ ax: -1e5, az: 0, bx: 1e5, bz: 0, hw: 1e5 }], plazas: [], boosts: [] }, s2 = newCar(0, 0, 0, 0); for (let i = 0; i < 90 * 14; i++) stepCar(s2, DT, { gas: 1, steer: 0, hb: false }, big, []); ok(s2.speed > 24 && s2.speed < 30, `top speed on a straight: ${s2.speed.toFixed(1)} m/s (${(s2.speed * 3.6).toFixed(0)} km/h)`); }
  // drive the long road from the station: full throttle straight down (cars face -z)
  const c = newCar(0, info.cars[0].x, info.cars[0].z, info.cars[0].yaw); let t = 0, outside = false, reach = 0;
  for (let i = 0; i < 90 * 30; i++) { stepCar(c, DT, { gas: 1, steer: 0, hb: false }, TR, []); if (corridor(TR, c.x, c.z, 0).d > 0.01) outside = true; reach = Math.min(reach, c.z); }
  ok(!outside && reach < -300, `long road: car drives ${(-reach - 22).toFixed(0)} m along the highway and stays on the road`);
  // swerving hard into the barriers never leaves the road
  const d = newCar(1, info.cars[1].x, info.cars[1].z, info.cars[1].yaw); let out2 = false, bumps = 0;
  for (let i = 0; i < 90 * 25; i++) { const ev = stepCar(d, DT, { gas: 1, steer: Math.sin(i / 90 * 1.3) > 0 ? 1 : -1, hb: false }, TR, []); if (ev === 'bump') bumps++; if (corridor(TR, d.x, d.z, 0).d > 0.01) out2 = true; }
  ok(!out2, `barriers hold: zig-zagging into the walls never leaves the road (${bumps} bumps)`);
  const e = newCar(2, info.cars[2].x, info.cars[2].z, info.cars[2].yaw), o = { x: e.x + 3.0, z: e.z };
  stepCar(e, DT, { gas: 0, steer: 0, hb: false }, TR, [o]);
  ok(Math.hypot(e.x - o.x, e.z - o.z) >= 3.5, 'cars push apart (no overlapping)');
  const f = newCar(3, info.cars[3].x, info.cars[3].z, info.cars[3].yaw); let sp2 = 0;
  for (let i = 0; i < 90 * 3; i++) stepCar(f, DT, { gas: 1, steer: 0, hb: false }, TR, []);
  for (let i = 0; i < 90 * 4; i++) { stepCar(f, DT, { gas: -1, steer: 0, hb: false }, TR, []); sp2 = f.speed; }
  ok(Math.abs(sp2) < 9.5, `brake slows the car down (speed ${sp2.toFixed(1)}), then it reverses gently`);
}
process.exit(fails ? 1 : 0);
