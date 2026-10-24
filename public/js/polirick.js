// MISSION 5 - POLI RICKSHAW: a police officer is at HANBAL'S HOME, zombies are coming.  Drive him in the auto rickshaw to the POLICE STATION.
// The zombies hunt the rickshaw (every grab hurts it; at 0 it is destroyed), the officer (on foot he can be bitten) and the players.  Run them over, shoot them, outdrive them.
// A director like zombie.js (no DOM / three.js: it runs on the server in multiplayer, in the browser in single player): the players only draw what it broadcasts ('m_zb' with a 'po' block)
// and the player who drives the rickshaw reports where it is ('m_pr').
import { HOMES, homeW, POLICE, PARK } from './gta.js';
import { ZombieDirector, PLAYER_HP, Z_HP, DEAD_KEEP, BITE_R, BITE_EVERY, DOWN_S, HOME, SPAWN_LOCAL } from './zombie.js';

const hyp = Math.hypot;
export const POLI_BRIEF_MS = 5000;
export const RICK_IDX = 31;   // the auto rickshaw in gtaCars()
export const RICK_HOME = (() => { const h = HOMES[3], p = homeW(h, 1.8, 6.6); return { x: p.x, z: p.z, yaw: h.yaw }; })();   // where it lives (Dawood's yard)
export const RICK_START = (() => { const p = homeW(HOME, -3.4, 7.4); return { x: p.x, z: p.z, yaw: HOME.yaw }; })();            // in front of Hanbal's house for the mission
export const OFFICER_START = (() => { const p = homeW(HOME, -0.8, 5.6); return { x: p.x, z: p.z, yaw: HOME.yaw }; })();
export const STATION = POLICE.zone;   // { x, z, r }
// the way to the station (the z = -60 avenue east, then north up x = 30): where the ambushes are laid
export const ROUTE = [[RICK_START.x, RICK_START.z], [-100, -62], [-90, -61.2], [25, -61.2], [30, -65], [STATION.x, STATION.z]];
// 1st stop: the STUNT PARK (the gate of the pad on the coast highway), 2nd stop: the police station.  Going to the station first fails the mission.
export const PARKSTOP = { x: PARK.gate.x, z: PARK.gate.z, r: 14 };
export const RICK_HP = 100, OFFICER_HP = 100, GRAB = 9, GRAB_R = 1.8, OFF_R = 1.1, OFF_BITE = 14;
const r2 = (v) => Math.round(v * 100) / 100;

// distance along the route of the point of the route nearest to (x, z), and the route's total length
export function routeAt(x, z) {
  let best = 1e9, at = 0, acc = 0;
  for (let i = 0; i + 1 < ROUTE.length; i++) {
    const a = ROUTE[i], b = ROUTE[i + 1], dx = b[0] - a[0], dz = b[1] - a[1], L = hyp(dx, dz) || 1, t = Math.max(0, Math.min(1, ((x - a[0]) * dx + (z - a[1]) * dz) / (L * L))), px = a[0] + dx * t, pz = a[1] + dz * t, d = hyp(x - px, z - pz);
    if (d < best) { best = d; at = acc + L * t; } acc += L;
  }
  return { at, len: acc, off: best };
}
export function routePoint(s) {
  let acc = 0;
  for (let i = 0; i + 1 < ROUTE.length; i++) { const a = ROUTE[i], b = ROUTE[i + 1], L = hyp(b[0] - a[0], b[1] - a[1]) || 1; if (s <= acc + L || i === ROUTE.length - 2) { const t = Math.max(0, Math.min(1, (s - acc) / L)); return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, Math.atan2(b[0] - a[0], b[1] - a[1])]; } acc += L; }
  return ROUTE[ROUTE.length - 1].concat(0);
}

