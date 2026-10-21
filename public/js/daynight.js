// Day / night cycle for Haris City: sun and moon travel across the sky, the sky / fog / water / light colours follow a table of key hours,
// stars and a moon come out, windows and lamp pools light up. The clock comes from the wall clock, so every player in a room sees the same time.
// A full day = DAY_MINUTES real minutes (40: a game hour is about 1.7 minutes), so the light changes slowly. Change DAY_MINUTES to make the day longer or shorter.
import * as THREE from 'three';

export const DAY_MINUTES = 10;
export const gameHour = (now = Date.now()) => ((now / 60000) * (24 / DAY_MINUTES)) % 24;

const C = (s) => new THREE.Color(s);
const NIGHT = { top: '#04060f', hor: '#0d1432', bot: '#080c1e', fog: '#0b1130', sun: '#000000', sunI: 0, hem: '#243868', gnd: '#0e111c', hi: 0.4, env: 0.12 };
// key hours -> look (sunI is the strength of the sun light when it is high enough above the horizon)
const KEYS = [
  [0, NIGHT],
  [4.8, NIGHT],
  [5.7, { top: '#141f4a', hor: '#5a4a7a', bot: '#1e2040', fog: '#3c3a60', sun: '#ff9a6a', sunI: 0.9, hem: '#4a5888', gnd: '#2a2a36', hi: 0.46, env: 0.2 }],
  [6.4, { top: '#4a80d4', hor: '#ffb070', bot: '#f0c8a0', fog: '#e6b890', sun: '#ff9a50', sunI: 1.9, hem: '#9db5e0', gnd: '#8a7058', hi: 0.58, env: 0.4 }],
  [7.6, { top: '#2f6fd0', hor: '#d6e8ff', bot: '#eaf2ff', fog: '#d8e4ee', sun: '#fff0d0', sunI: 3.2, hem: '#b0d0f5', gnd: '#9a8a6a', hi: 0.78, env: 0.7 }],
  [12, { top: '#2266cc', hor: '#bcdcff', bot: '#e4f0ff', fog: '#cfe2f2', sun: '#fffaf0', sunI: 3.9, hem: '#b4d2f5', gnd: '#a09070', hi: 0.85, env: 0.8 }],
  [16.4, { top: '#2c68c4', hor: '#e8dcc0', bot: '#f0ead8', fog: '#e0d8c0', sun: '#fff0c8', sunI: 3.4, hem: '#b0cdf0', gnd: '#a08a68', hi: 0.8, env: 0.72 }],
  [17.6, { top: '#3a68c0', hor: '#ffd09a', bot: '#fde8c8', fog: '#ecd0a8', sun: '#ffc98a', sunI: 3.0, hem: '#a9c8f0', gnd: '#a08662', hi: 0.72, env: 0.6 }],
  [18.3, { top: '#3a4a98', hor: '#ff7a45', bot: '#b0605a', fog: '#c47a62', sun: '#ff7a3a', sunI: 1.4, hem: '#8a8ac0', gnd: '#6a4a40', hi: 0.52, env: 0.32 }],
  [19.1, { top: '#182050', hor: '#7a4872', bot: '#262244', fog: '#403656', sun: '#000000', sunI: 0, hem: '#4a5088', gnd: '#2a2630', hi: 0.4, env: 0.18 }],
  [20.2, NIGHT],
  [24, NIGHT],
].map(([h, k]) => [h, { top: C(k.top), hor: C(k.hor), bot: C(k.bot), fog: C(k.fog), sun: C(k.sun), hem: C(k.hem), gnd: C(k.gnd), sunI: k.sunI, hi: k.hi, env: k.env }]);

const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };   // works for a > b too (falls from 1 to 0)

