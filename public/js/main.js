// Parkour Haris - main: renderer, menus, lobby, race session, HUD, input, networking glue.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { LEVEL_META, CHARACTERS, MAX_PLAYERS } from './levelmeta.js';
import { buildLevel } from './levels.js';
import { newBody, stepBody, knock, respawn } from './physics.js';
import { P } from './world.js';
import { Character, makeNameTag } from './characters.js';
import { VIS, ensureFont, harisTexture, arrowTexture, makeSky, makeWater, buildScenery, Particles, Ambient } from './scenery.js';
import * as A from './audio.js';
import { Net } from './net.js';
import { makePoolWater, makeCaustics } from './poolwater.js';
import { CAR_SPECS, newCar, stepCar, buildCarMesh, animateCar } from './car.js';

const $ = (id) => document.getElementById(id);
const IS_TOUCH = (typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches) || ((typeof navigator !== 'undefined' && navigator.maxTouchPoints) || 0) > 0;
const touch = { x: 0, y: 0, jump: false };
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const lerp = (a, b, t) => a + (b - a) * t;
const lerpAngle = (a, b, t) => { let d = (b - a) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return a + d * t; };
const fmtT = (s) => { const m = Math.floor(s / 60), r = s - m * 60; return `${m}:${r < 10 ? '0' : ''}${r.toFixed(2)}`; };
const ord = (n) => (n === 1 ? '1st' : n === 2 ? '2nd' : n === 3 ? '3rd' : n + 'th');
const MEDAL = ['\u{1F947}', '\u{1F948}', '\u{1F949}'];

// ------------------------------------------------------------------ renderer
const canvas = $('c');
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
} catch (e) {
  document.querySelector('#loader p').textContent = 'WebGL is not available in this browser. Please use a recent Chrome / Edge / Firefox.';
  throw e;
}
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const MAXDPR = Math.min(window.devicePixelRatio || 1, IS_TOUCH ? 1.5 : 2);
const Q = { dpr: IS_TOUCH ? Math.min(MAXDPR, 1.0) : Math.min(MAXDPR, 1.5), t: 0, frames: 0, good: 0, shadows: true, warm: 3 };
function resize() {
  if (!stage) return;
  renderer.setPixelRatio(Q.dpr);
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  stage.camera.aspect = window.innerWidth / window.innerHeight; stage.camera.updateProjectionMatrix();
  if (race) { race.camera.aspect = window.innerWidth / window.innerHeight; race.camera.updateProjectionMatrix(); race.particles.setScale(renderer.domElement.height); }
  stage.particles.setScale(renderer.domElement.height);
}
function adaptQuality(dt) { // keeps it lag-free on weak laptops: lowers resolution first, then shadows
  if (Q.low) return;
  if (Q.warm > 0) { Q.warm -= dt; return; }
  Q.t += dt; Q.frames++;
  if (Q.t < 1.2) return;
  const fps = Q.frames / Q.t; Q.t = 0; Q.frames = 0;
  if (fps < 40) {
    Q.good = 0;
    if (Q.dpr > 0.7) { Q.dpr = Math.max(0.7, Q.dpr - 0.2); resize(); }
    else if (Q.shadows && fps < 30) { Q.shadows = false; if (race) race.setShadows(false); }
  } else if (fps > 58) {
    if (++Q.good >= 3 && Q.dpr < Math.min(MAXDPR, 1.75)) { Q.dpr = Math.min(Math.min(MAXDPR, 1.75), Q.dpr + 0.1); Q.good = 0; resize(); }
  } else Q.good = 0;
}
try { const sv = localStorage.getItem('ph_low'); Q.low = sv === '1'; if (sv === null && IS_TOUCH && (((navigator.hardwareConcurrency || 4) <= 2) || ((navigator.deviceMemory || 4) <= 2))) Q.low = true; } catch { Q.low = false; } // old/weak phones (e.g. iPhone 7) start on LOW automatically; each player can switch it in the menu
if (Q.low) { Q.dpr = 0.75; Q.shadows = false; }
function applyGfx() {
  if (Q.low) { Q.dpr = 0.75; Q.shadows = false; } else { Q.dpr = IS_TOUCH ? Math.min(MAXDPR, 1.0) : Math.min(MAXDPR, 1.5); Q.shadows = true; Q.warm = 3; }
  if (race) race.setShadows(Q.shadows);
  resize();
}
const pmrem = new THREE.PMREMGenerator(renderer);
const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

// ------------------------------------------------------------------ app state
const app = { screen: 'title', mode: 'single', name: localStorage.getItem('ph_name') || '', char: +(localStorage.getItem('ph_char') || 0), level: 0, net: null, room: null, myId: null, pendingJoin: null, muted: false };
let race = null, stage = null, thumbs = [];
const best = (l) => +(localStorage.getItem('ph_best_' + l) || 0);

// ------------------------------------------------------------------ menu stage (3D scene behind menus)
class Stage {
  constructor() {
    const v = VIS.candy;
    this.scene = new THREE.Scene(); this.scene.fog = new THREE.Fog(v.fog, 70, 420);
    this.scene.environment = envTex; this.scene.environmentIntensity = 0.7;
    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 1500);
    this.sky = makeSky(v); this.scene.add(this.sky);
    this.water = makeWater(v, -3); this.scene.add(this.water);
    this.scene.add(new THREE.HemisphereLight(v.hemiSky, v.hemiGround, 1.0));
    const sun = new THREE.DirectionalLight(v.sun, 2.4); sun.position.set(-10, 18, 14); sun.castShadow = true; sun.shadow.mapSize.set(1024, 1024);
    const sc = sun.shadow.camera; sc.left = -12; sc.right = 12; sc.top = 12; sc.bottom = -12; sc.near = 1; sc.far = 60; sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.03;
    this.scene.add(sun); this.sun = sun;
    // podium
    const mat = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.35 });
    const floor = new THREE.Mesh(new THREE.CylinderGeometry(15, 14, 2, 48), mat('#ff9ccf')); floor.position.y = -1; floor.receiveShadow = true; this.scene.add(floor);
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(13, 13, 0.1, 48), mat('#fff3fb')); ring.position.y = 0.02; ring.receiveShadow = true; this.scene.add(ring);
    this.tops = [0.8, 1.25, 1.25, 0.8];
    [[-4.5, 0.8, '#7be8a0'], [-1.5, 1.25, '#5fc2ff'], [1.5, 1.25, '#ffd23f'], [4.5, 0.8, '#ff9ccf']].forEach(([x, h, c]) => {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.25, h, 32), mat(c)); p.position.set(x, h / 2, -0.5); p.castShadow = p.receiveShadow = true; this.scene.add(p);
    });
    this.slotPos = [[-4.5, 0.8, -0.5], [-1.5, 1.25, -0.5], [1.5, 1.25, -0.5], [4.5, 0.8, -0.5]];
    // HARIS floor decal + sky banner
    const tex = harisTexture('HARIS'), texS = harisTexture('HARIS', 'MADE THIS GAME');
    const dm = new THREE.Mesh(new THREE.PlaneGeometry(11, 4.3), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -2 }));
    dm.rotation.x = -Math.PI / 2; dm.position.set(0, 0.1, 4.4); this.scene.add(dm);
    const bn = new THREE.Mesh(new THREE.PlaneGeometry(26, 13), new THREE.MeshBasicMaterial({ map: texS, transparent: true, depthWrite: false, toneMapped: false, fog: false }));
    bn.position.set(0, 9.5, -24); this.scene.add(bn); this.banner = bn;
    this.chars = [0, 1, 2, 3].map((id) => { const c = new Character(id); this.scene.add(c.group); return { c, tag: null, name: null, show: true, scale: 1, hop: 0 }; });
    this.ambient = new Ambient('candy', 160); this.scene.add(this.ambient.points);
    this.particles = new Particles(260); this.scene.add(this.particles.points);
    this.mode = 'title'; this.sel = 0; this.t = 0; this.lobby = [];
  }
  setName(i, name) {
    const o = this.chars[i];
    if (o.name === name) return;
    if (o.tag) { o.c.group.remove(o.tag); o.tag.material.map.dispose(); o.tag.material.dispose(); o.tag = null; }
    o.name = name;
    if (name) { o.tag = makeNameTag(name, CHARACTERS[i].color); o.tag.position.set(0, o.c.height + 0.55, 0); o.c.group.add(o.tag); }
  }
  setTitle(sel = -1) { this.mode = 'title'; this.sel = sel; this.lobby = []; this.chars.forEach((o, i) => { o.show = true; this.setName(i, null); }); }
  setLobby(players) { this.mode = 'lobby'; this.lobby = players; this.chars.forEach((o, i) => { const idx = players.findIndex((p) => p.char === i); o.show = idx >= 0; o.slot = idx; this.setName(i, idx >= 0 ? players[idx].name : null); }); }
  burst(i) { const p = this.slotPos[this.slotOf(i)]; this.particles.emit(p[0], p[1] + 1.4, p[2] + 0.5, 40, { rainbow: true, speed: 4, up: 6, life: 1.0, size: 0.35, gravity: 7 }); }
  slotOf(i) { if (this.mode === 'lobby') return [1, 2, 0, 3][Math.max(0, this.chars[i].slot) % 4]; return i; }
  update(dt) {
    this.t += dt;
    const cam = this.camera;
    cam.position.set(Math.sin(this.t * 0.25) * 1.8, 2.9 + Math.sin(this.t * 0.4) * 0.15, 10.5); cam.lookAt(0, 1.9, 0);
    this.sky.position.copy(cam.position);
    this.water.material.uniforms.time.value = this.t;
    this.chars.forEach((o, i) => {
      o.c.group.visible = o.show;
      if (!o.show) return;
      const p = this.slotPos[this.slotOf(i)];
      const selected = this.mode === 'title' ? ((Math.floor(this.t / 3) % 4) === i) : (this.mode !== 'lobby' && this.sel === i);
      o.scale = lerp(o.scale, selected ? 1.18 : 1, Math.min(1, dt * 8));
      o.c.group.scale.setScalar(o.scale);
      o.hop = selected ? Math.abs(Math.sin(this.t * 5)) * 0.25 : lerp(o.hop, 0, Math.min(1, dt * 8));
      o.c.group.position.set(p[0], p[1] + o.hop, p[2]);
      o.c.group.rotation.y = lerpAngle(o.c.group.rotation.y, this.mode === 'lobby' ? Math.sin(this.t * 0.7 + i) * 0.3 : Math.sin(this.t * 0.6 + i * 2) * 0.35, Math.min(1, dt * 4));
      o.c.update(dt, { speed: 0, grounded: true, vy: 0, stun: 0, dive: 0, celebrate: selected || this.mode === 'lobby' && (Math.floor(this.t * 0.5 + i) % 2 === 0) });
      if (o.tag) { o.tag.scale.set(2.4, 0.6, 1); }
    });
    this.ambient.update(this.t, cam.position);
    this.particles.update(dt);
  }
}

