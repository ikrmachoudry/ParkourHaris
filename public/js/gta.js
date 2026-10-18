// HARIS CITY (GTA-style open world): the pure layout - terrain height function, road network, buildings. No three.js here,
// so tests (and later the server) can use it too.  World: x east, z south, y up.  Sea level is y = -1.2.
export const GT = {
  HALF: 380,                       // the terrain covers -380..380 in x and z
  SEA: -1.2,
  GRID: [-120, -60, 0, 60, 120],   // avenues (the same numbers for x and z)
  HW: 6.5,                         // road half width
  MT: { cx: -215, cz: -215, R: 105, H: 56, Rt: 20, T: 2.6, th0: Math.PI / 4 },   // Mount Haris with a spiral road to the summit
  HWY: { ax: 120, bx: 300, z: 0 },                                                   // the coast highway to the lookout
};
const sm = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const mix = (a, b, t) => a + (b - a) * t;
const TAU = Math.PI * 2;
const HILLS = [[210, -210, 70, 21], [235, 205, 62, 14], [-205, 215, 66, 16], [40, -300, 60, 11], [-40, 300, 55, 9]];
const noise = (x, z) => (Math.sin(x * 0.043 + 1.3) * Math.cos(z * 0.051 + 0.4) * 0.6 + Math.sin((x + z) * 0.09 + 2.0) * 0.3 + Math.sin(x * 0.17) * Math.sin(z * 0.15) * 0.1);

export const mtC = (r) => { const M = GT.MT; return r >= M.R ? 0 : M.H * Math.pow(1 - Math.max(r, M.Rt) / M.R, 1.25); };
export const mtRoad = (u) => { const M = GT.MT, r = M.R + (M.Rt - M.R) * u, th = M.th0 + u * M.T * TAU; return { x: M.cx + r * Math.cos(th), z: M.cz + r * Math.sin(th), r, y: mtC(r) }; };

// terrain height everywhere (flat 0 in the city, hills outside, a mountain with a carved road, a beach and the sea)
export function gtaBase(x, z) {
  const M = GT.MT, dx = x - M.cx, dz = z - M.cz, r = Math.hypot(dx, dz), box = Math.max(Math.abs(x), Math.abs(z));
  const mt = sm(M.R + 25, M.R + 5, r), m = sm(150, 215, box), coast = 6.2 * sm(300, 395, box);
  let hills = 0; for (const [hx, hz, hr, hh] of HILLS) { const d = Math.hypot(x - hx, z - hz) / hr; hills += hh * Math.exp(-d * d); }
  const h0 = (1 - mt) * (m * (hills + noise(x, z) * 1.1) - coast);
  let h = h0 + mtC(r);
  if (r < M.R + 22) { // the road up the mountain: flat across, the hill blends in beside it
    const a = Math.atan2(dz, dx); let best = 1e9, bh = 0;
    for (let n = -1; n <= 2; n++) {
      let ang = (((a - M.th0) % TAU) + TAU) % TAU + n * TAU; const u = ang / (M.T * TAU); if (u < 0 || u > 1) continue;
      const rr = M.R + (M.Rt - M.R) * u, d = Math.abs(r - rr); if (d < best) { best = d; bh = mtC(rr); }
    }
    if (best < GT.HW + 14) { const t = 1 - sm(GT.HW + 2.5, GT.HW + 14, best); h = mix(h, h0 + bh, t); }
  }
  { // coast highway + lookout plaza are flat
    const H = GT.HWY, dz2 = Math.abs(z - H.z), ex = x < H.ax ? H.ax - x : x > H.bx ? x - H.bx : 0, d = Math.hypot(dz2, ex);
    if (x > H.ax - 10 && d < 26) h = mix(h, 0, 1 - sm(GT.HW + 2.5, GT.HW + 16, d));
    const dl = Math.hypot(x - H.bx, z - H.z); if (dl < 34) h = mix(h, 0, 1 - sm(15, 30, dl));
  }
  { // the Stunt Park is one big flat pad (the hills and the noise are levelled out, blending back into the land over ~14 m)
    const P = PARK, dx = Math.max(P.x0 - x, 0, x - P.x1), dz = Math.max(P.z0 - z, 0, z - P.z1), d = Math.hypot(dx, dz);
    if (d < 22) h = mix(h, 0, 1 - sm(8, 22, d));
  }
  return h;
}

