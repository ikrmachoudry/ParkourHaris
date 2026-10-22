// Finds INVISIBLE WALLS for a car on the hills: from a grid of points a sedan floors it in 8 directions; a car that stops although the slope is gentle and no building / prop box is near is a ghost obstacle.
// node --import ./tools/mock-register.js tools/carsweep.js
import { buildLevel } from '../public/js/levels.js';
import { gtaH } from '../public/js/gta.js';
import { newCar, stepCar } from '../public/js/car.js';
const { world, info } = buildLevel(0, true, null, 1); const tr = info.track;
const STEP = +process.env.STEP || 12, MIN_H = +process.env.MINH || 1.5, SL = +process.env.SLOPE || 0.3;
const boxes = [...(tr.boxes || []), ...(tr.props || [])];
const near = (x, z, r) => boxes.some((b) => b.x0 < x + r && b.x1 > x - r && b.z0 < z + r && b.z1 > z - r);
const slopeAt = (x, z) => Math.hypot((gtaH(x + 1.5, z) - gtaH(x - 1.5, z)) / 3, (gtaH(x, z + 1.5) - gtaH(x, z - 1.5)) / 3);
let tested = 0, stuck = 0; const out = [];
for (let x = -500; x <= 500; x += STEP) for (let z = -500; z <= 500; z += STEP) {
  const h = gtaH(x, z); if (h < MIN_H || slopeAt(x, z) > SL) continue;
  for (const a of [0, 0.78, 1.57, 2.36, 3.14, 3.93, 4.71, 5.5]) {
    const car = newCar(11, x, z, a); car.y = h; for (let i = 0; i < 30; i++) stepCar(car, 1 / 60, { gas: 0, steer: 0 }, tr, [], i / 60);
    const x0 = car.x, z0 = car.z; tested++; let t = 0;
    for (let i = 0; i < 100; i++) { stepCar(car, 1 / 60, { gas: 1, steer: 0 }, tr, [], t); t += 1 / 60; }
    const moved = Math.hypot(car.x - x0, car.z - z0), ex = x + Math.sin(a) * 25, ez = z + Math.cos(a) * 25;
    let gentle = true; for (let k = 0; k <= 8; k++) { const qx = x + Math.sin(a) * k * 3, qz = z + Math.cos(a) * k * 3; if (slopeAt(qx, qz) > SL || gtaH(qx, qz) < -0.5) gentle = false; }
    if (moved < 4 && !near(x, z, 6) && gentle) { stuck++; if (out.length < 40) out.push([x, z, h.toFixed(1), a, moved.toFixed(1), slopeAt(x, z).toFixed(2)]); }
  }
}
console.log('tests', tested, 'car stopped with no box near and a gentle slope:', stuck);
for (const o of out) console.log(' at', o[0], o[1], 'h', o[2], 'heading', o[3], 'moved', o[4], 'slope', o[5]);
