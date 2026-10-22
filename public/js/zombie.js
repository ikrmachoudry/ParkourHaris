// MISSION 4 - ZOMBIE ATTACK: the director that plays the whole story (no DOM / three.js: it runs on the server in multiplayer and in the browser in single player;
// every player only DRAWS what it broadcasts).
//
//  The undead are coming for HANBAL'S HOME.  Protect it for 5 rounds: if a single zombie gets through the FRONT DOOR or into the GARAGE the mission fails.
//  Each round brings more zombies, and they walk a little faster.  A zombie chases the nearest player (within AGGRO metres), otherwise it walks to the house.
//  A bitten player is knocked down at 0 HP and gets up again at the front gate a few seconds later (that never fails the mission).
//  The players' guns / bat / fists / grenades hit the zombies: the client tells the director ('m_zh') and the director keeps every zombie's health.
import { HOMES, homeW, homeL } from './gta.js';

const hyp = Math.hypot;
export const ZOMBIE_BRIEF_MS = 5000;
export const ROUND_COUNT = 5;
// [zombies in the round, speed m/s]: few and slow at first (a brisk walk would catch nobody), a few more and a bit faster every round
export const ROUNDS = [{ n: 6, v: 0.95 }, { n: 9, v: 1.15 }, { n: 12, v: 1.35 }, { n: 15, v: 1.6 }, { n: 19, v: 1.85 }];
export const Z_HP = 100, PLAYER_HP = 100, AGGRO = 17, BITE_R = 1.15, BITE_EVERY = 1.1, DOWN_S = 5, INTRO_S = 3, CLEAR_S = 6, DEAD_KEEP = 1.7;
export const HOME = HOMES[2];   // Hanbal's house (yaw 0: the front door faces +z)
export const HOME_RUN = { door: 3.4, garage: -3.3 };   // local x of the middle of the front door gap (2.7..4.1) and of the garage opening (-5.5..-1.1)
// where the zombies come out (house-local x, z; +z = the street in front): every one of these was checked to have a clear straight line to both openings
export const SPAWN_LOCAL = [[-24, 8], [-39, 23], [-27, 29], [-21, 29], [-15, 38], [-3, 29], [6, 29], [12, 26], [21, 26], [33, 26], [39, 14], [36, 8], [-33, 20], [-30, 41], [-21, 47], [0, 29], [9, 44], [18, 26], [27, 17], [42, 29], [-42, 14], [-12, 35], [15, 29], [30, 8]];
export const homeSpawnPos = (seat) => homeW(HOME, 2.2 + (seat % 4) * 1.1, 4.6 + Math.floor(seat / 4) * 1.2);   // where a player stands at the start and gets up again after a knock-down
// the outer wall of the house (zombie centres are kept outside it, except through the two openings)
const WALL = { x0: -6.25, x1: 6.25, z0: -7.5, z1: 1.45 }, GAPS = [[2.95, 3.85], [-5.25, -1.35]], IN_Z = 1.0;
const r2 = (v) => Math.round(v * 100) / 100;

