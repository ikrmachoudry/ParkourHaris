// Grab-swing rules shared by the game and the tests.
// HOLD the grab button to hang on the handle when it passes within reach; JUMP (or letting go of the button) lets go.
const REACH = 3.4, HANDS = 1.65;
export function newSwingState() { return { hang: null, cd: 0, tip: {} }; }

// returns true while the body is hanging (the caller must then skip normal physics).
// Press (or hold) the grab button near the handle to catch it. You stay on until you JUMP (or press grab again): letting go of the
// button does NOT drop you, so a shaky finger or a hidden button can never throw you off.
export function stepSwing(w, b, st, lt, dt, held, jump, canMove, pressed = false) {
  st.cd = Math.max(0, st.cd - dt);
  st.pend = pressed ? 0.9 : Math.max(0, (st.pend || 0) - dt);       // a quick tap keeps trying to catch for a moment
  if (!held && !pressed) st.lock = false;
  if (pressed) st.lock = false;
  const tip = st.tip;
  if (!st.hang) {
    if (!(canMove && (held || st.pend > 0) && !st.lock && st.cd <= 0 && b.stun <= 0)) return false;
    for (const sw of w.swings) {
      w.swingTip(sw, lt, tip);
      if (Math.hypot(tip.x - b.x, tip.y - (b.y + 1.55), tip.z - b.z) < REACH) {
        st.hang = { sw, ox: Math.max(-1, Math.min(1, b.x - sw.x)), t: 0 }; st.grabbed = true; st.pend = 0;
        b.vx = b.vz = b.vy = 0; b.grounded = false; b.inWater = false; b.jumping = false;
        break;
      }
    }
    if (!st.hang) return false;
  }
  const h = st.hang; h.t += dt; w.swingTip(h.sw, lt, tip);
  const again = pressed && h.t > 0.3;
  if (!canMove || b.stun > 0 || jump || again) {
    const boost = jump ? 1.18 : 1.0;
    b.x = h.sw.x + h.ox; b.z = tip.z; b.y = tip.y - HANDS;
    b.vx = 0; b.vz = tip.vz * boost; b.vy = tip.vy * boost + (jump ? 7 : 1.5); b.grounded = false; b.noCtrl = 0;
    st.hang = null; st.cd = 0.45; st.lock = true; st.released = jump ? 'jump' : 'let go';
    return false;
  }
  b.x = h.sw.x + h.ox; b.z = tip.z; b.y = tip.y - HANDS; b.vx = 0; b.vz = tip.vz; b.vy = tip.vy; b.grounded = false;
  b.yaw = tip.vz < 0 ? Math.PI : 0;
  return true;
}
