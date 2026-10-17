// Smoke test of all client-side object building with a stubbed DOM (no GPU needed).
import * as THREE from 'three';
const ctxStub = new Proxy({}, { get: (t, k) => (k === 'measureText' ? () => ({ width: 120 }) : k === 'createLinearGradient' || k === 'createRadialGradient' ? () => ({ addColorStop() {} }) : (typeof k === 'string' ? (() => {}) : undefined)), set: () => true });
globalThis.document = { createElement: () => ({ width: 0, height: 0, getContext: () => ctxStub, style: {} }), fonts: { load: async () => {} } };
globalThis.window = globalThis;
const { Character, makeNameTag } = await import('../public/js/characters.js');
const S = await import('../public/js/scenery.js');
const { buildLevel } = await import('../public/js/levels.js');
const { newBody, stepBody } = await import('../public/js/physics.js');

for (let i = 0; i < 3; i++) {
  const c = new Character(i);
  for (const st of [{ speed: 10, grounded: true, vy: 0, stun: 0, dive: 0 }, { speed: 3, grounded: false, vy: 5, stun: 0, dive: 0 }, { speed: 0, grounded: false, vy: -9, stun: 1, dive: 0 }, { speed: 12, grounded: false, vy: 0, stun: 0, dive: 1 }, { speed: 0, grounded: true, vy: 0, stun: 0, dive: 0, celebrate: true, landed: true }]) c.update(0.016, st);
  makeNameTag('Haris');
  console.log('character', i, 'ok, meshes:', (() => { let n = 0; c.group.traverse((o) => o.isMesh && n++); return n; })());
}
for (let i = 0; i < 3; i++) {
  const arrow = S.arrowTexture();
  const { world, info } = buildLevel(i, false, arrow);
  const scene = new THREE.Scene();
  scene.add(world.group);
  const sc = S.buildScenery(scene, info.key, info, world);
  const v = S.VIS[info.key];
  scene.add(S.makeSky(v), S.makeWater(v, world.waterY));
  const p = new S.Particles(100); p.emit(0, 0, 0, 50, { rainbow: true }); p.update(0.016);
  const a = new S.Ambient(info.key, 50); a.update(1, new THREE.Vector3());
  // run a few world frames with a body
  const b = newBody(); b.y = 0.01; b.z = 1.5;
  for (let f = 0; f < 600; f++) { world.update(f / 60, 1 / 60); world.carry(b); stepBody(world, b, 1 / 60, { mx: 0, mz: -1, jumpPressed: f % 50 === 0, jumpHeld: true }); world.checkHazards(b, f / 60); b.events.length = 0; }
  sc.update(1, new THREE.Vector3());
  let meshes = 0, tris = 0; scene.traverse((o) => { if (o.isMesh) { meshes++; const g = o.geometry; tris += (g.index ? g.index.count : g.attributes.position.count) / 3; } });
  let draw = 0; scene.traverse((o) => { if ((o.isMesh || o.isPoints) && o.visible) draw++; });
  console.log('level', i, info.key, 'objects', draw, 'meshes', meshes, 'triangles', Math.round(tris), 'solids', world.solids.length);
  sc.dispose();
}
console.log('DRYRUN OK');
