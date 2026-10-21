// Haris City vehicles: real-world specs + a dynamic "bicycle model" with tyre slip, weight transfer, drag and a friction circle.
// No three.js / DOM here, so tests (and later the server) can run it.  SI units everywhere (m, kg, s, W).
// Car frame: forward = (sin yaw, cos yaw).  Increasing yaw turns LEFT.  steer input: +1 = right.
const G = 9.81;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

// ids 11..18 (the old arcade cars keep ids 0..10 for the other maps)
// kW = engine power, top = top speed (m/s): the engine fades out as it is reached, mu = tyre grip, drive = 'fwd' | 'rwd', cda = drag area (m2)
export const CITY_VEH = [
  { id: 11, name: 'Sedan', style: 'sedan', paint: '#b3262b', mass: 1380, kW: 80, top: 33.6, mu: 1.0, drive: 'fwd', cda: 0.66, cyl: 4, pitch: 1.0, hornHz: 420 },
  { id: 12, name: 'Hatchback', style: 'hatch', paint: '#2f6fb5', mass: 1080, kW: 62, top: 32.6, mu: 1.0, drive: 'fwd', cda: 0.62, cyl: 3, pitch: 1.2, hornHz: 480 },
  { id: 13, name: 'SUV', style: 'suv', paint: '#2d3b4a', mass: 2050, kW: 125, top: 33.4, mu: 0.95, drive: 'rwd', cda: 0.95, cyl: 6, pitch: 0.8, hornHz: 360 },
  { id: 14, name: 'Taxi', style: 'sedan', extra: 'taxi', paint: '#f0c400', mass: 1420, kW: 72, top: 32.8, mu: 1.0, drive: 'fwd', cda: 0.66, cyl: 4, pitch: 0.95, hornHz: 440 },
  { id: 15, name: 'Police', style: 'sedan', extra: 'police', paint: '#f2f2f2', mass: 1650, kW: 150, top: 39.5, mu: 1.05, drive: 'rwd', cda: 0.68, cyl: 8, pitch: 0.75, hornHz: 400 },
  { id: 16, name: 'Coupe', style: 'coupe', paint: '#c9a227', mass: 1500, kW: 175, top: 39.8, mu: 1.1, drive: 'rwd', cda: 0.62, cyl: 6, pitch: 0.85, hornHz: 450 },
  { id: 17, name: 'Sports', style: 'sports', paint: '#e8e8ea', mass: 1380, kW: 330, top: 47.2, mu: 1.2, drive: 'rwd', cda: 0.58, cyl: 8, pitch: 0.95, hornHz: 480 },
  { id: 18, name: 'Old Sedan', style: 'sedan', paint: '#4e6a52', mass: 1450, kW: 66, top: 31.5, mu: 0.95, drive: 'fwd', cda: 0.7, cyl: 4, pitch: 0.9, hornHz: 400 },
  { id: 19, name: 'Sport Bike', style: 'bikeS', kind: 'sport', paint: '#e11d2e', mass: 260, kW: 95, top: 38.3, mu: 1.2, drive: 'rwd', cda: 0.36, cyl: 4, pitch: 1.5, hornHz: 560, latG: 0.95, dLock: 0.42, dK: 40 },
  { id: 20, name: 'Cruiser', style: 'bikeC', kind: 'cruiser', paint: '#1f3a8a', mass: 360, kW: 58, top: 33.5, mu: 1.1, drive: 'rwd', cda: 0.5, cyl: 2, pitch: 0.75, hornHz: 480, latG: 0.95, dLock: 0.42, dK: 40 },
  { id: 21, name: 'Dirt Bike', style: 'bikeD', kind: 'dirt', paint: '#f97316', mass: 210, kW: 60, top: 38.6, mu: 1.0, drive: 'rwd', cda: 0.42, cyl: 1, pitch: 1.2, hornHz: 540, latG: 0.95, dLock: 0.42, dK: 40 },
  { id: 22, name: 'Getaway', style: 'sedan', paint: '#14151a', mass: 1450, kW: 120, top: 36, mu: 1.0, drive: 'rwd', cda: 0.66, cyl: 6, pitch: 0.85, hornHz: 400 },   // the thief's black car (scripted, nobody drives it)
  { id: 23, name: 'Auto Rickshaw', style: 'rick', model: 'rick', paint: '#1f9d55', mass: 520, kW: 9, top: 65 / 3.6, mu: 0.9, drive: 'rwd', cda: 0.95, cyl: 1, pitch: 1.7, hornHz: 640 },   // three-wheeler: reads 62 km/h flat out (top is the fade-out target, a bit above)
  { id: 24, name: 'Yellow Coupe', style: 'coupe', paint: '#facc15', mass: 1450, kW: 190, top: 40.3, mu: 1.1, drive: 'rwd', cda: 0.62, cyl: 6, pitch: 0.9, hornHz: 450 },   // reads 144 km/h flat out
  { id: 25, name: 'Purple Racer', style: 'sports', extra: 'spoiler', paint: '#7c3aed', mass: 1280, kW: 420, top: 190 / 3.6 * 1.0053, mu: 1.25, drive: 'rwd', cda: 0.56, cyl: 8, pitch: 1.0, hornHz: 480 },   // racing car with a spoiler (more drag): reads 190 km/h flat out
  { id: 26, name: 'Tractor', style: 'tractor', model: 'tractor', paint: '#c8262c', mass: 3400, kW: 55, top: 21 / 3.6 * 1.015, mu: 0.8, drive: 'rwd', cda: 2.2, cyl: 4, pitch: 0.55, hornHz: 300 },   // farm tractor: reads 21 km/h flat out
  { id: 27, name: 'Truck', style: 'truck', model: 'truck', paint: '#1f5fbf', mass: 7500, kW: 160, top: 105 / 3.6 * 1.0335, mu: 0.85, drive: 'rwd', cda: 4.6, cyl: 6, pitch: 0.5, hornHz: 240 },   // cargo truck: reads 105 km/h flat out
  { id: 28, name: 'Bus', style: 'bus', model: 'bus', paint: '#1a7f4b', mass: 11000, kW: 480, top: 165 / 3.6 * 1.031, mu: 0.85, drive: 'rwd', cda: 6.2, cyl: 6, pitch: 0.42, hornHz: 200 },   // city bus: reads 165 km/h flat out
  { id: 29, name: 'Racing Car', style: 'sports', extra: 'spoiler', paint: '#e11d2e', mass: 1250, kW: 520, top: 190 / 3.6 * 1.0053, mu: 1.35, drive: 'rwd', cda: 0.55, cyl: 8, pitch: 1.05, hornHz: 500 },
  // ---- boats for the water world (see boat.js): top = top speed in m/s (HUD km/h = top * 3.6), acc / dec = m/s2, turn = rudder yaw rate (rad/s), agil = how fast it answers, keel = sideways grip,
  // draft = how much water it needs, rideH / lift = height on the water at rest / at speed, trim = bow-up angle at speed
  { id: 30, name: 'Speedboat', style: 'speedboat', hull: 'speedboat', model: 'speedboat', boat: true, paint: '#f4f6f8', mass: 2300, kW: 600, top: 138 / 3.6, mu: 1, drive: 'rwd', cda: 1, cyl: 8, pitch: 1.1, hornHz: 520, acc: 11, dec: 15, turn: 1.15, agil: 3.2, keel: 1.5, draft: 0.5, rideH: 0.12, lift: 0.1, trim: 0.11 },
  { id: 31, name: 'Fishing Boat', style: 'fishboat', hull: 'fishboat', model: 'fishboat', boat: true, paint: '#2457a6', mass: 9000, kW: 160, top: 52 / 3.6, mu: 1, drive: 'rwd', cda: 1, cyl: 6, pitch: 0.55, hornHz: 260, acc: 2.8, dec: 5, turn: 0.52, agil: 1.7, keel: 3.0, draft: 0.9, rideH: 0.2, lift: 0, trim: 0.025 },
  { id: 32, name: 'Yacht', style: 'yacht', hull: 'yacht', model: 'yacht', boat: true, paint: '#ffffff', mass: 38000, kW: 900, top: 70 / 3.6, mu: 1, drive: 'rwd', cda: 1, cyl: 12, pitch: 0.4, hornHz: 180, acc: 3.4, dec: 6, turn: 0.4, agil: 1.3, keel: 3.6, draft: 1.2, rideH: 0.25, lift: 0.05, trim: 0.035 }   //// street racer with a big spoiler: reads 190 km/h flat out
];
export const cityVeh = (id) => CITY_VEH[id - 11];

