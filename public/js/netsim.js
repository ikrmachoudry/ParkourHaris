// v245: the SHARED MATCH on the phone: the same API as CombatSim (bots, loot, shoot, take...) but the bots and the loot are driven by the SERVER's snapshots, so every player of the room
// fights the same bots and picks up the same guns. Hits are predicted here (instant hit marker) and sent to the server, which decides.
import { CombatSim } from './combat.js';
export class NetSim extends CombatSim {
  constructor(seed, net, myId) {
    super(seed, 8); this.net = net; this.myId = myId; this.ready = false; this.tgt = this.bots.map(() => null); this.tmpN = 0; this.tmpMap = new Map();
    this.loot = []; this.used = new Set(); this.hello();
  }
  hello() { this.net.send({ t: 'chello' }); this.helloT = 0; }
  // ---- from the server
  onInit(m) { this.applyBots(m.b, true); this.loot = []; for (const a of m.l || []) this.addLoot(a); this.ready = true; }
  addLoot(a) { const [id, k, x, z, spot, am, al, gold, yy] = a; let it = this.loot.find((l) => l.id === id); if (!it) { it = { id }; this.loot.push(it); } Object.assign(it, { k, x, z, y: yy === null || yy === undefined ? undefined : yy, spot: -1, am: Array.isArray(am) ? { mag: am[0], res: am[1] } : undefined, alive: !!al, gold: gold | 0 }); return it; }
  applyBots(arr, snap) {
    for (let i = 0; i < arr.length && i < this.bots.length; i++) { const a = arr[i], b = this.bots[i], was = b.alive;
      b.hp = a[3]; b.alive = !!a[4]; b.speed = a[5]; b.walk = !!a[6]; b.weapon = a[7] ? 'ak' : 'pistol'; b.id = i; b.y = a[8] == null ? null : a[8];
      if (was && !b.alive) b.dieT = 0; this.tgt[i] = { x: a[0], z: a[1], yaw: a[2] };
      if (snap || !was || Math.hypot(a[0] - b.x, a[1] - b.z) > 8) { b.x = a[0]; b.z = a[1]; b.yaw = a[2]; } }
  }
  onEvents(list, myId) {
    for (const e of list) {
      if (e.k === 'lootnew') { const [id] = e.i; if (e.cid !== undefined && this.tmpMap.has(e.cid)) { const t = this.tmpMap.get(e.cid); this.tmpMap.delete(e.cid); t.id = id; } else this.addLoot(e.i); }
      else if (e.k === 'lootgone') { const it = this.loot.find((l) => l.id === e.id); if (it) it.alive = false; }
      else this.events.push({ ...e, hit: !!e.hit });   // shot / kill / bothit: the scene shows them (a kill only counts for the one who made it: e.by)
    }
  }
  // ---- the scene calls these every frame / on actions (same names as CombatSim)
  tick(dt) {
    this.t += dt; this.helloT += dt; if (!this.ready && this.helloT > 2) this.hello();
    const f = Math.min(1, dt * 12);
    for (let i = 0; i < this.bots.length; i++) { const b = this.bots[i], g = this.tgt[i]; if (!b.alive) { b.dieT += dt; } if (b.flash > 0) b.flash -= dt; if (!g) continue; b.x += (g.x - b.x) * f; b.z += (g.z - b.z) * f; b.yaw += Math.atan2(Math.sin(g.yaw - b.yaw), Math.cos(g.yaw - b.yaw)) * f; }
  }
  hurt(b, d) { if (!b.alive) return; b.flash = 0.15; }   // only a hit marker here: hp and kills come from the server
  take(px, pz, can) {
    for (const it of this.loot) { if (!it.alive || (it.nt && it.nt > this.t)) continue; if ((it.x - px) ** 2 + (it.z - pz) ** 2 < 1.8 * 1.8) { if (can && !can(it)) continue; it.alive = false; if (it.id > 0) this.net.send({ t: 'ctake', id: it.id }); return it; } }
    return null;
  }
  dropLoot(k, x, z, gold) {
    const it = { k, x, z, spot: -1, alive: true, nt: this.t + 1.5, id: -(++this.tmpN), gold: gold ? 1 : 0 }; this.loot.push(it); const cid = this.tmpN; this.tmpMap.set(cid, it);
    Promise.resolve().then(() => this.net.send({ t: 'cdrop', k, x: +x.toFixed(2), z: +z.toFixed(2), am: it.am && typeof it.am === 'object' ? { mag: it.am.mag | 0, res: it.am.res | 0 } : 0, cid, g: gold ? 1 : 0 }));   // (the caller sets it.am right after this call)
    return it;
  }
  shoot(ox, oz, fx, fz, range, dmg, y) { const r = super.shoot(ox, oz, fx, fz, range, dmg, y); this.net.send({ t: 'cshoot', ox: +ox.toFixed(2), oz: +oz.toFixed(2), fx: +fx.toFixed(3), fz: +fz.toFixed(3), range, dmg, y: Number.isFinite(y) ? +y.toFixed(2) : undefined }); return r; }
  melee(x, z, fx, fz, reach, dmg) { const r = super.melee(x, z, fx, fz, reach, dmg); this.net.send({ t: 'cmelee', x: +x.toFixed(2), z: +z.toFixed(2), fx: +fx.toFixed(3), fz: +fz.toFixed(3), reach, dmg }); return r; }
  blast(x, z, r, dmg) { super.blast(x, z, r, dmg); this.net.send({ t: 'cblast', x: +x.toFixed(2), z: +z.toFixed(2), r }); }
  addSmoke(x, z) { this.net.send({ t: 'csmoke', x: +x.toFixed(2), z: +z.toFixed(2) }); }
}
