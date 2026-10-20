// Drivable cars for the Fun Map speedway: 4 different cars (shape + colour), arcade physics, no DOM needed for physics.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { flagTexture } from './flags.js';
import { CITY_VEH, newCityState, stepCityCar } from './cityveh.js';
import { stepBoat } from './boat.js';
import { buildCityMesh, animateCityMesh } from './cityvis.js';

export const CAR_SPECS = [
  { id: 0, name: 'Sprinter', color: '#0b6b3a', max: 27, acc: 17, grip: 6.5, turn: 2.2, hw: 0.95, hl: 2.1 },
  { id: 1, name: 'Buggy',    color: '#2f7bff', max: 23, acc: 15, grip: 8.5, turn: 2.5, hw: 1.05, hl: 1.9 },
  { id: 2, name: 'Pickup',   color: '#ffb21e', max: 22, acc: 14, grip: 7.0, turn: 2.0, hw: 1.05, hl: 2.3 },
  { id: 3, name: 'Bubble',   color: '#a855f7', max: 24, acc: 16, grip: 7.5, turn: 2.4, hw: 0.95, hl: 1.8 },
  // ids 4-7: the RED RACERS (prize for clearing the Sky Speedway) - faster, much stronger engine, stickier tyres
  ...[4, 5, 6, 7].map((id) => ({ id, name: 'Racer', color: '#e0001f', max: 42, acc: 36, grip: 9.5, turn: 2.15, hw: 1.05, hl: 2.35, racer: true })),
  // city vehicles (ids 8-10)
  { id: 8, name: 'Bike', color: '#ff6b00', max: 31, acc: 22, grip: 7.5, turn: 3.0, hw: 0.5, hl: 1.1, bike: true },
  { id: 9, name: 'Super Bike', color: '#00c2ff', max: 52.8, acc: 34, grip: 9, turn: 2.7, hw: 0.5, hl: 1.15, bike: true },
  { id: 10, name: 'Super Car', color: '#ffd400', max: 83.3, acc: 46, grip: 10.5, turn: 2.0, hw: 1.05, hl: 2.35 },
];
// city vehicles (ids 11..18): real bodies / specs from cityveh.js
for (const v of CITY_VEH) CAR_SPECS[v.id] = { id: v.id, name: v.name, color: v.paint, max: v.top, acc: 0, grip: 0, turn: 0, hw: 1.0, hl: 2.3, city: true };
const CAR_R = 1.8; // collision radius between cars

export function newCar(id, x, z, yaw) {
  const c = { id, x, z, y: 0, pitch: 0, yaw, vx: 0, vz: 0, speed: 0, steer: 0, drift: 0, driver: -1, bump: 0, boost: 0, parked: true, spin: 0, crash: 0, acc: 0, vy: 0, vyg: 0, air: false };
  if (id >= 11) newCityState(c, CITY_VEH[id - 11]);
  return c;
}


// Nearest drivable feature: segments {ax,az,bx,bz,hw} and plazas {x,z,r}. d <= 0 means inside the road (with `margin` kept from the edge).
// Returns { d, px, pz, nx, nz, lim } where (px,pz) is the closest centre-line point and (nx,nz) points from it towards the car.
export function corridor(track, x, z, margin = 1.5, y) {
  let best = 1e9, bpx = x, bpz = z, blim = 1, bdist = 1, bh = 0, bgx = 0, bgz = 0;
  const lay = y !== undefined;
  for (const s of track.segs) {
    const abx = s.bx - s.ax, abz = s.bz - s.az, l2 = abx * abx + abz * abz;
    let t = l2 > 0 ? ((x - s.ax) * abx + (z - s.az) * abz) / l2 : 0; t = t < 0 ? 0 : t > 1 ? 1 : t;
    const y0 = s.y0 || 0, y1 = s.y1 === undefined ? y0 : s.y1, h = y0 + (y1 - y0) * t;
    if (lay && Math.abs(h - y) > 5) continue;      // another level of the road (ground road below / sky road above)
    const px = s.ax + abx * t, pz = s.az + abz * t, d = Math.hypot(x - px, z - pz), lim = s.hw - margin;
    if (d - lim < best) { best = d - lim; bpx = px; bpz = pz; blim = lim; bdist = d; bh = h; if (y1 !== y0 && l2 > 0) { bgx = (y1 - y0) * abx / l2; bgz = (y1 - y0) * abz / l2; } else { bgx = bgz = 0; } }
  }
  for (const p of track.plazas || []) {
    const h = p.y || 0;
    if (lay && Math.abs(h - y) > 5) continue;
    const d = Math.hypot(x - p.x, z - p.z), lim = p.r - margin;
    if (d - lim < best) { best = d - lim; bpx = p.x; bpz = p.z; blim = lim; bdist = d; bh = h; bgx = bgz = 0; }
  }
  if (best > 1e8) return { d: -1, px: x, pz: z, nx: 0, nz: 1, lim: 1, h: lay ? y : 0, gx: 0, gz: 0 };
  const nl = bdist || 1e-6;
  return { d: best, px: bpx, pz: bpz, nx: (x - bpx) / nl, nz: (z - bpz) / nl, lim: blim, h: bh, gx: bgx, gz: bgz };
}

