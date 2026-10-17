// Jungle Quest: random mazes are solvable and walkable for every seed, boulder / gate / cage block until opened, state machine works for 1-4 players.
import { buildLevel } from '../public/js/levels.js';
import { newBody, stepBody } from '../public/js/physics.js';
import { Q, PH, questLayout, newQuest, stepQuest, QUEST_DEFS, questAnimalLayout, circleXs, BEASTS } from '../public/js/quest.js';
import { newAnimals, stepAnimals, hitAnimal, KINDS, ST } from '../public/js/jlayout.js';
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const L = questLayout();
ok(L.chapters.length === 5 && L.chapters[1].mz0 === L.chapters[0].next, 'layout: 5 chapters chained');

function walk(world, b, pts, maxT = 25) {
  for (const [tx, tz] of pts) {
    let moved = true;
    for (let i = 0; i < maxT * 90; i++) {
      const dx = tx - b.x, dz = tz - b.z, d = Math.hypot(dx, dz); if (d < 0.9) { moved = true; break; }
      stepBody(world, b, 1 / 90, { mx: dx / d, mz: dz / d, jumpPressed: false, jumpHeld: false }); b.events.length = 0; moved = false;
    }
    if (!moved) return false;
  }
  return true;
}
for (const seed of [1, 777, 424242]) {
  const { world, info } = buildLevel(2, true, null, seed);
  const sizes = info.mazePaths.map((p) => p.length);
  ok(sizes.every((n, i) => n >= Q.ROWS[i]) && sizes[4] > sizes[0], `seed ${seed}: mazes solvable, path lengths ${sizes.join('/')}`);
  const b = newBody(); b.x = 0; b.y = 0.01; b.z = 3;
  let good = walk(world, b, [[0, 0]]);
  for (const C of L.chapters) {
    good = good && walk(world, b, [[0, C.mz0 + 1.5], ...info.mazePaths[C.c], [0, C.mz1 - 2], [0, C.plazaZ]]);
    if (!good) { ok(false, `seed ${seed}: chapter ${C.c + 1} maze walk stuck at ${b.x.toFixed(1)},${b.z.toFixed(1)}`); break; }
    // boulder blocks
    const z0 = b.z; walk(world, b, [[0, C.arenaZ0 - 6]], 4);
    ok(b.z > C.boulderZ + 1.8, `seed ${seed} ch${C.c + 1}: boulder blocks (z ${b.z.toFixed(1)})`);
    info.quest.chapters[C.c].boulder.solid.active = false;
    good = walk(world, b, [[0, C.arenaC]]);
    walk(world, b, [[0, C.gateZ + 4], [0, C.gateZ - 3]], 3);
    ok(b.z > C.gateZ + 0.6, `seed ${seed} ch${C.c + 1}: gate blocks (z ${b.z.toFixed(1)})`);
    info.quest.chapters[C.c].gate.solid.active = false;
    good = good && walk(world, b, [[0, C.next - 2]]);
    if (!good) { ok(false, `seed ${seed}: chapter ${C.c + 1} arena walk stuck at ${b.x.toFixed(1)},${b.z.toFixed(1)}`); break; }
  }
  if (good) {
    ok(true, `seed ${seed}: walked all 5 mazes + arenas`);
    walk(world, b, [[0, L.dr.circlesZ], [0, L.dr.cageZ + 8]], 20);
    ok(b.z > L.dr.cageZ + 6 && b.z < L.dr.cageZ + 9.5, `seed ${seed}: dragon cage blocks (z ${b.z.toFixed(1)})`);
    // fences hold on both sides
    const f = newBody(); f.x = 0; f.y = 0.01; f.z = L.chapters[0].arenaC; walk(world, f, [[40, f.z]], 6); ok(f.x < Q.HW + 0.2, `seed ${seed}: fence holds (x ${f.x.toFixed(2)})`);
  }
}
// different seeds make different mazes, same seed the same
{ const a = buildLevel(2, true, null, 5).info.mazePaths, b2 = buildLevel(2, true, null, 5).info.mazePaths, c = buildLevel(2, true, null, 6).info.mazePaths;
  ok(JSON.stringify(a) === JSON.stringify(b2), 'same seed -> same mazes'); ok(JSON.stringify(a) !== JSON.stringify(c), 'different seed -> different mazes'); }

// ---- state machine for 1..4 players
for (let n = 1; n <= 4; n++) {
  const q = newQuest(), an = newAnimals(QUEST_DEFS()), AL = questAnimalLayout(), evs = [];
  const ids = Array.from({ length: n }, (_, i) => i + 1);
  const at = (zc, k) => ids.map((id, i) => ({ id, x: i < k ? circleXs(n)[i] : 0, y: 0, z: i < k ? zc : 5 }));
  const run = (pl, secs) => { for (let t = 0; t < secs; t += 0.05) { const e = stepQuest(q, 0.05, pl, an, n, L, []); evs.push(...e); stepAnimals(an, 0.05, pl, AL); } };
  ok(an.every((a) => a.st === ST.HIDDEN), `n=${n}: beasts start hidden`);
  for (const C of L.chapters) {
    if (n > 1) { run(at(C.plazaZ, n - 1), 3); ok(q.ph === PH.MAZE && q.ch === C.c, `n=${n} ch${C.c + 1}: ${n - 1}/${n} circles is not enough`); }
    run(at(C.plazaZ, n), 2);
    ok(q.ph === PH.BEAST && an[C.c].st !== ST.HIDDEN && evs.some((e) => e.k === 'boulder' && e.ch === C.c), `n=${n} ch${C.c + 1}: all circles -> boulder falls, ${BEASTS[C.c]} appears`);
    const a = an[C.c], K = KINDS[a.kind];
    for (let h = 0; h < K.hp; h++) { hitAnimal(a, ids[h % n], a.x + 2, a.z); stepQuest(q, 0.05, at(0, 0), an, n, L, evs); if (h < K.hp - 1) ok(q.ph === PH.BEAST, ''); }
    ok(a.owner && evs.some((e) => e.k === 'gate' && e.ch === C.c), `n=${n} ch${C.c + 1}: ${K.hp} team hits -> pet + gate (${KINDS[a.kind].name})`);
  }
  ok(q.ph === PH.DRAGON, `n=${n}: dragon phase`);
  run(at(L.dr.circlesZ, n), 2.5); ok(q.ph === PH.FLY && evs.some((e) => e.k === 'cage'), `n=${n}: circles free the dragon`);
  run(at(0, 0), 10); ok(q.ph === PH.WIN && evs.some((e) => e.k === 'victory'), `n=${n}: VICTORY`);
}
// beasts attack but only knock back, and stay inside their arena
{ const an = newAnimals(QUEST_DEFS()), C = L.chapters[1], a = an[1]; a.st = 0; a.x = 0; a.z = C.arenaC; a.home = { x: 0, z: C.arenaC };
  let bites = 0, out = 0; const AL = questAnimalLayout();
  for (let t = 0; t < 30; t += 0.05) { const evs = stepAnimals(an, 0.05, [{ id: 1, x: 3, y: 0, z: C.arenaC + 8, r: 0 }], AL); bites += evs.filter((e) => e.k === 'bite').length; if (a.z < C.arena.z0 - 1 || a.z > C.arena.z1 + 1) out++; }
  ok(bites > 0, `beast attacks (${bites} bites)`); ok(out === 0, 'beast stays in its arena'); }
console.log(fails ? 'FAILED' : 'QUEST OK'); process.exit(fails ? 1 : 0);
