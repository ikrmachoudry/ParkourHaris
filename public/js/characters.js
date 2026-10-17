// Three different beans: different shapes AND outfits. Built from primitives, animated procedurally.
import * as THREE from 'three';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const gloss = (color, o = {}) => new THREE.MeshPhysicalMaterial({ color, roughness: o.r ?? 0.3, clearcoat: o.cc ?? 0.65, clearcoatRoughness: 0.25, metalness: o.m ?? 0 });
const flat = (color, r = 0.55) => new THREE.MeshStandardMaterial({ color, roughness: r });
const capsule = (r, len, mat) => { const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 6, 16), mat); m.castShadow = true; return m; };
const sphere = (r, mat, ws = 16, hs = 12) => { const m = new THREE.Mesh(new THREE.SphereGeometry(r, ws, hs), mat); m.castShadow = true; return m; };
const WHITE = flat('#ffffff', 0.25), BLACK = flat('#101018', 0.4);

function eyes(parent, y, z, spread, size, pupil = 0.55) {
  for (const sx of [-1, 1]) {
    const e = sphere(size, WHITE); e.position.set(sx * spread, y, z);
    const p = sphere(size * pupil, BLACK); p.position.set(0, 0, size * 0.62);
    e.add(p); parent.add(e);
  }
}

function starShape(R, r) {
  const s = new THREE.Shape();
  for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rad = i % 2 ? r : R; const x = Math.cos(a) * rad, y = Math.sin(a) * rad; i ? s.lineTo(x, y) : s.moveTo(x, y); }
  s.closePath(); return s;
}

const DEFS = [
  { name: 'Bubbles', pivotY: 0.85 },
  { name: 'Ninja', pivotY: 0.95 },
  { name: 'Dino', pivotY: 0.8 },
  { name: 'Robo', pivotY: 0.9 },
];

export class Character {
  constructor(id) {
    this.id = id;
    this.group = new THREE.Group();         // positioned at the feet, rotated by yaw
    this.pivot = new THREE.Group();         // tumble / dive pivot (centre of mass)
    this.inner = new THREE.Group();         // holds all parts (feet at inner y = 0)
    this.group.add(this.pivot); this.pivot.add(this.inner);
    this.pivot.position.y = DEFS[id].pivotY; this.inner.position.y = -DEFS[id].pivotY;
    this.body = new THREE.Group(); this.inner.add(this.body); // squashes
    this.t = Math.random() * 10; this.phase = 0; this.squash = 0; this.tumble = 0; this.lean = 0; this.dive = 0;
    this.wag = []; this.height = 1.7;
    [this.buildBubbles, this.buildNinja, this.buildDino, this.buildRobo][id].call(this);
    this.makeBat(); this.makeExtras();
    this.group.traverse((m) => { if (m.isMesh) { m.castShadow = true; } });
  }

  limbs(legX, legY, legR, legLen, legMat, armX, armY, armR, armLen, armMat, handMat, footMat) {
    const mk = (x, y, r, len, mat, extra) => {
      const g = new THREE.Group(); g.position.set(x, y, 0);
      const c = capsule(r, len, mat); c.position.y = -len / 2 - r * 0.6; g.add(c);
      if (extra) { const e = extra(); g.add(e); }
      this.inner.add(g); return g;
    };
    this.legL = mk(-legX, legY, legR, legLen, legMat, footMat ? () => { const f = sphere(legR * 1.35, footMat); f.scale.set(1, 0.6, 1.5); f.position.set(0, -legLen - legR * 0.55, legR * 0.7); return f; } : null);
    this.legR = mk(legX, legY, legR, legLen, legMat, footMat ? () => { const f = sphere(legR * 1.35, footMat); f.scale.set(1, 0.6, 1.5); f.position.set(0, -legLen - legR * 0.55, legR * 0.7); return f; } : null);
    this.armL = mk(-armX, armY, armR, armLen, armMat, handMat ? () => { const h = sphere(armR * 1.45, handMat); h.position.y = -armLen - armR * 0.9; return h; } : null);
    this.armR = mk(armX, armY, armR, armLen, armMat, handMat ? () => { const h = sphere(armR * 1.45, handMat); h.position.y = -armLen - armR * 0.9; return h; } : null);
    this.handY = -armLen - armR * 0.9;
  }

