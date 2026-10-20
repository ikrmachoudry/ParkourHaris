// MISSION 3 - SNIPE THE TRUCK: the director that plays the whole story (no DOM / three.js: it runs on the server in multiplayer and in the browser in single player;
// every player only DRAWS what it broadcasts).
//
//  A thief robbed the CITY BANK and flees in his car. The petrol TANKER chases him down the new tunnel road. When the thief is about to enter the tunnel the tanker's
//  driver has to PULL OUT at the red line and jump off: the tanker rolls on at speed. The SNIPER, waiting on the hill, shoots the tank just before it enters the tunnel
//  (a huge fire seals the road behind the thief). The BLOCKERS drive round the ridge and park across the far mouth of the tunnel so the thief cannot get out.
//
//  roles by number of players:  1 = sniper (the tanker is driven by the AI)  2 = tanker driver + sniper  3 = + blocker  4 = + a second blocker.
//  Empty blocker places are filled by AI police cars.
//  stages:  rob (he runs out of the bank into his car) -> chase -> arrest (police arrive, he is taken away) -> done.   truck modes: 0 driven by a player, 1 driven by the AI,
//  2 rolling on its own, 3 exploding, 4 burnt wreck, 5 stopped in the tunnel
import { GT, SNIPE, BANK } from './gta.js';

const hyp = Math.hypot, STEP = 1.5;
export const TRUCK_IDX = 29;                       // the cargo truck (gtaCars index) that becomes the tanker
export const SNIPE_BRIEF_MS = 3500;
export const LANE_S = SNIPE.lane, LANE_E = 56.75;  // south-bound lane of the new road, east-bound lane of the z = 60 avenue
export const START = { thief: { x: 36, z: LANE_E, yaw: Math.PI / 2 }, truck: { x: 20, z: LANE_E, yaw: Math.PI / 2 }, cars: [{ x: 6, z: LANE_E }, { x: -3, z: LANE_E }, { x: -12, z: LANE_E }], carYaw: Math.PI / 2 };
export const WALK = [[30, 85.6], [30, 71], [34, 64], [36.5, 60.3]];   // out of the bank door, to the driver's door
export const ZONES = [{ x: 56.8, z: 459, r: 5.2 }, { x: 63.3, z: 459, r: 5.2 }];   // where the blockers park (two lanes)
const THIEF_STOP_Z = 449;                           // he brakes to a halt here (just inside the far mouth)
const BAIL_MIN = 286, LATE_Z = 392;
const CRUISE = 12.5, GATE_BEFORE = 38, WAIT_MAX = 170, WALK_V = 8;   // thief's top speed (m/s, 45 km/h); he waits GATE_BEFORE m short of the red line until everybody is in position (at most WAIT_MAX s)
const ARREST_LEN = 17;
const WRECK_Z = 436;                               // a shot tanker keeps rolling, burning, and comes to rest here, inside the tunnel

// role of the player with this seat in a mission of n players
export function snipeRole(seat, n) { if (n <= 1) return 'sniper'; return seat === 0 ? 'truck' : seat === 1 ? 'sniper' : 'blocker'; }
export const blockerNo = (seat) => seat - 2;       // 0 or 1

