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

export class Peds {
  constructor(scene, count = 14) {
    this.scene = scene; this.list = [];
    const R = rng(777), G = GT.GRID;
    for (let i = 0; i < count; i++) {
      const axis = i % 2, g = G[Math.floor(R() * G.length)], side = R() < 0.5 ? -1 : 1, lo = -112, hi = 112, span = hi - lo;
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
      if (p.st === 'walk') {
        this.pose(p, t - (p.shift || 0));
        if (me && ctx.sit && p.fear > 0.55) { const mx = me.x - p.x, mz = me.z - p.z; if (mx * mx + mz * mz < 36) this.scare(p, me.x, me.z); }   // somebody sitting down and acting odd right next to him
      } else if (p.st === 'cower') {
        p.timer -= dt; gesture = 'scared'; if (p.timer <= 0) { p.st = 'flee'; p.timer = 4 + Math.random() * 2; }
      } else if (p.st === 'flee') {
        p.timer -= dt; speed = 5.4; p.x += p.dx * speed * dt; p.z += p.dz * speed * dt; p.yaw = Math.atan2(p.dx, p.dz);
        if (p.timer <= 0) { p.st = 'gone'; p.wait = 0; }
      } else if (p.st === 'fight') {
        if (!me) { p.st = 'flee'; p.dx = Math.sin(p.yaw + Math.PI); p.dz = Math.cos(p.yaw + Math.PI); p.timer = 3; }
        else {
          const mx = me.x - p.x, mz = me.z - p.z, d = Math.hypot(mx, mz) || 1;
          p.yaw = Math.atan2(mx, mz);
          if (d > 16) { p.st = 'gone'; p.wait = 0; }
          else if (d > 1.25 && p.punchT === 0) { speed = 3.6; p.x += mx / d * speed * dt; p.z += mz / d * speed * dt; }
          p.atk -= dt;
          if (p.punchT === 0 && d < 1.7 && p.atk <= 0) { p.punchT = 0.001; p.pend = true; p.atk = 1.4 + Math.random() * 0.6; this.alarm(p.x, p.z, 11, p); }
          if (p.punchT > 0) {
            p.punchT += dt / 0.45;
            if (p.pend && p.punchT >= 0.42) { p.pend = false; if (d < 2 && ctx.hitMe) ctx.hitMe(p); }
            if (p.punchT >= 1) p.punchT = 0;
          }
        }
      } else if (p.st === 'fly') {
        p.vy -= 9.81 * dt; p.x += p.vx * dt; p.z += p.vz * dt; p.y += p.vy * dt; p.vx *= Math.exp(-0.6 * dt); p.vz *= Math.exp(-0.6 * dt);
        if (p.y <= 0) { p.y = 0; p.vx *= 0.3; p.vz *= 0.3; if (Math.abs(p.vy) > 1.5) p.vy = -p.vy * 0.25; else { p.vy = 0; p.st = 'lie'; p.wait = 0; } }
        p.lie = Math.min(1, p.lie + dt * 4);
      } else if (p.st === 'lie') { p.wait += dt; if (p.vx || p.vz) { p.x += p.vx * dt; p.z += p.vz * dt; const k = Math.exp(-6 * dt); p.vx *= k; p.vz *= k; if (Math.abs(p.vx) + Math.abs(p.vz) < 0.05) p.vx = p.vz = 0; } if (p.wait > 5) { p.st = 'gone'; p.wait = 0; } }
      else if (p.st === 'gone') { p.wait += dt; if (p.wait > 6) { p.st = 'walk'; p.lie = 0; p.y = 0; p.hp = p.hpMax; p.punchT = 0; } }
      const dx = p.x - camPos.x, dz = p.z - camPos.z, near = p.st !== 'gone' && dx * dx + dz * dz < SHOW2;
      if (!near) { if (p.actor) p.actor.group.visible = false; p.prevS = 0; continue; }
      if (!p.actor) { p.actor = new HeroActor(p.i, p.look); this.scene.add(p.actor.group); }
      const a = p.actor; a.group.visible = true;
      if (p.st === 'walk') {      // people stop while you stand right next to them
        if (me) { const mx = me.x - p.x, mz = me.z - p.z; speed = mx * mx + mz * mz < 1.3 ? 0 : p.sp; } else speed = p.sp;
        if (speed === 0) p.shift = (p.shift || 0) + dt;   // he really stands still (no gliding): his place on the path is frozen while he waits
      }
      if (p.st === 'walk' || p.st === 'flee' || p.st === 'cower' || p.st === 'fight') for (const c of vehicles) {  // a car that hits one throws him
        if (Math.abs(c.speed) < 2.5 || c.y > 1) continue;
        const rx = p.x - c.x, rz = p.z - c.z, fx = Math.sin(c.yaw), fz = Math.cos(c.yaw), al = rx * fx + rz * fz, ac = -rx * fz + rz * fx;
        if (Math.abs(al) < (c.hl || 2.2) + 0.35 && Math.abs(ac) < (c.hw || 1) + 0.35) {
          p.st = 'fly'; p.vx = c.vx * 0.85 + (-fz * (ac > 0 ? 1 : -1)) * 1.2; p.vz = c.vz * 0.85 + (fx * (ac > 0 ? 1 : -1)) * 1.2; p.vy = 2.6 + Math.min(4, Math.abs(c.speed) * 0.14); p.lie = 0; speed = 0;
          this.alarm(p.x, p.z, 14, p);
          if (onHit) onHit(p, Math.abs(c.speed)); break;
        }
      }
      a.group.position.set(p.x, p.y, p.z); a.group.rotation.y = p.yaw;
      a.group.rotation.x = -1.45 * (p.st === 'fly' || p.st === 'lie' ? p.lie : 0);
      a.update(dt, { speed, grounded: p.st !== 'fly', vy: p.st === 'fly' ? 3 : 0, stun: 0, seated: false, gesture, punch: p.punchT });
    }
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
  alarm(x, z, r, except) {
    for (const p of this.list) {
      if (p === except || p.st !== 'walk' || p.brave) continue;
      const dx = p.x - x, dz = p.z - z; if (dx * dx + dz * dz < r * r) this.scare(p, x, z);
    }
  }
  scare(p, x, z) {
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
    p.hp -= 1;
    if (p.st === 'lie') { p.vx = fx * 3.2; p.vz = fz * 3.2; p.wait = Math.max(0, p.wait - 1.5); }
    else { p.st = 'fly'; p.vx = fx * 2.4; p.vz = fz * 2.4; p.vy = 2.0; p.lie = 0; p.punchT = 0; }
    this.alarm(p.x, p.z, 12, p);
    if (onHit) onHit(p, false);
  }
  // a punch from the player: hurts the nearest person in front (hidden health, no bar). Some run, some fight back, the rest get scared.
  punch(x, z, fx, fz, onHit) {
    let best = null, bd = 9;
    for (const p of this.list) {
      if (p.st !== 'walk' && p.st !== 'flee' && p.st !== 'cower' && p.st !== 'fight') continue;
      const dx = p.x - x, dz = p.z - z, d2 = dx * dx + dz * dz;
      if (d2 > 3.4 || d2 < 1e-4 || (dx * fx + dz * fz) / Math.sqrt(d2) < 0.3) continue;
      if (d2 < bd) { bd = d2; best = p; }
    }
    if (!best) return false;
    best.hp -= 1;
    if (best.hp <= 0) { best.st = 'fly'; best.vx = fx * 4.5; best.vz = fz * 4.5; best.vy = 3.2; best.lie = 0; best.punchT = 0; }
    else if (best.brave) { best.st = 'fight'; best.atk = 0.5; best.punchT = 0; best.pend = false; best.vx = best.vz = 0; }
    else { best.st = Math.random() < 0.5 ? 'cower' : 'flee'; best.timer = best.st === 'cower' ? 1 : 5; best.dx = fx; best.dz = fz; best.yaw = Math.atan2(fx, fz); }
    this.alarm(best.x, best.z, 12, best);
    if (onHit) onHit(best, best.hp <= 0); return true;
  }
  dispose() { for (const p of this.list) if (p.actor) { this.scene.remove(p.actor.group); p.actor.dispose(); } this.list.length = 0; }
}
