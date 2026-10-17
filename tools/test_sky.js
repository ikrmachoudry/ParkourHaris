// Sky Speedway checks: no clash with the rides, the whole route is drivable (ramps, plazas, gates), obstacles hit hard, racers are faster.
import { buildLevel } from '../public/js/levels.js';
import { newCar, stepCar, CAR_SPECS, corridor } from '../public/js/car.js';
const DT = 1 / 90;
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const { world, info } = buildLevel(5, true);
const TR = info.track, SK = info.sky, Y = SK.y;
ok(!!SK && info.cars.length === 8 && info.cars.filter((c) => c.id >= 4).every((c) => c.y === Y), '8 cars: 4 normal + 4 red racers parked up on the sky plaza');
ok(info.cars.filter((c) => c.id >= 4).every((c) => { const q = corridor(TR, c.x, c.z, 1.5, c.y); return q.d < 0 && Math.abs(q.h - Y) < 0.01; }), 'racers sit inside the sky garage plaza');

// ---- no clash with rides: sample every sky-road point + pillar against every solid (moving ones over time)
{
  const pts = []; // [x, z, radius, y0, y1]  volumes the sky structure uses
  for (const s of TR.segs) { if ((s.y0 || 0) < 0.5 && (s.y1 || 0) < 0.5) continue; const L = Math.hypot(s.bx - s.ax, s.bz - s.az), n = Math.ceil(L / 2); for (let i = 0; i <= n; i++) { const t = i / n, x = s.ax + (s.bx - s.ax) * t, z = s.az + (s.bz - s.az) * t, h = (s.y0 || 0) + ((s.y1 === undefined ? s.y0 : s.y1) - (s.y0 || 0)) * t; pts.push([x, z, s.hw + 0.5, h - 1.3, h + 4]); } }
  for (const p of TR.plazas) if (p.y > 0) pts.push([p.x, p.z, p.r + 0.5, p.y - 1.3, p.y + 4]);
  const cols = [];
  for (const sd of [1, -1]) {
    for (let z = -40; z > -405; z -= 30) if (Math.abs(z + 26) > 20) { cols.push([sd * 56 - 10.2, z], [sd * 56 + 10.2, z]); }
    cols.push([sd * 38 - 6.6, -380], [sd * 38 + 6.6, -380], [sd * 38 - 6.6, -365], [sd * 38 + 6.6, -365], [sd * 56, -4], [sd * 34, -421], [sd * 44, -404]);
  }
  let clashes = [], maxSolidTopOnRoad = 0;
  for (let tt = 0; tt < 30; tt += 0.5) {
    world.update(tt, 0.5);
    for (const s of world.solids) {
      if (s.active === false) continue;
      const wall = s.x0 < -69 || s.x1 > 69 || s.z0 < -440 || s.z1 > 10;
      if (s.y1 <= 0.01 || wall) continue;
      for (const [x, z, r, y0, y1] of pts) { if (x > s.x0 - r && x < s.x1 + r && z > s.z0 - r && z < s.z1 + r && s.y1 > y0 && s.y0 < y1) clashes.push(`road ${x.toFixed(0)},${z.toFixed(0)} vs solid ${s.x0.toFixed(0)}..${s.x1.toFixed(0)} ${s.z0.toFixed(0)}..${s.z1.toFixed(0)} y${s.y0.toFixed(1)}..${s.y1.toFixed(1)}`); }
      for (const [x, z] of cols) if (x > s.x0 - 1.8 && x < s.x1 + 1.8 && z > s.z0 - 1.8 && z < s.z1 + 1.8 && s.y1 > 0.3) clashes.push(`pillar ${x.toFixed(0)},${z.toFixed(0)} vs solid ${s.x0.toFixed(0)}..${s.x1.toFixed(0)} ${s.z0.toFixed(0)}..${s.z1.toFixed(0)}`);
    }
  }
  ok(clashes.length === 0, `sky road + pillars never touch any ride (${clashes.length} clashes ${[...new Set(clashes)].slice(0, 4).join(' | ')})`);
  // nothing on the ground sits where the ramps/plazas stand either (checked above), and rides keep clear of both side strips
  const sideSolids = world.solids.filter((s) => s.y1 > 0.3 && !(s.x0 < -69 || s.x1 > 69) && ((s.x1 > 44 && s.x0 < 70) || (s.x0 < -44 && s.x1 > -70)) && s.z0 > -330 && s.z1 < -10);
  ok(sideSolids.length === 0, `side strips (x beyond +-44) hold only the roads: ${sideSolids.length} solids found`);
}

