// MISSION 2 - THIEF CHASE: the road the thief takes and the "director" that plays the whole story. No DOM / three.js: it runs on the server
// (multiplayer) or inside the browser (single player), and every player only DRAWS what it broadcasts.
//
//  rob      the thief runs out of the bank with the loot, round the back of his car, and gets in            (the cut-scene)
//  drive1   chase through the city to the west avenue (he slows down if you fall behind, speeds up when you are close)
//  waitA    he stops at the roadside and waits until somebody is near
//  trunk    gets out, opens the boot, pulls out a gun, slams the boot, runs back to the car
//  drive2   the chase goes on: out of the city, up the spiral road of Mount Haris
//  flee     at the summit he jumps out and runs round the plaza: catch him ON FOOT
//  cuffed   arrested, hands up: drive a police car next to him and he gets in the back
//  deliver  take him to the POLICE STATION
import { GT, mtRoad, gtaH, BANK, POLICE, CHASE } from './gta.js';

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
  let ia = 0, bd = 1e9; for (let i = 0; i < n; i++) { const d = hyp(pts[i].x + 123.25, pts[i].z + 40); if (d < bd) { bd = d; ia = i; } }
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
  // getP(id) -> { x, y, z, a } (a = the net flags: 256 | vehicle index << 9 while driving, PAX while a passenger) or null;  onEnd(ok, why);  onEv(key)
  constructor({ getP, onEnd, onEv }) { this.getP = getP; this.onEnd = onEnd || (() => {}); this.onEv = onEv || (() => {}); this.R = buildRoute(); this.W = walkPath(CHASE.walk); this.members = []; this.reset(); }
  reset() {
    const c = CHASE.thiefCar, w = CHASE.walk[0];
    this.stage = 'rob'; this.st = 0; this.T = 0; this.s = 0; this.v = 0; this.veh = -1; this.trunk = 0; this.lost = 0; this.dmin = 0; this.ended = false;
    this.car = { x: c.x, z: c.z, yaw: c.yaw, v: 0, drv: 0 };
    this.th = { x: w[0], z: w[1], yaw: Math.PI, sp: 0, pose: 'idle', mode: 'foot' };   // mode: foot | car | rear
    this.phi = 0; this.fleeT = 0; this.exit = null; this.cuffT = 0;
  }
  start(members) { this.members = [...members]; this.reset(); this.go('rob'); }
  go(stage) { this.stage = stage; this.st = 0; const k = { drive1: 'chase', waitA: 'stopA', trunk: 'trunk', drive2: 'drive2', flee: 'flee', cuffed: 'arrest', deliver: 'loaded' }[stage]; if (k) this.onEv(k); }
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
      case 'summit': {   // arrived: step out and run
        c.v = 0; const t = this.st, D = this.carPt(0, 2.0);
        const C = CHASE.flee;
        if (t < 0.9) { c.drv = 0; th.mode = 'foot'; th.x = D.x; th.z = D.z; th.sp = 0; th.pose = 'idle'; th.yaw = c.yaw + Math.PI / 2; this.phi = Math.atan2(D.z - C.z, D.x - C.x); }
        else { th.mode = 'foot'; this.go('flee'); this.fx = { x: th.x, z: th.z }; }
        break;
      }
      case 'flee': {
        this.fleeT += dt; const C = CHASE.flee, run = 5.7;
        this.phi += run / C.r * dt;
        const tx = C.x + C.r * Math.cos(this.phi), tz = C.z + C.r * Math.sin(this.phi), k = clamp(this.st / 1.2, 0, 1);
        const nx = lerp(this.fx.x, tx, k), nz = lerp(this.fx.z, tz, k);
        th.yaw = Math.atan2(nx - th.x, nz - th.z); th.x = nx; th.z = nz; th.sp = run; th.pose = 'run'; th.mode = 'foot';
        if (this.fleeT > 150) return this.end(false, 'escaped');
        for (const id of this.members) { const P = this.getP(id); if (!P || (P.a & (256 | PAX))) continue; if (hyp(P.x - th.x, P.z - th.z) < 2.6 && Math.abs(P.y - gtaH(th.x, th.z)) < 3) { this.arrester = id; this.go('cuffed'); th.sp = 0; th.pose = 'scared'; break; }
        }
        break;
      }
      case 'cuffed': {
        th.sp = 0; th.pose = 'scared'; this.cuffT += dt;
        { const P = this.getP(this.arrester); if (P) th.yaw = angLerp(th.yaw, Math.atan2(P.x - th.x, P.z - th.z), 0.2); }
        for (const id of this.members) {   // a police car (driver in it) pulls up next to him: he gets in the back
          const P = this.getP(id); if (!P || !(P.a & 256)) continue; const idx = carIdxOf(P.a);
          if (CHASE.copIdx.includes(idx) && hyp(P.x - th.x, P.z - th.z) < 11) { this.veh = idx; th.mode = 'rear'; th.pose = 'sit'; th.sp = 0; this.go('deliver'); break; }
        }
        break;
      }
      case 'deliver': {   // the car he sits in must reach the police station
        const Z = POLICE.zone;
        for (const id of this.members) { const P = this.getP(id); if (!P || !(P.a & 256) || carIdxOf(P.a) !== this.veh) continue; if (hyp(P.x - Z.x, P.z - Z.z) < Z.r) { this.onEv('done'); return this.end(true); } }
        break;
      }
      default: break;
    }
  }
  // what everybody needs to draw the scene
  snap() {
    const c = this.car, th = this.th, f = (v) => +v.toFixed(2);
    return { st: this.stage, c: [f(c.x), f(c.z), +c.yaw.toFixed(3), f(c.v), c.drv], p: [f(th.x), f(th.z), +th.yaw.toFixed(3), f(th.sp), th.pose, th.mode], tr: +this.trunk.toFixed(2), veh: this.veh, d: Math.round(this.dmin) };
  }
}
export { BANK, POLICE, CHASE };
