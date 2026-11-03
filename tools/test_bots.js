// v331: bot difficulty + PUBG behaviour (pure logic)
import { CombatSim, DIFFS, cmbH, los } from '../public/js/combat.js';
let bad = 0; const ok = (c, m) => { if (!c) { bad++; console.log('FAIL', m); } else console.log('PASS', m); };
// 1. shots to kill, per difficulty, at a standing bot 15 m away (AK = dmg 1.6)
for (const d of Object.keys(DIFFS)) {
  const hitsTo = (zone) => { const sim = new CombatSim(3, 1); sim.setDiff(d); const b = sim.bots[0]; b.x = 0; b.z = 20; b.y = null; b.stn = 0; sim.L.solids.length; let n = 0;
    const gy = cmbH(b.x, b.z); const rel = { body: 1.0, head: 1.65, feet: 0.2, over: 2.3 }[zone];
    while (b.alive && n < 20) { n++; const a = 15; sim.shoot(0, 5, 0, 1, 80, 1.6, undefined, 1, 0, { y: gy + rel, sl: 0, k: 0 }); if (n > 12) break; } return b.alive ? 99 : n; };
  console.log(d, 'body', hitsTo('body'), 'head', hitsTo('head'), 'feet', hitsTo('feet'), 'over-head', hitsTo('over'));
}
{ const t = (d, z) => { const sim = new CombatSim(3, 1); sim.setDiff(d); const b = sim.bots[0]; b.x = 0; b.z = 20; b.y = null; const gy = cmbH(0, 20); let n = 0; while (b.alive && n < 12) { n++; sim.shoot(0, 5, 0, 1, 80, 1.6, undefined, 1, 0, { y: gy + z, sl: 0, k: 0 }); } return b.alive ? 99 : n; };
  ok(t('easy', 1) === 2 && t('medium', 1) === 3 && t('hard', 1) === 4, 'AK body hits to kill: easy 2 / medium 3 / hard 4 -> ' + [t('easy', 1), t('medium', 1), t('hard', 1)]);
  ok(t('easy', 1.65) === 1 && t('medium', 1.65) === 2 && t('hard', 1.65) === 2, 'AK headshots: easy 1 / medium 2 / hard 2 -> ' + [t('easy', 1.65), t('medium', 1.65), t('hard', 1.65)]);
  ok(t('hard', 2.3) === 99, 'a bullet over his head misses'); }
{ const sim = new CombatSim(3, 1), b = sim.bots[0]; b.x = 0; b.z = 20; b.y = null; const gy = cmbH(0, 20); const miss = (dx, d) => { sim.setDiff(d); b.hp = 100; b.alive = true; sim.shoot(dx, 5, 0, 1, 80, 1.6, undefined, 1, 0, { y: gy + 1, sl: 0, k: 0 }); return b.hp < 100; };
  ok(miss(0.5, 'easy') && !miss(0.5, 'hard') && miss(0.25, 'hard') && !miss(0.7, 'easy'), 'hit zone: 0.5 m off the middle hits on easy, misses on hard; 0.7 m misses everywhere'); }
{ const sim = new CombatSim(3, 1), b = sim.bots[0]; b.x = 0; b.z = 20; b.y = null; b.stn = 2; sim.setDiff('easy'); const gy = cmbH(0, 20); sim.shoot(0, 5, 0, 1, 80, 1.6, undefined, 1, 0, { y: gy + 1.0, sl: 0, k: 0 }); ok(b.hp === 100, 'a bot lying down (0.6 m tall) is not hit at chest height'); }
// 2. behaviour over time: stand still in the open, then run around
const cnt = (diff, mover) => {
  const sim = new CombatSim(11, 8); sim.setDiff(diff); const sp = sim.L.spawns[5]; const P = { id: 1, x: sp.x, z: sp.z, y: undefined, hp: 100, alive: true, mv: 0, stn: 0 };
  const S = { hide: 0, crouch: 0, prone: 0, nades: 0, bangs: 0, dmg: 0, shots: 0, nan: 0 };
  for (const b of sim.bots) { b.x = sp.x + 10 + Math.random() * 20; b.z = sp.z + (Math.random() - 0.5) * 20; b.alert = 20; }
  for (let i = 0; i < 30 * 120; i++) { if (mover) { P.mv = 5; P.x += Math.sin(i / 60) * 0.1; } if (i % 90 === 0) { const bb = sim.bots[(i / 90) % 8 | 0]; if (bb.alive) sim.hurt(bb, 25, P.x, P.z, 1); } sim.tick(1 / 30, P); P.hp = 100;
    for (const b of sim.bots) { if (b.hide > 0) S.hide++; if (b.stn === 1) S.crouch++; if (b.stn === 2) S.prone++; if (!Number.isFinite(b.x) || !Number.isFinite(b.z)) S.nan++; }
    for (const e of sim.drain()) { if (e.k === 'nade') S.nades++; if (e.k === 'nbang') { S.bangs++; S.dmg += e.dmg; } if (e.k === 'shot') { S.shots++; } } }
  return S; };
const A = cnt('hard', false); console.log('standing still 2 min:', JSON.stringify(A));
const B = cnt('hard', true); console.log('running 2 min:', JSON.stringify(B));
ok(A.nan === 0 && B.nan === 0, 'no NaN positions');
ok(A.hide > 0 || B.hide > 0, 'bots hide behind cover');
ok(A.crouch > 0 && A.prone >= 0 && A.crouch + A.prone > 0, 'bots crouch / go prone');
ok(A.nades + B.nades > 0, 'bots throw grenades (' + (A.nades + B.nades) + ')');
console.log(bad ? 'FAILED ' + bad : 'ALL OK'); process.exit(bad ? 1 : 0);
