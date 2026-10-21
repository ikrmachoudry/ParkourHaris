// Visual dressing: sky, water/lava/void, scenery, HARIS branding, particles. (Client only - needs DOM canvas.)
import * as THREE from 'three';
import { Batch } from './world.js';

export const VIS = {
  fun: { top: '#35a7ff', horizon: '#e8fbff', bottom: '#fff6d8', fog: '#d9f4ff', fogNear: 120, fogFar: 640, sun: '#fff4d6', sunPos: [-40, 90, -60], sunI: 2.7, hemiSky: '#d4ecff', hemiGround: '#bfe8a0', hemiI: 1.05, exp: 1.05, waterA: '#37d7e8', waterB: '#1388c9', water: 'water', env: 0.6 },
  jungle: { top: '#3a9be8', horizon: '#dff6c9', bottom: '#f3ffd9', fog: '#cfeec0', fogNear: 70, fogFar: 380, sun: '#fff3c8', sunPos: [-50, 85, -40], sunI: 2.6, hemiSky: '#cfe9ff', hemiGround: '#6fbf5a', hemiI: 1.05, exp: 1.05, waterA: '#37d7e8', waterB: '#1388c9', water: 'water', env: 0.55 },
  annoy: { top: '#4a3aa8', horizon: '#ffb3d1', bottom: '#ffe9f3', fog: '#f5b8dc', fogNear: 90, fogFar: 520, sun: '#ffe0c8', sunPos: [-40, 70, -60], sunI: 2.4, hemiSky: '#e8d6ff', hemiGround: '#ffb7dc', hemiI: 1.05, exp: 1.05, waterA: '#7fe8ff', waterB: '#2b9be8', water: 'water', env: 0.6 },
  maze: { top: '#5cc8ff', horizon: '#ffe0f0', bottom: '#fff4fb', fog: '#ffd6ea', fogNear: 90, fogFar: 520, sun: '#fff0d8', sunPos: [-40, 90, -60], sunI: 2.7, hemiSky: '#ffe6f6', hemiGround: '#ffb7dc', hemiI: 1.1, exp: 1.05, waterA: '#7fe8ff', waterB: '#2b9be8', water: 'water', env: 0.6 },
  arena: { top: '#3a9be8', horizon: '#dff6c9', bottom: '#f3ffd9', fog: '#cfeec0', fogNear: 70, fogFar: 380, sun: '#fff3c8', sunPos: [-50, 85, -40], sunI: 2.6, hemiSky: '#cfe9ff', hemiGround: '#6fbf5a', hemiI: 1.05, exp: 1.05, waterA: '#37d7e8', waterB: '#1388c9', water: 'water', env: 0.55 },
  gta: { top: '#2f6fcf', horizon: '#ffd7a3', bottom: '#fde8c8', fog: '#ecd0a8', fogNear: 180, fogFar: 950, sun: '#ffc98a', sunPos: [-75, 46, 62], sunI: 3.6, hemiSky: '#a9c8f0', hemiGround: '#a08662', hemiI: 0.75, exp: 1.0, waterA: '#37c4e8', waterB: '#1388c9', water: 'water', env: 0.7 },
  hunt: { top: '#2f8fd8', horizon: '#d6f0b8', bottom: '#eefad0', fog: '#bfe3a8', fogNear: 60, fogFar: 340, sun: '#fff0c0', sunPos: [-50, 80, -40], sunI: 2.5, hemiSky: '#cfe9ff', hemiGround: '#5fae52', hemiI: 1.05, exp: 1.02, waterA: '#37d7e8', waterB: '#1388c9', water: 'water', env: 0.55 },
  quest: { top: '#3a9be8', horizon: '#dff6c9', bottom: '#f3ffd9', fog: '#cfeec0', fogNear: 70, fogFar: 380, sun: '#fff3c8', sunPos: [-50, 85, -40], sunI: 2.6, hemiSky: '#cfe9ff', hemiGround: '#6fbf5a', hemiI: 1.05, exp: 1.05, waterA: '#37d7e8', waterB: '#1388c9', water: 'water', env: 0.55 },
};

