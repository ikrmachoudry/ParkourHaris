// COMBAT MISSION on the client: drops the player onto the hidden battle map, draws the bots and the loot, runs the 5 minute match (combat.js has the brain),
// shows the HUD (time, kills, health) and turns the player's bullets, fists and grenades into hits on the bots.
import * as THREE from 'three';
import { makeHero } from './glbactor.js';
import { buildCabin } from './planecabin.js';
import { av } from './assetver.js';
import { preloadAssets } from './preload.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { track } from './loading.js';
import { makeWeaponModel } from './weaponmodels.js';
import * as A from './audio.js';
import { WEAPONS } from './economy.js';
import { CombatSim, CMB, COMBAT_MS, layout, cmbH, supportY, hitsSolid } from './combat.js';
import { Inventory, CAP } from './inventory.js';
import { renderIcons } from './icons.js';
import { propModel, hasProp, propDim } from './props.js';
import { makeZone, zoneAt, bombAt, bombSpot, AIR } from './zone.js';
import { NetSim } from './netsim.js';
import { buildBattleMap } from './battlemap.js';
import { LOBBY } from './gta.js';
import { OPT } from './opts.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const LOOT_COL = { pistol: '#7fd0ff', revolver: '#5fa8ff', smg: '#ffd23f', ak: '#ffb347', m4: '#ff8a47', shotgun: '#ff6b6b', sniper: '#ff6bd6', bat: '#cfa36a', grenade: '#8dff6b', ammo: '#ffe55c', med: '#ff5c5c', inject: '#5ec8ff', pills: '#ffa94d', smoke: '#cfd6dc', scope: '#b48cff', sscope: '#7fe0ff', vest: '#9ad0ff', helmet: '#b0b8c0' };
const fitPx = (c, t, px, maxW) => { c.font = '900 ' + px + 'px Impact, Arial Black, sans-serif'; const w = c.measureText(t).width; return Math.max(18, Math.floor(w > maxW ? px * maxW / w : px)); };   // v271: shrink a name to fit the canopy
const LOOT_NAME = { pistol: 'PISTOL', revolver: 'REVOLVER', smg: 'SMG', m4: 'M4 RIFLE', shotgun: 'SHOTGUN', ak: 'AK-47', sniper: 'SNIPER RIFLE', bat: 'BASEBALL BAT', grenade: 'GRENADE', ammo: 'AMMO', med: 'FIRST AID', inject: 'ADRENALINE', pills: 'PAIN PILLS', smoke: 'SMOKE BOMB', scope: 'TELESCOPE', sscope: 'SNIPER SCOPE (Kar98)', vest: 'BODY ARMOR', helmet: 'HELMET' };
const newCb = () => ({ owned: {}, mag: {}, ammo: {}, nades: 0, inv: { med: 0, inject: 0, pills: 0, smoke: 0, scope: 0, sscope: 0, vest: 0, helmet: 0 }, vestHp: 0, helmHp: 0 });
const ITEM_K = ['med', 'inject', 'pills', 'smoke', 'scope', 'sscope', 'vest', 'helmet'];
const isGunK = (w) => !!(WEAPONS[w] && !WEAPONS[w].melee && !WEAPONS[w].grenade);
const USE = { med: { dur: 4, hp: 50, name: 'FIRST AID' }, pills: { dur: 3, hp: 25, name: 'PAIN PILLS' }, inject: { dur: 1.8, hp: 20, name: 'ADRENALINE', boost: 6 } };
const MY_DMG = 100;   // hit points of the player

