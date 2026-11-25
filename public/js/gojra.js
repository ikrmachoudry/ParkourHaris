/* v633 THE GOJRA MAP: pure data (no THREE, no combat.js) so combat.js can build the layout and battlemap.js can draw it.
   The real town was traced from the user's map screenshots. The real map is turned 142 degrees so its street grid lines up with the game's x / z axes:
     a = real NW->SE axis, b = real SW->NE axis, measured in metres from Rahila Clinic (Sada Ghar):   game x = XC - a,  game z = ZC + b
   so the clinic faces +z (south in the game, the way the Sada Ghar building was already built), the 20 shops are across the street from it, Jinnah Park is behind the shops and the mosque is beyond.
   Streets outside the traced ones are generated lanes (a ~38 m grid) that fill the dense core; everything is approximate and meant to be refined part by part. */
const XC = 30, ZC = -160;
export const GJ_P = (a, b) => [XC - a, ZC + b];
const seeded = (s) => () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// ---------------------------------------------------------------- fixed sites (game coordinates)
const CLINIC = [XC, ZC - 17.5];                       // Sada Ghar stands where Rahila Clinic is (28 x 20, faces south)
const SHOPS = { x: XC, z: ZC + 11.5, w: 68, d: 9, n: 20 };   // 20 shops in one straight row with ONE common roof, shutters to the street (z = ZC)
const PARK = { x: -61, z: -60, rx: 76, rz: 74 };      // Jinnah Park
const POLICE = { x: -9, z: 52, w: 18, d: 14 };         // City Police Station
const MOSQUE = { x: 20, z: 64, w: 22, d: 22 };         // the mosque beyond the park

// ---------------------------------------------------------------- named roads: [x, z] polylines, w = width
const NAMED = [
  { id: 'tehsil2', name: 'TEHSIL OFFICE ROAD', w: 8, pts: [[-215, ZC], [-100, ZC], [20, ZC], [118, ZC]] },
  { id: 'tehsil1', name: 'TEHSIL OFFICE ROAD', w: 8, pts: [[118, ZC], [124, -90], [128, -30], [134, 40], [138, 90]] },
  { id: 'police', name: 'POLICE STATION ROAD', w: 7, pts: [[131, 33], [60, 32], [-60, 34], [-170, 35]] },
  { id: 'jhang', name: 'JHANG - GOJRA ROAD', w: 13, pts: [[-268, 90], [-100, 90], [138, 90], [268, 91]] },
  { id: 'college', name: 'GOVT. P.G. COLLEGE ROAD', w: 9, pts: [[-268, 220], [-100, 220], [100, 220], [268, 220]] },
];

// ---------------------------------------------------------------- the generated lane grid
const LW = 5.5;
const coreM = (x, z) => ((x - 42) / 140) ** 2 + ((z + 60) / 205) ** 2;     // 1 = the edge of the dense core
const inPark = (x, z, m = 0) => ((x - PARK.x) / (PARK.rx + m)) ** 2 + ((z - PARK.z) / (PARK.rz + m)) ** 2 < 1;
const FIXED = [   // rectangles nothing else may overlap [x0, z0, x1, z1]
  [CLINIC[0] - 17, CLINIC[1] - 12, CLINIC[0] + 31, CLINIC[1] + 13],
  [SHOPS.x - SHOPS.w / 2 - 4, SHOPS.z - 6.5, SHOPS.x + SHOPS.w / 2 + 4, SHOPS.z + SHOPS.d / 2 + 1],
  [POLICE.x - POLICE.w / 2 - 2, POLICE.z - POLICE.d / 2 - 2, POLICE.x + POLICE.w / 2 + 2, POLICE.z + POLICE.d / 2 + 2],
  [MOSQUE.x - MOSQUE.w / 2 - 4, MOSQUE.z - MOSQUE.d / 2 - 4, MOSQUE.x + MOSQUE.w / 2 + 4, MOSQUE.z + MOSQUE.d / 2 + 4],
];
const inFixed = (x, z, m = 0) => FIXED.some((r) => x > r[0] - m && x < r[2] + m && z > r[1] - m && z < r[3] + m) || inPark(x, z, m);

