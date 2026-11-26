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
const PARK = { x: -70, z: -86, rx: 64, rz: 58 };      // Jinnah Park (v635: directly behind the shops, to the right of the three grounds)
/* v635 THE BLOCK BEHIND THE SHOPS (left = the NW end of the shop row as seen from the clinic = +x). From the shops outwards:
   three separate grass grounds right behind the shop row; a door in the far-left shop and a straight footpath (x 62.3) behind the grounds to a small grassy park; the mosque left of it;
   then a 46 m (150 ft) tiled area, and a walled dirt ground whose two big black gates (open) face POLICE STATION ROAD. */
const GROUNDS = [[40, -141, 60, -101], [18, -141, 38, -101], [-4, -141, 16, -101]];     // [x0, z0, x1, z1]
const SMALLPARK = [12, -97, 59.5, -65];
const PATH = { x: 62.3, w: 2.4, z0: -144, z1: -81, spurX: 54 };                             // the straight footpath from the far-left shop's back door; a short spur leads into the small park
const YARD = { z0: -93, z1: -69, tx0: 91, tx1: 137, dx1: 185, bays: [[-89, -84], [-78, -73]] };   // tiles x 91..137 (46 m), dirt x 137..185, two gate bays in the wall at x = 185
const POLICE = { x: -9, z: 52, w: 18, d: 14 };         // City Police Station
const MOSQUE = { x: 80, z: -81, w: 22, d: 22 };        // v635: the mosque, left of the small park

// ---------------------------------------------------------------- named roads: [x, z] polylines, w = width
const NAMED = [
  { id: 'tehsil2', name: 'TEHSIL OFFICE ROAD', w: 8, pts: [[-215, ZC], [-100, ZC], [20, ZC], [186, ZC]] },
  { id: 'tehsil1', name: 'POLICE STATION ROAD', w: 8, pts: [[186, ZC], [192, -90], [197, -30], [205, 40], [210, 90]] },   // v635: the road that turns north-east at the bend is POLICE STATION ROAD (the dirt yard's gates open on it)
  { id: 'police', name: 'POLICE STATION ROAD', w: 7, pts: [[205, 33], [60, 32], [-60, 34], [-170, 35]] },
  { id: 'jhang', name: 'JHANG - GOJRA ROAD', w: 13, pts: [[-268, 90], [-100, 90], [138, 90], [268, 91]] },
  { id: 'college', name: 'GOVT. P.G. COLLEGE ROAD', w: 9, pts: [[-268, 220], [-100, 220], [100, 220], [268, 220]] },
  { id: 'cinema', name: 'CINEMA ROAD', w: 8, pts: [[186, ZC], [268, ZC]] },   // the main road goes on to the north-west
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
/* v635 no building / lane on: the grounds + path + small park behind the shops, the pavement in front of the park, the tiled area + dirt yard */
const CLEAR = [[-4.5, -148, 67, -62], [-141, -156, -4.5, -140], [89, -96, 189, -66]];
const hitsClear = (x0, z0, x1, z1, m = 0) => CLEAR.some((r) => x1 > r[0] - m && x0 < r[2] + m && z1 > r[1] - m && z0 < r[3] + m);
const inFixed = (x, z, m = 0) => FIXED.some((r) => x > r[0] - m && x < r[2] + m && z > r[1] - m && z < r[3] + m) || inPark(x, z, m) || hitsClear(x, z, x, z, m);

const HZ = [-275.2, -236.8, -198.4, -121.6, -83.2, -44.8, -6.4, 133.3, 176.7];          // lanes along x
const VX = [-170, -130, -90, -50, -12, 80, 102, 150, 236];                                // lanes along z
const lanes = [];
const cutLane = (axis, c) => {   // split a lane into pieces that stay inside the core and outside the park / fixed sites
  const lo = axis === 'h' ? -230 : -285, hi = axis === 'h' ? 260 : 215; let cur = null; const out = [];
  for (let t = lo; t <= hi; t += 2) {
    const x = axis === 'h' ? t : c, z = axis === 'h' ? c : t;
    const ok = coreM(x, z) < 1.45 && !inFixed(x, z, 4.5) && Math.abs(x) < 280 && Math.abs(z) < 280;
    if (ok) { if (!cur) cur = [t, t]; else cur[1] = t; } else if (cur) { out.push(cur); cur = null; }
  }
  if (cur) out.push(cur);
  if (axis === 'v') for (const o of out) if (o[1] > -156 && o[1] < -140) o[1] = -156;   // a lane that ran on to the park side now ends at the road edge
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
      const bad = Math.abs(x) > 262 || Math.abs(z) > 262 || hitsClear(x0, z0, x1, z1, 0.5) || FIXED.some((r) => x1 > r[0] - 1 && x0 < r[2] + 1 && z1 > r[1] - 1 && z0 < r[3] + 1) || inPark(x, z, 4) || inPark(x0, z0, 2) || inPark(x1, z1, 2) || inPark(x0, z1, 2) || inPark(x1, z0, 2)
        || cand.some((q) => x1 + 2.8 > q.x - q.w / 2 && x0 - 2.8 < q.x + q.w / 2 && z1 + 2.8 > q.z - q.d / 2 && z0 - 2.8 < q.z + q.d / 2) || rectRoadGap(x0, z0, x1, z1, sg) < 2.9;   // v634: 2.9 (was 2.4): combat.js moves any building closer than 2.5 m to a road, which put two lots on top of each other
      if (bad) { cur += 3; continue; }
      cand.push({ kind: kd[0], x, z, w, d, front: frontOf(ux, uz, side), baz: st.baz, m: coreM(x, z), street: st.id, F, D });
      cur += F + 1.0 + Math.floor(RN() * 2.5);
    }
  }
}
cand.sort((p, q) => p.m - q.m);
const N_LOTS = 160;
const LOTS_ALL = cand.slice(0, N_LOTS).map((c, i) => ({ ...c, c: pickC(), rc: ROOFC[i % ROOFC.length], i }));
/* v646 SPARSER TOWN: 25% of the lots (40 of 160) are dropped, always the ones that are a copy of their neighbours: each round the lot of a repeated kind (house, duplex2, apart, flat2) that has the most
   lots of the SAME kind within 45 m goes (ties: the one farthest from the core), so rows of identical houses are thinned and the one-off buildings (malls, shops, three-storey flats) all stay. Pure data, no random number: every colour, tree and sign stays where it was. */
