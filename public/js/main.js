// Parkour Haris - main: renderer, menus, lobby, race session, HUD, input, networking glue.
import { stepSwing, newSwingState } from './swingsys.js';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { LEVEL_META, CHARACTERS, MAX_PLAYERS } from './levelmeta.js';
import { buildLevel } from './levels.js';
import { newBody, stepBody, knock, respawn } from './physics.js';
import { P } from './world.js';
import { Character, makeNameTag, makeBubble } from './characters.js';
import { VIS, ensureFont, harisTexture, arrowTexture, makeSky, makeWater, buildScenery, Particles, Ambient } from './scenery.js';
import * as A from './audio.js';
import { Net } from './net.js';
import { makePoolWater, makeCaustics } from './poolwater.js';
import { CAR_SPECS, newCar, stepCar, buildCarMesh, animateCar } from './car.js';
import { AnimalSys } from './animalsys.js';
import { TH, newThugs, stealThug, hitThug, stepThugs } from './thugs.js';
import { KINDS, active as animalTable } from './jlayout.js';
import { newQuest, stepQuest, questLayout, PH, Q as QC } from './quest.js';
import { QuestVis } from './questworld.js';
import { HuntVis } from './huntworld.js';
import { PH as HPH, HU, stepHunt, applyHunt, shootAnimal } from './hunt.js';
import { GUN, makeGun, pickTarget } from './huntgun.js';

const $ = (id) => document.getElementById(id);
const IS_TOUCH = (typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches) || ((typeof navigator !== 'undefined' && navigator.maxTouchPoints) || 0) > 0;
const touch = { x: 0, y: 0, jump: false, grab: false };
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
const app = { screen: 'title', mode: 'single', name: localStorage.getItem('ph_name') || '', char: +(localStorage.getItem('ph_char') || 0), level: 5, net: null, room: null, myId: null, pendingJoin: null, muted: false };
let race = null, stage = null, thumbs = [];
const best = (l) => +(localStorage.getItem('ph_best_' + l) || 0);

// ------------------------------------------------------------------ menu stage (3D scene behind menus)
class Stage {
  constructor() {
    const v = VIS.fun;
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
    this.ambient = new Ambient('fun', 160); this.scene.add(this.ambient.points);
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
    this.snaps = []; this.x = 0; this.y = -50; this.z = 0; this.yaw = Math.PI; this.speed = 0; this.flags = 0; this.vy = 0; this.vx = 0; this.vz = 0; this.sw = 0; this.ds = []; this.dMin = 0; this.jit = 0; this.rs = 0; this.has = false; this.finished = false; this.lastLanded = false; this.rxAt = Date.now(); this.stunT = 0;
  }
  push(m) {
    if (m.rs !== this.rs) { this.snaps.length = 0; this.rs = m.rs; }
    const last = this.snaps[this.snaps.length - 1];
    this.rxAt = Date.now();
    if (last && m.ts <= last.ts) { if (last.ts - m.ts < 400) return; this.snaps.length = 0; this.ds.length = 0; } // slightly late / duplicate: ignore; big jump back (their clock re-synced): start a fresh timeline
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
    this.speed = (b.a & 8192) ? 0 : lerp(a.sp, b.sp, clamp(k, 0, 1)); this.flags = b.a;
    if (Date.now() - this.rxAt > 700) { this.flags &= ~(2 | 4 | 16); this.speed = 0; } // their packets stopped (slow / hidden window): stand them up instead of freezing them lying down
    this.vy = s.length > 1 ? (b.y - a.y) / Math.max(0.02, (b.ts - a.ts) / 1000) : 0;
    const g = this.model.group;
    g.position.set(this.x, this.y, this.z); g.rotation.y = this.yaw;
    if (this.flags & 8192) { const ad = animalTable.defs[(this.flags >> 14) & 7]; if (ad) g.position.y += KINDS[ad.kind].seat; }
    // a lost packet must never leave somebody lying down forever on my screen: stun is at most ~1.2 s long
    if (this.flags & 2) this.stunT = (this.stunT || 0) + dt; else this.stunT = 0;
    if (this.stunT > 1.2) this.flags &= ~2;
    const grounded = !!(this.flags & 1);
    const landed = grounded && !this.lastLanded; this.lastLanded = grounded;
    this.sw = (this.flags & 16) ? Math.min(1, (this.sw || 0.001) + dt / 0.42) : 0;
    this.model.update(dt, { speed: this.speed, grounded, vy: this.vy, stun: this.flags & 2 ? 1 : 0, dive: this.flags & 4 ? 1 : 0, celebrate: !!(this.flags & 8), swing: this.sw, shield: !!(this.flags & 32), leader: !!this.leader, mega: !!(this.flags & 128), landed });
  }
  dispose(scene) { scene.remove(this.model.group); this.tag.material.map.dispose(); this.tag.material.dispose(); this.model.dispose(); }
}

// ------------------------------------------------------------------ the race
const keys = new Set();
const press = { jump: false, dive: false, grab: false };

const THUG_LINES = {
  steal: [['Hey! That is MY car!', 'अरे! ये मेरी गाड़ी है!'], ['Get your hands off my ride!', 'मेरी गाड़ी से हाथ हटा!'], ['You picked the wrong guy!', 'तूने गलत बंदा चुना!']],
  punch: [['Take this!', 'ले ये!'], ['Come here, thief!', 'इधर आ, चोर!'], ['I will smash you!', 'मैं तुझे कूट दूँगा!']],
  hurt: [['Ouch! That hurt!', 'आउच! दर्द हुआ!'], ['Not the face!', 'चेहरे पे नहीं!'], ['Aaaah! Stop it!', 'आहह! रुक जा!']],
  die: [['I will be back...', 'मैं वापस आऊँगा...'], ['Take the car... argh!', 'गाड़ी ले जा... आह!'], ['You win... this time!', 'तू जीता... इस बार!']],
};
class Race {
  constructor(levelIdx, players, localId, o) {
    this.level = levelIdx; this.meta = LEVEL_META[levelIdx]; this.multi = o.multi; this.localId = localId; this.players = players;
    this.t0 = o.t0; // multi: server ms ; single: performance.now() ms
    this.phase = 'countdown'; this.finished = false; this.over = false; this.finishTime = 0; this.finishedMap = new Map();
    this.camYaw = 0; this.camPitch = 0.34; this.camDist = 8.2; this.camPos = new THREE.Vector3(); this.camTarget = new THREE.Vector3(); this.camInit = false;
    this.sendT = 0; this.rs = 0; this.cpIdx = 0; this.cpCur = null; this.stepDist = 0; this.lastCount = 99; this.hudT = 0; this.hintT = 0; this.warnSec = -1;
    this.hang = null; this.hangCd = 0; this.hangHint = false; this.levelTime = -4; this.batCd = 0; this.swingT = 0; this.batPending = false; this.swingMega = false; this.fx = { turbo: 0, jump: 0, shield: 0, mega: 0 }; this.fxSig = '';

    const v = VIS[this.meta.key];
    const scene = this.scene = new THREE.Scene();
    scene.background = new THREE.Color(v.fog); scene.fog = new THREE.Fog(v.fog, v.fogNear, v.fogFar);
    scene.environment = envTex; scene.environmentIntensity = v.env;
    this.camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 1800);

