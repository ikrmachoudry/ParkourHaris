// JUNGLE HUNT: co-op gun map. One long jungle road, split in chapters. Each chapter = a beast arena (shoot them all -> the gate opens)
// followed by a MACHINE that needs the whole team (weight plates, counterweight lift, ...). Pure data + state machine (no three.js), shared
// by the SERVER (multiplayer) and the CLIENT (single player). Nobody can die - beasts only knock you back.
import { KINDS, ST } from './jlayout.js';

export const HU = { HW: 12, CH: 2, STEP: 160, SLOTS: 6, ARENA_LEN: 56, LIFT_H: 9 };
export const PH = { WAIT: 0, BEAST: 1, MACH: 2, DONE: 3 };
export const KIND_SETS = [['coyote', 'boar'], ['hyena', 'bear']];   // beasts of each chapter (more chapters come in later updates)
export const PLATE_R = 2.3;

let cache = null;
export function huntLayout() {
  if (cache) return cache;
  const chapters = [];
  for (let c = 0; c < HU.CH; c++) {
    const z0 = -14 - c * HU.STEP;
    chapters.push({
      c, z0, trigZ: z0 - 4, arenaC: z0 - 34, arena: { x0: -HU.HW + 1, x1: HU.HW - 1, z0: z0 - 6 - HU.ARENA_LEN, z1: z0 - 6 },
      gateZ: z0 - 66, machZ: z0 - 84, nextZ: z0 - HU.STEP + 4, end: z0 - HU.STEP,
    });
  }
  const last = chapters[HU.CH - 1];
  cache = { chapters, endZ: last.end - 24, road: { x0: -HU.HW + 0.6, x1: HU.HW - 0.6, z0: last.end - 24, z1: 12 }, startZ: 8,
    // machine geometry
    lift: { x: -5.5, z: last.z0 - 100, w: 6, d: 6, cliffZ0: last.z0 - 102.5, cliffZ1: last.z0 - 128, panX: 6.2, panZ: last.z0 - 84, panR: 3.2 },
    doorZ: chapters[0].z0 - 112 };
  return cache;
}
export const plateXs = (n) => Array.from({ length: n }, (_, k) => (k - (n - 1) / 2) * 5.6);

export const newHunt = () => ({ ch: 0, ph: PH.WAIT, n: 1, hold: 0, occ: [], m: [{ v: 0, done: 0 }, { v: 0, done: 0, wa: 0, wb: 0 }], left: 0 });

export const HUNT_DEFS = () => {
  const L = huntLayout(), defs = [];
  for (const C of L.chapters) for (let k = 0; k < HU.SLOTS; k++) defs.push({ id: C.c * HU.SLOTS + k, kind: KIND_SETS[C.c][k % 2], x: 0, z: C.arenaC, hidden: true, bounds: C.arena });
  return defs;
};
export const huntAnimalLayout = () => ({ trees: [], petBounds: huntLayout().road });
export const beastsFor = (n) => Math.min(HU.SLOTS, 2 + Math.max(1, n));

function activate(a, C, k) {
  const x = ((k % 3) - 1) * 6 + (Math.random() - 0.5) * 2, z = C.arenaC + (k < 3 ? -8 : 8) + (Math.random() - 0.5) * 6;
  a.st = ST.IDLE; a.dead = 0; a.hp = KINDS[a.kind].hp; a.x = x; a.z = z; a.y = 0; a.tx = x; a.tz = z; a.home = { x, z }; a.wait = 0.6; a.cool = 1.6; a.yaw = 0;
}

// one gun hit. Returns events [{k:'hit',id,hp} | {k:'kill',id,pid}]
export function shootAnimal(a, pid, out = []) {
  if (!a || a.st === ST.HIDDEN || a.dead || a.owner) return out;
  a.hp -= 1; a.stagger = 0.16; a.wind = 0; a.cool = Math.max(a.cool || 0, 0.5);
  out.push({ k: 'hit', id: a.id, hp: a.hp });
  if (a.hp <= 0) { a.dead = 1; a.st = ST.HIDDEN; out.push({ k: 'kill', id: a.id, pid }); }
  return out;
}

