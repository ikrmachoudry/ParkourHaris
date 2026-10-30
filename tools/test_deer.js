// deer: they exist in the city only, stay inside their park / slope, keep off the fountain, and run away from a threat
import { Deer } from '../public/js/deer.js';
import { PARKS } from '../public/js/gta.js';
let bad = 0; const ok = (c, m) => { if (!c) bad++; console.log((c ? 'PASS ' : 'FAIL ') + m); };
const scene = { added: 0, add() { this.added++; }, remove() { this.added--; } };
const D = new Deer(scene, false); ok(D.list.length === PARKS.length * 3 + 9, `deer count ${D.list.length}`);
const L = new Deer({ add() {}, remove() {} }, true); ok(L.list.length > 0 && L.list.length < D.list.length, `phone count ${L.list.length}`);
const cam = { x: PARKS[0][0], z: PARKS[0][1] }; let fin = true, inb = true, fountain = true;
for (let f = 0; f < 60 * 90; f++) { D.update(1 / 60, cam, []); for (const d of D.list) { if (!Number.isFinite(d.x + d.y + d.z)) fin = false; const od = Math.hypot(d.x - d.s.cx, d.z - d.s.cz); if (od > d.s.r + 0.01) inb = false; if (d.s.keep && od < d.s.keep - 0.01) fountain = false; } }
ok(fin, 'positions stay finite'); ok(inb, 'every deer stays inside its park / slope'); ok(fountain, 'nobody stands in a fountain');
const d0 = D.list[0], before = Math.hypot(d0.x - cam.x, d0.z - cam.z); const th = [{ x: d0.x + 3, z: d0.z, v: 0 }]; let fled = false;
for (let f = 0; f < 30; f++) { D.update(1 / 60, cam, th); if (d0.st === 'flee') fled = true; } ok(fled, 'a deer bolts when a person comes within 3 m');
const far = { x: 5000, z: 5000 }; D.update(1 / 60, far, []); ok(D.list.every((d) => !d.g.visible), 'far-away deer are hidden (not drawn)');
D.dispose(); ok(scene.added === 0, 'dispose removes every deer from the scene');
console.log(bad ? 'DEER FAIL' : 'DEER OK');
