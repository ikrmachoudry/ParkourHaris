// TRAFFIC AI (GTA V style). The traffic cars still follow their rails (trafficPos), but each car now owns a private clock that runs slower than the
// race clock when the car brakes: so a car that stops simply waits on its rail, and the others queue up behind it.
//
// What a driver does (the same rules GTA V uses):
//   - brakes hard for a person on foot who stands or walks in his lane, and for any vehicle ahead; honks if you keep blocking him
//   - an impatient (brave) driver who has been blocked for a long time gets out and fights
//   - gun pointed at his car: he stops dead, hands off the wheel; a moment later he gets out and runs (the brave ones fight)
//   - shot at / hit: he floors it
//   - carjack (walk up to the stopped car and press the car button): he resists for a moment (longer when you are unarmed), then is dragged out and thrown;
//     the timid ones run or cower, the brave ones get up and punch you. The car is yours.
//   - an abandoned car stays where it is for a while, then disappears and a new one rejoins the traffic far away from you.
// Multiplayer: the room host runs this AI and streams every car (snapshot); the others are 'puppets' (puppet = true) that only follow the stream,
// so everybody sees the same cars stopping, honking, being jacked. Other players are treated like people / cars in the lane, but are never affected.
import { TRAFFIC, trafficPos } from './gta.js';

const MODES = ['drive', 'abandoned', 'struggle', 'gone'];
const DEC = 9.5, ACC = 3.6, HALF_L = 2.3;

