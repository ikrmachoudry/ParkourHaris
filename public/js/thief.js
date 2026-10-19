// MISSION 2 - THIEF CHASE: the road the thief takes and the "director" that plays the whole story. No DOM / three.js: it runs on the server
// (multiplayer) or inside the browser (single player), and every player only DRAWS what it broadcasts.
//
//  rob      the thief runs out of the bank with the loot, round the back of his car, and gets in            (the cut-scene)
//  drive1   chase through the city to the west avenue (he slows down if you fall behind, speeds up when you are close)
//  waitA    he stops at the roadside and waits until somebody is near
//  trunk    gets out, opens the boot, pulls out a gun, slams the boot, runs back to the car
//  drive2   the chase goes on: out of the city, up the spiral road of Mount Haris
//  summit   at the top he jumps out with his pistol and runs for cover on the grassy summit
//  ambush   he hides behind trees and boulders, pops out and shoots at the nearest player; shoot him while he is out in the open
//  down     he is dead: MISSION PASSED (and the reward)
import { GT, mtRoad, gtaH, BANK, POLICE, CHASE, SUMMIT } from './gta.js';

const STEP = 1.5, PAX = 33554432;
const hyp = Math.hypot;
export const carIdxOf = (a) => ((a >> 9) & 15) | (((a >> 24) & 1) << 4);

// ---- the route: the city corners with rounded bends (so the car stays on the road), then the mountain spiral
function fillet(c, rad) {
  const out = [c[0]];
  for (let i = 1; i < c.length - 1; i++) {
    const V = c[i], a = c[i - 1], b = c[i + 1], la = hyp(V[0] - a[0], V[1] - a[1]), lb = hyp(b[0] - V[0], b[1] - V[1]), d = Math.min(rad, la / 2, lb / 2);
    const P0 = [V[0] - (V[0] - a[0]) / la * d, V[1] - (V[1] - a[1]) / la * d], P2 = [V[0] + (b[0] - V[0]) / lb * d, V[1] + (b[1] - V[1]) / lb * d];
    for (let k = 0; k <= 12; k++) { const t = k / 12, u = 1 - t; out.push([u * u * P0[0] + 2 * u * t * V[0] + t * t * P2[0], u * u * P0[1] + 2 * u * t * V[1] + t * t * P2[1]]); }
  }
  out.push(c[c.length - 1]); return out;
}
let _route = null;
export function buildRoute() {
  if (_route) return _route;
  const raw = fillet(CHASE.corners, 12);
  const M = GT.MT, len = (M.R + M.Rt) / 2 * M.T * Math.PI * 2, N = Math.ceil(len / 3);
  for (let i = 1; i <= N; i++) { const q = mtRoad(i / N); raw.push([q.x, q.z]); }
  const e = mtRoad(1), th = Math.atan2(e.z - M.cz, e.x - M.cx); raw.push([M.cx + 8 * Math.cos(th), M.cz + 8 * Math.sin(th)]);   // from the road's end into the plaza
  // resample every STEP metres (by arc length)
  const cum = [0]; for (let i = 1; i < raw.length; i++) cum.push(cum[i - 1] + hyp(raw[i][0] - raw[i - 1][0], raw[i][1] - raw[i - 1][1]));
  const tot = cum[cum.length - 1], pts = []; let seg = 1;
  for (let sd = 0; sd <= tot; sd += STEP) {
    while (seg < raw.length - 1 && cum[seg] < sd) seg++;
    const a = raw[seg - 1], b = raw[seg], L = Math.max(1e-9, cum[seg] - cum[seg - 1]), t = Math.min(1, Math.max(0, (sd - cum[seg - 1]) / L));
    pts.push({ x: a[0] + (b[0] - a[0]) * t, z: a[1] + (b[1] - a[1]) * t, s: sd });
  }
  const n = pts.length; const yaw = new Float32Array(n), vlim = new Float32Array(n);
  for (let i = 0; i < n; i++) { const a = pts[Math.max(0, i - 1)], b = pts[Math.min(n - 1, i + 1)]; yaw[i] = Math.atan2(b.x - a.x, b.z - a.z); }
  for (let i = 0; i < n; i++) {   // speed limit from the bend radius (a sideways acceleration of ~6 m/s2)
    const j = Math.min(n - 1, i + 3), k = Math.max(0, i - 3); let dy = yaw[j] - yaw[k]; while (dy > Math.PI) dy -= 2 * Math.PI; while (dy < -Math.PI) dy += 2 * Math.PI;
    const kappa = Math.abs(dy) / Math.max(1, pts[j].s - pts[k].s); vlim[i] = Math.max(7, Math.min(40, Math.sqrt(6 / Math.max(kappa, 1e-4))));
  }
  for (let i = n - 2; i >= 0; i--) vlim[i] = Math.min(vlim[i], Math.sqrt(vlim[i + 1] * vlim[i + 1] + 2 * 8 * STEP));   // always able to brake in time
  let ia = 0, bd = 1e9; for (let i = 0; i < n; i++) { const d = hyp(pts[i].x - CHASE.stopAt[0], pts[i].z - CHASE.stopAt[1]); if (d < bd) { bd = d; ia = i; } }
  _route = { pts, yaw, vlim, n, total: pts[n - 1].s, sA: pts[ia].s };
  return _route;
}
export function routeAt(R, s) {
  s = Math.max(0, Math.min(R.total, s)); const i = Math.min(R.n - 2, Math.floor(s / STEP)), a = R.pts[i], b = R.pts[i + 1], t = (s - a.s) / Math.max(1e-6, b.s - a.s);
  let dy = R.yaw[i + 1] - R.yaw[i]; while (dy > Math.PI) dy -= 2 * Math.PI; while (dy < -Math.PI) dy += 2 * Math.PI;
  return { x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t, yaw: R.yaw[i] + dy * t, vlim: Math.min(R.vlim[i], R.vlim[i + 1]) };
}
const walkPath = (pts) => { const c = [0]; for (let i = 1; i < pts.length; i++) c.push(c[i - 1] + hyp(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1])); return { pts, c, len: c[c.length - 1] }; };
function onPath(W, d) {
  d = Math.max(0, Math.min(W.len, d)); let i = 1; while (i < W.c.length - 1 && W.c[i] < d) i++;
  const a = W.pts[i - 1], b = W.pts[i], L = Math.max(1e-6, W.c[i] - W.c[i - 1]), t = (d - W.c[i - 1]) / L;
  return { x: a[0] + (b[0] - a[0]) * t, z: a[1] + (b[1] - a[1]) * t, yaw: Math.atan2(b[0] - a[0], b[1] - a[1]) };
}
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const angLerp = (a, b, t) => { let d = b - a; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return a + d * t; };