// ---------------------------------------------------------------- textures
let fontPromise = null;
export function ensureFont() {
  if (!fontPromise) {
    fontPromise = (async () => {
      try {
        await Promise.race([
          Promise.all([document.fonts.load('400 100px "Lilita One"'), document.fonts.load('400 100px "Fredoka One"'), document.fonts.load('400 100px "Noto Nastaliq Urdu"', '\u0639\u06a9\u0631\u0645\u06c1')]),
          new Promise((r) => setTimeout(r, 2500)),
        ]);
      } catch { /* fall back to system fonts */ }
    })();
  }
  return fontPromise;
}
export const FONT = '"Lilita One","Fredoka One","Baloo 2","Arial Rounded MT Bold","Trebuchet MS",Impact,Arial,sans-serif';

export function harisTexture(text = 'HARIS', sub = null, grad = ['#fff7a8', '#ffc83d', '#ff7a1a']) {
  const cv = document.createElement('canvas'); cv.width = 1024; cv.height = sub ? 512 : 400;
  const g = cv.getContext('2d');
  g.textAlign = 'center'; g.textBaseline = 'middle';
  let size = 300; g.font = `${size}px ${FONT}`;
  while (g.measureText(text).width > 900 && size > 80) { size -= 10; g.font = `${size}px ${FONT}`; }
  const cy = sub ? 220 : 200;
  g.lineJoin = 'round';
  // soft glow
  g.shadowColor = 'rgba(255,190,60,0.9)'; g.shadowBlur = 40; g.lineWidth = 46; g.strokeStyle = 'rgba(255,170,40,0.35)'; g.strokeText(text, 512, cy);
  g.shadowBlur = 0;
  // chunky outline
  g.lineWidth = 40; g.strokeStyle = '#1b0f4a'; g.strokeText(text, 512, cy);
  g.lineWidth = 18; g.strokeStyle = '#ffffff'; g.strokeText(text, 512, cy);
  // 3D drop
  g.fillStyle = '#b0420b'; for (let i = 14; i > 0; i -= 2) g.fillText(text, 512, cy + i);
  const gr = g.createLinearGradient(0, cy - size / 2, 0, cy + size / 2);
  gr.addColorStop(0, grad[0]); gr.addColorStop(0.55, grad[1]); gr.addColorStop(1, grad[2]);
  g.fillStyle = gr; g.fillText(text, 512, cy);
  g.globalCompositeOperation = 'source-atop';
  g.fillStyle = 'rgba(255,255,255,0.35)'; g.fillRect(0, cy - size / 2, 1024, size * 0.18);
  g.globalCompositeOperation = 'source-over';
  if (sub) {
    g.font = `90px ${FONT}`; g.lineWidth = 16; g.strokeStyle = '#1b0f4a'; g.strokeText(sub, 512, 440);
    g.fillStyle = '#ffffff'; g.fillText(sub, 512, 440);
  }
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  return tex;
}

export function bannerTexture(text, c1 = '#ff3b6b', c2 = '#ffffff') {
  const cv = document.createElement('canvas'); cv.width = 1024; cv.height = 256;
  const g = cv.getContext('2d');
  g.fillStyle = c1; g.fillRect(0, 0, 1024, 256);
  const s = 32; g.fillStyle = c2;
  for (let x = 0; x < 1024; x += s) for (let y = 0; y < 256; y += s) if (((x + y) / s) % 2 === 0 && (y < s || y >= 256 - s)) g.fillRect(x, y, s, s);
  g.font = `150px ${FONT}`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.lineJoin = 'round';
  g.lineWidth = 26; g.strokeStyle = '#1b0f4a'; g.strokeText(text, 512, 132); g.fillStyle = '#fff'; g.fillText(text, 512, 132);
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8; return tex;
}

export function arrowTexture() {
  const cv = document.createElement('canvas'); cv.width = 128; cv.height = 128;
  const g = cv.getContext('2d');
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, 128, 128);
  g.fillStyle = 'rgba(0,0,0,0.28)';
  g.beginPath(); g.moveTo(64, 14); g.lineTo(108, 70); g.lineTo(80, 70); g.lineTo(80, 112); g.lineTo(48, 112); g.lineTo(48, 70); g.lineTo(20, 70); g.closePath(); g.fill();
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}

