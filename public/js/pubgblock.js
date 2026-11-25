// v643 THE PUBG-STYLE STREET BLOCK (Gojra map only): looks. combat.js builds the houses (kind 'pub2', collision, stairs, loot) and the outdoor solids; this file only draws:
//   the clay-tile pitched roofs with plaster gable ends, a concrete plinth and a floor band round every house, white window frames with iron bars, brick chimneys,
//   jersey barriers, broken concrete yard walls, corrugated sheds, power poles with wires, blue tarps and bare dirt patches.
// Textures are real CC0 photos (models/pubg/*.jpg, see LICENSE.txt there); every piece goes into the shared merged batches (one draw call per material and 100 m chunk).
import * as THREE from 'three';

const rr = (s) => () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
const tris = (vs) => { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(vs.flat(), 3)); g.computeVertexNormals(); return g; };
const quad = (a, b, c, d) => [a, b, c, a, c, d];

// ---------------------------------------------------------------- one house
export function pubgHouse(b, B, q) {
  const hx = b.w / 2, hz = b.d / 2, fy = b.fy, top = fy + (b.top || 6.4), y0 = top + 0.3, rh = Math.min(b.w, b.d) * 0.26, over = 0.55, hy = y0 + rh;
  const along = b.w >= b.d, brick = b.pm === 'b', wallMat = brick ? 'pbrick' : 'pplaster', rc = b.rc || '#ffe6d6', R = rr(Math.floor(b.x * 31 + b.z * 17) >>> 0);
  // ---- the pitched roof (two clay-tile planes with an overhang) + the two gable ends in wall material
  { const a = b.x - hx - over, e = b.x + hx + over, c = b.z - hz - over, d = b.z + hz + over, mx = b.x, mz = b.z;
    let p;
    if (along) p = [...quad([a, y0, c], [e, y0, c], [e, hy, mz], [a, hy, mz]), ...quad([a, y0, d], [a, hy, mz], [e, hy, mz], [e, y0, d])];
    else p = [...quad([a, y0, c], [mx, hy, c], [mx, hy, d], [a, y0, d]), ...quad([e, y0, c], [e, y0, d], [mx, hy, d], [mx, hy, c])];
    B.add('proof', tris(p), rc, 0.05, !along);   // tile columns run down the slope (swap = rotate the picture 90 degrees when the ridge runs along z)
    const wz = hz + 0.3, wx = hx + 0.3, half = along ? hz : hx, hh = rh * (1 - (half + 0.3) / (half + over));   // hh = roof height above y0 where the wall plate ends
    const gab = (xe, sg) => {   // gable end at x = xe (ridge along x) : a pentagon in the wall plane
      const pts = [[xe, y0, b.z - wz], [xe, y0, b.z + wz], [xe, y0 + hh, b.z + wz], [xe, hy, b.z], [xe, y0 + hh, b.z - wz]];
      return sg < 0 ? [pts[0], pts[1], pts[2], pts[0], pts[2], pts[3], pts[0], pts[3], pts[4]] : [pts[0], pts[2], pts[1], pts[0], pts[3], pts[2], pts[0], pts[4], pts[3]]; };
    const gabZ = (ze, sg) => {
      const pts = [[b.x - wx, y0, ze], [b.x + wx, y0, ze], [b.x + wx, y0 + hh, ze], [b.x, hy, ze], [b.x - wx, y0 + hh, ze]];
      return sg > 0 ? [pts[0], pts[1], pts[2], pts[0], pts[2], pts[3], pts[0], pts[3], pts[4]] : [pts[0], pts[2], pts[1], pts[0], pts[3], pts[2], pts[0], pts[4], pts[3]]; };
    const gs = along ? [gab(b.x - hx - 0.1, -1), gab(b.x + hx + 0.1, 1)] : [gabZ(b.z - hz - 0.1, -1), gabZ(b.z + hz + 0.1, 1)];
    for (const g of gs) B.add(wallMat, tris(g), b.c, 0.03);
    // fascia boards along the two eaves, the ridge cap
    if (along) { for (const zz of [c, d - 0.07]) B.box('trim', a, y0 - 0.03, zz, e, y0 + 0.12, zz + 0.07, '#f2efe6', 0); B.box('trim', a, hy - 0.02, mz - 0.12, e, hy + 0.1, mz + 0.12, '#b5603f', 0); }
    else { for (const xx of [a, e - 0.07]) B.box('trim', xx, y0 - 0.03, c, xx + 0.07, y0 + 0.12, d, '#f2efe6', 0); B.box('trim', mx - 0.12, hy - 0.02, c, mx + 0.12, hy + 0.1, d, '#b5603f', 0); }
    // a brick chimney on every other house, standing in the roof plane
    if (R() < 0.6) { const cx = along ? b.x + (R() - 0.5) * hx * 1.2 : b.x, cz = along ? b.z : b.z + (R() - 0.5) * hz * 1.2; B.box('pbrick', cx - 0.45, y0 + 0.2, cz - 0.45, cx + 0.45, hy + 1.3, cz + 0.45, '#ffd2b8', 0.04); B.box('pconc', cx - 0.6, hy + 1.3, cz - 0.6, cx + 0.6, hy + 1.45, cz + 0.6, '#9a978f', 0); }
  }
  // ---- concrete plinth (0.55 m) and the band between the floors, drawn just outside the wall faces
  { const o = 0.26, pl = (x0, z0, x1, z1, ya, yb, mat, col) => B.box(mat, x0, ya, z0, x1, yb, z1, col, 0.02), X0 = b.x - hx - o, X1 = b.x + hx + o, Z0 = b.z - hz - o, Z1 = b.z + hz + o;
    for (const [ya, yb, col, ex] of [[fy - 0.4, fy + 0.55, '#a8a59c', 0.05], [fy + b.fh - 0.12, fy + b.fh + 0.42, '#f2efe6', 0.04]]) {
      pl(X0 - ex, Z0 - ex, X1 + ex, Z0 + 0.12, ya, yb, 'pconc', col); pl(X0 - ex, Z1 - 0.12, X1 + ex, Z1 + ex, ya, yb, 'pconc', col);
      pl(X0 - ex, Z0, X0 + 0.12, Z1, ya, yb, 'pconc', col); pl(X1 - 0.12, Z0, X1 + ex, Z1, ya, yb, 'pconc', col); }
  }
  // ---- barred windows: white frame + sill, iron bars (3 on phones)
  const iron = '#202226', nb = q === 0 ? 3 : 5;
  for (const o of b.openings) {
    if (o.k !== 'win') continue;
    const alongX = o.s === 'N' || o.s === 'S', sg = o.s === 'N' || o.s === 'W' ? -1 : 1, f = (alongX ? b.d : b.w) / 2 * sg, ex = alongX ? b.x + o.c : b.x + f, ez = alongX ? b.z + f : b.z + o.c, ya = fy + o.y0, yb = fy + o.y1, hw = o.hw, zo = sg * 0.36;
    const box = (xa, ya_, za, xb, yb_, zb, col) => { if (alongX) B.box('trim', ex + xa, ya_, ez + zo + za, ex + xb, yb_, ez + zo + zb, col, 0); else B.box('trim', ex + zo + za, ya_, ez + xa, ex + zo + zb, yb_, ez + xb, col, 0); };
    for (let i = 0; i < nb; i++) { const xx = -hw + 0.08 + (2 * hw - 0.16) * i / (nb - 1); box(xx - 0.018, ya, -0.018, xx + 0.018, yb, 0.018, iron); }
    box(-hw, (ya + yb) / 2 - 0.02, -0.02, hw, (ya + yb) / 2 + 0.02, 0.02, iron);
    box(-hw - 0.22, ya - 0.1, -0.06 * sg - 0.02, hw + 0.22, ya, 0.2 * sg, '#f2efe6');   // sill
  }
}

