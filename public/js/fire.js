// v416: REALISTIC fire (molotov) and smoke (smoke bomb) made of a few camera-facing sprites with procedural textures. No lights, no per-frame allocations,
// nothing that makes the shader recompile (so no glitches): every texture is drawn once on a canvas, every sprite is reused until the effect ends.
//   FIRE  : a glowing scorch patch on the ground, flame tongues that grow, flicker and rise on a loop (additive), black smoke rising above, a flash when the bottle breaks
//   SMOKE : a hot jet from the canister, then big shaded puffs (4 different cloud textures) that billow out and rise, thin out and drift away
import * as THREE from 'three';

let sd = 1; const rnd = () => { sd = (sd * 16807) % 2147483647; return sd / 2147483647; };
const hash = (x, y, s) => { let h = (x * 374761393 + y * 668265263 + s * 2147483647) | 0; h = (h ^ (h >>> 13)) * 1274126177; h ^= h >>> 16; return (h >>> 0) / 4294967295; };
const vnoise = (x, y, s) => { const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi, u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf); return (hash(xi, yi, s) * (1 - u) + hash(xi + 1, yi, s) * u) * (1 - v) + (hash(xi, yi + 1, s) * (1 - u) + hash(xi + 1, yi + 1, s) * u) * v; };
const fbm = (x, y, s) => { let a = 0.5, f = 1, t = 0; for (let o = 0; o < 4; o++) { t += a * vnoise(x * f, y * f, s + o * 17); f *= 2; a *= 0.5; } return t; };
const cl = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
function canvasTex(w, h, fn) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'), im = g.createImageData(w, h), d = im.data, o = [0, 0, 0, 0];
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) { fn(x / w, y / h, o); const i = (y * w + x) * 4; d[i] = o[0]; d[i + 1] = o[1]; d[i + 2] = o[2]; d[i + 3] = o[3]; }
  g.putImageData(im, 0, 0); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export class FireSmokeFX {
  constructor(scene, touch) { this.scene = scene; this.touch = !!touch; this.fires = []; this.smokes = []; this.T = null; this._v = new THREE.Vector3(); }
  tex() {
    if (this.T) return this.T; const T = { flame: [], puff: [], glow: null, dark: null };
    for (let k = 0; k < 3; k++) T.flame.push(canvasTex(64, 128, (u, y, o) => {   // a flame tongue: wide at the foot, pointed and ragged at the tip, white-yellow core, orange-red edge
      const v = 1 - y, cx = u - 0.5, warp = (fbm(u * 3 + k * 5, v * 4, 11 + k) - 0.5) * 0.3 * v, hw = 0.36 * Math.pow(1 - v, 0.8) * (0.5 + 0.5 * Math.min(1, v * 7)), d = Math.abs(cx + warp) / Math.max(hw, 0.001);
      let I = Math.pow(cl(1 - d), 1.25) * (1 - Math.pow(v, 1.7)); I *= 0.7 + 0.6 * (fbm(u * 6, v * 5 - k * 3, 31 + k) - 0.35); I = cl(I);
      o[0] = 255; o[1] = Math.round(30 + 215 * Math.pow(I, 1.15)); o[2] = Math.round(5 + 185 * cl((I - 0.45) * 2)); o[3] = Math.round(cl(I * 1.7) * 255);
    }));
    for (let k = 0; k < 4; k++) T.puff.push(canvasTex(128, 128, (u, v, o) => {   // a cloud puff: soft round body eaten into by noise, light from the top left, darker underside
      const cx = u - 0.5, cy = v - 0.5, r = Math.hypot(cx, cy) * 2, n = fbm(u * 4.5 + k * 3.1, v * 4.5 + k * 1.7, 71 + k * 5), n2 = fbm(u * 9 + k, v * 9 - k, 91 + k);
      const a = cl((1 - r) * 1.5 + (n - 0.5) * 1.1 + (n2 - 0.5) * 0.35) * cl((1 - r) * 3.2), sh = cl(0.74 + (n - 0.5) * 0.7 - (cx + cy) * 0.55, 0.42, 1);
      o[0] = Math.round(255 * sh * 0.97); o[1] = Math.round(255 * sh); o[2] = Math.round(255 * sh * 1.02 > 255 ? 255 : 255 * sh * 1.02); o[3] = Math.round(cl(a) * 255);
    }));
    T.glow = canvasTex(64, 64, (u, v, o) => { const r = Math.hypot(u - 0.5, v - 0.5) * 2, n = fbm(u * 5, v * 5, 5), I = cl((1 - r) * 1.3 + (n - 0.5) * 0.5); o[0] = 255; o[1] = Math.round(70 + 110 * I * I); o[2] = 20; o[3] = Math.round(cl(I * I * 1.2) * 255); });
    T.dark = canvasTex(64, 64, (u, v, o) => { const r = Math.hypot(u - 0.5, v - 0.5) * 2, n = fbm(u * 5, v * 5, 9), a = cl((1 - r) * 1.5 + (n - 0.5) * 0.9); o[0] = 18; o[1] = 16; o[2] = 15; o[3] = Math.round(a * a * 255); });   // the burnt black patch under the flames
    return this.T = T;
  }
  // ------------------------------------------------------------------ FIRE
  fire(x, y, z, life = 8, R = 3.1) {
    const T = this.tex(), g = new THREE.Group(), nT = this.touch ? 13 : 24, nS = this.touch ? 4 : 7; sd = (Math.floor(Math.abs(x * 13 + z * 7) * 100) % 2147483) + 5;
    const mk = (map, blending, extra) => new THREE.SpriteMaterial(Object.assign({ map, transparent: true, depthWrite: false, fog: true, blending }, extra));
    const scorch = new THREE.Mesh(new THREE.CircleGeometry(R * 1.02, 24), new THREE.MeshBasicMaterial({ map: T.dark, transparent: true, depthWrite: false, opacity: 0, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 })); scorch.rotation.x = -Math.PI / 2; scorch.position.y = 0.04; g.add(scorch);
    const glow = new THREE.Sprite(mk(T.glow, THREE.AdditiveBlending, { opacity: 0 })); glow.center.set(0.5, 0.5); glow.position.y = 0.5; g.add(glow);
    const flash = new THREE.Sprite(mk(T.glow, THREE.AdditiveBlending, { opacity: 0 })); flash.center.set(0.5, 0.35); g.add(flash);
    const tongues = [], smoke = [];
    for (let i = 0; i < nT; i++) {
      const a = rnd() * 6.283, r = Math.sqrt(rnd()) * (R - 0.35), m = mk(T.flame[i % 3], THREE.AdditiveBlending, { opacity: 0, rotation: (rnd() - 0.5) * 0.25 }), sp = new THREE.Sprite(m); sp.center.set(0.5, 0.04); g.add(sp);
      tongues.push({ sp, m, x: Math.cos(a) * r, z: Math.sin(a) * r, per: 0.55 + rnd() * 0.5, off: rnd() * 3, h: 2.3 + rnd() * 2 * (1 - r / R * 0.5), w: 1.25 + rnd() * 0.9, sw: rnd() * 6.283, edge: r / R });
    }
    for (let i = 0; i < nS; i++) {
      const a = rnd() * 6.283, r = Math.sqrt(rnd()) * (R * 0.55), m = mk(T.puff[i % 4], THREE.NormalBlending, { color: new THREE.Color().setHSL(0.06, 0.05, 0.1 + rnd() * 0.07), opacity: 0, rotation: rnd() * 6.283 }), sp = new THREE.Sprite(m); g.add(sp);
      smoke.push({ sp, m, x: Math.cos(a) * r, z: Math.sin(a) * r, per: 2.6 + rnd() * 1.4, off: rnd() * 4, sw: rnd() * 6.283, spin: (rnd() - 0.5) * 0.4 });
    }
    g.position.set(x, y, z); this.scene.add(g);
    const f = { g, scorch, glow, flash, tongues, smoke, t: 0, life, R, x, y, z }; this.fires.push(f); return f;
  }
  fireAnim(f, dt, cam) {
    f.t += dt; const t = f.t, fin = Math.min(1, t / 0.6), fout = cl((f.life - t) / 1.8), K = fin * fout, cp = cam.position, flick = 0.85 + 0.15 * Math.sin(t * 23) * Math.sin(t * 9.7 + 1.3);
    f.scorch.material.opacity = 0.85 * Math.min(1, t / 0.4) * cl((f.life - t) / 3); f.scorch.visible = f.scorch.material.opacity > 0.01;
    const gs = f.R * 2.5 * (0.6 + 0.4 * fin); f.glow.scale.set(gs, gs * 0.55, 1); f.glow.material.opacity = 0.5 * K * flick;
    { const k = cl(t / 0.45), fo = Math.pow(1 - k, 1.5); f.flash.visible = t < 0.5; const s = (1.5 + 5 * k); f.flash.scale.set(s, s, 1); f.flash.material.opacity = 0.9 * fo; }
    for (const q of f.tongues) {
      const ph = (((t + q.off) / q.per) % 1 + 1) % 1, grow = Math.min(1, ph * 3.2), die = Math.pow(1 - ph, 0.8), s = q.h * (0.35 + 0.65 * grow) * (0.7 + 0.3 * K) * (1 - q.edge * 0.25);
      q.sp.position.set(q.x + Math.sin(t * 3 + q.sw) * 0.12, 0.02 + ph * 0.7, q.z + Math.cos(t * 2.6 + q.sw) * 0.12); q.sp.scale.set(q.w * (0.6 + 0.4 * grow) * (1 - ph * 0.35), s, 1);
      const dx = q.sp.position.x + f.x - cp.x, dz = q.sp.position.z + f.z - cp.z, near = cl((Math.hypot(dx, dz) - 0.8) / 2.2); q.m.opacity = 0.95 * die * K * near * (0.8 + 0.2 * flick); q.m.rotation = Math.sin(t * 2 + q.sw) * 0.12;
    }
    for (const q of f.smoke) {
      const ph = (((t + q.off) / q.per) % 1 + 1) % 1, s = 1.6 + ph * 3.4, y = 1.4 + ph * 5.2;
      q.sp.position.set(q.x + ph * 0.8 + Math.sin(t * 0.5 + q.sw) * 0.3, Math.max(y, s * 0.4), q.z + Math.cos(t * 0.45 + q.sw) * 0.3); q.sp.scale.set(s, s, 1); q.m.rotation += q.spin * dt;
      const dx = q.sp.position.x + f.x - cp.x, dz = q.sp.position.z + f.z - cp.z, dy = q.sp.position.y + f.y - cp.y, near = cl((Math.hypot(dx, dy, dz) - 1.6) / 3); q.m.opacity = 0.5 * Math.sin(Math.PI * Math.min(1, ph * 1.15)) * cl(t / 1.2) * cl((f.life + 1.5 - t) / 2.5) * near;
    }
    return t < f.life + 1.5;
  }
  fireEnd(f) { this.scene.remove(f.g); f.g.traverse((o) => { if (o.material) o.material.dispose(); if (o.isMesh && o.geometry) o.geometry.dispose(); }); const i = this.fires.indexOf(f); if (i >= 0) this.fires.splice(i, 1); }
  // ------------------------------------------------------------------ SMOKE
  smoke(x, y, z, life = 15) {
    const T = this.tex(), g = new THREE.Group(), n = this.touch ? 15 : 28; sd = (Math.floor(Math.abs(x * 13 + z * 7) * 100) % 2147483) + 11; const puffs = [];
    for (let i = 0; i < n; i++) {
      const jet = i < 4, a = rnd() * 6.283, r = jet ? rnd() * 0.5 : Math.sqrt(rnd()) * 3.9, c = new THREE.Color().setHSL(0.58, 0.05, 0.62 + rnd() * 0.22);
      const m = new THREE.SpriteMaterial({ map: T.puff[i % 4], color: c, transparent: true, opacity: 0, depthWrite: false, fog: true, rotation: rnd() * 6.283 }), sp = new THREE.Sprite(m); g.add(sp);
      puffs.push({ sp, m, t0: jet ? i * 0.12 : 0.25 + rnd() * 2.2, ex: Math.cos(a) * r, ez: Math.sin(a) * r, ey: jet ? 2.2 + rnd() * 1.6 : 0.4 + rnd() * 3.2, s1: jet ? 2.4 + rnd() : 3.4 + rnd() * 3.8, spin: (rnd() - 0.5) * 0.22, wob: rnd() * 6.283, jet });
    }
    g.position.set(x, y, z); this.scene.add(g); const s = { g, puffs, t: 0, life, x, y, z }; this.smokes.push(s); return s;
  }
  smokeAnim(s, dt, cam) {
    s.t += dt; const cp = cam.position;
    for (const p of s.puffs) {
      const a = s.t - p.t0; if (a < 0) { p.m.opacity = 0; continue; }
      const k = Math.min(1, a / (p.jet ? 1.3 : 3)), e = 1 - Math.pow(1 - k, 3), fade = s.t > s.life - 4 ? Math.max(0, (s.life - s.t) / 4) : 1, sz = (p.jet ? 1.2 : 1.6) + p.s1 * e;
      const px = p.ex * e + Math.sin(s.t * 0.4 + p.wob) * 0.3 + s.t * 0.012, pz = p.ez * e + Math.cos(s.t * 0.35 + p.wob) * 0.3, py = Math.max(0.3 + p.ey * e + a * 0.06, sz * 0.36);
      p.sp.position.set(px, py, pz); p.sp.scale.set(sz, sz * 0.92, 1); p.m.rotation += p.spin * dt;
      const dx = px + s.x - cp.x, dy = py + s.y - cp.y, dz = pz + s.z - cp.z, near = cl((Math.hypot(dx, dy, dz) - 1.2) / 3.2);   // a puff right in front of the camera fades out instead of blanking the screen
      p.m.opacity = Math.min(0.95, a * 1.2) * 0.62 * fade * near * (p.jet ? 0.8 : 1);
    }
    return s.t < s.life;
  }
  smokeEnd(s) { this.scene.remove(s.g); for (const p of s.puffs) p.m.dispose(); const i = this.smokes.indexOf(s); if (i >= 0) this.smokes.splice(i, 1); }
  update(dt, cam) {
    for (let i = this.smokes.length - 1; i >= 0; i--) if (!this.smokeAnim(this.smokes[i], dt, cam)) this.smokeEnd(this.smokes[i]);
    for (let i = this.fires.length - 1; i >= 0; i--) if (!this.fireAnim(this.fires[i], dt, cam)) this.fireEnd(this.fires[i]);
  }
}
