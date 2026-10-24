// Airplane: take off, reach 910 km/h, land.
import { newCityState, CITY_VEH } from '../public/js/cityveh.js';
import { stepCar } from '../public/js/car.js';
let ok = true; const chk = (n, c) => { if (!c) ok = false; console.log((c ? 'ok   ' : 'FAIL ') + n); };
const track = { terrain: () => 0, boxes: [], props: [] };
const st = newCityState({ id: 33, x: 300, z: 58, y: 0, pitch: 0, yaw: Math.PI / 2, vx: 0, vz: 0, speed: 0, steer: 0, driver: 1, parked: false, vy: 0, vyg: 0, hp: 100 }, CITY_VEH[22]);
const dt = 1 / 60; let t = 0, maxSpd = 0, maxY = 0;
const run = (sec, inp) => { for (let i = 0; i < sec * 60; i++) { stepCar(st, dt, typeof inp === 'function' ? inp() : inp, track, [], 0); t += dt; maxSpd = Math.max(maxSpd, st.speed); maxY = Math.max(maxY, st.y); } };
run(2, { gas: 1, steer: 0, pitch: 0 });
chk('rolls on the ground', st.speed > 30 && !st.air && st.y === 0);
run(3, { gas: 1, steer: 0, pitch: 1 });
chk('takes off', st.air && st.y > 5);
const hold = (alt) => () => { const e = alt - st.y, tp = Math.max(-0.4, Math.min(0.4, e * 0.004)); return { gas: 1, steer: 0, pitch: Math.max(-1, Math.min(1, (tp - st.pitch) * 4)) }; };
run(40, hold(150)); console.log('km/h', (st.speed * 3.6).toFixed(0), 'alt', st.y.toFixed(0));
chk('top speed ~910', maxSpd * 3.6 > 880 && maxSpd * 3.6 < 950);
chk('stays below ceiling', maxY <= 1100.1);
// landing: gentle approach is safe, a nose dive is a crash
const land = (pitch) => { Object.assign(st, { y: 40, spd: 75, speed: 75, air: true, pitch: 0, roll: 0, thr: 0.3, hp: 100, x: 0, z: 0, yaw: 0 }); let crash = false;
  for (let i = 0; i < 60 * 60 && (st.air || i < 5); i++) { const ev = stepCar(st, dt, { gas: 0, steer: 0, pitch: Math.max(-1, Math.min(1, (pitch - st.pitch) * 4)) }, track, [], 0); if (ev === 'crash') crash = true; } return crash; };
chk('gentle landing is safe', !land(-0.06));
chk('nose dive crashes', land(-0.7));
console.log(ok ? 'PASS' : 'FAILED'); process.exit(ok ? 0 : 1);
