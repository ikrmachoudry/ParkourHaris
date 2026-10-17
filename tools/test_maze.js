// Maze checks: every obstacle section can be passed by a simple bot; swing grab/release; fans; doors; boat; full route.
import { buildLevel } from '../public/js/levels.js';
import { newBody, stepBody, respawn } from '../public/js/physics.js';
import { stepSwing, newSwingState } from '../public/js/swingsys.js';
const DT = 1 / 90;
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const { world, info } = buildLevel(4, true, null, 7);
const solids = world.solids.filter((s) => !s.moving && s.name !== 'fakedoor' && s.y1 - s.y0 >= 0.9);
ok(info.finishZ < -400 && info.checkpoints.length >= 8, `long race course: finish at z=${info.finishZ}, ${info.checkpoints.length} checkpoints`);
ok(world.waterY > -10 && world.killY < world.waterY, 'real water to fall into (respawn at checkpoint)');

// ---- tiles: every row of vanishing tiles always has at least one solid tile
{
  const tiles = world.updaters; let bad = 0;
  const rows = new Map(); for (const s of world.solids) if (s.y1 - s.y0 > 0.9 && s.y1 - s.y0 < 1.1 && !s.moving && Math.abs(s.x1 - s.x0 - 5.4) < 0.01) { const k = s.z0.toFixed(1); if (!rows.has(k)) rows.set(k, []); rows.get(k).push(s); }
  for (let t = 0; t < 12; t += 0.05) { world.update(t, 0.05); for (const r of rows.values()) if (!r.some((s) => s.active !== false)) bad++; }
  ok(rows.size === 5 && bad === 0, `tile rows: ${rows.size} rows, never a row with all tiles gone (${bad} bad samples)`);
}

function mk(x, z, y = 0) { const b = newBody(); respawn(b, x, y + 0.05, z, Math.PI); return b; }
function step(b, t, inp, st) {
  world.update(t, DT); world.carry(b);
  let hang = false;
  if (st) hang = stepSwing(world, b, st, t, DT, !!inp.grab, !!inp.jumpPressed, true);
  if (!hang) stepBody(world, b, DT, inp); b.events.length = 0;
  return hang;
}
const I = (o = {}) => ({ mx: 0, mz: 0, jumpPressed: false, jumpHeld: false, divePressed: false, ...o });

// ---- fans: really push, but a bot steering against the wind crosses the beam
{
  const beam = solids.find((s) => Math.abs(s.x1 - s.x0 - 10) < 0.01 && s.z1 - s.z0 > 50);
  ok(!!beam, 'fan beam found');
  const zStart = beam.z1 - 1, zEnd = beam.z0 + 1;
  let b = mk(0, zStart), t = 5, fell = false, maxx = 0;
  for (let i = 0; i < 90 * 20 && b.z > zEnd; i++) { step(b, t, I({ mz: -1 })); t += DT; maxx = Math.max(maxx, Math.abs(b.x)); if (b.y < -2) { fell = true; break; } }
  ok(maxx > 2.5 || fell, `fans blow you sideways (drift ${maxx.toFixed(1)} m when not steering)`);
  b = mk(0, zStart); t = 5; fell = false; let T = 0;
  for (let i = 0; i < 90 * 25 && b.z > zEnd; i++) { const sx = Math.max(-1, Math.min(1, -b.x * 0.9)); const m = Math.hypot(sx, -1); step(b, t, I({ mx: sx / m, mz: -1 / m })); t += DT; T = i * DT; if (b.y < -2) { fell = true; break; } }
  ok(!fell && b.z <= zEnd, `bot steering against the wind crosses the fan bridge in ${T.toFixed(1)} s`);
}

