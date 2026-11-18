// v563: the PUBG damage model (numbers from the PUBG wiki / pubgstatistics): base x falloff x zone, armor, bot damage, online bal path
import { GUNS, gunDamage, gunFo, zoneOf, CombatSim } from '../public/js/combat.js';
let bad = 0; const ok = (c, m) => { if (!c) { bad++; console.log('FAIL', m); } else console.log('ok  ', m); };
const near = (a, b, e = 0.6) => Math.abs(a - b) <= e;
ok(near(gunDamage('ak', 10, 0, 1.0, 1.75), 48 * 1.0), 'AKM chest-less body 48 @10m');
ok(near(gunDamage('ak', 10, 0, 1.4, 1.75), 48 * 1.1), 'AKM chest 52.8');
ok(near(gunDamage('ak', 10, 1, 1.6, 1.75), 48 * 2.35), 'AKM head 112.8');
ok(near(gunDamage('ak', 100, 0, 1.0, 1.75), 45.5, 0.2), 'AKM 100 m = 45.5');
ok(near(gunDamage('ak', 300, 0, 1.0, 1.75), 36, 0.2), 'AKM 300 m = 36');
ok(near(gunDamage('m4', 10, 0, 1.0, 1.75), 40), 'M416 40');
ok(near(gunDamage('m4', 10, 1, 1.6, 1.75), 94, 0.5), 'M416 head 94');
ok(near(gunDamage('sniper', 50, 1, 1.6, 1.75), 79 * 2.5, 1.5), 'Kar98k head ~197');
ok(gunDamage('ak', 10, 2, 0.5, 1.75) < gunDamage('ak', 10, 0, 1.0, 1.75), 'limb < body');
ok(zoneOf(1.6, 1.75) === 1 && zoneOf(1.0, 1.75) === 0 && zoneOf(0.5, 1.75) === 2, 'zones head/body/limb');
// bot takes the weapon-id damage (not the old dmg*34), at its height
const sim = new CombatSim(5, 1); sim.diff = 'easy'; const b = sim.bots[0]; b.hp = 1000; b.x = 0; b.z = -20; b.y = 0; b.state = 'idle'; b.vx = b.vz = 0;
const dmgOf = (w, y) => { b.hp = 1000; const bal = { y, sl: 0, k: 0 }; sim.shoot(0, 0, 0, -1, 80, 1.6, y, undefined, undefined, bal, w); return 1000 - b.hp; };
const body = dmgOf('ak', 1.0), head = dmgOf('ak', 1.7);
console.log('bot AK body', body, 'head', head, '(easy diff multiplier applies)');
ok(body > 0 && head > body * 2, 'bot: head > 2x body, both hit');
ok(sim.bulletDmg('ak', 1.6, 10, false, 1.0, 1.75, { bm: 1, hm: 1 }) === 48, 'bulletDmg ak = 48');
console.log(bad ? 'FAILED ' + bad : 'ALL OK'); process.exit(bad ? 1 : 0);