// ------------------------------------------------------------------ remote player
class Remote {
  constructor(info, scene) {
    this.info = info; this.id = info.id; this.name = info.name;
    this.model = new Character(info.char); scene.add(this.model.group);
    this.tag = makeNameTag(info.name, CHARACTERS[info.char].color); this.tag.position.set(0, this.model.height + 0.7, 0); this.model.group.add(this.tag);
    this.snaps = []; this.x = 0; this.y = -50; this.z = 0; this.yaw = Math.PI; this.speed = 0; this.flags = 0; this.vy = 0; this.vx = 0; this.vz = 0; this.sw = 0; this.ds = []; this.dMin = 0; this.jit = 0; this.rs = 0; this.has = false; this.finished = false; this.lastLanded = false;
  }
  push(m) {
    if (m.rs !== this.rs) { this.snaps.length = 0; this.rs = m.rs; }
    const last = this.snaps[this.snaps.length - 1];
    if (last && m.ts <= last.ts) return;
    // Clock-proof timing: learn (arrival time - sender time) from the fastest recent packets, so a phone whose
    // clock sync is a bit off still plays the other player's movement smoothly instead of freezing.
    const now = Date.now(), d = now - m.ts;
    this.ds.push([now, d]); while (this.ds.length > 1 && now - this.ds[0][0] > 4000) this.ds.shift();
    let mn = Infinity; for (const x of this.ds) if (x[1] < mn) mn = x[1];
    this.dMin = mn; this.jit = this.jit * 0.92 + Math.abs(d - mn) * 0.08;
    this.snaps.push(m); if (this.snaps.length > 40) this.snaps.shift();
  }
  renderTime() { return Date.now() - this.dMin - clamp(70 + this.jit * 2.2, 70, 260); } // in the sender's clock
  update(renderTs, dt) {
    const s = this.snaps;
    if (!s.length) return;
    while (s.length > 2 && s[1].ts <= renderTs) s.shift();
    let a = s[0], b = s[1] || s[0], k = 0;
    if (s.length > 1) { const span = Math.max(1, b.ts - a.ts); k = clamp((renderTs - a.ts) / span, 0, 1 + 220 / span); } // may extrapolate up to 220 ms if packets are late
    const tx = lerp(a.x, b.x, k), ty = lerp(a.y, b.y, k), tz = lerp(a.z, b.z, k);
    if (!this.has) { this.x = tx; this.y = ty; this.z = tz; this.has = true; }
    else {
      const f = 1 - Math.exp(-28 * dt), px = this.x, pz = this.z;
      this.x += (tx - this.x) * f; this.y += (ty - this.y) * f; this.z += (tz - this.z) * f;
      if (dt > 0) { const k2 = 0.25; this.vx += ((this.x - px) / dt - this.vx) * k2; this.vz += ((this.z - pz) / dt - this.vz) * k2; }
    }
    this.yaw = lerpAngle(this.yaw, b.r, 1 - Math.exp(-16 * dt));
    this.speed = lerp(a.sp, b.sp, clamp(k, 0, 1)); this.flags = b.a;
    this.vy = s.length > 1 ? (b.y - a.y) / Math.max(0.02, (b.ts - a.ts) / 1000) : 0;
    const g = this.model.group;
    g.position.set(this.x, this.y, this.z); g.rotation.y = this.yaw;
    const grounded = !!(this.flags & 1);
    const landed = grounded && !this.lastLanded; this.lastLanded = grounded;
    this.sw = (this.flags & 16) ? Math.min(1, (this.sw || 0.001) + dt / 0.42) : 0;
    this.model.update(dt, { speed: this.speed, grounded, vy: this.vy, stun: this.flags & 2 ? 1 : 0, dive: this.flags & 4 ? 1 : 0, celebrate: !!(this.flags & 8), swing: this.sw, shield: !!(this.flags & 32), leader: !!this.leader, mega: !!(this.flags & 128), landed });
  }
  dispose(scene) { scene.remove(this.model.group); this.tag.material.map.dispose(); this.tag.material.dispose(); this.model.dispose(); }
}

// ------------------------------------------------------------------ the race
const keys = new Set();
const press = { jump: false, dive: false };

class Race {
  constructor(levelIdx, players, localId, o) {
    this.level = levelIdx; this.meta = LEVEL_META[levelIdx]; this.multi = o.multi; this.localId = localId; this.players = players;
    this.t0 = o.t0; // multi: server ms ; single: performance.now() ms
    this.phase = 'countdown'; this.finished = false; this.over = false; this.finishTime = 0; this.finishedMap = new Map();
    this.camYaw = 0; this.camPitch = 0.34; this.camDist = 8.2; this.camPos = new THREE.Vector3(); this.camTarget = new THREE.Vector3(); this.camInit = false;
    this.sendT = 0; this.rs = 0; this.cpIdx = 0; this.cpCur = null; this.stepDist = 0; this.lastCount = 99; this.hudT = 0; this.hintT = 0; this.warnSec = -1;
    this.levelTime = -4; this.batCd = 0; this.swingT = 0; this.batPending = false; this.swingMega = false; this.fx = { turbo: 0, jump: 0, shield: 0, mega: 0 }; this.fxSig = '';

    const v = VIS[this.meta.key];
    const scene = this.scene = new THREE.Scene();
    scene.background = new THREE.Color(v.fog); scene.fog = new THREE.Fog(v.fog, v.fogNear, v.fogFar);
    scene.environment = envTex; scene.environmentIntensity = v.env;
    this.camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 1800);

    const { world, info } = buildLevel(levelIdx, false, arrowTexture());
    this.world = world; this.info = info; scene.add(world.group);
    world.onEvent = null;
    this.sky = makeSky(v); scene.add(this.sky);
    this.water = makeWater(v, world.waterY); scene.add(this.water);
    this.scenery = buildScenery(scene, this.meta.key, info, world);
    // swimming pools (realistic water + caustics) and the speedway cars
    this.poolMeshes = [];
    for (const pl of world.pools) {
      const wm = makePoolWater(pl), u = wm.material.uniforms;
      u.fogC.value.set(v.fog); u.fogN.value = v.fogNear; u.fogF.value = v.fogFar; u.skyTop.value.set(v.top); u.skyHor.value.set(v.horizon);
      const cm = makeCaustics(pl); scene.add(wm, cm); this.poolMeshes.push({ wm, cm, pl });
    }
    this.cars = []; this.drive = null; this.lookT = 0; this.nearCar = null; this.hornCd = 0; this.skidT = 0;
    if (info.cars) {
      for (const cd of info.cars) { const mesh = buildCarMesh(cd.id); mesh.rotation.order = 'YXZ'; mesh.position.set(cd.x, cd.y || 0, cd.z); mesh.rotation.y = cd.yaw; scene.add(mesh); const st0 = newCar(cd.id, cd.x, cd.z, cd.yaw); st0.y = cd.y || 0; this.cars.push({ st: st0, mesh }); }
      this.skyG = 0; try { this.racerOk = localStorage.getItem('ph_racer') === '1'; } catch { this.racerOk = false; }
      if (o.multi && app.pendingCars) { this.onCars(app.pendingCars); app.pendingCars = null; }
    }

    scene.add(new THREE.HemisphereLight(v.hemiSky, v.hemiGround, v.hemiI));
    const sun = this.sun = new THREE.DirectionalLight(v.sun, v.sunI);
    this.sunDir = new THREE.Vector3(...v.sunPos).normalize().multiplyScalar(90);
    sun.castShadow = Q.shadows; sun.shadow.mapSize.set(IS_TOUCH ? 1024 : 2048, IS_TOUCH ? 1024 : 2048);
    const sc = sun.shadow.camera; sc.left = -40; sc.right = 40; sc.top = 40; sc.bottom = -40; sc.near = 5; sc.far = 220; sun.shadow.bias = -0.0003; sun.shadow.normalBias = 0.04;
    scene.add(sun, sun.target);

    this.particles = new Particles(600); scene.add(this.particles.points); this.particles.setScale(renderer.domElement.height);
    this.ambient = new Ambient(this.meta.key, 320); scene.add(this.ambient.points);