// STUNT RAMPS: wedges that start at (x,z) and rise in direction yaw (forward = sin yaw, cos yaw). They are part of the ground height,
// so people walk up them and cars fly off them. [x, z, yaw, length, height, width]
const HP = Math.PI / 2;
// MISSIONS: the Mission Lobby building (walk onto the pad inside) and the STUNT JUMP course on the coast highway: 4 white super cars wait on the start
// line, two ramps follow, and the finish line is near the lookout.  Ramps are part of the ground height, so cars fly off them.
export const LOBBY = { x: 90, z: -20, w: 16, d: 11, pad: { x: 90, z: -21 }, color: '#a855f7' };   // door faces +z (the south avenue); the pad is the ring inside
export const STUNT = { name: 'STUNT JUMP', startX: 112, lanes: [-4.5, -1.5, 1.5, 4.5], yaw: HP0(), ramps: [[150, 0, HP0(), 20, 2.6, 12], [232, 0, HP0(), 20, 2.6, 12]], finishX: 292, minSpeed: 24, minAir: 0.55, timeLimit: 55 };
// MISSION 2 - THIEF CHASE: the CITY BANK (south side of the z = 60 avenue, door faces north) and the POLICE STATION (north side of the z = -60 avenue, door faces south).
// Both are just buildings (nobody can go in). Two 4-door police cars wait in front of the station; for the mission they are moved to the bank.
export const BANK = { x: 30, z: 95, w: 34, d: 20, h: 15 };
export const POLICE = { x: 30, z: -100, w: 34, d: 16, h: 12, zone: { x: 30, z: -76, r: 9 } };
export const CHASE = {
  name: 'THIEF CHASE',
  cops: [{ x: 20, z: 74, yaw: 0 }, { x: 40, z: 74, yaw: 0 }],                      // the police cars at the bank (nose to the door)
  copsHome: [{ x: 21, z: -80, yaw: Math.PI }, { x: 39, z: -80, yaw: Math.PI }],      // ... and at the station
  copIdx: [24, 25],
  thiefCar: { x: 30, z: 63.25, yaw: -Math.PI / 2 },                                // parked at the kerb, nose west (left-hand traffic: south lane)
  walk: [[30, 85.6], [30, 71], [34.6, 67], [34.6, 63.2], [30.2, 61.1]],            // the thief runs out of the bank, round the back of his car to the driver's door
  corners: [[30, 63.25], [-100, 63.25], [-123.25, 40], [-123.25, -100], [-126, -122], [-140.8, -140.8]],   // the road to the mountain (west along z = 60, north along x = -120, the link road)
  stopA: 330,                                                                      // arc length (m) of the first stop (set by buildRoute: the trunk stop on the west avenue)
  flee: { x: -215, z: -215, r: 13 },                                               // the summit plaza
};
function HP0() { return Math.PI / 2; }
// THE STUNT PARK: a flat arena south-east of the Mission Lobby with a fast oval circuit (two straights joined by two wide turns).
//   top straight (east-bound, z = zT): speed booster, then a ramp.  bottom straight (west-bound, z = zB): speed booster, a lit TUNNEL, then a low kicker.
//   The 4 white super cars (the mission cars) wait in the infield whenever no mission is running.
export const PARK = {
  x0: 145, x1: 295, z0: 52, z1: 128,                         // the flat pad
  cxW: 178, cxE: 262, cz: 92, R: 20, hw: 10.5, zT: 72, zB: 112,   // oval: end centres, turn radius (centre line), road half-width, the two straights
  ramps: [[200, 72, HP0(), 20, 2.0, 14], [214, 112, -HP0(), 18, 1.3, 14]],
  boosts: [{ x: 188, z: 72, rx: 7, rz: 7, dir: 1 }, { x: 258, z: 112, rx: 7, rz: 7, dir: -1 }],
  tunnel: { x0: 222, x1: 248, z: 112, half: 9, h: 6.5 },
  spawn: { x: 200, z: 86.6, step: 3.2, yaw: HP0() },
  gate: { x: 174, z: 72 },
  walls: [[143, 49, 299, 51], [143, 131, 299, 133], [297, 49, 299, 133], [141, 69, 143, 133]],   // crash barriers round the pad (x0, z0, x1, z1): a car can never end up in the sea; the west side is open where the road comes in
  wallH: 1.5,
};
// the oval's centre line as a list of points (clockwise from the west end of the top straight)
export function parkPath() {
  const P = PARK, pts = [[P.cxW, P.zT]]; pts.push([P.cxE, P.zT]);
  for (let i = 1; i <= 72; i++) { const a = -Math.PI / 2 + i / 72 * Math.PI; pts.push([P.cxE + P.R * Math.cos(a), P.cz + P.R * Math.sin(a)]); }
  pts.push([P.cxW, P.zB]);
  for (let i = 1; i <= 72; i++) { const a = Math.PI / 2 + i / 72 * Math.PI; pts.push([P.cxW + P.R * Math.cos(a), P.cz + P.R * Math.sin(a)]); }
  return pts;
}
export const RAMPS = [...STUNT.ramps, ...PARK.ramps];
export function rampH(x, z) {
  let h = 0;
  for (const [rx, rz, yaw, len, hg, w] of RAMPS) {
    const dx = x - rx, dz = z - rz;
    if (dx * dx + dz * dz > (len + w) * (len + w)) continue;
    const u = dx * Math.sin(yaw) + dz * Math.cos(yaw), v = dx * Math.cos(yaw) - dz * Math.sin(yaw);
    if (u < 0 || u > len || Math.abs(v) > w / 2) continue;
    h = Math.max(h, hg * u / len * Math.min(1, (w / 2 - Math.abs(v)) / 0.8));   // the side edges slope away over the last 0.8 m (no sudden 2 m step)
  }
  return h;
}
export const gtaH = (x, z) => gtaBase(x, z) + rampH(x, z);