// ---------------------------------------------------------------- the street's props, ground patches, wires
export function pubgBlockProps(B, group, GJ, cmbH, cmbG, q) {
  const BK = GJ.block, R = rr(6431);
  // jersey barriers (trapezoid profile, 3 m long)
  { const prof = new THREE.Shape(); [[-0.3, 0], [0.3, 0], [0.3, 0.22], [0.13, 0.72], [0.13, 0.85], [-0.13, 0.85], [-0.13, 0.72], [-0.3, 0.22]].forEach(([u, v], i) => (i ? prof.lineTo(u, v) : prof.moveTo(u, v)));
    for (const [x, z, al] of BK.barriers) { const g = new THREE.ExtrudeGeometry(prof, { depth: 3.0, bevelEnabled: false }); g.translate(0, 0, -1.5); if (al === 'x') g.rotateY(Math.PI / 2); g.translate(x, cmbH(x, z) - 0.02, z); B.add('pconc', g, '#c9c5bb', 0.1); } }
  // broken concrete yard walls: cut into chunks of slightly different height, the top chunk of some corners knocked off
  for (const [x0, z0, x1, z1, h] of BK.walls) { const alZ = (z1 - z0) > (x1 - x0), L = alZ ? z1 - z0 : x1 - x0, n = Math.max(1, Math.round(L / 2.4)); for (let i = 0; i < n; i++) { const t0 = i / n, t1 = (i + 1) / n, hh = h * (i === 0 || i === n - 1 ? 0.8 + R() * 0.2 : 0.94 + R() * 0.06), gy = cmbH((x0 + x1) / 2, (z0 + z1) / 2);
      if (alZ) B.box('pconc', x0, gy - 0.3, z0 + L * t0, x1, gy + hh, z0 + L * t1 - 0.02, '#b9b5ab', 0.08); else B.box('pconc', x0 + L * t0, gy - 0.3, z0, x0 + L * t1 - 0.02, gy + hh, z1, '#b9b5ab', 0.08); } }
  // corrugated sheds (one open side, dark inside)
  for (const [x, z, w, d, , h] of BK.sheds) { const gy = cmbH(x, z), col = ['#8fb2c8', '#c9a58a', '#9fb592'][Math.floor(R() * 3)];
    B.box('pmetal', x - w / 2, gy - 0.2, z - d / 2, x + w / 2, gy + h, z + d / 2, col, 0.05);
    B.box('pmetal', x - w / 2 - 0.25, gy + h, z - d / 2 - 0.25, x + w / 2 + 0.25, gy + h + 0.1, z + d / 2 + 0.25, '#b7b2a8', 0.05);
    B.box('trim', x - w * 0.3, gy, z + d / 2 - 0.02, x + w * 0.1, gy + h * 0.82, z + d / 2 + 0.06, '#1d1f22', 0); }
  // blue tarps on four posts, a little sag
  for (const [x, z, w, d] of BK.tarps) { const gy = cmbH(x, z), y = gy + 2.6;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) B.box('wood', x + sx * (w / 2 - 0.1) - 0.05, gy - 0.2, z + sz * (d / 2 - 0.1) - 0.05, x + sx * (w / 2 - 0.1) + 0.05, y + 0.05, z + sz * (d / 2 - 0.1) + 0.05, '#6a5238', 0.04);
    const g = new THREE.BoxGeometry(w, 0.05, d, 4, 1, 3), p = g.attributes.position; for (let i = 0; i < p.count; i++) { const u = p.getX(i) / (w / 2), v = p.getZ(i) / (d / 2); p.setY(i, p.getY(i) - 0.22 * (1 - u * u) * (1 - v * v) + 0.12 * v); }
    g.computeVertexNormals(); g.translate(x, y - 0.05, z); B.add('trim', g, '#3b7de0', 0.05); }
  // power poles + three wires between them and on to the lines of Cinema Road
  { const poles = BK.poles, wireP = [];
    for (const [x, z] of poles) { const y = cmbH(x, z); B.box('wood', x - 0.13, y - 0.4, z - 0.13, x + 0.13, y + 10.6, z + 0.13, '#5a4630', 0.05); B.box('wood', x - 0.07, y + 9.7, z - 1.3, x + 0.07, y + 9.85, z + 1.3, '#4a3a28', 0.05); B.box('wood', x - 0.07, y + 8.6, z - 0.9, x + 0.07, y + 8.72, z + 0.9, '#4a3a28', 0.05); }
    for (let i = 0; i + 1 < poles.length; i++) { const [ax, az] = poles[i], [bx, bz] = poles[i + 1], ya = cmbH(ax, az), yb = cmbH(bx, bz);
      for (const [o, hy] of [[-1.2, 9.85], [0, 9.85], [1.2, 9.85], [-0.8, 8.72], [0.8, 8.72]]) { let px = ax, py = ya + hy, pz = az + o; for (let k = 1; k <= 6; k++) { const t = k / 6, x = ax + (bx - ax) * t, z = az + o + (bz - az) * t, y = ya * (1 - t) + yb * t + hy - 1.1 * Math.sin(Math.PI * t); wireP.push(px, py, pz, x, y, z); px = x; py = y; pz = z; } } }
    if (wireP.length) { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(wireP, 3)); const l = new THREE.LineSegments(g, new THREE.LineBasicMaterial({ color: '#1c1e22' })); l.frustumCulled = false; group.add(l); } }
  // bare dirt patches (the real ground photo), a little above the grass; edges wobble so they are not ovals
  for (const [cx, cz, rx, rz] of BK.patches) { const N = 22, pos = [], idx = [], seed = R() * 9; const rad = (a) => 1 + 0.18 * Math.sin(a * 3 + seed) + 0.1 * Math.sin(a * 5 + seed * 2);
    pos.push(cx, cmbG(cx, cz) + 0.06, cz); for (let ring = 1; ring <= 2; ring++) for (let i = 0; i < N; i++) { const a = i / N * Math.PI * 2, k = rad(a) * ring / 2, x = cx + Math.cos(a) * rx * k, z = cz + Math.sin(a) * rz * k; pos.push(x, cmbG(x, z) + 0.06, z); }
    for (let i = 0; i < N; i++) { const i1 = (i + 1) % N; idx.push(0, 1 + i1, 1 + i); idx.push(1 + i, 1 + i1, 1 + N + i1); idx.push(1 + i, 1 + N + i1, 1 + N + i); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals(); B.add('pground', g, '#e9dcc4', 0.04); }
}