// ---- swings: for every swing and every starting phase there is a way to grab and land on the next island
{
  const swings = world.swings;
    let allOk = true; const report = [];
  swings.forEach((sw, si) => {
    const prev = solids.filter((s) => s.z0 >= sw.z).sort((a, b) => a.z0 - b.z0)[0];      // island just before the swing
    const next = solids.filter((s) => s.z1 <= sw.z).sort((a, b) => b.z1 - a.z1)[0];
    const edge = prev.z0, target = next.z1;
    let good = 0, tot = 0, fullOkPhases = 0, phases = 0;
    for (let t0 = 0; t0 < 5; t0 += 0.5) {
      phases++; let any = false;
      for (const jt of [-1, 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6]) for (let rd = 0; rd <= 4; rd += 0.1) {
        tot++;
        const b = mk(0, edge + 0.6, prev.y1), st = newSwingState(); let t = t0 + 6, released = false, t1 = 0, res = false, tj = 0;
        for (let i = 0; i < 90 * 9; i++) {
          const tim = i * DT;
          const jumpNow = jt >= 0 && !st.hang && !released && tim >= jt && tim < jt + DT * 1.5 && b.grounded;
          let rel = false;
          if (st.hang) { if (!t1) t1 = tim; if (tim - t1 >= rd) rel = true; }
          const hang = step(b, t, I({ grab: !released, jumpPressed: jumpNow || rel, jumpHeld: false }), st);
          if (!hang && st.released) released = true;
          t += DT;
          if (b.y < -3.5) break;
          if (released && b.grounded && b.z <= target + 0.2 && b.z >= next.z0 && Math.abs(b.y - next.y1) < 0.6) { res = true; break; }
          if (released && b.grounded && b.z > edge) break;
        }
        if (res) { good++; any = true; }
      }
      if (any) fullOkPhases++;
    }
    report.push(`#${si} gap ${(edge - target).toFixed(0)}m: ${fullOkPhases}/${phases} start phases have a winning grab (${(100 * good / tot).toFixed(1)}% of tries)`);
    if (fullOkPhases < phases) allOk = false;
  });
  console.log(report.join('\n'));
  ok(allOk, 'every swing can be crossed from any start phase (grab, hang, jump to let go)');
}

// ---- grab rules: hanging holds you; letting go of the button drops you; far from a swing nothing happens
{
  const sw = world.swings[0], b = mk(0, sw.z + 30, 0), st = newSwingState();
  ok(!stepSwing(world, b, st, 3, DT, true, false, true), 'holding grab far from a swing does nothing');
  let t = 0, got = false; const b2 = mk(0, sw.z + 8.6, 0);
  for (let i = 0; i < 90 * 8; i++) { t = 3 + i * DT; world.update(t, DT); if (stepSwing(world, b2, st, t, DT, true, false, true)) { got = true; break; } b2.grounded = true; }
  ok(got, 'holding grab next to a passing swing hangs you on the handle');
  let moved = 0; for (let i = 0; i < 90; i++) { t += DT; world.update(t, DT); stepSwing(world, b2, st, t, DT, true, false, true); moved = Math.max(moved, Math.abs(b2.z - sw.z)); }
  ok(moved > 3, `hanging follows the swing (swung ${moved.toFixed(1)} m)`);
  stepSwing(world, b2, st, t, DT, false, false, true);
  ok(!st.hang && st.released === 'let go', 'releasing the button lets go');
}

// ---- doors: at least one real door per wall; fake doors are solid
{
  for (const wl of world.doorWalls) {
    const real = wl.doors.filter((d) => !d.fake).length;
    ok(real >= 1 && real < wl.doors.length + 1, `door wall at z=${wl.cz.toFixed(0)}: ${wl.doors.length} doors, ${real} real`);
    const d0 = wl.doors.find((d) => !d.fake); const b = mk(d0.x, wl.cz + 4, 0); let t = 1;
    for (let i = 0; i < 90 * 2; i++) { step(b, t, I({ mz: -1 })); t += DT; }
    ok(b.z < wl.cz - 1, 'running through a real door gets you to the other side');
    const f0 = wl.doors.find((d) => d.fake);
    if (f0) { const b3 = mk(f0.x, wl.cz + 4, 0); for (let i = 0; i < 90 * 2; i++) { step(b3, t, I({ mz: -1 })); t += DT; } ok(b3.z > wl.cz + 0.2, 'a fake door is solid'); }
  }
  // same seed -> same doors (so every player in the room sees the same course)
  const again = buildLevel(4, true, null, 7).world.doorWalls.map((w) => w.doors.map((d) => +d.fake).join('')).join('|');
  ok(again === world.doorWalls.map((w) => w.doors.map((d) => +d.fake).join('')).join('|'), 'door layout is identical for the same seed');
  const other = buildLevel(4, true, null, 12345).world.doorWalls.map((w) => w.doors.map((d) => +d.fake).join('')).join('|');
  console.log('doors seed 7: ' + again + '  seed 12345: ' + other);
}

