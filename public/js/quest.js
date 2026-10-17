// JUNGLE QUEST: one long road, 5 chapters (maze -> team circles -> boulder falls -> beast -> gate), then a dragon to free.
// Pure data + state machine (no three.js) so the SERVER (multiplayer) and the CLIENT (single player) share it.
export const Q = { HW: 11, CELL: 4.4, COLS: 5, ROWS: [5, 6, 7, 8, 9], CH: 5, PLAZA: 16, BOULDER: 4, ARENA: 40, GATE: 3 };
export const PH = { MAZE: 0, BEAST: 1, DRAGON: 2, FLY: 3, WIN: 4 };
export const BEASTS = ['coyote', 'boar', 'hyena', 'bear', 'gorilla'];
export const CIRCLE_R = 2.3, HOLD_S = 1.2;

let cache = null;
export function questLayout() {
  if (cache) return cache;
  let z = -10; const chapters = [];
  for (let c = 0; c < Q.CH; c++) {
    const rows = Q.ROWS[c], mz0 = z, mz1 = z - rows * Q.CELL;
    chapters.push({
      c, rows, mz0, mz1, plazaZ: mz1 - 8, boulderZ: mz1 - 18, arenaZ0: mz1 - 20, arenaZ1: mz1 - 60, arenaC: mz1 - 40, gateZ: mz1 - 61.5, next: mz1 - 63,
      arena: { x0: -Q.HW + 0.6, x1: Q.HW - 0.6, z0: mz1 - 60, z1: mz1 - 20 },
    });
    z = mz1 - 63;
  }
  const dr = { z0: z, circlesZ: z - 10, cageZ: z - 34, dragonZ: z - 36, endZ: z - 50 };
  cache = { chapters, dr, road: { x0: -Q.HW + 0.6, x1: Q.HW - 0.6, z0: dr.endZ + 2, z1: 12 }, startZ: 8 };
  return cache;
}
export const circleXs = (n) => Array.from({ length: n }, (_, k) => (k - (n - 1) / 2) * 5.6);

export const newQuest = () => ({ ch: 0, ph: PH.MAZE, hold: 0, fly: 0, occ: [], n: 1 });

// the 5 beasts exist from the start but stay hidden until their boulder falls
export const QUEST_DEFS = () => questLayout().chapters.map((C, i) => ({ id: i, kind: BEASTS[i], x: 0, z: C.arenaC, hidden: true, bounds: C.arena }));
export const questAnimalLayout = () => ({ trees: [], petBounds: questLayout().road });

export function activateBeast(a, L) {
  const C = L.chapters[a.id];
  a.st = 0; a.x = 0; a.z = C.arenaC; a.y = 0; a.tx = 0; a.tz = C.arenaC; a.home = { x: 0, z: C.arenaC }; a.wait = 0.8; a.cool = 1.5; a.yaw = 0;
}

// which of the n circles are occupied (a circle is occupied when somebody stands in it)
export function occupancy(zc, n, players) {
  const xs = circleXs(n);
  return xs.map((x) => players.some((p) => p.y < 2.5 && Math.hypot(p.x - x, p.z - zc) < CIRCLE_R + 0.2) ? 1 : 0);
}

// players: [{id,x,y,z}], an: animal list (beast i = an[i]), n: number of circles (= players in the room)
export function stepQuest(q, dt, players, an, n, L, out = []) {
  q.n = Math.max(1, n);
  const zc = q.ph === PH.MAZE ? L.chapters[q.ch].plazaZ : q.ph === PH.DRAGON ? L.dr.circlesZ : null;
  if (zc !== null) {
    q.occ = occupancy(zc, q.n, players);
    if (q.occ.every((v) => v)) q.hold += dt; else q.hold = 0;
  } else { q.occ = []; q.hold = 0; }
  if (q.ph === PH.MAZE && q.hold >= HOLD_S) {
    q.ph = PH.BEAST; q.hold = 0; activateBeast(an[q.ch], L); out.push({ k: 'boulder', ch: q.ch });
  } else if (q.ph === PH.BEAST && an[q.ch].owner) {
    out.push({ k: 'gate', ch: q.ch, pid: an[q.ch].owner });
    if (q.ch >= Q.CH - 1) { q.ph = PH.DRAGON; q.ch = Q.CH; } else { q.ch++; q.ph = PH.MAZE; }
  } else if (q.ph === PH.DRAGON && q.hold >= HOLD_S + 0.4) {
    q.ph = PH.FLY; q.hold = 0; q.fly = 0; out.push({ k: 'cage' });
  } else if (q.ph === PH.FLY) {
    q.fly += dt; if (q.fly > 9) { q.ph = PH.WIN; out.push({ k: 'victory' }); }
  }
  return out;
}
