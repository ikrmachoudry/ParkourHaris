// Parkour Haris - main: renderer, menus, lobby, race session, HUD, input, networking glue.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { LEVEL_META, CHARACTERS, MAX_PLAYERS } from './levelmeta.js';
const GESTURES = ['relaxed', 'pocket', 'thumbs', 'phone'];
import { buildLevel } from './levels.js';
import { newBody, stepBody, knock, respawn } from './physics.js';
import { P } from './world.js';
import { Character, makeNameTag } from './characters.js';
import { HeroActor } from './actor.js';
import { makeHero } from './glbactor.js';
import { cityVeh, STYLE_GEO } from './cityveh.js';
import { setCityCamera, charCar, restoreCar, CULL } from './cityvis.js';
import { flashPolice } from './hcar.js';
import { Wanted } from './wanted.js';
import { CopGhosts, copSnapshot } from './copnet.js';
import { DayNight } from './daynight.js';
import { Weather } from './weather.js';
import { OPT, saveOpts } from './opts.js';
import { Peds } from './peds.js';
import { REPAIR, HOMES, homeSpawn, homeZone, ARMS, AUTOS, SUMMIT } from './gta.js';
import { Wallet, WEAPONS, WEAPON_ORDER, PAY, carPrice, money as fmtMoney } from './economy.js';
import { findRoute } from './nav.js';
import { Minimap } from './minimap.js';
import { MissionClient } from './missionui.js';
import { VIS, ensureFont, harisTexture, arrowTexture, makeSky, makeWater, buildScenery, Particles, Ambient } from './scenery.js';
import * as A from './audio.js';
import { bodyHalf } from './hitbox.js';
import { hitCode, addHit } from './cardamage.js';
import { Net } from './net.js';
import { makePoolWater, makeCaustics } from './poolwater.js';
import { CAR_SPECS, newCar, stepCar, buildCarMesh, animateCar } from './car.js';

const P0 = { ...P };   // the cartoon-game physics; the city overrides them with real-world numbers (see Race constructor)
const $ = (id) => document.getElementById(id);
const IS_DESKTOP = typeof matchMedia === 'function' && matchMedia('(pointer: fine)').matches && matchMedia('(hover: hover)').matches && !matchMedia('(pointer: coarse)').matches;   // a laptop / PC with a mouse (even a touchscreen laptop): keyboard + mouse only
const IS_TOUCH = !IS_DESKTOP && ((typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches) || ((typeof navigator !== 'undefined' && navigator.maxTouchPoints) || 0) > 0);
const touch = { x: 0, y: 0, jump: false, grab: false, sl: 0, sr: 0, gas: 0, brk: 0, hb: 0, bs: 0 };
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
const Q = { dpr: IS_TOUCH ? Math.min(MAXDPR, 1.0) : Math.min(MAXDPR, 1.5), t: 0, frames: 0, good: 0, shadows: true, warm: 3, far: IS_TOUCH ? 480 : 1100 };   // far = draw distance (m) of the city
function resize() {
  if (!stage) return;
  renderer.setPixelRatio(Q.dpr);
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  stage.camera.aspect = window.innerWidth / window.innerHeight; stage.camera.updateProjectionMatrix();
  if (race) { race.camera.aspect = window.innerWidth / window.innerHeight; race.camera.updateProjectionMatrix(); race.particles.setScale(renderer.domElement.height); if (race.fxP) race.fxP.setScale(renderer.domElement.height); }
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
    else if (Q.far > (IS_TOUCH ? 320 : 480)) { Q.far = Math.max(IS_TOUCH ? 320 : 480, Q.far - 60); if (race) race.setFar(); }
  } else if (fps > 58) {
    if (++Q.good >= 3 && Q.dpr < Math.min(MAXDPR, 1.75)) { Q.dpr = Math.min(Math.min(MAXDPR, 1.75), Q.dpr + 0.1); Q.good = 0; resize(); }
  } else Q.good = 0;
}
try { const sv = localStorage.getItem('ph_low'); Q.low = sv === '1'; if (sv === null && IS_TOUCH && (((navigator.hardwareConcurrency || 4) <= 2) || ((navigator.deviceMemory || 4) <= 2))) Q.low = true; } catch { Q.low = false; } // old/weak phones (e.g. iPhone 7) start on LOW automatically; each player can switch it in the menu
if (Q.low) { Q.dpr = 0.75; Q.shadows = false; Q.far = 260; }
function applyGfx() {
  if (Q.low) { Q.dpr = 0.75; Q.shadows = false; Q.far = 260; } else { Q.far = IS_TOUCH ? 480 : 1100; Q.dpr = IS_TOUCH ? Math.min(MAXDPR, 1.0) : Math.min(MAXDPR, 1.5); Q.shadows = true; Q.warm = 3; }
  if (race) { race.setShadows(Q.shadows); race.setFar(); }
  resize();
}
const pmrem = new THREE.PMREMGenerator(renderer);
const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

// ------------------------------------------------------------------ app state
const app = { screen: 'title', mode: 'single', name: localStorage.getItem('ph_name') || '', char: +(localStorage.getItem('ph_char') || 0), level: 0, net: null, room: null, myId: null, pendingJoin: null, muted: false };
let race = null, stage = null, thumbs = [];
const best = (l) => +(localStorage.getItem('ph_best_' + l) || 0);

