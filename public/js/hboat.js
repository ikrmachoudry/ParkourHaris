// BOATS for the water world: three high-detail procedural motor boats (a speedboat, a fishing boat and a yacht) with the same interface as hbus.js / htruck.js.
// Model space: +x = bow, +y = up, +z = right.  The WATERLINE is y = 0 (the hull dips below it, the deck is above).  The helm (driver) is on the right of the centre line.
import * as THREE from 'three';

export const BOATS = {
  speedboat: { L: 8.6, w: 2.5, seatX: 0.55, seatR: 0.5, seatTop: 1.0 },
  fishboat: { L: 11.5, w: 3.6, seatX: 1.6, seatR: 0.55, seatTop: 1.5 },
  yacht: { L: 19, w: 5.2, seatX: 3.2, seatR: 0.9, seatTop: 2.2 },
};
// hull stations, bow first is last: x, half beam at the deck, deck height above the waterline, keel depth below it
const HULLS = {
  speedboat: { st: [[-4.3, 1.18, 0.78, 0.2], [-3.2, 1.25, 0.82, 0.34], [-1.8, 1.25, 0.88, 0.46], [-0.2, 1.2, 0.93, 0.5], [1.4, 1.08, 1.0, 0.5], [2.7, 0.84, 1.12, 0.4], [3.6, 0.46, 1.26, 0.22], [4.3, 0.04, 1.34, 0.06]] },
  fishboat: { st: [[-5.75, 1.62, 1.0, 0.55], [-4.2, 1.78, 1.0, 0.85], [-2.2, 1.8, 1.02, 0.98], [0, 1.74, 1.1, 1.0], [2.2, 1.52, 1.28, 0.9], [3.9, 1.1, 1.55, 0.62], [5.0, 0.55, 1.85, 0.32], [5.75, 0.05, 2.1, 0.12]] },
  yacht: { st: [[-9.5, 2.35, 1.4, 0.85], [-7.5, 2.6, 1.42, 1.15], [-4.5, 2.62, 1.46, 1.3], [-1.0, 2.58, 1.52, 1.3], [2.5, 2.38, 1.68, 1.15], [5.5, 1.85, 1.95, 0.8], [7.8, 1.05, 2.35, 0.4], [9.5, 0.05, 2.7, 0.12]] },
};
// the cross-section of the hull at a station: [z fraction of the half beam, height]
const ring = (hw, deck, dk) => [[-1, deck], [-0.985, 0.03], [-0.93, -0.16 * dk], [-0.62, -0.7 * dk], [-0.24, -0.96 * dk], [0, -dk], [0.24, -0.96 * dk], [0.62, -0.7 * dk], [0.93, -0.16 * dk], [0.985, 0.03], [1, deck]].map(([f, y]) => [f * hw, y]);

function loft(stations, rowFrom, rowTo, hi) {   // a skin between two ring rows along all the stations
  const pos = [], idx = [], n = stations.length;
  const rings = stations.map(([x, hw, deck, dk]) => ring(hw, deck, dk));
  const seg = hi ? 1 : 1;
  for (let i = 0; i < n; i++) for (let r = rowFrom; r <= rowTo; r++) { const p = rings[i][r]; pos.push(stations[i][0], p[1], p[0]); }
  const W = rowTo - rowFrom + 1;
  for (let i = 0; i + 1 < n; i++) for (let r = 0; r + 1 < W; r++) {
    const a = i * W + r, b = (i + 1) * W + r, c = (i + 1) * W + r + 1, d = i * W + r + 1;
    idx.push(a, b, c, a, c, d);
  }
  void seg;
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(pos.length / 3 * 2), 2)); g.computeVertexNormals(); return g;
}
function deckGeo(stations) {   // the flat top between the two gunwales
  const pos = [], idx = [], n = stations.length;
  for (let i = 0; i < n; i++) { const [x, hw, deck] = stations[i]; pos.push(x, deck, -hw, x, deck, hw); }
  for (let i = 0; i + 1 < n; i++) { const a = i * 2, b = a + 1, c = a + 2, d = a + 3; idx.push(a, b, c, b, d, c); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(pos.length / 3 * 2), 2)); g.computeVertexNormals(); return g;
}
function transomGeo(st0) {   // the flat stern
  const [x, hw, deck, dk] = st0, rg = ring(hw, deck, dk), pos = [], idx = [];
  rg.forEach(([z, y]) => pos.push(x, y, z)); const cx = x, cy = deck * 0.2;
  pos.push(cx, cy, 0); const c = rg.length;
  for (let i = 0; i < c - 1; i++) idx.push(c, i, i + 1);
  idx.push(c, c - 1, 0);
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(pos.length / 3 * 2), 2)); g.computeVertexNormals(); return g;
}

