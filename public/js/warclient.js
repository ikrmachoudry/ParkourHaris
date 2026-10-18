// AGE OF WAR: the client (3D view, camera, selection, commands, HUD). The rules live in warsim.js.
// Single player runs the sim right here; multiplayer sends commands to the server and draws its snapshots.
import * as THREE from 'three';
import { newWar, stepWar, cmdWar, W, UK, UKIDS, BK, BKIDS, NODE_R } from './warsim.js';
import { Particles } from './scenery.js';
import * as A from './audio.js';

const TEAM_COL = ['#3b82f6', '#ef4444'];
const RES_ICON = { food: '\u{1F356}', wood: '\u{1FAB5}', gold: '\u{1FA99}', stone: '\u{1FAA8}' };
const RES_ORDER = ['food', 'wood', 'gold', 'stone'];
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const mat = (c, o = {}) => new THREE.MeshLambertMaterial({ color: c, ...o });
const mats = new Map();
const M = (c) => { if (!mats.has(c)) mats.set(c, mat(c)); return mats.get(c); };
const box = (w, h, d, c, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), M(c)); m.position.set(x, y, z); m.castShadow = true; return m; };
const cyl = (rt, rb, h, c, x = 0, y = 0, z = 0, seg = 10) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), M(c)); m.position.set(x, y, z); m.castShadow = true; return m; };
const cone = (r, h, c, x = 0, y = 0, z = 0, seg = 8) => { const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), M(c)); m.position.set(x, y, z); m.castShadow = true; return m; };
const ball = (r, c, x = 0, y = 0, z = 0) => { const m = new THREE.Mesh(new THREE.SphereGeometry(r, 12, 10), M(c)); m.position.set(x, y, z); m.castShadow = true; return m; };

// ------------------------------------------------------------------ models (cartoon, tiny polygon counts)
function unitModel(kind, team) {
  const g = new THREE.Group(), tc = TEAM_COL[team], arm = new THREE.Group();
  const body = new THREE.Group(); g.add(body);
  if (kind === 'knight') {
    body.add(box(1.0, 0.5, 1.9, '#8a5a34', 0, 0.75, 0), cyl(0.12, 0.12, 0.6, '#8a5a34', 0.3, 0.3, 0.7), cyl(0.12, 0.12, 0.6, '#8a5a34', -0.3, 0.3, 0.7), cyl(0.12, 0.12, 0.6, '#8a5a34', 0.3, 0.3, -0.7), cyl(0.12, 0.12, 0.6, '#8a5a34', -0.3, 0.3, -0.7), box(0.5, 0.55, 0.5, '#8a5a34', 0, 1.1, 0.95));
    body.add(cyl(0.34, 0.4, 0.7, tc, 0, 1.4, -0.1), ball(0.28, '#cfd6e0', 0, 1.95, -0.1), cone(0.12, 0.35, tc, 0, 2.3, -0.1));
    arm.position.set(0.5, 1.6, 0.1); arm.add(cyl(0.05, 0.05, 2.0, '#cdb88a', 0, 0, 0.9)); arm.children[0].rotation.x = Math.PI / 2; arm.add(cone(0.12, 0.4, '#dfe6ee', 0, 0, 1.95)); arm.children[1].rotation.x = Math.PI / 2;
  } else {
    body.add(cyl(0.28, 0.36, 0.8, kind === 'vil' ? '#d8a36a' : tc, 0, 0.55, 0), ball(0.3, '#ffd2a4', 0, 1.15, 0));
    if (kind === 'vil') body.add(cyl(0.38, 0.38, 0.08, '#e6c76a', 0, 1.35, 0), cyl(0.2, 0.2, 0.14, '#e6c76a', 0, 1.42, 0));
    if (kind === 'spear') { body.add(cyl(0.34, 0.34, 0.22, '#cfd6e0', 0, 1.35, 0, 8)); arm.position.set(0.45, 0.9, 0.1); arm.add(cyl(0.04, 0.04, 2.4, '#cdb88a', 0, 0, 0.5)); arm.children[0].rotation.x = Math.PI / 2; arm.add(cone(0.1, 0.35, '#dfe6ee', 0, 0, 1.8)); arm.children[1].rotation.x = Math.PI / 2; body.add(cyl(0.3, 0.3, 0.06, tc, -0.4, 0.8, 0.2)); }
    if (kind === 'arch') { body.add(cone(0.34, 0.5, '#2f8f4e', 0, 1.5, 0)); arm.position.set(0.4, 0.95, 0.25); const bow = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.04, 6, 12, Math.PI), M('#8a5a34')); bow.rotation.set(0, Math.PI / 2, 0); arm.add(bow); }
    if (kind === 'vil') { arm.position.set(0.4, 0.9, 0.2); arm.add(cyl(0.04, 0.04, 0.9, '#8a5a34', 0, 0.2, 0.3)); arm.add(box(0.5, 0.12, 0.12, '#9aa3ad', 0, 0.65, 0.3)); }
  }
  body.add(arm); g.userData = { body, arm };
  return g;
}
function buildingModel(kind, team) {
  const g = new THREE.Group(), tc = TEAM_COL[team], r = BK[kind].r;
  if (kind === 'tc') {
    g.add(box(r * 1.5, 2.6, r * 1.5, '#e8d9b0', 0, 1.3, 0), box(r * 1.7, 0.4, r * 1.7, '#9a7b4f', 0, 2.8, 0), cone(r * 1.25, 2.6, tc, 0, 4.3, 0, 4), box(1.4, 1.8, 0.2, '#6b4a2b', 0, 0.9, r * 0.76));
    for (const [sx, sz] of [[1, 1], [-1, 1], [1, -1], [-1, -1]]) { g.add(cyl(0.7, 0.8, 4.2, '#cfc2a0', sx * r * 0.85, 2.1, sz * r * 0.85, 8), cone(0.95, 1.1, tc, sx * r * 0.85, 4.7, sz * r * 0.85, 8)); }
    g.children[2].rotation.y = Math.PI / 4;
  } else if (kind === 'house') {
    g.add(box(2.6, 1.8, 2.6, '#f1e3bd', 0, 0.9, 0), cone(2.3, 1.6, tc, 0, 2.6, 0, 4), box(0.7, 1.1, 0.12, '#6b4a2b', 0, 0.55, 1.32)); g.children[1].rotation.y = Math.PI / 4;
  } else if (kind === 'barracks') {
    g.add(box(4.6, 2.2, 3.8, '#cdbb98', 0, 1.1, 0), box(4.9, 0.3, 4.1, '#7a5a38', 0, 2.3, 0), box(4.9, 1.3, 0.3, tc, 0, 2.95, 1.6), box(1.6, 1.5, 0.15, '#4a3320', 0, 0.75, 1.92), cyl(0.07, 0.07, 3, '#6b4a2b', 2.1, 2.2, 1.9), box(1.0, 0.7, 0.05, tc, 2.55, 3.4, 1.9));
    g.add(box(0.15, 1.6, 0.15, '#9aa3ad', -1.8, 0.8, 2.1), box(0.15, 1.6, 0.15, '#9aa3ad', -1.4, 0.8, 2.1)); g.children[g.children.length - 2].rotation.z = 0.25; g.children[g.children.length - 1].rotation.z = -0.25;
  } else {
    g.add(cyl(1.5, 1.8, 4.6, '#b9b2a6', 0, 2.3, 0, 8), cyl(2.0, 1.6, 0.7, '#8d8579', 0, 4.9, 0, 8), cyl(1.8, 1.8, 1.0, tc, 0, 5.7, 0, 8), cone(2.1, 1.6, '#7a5a38', 0, 7.0, 0, 8), box(0.5, 0.9, 0.1, '#33261a', 0, 3.0, 1.55));
  }
  const bar = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.18), new THREE.MeshBasicMaterial({ color: '#46d36a', depthTest: false, transparent: true })); bar.renderOrder = 10;
  const back = new THREE.Mesh(new THREE.PlaneGeometry(1.06, 0.26), new THREE.MeshBasicMaterial({ color: '#222', depthTest: false, transparent: true, opacity: 0.7 })); back.renderOrder = 9;
  g.userData = { r, bar, back }; return g;
}
function nodeModel(kind) {
  const g = new THREE.Group();
  if (kind === 'tree') { g.add(cyl(0.18, 0.28, 1.2, '#7a5230', 0, 0.6, 0, 6), cone(1.0, 1.6, '#2f9e44', 0, 1.8, 0, 7), cone(0.75, 1.3, '#3bb54f', 0, 2.7, 0, 7)); }
  else if (kind === 'gold') { g.add(new THREE.Mesh(new THREE.DodecahedronGeometry(1.2), M('#8d8579')), new THREE.Mesh(new THREE.DodecahedronGeometry(0.55), M('#ffd23f'))); g.children[0].position.y = 0.8; g.children[1].position.set(0.6, 1.3, 0.5); g.children[0].castShadow = true; const s2 = new THREE.Mesh(new THREE.DodecahedronGeometry(0.5), M('#ffd23f')); s2.position.set(-0.7, 0.9, 0.7); g.add(s2); }
  else if (kind === 'stone') { const a = new THREE.Mesh(new THREE.DodecahedronGeometry(1.15), M('#a9b0b8')), b = new THREE.Mesh(new THREE.DodecahedronGeometry(0.7), M('#c4cad1')); a.position.y = 0.8; b.position.set(0.8, 0.5, 0.6); a.castShadow = true; g.add(a, b); }
  else { g.add(ball(0.9, '#2f9e44', 0, 0.55, 0)); for (let i = 0; i < 7; i++) g.add(ball(0.13, '#e03a4e', Math.cos(i * 1.1) * 0.7, 0.9 + (i % 3) * 0.2, Math.sin(i * 1.1) * 0.7)); g.children[0].scale.y = 0.7; }
  return g;
}