// ------------------------------------------------------------------ menu stage (3D scene behind menus)
// vehicle index in the net flags: 4 bits at bit 9 + 1 more bit at bit 24 + 1 at bit 29 (64 vehicles)
const carFlagBits = (i) => ((i & 15) << 9) | (((i >> 4) & 1) << 24) | (((i >> 5) & 1) << 29);
const LOCALCAR = 67108864;   // net flag: driving a car taken from the traffic (it exists only in that player's game; the model id travels in 'vm')
const WNAME = [null, 'bat', 'pistol', 'ak'];
const wnameOf = (w) => ((w & 3) === 3 && (w & 16) ? 'sniper' : WNAME[w & 3]);   // the wire code: 2 bits of weapon, bit 16 turns the rifle slot into the sniper
const SCOPE_FOV = [40, 26, 16, 10, 6];   // sniper zoom levels (field of view in degrees): wide -> very tight
const isGun = (w) => w === 'pistol' || w === 'ak' || w === 'sniper';
const PAX = 33554432;   // net flag: riding as a passenger (the vehicle index is in the same bits as for a driver)
const PAXSEAT = 27;   // net flag bits 27-28: which passenger seat (0..2) I sit in
const carFlagIdx = (f) => ((f >> 9) & 15) | (((f >> 24) & 1) << 4) | (((f >> 29) & 1) << 5);

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
    const tex = harisTexture('HARIS');
    const dm = new THREE.Mesh(new THREE.PlaneGeometry(11, 4.3), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -2 }));
    dm.rotation.x = -Math.PI / 2; dm.position.set(0, 0.1, 4.4); this.scene.add(dm);

    this.chars = [0, 1, 2, 3].map((id) => { const c = makeHero(id); this.scene.add(c.group); return { c, tag: null, name: null, show: true, scale: 1, hop: 0 }; });
    this.ambient = new Ambient('fun', 160); this.scene.add(this.ambient.points);
    this.particles = new Particles(360); this.scene.add(this.particles.points);
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
    this.camX = lerp(this.camX === undefined ? 0 : this.camX, this.mode === 'title' && cam.aspect > 1.2 ? 2.3 : 0, Math.min(1, dt * 3));   // on the title page the menu buttons sit on the right: slide the whole podium to the left so nobody hides behind them
    cam.position.set(Math.sin(this.t * 0.25) * 1.8 + this.camX, 2.9 + Math.sin(this.t * 0.4) * 0.15, 10.5); cam.lookAt(this.camX, 1.9, 0);
    this.sky.position.copy(cam.position);
    this.water.material.uniforms.time.value = this.t;
    this.chars.forEach((o, i) => {
      o.c.group.visible = o.show;
      if (!o.show) return;
      const p = this.slotPos[this.slotOf(i)];
      const selected = this.mode === 'title' ? ((Math.floor(this.t / 3) % 4) === i) : (this.mode !== 'lobby' && this.sel === i);
      o.scale = lerp(o.scale, selected ? 1.18 : 1, Math.min(1, dt * 8));
      o.c.group.scale.setScalar(o.scale);
      o.hop = 0;
      o.c.group.position.set(p[0], p[1] + o.hop, p[2]);
      o.c.group.rotation.y = lerpAngle(o.c.group.rotation.y, this.mode === 'lobby' ? Math.sin(this.t * 0.7 + i) * 0.3 : Math.sin(this.t * 0.6 + i * 2) * 0.35, Math.min(1, dt * 4));
      o.c.update(dt, { speed: 0, grounded: true, vy: 0, stun: 0, dive: 0, celebrate: false, gesture: selected ? 'thumbs' : GESTURES[i] });
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
    this.model = makeActor(info.char); scene.add(this.model.group);
    this.tag = null; if (!NO_TEXT) { this.tag = makeNameTag(info.name, CHARACTERS[info.char].color); this.tag.position.set(0, this.model.height + 0.7, 0); this.model.group.add(this.tag); }
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
  renderTime() { return Date.now() - this.dMin - clamp(80 + this.jit * 3, 80, 480); } // in the sender's clock
  update(renderTs, dt) {
    const s = this.snaps;
    if (!s.length) return;
    while (s.length > 2 && s[1].ts <= renderTs) s.shift();
    let a = s[0], b = s[1] || s[0], k = 0;
    if (s.length > 1) { const span = Math.max(1, b.ts - a.ts); k = clamp((renderTs - a.ts) / span, 0, 1 + 380 / span); } // may extrapolate up to 380 ms if packets are late
    const tx = lerp(a.x, b.x, k), ty = lerp(a.y, b.y, k), tz = lerp(a.z, b.z, k);
    if (!this.has) { this.x = tx; this.y = ty; this.z = tz; this.has = true; }
    else {
      const f = 1 - Math.exp(-28 * dt), px = this.x, pz = this.z;
      this.x += (tx - this.x) * f; this.y += (ty - this.y) * f; this.z += (tz - this.z) * f;
      if (dt > 0) { const k2 = 0.25; this.vx += ((this.x - px) / dt - this.vx) * k2; this.vz += ((this.z - pz) / dt - this.vz) * k2; }
    }
    this.yaw = lerpAngle(this.yaw, b.r, 1 - Math.exp(-16 * dt));
    this.speed = (b.a & 8192) ? 0 : lerp(a.sp, b.sp, clamp(k, 0, 1)); this.flags = b.a; this.w = b.w | 0; this.vm = b.vm | 0;
    if (Date.now() - this.rxAt > 700) { this.flags &= ~(2 | 4 | 16); this.speed = 0; } // their packets stopped (slow / hidden window): stand them up instead of freezing them lying down
    this.vy = s.length > 1 ? (b.y - a.y) / Math.max(0.02, (b.ts - a.ts) / 1000) : 0;
    const g = this.model.group;
    const WR0 = race && race.world, sw0 = !!(WR0 && WR0.terrain && WR0.seaSwim && !(this.flags & (256 | PAX)) && this.y < WR0.waterY + 0.1 && WR0.terrain(this.x, this.z) < WR0.waterY - 0.3);
    g.position.set(this.x, this.y - (sw0 ? 0.4 : 0), this.z); g.rotation.y = this.yaw;
    // a lost packet must never leave somebody lying down forever on my screen: stun is at most ~3.4 s long (a car knock-down: fly, roll, lie, get up)
    if (this.flags & 2) this.stunT = (this.stunT || 0) + dt; else this.stunT = 0;
    if (this.stunT > 3.4) this.flags &= ~2;
    const grounded = !!(this.flags & 1);
    const landed = grounded && !this.lastLanded; this.lastLanded = grounded;
    this.sw = (this.flags & 16) ? Math.min(1, (this.sw || 0.001) + dt / 0.42) : 0;
    const WR = race && race.world, swimming = !!(WR && WR.terrain && WR.seaSwim && !(this.flags & (256 | PAX)) && this.y < WR.waterY + 0.1 && WR.terrain(this.x, this.z) < WR.waterY - 0.3);
    this.model.update(dt, { swim: swimming, speed: this.speed, grounded: swimming ? true : grounded, vy: this.vy, stun: this.flags & 2 ? 1 : 0, dive: this.flags & 4 ? 1 : 0, celebrate: !!(this.flags & 8), seated: !!(this.flags & (256 | PAX)), pax: !!(this.flags & PAX), bike: !!(this.onBike && (this.flags & (256 | PAX))), swing: this.sw, shield: !!(this.flags & 32), leader: !!this.leader, mega: !!(this.flags & 128), landed, crouch: !!(this.flags & 2097152), kick: !!(this.flags & 4194304), weapon: (this.flags & (256 | PAX)) ? null : wnameOf(this.w), aiming: !!(this.w & 4) && !(this.flags & (256 | PAX)), punch: (this.flags & 8388608) ? (this.pn = Math.min(0.95, (this.pn || 0.001) + dt / (!(this.flags & 4194304) && (this.w & 3) === 1 ? 0.85 : 0.62))) : (this.pn = 0) });
  }
  dispose(scene) { scene.remove(this.model.group); if (this.tag) { this.tag.material.map.dispose(); this.tag.material.dispose(); } this.model.dispose(); }
}

// ------------------------------------------------------------------ the race
const makeActor = (id) => makeHero(id);
let _beamTex = null;
function beamTexture() {
  if (_beamTex) return _beamTex; const cv = document.createElement('canvas'); cv.width = 64; cv.height = 128; const g = cv.getContext('2d');
  const gr = g.createLinearGradient(0, 128, 0, 0); gr.addColorStop(0, 'rgba(255,244,200,.9)'); gr.addColorStop(1, 'rgba(255,244,200,0)'); g.fillStyle = gr; g.beginPath(); g.moveTo(24, 128); g.lineTo(40, 128); g.lineTo(64, 0); g.lineTo(0, 0); g.closePath(); g.fill();
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; _beamTex = t; return t;
}
const WEAPON_ICON = { sniper: '<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h22l3-2.4h3M9 20l-1 5h4l1-5M14 15.5h8M16 15.5v-2.6h4v2.6"/><circle cx="16" cy="7" r="3.2"/><path d="M16 2.5v9M11.5 7h9" stroke-width="1.4"/></svg>', fist: '<svg viewBox="0 0 32 32" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round"><path d="M9 15V9.5a2.2 2.2 0 0 1 4.4 0V20M13.4 12.5V7.8a2.2 2.2 0 0 1 4.4 0V20M17.8 12v-3a2.2 2.2 0 0 1 4.4 0v11a7 7 0 0 1-7 6h-1a7 7 0 0 1-7-7v-4"/></svg>',
  bat: '<svg viewBox="0 0 32 32" fill="#fff" stroke="#fff" stroke-width="1" stroke-linejoin="round"><g transform="rotate(42 16 16)"><path d="M14.7 27 L14.7 17.5 C14.7 14.5 12.2 12.5 12.2 9 L12.2 5.5 C12.2 1.8 19.8 1.8 19.8 5.5 L19.8 9 C19.8 12.5 17.3 14.5 17.3 17.5 L17.3 27 Z"/><ellipse cx="16" cy="28.3" rx="2.6" ry="1.5"/></g></svg>',
  pistol: '<svg viewBox="0 0 32 32" fill="#fff" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"><path d="M4 9h20l3 2v4h-9l-2 3v8h-5v-8l-1-3H6a2 2 0 0 1-2-2z"/></svg>',
  ak: '<svg viewBox="0 0 32 32" fill="#fff" stroke="#fff" stroke-width="1.4" stroke-linejoin="round"><path d="M1 13h9l2-2h12l2 1h5v3h-5l-1 2h-8l-1 6h-4l1-6H9l-3 3H1z"/></svg>' };
const BULLET_ICON = '<svg viewBox="0 0 32 32" fill="#fff" stroke="#fff" stroke-width="1.2" stroke-linejoin="round"><path d="M16 2.5c3.4 3 5 7 5 11.5v9H11v-9c0-4.5 1.6-8.5 5-11.5z"/><path d="M10 25.5h12v3.5H10z"/><path d="M10 22.5h12" stroke="#d6463c" stroke-width="1.6" fill="none"/></svg>';
let NO_TEXT = false; // city mode: no names, labels or speech anywhere in the world
const keys = new Set();
const press = { jump: false, dive: false, grab: false };

class Race {
  constructor(levelIdx, players, localId, o) {
    this.level = levelIdx; this.meta = LEVEL_META[levelIdx]; NO_TEXT = !!this.meta.city; document.body.classList.toggle('city-mode', NO_TEXT);
    Object.assign(P, P0);
    if (NO_TEXT) Object.assign(P, { R: 0.3, H: 1.78, G: 9.81, RUN: 4.4, JUMP: 3.7, ACC: 20, DEC: 34, AIR: 2.5, AIR_DEC: 0.4, TERM: -55 });  // real-world walking / jumping
    this.multi = o.multi; this.localId = localId; this.players = players;
    this.t0 = o.t0; // multi: server ms ; single: performance.now() ms
    this.phase = 'countdown'; this.finished = false; this.over = false; this.finishTime = 0; this.finishedMap = new Map();
    this.camYaw = 0; this.camPitch = NO_TEXT ? 0.17 : 0.34; this.camDist = NO_TEXT ? 3.5 : 8.2; this.shoulder = 0; this.camPos = new THREE.Vector3(); this.camTarget = new THREE.Vector3(); this.camInit = false;
    this.sendT = 0; this.rs = 0; this.cpIdx = 0; this.cpCur = null; this.stepDist = 0; this.lastCount = 99; this.hudT = 0; this.hintT = 0; this.warnSec = -1;
    this.hang = null; this.hangCd = 0; this.hangHint = false; this.levelTime = -4; this.batCd = 0; this.swingT = 0; this.crouch = false; this.weapon = null; this.aiming = false; this.punchT = 0; this.punchCd = 0; this.punchPending = false; this.batPending = false; this.swingMega = false; this.fx = { turbo: 0, jump: 0, shield: 0, mega: 0 }; this.fxSig = '';

    const v = VIS[this.meta.key];
    const scene = this.scene = new THREE.Scene();
    scene.background = new THREE.Color(v.fog); scene.fog = new THREE.Fog(v.fog, v.fogNear, v.fogFar); this.fogFarBase = v.fogFar; this.fogNearBase = v.fogNear; this.setFar();
    scene.environment = envTex; scene.environmentIntensity = v.env;
    this.camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 1800);

    const { world, info } = buildLevel(levelIdx, false, arrowTexture(), o.seed || 1);
    this.world = world; this.info = info; scene.add(world.group);
    world.onEvent = null;
    this.sky = makeSky(v); scene.add(this.sky);
    this.water = makeWater(v, world.waterY); scene.add(this.water);
    this.scenery = buildScenery(scene, this.meta.key, info, world);
    if (this.meta.city) { this.isTouch = IS_TOUCH; this.mission = new MissionClient(this, (msg) => app.net.send(msg)); this.mission.relock = () => tryLock(); this.peds = new Peds(scene, IS_TOUCH ? 16 : 28); this.wanted = new Wanted(this); this.peds.onVoice = (k, p) => { const dd = Math.hypot(p.x - this.camera.position.x, p.z - this.camera.position.z); const nw = performance.now(); if (k === 'death') { if (dd > 45) return; A.voice.death(0.8 * Math.max(0.2, 1 - dd / 45)); } else { if (dd > 26 || nw - (this._scrT || 0) < 6000) return; this._scrT = nw; A.voice.scream(0.5 * Math.max(0.3, 1 - dd / 26)); } }; /* far-away panic never screams at you out of nowhere */ this.initCityEconomy(info, scene); this.peds.blocked = (x, z) => { const S = this.world.solids; for (let i = 0; i < S.length; i++) { const s = S[i]; if (s.y1 > 0.6 && s.y0 < 1.2 && x > s.x0 - 0.3 && x < s.x1 + 0.3 && z > s.z0 - 0.3 && z < s.z1 + 0.3 && s.name !== 'block') return true; } return false; }; this.peds.ground = (x, z) => (this.info.track && this.info.track.terrain ? this.info.track.terrain(x, z) : 0); const mc = $('minimap'); if (mc && typeof mc.getContext === 'function') { this.minimap = new Minimap(mc); } }
    // swimming pools (realistic water + caustics) and the speedway cars
    this.poolMeshes = [];
    for (const pl of world.pools) {
      const wm = makePoolWater(pl), u = wm.material.uniforms;
      u.fogC.value.set(v.fog); u.fogN.value = v.fogNear; u.fogF.value = v.fogFar; u.skyTop.value.set(v.top); u.skyHor.value.set(v.horizon);
      const cm = makeCaustics(pl); scene.add(wm, cm); this.poolMeshes.push({ wm, cm, pl });
    }
    this.cars = []; this.rolling = []; this.repairT = 0; this.drive = null; this.paxMode = false; this.lookT = 0; this.nearCar = null; this.hornCd = 0; this.skidT = 0;
    if (info.cars) {
      for (const cd of info.cars) { const mesh = buildCarMesh(cd.id, IS_TOUCH); const bh = bodyHalf(mesh); mesh.rotation.order = 'YXZ'; mesh.position.set(cd.x, cd.y || (info.track && info.track.terrain ? info.track.terrain(cd.x, cd.z) : 0), cd.z); mesh.rotation.y = cd.yaw; scene.add(mesh); const st0 = newCar(cd.id, cd.x, cd.z, cd.yaw); if (bh) { st0.hl = Math.max(st0.hl || 0, bh.hl - 0.03); st0.hw = Math.max(st0.hw || 0, bh.hw - 0.03); } if (this.cars.length >= 12 && this.cars.length < 16 || this.cars.length >= 24 && cd.id < 23) st0.topCap = 36.1; /* mission cars: 130 km/h */ st0.y = cd.y || (info.track && info.track.terrain ? info.track.terrain(cd.x, cd.z) : 0); this.cars.push({ st: st0, mesh }); }
      this.racerOk = false;
      if (o.multi && app.pendingCars) { this.onCars(app.pendingCars); app.pendingCars = null; }
    }

    const hemi = this.hemi = new THREE.HemisphereLight(v.hemiSky, v.hemiGround, v.hemiI); scene.add(hemi);
    const sun = this.sun = new THREE.DirectionalLight(v.sun, v.sunI);
    this.sunDir = new THREE.Vector3(...v.sunPos).normalize().multiplyScalar(90);
    sun.castShadow = Q.shadows; sun.shadow.mapSize.set(IS_TOUCH ? 1024 : 2048, IS_TOUCH ? 1024 : 2048);
    const sc = sun.shadow.camera; sc.left = -40; sc.right = 40; sc.top = 40; sc.bottom = -40; sc.near = 5; sc.far = 220; sun.shadow.bias = -0.0003; sun.shadow.normalBias = 0.04;
    scene.add(sun, sun.target);
    this.dn = null; if (this.meta.city) { this.dn = new DayNight({ scene, sky: this.sky, water: this.water, sun, hemi, world, pools: this.poolMeshes, vis: v, race: this }); this.weather = new Weather({ scene, race: this, mobile: IS_TOUCH }); this.dn.update(0); }

    this.particles = new Particles(IS_TOUCH ? 700 : 1200); scene.add(this.particles.points); this.particles.setScale(renderer.domElement.height);
    this.fxP = new Particles(IS_TOUCH ? 380 : 800, { additive: true }); scene.add(this.fxP.points); this.fxP.setScale(renderer.domElement.height);   // flames / embers (additive glow)
    this.ambient = new Ambient(this.meta.key, 320); scene.add(this.ambient.points);

    // players
    this.remotes = new Map();
    const idx = players.findIndex((p) => p.id === localId);
    this.slot = Math.max(0, idx);
    const me = players[this.slot] || { name: 'Player', char: 0 };
    this.me = { body: newBody(), model: makeActor(me.char), name: me.name, char: me.char };
    scene.add(this.me.model.group); this.me.model.group.rotation.order = 'YXZ';
    this.me.tag = null; if (!NO_TEXT) { this.me.tag = makeNameTag(me.name, CHARACTERS[me.char].color); this.me.tag.position.set(0, this.me.model.height + 0.7, 0); this.me.model.group.add(this.me.tag); }
    players.forEach((p, i) => { if (p.id !== localId) this.remotes.set(p.id, new Remote(p, scene)); });
    this.spawn(this.slot);
    setTimeout(() => { if (race === this) this.warmUp(); }, 1200);   // upload every vehicle / player model to the GPU now, not the first time somebody walks into view
    this.victory = 0; this.hopT = 0;
    this.buildProgress(); this.buildBoxes();
    document.body.classList.add('in-race');
    $('hud-level').textContent = this.meta.name;
    $('hud').classList.remove('hidden');
    $('hud-hint').classList.remove('fade'); this.hintT = 8;
    this.setShadows(Q.shadows);
    if (this.meta.city) { A.stopMusic(); A.cityAmbience(true); } else A.startMusic(levelIdx);
    A.duckMusic(false);
    this.pos = this.me.body;
  }
  setShadows(on) { this.sun.castShadow = on; }

  spawnPoint(slot) { if (this.meta.city && this.me) { const h = homeSpawn(this.me.char); return [h.x, 0.2, h.z, h.yaw]; } return [(slot - 1.5) * 3.6, 0, this.info.spawn.z, Math.PI]; }   // the city: you start (and respawn) at your own home
  spawn(slot) {
    const [x, y, z, yw] = this.spawnPoint(slot);
    respawn(this.me.body, x, y + 0.02, z, yw); if (this.meta.city) this.camYaw = yw - Math.PI;
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
    const zk = this.scoped ? clamp(SCOPE_FOV[this.scopeLvl || 0] / 62, 0.07, 0.6) : 1; this.camYaw -= dx * 0.0024 * zk; this.camPitch = clamp(this.camPitch + dy * 0.0021 * zk, -0.15, 1.2); this.lookT = 1.6;
  }

  update(dt) {
    const b = this.me.body, w = this.world;
    this.levelTime = (this.now() - this.t0) / 1000;
    const lt = this.levelTime;
    if (this.meta.city) { this.feedTraffic(); this.netWorld(dt); }
    w.update(lt, dt);
    w.carry(b);
    if (b.yawOff) { b.yaw += b.yawOff; b.yawOff = 0; }

    // ---- countdown display
    if (lt < 0) {
      const n = Math.ceil(-lt);
      if (n !== this.lastCount && n <= 3 && !this.meta.city) { this.lastCount = n; this.count(String(n)); A.sfx.tick(); }
    } else if (this.phase === 'countdown') {
      this.phase = 'race'; if (!this.meta.city) { this.count('GO!'); A.sfx.go(); } this.lastCount = 0;
      if (this.multi) setTimeout(() => { if (race === this && !this.over) this.toast(IS_TOUCH ? 'Tap BAT to bonk rivals!' : 'Press B or click to swing the BAT!'); }, 1400);
      if (this.cars.length) setTimeout(() => { if (race === this && !this.over && !this.drive) this.toast('\uD83D\uDE97 Follow the CAR STATION signs to drive!'); }, this.multi ? 4200 : 1600);
    }

    // ---- input -> physics
    const canMove = lt >= 0 && !this.over && !this.jack && !(this.mission && this.mission.freeze) && !this.bigMapOpen;
    let fw = 0, rt = 0;
    if (keys.has('KeyW') || keys.has('ArrowUp')) fw++; if (keys.has('KeyS') || keys.has('ArrowDown')) fw--;
    if (keys.has('KeyD') || keys.has('ArrowRight')) rt++; if (keys.has('KeyA') || keys.has('ArrowLeft')) rt--;
    if (keys.has('KeyQ')) this.camYaw += 1.9 * dt; if (keys.has('KeyE')) this.camYaw -= 1.9 * dt;
    if (touch.x || touch.y) { rt += touch.x; fw += touch.y; }
    const sy = Math.sin(this.camYaw), cy = Math.cos(this.camYaw);
    let mx = -sy * fw + cy * rt, mz = -cy * fw - sy * rt;
    const ml = Math.hypot(mx, mz); if (ml > 1) { mx /= ml; mz /= ml; }
    const inp = { mx: canMove ? mx : 0, mz: canMove ? mz : 0, jumpPressed: canMove && press.jump, jumpHeld: canMove && (keys.has('Space') || touch.jump), divePressed: canMove && press.dive && !this.meta.city };
    if (this.meta.city) {   // jog by default (faster than before), Shift sprints; on a phone: light push = walk, normal push = jog, push the stick to the edge = sprint
      const touchOn = !!(touch.x || touch.y);
      b.speedMul = touchOn ? (ml > 0.82 ? 1.65 : ml > 0.38 ? 1.3 : 0.5) : ((keys.has('ShiftLeft') || keys.has('ShiftRight')) ? 1.65 : 1.3);
    }
    if (this.meta.city) {
      if (this.crouch && press.jump) this.crouch = false;
      if (this.drive) this.crouch = false;
      if (this.crouch) b.speedMul = 0.45; if (this.punchT > 0) b.speedMul = Math.min(b.speedMul, 0.5);
    }
    press.jump = false; press.dive = false;

    // a bonk can never keep you down: stun is always <1 s, even while driving (stepBody is not run then) or after a long frame
    if (this.drive && b.stun > 0) b.stun = Math.max(0, b.stun - dt);
    if (b.stun > 0) { this.stunReal = (this.stunReal || 0) + dt; if (this.stunReal > 3.4) { b.stun = 0; b.immune = 0.8; this.stunReal = 0; } } else this.stunReal = 0;
    const steps = Math.max(1, Math.ceil(dt / (1 / 90))), sdt = dt / steps;
    let landed = false;
    w.nearPlayers = [b, ...[...this.remotes.values()]];
    const hanging = false;
    { const wb = this.me.body; wb.jumpMul = OPT.highJump ? 2.1 : 1; if (OPT.invincible) { wb.shield = 9; wb.stun = 0; this.hurt = 0; if (this.drive) this.drive.st.hp = 100; for (const c of this.cars) if (c.st.wreck) c.st.wreck = false; }
      if (!OPT.wanted && this.wanted && (this.wanted.stars || this.wanted.cars.length || this.wanted.foot.length)) this.wanted.reset(); }
    this.stepRolling(dt); if (this.meta.city) { this.updateCarFire(dt); if (this.mission) this.mission.update(dt); if (this.wanted) { const wb = this.me.body, wd = this.drive ? this.drive.st : null; this.wanted.update(dt, wd ? wd.x : wb.x, wd ? wd.z : wb.z, wd); this.netCops(dt); } if (this.copGhosts) this.copGhosts.update(dt, (id) => { const r = this.remotes.get(id); return !r || this.ghost(r); }); }
    if (this.drive) { this.updateDrive(dt, canMove); b.events.length = 0; }
    else if (hanging) { b.events.length = 0; }
    else {
    for (let i = 0; i < steps; i++) {
      stepBody(w, b, sdt, inp);
      inp.jumpPressed = false; inp.divePressed = false;
      if (b.events.length) { landed = this.events(b) || landed; b.events.length = 0; }
    // remember the last safe spot on the ground (city): if you ever fall out of the world (a hill, a cliff, a gap) you are put back there, not sent home
    if (this.meta.city && b.grounded && !this.drive && !(b.swim > 0.3) && b.stun <= 0 && this.world.terrain && b.y >= this.world.terrain(b.x, b.z) - 0.3 && b.y > this.world.waterY + 0.4) { const nT = performance.now(); if (nT - (this.safeAt || 0) > 400) { this.safeAt = nT; (this.safeHist = this.safeHist || []).push({ x: b.x, y: b.y, z: b.z }); if (this.safeHist.length > 6) this.safeHist.shift(); } }
    }
    }
    // hazards (once per frame)
    if (canMove && !this.drive) {
      const h = w.checkHazards(b, lt);
      if (h && knock(b, h.nx, h.nz, h.pow)) { A.sfx.hit(); this.particles.emit(b.x, b.y + 0.9, b.z, 26, { color: '#ffffff', speed: 5, up: 3, life: 0.5, size: 0.3 }); this.particles.emit(b.x, b.y + 0.9, b.z, 14, { color: '#ffd23f', speed: 7, up: 4, life: 0.4, size: 0.25 }); }
    }
    if (!this.drive && !this.meta.city) this.updateBat(dt, b);
    if (this.meta.city) { this.updatePunch(dt, b); this.updateWeapon(dt, b); this.updateJack(dt, b); this.updateSell(dt); this.updateShops(dt, b); }
    if (!this.meta.city) this.updatePowerups(dt, b);
    if (!this.drive) { this.softCollide(b); this.softCars(b, canMove); }
    this.checkpoints(b);
    if (!this.finished && lt >= 0 && b.z < this.info.finishZ && b.y > this.info.finishY - 3 && Math.abs(b.x) < 16) this.onLocalFinish();

    // footsteps
    if (this.meta.city) {   // water sounds: lapping + strokes while swimming, climbing out, and the sea on the shore
      const swm = b.swim > 0.3 && !this.drive, spd = Math.hypot(b.vx, b.vz); A.swimSet(swm, spd);
      if (swm) { this.strokeT = (this.strokeT || 0) + dt * (spd > 0.6 ? 1 : 0.35); if (this.strokeT > 0.95) { this.strokeT = 0; A.sfx.stroke(spd > 0.6 ? 1 : 0.5); } }
      if (this.wasSwim && !swm && !this.drive) A.sfx.splashOut(); this.wasSwim = swm;
      this.seaT = (this.seaT || 0) - dt; if (this.seaT <= 0) { this.seaT = 0.3; A.seaSet(this.seaProx(b.x, b.z)); }
    }
    if (b.grounded && !b.stun && !this.drive && !(b.swim > 0.3)) {
      this.stepDist += Math.hypot(b.vx, b.vz) * dt;
      if (this.stepDist > 2.4) { this.stepDist = 0; if (Math.hypot(b.vx, b.vz) > 3) { A.sfx.step(b.x > -232 && b.x < -98 && b.z > 489 && b.z < 552 ? 'w' : b.y > 0.45 ? 'g' : 'c'); this.particles.emit(b.x, b.y + 0.05, b.z, 2, { color: '#ffffff', speed: 0.8, up: 0.8, life: 0.35, size: 0.22, gravity: 1 }); } }
    }

    // ---- local model
    const m = this.me.model, g = m.group;
    const swimK = b.swim > 0.3 ? clamp((b.swim - 0.3) / 0.4, 0, 1) : 0;
    if (this.drive) this.seatModel(g, this.drive, this.paxMode, this.paxSeat | 0);
    else { g.position.set(b.x, b.y - (swimK > 0 ? 0.4 * swimK : 0), b.z); g.rotation.y = b.yaw; g.rotation.x = 0; g.scale.setScalar(1); }   // swimming: the body lies IN the water
    m.update(dt, { swim: !this.drive && swimK > 0, seated: !!this.drive, pax: !!(this.drive && this.paxMode), bike: !!(this.drive && this.drive.mesh.userData.bike), speed: this.drive ? 0 : Math.hypot(b.vx, b.vz), grounded: this.drive || swimK > 0 ? true : (b.grounded && !this.hang), vy: this.drive ? 0 : b.vy, stun: this.drive ? 0 : b.stun, dive: this.drive ? 0 : b.dive, celebrate: this.finished || (this.over && this.winnerSelf) || this.victory > 0, swing: this.swingT, shield: b.shield > 0, leader: this.leaderId === this.localId, mega: this.swingMega && this.swingT > 0, landed, crouch: this.crouch && !this.drive, weapon: this.drive ? null : this.weapon, aiming: this.aimOn && !this.drive, aimElev: Math.atan(((NO_TEXT ? 0.17 : 0.34) - this.camPitch) * 0.9), punch: this.drive ? 0 : this.punchT, kick: this.kickK });
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
    if (this.nav && !this.over) { this.nav.t += dt; if (this.nav.t > 1.2) this.navUpdate(); }


    if (this.minimap) { const bb = this.me.body, drv = this.drive ? this.drive.st : null, px = drv ? drv.x : bb.x, pz = drv ? drv.z : bb.z, hd = Number.isFinite(this.camYaw) ? this.camYaw + Math.PI : bb.yaw;
      if (this.bigMapOpen) this.drawBigMap();
      this.minimap.draw({ x: px, z: pz, head: hd }, { x: px, z: pz, yaw: drv ? drv.yaw : bb.yaw }, [...this.remotes.values()].filter((q) => q.has).map((q) => ({ x: q.x, z: q.z, color: CHARACTERS[q.info.char].color })), dt, this.mission && this.mission.marks(), this.mission && this.mission.route(), this.wanted && this.wanted.mapInfo()); }
    if (this.peds) this.peds.update(dt, Math.max(0, this.levelTime) + 60 + (this.multi && !this.simHost ? this.pedOff || 0 : 0), this.camera.position, this.cars.map((c) => c.st).concat(this.info.trafficList || [], this.multi ? [...this.remotes.values()].filter((r) => r.vcar).map((r) => r.vcar.st) : []), this.drive ? null : this.me.body, (p, sp) => { A.crashSfx(Math.min(10, 2 + sp * 0.3)); if (sp > 5 && this.meta.city) this.crime('run', p.x, p.z); this.particles.emit(p.x, 1, p.z, 8, { color: '#ffd9a0', speed: 3, up: 2, life: 0.4, size: 0.2 }); }, { sit: this.crouch, hitMe: (p) => this.pedHitMe(p), hitOther: (p, o) => { const dx = o.x - p.x, dz = o.z - p.z, d = Math.hypot(dx, dz) || 1; app.net.send({ t: 'ph', to: o.id, nx: +(dx / d).toFixed(3), nz: +(dz / d).toFixed(3) }); } });
    if (this.peds && !this.drive && !this.over) this.peds.pushOut(this.me.body);
    this.updateCamera(dt);
    this.updateLights();
    this.water.material.uniforms.time.value = performance.now() / 1000;
    this.water.position.x = this.camera.position.x; this.water.position.z = this.camera.position.z;
    this.sky.position.copy(this.camera.position);
    this.scenery.update(lt, this.camera.position);
    this.ambient.update(performance.now() / 1000, this.camera.position);
    this.particles.update(dt); this.fxP.update(dt);
    this.hud(dt); this.hurtTick(dt);
  }

  events(b) {
    let landed = false;
    for (const e of b.events) {
      if (e === 'jump') { this.particles.emit(b.x, b.y + 0.05, b.z, 5, { color: '#ffffff', speed: 1.5, up: 1, life: 0.35, size: 0.25, gravity: 2 }); }
      else if (e === 'land') { A.sfx.land(b.landSpeed); landed = true; this.particles.emit(b.x, b.y + 0.05, b.z, Math.min(14, 5 + b.landSpeed * 0.4), { color: '#ffffff', speed: 2.4, up: 1.4, life: 0.45, size: 0.3, gravity: 3 }); }
      else if (e === 'bounce') { A.sfx.bounce(); landed = true; this.particles.emit(b.x, b.y + 0.1, b.z, 18, { rainbow: true, speed: 3, up: 2, life: 0.6, size: 0.3 }); }
      else if (e === 'dive') A.sfx.dive();
      else if (e === 'splash') {
        A.sfx.splash();
        const pool = b.swim > 0 && b.waterSurf, v = VIS[this.meta.key]; const col = pool ? '#ffffff' : v.water === 'lava' ? '#ff9a2a' : v.water === 'grid' ? '#d11cff' : '#bfeaff';
        this.particles.emit(b.x, (pool ? b.waterSurf : this.world.waterY) + 0.2, b.z, pool ? 34 : 40, { color: col, speed: 4, up: pool ? 6 : 9, life: 0.9, size: 0.45, gravity: 16, spread: 0.6 });
      } else if (e === 'stroke') { this.particles.emit(b.x, b.waterSurf + 0.1, b.z, 10, { color: '#ffffff', speed: 2, up: 3, life: 0.6, size: 0.3, gravity: 10 }); } else if (e === 'fell') this.onFell();
    }
    return landed;
  }

  // ================= swimming pool fx + cars =================
  // seats in a vehicle (driver included): bike 2, rickshaw 2, truck 2, tractor 1, every car 4
  seatCap(c) { const ud = c.mesh.userData; if (ud.bike) return 2; const v = cityVeh(c.st.id), m = v && v.model; return m === 'tractor' ? 1 : m ? 2 : 4; }
  seatModel(g, car, pax, pseat = 0) {
    const st = car.st, ud = car.mesh.userData, seat = ud.seat;
    if (ud.bike) {   // a motorbike: the rider straddles it and leans with it (about the road line)
      const roll = ud.roll || 0, h = ud.seatY + (pax ? 0.04 : 0), f = ud.seatF - (pax ? 0.62 : 0), sy = Math.sin(st.yaw), cy = Math.cos(st.yaw), lat = -h * Math.sin(roll);
      g.rotation.order = 'YXZ'; g.position.set(st.x + sy * f + cy * lat, st.y + h * Math.cos(roll) - 0.02, st.z + cy * f - sy * lat); g.rotation.set(0, st.yaw, roll); g.scale.setScalar(1); return;
    }
    if (ud.hero) { // a real driver: right-hand-drive seat of the hero car
      let f = ud.seatF, r = ud.seatR; const sy = Math.sin(st.yaw), cy = Math.cos(st.yaw);
      if (pax) {
        const v = cityVeh(st.id), cap = this.seatCap(car);
        if (v && v.model === 'rick') { f = -0.7; r = 0; }                                  // the passenger bench at the back
        else if (pseat === 0 || cap <= 2) r = -ud.seatR;                                   // front passenger seat
        else { f = ud.seatF - 1.0; r = (pseat === 1 ? 1 : -1) * Math.max(0.4, ud.seatR); } // rear seats
      }
      g.position.set(st.x + sy * f - cy * r, st.y + ud.seatY, st.z + cy * f + sy * r); g.rotation.set(0, st.yaw, 0); g.scale.setScalar(ud.seatS || 1); return;
    }
    { const sy = Math.sin(st.yaw), cy = Math.cos(st.yaw); let f = seat.z, r = 0; if (pax) { if (pseat === 0 || this.seatCap(car) <= 2) r = -0.4; else { f -= 1.0; r = pseat === 1 ? 0.4 : -0.4; } }
      g.position.set(st.x + sy * f - cy * r, st.y + seat.y, st.z + cy * f + sy * r); g.rotation.y = st.yaw; g.rotation.x = 0; g.scale.setScalar(0.8); }
  }
  // a patrol car that the police are driving can be stolen like any car (GTA V): one of the city's police cars is moved there and you get in it
  stealCop(cc) {
    const c = this.cars.find((q) => q.st.id === 15 && !q.st.wreck && q.st.driver === -1 && q !== this.drive) || this.cars.find((q) => q.mesh.userData.hero && !(cityVeh(q.st.id) || {}).boat && q.st.driver === -1 && !q.st.wreck && q !== this.drive); if (!c) return false;
    const s = c.st; s.x = cc.x; s.z = cc.z; s.y = this.info.track.terrain ? this.info.track.terrain(cc.x, cc.z) : 0; s.yaw = cc.yaw || 0; s.vx = s.vz = s.speed = 0; s.hp = 100; s.parked = true; s.driver = -1; s.wreck = false; s.dmg = undefined;
    if (c.mesh.userData.hero) c.mesh.userData.hero.repair();
    this.wanted.takeCar(cc); this.crime('jack', s.x, s.z); this.toggleCar(); return true;
  }
  nearestFreeCar(b) { // any vehicle that is not taken can be driven
    if (b.stun > 0 || (b.y > 1.5 && !this.world.terrain)) return null;
    const swimming = b.swim > 0.3; let best = null, bd = 4.6;
    for (const c of this.cars) { if (c.st.wreck) continue; if (c.st.mcar && this.mission && this.mission.mission === 'snipe' && this.mission.phase !== 'idle' && c !== this.mission.myCar) continue; const taken = c.st.driver !== -1 && c !== this.drive; if (taken && !(NO_TEXT && this.multi)) continue; if (Math.abs(b.y - c.st.y) > 3.5) continue; const cv = cityVeh(c.st.id), boat = !!(cv && cv.boat); if (swimming && !boat) continue;
      let d; if (boat) { const L = (STYLE_GEO[cv.style].L / 2) * 0.8, fx = Math.sin(c.st.yaw), fz = Math.cos(c.st.yaw), t = Math.max(-L, Math.min(L, (b.x - c.st.x) * fx + (b.z - c.st.z) * fz)); d = Math.hypot(b.x - (c.st.x + fx * t), b.z - (c.st.z + fz * t)) - STYLE_GEO[cv.style].w * 0.3; } else d = Math.hypot(b.x - c.st.x, b.z - c.st.z); d += taken ? 0.8 : 0; if (d < bd) { bd = d; best = c; } }
    return best;
  }
  spotFree(x, z, except) { // somewhere a person can stand: not inside a building and not inside another car
    for (const q of this.info.track && this.info.track.boxes || []) if (x > q.x0 - 0.5 && x < q.x1 + 0.5 && z > q.z0 - 0.5 && z < q.z1 + 0.5) return false;
    for (const c of this.cars) { if (c === except) continue; const dx = x - c.st.x, dz = z - c.st.z, fx = Math.sin(c.st.yaw), fz = Math.cos(c.st.yaw), a = dx * fx + dz * fz, r = -dx * fz + dz * fx; if (Math.abs(a) < (c.st.hl || 2.2) + 0.45 && Math.abs(r) < (c.st.hw || 1) + 0.45) return false; }
    return true;
  }
  // shared police: my police go out to the other players (about 8 times a second while I have any), theirs come in as ghosts
  netCops(dt) {
    const w = this.wanted; if (!this.multi || !w) return;
    this.copT = (this.copT || 0) + dt; const any = w.stars > 0 || w.cars.length > 0 || w.foot.length > 0;
    if (this.copT < 0.125 || (!any && !this.copSent)) return; this.copT = 0; this.copSent = any;
    app.net.send({ t: 'pc', ...copSnapshot(w) });
  }
  onCops(m) { if (!this.copGhosts) this.copGhosts = new CopGhosts(this.scene, (x, z) => (this.info.track && this.info.track.terrain ? this.info.track.terrain(x, z) : 0)); this.copGhosts.onMsg(m); }
  onJack(m) { const c = this.cars[m.c | 0]; if (c && c === this.drive) this.toggleCar(true); } // somebody stole my car: I am thrown out
  toggleCar(force) {
    if (!force && (this.over || this.finished || this.levelTime < 0 || this.menuOpen || !this.cars.length)) return;
    if (force && !this.drive) return;
    const b = this.me.body;
    if (this.drive) { // get out
      const c = this.drive, st = c.st;
      const boatV = cityVeh(st.id).boat, pax = this.paxMode, bail = !force && !boatV && Math.abs(st.speed) > 5.5, vx0 = st.vx, vz0 = st.vz, sp0 = Math.abs(st.speed);
      if (!force && st.y > 1.2 && !this.world.terrain) { return; }
      const hero = !!c.mesh.userData.hero, lx = Math.cos(st.yaw) * (hero ? -1 : 1), lz = -Math.sin(st.yaw) * (hero ? -1 : 1);
      let ox = st.x + lx * 2.4, oz = st.z + lz * 2.4;
      if (hero) for (const [dx, dz] of [[lx * 2.4, lz * 2.4], [-lx * 2.4, -lz * 2.4], [Math.sin(st.yaw) * 3.6, Math.cos(st.yaw) * 3.6], [-Math.sin(st.yaw) * 3.6, -Math.cos(st.yaw) * 3.6]]) { if (this.spotFree(st.x + dx, st.z + dz, c)) { ox = st.x + dx; oz = st.z + dz; break; } }
      let oy = this.world.terrain ? this.world.terrain(ox, oz) + 0.05 : 0.05;
      if (boatV) {   // off a boat: onto the pier / quay if there is one beside it, otherwise into the water
        const bg = STYLE_GEO[cityVeh(st.id).style], fx = Math.sin(st.yaw), fz = Math.cos(st.yaw), rx = -fz, rz = fx, bxs = (this.info.track && this.info.track.boxes) || [];
        let found = null;
        for (const sd of [1, -1]) for (const dd of [bg.w / 2 + 1.2, bg.w / 2 + 2.4]) for (const al of [0, 2, -2, 4, -4]) { if (found) break;
          const px = st.x + rx * sd * dd + fx * al, pz = st.z + rz * sd * dd + fz * al; if (bxs.some((q) => px > q.x0 && px < q.x1 && pz > q.z0 && pz < q.z1 && q.h > 0.2 && q.h < 0.5)) found = [px, 0.35, pz]; }
        if (found) { ox = found[0]; oz = found[2]; oy = found[1]; } else { const dd = bg.w / 2 + 1.4; ox = st.x + rx * dd; oz = st.z + rz * dd; oy = (this.world.waterY === undefined ? -1.2 : this.world.waterY) - 0.5; }
      }
      respawn(b, ox, oy, oz, st.yaw); b.hitCd = 0.3;
      if (pax) { /* a passenger leaving never touches the car: the driver keeps driving */ }
      else if (bail) { st.driver = -1; st.parked = false; if (!this.rolling.includes(c)) this.rolling.push(c); }          // jumped out of a moving car: it keeps rolling
      else if (boatV && !force && Math.abs(st.speed) > 2) { st.driver = -1; st.parked = false; if (!this.rolling.includes(c)) this.rolling.push(c); }
      else if (!force) { st.vx = st.vz = st.speed = 0; st.driver = -1; st.parked = true; }
      this.drive = null; this.paxMode = false; this.paxSeat = 0;
      if (bail) try {   // thrown out like being hit by a car: carried by the car's speed, tumbles and gets up
        const l = Math.hypot(vx0, vz0) || 1; b.hitCd = 0; b.immune = 0;
        if (knock(b, vx0 / l * 0.85 + lx * 0.5, vz0 / l * 0.85 + lz * 0.5, Math.min(12, 3 + sp0 * 0.32))) { b.vy = 2.6 + Math.min(2.4, sp0 * 0.07); b.stun = Math.min(2.8, 1.5 + sp0 * 0.045); A.crashSfx(Math.min(9, 3 + sp0 * 0.2)); this.shake = Math.max(this.shake || 0, 0.35); this.hurtFx(Math.min(1, sp0 / 14)); this.particles.emit(b.x, b.y + 0.4, b.z, 10, { color: '#d8d2c4', speed: 3, up: 2, life: 0.5, size: 0.4 }); }
      } catch (e) { console.warn(e); }
      if (this.lightsOn && this.beam) { this.lightsOn = false; this.applyLights(c); this.lightsOn = true; }
      document.body.classList.remove('driving'); A.engineStop(); A.carEngineStop(); A.skidStop(); A.hornStop(); A.sirenStop(); if (hero) { A.carDoor(true); setTimeout(() => A.carDoor(false), 1500); } else A.sfx.door();
      this.g_g(this.me.model.group);
      if (this.multi && !force && !pax && !c.local) app.net.send({ t: 'carpark', c: this.cars.indexOf(c), x: +st.x.toFixed(2), y: +st.y.toFixed(2), z: +st.z.toFixed(2), r: +st.yaw.toFixed(3) });
      this.camYaw = st.yaw + Math.PI; this.camInit = false; if (NO_TEXT) this.camPitch = 0.17;
    } else {
      const c = this.nearestFreeCar(b);
      if (!c) { const cc = this.wanted && this.wanted.nearestCop(b); if (cc && this.stealCop(cc)) return; const tj = this.nearestJack(b); if (tj) this.startJack(tj); return; }
      { const ci = this.cars.indexOf(c);   // somebody else is driving this vehicle and a seat is free: ride along instead of stealing it
        const cap = this.seatCap(c), pp = c.st.paxs || [], free = []; for (let k = 0; k < cap - 1; k++) if (pp[k] === undefined || pp[k] === -1) free.push(k);
        if (this.multi && c.st.driver !== -1 && c.st.driver !== this.localId && (ci < 12 || ci >= 16) && !c.st.wreck && free.length) {
          this.drive = c; this.paxMode = true; this.paxSeat = free[0]; (c.st.paxs = pp.length ? pp : [-1, -1, -1])[this.paxSeat] = this.localId; c.st.pax = this.localId; b.vx = b.vz = b.vy = 0; b.grounded = true;
          document.body.classList.add('driving'); document.body.classList.remove('near-car'); document.body.classList.remove('near-swing');
          if (c.mesh.userData.hero) { A.carDoor(true); setTimeout(() => A.carDoor(false), 700); } else A.sfx.door();
          this.camPitch = 0.3; this.camYaw = c.st.yaw + Math.PI; this.toast(IS_TOUCH ? 'RIDING ALONG - tap the door to get out' : 'RIDING ALONG - press C to get out'); return;
        } }
      if (this.multi && !c.local && c.st.driver !== -1 && c.st.driver !== this.localId) app.net.send({ t: 'jack', to: c.st.driver, c: this.cars.indexOf(c) }); // carjack: the driver is thrown out
      this.drive = c; c.st.driver = this.localId; c.st.parked = false; if (this.lightsOn) this.applyLights(c);
      b.vx = b.vz = b.vy = 0; b.grounded = true; document.body.classList.add('driving'); document.body.classList.remove('near-car'); document.body.classList.remove('near-swing');
      if (c.mesh.userData.hero) { const cv = cityVeh(c.st.id); A.carDoor(true); setTimeout(() => A.carDoor(false), 700); setTimeout(() => { if (this.drive === c) { A.engineCrank(cv); A.carEngineStart(cv); } }, 900); } else { A.engineStart(); A.sfx.door(); A.sfx.vroom(); }
      this.camPitch = 0.3; this.camYaw = c.st.yaw + Math.PI;
      this.toast(CAR_SPECS[c.st.id].name.toUpperCase() + '!  ' + (IS_TOUCH ? 'use the joystick to drive, tap the door to get out' : 'W/S drive • A/D steer • C get out'));
    }
  }
  // draw distance: the fog closes in just before it and the far parts of the city (map chunks, cars) are not drawn at all
  setFar() {
    const f = Q.far; CULL.far = IS_TOUCH ? Math.min(300, f * 0.65) : Math.min(520, f * 0.7); if (!this.meta.city) return;
    const clear = (OPT.haze || (IS_TOUCH ? 'normal' : 'clear')) === 'clear'; this.scene.fog.far = clear ? (this.fogFarBase || 950) * 2.2 : Math.min(this.fogFarBase || 950, f * 0.98); this.scene.fog.near = clear ? (this.fogNearBase || 180) * 1.8 : Math.min(this.fogNearBase || 180, f * 0.35);
    if (this.dn) { this.dn.fogFar0 = this.scene.fog.far; this.dn.fogNear0 = this.scene.fog.near; }
    this.cullT = 0;
  }
  cullFar(dt) {
    this.cullT = (this.cullT || 0) - dt; if (this.cullT > 0 || !this.world.chunks) return; this.cullT = 0.25;
    const p = this.camera.position, f = Q.far; for (const c of this.world.chunks) { const dx = c.x - p.x, dz = c.z - p.z, R = f + c.r; c.m.visible = dx * dx + dz * dz < R * R; }
  }
  // 0..1: how close the coast is (the waves get louder); 1 when you are on the water
  seaProx(x, z) {
    const T = this.world.terrain, W = this.world.waterY; if (!T || W === undefined) return 0; if (T(x, z) < W - 0.1) return 1;
    for (const d of [8, 20, 40, 70, 110]) for (let k = 0; k < 8; k++) { const a = k * 0.7854; if (T(x + Math.cos(a) * d, z + Math.sin(a) * d) < W - 0.1) return Math.max(0, 1 - d / 140); }
    return 0;
  }
  g_g(g) { g.scale.setScalar(1); g.rotation.x = 0; }
  // a mission puts the player straight behind the wheel: start the engine sound (and the lights) the same way getting into the car does
  engineOn(c) { try { if (this.lightsOn) this.applyLights(c); A.engineStop(); A.carEngineStop(); if (c.mesh.userData.hero) { A.engineCrank(cityVeh(c.st.id)); A.carEngineStart(cityVeh(c.st.id)); } else A.engineStart(); } catch (e) { console.warn(e); } }
  // DAMAGE FX (GTA V style), by health: <62 thin white fumes from under the hood, <35 heavy dark smoke, <15 black smoke + flames licking out of the engine bay, 0 = inferno.
  // The smoke swells as it rises and is dragged back by the car's own speed; flames / embers are additive so they glow.
  carFx(st, dt, near) {
    if (!near || st.wreck) return; const hp = st.hp === undefined ? 100 : st.hp; if (hp >= 62) return;
    const fx = Math.sin(st.yaw), fz = Math.cos(st.yaw), q = IS_TOUCH ? 0.6 : 1, vx = (st.vx || 0) * 0.55, vz = (st.vz || 0) * 0.55, R = Math.random;
    const lvl = hp <= 0 ? 4 : hp < 15 ? 3 : hp < 35 ? 2 : 1, hx = st.x + fx * 1.55, hz = st.z + fz * 1.55, hy = st.y + 0.95;
    const rate = [0, 7, 13, 22, 34][lvl] * q; st.fxA = (st.fxA || 0) + dt * rate;
    while (st.fxA >= 1) {
      st.fxA -= 1;
      if (lvl === 1) this.particles.emit(hx, hy, hz, 1, { color: '#e4e4e4', alpha: 0.4, size: 0.5, grow: 2.4, speed: 0.12, up: 1.2, life: 1.9, gravity: -0.45, spread: 0.3, vx, vz });
      else if (lvl === 2) { this.particles.emit(hx, hy, hz, 1, { color: R() < 0.35 ? '#a8a8a8' : '#4b4b4b', alpha: 0.7, size: 0.75, grow: 3.4, speed: 0.2, up: 1.9, life: 2.7, gravity: -0.55, spread: 0.4, vx, vz }); }
      else {
        this.particles.emit(hx + (R() - 0.5) * 0.5, hy + 0.1, hz + (R() - 0.5) * 0.5, 1, { color: R() < 0.7 ? '#171717' : '#3a3633', alpha: 0.85, size: 0.95, grow: 4.2, speed: 0.3, up: 2.7, life: 3.4, gravity: -0.6, spread: 0.5, vx, vz });
        const sp = lvl === 4 ? 1.1 : 0.55;   // flames: bright core + orange tongue, additive
        this.fxP.emit(hx + (R() - 0.5) * sp, hy - 0.05, hz + (R() - 0.5) * sp, 1, { color: R() < 0.45 ? '#ffd23f' : '#ff6a12', alpha: 0.9, size: lvl === 4 ? 1.6 : 1.0, speed: 0.35, up: 2.3, life: 0.5, gravity: -2.4, spread: sp, vx: vx * 0.5, vz: vz * 0.5 });
        if (R() < 0.18 * lvl) this.fxP.emit(hx, hy + 0.2, hz, 1, { color: '#ffb347', alpha: 1, size: 0.14, speed: 2.4, up: 4.5, life: 0.9, gravity: 5, spread: 0.3 });   // sparks
        if (lvl === 4 && R() < 0.5) this.fxP.emit(st.x - fx * 0.2 + (R() - 0.5), st.y + 1.1, st.z - fz * 0.2 + (R() - 0.5), 1, { color: '#ff7a1a', alpha: 0.8, size: 0.9, speed: 0.4, up: 2.0, life: 0.55, gravity: -2, spread: 1.0 });
      }
    }
  }
  // fire: a car at 0 health burns for ~6 s, then it is a burnt-out wreck (soot black, cannot be driven); it is replaced by a fresh one at its parking spot after a minute
  updateCarFire(dt) {
    const cp = this.camera.position;
    for (const c of this.cars) {
      const st = c.st, hero = c.mesh.userData.hero; if (!hero) continue;
      if (!st.home) st.home = { x: st.x, z: st.z, yaw: st.yaw };
      const fx = Math.sin(st.yaw), fz = Math.cos(st.yaw), near = (st.x - cp.x) ** 2 + (st.z - cp.z) ** 2 < 70 * 70;
      this.carFx(st, dt, near);
      if (near && st.id >= 30 && st.id <= 32 && Math.abs(st.speed) > 1.5) {   // boat wake: foam at the stern and a bow spray
        const bg = STYLE_GEO[cityVeh(st.id).style], fx = Math.sin(st.yaw), fz = Math.cos(st.yaw), k = Math.min(1, Math.abs(st.speed) / 14); st.wkA = (st.wkA || 0) + dt * (10 + 30 * k);
        while (st.wkA >= 1) { st.wkA -= 1; const w = this.world.waterY === undefined ? -1.2 : this.world.waterY, sd = Math.random() - 0.5;
          this.particles.emit(st.x - fx * bg.L * 0.45 + fz * sd * bg.w * 0.7, w + 0.1, st.z - fz * bg.L * 0.45 - fx * sd * bg.w * 0.7, 1, { color: '#e8f4ff', speed: 1.6 + 2 * k, up: 1.2 + 1.5 * k, life: 0.7, size: 0.45 + 0.4 * k });
          if (k > 0.3) for (const s2 of [-1, 1]) this.particles.emit(st.x + fx * bg.L * 0.3 - fz * s2 * bg.w * 0.4, w + 0.2, st.z + fz * bg.L * 0.3 + fx * s2 * bg.w * 0.4, 1, { color: '#ffffff', speed: 1.8 + 3 * k, up: 2 + 2 * k, life: 0.5, size: 0.3 + 0.3 * k }); } }
      { const hz = st.hp !== undefined && st.hp > 0 && st.hp < 100 && !st.wreck && Math.abs(st.speed) < 3 ? homeZone(st.x, st.z) : null;   // parked in a garage: fixed after 30 s
        if (hz && hz.zone === 'garage') {
          st.garT = (st.garT || 0) + dt;
          if (near && Math.random() < 0.25) this.particles.emit(st.x + (Math.random() - 0.5) * 2, st.y + 0.9, st.z + (Math.random() - 0.5) * 2, 1, { color: '#8fd3ff', speed: 1.2, up: 1.6, life: 0.6, size: 0.12, gravity: 2 });
          if (st.garT >= 30) { st.garT = 0; st.hp = 100; hero.repair(); A.sfx.pickup(); this.particles.emit(st.x, st.y + 1, st.z, 40, { rainbow: true, speed: 4, up: 4, life: 0.8, size: 0.25 }); }
        } else st.garT = 0; }
      if ((st.wreck || (st.hp !== undefined && st.hp <= 0)) && st.driver === -1 && !st.air) { const k = Math.exp(-4 * dt); st.yr = (st.yr || 0) * k; st.vx *= k; st.vz *= k; st.speed = (st.speed || 0) * k; st.steer = 0; if (st.pitch) st.pitch *= k; if (st.roll) st.roll *= k; }   // a dead car just stops where it is: it never keeps spinning or tumbling on the road
      if (st.hp !== undefined && st.hp <= 0 && !st.wreck) {
        st.burnT = (st.burnT || 0) + dt;
        if (st.burnT > 6) {   // burnt out (the driver, if still inside, is thrown out by the blast)
          st.wreck = true; st.wreckT = 0; charCar(c.mesh); hero.hurtLook(0);
          this.particles.emit(st.x, st.y + 1, st.z, 40, { color: '#ffb347', speed: 8, up: 6, life: 0.8, size: 0.5, gravity: 8, spread: 1.2 }); A.sfx.land(34);
          if (this.drive === c) { this.toggleCar(true); const b = this.me.body; b.hitCd = 0; b.immune = 0; if (knock(b, Math.sin(st.yaw + 2), Math.cos(st.yaw + 2), 16)) { b.vy = 6; b.stun = 2.4; A.crashSfx(10); this.shake = 0.8; } }
        }
      } else if (st.wreck) {
        st.wreckT += dt; if (near && st.wreckT < 25 && Math.random() < 0.3) this.particles.emit(st.x, st.y + 1.0, st.z, 1, { color: '#2b2b2b', speed: 0.3, up: 1.8, life: 1.6, size: 1.0, gravity: -0.7, spread: 0.8 });
        const far = (st.x - this.me.body.x) ** 2 + (st.z - this.me.body.z) ** 2 > 30 * 30;
        if (st.wreckT > 60 && far) { restoreCar(c.mesh); hero.repair(); st.wreck = false; st.burnT = 0; st.hp = 100; st.x = st.home.x; st.z = st.home.z; st.yaw = st.home.yaw; st.vx = st.vz = st.speed = 0; st.parked = true; st.driver = -1; }
      }
    }
  }
  // cars that somebody jumped out of keep rolling and slow down by themselves, then park
  stepRolling(dt) {
    if (!this.rolling.length) return;
    for (const c of this.rolling.slice()) {
      const st = c.st;
      if (c === this.drive) { this.rolling.splice(this.rolling.indexOf(c), 1); continue; }
      const others = this.cars.filter((q) => q !== c).map((q) => q.st); if (this.info.trafficList) for (const q of this.info.trafficList) others.push(q); others.push(...this.extraCars());
      for (let i = 0; i < 2; i++) { const e = stepCar(st, dt / 2, { gas: -0.35, steer: 0 }, this.info.track, others, Math.max(0, this.levelTime)); if (e && i === 0) { A.crashSfx(st.crash || 5); this.particles.emit(st.x, st.y + 0.8, st.z, 12, { color: '#ffd9a0', speed: 5, up: 3, life: 0.4, size: 0.2 }); st.crash = 0; } }
      const hero = c.mesh.userData.hero; if (hero && st.dmgQ && st.dmgQ.length) { for (const q of st.dmgQ) hero.dent(q.lx, q.lz, Math.min(0.3, 0.07 + q.d * 0.012)); st.dmgQ.length = 0; hero.hurtLook(st.hp); }
      if (Math.abs(st.speed) < 0.4) { st.vx = st.vz = st.speed = 0; st.parked = true; st.driver = -1; this.rolling.splice(this.rolling.indexOf(c), 1); if (this.multi) app.net.send({ t: 'carpark', c: this.cars.indexOf(c), x: +st.x.toFixed(2), y: +st.y.toFixed(2), z: +st.z.toFixed(2), r: +st.yaw.toFixed(3) }); }
    }
  }
  updateDrive(dt, canMove) {
    const c = this.drive, st = c.st, b = this.me.body;
    if (this.paxMode) { b.x = st.x; b.y = st.y; b.z = st.z; b.vx = b.vz = b.vy = 0; b.yaw = st.yaw; b.grounded = true; b.stun = 0; b.swim = 0; return; }   // a passenger: the car (driven on the other player's screen) carries me
    let gas = 0, steer = 0;
    if (canMove) {
      if (keys.has('KeyW') || keys.has('ArrowUp')) gas++; if (keys.has('KeyS') || keys.has('ArrowDown')) gas--;
      if (keys.has('KeyD') || keys.has('ArrowRight')) steer++; if (keys.has('KeyA') || keys.has('ArrowLeft')) steer--;
      { const tgt = (touch.sr ? 1 : 0) - (touch.sl ? 1 : 0); touch.bs += (tgt - touch.bs) * Math.min(1, dt * (tgt ? 5 : 9)); if (Math.abs(touch.bs) > 0.02) steer += touch.bs; else touch.bs = 0;   // on-screen steering arrows ease in and out
        gas += (touch.gas ? 1 : 0) - (touch.brk ? 1 : 0); }
      if (touch.x || touch.y) { // phone: left-screen joystick like a steering wheel + pedal: up = gas, down = brake / reverse, left / right = steer (works while accelerating)
        // a steady thumb pushing UP to accelerate always wanders a little sideways: a dead zone that grows with the push, then a soft curve (small movements = gentle steering, the edge = full lock)
        const ty = Math.abs(touch.y) < 0.12 ? 0 : touch.y, dz = 0.2 + 0.16 * Math.min(1, Math.abs(touch.y) * 1.3), ax = Math.abs(touch.x);
        const sv = ax <= dz ? 0 : Math.pow(Math.min(1, (ax - dz) / (0.95 - dz)), 1.5);
        gas += ty; steer += Math.sign(touch.x) * sv;
      }
    }
    const others = this.cars.filter((q) => q !== c).map((q) => q.st); if (this.info.trafficList) for (const q of this.info.trafficList) others.push(q); others.push(...this.extraCars());
    let ev = ''; const inp = { gas: clamp(gas, -1, 1), steer: clamp(steer, -1, 1) }; if (touch.hb || (canMove && keys.has('Space'))) inp.hb = true; if (this.mission && (this.mission.hold || this.mission.spectating)) { inp.gas = 0; inp.steer = 0; inp.hb = true; }   // mission countdown: held on the start line
    for (let i = 0; i < 2; i++) ev = stepCar(st, dt / 2, inp, this.info.track, others, Math.max(0, this.levelTime)) || ev;
    if (c.mesh.userData.hero) {
      const hero = c.mesh.userData.hero;
      if (st.dmgQ && st.dmgQ.length) { for (const q of st.dmgQ) hero.dent(q.lx, q.lz, Math.min(0.3, 0.07 + q.d * 0.012)); st.dmgQ.length = 0; hero.hurtLook(st.hp); }
      // the repair bay: park in the ring and the car is fixed in a couple of seconds
      { const dxr = st.x - REPAIR.x, dzr = st.z - REPAIR.z, inBay = dxr * dxr + dzr * dzr < REPAIR.r * REPAIR.r && Math.abs(st.speed) < 6;
        if (inBay && st.hp < 100) {
          this.repairT += dt; this.repairFx = (this.repairFx || 0) - dt;
          if (this.repairFx <= 0) { this.repairFx = 0.18; this.particles.emit(st.x + (Math.random() - 0.5) * 2, st.y + 0.9, st.z + (Math.random() - 0.5) * 2, 4, { color: '#8fd3ff', speed: 2.2, up: 2.5, life: 0.5, size: 0.14, gravity: 4 }); A.sfx.click(); }
          if (this.repairT > 2.4) { st.hp = 100; this.repairT = 0; hero.repair(); A.sfx.pickup(); this.particles.emit(st.x, st.y + 1, st.z, 40, { rainbow: true, speed: 4, up: 4, life: 0.8, size: 0.25 }); }
        } else this.repairT = 0; }
      { const hb = $('car-hp-i'); if (hb) { const h = Math.round(st.hp === undefined ? 100 : st.hp); if (hb.dataset.v !== String(h)) { hb.dataset.v = String(h); hb.style.width = h + '%'; hb.style.background = h > 55 ? '#4ade80' : h > 25 ? '#facc15' : '#ef4444'; } } }
      if (ev) {
        A.crashSfx(st.crash || 6);
        const q = IS_TOUCH ? 0.6 : 1, hit = st.crash || 6, nx = st.x + Math.sin(st.yaw) * Math.sign(st.speed || 1) * 1.9, nz = st.z + Math.cos(st.yaw) * Math.sign(st.speed || 1) * 1.9;
        this.particles.emit(nx, st.y + 0.6, nz, Math.round((ev === 'crash' ? 16 : 6) * q), { color: '#ffcf6a', speed: 6 + hit * 0.3, up: 3, life: 0.35, size: 0.1, gravity: 14, spread: 0.6 });   // sparks
        this.particles.emit(nx, st.y + 0.7, nz, Math.round((ev === 'crash' ? 9 : 4) * q), { color: '#b9b9b9', speed: 1.6, up: 1.4, life: 1.1, size: 0.9, gravity: -0.6, spread: 0.8 });                // dust / smoke puff
        this.shake = Math.max(this.shake || 0, Math.min(1, 0.12 + (st.crash || 0) * 0.04));
        { const bike = !!c.mesh.userData.bike, cr = st.crash || 0;   // GTA V: no health bar - a crash only tints the screen red for a moment (a rider is more exposed than a driver in a car)
          if (cr > 4) this.hurtFx(Math.min(1, (cr - 3) / (bike ? 14 : 24)) * (bike ? 1 : 0.6));
          if (bike && cr > 13 && !this.paxMode) { this.toggleCar(true); const rb = this.me.body; rb.hitCd = 0; rb.immune = 0; if (knock(rb, Math.sin(st.yaw), Math.cos(st.yaw), Math.min(14, 5 + cr * 0.5))) { rb.vy = 3.5 + Math.min(3, cr * 0.15); rb.stun = 2.4; this.hurtFx(1); } } }   // a hard hit throws the biker over the handlebars
        st.crash = 0; }
    } else {
    if (ev === 'bump') { A.sfx.land(18); this.particles.emit(st.x, 0.8, st.z, 12, { color: '#ffd23f', speed: 4, up: 3, life: 0.4, size: 0.25 }); this.shake = Math.max(this.shake || 0, 0.25); }
    if (ev === 'crash') { A.sfx.land(34); this.particles.emit(st.x, 0.9, st.z, 26, { color: '#ffb347', speed: 7, up: 5, life: 0.6, size: 0.35 }); this.shake = Math.max(this.shake || 0, Math.min(1, 0.4 + (st.crash || 0) * 0.04)); st.crash = 0; }
    }
    b.x = st.x; b.y = st.y; b.z = st.z; b.vx = st.vx; b.vz = st.vz; b.vy = 0; b.grounded = true; b.ground = null; b.yaw = st.yaw; b.stun = 0;
    if (c.mesh.userData.hero) { A.carEngineSet(st.rpm, st.load, st.speed); A.skidSet(st.skid > 0.12 ? st.skid : 0); } else A.engineSet(Math.abs(st.speed) / CAR_SPECS[st.id].max, gas > 0);
    this.hornCd -= dt; this.skidT -= dt;
    if (c.mesh.userData.hero) {
      this.smokeT = (this.smokeT || 0) - dt;
      if (this.smokeT <= 0) {
        this.smokeT = IS_TOUCH ? 0.09 : 0.05;
        const fx = Math.sin(st.yaw), fz = Math.cos(st.yaw);
        if (st.skid > 0.25 && Math.abs(st.speed) > 5) for (const sgn of [-1, 1]) this.particles.emit(st.x - fx * 1.25 + fz * sgn * 0.85, st.y + 0.12, st.z - fz * 1.25 - fx * sgn * 0.85, 1, { color: '#e6e6e6', speed: 0.5, up: 0.7, life: 0.9, size: 0.7, gravity: -0.35, spread: 0.2 });   // tyre smoke
        else if (st.load > 0.9 && st.speed > 0.5 && st.speed < 5 && st.gear === 1) this.particles.emit(st.x - fx * 1.25, st.y + 0.1, st.z - fz * 1.25, 1, { color: '#d0d0d0', speed: 0.4, up: 0.5, life: 0.6, size: 0.45, gravity: -0.3 });       // wheelspin off the line
      }
    } else if (st.drift > 0.55 && Math.abs(st.speed) > 8) {
      if (this.skidT <= 0) { this.skidT = 0.25; A.sfx.skid(); }
      for (const sgn of [-1, 1]) this.particles.emit(st.x - Math.sin(st.yaw) * 1.5 + Math.cos(st.yaw) * sgn * 0.9, 0.25, st.z - Math.cos(st.yaw) * 1.5 - Math.sin(st.yaw) * sgn * 0.9, 1, { color: '#e8e8e8', speed: 1.2, up: 1.2, life: 0.5, size: 0.5, gravity: -0.5 });
    }
    if (st.boost > 0 && Math.random() < 0.8) this.particles.emit(st.x - Math.sin(st.yaw) * 2.2, 0.5, st.z - Math.cos(st.yaw) * 2.2, 1, { color: '#ffb347', speed: 2, up: 1, life: 0.35, size: 0.4 });
  }
  honkOn() { if (this.paxMode) return;
    if (this.drive && cityVeh(this.drive.st.id).extra === 'police') { const n = performance.now(); if (n - (this._sirT || 0) < 350) return; this._sirT = n; if (A.sirenOn()) A.sirenStop(); else A.sirenStart(); return; }   // police car: the horn button is the siren switch
    if (this.peds && this.drive) { this.peds.startle(this.drive.st.x, this.drive.st.z, 17); this.evt({ k: 'st', x: +this.drive.st.x.toFixed(1), z: +this.drive.st.z.toFixed(1), r: 17 }); } if (this.drive && this.drive.mesh.userData.hero) A.hornStart(cityVeh(this.drive.st.id).hornHz); else this.honk(); }
  honkOff() { A.hornStop(); }
  honk() { if (this.drive && !this.paxMode && this.hornCd <= 0) { const big = CAR_SPECS[this.drive.st.id].racer; this.hornCd = big ? 0.9 : 0.4; big ? A.sfx.honkBig() : A.sfx.honk(); if (big) this.shake = Math.max(this.shake || 0, 0.12); } }
  onCars(cars) { // parked-car positions from the server (for players who join late)
    for (const k of Object.keys(cars || {})) { const c = this.cars[+k], d = cars[k]; if (!c || !d || c === this.drive) continue; c.st.x = +d.x; c.st.z = +d.z; c.st.y = +d.y || 0; c.st.yaw = +d.r; c.mesh.position.set(c.st.x, c.st.y, c.st.z); c.mesh.rotation.y = c.st.yaw; }
  }
  // the thief's getaway car is a real, heavy obstacle (mission 2): you bounce off it, and it knocks you down on foot
  // solid cars that are not in this.cars: the thief's getaway car and the police patrol cars
  extraCars() { const r = []; const tc = this.thiefCar(); if (tc) r.push(tc); if (this.mission && this.mission.mission === 'snipe') r.push(...this.mission.ss.solids()); if (this.wanted) for (const s of this.wanted.states()) r.push(s); return r; }
  thiefCar() { const ts = this.mission && this.mission.ts; return ts && ts.carSt || null; }
  // pedestrians vs cars: parked cars are solid, fast cars bonk you away
  softCars(b, canMove) {
    if (!canMove || this.finished) return;
    const list = this.cars.filter((c) => c !== this.drive).map((c) => c.st); if (this.info.trafficList) for (const q of this.info.trafficList) list.push(q); list.push(...this.extraCars());
    for (const st of list) {
      const spec = CAR_SPECS[st.id], dx = b.x - st.x, dz = b.z - st.z;
      if (dx * dx + dz * dz > 40 || Math.abs(b.y - st.y) > 2.5) continue;
      const hl0 = st.hl || spec.hl, hw0 = st.hw || spec.hw;
      const fx = Math.sin(st.yaw), fz = Math.cos(st.yaw), lz = dx * fx + dz * fz, lx = -dx * fz + dz * fx, hl = hl0 + P.R + 0.05, hw = hw0 + P.R + 0.05;
      if (Math.abs(lz) >= hl || Math.abs(lx) >= hw) continue;
      if (Math.abs(st.speed) > 4 && b.hitCd <= 0) { // a moving car hits you: thrown aside
        const sg = Math.sign(st.speed) || 1; let nx = fx * sg, nz = fz * sg; nx += -fz * Math.sign(lx || 1) * 0.5; nz += fx * Math.sign(lx || 1) * 0.5; const l = Math.hypot(nx, nz) || 1;
        if (knock(b, nx / l, nz / l, Math.min(22, 4 + Math.abs(st.speed) * 0.85))) { b.vy = 5 + Math.min(4, Math.abs(st.speed) * 0.12); b.stun = Math.min(3.2, 1.8 + Math.abs(st.speed) * 0.05); b.immune = 0; A.crashSfx(Math.min(10, 4 + Math.abs(st.speed) * 0.2)); this.shake = Math.max(this.shake || 0, 0.3); this.particles.emit(b.x, b.y + 0.8, b.z, 8, { color: '#ffd9a0', speed: 3, up: 2, life: 0.4, size: 0.2 }); continue; }
      }
      const pz = hl - Math.abs(lz), px = hw - Math.abs(lx);
      if (pz < px) { const k = Math.sign(lz || 1) * pz; b.x += fx * k; b.z += fz * k; } else { const k = Math.sign(lx || 1) * px; b.x += -fz * k; b.z += fx * k; }
    }
  }
  updateCars(dt, canMove) {
    this.lastDt = dt;
    const b = this.me.body, t = performance.now() / 1000;
    // who drives what (remote drivers stream their car pose through their normal snapshots)
    for (const c of this.cars) { c.st.pax = -1; if (!c.st.paxs) c.st.paxs = [-1, -1, -1]; else c.st.paxs[0] = c.st.paxs[1] = c.st.paxs[2] = -1; }
    const seatFree = (c, want) => { const cap = Math.max(1, this.seatCap(c) - 1); for (let k = 0; k < cap; k++) { const q = (want + k) % cap; if (c.st.paxs[q] === -1) return q; } return want % cap; };
    let driverSeen = false; const dIdx = this.drive ? this.cars.indexOf(this.drive) : -1;
    if (this.drive && this.paxMode) { this.drive.st.paxs[this.paxSeat | 0] = this.localId; this.drive.st.pax = this.localId; }
    for (const c of this.cars) if ((c !== this.drive || this.paxMode) && !this.rolling.includes(c)) { c.st.driver = -1; c.st.speed = 0; c.st.vx = c.st.vz = 0; }
    const ags = [];
    for (const r of this.remotes.values()) {
      const g = r.model.group; g.rotation.order = 'YXZ';
      if (!r.has) continue;
      if (this.ghost(r)) { g.visible = false; if (r.vcar) r.vcar.mesh.visible = false; continue; }
      g.visible = true; if (r.vcar) r.vcar.mesh.visible = true;
      if (!(r.flags & LOCALCAR) && r.vcar) { this.scene.remove(r.vcar.mesh); r.vcar = null; }
      if (r.flags & 256) {
        const c = (r.flags & LOCALCAR) ? this.remoteCar(r) : this.cars[carFlagIdx(r.flags)];
        if (c && (c !== this.drive || this.paxMode)) {
          const st = c.st, dy = ((r.yaw - (st._py ?? r.yaw) + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
          if (c === this.drive) driverSeen = true; r.onBike = !!c.mesh.userData.bike; st.driver = r.id; st.parked = false; st.x = r.x; st.z = r.z; { const py = st.y; st.y = r.y || 0; st.pitch += ((Math.abs(r.speed) > 1 ? Math.atan2(st.y - py, Math.max(0.01, Math.abs(r.speed) * dt)) : 0) - st.pitch) * Math.min(1, dt * 8); } st.speed = r.speed; st.vx = Math.sin(r.yaw) * r.speed; st.vz = Math.cos(r.yaw) * r.speed; st._py = r.yaw;
          st.steer += (clamp(-dy / Math.max(dt, 0.008) * 0.45, -1, 1) - st.steer) * Math.min(1, dt * 8); st.yaw = r.yaw;
          this.seatModel(g, c); this.tagScale(r.tag, g.position, 1);
        }
      } else if (r.flags & PAX) {   // a passenger on somebody's car
        const c = this.cars[carFlagIdx(r.flags)];
        if (c) { const sk = seatFree(c, (r.flags >> PAXSEAT) & 3); c.st.paxs[sk] = r.id; c.st.pax = r.id; r.onBike = !!c.mesh.userData.bike; this.seatModel(g, c, true, sk); this.tagScale(r.tag, g.position, 1); }
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
    setCityCamera(this.camera.position);
    // cars: pose + wheels
    for (const c of this.cars) { c.mesh.position.set(c.st.x, c.st.y, c.st.z); c.mesh.rotation.y = c.st.yaw; animateCar(c.mesh, c.st, dt); }
    for (const r of this.remotes.values()) if (r.vcar) { const c = r.vcar; c.mesh.position.set(c.st.x, c.st.y, c.st.z); c.mesh.rotation.y = c.st.yaw; animateCar(c.mesh, c.st, dt); }
    // "get in" prompt
    if (this.drive && this.paxMode) {   // my driver left (or lost the connection): I get out too
      this.drive.st.paxs[this.paxSeat | 0] = this.localId; this.drive.st.pax = this.localId;
      if (driverSeen || !this.multi || (this.mission && this.mission.phase && this.mission.phase !== 'idle')) this.paxOrphan = 0; else if ((this.paxOrphan = (this.paxOrphan || 0) + dt) > 1.5) { this.paxOrphan = 0; this.toggleCar(true); }
    }
    const near = !this.drive && canMove && !this.menuOpen && (this.nearestFreeCar(b) || this.nearestJack(b) || (this.wanted && this.wanted.nearestCop(b)));
    if (!!near !== document.body.classList.contains('near-car')) document.body.classList.toggle('near-car', !!near);
    if (this.drive) { const sp = $('car-speed'); if (sp) { const n = Math.round(Math.abs(this.drive.st.speed) * 3.6); if (sp.firstElementChild.textContent !== String(n)) sp.firstElementChild.textContent = n; } }
  }

  onFell() {
    const b = this.me.body;
    if (this.meta.city && this.safeHist && this.safeHist.length) {   // GTA-style: back to where you were standing a couple of seconds ago, no flash, no trip home
      const q = this.safeHist[Math.max(0, this.safeHist.length - 4)]; respawn(b, q.x, q.y + 0.1, q.z, b.yaw); b.hitCd = 0.5; this.camInit = false; this.toast('Back on solid ground'); return;
    }
    const cp = this.cpCur;
    const slotOff = (this.slot - 1) * 1.6;
    let x, y, z, yw = Math.PI;
    if (cp) { x = clamp(cp.x + slotOff, cp.x - cp.w / 2 + 1.5, cp.x + cp.w / 2 - 1.5); y = cp.y + 0.05; z = cp.spawn[2]; }
    else { const s = this.spawnPoint(this.slot); x = s[0]; y = s[1] + 0.02; z = s[2]; yw = s[3]; }
    respawn(b, x, y, z, yw); if (this.meta.city && !cp) this.camYaw = yw - Math.PI;
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
      if (!r.has || this.ghost(r) || (r.flags & (8 | 256 | PAX)) || Date.now() - r.rxAt > 500) continue; // never collide with a ghost whose packets stopped (or with somebody sitting in a vehicle)
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
  sendSnap() {
    const b = this.me.body; this.sendT = 0; this.lastSend = performance.now();
    const flags = (b.grounded ? 1 : 0) | (b.stun > 0 ? 2 : 0) | (b.dive > 0 ? 4 : 0) | (this.finished ? 8 : 0) | (this.swingT > 0 ? 16 : 0) | (b.shield > 0 ? 32 : 0) | (this.fx.turbo > 0 ? 64 : 0) | (this.swingMega && this.swingT > 0 ? 128 : 0) | (this.drive ? (this.drive.local ? (256 | LOCALCAR) : (this.paxMode ? (PAX | ((this.paxSeat & 3) << PAXSEAT)) : 256) | carFlagBits(this.cars.indexOf(this.drive))) : 0) | (this.an ? this.an.flagBits() : 0) | (b.swim > 0.4 && !this.drive ? 4096 : 0) | (this.hang ? 1048576 : 0) | (this.crouch && !this.drive ? 2097152 : 0) | (this.punchT > 0 && !this.drive ? 8388608 : 0) | (this.punchT > 0 && this.kickK && !this.drive ? 4194304 : 0);
    app.net.send({ t: 's', x: +b.x.toFixed(2), y: +b.y.toFixed(2), z: +b.z.toFixed(2), r: +b.yaw.toFixed(2), a: flags, w: this.weaponCode(), vm: this.drive && this.drive.local ? this.drive.st.id : 0, sp: +Math.min(99, Math.hypot(b.vx, b.vz)).toFixed(1), ts: app.net.stamp(), rs: this.rs });
  }

  // ---- baseball bat (multiplayer): pushes rivals away, never kills
  swing() {
    if (this.meta.city) return false;
    if (!(this.multi || this.meta.free) || this.over || this.finished || this.levelTime < 0 || this.batCd > 0) return false;
    const b = this.me.body; if (b.stun > 0) return false;
    this.swingMega = this.fx.mega > 0; if (this.swingMega) this.fx.mega--;
    this.batCd = 1.1; this.swingT = 0.001; this.batPending = true; A.sfx.swing(true);
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
      if (!r.has || this.ghost(r) || (r.flags & 8) || Date.now() - r.rxAt > 800) continue;
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
  restoreMission(mesh) { restoreCar(mesh); }
  drawBigMap() { if (!this.minimap) return; const bb = this.me.body, drv = this.drive ? this.drive.st : null, px = drv ? drv.x : bb.x, pz = drv ? drv.z : bb.z;
    this.minimap.drawBig($('bigmap'), { x: px, z: pz, yaw: drv ? drv.yaw : bb.yaw }, [...this.remotes.values()].filter((q) => q.has).map((q) => ({ x: q.x, z: q.z, color: CHARACTERS[q.info.char].color })), this.mission && this.mission.marks(), this.mission && this.mission.route(), this.wanted && this.wanted.mapInfo()); }
  /* the map pauses the game for this player (alone: the whole game waits; with friends the world goes on and you stand still) */
  toggleMap(on) { if (!this.meta.city) return; const was = this.bigMapOpen; this.bigMapOpen = on === undefined ? !this.bigMapOpen : !!on; if (this.bigMapOpen && !was && this.minimap) this.minimap.bigOpen(); document.body.classList.toggle('big-map', this.bigMapOpen);
    if (this.bigMapOpen && !was) { this.mapLocked = document.pointerLockElement === canvas; try { document.exitPointerLock(); } catch {}   // laptop: give the mouse back (visible cursor, trackpad pinch works)
 if (!this.multi && !this.paused) { this.paused = true; this.pauseAt = performance.now(); this.mapPause = true; } this.drawBigMap(); }
    if (!this.bigMapOpen && was && this.mapLocked && !IS_TOUCH && !this.menuOpen) { this.mapLocked = false; setTimeout(() => tryLock(), 60); }
    if (!this.bigMapOpen && was && this.mapPause) { this.mapPause = false; if (this.paused && !this.menuOpen) { this.t0 += performance.now() - this.pauseAt; this.paused = false; } } }
  /* tap a spot on the map: a blue line along the real roads from here to there (shown on the road, the small map and the big map); tap the pin again to remove it */
  setWaypoint(x, z) { if (!this.meta.city) return; if (this.nav && Math.hypot(this.nav.x - x, this.nav.z - z) < 14 / Math.max(1, (this.minimap && this.minimap.bz ? this.minimap.bz.z : 1))) { this.clearWaypoint(); return; }
    this.nav = { x, z, pts: null, t: 0 }; if (!this.navUpdate()) { this.nav = null; this.toast('NO ROAD GOES THERE'); } else A.sfx.click(); }
  clearWaypoint() { this.nav = null; if (this.minimap) this.minimap.nav = null; this.navHide(); }
  navHide() { if (!this.navMesh) return; this.scene.remove(this.navMesh); this.navMesh.geometry.dispose(); this.navMesh.material.dispose(); this.navMesh = null; }
  navUpdate() {
    const n = this.nav; if (!n) return false; const bb = this.me.body, drv = this.drive ? this.drive.st : null, px = drv ? drv.x : bb.x, pz = drv ? drv.z : bb.z;
    if (Math.hypot(n.x - px, n.z - pz) < 12) { this.clearWaypoint(); this.toast('YOU HAVE ARRIVED'); return true; }
    const pts = findRoute(px, pz, n.x, n.z); if (!pts) return false; n.pts = pts; n.t = 0; if (this.minimap) this.minimap.nav = { x: n.x, z: n.z, pts };
    /* the blue ribbon on the road: the first 320 m of the way */
    const P = []; let acc = 0; for (let i = 1; i < pts.length && acc < 320; i++) { const a = pts[i - 1], b = pts[i], L = Math.hypot(b[0] - a[0], b[1] - a[1]), k = Math.max(1, Math.ceil(L / 2.5)); for (let j = 0; j < k; j++) P.push([a[0] + (b[0] - a[0]) * j / k, a[1] + (b[1] - a[1]) * j / k]); acc += L; } P.push(pts[Math.min(pts.length - 1, pts.length - 1)]);
    this.navHide(); if (P.length < 2) return true; const ter = this.info.track && this.info.track.terrain ? this.info.track.terrain : () => 0, W = 0.75, pos = [], idx = [];
    for (let i = 0; i < P.length; i++) { const a = P[Math.max(0, i - 1)], b = P[Math.min(P.length - 1, i + 1)]; let dx = b[0] - a[0], dz = b[1] - a[1]; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l; const y = ter(P[i][0], P[i][1]) + 0.2; pos.push(P[i][0] - dz * W, y, P[i][1] + dx * W, P[i][0] + dz * W, y, P[i][1] - dx * W); if (i) { const q = i * 2; idx.push(q - 2, q - 1, q, q - 1, q + 1, q); } }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: '#2f8cff', side: THREE.DoubleSide, toneMapped: false, transparent: true, opacity: 0.95, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -5, polygonOffsetUnits: -5 })); m.renderOrder = 5; m.frustumCulled = false; this.scene.add(m); this.navMesh = m; return true; }
  toggleCrouch() { if (this.over || this.drive) return; this.crouch = !this.crouch; this.syncAct(); }
  // equip one weapon by name ('fist' | 'bat' | 'pistol' | 'ak') - only if it is owned
  equip(k) { if (this.over || this.drive || !this.wallet) return false; const w = k === 'fist' ? null : k; if (w && !this.wallet.owns(w)) return false; this.weapon = w; if (!w || w === 'bat') { this.aiming = false; this.aimT = 0; } this.reloadT = 0; this.syncAct(); return true; }
  // PUBG style weapon wheel: a ring of the four weapons round the middle of the screen; tap one to swap at once
  toggleWheel(force) {
    const el = $('wheel'); if (!el || !this.wallet) return; const open = force === undefined ? el.classList.contains('hidden') : !!force;
    if (!open || this.drive || this.over) { el.classList.add('hidden'); el.innerHTML = ''; this.wheelOpen = false; return; }
    const vm = Math.min(window.innerWidth, window.innerHeight), ws = Math.max(66, Math.min(112, vm * 0.23)), cur = this.weapon || 'fist';
    // the wheel sits right beside the weapon button (2 x 2, tight), so the thumb barely moves
    let cx = window.innerWidth * 0.8, cy = window.innerHeight / 2; { const wb = $('a-weapon'), r = wb && wb.getBoundingClientRect(); if (r && r.width > 4) { cx = r.left + r.width / 2; cy = r.top + r.height / 2; } }
    el.style.setProperty('--ws', ws + 'px'); el.innerHTML = ''; el.classList.remove('hidden'); this.wheelOpen = true;
    const NAMES = { fist: 'FISTS', bat: 'BAT', pistol: 'PISTOL', ak: 'AK-47', sniper: 'SNIPER' };
    ['fist', 'bat', 'pistol', 'ak', 'sniper'].forEach((k, i) => {
      const owned = k === 'fist' || this.wallet.owns(k), W = WEAPONS[k], s = document.createElement('button'), col = i % 2, row = i >> 1, gap = 6;
      let px = cx - ws * 0.62 - col * (ws + gap), py = cy + (row - 1) * (ws + gap);
      px = Math.max(ws / 2 + 4, Math.min(window.innerWidth - ws / 2 - 4, px)); py = Math.max(ws / 2 + 4, Math.min(window.innerHeight - ws / 2 - 4, py));
      s.className = 'ws' + (cur === k ? ' sel' : '') + (owned ? '' : ' lock'); s.style.left = Math.round(px) + 'px'; s.style.top = Math.round(py) + 'px';
      s.innerHTML = WEAPON_ICON[k] + '<small>' + (owned ? (W && !W.melee ? this.wallet.mag(k) + '/' + this.wallet.reserve(k) : NAMES[k]) : 'LOCKED') + '</small>';
      const pick = (e) => { e.preventDefault(); e.stopPropagation(); if (!owned) return; this.equip(k); A.sfx.click(); this.toggleWheel(false); };
      s.addEventListener('pointerdown', pick); el.appendChild(s);
    });
    const hub = null;
    el.onpointerdown = (e) => { if (e.target === el) { e.preventDefault(); this.toggleWheel(false); } };
    try { if (document.pointerLockElement) document.exitPointerLock(); } catch (e) { /* ignore */ }
  }
  cycleWeapon() { if (this.over || this.drive || !this.wallet) return; const L = this.wallet.cycle(), i = Math.max(0, L.indexOf(this.weapon)); this.weapon = L[(i + 1) % L.length]; if (!this.weapon || this.weapon === 'bat') { this.aiming = false; this.aimT = 0; } this.reloadT = 0; this.syncAct(); }
  zoomScope(d) { if (!this.scoped) return; const n = clamp((this.scopeLvl || 0) + d, 0, SCOPE_FOV.length - 1); if (n !== this.scopeLvl) { this.scopeLvl = n; A.sfx.click(); } const el = $('sz-lvl'); if (el) el.textContent = 'x' + (62 / SCOPE_FOV[n]).toFixed(1); }
  aimHold(on) { if (this.over || this.drive || !this.weapon || this.weapon === 'bat' || (on && this.mission && this.mission.freeze)) return; if (this.aiming !== !!on) { this.aiming = !!on; this.aimT = 0; this.syncAct(); } }
  toggleAim() { if (this.over || this.drive || !this.weapon || this.weapon === 'bat' || (!this.aiming && this.mission && this.mission.freeze)) return; this.aiming = !this.aiming; this.aimT = 0; this.syncAct(); }
  get aimOn() { return !!this.weapon && this.weapon !== 'bat' && (this.aiming || this.aimT > 0); }
  syncAct() { { const ab = $('a-aim'); if (ab) { ab.classList.toggle('on', !!this.aiming); ab.classList.toggle('gunned', isGun(this.weapon)); } } const wb = $('a-weapon'); if (wb) wb.innerHTML = WEAPON_ICON[this.weapon || 'fist'];
    { const pb = $('a-punch'); if (pb) { const gun = isGun(this.weapon); if (pb.dataset.gun !== (gun ? '1' : '0')) { if (!pb.dataset.fist) pb.dataset.fist = pb.innerHTML; pb.dataset.gun = gun ? '1' : '0'; pb.classList.toggle('gun', gun); pb.innerHTML = gun ? BULLET_ICON + '<i>FIRE</i>' : pb.dataset.fist; pb.title = gun ? 'Fire (click / F)' : 'Punch (F)'; pb.setAttribute('aria-label', gun ? 'Fire' : 'Punch'); } } } const ab = $('a-aim'); if (ab) { ab.classList.toggle('on', !!this.aiming); ab.style.opacity = this.weapon && this.weapon !== 'bat' ? '' : '0.35'; } this.updateAmmoHud(); const c = $('a-crouch'); if (c) c.classList.toggle('on', !!this.crouch); }
  pedHitMe(p) {   // a pedestrian who fights back lands a punch on me
    const b = this.me.body; if (this.drive || b.stun > 0 || b.immune > 0) return;
    const dx = b.x - p.x, dz = b.z - p.z, d = Math.hypot(dx, dz) || 1;
    if (knock(b, dx / d, dz / d, 7)) { b.vy = 2; b.stun = 0.4; this.crouch = false; A.sfx.bonk(); A.voice.pain(0.7); this.shake = Math.max(this.shake || 0, 0.2); this.particles.emit(b.x, b.y + 1.2, b.z, 8, { color: '#ffffff', speed: 3, up: 2, life: 0.3, size: 0.25 }); }
  }
  // ================= CITY ECONOMY: money, weapons, the weapon store, traffic jacking, selling cars =================
  initCityEconomy(info, scene) {
    this.wallet = new Wallet(); this.wallet.on = (n) => this.moneyPop(n);
    this.jack = null; this.fireCd = 0; this.reloadT = 0; this.aimT = 0; this.fireHeld = false; this.lightsOn = false; this.sellT = 0; this.onArms = false; this.shopClosed = false; this.tracers = [];
    this.tai = info.tai || null; this.remoteAims = new Map(); this.honkOut = []; this.netAims = []; this.netPersons = [];
    if (info.trafficCtx === undefined) info.trafficCtx = { me: null, carSt: null, cars: [], aim: null, honk: (c) => this.aiHonk(c), driverOut: (c, m) => this.driverOut(c, m) };
    this.moneyEl = $('hud-money'); if (this.moneyEl) this.moneyEl.classList.remove('hidden');
    this.setupShopUI(); this.moneyPop(0); this.updateAmmoHud();
    for (let i = 0; i < 3; i++) { const m = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.035, 1), new THREE.MeshBasicMaterial({ color: '#ffe9a0', transparent: true, opacity: 0.9, depthWrite: false, toneMapped: false })); m.visible = false; scene.add(m); this.tracers.push({ m, t: 0 }); }
  }
  earn(n, why) { if (this.wallet && n) this.wallet.add(n, why); }
  moneyPop(n) {
    const el = this.moneyEl; if (!el) return; const b = el.querySelector('b'), i = el.querySelector('i');
    b.textContent = fmtMoney(this.wallet.money);
    if (n) { i.textContent = (n > 0 ? '+' : '-') + fmtMoney(Math.abs(n)); i.classList.toggle('neg', n < 0); i.classList.add('pop'); clearTimeout(this.popT); this.popT = setTimeout(() => i.classList.remove('pop'), 1700); if (n > 0) A.sfx.cash && A.sfx.cash(); }
    if (this.shopOpen) this.renderShop();
  }
  updateAmmoHud() {
    const el = $('hud-ammo'); if (!el) return; const w = this.weapon, W = w && WEAPONS[w];
    if (this.reloadT > 0 && W) { el.textContent = 'RELOADING'; el.classList.remove('hidden'); }
    else if (W && !W.melee) { el.textContent = this.wallet.mag(w) + ' / ' + this.wallet.reserve(w); el.classList.remove('hidden'); } else el.classList.add('hidden');
  }
  // ================= SHARED CITY (multiplayer) =================
  // The room host simulates the pedestrians and the traffic and streams them (6 times a second); the other players show them as puppets and
  // send what they do to them (punch, shot, horn, carjack) to the host as 'ev' events. Weapons and stolen cars travel in the position snapshots.
  weaponCode() { const wn = this.drive ? null : this.weapon; return (wn === 'sniper' ? 3 | 16 : WNAME.indexOf(wn) & 3) | (this.aimOn && !this.drive ? 4 : 0) | (this.lightsOn && this.drive ? 8 : 0); }
  get simHost() { return !this.multi || !app.room || app.room.hostId === this.localId; }
  evt(o) { if (this.multi && !this.simHost) app.net.send({ t: 'ev', ...o }); }
  remoteCar(r) {   // a stolen traffic car another player is driving: build its model once
    const id = r.vm || 11; if (!r.vcar || r.vcar.st.id !== id) {
      if (r.vcar) this.scene.remove(r.vcar.mesh);
      const mesh = buildCarMesh(id, IS_TOUCH), bh = bodyHalf(mesh); mesh.rotation.order = 'YXZ'; this.scene.add(mesh); const st = newCar(id, r.x, r.z, r.yaw); if (bh) { st.hl = Math.max(st.hl || 0, bh.hl - 0.03); st.hw = Math.max(st.hw || 0, bh.hw - 0.03); } st.local = true; r.vcar = { st, mesh, local: true, remote: true };
    } return r.vcar;
  }
  ghost(r) { const B = this.busy; return !!(B && B.size && B.has(this.localId) !== B.has(r.id)); }   // somebody in a mission while I am not (or the other way round): he is not in my instance
  netWorld(dt) {
    if (!this.multi || !this.peds || !this.tai) return;
    const host = this.simHost; this.peds.puppet = this.tai.puppet = !host;
    const others = [], persons = [];
    for (const r of this.remotes.values()) { if (!r.has || this.ghost(r) || (r.flags & 8) || Date.now() - r.rxAt > 1500) continue; if (!(r.flags & (256 | PAX))) { persons.push({ x: r.x, z: r.z }); others.push({ x: r.x, z: r.z, id: r.id }); } }
    this.peds.others = host ? others : []; this.netPersons = host ? persons : [];
    this.netAims = []; if (host) { const now = performance.now(); for (const [id, a] of this.remoteAims) if (now - a.at < 600) this.netAims.push(a); else this.remoteAims.delete(id); }
    // the aim of a guest: the host's traffic must stop for his gun too
    if (!host) { this.aimSendT = (this.aimSendT || 0) - dt; if (this.aimOn && !this.drive && this.aimSendT <= 0) { this.aimSendT = 0.25; const b = this.me.body; this.evt({ k: 'ai', x: +b.x.toFixed(1), z: +b.z.toFixed(1), dx: +Math.sin(b.yaw).toFixed(2), dz: +Math.cos(b.yaw).toFixed(2) }); } return; }
    this.streamT = (this.streamT || 0) - dt; if (this.streamT > 0) return; this.streamT = 0.17;
    app.net.send({ t: 'pd', d: this.peds.snapshot(), lt: +this.levelTime.toFixed(2) });
    const hk = this.honkOut; this.honkOut = []; app.net.send({ t: 'tf', d: this.tai.snapshot(), h: hk.length ? hk.slice(0, 3) : undefined });
  }
  onWorld(m) {   // a stream from the host
    if (this.simHost) return;
    if (m.t === 'pd') { this.peds.applySnap(m.d); if (typeof m.lt === 'number') { const off = m.lt - this.levelTime; this.pedOff = this.pedOff === undefined || Math.abs(off - this.pedOff) > 2 ? off : this.pedOff + (off - this.pedOff) * 0.2; } } else { this.tai.applySnap(m.d); if (m.h) for (const h of m.h) { const d = Math.hypot(h[0] - this.camera.position.x, h[1] - this.camera.position.z); if (d < 40) A.sfx.honk(); } }
  }
  onEvent(m) {   // host: something a guest did to the shared world
    if (!this.simHost || !this.peds) return; const quiet = () => {};
    switch (m.k) {
      case 'st': this.peds.startle(+m.x, +m.z, Math.min(30, +m.r || 14)); break;
      case 'al': this.peds.alarm(+m.x, +m.z, Math.min(40, +m.r || 14), null, !!m.g); break;
      case 'pu': this.peds.punch(+m.x, +m.z, +m.fx, +m.fz, quiet, Math.min(3, +m.dmg || 1), Math.min(3, +m.reach || 1.85), Number.isInteger(m.i) ? m.i : -1); break;
      case 'ki': { const p = this.peds.byIndex(m.i | 0); if (p) this.peds.kick(p, +m.fx, +m.fz, quiet); break; }
      case 'sh': { this.peds.shoot(+m.ox, +m.oz, +m.fx, +m.fz, Math.min(80, +m.range || 40), Math.min(2, +m.dmg || 1), quiet, Number.isInteger(m.i) ? m.i : -1); const c = this.tai && this.tai.cars[m.c | 0]; if (c && m.c >= 0) { this.tai.hit(c); if (Number.isInteger(m.d) && m.d >= 0 && m.d < 16384) addHit(c.st, m.d); } break; }
      case 'cd': { const c = this.tai && this.tai.cars[m.c | 0]; if (c && Number.isInteger(m.d) && m.d >= 0 && m.d < 16384) { this.tai.hit(c); addHit(c.st, m.d); } break; }
      case 'tj': { const c = this.tai.cars[m.c | 0]; if (c && c.mode === 'drive') this.tai.begin(c); break; }
      case 'tk': { const c = this.tai.cars[m.c | 0]; if (!c || c.mode === 'gone') break; this.tai.take(c); if (!m.e) { const p = this.peds.adopt(+m.x, +m.z, +m.yaw, !!m.b, 'fly', m.l | 0); p.vx = +m.vx || 0; p.vz = +m.vz || 0; this.peds.alarm(+m.x, +m.z, 22, p, true); } break; }
      case 'ai': this.remoteAims.set(m.from, { x: +m.x, z: +m.z, dx: +m.dx, dz: +m.dz, at: performance.now() }); break;
    }
  }
  onFx(m) {   // somebody fired: tracer + bang for everybody
    const q = this.tracers.find((t) => t.t <= 0) || this.tracers[0]; if (!q) return; const len = Math.min(60, m.l || 30);
    q.t = 0.07; q.m.visible = true; q.m.position.set(m.x + m.dx * len / 2, m.y, m.z + m.dz * len / 2); q.m.rotation.set(0, Math.atan2(m.dx, m.dz), 0); q.m.scale.set(1, 1, len);
    this.particles.emit(m.x, m.y, m.z, 3, { color: '#ffd23f', speed: 3, up: 0.5, life: 0.12, size: 0.3 });
    { const dd = Math.hypot(m.x - this.camera.position.x, m.z - this.camera.position.z); if (dd < 90) { const v = Math.max(0.15, 1 - dd / 90); m.w === 3 ? A.sfx.akShot(0, v) : A.sfx.shot(0, v); } }
  }
  onPedHit(m) {   // an AI pedestrian the host is fighting punched me
    const b = this.me.body; if (b.hitCd > 0 || this.drive) return; if (knock(b, m.nx, m.nz, 7)) { b.vy = 2; b.stun = 0.4; this.crouch = false; A.sfx.bonk(); this.shake = Math.max(this.shake || 0, 0.2); }
  }
  // ---- traffic: tell the AI where I am and whether I am pointing a gun
  feedTraffic() {
    const ctx = this.info.trafficCtx; if (!ctx) return; const b = this.me.body, d = this.drive;
    ctx.me = d || this.jack ? (this.jack ? { x: b.x, z: b.z } : null) : { x: b.x, z: b.z }; ctx.carSt = d ? d.st : null;
    ctx.cars.length = 0; for (const c of this.cars) ctx.cars.push(c.st);
    ctx.aim = !d && this.aimOn ? { x: b.x, z: b.z, dx: Math.sin(b.yaw), dz: Math.cos(b.yaw) } : null;
    ctx.persons = this.netPersons; ctx.aims = ctx.aim ? [ctx.aim, ...this.netAims] : this.netAims;
    for (const r of this.remotes.values()) if (r.vcar) ctx.cars.push(r.vcar.st);
  }
  aiHonk(c) { if (this.multi) this.honkOut.push([+c.st.x.toFixed(1), +c.st.z.toFixed(1)]); const d = Math.hypot(c.st.x - this.camera.position.x, c.st.z - this.camera.position.z); if (d < 40) A.sfx.honk(); if (this.peds) this.peds.startle(c.st.x, c.st.z, 14); }
  // the driver leaves his car (hands up, scared or angry)
  driverOut(c, mode) {
    if (!this.peds) return; const st = c.st, b = this.me.body, fx = Math.sin(st.yaw), fz = Math.cos(st.yaw), side = ((b.x - st.x) * fz - (b.z - st.z) * fx) >= 0 ? -1 : 1;   // out of the door on the player's side
    const px = st.x - fz * 1.5 * side * -1, pz = st.z + fx * 1.5 * side * -1;
    const dx = px - b.x, dz = pz - b.z, dd = Math.hypot(dx, dz) || 1, yaw = Math.atan2(-dx, -dz);
    const p = this.peds.adopt(px, pz, Math.atan2(dx, dz), mode === 'fight', mode === 'fight' ? 'fight' : mode, Math.floor(Math.random() * 10));
    if (mode === 'fight') { p.atk = 0.6; } else { p.dx = dx / dd; p.dz = dz / dd; p.yaw = Math.atan2(p.dx, p.dz); p.timer = mode === 'cower' ? 1.6 : 6; }
    void yaw; A.sfx.door(); if (mode !== 'fight') this.peds.voice('scream', p);
  }
  nearestJack(b) { return this.tai && !this.drive && !this.jack && b.stun <= 0 ? this.tai.nearestJack(b.x, b.z) : null; }
  // GTA-style wanted level: report a crime to the police
  crime(kind, x, z) { if (this.mission && this.mission.mission === 'snipe' && this.mission.phase !== 'idle') return; if (this.wanted && this.meta.city && OPT.wanted) { this.wanted.crime(kind, x, z); } }
  startJack(tj) {
    this.crime('jack', tj.st.x, tj.st.z);
    const b = this.me.body, armed = isGun(this.weapon), empty = tj.mode === 'abandoned';
    const dur = empty ? 0.2 : armed ? 0.55 : this.weapon === 'bat' ? 1.0 : 1.5;
    this.jack = { c: tj, t: 0, dur, empty }; b.vx = b.vz = 0; b.yaw = Math.atan2(tj.st.x - b.x, tj.st.z - b.z); this.crouch = false; this.syncAct();
    if (!empty) { this.tai.begin(tj); A.sfx.door(); this.evt({ k: 'tj', c: this.tai.cars.indexOf(tj) }); }
    if (this.peds) { this.peds.alarm(b.x, b.z, 16, null, true); this.evt({ k: 'al', x: +b.x.toFixed(1), z: +b.z.toFixed(1), r: 16, g: 1 }); }
  }
  updateJack(dt, b) {
    const j = this.jack; if (!j) return;
    if (b.stun > 0) { if (!j.empty && j.c.mode === 'struggle') j.c.mode = 'drive'; this.jack = null; return; }
    j.t += dt; b.vx = b.vz = 0;
    if (!j.empty && Math.random() < dt * 5) { this.particles.emit(j.c.st.x, 1.2, j.c.st.z, 2, { color: '#ffffff', speed: 2, up: 1.5, life: 0.3, size: 0.2 }); }
    if (!j.empty && !j.honked && j.t > 0.25) { j.honked = true; A.sfx.honk(); }
    if (j.t >= j.dur) this.finishJack();
  }
  finishJack() {
    const j = this.jack; this.jack = null; if (!j) return; const c = j.c, st = c.st, b = this.me.body;
    if (!j.empty) {   // the driver is dragged out and thrown to the ground; the brave ones get up and fight
      const fx = Math.sin(st.yaw), fz = Math.cos(st.yaw), side = ((b.x - st.x) * fz - (b.z - st.z) * fx) >= 0 ? 1 : -1;
      const ex = st.x - fz * side * 1.3, ez = st.z + fx * side * 1.3, eyaw = Math.atan2(b.x - st.x, b.z - st.z) + Math.PI, evx = (st.x - b.x) * 0.5 + (b.z - st.z) * 0.1, evz = (st.z - b.z) * 0.5, look = Math.floor(Math.random() * 10);
      const p = this.multi && !this.simHost ? null : this.peds && this.peds.adopt(ex, ez, eyaw, c.brave, 'fly', look);   // a guest does not create him: the host does (event 'tk') and streams him to everybody
      if (p) { p.vx = evx; p.vz = evz; }
      this.evt({ k: 'tk', c: this.tai.cars.indexOf(c), x: +ex.toFixed(2), z: +ez.toFixed(2), yaw: +eyaw.toFixed(2), b: c.brave ? 1 : 0, l: look, vx: +evx.toFixed(2), vz: +evz.toFixed(2) });
      A.sfx.bonk(); this.shake = Math.max(this.shake || 0, 0.2); this.particles.emit(st.x, 1.3, st.z, 12, { color: '#ffffff', speed: 4, up: 2, life: 0.3, size: 0.25 });
      if (this.peds) this.peds.alarm(st.x, st.z, 22, p, true);
    }
    if (j.empty) this.evt({ k: 'tk', c: this.tai.cars.indexOf(c), e: 1 });
    // the traffic car becomes a real, drivable (and sellable) car at the same place
    const id = st.id, mesh = buildCarMesh(id, IS_TOUCH), bh = bodyHalf(mesh); mesh.rotation.order = 'YXZ'; mesh.position.set(st.x, 0, st.z); mesh.rotation.y = st.yaw; this.scene.add(mesh);
    const st2 = newCar(id, st.x, st.z, st.yaw); st2.y = 0; if (bh) { st2.hl = Math.max(st2.hl || 0, bh.hl - 0.03); st2.hw = Math.max(st2.hw || 0, bh.hw - 0.03); } st2.local = true; st2.stolen = true; if (st.dmg) st2.dmg = st.dmg.slice(); st2.driver = -1; st2.parked = true;
    const car = { st: st2, mesh, local: true }; this.cars.push(car); this.tai.take(c);
    this.toggleCar();
  }
  // ---- selling a stolen car at INTELLIMUM AUTOS: drive onto the ring and stop
  updateSell(dt) {
    const d = this.drive; if (!d || !d.local || this.paxMode) { this.sellT = 0; return; }
    const Z = AUTOS.zone, s = d.st; if (Math.hypot(s.x - Z.x, s.z - Z.z) < Z.r - 1.0 && Math.abs(s.speed) < 2.2) { this.sellT += dt; if (this.sellT > 1.1) this.sellCar(d); } else this.sellT = 0;
  }
  sellCar(c) {
    const price = carPrice(c.st.id, c.st.hp); this.sellT = 0; this.toggleCar(true);
    const i = this.cars.indexOf(c); if (i >= 0) this.cars.splice(i, 1); const r = this.rolling.indexOf(c); if (r >= 0) this.rolling.splice(r, 1); this.scene.remove(c.mesh);
    this.earn(price, 'sale'); A.sfx.pickup(); this.particles.emit(c.st.x, 1.5, c.st.z, 40, { rainbow: true, speed: 4, up: 4, life: 0.8, size: 0.25 });
  }
  // ---- weapons
  updateWeapon(dt, b) {
    if (this.fireCd > 0) this.fireCd -= dt;
    if (this.aimT > 0) this.aimT -= dt;
    if (this.reloadT > 0) { this.reloadT -= dt; if (this.reloadT <= 0) { this.wallet.reload(this.weapon); this.updateAmmoHud(); } }
    for (const q of this.tracers) if (q.t > 0) { q.t -= dt; if (q.t <= 0) q.m.visible = false; else q.m.material.opacity = Math.min(0.9, q.t / 0.05); }
    if (this.fireHeld && this.weapon === 'ak') this.fire();
    if (this.aimOn && !this.drive && b.stun <= 0 && Number.isFinite(this.camYaw)) { let d = this.camYaw + Math.PI - b.yaw; d = Math.atan2(Math.sin(d), Math.cos(d)); b.yaw += d * Math.min(1, dt * 14); }   // face where the camera looks
  }
  // ---- THIEF CHASE on the summit: the thief's volleys and the police pistol
  policeGun() {
    if (!this.wallet) return; const had = this.wallet.owns('pistol') || this.wallet.owns('ak') || this.wallet.owns('sniper'), g = this.wallet.gift('pistol');
    if (!had) { this.weapon = 'pistol'; this.syncAct(); this.updateAmmoHud(); this.toast('POLICE PISTOL ISSUED'); } else if (g) { this.updateAmmoHud(); this.toast('AMMO TOPPED UP'); }
  }
  // a mission hands you a weapon (the sniper rifle for SNIPE THE TRUCK): you keep it if you already own it, and it is equipped
  giveWeapon(k, msg) {
    if (!this.wallet) return; const had = this.wallet.owns(k), g = this.wallet.gift(k);
    this.weapon = k; this.syncAct(); this.updateAmmoHud(); if (!had) this.toast(msg || 'WEAPON ISSUED'); else if (g) this.toast('AMMO TOPPED UP');
  }
  thiefShot(m) {
    const mi = this.mission, ts = mi && (mi.mission === 'snipe' ? mi.ss : mi.ts); if (!ts || !m || !Number.isFinite(+m.x) || !Number.isFinite(+m.z) || !this.tracers) return;
    const sx = +m.x, sz = +m.z, sy = (ts.ground ? ts.ground(sx, sz) : 0) + 1.4, mine = m.i === this.localId;
    let tx, ty, tz; if (mine) { const b = this.me.body; tx = b.x; ty = b.y + 1.1; tz = b.z; if (this.drive) { tx = this.drive.st.x; tz = this.drive.st.z; ty = this.drive.st.y + 0.9; } } else { const r = this.remotes && this.remotes.get(m.i); if (r) { tx = r.x; ty = (r.y || 0) + 1.1; tz = r.z; } else { const b = this.me.body; tx = b.x; ty = b.y + 1.1; tz = b.z; } }
    if (!m.h) { tx += (Math.random() - 0.5) * 3; tz += (Math.random() - 0.5) * 3; ty += (Math.random() - 0.5); }
    const dx = tx - sx, dy = ty - sy, dz = tz - sz, len = Math.hypot(dx, dy, dz) || 1, q = this.tracers.find((t) => t.t <= 0) || this.tracers[0];
    if (q) { q.t = 0.09; q.m.visible = true; q.m.position.set(sx + dx / 2, sy + dy / 2, sz + dz / 2); q.m.lookAt(tx, ty, tz); q.m.scale.set(1, 1, Math.min(len, 90)); }
    const cd = Math.hypot(sx - this.camera.position.x, sz - this.camera.position.z); A.sfx.shot(0, Math.max(0.25, 1 - cd / 140));
    this.particles.emit(sx, sy, sz, 3, { color: '#ffd23f', speed: 2, up: 0.5, life: 0.1, size: 0.25 });
    if (m.h) { if (mine) { this.hurtFx(0.55); this.shake = Math.max(this.shake || 0, 0.3); } this.particles.emit(tx, ty, tz, 6, { color: '#ff5a4a', speed: 2.4, up: 1.2, life: 0.3, size: 0.15 }); }
    else this.particles.emit(tx, Math.max(0.1, ty - 0.8), tz, 5, { color: '#cfc7b4', speed: 2, up: 1.6, life: 0.4, size: 0.2 });
  }
  // GTA V style damage feedback: no health bar, a red haze at the screen edges that fades by itself (k 0..1); a few quick hits stack up
  // a police officer fires at me: tracer, bang, and (if it hits) the red haze
  copShot(sx, sy, sz, tx, ty, tz, hit) {
    if (!hit) { tx += (Math.random() - 0.5) * 4; tz += (Math.random() - 0.5) * 4; ty += (Math.random() - 0.5); }
    const dx = tx - sx, dy = ty - sy, dz = tz - sz, len = Math.hypot(dx, dy, dz) || 1, q = this.tracers && (this.tracers.find((t) => t.t <= 0) || this.tracers[0]);
    if (q) { q.t = 0.09; q.m.visible = true; q.m.position.set(sx + dx / 2, sy + dy / 2, sz + dz / 2); q.m.lookAt(tx, ty, tz); q.m.scale.set(1, 1, Math.min(len, 90)); }
    const cd = Math.hypot(sx - this.camera.position.x, sz - this.camera.position.z); A.sfx.shot(0, Math.max(0.25, 1 - cd / 140));
    this.particles.emit(sx, sy, sz, 3, { color: '#ffd23f', speed: 2, up: 0.5, life: 0.1, size: 0.25 });
    if (hit) { this.hurtFx(0.3); this.shake = Math.max(this.shake || 0, 0.18); }
  }
  pointCamera(yaw) { this.camYaw = yaw; this.camInit = false; }
  hurtFx(k) { this.hurt = Math.min(1, Math.max(this.hurt || 0, 0.15) * 0.5 + Math.max(0.12, k) * 0.8 + (this.hurt || 0) * 0.3); if (k >= 0.25 && A.voice && A.voice.pain && performance.now() - (this._painAt || 0) > 4000) { this._painAt = performance.now(); A.voice.pain(0.45); } }
  hurtTick(dt) { const el = $('hurt'); if (!el) return; if (this.hurt > 0.01) { this.hurt = Math.max(0, this.hurt - dt * 0.45); el.style.opacity = String(Math.min(0.85, this.hurt * 0.85)); } else if (el.style.opacity !== '0') { this.hurt = 0; el.style.opacity = '0'; } }
  // the sounds and sparks of a hit on a car: glass, tyre or body (code from cardamage.hitCode)
  carHitFx(code, x, z) {
    const zone = code & 3, d = Math.hypot(x - this.camera.position.x, z - this.camera.position.z), v = Math.max(0.25, 1 - d / 60);
    if (zone === 0) A.sfx.glass(v); else if (zone === 2) A.sfx.hiss(v); else A.sfx.metal(v);
    this.particles.emit(x, zone === 2 ? 0.3 : 1.0, z, zone === 0 ? 9 : 6, { color: zone === 0 ? '#dff4ff' : '#ffd23f', speed: 4, up: 2, life: 0.3, size: 0.14 });
  }
  // a swing with the bat at a car in front of me: cracks glass or dents the body
  batCar(b, fx, fz) {
    const reach = 2.7, cand = []; if (this.tai) for (const c of this.tai.cars) if (c.mode !== 'gone' && c.vis) cand.push({ c, st: c.st, tai: true }); for (const c of this.cars) if (c !== this.drive && c.st.hl) cand.push({ c, st: c.st, tai: false });
    for (const q of cand) { const st = q.st, dx = st.x - b.x, dz = st.z - b.z; if (dx * dx + dz * dz > 49) continue;
      for (let d = 0.8; d <= reach; d += 0.15) { const px = b.x + fx * d, pz = b.z + fz * d, rx = px - st.x, rz = pz - st.z, f = Math.sin(st.yaw), g = Math.cos(st.yaw), lz = rx * f + rz * g, lx = -rx * g + rz * f;
        if (Math.abs(lz) < (st.hl || 2.3) + 0.1 && Math.abs(lx) < (st.hw || 1) + 0.1) { const zone = Math.random() < 0.6 ? 0 : 3, code = hitCode(st, px, pz, zone === 0 ? 1.2 : 0.65, zone); if (q.tai) { this.tai.hit(q.c); const ix = this.tai.cars.indexOf(q.c); if (this.multi && !this.simHost) this.evt({ k: 'cd', c: ix, d: code }); else addHit(st, code); } else addHit(st, code); this.carHitFx(code, px, pz); return true; } } }
    return false;
  }
  fire() {
    const w = this.weapon, W = w && WEAPONS[w]; if (!W || W.melee || this.drive || this.over || this.finished || this.levelTime < 0 || this.me.body.stun > 0 || this.jack) return false;
    if (OPT.ammo && this.wallet.s) { const s = this.wallet.s; s.mag[w] = W.mag; if (!(s.ammo[w] > 0)) s.ammo[w] = W.ammoPack || 30; }   // unlimited ammo switch
    if (this.fireCd > 0 || this.reloadT > 0) return false;
    if (this.wallet.mag(w) <= 0) { if (this.wallet.reserve(w) > 0) { this.reloadT = 1.3; A.sfx.click(); this.updateAmmoHud(); } else { this.fireCd = 0.3; A.sfx.empty && A.sfx.empty(); } return false; }
    this.wallet.shoot(w); this.fireCd = W.rate; this.aimT = 1.8; this.updateAmmoHud();
    const b = this.me.body; if (Number.isFinite(this.camYaw)) b.yaw = this.camYaw + Math.PI;
    let ang = b.yaw + (Math.random() - 0.5) * 2 * W.spread;
    // aim assist: lock on to the nearest person in front of the muzzle (a thumb on a phone cannot aim precisely)
    if (this.peds) { let bd = 0.2; for (const p of this.peds.list) { if (!p.actor || !p.actor.group.visible || p.st === 'gone' || p.st === 'fly') continue; const dx = p.x - b.x, dz = p.z - b.z, d = Math.hypot(dx, dz); if (d < 1 || d > W.range) continue; let da = Math.atan2(dx, dz) - b.yaw; da = Math.abs(Math.atan2(Math.sin(da), Math.cos(da))); if (da < bd) { bd = da; ang = Math.atan2(dx, dz) + (Math.random() - 0.5) * W.spread; } } }
    const thiefTs = this.mission && this.mission.mission === 'thief' && this.mission.phase === 'run' && this.mission.ts && this.mission.ts.exposed ? this.mission.ts : null;
    if (thiefTs) { const dx = thiefTs.px - b.x, dz = thiefTs.pz - b.z, d = Math.hypot(dx, dz); if (d > 1 && d < W.range) { let da = Math.atan2(dx, dz) - b.yaw; da = Math.abs(Math.atan2(Math.sin(da), Math.cos(da))); if (da < 0.45) ang = Math.atan2(dx, dz) + (Math.random() - 0.5) * W.spread * 0.8; } }   // aim assist on the gunman when he is out in the open
    const fx = Math.sin(ang), fz = Math.cos(ang), ox = b.x + fx * 0.7, oz = b.z + fz * 0.7, oy = b.y + (this.crouch ? 1.0 : 1.45);
    let len = W.range, hc = -1;
    let shotAt = -1;
    if (this.peds) { const h = this.peds.shoot(ox, oz, fx, fz, W.range, W.dmg, (p, dead, d) => { this.earn(dead ? PAY.kill : PAY.hit); this.crime(dead ? 'kill' : 'hit', p.x, p.z); this.particles.emit(p.x, 1.2, p.z, 8, { color: '#ff5a4a', speed: 3, up: 2, life: 0.35, size: 0.2 }); }); if (h) { len = h.d; shotAt = h.p.i; } }
    if (this.mission && this.mission.mission === 'thief' && this.mission.phase === 'run' && this.mission.ts && this.mission.ts.snap && this.mission.ts.snap.st === 'ambush') {   // the summit: trees and boulders stop bullets; the gunman is hit only while he is out in the open
      const ts = this.mission.ts; let stop = len;
      for (const cv of SUMMIT.covers) { const dx = cv.x - ox, dz = cv.z - oz, a2 = dx * fx + dz * fz, pr = Math.abs(-dx * fz + dz * fx); if (a2 > 0.3 && a2 < stop && pr < cv.r * 0.8) stop = a2 - cv.r * 0.4; }
      if (ts.exposed) { const dx = ts.px - ox, dz = ts.pz - oz, a = dx * fx + dz * fz, pr = Math.abs(-dx * fz + dz * fx);
        if (a > 0.8 && a < stop && pr < 0.7 + a * 0.012) { stop = a; this.mission.send({ t: 'm_hit', dmg: W.dmg }); A.sfx.bonk && A.sfx.bonk(); this.particles.emit(ts.px, 1.3 + (ts.ground ? ts.ground(ts.px, ts.pz) : 0), ts.pz, 9, { color: '#ff5a4a', speed: 3, up: 2, life: 0.35, size: 0.2 }); } }
      if (stop < len) { len = Math.max(0.5, stop); this.particles.emit(ox + fx * len, oy, oz + fz * len, 5, { color: '#cfc7b4', speed: 2.5, up: 1.5, life: 0.35, size: 0.18 }); }
    }
    let hcode = -1;
    { // cars: the box of the car decides if the bullet meets it (nearest first); the aim height decides WHAT it hits: low = a tyre, high = glass, between = the body
      const drop = (this.camPitch - (NO_TEXT ? 0.17 : 0.34)) * 0.9, hAt = (a) => Math.max(0.1, Math.min(2, oy - drop * a));
      const hitBox = (st, dd) => { const dx = ox + fx * dd - st.x, dz = oz + fz * dd - st.z, f = Math.sin(st.yaw), g = Math.cos(st.yaw), lz = dx * f + dz * g, lx = -dx * g + dz * f; return Math.abs(lz) < (st.hl || 2.3) + 0.05 && Math.abs(lx) < (st.hw || 1) + 0.05; };
      const test = (st) => { const dx = st.x - ox, dz = st.z - oz, a0 = dx * fx + dz * fz; if (a0 < 0.5 || a0 - 3.5 > len || Math.abs(-dx * fz + dz * fx) > 3.2) return -1; for (let dd = Math.max(0.3, a0 - 3.4); dd < Math.min(len, a0 + 0.2); dd += 0.12) if (hitBox(st, dd)) return dd; return -1; };
      let best = null, bd = len;
      if (this.tai) for (const c of this.tai.cars) { if (c.mode === 'gone' || !c.vis) continue; const dd = test(c.st); if (dd >= 0 && dd < bd) { bd = dd; best = { c, tai: true }; } }
      for (const c of this.cars) { if (c === this.drive || !c.st.hl) continue; const dd = test(c.st); if (dd >= 0 && dd < bd) { bd = dd; best = { c, tai: false }; } }
      if (best && !best.tai && this.mission && this.mission.mission === 'snipe' && this.mission.phase === 'run' && best.c === this.mission.ss.truck && this.mission.ss.snap && (this.mission.ss.snap.k[4] === 2 || this.mission.ss.snap.k[4] === 5)) { this.mission.send({ t: 'm_hit', dmg: W.dmg }); }   // a bullet anywhere on the rolling tanker
      else if (best && !best.tai && this.mission && this.mission.mission === 'snipe' && this.mission.phase === 'run' && best.c === this.mission.ss.truck && this.mission.ss.snap && this.mission.ss.snap.k[4] < 2 && (this.toastT || 0) < performance.now()) { this.toastT = performance.now() + 2500; this.toast('HOLD FIRE - the driver is still in the tanker. Shoot after he jumps out!'); }
      if (best) { len = bd; const st = best.c.st, code = hitCode(st, ox + fx * bd, oz + fz * bd, hAt(bd)); hcode = code;
        this.crime('car', st.x, st.z);
        if (best.tai) { this.tai.hit(best.c); hc = this.tai.cars.indexOf(best.c); if (!this.multi || this.simHost) addHit(st, code); } else { addHit(st, code); if (st.hp !== undefined && !st.wreck && !(this.mission && this.mission.mission === 'snipe' && best.c === this.mission.ss.truck)) st.hp = Math.max(0, st.hp - Math.max(6, (W.dmg || 1) * 9)); }   // bullets wear a car down: cracks -> white smoke -> black smoke -> flames -> burnt-out black wreck
        this.carHitFx(code, ox + fx * bd, oz + fz * bd); }
    }
    this.crime('shot', b.x, b.z);
    if (this.wanted) { const wh = this.wanted.shoot(ox, oz, fx, fz, len, W.dmg); if (wh >= 0 && wh < len) len = Math.max(0.5, wh); }
    // tracer + muzzle flash + bang
    const q = this.tracers.find((t) => t.t <= 0) || this.tracers[0]; if (q) { q.t = 0.07; q.m.visible = true; q.m.position.set(ox + fx * len / 2, oy, oz + fz * len / 2); q.m.rotation.set(0, Math.atan2(fx, fz), 0); q.m.scale.set(1, 1, Math.min(len, 60)); }
    this.particles.emit(ox, oy, oz, 4, { color: '#ffd23f', speed: 3, up: 0.5, life: 0.12, size: 0.3 }); this.shake = Math.max(this.shake || 0, w === 'sniper' ? 0.16 : w === 'ak' ? 0.07 : 0.05);
    w === 'sniper' ? A.sfx.sniperShot() : w === 'ak' ? A.sfx.akShot() : A.sfx.shot();
    if (this.multi) { app.net.send({ t: 'fx', x: +ox.toFixed(2), y: +oy.toFixed(2), z: +oz.toFixed(2), dx: +fx.toFixed(3), dz: +fz.toFixed(3), l: +Math.min(len, 60).toFixed(1), w: w === 'ak' || w === 'sniper' ? 3 : 2 }); this.evt({ k: 'sh', ox: +ox.toFixed(2), oz: +oz.toFixed(2), fx: +fx.toFixed(3), fz: +fz.toFixed(3), range: W.range, dmg: W.dmg, c: hc, i: shotAt, d: hcode }); }
    return true;
  }
  // ---- the weapon store: step on the pad inside
  setupShopUI() { const x = $('shop-close'); if (x) x.onclick = () => { this.shopClosed = true; this.closeShop(); }; }
  updateShops(dt, b) {
    const P = ARMS.pad, d = Math.hypot(b.x - P.x, b.z - P.z), on = !this.drive && d < 1.9 && Math.abs(b.y - 0.25) < 1.2;
    if (on && !this.onArms) { this.onArms = true; if (!this.shopClosed) this.openShop(); }
    else if (this.onArms && (this.drive || d > 3.4)) { this.onArms = false; this.shopClosed = false; this.closeShop(); }
  }
  openShop() { const el = $('shop-ui'); if (!el) return; this.shopOpen = true; document.body.classList.add('m-open'); el.classList.remove('hidden'); try { if (document.exitPointerLock) document.exitPointerLock(); } catch (e) { /* ignore */ } this.renderShop(); }
  closeShop() { const el = $('shop-ui'); if (el) el.classList.add('hidden'); if (this.shopOpen) { this.shopOpen = false; document.body.classList.remove('m-open'); tryLock(); } }
  renderShop() {
    const W = this.wallet, list = $('shop-list'); if (!list) return; $('shop-cash').textContent = fmtMoney(W.money); list.innerHTML = '';
    for (const k of WEAPON_ORDER) {
      const d = WEAPONS[k], owned = W.owns(k), row = document.createElement('div'); row.className = 'shop-row';
      const t = document.createElement('b'); t.textContent = d.name; const sm = document.createElement('small'); sm.textContent = d.desc + (owned && !d.melee ? '  •  ' + W.mag(k) + ' loaded, ' + W.reserve(k) + ' spare' : ''); const bx = document.createElement('span'); bx.className = 'sb';
      const btn = (label, fn, dis, alt) => { const e = document.createElement('button'); e.textContent = label; e.disabled = !!dis; if (alt) e.className = 'alt'; e.onclick = () => { fn(); this.renderShop(); }; bx.appendChild(e); };
      if (!owned) btn('BUY ' + fmtMoney(d.price), () => { if (W.buy(k)) { this.weapon = k; this.syncAct(); A.sfx.pickup(); } }, !W.canPay(d.price));
      else { btn(this.weapon === k ? 'EQUIPPED' : 'EQUIP', () => { this.weapon = k; if (k === 'bat') { this.aiming = false; this.aimT = 0; } this.syncAct(); A.sfx.click(); }, this.weapon === k, true); if (!d.melee) btn('+' + d.ammoPack + ' AMMO ' + fmtMoney(d.ammoPrice), () => { if (W.buyAmmo(k)) A.sfx.pickup(); this.updateAmmoHud(); }, !W.canPay(d.ammoPrice)); }
      row.append(t, bx, sm); list.appendChild(row);
    }
  }
  // ---- vehicle lights (L / the lights button): bright headlamps, tail lamps and a beam on the road
  toggleLights() { if (!this.drive || this.paxMode) return; this.lightsOn = !this.lightsOn; A.sfx.click(); this.applyLights(this.drive); }
  applyLights(c) {
    if (!c) return; const u = c.mesh.userData, on = this.lightsOn, m = u.hero && u.hero.mats;
    if (m && m.head) { if (m.head.userData.ei0 === undefined) m.head.userData.ei0 = m.head.emissiveIntensity; m.head.emissiveIntensity = on ? 3.2 : m.head.userData.ei0; }
    if (m && m.tail) { if (m.tail.userData.ei0 === undefined) m.tail.userData.ei0 = m.tail.emissiveIntensity; m.tail.emissiveIntensity = on ? Math.max(1.4, m.tail.userData.ei0 * 2) : m.tail.userData.ei0; }
    if (!this.beam) {
      const sp = new THREE.SpotLight('#fff0c8', 5, 46, 0.46, 0.65, 1.1); sp.castShadow = false; const tg = new THREE.Object3D(); sp.target = tg;
      const gl = new THREE.Mesh(new THREE.PlaneGeometry(7.5, 20), new THREE.MeshBasicMaterial({ map: beamTexture(), transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false })); gl.rotation.x = -Math.PI / 2; gl.renderOrder = 6;
      this.beam = { sp, tg, gl };
    }
    const B = this.beam; if (B.sp.parent) B.sp.parent.remove(B.sp, B.tg, B.gl);
    if (on) { c.mesh.add(B.sp, B.tg, B.gl); B.sp.position.set(0, 0.85, 1.9); B.tg.position.set(0, 0.1, 24); B.gl.position.set(0, 0.07, 11.5); }
  }
  // ---- punch (works on foot in every mode): hits pedestrians and other players in front of you, never kills
  punch() {
    if (this.over || this.finished || this.levelTime < 0 || this.drive || this.punchCd > 0 || this.me.body.stun > 0) return false;
    if (this.meta.city && isGun(this.weapon)) return this.fire();
    const b = this.me.body, fx = Math.sin(b.yaw), fz = Math.cos(b.yaw);
    // the same button kicks somebody who is lying on the ground or cowering / crouching in front of you
    this.kickK = !!(this.peds && this.peds.downed(b.x, b.z, fx, fz));
    if (!this.kickK) for (const r of this.remotes.values()) { if (!r.has || this.ghost(r) || (r.flags & 8) || Date.now() - r.rxAt > 800) continue; const dx = r.x - b.x, dz = r.z - b.z, d = Math.hypot(dx, dz); if (d < 1.9 && d > 1e-3 && (dx * fx + dz * fz) / d > 0.3 && Math.abs(r.y - b.y) < 1.5 && (r.flags & (2 | 2097152))) { this.kickK = true; break; } }
    this.punchCd = this.kickK ? 0.7 : 0.72; this.punchT = 0.001; this.punchPending = true; A.sfx.swing(this.weapon === 'bat' && !this.kickK); return true;
  }
  updatePunch(dt, b) {
    if (this.punchCd > 0) this.punchCd -= dt;
    if (this.punchT > 0) {
      this.punchT += dt / (this.kickK ? 0.55 : this.weapon === 'bat' ? 0.85 : 0.62);
      if (b.stun > 0) { this.punchT = 0; this.punchPending = false; }
      else if (this.punchPending && this.punchT >= (this.kickK ? 0.48 : this.weapon === 'bat' ? 0.65 : 0.42)) { this.punchPending = false; this.punchHit(b); }
      if (this.punchT >= 1) this.punchT = 0;
    }
  }
  punchHit(b) {
    const fx = Math.sin(b.yaw), fz = Math.cos(b.yaw);
    if (this.kickK && this.peds) { const t = this.peds.downed(b.x, b.z, fx, fz); if (t) { this.evt({ k: 'ki', i: t.i, fx: +fx.toFixed(3), fz: +fz.toFixed(3) }); this.peds.kick(t, fx, fz, (p) => { this.earn(PAY.hit); this.crime('hit', p.x, p.z); A.sfx.bonk(); this.shake = Math.max(this.shake || 0, 0.12); this.particles.emit(p.x, 0.4, p.z, 12, { color: '#ffffff', speed: 3, up: 1.5, life: 0.3, size: 0.25 }); this.particles.emit(p.x, 0.4, p.z, 6, { color: '#ffd23f', speed: 4, up: 2, life: 0.3, size: 0.2 }); }); return; } }
    const BW = this.weapon === 'bat' ? WEAPONS.bat : null;
    if (this.wanted && this.meta.city) this.wanted.melee(b.x, b.z, fx, fz);
    if (this.peds && this.peds.punch(b.x, b.z, fx, fz, (p, dead) => { this.earn(dead ? PAY.kill : PAY.hit); this.crime(dead ? 'kill' : 'hit', p.x, p.z); A.sfx.bonk(); this.particles.emit(p.x, 1.2, p.z, 10, { color: '#ffffff', speed: 4, up: 2, life: 0.3, size: 0.25 }); this.particles.emit(p.x, 1.2, p.z, 6, { color: '#ffd23f', speed: 5, up: 3, life: 0.3, size: 0.2 }); }, BW ? BW.dmg : 1, BW ? BW.reach : 1.85)) { this.evt({ k: 'pu', x: +b.x.toFixed(2), z: +b.z.toFixed(2), fx: +fx.toFixed(3), fz: +fz.toFixed(3), dmg: BW ? BW.dmg : 1, reach: BW ? BW.reach : 1.85, i: this.peds.lastHit ? this.peds.lastHit.i : -1 }); return; }
    if (BW && this.batCar(b, fx, fz)) return;
    for (const r of this.remotes.values()) {
      if (!r.has || this.ghost(r) || (r.flags & 8) || Date.now() - r.rxAt > 800) continue;
      const dx = r.x - b.x, dz = r.z - b.z, dy = r.y - b.y, d = Math.hypot(dx, dz);
      if (d > 1.9 || Math.abs(dy) > 1.5 || d < 1e-3) continue;
      if ((dx * fx + dz * fz) / d < 0.3) continue;
      app.net.send({ t: 'bat', to: r.id, nx: +fx.toFixed(3), nz: +fz.toFixed(3), p: this.kickK ? 0.7 : 0.5, ax: +b.x.toFixed(1), az: +b.z.toFixed(1) });
      A.sfx.bonk(); this.particles.emit(r.x, r.y + 1.2, r.z, 10, { color: '#ffffff', speed: 4, up: 2, life: 0.3, size: 0.25 }); break;
    }
  }
  sendNet(o) { if (this.multi) app.net.send(o); }
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
    if (m.p === 0.5) { if (knock(b, m.nx, m.nz, 9)) { b.vy = 3; b.stun = 0.45; this.crouch = false; A.sfx.bonk(); } return; }
    const big = m.p === 2;
    if (knock(b, m.nx, m.nz, big ? 22 : 15)) { b.vy = big ? 11 : 9; b.stun = big ? 2.0 : 1.6; this.bonked(big ? 'MEGA BONK!' : 'BONKED!', who, b); }
  }

  // ---- power-up boxes (personal pick-ups, respawn after 9 s)
  buildBoxes() {
    this.boxes = []; if (this.meta.city) return;
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
    b.speedMul = (f.turbo > 0 ? 1.4 : 1) * 1; b.jumpMul = f.jump > 0 ? 1.3 : 1; b.shield = f.shield;
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
  // The first time a model is drawn the browser compiles its shaders and uploads its geometry: that froze the screen for a moment whenever
  // another player (or a car with a driver) came close. Draw everything once, off screen, so it is all ready.
  warmUp() {
    const sc = this.scene, culled = [], vis = [];
    try {
      sc.traverse((o) => { if (o.isMesh || o.isLine || o.isPoints) { culled.push([o, o.frustumCulled]); o.frustumCulled = false; } });
      for (const c of this.cars) { const u = c.mesh.userData; if (u.full && u.baked && u.full !== u.baked) { vis.push([u.full, u.full.visible], [u.baked, u.baked.visible]); u.full.visible = true; u.baked.visible = false; } }
      for (const r of this.remotes.values()) { vis.push([r.model.group, r.model.group.visible]); r.model.group.visible = true; }
      renderer.compile(sc, this.camera);
      const rt = new THREE.WebGLRenderTarget(4, 4);
      try { renderer.setRenderTarget(rt); renderer.render(sc, this.camera); } finally { renderer.setRenderTarget(null); rt.dispose(); }
    } catch (e) { console.warn('warm-up skipped', e); }
    for (const [o, f] of culled) o.frustumCulled = f;
    for (const [o, v] of vis) o.visible = v;
  }
  addRemote(p) { if (this.remotes.has(p.id)) return; this.players.push(p); this.remotes.set(p.id, new Remote(p, this.scene)); setTimeout(() => { if (race === this) this.warmUp(); }, 300); this.buildProgress(); this.toast(p.name + ' joined the race!'); }
  removeRemote(id) { if (this.copGhosts) this.copGhosts.remove(id); const r = this.remotes.get(id); if (r) { if (r.vcar) { this.scene.remove(r.vcar.mesh); r.vcar = null; } r.dispose(this.scene); this.remotes.delete(id); const d = this.dots.get(id); if (d) d.remove(); } }

  // ---- visuals
  tagScale(tag, pos, k) {
    if (!tag) return;
    const d = pos.distanceTo(this.camera.position);
    const s = clamp(d * 0.07, 1.0, 5.2) * k;
    tag.scale.set(2.8 * s, 0.7 * s, 1);
    tag.visible = d < 260;
  }
  updateCamera(dt) {
    { const shot = this.mission && this.mission.camShot(dt);   // a scripted cut-scene shot (the thief robbing the bank)
      if (shot) { this.camera.fov = lerp(this.camera.fov, shot.fov || 60, Math.min(1, dt * 4)); this.camera.updateProjectionMatrix(); this.camera.position.set(shot.px, shot.py, shot.pz); this.camTarget.set(shot.lx, shot.ly, shot.lz); this.camera.lookAt(shot.lx, shot.ly, shot.lz); this.camInit = false; return; } }
    let b = this.me.body; const spec = this.mission && this.mission.specTarget();   // spectating a mission runner: the camera rides behind them
    if (spec) b = { x: spec.x, y: spec.y, z: spec.z, vx: spec.vx || 0, vz: spec.vz || 0, yaw: spec.yaw };
    const cp = Math.cos(this.camPitch), sp = Math.sin(this.camPitch);
    const speed = Math.hypot(b.vx, b.vz);
    { const scoped = this.weapon === 'sniper' && this.aiming && !this.drive && !this.over && !(this.mission && this.mission.freeze); if (scoped && !this.scoped) this.scopeLvl = this.mission && this.mission.mission === 'snipe' && this.mission.phase === 'run' ? 1 : 0; this.scoped = scoped;   // sniper scope: dark rim and crosshair; every time you raise the rifle it starts WIDE (level 0) and you zoom in yourself (wheel, + - buttons, pinch)
      this.camera.fov = lerp(this.camera.fov, scoped ? SCOPE_FOV[this.scopeLvl || 0] : (NO_TEXT && !this.drive ? 54 + clamp(speed - 4, 0, 6) * 0.8 : 62) + (NO_TEXT && !this.drive ? 0 : clamp(speed - 10, 0, 12) * 0.9), Math.min(1, dt * (scoped ? 9 : 4)));
      if (document.body.classList.contains('scoped') !== scoped) document.body.classList.toggle('scoped', scoped); this.camera.updateProjectionMatrix(); }
    let dist = this.camDist; const inHome = this.meta.city && homeZone(b.x, b.z, 0.2);
    if (inHome && !this.drive) dist = Math.min(dist, 2.9);
    if (spec) { dist = 10.5; this.camYaw = lerpAngle(this.camYaw, spec.yaw + Math.PI, 1 - Math.exp(-3.2 * dt)); this.camPitch += (0.28 - this.camPitch) * (1 - Math.exp(-2 * dt)); }
    else if (this.drive) {
      const st = this.drive.st; this.lookT -= dt; dist = (9.2 + Math.min(4, Math.abs(st.speed) * 0.12)) * (IS_TOUCH ? 0.7 : 1);   // phones: chase camera a bit closer
      if (this.lookT <= 0) { this.camYaw = lerpAngle(this.camYaw, st.yaw + Math.PI, 1 - Math.exp(-3.2 * dt)); this.camPitch += (0.28 - this.camPitch) * (1 - Math.exp(-2 * dt)); }
    }
    // GTA-style over-the-shoulder framing on foot: close behind, camera nudged to the right so the player sits left of centre
    this.shoulder += ((NO_TEXT && !this.drive && !spec ? 0.62 : 0) - this.shoulder) * Math.min(1, dt * 5);
    const tx = b.x + Math.cos(this.camYaw) * this.shoulder, ty = b.y + (this.drive || spec ? 1.1 : (NO_TEXT ? 1.5 : 1.35)), tz = b.z - Math.sin(this.camYaw) * this.shoulder;
    if (!this.camInit) { this.camTarget.set(tx, ty, tz); this.camInit = true; }
    const f = 1 - Math.exp(-14 * dt);
    this.camTarget.x += (tx - this.camTarget.x) * f; this.camTarget.z += (tz - this.camTarget.z) * f;
    this.camTarget.y += (ty - this.camTarget.y) * (1 - Math.exp(-7 * dt));
    this.camera.position.set(this.camTarget.x + Math.sin(this.camYaw) * cp * dist, this.camTarget.y + sp * dist + 0.4, this.camTarget.z + Math.cos(this.camYaw) * cp * dist);
    if (inHome) this.camera.position.y = Math.min(this.camera.position.y, 3.25);   // stay under the ceiling
    if (this.meta.city) { // the camera can never go inside a building or under the ground: pull it in along the line to the player
      const cam = this.camera.position, T = this.world.terrain, ox = this.camTarget.x, oy = this.camTarget.y, oz = this.camTarget.z;
      const dx = cam.x - ox, dy = cam.y - oy, dz = cam.z - oz; let tmax = 1;
      for (const q of this.info.track.boxes || []) {
        if (oy > q.h + 1 && cam.y > q.h + 1) continue;
        let t0 = 0, t1 = tmax, hit = true;
        for (const [o, d, lo, hi] of [[ox, dx, q.x0 - 0.45, q.x1 + 0.45], [oz, dz, q.z0 - 0.45, q.z1 + 0.45], [oy, dy, -5, q.h + 0.45]]) {
          if (Math.abs(d) < 1e-6) { if (o < lo || o > hi) { hit = false; break; } continue; }
          let a = (lo - o) / d, b = (hi - o) / d; if (a > b) { const t = a; a = b; b = t; }
          t0 = Math.max(t0, a); t1 = Math.min(t1, b); if (t0 > t1) { hit = false; break; }
        }
        if (hit && t0 < tmax && t0 > 0) tmax = t0;
      }
      for (let i = 1; i <= 8; i++) { const t = i / 8 * tmax; if (oy + dy * t < T(ox + dx * t, oz + dz * t) + 0.35) { tmax = Math.max(0.05, (i - 1) / 8 * tmax); break; } }
      this.camK = this.camK === undefined ? 1 : this.camK; const want = clamp(tmax, 0.06, 1);
      this.camK = want < this.camK ? want : this.camK + (want - this.camK) * Math.min(1, dt * 3);   // snap in, ease out
      if (this.camK < 1) { cam.set(ox + dx * this.camK, oy + dy * this.camK, oz + dz * this.camK); }
      if (cam.y < T(cam.x, cam.z) + 0.35) cam.y = T(cam.x, cam.z) + 0.35;
    }
    if (this.shake > 0.01) { const k = this.shake * 0.5; this.camera.position.x += (Math.random() - 0.5) * k; this.camera.position.y += (Math.random() - 0.5) * k * 0.7; this.camera.position.z += (Math.random() - 0.5) * k; this.shake *= Math.exp(-7 * (this.lastDt || 0.016)); } else this.shake = 0;
    this.camera.lookAt(this.camTarget.x, this.camTarget.y + 0.2, this.camTarget.z);
  }
  updateLights() {
    if (this.dn && this._tOpt !== OPT.time) { this._tOpt = OPT.time; if (window.applyTime) window.applyTime(); }
    const t = this.camTarget; this.cullFar(this.lastDt || 0.016);
    this.sun.position.set(t.x + this.sunDir.x, t.y + this.sunDir.y, t.z + this.sunDir.z); this.sun.target.position.copy(t);
    if (this.dn) {
      if (this.weather) this.weather.update(this.lastDt || 0.016, this.camera.position);
      this.dn.update(this.lastDt || 0.016);
      const mo = this.dn.moon, md = this.moonDir; if (md) { mo.position.set(t.x + md.x, t.y + md.y, t.z + md.z); mo.target.position.copy(t); }
      if (this.dn.night !== this.nightOn) { this.nightOn = this.dn.night; this.lightsOn = this.nightOn; if (this.drive && !this.paxMode) this.applyLights(this.drive); }   // headlights come on at dusk, off at dawn (L still toggles them)
    }
  }

  // ---- HUD
  count(txt) { const el = $('hud-count'); el.textContent = txt; el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); }
  toast(txt) { if (this.meta.city) return; const el = $('hud-toast'); el.textContent = txt; el.classList.remove('show'); void el.offsetWidth; el.classList.add('show'); }
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
    $('hud-obj').classList.add('hidden');
    $('hud-rank').textContent = this.meta.city ? 'Punjabi GTA' : this.multi ? ord(this.rank()) + ' / ' + this.players.length : `${Math.max(0, Math.round(clamp(-this.me.body.z / -this.info.finishZ, 0, 1) * 100))}%`;
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
    try { this.toggleWheel(false); } catch (e) { /* ignore */ }
    if (this.mission) { this.mission.destroy(); this.mission = null; }
    if (this.wanted) { this.wanted.dispose(); this.wanted = null; }
    if (this.copGhosts) { this.copGhosts.dispose(); this.copGhosts = null; }
    if (this.peds) { this.peds.dispose(); this.peds = null; }
    A.stopMusic(); A.engineStop(); A.sirenStop(); A.sirenFar(0); A.rainSet(0); A.seaSet(0); A.swimSet(false); A.carEngineStop(); A.skidStop(); { const uw = $('uw'); if (uw) uw.classList.remove('on'); } document.body.classList.remove('sky-swap'); document.body.classList.remove('city-mode'); A.carEngineStop(); A.skidStop(); A.hornStop(); A.cityAmbience(false); document.body.classList.remove('driving'); document.body.classList.remove('near-car'); document.body.classList.remove('near-swing');
    document.body.classList.remove('in-race'); document.body.classList.remove('big-map'); document.body.classList.remove('single'); $('pause').classList.add('hidden'); this.menuOpen = false;
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
    d.innerHTML = `<img alt="${c.name}" src="${thumbs[c.id] || ''}"><b style="color:${c.color}">${c.name}</b>`;
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
    const c = makeHero(i); c.group.rotation.y = -0.35; sc.add(c.group); c.update(0.016, { speed: 0, grounded: true, vy: 0, stun: 0, dive: 0, celebrate: false });
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
  race = new Race(levelIdx, [{ id: 1, name: app.name, char: app.char }], 1, { multi: false, t0: performance.now() + (LEVEL_META[levelIdx] && LEVEL_META[levelIdx].city ? -50 : 3600), seed: 1 + Math.floor(Math.random() * 1e9) }); race.syncAct();
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
  stage.setTitle(); show('title'); A.initAudio(); A.startMusic(99);
}