// ---- the thief's road: east along the avenue, a rounded turn onto the new road, south through the tunnel to its end
let _R = null;
export function snipeRoute() {
  if (_R) return _R;
  const c = [[START.truck.x, LANE_E], [LANE_S, LANE_E], [LANE_S, SNIPE.road[1][1] - 2]], raw = [c[0]], V = c[1], a = c[0], b = c[2], rad = 14;
  const la = hyp(V[0] - a[0], V[1] - a[1]), lb = hyp(b[0] - V[0], b[1] - V[1]), d = Math.min(rad, la / 2, lb / 2);
  const P0 = [V[0] - (V[0] - a[0]) / la * d, V[1] - (V[1] - a[1]) / la * d], P2 = [V[0] + (b[0] - V[0]) / lb * d, V[1] + (b[1] - V[1]) / lb * d];
  for (let k = 0; k <= 12; k++) { const t = k / 12, u = 1 - t; raw.push([u * u * P0[0] + 2 * u * t * V[0] + t * t * P2[0], u * u * P0[1] + 2 * u * t * V[1] + t * t * P2[1]]); }
  raw.push(c[2]);
  const cum = [0]; for (let i = 1; i < raw.length; i++) cum.push(cum[i - 1] + hyp(raw[i][0] - raw[i - 1][0], raw[i][1] - raw[i - 1][1]));
  const tot = cum[cum.length - 1], pts = []; let seg = 1;
  for (let sd = 0; sd <= tot; sd += STEP) { while (seg < raw.length - 1 && cum[seg] < sd) seg++; const p = raw[seg - 1], q = raw[seg], L = Math.max(1e-9, cum[seg] - cum[seg - 1]), t = Math.min(1, Math.max(0, (sd - cum[seg - 1]) / L)); pts.push({ x: p[0] + (q[0] - p[0]) * t, z: p[1] + (q[1] - p[1]) * t, s: sd }); }
  const n = pts.length, yaw = new Float32Array(n), vlim = new Float32Array(n);
  for (let i = 0; i < n; i++) { const p = pts[Math.max(0, i - 1)], q = pts[Math.min(n - 1, i + 1)]; yaw[i] = Math.atan2(q.x - p.x, q.z - p.z); }
  for (let i = 0; i < n; i++) { const j = Math.min(n - 1, i + 3), k = Math.max(0, i - 3); let dy = yaw[j] - yaw[k]; while (dy > Math.PI) dy -= 2 * Math.PI; while (dy < -Math.PI) dy += 2 * Math.PI; const kappa = Math.abs(dy) / Math.max(1, pts[j].s - pts[k].s); vlim[i] = Math.max(7, Math.min(40, Math.sqrt(5 / Math.max(kappa, 1e-4)))); }
  for (let i = n - 2; i >= 0; i--) vlim[i] = Math.min(vlim[i], Math.sqrt(vlim[i + 1] * vlim[i + 1] + 2 * 8 * STEP));
  const sAt = (zz) => { for (let i = 0; i < n; i++) if (pts[i].x > LANE_S - 1 && pts[i].z >= zz) return pts[i].s; return tot; };
  _R = { pts, yaw, vlim, n, total: tot, sBail: sAt(SNIPE.bail.z), sTun0: sAt(SNIPE.tun.z0), sTun1: sAt(SNIPE.tun.z1), sStop: sAt(THIEF_STOP_Z), sCheck: sAt(THIEF_STOP_Z - 9), sGate: sAt(SNIPE.bail.z - GATE_BEFORE) };
  return _R;
}
export function snipeAt(R, s) {
  s = Math.max(0, Math.min(R.total, s)); const i = Math.min(R.n - 2, Math.floor(s / STEP)), a = R.pts[i], b = R.pts[i + 1], t = (s - a.s) / Math.max(1e-6, b.s - a.s);
  let dy = R.yaw[i + 1] - R.yaw[i]; while (dy > Math.PI) dy -= 2 * Math.PI; while (dy < -Math.PI) dy += 2 * Math.PI;
  return { x: a.x + (b.x - a.x) * t, z: a.z + (b.z - a.z) * t, yaw: R.yaw[i] + dy * t, vlim: Math.min(R.vlim[i], R.vlim[i + 1]) };
}
// the lines drawn on the map for each role: [{ pts, color }] plus markers [{ x, z, r, glyph }]
export function snipePaths(role, seat) {
  const R = snipeRoute(), tr = []; for (let i = 0; i < R.n; i += 8) if (R.pts[i].s <= R.sTun1 + 4) tr.push([R.pts[i].x, R.pts[i].z]);
  const H = SNIPE.hill, B = SNIPE.bypass, E = LANE_E;
  const toBypass = [[10, E], [123, E], [123, 240], [B[1][0], B[1][1]]];
  if (role === 'truck') return { lines: [{ pts: tr, color: '#ffd23f' }], marks: [{ x: LANE_S, z: SNIPE.bail.z, r: 8, color: '#ff3b30', glyph: '✖' }] };
  if (role === 'sniper') return { lines: [{ pts: [...toBypass, [H[0][0], H[0][1]], ...H.slice(1).map((p) => [p[0], p[1]])], color: '#ffd23f' }], marks: [{ x: SNIPE.pad.x, z: SNIPE.pad.z, r: SNIPE.pad.r, color: '#ffd23f', glyph: '◎' }] };
  const z = ZONES[Math.max(0, Math.min(1, blockerNo(seat)))];
  return { lines: [{ pts: [...toBypass, [B[2][0], B[2][1]], [B[3][0] + 14, B[3][1]], [z.x, z.z]], color: '#ffd23f' }], marks: [{ x: z.x, z: z.z, r: z.r, color: '#ffd23f', glyph: '◎' }] };
}

