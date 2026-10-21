// PEDESTRIANS for the city: people walking along the pavements.  Their walk is a pure function of the shared race clock (so everybody sees
// the same people, like the traffic), only the ones near the camera exist as real models, and a car that hits one throws him down.
import * as THREE from 'three';
import { HeroActor } from './actor.js';
import { GT } from './gta.js';

const LOOKS = [
  { top: '#e8e4d8', pants: '#3d4a63', skinTone: '#c68e63', hair: '#16110d' }, { top: '#2f5d7a', pants: '#2a2a2e', skinTone: '#8d5a3b', hair: '#0d0a08' },
  { top: '#a83a3a', pants: '#1f2a44', skinTone: '#d9a077', hair: '#2a1a10' }, { top: '#4d7a4f', pants: '#5a4a3a', skinTone: '#b07a52', hair: '#0d0a08' },
  { top: '#d6c15a', pants: '#2b2f3a', skinTone: '#e0ac85', hair: '#4a3020' }, { top: '#6b5aa8', pants: '#3a3a44', skinTone: '#a8714e', hair: '#120d0a' },
  { top: '#f2f2f2', pants: '#54606e', skinTone: '#c68e63', hair: '#1a120c' }, { top: '#8a5a32', pants: '#26303f', skinTone: '#7a4d32', hair: '#0a0806' },
  { top: '#3b3b44', pants: '#3b3b44', skinTone: '#d2996f', hair: '#16110d' }, { top: '#c46a2a', pants: '#2a2f3a', skinTone: '#b98058', hair: '#120d0a' },
];
const rng = (seed) => { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; };
const SHOW = 46, SHOW2 = SHOW * SHOW;
const ST = ['walk', 'cower', 'flee', 'fight', 'fly', 'lie', 'gone'];

