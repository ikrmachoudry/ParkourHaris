// MISSION 3 on the client (SNIPE THE TRUCK): draws what the SnipeDirector broadcasts - the thief's black car and the thief himself, the TANKER (the real cargo truck wearing a
// big target-painted tank), the explosion and the burning wreck, the AI police roadblock, the police who arrive and take the thief away, and the cut-scene camera.
import * as THREE from 'three';
import { HeroActor } from './actor.js';
import { buildCarMesh } from './car.js';
import { animateCityMesh, buildTrafficMesh, restoreCar } from './cityvis.js';
import { TRUCK_IDX, ZONES } from './snipe.js';
import * as A from './audio.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const angLerp = (a, b, t) => { let d = b - a; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; return a + d * t; };

// the tank on the cargo truck: silver barrel, red / white target rings on both flanks, the roof and the back (the whole truck is the target)
function buildTank() {
  const g = new THREE.Group(), tg = new THREE.Group(), R = 1.58, L = 5.5, cy = 2.52, cz = -1.5;
  const barrel = new THREE.Mesh(new THREE.CylinderGeometry(R, R, L, 20), new THREE.MeshStandardMaterial({ color: '#cfd3da', roughness: 0.3, metalness: 0.75 }));
  barrel.rotation.x = Math.PI / 2; barrel.position.set(0, cy, cz); g.add(barrel);
  for (const dz of [-L / 2 + 0.2, L / 2 - 0.2, 0]) { const b = new THREE.Mesh(new THREE.CylinderGeometry(R + 0.03, R + 0.03, 0.22, 20), new THREE.MeshStandardMaterial({ color: '#c8201c', roughness: 0.5, metalness: 0.2 })); b.rotation.x = Math.PI / 2; b.position.set(0, cy, cz + dz); g.add(b); }
  const ring = (r, col) => new THREE.MeshBasicMaterial({ color: col, side: THREE.DoubleSide, toneMapped: false });
  const bull = (x, y, z, ry, rx, sc) => { const o = new THREE.Group(); [[1.0, '#ffffff'], [0.82, '#e11d1d'], [0.62, '#ffffff'], [0.43, '#e11d1d'], [0.2, '#ffffff']].forEach(([r, c], i) => { const d = new THREE.Mesh(new THREE.CircleGeometry(r * sc, 28), ring(r, c)); d.position.z = i * 0.012; o.add(d); }); o.position.set(x, y, z); o.rotation.set(rx, ry, 0); tg.add(o); };
  for (const sg of [-1, 1]) { bull(sg * (R + 0.04), cy, cz - 1.55, sg * Math.PI / 2, 0, 1.25); bull(sg * (R + 0.04), cy, cz + 1.55, sg * Math.PI / 2, 0, 1.25); }
  for (const dz of [-1.5, 1.5]) bull(0, cy + R + 0.04, cz + dz, 0, -Math.PI / 2, 1.0);   // on the roof, for the sniper looking down from the hill
  bull(0, cy, cz - L / 2 - 0.02, Math.PI, 0, 1.2);
  g.add(tg); g.userData = { tg, barrel, bands: g.children.filter((o) => o !== barrel && o !== tg) }; return g;
}