export function buildBoat({ paint = '#f4f6f8', detail = 'hi', hull = 'speedboat' } = {}) {
  const hi = detail !== 'lo', H = HULLS[hull], D = BOATS[hull], st = H.st;
  const mat = (c, o = {}) => new THREE.MeshStandardMaterial({ color: c, roughness: o.r ?? 0.5, metalness: o.m ?? 0.1, emissive: o.e || '#000', emissiveIntensity: o.ei || 0, transparent: !!o.t, opacity: o.t ? o.o : 1, side: o.d ? THREE.DoubleSide : THREE.FrontSide });
  const mats = {
    paint: mat(paint, { r: 0.22, m: 0.25, d: true }), anti: mat(hull === 'fishboat' ? '#7a1a1a' : hull === 'yacht' ? '#1b2a4a' : '#1a2f55', { r: 0.6, d: true }),
    accent: mat(hull === 'speedboat' ? '#d6202e' : hull === 'fishboat' ? '#f3f1ea' : '#1c2b4a', { r: 0.35, m: 0.2, d: true }), white: mat('#f3f4f2', { r: 0.4, m: 0.1 }), deckM: mat(hull === 'yacht' ? '#8b5a2b' : hull === 'fishboat' ? '#7a5230' : '#e7e8ea', { d: true, r: 0.8 }),
    teak: mat('#a97c4f', { r: 0.75 }), dark: mat('#1d2027', { r: 0.7 }), chrome: mat('#dfe3ea', { r: 0.18, m: 0.9 }), seat: mat(hull === 'speedboat' ? '#e8e2d2' : '#d9d2c0', { r: 0.8 }), seatD: mat('#2b2f3a', { r: 0.8 }),
    glass: mat('#7fb8d6', { t: true, o: 0.55, r: 0.08, m: 0.3 }), engine: mat('#3b3f48', { r: 0.4, m: 0.6 }), rubber: mat('#111214', { r: 0.9 }), red: mat('#ff3030', { e: '#ff2020', ei: 0.9 }), green: mat('#20e060', { e: '#10d050', ei: 0.9 }), lamp: mat('#fff4cf', { e: '#fff1b0', ei: 0.8 }),
  };
  const g = new THREE.Group();
  const add = (geo, m, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) => { const o = new THREE.Mesh(geo, m); o.position.set(x, y, z); o.rotation.set(rx, ry, rz); o.castShadow = true; o.receiveShadow = true; g.add(o); return o; };
  const box = (m, sx, sy, sz, x, y, z, rx = 0, ry = 0, rz = 0) => add(new THREE.BoxGeometry(sx, sy, sz), m, x, y, z, rx, ry, rz);
  const cyl = (m, r, h, x, y, z, seg = 10, rx = 0, ry = 0, rz = 0, r2) => add(new THREE.CylinderGeometry(r2 === undefined ? r : r2, r, h, seg), m, x, y, z, rx, ry, rz);
  // ---- the hull: painted topsides above the waterline, anti-fouling below, a flat stern, the deck
  add(loft(st, 0, 1, hi), mats.paint); add(loft(st, 1, 9, hi), mats.anti); add(loft(st, 9, 10, hi), mats.paint); add(transomGeo(st[0]), mats.paint); add(deckGeo(st), mats.deckM);
  const x0 = st[0][0], xb = st[st.length - 1][0], hwAt = (x) => { for (let i = 0; i + 1 < st.length; i++) if (x >= st[i][0] && x <= st[i + 1][0]) { const t = (x - st[i][0]) / (st[i + 1][0] - st[i][0]); return st[i][1] + (st[i + 1][1] - st[i][1]) * t; } return 0.1; };
  const deckAt = (x) => { for (let i = 0; i + 1 < st.length; i++) if (x >= st[i][0] && x <= st[i + 1][0]) { const t = (x - st[i][0]) / (st[i + 1][0] - st[i][0]); return st[i][2] + (st[i + 1][2] - st[i][2]) * t; } return 1; };
  // a coloured stripe along both flanks and the rubbing strake, navigation lamps at the bow, a propeller at the stern
  for (let i = 0; i + 1 < st.length - 1; i++) for (const sd of [-1, 1]) {
    const a = st[i], b = st[i + 1], L = Math.hypot(b[0] - a[0], b[2] - a[2]), ang = Math.atan2(b[2] - a[2], b[0] - a[0]);
    const y = (a[2] + b[2]) / 2 - 0.2, hw = (a[1] + b[1]) / 2 + 0.012;
    box(mats.accent, L + 0.05, 0.11, 0.04, (a[0] + b[0]) / 2, y, sd * hw, 0, 0, ang);
    box(mats.chrome, L + 0.05, 0.05, 0.05, (a[0] + b[0]) / 2, (a[2] + b[2]) / 2 + 0.02, sd * (hw + 0.005), 0, 0, ang);
  }
  box(mats.red, 0.12, 0.1, 0.1, xb - 0.5, deckAt(xb - 0.5) + 0.05, -hwAt(xb - 0.5) * 0.85); box(mats.green, 0.12, 0.1, 0.1, xb - 0.5, deckAt(xb - 0.5) + 0.05, hwAt(xb - 0.5) * 0.85);
  const props = [];
  const prop = (x, z, r) => { const p = new THREE.Group(); p.position.set(x, -0.35, z); for (let k = 0; k < 4; k++) { const bl = new THREE.Mesh(new THREE.BoxGeometry(0.02, r, r * 0.35), mats.chrome); bl.position.y = r * 0.5; const q = new THREE.Group(); q.rotation.x = k * Math.PI / 2; q.add(bl); p.add(q); } g.add(p); props.push(p); };
  // ---- rails round the deck (a handrail on a few posts), cleats
  const rail = (x1, x2, y, hh = 0.6) => { for (const sd of [-1, 1]) { const hw1 = hwAt(x1) - 0.08, hw2 = hwAt(x2) - 0.08; const ya = deckAt(x1), yb = deckAt(x2); const n = Math.max(2, Math.round((x2 - x1) / 1.2));
    for (let k = 0; k <= n; k++) { const t = k / n, xx = x1 + (x2 - x1) * t, hw = hw1 + (hw2 - hw1) * t, yy = ya + (yb - ya) * t; cyl(mats.chrome, 0.018, hh, xx, yy + hh / 2, sd * hw, 6); }
    const L = Math.hypot(x2 - x1, hw2 - hw1), tilt = Math.atan2(hw2 - hw1, x2 - x1); cyl(mats.chrome, 0.02, L, (x1 + x2) / 2, (ya + yb) / 2 + hh, sd * (hw1 + hw2) / 2, 6, Math.PI / 2, -tilt * sd, 0).rotation.set(Math.PI / 2, 0, Math.PI / 2 + 0); } void y; };
  void rail;
  const gun = (x1, x2, hh, post) => { for (const sd of [-1, 1]) { let px = null; const n = Math.max(2, Math.round((x2 - x1) / post));
    for (let k = 0; k <= n; k++) { const xx = x1 + (x2 - x1) * k / n, hw = hwAt(xx) - 0.07, yy = deckAt(xx); cyl(mats.chrome, 0.017, hh, xx, yy + hh / 2, sd * hw, 6);
      if (px) { const dx = xx - px.x, dz = sd * (hw - px.hw), L = Math.hypot(dx, dz), o = cyl(mats.chrome, 0.014, L, (xx + px.x) / 2, yy + hh, sd * (hw + px.hw) / 2, 6); o.rotation.set(0, 0, 0); o.rotateY(Math.atan2(-dz, dx)); o.rotateZ(Math.PI / 2); }
      px = { x: xx, hw }; } } };
  if (hi) {
    for (const x of [x0 + 0.7, xb - 1.6]) for (const sd of [-1, 1]) cyl(mats.chrome, 0.045, 0.08, x, deckAt(x) + 0.04, sd * (hwAt(x) - 0.12), 8);   // cleats
  }
  // =============================================================== SPEEDBOAT
  if (hull === 'speedboat') {
    gun(0.9, xb - 0.7, 0.28, 0.9);
    // sun pad over the engine bay, rear bench, helm console with a raked windscreen, two bucket seats, bow lounge
    box(mats.seat, 1.7, 0.2, 2.0, -3.1, 0.92, 0); box(mats.seatD, 1.72, 0.04, 2.02, -3.1, 0.8, 0);
    box(mats.seat, 0.45, 0.45, 2.0, -1.85, 1.1, 0, 0, 0, -0.15);   // rear bench backrest
    box(mats.white, 1.5, 0.55, 1.5, 0.35, 1.2, 0.0); box(mats.dark, 0.9, 0.08, 1.3, 0.35, 1.5, 0);   // console + dash
    box(mats.glass, 0.04, 0.75, 2.05, 0.9, 1.88, 0, 0, 0, -0.5); box(mats.chrome, 0.05, 0.05, 2.1, 1.18, 2.22, 0); box(mats.chrome, 0.05, 0.9, 0.05, 0.9, 1.6, 0.98, 0, 0, -0.5); box(mats.chrome, 0.05, 0.9, 0.05, 0.9, 1.6, -0.98, 0, 0, -0.5);
    for (const z of [-0.5, 0.5]) { box(mats.seat, 0.55, 0.22, 0.55, -0.3, 0.98, z); box(mats.seat, 0.12, 0.62, 0.55, -0.58, 1.3, z, 0, 0, 0.12); }
    box(mats.seat, 1.6, 0.18, 1.3, 2.5, 1.2, 0, 0, 0, 0.12);   // bow lounge cushion
    { const w = new THREE.Mesh(new THREE.TorusGeometry(0.16, 0.022, 6, 16), mats.dark); w.position.set(0.72, 1.52, D.seatR); w.rotation.set(0, -1.2, 0); g.add(w); }   // steering wheel
    // twin outboards on the transom
    for (const z of [-0.5, 0.5]) { box(mats.engine, 0.55, 0.95, 0.4, x0 - 0.35, 0.55, z); box(mats.dark, 0.3, 0.12, 0.34, x0 - 0.35, 1.05, z); cyl(mats.engine, 0.07, 0.6, x0 - 0.3, -0.4, z, 8); prop(x0 - 0.5, z, 0.3); }
    box(mats.accent, 0.04, 0.14, 1.7, x0 + 0.02, 0.6, 0);
    if (hi) { cyl(mats.chrome, 0.012, 1.6, x0 + 0.3, 1.8, 0.9, 6); box(mats.red, 0.5, 0.3, 0.02, x0 + 0.3, 2.3, 0.9); for (let k = 0; k < 3; k++) box(mats.dark, 0.05, 0.05, 0.9, -3.5 + k * 0.2, 1.06, 0); }
  }
  // =============================================================== FISHING BOAT
  if (hull === 'fishboat') {
    gun(-5.4, 3.6, 0.55, 1.1);
    // wheelhouse with window band, a roof, a funnel and a mast with a boom
    const cx = 1.4, cy = deckAt(cx);
    box(mats.white, 2.6, 2.25, 2.7, cx, cy + 1.12, 0); box(mats.accent, 2.64, 0.12, 2.74, cx, cy + 0.2, 0);
    for (const sd of [-1, 1]) { box(mats.glass, 2.1, 0.8, 0.05, cx, cy + 1.45, sd * 1.36); }
    box(mats.glass, 0.05, 0.8, 2.2, cx + 1.31, cy + 1.45, 0); box(mats.glass, 0.05, 0.7, 2.0, cx - 1.31, cy + 1.45, 0);
    box(mats.accent, 2.9, 0.14, 3.0, cx, cy + 2.3, 0); box(mats.white, 2.7, 0.1, 2.8, cx, cy + 2.4, 0);
    cyl(mats.dark, 0.2, 1.2, cx - 0.8, cy + 3.0, -0.8, 12); cyl(mats.red, 0.21, 0.2, cx - 0.8, cy + 3.5, -0.8, 12);
    cyl(mats.chrome, 0.07, 5.0, cx + 0.6, cy + 4.5, 0, 8); box(mats.dark, 0.05, 0.05, 2.6, cx + 0.6, cy + 5.6, 0); cyl(mats.chrome, 0.04, 3.4, cx - 1.2, cy + 4.0, 0, 6, 0, 0, Math.PI / 2 - 0.1);
    box(mats.lamp, 0.2, 0.2, 0.2, cx + 1.31, cy + 2.2, 0); box(mats.lamp, 0.15, 0.15, 0.15, cx + 0.6, cy + 7.0, 0);
    // helm seat inside the wheelhouse
    box(mats.seatD, 0.5, 0.15, 0.5, D.seatX, D.seatTop - 0.1, D.seatR); box(mats.seatD, 0.1, 0.55, 0.5, D.seatX - 0.28, D.seatTop + 0.2, D.seatR); box(mats.dark, 0.5, 0.9, 1.9, D.seatX + 0.95, cy + 0.9, 0); { const w = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.025, 6, 16), mats.teak); w.position.set(D.seatX + 0.65, D.seatTop + 0.35, D.seatR); w.rotation.set(0, -1.2, 0); g.add(w); }
    // work deck: fish boxes, net drum, a gantry with a winch, tyre fenders hung over the side
    for (let k = 0; k < 6; k++) box(k % 2 ? mats.accent : mats.white, 0.8, 0.45, 0.55, -4.4 + (k % 3) * 0.9, deckAt(-4) + 0.25 + (k > 2 ? 0.47 : 0), k % 2 ? 0.9 : -0.9);
    cyl(mats.dark, 0.5, 1.7, -2.6, deckAt(-2.6) + 0.55, 0, 16, Math.PI / 2); cyl(mats.chrome, 0.05, 2.0, -2.6, deckAt(-2.6) + 0.55, 0, 6, Math.PI / 2);
    for (const sd of [-1, 1]) { cyl(mats.chrome, 0.07, 2.6, -3.9, deckAt(-3.9) + 1.3, sd * 1.4, 8); } box(mats.chrome, 0.1, 0.1, 2.9, -3.9, deckAt(-3.9) + 2.6, 0); cyl(mats.dark, 0.14, 0.3, -3.9, deckAt(-3.9) + 2.3, 0, 8);
    for (const sd of [-1, 1]) for (const x of [-2, 0.4, 2.2]) { const t = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.09, 8, 14), mats.rubber); t.position.set(x, deckAt(x) - 0.45, sd * (hwAt(x) + 0.12)); t.rotation.y = Math.PI / 2; g.add(t); }
    box(mats.engine, 0.5, 0.5, 0.5, x0 - 0.3, 0.2, 0); cyl(mats.engine, 0.08, 0.8, x0 - 0.2, -0.6, 0, 8); prop(x0 - 0.45, 0, 0.55);
    box(mats.accent, 0.06, 0.5, 0.06, x0 - 0.05, 0.55, 0);
  }
  // =============================================================== YACHT
  if (hull === 'yacht') {
    gun(-8.8, 6.8, 0.5, 1.4);
    const dy = deckAt(-3), sx = -3.6, L = 7.6, W = 4.7;
    // saloon: dark window band with white frames, curved-looking bow glass, a sun deck roof
    box(mats.white, L, 0.5, W, sx + L / 2 - 0.4, dy + 0.25, 0); box(mats.white, L - 0.6, 0.12, W - 0.2, sx + L / 2 - 0.4, dy + 2.45, 0); box(mats.accent, L - 0.5, 0.06, W - 0.1, sx + L / 2 - 0.4, dy + 2.38, 0);
    for (const sd of [-1, 1]) { box(mats.glass, L - 1.2, 1.7, 0.05, sx + L / 2 - 0.5, dy + 1.45, sd * (W / 2 - 0.05)); for (let k = 0; k <= 6; k++) box(mats.white, 0.1, 1.76, 0.09, sx + 0.2 + k * (L - 1.2) / 6, dy + 1.45, sd * (W / 2 - 0.05)); }
    box(mats.glass, 0.05, 1.7, W - 0.5, sx + L - 0.4, dy + 1.45, 0, 0, 0, -0.35); box(mats.glass, 0.05, 1.5, W - 0.5, sx - 0.3, dy + 1.45, 0);
    box(mats.white, 0.1, 1.76, 0.1, sx + L - 0.4, dy + 1.45, -(W / 2 - 0.4)); box(mats.white, 0.1, 1.76, 0.1, sx + L - 0.4, dy + 1.45, (W / 2 - 0.4));
    // flybridge above the saloon: windscreen, helm and seating, radar arch with antennas
    const fy = dy + 2.5;
    box(mats.white, 3.4, 0.7, 3.2, 0, fy + 0.35, 0); box(mats.glass, 0.05, 0.9, 3.1, 1.75, fy + 1.0, 0, 0, 0, -0.3); box(mats.seat, 1.2, 0.2, 2.2, -1.1, fy + 0.8, 0); box(mats.dark, 0.8, 0.5, 1.4, 0.9, fy + 0.95, 0);
    box(mats.chrome, 0.07, 1.5, 3.2, -1.7, fy + 1.5, 0); cyl(mats.chrome, 0.03, 2.6, -1.7, fy + 2.8, 0, 6); box(mats.dark, 1.1, 0.06, 0.28, -1.7, fy + 2.35, 0); cyl(mats.lamp, 0.07, 0.15, -1.7, fy + 4.2, 0, 8);
    box(mats.deckM, L - 0.5, 0.04, W - 0.4, sx + L / 2 - 0.4, dy + 0.52, 0); box(mats.deckM, 3.2, 0.04, 3.0, 0, fy + 0.72, 0);   // wooden floors: saloon and flybridge
    // helm station in the saloon (the player sits here)
    box(mats.seatD, 0.55, 0.16, 0.55, D.seatX, D.seatTop - 0.12, D.seatR); box(mats.seatD, 0.1, 0.6, 0.55, D.seatX - 0.3, D.seatTop + 0.2, D.seatR); box(mats.dark, 0.5, 1.0, 2.2, D.seatX + 1.0, dy + 0.9, 0); { const w = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.028, 6, 16), mats.teak); w.position.set(D.seatX + 0.7, D.seatTop + 0.4, D.seatR); w.rotation.set(0, -1.1, 0); g.add(w); }
    // aft deck: a teak table and sofas, sun pads on the foredeck, a boarding platform with a ladder, an anchor
    box(mats.teak, 1.2, 0.08, 1.2, -6.2, dy + 0.65, 0); cyl(mats.chrome, 0.06, 0.6, -6.2, dy + 0.35, 0, 8); box(mats.seat, 1.4, 0.4, 0.55, -7.4, dy + 0.35, 0); box(mats.seat, 0.55, 0.4, 1.4, -6.2, dy + 0.35, -1.6); box(mats.seat, 0.55, 0.4, 1.4, -6.2, dy + 0.35, 1.6);
    box(mats.seat, 2.4, 0.22, 2.4, 6.2, deckAt(6.2) + 0.15, 0); box(mats.deckM, 1.6, 0.06, 4.0, x0 - 0.7, 0.18, 0); box(mats.chrome, 0.04, 0.5, 0.05, x0 - 0.2, 0.4, 1.4); box(mats.chrome, 0.04, 0.5, 0.05, x0 - 0.2, 0.4, -1.4);
    cyl(mats.dark, 0.1, 0.5, xb - 1.4, deckAt(xb - 1.4) + 0.3, 0, 8); box(mats.chrome, 0.5, 0.06, 0.1, xb - 1.4, deckAt(xb - 1.4) + 0.58, 0);
    for (const z of [-0.9, 0.9]) { box(mats.engine, 0.7, 0.5, 0.7, x0 - 0.2, 0.0, z); cyl(mats.engine, 0.09, 0.9, x0 + 0.1, -0.7, z, 8); prop(x0 - 0.1, z, 0.55); }
    for (let k = 0; k < 8; k++) for (const sd of [-1, 1]) box(mats.dark, 0.7, 0.34, 0.03, 0.4 + k * 0.0 - 1.0 + (k - 4) * 0.95, dy - 0.28, sd * (hwAt(-1 + (k - 4) * 0.95) + 0.015));   // portholes on the hull
  }
  // a baked-in lamp pair for the night (the bow lamp)
  const lampM = mats.lamp;
  box(lampM, 0.1, 0.1, 0.1, xb - 0.35, deckAt(xb - 0.35) + 0.12, 0);
  const drawables = g.children.length; void drawables;
  return {
    group: g, mats, lamp: null, police: null,
    setDoor() {}, setLid() {}, dent() {}, hurtLook() {}, repair() {},
    steer() {},
    spin(a) { for (const p of props) p.rotation.x = a * 1.6; },
    setColor(c) { mats.paint.color.set(c); },
  };
}
