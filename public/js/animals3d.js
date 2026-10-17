// Low-poly, friendly 3D animals built from primitives (client only). All animals face +Z, feet on y = 0.
import * as THREE from 'three';

const mats = new Map();
const M = (c) => { let m = mats.get(c); if (!m) { m = new THREE.MeshStandardMaterial({ color: c, roughness: 0.82, metalness: 0 }); mats.set(c, m); } return m; };
const G = { sph: (r, w = 12, h = 9) => new THREE.SphereGeometry(r, w, h), cyl: (a, b, h, s = 8) => new THREE.CylinderGeometry(a, b, h, s), cone: (r, h, s = 8) => new THREE.ConeGeometry(r, h, s), box: (x, y, z) => new THREE.BoxGeometry(x, y, z), cap: (r, l) => new THREE.CapsuleGeometry(r, l, 4, 10) };

function part(parent, geo, color, x = 0, y = 0, z = 0, o = {}) {
  const m = new THREE.Mesh(geo, M(color)); m.position.set(x, y, z);
  if (o.s) m.scale.set(o.s[0], o.s[1], o.s[2]);
  if (o.r) m.rotation.set(o.r[0], o.r[1], o.r[2]);
  m.castShadow = true; parent.add(m); return m;
}
function eyes(parent, x, y, z, sep, r = 0.09) {
  for (const sx of [-1, 1]) { part(parent, G.sph(r, 8, 6), '#ffffff', x + sx * sep, y, z); part(parent, G.sph(r * 0.55, 6, 5), '#111111', x + sx * sep, y, z + r * 0.62); }
}
function leg(inner, x, y, z, rad, len, color, hoof) {
  const p = new THREE.Group(); p.position.set(x, y, z); inner.add(p);
  part(p, G.cyl(rad, rad * 0.82, len, 7), color, 0, -len / 2, 0);
  if (hoof) part(p, G.box(rad * 2.1, rad * 0.9, rad * 2.3), hoof, 0, -len + rad * 0.3, rad * 0.25);
  return p;
}

function shell() { const root = new THREE.Group(), inner = new THREE.Group(); root.add(inner); return { root, inner, legs: [], head: null, tail: null }; }

