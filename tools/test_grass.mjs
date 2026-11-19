// v565: tall-grass patches: placed on clean ground, and a prone / crouching player inside one is hidden from bots (standing is not)
import { layout, CombatSim, inField, distRoad, onPad } from '../public/js/combat.js';
let bad = 0; const ok = (c, m) => { if (!c) { bad++; console.log('FAIL', m); } else console.log('PASS', m); };
const L = layout(); console.log('grass patches', L.grass.length, L.grass.map((g) => g.x + ',' + g.z + ' r' + g.r.toFixed(0)).join(' | '));
ok(L.grass.length >= 8, 'at least 8 patches (' + L.grass.length + ')');
ok(L.grass.every((g) => distRoad(g.x, g.z) > g.r * 0.5 && !inField(g.x, g.z) && !onPad(g.x, g.z, g.r * 0.5)), 'no patch on a road, field or building');
ok(L.grass.every((a, i) => L.grass.every((b, j) => i === j || Math.hypot(a.x - b.x, a.z - b.z) >= 40)), 'patches are spread out');
const g = L.grass.find((q) => !q.riv) || L.grass[0];   // v579: the river-bed patches sit in the dry river (banks block the view), so the sight test uses a land patch
ok(L.grassHide(g.x, g.z, 0) === Infinity, 'standing in grass: normal sight');
ok(L.grassHide(g.x, g.z, 2) === 7 && L.grassHide(g.x, g.z, 1) === 20, 'prone 7 m, crouch 20 m');
ok(L.grassHide(g.x + g.r * 2, g.z, 2) === Infinity, 'outside the patch: normal sight');
// a bot 15 m from the player: standing player is seen, prone player in grass is not
const seen = (stn) => { const sim = new CombatSim(5, 1), b = sim.bots[0]; b.alive = true; b.hp = 100; b.y = null; b.alert = 0;
  const P = { id: 1, x: g.x, z: g.z, y: undefined, hp: 100, alive: true, mv: 0, stn, tm: 0 }; let n = 0;
  for (let i = 0; i < 90; i++) { b.x = g.x + 15; b.z = g.z; sim.tick(1 / 30, [P]); b.hp = 100; if (b.seen || b.lastSeen > 0) n++; sim.drain(); } return n; };
const a = seen(0), p = seen(2); console.log('seen frames standing', a, 'prone', p);
ok(a > 0 && p === 0, 'bot at 15 m sees a standing player but not one lying in the grass');
console.log(bad ? 'GRASS FAILED' : 'GRASS OK'); process.exit(bad ? 1 : 0);