// geometry the physics needs (metres) from the body style
export const STYLE_GEO = {
  sedan: { L: 4.6, w: 1.85, wb: 2.72 }, hatch: { L: 3.95, w: 1.74, wb: 2.4 }, suv: { L: 4.7, w: 2.0, wb: 2.84 }, coupe: { L: 4.5, w: 1.86, wb: 2.72 }, sports: { L: 4.45, w: 1.94, wb: 2.68 },
  speedboat: { L: 8.6, w: 2.5, wb: 6 }, fishboat: { L: 11.5, w: 3.6, wb: 8 }, yacht: { L: 19, w: 5.2, wb: 13 },
  rick: { L: 2.75, w: 1.3, wb: 1.9 }, tractor: { L: 3.7, w: 2.0, wb: 2.0 }, truck: { L: 7.6, w: 2.5, wb: 4.3 }, bus: { L: 11.5, w: 2.6, wb: 6.2 }, bikeS: { L: 2.05, w: 0.75, wb: 1.44 }, bikeC: { L: 2.4, w: 0.85, wb: 1.59 }, bikeD: { L: 2.1, w: 0.8, wb: 1.44 },
};

export function newCityState(c, spec) { // add the dynamic fields to a plain car state (see car.js newCar)
  const g = STYLE_GEO[spec.style];
  Object.assign(c, { yr: 0, vl: 0, ax: 0, ay: 0, rpm: 0.12, gear: 1, load: 0, skid: 0, wheelPh: 0, rollA: 0, pitchA: 0, surf: 0, shiftT: 0, brake: 0, hl: g.L / 2, hw: g.w / 2, hp: 100, dmgQ: [] });
  return c;
}

