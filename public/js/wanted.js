// WANTED SYSTEM (GTA V style) for the city.  Local to each player's screen (each client runs its own police).
//
//   CRIMES      shooting a gun, hitting / killing people, running them over, carjacking, shooting cars, hurting police  ->  heat  ->  1..5 stars
//   POLICE      patrol cars race to you along the avenue grid (flashing lights + siren), the officers get out and run at you on foot,
//               from 2 stars they shoot, and at any level they ARREST you: stand still next to one and the BUSTED bar fills.
//   SEARCH      once no officer can see you the stars start flashing red / blue and a BLUE CIRCLE appears on the map around the place you were last seen.
//               Stay OUTSIDE the circle (and out of sight) and the evade bar fills: one star drops each time, until you are clean.
//               Inside the circle they keep hunting you. Being seen again brings the chase straight back.
//   BUSTED      arrested: a small fine, the police drop you off at the station, and the stars are gone.
import * as THREE from 'three';
import { HeroActor } from './actor.js';
import { buildTrafficMesh } from './cityvis.js';
import { GT, POLICE } from './gta.js';
import * as A from './audio.js';
import { OPT } from './opts.js';

const GRID = GT.GRID, EDGE = GRID[GRID.length - 1], LANE = 2.7;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const rnd = (a, b) => a + Math.random() * (b - a);
const SIREN_SAFE = 45;                                   // metres beyond the search circle where the patrol siren has faded out completely
const HEAT = [3, 12, 26, 45, 70];                        // heat needed for 1..5 stars
const CARS = [0, 1, 2, 3, 3, 4], FOOT = [0, 1, 2, 3, 4, 5];  // patrol cars / officers on foot per star level
const CRIME = { shot: 0.3, hit: 0.7, kill: 2.2, run: 1.0, jack: 2.4, car: 1.3, copHit: 2.4, copKill: 4.2, crash: 0.5 };
let NID = 1;
const COP_LOOK = { role: 'cop', skinTone: '#c68e63', hair: '#15100c' };

// is the straight line a -> b blocked by a building?
function blocked(boxes, ax, az, bx, bz) {
  for (const b of boxes) {
    if (b.h < 3) continue;
    if ((ax < b.x0 && bx < b.x0) || (ax > b.x1 && bx > b.x1) || (az < b.z0 && bz < b.z0) || (az > b.z1 && bz > b.z1)) continue;
    // slab test
    let t0 = 0, t1 = 1; const dx = bx - ax, dz = bz - az;
    for (const [p, d, lo, hi] of [[ax, dx, b.x0, b.x1], [az, dz, b.z0, b.z1]]) {
      if (Math.abs(d) < 1e-6) { if (p < lo || p > hi) { t0 = 2; break; } } else { let u = (lo - p) / d, v = (hi - p) / d; if (u > v) { const w = u; u = v; v = w; } t0 = Math.max(t0, u); t1 = Math.min(t1, v); if (t0 > t1) break; }
    }
    if (t0 <= t1) return true;
  }
  return false;
}

export class Wanted {
  constructor(race) {
    this.R = race; this.stars = 0; this.heat = 0; this.cars = []; this.foot = []; this.spawnT = 2; this.seen = false; this.unseenT = 99;
    this.search = null;            // { x, z, r }: where the police think you are
    this.evade = 0;                // 0..1 fills while you are out of the circle and unseen
    this.bust = 0;                 // 0..1 arrest bar
    this.bannerT = 0; this.cool = 0; this.sightT = 0; this.crimeCd = {}; this.group = new THREE.Group(); race.scene.add(this.group);
    this.el = document.getElementById('wanted'); this.elBust = document.getElementById('bust-bar');
    this.lastStars = -1; this.flashPhase = 0;
  }
  nearestCop(b) { if (b.stun > 0) return null; for (const c of this.cars) if (Math.hypot(c.x - b.x, c.z - b.z) < 4.6 && c.v < 4) return c; return null; }
  takeCar(c) { const i = this.cars.indexOf(c); if (i >= 0) this.removeCar(i); }
  get active() { return this.stars > 0; }
  boxes() { const t = this.R.info && this.R.info.track; return (t && t.boxes) || []; }
  ground(x, z) { const t = this.R.info && this.R.info.track; return t && t.terrain ? t.terrain(x, z) : 0; }