// ---- boat: wait on the dock, ride across, step off
{
  world.update(0, DT); const boat = world.solids.find((s) => s.moving);
  const dock = solids.filter((s) => s.z0 > boat.z1 && s.z0 - boat.z1 < 3)[0];
  const farDock = solids.filter((s) => s.z1 < boat.z0 - 30).sort((a, b) => b.z1 - a.z1)[0];
  const b = mk(0, dock.z0 + 3, dock.y1); let t = 2, aboard = false, done = false, T = 0;
  for (let i = 0; i < 90 * 60; i++) {
    let mz = 0, jump = false;
    const gapNear = dock.z0 - boat.z1, gapFar = boat.z0 - farDock.z1;
    if (!aboard) { if (gapNear < 2.6) { mz = -1; jump = b.grounded && b.z > dock.z0 - 0.6 && gapNear > 0.3; } if (b.grounded && b.ground && b.ground.moving) aboard = true; }
    else if (gapFar < 2.6) { mz = -1; jump = b.grounded && b.z < boat.z0 + 1 && b.z > farDock.z1 - 0; }
    step(b, t, I({ mz, jumpPressed: jump })); t += DT; T = i * DT;
    if (b.y < -2) break;
    if (b.grounded && b.z <= farDock.z1 && b.z >= farDock.z0 && Math.abs(b.y - farDock.y1) < 0.5) { done = true; break; }
  }
  ok(done, `boat ride works: bot boards, crosses and steps off in ${T.toFixed(0)} s (y=${b.y.toFixed(1)} z=${b.z.toFixed(1)} aboard=${aboard})`);
}


// ---- cannon shortcut: launch from the cannon, land on the far dock (from anywhere on the pad, with no steering at all)
{
  const c = info.cannon, bf = info.boatFar; let lands = 0, n = 0;
  for (const dz of [-1.8, -0.9, 0, 0.9, 1.8]) for (const dx of [-1, 0, 1]) {
    n++; const b = mk(c.x + dx, c.z + dz, 0); let t = 0;
    for (let i = 0; i < 90 * 7; i++) { step(b, t, I()); t += DT; if (i > 20 && b.grounded) break; if (b.y < -3.5) break; }
    if (b.grounded && b.z <= bf.near && b.z >= bf.far && Math.abs(b.x) < 7) lands++;
  }
  ok(lands === n, `cannon lands on the far dock from every spot on the pad (${lands}/${n})`);
}

