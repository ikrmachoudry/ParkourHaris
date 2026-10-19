// HCHAR: a realistic-proportion human built entirely in code (no downloads).  One SkinnedMesh (~8-10k triangles) with a real
// skeleton, so legs / arms bend smoothly.  Faces +z; character RIGHT hand is at -x.  Metres.
import * as THREE from 'three';
import { MOCAP, MOCAP_BONES } from './mocapdata.js';   // real recorded human movement (CMU mocap) baked onto this skeleton: tools/mocap_bake.mjs

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const sstep = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;
const col = (c) => { const k = new THREE.Color(c); return [k.r, k.g, k.b]; };
const mulc = (c, f) => [c[0] * f, c[1] * f, c[2] * f];

// bone table: name, parent, world rest position
const BONES = [
  ['hips', null, [0, 0.97, 0]], ['spine', 'hips', [0, 1.07, 0]], ['chest', 'spine', [0, 1.24, 0]], ['neck', 'chest', [0, 1.49, 0]], ['head', 'neck', [0, 1.58, 0]],
  ['upperarm.L', 'chest', [0.19, 1.45, 0]], ['forearm.L', 'upperarm.L', [0.265, 1.17, 0]], ['hand.L', 'forearm.L', [0.325, 0.915, 0]],
  ['upperarm.R', 'chest', [-0.19, 1.45, 0]], ['forearm.R', 'upperarm.R', [-0.265, 1.17, 0]], ['hand.R', 'forearm.R', [-0.325, 0.915, 0]],
  ['fing.L', 'hand.L', [0.338, 0.841, 0]], ['fingtip.L', 'fing.L', [0.342, 0.796, 0]], ['thumb.L', 'hand.L', [0.322, 0.885, 0.026]],
  ['fing.R', 'hand.R', [-0.338, 0.841, 0]], ['fingtip.R', 'fing.R', [-0.342, 0.796, 0]], ['thumb.R', 'hand.R', [-0.322, 0.885, 0.026]],
  ['upperleg.L', 'hips', [0.088, 0.93, 0]], ['lowerleg.L', 'upperleg.L', [0.088, 0.52, 0]], ['foot.L', 'lowerleg.L', [0.088, 0.095, 0]],
  ['upperleg.R', 'hips', [-0.088, 0.93, 0]], ['lowerleg.R', 'upperleg.R', [-0.088, 0.52, 0]], ['foot.R', 'lowerleg.R', [-0.088, 0.095, 0]],
];
const BI = {}; BONES.forEach((b, i) => { BI[b[0]] = i; });

// ----- weights along a chain of joints. pts = joint positions, bones = bone names (bones[i] drives pts[i]..pts[i+1]), bw = blend half-width (m) at each joint
function makeChain(pts, bones, bw) {
  const cum = [0]; for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + pts[i].distanceTo(pts[i - 1]));
  const project = (p) => {
    let best = 0, bd = 1e9;
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], ab = b.clone().sub(a), L = ab.lengthSq();
      const u = Math.min(1, Math.max(0, p.clone().sub(a).dot(ab) / L)), q = a.clone().addScaledVector(ab, u), d = q.distanceTo(p);
      if (d < bd) { bd = d; best = cum[i] + u * Math.sqrt(L); }
    }
    return best;
  };
  return {
    t: project,
    w(p) {
      const t = project(p); let j = 1;
      for (let i = 1; i < pts.length - 1; i++) if (Math.abs(t - cum[i]) < Math.abs(t - cum[j])) j = i;
      const d = t - cum[j];
      if (pts.length > 2 && Math.abs(d) < bw[j]) { const k = sstep(-bw[j], bw[j], d); return [[BI[bones[j]], k], [BI[bones[j - 1]], 1 - k]]; }
      let s = 0; for (let i = 0; i < bones.length; i++) if (t >= cum[i]) s = i; return [[BI[bones[Math.min(s, bones.length - 1)]], 1]];
    },
  };
}

class Builder {
  constructor() { this.pos = []; this.col = []; this.si = []; this.sw = []; this.idx = []; }
  vert(p, c, w) {
    const o = this.pos.length / 3; this.pos.push(p.x, p.y, p.z); this.col.push(c[0], c[1], c[2]);
    const ww = w.slice(0, 4); while (ww.length < 4) ww.push([0, 0]);
    let sum = 0; ww.forEach((q) => { sum += q[1]; }); sum = sum || 1;
    ww.forEach((q) => { this.si.push(q[0]); this.sw.push(q[1] / sum); }); return o;
  }
  // rings: array of arrays of Vector3 (n each, ring direction as described in header). weightsFn(p) -> [[bone,w]..]
  loft(rings, weightsFn, colorFn, capTop = true, capBot = true) {
    const n = rings[0].length, base = [];
    rings.forEach((r, i) => { const row = []; r.forEach((p, j) => row.push(this.vert(p, colorFn(i, j, p), weightsFn(p)))); base.push(row); });
    for (let i = 0; i < rings.length - 1; i++) for (let j = 0; j < n; j++) {
      const j2 = (j + 1) % n, A = base[i][j], B = base[i][j2], C = base[i + 1][j], D = base[i + 1][j2];
      this.idx.push(A, B, C, B, D, C);
    }
    const cap = (ri, up) => {
      const r = rings[ri], c = new THREE.Vector3(); r.forEach((p) => c.add(p)); c.multiplyScalar(1 / n);
      const cv = this.vert(c, colorFn(ri, 0, c), weightsFn(c));
      for (let j = 0; j < n; j++) { const a = base[ri][j], b = base[ri][(j + 1) % n]; if (up) this.idx.push(a, cv, b); else this.idx.push(a, b, cv); }
    };
    if (capTop) cap(rings.length - 1, true); if (capBot) cap(0, false);
  }
  // rigid piece
  geo(g, matrix, bone, c) {
    g = g.index ? g.toNonIndexed() : g.clone(); g.applyMatrix4(matrix); g.computeVertexNormals();
    const p = g.attributes.position; const base = this.pos.length / 3;
    for (let i = 0; i < p.count; i++) this.vert(V(p.getX(i), p.getY(i), p.getZ(i)), c, [[BI[bone], 1]]);
    for (let i = 0; i < p.count; i++) this.idx.push(base + i);
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.col, 3));
    g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(this.si, 4));
    g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(this.sw, 4));
    g.setIndex(this.idx); g.computeVertexNormals(); return g;
  }
}
const M4 = (x, y, z, sx = 1, sy = 1, sz = 1, rx = 0, ry = 0, rz = 0) => new THREE.Matrix4().compose(V(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), V(sx, sy, sz));
const ell = (r = 1, w = 14, h = 10, ps = 0, pl = Math.PI * 2, ts = 0, tl = Math.PI) => new THREE.SphereGeometry(r, w, h, ps, pl, ts, tl);

function ringAt(cx, cy, cz, rx, rzF, rzB, n, pw = 2) {
  const pts = [];
  for (let j = 0; j < n; j++) {
    const a = (j / n) * Math.PI * 2, s = Math.sin(a), c = Math.cos(a);
    const sx = Math.sign(s) * Math.pow(Math.abs(s), 2 / pw), sz = Math.sign(c) * Math.pow(Math.abs(c), 2 / pw);
    pts.push(V(cx + rx * sx, cy, cz + (sz > 0 ? rzF : rzB) * sz));
  }
  return pts;
}
const interp = (tab, y) => { // tab rows [y, ...vals] sorted ascending in y
  if (y <= tab[0][0]) return tab[0].slice(1); if (y >= tab[tab.length - 1][0]) return tab[tab.length - 1].slice(1);
  for (let i = 0; i < tab.length - 1; i++) if (y <= tab[i + 1][0]) { const t = (y - tab[i][0]) / (tab[i + 1][0] - tab[i][0]), s = t * t * (3 - 2 * t); return tab[i].slice(1).map((v, k) => lerp(v, tab[i + 1][k + 1], s)); }
};

