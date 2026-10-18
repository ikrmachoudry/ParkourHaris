// HCAR: procedural "hero" cars built in code. Smooth lofted body, real wheel arches, rim + tyre wheels, interior,
// and HINGED doors / bonnet / boot that open and close.  ~12-18k triangles per car (detail 'hi'), ~6k ('lo').
// Car space: +x = front, +y = up, +z = right side.  1 unit = 1 metre.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export const CAR_STYLES = {
  sedan: {
    L: 4.6, w: 0.92, yb: 0.27, beltF: 0.70, beltR: 0.85,
    prof: [[2.3, 0.70], [2.0, 0.77], [1.3, 0.89], [0.98, 0.96], [0.05, 1.46], [-0.95, 1.45], [-1.6, 1.01], [-2.0, 0.98], [-2.3, 0.93]],
    axle: 1.36, wr: 0.335, ww: 0.24, arch: 0.43,
    doors: [[-0.14, 0.86], [-0.90, -0.20]],
    wind: [0.14, 0.93], rear: [-1.50, -0.98], hood: [0.99, 2.18], trunk: [-2.18, -1.60],
    seatX: [-0.05, -0.78],
  },
  hatch: {
    L: 3.95, w: 0.87, yb: 0.27, beltF: 0.68, beltR: 0.84,
    prof: [[1.98, 0.68], [1.7, 0.75], [1.15, 0.87], [0.8, 0.93], [0.05, 1.46], [-0.85, 1.47], [-1.45, 1.36], [-1.75, 1.08], [-1.98, 0.97]],
    axle: 1.2, wr: 0.31, ww: 0.2, arch: 0.4,
    doors: [[-0.12, 0.7], [-0.8, -0.18]],
    wind: [0.12, 0.78], rear: [-1.42, -0.9], hood: [0.82, 1.84], trunk: [-1.84, -1.5],
    seatX: [-0.05, -0.7], dashX: 0.52, bayX: 1.3, bootX: -1.65,
  },
  suv: {
    L: 4.7, w: 1.0, yb: 0.38, beltF: 0.98, beltR: 1.06,
    prof: [[2.35, 0.92], [2.05, 1.0], [1.4, 1.1], [1.0, 1.15], [0.25, 1.82], [-1.1, 1.84], [-2.0, 1.78], [-2.35, 1.62]],
    axle: 1.42, wr: 0.39, ww: 0.26, arch: 0.5,
    doors: [[-0.14, 0.9], [-0.95, -0.22]],
    wind: [0.2, 0.98], rear: [-1.7, -1.1], hood: [1.02, 2.2], trunk: [-2.2, -1.65],
    seatX: [0.0, -0.85], hly: 0.82, lift: 0.12,
  },
  coupe: {
    L: 4.5, w: 0.93, yb: 0.24, beltF: 0.64, beltR: 0.82, twoDoor: true,
    prof: [[2.25, 0.58], [1.9, 0.68], [1.25, 0.8], [0.55, 0.84], [0.0, 1.28], [-0.7, 1.28], [-1.35, 1.0], [-1.8, 0.9], [-2.25, 0.86]],
    axle: 1.36, wr: 0.33, ww: 0.26, arch: 0.43,
    doors: [[-0.25, 0.85]],
    wind: [0.0, 0.8], rear: [-1.3, -0.95], hood: [0.9, 2.18], trunk: [-2.18, -1.62],
    seatX: [-0.2, -0.8], dashX: 0.5, hly: 0.58,
  },
  sports: {
    L: 4.45, w: 0.97, yb: 0.2, beltF: 0.62, beltR: 0.75, twoDoor: true,
    prof: [[2.22, 0.56], [1.85, 0.66], [1.2, 0.74], [0.5, 0.8], [-0.05, 1.19], [-0.7, 1.21], [-1.25, 0.96], [-1.75, 0.88], [-2.22, 0.8]],
    axle: 1.34, wr: 0.33, ww: 0.3, arch: 0.44,
    doors: [[-0.3, 0.8]],
    wind: [-0.05, 0.75], rear: [-1.2, -0.92], hood: [0.85, 2.15], trunk: [-2.15, -1.65],
    seatX: [-0.25, -0.8], dashX: 0.45, hly: 0.52,
  },
};

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const sstep = (e0, e1, x) => { const t = clamp((x - e0) / (e1 - e0), 0, 1); return t * t * (3 - 2 * t); };

function cleanGeo(g, rgb = [1, 1, 1]) {
  if (g.index) g = g.toNonIndexed();
  g.deleteAttribute('uv'); g.deleteAttribute('uv1');
  const n = g.attributes.position.count, c = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { c[i * 3] = rgb[0]; c[i * 3 + 1] = rgb[1]; c[i * 3 + 2] = rgb[2]; }
  g.setAttribute('color', new THREE.BufferAttribute(c, 3));
  return g;
}
const xf = (g, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) => {
  g.applyMatrix4(new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz)), new THREE.Vector3(sx, sy, sz)));
  return g;
};
const rbox = (w, h, d, r = 0.03, seg = 1) => new RoundedBoxGeometry(w, h, d, seg, Math.min(r, w / 2 - 0.001, h / 2 - 0.001, d / 2 - 0.001));
const merge = (arr) => arr.length ? mergeGeometries(arr.map((g) => (g.index ? g.toNonIndexed() : g)), false) : null;

