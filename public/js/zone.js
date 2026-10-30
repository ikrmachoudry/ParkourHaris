// v243: the SAFE ZONE of the Jang island (PUBG style): a circle that shrinks in steps; outside it you take damage that gets stronger every step.
// Everything comes from the room seed + the match clock, so all players of a match see the same circle (nothing is sent over the network).
import { CMB } from './combat.js';
// [wait before it shrinks (s), shrink time (s), radius at the end, damage per second outside]
const STEPS = [[120, 60, 200, 1.5], [60, 50, 125, 3], [50, 40, 70, 5], [40, 35, 30, 8], [30, 30, 8, 12]];
const R0 = CMB.half - 6;
export function makeZone(seed) {
  let s = (seed | 0) || 1; const rnd = () => { s = (s + 0x6D2B79F5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const P = [{ x: 0, z: 0, r: R0 }];   // circle 0 = the whole island; every next circle lies INSIDE the one before
  for (const [, , r] of STEPS) { const p = P[P.length - 1], a = rnd() * 6.2832, d = Math.sqrt(rnd()) * Math.max(0, p.r - r) * 0.9; P.push({ x: p.x + Math.cos(a) * d, z: p.z + Math.sin(a) * d, r }); }
  const T = []; let t = 0; for (const [w, sh, , dps] of STEPS) { T.push({ t0: t + w, t1: t + w + sh, dps }); t += w + sh; }
  return { P, T };
}
// where the circle is at match time t: the one you stand in now (x, z, r) and the next one (nx, nz, nr), seconds to the next event, the damage per second outside
export function zoneAt(Z, t) {
  let i = 0; while (i < Z.T.length && t >= Z.T[i].t1) i++;
  if (i >= Z.T.length) { const p = Z.P[Z.P.length - 1]; return { x: p.x, z: p.z, r: p.r, nx: p.x, nz: p.z, nr: p.r, i, shrinking: false, left: 0, dps: Z.T[Z.T.length - 1].dps, last: true }; }
  const a = Z.P[i], b = Z.P[i + 1], st = Z.T[i], k = t <= st.t0 ? 0 : (t - st.t0) / (st.t1 - st.t0), e = k * k * (3 - 2 * k);
  return { x: a.x + (b.x - a.x) * e, z: a.z + (b.z - a.z) * e, r: a.r + (b.r - a.r) * e, nx: b.x, nz: b.z, nr: b.r, i, shrinking: k > 0, left: k > 0 ? st.t1 - t : st.t0 - t, dps: st.dps, last: false };
}
