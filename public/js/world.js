// World: geometry factories + colliders + hazards. No DOM access here, so it can run headless in Node for tests.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { flagTexture } from './flags.js';

export const P = {
  R: 0.42, H: 1.55, STEP: 0.34, EDGE: 0.28, G: 34, RUN: 9.4, JUMP: 12.2,
  ACC: 70, AIR: 22, DEC: 95, AIR_DEC: 9, ICE_ACC: 11, ICE_DEC: 5.5, TERM: -50, SNAP: 0.5,
};
const TERRAIN_SURF = { active: true, ice: false, conv: null, bounce: 0, boost: 0, dx: 0, dy: 0, dz: 0, moving: false, name: 'terrain' };
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const _e = new THREE.Euler(), _q = new THREE.Quaternion(), _m = new THREE.Matrix4();
const _p = new THREE.Vector3(), _s = new THREE.Vector3(), _c = new THREE.Color();

// Merges lots of static meshes into ONE draw call (vertex colours) -> no lag.
export class Batch {
  constructor() { this.list = []; }
  add(geo, x, y, z, color, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1, ord = 'XYZ') {
    _e.set(rx, ry, rz, ord); _q.setFromEuler(_e); _p.set(x, y, z); _s.set(sx, sy, sz); _m.compose(_p, _q, _s);
    const g = geo.index ? geo.toNonIndexed() : geo.clone();
    if (g.attributes.uv) g.deleteAttribute('uv');
    g.applyMatrix4(_m);
    const n = g.attributes.position.count;
    const arr = new Float32Array(n * 3);
    _c.set(color);
    for (let i = 0; i < n; i++) { arr[i * 3] = _c.r; arr[i * 3 + 1] = _c.g; arr[i * 3 + 2] = _c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    this.list.push(g);
  }
  addGeo(g) { // already positioned (world space) geometry with a color attribute
    if (g.index) g = g.toNonIndexed();
    if (g.attributes.uv) g.deleteAttribute('uv');
    this.list.push(g);
  }
  build(material) {
    if (!this.list.length) return null;
    const g = mergeGeometries(this.list, false);
    this.list.length = 0;
    return new THREE.Mesh(g, material);
  }
}

const lerp = (a, b, t) => a + (b - a) * t;

export class World {
  constructor(theme, headless = false) {
    this.theme = theme;
    this.headless = headless;
    this.group = new THREE.Group();
    this.solids = []; this.ramps = []; this.discs = []; this.hazards = []; this.updaters = [];
    this.checkpoints = []; this.zones = []; this.pools = []; this.winds = []; this.swings = [];
    this.main = new Batch(); this.glow = new Batch();
    this.waterY = -5; this.killY = -9; this.terrain = null; // optional smooth ground: terrain(x,z) -> height
    this.geoCache = new Map(); this.matCache = new Map();
    this.colorIdx = 0;
    this.arrowTexture = null; // injected by the client (needs DOM)
    this.time = 0;
    this.hitOut = { nx: 0, nz: 1, pow: 10 };
    this.onEvent = null; // (name, data) -> for sounds / particles
  }

  // ---------------------------------------------------------------- helpers
  rbox(w, h, d, r) {
    const rr = Math.max(0.02, Math.min(r, w / 2 - 0.01, h / 2 - 0.01, d / 2 - 0.01));
    const k = `${w.toFixed(2)}|${h.toFixed(2)}|${d.toFixed(2)}|${rr.toFixed(2)}`;
    let g = this.geoCache.get(k);
    if (!g) { g = Math.min(w, h, d) < 0.35 ? new THREE.BoxGeometry(w, h, d) : new RoundedBoxGeometry(w, h, d, 2, rr); this.geoCache.set(k, g); }
    return g;
  }
  mat(color, o = {}) {
    const k = color + JSON.stringify(o);
    let m = this.matCache.get(k);
    if (!m) {
      m = new THREE.MeshStandardMaterial({ color, roughness: o.rough ?? 0.38, metalness: o.metal ?? 0.02, emissive: o.emissive ?? 0x000000, emissiveIntensity: o.ei ?? 1 });
      this.matCache.set(k, m);
    }
    return m;
  }
  pick() {
    const pal = this.theme.plat;
    return pal[this.colorIdx++ % pal.length];
  }
  addSolid(x0, y0, z0, x1, y1, z1, o = {}) {
    const s = {
      x0, y0, z0, x1, y1, z1, active: true, ice: !!o.ice, conv: o.conv || null, bounce: o.bounce || 0, boost: o.boost || 0,
      dx: 0, dy: 0, dz: 0, moving: false, name: o.name || '',
    };
    this.solids.push(s);
    return s;
  }
  add(mesh, cast = true, receive = true) {
    mesh.castShadow = cast; mesh.receiveShadow = receive;
    this.group.add(mesh);
    return mesh;
  }
  emit(name, data) { if (this.onEvent) this.onEvent(name, data); }

  // ---------------------------------------------------------------- static platforms
  platform(cx, top, cz, w, d, o = {}) {
    const h = o.h ?? 1.6;
    const color = o.color ?? this.pick();
    const s = this.addSolid(cx - w / 2, top - h, cz - d / 2, cx + w / 2, top, cz + d / 2, o);
    if (!this.headless) {
      this.main.add(this.rbox(w, h, d, 0.3), cx, top - h / 2, cz, color);
      if (o.pad !== false && w > 2.4 && d > 2.4) {
        const padC = o.padColor ?? (o.ice ? this.theme.icePad : this.theme.pad);
        this.main.add(this.rbox(w - 1.1, 0.12, d - 1.1, 0.05), cx, top + 0.0, cz, padC);
      }
      if (this.theme.edgeGlow) {
        const gc = this.theme.edgeGlow;
        this.glow.add(this.rbox(w + 0.04, 0.12, 0.12, 0.03), cx, top - 0.08, cz + d / 2, gc);
        this.glow.add(this.rbox(w + 0.04, 0.12, 0.12, 0.03), cx, top - 0.08, cz - d / 2, gc);
        this.glow.add(this.rbox(0.12, 0.12, d + 0.04, 0.03), cx + w / 2, top - 0.08, cz, gc);
        this.glow.add(this.rbox(0.12, 0.12, d + 0.04, 0.03), cx - w / 2, top - 0.08, cz, gc);
      }
    }
    return s;
  }