// the drivable road network (segments follow the ground height; cars use y0 / y1 as the road surface)
export function gtaRoads() {
  const segs = [], plazas = [], G = GT.GRID, hw = GT.HW;
  for (const g of G) { segs.push({ ax: g, az: -120, bx: g, bz: 120, hw, y0: 0, g: 'x' + g }); segs.push({ ax: -120, az: g, bx: 120, bz: g, hw, y0: 0, g: 'z' + g }); }
  segs.push({ ax: -120, az: -120, bx: -140.8, bz: -140.8, hw, y0: 0, g: 'link' });
  // the mountain road: short pieces so a car follows the slope
  const M = GT.MT, len = (M.R + M.Rt) / 2 * M.T * TAU, N = Math.ceil(len / 7);
  for (let i = 0; i < N; i++) { const a = mtRoad(i / N), b = mtRoad((i + 1) / N); segs.push({ ax: a.x, az: a.z, bx: b.x, bz: b.z, hw, y0: a.y, y1: b.y, g: 'mt' }); }
  plazas.push({ x: M.cx, z: M.cz, r: 20, y: mtC(M.Rt), g: 'summit' });
  segs.push({ ax: GT.HWY.ax, az: 0, bx: GT.HWY.bx, bz: 0, hw, y0: 0, g: 'hwy' });
  plazas.push({ x: GT.HWY.bx, z: 0, r: 14, y: 0, g: 'lookout' });
  { // the Stunt Park: the oval circuit and the road that joins it to the city (the east end of the z = 60 avenue)
    const pts = parkPath(); for (let i = 0; i < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; segs.push({ ax: a[0], az: a[1], bx: b[0], bz: b[1], hw: PARK.hw, y0: 0, g: 'stunt' }); }
    segs.push({ ax: 120, az: 60, bx: 158, bz: 60, hw, y0: 0, g: 'stunt-link' }); segs.push({ ax: 158, az: 60, bx: PARK.cxW, bz: PARK.zT - 1, hw, y0: 0, g: 'stunt-link' });
  }
  return { segs, plazas, boosts: PARK.boosts.map((b) => ({ ...b })) };
}