export const OUTFITS = {
  civilian: { top: '#4a6fa5', pants: '#2b3140', shoes: '#2a2018', sleeve: 0.62, hat: null, hair: '#16110d' },
  cop: { top: '#1f3a6b', pants: '#14161c', shoes: '#0d0d0d', sleeve: 0.62, hat: 'cop', belt: true, badge: true, tie: '#0d0d12', hair: '#1a130e' },
  thug: { top: '#17171a', pants: '#38465f', shoes: '#e8e8e8', sleeve: 5, hat: 'beanie', chain: true, hair: '#0d0a08', hood: true },
  robber: { top: '#1b1c20', pants: '#202228', shoes: '#111111', sleeve: 5, hat: 'beanie', hair: '#0d0a08', hood: true, mask: true, gloves: true, bag: true },
  boss: { top: '#111216', pants: '#111216', shoes: '#0b0b0b', sleeve: 5, hat: null, glasses: true, tie: '#7a0f1a', chain: true, shirt: '#f1efe9', lapel: true, hair: '#0e0b09' },
};

export function buildHeroChar(opts = {}) {
  const o = Object.assign({}, OUTFITS[opts.role || 'civilian'], opts);
  const skin = col(o.skinTone || '#c08560'), shirt = col(o.top), pants = col(o.pants), shoes = col(o.shoes), hair = col(o.hair);
  const white = col(o.shirt || o.top);
  const B = new Builder();
  const N = 16;
  const side = (s, p) => V(p[0] * s, p[1], p[2]);

  // ---------------- torso
  const torsoTab = [ // y, halfWidth, front depth, back depth
    [0.90, 0.166, 0.100, 0.106], [0.965, 0.166, 0.100, 0.106], [0.99, 0.168, 0.104, 0.110], [1.08, 0.148, 0.092, 0.092], [1.17, 0.150, 0.098, 0.088],
    [1.27, 0.172, 0.120, 0.094], [1.37, 0.190, 0.126, 0.100], [1.43, 0.200, 0.112, 0.100], [1.465, 0.168, 0.092, 0.090], [1.49, 0.125, 0.074, 0.076], [1.515, 0.082, 0.062, 0.066], [1.545, 0.058, 0.058, 0.06],
  ];
  const torsoChain = makeChain([V(0, 0.97, 0), V(0, 1.07, 0), V(0, 1.24, 0), V(0, 1.49, 0), V(0, 1.58, 0), V(0, 1.8, 0)], ['hips', 'spine', 'chest', 'neck', 'head'], [0, 0.07, 0.07, 0.03, 0.02]);
  const jacket = !!(o.hood || o.lapel), hemY = jacket ? 0.915 : 1.0;
  const trs = [];
  const ys = []; for (let y = jacket ? 0.90 : 0.965; y <= 1.546; y += 0.0225) ys.push(y); ys.push(hemY - 0.0004, hemY + 0.0004); ys.sort((a, b) => a - b);
  for (const y of ys) { const [a, f, b] = interp(torsoTab, y); trs.push(ringAt(0, y, 0.0, a, f, b, N, 2.3)); }
  B.loft(trs, (p) => torsoChain.w(p), (i, j, p) => {
    if (p.y < hemY) return pants;
    if (p.y > 1.5) return skin; // neck base
    const open = o.lapel && p.z > 0.06 && Math.abs(p.x) < 0.045 && p.y > 1.18 ? white : (o.lapel ? shirt : (o.shirt && !o.lapel ? white : shirt));
    return open;
  });
  // neck
  const nrs = []; for (let y = 1.49; y <= 1.605; y += 0.023) nrs.push(ringAt(0, y, -0.008, 0.054, 0.052, 0.056, 12));
  B.loft(nrs, (p) => torsoChain.w(p), () => skin, false, false);

  // ---------------- legs & arms
  const legPts = (s) => [V(0.088 * s, 1.02, 0), V(0.088 * s, 0.93, 0), V(0.088 * s, 0.52, 0), V(0.088 * s, 0.095, 0), V(0.088 * s, 0.0, 0)];
  const legTab = [[0.03, 0.040, 0.044], [0.10, 0.043, 0.046], [0.20, 0.050, 0.054], [0.32, 0.060, 0.064], [0.40, 0.064, 0.068], [0.47, 0.054, 0.058], [0.53, 0.056, 0.060], [0.62, 0.070, 0.074], [0.75, 0.087, 0.092], [0.88, 0.097, 0.102], [0.96, 0.100, 0.108], [1.0, 0.085, 0.096], [1.04, 0.068, 0.08]];
  for (const s of [1, -1]) {
    const nm = s > 0 ? 'L' : 'R', ch = makeChain(legPts(s), ['hips', 'upperleg.' + nm, 'lowerleg.' + nm, 'foot.' + nm], [0, 0.08, 0.06, 0.04]);
    const rs = [];
    const lys = []; for (let y = 0.105; y <= hemY - 0.012; y += 0.0467) lys.push(y); lys.push(hemY - 0.012);   // the legs end just inside the shirt hem, so no pants poke through it in a zigzag lys.push(0.1146, 0.1154); lys.sort((a, b) => a - b);
    for (const y of lys) { const [rx, rz] = interp(legTab, y); rs.push(ringAt(0.088 * s + (y > 0.8 ? -0.004 * s : 0), y, y > 0.5 ? 0.0 : 0.004, rx, rz * 1.0, rz * 1.03, 14)); }
    const full = o.pants !== undefined;
    B.loft(rs, (p) => ch.w(p), (i, j, p) => (p.y < 0.115 ? skin : pants), false, false);
    // ---- shoe (rings run along z)
    const shoeTab = [[-0.085, 0.075, 0.036], [-0.07, 0.108, 0.043], [0.0, 0.104, 0.046], [0.08, 0.072, 0.050], [0.14, 0.054, 0.048], [0.19, 0.040, 0.040], [0.215, 0.028, 0.030]];
    const heelToe = [];
    for (let z = -0.085; z <= 0.2151; z += 0.025) {
      const t = interp(shoeTab, z), h = t[0], w = t[1]; const pts = [];
      for (let j = 0; j < 12; j++) { const a = (j / 12) * Math.PI * 2; pts.push(V(0.088 * s + w * Math.sin(a), 0.004 + h * (0.5 + 0.5 * Math.cos(a)), z)); }
      heelToe.push(pts);
    }
    const fch = { w: () => [[BI['foot.' + nm], 1]] };
    const base = [];
    heelToe.forEach((r) => base.push(r.map((p) => B.vert(p, shoes, fch.w(p)))));
    for (let i = 0; i < heelToe.length - 1; i++) for (let j = 0; j < 12; j++) { const j2 = (j + 1) % 12; B.idx.push(base[i][j], base[i + 1][j], base[i][j2], base[i][j2], base[i + 1][j], base[i + 1][j2]); }
    for (const [ri, up] of [[0, false], [heelToe.length - 1, true]]) { const r = heelToe[ri], c = V(0.088 * s, 0.05, r[0].z); const cv = B.vert(c, shoes, fch.w(c)); for (let j = 0; j < 12; j++) { const a = base[ri][j], b = base[ri][(j + 1) % 12]; if (up) B.idx.push(a, b, cv); else B.idx.push(a, cv, b); } }
    // sole
    B.geo(new THREE.BoxGeometry(0.088, 0.012, 0.272), M4(0.088 * s, 0.006, 0.066), 'foot.' + nm, mulc(shoes, 0.45));
    void full;
  }
  const armTab = [[0.915, 0.029, 0.024], [1.00, 0.034, 0.029], [1.08, 0.044, 0.037], [1.15, 0.048, 0.040], [1.20, 0.050, 0.043], [1.28, 0.053, 0.048], [1.37, 0.057, 0.055], [1.43, 0.060, 0.060], [1.47, 0.052, 0.054]];
  for (const s of [1, -1]) {
    const nm = s > 0 ? 'L' : 'R';
    const pts = [V(0.12 * s, 1.46, 0), V(0.19 * s, 1.45, 0), V(0.265 * s, 1.17, 0), V(0.325 * s, 0.915, 0), V(0.345 * s, 0.8, 0)];
    const ch = makeChain(pts, ['chest', 'upperarm.' + nm, 'forearm.' + nm, 'hand.' + nm], [0, 0.09, 0.05, 0.03]);
    const rs = [];
    const sleeveY = 1.45 - o.sleeve * 0.42, ays = []; for (let y = 0.92; y <= 1.475; y += 0.0395) ays.push(y); if (sleeveY > 0.93 && sleeveY < 1.46) ays.push(sleeveY - 0.0004, sleeveY + 0.0004); ays.sort((a, b) => a - b);
    for (const y of ays) {
      const [rx, rz] = interp(armTab, y);
      // centre line follows the bones (shoulder -> elbow -> wrist)
      const cx = y > 1.17 ? lerp(0.265, 0.19, (y - 1.17) / 0.28) : lerp(0.325, 0.265, (y - 0.915) / 0.255);
      const f = o.sleeve > 3 || y > 1.45 - o.sleeve * 0.42 ? 1.03 : 1;
      rs.push(ringAt(cx * s, y, y > 1.3 ? -0.003 : 0.004, rx * f, rz * f, rz * f, 12));
    }
    B.loft(rs, (p) => ch.w(p), (i, j, p) => ((o.sleeve > 3 || p.y > 1.45 - o.sleeve * 0.42) ? shirt : skin), false, false);
    // hand: palm + 4 two-joint fingers + thumb (palm faces the body, fingers curl toward it)
    const pr = []; for (const [y, rx, rz] of [[0.928, 0.021, 0.030], [0.90, 0.022, 0.036], [0.87, 0.021, 0.041], [0.843, 0.018, 0.043]]) pr.push(ringAt((0.325 + (0.915 - y) * 0.15) * s, y, 0.0, rx, rz, rz, 10));
    B.loft(pr, () => [[BI['hand.' + nm], 1]], () => skin, true, true);
    const fz = [0.0255, 0.0085, -0.0085, -0.0255], fl = [0.076, 0.083, 0.077, 0.062], rr = [0.0098, 0.0092, 0.0088, 0.0080, 0.0058];
    for (let f = 0; f < 4; f++) {
      const ys = [0.843, 0.8195, 0.796, 0.796 - 0.5 * (fl[f] - 0.047), 0.843 - fl[f]];
      const rings = ys.map((y, i) => ringAt((0.338 + (0.843 - y) * 0.1) * s, y, fz[f], rr[i], rr[i], rr[i], 7));
      B.loft(rings, (p) => (p.y > 0.8 ? [[BI['fing.' + nm], 1]] : (p.y < 0.792 ? [[BI['fingtip.' + nm], 1]] : [[BI['fing.' + nm], 0.5], [BI['fingtip.' + nm], 0.5]])), () => skin, true, true);
    }
    const trg = []; for (const [y, z, r] of [[0.892, 0.026, 0.0125], [0.862, 0.042, 0.0112], [0.834, 0.05, 0.0098], [0.812, 0.053, 0.0078]]) trg.push(ringAt(0.318 * s, y, z, r, r, r, 7));
    B.loft(trg, () => [[BI['thumb.' + nm], 1]], () => skin, true, true);
    // shoulder cap
  }

  // ---------------- head
  const headTab = [[1.555, 0.028, 0.050, 0.040], [1.575, 0.050, 0.083, 0.062], [1.600, 0.064, 0.090, 0.085], [1.630, 0.072, 0.090, 0.098], [1.665, 0.077, 0.095, 0.103], [1.700, 0.078, 0.098, 0.106], [1.735, 0.075, 0.092, 0.106], [1.765, 0.064, 0.074, 0.095], [1.790, 0.040, 0.045, 0.065], [1.806, 0.012, 0.013, 0.016]];
  const hrs = []; for (let y = 1.555; y <= 1.8061; y += 0.0126) { const [a, f, b] = interp(headTab, y); hrs.push(ringAt(0, y, 0, a, f, b, 18, 2.2)); }
  const headW = () => [[BI['head'], 1]];
  B.loft(hrs, headW, () => skin, true, true);
  const hz = (y) => interp(headTab, y)[1];
  // eyes
  for (const s of [1, -1]) {
    B.geo(ell(1, 12, 8), M4(0.034 * s, 1.684, 0.078, 0.0118, 0.0112, 0.0118), 'head', [0.93, 0.92, 0.9]);
    B.geo(ell(1, 10, 8), M4(0.034 * s, 1.684, 0.0885, 0.0074, 0.0074, 0.0044), 'head', col(o.eye || '#3a2414'));
    B.geo(ell(1, 8, 6), M4(0.034 * s, 1.684, 0.0925, 0.0036, 0.0036, 0.002), 'head', [0.02, 0.02, 0.02]);
    B.geo(ell(1, 12, 6, 0, Math.PI * 2, 0, Math.PI * 0.5), M4(0.034 * s, 1.6865, 0.079, 0.0132, 0.0125, 0.0132), 'head', mulc(skin, 0.93)); // upper lid
    B.geo(new THREE.BoxGeometry(0.04, 0.0075, 0.012), M4(0.036 * s, 1.715, 0.092, 1, 1, 1, 0.1, 0, -0.12 * s), 'head', hair); // brow
    B.geo(ell(1, 8, 6), M4(0.0775 * s, 1.672, -0.006, 0.008, 0.027, 0.0175, 0, 0, 0.12 * s), 'head', mulc(skin, 0.95)); // ear
    B.geo(ell(1, 8, 6), M4(0.0115 * s, 1.639, hz(1.639) + 0.002, 0.0085, 0.008, 0.009), 'head', skin); // nostril wing
  }
  B.geo(ell(1, 10, 8), M4(0, 1.668, hz(1.668) + 0.004, 0.0115, 0.026, 0.014, -0.18), 'head', skin); // nose bridge
  B.geo(ell(1, 10, 8), M4(0, 1.640, hz(1.640) + 0.011, 0.0125, 0.0105, 0.0125), 'head', skin); // nose tip
  B.geo(ell(1, 10, 6), M4(0, 1.618, hz(1.618) - 0.0015, 0.0225, 0.0052, 0.0075), 'head', col('#9b5a55')); // upper lip
  B.geo(ell(1, 10, 6), M4(0, 1.6045, hz(1.6045) - 0.0015, 0.0195, 0.0062, 0.0085), 'head', col('#a86560')); // lower lip
  B.geo(new THREE.BoxGeometry(0.04, 0.0016, 0.004), M4(0, 1.6115, hz(1.6115) + 0.0005), 'head', [0.12, 0.05, 0.05]); // mouth line
  // hair
  const hairR = [];
  for (let y = 1.66; y <= 1.8125; y += 0.0145) {
    const [a, f, b] = interp(headTab, Math.min(y, 1.8055)).map((v) => v); const zc = 0.03 + (y - 1.655) * 0.45; const pts = ringAt(0, y, 0, a + 0.011, f + 0.011, b + 0.013, 18, 2.2);
    pts.forEach((p) => { if (p.z > zc) p.z = zc + (p.z - zc) * 0.0; if (p.z > zc && y < 1.72) p.z = zc; });
    hairR.push(pts);
  }
  if (o.hat !== 'beanie') B.loft(hairR, headW, () => hair, true, false);
  // ---------------- outfit pieces
  const cm = (x, y, z, sx, sy, sz, rx = 0, ry = 0, rz = 0) => M4(x, y, z, sx, sy, sz, rx, ry, rz);
  if (o.belt) { const bt = new THREE.CylinderGeometry(0.1745, 0.172, 0.04, 24, 1, true); B.geo(bt, cm(0, 1.0, 0.0, 1, 1, 0.66), 'hips', [0.05, 0.05, 0.05]); B.geo(new THREE.BoxGeometry(0.04, 0.034, 0.012), cm(0, 1.0, 0.112), 'hips', col('#c9a64a')); B.geo(new THREE.BoxGeometry(0.05, 0.12, 0.07), cm(-0.17, 0.93, 0.015), 'hips', [0.05, 0.05, 0.05]); B.geo(new THREE.BoxGeometry(0.05, 0.04, 0.07), cm(0.0, 1.0, -0.115), 'hips', [0.08, 0.08, 0.08]); }
  if (o.badge) B.geo(ell(1, 6, 4), cm(0.075, 1.33, 0.118, 0.024, 0.028, 0.006), 'chest', col('#d4af37'));
  if (o.tie) { B.geo(new THREE.BoxGeometry(0.036, 0.19, 0.012), cm(0, 1.35, 0.121, 1, 1, 1, -0.05), 'chest', col(o.tie)); B.geo(new THREE.BoxGeometry(0.044, 0.04, 0.02), cm(0, 1.455, 0.1), 'chest', mulc(col(o.tie), 1.1)); }
  if (o.lapel) for (const s of [1, -1]) B.geo(new THREE.BoxGeometry(0.05, 0.22, 0.012), cm(0.055 * s, 1.34, 0.112, 1, 1, 1, -0.05, 0, 0.3 * s), 'chest', mulc(shirt, 1.6));
  if (o.chain) { const t = new THREE.TorusGeometry(0.075, 0.0055, 6, 20); B.geo(t, cm(0, 1.43, 0.045, 1.15, 1.2, 1, 1.15), 'chest', col('#d4af37')); }
  if (o.hood) { const t = new THREE.TorusGeometry(0.075, 0.032, 8, 18); B.geo(t, cm(0, 1.495, -0.01, 1.2, 1, 1.0, Math.PI / 2 + 0.35), 'chest', mulc(shirt, 1.15)); }
  if (o.top !== undefined && !o.hood) { const t = new THREE.TorusGeometry(0.058, 0.009, 6, 16); B.geo(t, cm(0, 1.503, 0.0, 1, 1.0, 1, Math.PI / 2), 'chest', o.lapel || o.tie ? white : mulc(shirt, 1.15)); }
  if (o.hat === 'cop') { B.geo(new THREE.CylinderGeometry(0.085, 0.093, 0.075, 20), cm(0, 1.775, 0.0), 'head', mulc(shirt, 0.9)); B.geo(new THREE.CylinderGeometry(0.1, 0.098, 0.014, 20), cm(0, 1.74, 0.0, 1, 1, 1.05), 'head', mulc(shirt, 0.8)); B.geo(new THREE.BoxGeometry(0.15, 0.008, 0.07), cm(0, 1.736, 0.115, 1, 1, 1, 0.12), 'head', [0.03, 0.03, 0.03]); B.geo(ell(1, 6, 4), cm(0, 1.77, 0.0925, 0.014, 0.016, 0.004), 'head', col('#d4af37')); }
  if (o.hat === 'beanie') { B.geo(ell(1, 18, 10, 0, Math.PI * 2, 0, Math.PI * 0.62), cm(0, 1.722, -0.006, 0.092, 0.1, 0.108), 'head', [0.07, 0.07, 0.08]); B.geo(new THREE.TorusGeometry(0.087, 0.012, 6, 20), cm(0, 1.742, -0.004, 1, 1, 1.15, Math.PI / 2), 'head', [0.1, 0.1, 0.11]); }
  if (o.mask) {   // ski mask (balaclava): black wool over the lower face and neck, only an eye band shows
    const wool = [0.055, 0.055, 0.06];
    B.geo(ell(1, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.95), cm(0, 1.606, 0.004, 0.0895, 0.056, 0.1135), 'head', wool);
    B.geo(new THREE.CylinderGeometry(0.066, 0.074, 0.07, 14), cm(0, 1.545, 0.0), 'head', wool);
  }
  if (o.gloves) for (const s of [1, -1]) B.geo(new THREE.BoxGeometry(0.075, 0.13, 0.085), cm(0.322 * s, 0.86, 0.0), s > 0 ? 'hand.L' : 'hand.R', [0.04, 0.04, 0.045]);
  if (o.bag) { B.geo(new THREE.BoxGeometry(0.34, 0.2, 0.15), cm(0, 1.3, -0.16, 1, 1, 1, 0.1), 'chest', [0.07, 0.08, 0.14]); B.geo(new THREE.BoxGeometry(0.3, 0.03, 0.16), cm(0, 1.4, -0.16, 1, 1, 1, 0.1), 'chest', [0.03, 0.03, 0.04]); for (const sx of [1, -1]) B.geo(new THREE.BoxGeometry(0.03, 0.3, 0.012), cm(0.09 * sx, 1.36, 0.1, 1, 1, 1, -0.04), 'chest', [0.03, 0.03, 0.04]); }   // duffel bag of cash on his back, strapped over the shoulders
  if (o.glasses) { B.geo(new THREE.BoxGeometry(0.058, 0.032, 0.008), cm(0.034, 1.684, 0.098), 'head', [0.02, 0.02, 0.025]); B.geo(new THREE.BoxGeometry(0.058, 0.032, 0.008), cm(-0.034, 1.684, 0.098), 'head', [0.02, 0.02, 0.025]); B.geo(new THREE.BoxGeometry(0.16, 0.006, 0.006), cm(0, 1.694, 0.096), 'head', [0.04, 0.04, 0.04]); }
  if (o.hat === 'cap') { B.geo(ell(1, 16, 8, 0, Math.PI * 2, 0, Math.PI * 0.5), cm(0, 1.718, -0.004, 0.099, 0.094, 0.116), 'head', col(o.capCol || '#aa1c1c')); B.geo(new THREE.BoxGeometry(0.14, 0.007, 0.09), cm(0, 1.722, 0.118, 1, 1, 1, 0.1), 'head', col(o.capCol || '#aa1c1c')); }

  // ---------------- skeleton + mesh
  const bones = BONES.map((b) => { const bn = new THREE.Bone(); bn.name = b[0]; return bn; });
  BONES.forEach((b, i) => { const wp = V(...b[2]); if (b[1]) { const p = BONES.find((q) => q[0] === b[1]); bones[i].position.copy(wp).sub(V(...p[2])); bones[BI[b[1]]].add(bones[i]); } else bones[i].position.copy(wp); });
  const geom = B.build();
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.62, metalness: 0.0, envMapIntensity: 0.7 });
  // cheap surface detail (no textures to download): a fine cloth/skin grain in the colour and the normal, soft shading in the creases, and a faint warm rim so skin and cloth look lit from inside rather than painted
  mat.onBeforeCompile = (sh) => {
    sh.vertexShader = 'varying vec3 vHp;\n' + sh.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvHp = position;');
    sh.fragmentShader = 'varying vec3 vHp;\nfloat hh(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }\nfloat vn(vec3 x){ vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f); return mix(mix(mix(hh(i), hh(i + vec3(1,0,0)), f.x), mix(hh(i + vec3(0,1,0)), hh(i + vec3(1,1,0)), f.x), f.y), mix(mix(hh(i + vec3(0,0,1)), hh(i + vec3(1,0,1)), f.x), mix(hh(i + vec3(0,1,1)), hh(i + vec3(1,1,1)), f.x), f.y), f.z); }\n' + sh.fragmentShader
      .replace('#include <color_fragment>', '#include <color_fragment>\n float gr = vn(vHp * 150.0) * 0.6 + vn(vHp * 40.0) * 0.4; diffuseColor.rgb *= 0.86 + 0.28 * gr;')
      .replace('#include <normal_fragment_maps>', '#include <normal_fragment_maps>\n { vec3 e = vec3(0.012, 0.0, 0.0); float c0 = vn(vHp * 110.0); vec3 g3 = vec3(vn(vHp * 110.0 + e.xyy) - c0, vn(vHp * 110.0 + e.yxy) - c0, vn(vHp * 110.0 + e.yyx) - c0); normal = normalize(normal + 0.3 * g3); }')
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\n { float fr = pow(1.0 - clamp(dot(normalize(vViewPosition), normal), 0.0, 1.0), 2.5); totalEmissiveRadiance += diffuseColor.rgb * fr * 0.22; }');
  };
  const mesh = new THREE.SkinnedMesh(geom, mat);
  const skel = new THREE.Skeleton(bones); mesh.add(bones[0]); mesh.bind(skel);
  mesh.castShadow = true; mesh.frustumCulled = false;
  const group = new THREE.Group(); group.add(mesh);
  const bn = {}; bones.forEach((b) => { bn[b.name] = b; });
  const rest = {}; bones.forEach((b) => { rest[b.name] = b.position.clone(); });
  // pistol (held in the right hand)
  const gun = new THREE.Group();
  const gm = new THREE.MeshStandardMaterial({ color: '#202225', roughness: 0.35, metalness: 0.85 });
  const gm2 = new THREE.MeshStandardMaterial({ color: '#0e0e10', roughness: 0.6, metalness: 0.3 });
  const part = (w, h, d, x, y, z, m = gm, rx = 0) => { const q = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); q.position.set(x, y, z); q.rotation.x = rx; return q; };
  const gp = new THREE.Group(); // gun coords: +z barrel, +y up, origin = grip centre
  gp.add(part(0.03, 0.036, 0.19, 0, 0.074, 0.03), part(0.026, 0.026, 0.13, 0, 0.044, 0.01, gm2), part(0.03, 0.105, 0.042, 0, 0.0, -0.012, gm2, -0.12), part(0.006, 0.03, 0.05, 0, 0.034, 0.05, gm2), part(0.008, 0.012, 0.01, 0, 0.096, 0.115), part(0.012, 0.01, 0.01, 0, 0.096, -0.055));
  const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.0075, 0.0075, 0.03, 8), gm); bar.rotation.x = Math.PI / 2; bar.position.set(0, 0.074, 0.14); gp.add(bar);
  // map gun axes onto the hand: gun x -> hand x, gun up -> hand +z, gun forward -> hand -y
  gp.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(V(1, 0, 0), V(0, 0, 1), V(0, -1, 0)));
  // melee bat + AK-47 (same gun frame as the pistol: +z along the fingers, +y up). Which one shows is chosen by the actor (st.weapon).
  const wood = new THREE.MeshStandardMaterial({ color: '#b9854a', roughness: 0.6, metalness: 0.02 }), dwood = new THREE.MeshStandardMaterial({ color: '#6b3f1e', roughness: 0.55, metalness: 0.02 });
  const bat = new THREE.Group(); { const m = new THREE.Mesh(new THREE.CylinderGeometry(0.036, 0.016, 0.8, 10), wood); m.position.set(0, 0.3, 0); bat.add(m);
    const k = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.03, 8), wood); k.position.set(0, -0.11, 0); bat.add(k); const t = new THREE.Mesh(new THREE.SphereGeometry(0.036, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2), wood); t.position.set(0, 0.7, 0); bat.add(t); }
  const ak = new THREE.Group(); { const A = (w, h, d, x, y, z, m = gm, rx = 0) => { const q = part(w, h, d, x, y, z, m, rx); ak.add(q); return q; };
    A(0.045, 0.07, 0.34, 0, 0.07, 0.12); A(0.04, 0.04, 0.24, 0, 0.065, 0.4, dwood); A(0.036, 0.022, 0.2, 0, 0.115, 0.38, gm2);
    A(0.03, 0.12, 0.05, 0, -0.01, 0.0, dwood, -0.2); A(0.034, 0.17, 0.07, 0, -0.03, 0.2, gm2, 0.35); A(0.04, 0.09, 0.3, 0, 0.04, -0.26, dwood, 0.12);
    A(0.008, 0.035, 0.008, 0, 0.14, 0.52); A(0.01, 0.025, 0.012, 0, 0.14, 0.14);
    const br = new THREE.Mesh(new THREE.CylinderGeometry(0.0085, 0.0085, 0.2, 8), gm); br.rotation.x = Math.PI / 2; br.position.set(0, 0.075, 0.62); ak.add(br); }
  bat.visible = ak.visible = false;
  for (const o of [bat, ak]) o.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(V(1, 0, 0), V(0, 0, 1), V(0, -1, 0)));
  gun.add(bat, ak);
  gun.add(gp); gun.position.set(0.026, -0.052, 0); gun.visible = false; bn['hand.R'].add(gun);
  let tris = geom.index.count / 3;
  const ch = { group, mesh, bones: bn, rest, gun, wmesh: { pistol: gp, bat, ak }, tris: Math.round(tris), outfit: o };
  ch.pose = (name, t = 0, k = 1) => poseChar(ch, name, t, k);
  return ch;
}