// inp: { gas: -1..1 (+ = forward, - = brake / reverse), steer: -1..1 (+ = right), hb: handbrake }
// track: { segs, plazas, boosts:[{x,z,r}] }.  others: [{x,z}] cars to bump into.  returns an event string or ''
export function stepCar(c, dt, inp, track, others, tm = 0) {
  const spec = CAR_SPECS[c.id];
  if (spec.city && CITY_VEH[c.id - 11].boat) { c.ownd = true; return stepBoat(c, dt, inp, track, others, CITY_VEH[c.id - 11]); }
  if (spec.city) { c.ownd = true; return stepCityCar(c, dt, inp, track, others, CITY_VEH[c.id - 11], track.terrain ? (q) => corridor(track, q.x, q.z, -1.2).d <= 0 : null); }
  const fx = Math.sin(c.yaw), fz = Math.cos(c.yaw), rx = -fz, rz = fx;
  let vf = c.vx * fx + c.vz * fz, vs = c.vx * rx + c.vz * rz;
  const max = spec.max * (c.boost > 0 ? 1.3 : 1);
  if (c.boost > 0) c.boost -= dt;
  // throttle / brake
  if (inp.gas > 0.01) { vf += (vf < 0 ? 38 : spec.acc * (1 - Math.max(0, vf) / (max + 2)) + 1) * inp.gas * dt; }
  else if (inp.gas < -0.01) { vf += (vf > 0.5 ? -34 : -11) * -inp.gas * dt; }
  else vf -= Math.sign(vf) * Math.min(Math.abs(vf), 4.5 * dt);
  if (inp.hb) vf -= Math.sign(vf) * Math.min(Math.abs(vf), 9 * dt);
  // gravity on slopes: climbing a ramp slows you down, rolling down speeds you up
  { const fs = (c.gx || 0) * fx + (c.gz || 0) * fz; if (fs) vf -= 9.8 * 0.55 * (fs / Math.sqrt(1 + fs * fs)) * dt; }
  vf = Math.max(-9, Math.min(max + (c.boost > 0 ? 3 : 0), vf));
  // steering (smoothed), turn rate grows with speed then eases off
  c.steer += (inp.steer - c.steer) * Math.min(1, dt * 9);
  const aS = Math.abs(vf), turnK = Math.min(1, aS / 5) * (1 - 0.38 * Math.min(1, aS / max));
  c.yaw -= c.steer * spec.turn * turnK * Math.sign(vf || 1) * (inp.hb ? 1.35 : 1) * dt;
  // sideways grip (lower = more drift)
  const grip = (inp.hb ? 1.6 : spec.grip) * (c.slick > 0 ? 0.22 : 1);   // oil slick = very little grip
  vs *= Math.exp(-grip * dt);
  c.drift = Math.min(1, Math.abs(vs) / 5);
  const nfx = Math.sin(c.yaw), nfz = Math.cos(c.yaw), nrx = -nfz, nrz = nfx;
  c.vx = nfx * vf + nrx * vs; c.vz = nfz * vf + nrz * vs;
  // turbo strips
  for (const b of track.boosts || []) if (Math.abs(c.x - b.x) < b.r && Math.abs(c.z - b.z) < b.r && Math.abs(c.y - (b.y || 0)) < 3) { c.boost = 1.4; if (vf < max) { c.vx += nfx * 40 * dt; c.vz += nfz * 40 * dt; } }
  c.x += c.vx * dt; c.z += c.vz * dt;
  let ev = '';
  // road boundaries: the drivable area is a chain of road segments + round plazas
  if (track.terrain) ev = terrainDrive(c, dt, track, nfx, nfz, max) || ev;
  else { const q = corridor(track, c.x, c.z, 1.5, c.y);
    c.gx = q.gx; c.gz = q.gz;
    { const py = c.y; c.y += (q.h - c.y) * Math.min(1, dt * 14); const mv = Math.hypot(c.vx, c.vz) * dt; c.pitch += ((mv > 1e-3 ? Math.atan2(c.y - py, mv) : 0) * (c.speed >= 0 ? 1 : -1) - c.pitch) * Math.min(1, dt * 10); }
    // walls: the nose and the tail are tested separately (with the car's real width), so a long car never pokes through a rail;
    // hitting a wall with one end swings the car round
    for (const a of [1.25, -1.25]) {
      const e = corridor(track, c.x + nfx * a, c.z + nfz * a, 1.6, c.y);
      if (e.d <= 0) continue;
      c.x -= e.nx * e.d; c.z -= e.nz * e.d;
      const vn = c.vx * e.nx + c.vz * e.nz;
      if (vn > 0) {
        const dvx = -(1 + 0.35) * vn * e.nx, dvz = -(1 + 0.35) * vn * e.nz;
        c.vx += dvx; c.vz += dvz; c.vx *= 0.95; c.vz *= 0.95;
        c.spin = Math.max(-3, Math.min(3, (c.spin || 0) + (nfz * a * dvx - nfx * a * dvz) * 0.1));
        if (vn > 5) ev = 'bump'; c.bump = Math.max(c.bump, vn);
      }
    } }
  // other cars: two circles per car (nose + tail) so long cars collide properly; a hit gives a bounce, a spin and a jolt
  for (const o of others || []) {
    if ((c.x - o.x) ** 2 + (c.z - o.z) ** 2 > 36 || Math.abs((o.y || 0) - c.y) > 4) continue;
    const ofx = Math.sin(o.yaw), ofz = Math.cos(o.yaw);
    let best = null;
    for (const a of [1.05, -1.05]) for (const bb of [1.05, -1.05]) {
      const ax = c.x + nfx * a, az = c.z + nfz * a, bx = o.x + ofx * bb, bz = o.z + ofz * bb;
      const dx = ax - bx, dz = az - bz, d = Math.hypot(dx, dz), pen = 2.3 - d;
      if (pen > 0 && (!best || pen > best.pen)) best = { pen, nx: d > 1e-4 ? dx / d : nfx, nz: d > 1e-4 ? dz / d : nfz, rx: ax - c.x, rz: az - c.z };
    }
    if (!best) continue;
    const heavy = o.driver === -1 || o.parked, share = heavy ? 1 : 0.6;
    c.x += best.nx * best.pen * share; c.z += best.nz * best.pen * share;
    const vrel = (c.vx - o.vx) * best.nx + (c.vz - o.vz) * best.nz;
    if (vrel < 0) {
      const k = (1 + 0.55) * -vrel * (heavy ? 1 : 0.55), dvx = best.nx * k, dvz = best.nz * k;
      c.vx += dvx; c.vz += dvz;
      c.spin = Math.max(-3.2, Math.min(3.2, (c.spin || 0) + (best.rz * dvx - best.rx * dvz) * 0.32));   // hit off-centre -> the car swings round
      c.vx *= 0.94; c.vz *= 0.94;
      if (-vrel > 3.5) { ev = -vrel > 7 ? 'crash' : 'bump'; c.crash = Math.max(c.crash || 0, -vrel); }
    }
  }
  // sky-road obstacles: static barrels / blocks and moving sweepers + spinners (heavy: they never give way), oil slicks
  if (track.dyn && !track.free) {
    const list = track.dyn(tm);
    for (const ob of list) {
      if (Math.abs(ob.y - c.y) > 4 || (c.x - ob.x) ** 2 + (c.z - ob.z) ** 2 > 30) continue;
      let best = null;
      for (const a of [1.05, -1.05]) {
        const ax = c.x + nfx * a, az = c.z + nfz * a, dx = ax - ob.x, dz = az - ob.z, d = Math.hypot(dx, dz), pen = 1.15 + ob.r - d;
        if (pen > 0 && (!best || pen > best.pen)) best = { pen, nx: d > 1e-4 ? dx / d : nfx, nz: d > 1e-4 ? dz / d : nfz, rx: ax - c.x, rz: az - c.z };
      }
      if (!best) continue;
      c.x += best.nx * best.pen; c.z += best.nz * best.pen;
      const vrel = (c.vx - ob.vx) * best.nx + (c.vz - ob.vz) * best.nz;
      if (vrel < 0) {
        const k = (1 + 0.5) * -vrel, dvx = best.nx * k, dvz = best.nz * k;
        c.vx += dvx; c.vz += dvz;
        c.spin = Math.max(-3.4, Math.min(3.4, (c.spin || 0) + (best.rz * dvx - best.rx * dvz) * 0.4));
        c.vx *= 0.9; c.vz *= 0.9;
        if (-vrel > 3.5) { ev = -vrel > 7 ? 'crash' : 'bump'; c.crash = Math.max(c.crash || 0, -vrel); }
      }
    }
  }
  c.slick = 0;
  for (const sl of (track.free ? [] : track.slicks) || []) if (Math.abs(sl.y - c.y) < 3 && (c.x - sl.x) ** 2 + (c.z - sl.z) ** 2 < sl.r * sl.r) c.slick = 1;
  if (c.spin) { c.yaw += c.spin * dt; c.spin *= Math.exp(-3.6 * dt); if (Math.abs(c.spin) < 0.02) c.spin = 0; }
  c.speed = c.vx * nfx + c.vz * nfz;
  return ev;
}