// buildings (deterministic): {x,z,w,d,h,col,kind}.  16 blocks between the avenues, two of them are parks.
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
export const PARKS = [[90, 90], [-90, 30]];
// LANDMARKS: the auto repair shop (drive into the bay under the canopy) and a house for each player (Haris, Hannan, Hanbal, Michael).
// Houses face the avenue: yaw = direction of the front door (forward = sin yaw, cos yaw).
export const REPAIR = { x: -30, z: 13, r: 4.6, shop: { x: -30, z: 45, w: 34, d: 14, h: 7.5 } };
export const HOMES = [
  { char: 0, name: 'Haris', x: -100, z: -100, yaw: Math.PI, color: '#ff5f5f' },
  { char: 1, name: 'Hannan', x: -80, z: -100, yaw: Math.PI, color: '#3ddc84' },
  { char: 2, name: 'Hanbal', x: -100, z: -80, yaw: 0, color: '#ffc233' },
  { char: 3, name: 'Michael', x: -80, z: -80, yaw: 0, color: '#8b6cff' },
];
// local house coordinates (+z = towards the front door / avenue, +x = right of someone at the door looking out) -> world
export const homeW = (h, lx, lz) => ({ x: h.x + lx * Math.cos(h.yaw) + lz * Math.sin(h.yaw), z: h.z - lx * Math.sin(h.yaw) + lz * Math.cos(h.yaw) });
export const homeL = (h, x, z) => { const dx = x - h.x, dz = z - h.z; return { x: dx * Math.cos(h.yaw) - dz * Math.sin(h.yaw), z: dx * Math.sin(h.yaw) + dz * Math.cos(h.yaw) }; };
// house footprint (local): x -6..6, z -7.25..1.25.  Garage = left part x -5.7..-1.1.  Returns 'garage' | 'home' | null
export function homeZone(x, z, pad = 0) {
  for (const h of HOMES) { const l = homeL(h, x, z); if (l.x > -6 - pad && l.x < 6 + pad && l.z > -7.25 - pad && l.z < 1.25 + pad) return { h, zone: l.x < -0.9 ? 'garage' : 'home' }; }
  return null;
}
export const homeSpawn = (char) => { const h = HOMES[((char | 0) % HOMES.length + HOMES.length) % HOMES.length], p = homeW(h, 3.4, 3.6); return { x: p.x, z: p.z, yaw: h.yaw }; };
const LOT_BLOCKS = [[-30, 30], [-90, -90], [90, -30], [30, 90], [30, -90]];   // + the bank and the police station blocks
export function gtaBuildings() {
  const R = rng(4242), out = [], pal = ['#e8c9a0', '#cfd8e3', '#e89c8a', '#a8c5e8', '#f1e0a6', '#b9d9b0', '#d9b8e0', '#f0b27a', '#9fb4c8'];
  for (const bx of [-90, -30, 30, 90]) for (const bz of [-90, -30, 30, 90]) {
    if (PARKS.some((p) => p[0] === bx && p[1] === bz)) continue;
    const dist = Math.max(Math.abs(bx), Math.abs(bz)), zone = dist <= 30 ? 0 : dist <= 60 ? 1 : 2;
    for (const [ox, oz] of [[-11.5, -11.5], [11.5, -11.5], [-11.5, 11.5], [11.5, 11.5]]) {
      const w = 12 + R() * 7, d = 12 + R() * 7, h = zone === 0 ? 38 + R() * 42 : zone === 1 ? 16 + R() * 26 : 8 + R() * 14;
      out.push({ x: bx + ox + (R() - 0.5) * 1.5, z: bz + oz + (R() - 0.5) * 1.5, w, d, h, col: pal[Math.floor(R() * pal.length)], zone });
    }
  }
  const t = out.find((b) => b.x > 30 && b.x < 45 && b.z > 30 && b.z < 45); if (t) { t.h = 118; t.w = 17; t.d = 17; t.col = '#7fb6e6'; t.tower = true; }
  return out.filter((b) => !LOT_BLOCKS.some(([cx, cz]) => Math.abs(b.x - cx) < 24 && Math.abs(b.z - cz) < 24));   // the repair-shop block and the housing block are built separately
}

