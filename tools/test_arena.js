// Small Room: 120x120 closed room, high slide can be climbed and ridden down, 4 bungee pads launch you.
import { buildLevel } from '../public/js/levels.js';
import { newBody, stepBody } from '../public/js/physics.js';
const { world, info } = buildLevel(3, true);
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
function walk(b, pts, maxT = 30) { for (const [tx, tz] of pts) for (let i = 0; i < maxT * 90; i++) { const dx = tx - b.x, dz = tz - b.z, d = Math.hypot(dx, dz); if (d < 0.8) break; stepBody(world, b, 1 / 90, { mx: dx / d, mz: dz / d }); b.events.length = 0; } }
const b = newBody(); b.x = 0; b.y = 0.01; b.z = -10; walk(b, [[0, -12]]); ok(b.grounded && Math.abs(b.y) < 0.2, 'spawn is on the floor');
const w = newBody(); w.x = 50; w.y = 0.01; w.z = -60; walk(w, [[200, -60]], 5); ok(w.x < 60.1, 'east wall holds (x ' + w.x.toFixed(1) + ')');
const w2 = newBody(); w2.x = 0; w2.y = 0.01; w2.z = -60; walk(w2, [[0, -300]], 8); ok(w2.z > -114.1, 'far wall holds (z ' + w2.z.toFixed(1) + ')');
const s = info.slide, c = newBody(); c.x = s.x; c.y = 0.01; c.z = -4; c.vx = c.vz = 0;
walk(c, [[s.x, -30], [s.x, -46], [s.x, -52]]); ok(c.y > s.top - 0.6, 'climbed the slide tower (y ' + c.y.toFixed(1) + ')');
let minZ = 0; walk(c, [[s.x, -64]], 3); for (let i = 0; i < 90 * 8; i++) { stepBody(world, c, 1 / 90, { mx: 0, mz: -0.2 }); c.events.length = 0; minZ = Math.min(minZ, c.z); }
ok(c.z < -90 && c.y < 1, `slide carries you down to the bottom (z ${c.z.toFixed(1)}, y ${c.y.toFixed(1)})`);
ok(info.pads.length === 4, '4 bungee pads');
for (const [x, z] of info.pads) { const p = newBody(); p.x = x; p.z = z + 5; p.y = 0.01; walk(p, [[x, z]], 5); let mx = 0; for (let i = 0; i < 90 * 3; i++) { stepBody(world, p, 1 / 90, { mx: 0, mz: 0 }); p.events.length = 0; mx = Math.max(mx, p.y); } ok(mx > 8, `bungee pad at ${x},${z} launches (peak ${mx.toFixed(1)})`); }
console.log(fails ? 'FAILED' : 'ARENA OK'); process.exit(fails ? 1 : 0);
