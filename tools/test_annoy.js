// Annoying Maze checks: tunnels (one real), ferris wheels ride, fan launch, trampolines, flag shuttles + blades, cutters + safe lane, checkpoints.
import { buildLevel } from '../public/js/levels.js';
import { newBody, stepBody, respawn } from '../public/js/physics.js';
const DT = 1 / 90;
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const { world, info } = buildLevel(5, true, null, 11);
const solids = world.solids.filter((s) => !s.moving);
const I = (o = {}) => ({ mx: 0, mz: 0, jumpPressed: false, jumpHeld: false, divePressed: false, ...o });
function mk(x, z, y = 0) { const b = newBody(); respawn(b, x, y + 0.05, z, Math.PI); return b; }
function step(b, t, inp) { world.update(t, DT); world.carry(b); stepBody(world, b, DT, inp); b.events.length = 0; }
ok(info.finishZ < -250 && info.checkpoints.length >= 8, `course: finish z=${info.finishZ.toFixed(0)}, ${info.checkpoints.length} checkpoints`);
ok(world.waterY === -1.5 && world.killY < world.waterY, 'water is 5 ft (1.5 m) below the platforms');

// ---- tunnels: exactly one of the 5 goes through
{
  const tz0 = -26; let through = 0, names = [];
  for (let i = 0; i < 5; i++) {
    const b = mk((i - 2) * 7, 2, 0); let t = 1;
    for (let k = 0; k < 90 * 6; k++) { step(b, t, I({ mz: -1 })); t += DT; }
    const passed = b.z < -36; if (passed) { through++; names.push(info.tunnelNames[i]); }
  }
  ok(through === 1 && names[0] === info.tunnelNames[info.tunnelReal], `only the ${info.tunnelNames[info.tunnelReal]} tunnel goes through (${through} of 5 open)`);
  ok(world.solids.length > 0, 'tunnel colours: ' + info.tunnelNames.join(', '));
}

// ---- ferris wheels: ride wheel 1, jump onto the middle deck, jump into wheel 2, ride round, step off onto the exit deck
{
  const F = info.ferris, R = F.R;
  const dk = solids.find((x) => Math.abs(x.y1 - R) < 0.01 && x.x1 - x.x0 === 8);
  const exitDeck = solids.filter((x) => x.y1 === 0 && x.z1 < F.cz2 && x.z1 > F.cz2 - 8)[0];
  const startDeck = solids.filter((x) => x.y1 === 0 && x.z0 > F.cz1 + 1 && x.z0 < F.cz1 + 5 && x.x1 - x.x0 === 10)[0];
  ok(!!dk && !!exitDeck && !!startDeck, `ferris: start deck, middle deck, exit deck found`);
  let wins = 0, tries = 0, rep = [];
  for (let t0 = 0; t0 < 12; t0 += 1.0) {
    tries++; const b = mk(0, startDeck.z0 + 0.8, 0); let t = t0, stage = 0, done = false, why = '';
    for (let i = 0; i < 90 * 90; i++) {
      const cab = world.solids.filter((x) => x.moving && x.dz !== undefined);
      let mz = 0, jump = false;
      const nearCab = (zc) => cab.find((c) => Math.abs((c.z0 + c.z1) / 2 - zc) < 6);
      if (stage === 0) { // wait at the start deck edge until a cabin is level with the deck and right here, then step on
        const c1 = cab.find((c) => c.y1 < 0.4 && Math.abs(c.z1 - b.z) < 2.6 && c.dz > 0);
        if (c1 && b.grounded && b.ground === startDeck) mz = -1;
        if (b.ground && b.ground.moving) stage = 1;
      } else if (stage === 1) { // aboard wheel 1: jump forward when the cabin descends past deck height next to the deck
        const c = b.ground;
        if (c && c.moving && b.z > (c.z0 + c.z1) / 2 - 1.6) mz = -0.4;          // walk to the front edge of the cabin
        if (!b.grounded && b.z < F.cz1 - 3) mz = -1;
        if (!c || !c.moving) { if (b.grounded && b.ground === dk) stage = 2; }
        else if (c.y1 > R - 1.0 && c.y1 < R + 0.6 && c.dy < 0 && (c.z0 + c.z1) / 2 < F.cz1 - 3) { mz = -1; jump = true; }
        if (b.grounded && b.ground === dk) stage = 2;
      } else if (stage === 2) { // on the middle deck: wait for a cabin of wheel 2 rising past deck height, then hop in
        const c2 = cab.find((c) => Math.abs((c.z0 + c.z1) / 2 - (F.cz2 + R)) < 4 && c.y1 > R - 1.2 && c.y1 < R + 0.6 && c.dy > 0);
        if (c2 && b.grounded) { mz = -1; jump = true; }
        if (!b.grounded) mz = -1;
        if (b.ground && b.ground.moving) stage = 3;
      } else if (stage === 3) { // aboard wheel 2: step off forward near the bottom of the far side
        const c = b.ground;
        if (c && c.moving && c.y1 > 1.4 && b.z > (c.z0 + c.z1) / 2 - 1.6) mz = -0.4;
        if (c && c.moving && c.y1 < 1.4 && (c.z0 + c.z1) / 2 < F.cz2 - 0.5) mz = -1;
        if (b.grounded && b.ground === exitDeck) { done = true; break; }
      }
      step(b, t, I({ mz, jumpPressed: jump && b.grounded })); t += DT;
      if (b.y < -3.5) { why = 'fell at stage ' + stage + ' z=' + b.z.toFixed(1); break; }
    }
    if (done) wins++; else rep.push(why || 'timeout stage ' + stage);
  }
  console.log(`ferris bot: ${wins}/${tries} full rides` + (rep.length ? ' | ' + rep.slice(0, 4).join(' ; ') : ''));
  ok(wins >= tries * 0.6, 'both ferris wheels can be ridden and exited (jump off wheel 1, hop into wheel 2)');
}