function softTexture(inner = 'rgba(255,255,255,1)', outer = 'rgba(255,255,255,0)') {
  const cv = document.createElement('canvas'); cv.width = cv.height = 128;
  const g = cv.getContext('2d'); const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, inner); gr.addColorStop(1, outer); g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
}

// ---------------------------------------------------------------- sky
export function makeSky(v) {
  const sunDir = new THREE.Vector3(...v.sunPos).normalize();
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: {
      top: { value: new THREE.Color(v.top) }, horizon: { value: new THREE.Color(v.horizon) }, bottom: { value: new THREE.Color(v.bottom) },
      sunDir: { value: sunDir }, sunColor: { value: new THREE.Color(v.sun) }, moonDir: { value: new THREE.Vector3(0, -1, 0) }, night: { value: 0 },
    },
    vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position.z = gl_Position.w; }',
    fragmentShader: `uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunColor; uniform vec3 moonDir; uniform float night; varying vec3 vD;
      void main(){ float h = vD.y; vec3 c = h>0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.45));
        float s = max(dot(normalize(vD), sunDir), 0.0); c += sunColor * (pow(s, 600.0)*3.0 + pow(s, 24.0)*0.35 + pow(s, 6.0)*0.12);
        if(night > 0.01){ vec3 nd = normalize(vD); vec3 p = nd*72.0; vec3 id = floor(p); vec3 f = fract(p)-0.5;
          float hs = fract(sin(dot(id, vec3(12.9898,78.233,45.164)))*43758.5453); float tw = 0.55+0.45*fract(hs*91.7);
          float star = step(0.982, hs) * smoothstep(0.3, 0.0, length(f)) * tw * smoothstep(0.02, 0.3, nd.y);
          float m = dot(nd, moonDir); float disc = smoothstep(0.9989, 0.9992, m);
          c += night * (vec3(1.0,0.97,0.9)*star*1.6 + vec3(0.93,0.95,1.0)*disc*1.5 + vec3(0.45,0.55,0.9)*pow(max(m,0.0), 160.0)*0.28); }
        gl_FragColor = vec4(c, 1.0); }`,
  });
  const m = new THREE.Mesh(new THREE.SphereGeometry(900, 32, 16), mat);
  m.frustumCulled = false; m.renderOrder = -10;
  return m;
}

// ---------------------------------------------------------------- water / lava / void
export function makeWater(v, y) {
  const fog = new THREE.Color(v.fog);
  const kind = v.water === 'lava' ? 1 : v.water === 'grid' ? 2 : 0;
  const mat = new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 }, cA: { value: new THREE.Color(v.waterA) }, cB: { value: new THREE.Color(v.waterB) }, fogC: { value: fog }, fogN: { value: v.fogNear }, fogF: { value: v.fogFar }, kind: { value: kind } },
    vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }',
    fragmentShader: `uniform float time; uniform vec3 cA; uniform vec3 cB; uniform vec3 fogC; uniform float fogN; uniform float fogF; uniform float kind; varying vec3 vW;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      void main(){
        vec2 p = vW.xz; vec3 col;
        if(kind < 0.5){ float w = vn(p*0.25+vec2(time*0.25,time*0.15))*0.6 + vn(p*0.7-vec2(time*0.4,0.0))*0.4;
          col = mix(cB, cA, w); float ln = smoothstep(0.78,0.95, sin(p.x*0.5+time*1.2+vn(p*0.3)*6.0)*0.5+0.5)*0.25; col += ln; col += pow(vn(p*1.6+time*0.5),6.0)*0.35; }
        else if(kind < 1.5){ float w = vn(p*0.18+vec2(time*0.07,0.0))*0.6 + vn(p*0.55+time*0.1)*0.4; float cr = smoothstep(0.35,0.6,w);
          col = mix(cB*1.25, cA, cr); col = mix(col, vec3(0.16,0.03,0.02), smoothstep(0.62,0.78,vn(p*0.35-time*0.05))*0.85); col += cA*0.25*(0.5+0.5*sin(time*2.0+p.x*0.3)); }
        else { vec2 g = abs(fract(p*0.125)-0.5); float l = smoothstep(0.47,0.5,max(g.x,g.y)); col = cA + cB*l*1.6; col += cB*0.25*pow(vn(p*0.05+time*0.1),2.0); }
        float d = length(vW - cameraPosition); float f = smoothstep(fogN, fogF, d);
        gl_FragColor = vec4(mix(col, fogC, f), 1.0);
      }`,
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1600, 1600), mat);
  m.rotation.x = -Math.PI / 2; m.position.y = y; m.frustumCulled = false; m.renderOrder = -5;
  m.userData.mat = mat;
  return m;
}