// ---------------------------------------------------------------- body loft
function buildGrid(sp, detail) {
  const hi = detail !== 'lo';
  const N = hi ? 72 : 36;
  const counts = hi ? [2, 2, 2, 3, 3, 3, 3, 3, 2] : [1, 1, 1, 2, 2, 2, 2, 2, 1];
  const kc = [0]; for (const c of counts) kc.push(kc[kc.length - 1] + c);
  const K = kc[kc.length - 1] + 1, R = 2 * K - 1;
  const xs = []; for (let i = 0; i <= N; i++) xs.push(-sp.L / 2 + (sp.L * i) / N);
  // roof / bonnet height profile, softened
  const pr = sp.prof.slice().sort((a, b) => a[0] - b[0]);
  const raw = xs.map((x) => { for (let j = 0; j < pr.length - 1; j++) if (x <= pr[j + 1][0]) return lerp(pr[j][1], pr[j + 1][1], (x - pr[j][0]) / (pr[j + 1][0] - pr[j][0])); return pr[pr.length - 1][1]; });
  let top = raw.slice();
  for (let pass = 0; pass < 3; pass++) top = top.map((_, i) => { let s = 0, c = 0; for (let d = -2; d <= 2; d++) { const j = clamp(i + d, 0, N); s += top[j]; c++; } return s / c; });
  const P = []; // P[i][k] = Vector3
  for (let i = 0; i <= N; i++) {
    const x = xs[i], t = x / (sp.L / 2), at = Math.abs(t);
    const sx = Math.pow(Math.max(0, 1 - Math.pow(at, 3.6)), 1 / 3.6);
    const yb = sp.yb + 0.2 * Math.pow(at, 4);
    const belt = lerp(sp.beltR, sp.beltF, (x + sp.L / 2) / sp.L);
    const ytop = Math.max(top[i], belt + 0.1), H = ytop - belt, c = clamp((H - 0.1) / 0.3, 0, 1), w = sp.w;
    const ctrl = [
      [0, yb], [w - 0.28, yb], [w - 0.05, yb + 0.06], [w - 0.005, yb + 0.27], [w + 0.005, belt - 0.2], [w, belt],
      [w - 0.01 - 0.05 * c, belt + 0.35 * H], [w - 0.07 - 0.14 * c, belt + 0.8 * H],
      [(w - 0.1 * c) * 0.6, ytop - 0.012], [0, ytop],
    ].map((p) => new THREE.Vector3(p[0], p[1], 0));
    const curve = new THREE.CatmullRomCurve3(ctrl, false, 'centripetal');
    const half = [];
    for (let s = 0; s < counts.length; s++) for (let j = 0; j < counts[s]; j++) half.push(curve.getPoint((s + j / counts[s]) / counts.length));
    half.push(curve.getPoint(1));
    const row = new Array(R);
    for (let k = 0; k < K; k++) { const p = half[k]; row[k] = new THREE.Vector3(x, p.y, p.x * sx); }
    for (let k = K; k < R; k++) { const p = row[R - 1 - k]; row[k] = new THREE.Vector3(x, p.y, -p.z); }
    // raked nose and tail: the upper body recedes behind the bumper
    for (let k = 0; k < R; k++) row[k].x -= Math.sign(x) * 0.22 * sstep(0.8, 1, at) * clamp((row[k].y - 0.4) / 0.35, 0, 1);
    // wheel arches: push the side surface inwards around each wheel
    for (let k = 0; k < R; k++) {
      const p = row[k]; if (Math.abs(p.z) < 0.4) continue;
      for (const wx of [sp.axle, -sp.axle]) {
        const d = Math.hypot(p.x - wx, p.y - sp.wr);
        if (d < sp.arch) { const f = sstep(sp.arch, sp.arch - 0.13, d); p.z -= Math.sign(p.z) * 0.17 * f; p.dent = Math.max(p.dent || 0, f); }
      }
    }
    P.push(row);
  }
  return { P, N, K, R, kc, xs };
}

