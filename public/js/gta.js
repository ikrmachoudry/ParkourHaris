// HARIS CITY (GTA-style open world): the pure layout - terrain height function, road network, buildings. No three.js here,
// so tests (and later the server) can use it too.  World: x east, z south, y up.  Sea level is y = -1.2.
import { PORT, portFlat, portRoadD } from './port.js';
export const GT = {
  HALF: 540,                       // the terrain covers -540..540 in x and z
  CITY: 240,                       // the avenues run from -240 to 240 (8 x 8 blocks)
  RING: 280,                       // the ring highway round the city (a rounded square, half-size 280)
  SEA: -1.2,
  GRID: [-240, -180, -120, -60, 0, 60, 120, 180, 240],   // avenues (the same numbers for x and z)
  HW: 6.5,                         // road half width
  MT: { cx: -375, cz: -375, R: 105, H: 56, Rt: 20, T: 2.6, th0: Math.PI / 4 },   // Mount Haris with a spiral road to the summit
  HWY: { ax: 240, bx: 460, z: 0 },                                                   // the coast highway to the lookout
};
const sm = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const mix = (a, b, t) => a + (b - a) * t;
const TAU = Math.PI * 2;
export const HILLS = [[370, -370, 70, 21], [395, 365, 62, 14], [-365, 375, 66, 16], [40, -460, 60, 11], [-40, 460, 55, 9], [-430, 20, 55, 14], [430, -230, 55, 12], [-30, 400, 50, 8]];
const noise = (x, z) => (Math.sin(x * 0.043 + 1.3) * Math.cos(z * 0.051 + 0.4) * 0.6 + Math.sin((x + z) * 0.09 + 2.0) * 0.3 + Math.sin(x * 0.17) * Math.sin(z * 0.15) * 0.1);

export const mtC = (r) => { const M = GT.MT; return r >= M.R ? 0 : M.H * Math.pow(1 - Math.max(r, M.Rt) / M.R, 1.25); };
export const mtRoad = (u) => { const M = GT.MT, r = M.R + (M.Rt - M.R) * u, th = M.th0 + u * M.T * TAU; return { x: M.cx + r * Math.cos(th), z: M.cz + r * Math.sin(th), r, y: mtC(r) }; };