const REPL = new Set(['house', 'duplex2', 'apart', 'flat2']);
const dropped = new Set();
for (let r = 0, want = Math.round(LOTS_ALL.length * 0.25); r < want; r++) {
  let best = -1, bs = -1;
  for (const a of LOTS_ALL) { if (dropped.has(a.i) || !REPL.has(a.kind)) continue; let n = 0; for (const b of LOTS_ALL) if (b !== a && !dropped.has(b.i) && b.kind === a.kind && Math.hypot(a.x - b.x, a.z - b.z) < 45) n++; const sc = n + a.m * 0.01; if (sc > bs) { bs = sc; best = a.i; } }
  if (best < 0) break; dropped.add(best);
}
export const GJ_LOTS = LOTS_ALL.filter((l) => !dropped.has(l.i));

// lanes that no lot opens on are dropped (no empty streets in the countryside)
const usedLanes = laneList.filter((l) => GJ_LOTS.some((q) => { const mx = Math.max(l.pts[0][0], Math.min(l.pts[1][0], q.x)), mz = Math.max(l.pts[0][1], Math.min(l.pts[1][1], q.z)); return Math.hypot(mx - q.x, mz - q.z) < LW / 2 + 2.7 + Math.max(q.w, q.d) / 2 + 2; }));
/* v643 THE PUBG-STYLE STREET BLOCK (east of Police Station Road, off Cinema Road): one short street (x 227.5, running south from Cinema Road to a dead end) with four two-storey houses on each side,
   pitched clay-tile roofs, barred windows, broken yard walls, jersey barriers, sheds, power poles. Only data here (no THREE): combat.js builds the houses + solids, battlemap.js draws them (pubgblock.js).
   Houses are [centre x, centre z, w (x size), d (z size), front, wall tint, wall material p = plaster / b = brick, roof tint]. West row looks east, east row looks west; the street is 7 m wide, fronts stand 2.7 m back from its edge. */
