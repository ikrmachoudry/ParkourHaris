// finds spots where a car at a standstill cannot drive off (invisible obstacles): node --import ./tools/mock-register.js tools/stall.mjs
import * as THREE from 'three';
const ctxStub = new Proxy({}, { get: (t, k) => (k === 'measureText' ? () => ({ width: 120 }) : k === 'createLinearGradient' || k === 'createRadialGradient' ? () => ({ addColorStop() {} }) : (typeof k === 'string' ? () => ctxStub : undefined)) });
globalThis.document = { createElement: () => ({ width: 0, height: 0, getContext: () => ctxStub, style: {} }), fonts: { load: async () => {} } };
globalThis.window = globalThis;
const { buildLevel } = await import('../public/js/levels.js');
const { CITY_VEH, newCityState, stepCityCar } = await import('../public/js/cityveh.js');
const { gtaH } = await import('../public/js/gta.js');
const { world, info } = buildLevel(0, false, null, 1); const tr = info.track; const sp = CITY_VEH[0];
const X0 = +process.env.X0 || -540, X1 = +process.env.X1 || 540, Z0 = +process.env.Z0 || -540, Z1 = +process.env.Z1 || 540, ST = +process.env.ST || 8;
const out = [];
for (let x = X0; x <= X1; x += ST) for (let z = Z0; z <= Z1; z += ST) {
  if (gtaH(x, z) < -0.7) continue;
  let blocked = 0;
  for (const yaw of [0, Math.PI / 2, Math.PI, -Math.PI / 2]) {
    const c = newCityState({ id: sp.id, x, z, y: gtaH(x, z), pitch: 0, yaw, vx: 0, vz: 0, speed: 0, steer: 0, driver: 1, parked: false, vy: 0, vyg: 0, air: false }, sp);
    for (let i = 0; i < 90; i++) stepCityCar(c, 1 / 60, { gas: 1, steer: 0 }, tr, [], sp, null);
    if (Math.hypot(c.x - x, c.z - z) < 3) blocked++;
  }
  if (blocked >= 3) out.push([x, z, blocked, +gtaH(x, z).toFixed(2)]);
}
console.log(out.length); console.log(out.slice(0, 80).map((a) => a.join(',')).join(' | '));
