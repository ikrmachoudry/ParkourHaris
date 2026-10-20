// BOAT PHYSICS: motor boats for the water world. No three.js / DOM here, so tests (and the server) can run it.
// A boat is a car state (see cityveh.js newCityState) with the same fields (x, z, yaw, vx, vz, yr, speed ...) so the network, the camera, the sound and the
// enter / leave code treat it like any other vehicle.  c.y rides the water; the hull is built with the waterline at y = 0.
// inp: { gas -1..1, steer -1..1 (+ = right), hb }   returns '', 'bump' or 'crash'
import { bumpBoxes, STYLE_GEO } from './cityveh.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const BOAT_EDGE = 1500;   // how far out to sea you can go (the water goes on, the world is just not drawn further)

export function stepBoat(c, dt, inp, track, others, spec) {
  const geo = STYLE_GEO[spec.style], sub = Math.max(1, Math.ceil(dt / (1 / 60))), sdt = dt / sub; let ev = '';
  for (let s = 0; s < sub; s++) ev = once(c, sdt, inp, track, spec, geo) || ev;
  void others;
  return ev;
}

function once(c, dt, inp, track, spec, geo) {
  let ev = '';
  const T = track.terrain, water = track.waterY === undefined ? -1.2 : track.waterY, top = c.topCap || spec.top;
  const fx = Math.sin(c.yaw), fz = Math.cos(c.yaw), rx = -fz, rz = fx;
  let u = c.vx * fx + c.vz * fz, vl = -(c.vx * rx + c.vz * rz);   // forward / leftward speed
  const gas = clamp(inp.gas || 0, -1, 1), steer = clamp(inp.steer || 0, -1, 1), au = Math.abs(u);
  // engine: pushes hard at low speed, fades out towards the top speed (reverse is slow)
  if (gas > 0.01) u += spec.acc * gas * Math.max(0, 1 - Math.pow(Math.max(0, u) / top, 2)) * dt;
  else if (gas < -0.01) { if (u > 0.5) u -= spec.dec * -gas * dt; else u += spec.acc * 0.35 * gas * Math.max(0, 1 - Math.pow(Math.max(0, -u) / (top * 0.28), 2)) * dt; }
  if (inp.hb) u -= Math.sign(u) * Math.min(au, spec.dec * 0.6 * dt);
  if (gas < 0.01) u -= u * (0.05 + 0.012 * au) * dt;        // off the throttle the water holds the hull back: it coasts down (under power the engine curve above already gives the top speed)
  // the keel: sideways slide dies away (a planing speedboat slides more than a heavy yacht)
  vl *= Math.exp(-spec.keel * dt);
  // steering: the rudder bites with speed, a little thrust-steer from the propeller at a standstill
  const dirv = u < -0.5 ? -1 : 1, yrT = -steer * spec.turn * (clamp(au / 7, 0, 1) * dirv + 0.2 * Math.abs(gas) * (au < 3 ? 1 : 0));
  c.yr += (yrT - c.yr) * Math.min(1, dt * spec.agil);
  c.yaw += c.yr * dt;
  const nfx = Math.sin(c.yaw), nfz = Math.cos(c.yaw), nrx = -nfz, nrz = nfx;
  c.vx = nfx * u + nrx * -vl; c.vz = nfz * u + nrz * -vl;
  c.x += c.vx * dt; c.z += c.vz * dt;
  // ---- the world: piers / buildings, the shore, the edge of the sea
  let hit = 0;
  if (track.boxes || track.props) { const e = bumpBoxes(c, track, spec, geo); if (e) ev = e; }
  if (T) {
    // the hull touches the bottom where the water is shallower than its draught: it slides back out (and loses speed)
    const draft = spec.draft, depthAt = (x, z) => water - T(x, z);
    let ground = false;
    for (let k = 0; k < 4; k++) {
      const pts = [[c.x, c.z], [c.x + nfx * geo.L * 0.46, c.z + nfz * geo.L * 0.46], [c.x - nfx * geo.L * 0.4, c.z - nfz * geo.L * 0.4], [c.x + nrx * geo.w * 0.45, c.z + nrz * geo.w * 0.45], [c.x - nrx * geo.w * 0.45, c.z - nrz * geo.w * 0.45]];
      let worst = null, wd = draft;
      for (const p of pts) { const d = depthAt(p[0], p[1]); if (d < wd) { wd = d; worst = p; } }
      if (!worst) break;
      ground = true;
      // push away from the shallow point (the downhill direction of the sea floor)
      const gx = T(worst[0] + 1, worst[1]) - T(worst[0] - 1, worst[1]), gz = T(worst[0], worst[1] + 1) - T(worst[0], worst[1] - 1), gl = Math.hypot(gx, gz) || 1;
      const nx = -gx / gl, nz = -gz / gl, push = (draft - wd) * 0.9 + 0.12;
      c.x += nx * push; c.z += nz * push;
      const vn = c.vx * nx + c.vz * nz; if (vn < 0) { c.vx -= vn * nx * 1.3; c.vz -= vn * nz * 1.3; hit = Math.max(hit, -vn); }
    }
    if (ground) { c.vx *= Math.exp(-1.6 * dt); c.vz *= Math.exp(-1.6 * dt); if (hit > 4) { ev = hit > 11 ? 'crash' : 'bump'; c.crash = Math.max(c.crash || 0, hit); } }
  }
  if (Math.abs(c.x) > BOAT_EDGE) { c.x = Math.sign(c.x) * BOAT_EDGE; c.vx *= -0.3; } if (Math.abs(c.z) > BOAT_EDGE) { c.z = Math.sign(c.z) * BOAT_EDGE; c.vz *= -0.3; }
  // ---- sitting in the water: a gentle bob, the bow lifts at speed (planing), the hull leans into the turn
  u = c.vx * Math.sin(c.yaw) + c.vz * Math.cos(c.yaw);
  c.speed = u; c.bobT = (c.bobT || 0) + dt;
  const fr = clamp(Math.abs(u) / top, 0, 1), bob = Math.sin(c.bobT * 1.9 + (c.x * 0.13)) * 0.05 * (1 - fr * 0.6) + Math.sin(c.bobT * 3.1 + c.z * 0.11) * 0.025;
  c.y = water + spec.rideH + bob + fr * spec.lift;
  const trim = spec.trim * Math.sin(Math.min(1, fr * 2.2) * Math.PI * 0.9) * (u > 0 ? 1 : 0.2) + Math.sin(c.bobT * 1.4 + c.x * 0.1) * 0.012;
  c.pitch += (trim - c.pitch) * Math.min(1, dt * 3);
  c.ax += (gas * spec.acc * 0.4 - c.ax) * Math.min(1, dt * 4); c.ay += (c.yr * u - c.ay) * Math.min(1, dt * 5);
  c.air = false; c.vy = 0; c.vyg = 0; c.skid = 0; c.drift = 0; c.vl = -vl; c.brake = gas < -0.2 && u > 1 ? 1 : 0; c.load = Math.max(0, gas);
  c.rpm += ((gas > 0.05 ? 0.35 + 0.65 * clamp(fr * 1.4 + gas * 0.4, 0, 1) : 0.14 + 0.2 * fr) - c.rpm) * Math.min(1, dt * 5);
  c.wheelPh += u * 0.9 * dt;   // the propeller / wake phase
  c.gx = 0; c.gz = 0;
  return ev;
}
