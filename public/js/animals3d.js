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


// ---- Jungle Quest beasts
function canine(o, c, c2, opt = {}) { // coyote / hyena
  const I = o.inner, hi = opt.slope || 0;
  part(I, G.cap(0.36, 1.25), c, 0, 1.05 + hi * 0.5, 0, { r: [Math.PI / 2 + hi, 0, 0] });
  for (const [x, z, i, y] of [[-0.24, 0.65, 0, 0.85 + hi], [0.24, 0.65, 1, 0.85 + hi], [-0.24, -0.62, 2, 0.8], [0.24, -0.62, 3, 0.8]]) o.legs[i] = leg(I, x, y, z, 0.12, y, c2, '#3a2a1a');
  const h = o.head = new THREE.Group(); h.position.set(0, 1.4 + hi * 1.1, 1.2); I.add(h);
  part(h, G.sph(0.32, 10, 8), c, 0, 0, 0.1); part(h, G.box(0.2, 0.18, 0.5), c2, 0, -0.08, 0.55); part(h, G.sph(0.07, 6, 5), '#111111', 0, 0, 0.82);
  for (const sx of [-1, 1]) part(h, G.cone(opt.round ? 0.12 : 0.1, 0.38, 4), c, sx * 0.2, 0.42, -0.02);
  eyes(h, 0, 0.1, 0.3, 0.13, 0.05);
  const t = o.tail = new THREE.Group(); t.position.set(0, 1.2, -1.1); I.add(t); part(t, G.cone(0.14, 0.95, 5), c2, 0, -0.45, -0.1, { r: [Math.PI - 0.5, 0, 0] });
  return o;
}
BUILD.coyote = () => { const o = shell(); canine(o, '#b59a72', '#8a7350'); return o; };
BUILD.hyena = () => {
  const o = shell(), I = o.inner; canine(o, '#b79a63', '#6b5a35', { slope: 0.12, round: true });
  for (let i = 0; i < 14; i++) part(I, G.sph(0.08, 5, 4), '#3a2a12', Math.sin(i * 2.1) * 0.34, 1.2 + Math.cos(i * 2.1) * 0.3, -0.8 + (i % 7) * 0.26, { s: [1, 1, 1.4] });
  return o;
};
BUILD.boar = () => {
  const o = shell(), c = '#5c4033', I = o.inner;
  part(I, G.cap(0.55, 1.0), c, 0, 1.0, 0, { r: [Math.PI / 2, 0, 0] });
  for (const [x, z, i] of [[-0.32, 0.55, 0], [0.32, 0.55, 1], [-0.32, -0.55, 2], [0.32, -0.55, 3]]) o.legs[i] = leg(I, x, 0.6, z, 0.13, 0.6, c, '#2a1a10');
  for (let k = 0; k < 6; k++) part(I, G.cone(0.1, 0.35, 4), '#2a1a10', 0, 1.62, -0.8 + k * 0.32);
  const h = o.head = new THREE.Group(); h.position.set(0, 1.1, 1.1); I.add(h);
  part(h, G.sph(0.42, 10, 8), c, 0, 0, 0.1); part(h, G.cyl(0.2, 0.24, 0.42, 8), '#d9a08c', 0, -0.05, 0.55, { r: [Math.PI / 2, 0, 0] });
  for (const sx of [-1, 1]) { part(h, G.cone(0.07, 0.4, 5), '#f5f0e0', sx * 0.2, -0.12, 0.62, { r: [-0.6, 0, sx * 0.4] }); part(h, G.cone(0.1, 0.25, 4), c, sx * 0.28, 0.38, 0); }
  eyes(h, 0, 0.16, 0.38, 0.19, 0.06);
  const t = o.tail = new THREE.Group(); t.position.set(0, 1.2, -1.05); I.add(t); part(t, G.cyl(0.04, 0.04, 0.5, 4), '#d9a08c', 0, -0.2, -0.05);
  return o;
};
function bulky(o, c, face, opt = {}) { // bear / gorilla
  const I = o.inner, S = opt.s || 1;
  part(I, G.sph(1, 12, 9), c, 0, 1.75 * S, 0, { s: [0.95 * S, 1.0 * S, 1.35 * S] });
  for (const [x, z, i] of [[-0.6, 0.85, 0], [0.6, 0.85, 1], [-0.6, -0.8, 2], [0.6, -0.8, 3]]) o.legs[i] = leg(I, x * S, 1.2 * S, z * S, 0.3 * S, 1.2 * S, c, '#222222');
  const h = o.head = new THREE.Group(); h.position.set(0, 2.2 * S, 1.45 * S); I.add(h);
  part(h, G.sph(0.62 * S, 12, 9), c, 0, 0, 0.1); part(h, G.sph(0.34 * S, 8, 6), face, 0, -0.14 * S, 0.5 * S); part(h, G.sph(0.09 * S, 6, 5), '#111111', 0, -0.02 * S, 0.8 * S);
  for (const sx of [-1, 1]) part(h, G.sph(0.2 * S, 8, 6), opt.ears ? c : c, sx * 0.46 * S, 0.5 * S, 0);
  eyes(h, 0, 0.18 * S, 0.5 * S, 0.24 * S, 0.08 * S);
  if (opt.brow) part(h, G.box(0.9 * S, 0.14 * S, 0.3 * S), '#1a1a1e', 0, 0.34 * S, 0.5 * S);
  const t = o.tail = new THREE.Group(); t.position.set(0, 1.9 * S, -1.4 * S); I.add(t); part(t, G.sph(0.2 * S, 6, 5), c, 0, 0, 0);
  return o;
}
BUILD.bear = () => bulky(shell(), '#6b4a2f', '#d2b48c', { s: 1.0, ears: true });
BUILD.gorilla = () => { const o = shell(); bulky(o, '#2d2d33', '#6b5a50', { s: 1.05, brow: true }); part(o.inner, G.sph(0.8, 10, 8), '#3a3a42', 0, 2.0, 0.55, { s: [1, 0.9, 0.6] }); return o; };