// ------------------------------------------------------------------ the game
export class WarGame {
  constructor(o) {
    this.war = true; this.multi = !!o.multi; this.meta = o.meta; this.players = o.players; this.localId = o.localId; this.o = o;
    this.over = false; this.menuOpen = false; this.paused = false; this.pauseAt = 0; this.t0 = o.t0 || 0; this.lastSend = 0; this.remotes = new Map();
    this.nPlayers = Math.max(1, o.players.length);
    this.sim = this.multi ? null : newWar(this.nPlayers);
    this.layout = newWar(this.nPlayers);                       // same deterministic map: node positions for the multiplayer client
    this.view = { res: [200, 200, 100, 100], pop: [4, 4], cap: [10, 10], tm: 0, over: 0 };
    this.ents = new Map();                                      // id -> {id,team,kind,x,z,hp,maxhp,st,yaw,built,q...}
    this.meshes = new Map(); this.nodeMeshes = new Map();
    this.sel = new Set(); this.mode = null; this.amove = false; this.buildKind = null; this.msgT = 0; this.shownOver = false; this.sentUnits = 0;

    const scene = this.scene = new THREE.Scene();
    scene.background = new THREE.Color('#9bd8ff'); scene.fog = new THREE.Fog('#9bd8ff', 140, 320);
    scene.environment = o.envTex; scene.environmentIntensity = 0.5;
    this.camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 1, 600);
    this.cam = { x: 0, z: 46, h: 38, tx: 0, tz: 46, th: 38 };
    scene.add(new THREE.HemisphereLight('#dff1ff', '#6fae52', 1.35));
    const sun = this.sun = new THREE.DirectionalLight('#fff0c8', 2.0); sun.position.set(-50, 90, 40); sun.castShadow = o.shadows !== false;
    sun.shadow.mapSize.set(2048, 2048); const sc = sun.shadow.camera; sc.left = -95; sc.right = 95; sc.top = 95; sc.bottom = -95; sc.near = 20; sc.far = 260; sun.shadow.bias = -0.0004;
    scene.add(sun, sun.target);
    this.particles = new Particles(500); scene.add(this.particles.points); this.particles.setScale(o.renderer.domElement.height);
    this.buildMap();
    this.tracers = [];
    this.ring = new THREE.Mesh(new THREE.RingGeometry(0.8, 1.0, 20), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthTest: false })); this.ring.rotation.x = -Math.PI / 2; this.ring.visible = false; this.ring.renderOrder = 8; scene.add(this.ring);
    this.ghost = null; this.rings = new Map();
    this.ping = new THREE.Mesh(new THREE.RingGeometry(0.6, 0.8, 24), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0, side: THREE.DoubleSide, depthTest: false })); this.ping.rotation.x = -Math.PI / 2; this.ping.renderOrder = 8; scene.add(this.ping); this.pingT = 0;
    this.buildUI(); this.bindInput();
    document.body.classList.add('war-map');
    A.startMusic(7);
    this.toast(this.multi ? 'Teamwork! You all share the same resources.' : 'Build an army and destroy the RED Town Center!', 4);
    this.hint(0);
    this.syncFromSim();
    this.snapCamera();
  }

  // ---- world
  buildMap() {
    const sc = this.scene;
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(W.HX * 2 + 40, W.HZ * 2 + 40), M('#78c957')); ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; sc.add(ground);
    const edge = new THREE.Mesh(new THREE.RingGeometry(0, 1, 4), M('#5aa646')); void edge;
    const ring = (x, z, r, c) => { const d = new THREE.Mesh(new THREE.CircleGeometry(r, 28), M(c)); d.rotation.x = -Math.PI / 2; d.position.set(x, 0.03, z); d.receiveShadow = true; sc.add(d); };
    ring(0, 52, 15, '#d8c49a'); ring(0, -52, 15, '#d8c49a'); ring(0, 0, 9, '#cfe0b0');
    // river bank stripes + border cliffs
    for (const s of [-1, 1]) { const b = box(W.HX * 2 + 20, 3, 6, '#8a6d4a', 0, 1.0, s * (W.HZ + 4)); b.receiveShadow = true; sc.add(b); const c = box(6, 3, W.HZ * 2 + 20, '#8a6d4a', s * (W.HX + 4), 1.0, 0); sc.add(c); }
    for (const n of this.layout.nodes) { const m = nodeModel(n.kind); m.position.set(n.x, 0, n.z); m.rotation.y = (n.id * 2.4) % 6.28; sc.add(m); this.nodeMeshes.set(n.id, m); m.userData.n = n; }
    this.nodeAmt = new Map(this.layout.nodes.map((n) => [n.id, n.amt]));
    // a few flowers/rocks
    for (let i = 0; i < 40; i++) { const x = ((i * 37) % 130) - 65, z = ((i * 53) % 130) - 65; if (Math.hypot(x, z - 52) < 14 || Math.hypot(x, z + 52) < 14) continue; const f = ball(0.22, ['#ff8fb3', '#fff27a', '#ffffff'][i % 3], x, 0.2, z); f.castShadow = false; sc.add(f); }
  }
  setShadows(on) { this.sun.castShadow = on; }

  // ---- HUD (pure DOM; no changes to index.html needed)
  buildUI() {
    if (!document.getElementById('war-css')) {
      const st = document.createElement('style'); st.id = 'war-css';
      st.textContent = `#war-ui{position:fixed;inset:0;pointer-events:none;z-index:6;font-family:inherit;color:#fff;user-select:none;-webkit-user-select:none;touch-action:none}
#war-ui .bar{position:absolute;top:8px;left:8px;right:8px;display:flex;gap:6px;align-items:center;flex-wrap:wrap}
#war-ui .pill{background:rgba(20,16,50,.78);border:2px solid rgba(255,255,255,.25);border-radius:14px;padding:5px 10px;font-weight:800;font-size:clamp(13px,2.6vmin,19px);pointer-events:auto;white-space:nowrap}
#war-ui .pill b{margin-left:5px}
#war-ui .sp{flex:1}
#war-ui .tm{font-size:clamp(15px,3vmin,22px)}
#war-ui .btn{background:linear-gradient(#ffd23f,#ff9f1c);color:#3a2300;border:0;border-radius:12px;padding:7px 12px;font-weight:900;font-family:inherit;font-size:clamp(13px,2.6vmin,18px);pointer-events:auto;cursor:pointer;touch-action:manipulation;box-shadow:0 3px 0 rgba(0,0,0,.35)}
#war-ui .btn.off{filter:grayscale(.9) brightness(.7)}
#war-ui .btn.on{background:linear-gradient(#7dffa0,#27c25a)}
#war-ui .btn small{display:block;font-size:.72em;font-weight:700;opacity:.85}
#war-msg{position:absolute;top:56px;left:50%;transform:translateX(-50%);background:rgba(20,16,50,.85);border-radius:14px;padding:7px 16px;font-weight:800;font-size:clamp(14px,3vmin,22px);opacity:0;transition:opacity .25s;text-align:center;max-width:90vw}
#war-msg.show{opacity:1}
#war-hint{position:absolute;top:100px;left:8px;max-width:min(420px,60vw);background:rgba(20,16,50,.72);border-radius:12px;padding:8px 12px;font-weight:700;font-size:clamp(12px,2.4vmin,17px);line-height:1.35}
#war-hint b{color:#ffd23f}
#war-panel{position:absolute;left:8px;right:8px;bottom:8px;display:flex;gap:6px;align-items:flex-end;flex-wrap:wrap;justify-content:center}
#war-info{background:rgba(20,16,50,.8);border:2px solid rgba(255,255,255,.25);border-radius:14px;padding:6px 12px;font-weight:800;font-size:clamp(12px,2.5vmin,17px);pointer-events:auto;min-width:130px}
#war-box{position:absolute;border:2px solid #7dffa0;background:rgba(125,255,160,.15);display:none}`;
      document.head.appendChild(st);
    }
    const ui = this.ui = document.createElement('div'); ui.id = 'war-ui';
    ui.innerHTML = `<div class="bar"><div class="pill" id="w-res"></div><div class="pill" id="w-pop"></div><div class="sp"></div><div class="pill tm" id="w-time"></div><button class="btn" id="w-menu">MENU</button></div>
<div id="war-msg"></div><div id="war-hint"></div><div id="war-box"></div><div id="war-panel"></div>`;
    document.body.appendChild(ui);
    this.$ = (s) => ui.querySelector(s);
    this.$('#w-menu').onclick = () => this.o.onMenu && this.o.onMenu();
    this.$('#w-menu').addEventListener('pointerdown', (e) => e.stopPropagation());
    this.hudSig = '';
  }
  toast(t, s = 2.2) { const m = this.$('#war-msg'); m.textContent = t; m.classList.add('show'); this.msgT = s; }
  hint(i) {
    const touch = this.o.touch;
    const steps = touch
      ? ['<b>1.</b> Tap a <b>villager</b>, then tap a <b>tree</b>, <b>berries</b> or <b>gold</b> to collect.', '<b>2.</b> Tap the <b>Town Center</b> and train villagers. Build a <b>House</b> for more room!', '<b>3.</b> Build a <b>Barracks</b>, train soldiers, tap <b>ARMY</b>, then tap the red base to attack!']
      : ['<b>1.</b> Click a <b>villager</b>, then <b>right-click</b> a tree, berries or gold to collect.', '<b>2.</b> Click the <b>Town Center</b> and train villagers. Build a <b>House</b> when the population is full!', '<b>3.</b> Build a <b>Barracks</b>, train soldiers, press <b>Q</b> (all army), then <b>right-click</b> the red base to attack!'];
    this.hintI = i; this.$('#war-hint').innerHTML = steps[Math.min(i, steps.length - 1)]; this.$('#war-hint').style.display = i >= steps.length ? 'none' : '';
  }

  // ---- state in
  syncFromSim() {
    const w = this.sim; if (!w) return;
    const seen = new Set();
    for (const u of w.units) { seen.add(u.id); let e = this.ents.get(u.id); if (!e) { e = { id: u.id, team: u.team, kind: u.kind, isU: true, x: u.x, z: u.z }; this.ents.set(u.id, e); } e.x = u.x; e.z = u.z; e.hp = u.hp; e.maxhp = UK[u.kind].hp; e.st = u.st; e.yaw = u.yaw; }
    for (const b of w.blds) { seen.add(b.id); let e = this.ents.get(b.id); if (!e) { e = { id: b.id, team: b.team, kind: b.kind, isU: false, x: b.x, z: b.z }; this.ents.set(b.id, e); } e.hp = b.hp; e.maxhp = b.maxhp; e.built = b.built; e.q = b.queue.length; e.qk = b.queue.length ? b.queue[0].kind : null; e.qp = b.queue.length ? 1 - b.queue[0].t / b.queue[0].tt : 0; }
    for (const id of [...this.ents.keys()]) if (!seen.has(id)) this.ents.delete(id);
    for (const n of w.nodes) this.nodeAmt.set(n.id, n.amt);
    const v = this.view; v.res = [w.res[0].food | 0, w.res[0].wood | 0, w.res[0].gold | 0, w.res[0].stone | 0]; v.pop = w.pop; v.cap = w.cap; v.tm = w.t; v.over = w.over; v.up = w.timeUp;
    for (const e of w.ev) this.fx(e);
    w.ev.length = 0;
  }
  onSnap(m) { // multiplayer snapshot from the server
    const seen = new Set();
    for (const a of m.u) { const [id, team, k, x, z, hp, st, yaw] = a; seen.add(id); let e = this.ents.get(id); const kind = UKIDS[k]; if (!e) { e = { id, team, kind, isU: true, x, z }; this.ents.set(id, e); } e.tx = x; e.tz = z; e.hp = hp; e.maxhp = UK[kind].hp; e.st = st; e.yaw = yaw; }
    for (const a of m.b) { const [id, team, k, x, z, hp, built, qk, qp, ql] = a; seen.add(id); const kind = BKIDS[k]; let e = this.ents.get(id); if (!e) { e = { id, team, kind, isU: false, x, z }; this.ents.set(id, e); } e.hp = hp; e.maxhp = BK[kind].hp; e.built = built; e.q = ql; e.qk = qk >= 0 ? UKIDS[qk] : null; e.qp = qp; }
    for (const id of [...this.ents.keys()]) if (!seen.has(id)) this.ents.delete(id);
    if (m.na) this.layout.nodes.forEach((n, i) => this.nodeAmt.set(n.id, m.na[i]));
    const v = this.view; v.res = m.res; v.pop = m.pop; v.cap = m.cap; v.tm = m.tm; v.over = m.over; v.up = m.up;
    if (m.n && m.n !== this.nPlayers) this.nPlayers = m.n;
    for (const e of m.ev || []) this.fx(e);
    this.lastSnap = performance.now();
    if (m.over && !this.over) this.finish(m.over, m.up);
  }
  onMsg(m) { if (m && typeof m.msg === 'string') this.toast(m.msg.slice(0, 60), 1.8); }
  fx(e) {
    const p = this.particles, k = e[0];
    if (k === 'hit') { p.emit(e[1], 1.2, e[2], 5, { color: '#fff3a0', speed: 3, up: 3, life: 0.35, size: 0.4 }); if (this.near(e[1], e[2])) A.sfx.bonk(); }
    else if (k === 'shot') { this.tracers.push({ a: new THREE.Vector3(e[1], 1.3, e[2]), b: new THREE.Vector3(e[3], 1.0, e[4]), t: 0.22 }); p.emit(e[3], 1, e[4], 3, { color: '#fff3a0', speed: 2, up: 2, life: 0.3, size: 0.35 }); if (this.near(e[1], e[2])) A.sfx.shot(); }
    else if (k === 'die') { p.emit(e[1], 0.8, e[2], 10, { color: '#ffffff', speed: 3, up: 3, life: 0.6, size: 0.5 }); if (this.near(e[1], e[2])) A.sfx.hit(); }
    else if (k === 'boom') { p.emit(e[1], 1.5, e[2], 45, { color: '#ffb347', speed: 7, up: 7, life: 0.9, size: 0.9 }); p.emit(e[1], 1.5, e[2], 25, { color: '#8d8579', speed: 5, up: 5, life: 1.1, size: 1.1 }); A.sfx.bonk(); }
    else if (k === 'built') { p.emit(e[1], 2, e[2], 24, { rainbow: true, speed: 4, up: 6, life: 0.8, size: 0.5 }); A.sfx.checkpoint(); }
    else if (k === 'train') { p.emit(e[1], 0.5, e[2], 8, { color: '#9ee6ff', speed: 2, up: 3, life: 0.5, size: 0.4 }); A.sfx.pickup(); }
  }
  near(x, z) { return Math.hypot(x - this.cam.x, z - this.cam.z) < this.cam.h * 1.4; }

  // ---- loop
  update(dt) {
    if (this.over && this.shownOver) { this.updateView(dt); return; }
    if (this.sim) { this.accum = (this.accum || 0) + dt; while (this.accum >= 0.05) { this.accum -= 0.05; stepWar(this.sim, 0.05); } this.syncFromSim(); if (this.sim.over && !this.over) this.finish(this.sim.over, this.sim.timeUp); }
    this.updateView(dt);
  }
  updateView(dt) {
    const t = (this.tt = (this.tt || 0) + dt), k = 1 - Math.exp(-dt * 12);
    // camera keys + smoothing
    const c = this.cam, K = this.keys, sp = c.th * 0.9 * dt;
    if (K) { if (K.has('KeyW') || K.has('ArrowUp')) c.tz -= sp; if (K.has('KeyS') || K.has('ArrowDown')) c.tz += sp; if (K.has('KeyA') || K.has('ArrowLeft')) c.tx -= sp; if (K.has('KeyD') || K.has('ArrowRight')) c.tx += sp; if (K.has('KeyZ')) c.th = Math.max(20, c.th - 40 * dt); if (K.has('KeyX')) c.th = Math.min(120, c.th + 40 * dt); }
    c.tx = clamp(c.tx, -W.HX, W.HX); c.tz = clamp(c.tz, -W.HZ + 10, W.HZ + 14); c.th = clamp(c.th, 20, 120);
    const kc = 1 - Math.exp(-dt * 10); c.x += (c.tx - c.x) * kc; c.z += (c.tz - c.z) * kc; c.h += (c.th - c.h) * kc;
    this.placeCamera();
    // entities
    for (const [id, e] of this.ents) {
      let m = this.meshes.get(id);
      if (!m) { m = e.isU ? unitModel(e.kind, e.team) : buildingModel(e.kind, e.team); m.position.set(e.x, 0, e.z); this.scene.add(m); this.meshes.set(id, m); if (!e.isU) { m.add(m.userData.back, m.userData.bar); } else { const bar = new THREE.Mesh(new THREE.PlaneGeometry(1, 0.14), new THREE.MeshBasicMaterial({ color: '#46d36a', depthTest: false, transparent: true })), back = new THREE.Mesh(new THREE.PlaneGeometry(1.06, 0.22), new THREE.MeshBasicMaterial({ color: '#222', depthTest: false, transparent: true, opacity: 0.7 })); bar.renderOrder = 10; back.renderOrder = 9; m.add(back, bar); m.userData.bar = bar; m.userData.back = back; } }
      if (e.tx !== undefined) { e.x += (e.tx - e.x) * k; e.z += (e.tz - e.z) * k; }
      m.position.x = e.x; m.position.z = e.z;
      const bar = m.userData.bar, back = m.userData.back, frac = clamp(e.hp / e.maxhp, 0, 1), hy = e.isU ? (e.kind === 'knight' ? 2.9 : 2.0) : BK[e.kind].r * 1.5 + 2;
      const showBar = frac < 0.999 || this.sel.has(id) || (!e.isU && e.built < 1);
      bar.visible = back.visible = showBar;
      if (showBar) {
        const bw = e.isU ? 1.2 : 2.6; bar.scale.x = Math.max(0.01, frac * bw); back.scale.x = bw; bar.position.set(-(1 - frac) * bw / 2, hy, 0); back.position.set(0, hy, 0);
        bar.rotation.order = back.rotation.order = 'YXZ'; bar.rotation.x = back.rotation.x = -this.camTilt; bar.material.color.set(e.team ? '#ff6b6b' : frac > 0.5 ? '#46d36a' : '#ffc233'); bar.rotation.y = back.rotation.y = e.isU ? -m.rotation.y : 0;
        if (m.userData.bar.parent === m && !e.isU) { /* building: counter-rotate not needed */ }
      }
      if (e.isU) {
        const ud = m.userData, moving = e.st === 1; m.rotation.y = e.yaw + (e.kind === 'knight' || true ? 0 : 0);
        ud.body.position.y = moving ? Math.abs(Math.sin(t * 11 + id)) * 0.18 : 0;
        ud.arm.rotation.x = e.st === 2 ? Math.sin(t * 16 + id) * 0.8 : e.st === 3 ? Math.sin(t * 9 + id) * 0.9 : e.st === 4 ? Math.sin(t * 12 + id) * 0.7 : 0;
        m.scale.setScalar(1.6);
      } else {
        const b = e.built === undefined ? 1 : e.built; m.scale.set(1, 0.25 + 0.75 * b, 1); m.userData.bar.scale.y = 1 / m.scale.y; m.userData.back.scale.y = 1 / m.scale.y;
        m.position.y = 0;
        if (e.q && e.qk) this.hudSig += '';
      }
    }
    for (const [id, m] of this.meshes) if (!this.ents.has(id)) { this.scene.remove(m); m.traverse((o) => { if (o.material && o.material.transparent) o.material.dispose(); if (o.geometry && o.geometry.type === 'PlaneGeometry') o.geometry.dispose(); }); this.meshes.delete(id); this.sel.delete(id); }
    for (const [id, m] of this.nodeMeshes) { const a = this.nodeAmt.get(id), n = m.userData.n; if (a <= 0) { if (m.visible) { m.visible = false; this.particles.emit(n.x, 1, n.z, 8, { color: '#cdbb98', speed: 3, up: 3, life: 0.5, size: 0.5 }); } } else { m.visible = true; const f = clamp(0.55 + 0.45 * a / n.amt0, 0.55, 1); m.scale.setScalar(f); } }
    // selection rings
    for (const [id, r] of this.rings) if (!this.sel.has(id) || !this.ents.has(id)) { this.scene.remove(r); r.geometry.dispose(); r.material.dispose(); this.rings.delete(id); }
    for (const id of this.sel) { const e = this.ents.get(id); if (!e) continue; let r = this.rings.get(id); if (!r) { const rad = e.isU ? UK[e.kind].r * 1.5 + 0.45 : BK[e.kind].r + 0.5; r = new THREE.Mesh(new THREE.RingGeometry(rad, rad + 0.18, 24), new THREE.MeshBasicMaterial({ color: '#7dffa0', side: THREE.DoubleSide, depthTest: false, transparent: true })); r.rotation.x = -Math.PI / 2; r.renderOrder = 7; this.scene.add(r); this.rings.set(id, r); } r.position.set(e.x, 0.1, e.z); }
    // tracers + ping + ghost
    for (let i = this.tracers.length - 1; i >= 0; i--) { const tr = this.tracers[i]; tr.t -= dt; if (tr.t <= 0) { if (tr.m) { this.scene.remove(tr.m); tr.m.geometry.dispose(); } this.tracers.splice(i, 1); continue; } if (!tr.m) { tr.m = new THREE.Mesh(new THREE.SphereGeometry(0.22, 6, 5), new THREE.MeshBasicMaterial({ color: '#fff2a8' })); this.scene.add(tr.m); } const f = 1 - tr.t / 0.22; tr.m.position.lerpVectors(tr.a, tr.b, f); }
    if (this.pingT > 0) { this.pingT -= dt; this.ping.material.opacity = Math.max(0, this.pingT / 0.5); this.ping.scale.setScalar(1 + (0.5 - this.pingT) * 3); }
    if (this.ghost) { this.ghost.position.set(this.gx, 0, this.gz); }
    this.particles.update(dt);
    if (this.msgT > 0) { this.msgT -= dt; if (this.msgT <= 0) this.$('#war-msg').classList.remove('show'); }
    this.updateHud();
  }
  placeCamera() {
    const c = this.cam, back = c.h * 0.62; this.camTilt = Math.atan2(c.h, back);
    this.camera.position.set(c.x, c.h, c.z + back); this.camera.lookAt(c.x, 0, c.z);
    this.camera.aspect = window.innerWidth / window.innerHeight; this.camera.updateProjectionMatrix();
    this.sun.target.position.set(0, 0, 0);
  }
  snapCamera() { const c = this.cam; c.x = c.tx; c.z = c.tz; c.h = c.th; this.placeCamera(); }
  render() { this.o.renderer.render(this.scene, this.camera); }

  // ---- HUD refresh
  updateHud() {
    const v = this.view, tm = Math.max(0, (this.sim ? this.sim.limit : W.LIMIT) - v.tm), mm = Math.floor(tm / 60), ss = Math.floor(tm % 60);
    this.$('#w-time').textContent = `${mm}:${ss < 10 ? '0' : ''}${ss}`;
    this.$('#w-res').innerHTML = RES_ORDER.map((r, i) => `${RES_ICON[r]}<b>${v.res[i]}</b>`).join('  ');
    const full = v.pop[0] >= v.cap[0]; this.$('#w-pop').innerHTML = `\u{1F465}<b style="${full ? 'color:#ff8a8a' : ''}">${v.pop[0]}/${v.cap[0]}</b>${this.multi ? `  <span style="opacity:.7">team of ${this.nPlayers}</span>` : ''}`;
    // panel
    const sel = [...this.sel].map((id) => this.ents.get(id)).filter(Boolean);
    const b = sel.length === 1 && !sel[0].isU && sel[0].team === 0 ? sel[0] : null;
    const sig = [sel.map((e) => e.id + e.kind + (e.q || 0) + (e.built >= 1 ? 1 : 0)).join(','), this.mode, this.amove, v.res.map((x) => (x >= 400 ? 4 : x >= 200 ? 3 : x >= 100 ? 2 : x >= 50 ? 1 : 0)).join(''), v.pop[0] >= v.cap[0], this.buildKind, this.o.touch].join('|') + (b && b.qk ? b.qk + Math.round((b.qp || 0) * 20) : '');
    if (sig === this.panelSig) return; this.panelSig = sig;
    const P = this.$('#war-panel'); P.innerHTML = '';
    const add = (label, sub, fn, cls = '', cost) => { const el = document.createElement('button'); el.className = 'btn ' + cls; el.innerHTML = label + (sub ? `<small>${sub}</small>` : ''); el.onclick = (ev) => { ev.stopPropagation(); fn(); }; el.addEventListener('pointerdown', (ev) => ev.stopPropagation()); void cost; P.appendChild(el); return el; };
    const info = document.createElement('div'); info.id = 'war-info';
    const vils = sel.filter((e) => e.isU && e.kind === 'vil'), mil = sel.filter((e) => e.isU && e.kind !== 'vil');
    if (b) info.innerHTML = `${BK[b.kind].name}${b.built < 1 ? ' (building...)' : ''}${b.q ? `<br><small>training ${UK[b.qk].name} ${Math.round((b.qp || 0) * 100)}% (+${b.q - 1} waiting)</small>` : ''}`;
    else if (sel.length) info.innerHTML = `${vils.length ? vils.length + ' villager' + (vils.length > 1 ? 's' : '') : ''}${vils.length && mil.length ? ' + ' : ''}${mil.length ? mil.length + ' soldier' + (mil.length > 1 ? 's' : '') : ''}${sel.length && !sel[0].isU ? sel[0].team ? 'Enemy ' + BK[sel[0].kind].name : '' : ''}`;
    else info.innerHTML = this.o.touch ? 'Tap your units to select them' : 'Click your units to select them';
    P.appendChild(info);
    const cost = (c) => Object.entries(c).map(([k, n]) => `${n}${RES_ICON[k]}`).join(' ');
    const can = (c) => Object.entries(c).every(([k, n]) => v.res[RES_ORDER.indexOf(k)] >= n);
    if (b && b.built >= 1) for (const uk of BK[b.kind].train) add(UK[uk].name, cost(UK[uk].cost), () => this.train(b.id, uk), can(UK[uk].cost) && v.pop[0] < v.cap[0] ? '' : 'off');
    if (vils.length) for (const bk of ['house', 'barracks', 'tower']) add('Build ' + BK[bk].name, cost(BK[bk].cost), () => this.startBuild(bk), (this.buildKind === bk ? 'on ' : '') + (can(BK[bk].cost) ? '' : 'off'));
    if (this.buildKind) add('CANCEL', '', () => this.cancelBuild());
    add('ARMY', this.o.touch ? 'select all' : 'Q', () => this.selectAll('mil'), '');
    add('VILLAGERS', this.o.touch ? 'select all' : 'E', () => this.selectAll('vil'), '');
    if (mil.length) add(this.amove ? 'ATTACK-MOVE ON' : 'ATTACK-MOVE', this.o.touch ? 'tap to turn on' : 'A', () => { this.amove = !this.amove; this.panelSig = ''; }, this.amove ? 'on' : '');
    add('HOME', this.o.touch ? '' : 'Space', () => this.goHome());
  }

  // ---- commands
  send(c) {
    if (this.over) return;
    if (this.sim) { const r = cmdWar(this.sim, 0, c); if (r && r.msg) this.toast(r.msg, 1.8); this.syncFromSim(); return r; }
    this.o.send({ t: 'wc', c });
  }
  mine(kindFilter) { return [...this.sel].map((id) => this.ents.get(id)).filter((e) => e && e.isU && e.team === 0 && (!kindFilter || kindFilter(e))); }
  train(bid, kind) {
    if (this.view.pop[0] >= this.view.cap[0]) { this.toast('Population full - build a HOUSE!', 2); A.sfx.warn && A.sfx.warn(); return; }
    this.send({ c: 'train', b: bid, kind }); A.sfx.click();
  }
  startBuild(kind) {
    if (!this.mine((e) => e.kind === 'vil').length) { this.toast('Select villagers first', 1.6); return; }
    this.buildKind = kind; this.panelSig = '';
    if (this.ghost) { this.scene.remove(this.ghost); this.ghost = null; }
    this.ghost = buildingModel(kind, 0); this.ghost.traverse((o) => { if (o.material && o.material.color && !o.material.transparent) { o.material = o.material.clone(); o.material.transparent = true; o.material.opacity = 0.55; } }); this.ghost.userData.bar.visible = this.ghost.userData.back.visible = false;
    this.gx = this.cam.x; this.gz = this.cam.z - 6; this.scene.add(this.ghost); A.sfx.click();
    this.toast(this.o.touch ? 'Tap where to build' : 'Click where to build (right-click cancels)', 2.5);
  }
  cancelBuild() { this.buildKind = null; if (this.ghost) { this.scene.remove(this.ghost); this.ghost = null; } this.panelSig = ''; }
  selectAll(which) {
    const list = [...this.ents.values()].filter((e) => e.isU && e.team === 0 && (which === 'vil' ? e.kind === 'vil' : e.kind !== 'vil'));
    this.sel = new Set(list.map((e) => e.id)); this.panelSig = ''; A.sfx.select && A.sfx.select();
    if (!list.length) this.toast(which === 'vil' ? 'No villagers' : 'No soldiers yet - build a Barracks!', 1.8);
    else if (this.hintI === 2 && which === 'mil') this.hint(3);
  }
  goHome() { const tc = [...this.ents.values()].find((e) => e.team === 0 && e.kind === 'tc'); if (tc) { this.cam.tx = tc.x; this.cam.tz = tc.z - 4; } }
  pingAt(x, z, c) { this.ping.position.set(x, 0.15, z); this.ping.material.color.set(c); this.pingT = 0.5; }

  // pointer -> ground
  ground(cx, cy) {
    const r = this.o.renderer.domElement.getBoundingClientRect(), nx = ((cx - r.left) / r.width) * 2 - 1, ny = -((cy - r.top) / r.height) * 2 + 1;
    const rc = new THREE.Raycaster(); rc.setFromCamera({ x: nx, y: ny }, this.camera); const o = rc.ray.origin, d = rc.ray.direction; if (d.y >= -1e-4) return null;
    const t = -o.y / d.y; return { x: o.x + d.x * t, z: o.z + d.z * t };
  }
  pick(g, pad) {
    let best = null, bd = 1e9;
    for (const e of this.ents.values()) { const r = e.isU ? UK[e.kind].r * 1.5 + pad : BK[e.kind].r + pad * 0.4, d = Math.hypot(e.x - g.x, e.z - g.z); if (d < r && d - r < bd) { bd = d - r; best = e; } }
    if (best) return { e: best };
    for (const n of this.layout.nodes) { if (this.nodeAmt.get(n.id) <= 0) continue; const d = Math.hypot(n.x - g.x, n.z - g.z); if (d < NODE_R[n.kind] + pad && d < bd) { bd = d; best = n; } }
    return best ? { n: best } : null;
  }
  command(g, pad) {
    const hit = this.pick(g, pad), mine = this.mine(), ids = mine.map((e) => e.id); if (!ids.length) return;
    if (hit && hit.e && hit.e.team === 1) { this.send({ c: 'attack', tgt: hit.e.id, ids }); this.pingAt(hit.e.x, hit.e.z, '#ff5555'); A.sfx.click(); return; }
    if (hit && hit.n) { this.send({ c: 'gather', tgt: hit.n.id, ids }); this.pingAt(hit.n.x, hit.n.z, '#ffe066'); if (this.hintI === 0 && mine.some((e) => e.kind === 'vil')) this.hint(1); return; }
    if (hit && hit.e && hit.e.team === 0 && !hit.e.isU && hit.e.built < 1) { this.send({ c: 'build', tgt: hit.e.id, ids }); this.pingAt(hit.e.x, hit.e.z, '#7dffa0'); return; }
    this.send({ c: this.amove && mine.some((e) => e.kind !== 'vil') ? 'amove' : 'move', x: g.x, z: g.z, ids }); this.pingAt(g.x, g.z, this.amove ? '#ff9f1c' : '#7dffa0');
  }
  placeAt(g) {
    const kind = this.buildKind; if (!kind) return;
    const vs = this.mine((e) => e.kind === 'vil'); let ids = vs.map((e) => e.id);
    if (!ids.length) ids = [...this.ents.values()].filter((e) => e.isU && e.team === 0 && e.kind === 'vil').sort((a, b) => Math.hypot(a.x - g.x, a.z - g.z) - Math.hypot(b.x - g.x, b.z - g.z)).slice(0, 2).map((e) => e.id);
    const r = this.send({ c: 'place', kind, x: g.x, z: g.z, ids });
    if (this.sim) { if (r && r.ok) { this.cancelBuild(); if (this.hintI === 1) this.hint(2); } }
    else { this.cancelBuild(); }
  }
  boxSelect(x0, y0, x1, y1, add) {
    const r = this.o.renderer.domElement.getBoundingClientRect(), lo = { x: Math.min(x0, x1), y: Math.min(y0, y1) }, hi = { x: Math.max(x0, x1), y: Math.max(y0, y1) }, out = new Set(add ? this.sel : []);
    const v = new THREE.Vector3(); let any = false;
    for (const e of this.ents.values()) { if (!e.isU || e.team !== 0) continue; v.set(e.x, 0.5, e.z).project(this.camera); const sx = r.left + (v.x * 0.5 + 0.5) * r.width, sy = r.top + (-v.y * 0.5 + 0.5) * r.height; if (sx >= lo.x && sx <= hi.x && sy >= lo.y && sy <= hi.y) { out.add(e.id); any = true; } }
    if (any || !add) this.sel = out; this.panelSig = ''; if (any) A.sfx.select && A.sfx.select();
  }

  // ---- input
  bindInput() {
    const cv = this.o.canvas, L = (t, f, el = window, op) => { el.addEventListener(t, f, op); this.off.push(() => el.removeEventListener(t, f, op)); };
    this.off = []; this.keys = new Set(); const touch = this.o.touch; this.prevTouch = cv.style.touchAction; cv.style.touchAction = 'none';
    const ptrs = new Map(); let drag = null, pinch = null; const box = this.$('#war-box');
    L('contextmenu', (e) => e.preventDefault(), cv);
    L('keydown', (e) => {
      if (this.over || this.menuOpen) return; if (e.target && e.target.tagName === 'INPUT') return;
      this.keys.add(e.code);
      if (e.code === 'KeyQ') this.selectAll('mil'); else if (e.code === 'KeyE') this.selectAll('vil'); else if (e.code === 'Space') { this.goHome(); e.preventDefault(); } else if (e.code === 'KeyA') { this.amove = !this.amove; this.panelSig = ''; }
      else if (e.code === 'KeyH') this.startBuild('house'); else if (e.code === 'KeyB') this.startBuild('barracks'); else if (e.code === 'KeyT') this.startBuild('tower');
      else if (e.code === 'KeyV') { const tc = [...this.ents.values()].find((x) => x.team === 0 && x.kind === 'tc'); if (tc) this.train(tc.id, 'vil'); }
      else if (e.code === 'Digit1') { const bk = [...this.ents.values()].find((x) => x.team === 0 && x.kind === 'barracks' && x.built >= 1); if (bk) this.train(bk.id, 'spear'); }
      else if (e.code === 'Digit2') { const bk = [...this.ents.values()].find((x) => x.team === 0 && x.kind === 'barracks' && x.built >= 1); if (bk) this.train(bk.id, 'arch'); }
      else if (e.code === 'Digit3') { const bk = [...this.ents.values()].find((x) => x.team === 0 && x.kind === 'barracks' && x.built >= 1); if (bk) this.train(bk.id, 'knight'); }
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
    });
    L('keyup', (e) => this.keys.delete(e.code));
    L('blur', () => this.keys.clear());
    L('wheel', (e) => { if (this.menuOpen) return; this.cam.th = clamp(this.cam.th * (1 + Math.sign(e.deltaY) * 0.1), 20, 120); e.preventDefault(); }, cv, { passive: false });
    L('pointermove', (e) => {
      if (this.buildKind) { const g = this.ground(e.clientX, e.clientY); if (g) { this.gx = g.x; this.gz = g.z; if (this.ghost) this.ghost.position.set(g.x, 0, g.z); } }
      const p = ptrs.get(e.pointerId); if (!p) return; p.x = e.clientX; p.y = e.clientY;
      if (ptrs.size === 2) { const [a, b] = [...ptrs.values()], d = Math.hypot(a.x - b.x, a.y - b.y); if (pinch) { this.cam.th = clamp(this.cam.th * (pinch / d), 20, 120); } pinch = d; if (drag) drag.kind = 'none'; return; }
      if (!drag) return; const dx = e.clientX - drag.x0, dy = e.clientY - drag.y0;
      if (drag.kind === 'maybe' && Math.hypot(dx, dy) > 9) drag.kind = drag.touch ? 'pan' : 'box';
      if (drag.kind === 'box') { box.style.display = 'block'; box.style.left = Math.min(drag.x0, e.clientX) + 'px'; box.style.top = Math.min(drag.y0, e.clientY) + 'px'; box.style.width = Math.abs(dx) + 'px'; box.style.height = Math.abs(dy) + 'px'; }
      if (drag.kind === 'pan') { const s = this.cam.h * 0.0021 * (touch ? 1 : 1); this.cam.tx -= (e.clientX - drag.lx) * s * 2.0; this.cam.tz -= (e.clientY - drag.ly) * s * 2.6; drag.lx = e.clientX; drag.ly = e.clientY; }
    }, cv);
    L('pointerdown', (e) => {
      if (this.over || this.menuOpen) return; ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY }); try { cv.setPointerCapture(e.pointerId); } catch { /* ignore */ }
      if (ptrs.size === 2) { pinch = 0; return; }
      const isTouch = e.pointerType === 'touch' || e.pointerType === 'pen';
      if (!isTouch && e.button === 2) { if (this.buildKind) { this.cancelBuild(); return; } const g = this.ground(e.clientX, e.clientY); if (g) this.command(g, 0.5); return; }
      if (!isTouch && e.button === 1) { drag = { kind: 'pan', x0: e.clientX, y0: e.clientY, lx: e.clientX, ly: e.clientY, touch: false }; return; }
      drag = { kind: 'maybe', x0: e.clientX, y0: e.clientY, lx: e.clientX, ly: e.clientY, touch: isTouch, shift: e.shiftKey };
    }, cv);
    const up = (e) => {
      const had = ptrs.delete(e.pointerId); if (!had) return; if (ptrs.size < 2) pinch = null;
      const d = drag; if (!d) return; drag = null; box.style.display = 'none'; if (this.over || this.menuOpen) return;
      if (d.kind === 'box') { this.boxSelect(d.x0, d.y0, e.clientX, e.clientY, d.shift); return; }
      if (d.kind !== 'maybe') return;
      // a tap / click
      const g = this.ground(e.clientX, e.clientY); if (!g) return; const pad = d.touch ? 1.1 : 0.45;
      if (this.buildKind) { this.placeAt(g); return; }
      const hit = this.pick(g, pad);
      if (d.touch) {
        if (hit && hit.e && hit.e.team === 0) { this.sel = new Set([hit.e.id]); this.panelSig = ''; A.sfx.select && A.sfx.select(); return; }
        if (this.sel.size && this.mine().length) { this.command(g, pad); return; }
        if (hit && hit.e) { this.sel = new Set([hit.e.id]); this.panelSig = ''; return; }
        this.sel.clear(); this.panelSig = ''; return;
      }
      if (hit && hit.e) { if (d.shift && hit.e.isU && hit.e.team === 0) this.sel.add(hit.e.id); else this.sel = new Set([hit.e.id]); A.sfx.select && A.sfx.select(); } else if (!hit) this.sel.clear();
      this.panelSig = '';
    };
    L('pointerup', up, cv); L('pointercancel', up, cv);
  }

  // ---- end
  finish(over, timeUp) {
    if (this.over) return; this.over = true; this.shownOver = true; this.cancelBuild(); this.sel.clear();
    const win = over === 1;
    A.duckMusic && A.duckMusic(true); win ? A.sfx.win() : A.sfx.lose();
    const names = this.players.map((p, i) => ({ place: win ? 1 : 2, name: p.name, char: p.char, win, self: p.id === this.localId, tm: win ? 'Victory' : 'Defeated' }));
    const m = Math.floor(this.view.tm / 60), s = Math.floor(this.view.tm % 60);
    setTimeout(() => this.o.onEnd({ win, title: win ? (timeUp ? 'YOU WIN ON POINTS!' : 'VICTORY!') : 'DEFEAT', sub: win ? `The red Town Center fell after ${m}:${s < 10 ? '0' : ''}${s}!` : (timeUp ? "Time's up - the enemy Town Center is healthier." : 'Your Town Center was destroyed. Try again!'), rows: names }), win ? 1500 : 900);
  }
  look() {} toggleCar() {} honk() {} swapRacer() {} swing() {} onFin() {} onBat() {} onShove() {} onCars() {} onEnd() {} removeRemote() {} addRemote() {} sendSnap() {}
  destroy() {
    for (const f of this.off) { try { f(); } catch { /* ignore */ } } try { this.o.canvas.style.touchAction = this.prevTouch || ''; } catch { /* ignore */ }
    A.stopMusic(); if (this.ui) this.ui.remove(); document.body.classList.remove('war-map');
    this.scene.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    this.scene.clear();
  }
}