// ---- fan over the water: jump onto it, the wind throws you onto the trampoline platform (from several approaches)
{
  const f = info.fan; const trp = solids.filter((x) => x.y1 === 0 && x.z1 < f.z).sort((a, b) => b.z1 - a.z1)[0];
  let good = 0, n = 0;
  for (const xx of [-2, 0, 2]) for (const jd of [4.5, 5, 5.5, 6]) {
    n++; const b = mk(xx, f.z + 14, 0); let t = 0, jumped = false, bounced = false, landed = false;
    for (let i = 0; i < 90 * 8; i++) { const dz = b.z - f.z; const jump = !jumped && b.grounded && dz <= jd + 3.2; if (jump) jumped = true; step(b, t, I({ mz: -1, jumpPressed: jump })); t += DT; if (b.vy > 20) bounced = true; if (bounced && b.grounded) { landed = b.z < trp.z1 - 0.5 && b.z > trp.z0 && b.y === 0 || (b.ground && b.ground.bounce); break; } if (b.y < -3) break; }
    if (landed) good++;
  }
  ok(good === n, `fan launch lands on the trampoline platform (${good}/${n} tries)`);
}

// ---- trampoline platform: bounce pads + the launch pad throws you across the gap onto the shuttle dock
{
  const tp = info.tramp, dock = solids.filter((x) => x.y1 === 0 && x.z1 < tp.z - 5 && x.x1 - x.x0 === 22)[0];
  let good = 0, n = 0;
  for (const xx of [-1.5, 0, 1.5]) for (const zz of [8, 10, 12]) {
    n++; const b = mk(xx, tp.z + zz, 0); let t = 0, bounced = false, ok2 = false;
    for (let i = 0; i < 90 * 8; i++) { step(b, t, I({ mz: -1 })); t += DT; if (b.vy > 20) bounced = true; if (bounced && b.grounded) { ok2 = b.z < dock.z1 - 0.5 && b.z > dock.z0 + 0.5; break; } if (b.y < -3) break; }
    if (ok2) good++;
  }
  ok(good === n, `launch pad lands you on the shuttle dock from every approach (${good}/${n})`);
  ok(world.discs.filter((d) => d.bounce >= 15 && d.bounce < 22 && !d.push).length === 2, '2 plain trampolines on the platform');
}