  // ---- crimes
  crime(kind, x, z) {
    const w = CRIME[kind]; if (!w) return;
    const now = performance.now(), cd = { shot: 700, run: 1500, crash: 2500, hit: 250 }[kind] || 0;
    if (cd && now - (this.crimeCd[kind] || 0) < cd) return; this.crimeCd[kind] = now;
    this.heat += w; if (this.stars > 0) this.heat = Math.max(this.heat, HEAT[this.stars - 1]);
    let s = 0; for (let i = 0; i < HEAT.length; i++) if (this.heat >= HEAT[i]) s = i + 1;
    if (s > this.stars) { const t = performance.now(); if (this.stars > 0 && t - (this.lastRise || 0) < 7000) s = this.stars; else s = this.stars + 1; if (s > this.stars) this.lastRise = t; }   // never faster than one new star per 7 s
    if (s > this.stars) { this.setStars(s); if (this.stars === 1 || !this.search) this.search = { x: x ?? this.R.me.body.x, z: z ?? this.R.me.body.z, r: this.radius() }; }
    this.sightT = Math.max(this.sightT, 0.0); this.unseenT = Math.min(this.unseenT, 0.5); this.evade = 0;
  }
  radius() { return 55 + this.stars * 22; }
  setStars(n) {
    n = clamp(n, 0, 5); if (n === this.stars) return; const up = n > this.stars; this.stars = n;
    if (up) this.R.toast && this.R.toast(n === 1 ? 'WANTED' : 'WANTED  ' + '★'.repeat(n));
    if (n === 0) { this.heat = 0; this.search = null; this.evade = 0; this.cool = 0; /* cleared */ } else if (this.search) this.search.r = this.radius();
    this.hud(true);
  }

