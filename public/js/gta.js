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
  return h;
}

// STUNT RAMPS: wedges that start at (x,z) and rise in direction yaw (forward = sin yaw, cos yaw). They are part of the ground height,
// so people walk up them and cars fly off them. [x, z, yaw, length, height, width]
const HP = Math.PI / 2;
export const RAMPS = [];   // (the city is realistic now: no stunt ramps)
export function rampH(x, z) {
  let h = 0;
  for (const [rx, rz, yaw, len, hg, w] of RAMPS) {
    const dx = x - rx, dz = z - rz;
    if (dx * dx + dz * dz > (len + w) * (len + w)) continue;
    const u = dx * Math.sin(yaw) + dz * Math.cos(yaw), v = dx * Math.cos(yaw) - dz * Math.sin(yaw);
    if (u < 0 || u > len || Math.abs(v) > w / 2) continue;
    h = Math.max(h, hg * u / len);
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
  return { segs, plazas, boosts: [] };
}

// buildings (deterministic): {x,z,w,d,h,col,kind}.  16 blocks between the avenues, two of them are parks.
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
export const PARKS = [[90, 90], [-90, 30]];
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
  return out;
}

// parked cars (8: ids repeat so there are 4 looks) and the traffic loops (visual only)
// 8 vehicles (the multiplayer car sync has 3 bits): 4 cars, 2 bikes, a SUPER BIKE (190 km/h) and a SUPER CAR (300 km/h), lined up near the spawn
export function gtaCars() {
  // 8 real cars (ids 11..18, see cityveh.js) parked nose-to-tail along the kerb near the spawn. Pakistan drives on the LEFT:
  // east-bound cars use the north (-z) lane, west-bound the south (+z) lane.
  return [[11, -30, -5.0], [12, -22, -5.0], [13, -14, -5.0], [14, 12, 5.0], [15, 21, 5.0], [16, 30, 5.0], [17, -38, 5.0], [18, 40, -5.0]].map(([id, x, z]) => ({ id, x, z, yaw: z > 0 ? -Math.PI / 2 : Math.PI / 2 }));
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