// OPEN WORLD driving (Haris City): the ground is track.terrain(x,z); the car follows it, flies off ramps and crests, lands with a thump,
// bounces off buildings (track.boxes), the map edge and the sea.
const TD_SEA = -0.8, TD_EDGE = 538;
function terrainDrive(c, dt, track, fx, fz, max) {
  const T = track.terrain; let ev = '';
  // buildings: nose and tail circles against the boxes (only while the car is lower than the roof)
  for (const a of [1.15, -1.15]) {
    const px = c.x + fx * a, pz = c.z + fz * a;
    for (const b of track.boxes || []) {
      if (c.y > b.h - 0.4 || px < b.x0 - 1.3 || px > b.x1 + 1.3 || pz < b.z0 - 1.3 || pz > b.z1 + 1.3) continue;
      const cx = Math.max(b.x0, Math.min(b.x1, px)), cz = Math.max(b.z0, Math.min(b.z1, pz)); let dx = px - cx, dz = pz - cz, d = Math.hypot(dx, dz), nx, nz, pen;
      if (d > 1e-4) { nx = dx / d; nz = dz / d; pen = 1.15 - d; if (pen <= 0) continue; }
      else { const l = px - b.x0, r = b.x1 - px, f = pz - b.z0, k = b.z1 - pz, m = Math.min(l, r, f, k); pen = 1.15 + m; if (m === l) { nx = -1; nz = 0; } else if (m === r) { nx = 1; nz = 0; } else if (m === f) { nx = 0; nz = -1; } else { nx = 0; nz = 1; } }
      c.x += nx * pen; c.z += nz * pen;
      const vn = c.vx * nx + c.vz * nz;
      if (vn < 0) {
        c.vx -= 1.35 * vn * nx; c.vz -= 1.35 * vn * nz; c.vx *= 0.9; c.vz *= 0.9;
        c.spin = Math.max(-3, Math.min(3, (c.spin || 0) + (fz * a * nx - fx * a * nz) * -vn * 0.05));
        if (-vn > 5) { ev = -vn > 12 ? 'crash' : 'bump'; c.crash = Math.max(c.crash || 0, -vn); }
      }
    }
  }
  // the edge of the island and the sea
  const E = TD_EDGE; if (Math.abs(c.x) > E) { c.x = Math.sign(c.x) * E; c.vx *= -0.3; } if (Math.abs(c.z) > E) { c.z = Math.sign(c.z) * E; c.vz *= -0.3; }
  if (T(c.x + fx * 2.5, c.z + fz * 2.5) < TD_SEA && T(c.x, c.z) < TD_SEA + 0.6) { c.vx *= -0.35; c.vz *= -0.35; c.x += c.vx * dt * 3; c.z += c.vz * dt * 3; ev = ev || 'bump'; c.bump = 8; }
  // height: stick to the ground, but leave it over a crest / ramp lip (and fly)
  const gy = T(c.x, c.z), sp = Math.hypot(c.vx, c.vz), py = c.y;
  c.gx = (T(c.x + 1.5, c.z) - T(c.x - 1.5, c.z)) / 3; c.gz = (T(c.x, c.z + 1.5) - T(c.x, c.z - 1.5)) / 3;
  if (c.air) {
    c.vy -= 30 * dt; c.y += c.vy * dt;
    if (c.y <= gy) { const hit = -c.vy; c.y = gy; c.air = false; c.vy = 0; c.vyg = 0; if (hit > 7) { ev = hit > 14 ? 'crash' : 'bump'; c.crash = Math.max(c.crash || 0, hit); c.vx *= 0.93; c.vz *= 0.93; } }
    c.pitch += (Math.atan2(c.vy, Math.max(8, sp)) * 0.8 - c.pitch) * Math.min(1, dt * 4);
  } else {
    const rise = (gy - py) / Math.max(dt, 1e-3); c.vyg += (rise - c.vyg) * Math.min(1, dt * 18);
    if (gy < py - 0.22 - sp * 0.004) { c.air = true; c.vy = Math.max(c.vyg, 0); c.y = py; }
    else { c.y = gy; const fs = c.gx * fx + c.gz * fz; c.pitch += (Math.atan(fs) - c.pitch) * Math.min(1, dt * 12); }
  }
  c.air = c.air && c.y > gy + 1e-4;
  return ev;
}

