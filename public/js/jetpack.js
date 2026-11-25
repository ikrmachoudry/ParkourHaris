// v637 JETPACK (Jang / Gojra): an item found on the ROOFS. Press J (laptop) or tap JET (phone) on the ground / on a roof: it lifts you ~12 m and carries you forward at ~11 m/s for 5 s of fuel,
// enough for a short roof-to-roof flight (PUBG-style). On the ground it refills in 25 s. When the fuel ends a soft cushion keeps the landing from hurting (no fall damage).
// The body plays Haris's Flying.fbx (made in-place, anim/fly.json) while it burns; the pack on the back, flames, smoke and the roar (audio.js jetSound) are all made in code.
import * as THREE from 'three';
import * as A from './audio.js';
import { hasProp, propModel } from './props.js';

const _v = new THREE.Vector3();
export const JET = { FUEL: 6, RECHARGE: 25, MIN: 1, CLIMB: 6.2, FWD: 11, MAXH: 12, SINK: 5.5, DRAIN_UP: 1.7, DRAIN_FLY: 0.75 };   // v638 (PUBG Mobile's jetpack: lift-off drains the energy fast, it refills only when you stand on the ground, you can hover): climbing burns 1.7 / s, flying or hovering 0.75 / s of the 6

const MAT = { body: new THREE.MeshLambertMaterial({ color: 0x3b4048 }), band: new THREE.MeshLambertMaterial({ color: 0xd9732b }), steel: new THREE.MeshLambertMaterial({ color: 0x9aa3ad }),
  fire: new THREE.MeshBasicMaterial({ color: 0x2f8cff, transparent: true, opacity: 0.6, depthWrite: false, side: THREE.DoubleSide }),
  mid: new THREE.MeshBasicMaterial({ color: 0x8fe3ff, transparent: true, opacity: 0.85, depthWrite: false, side: THREE.DoubleSide }),
  core: new THREE.MeshBasicMaterial({ color: 0xf2fdff, transparent: true, opacity: 1, depthWrite: false, side: THREE.DoubleSide }) };
let GLOW = null;   // one soft round glow (a 64 px canvas, shared) that sits on the nozzle like the bright blue-white jet of the PUBG jetpack
const glowMat = () => GLOW || (GLOW = (() => { const cv = document.createElement('canvas'); cv.width = cv.height = 64; const c = cv.getContext('2d'), g = c.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(235,252,255,1)'); g.addColorStop(0.3, 'rgba(120,205,255,.75)'); g.addColorStop(1, 'rgba(40,120,255,0)'); c.fillStyle = g; c.fillRect(0, 0, 64, 64); const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }); })());
const flameGroup = (len, rad) => { const f = new THREE.Group(), mk = (r, l, m, y) => { const c = new THREE.Mesh(new THREE.ConeGeometry(r, l, 10, 1, true), m); c.rotation.x = Math.PI; c.position.y = -l / 2 + y; f.add(c); };
  mk(rad, len, MAT.fire, 0); mk(rad * 0.62, len * 0.72, MAT.mid, 0); mk(rad * 0.3, len * 0.42, MAT.core, 0);
  const gl = new THREE.Sprite(glowMat()); gl.scale.setScalar(rad * 5.5); gl.position.y = 0.03; f.add(gl); f.visible = false; return f; };

/* the pack: two tanks with an orange band, a steel plate between them and two nozzles pointing down (also used for the item lying on the floor). flames = true adds the two flame cones. */
export function jetModel(flames) {
  if (hasProp('jetpack')) return jetReal(flames);
  const g = new THREE.Group(), flame = [];
  const tank = (x) => { const t = new THREE.Mesh(new THREE.CylinderGeometry(0.095, 0.095, 0.5, 10), MAT.body); t.position.set(x, 0, 0); g.add(t);
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.07, 10), MAT.band); band.position.set(x, 0.1, 0); g.add(band);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.095, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), MAT.steel); cap.position.set(x, 0.25, 0); g.add(cap);
    const nz = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.11, 0.14, 10), MAT.steel); nz.position.set(x, -0.32, 0); g.add(nz);
    if (flames) { const f = new THREE.Group(); f.position.set(x, -0.39, 0); const o = new THREE.Mesh(new THREE.ConeGeometry(0.085, 0.55, 8, 1, true), MAT.fire), c = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.34, 8, 1, true), MAT.core); o.rotation.x = Math.PI; c.rotation.x = Math.PI; o.position.y = -0.275; c.position.y = -0.17; f.add(o); f.add(c); f.visible = false; g.add(f); flame.push(f); } };
  tank(-0.12); tank(0.12);
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.34, 0.06), MAT.steel); plate.position.set(0, 0.02, -0.07); g.add(plate);
  g.userData.flame = flame; return g;
}