const BLK = {
  rect: [200, -158, 253, -86],
  street: { x: 227.5, w: 7, z0: -160, z1: -90 },
  houses: [
    [215.3, -145.5, 12, 13, 'E', '#f79c8e', 'p', '#ffe6d6'], [215.8, -130, 11, 12, 'E', '#7fd2c2', 'p', '#f3cdb8'], [215.3, -114.5, 12, 13, 'E', '#f6b784', 'b', '#ffe9dc'], [215.8, -99, 11, 12, 'E', '#f7cf86', 'p', '#e9d2c6'],
    [239.7, -145, 12, 12, 'W', '#8dd6cf', 'p', '#f3cdb8'], [240.2, -129, 13, 14, 'W', '#f58f7c', 'p', '#ffe6d6'], [239.7, -113, 12, 12, 'W', '#f6b784', 'b', '#e9d2c6'], [240.2, -97.5, 13, 13, 'W', '#f6d26f', 'p', '#ffe9dc'],
  ],
  clutter: [['barrel', 222.4, -137.6], ['barrel', 222.9, -136.7], ['crate', 222.2, -122.6, 0.3], ['cbox', 222.6, -121.6, 0.5], ['crate', 222.3, -106.8, 0.1], ['barrel', 222.5, -105.8], ['barrel', 233.0, -137.6], ['crate', 233.1, -120.6, 0.5], ['gas', 233.0, -119.7], ['crate', 232.9, -105.6, 0], ['cbox', 233.2, -104.6, 1.1]],   // v644: [kind, x, z, turn] crates / barrels / gas bottles / boxes in the alleys beside the street (solid, drawn from the real models)
  barriers: [[225.2, -91.2, 'x'], [227.5, -91.2, 'x'], [229.8, -91.2, 'x'], [226.2, -124, 'x'], [229, -121.2, 'x'], [224.6, -141.5, 'z'], [230.6, -104, 'z']],   // [x, z, long side along 'x' or 'z']
  walls: [[205, -153, 205.4, -146.5, 1.9], [205, -142, 205.4, -131.5, 1.5], [205, -113, 205.4, -102, 1.4], [251, -152, 251.4, -139, 1.8], [251, -135, 251.4, -121.5, 1.3], [251, -116, 251.4, -105, 2.0], [251, -100, 251.4, -91, 1.5]],   // broken concrete yard walls [x0, z0, x1, z1, height]; the gaps line up with the lane and the back doors
  sheds: [[201.7, -129.5, 4.4, 3.4, 'x', 2.5], [246.5, -88, 4.4, 3.2, 'x', 2.4]],   // corrugated sheds [x, z, w, d, -, height]
  poles: [[232.6, -153], [232.6, -131], [232.6, -109], [232.6, -93]],
  tarps: [[248.8, -131, 3.4, 3.0], [202.6, -108, 3.4, 3.0]],   // blue tarps on four posts, 2.6 m up
  patches: [[227.5, -157, 11, 7], [227.5, -134, 8.5, 9], [227.5, -108, 9, 8], [204, -138, 5.5, 8], [251, -110, 5, 9], [221, -92, 7, 5]],   // bare dirt [x, z, rx, rz]
};
/* v650 CINEMA ROAD from end to end: seven houses with DIFFERENT exteriors (kind: pub2 = pitched clay roof, ridge along the road or its gable end to the road; pubh = hip / pyramid roof; pubf = flat roof with parapet, chajja shades and a water tank or roof terrace; pubf3 = three storeys).
   Fronts stand 2.7 m back from the road edge; the block's own houses already fill the south side between x 203 and 252, so the new ones are on the north side (front S) and on the two free ends of the south side (front N). Same tuple as the block + the kind at the end. */
