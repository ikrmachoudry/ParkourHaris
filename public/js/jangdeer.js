// JANG: a wild stag that hurts you. It roams the island; when you come within sight it lowers its antlers and CHARGES, and every gore costs health and throws you back.
// You can fight back (guns, bat, kick, grenades). Local to each player's screen (it is not sent over the network). Never exists in Punjabi GTA.
import * as THREE from 'three';
import { buildDeerRig } from './deer.js';
import { CMB, layout, cmbH, hitsSolid, findPath } from './combat.js';
import { knock } from './physics.js';

const HP = 260, SIGHT = 55, LOSE = 95, WALK = 2.2, CHARGE = 8.4, REACH = 2.4, GORE = 24, COOL = 1.3, SCALE = 1.55, RAD = 0.8, VIS2 = 260 * 260, RESPAWN = 45;

export class JangDeer {
  constructor(group) {
    this.group = group; const r = buildDeerRig(true, SCALE); this.r = r; r.g.visible = false; group.add(r.g);
    this.alive = false; this.x = 0; this.z = 0; this.yaw = 0; this.hp = HP; this.st = 'roam'; this.t = 2; this.cool = 0; this.dieT = 0; this.rt = 6; this.ph = 0; this.tx = 0; this.tz = 0; this.stuck = 0; this.path = null; this.pi = 0; this.pt = 0; this.warn = 0; this.hd = 0.8; this.first = true;
  }
  spawn(px, pz) {   // a spawn point of the island that is well away from the player
    const L = layout(); let best = null, bd = -1;
    for (let k = 0; k < 14; k++) { const p = L.spawns[Math.floor(Math.random() * L.spawns.length)], d = Math.hypot(p.x - px, p.z - pz); if (d > bd) { bd = d; best = p; } if (d > 110) break; }
    this.x = best.x; this.z = best.z; this.hp = HP; this.alive = true; this.st = 'roam'; this.t = 2; this.cool = 1; this.dieT = 0; this.path = null; this.r.g.rotation.z = 0; this.tx = this.x; this.tz = this.z;
  }
  hit(dmg, cs) {   // dmg is on the same scale as a bot's 100 hit points
    if (!this.alive) return; this.hp -= dmg; this.st = 'charge'; this.t = 6;
    const y = cmbH(this.x, this.z) + 1.4; cs.R.particles && cs.R.particles.emit(CMB.x + this.x, y, CMB.z + this.z, 6, { color: '#ff5a4a', speed: 3, up: 2, life: 0.35, size: 0.2 });
    if (this.hp <= 0) { this.alive = false; this.dieT = 0; this.rt = RESPAWN; cs.R.toast && cs.R.toast('THE STAG IS DOWN'); }
  }
  ray(ox, oz, fx, fz, lim) {   // distance along a shot line to the deer, or -1
    if (!this.alive) return -1; const dx = this.x - ox, dz = this.z - oz, a = dx * fx + dz * fz; if (a < 0.2 || a > lim) return -1; return Math.abs(-dx * fz + dz * fx) > RAD + 0.25 ? -1 : a;
  }
  melee(x, z, fx, fz, reach, dmg, cs) { if (!this.alive) return 0; const dx = this.x - x, dz = this.z - z, d = Math.hypot(dx, dz); if (d > reach + 0.8 || d < 1e-3 || (dx * fx + dz * fz) / d < 0.25) return 0; this.hit(dmg, cs); return 1; }
  blast(x, z, r, cs) { if (!this.alive) return; const d = Math.hypot(this.x - x, this.z - z); if (d > r + 0.8) return; this.hit(3.2 * Math.max(0.35, 1.1 - 0.65 * d / r) * 28, cs); }
  move(dx, dz, sp, dt) {   // slide along walls and trees
    const L = layout(), st = sp * dt, d = Math.hypot(dx, dz) || 1, nx = this.x + dx / d * st, nz = this.z + dz / d * st, ox = this.x, oz = this.z;
    if (!hitsSolid(L, nx, this.z, RAD)) this.x = nx; if (!hitsSolid(L, this.x, nz, RAD)) this.z = nz;
    const lim = CMB.half - 10; this.x = Math.max(-lim, Math.min(lim, this.x)); this.z = Math.max(-lim, Math.min(lim, this.z));
    return Math.hypot(this.x - ox, this.z - oz) / Math.max(1e-6, st);   // 1 = moved freely, ~0 = blocked
  }
  update(dt, P, cs) {
    dt = Math.min(dt, 0.1); const r = this.r;
    if (!this.alive) {
      if (this.first && P) { this.first = false; this.spawn(P.x, P.z); }
      else { this.dieT += dt; r.g.rotation.z = Math.min(1, this.dieT / 0.6) * Math.PI / 2; r.g.visible = this.dieT < 8 && this.vis; this.rt -= dt; if (this.rt <= 0 && P) this.spawn(P.x, P.z); this.place(); return; }
    }
    const dx = P.x - this.x, dz = P.z - this.z, d = Math.hypot(dx, dz), can = P.alive && !cs.dropping;
    if (this.st === 'roam' && can && d < SIGHT) { this.st = 'charge'; this.t = 8; if (this.warn <= 0) { this.warn = 14; cs.R.toast && cs.R.toast('A WILD STAG IS CHARGING YOU!', 2.5); } }
    else if (this.st === 'charge' && (!can || d > LOSE)) { this.st = 'roam'; this.t = 3; this.path = null; }
    this.warn -= dt; this.cool -= dt; let sp = 0, mx = 0, mz = 0;
    if (this.st === 'charge') {
      this.pt -= dt; mx = dx; mz = dz; sp = CHARGE;
      if (this.path && this.pi < this.path.length) { const w = this.path[this.pi]; if (Math.hypot(w[0] - this.x, w[1] - this.z) < 1.6) this.pi++; else { mx = w[0] - this.x; mz = w[1] - this.z; } if (this.pi >= this.path.length) this.path = null; }
      const free = this.move(mx, mz, sp, dt); this.stuck = free < 0.4 ? this.stuck + dt : Math.max(0, this.stuck - dt * 2);
      if (this.stuck > 0.6 && this.pt <= 0) { this.pt = 2; this.stuck = 0; const p = findPath(layout(), this.x, this.z, P.x, P.z); this.path = p && p.length > 1 ? p : null; this.pi = 0; }   // walled in: take the walkable route
      if (d < REACH && this.cool <= 0 && can) {   // GORE
        this.cool = COOL; cs.hurt(GORE); const b = cs.R.me.body; if (!cs.R.drive && d > 1e-3) knock(b, dx / d, dz / d, 9);
        cs.R.toast && cs.R.toast('GORED BY THE STAG!', 1.2); const y = cmbH(this.x, this.z) + 1.2; cs.R.particles && cs.R.particles.emit(CMB.x + P.x, y, CMB.z + P.z, 8, { color: '#ff5a4a', speed: 3, up: 2, life: 0.4, size: 0.2 });
      }
      if (mx || mz) this.yaw = Math.atan2(mx, mz);
    } else {   // roam: wander and graze
      this.t -= dt;
      if (this.t <= 0) { if (this.tx === this.x && this.tz === this.z || Math.random() < 0.5) { const a = Math.random() * 6.28, q = 10 + Math.random() * 30; this.tx = this.x + Math.cos(a) * q; this.tz = this.z + Math.sin(a) * q; this.t = 6 + Math.random() * 6; } else { this.tx = this.x; this.tz = this.z; this.t = 3 + Math.random() * 4; } }
      const wx = this.tx - this.x, wz = this.tz - this.z; if (Math.hypot(wx, wz) > 1.2) { sp = WALK; this.move(wx, wz, sp, dt); this.yaw += (Math.atan2(wx, wz) - this.yaw + Math.PI * 3) % (Math.PI * 2) - Math.PI; }
    }
    if (sp > 0) this.ph += sp * dt * 2.4; const sw = sp > 0 ? Math.sin(this.ph) * (sp > 4 ? 0.95 : 0.5) : 0; r.la.rotation.x = sw; r.lb.rotation.x = -sw;
    const hd = this.st === 'charge' ? 0.55 : sp > 0 ? 0.1 : 1.0; this.hd += (hd - this.hd) * Math.min(1, dt * 5); r.head.rotation.x = this.hd;   // antlers down to charge, head down to graze
    this.place(sp > 4 ? Math.abs(Math.sin(this.ph)) * 0.2 : 0);
  }
  place(bob = 0) {
    const r = this.r, c = this.cam; this.vis = c ? (CMB.x + this.x - c.x) ** 2 + (CMB.z + this.z - c.z) ** 2 < VIS2 : true;
    if (this.alive) r.g.visible = this.vis; r.g.position.set(CMB.x + this.x, cmbH(this.x, this.z) + bob, CMB.z + this.z); r.g.rotation.y = this.yaw;
  }
  dispose() { this.group.remove(this.r.g); }
}