// ------------------------------------------------------------------ visuals (client only)
const rb = (w, h, d, r = 0.12) => new RoundedBoxGeometry(w, h, d, 3, Math.min(r, w / 2 - 0.01, h / 2 - 0.01, d / 2 - 0.01));
const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: o.r ?? 0.35, metalness: o.m ?? 0.25, emissive: o.e || 0x000000, emissiveIntensity: o.ei ?? 1 });
const glass = () => new THREE.MeshStandardMaterial({ color: '#9fd8ff', roughness: 0.05, metalness: 0.4, transparent: true, opacity: 0.55 });

export function buildCarMesh(id, lo = false) {
  if (id >= 11) return buildCityMesh(id, lo);
  const spec = CAR_SPECS[id], g = new THREE.Group(), tyre = std('#1b1b22', { r: 0.8, m: 0 }), rim = std('#e8eaf2', { r: 0.25, m: 0.8 }), dark = std('#23252e', { r: 0.6 });
  const add = (geo, mat, x, y, z, rx = 0, ry = 0, rz = 0) => { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.rotation.set(rx, ry, rz); m.castShadow = true; m.receiveShadow = true; g.add(m); return m; };
  const body = id === 0 ? new THREE.MeshStandardMaterial({ map: flagTexture('pk'), roughness: 0.3, metalness: 0.15 }) : std(spec.color, { r: 0.28, m: 0.35 }), trim = std('#ffffff', { r: 0.3, m: 0.1 });
  const lamp = std('#fff6c8', { e: '#fff1a8', ei: 1.4 }), tail = std('#ff3030', { e: '#ff1a1a', ei: 1.2 });
  const wheels = [], pivots = []; let custom = false;
  let wr = 0.46, wx = 1.0, wzF = 1.35, wzB = -1.3, seat = { y: 0.55, z: -0.15 };
  if (id === 0) { // Sprinter: low sports car painted with the Pakistan flag
    wr = 0.44; wx = 1.02; wzF = 1.45; wzB = -1.35; seat = { y: 0.5, z: -0.2 };
    add(rb(1.9, 0.5, 4.3, 0.22), body, 0, 0.55, 0);
    add(rb(1.7, 0.34, 1.5, 0.2), body, 0, 0.78, 1.35, -0.12);                 // hood
    add(rb(1.7, 0.4, 1.0, 0.2), body, 0, 0.86, -1.6);                           // tail deck
    
    add(rb(1.5, 0.5, 0.12, 0.05), glass(), 0, 1.02, 0.78, -0.55);               // windscreen
    add(rb(0.12, 0.1, 1.5, 0.04), dark, 0.95, 1.16, -1.82); add(rb(0.12, 0.1, 1.5, 0.04), dark, -0.95, 1.16, -1.82);
    add(rb(2.0, 0.09, 0.45, 0.04), body, 0, 1.28, -2.0); add(rb(0.1, 0.4, 0.3, 0.03), dark, 0.7, 1.08, -1.95); add(rb(0.1, 0.4, 0.3, 0.03), dark, -0.7, 1.08, -1.95);
    add(rb(0.4, 0.2, 0.1, 0.04), lamp, 0.65, 0.68, 2.12); add(rb(0.4, 0.2, 0.1, 0.04), lamp, -0.65, 0.68, 2.12);
    add(rb(0.45, 0.14, 0.1, 0.04), tail, 0.65, 0.78, -2.17); add(rb(0.45, 0.14, 0.1, 0.04), tail, -0.65, 0.78, -2.17);
  } else if (id === 1) { // Buggy: blue off-road buggy with roll cage and big wheels
    wr = 0.62; wx = 1.18; wzF = 1.3; wzB = -1.25; seat = { y: 0.62, z: -0.1 };
    add(rb(1.7, 0.4, 3.8, 0.16), body, 0, 0.62, 0);
    add(rb(1.5, 0.3, 1.2, 0.14), body, 0, 0.9, 1.4);
    add(rb(1.3, 0.35, 0.9, 0.12), std('#ffd23f', { r: 0.4 }), 0, 0.95, -1.35);
    for (const sx of [-1, 1]) { add(new THREE.CylinderGeometry(0.06, 0.06, 1.7, 8), dark, sx * 0.78, 1.5, -0.1, 0.12, 0, 0); add(new THREE.CylinderGeometry(0.06, 0.06, 1.6, 8), dark, sx * 0.78, 1.0, 0.7, 0.9, 0, 0); add(new THREE.CylinderGeometry(0.06, 0.06, 1.7, 8), dark, sx * 0.78, 1.5, -0.1, Math.PI / 2, 0, 0); }
    add(new THREE.CylinderGeometry(0.06, 0.06, 1.6, 8), dark, 0, 2.0, -0.1, 0, 0, Math.PI / 2);
    add(new THREE.SphereGeometry(0.2, 12, 8), lamp, 0.55, 0.98, 2.0); add(new THREE.SphereGeometry(0.2, 12, 8), lamp, -0.55, 0.98, 2.0);
    add(rb(0.4, 0.12, 0.1, 0.04), tail, 0.5, 0.8, -1.95); add(rb(0.4, 0.12, 0.1, 0.04), tail, -0.5, 0.8, -1.95);
  } else if (id === 2) { // Pickup: yellow truck with cab, bed and bull bar
    wr = 0.55; wx = 1.1; wzF = 1.55; wzB = -1.5; seat = { y: 0.78, z: 0.55 };
    add(rb(2.0, 0.55, 4.7, 0.2), body, 0, 0.75, 0);
    add(rb(1.9, 0.75, 1.5, 0.18), body, 0, 1.28, 0.55);                         // cab
    add(rb(1.5, 0.45, 0.1, 0.05), glass(), 0, 1.55, 1.3, -0.35);
    add(rb(1.8, 0.1, 1.9, 0.05), dark, 0, 1.1, -1.35);                          // bed floor
    for (const sx of [-1, 1]) add(rb(0.1, 0.5, 1.9, 0.04), body, sx * 0.97, 1.35, -1.35);
    add(rb(1.8, 0.5, 0.1, 0.04), body, 0, 1.35, -2.28);
    add(rb(1.8, 0.1, 0.1, 0.04), std('#c8ccd8', { m: 0.8, r: 0.2 }), 0, 0.75, 2.4); add(rb(0.1, 0.5, 0.1, 0.03), std('#c8ccd8', { m: 0.8, r: 0.2 }), 0.6, 0.85, 2.38); add(rb(0.1, 0.5, 0.1, 0.03), std('#c8ccd8', { m: 0.8, r: 0.2 }), -0.6, 0.85, 2.38);
    add(rb(0.35, 0.22, 0.1, 0.04), lamp, 0.7, 0.98, 2.36); add(rb(0.35, 0.22, 0.1, 0.04), lamp, -0.7, 0.98, 2.36);
    add(rb(0.3, 0.2, 0.1, 0.04), tail, 0.8, 1.0, -2.36); add(rb(0.3, 0.2, 0.1, 0.04), tail, -0.8, 1.0, -2.36);
  } else if (id === 8 || id === 9) { // BIKE / SUPER BIKE: two wheels, tank, seat, handlebars; the rider sits on top
    custom = true; const sup = id === 9, pc = std(spec.color, { r: 0.2, m: 0.5 }), wr2 = sup ? 0.5 : 0.44; seat = { y: sup ? 0.92 : 0.98, z: -0.1 };
    add(rb(0.34, 0.3, 1.5, 0.1), dark, 0, 0.62, 0.0);                                  // engine block
    add(rb(sup ? 0.42 : 0.36, sup ? 0.36 : 0.34, 1.0, 0.14), pc, 0, 0.98, 0.35);         // tank / fairing
    add(rb(0.38, 0.14, 0.95, 0.06), std('#1b1b22', { r: 0.8, m: 0 }), 0, 0.88, -0.55);   // seat
    if (sup) { add(rb(0.5, 0.5, 0.5, 0.2), pc, 0, 0.95, 0.95, -0.5); add(rb(0.36, 0.28, 0.1, 0.04), glass(), 0, 1.25, 0.98, -0.8); add(rb(0.3, 0.18, 0.7, 0.08), pc, 0, 0.92, -1.05, 0.3); }
    add(rb(0.9, 0.07, 0.07, 0.03), dark, 0, sup ? 1.18 : 1.3, 0.78);                       // handlebars
    add(new THREE.SphereGeometry(0.17, 10, 8), lamp, 0, sup ? 1.0 : 1.15, 1.2);
    add(rb(0.14, 0.1, 0.08, 0.03), tail, 0, 0.95, -1.12);
    add(new THREE.CylinderGeometry(0.07, 0.09, 1.0, 8), std('#c8ccd8', { m: 0.9, r: 0.2 }), 0.26, 0.5, -0.7, Math.PI / 2, 0, 0);   // exhaust
    const wG = new THREE.CylinderGeometry(wr2, wr2, 0.24, 18), rG = new THREE.CylinderGeometry(wr2 * 0.55, wr2 * 0.55, 0.26, 10);
    for (const [z, front] of [[0.95, 1], [-0.95, 0]]) {
      const pv = new THREE.Group(); pv.position.set(0, wr2, z); g.add(pv); const spin = new THREE.Group(); pv.add(spin);
      const t = new THREE.Mesh(wG, tyre); t.rotation.z = Math.PI / 2; t.castShadow = true; spin.add(t); const r = new THREE.Mesh(rG, rim); r.rotation.z = Math.PI / 2; spin.add(r);
      wheels.push(spin); if (front) pivots.push(pv);
    }
    add(rb(0.12, 0.7, 0.12, 0.03), dark, 0, 0.75, 0.95, 0.35);                         // front fork
  } else if (id === 10) { // SUPER CAR: low yellow wedge hyper-car with black stripes, canopy, wing and purple glow
    wr = 0.5; wx = 1.1; wzF = 1.45; wzB = -1.45; seat = { y: 0.55, z: -0.1 };
    const yel = std('#ffd400', { r: 0.14, m: 0.6 }), blk = std('#15161c', { r: 0.5, m: 0.2 }), neon = std('#b14bff', { e: '#b14bff', ei: 1.6 });
    const prof = new THREE.Shape(); [[-2.45, 0.28], [-2.45, 0.78], [-1.6, 0.95], [-0.3, 1.02], [0.7, 0.9], [2.3, 0.5], [2.5, 0.38], [2.5, 0.28]].forEach(([z, y], i) => (i ? prof.lineTo(z, y) : prof.moveTo(z, y)));
    const wedge = new THREE.ExtrudeGeometry(prof, { depth: 1.75, bevelEnabled: true, bevelSize: 0.1, bevelThickness: 0.1, bevelSegments: 2, steps: 1 }); wedge.rotateY(-Math.PI / 2); wedge.translate(0.87, 0, 0);
    add(wedge, yel, 0, 0, 0);
    add(rb(1.3, 0.34, 1.5, 0.16), glass(), 0, 1.0, -0.1, -0.08);                       // canopy
    add(rb(0.5, 0.03, 3.0, 0.01), blk, 0.35, 0.99, -0.2); add(rb(0.5, 0.03, 3.0, 0.01), blk, -0.35, 0.99, -0.2);   // stripes
    add(rb(2.2, 0.08, 0.6, 0.03), blk, 0, 1.28, -2.3); for (const sx of [-1, 1]) { add(rb(0.09, 0.4, 0.09, 0.02), blk, sx * 0.7, 1.08, -2.25); add(rb(0.07, 0.4, 0.7, 0.02), yel, sx * 1.1, 1.2, -2.3); add(rb(0.42, 0.14, 0.1, 0.04), lamp, sx * 0.62, 0.62, 2.52); add(rb(0.5, 0.12, 0.1, 0.04), tail, sx * 0.62, 0.8, -2.5); add(rb(0.3, 0.2, 0.9, 0.08), yel, sx * 1.05, 0.55, 1.4); }
    add(rb(2.3, 0.08, 0.5, 0.03), blk, 0, 0.3, 2.5);
    const ug = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 4.8), new THREE.MeshBasicMaterial({ color: '#b14bff', transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false })); ug.rotation.x = -Math.PI / 2; ug.position.set(0, 0.12, 0); g.add(ug); void neon;
  } else if (id >= 4 && id < 8) { // RACER: low red drop-top sports car - wedge body (one extruded profile = very light), open cockpit, big rear wing, blue underglow, exhaust flames
    wr = 0.5; wx = 1.12; wzF = 1.5; wzB = -1.5; seat = { y: 0.62, z: -0.2 };
    const red = std('#e0001f', { r: 0.16, m: 0.55 }), blk = std('#15161c', { r: 0.5, m: 0.2 }), wht = std('#ffffff', { r: 0.25, m: 0.1 }), glow = std('#ff7a1a', { e: '#ff5a00', ei: 2 });
    // side profile (z forward, y up): low nose, long hood, open cockpit tub, high tail
    const prof = new THREE.Shape(); [[-2.4, 0.3], [-2.4, 0.84], [-1.7, 1.0], [-0.95, 0.96], [-0.8, 0.66], [0.5, 0.66], [0.72, 0.78], [2.2, 0.56], [2.46, 0.44], [2.46, 0.3]].forEach(([z, y], i) => (i ? prof.lineTo(z, y) : prof.moveTo(z, y)));
    const wedge = new THREE.ExtrudeGeometry(prof, { depth: 1.7, bevelEnabled: true, bevelSize: 0.1, bevelThickness: 0.1, bevelSegments: 2, steps: 1 });
    wedge.rotateY(-Math.PI / 2); wedge.translate(0.85, 0, 0);      // extrusion runs along x, centred
    add(wedge, red, 0, 0, 0);
    add(rb(1.2, 0.04, 1.3, 0.02), blk, 0, 0.7, -0.1);              // dark cockpit floor (the car is open on top)
    add(rb(1.0, 0.32, 0.18, 0.06), red, 0, 0.88, -1.05);            // head-rest hump behind the seat
    add(rb(1.5, 0.42, 0.08, 0.03), glass(), 0, 0.98, 0.6, -0.62);   // low windscreen
    for (const sx of [-1, 1]) {
      add(rb(0.12, 0.34, 0.1, 0.03), blk, sx * 0.76, 0.9, 0.62, -0.62);                               // windscreen posts
      add(rb(0.42, 0.34, 1.7, 0.14), red, sx * 1.03, 0.6, -1.6);                                      // wide rear haunches
      add(rb(0.3, 0.3, 0.9, 0.1), red, sx * 1.0, 0.55, 1.5);                                          // front wheel arches
      add(rb(0.1, 0.3, 0.8, 0.03), blk, sx * 0.98, 0.5, -0.35);                                       // side air intakes
      add(rb(0.07, 0.62, 0.8, 0.02), blk, sx * 1.12, 1.52, -2.28);                                    // wing end-plates
      add(rb(0.09, 0.62, 0.09, 0.02), blk, sx * 0.55, 1.2, -2.15);                                    // wing struts
    }
    add(rb(0.46, 0.03, 1.9, 0.01), wht, 0, 0.8, 1.4, 0.07);        // racing stripe on the hood
    add(rb(2.3, 0.1, 0.8, 0.03), red, 0, 1.52, -2.28);              // big rear wing
    add(rb(2.3, 0.07, 0.34, 0.02), blk, 0, 1.45, -2.0);
    add(rb(2.3, 0.08, 0.55, 0.03), blk, 0, 0.3, 2.46);              // front splitter
    add(rb(1.9, 0.12, 0.3, 0.04), blk, 0, 0.3, -2.4);               // rear diffuser
    for (const sx of [-1, 1]) { add(rb(0.42, 0.14, 0.1, 0.04), lamp, sx * 0.62, 0.62, 2.5); add(rb(0.5, 0.12, 0.1, 0.04), tail, sx * 0.6, 0.86, -2.48); add(new THREE.CylinderGeometry(0.1, 0.12, 0.3, 10), blk, sx * 0.42, 0.52, -2.5, Math.PI / 2, 0, 0); }
    // blue underglow + exhaust flames (animated in animateCar)
    const ug = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 4.6), new THREE.MeshBasicMaterial({ color: '#27b6ff', transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
    ug.rotation.x = -Math.PI / 2; ug.position.set(0, 0.12, 0); g.add(ug);
    const flames = [];
    for (const sx of [-1, 1]) for (const [rad, len, col] of [[0.17, 1.3, '#ff6a00'], [0.09, 0.8, '#ffe14a']]) { const fg = new THREE.ConeGeometry(rad, len, 8); fg.rotateX(-Math.PI / 2); fg.translate(0, 0, -len / 2); const f = new THREE.Mesh(fg, new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.9, toneMapped: false })); f.position.set(sx * 0.42, 0.52, -2.62); g.add(f); flames.push(f); }
    g.userData.flames = flames;
  } else { // Bubble: round green bug car with big headlights and a surfboard
    wr = 0.42; wx = 0.98; wzF = 1.15; wzB = -1.1; seat = { y: 0.5, z: -0.05 };
    const bub = add(new THREE.SphereGeometry(1.15, 24, 16), body, 0, 0.95, -0.05); bub.scale.set(0.9, 0.62, 1.55);
    add(rb(1.6, 0.14, 3.2, 0.06), trim, 0, 0.42, 0);
    for (const sx of [-1, 1]) { add(new THREE.SphereGeometry(0.27, 14, 10), lamp, sx * 0.62, 0.95, 1.72); add(new THREE.SphereGeometry(0.2, 12, 8), tail, sx * 0.55, 0.85, -1.78); add(new THREE.CylinderGeometry(0.09, 0.09, 0.5, 8), dark, sx * 0.42, 1.55, 1.1, 0.45, 0, 0); }
    add(rb(1.5, 0.35, 0.1, 0.04), glass(), 0, 1.22, 0.85, -0.7);
    add(rb(0.5, 0.05, 2.3, 0.02), std('#ff6bd5', { r: 0.4 }), 0.15, 1.52, -0.75, 0, 0, 0.08);   // surfboard on top
  }
  const wGeo = new THREE.CylinderGeometry(wr, wr, 0.42, 20), rGeo = new THREE.CylinderGeometry(wr * 0.56, wr * 0.56, 0.44, 12);
  if (!custom) for (const [sx, z, front] of [[1, wzF, 1], [-1, wzF, 1], [1, wzB, 0], [-1, wzB, 0]]) {
    const pv = new THREE.Group(); pv.position.set(sx * wx, wr, z); g.add(pv);
    const spin = new THREE.Group(); pv.add(spin);
    const t = new THREE.Mesh(wGeo, tyre); t.rotation.z = Math.PI / 2; t.castShadow = true; spin.add(t);
    const r = new THREE.Mesh(rGeo, rim); r.rotation.z = Math.PI / 2; spin.add(r);
    wheels.push(spin); if (front) pivots.push(pv);
  }
  // soft shadow blob
  const blob = new THREE.Mesh(new THREE.CircleGeometry(2.6, 20), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.22, depthWrite: false }));
  blob.rotation.x = -Math.PI / 2; blob.position.y = 0.04; blob.scale.set(0.9, 1.25, 1); g.add(blob);
  g.userData = { wheels, pivots, seat, spec, flames: g.userData.flames };
  return g;
}

