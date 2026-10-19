// MISSION 2 on the client: draws what the ThiefDirector broadcasts - the thief's black car (with a boot that really opens), the thief himself
// (on foot, driving, or sitting in the back of the police car) and the cut-scene camera. Everything is smoothed between the 10 Hz snapshots.
import * as THREE from 'three';
import { HeroActor } from './actor.js';
import { buildCarMesh } from './car.js';
import { animateCityMesh } from './cityvis.js';
import { buildRoute } from './thief.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const angLerp = (a, b, t) => { let d = b - a; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return a + d * t; };

export class ThiefScene {
  constructor(race) { this.R = race; this.built = false; this.snap = null; this.first = true; this.lastLid = -1; this.look = new THREE.Vector3(30, 1.4, 70); this.shotT = 0; }
  build() {
    const R = this.R;
    this.car = buildCarMesh(22, !!R.isTouch); this.car.rotation.order = 'YXZ';
    this.actor = new HeroActor(0, { role: 'robber', skinTone: '#6b4429', hair: '#0d0a08' });
    this.car.visible = false; this.actor.group.visible = false;
    R.scene.add(this.car, this.actor.group); this.built = true;
  }
  ground(x, z) { const t = this.R.info.track; return t && t.terrain ? t.terrain(x, z) : 0; }
  apply(m) { this.snap = m; this.at = performance.now(); }
  clear() { this.snap = null; this.first = true; this.ri = undefined; if (this.built) { this.car.visible = false; this.actor.group.visible = false; } }
  get stage() { return this.snap ? this.snap.st : ''; }
  get exposed() { return !!this.snap && this.snap.st === 'ambush' && this.snap.ex > 0.5; }
  // seat positions (same maths as Race.seatModel) for the thief
  seat(g, x, y, z, yaw, ud, f, r) {
    const sy = Math.sin(yaw), cy = Math.cos(yaw);
    g.position.set(x + sy * f - cy * r, y + ud.seatY, z + cy * f + sy * r); g.rotation.set(0, yaw, 0); g.scale.setScalar(ud.seatS || 1);
  }
  update(dt) {
    const s = this.snap;
    if (!s || s.st === 'done' || s.st === 'fail') { if (this.built) { this.car.visible = false; this.actor.group.visible = false; } return; }
    if (!this.built) this.build();
    const [cx, cz, cyaw, cv, drv] = s.c, [px, pz, pyaw, psp, pose, mode] = s.p, f = 1 - Math.exp(-15 * dt);
    if (this.first) { this.cx = cx; this.cz = cz; this.cyaw = cyaw; this.px = px; this.pz = pz; this.pyaw = pyaw; this.first = false; }
    const yawP = this.cyaw;
    this.cx += (cx - this.cx) * f; this.cz += (cz - this.cz) * f; this.cyaw = angLerp(this.cyaw, cyaw, f);
    this.px += (px - this.px) * f; this.pz += (pz - this.pz) * f; this.pyaw = angLerp(this.pyaw, pyaw, 1 - Math.exp(-12 * dt));
    // the car
    const car = this.car, ud = car.userData, sy = Math.sin(this.cyaw), cy = Math.cos(this.cyaw);
    const y = this.ground(this.cx, this.cz), pitch = Math.atan2(this.ground(this.cx + sy * 1.4, this.cz + cy * 1.4) - this.ground(this.cx - sy * 1.4, this.cz - cy * 1.4), 2.8);
    car.visible = true; car.position.set(this.cx, y, this.cz); car.rotation.y = this.cyaw;
    const yr = dt > 0 ? angLerp(0, this.cyaw - yawP, 1) / dt : 0;
    animateCityMesh(car, { driver: drv ? 1 : 0,   /* never -1: keeps the full-detail model (the boot is only on that one) */ speed: cv, yaw: this.cyaw, steer: clamp(-yr * 2.7 / Math.max(3, cv), -1, 1), pitch, ownd: false }, dt);
    if (ud.hero && ud.hero.setLid && ud.hero.trunk) { const k = Math.round(s.tr * 50) / 50; if (k !== this.lastLid) { this.lastLid = k; ud.hero.setLid(ud.hero.trunk, k); } }
    // the thief
    const g = this.actor.group; g.visible = true;
    if (mode === 'car') {
      this.seat(g, this.cx, y, this.cz, this.cyaw, ud, ud.seatF, ud.seatR);
      this.actor.update(dt, { seated: true, speed: 0, grounded: true });
    } else if (mode === 'rear') {
      const c = this.R.cars[s.veh];
      if (c) { const u2 = c.mesh.userData; this.seat(g, c.st.x, c.st.y, c.st.z, c.st.yaw, u2, (u2.seatF || 0) - 1.0, 0); }
      this.actor.update(dt, { seated: true, speed: 0, grounded: true });
    } else {
      g.rotation.order = 'YXZ'; g.position.set(this.px, this.ground(this.px, this.pz), this.pz); g.rotation.set(0, this.pyaw, 0); g.scale.setScalar(1);
      if (pose === 'down') { g.rotation.set(-Math.PI / 2, this.pyaw, 0); g.position.y += 0.22; this.actor.update(dt, { seated: false, speed: 0, grounded: true }); }   // shot dead: lies flat
      else this.actor.update(dt, { seated: false, speed: psp, grounded: true, weapon: s.st === 'ambush' || s.st === 'summit' || pose === 'aim' ? 'pistol' : undefined, aiming: pose === 'aim', crouch: pose === 'duck', gesture: pose === 'aim' ? 'aim' : pose === 'scared' ? 'scared' : undefined });
    }
  }
  // the red line on the maps: the rest of his road, from where he is to the summit (points about every 12 m)
  routeAhead() {
    const s = this.snap; if (!s || s.st === 'done' || s.st === 'fail') return null;
    const R = this.R_ || (this.R_ = buildRoute()), x = this.cx, z = this.cz; if (x === undefined) return null;
    let best = 1e9, bi = this.ri || 0; for (let i = Math.max(0, (this.ri || 0) - 30); i < Math.min(R.n, (this.ri || 0) + 400); i++) { const d = (R.pts[i].x - x) ** 2 + (R.pts[i].z - z) ** 2; if (d < best) { best = d; bi = i; } }
    if (this.ri === undefined || best < 40 * 40) this.ri = bi;
    const out = []; for (let i = this.ri; i < R.n; i += 8) out.push([R.pts[i].x, R.pts[i].z]); out.push([R.pts[R.n - 1].x, R.pts[R.n - 1].z]); return out;
  }
  // the cut-scene at the bank (the first seconds): a fixed camera on the avenue looking at the thief, his car and the two police cars
  shot(dt) {
    const s = this.snap; if (!s || !this.built) return null;
    this.shotT += dt;
    const foot = s.p[5] === 'foot', tx = foot ? this.px : this.cx, tz = foot ? this.pz : this.cz;
    const k = 1 - Math.exp(-5 * dt); this.look.x += (tx - this.look.x) * k; this.look.y += (1.5 - this.look.y) * k; this.look.z += (tz - this.look.z) * k;
    const drift = Math.min(1, this.shotT / 9);
    return { px: 26 + drift * 6, py: 4.6 - drift * 0.8, pz: 54.6 + drift * 1.2, lx: this.look.x, ly: this.look.y, lz: this.look.z, fov: 62 };
  }
  resetShot() { this.shotT = 0; this.look.set(30, 1.4, 72); }
  dispose() {
    if (!this.built) return;
    this.R.scene.remove(this.car, this.actor.group); this.actor.dispose();
    this.car.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); } });
  }
}