const lerp = (a, b, t) => a + (b - a) * t, clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lastOf = (a) => a[a.length - 1];

export class SnipeDirector {
  // getP(id) -> { x, y, z, a } or null;  onEnd(ok, why);  onEv(key, extra)
  constructor({ getP, onEnd, onEv }) { this.getP = getP; this.onEnd = onEnd || (() => {}); this.onEv = onEv || (() => {}); this.R = snipeRoute(); this.members = []; this.reset(); }
  reset() {
    const t = START.thief, k = START.truck;
    this.stage = 'rob'; this.T = 0; this.st = 0; this.ended = false; this.seed = 4242; this.fireT = 4;
    this.car = { x: t.x, z: t.z, yaw: t.yaw, v: 0, drv: 0 }; this.s = t.x - k.x; this.v = 0; this.off = 0; this.th = { x: WALK[0][0], z: WALK[0][1], yaw: Math.PI, sp: 0, pose: 'idle', mode: 'foot' };
    this.tk = { x: k.x, z: k.z, yaw: k.yaw, v: 0, mode: 1, vm: 0, lz: k.z, acc: 0, sTk: 0, ai: true, gone: -3, boomT: 0 };
    this.stopped = false; this.truckDown = false; this.pol = []; this.ar = 0; this.dmin = 0; this.said = {}; this.blockedAt = 0; this.rdy = false;
    this.pur = [{ s: -46, v: 0, x: -26, z: LANE_E, yaw: Math.PI / 2 }, { s: -59, v: 0, x: -39, z: LANE_E, yaw: Math.PI / 2 }];   // the police cars that chase him from the bank, always staying BEHIND the tanker
  }
  start(members) {
    this.members = [...members]; this.reset(); const n = this.members.length;
    this.truckId = n >= 2 ? this.members[0] : -1; this.sniperId = n >= 2 ? this.members[1] : this.members[0]; this.blockers = this.members.slice(2, 4);
    this.tk.ai = this.truckId < 0; this.tk.mode = this.tk.ai ? 1 : 0;
  }
  rnd() { this.seed = (this.seed * 1664525 + 1013904223) >>> 0; return this.seed / 4294967296; }
  say(k, extra) { if (this.said[k]) return; this.said[k] = 1; this.onEv(k, extra); }
  end(ok, why) { if (this.ended) return; this.ended = true; this.stage = ok ? 'done' : 'fail'; this.onEnd(ok, why); }
  // the truck driver's position (null when he is not sitting in the truck)
  driverP() { if (this.truckId < 0) return null; const P = this.getP(this.truckId); return P && (P.a & 256) && (((P.a >> 9) & 15) | (((P.a >> 24) & 1) << 4)) === TRUCK_IDX ? P : null; }
  nearP() { let best = 1e9, bp = null, bid = -1; for (const id of this.members) { const P = this.getP(id); if (!P) continue; const d = hyp(P.x - this.car.x, P.z - this.car.z); if (d < best) { best = d; bp = P; bid = id; } } return { d: best, P: bp, id: bid }; }
  // everybody in position? (the sniper near the pad, each blocker well on his way or in his place) - the thief waits for them at the gate, so nobody is left behind
  ready() {
    if (this.rdy || this.T > WAIT_MAX) return true;
    const sp = this.getP(this.sniperId), pd = SNIPE.pad;
    if (sp && hyp(sp.x - pd.x, sp.z - pd.z) > pd.r + 16) return false;
    for (let i = 0; i < this.blockers.length; i++) { const P = this.getP(this.blockers[i]); if (P && !this.zoneFilled(i) && !(P.z > 282 && P.x > 112)) return false; }
    this.rdy = true; return true;
  }
  // is this blocker standing in his place?
  zoneFilled(i) { const id = this.blockers[i]; if (id === undefined) return true; const P = this.getP(id), Z = ZONES[i]; return !!P && hyp(P.x - Z.x, P.z - Z.z) < Z.r + 2.5; }
  blockade() { return ZONES.every((z, i) => this.zoneFilled(i)); }
  tick(dt) {
    if (this.ended) return;
    this.T += dt; this.st += dt;
    if (this.T > 320) return this.end(false, 'time');
    const c = this.car, th = this.th, R = this.R, tk = this.tk;
    const nr = this.nearP(); this.dmin = nr.d;
    // ---- the thief
    if (this.stage === 'rob') {
      const t0 = 0.8, d = Math.max(0, this.T - t0) * WALK_V;
      let acc = 0, pos = null; for (let i = 1; i < WALK.length; i++) { const L = hyp(WALK[i][0] - WALK[i - 1][0], WALK[i][1] - WALK[i - 1][1]); if (d <= acc + L) { const u = (d - acc) / L; pos = { x: lerp(WALK[i - 1][0], WALK[i][0], u), z: lerp(WALK[i - 1][1], WALK[i][1], u), yaw: Math.atan2(WALK[i][0] - WALK[i - 1][0], WALK[i][1] - WALK[i - 1][1]) }; break; } acc += L; }
      if (pos) { th.x = pos.x; th.z = pos.z; th.yaw = pos.yaw; th.sp = this.T > t0 ? 6 : 0; th.pose = this.T > t0 ? 'run' : 'idle'; th.mode = 'foot'; }
      else { th.sp = 0; th.mode = 'car'; th.pose = 'sit'; c.drv = 1; const tt = this.T - t0 - acc / WALK_V; if (tt > 0.9) { this.stage = 'chase'; this.st = 0; this.say('chase'); } }
    }
    if (this.stage === 'chase') { this.driveThief(dt, nr); this.drivePursuit(dt); }
    // ---- the tanker
    this.driveTruck(dt);
    if (this.ended) return;
    // ---- the end of the chase
    if (this.stage === 'chase' && this.stopped && this.truckDown) { this.stage = 'arrest'; this.st = 0; this.ar = 0; this.say('police'); this.onEv('arrest'); }
    if (this.stage === 'arrest') this.arrest(dt);
  }
  // where is the route position s (before the start it runs straight back along the avenue)?
  routeXY(s) { if (s < 0) return { x: START.truck.x + s, z: LANE_E, yaw: Math.PI / 2 }; return snipeAt(this.R, s); }
  sOf(x, z) { const R = this.R; let bi = 0, bd = 1e9; for (let i = 0; i < R.n; i += 2) { const d = (R.pts[i].x - x) ** 2 + (R.pts[i].z - z) ** 2; if (d < bd) { bd = d; bi = i; } } return R.pts[bi].s; }
  // the police follow the tanker at a respectful distance (never in front of anybody) and pull up on the shoulder at the red line
  drivePursuit(dt) {
    const tk = this.tk, R = this.R; if (!this.pur) return;
    const sTk = tk.mode === 0 ? (this.driverP() ? this.sOf(tk.x, tk.z) : tk.sTk) : tk.mode === 1 ? tk.sTk : 1e9;
    this.pur.forEach((p, i) => {
      const want = Math.min(this.s - 56 - i * 13, sTk - 16 - i * 13, R.sBail - 20 - i * 12), err = want - p.s, tv = clamp(this.v + 0.9 * err, 0, 24);
      p.v += clamp(tv - p.v, -10 * dt, 6 * dt); p.v = Math.max(0, p.v); p.s += p.v * dt;
      const q = this.routeXY(p.s); p.x = q.x + (i ? 1.8 : 0) * (p.s > 20 ? 1 : 0); p.z = q.z; p.yaw = q.yaw;
    });
  }
  driveThief(dt, nr) {
    const c = this.car, th = this.th, R = this.R, tk = this.tk;
    th.mode = 'car'; th.pose = 'sit'; th.sp = 0; c.drv = 1;
    // how close is the tanker behind him?
    const gap = tk.mode === 0 || tk.mode === 1 ? hyp(tk.x - c.x, tk.z - c.z) : 999;
    const k = tk.mode === 2 || tk.mode === 3 || tk.mode === 4 ? 0.85 : gap < 22 ? 1.3 : gap < 60 ? 1 : gap < 110 ? 0.72 : gap < 170 ? 0.45 : 0.3;
    let cruise = CRUISE * k * Math.min(1, 0.4 + this.st / 4), here = snipeAt(R, this.s);
    if (this.s >= R.sCheck && !this.decided) { this.decided = true; this.trapped = this.blockade(); if (this.trapped) this.say('trap'); else this.say('slip'); }
    const stopS = this.decided && this.trapped ? R.sStop : R.total, rem = stopS - this.s;
    const wait = !this.ready(), lim = wait ? Math.min(stopS, R.sGate) : stopS, stopV = Math.sqrt(2 * 7 * Math.max(0, lim - this.s)) + 0.5;
    if (wait && this.s > R.sGate - 12 && !this.said.hold) this.say('hold');
    const target = Math.min(cruise, here.vlim, this.decided && !this.trapped ? 19 : 99, stopV);
    this.v += clamp(target - this.v, -12 * dt, 6 * dt); this.v = Math.max(0, this.v); this.s = Math.min(wait ? Math.min(stopS, R.sGate) : stopS, this.s + this.v * dt);
    const q = snipeAt(R, this.s);
    // he swerves in front of the tanker to block it (never in the tunnel mouth, where he drives straight)
    let want = 0; const inTun = this.s > R.sTun0 - 8;
    if (!inTun && this.s > 22 && (tk.mode === 0 || tk.mode === 1) && gap < 70 && q.x > LANE_S - 6) { const lat = tk.mode === 0 ? clamp(tk.x - LANE_S, -4.2, 4.2) : Math.sin(this.T * 0.9) * 3.6; want = lat; }
    this.off += clamp(want - this.off, -5 * dt, 5 * dt);
    const ox = this.s > 30 ? this.off : 0, cy = Math.cos(q.yaw), sy = Math.sin(q.yaw);
    c.x = q.x + cy * ox; c.z = q.z - sy * ox; c.yaw = q.yaw + clamp(-ox * 0.01, -0.1, 0.1); c.v = this.v;
    // he leans out and shoots at the tanker's driver
    this.fireT -= dt;
    const P = this.driverP();
    if (this.fireT <= 0 && this.st > 3 && P) {
      const d = hyp(P.x - c.x, P.z - c.z); this.fireT = 1.1 + this.rnd() * 1.2;
      if (d > 4 && d < 60) { const pHit = (d < 14 ? 0.32 : d < 30 ? 0.2 : 0.08), o = { x: c.x + Math.sin(c.yaw) * 0.4 - Math.cos(c.yaw) * 0.6, z: c.z + Math.cos(c.yaw) * 0.4 + Math.sin(c.yaw) * 0.6 };
        this.onEv('shot', { i: this.truckId, h: this.rnd() < pHit ? 1 : 0, x: +o.x.toFixed(1), z: +o.z.toFixed(1) }); }
    }
    if (rem < 0.35 && this.v < 3 && this.decided && this.trapped) { this.v = 0; c.v = 0; this.stopped = true; this.say('stopped'); }
    if (this.decided && !this.trapped && this.s >= R.total - 1) return this.end(false, 'escaped');
    void nr;
  }
  driveTruck(dt) {
    const tk = this.tk, R = this.R;
    if (tk.mode === 0) {   // a player drives it: we only watch (and notice when he jumps out)
      const P = this.driverP();
      if (P) { tk.acc += dt; if (P.z !== tk.lz) { tk.vm += ((P.z - tk.lz) / Math.max(tk.acc, 0.03) - tk.vm) * 0.5; tk.acc = 0; } tk.x = P.x; tk.z = P.z; tk.lz = P.z; tk.gone = 0; tk.yaw = 0;
        if (tk.z > LATE_Z && !this.stopped) return this.end(false, 'late'); }
      else { tk.gone += dt; if (tk.gone > (tk.z >= BAIL_MIN ? 0.5 : 2.5) && this.stage === 'chase') { if (tk.z < BAIL_MIN || tk.z > 1000) return this.end(false, 'early'); this.bail(false); } }
      return;
    }
    if (tk.mode === 1) {   // the AI drives it: stays behind the thief
      const gap = hyp(tk.x - this.car.x, tk.z - this.car.z);
      if (this.stage === 'rob') { tk.v = 0; return; }
      const th = this.car, ahead = th.v + 0.45 * (gap - 32);
      tk.v += clamp(clamp(ahead, 0, 18) - tk.v, -9 * dt, 5 * dt); tk.v = Math.max(0, tk.v);
      const along = tk.sTk = Math.min(R.total, tk.sTk + tk.v * dt), q = snipeAt(R, along); tk.x = q.x; tk.z = q.z; tk.yaw = q.yaw;
      if (tk.z >= SNIPE.bail.z && q.x > LANE_S - 1) { tk.v = clamp(tk.v, 9, 14); this.bail(true); }
      return;
    }
    if (tk.mode === 2) {   // rolling on: straight along the road, the lane holds it
      tk.v = Math.max(tk.v, Math.min(tk.v + 2 * dt, 11)); tk.x += clamp(LANE_S - tk.x, -3 * dt, 3 * dt); tk.z += tk.v * dt; tk.yaw = 0;
      if (tk.z >= SNIPE.tun.z0 - 2 && !this.truckDown) { tk.mode = 5; this.say('missed'); this.later = this.T + 3; }
      return;
    }
    if (tk.mode === 3 || tk.mode === 4) {   // shot: it burns but ROLLS ON into the tunnel and comes to rest inside
      tk.boomT += dt; if (tk.boomT > 2.4) tk.mode = 4;
      const rem = Math.max(0, WRECK_Z - tk.z), vb = Math.sqrt(2 * 3 * rem);
      tk.v = rem > 0.6 ? Math.max(Math.min(tk.v, vb), Math.min(tk.v, 5)) : Math.max(0, tk.v - 8 * dt); if (rem > 0.6 && tk.v < 1.5 && rem > 4) tk.v = 1.5;
      tk.x += clamp(LANE_S - tk.x, -3 * dt, 3 * dt); tk.z += tk.v * dt; tk.yaw = 0; return;
    }
    if (tk.mode === 5) { tk.v = Math.max(0, tk.v - 7 * dt); tk.z += tk.v * dt; if (this.later && this.T > this.later) return this.end(false, 'missed'); }
  }
  // the driver is out: the tanker rolls on without him
  bail(ai) {
    const tk = this.tk; tk.mode = 2; tk.v = clamp(Math.max(tk.vm, ai ? tk.v : 0), 9, 15); tk.bailZ = tk.z; this.say('bail', { ai: ai ? 1 : 0 });
  }
  // the sniper's bullet reached the tank: only counts after the driver is out and before the tanker is inside the tunnel
  hit(id, dmg) {
    void dmg;
    if (this.ended || id !== this.sniperId || (this.tk.mode !== 2 && this.tk.mode !== 5) || this.stage === 'rob') return false;
    this.tk.mode = 3; this.tk.boomT = 0; this.truckDown = true; this.onEv('boom', { x: +this.tk.x.toFixed(1), z: +this.tk.z.toFixed(1) }); return true;
  }
  // the police arrive, the thief is taken away
  arrest(dt) {
    this.ar += dt; const t = this.ar, th = this.th, c = this.car, A = this.pol;
    if (!A.length) { for (let i = 0; i < 2; i++) A.push({ x: 150, z: 330 - i * 18, yaw: 0, v: 0, s: 0 }); }
    // police: down the bypass, along the far road, park on the shoulder east of the blockade
    const path = [[150, 330], [150, 462], [90, 465], [72, 458]];
    const PL = 216; A.forEach((p, i) => { if (t < 9) p.s = Math.min(PL, p.s + 28 * dt); const q = this.pathAt(path, p.s - i * 9); p.x = q.x + (i ? 4 : 0); p.z = q.z + (i ? 6 : 0); p.yaw = q.yaw; p.v = p.s < PL - 0.5 ? 28 : 0; });
    if (t > 8 && t < 12.5) { // he gets out and walks to the first police car with his hands up
      const u = clamp((t - 8) / 4.5, 0, 1), d0 = { x: c.x + 1.9, z: c.z }, d1 = { x: A[0].x - 2.2, z: A[0].z }; th.mode = 'foot'; th.pose = u < 0.12 ? 'idle' : 'scared'; th.sp = u > 0.12 && u < 1 ? 2.2 : 0; th.x = lerp(d0.x, d1.x, u); th.z = lerp(d0.z, d1.z, u); th.yaw = Math.atan2(d1.x - d0.x, d1.z - d0.z); c.drv = 0;
    } else if (t >= 12.5) { th.mode = 'rear'; th.pose = 'sit'; th.sp = 0; c.drv = 0; }
    if (t >= 12.5) { const q = this.pathAt([[72, 458], [72, 466], [150, 468], [150, 250], [123, 240], [123, 60]], Math.max(0, t - 12.5) * 14); A[0].x = q.x; A[0].z = q.z; A[0].yaw = q.yaw; A[0].v = 14; }
    if (t > ARREST_LEN) { this.onEv('done'); this.end(true); }
  }
  pathAt(pts, d) {
    let acc = 0; d = Math.max(0, d);
    for (let i = 1; i < pts.length; i++) { const L = hyp(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); if (d <= acc + L) { const u = (d - acc) / L; return { x: lerp(pts[i - 1][0], pts[i][0], u), z: lerp(pts[i - 1][1], pts[i][1], u), yaw: Math.atan2(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]) }; } acc += L; }
    const a = pts[pts.length - 2], b = lastOf(pts); return { x: b[0], z: b[1], yaw: Math.atan2(b[0] - a[0], b[1] - a[1]) };
  }
  snap() {
    const c = this.car, th = this.th, tk = this.tk, f = (v) => +v.toFixed(2);
    return { st: this.stage, T: +this.T.toFixed(1), c: [f(c.x), f(c.z), +c.yaw.toFixed(3), f(c.v), c.drv], p: [f(th.x), f(th.z), +th.yaw.toFixed(3), f(th.sp), th.pose, th.mode],
      k: [f(tk.x), f(tk.z), +tk.yaw.toFixed(3), f(tk.v), tk.mode, +tk.boomT.toFixed(1)], pl: this.pol.map((p) => [f(p.x), f(p.z), +p.yaw.toFixed(3), f(p.v)]), q: this.stage === 'arrest' || this.stage === 'done' || !this.pur ? [] : this.pur.map((p) => [f(p.x), f(p.z), +p.yaw.toFixed(3), f(p.v)]), ar: +this.ar.toFixed(1), d: Math.round(this.dmin), n: this.blockers.length };
  }
}
export { SNIPE, BANK, GT };