  // ---- police cars on the avenue grid
  spawnCar(px, pz) {
    let best = null;
    for (let tries = 0; tries < 14; tries++) {
      const gx = GRID[(Math.random() * GRID.length) | 0], gz = GRID[(Math.random() * GRID.length) | 0], d = Math.hypot(gx - px, gz - pz);
      if (d < 95 || d > 210) continue; const vis = !blocked(this.boxes(), px, pz, gx, gz) && d < 140;   // do not appear in front of your nose
      if (!vis) { best = [gx, gz]; break; } if (!best) best = [gx, gz];
    }
    if (!best) return;
    const mesh = buildTrafficMesh(15); mesh.rotation.order = 'YXZ'; this.group.add(mesh);
    const horiz = Math.random() < 0.5, c = { mesh, hero: mesh.userData.hero, gx: best[0], gz: best[1], dx: horiz ? (best[0] < px ? 1 : -1) : 0, dz: horiz ? 0 : (best[1] < pz ? 1 : -1), v: 8, wheel: 0, parked: false, st: { id: 15, x: best[0], z: best[1], y: 0, yaw: 0, vx: 0, vz: 0, speed: 0, hl: 2.3, hw: 1.0, driver: 1, heavy: true }, stuck: 0, out: false, age: 0 };
    c.x = best[0] + (c.dz ? -c.dz : 0) * LANE * 0; c.z = best[1]; c.lastG = null; c.nid = NID++; this.cars.push(c);
  }
  stepCar(c, dt, tx, tz, px, pz) {
    const st = c.st;
    if (c.parked) { c.v = Math.max(0, c.v - 20 * dt); } else {
      const top = (this.stars >= 4 ? 33 : 27) * (this.seen ? 1 : 0.8);
      // blocked by something ahead (the player, another police car)? slow to its speed
      let lim = top; const fx = c.dx, fz = c.dz;
      const chk = (x, z, hl) => { const ax = x - c.x, az = z - c.z, a = ax * fx + az * fz, l = Math.abs(-ax * fz + az * fx); if (a > 0.5 && a < 11 + c.v * 0.5 && l < 2.1 + hl * 0.2) lim = Math.min(lim, Math.max(0, (a - 4.2) * 2.4)); };
      chk(px, pz, 1); for (const o of this.cars) if (o !== c) chk(o.x, o.z, 2.3); const tc = this.R.thiefCar && this.R.thiefCar(); if (tc) chk(tc.x, tc.z, 2.3);
      const t = this.R.info.trafficList; if (t) for (const q of t) chk(q.x, q.z, 2.3);
      c.v += clamp(lim - c.v, -26 * dt, 11 * dt);
      const step = c.v * dt, axisPos = c.dx ? c.x : c.z, dir = c.dx ? c.dx : c.dz;
      // the next crossing ahead
      let nextG = null; for (const g of GRID) { if ((g - axisPos) * dir > 0.001 && (nextG === null || Math.abs(g - axisPos) < Math.abs(nextG - axisPos))) nextG = g; }
      if (nextG !== null && Math.abs(nextG - axisPos) <= step + 0.01 && c.lastG !== nextG + (c.dx ? 'x' : 'z')) {
        // arrive at the crossing: pick the way that brings us closest to the target
        if (c.dx) { c.x = nextG; c.z = GRID.reduce((a, b) => (Math.abs(b - c.z) < Math.abs(a - c.z) ? b : a)); } else { c.z = nextG; c.x = GRID.reduce((a, b) => (Math.abs(b - c.x) < Math.abs(a - c.x) ? b : a)); } c.lastG = nextG + (c.dx ? 'x' : 'z');
        const cands = [[c.dx, c.dz], [-c.dz, c.dx], [c.dz, -c.dx]]; let bestD = 1e9, bd = null;
        for (const [ax, az] of cands) {
          const nx = c.x + ax * 60, nz = c.z + az * 60; if (Math.abs(nx) > EDGE + 0.5 || Math.abs(nz) > EDGE + 0.5) continue;
          const d = Math.hypot(nx - tx, nz - tz) + (ax === c.dx && az === c.dz ? -4 : 0) + Math.random() * 10; if (d < bestD) { bestD = d; bd = [ax, az]; }
        }
        if (!bd) bd = [-c.dx, -c.dz]; c.dx = bd[0]; c.dz = bd[1]; c.v = Math.min(c.v, c.dx === cands[0][0] && c.dz === cands[0][1] ? c.v : 15);
      } else { c.x += c.dx * step; c.z += c.dz * step; }
      // stay in the right-hand lane of the avenue we are on
      if (c.dx) { const gz = GRID.reduce((a, b) => (Math.abs(b - c.z) < Math.abs(a - c.z) ? b : a)); const want = gz + c.dx * LANE; c.z += (want - c.z) * Math.min(1, dt * 4); }
      else { const gx = GRID.reduce((a, b) => (Math.abs(b - c.x) < Math.abs(a - c.x) ? b : a)); const want = gx - c.dz * LANE; c.x += (want - c.x) * Math.min(1, dt * 4); }
    }
    // smooth heading
    const yaw = Math.atan2(c.dx, c.dz); let d = yaw - (c.yaw === undefined ? yaw : c.yaw); while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; c.yaw = (c.yaw === undefined ? yaw : c.yaw) + d * Math.min(1, dt * 9);
    const y = this.ground(c.x, c.z); st.x = c.x; st.z = c.z; st.y = y; st.yaw = c.yaw; st.speed = c.v; st.vx = Math.sin(c.yaw) * c.v; st.vz = Math.cos(c.yaw) * c.v; st.driver = c.parked ? -1 : 1;
    c.mesh.position.set(c.x, y, c.z); c.mesh.rotation.y = c.yaw;
    c.wheel += c.v * dt / 0.33; if (c.hero) { c.hero.spin(c.wheel); }
  }