const IS_PHONE = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent), BOT_VIS2 = (IS_PHONE ? 230 : 330) ** 2, BOT_MID2 = 70 ** 2;   // bots: not drawn beyond this (m, squared) / animated at a third of the rate beyond 70 m
const LOOT_VIS2 = (/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent) ? 70 : 120) ** 2;   // loot is drawn only this close (metres, squared)
// Shared loot parts (v221, P4): every crate / pill / ring of the same kind uses ONE material and ONE geometry, so the phone keeps a few dozen GPU objects instead of hundreds.
const _SH = new Map(), _TINT = new Map();   // _TINT: the red enemy tint is made once per soldier material, not once per bot
const GEO = (k, ...a) => { const id = k + a.join(','); let g = _SH.get(id); if (!g) { g = new THREE[k + 'Geometry'](...a); _SH.set(id, g); } return g; };
const SM = (c, r) => { const id = 'S' + c + (r || ''); let m = _SH.get(id); if (!m) { m = new THREE.MeshStandardMaterial(r ? { color: c, roughness: r } : { color: c }); _SH.set(id, m); } return m; };
const RM = (c, o) => { const id = 'R' + c + o; let m = _SH.get(id); if (!m) { m = new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: o, side: THREE.DoubleSide, depthWrite: false }); _SH.set(id, m); } return m; };
export class CombatScene {
  constructor(race) {
    this.R = race; this.on = false; this.sim = null; this.bots = new Map(); this.mates = new Map(); this.loot = new Map(); this.dsm = new Map(); this.group = new THREE.Group(); this.group.visible = false; race.scene.add(this.group);
    this.hp = MY_DMG; this.time = COMBAT_MS / 1000; this.over = false; this.t = 0; this.hud = null; this.deadT = 0; this.kills = 0; this.deaths = 0; this.tr = [];
    this.tmpV = new THREE.Vector3(); this.using = null; this.boostT = 0; this.promptIt = null; this.inv = new Inventory(this);
  }
  get active() { return this.on && !this.down && !this.over && !!this.sim && this.R.mission && this.R.mission.phase === 'run' && this.deadT <= 0; }
  // ---------------------------------------------------------------- HUD
  showHud(on) {
    if (!this.hud) {
      if (!on) return;
      const e = document.createElement('div'); e.id = 'c-hud';
      e.style.cssText = 'position:fixed;left:50%;top:max(6px,env(safe-area-inset-top));transform:translateX(-50%);z-index:30;pointer-events:none;text-align:center;font:800 12px/1 system-ui,sans-serif;color:#fff;background:rgba(0,0,0,.35);border-radius:10px;padding:4px 10px;text-shadow:0 1px 2px #000';
      e.innerHTML = '<div class="ch-t" style="font-size:12px;letter-spacing:1px">15:00</div><div class="ch-s" style="display:none"></div>';
      document.body.appendChild(e); this.hud = e;
      const hb = document.createElement('div'); hb.id = 'c-hp'; hb.style.cssText = 'position:fixed;left:50%;bottom:max(8px,2.5vh);transform:translateX(-50%);z-index:30;pointer-events:none;width:min(26vw,260px);font:800 11px/1 system-ui,sans-serif;color:#fff;text-shadow:0 1px 3px #000;text-align:center';
      hb.innerHTML = '<div style="display:flex;justify-content:space-between;margin:0 4px 4px"><span></span><span class="cp-n">100</span></div><div style="height:8px;background:#0008;border:1px solid #fff9;border-radius:5px;overflow:hidden"><i class="cp-b" style="display:block;height:100%;width:100%;background:#4ade80;transition:width .2s"></i></div>';
      document.body.appendChild(hb); this.hpBar = hb;
      const vg = document.createElement('div'); vg.style.cssText = 'position:fixed;inset:0;z-index:29;pointer-events:none;opacity:0;transition:opacity .2s;background:radial-gradient(ellipse at center,transparent 45%,rgba(220,0,0,.8) 100%)'; document.body.appendChild(vg); this.vig = vg;
      const ov = document.createElement('div'); ov.style.cssText = 'position:fixed;inset:0;z-index:40;display:none;place-items:center;pointer-events:none;background:rgba(0,0,0,.55);color:#fff;font:800 20px/1.5 system-ui,sans-serif;text-align:center;text-shadow:0 2px 6px #000'; document.body.appendChild(ov); this.ov = ov;
      const jb = document.createElement('button'); jb.id = 'c-jump'; jb.innerHTML = '<svg viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M16 5v18M8 15l8-10 8 10"/><path d="M9 27h14"/></svg><b>JUMP</b>';
      jb.style.cssText = 'position:fixed;right:max(22px,6vw);bottom:34%;z-index:45;display:none;flex-direction:column;align-items:center;gap:2px;width:92px;height:92px;border-radius:50%;border:3px solid #fffd;background:rgba(20,24,20,.62);color:#fff;font:800 14px system-ui,sans-serif;justify-content:center;touch-action:none;cursor:pointer';
      const jd = (e) => { e.preventDefault(); e.stopPropagation(); this.jumpReq = true; }; jb.addEventListener('pointerdown', jd); jb.addEventListener('touchstart', jd, { passive: false });
      document.body.appendChild(jb); this.jumpBtn = jb;
    }
    this.inv.showBag(on); this.hud.style.display = on ? 'block' : 'none'; this.hpBar.style.display = on ? 'block' : 'none'; if (!on) { this.using = null; this.R.telescope = false; this.promptIt = null; if (this.useBar) this.useBar.style.display = 'none'; if (this.pickBtn) this.pickBtn.style.display = 'none'; this.vig.style.opacity = 0; this.ov.style.display = 'none'; this.jumpBtn.style.display = 'none'; }
  }
  updateHud() {
    if (!this.hud) return; const m = Math.max(0, Math.ceil(this.time)), mm = Math.floor(m / 60), ss = m % 60;
    { const ct = this.hud.querySelector('.ch-t'); ct.textContent = mm + ':' + (ss < 10 ? '0' : '') + ss + (this.zoneTxt && !this.dropping ? '  \u2022  ' + this.zoneTxt : ''); ct.style.color = this.outZone ? '#ff6b6b' : '#fff'; }
    this.hud.querySelector('.ch-s').textContent = 'KILLS ' + this.kills + '   •   DEATHS ' + this.deaths;
    const h = clamp(this.hp, 0, MY_DMG); this.hpBar.querySelector('.cp-n').textContent = Math.round(h); const b = this.hpBar.querySelector('.cp-b'); b.style.width = h + '%'; b.style.background = h > 55 ? '#4ade80' : h > 25 ? '#facc15' : '#ef4444';
  }
  // ---------------------------------------------------------------- start / stop
  begin(m, seat) {
    this.clear(); const R = this.R, b = R.me.body; A.setCommentary(false); this.on = true;   // no Punjabi commentary in the combat mission
 this.over = false; this.kills = 0; this.deaths = 0; this.hp = MY_DMG; this.time = COMBAT_MS / 1000; this.deadT = 0;
    { const T = R.jangTeam; this.shared = !!(T && T.shared && T.net); this.sim = this.shared ? new NetSim((m.round * 7919 + 13) | 0, T.net, T.myId) : new CombatSim(((Math.random() * 2147483000) | 0) || 77, 8); }   /* v264: a solo match has its own random seed: loot, bots and zone are different every game */   // v245: 2+ players = the SERVER runs the bots and the loot
    this.group.visible = true; this.pay = 0;
    if (R.world && R.world.group) R.world.group.visible = false;   // the city is 800 000 triangles and 1.5 km away: do not draw it during the match
    if (!this.map) { const t0 = performance.now(); this.map = buildBattleMap(R.isTouch ? 0 : 2); this.buildMs = Math.round(performance.now() - t0); this.group.add(this.map.group); }   // the landscape is built the first time a match starts (the city never pays for it)
    if (R.wallet) { R.wallet.cb = newCb(); R.weapon = null; R.aiming = false; R.syncAct && R.syncAct(); R.updateAmmoHud && R.updateAmmoHud(); }
    this.respawn(seat | 0); this.map.warm(R.me.body); this.showHud(true); this.updateHud(); this.syncLoot();
    this.startDrop();
  }
  respawn(seat) {
    const R = this.R, b = R.me.body, L = layout(); let p = L.spawns[((seat === undefined ? Math.floor(Math.random() * L.spawns.length) : seat * 5 + 1) % L.spawns.length + L.spawns.length) % L.spawns.length];
    if (seat === undefined && this.z && this.sim) { const zz = this.z, ins = L.spawns.filter((q) => Math.hypot(q.x - zz.nx, q.z - zz.nz) < zz.nr * 0.8 && Math.hypot(q.x - zz.x, q.z - zz.z) < zz.r * 0.8); p = ins.length ? ins[Math.floor(Math.random() * ins.length)] : this.sim.zoneSpot(zz.nx, zz.nz, zz.nr); this.safeUntil = this.t + 4; R.toast && R.toast('RESPAWNED INSIDE THE SAFE ZONE (blue circle) - look at the minimap', 4); }   // v251: after you die you come back INSIDE the safe circle, never in the danger zone
    b.x = CMB.x + p.x; b.z = CMB.z + p.z; b.y = cmbH(p.x, p.z) + 0.05; b.vx = b.vz = b.vy = 0; b.stun = 0; b.hitCd = 0.5; R.crouch = false; R.camInit = false; R.camYaw = Math.random() * 6.28;
  }
  clear() {
    for (const [, a] of this.bots) { this.group.remove(a.g); a.m.dispose && a.m.dispose(); } this.bots.clear();
    for (const [, g] of this.mates) { this.group.remove(g.m.group); this.group.remove(g.ch); g.m.dispose && g.m.dispose(); } this.mates.clear(); A.remoteEngineStop && A.remoteEngineStop(); if (this.R.mateCars) this.R.mateCars.clear();
    for (const [, l] of this.loot) this.group.remove(l.g); this.loot.clear(); for (const [, sm] of this.dsm) this.group.remove(sm.g); this.dsm.clear(); for (const q of this.tr) this.group.remove(q); this.tr.length = 0;
    this.down = false; this.reviving = null; if (this.reviveBtn) this.reviveBtn.style.display = 'none';
    if (this.bw) { this.group.remove(this.bw); for (const q of this.bombs) this.group.remove(q.m); this.bw = null; this.bombs = null; } if (this.airs) { for (const a of this.airs) { this.group.remove(a.plane); this.group.remove(a.crate); } this.airs = null; } this._bk = -1; this._bmsg = 0;
    if (this.zw) { this.group.remove(this.zw); this.zw = null; } this.Z = null; this.z = null; if (this.R.minimap) { this.R.minimap.zone = null; this.R.minimap.bomb = null; this.R.minimap.air = null; }
    this.endDrop(); this.sim = null; this.on = false; this.group.visible = false; if (this.R.world && this.R.world.group) this.R.world.group.visible = !this.R.jang; this.showHud(false); document.body.classList.remove('jang-fight'); this._fight = null; if (this.slotEl) this.slotEl.style.display = 'none'; if (this.tipEl) { this.tipEl.style.display = 'none'; this._tipOn = false; } A.setCommentary(OPT.punjabi !== false);
  }
  // back to the city (the mission is over for everybody): the backpack is emptied, the saved weapons come back, you stand outside the mission lobby
  leave() {
    if (!this.on && !(this.R.wallet && this.R.wallet.cb)) { this.clear(); return; }
    const R = this.R, b = R.me.body; this.clear();
    if (R.wallet) { R.wallet.cb = null; if (R.weapon && !R.wallet.owns(R.weapon)) R.weapon = null; R.syncAct && R.syncAct(); R.updateAmmoHud && R.updateAmmoHud(); }
    const x = LOBBY.x, z = LOBBY.z + LOBBY.d / 2 + 3.5; b.x = x; b.z = z; b.y = (R.world && R.world.terrain ? R.world.terrain(x, z) : 0) + 0.05; b.vx = b.vz = b.vy = 0; b.stun = 0; R.camInit = false;
  }
  // ---------------------------------------------------------------- the drop: a transport plane flies over the island, you jump, free-fall and open the parachute
  loadPlane() {
    if (this.planeP) return this.planeP;
    return this.planeP = track(new Promise((res) => new GLTFLoader().load(av('models/c130.glb'), (g) => {
      const inner = g.scene; inner.position.set(3.83, 0, -4.73); const w = new THREE.Group(); w.add(inner); w.rotation.y = 0.9235; this.planeProps = [];   // the scan faces the wrong way: turn the nose to +Z, centre it
      const COL = (n) => /FUZEL/.test(n) ? '#e4e9f2' : /KRIL|OPER|Object05|NGon|Box09/.test(n) ? '#27478a' : /KIL/.test(n) ? '#27478a' : /Cylinder0[12]/.test(n) ? '#aab3c4' : '#c9d0dd';
      inner.updateMatrixWorld(true);
      inner.traverse((o) => { if (!o.isMesh) return; let p = o; while (p.parent && p.parent !== inner.children[0] && p.parent !== inner) p = p.parent; const nm = p.name || o.name; const m = new THREE.MeshStandardMaterial({ color: COL(nm), roughness: 0.55, metalness: 0.25 }); if (o.material) { (Array.isArray(o.material) ? o.material : [o.material]).forEach((q) => { if (q.map) q.map.dispose(); q.dispose(); }); } o.material = m; o.castShadow = false; });   // flat paint: no insignia from the scan
      const E = [['Cone09', 'Cylinder15', 'Cylinder16', 'Cylinder17', 'Cylinder18'], ['Cone08', 'Cylinder11', 'Cylinder12', 'Cylinder13', 'Cylinder14'], ['Cone04', 'Cylinder03', 'Cylinder04', 'Cylinder05', 'Cylinder06'], ['Cone05', 'Cylinder07', 'Cylinder08', 'Cylinder09', 'Cylinder10']];
      w.updateMatrixWorld(true);
      for (const names of E) { const nodes = names.map((n) => inner.getObjectByName(n)).filter(Boolean); if (!nodes.length || !nodes[0]) continue;
        const bb = new THREE.Box3().setFromObject(nodes[0]), c = bb.getCenter(new THREE.Vector3()); const pv = new THREE.Group(); pv.position.copy(w.worldToLocal(c.clone())); w.add(pv); pv.updateMatrixWorld(true); for (const nd of nodes) pv.attach(nd); this.planeProps.push(pv); }
      buildCabin(w, inner);
      w.scale.setScalar(1.25); res(w);
    }, undefined, () => res(null))), 'PLANE');
  }
  // v220: called behind the loading screen: waits for every file, builds the bots, then draws EVERYTHING once off-screen (shaders compiled, textures + models uploaded to the graphics card),
  // so nothing is compiled or uploaded while you play (that was the stutter when a gun, bot or the plane first came into view)
  prepare() {
    const R = this.R;
    return Promise.all([preloadAssets('jang'), this.loadPlane()]).catch(() => {}).then(() => { try { if (this.sim && this.on) for (const s of this.sim.bots) this.bot(s); } catch (e) { /* ignore */ } return new Promise((res) => setTimeout(res, 250)); }).then(() => {   // (the soldiers attach their model a moment after they are created)
      try {
        if (!this.sim || !this.on) return;
        const vis = []; const show = (o) => { if (o) { vis.push([o, o.visible]); o.visible = true; } };
        for (const [, l] of this.loot) show(l.g); for (const [, a] of this.bots) show(a.g); show(this.plane);
        if (this.plane && !this.plane.children.length) this.loadPlane().then((w) => { if (w && this.plane && !this.plane.children.length) this.plane.add(w); });
        R.warmUp();
        for (const [o, v] of vis) o.visible = v;
      } catch (e) { console.warn('warm-up skipped', e); }
    });
  }
  startDrop() {
    const R = this.R, b = R.me.body, T = R.jangTeam, rr = (k) => { const x = Math.sin((T ? T.seed : 0) * 12.9898 + k * 78.233) * 43758.5453; return x - Math.floor(x); };   // team match: the whole room shares one flight line, the second team gets its own plane flying the other way
    const a0 = T ? rr(1) * Math.PI * 2 : Math.random() * Math.PI * 2, tn = T ? T.tm | 0 : 0, a = tn === 1 ? a0 + Math.PI : tn === 2 ? a0 + Math.PI / 2 : a0, hd = [Math.sin(a), Math.cos(a)], off0 = T ? (rr(2) - 0.5) * 240 : (Math.random() - 0.5) * 240, off = tn === 1 ? -off0 * 0.6 + 40 : tn === 2 ? off0 * 0.4 - 30 : off0, L = 760;
    const cx = CMB.x - hd[1] * off, cz = CMB.z + hd[0] * off;   // a straight line across the island, a little off centre
    this.drop = { ph: 'plane', t: 0, hd, a, sx: cx - hd[0] * L / 2, sz: cz - hd[1] * L / 2, L, v: 34, alt: 230, vx: 0, vz: 0, hint: 0, ch: 0 };
    this.dropping = true; this.dropPose = 0;
    if (!this.plane) { this.plane = new THREE.Group(); this.group.add(this.plane); }
    this.plane.visible = true; this.plane.clear(); this.loadPlane().then((w) => { if (w && this.plane && this.drop) { this.plane.clear(); this.plane.add(w); } });
    this.placeDrop(0); b.vx = b.vz = b.vy = 0; b.grounded = false; R.camInit = false; R.camYaw = a; R.toast && R.toast('✈ move (W / joystick) to stand up, walk to the back door and press JUMP', 4);
  }
  placeDrop(t) { const d = this.drop, b = this.R.me.body; const x = d.sx + d.hd[0] * d.v * t, z = d.sz + d.hd[1] * d.v * t;
    if (this.plane) { this.plane.position.set(x, d.alt, z); this.plane.rotation.y = d.a; }
    if (d.ph === 'plane') { b.x = x; b.y = d.alt - 1.2; b.z = z; b.yaw = d.a; } }
  stepDrop(dt, inp, b) {   // called by the main loop instead of the ground physics while dropping
    const d = this.drop; if (!d) { this.dropping = false; return; }
    const R = this.R, g = R.me.model && R.me.model.group; d.t += dt;
    if (this.plane && this.planeProps) for (const pv of this.planeProps) { pv.rotation.z += dt * 38; pv.visible = d.ph !== 'plane'; }   // v211: the propeller blades are not drawn while you stand inside the cabin
    if (d.ph === 'plane') {
      this.placeDrop(d.t); if (g) g.visible = true; const w = this.plane && this.plane.children[0]; if (w && w.userData.scan) { w.userData.scan.visible = false; w.userData.cabin.visible = true; }
      const ml = Math.hypot(inp.mx, inp.mz), sd = w && w.userData.seat;
      if (!d.stand && ml > 0.25 && d.t > 0.6) { d.stand = true; d.lu = -1.1; d.lv = -1.0; R.toast && R.toast('WALK to the back door, then tap JUMP', 3.5); }   // get up and walk
      if (d.stand && w) {   // walking in the cabin: the plane's own frame (u along the fuselage, v across), the body keeps the floor
        const ca = Math.cos(d.a), sa = Math.sin(d.a), spd = 3.4, du = (inp.mx * d.hd[0] + inp.mz * d.hd[1]) * spd * dt / 1.25, dv = (inp.mx * ca - inp.mz * sa) * spd * dt / 1.25;
        d.lu = Math.max(-6.9, Math.min(5.4, d.lu + du)); d.lv = Math.max(-1.0, Math.min(1.0, d.lv + dv));
        this.plane.updateMatrixWorld(true); const v = w.localToWorld(new THREE.Vector3(d.lv, -0.49, d.lu)); b.x = v.x; b.y = v.y; b.z = v.z; b.grounded = true; this.dropPose = 0;
        b.vx = ml > 0.1 ? inp.mx * spd : 0; b.vz = ml > 0.1 ? inp.mz * spd : 0; if (ml > 0.1) b.yaw = Math.atan2(inp.mx, inp.mz);
      } else if (sd) { b.grounded = false; this.dropPose = 3; this.plane.updateMatrixWorld(true); const v = sd.getWorldPosition(new THREE.Vector3()), so = ((this.R.jangTeam ? this.R.jangTeam.si : 0) - 1.5) * 0.6; b.x = v.x + d.hd[0] * so; b.y = v.y - 0.3; b.z = v.z + d.hd[1] * so; b.yaw = d.a + Math.PI / 2; b.vx = b.vz = 0; }   // sitting on the left bench, facing the aisle
      const DOOR_T = 6, open = d.t >= DOOR_T; if (w && w.userData.door) w.userData.door.visible = !open;   // v182: the back door opens by itself after 6 s - nobody can dive before that
      { if (!this.doorEl) { const e = document.createElement('div'); e.style.cssText = 'position:fixed;left:50%;top:max(44px,7vh);transform:translateX(-50%);z-index:31;pointer-events:none;font:800 14px/1.2 system-ui,sans-serif;color:#fff;background:rgba(0,0,0,.45);border-radius:10px;padding:5px 12px;text-shadow:0 1px 2px #000;white-space:nowrap'; document.body.appendChild(e); this.doorEl = e; }
        const t = open ? (d.stand ? 'DOOR OPEN  -  GO TO THE BACK AND DIVE' : 'DOOR OPEN  -  WALK TO THE BACK DOOR, THEN DIVE') : 'DOOR OPENS IN ' + Math.ceil(DOOR_T - d.t); if (this.doorEl.textContent !== t) this.doorEl.textContent = t; this.doorEl.style.display = 'block'; }
      const dist = d.v * d.t, atDoor = d.stand && d.lu < -5.4 && open;
      { const jb = document.getElementById('a-jump'); if (jb) jb.classList.toggle('ready', !!atDoor); } if (this.jumpReq) { inp.jumpPressed = true; this.jumpReq = false; } if (this.jumpBtn) { this.jumpBtn.style.display = 'flex'; this.jumpBtn.style.borderColor = atDoor ? '#6dff8a' : '#fffd'; this.jumpBtn.style.background = atDoor ? 'rgba(30,140,60,.75)' : 'rgba(20,24,20,.62)'; }
      if (inp.jumpPressed && dist > 40 && !atDoor) { d.hint = (d.hint || 0) + 1; R.toast && R.toast(d.stand ? 'Go to the back door and dive' : 'Walk to the back door, then DIVE', 2.5); }
      if ((inp.jumpPressed && dist > 40 && atDoor) || dist > d.L - 20) {   // out of the plane
        d.ph = 'fall'; this.dropPose = 1; if (this.doorEl) this.doorEl.style.display = 'none'; { const jb = document.getElementById('a-jump'); if (jb) jb.classList.remove('ready'); } if (this.jumpBtn) this.jumpBtn.style.display = 'none'; if (w && w.userData.scan) { w.userData.scan.visible = true; w.userData.cabin.visible = false; } b.y += 0.6; d.vx = d.hd[0] * d.v * 0.7; d.vz = d.hd[1] * d.v * 0.7; b.vy = 0; R.camInit = false; }
      return;
    }
    if (this.plane) { this.plane.position.x += d.hd[0] * d.v * dt; this.plane.position.z += d.hd[1] * d.v * dt; if (d.t > 40) this.plane.visible = false; }
    if (d.tw) { this.stepGlide(dt, inp, b); return; }
    const gy = cmbH(b.x - CMB.x, b.z - CMB.z), h = b.y - gy;
    if (d.ph === 'fall' && (inp.jumpPressed && d.t > (d.mt || 1.2) || h < (d.oh || 110))) { d.ph = 'chute'; d.ch = 0; }   // open the parachute (by hand, or automatically at 110 m)
    this.diveUI(d.ph === 'fall' || d.ph === 'chute'); const dv = (this.diveHold.dive ? 1 : 0) - (this.diveHold.up ? 1 : 0);   // v234: PUBG-style: DIVE (Shift) = head down, faster; PULL UP (C) = flare, slower and floating
    const free = d.ph === 'fall'; const maxH = (free ? 26 : 12) * (dv > 0 ? (free ? 1.45 : 1.8) : dv < 0 ? 0.55 : 1), ml = Math.hypot(inp.mx, inp.mz);
    const tx = inp.mx * maxH, tz = inp.mz * maxH, k = Math.min(1, dt * (free ? 1.6 : 1.1)); d.vx += (tx - d.vx) * k; d.vz += (tz - d.vz) * k;
    const vyT = free ? (dv > 0 ? -78 : dv < 0 ? -34 : -52) : (dv > 0 ? -15 : dv < 0 ? -3.6 : -6.5); b.vy += (vyT - b.vy) * Math.min(1, dt * (free ? 1.1 : 1.7)); if (free && dv >= 0) b.vy -= 9 * dt * (b.vy > -40 ? 1 : 0);
    const py = b.y, Lm = layout(); let nx = b.x + d.vx * dt, nz = b.z + d.vz * dt;
    { const hs = hitsSolid(Lm, nx - CMB.x, nz - CMB.z, 0.38, py); if (hs && hs.k !== 'tree' && hs.k !== 'roof' && hs.k !== 'floor') { nx = b.x; nz = b.z; d.vx *= 0.2; d.vz *= 0.2; } }   // the chute cannot go through a wall
    b.x = nx; b.z = nz; b.y += b.vy * dt; b.vx = d.vx; b.vz = d.vz; b.grounded = false; if (ml > 0.1 || Math.hypot(d.vx, d.vz) > 3) b.yaw = Math.atan2(d.vx, d.vz);
    this.dropPose = free ? 1 : 2;
    const gy2 = Math.max(gy, supportY(Lm, b.x - CMB.x, b.z - CMB.z, 0.3, py));   // land on a roof or a crate, not through it
    if (b.y <= gy2 + 0.05) { b.y = gy2 + 0.05; b.vy = 0; b.vx = d.vx * 0.3; b.vz = d.vz * 0.3; b.grounded = true; this.endDrop(true); return; }
    this.chuteVis(d.ph === 'chute', b, dt);
  }
  /* v257: the TOWER PARAGLIDER (a ram-air wing): it opens at once, flies forward all the time, the stick turns it, DIVE = speed bar (fast, steep), PULL UP = brakes (slow, shallow). Trim 13 m/s forward at 2 m/s down = glide ratio 6.5: a 43 m tower reaches ~280 m */
  stepGlide(dt, inp, b) {
    const d = this.drop, Lm = layout(), dv = (this.diveHold && this.diveHold.dive ? 1 : 0) - (this.diveHold && this.diveHold.up ? 1 : 0), ml = Math.hypot(inp.mx, inp.mz);
    this.diveUI(true);
    let turn = 0; if (ml > 0.15) { let df = Math.atan2(inp.mx, inp.mz) - d.gh; df = Math.atan2(Math.sin(df), Math.cos(df)); turn = Math.max(-1, Math.min(1, df * 1.6)); d.gh += turn * 1.25 * dt; }
    d.bank += (turn - d.bank) * Math.min(1, dt * 3);
    const spT = dv > 0 ? 19 : dv < 0 ? 8.5 : 13, sinkT = (dv > 0 ? 4.2 : dv < 0 ? 1.4 : 2.0) * (1 + 0.5 * Math.abs(d.bank));
    d.sp += (spT - d.sp) * Math.min(1, dt * 1.1); b.vy += (-sinkT - b.vy) * Math.min(1, dt * 2.2);
    d.vx = Math.sin(d.gh) * d.sp; d.vz = Math.cos(d.gh) * d.sp;
    const py = b.y; let nx = b.x + d.vx * dt, nz = b.z + d.vz * dt;
    { const hs = hitsSolid(Lm, nx - CMB.x, nz - CMB.z, 0.38, py); if (hs && hs.k !== 'tree' && hs.k !== 'roof' && hs.k !== 'floor') { nx = b.x; nz = b.z; d.sp *= 0.35; } }
    b.x = nx; b.z = nz; b.y += b.vy * dt; b.vx = d.vx; b.vz = d.vz; b.grounded = false; b.yaw = d.gh; this.dropPose = 2;
    const gy = cmbH(b.x - CMB.x, b.z - CMB.z), gy2 = Math.max(gy, supportY(Lm, b.x - CMB.x, b.z - CMB.z, 0.3, py));
    if (b.y <= gy2 + 0.05) { b.y = gy2 + 0.05; b.vy = 0; b.vx = d.vx * 0.3; b.vz = d.vz * 0.3; b.grounded = true; this.endDrop(true); return; }
    this.chuteVis(true, b, dt);
  }
  myName() { try { const n = (localStorage.getItem('ph_name') || '').trim().toUpperCase().slice(0, 14); return n || 'HARIS'; } catch { return 'HARIS'; } }   // v271: the player's own name goes on his parachute / paraglider
  mkGlider(nm = this.myName()) {
    const g = new THREE.Group(), cv = document.createElement('canvas'); cv.width = 512; cv.height = 160; const c = cv.getContext('2d');   /* the wing carries the PAKISTAN FLAG: green, white hoist stripe, crescent and star */
    c.fillStyle = '#01411c'; c.fillRect(0, 0, 512, 160); c.save(); c.scale(1, 0.7); c.fillStyle = '#fff'; c.fillRect(0, 0, 128, 160);
    c.beginPath(); c.arc(318, 80, 56, 0, 7); c.fill(); c.fillStyle = '#01411c'; c.beginPath(); c.arc(340, 70, 49, 0, 7); c.fill();
    c.fillStyle = '#fff'; c.beginPath(); for (let i = 0; i < 10; i++) { const r = i % 2 ? 11 : 27, a = -Math.PI / 2 + i * Math.PI / 5 + 0.5; c.lineTo(386 + Math.cos(a) * r, 52 + Math.sin(a) * r); } c.closePath(); c.fill(); c.restore();
    c.fillStyle = '#ffd23f'; c.strokeStyle = '#000'; c.lineWidth = 7; c.font = '900 ' + fitPx(c, nm, 62, 440) + 'px Impact, Arial Black, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.strokeText(nm, 256, 130); c.fillText(nm, 256, 130);   /* v258: the big name on the wing */
    const tx = new THREE.CanvasTexture(cv); tx.anisotropy = 2;
    const span = 9.4, chord = 2.9, geo = new THREE.PlaneGeometry(span, chord, 28, 6), P = geo.attributes.position;
    for (let i = 0; i < P.count; i++) { const x = P.getX(i), y = P.getY(i), u = x / (span / 2); P.setXYZ(i, x, -u * u * 1.9 + 0.3 * (1 - (y / (chord / 2)) ** 2) - (y > 0 ? 0 : 0.18 * (1 + y / (chord / 2)) * 0), y); }   // a curved wing: the tips droop, a little camber
    geo.computeVertexNormals();
    const wing = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tx, side: THREE.DoubleSide })); wing.position.set(0, 4.6, 0.5); g.add(wing);
    const lp = [], V = THREE.Vector3; const top = (x, z) => { const u = x / (span / 2); return [x, 4.6 - u * u * 1.9 + 0.12, 0.5 + z]; };
    for (let k = 0; k < 9; k++) { const x = -4.1 + k * 1.025, sx = x < 0 ? -0.24 : 0.24; for (const z of [-0.9, 0.9]) { const a = top(x, z); lp.push(a[0], a[1], a[2], sx, 1.62, 0.02); } }
    const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(lp, 3)); g.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0xe8e4d6 })));
    const hm = new THREE.MeshStandardMaterial({ color: '#23262b', roughness: 0.8 }); for (const sx of [-1, 1]) { const sb = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.55, 0.3), hm); sb.position.set(sx * 0.21, 1.4, 0); g.add(sb); }
    return g;
  }
  diveUI(on) {
    if (!this.diveHold) { this.diveHold = { dive: false, up: false };
      const mk = (id, txt, svg, bot, key) => { const e = document.createElement('button'); e.id = id; e.innerHTML = svg + '<b>' + txt + '</b>'; e.style.cssText = 'position:fixed;right:27vw;bottom:' + bot + ';z-index:45;display:none;flex-direction:column;align-items:center;justify-content:center;gap:1px;width:78px;height:78px;border-radius:50%;border:3px solid #fffd;background:rgba(20,24,20,.62);color:#fff;font:800 11px system-ui,sans-serif;touch-action:none;cursor:pointer';
        const dn = (ev) => { ev.preventDefault(); ev.stopPropagation(); this.diveHold[key] = true; e.style.background = 'rgba(30,110,200,.8)'; }, up = () => { this.diveHold[key] = false; e.style.background = 'rgba(20,24,20,.62)'; };
        e.addEventListener('pointerdown', dn); for (const n of ['pointerup', 'pointercancel', 'pointerleave']) e.addEventListener(n, up); e.addEventListener('contextmenu', (ev) => ev.preventDefault()); document.body.appendChild(e); return e; };   // (v236: the player's own button layout applies to these too)
      this.diveBtn = mk('c-dive', 'DIVE', '<svg viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 5v20M8 17l8 10 8-10"/></svg>', 'calc(16vh + 88px)', 'dive');
      this.upBtn = mk('c-pullup', 'PULL UP', '<svg viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 27V7M8 15l8-10 8 10"/></svg>', '16vh', 'up');
      if (window.phApplyLayout) setTimeout(window.phApplyLayout, 0);
      const kk = (v) => (e) => { if (!this.dropping) return; if (e.key === 'Shift') this.diveHold.dive = v; else if (e.code === 'KeyC') this.diveHold.up = v; };
      addEventListener('keydown', kk(true)); addEventListener('keyup', kk(false)); addEventListener('blur', () => { this.diveHold.dive = this.diveHold.up = false; }); }
    const sh = on ? 'flex' : 'none'; if (this.diveBtn.style.display !== sh) { this.diveBtn.style.display = this.upBtn.style.display = sh; if (!on) this.diveHold.dive = this.diveHold.up = false; }
    if (on && !this.diveHint) { this.diveHint = true; this.R.toast && this.R.toast('DIVE (Shift) = faster down  -  PULL UP (C) = slow down and glide', 4.5); }
  }
  mkChute(nm = this.myName()) {   // v263: the REAL army parachute model (canopy + lines); the harness, risers and pack on the player are still drawn here
    const g = new THREE.Group(), cm = propModel('chute'); const SC = 1.1;
    if (cm) { cm.scale.setScalar(SC); cm.position.y = 1.62; g.add(cm); }
    { const cv = document.createElement('canvas'); cv.width = 256; cv.height = 96; const c = cv.getContext('2d'); c.fillStyle = '#ffd23f'; c.strokeStyle = '#000'; c.lineWidth = 8; c.font = '900 ' + fitPx(c, nm, 72, 236) + 'px Impact, Arial Black, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.strokeText(nm, 128, 50); c.fillText(nm, 128, 50);   /* the name on the canopy, four times round */
      const tm = new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, side: THREE.DoubleSide, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
      for (let q = 0; q < 4; q++) { const a = q * Math.PI / 2 + Math.PI / 4, n = new THREE.Vector3(Math.cos(a) * 0.78, 0.62, Math.sin(a) * 0.78).normalize(), m = new THREE.Mesh(new THREE.PlaneGeometry(1.7 * SC, 0.65 * SC), tm); m.position.set(Math.cos(a) * 1.64 * SC, 1.62 + 4.9 * SC, Math.sin(a) * 1.64 * SC).addScaledVector(n, 0.04); m.lookAt(m.position.clone().add(n)); g.add(m); } }
      const lm = new THREE.MeshBasicMaterial({ color: '#e8e4d6' }), hm = new THREE.MeshStandardMaterial({ color: '#23262b', roughness: 0.8 }), V = THREE.Vector3;
      const seg = (p, q, r, mat) => { const d = q.clone().sub(p), l = d.length(), m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, l, 5), mat); m.position.copy(p).addScaledVector(d, 0.5); m.quaternion.setFromUnitVectors(new V(0, 1, 0), d.normalize()); return m; };
      for (const sx of [-1, 1]) { g.add(seg(new V(sx * 0.24, 1.62, 0), new V(sx * 0.2, 1.05, 0.05), 0.035, hm)); const sb = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.55, 0.3), hm); sb.position.set(sx * 0.21, 1.4, 0); sb.rotation.z = sx * 0.06; g.add(sb); const lg = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.06, 0.3), hm); lg.position.set(sx * 0.16, 0.62, 0.02); g.add(lg); }
      const belt = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.32), hm); belt.position.set(0, 0.98, 0); g.add(belt); const chest = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.05, 0.31), hm); chest.position.set(0, 1.46, 0); g.add(chest);
      const pack = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.55, 0.22), new THREE.MeshStandardMaterial({ color: '#3f5d34', roughness: 0.9 })); pack.position.set(0, 1.25, -0.28); g.add(pack);   // the empty pack on the back
      return g;
  }
  chuteVis(on, b, dt) {
    const d = this.drop, gl = !!(d && d.tw);
    if (!this.chute) { this.chute = this.mkChute(); this.group.add(this.chute); } if (gl && !this.glider) { this.glider = this.mkGlider(); this.group.add(this.glider); }
    const o = gl ? this.glider : this.chute; this.chute.visible = on && !gl; if (this.glider) this.glider.visible = on && gl; if (!on) return;
    d.ch = Math.min(1, d.ch + dt * (gl ? 2 : 2.5)); o.scale.setScalar(0.25 + 0.75 * d.ch); o.position.set(b.x, b.y, b.z);
    if (gl) o.rotation.set(0.12, d.gh, -d.bank * 0.4 + Math.sin(this.t * 1.1) * 0.03, 'YXZ'); else o.rotation.set(0, b.yaw, Math.sin(this.t * 1.3) * 0.04);
  }
  endDrop(landed) { this.diveHint = false; if (this.diveBtn) { this.diveBtn.style.display = this.upBtn.style.display = 'none'; this.diveHold.dive = this.diveHold.up = false; } if (this.doorEl) this.doorEl.style.display = 'none'; { const jb = document.getElementById('a-jump'); if (jb) jb.classList.remove('ready'); } if (this.jumpBtn) this.jumpBtn.style.display = "none"; this.hasChute = false; if (this.chute) this.chute.visible = false; if (this.glider) this.glider.visible = false; if (this.plane && !landed) this.plane.visible = false; this.dropping = false; this.dropPose = 0; const g = this.R.me && this.R.me.model && this.R.me.model.group; if (g) g.visible = true; this.drop = null; if (landed) { this.R.camInit = false; } }
  // ---------------------------------------------------------------- the world (bots, loot)
  icon(k) {   // v258: a picture of the real model (cached)
    if (!this._icons) { this._icons = {}; try { const m = {}; for (const q of ['pistol', 'revolver', 'smg', 'ak', 'm4', 'shotgun', 'sniper', 'grenade', 'med', 'pills', 'inject', 'smoke', 'sscope', 'scope', 'ammo', 'vest', 'helmet']) m[q] = this.lootModel(q, true); this._icons = renderIcons(m); } catch (e) { this._icons = {}; } }
    return this._icons[k] || '';
  }
  lootModel(k, icon) {   // v263: ONE place builds every item's 3D model from the real GLB files (ground loot and the icons use the same thing)
    const G = { ammo: 'ammo', med: 'medkit', pills: 'pills', inject: 'syringe', grenade: 'grenade', smoke: 'grenade', sscope: 'scope', scope: 'smgscope', vest: 'vest', helmet: 'helmet' }[k], wrap = new THREE.Group();
    if (G && hasProp(G)) {
      const m = propModel(G, k === 'smoke' ? '#9aa6ae' : null); if (k === 'smoke') m.scale.multiplyScalar(1.25); wrap.add(m);
      if (!icon) { if (k === 'inject') wrap.rotation.z = Math.PI / 2; else if (k === 'med' || k === 'vest') wrap.rotation.x = -Math.PI / 2; } else if (k === 'inject') wrap.rotation.z = Math.PI / 2;
      return wrap;
    }
    if (isGunK(k) || k === 'grenade' || k === 'bat') { const mdl = makeWeaponModel(k); mdl.scale.setScalar(k === 'grenade' ? 2.2 : k === 'bat' ? 1.5 : k === 'pistol' || k === 'revolver' ? 2.4 : 1.5); if (k === 'bat') mdl.rotation.z = Math.PI / 2; else mdl.rotation.y = Math.PI / 2; return mdl; }
    wrap.add(new THREE.Mesh(GEO('Box', 0.3, 0.2, 0.3), SM('#8a8f96', 0.7))); return wrap;
  }
  syncLoot() {
    const sim = this.sim; if (!sim) return;
    for (const it of sim.loot) { if (!it.alive || this.loot.has(it.id)) continue; const g = new THREE.Group(), col = it.gold ? '#ffd23f' : LOOT_COL[it.k];
      const mdl = this.lootModel(it.k);
      const glbK = ['ammo', 'med', 'pills', 'inject', 'grenade', 'smoke', 'sscope', 'scope', 'vest', 'helmet'].includes(it.k), gunish = !glbK, lay = new THREE.Group(); lay.add(mdl); if (gunish) lay.rotation.x = Math.PI / 2; const pivot = new THREE.Group(); pivot.add(lay); pivot.rotation.y = (it.id * 2.399) % 6.28; pivot.position.y = gunish ? 0.11 : (it.k === 'med' || it.k === 'vest' || it.k === 'inject') ? 0.09 : 0.03; g.add(pivot); g.userData.pivot = pivot;
      if (it.gold === 1) { const gb = propModel('goldbox'), hh = (propDim('goldbox') || { y: 0.3 }).y; if (gb) g.add(gb); pivot.position.y += hh + 0.02; }   // v251/v263: a dead enemy's GOLD box (the real loot box model): everything he carried lies on it
      const ring = new THREE.Mesh(GEO('Ring',0.46, 0.52, 40), RM(col, 0.75)); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.025; { const disc = new THREE.Mesh(GEO('Circle',0.46, 32), RM(col, 0.12)); disc.rotation.x = -Math.PI / 2; disc.position.y = 0.02; g.add(disc); } g.add(ring);
      if (it.gold === 1) {   // v264: a dead bot / player: a thin GREEN smoke column over his loot box (one column per box, however many items lie on it)
        const key = Math.round(it.x / 2) + ',' + Math.round(it.z / 2); let sm = this.dsm.get(key);
        if (!sm) { const sg = this.mkPuffs(new THREE.Group(), 12, 0x3be36a, 0x23b84e); sg.userData.sm = { H: 16, life: 5, s0: 0.8, s1: 3.4, drift: 3, a: 0.5 }; sg.position.set(CMB.x + it.x, (it.y !== undefined ? it.y : cmbH(it.x, it.z)) + 0.5, CMB.z + it.z); this.group.add(sg); sm = { g: sg, ids: new Set(), x: CMB.x + it.x, z: CMB.z + it.z }; this.dsm.set(key, sm); }
        sm.ids.add(it.id); }
      /* no light beam: PUBG items just lie there with a ring */
      g.position.set(CMB.x + it.x, it.y !== undefined ? it.y : cmbH(it.x, it.z), CMB.z + it.z); g.traverse((o) => { if (o.isMesh) o.castShadow = false; }); g.visible = false; this.group.add(g); this.loot.set(it.id, { g, it, ph: Math.random() * 6 }); }   // loot casts no shadow (a tiny shadow under a gun nobody sees, but a whole extra draw)
  }
  bot(b) {
    let a = this.bots.get(b.id); if (a) return a;
    const m = makeHero(b.id % 4, undefined, false); m.group.traverse((o) => { if (o.isMesh && o.material && o.material.color) { let t = _TINT.get(o.material); if (!t) { t = o.material.clone(); t.color.multiply(new THREE.Color('#e08a7a')); _TINT.set(o.material, t); } o.material = t; } });   // a reddish tint: the enemy
    this.group.add(m.group); a = { g: m.group, m, last: 0 }; this.bots.set(b.id, a); return a;
  }
  tracer(x0, y0, z0, x1, y1, z1) {
    let q = this.tr.find((t) => !t.visible); if (!q) { if (this.tr.length > 14) return; q = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 1), new THREE.MeshBasicMaterial({ color: '#ffd978', transparent: true, opacity: 0.9 })); this.group.add(q); this.tr.push(q); }
    const dx = x1 - x0, dy = y1 - y0, dz = z1 - z0, l = Math.hypot(dx, dy, dz) || 1; q.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2); q.scale.set(1, 1, l); q.lookAt(x1, y1, z1); q.visible = true; q.userData.t = 0.07;
  }
  // ---------------------------------------------------------------- per frame
  // ---------------------------------------------------------------- v235 team: my teammates (ghost soldiers) in the plane, in the air and on the ground
  sendMate(dt) {
    const T = this.R.jangTeam; if (!T || !T.net) return;
    { this._fps = (this._fps || 60) * 0.95 + (dt > 0 ? 1 / dt : 60) * 0.05; this._nh = (this._nh || 0) + dt;   /* v282: a tiny live network line (ping, frame rate, how old the last packet of each teammate is) so a lag complaint says WHERE the lag is */
      if (this._nh > 0.5) { this._nh = 0; let nl = this.netLine; if (!nl) { nl = this.netLine = document.createElement('div'); nl.style.cssText = 'position:fixed;top:44px;left:50%;transform:translateX(-50%);z-index:6;padding:1px 8px;border-radius:8px;background:rgba(0,0,0,.4);color:#cfe;font:600 10px system-ui,sans-serif;pointer-events:none;white-space:nowrap'; document.body.appendChild(nl); }
        const now = performance.now(), ms = []; for (const [, g] of this.mates) ms.push((g.nm ? String(g.nm).slice(0, 6) : 'mate') + ' ' + (g.at ? Math.min(99, (now - g.at) / 1000).toFixed(1) + 's' : 'no data')); nl.textContent = 'PING ' + Math.round(T.net.rtt || 0) + ' ms  |  FPS ' + Math.round(this._fps) + '  |  ' + (ms.length ? ms.join('  ') : 'no teammates seen'); } }
    this._jt = (this._jt || 0) + dt; if (this._jt < 0.1) return; this._jt = 0;
    const b = this.R.me.body, d = this.drop; let ph = 4, x = b.x, y = b.y, z = b.z;
    const dv = this.R.drive && !this.R.paxMode ? this.R.drive : null, vi = dv ? this.R.cars.indexOf(dv) : -1; const px = this.R.drive && this.R.paxMode ? this.R.drive : null, pvi = px ? this.R.cars.indexOf(px) : -1;
    if (this.down) ph = 7;   // v244: lying down
    else if (px && pvi >= 0) { ph = 6; x = px.st.x; y = px.st.y; z = px.st.z; }
    else if (dv && vi >= 0) { ph = 5; x = dv.st.x; y = dv.st.y; z = dv.st.z; }   // v240: driving a jeep: its place goes out instead of mine, so everybody sees the jeep move
    else if (this.dropping && d) { if (d.ph === 'plane') { ph = d.stand ? 0 : 1; x = d.lv || 0; z = d.lu || 0; y = 0; } else ph = d.ph === 'fall' ? 2 : 3; }
    T.net.send({ t: 'jt', ph, x: +x.toFixed(2), y: +y.toFixed(2), z: +z.toFixed(2), r: +(ph === 5 ? dv.st.yaw : ph === 6 ? px.st.yaw : b.yaw).toFixed(3), sp: ph === 5 ? +dv.st.speed.toFixed(1) : ph === 6 ? 0 : +Math.min(99, Math.hypot(b.vx || 0, b.vz || 0)).toFixed(1), al: this.hp > 0 && this.deadT <= 0 && !this.down ? 1 : 0, tm: T.tm, vi: ph === 5 ? vi : ph === 6 ? pvi : 0, ps: ph === 6 ? this.R.paxSeat | 0 : 0, wp: this.R.weapon || '', ai: this.R.aiming ? 1 : 0, rv: this.reviving ? 1 : 0 });
  }
  onMate(m) {
    const T = this.R.jangTeam; if (!T || m.id === T.myId || !this.on) return; let g = this.mates.get(m.id);
    if (!g) { const mo = makeHero((m.c | 0) % 4, undefined, false); const nm0 = String(m.nm || '').toUpperCase().slice(0, 14) || 'HARIS', ch = this.mkChute(nm0); ch.visible = false; this.group.add(mo.group); this.group.add(ch); g = { m: mo, ch, x: 0, y: -99, z: 0, has: false, nm: nm0 }; this.mates.set(m.id, g); }
    g.id = m.id; g.c = m.c; g.wp = m.wp || ''; g.ai = m.ai; g.rvg = m.rv ? 1 : 0; g.al = m.al === undefined ? 1 : m.al; g.ph = m.ph; g.vi = m.vi | 0; g.ps = m.ps | 0; g.tx = m.x; g.ty = m.y; g.tz = m.z; g.r = m.r; g.sp = m.sp; g.tm = m.tm; g.at = performance.now();
  }
  // ---------------------------------------------------------------- v243 safe zone (PUBG): the circle shrinks, outside it you take damage
  stepZone(dt) {
    const R = this.R, T = R.jangTeam; if (!this.Z) this.Z = this.shared && T ? makeZone(T.seed) : this.sim.Z;   // v251: the same circles the bots (and the server) use
    const z = zoneAt(this.Z, this.t), wasShr = this.z ? this.z.shrinking : false, wasI = this.z ? this.z.i : 0; this.z = z;
    if (!this.zw) { const m = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 140, 48, 1, true), new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.2, side: THREE.DoubleSide, depthWrite: false, fog: false })); m.frustumCulled = false; this.group.add(m); this.zw = m; }
    this.zw.position.set(CMB.x + z.x, 30, CMB.z + z.z); this.zw.scale.set(z.r, 1, z.r);
    this.zw.visible = !this.dropping && (z.shrinking || z.i > 0 || z.left < 30);   /* v267: no blue wall during the plane drop / the first minutes: it only appears when the first circle is about to close */
    if (R.minimap) R.minimap.zone = z;
    const fm = (s) => { s = Math.max(0, Math.ceil(s)); return Math.floor(s / 60) + ':' + (s % 60 < 10 ? '0' : '') + (s % 60); };
    this.zoneTxt = z.last ? 'ZONE: FINAL' : (z.shrinking ? 'ZONE CLOSING ' : 'ZONE ') + fm(z.left);
    if (!this.dropping) {
      if (z.shrinking && (!wasShr || z.i !== wasI)) R.toast && R.toast('THE ZONE IS CLOSING - move into the blue circle', 3.5);
      else if (!z.shrinking && !z.last && z.left < 20.2 && z.left > 19.6 && !this._zw20) { this._zw20 = true; R.toast && R.toast('The zone starts closing in 20 s', 2.5); } else if (z.left > 21) this._zw20 = false;
    }
    const b = R.me.body, out = Math.hypot(b.x - CMB.x - z.x, b.z - CMB.z - z.z) > z.r; this.outZone = out && !this.dropping;
    if (this.outZone && this.hp > 0 && this.deadT <= 0) { this.zt = (this.zt || 0) + dt; if (this.zt >= 1) { this.zt -= 1; this.hurt(z.dps); } } else this.zt = 0;
  }
  // ---------------------------------------------------------------- v251 the red BOMBING circle: twice per match, 115 s each, anywhere on the island (independent of the blue circle); bombs fall from the sky
  stepBomb(dt) {
    const R = this.R, Z = this.Z; if (!Z) return; const bz = bombAt(Z, this.t), THR = THREE;
    if (R.minimap) R.minimap.bomb = bz;
    if (!bz) { if (this.bw) this.bw.visible = false; this._bk = -1; this._bmsg = 0; return; }
    if (!this.bw) { const m = new THR.Mesh(new THR.CylinderGeometry(1, 1, 120, 40, 1, true), new THR.MeshBasicMaterial({ color: 0xff2a1a, transparent: true, opacity: 0.22, side: THR.DoubleSide, depthWrite: false, fog: false })); m.frustumCulled = false; this.group.add(m); this.bw = m; this.bombs = []; for (let i = 0; i < 6; i++) { const q = new THR.Mesh(new THR.SphereGeometry(0.3, 8, 6), new THR.MeshBasicMaterial({ color: 0x23262b })); q.scale.set(0.7, 0.7, 1.7); q.visible = false; q.frustumCulled = false; this.group.add(q); this.bombs.push({ m: q, on: false, x: 0, z: 0, t: 0 }); } }
    this.bw.visible = true; this.bw.position.set(CMB.x + bz.x, 30, CMB.z + bz.z); this.bw.scale.set(bz.r, 1, bz.r); this.bw.material.opacity = bz.warn ? 0.1 + 0.08 * Math.sin(this.t * 6) : 0.2 + 0.05 * Math.sin(this.t * 3);
    if (!this.dropping) { const m = Math.max(0, Math.ceil(bz.warn ? bz.tl : 0)); if (bz.warn && !this._bmsg) { this._bmsg = 1; R.toast && R.toast('BOMBING ZONE (RED CIRCLE) in ' + m + ' s - stay out of it!', 4); A.sfx.click && A.sfx.click(); } else if (!bz.warn && this._bmsg !== 2) { this._bmsg = 2; R.toast && R.toast('AIR RAID! bombs are falling in the red circle for ' + Math.round(bz.left) + ' s - GET OUT', 4); } }
    if (bz.warn) return;
    const k = Math.floor((this.t - bz.t0) / 0.8);   // one bomb every 0.8 s: the same spot on every phone
    if (k !== this._bk) { this._bk = k; const sp = bombSpot(Z, bz, k), q = this.bombs.find((o) => !o.on); if (q) { q.on = true; q.x = sp.x; q.z = sp.z; q.t = 1.7; q.m.visible = true; } }
    const b = R.me.body;
    for (const q of this.bombs) { if (!q.on) continue; q.t -= dt; const wx = CMB.x + q.x, wz = CMB.z + q.z, gy = cmbH(q.x, q.z), f = Math.max(0, q.t / 1.7); q.m.position.set(wx, gy + 0.3 + f * f * 130, wz); q.m.rotation.x = Math.PI / 2 * 0 + 1.2;
      if (q.t <= 0) { q.on = false; q.m.visible = false; const d = Math.hypot(b.x - wx, b.z - wz), dc = Math.hypot(wx - R.camera.position.x, wz - R.camera.position.z);
        R.particles && R.particles.emit(wx, gy + 1, wz, 14, { color: '#ff9a3c', speed: 6, up: 5, life: 0.7, size: 0.7 }); R.particles && R.particles.emit(wx, gy + 1.5, wz, 8, { color: '#444', speed: 3, up: 4, life: 1.2, size: 1.0 });
        if (dc < 140) { A.sfx.boom && A.sfx.boom(Math.max(0.12, 1 - dc / 140)); if (R.shake !== undefined && dc < 40) R.shake = Math.max(R.shake, 0.5 * (1 - dc / 40)); }
        if (d < 9 && !this.dropping && this.hp > 0 && this.deadT <= 0 && !this.down) this.hurt(Math.round(48 * (1 - d / 9)) + 6); } }
  }
  // ---------------------------------------------------------------- v251 the AIRDROP (PUBG care package): a plane crosses the island, a crate falls on a parachute, red smoke shows where, the loot is gold
  airKit() {
    const THR = THREE, g = new THR.Group(), body = SM('#8d9aa6', 0.6), dark = SM('#4a5560', 0.7);
    const fu = new THR.Mesh(new THR.CylinderGeometry(1.5, 1.2, 20, 10), body); fu.rotation.x = Math.PI / 2; const wing = new THR.Mesh(new THR.BoxGeometry(26, 0.35, 3.6), body), tail = new THR.Mesh(new THR.BoxGeometry(7, 0.3, 2.2), body), fin = new THR.Mesh(new THR.BoxGeometry(0.3, 3.4, 2.4), dark); wing.position.z = 1; tail.position.z = -9.5; fin.position.set(0, 1.8, -9.4); g.add(fu, wing, tail, fin); g.scale.setScalar(1.25); return g;
  }
  airCrate() {   // v263: the real PUBG airdrop box + the real parachute models
    const THR = THREE, g = new THR.Group(), cr = propModel('airdrop'); if (cr) { cr.scale.setScalar(1.5 / 1.8); g.add(cr); }
    const ch = new THR.Group(), cm = propModel('chute'); if (cm) { cm.scale.setScalar(1.25); cm.position.y = 1.15; ch.add(cm); } g.add(ch); g.userData.ch = ch;
    this.mkPuffs(g, 30, 0x2fdc5a, 0x1fae45); g.userData.sm = { H: 120, life: 16, s0: 3, s1: 20, drift: 26, a: 0.6 };   /* v264: a BIG green column (120 m, 23 m wide at the top, no fog) so the care package is seen from far across the island */
    return g;
  }
  mkPuffs(g, n, c1, c2) {   // soft smoke puffs (sprites, no fog: seen from far) that rise, billow and thin out; stepSmoke moves them
    const THR = THREE, tex = this._smokeTex || (this._smokeTex = (() => { const cv = document.createElement('canvas'); cv.width = cv.height = 64; const c = cv.getContext('2d'), gr = c.createRadialGradient(32, 32, 2, 32, 32, 31); gr.addColorStop(0, 'rgba(255,255,255,0.95)'); gr.addColorStop(0.55, 'rgba(255,255,255,0.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = gr; c.fillRect(0, 0, 64, 64); return new THR.CanvasTexture(cv); })());
    const puffs = []; for (let i = 0; i < n; i++) { const sp = new THR.Sprite(new THR.SpriteMaterial({ map: tex, color: i % 3 ? c1 : c2, transparent: true, opacity: 0, depthWrite: false, fog: false })); sp.userData.ph = i / n; sp.userData.rx = Math.random() - 0.5; sp.userData.rz = Math.random() - 0.5; sp.visible = false; sp.renderOrder = 4; g.add(sp); puffs.push(sp); }
    g.userData.puffs = puffs; return g;
  }
  stepSmoke(g, dt, on) {   /* each puff lives `life` s, climbs H metres, swells and fades; the wind leans the column */
    const P = g.userData.puffs, M = g.userData.sm; if (!P || !M) return; for (const sp of P) { const u = sp.userData; u.ph = (u.ph + dt / M.life) % 1; const k = u.ph; sp.visible = on; if (!on) continue; sp.position.set(u.rx * 1.2 * (1 + k * 3) + k * M.drift, 1.3 + k * M.H, u.rz * 1.2 * (1 + k * 3) + k * M.drift * 0.3); const sc = M.s0 + k * M.s1; sp.scale.set(sc, sc, 1); sp.material.opacity = Math.min(1, k * 8) * (1 - k) * M.a; }
  }
  onAirplane(e) {
    if (this.airs) for (const a of this.airs) if (a.n === e.n) return; (this.airs || (this.airs = [])).push({ n: e.n, x: e.x, z: e.z, hd: e.hd, t: 0, plane: this.airKit(), crate: this.airCrate(), landed: false, rm: 0 });
    const a = this.airs[this.airs.length - 1]; a.crate.visible = false; this.group.add(a.plane); this.group.add(a.crate);
    if (!this.dropping && this.R.toast) this.R.toast('AIRDROP! A plane is dropping a care package - watch the sky, then run to the GREEN smoke (yellow square on the minimap)', 5);
    if (this.R.minimap) this.R.minimap.air = { x: e.x, z: e.z };
  }
  onAirland(e) { const a = this.airs && this.airs.find((q) => q.n === e.n); if (a) { a.landed = true; a.t = Math.max(a.t, AIR.back / AIR.v + AIR.alt / AIR.fall); } if (this.R.minimap) this.R.minimap.air = { x: e.x, z: e.z }; if (!this.dropping && this.R.toast) this.R.toast('AIRDROP LANDED - gold loot at the green smoke', 3.5); }
  stepAir(dt) {
    if (!this.airs) return; const tp = AIR.back / AIR.v;
    for (let i = this.airs.length - 1; i >= 0; i--) { const a = this.airs[i]; a.t += dt;
      const sx = a.x - a.hd[0] * AIR.back, sz = a.z - a.hd[1] * AIR.back, tt = Math.min(a.t, 2 * tp + 6);
      a.plane.position.set(CMB.x + sx + a.hd[0] * AIR.v * tt, AIR.alt + 6, CMB.z + sz + a.hd[1] * AIR.v * tt); a.plane.rotation.y = Math.atan2(a.hd[0], a.hd[1]); a.plane.visible = a.t < 2 * tp + 6;
      if (a.t >= tp) { const gy = cmbH(a.x, a.z), fall = Math.max(0, AIR.alt - (a.t - tp) * AIR.fall), on = fall <= 0.05 || a.landed; a.crate.visible = true; a.crate.position.set(CMB.x + a.x, gy + (on ? 0 : fall), CMB.z + a.z); a.crate.userData.ch.visible = !on; a.crate.userData.ch.rotation.y += dt * 0.3; this.stepSmoke(a.crate, dt, a.t < tp + AIR.alt / AIR.fall + 110); }
      if (a.landed || a.t > tp + AIR.alt / AIR.fall) { a.rm += dt; if (a.rm > 420) { this.group.remove(a.plane); this.group.remove(a.crate); this.airs.splice(i, 1); if (this.R.minimap && this.R.minimap.air && !this.airs.length) this.R.minimap.air = null; } }
    }
  }
  // a dead player's things stay on the ground in a GOLD box (shared match): the one who shot him can take everything
  dropAll() {
    const R = this.R, cb = R.wallet && R.wallet.cb, b = R.me.body; if (!cb || !this.sim || !this.shared) return; const bx = b.x - CMB.x, bz = b.z - CMB.z, list = [];
    for (const w of Object.keys(cb.owned)) if (cb.owned[w]) list.push([w, isGunK(w) ? { mag: cb.mag[w] | 0, res: cb.ammo[w] | 0 } : 0]);
    for (let i = 0; i < Math.min(3, cb.nades | 0); i++) list.push(['grenade', 0]); for (const k of ITEM_K) for (let i = 0; i < Math.min(2, (cb.inv && cb.inv[k]) | 0); i++) list.push([k, 0]);
    list.forEach(([k, am], i) => { const a = i * 1.1, it = this.sim.dropLoot(k, bx + Math.cos(a) * 0.8, bz + Math.sin(a) * 0.8, true); if (am) it.am = am; });
  }
  onMateShot(m) {   // v241: another player's shot: the same positional gunshot as the bots'
    if (!this.on || m.id === (this.R.jangTeam && this.R.jangTeam.myId)) return; { const g = this.mates.get(m.id); if (g && g.has) { g.fire = 0.45; const r = Number.isFinite(m.r) && m.r ? m.r : g.r, fx = Math.sin(r), fz = Math.cos(r), y0 = g.y + 1.35; this.tracer(g.x + fx * 0.8, y0, g.z + fz * 0.8, g.x + fx * 45, y0 - 0.5, g.z + fz * 45); this.R.particles && this.R.particles.emit(g.x + fx * 0.9, y0, g.z + fz * 0.9, 4, { color: '#ffd978', speed: 1.5, up: 0.4, life: 0.1, size: 0.18 }); } }   // v251: you SEE his muzzle flash and tracer
    const c = this.R.camera.position, cd = Math.hypot(m.x - c.x, m.z - c.z); if (cd > 170) return;
    const v = Math.max(0.22, 1 - cd / 170), pn = this.panOf(m.x, m.z); m.w === 1 ? A.sfx.akShot && A.sfx.akShot(pn, v) : m.w === 2 && A.sfx.sniperShot ? A.sfx.sniperShot(pn, v) : A.sfx.shot(pn, v);
  }
  paxSeats(ci) { const o = []; for (const [, g] of this.mates) if (g.ph === 6 && g.vi === ci && performance.now() - g.at < 2500) o.push(g.ps | 0); return o; }   // v242: seats of the jeep taken by other players
  mateSounds(dt) {   // v241: footsteps of players on foot (up to 40 m) and the engine of the nearest jeep another player drives (up to 90 m)
    const c = this.R.camera.position; let best = null, bd = 1e9;
    for (const [, g] of this.mates) {
      if (!g.has || !g.m.group.visible) continue; const d = Math.hypot(g.x - c.x, g.z - c.z);
      if (g.ph === 4 && g.vv > 0.8 && d < 40) { g.stT = (g.stT === undefined ? 0 : g.stT) - dt * (g.vv > 3.5 ? 3.4 : 2.1); if (g.stT <= 0) { g.stT = 1; A.play && A.play('fsc' + (Math.random() * 4 | 0), Math.max(0.06, 0.5 * (1 - d / 40)), 0.9 + Math.random() * 0.2, 0, this.panOf(g.x, g.z), d > 18 ? 2200 : 0); } }
      if (g.ph === 5 && d < 90 && d < bd) { bd = d; best = g; }
    }
    if (best && A.remoteEngine) A.remoteEngine(0.2 * (1 - bd / 90), Math.min(1, (best.sp || 0) / 22), this.panOf(best.x, best.z)); else if (A.remoteEngineStop) A.remoteEngineStop();
  }
  stepMates(dt) {
    const T = this.R.jangTeam; if (!T) return; this.sendMate(dt); this.mateSounds(dt);
    const w = this.plane && this.plane.visible && this.plane.children[0], now = performance.now();
    for (const [, g] of this.mates) {
      const inP = g.ph <= 1; let x = g.tx, y = g.ty, z = g.tz, show = now - g.at < 4000;
      if (inP) { if (g.tm !== T.tm || !w || !this.drop) show = false; else { this.plane.updateMatrixWorld(true); const sd = w.userData.seat;
        if (g.ph === 1 && sd) { const v = sd.getWorldPosition(new THREE.Vector3()), si = T.seatOf[g.id] != null ? T.seatOf[g.id] : 0; x = v.x + this.drop.hd[0] * (si - 1.5) * 0.6; y = v.y - 0.3; z = v.z + this.drop.hd[1] * (si - 1.5) * 0.6; }
        else { const v = w.localToWorld(new THREE.Vector3(g.tx, -0.49, g.tz)); x = v.x; y = v.y; z = v.z; } } }
      if (g.hadCar !== undefined && (g.ph !== 5 || !show || g.vi !== g.hadCar) && this.R.mateCars) { this.R.mateCars.delete(g.hadCar); g.hadCar = undefined; }   // he got out: the jeep stays where it is
      g.m.group.visible = show; if (!show) { g.ch.visible = false; continue; }
      if (!g.has) { g.x = x; g.y = y; g.z = z; g.has = true; } else { const f = 1 - Math.exp(-14 * dt), px = g.x, pz = g.z; g.x += (x - g.x) * f; g.y += (y - g.y) * f; g.z += (z - g.z) * f; g.vv = dt > 0 ? Math.hypot(g.x - px, g.z - pz) / dt : 0; }
      g.m.group.position.set(g.x, g.y, g.z); g.ryaw = g.ph === 1 && this.drop ? this.drop.a + Math.PI / 2 : g.r; g.m.group.rotation.y = g.ryaw;
      if (g.fire > 0) g.fire -= dt; g.m.update(dt, { weapon: g.ph === 4 ? (g.wp || null) : null, aiming: g.ph === 4 && (g.fire > 0 || !!g.ai), speed: g.ph === 0 ? Math.min(g.sp, 3.4) : g.ph === 4 ? g.sp : 0, grounded: g.ph === 0 || g.ph === 1 || g.ph === 4 || g.ph === 5 || g.ph === 6, skydive: g.ph === 2 ? 1 : g.ph === 3 ? 2 : 0, zpose: g.ph === 7 ? 'dieF' : undefined, revive: g.ph === 4 && !!g.rvg, zp: 1, seated: g.ph === 1 || g.ph === 5 || g.ph === 6, pax: g.ph === 1, mvF: 1, mvR: 0, faceCam: false });
      if (g.ph === 5) {   // v240: he drives a jeep: the real jeep of this match moves with him and his soldier sits in it
        const car = this.R.cars[g.vi]; if (car && this.R.drive !== car) {
          const R = this.R; if (!R.mateCars) R.mateCars = new Map(); g.ry = g.ry === undefined ? g.r : g.ry + ((((g.r - g.ry) % 6.2832) + 9.4248) % 6.2832 - 3.1416) * (1 - Math.exp(-14 * dt));
          R.mateCars.set(g.vi, { id: g.id, x: g.x, y: g.y, z: g.z, yaw: g.ry, sp: g.sp }); g.hadCar = g.vi; R.seatModel(g.m.group, { st: { x: g.x, y: g.y, z: g.z, yaw: g.ry, id: car.st.id }, mesh: car.mesh }); }
        else g.m.group.visible = false; }
      else if (g.ph === 6) {   // v242: he rides along as a passenger: seated in his seat of the jeep
        const car = this.R.cars[g.vi]; if (car) { g.m.group.visible = true; this.R.seatModel(g.m.group, car, true, g.ps | 0); g.x = car.st.x; g.y = car.st.y; g.z = car.st.z; } else g.m.group.visible = false; }
      else g.ry = undefined;
      g.ch.visible = g.ph === 3; if (g.ph === 3) { g.ch.position.set(g.x, g.y, g.z); g.ch.rotation.y = g.r; }
    }
  }
  // v269: VEHICLE HITS: any car / jeep / Civic that moves faster than ~14 km/h hurts whoever it runs into: bots, enemy players (PvP), and ME when somebody else's car hits me. Damage grows with the speed (about 22 m/s kills).
  vehHits(dt, P) {
    const R = this.R, sim = this.sim, b = R.me.body, T = R.jangTeam, now = performance.now(); if (!this.vp) this.vp = new Map();
    for (const c of R.cars) {
      const st = c.st, pv = this.vp.get(c); this.vp.set(c, { x: st.x, z: st.z, t: now }); if (!pv || dt <= 0) continue;
      const vx = (st.x - pv.x) / dt, vz = (st.z - pv.z) / dt, sp = Math.hypot(vx, vz); if (sp < 4 || sp > 90) continue;
      if (c._vhCd > 0) { c._vhCd -= dt; continue; }
      const fx = vx / sp, fz = vz / sp, hl = (st.hl || 2.2) + 0.45, hw = (st.hw || 0.95) + 0.45, dmg = Math.min(110, (sp - 3.5) * 5.2), mine = c === R.drive && !R.paxMode;
      const inBox = (x, z, y) => { if (Math.abs((y === undefined ? st.y : y) - st.y) > 2.4) return false; const dx = x - st.x, dz = z - st.z, lz = dx * fx + dz * fz, lx = -dx * fz + dz * fx; return lz > -0.3 && lz < hl + 0.2 && Math.abs(lx) < hw; };
      let hit = false;
      for (const bt of sim.bots) { if (!bt.alive || !inBox(CMB.x + bt.x, CMB.z + bt.z)) continue; if (this.shared && !mine) continue; hit = true; sim.hurt(bt, dmg, st.x - CMB.x, st.z - CMB.z, mine ? undefined : -3); }
      if (hit && mine && this.shared) sim.net.send({ t: 'cmelee', x: +(st.x - CMB.x + fx * 1.2).toFixed(2), z: +(st.z - CMB.z + fz * 1.2).toFixed(2), fx: +fx.toFixed(3), fz: +fz.toFixed(3), reach: +Math.min(4.4, hl + 0.3).toFixed(2), dmg: +Math.min(60, dmg).toFixed(1) });
      if (!mine && !R.drive && P.alive && !this.dropping && this.hp > 0 && this.deadT <= 0 && b.hitCd <= 0 && inBox(b.x, b.z, b.y)) { this.hurt(Math.round(dmg)); hit = true; }
      if (mine && this.shared && T) for (const [, g] of this.mates) { if (g.tm === T.tm || !g.has || g.ph < 4 || g.ph > 7 || now - g.at > 1500) continue; if (inBox(g.x, g.z)) { T.net.send({ t: 'cpv', to: g.id, d: +Math.min(60, dmg).toFixed(1) }); hit = true; } }
      if (hit) c._vhCd = 0.7;
    }
  }
  update(dt) {
    const R = this.R; if (!this.on || !this.sim) return; if (R.jangTeam) this.stepMates(dt); this.t += dt; if (this.shared && this.sim.srvAt) this.t = this.sim.srvT + (performance.now() - this.sim.srvAt) / 1000; this.stepZone(dt); this.stepBomb(dt); this.stepAir(dt); const sim = this.sim, b = R.me.body, M = R.mission;
    const P = { x: b.x - CMB.x, z: b.z - CMB.z, y: b.y, hp: this.hp, alive: this.hp > 0 && this.deadT <= 0 && !this.dropping };
    { const lim = CMB.half - 8;   // never leave the island, never fall under it (v207): pushed back inside / put back on the ground
      const ox = b.x - CMB.x, oz = b.z - CMB.z, cx = Math.max(-lim, Math.min(lim, ox)), cz = Math.max(-lim, Math.min(lim, oz));
      if (cx !== ox || cz !== oz) { b.x = CMB.x + cx; b.z = CMB.z + cz; b.vx = b.vz = 0; if (this.drop) { this.drop.vx = 0; this.drop.vz = 0; } }
      if (!this.dropping && b.y < cmbH(cx, cz) - 3) { b.y = cmbH(cx, cz) + 1.2; b.vy = 0; b.grounded = false; b.swim = 0; b.inWater = false; } }
    { const f = !this.dropping && this.hp > 0; if (this._fight !== f) { this._fight = f; document.body.classList.toggle('jang-fight', f); } this.slotsTick(); }
    const run = M && M.phase === 'run' && !this.over;
    { let roof = false; if (OPT.tips !== false && !this.dropping && P.alive && !R.drive) for (const t of layout().towers) if (Math.hypot(P.x - t.x, P.z - t.z) < 4.8 && Math.abs(b.y - t.py) < 2.5) roof = true;
      if (!this.tipEl) { const e = document.createElement('div'); e.id = 'c-tip'; e.innerHTML = '<b>PARAGLIDER TOWER</b><span>1. Stand on the roof: you pick up the paraglider.</span><span>2. Walk to the yellow LEDGE (the sign) and step off: the wing opens at once.</span><span>3. Steer with the stick / WASD and glide to a far landing: about 6 m forward for every 1 m of height.</span><span>DIVE = Shift (faster) &nbsp;·&nbsp; PULL UP = C (brake, flatter glide) &nbsp;·&nbsp; hide this text: Settings - Instructions</span>'; document.body.appendChild(e); this.tipEl = e; }
      if (this._tipOn !== roof) { this._tipOn = roof; this.tipEl.style.display = roof ? 'block' : 'none'; } }   // v251: how to use the tower parachute (can be switched off in Settings)
    if (!this.dropping && P.alive && !R.drive) {   // the towers: take the parachute from the roof, jump off and it opens by itself
      for (const t of layout().towers) if (!this.hasChute && Math.hypot(P.x - t.x, P.z - t.z) < 3.4 && Math.abs(b.y - t.py) < 2.5) { this.hasChute = true; R.toast && R.toast(OPT.tips !== false ? 'PARAGLIDER PACKED - walk off the yellow ledge: it opens by itself. Steer to glide far. DIVE = Shift, PULL UP = C' : 'PARAGLIDER PACKED', 3.5); A.sfx.pickup && A.sfx.pickup(); }
      if (this.hasChute && !b.grounded && b.vy < -7 && b.y - cmbH(P.x, P.z) > 5) { { const sp0 = Math.hypot(b.vx || 0, b.vz || 0); this.drop = { ph: 'chute', tw: true, t: 0, mt: 0.45, oh: 18, hd: [0, 1], a: 0, sx: b.x, sz: b.z, L: 0, v: 0, alt: 0, vx: b.vx || 0, vz: b.vz || 0, hint: 0, ch: 0, gh: sp0 > 1 ? Math.atan2(b.vx, b.vz) : b.yaw, sp: Math.max(6, Math.min(13, sp0 + 4)), bank: 0 }; } this.dropping = true; this.dropPose = 2; b.vy = Math.max(b.vy, -6); R.toast && R.toast('PARAGLIDER OPEN - steer with the stick / WASD. DIVE (Shift) = faster, PULL UP (C) = brake. It glides about 6 m for every 1 m of height', 4.5); }
    }
    if (run) {
      this.time -= dt; this.stepDown(dt);
      // the ammo / health / weapons on the ground
      if (!(P.alive && !this.dropping)) { this.using = null; if (this.R.telescope) this.R.telescope = false; }
      if (P.alive && !this.dropping && !this.down) { const it = sim.take(P.x, P.z, (q) => this.canTake(q), b.y); if (it) this.pickup(it); this.promptTick(P); this.useTick(dt); } else this.promptIt = null;
      sim.tick(dt, P); this.vehHits(dt, P);
      for (const e of sim.drain()) this.event(e, b);
      if (this.deadT > 0) { this.deadT -= dt; if (this.deadT <= 0) { this.hp = MY_DMG; this.down = false; this.respawn(); if (R.wallet) { R.wallet.cb = newCb(); R.weapon = null; R.aiming = false; R.syncAct && R.syncAct(); R.updateAmmoHud && R.updateAmmoHud(); } if (this.ov) this.ov.style.display = 'none'; } }
      if (this.time <= 0) this.finish();
    }
    this.syncLoot(); if (this.map) this.map.update(dt, R.camera.position);
    for (const [key, sm] of this.dsm) {   // the green smoke over dead players' boxes: gone when the last item is taken; drawn within 260 m
      for (const id of sm.ids) if (!this.loot.has(id)) sm.ids.delete(id);
      if (!sm.ids.size) { this.group.remove(sm.g); this.dsm.delete(key); continue; }
      const pb = this.R.me.body, dx = pb.x - sm.x, dz = pb.z - sm.z; this.stepSmoke(sm.g, dt, dx * dx + dz * dz < 67600); }
    for (const [id, l] of this.loot) {   // spin and bob the loot; remove what was taken
      if (!l.it.alive) { this.group.remove(l.g); this.loot.delete(id); continue; }
      { const pb = this.R.me.body, dx = pb.x - CMB.x - l.it.x, dz = pb.z - CMB.z - l.it.z, vis = dx * dx + dz * dz < LOOT_VIS2 * (this.dropping ? 4 : 1);   // v219: items only exist on screen near you (64 guns / items over the whole island were ~45% of all triangles and draw calls)
        if (l.g.visible !== vis) l.g.visible = vis; }
    }
    const g0 = (x, z) => cmbH(x, z);
    { const pb = this.R.me.body, fr = (this._fr = (this._fr || 0) + 1);   // v219: bot level of detail - far bots are not drawn or animated, middle ones animate every 3rd frame (every bot was a 9000-triangle skinned model animated 60 times a second wherever it stood)
      let bi = 0;
      for (const s of sim.bots) {
        const a = this.bot(s), dx = pb.x - CMB.x - s.x, dz = pb.z - CMB.z - s.z, d2 = dx * dx + dz * dz, far = d2 > BOT_VIS2 * (this.dropping || this.R.scoped ? 4 : 1); bi++;   // (scoped with a sniper: twice as far)
        if (!s.alive && s.dieT >= 6) { if (a.g.visible) a.g.visible = false; continue; }
        a.g.rotation.set(0, s.yaw, 0); a.g.position.set(CMB.x + s.x, s.y != null ? s.y : g0(s.x, s.z), CMB.z + s.z);
        if (far) { if (a.g.visible) a.g.visible = false; a.acc = 0; continue; }
        a.acc = (a.acc || 0) + dt; const skip = d2 > BOT_MID2 && (fr + bi) % 3 !== 0; if (skip && a.g.visible) continue;   // (a bot that was hidden is always updated once when it comes back)
        const adt = a.acc; a.acc = 0;
        if (s.alive && s.speed > 0.8 && d2 < 1600) { a.stepT = (a.stepT === undefined ? 0 : a.stepT) - adt * (s.speed > 3.5 ? 3.4 : 2.1); if (a.stepT <= 0) { a.stepT = 1; const dd = Math.sqrt(d2), v = Math.max(0.06, 0.5 * (1 - dd / 40)); if (A.play) A.play('fsc' + (Math.random() * 4 | 0), v, 0.9 + Math.random() * 0.2, 0, this.panOf(CMB.x + s.x, CMB.z + s.z), dd > 18 ? 2200 : 0); } }   // v239: you hear enemy footsteps (up to 40 m, louder when running, from the side they are on)
        if (s.alive) { a.g.visible = true; a.m.update(adt, { seated: false, speed: s.speed, grounded: true, weapon: s.weapon, aiming: s.seen, crouch: false, vy: 0, stun: 0 }); }
        else { const dk = ['dieF', 'dieB', 'dieR', 'dieL', 'dieF', 'dieB'][(s.id | 0) % 6]; a.m.update(adt, { seated: false, speed: 0, grounded: true, zpose: dk, zp: Math.min(1, s.dieT / 2.4), weapon: s.weapon }); a.g.visible = s.dieT < 6; }
      } }
    for (const q of this.tr) if (q.visible) { q.userData.t -= dt; if (q.userData.t <= 0) q.visible = false; }
    if (this.vig && this.vig.style.opacity > 0) this.vig.style.opacity = Math.max(0, this.vig.style.opacity - dt * 1.6);
    this.hudT = (this.hudT || 0) - dt; if (this.hudT <= 0) { this.hudT = 0.2; this.updateHud(); }
  }
  // v239 PUBG-style 3D sound: how far left / right of the camera a world point is (-1..1)
  panOf(wx, wz) { const c = this.R.camera, m = c.matrixWorld.elements, dx = wx - c.position.x, dz = wz - c.position.z, l = Math.hypot(dx, dz) || 1; return Math.max(-1, Math.min(1, (dx * m[0] + dz * m[2]) / l * 1.1)); }
  event(e, b) {
    const R = this.R;
    if (e.k === 'shot') {
      const wx = CMB.x + e.x, wz = CMB.z + e.z, tx = e.hit ? b.x : b.x + (Math.random() - 0.5) * 3, tz = e.hit ? b.z : b.z + (Math.random() - 0.5) * 3, cd = Math.hypot(wx - R.camera.position.x, wz - R.camera.position.z), mine = !this.shared || e.tp === (R.jangTeam && R.jangTeam.myId);   // v245: a bot shooting at ANOTHER player: the tracer goes to him, I do not get hurt
      const gy = cmbH(e.x, e.z); this.tracer(wx, gy + 1.4, wz, mine ? tx : CMB.x + e.tx, mine ? b.y + 1.3 : gy + 1.3, mine ? tz : CMB.z + e.tz); R.particles && R.particles.emit(wx, gy + 1.4, wz, 3, { color: '#ffd978', speed: 1.5, up: 0.5, life: 0.12, size: 0.14 });
      if (cd < 160) { const v = Math.max(0.22, 1 - cd / 160), pn = this.panOf(wx, wz); e.w === 'ak' ? A.sfx.akShot && A.sfx.akShot(pn, v) : e.w === 'sniper' && A.sfx.sniperShot ? A.sfx.sniperShot(pn, v) : A.sfx.shot(pn, v); }   // v239: pan + a longer hearing range
      if (!e.hit && cd < 90 && A.sfx.whiz) { const pn = this.panOf(wx, wz); setTimeout(() => A.sfx.whiz(pn * 0.6, Math.max(0.35, 1 - cd / 90)), Math.min(250, cd * 2.5)); }   // the bullets that miss fly past you
      if (mine && e.hit && this.hp > 0 && this.deadT <= 0) this.hurt(e.dmg);
    } else if (e.k === 'kill') {
      if (!this.shared || e.by === (R.jangTeam && R.jangTeam.myId)) { this.kills++; R.toast && R.toast('ENEMY DOWN'); } { const dd = Math.hypot(CMB.x + e.x - R.me.body.x, CMB.z + e.z - R.me.body.z); if (dd < 90) A.voice.death(Math.max(0.15, 1 - dd / 90)); }   // v222: no money in Jang (kills used to pay $100) A.sfx.pickup && A.sfx.pickup();
      R.particles && R.particles.emit(CMB.x + e.x, cmbH(e.x, e.z) + 1.2, CMB.z + e.z, 10, { color: '#ff5a4a', speed: 3, up: 2, life: 0.4, size: 0.2 });
    } else if (e.k === 'airplane') this.onAirplane(e); else if (e.k === 'airland') this.onAirland(e);
    else if (e.k === 'bothit') { const dd = Math.hypot(CMB.x + e.x - R.me.body.x, CMB.z + e.z - R.me.body.z); if (dd < 60) A.voice.grunt(Math.max(0.12, 0.8 - dd / 75)); R.particles && R.particles.emit(CMB.x + e.x, cmbH(e.x, e.z) + 1.2, CMB.z + e.z, 6, { color: '#ff5a4a', speed: 3, up: 2, life: 0.35, size: 0.2 }); }
  }
  hurt(d) {
    if (this.safeUntil && this.t < this.safeUntil) return;   // v251: 4 s of protection after you respawn
    if (this.down) { this.downT -= d * 0.5; if (this.vig) this.vig.style.opacity = 0.7; if (this.downT <= 0) this.die(); return; }   // v244: already down: more hits make you bleed out faster
    { const cb = this.R.wallet && this.R.wallet.cb; if (cb) { if (cb.vestHp > 0) { const a = Math.min(cb.vestHp, d * 0.3); cb.vestHp -= a; d -= a; if (cb.vestHp <= 0) { cb.inv.vest = 0; this.R.toast && this.R.toast('BODY ARMOR BROKE', 2); } } if (cb.helmHp > 0) { const a = Math.min(cb.helmHp, d * 0.15); cb.helmHp -= a; d -= a; if (cb.helmHp <= 0) { cb.inv.helmet = 0; this.R.toast && this.R.toast('HELMET BROKE', 2); } } } }   /* v263: PUBG armor: the vest takes 30% of every hit, the helmet 15%, until they break */
    this.hp -= d; if (this.vig) this.vig.style.opacity = Math.min(1, 0.4 + d / 20); if (this.R.shake !== undefined) this.R.shake = Math.max(this.R.shake, 0.25);
    A.voice.grunt(0.8);
    if (this.hp <= 0) { if (this.canDown()) this.goDown(); else if (this.teamWiped()) this.teamLost(); else this.die(); }
  }
  die() { if (this.shared && this.lastBy && performance.now() - (this.lastByAt || 0) < 9000 && this.R.jangTeam && this.R.jangTeam.net) { this.R.jangTeam.net.send({ t: 'cpk', to: this.lastBy }); this.lastBy = 0; } try { this.dropAll(); } catch (e) {} A.voice.death(1); this.hp = 0; this.down = false; this.reviving = null; this.deaths++; this.deadT = 4; this.R.me.body.stun = 4; this.R.fireHeld = false; if (this.ov) { this.ov.style.display = 'grid'; this.ov.textContent = 'YOU WERE KILLED  -  RESPAWNING...'; } }
  // ---------------------------------------------------------------- v244 knocked down + revive (PUBG): with a teammate alive you do not die at once, you are DOWN for 40 s and he can pick you up
  canDown() { const T = this.R.jangTeam; if (!T || this.dropping || this.down) return false; const now = performance.now(); for (const [, g] of this.mates) if (g.tm === T.tm && g.ph >= 4 && g.ph <= 6 && g.has && now - g.at < 3000) return true; return false; }
  // v286 PUBG: when EVERY player of a team is down (or dead) nobody can pick anybody up: the team is out and the match is over for it
  teamWiped() { const T = this.R.jangTeam; if (!T || !this.shared || this.dropping) return false; const now = performance.now(); let seen = 0; for (const [, g] of this.mates) { if (g.tm !== T.tm || !g.has || now - g.at > 3000) continue; seen++; if (g.al !== 0 && g.ph !== 7) return false; } return seen > 0; }
  teamLost() {
    if (this.over) return; const T = this.R.jangTeam, nm = String((T && T.teamName) || 'YOUR TEAM').toUpperCase();
    this.hp = 0; this.down = false; this.reviving = null; this.deaths++; try { this.dropAll(); } catch (e) { /* noop */ } A.voice.death(1); this.R.fireHeld = false; this.R.aiming = false;
    this.R.toast && this.R.toast('TEAM ' + nm + ' LOST', 6); this.finish('TEAM ' + nm + ' LOST');
  }
  goDown() {
    const R = this.R, T = R.jangTeam; this.down = true; this.downT = 40; this.hp = 1; R.me.body.stun = 2; R.fireHeld = false; R.aiming = false; A.voice.death(0.6);
    if (this.ov) { this.ov.style.display = 'grid'; } R.toast && R.toast('YOU ARE DOWN - a teammate can revive you', 4);
  }
  getUp(hp) { this.down = false; this.downT = 0; this.hp = hp; this.R.me.body.stun = 0; if (this.ov) this.ov.style.display = 'none'; this.R.toast && this.R.toast('YOU WERE REVIVED', 3); }
  onRevive() { if (this.down) this.getUp(40); }
  stepDown(dt) {   // bleeding out / reviving
    if (this.down && this.teamWiped()) { this.teamLost(); return; }
    const R = this.R, T = R.jangTeam, b = R.me.body;
    if (this.down) { this.downT -= dt; b.stun = Math.max(b.stun, 1); if (this.ov) this.ov.textContent = 'YOU ARE DOWN  -  ' + Math.max(0, Math.ceil(this.downT)) + ' s  -  waiting for a teammate'; if (this.downT <= 0) this.die(); }
    // a teammate of mine lies down close to me: the REVIVE button; hold on for 7 s next to him and he gets up
    let near = null; if (T && !this.down && this.hp > 0 && this.deadT <= 0 && !this.dropping) for (const [, g] of this.mates) if (g.ph === 7 && g.tm === T.tm && g.has && Math.hypot(g.x - b.x, g.z - b.z) < 3.2) { near = g; break; }
    if (this.reviving) { const g = this.reviving; if (!near || near !== g || this.hp <= 0) { this.reviving = null; R.toast && R.toast('REVIVE CANCELLED', 1.5); } else { { const bb = R.me.body; bb.yaw = Math.atan2(g.x - bb.x, g.z - bb.z); bb.vx = bb.vz = 0; if (this.rvAt && Math.hypot(bb.x - this.rvAt.x, bb.z - this.rvAt.z) > 0.15) { bb.x = this.rvAt.x; bb.z = this.rvAt.z; } } g.rv = (g.rv || 0) + dt; if (g.rv >= 7) { g.rv = 0; this.reviving = null; T.net && T.net.send({ t: 'jr', to: g.id }); R.toast && R.toast('TEAMMATE REVIVED', 2.5); } } }
    if (!this.reviveBtn) { const rb = document.createElement('button'); rb.id = 'c-rev'; rb.type = 'button'; rb.textContent = 'F  -  REVIVE TEAMMATE'; rb.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); this.startRevive(); }); document.body.appendChild(rb); this.reviveBtn = rb; }
    const show = !!near && !this.reviving; if ((this.reviveBtn.style.display === 'block') !== show) this.reviveBtn.style.display = show ? 'block' : 'none'; this.nearDown = near;
    if (this.reviving && this.reviving.rv !== undefined && this.ov) { this.ov.style.display = 'none'; }
    { let rp = this.rvRing; if (!rp) { rp = this.rvRing = document.createElement('div'); rp.id = 'c-rvp'; document.body.appendChild(rp); } const on = !!this.reviving; if (on) { const k = Math.min(1, (this.reviving.rv || 0) / 7); rp.style.background = 'conic-gradient(#ffd23f ' + (k * 360) + 'deg, rgba(0,0,0,0.55) 0)'; rp.dataset.t = (7 - (this.reviving.rv || 0)).toFixed(1); } if ((rp.style.display === 'flex') !== on) rp.style.display = on ? 'flex' : 'none'; }   /* the PUBG revive ring with the seconds left */
  }
  startRevive() { const g = this.nearDown; if (!g || this.reviving || this.down || this.hp <= 0) return false; g.rv = 0; this.reviving = g;
    { const b = this.R.me.body, dx = b.x - g.x, dz = b.z - g.z, d = Math.hypot(dx, dz) || 1, nx = g.x + dx / d * 0.9, nz = g.z + dz / d * 0.9; if (!hitsSolid(layout(), nx - CMB.x, nz - CMB.z, 0.38, b.y)) { b.x = nx; b.z = nz; } b.vx = b.vz = 0; this.rvAt = { x: b.x, z: b.z }; }   /* v279: you kneel right beside him (0.9 m), facing him - the CPR pose used to play where you stood, 3 m away */ this.R.toast && this.R.toast('REVIVING... stay next to him', 4); return true; }
  // ---------------------------------------------------------------- inventory: 1 bat + 2 guns in the hands, everything else in the backpack
  slotsTick() {   // PUBG-style weapon slots: tap a slot to hold it, tap the held one to put it away
    const R = this.R, cb = R.wallet && R.wallet.cb; if (!cb) return;
    if (!this.slotEl) { const e = document.createElement('div'); e.id = 'c-slots'; document.body.appendChild(e); this.slotEl = e;
      e.addEventListener('pointerdown', (ev) => { const t = ev.target.closest('[data-w]'); if (!t) return; ev.preventDefault(); ev.stopPropagation(); const w = t.dataset.w; if (!w) return; R.equip(R.weapon === w && w !== 'fist' ? 'fist' : w); this._sk = ''; }); }
    const gs = this.guns(), nd = cb.nades | 0, list = [gs[0] || '', gs[1] || '', nd > 0 ? 'grenade' : ''], key = list.join() + '|' + nd + '|' + (R.weapon || 'fist') + '|' + this._fight;   /* v264: slot 3 = grenades (tap it / press 3 or 4, then throw with the fire button) */
    if (key === this._sk) return; this._sk = key; this.slotEl.style.display = this._fight ? 'flex' : 'none';
    this.slotEl.innerHTML = list.map((w, i) => '<button type="button" data-w="' + w + '" class="' + (w ? '' : 'empty ') + (w && R.weapon === w ? 'sel' : '') + '"><u>' + (i + 1) + '</u>' + (w && this.icon(w) ? '<img alt="" src="' + this.icon(w) + '">' : '') + (w ? '<b>' + (w === 'bat' ? 'BAT' : w.toUpperCase()) + '</b><small>' + (w === 'bat' ? '' : w === 'grenade' ? 'x' + nd : ((cb.mag[w] | 0) + '/' + (cb.ammo[w] | 0))) + '</small>' : '') + '</button>').join('');
  }
  guns() { const cb = this.R.wallet && this.R.wallet.cb; return cb ? Object.keys(cb.owned).filter((w) => cb.owned[w] && isGunK(w)) : []; }
  count(k) { const cb = this.R.wallet && this.R.wallet.cb; if (!cb) return 0; return k === 'grenade' ? cb.nades | 0 : (cb.inv && cb.inv[k]) | 0; }
  canTake(it) {
    const cb = this.R.wallet && this.R.wallet.cb; if (!cb) return false; const k = it.k;
    if (isGunK(k)) return !!cb.owned[k] || this.guns().length < 2;   // a full pair of hands: press F to swap
    if (k === 'bat') return false;   /* v263: no bat in Jang (GTA only) */
    if (k === 'ammo') return true;   /* v255: PUBG: you can always pick ammo up; it waits in the backpack for your first gun */
    return this.count(k) < (CAP[k] || 4);
  }
  // E: swap the gun in your hands (or the first one) for the gun on the ground in front of you
  promptTick(P) {
    const it = this.sim.near(P.x, P.z, this.R.me.body.y); this.promptIt = it && isGunK(it.k) && !this.canTake(it) ? it : null;
    if (it && !isGunK(it.k) && !this.canTake(it)) { const nw = performance.now(); if (nw - (this._noT || 0) > 1800) { this._noT = nw; const nm = LOOT_NAME[it.k] || it.k.toUpperCase(); this.R.toast && this.R.toast(it.k === 'ammo' ? 'AMMO BOX - you need a gun first' : it.k === 'bat' ? 'You already have a BASEBALL BAT' : nm + ' - BACKPACK FULL (' + this.count(it.k) + '/' + (CAP[it.k] || 4) + ')', 1.8); } }   // v247: always say WHY an item cannot be taken
    if (!this.pickBtn) { const b = document.createElement('button'); b.id = 'c-pick'; b.type = 'button'; b.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); this.swapPick(); }); document.body.appendChild(b); this.pickBtn = b; }
    const on = !!this.promptIt && !this.inv.isOpen(); if (on) { const t = 'F  -  SWAP FOR ' + LOOT_NAME[this.promptIt.k]; if (this.pickBtn.textContent !== t) this.pickBtn.textContent = t; } if ((this.pickBtn.style.display !== 'none') !== on) this.pickBtn.style.display = on ? 'block' : 'none';
  }
  swapPick() {
    if (this.nearDown && this.startRevive()) return true;   // v244: F next to a downed teammate = revive him
    const R = this.R, cb = R.wallet && R.wallet.cb, it = this.promptIt; if (!cb || !it || !it.alive || !this.active) return false;
    const held = R.weapon && cb.owned[R.weapon] && isGunK(R.weapon) ? R.weapon : this.guns()[0]; if (!held) return false;
    this.dropGun(held, true);
    it.alive = false; if (this.shared) { if (it.id > 0) this.R.jangTeam.net.send({ t: 'ctake', id: it.id }); } else { if (it.spot >= 0) this.sim.used.delete(it.spot); this.sim.events.push({ k: 'lootgone', id: it.id }); } this.pickup(it, true); this.promptIt = null; return true;
  }
  dropGun(w, silent) {
    const R = this.R, cb = R.wallet && R.wallet.cb, b = R.me.body; if (!cb || !cb.owned[w]) return false;
    const am = { mag: cb.mag[w] | 0, res: cb.ammo[w] | 0 }, fx = Math.sin(b.yaw), fz = Math.cos(b.yaw), x = b.x - CMB.x + fx * 1.2, z = b.z - CMB.z + fz * 1.2;
    const it = this.sim.dropLoot(w, x, z); it.am = am; cb.owned[w] = false; delete cb.mag[w]; delete cb.ammo[w];
    if (R.weapon === w) { const left = this.guns()[0]; R.equip(left || (cb.owned.bat ? 'bat' : 'fist')); }
    if (!silent) { R.toast && R.toast('DROPPED ' + LOOT_NAME[w]); A.sfx.click && A.sfx.click(); }
    R.updateAmmoHud && R.updateAmmoHud(); R.syncAct && R.syncAct(); this.syncLoot(); if (this.inv) this.inv.render(); return true;
  }
  dropItem(k) {   // v281: drop ONE of anything from the backpack (heals, smoke, grenade, scopes, armour) on the ground in front of you: a teammate (or you) can pick it up again
    const R = this.R, cb = R.wallet && R.wallet.cb, b = R.me.body; if (!cb || !this.sim || this.dropping || this.down) return false;
    const n = k === 'grenade' ? cb.nades | 0 : (cb.inv && cb.inv[k]) | 0; if (n <= 0) return false;
    if (k === 'grenade') { cb.nades = n - 1; if (R.weapon === 'grenade' && cb.nades <= 0) R.equip(this.guns()[0] || 'fist'); } else { cb.inv[k] = n - 1; if (k === 'vest' && cb.inv.vest <= 0) cb.vestHp = 0; if (k === 'helmet' && cb.inv.helmet <= 0) cb.helmHp = 0; if (k === 'scope' && cb.inv.scope <= 0 && R.telescope) { try { R.telescope = false; } catch (e) { /* noop */ } } }
    const fx = Math.sin(b.yaw), fz = Math.cos(b.yaw), it = this.sim.dropLoot(k, b.x - CMB.x + fx * 1.2, b.z - CMB.z + fz * 1.2);
    R.toast && R.toast('DROPPED ' + (LOOT_NAME[k] || String(k).toUpperCase())); A.sfx.click && A.sfx.click(); void it;
    R.updateAmmoHud && R.updateAmmoHud(); R.syncAct && R.syncAct(); this._sk = ''; this.syncLoot(); this.updateHud && this.updateHud(); if (this.inv) this.inv.render(); return true;
  }
  // v271: a small PUBG-style pick-up feed (bottom left, above the hotbar): every pick-up shows what you got for ~2.6 s
  feed(txt, col) {
    let f = this.pkFeed; if (!f) { f = this.pkFeed = document.createElement('div'); f.style.cssText = 'position:fixed;left:14px;bottom:140px;z-index:6;display:flex;flex-direction:column-reverse;gap:3px;pointer-events:none;font:700 13px system-ui,sans-serif;letter-spacing:.5px'; document.body.appendChild(f); }
    const e = document.createElement('div'); e.textContent = txt; e.style.cssText = 'padding:3px 9px;border-left:3px solid ' + (col || '#ffd23f') + ';background:rgba(0,0,0,.55);color:#fff;border-radius:3px;transition:opacity .5s,transform .5s;opacity:0;transform:translateX(-10px)'; f.appendChild(e);
    requestAnimationFrame(() => { e.style.opacity = 1; e.style.transform = 'none'; }); setTimeout(() => { e.style.opacity = 0; }, 2400); setTimeout(() => e.remove(), 3000); while (f.children.length > 4) f.firstChild.remove();
  }
  pickup(it) {
    this.feed('+ ' + (LOOT_NAME[it.k] || String(it.k).toUpperCase()));
    const R = this.R, W = R.wallet, cb = W && W.cb; if (!cb) return; if (!cb.inv) cb.inv = { med: 0, inject: 0, pills: 0, smoke: 0, scope: 0, sscope: 0 }; const k = it.k, A_ = (m) => { R.toast && R.toast(m); A.sfx.pickup && A.sfx.pickup(); };
    const gun = (w) => { const S = WEAPONS[w]; if (!cb.owned[w]) { cb.owned[w] = true; cb.mag[w] = it.am ? it.am.mag : S.mag; cb.ammo[w] = (it.am ? it.am.res : S.ammoPack) + (cb.spare | 0) * (S.ammoPack || 0); cb.spare = 0; if (!R.weapon || R.weapon === 'bat' || R.weapon === 'fist' || it.am) R.equip(w); A_('PICKED UP ' + LOOT_NAME[w]); } else { cb.ammo[w] = (cb.ammo[w] || 0) + S.ammoPack; A_(LOOT_NAME[w] + ' - EXTRA AMMO'); } };
    if (isGunK(k)) gun(k);
    else if (k === 'bat') { cb.owned.bat = true; if (!R.weapon) R.equip('bat'); A_('PICKED UP BASEBALL BAT'); }
    else if (k === 'grenade') { cb.nades = (cb.nades | 0) + 1; A_('PICKED UP GRENADE  x' + cb.nades + '  (BACKPACK)'); }
    else if (k === 'ammo') { let n = 0; if (!Object.keys(cb.owned).some((w) => cb.owned[w] && WEAPONS[w] && WEAPONS[w].mag)) { cb.spare = (cb.spare | 0) + 1; A_('AMMO BOX picked up - it goes to your first gun'); R.updateAmmoHud && R.updateAmmoHud(); this.updateHud(); if (this.inv) this.inv.render(); return; } for (const w of Object.keys(cb.owned)) if (WEAPONS[w] && WEAPONS[w].mag && cb.owned[w]) { cb.ammo[w] = (cb.ammo[w] || 0) + WEAPONS[w].ammoPack; n++; } A_(n ? 'AMMO BOX  -  ammo for ' + Object.keys(cb.owned).filter((w) => WEAPONS[w] && WEAPONS[w].mag && cb.owned[w]).map((w) => LOOT_NAME[w] || w.toUpperCase()).join(', ') : 'AMMO BOX - FIND A GUN FIRST'); }
    else if (ITEM_K.includes(k)) { cb.inv[k] = (cb.inv[k] | 0) + 1; if (k === 'vest') cb.vestHp = 100; if (k === 'helmet') cb.helmHp = 60; A_('PICKED UP ' + LOOT_NAME[k] + '  x' + cb.inv[k] + '  (BACKPACK)'); }
    R.updateAmmoHud && R.updateAmmoHud(); R.syncAct && R.syncAct(); this.updateHud(); if (this.inv) this.inv.render();
  }
  // use something from the backpack: heals take a few seconds (you walk slower and the hand goes to the face), a smoke bomb is thrown, the telescope zooms
  useItem(k) {
    const R = this.R, cb = R.wallet && R.wallet.cb; if (!cb || !this.active || this.dropping || R.drive || this.over) return false; const have = this.count(k);
    if (k === 'sscope') { if (have <= 0) { R.toast && R.toast('NO SNIPER SCOPE'); return false; } if (!cb.owned.sniper) { R.toast && R.toast('You need the SNIPER RIFLE (Kar98) first - the scope clips onto it', 3); return false; } R.equip('sniper'); R.toast && R.toast('SCOPE FITTED to the Kar98 - hold AIM (right mouse / AIM button) to look through it; the mouse wheel or the + / - buttons on screen zoom', 4.5); if (this.inv) this.inv.toggle(false); return true; }
    if (k === 'scope') { if (have <= 0) { R.toast && R.toast('NO TELESCOPE'); return false; } const nowT = performance.now(); if (nowT - (this._tsT || 0) < 1000) return false; this._tsT = nowT; R.telescope = !R.telescope; R.toast && R.toast(R.telescope ? 'TELESCOPE  -  mouse wheel / the + - buttons zoom' : 'TELESCOPE AWAY'); if (this.inv) this.inv.toggle(false); return true; }
    if (k === 'grenade') { if (have <= 0) return false; R.equip('grenade'); if (this.inv) this.inv.toggle(false); return true; }
    if (k === 'vest' || k === 'helmet') { R.toast && R.toast(have > 0 ? (k === 'vest' ? 'BODY ARMOR ON: ' + Math.round(cb.vestHp) + ' left, takes 30% of every hit' : 'HELMET ON: ' + Math.round(cb.helmHp) + ' left, takes 15% of every hit') : 'NONE', 2.5); return false; }
    if (have <= 0) { R.toast && R.toast('NONE LEFT'); return false; }
    if (k === 'smoke') { R.nadeKind = 'smoke'; const ok = R.throwNade(); if (!ok) R.nadeKind = null; else if (this.inv) this.inv.toggle(false); return ok; }
    const U = USE[k]; if (!U) return false; if (this.using) { this.using = null; R.toast && R.toast('CANCELLED'); return false; }
    if (this.hp >= MY_DMG) { R.toast && R.toast('HEALTH IS FULL'); return false; }
    this.using = { k, t: 0, dur: U.dur, given: 0 }; R.aiming = false; if (this.inv) this.inv.toggle(false); return true;
  }
  useTick(dt) {
    if (this.boostT > 0) this.boostT -= dt;
    const u = this.using, R = this.R, cb = R.wallet && R.wallet.cb; if (!u) { if (this.useBar && this.useBar.style.display !== 'none') this.useBar.style.display = 'none'; return; }
    if (!cb || this.hp <= 0 || R.drive) { this.using = null; return; }
    const U = USE[u.k]; u.t += dt; const f = Math.min(1, u.t / u.dur), give = U.hp * f - u.given; if (give > 0) { this.hp = Math.min(MY_DMG, this.hp + give); u.given += give; }
    if (!this.useBar) { const b = document.createElement('div'); b.id = 'c-use'; b.innerHTML = '<span></span><i></i>'; document.body.appendChild(b); this.useBar = b; }
    this.useBar.style.display = 'block'; this.useBar.firstChild.textContent = 'USING ' + U.name + '  ' + Math.round(f * 100) + '%'; this.useBar.lastChild.style.width = (f * 100) + '%';
    if (u.t >= u.dur) { cb.inv[u.k] = Math.max(0, (cb.inv[u.k] | 0) - 1); if (U.boost) { this.boostT = U.boost; R.toast && R.toast(U.name + ' - SPEED BOOST!'); } else R.toast && R.toast(U.name + '  +' + U.hp + ' HEALTH'); A.sfx.pickup && A.sfx.pickup(); this.using = null; this.updateHud(); if (this.inv) this.inv.render(); }
  }
  finish(msg) {
    if (this.over) return; this.over = true; const R = this.R; R.fireHeld = false;
    this.ov.style.display = 'grid'; this.ov.innerHTML = '<div><div style="font-size:34px;color:' + (msg ? '#ff6a6a' : '#ffd23f') + '">' + (msg || 'MATCH OVER') + '</div><div>KILLS: ' + this.kills + '  •  DEATHS: ' + this.deaths + '</div><div style="color:#5ef0a0">EARNED $' + (this.pay || 0) + '</div><div style="font-size:14px;opacity:.8;margin-top:6px">Waiting for the other players...</div></div>';
    if (R.mission) R.mission.send({ t: 'm_res', ok: true, round: R.mission.round });
  }
  // ---------------------------------------------------------------- the player's attacks (called by main.js; coordinates are world coordinates)
  shoot(ox, oz, fx, fz, range, dmg, w, y) {
    if (!this.active) return -1; let d = this.sim.shoot(ox - CMB.x, oz - CMB.z, fx, fz, range, dmg, y); const T = this.R.jangTeam;
    if (this.shared && T && T.net) {   // v246 PvP: a player of the OTHER team on the line of fire (before any wall / bot): the server takes his health. Teammates are never hurt.
      const lim = d > 0 ? d : range, now = performance.now(); let hit = null, hd = lim;
      for (const [, g] of this.mates) { if (g.tm === T.tm || !g.has || g.ph < 4 || g.ph > 7 || now - g.at > 1500 || !g.m.group.visible) continue; const dx = g.x - ox, dz = g.z - oz, a = dx * fx + dz * fz; if (a < 0.2 || a > hd) continue; if (Math.abs(-dx * fz + dz * fx) > 0.7) continue; hit = g; hd = a; }
      if (hit) { T.net.send({ t: 'cpv', to: hit.id, d: +Math.min(60, dmg * 22).toFixed(1) }); return hd; }
    }
    return d;
  }
  hurtPv(m) { if (!this.on || this.hp <= 0 || this.deadT > 0 || this.dropping) return; this.lastBy = m.from; this.lastByAt = performance.now(); this.hurt(Math.max(0, Math.min(60, +m.d || 0))); }   // v246: shot by a player of the other team
  onKillCredit() { this.kills++; this.R.toast && this.R.toast('ENEMY DOWN'); }
  melee(x, z, fx, fz, reach, kind) { if (!this.active) return 0; const dm = kind === 'bat' ? 55 : kind === 'kick' ? 30 : 22; return this.sim.melee(x - CMB.x, z - CMB.z, fx, fz, reach, dm); }
  blast(x, z, r) { if (!this.active) return; this.sim.blast(x - CMB.x, z - CMB.z, r, 3.2); }
}