// ---------------------------------------------------------------- particles
export class Particles {
  constructor(max = 500, opt = {}) {
    this.max = max; this.n = 0; this.gr = new Float32Array(max); this.am = new Float32Array(max).fill(1);
    this.pos = new Float32Array(max * 3); this.col = new Float32Array(max * 3); this.size = new Float32Array(max); this.alpha = new Float32Array(max);
    this.vel = new Float32Array(max * 3); this.life = new Float32Array(max); this.maxLife = new Float32Array(max); this.grav = new Float32Array(max); this.s0 = new Float32Array(max);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    g.setDrawRange(0, 0);
    this.mat = new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, blending: opt.additive ? THREE.AdditiveBlending : THREE.NormalBlending, uniforms: { scale: { value: 600 } },
      vertexShader: 'attribute float size; attribute float alpha; attribute vec3 color; varying float vA; varying vec3 vC; uniform float scale; void main(){ vA=alpha; vC=color; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = size*scale/max(1.0,-mv.z); gl_Position = projectionMatrix*mv; }',
      fragmentShader: 'varying float vA; varying vec3 vC; void main(){ vec2 c = gl_PointCoord-0.5; float d = length(c); if(d>0.5) discard; gl_FragColor = vec4(vC, vA*smoothstep(0.5,0.1,d)); }',
    });
    this.points = new THREE.Points(g, this.mat); this.points.frustumCulled = false; this.points.renderOrder = 5;
    this.geo = g; this._c = new THREE.Color();
  }
  emit(x, y, z, count, o = {}) {
    const col = this._c.set(o.color ?? '#ffffff');
    for (let k = 0; k < count; k++) {
      const i = this.n < this.max ? this.n++ : Math.floor(Math.random() * this.max);
      const a = Math.random() * Math.PI * 2, sp = (o.speed ?? 3) * (0.3 + Math.random() * 0.9), up = o.up ?? 3;
      const j = i * 3;
      this.pos[j] = x + (Math.random() - 0.5) * (o.spread ?? 0.3); this.pos[j + 1] = y; this.pos[j + 2] = z + (Math.random() - 0.5) * (o.spread ?? 0.3);
      this.vel[j] = Math.cos(a) * sp + (o.vx ?? 0); this.vel[j + 1] = up * (0.4 + Math.random() * 0.9); this.vel[j + 2] = Math.sin(a) * sp + (o.vz ?? 0);
      this.gr[i] = o.grow ?? 0; this.am[i] = o.alpha ?? 1;
      const rc = o.rainbow ? this._c.setHSL(Math.random(), 0.9, 0.6) : col;
      this.col[j] = rc.r; this.col[j + 1] = rc.g; this.col[j + 2] = rc.b;
      this.life[i] = this.maxLife[i] = (o.life ?? 0.6) * (0.6 + Math.random() * 0.8);
      this.s0[i] = (o.size ?? 0.35) * (0.6 + Math.random() * 0.8); this.size[i] = this.s0[i];
      this.grav[i] = o.gravity ?? 9; this.alpha[i] = 0;
    }
  }
  update(dt) {
    for (let i = 0; i < this.n; i++) {
      if (this.life[i] <= 0) { this.alpha[i] = 0; this.size[i] = 0; continue; }
      this.life[i] -= dt; const j = i * 3;
      this.vel[j + 1] -= this.grav[i] * dt;
      this.pos[j] += this.vel[j] * dt; this.pos[j + 1] += this.vel[j + 1] * dt; this.pos[j + 2] += this.vel[j + 2] * dt;
      const k = Math.max(0, this.life[i] / this.maxLife[i]);
      if (this.gr[i] > 0) { const age = 1 - k; this.alpha[i] = this.am[i] * Math.min(1, age * 7) * Math.min(1, k * 1.8); this.size[i] = this.s0[i] * (0.35 + age * this.gr[i]); }   // smoke: swells as it rises, fades in and out
      else { this.alpha[i] = this.am[i] * Math.min(1, k * 1.6); this.size[i] = this.s0[i] * (0.4 + 0.6 * k); }
    }
    this.geo.setDrawRange(0, this.n);
    this.geo.attributes.position.needsUpdate = true; this.geo.attributes.color.needsUpdate = true;
    this.geo.attributes.size.needsUpdate = true; this.geo.attributes.alpha.needsUpdate = true;
  }
  setScale(h) { this.mat.uniforms.scale.value = h * 0.9; }
}

