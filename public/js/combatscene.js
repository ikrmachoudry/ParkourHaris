// COMBAT MISSION on the client: drops the player onto the hidden battle map, draws the bots and the loot, runs the 5 minute match (combat.js has the brain),
// shows the HUD (time, kills, health) and turns the player's bullets, fists and grenades into hits on the bots.
import * as THREE from 'three';
import { makeHero } from './glbactor.js';
import { buildCabin } from './planecabin.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { makeWeaponModel } from './weaponmodels.js';
import * as A from './audio.js';
import { WEAPONS } from './economy.js';
import { CombatSim, CMB, COMBAT_MS, layout, cmbH } from './combat.js';
import { buildBattleMap } from './battlemap.js';
import { LOBBY } from './gta.js';
import { OPT } from './opts.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const LOOT_COL = { pistol: '#7fd0ff', revolver: '#5fa8ff', smg: '#ffd23f', ak: '#ffb347', m4: '#ff8a47', shotgun: '#ff6b6b', sniper: '#ff6bd6', bat: '#cfa36a', grenade: '#8dff6b', ammo: '#ffe55c', med: '#ff5c5c' };
const LOOT_NAME = { pistol: 'PISTOL', revolver: 'REVOLVER', smg: 'SMG', m4: 'M4 RIFLE', shotgun: 'SHOTGUN', ak: 'AK-47', sniper: 'SNIPER RIFLE', bat: 'BASEBALL BAT', grenade: 'GRENADE', ammo: 'AMMO', med: 'FIRST AID' };
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
    if (R.world && R.world.group) R.world.group.visible = false;   // the city is 800 000 triangles and 1.5 km away: do not draw it during the match
    if (!this.map) { const t0 = performance.now(); this.map = buildBattleMap(R.isTouch ? 0 : 2); this.buildMs = Math.round(performance.now() - t0); this.group.add(this.map.group); }   // the landscape is built the first time a match starts (the city never pays for it)
    if (R.wallet) { R.wallet.cb = { owned: {}, mag: {}, ammo: {}, nades: 0 }; R.weapon = null; R.aiming = false; R.syncAct && R.syncAct(); R.updateAmmoHud && R.updateAmmoHud(); }
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
    this.endDrop(); this.sim = null; this.on = false; this.group.visible = false; if (this.R.world && this.R.world.group) this.R.world.group.visible = true; this.showHud(false); A.setCommentary(OPT.punjabi !== false);
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
    return this.planeP = new Promise((res) => new GLTFLoader().load('models/c130.glb', (g) => {
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
    }, undefined, () => res(null)));
  }
  startDrop() {
    const R = this.R, b = R.me.body, a = Math.random() * Math.PI * 2, hd = [Math.sin(a), Math.cos(a)], off = (Math.random() - 0.5) * 240, L = 760;
    const cx = CMB.x - hd[1] * off, cz = CMB.z + hd[0] * off;   // a straight line across the island, a little off centre
    this.drop = { ph: 'plane', t: 0, hd, a, sx: cx - hd[0] * L / 2, sz: cz - hd[1] * L / 2, L, v: 34, alt: 230, vx: 0, vz: 0, hint: 0, ch: 0 };
    this.dropping = true; this.dropPose = 0;
    if (!this.plane) { this.plane = new THREE.Group(); this.group.add(this.plane); }
    this.plane.visible = true; this.plane.clear(); this.loadPlane().then((w) => { if (w && this.plane && this.drop) { this.plane.clear(); this.plane.add(w); } });
    this.placeDrop(0); b.vx = b.vz = b.vy = 0; b.grounded = false; R.camInit = false; R.camYaw = a; R.toast && R.toast('✈ JUMP when you are over the island  •  SPACE / JUMP button', 4);
  }
  placeDrop(t) { const d = this.drop, b = this.R.me.body; const x = d.sx + d.hd[0] * d.v * t, z = d.sz + d.hd[1] * d.v * t;
    if (this.plane) { this.plane.position.set(x, d.alt, z); this.plane.rotation.y = d.a; }
    if (d.ph === 'plane') { b.x = x; b.y = d.alt - 1.2; b.z = z; b.yaw = d.a; } }
  stepDrop(dt, inp, b) {   // called by the main loop instead of the ground physics while dropping
    const d = this.drop; if (!d) { this.dropping = false; return; }
    const R = this.R, g = R.me.model && R.me.model.group; d.t += dt;
    if (this.plane && this.planeProps) for (const pv of this.planeProps) pv.rotation.z += dt * 38;
    if (d.ph === 'plane') {
      this.placeDrop(d.t); b.grounded = false; this.dropPose = 3; if (g) g.visible = true; { const w = this.plane && this.plane.children[0]; if (w && w.userData.scan) { w.userData.scan.visible = false; w.userData.cabin.visible = true; } }
      { const w = this.plane && this.plane.children[0], st = w && w.userData.seat; if (st) { this.plane.updateMatrixWorld(true); const v = st.getWorldPosition(new THREE.Vector3()); b.x = v.x; b.y = v.y - 0.1; b.z = v.z; b.yaw = d.a + Math.PI / 2; } }   // sit on the left bench, facing the aisle
      const dist = d.v * d.t; if ((inp.jumpPressed && dist > 40) || dist > d.L - 20) {   // out of the plane
        d.ph = 'fall'; { const w = this.plane && this.plane.children[0]; if (w && w.userData.scan) { w.userData.scan.visible = true; w.userData.cabin.visible = false; } } b.y += 1.2; d.vx = d.hd[0] * d.v * 0.7; d.vz = d.hd[1] * d.v * 0.7; b.vy = 0; R.camInit = false; }
      return;
    }
    if (this.plane) { this.plane.position.x += d.hd[0] * d.v * dt; this.plane.position.z += d.hd[1] * d.v * dt; if (d.t > 40) this.plane.visible = false; }
    const gy = cmbH(b.x - CMB.x, b.z - CMB.z), h = b.y - gy;
    if (d.ph === 'fall' && (inp.jumpPressed && d.t > 1.2 || h < 110)) { d.ph = 'chute'; d.ch = 0; }   // open the parachute (by hand, or automatically at 110 m)
    const free = d.ph === 'fall'; const maxH = free ? 26 : 12, ml = Math.hypot(inp.mx, inp.mz);
    const tx = inp.mx * maxH, tz = inp.mz * maxH, k = Math.min(1, dt * (free ? 1.6 : 1.1)); d.vx += (tx - d.vx) * k; d.vz += (tz - d.vz) * k;
    const vyT = free ? -52 : -6.5; b.vy += (vyT - b.vy) * Math.min(1, dt * (free ? 1.1 : 1.7)); if (free) b.vy -= 9 * dt * (b.vy > -40 ? 1 : 0);
    b.x += d.vx * dt; b.z += d.vz * dt; b.y += b.vy * dt; b.vx = d.vx; b.vz = d.vz; b.grounded = false; if (ml > 0.1 || Math.hypot(d.vx, d.vz) > 3) b.yaw = Math.atan2(d.vx, d.vz);
    this.dropPose = free ? 1 : 2;
    if (b.y <= gy + 0.05) { b.y = gy + 0.05; b.vy = 0; b.vx = d.vx * 0.3; b.vz = d.vz * 0.3; b.grounded = true; this.endDrop(true); return; }
    this.chuteVis(d.ph === 'chute', b, dt);
  }
  chuteVis(on, b, dt) {
    if (!this.chute) { const g = new THREE.Group(), c = new THREE.Mesh(new THREE.SphereGeometry(2.8, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#ec5b2b', roughness: 0.8, side: THREE.DoubleSide, transparent: true, opacity: 0.55, depthWrite: false })); c.scale.y = 0.7; c.position.y = 3.4; g.add(c);
      const st = new THREE.Mesh(new THREE.SphereGeometry(2.81, 16, 8, 0, Math.PI / 4, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#f5f1e8', roughness: 0.8, side: THREE.DoubleSide, transparent: true, opacity: 0.55, depthWrite: false })); st.scale.y = 0.7; st.position.y = 3.4; g.add(st);
      const lm = new THREE.MeshBasicMaterial({ color: '#e8e4d6' }), hm = new THREE.MeshStandardMaterial({ color: '#23262b', roughness: 0.8 }), V = THREE.Vector3;
      const seg = (p, q, r, mat) => { const d = q.clone().sub(p), l = d.length(), m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, l, 5), mat); m.position.copy(p).addScaledVector(d, 0.5); m.quaternion.setFromUnitVectors(new V(0, 1, 0), d.normalize()); return m; };
      for (let k = 0; k < 8; k++) { const a = k / 8 * Math.PI * 2 + 0.39, rim = new V(Math.cos(a) * 2.7, 3.2, Math.sin(a) * 2.7), sh = new V(Math.cos(a) > 0 ? 0.24 : -0.24, 1.62, 0); g.add(seg(rim, sh, 0.018, lm)); }   // eight suspension lines down to the two risers on the shoulders
      for (const sx of [-1, 1]) { g.add(seg(new V(sx * 0.24, 1.62, 0), new V(sx * 0.2, 1.05, 0.05), 0.035, hm)); const sb = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.55, 0.3), hm); sb.position.set(sx * 0.21, 1.4, 0); sb.rotation.z = sx * 0.06; g.add(sb); const lg = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.06, 0.3), hm); lg.position.set(sx * 0.16, 0.62, 0.02); g.add(lg); }
      const belt = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.32), hm); belt.position.set(0, 0.98, 0); g.add(belt); const chest = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.05, 0.31), hm); chest.position.set(0, 1.46, 0); g.add(chest);
      const pack = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.55, 0.22), new THREE.MeshStandardMaterial({ color: '#3f5d34', roughness: 0.9 })); pack.position.set(0, 1.25, -0.28); g.add(pack);   // the empty pack on the back
      this.chute = g; this.group.add(g); }
    const d = this.drop; this.chute.visible = on; if (!on) return; d.ch = Math.min(1, d.ch + dt * 2.5); this.chute.scale.setScalar(0.25 + 0.75 * d.ch); this.chute.position.set(b.x, b.y, b.z); this.chute.rotation.set(0, b.yaw, Math.sin(this.t * 1.3) * 0.04);
  }
  endDrop(landed) { this.hasChute = false; if (this.chute) this.chute.visible = false; if (this.plane && !landed) this.plane.visible = false; this.dropping = false; this.dropPose = 0; const g = this.R.me && this.R.me.model && this.R.me.model.group; if (g) g.visible = true; this.drop = null; if (landed) { this.R.camInit = false; } }
  // ---------------------------------------------------------------- the world (bots, loot)
  syncLoot() {
    const sim = this.sim; if (!sim) return;
    for (const it of sim.loot) { if (!it.alive || this.loot.has(it.id)) continue; const g = new THREE.Group(), col = LOOT_COL[it.k];
      let mdl; if (it.k === 'ammo') { mdl = new THREE.Group(); mdl.add(new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.3, 0.34), new THREE.MeshStandardMaterial({ color: '#3d5a2a', roughness: 0.7 }))); const s = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.08, 0.36), new THREE.MeshStandardMaterial({ color: '#ffd23f' })); s.position.y = 0.04; mdl.add(s); }
      else if (it.k === 'med') { mdl = new THREE.Group(); mdl.add(new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.38, 0.38), new THREE.MeshStandardMaterial({ color: '#f4f4f4' }))); const rm = new THREE.MeshStandardMaterial({ color: '#e0242b' }); const a = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.4, 0.06), rm), c = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 0.4), rm); c.rotation.x = 0; mdl.add(a, c); a.scale.set(1, 1, 1.4); }
      else { mdl = makeWeaponModel(it.k); mdl.scale.setScalar(it.k === 'grenade' ? 2.2 : it.k === 'bat' ? 1.5 : it.k === 'pistol' || it.k === 'revolver' ? 2.4 : 1.5); if (it.k === 'bat') mdl.rotation.z = Math.PI / 2; else mdl.rotation.y = Math.PI / 2; }
      const pivot = new THREE.Group(); pivot.add(mdl); g.add(pivot); g.userData.pivot = pivot;
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.55, 0.75, 24), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.8, side: THREE.DoubleSide, depthWrite: false })); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.06; g.add(ring);
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 5, 6, 1, true), new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.28, depthWrite: false })); beam.position.y = 2.6; g.add(beam);
      g.position.set(CMB.x + it.x, cmbH(it.x, it.z), CMB.z + it.z); this.group.add(g); this.loot.set(it.id, { g, it, ph: Math.random() * 6 }); }
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
    const P = { x: b.x - CMB.x, z: b.z - CMB.z, hp: this.hp, alive: this.hp > 0 && this.deadT <= 0 && !this.dropping };
    const run = M && M.phase === 'run' && !this.over;
    if (!this.dropping && P.alive && !R.drive) {   // the towers: take the parachute from the roof, jump off and it opens by itself
      for (const t of layout().towers) if (!this.hasChute && Math.hypot(P.x - t.x, P.z - t.z) < 3.4 && Math.abs(b.y - t.py) < 2.5) { this.hasChute = true; R.toast && R.toast('PARACHUTE PACKED - jump off the tower!', 3.5); A.sfx.pickup && A.sfx.pickup(); }
      if (this.hasChute && !b.grounded && b.vy < -7 && b.y - cmbH(P.x, P.z) > 5) { this.drop = { ph: 'chute', t: 0, hd: [0, 1], a: 0, sx: b.x, sz: b.z, L: 0, v: 0, alt: 0, vx: b.vx || 0, vz: b.vz || 0, hint: 0, ch: 0 }; this.dropping = true; this.dropPose = 2; R.toast && R.toast('PARACHUTE OPEN', 2); }
    }
    if (run) {
      this.time -= dt;
      // the ammo / health / weapons on the ground
      if (P.alive) { const it = sim.take(P.x, P.z); if (it) this.pickup(it); }
      sim.tick(dt, P);
      for (const e of sim.drain()) this.event(e, b);
      if (this.deadT > 0) { this.deadT -= dt; if (this.deadT <= 0) { this.hp = MY_DMG; this.respawn(); if (R.wallet) { R.wallet.cb = { owned: {}, mag: {}, ammo: {}, nades: 0 }; R.weapon = null; R.aiming = false; R.syncAct && R.syncAct(); R.updateAmmoHud && R.updateAmmoHud(); } if (this.ov) this.ov.style.display = 'none'; } }
      if (this.time <= 0) this.finish();
    }
    this.syncLoot(); if (this.map) this.map.update(dt, R.camera.position);
    for (const [id, l] of this.loot) {   // spin and bob the loot; remove what was taken
      if (!l.it.alive) { this.group.remove(l.g); this.loot.delete(id); continue; }
      l.g.userData.pivot.rotation.y += dt * 1.8; l.g.userData.pivot.position.y = 1.0 + Math.sin(this.t * 2.2 + l.ph) * 0.12;
    }
    const g0 = (x, z) => cmbH(x, z);
    for (const s of sim.bots) {
      const a = this.bot(s); a.g.visible = true;
      if (s.alive) {
        a.g.rotation.set(0, s.yaw, 0); a.g.position.set(CMB.x + s.x, g0(s.x, s.z), CMB.z + s.z);
        a.m.update(dt, { seated: false, speed: s.speed, grounded: true, weapon: s.weapon, aiming: s.seen, crouch: false, vy: 0, stun: 0 });
      } else { const dk = ['dieF', 'dieB', 'dieR', 'dieL', 'dieF', 'dieB'][(s.id | 0) % 6]; a.g.rotation.set(0, s.yaw, 0); a.g.position.set(CMB.x + s.x, g0(s.x, s.z), CMB.z + s.z); a.m.update(dt, { seated: false, speed: 0, grounded: true, zpose: dk, zp: Math.min(1, s.dieT / 2.4), weapon: s.weapon }); a.g.visible = s.dieT < 6; }   // a real death animation (front / back / left / right) that ends on the ground
    }
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
  pickup(it) {
    const R = this.R, W = R.wallet, cb = W && W.cb; if (!cb) return; const k = it.k, A_ = (m) => { R.toast && R.toast(m); A.sfx.pickup && A.sfx.pickup(); };
    const gun = (w) => { const S = WEAPONS[w]; if (!cb.owned[w]) { cb.owned[w] = true; cb.mag[w] = S.mag; cb.ammo[w] = S.ammoPack; if (!R.weapon || R.weapon === 'bat') R.equip(w); A_('PICKED UP ' + LOOT_NAME[w]); } else { cb.ammo[w] = (cb.ammo[w] || 0) + S.ammoPack; A_(LOOT_NAME[w] + ' - EXTRA AMMO'); } };
    if (WEAPONS[k] && !WEAPONS[k].melee && !WEAPONS[k].grenade) gun(k);
    else if (k === 'bat') { if (!cb.owned.bat) { cb.owned.bat = true; if (!R.weapon) R.equip('bat'); A_('PICKED UP BASEBALL BAT'); } else A_('YOU ALREADY HAVE A BAT'); }
    else if (k === 'grenade') { cb.nades = (cb.nades | 0) + 1; A_('GRENADE  x' + cb.nades); }
    else if (k === 'ammo') { let n = 0; for (const w of Object.keys(cb.owned)) if (WEAPONS[w] && WEAPONS[w].mag && cb.owned[w]) { cb.ammo[w] = (cb.ammo[w] || 0) + WEAPONS[w].ammoPack; n++; } A_(n ? 'AMMO FOR ALL YOUR GUNS' : 'AMMO - FIND A GUN FIRST'); if (!n) { /* put it back for later */ } }
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