// ---- multiplayer
async function ensureNet() {
  if (app.net && app.net.connected) return app.net;
  const net = new Net();
  net.on('joined', (m) => { app.myId = m.id; });
  net.on('lobby', onLobby);
  net.on('err', (m) => {
    $('mp-status').textContent = m.msg;
    stopJoin(); gtoast(m.msg);   // no auto-retry: you can only join a room that already exists
  });
  net.on('rooms', (m) => setJoinAvail(m.n | 0));
  net.on('go', onGo);
  net.on('s', (m) => { if (race && race.multi) { const r = race.remotes.get(m.id); if (r) r.push(m); } });
  net.on('fin', (m) => { if (race && race.multi) race.onFin(m); });
  net.on('bat', (m) => { if (race && race.multi) race.onBat(m); });
  net.on('carpark', (m) => { if (race && race.multi) race.onCars({ [m.c]: m }); });
  net.on('cars', (m) => { if (race && race.multi) race.onCars(m.cars); else app.pendingCars = m.cars; });
  net.on('shove', (m) => { if (race && race.multi) race.onShove(m); });
  net.on('jack', (m) => { if (race && race.multi) race.onJack(m); });
  for (const t of ['pd', 'tf']) net.on(t, (m) => { if (race && race.multi && race.peds) race.onWorld({ ...m, t }); });
  net.on('ev', (m) => { if (race && race.multi) race.onEvent(m); });
  net.on('fx', (m) => { if (race && race.multi) race.onFx(m); });
  net.on('pc', (m) => { if (race && race.multi && race.meta.city) race.onCops(m); });
  net.on('m_busy', (m) => { if (race && race.multi) race.busy = new Set(m.ids || []); });
  net.on('ph', (m) => { if (race && race.multi) race.onPedHit(m); });
  net.on('end', (m) => { if (race && race.multi) race.onEnd(m); });
  for (const t of ['m_lobby', 'm_go', 'm_run', 'm_st', 'm_end', 'm_idle', 'm_th', 'm_sn', 'm_ev']) net.on(t, (m) => { if (race && race.multi && race.mission) race.mission.onMsg(m); });
  net.on('left', (m) => { if (race && race.multi) race.removeRemote(m.id); });
  net.on('close', () => { gtoast('Disconnected from server'); if (race) { race.destroy(); race = null; } app.room = null; exitLock(); stage.setTitle(); show('title'); });
  await net.connect();
  app.net = net;
  return net;
}
// JOIN ROOM is only available while a room exists: ask the server every 2 s while the multiplayer screen is open
let roomPoll = null;
function setJoinAvail(n) { const b = $('b-join'); if (!b) return; b.disabled = !(n > 0); b.classList.toggle('off', !(n > 0)); const sm = b.querySelector('small'); if (sm) sm.textContent = n > 0 ? 'A room is open - tap to join' : 'Not available yet - the host must tap CREATE ROOM first'; }
async function startRoomPoll() {
  if (roomPoll) { clearInterval(roomPoll); roomPoll = null; }
  setJoinAvail(0);
  try {
    const net = await ensureNet();
    const q = () => { if (app.screen !== 'mp' || app.room || !net.connected) { if (app.screen !== 'mp') { clearInterval(roomPoll); roomPoll = null; } return; } net.send({ t: 'rooms' }); };
    q(); roomPoll = setInterval(q, 2000);
  } catch (e) { $('mp-status').textContent = 'Could not connect to the game server.'; }
}
function openMp() { $('mp-status').textContent = ''; stage.setTitle(app.char); show('mp'); startRoomPoll(); }
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
  $('b-start').disabled = !host; $('b-start').firstElementChild.textContent = host ? 'START' : 'WAITING FOR HOST';
  $('lobby-hint').textContent = host ? (m.players.length < 2 ? 'Tell friends to tap MULTIPLAYER on the same link. You can also start alone.' : 'Everyone ready? Hit start!') : 'The host will start the race.';
  stage.setLobby(m.players);
}
function onGo(m) {
  A.initAudio();
  if (race) { race.destroy(); race = null; }
  const room = app.room; if (!room) return;
  const players = m.order.map((id) => room.players.find((p) => p.id === id)).filter(Boolean);
  app.level = m.level;
  race = new Race(m.level, players, app.myId, { multi: true, t0: m.t0, seed: m.seed }); race.syncAct();
  resize(); show('none'); tryLock();
}