const CN = {
  houses: [
    [199.5, -172.7, 13, 12, 'S', '#f79c8e', 'p', '#ffe6d6', 'pub2'], [214.5, -173.2, 14, 13, 'S', '#7fd2c2', 'p', '#ffe6d6', 'pubf'], [229, -172.7, 12, 12, 'S', '#f6b784', 'b', '#f3cdb8', 'pubh'], [242, -173.7, 11, 14, 'S', '#f7cf86', 'p', '#e9d2c6', 'pub2'], [255.5, -172.7, 13, 12, 'S', '#8dd6cf', 'p', '#ffe9dc', 'pubf3'],
    [198.3, -148.8, 9, 9, 'N', '#f58f7c', 'p', '#ffe6d6', 'pubf'], [258.5, -148.8, 8, 9, 'N', '#f6d26f', 'p', '#f3cdb8', 'pubh'],
  ],
  clutter: [['barrel', 206.75, -178.5], ['barrel', 207.4, -179.2], ['crate', 222.3, -178.6, 0.4], ['cbox', 222.9, -179.4, 0.8], ['crate', 235.7, -180.5, 0.2], ['gas', 248.3, -179.2], ['barrel', 248.8, -178.4], ['crate', 262.9, -176.6, 0.6], ['crate', 205.3, -143.8, 0.3], ['barrel', 205.9, -143.0]],
  barriers: [[266.2, -162.6, 'z'], [266.2, -160, 'z'], [266.2, -157.4, 'z'], [210, -186.5, 'x']],
  walls: [[193, -184.4, 197.5, -184, 1.8], [201.2, -184.4, 211.5, -184, 1.4], [215.5, -184.4, 226.2, -184, 1.9], [231, -184.4, 240.5, -184, 1.3], [245, -184.4, 252.4, -184, 1.7], [256.6, -184.4, 262, -184, 1.5]],
  sheds: [[221.5, -187.2, 4.4, 3.4, 'x', 2.5]],
  poles: [[206.75, -165.5], [222.25, -165.5], [235.75, -165.5], [248.25, -165.5], [263, -165.5]],
  tarps: [],
  patches: [[214, -190, 8, 4], [250, -190, 9, 4], [206.5, -168.5, 3, 2], [235.7, -168.5, 3, 2], [248.3, -168.5, 3, 2]],
};
export const GJ_ROADS = NAMED.map((r) => ({ w: r.w, pts: r.pts })).concat(usedLanes.map((l) => ({ w: l.w, pts: l.pts }))).concat([{ w: BLK.street.w, pts: [[BLK.street.x, BLK.street.z0], [BLK.street.x, BLK.street.z1]] }]);
SEGS.push([BLK.street.x, BLK.street.z0, BLK.street.x, BLK.street.z1, BLK.street.w, 'blk']); FIXED.push(BLK.rect); for (const h of CN.houses) FIXED.push([h[0] - h[2] / 2 - 1, h[1] - h[3] / 2 - 1, h[0] + h[2] / 2 + 1, h[1] + h[3] / 2 + 1]); FIXED.push([192, -190, 264, -183]);   // v650: signs and trees keep clear of the Cinema Road houses and their back yards   // v643: signs and trees keep clear of the block's street and yards (the lots were already placed)

// ---------------------------------------------------------------- the town ground (concrete) and the park (grass)
const lotsM = LOTS_ALL.reduce((m, l) => Math.max(m, l.m), 0);
export const urbanAt = (x, z) => 1 - smooth(Math.min(1, lotsM) * 0.95, Math.min(1, lotsM) * 0.95 + 0.5, coreM(x, z));
export const parkAt = (x, z) => 1 - smooth(0.0, 1.0, (Math.sqrt(((x - PARK.x) / PARK.rx) ** 2 + ((z - PARK.z) / PARK.rz) ** 2) - 0.92) / 0.09);

/* v635 the three grounds + the small park are grass too: 1 inside, falling to 0 over 1.2 m outside */
const GRASSR = GROUNDS.concat([SMALLPARK]);
const rectGrass = (x, z) => { let best = 0; for (const r of GRASSR) { const d = Math.hypot(Math.max(r[0] - x, 0, x - r[2]), Math.max(r[1] - z, 0, z - r[3])); const v = 1 - smooth(0, 1.2, d); if (v > best) best = v; } return best; };
export const grassAt = (x, z) => Math.max(parkAt(x, z), rectGrass(x, z));

