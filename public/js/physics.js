// Kinematic character controller (cylinder vs boxes/ramps/discs). Deterministic, allocation-free per step.
import { P } from './world.js';

export function newBody() {
  return {
    x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, yaw: Math.PI, grounded: false, ground: null,
    coyote: 0, jumpBuf: 0, stun: 0, dive: 0, diveCd: 0, noSnap: 0, hitCd: 0, boost: 0,
    jumping: false, noCtrl: 0, landSpeed: 0, inWater: false, events: [], moveT: 0, yawOff: 0, swim: 0, waterSurf: 0,
  };
}

const angDiff = (a, b) => { let d = (b - a) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return d; };

function approach(b, tx, tz, maxD) {
  const dx = tx - b.vx, dz = tz - b.vz, d = Math.hypot(dx, dz);
  if (d <= maxD || d < 1e-6) { b.vx = tx; b.vz = tz; } else { b.vx += dx / d * maxD; b.vz += dz / d * maxD; }
}

// inp: {mx, mz (world dir, |.|<=1), jumpPressed, jumpHeld, divePressed}
export function stepBody(w, b, dt, inp) {
  b.coyote = b.grounded ? 0.11 : b.coyote - dt;
  b.jumpBuf = inp.jumpPressed ? 0.13 : b.jumpBuf - dt;
  if (b.stun > 0) b.stun = Math.max(0, b.stun - dt);
  if (b.dive > 0) b.dive = Math.max(0, b.dive - dt);
  if (b.diveCd > 0) b.diveCd -= dt;
  if (b.noSnap > 0) b.noSnap -= dt;
  if (b.hitCd > 0) b.hitCd -= dt;
  if (b.boost > 0) b.boost -= dt;
  if (b.noCtrl > 0) b.noCtrl -= dt;

  // ---- swimming pools: water never hurts, you just float, paddle slower and can hop out
  let sw = 0, surf = 0;
  for (const pl of w.pools) {
    if (b.x > pl.x0 && b.x < pl.x1 && b.z > pl.z0 && b.z < pl.z1) { const d = pl.surf - b.y; if (d > 0.12) { sw = Math.min(1, d / 0.9); surf = pl.surf; } break; }
  }
  if (sw > 0.3 && b.swim <= 0.3) { b.events.push('splash'); b.waterSurf = surf; }
  b.swim = sw;

  const ctrl = b.stun <= 0 && b.dive <= 0 && b.noCtrl <= 0;
  const ice = b.ground && b.ground.ice;
  const hasIn = Math.abs(inp.mx) + Math.abs(inp.mz) > 0.01;

  // ---- dive
  if (inp.divePressed && b.diveCd <= 0 && b.stun <= 0 && b.dive <= 0) {
    const fx = Math.sin(b.yaw), fz = Math.cos(b.yaw);
    b.vx = fx * 15.5; b.vz = fz * 15.5;
    b.vy = b.grounded ? 7 : Math.max(b.vy, 3.5);
    b.grounded = false; b.ground = null; b.noSnap = 0.2; b.dive = 0.85; b.diveCd = 1.1;
    b.events.push('dive');
  }

  // ---- horizontal control
  if (ctrl) {
    const sp = P.RUN * (b.boost > 0 ? 1.45 : 1) * (b.speedMul || 1) * (1 - 0.34 * sw);
    if (hasIn) {
      const acc = b.grounded ? (ice ? P.ICE_ACC : P.ACC) : P.AIR;
      approach(b, inp.mx * sp, inp.mz * sp, acc * dt);
      const ty = Math.atan2(inp.mx, inp.mz);
      b.yaw += angDiff(b.yaw, ty) * (1 - Math.exp(-20 * dt));
    } else if (b.grounded) {
      approach(b, 0, 0, (ice ? P.ICE_DEC : P.DEC) * dt);
    } else approach(b, 0, 0, P.AIR_DEC * dt);
  } else {
    // stunned / diving: slide with friction
    const f = b.grounded ? (ice ? 1.2 : 9) : 0.6;
    approach(b, 0, 0, f * dt);
  }

  // ---- jump
  if (sw > 0.4 && inp.jumpPressed && b.stun <= 0) { b.vy = 9; b.grounded = false; b.ground = null; b.noSnap = 0.2; b.jumpBuf = 0; b.events.push('stroke'); }
  else if (b.jumpBuf > 0 && (b.grounded || b.coyote > 0) && b.stun <= 0 && b.dive <= 0.45) {
    b.vy = P.JUMP * (b.jumpMul || 1); b.grounded = false; b.ground = null; b.coyote = 0; b.jumpBuf = 0; b.noSnap = 0.2; b.jumping = true;
    b.events.push('jump');
  }
  if (b.jumping && !inp.jumpHeld && b.vy > 6) b.vy -= 55 * dt; // short hop

  b.vy = Math.max(P.TERM, b.vy - P.G * dt * (b.dive > 0 && !b.grounded ? 0.8 : 1) * (1 - 0.92 * sw));
  if (sw > 0.05) { // buoyancy: spring to a floating height, damped; holding jump treads water higher
    const tgt = surf - (inp.jumpHeld ? 0.3 : 0.95);
    b.vy += (tgt - b.y) * 26 * dt * sw; b.vy *= Math.exp(-2.4 * dt * sw);
  }

  // ---- updraft columns (air pads): float up, hover near the top
  for (const z of w.zones) {
    const dx = b.x - z.x, dz = b.z - z.z;
    if (dx * dx + dz * dz < z.r * z.r && b.y > z.y0 - 0.3 && b.y < z.y1) {
      const k = Math.max(0, (b.y - z.y0) / (z.y1 - z.y0)), tv = z.vmax * (1 - k * k);
      if (b.vy < tv) b.vy = Math.min(tv, b.vy + z.lift * dt);
      b.noSnap = Math.max(b.noSnap, 0.12); if (!b.air) { b.air = true; b.events.push('air'); }
    } else b.air = false;
  }

  // ---- conveyors / boost pads act directly on the position
  if (b.grounded && b.ground) {
    const c = b.ground.conv;
    if (c) { b.x += c[0] * dt; b.z += c[1] * dt; }
    if (b.ground.boost) { b.boost = 0.55; }
  }

  // ---- integrate + collide
  const wasGrounded = b.grounded, prevY = b.y;
  b.x += b.vx * dt; b.z += b.vz * dt;
  w.resolveHorizontal(b); w.resolveHorizontal(b);
  b.y += b.vy * dt;

  b.grounded = false; b.ground = null;
  if (b.vy <= 0) {
    const g = w.findGround(b, prevY, wasGrounded);
    if (g) {
      const impact = -b.vy;
      b.y = g.top; b.vy = 0; b.grounded = true; b.ground = g.s; b.jumping = false;
      if (g.s.bounce) {
        b.vy = g.s.bounce; b.grounded = false; b.ground = null; b.noSnap = 0.25; b.jumping = false;
        if (g.s.push) { b.vx = g.s.push[0]; b.vz = g.s.push[1]; b.noCtrl = 0.9; }
        if (g.s.squash !== undefined) g.s.squash = 1;
        b.events.push('bounce');
      } else if (!wasGrounded && impact > 6) { b.landSpeed = impact; b.events.push('land'); }
    }
  } else {
    const c = w.hitCeiling(b, prevY);
    if (c) { b.y = c.y0 - P.H; b.vy = Math.min(0, b.vy * 0.2); }
  }

  // ---- water / void
  if (b.y < w.waterY - 0.2 && !b.inWater) { b.inWater = true; b.events.push('splash'); }
  if (b.y < w.killY) b.events.push('fell');
  return b;
}

export function knock(b, nx, nz, pow) {
  if (b.hitCd > 0 || b.shield > 0) return false;
  b.vx = nx * pow; b.vz = nz * pow; b.vy = Math.max(b.vy, 6.5);
  b.grounded = false; b.ground = null; b.noSnap = 0.25; b.stun = 0.95; b.dive = 0; b.hitCd = 0.5;
  b.events.push('hit');
  return true;
}

export function respawn(b, x, y, z, yaw) {
  b.x = x; b.y = y; b.z = z; b.vx = b.vy = b.vz = 0; b.grounded = false; b.ground = null;
  b.stun = 0; b.dive = 0; b.inWater = false; b.hitCd = 1.0; b.yaw = yaw ?? Math.PI; b.noSnap = 0; b.boost = 0;
}