const HZ = [-275.2, -236.8, -198.4, -121.6, -83.2, -44.8, -6.4, 133.3, 176.7];          // lanes along x
const VX = [-170, -130, -90, -50, -12, 80, 102, 162, 204];                                // lanes along z
const lanes = [];
const cutLane = (axis, c) => {   // split a lane into pieces that stay inside the core and outside the park / fixed sites
  const lo = axis === 'h' ? -230 : -285, hi = axis === 'h' ? 260 : 215; let cur = null; const out = [];
  for (let t = lo; t <= hi; t += 2) {
    const x = axis === 'h' ? t : c, z = axis === 'h' ? c : t;
    const ok = coreM(x, z) < 1.45 && !inFixed(x, z, 4.5) && Math.abs(x) < 280 && Math.abs(z) < 280;
    if (ok) { if (!cur) cur = [t, t]; else cur[1] = t; } else if (cur) { out.push(cur); cur = null; }
  }
  if (cur) out.push(cur);
  for (const [a, b] of out) if (b - a >= 14) lanes.push(axis === 'h' ? { id: 'ln', axis, c, lo: a, hi: b, w: LW, pts: [[a, c], [b, c]] } : { id: 'ln', axis, c, lo: a, hi: b, w: LW, pts: [[c, a], [c, b]] });
};
for (const c of HZ) cutLane('h', c);
for (const c of VX) cutLane('v', c);
// drop lanes that lie right on a named road
const nearNamed = (x, z) => NAMED.some((r) => { for (let i = 0; i + 1 < r.pts.length; i++) { const [ax, az] = r.pts[i], [bx, bz] = r.pts[i + 1], dx = bx - ax, dz = bz - az, l2 = dx * dx + dz * dz, t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / l2)); if (Math.hypot(x - ax - t * dx, z - az - t * dz) < r.w / 2 + LW / 2 + 1) return true; } return false; });
const laneList = lanes.filter((l) => !nearNamed((l.pts[0][0] + l.pts[1][0]) / 2, (l.pts[0][1] + l.pts[1][1]) / 2));


// every road segment (for the clearance test of the lots)
const SEGS = []; for (const r of NAMED) for (let i = 0; i + 1 < r.pts.length; i++) SEGS.push([r.pts[i][0], r.pts[i][1], r.pts[i + 1][0], r.pts[i + 1][1], r.w, r.id]);
for (const l of laneList) SEGS.push([l.pts[0][0], l.pts[0][1], l.pts[1][0], l.pts[1][1], l.w, 'ln']);
const rectRoadGap = (x0, z0, x1, z1, skip) => {   // the smallest gap (m) between a rectangle and a road edge
  let best = 1e9;
  for (const sg of SEGS) { if (sg === skip) continue; const [ax, az, bx, bz, w] = sg, n = Math.max(2, Math.ceil(Math.hypot(bx - ax, bz - az) / 1.5));
    for (let k = 0; k <= n; k++) { const px = ax + (bx - ax) * k / n, pz = az + (bz - az) * k / n, ex = Math.max(x0 - px, 0, px - x1), ez = Math.max(z0 - pz, 0, pz - z1), d = Math.hypot(ex, ez) - w / 2; if (d < best) best = d; } }
  return best;
};