/* Haris's own jetpack model (models/props/jetpack.glb: 2.8k triangles, ONE material, 512 px texture, 160 KB; every copy shares the geometry + the texture): a single rocket tube with a bell nozzle. Standing upright: the tube runs up / down the Y axis with the nozzle at the BOTTOM, its two little feet face the back. 0.78 m long. */
function jetReal(flames) {
  const g = new THREE.Group(), flame = [], w = new THREE.Group(), m = propModel('jetpack'); m.position.set(-0.16, 0, -0.54);   // the tube's own axis (y = 0, z = 0.54) and middle (x = 0.16)
  w.add(m); w.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(new THREE.Vector3(0, -1, 0), new THREE.Vector3(0, 0, -1), new THREE.Vector3(1, 0, 0))); w.scale.setScalar(0.24); g.add(w);
  if (flames) { const f = flameGroup(0.75, 0.12); f.position.set(0, -0.4, 0); g.add(f); flame.push(f); }
  g.userData.flame = flame; g.userData.real = 1; return g;
}

/* v642: what the OTHER players see: a teammate / opponent who carries a jetpack has it on his back (1), and while he burns (2) the blue-white flame, the smoke and the flying pose show on everybody's screen. Pure visuals (no sound), the same pack model and flame as your own. */
export class RemoteJet {
  constructor(R) { this.R = R; this.pack = null; this.packG = null; this.mount = null; this.mountFor = null; this.t = Math.random() * 9; this.puff = 0; }
  restore() { if (this.pack && this.pack.parent) this.pack.parent.remove(this.pack); this.packG = null; if (this.mountFor) { this.mountFor.visible = true; if (this.mount && this.mount.parent) this.mount.parent.remove(this.mount); this.mount = null; this.mountFor = null; } }
  update(dt, m, st) {
    this.t += dt; const g = m.group; if (!g) return;
    if (st <= 0) { this.restore(); return; }
    if (this.pack && !this.pack.userData.real && hasProp('jetpack')) { if (this.pack.parent) this.pack.parent.remove(this.pack); this.pack = null; this.packG = null; }
    if (!this.pack) this.pack = jetModel(true);
    const hp = m.pack, bone = hp && hp.parent; let host = g;
    if (bone) { if (this.mountFor !== hp) { if (this.mount && this.mount.parent) this.mount.parent.remove(this.mount); if (this.mountFor) this.mountFor.visible = true; const mt = new THREE.Group(); mt.position.copy(hp.position); mt.quaternion.copy(hp.quaternion); mt.scale.copy(hp.scale); bone.add(mt); this.mount = mt; this.mountFor = hp; } host = this.mount; hp.visible = false; }
    if (this.packG !== host || this.pack.parent !== host) { host.add(this.pack); this.packG = host; if (host === g) { this.pack.position.set(0, 1.2, -0.34); this.pack.rotation.set(0.18, 0, 0); } else { this.pack.position.set(0, 0.03, 0.09); this.pack.rotation.set(0, 0, 0); } }
    this.pack.visible = true; const on = st === 2;
    for (const f of this.pack.userData.flame) { f.visible = on; if (on) { const s = 0.85 + Math.sin(this.t * 63 + f.position.x * 40) * 0.18 + Math.random() * 0.15; f.scale.set(0.9 + Math.random() * 0.2, s, 0.9 + Math.random() * 0.2); } }
    if (on && this.R.particles && this.R.camera) { this.puff -= dt; if (this.puff <= 0) { this.puff = 0.09; const f0 = this.pack.userData.flame[0]; if (f0) { f0.getWorldPosition(_v); const cp = this.R.camera.position; if ((_v.x - cp.x) ** 2 + (_v.z - cp.z) ** 2 < 3600) { this.R.particles.emit(_v.x, _v.y - 0.1, _v.z, 1, { color: '#9fdcff', speed: 0.5, up: -4.5, gravity: 0, life: 0.2, size: 0.3, spread: 0.06 }); this.R.particles.emit(_v.x, _v.y - 0.2, _v.z, 1, { color: '#e6edf5', speed: 0.7, up: -1.2, gravity: -0.8, life: 1.0, size: 0.5, grow: 3.0, alpha: 0.3, spread: 0.1 }); } } } }
  }
}