// the corridor / on-road test is supplied by the caller (car.js) so this file stays free of imports
// inp: { gas -1..1, steer -1..1, hb }   returns '', 'bump' or 'crash'
export function stepCityCar(c, dt, inp, track, others, spec, onRoad) {
  const geo = STYLE_GEO[spec.style], m = spec.mass, L = geo.wb, a = L * 0.46, b = L - a, h = 0.55, Iz = m * Math.pow(0.42 * L, 2);
  let ev = '';
  const sub = Math.max(1, Math.ceil(dt / (1 / 120))), sdt = dt / sub;
  for (let s = 0; s < sub; s++) { ev = stepOnce(c, sdt, inp, track, others, spec, geo, m, L, a, b, h, Iz, onRoad) || ev; }
  return ev;
}

function stepOnce(c, dt, inp, track, others, spec, geo, m, L, a, b, h, Iz, onRoad) {
  const fx = Math.sin(c.yaw), fz = Math.cos(c.yaw), rx = -fz, rz = fx;      // forward and right unit vectors
  // speed boosters (glowing pads): a strong push along the way the car points, up to ~15% above the car's top speed
  if (c.boost > 0) c.boost -= dt;
  if (!c.air && track.boosts) for (const bp of track.boosts) if (Math.abs(c.x - bp.x) < bp.rx && Math.abs(c.z - bp.z) < bp.rz) { const sf = c.vx * fx + c.vz * fz; if (sf > -2 && sf < (c.topCap || spec.top) * 1.15) { c.vx += fx * 46 * dt; c.vz += fz * 46 * dt; } c.boost = 0.5; break; }
  let u = c.vx * fx + c.vz * fz, vr = c.vx * rx + c.vz * rz;                 // forward / rightward speed
  const vl = -vr;                                                          // leftward (the model below is left-positive)
  const air = !!c.air;
  if ((c.wet || 0) > 0.3) inp = (c.wet > 1.6 || c.sd > 0.3) ? { gas: 0, steer: 0 } : { gas: inp.gas * 0.35, steer: inp.steer, hb: inp.hb };
  const onRd = onRoad ? onRoad(c) : true;
  const mu = spec.mu * (onRd ? 1 : 0.85) * (c.slick > 0 ? 0.3 : 1);
  // ---- driver inputs
  const gasIn = inp.gas;
  c.steer += (inp.steer - c.steer) * Math.min(1, dt * (Math.abs(inp.steer) < 0.01 ? 12 : 16));
  const au = Math.abs(u);
  const dMax = Math.min(spec.dLock || 0.6, (spec.dK || 70) / Math.max(1, au * au));                 // lock available shrinks with speed (a real car, not a go-kart)
  const delta = -c.steer * dMax;                                          // left-positive road-wheel angle
  let throttle = 0, brake = 0;
  const dead = c.hp !== undefined && c.hp <= 0;
  if (dead) { /* wrecked: engine is dead, only brakes and coasting */ if (Math.abs(gasIn) > 0.01 && Math.abs(u) > 0.8) brake = Math.abs(gasIn) * 0.5; }
  else if (gasIn > 0.01) { if (u < -0.8) brake = gasIn; else throttle = gasIn; }
  else if (gasIn < -0.01) { if (u > 0.8) brake = -gasIn; else throttle = gasIn; } // below walking pace the same key reverses
  // ---- longitudinal force
  const hp0 = c.hp === undefined ? 100 : c.hp;
  const P = spec.kW * 1300 * (c.pwr || 1) * (hp0 > 25 ? 1 : hp0 > 0 ? 0.6 : 0);   // arcade-friendly: a bit punchier than the real figure; a wrecked engine loses power, a dead one (hp 0) none
  // stability control (like a real ESC): when the rear steps out, the engine backs off and the nose is gently pulled straight, so you can always steer under power
  const slipRe = Math.atan((vl - b * c.yr) / Math.max(Math.abs(u), 0.5)), beta = vl / Math.max(Math.abs(u), 1);   // beta = how sideways the body really travels (the steady turn itself is NOT a slide)
  if (throttle > 0 && Math.abs(u) > 2 && !inp.hb) throttle *= 1 - clamp((Math.abs(slipRe) - 0.17) / 0.25, 0, 0.6);
  const slope = Math.max(-0.85, Math.min(0.85, (c.gx || 0) * fx + (c.gz || 0) * fz)), cosT = 1 / Math.sqrt(1 + slope * slope);   /* real gravity along the hill: m g sin(angle). A weak engine slows down and a very steep slope stops it (and rolls it back) */
  let Fx = 0;
  if (throttle > 0) { Fx = Math.min(P / Math.max(u, 1.4), m * G * cosT * mu * (spec.drive === 'rwd' ? (a / L + 0.1) : (b / L)) * 1.0) * throttle; Fx *= clamp(((c.topCap || spec.top) - u) / 2.2, 0, 1); }   // c.topCap: a lower limit set by the game (the mission cars: 130 km/h, 120 during the stunt run)   // speed limiter: sports ~170 km/h, coupe / police ~140, the rest ~115-120
  else if (throttle < 0) { Fx = u > -4.2 ? -Math.min(P * 0.3 / Math.max(-u, 1.2), m * 2.2) * -throttle : 0; }
  // brakes: ~0.95 g peak, the handbrake locks the rear
  const Fb = brake * m * G * mu * 0.95 + (inp.hb ? m * G * mu * 0.35 : 0);
  const Fdrag = 0.5 * 1.2 * spec.cda * u * Math.abs(u), Froll = (0.013 + (onRd ? 0 : 0.03)) * m * G * Math.sign(u || 0) * Math.min(1, Math.abs(u) / 0.5);
  const Fslope = m * G * slope * cosT;
  const Fnet = Fx - Fdrag - Froll - Fslope - Math.sign(u || 0) * Math.min(Fb, Math.abs(u) * m / dt * 0.98);
  // ---- normal loads with weight transfer (filtered longitudinal acceleration)
  const axF = c.ax;
  const Nf = clamp(m * G * b / L - m * axF * h / L, m * G * 0.15, m * G * 0.85), Nr = m * G - Nf;
  // ---- tyres (lateral): slip angles, saturating force, friction circle
  const uA = Math.max(Math.abs(u), 0.5), su = u >= 0 ? 1 : -1;   // slip angles use |u|: in reverse the tyre forces must still oppose the sliding (the old sign flip made reversing swing and drift)
  const slipF = Math.atan((vl + a * c.yr) / uA) - delta * su, slipR = Math.atan((vl - b * c.yr) / uA);
  const frontShare = spec.drive === 'fwd' ? clamp(Math.abs(Fx) / Math.max(1, mu * Nf), 0, 0.95) : 0;
  const rearShare = spec.drive === 'rwd' ? clamp(Math.abs(Fx) / Math.max(1, mu * Nr), 0, 0.95) : 0;
  const brakeShareF = clamp(brake * 0.6, 0, 0.9), brakeShareR = clamp(brake * 0.4 + (inp.hb ? 0.7 : 0), 0, 0.97);
  const fcF = Math.sqrt(Math.max(0.08, 1 - Math.max(frontShare, brakeShareF) ** 2)), fcR = Math.sqrt(Math.max(0.05, 1 - Math.max(rearShare, brakeShareR) ** 2));
  const LG = 1.45;   // arcade lateral grip: the car follows the wheel instead of skating
  const muNf = mu * LG * Nf * fcF, muNr = mu * LG * Nr * fcR * (inp.hb ? 0.5 : 1);
  const Ca = 17;                                                          // stiffness: reaches the grip limit at ~5 deg
  let Ff = -muNf * Math.tanh(Ca * slipF), Fr = -muNr * Math.tanh(Ca * slipR);
  if (air) { Ff = Fr = 0; }
  // low speed: tyres relax so the car does not wobble when crawling
  const relax = clamp(Math.abs(u) / 2.5, 0.12, 1);
  Ff *= relax; Fr *= relax;
  // ---- integrate (body frame, left-positive lateral)
  const cd = Math.cos(delta), sd = Math.sin(delta);
  const ay = (Ff * cd + Fr) / m;                                             // lateral accel in the body frame (leftward)
  const axTotal = (Fnet - Ff * sd * 0.2) / m;   // cornering drag, softened: turning must not feel like braking
  let yawAcc = (a * Ff * cd - b * Fr) / Iz;
  if (air) yawAcc = 0;
  if (!air && !inp.hb && u > 3) yawAcc -= Math.sign(c.yr) * Math.max(0, Math.abs(slipRe) - 0.12) * 5 * (Math.abs(inp.steer) > 0.05 ? 0.6 : 1.2) * (c.yr * slipRe > 0 ? 1 : 0.2);
  c.yr += yawAcc * dt; c.yr *= Math.exp(-0.5 * dt);
  // steering assist: the car turns at the rate the wheels ask for (limited by what the tyres can hold), so it answers the wheel at once on any surface
  if (!air && Math.abs(u) > 1.2) { const lim = mu * G * (spec.latG || 1.35) / Math.abs(u), yrT = clamp(u * Math.tan(delta) / L, -lim, lim); c.yr += (yrT - c.yr) * Math.min(1, dt * (onRd ? 7 : 5.5)); }                         // a hint of yaw damping from the suspension
  let du = axTotal + vl * c.yr, dvl = ay - u * c.yr;
  if (air) { du = -Fdrag / m; dvl = 0; }
  u += du * dt; const vl2 = vl + dvl * dt;
  if (Math.abs(u) < 0.15 && throttle === 0 && (brake > 0.01 || Math.abs(Fslope) < m * G * 0.06)) u = 0; // a stopped car stays stopped
  // low-speed kinematic blend: below ~2 m/s the dynamic model is replaced by a plain rolling constraint (no sliding sideways at a standstill)
  const kin = clamp(1 - Math.abs(u) / 2.5, 0, 1);
  let vlN = vl2 * (1 - kin) + 0 * kin;
  if (kin > 0 && !air) c.yr += (u * Math.tan(delta) / L - c.yr) * Math.min(1, dt * 12) * kin;
  if (!air) { vlN *= Math.exp(-((onRd ? 1.8 : 1.5) * (inp.hb ? 0.15 : 1)) * dt); } // sideways velocity bleeds off: the car grips instead of skating
  // back to world
  const nvr = -vlN;
  c.yaw += c.yr * dt;
  const nfx = Math.sin(c.yaw), nfz = Math.cos(c.yaw), nrx = -nfz, nrz = nfx;
  c.vx = nfx * u + nrx * nvr; c.vz = nfz * u + nrz * nvr;
  c.x += c.vx * dt; c.z += c.vz * dt;
  // bookkeeping for sound / visuals
  c.ax += (axTotal - c.ax) * Math.min(1, dt * 6); c.ay += (ay - c.ay) * Math.min(1, dt * 6);
  c.speed = u;
  const slipMag = Math.max(Math.abs(slipR), Math.abs(slipF) * 0.8);
  c.vl = vlN;
  c.skid += (clamp((slipMag - 0.08) / 0.15, 0, 1) * clamp(Math.abs(u) / 5, 0, 1) - c.skid) * Math.min(1, dt * 12);
  if (brake > 0.6 && Math.abs(u) > 12 && !inp.hb) c.skid = Math.max(c.skid, clamp(brake * (Math.abs(u) - 8) / 30, 0, 0.5)); // hard braking chirps
  c.drift = clamp(Math.abs(vlN) / 4, 0, 1);
  c.brake = brake; c.load = Math.max(0, throttle);
  c.wheelPh += (u / 0.34) * dt;
  // engine revs: 5 gears sized from the top speed, automatic with a short shift pause
  { const gs = [0.2, 0.36, 0.54, 0.76, 1.02].map((k) => k * spec.top), g0 = c.gear;
    const au2 = Math.abs(u); let g = c.gear;
    if (g < 5 && au2 > gs[g - 1] * 0.96) g++; else if (g > 1 && au2 < gs[g - 2] * 0.62) g--;
    if (g !== g0) { c.gear = g; c.shiftT = g > g0 ? 0.22 : 0.1; }
    const lo = g > 1 ? gs[g - 2] * 0.62 : 0, rp = (au2 - lo) / Math.max(1, gs[g - 1] * 0.96 - lo);
    let tgt = 0.16 + 0.84 * clamp(rp, 0, 1);
    if (c.shiftT > 0) { c.shiftT -= dt; tgt = Math.max(0.2, tgt - 0.25); }
    if (throttle === 0 && au2 < 0.5) tgt = 0.12;
    c.rpm += (tgt - c.rpm) * Math.min(1, dt * (throttle > 0 ? 9 : 5)); }
  // ---- world: buildings, other cars, island edge, sea, ground contact
  let ev = '';
  if (track.terrain) ev = terrain(c, dt, track, spec, geo);
  for (const o of others || []) ev = carVsCar(c, o, spec, geo, m, Iz) || ev;
  return ev;
}