// ---------------------------------------------------------------- the lots (houses, flats, bazaar blocks): generated along every street, kept nearest to the core
const PAL = ['#e6d9bd', '#d8c7a0', '#cfd8d4', '#e0b9a2', '#d9d3c4', '#c9b79a', '#bfcfd6', '#e8d9a8', '#c98f6b', '#b5683a', '#d9a38a', '#a9bda0', '#e3cfae', '#9fb4c4', '#d6b4b4', '#c7c0a8'];
const ROOFC = ['#9b4b36', '#7a3f2e', '#5d5f66', '#8c5a3a', '#6b4a3a', '#4c5560'];
const RN = seeded(6330);
const pickC = () => PAL[Math.floor(RN() * PAL.length)];
const KINDS_RES = [['house', 9, 11, 8, 10, 3], ['house', 9, 12, 8, 10, 3], ['duplex2', 11, 14, 10, 12, 4], ['flat2', 13, 17, 11, 13, 3], ['apart', 12, 16, 10, 12, 3], ['duplex2', 11, 13, 10, 11, 3], ['house', 8, 10, 8, 9, 2], ['flat3', 12, 15, 11, 12, 1]];   // [kind, minF, maxF, minD, maxD, weight]
const KINDS_BAZ = [['mall2', 14, 19, 11, 13, 4], ['shop', 8, 12, 9, 10, 3], ['office2', 13, 17, 11, 13, 2], ['flat3', 13, 17, 11, 13, 2], ['flat2', 13, 17, 11, 13, 1]];
const wpick = (L) => { let t = 0; for (const k of L) t += k[5]; let r = RN() * t; for (const k of L) { r -= k[5]; if (r <= 0) return k; } return L[0]; };
const cand = [];
const streets = NAMED.map((r) => ({ id: r.id, w: r.w, baz: r.id === 'jhang' || r.id === 'college' || r.id === 'tehsil1', segs: SEGS.filter((s) => s[5] === r.id) }))
  .concat(laneList.map((l) => ({ id: 'ln', w: l.w, baz: false, segs: SEGS.filter((s) => s[5] === 'ln' && s[0] === l.pts[0][0] && s[1] === l.pts[0][1] && s[2] === l.pts[1][0] && s[3] === l.pts[1][1]) })));
const frontOf = (dx, dz, side) => { if (Math.abs(dx) >= Math.abs(dz)) return side > 0 ? 'N' : 'S'; return side > 0 ? 'W' : 'E'; };   // side +1 = the +normal side; the building faces back to the street
for (const st of streets) for (const sg of st.segs) {
  const [ax, az, bx, bz] = sg, len = Math.hypot(bx - ax, bz - az), ux = (bx - ax) / len, uz = (bz - az) / len;
  const horiz = Math.abs(ux) > 0.97, vert = Math.abs(uz) > 0.97; if (!horiz && !vert) continue;   // the sloping bit of Tehsil Office Road gets no lots (its buildings would not be square to the street)
  for (const side of [-1, 1]) {
    let cur = 4;
    while (cur < len - 7) {
      const L = st.baz ? KINDS_BAZ : KINDS_RES, kd = wpick(L), F = Math.round(kd[1] + RN() * (kd[2] - kd[1])), D = Math.round(kd[3] + RN() * (kd[4] - kd[3]));
      const al = cur + F / 2, nx = -uz * side, nz = ux * side, off = sg[4] / 2 + 2.7 + D / 2;
      const x = Math.round((ax + ux * al + nx * off) * 2) / 2, z = Math.round((az + uz * al + nz * off) * 2) / 2;
      const w = horiz ? F : D, d = horiz ? D : F, x0 = x - w / 2, x1 = x + w / 2, z0 = z - d / 2, z1 = z + d / 2;
      const bad = Math.abs(x) > 262 || Math.abs(z) > 262 || FIXED.some((r) => x1 > r[0] - 1 && x0 < r[2] + 1 && z1 > r[1] - 1 && z0 < r[3] + 1) || inPark(x, z, 4) || inPark(x0, z0, 2) || inPark(x1, z1, 2) || inPark(x0, z1, 2) || inPark(x1, z0, 2)
        || cand.some((q) => x1 + 1.2 > q.x - q.w / 2 && x0 - 1.2 < q.x + q.w / 2 && z1 + 1.2 > q.z - q.d / 2 && z0 - 1.2 < q.z + q.d / 2) || rectRoadGap(x0, z0, x1, z1, sg) < 2.4;
      if (bad) { cur += 3; continue; }
      cand.push({ kind: kd[0], x, z, w, d, front: frontOf(ux, uz, side), baz: st.baz, m: coreM(x, z), street: st.id, F, D });
      cur += F + 1.0 + Math.floor(RN() * 2.5);
    }
  }
}
cand.sort((p, q) => p.m - q.m);
const N_LOTS = 160;
export const GJ_LOTS = cand.slice(0, N_LOTS).map((c, i) => ({ ...c, c: pickC(), rc: ROOFC[i % ROOFC.length], i }));