// per-frame wheel spin / steering / body roll
export function animateCar(mesh, car, dt) {
  const u = mesh.userData;
  if (u.hero) { animateCityMesh(mesh, car, dt); return; }
  for (const w of u.wheels) w.rotation.x += (car.speed / 0.5) * dt;
  for (const p of u.pivots) p.rotation.y = -car.steer * 0.5;
  mesh.rotation.z = u.spec.bike ? THREE.MathUtils.clamp(-car.steer * Math.min(1, Math.abs(car.speed) / 14) * 0.5, -0.55, 0.55) : THREE.MathUtils.clamp(-car.steer * Math.min(1, Math.abs(car.speed) / 20) * 0.07, -0.08, 0.08);
  // suspension: the nose lifts when you floor it and dips when you brake; ramps tilt the whole car
  const acc = (car.speed - (car._ps === undefined ? car.speed : car._ps)) / Math.max(dt, 0.001); car._ps = car.speed;
  car._sq = (car._sq || 0) + (THREE.MathUtils.clamp(acc, -30, 30) * 0.0045 - (car._sq || 0)) * Math.min(1, dt * 7);
  mesh.rotation.x = -(car.pitch || 0) - car._sq;
  if (u.flames) { const k = THREE.MathUtils.clamp(0.2 + Math.max(0, car.speed) / 45 + (car.boost > 0 ? 0.9 : 0) + (car.driver !== -1 ? 0.15 : 0), 0.15, 2) * (0.85 + Math.random() * 0.3); for (const f of u.flames) { f.scale.set(1, 1, k); f.visible = car.driver !== -1 || car.boost > 0; } }
}
