// ZOMBIE ATTACK on the client: draws the zombies the director (zombie.js) broadcasts ('m_zb', 10 per second, smoothed here), plays their sounds, shows the round / health bar,
// and turns the player's bullets, bat, fists and grenades into hits ('m_zh') that the director applies.
import * as THREE from 'three';
import { makeHero } from './glbactor.js';
import * as A from './audio.js';
import { HeroActor } from './actor.js';
import { homeSpawnPos, ROUND_COUNT } from './zombie.js';
import { STATION, RICK_IDX } from './polirick.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const ZDMG = { fist: 18, kick: 26, bat: 45, pistol: 34, ak: 26, sniper: 100, grenade: 100 };   // out of 100 zombie health: a bat takes 3 swings, an AK 4 bullets, a sniper bullet or a close grenade 1
const DELAY = 0.13;   // seconds the picture lags behind the newest snapshot (so 10 Hz data looks smooth)

export class ZombieScene {
  constructor(race) { this.R = race; this.snaps = []; this.act = new Map(); this.free = []; this.hud = null; this.on = false; this.myHp = 100; this.round = 0; this.left = 0; this.down = false; this.t = 0; this.state = ''; this.tmp = new THREE.Vector3(); this.rt = new THREE.Vector3(); this.poli = false; this.po = null; this.vrCd = new Map(); this.rickT = 0; this.wasDrv = false; this.off = null; this.ring = null; }
  get active() { return this.on; }
  clear() {
    this.snaps.length = 0; for (const [, a] of this.act) { a.g.visible = false; this.free.push(a); } this.act.clear(); this.on = false; this.down = false; this.round = 0; this.left = 0; this.myHp = 100; this.po = null; this.wasDrv = false; if (this.off) this.off.group.visible = false; if (this.ring) this.ring.visible = false; this.showHud(false);
  }
  dispose() { this.clear(); for (const a of this.free) { try { this.R.scene.remove(a.g); a.m.dispose(); } catch { /* noop */ } } this.free.length = 0; if (this.hud && this.hud.parentNode) this.hud.parentNode.removeChild(this.hud); this.hud = null; if (this.off) { this.R.scene.remove(this.off.group); this.off.dispose(); this.off = null; } if (this.ring) { this.R.scene.remove(this.ring); this.ring = null; } for (const k of ['hpBar', 'vig']) { if (this[k] && this[k].parentNode) this[k].parentNode.removeChild(this[k]); this[k] = null; } }
  // ---- the HUD: round, zombies left, my health
  showHud(on) {
    if (!this.hud) {
      if (!on) return;
      const e = document.createElement('div'); e.id = 'z-hud';
      e.style.cssText = 'position:fixed;left:50%;top:92px;transform:translateX(-50%);z-index:30;pointer-events:none;text-align:center;font:800 15px/1.2 system-ui,sans-serif;color:#d9ffc8;background:rgba(10,24,6,.66);border:1px solid #7cff4a88;border-radius:12px;padding:6px 14px;min-width:210px;letter-spacing:.5px;text-shadow:0 1px 2px #000';
      e.innerHTML = '<div class="zh-t"></div><div style="margin-top:5px;height:9px;background:#0007;border-radius:5px;overflow:hidden"><i class="zh-b" style="display:block;height:100%;width:100%;background:#4ade80;transition:width .25s"></i></div><div class="zh-rw" style="display:none;margin-top:6px;font-size:12px;text-align:left"><div style="display:flex;justify-content:space-between"><span>RICKSHAW</span><span class="zh-rn">100</span></div><div style="height:8px;background:#0007;border-radius:5px;overflow:hidden"><i class="zh-rb" style="display:block;height:100%;width:100%;transition:width .25s"></i></div><div style="display:flex;justify-content:space-between;margin-top:4px"><span>OFFICER</span><span class="zh-on">100</span></div><div style="height:8px;background:#0007;border-radius:5px;overflow:hidden"><i class="zh-ob" style="display:block;height:100%;width:100%;transition:width .25s"></i></div></div>';
      document.body.appendChild(e); this.hud = e;
      const hb = document.createElement('div'); hb.id = 'z-hp';   // YOUR health: a big bar at the bottom, the colour slides green -> yellow -> red as it drops
      hb.style.cssText = 'position:fixed;left:50%;bottom:22px;transform:translateX(-50%);z-index:30;pointer-events:none;width:min(46vw,420px);font:800 13px/1 system-ui,sans-serif;color:#fff;text-shadow:0 1px 3px #000;text-align:center';
      hb.innerHTML = '<div style="display:flex;justify-content:space-between;margin:0 4px 4px"><span>YOUR HEALTH</span><span class="zp-n">100</span></div><div style="height:16px;background:#000a;border:2px solid #fffb;border-radius:9px;overflow:hidden;box-shadow:0 2px 8px #000a"><i class="zp-b" style="display:block;height:100%;width:100%;border-radius:7px;transition:width .2s,background .2s"></i></div>';
      document.body.appendChild(hb); this.hpBar = hb;
      const vg = document.createElement('div'); vg.id = 'z-vig'; vg.style.cssText = 'position:fixed;inset:0;z-index:29;pointer-events:none;opacity:0;transition:opacity .25s;background:radial-gradient(ellipse at center,transparent 45%,rgba(200,0,0,.75) 100%)';
      document.body.appendChild(vg); this.vig = vg;
    }
    this.hud.style.display = on ? 'block' : 'none'; if (this.hpBar) this.hpBar.style.display = on ? 'block' : 'none'; if (this.vig && !on) this.vig.style.opacity = 0;
  }
  get arrow() { return ['\u2191', '\u2197', '\u2192', '\u2198', '\u2193', '\u2199', '\u2190', '\u2196']; }   // straight ahead, ahead-right, right, ... (relative to where the camera looks)
  updateHud() {
    if (!this.hud) return; const t = this.hud.querySelector('.zh-t'), b = this.hud.querySelector('.zh-b');
    const po = this.po, rw = this.hud.querySelector('.zh-rw'); if (rw) rw.style.display = this.poli && po ? 'block' : 'none';
    if (this.poli && po) {
      const hc = (v) => `hsl(${Math.round(clamp(v, 0, 100) * 1.2)},85%,48%)`, rb = this.hud.querySelector('.zh-rb'), ob = this.hud.querySelector('.zh-ob');
      rb.style.width = clamp(po.r[2], 0, 100) + '%'; rb.style.background = hc(po.r[2]); this.hud.querySelector('.zh-rn').textContent = Math.round(po.r[2]);
      ob.style.width = clamp(po.o[3], 0, 100) + '%'; ob.style.background = hc(po.o[3]); this.hud.querySelector('.zh-on').textContent = Math.round(po.o[3]);
    }
    const poTxt = () => { if (this.state === 'brief') return 'POLI RICKSHAW - GET READY'; if (!po.o[4]) return 'DRIVE THE RICKSHAW UP TO THE OFFICER  -  ZOMBIES ' + this.left; const R = this.R, car = R.cars[RICK_IDX], c = car ? car.st : { x: po.r[0], z: po.r[1] }, dx = STATION.x - c.x, dz = STATION.z - c.z, f = R.camera.getWorldDirection(this.tmp), a = Math.atan2(dx, dz) - Math.atan2(f.x, f.z), k = (Math.round(((a + Math.PI * 3) % (Math.PI * 2)) / (Math.PI / 4)) + 4) % 8; return 'POLICE STATION ' + this.arrow[k] + ' ' + Math.round(Math.hypot(dx, dz)) + ' m  -  ZOMBIES ' + this.left; };
    const txt = this.poli ? (po ? poTxt() : 'POLI RICKSHAW') : this.state === 'brief' || !this.round ? 'ZOMBIE ATTACK - GET READY' : 'ROUND ' + this.round + '/' + ROUND_COUNT + '  -  ZOMBIES LEFT ' + this.left + (this.down ? '  -  YOU ARE DOWN' : '');
    if (t.textContent !== txt) t.textContent = txt;
    if (this.hpBar) { const h = clamp(this.myHp, 0, 100), bar = this.hpBar.querySelector('.zp-b'), hue = Math.round(h * 1.2);   // 100 -> hue 120 (green), 0 -> hue 0 (red)
      bar.style.width = h + '%'; bar.style.background = `linear-gradient(90deg, hsl(${Math.max(0, hue - 25)},85%,38%), hsl(${hue},90%,52%))`; this.hpBar.querySelector('.zp-n').textContent = Math.round(h);
      this.hpBar.style.animation = h <= 25 && h > 0 ? 'zpulse .7s infinite alternate' : ''; if (this.vig) this.vig.style.opacity = h >= 60 ? 0 : String(Math.min(0.9, (60 - h) / 60)); }
    b.style.width = clamp(this.myHp, 0, 100) + '%'; b.style.background = this.myHp > 55 ? '#4ade80' : this.myHp > 25 ? '#facc15' : '#ef4444';
  }
  // every frame: running zombies over, the rickshaw's report, the officer and the station's ring
  extra(dt) {
    const R = this.R; if (!this.on) return;
    const car = R.drive && !R.paxMode ? R.drive : null, speed = car ? Math.abs(car.st.speed || 0) : 0;
    if (car && speed > 4.5) for (const z of this.list()) {   // a vehicle that hits the undead at speed
      const dx = z.x - car.st.x, dz = z.z - car.st.z; if (dx * dx + dz * dz > 3.4) continue;
      if (this.t - (this.vrCd.get(z.id) || -9) < 0.5) continue; this.vrCd.set(z.id, this.t); this.hurt(z.id, clamp(speed * 9, 45, 200));
      R.particles.emit(z.x, this.groundY(z.x, z.z) + 1, z.z, 10, { color: '#7b1313', speed: 4, up: 2.4, life: 0.45, size: 0.22 }); R.shake = Math.max(R.shake || 0, 0.25); A.sfx.hit && A.sfx.hit();
    }
    if (!this.poli) return;
    const rc = R.cars[RICK_IDX];
    if (rc) {
      const drv = car === rc ? 1 : 0, s = rc.st; this.rickT -= dt;
      if ((drv && this.rickT <= 0) || (!drv && this.wasDrv)) { this.rickT = 0.15; R.mission.send({ t: 'm_pr', x: +s.x.toFixed(2), z: +s.z.toFixed(2), yaw: +s.yaw.toFixed(3), sp: +speed.toFixed(1), hp: s.hp === undefined ? 100 : Math.round(s.hp), drv }); }
      this.wasDrv = drv;
    }
    const po = this.po; if (po) {
      if (!this.off) { this.off = new HeroActor(0, { role: 'cop', skinTone: '#c68e63', hair: '#15100c' }); this.off.group.rotation.order = 'YXZ'; R.scene.add(this.off.group); }
      const g = this.off.group, O = po.o; g.visible = true;
      if (O[4] && rc) { R.seatModel(g, rc, true, 0); this.off.update(dt, { speed: 0, grounded: true, vy: 0, stun: 0, seated: true, pax: true }); }
      else { g.position.set(O[0], this.groundY(O[0], O[1]), O[1]); g.rotation.set(0, O[2], 0); g.scale.setScalar(1); let near = false; for (const z of this.list()) if (Math.hypot(z.x - O[0], z.z - O[1]) < 9) { near = true; break; } this.off.update(dt, { speed: 0, grounded: true, vy: 0, stun: 0, seated: false, gesture: near ? 'scared' : null }); }
    }
    if (!this.ring) { const m = new THREE.Mesh(new THREE.CylinderGeometry(STATION.r, STATION.r, 7, 40, 1, true), new THREE.MeshBasicMaterial({ color: 0xffd23f, transparent: true, opacity: 0.28, side: THREE.DoubleSide, depthWrite: false })); m.position.set(STATION.x, this.groundY(STATION.x, STATION.z) + 3.5, STATION.z); R.scene.add(m); this.ring = m; }
    this.ring.visible = true; this.ring.rotation.y += dt * 0.6;
  }
  // ---- snapshots from the director
  apply(m) {
    const R = this.R; this.on = true; this.showHud(true);
    const map = new Map(); for (const e of m.z || []) map.set(e[0], e);
    this.snaps.push({ t: performance.now() / 1000, map }); if (this.snaps.length > 6) this.snaps.shift();
    if (m.po) { this.po = m.po; const car = this.poli ? R.cars[RICK_IDX] : null; if (car && car.st.hp > m.po.r[2]) car.st.hp = m.po.r[2]; }   // the zombies wear the rickshaw down: it smokes, burns and blows like any car
    this.round = m.r | 0; this.left = m.q | 0; this.state = m.s; const me = R.localId; if (m.hp && m.hp[me] !== undefined) { if (m.hp[me] < this.myHp - 0.5) { /* the bite itself is handled by the 'zbite' event */ } this.myHp = m.hp[me]; }
    this.down = !!(m.dn && m.dn[me]);
    for (const e of m.ev || []) this.event(e[0], e[1], e[2]);
    this.updateHud();
  }
  posOf(zid) { const s = this.snaps[this.snaps.length - 1]; const e = s && s.map.get(zid); return e ? { x: e[1], z: e[2] } : null; }
  // sound / words for one thing that happened
  event(k, a, b) {
    const R = this.R, M = R.mission, me = R.localId, cam = R.camera.position;
    const spatial = (x, z) => { const d = Math.hypot(x - cam.x, z - cam.z), v = clamp(1 - d / 55, 0, 1); this.rt.setFromMatrixColumn(R.camera.matrixWorld, 0); const dx = x - cam.x, dz = z - cam.z, l = Math.hypot(dx, dz) || 1; return { v, pan: clamp(this.rt.x * dx / l + this.rt.z * dz / l, -1, 1), far: clamp(d / 55, 0, 1) }; };
    if (k === 'zround') { M.big('ROUND ' + a, 2400, '#7cff4a'); M.sub(b + ' ZOMBIES ARE COMING' + (a === ROUND_COUNT ? ' - THE LAST ROUND!' : ''), 4000); A.sfx.pickup && A.sfx.pickup(); }
    else if (k === 'zclear') { if (a < ROUND_COUNT) { M.big('ROUND ' + a + ' CLEAR', 2200, '#5ef0a0'); M.sub('CATCH YOUR BREATH - YOU HEAL A LITTLE BETWEEN ROUNDS', 4500); } }
    else if (k === 'zspawn') { const p = this.posOf(a); if (p && Math.random() < 0.35) { const s = spatial(p.x, p.z); if (s.v > 0.05) A.voice.zgroan(0.9 * s.v, s.pan, s.far); } }
    else if (k === 'zhit') { const p = this.posOf(a); if (p) { const s = spatial(p.x, p.z); R.particles.emit(p.x, this.groundY(p.x, p.z) + 1.2, p.z, 7, { color: '#7b1313', speed: 2.6, up: 1.8, life: 0.35, size: 0.18 }); if (s.v > 0.05 && Math.random() < 0.6) A.voice.zgroan(0.55 * s.v, s.pan, s.far); } }
    else if (k === 'zdie') { const p = this.posOf(a); if (p) { const s = spatial(p.x, p.z); if (s.v > 0.04) A.voice.zdie(1.0 * s.v, s.pan, s.far); R.particles.emit(p.x, this.groundY(p.x, p.z) + 1.0, p.z, 16, { color: '#5b0d0d', speed: 3.4, up: 2.4, life: 0.5, size: 0.25 }); } }
    else if (k === 'zbite') { const p = this.posOf(a); if (p) { const s = spatial(p.x, p.z); A.voice.zbite(Math.max(0.35, 0.95 * s.v + 0.2), s.pan); } if (b === me) { R.hurtFx(0.6); R.shake = Math.max(R.shake || 0, 0.35); } }
    else if (k === 'zdown') { if (b === undefined || a === me) { /* a = player id */ } if (a === me) { const bd = R.me.body; bd.vx = bd.vz = 0; bd.stun = 4.6; R.crouch = false; R.hurtFx(1); M.big('YOU ARE DOWN', 3000, '#ff5a5a'); M.sub('YOUR TEAM HAS TO HOLD THE HOUSE - YOU GET UP IN A FEW SECONDS', 4000); } else A.sfx.hit && A.sfx.hit(); }
    else if (k === 'zup') { if (a === me) { this.respawn(); } }
    else if (k === 'pgo') { M.big('GO!', 1200, '#ffd23f'); M.sub('DRIVE THE RICKSHAW UP TO THE OFFICER - THE ZOMBIES ARE COMING', 5000); }
    else if (k === 'pboard') { M.big('OFFICER ABOARD', 2400, '#5ef0a0'); M.sub('TAKE HIM TO THE POLICE STATION (YELLOW CIRCLE) - RUN THE ZOMBIES OVER!', 6000); A.sfx.pickup && A.sfx.pickup(); }
    else if (k === 'pwave') { M.sub('MORE ZOMBIES ARE COMING - GET THE OFFICER OUT OF HERE', 3000); }
    else if (k === 'pamb') { M.sub('ZOMBIES AHEAD!', 1800); }
    else if (k === 'prick') { const c = R.cars[RICK_IDX]; if (R.drive === c) { R.hurtFx(0.25); R.shake = Math.max(R.shake || 0, 0.3); } A.sfx.hit && A.sfx.hit(); }
    else if (k === 'poff') { M.sub('THE OFFICER IS BEING BITTEN!', 1800); }
    else if (k === 'zbreach') { M.big('A ZOMBIE GOT INTO THE HOUSE!', 3600, '#ff3030'); }
  }
  respawn() {
    const R = this.R, b = R.me.body, M = R.mission, seat = Math.max(0, (M.members.find((q) => q.id === R.localId) || { seat: 0 }).seat), p = homeSpawnPos(seat);
    b.x = p.x; b.z = p.z; b.y = this.groundY(p.x, p.z) + 0.05; b.vx = b.vz = b.vy = 0; b.stun = 0; b.hitCd = 1.5; R.crouch = false; R.camInit = false; R.camYaw = Math.PI; b.yaw = 0;
    M.big('BACK IN THE FIGHT', 1800, '#7cff4a');
  }
  groundY(x, z) { const w = this.R.world; if (!w || !w.findGround) return 0; const g = w.findGround({ x, y: 4, z }, 4, false); return g ? g.top : 0; }
  // ---- the actors
  actor() {
    let a = this.free.pop();
    if (!a) { const m = makeHero(4); m.group.rotation.order = 'YXZ'; this.R.scene.add(m.group); a = { m, g: m.group, y: 0, gt: 0, att: 0, th: 0, last: null }; }
    a.g.visible = true; a.g.scale.setScalar(1); a.born = this.t; a.gt = 2 + Math.random() * 5; a.att = 0; a.th = Math.random(); a.dead = 0; return a;
  }
  update(dt) {
    this.t += dt; this.extra(dt); if (!this.on) return;
    const R = this.R, now = performance.now() / 1000 - DELAY, S = this.snaps; if (!S.length) return;
    let i = S.length - 1; while (i > 0 && S[i - 1].t > now) i--;   // S[i-1] <= now < S[i]  (or the oldest / newest when out of range)
    const s0 = S[Math.max(0, i - 1)], s1 = S[i], k = s1.t > s0.t ? clamp((now - s0.t) / (s1.t - s0.t), 0, 1) : 1;
    const cam = R.camera.position, seen = new Set();
    for (const [id, e1] of s1.map) {
      const e0 = s0.map.get(id) || e1; seen.add(id);
      let a = this.act.get(id); if (!a) { a = this.actor(); this.act.set(id, a); a.px = e1[1]; a.pz = e1[2]; }
      const x = e0[1] + (e1[1] - e0[1]) * k, z = e0[2] + (e1[2] - e0[2]) * k; let dy = e1[3] - e0[3]; dy = Math.atan2(Math.sin(dy), Math.cos(dy)); const yaw = e0[3] + dy * k, st = e1[4];
      const sp = Math.hypot(x - a.px, z - a.pz) / Math.max(dt, 1e-3); a.px = x; a.pz = z; a.sp = (a.sp || 0) * 0.8 + sp * 0.2;
      const gy = this.groundY(x, z); a.y += (gy - a.y) * Math.min(1, dt * 12); const g = a.g;
      g.position.set(x, a.y, z); g.rotation.y = yaw;
      const dist = Math.hypot(x - cam.x, z - cam.z); g.visible = dist < 90;
      if (st === 2) { a.dead += dt; g.scale.setScalar(a.dead > 2.9 ? Math.max(0.01, 1 - (a.dead - 2.9) * 2.2) : 1); } else g.scale.setScalar(1);
      if (st === 1) a.att += dt * 1.25; else a.att = 0;
      if (g.visible) a.m.update(dt, { swim: false, speed: st === 2 ? 0 : Math.min(a.sp, 2.6), grounded: true, vy: 0, stun: 0, dive: 0, punch: st === 1 ? (a.att % 1) + 0.001 : 0, zpose: st === 2 ? 'zDeath' : st === 1 ? null : e1[5] <= 35 ? 'zCrawl' : 'zWalk', zp: st === 2 ? Math.min(1, a.dead / 2.9) : 0 });
      // a growl now and then (louder the nearer, duller the farther)
      if (st !== 2) { a.gt -= dt; if (a.gt <= 0) { a.gt = 3.5 + Math.random() * 5; const v = clamp(1 - dist / 50, 0, 1); if (v > 0.05) { const dx = x - cam.x, dz = z - cam.z, l = Math.hypot(dx, dz) || 1; this.rt.setFromMatrixColumn(R.camera.matrixWorld, 0); A.voice.zgroan(0.8 * v, clamp(this.rt.x * dx / l + this.rt.z * dz / l, -1, 1), clamp(dist / 50, 0, 1)); } } }
    }
    for (const [id, a] of [...this.act]) if (!seen.has(id)) { a.g.visible = false; this.free.push(a); this.act.delete(id); }
  }
  // ---- the player's attacks on the zombies (called by main.js): every one is sent to the director, which keeps the health
  list() { const out = [], s = this.snaps[this.snaps.length - 1]; if (!s) return out; for (const [id, a] of this.act) { const e = s.map.get(id); if (e && e[4] !== 2) out.push({ id, x: a.px !== undefined ? a.px : e[1], z: a.pz !== undefined ? a.pz : e[2] }); } return out; }
  hurt(id, dmg) { this.R.mission.send({ t: 'm_zh', z: id, d: Math.round(dmg) }); }
  // a bullet along (fx, fz) from (ox, oz): the nearest zombie in the line (0.55 m wide) takes it; returns the distance or -1
  shoot(ox, oz, fx, fz, len, weapon) {
    let best = null, bd = len;
    for (const z of this.list()) { const dx = z.x - ox, dz = z.z - oz, a = dx * fx + dz * fz, pr = Math.abs(-dx * fz + dz * fx); if (a > 0.2 && a < bd && pr < 0.55) { bd = a; best = z; } }
    if (!best) return -1; this.hurt(best.id, ZDMG[weapon] || 25); this.R.particles.emit(best.x, this.groundY(best.x, best.z) + 1.3, best.z, 6, { color: '#7b1313', speed: 2.4, up: 1.6, life: 0.3, size: 0.17 }); return bd;
  }
  // fists, bat or a kick: every zombie within reach in front of the player
  melee(bx, bz, fx, fz, reach, kind) {
    let n = 0; for (const z of this.list()) { const dx = z.x - bx, dz = z.z - bz, d = Math.hypot(dx, dz); if (d > reach || d < 1e-3) continue; if ((dx * fx + dz * fz) / d < 0.25) continue; this.hurt(z.id, ZDMG[kind] || 18); n++; this.R.particles.emit(z.x, this.groundY(z.x, z.z) + 1.2, z.z, 8, { color: '#7b1313', speed: 3, up: 2, life: 0.3, size: 0.2 }); }
    return n;
  }
  // a grenade: full damage close to the blast, about half at the edge
  blast(x, z, R) { let n = 0; for (const q of this.list()) { const d = Math.hypot(q.x - x, q.z - z); if (d > R + 0.6) continue; this.hurt(q.id, ZDMG.grenade * clamp(1.15 - 0.6 * d / R, 0.4, 1)); n++; } return n; }
}