  // ---- officers on foot
  spawnFoot(x, z) {
    const actor = new HeroActor(0, COP_LOOK); this.group.add(actor.group);
    this.foot.push({ nid: NID++, actor, x, z, yaw: 0, hp: 4, down: 0, dead: false, t: 0, shootT: rnd(0.8, 1.6), speed: 0, aim: false, bornAt: performance.now() });
  }
  stepFoot(o, dt, px, pz, onFoot, car) {
    const R = this.R;
    if (o.dead) { o.t += dt; o.actor.group.rotation.set(-Math.PI / 2, o.yaw, 0, 'YXZ'); o.actor.group.position.set(o.x, this.ground(o.x, o.z) + 0.22, o.z); o.actor.update(dt, { seated: false, speed: 0, grounded: true }); return; }
    if (o.down > 0) { o.down -= dt; o.actor.update(dt, { seated: false, speed: 0, grounded: true, stun: 1 }); o.actor.group.position.set(o.x, this.ground(o.x, o.z), o.z); return; }
    const tx = this.seen || this.unseenT < 6 ? px : this.search ? this.search.x : px, tz = this.seen || this.unseenT < 6 ? pz : this.search ? this.search.z : pz;
    const dx = tx - o.x, dz = tz - o.z, d = Math.hypot(dx, dz) || 1, ddirect = Math.hypot(px - o.x, pz - o.z);
    let sp = 0;
    o.aim = this.stars >= 2 && this.seen && ddirect < 30;
    const hold = this.stars >= 3 && this.seen && onFoot && ddirect < 11 && ddirect > 5;   // at 3+ stars they stop at pistol range and fire; below that they run in to arrest you
    if (d > 1.3 && !hold) sp = o.aim ? 3.4 : ddirect > 25 ? 6.2 : 5.2;
    if (sp > 0) {
      let nx = dx / d, nz = dz / d; const step = sp * dt;
      let mx = o.x + nx * step, mz = o.z + nz * step;
      // slide along building walls
      let hit = null; for (const b of this.boxes()) { if (b.h < 1.5) continue; if (mx > b.x0 - 0.5 && mx < b.x1 + 0.5 && mz > b.z0 - 0.5 && mz < b.z1 + 0.5) { hit = b; break; } }
      if (hit) { const cx = (hit.x0 + hit.x1) / 2, cz = (hit.z0 + hit.z1) / 2, ex = (hit.x1 - hit.x0) / 2 + 0.5, ez = (hit.z1 - hit.z0) / 2 + 0.5; const ox = ex - Math.abs(mx - cx), oz = ez - Math.abs(mz - cz); if (ox < oz) { mx = o.x; mz += Math.sign(nz || (cz > o.z ? -1 : 1)) * step * 0.7; } else { mz = o.z; mx += Math.sign(nx || (cx > o.x ? -1 : 1)) * step * 0.7; } }
      o.x = mx; o.z = mz; o.yaw = Math.atan2(nx, nz);
    } else { o.yaw = Math.atan2(px - o.x, pz - o.z); }
    o.speed += (sp - o.speed) * Math.min(1, dt * 10);
    o.actor.group.rotation.set(0, o.yaw, 0, 'YXZ'); o.actor.group.position.set(o.x, this.ground(o.x, o.z), o.z);
    o.actor.update(dt, { seated: false, speed: o.speed, grounded: true, weapon: o.aim ? 'pistol' : undefined, aiming: o.aim, crouch: false });
    // shooting
    if (o.aim && this.stars >= 2) {
      o.shootT -= dt;
      if (o.shootT <= 0) {
        o.shootT = rnd(0.9, 1.7) / (this.stars >= 4 ? 1.5 : 1); const ty = (car ? 1.0 : 1.2) + this.ground(px, pz), hit = Math.random() < 0.28 + this.stars * 0.05;
        if (R.copShot) R.copShot(o.x + Math.sin(o.yaw) * 0.6, this.ground(o.x, o.z) + 1.4, o.z + Math.cos(o.yaw) * 0.6, px, ty, pz, hit);
      }
    }
  }