// ------------------------------------------------------------------ input
function tryLock() { if (race && !race.over && document.pointerLockElement !== canvas) { try { const p = canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch { /* needs a user gesture */ } } }
function exitLock() { if (document.pointerLockElement) document.exitPointerLock(); }
document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === canvas;
  if (locked) hadLock = true;
  else if (hadLock && race && !race.over && !race.menuOpen && !IS_TOUCH && !race.bigMapOpen && !document.body.classList.contains('m-open')) openPause(); // Esc releases the mouse -> show the menu
  if (!locked) hadLock = false;
  $('click-hint').classList.toggle('show', !!race && !race.over && !race.menuOpen && !race.bigMapOpen && !locked && !document.body.classList.contains('m-open'));
});
let hadLock = false;
let dragging = false;
canvas.addEventListener('mousedown', (e) => { dragging = true; if (race && !race.over) {
  if (race.meta.city && !race.hunt && document.pointerLockElement === canvas && !race.menuOpen) { if (e.button === 0) { race.fireHeld = true; race.punch(); } else if (e.button === 2) race.aimHold(true); return; }   // laptop: LEFT click fires (or punches), hold RIGHT click to aim
  if (e.button === 0 && race.hunt && document.pointerLockElement === canvas && !race.menuOpen) race.fireHeld = true; else if (e.button === 0 && race.multi && document.pointerLockElement === canvas && !race.menuOpen) race.swing(); else tryLock(); } });
