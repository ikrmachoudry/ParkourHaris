// v243: the SAFE ZONE of the Jang island (PUBG style): a circle that shrinks in steps; outside it you take damage that gets stronger every step.
// Everything comes from the room seed + the match clock, so all players of a match see the same circle (nothing is sent over the network).
import { CMB } from './combat.js';
// [wait before it shrinks (s), shrink time (s), radius at the end, damage per second outside]
// v251: the first circle shows up only after 7 minutes, the end circle stays big enough to fight in (r 38) and the damage is HALF of before
const STEPS = [[420, 100, 230, 0.75], [60, 70, 150, 1.5], [45, 60, 95, 2.5], [35, 50, 60, 4], [25, 45, 38, 6]];
export const BOMB_T = [330, 600], BOMB_LEN = 115, BOMB_R = 55;   // v251: the red BOMBING circle (independent of the blue one) shows up twice, 115 s each
export const AIR_T = [200, 470, 740];                           // v251: an airdrop plane crosses the island at these match seconds
export const AIR = { v: 62, back: 460, alt: 170, fall: 7 };   // airdrop plane speed (m/s), how far before the drop point it starts, the height it drops from, the crate's fall speed under its parachute
export const airLand = (q) => q.t0 + AIR.back / AIR.v + AIR.alt / AIR.fall;
export function makeZone(seed) {
  const R0 = CMB.half - 6;
  let s = (seed | 0) || 1; const rnd = () => { s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const P = [{ x: 0, z: 0, r: R0 }];   // circle 0 = the whole island; every next circle lies INSIDE the one before
  for (const [, , r] of STEPS) { const p = P[P.length - 1], a = rnd() * 6.2832, d = Math.sqrt(rnd()) * Math.max(0, p.r - r) * 0.9; P.push({ x: p.x + Math.cos(a) * d, z: p.z + Math.sin(a) * d, r }); }
  const T = []; let t = 0; for (const [w, sh, , dps] of STEPS) { T.push({ t0: t + w, t1: t + w + sh, dps }); t += w + sh; }
  const B = BOMB_T.map((t0) => { const r = BOMB_R, a = rnd() * 6.2832, d = Math.sqrt(rnd()) * (R0 - r - 20); return { t0, t1: t0 + BOMB_LEN, x: Math.cos(a) * d, z: Math.sin(a) * d, r }; });
  const AD = AIR_T.map((t0) => ({ t0, a: rnd() * 6.2832, k: rnd(), id: 0 }));   // the drop point itself is picked inside the blue circle of that moment (airPoint)
  return { P, T, B, AD };
}
// the red circle at match time t (or null) and, for it, the bomb number k (one every 0.8 s) with its spot: the same on every phone
export function bombAt(Z, t) { for (const b of Z.B) if (t >= b.t0 - 12 && t < b.t1) return { ...b, warn: t < b.t0, left: b.t1 - t, tl: b.t0 - t }; return null; }
export function bombSpot(Z, b, k) { let h = ((k + 1) * 2654435761 + Math.round(b.t0) * 40503) >>> 0; const r1 = ((h = Math.imul(h ^ (h >>> 15), 2246822519)) >>> 0) / 4294967296, r2 = ((h = Math.imul(h ^ (h >>> 13), 3266489917)) >>> 0) / 4294967296; const a = r1 * 6.2832, d = Math.sqrt(r2) * b.r; return { x: b.x + Math.cos(a) * d, z: b.z + Math.sin(a) * d }; }
// where airdrop n lands: a random point inside the blue circle at the time it is dropped
export function airPoint(Z, n) { const q = Z.AD[n], z = zoneAt(Z, q.t0 + 20), a = q.a, d = Math.sqrt(q.k) * z.r * 0.7; return { x: z.x + Math.cos(a) * d, z: z.z + Math.sin(a) * d, hd: [Math.sin(q.a + 1.3), Math.cos(q.a + 1.3)] }; }
// where the circle is at match time t: the one you stand in now (x, z, r) and the next one (nx, nz, nr), seconds to the next event, the damage per second outside
export function zoneAt(Z, t) {
  let i = 0; while (i < Z.T.length && t >= Z.T[i].t1) i++;
  if (i >= Z.T.length) { const p = Z.P[Z.P.length - 1]; return { x: p.x, z: p.z, r: p.r, nx: p.x, nz: p.z, nr: p.r, i, shrinking: false, left: 0, dps: Z.T[Z.T.length - 1].dps, last: true }; }
  const a = Z.P[i], b = Z.P[i + 1], st = Z.T[i], k = t <= st.t0 ? 0 : (t - st.t0) / (st.t1 - st.t0), e = k * k * (3 - 2 * k);
  return { x: a.x + (b.x - a.x) * e, z: a.z + (b.z - a.z) * e, r: a.r + (b.r - a.r) * e, nx: b.x, nz: b.z, nr: b.r, i, shrinking: k > 0, left: k > 0 ? st.t1 - t : st.t0 - t, dps: st.dps, last: false };
}