const BUILD = {
  horse() {
    const o = shell(), c = '#8b5a2b', dk = '#33200f', I = o.inner;
    part(I, G.cap(0.5, 1.35), c, 0, 1.55, 0, { r: [Math.PI / 2, 0, 0], s: [0.92, 1, 1] });
    for (const [x, z, i] of [[-0.3, 0.8, 0], [0.3, 0.8, 1], [-0.3, -0.8, 2], [0.3, -0.8, 3]]) o.legs[i] = leg(I, x, 1.2, z, 0.14, 1.2, c, dk);
    part(I, G.cyl(0.22, 0.3, 1.1, 8), c, 0, 2.15, 1.15, { r: [0.62, 0, 0] });
    const h = o.head = new THREE.Group(); h.position.set(0, 2.55, 1.55); I.add(h);
    part(h, G.box(0.38, 0.44, 0.95), c, 0, -0.1, 0.35, { r: [0.4, 0, 0] });
    part(h, G.box(0.4, 0.1, 0.3), '#f3e6d0', 0, -0.32, 0.72, { r: [0.4, 0, 0] });
    for (const sx of [-1, 1]) part(h, G.cone(0.08, 0.28, 5), c, sx * 0.14, 0.28, -0.02);
    eyes(h, 0, 0.1, 0.22, 0.21, 0.07);
    part(I, G.box(0.1, 0.9, 0.3), dk, 0, 2.3, 0.9, { r: [0.62, 0, 0] });
    const t = o.tail = new THREE.Group(); t.position.set(0, 1.9, -1.25); I.add(t); part(t, G.cone(0.2, 1.3, 6), dk, 0, -0.55, 0, { r: [Math.PI, 0, 0] }); t.rotation.x = -0.35;
    return o;
  },
  lion() {
    const o = shell(), c = '#d9a441', mane = '#8a4a14', I = o.inner;
    part(I, G.cap(0.46, 1.1), c, 0, 1.15, 0, { r: [Math.PI / 2, 0, 0] });
    for (const [x, z, i] of [[-0.3, 0.6, 0], [0.3, 0.6, 1], [-0.3, -0.6, 2], [0.3, -0.6, 3]]) o.legs[i] = leg(I, x, 0.85, z, 0.17, 0.85, c, '#a8741f');
    const h = o.head = new THREE.Group(); h.position.set(0, 1.6, 1.15); I.add(h);
    part(h, G.sph(0.78, 12, 9), mane, 0, -0.05, -0.18, { s: [1, 1, 0.78] });
    part(h, G.sph(0.46, 12, 9), c, 0, 0, 0.25);
    part(h, G.box(0.34, 0.24, 0.3), '#efc977', 0, -0.12, 0.62); part(h, G.sph(0.09, 6, 5), '#2a1408', 0, -0.03, 0.78);
    for (const sx of [-1, 1]) part(h, G.sph(0.13, 6, 5), c, sx * 0.34, 0.4, 0.1);
    eyes(h, 0, 0.12, 0.6, 0.17, 0.07);
    const t = o.tail = new THREE.Group(); t.position.set(0, 1.35, -1.0); I.add(t);
    part(t, G.cyl(0.06, 0.06, 1.1, 5), c, 0, -0.5, -0.1, { r: [0.3, 0, 0] }); part(t, G.sph(0.17, 7, 6), mane, 0, -1.05, -0.28);
    return o;
  },
  leopard() {
    const o = shell(), c = '#e8b948', sp = '#2a1a0a', I = o.inner;
    const body = part(I, G.cap(0.38, 1.35), c, 0, 1.05, 0, { r: [Math.PI / 2, 0, 0] });
    for (let i = 0; i < 22; i++) { const a = (i * 2.399) % (Math.PI * 2), z = -0.9 + (i % 11) * 0.18; part(I, G.sph(0.09, 5, 4), sp, Math.sin(a) * 0.37, 1.05 + Math.cos(a) * 0.36, z, { s: [1, 1, 1.3] }); }
    for (const [x, z, i] of [[-0.25, 0.7, 0], [0.25, 0.7, 1], [-0.25, -0.7, 2], [0.25, -0.7, 3]]) o.legs[i] = leg(I, x, 0.78, z, 0.14, 0.78, c, '#b88a2a');
    const h = o.head = new THREE.Group(); h.position.set(0, 1.35, 1.2); I.add(h);
    part(h, G.sph(0.34, 12, 9), c, 0, 0, 0.1); part(h, G.box(0.24, 0.16, 0.28), '#f4dc9c', 0, -0.08, 0.42); part(h, G.sph(0.07, 6, 5), '#2a1408', 0, 0, 0.58);
    for (const sx of [-1, 1]) { part(h, G.sph(0.1, 6, 5), c, sx * 0.24, 0.3, 0); part(h, G.sph(0.04, 5, 4), sp, sx * 0.13, 0.15, 0.3); }
    eyes(h, 0, 0.1, 0.34, 0.14, 0.055);
    const t = o.tail = new THREE.Group(); t.position.set(0, 1.2, -1.15); I.add(t);
    part(t, G.cyl(0.06, 0.05, 1.5, 5), c, 0, -0.1, -0.55, { r: [1.15, 0, 0] }); part(t, G.sph(0.09, 5, 4), sp, 0, 0.5, -0.95); part(t, G.cyl(0.05, 0.05, 0.6, 5), c, 0, 0.78, -1.15, { r: [0.5, 0, 0] });
    return o;
  },
  elephant() {
    const o = shell(), c = '#8a919c', dk = '#737b87', I = o.inner;
    part(I, G.sph(1, 14, 10), c, 0, 2.3, 0, { s: [1.15, 1.2, 1.7] });
    for (const [x, z, i] of [[-0.68, 1.0, 0], [0.68, 1.0, 1], [-0.68, -1.0, 2], [0.68, -1.0, 3]]) o.legs[i] = leg(I, x, 1.6, z, 0.4, 1.6, c, '#d8d2c4');
    const h = o.head = new THREE.Group(); h.position.set(0, 2.75, 1.85); I.add(h);
    part(h, G.sph(0.82, 12, 9), c, 0, 0, 0.2);
    // trunk: 4 chained segments curling down
    let ty = -0.15, tz = 0.95, rad = 0.3;
    for (let k = 0; k < 4; k++) { part(h, G.cyl(rad, rad * 0.8, 0.62, 7), dk, 0, ty, tz + k * 0.1, { r: [0.15 + k * 0.1, 0, 0] }); ty -= 0.55; tz += 0.1; rad *= 0.8; }
    for (const sx of [-1, 1]) {
      part(h, G.cyl(0.95, 0.95, 0.09, 14), dk, sx * 1.0, 0.1, -0.2, { r: [0, 0, Math.PI / 2], s: [1, 1, 0.8] }).rotation.y = sx * 0.35;
      part(h, G.cone(0.13, 0.95, 6), '#f5f0e0', sx * 0.45, -0.38, 1.05, { r: [1.15, 0, 0] });
    }
    eyes(h, 0, 0.3, 0.88, 0.4, 0.09);
    const t = o.tail = new THREE.Group(); t.position.set(0, 2.5, -1.7); I.add(t); part(t, G.cyl(0.05, 0.04, 1.0, 5), dk, 0, -0.45, -0.05); part(t, G.sph(0.1, 5, 4), '#3a3f46', 0, -0.98, -0.05);
    return o;
  },
  dino() {
    const o = shell(), c = '#4fb04a', belly = '#d6ee94', sp = '#ff8a2a', I = o.inner;
    part(I, G.sph(1, 14, 10), c, 0, 2.2, 0, { s: [0.95, 1.0, 1.55] });
    part(I, G.sph(0.9, 12, 9), belly, 0, 1.95, 0.2, { s: [0.85, 0.8, 1.45] });
    for (const [x, z, i] of [[-0.62, 0.45, 0], [0.62, 0.45, 1], [-0.62, -0.5, 2], [0.62, -0.5, 3]]) o.legs[i] = leg(I, x, 1.5, z, 0.4, 1.5, c, '#2f7a30');
    const h = o.head = new THREE.Group(); h.position.set(0, 3.0, 1.75); I.add(h);
    part(h, G.box(0.95, 0.85, 1.3), c, 0, 0.1, 0.55); part(h, G.box(0.85, 0.28, 1.2), belly, 0, -0.45, 0.5);
    for (let k = 0; k < 6; k++) for (const sx of [-1, 1]) part(h, G.cone(0.06, 0.2, 4), '#ffffff', sx * 0.38, -0.28, 0.05 + k * 0.21, { r: [Math.PI, 0, 0] });
    for (const sx of [-1, 1]) { part(h, G.sph(0.08, 5, 4), '#1a3a1a', sx * 0.22, 0.2, 1.2); part(h, G.cone(0.1, 0.4, 5), sp, sx * 0.3, 0.7, 0.2); }
    eyes(h, 0, 0.4, 0.75, 0.37, 0.12);
    for (const sx of [-1, 1]) part(I, G.cyl(0.1, 0.07, 0.6, 5), c, sx * 0.55, 2.7, 1.1, { r: [-0.9, 0, sx * 0.3] });
    const t = o.tail = new THREE.Group(); t.position.set(0, 2.2, -1.4); I.add(t);
    [[0, 0, -0.4, 0.78], [0, 0.05, -1.2, 0.6], [0, 0.12, -1.9, 0.44], [0, 0.22, -2.45, 0.3]].forEach(([x, y, z, r]) => part(t, G.sph(r, 9, 7), c, x, y, z));
    for (let k = 0; k < 6; k++) part(I, G.cone(0.2 - k * 0.012, 0.55, 4), sp, 0, 3.05 - k * 0.2, -0.9 - k * 0.38);
    return o;
  },
};