export class ZombieDirector {
  // getP(id) -> { x, y, z, a }; onEnd(ok, why); onEv(key, extra); onSnap(msg)
  constructor({ getP, onEnd, onEv, onSnap }) { this.getP = getP; this.onEnd = onEnd || (() => {}); this.onEv = onEv || (() => {}); this.onSnap = onSnap || (() => {}); this.members = []; this.reset(); }
  reset() {
    this.T = 0; this.st = 'brief'; this.stT = 0; this.round = 0; this.zs = []; this.nextId = 1; this.left = 0; this.spT = 0; this.hp = {}; this.down = {}; this.kills = 0; this.ended = false; this.snapT = 0; this.ev = []; this.seed = 7777; this.dmin = 0;
  }
  rnd() { this.seed = (this.seed * 1664525 + 1013904223) >>> 0; return this.seed / 4294967296; }
  start(members) { this.members = [...members]; this.reset(); for (const id of this.members) this.hp[id] = PLAYER_HP; }
  end(ok, why) { if (this.ended) return; this.ended = true; this.st = ok ? 'done' : 'fail'; this.push(); this.onEnd(ok, why); }
  say(k, a, b) { this.ev.push([k, a === undefined ? 0 : a, b === undefined ? 0 : b]); }
  alive() { let n = 0; for (const z of this.zs) if (z.hp > 0) n++; return n; }
  // a player reports a hit on zombie zid (bullet, bat, fist or grenade)
  hit(id, zid, dmg) {
    if (!this.members.includes(id) || this.st === 'done' || this.st === 'fail') return false;
    const z = this.zs.find((q) => q.id === zid); if (!z || z.hp <= 0) return false;
    dmg = Math.max(1, Math.min(200, +dmg || 0)); z.hp -= dmg; z.hurt = 0.25;
    if (z.hp <= 0) { z.hp = 0; z.dead = DEAD_KEEP; this.kills++; this.say('zdie', z.id, id); } else this.say('zhit', z.id, id);
    return true;
  }
  newRound() {
    this.round++; const R = ROUNDS[this.round - 1]; this.left = R.n; this.spT = 1.2; this.st = 'intro'; this.stT = 0;
    for (const id of this.members) this.hp[id] = Math.min(PLAYER_HP, (this.hp[id] || 0) + (this.round > 1 ? 50 : 100));   // a breather heals half
    this.say('zround', this.round, R.n);
  }
  spawn() {
    const R = ROUNDS[this.round - 1], sp = SPAWN_LOCAL[Math.floor(this.rnd() * SPAWN_LOCAL.length)], jx = (this.rnd() - 0.5) * 3, jz = (this.rnd() - 0.5) * 3, p = homeW(HOME, sp[0] + jx, sp[1] + jz);
    const z = { id: this.nextId++, x: p.x, z: p.z, yaw: Math.atan2(HOME.x - p.x, HOME.z - p.z), hp: Z_HP, vm: 0.88 + this.rnd() * 0.28, door: this.rnd() < 0.5 ? 'door' : 'garage', atk: 0, hurt: 0, dead: 0, att: 0 };
    void R; this.zs.push(z); this.say('zspawn', z.id);
  }
  playersNear(x, z) { let best = 1e9, bp = null, bid = -1; for (const id of this.members) { if (this.down[id] > 0) continue; const P = this.getP(id); if (!P) continue; const d = hyp(P.x - x, P.z - z); if (d < best) { best = d; bp = P; bid = id; } } return { d: best, p: bp, id: bid }; }
  tick(dt) {
    if (this.ended) return;
    this.T += dt; this.stT += dt;
    let dm = 1e9; for (const id of this.members) { const P = this.getP(id); if (P) dm = Math.min(dm, hyp(P.x - HOME.x, P.z - HOME.z)); } this.dmin = dm < 1e8 ? dm : 0;
    // players: get up again after a knock-down
    for (const id of this.members) { if (this.down[id] > 0) { this.down[id] -= dt; if (this.down[id] <= 0) { this.down[id] = 0; this.hp[id] = PLAYER_HP; this.say('zup', id); } } }
    if (this.st === 'brief') { if (this.T >= ZOMBIE_BRIEF_MS / 1000) this.newRound(); }
    else if (this.st === 'intro') { if (this.stT >= INTRO_S) { this.st = 'fight'; this.stT = 0; } }
    else if (this.st === 'fight') {
      this.spT -= dt;
      if (this.left > 0 && this.spT <= 0) { this.spawn(); this.left--; this.spT = Math.max(0.55, 1.5 - this.round * 0.14); }
      if (this.left <= 0 && this.alive() === 0) {
        this.say('zclear', this.round);
        if (this.round >= ROUND_COUNT) { this.end(true); return; }
        this.st = 'clear'; this.stT = 0;
      }
    } else if (this.st === 'clear') { if (this.stT >= CLEAR_S) this.newRound(); }
    this.moveZombies(dt);
    this.snapT += dt; if (this.snapT >= 0.1) { this.snapT = 0; this.push(); }
  }
  moveZombies(dt) {
    const R = ROUNDS[Math.max(0, this.round - 1)] || ROUNDS[0], zs = this.zs;
    for (const z of zs) {
      if (z.hp <= 0) { z.dead -= dt; continue; }
      if (z.hurt > 0) z.hurt -= dt;
      const pl = this.playersNear(z.x, z.z); let tx, tz, chase = false;
      if (pl.p && pl.d < AGGRO) { tx = pl.p.x; tz = pl.p.z; chase = true; }
      else { const l = homeL(HOME, z.x, z.z), gx = HOME_RUN[z.door]; const out = homeW(HOME, gx, 3.0), inn = homeW(HOME, gx, -1.5); const near = l.z < 3.4 && Math.abs(l.x - gx) < 0.9; if (near) { tx = inn.x; tz = inn.z; } else { tx = out.x; tz = out.z; } }
      let dx = tx - z.x, dz = tz - z.z; const d = hyp(dx, dz) || 1;
      if (chase && d < BITE_R) {   // in reach: bite
        z.att = 1; z.yaw = Math.atan2(dx, dz); z.atk -= dt;
        if (z.atk <= 0) { z.atk = BITE_EVERY; const dmg = 10 + this.round * 2; this.hp[pl.id] = Math.max(0, (this.hp[pl.id] === undefined ? PLAYER_HP : this.hp[pl.id]) - dmg); this.say('zbite', z.id, pl.id); if (this.hp[pl.id] <= 0) { this.down[pl.id] = DOWN_S; this.say('zdown', pl.id); } }
        continue;
      }
      z.att = 0; z.atk = Math.min(z.atk, 0.45);
      const sp = R.v * z.vm * (z.hurt > 0 ? 0.35 : 1); dx /= d; dz /= d; z.x += dx * sp * dt; z.z += dz * sp * dt;
      let da = Math.atan2(dx, dz) - z.yaw; da = Math.atan2(Math.sin(da), Math.cos(da)); z.yaw += da * Math.min(1, dt * 7);
    }
    // they do not stand inside each other
    for (let i = 0; i < zs.length; i++) { const a = zs[i]; if (a.hp <= 0) continue; for (let j = i + 1; j < zs.length; j++) { const b = zs[j]; if (b.hp <= 0) continue; const dx = b.x - a.x, dz = b.z - a.z, d = hyp(dx, dz); if (d < 0.7 && d > 1e-4) { const k = (0.7 - d) * 0.5 / d; a.x -= dx * k; a.z -= dz * k; b.x += dx * k; b.z += dz * k; } } }
    // the walls of the house: only the door and the garage let them in - and that is exactly what ends the mission
    for (const z of zs) {
      if (z.hp <= 0) continue; const l = homeL(HOME, z.x, z.z);
      if (l.x > WALL.x0 && l.x < WALL.x1 && l.z > WALL.z0 && l.z < WALL.z1) {
        if (l.z <= IN_Z) { if (GAPS.some(([a, b]) => l.x > a - 0.4 && l.x < b + 0.4)) { this.say('zbreach', z.id); this.end(false, 'breach'); return; } }
        else if (GAPS.some(([a, b]) => l.x >= a && l.x <= b)) continue;   // crossing the doorway (the wall is 0.3 m thick)
        const dists = [[l.x - WALL.x0, 'l'], [WALL.x1 - l.x, 'r'], [WALL.z1 - l.z, 'f'], [l.z - WALL.z0, 'b']].sort((p, q) => p[0] - q[0]);
        let nx = l.x, nz = l.z; const k = dists[0][1]; if (k === 'l') nx = WALL.x0; else if (k === 'r') nx = WALL.x1; else if (k === 'f') nz = WALL.z1; else nz = WALL.z0;
        const w = homeW(HOME, nx, nz); z.x = w.x; z.z = w.z;
      }
    }
    this.zs = zs.filter((z) => z.hp > 0 || z.dead > 0);
  }
  push() {
    const hp = {}; for (const id of this.members) hp[id] = Math.round(this.hp[id] === undefined ? PLAYER_HP : this.hp[id]);
    const dn = {}; for (const id of this.members) if (this.down[id] > 0) dn[id] = 1;
    const msg = { t: 'm_zb', r: this.round, q: this.left + this.alive(), s: this.st, hp, dn, z: this.zs.map((z) => [z.id, r2(z.x), r2(z.z), r2(z.yaw), z.hp <= 0 ? 2 : z.att ? 1 : 0, Math.round(z.hp)]), ev: this.ev, k: this.kills, tm: this.stT };
    this.ev = []; this.onSnap(msg);
  }
}