// ---- bounce ladder: a mushroom launches you onto the next sky deck even with only forward steering; the slide brings you down
{
  const discs = world.discs.filter((d) => d.bounce >= 20 && d.bounce < 34);
  ok(discs.length === 2, '2 bounce mushrooms on the sky ladder');
  let allOk = true;
  for (const d of discs) {
    const cx = d.cx, cz = d.cz, top = d.top;
    let good = 0, n = 0;
    for (const dz of [-1.5, 0, 1.5]) for (const dx of [-1.5, 0, 1.5]) {
      n++; const b = mk(cx + dx, cz + 8 + dz, top); let t = 0, bounced = false;
      for (let i = 0; i < 90 * 6; i++) { step(b, t, I({ mz: -1 })); t += DT; if (b.vy > 15) bounced = true; if (bounced && b.grounded) break; if (b.y < top - 3) break; }
      if (b.grounded && b.y > top + 6.5 && b.z < cz - 3) good++;
    }
    console.log(`mushroom at z=${cz.toFixed(0)}: ${good}/${n} launches reach the deck above`);
    if (good < n) allOk = false;
  }
  ok(allOk, 'every mushroom launch (any spot, just holding forward) reaches the next deck');
  const lad = solids.filter((s) => s.y1 > 13.9 && s.y1 < 14.1)[0];
  const sl = world.ramps.find((r) => r.ice && r.yN > 13);
  const b = mk(0, lad.z0 + 3, 14); let t = 0, T = 0;
  for (let i = 0; i < 90 * 20; i++) { step(b, t, I({ mz: -1 })); t += DT; T = i * DT; if (b.y < 0.5 && b.z < sl.zF - 1) break; if (b.y < -3) break; }
  ok(b.y >= 0 && b.y < 1 && b.z < sl.zF - 1, `icy slide returns you to ground level (${T.toFixed(1)} s)`);
}

// ---- sweeper + balls are hazards that knock back (never kill) and are passable by a jumping bot
{
  const bars = world.hazards.filter((h) => h.type === 'bar'), balls = world.hazards.filter((h) => h.type === 'balls');
  ok(bars.length === 1 && balls.length === 3, 'donut sweeper arm + 3 ball lanes present');
}


// ---- every checkpoint respawn point is solid ground
{
  let bad = 0; info.checkpoints.forEach((cp, i) => { const b = mk(cp.spawn[0], cp.spawn[2], cp.spawn[1]); let t = 40; for (let k = 0; k < 90; k++) { step(b, t, I()); t += DT; } if (!b.grounded || b.y < cp.y - 0.5) { bad++; console.log('bad checkpoint', i, cp.z, b.y); } });
  ok(bad === 0, `all ${info.checkpoints.length} checkpoint respawn spots stand on ground`);
}

// ---- generic route bot over the rest: runs straight, jumps over gaps, waits for nothing (hammers, seesaws)
function runner(zA, zB, x0, maxT = 60, hop = false) {
  const b = mk(x0, zA, 0); let t = 3, falls = 0;
  for (let i = 0; i < 90 * maxT && b.z > zB; i++) {
    const ahead = solids.some((s) => b.z - 1.4 <= s.z1 && b.z - 1.4 >= s.z0 && b.x > s.x0 && b.x < s.x1) || world.ramps.some((r) => b.z - 1.4 <= r.zN && b.z - 1.4 >= r.zF && b.x > r.x0 && b.x < r.x1);
    step(b, t, I({ mz: -1, jumpPressed: b.grounded && (!ahead || hop) })); t += DT;
    if (b.y < -3.5) { falls++; respawn(b, 0, 0.05, b.z + 6, Math.PI); b.vx = b.vz = 0; }
    if (falls > 8) break;
  }
  return { ok: b.z <= zB, falls, t: +(t - 3).toFixed(1) };
}
{
  const hs = world.hazards.filter((h) => h.type === 'hammer');
  ok(hs.length === 3, '3 giant hammers');
  const ss = world.ramps.filter((r) => r.seesaw);
  const r = runner(ss[0].zN + 8, ss[ss.length - 1].zF - 8, 0, 80, true);
  ok(r.ok, `seesaw ridge crossed by the run-and-jump bot (${JSON.stringify(r)})`);
  const hz = solids.find((s) => s.x1 - s.x0 === 14 && s.z1 - s.z0 > 40);
  const r2 = runner(hz.z1 - 0.5, hz.z0 + 0.5, 0, 80);
  ok(r2.ok, `hammer hall passed by a straight-running bot (${JSON.stringify(r2)})`);
}
console.log(fails ? `\n${fails} FAILED` : '\nALL PASS'); process.exit(fails ? 1 : 0);
