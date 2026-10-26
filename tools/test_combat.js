// BATTLE MAP + bots (pure logic)
import { layout, CombatSim, findPath, los, hitsSolid, rayWalls, cmbH, CMB, BRIDGE, ROADS, distRoad } from '../public/js/combat.js';
let bad = 0; const ok = (c, m) => { if (!c) { bad++; console.log('FAIL', m); } else console.log('PASS', m); };
const L = layout(), BUILDINGS = L.buildings;
ok(L.solids.length > 1000 && L.trees.length > 1500, 'map has walls and forests: ' + L.solids.length + ' solids, ' + L.trees.length + ' trees');
ok(BUILDINGS.length >= 45, 'buildings: ' + BUILDINGS.length);
ok(L.spots.length >= 150, 'loot spots: ' + L.spots.length);
ok(L.spots.every((s) => !hitsSolid(L, s.x, s.z, 0.9)), 'no loot spot is inside or touching a wall / tree / crate');
ok(L.spots.every((s) => cmbH(s.x, s.z) > -0.4), 'no loot spot is in the river');
ok(L.spawns.length >= 20 && L.spawns.every((s) => !hitsSolid(L, s.x, s.z, 1.5)), 'spawn points are clear: ' + L.spawns.length);
// the ground: river deep enough to swim, hills, flat building sites
let minH = 1e9, maxH = -1e9; for (let x = -290; x <= 290; x += 10) for (let z = -290; z <= 290; z += 10) { const h = cmbH(x, z); minH = Math.min(minH, h); maxH = Math.max(maxH, h); }
ok(minH < -2 && maxH > 40, 'terrain has a deep river and mountains: ' + minH.toFixed(1) + ' .. ' + maxH.toFixed(1));
ok(BUILDINGS.every((b) => Math.abs(cmbH(b.x, b.z) - b.fy) < 0.2 && Math.abs(cmbH(b.x + b.w / 2 + 0.5, b.z + b.d / 2 + 0.5) - b.fy) < 0.2), 'every building stands on flat ground');
ok(BUILDINGS.every((b) => b.fy > 0.2 || b.kind === 'cabin'), 'no building in the water');
let wet = 0; for (const r of ROADS) for (let i = 0; i + 1 < r.pts.length; i++) for (let t = 0; t <= 1; t += 0.1) { const x = r.pts[i][0] + (r.pts[i + 1][0] - r.pts[i][0]) * t, z = r.pts[i][1] + (r.pts[i + 1][1] - r.pts[i][1]) * t; if (cmbH(x, z) < -0.8) wet++; }
ok(wet === 0, 'roads stay out of the river (' + wet + ' wet points)');
// every building can be entered by a bot
let bn = 0; for (const b of BUILDINGS) { const sp0 = L.spawns.slice().sort((a, c) => Math.hypot(a.x - b.x, a.z - b.z) - Math.hypot(c.x - b.x, c.z - b.z))[0]; const p = findPath(L, sp0.x, sp0.z, b.x, b.z); if (!(p && p.length > 2)) { bn++; console.log('  no path to', b.kind, b.x, b.z); } }
ok(bn <= 3, 'paths into rooms: ' + (BUILDINGS.length - bn) + '/' + BUILDINGS.length);
const sp = L.spawns[0], sim = new CombatSim(5, 8), P = { x: sp.x, z: sp.z, hp: 100, alive: true };
let shots = 0, moved = 0; const start = sim.bots.map((b) => [b.x, b.z]);
const t0 = Date.now(); for (let i = 0; i < 60 * 40; i++) { sim.tick(1 / 30, P); for (const e of sim.drain()) if (e.k === 'shot') shots++; } const ms = Date.now() - t0;
sim.bots.forEach((b, i) => { if (Math.hypot(b.x - start[i][0], b.z - start[i][1]) > 3) moved++; });
ok(moved >= 5, 'bots roam (' + moved + '/8 moved)');
ok(sim.bots.every((b) => !hitsSolid(L, b.x, b.z, 0.2)), 'no bot stands inside a wall');
ok(ms < 4000, 'bot simulation is fast: ' + ms + ' ms for 80 s');
{ const sim2 = new CombatSim(9, 8), b0 = sim2.bots[0]; let s2 = 0, done = false; for (const sq of L.spawns) { for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { if (rayWalls(L, sq.x, sq.z, dx, dz, 24) < 24 || hitsSolid(L, sq.x + dx * 20, sq.z + dz * 20, 0.5)) continue; b0.alive = true; b0.hp = 100; b0.x = sq.x + dx * 20; b0.z = sq.z + dz * 20; b0.alert = 8; b0.path = null; const PP = { x: sq.x, z: sq.z, hp: 100, alive: true }; for (let i = 0; i < 30 * 6; i++) { sim2.tick(1 / 30, PP); for (const e of sim2.drain()) if (e.k === 'shot') s2++; } done = true; break; } if (done) break; }
  ok(s2 > 0, 'a bot with the player in sight shoots at him: ' + s2 + ' shots'); }
// player shoots a bot on open ground (find a clear line)
let tested = false; for (const s of L.spawns) { for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { if (rayWalls(L, s.x, s.z, dx, dz, 30) < 30) continue; const b = sim.bots.find((q) => q.alive); b.x = s.x + dx * 10; b.z = s.z + dz * 10; b.hp = 100; const d = sim.shoot(s.x, s.z, dx, dz, 70, 1.6); ok(d > 9 && d < 11 && b.hp < 100, 'a bullet hits a bot (' + b.hp + ' hp left)'); for (let i = 0; i < 4; i++) sim.shoot(s.x, s.z, dx, dz, 70, 1.6); ok(!b.alive, 'bot dies'); tested = true; break; } if (tested) break; }
ok(tested, 'found open ground for the shooting test');
// walls stop bullets: shoot at the centre of a building from 30 m away along each axis: at least one direction is blocked by a wall, and the bot inside is unhurt then
{ const B0 = BUILDINGS.find((b) => b.kind === 'warehouse'); const bb = sim.bots.find((q) => q.alive); bb.hp = 100; bb.x = B0.x; bb.z = B0.z; let blocked = 0, hurt = 0;
  for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) { const ox = B0.x - dx * 40, oz = B0.z - dz * 40; if (rayWalls(L, ox, oz, dx, dz, 40) < 39) { blocked++; sim.shoot(ox, oz, dx, dz, 80, 1.6); if (bb.hp < 100) hurt++; } }
  ok(blocked >= 2 && hurt === 0, 'walls protect a bot inside a warehouse (' + blocked + ' blocked lines, ' + hurt + ' hits through)'); }
// loot: take and respawn
const it = sim.loot[0]; const got = sim.take(it.x, it.z); ok(got === it, 'loot can be picked up'); for (let i = 0; i < 30 * 30; i++) sim.tick(1 / 30, { x: 0, z: 0, alive: true }); ok(sim.loot.filter((q) => q.alive).length >= 60, 'loot respawns: ' + sim.loot.filter((q) => q.alive).length);
console.log(bad ? 'COMBAT FAIL' : 'COMBAT OK'); process.exit(bad ? 1 : 0);
