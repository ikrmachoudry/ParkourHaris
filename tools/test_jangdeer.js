// Jang stag: it roams, charges a player in sight, gores him (damage + knock-back), can be shot / hit / blown up, dies, and comes back later
import { JangDeer } from '../public/js/jangdeer.js';
import { layout, cmbH } from '../public/js/combat.js';
import { newBody } from '../public/js/physics.js';
let bad = 0; const ok = (c, m) => { if (!c) bad++; console.log((c ? 'PASS ' : 'FAIL ') + m); };
const grp = { kids: new Set(), add(o) { this.kids.add(o); }, remove(o) { this.kids.delete(o); } };
const body = newBody(), toasts = []; let hp = 100;
const cs = { dropping: false, R: { me: { body }, drive: null, toast: (t) => toasts.push(t), particles: { emit() {} }, camera: { position: { x: 1500, z: 1500 } } }, hurt(d) { hp -= d; } };
const D = new JangDeer(grp); const L = layout(); const sp = L.spawns[0];
D.cam = { x: 1500 + sp.x, z: 1500 + sp.z };
const P = { x: sp.x + 30, z: sp.z, alive: true }; D.update(0.05, P, cs); ok(D.alive && grp.kids.size === 1, 'the stag spawns and is in the scene');
D.x = sp.x; D.z = sp.z; body.x = 1500 + P.x; body.z = 1500 + P.z; body.grounded = true;
let charged = false, gored = false, minD = 1e9;
for (let f = 0; f < 60 * 25; f++) { D.update(1 / 60, P, cs); if (D.st === 'charge') charged = true; minD = Math.min(minD, Math.hypot(P.x - D.x, P.z - D.z)); if (hp < 100) { gored = true; break; } }
ok(charged, 'it charges a player 30 m away'); ok(gored && hp <= 76 + 0.01, `it gores him (hp ${hp}, closest ${minD.toFixed(1)} m)`); ok(body.vx !== 0 || body.vz !== 0 || body.stun > 0, 'the gore throws him back'); ok(toasts.some((t) => /STAG/.test(t)), 'a warning toast shows');
const hp0 = hp; for (let f = 0; f < 60 * 3; f++) D.update(1 / 60, P, cs); ok(hp < hp0 && hp > hp0 - 24 * 3, `gores repeat only every ~1.3 s (hp ${hp0} -> ${hp})`);
const far = { x: P.x + 400, z: P.z, alive: true }; D.x = 0; D.z = 0; D.st = 'roam'; for (let f = 0; f < 60 * 5; f++) D.update(1 / 60, far, cs); ok(D.st === 'roam', 'it ignores a player who is far away');
D.x = 20; D.z = 0; ok(D.ray(0, 0, 1, 0, 50) > 19 && D.ray(0, 0, 0, 1, 50) < 0, 'a shot line through it hits, one beside it misses'); ok(D.ray(0, 0, 1, 0, 10) < 0, 'it is not hit beyond the range');
D.hit(100, cs); ok(D.alive && D.hp === 160, 'one bullet does not kill it'); D.hit(500, cs); ok(!D.alive && toasts.some((t) => /DOWN/.test(t)), 'enough damage kills it');
D.update(0.05, P, cs); ok(D.r.g.rotation.z > 0, 'it falls over'); for (let f = 0; f < 60 * 50; f++) D.update(1 / 60, P, cs); ok(D.alive, 'it comes back after ~45 s');
D.x = 1; D.z = 0; ok(D.melee(0, 0, 1, 0, 1.5, 55, cs) === 1 && D.hp < 260, 'a bat hit works up close'); const h1 = D.hp; D.blast(2, 0, 6, cs); ok(D.hp < h1, 'a grenade hurts it');
D.dispose(); ok(grp.kids.size === 0, 'dispose removes it'); console.log(bad ? 'JANGDEER FAIL' : 'JANGDEER OK');
