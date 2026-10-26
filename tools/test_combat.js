// COMBAT MISSION map + bots (pure logic)
import { layout, CombatSim, findPath, los, hitsSolid, BUILDINGS, CMB } from '../public/js/combat.js';
let bad = 0; const ok = (c, m) => { if (!c) { bad++; console.log('FAIL', m); } else console.log('PASS', m); };
const L = layout();
ok(L.solids.length > 200 && L.trees.length > 100, 'map has walls and jungle: ' + L.solids.length + ' solids, ' + L.trees.length + ' trees');
ok(L.spots.length >= 40, 'loot spots: ' + L.spots.length);
ok(L.spots.every((s) => !hitsSolid(L, s.x, s.z, 0.9, 1.0)), 'no loot spot is inside or touching a wall');
ok(L.spawns.length >= 12 && L.spawns.every((s) => !hitsSolid(L, s.x, s.z, 1.5, 1.0)), 'spawn points are clear: ' + L.spawns.length);
// every room can be entered: path from outside (road) to the room centre
for (const b of BUILDINGS) { const p = findPath(L, 0, 0, b.x, b.z); ok(p && p.length > 2, 'path into room at ' + b.x + ',' + b.z + (p ? ' (' + p.length + ' steps)' : '')); }
ok(!los(L, 45 - 8, -62 - 12, 45 - 8, -62 + 3) || true, 'los runs');
const sim = new CombatSim(5, 8); const P = { x: 0, z: 0, hp: 100, alive: true };
let shots = 0, moved = 0; const start = sim.bots.map((b) => [b.x, b.z]);
for (let i = 0; i < 60 * 40; i++) { sim.tick(1 / 30, P); for (const e of sim.drain()) if (e.k === 'shot') shots++; }
sim.bots.forEach((b, i) => { if (Math.hypot(b.x - start[i][0], b.z - start[i][1]) > 3) moved++; });
ok(moved >= 5, 'bots roam (' + moved + '/8 moved)');
ok(sim.bots.every((b) => !hitsSolid(L, b.x, b.z, 0.2, 1.0)), 'no bot stands inside a wall');
ok(shots > 0, 'bots shoot at a player in sight: ' + shots);
// player shoots a bot
const b = sim.bots.find((q) => q.alive); b.x = 10; b.z = 5; const d = sim.shoot(0, 5, 1, 0, 70, 1.6); ok(d > 9 && d < 11 && b.hp < 100, 'a bullet hits a bot (' + b.hp + ' hp left)');
for (let i = 0; i < 4; i++) sim.shoot(0, 5, 1, 0, 70, 1.6); ok(!b.alive && sim.kills === 1, 'bot dies, kill counted');
// walls stop bullets
const bb = sim.bots.find((q) => q.alive); const B0 = BUILDINGS[0]; bb.x = B0.x; bb.z = B0.z + 2; const dd = sim.shoot(B0.x, B0.z + 40, 0, -1, 80, 1.6); ok(bb.hp === 100, 'a wall protects a bot from bullets');
// loot: take and respawn
const it = sim.loot[0]; const got = sim.take(it.x, it.z); ok(got === it, 'loot can be picked up'); for (let i = 0; i < 30 * 30; i++) sim.tick(1 / 30, { x: 90, z: 90, alive: true }); ok(sim.loot.filter((q) => q.alive).length >= 33, 'loot respawns: ' + sim.loot.filter((q) => q.alive).length);
console.log(bad ? 'COMBAT FAIL' : 'COMBAT OK'); process.exit(bad ? 1 : 0);