export class Peds {
  constructor(scene, count = 14) {
    this.scene = scene; this.list = []; this.puppet = false; this.others = []; this.snapAt = 0; this.snapMap = new Map();
    const R = rng(777), G = GT.GRID;
    for (let i = 0; i < count; i++) {
      const axis = i % 2, g = G[Math.floor(R() * G.length)], side = R() < 0.5 ? -1 : 1, lo = -232, hi = 232, span = hi - lo;
      this.list.push({ i, axis, g, off: side * 8.1, lo, span, sp: 1.25 + R() * 0.5, ph: R() * 2 * span, look: LOOKS[i % LOOKS.length], actor: null, x: 0, z: 0, yaw: 0, st: 'walk', hitT: 0, vx: 0, vz: 0, vy: 0, y: 0, lie: 0, wait: 0, pause: 0, prevS: 0, hp: 0, hpMax: 0, brave: false, fear: 0, timer: 0, dx: 0, dz: 0, punchT: 0, atk: 0, pend: false });
      const q = this.list[this.list.length - 1]; q.hpMax = q.hp = 2 + Math.floor(R() * 3); q.brave = R() < 0.4; q.fear = R();
    }
  }
  pose(p, t) {   // where this person is on his pavement at race time t (a back-and-forth walk)
    const per = p.span * 2, s = ((t * p.sp + p.ph) % per + per) % per, fwd = s < p.span, u = fwd ? s : per - s, a = p.lo + u;
    if (p.axis === 0) { p.x = p.g + p.off; p.z = a; p.yaw = fwd ? 0 : Math.PI; } else { p.x = a; p.z = p.g + p.off; p.yaw = fwd ? Math.PI / 2 : -Math.PI / 2; }
  }
  // vehicles: array of car states (x, z, yaw, speed, vx, vz, hl, hw);  me: { x, z } or null while driving;  ctx: { sit, hitMe(p) }
  update(dt, t, camPos, vehicles, me, onHit, ctx = {}) {
    for (const p of this.list) {
      let speed = 0, gesture = null;
      const pup = this.puppet && !(p.hold > 0); if (p.hold > 0) p.hold -= dt;
      if (pup) { const r = this.puppetStep(p, dt, t); speed = r.speed; gesture = r.gesture; if (p.dead) continue; }
      else if (p.st === 'walk') {
        this.pose(p, t - (p.shift || 0));
        if (!p.temp) for (const c of vehicles) { const sp = Math.abs(c.speed); if (sp < 9 || c.y > 1 || c.driver >= 1000) continue; const dx = p.x - c.x, dz = p.z - c.z; if (dx * dx + dz * dz < 36 && (dx * c.vx + dz * c.vz) / (Math.hypot(dx, dz) * sp + 1e-3) > -0.2 && Math.random() < dt * 3 * (sp / 15)) { this.scare(p, c.x, c.z); break; } }   // a car racing past scares him
        if (me && ctx.sit && p.fear > 0.55) { const mx = me.x - p.x, mz = me.z - p.z; if (mx * mx + mz * mz < 36) this.scare(p, me.x, me.z); }   // somebody sitting down and acting odd right next to him
      } else if (p.st === 'cower') {
        p.timer -= dt; gesture = 'scared'; if (p.timer <= 0) { p.st = 'flee'; p.timer = 4 + Math.random() * 2; }
      } else if (p.st === 'flee') {
        p.timer -= dt; speed = 5.4; { const w = this.step(p, p.dx * speed * dt, p.dz * speed * dt); if (w) { const sg = p.turn || (p.turn = Math.random() < 0.5 ? 1 : -1), a = 1.2 * sg * dt * 6, c = Math.cos(a), sn = Math.sin(a), nx = p.dx * c - p.dz * sn, nz = p.dx * sn + p.dz * c; p.dx = nx; p.dz = nz; } } p.yaw = Math.atan2(p.dx, p.dz);
        if (p.timer <= 0) { p.st = 'gone'; p.wait = 0; }
      } else if (p.st === 'fight') {
        let tg = me, other = false;
        if (this.others.length) { let bd = me ? (me.x - p.x) * (me.x - p.x) + (me.z - p.z) * (me.z - p.z) : 1e9; for (const o of this.others) { const d2 = (o.x - p.x) * (o.x - p.x) + (o.z - p.z) * (o.z - p.z); if (d2 < bd) { bd = d2; tg = o; other = true; } } }
        if (!tg) { p.st = 'flee'; p.dx = Math.sin(p.yaw + Math.PI); p.dz = Math.cos(p.yaw + Math.PI); p.timer = 3; }
        else {
          const mx = tg.x - p.x, mz = tg.z - p.z, d = Math.hypot(mx, mz) || 1;
          p.yaw = Math.atan2(mx, mz);
          if (d > 16) { p.st = 'gone'; p.wait = 0; }
          else if (d > 1.25 && p.punchT === 0) { speed = 3.6; p.x += mx / d * speed * dt; p.z += mz / d * speed * dt; }
          p.atk -= dt;
          if (p.punchT === 0 && d < 1.7 && p.atk <= 0) { p.punchT = 0.001; p.pend = true; p.atk = 1.4 + Math.random() * 0.6; this.alarm(p.x, p.z, 11, p); }
          if (p.punchT > 0) {
            p.punchT += dt / 0.45;
            if (p.pend && p.punchT >= 0.42) { p.pend = false; if (d < 2) { if (other) { if (ctx.hitOther) ctx.hitOther(p, tg); } else if (ctx.hitMe) ctx.hitMe(p); } }
            if (p.punchT >= 1) p.punchT = 0;
          }
        }
      } else if (p.st === 'fly') {
        p.vy -= 9.81 * dt; if (this.step(p, p.vx * dt, p.vz * dt) === 2) { p.vx = p.vz = 0; } p.y += p.vy * dt; p.vx *= Math.exp(-0.6 * dt); p.vz *= Math.exp(-0.6 * dt);
        if (p.y <= 0) { p.y = 0; p.vx *= 0.3; p.vz *= 0.3; if (Math.abs(p.vy) > 1.5) p.vy = -p.vy * 0.25; else { p.vy = 0; p.st = 'lie'; p.wait = 0; } }
        p.lie = Math.min(1, p.lie + dt * 4);
      } else if (p.st === 'lie') { p.wait += dt; if (p.vx || p.vz) { if (this.step(p, p.vx * dt, p.vz * dt) === 2) p.vx = p.vz = 0; const k = Math.exp(-6 * dt); p.vx *= k; p.vz *= k; if (Math.abs(p.vx) + Math.abs(p.vz) < 0.05) p.vx = p.vz = 0; } if (p.temp && p.hp > 0 && p.wait > 1.3 && !p.recov) { p.recov = 1; p.lie = 0; p.y = 0; if (p.brave) { p.st = 'fight'; p.atk = 0.4; p.punchT = 0; p.pend = false; } else { p.st = 'cower'; p.timer = 0.8; p.dx = Math.sin(p.yaw + 3.14); p.dz = Math.cos(p.yaw + 3.14); } } else if (p.wait > (p.hp <= 0 ? 40 : 5)) { p.st = 'gone'; p.wait = 0; } }
      else if (p.st === 'gone') { if (p.temp) { p.dead = true; continue; } p.wait += dt; if (p.wait > (p.hp <= 0 ? 50 : 6)) { p.st = 'walk'; p.lie = 0; p.y = 0; p.hp = p.hpMax; p.punchT = 0; } }
      const dx = p.x - camPos.x, dz = p.z - camPos.z, near = p.st !== 'gone' && dx * dx + dz * dz < SHOW2;
      if (!near) { if (p.actor) p.actor.group.visible = false; p.prevS = 0; continue; }
      if (!p.actor) { p.actor = new HeroActor(p.i, p.look); this.scene.add(p.actor.group); }
      const a = p.actor; a.group.visible = true;
      if (p.st === 'walk' && !pup) {      // people stop while you stand right next to them
        if (me) { const mx = me.x - p.x, mz = me.z - p.z; speed = mx * mx + mz * mz < 1.3 ? 0 : p.sp; } else speed = p.sp;
        if (speed === 0) p.shift = (p.shift || 0) + dt;   // he really stands still (no gliding): his place on the path is frozen while he waits
      }
      if (!pup && (p.st === 'walk' || p.st === 'flee' || p.st === 'cower' || p.st === 'fight')) for (const c of vehicles) {  // a car that hits one throws him
        if (Math.abs(c.speed) < 2.5 || c.y > 1) continue;
        const rx = p.x - c.x, rz = p.z - c.z, fx = Math.sin(c.yaw), fz = Math.cos(c.yaw), al = rx * fx + rz * fz, ac = -rx * fz + rz * fx;
        if (Math.abs(al) < (c.hl || 2.2) + 0.35 && Math.abs(ac) < (c.hw || 1) + 0.35) {
          p.st = 'fly'; p.vx = c.vx * 0.85 + (-fz * (ac > 0 ? 1 : -1)) * 1.2; p.vz = c.vz * 0.85 + (fx * (ac > 0 ? 1 : -1)) * 1.2; p.vy = 2.6 + Math.min(4, Math.abs(c.speed) * 0.14); p.lie = 0; speed = 0;
          this.alarm(p.x, p.z, 14, p); this.voice('hurt', p);
          if (onHit) onHit(p, Math.abs(c.speed)); break;
        }
      }
      const fl = this.ground ? this.ground(p.x, p.z) : 0;   // the pavement is 0.2 m above the avenue: stand ON it, and a lying person rests on top of it, not inside it
      a.group.position.set(p.x, fl + p.y + 0.26 * (p.st === 'fly' || p.st === 'lie' ? p.lie : 0), p.z); a.group.rotation.y = p.yaw;
      a.group.rotation.x = -1.45 * (p.st === 'fly' || p.st === 'lie' ? p.lie : 0);
      a.update(dt, { speed, grounded: p.st !== 'fly', vy: p.st === 'fly' ? 3 : 0, stun: 0, seated: false, gesture, punch: p.punchT });
    }
    for (let i = this.list.length - 1; i >= 0; i--) { const p = this.list[i]; if (p.dead) { if (p.actor) { this.scene.remove(p.actor.group); p.actor.dispose(); } this.list.splice(i, 1); } }
  }
  // nobody walks through you: if you touch a person on foot you are pushed out of him (he keeps his place)
  pushOut(b) {
    for (const p of this.list) {
      if (!p.actor || !p.actor.group.visible || p.st === 'gone' || p.st === 'fly' || p.st === 'lie') continue;
      const dx = b.x - p.x, dz = b.z - p.z, d = Math.hypot(dx, dz), R = 0.8;
      if (d < R && Math.abs((b.y || 0) - (p.y || 0)) < 1.4) { const nx = d > 1e-4 ? dx / d : 1, nz = d > 1e-4 ? dz / d : 0; b.x = p.x + nx * R; b.z = p.z + nz * R; }
    }
  }
  // frighten the timid people near a fight / crash (the brave ones just watch)
  alarm(x, z, r, except, gun) {
    for (const p of this.list) {
      if (p === except || p.st !== 'walk' || (p.brave && !(gun && Math.random() < 0.6))) continue;
      const dx = p.x - x, dz = p.z - z; if (dx * dx + dz * dz < r * r) this.scare(p, x, z);
    }
  }
  // walls: moves a person by (dx,dz) unless a building / prop is in the way (slides along it); returns 0 = free, 1 = slid, 2 = stuck
  step(p, dx, dz) {
    const nx = p.x + dx, nz = p.z + dz, B = this.blocked; if (!B || !B(nx, nz)) { p.x = nx; p.z = nz; return 0; }
    if (!B(nx, p.z)) { p.x = nx; return 1; } if (!B(p.x, nz)) { p.z = nz; return 1; } return 2;
  }
  // a voice for the audio layer: 'scream' (scared) or 'death'. Rate-limited per person.
  voice(kind, p) { const n = performance.now(); if (kind === 'hurt') { if (!this.onVoice || n - (p.hAt || 0) < 450) return; p.hAt = n; this.onVoice(kind, p); return; } if (!this.onVoice || n - (p.vAt || 0) < (kind === 'death' ? 800 : 3500)) return; p.vAt = n; this.onVoice(kind, p); }
  scare(p, x, z) {
    this.voice('scream', p);
    const dx = p.x - x, dz = p.z - z, d = Math.hypot(dx, dz) || 1;
    p.dx = dx / d; p.dz = dz / d; p.yaw = Math.atan2(p.dx, p.dz);
    if (Math.random() < 0.5) { p.st = 'cower'; p.timer = 1.5 + Math.random() * 1.5; p.yaw = Math.atan2(-p.dx, -p.dz); } else { p.st = 'flee'; p.timer = 4 + Math.random() * 2; }
  }
  // somebody lying on the ground or cowering in front of you (the punch button then kicks)
  downed(x, z, fx, fz) {
    let best = null, bd = 4.2;
    for (const p of this.list) {
      if (p.st !== 'lie' && p.st !== 'cower') continue;
      const dx = p.x - x, dz = p.z - z, d2 = dx * dx + dz * dz;
      if (d2 > bd || d2 < 1e-4 || (dx * fx + dz * fz) / Math.sqrt(d2) < 0.3) continue;
      bd = d2; best = p;
    }
    return best;
  }
  // the kick lands: a lying person slides a little and is shaken, a cowering one is knocked flat
  kick(p, fx, fz, onHit) {
    p.hp -= 1; if (this.puppet) p.hold = 0.6; this.voice(p.hp <= 0 ? 'death' : 'hurt', p);
    if (p.st === 'lie') { p.vx = fx * 5.5; p.vz = fz * 5.5; p.wait = Math.max(0, p.wait - 1.5); }
    else { p.st = 'fly'; p.vx = fx * 5.2; p.vz = fz * 5.2; p.vy = 3.0; p.lie = 0; p.punchT = 0; }
    this.alarm(p.x, p.z, 12, p);
    if (onHit) onHit(p, false);
  }
  // a punch from the player: hurts the nearest person in front (hidden health, no bar). Some run, some fight back, the rest get scared.
  punch(x, z, fx, fz, onHit, dmg = 1, reach = 1.85, only = -1) {   // only: a guest already chose the person on his screen: hit exactly him (the positions differ by a little)
    let best = null, bd = 9; const r2 = (only >= 0 ? 5 : reach) ** 2;
    for (const p of this.list) {
      if (only >= 0 && p.i !== only) continue;
      if (p.st !== 'walk' && p.st !== 'flee' && p.st !== 'cower' && p.st !== 'fight') continue;
      const dx = p.x - x, dz = p.z - z, d2 = dx * dx + dz * dz;
      if (d2 > r2 || d2 < 1e-4 || (only < 0 && (dx * fx + dz * fz) / Math.sqrt(d2) < 0.3)) continue;
      if (d2 < bd || only >= 0) { bd = d2; best = p; }
    }
    if (!best) return false;
    best.hp -= dmg; if (this.puppet) best.hold = 0.6;
    if (best.hp <= 0) { this.voice('death', best); best.st = 'fly'; best.vx = fx * 7; best.vz = fz * 7; best.vy = 4.2; best.lie = 0; best.punchT = 0; }
    else if (best.brave) { best.st = 'fight'; best.atk = 0.5; best.punchT = 0; best.pend = false; best.vx = best.vz = 0; best.x += fx * 0.7; best.z += fz * 0.7; }
    else if (dmg >= 1) { best.st = 'fly'; best.vx = fx * 5.6; best.vz = fz * 5.6; best.vy = 3.2; best.lie = 0; best.punchT = 0; best.yaw = Math.atan2(-fx, -fz); this.voice('hurt', best); }   // a heavy hit: knocked off his feet
    else { best.st = Math.random() < 0.5 ? 'cower' : 'flee'; best.timer = best.st === 'cower' ? 1 : 5; best.dx = fx; best.dz = fz; best.yaw = Math.atan2(fx, fz); }
    if (best.hp > 0) this.voice('hurt', best);
    this.alarm(best.x, best.z, 12, best);
    this.lastHit = best; if (onHit) onHit(best, best.hp <= 0); return true;
  }
  // a grenade / explosion: everybody within r metres is hurt (less with distance), thrown away from the centre; dead ones scream and fall. Returns how many were hit.
  blast(x, z, r, dmg, onHit) {
    let n = 0;
    for (const p of this.list) {
      if (p.hp <= 0 || (!this.puppet && (!p.actor || !p.actor.group.visible)) || (p.st !== 'walk' && p.st !== 'flee' && p.st !== 'cower' && p.st !== 'fight' && p.st !== 'lie')) continue;
      const dx = p.x - x, dz = p.z - z, d = Math.hypot(dx, dz); if (d > r) continue; const nx = d > 1e-3 ? dx / d : 1, nz = d > 1e-3 ? dz / d : 0, k = 1 - 0.55 * d / r;
      p.hp -= dmg * k; if (this.puppet) p.hold = 0.6; const dead = p.hp <= 0; n++;
      this.voice(dead ? 'death' : 'hurt', p); p.st = 'fly'; p.vx = nx * (6 + 6 * k); p.vz = nz * (6 + 6 * k); p.vy = 5.5 * k + 1.5; p.lie = 0; p.punchT = 0; p.yaw = Math.atan2(-nx, -nz);
      this.lastHit = p; if (onHit) onHit(p, dead, d);
    }
    this.alarm(x, z, 40, null, true); return n;
  }
  // a bullet: the first person on the line (ox,oz) + (fx,fz) * [0..range] within 0.55 m of it. Returns { p, dead, d } or null. Everybody near panics (gunfire).
  shoot(ox, oz, fx, fz, range, dmg, onHit, only = -1) {
    let best = null, bd = range;
    for (const p of this.list) {
      if (only >= 0 && p.i !== only) continue;
      if (only < 0 && (!p.actor || !p.actor.group.visible)) continue;
      if (p.st !== 'walk' && p.st !== 'flee' && p.st !== 'cower' && p.st !== 'fight' && p.st !== 'lie') continue; if (p.hp <= 0) continue;   // a body stays a body
      const dx = p.x - ox, dz = p.z - oz, a = dx * fx + dz * fz; if (only < 0 && (a < 0.3 || a > bd)) continue;
      if (only < 0 && Math.abs(-dx * fz + dz * fx) > 0.7) continue; if (only >= 0 && dx * dx + dz * dz > (range + 6) * (range + 6)) continue;
      bd = a; best = p;
    }
    this.alarm(ox, oz, 32, best, true);
    if (!best) return null;
    best.hp -= dmg; if (this.puppet) best.hold = 0.6; const dead = best.hp <= 0;
    if (dead) { this.voice('death', best); best.st = 'fly'; best.vx = fx * 3.5; best.vz = fz * 3.5; best.vy = 2.4; best.lie = 0; best.punchT = 0; }
    else if (best.st !== 'lie') { if (best.brave && Math.random() < 0.35) { best.st = 'fight'; best.atk = 0.5; best.punchT = 0; best.pend = false; } else { best.st = 'flee'; best.timer = 6; best.dx = fx; best.dz = fz; best.yaw = Math.atan2(fx, fz); } }
    if (!dead) this.voice('hurt', best);
    this.lastHit = best; if (onHit) onHit(best, dead, bd); return { p: best, dead, d: bd };
  }
  // a driver pulled out of a car: a temporary person who is thrown to the ground, then runs / cowers / fights ('fight' = brave)
  adopt(x, z, yaw, brave, mode = 'fly', look = 0) {
    const R = Math.random, i = 100 + (this.nextI = (this.nextI || 0) + 1);
    const p = { i, axis: 0, g: 0, off: 0, lo: 0, span: 1, sp: 1.3, ph: 0, look: LOOKS[look % LOOKS.length], actor: null, x, z, yaw, st: mode, hitT: 0, vx: 0, vz: 0, vy: 0, y: 0, lie: 0, wait: 0, pause: 0, temp: true, hp: 3, hpMax: 3, brave, fear: R(), timer: 4, dx: Math.sin(yaw), dz: Math.cos(yaw), atk: 0.6, punchT: 0 };
    if (mode === 'fly') { p.vx = Math.sin(yaw + 1.6) * 3; p.vz = Math.cos(yaw + 1.6) * 3; p.vy = 2.2; }
    this.list.push(p); return p;
  }
  // horn / a car racing past: the timid people near it jump and run (only these AI people: other players are never affected)
  startle(x, z, r) { for (const p of this.list) { if (p.st !== 'walk' || p.temp) continue; const dx = p.x - x, dz = p.z - z; if (dx * dx + dz * dz < r * r && (p.brave ? Math.random() < 0.12 : Math.random() < 0.7)) this.scare(p, x, z); } }