// ---------------------------------------------------------------- trees: Jinnah Park (many), the three grounds, the small park, the tiled area's edge
const RT = seeded(63301), trees = [];
for (let i = 0; i < 90; i++) { const a = RT() * 6.283, r = Math.sqrt(RT()) * 0.9, x = PARK.x + Math.cos(a) * PARK.rx * r, z = PARK.z + Math.sin(a) * PARK.rz * r; if (Math.hypot(x - PARK.x, z - PARK.z) < 9) continue; trees.push([x, z, 1.5 + RT() * 1.1, RT() < 0.25]); }
for (let i = 0; i < 26; i++) { const a = RT() * 6.283; trees.push([PARK.x + Math.cos(a) * PARK.rx * 0.98, PARK.z + Math.sin(a) * PARK.rz * 0.98, 1.7 + RT() * 0.8, false]); }   // an avenue round the edge
for (const g of GROUNDS) for (const [fx, fz] of [[0.2, 0.15], [0.8, 0.12], [0.5, 0.88], [0.15, 0.85]]) trees.push([g[0] + (g[2] - g[0]) * fx, g[1] + (g[3] - g[1]) * fz, 1.5 + RT() * 0.7, false]);   // v635: a few trees in each of the three grounds (cover without blocking the view along them)
for (let i = 0; i < 14; i++) { const x = SMALLPARK[0] + 3 + RT() * (SMALLPARK[2] - SMALLPARK[0] - 6), z = SMALLPARK[1] + 3 + RT() * (SMALLPARK[3] - SMALLPARK[1] - 6); trees.push([x, z, 1.4 + RT() * 0.9, RT() < 0.2]); }
for (let k = 0; k < 8; k++) trees.push([YARD.tx0 + 4 + k * 5.6, k % 2 ? YARD.z0 + 2.6 : YARD.z1 - 2.6, 1.5 + RT() * 0.5, false]);   // shade trees along the tiled area's two sides
const treeOK = (t) => { const [x, z] = t; return !FIXED.some((r) => x > r[0] - 2 && x < r[2] + 2 && z > r[1] - 2 && z < r[3] + 2 || false) && rectRoadGap(x - 1, z - 1, x + 1, z + 1, null) > 1.5 && !GJ_LOTS.some((q) => Math.abs(x - q.x) < q.w / 2 + 2.2 && Math.abs(z - q.z) < q.d / 2 + 2.2); };
const GRASS = [[-24, -16, 16], [22, -22, 15], [-26, 20, 16], [22, 22, 14], [-2, -2, 11]].map(([dx, dz, r]) => ({ x: PARK.x + dx, z: PARK.z + dz, r })).concat([{ x: 35, z: -81, r: 8 }]);   // the tall-grass hiding patches: five in the park, one in the small park