export function buildAnimalMesh(kind) {
  const o = BUILD[kind]();
  o.root.traverse((m) => { if (m.isMesh) m.receiveShadow = false; });
  o.kind = kind; o.stride = kind === 'elephant' ? 1.3 : kind === 'dino' ? 1.5 : 2.2;
  return o;
}

// t: seconds, speed: m/s, st: state code (see jlayout ST), wind: attack windup 0..1 (0 = none)
export function animateAnimal(o, t, dt, speed, st, wind) {
  const mv = Math.min(1, speed / 3.5), run = Math.min(1.6, 0.6 + speed / 7), ph = o.ph = (o.ph || 0) + dt * speed * o.stride * 1.4 + dt * 0.0;
  const amp = (o.kind === 'elephant' || o.kind === 'dino' ? 0.42 : 0.7) * mv * Math.min(1, run);
  const ph4 = [0, Math.PI, Math.PI, 0];
  o.legs.forEach((l, i) => { l.rotation.x = Math.sin(ph + ph4[i]) * amp; });
  const I = o.inner;
  I.position.y = Math.abs(Math.sin(ph)) * 0.06 * mv * (o.kind === 'elephant' ? 1.4 : 1) + (st === 7 ? 0 : 0);
  I.scale.y = 1 + Math.sin(t * 2.1) * 0.012;
  if (o.head) { o.head.rotation.x = Math.sin(ph * 0.5 + 1) * 0.06 * mv + Math.sin(t * 1.3) * 0.03; o.head.rotation.y = Math.sin(t * 0.7) * 0.12 * (1 - mv); }
  if (o.tail) o.tail.rotation.z = Math.sin(t * (2 + speed * 0.3)) * 0.35;
  // attack: rear up then lunge
  if (wind > 0) { const k = 1 - wind; I.rotation.x = k < 0.7 ? -0.5 * (k / 0.7) : 0.35; if (o.head) o.head.rotation.x -= 0.4; } else I.rotation.x += (0 - I.rotation.x) * Math.min(1, dt * 10);
  // stagger shake / tied struggle
  I.rotation.z = st === 4 ? Math.sin(t * 40) * 0.12 : st === 5 ? Math.sin(t * 3) * 0.04 : 0;
}