// grid -> geometry (positions, colours); holes = list of {i0,i1,k0,k1} quads to leave out
function gridGeometry(G, colorFn, holes, flip, inset) {
  const { P, N, R } = G, pos = [], col = [];
  for (let i = 0; i <= N; i++) for (let k = 0; k < R; k++) {
    const p = P[i][k]; let y = p.y, z = p.z, x = p.x;
    if (inset) { z *= inset.z; y -= inset.y * (y > 0.6 ? 1 : 0); }
    pos.push(x, y, z);
    const c = colorFn ? colorFn(i, k, p) : [1, 1, 1]; col.push(c[0], c[1], c[2]);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  const idx = [], v = (i, k) => i * R + k;
  const full = [];
  for (let i = 0; i < N; i++) for (let k = 0; k < R - 1; k++) {
    const a = v(i, k), b = v(i + 1, k), c = v(i + 1, k + 1), d = v(i, k + 1);
    full.push(a, b, c, a, c, d);
  }
  g.setIndex(full); g.computeVertexNormals();
  const nrm = g.attributes.normal.array.slice();
  // orientation test on a right-side quad: outward is +z
  const a = v(N >> 1, 4), b = v((N >> 1) + 1, 4), c = v((N >> 1) + 1, 5);
  const pa = P[N >> 1][4], pb = P[(N >> 1) + 1][4], pc = P[(N >> 1) + 1][5];
  const n = new THREE.Vector3().subVectors(pb, pa).cross(new THREE.Vector3().subVectors(pc, pa));
  const bad = (n.z < 0) !== !!flip; // true -> must flip winding
  for (let i = 0; i < N; i++) for (let k = 0; k < R - 1; k++) {
    if (holes && holes.some((h) => i >= h.i0 && i < h.i1 && k >= h.k0 && k < h.k1)) continue;
    const A = v(i, k), B = v(i + 1, k), C = v(i + 1, k + 1), D = v(i, k + 1);
    if (bad) idx.push(A, C, B, A, D, C); else idx.push(A, B, C, A, C, D);
  }
  g.setIndex(idx);
  // use the full-surface normals so seams around holes shade smoothly (flip when inside-out)
  if (bad) for (let q = 0; q < nrm.length; q++) nrm[q] = -nrm[q];
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  void a; void b; void c;
  g._grid = { bad };
  return g;
}

// copy a rectangular piece of the grid (with shared normals), optionally shrunk in x by `gap`, offset along normals by `off`
function subGrid(G, full, i0, i1, k0, k1, { gap = 0, off = 0, rev = false, inward = 0, colorMul = null, holes = null } = {}) {
  const R = G.R, pos = [], nor = [], col = [], idx = [];
  const fp = full.attributes.position.array, fn = full.attributes.normal.array, fc = full.attributes.color.array;
  const cx = (G.P[i0][0].x + G.P[i1][0].x) / 2, hw = (G.P[i1][0].x - G.P[i0][0].x) / 2;
  const nI = i1 - i0 + 1, nK = k1 - k0 + 1;
  for (let i = i0; i <= i1; i++) for (let k = k0; k <= k1; k++) {
    const q = (i * R + k) * 3;
    let x = fp[q], y = fp[q + 1], z = fp[q + 2];
    const nx = fn[q], ny = fn[q + 1], nz = fn[q + 2];
    if (gap) x += (cx - x) * (gap / hw);
    x += nx * off; y += ny * off; z += nz * off;
    if (inward) z -= Math.sign(fp[q + 2]) * inward;
    pos.push(x, y, z); nor.push(rev ? -nx : nx, rev ? -ny : ny, rev ? -nz : nz);
    let m = 1;
    if (colorMul) m = colorMul(i - i0, k - k0, nI, nK);
    col.push(fc[q] * m, fc[q + 1] * m, fc[q + 2] * m);
  }
  const v = (a, b) => a * nK + b;
  for (let a = 0; a < nI - 1; a++) for (let b = 0; b < nK - 1; b++) {
    if (holes && holes.some((h) => i0 + a >= h.i0 && i0 + a < h.i1 && k0 + b >= h.k0 && k0 + b < h.k1)) continue;
    const A = v(a, b), B = v(a + 1, b), C = v(a + 1, b + 1), D = v(a, b + 1);
    const flip = full._grid.bad !== rev;
    if (flip) idx.push(A, C, B, A, D, C); else idx.push(A, B, C, A, C, D);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  g.setIndex(idx);
  return g;
}

// thickness strips joining an outer and an inner copy of the same sub-grid (door edges)
function rimStrips(G, i0, i1, k0, k1, inward) {
  const R = G.R, pos = [], idx = [];
  const ring = [];
  for (let i = i0; i <= i1; i++) ring.push([i, k0]);
  for (let k = k0 + 1; k <= k1; k++) ring.push([i1, k]);
  for (let i = i1 - 1; i >= i0; i--) ring.push([i, k1]);
  for (let k = k1 - 1; k > k0; k--) ring.push([i0, k]);
  for (const [i, k] of ring) { const p = G.P[i][k]; pos.push(p.x, p.y, p.z); pos.push(p.x, p.y, p.z - Math.sign(p.z) * inward); }
  const n = ring.length;
  for (let a = 0; a < n; a++) { const b = (a + 1) % n; idx.push(a * 2, b * 2, a * 2 + 1, b * 2, b * 2 + 1, a * 2 + 1); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx);
  const ng = g.toNonIndexed(); ng.computeVertexNormals();
  // two-sided via duplicate flipped copy
  return ng;
}

// ---------------------------------------------------------------- wheel
function makeWheelParts(sp, seg) {
  const R = sp.wr, W = sp.ww, h = W / 2;
  const tp = [[0.21, -h + 0.01], [0.27, -h], [R - 0.045, -h + 0.005], [R - 0.012, -h + 0.045], [R, -h + 0.09], [R + 0.002, 0], [R, h - 0.09], [R - 0.012, h - 0.045], [R - 0.045, h - 0.005], [0.27, h], [0.21, h - 0.01]];
  const tire = new THREE.LatheGeometry(tp.map((p) => new THREE.Vector2(p[0], p[1])), seg);
  xf(tire, 0, 0, 0, Math.PI / 2, 0, 0);
  const rp = [[0.0, h - 0.06], [0.06, h - 0.05], [0.09, h - 0.035], [0.14, h - 0.08], [0.205, h - 0.075], [0.23, h - 0.045], [0.225, -h + 0.06], [0.21, -h + 0.05]];
  const rim = new THREE.LatheGeometry(rp.map((p) => new THREE.Vector2(p[0], p[1])), seg);
  xf(rim, 0, 0, 0, Math.PI / 2, 0, 0);
  const sp5 = [];
  for (let s = 0; s < 5; s++) {
    const a = (s / 5) * Math.PI * 2;
    const bar = new THREE.BoxGeometry(0.17, 0.045, 0.028); // spoke along local x
    xf(bar, 0.14, 0, h - 0.045); // at outer face
    const m = new THREE.Matrix4().makeRotationZ(a); bar.applyMatrix4(m); sp5.push(cleanGeo(bar));
  }
  const rimAll = merge([cleanGeo(rim), ...sp5]);
  const disc = cleanGeo(xf(new THREE.CylinderGeometry(0.17, 0.17, 0.025, 20), 0, 0, 0, Math.PI / 2, 0, 0));
  const hub = cleanGeo(xf(new THREE.CylinderGeometry(0.045, 0.045, 0.02, 12), 0, 0, h - 0.04, Math.PI / 2, 0, 0));
  return { tire: cleanGeo(tire), rim: rimAll, brake: merge([disc, hub]) };
}

// ---------------------------------------------------------------- the car
export function buildHeroCar(opts = {}) {
  const { style = 'sedan', paint = '#b01818', detail = 'hi' } = opts;
  const sp = CAR_STYLES[style], hi = detail !== 'lo'; let car_lamp = null;
  const G = buildGrid(sp, detail);
  const { N, K, R, kc, xs } = G;
  const ix = (x) => clamp(Math.round(((x + sp.L / 2) / sp.L) * N), 0, N);
  const mirrK = (k) => R - 1 - k;
  const group = new THREE.Group();
  const mats = {
    paint: new THREE.MeshPhysicalMaterial({ color: paint, vertexColors: true, metalness: 0.55, roughness: 0.34, clearcoat: 1, clearcoatRoughness: 0.05, envMapIntensity: 1.2 }),
    dark: new THREE.MeshStandardMaterial({ color: '#16161a', roughness: 0.8, metalness: 0.1, vertexColors: true }),
    trim: new THREE.MeshStandardMaterial({ color: '#0d0d10', roughness: 0.55, metalness: 0.2, vertexColors: true }),
    chrome: new THREE.MeshStandardMaterial({ color: '#d8dce2', roughness: 0.18, metalness: 1, vertexColors: true, envMapIntensity: 1.4 }),
    glass: new THREE.MeshStandardMaterial({ color: '#0e1822', roughness: 0.04, metalness: 0.85, transparent: true, opacity: 0.58, envMapIntensity: 1.6, depthWrite: false }),
    head: new THREE.MeshStandardMaterial({ color: '#fff6dc', emissive: '#ffefc2', emissiveIntensity: 0.55, roughness: 0.15, vertexColors: true }),
    tail: new THREE.MeshStandardMaterial({ color: '#8a0707', emissive: '#e01010', emissiveIntensity: 1.0, roughness: 0.25, vertexColors: true }),
    seat: new THREE.MeshStandardMaterial({ color: '#c9b79a', roughness: 0.85, vertexColors: true }),
    tire: new THREE.MeshStandardMaterial({ color: '#0c0c0d', roughness: 0.92, vertexColors: true }),
    rim: new THREE.MeshStandardMaterial({ color: '#c7cbd2', roughness: 0.22, metalness: 1, vertexColors: true, envMapIntensity: 1.3 }),
    brake: new THREE.MeshStandardMaterial({ color: '#555a60', roughness: 0.5, metalness: 0.8, vertexColors: true }),
  };
  mats.paintInner = mats.dark;

  // ---- regions on the grid
  const dF = sp.doors[0], dR = sp.doors[1] || null;
  const doorDefs = [];
  const k0d = kc[2], k1d = kc[7];                  // rocker .. roof edge (T2)
  for (const [x0, x1, nm] of dR ? [[dF[0], dF[1], 'front'], [dR[0], dR[1], 'rear']] : [[dF[0], dF[1], 'front']]) {
    const i0 = ix(x0), i1 = ix(x1);
    doorDefs.push({ i0, i1, nm, side: 1, k0: k0d, k1: k1d }, { i0, i1, nm, side: -1, k0: mirrK(k1d), k1: mirrK(k0d) });
  }
  const hoodI0 = ix(sp.hood[0]), hoodI1 = ix(sp.hood[1]), trI0 = ix(sp.trunk[0]), trI1 = ix(sp.trunk[1]);
  const kT1 = kc[6];
  const holes = doorDefs.map((d) => ({ i0: d.i0, i1: d.i1, k0: d.k0, k1: d.k1 }));
  holes.push({ i0: hoodI0, i1: hoodI1, k0: kT1, k1: mirrK(kT1) }, { i0: trI0, i1: trI1, k0: kT1, k1: mirrK(kT1) });
  // glass windows are real openings in the paint (you see the interior through them): wins = [{i0,i1,k0,k1}] in vertex terms
  const wins = [];
  wins.push({ i0: ix(sp.wind[0]) + 1, i1: ix(sp.wind[1]) - 1, k0: kc[8], k1: mirrK(kc[8]) });
  wins.push({ i0: ix(sp.rear[0]) + 1, i1: ix(sp.rear[1]) - 1, k0: kc[8], k1: mirrK(kc[8]) });
  const sideWin = (i0, i1) => { wins.push({ i0, i1, k0: kc[5] + 1, k1: kc[7] - 1 }, { i0, i1, k0: mirrK(kc[7] - 1), k1: mirrK(kc[5] + 1) }); };
  sideWin(ix(sp.rear[0]) + 2, ix((dR ? dR[0] : dF[0]) ) - 1);
  const doorWins = doorDefs.map((d) => ({ i0: d.i0 + 1, i1: d.i1 - 1, k0: d.side > 0 ? kc[5] + 1 : mirrK(kc[7] - 1), k1: d.side > 0 ? kc[7] - 1 : mirrK(kc[5] + 1) }));
  wins.forEach((w) => holes.push({ i0: w.i0, i1: w.i1, k0: w.k0, k1: w.k1 }));

  // body colours: dark plastic sills / bumpers, darker panel gaps along door and lid edges
  const edgeV = new Set();
  const markEdge = (i0, i1, k0, k1) => { for (let i = i0; i <= i1; i++) { edgeV.add(i * R + k0); edgeV.add(i * R + k1); } for (let k = k0; k <= k1; k++) { edgeV.add(i0 * R + k); edgeV.add(i1 * R + k); } };
  doorDefs.forEach((d) => markEdge(d.i0, d.i1, d.k0, d.k1));
  markEdge(hoodI0, hoodI1, kT1, mirrK(kT1)); markEdge(trI0, trI1, kT1, mirrK(kT1));
  const colorFn = (i, k, p) => {
    let f = 1;
    const kr = k <= K - 1 ? k : mirrK(k);
    if (p.y < 0.36) f = 0.07; else if (p.y < 0.5) f = lerp(0.07, 1, (p.y - 0.36) / 0.14);
    if (p.dent) f *= 1 - 0.85 * p.dent;
    void kr;
    const e = Math.abs(p.x) / (sp.L / 2);
    if (e > 0.93 && p.y < 0.56) f = Math.min(f, 0.09);    // bumper lower
    if (e > 0.965 && p.y < 0.66) f = Math.min(f, 0.09);
    if (edgeV.has(i * R + k)) f *= 0.33;
    return [f, f, f];
  };
  const bodyGeo = gridGeometry(G, colorFn, holes, false, null);
  const body = new THREE.Mesh(bodyGeo, mats.paint); group.add(body);
  const full = gridGeometry(G, colorFn, null, false, null); // un-holed copy: positions + normals for sub-pieces
  full._grid = bodyGeo._grid;

  // ---- interior shell (visible through door openings / windows)
  const shellG = (() => {
    const G2 = buildGrid(sp, 'lo');
    return gridGeometry(G2, () => [0.35, 0.35, 0.38], null, true, { z: 0.93, y: 0.05 });
  })();
  const shell = new THREE.Mesh(shellG, new THREE.MeshStandardMaterial({ color: '#2a2a2f', roughness: 0.9, vertexColors: true, side: THREE.FrontSide }));
  if (hi) group.add(shell);

  // ---- glass (body-fixed)
  const glassParts = wins.map((w) => subGrid(G, full, w.i0, w.i1, w.k0, w.k1 + 0, {}));
  const glassBody = new THREE.Mesh(merge(glassParts.map((g) => cleanGeo(g))), mats.glass); glassBody.renderOrder = 5; group.add(glassBody);

  // ---- doors
  const doors = [];
  for (const d of doorDefs) {
    const gp = new THREE.Group();
    const pivot = new THREE.Vector3(xs[d.i1] - 0.01, 0, 0);
    const ym = G.P[d.i1][d.side > 0 ? kc[5] : mirrK(kc[5])];
    pivot.y = ym.y; pivot.z = ym.z;
    const cm = (a, b, nI, nK) => ((a === 0 || a === nI - 1 || b === 0 || b === nK - 1) ? 0.33 : 1);
    const dw = doorWins[doorDefs.indexOf(d)];
    const outer = subGrid(G, full, d.i0, d.i1, d.k0, d.k1, { gap: 0.012, colorMul: cm, holes: [{ i0: dw.i0, i1: dw.i1, k0: dw.k0, k1: dw.k1 }] });
    const kLow = d.side > 0 ? kc[5] : mirrK(kc[5]);
    const inner = subGrid(G, full, d.i0, d.i1, d.side > 0 ? d.k0 : kLow, d.side > 0 ? kLow : d.k1, { gap: 0.012, rev: true, inward: 0.075 });
    const rim = rimStrips(G, d.i0, d.i1, d.side > 0 ? d.k0 : kLow, d.side > 0 ? kLow : d.k1, 0.075);
    const glass = subGrid(G, full, dw.i0, dw.i1, dw.k0, dw.k1, { gap: 0.012 });
    const handle = cleanGeo(rbox(0.16, 0.035, 0.03, 0.012), [0.9, 0.9, 0.9]);
    const xm = (xs[d.i0] + xs[d.i1]) / 2 + (d.nm === 'front' ? -0.2 : 0.18);
    const zb = G.P[ix(xm)][d.side > 0 ? kc[5] : mirrK(kc[5])];
    xf(handle, xm, zb.y - 0.02, zb.z + d.side * 0.012);
    const parts = [cleanGeo(outer, [1, 1, 1]), handle];
    // wing mirror on the front doors
    if (d.nm === 'front') {
      const mz = zb.z + d.side * 0.1, mx = xs[d.i1] - 0.17;
      const my = G.P[d.i1][d.side > 0 ? kc[6] : mirrK(kc[6])].y + 0.02;
      const mir = cleanGeo(rbox(0.1, 0.1, 0.17, 0.035, 2)); xf(mir, mx, my, mz);
      const stalk = cleanGeo(rbox(0.05, 0.03, 0.1, 0.01, 1)); xf(stalk, mx + 0.02, my - 0.04, mz - d.side * 0.07);
      parts.push(mir, stalk);
    }
    const mO = new THREE.Mesh(merge(parts.map((g) => (g.attributes.color ? g : cleanGeo(g)))), mats.paint);
    const mI = new THREE.Mesh(merge([cleanGeo(inner, [0.3, 0.3, 0.33]), cleanGeo(rim, [0.18, 0.18, 0.2])]), mats.dark); mI.material = new THREE.MeshStandardMaterial({ color: '#1d1d22', roughness: 0.9, vertexColors: true, side: THREE.DoubleSide });
    const mG = new THREE.Mesh(cleanGeo(glass), mats.glass); mG.renderOrder = 6;
    for (const m of [mO, mI, mG]) { m.geometry.translate(-pivot.x, -pivot.y, -pivot.z); gp.add(m); }
    gp.position.copy(pivot);
    group.add(gp);
    doors.push({ pivot: gp, side: d.side, name: d.nm, t: 0, max: d.nm === 'front' ? 1.15 : 1.0 });
  }

  // ---- bonnet and boot
  const lid = (i0, i1, hinge, sign) => {
    const gp = new THREE.Group();
    const outer = subGrid(G, full, i0, i1, kT1, mirrK(kT1), { gap: 0.01, colorMul: (a, b, nI, nK) => ((a === 0 || a === nI - 1 || b === 0 || b === nK - 1) ? 0.33 : 1) });
    const inner = subGrid(G, full, i0, i1, kT1, mirrK(kT1), { gap: 0.01, rev: true, off: -0.06 });
    const hy = G.P[hinge][K - 1].y;
    const piv = new THREE.Vector3(xs[hinge], hy, 0);
    const mO = new THREE.Mesh(cleanGeo(outer), mats.paint);
    const mI = new THREE.Mesh(cleanGeo(inner, [0.25, 0.25, 0.28]), new THREE.MeshStandardMaterial({ color: '#202026', roughness: 0.9, vertexColors: true, side: THREE.DoubleSide }));
    for (const m of [mO, mI]) { m.geometry.translate(-piv.x, -piv.y, -piv.z); gp.add(m); }
    gp.position.copy(piv); group.add(gp);
    return { pivot: gp, sign, t: 0, max: 0.95 };
  };
  const hood = lid(hoodI0, hoodI1, hoodI0, 1);
  const trunk = lid(trI0, trI1, trI1, -1);

  // ---- static detail meshes (trim / lights / chrome / interior)
  const trim = [], head = [], tail = [], chrome = [], seat = [], dark = [];
  const sideSurf = (x, y) => { // right-side surface z at (x,y)
    const row = G.P[ix(x)]; let best = row[0]; let bd = 9;
    for (let k = 0; k < K; k++) { const d = Math.abs(row[k].y - y) + (row[k].z < 0.3 ? 9 : 0); if (d < bd) { bd = d; best = row[k]; } }
    return best.z;
  };
  for (const s of [1, -1]) {
    // wheel well liners behind each wheel (D-shaped dark discs)
    for (const wx of [sp.axle, -sp.axle]) {
      const shp = new THREE.Shape(); shp.absarc(0, 0, sp.arch + 0.02, -0.15, Math.PI + 0.15, false); shp.closePath();
      const disc = new THREE.ShapeGeometry(shp, 14);
      const zf = sideSurf(wx, sp.wr + 0.1) + s * 0.012;
      if (s < 0) disc.rotateY(Math.PI);
      xf(disc, wx, sp.wr, s * Math.abs(zf));
      disc.rotateY(0);
      // ShapeGeometry lies in XY facing +z; rotate so x runs along car length: it already does (x = length, y = up)
      trim.push(cleanGeo(disc, [0.5, 0.5, 0.5]));
    }
    // headlights
    const hx = sp.L / 2 - 0.3, hy = sp.hly ?? 0.64;
    const hl = cleanGeo(new THREE.SphereGeometry(0.12, 14, 8)); xf(hl, 0, 0, 0, 0, 0, 0, 0.8, 0.55, 1.5);
    hl.rotateY(s * -0.5); xf(hl, hx, hy, s * (sp.w * 0.66));
    head.push(hl);
    const hr = cleanGeo(new THREE.TorusGeometry(0.15, 0.012, 6, 18)); xf(hr, 0, 0, 0, 0, 0, 0, 1.0, 0.55, 1.5); hr.rotateY(s * -0.5); xf(hr, hx, hy, s * (sp.w * 0.66)); chrome.push(hr);
    // tail lights
    const tl = cleanGeo(rbox(0.07, 0.11, 0.42, 0.025)); tl.rotateY(s * 0.4); xf(tl, -sp.L / 2 + 0.34, sp.beltR + 0.02, s * (sp.w * 0.58)); tail.push(tl);
    // exhaust
    const ex = cleanGeo(new THREE.CylinderGeometry(0.04, 0.04, 0.16, 10)); xf(ex, -sp.L / 2 + 0.2, sp.yb + 0.16, s * 0.55, 0, 0, Math.PI / 2); chrome.push(ex);
  }
  // grille, bumper intake and number plates
  const gy = (sp.hly ?? 0.64) - 0.64, fy = sp.yb - 0.27 - (sp.twoDoor ? 0.07 : 0);
  trim.push(cleanGeo(rbox(0.07, 0.13, 0.62, 0.025), [1, 1, 1]) && xf(cleanGeo(rbox(0.07, 0.13, 0.62, 0.025)), sp.L / 2 - 0.04, 0.6 + gy, 0));
  trim.push(xf(cleanGeo(rbox(0.07, 0.1, 0.9, 0.03)), sp.L / 2 - 0.12, 0.38 + gy * 0.5, 0));
  chrome.push(xf(cleanGeo(rbox(0.06, 0.02, 0.62, 0.008)), sp.L / 2 - 0.035, 0.675 + gy, 0));
  chrome.push(xf(cleanGeo(rbox(0.012, 0.02, 0.62, 0.008)), sp.L / 2 - 0.04, 0.54 + gy, 0));
  const plate = (x, ang) => { const p = cleanGeo(rbox(0.012, 0.12, 0.34, 0.006, 1), [0.95, 0.95, 0.9]); xf(p, x, 0.42 + gy * 0.5, 0); return p; };
  chrome.push(plate(sp.L / 2 - 0.0));
  chrome.push(plate(-sp.L / 2 + 0.0));
  // door shut lines etc are in vertex colours.  Interior: seats, dashboard, wheel
  const floor = cleanGeo(rbox(2.6, 0.04, 1.2, 0.01, 1), [0.18, 0.18, 0.2]); xf(floor, -0.35, 0.33, 0); seat.push(floor);
  const mkSeat = (x, z, col) => {
    const base = cleanGeo(rbox(0.5, 0.14, 0.5, 0.05), col); xf(base, x, 0.43, z);
    const back = cleanGeo(rbox(0.12, 0.62, 0.5, 0.05), col); xf(back, x - 0.2, 0.74, z, 0, 0, -0.16);
    const head = cleanGeo(rbox(0.1, 0.17, 0.26, 0.04), col); xf(head, x - 0.27, 1.14, z, 0, 0, -0.16);
    return [base, back, head];
  };
  for (const z of [0.38, -0.38]) seat.push(...mkSeat(sp.seatX[0], z, [0.78, 0.7, 0.58]));
  if (!sp.twoDoor) {
    seat.push(...mkSeat(sp.seatX[1], 0, [0.74, 0.66, 0.54]));
    seat.push(xf(cleanGeo(rbox(0.5, 0.14, 1.2, 0.05), [0.74, 0.66, 0.54]), sp.seatX[1], 0.43, 0));
  } else seat.push(xf(cleanGeo(rbox(0.5, 0.14, 1.2, 0.05), [0.74, 0.66, 0.54]), sp.seatX[1], 0.43, 0));
  const dash = cleanGeo(rbox(0.45, 0.2, 1.5, 0.07), [0.12, 0.12, 0.14]); xf(dash, sp.dashX ?? 0.62, sp.beltF + 0.16 - (sp.yb - 0.27), 0, 0, 0, 0.0); seat.push(dash);
  const tun = cleanGeo(rbox(1.4, 0.16, 0.22, 0.05), [0.14, 0.14, 0.16]); xf(tun, 0.0, 0.42, 0); seat.push(tun);
  const sw = new THREE.TorusGeometry(0.17, 0.02, 8, 18); xf(sw, 0.38, 1.0, 0.38, 0, Math.PI / 2, 0); sw.rotateZ(0); xf(sw, 0, 0, 0, 0, 0, 0);
  // tilt the wheel back like a real one: rotate around z a bit
  sw.translate(-0.38, -1.0, -0.38); sw.rotateZ(0.5); sw.translate(0.38, 1.0, 0.38); seat.push(cleanGeo(sw, [0.1, 0.1, 0.1]));
  const col = cleanGeo(new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8), [0.1, 0.1, 0.1]); xf(col, 0.46, 0.93, 0.38, 0, 0, 1.0); seat.push(col);
  // engine bay + boot floor so the open lids show something
  seat.push(xf(cleanGeo(rbox(0.8, 0.28, 0.9, 0.06), [0.2, 0.2, 0.22]), sp.bayX ?? 1.55, 0.52, 0));
  seat.push(xf(cleanGeo(rbox(0.3, 0.2, 0.34, 0.03), [0.55, 0.1, 0.1]), (sp.bayX ?? 1.55) + 0.4, 0.52, -0.3));
  seat.push(xf(cleanGeo(rbox(0.5, 0.04, 1.0, 0.01, 1), [0.16, 0.16, 0.17]), sp.bootX ?? -1.88, 0.56, 0));
  for (const g of seat) g.translate(0, fy, 0);
  // roof extras: police light bar / plain taxi lamp (no text)
  const lamps = [];
  if (opts.extra === 'police' || opts.extra === 'taxi') {
    const roofY = sp.prof.reduce((m, p) => Math.max(m, p[1]), 0), rx = -0.05;
    if (opts.extra === 'police') {
      const bar = cleanGeo(rbox(0.22, 0.07, 1.1, 0.025, 1), [0.08, 0.08, 0.1]); xf(bar, rx, roofY + 0.04, 0); chrome.push(cleanGeo(rbox(0.01, 0.01, 0.01, 0.004)));
      group.add(Object.assign(new THREE.Mesh(merge([bar]), mats.trim)));
      for (const [z, c] of [[-0.3, [0.9, 0.05, 0.05]], [0.3, [0.1, 0.2, 1.0]]]) { const l = cleanGeo(rbox(0.2, 0.06, 0.46, 0.02, 1), c); xf(l, rx, roofY + 0.1, z); lamps.push(l); }
    } else {
      const l = cleanGeo(rbox(0.22, 0.12, 0.5, 0.05, 1), [1, 0.95, 0.75]); xf(l, rx, roofY + 0.08, 0); lamps.push(l);
    }
  }
  const addMesh = (arr, mat) => { if (!arr.length) return; const m = new THREE.Mesh(merge(arr), mat); group.add(m); return m; };
  if (lamps.length) { const lm = new THREE.Mesh(merge(lamps), new THREE.MeshStandardMaterial({ color: '#ffffff', vertexColors: true, emissive: '#ffffff', emissiveIntensity: 0.6, roughness: 0.3 })); group.add(lm); car_lamp = lm; }
  addMesh(trim, mats.trim); addMesh(head, mats.head); addMesh(tail, mats.tail); addMesh(chrome, mats.chrome); addMesh(seat, mats.seat);

  // ---- wheels (steer + spin pivots)
  const seg = hi ? 28 : 14, parts = makeWheelParts(sp, seg);
  const wheels = [];
  for (const [wx, s, front] of [[sp.axle, 1, true], [sp.axle, -1, true], [-sp.axle, 1, false], [-sp.axle, -1, false]]) {
    const steer = new THREE.Group(), flip = new THREE.Group(), spin = new THREE.Group();
    { const at = Math.abs(wx) / (sp.L / 2), side = sp.w * Math.pow(Math.max(0, 1 - Math.pow(at, 3.6)), 1 / 3.6); steer.position.set(wx, sp.wr, s * (side - 0.03 - sp.ww / 2)); } steer.add(flip); flip.add(spin);
    if (s < 0) flip.rotation.y = Math.PI; // outer rim face always points away from the car
    spin.add(new THREE.Mesh(parts.tire, mats.tire), new THREE.Mesh(parts.rim, mats.rim), new THREE.Mesh(parts.brake, mats.brake));
    group.add(steer);
    wheels.push({ steer, spin, front, flip: s < 0 });
  }

  group.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = o.material !== mats.glass; } });

  let tris = 0; group.traverse((o) => { if (o.isMesh) { const g = o.geometry; tris += (g.index ? g.index.count : g.attributes.position.count) / 3; } });
  const car = {
    group, doors, hood, trunk, wheels, tris: Math.round(tris), mats,
    setDoor(i, t) { const d = doors[i]; d.t = t; d.pivot.rotation.y = d.side * t * d.max; },
    setLid(l, t) { l.t = t; l.pivot.rotation.z = l.sign * t * l.max; },
    steer(a) { for (const w of wheels) if (w.front) w.steer.rotation.y = a; },
    spin(a) { for (const w of wheels) w.spin.rotation.z = w.flip ? a : -a; },
    setColor(c) { mats.paint.color.set(c); },
    lamp: car_lamp, style: sp,
  };
  return car;
}