    // players
    this.remotes = new Map();
    const idx = players.findIndex((p) => p.id === localId);
    this.slot = Math.max(0, idx);
    const me = players[this.slot] || { name: 'Player', char: 0 };
    this.me = { body: newBody(), model: new Character(me.char), name: me.name, char: me.char };
    scene.add(this.me.model.group); this.me.model.group.rotation.order = 'YXZ';
    this.me.tag = makeNameTag(me.name, CHARACTERS[me.char].color); this.me.tag.position.set(0, this.me.model.height + 0.7, 0); this.me.model.group.add(this.me.tag);
    players.forEach((p, i) => { if (p.id !== localId) this.remotes.set(p.id, new Remote(p, scene)); });
    this.spawn(this.slot);
    this.buildProgress(); this.buildBoxes();
    document.body.classList.add('in-race');
    $('hud-level').textContent = this.meta.name;
    $('hud').classList.remove('hidden');
    $('hud-hint').classList.remove('fade'); this.hintT = 8;
    this.setShadows(Q.shadows);
    A.startMusic(levelIdx);
    A.duckMusic(false);
    this.pos = this.me.body;
  }
  setShadows(on) { this.sun.castShadow = on; }

  spawnPoint(slot) { return [(slot - 1.5) * 3.6, 0, this.info.spawn.z]; }
  spawn(slot) {
    const [x, y, z] = this.spawnPoint(slot);
    respawn(this.me.body, x, y + 0.02, z, Math.PI);
    this.cpCur = null; this.cpIdx = 0;
  }
  buildProgress() {
    const tr = document.querySelector('#hud-progress .track');
    tr.querySelectorAll('.dot').forEach((d) => d.remove());
    this.dots = new Map();
    const mk = (p, me) => {
      const d = document.createElement('div'); d.className = 'dot' + (me ? ' me' : ''); d.style.background = CHARACTERS[p.char].color;
      d.innerHTML = `<em>${p.name.replace(/[<>&]/g, '')}</em>`; tr.appendChild(d); this.dots.set(p.id, d);
    };
    this.players.forEach((p) => mk(p, p.id === this.localId));
  }

  now() { return this.multi ? app.net.now() : performance.now(); }
  look(dx, dy) {
    this.camYaw -= dx * 0.0024; this.camPitch = clamp(this.camPitch + dy * 0.0021, -0.15, 1.2); this.lookT = 1.6;
  }

  update(dt) {
    const b = this.me.body, w = this.world;
    this.levelTime = (this.now() - this.t0) / 1000;
    const lt = this.levelTime;
    w.update(lt, dt);
    w.carry(b);
    if (b.yawOff) { b.yaw += b.yawOff; b.yawOff = 0; }

    // ---- countdown display
    if (lt < 0) {
      const n = Math.ceil(-lt);
      if (n !== this.lastCount && n <= 3) { this.lastCount = n; this.count(String(n)); A.sfx.tick(); }
    } else if (this.phase === 'countdown') {
      this.phase = 'race'; this.count('GO!'); A.sfx.go(); this.lastCount = 0;
      if (this.multi) setTimeout(() => { if (race === this && !this.over) this.toast(IS_TOUCH ? 'Tap BAT to bonk rivals!' : 'Press B or click to swing the BAT!'); }, 1400);
      if (this.cars.length) setTimeout(() => { if (race === this && !this.over && !this.drive) this.toast('\uD83D\uDE97 Follow the CAR STATION signs to drive!'); }, this.multi ? 4200 : 1600);
    }

    // ---- input -> physics
    const canMove = lt >= 0 && !this.over;
    let fw = 0, rt = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) fw++; if (keys.has('KeyS') || keys.has('ArrowDown')) fw--;
    if (keys.has('KeyD') || keys.has('ArrowRight')) rt++; if (keys.has('KeyA') || keys.has('ArrowLeft')) rt--;
    if (keys.has('KeyQ')) this.camYaw += 1.9 * dt; if (keys.has('KeyE')) this.camYaw -= 1.9 * dt;
    if (touch.x || touch.y) { rt += touch.x; fw += touch.y; }
    const sy = Math.sin(this.camYaw), cy = Math.cos(this.camYaw);
    let mx = -sy * fw + cy * rt, mz = -cy * fw - sy * rt;
    const ml = Math.hypot(mx, mz); if (ml > 1) { mx /= ml; mz /= ml; }
    const inp = { mx: canMove ? mx : 0, mz: canMove ? mz : 0, jumpPressed: canMove && press.jump, jumpHeld: canMove && (keys.has('Space') || touch.jump), divePressed: canMove && press.dive };
    press.jump = false; press.dive = false;

    const steps = Math.max(1, Math.ceil(dt / (1 / 90))), sdt = dt / steps;
    let landed = false;
    if (this.drive) { this.updateDrive(dt, canMove); b.events.length = 0; }
    else {
    for (let i = 0; i < steps; i++) {
      stepBody(w, b, sdt, inp);
      inp.jumpPressed = false; inp.divePressed = false;
      if (b.events.length) { landed = this.events(b) || landed; b.events.length = 0; }
    }
    }
    // hazards (once per frame)
    if (canMove && !this.drive) {
      const h = w.checkHazards(b, lt);
      if (h && knock(b, h.nx, h.nz, h.pow)) { A.sfx.hit(); this.particles.emit(b.x, b.y + 0.9, b.z, 26, { color: '#ffffff', speed: 5, up: 3, life: 0.5, size: 0.3 }); this.particles.emit(b.x, b.y + 0.9, b.z, 14, { color: '#ffd23f', speed: 7, up: 4, life: 0.4, size: 0.25 }); }
    }
    if (!this.drive) this.updateBat(dt, b);
    this.updatePowerups(dt, b);
    if (!this.drive) { this.softCollide(b); this.softCars(b, canMove); }
    this.checkpoints(b);
    if (!this.finished && lt >= 0 && b.z < this.info.finishZ && b.y > this.info.finishY - 3 && Math.abs(b.x) < 16) this.onLocalFinish();

    // footsteps
    if (b.grounded && !b.stun && !this.drive && !(b.swim > 0.3)) {
      this.stepDist += Math.hypot(b.vx, b.vz) * dt;
      if (this.stepDist > 2.4) { this.stepDist = 0; if (Math.hypot(b.vx, b.vz) > 3) { A.sfx.step(); this.particles.emit(b.x, b.y + 0.05, b.z, 2, { color: '#ffffff', speed: 0.8, up: 0.8, life: 0.35, size: 0.22, gravity: 1 }); } }
    }

    // ---- local model
    const m = this.me.model, g = m.group;
    const swimK = b.swim > 0.3 ? clamp((b.swim - 0.3) / 0.4, 0, 1) : 0;
    if (this.drive) this.seatModel(g, this.drive);
    else { g.position.set(b.x, b.y, b.z); g.rotation.y = b.yaw; g.rotation.x = swimK * 0.55 * clamp(Math.hypot(b.vx, b.vz) / 3, 0.25, 1); g.scale.setScalar(1); }
    m.update(dt, { speed: this.drive ? 0 : Math.hypot(b.vx, b.vz), grounded: this.drive || swimK > 0 ? true : b.grounded, vy: this.drive ? 0 : b.vy, stun: this.drive ? 0 : b.stun, dive: this.drive ? 0 : b.dive, celebrate: this.finished || (this.over && this.winnerSelf), swing: this.swingT, shield: b.shield > 0, leader: this.leaderId === this.localId, mega: this.swingMega && this.swingT > 0, landed });
    this.tagScale(this.me.tag, g.position, 0.85);

    // ---- remotes
    if (this.multi) {
      this.leaderId = this.findLeader();
      for (const r of this.remotes.values()) {
        r.leader = r.id === this.leaderId; r.update(r.snaps.length ? r.renderTime() : 0, dt); this.tagScale(r.tag, r.model.group.position, 1);
        if ((r.flags & 64) && Math.random() < 0.6) this.particles.emit(r.x, r.y + 0.3, r.z, 1, { color: '#5fc2ff', speed: 1, up: 0.5, life: 0.35, size: 0.35 });
      }
      this.sendT += dt;
      if (this.sendT >= 0.033) {
        this.sendT = 0;
        const flags = (b.grounded ? 1 : 0) | (b.stun > 0 ? 2 : 0) | (b.dive > 0 ? 4 : 0) | (this.finished ? 8 : 0) | (this.swingT > 0 ? 16 : 0) | (b.shield > 0 ? 32 : 0) | (this.fx.turbo > 0 ? 64 : 0) | (this.swingMega && this.swingT > 0 ? 128 : 0) | (this.drive ? 256 | (this.drive.st.id << 9) : 0) | (b.swim > 0.4 && !this.drive ? 4096 : 0);
        app.net.send({ t: 's', x: +b.x.toFixed(2), y: +b.y.toFixed(2), z: +b.z.toFixed(2), r: +b.yaw.toFixed(2), a: flags, sp: +Math.min(99, Math.hypot(b.vx, b.vz)).toFixed(1), ts: Math.round(app.net.now()), rs: this.rs });
      }
    }

    this.updateCars(dt, canMove);


    this.updateCamera(dt);
    this.updateLights();
    this.water.material.uniforms.time.value = performance.now() / 1000;
    this.water.position.x = this.camera.position.x; this.water.position.z = this.camera.position.z;
    this.sky.position.copy(this.camera.position);
    this.scenery.update(lt, this.camera.position);
    this.ambient.update(performance.now() / 1000, this.camera.position);
    this.particles.update(dt);
    this.hud(dt);
  }

  events(b) {
    let landed = false;
    for (const e of b.events) {
      if (e === 'jump') { A.sfx.jump(); this.particles.emit(b.x, b.y + 0.05, b.z, 5, { color: '#ffffff', speed: 1.5, up: 1, life: 0.35, size: 0.25, gravity: 2 }); }
      else if (e === 'land') { A.sfx.land(b.landSpeed); landed = true; this.particles.emit(b.x, b.y + 0.05, b.z, Math.min(14, 5 + b.landSpeed * 0.4), { color: '#ffffff', speed: 2.4, up: 1.4, life: 0.45, size: 0.3, gravity: 3 }); }
      else if (e === 'bounce') { A.sfx.bounce(); landed = true; this.particles.emit(b.x, b.y + 0.1, b.z, 18, { rainbow: true, speed: 3, up: 2, life: 0.6, size: 0.3 }); }
      else if (e === 'dive') A.sfx.dive();
      else if (e === 'splash') {
        A.sfx.splash();
        const pool = b.swim > 0 && b.waterSurf, v = VIS[this.meta.key]; const col = pool ? '#ffffff' : v.water === 'lava' ? '#ff9a2a' : v.water === 'grid' ? '#d11cff' : '#bfeaff';
        this.particles.emit(b.x, (pool ? b.waterSurf : this.world.waterY) + 0.2, b.z, pool ? 34 : 40, { color: col, speed: 4, up: pool ? 6 : 9, life: 0.9, size: 0.45, gravity: 16, spread: 0.6 });
      } else if (e === 'stroke') { A.sfx.jump(); this.particles.emit(b.x, b.waterSurf + 0.1, b.z, 10, { color: '#ffffff', speed: 2, up: 3, life: 0.6, size: 0.3, gravity: 10 }); } else if (e === 'fell') this.onFell();
    }
    return landed;
  }

  // ================= swimming pool fx + cars =================
  seatModel(g, car) {
    const st = car.st, seat = car.mesh.userData.seat;
    g.position.set(st.x + Math.sin(st.yaw) * seat.z, st.y + seat.y, st.z + Math.cos(st.yaw) * seat.z); g.rotation.y = st.yaw; g.rotation.x = 0; g.scale.setScalar(0.8);
  }
  nearestFreeCar(b) {
    if (b.stun > 0 || b.y > 1.5 || b.swim > 0.3) return null;
    let best = null, bd = 4.6;
    for (const c of this.cars) { if (c.st.driver !== -1 && c !== this.drive) continue; if (CAR_SPECS[c.st.id].racer && !this.racerOk) continue; if (Math.abs(b.y - c.st.y) > 3) continue; const d = Math.hypot(b.x - c.st.x, b.z - c.st.z); if (d < bd) { bd = d; best = c; } }
    return best;
  }
  toggleCar() {
    if (this.over || this.finished || this.levelTime < 0 || this.menuOpen || !this.cars.length) return;
    const b = this.me.body;
    if (this.drive) { // get out
      const c = this.drive, st = c.st;
      if (Math.abs(st.speed) > 5) { this.toast('Slow down to get out!'); return; }
      if (st.y > 1.2) { this.toast(this.racerOk ? 'Not up here - stop on the RACER GARAGE plaza to swap cars' : 'Finish the SKY SPEEDWAY to win a RACER!'); return; }
      const lx = Math.cos(st.yaw), lz = -Math.sin(st.yaw);
      respawn(b, st.x + lx * 2.4, 0.05, st.z + lz * 2.4, st.yaw); b.hitCd = 0.3;
      st.vx = st.vz = st.speed = 0; st.driver = -1; st.parked = true; this.drive = null;
      document.body.classList.remove('driving'); A.engineStop(); A.sfx.door();
      this.g_g(this.me.model.group);
      if (this.multi) app.net.send({ t: 'carpark', c: st.id, x: +st.x.toFixed(2), y: +st.y.toFixed(2), z: +st.z.toFixed(2), r: +st.yaw.toFixed(3) });
      this.camYaw = st.yaw + Math.PI; this.camInit = false;
    } else {
      const c = this.nearestFreeCar(b); if (!c) return;
      this.drive = c; c.st.driver = this.localId; c.st.parked = false;
      b.vx = b.vz = b.vy = 0; b.grounded = true; document.body.classList.add('driving'); document.body.classList.remove('near-car');
      A.engineStart(); A.sfx.door(); A.sfx.vroom(); this.camPitch = 0.3; this.camYaw = c.st.yaw + Math.PI;
      this.toast(CAR_SPECS[c.st.id].name.toUpperCase() + '!  ' + (IS_TOUCH ? 'use the joystick to drive, tap the door to get out' : 'W/S drive • A/D steer • C get out'));
    }
  }
  g_g(g) { g.scale.setScalar(1); g.rotation.x = 0; }
  // ---- SKY SPEEDWAY: gates in order -> RACERS unlocked; swap into a red racer on the garage plaza
  skyGates(st) {
    const sk = this.info.sky; if (!sk || st.y < sk.y - 4 || this.skyG >= sk.gates.length) return;
    const i = this.skyG, g = sk.gates[i], alongX = i === 1;
    if (Math.abs(st.x - g.x) < (alongX ? 4 : g.w) && Math.abs(st.z - g.z) < (alongX ? g.w : 4)) {
      this.skyG++; A.sfx.checkpoint();
      this.particles.emit(st.x, st.y + 1.5, st.z, 24, { color: i === sk.gates.length - 1 ? '#ff3b3b' : '#7cff3d', speed: 6, up: 5, life: 0.8, size: 0.4 });
      if (i === sk.gates.length - 1) {
        this.racerOk = true; try { localStorage.setItem('ph_racer', '1'); } catch { /* ignore */ }
        A.sfx.win(); this.toast('\uD83C\uDFC1 SKY SPEEDWAY CLEARED! RED RACERS UNLOCKED - stop on the RACER GARAGE plaza and press ' + (IS_TOUCH ? 'the red car button' : 'R'));
      } else this.toast('SKY GATE ' + (i + 1) + ' / ' + (sk.gates.length - 1) + '  \u2713');
    }
  }
  garageSpot(st) { const sk = this.info.sky; return !!sk && st.y > sk.y - 3 && Math.hypot(st.x - sk.garage.x, st.z - sk.garage.z) < sk.garage.r; }
  swapRacer() {
    if (!this.drive || this.over || this.menuOpen) return;
    const old = this.drive, st = old.st, sk = this.info.sky;
    if (CAR_SPECS[st.id].racer) { this.toast('You already drive a RACER!'); return; }
    if (!this.racerOk) { this.toast('Finish the SKY SPEEDWAY to unlock the RACERS!'); return; }
    if (!this.garageSpot(st)) { this.toast('Drive to the RACER GARAGE (end of the sky road) to swap'); return; }
    if (Math.abs(st.speed) > 5) { this.toast('Slow down first!'); return; }
    let best = null, bd = 22;
    for (const c of this.cars) { if (!CAR_SPECS[c.st.id].racer || (c.st.driver !== -1 && c !== old)) continue; const d = Math.hypot(st.x - c.st.x, st.z - c.st.z); if (d < bd) { bd = d; best = c; } }
    if (!best) { this.toast('All 4 racers are taken - wait for one!'); return; }
    st.vx = st.vz = st.speed = 0; st.driver = -1; st.parked = true;
    if (this.multi) app.net.send({ t: 'carpark', c: st.id, x: +st.x.toFixed(2), y: +st.y.toFixed(2), z: +st.z.toFixed(2), r: +st.yaw.toFixed(3) });
    this.drive = best; best.st.driver = this.localId; best.st.parked = false; best.st.vx = best.st.vz = best.st.speed = 0;
    A.sfx.door(); A.sfx.vroom(); this.shake = 0.3; this.camYaw = best.st.yaw + Math.PI;
    this.toast('\uD83C\uDFCE RACER!  Top speed 150 km/h \u2022 big horn on ' + (IS_TOUCH ? 'the horn button' : 'H'));
  }
  updateDrive(dt, canMove) {
    const c = this.drive, st = c.st, b = this.me.body;
    let gas = 0, steer = 0, hb = false;
    if (canMove) {
      if (keys.has('KeyW') || keys.has('ArrowUp')) gas++; if (keys.has('KeyS') || keys.has('ArrowDown')) gas--;
      if (keys.has('KeyD') || keys.has('ArrowRight')) steer++; if (keys.has('KeyA') || keys.has('ArrowLeft')) steer--;
      hb = keys.has('Space');
      if (touch.x || touch.y) { // phone: the same left-screen joystick as on foot -> push where you want to go (camera-relative)
        const sy = Math.sin(this.camYaw), cy = Math.cos(this.camYaw);
        let mx = -sy * touch.y + cy * touch.x, mz = -cy * touch.y - sy * touch.x; const m = Math.min(1, Math.hypot(mx, mz));
        if (m > 0.12) {
          const l = Math.hypot(mx, mz) || 1; mx /= l; mz /= l;
          const dot = mx * Math.sin(st.yaw) + mz * Math.cos(st.yaw), side = -mx * Math.cos(st.yaw) + mz * Math.sin(st.yaw);
          if (dot > -0.35) { gas += Math.min(1, m * 1.25) * (0.45 + 0.55 * Math.max(0, dot)); steer += dot < 0.2 ? Math.sign(side || 1) : Math.max(-1, Math.min(1, side * 2.4)); }
          else { gas -= Math.min(1, m * 1.25); steer += Math.max(-1, Math.min(1, side * 2)); }
        }
      }
    }
    const others = this.cars.filter((q) => q !== c).map((q) => q.st);
    let ev = ''; const inp = { gas: clamp(gas, -1, 1), steer: clamp(steer, -1, 1), hb };
    for (let i = 0; i < 2; i++) ev = stepCar(st, dt / 2, inp, this.info.track, others, Math.max(0, this.levelTime)) || ev;
    if (ev === 'bump') { A.sfx.land(18); this.particles.emit(st.x, 0.8, st.z, 12, { color: '#ffd23f', speed: 4, up: 3, life: 0.4, size: 0.25 }); this.shake = Math.max(this.shake || 0, 0.25); }
    if (ev === 'crash') { A.sfx.land(34); this.particles.emit(st.x, 0.9, st.z, 26, { color: '#ffb347', speed: 7, up: 5, life: 0.6, size: 0.35 }); this.shake = Math.max(this.shake || 0, Math.min(1, 0.4 + (st.crash || 0) * 0.04)); st.crash = 0; }
    b.x = st.x; b.y = st.y; b.z = st.z; b.vx = st.vx; b.vz = st.vz; b.vy = 0; b.grounded = true; b.ground = null; b.yaw = st.yaw; b.stun = 0;
    A.engineSet(Math.abs(st.speed) / CAR_SPECS[st.id].max, gas > 0);
    this.skyGates(st);
    this.hornCd -= dt; this.skidT -= dt;
    if (st.drift > 0.55 && Math.abs(st.speed) > 8) {
      if (this.skidT <= 0) { this.skidT = 0.25; A.sfx.skid(); }
      for (const sgn of [-1, 1]) this.particles.emit(st.x - Math.sin(st.yaw) * 1.5 + Math.cos(st.yaw) * sgn * 0.9, 0.25, st.z - Math.cos(st.yaw) * 1.5 - Math.sin(st.yaw) * sgn * 0.9, 1, { color: '#e8e8e8', speed: 1.2, up: 1.2, life: 0.5, size: 0.5, gravity: -0.5 });
    }
    if (st.boost > 0 && Math.random() < 0.8) this.particles.emit(st.x - Math.sin(st.yaw) * 2.2, 0.5, st.z - Math.cos(st.yaw) * 2.2, 1, { color: '#ffb347', speed: 2, up: 1, life: 0.35, size: 0.4 });
  }
  honk() { if (this.drive && this.hornCd <= 0) { const big = CAR_SPECS[this.drive.st.id].racer; this.hornCd = big ? 0.9 : 0.4; big ? A.sfx.honkBig() : A.sfx.honk(); if (big) this.shake = Math.max(this.shake || 0, 0.12); } }
  onCars(cars) { // parked-car positions from the server (for players who join late)
    for (const k of Object.keys(cars || {})) { const c = this.cars[+k], d = cars[k]; if (!c || !d || c === this.drive) continue; c.st.x = +d.x; c.st.z = +d.z; c.st.y = +d.y || 0; c.st.yaw = +d.r; c.mesh.position.set(c.st.x, c.st.y, c.st.z); c.mesh.rotation.y = c.st.yaw; }
  }
  // pedestrians vs cars: parked cars are solid, fast cars bonk you away
  softCars(b, canMove) {
    if (!canMove || this.finished) return;
    for (const c of this.cars) {
      if (c === this.drive) continue;
      const st = c.st, spec = CAR_SPECS[st.id], dx = b.x - st.x, dz = b.z - st.z;
      if (dx * dx + dz * dz > 40 || Math.abs(b.y - st.y) > 2.5) continue;
      const fx = Math.sin(st.yaw), fz = Math.cos(st.yaw), lz = dx * fx + dz * fz, lx = -dx * fz + dz * fx, hl = spec.hl + 0.45, hw = spec.hw + 0.45;
      if (Math.abs(lz) >= hl || Math.abs(lx) >= hw) continue;
      if (Math.abs(st.speed) > 6 && b.hitCd <= 0) {
        const sg = Math.sign(st.speed) || 1; let nx = fx * sg + (dx * 0.0), nz = fz * sg; nx += -fz * Math.sign(lx || 1) * 0.5; nz += fx * Math.sign(lx || 1) * 0.5; const l = Math.hypot(nx, nz) || 1;
        if (knock(b, nx / l, nz / l, 15)) { this.bonked('HIT BY A CAR!', '', b); continue; }
      }
      const pz = hl - Math.abs(lz), px = hw - Math.abs(lx);
      if (pz < px) { const k = Math.sign(lz || 1) * pz; b.x += fx * k; b.z += fz * k; } else { const k = Math.sign(lx || 1) * px; b.x += -fz * k; b.z += fx * k; }
    }
  }
  updateCars(dt, canMove) {
    this.lastDt = dt;
    const b = this.me.body, t = performance.now() / 1000;
    // who drives what (remote drivers stream their car pose through their normal snapshots)
    for (const c of this.cars) if (c !== this.drive) { c.st.driver = -1; c.st.speed = 0; c.st.vx = c.st.vz = 0; }
    const ags = [];
    for (const r of this.remotes.values()) {
      const g = r.model.group; g.rotation.order = 'YXZ';
      if (!r.has) continue;
      if (r.flags & 256) {
        const c = this.cars[(r.flags >> 9) & 7];
        if (c && c !== this.drive) {
          const st = c.st, dy = ((r.yaw - (st._py ?? r.yaw) + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
          st.driver = r.id; st.parked = false; st.x = r.x; st.z = r.z; { const py = st.y; st.y = r.y || 0; st.pitch += ((Math.abs(r.speed) > 1 ? Math.atan2(st.y - py, Math.max(0.01, Math.abs(r.speed) * dt)) : 0) - st.pitch) * Math.min(1, dt * 8); } st.speed = r.speed; st.vx = Math.sin(r.yaw) * r.speed; st.vz = Math.cos(r.yaw) * r.speed; st._py = r.yaw;
          st.steer += (clamp(-dy / Math.max(dt, 0.008) * 0.45, -1, 1) - st.steer) * Math.min(1, dt * 8); st.yaw = r.yaw;
          this.seatModel(g, c); this.tagScale(r.tag, g.position, 1);
        }
      } else {
        g.scale.setScalar(1); g.rotation.x = (r.flags & 4096) ? 0.55 : 0;
        if (r.flags & 4096) ags.push([r.x, r.z, 0.35 + Math.min(1, r.speed / 8) * 0.65]);
      }
    }
    if (b.swim > 0.3 && !this.drive) ags.push([b.x, b.z, 0.35 + Math.min(1, Math.hypot(b.vx, b.vz) / 8) * 0.65]);
    if (b.swim > 0.3 && !this.drive && Math.hypot(b.vx, b.vz) > 2 && Math.random() < 0.5) this.particles.emit(b.x, b.waterSurf + 0.08, b.z, 1, { color: '#ffffff', speed: 1.2, up: 1.6, life: 0.5, size: 0.28, gravity: 6, spread: 0.5 });
    for (const pm of this.poolMeshes) {
      const u = pm.wm.material.uniforms; u.time.value = t; pm.cm.material.uniforms.time.value = t;
      for (let i = 0; i < 4; i++) { const a = ags[i], v = u.ag.value[i]; if (a) v.set(a[0], a[1], a[2]); else v.set(0, 0, 0); }
    }
    // underwater tint when the camera dips below the surface
    { let under = false; for (const pm of this.poolMeshes) { const p = pm.pl, cp = this.camera.position; if (cp.x > p.x0 && cp.x < p.x1 && cp.z > p.z0 && cp.z < p.z1 && cp.y < p.surf) under = true; } const uw = $('uw'); if (uw && uw.classList.contains('on') !== under) uw.classList.toggle('on', under); }
    // cars: pose + wheels
    for (const c of this.cars) { c.mesh.position.set(c.st.x, c.st.y, c.st.z); c.mesh.rotation.y = c.st.yaw; animateCar(c.mesh, c.st, dt); }
    // "get in" prompt
    const near = !this.drive && canMove && !this.menuOpen && this.nearestFreeCar(b);
    if (!!near !== document.body.classList.contains('near-car')) document.body.classList.toggle('near-car', !!near);
    { const sw = !!this.drive && this.racerOk && !CAR_SPECS[this.drive.st.id].racer && this.garageSpot(this.drive.st) && Math.abs(this.drive.st.speed) < 5; if (sw !== document.body.classList.contains('sky-swap')) document.body.classList.toggle('sky-swap', sw); }
    if (this.drive) { const sp = $('car-speed'); if (sp) { const n = Math.round(Math.abs(this.drive.st.speed) * 3.6); if (sp.firstElementChild.textContent !== String(n)) sp.firstElementChild.textContent = n; } }
  }

  onFell() {
    const b = this.me.body;
    const cp = this.cpCur;
    const slotOff = (this.slot - 1) * 1.6;
    let x, y, z;
    if (cp) { x = clamp(cp.x + slotOff, cp.x - cp.w / 2 + 1.5, cp.x + cp.w / 2 - 1.5); y = cp.y + 0.05; z = cp.spawn[2]; }
    else { const s = this.spawnPoint(this.slot); x = s[0]; y = s[1] + 0.02; z = s[2]; }
    respawn(b, x, y, z, Math.PI);
    this.rs++;
    A.sfx.respawn();
    const f = $('flash'); f.classList.add('on'); setTimeout(() => f.classList.remove('on'), 60);
    this.particles.emit(x, y + 0.8, z, 30, { rainbow: true, speed: 3, up: 3, life: 0.8, size: 0.3 });
    this.camInit = false; // snap camera behind
    this.camYaw = 0;
  }

  checkpoints(b) {
    const cps = this.world.checkpoints;
    while (this.cpIdx < cps.length && b.z < cps[this.cpIdx].z && b.y > cps[this.cpIdx].y - 2.5 && Math.abs(b.x - cps[this.cpIdx].x) < cps[this.cpIdx].w / 2 + 3) {
      this.cpCur = cps[this.cpIdx]; this.cpIdx++;
      A.sfx.checkpoint(); this.toast('CHECKPOINT!');
      this.particles.emit(b.x, b.y + 1, b.z, 24, { color: '#ffd23f', speed: 3, up: 5, life: 0.8, size: 0.3 });
    }
  }

  // bean-vs-bean collisions: separate (no clipping) + bounce momentum; a diving rival tackles you
  softCollide(b) {
    if (this.finished) return;
    const lim = P.R * 2 + 0.06;
    for (const r of this.remotes.values()) {
      if (!r.has || (r.flags & 8)) continue;
      const dx = b.x - r.x, dz = b.z - r.z, dy = b.y - r.y;
      if (Math.abs(dy) > P.H * 0.8) continue;
      const d = Math.hypot(dx, dz);
      if (d >= lim) continue;
      let nx, nz;
      if (d > 1e-3) { nx = dx / d; nz = dz / d; } else { const a = b.yaw * 7 + 1; nx = Math.cos(a); nz = Math.sin(a); }
      const pen = lim - d;
      b.x += nx * pen * 0.62; b.z += nz * pen * 0.62;                       // I move out of the way (they do the same on their screen)
      // never stay glued face to face: slide round the other player on the side I'm already leaning to
      { const fx = Math.sin(b.yaw), fz = Math.cos(b.yaw), sp = Math.hypot(b.vx, b.vz);
        if (sp > 1 && -(fx * nx + fz * nz) > 0.3) { const tx = -nz, tz = nx; let sg = fx * tx + fz * tz; if (Math.abs(sg) < 0.3) sg = (-fz) * tx + fx * tz || 1; sg = Math.sign(sg); /* head-on: both pass on their own right */ b.x += tx * sg * pen * 0.55; b.z += tz * sg * pen * 0.55; } }
      const rvx = r.vx || 0, rvz = r.vz || 0;
      const vrel = (b.vx - rvx) * nx + (b.vz - rvz) * nz;                    // < 0 = approaching
      if (this.multi && vrel < -1.5) { // I'm running into them: push THEM too (their screen would otherwise never move them)
        const nowMs = performance.now();
        if (!(r.shoveAt > nowMs - 80)) { r.shoveAt = nowMs; app.net.send({ t: 'shove', to: r.id, nx: +(-nx).toFixed(3), nz: +(-nz).toFixed(3), p: +Math.min(12, -vrel).toFixed(1) }); }
      }
      const tNow = performance.now(), fresh = !(r.lastContact > tNow - 150); r.lastContact = tNow; // bounce only on the first touch, not while pushing
      if (vrel < 0 && fresh) {
        const j = -(1 + 0.7) * vrel * 0.5;                                   // bouncy exchange of momentum, half each
        b.vx += nx * j; b.vz += nz * j;
        if (j > 2.5) b.noCtrl = Math.max(b.noCtrl, 0.16);                    // let the bump be felt before steering resumes
        if ((r.flags & 4) && -vrel > 7 && b.hitCd <= 0 && knock(b, nx, nz, 11)) this.bonked('TACKLED!', r.name || '', b);
        else if (-vrel > 6 && b.hitCd <= 0) { A.sfx.land(6); this.particles.emit(b.x - nx * 0.4, b.y + 0.9, b.z - nz * 0.4, 8, { color: '#ffffff', speed: 3, up: 2, life: 0.3, size: 0.25 }); }
      }
    }
  }

  bonked(txt, who, b) {
    A.sfx.bonk(); this.toast(txt + (who ? '  \u2022 ' + who : ''));
    this.particles.emit(b.x, b.y + 1, b.z, 22, { color: '#ffffff', speed: 6, up: 3, life: 0.5, size: 0.3 });
    this.particles.emit(b.x, b.y + 1, b.z, 14, { color: '#ffd23f', speed: 8, up: 4, life: 0.45, size: 0.28 });
  }

  // ---- baseball bat (multiplayer): pushes rivals away, never kills
  swing() {
    if (!this.multi || this.over || this.finished || this.levelTime < 0 || this.batCd > 0) return false;
    const b = this.me.body; if (b.stun > 0) return false;
    this.swingMega = this.fx.mega > 0; if (this.swingMega) this.fx.mega--;
    this.batCd = 1.1; this.swingT = 0.001; this.batPending = true; A.sfx.swing();
    return true;
  }
  updateBat(dt, b) {
    if (this.batCd > 0) this.batCd -= dt;
    if (this.swingT > 0) {
      this.swingT += dt / 0.42;
      if (b.stun > 0) { this.swingT = 0; this.batPending = false; }
      else if (this.batPending && this.swingT >= 0.55) { this.batPending = false; this.batHit(b); }
      if (this.swingT >= 1) this.swingT = 0;
    }
  }
  batHit(b) {
    const fx = Math.sin(b.yaw), fz = Math.cos(b.yaw);
    for (const r of this.remotes.values()) {
      if (!r.has || (r.flags & 8)) continue;
      const dx = r.x - b.x, dz = r.z - b.z, dy = r.y - b.y, d = Math.hypot(dx, dz);
      if (d > (this.swingMega ? 4.4 : 2.9) || Math.abs(dy) > 1.7 || d < 1e-3) continue;
      if ((dx * fx + dz * fz) / d < 0.1) continue;                        // must be in front of me
      let nx = fx * 0.7 + (dx / d) * 0.3, nz = fz * 0.7 + (dz / d) * 0.3; const l = Math.hypot(nx, nz) || 1; nx /= l; nz /= l;
      app.net.send({ t: 'bat', to: r.id, nx: +nx.toFixed(3), nz: +nz.toFixed(3), p: this.swingMega ? 2 : 1 });
      A.sfx.bonk(); this.toast('BONK!  \u2022 ' + (r.name || ''));
      this.particles.emit(r.x, r.y + 1, r.z, 24, { color: '#ffd23f', speed: 7, up: 4, life: 0.5, size: 0.3 });
      this.particles.emit(r.x, r.y + 1, r.z, 14, { color: '#ffffff', speed: 5, up: 3, life: 0.4, size: 0.25 });
    }
  }
  onShove(m) { // somebody is running into ME: move out of their way (a shield makes you immovable)
    const b = this.me.body; if (this.over || this.finished || this.levelTime < 0 || b.shield > 0) return;
    const p = clamp(+m.p || 0, 0, 12), nx = +m.nx, nz = +m.nz; if (!Number.isFinite(nx) || !Number.isFinite(nz)) return;
    b.x += nx * p * 0.05; b.z += nz * p * 0.05; b.vx += nx * p * 0.12; b.vz += nz * p * 0.12;
  }
  onBat(m) { // somebody hit ME
    const b = this.me.body; if (this.over || this.finished || this.levelTime < 0) return;
    const who = (this.players.find((p) => p.id === m.from) || {}).name || '';
    b.hitCd = 0;
    if (b.shield > 0) { this.toast('SHIELD BLOCKED!'); A.sfx.pickup(); return; }
    const big = m.p === 2;
    if (knock(b, m.nx, m.nz, big ? 22 : 15)) { b.vy = big ? 11 : 9; b.stun = big ? 1.0 : 0.75; this.bonked(big ? 'MEGA BONK!' : 'BONKED!', who, b); }
  }

  // ---- power-up boxes (personal pick-ups, respawn after 9 s)
  buildBoxes() {
    this.boxes = [];
    const spots = [], row = (x0, z, y) => [-4, 0, 4].forEach((dx) => spots.push({ x: x0 + dx, y: y + 1.35, z }));
    row(0, -10, 0);
    let lastZ = 1e9;
    for (const c of this.world.checkpoints) { if (Math.abs(c.z - lastZ) < 12) continue; lastZ = c.z; row(c.x, c.z - 5, c.y); }
    if (!Race.boxAssets) {
      const cv = document.createElement('canvas'); cv.width = cv.height = 128; const g = cv.getContext('2d');
      const gr = g.createLinearGradient(0, 0, 128, 128); gr.addColorStop(0, '#ffe45e'); gr.addColorStop(1, '#ff8a1a'); g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
      g.strokeStyle = '#fff'; g.lineWidth = 8; g.strokeRect(6, 6, 116, 116); g.fillStyle = '#fff'; g.strokeStyle = '#7a3500'; g.lineWidth = 6; g.font = 'bold 92px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.strokeText('?', 64, 70); g.fillText('?', 64, 70);
      const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
      Race.boxAssets = { geo: new THREE.BoxGeometry(0.95, 0.95, 0.95), mat: new THREE.MeshStandardMaterial({ map: tex, emissive: '#ff9a00', emissiveIntensity: 0.55, roughness: 0.35 }) };
    }
    for (const sp of spots) {
      const mesh = new THREE.Mesh(Race.boxAssets.geo, Race.boxAssets.mat); mesh.position.set(sp.x, sp.y, sp.z); mesh.castShadow = true; this.scene.add(mesh);
      this.boxes.push({ ...sp, mesh, respawn: 0 });
    }
  }
  findLeader() {
    if (this.players.length < 2 || this.levelTime < 4) return -1;
    let bestId = this.localId, best = this.finished ? 1e5 : -this.me.body.z;
    for (const r of this.remotes.values()) { if (!r.has) continue; const v = (r.flags & 8) ? 1e5 : -r.z; if (v > best + 0.5) { best = v; bestId = r.id; } }
    return bestId;
  }
  pickup(bx, force) {
    bx.respawn = 9; bx.mesh.visible = false; A.sfx.pickup();
    const pool = this.multi ? ['turbo', 'turbo', 'turbo', 'jump', 'jump', 'shield', 'shield', 'mega', 'mega', 'mega'] : ['turbo', 'jump', 'shield'];
    const k = force || pool[(Math.random() * pool.length) | 0], f = this.fx, b = this.me.body;
    if (k === 'turbo') { f.turbo = 5; this.toast('\uD83D\uDE80 TURBO!'); }
    else if (k === 'jump') { f.jump = 7; this.toast('\uD83E\uDD98 SUPER JUMP!'); }
    else if (k === 'shield') { f.shield = 8; this.toast('\uD83D\uDEE1\uFE0F SHIELD!'); }
    else { f.mega = 2; this.toast('\uD83C\uDFCF MEGA BAT x2!'); }
    this.particles.emit(b.x, b.y + 1, b.z, 26, { rainbow: true, speed: 4, up: 4, life: 0.7, size: 0.32 });
    return k;
  }
  updatePowerups(dt, b) {
    const t = performance.now() / 1000, f = this.fx;
    for (const bx of this.boxes) {
      if (bx.respawn > 0) { bx.respawn -= dt; if (bx.respawn <= 0) bx.mesh.visible = true; continue; }
      bx.mesh.rotation.y += dt * 2; bx.mesh.rotation.x = Math.sin(t * 1.5 + bx.x) * 0.25; bx.mesh.position.y = bx.y + Math.sin(t * 2.5 + bx.x) * 0.15;
      if (this.finished || this.over || this.levelTime < 0) continue;
      if (Math.abs(b.x - bx.x) < 1.3 && Math.abs(b.z - bx.z) < 1.3 && b.y < bx.y + 0.8 && b.y + P.H > bx.y - 0.5) this.pickup(bx);
    }
    for (const k of ['turbo', 'jump', 'shield']) if (f[k] > 0) f[k] = Math.max(0, f[k] - dt);
    b.speedMul = f.turbo > 0 ? 1.4 : 1; b.jumpMul = f.jump > 0 ? 1.3 : 1; b.shield = f.shield;
    if (f.turbo > 0 && Math.hypot(b.vx, b.vz) > 3 && Math.random() < 0.7) this.particles.emit(b.x, b.y + 0.3, b.z, 1, { color: '#5fc2ff', speed: 1, up: 0.5, life: 0.35, size: 0.35 });
    const sig = ['turbo', 'jump', 'shield'].map((k) => f[k] > 0 ? k + Math.ceil(f[k]) : '').join('|') + '|' + f.mega;
    if (sig !== this.fxSig) {
      this.fxSig = sig; const el = $('hud-fx'); if (!el) return; el.innerHTML = '';
      const add = (ic, txt) => { const d = document.createElement('div'); d.className = 'fx'; d.textContent = ic + ' ' + txt; el.appendChild(d); };
      if (f.turbo > 0) add('\uD83D\uDE80', Math.ceil(f.turbo) + 's'); if (f.jump > 0) add('\uD83E\uDD98', Math.ceil(f.jump) + 's');
      if (f.shield > 0) add('\uD83D\uDEE1\uFE0F', Math.ceil(f.shield) + 's'); if (f.mega > 0) add('\uD83C\uDFCF', 'x' + f.mega);
    }
  }

  onLocalFinish() {
    this.finished = true;
    this.finishTime = Math.max(0, this.levelTime);
    A.sfx.finish();
    const g = this.info.finishZ;
    this.particles.emit(0, this.info.finishY + 6, g, 120, { rainbow: true, speed: 9, up: 10, life: 1.8, size: 0.5, gravity: 7, spread: 10 });
    this.particles.emit(-9, this.info.finishY + 1, g, 40, { rainbow: true, speed: 4, up: 12, life: 1.4, size: 0.4, gravity: 8 });
    this.particles.emit(9, this.info.finishY + 1, g, 40, { rainbow: true, speed: 4, up: 12, life: 1.4, size: 0.4, gravity: 8 });
    if (!this.multi) this.endSingle(false);
    else this.toast('FINISHED!');
  }

  endSingle(timeUp) {
    if (this.over) return;
    this.over = true; this.winnerSelf = !timeUp;
    const total = -this.info.finishZ, prog = clamp(-this.me.body.z / total, 0, 1);
    let sub = '';
    if (!timeUp) {
      const t = this.finishTime, bt = best(this.level);
      if (!bt || t < bt) { localStorage.setItem('ph_best_' + this.level, String(t)); sub = bt ? 'NEW BEST TIME!' : 'First clear!'; } else sub = `Best: ${fmtT(bt)}`;
    }
    const rows = [{ place: 1, name: this.me.name, char: this.me.char, win: !timeUp, tm: timeUp ? `${Math.round(prog * 100)}% of the track` : fmtT(this.finishTime), self: true }];
    setTimeout(() => app.showResults({ title: timeUp ? "TIME'S UP!" : 'YOU DID IT!', sub: timeUp ? 'You ran out of time. Try again!' : sub, rows, single: true, win: !timeUp }), timeUp ? 300 : 1400);
    A.duckMusic(true); timeUp ? A.sfx.lose() : A.sfx.win();
  }

  // ---- multiplayer server events
  onFin(m) {
    this.finishedMap.set(m.id, m.place);
    const p = this.players.find((q) => q.id === m.id);
    if (m.id === this.localId) { this.toast(`${ord(m.place)} PLACE!`); }
    else { this.toast(`${p ? p.name : 'Player'} finished ${ord(m.place)}!`); A.sfx.checkpoint(); }
  }
  onEnd(m) {
    this.over = true;
    const mine = m.winnerId === this.localId;
    this.winnerSelf = mine;
    A.duckMusic(true); mine ? A.sfx.win() : A.sfx.lose();
    const rows = m.results.map((r) => ({ place: r.place, name: r.name, char: r.char, win: r.id === m.winnerId, self: r.id === this.localId, tm: r.finished ? fmtT(r.time) : `${Math.round(r.progress * 100)}% of the track` }));
    const w = m.results[0];
    setTimeout(() => app.showResults({ title: mine ? 'YOU WIN!' : `${w ? w.name : 'Nobody'} WINS!`, sub: m.reason === 'time' ? "Time's up - the nearest player to the finish gate wins!" : 'First to the finish gate wins!', rows, single: false, win: mine }), 900);
  }
  addRemote(p) { if (this.remotes.has(p.id)) return; this.players.push(p); this.remotes.set(p.id, new Remote(p, this.scene)); this.buildProgress(); this.toast(p.name + ' joined the race!'); }
  removeRemote(id) { const r = this.remotes.get(id); if (r) { r.dispose(this.scene); this.remotes.delete(id); const d = this.dots.get(id); if (d) d.remove(); } }

  // ---- visuals
  tagScale(tag, pos, k) {
    const d = pos.distanceTo(this.camera.position);
    const s = clamp(d * 0.07, 1.0, 5.2) * k;
    tag.scale.set(2.8 * s, 0.7 * s, 1);
    tag.visible = d < 260;
  }
  updateCamera(dt) {
    const b = this.me.body;
    const cp = Math.cos(this.camPitch), sp = Math.sin(this.camPitch);
    const speed = Math.hypot(b.vx, b.vz);
    this.camera.fov = lerp(this.camera.fov, 62 + clamp(speed - 10, 0, 12) * 0.9, Math.min(1, dt * 4)); this.camera.updateProjectionMatrix();
    let dist = this.camDist;
    if (this.drive) {
      const st = this.drive.st; this.lookT -= dt; dist = 9.2 + Math.min(4, Math.abs(st.speed) * 0.12);
      if (this.lookT <= 0) { this.camYaw = lerpAngle(this.camYaw, st.yaw + Math.PI, 1 - Math.exp(-3.2 * dt)); this.camPitch += (0.28 - this.camPitch) * (1 - Math.exp(-2 * dt)); }
    }
    const tx = b.x, ty = b.y + (this.drive ? 1.1 : 1.35), tz = b.z;
    if (!this.camInit) { this.camTarget.set(tx, ty, tz); this.camInit = true; }
    const f = 1 - Math.exp(-14 * dt);
    this.camTarget.x += (tx - this.camTarget.x) * f; this.camTarget.z += (tz - this.camTarget.z) * f;
    this.camTarget.y += (ty - this.camTarget.y) * (1 - Math.exp(-7 * dt));
    this.camera.position.set(this.camTarget.x + Math.sin(this.camYaw) * cp * dist, this.camTarget.y + sp * dist + 0.4, this.camTarget.z + Math.cos(this.camYaw) * cp * dist);
    if (this.shake > 0.01) { const k = this.shake * 0.5; this.camera.position.x += (Math.random() - 0.5) * k; this.camera.position.y += (Math.random() - 0.5) * k * 0.7; this.camera.position.z += (Math.random() - 0.5) * k; this.shake *= Math.exp(-7 * (this.lastDt || 0.016)); } else this.shake = 0;
    this.camera.lookAt(this.camTarget.x, this.camTarget.y + 0.2, this.camTarget.z);
  }
  updateLights() {
    const t = this.camTarget;
    this.sun.position.set(t.x + this.sunDir.x, t.y + this.sunDir.y, t.z + this.sunDir.z); this.sun.target.position.copy(t);
  }

  // ---- HUD
  count(txt) { const el = $('hud-count'); el.textContent = txt; el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
  toast(txt) { const el = $('hud-toast'); el.textContent = txt; el.classList.remove('show'); void el.offsetWidth; el.classList.add('show'); }
  rank() {
    const b = this.me.body; let r = 1;
    const myFin = this.finishedMap.get(this.localId) ?? (this.finished && !this.multi ? 1 : null);
    if (myFin) return myFin;
    for (const rm of this.remotes.values()) {
      const f = this.finishedMap.get(rm.id);
      if (f) r++; else if (rm.has && rm.z < b.z - 0.5) r++;
    }
    return r;
  }
  hud(dt) {
    this.hudT += dt;
    if (this.hintT > 0) { this.hintT -= dt; if (this.hintT <= 0) $('hud-hint').classList.add('fade'); }
    if (this.hudT < 0.066) return; this.hudT = 0;
    const lt = this.levelTime, el = Math.max(0, Math.floor(lt));  // unlimited time: the clock just counts up
    const tm = $('hud-timer'); tm.textContent = `${Math.floor(el / 60)}:${String(el % 60).padStart(2, '0')}`; tm.classList.remove('low');
    $('hud-hint').classList.toggle('single', !this.multi); document.body.classList.toggle('single', !this.multi);
    $('hud-rank').textContent = this.multi ? ord(this.rank()) + ' / ' + this.players.length : `${Math.max(0, Math.round(clamp(-this.me.body.z / -this.info.finishZ, 0, 1) * 100))}%`;
    const total = -this.info.finishZ;
    const set = (id, z) => { const d = this.dots.get(id); if (d) d.style.left = (clamp(-z / total, 0, 1) * 100) + '%'; };
    set(this.localId, this.me.body.z);
    for (const r of this.remotes.values()) set(r.id, r.has ? r.z : 0);
    const hint = $('click-hint'), want = !this.over && !this.menuOpen && document.pointerLockElement !== canvas;
    if (want !== hint.classList.contains('show')) hint.classList.toggle('show', want);
    { const tb2 = $('t-bat'); if (tb2) tb2.classList.toggle('cd', this.batCd > 0); }
    if (this.multi) $('hud-net').textContent = `ping ${Math.round(app.net.rtt)} ms`;
  }

  render() { renderer.render(this.scene, this.camera); }

  destroy() {
    A.stopMusic(); A.engineStop(); { const uw = $('uw'); if (uw) uw.classList.remove('on'); } document.body.classList.remove('sky-swap'); document.body.classList.remove('driving'); document.body.classList.remove('near-car');
    document.body.classList.remove('in-race'); document.body.classList.remove('single'); $('pause').classList.add('hidden'); this.menuOpen = false;
    $('hud').classList.add('hidden');
    $('hud-count').textContent = ''; $('hud-toast').classList.remove('show'); { const fx = $('hud-fx'); if (fx) fx.innerHTML = ''; }
    for (const r of this.remotes.values()) r.dispose(this.scene);
    this.me.model.dispose(); this.scenery.dispose();
    this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) { const ms = Array.isArray(o.material) ? o.material : [o.material]; ms.forEach((m) => { if (m.map) m.map.dispose(); m.dispose(); }); } });
    this.scene.clear();
  }
}

