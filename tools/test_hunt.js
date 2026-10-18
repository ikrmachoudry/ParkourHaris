// Jungle Hunt checks: world builds, beast waves, gun kills, gate, weight plates + door, counterweight lift, chapter flow, aim assist.
import { buildLevel } from '../public/js/levels.js';
import { newBody, stepBody, respawn } from '../public/js/physics.js';
import { HU, PH, huntLayout, plateXs, newHunt, stepHunt, shootAnimal, HUNT_DEFS, huntAnimalLayout, beastsFor, packHunt, applyHunt } from '../public/js/hunt.js';
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
// ---- chapter flow + net packing
{
  const s = newHunt(), a = newAnimals(HUNT_DEFS()); s.ph = PH.MACH;
  const e1 = stepHunt(s, 0.05, [{ id: 1, x: 0, y: 0, z: L.chapters[0].nextZ - 1 }], a, 1, L, []);
  ok(s.ch === 1 && s.ph === PH.WAIT && e1.some((e) => e.k === 'chapter'), 'passing the end of chapter 1 starts chapter 2');
  s.ph = PH.MACH; const e2 = stepHunt(s, 0.05, [{ id: 1, x: 0, y: 0, z: L.chapters[1].nextZ - 1 }], a, 1, L, []);
  ok(s.ph === PH.DONE && e2.some((e) => e.k === 'end'), 'end of the last chapter -> THE END');
  const c = newHunt(); applyHunt(c, JSON.parse(JSON.stringify(packHunt(s))));
  ok(c.ch === s.ch && c.ph === s.ph, 'state round-trips through the network format');
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