// ---------------------------------------------------------------- procedural animation
const R = (b, x = 0, y = 0, z = 0) => b.rotation.set(x, y, z);
// plays a baked mocap clip: walk/run loop (t = the same gait phase the procedural walk uses), jump (t = vertical speed / 7), punch/kick (t = progress 0..1)
const _qa = new THREE.Quaternion(), _qb = new THREE.Quaternion();
function mocapPose(ch, name, t) {
  const c = MOCAP[name], n = c.n, b = ch.bones; let f;
  if (c.loop) { const cyc = (((t * (name === 'run' ? 1.43 : 0.955)) % 1) + 1) % 1; f = cyc * n; }
  else if (name === 'jump') f = Math.max(0, Math.min(1, (1 - t) / 2)) * (n - 1);
  else f = Math.max(0, Math.min(1, t)) * (n - 1);
  const i0 = Math.floor(f) % n, i1 = c.loop ? (i0 + 1) % n : Math.min(n - 1, i0 + 1), u = f - Math.floor(f);
  for (let k = 0; k < MOCAP_BONES.length; k++) {
    const o = k * 4; _qa.set(c.q[i0 * 68 + o], c.q[i0 * 68 + o + 1], c.q[i0 * 68 + o + 2], c.q[i0 * 68 + o + 3]); _qb.set(c.q[i1 * 68 + o], c.q[i1 * 68 + o + 1], c.q[i1 * 68 + o + 2], c.q[i1 * 68 + o + 3]);
    b[MOCAP_BONES[k]].quaternion.copy(_qa).slerp(_qb, u);
  }
  b.hips.position.y = c.y[i0] + (c.y[i1] - c.y[i0]) * u;
}
export function poseChar(ch, name, t = 0, k = 1) {
  const b = ch.bones, rest = ch.rest;
  for (const n in b) { b[n].rotation.set(0, 0, 0); b[n].position.copy(rest[n]); }
  ch.gun.visible = false;
  b['upperarm.L'].rotation.order = 'YXZ'; b['upperarm.R'].rotation.order = 'YXZ';
  const curl = (sd, a) => { const sg = sd === 'L' ? -1 : 1; R(b['fing.' + sd], 0, 0, sg * a); R(b['fingtip.' + sd], 0, 0, sg * a * 0.95); R(b['thumb.' + sd], 0, 0, sg * a * 0.3); };
  curl('L', 0.3); curl('R', 0.3);
  const armRest = 0.1; // arms hang slightly out
  const setArms = (lx, rx) => { R(b['upperarm.L'], lx, 0, -armRest); R(b['upperarm.R'], rx, 0, armRest); };
  if (MOCAP[name] && ch.mocap !== false) { mocapPose(ch, name, t); return; }
  if (name === 'idle') {
    const br = Math.sin(t * 1.6) * 0.012;
    R(b.chest, br, 0, 0); R(b.head, -br * 0.5, 0, 0); setArms(0, 0); R(b['forearm.L'], -0.12, 0, 0); R(b['forearm.R'], -0.12, 0, 0);
    R(b['upperleg.L'], -0.02, 0, 0.03); R(b['upperleg.R'], 0.02, 0, -0.03);
  } else if (name === 'walk' || name === 'run') {
    const run = name === 'run', ph = t * (run ? 9 : 6), s = Math.sin(ph), c = Math.cos(ph);
    const A = run ? 0.95 : 0.52, Kn = run ? 1.5 : 0.85, AA = run ? 0.95 : 0.5;
    R(b['upperleg.L'], -A * s, 0, 0.03); R(b['upperleg.R'], A * s, 0, -0.03);
    R(b['lowerleg.L'], 0.1 + Kn * Math.max(0, -c * 0.9 + 0.1) * (s < 0 ? 0.35 : 1), 0, 0); R(b['lowerleg.R'], 0.1 + Kn * Math.max(0, c * 0.9 + 0.1) * (s > 0 ? 0.35 : 1), 0, 0);
    R(b['foot.L'], -0.15 * s, 0, 0); R(b['foot.R'], 0.15 * s, 0, 0);
    setArms(AA * s, -AA * s); R(b['forearm.L'], -(run ? 1.1 : 0.35) - 0.2 * Math.max(0, -s), 0, 0); R(b['forearm.R'], -(run ? 1.1 : 0.35) - 0.2 * Math.max(0, s), 0, 0);
    R(b.spine, run ? 0.2 : 0.04, -0.12 * s * (run ? 1.2 : 1), 0); R(b.chest, 0, 0.12 * s * (run ? 1.2 : 1), 0); R(b.head, run ? -0.12 : -0.02, 0, 0);
    b.hips.position.y = rest.hips.y - (run ? 0.05 : 0.025) + Math.abs(c) * (run ? 0.06 : 0.03); b.hips.rotation.y = 0.1 * s * (run ? 1 : 0.8);
    b['upperarm.L'].rotation.z = -armRest - (run ? 0.12 : 0); b['upperarm.R'].rotation.z = armRest + (run ? 0.12 : 0);
    curl('L', run ? 1.15 : 0.4); curl('R', run ? 1.15 : 0.4);
  } else if (name === 'aim' || name === 'aimLow') {
    ch.gun.visible = true;
    b.hips.position.y = rest.hips.y - 0.07;
    R(b['upperleg.L'], -0.3, 0, 0.12); R(b['upperleg.R'], 0.2, 0, -0.12); R(b['lowerleg.L'], 0.38, 0, 0); R(b['lowerleg.R'], 0.3, 0, 0); R(b['foot.L'], -0.08, 0, 0); R(b['foot.R'], 0.1, 0, 0);
    if (name === 'aim') {
      // two-handed hold, arms straight out at chest height, hands meeting in front of the sternum, head looking down the sights
      R(b.spine, 0.1, 0.12, 0); R(b.chest, 0.05, 0.06, 0); R(b.head, -0.16, -0.18, 0);
      R(b['upperarm.R'], -1.6, 0.08, 0.25); R(b['forearm.R'], -0.12, 0, 0.04); R(b['hand.R'], 0, 0, 0);
      R(b['upperarm.L'], -1.58, -0.43, -0.25); R(b['forearm.L'], -0.26, 0, -0.06); R(b['hand.L'], 0, 0, 0);
      curl('R', 1.25); curl('L', 1.05);
      b['thumb.R'].rotation.set(0, 0, 0.1); b['thumb.L'].rotation.set(0, 0, -0.1);
    } else {
      // low ready: pistol held close to the chest pointing forward
      R(b.spine, 0.08, 0.1, 0); R(b.head, -0.08, -0.12, 0);
      R(b['upperarm.R'], -0.55, 0.15, 0.2); R(b['forearm.R'], -1.2, 0, 0.0); R(b['hand.R'], 0, 0, 0);
      R(b['upperarm.L'], -0.6, -0.2, -0.2); R(b['forearm.L'], -1.25, 0, 0); R(b['hand.L'], 0, 0, 0);
      curl('R', 1.25); curl('L', 0.9);
    }
  } else if (name === 'batswing') {   // two-handed baseball swing: t = 0..1 progress. wind up over the right shoulder, whip around at hip-shoulder height, follow through
    const u = Math.max(0, Math.min(1, t)), e = (x) => x * x * (3 - 2 * x), wind = e(Math.min(1, u / 0.32)), hit = e(Math.max(0, Math.min(1, (u - 0.32) / 0.28))), fol = e(Math.max(0, (u - 0.6) / 0.4));
    const sw = -0.9 + 1.9 * hit - 0.25 * fol; // body/arm yaw: back (-) to across the front (+)
    b.hips.position.y = rest.hips.y - 0.06;
    R(b['upperleg.L'], -0.28, 0, 0.14); R(b['upperleg.R'], 0.25, 0, -0.14); R(b['lowerleg.L'], 0.35, 0, 0); R(b['lowerleg.R'], 0.3, 0, 0);
    b.hips.rotation.y = 0.5 * (hit * 1.2 - wind * 0.8) ;
    R(b.spine, 0.08, 0.6 * (hit - wind * 0.9), 0); R(b.chest, 0.04, 0.5 * (hit - wind * 0.9), 0); R(b.head, -0.1, -0.3 * (hit - wind * 0.9), 0);
    // both hands stay together on the handle (arms hold their shape relative to the chest, the body turns), the wrists cock the bat up then lay it flat through the hit
    const cock = 1.0 * (wind - hit) + 0.3 * hit - 0.5 * fol;
    R(b['upperarm.R'], -1.15, -0.05, 0.22); R(b['forearm.R'], -0.75, 0, 0.05); R(b['hand.R'], -cock, 0, 0);
    R(b['upperarm.L'], -1.15, -0.5, -0.22); R(b['forearm.L'], -0.85, 0, -0.05); R(b['hand.L'], -cock, 0, 0);
    curl('R', 1.35); curl('L', 1.25);
  } else if (name === 'jump') {   // GTA-style leap: t = vertical speed / 7 (+1 rising ... -1 falling). Lead knee driven up, trailing leg kicked back, fists pumping, body leaning into the jump.
    const k = Math.max(0, Math.min(1, (t + 1) / 2)), m = (fall, rise) => fall + (rise - fall) * k;
    b.hips.position.y = rest.hips.y - m(0.02, 0.1);
    R(b.spine, m(0.12, 0.3), 0, 0); R(b.chest, 0.05, m(0.05, -0.15), 0); R(b.head, -m(0.1, 0.22), 0, 0);
    R(b['upperleg.L'], m(-0.55, -1.45), 0, 0.08); R(b['lowerleg.L'], m(0.5, 1.6), 0, 0); R(b['foot.L'], m(0.2, 0.3), 0, 0);
    R(b['upperleg.R'], m(0.05, 0.5), 0, -0.1); R(b['lowerleg.R'], m(0.3, 1.2), 0, 0);
    R(b['upperarm.R'], m(-0.9, -1.25), 0, m(0.9, 0.15)); R(b['forearm.R'], m(-0.5, -1.45), 0, 0); R(b['upperarm.L'], m(-0.6, 0.55), 0, m(-0.9, -0.15)); R(b['forearm.L'], m(-0.5, -0.9), 0, 0);
    curl('R', 1.2); curl('L', 1.2);
  } else if (name === 'pax') {   // front passenger: relaxed, hands resting on the lap
    R(b['upperleg.L'], -1.42, 0, 0.05); R(b['upperleg.R'], -1.42, 0, -0.05); R(b['lowerleg.L'], 0.55, 0, 0); R(b['lowerleg.R'], 0.55, 0, 0); R(b['foot.L'], -0.35, 0, 0); R(b['foot.R'], -0.35, 0, 0); b.hips.position.y = rest.hips.y - 0.5; R(b.spine, -0.12, 0, 0);
    R(b['upperarm.L'], -0.25, 0, -0.12); R(b['upperarm.R'], -0.25, 0, 0.12); R(b['forearm.L'], -1.25, 0, 0.2); R(b['forearm.R'], -1.25, 0, -0.2); R(b.head, 0, 0.12 * Math.sin(t * 0.4), 0);
  } else if (name === 'ride') {   // motorbike: straddling the seat, torso leaning to the bars, hands on the grips, feet on the pegs
    b.hips.position.y = rest.hips.y - 0.5; R(b.spine, 0.3, 0, 0); R(b.chest, 0.12, 0, 0); R(b.head, -0.3, 0, 0);
    R(b['upperleg.L'], -1.1, 0, 0.3); R(b['upperleg.R'], -1.1, 0, -0.3); R(b['lowerleg.L'], 1.25, 0, 0); R(b['lowerleg.R'], 1.25, 0, 0); R(b['foot.L'], 0.3, 0, 0); R(b['foot.R'], 0.3, 0, 0);
    R(b['upperarm.L'], -1.15, 0, -0.18); R(b['upperarm.R'], -1.15, 0, 0.18); R(b['forearm.L'], -0.35, 0, 0); R(b['forearm.R'], -0.35, 0, 0);
    curl('R', 1.0); curl('L', 1.0);
  } else if (name === 'sit') {
    R(b['upperleg.L'], -1.42, 0, 0.05); R(b['upperleg.R'], -1.42, 0, -0.05); R(b['lowerleg.L'], 0.55, 0, 0); R(b['lowerleg.R'], 0.55, 0, 0); R(b['foot.L'], -0.35, 0, 0); R(b['foot.R'], -0.35, 0, 0); b.hips.position.y = rest.hips.y - 0.5; R(b.spine, -0.12, 0, 0);   // driving seat: knees bent, feet forward on the pedals (not hanging through the floor)
    R(b['upperarm.L'], -0.9, 0, -0.1); R(b['upperarm.R'], -0.9, 0, 0.1); R(b['forearm.L'], -0.6, 0, 0); R(b['forearm.R'], -0.6, 0, 0);
  }
  else if (name === 'relaxed') {   // natural stand: arms loose at the sides, weight on one leg, slow breathing and a glance around
    const br = Math.sin(t * 1.4) * 0.012, gl = Math.sin(t * 0.5) * 0.18;
    R(b.chest, br, 0.03, 0); R(b.head, -br, gl, 0); R(b['upperleg.L'], -0.03, 0, 0.05); R(b['upperleg.R'], 0.06, 0, -0.1); R(b['lowerleg.R'], 0.06, 0, 0);
    R(b['upperarm.R'], 0.05, 0, 0.1); R(b['forearm.R'], -0.25, 0, 0); R(b['upperarm.L'], 0.05, 0, -0.1); R(b['forearm.L'], -0.25, 0, 0);
    curl('R', 0.45); curl('L', 0.45);
  } else if (name === 'pocket') { // hands in the pockets, easy stance, small sway
    const sw = Math.sin(t * 0.9) * 0.015;
    R(b.chest, sw, 0.03, 0); R(b.head, -0.02, -0.12 + sw, 0); R(b['upperleg.L'], 0.05, 0, 0.08); R(b['upperleg.R'], -0.04, 0, -0.04);
    R(b['upperarm.R'], 0.1, 0, 0.12); R(b['forearm.R'], -0.55, 0, 0.55); R(b['upperarm.L'], 0.1, 0, -0.12); R(b['forearm.L'], -0.55, 0, -0.55);
    curl('R', 0.7); curl('L', 0.7);
  } else if (name === 'thumbs') { // thumbs up with a relaxed grin
    const br = Math.sin(t * 1.5) * 0.01;
    R(b.chest, br, -0.06, 0); R(b.head, -0.02, 0.12, 0); R(b['upperleg.L'], -0.02, 0, 0.06); R(b['upperleg.R'], 0.04, 0, -0.08);
    R(b['upperarm.R'], -0.55, -0.15, 0.35); R(b['forearm.R'], -1.5, 0, 0.4); R(b['hand.R'], 0, 0, 0); curl('R', 1.25); R(b['thumb.R'], 0, 0, -0.9);
    R(b['upperarm.L'], 0.1, 0, -0.12); R(b['forearm.L'], -0.6, 0, -0.4);
  } else if (name === 'wave') {   // friendly wave
    const w = Math.sin(t * 6) * 0.35, br = Math.sin(t * 1.5) * 0.01;
    R(b.chest, br, -0.05, 0); R(b.head, -0.02, 0.1, 0); R(b['upperleg.L'], -0.02, 0, 0.05); R(b['upperleg.R'], 0.02, 0, -0.05);
    R(b['upperarm.R'], -0.1, 0, -1.0); R(b['forearm.R'], 0, 0, -1.3 + w * 0.55); R(b['hand.R'], 0, 0, -w * 0.3); curl('R', 0.15);   // a normal wave: elbow out at the SIDE of the body, forearm up, the hand sways beside the head
    R(b['upperarm.L'], 0.1, 0, -0.12); R(b['forearm.L'], -0.5, 0, -0.35);
  } else if (name === 'phone') {  // checking the phone
    const br = Math.sin(t * 1.5) * 0.01;
    R(b.chest, 0.06 + br, 0, 0); R(b.head, 0.38, 0, 0); R(b['upperleg.L'], -0.02, 0, 0.05); R(b['upperleg.R'], 0.03, 0, -0.05);
    R(b['upperarm.R'], -0.65, 0.2, 0.2); R(b['forearm.R'], -1.7, 0, 0.5); R(b['hand.R'], -0.2, 0, 0); curl('R', 0.8);
    R(b['upperarm.L'], 0.1, 0, -0.12); R(b['forearm.L'], -0.5, 0, -0.35);
  }
  else if (name === 'crouch') {   // low, knees bent, ready to sneak
    const br = Math.sin(t * 2) * 0.01;
    b.hips.position.y = rest.hips.y - 0.4; b.hips.position.z = rest.hips.z + 0.04;
    R(b['upperleg.L'], -1.05, 0, 0.12); R(b['upperleg.R'], -1.05, 0, -0.12); R(b['lowerleg.L'], 1.95, 0, 0); R(b['lowerleg.R'], 1.95, 0, 0);
    R(b.spine, 0.3 + br, 0, 0); R(b.chest, 0.1, 0, 0); R(b.head, -0.3, 0, 0);
    R(b['upperarm.L'], -0.5, 0, -0.1); R(b['upperarm.R'], -0.5, 0, 0.1); R(b['forearm.L'], -0.7, 0, 0); R(b['forearm.R'], -0.7, 0, 0);
  } else if (name === 'sitg') {   // sitting on the ground, legs out, leaning back on the hands
    const br = Math.sin(t * 1.4) * 0.01;
    b.hips.position.y = rest.hips.y - 0.7;
    R(b['upperleg.L'], -1.5, 0, 0.18); R(b['upperleg.R'], -1.5, 0, -0.18); R(b['lowerleg.L'], 0.12, 0, 0); R(b['lowerleg.R'], 0.12, 0, 0);
    R(b.spine, -0.12 + br, 0, 0); R(b.head, 0.08, Math.sin(t * 0.5) * 0.25, 0);
    R(b['upperarm.L'], 0.45, 0, -0.25); R(b['upperarm.R'], 0.45, 0, 0.25); R(b['forearm.L'], -0.15, 0, 0); R(b['forearm.R'], -0.15, 0, 0);
    curl('L', 0.3); curl('R', 0.3);
  } else if (name === 'punch') {  // t = progress 0..1: wind-up, straight right (a step-in jab with hip and shoulder turn), return
    const e = t < 0.25 ? -t / 0.25 * 0.4 : t < 0.5 ? -0.4 + (t - 0.25) / 0.25 * 1.4 : Math.max(0, 1 - (t - 0.5) / 0.4);   // -0.4 (back) .. 1 (full extension)
    const ex = Math.max(0, e), bk = Math.min(0, e);
    b.hips.position.y = rest.hips.y - 0.05 * ex; b.hips.position.z = rest.hips.z + 0.06 * ex;   // sink and step into the punch
    R(b.hips, 0, 0.5 * ex - 0.25 * -bk, 0); R(b.chest, 0.08 * ex, -0.75 * ex - 0.3 * -bk, 0); R(b.spine, 0.14 * ex, 0, 0); R(b.head, 0, 0.55 * ex, 0);
    R(b['upperleg.L'], -0.4 - 0.3 * ex, 0, 0.1); R(b['upperleg.R'], 0.3 + 0.15 * ex, 0, -0.1); R(b['lowerleg.L'], 0.3 + 0.2 * ex, 0, 0); R(b['lowerleg.R'], 0.15 + 0.3 * ex, 0, 0);   // lead foot forward, back heel drives
    R(b['upperarm.R'], -0.95 - 0.8 * ex - bk * 0.35, 0, 0.12 - 0.12 * ex); R(b['forearm.R'], -2.0 + 1.9 * ex, 0, 0); curl('R', 1.3);
    R(b['upperarm.L'], -0.9 - 0.15 * ex, 0, -0.22); R(b['forearm.L'], -1.95, 0, 0); curl('L', 1.3);   // the other fist stays up by the chin like a boxer's guard: a one-arm jab
  } else if (name === 'kick') {   // t = progress 0..1: weight onto the left leg, right knee lifts, the foot drives forward-down (a stomp / low kick), recovery
    const lift = t < 0.3 ? t / 0.3 : t < 0.55 ? 1 : Math.max(0, 1 - (t - 0.55) / 0.35);              // knee up
    const ext = t < 0.3 ? 0 : t < 0.5 ? (t - 0.3) / 0.2 : Math.max(0, 1 - (t - 0.5) / 0.3);          // leg straightens into the target
    b.hips.position.y = rest.hips.y - 0.05 * lift;
    R(b.hips, 0, 0.12 * ext, 0); R(b.spine, -0.12 * lift + 0.1 * ext, 0, 0); R(b.chest, -0.1 * ext, 0, 0); R(b.head, 0.08, 0, 0);
    R(b['upperleg.L'], -0.12 * lift, 0, 0.04); R(b['lowerleg.L'], 0.2 * lift, 0, 0); R(b['foot.L'], 0.05, 0, 0);               // the standing leg bends a little and carries the weight
    R(b['upperleg.R'], -1.25 * lift + 0.75 * ext, 0, -0.06); R(b['lowerleg.R'], 1.5 * lift - 1.45 * ext, 0, 0); R(b['foot.R'], -0.4 * ext, 0, 0);
    R(b['upperarm.L'], -0.5 * lift, 0, -0.45 * lift - 0.1); R(b['forearm.L'], -0.5, 0, 0); R(b['upperarm.R'], 0.35 * lift, 0, 0.55 * lift + 0.1); R(b['forearm.R'], -0.4, 0, 0);   // arms swing out for balance
    curl('L', 0.8); curl('R', 0.8);
  }
  else if (name === 'scared') {   // cowering: knees bent, arms up in front of the face, trembling
    const tr = Math.sin(t * 22) * 0.03;
    b.hips.position.y = rest.hips.y - 0.2;
    R(b['upperleg.L'], -0.6, 0, 0.12); R(b['upperleg.R'], -0.6, 0, -0.12); R(b['lowerleg.L'], 1.0, 0, 0); R(b['lowerleg.R'], 1.0, 0, 0);
    R(b.spine, 0.28 + tr, 0, 0); R(b.chest, 0.1, tr, 0); R(b.head, 0.2, tr * 2, 0);
    R(b['upperarm.R'], -1.9, 0, 0.25); R(b['forearm.R'], -1.8, 0, 0.7); R(b['upperarm.L'], -1.9, 0, -0.25); R(b['forearm.L'], -1.8, 0, -0.7);
    curl('R', 0.8); curl('L', 0.8);
  }
  else if (name === 'fall') {     // knocked flying: limbs flung out
    const f = Math.sin(t * 14) * 0.08;
    R(b.spine, -0.15, 0, 0); R(b.head, -0.3, 0, 0);
    R(b['upperarm.L'], -0.4, 0, -1.3 + f); R(b['upperarm.R'], -0.4, 0, 1.3 - f); R(b['forearm.L'], -0.5, 0, 0); R(b['forearm.R'], -0.5, 0, 0);
    R(b['upperleg.L'], -0.5, 0, 0.35); R(b['upperleg.R'], 0.15, 0, -0.35); R(b['lowerleg.L'], 0.7, 0, 0); R(b['lowerleg.R'], 0.5, 0, 0);
  }
  else if (name === 'crouchwalk') {   // sneaking: low stance, legs still stepping
    const ph = t * 3.4, s = Math.sin(ph), c = Math.cos(ph);
    b.hips.position.y = rest.hips.y - 0.4 + Math.abs(c) * 0.025; b.hips.position.z = rest.hips.z + 0.04;
    R(b['upperleg.L'], -1.05 - 0.45 * s, 0, 0.12); R(b['upperleg.R'], -1.05 + 0.45 * s, 0, -0.12);
    R(b['lowerleg.L'], 1.95 - 0.2 * s + 0.35 * Math.max(0, -c), 0, 0); R(b['lowerleg.R'], 1.95 + 0.2 * s + 0.35 * Math.max(0, c), 0, 0);
    R(b['foot.L'], 0.15 * s, 0, 0); R(b['foot.R'], -0.15 * s, 0, 0);
    R(b.spine, 0.3, -0.08 * s, 0); R(b.chest, 0.1, 0.08 * s, 0); R(b.head, -0.3, 0, 0);
    R(b['upperarm.L'], -0.5 + 0.3 * s, 0, -0.1); R(b['upperarm.R'], -0.5 - 0.3 * s, 0, 0.1); R(b['forearm.L'], -0.7, 0, 0); R(b['forearm.R'], -0.7, 0, 0);
  }
  void k;
}