window.addEventListener('mouseup', (e) => { dragging = false; if (race) { if (e.button === 2) race.aimHold(false); else race.fireHeld = false; } });
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
window.addEventListener('wheel', (e) => { if (race && race.scoped && !race.menuOpen) { e.preventDefault(); race.zoomScope(e.deltaY < 0 ? 1 : -1); } }, { passive: false });   // scroll (or trackpad pinch) while scoped = zoom in / out
for (const [id, d] of [['sz-in', 1], ['sz-out', -1]]) { const el = $(id); if (el) el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); if (race) race.zoomScope(d); }); }
window.addEventListener('mousemove', (e) => { if (race && !race.over && (document.pointerLockElement === canvas || dragging)) race.look(e.movementX, e.movementY); });
$('click-hint').addEventListener('click', tryLock);
window.addEventListener('keydown', (e) => {
  if (e.target && e.target.tagName === 'INPUT') { if (e.code === 'Enter') { if (app.screen === 'profile') $('b-profile-next').click(); else if (app.screen === 'mp') $('b-join').click(); } return; }
  if (race && !race.over) { if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ShiftLeft', 'ShiftRight'].includes(e.code)) e.preventDefault(); }
  if (e.repeat) return;
  keys.add(e.code);
  if (e.code === 'Space') press.jump = true;
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight' || e.code === 'KeyF') press.dive = true;
  if (e.code === 'KeyM') { if (race && !race.over && race.meta.city) race.toggleMap(); else toggleSound(); }
  if (e.code === 'Tab' && race && race.meta.city) { e.preventDefault(); race.toggleMap(); }
  if (e.code === 'Escape' && race && race.bigMapOpen) { race.toggleMap(false); return; }
  if (race && race.mission && document.body.classList.contains('m-open')) { if (e.code === 'Enter') { race.mission.pressStart(); return; } if (e.code === 'Escape') { race.mission.panelClosed = true; race.mission.showPanel(false); return; } }
  if (e.code === 'KeyG') press.grab = true;
  if (race && !race.over && !race.menuOpen && race.meta.city) { if (e.code === 'KeyZ') race.toggleCrouch(); else if (e.code === 'KeyF') race.punch(); else if (e.code === 'KeyV') race.cycleWeapon(); else if (e.code === 'KeyR') race.toggleAim(); else if (e.code === 'Equal' || e.code === 'NumpadAdd') race.zoomScope(1); else if (e.code === 'Minus' || e.code === 'NumpadSubtract') race.zoomScope(-1); }
  if (e.code === 'KeyL' && race && !race.over && !e.repeat) race.toggleLights();
  if (e.code === 'KeyB' && race && !race.menuOpen) { race.swing(); }
  if (e.code === 'KeyC' && race && !race.over && !e.repeat) race.toggleCar();
  if (e.code === 'KeyH' && race && !race.menuOpen) race.honkOn();
  if (e.code === 'Escape' || e.code === 'KeyP') { if (race && !race.over) (race.menuOpen ? closePause() : openPause()); }
});
window.addEventListener('keyup', (e) => { keys.delete(e.code); if (e.code === 'KeyH') A.hornStop(); });
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
  if (race.bigMapOpen) race.toggleMap(false);
  race.menuOpen = true;
  if (!race.multi && !race.paused) { race.paused = true; race.pauseAt = performance.now(); }
  exitLock(); keys.clear(); touch.x = touch.y = 0; touch.jump = false; touch.sl = touch.sr = touch.gas = touch.brk = touch.hb = 0; touch.bs = 0;
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
$('b-gm').addEventListener('click', () => { A.sfx.click(); if (race && !race.menuOpen) { openPause(); try { if (document.pointerLockElement) document.exitPointerLock(); } catch {} } });
$('p-resume').onclick = () => { A.sfx.click(); closePause(); };
$('p-sound').onclick = () => { A.initAudio(); toggleSound(); A.sfx.click(); };
$('p-gfx').onclick = () => { Q.low = !Q.low; try { localStorage.setItem('ph_low', Q.low ? '1' : '0'); } catch { /* ignore */ } A.sfx.click(); applyGfx(); syncGfx(); };
$('p-full').onclick = () => {
  const d = document, el = d.documentElement;
  try { if (!d.fullscreenElement && el.requestFullscreen) el.requestFullscreen({ navigationUI: 'hide' }); else if (d.exitFullscreen && d.fullscreenElement) d.exitFullscreen(); } catch { /* not supported */ }
};
// ---- fullscreen button (Android / PC: real fullscreen + landscape lock; iPhone Safari has no fullscreen API -> "Add to Home Screen" hint, the installed app opens fullscreen)
{
  const d = document, el = d.documentElement, isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const standalone = () => window.navigator.standalone === true || (typeof window.matchMedia === 'function' && window.matchMedia('(display-mode: fullscreen), (display-mode: standalone)').matches);
  const isFull = () => !!(d.fullscreenElement || d.webkitFullscreenElement);
  const sync = () => { document.body.classList.toggle('is-full', isFull()); document.body.classList.toggle('standalone', standalone()); };
  d.addEventListener('fullscreenchange', sync); d.addEventListener('webkitfullscreenchange', sync); sync();
  $('b-full').addEventListener('click', () => {
    try {
      if (isFull()) { (d.exitFullscreen || d.webkitExitFullscreen).call(d); return; }
      const req = el.requestFullscreen || el.webkitRequestFullscreen;
      if (req) { const r = req.call(el, { navigationUI: 'hide' }); const lock = () => { try { screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape').catch(() => {}); } catch { /* ignore */ } }; if (r && r.then) r.then(lock).catch(() => {}); else lock(); }
      else if (isIOS) { const h = $('ios-hint'); h.classList.remove('hidden'); h.onclick = () => h.classList.add('hidden'); setTimeout(() => h.classList.add('hidden'), 15000); }
    } catch { /* not supported */ }
  });
}
{ const mm = $('minimap'), bw = $('bigmap-wrap'), bx = $('bigmap-x'), cv = $('bigmap'); let closedAt = 0, openedAt = 0;
  const open = () => { if (race && !race.over) { keys.clear(); touch.x = touch.y = 0; touch.jump = false; touch.sl = touch.sr = touch.gas = touch.brk = touch.hb = 0; touch.bs = 0; race.minimap.bigOpen(); race.toggleMap(true); openedAt = performance.now(); } };
  const close = () => { if (race && race.bigMapOpen) { race.toggleMap(false); closedAt = performance.now(); } };
  if (mm) mm.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); if (performance.now() - closedAt < 600) return; open(); });
  if (bx) bx.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); if (performance.now() - openedAt < 250) return; close(); });
  // the big map: drag = move, two fingers = pinch zoom, wheel / trackpad pinch = zoom, + - buttons; a plain tap closes it
  const ptrs = new Map(); let moved = 0, downAt = 0, multi = false, d0 = 0, z0 = 1;
  const local = (e) => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  const two = () => { const a = [...ptrs.values()]; return a.length > 1 ? [Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y), (a[0].x + a[1].x) / 2, (a[0].y + a[1].y) / 2] : null; };
  if (bw) {
    bw.addEventListener('pointerdown', (e) => { if (e.target === bx || e.target.closest('#bigmap-zoom')) return; e.preventDefault(); try { bw.setPointerCapture(e.pointerId); } catch {}
      ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY }); if (ptrs.size === 1) { moved = 0; downAt = performance.now(); multi = false; } else { multi = true; const t = two(); d0 = t[0]; z0 = race && race.minimap.bz ? race.minimap.bz.z : 1; } });
    bw.addEventListener('pointermove', (e) => { const p = ptrs.get(e.pointerId); if (!p || !race) return; const mmap = race.minimap; e.preventDefault();
      const before = two(), dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY; moved += Math.abs(dx) + Math.abs(dy);
      if (ptrs.size === 1) mmap.bigPan(dx, dy);
      else if (before) { const t = two(), r = cv.getBoundingClientRect(); const want = z0 * t[0] / Math.max(10, d0), cur = mmap.bz.z; mmap.bigZoom(want / cur, t[1] - r.left, t[2] - r.top); mmap.bigPan(dx / 2, dy / 2); } });
    const up = (e) => { if (!ptrs.has(e.pointerId)) return; ptrs.delete(e.pointerId); if (!ptrs.size && !multi && moved < 10 && performance.now() - downAt < 450 && performance.now() - openedAt > 250 && race && race.bigMapOpen) { const mp = race.minimap, bz = mp.bz, [lx, ly] = local(e); if (bz && mp.bS) { const k = mp.bS / 1020 * bz.z; race.setWaypoint(bz.cx + (lx - mp.bS / 2) / k, bz.cz + (ly - mp.bS / 2) / k); race.drawBigMap(); } } };
    bw.addEventListener('pointerup', up); bw.addEventListener('pointercancel', (e) => { ptrs.delete(e.pointerId); });
    bw.addEventListener('wheel', (e) => { if (!race || !race.bigMapOpen) return; e.preventDefault(); const [x, y] = local(e); race.minimap.bigZoom(Math.exp(-e.deltaY * (e.ctrlKey ? 0.012 : 0.0018)), x, y); }, { passive: false });
    for (const ev of ['gesturestart', 'gesturechange']) bw.addEventListener(ev, (e) => e.preventDefault(), { passive: false });   // iOS Safari: no page zoom while pinching the map
  }
  const zb = (id, f) => { const el = $(id); if (el) el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); if (race) race.minimap.bigZoom(f, race.minimap.bS / 2, race.minimap.bS / 2); }); };
  zb('bz-in', 1.5); zb('bz-out', 1 / 1.5); }
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
  $('b-help').onclick = () => { A.initAudio(); A.sfx.click(); $('s-help').classList.remove('hidden'); $('s-help').classList.add('active'); };
  $('b-help-close').onclick = () => { A.sfx.back(); $('s-help').classList.remove('active'); $('s-help').classList.add('hidden'); };
  $('b-sound').onclick = () => { A.initAudio(); toggleSound(); A.sfx.click(); };
  document.querySelectorAll('#quick .qrow, #quick2 .qrow').forEach((row) => {
    const k = row.dataset.k, paint = () => row.classList.toggle('on', !!OPT[k]); paint();
    row.onclick = () => { A.initAudio(); A.sfx.click(); OPT[k] = !OPT[k]; saveOpts(); document.querySelectorAll('.qrow').forEach((r) => r.classList.toggle('on', !!OPT[r.dataset.k])); };
  });
  { const HRS = { morning: 8, noon: 12, afternoon: 17, night: 23 };
    const paintT = () => { document.querySelectorAll('#tsel button').forEach((b) => b.classList.toggle('on', b.dataset.t === OPT.time)); document.querySelectorAll('#hsel button').forEach((b) => b.classList.toggle('on', b.dataset.h === (OPT.haze || (IS_TOUCH ? 'normal' : 'clear')))); };
    window.applyTime = () => { if (race && race.dn) race.dn.setHour(OPT.time in HRS ? HRS[OPT.time] : null); };
    document.querySelectorAll('#tsel button').forEach((b) => { b.onclick = () => { A.sfx.click(); OPT.time = b.dataset.t; saveOpts(); window.applyTime(); paintT(); }; });
    document.querySelectorAll('#hsel button').forEach((b) => { b.onclick = () => { A.sfx.click(); OPT.haze = b.dataset.h; saveOpts(); if (race) race.setFar(); paintT(); }; });
    paintT(); }
  $('b-settings').onclick = () => { A.initAudio(); A.sfx.click(); $('s-settings').classList.remove('hidden'); $('s-settings').classList.add('active'); };
  $('b-settings-close').onclick = () => { A.sfx.back(); $('s-settings').classList.remove('active'); $('s-settings').classList.add('hidden'); };
  // volume sliders (title settings + pause menu): music and sound effects, remembered between visits
  { const V = A.getVolumes(), sl = (cls, v) => document.querySelectorAll(cls).forEach((e) => { e.value = Math.round(v * 100); });
    sl('.vol-m', V.music); sl('.vol-s', V.sfx);
    document.querySelectorAll('.vol-m').forEach((e) => { e.oninput = () => { A.initAudio(); A.setMusicVolume(e.value / 100); sl('.vol-m', e.value / 100); }; });
    document.querySelectorAll('.vol-s').forEach((e) => { e.oninput = () => { A.initAudio(); A.setSfxVolume(e.value / 100); sl('.vol-s', e.value / 100); }; e.onchange = () => A.sfx.shot(0, 0.5); }); }
  // music on the title page: start loading at once; browsers only let sound play after the first tap / key, so unlock on it
  A.initAudio(); A.startMusic(99);
  { const un = () => { A.initAudio(); if (!app.screen || app.screen === 'title' || app.screen === 'profile') A.startMusic(99); for (const ev of ['pointerdown', 'keydown', 'touchend']) window.removeEventListener(ev, un, true); }; for (const ev of ['pointerdown', 'keydown', 'touchend']) window.addEventListener(ev, un, true); }
  $('b-profile-back').onclick = () => { A.sfx.back(); stage.setTitle(); show('title'); };
  $('b-profile-next').onclick = () => { readName(); A.sfx.click(); if (app.mode === 'single') { A.sfx.go(); startSingle(0); } else openMp(); };
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
    adaptQuality(dt); flashPolice(now); A.sirenTickAll();
    if (race) { if (race.over && race.menuOpen) closePause(); if (!race.paused) race.update(dt); else if (race.bigMapOpen) race.drawBigMap(); race.render(); }
    else { stage.update(dt); renderer.render(stage.scene, stage.camera); }
  };
  requestAnimationFrame(loop);
}
boot().catch((e) => { console.error(e); const p = document.querySelector('#loader p'); if (p) p.textContent = 'Error: ' + e.message; });
window.__ph = { A, rend: renderer, app, Remote, stepBody, newBody, startSingle: (l) => startSingle(l), keys, press, touch, get race() { return race; }, get stage() { return stage; } };