// ---- circles that cover the car's footprint (4 along its length)
function circles(c, geo) {
  const rc = geo.w * 0.5 - 0.06, e = geo.L * 0.5 - rc - 0.1, fx = Math.sin(c.yaw), fz = Math.cos(c.yaw), out = [];
  for (const k of [-1, -1 / 3, 1 / 3, 1]) out.push({ x: c.x + fx * e * k, z: c.z + fz * e * k, off: e * k, r: rc });
  return out;
}

// rigid impulse at contact point p (relative r = p - centre) with normal n (pointing away from the obstacle) against a static obstacle
function impulse(c, nx, nz, rx, rz, m, Iz, e) {
  // omega (about +y, left turn = +yr) x r = (omega*rz, -omega*rx) in (x, z)
  const px = c.vx + c.yr * rz, pz = c.vz - c.yr * rx, vn = px * nx + pz * nz;
  if (vn >= 0) return 0;
  const rxn = rx * nz - rz * nx;                                     // (r x n) about the vertical axis
  const j = -(1 + e) * vn / (1 / m + (rxn * rxn) / Iz);
  c.vx += nx * j / m; c.vz += nz * j / m;
  c.yr -= rxn * j / Iz;
  return -vn;
}

const ALL = (t) => { if (!t.props) return t.boxes || []; return t._all || (t._all = [...(t.boxes || []), ...t.props]); };
const TD_SEA = -1.12, TD_EDGE = 538;   // the terrain ends at 540: the beach strips at the far south and north (z 505..540) are drivable
// buildings, piers and every other solid box: every circle of the car against every nearby box (only while the car is lower than the roof) - cars AND boats
export function bumpBoxes(c, track, spec, geo) {
  let ev = '';
  const m = spec.mass, Iz = m * Math.pow(0.48 * (geo.wb || 2.7), 2);
  for (let pass = 0; pass < 2; pass++) for (const ci of circles(c, geo)) {
    for (const b of ALL(track)) {
      if (c.y > b.h - 0.4 || ci.x < b.x0 - 2 || ci.x > b.x1 + 2 || ci.z < b.z0 - 2 || ci.z > b.z1 + 2) continue;
      const cx = Math.max(b.x0, Math.min(b.x1, ci.x)), cz = Math.max(b.z0, Math.min(b.z1, ci.z)); let dx = ci.x - cx, dz = ci.z - cz, d = Math.hypot(dx, dz), nx, nz, pen;
      if (d > 1e-4) { nx = dx / d; nz = dz / d; pen = ci.r - d; if (pen <= 0) continue; }
      else { const l = ci.x - b.x0, r = b.x1 - ci.x, f = ci.z - b.z0, k = b.z1 - ci.z, mm = Math.min(l, r, f, k); pen = ci.r + mm; if (mm === l) { nx = -1; nz = 0; } else if (mm === r) { nx = 1; nz = 0; } else if (mm === f) { nx = 0; nz = -1; } else { nx = 0; nz = 1; } }
      c.x += nx * pen; c.z += nz * pen; ci.x += nx * pen; ci.z += nz * pen;
      const hit = impulse(c, nx, nz, ci.x - c.x, ci.z - c.z, m, Iz, 0.18);
      if (hit > 0) { hurt(c, hit, ci.x - c.x, ci.z - c.z); c.vx *= 0.985; c.vz *= 0.985; if (hit > 4) { ev = hit > 11 ? 'crash' : 'bump'; c.crash = Math.max(c.crash || 0, hit); } }
    }
  }
  return ev;
}
function terrain(c, dt, track, spec, geo) {
  const T = track.terrain; let ev = bumpBoxes(c, track, spec, geo);
  const fx = Math.sin(c.yaw), fz = Math.cos(c.yaw);
  // the island edge and the sea
  const E = track.edge || TD_EDGE; if (Math.abs(c.x) > E) { c.x = Math.sign(c.x) * E; c.vx *= -0.3; } if (Math.abs(c.z) > E) { c.z = Math.sign(c.z) * E; c.vz *= -0.3; }
  // the sea: no wall - the car drives in, slows down in the water, floats a moment (nose down, the engine is dead) and then sinks to the sea bed
  const WY = track.waterY === undefined ? -1.2 : track.waterY, g0 = T(c.x, c.z);
  if (WY - g0 > 0.35) { c.wet = (c.wet || 0) + dt; if (!c.sd) c.sd = 0; c.sd += dt * (0.1 + 0.3 * Math.min(1, c.wet / 5)); }
  else if (c.wet > 0) c.wet = Math.max(0, c.wet - dt * 2);
  if (c.wet > 0) { const k = Math.exp(-dt * (0.9 + Math.min(2.4, c.wet * 0.8))); c.vx *= k; c.vz *= k; c.yr *= Math.exp(-dt * 1.5); }
  // height: stick to the ground, leave it over a crest / ramp lip (and fly)
  const gy = T(c.x, c.z), sp = Math.hypot(c.vx, c.vz), py = c.y;
  c.gx = (T(c.x + 1.5, c.z) - T(c.x - 1.5, c.z)) / 3; c.gz = (T(c.x, c.z + 1.5) - T(c.x, c.z - 1.5)) / 3;
  if (c.air) {
    c.vy -= 9.81 * dt; c.y += c.vy * dt;
    if (c.y <= gy) { const hit = -c.vy; c.y = gy; c.air = false; c.vy = 0; c.vyg = 0; if (hit > 5) { ev = hit > 10 ? 'crash' : 'bump'; c.crash = Math.max(c.crash || 0, hit); const k = Math.max(0.6, 1 - hit * 0.012); c.vx *= k; c.vz *= k; } }
    c.pitch += (Math.atan2(c.vy, Math.max(8, sp)) * 0.8 - c.pitch) * Math.min(1, dt * 4);
  } else {
    const vygPrev = c.vyg, rise = (gy - py) / Math.max(dt, 1e-3); c.vyg += (rise - c.vyg) * Math.min(1, dt * 18);
    // leaving a ramp lip: take off with the climb speed we HAD on the ramp (the drop-off in this very frame must not eat it) - so a fast car really flies, a slow one hops
    if (gy < py - 0.12 - sp * 0.0025) { c.air = true; c.vy = Math.max(vygPrev, c.vyg, 0); c.y = py; }
    else { c.y = gy; const fs = c.gx * fx + c.gz * fz; c.pitch += (Math.atan(fs) - c.pitch) * Math.min(1, dt * 12); }
  }
  if (c.wet > 0 && c.sd !== undefined) {   // floating / sinking: the body rides on the water, then settles on the bed
    const fy = WY - 0.4 - c.sd; c.sunk = fy < gy - 0.02;
    if (fy > gy) { c.y = fy; c.air = false; c.vy = 0; c.pitch += (-0.38 * Math.min(1, c.sd / 1.2) - c.pitch) * Math.min(1, dt * 1.6); }
  } else if (c.sd && c.wet <= 0) { c.sd = 0; c.sunk = false; }
  c.air = c.air && c.y > gy + 1e-4;
  return ev;
}

