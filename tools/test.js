// Headless tests: physics sanity + a simple bot that tries to run every level (hazards ignored) to prove
// gaps/ramps/lifts are traversable.
import { buildLevel } from '../public/js/levels.js';
import { newBody, stepBody, respawn } from '../public/js/physics.js';
import { P, World } from '../public/js/world.js';
import { LEVEL_META } from '../public/js/levelmeta.js';

let fails = 0;
const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const DT = 1 / 90;
const none = { mx: 0, mz: 0, jumpPressed: false, jumpHeld: false, divePressed: false };

// ---- 1. basics on a flat world
{
  const w = new World({ plat: ['#fff'], pad: '#fff' }, true);
  w.platform(0, 0, 0, 40, 40);
  const b = newBody(); b.x = 0; b.y = 3; b.z = 0;
  for (let i = 0; i < 120; i++) stepBody(w, b, DT, none);
  ok(b.grounded && Math.abs(b.y) < 1e-6, 'lands on platform');
  let maxY = 0; stepBody(w, b, DT, { ...none, jumpPressed: true, jumpHeld: true });
  for (let i = 0; i < 120; i++) { stepBody(w, b, DT, { ...none, jumpHeld: true }); maxY = Math.max(maxY, b.y); }
  ok(maxY > 1.9 && maxY < 2.4, 'jump height ' + maxY.toFixed(2));
  // run speed
  b.x = -18; b.z = 0; b.vx = b.vz = 0;
  for (let i = 0; i < 90; i++) stepBody(w, b, DT, { ...none, mx: 1, mz: 0 });
  ok(Math.abs(b.vx - P.RUN) < 0.1, 'run speed ' + b.vx.toFixed(2));
  // gap jump: 2 platforms 6m apart
  const w2 = new World({ plat: ['#fff'], pad: '#fff' }, true);
  w2.platform(0, 0, 0, 10, 10); w2.platform(0, 0, -16, 10, 10); // edge to edge 6 m
  const c = newBody(); c.z = 3; let landed = false;
  for (let i = 0; i < 400; i++) {
    const nearEdge = c.z < -4.2 && c.grounded && c.z > -5.3;
    stepBody(w2, c, DT, { mx: 0, mz: -1, jumpPressed: nearEdge, jumpHeld: true, divePressed: false });
    if (c.z < -12 && c.grounded) { landed = true; break; }
  }
  ok(landed, '6 m gap is jumpable at full speed');
  // wall collision
  const w3 = new World({ plat: ['#fff'], pad: '#fff' }, true);
  w3.platform(0, 0, 0, 40, 40); w3.platform(0, 3, -5, 10, 1);
  const d = newBody(); d.z = 0;
  for (let i = 0; i < 200; i++) stepBody(w3, d, DT, { ...none, mz: -1 });
  ok(d.z > -4.4, 'wall blocks player (z=' + d.z.toFixed(2) + ')');
}

// ---- 2. bot runs the levels (hazards ignored; tests geometry only)
function bot(idx, maxT = 200, verbose = false) {
  const { world, info } = buildLevel(idx, true);
  const b = newBody(); respawn(b, 0, 0.0, info.spawn.z, Math.PI);
  if (process.env.FROMZ && idx === +process.env.IDX) { const cps = world.checkpoints.filter((c) => c.z < +process.env.FROMZ); const cp = cps[0]; respawn(b, cp.spawn[0], cp.spawn[1] + 0.05, cp.spawn[2], Math.PI); }
  let t = 0, bestZ = 0, falls = 0, refY = 0; const hist = [];
  const tops = (x, z) => { // all surface heights under (x,z)
    const out = [], M = 0.25;
    for (const s of world.solids) if (s.active && x >= s.x0 - M && x <= s.x1 + M && z >= s.z0 - M && z <= s.z1 + M) out.push(s.y1);
    for (const r of world.ramps) if (x >= r.x0 - M && x <= r.x1 + M && z <= r.zN + 0.3 && z >= r.zF - 0.3) { const k = Math.max(0, Math.min(1, (r.zN - z) / (r.zN - r.zF))); out.push(r.yN + (r.yF - r.yN) * k); }
    for (const d of world.discs) { const dx = x - d.cx, dz = z - d.cz; if (dx * dx + dz * dz <= (d.r + 0.2) ** 2) out.push(d.top); }
    return out;
  };
  const has = (x, z, lo, hi) => tops(x, z).some((y) => y >= lo && y <= hi);
  while (t < maxT) {
    world.update(t, DT); for (const so of world.solids) so.active = true; world.carry(b); // tiles forced solid: timing is a human skill
    if (b.grounded) refY = b.y;
    let tx = b.x, found = false;
    for (let dz = 1.2; dz <= 10 && !found; dz += 1.2) {
      let bx = null, bd = 1e9;
      for (let x = -10; x <= 10; x += 0.5) {
        if (has(x, b.z - dz, refY - 1.6, refY + 3.2)) { const dd = Math.abs(x - b.x); if (dd < bd) { bd = dd; bx = x; } }
      }
      if (bx !== null) { tx = bx; found = true; }
    }
    const mx = Math.max(-1, Math.min(1, (tx - b.x) * 1.2));
    const here = has(b.x, b.z - 2.1, refY - 0.45, refY + 0.4);
    const higher = has(b.x, b.z - 1.4, refY + 0.45, refY + 2.4);
    const jump = b.grounded && (!here || higher);
    stepBody(world, b, DT, { mx: mx * 0.6, mz: -0.9, jumpPressed: jump, jumpHeld: true, divePressed: false });
    if (verbose && t > 0) { hist.push([t.toFixed(2), b.x.toFixed(2), b.y.toFixed(2), b.z.toFixed(2), b.grounded, jump, mx.toFixed(2), tx.toFixed(1)].join(' ')); if (hist.length > 60) hist.shift(); }
    if (b.events.includes('fell')) {
      if (verbose && falls === 0) { console.log(hist.join('\n')); }
      falls++;
      const cps = world.checkpoints.filter((c) => c.z > b.z - 1);
      const cp = cps.length ? cps[cps.length - 1] : { spawn: [0, 0, 1.5] };
      respawn(b, cp.spawn[0], cp.spawn[1] + 0.05, cp.spawn[2], Math.PI); refY = cp.spawn[1];
    }
    b.events.length = 0;
    t += DT;
    if (b.z < bestZ) bestZ = b.z;
    if (b.z < info.finishZ && b.y > info.finishY - 3) return { done: true, t, falls };
  }
  return { done: false, t, bestZ, falls, y: b.y, z: b.z };
}
for (let i = 0; i < 4; i++) {
  const r = bot(i, 200, process.env.V == String(i));
  console.log('level', i, JSON.stringify({ ...r, t: +r.t.toFixed(1) }), 'limit', LEVEL_META[i].limit);
}
process.exit(fails ? 1 : 0);