  // ---- called from fire() / punch(): returns the distance of a hit on a police car / officer (or -1)
  shoot(ox, oz, fx, fz, range, dmg) {
    let best = -1;
    for (const o of this.foot) {
      if (o.dead) continue; const dx = o.x - ox, dz = o.z - oz, a = dx * fx + dz * fz, l = Math.abs(-dx * fz + dz * fx);
      if (a > 0.6 && a < range && l < 0.55 && (best < 0 || a < best)) { best = a; this._tgt = { foot: o }; }
    }
    for (const c of this.cars) {
      const dx = c.x - ox, dz = c.z - oz, a = dx * fx + dz * fz; if (a < 0.6 || a > range) continue; const f = Math.sin(c.yaw), g = Math.cos(c.yaw);
      for (let d = Math.max(0.3, a - 3); d < Math.min(range, a + 0.3); d += 0.15) { const rx = ox + fx * d - c.x, rz = oz + fz * d - c.z, lz = rx * f + rz * g, lx = -rx * g + rz * f; if (Math.abs(lz) < 2.35 && Math.abs(lx) < 1.05) { if (best < 0 || d < best) { best = d; this._tgt = { car: c }; } break; } }
    }
    if (best < 0) return -1;
    const t = this._tgt;
    if (t.foot) {
      const o = t.foot; o.hp -= dmg * 1.2; this.R.particles.emit(o.x, 1.2 + this.ground(o.x, o.z), o.z, 8, { color: '#ff5a4a', speed: 3, up: 2, life: 0.35, size: 0.2 });
      if (o.hp <= 0) { o.dead = true; o.t = 0; this.crime('copKill', o.x, o.z); this.R.earn && this.R.earn(0); } else { o.down = Math.max(o.down, 0.5); this.crime('copHit', o.x, o.z); }
    } else { this.crime('car', t.car.x, t.car.z); this.R.particles.emit(ox + fx * best, 1.0, oz + fz * best, 5, { color: '#ffd23f', speed: 4, up: 2, life: 0.25, size: 0.14 }); }
    this.seen = true; this.unseenT = 0;
    return best;
  }
  melee(x, z, fx, fz) {
    for (const o of this.foot) {
      if (o.dead) continue; const dx = o.x - x, dz = o.z - z, d = Math.hypot(dx, dz); if (d > 1.9 || (dx * fx + dz * fz) / (d || 1) < 0.3) continue;
      o.hp -= 1; o.down = Math.max(o.down, 1.1); this.R.particles.emit(o.x, 1.3, o.z, 8, { color: '#ffffff', speed: 4, up: 2, life: 0.3, size: 0.25 });
      if (o.hp <= 0) { o.dead = true; o.t = 0; this.crime('copKill', o.x, o.z); } else this.crime('copHit', o.x, o.z); return true;
    }
    return false;
  }

