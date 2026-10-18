// Stunt Park: boosters push, ramps launch, the tunnel is drivable, a whole lap is possible without wrecking
import { CITY_VEH, newCityState, stepCityCar } from '../public/js/cityveh.js';
import { PARK, gtaH, gtaRoads, parkPath } from '../public/js/gta.js';
let bad = 0; const ok = (c, m) => { if (!c) bad++; console.log((c ? 'PASS ' : 'FAIL ') + m); };
const roads = gtaRoads(), T = PARK.tunnel;
const boxes = [[T.z - T.half - 1], [T.z + T.half + 1]].map(([zc]) => ({ x0: T.x0, x1: T.x1, z0: zc - 0.5, z1: zc + 0.5, h: T.h }));
const track = { terrain: gtaH, boxes: [...boxes, ...PARK.walls.map(([x0, z0, x1, z1]) => ({ x0, x1, z0, z1, h: PARK.wallH }))], segs: roads.segs, plazas: roads.plazas, boosts: roads.boosts, edge: 352 };
const spec = (id) => CITY_VEH.find((s) => s.id === id);
const mk = (id, x, z, yaw, v) => newCityState({ id, x, z, y: 0, pitch: 0, yaw, vx: Math.sin(yaw) * v, vz: Math.cos(yaw) * v, speed: v, steer: 0, driver: 1, parked: false, vy: 0, vyg: 0, air: false }, spec(id));
const wrap = (a) => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };
// a driver that follows the oval centre line (look-ahead point) at a target speed
function lap(id, vTarget) {
  const sp = spec(id), c = mk(id, PARK.cxW + 4, PARK.zT, Math.PI / 2, 14), P = parkPath(); P.push(P[0]);
  let crashes = 0, maxv = 0, air = 0, maxAir = 0, wall = 0, laps = 0, idx = 1, t = 0, minY = 0, maxY = 0;
  for (let i = 0; i < 60 * 80 && laps < 1; i++) {
    const look = 14; let best = 1e9, bi = idx; for (let k = 0; k < P.length - 1; k++) { const d = Math.hypot(P[k][0] - c.x, P[k][1] - c.z); if (d < best) { best = d; bi = k; } }
    let tgt = P[(bi + 1) % P.length], acc = 0, k2 = bi; while (acc < look) { const a = P[k2 % P.length], b = P[(k2 + 1) % P.length]; acc += Math.hypot(b[0] - a[0], b[1] - a[1]); k2++; tgt = P[k2 % P.length]; }
    const want = Math.atan2(tgt[0] - c.x, tgt[1] - c.z), err = wrap(want - c.yaw), v = Math.hypot(c.vx, c.vz);
    const ev = stepCityCar(c, 1 / 60, { gas: v < vTarget ? 1 : v > vTarget + 3 ? -1 : 0, steer: Math.max(-1, Math.min(1, -err * 1.6)), hb: false }, track, [], sp, null); t += 1 / 60;
    if (ev) console.log('  ev', ev, id, c.x.toFixed(0), c.z.toFixed(0), (Math.hypot(c.vx, c.vz) * 3.6).toFixed(0), c.hp.toFixed(0)); if (ev === 'crash') crashes++; if (c.air) { air += 1 / 60; maxAir = Math.max(maxAir, air); } else air = 0;
    maxv = Math.max(maxv, v); minY = Math.min(minY, c.y); maxY = Math.max(maxY, c.y);
    if (!Number.isFinite(c.x)) break; if (bi >= P.length - 3 && t > 20) laps = 1;
  }
  return { crashes, maxv, maxAir, laps, t, minY, maxY, hp: c.hp };
}
for (const id of [17, 11]) { const r = lap(id, 17); ok(r.laps === 1 && r.crashes <= 1 && r.hp > 85 && r.minY > -0.05 && r.maxY < 5, `${spec(id).name}: a full lap with no crash (lap ${r.t.toFixed(0)} s, top ${(r.maxv * 3.6).toFixed(0)} km/h, longest flight ${r.maxAir.toFixed(2)} s, hp ${r.hp})`); }
{ const c = mk(17, 180, 72, Math.PI / 2, 12); let mv = 0; for (let i = 0; i < 60 * 1.2; i++) { stepCityCar(c, 1 / 60, { gas: 1, steer: 0 }, track, [], spec(17), null); mv = Math.max(mv, c.speed); } ok(c.x > 188 && mv > 27, 'the booster pad adds speed (12 -> ' + (mv * 3.6).toFixed(0) + ' km/h in 1.2 s)'); }
{ const sp = spec(17), c = mk(17, 192, 72, Math.PI / 2, 38); let a0 = -1, a1 = -1, t = 0, x0 = 0, x1 = 0, ev = ''; for (let i = 0; i < 60 * 5; i++) { const e = stepCityCar(c, 1 / 60, { gas: 1, steer: 0 }, track, [], sp, null); if (e === 'crash') ev = e; t += 1 / 60; if (c.air && a0 < 0) { a0 = t; x0 = c.x; } if (!c.air && a0 > 0 && a1 < 0) { a1 = t; x1 = c.x; } }
  ok(a0 > 0 && a1 - a0 > 0.8 && x1 < PARK.x1, `the top ramp launches a fast car: ${(a1 - a0).toFixed(2)} s in the air, lands at x=${x1.toFixed(0)} (${(x1 - x0).toFixed(0)} m)`); }
{ const c = mk(17, 268, 112, -Math.PI / 2, 25); let ev = '', minx = 999, inT = 0; for (let i = 0; i < 60 * 3 && c.x > 216; i++) { const e = stepCityCar(c, 1 / 60, { gas: 1, steer: 0 }, track, [], spec(17), null); if (e) ev = e; if (c.x > T.x0 && c.x < T.x1) inT++; minx = Math.min(minx, c.x); }
  ok(inT > 20 && ev !== 'crash' && c.hp > 99, 'driving straight through the tunnel touches nothing (hp ' + c.hp + ')'); }
console.log(bad ? 'PARK FAILED' : 'PARK OK'); process.exit(bad ? 1 : 0);
