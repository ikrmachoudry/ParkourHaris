// v351 JANG ONLY: breakable window glass. Every window of every building gets a thin glass pane (ONE instanced mesh = one draw call).
// A bullet that crosses a pane, or a blast near it, shatters it: the pane disappears, jagged teeth stay in the frame, glass shards fly and fall
// (a small pool of instanced shards: never more than SHARDS in the air) and a real glass-break sound plays.
import * as THREE from 'three';
import * as A from './audio.js';

const ZERO = new THREE.Matrix4().makeScale(0, 0, 0), TEETH = 7, CELL = 12;
const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _p = new THREE.Vector3(), _s = new THREE.Vector3(), _yq = new THREE.Quaternion(), _up = new THREE.Vector3(0, 1, 0);
const rnd = (a, b) => a + Math.random() * (b - a);

export class Glass {
  // parent: the map group (map-local coordinates); buildings: layout().buildings; quality 0 = phone (fewer shards), 2 = computer
  constructor(parent, buildings, quality, camera, particles) {
    this.cam = camera; this.par = parent; this.fx = particles; this.panes = []; this.grid = new Map(); this.q = quality; this.sndT = 0; this.nBroken = 0;
    for (const b of buildings) {
      if (!b.openings) continue;
      for (const o of b.openings) {
        if (o.k !== 'win') continue;
        const alongX = o.s === 'N' || o.s === 'S', sg = o.s === 'N' || o.s === 'W' ? -1 : 1, f = (alongX ? b.d : b.w) / 2 * sg;
        const p = { i: this.panes.length, alongX, cx: alongX ? b.x + o.c : b.x + f, cz: alongX ? b.z + f : b.z + o.c, y0: b.fy + o.y0, y1: b.fy + o.y1, hw: o.hw, nx: alongX ? 0 : sg, nz: alongX ? sg : 0, fy: b.fy, broken: false };
        this.panes.push(p); const key = Math.floor(p.cx / CELL) + ',' + Math.floor(p.cz / CELL); let a = this.grid.get(key); if (!a) this.grid.set(key, a = []); a.push(p);
      }
    }
    const N = this.panes.length; this.group = new THREE.Group(); this.group.name = 'glass'; parent.add(this.group); if (!N) return;
    const gm = new THREE.MeshStandardMaterial({ color: '#a9d8ea', transparent: true, opacity: 0.2, roughness: 0.06, metalness: 0.15, side: THREE.DoubleSide, depthWrite: false });
    this.panesM = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), gm, N); this.panesM.frustumCulled = false; this.panesM.renderOrder = 2; this.group.add(this.panesM);
    // a jagged tooth: a tall thin triangle that stays in the frame
    const tg = new THREE.BufferGeometry(); tg.setAttribute('position', new THREE.Float32BufferAttribute([-0.5, 0, 0, 0.5, 0, 0, 0.12, 1, 0], 3)); tg.computeVertexNormals();
    const tm = new THREE.MeshStandardMaterial({ color: '#c8e6f2', transparent: true, opacity: 0.55, roughness: 0.05, metalness: 0.25, side: THREE.DoubleSide, depthWrite: false });
    this.teeth = new THREE.InstancedMesh(tg, tm, N * TEETH); this.teeth.frustumCulled = false; this.group.add(this.teeth);
    // shards in the air
    this.S = quality >= 2 ? 240 : 90; this.perPane = quality >= 2 ? 26 : 9;
    const sg2 = new THREE.BufferGeometry(); sg2.setAttribute('position', new THREE.Float32BufferAttribute([-0.5, -0.3, 0, 0.5, -0.2, 0, 0.0, 0.5, 0], 3)); sg2.computeVertexNormals();
    const sm = new THREE.MeshStandardMaterial({ color: '#d6eff8', transparent: true, opacity: 0.8, roughness: 0.04, metalness: 0.3, side: THREE.DoubleSide, flatShading: true });
    this.shardM = new THREE.InstancedMesh(sg2, sm, this.S); this.shardM.frustumCulled = false; this.group.add(this.shardM);
    this.sh = []; for (let i = 0; i < this.S; i++) { this.sh.push({ on: false, x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, rx: 0, ry: 0, rz: 0, wx: 0, wy: 0, wz: 0, s: 0.1, life: 0, fy: 0, rest: false }); this.shardM.setMatrixAt(i, ZERO); } this.shi = 0; this.live = 0;
    this.reset();
  }
  // every pane whole again (a new match)
  reset() {
    if (!this.panesM) return;
    for (const p of this.panes) { p.broken = false; _q.setFromAxisAngle(_up, p.alongX ? 0 : Math.PI / 2); _p.set(p.cx, (p.y0 + p.y1) / 2, p.cz); _s.set(p.hw * 2, p.y1 - p.y0, 1); _m.compose(_p, _q, _s); this.panesM.setMatrixAt(p.i, _m); for (let k = 0; k < TEETH; k++) this.teeth.setMatrixAt(p.i * TEETH + k, ZERO); }
    for (const s of this.sh) { s.on = false; } for (let i = 0; i < this.S; i++) this.shardM.setMatrixAt(i, ZERO);
    this.panesM.instanceMatrix.needsUpdate = true; this.teeth.instanceMatrix.needsUpdate = true; this.shardM.instanceMatrix.needsUpdate = true; this.live = 0; this.nBroken = 0;
  }
  near(x0, z0, x1, z1, pad) {   // the panes in the grid cells of a box
    const out = [], ix0 = Math.floor((Math.min(x0, x1) - pad) / CELL), ix1 = Math.floor((Math.max(x0, x1) + pad) / CELL), iz0 = Math.floor((Math.min(z0, z1) - pad) / CELL), iz1 = Math.floor((Math.max(z0, z1) + pad) / CELL);
    if ((ix1 - ix0 + 1) * (iz1 - iz0 + 1) > 120) return out;
    for (let a = ix0; a <= ix1; a++) for (let b = iz0; b <= iz1; b++) { const l = this.grid.get(a + ',' + b); if (l) for (const p of l) if (!p.broken) out.push(p); }
    return out;
  }
  // a bullet flies from (x0,y0,z0) to (x1,y1,z1) (map-local): every whole pane it crosses shatters
  seg(x0, y0, z0, x1, y1, z1) {
    if (!this.panesM) return 0; let n = 0, dx = x1 - x0, dz = z1 - z0; const dl = Math.hypot(dx, dz) || 1;
    for (const p of this.near(x0, z0, x1, z1, 1.5)) {
      let t, hx, hy, hz;
      if (p.alongX) { const d = z1 - z0; if (Math.abs(d) < 1e-6) continue; t = (p.cz - z0) / d; } else { const d = x1 - x0; if (Math.abs(d) < 1e-6) continue; t = (p.cx - x0) / d; }
      if (t < 0 || t > 1) continue; hx = x0 + (x1 - x0) * t; hy = y0 + (y1 - y0) * t; hz = z0 + (z1 - z0) * t;
      if (Math.abs((p.alongX ? hx - p.cx : hz - p.cz)) > p.hw + 0.04 || hy < p.y0 - 0.04 || hy > p.y1 + 0.04) continue;
      this.shatter(p, hx, hy, hz, dx / dl, dz / dl, 3.5); n++;
    }
    return n;
  }
  // an explosion at (x,y,z) of radius r: the panes close to it shatter (at most 12 at once: cheap)
  blast(x, y, z, r) {
    if (!this.panesM) return 0; let n = 0; const R = r * 1.5;
    for (const p of this.near(x, z, x, z, R)) { if (n >= 12) break; const dx = p.cx - x, dy = (p.y0 + p.y1) / 2 - y, dz = p.cz - z, d = Math.hypot(dx, dy, dz); if (d > R) continue; const l = Math.hypot(dx, dz) || 1; this.shatter(p, p.cx, (p.y0 + p.y1) / 2, p.cz, dx / l, dz / l, 5 + 5 * (1 - d / R)); n++; }
    return n;
  }
  shatter(p, hx, hy, hz, dirx, dirz, spd) {
    p.broken = true; this.nBroken++; this.panesM.setMatrixAt(p.i, ZERO); this.panesM.instanceMatrix.needsUpdate = true;
    // the jagged teeth left in the frame: along the sill (pointing up) and from the lintel (pointing down)
    const h = p.y1 - p.y0; _yq.setFromAxisAngle(_up, p.alongX ? 0 : Math.PI / 2);
    for (let k = 0; k < TEETH; k++) {
      const up = k < 4, u = rnd(-p.hw + 0.1, p.hw - 0.1), w = rnd(0.12, 0.3), ht = up ? rnd(0.06, 0.3) : rnd(0.05, 0.22);
      _p.set(p.alongX ? p.cx + u : p.cx, up ? p.y0 : p.y1, p.alongX ? p.cz : p.cz + u); _e.set(0, 0, up ? rnd(-0.25, 0.25) : Math.PI + rnd(-0.25, 0.25)); _q.setFromEuler(_e); _q.premultiply(_yq); _s.set(w, ht, 1); _m.compose(_p, _q, _s); this.teeth.setMatrixAt(p.i * TEETH + k, _m);
    }
    this.teeth.instanceMatrix.needsUpdate = true;
    // the shards: most of them burst from the hit point along the bullet / away from the blast
    const nS = this.perPane;
    for (let k = 0; k < nS; k++) {
      const s = this.sh[this.shi]; this.shi = (this.shi + 1) % this.S; if (!s.on) this.live++; s.on = true; s.rest = false;
      const near = Math.random() < 0.6, u = near ? THREE.MathUtils.clamp((p.alongX ? hx - p.cx : hz - p.cz) + rnd(-0.4, 0.4), -p.hw, p.hw) : rnd(-p.hw, p.hw), yy = near ? THREE.MathUtils.clamp(hy + rnd(-0.35, 0.35), p.y0, p.y1) : rnd(p.y0, p.y1);
      s.x = p.alongX ? p.cx + u : p.cx; s.z = p.alongX ? p.cz : p.cz + u; s.y = yy; s.fy = p.fy + 0.03;
      const sp = spd * rnd(0.4, 1.2), side = rnd(-1, 1); s.vx = dirx * sp + (p.alongX ? side * 1.4 : 0) + rnd(-0.6, 0.6); s.vz = dirz * sp + (p.alongX ? 0 : side * 1.4) + rnd(-0.6, 0.6); s.vy = rnd(0.2, 2.4);
      s.rx = rnd(0, 6.28); s.ry = rnd(0, 6.28); s.rz = rnd(0, 6.28); s.wx = rnd(-14, 14); s.wy = rnd(-14, 14); s.wz = rnd(-14, 14); s.s = rnd(0.05, 0.2); s.life = rnd(3.5, 6);
    }
    if (this.fx && this.fx.emit && this.q >= 1) this.fx.emit(this.par.position.x + hx, hy, this.par.position.z + hz, this.q >= 2 ? 8 : 3, { color: '#dff3ff', speed: 2.2, up: 1.2, life: 0.45, size: 0.14, gravity: 3 });
    // the sound (one clap per 80 ms however many panes go at once), quieter with distance
    const now = performance.now();
    if (now - this.sndT > 80 && this.cam) { const d = Math.hypot(this.cam.position.x - (this.par.position.x + hx), this.cam.position.z - (this.par.position.z + hz)), v = 1 - d / 90; if (v > 0.05) { this.sndT = now; A.sfx.glassBreak(Math.min(1, v * 1.2)); } }
  }
  update(dt) {
    if (!this.live) return; dt = Math.min(dt, 0.05); let any = 0;
    for (let i = 0; i < this.S; i++) {
      const s = this.sh[i]; if (!s.on) continue; s.life -= dt;
      if (s.life <= 0) { s.on = false; this.live--; this.shardM.setMatrixAt(i, ZERO); continue; }
      if (!s.rest) {
        s.vy -= 9.8 * dt; s.x += s.vx * dt; s.y += s.vy * dt; s.z += s.vz * dt; s.rx += s.wx * dt; s.ry += s.wy * dt; s.rz += s.wz * dt;
        if (s.y <= s.fy) { s.y = s.fy; if (s.vy < -1.2) { s.vy = -s.vy * 0.25; s.vx *= 0.5; s.vz *= 0.5; s.wx *= 0.4; s.wy *= 0.4; s.wz *= 0.4; } else { s.rest = true; s.rx = -Math.PI / 2 + rnd(-0.3, 0.3); s.rz = 0; } }
      }
      const k = s.life < 0.8 ? s.life / 0.8 : 1; _p.set(s.x, s.y, s.z); _e.set(s.rx, s.ry, s.rz); _q.setFromEuler(_e); _s.set(s.s * k, s.s * k, 1); _m.compose(_p, _q, _s); this.shardM.setMatrixAt(i, _m); any = 1;
    }
    this.shardM.instanceMatrix.needsUpdate = true; if (!any) this.live = 0;
  }
}