// ---- drive the whole route with a simple pure-pursuit bot (obstacles off) to prove the geometry works
function drive(startCar, pts, maxT, trk, gas0 = 1) {
  const c = startCar; let wi = 0, t = 0, outside = 0, maxY = 0, gates = 0, nearGarage = false; const log = [];
  for (let i = 0; i < 90 * maxT && wi < pts.length; i++, t += DT) {
    const [wx, wz] = pts[wi], dx = wx - c.x, dz = wz - c.z, d = Math.hypot(dx, dz);
    if (d < 7) { wi++; continue; }
    let err = Math.atan2(dx, dz) - c.yaw; err = Math.atan2(Math.sin(err), Math.cos(err));
    const steer = Math.max(-1, Math.min(1, -err * 2.6));
    stepCar(c, DT, { gas: Math.abs(err) > 0.8 ? 0.35 * gas0 : gas0, steer, hb: false }, trk, [], t);
    const q = corridor(trk, c.x, c.z, 0, c.y); if (q.d > 0.05) outside++;
    maxY = Math.max(maxY, c.y);
    const g = SK.gates[gates]; if (g && c.y > Y - 4) { const ax = gates === 1; if (Math.abs(c.x - g.x) < (ax ? 4 : g.w) && Math.abs(c.z - g.z) < (ax ? g.w : 4)) gates++; }
    if (Math.hypot(c.x - SK.garage.x, c.z - SK.garage.z) < SK.garage.r && c.y > Y - 3) nearGarage = true;
  }
  return { c, t, wi, outside, maxY, gates, nearGarage };
}
const clean = { ...TR, dyn: null, slicks: [] };
const route = [[56, -60], [56, -300], [50, -326], [38, -352], [38, -404], [44, -418], [55, -412], [56, -380], [56, -20], [50, -4], [20, -4], [-50, -4], [-56, -20], [-56, -380], [-50, -412], [-47, -416]];
{
  const car = newCar(0, info.cars[0].x, info.cars[0].z, info.cars[0].yaw);
  const r = drive(car, [[56, -150], ...route], 150, clean);
  ok(r.wi === route.length + 1 && r.maxY > Y - 0.3, `bot drives station -> ramp -> sky road -> garage in ${r.t.toFixed(0)} s (waypoints ${r.wi}/${route.length + 1}, max height ${r.maxY.toFixed(1)} m)`);
  ok(r.outside === 0, `bot never leaves the road/ramp (${r.outside} frames outside)`);
  ok(r.gates === SK.gates.length, `all ${SK.gates.length} sky gates are hit in order (${r.gates})`);
  ok(r.nearGarage, 'route ends inside the racer garage');
  // way back down: exit ramp onto the left highway
  const down = drive(r.c, [[-38, -406], [-38, -352], [-52, -326], [-56, -300]], 60, clean);
  ok(down.wi === 4 && down.c.y < 0.5 && down.outside === 0, `exit ramp brings the car back to the ground (y ${down.c.y.toFixed(2)})`);
}
// ---- the same route WITH obstacles: every obstacle exists, and a sloppy driver gets knocked about (spin / crash) but can't leave the road
{
  const dyn = TR.dyn(3.0); ok(dyn.length > 60, `${dyn.length} obstacle circles on the sky road`);
  const car = newCar(0, info.cars[0].x, info.cars[0].z, info.cars[0].yaw);
  const r = drive(car, [[56, -150], ...route], 400, TR);
  ok(r.outside === 0, `with obstacles the car still never leaves the road (${r.outside} frames outside), it got as far as waypoint ${r.wi}/${route.length + 1}`);
}
// ---- crash into a static barrel at speed -> big jolt
{
  const c = newCar(0, 56 - 3.2 + 0.9, -405, 0); c.y = Y; c.driver = 1; c.yaw = 0; let ev = '', maxSpin = 0, evs = [];
  c.vz = 22; c.speed = 22; c.vx = 0;
  for (let i = 0; i < 90 * 2; i++) { const e = stepCar(c, DT, { gas: 0, steer: 0, hb: false }, TR, [], 0); if (e) evs.push(e); if (e === 'crash') ev = e; maxSpin = Math.max(maxSpin, Math.abs(c.spin || 0)); }
  ok(ev === 'crash' && maxSpin > 0.2 && c.speed < 14, `hitting a barrel at 79 km/h: crash event, spin ${maxSpin.toFixed(2)} rad/s, speed drops to ${(c.speed * 3.6).toFixed(0)} km/h ${evs.join(',')}`);
}
// ---- moving sweeper knocks the car sideways
{
  let hit = false;
  for (let ph = 0; ph < 6 && !hit; ph += 0.5) { const c = newCar(0, 56, -345, 0); c.y = Y; c.vz = 24; c.speed = 24; for (let i = 0; i < 90 * 1.5; i++) { const e = stepCar(c, DT, { gas: 0, steer: 0, hb: false }, TR, [], ph + i * DT); if (e) hit = true; } }
  ok(hit, 'a car driving straight into the sweeping wall gets hit at some timing');
}
// ---- oil slick = no grip
{
  const sl = TR.slicks[0], a = newCar(0, sl.x, sl.z + 4, 0), b = newCar(0, sl.x + 30, sl.z + 4, 0); a.y = b.y = Y;
  const clearTR = { ...TR, dyn: null };
  for (const c of [a, b]) { c.vz = 20; c.speed = 20; }
  let da = 0, db = 0, sawSlick = false;
  for (let i = 0; i < 90 * 0.8; i++) { sawSlick = sawSlick || a.slick === 1; stepCar(a, DT, { gas: 0, steer: 1, hb: false }, clearTR, [], 0); stepCar(b, DT, { gas: 0, steer: 1, hb: false }, { ...clearTR, slicks: [] }, [], 0); da = Math.max(da, a.drift); db = Math.max(db, b.drift); }
  ok(sawSlick && da > db, `oil slick: car slides (drift ${da.toFixed(2)} vs ${db.toFixed(2)} on dry road)`);
}
// ---- racer vs sprinter
{
  const run = (id) => { const c = newCar(id, 0, 0, 0); const big = { segs: [{ ax: -1e5, az: 0, bx: 1e5, bz: 0, hw: 1e5 }], plazas: [], boosts: [] }; let t27 = -1, top = 0; for (let i = 0; i < 90 * 20; i++) { stepCar(c, DT, { gas: 1, steer: 0, hb: false }, big, [], 0); if (t27 < 0 && c.speed >= 26) t27 = i * DT; top = Math.max(top, c.speed); } return { t27, top }; };
  const a = run(0), r = run(4);
  ok(r.top > 38 && r.top > a.top * 1.4, `racer top speed ${(r.top * 3.6).toFixed(0)} km/h vs sprinter ${(a.top * 3.6).toFixed(0)} km/h`);
  ok(r.t27 > 0 && a.t27 > 0 && r.t27 < a.t27 * 0.7, `racer reaches 94 km/h in ${r.t27.toFixed(1)} s (sprinter ${a.t27.toFixed(1)} s)`);
}
// ---- uphill is harder than flat
{
  const flat = { ...TR, dyn: null }, mk = () => { const c = newCar(0, 38, -352, Math.PI); c.vz = -15; c.speed = -15; return c; };
  const up = newCar(4, 38, -352, Math.PI); up.vz = -15; up.speed = 15; up.vx = 0;
  for (let i = 0; i < 90 * 2; i++) stepCar(up, DT, { gas: 0, steer: 0, hb: false }, flat, [], 0);
  ok(up.y > 3 && up.speed < 15 - 3, `ramp: car climbs to ${up.y.toFixed(1)} m and loses speed to gravity (${(up.speed * 3.6).toFixed(0)} km/h)`);
}
console.log(fails ? `SKY: ${fails} FAILED` : 'SKY: ALL OK'); process.exit(fails ? 1 : 0);