// ------------------------------------------------------------------ touch controls
(function initTouch() {
  if (IS_TOUCH) document.body.classList.add('touch');
  const zone = $('touch'), joy = $('joy'), knob = $('joy-knob');
  if (!zone || !joy || !knob) return;
  const RAD = 56;
  let joyId = null, camId = null, ox = 0, oy = 0, lx = 0, ly = 0;
  const find = (list, id) => { for (const t of list) if (t.identifier === id) return t; return null; };
  const joyReset = () => { joyId = null; touch.x = touch.y = 0; joy.classList.remove('on'); joy.style.left = joy.style.top = ''; knob.style.transform = 'translate(-50%, -50%)'; };   /* knob back to the middle every time it is let go */
  window.addEventListener('blur', joyReset); document.addEventListener('visibilitychange', () => { if (document.hidden) joyReset(); });
  setInterval(() => { if (joyId !== null && document.body.classList.contains('driving')) joyReset(); }, 200);
  zone.addEventListener('touchstart', (e) => {
    e.preventDefault();
    for (const t of e.changedTouches) {
      if (t.clientX < window.innerWidth * (document.body.classList.contains('scoped') ? 0.2 : 0.33) && joyId === null && !document.body.classList.contains('driving')) {   // the joystick lives in the LEFT third only (left fifth while scoped): the rest of the screen only turns the camera
        joyId = t.identifier; ox = t.clientX; oy = t.clientY; joy.style.left = ox + 'px'; joy.style.top = oy + 'px'; joy.classList.add('on'); knob.style.transform = 'translate(-50%, -50%)';
      } else if (camId === null && (t.clientX >= window.innerWidth * (document.body.classList.contains('scoped') ? 0.2 : 0.33) || document.body.classList.contains('driving'))) { camId = t.identifier; lx = t.clientX; ly = t.clientY; }
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
      if (t.identifier === joyId) joyReset();
      if (t.identifier === camId) camId = null;
    }
    if (joyId !== null && !find(e.touches, joyId)) joyReset();   /* safety: the finger is gone, so the stick must be centred */
  };
  zone.addEventListener('touchend', end); zone.addEventListener('touchcancel', end);
  const btn = (id, down, up) => {
    const el = $(id); if (!el) return;
    el.addEventListener('touchstart', (e) => { e.preventDefault(); e.stopPropagation(); down(); }, { passive: false });
    const u = (e) => { e.preventDefault(); e.stopPropagation(); if (up) up(); };
    el.addEventListener('touchend', u, { passive: false }); el.addEventListener('touchcancel', u, { passive: false });
  };
  // on-screen action buttons (laptop: mouse, phone: touch)
  const act = (id, fn, up) => { btn(id, fn, up); const el = $(id); if (el) { el.addEventListener('mousedown', (e) => { e.preventDefault(); e.stopPropagation(); fn(); }); if (up) { el.addEventListener('mouseup', up); el.addEventListener('mouseleave', up); } } };
  act('a-jump', () => { if (race && !race.over && !race.menuOpen) { press.jump = true; touch.jump = true; } }, () => { touch.jump = false; });
  act('a-crouch', () => { if (race && !race.over && !race.menuOpen) race.toggleCrouch(); });
  act('a-weapon', () => { if (race && !race.over && !race.menuOpen) race.toggleWheel(); });
  act('a-aim', () => { if (race && !race.over && !race.menuOpen) race.toggleAim(); });
  act('a-punch', () => { if (race && !race.over && !race.menuOpen) { race.fireHeld = true; race.punch(); } }, () => { if (race) race.fireHeld = false; });
  btn('t-jump', () => { if (race && !race.over) { press.jump = true; touch.jump = true; } }, () => { touch.jump = false; });
  btn('t-dive', () => { if (race && !race.over) press.dive = true; });
  btn('t-bat', () => { if (race && !race.over && !race.menuOpen) race.swing(); });
  act('c-horn', () => { if (race) race.honkOn(); }, () => A.hornStop());
  act('c-lights', () => { if (race && !race.over) race.toggleLights(); });
  act('c-left', () => { touch.sl = 1; }, () => { touch.sl = 0; }); act('c-right', () => { touch.sr = 1; }, () => { touch.sr = 0; });
  act('c-gas', () => { touch.gas = 1; }, () => { touch.gas = 0; }); act('c-brake', () => { touch.brk = 1; }, () => { touch.brk = 0; });
  act('c-hb', () => { touch.hb = 1; }, () => { touch.hb = 0; });
  btn('b-grab', () => { touch.grab = true; press.grab = true; }, () => { touch.grab = false; });
  { const g = $('b-grab'); if (g) { g.addEventListener('mousedown', (e) => { e.preventDefault(); touch.grab = true; press.grab = true; }); window.addEventListener('mouseup', () => { touch.grab = false; }); } }
  btn('b-car', () => { if (race) race.toggleCar(); }); btn('b-exit', () => { if (race) race.toggleCar(); });
  for (const id of ['b-car', 'b-exit']) { const el = $(id); if (el) el.addEventListener('click', () => { if (race) race.toggleCar(); el.blur(); }); }
})();