// ------------------------------------------------------------------ UI / flow
const screens = ['title', 'profile', 'levels', 'mp', 'lobby', 'results', 'help'];
function show(name) {
  for (const s of screens) { const el = $('s-' + s); el.classList.toggle('active', s === name); el.classList.remove('hidden'); }
  app.screen = name;
}
let toastTimer = 0;
function gtoast(msg) { const el = $('toast-global'); el.textContent = msg; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 3200); }

// ---- character cards
function charCards(container, opts) {
  container.innerHTML = '';
  CHARACTERS.forEach((c) => {
    const d = document.createElement('div'); d.className = 'card'; d.dataset.id = c.id;
    d.innerHTML = `<img alt="${c.name}" src="${thumbs[c.id] || ''}"><b style="color:${c.color}">${c.name}</b>${opts.small ? '' : `<span>${c.tag}</span>`}`;
    d.onclick = () => opts.onPick(c.id);
    container.appendChild(d);
  });
}
function markChars(container, sel, takenSet) {
  container.querySelectorAll('.card').forEach((d) => {
    const id = +d.dataset.id;
    d.classList.toggle('sel', id === sel);
    d.classList.toggle('taken', takenSet && takenSet.has(id) && id !== sel);
  });
}
function levelCards(container, opts) {
  container.innerHTML = '';
  LEVEL_META.forEach((m) => {
    const d = document.createElement('div'); d.className = 'card'; d.dataset.id = m.id;
    d.style.background = `linear-gradient(160deg, ${m.colors[0]}cc, ${m.colors[1]}cc)`;
    const b = best(m.id);
    d.innerHTML = `<div><h4>${m.id + 1}. ${m.name}</h4><div class="stars">${'★'.repeat(m.stars)}${'☆'.repeat(5 - m.stars)}</div></div><div class="blurb">${m.blurb}</div><div class="meta">${m.sub} &bull; no time limit${b ? ' &bull; best ' + fmtT(b) : ''}</div>`;
    d.onclick = () => opts.onPick(m.id);
    container.appendChild(d);
  });
}