// SNIPE THE TRUCK: a new road runs south from the city (the x = 60 avenue) straight through a ridge by a concrete TUNNEL. A bypass loops round the east end of the ridge to the far mouth
// (the blockers use it) and a hill road climbs to the sniper pad on the hill north-east of the tunnel (clear view of the road before the tunnel).
// where the sniper's car waits: far out in open country, a long cross-country drive (through boulders and trees) to the foot of the hill road at (150, 326)
export const SNIPE_ACCESS = [[326, 196], [308, 222], [290, 244], [274, 262]];   // the flat road the sniper's car stands on: out in the open country, it runs south-west to the foot of the hill
export const SNIPE_START = { x: 326, z: 196, yaw: Math.atan2(308 - 326, 222 - 196) };
// the hill road: ONE smooth S-bend (west, then south, then west again) from the foot of the hill straight to the pad - no hairpin, no doubling back. It climbs ~18 m over ~130 m (a ~14 % grade), so a weak car
// really struggles. Catmull-Rom through the control points, a point every ~10 m; [x, z, road height]
function snipeHillRoad() {
  const C = [[274, 262], [254, 264], [236, 274], [223, 292], [216, 310], [205, 326], [190, 334], [180, 334]], pts = [];
  const cr = (a, b, c, d, t) => 0.5 * (2 * b + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (-a + 3 * b - 3 * c + d) * t * t * t);
  for (let i = 0; i + 1 < C.length; i++) { const p0 = C[Math.max(0, i - 1)], p1 = C[i], p2 = C[i + 1], p3 = C[Math.min(C.length - 1, i + 2)], n = Math.max(2, Math.round(Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) / 10)); for (let k = 0; k < n; k++) { const t = k / n; pts.push([cr(p0[0], p1[0], p2[0], p3[0], t), cr(p0[1], p1[1], p2[1], p3[1], t)]); } }
  pts.push([C[C.length - 1][0], C[C.length - 1][1]]);
  const cum = [0]; for (let i = 1; i < pts.length; i++) cum.push(cum[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
  const L = cum[cum.length - 1];
  return pts.map((q, i) => { const t = cum[i] / L, e = 0.65 * t + 0.35 * t * t * (3 - 2 * t), d = Math.hypot(q[0] - 180, q[1] - 334), u = Math.max(0, Math.min(1, (d - 9) / 16)), w = 1 - u * u * (3 - 2 * u); /* the pad's own mound (radius ~25) is already this high: meet it */ return [Math.round(q[0] * 10) / 10, Math.round(q[1] * 10) / 10, Math.round(18 * (e * (1 - w) + w) * 100) / 100]; });
}
export const SNIPE = {
  road: [[60, 240], [60, 482]],                                            // the new road through the tunnel (x = 60, driving south)
  tun: { x: 60, z0: 414, z1: 452, half: 8, h: 6.8 },                       // the tunnel (inner half width, inner height)
  ridge: { z: 433, sz: 31, x0: -70, x1: 130, h: 22 },                      // the ridge the tunnel goes through
  bypass: [[120, 240], [150, 282], [150, 468], [60, 468]],                 // from the city (the x = 120 avenue) round the east end of the ridge to the far mouth
  hill: snipeHillRoad(),                                                   // [x, z, road height]: the sniper's road (one smooth S-bend up to the pad)
  stand: { x: 172.4, z: 334, r: 1.6 },                                   // the small blue circle on the side of the hilltop: where the sniper stands
  pad: { x: 180, z: 334, y: 18, r: 9 },                                    // the circled sniping area
  bail: { z: 250 },                                                        // the red line: the truck driver pulls out here
  lane: 63.25,                                                             // the south-bound lane of the new road (left-hand traffic)
};
function nearPoly(x, z, pts) {   // distance to a polyline and the road height there (pts: [x, z] or [x, z, y])
  let best = 1e9, by = 0;
  for (let i = 0; i + 1 < pts.length; i++) {
    const a = pts[i], b = pts[i + 1], dx = b[0] - a[0], dz = b[1] - a[1], L2 = dx * dx + dz * dz || 1, t = Math.max(0, Math.min(1, ((x - a[0]) * dx + (z - a[1]) * dz) / L2));
    const d = Math.hypot(x - a[0] - dx * t, z - a[1] - dz * t); if (d < best) { best = d; by = (a[2] || 0) + ((b[2] || 0) - (a[2] || 0)) * t; }
  }
  return { d: best, y: by };
}
// true where nothing may grow or be built: round the Snipe roads, the pad and the sniper's view of the road before the tunnel
export function snipeClear(x, z) {
  const S = SNIPE; if (x > 120 && nearPoly(x, z, SNIPE_ACCESS).d < GT.HW + 9) return true;
  if (z < 280 || x < 20 || x > 300) return false;
  if (x > 40 && x < 165 && z > 290 && z < 418) return true;
  const hw = GT.HW + 6; return nearPoly(x, z, S.road).d < hw + 4 || nearPoly(x, z, S.bypass).d < hw || nearPoly(x, z, S.hill).d < hw || Math.hypot(x - S.pad.x, z - S.pad.z) < S.pad.r + 12;
}
// terrain height everywhere (flat 0 in the city, hills outside, a mountain with a carved road, a beach and the sea)
export function gtaBase(x, z) {
  const M = GT.MT, dx = x - M.cx, dz = z - M.cz, r = Math.hypot(dx, dz), box = Math.max(Math.abs(x), Math.abs(z));
  const mt = sm(M.R + 25, M.R + 5, r), m = sm(300, 365, box), coast = 6.2 * sm(460, 555, box);
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
  if (r < M.Rt) h = mix(h, mtC(M.Rt), 1 - sm(M.Rt - 5, M.Rt, r));   // the summit is a flat meadow (radius 15), blending into the slope by r = 20 (where the road ends)
  { // coast highway + lookout plaza are flat
    const H = GT.HWY, dz2 = Math.abs(z - H.z), ex = x < H.ax ? H.ax - x : x > H.bx ? x - H.bx : 0, d = Math.hypot(dz2, ex);
    if (x > H.ax - 10 && d < 26) h = mix(h, 0, 1 - sm(GT.HW + 2.5, GT.HW + 16, d));
    const dl = Math.hypot(x - H.bx, z - H.z); if (dl < 34) h = mix(h, 0, 1 - sm(15, 30, dl));
  }
  { // the Stunt Park is one big flat pad (the hills and the noise are levelled out, blending back into the land over ~14 m)
    const P = PARK, dx = Math.max(P.x0 - x, 0, x - P.x1), dz = Math.max(P.z0 - z, 0, z - P.z1), d = Math.hypot(dx, dz);
    if (d < 22) h = mix(h, 0, 1 - sm(8, 22, d));
  }
  { // Haris Port: the yard is levelled flat and a road bed runs down to it from the ring highway
    const f = portFlat(x, z); if (f > 0) h = mix(h, 0, f);
    if (z > 235 && z < 500) h = mix(h, 0, 1 - sm(GT.HW + 3, GT.HW + 15, portRoadD(x, z)));
  }
  { // Snipe the Truck: the ridge, the tunnel cutting, the bypass and the sniper hill road (all flat across the road, blending into the land)
    const S = SNIPE, R = S.ridge;
    if (z > 225 && z < 500 && x > -90 && x < 300) {
      const rz = (z - R.z) / R.sz; h += R.h * Math.exp(-rz * rz) * sm(R.x0 - 25, R.x0 + 35, x) * (1 - sm(R.x1 - 35, R.x1 + 25, x)) * sm(300, 330, box);
      const a = nearPoly(x, z, S.road); if (z > 290) h = mix(h, 0, 1 - sm(GT.HW + 3, GT.HW + 15, a.d));
      const b = nearPoly(x, z, S.bypass); h = mix(h, 0, 1 - sm(GT.HW + 3, GT.HW + 12, b.d));
      const ac = nearPoly(x, z, SNIPE_ACCESS); h = mix(h, 0, 1 - sm(GT.HW + 3, GT.HW + 12, ac.d));
      const c = nearPoly(x, z, S.hill); h = mix(h, c.y, 1 - sm(GT.HW + 2.5, GT.HW + 11, c.d));
      const P = S.pad, dp = Math.hypot(x - P.x, z - P.z); if (dp < P.r + 16) h = mix(h, P.y, 1 - sm(P.r, P.r + 16, dp));
    }
  }
  return h;
}

// STUNT RAMPS: wedges that start at (x,z) and rise in direction yaw (forward = sin yaw, cos yaw). They are part of the ground height,
// so people walk up them and cars fly off them. [x, z, yaw, length, height, width]
const HP = Math.PI / 2;
// MISSIONS: the Mission Lobby building (walk onto the pad inside) and the STUNT JUMP course on the coast highway: 4 white super cars wait on the start
// line, two ramps follow, and the finish line is near the lookout.  Ramps are part of the ground height, so cars fly off them.
export const LOBBY = { x: 90, z: -20, w: 16, d: 11, pad: { x: 90, z: -21 }, color: '#a855f7' };   // door faces +z (the south avenue); the pad is the ring inside
export const STUNT = { name: 'STUNT JUMP', startX: 272, lanes: [-4.5, -1.5, 1.5, 4.5], yaw: HP0(), ramps: [[310, 0, HP0(), 20, 3.6, 12], [392, 0, HP0(), 20, 3.6, 12]], finishX: 452, minSpeed: 24, minAir: 0.55, timeLimit: 55 };
// MISSION 2 - THIEF CHASE: the CITY BANK (south side of the z = 60 avenue, door faces north) and the POLICE STATION (north side of the z = -60 avenue, door faces south).
// Both are just buildings (nobody can go in). Two 4-door police cars wait in front of the station; for the mission they are moved to the bank.
export const BANK = { x: 30, z: 95, w: 34, d: 20, h: 15 };
export const POLICE = { x: 30, z: -100, w: 34, d: 16, h: 12, zone: { x: 30, z: -76, r: 9 } };
// THE WEAPON STORE (block -30,-90; walk in through the door on the south side and step on the red pad at the counter) and INTELLIMUM AUTOS (block 90,30: a showroom and an open lot;
// drive a stolen car onto the ring and stop to sell it).
export const ARMS = { x: -30, z: -98, w: 16, d: 11, pad: { x: -30, z: -100.4 }, color: '#e63946' };
export const AUTOS = { x: 90, z: 30, showroom: { x: 90, z: 14, w: 34, d: 12, h: 7 }, zone: { x: 90, z: 40, r: 5.6 }, color: '#22d3ee' };
export const CHASE = {
  name: 'THIEF CHASE',
  cops: [{ x: 20, z: 74, yaw: 0 }, { x: 40, z: 74, yaw: 0 }],                      // the police cars at the bank (nose to the door)
  copsHome: [{ x: 21, z: -80, yaw: Math.PI }, { x: 39, z: -80, yaw: Math.PI }],      // ... and at the station
  copIdx: [24, 25],
  thiefCar: { x: 30, z: 63.25, yaw: -Math.PI / 2 },                                // parked at the kerb, nose west (left-hand traffic: south lane)
  walk: [[30, 85.6], [30, 71], [34.6, 67], [34.6, 63.2], [30.2, 61.1]],            // the thief runs out of the bank, round the back of his car to the driver's door
  corners: [[30, 63.25], [-220, 63.25], [-243.25, 40], [-243.25, -220], [-246, -242], [-300.8, -300.8]],   // the road to the mountain (west along z = 60, north along the west avenue x = -240, the link road)
  stopAt: [-243.25, -40],                                                          // where he stops for the boot scene
  stopA: 330,                                                                      // arc length (m) of the first stop (set by buildRoute: the trunk stop on the west avenue)
  flee: { x: -375, z: -375, r: 13 },                                               // the summit plaza
};
// the grassy summit of Mount Haris: big old trees and boulders to hide behind (the thief's ambush) - everybody hides behind the same ones.
// r = how far from the middle of the cover a person has to stand to be behind it; kind: 'tree' | 'rock'. They sit on the flat meadow (radius 16) away from where the road arrives.
export const SUMMIT = (() => {
  const M = GT.MT, arr = M.th0 + M.T * TAU, covers = [];
  [[70, 12, 'tree'], [105, 9.5, 'rock'], [140, 13.5, 'tree'], [180, 11, 'rock'], [220, 13.5, 'tree'], [255, 9.5, 'rock'], [292, 12, 'tree'], [330, 13.5, 'rock'], [20, 13.5, 'tree']].forEach(([deg, rad, kind]) => {
    const a = arr + deg * Math.PI / 180; covers.push({ x: M.cx + Math.cos(a) * rad, z: M.cz + Math.sin(a) * rad, r: kind === 'tree' ? 0.95 : 1.7, kind });
  });
  return { x: M.cx, z: M.cz, covers };
})();
function HP0() { return Math.PI / 2; }
// THE STUNT PARK: a flat arena south-east of the Mission Lobby with a fast oval circuit (two straights joined by two wide turns).
//   top straight (east-bound, z = zT): speed booster, then a ramp.  bottom straight (west-bound, z = zB): speed booster, a lit TUNNEL, then a low kicker.
//   The 4 white super cars (the mission cars) wait in the infield whenever no mission is running.
export const PARK = {
  x0: 305, x1: 455, z0: 52, z1: 128,                         // the flat pad
  cxW: 338, cxE: 422, cz: 92, R: 20, hw: 10.5, zT: 72, zB: 112,   // oval: end centres, turn radius (centre line), road half-width, the two straights
  ramps: [[360, 72, HP0(), 20, 3.1, 14], [374, 112, -HP0(), 18, 2.0, 14]],
  boosts: [{ x: 348, z: 72, rx: 7, rz: 7, dir: 1 }, { x: 418, z: 112, rx: 7, rz: 7, dir: -1 }],
  tunnel: { x0: 382, x1: 408, z: 112, half: 9, h: 6.5 },
  spawn: { x: 360, z: 86.6, step: 3.2, yaw: HP0() },
  gate: { x: 334, z: 72 },
  walls: [[303, 49, 459, 51], [303, 131, 459, 133], [457, 49, 459, 133], [301, 69, 303, 133]],   // crash barriers round the pad (x0, z0, x1, z1): a car can never end up in the sea; the west side is open where the road comes in
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

// THE RING HIGHWAY: a rounded square round the whole city (a wide 4-lane road, flat ground), joined to the city and to the coast highway
export const RING_HW = 8;
export function ringPath() {
  const R = GT.RING, rc = 70, c = R - rc, pts = [];
  // clockwise seen from above (x east, z south), starting on the east side going south: corner centres (+-c, +-c)
  for (const [cx, cz, a0] of [[c, -c, -Math.PI / 2], [c, c, 0], [-c, c, Math.PI / 2], [-c, -c, Math.PI]]) for (let i = 0; i <= 14; i++) { const a = a0 + i / 14 * Math.PI / 2; pts.push([cx + rc * Math.cos(a), cz + rc * Math.sin(a)]); }
  return pts;
}
// the drivable road network (segments follow the ground height; cars use y0 / y1 as the road surface)
export function gtaRoads() {
  const segs = [], plazas = [], G = GT.GRID, hw = GT.HW;
  const C = GT.CITY;
  for (const g of G) { segs.push({ ax: g, az: -C, bx: g, bz: C, hw, y0: 0, g: 'x' + g }); segs.push({ ax: -C, az: g, bx: C, bz: g, hw, y0: 0, g: 'z' + g }); }
  { const l = mtRoad(0); segs.push({ ax: -C, az: -C, bx: l.x, bz: l.z, hw, y0: 0, g: 'link' }); }   // from the north-west corner of the city to the foot of Mount Haris
  { const R = ringPath(); for (let i = 0; i < R.length; i++) { const a = R[i], b = R[(i + 1) % R.length]; segs.push({ ax: a[0], az: a[1], bx: b[0], bz: b[1], hw: RING_HW, y0: 0, g: 'ring' }); } }   // the ring highway
  // the mountain road: short pieces so a car follows the slope
  const M = GT.MT, len = (M.R + M.Rt) / 2 * M.T * TAU, N = Math.ceil(len / 7);
  for (let i = 0; i < N; i++) { const a = mtRoad(i / N), b = mtRoad((i + 1) / N); segs.push({ ax: a.x, az: a.z, bx: b.x, bz: b.z, hw, y0: a.y, y1: b.y, g: 'mt' }); }
  plazas.push({ x: M.cx, z: M.cz, r: 20, y: mtC(M.Rt), g: 'summit' });
  segs.push({ ax: GT.HWY.ax, az: 0, bx: GT.HWY.bx, bz: 0, hw, y0: 0, g: 'hwy' });
  plazas.push({ x: GT.HWY.bx, z: 0, r: 14, y: 0, g: 'lookout' });
  { // the Stunt Park: the oval circuit and the road that joins it to the city (the east end of the z = 60 avenue)
    const pts = parkPath(); for (let i = 0; i < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; segs.push({ ax: a[0], az: a[1], bx: b[0], bz: b[1], hw: PARK.hw, y0: 0, g: 'stunt' }); }
    segs.push({ ax: 240, az: 60, bx: 318, bz: 60, hw, y0: 0, g: 'stunt-link' }); segs.push({ ax: 318, az: 60, bx: PARK.cxW, bz: PARK.zT - 1, hw, y0: 0, g: 'stunt-link' });
  }
  { // Snipe the Truck: the tunnel road, the bypass round the ridge and the sniper's hill road
    const S = SNIPE;
    for (let i = 0; i + 1 < S.road.length; i++) segs.push({ ax: S.road[i][0], az: S.road[i][1], bx: S.road[i + 1][0], bz: S.road[i + 1][1], hw, y0: 0, g: 'snipe-tun' });
    for (let i = 0; i + 1 < S.bypass.length; i++) segs.push({ ax: S.bypass[i][0], az: S.bypass[i][1], bx: S.bypass[i + 1][0], bz: S.bypass[i + 1][1], hw, y0: 0, g: 'snipe-by' });
    for (let i = 0; i + 1 < SNIPE_ACCESS.length; i++) segs.push({ ax: SNIPE_ACCESS[i][0], az: SNIPE_ACCESS[i][1], bx: SNIPE_ACCESS[i + 1][0], bz: SNIPE_ACCESS[i + 1][1], hw, y0: 0, g: 'snipe-acc' });
    for (let i = 0; i + 1 < S.hill.length; i++) segs.push({ ax: S.hill[i][0], az: S.hill[i][1], bx: S.hill[i + 1][0], bz: S.hill[i + 1][1], hw, y0: S.hill[i][2], y1: S.hill[i + 1][2], g: 'snipe-hill' });
    plazas.push({ x: S.pad.x, z: S.pad.z, r: S.pad.r + 1, y: S.pad.y, g: 'snipe-pad' });
  }
  segs.push({ ax: PORT.road[0][0], az: PORT.road[0][1], bx: PORT.road[1][0], bz: PORT.road[1][1], hw, y0: 0, g: 'port-road' });   // down to Haris Port
  return { segs, plazas, boosts: PARK.boosts.map((b) => ({ ...b })) };
}

// buildings (deterministic): {x,z,w,d,h,col,kind}.  16 blocks between the avenues, two of them are parks.
function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
// THE BLOCKS: the city is 8 x 8 blocks, each 47 m square, centred on BLK x BLK.  Every block is a SLOT: it gets random buildings unless it is listed here.
//   PARKS = green blocks with a fountain; CUSTOM_BLOCKS = blocks that are built by hand (landmarks).  To put an AIRPORT, a HOSPITAL ... on the map, pick a block, add it to
//   CUSTOM_BLOCKS (the random buildings disappear) and build the landmark on it in gtaworld.js (see the repair shop / the bank for an example).
export const BLK = [-210, -150, -90, -30, 30, 90, 150, 210];
export const PARKS = [[90, 90], [-90, 30], [-150, -150], [150, 150], [-210, 30], [210, -90], [150, -210]];
export const CUSTOM_BLOCKS = [[-30, 30], [-90, -90], [90, -30], [30, 90], [30, -90], [-30, -90], [90, 30]];   // repair shop, the four homes, mission lobby, bank, police station
// LANDMARKS: the auto repair shop (drive into the bay under the canopy) and a house for each player (Haris, Hannan, Hanbal, Dawood).
// Houses face the avenue: yaw = direction of the front door (forward = sin yaw, cos yaw).
export const REPAIR = { x: -30, z: 13, r: 4.6, shop: { x: -30, z: 45, w: 34, d: 14, h: 7.5 } };
export const HOMES = [
  { char: 0, name: 'Haris', x: -100, z: -100, yaw: Math.PI, color: '#ff5f5f' },
  { char: 1, name: 'Hannan', x: -80, z: -100, yaw: Math.PI, color: '#3ddc84' },
  { char: 2, name: 'Hanbal', x: -100, z: -80, yaw: 0, color: '#ffc233' },
  { char: 3, name: 'Dawood', x: -80, z: -80, yaw: 0, color: '#8b6cff' },
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
export function gtaBuildings() {
  const R = rng(4242), out = [], pal = ['#e8c9a0', '#cfd8e3', '#e89c8a', '#a8c5e8', '#f1e0a6', '#b9d9b0', '#d9b8e0', '#f0b27a', '#9fb4c8'];
  const block = (bx, bz, zone) => { for (const [ox, oz] of [[-11.5, -11.5], [11.5, -11.5], [-11.5, 11.5], [11.5, 11.5]]) {
    const w = 12 + R() * 7, d = 12 + R() * 7, h = zone === 0 ? 38 + R() * 42 : zone === 1 ? 16 + R() * 26 : 8 + R() * 14;
    out.push({ x: bx + ox + (R() - 0.5) * 1.5, z: bz + oz + (R() - 0.5) * 1.5, w, d, h, col: pal[Math.floor(R() * pal.length)], zone });
  } };
  for (const bx of [-90, -30, 30, 90]) for (const bz of [-90, -30, 30, 90]) {   // the original centre (these numbers never change, so the old city stays exactly as it was)
    if (PARKS.some((p) => p[0] === bx && p[1] === bz)) continue;
    const dist = Math.max(Math.abs(bx), Math.abs(bz)); block(bx, bz, dist <= 30 ? 0 : dist <= 60 ? 1 : 2);
  }
  const t = out.find((b) => b.x > 30 && b.x < 45 && b.z > 30 && b.z < 45); if (t) { t.h = 118; t.w = 17; t.d = 17; t.col = '#7fb6e6'; t.tower = true; }
  for (const bx of BLK) for (const bz of BLK) {   // the new outer blocks: mid-rise in the first ring, low-rise suburbs outside
    if (Math.max(Math.abs(bx), Math.abs(bz)) <= 90 || PARKS.some((p) => p[0] === bx && p[1] === bz)) continue;
    block(bx, bz, Math.max(Math.abs(bx), Math.abs(bz)) <= 150 ? 1 : 2);
  }
  const res = out.filter((b) => !CUSTOM_BLOCKS.some(([cx, cz]) => Math.abs(b.x - cx) < 24 && Math.abs(b.z - cz) < 24));   // the hand-built blocks are built separately
  // CLIMBABLE buildings: some low / mid-rise ones get a new look (brick, parapet, rooftop gear) and an iron fire-escape stair up the street side to a roof people can walk on.
  // (no random numbers here: the old city stays exactly as it was.) Only buildings with >= 4.8 m of free kerb on their street side qualify.
  const nearB = (v) => BLK.reduce((a, c) => (Math.abs(c - v) < Math.abs(a - v) ? c : a)), BRICK = ['#b5654a', '#c98b5e', '#a8573f', '#c2b59b', '#8f6b55', '#d1a37a']; let k = 0;
  for (const b of res) {
    if (b.zone === 0 || b.h < 9 || b.h > 24) continue; const bx = nearB(b.x), sx = Math.sign(b.x - bx) || 1, face = b.x + sx * b.w / 2, slack = 23.5 - sx * (face - bx); if (slack < 4.8) continue;
    if (k++ % 3 !== 0) continue; b.climb = sx; b.col = BRICK[Math.floor(k / 3) % BRICK.length];
  }
  return res;
}
// the fire-escape of a climbable building (b.climb = +1 east face / -1 west face): flights run along z (ramps), landings are slabs; a switchback up to the roof (top = b.h + 0.5, the roof slab)
export function stairPlan(b) {
  if (!b.climb) return null; const sx = b.climb, wall = b.x + sx * b.w / 2, H = b.h + 0.5, n = Math.ceil(H / 3.2), r = H / n, LF = 6, LD = 1.6, zlo = b.z - LF / 2;
  const lane = (o0, o1) => [Math.min(wall + sx * o0, wall + sx * o1), Math.max(wall + sx * o0, wall + sx * o1)], A = lane(0.75, 2.05), Bn = lane(2.2, 3.5), full = lane(0, 3.5), flights = [], landings = [];
  for (let i = 0; i < n; i++) {
    const up = i % 2 === 0, ln = up ? A : Bn;   // even flights run +z in the wall lane, odd flights come back -z in the outer lane
    flights.push({ x0: ln[0], x1: ln[1], zS: up ? zlo : zlo + LF, zE: up ? zlo + LF : zlo, yS: i * r, yE: (i + 1) * r, i });
    landings.push(up ? { x0: full[0], x1: full[1], z0: zlo + LF, z1: zlo + LF + LD, top: (i + 1) * r } : { x0: full[0], x1: full[1], z0: zlo - LD, z1: zlo, top: (i + 1) * r });
  }
  return { sx, wall, H, n, r, LF, LD, zlo, flights, landings, full };
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
    ...CHASE.copsHome.map((q) => ({ id: 15, ...q })),
    ...[88.2, 91.6].map((z) => ({ id: 25, x: PARK.spawn.x - 13, z, yaw: PARK.spawn.yaw })),   // two purple 155 km/h racing cars in the Stunt Park infield
    (() => { const h = HOMES[1], p = homeW(h, 1.8, 6.6); return { id: 24, x: p.x, z: p.z, yaw: h.yaw }; })(),   // the yellow 144 km/h coupe in Hannan's front yard
    (() => { const h = HOMES[0], p = homeW(h, 0.9, 8.0); return { id: 27, x: p.x, z: p.z, yaw: h.yaw + Math.PI / 2 }; })(),   // Haris's cargo truck (105 km/h), parked along the avenue side of the yard; 32 vehicles now = every slot of the 5-bit net vehicle id (indices 0..31) is used
    (() => { const h = HOMES[2], p = homeW(h, 2.2, 7.6); return { id: 26, x: p.x, z: p.z, yaw: h.yaw }; })(),   // Hanbal's tractor (21 km/h)
    (() => { const h = HOMES[3], p = homeW(h, 1.8, 6.6); return { id: 23, x: p.x, z: p.z, yaw: h.yaw }; })(),
    ...[89, 98].map((z) => ({ id: 28, x: PARK.cxW + 62, z, yaw: Math.PI / 2 })),
    { id: 29, x: PARK.spawn.x - 13, z: 95, yaw: PARK.spawn.yaw },
    ...PORT.berths.map((b) => ({ id: b.hull === 'speedboat' ? 30 : b.hull === 'fishboat' ? 31 : 32, x: b.x, z: b.z, yaw: b.yaw, y: GT.SEA + (b.hull === 'speedboat' ? 0.12 : b.hull === 'fishboat' ? 0.2 : 0.25) }))];   // the three boats moored at Haris Port (water world)   // the red racing car (190 km/h) right beside the two purple racers in the infield; two 165 km/h buses parked in the Stunt Park infield   // Dawood's auto rickshaw (62 km/h), last in the list so the other net indices stay put   // 12..15 = the four white mission cars (they wait in the Stunt Park)
}
// traffic: two nested rings of cars (no lane is shared, so cars never run into each other). Pakistan drives on the LEFT:
// the cars go anti-clockwise seen from above, hugging the inside lane of each ring.
export const TRAFFIC = [
  { x0: -60, x1: 60, z0: -60, z1: 60, n: 4, sp: 9 },
  { x0: -120, x1: 120, z0: -120, z1: 120, n: 5, sp: 12 },
  { x0: -180, x1: 180, z0: -180, z1: 180, n: 7, sp: 14 },
  { x0: -240, x1: 240, z0: -240, z1: 240, n: 9, sp: 16 },
];
// position + velocity of traffic car k on loop L at time t
export function trafficPos(L, k, t) {
  const lane = 3.25, x0 = L.x0 + lane, x1 = L.x1 - lane, z0 = L.z0 + lane, z1 = L.z1 - lane, w = x1 - x0, h = z1 - z0, per = 2 * (w + h);
  let s = (((t * L.sp + k * per / L.n) % per) + per) % per, x, z, yaw;
  // anti-clockwise: west along the north edge, south along the west edge, east along the south edge, north along the east edge
  if (s < w) { x = x1 - s; z = z0; yaw = -Math.PI / 2; } else if ((s -= w) < h) { x = x0; z = z0 + s; yaw = 0; } else if ((s -= h) < w) { x = x0 + s; z = z1; yaw = Math.PI / 2; } else { s -= w; x = x1; z = z1 - s; yaw = Math.PI; }
  return { x, z, yaw, vx: Math.sin(yaw) * L.sp, vz: Math.cos(yaw) * L.sp };
}