  // ---- shared city: the room host simulates the people and streams them; everybody else only shows them (puppets).
  // An entry: [index, state, x, z, yaw, y, lie, shift, hp, punch, look*2 + brave]
  snapshot() {
    const r = (v) => Math.round(v * 100) / 100, out = [];
    for (const p of this.list) { if (p.dead) continue; const s = ST.indexOf(p.st); out.push([p.i, s < 0 ? 6 : s, r(p.x), r(p.z), r(p.yaw), r(p.y), r(p.lie), r(p.shift || 0), r(p.hp), r(p.punchT || 0), (p.look ? LOOKS.indexOf(p.look) : 0) * 2 + (p.brave ? 1 : 0)]); }
    return out;
  }
  applySnap(d) {
    const now = performance.now(); this.snapAt = now;
    for (const e of d) {
      let p = this.byIndex(e[0]);
      if (!p) { if (e[0] < 100) continue; p = this.adopt(e[2], e[3], e[4], !!(e[10] & 1), ST[e[1]] || 'walk', e[10] >> 1); p.i = e[0]; }
      if (p.net && p.net[1] !== e[1]) { if ((e[1] === 1 || e[1] === 2) && p.net[1] === 0) this.voice('scream', p); else if (e[1] === 4 && p.net[1] < 4) this.voice('death', p); }
      p.net = e; p.netAt = now;
    }
  }
  byIndex(i) { for (const p of this.list) if (p.i === i) return p; return null; }
  puppetStep(p, dt, t) {
    const e = p.net, now = performance.now(); let speed = 0, gesture = null;
    if (!e || now - p.netAt > 1500) { if (p.temp) { p.dead = true; return { speed, gesture }; } if (p.st !== 'walk' && p.st !== 'gone') { p.st = 'walk'; p.lie = 0; p.y = 0; p.punchT = 0; } if (p.st === 'walk') this.pose(p, t - (p.shift || 0)); return { speed: p.st === 'walk' ? p.sp : 0, gesture }; }
    const was = p.st; p.st = ST[e[1]] || 'walk'; p.shift = e[7]; p.hp = e[8]; p.punchT = e[9]; p.y += (e[5] - p.y) * Math.min(1, dt * 14); p.lie += (e[6] - p.lie) * Math.min(1, dt * 14);
    if (p.st === 'walk') { this.pose(p, t - p.shift); if (p.shift !== p._sh) { p._sh = p.shift; p._still = 0.4; } p._still = (p._still || 0) - dt; speed = p._still > 0 ? 0 : p.sp; }
    else {
      const k = 1 - Math.exp(-14 * dt), ox = p.x, oz = p.z; if (was === 'walk' || Math.hypot(e[2] - p.x, e[3] - p.z) > 6) { p.x = e[2]; p.z = e[3]; } else { p.x += (e[2] - p.x) * k; p.z += (e[3] - p.z) * k; }
      let dy = e[4] - p.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); p.yaw += dy * k;
      speed = Math.min(6, Math.hypot(p.x - ox, p.z - oz) / Math.max(dt, 1e-3)); if (p.st === 'cower') { gesture = 'scared'; speed = 0; }
      if (p.st === 'fly' || p.st === 'lie') speed = 0;
    }
    return { speed, gesture };
  }
  dispose() { for (const p of this.list) if (p.actor) { this.scene.remove(p.actor.group); p.actor.dispose(); } this.list.length = 0; }
}
