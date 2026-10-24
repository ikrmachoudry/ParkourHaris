// AIRPLANE PHYSICS (the jet that waits at the Stunt Park). No three.js / DOM here, so the tests (and the server) can run it.
// An arcade flight model: it is a car state (cityveh.js newCityState) with the same fields, plus the flight ones: thr (throttle 0..1), pitch (+ = nose up), roll (+ = right wing down), air (true = flying).
//   inp: { gas -1..1 (throttle up / down), steer -1..1 (+ = bank right), pitch -1..1 (+ = nose UP), hb (wheel brake) }     returns '', 'bump' or 'crash'
//   TOP = 910 km/h.  Take-off: throttle up, roll along the runway, pull the nose up above ROTATE.  Under STALL it sinks.  Landing: gentle sink rate, wings level, nose not down.
import { bumpBoxes, STYLE_GEO } from './cityveh.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const PLANE_TOP = 910 / 3.6, ROTATE = 42, STALL = 34, CEILING = 1100, WORLD = 1900;

export function stepPlane(c, dt, inp, track, others, spec) {
  const geo = STYLE_GEO[spec.style], sub = Math.max(1, Math.ceil(dt / (1 / 60))), sdt = dt / sub; let ev = '';
  for (let s = 0; s < sub; s++) ev = once(c, sdt, inp, track, spec, geo) || ev;
  void others;
  return ev;
}

function once(c, dt, inp, track, spec, geo) {
  let ev = '';
  const T = track.terrain, top = PLANE_TOP * 1.04;
  if (c.thr === undefined) { c.thr = 0; c.pitch = 0; c.roll = 0; c.air = false; c.spd = 0; }
  const gas = clamp(inp.gas || 0, -1, 1), steer = clamp(inp.steer || 0, -1, 1), pit = clamp(inp.pitch || 0, -1, 1);
  const g0 = T ? T(c.x, c.z) : 0, alt = c.y - g0, onGround = alt < 0.12 && !c.air && !((c.spd || 0) >= ROTATE && c.pitch > 0.08);
  if (!onGround && !c.air) c.air = true;   // nose up past the rotation speed: it leaves the runway
  // throttle: W / S move it, it stays where you leave it
  c.thr = clamp(c.thr + gas * 0.55 * dt, 0, 1);
  let u = c.spd || 0;
  // engine: strong at low speed, fading out to the top speed; climbing costs speed, diving gives it back; the air itself slows the plane down when the throttle is closed
  const fade = Math.max(0, 1 - Math.pow(Math.max(0, u) / top, 2));
  u += spec.acc * c.thr * fade * dt;
  u -= 9.81 * Math.sin(c.pitch) * dt * (c.air ? 0.8 : 0);
  u -= u * 0.008 * dt * (c.thr < 0.05 ? 2.2 : 1);
  if (onGround) { u -= Math.min(u, (1.2 + (inp.hb ? spec.dec : 0)) * dt); }
  u = clamp(u, 0, PLANE_TOP);   // 910 km/h flat out
  // ---- attitude
  const ctl = clamp(u / 55, 0.25, 1);
  if (onGround) {
    // wheels: the nose stays down until the rotation speed; steering = the nose wheel
    c.roll += (0 - c.roll) * Math.min(1, dt * 6);
    const yrT = -steer * 0.55 * clamp(u / 14, 0, 1) * (u > 70 ? 0.3 : 1);
    c.yr += (yrT - c.yr) * Math.min(1, dt * 5); c.yaw += c.yr * dt;
    if (u >= ROTATE && pit > 0.05) c.pitch += pit * 0.55 * dt; else c.pitch += (0 - c.pitch) * Math.min(1, dt * 4);
    c.pitch = clamp(c.pitch, 0, 0.5);
  } else {
    c.pitch += (pit * 1.15 * ctl - (Math.abs(pit) < 0.05 ? c.pitch * 0.5 : 0)) * dt;   // let go of the stick: the nose comes back to level slowly
    c.pitch = clamp(c.pitch, -1.2, 1.2);
    c.roll += (steer * 0.95 - c.roll) * Math.min(1, dt * 2.6 * ctl);
    const yrT = -c.roll * (1.15 - 0.88 * clamp((u - 60) / 190, 0, 1));
    c.yr += (yrT - c.yr) * Math.min(1, dt * 3); c.yaw += c.yr * dt;
  }
  // ---- velocity: the plane flies along its nose; too slow and it sinks (stall)
  const fx = Math.sin(c.yaw), fz = Math.cos(c.yaw), hs = u * Math.cos(c.pitch);
  let vy;
  if (onGround) vy = 0;
  else { const sink = Math.max(0, (STALL - u) / STALL); vy = u * Math.sin(c.pitch) * clamp(u / STALL, 0.2, 1) - sink * sink * 38; }
  c.vx = fx * hs; c.vz = fz * hs; c.vy = vy;
  c.x += c.vx * dt; c.z += c.vz * dt; c.y += vy * dt;
  c.spd = u; c.speed = u;
  // ---- the world: buildings (only while it is lower than their roofs), the ground, the ceiling and the edge
  if (track.boxes || track.props) { const e = bumpBoxes(c, track, spec, geo); if (e) { ev = e; if (e === 'crash') { u *= 0.35; c.spd = u; c.hp = Math.max(0, (c.hp === undefined ? 100 : c.hp) - 25); } } }
  if (Math.abs(c.x) > WORLD) { c.x = Math.sign(c.x) * WORLD; } if (Math.abs(c.z) > WORLD) { c.z = Math.sign(c.z) * WORLD; }
  if (c.y > CEILING) { c.y = CEILING; if (c.pitch > 0) c.pitch *= 0.9; }
  const gr = T ? T(c.x, c.z) : 0;
  if (c.y <= gr + 0.02) {
    const sinkRate = -vy, bad = c.air && (sinkRate > 14 || c.pitch < -0.28 || Math.abs(c.roll) > 0.45);
    c.y = gr;
    if (c.air && bad) { ev = 'crash'; c.crash = Math.max(c.crash || 0, 14 + sinkRate); c.hp = Math.max(0, (c.hp === undefined ? 100 : c.hp) - Math.min(100, 15 + sinkRate * 3)); c.spd *= 0.3; c.speed = c.spd; }
    else if (c.air && sinkRate > 5) ev = 'bump';
    c.air = false; c.vy = 0; if (c.pitch < 0) c.pitch = 0; c.roll *= 0.5;
  } else if (c.y > gr + 0.2 && !c.air) c.air = true;
  else if (!c.air && vy > 0) c.air = true;
  if (!c.air && c.y > gr + 0.05) c.y = gr;
  // ---- the fields the rest of the game reads (sound, HUD, camera, net)
  c.ax += (gas * spec.acc * 0.4 - c.ax) * Math.min(1, dt * 4); c.ay += (c.yr * u - c.ay) * Math.min(1, dt * 5);
  c.vyg = 0; c.skid = 0; c.drift = 0; c.vl = 0; c.brake = inp.hb && !c.air ? 1 : 0; c.load = c.thr;
  c.rpm += ((0.18 + 0.82 * c.thr) - c.rpm) * Math.min(1, dt * 3);
  c.wheelPh += u * 0.5 * dt; c.gx = 0; c.gz = 0; c.steer = steer; c.ownd = true;
  return ev;
}