// GTA-style damage: a car has 100 health. Hits below ~9 km/h do nothing, a 50 km/h wall hit costs ~11, so it takes 6+ crashes to smoke and ~10 to wreck.
// Each hit also queues a visual dent (position in car coordinates: lx forward, lz to the right) for the mesh.
function hurt(c, hit, rx, rz) {
  if (!(hit > 2.5)) return;
  const d = Math.min(55, (hit - 2.5) * 0.55); c.hp = Math.max(0, (c.hp === undefined ? 100 : c.hp) - d);
  const fx = Math.sin(c.yaw), fz = Math.cos(c.yaw); (c.dmgQ || (c.dmgQ = [])).push({ lx: rx * fx + rz * fz, lz: -rx * fz + rz * fx, d });
  if (c.dmgQ.length > 8) c.dmgQ.shift();
}

// car against car (the other car is treated as heavy when parked, lighter when somebody drives it)
function carVsCar(c, o, spec, geo, m, Iz) {
  if ((c.x - o.x) ** 2 + (c.z - o.z) ** 2 > 40 || Math.abs((o.y || 0) - c.y) > 2.5) return '';
  const og = o.hl ? { w: o.hw * 2, L: o.hl * 2, wb: 2.7 } : geo;
  const A = circles(c, geo), B = circles(o, og); let best = null;
  for (const p of A) for (const q of B) { const dx = p.x - q.x, dz = p.z - q.z, d = Math.hypot(dx, dz), pen = p.r + q.r - d; if (pen > 0 && (!best || pen > best.pen)) best = { pen, nx: d > 1e-4 ? dx / d : Math.sin(c.yaw), nz: d > 1e-4 ? dz / d : Math.cos(c.yaw), px: p.x, pz: p.z }; }
  if (!best) return '';
  const heavy = o.driver === -1 || o.parked || o.heavy, share = heavy ? 1 : 0.55;
  c.x += best.nx * best.pen * share; c.z += best.nz * best.pen * share;
  const rx = best.px - c.x, rz = best.pz - c.z;
  const ovx = o.vx || 0, ovz = o.vz || 0;
  const sx = c.vx, sz = c.vz; c.vx -= ovx; c.vz -= ovz;
  const hit = impulse(c, best.nx, best.nz, rx, rz, heavy ? m : m * 1.0, Iz, 0.25) * (heavy ? 1 : 0.6);
  c.vx += ovx; c.vz += ovz; void sx; void sz;
  if (hit > 0) { hurt(c, hit, rx, rz); c.vx *= 0.99; c.vz *= 0.99; }
  return hit > 9 ? 'crash' : hit > 3.5 ? 'bump' : '';
}