// Ambient floating particles around the camera (snow / embers / sparkles / glow dust)
export class Ambient {
  constructor(kind, n = 350) {
    this.kind = kind; this.n = n;
    const pos = new Float32Array(n * 3); this.seed = new Float32Array(n * 3);
    for (let i = 0; i < n * 3; i++) this.seed[i] = Math.random();
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const colors = { fun: '#fff6a8', jungle: '#fffbb0', quest: '#fff6c0', hunt: '#fff6c0', gta: '#fffbe0', maze: '#ffe6f6', annoy: '#ffe6f6' };
    this.mat = new THREE.PointsMaterial({ color: colors[kind] || '#fff', size: kind === 'frost' ? 0.28 : 0.22, transparent: true, opacity: 0.85, depthWrite: false, map: softTexture(), blending: kind === 'neon' || kind === 'canyon' ? THREE.AdditiveBlending : THREE.NormalBlending });
    this.points = new THREE.Points(g, this.mat); this.points.frustumCulled = false;
    this.pos = pos;
  }
  update(t, cam) {
    const W = 70, Hh = 36, k = this.kind, p = this.pos, s = this.seed;
    for (let i = 0; i < this.n; i++) {
      const j = i * 3;
      let x = s[j] * W, y = s[j + 1] * Hh, z = s[j + 2] * W;
      if (k === 'frost') { y = Hh - ((t * (2 + s[j] * 2) + s[j + 1] * Hh) % Hh); x += Math.sin(t * 0.7 + i) * 1.2; }
      else if (k === 'canyon') { y = (t * (1.5 + s[j] * 2) + s[j + 1] * Hh) % Hh; x += Math.sin(t * 0.9 + i) * 0.8; }
      else { y += Math.sin(t * 0.6 + i) * 0.8; x += Math.cos(t * 0.4 + i * 1.3) * 0.8; }
      p[j] = cam.x + (((x - cam.x) % W) + W) % W - W / 2;
      p[j + 1] = cam.y - Hh / 2 + y;
      p[j + 2] = cam.z + (((z - cam.z) % W) + W) % W - W / 2;
    }
    this.points.geometry.attributes.position.needsUpdate = true;
  }
}

// ---------------------------------------------------------------- scenery
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

