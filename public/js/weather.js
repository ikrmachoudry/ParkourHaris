// Weather for Haris City: a wandering wind (gusts), leaves that blow along the ground, and a weather that changes every 10 - 13 minutes (clear, drizzle, rain, storm).
// The rain schedule is a pure function of the wall clock, so every player in a room has the same weather at the same moment.
import * as THREE from 'three';
import * as A from './audio.js';
import { GT } from './gta.js';

const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const hash = (n) => { const s = Math.sin(n * 12.9898 + 78.233) * 43758.5453; return s - Math.floor(s); };

// THE WEATHER CHANGES EVERY 10 - 13 MINUTES of real time: clear sky, drizzle, rain or a storm. It is a pure function of the wall clock (segment lengths and kinds come from a hash),
// so every player in a room has the same weather at the same moment; the change fades in over 45 seconds. Two segments in a row are never the same.
const LEVELS = [0, 0.4, 0.75, 1];   // clear, drizzle, rain, storm
const EPOCH = Date.UTC(2026, 0, 1), minMs = 60000;
let seg = null;   // the segment that is running now: { i, start, end, kind, prev }
function segFrom(i, start, prev) { const len = (10 + 3 * hash(i * 1.37 + 0.5)) * minMs, h = hash(i * 2.11 + 9.3); let kind = h < 0.34 ? 0 : h < 0.55 ? 1 : h < 0.8 ? 2 : 3; if (kind === prev) kind = (kind + 1 + Math.floor(hash(i + 4.4) * 2)) % 4; return { i, start, end: start + len, kind, prev }; }
function segAt(now) {
  if (!seg || now < seg.start) { seg = segFrom(0, EPOCH, 0); }   // (re)start from the anchor; it walks forward from there
  while (now >= seg.end) seg = segFrom(seg.i + 1, seg.end, seg.kind);
  return seg;
}
export function rainAt(now = Date.now()) {
  const sg = segAt(now), t = (now - sg.start) / 1000, k = smooth(0, 45, t);
  return LEVELS[sg.prev] + (LEVELS[sg.kind] - LEVELS[sg.prev]) * k;
}

const LEAF_COLORS = ['#c9a227', '#b5651d', '#8a3b12', '#6b8e23', '#9a6b2f', '#d2691e', '#7a8b2a', '#a14a1a'];