export class TrafficAI {
  // cars: [{ L, k, m, st }] built by gtaworld
  constructor(cars) {
    this.puppet = false; this.cars = cars; this.t0 = null; this.R = (() => { let s = 91; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; })();
    for (const c of cars) { c.tau = 0; c.v = c.L.sp; c.mode = 'drive'; c.blockT = 0; c.hornT = 0; c.brave = this.R() < 0.35; c.scared = 0; c.panic = 0; c.goneT = 0; c.struggle = 0; c.vis = true; c.stopT = 0; }
  }
  // ctx: { me: {x,z} | null (on foot), carSt, cars: [car states], aim: {x,z,dx,dz} | null, honk(c), driverOut(c, mode) }
  update(t, ctx) {
    const dt = this.t0 === null ? 0 : Math.max(0, Math.min(0.1, t - this.t0)); this.t0 = t;
    for (const c of this.cars) {
      if (c.tau === 0 && c.init !== true) { c.tau = t; c.init = true; }
      const st = c.st, L = c.L;
      if (this.puppet && !(c.hold > 0)) { this.puppetStep(c, dt, t); continue; }
      if (c.hold > 0) c.hold -= dt;
      if (c.mode === 'gone') {
        c.goneT -= dt;
        if (c.goneT <= 0) { const p = trafficPos(L, c.k, c.tau); const far = !ctx.me || Math.hypot(p.x - ctx.me.x, p.z - ctx.me.z) > 60; if (far) { c.mode = 'drive'; c.v = L.sp; c.vis = true; c.struggle = 0; c.panic = 0; c.scared = 0; c.blockT = 0; } else c.tau += dt * L.sp * 0.5; }
        else continue;
      }
      if (c.mode === 'abandoned') { c.v = Math.max(0, c.v - DEC * dt); c.goneT -= dt; if (c.goneT <= 0) { c.mode = 'gone'; c.goneT = 20; c.vis = false; } }
      else if (c.mode === 'struggle') { c.v = 0; }   // somebody is pulling the driver out
      else {
        // ---- what is in front of me?
        let gap = 1e9, byMe = false;
        const fx = Math.sin(st.yaw), fz = Math.cos(st.yaw), look = c.v * c.v / (2 * DEC) + 7;
        const test = (x, z, hl, hw, mine) => { const dx = x - st.x, dz = z - st.z, a = dx * fx + dz * fz, l = -dx * fz + dz * fx; if (a < 0.2 || a > look + HALF_L + hl || Math.abs(l) > 0.95 + hw) return; const g = a - HALF_L - hl; if (g < gap) { gap = g; byMe = !!mine; } };
        if (ctx.me) test(ctx.me.x, ctx.me.z, 0.45, 0.45, true);
        if (ctx.persons) for (const o of ctx.persons) test(o.x, o.z, 0.45, 0.45, true);
        if (ctx.carSt) test(ctx.carSt.x, ctx.carSt.z, ctx.carSt.hl || 2.2, ctx.carSt.hw || 1, true);
        for (const o of this.cars) if (o !== c && o.mode !== 'gone' && o.vis) test(o.st.x, o.st.z, 2.2, 0.95, false);
        for (const o of ctx.cars) if (o.driver !== -1 && o !== ctx.carSt && Math.abs(o.speed) > 0.5) test(o.x, o.z, o.hl || 2.2, o.hw || 1, false);
        // gun pointed at me: stop dead
        if (c.mode === 'drive') for (const aim of (ctx.aims || (ctx.aim ? [ctx.aim] : []))) { const dx = st.x - aim.x, dz = st.z - aim.z, d = Math.hypot(dx, dz); if (d < 30 && d > 1 && (dx * aim.dx + dz * aim.dz) / d > 0.93) c.scared = Math.max(c.scared, 1.5); }
        if (c.scared > 0) { c.scared -= dt; gap = Math.min(gap, 0); }
        let vt = c.panic > 0 ? L.sp * 1.5 : L.sp;
        if (gap < 1e8) vt = Math.min(vt, gap <= 1.2 ? 0 : Math.sqrt(2 * DEC * (gap - 1.2)));
        c.v = c.v > vt ? Math.max(vt, c.v - DEC * dt) : Math.min(vt, c.v + ACC * dt);
        if (c.panic > 0) c.panic -= dt;
        // ---- impatience
        if (byMe && c.v < 0.4 && gap < 6) {
          c.blockT += dt; c.hornT -= dt;
          if (c.hornT <= 0 && c.blockT > 0.5) { c.hornT = 2.4; if (ctx.honk) ctx.honk(c); }
          if (c.blockT > 7 && c.brave) { c.mode = 'abandoned'; c.goneT = 25; c.v = 0; if (ctx.driverOut) ctx.driverOut(c, 'fight'); }
        } else c.blockT = Math.max(0, c.blockT - dt * 2);
        // pointed at with a gun and now stopped: he gets out with his hands up
        if (c.scared > 0 && c.v < 0.3) { c.stopT += dt; if (c.stopT > 0.9) { c.mode = 'abandoned'; c.goneT = 25; c.stopT = 0; if (ctx.driverOut) ctx.driverOut(c, c.brave && this.R() < 0.5 ? 'fight' : this.R() < 0.5 ? 'cower' : 'flee'); } } else if (c.scared <= 0) c.stopT = 0;
      }
      c.tau += dt * c.v / L.sp;
      const p = trafficPos(L, c.k, c.tau); st.x = p.x; st.z = p.z; st.yaw = p.yaw; const k = L.sp ? c.v / L.sp : 0; st.vx = p.vx * k; st.vz = p.vz * k; st.speed = c.v;
      if (c.m) { c.m.visible = c.vis; c.m.position.set(p.x, 0, p.z); c.m.rotation.y = p.yaw; if (c.mode === 'struggle') { c.m.position.x += Math.sin(t * 38) * 0.04; c.m.rotation.z = Math.sin(t * 31) * 0.012; } else c.m.rotation.z = 0; }
    }
  }
  // ---- multiplayer stream. entry: [tau, v, mode, vis]
  snapshot() { const r = (v, n) => Math.round(v * n) / n; return this.cars.map((c) => [r(c.tau, 1000), r(c.v, 100), MODES.indexOf(c.mode), c.vis ? 1 : 0]); }
  applySnap(d) { const now = performance.now(); for (let i = 0; i < d.length && i < this.cars.length; i++) { const c = this.cars[i], e = d[i]; c.net = e; c.netAt = now; } }
  puppetStep(c, dt, t) {
    const e = c.net, L = c.L; if (c.tau === 0 && !c.init) { c.tau = t; c.init = true; }
    if (e) {
      const now = performance.now(); c.mode = MODES[e[2]] || 'drive'; c.vis = !!e[3]; c.v = e[1];
      const est = e[0] + (now - c.netAt) / 1000 * e[1] / L.sp, err = est - c.tau; c.tau = Math.abs(err) > 4 ? est : c.tau + err * Math.min(1, dt * 6);
    }
    if (c.mode !== 'gone') c.tau += dt * c.v / L.sp;
    const st = c.st, p = trafficPos(L, c.k, c.tau); st.x = c.mode === 'gone' ? 1e5 : p.x; st.z = c.mode === 'gone' ? 1e5 : p.z; st.yaw = p.yaw; const k = L.sp ? c.v / L.sp : 0; st.vx = p.vx * k; st.vz = p.vz * k; st.speed = c.v;
    if (c.m) { c.m.visible = c.vis && c.mode !== 'gone'; c.m.position.set(p.x, 0, p.z); c.m.rotation.y = p.yaw; if (c.mode === 'struggle') { c.m.position.x += Math.sin(t * 38) * 0.04; c.m.rotation.z = Math.sin(t * 31) * 0.012; } else c.m.rotation.z = 0; }
  }
  // the traffic car a person on foot can jack right now: stopped (or crawling) and next to him
  nearestJack(x, z) {
    let best = null, bd = 4.4;
    for (const c of this.cars) {
      if (c.mode === 'gone' || c.mode === 'struggle' || !c.vis || c.v > 1.6) continue;
      const d = Math.hypot(c.st.x - x, c.st.z - z); if (d < bd) { bd = d; best = c; }
    }
    return best;
  }
  begin(c) { c.mode = 'struggle'; c.v = 0; c.hold = 0.8; }
  // the car has been taken: hide it, it rejoins the traffic far away after a while
  take(c) { c.mode = 'gone'; c.goneT = 45; c.hold = 0.8; c.vis = false; if (c.m) c.m.visible = false; c.st.x = c.st.z = 1e5; }
  hit(c) { if (c.mode === 'drive') { c.panic = 6; c.scared = 0; } }
}
