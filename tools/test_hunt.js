// Jungle Hunt checks: world builds, beast waves, gun kills, gate, weight plates + door, counterweight lift, chapter flow, aim assist.
import { buildLevel } from '../public/js/levels.js';
import { newBody, stepBody, respawn, knock } from '../public/js/physics.js';
import { HU, PH, CANNON, CRUSH, crushH, seqOf, huntLayout, plateXs, newHunt, stepHunt, shootAnimal, HUNT_DEFS, huntAnimalLayout, beastsFor, packHunt, applyHunt } from '../public/js/hunt.js';
import { newAnimals, stepAnimals, KINDS, ST } from '../public/js/jlayout.js';
import { pickTarget } from '../public/js/huntgun.js';
const DT = 1 / 90;
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const { world, info } = buildLevel(6, true, null, 5);
const L = huntLayout(), H = info.hunt;
const I = (o = {}) => ({ mx: 0, mz: 0, jumpPressed: false, jumpHeld: false, divePressed: false, ...o });
function mk(x, z, y = 0) { const b = newBody(); respawn(b, x, y + 0.05, z, Math.PI); return b; }
let T = 1;
function step(b, inp) { world.update(T, DT); world.carry(b); stepBody(world, b, DT, inp); b.events.length = 0; T += DT; }
ok(info.checkpoints.length >= 5 && info.endZ < -300, `course: ${info.checkpoints.length} checkpoints, ends at z=${info.endZ.toFixed(0)}`);
ok(HUNT_DEFS().length === HU.CH * HU.SLOTS && beastsFor(1) === 3 && beastsFor(4) === 6, 'beast table: 6 slots per chapter, 3..6 beasts by team size');