// the DRAGON (finale): purple body, pink wings, big horns. wings[] are flapped by animateDragon.
export function buildDragon() {
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const c = '#7b3fe4', c2 = '#ffd27a', wing = '#ff5fa8';
  part(body, G.sph(1, 14, 10), c, 0, 3.4, 0, { s: [1.7, 1.8, 3.0] });
  part(body, G.sph(1, 12, 9), c2, 0, 2.9, 0.4, { s: [1.3, 1.4, 2.6] });
  for (const [x, z] of [[-1.1, 1.4], [1.1, 1.4], [-1.1, -1.4], [1.1, -1.4]]) { part(body, G.cyl(0.55, 0.45, 1.8, 8), c, x, 1.0, z); part(body, G.box(0.9, 0.35, 1.2), '#2f1a66', x, 0.18, z + 0.2); }
  // neck + head
  for (let k = 0; k < 4; k++) part(body, G.cyl(0.7 - k * 0.06, 0.8 - k * 0.06, 1.2, 8), c, 0, 4.1 + k * 0.8, 2.7 + k * 0.65, { r: [0.55, 0, 0] });
  const head = new THREE.Group(); head.position.set(0, 7.2, 5.3); body.add(head);
  part(head, G.box(1.5, 1.2, 2.0), c, 0, 0, 0.5); part(head, G.box(1.3, 0.5, 1.8), c2, 0, -0.55, 0.5);
  for (const sx of [-1, 1]) { part(head, G.cone(0.22, 1.5, 6), '#fff2c4', sx * 0.6, 0.95, -0.2, { r: [-0.5, 0, sx * -0.3] }); eyes(head, 0, 0.3, 1.3, 0.5, 0.2); part(head, G.sph(0.1, 6, 5), '#222222', sx * 0.25, 0.1, 1.5); }
  for (let k = 0; k < 7; k++) part(body, G.cone(0.38 - k * 0.025, 0.9, 4), '#ff8a2a', 0, 5.2 - k * 0.3, -2.4 + k * 0.72 - 0.3, { r: [0, 0, 0] });
  // tail
  [[-3.4, 3.2, 1.0], [-4.9, 3.0, 0.8], [-6.2, 2.9, 0.6], [-7.4, 2.9, 0.4]].forEach(([z, y, r]) => part(body, G.sph(r, 8, 6), c, 0, y, z));
  part(body, G.cone(0.7, 1.4, 4), wing, 0, 2.9, -8.4, { r: [-Math.PI / 2, 0, 0] });
  // wings
  const wings = [];
  for (const sx of [-1, 1]) {
    const w = new THREE.Group(); w.position.set(sx * 1.5, 4.6, 0.2); body.add(w);
    part(w, G.cyl(0.18, 0.12, 6.2, 6), c, sx * 3.0, 0.4, 0, { r: [0, 0, Math.PI / 2 + sx * 0.12] });
    const geo = new THREE.BufferGeometry(); const A = [0, 0.3, 1.2], B = [sx * 6.2, 0.9, 0.2], C = [sx * 5.4, -0.6, -3.8], D = [sx * 1.6, -0.9, -3.4];
    geo.setAttribute('position', new THREE.Float32BufferAttribute([...A, ...B, ...C, ...A, ...C, ...D], 3)); geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: wing, roughness: 0.6, side: THREE.DoubleSide })); m.castShadow = true; w.add(m);
    wings.push({ g: w, sx });
  }
  return { root, body, head, wings };
}
export function animateDragon(d, t, flap = 1) {
  d.wings.forEach((w) => { w.g.rotation.z = -w.sx * Math.sin(t * (3 + flap * 6)) * (0.25 + 0.35 * flap); });
  d.head.rotation.x = Math.sin(t * 1.3) * 0.08; d.body.position.y = Math.sin(t * 1.7) * 0.05 * (1 - flap * 0.5);
}

export function buildAnimalMesh(kind) {
  const o = BUILD[kind]();
  o.root.traverse((m) => { if (m.isMesh) m.receiveShadow = false; });
  o.kind = kind; o.stride = kind === 'elephant' || kind === 'bear' || kind === 'gorilla' ? 1.3 : kind === 'dino' ? 1.5 : 2.2;
  return o;
}

// t: seconds, speed: m/s, st: state code (see jlayout ST), wind: attack windup 0..1 (0 = none)
export function animateAnimal(o, t, dt, speed, st, wind) {
  const mv = Math.min(1, speed / 3.5), run = Math.min(1.6, 0.6 + speed / 7), ph = o.ph = (o.ph || 0) + dt * speed * o.stride * 1.4 + dt * 0.0;
  const amp = (o.kind === 'elephant' || o.kind === 'dino' || o.kind === 'bear' || o.kind === 'gorilla' ? 0.42 : 0.7) * mv * Math.min(1, run);
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