export class SnipeScene {
  constructor(race) { this.R = race; this.built = false; this.snap = null; this.first = true; this.t = 0; this.boomAt = -1; this.lastMode = 0; this.shotT = 0; this.look = new THREE.Vector3(63, 1.5, 450); }
  build() {
    const R = this.R;
    this.car = buildCarMesh(22, !!R.isTouch); this.car.rotation.order = 'YXZ';
    this.actor = new HeroActor(0, { role: 'robber', skinTone: '#6b4429', hair: '#0d0a08' });
    this.car.visible = false; this.actor.group.visible = false; R.scene.add(this.car, this.actor.group);
    this.pol = [0, 1].map(() => { const m = buildTrafficMesh(15); m.rotation.order = 'YXZ'; m.visible = false; R.scene.add(m); return { m, x: 0, z: 0, yaw: 0 }; });
    this.ai = [0, 1].map((i) => { const m = buildTrafficMesh(15); m.rotation.order = 'YXZ'; m.visible = false; R.scene.add(m); const z = ZONES[i]; return { m, x: z.x + (i ? 0.7 : -0.7), z: z.z, yaw: Math.PI, i }; });
    this.pur = [0, 1].map(() => { const m = buildTrafficMesh(15); m.rotation.order = 'YXZ'; m.visible = false; R.scene.add(m); return { m, x: 0, z: 0, yaw: 0 }; });
    { // the red THIEF arrow floating over him, so everybody can see who and where he is
      const cv = document.createElement('canvas'); cv.width = 256; cv.height = 256; const g = cv.getContext('2d');
      g.font = '900 78px system-ui,Arial,sans-serif'; g.textAlign = 'center'; g.lineJoin = 'round'; g.lineWidth = 14; g.strokeStyle = '#000'; g.strokeText('THIEF', 128, 76); g.fillStyle = '#ff2a2a'; g.fillText('THIEF', 128, 76);
      g.beginPath(); g.moveTo(128, 250); g.lineTo(52, 124); g.lineTo(104, 124); g.lineTo(104, 100); g.lineTo(152, 100); g.lineTo(152, 124); g.lineTo(204, 124); g.closePath(); g.lineWidth = 12; g.strokeStyle = '#000'; g.stroke(); g.fillStyle = '#ff2a2a'; g.fill();
      const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
      this.mark = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false, toneMapped: false, fog: false })); this.mark.renderOrder = 20; this.mark.visible = false; this.mark.frustumCulled = false; R.scene.add(this.mark);
    }
    this.built = true;
  }
  ground(x, z) { const t = this.R.info.track; return t && t.terrain ? t.terrain(x, z) : 0; }
  get truck() { return this.R.cars[TRUCK_IDX]; }
  // the target-painted tank goes onto the cargo truck for the mission
  armTruck() {
    const c = this.truck; if (!c || this.tank) return; this.tank = buildTank(); c.mesh.add(this.tank);
    c.st.hl = Math.max(c.st.hl || 0, 3.9); c.st.hw = Math.max(c.st.hw || 0, 1.6); c.st.pwr = 2.4;   // a lively engine for the mission: the tanker keeps up with the thief
  }
  apply(m) {
    const first = !this.snap; this.snap = m; this.at = performance.now();
    const k = m.k, mode = k ? k[4] : 0;
    if (mode === 3 && this.lastMode !== 3) this.explode(k);
    this.lastMode = mode; void first;
  }
  // the YELLOW LINE on the road: follows the player's own route (bank -> hill pad / tunnel end) so nobody has to keep looking at the map
  showGuide(lines) {
    this.hideGuide(); const g = new THREE.Group(), W = 0.6;
    for (const ln of lines || []) {
      const P = []; for (let i = 1; i < ln.pts.length; i++) { const a = ln.pts[i - 1], b = ln.pts[i], L = Math.hypot(b[0] - a[0], b[1] - a[1]), n = Math.max(1, Math.ceil(L / 2.5)); for (let k = 0; k < n; k++) P.push([a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n]); }
      if (ln.pts.length) P.push(ln.pts[ln.pts.length - 1]); if (P.length < 2) continue;
      const pos = [], idx = [];
      for (let i = 0; i < P.length; i++) {
        const a = P[Math.max(0, i - 1)], b = P[Math.min(P.length - 1, i + 1)]; let dx = b[0] - a[0], dz = b[1] - a[1]; const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
        const y = this.ground(P[i][0], P[i][1]) + 0.14; pos.push(P[i][0] - dz * W, y, P[i][1] + dx * W, P[i][0] + dz * W, y, P[i][1] - dx * W);
        if (i) { const q = i * 2; idx.push(q - 2, q - 1, q, q - 1, q + 1, q); }
      }
      const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setIndex(idx);
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: ln.color || '#ffd23f', side: THREE.DoubleSide, toneMapped: false, transparent: true, opacity: 0.92, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 }));
      m.renderOrder = 4; m.frustumCulled = false; g.add(m);
    }
    this.guide = g; this.R.scene.add(g);
  }
  hideGuide() { if (!this.guide) return; this.R.scene.remove(this.guide); this.guide.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); }); this.guide = null; }
  clear() {
    this.hideGuide(); this.snap = null; this.first = true; this.lastMode = 0; this.boomAt = -1;
    if (this.built) { if (this.mark) this.mark.visible = false; this.car.visible = false; this.actor.group.visible = false; for (const p of this.pol) p.m.visible = false; for (const p of this.ai) p.m.visible = false; for (const p of this.pur) p.m.visible = false; }
    try { A.sirenMission(0); } catch { /* noop */ }
    const c = this.truck; if (c && this.tank) {
      c.mesh.remove(this.tank); this.tank = null; const st = c.st, hero = c.mesh.userData.hero;
      try { restoreCar(c.mesh); if (hero) hero.repair(); } catch { /* noop */ }
      st.wreck = false; st.burnT = 0; st.wreckT = 0; st.hp = 100; st.vx = st.vz = st.speed = 0; st.parked = true; st.driver = -1; st.pax = -1; st.mcar = false; delete st.pwr;
      if (st.home) { st.x = st.home.x; st.z = st.home.z; st.yaw = st.home.yaw; st.y = this.ground(st.x, st.z); }
    }
  }
  // the thief's car as a solid (you bounce off it) and the two AI police cars at the roadblock
  solids() {
    if (!this.built || !this.snap) return [];
    const out = [];
    if (this.car.visible && this.cx !== undefined) { const o = this._cs || (this._cs = { id: 22, hl: 2.3, hw: 1.0, y: 0, driver: 1, heavy: true, parked: false }), cv = this.snap.c[3] || 0; o.x = this.cx; o.z = this.cz; o.yaw = this.cyaw; o.y = this.car.position.y; o.speed = cv; o.vx = Math.sin(this.cyaw) * cv; o.vz = Math.cos(this.cyaw) * cv; out.push(o); }
    this.ai.forEach((p, i) => { if (!p.m.visible) return; const o = p.st || (p.st = { id: 15, hl: 2.4, hw: 1.0, y: 0, driver: -1, heavy: true, parked: true, speed: 0, vx: 0, vz: 0 }); o.x = p.x; o.z = p.z; o.yaw = p.yaw; o.y = p.m.position.y; out.push(o); void i; });
    return out;
  }
  explode(k) {
    const R = this.R, c = this.truck; this.boomAt = this.t;
    const x = k[0], z = k[1], y = this.ground(x, z) + 1.8, cp = R.camera.position, d = Math.hypot(x - cp.x, z - cp.z), vol = Math.max(0.35, 1 - d / 300), q = R.isTouch ? 0.6 : 1;
    try { A.sfx.boom(vol); } catch { /* noop */ }
    R.shake = Math.max(R.shake || 0, clamp(1.1 - d / 160, 0.1, 1.1));
    for (let i = 0; i < 320 * q; i++) R.fxP.emit(x + (Math.random() - 0.5) * 4, y + Math.random() * 2.5, z + (Math.random() - 0.5) * 8, 1, { color: Math.random() < 0.4 ? '#ffe27a' : Math.random() < 0.6 ? '#ff7a18' : '#ff4a0a', alpha: 1, size: 4.5 + Math.random() * 5, speed: 12, up: 8 + Math.random() * 11, life: 1.4 + Math.random() * 1.6, gravity: -1.6, spread: 4.5 });
    for (let i = 0; i < 120 * q; i++) R.particles.emit(x + (Math.random() - 0.5) * 6, y + 0.5, z + (Math.random() - 0.5) * 8, 1, { color: Math.random() < 0.7 ? '#101010' : '#35322e', alpha: 0.92, size: 3.6, grow: 10, speed: 6, up: 9 + Math.random() * 7, life: 8 + Math.random() * 6, gravity: -0.6, spread: 4 });
    for (let i = 0; i < 90 * q; i++) R.fxP.emit(x, y, z, 1, { color: '#ffb347', alpha: 1, size: 0.25, speed: 14, up: 15, life: 1.8, gravity: 12, spread: 1.6 });   // sparks and burning drops
    if (c) { const st = c.st; st.hp = 0; st.burnT = 0; st.wreck = false; st.driver = -1; }
    if (this.tank) { this.tank.userData.tg.visible = false; this.tank.userData.barrel.material = new THREE.MeshStandardMaterial({ color: '#1a1816', roughness: 0.9, metalness: 0.1 }); for (const b of this.tank.userData.bands) b.material = new THREE.MeshStandardMaterial({ color: '#2a1512', roughness: 0.9 }); }
  }
  get stage() { return this.snap ? this.snap.st : ''; }
  seat(g, x, y, z, yaw, ud, f, r) { const sy = Math.sin(yaw), cy = Math.cos(yaw); g.position.set(x + sy * f - cy * r, y + ud.seatY, z + cy * f + sy * r); g.rotation.set(0, yaw, 0); g.scale.setScalar(ud.seatS || 1); }
  update(dt) {
    this.t += dt; const s = this.snap, R = this.R;
    if (!s || s.st === 'done' || s.st === 'fail') { if (this.built) { if (this.mark) this.mark.visible = false; this.car.visible = false; this.actor.group.visible = false; for (const p of this.pol) p.m.visible = false; for (const p of this.ai) p.m.visible = false; for (const p of this.pur) p.m.visible = false; } try { A.sirenMission(0); } catch { /* noop */ } return; }
    if (!this.built) this.build();
    this.armTruck();
    const age = Math.min(0.3, (performance.now() - this.at) / 1000), f = 1 - Math.exp(-15 * dt);
    const [cx0, cz0, cyaw, cv, drv] = s.c, [px, pz, pyaw, psp, pose, mode] = s.p;
    const cx = cx0 + Math.sin(cyaw) * cv * age, cz = cz0 + Math.cos(cyaw) * cv * age;
    if (this.first) { this.cx = cx; this.cz = cz; this.cyaw = cyaw; this.px = px; this.pz = pz; this.pyaw = pyaw; this.first = false; }
    const yawP = this.cyaw;
    this.cx += (cx - this.cx) * f; this.cz += (cz - this.cz) * f; this.cyaw = angLerp(this.cyaw, cyaw, f); this.px += (px - this.px) * f; this.pz += (pz - this.pz) * f; this.pyaw = angLerp(this.pyaw, pyaw, 1 - Math.exp(-12 * dt));
    // the thief's car
    const car = this.car, ud = car.userData, sy = Math.sin(this.cyaw), cy = Math.cos(this.cyaw), y = this.ground(this.cx, this.cz), pitch = Math.atan2(this.ground(this.cx + sy * 1.4, this.cz + cy * 1.4) - this.ground(this.cx - sy * 1.4, this.cz - cy * 1.4), 2.8);
    car.visible = true; car.position.set(this.cx, y, this.cz); car.rotation.y = this.cyaw;
    const yr = dt > 0 ? angLerp(0, this.cyaw - yawP, 1) / dt : 0;
    animateCityMesh(car, { driver: drv ? 1 : 0, speed: cv, yaw: this.cyaw, steer: clamp(-yr * 2.7 / Math.max(3, cv), -1, 1), pitch, ownd: false }, dt);
    // the thief
    const g = this.actor.group; g.visible = true;
    if (this.mark) { const foot = mode !== 'car' && mode !== 'rear', rr = mode === 'rear' ? this.pol[0] : null, mx = foot ? this.px : rr ? rr.x : this.cx, mz = foot ? this.pz : rr ? rr.z : this.cz, cp = R.camera.position, dist = Math.hypot(mx - cp.x, mz - cp.z), sc = clamp(dist * 0.09, 3.2, 20); this.mark.visible = true; this.mark.scale.set(sc, sc, 1); this.mark.position.set(mx, this.ground(mx, mz) + (foot ? 2.3 : 3.3) + sc * 0.5 + Math.sin(this.t * 4) * sc * 0.08, mz); }
    if (mode === 'car') { this.seat(g, this.cx, y, this.cz, this.cyaw, ud, ud.seatF, ud.seatR); this.actor.update(dt, { seated: true, speed: 0, grounded: true }); }
    else if (mode === 'rear') { const p = this.pol[0], u2 = p.m.userData; this.seat(g, p.x, p.m.position.y, p.z, p.yaw, u2, (u2.seatF || 0) - 1.0, 0); this.actor.update(dt, { seated: true, speed: 0, grounded: true }); }
    else { g.rotation.order = 'YXZ'; g.position.set(this.px, this.ground(this.px, this.pz), this.pz); g.rotation.set(0, this.pyaw, 0); g.scale.setScalar(1); this.actor.update(dt, { seated: false, speed: psp, grounded: true, weapon: undefined, aiming: false, crouch: false, gesture: pose === 'scared' ? 'scared' : undefined }); }
    // the tanker: while the AI or the roll-on script drives it, this scene places the real truck
    const k = s.k, c = this.truck;
    if (c && k) {
      const km = k[4];
      if (this.tank) { const pulse = 1 + 0.035 * Math.sin(this.t * 5.5); this.tank.userData.tg.scale.setScalar(pulse); }
      if (km !== 0) {
        const st = c.st, i = R.rolling ? R.rolling.indexOf(c) : -1; if (i >= 0) R.rolling.splice(i, 1);
        const v = k[3], kx = k[0] + Math.sin(k[2]) * v * age, kz = k[1] + Math.cos(k[2]) * v * age;
        if (this.kx === undefined || km !== this.kmode) { if (this.kx === undefined) { this.kx = kx; this.kz = kz; } }
        this.kmode = km; this.kx += (kx - this.kx) * f; this.kz += (kz - this.kz) * f;
        if (c === R.drive) { /* the driver is still in it (his bail has not been seen yet): leave the physics alone */ }
        else {
          st.x = this.kx; st.z = this.kz; st.yaw = k[2]; st.y = this.ground(st.x, st.z); st.speed = v; st.vx = Math.sin(k[2]) * v; st.vz = Math.cos(k[2]) * v; st.parked = true; st.driver = -1; st.pax = -1; st.mcar = true; st.steer = 0; st.pitch = 0; c.mesh.visible = true;
        }
      }
      // the burning wreck: a column of black smoke and flames for a long time
      if (km === 3 || km === 4) {
        const st = c.st, q = R.isTouch ? 0.5 : 1, since = this.t - this.boomAt;
        if (since < 75) {
          this.fireA = (this.fireA || 0) + dt * (since < 25 ? 60 : 28) * q;
          while (this.fireA >= 1) { this.fireA -= 1; const rx = st.x + (Math.random() - 0.5) * 3.2, rz = st.z + (Math.random() - 0.5) * 5, ry = st.y + 1.2;
            R.fxP.emit(rx, ry, rz, 1, { color: Math.random() < 0.45 ? '#ffd23f' : '#ff6a12', alpha: 0.9, size: since < 25 ? 3.6 : 2.2, speed: 0.8, up: 4.2, life: 0.9, gravity: -2.8, spread: 1.8 });
            R.particles.emit(rx, ry + 0.8, rz, 1, { color: Math.random() < 0.75 ? '#121212' : '#34312e', alpha: 0.88, size: 2.8, grow: 9, speed: 0.6, up: 7, life: 9, gravity: -0.6, spread: 1.4 }); }
        }
      }
    }
    // police and the roadblock cars
    const place = (p, x, z, yaw) => { p.x = x; p.z = z; p.yaw = yaw; p.m.visible = true; p.m.position.set(x, this.ground(x, z), z); p.m.rotation.y = yaw; };
    s.pl.forEach((e, i) => { const p = this.pol[i]; if (!p) return; const pxx = e[0] + Math.sin(e[2]) * e[3] * age, pzz = e[1] + Math.cos(e[2]) * e[3] * age; if (!p.m.visible) place(p, pxx, pzz, e[2]); else { p.x += (pxx - p.x) * f; p.z += (pzz - p.z) * f; place(p, p.x, p.z, angLerp(p.yaw, e[2], f)); } });
    if (!s.pl.length) for (const p of this.pol) p.m.visible = false;
    this.ai.forEach((p) => { if (p.i < (s.n | 0)) p.m.visible = false; else place(p, p.x, p.z, p.yaw); });   // police cars fill the blockers' places that no player has
    // the police who chase the thief from the bank (always behind the tanker)
    (s.q || []).forEach((e, i) => { const p = this.pur[i]; if (!p) return; const pxx = e[0] + Math.sin(e[2]) * e[3] * age, pzz = e[1] + Math.cos(e[2]) * e[3] * age; if (!p.m.visible) place(p, pxx, pzz, e[2]); else { p.x += (pxx - p.x) * f; p.z += (pzz - p.z) * f; place(p, p.x, p.z, angLerp(p.yaw, e[2], f)); } });
    if (!(s.q && s.q.length)) for (const p of this.pur) p.m.visible = false;
    { // sirens: louder the nearer the nearest police car is (heard for the whole chase, and while they arrive for the arrest)
      let dm = 1e9; const cp = R.camera.position; for (const p of [...this.pur, ...this.pol]) if (p.m.visible) dm = Math.min(dm, Math.hypot(p.x - cp.x, p.z - cp.z));
      try { A.sirenMission(dm < 1e8 ? Math.max(0, 1 - dm / 260) : 0); } catch { /* noop */ } }
  }
  // the cut-scene when the police arrive (null = the normal camera)
  shot(dt) {
    const s = this.snap; if (!s || !this.built || s.st !== 'arrest') { this.shotT = 0; return null; }
    this.shotT += dt; const t = s.ar, tx = t < 8 ? (this.pol[0].x + 63) / 2 : t < 12.5 ? this.px : this.pol[0].x, tz = t < 8 ? (this.pol[0].z + 455) / 2 : t < 12.5 ? this.pz : this.pol[0].z;
    const k = 1 - Math.exp(-4 * dt); this.look.x += (tx - this.look.x) * k; this.look.y += (1.4 - this.look.y) * k; this.look.z += (tz - this.look.z) * k;
    const drift = Math.min(1, this.shotT / 17);
    return { px: 78 - drift * 6, py: 5.6, pz: 486 - drift * 3, lx: this.look.x, ly: this.look.y, lz: this.look.z, fov: 56 };   // south of the tunnel, on the beach, looking back at the far mouth (the ridge is behind the thief)
  }
  dispose() {
    if (!this.built) return; const R = this.R;
    this.hideGuide(); try { A.sirenMission(0); } catch { /* noop */ } R.scene.remove(this.car, this.actor.group); if (this.mark) R.scene.remove(this.mark); this.actor.dispose(); for (const p of [...this.pol, ...this.ai, ...this.pur]) R.scene.remove(p.m);
    this.car.traverse((o) => { if (o.isMesh) o.geometry.dispose(); }); this.built = false;
  }
}