// ---- thumbnails of the three characters (rendered once with a temporary GL context)
function makeThumbs() {
  const r = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  r.setSize(256, 320, false); r.outputColorSpace = THREE.SRGBColorSpace; r.toneMapping = THREE.ACESFilmicToneMapping; r.setClearColor(0x000000, 0);
  const sc = new THREE.Scene(); sc.add(new THREE.HemisphereLight('#ffffff', '#b9a4ff', 1.6));
  const dl = new THREE.DirectionalLight('#ffffff', 2.6); dl.position.set(3, 5, 6); sc.add(dl);
  const pm = new THREE.PMREMGenerator(r); sc.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; sc.environmentIntensity = 0.7;
  const cam = new THREE.PerspectiveCamera(30, 256 / 320, 0.1, 50); cam.position.set(0, 1.25, 6.6); cam.lookAt(0, 0.98, 0);
  const out = [];
  for (let i = 0; i < CHARACTERS.length; i++) {
    const c = new Character(i); c.group.rotation.y = -0.35; sc.add(c.group); c.update(0.016, { speed: 0, grounded: true, vy: 0, stun: 0, dive: 0, celebrate: false });
    r.render(sc, cam); out.push(r.domElement.toDataURL('image/png')); sc.remove(c.group); c.dispose();
  }
  pm.dispose(); r.dispose(); r.forceContextLoss();
  return out;
}