export const THIEF_BRIEF_MS = 9000;
const WALK_SPEED = 4.3;

export class ThiefDirector {
  // getP(id) -> { x, y, z, a } (a = the net flags: 256 | vehicle index << 9 while driving, PAX while a passenger) or null;  onEnd(ok, why);  onEv(key, extra)
  constructor({ getP, onEnd, onEv }) { this.getP = getP; this.onEnd = onEnd || (() => {}); this.onEv = onEv || (() => {}); this.R = buildRoute(); this.W = walkPath(CHASE.walk); this.members = []; this.reset(); }
  reset() {
    const c = CHASE.thiefCar, w = CHASE.walk[0];
    this.stage = 'rob'; this.st = 0; this.T = 0; this.s = 0; this.v = 0; this.veh = -1; this.trunk = 0; this.lost = 0; this.dmin = 0; this.ended = false;
    this.car = { x: c.x, z: c.z, yaw: c.yaw, v: 0, drv: 0 };
    this.th = { x: w[0], z: w[1], yaw: Math.PI, sp: 0, pose: 'idle', mode: 'foot' };   // mode: foot | car | rear
    this.amb = { hp: 9, hpMax: 9, cover: -1, phase: 'run', t: 0, shots: 0, cycles: 0, spot: null, side: 1, ex: 0, wait: 0 }; this.ambT = 0; this.seed = 12345; this.base = { x: 0, z: 0 };
  }
  start(members) { this.members = [...members]; this.reset(); this.go('rob'); }
  go(stage) { this.stage = stage; this.st = 0; const k = { drive1: 'chase', waitA: 'stopA', trunk: 'trunk', drive2: 'drive2', ambush: 'ambush', down: 'down' }[stage]; if (k) this.onEv(k); }
  near() { let best = 1e9, bp = null, bid = -1; for (const id of this.members) { const P = this.getP(id); if (!P) continue; const d = hyp(P.x - this.car.x, P.z - this.car.z); if (d < best) { best = d; bp = P; bid = id; } } return { d: best, P: bp, id: bid }; }
  end(ok, why) { if (this.ended) return; this.ended = true; this.stage = ok ? 'done' : 'fail'; this.onEnd(ok, why); }
  // placement helpers (car space: f = forward, r = the driver's side)
  carPt(f, r) { const c = this.car, sy = Math.sin(c.yaw), cy = Math.cos(c.yaw); return { x: c.x + sy * f - cy * r, z: c.z + cy * f + sy * r }; }
  tick(dt) {
    if (this.ended) return;
    this.T += dt; this.st += dt;
    const nr = this.near(); this.dmin = nr.d;
    if (this.T > 720) return this.end(false, 'time');
    const c = this.car, th = this.th, R = this.R;
    switch (this.stage) {
      case 'rob': {   // run out of the bank, round the back of the car to the driver's door, get in
        const d = this.st * WALK_SPEED, p = onPath(this.W, d);
        if (d < this.W.len) { th.x = p.x; th.z = p.z; th.yaw = p.yaw; th.sp = WALK_SPEED; th.pose = 'run'; th.mode = 'foot'; }
        else { th.sp = 0; const e = this.carPt(0, 0.4); th.x = e.x; th.z = e.z; th.mode = 'car'; th.pose = 'sit'; c.drv = 1; if (this.st > this.W.len / WALK_SPEED + 0.9) this.go('drive1'); }
        break;
      }
      case 'drive1': case 'drive2': {
        const endS = this.stage === 'drive1' ? R.sA : R.total;
        const k = this.dmin < 30 ? 1 : this.dmin < 80 ? lerp(1, 0.62, (this.dmin - 30) / 50) : this.dmin < 150 ? lerp(0.62, 0.34, (this.dmin - 80) / 70) : 0.34;
        const cruise = 25 * k * Math.min(1, 0.35 + this.st / 6), here = routeAt(R, this.s);
        const rem = endS - this.s, stopV = Math.sqrt(2 * 7 * Math.max(0, rem)) + 0.6;
        const target = Math.min(cruise, here.vlim, stopV);
        this.v += clamp(target - this.v, -12 * dt, 7 * dt); this.v = Math.max(0, this.v); this.s = Math.min(endS, this.s + this.v * dt);
        const q = routeAt(R, this.s); c.x = q.x; c.z = q.z; c.yaw = q.yaw; c.v = this.v; c.drv = 1; th.mode = 'car'; th.pose = 'sit'; th.sp = 0;
        // lose him (nobody anywhere near for a long time) and the mission fails
        if (this.dmin > 230) { this.lost += dt; if (this.lost > 12) return this.end(false, 'lost'); } else this.lost = Math.max(0, this.lost - dt * 2);
        if (rem < 0.35 && this.v < 3) { this.s = endS; this.v = 0; c.v = 0; if (this.stage === 'drive1') this.go('waitA'); else this.go('summit'); }
        break;
      }
      case 'waitA': c.v = 0; if (this.dmin < 50 || this.st > 25) this.go('trunk'); break;
      case 'trunk': {   // exit, walk to the boot, open it, gun, slam, run back, get in
        const t = this.st, D = this.carPt(0, 2.0), C = this.carPt(-3.1, 1.7), T = this.carPt(-3.15, 0);
        c.v = 0;
        if (t < 0.9) { c.drv = 0; th.mode = 'foot'; th.x = D.x; th.z = D.z; th.sp = 0; th.pose = 'idle'; th.yaw = c.yaw + Math.PI / 2; }
        else if (t < 2.9) { const u = (t - 0.9) / 2.0, a = u < 0.5 ? [D, C, u * 2] : [C, T, u * 2 - 1]; th.x = lerp(a[0].x, a[1].x, a[2]); th.z = lerp(a[0].z, a[1].z, a[2]); th.sp = 2.0; th.pose = 'walk'; th.yaw = Math.atan2(a[1].x - a[0].x, a[1].z - a[0].z); }
        else if (t < 3.9) { th.x = T.x; th.z = T.z; th.sp = 0; th.pose = 'idle'; th.yaw = c.yaw; this.trunk = clamp(t - 2.9, 0, 1); }
        else if (t < 6.4) { this.trunk = 1; th.sp = 0; th.pose = 'aim'; const P = nr.P; th.yaw = angLerp(th.yaw, P ? Math.atan2(P.x - th.x, P.z - th.z) : c.yaw + Math.PI, 0.25); if (t < 3.95) this.onEv('gun'); }
        else if (t < 6.8) { th.pose = 'idle'; th.yaw = c.yaw; this.trunk = clamp(1 - (t - 6.4) / 0.35, 0, 1); }
        else if (t < 8.4) { const u = (t - 6.8) / 1.6, a = u < 0.5 ? [T, C, u * 2] : [C, D, u * 2 - 1]; th.x = lerp(a[0].x, a[1].x, a[2]); th.z = lerp(a[0].z, a[1].z, a[2]); th.sp = 4.3; th.pose = 'run'; th.yaw = Math.atan2(a[1].x - a[0].x, a[1].z - a[0].z); }
        else { const e = this.carPt(0, 0.4); th.x = e.x; th.z = e.z; th.sp = 0; th.mode = 'car'; th.pose = 'sit'; c.drv = 1; this.trunk = 0; if (t > 8.9) { this.v = 0; this.go('drive2'); } }
        break;
      }
      case 'summit': {   // arrived: step out and run for cover
        c.v = 0; const t = this.st, D = this.carPt(0, 2.0);
        if (t < 0.9) { c.drv = 0; th.mode = 'foot'; th.x = D.x; th.z = D.z; th.sp = 0; th.pose = 'idle'; th.yaw = c.yaw + Math.PI / 2; }
        else { th.mode = 'foot'; this.amb = { hp: 9, hpMax: 9, cover: -1, phase: 'run', t: 0, shots: 0, cycles: 0, spot: null, side: 1, ex: 0, wait: 0 }; this.go('ambush'); }
        break;
      }
      case 'ambush': this.ambush(dt); break;
      case 'down': {   // shot dead: lies there a moment, then the mission is passed
        th.sp = 0; th.pose = 'down'; this.amb.ex = 0; if (this.st > 2.6) { this.onEv('done'); return this.end(true); }
        break;
      }
      default: break;
    }
  }
  rnd() { this.seed = (this.seed * 1664525 + 1013904223) >>> 0; return this.seed / 4294967296; }
  // the person on foot (or in a car) nearest to the thief
  nearestTo(x, z) { let best = 1e9, bp = null, bid = -1; for (const id of this.members) { const P = this.getP(id); if (!P) continue; const d = hyp(P.x - x, P.z - z); if (d < best) { best = d; bp = P; bid = id; } } return { d: best, P: bp, id: bid }; }
  // the spot BEHIND cover k as seen from the player (the cover stands between them)
  coverSpot(k, P) {
    const cv = SUMMIT.covers[k], ax = P ? cv.x - P.x : cv.x - SUMMIT.x, az = P ? cv.z - P.z : cv.z - SUMMIT.z, l = hyp(ax, az) || 1, o = cv.r + 0.45;
    return { x: cv.x + ax / l * o, z: cv.z + az / l * o };
  }
  // pick a new cover: not the one he is at, not next to a player, preferably far from the nearest one
  pickCover(P) {
    let bk = 0, bs = -1e9; SUMMIT.covers.forEach((cv, k) => { if (k === this.amb.cover) return; const d = P ? hyp(cv.x - P.x, cv.z - P.z) : 20; const sc = Math.min(d, 38) + this.rnd() * 14 - (d < 9 ? 60 : 0); if (sc > bs) { bs = sc; bk = k; } });
    return bk;
  }
  // THE AMBUSH: he hides behind a tree or a boulder, pops out, fires at the nearest player and ducks again; he changes cover now and then (at once if somebody gets close).
  // He can only be hurt while he is out in the open (ex > 0.5).  Players report their hits with hit().
  ambush(dt) {
    const th = this.th, A = this.amb; A.t += dt; this.ambT = (this.ambT || 0) + dt;
    if (this.ambT > 300) return this.end(false, 'escaped');
    let np = this.nearestTo(th.x, th.z); const P = np.P;
    if (A.cover < 0) { A.cover = this.pickCover(P); A.spot = this.coverSpot(A.cover, P); A.phase = 'run'; A.t = 0; }
    const tgtYaw = P ? Math.atan2(P.x - th.x, P.z - th.z) : th.yaw;
    const moveTo = (tx, tz, sp) => { const dx = tx - th.x, dz = tz - th.z, d = hyp(dx, dz); if (d < 0.25) return true; const st = Math.min(d, sp * dt); th.x += dx / d * st; th.z += dz / d * st; th.yaw = angLerp(th.yaw, Math.atan2(dx, dz), 0.3); th.sp = sp; th.pose = 'run'; return false; };
    switch (A.phase) {
      case 'run': {   // sprint to the cover (the spot is recomputed so it stays on the far side from the player)
        A.spot = this.coverSpot(A.cover, P); A.ex = Math.max(0, A.ex - dt * 4);
        if (moveTo(A.spot.x, A.spot.z, 6.2)) { A.phase = 'hide'; A.t = 0; A.wait = 1.1 + this.rnd() * 1.4; th.sp = 0; }
        break;
      }
      case 'hide': {   // crouched behind it
        th.sp = 0; th.pose = 'duck'; th.yaw = angLerp(th.yaw, tgtYaw, 0.2); A.ex = Math.max(0, A.ex - dt * 4); A.spot = this.coverSpot(A.cover, P); th.x += (A.spot.x - th.x) * Math.min(1, dt * 4); th.z += (A.spot.z - th.z) * Math.min(1, dt * 4);
        if (np.d < 7 && A.t > 0.5) { A.cover = this.pickCover(P); A.phase = 'run'; A.t = 0; break; }   // somebody is on top of him: run
        if (A.t > A.wait) { A.phase = 'pop'; A.t = 0; A.shots = 0; A.side = this.rnd() < 0.5 ? -1 : 1; this.base = { x: th.x, z: th.z }; }
        break;
      }
      case 'pop': {   // steps out sideways, raises the gun
        th.sp = 0; th.pose = 'aim'; th.yaw = angLerp(th.yaw, tgtYaw, 0.35); A.ex = Math.min(1, A.ex + dt * 3.4);
        if (P) { const lx = Math.cos(tgtYaw), lz = -Math.sin(tgtYaw); th.x = this.base.x + lx * A.side * 1.0 * A.ex; th.z = this.base.z + lz * A.side * 1.0 * A.ex; }
        if (A.ex >= 1) { A.phase = 'shoot'; A.t = 0; }
        break;
      }
      case 'shoot': {   // three quick shots, 0.5 s apart
        th.sp = 0; th.pose = 'aim'; th.yaw = angLerp(th.yaw, tgtYaw, 0.4); A.ex = 1;
        if (A.t > 0.35 + A.shots * 0.5 && A.shots < 3 && P) {
          A.shots++; const d = np.d, drv = !!(P.a & 256), pHit = (d < 14 ? 0.55 : d < 32 ? 0.4 : d < 55 ? 0.25 : 0.1) * (drv ? 0.7 : 1);
          this.onEv('shot', { i: np.id, h: this.rnd() < pHit ? 1 : 0, x: +th.x.toFixed(1), z: +th.z.toFixed(1) });
        }
        if (A.shots >= 3 && A.t > 0.35 + 3 * 0.5 + 0.1) { A.cycles++; A.phase = 'duck'; A.t = 0; }
        break;
      }
      case 'duck': {   // back behind the cover (after every second volley he moves on)
        th.sp = 0; th.pose = 'duck'; A.ex = Math.max(0, A.ex - dt * 5); th.x += (this.base.x - th.x) * Math.min(1, dt * 8); th.z += (this.base.z - th.z) * Math.min(1, dt * 8);
        if (A.ex <= 0) { if (A.cycles % 2 === 0 || np.d < 14) { A.cover = this.pickCover(P); A.phase = 'run'; } else { A.phase = 'hide'; A.wait = 1.2 + this.rnd() * 1.6; } A.t = 0; }
        break;
      }
      default: break;
    }
  }
  // a player's bullet reached him: only counts while he is out in the open; hp 9 = eight pistol hits or six from an AK-47
  hit(id, dmg) {
    if (this.ended || this.stage !== 'ambush' || !this.amb || this.amb.ex < 0.5 || !this.members.includes(id)) return false;
    this.amb.hp -= Math.max(0.2, Math.min(2, +dmg || 1));
    if (this.amb.hp <= 0) { this.go('down'); this.th.pose = 'down'; this.th.sp = 0; return true; }
    this.onEv('hurt', { h: Math.max(0, Math.round(this.amb.hp / this.amb.hpMax * 100)) });
    if (this.amb.phase === 'pop') { this.amb.phase = 'shoot'; this.amb.t = 0; this.amb.ex = 1; }   // hit while stepping out: he fires back at once
    return true;
  }
  // what everybody needs to draw the scene
  snap() {
    const c = this.car, th = this.th, f = (v) => +v.toFixed(2);
    return { st: this.stage, c: [f(c.x), f(c.z), +c.yaw.toFixed(3), f(c.v), c.drv], p: [f(th.x), f(th.z), +th.yaw.toFixed(3), f(th.sp), th.pose, th.mode], tr: +this.trunk.toFixed(2), veh: this.veh, d: Math.round(this.dmin), ex: +this.amb.ex.toFixed(2), hp: Math.max(0, Math.round(this.amb.hp / this.amb.hpMax * 100)) };
  }
}
export { BANK, POLICE, CHASE, SUMMIT };