// lanes that no lot opens on are dropped (no empty streets in the countryside)
const usedLanes = laneList.filter((l) => GJ_LOTS.some((q) => { const mx = Math.max(l.pts[0][0], Math.min(l.pts[1][0], q.x)), mz = Math.max(l.pts[0][1], Math.min(l.pts[1][1], q.z)); return Math.hypot(mx - q.x, mz - q.z) < LW / 2 + 2.7 + Math.max(q.w, q.d) / 2 + 2; }));
export const GJ_ROADS = NAMED.map((r) => ({ w: r.w, pts: r.pts })).concat(usedLanes.map((l) => ({ w: l.w, pts: l.pts })));

// ---------------------------------------------------------------- the town ground (concrete) and the park (grass)
const lotsM = GJ_LOTS.reduce((m, l) => Math.max(m, l.m), 0);
export const urbanAt = (x, z) => 1 - smooth(Math.min(1, lotsM) * 0.95, Math.min(1, lotsM) * 0.95 + 0.5, coreM(x, z));
export const parkAt = (x, z) => 1 - smooth(0.0, 1.0, (Math.sqrt(((x - PARK.x) / PARK.rx) ** 2 + ((z - PARK.z) / PARK.rz) ** 2) - 0.92) / 0.09);

// ---------------------------------------------------------------- trees: Jinnah Park (many), a few along the main roads
const RT = seeded(63301), trees = [];
for (let i = 0; i < 90; i++) { const a = RT() * 6.283, r = Math.sqrt(RT()) * 0.9, x = PARK.x + Math.cos(a) * PARK.rx * r, z = PARK.z + Math.sin(a) * PARK.rz * r; if (Math.hypot(x - PARK.x, z - PARK.z) < 9) continue; trees.push([x, z, 1.5 + RT() * 1.1, RT() < 0.25]); }
for (let i = 0; i < 26; i++) { const a = RT() * 6.283; trees.push([PARK.x + Math.cos(a) * PARK.rx * 0.98, PARK.z + Math.sin(a) * PARK.rz * 0.98, 1.7 + RT() * 0.8, false]); }   // an avenue round the edge
const treeOK = (t) => { const [x, z] = t; return !FIXED.some((r) => x > r[0] - 2 && x < r[2] + 2 && z > r[1] - 2 && z < r[3] + 2 || false) && rectRoadGap(x - 1, z - 1, x + 1, z + 1, null) > 1.5 && !GJ_LOTS.some((q) => Math.abs(x - q.x) < q.w / 2 + 2.2 && Math.abs(z - q.z) < q.d / 2 + 2.2); };
const GRASS = [[-28, -22, 20], [30, -30, 18], [-32, 26, 19], [30, 30, 17], [-2, -2, 12]].map(([dx, dz, r]) => ({ x: PARK.x + dx, z: PARK.z + dz, r }));

// ---------------------------------------------------------------- road-name signs (blue boards on two posts at the junctions)
const SIGNS = [
  { x: XC - 40, z: ZC - 6.5, ry: 0, t: 'TEHSIL OFFICE ROAD' }, { x: 126, z: -100, ry: 1, t: 'TEHSIL OFFICE ROAD' }, { x: 60, z: 27, ry: 0, t: 'POLICE STATION ROAD' }, { x: -120, z: 39, ry: 0, t: 'POLICE STATION ROAD' },
  { x: 100, z: 83, ry: 0, t: 'JHANG - GOJRA ROAD' }, { x: -100, z: 97, ry: 2, t: 'JHANG - GOJRA ROAD' }, { x: 60, z: 213, ry: 0, t: 'GOVT. P.G. COLLEGE ROAD' }, { x: -90, z: 227, ry: 2, t: 'GOVT. P.G. COLLEGE ROAD' },
  { x: PARK.x + PARK.rx + 2, z: PARK.z - 20, ry: 1, t: 'JINNAH PARK' }, { x: POLICE.x, z: POLICE.z - POLICE.d / 2 - 1.6, ry: 0, t: 'CITY POLICE STATION' },
];

export const GJ = {
  roads: GJ_ROADS, lots: GJ_LOTS, clinic: CLINIC, shops: SHOPS, park: PARK, police: POLICE, mosque: MOSQUE, signs: SIGNS, named: NAMED, XC, ZC,
  grass: GRASS, parkAt, urbanAt, inPark,
  get trees() { return trees.filter(treeOK); },
};