// ---- profile screen
function openProfile(mode) {
  app.mode = mode;
  $('inp-name').value = app.name;
  $('profile-title').textContent = mode === 'single' ? 'Choose your player' : 'Choose your player';
  charCards($('char-cards'), { onPick: (id) => { app.char = id; markChars($('char-cards'), id); stage.sel = id; A.sfx.select(); stage.burst(id); } });
  markChars($('char-cards'), app.char);
  stage.setTitle(app.char); stage.mode = 'profile'; stage.sel = app.char;
  show('profile');
}
function readName() {
  let n = $('inp-name').value.trim().replace(/[<>&"']/g, '').slice(0, 14);
  if (!n) n = ['Haris', 'Speedy', 'Bouncy', 'Zippy'][Math.floor(Math.random() * 4)] + Math.floor(Math.random() * 90 + 10);
  app.name = n; localStorage.setItem('ph_name', n); localStorage.setItem('ph_char', String(app.char));
  return n;
}

// ---- single player
function openLevels() {
  levelCards($('level-cards'), { onPick: (id) => { A.sfx.go(); startSingle(id); } });
  show('levels');
}
function startSingle(levelIdx) {
  A.initAudio();
  if (race) { race.destroy(); race = null; }
  app.level = levelIdx;
  race = new Race(levelIdx, [{ id: 1, name: app.name, char: app.char }], 1, { multi: false, t0: performance.now() + 3600 });
  resize();
  show('none');
  $('s-results').classList.add('hidden');
  tryLock();
}

// ---- results
app.showResults = function (r) {
  const list = $('res-list'); list.innerHTML = '';
  r.rows.forEach((row) => {
    const d = document.createElement('div'); d.className = 'res-row' + (row.win ? ' win' : '');
    const c = CHARACTERS[row.char];
    d.innerHTML = `<div class="place">${row.place <= 3 ? MEDAL[row.place - 1] : row.place}</div><div class="nm"><i style="background:${c.color}"></i>${row.name.replace(/[<>&]/g, '')}${row.self ? ' <small>(you)</small>' : ''}</div><div class="tm">${row.tm}</div>`;
    list.appendChild(d);
  });
  $('res-title').textContent = r.title; $('res-sub').textContent = r.sub || '';
  const retry = $('b-res-retry'), next = $('b-res-next');
  if (r.single) {
    retry.style.display = ''; retry.textContent = 'RETRY';
    next.style.display = ''; next.textContent = app.level < LEVEL_META.length - 1 ? 'NEXT LEVEL' : 'LEVELS'; next.disabled = false;
    app.resMode = 'single';
  } else {
    retry.style.display = 'none';
    const host = app.room && app.room.hostId === app.myId;
    next.style.display = ''; next.textContent = host ? 'BACK TO LOBBY' : 'WAITING FOR HOST...'; next.disabled = !host;
    app.resMode = 'multi';
  }
  exitLock();
  show('results');
};
$('b-res-menu').onclick = () => { A.sfx.back(); leaveToTitle(); };
$('b-res-retry').onclick = () => { A.sfx.click(); startSingle(app.level); };
$('b-res-next').onclick = () => {
  A.sfx.click();
  if (app.resMode === 'single') { if (app.level < LEVEL_META.length - 1) startSingle(app.level + 1); else { race && race.destroy(); race = null; openLevels(); } }
  else app.net.send({ t: 'again' });
};

function leaveToTitle() {
  if (race) { race.destroy(); race = null; }
  if (app.net && app.room) { app.net.send({ t: 'leave' }); }
  app.room = null; exitLock();
  stage.setTitle(); show('title');
}

// ---- multiplayer
async function ensureNet() {
  if (app.net && app.net.connected) return app.net;
  const net = new Net();
  net.on('joined', (m) => { app.myId = m.id; });
  net.on('lobby', onLobby);
  net.on('err', (m) => {
    $('mp-status').textContent = m.msg;
    if (m.retry && app.screen === 'mp') { stopJoin(); joinTimer = setTimeout(() => { if (app.screen === 'mp' && !app.room) mpAction('join'); }, 2000); } // keep looking until a room appears
    else gtoast(m.msg);
  });
  net.on('go', onGo);
  net.on('s', (m) => { if (race && race.multi) { const r = race.remotes.get(m.id); if (r) r.push(m); } });
  net.on('fin', (m) => { if (race && race.multi) race.onFin(m); });
  net.on('bat', (m) => { if (race && race.multi) race.onBat(m); });
  net.on('carpark', (m) => { if (race && race.multi) race.onCars({ [m.c]: m }); });
  net.on('cars', (m) => { if (race && race.multi) race.onCars(m.cars); else app.pendingCars = m.cars; });
  net.on('shove', (m) => { if (race && race.multi) race.onShove(m); });
  net.on('end', (m) => { if (race && race.multi) race.onEnd(m); });
  net.on('left', (m) => { if (race && race.multi) race.removeRemote(m.id); });
  net.on('close', () => { gtoast('Disconnected from server'); if (race) { race.destroy(); race = null; } app.room = null; exitLock(); stage.setTitle(); show('title'); });
  await net.connect();
  app.net = net;
  return net;
}
function openMp() { $('mp-status').textContent = ''; stage.setTitle(app.char); show('mp'); }
let joinTimer = null;
function stopJoin() { if (joinTimer) { clearTimeout(joinTimer); joinTimer = null; } }
async function mpAction(kind) {
  A.initAudio(); stopJoin();
  const st = $('mp-status'); st.textContent = 'Connecting...';
  try {
    const net = await ensureNet();
    if (kind === 'create') net.send({ t: 'create', name: app.name, char: app.char });
    else net.send({ t: 'join', name: app.name, char: app.char }); // no code: the server puts us in the room a friend created
    st.textContent = kind === 'create' ? '' : 'Looking for a room...';
  } catch (e) { st.textContent = 'Could not connect to the game server. Is it running?'; gtoast('Could not connect to the game server'); }
}
function onLobby(m) {
  stopJoin();
  const first = !app.room;
  const prev = app.room; app.room = m;
  if (race && race.multi) { // someone joined / left mid-session: just refresh the room data
    for (const p of m.players) if (p.id !== app.myId && !race.remotes.has(p.id) && (m.phase === 'race' || m.phase === 'countdown')) race.addRemote(p);
    if (m.phase === 'lobby' && app.screen !== 'lobby') { race.destroy(); race = null; exitLock(); renderLobby(); show('lobby'); A.startMusic(6); }
    else if (app.screen === 'results') { const host = m.hostId === app.myId; if (app.resMode === 'multi') { $('b-res-next').textContent = host ? 'BACK TO LOBBY' : 'WAITING FOR HOST...'; $('b-res-next').disabled = !host; } }
    return;
  }
  if ((first || app.screen === 'mp' || app.screen === 'profile' || app.screen === 'title') && (m.phase === 'lobby' || m.phase === 'results')) { show('lobby'); A.startMusic(6); }
  if (prev && m.players.length > prev.players.length) A.sfx.join();
  renderLobby();
}
function renderLobby() {
  const m = app.room; if (!m) return;
  const meP = m.players.find((p) => p.id === app.myId);
  if (meP) app.char = meP.char;
  $('lobby-code').textContent = m.code;
  $('lobby-count').textContent = `${m.players.length}/${MAX_PLAYERS}`;
  const slots = $('lobby-players'); slots.innerHTML = '';
  for (let i = 0; i < MAX_PLAYERS; i++) {
    const p = m.players[i], d = document.createElement('div'); d.className = 'slot' + (p ? '' : ' empty');
    d.innerHTML = p ? `<i style="background:${CHARACTERS[p.char].color}"></i><span>${p.name.replace(/[<>&]/g, '')}</span>${p.id === m.hostId ? '<span>\u{1F451}</span>' : ''}${p.id === app.myId ? '<span class="you">YOU</span>' : ''}` : '<i style="background:#888"></i><span>Waiting for player...</span>';
    slots.appendChild(d);
  }
  const taken = new Set(m.players.filter((p) => p.id !== app.myId).map((p) => p.char));
  charCards($('lobby-chars'), { small: true, onPick: (id) => { if (taken.has(id)) return; A.sfx.select(); app.net.send({ t: 'char', char: id }); } });
  markChars($('lobby-chars'), app.char, taken);
  const host = m.hostId === app.myId;
  levelCards($('lobby-levels'), { onPick: (id) => { if (host) { A.sfx.click(); app.net.send({ t: 'level', level: id }); } } });
  $('lobby-levels').querySelectorAll('.card').forEach((d) => { d.classList.toggle('sel', +d.dataset.id === m.level); if (!host) d.style.cursor = 'default'; });
  $('lobby-level-note').textContent = host ? '(you choose)' : '(host chooses)';
  $('b-start').disabled = !host; $('b-start').firstElementChild.textContent = host ? 'START RACE' : 'WAITING FOR HOST';
  $('lobby-hint').textContent = host ? (m.players.length < 2 ? 'Tell friends to tap MULTIPLAYER on the same link. You can also start alone.' : 'Everyone ready? Hit start!') : 'The host will start the race.';
  stage.setLobby(m.players);
}
function onGo(m) {
  A.initAudio();
  if (race) { race.destroy(); race = null; }
  const room = app.room; if (!room) return;
  const players = m.order.map((id) => room.players.find((p) => p.id === id)).filter(Boolean);
  app.level = m.level;
  race = new Race(m.level, players, app.myId, { multi: true, t0: m.t0 });
  resize(); show('none'); tryLock();
}

// ------------------------------------------------------------------ input
function tryLock() { if (race && !race.over && document.pointerLockElement !== canvas) { try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch { /* needs a user gesture */ } } }
function exitLock() { if (document.pointerLockElement) document.exitPointerLock(); }
document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === canvas;
  if (locked) hadLock = true;
  else if (hadLock && race && !race.over && !race.menuOpen && !IS_TOUCH) openPause(); // Esc releases the mouse -> show the menu
  if (!locked) hadLock = false;
  $('click-hint').classList.toggle('show', !!race && !race.over && !race.menuOpen && !locked);
});
let hadLock = false;
let dragging = false;
canvas.addEventListener('mousedown', (e) => { dragging = true; if (race && !race.over) { if (e.button === 0 && race.multi && document.pointerLockElement === canvas && !race.menuOpen) race.swing(); else tryLock(); } });
window.addEventListener('mouseup', () => { dragging = false; });
window.addEventListener('mousemove', (e) => { if (race && !race.over && (document.pointerLockElement === canvas || dragging)) race.look(e.movementX, e.movementY); });
$('click-hint').addEventListener('click', tryLock);
window.addEventListener('keydown', (e) => {
  if (e.target && e.target.tagName === 'INPUT') { if (e.code === 'Enter') { if (app.screen === 'profile') $('b-profile-next').click(); else if (app.screen === 'mp') $('b-join').click(); } return; }
  if (race && !race.over) { if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ShiftLeft', 'ShiftRight'].includes(e.code)) e.preventDefault(); }
  if (e.repeat) return;
  keys.add(e.code);
  if (e.code === 'Space') press.jump = true;
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight' || e.code === 'KeyF') press.dive = true;
  if (e.code === 'KeyM') toggleSound();
  if (e.code === 'KeyB' && race && !race.menuOpen) race.swing();
  if (e.code === 'KeyC' && race && !race.over && !e.repeat) race.toggleCar();
  if (e.code === 'KeyH' && race && !race.menuOpen) race.honk();
  if (e.code === 'KeyR' && race && !race.over && !e.repeat) race.swapRacer();
  if (e.code === 'Escape' || e.code === 'KeyP') { if (race && !race.over) (race.menuOpen ? closePause() : openPause()); }
});
window.addEventListener('keyup', (e) => keys.delete(e.code));
window.addEventListener('blur', () => { keys.clear(); dragging = false; });
window.addEventListener('resize', resize);

function toggleSound() { app.muted = !app.muted; A.setMuted(app.muted); $('b-sound').textContent = 'SOUND: ' + (app.muted ? 'OFF' : 'ON'); syncPause(); }

// ------------------------------------------------------------------ in-game menu
function syncGfx() { $('p-gfx').textContent = '\uD83D\uDDA5 GFX: ' + (Q.low ? 'LOW' : 'AUTO'); }
function syncPause() {
  $('p-sound').textContent = '\uD83D\uDD0A SOUND: ' + (app.muted ? 'OFF' : 'ON');
}
function openPause() {
  if (!race || race.over || race.menuOpen) return;
  race.menuOpen = true;
  if (!race.multi) { race.paused = true; race.pauseAt = performance.now(); }
  exitLock(); keys.clear(); touch.x = touch.y = 0; touch.jump = false;
  $('p-title').textContent = race.multi ? 'Menu' : 'Paused';
  $('p-info').textContent = race.meta.name + (race.multi ? '  \u2022  race goes on!' : '');
  syncGfx();
  $('p-retry').classList.toggle('hidden', race.multi);
  $('p-full').classList.toggle('hidden', !(document.documentElement && document.documentElement.requestFullscreen));
  syncPause();
  $('pause').classList.remove('hidden'); $('click-hint').classList.remove('show');
  A.sfx.click();
}
function closePause() {
  if (!race || !race.menuOpen) return;
  if (race.paused) { race.t0 += performance.now() - race.pauseAt; race.paused = false; }
  race.menuOpen = false;
  $('pause').classList.add('hidden');
  tryLock();
}
$('b-menu').addEventListener('click', () => (race && race.menuOpen ? closePause() : openPause()));
$('p-resume').onclick = () => { A.sfx.click(); closePause(); };
$('p-sound').onclick = () => { A.initAudio(); toggleSound(); A.sfx.click(); };
$('p-gfx').onclick = () => { Q.low = !Q.low; try { localStorage.setItem('ph_low', Q.low ? '1' : '0'); } catch { /* ignore */ } A.sfx.click(); applyGfx(); syncGfx(); };
$('p-full').onclick = () => {
  const d = document, el = d.documentElement;
  try { if (!d.fullscreenElement && el.requestFullscreen) el.requestFullscreen({ navigationUI: 'hide' }); else if (d.exitFullscreen && d.fullscreenElement) d.exitFullscreen(); } catch { /* not supported */ }
};
$('p-retry').onclick = () => { A.sfx.click(); const l = app.level; $('pause').classList.add('hidden'); if (race) race.menuOpen = false; startSingle(l); };
$('p-quit').onclick = () => { A.sfx.back(); $('pause').classList.add('hidden'); leaveToTitle(); };

// ------------------------------------------------------------------ boot
async function boot() {
  await ensureFont();
  stage = new Stage();
  try { thumbs = makeThumbs(); } catch (e) { thumbs = ['', '', '', '']; }
  resize();
  stage.setTitle();
  show('title');

  $('b-single').onclick = () => { A.initAudio(); A.startMusic(6); A.sfx.click(); openProfile('single'); };
  $('b-multi').onclick = () => { A.initAudio(); A.startMusic(6); A.sfx.click(); openProfile('multi'); };
  $('b-help').onclick = () => { A.initAudio(); A.sfx.click(); $('s-help').classList.add('active'); };
  $('b-help-close').onclick = () => { A.sfx.back(); $('s-help').classList.remove('active'); };
  $('b-sound').onclick = () => { A.initAudio(); toggleSound(); A.sfx.click(); };
  $('b-profile-back').onclick = () => { A.sfx.back(); stage.setTitle(); show('title'); };
  $('b-profile-next').onclick = () => { readName(); A.sfx.click(); if (app.mode === 'single') openLevels(); else openMp(); };
  $('b-levels-back').onclick = () => { A.sfx.back(); openProfile('single'); };
  $('b-mp-back').onclick = () => { A.sfx.back(); stopJoin(); openProfile('multi'); };
  $('b-create').onclick = () => { A.sfx.click(); mpAction('create'); };
  $('b-join').onclick = () => { A.sfx.click(); mpAction('join'); };
  $('b-leave').onclick = () => { A.sfx.back(); leaveToTitle(); };
  $('b-start').onclick = () => { if (app.room && app.room.hostId === app.myId) { A.sfx.click(); app.net.send({ t: 'start' }); } };
  $('b-copy').onclick = async () => {
    const link = `${location.origin}${location.pathname}?room=${app.room ? app.room.code : ''}`;
    try { await navigator.clipboard.writeText(link); gtoast('Invite link copied!'); } catch { prompt('Copy this invite link:', link); }
  };

  const roomParam = new URLSearchParams(location.search).get('room');
  if (roomParam) { openProfile('multi'); gtoast('Pick your name & player, then CONTINUE and JOIN ROOM'); }

  $('loader').classList.add('done'); setTimeout(() => $('loader').remove(), 600);
  let last = performance.now();
  const loop = (now) => {
    requestAnimationFrame(loop);
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    adaptQuality(dt);
    if (race) { if (race.over && race.menuOpen) closePause(); if (!race.paused) race.update(dt); race.render(); }
    else { stage.update(dt); renderer.render(stage.scene, stage.camera); }
  };
  requestAnimationFrame(loop);
}
boot().catch((e) => { console.error(e); const p = document.querySelector('#loader p'); if (p) p.textContent = 'Error: ' + e.message; });
window.__ph = { app, Remote, startSingle: (l) => startSingle(l), keys, press, touch, get race() { return race; }, get stage() { return stage; } };


// ------------------------------------------------------------------ touch controls
(function initTouch() {
  if (IS_TOUCH) document.body.classList.add('touch');
  const zone = $('touch'), joy = $('joy'), knob = $('joy-knob');
  if (!zone || !joy || !knob) return;
  const RAD = 56;
  let joyId = null, camId = null, ox = 0, oy = 0, lx = 0, ly = 0;
  const find = (list, id) => { for (const t of list) if (t.identifier === id) return t; return null; };
  zone.addEventListener('touchstart', (e) => {
    e.preventDefault();
    for (const t of e.changedTouches) {
      if (t.clientX < window.innerWidth * 0.5 && joyId === null) {
        joyId = t.identifier; ox = t.clientX; oy = t.clientY; joy.style.left = ox + 'px'; joy.style.top = oy + 'px'; joy.classList.add('on'); knob.style.transform = 'translate(-50%, -50%)';
      } else if (camId === null && t.clientX >= window.innerWidth * 0.5) { camId = t.identifier; lx = t.clientX; ly = t.clientY; }
    }
  }, { passive: false });
  zone.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const j = joyId !== null ? find(e.touches, joyId) : null;
    if (j) {
      let dx = j.clientX - ox, dy = j.clientY - oy; const d = Math.hypot(dx, dy);
      if (d > RAD) { dx *= RAD / d; dy *= RAD / d; }
      knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
      const nx = dx / RAD, ny = dy / RAD, mag = Math.hypot(nx, ny), k = mag < 0.14 ? 0 : (mag - 0.14) / 0.86 / mag; // dead zone, then analog 0..1
      touch.x = nx * k; touch.y = -ny * k;
    }
    const c = camId !== null ? find(e.touches, camId) : null;
    if (c) { if (race && !race.over) race.look((c.clientX - lx) * 1.7, (c.clientY - ly) * 1.7); lx = c.clientX; ly = c.clientY; }
  }, { passive: false });
  const end = (e) => {
    for (const t of e.changedTouches) {
      if (t.identifier === joyId) { joyId = null; touch.x = touch.y = 0; joy.classList.remove('on'); }
      if (t.identifier === camId) camId = null;
    }
  };
  zone.addEventListener('touchend', end); zone.addEventListener('touchcancel', end);
  const btn = (id, down, up) => {
    const el = $(id); if (!el) return;
    el.addEventListener('touchstart', (e) => { e.preventDefault(); e.stopPropagation(); down(); }, { passive: false });
    const u = (e) => { e.preventDefault(); e.stopPropagation(); if (up) up(); };
    el.addEventListener('touchend', u, { passive: false }); el.addEventListener('touchcancel', u, { passive: false });
  };
  btn('t-jump', () => { if (race && !race.over) { press.jump = true; touch.jump = true; } }, () => { touch.jump = false; });
  btn('t-dive', () => { if (race && !race.over) press.dive = true; });
  btn('t-bat', () => { if (race && !race.over && !race.menuOpen) race.swing(); });
  btn('c-horn', () => { if (race) race.honk(); });
  btn('b-racer', () => { if (race) race.swapRacer(); });
  btn('b-car', () => { if (race) race.toggleCar(); }); btn('b-exit', () => { if (race) race.toggleCar(); });
  for (const id of ['b-car', 'b-exit', 'b-racer']) { const el = $(id); if (el) el.addEventListener('click', () => { if (race) (id === 'b-racer' ? race.swapRacer() : race.toggleCar()); el.blur(); }); }
})();