  // shield bubble + gold leader crown
  makeExtras() {
    const h = this.height;
    const sh = new THREE.Mesh(new THREE.SphereGeometry(h * 0.64, 22, 14), new THREE.MeshBasicMaterial({ color: '#7fd8ff', transparent: true, opacity: 0.3, depthWrite: false }));
    sh.position.y = h * 0.52; sh.visible = false; this.group.add(sh); this.shield = sh;
    const gold = gloss('#ffd23f', { m: 0.6, r: 0.25 });
    const cr = new THREE.Group();
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.17, 0.12, 5), gold); cr.add(ring);
    for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2, c = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.2, 6), gold); c.position.set(Math.cos(a) * 0.17, 0.15, Math.sin(a) * 0.17); cr.add(c); }
    cr.position.y = h + 0.22; cr.scale.setScalar(1.15); cr.visible = false; this.group.add(cr); this.leadCrown = cr;
  }

  // baseball bat held in the right hand (only visible while swinging)
  makeBat() {
    const wood = gloss('#d9a15a', { r: 0.45, cc: 0.3 }), dark = flat('#3a2412', 0.7), red = flat('#ff3b3b', 0.5);
    const bat = new THREE.Group();
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.5, 10), dark); handle.position.y = -0.18; bat.add(handle);
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.125, 0.8, 14), wood); barrel.position.y = -0.7; bat.add(barrel);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.125, 12, 8), wood); cap.scale.y = 0.5; cap.position.y = -1.1; bat.add(cap);
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.018, 6, 16), red); band.rotation.x = Math.PI / 2; band.position.y = -0.52; bat.add(band);
    const knob = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), dark); knob.position.y = 0.07; bat.add(knob);
    bat.position.set(0, this.handY, 0.02); bat.visible = false; bat.traverse((m) => { if (m.isMesh) m.castShadow = true; });
    this.armR.add(bat); this.bat = bat;
  }

  // ------------------------------------------------------------------ Bubbles: round pink royal bean
  buildBubbles() {
    const pink = gloss('#ff5fb4'), dark = gloss('#d63a8d');
    const body = capsule(0.47, 0.34, pink); body.position.y = 0.3 + 0.64; this.body.add(body);
    this.limbs(0.2, 0.42, 0.13, 0.12, pink, 0.5, 0.95, 0.11, 0.22, pink, flat('#ffffff', 0.3), flat('#7a2cff', 0.4));
    eyes(this.body, 1.2, 0.4, 0.17, 0.13);
    // blush cheeks
    for (const sx of [-1, 1]) { const c = sphere(0.07, flat('#ff8fcf')); c.scale.set(1.4, 0.8, 0.5); c.position.set(sx * 0.3, 1.04, 0.4); this.body.add(c); }
    // star badge
    const star = new THREE.Mesh(new THREE.ExtrudeGeometry(starShape(0.17, 0.075), { depth: 0.04, bevelEnabled: false }), gloss('#ffd23f', { m: 0.3 }));
    star.position.set(0, 0.8, 0.455); this.body.add(star);
    // crown
    const crown = new THREE.Group(); crown.position.set(0, 1.55, 0.02);
    const band = new THREE.Mesh(new THREE.CylinderGeometry(0.27, 0.3, 0.16, 20), gloss('#ffd23f', { m: 0.55, r: 0.2 })); crown.add(band);
    for (let i = 0; i < 5; i++) {
      const a = i / 5 * Math.PI * 2, sp = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.22, 8), gloss('#ffd23f', { m: 0.55, r: 0.2 }));
      sp.position.set(Math.cos(a) * 0.23, 0.18, Math.sin(a) * 0.23); crown.add(sp);
      const gem = sphere(0.04, flat(i % 2 ? '#35e0ff' : '#ff3b6b', 0.2)); gem.position.set(Math.cos(a) * 0.23, 0.3, Math.sin(a) * 0.23); crown.add(gem);
    }
    this.body.add(crown); this.crown = crown;
    this.height = 1.95;
  }

  // ------------------------------------------------------------------ Ninja: tall slim blue bean
  buildNinja() {
    const blue = gloss('#2f6bff'), navy = gloss('#14224f', { cc: 0.3 });
    const body = capsule(0.36, 0.76, blue); body.position.y = 0.34 + 0.74; this.body.add(body);
    this.limbs(0.15, 0.55, 0.11, 0.3, navy, 0.42, 1.28, 0.09, 0.3, blue, flat('#14224f'), flat('#0a0a14'));
    // face mask
    const mask = new THREE.Mesh(new THREE.CylinderGeometry(0.372, 0.372, 0.22, 24, 1, true), flat('#0b0b17', 0.5));
    mask.position.y = 1.5; this.body.add(mask);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.372, 24, 8, 0, Math.PI * 2, 0, Math.PI / 2), flat('#0b0b17', 0.5));
    cap.scale.set(1, 0.96, 1); cap.position.y = 1.46; this.body.add(cap);
    eyes(this.body, 1.5, 0.3, 0.14, 0.1, 0.65);
    // red headband + tails
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.05, 8, 28), flat('#ff2b4a', 0.4)); band.rotation.x = Math.PI / 2; band.position.y = 1.64; this.body.add(band);
    this.tails = [];
    for (let i = 0; i < 2; i++) {
      const g = new THREE.Group(); g.position.set(i ? 0.06 : -0.06, 1.64, -0.3);
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.05, 0.6), flat('#ff2b4a', 0.4)); m.position.z = -0.3; g.add(m);
      this.body.add(g); this.tails.push(g);
    }
    // belt + scarf
    const belt = new THREE.Mesh(new THREE.TorusGeometry(0.37, 0.05, 8, 28), flat('#ffd23f', 0.4)); belt.rotation.x = Math.PI / 2; belt.position.y = 0.95; this.body.add(belt);
    const scarf = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.07, 8, 24), flat('#ffffff', 0.5)); scarf.rotation.x = Math.PI / 2; scarf.position.y = 1.28; this.body.add(scarf);
    // shuriken badge
    const sh = new THREE.Mesh(new THREE.ExtrudeGeometry(starShape(0.13, 0.04), { depth: 0.03, bevelEnabled: false }), gloss('#d8e2ff', { m: 0.8, r: 0.2 }));
    sh.scale.set(1, 1, 1); sh.position.set(0, 0.7, 0.34); this.body.add(sh);
    this.height = 1.95;
  }

  // ------------------------------------------------------------------ Dino: chunky green dino with spikes & tail
  buildDino() {
    const green = gloss('#3ddc84'), belly = gloss('#c8ffd9'), orange = gloss('#ff9f1c');
    const body = sphere(0.58, green, 28, 20); body.scale.set(1, 1.08, 0.98); body.position.y = 0.3 + 0.62; this.body.add(body);
    const bel = sphere(0.45, belly, 22, 16); bel.scale.set(0.85, 0.95, 0.5); bel.position.set(0, 0.85, 0.36); this.body.add(bel);
    this.limbs(0.24, 0.42, 0.15, 0.1, green, 0.52, 0.85, 0.09, 0.12, green, null, flat('#1f9d5b'));
    // claws on feet
    for (const lg of [this.legL, this.legR]) for (let i = -1; i <= 1; i++) { const c = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.12, 6), WHITE); c.rotation.x = Math.PI / 2; c.position.set(i * 0.07, -0.22, 0.36); lg.add(c); }
    // snout
    const snout = sphere(0.3, green, 18, 12); snout.scale.set(1, 0.7, 0.9); snout.position.set(0, 1.0, 0.5); this.body.add(snout);
    for (const sx of [-1, 1]) { const n = sphere(0.03, BLACK, 8, 6); n.position.set(sx * 0.08, 1.08, 0.76); this.body.add(n); }
    // big eyes on top
    eyes(this.body, 1.42, 0.34, 0.22, 0.17, 0.5);
    // horns
    for (const sx of [-1, 1]) { const h = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.2, 8), flat('#fff1c2', 0.4)); h.position.set(sx * 0.2, 1.68, 0.18); h.rotation.z = -sx * 0.25; this.body.add(h); }
    // back spikes
    [0.62, 0.8, 1.0, 1.2, 1.38].forEach((y, i) => {
      const sz = [0.13, 0.18, 0.21, 0.18, 0.13][i];
      const sp = new THREE.Mesh(new THREE.ConeGeometry(sz * 0.75, sz * 2, 8), orange);
      const zz = -Math.sqrt(Math.max(0.02, 0.58 * 0.58 - (y - 0.92) * (y - 0.92) / 1.17)) - 0.02;
      sp.position.set(0, y, zz); sp.rotation.x = -(1.15 - i * 0.2); this.body.add(sp);
    });
    // tail
    this.tail = new THREE.Group(); this.tail.position.set(0, 0.55, -0.45);
    const t1 = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.9, 12), green); t1.rotation.x = -Math.PI / 2 - 0.4; t1.position.set(0, 0.0, -0.4); this.tail.add(t1);
    const tip = sphere(0.07, orange); tip.position.set(0, -0.2, -0.78); this.tail.add(tip);
    this.body.add(this.tail);
    this.height = 1.85;
  }

  // ------------------------------------------------------------------ Robo: yellow bolt-bot with visor and antenna
  buildRobo() {
    const yellow = gloss('#ffc233'), steel = gloss('#b4bdcc', { m: 0.7, r: 0.25 }), dark = flat('#1c2233', 0.4), glow = new THREE.MeshBasicMaterial({ color: '#4ff3ff' });
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.46, 0.4, 6, 16), yellow); body.scale.set(1, 1, 0.92); body.position.y = 0.98; body.castShadow = true; this.body.add(body);
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.64, 0.3, 0.12), dark); visor.position.set(0, 1.28, 0.4); visor.rotation.x = -0.12; this.body.add(visor);
    for (const sx of [-1, 1]) { const e = sphere(0.075, glow, 10, 8); e.scale.set(1, 1.15, 0.5); e.position.set(sx * 0.16, 1.29, 0.47); this.body.add(e); }
    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.05, 0.05), dark); mouth.position.set(0, 1.03, 0.45); this.body.add(mouth);
    const panel = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.24, 0.06), steel); panel.position.set(0, 0.76, 0.43); panel.rotation.x = -0.05; this.body.add(panel);
    for (const [bx, by] of [[-0.1, 0.82], [0.1, 0.82], [-0.1, 0.7], [0.1, 0.7]]) { const bolt = sphere(0.025, dark, 6, 4); bolt.position.set(bx, by, 0.47); this.body.add(bolt); }
    for (const sx of [-1, 1]) { const ear = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.16, 12), steel); ear.rotation.z = Math.PI / 2; ear.position.set(sx * 0.5, 1.28, 0); ear.castShadow = true; this.body.add(ear); }
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.3, 8), steel); ant.position.set(0, 1.78, 0); this.body.add(ant);
    const ball = sphere(0.075, flat('#ff3b3b', 0.3), 12, 8); ball.position.set(0, 1.97, 0); this.body.add(ball);
    this.limbs(0.2, 0.45, 0.12, 0.14, steel, 0.52, 0.98, 0.1, 0.22, steel, flat('#ff4d4d', 0.4), flat('#2b3347', 0.4));
    this.height = 2.0;
  }

  // st: {speed, grounded, vy, stun, dive, celebrate}
  update(dt, st) {
    this.t += dt;
    const run = clamp(st.speed / 10.5, 0, 1.3);
    if (st.grounded && !st.stun) this.phase += dt * (5 + run * 11);
    const sw = Math.sin(this.phase), amp = run * 0.95;

    if (st.stun > 0) {
      this.tumble += dt * 11;
      this.pivot.rotation.x = this.tumble; this.pivot.rotation.z = Math.sin(this.tumble * 0.5) * 0.4;
      this.legL.rotation.x = Math.sin(this.t * 16) * 1.0; this.legR.rotation.x = -Math.sin(this.t * 16) * 1.0;
      this.armL.rotation.z = -1.5 + Math.sin(this.t * 18) * 0.5; this.armR.rotation.z = 1.5 - Math.sin(this.t * 18) * 0.5;
      this.armL.rotation.x = this.armR.rotation.x = 0;
    } else {
      // ease tumble back to upright
      const tgt = Math.round(this.tumble / (Math.PI * 2)) * Math.PI * 2;
      this.tumble += (tgt - this.tumble) * Math.min(1, dt * 14);
      this.pivot.rotation.z *= Math.max(0, 1 - dt * 12);
      const diveTarget = st.dive > 0 ? 1 : 0;
      this.dive += (diveTarget - this.dive) * Math.min(1, dt * 16);
      const leanT = (st.grounded ? run * 0.2 : 0.05) + this.dive * 1.35;
      this.lean += (leanT - this.lean) * Math.min(1, dt * 14);
      this.pivot.rotation.x = this.tumble + this.lean;
      if (st.celebrate) {
        const j = Math.abs(Math.sin(this.t * 6)) * 0.35; this.body.position.y = j;
        this.armL.rotation.z = -2.6 + Math.sin(this.t * 14) * 0.3; this.armR.rotation.z = 2.6 - Math.sin(this.t * 14) * 0.3; this.armL.rotation.x = this.armR.rotation.x = 0;
        this.legL.rotation.x = this.legR.rotation.x = 0;
      } else if (this.dive > 0.3) {
        this.armL.rotation.x = this.armR.rotation.x = -2.9; this.armL.rotation.z = -0.15; this.armR.rotation.z = 0.15;
        this.legL.rotation.x = this.legR.rotation.x = 0.2;
      } else if (!st.grounded) {
        const up = st.vy > 0;
        this.legL.rotation.x = up ? 0.7 : 0.35; this.legR.rotation.x = up ? -0.5 : -0.2;
        this.armL.rotation.z = -2.2; this.armR.rotation.z = 2.2; this.armL.rotation.x = this.armR.rotation.x = 0;
      } else {
        this.legL.rotation.x = sw * amp; this.legR.rotation.x = -sw * amp;
        this.armL.rotation.x = -sw * amp * 0.9; this.armR.rotation.x = sw * amp * 0.9;
        const idle = Math.sin(this.t * 2.2) * 0.04;
        this.armL.rotation.z = -0.15 - idle - run * 0.2; this.armR.rotation.z = 0.15 + idle + run * 0.2;
      }
      if (!st.celebrate) this.body.position.y = st.grounded ? Math.abs(sw) * 0.07 * run : 0;
    }

    this.shield.visible = !!st.shield;
    if (st.shield) { const k = 1 + Math.sin(this.t * 8) * 0.04; this.shield.scale.set(k, k, k); }
    this.leadCrown.visible = !!st.leader;
    if (st.leader) { this.leadCrown.rotation.y += dt * 2.2; this.leadCrown.position.y = this.height + 0.22 + Math.sin(this.t * 3) * 0.05; }
    this.bat.scale.setScalar(st.mega ? 1.6 : 1);
    // bat swing (overrides the right arm): wind-up overhead, then smash forward and down
    if (st.swing > 0 && !st.stun) {
      const p = st.swing; let x;
      if (p < 0.3) x = -2.95 * (p / 0.3);
      else { const q = (p - 0.3) / 0.7; x = -2.95 + 2.75 * (1 - (1 - q) * (1 - q)); }
      this.armR.rotation.x = x; this.armR.rotation.z = 0.12;
      this.pivot.rotation.x = this.tumble + this.lean + (p > 0.3 ? 0.28 * Math.sin(Math.min(1, (p - 0.3) / 0.35) * Math.PI) : 0);
      this.bat.visible = true;
    } else this.bat.visible = false;

    // squash & stretch
    if (st.landed) this.squash = 1;
    this.squash = Math.max(0, this.squash - dt * 5);
    let sy = 1 - Math.sin(this.squash * Math.PI) * 0.22 * this.squash;
    if (!st.grounded && st.vy > 2 && !st.stun) sy = 1.1;
    if (!st.grounded && st.vy < -8) sy = 1.06;
    const sxz = 1 + (1 - sy) * 0.55;
    this.body.scale.set(sxz, sy, sxz);

    // outfit bits
    if (this.tails) this.tails.forEach((g, i) => { g.rotation.x = -0.15 - run * 0.5 + Math.sin(this.t * 9 + i) * 0.12 * (0.4 + run); g.rotation.y = (i ? 1 : -1) * (0.15 + Math.sin(this.t * 7 + i * 2) * 0.12); });
    if (this.tail) this.tail.rotation.y = Math.sin(this.t * (6 + run * 6)) * (0.35 + run * 0.25);
    if (this.crown) this.crown.rotation.z = Math.sin(this.t * 5) * 0.05 * run;
  }

  dispose() {
    this.group.traverse((o) => { if (o.isMesh) { o.geometry.dispose(); const m = o.material; (Array.isArray(m) ? m : [m]).forEach((mm) => mm.dispose()); } });
  }
}

// Floating name tag (always readable, visible through geometry)
export function makeNameTag(text, color = '#ffffff') {
  const cv = document.createElement('canvas'); cv.width = 512; cv.height = 128;
  const g = cv.getContext('2d');
  g.font = '700 64px "Lilita One","Fredoka","Baloo 2","Trebuchet MS",Arial,sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  const w = Math.min(480, g.measureText(text).width + 56);
  g.fillStyle = 'rgba(12,10,36,0.72)';
  const x = (512 - w) / 2, y = 14, h = 100, r = 50;
  g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); g.fill();
  g.lineWidth = 6; g.strokeStyle = color; g.stroke();
  g.lineWidth = 8; g.strokeStyle = 'rgba(0,0,0,0.65)'; g.strokeText(text, 256, 68, 440);
  g.fillStyle = '#ffffff'; g.fillText(text, 256, 68, 440);
  const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false, fog: false }));
  sp.renderOrder = 999; sp.scale.set(2.8, 0.7, 1); sp.userData.base = 0.7;
  return sp;
}
