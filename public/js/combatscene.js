// COMBAT MISSION on the client: drops the player onto the hidden battle map, draws the bots and the loot, runs the 5 minute match (combat.js has the brain),
// shows the HUD (time, kills, health) and turns the player's bullets, fists and grenades into hits on the bots.
import * as THREE from 'three';
import { makeHero } from './glbactor.js';
import { makeWeaponModel } from './weaponmodels.js';
import * as A from './audio.js';
import { WEAPONS } from './economy.js';
import { CombatSim, CMB, COMBAT_MS, layout } from './combat.js';
import { LOBBY } from './gta.js';
import { OPT } from './opts.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const LOOT_COL = { pistol: '#7fd0ff', ak: '#ffb347', sniper: '#ff6bd6', bat: '#cfa36a', grenade: '#8dff6b', ammo: '#ffe55c', med: '#ff5c5c' };
const LOOT_NAME = { pistol: 'PISTOL', ak: 'AK-47', sniper: 'SNIPER RIFLE', bat: 'BASEBALL BAT', grenade: 'GRENADE', ammo: 'AMMO', med: 'FIRST AID' };
const MY_DMG = 100;   // hit points of the player

export class CombatScene {
  constructor(race) {
    this.R = race; this.on = false; this.sim = null; this.bots = new Map(); this.loot = new Map(); this.group = new THREE.Group(); this.group.visible = false; race.scene.add(this.group);
    this.hp = MY_DMG; this.time = COMBAT_MS / 1000; this.over = false; this.t = 0; this.hud = null; this.deadT = 0; this.kills = 0; this.deaths = 0; this.tr = [];
    this.tmpV = new THREE.Vector3();
  }
  get active() { return this.on && !this.over && !!this.sim && this.R.mission && this.R.mission.phase === 'run' && this.deadT <= 0; }
  // ---------------------------------------------------------------- HUD
  showHud(on) {
    if (!this.hud) {
      if (!on) return;
      const e = document.createElement('div'); e.id = 'c-hud';
      e.style.cssText = 'position:fixed;left:50%;top:92px;transform:translateX(-50%);z-index:30;pointer-events:none;text-align:center;font:800 15px/1.25 system-ui,sans-serif;color:#ffe8c8;background:rgba(30,16,6,.68);border:1px solid #ffb34788;border-radius:12px;padding:8px 16px;min-width:230px;text-shadow:0 1px 3px #000';
      e.innerHTML = '<div class="ch-t" style="font-size:22px;letter-spacing:1px">5:00</div><div class="ch-s"></div>';
      document.body.appendChild(e); this.hud = e;
      const hb = document.createElement('div'); hb.id = 'c-hp'; hb.style.cssText = 'position:fixed;left:50%;bottom:22px;transform:translateX(-50%);z-index:30;pointer-events:none;width:min(46vw,420px);font:800 13px/1 system-ui,sans-serif;color:#fff;text-shadow:0 1px 3px #000;text-align:center';
      hb.innerHTML = '<div style="display:flex;justify-content:space-between;margin:0 4px 4px"><span>HEALTH</span><span class="cp-n">100</span></div><div style="height:16px;background:#000a;border:2px solid #fffb;border-radius:9px;overflow:hidden"><i class="cp-b" style="display:block;height:100%;width:100%;background:#4ade80;transition:width .2s"></i></div>';
      document.body.appendChild(hb); this.hpBar = hb;
      const vg = document.createElement('div'); vg.style.cssText = 'position:fixed;inset:0;z-index:29;pointer-events:none;opacity:0;transition:opacity .2s;background:radial-gradient(ellipse at center,transparent 45%,rgba(220,0,0,.8) 100%)'; document.body.appendChild(vg); this.vig = vg;
      const ov = document.createElement('div'); ov.style.cssText = 'position:fixed;inset:0;z-index:40;display:none;place-items:center;pointer-events:none;background:rgba(0,0,0,.55);color:#fff;font:800 20px/1.5 system-ui,sans-serif;text-align:center;text-shadow:0 2px 6px #000'; document.body.appendChild(ov); this.ov = ov;
    }
    this.hud.style.display = on ? 'block' : 'none'; this.hpBar.style.display = on ? 'block' : 'none'; if (!on) { this.vig.style.opacity = 0; this.ov.style.display = 'none'; }
  }
  updateHud() {
    if (!this.hud) return; const m = Math.max(0, Math.ceil(this.time)), mm = Math.floor(m / 60), ss = m % 60;
    this.hud.querySelector('.ch-t').textContent = mm + ':' + (ss < 10 ? '0' : '') + ss;
    this.hud.querySelector('.ch-s').textContent = 'KILLS ' + this.kills + '   •   DEATHS ' + this.deaths;
    const h = clamp(this.hp, 0, MY_DMG); this.hpBar.querySelector('.cp-n').textContent = Math.round(h); const b = this.hpBar.querySelector('.cp-b'); b.style.width = h + '%'; b.style.background = h > 55 ? '#4ade80' : h > 25 ? '#facc15' : '#ef4444';
  }
  // ---------------------------------------------------------------- start / stop
  begin(m, seat) {
    this.clear(); const R = this.R, b = R.me.body; A.setCommentary(false); this.on = true;   // no Punjabi commentary in the combat mission
 this.over = false; this.kills = 0; this.deaths = 0; this.hp = MY_DMG; this.time = COMBAT_MS / 1000; this.deadT = 0;
    this.sim = new CombatSim((m.round * 7919 + 13) | 0, 8); this.group.visible = true; this.pay = 0;
    if (R.wallet) { R.wallet.cb = { owned: {}, mag: {}, ammo: {}, nades: 0 }; R.weapon = null; R.aiming = false; R.syncAct && R.syncAct(); R.updateAmmoHud && R.updateAmmoHud(); }
    this.respawn(seat | 0); this.showHud(true); this.updateHud(); this.syncLoot();
  }
  respawn(seat) {
    const R = this.R, b = R.me.body, L = layout(), p = L.spawns[((seat === undefined ? Math.floor(Math.random() * L.spawns.length) : seat * 5 + 1) % L.spawns.length + L.spawns.length) % L.spawns.length];
    b.x = CMB.x + p.x; b.z = CMB.z + p.z; b.y = 0.05; b.vx = b.vz = b.vy = 0; b.stun = 0; b.hitCd = 0.5; R.crouch = false; R.camInit = false; R.camYaw = Math.random() * 6.28;
  }
  clear() {
    for (const [, a] of this.bots) { this.group.remove(a.g); a.m.dispose && a.m.dispose(); } this.bots.clear();
    for (const [, l] of this.loot) this.group.remove(l.g); this.loot.clear(); for (const q of this.tr) this.group.remove(q); this.tr.length = 0;
    this.sim = null; this.on = false; this.group.visible = false; this.showHud(false); A.setCommentary(OPT.punjabi !== false);
  }
  // back to the city (the mission is over for everybody): the backpack is emptied, the saved weapons come back, you stand outside the mission lobby
  leave() {
    if (!this.on && !(this.R.wallet && this.R.wallet.cb)) { this.clear(); return; }
    const R = this.R, b = R.me.body; this.clear();
    if (R.wallet) { R.wallet.cb = null; if (R.weapon && !R.wallet.owns(R.weapon)) R.weapon = null; R.syncAct && R.syncAct(); R.updateAmmoHud && R.updateAmmoHud(); }
    const x = LOBBY.x, z = LOBBY.z + LOBBY.d / 2 + 3.5; b.x = x; b.z = z; b.y = (R.world && R.world.terrain ? R.world.terrain(x, z) : 0) + 0.05; b.vx = b.vz = b.vy = 0; b.stun = 0; R.camInit = false;
  }
  // ---------------------------------------------------------------- the world (bots, loot)
  syncLoot() {
    const sim = this.sim; if (!sim) return;
    for (const it of sim.loot) { if (!it.alive || this.loot.has(it.id)) continue; const g = new THREE.Group(), col = LOOT_COL[it.k];
      let mdl; if (it.k === 'ammo') { mdl = new THREE.Group(); mdl.add(new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.3, 0.34), new THREE.MeshStandardMaterial({ color: '#3d5a2a', roughness: 0.7 }))); const s = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.08, 0.36), new THREE.MeshStandardMaterial({ color: '#ffd23f' })); s.position.y = 0.04; mdl.add(s); }
      else if (it.k === 'med') { mdl = new THREE.Group(); mdl.add(new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.38, 0.38), new THREE.MeshStandardMaterial({ color: '#f4f4f4' }))); const rm = new THREE.MeshStandardMaterial({ color: '#e0242b' }); const a = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.4, 0.06), rm), c = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 0.4), rm); c.rotation.x = 0; mdl.add(a, c); a.scale.set(1, 1, 1.4); }
      else { mdl = makeWeaponModel(it.k); mdl.scale.setScalar(it.k === 'grenade' ? 2.2 : it.k === 'bat' ? 1.5 : 1.9); if (it.k === 'bat') mdl.rotation.z = Math.PI / 2; else mdl.rotation.y = Math.PI / 2; }
      const pivot = new THREE.Group(); pivot.add(mdl); g.add(pivot); g.userData.pivot = pivot;
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.55, 0.75, 24), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false })); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.06; g.add(ring);
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 5, 6, 1, true), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.28, depthWrite: false })); beam.position.y = 2.6; g.add(beam);
      g.position.set(CMB.x + it.x, 0, CMB.z + it.z); this.group.add(g); this.loot.set(it.id, { g, it, ph: Math.random() * 6 }); }
  }
  bot(b) {
    let a = this.bots.get(b.id); if (a) return a;
    const m = makeHero(b.id % 4, undefined, false); m.group.traverse((o) => { if (o.isMesh && o.material && o.material.color) { o.material = o.material.clone(); o.material.color.multiply(new THREE.Color('#e08a7a')); } });   // a reddish tint: the enemy
    this.group.add(m.group); a = { g: m.group, m, last: 0 }; this.bots.set(b.id, a); return a;
  }
  tracer(x0, y0, z0, x1, y1, z1) {
    let q = this.tr.find((t) => !t.visible); if (!q) { if (this.tr.length > 14) return; q = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 1), new THREE.MeshBasicMaterial({ color: '#ffd978', transparent: true, opacity: 0.9 })); this.group.add(q); this.tr.push(q); }
    const dx = x1 - x0, dy = y1 - y0, dz = z1 - z0, l = Math.hypot(dx, dy, dz) || 1; q.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2); q.scale.set(1, 1, l); q.lookAt(x1, y1, z1); q.visible = true; q.userData.t = 0.07;
  }
  // ---------------------------------------------------------------- per frame
  update(dt) {
    const R = this.R; if (!this.on || !this.sim) return; this.t += dt; const sim = this.sim, b = R.me.body, M = R.mission;
    const P = { x: b.x - CMB.x, z: b.z - CMB.z, hp: this.hp, alive: this.hp > 0 && this.deadT <= 0 };
    const run = M && M.phase === 'run' && !this.over;
    if (run) {
      this.time -= dt;
      // the ammo / health / weapons on the ground
      if (P.alive) { const it = sim.take(P.x, P.z); if (it) this.pickup(it); }
      sim.tick(dt, P);
      for (const e of sim.drain()) this.event(e, b);
      if (this.deadT > 0) { this.deadT -= dt; if (this.deadT <= 0) { this.hp = MY_DMG; this.respawn(); if (R.wallet) { R.wallet.cb = { owned: {}, mag: {}, ammo: {}, nades: 0 }; R.weapon = null; R.aiming = false; R.syncAct && R.syncAct(); R.updateAmmoHud && R.updateAmmoHud(); } if (this.ov) this.ov.style.display = 'none'; } }
      if (this.time <= 0) this.finish();
    }
    this.syncLoot();
    for (const [id, l] of this.loot) {   // spin and bob the loot; remove what was taken
      if (!l.it.alive) { this.group.remove(l.g); this.loot.delete(id); continue; }
      l.g.userData.pivot.rotation.y += dt * 1.8; l.g.userData.pivot.position.y = 1.0 + Math.sin(this.t * 2.2 + l.ph) * 0.12;
    }
    const g0 = (x, z) => 0;
    for (const s of sim.bots) {
      const a = this.bot(s); a.g.visible = true;
      if (s.alive) {
        a.g.rotation.set(0, s.yaw, 0); a.g.position.set(CMB.x + s.x, g0(), CMB.z + s.z);
        a.m.update(dt, { seated: false, speed: s.speed, grounded: true, weapon: s.weapon, aiming: s.seen, crouch: false, vy: 0, stun: 0 });
      } else { a.g.rotation.set(-Math.PI / 2, s.yaw, 0, 'YXZ'); a.g.position.set(CMB.x + s.x, 0.22, CMB.z + s.z); a.m.update(dt, { seated: false, speed: 0, grounded: true }); a.g.visible = s.dieT < 4; }
    }
    for (const q of this.tr) if (q.visible) { q.userData.t -= dt; if (q.userData.t <= 0) q.visible = false; }
    if (this.vig && this.vig.style.opacity > 0) this.vig.style.opacity = Math.max(0, this.vig.style.opacity - dt * 1.6);
    this.hudT = (this.hudT || 0) - dt; if (this.hudT <= 0) { this.hudT = 0.2; this.updateHud(); }
  }
  event(e, b) {
    const R = this.R;
    if (e.k === 'shot') {
      const wx = CMB.x + e.x, wz = CMB.z + e.z, tx = e.hit ? b.x : b.x + (Math.random() - 0.5) * 3, tz = e.hit ? b.z : b.z + (Math.random() - 0.5) * 3, cd = Math.hypot(wx - R.camera.position.x, wz - R.camera.position.z);
      this.tracer(wx, 1.4, wz, tx, 1.3, tz); R.particles && R.particles.emit(wx, 1.4, wz, 3, { color: '#ffd978', speed: 1.5, up: 0.5, life: 0.12, size: 0.14 });
      if (cd < 120) { const v = Math.max(0.18, 1 - cd / 120); e.w === 'ak' ? A.sfx.akShot && A.sfx.akShot(v) : A.sfx.shot(0, v); }
      if (e.hit && this.hp > 0 && this.deadT <= 0) this.hurt(e.dmg);
    } else if (e.k === 'kill') {
      this.kills++; const pay = 100; this.pay += pay; if (R.wallet) R.wallet.add(pay, 'kill'); R.toast && R.toast('ENEMY DOWN  +$' + pay); A.sfx.pickup && A.sfx.pickup();
      R.particles && R.particles.emit(CMB.x + e.x, 1.2, CMB.z + e.z, 10, { color: '#ff5a4a', speed: 3, up: 2, life: 0.4, size: 0.2 });
    } else if (e.k === 'bothit') R.particles && R.particles.emit(CMB.x + e.x, 1.2, CMB.z + e.z, 6, { color: '#ff5a4a', speed: 3, up: 2, life: 0.35, size: 0.2 });
  }
  hurt(d) {
    this.hp -= d; if (this.vig) this.vig.style.opacity = Math.min(1, 0.4 + d / 20); if (this.R.shake !== undefined) this.R.shake = Math.max(this.R.shake, 0.25);
    if (this.hp <= 0) { this.hp = 0; this.deaths++; this.deadT = 4; this.R.me.body.stun = 4; this.R.fireHeld = false; if (this.ov) { this.ov.style.display = 'grid'; this.ov.textContent = 'YOU WERE KILLED  -  RESPAWNING...'; } }
  }
  pickup(it) {
    const R = this.R, W = R.wallet, cb = W && W.cb; if (!cb) return; const k = it.k, A_ = (m) => { R.toast && R.toast(m); A.sfx.pickup && A.sfx.pickup(); };
    const gun = (w) => { const S = WEAPONS[w]; if (!cb.owned[w]) { cb.owned[w] = true; cb.mag[w] = S.mag; cb.ammo[w] = S.ammoPack; if (!R.weapon || R.weapon === 'bat') R.equip(w); A_('PICKED UP ' + LOOT_NAME[w]); } else { cb.ammo[w] = (cb.ammo[w] || 0) + S.ammoPack; A_(LOOT_NAME[w] + ' - EXTRA AMMO'); } };
    if (k === 'pistol' || k === 'ak' || k === 'sniper') gun(k);
    else if (k === 'bat') { if (!cb.owned.bat) { cb.owned.bat = true; if (!R.weapon) R.equip('bat'); A_('PICKED UP BASEBALL BAT'); } else A_('YOU ALREADY HAVE A BAT'); }
    else if (k === 'grenade') { cb.nades = (cb.nades | 0) + 1; A_('GRENADE  x' + cb.nades); }
    else if (k === 'ammo') { let n = 0; for (const w of ['pistol', 'ak', 'sniper']) if (cb.owned[w]) { cb.ammo[w] = (cb.ammo[w] || 0) + WEAPONS[w].ammoPack; n++; } A_(n ? 'AMMO FOR ALL YOUR GUNS' : 'AMMO - FIND A GUN FIRST'); if (!n) { /* put it back for later */ } }
    else if (k === 'med') { this.hp = Math.min(MY_DMG, this.hp + 50); A_('FIRST AID  +50 HEALTH'); }
    R.updateAmmoHud && R.updateAmmoHud(); R.syncAct && R.syncAct(); this.updateHud();
  }
  finish() {
    if (this.over) return; this.over = true; const R = this.R; R.fireHeld = false;
    this.ov.style.display = 'grid'; this.ov.innerHTML = '<div><div style="font-size:34px;color:#ffd23f">MATCH OVER</div><div>KILLS: ' + this.kills + '  •  DEATHS: ' + this.deaths + '</div><div style="color:#5ef0a0">EARNED $' + (this.pay || 0) + '</div><div style="font-size:14px;opacity:.8;margin-top:6px">Waiting for the other players...</div></div>';
    if (R.mission) R.mission.send({ t: 'm_res', ok: true, round: R.mission.round });
  }
  // ---------------------------------------------------------------- the player's attacks (called by main.js; coordinates are world coordinates)
  shoot(ox, oz, fx, fz, range, dmg, w) { if (!this.active) return -1; const d = this.sim.shoot(ox - CMB.x, oz - CMB.z, fx, fz, range, dmg); return d; }
  melee(x, z, fx, fz, reach, kind) { if (!this.active) return 0; return this.sim.melee(x - CMB.x, z - CMB.z, fx, fz, reach, kind === 'bat' ? 55 : kind === 'kick' ? 30 : 22); }
  blast(x, z, r) { if (!this.active) return; this.sim.blast(x - CMB.x, z - CMB.z, r, 3.2); }
}
