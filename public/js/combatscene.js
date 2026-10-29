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
import { buildBattleMap } from './battlemap.js';
import { LOBBY } from './gta.js';
import { OPT } from './opts.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const LOOT_COL = { pistol: '#7fd0ff', revolver: '#5fa8ff', smg: '#ffd23f', ak: '#ffb347', m4: '#ff8a47', shotgun: '#ff6b6b', sniper: '#ff6bd6', bat: '#cfa36a', grenade: '#8dff6b', ammo: '#ffe55c', med: '#ff5c5c', inject: '#5ec8ff', pills: '#ffa94d', smoke: '#cfd6dc', scope: '#b48cff' };
const LOOT_NAME = { pistol: 'PISTOL', revolver: 'REVOLVER', smg: 'SMG', m4: 'M4 RIFLE', shotgun: 'SHOTGUN', ak: 'AK-47', sniper: 'SNIPER RIFLE', bat: 'BASEBALL BAT', grenade: 'GRENADE', ammo: 'AMMO', med: 'FIRST AID', inject: 'ADRENALINE', pills: 'PAIN PILLS', smoke: 'SMOKE BOMB', scope: 'TELESCOPE' };
const newCb = () => ({ owned: {}, mag: {}, ammo: {}, nades: 0, inv: { med: 0, inject: 0, pills: 0, smoke: 0, scope: 0 } });
const ITEM_K = ['med', 'inject', 'pills', 'smoke', 'scope'];
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
    this.R = race; this.on = false; this.sim = null; this.bots = new Map(); this.loot = new Map(); this.group = new THREE.Group(); this.group.visible = false; race.scene.add(this.group);
    this.hp = MY_DMG; this.time = COMBAT_MS / 1000; this.over = false; this.t = 0; this.hud = null; this.deadT = 0; this.kills = 0; this.deaths = 0; this.tr = [];
    this.tmpV = new THREE.Vector3(); this.using = null; this.boostT = 0; this.promptIt = null; this.inv = new Inventory(this);
  }
  get active() { return this.on && !this.over && !!this.sim && this.R.mission && this.R.mission.phase === 'run' && this.deadT <= 0; }
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
    this.hud.querySelector('.ch-t').textContent = mm + ':' + (ss < 10 ? '0' : '') + ss;
    this.hud.querySelector('.ch-s').textContent = 'KILLS ' + this.kills + '   •   DEATHS ' + this.deaths;
    const h = clamp(this.hp, 0, MY_DMG); this.hpBar.querySelector('.cp-n').textContent = Math.round(h); const b = this.hpBar.querySelector('.cp-b'); b.style.width = h + '%'; b.style.background = h > 55 ? '#4ade80' : h > 25 ? '#facc15' : '#ef4444';
  }
  // ---------------------------------------------------------------- start / stop
  begin(m, seat) {
    this.clear(); const R = this.R, b = R.me.body; A.setCommentary(false); this.on = true;   // no Punjabi commentary in the combat mission
 this.over = false; this.kills = 0; this.deaths = 0; this.hp = MY_DMG; this.time = COMBAT_MS / 1000; this.deadT = 0;
    this.sim = new CombatSim((m.round * 7919 + 13) | 0, 8); this.group.visible = true; this.pay = 0;
    if (R.world && R.world.group) R.world.group.visible = false;   // the city is 800 000 triangles and 1.5 km away: do not draw it during the match
    if (!this.map) { const t0 = performance.now(); this.map = buildBattleMap(R.isTouch ? 0 : 2); this.buildMs = Math.round(performance.now() - t0); this.group.add(this.map.group); }   // the landscape is built the first time a match starts (the city never pays for it)
    if (R.wallet) { R.wallet.cb = newCb(); R.weapon = null; R.aiming = false; R.syncAct && R.syncAct(); R.updateAmmoHud && R.updateAmmoHud(); }
    this.respawn(seat | 0); this.map.warm(R.me.body); this.showHud(true); this.updateHud(); this.syncLoot();
    this.startDrop();
  }
  respawn(seat) {
    const R = this.R, b = R.me.body, L = layout(), p = L.spawns[((seat === undefined ? Math.floor(Math.random() * L.spawns.length) : seat * 5 + 1) % L.spawns.length + L.spawns.length) % L.spawns.length];
    b.x = CMB.x + p.x; b.z = CMB.z + p.z; b.y = cmbH(p.x, p.z) + 0.05; b.vx = b.vz = b.vy = 0; b.stun = 0; b.hitCd = 0.5; R.crouch = false; R.camInit = false; R.camYaw = Math.random() * 6.28;
  }
  clear() {
    for (const [, a] of this.bots) { this.group.remove(a.g); a.m.dispose && a.m.dispose(); } this.bots.clear();
    for (const [, l] of this.loot) this.group.remove(l.g); this.loot.clear(); for (const q of this.tr) this.group.remove(q); this.tr.length = 0;
    this.endDrop(); this.sim = null; this.on = false; this.group.visible = false; if (this.R.world && this.R.world.group) this.R.world.group.visible = !this.R.jang; this.showHud(false); document.body.classList.remove('jang-fight'); this._fight = null; if (this.slotEl) this.slotEl.style.display = 'none'; A.setCommentary(OPT.punjabi !== false);
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
    const R = this.R, b = R.me.body, a = Math.random() * Math.PI * 2, hd = [Math.sin(a), Math.cos(a)], off = (Math.random() - 0.5) * 240, L = 760;
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
      } else if (sd) { b.grounded = false; this.dropPose = 3; this.plane.updateMatrixWorld(true); const v = sd.getWorldPosition(new THREE.Vector3()); b.x = v.x; b.y = v.y - 0.3; b.z = v.z; b.yaw = d.a + Math.PI / 2; b.vx = b.vz = 0; }   // sitting on the left bench, facing the aisle
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
    const gy = cmbH(b.x - CMB.x, b.z - CMB.z), h = b.y - gy;
    if (d.ph === 'fall' && (inp.jumpPressed && d.t > 1.2 || h < 110)) { d.ph = 'chute'; d.ch = 0; }   // open the parachute (by hand, or automatically at 110 m)
    const free = d.ph === 'fall'; const maxH = free ? 26 : 12, ml = Math.hypot(inp.mx, inp.mz);
    const tx = inp.mx * maxH, tz = inp.mz * maxH, k = Math.min(1, dt * (free ? 1.6 : 1.1)); d.vx += (tx - d.vx) * k; d.vz += (tz - d.vz) * k;
    const vyT = free ? -52 : -6.5; b.vy += (vyT - b.vy) * Math.min(1, dt * (free ? 1.1 : 1.7)); if (free) b.vy -= 9 * dt * (b.vy > -40 ? 1 : 0);
    const py = b.y, Lm = layout(); let nx = b.x + d.vx * dt, nz = b.z + d.vz * dt;
    { const hs = hitsSolid(Lm, nx - CMB.x, nz - CMB.z, 0.38, py); if (hs && hs.k !== 'tree' && hs.k !== 'roof' && hs.k !== 'floor') { nx = b.x; nz = b.z; d.vx *= 0.2; d.vz *= 0.2; } }   // the chute cannot go through a wall
    b.x = nx; b.z = nz; b.y += b.vy * dt; b.vx = d.vx; b.vz = d.vz; b.grounded = false; if (ml > 0.1 || Math.hypot(d.vx, d.vz) > 3) b.yaw = Math.atan2(d.vx, d.vz);
    this.dropPose = free ? 1 : 2;
    const gy2 = Math.max(gy, supportY(Lm, b.x - CMB.x, b.z - CMB.z, 0.3, py));   // land on a roof or a crate, not through it
    if (b.y <= gy2 + 0.05) { b.y = gy2 + 0.05; b.vy = 0; b.vx = d.vx * 0.3; b.vz = d.vz * 0.3; b.grounded = true; this.endDrop(true); return; }
    this.chuteVis(d.ph === 'chute', b, dt);
  }
  chuteVis(on, b, dt) {
    if (!this.chute) { const g = new THREE.Group(), c = new THREE.Mesh(new THREE.SphereGeometry(2.8, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#1c201c', roughness: 0.85, side: THREE.DoubleSide, transparent: false })); c.scale.y = 0.7; c.position.y = 3.4; g.add(c);
      for (let q = 0; q < 4; q++) { const st = new THREE.Mesh(new THREE.SphereGeometry(2.81, 16, 8, q * Math.PI / 2, Math.PI / 4, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#46523a', roughness: 0.85, side: THREE.DoubleSide, transparent: false })); st.scale.y = 0.7; st.position.y = 3.4; g.add(st); }   // olive panels on the black canopy
      const lm = new THREE.MeshBasicMaterial({ color: '#e8e4d6' }), hm = new THREE.MeshStandardMaterial({ color: '#23262b', roughness: 0.8 }), V = THREE.Vector3;
      const seg = (p, q, r, mat) => { const d = q.clone().sub(p), l = d.length(), m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, l, 5), mat); m.position.copy(p).addScaledVector(d, 0.5); m.quaternion.setFromUnitVectors(new V(0, 1, 0), d.normalize()); return m; };
      for (let k = 0; k < 8; k++) { const a = k / 8 * Math.PI * 2 + 0.39, rim = new V(Math.cos(a) * 2.7, 3.2, Math.sin(a) * 2.7), sh = new V(Math.cos(a) > 0 ? 0.24 : -0.24, 1.62, 0); g.add(seg(rim, sh, 0.018, lm)); }   // eight suspension lines down to the two risers on the shoulders
      for (const sx of [-1, 1]) { g.add(seg(new V(sx * 0.24, 1.62, 0), new V(sx * 0.2, 1.05, 0.05), 0.035, hm)); const sb = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.55, 0.3), hm); sb.position.set(sx * 0.21, 1.4, 0); sb.rotation.z = sx * 0.06; g.add(sb); const lg = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.06, 0.3), hm); lg.position.set(sx * 0.16, 0.62, 0.02); g.add(lg); }
      const belt = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.32), hm); belt.position.set(0, 0.98, 0); g.add(belt); const chest = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.05, 0.31), hm); chest.position.set(0, 1.46, 0); g.add(chest);
      const pack = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.55, 0.22), new THREE.MeshStandardMaterial({ color: '#3f5d34', roughness: 0.9 })); pack.position.set(0, 1.25, -0.28); g.add(pack);   // the empty pack on the back
      this.chute = g; this.group.add(g); }
    const d = this.drop; this.chute.visible = on; if (!on) return; d.ch = Math.min(1, d.ch + dt * 2.5); this.chute.scale.setScalar(0.25 + 0.75 * d.ch); this.chute.position.set(b.x, b.y, b.z); this.chute.rotation.set(0, b.yaw, Math.sin(this.t * 1.3) * 0.04);
  }
  endDrop(landed) { if (this.doorEl) this.doorEl.style.display = 'none'; { const jb = document.getElementById('a-jump'); if (jb) jb.classList.remove('ready'); } if (this.jumpBtn) this.jumpBtn.style.display = "none"; this.hasChute = false; if (this.chute) this.chute.visible = false; if (this.plane && !landed) this.plane.visible = false; this.dropping = false; this.dropPose = 0; const g = this.R.me && this.R.me.model && this.R.me.model.group; if (g) g.visible = true; this.drop = null; if (landed) { this.R.camInit = false; } }
  // ---------------------------------------------------------------- the world (bots, loot)
  syncLoot() {
    const sim = this.sim; if (!sim) return;
    for (const it of sim.loot) { if (!it.alive || this.loot.has(it.id)) continue; const g = new THREE.Group(), col = LOOT_COL[it.k];
      let mdl; if (it.k === 'ammo') { mdl = new THREE.Group(); mdl.add(new THREE.Mesh(GEO('Box',0.5, 0.3, 0.34), SM('#3d5a2a', 0.7))); const s = new THREE.Mesh(GEO('Box',0.52, 0.08, 0.36), SM('#ffd23f')); s.position.y = 0.04; mdl.add(s); }
      else if (it.k === 'med') { mdl = new THREE.Group(); mdl.add(new THREE.Mesh(GEO('Box',0.55, 0.38, 0.38), SM('#f4f4f4'))); const rm = SM('#e0242b'); const a = new THREE.Mesh(GEO('Box',0.26, 0.4, 0.06), rm), c = new THREE.Mesh(GEO('Box',0.1, 0.4, 0.4), rm); c.rotation.x = 0; mdl.add(a, c); a.scale.set(1, 1, 1.4); }
      else if (ITEM_K.includes(it.k)) { mdl = new THREE.Group(); const M = (c) => SM(c, 0.6);
        if (it.k === 'inject') { const b = new THREE.Mesh(GEO('Cylinder',0.06, 0.06, 0.34, 8), M('#e8f4ff')), n = new THREE.Mesh(GEO('Cylinder',0.012, 0.012, 0.16, 5), M('#c0c6cc')), p = new THREE.Mesh(GEO('Cylinder',0.08, 0.08, 0.04, 8), M('#2aa5ff')); b.rotation.z = Math.PI / 2; n.rotation.z = Math.PI / 2; n.position.x = 0.25; p.rotation.z = Math.PI / 2; p.position.x = -0.18; mdl.add(b, n, p); mdl.scale.setScalar(1.5); }
        else if (it.k === 'pills') { const b = new THREE.Mesh(GEO('Cylinder',0.13, 0.13, 0.3, 10), M('#ff9a2e')), c = new THREE.Mesh(GEO('Cylinder',0.14, 0.14, 0.08, 10), M('#fff')); c.position.y = 0.18; mdl.add(b, c); }
        else if (it.k === 'smoke') { const b = new THREE.Mesh(GEO('Cylinder',0.12, 0.12, 0.3, 10), M('#8c949b')), c = new THREE.Mesh(GEO('Cylinder',0.05, 0.05, 0.1, 8), M('#2b2f33')); c.position.y = 0.2; mdl.add(b, c); }
        else { const b = new THREE.Mesh(GEO('Cylinder',0.07, 0.09, 0.5, 10), M('#2c2c34')), c = new THREE.Mesh(GEO('Cylinder',0.1, 0.1, 0.08, 10), M('#b48cff')); b.rotation.z = Math.PI / 2; c.rotation.z = Math.PI / 2; c.position.x = 0.2; mdl.add(b, c); } }
      else { mdl = makeWeaponModel(it.k); mdl.scale.setScalar(it.k === 'grenade' ? 2.2 : it.k === 'bat' ? 1.5 : it.k === 'pistol' || it.k === 'revolver' ? 2.4 : 1.5); if (it.k === 'bat') mdl.rotation.z = Math.PI / 2; else mdl.rotation.y = Math.PI / 2; }
      const gunish = it.k !== 'ammo' && it.k !== 'med' && !ITEM_K.includes(it.k), lay = new THREE.Group(); lay.add(mdl); if (gunish) lay.rotation.x = Math.PI / 2; const pivot = new THREE.Group(); pivot.add(lay); pivot.rotation.y = (it.id * 2.399) % 6.28; pivot.position.y = gunish ? 0.11 : ITEM_K.includes(it.k) && it.k !== 'med' ? 0.13 : 0.17; g.add(pivot); g.userData.pivot = pivot;   // lying on the floor like PUBG: guns on their side, boxes flat
      const ring = new THREE.Mesh(GEO('Ring',0.46, 0.52, 40), RM(col, 0.75)); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.025; { const disc = new THREE.Mesh(GEO('Circle',0.46, 32), RM(col, 0.12)); disc.rotation.x = -Math.PI / 2; disc.position.y = 0.02; g.add(disc); } g.add(ring);
      /* no light beam: PUBG items just lie there with a ring */
      g.position.set(CMB.x + it.x, cmbH(it.x, it.z), CMB.z + it.z); g.traverse((o) => { if (o.isMesh) o.castShadow = false; }); g.visible = false; this.group.add(g); this.loot.set(it.id, { g, it, ph: Math.random() * 6 }); }   // loot casts no shadow (a tiny shadow under a gun nobody sees, but a whole extra draw)
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
  update(dt) {
    const R = this.R; if (!this.on || !this.sim) return; this.t += dt; const sim = this.sim, b = R.me.body, M = R.mission;
    const P = { x: b.x - CMB.x, z: b.z - CMB.z, hp: this.hp, alive: this.hp > 0 && this.deadT <= 0 && !this.dropping };
    { const lim = CMB.half - 8;   // never leave the island, never fall under it (v207): pushed back inside / put back on the ground
      const ox = b.x - CMB.x, oz = b.z - CMB.z, cx = Math.max(-lim, Math.min(lim, ox)), cz = Math.max(-lim, Math.min(lim, oz));
      if (cx !== ox || cz !== oz) { b.x = CMB.x + cx; b.z = CMB.z + cz; b.vx = b.vz = 0; if (this.drop) { this.drop.vx = 0; this.drop.vz = 0; } }
      if (!this.dropping && b.y < cmbH(cx, cz) - 3) { b.y = cmbH(cx, cz) + 1.2; b.vy = 0; b.grounded = false; b.swim = 0; b.inWater = false; } }
    { const f = !this.dropping && this.hp > 0; if (this._fight !== f) { this._fight = f; document.body.classList.toggle('jang-fight', f); } this.slotsTick(); }
    const run = M && M.phase === 'run' && !this.over;
    if (!this.dropping && P.alive && !R.drive) {   // the towers: take the parachute from the roof, jump off and it opens by itself
      for (const t of layout().towers) if (!this.hasChute && Math.hypot(P.x - t.x, P.z - t.z) < 3.4 && Math.abs(b.y - t.py) < 2.5) { this.hasChute = true; R.toast && R.toast('PARACHUTE PACKED - jump off the tower!', 3.5); A.sfx.pickup && A.sfx.pickup(); }
      if (this.hasChute && !b.grounded && b.vy < -7 && b.y - cmbH(P.x, P.z) > 5) { this.drop = { ph: 'chute', t: 0, hd: [0, 1], a: 0, sx: b.x, sz: b.z, L: 0, v: 0, alt: 0, vx: b.vx || 0, vz: b.vz || 0, hint: 0, ch: 0 }; this.dropping = true; this.dropPose = 2; R.toast && R.toast('PARACHUTE OPEN', 2); }
    }
    if (run) {
      this.time -= dt;
      // the ammo / health / weapons on the ground
      if (!(P.alive && !this.dropping)) { this.using = null; if (this.R.telescope) this.R.telescope = false; }
      if (P.alive && !this.dropping) { const it = sim.take(P.x, P.z, (q) => this.canTake(q)); if (it) this.pickup(it); this.promptTick(P); this.useTick(dt); } else this.promptIt = null;
      sim.tick(dt, P);
      for (const e of sim.drain()) this.event(e, b);
      if (this.deadT > 0) { this.deadT -= dt; if (this.deadT <= 0) { this.hp = MY_DMG; this.respawn(); if (R.wallet) { R.wallet.cb = newCb(); R.weapon = null; R.aiming = false; R.syncAct && R.syncAct(); R.updateAmmoHud && R.updateAmmoHud(); } if (this.ov) this.ov.style.display = 'none'; } }
      if (this.time <= 0) this.finish();
    }
    this.syncLoot(); if (this.map) this.map.update(dt, R.camera.position);
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
        a.g.rotation.set(0, s.yaw, 0); a.g.position.set(CMB.x + s.x, g0(s.x, s.z), CMB.z + s.z);
        if (far) { if (a.g.visible) a.g.visible = false; a.acc = 0; continue; }
        a.acc = (a.acc || 0) + dt; const skip = d2 > BOT_MID2 && (fr + bi) % 3 !== 0; if (skip && a.g.visible) continue;   // (a bot that was hidden is always updated once when it comes back)
        const adt = a.acc; a.acc = 0;
        if (s.alive) { a.g.visible = true; a.m.update(adt, { seated: false, speed: s.speed, grounded: true, weapon: s.weapon, aiming: s.seen, crouch: false, vy: 0, stun: 0 }); }
        else { const dk = ['dieF', 'dieB', 'dieR', 'dieL', 'dieF', 'dieB'][(s.id | 0) % 6]; a.m.update(adt, { seated: false, speed: 0, grounded: true, zpose: dk, zp: Math.min(1, s.dieT / 2.4), weapon: s.weapon }); a.g.visible = s.dieT < 6; }
      } }
    for (const q of this.tr) if (q.visible) { q.userData.t -= dt; if (q.userData.t <= 0) q.visible = false; }
    if (this.vig && this.vig.style.opacity > 0) this.vig.style.opacity = Math.max(0, this.vig.style.opacity - dt * 1.6);
    this.hudT = (this.hudT || 0) - dt; if (this.hudT <= 0) { this.hudT = 0.2; this.updateHud(); }
  }
  event(e, b) {
    const R = this.R;
    if (e.k === 'shot') {
      const wx = CMB.x + e.x, wz = CMB.z + e.z, tx = e.hit ? b.x : b.x + (Math.random() - 0.5) * 3, tz = e.hit ? b.z : b.z + (Math.random() - 0.5) * 3, cd = Math.hypot(wx - R.camera.position.x, wz - R.camera.position.z);
      const gy = cmbH(e.x, e.z); this.tracer(wx, gy + 1.4, wz, tx, b.y + 1.3, tz); R.particles && R.particles.emit(wx, gy + 1.4, wz, 3, { color: '#ffd978', speed: 1.5, up: 0.5, life: 0.12, size: 0.14 });
      if (cd < 120) { const v = Math.max(0.18, 1 - cd / 120); e.w === 'ak' ? A.sfx.akShot && A.sfx.akShot(v) : A.sfx.shot(0, v); }
      if (e.hit && this.hp > 0 && this.deadT <= 0) this.hurt(e.dmg);
    } else if (e.k === 'kill') {
      this.kills++; const pay = 100; this.pay += pay; if (R.wallet) R.wallet.add(pay, 'kill'); R.toast && R.toast('ENEMY DOWN  +$' + pay); A.sfx.pickup && A.sfx.pickup();
      R.particles && R.particles.emit(CMB.x + e.x, cmbH(e.x, e.z) + 1.2, CMB.z + e.z, 10, { color: '#ff5a4a', speed: 3, up: 2, life: 0.4, size: 0.2 });
    } else if (e.k === 'bothit') R.particles && R.particles.emit(CMB.x + e.x, cmbH(e.x, e.z) + 1.2, CMB.z + e.z, 6, { color: '#ff5a4a', speed: 3, up: 2, life: 0.35, size: 0.2 });
  }
  hurt(d) {
    this.hp -= d; if (this.vig) this.vig.style.opacity = Math.min(1, 0.4 + d / 20); if (this.R.shake !== undefined) this.R.shake = Math.max(this.R.shake, 0.25);
    if (this.hp <= 0) { this.hp = 0; this.deaths++; this.deadT = 4; this.R.me.body.stun = 4; this.R.fireHeld = false; if (this.ov) { this.ov.style.display = 'grid'; this.ov.textContent = 'YOU WERE KILLED  -  RESPAWNING...'; } }
  }
  // ---------------------------------------------------------------- inventory: 1 bat + 2 guns in the hands, everything else in the backpack
  slotsTick() {   // PUBG-style weapon slots: tap a slot to hold it, tap the held one to put it away
    const R = this.R, cb = R.wallet && R.wallet.cb; if (!cb) return;
    if (!this.slotEl) { const e = document.createElement('div'); e.id = 'c-slots'; document.body.appendChild(e); this.slotEl = e;
      e.addEventListener('pointerdown', (ev) => { const t = ev.target.closest('[data-w]'); if (!t) return; ev.preventDefault(); ev.stopPropagation(); const w = t.dataset.w; R.equip(R.weapon === w && w !== 'fist' ? 'fist' : w); this._sk = ''; }); }
    const gs = this.guns(), list = [gs[0] || '', gs[1] || '', cb.owned.bat ? 'bat' : ''], key = list.join() + '|' + (R.weapon || 'fist') + '|' + this._fight;
    if (key === this._sk) return; this._sk = key; this.slotEl.style.display = this._fight ? 'flex' : 'none';
    this.slotEl.innerHTML = list.map((w, i) => '<button type="button" data-w="' + w + '" class="' + (w ? '' : 'empty ') + (w && R.weapon === w ? 'sel' : '') + '"><u>' + (i + 1) + '</u>' + (w ? '<b>' + (w === 'bat' ? 'BAT' : w.toUpperCase()) + '</b><small>' + (w === 'bat' ? '' : ((cb.mag[w] | 0) + '/' + (cb.ammo[w] | 0))) + '</small>' : '') + '</button>').join('');
  }
  guns() { const cb = this.R.wallet && this.R.wallet.cb; return cb ? Object.keys(cb.owned).filter((w) => cb.owned[w] && isGunK(w)) : []; }
  count(k) { const cb = this.R.wallet && this.R.wallet.cb; if (!cb) return 0; return k === 'grenade' ? cb.nades | 0 : (cb.inv && cb.inv[k]) | 0; }
  canTake(it) {
    const cb = this.R.wallet && this.R.wallet.cb; if (!cb) return false; const k = it.k;
    if (isGunK(k)) return !!cb.owned[k] || this.guns().length < 2;   // a full pair of hands: press E to swap
    if (k === 'bat') return !cb.owned.bat;
    if (k === 'ammo') return this.guns().length > 0;
    return this.count(k) < (CAP[k] || 4);
  }
  // E: swap the gun in your hands (or the first one) for the gun on the ground in front of you
  promptTick(P) {
    const it = this.sim.near(P.x, P.z); this.promptIt = it && isGunK(it.k) && !this.canTake(it) ? it : null;
    if (!this.pickBtn) { const b = document.createElement('button'); b.id = 'c-pick'; b.type = 'button'; b.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); this.swapPick(); }); document.body.appendChild(b); this.pickBtn = b; }
    const on = !!this.promptIt && !this.inv.isOpen(); if (on) { const t = 'E  -  SWAP FOR ' + LOOT_NAME[this.promptIt.k]; if (this.pickBtn.textContent !== t) this.pickBtn.textContent = t; } if ((this.pickBtn.style.display !== 'none') !== on) this.pickBtn.style.display = on ? 'block' : 'none';
  }
  swapPick() {
    const R = this.R, cb = R.wallet && R.wallet.cb, it = this.promptIt; if (!cb || !it || !it.alive || !this.active) return false;
    const held = R.weapon && cb.owned[R.weapon] && isGunK(R.weapon) ? R.weapon : this.guns()[0]; if (!held) return false;
    this.dropGun(held, true);
    it.alive = false; if (it.spot >= 0) this.sim.used.delete(it.spot); this.sim.events.push({ k: 'lootgone', id: it.id }); this.pickup(it, true); this.promptIt = null; return true;
  }
  dropGun(w, silent) {
    const R = this.R, cb = R.wallet && R.wallet.cb, b = R.me.body; if (!cb || !cb.owned[w]) return false;
    const am = { mag: cb.mag[w] | 0, res: cb.ammo[w] | 0 }, fx = Math.sin(b.yaw), fz = Math.cos(b.yaw), x = b.x - CMB.x + fx * 1.2, z = b.z - CMB.z + fz * 1.2;
    const it = this.sim.dropLoot(w, x, z); it.am = am; cb.owned[w] = false; delete cb.mag[w]; delete cb.ammo[w];
    if (R.weapon === w) { const left = this.guns()[0]; R.equip(left || (cb.owned.bat ? 'bat' : 'fist')); }
    if (!silent) { R.toast && R.toast('DROPPED ' + LOOT_NAME[w]); A.sfx.click && A.sfx.click(); }
    R.updateAmmoHud && R.updateAmmoHud(); R.syncAct && R.syncAct(); this.syncLoot(); if (this.inv) this.inv.render(); return true;
  }
  pickup(it) {
    const R = this.R, W = R.wallet, cb = W && W.cb; if (!cb) return; if (!cb.inv) cb.inv = { med: 0, inject: 0, pills: 0, smoke: 0, scope: 0 }; const k = it.k, A_ = (m) => { R.toast && R.toast(m); A.sfx.pickup && A.sfx.pickup(); };
    const gun = (w) => { const S = WEAPONS[w]; if (!cb.owned[w]) { cb.owned[w] = true; cb.mag[w] = it.am ? it.am.mag : S.mag; cb.ammo[w] = it.am ? it.am.res : S.ammoPack; if (!R.weapon || R.weapon === 'bat' || R.weapon === 'fist' || it.am) R.equip(w); A_('PICKED UP ' + LOOT_NAME[w]); } else { cb.ammo[w] = (cb.ammo[w] || 0) + S.ammoPack; A_(LOOT_NAME[w] + ' - EXTRA AMMO'); } };
    if (isGunK(k)) gun(k);
    else if (k === 'bat') { cb.owned.bat = true; if (!R.weapon) R.equip('bat'); A_('PICKED UP BASEBALL BAT'); }
    else if (k === 'grenade') { cb.nades = (cb.nades | 0) + 1; A_('GRENADE  x' + cb.nades + '  (BACKPACK)'); }
    else if (k === 'ammo') { let n = 0; for (const w of Object.keys(cb.owned)) if (WEAPONS[w] && WEAPONS[w].mag && cb.owned[w]) { cb.ammo[w] = (cb.ammo[w] || 0) + WEAPONS[w].ammoPack; n++; } A_(n ? 'AMMO FOR ALL YOUR GUNS' : 'AMMO - FIND A GUN FIRST'); }
    else if (ITEM_K.includes(k)) { cb.inv[k] = (cb.inv[k] | 0) + 1; A_(LOOT_NAME[k] + '  x' + cb.inv[k] + '  (BACKPACK)'); }
    R.updateAmmoHud && R.updateAmmoHud(); R.syncAct && R.syncAct(); this.updateHud(); if (this.inv) this.inv.render();
  }
  // use something from the backpack: heals take a few seconds (you walk slower and the hand goes to the face), a smoke bomb is thrown, the telescope zooms
  useItem(k) {
    const R = this.R, cb = R.wallet && R.wallet.cb; if (!cb || !this.active || this.dropping || R.drive || this.over) return false; const have = this.count(k);
    if (k === 'scope') { if (have <= 0) { R.toast && R.toast('NO TELESCOPE'); return false; } const nowT = performance.now(); if (nowT - (this._tsT || 0) < 1000) return false; this._tsT = nowT; R.telescope = !R.telescope; R.toast && R.toast(R.telescope ? 'TELESCOPE  -  scroll / +  - to zoom' : 'TELESCOPE AWAY'); if (this.inv) this.inv.toggle(false); return true; }
    if (k === 'grenade') { if (have <= 0) return false; R.equip('grenade'); if (this.inv) this.inv.toggle(false); return true; }
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