// ---- flag shuttles: Pakistan + Spain platforms cross the long gap; blades slam the middle but not the ends
{
  const sh = world.shuttles; ok(sh.length === 2 && world.hazards.filter((h) => h.type === 'blade').length === 2, 'two flag shuttles, each with a blade');
  const A = world.solids.filter((x) => x.moving && Math.abs((x.x0 + x.x1) / 2 + 5.5) < 0.01 && x.x1 - x.x0 === 9)[0], B = world.solids.filter((x) => x.moving && Math.abs((x.x0 + x.x1) / 2 - 5.5) < 0.01 && x.x1 - x.x0 === 9)[0];
  const sd1 = solids.filter((x) => x.y1 === 0 && x.x1 - x.x0 === 22 && x.z1 < info.tramp.z - 5)[0], sd2 = solids.filter((x) => x.y1 === 0 && x.x1 - x.x0 === 22 && x.z1 < sd1.z0 - 20)[0];
  ok(!!A && !!B && !!sd2, 'shuttle platforms and docks found');
  // blade hits you in the middle of the platform ...
  let hitsMid = 0, hitsRim = 0;
  const sA = sh[0];
  for (const off of [0, 4.2]) {
    let hits = 0; for (let t = 0; t < 60; t += 0.02) { world.update(t, 0.02); const pz = sA.cz0 + sA.pos(t); const b = mk(-5.5, pz - off, 0); b.y = 0; const h = world.checkHazards(b, t); if (h) hits++; }
    if (off === 0) hitsMid = hits; else hitsRim = hits;
  }
  ok(hitsMid > 0 && hitsRim === 0, `blade slams the middle of the platform (${hitsMid} hit samples) but never the safe end (${hitsRim})`);
  // blade timing: hovers ~2 s before the slam
  const T = sA.T; let hover = 0; for (let t = 0; t < T / 2; t += 0.01) { const h = sA.bladeH(t); if (Math.abs(h - 4.2) < 0.01) hover += 0.01; }
  ok(hover > 3.8 && hover < 4.3, `the blade waits above for ${hover.toFixed(1)} s before slamming`);
  // a bot rides platform A across standing on the safe end
  let wins = 0, tries = 0, why = [];
  for (let t0 = 0; t0 < 24; t0 += 3) {
    tries++; const b = mk(-5.5, sd1.z0 + 0.8, 0); let t = t0, aboard = false, done = false, hitN = 0;
    for (let i = 0; i < 90 * 90; i++) {
      let mz = 0, jump = false; const pz = (A.z0 + A.z1) / 2, gapNear = sd1.z0 - A.z1;
      if (!aboard) { if (gapNear < 2.6 && gapNear > -2 && b.grounded && b.ground !== A) { mz = -1; jump = true; } if (b.ground === A) aboard = true; }
      else { const tz = pz + 4.0; if (b.z < tz - 0.3) mz = 0.5; else if (b.z > tz + 0.3) mz = -0.5; const gap2 = A.z0 - sd2.z1; if (gap2 < 2.6 && gap2 > -1 && b.z < pz + 4.6) { mz = -1; jump = true; } }
      if (!b.grounded) mz = aboard ? -1 : -1;
      step(b, t, I({ mz, jumpPressed: jump && b.grounded })); if (world.checkHazards(b, t)) hitN++; t += DT;
      if (b.y < -3.5) { why.push('fell ' + (aboard ? 'aboard' : 'boarding') + ' z=' + b.z.toFixed(1)); break; }
      if (aboard && b.grounded && b.ground === sd2) { done = true; break; }
    }
    if (done && hitN === 0) wins++; else if (done) why.push('hit ' + hitN);
  }
  console.log(`shuttle bot: ${wins}/${tries} crossings on the safe end` + (why.length ? ' | ' + why.slice(0, 3).join(' ; ') : ''));
  ok(wins >= tries * 0.6, 'a rider standing on the safe end crosses the long gap without being sliced');
}

// ---- five cutters: sweep most of the platform; the small lane on the right is safe
{
  const bars = world.hazards.filter((h) => h.type === 'bar'); ok(bars.length === 5, '5 cutters');
  const cutP = solids.filter((x) => x.x1 - x.x0 === 22 && x.z1 - x.z0 === 64)[0];
  const run = (x) => { const b = mk(x, cutP.z1 - 1, 0); let hits = 0, t = 3; for (let i = 0; i < 90 * 20 && b.z > cutP.z0 + 2; i++) { step(b, t, I({ mz: -1, mx: 0 })); if (world.checkHazards(b, t)) hits++; t += DT; } return hits; };
  ok(run(-3) > 0, 'running through the middle gets you cut');
  ok(run(8.3) === 0, 'the small safe lane on the right is never touched by a cutter');
}

console.log(fails ? `\n${fails} FAILED` : '\nALL PASS'); process.exit(fails ? 1 : 0);