  // Circular static/rotating platform.  omega=0 -> static (merged); bounce>0 -> mushroom bouncer
  disc(cx, top, cz, r, o = {}) {
    const omega = o.omega ?? 0, th = o.h ?? 1.4;
    const d = { cx, cz, top, r, th, omega, phase: o.phase ?? 0, bounce: o.bounce || 0, push: o.push || null, ice: !!o.ice, theta: o.phase ?? 0, dTheta: 0, kind: 'disc', squash: 0, first: true };
    this.discs.push(d);
    if (this.headless) return d;
    if (o.fan) { // a big horizontal FAN hovering over the water: jump on it and the wind throws you forward
      const g = new THREE.Group(); g.position.set(cx, top, cz);
      const ringG = new THREE.Mesh(new THREE.TorusGeometry(r, 0.32, 10, 40), this.mat(o.color ?? '#ff3d68', { rough: 0.3 })); ringG.rotation.x = Math.PI / 2; g.add(ringG);
      const disk = new THREE.Mesh(new THREE.CylinderGeometry(r - 0.2, r - 0.2, 0.18, 40), this.mat('#dff6ff', { rough: 0.5 })); disk.position.y = -0.12; g.add(disk);
      const blades = new THREE.Group();
      for (let i = 0; i < 4; i++) { const bl = new THREE.Mesh(this.rbox(r * 0.95, 0.12, 1.1, 0.04), this.mat(i % 2 ? '#ffffff' : '#ffd23f')); bl.position.set(r * 0.5, 0.08, 0); const pv = new THREE.Group(); pv.rotation.y = i * Math.PI / 2; pv.add(bl); blades.add(pv); }
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.55, 0.5, 14), this.mat('#ffffff')); hub.position.y = 0.1; g.add(hub, blades);
      this.add(g);
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.7, 14, 10), this.mat(this.theme.hub)); pole.position.set(cx, top - 8, cz); this.group.add(pole);
      const sm = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.45, depthWrite: false, toneMapped: false });
      const st = []; for (let i = 0; i < 6; i++) { const m = new THREE.Mesh(new THREE.BoxGeometry(0.07, 1.6, 0.07), sm); this.group.add(m); st.push({ m, k: i / 6, a: i * 1.9 }); }
      d.mesh = g;
      this.updaters.push((t, dt) => { blades.rotation.y = -t * 14; d.squash = Math.max(0, d.squash - dt * 4); for (const q of st) { const u = (q.k + t * 0.7) % 1; q.m.position.set(cx + Math.cos(q.a) * r * 0.6 * (0.3 + u), top + 0.3 + u * 5, cz + Math.sin(q.a) * r * 0.6 * (0.3 + u)); sm.opacity = 0.4; } });
      return d;
    }
    if (o.bounce) {
      const g = new THREE.Group(); g.position.set(cx, top, cz);
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.55, r * 0.7, 1.4, 20), this.mat(o.stem ?? '#fff3d6'));
      stem.position.y = -0.7;
      const cap = new THREE.Mesh(new THREE.SphereGeometry(r, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2), this.mat(o.color ?? '#ff3b6b', { rough: 0.25 }));
      cap.scale.y = 0.45; cap.position.y = -0.05;
      g.add(stem, cap);
      for (let i = 0; i < 6; i++) {
        const dot = new THREE.Mesh(new THREE.SphereGeometry(0.26, 10, 8), this.mat('#ffffff'));
        const a = i / 6 * Math.PI * 2; dot.position.set(Math.cos(a) * r * 0.62, 0.34 * (1 - 0.3), Math.sin(a) * r * 0.62); dot.scale.y = 0.4;
        g.add(dot);
      }
      this.add(g);
      d.mesh = g;
      this.updaters.push((t, dt) => { d.squash = Math.max(0, d.squash - dt * 4); const k = 1 - Math.sin(d.squash * Math.PI) * 0.35 * d.squash; g.scale.set(1 + (1 - k) * 0.5, k, 1 + (1 - k) * 0.5); });
      return d;
    }
    const col = o.color ?? this.pick();
    const geo = new THREE.CylinderGeometry(r, r, th, 40);
    if (omega === 0) {
      this.main.add(geo, cx, top - th / 2, cz, col);
      this.main.add(new THREE.CylinderGeometry(r - 0.5, r - 0.5, 0.12, 40), cx, top, cz, o.padColor ?? this.theme.pad);
      if (this.theme.edgeGlow) this.glow.add(new THREE.TorusGeometry(r, 0.07, 6, 48), cx, top - 0.1, cz, this.theme.edgeGlow, Math.PI / 2);
    } else {
      const g = new THREE.Group(); g.position.set(cx, top, cz);
      const body = new THREE.Mesh(geo, this.mat(col)); body.position.y = -th / 2;
      const pad = new THREE.Mesh(new THREE.CylinderGeometry(r - 0.5, r - 0.5, 0.12, 40), this.mat(o.padColor ?? this.theme.pad));
      g.add(body, pad);
      // spokes so you can SEE the rotation
      for (let i = 0; i < 4; i++) {
        const sp = new THREE.Mesh(this.rbox(r * 1.6, 0.14, 0.6, 0.05), this.mat(this.theme.hazard2));
        sp.position.y = 0.06; sp.rotation.y = i * Math.PI / 4; g.add(sp);
      }
      if (this.theme.edgeGlow) {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.08, 6, 48), new THREE.MeshBasicMaterial({ color: this.theme.edgeGlow, toneMapped: false }));
        ring.rotation.x = Math.PI / 2; ring.position.y = -0.1; g.add(ring);
      }
      this.add(g);
      d.mesh = g;
      this.updaters.push((t) => { g.rotation.y = d.theta; });
    }
    return d;
  }

  // ---------------------------------------------------------------- ramps (wedge shaped, solid to the ground)
  ramp(cx, zNear, yNear, zFar, yFar, w, o = {}) {
    const r = { x0: cx - w / 2, x1: cx + w / 2, zN: zNear, zF: zFar, yN: yNear, yF: yFar, conv: o.conv || null, ice: !!o.ice, kind: 'ramp' };
    this.ramps.push(r);
    if (this.headless) return r;
    const yb = Math.min(yNear, yFar) - 1.6, col = o.color ?? this.pick();
    const V = (x, y, z) => [x, y, z];
    const A = V(r.x0, yNear, zNear), B = V(r.x1, yNear, zNear), C = V(r.x1, yFar, zFar), D = V(r.x0, yFar, zFar);
    const E = V(r.x0, yb, zNear), F = V(r.x1, yb, zNear), G = V(r.x1, yb, zFar), H = V(r.x0, yb, zFar);
    const pos = [];
    const quad = (a, b, c, d) => { pos.push(...a, ...b, ...c, ...a, ...c, ...d); };
    quad(A, D, C, B);       // top (up)
    quad(A, B, F, E);       // near face
    quad(C, D, H, G);       // far face
    quad(D, A, E, H);       // left
    quad(B, C, G, F);       // right
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.computeVertexNormals();
    const n = pos.length / 3, arr = new Float32Array(n * 3); _c.set(col);
    for (let i = 0; i < n; i++) { arr[i * 3] = _c.r; arr[i * 3 + 1] = _c.g; arr[i * 3 + 2] = _c.b; }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    this.main.addGeo(g);
    // pad stripe on the slope
    const dz = zNear - zFar, dy = yFar - yNear, len = Math.hypot(dz, dy), ang = Math.atan2(dy, dz);
    const mx = (zNear + zFar) / 2, my = (yNear + yFar) / 2;
    const nx = -Math.sin(ang), ny = Math.cos(ang); // slope normal (z, y components)
    this.main.add(this.rbox(w - 1.6, 0.1, len - 0.6, 0.04), cx, my + ny * 0.02, mx + nx * 0.02 * 0, o.padColor ?? (o.ice ? this.theme.icePad : this.theme.pad), ang, 0, 0);
    return r;
  }

  // ---------------------------------------------------------------- moving platforms / doors / pistons
  // fn(t) -> [ox, oy, oz] offset from the base centre
  mover(cx, top, cz, w, d, fn, o = {}) {
    const h = o.h ?? 1.5;
    const s = this.addSolid(cx - w / 2, top - h, cz - d / 2, cx + w / 2, top, cz + d / 2, o);
    s.moving = true; s.first = true;
    let mesh = null;
    if (!this.headless) {
      mesh = new THREE.Mesh(this.rbox(w, h, d, 0.28), this.mat(o.color ?? this.pick(), { rough: 0.3 }));
      if (o.pad !== false) {
        const pad = new THREE.Mesh(this.rbox(w - 1, 0.12, d - 1, 0.05), this.mat(o.padColor ?? this.theme.pad));
        pad.position.y = h / 2; mesh.add(pad);
      }
      if (o.stripes) {
        const st = new THREE.Mesh(this.rbox(w + 0.02, 0.4, d + 0.02, 0.05), this.mat(this.theme.hazard));
        st.position.y = 0; mesh.add(st);
      }
      this.add(mesh);
    }
    let lx = 0, ly = 0, lz = 0;
    const apply = (t) => {
      const [ox, oy, oz] = fn(t);
      s.x0 = cx - w / 2 + ox; s.x1 = cx + w / 2 + ox;
      s.y0 = top - h + oy; s.y1 = top + oy;
      s.z0 = cz - d / 2 + oz; s.z1 = cz + d / 2 + oz;
      if (s.first) { lx = ox; ly = oy; lz = oz; s.first = false; }
      s.dx = ox - lx; s.dy = oy - ly; s.dz = oz - lz; lx = ox; ly = oy; lz = oz;
      if (mesh) mesh.position.set(cx + ox, top - h / 2 + oy, cz + oz);
    };
    apply(0);
    this.updaters.push((t) => apply(t));
    return s;
  }

  // vanishing tile (deterministic from level time -> identical for every player)
  tile(cx, top, cz, w, d, o = {}) {
    const period = o.period ?? 4.8, solidT = o.solidT ?? 2.4, warn = o.warn ?? 0.8, off = o.off ?? 0;
    const s = this.addSolid(cx - w / 2, top - 1.0, cz - d / 2, cx + w / 2, top, cz + d / 2, o);
    let mesh = null, mat = null;
    if (!this.headless) {
      mat = new THREE.MeshStandardMaterial({ color: o.color ?? this.pick(), roughness: 0.3, emissive: 0x000000 });
      mesh = new THREE.Mesh(this.rbox(w, 1.0, d, 0.22), mat);
      mesh.position.set(cx, top - 0.5, cz);
      this.add(mesh);
    }
    const base = new THREE.Color(o.color ?? '#ffffff');
    this.updaters.push((t) => {
      const ph = (((t + off) % period) + period) % period;
      if (ph < solidT) { s.active = true; if (mesh) { mesh.visible = true; mesh.position.x = cx; mat.emissive.setRGB(0, 0, 0); } }
      else if (ph < solidT + warn) { s.active = true; if (mesh) { mesh.visible = true; mesh.position.x = cx + Math.sin(t * 70) * 0.07; mat.emissive.setRGB(0.55, 0.05, 0.02); } }
      else { s.active = false; if (mesh) mesh.visible = false; }
    });
    return s;
  }

  conveyor(cx, top, cz, w, d, vz, o = {}) {
    const s = this.addSolid(cx - w / 2, top - 1.4, cz - d / 2, cx + w / 2, top, cz + d / 2, { ...o, conv: [0, vz] });
    if (this.headless) return s;
    this.main.add(this.rbox(w, 1.4, d, 0.25), cx, top - 0.7, cz, this.theme.convBase);
    const beltGeo = new THREE.PlaneGeometry(w - 1.2, d - 0.6);
    const tex = this.arrowTexture ? this.arrowTexture.clone() : null;
    if (tex) { tex.needsUpdate = true; tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(Math.max(1, Math.round((w - 1.2) / 2.4)), Math.max(1, Math.round((d - 0.6) / 2.4))); }
    const belt = new THREE.Mesh(beltGeo, new THREE.MeshStandardMaterial({ color: this.theme.belt, map: tex, roughness: 0.6 }));
    belt.rotation.x = -Math.PI / 2; if (vz > 0) belt.rotation.z = Math.PI;
    belt.position.set(cx, top + 0.03, cz);
    this.add(belt, false, true);
    const sp = Math.abs(vz);
    this.updaters.push((t, dt) => { if (tex) tex.offset.y -= sp * dt / 2.4 / (d - 0.6) * tex.repeat.y; });
    return s;
  }

  // ---------------------------------------------------------------- hazards
  bar(cx, y, cz, len, o = {}) {
    const w = o.w ?? 1.2, h = o.h ?? 1.2, omega = o.omega ?? 1.4, phase = o.phase ?? 0, arms = o.arms ?? 1;
    const hz = {
      type: 'bar', test: (b, t, out) => {
        if (b.y > y + h || b.y + P.H < y) return false;
        const dx = b.x - cx, dz = b.z - cz;
        if (dx * dx + dz * dz > (len / 2 + 1.2) * (len / 2 + 1.2)) return false;
        const th = phase + omega * t;
        for (let k = 0; k < arms; k++) {
          const a = th + k * Math.PI / arms, c = Math.cos(a), s = Math.sin(a);
          const lx = dx * c - dz * s, lz = dx * s + dz * c;
          const qx = clamp(lx, -len / 2, len / 2), qz = clamp(lz, -w / 2, w / 2);
          const ex = lx - qx, ez = lz - qz;
          if (ex * ex + ez * ez < P.R * P.R) {
            const dist = Math.hypot(dx, dz) || 0.001;
            let vx = omega * dz, vz = -omega * dx; // tangential velocity of the bar at the player
            const vl = Math.hypot(vx, vz) || 1;
            vx /= vl; vz /= vl;
            let nx = vx + (dx / dist) * 0.45, nz = vz + (dz / dist) * 0.45;
            const nl = Math.hypot(nx, nz) || 1;
            out.nx = nx / nl; out.nz = nz / nl;
            out.pow = clamp(6 + Math.abs(omega) * dist * 1.15, 9, 21);
            return true;
          }
        }
        return false;
      },
    };
    this.hazards.push(hz);
    if (this.headless) return hz;
    const g = new THREE.Group(); g.position.set(cx, y + h / 2, cz);
    const segs = Math.max(3, Math.round(len / 2.4)), segLen = len / segs;
    const c1 = this.mat(o.color1 ?? this.theme.hazard, { rough: 0.3 }), c2 = this.mat(o.color2 ?? this.theme.hazard2, { rough: 0.3 });
    for (let a = 0; a < arms; a++) {
      const arm = new THREE.Group(); arm.rotation.y = a * Math.PI / arms;
      for (let i = 0; i < segs; i++) {
        const m = new THREE.Mesh(this.rbox(segLen * 0.995, h, w, 0.25), i % 2 ? c1 : c2);
        m.position.x = -len / 2 + segLen * (i + 0.5); m.castShadow = true; arm.add(m);
      }
      g.add(arm);
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(w * 0.85, w, h + 0.7, 16), this.mat(this.theme.hub));
    hub.castShadow = true; g.add(hub);
    this.add(g);
    this.updaters.push((t) => { g.rotation.y = phase + omega * t; });
    return hz;
  }

  hammer(px, py, pz, L, o = {}) {
    const amp = o.amp ?? 1.1, omega = o.omega ?? 1.6, phase = o.phase ?? 0, br = o.r ?? 1.3, span = o.span ?? 9;
    const hz = {
      type: 'hammer', test: (b, t, out) => {
        const a = amp * Math.sin(omega * t + phase), bx = px + L * Math.sin(a), by = py - L * Math.cos(a);
        const da = amp * omega * Math.cos(omega * t + phase), vx = L * Math.cos(a) * da;
        const yy = clamp(by, b.y + 0.15, b.y + P.H - 0.1);
        const dx = bx - b.x, dy = by - yy, dz = pz - b.z, rr = P.R + br;
        if (dx * dx + dy * dy + dz * dz < rr * rr) {
          let nx = -dx, nz = -dz;
          const sg = Math.sign(vx) || Math.sign(nx) || 1;
          nx = sg * 1.0; nz = nz * 0.5;
          const l = Math.hypot(nx, nz); out.nx = nx / l; out.nz = nz / l; out.pow = clamp(Math.abs(vx) * 1.05 + 6, 10, 23);
          return true;
        }
        return false;
      },
    };
    this.hazards.push(hz);
    if (this.headless) return hz;
    const g = new THREE.Group(); g.position.set(px, py, pz);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.17, L, 10), this.mat(this.theme.hub)); pole.position.y = -L / 2;
    const ball = new THREE.Mesh(new THREE.SphereGeometry(br, 28, 18), this.mat(this.theme.hazard, { rough: 0.25 })); ball.position.y = -L;
    const ring = new THREE.Mesh(new THREE.TorusGeometry(br * 0.98, 0.12, 8, 28), this.mat(this.theme.hazard2)); ring.position.y = -L; ring.rotation.x = Math.PI / 2;
    const ring2 = ring.clone(); ring2.rotation.set(0, Math.PI / 2, 0);
    g.add(pole, ball, ring, ring2);
    g.traverse((m) => { if (m.isMesh) m.castShadow = true; });
    this.add(g);
    this.updaters.push((t) => { g.rotation.z = amp * Math.sin(omega * t + phase); });
    // gantry frame
    if (!this.headless) {
      const fc = this.theme.hub;
      this.main.add(this.rbox(0.9, py - (o.baseY ?? py - L - 1.5) + 1.2, 0.9, 0.2), px - span, (py + (o.baseY ?? py - L - 1.5)) / 2 - 0.0, pz, fc);
      this.main.add(this.rbox(0.9, py - (o.baseY ?? py - L - 1.5) + 1.2, 0.9, 0.2), px + span, (py + (o.baseY ?? py - L - 1.5)) / 2 - 0.0, pz, fc);
      this.main.add(this.rbox(span * 2 + 1, 0.8, 0.9, 0.2), px, py + 0.6, pz, fc);
    }
    return hz;
  }

  // rolling balls along a lane (z increases = rolling towards the start)
  balls(x, zFar, zNear, yAt, r, speed, period, phases, o = {}) {
    const len = zNear - zFar, active = len / speed;
    const state = phases.map(() => ({ x, z: 0, y: 0, on: false }));
    const meshes = [];
    const col = (i) => new THREE.Color(i % 2 ? this.theme.hazard : this.theme.hazard2);
    if (!this.headless) {
      phases.forEach((ph, i) => {
        const g = new THREE.SphereGeometry(r, 32, 20); const pa = g.attributes.position, n = pa.count, arr = new Float32Array(n * 3);
        for (let k = 0; k < n; k++) { const a = Math.atan2(pa.getZ(k), pa.getX(k)); const sec = Math.floor(((a + Math.PI) / (Math.PI * 2)) * 8) % 2; const c = sec ? new THREE.Color(this.theme.hazard) : new THREE.Color(this.theme.hazard2); arr[k * 3] = c.r; arr[k * 3 + 1] = c.g; arr[k * 3 + 2] = c.b; }
        g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
        const m = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.25 }));
        m.visible = false; this.add(m); meshes.push(m);
      });
    }
    const hz = {
      type: 'balls', test: (b, t, out) => {
        for (let i = 0; i < state.length; i++) {
          const s = state[i]; if (!s.on) continue;
          const yy = clamp(s.y, b.y + 0.15, b.y + P.H - 0.1);
          const dx = s.x - b.x, dy = s.y - yy, dz = s.z - b.z, rr = P.R + r;
          if (dx * dx + dy * dy + dz * dz < rr * rr) {
            let nx = (b.x - s.x) * 0.8, nz = 1.0; const l = Math.hypot(nx, nz);
            out.nx = nx / l; out.nz = nz / l; out.pow = clamp(speed * 1.1 + 4, 10, 20);
            return true;
          }
        }
        return false;
      },
    };
    this.hazards.push(hz);
    this.updaters.push((t) => {
      phases.forEach((ph, i) => {
        const s = state[i], u = (((t + ph) % period) + period) % period;
        const on = u < active; s.on = on;
        if (on) { s.z = zFar + u * speed; s.y = yAt(s.z) + r; s.x = x; }
        const m = meshes[i]; if (m) { m.visible = on; if (on) { m.position.set(s.x, s.y, s.z); m.rotation.x = s.z / r; } }
      });
    });
    return hz;
  }

  // ---------------------------------------------------------------- fairground rides
  // Seesaw: a plank that tilts about its centre (deterministic from level time, so every player sees the same phase).
  // `end` = how high/low the plank ends swing (metres).
  seesaw(cx, py, cz, w, L, end, period, phase = 0) {
    const r = { x0: cx - w / 2, x1: cx + w / 2, zN: cz + L / 2, zF: cz - L / 2, yN: py, yF: py, conv: null, ice: false, kind: 'ramp', seesaw: true };
    this.ramps.push(r);
    const set = (t) => { const e = end * Math.sin(2 * Math.PI * t / period + phase); r.yN = py + e; r.yF = py - e; return e; };
    set(0);
    if (this.headless) { this.updaters.push((t) => set(t)); return r; }
    // fulcrum (static) + tilting plank (dynamic)
    this.main.add(new THREE.CylinderGeometry(0.5, 1.1, 2.4, 8), cx, py - 1.4, cz, this.theme.hub);
    this.main.add(this.rbox(w * 0.9, 0.7, 1.4, 0.2), cx, py - 2.5, cz, this.theme.hazard2);
    const g = new THREE.Group(); g.position.set(cx, py - 0.25, cz);
    const plank = new THREE.Mesh(this.rbox(w, 0.5, L, 0.2), this.mat(this.pick(), { rough: 0.35 }));
    const pad = new THREE.Mesh(this.rbox(w - 1.2, 0.1, L - 1.2, 0.04), this.mat(this.theme.pad)); pad.position.y = 0.27;
    g.add(plank, pad);
    for (const sz of [-1, 1]) { // coloured end caps so you can read which end is up
      const cap = new THREE.Mesh(this.rbox(w, 0.62, 1.2, 0.2), this.mat(this.theme.hazard, { rough: 0.3 })); cap.position.set(0, 0.03, sz * (L / 2 - 0.6)); g.add(cap);
    }
    for (const sx of [-1, 1]) { const h = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.1, 8), this.mat(this.theme.hub)); h.position.set(sx * (w / 2 - 0.5), 0.9, 0); g.add(h); }
    this.add(g);
    this.updaters.push((t) => { const e = set(t); g.rotation.x = -Math.atan2(e, L / 2); });
    return r;
  }

  // Bungee bounce: a big elastic mushroom at the bottom of a chasm inside a "bungee cage" of cords.
  bungee(cx, cz, top, r, power, cageTop) {
    const d = this.disc(cx, top, cz, r, { bounce: power, color: this.theme.hazard });
    if (this.headless) return d;
    const H = cageTop, n = 14;
    for (let i = 0; i < n; i++) {
      const a = i / n * Math.PI * 2, x = cx + Math.cos(a) * (r * 0.92), z = cz + Math.sin(a) * (r * 0.92);
      this.main.add(new THREE.CylinderGeometry(0.07, 0.07, H - top, 5), x, (H + top) / 2, z, i % 2 ? '#ffffff' : this.theme.hazard);
    }
    this.main.add(new THREE.TorusGeometry(r * 0.92, 0.35, 8, 36), cx, H, cz, this.theme.accent, Math.PI / 2);
    this.main.add(new THREE.TorusGeometry(r * 0.92, 0.2, 8, 36), cx, top + 0.15, cz, '#ffffff', Math.PI / 2);
    for (let i = 0; i < 3; i++) { // three support masts (outside the jump line)
      const a = Math.PI / 2 + i * Math.PI * 2 / 3 + 0.5, x = cx + Math.cos(a) * (r + 1.4), z = cz + Math.sin(a) * (r + 1.4);
      this.main.add(new THREE.CylinderGeometry(0.45, 0.6, H + 12, 8), x, (H - 12) / 2, z, i % 2 ? '#ffd23f' : '#ffffff');
    }
    this.glow.add(new THREE.SphereGeometry(0.9, 12, 8), cx, H + 1.6, cz, '#ffffff');
    return d;
  }

  // Thin tube through a list of [x,y,z] points (static scenery, merged): used for roller-coaster rails.
  tube(pts, rad, color) {
    if (this.headless) return;
    const up = new THREE.Vector3(0, 1, 0), a = new THREE.Vector3(), b = new THREE.Vector3(), dir = new THREE.Vector3(), q = new THREE.Quaternion(), e = new THREE.Euler();
    for (let i = 0; i < pts.length - 1; i++) {
      a.set(...pts[i]); b.set(...pts[i + 1]); dir.subVectors(b, a); const len = dir.length(); dir.normalize();
      q.setFromUnitVectors(up, dir); e.setFromQuaternion(q);
      this.main.add(new THREE.CylinderGeometry(rad, rad, len * 1.02, 6), (a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2, color, e.x, e.y, e.z);
    }
  }

  // Air pad: an updraft column. Inside it you float upward and hover near the top (move sideways to leave).
  airpad(cx, cz, r, y0, h, o = {}) {
    const z = { x: cx, z: cz, r, y0, y1: y0 + h, lift: o.lift ?? 90, vmax: o.vmax ?? 9 };
    this.zones.push(z);
    if (this.headless) return z;
    this.main.add(new THREE.CylinderGeometry(r * 0.95, r, 0.5, 28), cx, y0 + 0.25, cz, this.theme.hub);
    this.glow.add(new THREE.TorusGeometry(r * 0.8, 0.14, 8, 36), cx, y0 + 0.55, cz, '#9cf0ff', Math.PI / 2);
    const mat = new THREE.MeshBasicMaterial({ color: '#8fe9ff', transparent: true, opacity: 0.16, depthWrite: false, side: THREE.DoubleSide, toneMapped: false });
    const col = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.92, r * 0.92, h, 24, 1, true), mat); col.position.set(cx, y0 + h / 2, cz); col.renderOrder = 3; this.group.add(col);
    const ringMat = new THREE.MeshBasicMaterial({ color: '#e6fbff', transparent: true, opacity: 0.5, depthWrite: false, toneMapped: false });
    const rings = [];
    for (let i = 0; i < 5; i++) { const rg = new THREE.Mesh(new THREE.TorusGeometry(r * 0.85, 0.08, 6, 28), ringMat); rg.rotation.x = Math.PI / 2; rg.renderOrder = 3; this.group.add(rg); rings.push(rg); }
    this.updaters.push((t) => { rings.forEach((rg, i) => { const u = ((t * 0.5 + i / 5) % 1); rg.position.set(cx, y0 + 0.6 + u * (h - 0.8), cz); rg.scale.setScalar(1 - u * 0.25); }); });
    return z;
  }

  // Boxing glove: punches out of a wall at (px,py,pz) along (dx,dz) every `period` seconds. Knock-back only.
  punch(px, py, pz, dx, dz, reach, o = {}) {
    const period = o.period ?? 3.2, off = o.off ?? 0, gr = 1.0;
    const l = Math.hypot(dx, dz) || 1; dx /= l; dz /= l;
    const ext = (t) => {
      const u = (((t + off) % period) + period) % period / period;
      const e = (a, b, x) => { const k = Math.max(0, Math.min(1, (x - a) / (b - a))); return k * k * (3 - 2 * k); };
      return reach * (e(0.5, 0.58, u) - e(0.78, 0.95, u));
    };
    const hz = {
      type: 'punch', test: (b, t, out) => {
        const e = ext(t); if (e < 0.4) return false;
        const gx = px + dx * (e + 0.5), gz = pz + dz * (e + 0.5);
        const yy = clamp(py, b.y + 0.15, b.y + P.H - 0.1);
        const ddx = gx - b.x, ddy = py - yy, ddz = gz - b.z, rr = P.R + gr;
        if (ddx * ddx + ddy * ddy + ddz * ddz < rr * rr) { out.nx = dx; out.nz = dz; out.pow = o.pow ?? 15; return true; }
        return false;
      },
    };
    this.hazards.push(hz);
    if (this.headless) return hz;
    const g = new THREE.Group(); g.position.set(px, py, pz); g.rotation.y = Math.atan2(dx, dz);
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 1, 8), this.mat(this.theme.hub)); arm.rotation.x = Math.PI / 2;
    const glove = new THREE.Mesh(new THREE.SphereGeometry(gr, 20, 14), this.mat(this.theme.hazard, { rough: 0.3 }));
    const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.5, 14), this.mat('#ffffff')); cuff.rotation.x = Math.PI / 2; cuff.position.z = -0.95;
    const thumb = new THREE.Mesh(new THREE.SphereGeometry(0.42, 12, 10), this.mat(this.theme.hazard, { rough: 0.3 })); thumb.position.set(0.7, 0.45, -0.35);
    glove.add(cuff, thumb); cuff.position.z = -0.95; glove.scale.set(1, 1, 1.1);
    g.add(arm, glove); g.traverse((m) => { if (m.isMesh) m.castShadow = true; });
    this.add(g, false, false);
    this.main.add(this.rbox(2.2, 2.6, 1.2, 0.3), px - dx * 0.3, py, pz - dz * 0.3, this.theme.hub, 0, Math.atan2(dx, dz), 0);
    this.updaters.push((t) => { const e = ext(t); arm.scale.y = Math.max(0.01, e + 0.2); arm.position.z = (e + 0.2) / 2; glove.position.z = e + 0.5; });
    return hz;
  }

  // Ferris wheel: gondolas are real moving platforms riding a circle in the Y-Z plane.
  ferris(cx, cy, cz, R, n, omega) {
    const phase = (i) => i * Math.PI * 2 / n;
    for (let i = 0; i < n; i++) {
      this.mover(cx, cy - R, cz, 5, 5, (t) => { const a = omega * t + phase(i); return [0, R * (1 - Math.cos(a)), R * Math.sin(a)]; }, { h: 0.7, color: this.theme.plat[i % this.theme.plat.length], pad: true });
    }
    if (this.headless) return;
    const g = new THREE.Group(); g.position.set(cx, cy, cz);
    const rimMat = this.mat('#ffffff', { rough: 0.35 });
    for (const sx of [-1, 1]) {
      const rim = new THREE.Mesh(new THREE.TorusGeometry(R, 0.28, 8, 56), rimMat); rim.rotation.y = Math.PI / 2; rim.position.x = sx * 3.2; g.add(rim);
    }
    for (let k = 0; k < 4; k++) for (const sx of [-1, 1]) { const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, R * 2, 6), this.mat(this.theme.hazard)); sp.rotation.x = k * Math.PI / 4; sp.position.x = sx * 3.2; g.add(sp); }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 7.4, 14), this.mat(this.theme.hub)); hub.rotation.z = Math.PI / 2; g.add(hub);
    this.add(g, true, false);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) this.main.add(this.rbox(0.7, cy + 1, 0.7, 0.2), cx + sx * 4.4, (cy - 1) / 2, cz + sz * R * 0.55, this.theme.hub, 0, 0, 0, 1, 1, 1);
    this.updaters.push((t) => { g.rotation.x = -(omega * t); });
  }

  // Pirate ship: a boat-shaped platform swinging like a giant pendulum (carries riders).
  pirate(cx, cz, R, swing, period, base = 0.1) {
    const pivotY = base + R;
    this.mover(cx, base, cz, 10, 5, (t) => { const a = swing * Math.sin(2 * Math.PI * t / period); return [0, R * (1 - Math.cos(a)), R * Math.sin(a)]; }, { h: 0.9, color: this.theme.hazard, stripes: true, pad: true });
    if (this.headless) return;
    for (const sx of [-1, 1]) { // A-frame towers
      this.main.add(this.rbox(0.8, pivotY + 2, 0.8, 0.2), cx + sx * 6.2, (pivotY + 2) / 2 - 0.5, cz + 2.2, this.theme.hub, 0, 0, 0.12 * sx);
      this.main.add(this.rbox(0.8, pivotY + 2, 0.8, 0.2), cx + sx * 6.2, (pivotY + 2) / 2 - 0.5, cz - 2.2, this.theme.hub, 0, 0, 0.12 * sx);
    }
    this.main.add(this.rbox(14.5, 0.9, 0.9, 0.2), cx, pivotY + 0.4, cz, this.theme.accent);
    const g = new THREE.Group(); g.position.set(cx, pivotY, cz);
    for (const sx of [-1, 1]) { const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, R, 8), this.mat('#ffffff')); arm.position.set(sx * 4.2, -R / 2, 0); g.add(arm); }
    this.add(g, true, false);
    this.updaters.push((t) => { g.rotation.x = -swing * Math.sin(2 * Math.PI * t / period); });
  }

  // Drop tower: lift platform rises slowly, waits at the top, then drops fast. Rides you up and down.
  dropTower(cx, cz, H, period = 13) {
    const y = (t) => {
      const u = (((t % period) + period) % period);
      if (u < 1.0) return 0;
      if (u < 5.5) { const k = (u - 1.0) / 4.5; return H * (k * k * (3 - 2 * k)); }
      if (u < 8.5) return H;
      if (u < 9.4) { const k = (u - 8.5) / 0.9; return H * (1 - k * k); }
      return 0;
    };
    this.mover(cx, 0.1, cz, 6, 6, (t) => [0, y(t), 0], { h: 0.9, color: this.theme.accent, stripes: true, pad: true });
    if (this.headless) return;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) this.main.add(this.rbox(0.7, H + 5, 0.7, 0.2), cx + sx * 3.6, (H + 5) / 2 - 0.5, cz + sz * 3.6, '#ffffff');
    this.main.add(this.rbox(8.2, 0.8, 8.2, 0.2), cx, H + 4.6, cz, this.theme.hazard);
    this.glow.add(new THREE.SphereGeometry(0.7, 10, 8), cx, H + 5.6, cz, '#ffffff');
  }

  // Flying chairs: n small platforms orbiting a centre pole (rideable, carry you around).
  orbit(cx, cz, R, top, n, omega) {
    for (let i = 0; i < n; i++) {
      const ph = i * Math.PI * 2 / n;
      this.mover(cx + R, top, cz, 4.4, 4.4, (t) => { const a = omega * t + ph; return [R * Math.cos(a) - R, 0.7 * Math.sin(t * 1.3 + ph), R * Math.sin(a)]; }, { h: 0.8, color: this.theme.plat[i % this.theme.plat.length], pad: true });
    }
    if (this.headless) return;
    this.main.add(new THREE.CylinderGeometry(0.7, 0.9, top + 5, 10), cx, (top + 5) / 2 - 0.4, cz, this.theme.hub);
    this.main.add(new THREE.ConeGeometry(2.4, 2.2, 14), cx, top + 6, cz, this.theme.hazard);
    this.glow.add(new THREE.TorusGeometry(R, 0.12, 6, 48), cx, top - 0.5, cz, '#ffffff', Math.PI / 2);
  }

  // Cannon pad: big bounce plus a forward push (you fly ~20 m with no steering while airborne).
  cannon(cx, cz, vy, push) {
    this.disc(cx, 0, cz, 2.4, { bounce: vy, push, color: this.theme.hazard });
    if (this.headless) return;
    const dz = push[1] < 0 ? -1 : 1; // direction of travel
    this.main.add(new THREE.CylinderGeometry(1.0, 1.35, 5.5, 14), cx, 2.4, cz - dz * 2.8, this.theme.hub, dz * 0.93, 0, 0);
    this.main.add(new THREE.TorusGeometry(1.1, 0.2, 8, 18), cx, 4.4, cz - dz * 0.5, this.theme.accent, Math.PI / 2 - dz * 0.64, 0, 0);
  }



  // FLAG SHUTTLE (Annoying Maze): a platform with a flag that rides back and forth along z. A big BLADE hangs on a gantry above it,
  // waits 4 s so you can see it coming, then SLAMS down on the middle of the platform (the two ends stay safe) and leaves a blue splat.
  // Two shuttles in opposite phase meet in the middle every T/2 seconds - the blades slam at that moment.
  flagShuttle(cx, top, cz0, D, T, phase, w, dp, kind, o = {}) {
    const pos = (t) => -D * (0.5 - 0.5 * Math.cos(2 * Math.PI * t / T + phase));
    const T0 = T / 4, HALF = T / 2, slabZ = o.slabZ ?? 3.0;
    const tau = (t) => (((t - T0 + HALF / 2) % HALF) + HALF) % HALF - HALF / 2;     // seconds relative to the nearest meeting
    // blade height above the platform top (hover 2 s, slam, stay down, rise)
    const bladeH = (t) => {
      const u = tau(t), HI = 11, HOV = 4.2, LOW = 0.35;
      if (u < -5.0) return HI;
      if (u < -4.4) return HI + (HOV - HI) * ((u + 5.0) / 0.6);
      if (u < -0.4) return HOV;                                  // hovers 4 s so you can see it and get clear
      if (u < -0.15) return HOV + (LOW - HOV) * ((u + 0.4) / 0.25);
      if (u < 0.6) return LOW;
      if (u < 1.4) return LOW + (HOV - LOW) * ((u - 0.6) / 0.8);
      return HOV + (HI - HOV) * Math.min(1, (u - 1.4) / 0.6);
    };
    const s = this.mover(cx, top, cz0, w, dp, (t) => [0, 0, pos(t)], { h: 0.8, color: o.color ?? '#f4efe6', pad: false });
    const hz = {
      type: 'blade', test: (b, t, out) => {
        const u = tau(t); if (u < -0.3 || u > 0.25) return false;
        const pz = cz0 + pos(t), dx = b.x - cx, dz = b.z - pz;
        if (Math.abs(dx) > w / 2 + 0.3 || Math.abs(dz) > slabZ + 0.4) return false;
        if (b.y > top + 3.2 || b.y + 1.55 < top) return false;
        out.nx = (Math.sign(dx) || 1) * 0.25; out.nz = Math.sign(dz) || 1; const l = Math.hypot(out.nx, out.nz); out.nx /= l; out.nz /= l; out.pow = 15;
        return true;
      },
    };
    this.hazards.push(hz);
    this.shuttles = this.shuttles || []; this.shuttles.push({ cx, top, cz0, D, T, phase, w, dp, pos, tau, bladeH, slabZ });
    if (this.headless) return s;
    const g = new THREE.Group(); this.add(g);
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(w - 1.2, (w - 1.2) * 0.667), new THREE.MeshBasicMaterial({ map: flagTexture(kind), toneMapped: false })); flag.rotation.x = -Math.PI / 2; flag.position.y = 0.06; g.add(flag);
    // blue splat (shows after each slam, fades)
    const blue = new THREE.MeshBasicMaterial({ color: '#1e6bff', transparent: true, opacity: 0, depthWrite: false, toneMapped: false });
    const splat = new THREE.Group(); splat.position.y = 0.1;
    [[0, 0, 2.6], [1.9, 1.3, 1.1], [-2.0, 1.5, 0.9], [1.4, -1.9, 1.0], [-1.6, -1.6, 0.8], [0.2, 2.6, 0.7]].forEach(([x, z, r]) => { const m = new THREE.Mesh(new THREE.CircleGeometry(r, 18), blue); m.rotation.x = -Math.PI / 2; m.position.set(x, 0, z); splat.add(m); });
    g.add(splat);
    // gantry + blade
    for (const sd of [-1, 1]) { const post = new THREE.Mesh(this.rbox(0.6, 12.5, 0.6, 0.15), this.mat(this.theme.hub)); post.position.set(sd * (w / 2 + 0.1), 6.2, 0); g.add(post); }
    const beam = new THREE.Mesh(this.rbox(w + 1.2, 0.7, 0.8, 0.15), this.mat(this.theme.hub)); beam.position.y = 12.6; g.add(beam);
    const bl = new THREE.Group();
    const slab = new THREE.Mesh(this.rbox(w - 0.6, 0.5, slabZ * 2, 0.1), this.mat('#c9d3df', { rough: 0.2 })); bl.add(slab);
    for (let i = 0; i < 8; i++) { const tooth = new THREE.Mesh(new THREE.ConeGeometry(0.55, 0.9, 4), this.mat('#eef3f8', { rough: 0.15 })); tooth.rotation.x = Math.PI; tooth.position.set(-(w - 1.6) / 2 + i * ((w - 1.6) / 7), -0.65, 0); bl.add(tooth); }
    const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.15, 12, 6), this.mat('#8a8f99')); rod.position.y = 6; bl.add(rod);
    const warn = new THREE.Mesh(new THREE.PlaneGeometry(w - 0.6, slabZ * 2), new THREE.MeshBasicMaterial({ color: '#ff3d3d', transparent: true, opacity: 0, depthWrite: false, toneMapped: false })); warn.rotation.x = -Math.PI / 2; warn.position.y = 0.09; g.add(warn);
    g.add(bl);
    this.updaters.push((t) => {
      const oz = pos(t); g.position.set(cx, top + 0.4, cz0 + oz);
      const h = bladeH(t), u = tau(t); bl.position.y = h + 0.5 + (u > -1.2 && u < -0.4 ? Math.sin(t * 40) * 0.06 : 0);
      warn.material.opacity = u > -4.4 && u < -0.1 ? 0.18 + 0.12 * Math.sin(t * 12) : 0;
      blue.opacity = u > -0.15 && u < 3.4 ? Math.min(0.85, (3.4 - u) / 3.0) : 0;
    });
    return s;
  }

  // ---------------------------------------------------------------- fans, swings, doors (Maze level)
  // FAN: a wind column that pushes you sideways (ax, az in m/s of drift) while you are inside the box x0..x1 / z0..z1, y0..y1.
  fan(x0, x1, z0, z1, y0, y1, ax, az) {
    const f = { x0, x1, z0, z1, y0, y1, ax, az }; this.winds.push(f);
    if (this.headless) return f;
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, dirX = Math.sign(ax) || 0, dirZ = Math.sign(az) || 0;
    // the fan itself stands at the upwind edge: pole, cage and spinning blades
    const px = dirX ? (dirX > 0 ? x0 - 0.8 : x1 + 0.8) : cx, pz = dirZ ? (dirZ > 0 ? z0 - 0.8 : z1 + 0.8) : cz, fy = y0 + 2.2;
    this.main.add(new THREE.CylinderGeometry(0.3, 0.45, 9.4, 8), px, y0 - 3.1, pz, this.theme.hub);
    const g = new THREE.Group(); g.position.set(px, fy, pz); g.rotation.y = dirX ? (dirX > 0 ? Math.PI / 2 : -Math.PI / 2) : (dirZ > 0 ? 0 : Math.PI);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.6, 0.18, 8, 28), this.mat(this.theme.hazard)); g.add(ring);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.5, 12), this.mat('#ffffff')); hub.rotation.x = Math.PI / 2; g.add(hub);
    const blades = new THREE.Group();
    for (let i = 0; i < 4; i++) { const bl = new THREE.Mesh(this.rbox(0.6, 1.4, 0.1, 0.04), this.mat(i % 2 ? '#ffffff' : this.theme.accent)); bl.position.y = 0.9; const pv = new THREE.Group(); pv.rotation.z = i * Math.PI / 2; pv.add(bl); blades.add(pv); }
    g.add(blades); this.add(g);
    // moving "wind streaks" along the push direction so you can SEE where it blows
    const sm = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.5, depthWrite: false, toneMapped: false });
    const streaks = [], L = Math.abs(dirX) ? x1 - x0 : z1 - z0;
    for (let i = 0; i < 7; i++) { const m = new THREE.Mesh(new THREE.BoxGeometry(dirX ? 2.2 : 0.07, 0.07, dirX ? 0.07 : 2.2), sm); this.group.add(m); streaks.push({ m, k: i / 7, o: ((i * 0.37) % 1) }); }
    this.updaters.push((t) => {
      blades.rotation.z = t * 16;
      for (const s of streaks) {
        const u = (s.k + t * 0.55) % 1, d = u * L;
        s.m.position.set(dirX ? (dirX > 0 ? x0 + d : x1 - d) : x0 + (x1 - x0) * s.o, y0 + 0.8 + ((s.o * 7) % 1) * (y1 - y0 - 1.2), dirZ ? (dirZ > 0 ? z0 + d : z1 - d) : z0 + (z1 - z0) * s.o);
      }
    });
    return f;
  }

  // SWING (trapeze): a rope that swings along z. Deterministic from level time (same phase for everybody).
  // The player-side code (main.js) lets you GRAB the handle when it passes close, and let go with JUMP.
  swing(sx, sy, sz, len, amp, period, phase = 0, color) {
    const w = { x: sx, y: sy, z: sz, len, amp, om: 2 * Math.PI / period, ph: phase };
    this.swings.push(w);
    if (this.headless) return w;
    const col = color ?? this.theme.hazard;
    // support frame (static): two posts + beam
    const span = 3.0;
    for (const sd of [-1, 1]) this.main.add(this.rbox(0.8, sy + 1, 0.8, 0.2), sx + sd * span, (sy - 1) / 2 + 0.5, sz, this.theme.hub);
    this.main.add(this.rbox(span * 2 + 0.8, 0.8, 0.8, 0.2), sx, sy + 0.4, sz, this.theme.hub);
    this.glow.add(new THREE.SphereGeometry(0.35, 10, 8), sx - span, sy + 1.2, sz, '#ffffff'); this.glow.add(new THREE.SphereGeometry(0.35, 10, 8), sx + span, sy + 1.2, sz, '#ffffff');
    const g = new THREE.Group(); g.position.set(sx, sy, sz);
    const rope = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, len, 6), this.mat('#fff2c4')); rope.position.y = -len / 2; g.add(rope);
    const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, 3.0, 12), this.mat('#ffd23f', { rough: 0.3 })); bar.rotation.z = Math.PI / 2; bar.position.y = -len; g.add(bar);
    for (const sd of [-1, 1]) { const k = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), this.mat('#ffffff')); k.position.set(sd * 1.5, -len, 0); g.add(k); }
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.07, 6, 16), this.mat('#ffd23f')); ring.position.y = -len + 0.0; ring.rotation.y = Math.PI / 2; g.add(ring);
    this.add(g);
    w.mesh = g;
    this.updaters.push((t) => { g.rotation.x = -this.swingAngle(w, t); });
    return w;
  }
  swingAngle(w, t) { return w.amp * Math.sin(w.om * t + w.ph); }
  // handle position + velocity at time t
  swingTip(w, t, out = {}) {
    const th = this.swingAngle(w, t), dth = w.amp * w.om * Math.cos(w.om * t + w.ph);
    out.x = w.x; out.y = w.y - w.len * Math.cos(th); out.z = w.z + w.len * Math.sin(th);
    out.vz = w.len * dth * Math.cos(th); out.vy = w.len * dth * Math.sin(th);
    return out;
  }

  // DOOR WALL: n doors across width w at z. `fake[i]` doors are SOLID (they don't open); the others swing open when you run into them.
  doorWall(cx, top, cz, w, n, fake, o = {}) {
    const dh = o.h ?? 4.2, dw = w / n, cols = o.colors ?? ['#ff6b9d', '#ffd23f', '#4cc9f0', '#80ed99', '#ff9f1c', '#b58cff', '#ff7a7a'];
    const doors = [];
    for (let i = 0; i < n; i++) {
      const x = cx - w / 2 + dw * (i + 0.5);
      const s = fake[i] ? this.addSolid(x - dw / 2 + 0.05, top, cz - 0.4, x + dw / 2 - 0.05, top + dh, cz + 0.4, { name: 'fakedoor' }) : null;
      const d = { x, z: cz, i, fake: !!fake[i], solid: s, open: 0, mesh: null };
      if (!this.headless) {
        const g = new THREE.Group(); g.position.set(x - dw / 2 + 0.05, top, cz);        // hinge on the left edge
        const panel = new THREE.Mesh(this.rbox(dw - 0.1, dh, 0.5, 0.12), this.mat(cols[i % cols.length], { rough: 0.35 })); panel.position.set((dw - 0.1) / 2, dh / 2, 0); g.add(panel);
        const knob = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), this.mat('#ffffff')); knob.position.set(dw - 0.5, dh * 0.45, 0.35); g.add(knob);
        const band = new THREE.Mesh(this.rbox(dw - 0.5, 0.35, 0.56, 0.05), this.mat('#ffffff')); band.position.set((dw - 0.1) / 2, dh * 0.82, 0); g.add(band);
        this.add(g); d.mesh = g;
      }
      doors.push(d);
    }
    if (!this.headless) { // frame
      this.main.add(this.rbox(0.9, dh + 1.2, 1.0, 0.2), cx - w / 2 - 0.45, top + (dh + 1.2) / 2, cz, this.theme.hub); this.main.add(this.rbox(0.9, dh + 1.2, 1.0, 0.2), cx + w / 2 + 0.45, top + (dh + 1.2) / 2, cz, this.theme.hub);
      this.main.add(this.rbox(w + 1.8, 1.0, 1.0, 0.2), cx, top + dh + 0.5, cz, this.theme.hub);
    }
    this.doorWalls = this.doorWalls || []; this.doorWalls.push({ cx, cz, w, doors });
    this.updaters.push((t, dt) => {
      const pl = this.nearPlayers || [];
      for (const d of doors) {
        if (!d.mesh) continue;
        let tgt = 0; if (!d.fake) for (const p of pl) if (Math.abs(p.z - cz) < 3.2 && Math.abs(p.x - d.x) < dw * 0.9) tgt = 1;
        d.open += (tgt - d.open) * Math.min(1, dt * 9); d.mesh.rotation.y = -d.open * 1.45;
        if (d.fake && tgt === 0) { /* fake doors stay shut */ }
      }
    });
    return doors;
  }

  // ---------------------------------------------------------------- checkpoints & gates
  checkpoint(x, top, z, w = 14) {
    const cp = { x, y: top, z, w, spawn: [x, top, z + 1.0] };
    this.checkpoints.push(cp);
    if (this.headless) return cp;
    this.arch(x, top, z, w, this.theme.accent, true);
    return cp;
  }
  arch(x, top, z, w, color, small = false) {
    const ph = small ? 5.2 : 8.5;
    this.main.add(this.rbox(0.9, ph, 0.9, 0.25), x - w / 2, top + ph / 2, z, color);
    this.main.add(this.rbox(0.9, ph, 0.9, 0.25), x + w / 2, top + ph / 2, z, color);
    this.main.add(this.rbox(w + 0.9, small ? 0.9 : 1.6, small ? 0.9 : 1.4, 0.25), x, top + ph, z, color);
    this.glow.add(new THREE.SphereGeometry(0.42, 12, 8), x - w / 2, top + ph + 0.8, z, '#ffffff');
    this.glow.add(new THREE.SphereGeometry(0.42, 12, 8), x + w / 2, top + ph + 0.8, z, '#ffffff');
  }

  // ---------------------------------------------------------------- per-frame
  update(t, dt) {
    this.time = t;
    for (const u of this.updaters) u(t, dt);
    for (const d of this.discs) {
      if (d.omega) { const th = d.phase + d.omega * t; d.dTheta = d.first ? 0 : th - d.theta; d.theta = th; d.first = false; }
    }
  }

  // carry a body standing on a moving surface
  carry(b) {
    const g = b.ground; if (!g) return;
    if (g.moving) { b.x += g.dx; b.y += g.dy; b.z += g.dz; }
    else if (g.kind === 'disc' && g.omega) {
      const rx = b.x - g.cx, rz = b.z - g.cz, a = g.dTheta, c = Math.cos(a), s = Math.sin(a);
      // object rotating about +y by a: (x,z) -> (x c + z s, -x s + z c)
      b.x = g.cx + rx * c + rz * s; b.z = g.cz - rx * s + rz * c;
      b.yawOff = (b.yawOff || 0) + a;
    }
  }

  checkHazards(b, t) {
    for (const h of this.hazards) if (h.test(b, t, this.hitOut)) return this.hitOut;
    return null;
  }

  finalize() {
    if (this.headless) return;
    const m1 = this.main.build(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.4, metalness: 0.02 }));
    if (m1) { m1.castShadow = true; m1.receiveShadow = true; this.group.add(m1); }
    const m2 = this.glow.build(new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false }));
    if (m2) this.group.add(m2);
  }

  // ---------------------------------------------------------------- collision queries used by physics.js
  // horizontal push-out of a vertical cylinder from solids and disc sides
  resolveHorizontal(b) {
    const R = P.R, H = P.H;
    for (const s of this.solids) {
      if (!s.active) continue;
      if (s.y1 <= b.y + P.STEP || s.y0 >= b.y + H) continue;
      if (b.x < s.x0 - R || b.x > s.x1 + R || b.z < s.z0 - R || b.z > s.z1 + R) continue;
      const cx = clamp(b.x, s.x0, s.x1), cz = clamp(b.z, s.z0, s.z1);
      const dx = b.x - cx, dz = b.z - cz, d2 = dx * dx + dz * dz;
      if (d2 >= R * R) continue;
      let nx, nz;
      if (d2 > 1e-9) {
        const d = Math.sqrt(d2), pen = R - d; nx = dx / d; nz = dz / d;
        b.x += nx * pen; b.z += nz * pen;
      } else {
        const l = b.x - s.x0, r = s.x1 - b.x, f = b.z - s.z0, k = s.z1 - b.z, m = Math.min(l, r, f, k);
        if (m === l) { b.x = s.x0 - R; nx = -1; nz = 0; } else if (m === r) { b.x = s.x1 + R; nx = 1; nz = 0; }
        else if (m === f) { b.z = s.z0 - R; nx = 0; nz = -1; } else { b.z = s.z1 + R; nx = 0; nz = 1; }
      }
      const vn = b.vx * nx + b.vz * nz;
      if (vn < 0) { b.vx -= vn * nx; b.vz -= vn * nz; }
      if (s.moving) { // moving solids shove the player
        const sn = s.dx * nx + s.dz * nz;
        if (sn > 0) { b.vx += nx * Math.min(sn / 0.016, 8) * 0.3; b.vz += nz * Math.min(sn / 0.016, 8) * 0.3; }
      }
    }
    for (const d of this.discs) {
      if (b.y + H <= d.top - d.th || b.y >= d.top - P.STEP) continue;
      const dx = b.x - d.cx, dz = b.z - d.cz, dist = Math.hypot(dx, dz), lim = d.r + R;
      if (dist < lim && dist > 1e-6) { const nx = dx / dist, nz = dz / dist; b.x = d.cx + nx * lim; b.z = d.cz + nz * lim; const vn = b.vx * nx + b.vz * nz; if (vn < 0) { b.vx -= vn * nx; b.vz -= vn * nz; } }
    }
  }

  // find the surface to land on (highest valid), returns surface or null and its top
  findGround(b, prevY, wasGrounded) {
    const M = P.EDGE, lim = prevY + P.STEP;
    const snap = wasGrounded && b.noSnap <= 0 ? P.SNAP : 0;
    let best = null, bestTop = -1e9;
    for (const s of this.solids) {
      if (!s.active) continue;
      const top = s.y1;
      if (top > lim || top <= bestTop) continue;
      if (b.x < s.x0 - M || b.x > s.x1 + M || b.z < s.z0 - M || b.z > s.z1 + M) continue;
      if (b.y <= top + 1e-4 || b.y <= top + snap) { best = s; bestTop = top; }
    }
    for (const r of this.ramps) {
      if (b.x < r.x0 - M || b.x > r.x1 + M || b.z > r.zN + 0.3 || b.z < r.zF - 0.3) continue;
      const k = clamp((r.zN - b.z) / (r.zN - r.zF), 0, 1), top = r.yN + (r.yF - r.yN) * k;
      if (top > lim || top < bestTop) continue; // ties go to the ramp (so seesaws/slides beat a flat floor)
      if (b.y <= top + 1e-4 || b.y <= top + snap) { best = r; bestTop = top; }
    }
    for (const d of this.discs) {
      const top = d.top;
      if (top > lim || top < bestTop) continue; // ties go to the disc (so mushrooms on a floor still bounce)
      const dx = b.x - d.cx, dz = b.z - d.cz, rr = d.r + M * 0.8;
      if (dx * dx + dz * dz > rr * rr) continue;
      if (b.y <= top + 1e-4 || b.y <= top + snap) { best = d; bestTop = top; }
    }
    if (this.terrain) { // smooth hills (Haris City): the ground height is a function; solids / ramps on top of it win ties
      const top = this.terrain(b.x, b.z);
      // a steep hill rises faster than a step (and a slow frame moves further): allow a big step up so the walker is carried up the slope and never falls through it
      if (top <= prevY + 1.5 && top > bestTop && (b.y <= top + 1e-4 || b.y <= top + snap)) { best = TERRAIN_SURF; bestTop = top; }
    }
    return best ? { s: best, top: bestTop } : null;
  }

  hitCeiling(b, prevY) {
    for (const s of this.solids) {
      if (!s.active) continue;
      if (prevY + P.H > s.y0 + 0.02 || b.y + P.H <= s.y0) continue;
      if (b.x < s.x0 || b.x > s.x1 || b.z < s.z0 || b.z > s.z1) continue;
      return s;
    }
    return null;
  }
}
