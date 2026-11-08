// v245: the SHARED MATCH of Jang (PUBG style): when 2 or more real players are in a combat room, the SERVER runs the bots and the loot, so everybody fights the same
// bots and picks up the same guns. The phones only show what the server says (positions 10x a second) and ask it for things (shoot, take, drop).
// Solo Jang is not touched: it keeps running its own CombatSim on the phone.
import { CombatSim, CMB, LOOT_KINDS, botCount } from './public/js/combat.js';
const q2 = (v) => Math.round(v * 100) / 100;
export class CombatHost {
  constructor(seed, bcast, sendTo, diff, n) { this.sim = new CombatSim(seed | 0, n || botCount(diff)); this.sim.noRespawn = true; this.sim.setDiff(diff);   /* v378: easy 5 / medium 8 / hard 12 bots, and a dead bot stays dead (PUBG) */ this.bcast = bcast; this.sendTo = sendTo; this.tk = 0; this.cid = new Map(); }
  botsMsg() { return { t: 'cb', st: q2(this.sim.t), b: this.sim.bots.map((b) => [q2(b.x), q2(b.z), q2(b.yaw), Math.max(0, b.hp | 0), b.alive ? 1 : 0, +(b.speed || 0).toFixed(1), b.walk ? 1 : 0, b.weapon === 'ak' ? 1 : 0, b.y == null ? null : q2(b.y), b.stn | 0, +(b.thr || 0).toFixed(2), b.droid ? b.dtm + 1 : 0]) }; }
  lootItem(it) { return [it.id, it.k, q2(it.x), q2(it.z), it.spot, it.am && typeof it.am === 'object' ? [it.am.mag | 0, it.am.res | 0] : 0, it.alive ? 1 : 0, it.gold | 0, it.y === undefined ? null : q2(it.y)]; }
  addDroid(tm) { this.sim.addDroid(tm); }   // v457: INTELLIDROID
  init(id) { this.sendTo(id, { ...this.botsMsg(), t: 'cinit', l: this.sim.loot.filter((it) => it.alive).map((it) => this.lootItem(it)) }); }
  tick(dt, players) {   // players: [{id, x, z, al}] in world coordinates
    const PL = players.map((p) => ({ id: p.id, x: p.x - CMB.x, y: p.y, z: p.z - CMB.z, hp: p.al ? 100 : 0, alive: !!p.al, mv: p.mv, stn: p.stn, tm: p.tm }));
    if (this.sim.droidBot) { const T = (this.sim.ptm = this.sim.ptm || {}); for (const p of players) T[p.id] = p.tm; }
    this.sim.tick(dt, PL.length ? PL : [{ id: 0, x: 9999, z: 9999, hp: 0, alive: false }]);
    const ev = this.sim.drain(), out = [];
    for (const e of ev) {
      if (e.k === 'lootnew') { const it = this.sim.loot.find((l) => l.id === e.id); if (it) { const o = { k: 'lootnew', i: this.lootItem(it) }; if (this.cid.has(e.id)) { const c = this.cid.get(e.id); o.cid = c.c; o.cs = c.s; this.cid.delete(e.id); }   /* v404: the temp id is only meaningful to the player who dropped it (every player counts 1,2,3..: another player's drop used to hijack MY temp item, so the item I dropped stayed on the floor after somebody picked it up) */ out.push(o); } }
      else if (e.k === 'shot') out.push({ k: 'shot', id: e.id, x: q2(e.x), z: q2(e.z), tx: q2(e.tx), tz: q2(e.tz), tp: e.tp, hit: e.hit ? 1 : 0, dmg: q2(e.dmg), w: e.w });
      else if (e.k === 'kill') out.push({ k: 'kill', id: e.id, x: q2(e.x), z: q2(e.z), w: e.w, by: e.by, h: e.h ? 1 : 0 });
      else if (e.k === 'bothit') out.push({ k: 'bothit', id: e.id, x: q2(e.x), z: q2(e.z), h: e.h ? 1 : 0 });
      else if (e.k === 'nade') out.push({ k: 'nade', id: e.id, x: q2(e.x), z: q2(e.z), lx: q2(e.lx), lz: q2(e.lz), mo: e.mo ? 1 : 0 });
      else if (e.k === 'nbang') out.push({ k: 'nbang', x: q2(e.x), z: q2(e.z), tp: e.tp, dmg: e.dmg });
      else if (e.k === 'lootgone') out.push({ k: 'lootgone', id: e.id });
      else if (e.k === 'airplane') out.push({ k: 'airplane', n: e.n, x: q2(e.x), z: q2(e.z), hd: [q2(e.hd[0]), q2(e.hd[1])] });
      else if (e.k === 'airland') out.push({ k: 'airland', n: e.n, x: q2(e.x), z: q2(e.z) });
    }
    if (out.length) this.bcast({ t: 'ce', e: out });
    if ((this.tk++ & 1) === 0) this.bcast(this.botsMsg());   // 10 times a second
  }
  // ---- what a player asks for (checked: sane numbers, close to where he really is)
  near(p, x, z, r) { return p && Number.isFinite(p.jx) && Math.hypot(p.jx - CMB.x - x, p.jz - CMB.z - z) < r; }
  shoot(p, m) { const f = (v, a, b) => Number.isFinite(v) && v >= a && v <= b; if (!f(m.ox, -400, 400) || !f(m.oz, -400, 400) || !f(m.fx, -1.01, 1.01) || !f(m.fz, -1.01, 1.01) || !f(m.range, 1, 520) || !f(m.dmg, 0, 6) || !this.near(p, m.ox, m.oz, 25)) return; this.sim.shoot(m.ox, m.oz, m.fx, m.fz, m.range, m.dmg, Number.isFinite(m.y) ? m.y : undefined, p.id, 0.6, f(m.b0, -60, 300) && f(m.bs, -4, 4) && f(m.bk, 0, 60) ? { y: m.b0, sl: m.bs, k: m.bk / 1e6 } : undefined); }
  melee(p, m) { const f = (v, a, b) => Number.isFinite(v) && v >= a && v <= b; if (!f(m.x, -400, 400) || !f(m.z, -400, 400) || !f(m.fx, -1.01, 1.01) || !f(m.fz, -1.01, 1.01) || !f(m.reach, 0, 4.5) || !f(m.dmg, 0, 60) || !this.near(p, m.x, m.z, 15)) return; this.sim.melee(m.x, m.z, m.fx, m.fz, m.reach, m.dmg, p.id); }
  blast(p, m) { const f = (v, a, b) => Number.isFinite(v) && v >= a && v <= b; if (!f(m.x, -400, 400) || !f(m.z, -400, 400) || !f(m.r, 1, 14) || !this.near(p, m.x, m.z, 60)) return; this.sim.blast(m.x, m.z, m.r, 3.2, p.id); }
  take(p, m) { const id = m.id | 0, it = this.sim.loot.find((l) => l.id === id && l.alive); if (!it || !this.near(p, it.x, it.z, 8)) return; this.sim.take(it.x, it.z, (l) => l.id === id); }
  drop(p, m) { if (typeof m.k !== 'string' || m.k.length > 12 || !Number.isFinite(m.x) || !Number.isFinite(m.z) || !this.near(p, m.x, m.z, 12)) return; const it = this.sim.dropLoot(m.k, m.x, m.z); if (Number.isFinite(m.y) && m.y > -10 && m.y < 200) it.y = m.y; it.am = m.am && typeof m.am === 'object' ? { mag: Math.max(0, Math.min(999, m.am.mag | 0)), res: Math.max(0, Math.min(999, m.am.res | 0)) } : 0; if (m.g) { it.gold = 1; it.exp = this.sim.t + 150; } if (Number.isFinite(m.cid)) this.cid.set(it.id, { c: m.cid | 0, s: m.sid | 0 }); }
  fire(p, m) { if (Number.isFinite(m.x) && Number.isFinite(m.z) && this.near(p, m.x, m.z, 60)) this.sim.addFire(m.x, m.z, 3.4, 8, p.id); }
  smoke(p, m) { if (Number.isFinite(m.x) && Number.isFinite(m.z) && this.near(p, m.x, m.z, 60)) this.sim.addSmoke(m.x, m.z, 6.5, 15); }
}
void LOOT_KINDS;