  // ---- the main loop
  update(dt, px, pz, car) {
    const R = this.R, onFoot = !car, speed = car ? Math.abs(car.speed) : Math.hypot(R.me.body.vx || 0, R.me.body.vz || 0);
    this.flashPhase += dt;
    if (this.bannerT > 0) { this.bannerT -= dt; if (this.bannerT <= 0) this.hideBanner(); }
    if (this.stars === 0) { if (this.cars.length || this.foot.length) { this.cool += dt; this.clearAll(false, dt); } else this.cool = 0; this.hud(false); this.siren(px, pz, dt); return; }

    // can anybody see me?
    this.sightT -= dt;
    if (this.sightT <= 0) {
      this.sightT = 0.22; let s = false; const bx = this.boxes();
      for (const c of this.cars) { const d = Math.hypot(c.x - px, c.z - pz); if (d < 85 && !blocked(bx, c.x, c.z, px, pz)) { s = true; break; } }
      if (!s) for (const o of this.foot) { if (o.dead) continue; const d = Math.hypot(o.x - px, o.z - pz); if (d < 70 && !blocked(bx, o.x, o.z, px, pz)) { s = true; break; } }
      this.seen = s;
    }
    if (this.seen) {
      this.unseenT = 0; this.evade = 0; if (!this.search) this.search = { x: px, z: pz, r: this.radius() };
      this.search.x = px; this.search.z = pz; this.search.r = this.radius();
    } else {
      this.unseenT += dt;
      if (this.unseenT > 2.2 && this.search) {   // searching: out of the circle and unseen = the evade bar fills
        const out = Math.hypot(px - this.search.x, pz - this.search.z) > this.search.r;
        this.evade += dt * (out ? 1 / (6.5 + this.stars * 0.5) : 0);
        if (!out) this.evade = Math.max(0, this.evade - dt * 0.15);
        if (this.evade >= 1) { this.evade = 0; this.heat = this.stars > 1 ? HEAT[this.stars - 2] : 0; this.setStars(this.stars - 1); if (this.stars > 0) this.search = { x: this.search.x, z: this.search.z, r: this.radius() }; }
      }
    }
    // where do the police want to go?
    const hunt = this.seen || this.unseenT < 5, tx = hunt ? px : this.search ? this.search.x : px, tz = hunt ? pz : this.search ? this.search.z : pz;

    // spawn / update
    this.spawnT -= dt; const wantCars = CARS[this.stars];
    if (this.spawnT <= 0 && this.cars.filter((c) => !c.parked).length < wantCars && this.cars.length < wantCars + 2) { this.spawnT = 3.2; this.spawnCar(px, pz); }
    const q = R.isTouch ? 0.75 : 1;
    for (let i = this.cars.length - 1; i >= 0; i--) {
      const c = this.cars[i]; c.age += dt; const d = Math.hypot(c.x - px, c.z - pz);
      this.stepCar(c, dt, tx, tz, px, pz);
      // arrived: the officers get out
      if (!c.parked && d < (onFoot ? 20 : 11) && (onFoot || speed < 3) && this.foot.length < Math.ceil(FOOT[this.stars] * q) + 1) {
        c.parked = true; for (let k = 0; k < (this.stars >= 3 ? 2 : 1); k++) if (this.foot.length < Math.ceil(FOOT[this.stars] * q) + 1) this.spawnFoot(c.x + Math.cos(c.yaw) * (k ? -2.2 : 2.2) , c.z - Math.sin(c.yaw) * (k ? -2.2 : 2.2));
      }
      if (c.parked && !this.foot.some((o) => !o.dead && Math.hypot(o.x - c.x, o.z - c.z) < 30) && d > 25) { c.parked = false; c.v = 0; }   // the officers are gone: drive on
      if (d > 360 || c.age > 400) { this.removeCar(i); }
    }
    for (let i = this.foot.length - 1; i >= 0; i--) {
      const o = this.foot[i]; this.stepFoot(o, dt, px, pz, onFoot, car);
      if (o.dead && o.t > 9) { this.group.remove(o.actor.group); o.actor.dispose(); this.foot.splice(i, 1); continue; }
      // run over by the player's car
      if (car && !o.dead && o.down <= 0 && speed > 6) { const dx = o.x - car.x, dz = o.z - car.z, f = Math.sin(car.yaw), g = Math.cos(car.yaw), lz = dx * f + dz * g, lx = -dx * g + dz * f; if (Math.abs(lz) < 2.5 && Math.abs(lx) < 1.3) { o.hp -= 3; o.down = 2.2; R.particles.emit(o.x, 1, o.z, 10, { color: '#ff5a4a', speed: 4, up: 3, life: 0.4, size: 0.22 }); if (o.hp <= 0) { o.dead = true; o.t = 0; this.crime('copKill', o.x, o.z); } else this.crime('copHit', o.x, o.z); } }
    }

    // arrest
    let near = false;
    if (onFoot) { for (const o of this.foot) if (!o.dead && o.down <= 0 && Math.hypot(o.x - px, o.z - pz) < 1.9) { near = true; break; } }
    else if (speed < 3.2) { for (const c of this.cars) if (Math.hypot(c.x - px, c.z - pz) < 5.2) { near = true; break; } if (!near) for (const o of this.foot) if (!o.dead && o.down <= 0 && Math.hypot(o.x - px, o.z - pz) < 3.2) { near = true; break; } }
    this.bust = near ? this.bust + dt / (onFoot ? 1.5 : 2.0) : Math.max(0, this.bust - dt * 0.9);
    if (this.bust >= 1) { if (OPT.invincible) this.bust = 0.99; else { this.busted(); return; } }
    this.hud(true); this.siren(px, pz, dt);
  }
  // the patrol-car siren: only cop CARS make it (officers on foot are silent). It fades with the distance to the nearest patrol car, fades more when you
  // reach the edge of the search circle, more again outside it, and is gone once you are SIREN_SAFE metres past the circle.
  siren(px, pz, dt = 0.016) {
    let d = 1e9; if (this.stars > 0) for (const c of this.cars) d = Math.min(d, Math.hypot(c.x - px, c.z - pz));
    let v = d < 190 ? clamp(1 - d / 190, 0, 1) ** 1.3 : 0;
    if (v > 0 && this.search) {
      const dc = Math.hypot(px - this.search.x, pz - this.search.z), r = this.search.r;
      v *= dc < r * 0.7 ? 1 : dc < r ? 1 - 0.45 * (dc - r * 0.7) / (r * 0.3) : 0.55 * Math.max(0, 1 - (dc - r) / SIREN_SAFE) ** 1.5;
    }
    this.sirV = (this.sirV || 0) + (v - (this.sirV || 0)) * Math.min(1, dt * 3);   // never an abrupt cut: the volume glides
    A.sirenFar(this.sirV < 0.015 ? 0 : this.sirV);
  }
  removeCar(i) { const c = this.cars[i]; this.group.remove(c.mesh); c.mesh.traverse((o) => { if (o.isMesh && o.geometry) o.geometry.dispose(); }); this.cars.splice(i, 1); }
  clearAll(now, dt) {
    // stars are gone: the patrol cars drive off and the officers walk away; they vanish once they are away from you
    const p = this.R.me.body;
    for (let i = this.cars.length - 1; i >= 0; i--) { const c = this.cars[i], d = Math.hypot(c.x - p.x, c.z - p.z); c.parked = false; this.stepCar(c, dt || 0.016, c.x + c.dx * 200, c.z + c.dz * 200, 1e5, 1e5); if (now || d > 130 || (this.cool > 7 && d > 45)) this.removeCar(i); }
    for (let i = this.foot.length - 1; i >= 0; i--) { const o = this.foot[i], d = Math.hypot(o.x - p.x, o.z - p.z); o.speed = 0; if (now || d > 45 || (this.cool > 7 && d > 22) || this.cool > 22) { this.group.remove(o.actor.group); o.actor.dispose(); this.foot.splice(i, 1); } else if (!o.dead) { o.actor.group.position.set(o.x, this.ground(o.x, o.z), o.z); o.actor.update(dt || 0.016, { seated: false, speed: 0, grounded: true }); } }
  }
  busted() {
    const R = this.R, W = R.wallet; this.bust = 0;
    let fine = 0; if (W) { fine = Math.min(W.money, Math.max(40, Math.round(W.money * 0.06 / 10) * 10)); if (fine) W.add(-fine, 'fine'); }
    this.showBanner('BUSTED', fine ? '-$' + fine : '');
    A.sirenFar(0); this.sirV = 0; this.heat = 0; this.stars = 0; this.search = null; this.evade = 0; this.seen = false; this.unseenT = 99;
    this.clearAll(true);
    if (R.drive) R.toggleCar(true);
    const b = R.me.body, z = POLICE.zone; b.x = z.x; b.z = z.z + 5; b.y = 0.25; b.vx = b.vz = b.vy = 0; b.stun = 0; if (R.pointCamera) R.pointCamera(Math.PI);
    this.hud(true);
  }
  showBanner(t, sub) { let el = document.getElementById('busted'); if (!el) return; el.innerHTML = '<b>' + t + '</b>' + (sub ? '<i>' + sub + '</i>' : ''); el.classList.add('on'); this.bannerT = 2.6; }
  hideBanner() { const el = document.getElementById('busted'); if (el) el.classList.remove('on'); }

