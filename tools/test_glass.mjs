globalThis.window = globalThis;
import * as THREE from 'three';
import { layout, CMB } from '/home/claude/parkourharis/public/js/combat.js';
const { Glass } = await import('/home/claude/parkourharis/public/js/glass.js');
const L = layout(); const par = new THREE.Group(); par.position.set(CMB.x, 0, CMB.z);
const cam = new THREE.Object3D(); cam.position.set(CMB.x, 5, CMB.z);
const g = new Glass(par, L.buildings, 0, cam, null);
console.log('panes', g.panes.length, 'cells', g.grid.size);
const b = L.buildings.find((q) => q.kind === 'clinic');
// shoot through the clinic window at x -8.5 from inside to outside, at window height
let t0 = performance.now(); const n = g.seg(b.x - 8.5, b.fy + 1.5, b.z + 5, b.x - 8.5, b.fy + 1.4, b.z + 20); console.log('bullet broke', n, 'broken', g.nBroken, 'live shards', g.live);
console.log('same shot again', g.seg(b.x - 8.5, b.fy + 1.5, b.z + 5, b.x - 8.5, b.fy + 1.4, b.z + 20));
console.log('shot over wall (too high)', g.seg(b.x - 4.9, b.fy + 2.6, b.z + 5, b.x - 4.9, b.fy + 2.6, b.z + 20));
console.log('blast', g.blast(b.x, b.fy + 1, b.z + 11, 6), 'broken', g.nBroken);
for (let i = 0; i < 200; i++) g.update(1 / 60); console.log('after 3.3 s live shards', g.live);
for (let i = 0; i < 400; i++) g.update(1 / 60); console.log('after 10 s live', g.live); g.reset(); console.log('reset broken', g.panes.filter((p) => p.broken).length);
console.log('ms', (performance.now() - t0).toFixed(1));
