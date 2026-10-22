// Finds INVISIBLE WALLS for a person on foot: walks a body in 8 directions from a grid of points over the hills; a push that goes nowhere although no solid is anywhere near is a ghost obstacle.
// node --import ./tools/mock-register.js tools/blocksweep.js
import { buildLevel } from '../public/js/levels.js';
import { newBody, stepBody } from '../public/js/physics.js';
import { gtaH, GT } from '../public/js/gta.js';
const { world } = buildLevel(0, true, null, 1);
const STEP = +process.env.STEP || 7, MIN_H = +process.env.MINH || 1.5;
let tested = 0, blocked = 0; const out = [];
const near = (x, z, y, r) => world.solids.some((s) => s.x0 < x + r && s.x1 > x - r && s.z0 < z + r && s.z1 > z - r && s.y1 > y - 0.5 && s.y0 < y + 2);
for (let x = -520; x <= 520; x += STEP) for (let z = -520; z <= 520; z += STEP) {
  const h = gtaH(x, z); if (h < MIN_H) continue;
  for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1], [0.7, 0.7], [-0.7, 0.7], [0.7, -0.7], [-0.7, -0.7]]) {
    const b = newBody(); b.x = x; b.z = z; b.y = h + 0.05; for (let i = 0; i < 20; i++) stepBody(world, b, 1 / 60, { mx: 0, mz: 0 });
    if (!b.grounded) continue; const x0 = b.x, z0 = b.z; tested++;
    for (let i = 0; i < 40; i++) stepBody(world, b, 1 / 60, { mx: dx, mz: dz });
    const moved = Math.hypot(b.x - x0, b.z - z0), fell = b.events.includes('fell');
    if (moved < 0.5 && !fell && !(b.swim > 0.3) && !near(x, z, h, 2.2)) { blocked++; if (out.length < 40) out.push([x, z, h.toFixed(1), dx, dz, moved.toFixed(2), (Math.hypot((gtaH(x + 1, z) - gtaH(x - 1, z)) / 2, (gtaH(x, z + 1) - gtaH(x, z - 1)) / 2)).toFixed(2)]); }
  }
}
console.log('tests', tested, 'blocked with no solid near:', blocked);
for (const o of out) console.log(' at', o[0], o[1], 'h', o[2], 'dir', o[3], o[4], 'moved', o[5], 'slope', o[6]);