  // ---- HUD: five stars, solid gold while they see you, flashing red / blue while they search, a bar for the evade progress / the arrest
  hud(on) {
    const el = this.el; if (!el) return;
    if (!on || this.stars === 0) { if (!el.classList.contains('hidden')) el.classList.add('hidden'); if (this.elBust) this.elBust.classList.remove('on'); return; }
    el.classList.remove('hidden');
    const searching = !this.seen && this.unseenT > 2.2;
    if (this.lastStars !== this.stars) { this.lastStars = this.stars; el.querySelectorAll('.st').forEach((s, i) => s.classList.toggle('lit', i < this.stars)); }
    el.classList.toggle('search', searching); el.classList.toggle('seen', !searching);
    const bar = el.querySelector('.ev i'); if (bar) bar.style.width = Math.round((searching ? this.evade : 0) * 100) + '%';
    if (this.elBust) { this.elBust.classList.toggle('on', this.bust > 0.02); const f = this.elBust.querySelector('i'); if (f) f.style.width = Math.round(this.bust * 100) + '%'; }
  }
  // what the maps draw: police blips + the search circle
  mapInfo() {
    if (this.stars === 0) return null;
    const searching = !this.seen && this.unseenT > 2.2;
    return { circle: this.search ? { x: this.search.x, z: this.search.z, r: this.search.r, searching } : null, cops: this.cars.map((c) => ({ x: c.x, z: c.z, car: true })).concat(this.foot.filter((o) => !o.dead).map((o) => ({ x: o.x, z: o.z }))), phase: Math.floor(this.flashPhase * 4) % 2 };
  }
  states() { return this.cars.filter((c) => !c.parked || true).map((c) => c.st); }
  reset() { this.heat = 0; this.stars = 0; this.search = null; this.evade = 0; this.bust = 0; this.seen = false; this.unseenT = 99; this.clearAll(true); this.hud(false); this.hideBanner(); A.sirenFar(0); this.sirV = 0; }
  dispose() { this.reset(); this.R.scene.remove(this.group); }
}