const near = (p, x, z, r) => p.y < 3 && Math.hypot(p.x - x, p.z - z) < r;
// players: [{id,x,y,z}], an: animal list (chapter c uses an[c*SLOTS .. c*SLOTS+SLOTS-1])
export function stepHunt(h, dt, players, an, n, L, out = []) {
  h.n = Math.max(1, Math.min(4, n)); h.occ = []; h.hold = h.ph === PH.MACH ? h.hold : 0;
  if (h.ph === PH.DONE) return out;
  const C = L.chapters[h.ch], base = h.ch * HU.SLOTS;
  if (h.ph === PH.WAIT) {
    if (players.some((p) => p.z < C.trigZ)) {
      const k = beastsFor(h.n);
      for (let i = 0; i < k; i++) activate(an[base + i], C, i);
      h.ph = PH.BEAST; h.left = k; out.push({ k: 'wave', ch: h.ch, n: k });
    }
  } else if (h.ph === PH.BEAST) {
    let alive = 0; for (let i = 0; i < HU.SLOTS; i++) { const a = an[base + i]; if (a.st !== ST.HIDDEN && !a.dead) alive++; }
    h.left = alive;
    if (alive === 0) { h.ph = PH.MACH; h.hold = 0; out.push({ k: 'gate', ch: h.ch }); }
  } else if (h.ph === PH.MACH) {
    const m = h.m[h.ch];
    if (h.ch === 0) { // WEIGHT PLATES: everybody on a plate (1 s) -> the big door is hoisted up by the gears and stays open
      const xs = plateXs(h.n); h.occ = xs.map((x) => (players.some((p) => near(p, x, C.machZ, PLATE_R + 0.2)) ? 1 : 0));
      if (!m.done) { if (h.occ.every((v) => v)) h.hold += dt; else h.hold = Math.max(0, h.hold - dt * 2); if (h.hold >= 1) { m.done = 1; out.push({ k: 'door', ch: 0 }); } }
      m.v = Math.max(0, Math.min(1, m.v + (m.done ? dt / 3 : 0)));
    } else { // COUNTERWEIGHT LIFT: a 1.5 stone hangs on the other side. Riders on the cage are heavier than the stone unless friends stand on the pan.
      const Lf = L.lift, y = m.v * HU.LIFT_H;
      m.wa = players.filter((p) => Math.abs(p.x - Lf.x) < Lf.w / 2 && Math.abs(p.z - Lf.z) < Lf.d / 2 && p.y > y - 1.2 && p.y < y + 3).length;
      m.wb = players.filter((p) => near(p, Lf.panX, Lf.panZ, Lf.panR)).length;
      const net = 1.5 + m.wb - m.wa, tgt = m.wa + m.wb === 0 ? 0 : net > 0 ? 1 : 0;
      const d = tgt - m.v, st = dt * 0.4; m.v = Math.abs(d) < st ? tgt : m.v + Math.sign(d) * st;
      if (m.v > 0.98 && !m.done) { m.done = 1; out.push({ k: 'lift', ch: 1 }); }
    }
  }
  if ((h.ph === PH.MACH || h.ph === PH.BEAST) && players.some((p) => p.z < C.nextZ) && (h.ph === PH.MACH)) {
    if (h.ch >= HU.CH - 1) { h.ph = PH.DONE; out.push({ k: 'end' }); }
    else { h.ch++; h.ph = PH.WAIT; h.hold = 0; out.push({ k: 'chapter', ch: h.ch }); }
  }
  return out;
}

// compact network form
export const packHunt = (h) => ({ ch: h.ch, ph: h.ph, n: h.n, hold: +h.hold.toFixed(2), occ: h.occ, left: h.left, m: h.m.map((m) => [+m.v.toFixed(3), m.done, m.wa || 0, m.wb || 0]) });
export function applyHunt(h, m) {
  h.ch = m.ch; h.ph = m.ph; h.n = m.n; h.hold = m.hold || 0; h.occ = m.occ || []; h.left = m.left || 0;
  (m.m || []).forEach((v, i) => { if (h.m[i]) Object.assign(h.m[i], { v: v[0], done: v[1], wa: v[2], wb: v[3] }); });
}