// ---------------------------------------------------------------- road-name signs (blue boards on two posts at the junctions)
const SIGNS0 = [
  { x: XC - 40, z: ZC - 6.5, ry: 0, rid: 'tehsil2', t: 'TEHSIL OFFICE ROAD' }, { x: XC + 42, z: ZC - 6.5, ry: 2, rid: 'tehsil2', t: 'TEHSIL OFFICE ROAD' }, { x: 184, z: -100, ry: 1, rid: 'tehsil1', t: 'POLICE STATION ROAD' }, { x: 200, z: 10, ry: 3, rid: 'tehsil1', t: 'POLICE STATION ROAD' }, { x: 170, z: ZC + 6.5, ry: 0, rid: 'tehsil2', t: 'TEHSIL OFFICE ROAD' }, { x: 230, z: ZC + 6.5, ry: 2, rid: 'cinema', t: 'CINEMA ROAD' },
  { x: 100, z: 27, ry: 0, rid: 'police', t: 'POLICE STATION ROAD' }, { x: -120, z: 39, ry: 2, rid: 'police', t: 'POLICE STATION ROAD' },
  { x: 100, z: 83, ry: 0, rid: 'jhang', t: 'JHANG - GOJRA ROAD' }, { x: -100, z: 97, ry: 2, rid: 'jhang', t: 'JHANG - GOJRA ROAD' }, { x: 190, z: 97, ry: 2, rid: 'jhang', t: 'JHANG - GOJRA ROAD' },
  { x: 60, z: 213, ry: 0, rid: 'college', t: 'GOVT. P.G. COLLEGE ROAD' }, { x: -90, z: 227, ry: 2, rid: 'college', t: 'GOVT. P.G. COLLEGE ROAD' },
  { x: PARK.x + PARK.rx * 0.72, z: ZC + 6.5, ry: 0, t: 'JINNAH PARK', fix: true }, { x: POLICE.x, z: POLICE.z - POLICE.d / 2 - 1.6, ry: 0, t: 'CITY POLICE STATION', fix: true },
];
/* v634 every board is moved to the nearest free spot beside its road (the generated lanes and lots had put some of them inside a lane or a wall, so only half the board showed) */
const ownGap = (segs, x0, z0, x1, z1) => { let best = 1e9; for (const sg of segs) { const [ax, az, bx, bz, w] = sg, n = Math.max(2, Math.ceil(Math.hypot(bx - ax, bz - az) / 1.5)); for (let k = 0; k <= n; k++) { const px = ax + (bx - ax) * k / n, pz = az + (bz - az) * k / n, d = Math.hypot(Math.max(x0 - px, 0, px - x1), Math.max(z0 - pz, 0, pz - z1)) - w / 2; if (d < best) best = d; } } return best; };
const SIGNS = SIGNS0.map((sg) => {
  if (sg.fix) return sg;
  const own = SEGS.filter((q) => q[5] === sg.rid), odd = (sg.ry || 0) % 2, hw = odd ? 0.8 : 2.9, hd = odd ? 2.9 : 0.8, cs = [];
  for (let dx = -24; dx <= 24; dx += 1.5) for (let dz = -24; dz <= 24; dz += 1.5) cs.push([dx, dz, Math.hypot(dx, dz)]);
  cs.sort((p, q) => p[2] - q[2]);
  for (const [dx, dz] of cs) { const x = sg.x + dx, z = sg.z + dz, x0 = x - hw, x1 = x + hw, z0 = z - hd, z1 = z + hd, gap = rectRoadGap(x0, z0, x1, z1, null), og = ownGap(own, x0, z0, x1, z1);
    if (gap < 0.6 || og > 3.4 || inPark(x, z, 3) || hitsClear(x0, z0, x1, z1, 0.5) || FIXED.some((r) => x1 > r[0] - 1 && x0 < r[2] + 1 && z1 > r[1] - 1 && z0 < r[3] + 1) || GJ_LOTS.some((q) => x1 + 0.8 > q.x - q.w / 2 && x0 - 0.8 < q.x + q.w / 2 && z1 + 0.8 > q.z - q.d / 2 && z0 - 0.8 < q.z + q.d / 2)) continue;
    return { ...sg, x, z }; }
  return sg; });