export class Jet {
  constructor(cs) {
    this.cs = cs; this.vy = 0; this.hx = 0; this.hz = 0; this.on = false; this.fuel = JET.FUEL; this.y0 = 0; this.glide = false; this.thr = 0; this.pack = null; this.packG = null; this.mount = null; this.mountFor = null; this.puff = 0; this.beep = 0; this.t = 0; this.hud = null; this.btn = null;
  }
  get R() { return this.cs.R; }
  has() { return this.cs.count('jet') > 0; }
  /* can it be lit right now? (why not -> a short message) */
  blocked(b) { const cs = this.cs, R = this.R; return !cs.on || cs.dropping || cs.down || cs.hp <= 0 || cs.over || R.over || R.drive || R.hang || R.zipR || R.ladR || b.swim > 0.3 || b.stun > 0; }
  canLight(b) {
    const cs = this.cs;
    if (this.blocked(b) || (cs.inv && cs.inv.isOpen())) return 'NOT NOW';
    if (!this.has()) return 'NO JETPACK  -  find one on a ROOF';
    if (this.fuel < JET.MIN) return 'JETPACK RECHARGING  ' + Math.round(this.fuel / JET.FUEL * 100) + '%';
    if (!b.grounded && !this.glide) return 'LIGHT THE JETPACK ON THE GROUND';
    return '';
  }
  toggle() {
    const b = this.R.me.body; if (this.on) { this.off(b); return; }
    if (this.fuel < JET.MIN && this.has() && this.cs.count('jfuel') > 0 && b.grounded) { try { this.cs.useItem('jfuel'); } catch (e) { /* noop */ } }   /* v642: the tank is empty and you carry a JET FUEL can: J refills it first, then lights the jet */
    const why = this.canLight(b); if (why) { if (this.has() && why !== 'NOT NOW') this.R.toast && this.R.toast(why, 1.8); return; }
    this.on = true; this.glide = false; this.y0 = b.y; b.grounded = false; b.ground = null; b.noSnap = 0.3; b.jumping = false; b.vy = Math.max(b.vy, 3.5); this.vy = b.vy; this.hx = b.vx; this.hz = b.vz; this.R.crouch = false; this.R.prone = false;
  }
  off(b) { if (!this.on) return; this.on = false; if (b && !b.grounded) this.glide = true; }
  /* once per frame, before the physics steps */
  frame(dt, inp, b) {
    this.t += dt; const cs = this.cs;
    if (this.on) {
      this.fuel -= dt * (this.vy > 1.5 ? JET.DRAIN_UP : JET.DRAIN_FLY);   // (this.vy = the smoothed climb speed from pre())
      if (this.fuel <= 0 || this.blocked(b) || !this.has()) { this.fuel = Math.max(0, this.fuel); this.off(b); }
    } else if (b.grounded) { this.glide = false; if (this.fuel < JET.FUEL) this.fuel = Math.min(JET.FUEL, this.fuel + dt * JET.FUEL / JET.RECHARGE); }
    if (this.glide && (b.grounded || b.swim > 0.3 || cs.dropping || cs.down || cs.hp <= 0 || cs.deadT > 0)) this.glide = false;
    void inp;
  }
  /* inside every physics sub-step, before stepBody: thrust, forward flight, the soft cushion */
  pre(b, sdt, inp) {
    if (this.on) {
      b.grounded = false; b.ground = null; b.noSnap = Math.max(b.noSnap || 0, 0.12); b.jumping = false;
      const top = this.y0 + JET.MAXH; let tvy = JET.CLIMB; if (b.y > top - 2.2) tvy = Math.max(0, (top - b.y) / 2.2 * JET.CLIMB * 0.6);
      this.vy += (tvy - this.vy) * Math.min(1, sdt * 5); if (b.y >= top && this.vy > 0) this.vy = 0; b.vy = this.vy;   // (own smoothed speeds: the physics step pulls gravity / air drag on b.vy, b.vx: they are put back every sub-step)
      const k = Math.min(1, sdt * 2.4), ml = Math.hypot(inp.mx, inp.mz), tx = ml > 0.05 ? inp.mx / Math.max(1, ml) * JET.FWD : 0, tz = ml > 0.05 ? inp.mz / Math.max(1, ml) * JET.FWD : 0;
      this.hx += (tx - this.hx) * k; this.hz += (tz - this.hz) * k; b.vx = this.hx; b.vz = this.hz;
    } else if (this.glide && !b.grounded && b.vy < -JET.SINK) b.vy = -JET.SINK;   // the cushion: you cannot fall faster than this once the jet has been on, so the landing does not hurt
  }
  /* once per frame after the physics: the pack on the back, flames, smoke, the roar, the fuel bar */
  post(dt, b, g, inp, m) {
    const R = this.R, cs = this.cs, show = this.has() && cs.on && !cs.dropping;
    this.ensureHud(); this.tick(dt, show);
    if (show && g) {
      if (this.pack && !this.pack.userData.real && hasProp('jetpack')) { if (this.pack.parent) this.pack.parent.remove(this.pack); this.pack = null; this.packG = null; }   // the real model arrived after the stand-in was built
      if (!this.pack) { this.pack = jetModel(true); this.pack.scale.setScalar(1); }
      const hp = m && m.pack, bone = hp && hp.parent; let host = g;
      if (bone) { if (this.mountFor !== hp) { if (this.mount && this.mount.parent) this.mount.parent.remove(this.mount); if (this.mountFor) this.mountFor.visible = true; const mt = new THREE.Group(); mt.position.copy(hp.position); mt.quaternion.copy(hp.quaternion); mt.scale.copy(hp.scale); bone.add(mt); this.mount = mt; this.mountFor = hp; } host = this.mount; hp.visible = false; }   // the jetpack rides on the CHEST bone, exactly where the soldier's tactical bag sits (the bag is hidden while he carries it): it sits on the back and follows the body when he lies flat to fly
      if (this.packG !== host || this.pack.parent !== host) { host.add(this.pack); this.packG = host; if (host === g) { this.pack.position.set(0, 1.2, -0.34); this.pack.rotation.set(0.18, 0, 0); } else { this.pack.position.set(0, 0.03, 0.09); this.pack.rotation.set(0, 0, 0); } }
      this.pack.visible = !(cs.skinHide); const fl = this.pack.userData.flame;
      for (const f of fl) { f.visible = this.on; if (this.on) { const s = 0.85 + Math.sin(this.t * 63 + f.position.x * 40) * 0.18 + Math.random() * 0.15; f.scale.set(0.9 + Math.random() * 0.2, s * (0.7 + 0.3 * this.thr), 0.9 + Math.random() * 0.2); } }
    } else { if (this.pack && this.pack.parent) { this.pack.parent.remove(this.pack); this.packG = null; } if (this.mountFor) { this.mountFor.visible = true; if (this.mount && this.mount.parent) this.mount.parent.remove(this.mount); this.mount = null; this.mountFor = null; } }
    const want = this.on ? (b.vy > 1 ? 1 : 0.7) : 0; this.thr += (want - this.thr) * Math.min(1, dt * 6);
    if (this.on) {
      A.jetSound(this.thr, 1);
      if (this.fuel < 1.3) { this.beep -= dt; if (this.beep <= 0) { this.beep = 0.55; A.jetBeep(); } }
      this.puff -= dt; if (this.puff <= 0 && R.particles) {
        this.puff = 0.045; let px, py, pz; const fl0 = this.pack && this.pack.userData.flame && this.pack.userData.flame[0]; if (fl0) { fl0.getWorldPosition(_v); px = _v.x; py = _v.y - 0.1; pz = _v.z; } else { px = b.x - Math.sin(b.yaw) * 0.34; pz = b.z - Math.cos(b.yaw) * 0.34; py = b.y + 0.7; }
        { const x = px, z = pz;
          R.particles.emit(x, py, z, 1, { color: '#9fdcff', speed: 0.5, up: -4.5, gravity: 0, life: 0.2, size: 0.3, spread: 0.06 });
          R.particles.emit(x, py - 0.1, z, 1, { color: '#e6edf5', speed: 0.7, up: -1.2, gravity: -0.8, life: 1.2, size: 0.5, grow: 3.0, alpha: 0.3, spread: 0.1 }); }
      }
    } else { this.thr = 0; A.jetSound(0); }
    void inp;
  }
  ensureHud() {
    if (this.hud) return; const touch = !!this.R.isTouch;
    const h = document.createElement('div'); h.id = 'c-jetfuel'; h.style.cssText = 'position:fixed;left:10px;top:36vh;z-index:44;display:none;flex-direction:column;align-items:center;gap:3px;pointer-events:none;font:800 10px system-ui,sans-serif;color:#fff;text-shadow:0 1px 2px #000';
    h.innerHTML = '<span>JET</span><div style="position:relative;width:11px;height:96px;border:2px solid #fffd;border-radius:6px;background:rgba(0,0,0,.45);overflow:hidden"><i style="position:absolute;left:0;right:0;bottom:0;height:100%;background:#ff9a2e;transition:background .2s"></i></div>' + (touch ? '' : '<span style="font-size:11px">J</span>');
    document.body.appendChild(h); this.hud = h; this.bar = h.querySelector('i');
    if (touch) {
      const b = document.createElement('button'); b.id = 'c-jetbtn'; b.type = 'button'; b.setAttribute('aria-label', 'Jetpack'); b.innerHTML = '<b>JET</b>';
      b.style.cssText = 'position:fixed;right:23vw;top:43vh;z-index:46;display:none;align-items:center;justify-content:center;width:62px;height:62px;border-radius:50%;border:3px solid #ffb347;background:rgba(60,40,20,.78);color:#fff;font:900 14px system-ui,sans-serif;touch-action:none;-webkit-tap-highlight-color:transparent';
      b.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); this.toggle(); }); b.addEventListener('contextmenu', (e) => e.preventDefault());
      document.body.appendChild(b); this.btn = b;
    }
  }
  tick(dt, show) {
    void dt; const vis = show && !this.R.over; const d = vis ? 'flex' : 'none';
    if (this.hud.style.display !== d) this.hud.style.display = d; if (this.btn && this.btn.style.display !== d) this.btn.style.display = d;
    if (!vis) return; const f = Math.max(0, Math.min(1, this.fuel / JET.FUEL)); this.bar.style.height = (f * 100).toFixed(0) + '%'; this.bar.style.background = this.on ? (this.fuel < 1.3 ? '#ff4040' : '#5ec8ff') : f >= JET.MIN / JET.FUEL ? '#5ee07a' : '#7d8794';
    if (this.btn) { this.btn.style.borderColor = this.on ? '#6dff8a' : f >= JET.MIN / JET.FUEL ? '#ffb347' : '#6b6f75'; this.btn.style.background = this.on ? 'rgba(20,90,45,.85)' : 'rgba(60,40,20,.78)'; }
  }
  reset() { if (this.mountFor) { this.mountFor.visible = true; } if (this.mount && this.mount.parent) this.mount.parent.remove(this.mount); this.mount = null; this.mountFor = null; this.on = false; this.glide = false; this.fuel = JET.FUEL; A.jetSound(0); if (this.pack && this.pack.parent) this.pack.parent.remove(this.pack); this.packG = null; if (this.hud) this.hud.style.display = 'none'; if (this.btn) this.btn.style.display = 'none'; }
}