    const { world, info } = buildLevel(levelIdx, false, arrowTexture(), o.seed || 1);
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
      this.applyFree();
      this.thugs = null; this.thv = []; if (this.meta.city) this.initThugs(info.cars);
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
    this.an = this.meta.free && !this.meta.arena && !this.meta.city ? new AnimalSys(this) : null; document.body.classList.toggle('free-map', !!this.meta.free);
    this.quest = this.meta.quest ? { q: newQuest(), vis: new QuestVis(world, info), L: questLayout() } : null; this.victory = 0; this.hopT = 0;
    this.hunt = this.meta.hunt ? { vis: new HuntVis(world, info, scene), h: info.hunt.st, L: info.hunt.L } : null; this.gunCd = 0; this.fireHeld = false;
    document.body.classList.toggle('hunt-map', !!this.hunt);
    if (this.hunt) { this.me.model.group.add(makeGun()); for (const r of this.remotes.values()) r.model.group.add(makeGun()); }
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
  // ---- Jungle Quest: state machine runs here (single player) or arrives from the server ('q' / 'qev')
  updateQuest(dt) {
    const Qs = this.quest, b = this.me.body;
    if (!this.multi && this.levelTime >= 0 && !this.over) {
      const evs = stepQuest(Qs.q, dt, [{ id: this.localId, x: b.x, y: b.y, z: b.z }], this.an.list, 1, Qs.L, []);
      for (const e of evs) this.questEvent(e);
    }
    Qs.vis.setState(Qs.q); Qs.vis.update(dt);
    if (this.victory > 0) { // everybody jumps for joy + confetti
      this.victory += dt; this.hopT -= dt;
      if (this.hopT <= 0 && b.grounded && !(this.an && this.an.mount)) { this.hopT = 0.7 + Math.random() * 0.3; b.vy = 9.5; b.grounded = false; }
      if (Math.random() < dt * 14) this.particles.emit(b.x + (Math.random() - 0.5) * 8, b.y + 7, b.z + (Math.random() - 0.5) * 8, 3, { color: ['#ff5fa8', '#ffd23f', '#4cc9f0', '#80ed99'][(Math.random() * 4) | 0], speed: 2.5, up: -1, life: 1.6, size: 0.4, gravity: 3, spread: 1 });
    }
  }
  questEvent(e) {
    const Qs = this.quest, L = Qs.L; Qs.vis.event(e);
    if (e.k === 'boulder') { const z = L.chapters[e.ch].boulderZ; A.sfx.roar(1); this.toast('THE BOULDER FALLS! A BEAST APPEARS - hit it with the BAT!'); this.particles.emit(0, 3, z, 60, { color: '#bdb6a8', speed: 8, up: 4, life: 1.2, size: 0.8, gravity: 4, spread: 1 }); }
    else if (e.k === 'gate') { A.sfx.tame(); this.toast(e.ch >= QC.CH - 1 ? 'BEAST BEATEN! Now free the DRAGON!' : 'BEAST BEATEN - the GATE opens! Next maze ahead...'); }
    else if (e.k === 'cage') { A.sfx.roar(1); this.toast('THE DRAGON IS FREE!'); }
    else if (e.k === 'victory') { this.victory = 0.001; A.sfx.go(); this.toast('VICTORY! YOU FREED THE DRAGON!'); }
  }
  questNet(m) { Object.assign(this.quest.q, { ch: m.ch, ph: m.ph, n: m.n, occ: m.occ || [], hold: m.hold || 0 }); }
  // ---- Jungle Hunt: the state machine runs here (single player) or arrives from the server ('h' / 'hev')
  updateHunt(dt) {
    const hu = this.hunt, b = this.me.body;
    if (this.gunCd > 0) this.gunCd -= dt;
    if (!this.multi && this.levelTime >= 0 && !this.over) {
      for (const e of stepHunt(hu.h, dt, [{ id: this.localId, x: b.x, y: b.y, z: b.z }], this.an.list, 1, hu.L, [])) this.huntEvent(e);
    }
    if (this.fireHeld || keys.has('KeyB') || touch.fire) this.fire();
    hu.vis.update(dt);
    if (hu.h.ph === HPH.DONE && Math.random() < dt * 14) this.particles.emit(b.x + (Math.random() - 0.5) * 8, b.y + 7, b.z + (Math.random() - 0.5) * 8, 3, { color: ['#ff5fa8', '#ffd23f', '#4cc9f0', '#80ed99'][(Math.random() * 4) | 0], speed: 2.5, up: -1, life: 1.6, size: 0.4, gravity: 3 });
  }
  huntEvent(e) {
    const hu = this.hunt; hu.vis.event(e);
    if (e.k === 'wave') { A.sfx.roar(1); this.toast(`CHAPTER ${e.ch + 1}: ${e.n} BEASTS! SHOOT THEM ALL!`); }
    else if (e.k === 'gate') { A.sfx.tame(); this.toast('ALL BEASTS DOWN! THE GATE OPENS - now the MACHINE...'); }
    else if (e.k === 'door') { A.sfx.door(); this.toast('THE GEARS TURN - THE HEAVY DOOR RISES!'); }
    else if (e.k === 'lift') { A.sfx.tame(); this.toast('TOP OF THE CLIFF! Friends: ride up too!'); }
    else if (e.k === 'freeze') this.toast(e.on ? 'CRUSHERS RETRACTED - RUN! (keep the plate held)' : 'The crushers are back!');
    else if (e.k === 'armed') this.toast(e.on ? 'CANNON ARMED - jump on the orange pad!' : 'Cannon off - a friend must stand on a blue plate');
    else if (e.k === 'pump') { A.sfx.pickup(); this.hunt.vis.pumpK = Math.max(0, e.v - 0.2); }
    else if (e.k === 'bridge') { A.sfx.tame(); this.toast('THE BRIDGE RISES!'); }
    else if (e.k === 'note') { A.sfx.pickup(); this.toast(`\u266a ${e.step}/4`); }
    else if (e.k === 'wrong') { A.sfx.hit && A.sfx.hit(); this.toast('WRONG PAD - start again!'); }
    else if (e.k === 'solved') { A.sfx.tame(); this.toast('RIDDLE SOLVED - THE DOOR OPENS!'); }
    else if (e.k === 'chapter') { A.sfx.go(); this.toast(`CHAPTER ${e.ch + 1}!`); }
    else if (e.k === 'end') { A.sfx.go(); this.toast('VICTORY! YOU BEAT THE JUNGLE HUNT!'); }
  }
  huntNet(m) { applyHunt(this.hunt.h, m); }
  huntObjective() { // plain-words instruction for what the team must do right now
    const h = this.hunt.h, m = h.m[h.ch], solo = h.n < 2;
    if (h.ph === HPH.DONE) return 'YOU WIN! Great teamwork!';
    if (h.ph === HPH.WAIT) return h.ch === 0 ? 'Walk forward along the road. HOLD CLICK (or FIRE) to shoot beasts.' : 'Keep going down the road.';
    if (h.ph === HPH.BEAST) return `Shoot ALL the beasts (${h.left} left) - hold CLICK / FIRE. The gate opens when they are gone.`;
    switch (h.ch) {
      case 0: return `Everybody stand on a glowing plate (${(h.occ || []).filter((v) => v).length}/${h.n}) and wait 1 second.`;
      case 1: return solo ? 'Step on the wooden lift and ride up to the cliff top.' : 'Ride the lift up! If it will not rise, a friend must stand on the blue pan.';
      case 2: return solo ? 'Wait until a beam lifts, then run through the crushers.' : m.wa ? 'Crushers are stopped - everybody RUN! Last one: stand on the far plate first.' : 'One friend stands on the yellow plate to stop the crushers. Others run through and hold the far plate.';
      case 3: return solo ? 'Jump on the orange pad - the cannon throws you over the canyon.' : m.wa ? 'Cannon ready - jump on the orange pad! Then stand on the far blue plate for the last friend.' : 'A friend stands on a blue plate to fire the cannon. Others jump on the orange pad.';
      case 4: return m.done ? 'The bridge is up - cross it!' : `Step on the LEFT plate, then the RIGHT plate, again and again to pump (${Math.round(m.v * 100)}%). Hop in turns with a friend!`;
      default: return m.done ? 'Riddle solved - the door is open!' : `Watch the flashing pads, then stand on them in the SAME order (${Math.round(m.v)}/4). Wrong pad = start again.`;
    }
  }
  huntHud() {
    const h = this.hunt.h, c = `Ch ${h.ch + 1}/${HU.CH}`;
    if (h.ph === HPH.WAIT) return `${c} \u2022 GO ON!`;
    if (h.ph === HPH.BEAST) return `${c} \u2022 BEASTS LEFT: ${h.left}`;
    if (h.ph === HPH.MACH) {
      const m = h.m[h.ch];
      if (h.ch === 0) return `${c} \u2022 PLATES ${(h.occ || []).filter((v) => v).length}/${h.n}`;
      if (h.ch === 1) return `${c} \u2022 COUNTERWEIGHT LIFT`;
      if (h.ch === 2) return `${c} \u2022 CRUSHERS ${m.wa ? '(HELD!)' : '- hold a plate'}`;
      if (h.ch === 3) return `${c} \u2022 CANNON ${m.wa ? 'READY!' : '- friend on a blue plate'}`;
      if (h.ch === 4) return `${c} \u2022 PRESSURE ${Math.round(m.v * 100)}%`;
      return `${c} \u2022 PADS ${m.done ? 'SOLVED' : Math.round(m.v) + '/4'}`;
    }
    return 'THE END (for now)';
  }
  fire() {
    const hu = this.hunt; if (!hu || this.over || this.levelTime < 0 || this.menuOpen || this.drive || this.gunCd > 0) return;
    const b = this.me.body; if (b.stun > 0) return;
    this.gunCd = GUN.rate;
    const fy = this.camYaw + Math.PI, a = pickTarget(this.an.list, b, fy), yaw = a ? Math.atan2(a.x - b.x, a.z - b.z) : fy;
    b.yaw = yaw;
    const r1 = (v) => +v.toFixed(1), ox = b.x + Math.sin(yaw) * 0.95 + Math.cos(yaw) * 0.36, oy = b.y + 1.2, oz = b.z + Math.cos(yaw) * 0.95 - Math.sin(yaw) * 0.36;
    let tx, ty, tz;
    if (a) { const K = KINDS[a.kind]; tx = a.x; ty = a.y + K.seat * 0.55; tz = a.z; } else { tx = ox + Math.sin(yaw) * 32; ty = oy; tz = oz + Math.cos(yaw) * 32; }
    hu.vis.tracer(ox, oy, oz, tx, ty, tz); A.sfx.shot();
    this.particles.emit(ox, oy, oz, 5, { color: '#ffe27a', speed: 3, up: 1, life: 0.2, size: 0.25 });
    if (a) this.particles.emit(tx, ty, tz, 8, { color: '#ff6b3d', speed: 4, up: 2, life: 0.3, size: 0.3 });
    if (this.multi) this.sendNet({ t: 'shoot', id: a ? a.id : -1, ox: r1(ox), oy: r1(oy), oz: r1(oz), tx: r1(tx), ty: r1(ty), tz: r1(tz) });
    else if (a) this.an.handle(shootAnimal(a, this.localId));
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
      if (this.cars.length) setTimeout(() => { if (race === this && !this.over && !this.drive) this.toast(this.meta.city ? '\uD83D\uDE97 Welcome to HARIS CITY! Vehicles are parked on the main street with THUGS inside - stand next to one and press C to STEAL it!' : '\uD83D\uDE97 Follow the CAR STATION signs to drive!'); }, this.multi ? 4200 : 1600);
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

    // a bonk can never keep you down: stun is always <1 s, even while driving (stepBody is not run then) or after a long frame
    if (this.drive && b.stun > 0) b.stun = Math.max(0, b.stun - dt);
    if (b.stun > 0) { this.stunReal = (this.stunReal || 0) + dt; if (this.stunReal > 1.25) { b.stun = 0; b.immune = 0.6; this.stunReal = 0; } } else this.stunReal = 0;
    const steps = Math.max(1, Math.ceil(dt / (1 / 90))), sdt = dt / steps;
    let landed = false;
    w.nearPlayers = [b, ...[...this.remotes.values()]];
    const hanging = this.updateSwing(dt, lt, b, inp, canMove);
    if (this.drive) { this.updateDrive(dt, canMove); b.events.length = 0; }
    else if (hanging) { b.events.length = 0; }
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
    else { g.position.set(b.x, b.y, b.z); g.rotation.y = b.yaw; g.rotation.x = swimK * 0.55 * clamp(Math.hypot(b.vx, b.vz) / 3, 0.25, 1); g.scale.setScalar(1); if (this.an) this.an.seatLocal(g); }
    m.update(dt, { speed: this.drive || (this.an && this.an.mount) ? 0 : Math.hypot(b.vx, b.vz), grounded: this.drive || swimK > 0 ? true : (b.grounded && !this.hang), vy: this.drive ? 0 : b.vy, stun: this.drive ? 0 : b.stun, dive: this.drive ? 0 : b.dive, celebrate: this.finished || (this.over && this.winnerSelf) || this.victory > 0, swing: this.swingT, shield: b.shield > 0, leader: this.leaderId === this.localId, mega: this.swingMega && this.swingT > 0, landed });
    this.tagScale(this.me.tag, g.position, 0.85);

    // ---- remotes
    if (this.multi) {
      this.leaderId = this.findLeader();
      for (const r of this.remotes.values()) {
        r.leader = r.id === this.leaderId; r.update(r.snaps.length ? r.renderTime() : 0, dt); this.tagScale(r.tag, r.model.group.position, 1);
        if ((r.flags & 64) && Math.random() < 0.6) this.particles.emit(r.x, r.y + 0.3, r.z, 1, { color: '#5fc2ff', speed: 1, up: 0.5, life: 0.35, size: 0.35 });
      }
      this.sendT += dt;
      if (this.sendT >= 0.033) this.sendSnap();
    }

    this.updateCars(dt, canMove);
    if (this.an) this.an.update(dt);
    if (this.quest) this.updateQuest(dt);
    if (this.hunt) this.updateHunt(dt);


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
  nearestFreeCar(b, steal) { // steal=true: look for a vehicle that still has a thug sitting in it
    if (b.stun > 0 || (b.y > 1.5 && !this.world.terrain) || b.swim > 0.3) return null;
    let best = null, bd = 4.6;
    for (const c of this.cars) { const occ = !!(this.thugs && this.thugs[this.cars.indexOf(c)].st === TH.SEAT); if (occ !== !!steal) continue; if (c.st.driver !== -1 && c !== this.drive) continue; if (CAR_SPECS[c.st.id].racer && !this.racerOk) continue; if (Math.abs(b.y - c.st.y) > 3) continue; const d = Math.hypot(b.x - c.st.x, b.z - c.st.z); if (d < bd) { bd = d; best = c; } }
    return best;
  }
  toggleCar() {
    if (this.an) { this.an.toggleMount(); return; }
    if (this.over || this.finished || this.levelTime < 0 || this.menuOpen || !this.cars.length) return;
    const b = this.me.body;
    if (this.drive) { // get out
      const c = this.drive, st = c.st;
      if (Math.abs(st.speed) > 5) { this.toast('Slow down to get out!'); return; }
      if (st.y > 1.2 && !this.world.terrain) { this.toast(this.racerOk ? 'Not up here - stop on the RACER GARAGE plaza to swap cars' : 'Finish the SKY SPEEDWAY to win a RACER!'); return; }
      const lx = Math.cos(st.yaw), lz = -Math.sin(st.yaw);
      respawn(b, st.x + lx * 2.4, this.world.terrain ? this.world.terrain(st.x + lx * 2.4, st.z + lz * 2.4) + 0.05 : 0.05, st.z + lz * 2.4, st.yaw); b.hitCd = 0.3;
      st.vx = st.vz = st.speed = 0; st.driver = -1; st.parked = true; this.drive = null;
      document.body.classList.remove('driving'); A.engineStop(); A.sfx.door();
      this.g_g(this.me.model.group);
      if (this.multi) app.net.send({ t: 'carpark', c: this.cars.indexOf(c), x: +st.x.toFixed(2), y: +st.y.toFixed(2), z: +st.z.toFixed(2), r: +st.yaw.toFixed(3) });
      this.camYaw = st.yaw + Math.PI; this.camInit = false;
    } else {
      const c = this.nearestFreeCar(b);
      if (!c) { const sc = this.thugs && this.nearestFreeCar(b, true); if (sc) this.stealCar(sc); return; }
      this.drive = c; c.st.driver = this.localId; c.st.parked = false;
      b.vx = b.vz = b.vy = 0; b.grounded = true; document.body.classList.add('driving'); document.body.classList.remove('near-car'); document.body.classList.remove('near-swing');
      A.engineStart(); A.sfx.door(); A.sfx.vroom(); this.camPitch = 0.3; this.camYaw = c.st.yaw + Math.PI;
      this.toast(CAR_SPECS[c.st.id].name.toUpperCase() + '!  ' + (IS_TOUCH ? 'use the joystick to drive, tap the door to get out' : 'W/S drive • A/D steer • C get out'));
    }
  }
  g_g(g) { g.scale.setScalar(1); g.rotation.x = 0; }
  // ================= HARIS CITY THUGS (cartoon drivers: steal the ride, they fight, bat them down) =================
  initThugs(cars) {
    this.thugs = newThugs(cars); this.thSt = this.thugs.map(() => ({ st: 0, hp: TH.HP }));
    this.thv = this.thugs.map((t) => {
      const m = new Character(t.ch), tag = makeNameTag('THUG', '#ff4040'); tag.position.set(0, m.height + 0.6, 0); m.group.add(tag); this.scene.add(m.group);
      return { m, tag, x: t.x, y: t.y, z: t.z, yaw: t.yaw, sw: 0, hit: 0 };
    });
  }

  thugSay(i, kind) { // speech bubble: English + Hindi translation
    const L = THUG_LINES[kind], v = this.thv[i]; if (!L || !v || v.say > 0 && kind !== 'die') return;
    const [en, hi] = L[Math.floor(Math.random() * L.length)];
    if (v.bub) { v.m.group.remove(v.bub); v.bub.material.map.dispose(); v.bub.material.dispose(); }
    v.bub = makeBubble(en, hi); v.bub.position.set(0, v.m.height + 1.9, 0); v.m.group.add(v.bub); v.say = kind === 'die' ? 2.4 : 2.0;
    { const d = v.m.group.position.distanceTo(this.camera.position); A.speakHindi(hi, this.thugs[i].ch, 1 - d / 60); }
  }
  stealCar(c) {
    const v = this.cars.indexOf(c), t = this.thugs[v], b = this.me.body;
    if (this.multi) { if (this.thugs[v].st === TH.SEAT) app.net.send({ t: 'steal', v }); }
    else stealThug(this.thugs, v, this.localId, b.x, b.z, t.x, t.z);
    A.sfx.door(); this.toast('\uD83D\uDE20 THE DRIVER JUMPS OUT! Hit him with the bat (' + (IS_TOUCH ? 'bat button' : 'F / click') + ') then take the ride!');
  }
  batThugs(b, fx, fz) {
    if (!this.thugs) return;
    let best = -1, bd = 1e9;
    this.thugs.forEach((t, i) => { if (t.st !== TH.FIGHT) return; const d = Math.hypot(t.x - b.x, t.z - b.z); if (d < (this.swingMega ? 4.8 : 3.4) && d < bd && Math.abs(t.y - b.y) < 2.2 && ((t.x - b.x) * fx + (t.z - b.z) * fz) / (d || 1) > 0) { bd = d; best = i; } });
    if (best < 0) return;
    if (this.multi) app.net.send({ t: 'thit', v: best, fx: +fx.toFixed(3), fz: +fz.toFixed(3), m: this.swingMega ? 1 : 0 });
    else hitThug(this.thugs, best, b.x, b.z, fx, fz, this.swingMega);
    A.sfx.bonk();
  }
  onThugNet(a) { if (!this.thugs || !Array.isArray(a)) return; a.forEach((q, i) => { const t = this.thugs[i]; if (!t || !Array.isArray(q)) return; t.st = q[0]; t.hp = q[1]; t.x = q[2]; t.y = q[3]; t.z = q[4]; t.yaw = q[5]; t.mv = q[6] & 1; t.stun = q[6] & 2 ? 1 : 0; }); }
  onThugEv(m) { // a thug swung at somebody
    const v = this.thv && this.thv[m.v | 0]; if (v) v.sw = 0.4; if (v) this.thugSay(m.v | 0, 'punch');
    if (m.pid === this.localId) this.onThugHit(m);
  }
  onThugHit(m) {
    const b = this.me.body; if (this.over || this.drive || this.levelTime < 0) return;
    if (b.shield > 0) { this.toast('SHIELD BLOCKED!'); A.sfx.pickup(); return; }
    if (b.immune > 0 || b.stun > 0.2) return;
    b.hitCd = 0;
    if (knock(b, m.nx, m.nz, 13)) { b.vy = 7; b.stun = 0.6; this.bonked('POW!', '', b); this.shake = Math.max(this.shake || 0, 0.7); }
  }
  updateThugs(dt) {
    const b = this.me.body;
    if (!this.multi) {
      for (const e of stepThugs(this.thugs, dt, [{ id: this.localId, x: b.x, y: b.y, z: b.z }], this.world.terrain)) if (e.k === 'hit') this.onThugEv(e);
    }
    this.thugs.forEach((t, i) => {
      const v = this.thv[i], prev = this.thSt[i], g = v.m.group;
      if (prev.st !== t.st || prev.hp !== t.hp) { // something happened to him: effects
        if (t.st === TH.DEAD && prev.st !== TH.DEAD) { v.dieT = 1.5; this.thugSay(i, 'die'); this.toast('THUG DOWN!  The ride is yours'); }
        else if (t.hp < prev.hp) { this.particles.emit(t.x, t.y + 1.2, t.z, 18, { color: '#ffd23f', speed: 6, up: 3, life: 0.45, size: 0.3 }); A.sfx.bonk(); this.thugSay(i, 'hurt'); }
        else if (t.st === TH.FIGHT && prev.st === TH.SEAT) { v.x = t.x; v.y = t.y; v.z = t.z; v.yaw = t.yaw; this.thugSay(i, 'steal'); }
        prev.st = t.st; prev.hp = t.hp;
      }
      if (v.say > 0) { v.say -= dt; if (v.say <= 0 && v.bub) { g.remove(v.bub); v.bub.material.map.dispose(); v.bub.material.dispose(); v.bub = null; } }
      if (t.st === TH.DEAD) { // let him say his last words, then poof
        if (v.dieT > 0) { v.dieT -= dt; if (v.dieT <= 0) { this.particles.emit(v.x, v.y + 1, v.z, 40, { color: '#ffffff', speed: 7, up: 5, life: 0.8, size: 0.5 }); this.particles.emit(v.x, v.y + 1, v.z, 20, { color: '#ffd23f', speed: 5, up: 6, life: 0.7, size: 0.35 }); A.sfx.win && A.sfx.win(); } }
        if (!(v.dieT > 0)) { g.visible = false; return; }
      }
      g.visible = true; v.sw = Math.max(0, v.sw - dt);
      if (t.st === TH.SEAT) { const c = this.cars[i]; this.seatModel(g, c); v.m.update(dt, { speed: 0, grounded: true, vy: 0, stun: 0, dive: 0 }); }
      else {
        const k = this.multi ? Math.min(1, dt * 12) : 1;
        v.x += (t.x - v.x) * k; v.y += (t.y - v.y) * k; v.z += (t.z - v.z) * k; { let dy = t.yaw - v.yaw; dy = ((dy + Math.PI * 3) % (Math.PI * 2)) - Math.PI; v.yaw += dy * Math.min(1, dt * 10); }
        g.position.set(v.x, v.y, v.z); g.rotation.y = v.yaw; this.g_g(g);
        v.m.update(dt, { speed: t.mv ? 7 : 0, grounded: true, vy: 0, stun: t.stun > 0 ? 1 : 0, dive: 0, swing: v.sw > 0 ? 1 - v.sw / 0.4 : 0 });
      }
      this.tagScale(v.tag, g.position, 0.85);
    });
  }

  // ---- SKY SPEEDWAY: gates in order -> RACERS unlocked; swap into a red racer on the garage plaza
  skyGates(st) {
    const sk = this.info.sky; if (!sk || st.y < sk.y - 4 || this.skyG >= sk.gates.length) return;
    const i = this.skyG, g = sk.gates[i], alongX = i === 1;
    if (Math.abs(st.x - g.x) < (alongX ? 4 : g.w) && Math.abs(st.z - g.z) < (alongX ? g.w : 4)) {
      this.skyG++; A.sfx.checkpoint();
      this.particles.emit(st.x, st.y + 1.5, st.z, 24, { color: i === sk.gates.length - 1 ? '#ff3b3b' : '#7cff3d', speed: 6, up: 5, life: 0.8, size: 0.4 });
      if (i === sk.gates.length - 1) {
        this.racerOk = true; this.applyFree(); try { localStorage.setItem('ph_racer', '1'); } catch { /* ignore */ }
        A.sfx.win(); this.toast('\uD83C\uDFC1 SKY SPEEDWAY CLEARED! RED RACERS UNLOCKED & the sky road is now obstacle-free! Stop on the RACER GARAGE plaza and press ' + (IS_TOUCH ? 'the red car button' : 'R'));
      } else this.toast('SKY GATE ' + (i + 1) + ' / ' + (sk.gates.length - 1) + '  \u2713');
    }
  }
  // once you own the racers the sky road is an obstacle-free speedway for you (your own copy of the world: obstacles hidden + switched off)
  applyFree() { if (this.info.track) this.info.track.free = !!this.racerOk; if (this.world && this.world.skyObst) this.world.skyObst.visible = !this.racerOk; }
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
    if (this.thugs) this.updateThugs(dt);
    // "get in" prompt
    const near = !this.an && !this.drive && canMove && !this.menuOpen && (this.nearestFreeCar(b) || (this.thugs && this.nearestFreeCar(b, true)));
    if (!this.an && !!near !== document.body.classList.contains('near-car')) document.body.classList.toggle('near-car', !!near);
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
      if (!r.has || (r.flags & 8) || Date.now() - r.rxAt > 500) continue; // never collide with a ghost whose packets stopped
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

  // position snapshot to the other players (also called from a background timer so a slow / hidden window never freezes on everybody else's screen)
  // ---------- grab-swings (Maze): HOLD to hang on the handle, JUMP (or let go of the button) to let go
  updateSwing(dt, lt, b, inp, canMove) {
    const w = this.world, sws = w.swings;
    if (!sws || !sws.length) return false;
    const S = this.swSt || (this.swSt = newSwingState());
    let nd = 1e9; for (const sw of sws) nd = Math.min(nd, Math.hypot(sw.x - b.x, (sw.y - sw.len * 0.6) - b.y, sw.z - b.z));
    const close = (!!S.hang || nd < sws[0].len + 7) && !this.drive && !this.over;
    if (close !== document.body.classList.contains('near-swing')) document.body.classList.toggle('near-swing', close);
    if (close && !this.hangHint) { this.hangHint = true; this.toast(IS_TOUCH ? 'Tap GRAB when the swing is close - tap JUMP to let go!' : 'Press G to grab the swing - press SPACE to let go!'); }
    const was = !!S.hang, held = keys.has('KeyG') || touch.grab, jump = inp.jumpPressed, pr = press.grab; press.grab = false;
    const hang = stepSwing(w, b, S, lt, dt, held && !this.drive, jump, canMove, pr && !this.drive);
    if (!!S.hang !== !!this.hangLbl) { this.hangLbl = !!S.hang; const em = document.querySelector('#b-grab em'); if (em) em.textContent = S.hang ? 'JUMP TO LET GO' : 'GRAB'; }
    if (!was && S.hang) { A.sfx.land(6); this.particles.emit(b.x, b.y + 1.6, b.z, 10, { color: '#ffffff', speed: 3, up: 2, life: 0.4, size: 0.25 }); }
    if (was && !S.hang) { A.sfx.jump && A.sfx.jump(); inp.jumpPressed = false; press.jump = false; }
    this.hang = S.hang; if (hang) { inp.jumpPressed = false; press.jump = false; b.stunReal = 0; this.stunReal = 0; }
    return hang;
  }

  sendSnap() {
    const b = this.me.body; this.sendT = 0; this.lastSend = performance.now();
    const flags = (b.grounded ? 1 : 0) | (b.stun > 0 ? 2 : 0) | (b.dive > 0 ? 4 : 0) | (this.finished ? 8 : 0) | (this.swingT > 0 ? 16 : 0) | (b.shield > 0 ? 32 : 0) | (this.fx.turbo > 0 ? 64 : 0) | (this.swingMega && this.swingT > 0 ? 128 : 0) | (this.drive ? 256 | (this.drive.st.id << 9) : 0) | (this.an ? this.an.flagBits() : 0) | (b.swim > 0.4 && !this.drive ? 4096 : 0) | (this.hang ? 1048576 : 0);
    app.net.send({ t: 's', x: +b.x.toFixed(2), y: +b.y.toFixed(2), z: +b.z.toFixed(2), r: +b.yaw.toFixed(2), a: flags, sp: +Math.min(99, Math.hypot(b.vx, b.vz)).toFixed(1), ts: app.net.stamp(), rs: this.rs });
  }

  // ---- baseball bat (multiplayer): pushes rivals away, never kills
  swing() {
    if (this.hunt) return false;
    if (!(this.multi || this.meta.free) || this.over || this.finished || this.levelTime < 0 || this.batCd > 0 || (this.an && this.an.mount)) return false;
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
    if (this.an) this.an.batHit(b);
    const fx = Math.sin(b.yaw), fz = Math.cos(b.yaw);
    if (this.thugs) this.batThugs(b, fx, fz);
    for (const r of this.remotes.values()) {
      if (!r.has || (r.flags & 8) || Date.now() - r.rxAt > 800) continue;
      const dx = r.x - b.x, dz = r.z - b.z, dy = r.y - b.y, d = Math.hypot(dx, dz);
      if (d > (this.swingMega ? 4.4 : 2.9) || Math.abs(dy) > 1.7 || d < 1e-3) continue;
      if ((dx * fx + dz * fz) / d < 0.1) continue;                        // must be in front of me
      let nx = fx * 0.7 + (dx / d) * 0.3, nz = fz * 0.7 + (dz / d) * 0.3; const l = Math.hypot(nx, nz) || 1; nx /= l; nz /= l;
      app.net.send({ t: 'bat', to: r.id, nx: +nx.toFixed(3), nz: +nz.toFixed(3), p: this.swingMega ? 2 : 1, ax: +b.x.toFixed(1), az: +b.z.toFixed(1) });
      A.sfx.bonk(); this.toast('BONK!  \u2022 ' + (r.name || ''));
      this.particles.emit(r.x, r.y + 1, r.z, 24, { color: '#ffd23f', speed: 7, up: 4, life: 0.5, size: 0.3 });
      this.particles.emit(r.x, r.y + 1, r.z, 14, { color: '#ffffff', speed: 5, up: 3, life: 0.4, size: 0.25 });
    }
  }
  sendNet(o) { if (this.multi) app.net.send(o); }
  onAnimalBite(m) { // a wild animal lunged at ME (knock-back + short stun, never hurts)
    const b = this.me.body; if (this.over || this.levelTime < 0) return;
    if (b.shield > 0) { this.toast('SHIELD BLOCKED!'); A.sfx.pickup(); return; }
    const big = m.big ? 1 : 0, nm = (this.an && this.an.list[m.id]) ? KINDS[this.an.list[m.id].kind] : null;
    if (b.immune > 0 || b.stun > 0.2) return;
    b.hitCd = 0;
    if (knock(b, m.nx, m.nz, big ? 21 : 15)) { b.vy = big ? 10 : 8; b.stun = big ? 0.9 : 0.7; this.bonked(nm ? nm.sound : 'GRRR!', '', b); this.shake = Math.max(this.shake || 0, 0.8); }
  }
  onShove(m) { // somebody is running into ME: move out of their way (a shield makes you immovable)
    const b = this.me.body; if (this.over || this.finished || this.levelTime < 0 || b.shield > 0) return;
    const p = clamp(+m.p || 0, 0, 12), nx = +m.nx, nz = +m.nz; if (!Number.isFinite(nx) || !Number.isFinite(nz)) return;
    b.x += nx * p * 0.05; b.z += nz * p * 0.05; b.vx += nx * p * 0.12; b.vz += nz * p * 0.12;
  }
  onBat(m) { // somebody hit ME
    const b = this.me.body; if (this.over || this.finished || this.levelTime < 0) return;
    const who = (this.players.find((p) => p.id === m.from) || {}).name || '';
    if (b.immune > 0 || b.stun > 0.2) return; // already flying / just recovered
    if (Number.isFinite(m.ax) && Number.isFinite(m.az) && Math.hypot(m.ax - b.x, m.az - b.z) > 7) return; // I had already run away from where they swung: no phantom hits
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
    b.speedMul = (f.turbo > 0 ? 1.4 : 1) * (this.an ? this.an.speedK() : 1); b.jumpMul = f.jump > 0 ? 1.3 : 1; b.shield = f.shield;
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
    if (this.an && this.an.mount) dist += this.an.camLift() * 1.1;
    const tx = b.x, ty = b.y + (this.drive ? 1.1 : 1.35) + (this.an ? this.an.camLift() * 0.7 : 0), tz = b.z;
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
    { const one = !this.multi && !this.meta.free; $('hud-hint').classList.toggle('single', one); document.body.classList.toggle('single', one); }
    if (this.hunt) { const o = $('hud-obj'), t = this.huntObjective(); o.classList.remove('hidden'); if ($('hud-obj-t').textContent !== t) $('hud-obj-t').textContent = t; } else $('hud-obj').classList.add('hidden');
    $('hud-rank').textContent = this.meta.city ? 'Haris City' : this.meta.arena ? `${this.players.length} in the room` : this.quest ? this.questHud() : this.hunt ? this.huntHud() : this.an ? `\u2665 ${this.an.petCount()} pet${this.an.petCount() === 1 ? '' : 's'}` : this.multi ? ord(this.rank()) + ' / ' + this.players.length : `${Math.max(0, Math.round(clamp(-this.me.body.z / -this.info.finishZ, 0, 1) * 100))}%`;
    const total = -this.info.finishZ;
    const set = (id, z) => { const d = this.dots.get(id); if (d) d.style.left = (clamp(-z / total, 0, 1) * 100) + '%'; };
    set(this.localId, this.me.body.z);
    for (const r of this.remotes.values()) set(r.id, r.has ? r.z : 0);
    const hint = $('click-hint'), want = !this.over && !this.menuOpen && document.pointerLockElement !== canvas;
    if (want !== hint.classList.contains('show')) hint.classList.toggle('show', want);
    { const tb2 = $('t-bat'); if (tb2) tb2.classList.toggle('cd', this.batCd > 0); }
    if (this.multi) $('hud-net').textContent = `ping ${Math.round(app.net.rtt)} ms`;
  }

  questHud() {
    const q = this.quest.q, occ = (q.occ || []).filter((v) => v).length;
    if (q.ph === PH.MAZE) return `Ch ${q.ch + 1}/${QC.CH} \u2022 Circles ${occ}/${q.n}`;
    if (q.ph === PH.BEAST) return `Ch ${q.ch + 1}/${QC.CH} \u2022 BEAT THE BEAST!`;
    if (q.ph === PH.DRAGON) return `DRAGON \u2022 Circles ${occ}/${q.n}`;
    return q.ph === PH.WIN ? 'VICTORY!' : 'FREE!';
  }

  render() { renderer.render(this.scene, this.camera); }

  destroy() {
    A.stopMusic(); A.engineStop(); { const uw = $('uw'); if (uw) uw.classList.remove('on'); } document.body.classList.remove('sky-swap'); document.body.classList.remove('driving'); document.body.classList.remove('near-car'); document.body.classList.remove('near-swing');
    if (this.hunt) this.hunt.vis.dispose(); document.body.classList.remove('hunt-map'); if (this.an) this.an.dispose(); document.body.classList.remove('free-map'); document.body.classList.remove('riding');
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
  let num = 0;
  LEVEL_META.forEach((m) => {
    if (m.hidden) return; num++;
    const d = document.createElement('div'); d.className = 'card'; d.dataset.id = m.id;
    d.style.background = `linear-gradient(160deg, ${m.colors[0]}cc, ${m.colors[1]}cc)`;
    const b = best(m.id);
    d.innerHTML = `<div><h4>${num}. ${m.name}</h4><div class="stars">${'★'.repeat(m.stars)}${'☆'.repeat(5 - m.stars)}</div></div><div class="blurb">${m.blurb}</div><div class="meta">${m.sub} &bull; no time limit${b ? ' &bull; best ' + fmtT(b) : ''}</div>`;
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
  race = new Race(levelIdx, [{ id: 1, name: app.name, char: app.char }], 1, { multi: false, t0: performance.now() + 3600, seed: 1 + Math.floor(Math.random() * 1e9) });
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
  net.on('an', (m) => { if (race && race.an) race.an.onNet(m); });
  net.on('aev', (m) => { if (race && race.an) race.an.onEvent(m); });
  net.on('h', (m) => { if (race && race.hunt) race.huntNet(m); });
  net.on('hev', (m) => { if (race && race.hunt) race.huntEvent(m); });
  net.on('shot', (m) => { if (race && race.hunt && [m.ox, m.oy, m.oz, m.tx, m.ty, m.tz].every(Number.isFinite)) { race.hunt.vis.tracer(m.ox, m.oy, m.oz, m.tx, m.ty, m.tz); A.sfx.shot(); } });
  net.on('q', (m) => { if (race && race.quest) race.questNet(m); });
  net.on('qev', (m) => { if (race && race.quest) race.questEvent(m); });
  net.on('abite', (m) => { if (race && race.an) race.onAnimalBite(m); });
  net.on('carpark', (m) => { if (race && race.multi) race.onCars({ [m.c]: m }); });
  net.on('cars', (m) => { if (race && race.multi) race.onCars(m.cars); else app.pendingCars = m.cars; });
  net.on('th', (m) => { if (race && race.multi) race.onThugNet(m.a); });
  net.on('thev', (m) => { if (race && race.multi) race.onThugEv(m); });
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
    if (m.phase === 'lobby' && app.screen !== 'lobby') { race.destroy(); race = null; exitLock(); renderLobby(); show('lobby'); A.startMusic(99); }
    else if (app.screen === 'results') { const host = m.hostId === app.myId; if (app.resMode === 'multi') { $('b-res-next').textContent = host ? 'BACK TO LOBBY' : 'WAITING FOR HOST...'; $('b-res-next').disabled = !host; } }
    return;
  }
  if ((first || app.screen === 'mp' || app.screen === 'profile' || app.screen === 'title') && (m.phase === 'lobby' || m.phase === 'results')) { show('lobby'); A.startMusic(99); }
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
  race = new Race(m.level, players, app.myId, { multi: true, t0: m.t0, seed: m.seed });
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
canvas.addEventListener('mousedown', (e) => { dragging = true; if (race && !race.over) { if (e.button === 0 && race.hunt && document.pointerLockElement === canvas && !race.menuOpen) race.fireHeld = true; else if (e.button === 0 && race.multi && document.pointerLockElement === canvas && !race.menuOpen) race.swing(); else tryLock(); } });
window.addEventListener('mouseup', () => { dragging = false; if (race) race.fireHeld = false; });
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
  if (e.code === 'KeyG') press.grab = true;
  if (e.code === 'KeyB' && race && !race.menuOpen) { if (race.hunt) race.fire(); else race.swing(); }
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

  $('b-single').onclick = () => { A.initAudio(); A.startMusic(99); A.sfx.click(); openProfile('single'); };
  $('b-multi').onclick = () => { A.initAudio(); A.startMusic(99); A.sfx.click(); openProfile('multi'); };
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
  let last = performance.now(), bgLast = performance.now();
  // keeps the game (and our position packets) alive when this window is hidden / behind another one (e.g. two windows on one PC): a worker timer is not throttled
  try {
    const wk = new Worker(URL.createObjectURL(new Blob(['setInterval(()=>postMessage(0),50)'], { type: 'text/javascript' })));
    wk.onmessage = () => {
      if (!race || !race.multi || race.paused) return;
      const nw = performance.now();
      if (nw - bgLast > 200) { const dt = Math.min(0.25, (nw - bgLast) / 1000); bgLast = nw; last = nw; race.update(dt); } // frames stopped: advance the game from here
      else if (nw - (race.lastSend || 0) > 100) race.sendSnap();
    };
  } catch { /* no workers: fine */ }
  const loop = (now) => {
    requestAnimationFrame(loop);
    const dt = Math.min(0.1, (now - last) / 1000); last = now; bgLast = performance.now();
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
  btn('t-fire', () => { touch.fire = true; if (race && !race.over && !race.menuOpen) race.fire(); }, () => { touch.fire = false; });
  btn('t-bat', () => { if (race && !race.over && !race.menuOpen) race.swing(); });
  btn('c-horn', () => { if (race) race.honk(); });
  btn('b-racer', () => { if (race) race.swapRacer(); });
  btn('b-grab', () => { touch.grab = true; press.grab = true; }, () => { touch.grab = false; });
  { const g = $('b-grab'); if (g) { g.addEventListener('mousedown', (e) => { e.preventDefault(); touch.grab = true; press.grab = true; }); window.addEventListener('mouseup', () => { touch.grab = false; }); } }
  btn('b-car', () => { if (race) race.toggleCar(); }); btn('b-exit', () => { if (race) race.toggleCar(); });
  for (const id of ['b-car', 'b-exit', 'b-racer']) { const el = $(id); if (el) el.addEventListener('click', () => { if (race) (id === 'b-racer' ? race.swapRacer() : race.toggleCar()); el.blur(); }); }
})();