// ---- waves + gun kills + gate
const an = newAnimals(HUNT_DEFS()), st = newHunt(), pl = [{ id: 1, x: 0, y: 0, z: 2 }, { id: 2, x: 3, y: 0, z: 2 }];
ok(an.every((a) => a.st === ST.HIDDEN), 'all beasts hidden at the start');
let evs = stepHunt(st, 0.05, pl, an, 2, L, []);
ok(st.ph === PH.WAIT && !evs.length, 'nothing happens before the arena');
pl[0].z = L.chapters[0].trigZ - 1;
evs = stepHunt(st, 0.05, pl, an, 2, L, []);
ok(st.ph === PH.BEAST && evs[0].k === 'wave' && evs[0].n === 4, 'entering the arena wakes 4 beasts (2 players)');
const live = an.filter((a) => a.st !== ST.HIDDEN);
ok(live.length === 4 && live.every((a) => a.x > L.chapters[0].arena.x0 && a.x < L.chapters[0].arena.x1 && a.z < L.chapters[0].arena.z1 && a.z > L.chapters[0].arena.z0), 'beasts stand inside the arena');
{ // they chase and bite (never kill)
  const p = [{ id: 1, x: 0, y: 0, z: L.chapters[0].arenaC + 12, r: 0, mounted: 0 }]; let bites = 0;
  for (let i = 0; i < 400; i++) bites += stepAnimals(an, 0.05, p, huntAnimalLayout(), []).filter((e) => e.k === 'bite').length;
  ok(bites > 0, `beasts bite the player (${bites} bites)`);
}
{ // shoot them all
  let kills = 0, hits = 0, shots = 0;
  for (const a of live) { while (a.st !== ST.HIDDEN && shots < 200) { shots++; for (const e of shootAnimal(a, 1)) { if (e.k === 'kill') kills++; else hits++; } } }
  ok(kills === 4 && hits > 0, `${shots} shots kill all 4 beasts (${hits} hits)`);
  ok(shootAnimal(live[0], 1).length === 0, 'a dead beast cannot be shot again');
  evs = stepHunt(st, 0.05, pl, an, 2, L, []);
  ok(st.ph === PH.MACH && evs.some((e) => e.k === 'gate'), 'all beasts dead -> the gate opens, machine phase');
}
// ---- the gate solid blocks, then lets you through
{
  const g = H.solids[0].gate, b = mk(0, L.chapters[0].gateZ + 6);
  for (let i = 0; i < 400; i++) step(b, I({ mz: -1 }));
  ok(b.z > L.chapters[0].gateZ, `closed gate stops the player (z=${b.z.toFixed(1)})`);
  g.active = false; for (let i = 0; i < 400; i++) step(b, I({ mz: -1 }));
  ok(b.z < L.chapters[0].gateZ - 3, 'open gate lets the player pass');
}
// ---- weight plates (2 players): both must stand on a plate, door stays open
{
  const C = L.chapters[0], xs = plateXs(2); const doorS = H.solids[0].door;
  const on = (k) => pl.forEach((p, i) => { p.x = i < k ? xs[i] : 0; p.z = i < k ? C.machZ : C.machZ + 12; p.y = 0; });
  on(1); let d = 0; for (let i = 0; i < 100; i++) stepHunt(st, 0.05, pl, an, 2, L, []);
  ok(!st.m[0].done && st.hold === 0, 'one player on one plate does nothing');
  on(2); for (let i = 0; i < 12; i++) { evs = stepHunt(st, 0.05, pl, an, 2, L, []); if (evs.some((e) => e.k === 'door')) d = 1; }
  ok(d === 0 && st.hold > 0.5 && st.occ.length === 2 && st.occ.every(Boolean), 'both on plates: hold timer builds');
  for (let i = 0; i < 10; i++) { evs = stepHunt(st, 0.05, pl, an, 2, L, []); if (evs.some((e) => e.k === 'door')) d = 1; }
  ok(d === 1 && st.m[0].done === 1, 'held 1 s -> the door latch is thrown');
  on(0); for (let i = 0; i < 80; i++) stepHunt(st, 0.05, pl, an, 2, L, []);
  ok(st.m[0].v === 1, 'door fully hoisted and stays up after the players leave the plates');
  // door as a collider (client sets y0 = v*10.2)
  const b = mk(0, L.doorZ + 8); doorS.y0 = 0; doorS.active = true;
  for (let i = 0; i < 300; i++) step(b, I({ mz: -1 }));
  ok(b.z > L.doorZ, `closed door blocks (z=${b.z.toFixed(1)})`);
  doorS.y0 = 10.2; doorS.active = false; for (let i = 0; i < 300; i++) step(b, I({ mz: -1 }));
  ok(b.z < L.doorZ - 3, 'raised door lets you walk under');
  // single player: one plate
  const st1 = newHunt(); const an1 = newAnimals(HUNT_DEFS()); st1.ph = PH.MACH; const q = [{ id: 1, x: plateXs(1)[0], y: 0, z: C.machZ }];
  for (let i = 0; i < 40; i++) stepHunt(st1, 0.05, q, an1, 1, L, []);
  ok(st1.m[0].done === 1, 'single player: one plate is enough');
}
// ---- chapter 2: counterweight lift
{
  const Lf = L.lift, C = L.chapters[1];
  const st2 = newHunt(); st2.ch = 1; st2.ph = PH.MACH;
  const an2 = newAnimals(HUNT_DEFS());
  const bots = [mk(Lf.x, Lf.z + 9), mk(Lf.x + 1.5, Lf.z + 9)];
  const view = () => bots.map((b, i) => ({ id: i + 1, x: b.x, y: b.y, z: b.z }));
  let acc = 0;
  const tick = (inps) => { acc += DT; if (acc >= 0.05) { stepHunt(st2, acc, view(), an2, bots.length, L, []); acc = 0; } H.disp[1] = st2.m[1].v; bots.forEach((b, i) => step(b, inps[i] || I())); };
  // both walk onto the cage
  for (let i = 0; i < 90 * 3; i++) tick([I({ mz: -1 }), I({ mz: -1 })]);
  ok(Math.abs(bots[0].z - Lf.z) < 3 && bots[0].y < 1 && bots[1].y < 1, `both riders on the cage (y=${bots[0].y.toFixed(2)}, ${bots[1].y.toFixed(2)})`);
  ok(st2.m[1].wa === 2 && st2.m[1].v === 0, 'two riders are heavier than the stone: the cage does not rise');
  // second player steps to the pan -> lift goes up with the first
  const path = [Lf.panX, Lf.panZ];
  for (let i = 0; i < 90 * 8; i++) { const b = bots[1]; const dx = path[0] - b.x, dz = path[1] - b.z; const dd = Math.hypot(dx, dz) || 1; tick([I(), dd > 0.6 ? I({ mx: dx / dd, mz: dz / dd }) : I()]); if (st2.m[1].v > 0.95) break; }
  ok(st2.m[1].wb === 1 && st2.m[1].v > 0.95, `friend on the pan -> the cage rises (v=${st2.m[1].v.toFixed(2)}, rider y=${bots[0].y.toFixed(1)})`);
  ok(bots[0].y > HU.LIFT_H - 0.6, `rider carried to the top (y=${bots[0].y.toFixed(2)})`);
  // rider walks off onto the cliff, then down the ramp
  for (let i = 0; i < 90 * 2.6; i++) tick([I({ mz: -1 }), I()]);
  ok(bots[0].z < Lf.cliffZ0 - 4 && bots[0].y > 5, `walks across the cliff top (z=${bots[0].z.toFixed(1)}, y=${bots[0].y.toFixed(1)})`);
  for (let i = 0; i < 90 * 8; i++) tick([I({ mz: -1 }), I()]);
  ok(bots[0].y < 0.5 && bots[0].z < C.z0 - 150, `down the ramp to the ground (z=${bots[0].z.toFixed(1)}, y=${bots[0].y.toFixed(1)})`);
  // solo ride: one player alone on the cage rises (stone is heavier)
  const st3 = newHunt(); st3.ch = 1; st3.ph = PH.MACH;
  for (let i = 0; i < 200; i++) stepHunt(st3, 0.05, [{ id: 1, x: Lf.x, y: st3.m[1].v * HU.LIFT_H + 0.2, z: Lf.z }], an2, 1, L, []);
  ok(st3.m[1].done === 1, 'single player: ride alone, the counterweight lifts you');
  // walking around the cliff is impossible
  const sneak = mk(HU.HW - 2, Lf.cliffZ0 + 10); H.disp[1] = 0;
  for (let i = 0; i < 90 * 4; i++) step(sneak, I({ mz: -1 }));
  ok(sneak.z > Lf.cliffZ0 - 0.5 && sneak.y < 1, 'the cliff cannot be walked around');
}
// ---- chapter 3: crushers + relay plates
{
  const Cr = L.crush, st = newHunt(), an2 = newAnimals(HUNT_DEFS()); st.ch = 2; st.ph = PH.MACH;
  const P = (...xs) => xs.map((x, i) => ({ id: i + 1, x: x[0], y: 0, z: x[1] }));
  const stepN = (pls, n, k = 3) => { for (let i = 0; i < k; i++) stepHunt(st, 0.05, pls, an2, n, L, []); };
  stepN(P([0, -5]), 2); ok(st.m[2].wa === 0, 'crushers run when nobody holds a plate');
  stepN(P([Cr.p1.x, Cr.p1.z], [0, 5]), 2); ok(st.m[2].wa === 1 && st.m[2].wb === 1, 'a friend on the START plate retracts the crushers');
  stepN(P([Cr.p2.x, Cr.p2.z], [0, 5]), 2); ok(st.m[2].wa === 1 && st.m[2].wc === 1, 'a friend on the FAR plate keeps them retracted (relay)');
  stepN(P([0, 5]), 2); ok(st.m[2].wa === 0, 'both plates empty -> crushers run again');
  stepN(P([Cr.p1.x, Cr.p1.z]), 1); ok(st.m[2].wa === 0, 'single player: no freeze (easy timing instead)');
  // hazard: a low beam knocks you back; frozen = harmless
  let lowT = -1; for (let c = 0; c < 10; c += 0.05) if (crushH(c, 0, false, 0) < 0.5) { lowT = c; break; }
  const b0 = mk(0, Cr.zs[0]); H.clock = lowT; H.fz = 0; H.st.n = 2;
  ok(!!world.checkHazards(b0, 1), 'beam down: knock-back hazard');
  H.fz = 1; ok(!world.checkHazards(b0, 1), 'frozen: no hazard');
  // the walk-through: team of 2 without freeze is stopped; with freeze it passes
  const run = (fz, solo, tries, smart = false) => {
    let passed = 0, hits = 0;
    for (let k = 0; k < tries; k++) {
      const b = mk((k % 3 - 1) * 4, Cr.p1.z + 6); H.st.n = solo ? 1 : 2; H.clock = k * 0.73; H.fz = fz;
      for (let i = 0; i < 90 * 40; i++) {
        H.clock += DT; let go = true;
        if (smart) for (let j = 0; j < 3; j++) { const dz = b.z - Cr.zs[j]; if (dz > -1 && dz < 9) { for (const dt2 of [0, 0.4, 0.8, 1.2]) if (crushH(H.clock + dt2, j, solo, fz) < 3.2) go = false; } }
        step(b, I({ mz: go ? -1 : 0 })); const hz = world.checkHazards(b, T); if (hz) { hits++; knock(b, hz.nx, hz.nz, hz.pow); b.stun = 0.5; }
        if (b.z < Cr.zs[2] - 4) { passed++; break; }
      }
    }
    return { passed, hits };
  };
  const r1 = run(1, false, 8); ok(r1.passed === 8 && r1.hits === 0, `frozen corridor: all 8 runs pass untouched (${r1.passed}/8, ${r1.hits} hits)`);
  const r2 = run(0, false, 8); ok(r2.hits > 0, `running crushers (team): they bonk the runners (${r2.passed}/8 passed, ${r2.hits} hits)`);
  const r3 = run(0, true, 8, true); ok(r3.passed === 8 && r3.hits === 0, `solo: waiting for the beam to lift gets you through (${r3.passed}/8, ${r3.hits} hits)`);
  const r4 = run(0, false, 8, true); ok(r4.passed < 8 || r4.hits > 0, `team without the plates: even a patient runner struggles (${r4.passed}/8 passed, ${r4.hits} hits)`);
  H.fz = 0;
}
// ---- chapter 4: cannon canyon
{
  const Cn = L.cannon, st = newHunt(), an2 = newAnimals(HUNT_DEFS()); st.ch = 3; st.ph = PH.MACH;
  const P = (...xs) => xs.map((x, i) => ({ id: i + 1, x: x[0], y: 0, z: x[1] }));
  const stepN = (pls, n) => { for (let i = 0; i < 3; i++) stepHunt(st, 0.05, pls, an2, n, L, []); };
  stepN(P([0, Cn.pad.z + 8]), 2); ok(st.m[3].wa === 0, 'cannon is dead without a friend on a plate');
  stepN(P([Cn.tn.x, Cn.tn.z], [0, Cn.pad.z]), 2); ok(st.m[3].wa === 1, 'friend on the FIRE plate arms the cannon');
  stepN(P([Cn.tf.x, Cn.tf.z]), 2); ok(st.m[3].wa === 1, 'a friend on the FAR plate arms it too (send the last one back)');
  stepN(P([0, Cn.pad.z + 8]), 1); ok(st.m[3].wa === 1, 'single player: always armed');
  const d = H.cannonDisc, land = (arm, inp) => { const b = mk(Cn.pad.x, Cn.pad.z + 0.4); d.bounce = arm ? CANNON.vy : 0; d.push = [0, -CANNON.vz]; let maxy = 0, t0 = 0; for (let i = 0; i < 90 * 5; i++) { step(b, inp ? I(inp) : I()); maxy = Math.max(maxy, b.y); if (b.grounded && i > 30 && b.y > -1) break; if (b.y < -6) break; } return { z: b.z, y: b.y, maxy }; };
  const off = land(false); ok(off.maxy < 0.5, 'unarmed pad is just a floor (you stay put)');
  const on = land(true); ok(on.y > -1 && on.z < Cn.gap[1] - 1 && on.z > Cn.gap[1] - 40, `armed cannon throws you over the canyon (lands z=${on.z.toFixed(1)}, ledge starts ${Cn.gap[1]})`);
  const fw = land(true, { mz: -1 }); ok(fw.y > -1 && fw.z < Cn.gap[1] - 1 && fw.z > Cn.gap[1] - 60, `holding forward still lands on the far side (z=${fw.z.toFixed(1)})`);
  const bk = land(true, { mz: 1 }); ok(bk.y > -1 && bk.z < Cn.gap[1] - 1, `pulling back mid-flight still makes it (z=${bk.z.toFixed(1)})`);
  d.bounce = 0;
  const walk = mk(0, Cn.gap[0] + 6); for (let i = 0; i < 90 * 4; i++) step(walk, I({ mz: -1 })); ok(walk.y < -3, 'walking into the canyon = fall (respawn)');
}
// ---- chapter 5: pump bridge
{
  const Pm = L.pump, st = newHunt(), an2 = newAnimals(HUNT_DEFS()); st.ch = 4; st.ph = PH.MACH;
  const on = (l, r) => { const pl = []; if (l) pl.push({ id: 1, x: Pm.pl.x, y: 0, z: Pm.pl.z }); if (r) pl.push({ id: 2, x: Pm.pr.x, y: 0, z: Pm.pr.z }); if (!pl.length) pl.push({ id: 1, x: 0, y: 0, z: Pm.pl.z + 10 }); return stepHunt(st, 0.05, pl, an2, 2, L, []); };
  on(0, 0); on(1, 0); ok(Math.abs(st.m[4].v - 0.125) < 1e-9, 'first foot on the left plate pumps (+1/8)');
  on(1, 0); on(0, 0); on(1, 0); ok(Math.abs(st.m[4].v - 0.125) < 1e-9, 'stepping on the SAME plate again does not pump');
  on(0, 0); on(0, 1); ok(Math.abs(st.m[4].v - 0.25) < 1e-9, 'switching to the right plate pumps');
  on(1, 1); ok(Math.abs(st.m[4].v - 0.25) < 1e-9 || Math.abs(st.m[4].v - 0.375) < 1e-9, 'two friends on both plates: only a fresh alternation counts');
  let bridge = false; for (let k = 0; k < 12 && !bridge; k++) { const e = on(k % 2 === 0, k % 2 === 1).concat(on(0, 0)); if (e.some((x) => x.k === 'bridge')) bridge = true; }
  ok(bridge && st.m[4].done === 1 && st.m[4].v === 1, 'alternating pumps fill the pressure -> the bridge rises and stays');
  const walk = (v) => { H.disp[4] = v; const b = mk(0, Pm.gap[0] + 8); for (let i = 0; i < 90 * 7; i++) { world.update(T, DT); step(b, I({ mz: -1 })); } return b; };
  const w0 = walk(0); ok(w0.y < -3, 'no pressure: the bridge is sunk, you fall');
  const w1 = walk(1); ok(w1.y > -0.5 && w1.z < Pm.gap[1] - 5, `full pressure: you walk across (z=${w1.z.toFixed(1)})`);
  H.disp[4] = 0;
}
// ---- chapter 6: simon pads
{
  const Sm = L.simon, st = newHunt(), an2 = newAnimals(HUNT_DEFS()); st.ch = 5; st.ph = PH.MACH; st.m[5].a = (2 << 6) | (0 << 4) | (3 << 2) | 1;
  ok(seqOf(st.m[5].a).join() === '2,0,3,1', 'sequence decodes');
  const on = (...idx) => stepHunt(st, 0.05, idx.length ? idx.map((i, k) => ({ id: k + 1, x: Sm.pads[i].x, y: 0, z: Sm.pads[i].z })) : [{ id: 1, x: 0, y: 0, z: Sm.pads[0].z + 12 }], an2, 2, L, []);
  const press = (i) => { on(); return on(i); };
  press(2); press(0); ok(st.m[5].v === 2, 'right pads in order count up');
  const e = press(1); ok(st.m[5].v === 0 && e.some((x) => x.k === 'wrong') && st.m[5].wc === 1, 'wrong pad -> reset + error flash');
  press(2); press(0); press(3); const ev = press(1);
  ok(st.m[5].done === 1 && ev.some((x) => x.k === 'solved'), 'full sequence -> solved');
  // standing still on a pad is only one press
  const st2 = newHunt(); st2.ch = 5; st2.ph = PH.MACH; st2.m[5].a = 0; for (let i = 0; i < 30; i++) stepHunt(st2, 0.05, [{ id: 1, x: Sm.pads[0].x, y: 0, z: Sm.pads[0].z }], an2, 1, L, []);
  ok(st2.m[5].v === 1, 'standing on a pad counts once');
  // two friends at once (a team can split the pads): both pads pressed in index order is a mistake if the order is wrong
  const door = H.doors[5].solid, b = mk(0, Sm.doorZ + 8); door.y0 = 0; door.active = true; for (let i = 0; i < 300; i++) step(b, I({ mz: -1 }));
  ok(b.z > Sm.doorZ, 'closed riddle door blocks'); door.active = false; for (let i = 0; i < 300; i++) step(b, I({ mz: -1 })); ok(b.z < Sm.doorZ - 3, 'open door lets you pass');
}
// ---- chapter flow + net packing
{
  const s = newHunt(), a = newAnimals(HUNT_DEFS());
  for (let c = 0; c < HU.CH - 1; c++) {
    s.ch = c; s.ph = PH.MACH; const e1 = stepHunt(s, 0.05, [{ id: 1, x: 0, y: 0, z: L.chapters[c].nextZ - 1 }], a, 1, L, []);
    ok(s.ch === c + 1 && s.ph === PH.WAIT && e1.some((e) => e.k === 'chapter'), `passing the end of chapter ${c + 1} starts chapter ${c + 2}`);
  }
  s.ch = HU.CH - 1; s.ph = PH.MACH; const e2 = stepHunt(s, 0.05, [{ id: 1, x: 0, y: 0, z: L.chapters[HU.CH - 1].nextZ - 1 }], a, 1, L, []);
  ok(s.ph === PH.DONE && e2.some((e) => e.k === 'end'), 'end of the last chapter -> THE END');
  s.m[5].a = 77; s.m[4].v = 0.5; const c = newHunt(); applyHunt(c, JSON.parse(JSON.stringify(packHunt(s))));
  ok(c.ch === s.ch && c.ph === s.ph && c.m[5].a === 77 && c.m[4].v === 0.5, 'state round-trips through the network format');
}
// ---- aim assist
{
  const list = newAnimals(HUNT_DEFS()); const a = list[0]; a.st = ST.IDLE; a.x = 4; a.z = -20; a.y = 0; a.hp = 5;
  const b = { x: 0, y: 0, z: 0 };
  ok(pickTarget(list, b, Math.PI) === a, 'aim assist finds a beast slightly off-centre');
  ok(pickTarget(list, b, 0) === null, 'no target behind you');
  a.x = 0; a.z = -80; ok(pickTarget(list, b, Math.PI) === null, 'out of range = no target');
}
console.log(fails ? `HUNT: ${fails} FAILED` : 'HUNT: ALL OK'); process.exit(fails ? 1 : 0);
