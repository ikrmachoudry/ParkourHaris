// v516: real physics - the player runs slower uphill, faster downhill (every mode that has terrain)
import { stepBody } from '../public/js/physics.js';
const run = (slope) => {
  const w = { pools: [], zones: [], winds: [], terrain: (x, z) => slope * x, waterY: -50, seaSwim: false, resolveHorizontal() {}, hitCeiling: () => null, findGround: (b) => ({ top: slope * b.x, s: { name: 'terrain' } }) };
  const b = { x: 0, y: 0, z: 0, vx: 0, vy: 0, vz: 0, yaw: 0, grounded: true, ground: null, swim: 0, events: [], coyote: 0, jumpBuf: 0, stun: 0, dive: 0, diveCd: 0, immune: 0, noSnap: 0, hitCd: 0, boost: 0, noCtrl: 0, speedMul: 0.546 };
  for (let i = 0; i < 180; i++) stepBody(w, b, 1 / 60, { mx: 1, mz: 0, jumpPressed: false, jumpHeld: false, divePressed: false });
  return Math.hypot(b.vx, b.vz);
};
const flat = run(0), up30 = run(0.3), up60 = run(0.6), down30 = run(-0.3);
console.log('flat', flat.toFixed(2), 'uphill 17deg', up30.toFixed(2), 'uphill 31deg', up60.toFixed(2), 'downhill 17deg', down30.toFixed(2), 'm/s');
const ok = up30 < flat * 0.85 && up60 < up30 && down30 > flat && up60 > flat * 0.4; console.log(ok ? 'SLOPE SPEED OK' : 'SLOPE SPEED FAIL'); if (!ok) process.exitCode = 1;