// parked cars (8: ids repeat so there are 4 looks) and the traffic loops (visual only)
// 8 vehicles (the multiplayer car sync has 3 bits): 4 cars, 2 bikes, a SUPER BIKE (190 km/h) and a SUPER CAR (300 km/h), lined up near the spawn
export function gtaCars() {
  // 8 real cars (ids 11..18, see cityveh.js) parked nose-to-tail along the kerb near the spawn. Pakistan drives on the LEFT:
  // east-bound cars use the north (-z) lane, west-bound the south (+z) lane.
  const home = HOMES.map((h, i) => { const p = homeW(h, -3.3, 5.8); return { id: 11 + i, x: p.x, z: p.z, yaw: h.yaw }; });   // each home has a car in its driveway
  return [...[[11, -30, -5.0], [12, -22, -5.0], [13, -14, -5.0], [14, 12, 5.0], [15, 21, 5.0], [16, 30, 5.0], [17, -38, 5.0], [18, 40, -5.0]].map(([id, x, z]) => ({ id, x, z, yaw: z > 0 ? -Math.PI / 2 : Math.PI / 2 })), ...home, ...[0, 1, 2, 3].map((k) => ({ id: 17, x: PARK.spawn.x, z: PARK.spawn.z + k * PARK.spawn.step, yaw: PARK.spawn.yaw })),
    // 16..23 = motorbikes: five on the kerb near the spawn, three in the Stunt Park infield (the net flags carry a 5-bit vehicle index)
    ...[[19, -4], [20, -1.5], [21, 1], [19, 3.5], [20, 6]].map(([id, x]) => ({ id, x, z: -5.0, yaw: Math.PI / 2 })), ...[[19, 86.6], [21, 89.8], [20, 93]].map(([id, z]) => ({ id, x: PARK.spawn.x - 7, z, yaw: PARK.spawn.yaw })),
    ...CHASE.copsHome.map((q) => ({ id: 15, ...q }))];   // 12..15 = the four white mission cars (they wait in the Stunt Park)
}
// traffic: two nested rings of cars (no lane is shared, so cars never run into each other). Pakistan drives on the LEFT:
// the cars go anti-clockwise seen from above, hugging the inside lane of each ring.
export const TRAFFIC = [
  { x0: -60, x1: 60, z0: -60, z1: 60, n: 4, sp: 9 },
  { x0: -120, x1: 120, z0: -120, z1: 120, n: 5, sp: 12 },
];
// position + velocity of traffic car k on loop L at time t
export function trafficPos(L, k, t) {
  const lane = 3.25, x0 = L.x0 + lane, x1 = L.x1 - lane, z0 = L.z0 + lane, z1 = L.z1 - lane, w = x1 - x0, h = z1 - z0, per = 2 * (w + h);
  let s = (((t * L.sp + k * per / L.n) % per) + per) % per, x, z, yaw;
  // anti-clockwise: west along the north edge, south along the west edge, east along the south edge, north along the east edge
  if (s < w) { x = x1 - s; z = z0; yaw = -Math.PI / 2; } else if ((s -= w) < h) { x = x0; z = z0 + s; yaw = 0; } else if ((s -= h) < w) { x = x0 + s; z = z1; yaw = Math.PI / 2; } else { s -= w; x = x1; z = z1 - s; yaw = Math.PI; }
  return { x, z, yaw, vx: Math.sin(yaw) * L.sp, vz: Math.cos(yaw) * L.sp };
}