// a soft round light pool for the lamps (additive, drawn on the road under every street lamp)
function poolTexture() {
  const cv = document.createElement('canvas'); cv.width = cv.height = 64; const g = cv.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,214,140,0.85)'); gr.addColorStop(0.35, 'rgba(255,196,110,0.35)'); gr.addColorStop(1, 'rgba(255,190,100,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export class DayNight {
  // ctx: { scene, sky, water, sun, hemi, world, pools, vis }
  constructor(ctx) {
    Object.assign(this, ctx);
    this.moon = new THREE.DirectionalLight('#8fa4e0', 0); this.moon.castShadow = false; this.scene.add(this.moon, this.moon.target);
    this.fixed = null; this.hour = 12; this.night = false; this.nightK = 0; this.sinA = 1; this.tick = 0;
    this.sunDir = new THREE.Vector3(); this.moonDir = new THREE.Vector3(); this.tmp = new THREE.Color(); this.tmp2 = new THREE.Color(); this.cloudNight = C('#1b2238'); this.cloudRain = C('#59606c'); this.fogNear0 = this.scene.fog.near; this.fogFar0 = this.scene.fog.far;
    this.waterA = C(this.vis.waterA); this.waterB = C(this.vis.waterB);
    this.mats = this.world.nightMats || [];
    // light pools under the street lamps: one merged additive mesh
    const pts = this.world.lampPools || [];
    if (pts.length) {
      const pos = [], uv = [], idx = []; let n = 0, r = 5.5;
      for (const [x, z] of pts) { pos.push(x - r, 0.27, z - r, x + r, 0.27, z - r, x + r, 0.27, z + r, x - r, 0.27, z + r); uv.push(0, 0, 1, 0, 1, 1, 0, 1); idx.push(n, n + 2, n + 1, n, n + 3, n + 2); n += 4; }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx);
      this.pool = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: poolTexture(), transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -3 }));
      this.pool.frustumCulled = false; this.pool.renderOrder = 3; this.pool.visible = false; this.scene.add(this.pool);
    }
  }
  setHour(h) { this.fixed = h; }
  update(dt) {
    const h = this.fixed !== null ? this.fixed : gameHour();
    this.hour = h;
    // key-hour table
    let i = 1; while (i < KEYS.length - 1 && KEYS[i][0] < h) i++;
    const [h0, a] = KEYS[i - 1], [h1, b] = KEYS[i], k = (h - h0) / (h1 - h0 || 1), L = (x, y) => x + (y - x) * k;
    const top = this.tmp.copy(a.top).lerp(b.top, k);
    const sky = this.sky.material.uniforms, v = this.vis;
    sky.top.value.copy(top); sky.horizon.value.copy(this.tmp2.copy(a.hor).lerp(b.hor, k)); sky.bottom.value.copy(this.tmp2.copy(a.bot).lerp(b.bot, k));
    const fog = this.tmp2.copy(a.fog).lerp(b.fog, k);
    this.scene.fog.color.copy(fog); if (this.scene.background && this.scene.background.isColor) this.scene.background.copy(fog);
    // sun and moon positions: the sun rises at 06:00 in the east and sets at 18:00; the moon is opposite
    const ang = Math.PI * (h - 6) / 12, sinA = Math.sin(ang), cosA = Math.cos(ang);
    this.sunDir.set(-cosA * 0.95, Math.max(sinA, -0.3), 0.45 + Math.abs(cosA) * 0.1).normalize();
    this.moonDir.set(cosA * 0.95, Math.max(-sinA, -0.3), -0.45).normalize();
    this.sinA = sinA;
    const sunUp = smooth(-0.03, 0.14, sinA), sunC = this.sun.color.copy(a.sun).lerp(b.sun, k);
    this.sun.intensity = L(a.sunI, b.sunI) * sunUp; this.sun.visible = this.sun.intensity > 0.01;
    this.nightK = smooth(0.06, -0.22, sinA);                                   // 0 day .. 1 deep night (stars, moon)
    const dark = smooth(0.14, -0.1, sinA);                                      // lamps / windows come on around dusk
    this.moon.intensity = 0.55 * smooth(0.02, -0.25, sinA); this.moon.visible = this.moon.intensity > 0.01;
    this.hemi.color.copy(this.tmp2.copy(a.hem).lerp(b.hem, k)); this.hemi.groundColor.copy(this.tmp2.copy(a.gnd).lerp(b.gnd, k)); this.hemi.intensity = L(a.hi, b.hi);
    this.scene.environmentIntensity = L(a.env, b.env);
    sky.sunDir.value.copy(this.sunDir); sky.sunColor.value.copy(sunC).multiplyScalar(smooth(-0.12, 0.05, sinA));
    sky.moonDir.value.copy(this.moonDir); sky.night.value = this.nightK;
    // the main race code places the lights around the camera: it reads sunDir / moonDir (scaled to 90 m)
    if (this.race) { this.race.sunDir.copy(this.sunDir).multiplyScalar(90); this.race.moonDir = this.moonDir.clone().multiplyScalar(90); }
    // water, pools
    const lum = 0.16 + 0.84 * smooth(-0.2, 0.35, sinA);
    if (this.water) { const u = this.water.material.uniforms; u.cA.value.copy(this.waterA).multiplyScalar(lum); u.cB.value.copy(this.waterB).multiplyScalar(lum); u.fogC.value.copy(fog); }
    for (const p of this.pools || []) { const u = p.wm.material.uniforms; u.fogC.value.copy(fog); u.skyTop.value.copy(top); u.skyHor.value.copy(sky.horizon.value); }
    // rain: the sky goes overcast and grey, the light and the view distance shrink
    const rn = this.race && this.race.weather ? Math.max(this.race.weather.rain, this.race.weather.cover || 0) : 0;   // rain or just overcast
    if (rn > 0.005) {
      const lumD = smooth(-0.1, 0.35, sinA), gv = 0.12 + 0.5 * lumD, grey = this.tmp.setRGB(gv * 0.94, gv * 0.98, gv * 1.05), k2 = Math.min(1, rn * 1.1);
      sky.top.value.lerp(grey, k2 * 0.75); sky.horizon.value.lerp(this.tmp2.setRGB(gv * 1.08, gv * 1.1, gv * 1.12), k2 * 0.8); sky.bottom.value.lerp(grey, k2 * 0.7);
      fog.lerp(grey, k2 * 0.55); this.scene.fog.color.copy(fog); if (this.scene.background && this.scene.background.isColor) this.scene.background.copy(fog);
      this.sun.intensity *= 1 - 0.7 * k2; this.moon.intensity *= 1 - 0.5 * k2; this.hemi.intensity *= 1 - 0.18 * k2; this.scene.environmentIntensity *= 1 - 0.4 * k2;
      sky.sunColor.value.multiplyScalar(1 - k2); sky.night.value *= 1 - 0.85 * k2;
      this.scene.fog.far = this.fogFar0 * (1 - 0.22 * k2); this.scene.fog.near = this.fogNear0 * (1 - 0.3 * k2);
      if (this.water) this.water.material.uniforms.fogC.value.copy(fog);
    } else { this.scene.fog.far = this.fogFar0; this.scene.fog.near = this.fogNear0; }
    // clouds: white by day, pink-ish at sunrise / sunset, dark blue-grey at night
    const cm = this.scene.userData.cloudMat; if (cm) { cm.color.set('#ffffff').lerp(sky.horizon.value, 0.55 * (1 - sunUp)).lerp(this.cloudNight, this.nightK * 0.92).lerp(this.cloudRain, Math.min(1, rn * 1.2) * (0.35 + 0.65 * smooth(-0.1, 0.3, sinA))); }
    // lit windows + lamp pools
    for (const m of this.mats) m.emissiveIntensity = 0.95 * dark;
    if (this.pool) { this.pool.visible = dark > 0.02; this.pool.material.opacity = 0.5 * dark; }
    this.night = dark > 0.5;
  }
}