export class Weather {
  // ctx: { scene, race, mobile }
  constructor({ scene, race, mobile }) {
    this.scene = scene; this.race = race; this.mobile = !!mobile;
    this.rain = 0; this.rainTarget = 0; this.force = null; this.t = 0;
    this.wx = 0; this.wz = 0; this.gust = 0; this.windSpeed = 0;
    this.uTime = { value: 0 }; this.uWind = { value: new THREE.Vector2() };   // shared with the grass shader (see gtaworld.js)
    this.windUniforms = race.world && race.world.windU ? [race.world.windU] : [];
    // ---- rain: streaks that fall inside a box that follows the camera; all motion is done in the vertex shader
    const nDrops = this.mobile ? 520 : 1500, pos = new Float32Array(nDrops * 6), seed = new Float32Array(nDrops * 6), tip = new Float32Array(nDrops * 2);
    for (let i = 0; i < nDrops; i++) { const sx = Math.random(), sy = Math.random(), sz = Math.random(); for (let e = 0; e < 2; e++) { const j = (i * 2 + e) * 3; seed[j] = sx; seed[j + 1] = sy; seed[j + 2] = sz; tip[i * 2 + e] = e; } }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setAttribute('seed', new THREE.BufferAttribute(seed, 3)); g.setAttribute('tip', new THREE.BufferAttribute(tip, 1));
    this.rainU = { time: { value: 0 }, cam: { value: new THREE.Vector3() }, vel: { value: new THREE.Vector3(0, -17, 0) }, inten: { value: 0 }, box: { value: new THREE.Vector3(34, 22, 34) } };
    this.rainMesh = new THREE.LineSegments(g, new THREE.ShaderMaterial({
      uniforms: this.rainU, transparent: true, depthWrite: false, fog: false,
      vertexShader: `uniform float time; uniform vec3 cam; uniform vec3 vel; uniform float inten; uniform vec3 box; attribute vec3 seed; attribute float tip; varying float a;
        void main(){ vec3 q = mod(seed*box + vel*time - cam, box); vec3 p = cam + q - box*0.5; p -= normalize(vel)*0.95*tip;
          float vis = step(fract(seed.x*37.7 + seed.z*13.1 + seed.y*5.3), inten); float edge = smoothstep(0.0,0.12,q.y/box.y) * smoothstep(1.0,0.88,q.y/box.y);
          a = vis*edge*(1.0-0.6*tip)*0.85; gl_Position = projectionMatrix*viewMatrix*vec4(p,1.0); }`,
      fragmentShader: 'varying float a; void main(){ gl_FragColor = vec4(0.78,0.86,0.98,a); }',
    }));
    this.rainMesh.frustumCulled = false; this.rainMesh.renderOrder = 9; this.rainMesh.visible = false; scene.add(this.rainMesh);
    // ---- leaves on the ground
    const n = this.mobile ? 90 : 220; this.n = n;
    const lg = new THREE.CircleGeometry(0.13, 6); lg.scale(1, 0.62, 1);
    this.leaves = new THREE.InstancedMesh(lg, new THREE.MeshLambertMaterial({ side: THREE.DoubleSide }), n); this.leaves.frustumCulled = false;
    this.L = []; const col = new THREE.Color();
    for (let i = 0; i < n; i++) {
      this.L.push({ x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, yaw: Math.random() * 6.28, tx: 0, tz: 0, spin: 0, f: 0.4 + Math.random() * 0.6, thr: 0.4 + Math.random() * 1.6, sc: 0.8 + Math.random() * 0.9, air: false, ph: Math.random() * 6.28, ok: false });
      col.set(LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)]); col.offsetHSL(0, 0, (Math.random() - 0.5) * 0.08); this.leaves.setColorAt(i, col);
    }
    scene.add(this.leaves); this.dummy = new THREE.Object3D();
  }
  // wind at a place: a slowly turning direction, a steady breeze and moving gusts
  windAt(x, z, t) {
    const ang = 0.7 + 0.9 * Math.sin(t * 0.013) + 0.45 * Math.sin(t * 0.031 + 1.2), base = 0.7 + 0.5 * Math.sin(t * 0.021 + 0.5);
    const gu = Math.max(0, Math.sin(t * 0.37 + x * 0.045 + z * 0.03)) * Math.max(0, Math.sin(t * 0.09 + 1.3 + x * 0.01)), sp = base + gu * 5.2;
    return { x: Math.cos(ang) * sp, z: Math.sin(ang) * sp, gust: gu, sp };
  }
  // height of the surface a leaf lies on: asphalt on the avenues, pavement / lawn (+0.26) elsewhere
  ground(x, z) {
    const w = this.race.world, t = w && w.terrain ? w.terrain(x, z) : 0;
    if (t < 0.6 && Math.abs(x) < 250 && Math.abs(z) < 250) { for (const g of GT.GRID) if (Math.abs(x - g) < GT.HW - 0.1 || Math.abs(z - g) < GT.HW - 0.1) return t + 0.1; return t + 0.26; }
    return t + 0.04;
  }
  respawn(l, cam, far) {
    const a = Math.random() * 6.28, r = far ? 18 + Math.random() * 16 : 3 + Math.random() * 32;
    l.x = cam.x + Math.cos(a) * r; l.z = cam.z + Math.sin(a) * r; l.y = this.ground(l.x, l.z) + 0.02; l.vx = l.vz = l.vy = 0; l.air = false; l.ok = true;
  }
  update(dt, cam) {
    dt = Math.min(dt, 0.05); this.t += dt;
    const t = this.t, wd = this.windAt(cam.x, cam.z, t); this.wx = wd.x; this.wz = wd.z; this.gust = wd.gust; this.windSpeed = wd.sp;
    this.uTime.value = t; this.uWind.value.set(wd.x, wd.z);
    // the rain level follows the clock schedule, glides toward it
    this.rainTarget = this.force !== null ? this.force : rainAt();
    this.rain += (this.rainTarget - this.rain) * Math.min(1, dt * 1.2);
    const r = this.rain < 0.01 ? 0 : this.rain;
    this.rainMesh.visible = r > 0; if (r > 0) { const u = this.rainU; u.time.value = t; u.cam.value.copy(cam); u.vel.value.set(wd.x * 0.9, -17 - r * 4, wd.z * 0.9); u.inten.value = Math.min(1, r * 1.15); }
    A.rainSet(r);
    // ---- leaves
    const wet = 1 - 0.75 * Math.min(1, r * 1.5), dm = this.dummy;
    for (let i = 0; i < this.n; i++) {
      const l = this.L[i]; if (!l.ok || (l.x - cam.x) ** 2 + (l.z - cam.z) ** 2 > 40 * 40) this.respawn(l, cam, l.ok);
      const w = this.windAt(l.x, l.z, t), gnd = this.ground(l.x, l.z) + 0.02, sp = w.sp * wet;
      if (!l.air) {   // lying on the ground: a gust pushes it along, and a strong one lifts it into the air
        if (sp > l.thr) { l.vx += (w.x * wet * l.f * 0.55 - l.vx) * Math.min(1, dt * 3); l.vz += (w.z * wet * l.f * 0.55 - l.vz) * Math.min(1, dt * 3); l.spin += (Math.sin(t * 3 + l.ph) * 2.2 - l.spin) * dt * 4;
          if (w.gust * wet > 0.45 && Math.random() < dt * 1.6 * w.gust) { l.air = true; l.vy = 1.2 + Math.random() * 2.4 * w.gust; } }
        else { l.vx *= Math.max(0, 1 - dt * 5); l.vz *= Math.max(0, 1 - dt * 5); l.spin *= Math.max(0, 1 - dt * 5); }
        l.tx *= Math.max(0, 1 - dt * 8); l.tz *= Math.max(0, 1 - dt * 8); l.y = gnd;
      } else {        // flying: swept along by the wind with a flutter, falls slowly back down
        l.vx += (w.x * wet * (0.5 + l.f * 0.6) + Math.sin(t * 2.3 + l.ph) * 0.9 - l.vx) * Math.min(1, dt * 1.6); l.vz += (w.z * wet * (0.5 + l.f * 0.6) + Math.cos(t * 2.1 + l.ph) * 0.9 - l.vz) * Math.min(1, dt * 1.6);
        l.vy += (-0.9 + Math.sin(t * 4 + l.ph) * 0.5 - l.vy) * Math.min(1, dt * 1.2) - 1.2 * dt; l.spin = Math.sin(t * 2 + l.ph) * 3; l.tx = Math.sin(t * 4.1 + l.ph) * 0.9; l.tz = Math.cos(t * 3.3 + l.ph) * 0.9;
        l.y += l.vy * dt; if (l.y <= gnd) { l.y = gnd; l.air = false; l.vy = 0; }
      }
      l.x += l.vx * dt; l.z += l.vz * dt; l.yaw += l.spin * dt;
      dm.position.set(l.x, l.y, l.z); dm.rotation.order = 'YXZ'; dm.rotation.set(l.tx, l.yaw, l.tz); dm.rotateX(-Math.PI / 2); dm.scale.setScalar(l.sc);
      dm.updateMatrix(); this.leaves.setMatrixAt(i, dm.matrix);
    }
    this.leaves.instanceMatrix.needsUpdate = true;
    for (const u of this.windUniforms) { u.time.value = t; u.wind.value.set(wd.x, wd.z); }
  }
  dispose() { A.rainSet(0); this.scene.remove(this.rainMesh, this.leaves); this.rainMesh.geometry.dispose(); this.leaves.geometry.dispose(); }
}