/* v652 STREET OBSTACLES (user: 'obstacles and props like PUBG on streets, not too much'): a few jersey barriers (a lane-edge chicane, kerb blocks) and small crate / barrel / gas bottle heaps on the road shoulders, one about every 55 m of street, never at a junction, never on a building / tree / the Cinema Road + street block (they have their own). combat.js calls this after every solid exists, with blocked(x, z, r) = something solid is already there */
export function makeStreet(blocked, ground) {
  const out = { houses: [], clutter: [], barriers: [], walls: [], sheds: [], poles: [], tarps: [], patches: [] };
  let sd = 90210; const rnd = () => { sd = (sd * 1664525 + 1013904223) >>> 0; return sd / 4294967296; };
  const sdist = (px, pz, pts) => { let m = 1e9; for (let i = 0; i + 1 < pts.length; i++) { const [ax, az] = pts[i], [bx, bz] = pts[i + 1], dx = bx - ax, dz = bz - az, L2 = dx * dx + dz * dz || 1, t = Math.max(0, Math.min(1, ((px - ax) * dx + (pz - az) * dz) / L2)); m = Math.min(m, Math.hypot(px - ax - dx * t, pz - az - dz * t)); } return m; };
  const nearOther = (px, pz, me) => GJ_ROADS.some((r) => r !== me && sdist(px, pz, r.pts) < r.w / 2 + 11);
  const skipRoad = (r) => r.pts.every((q) => q[0] > 186) || r === GJ_ROADS[GJ_ROADS.length - 1];
  const flat = (x, z) => !ground || (Math.abs(ground(x + 1.6, z) - ground(x - 1.6, z)) < 0.5 && Math.abs(ground(x, z + 1.6) - ground(x, z - 1.6)) < 0.5);
  for (const r of GJ_ROADS) { if (skipRoad(r)) continue; const segs = []; let tot = 0; for (let i = 0; i + 1 < r.pts.length; i++) { const L = Math.hypot(r.pts[i + 1][0] - r.pts[i][0], r.pts[i + 1][1] - r.pts[i][1]); segs.push([tot, L, i]); tot += L; }
    for (let pos = 22 + rnd() * 24; pos < tot - 14; pos += 52 + rnd() * 30) { const sg = segs.find((q) => pos >= q[0] && pos < q[0] + q[1]); if (!sg) continue; const [ax, az] = r.pts[sg[2]], [bx, bz] = r.pts[sg[2] + 1], tx = (bx - ax) / sg[1], tz = (bz - az) / sg[1], nx = -tz, nz = tx, d = pos - sg[0], px = ax + tx * d, pz = az + tz * d;
      const kind = rnd(), side = rnd() < 0.5 ? 1 : -1, k2 = rnd(), ry = rnd() * 1.5, ax2 = Math.abs(tx) > 0.93 ? 'x' : Math.abs(tz) > 0.93 ? 'z' : null, hw = r.w / 2;   // (every random number is drawn before any test, so the layout does not shift)
      if (Math.abs(px) > 250 || Math.abs(pz) > 250 || nearOther(px, pz, r) || inPark(px, pz, 8) || !flat(px, pz)) continue;
      if (kind < 0.3 && ax2) { const lat = side * (hw - 1.1), p1 = [px + nx * lat, pz + nz * lat], p2 = [px + tx * 5.2 - nx * lat, pz + tz * 5.2 - nz * lat]; if (blocked(p1[0], p1[1], 2.2) || blocked(p2[0], p2[1], 2.2)) continue; out.barriers.push([p1[0], p1[1], ax2], [p2[0], p2[1], ax2]); }   // a chicane: one block at each edge of the road, 5 m apart, the cars weave through
      else if (kind < 0.55 && ax2) { const lat = side * (hw + 0.7), p1 = [px + nx * lat, pz + nz * lat], p2 = [px + tx * 3.1 + nx * lat, pz + tz * 3.1 + nz * lat]; if (blocked(p1[0], p1[1], 2.2) || blocked(p2[0], p2[1], 2.2)) continue; out.barriers.push([p1[0], p1[1], ax2], [p2[0], p2[1], ax2]); }   // two kerb blocks end to end
      else { const lat = side * (hw + 1.6), cx = px + nx * lat, cz = pz + nz * lat; if (blocked(cx, cz, 2.4)) continue;
        if (k2 < 0.4) out.clutter.push(['crate', cx, cz, ry], ['crate', cx + tx * 1.15, cz + tz * 1.15, ry + 0.4], ['barrel', cx + tx * 0.55 + nx * side * 0.95, cz + tz * 0.55 + nz * side * 0.95]);
        else if (k2 < 0.75) out.clutter.push(['barrel', cx, cz], ['barrel', cx + tx * 0.85, cz + tz * 0.85], ['gas', cx - tx * 0.9, cz - tz * 0.9]);
        else out.clutter.push(['crate', cx, cz, ry], ['cbox', cx + tx * 1.3, cz + tz * 1.3, ry]); } } }
  return out;
}

export const GJ = {
  street: null,   // v652: filled by combat.js (makeStreet) once the solids exist
  roads: GJ_ROADS, lots: GJ_LOTS, clinic: CLINIC, shops: SHOPS, park: PARK, police: POLICE, mosque: MOSQUE, signs: SIGNS, named: NAMED, XC, ZC,
  block: BLK, cine: CN, grass: GRASS, parkAt, grassAt, urbanAt, inPark, grounds: GROUNDS, smallPark: SMALLPARK, path: PATH, yard: YARD,
  get trees() { return trees.filter(treeOK).filter((_, i) => i % 2 === 0); },   // v638: HALF the trees (every second one; all the random numbers were drawn before, so nothing else moves): from the air the park was one green blanket
};