export class PoliDirector extends ZombieDirector {
  reset() {
    super.reset();
    this.rick = { x: RICK_START.x, z: RICK_START.z, yaw: RICK_START.yaw, sp: 0, drv: 0, hp: RICK_HP, carhp: 100, at: 0 };
    this.off = { x: OFFICER_START.x, z: OFFICER_START.z, yaw: OFFICER_START.yaw, hp: OFFICER_HP, aboard: false };
    this.waveT = 0; this.ambT = 0; this.level = 0; this.homeLeft = 0; this.stage = 'home'; this.parked = false; this.shotT = 0;
  }
  start(members) { super.start(members); this.round = 1; }
  // the driver's report: where the rickshaw is, how fast, and the car's own health
  setRick(id, d) {
    if (!this.members.includes(id) || this.ended || !d) return false;
    const n = (v, lo, hi) => (typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi);
    const R = this.rick; if (!n(d.x, -2000, 2000) || !n(d.z, -2000, 2000)) return false;
    R.x = d.x; R.z = d.z; if (n(d.yaw, -10, 10)) R.yaw = d.yaw; R.sp = n(d.sp, 0, 80) ? d.sp : 0; R.drv = d.drv ? 1 : 0; if (n(d.hp, -50, 200)) R.carhp = d.hp;
    if (this.off.aboard) { this.off.x = R.x; this.off.z = R.z; this.off.yaw = R.yaw; }
    return true;
  }
  spawnAt(x, z, v) {
    const q = this.rnd(), arm = q < 0.3 ? 1 : q < 0.55 ? 2 : 0;   // 1 = a bat (longer reach, harder hits), 2 = a pistol (shoots from a distance)
    const z0 = { id: this.nextId++, x, z, yaw: Math.atan2(this.rick.x - x, this.rick.z - z), hp: Z_HP, vm: 0.88 + this.rnd() * 0.28, v, arm, atk: 0, hurt: 0, dead: 0, att: 0 };
    this.zs.push(z0); this.say('zspawn', z0.id);
  }
  spawnHome(v) { const sp = SPAWN_LOCAL[Math.floor(this.rnd() * SPAWN_LOCAL.length)], p = homeW(HOME, sp[0] + (this.rnd() - 0.5) * 3, sp[1] + (this.rnd() - 0.5) * 3); this.spawnAt(p.x, p.z, v); }
  // an ambush on the road ahead of the rickshaw (or beside it when it is still at home)
  ambush(n, v) {
    const R = this.rick, fx = Math.sin(R.yaw), fz = Math.cos(R.yaw), dist = 26 + this.rnd() * 16;   // on the road ahead of where the rickshaw is pointing (it is on a road, so is the spot)
    for (let i = 0; i < n; i++) { const side = (this.rnd() - 0.5) * 7, along = dist + (this.rnd() - 0.5) * 8; this.spawnAt(R.x + fx * along - fz * side, R.z + fz * along + fx * side, v); }
  }
  tick(dt) {
    if (this.ended) return;
    this.T += dt; this.stT += dt;
    for (const id of this.members) { if (this.down[id] > 0) { this.down[id] -= dt; if (this.down[id] <= 0) { this.down[id] = 0; this.hp[id] = PLAYER_HP; this.say('zup', id); } } }
    const R = this.rick, O = this.off;
    if (this.st === 'brief') { if (this.T >= POLI_BRIEF_MS / 1000) { this.st = 'play'; this.stT = 0; this.homeLeft = 6; this.waveT = 1.2; this.say('pgo'); } }
    else if (this.st === 'play') {
      this.dmin = hyp(R.x - STATION.x, R.z - STATION.z);
      // boarding: a player drives the rickshaw up to the officer
      if (!O.aboard && R.drv && hyp(R.x - O.x, R.z - O.z) < 5.5 && R.hp > 0 && O.hp > 0) { O.aboard = true; this.stage = 'route'; this.ambT = 5; this.level = 0; this.say('pboard'); }
      if (!O.aboard) {   // at home: the first zombies come out of the street one by one, then a few more every now and then
        this.waveT -= dt;
        if (this.waveT <= 0) { const live = this.alive(); if (this.homeLeft > 0) { this.spawnHome(1.7 + this.level * 0.1); this.homeLeft--; this.waveT = 1.1; } else { this.waveT = 14; this.level = Math.min(6, this.level + 1); this.homeLeft = live > 10 ? 0 : 3 + this.level; this.say('pwave'); } }
      } else {   // on the road: ambushes ahead, a bit more every time
        this.ambT -= dt; if (this.ambT <= 0) { this.ambT = 6 + this.rnd() * 3.5; this.level = Math.min(7, this.level + 1); if (this.alive() < 16) this.ambush(Math.min(5, 2 + (this.level >> 1)), 2.6 + this.level * 0.18); this.say('pamb'); }
      }
      this.moveZ(dt);
      // the end
      if (R.hp <= 0) { this.end(false, 'rick'); return; }
      if (O.hp <= 0) { this.end(false, 'officer'); return; }
      if (R.carhp <= 0 && R.drv !== undefined && O.aboard) { this.end(false, 'wreck'); return; }
      if (O.aboard && !this.parked && hyp(R.x - PARKSTOP.x, R.z - PARKSTOP.z) < PARKSTOP.r) { this.parked = true; this.say('ppark'); }
      if (O.aboard && hyp(R.x - STATION.x, R.z - STATION.z) < STATION.r) { if (!this.parked) { this.end(false, 'early'); return; } this.say('parrive'); this.end(true); return; }
    }
    this.snapT += dt; if (this.snapT >= 0.1) { this.snapT = 0; this.push(); }
  }
  // the undead: the nearest of {a player within 16 m, the rickshaw, the officer on foot}; the rickshaw / officer are hurt by grabs (every BITE_EVERY seconds per zombie)
  moveZ(dt) {
    const R = this.rick, O = this.off, zs = this.zs;
    for (const z of zs) {
      if (z.hp <= 0) { z.dead -= dt; continue; }
      if (z.hurt > 0) z.hurt -= dt;
      const pl = this.playersNear(z.x, z.z); let tx = R.x, tz = R.z, kind = 'rick', best = hyp(R.x - z.x, R.z - z.z) * (R.hp > 0 ? 0.85 : 9);
      if (!O.aboard) { const d = hyp(O.x - z.x, O.z - z.z); if (d < best) { best = d; tx = O.x; tz = O.z; kind = 'off'; } }
      if (pl.p && pl.d < 16 && pl.d < best + 4) { best = pl.d; tx = pl.p.x; tz = pl.p.z; kind = 'pl'; }
      const dx = tx - z.x, dz = tz - z.z, d = hyp(dx, dz) || 1, reach = (kind === 'pl' ? BITE_R : kind === 'off' ? OFF_R : GRAB_R) + (z.arm === 1 ? 0.9 : 0), mul = z.arm === 1 ? 1.6 : 1;
      if (z.arm === 2 && d < 13 && d > 3) {   // a pistol zombie stops and shoots
        z.att = 0; z.yaw = Math.atan2(dx, dz); z.atk -= dt;
        if (z.atk <= 0) {
          z.atk = 1.7 + this.rnd() * 0.8; const hit = this.rnd() < 0.55, kc = kind === 'rick' ? 1 : kind === 'off' ? 2 : 3; this.say('zshot', z.id, kc);
          if (hit) { if (kind === 'pl') { const dmg = 8 + (this.level >> 1); this.hp[pl.id] = Math.max(0, (this.hp[pl.id] === undefined ? PLAYER_HP : this.hp[pl.id]) - dmg); if (this.hp[pl.id] <= 0) { this.down[pl.id] = DOWN_S; this.say('zdown', pl.id); } } else if (kind === 'off') { O.hp = Math.max(0, O.hp - 8); this.say('poff', Math.round(O.hp)); } else { R.hp = Math.max(0, R.hp - 6); this.say('prick', Math.round(R.hp)); } }
        }
        continue;
      }
      if (d < reach) {
        z.att = 1; z.yaw = Math.atan2(dx, dz); z.atk -= dt;
        if (z.atk <= 0) {
          z.atk = BITE_EVERY + 0.3;
          if (kind === 'pl') { const dmg = Math.round((10 + (this.level >> 1) * 2) * mul); this.hp[pl.id] = Math.max(0, (this.hp[pl.id] === undefined ? PLAYER_HP : this.hp[pl.id]) - dmg); this.say('zbite', z.id, pl.id); if (this.hp[pl.id] <= 0) { this.down[pl.id] = DOWN_S; this.say('zdown', pl.id); } }
          else if (kind === 'off') { O.hp = Math.max(0, O.hp - OFF_BITE * mul); this.say('zbite', z.id, 0); this.say('poff', Math.round(O.hp)); }
          else { R.hp = Math.max(0, R.hp - GRAB * mul); this.say('zbite', z.id, 0); this.say('prick', Math.round(R.hp)); }
        }
        continue;
      }
      z.att = 0; z.atk = Math.min(z.atk, 0.45);
      const sp = (z.v || 1) * z.vm * (z.hurt > 0 ? 0.35 : 1) * (z.hp <= 35 ? 0.55 : 1);
      z.x += dx / d * sp * dt; z.z += dz / d * sp * dt;
      let da = Math.atan2(dx, dz) - z.yaw; da = Math.atan2(Math.sin(da), Math.cos(da)); z.yaw += da * Math.min(1, dt * 7);
    }
    for (let i = 0; i < zs.length; i++) { const a = zs[i]; if (a.hp <= 0) continue; for (let j = i + 1; j < zs.length; j++) { const b = zs[j]; if (b.hp <= 0) continue; const dx = b.x - a.x, dz = b.z - a.z, d = hyp(dx, dz); if (d < 0.7 && d > 1e-4) { const k = (0.7 - d) * 0.5 / d; a.x -= dx * k; a.z -= dz * k; b.x += dx * k; b.z += dz * k; } } }
    // the ones left far behind on the road go home
    this.zs = zs.filter((z) => (z.hp > 0 || z.dead > 0) && !(O.aboard && hyp(z.x - R.x, z.z - R.z) > 120));
  }
  push() {
    const hp = {}; for (const id of this.members) hp[id] = Math.round(this.hp[id] === undefined ? PLAYER_HP : this.hp[id]);
    const dn = {}; for (const id of this.members) if (this.down[id] > 0) dn[id] = 1;
    const R = this.rick, O = this.off;
    const msg = { t: 'm_zb', r: 1, q: this.alive(), s: this.st, hp, dn, z: this.zs.map((z) => [z.id, r2(z.x), r2(z.z), r2(z.yaw), z.hp <= 0 ? 2 : z.att ? 1 : 0, Math.round(z.hp), z.arm || 0]), ev: this.ev, k: this.kills, tm: this.stT,
      po: { o: [r2(O.x), r2(O.z), r2(O.yaw), Math.round(O.hp), O.aboard ? 1 : 0], r: [r2(R.x), r2(R.z), Math.round(R.hp)], pk: this.parked ? 1 : 0 } };
    this.ev = []; this.onSnap(msg);
  }
}
export { DEAD_KEEP };