export function buildScenery(scene, key, info, world) {
  const v = VIS[key], group = new THREE.Group(); group.name = 'scenery';
  const R = rng(key.length * 9973 + 17), main = new Batch(), glow = new Batch();
  const len = info.length, end = -len - 40;
  const wy = 0;
  const sideOff = 82; // keep decorations outside the park fence
  const dyn = []; // things animated each frame

  const sideX = (min, max) => (R() < 0.5 ? -1 : 1) * (min + sideOff + R() * (max - min));
  const pickc = (arr) => arr[Math.floor(R() * arr.length)];
  const sph = (r, w = 16, h = 10) => new THREE.SphereGeometry(r, w, h);
  const cyl = (rt, rb, h, s = 14) => new THREE.CylinderGeometry(rt, rb, h, s);
  const cone = (r, h, s = 14) => new THREE.ConeGeometry(r, h, s);

  if (key === 'fun') {
    for (let i = 0; i < 46; i++) { // circus tents, flag poles, striped towers
      const z = 70 - R() * (len + 200), x = sideX(26, 140), s = 1 + R() * 1.8, t = R(), y0 = wy - 1;
      if (t < 0.4) { // big-top tent
        const c1 = pickc(['#ff4d6d', '#3ec6e0', '#ffd23f', '#8b5cf6']);
        main.add(cyl(6 * s, 6 * s, 5 * s, 16), x, y0 + 2.5 * s, z, c1);
        main.add(cone(6.8 * s, 5 * s, 16), x, y0 + 7.5 * s, z, '#ffffff');
        main.add(cone(1.1 * s, 3 * s, 8), x, y0 + 11 * s, z, c1);
        main.add(cyl(0.12 * s, 0.12 * s, 4 * s, 4), x, y0 + 14 * s, z, '#ffffff');
      } else if (t < 0.7) { // striped tower
        for (let k = 0; k < 8; k++) main.add(cyl(2.2 * s, 2.2 * s, 2.4 * s, 12), x, y0 + (1.2 + k * 2.4) * s, z, k % 2 ? '#ffffff' : '#ff4d6d');
        main.add(cone(3 * s, 4 * s, 12), x, y0 + 21 * s, z, '#ffd23f');
      } else { // lamp post with glowing bulbs
        main.add(cyl(0.3 * s, 0.4 * s, 9 * s, 6), x, y0 + 4.5 * s, z, '#5b2a86');
        glow.add(sph(1.1 * s, 10, 8), x, y0 + 9.6 * s, z, pickc(['#ffe27a', '#ff9ccb', '#9cf0ff']));
      }
    }
    // spinning ferris wheels
    [[-120, -len * 0.25], [140, -len * 0.62], [-130, -len * 0.9]].forEach(([x, z], k) => {
      const wheel = new THREE.Group(); wheel.position.set(x, wy + 34, z); wheel.rotation.y = k % 2 ? 0.5 : -0.5;
      const rim = new THREE.Mesh(new THREE.TorusGeometry(30, 0.9, 8, 48), new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.4 })); wheel.add(rim);
      const spokeMat = new THREE.MeshStandardMaterial({ color: '#ff4d6d' });
      for (let i = 0; i < 8; i++) { const sp = new THREE.Mesh(cyl(0.35, 0.35, 60, 5), spokeMat); sp.rotation.z = i * Math.PI / 8; wheel.add(sp); }
      const pods = [];
      for (let i = 0; i < 12; i++) {
        const a = i / 12 * Math.PI * 2, pod = new THREE.Mesh(new THREE.BoxGeometry(4.4, 3.4, 3.4), new THREE.MeshStandardMaterial({ color: pickc(['#ffd23f', '#3ec6e0', '#ff4d6d', '#8bd450']), roughness: 0.35 }));
        pod.position.set(Math.cos(a) * 30, Math.sin(a) * 30 - 2, 0); wheel.add(pod); pods.push([pod, a]);
      }
      const legM = new THREE.MeshStandardMaterial({ color: '#5b2a86' });
      for (const sx of [-1, 1]) { const leg = new THREE.Mesh(cyl(1.2, 1.6, 44, 6), legM); leg.position.set(sx * 11, -20, 0); leg.rotation.z = sx * -0.28; wheel.add(leg); }
      group.add(wheel);
      dyn.push((t) => { const r = t * 0.12 * (k % 2 ? -1 : 1); rim.rotation.z = r; wheel.children.forEach((ch) => { if (ch.geometry && ch.geometry.type === 'CylinderGeometry' && ch.position.x === 0 && ch.position.y === 0) ch.rotation.z = (ch.userData.b ??= ch.rotation.z) + r; }); pods.forEach(([pod, a]) => pod.position.set(Math.cos(a + r) * 30, Math.sin(a + r) * 30 - 2, 0)); });
    });
    // balloons
    for (let i = 0; i < 26; i++) {
      const b = new THREE.Group(), c = pickc(['#ff5fa8', '#ffd84d', '#4dd0ff', '#9b7bff', '#5ee89a']);
      const body = new THREE.Mesh(sph(1.6, 16, 12), new THREE.MeshStandardMaterial({ color: c, roughness: 0.25 })); body.scale.y = 1.2;
      const str = new THREE.Mesh(cyl(0.03, 0.03, 4, 4), new THREE.MeshBasicMaterial({ color: '#ffffff' })); str.position.y = -3;
      b.add(body, str); b.position.set(sideX(14, 80), 8 + R() * 34, 40 - R() * (len + 120)); b.userData.ph = R() * 6;
      group.add(b); dyn.push((t) => { b.position.y += Math.sin(t * 0.8 + b.userData.ph) * 0.004; b.rotation.z = Math.sin(t * 0.6 + b.userData.ph) * 0.08; });
    }
  } else if (key === 'jungle') {
    // far side of the walls: a ring of big trees + misty mountains + clouds (seen from the hill top)
    for (let i = 0; i < 90; i++) {
      const a = R() * Math.PI * 2, rx = 120 + R() * 90, rz = 150 + R() * 90, x = Math.cos(a) * rx, z = -108 + Math.sin(a) * rz, s2 = 1.4 + R() * 2.4;
      main.add(cyl(0.7 * s2, 1.0 * s2, 9 * s2, 6), x, 4.5 * s2, z, '#6b4423');
      main.add(sph(4.4 * s2, 8, 6), x, 11 * s2, z, pickc(['#2e9b3f', '#3fb14c', '#27863a']));
    }
    for (let i = 0; i < 16; i++) {
      const a = i / 16 * Math.PI * 2 + R() * 0.3, x = Math.cos(a) * (260 + R() * 60), z = -108 + Math.sin(a) * (300 + R() * 60), s2 = 1 + R() * 1.4;
      main.add(cone(40 * s2, 70 * s2, 7), x, 30 * s2, z, pickc(['#5f9a7a', '#6aa88a', '#4f8a6c'])); main.add(cone(14 * s2, 20 * s2, 7), x, 66 * s2, z, '#ffffff');
    }
    for (let i = 0; i < 26; i++) {
      const c = new THREE.Group(), x = (R() - 0.5) * 520, z = -108 + (R() - 0.5) * 520, y = 85 + R() * 50, k = 3 + Math.floor(R() * 3);
      for (let q = 0; q < k; q++) { const m = new THREE.Mesh(sph(7 + R() * 6, 10, 8), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.9, fog: false })); m.position.set(q * 9 - k * 4, R() * 3, R() * 5); m.scale.y = 0.55; c.add(m); }
      c.position.set(x, y, z); c.userData.ph = R() * 6; group.add(c);
      dyn.push((t) => { c.position.x += 0.012 * (1 + (c.userData.ph % 1)); if (c.position.x > 300) c.position.x = -300; });
    }
  } else if (key === 'gta') {
    const cloudMat = scene.userData.cloudMat = new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.92, fog: false });   // shared: the day/night cycle tints it
    for (let i = 0; i < 46; i++) { // clouds over the whole island
      const c = new THREE.Group(), x = (R() - 0.5) * 900, z = (R() - 0.5) * 900, y = 130 + R() * 70, k = 3 + Math.floor(R() * 3);
      for (let q = 0; q < k; q++) { const m = new THREE.Mesh(sph(8 + R() * 8, 10, 8), cloudMat); m.position.set(q * 11 - k * 5, R() * 4, R() * 6); m.scale.y = 0.6; c.add(m); }
      c.position.set(x, y, z); c.userData.ph = R() * 6; group.add(c);
      dyn.push((t) => { c.position.x += 0.02 * (1 + (c.userData.ph % 1)); if (c.position.x > 480) c.position.x = -480; });
    }
  } else if (key === 'quest' || key === 'hunt' || key === 'maze' || key === 'annoy') {
    // clouds drifting along the whole road
    for (let i = 0; i < 40; i++) {
      const c = new THREE.Group(), x = (R() - 0.5) * 420, z = 40 - R() * (key === 'maze' ? 860 : 640), y = 70 + R() * 50, k = 3 + Math.floor(R() * 3);
      for (let q = 0; q < k; q++) { const m = new THREE.Mesh(sph(6 + R() * 6, 10, 8), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.9, fog: false })); m.position.set(q * 8 - k * 4, R() * 3, R() * 5); m.scale.y = 0.55; c.add(m); }
      c.position.set(x, y, z); c.userData.ph = R() * 6; group.add(c);
      dyn.push((t) => { c.position.x += 0.012 * (1 + (c.userData.ph % 1)); if (c.position.x > 260) c.position.x = -260; });
    }
  }

  if (key === 'maze') { // candy park: giant lollipops, donuts and ice-cream cones standing in the sea
    const cols = ['#ff6b9d', '#ffd23f', '#4cc9f0', '#80ed99', '#b58cff', '#ff9f1c'];
    for (let i = 0; i < 100; i++) {
      const z = 30 - i * 8.6 - R() * 4, side = i % 2 ? 1 : -1, x = side * (24 + R() * 55), c = cols[Math.floor(R() * cols.length)], k = Math.floor(R() * 3), sc = 0.8 + R() * 0.9;
      if (k === 0) { main.add(cyl(0.6 * sc, 0.6 * sc, 16 * sc, 8), x, -3 + 8 * sc, z, '#ffffff'); main.add(sph(4.4 * sc, 18, 12), x, -3 + 17 * sc, z, c); main.add(new THREE.TorusGeometry(3.0 * sc, 0.55 * sc, 8, 20), x, -3 + 17 * sc, z + 3.4 * sc, '#ffffff'); }
      else if (k === 1) { main.add(new THREE.TorusGeometry(5 * sc, 2.2 * sc, 10, 22).rotateX(Math.PI / 2), x, -2.2 + 2.2 * sc, z, '#e8b878'); main.add(new THREE.TorusGeometry(5 * sc, 1.7 * sc, 10, 22).rotateX(Math.PI / 2), x, -2.2 + 3.1 * sc, z, c); }
      else { main.add(cone(3.4 * sc, 9 * sc, 14).rotateX(Math.PI), x, -3 + 4.5 * sc, z, '#e8b878'); main.add(sph(3.8 * sc, 16, 10), x, -3 + 10 * sc, z, c); main.add(sph(1.2 * sc, 10, 8), x, -3 + 14 * sc, z, '#ff3d68'); }
    }
  }

  const m1 = main.build(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55 }), 60);
  if (m1) group.add(m1);
  const m2 = glow.build(new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false }), 60);
  if (m2) group.add(m2);

  if (key !== 'jungle' && key !== 'quest' && key !== 'arena' && key !== 'hunt' && key !== 'gta') {
  // ---- HARIS branding (never touches gameplay) ----------------------------------------
  const brand = new THREE.Group(); brand.name = 'brand'; group.add(brand);
  const tex = harisTexture('HARIS', 'MADE THIS GAME');
  const sp = info.finishPlat;
  // 3) start & finish arches with banners
  const mk = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.4 });
  const arch = (z, y, w, text, c1) => {
    const g = new THREE.Group(); g.position.set(0, y, z);
    const pm = mk('#2b1c6b');
    for (const sx of [-1, 1]) { const p = new THREE.Mesh(new THREE.BoxGeometry(1.2, 9, 1.2), pm); p.position.set(sx * w / 2, 4.5, 0); p.castShadow = true; g.add(p); }
    const b = new THREE.Mesh(new THREE.PlaneGeometry(w, w / 4), new THREE.MeshBasicMaterial({ map: bannerTexture(text, c1), toneMapped: false, side: THREE.DoubleSide }));
    b.position.set(0, 8.6, 0.05); g.add(b);
    const top = new THREE.Mesh(new THREE.BoxGeometry(w + 1.2, 0.6, 1.2), pm); top.position.set(0, 10.4, 0); g.add(top);
    brand.add(g);
  };
  arch(info.startArch, 0, 20, 'START', '#22c55e');
  arch(info.finishZ + 0.01, sp.top, 19, 'FINISH', '#ef233c');
  // the ONLY HARIS advert: one big sign floating above the final gate
  const board = new THREE.Mesh(new THREE.PlaneGeometry(30, 15), new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false, depthWrite: false, fog: false }));
  board.position.set(0, sp.top + 21, info.finishZ - 0.5); brand.add(board);
  dyn.push((t) => { board.position.y = sp.top + 21 + Math.sin(t * 1.2) * 0.4; });

  }

  scene.add(group);
  return {
    group,
    update(t, camPos) {
      for (const f of dyn) f(t);
      if (group.userData.stars) group.userData.stars.position.copy(camPos);
    },
    dispose() {
      scene.remove(group);
      group.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) { const ms = Array.isArray(o.material) ? o.material : [o.material]; ms.forEach((m) => { if (m.map) m.map.dispose(); m.dispose(); }); } });
    },
  };
}
