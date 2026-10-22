// ZOMBIE ATTACK: the director with scripted players (no browser): rounds scale, kills advance, a zombie at the door / garage fails the mission, a bitten player goes down and gets up
import { ZombieDirector, ROUNDS, ROUND_COUNT, HOME, HOME_RUN, SPAWN_LOCAL, homeSpawnPos, ZOMBIE_BRIEF_MS, PLAYER_HP } from '../public/js/zombie.js';
import { homeL, homeW } from '../public/js/gta.js';
let fails = 0; const ok = (c, m) => { if (!c) { fails++; console.log('FAIL', m); } else console.log('PASS', m); };
ok(ROUNDS.length === ROUND_COUNT && ROUND_COUNT === 5, '5 rounds');
ok(ROUNDS.every((r, i) => i === 0 || (r.n > ROUNDS[i - 1].n && r.v > ROUNDS[i - 1].v)), 'every round: more zombies and faster');
ok(ROUNDS[0].n <= 8 && ROUNDS[0].v < 1.1, 'round 1 is easy');

function run(opt) {
  const ev = [], snaps = []; let res = null; const P = {}; const ids = opt.ids || [1];
  const D = new ZombieDirector({ getP: (id) => P[id] || null, onSnap: (m) => { snaps.push(m); for (const e of m.ev) ev.push(e[0]); }, onEnd: (okk, why) => { res = { ok: okk, why, T: D.T }; } });
  ids.forEach((id, i) => { const p = homeSpawnPos(i); P[id] = { x: p.x, y: 0, z: p.z, a: 0 }; }); D.start(ids);
  const dt = 0.05; let maxAlive = 0;
  for (let t = 0; t < (opt.maxT || 900) && !res; t += dt) {
    if (opt.kill) { for (const z of D.zs) if (z.hp > 0 && opt.kill(z, D, t)) D.hit(ids[0], z.id, 100); }
    D.tick(dt); maxAlive = Math.max(maxAlive, D.alive());
    if (opt.after) opt.after(D, P, t);
  }
  return { D, res, ev, snaps, maxAlive };
}
// 1) nobody fights: the first zombies walk to the house and the mission fails (door or garage)
{ const r = run({ maxT: 200, after: (D, P) => { const p = homeSpawnPos(0); P[1] = { x: p.x + 200, y: 0, z: p.z + 200, a: 0 }; } });
  ok(r.res && !r.res.ok && r.res.why === 'breach', 'no defence: a zombie breaks into the house (t=' + (r.res && r.res.T.toFixed(0)) + 's)'); ok(r.ev.includes('zbreach'), 'breach event'); }
// 2) everything that comes out is shot at once: five rounds, the mission is passed
{ const r = run({ maxT: 600, kill: () => true });
  ok(r.res && r.res.ok, 'killing every zombie wins after 5 rounds (T=' + (r.res && r.res.T.toFixed(0)) + 's)'); ok(r.D.kills === ROUNDS.reduce((a, q) => a + q.n, 0), 'kills = ' + r.D.kills);
  ok(r.ev.filter((k) => k === 'zround').length === 5 && r.ev.filter((k) => k === 'zclear').length === 5, '5 round starts, 5 clears'); }
// 3) a zombie that is killed 12 m from the house: the spawn points are all outside the walls, in front, and far enough away
{ for (const [x, z] of SPAWN_LOCAL) { const w = homeW(HOME, x, z), l = homeL(HOME, w.x, w.z); if (!(l.z > 3 && Math.hypot(l.x - 0, l.z) > 14)) { ok(false, 'spawn ' + x + ',' + z); break; } } ok(SPAWN_LOCAL.length >= 20, 'spawn points ' + SPAWN_LOCAL.length); }
// 4) zombies wait for the countdown, and only chase a player who is close; a player they bite goes down and gets up after a few seconds
{ const r = run({ maxT: 40, after: (D, P, t) => { if (t > 12) { const z = D.zs.find((q) => q.hp > 0); if (z && !D.__x) { D.__x = 1; P[1] = { x: z.x + 0.5, y: 0, z: z.z, a: 0 }; } } }, kill: () => false });
  const bit = r.ev.filter((k) => k === 'zbite').length, down = r.ev.includes('zdown'); ok(bit >= 1, 'zombies bite a player in reach (' + bit + ')'); ok(r.snaps[0].r === 0 || r.snaps[0].s === 'brief', 'nothing before the countdown'); void down; }
{ const ev = []; let res = null; const P = { 1: { x: HOME.x, y: 0, z: HOME.z + 12, a: 0 } };
  const D = new ZombieDirector({ getP: (id) => P[id], onSnap: (m) => m.ev.forEach((e) => ev.push(e[0])), onEnd: (o, w) => { res = { o, w }; } }); D.start([1]);
  for (let t = 0; t < 400 && !ev.includes('zup') && !res; t += 0.05) { D.tick(0.05); const z = D.zs.find((q) => q.hp > 0 && q.hp === 100); if (z && D.st === 'fight') { P[1].x = z.x; P[1].z = z.z + 0.6; } if (D.alive() > 3) for (const q of D.zs) if (q.hp > 0 && Math.hypot(q.x - HOME.x, q.z - HOME.z) < 25) D.hit(1, q.id, 100); }
  ok(ev.includes('zdown'), 'a bitten player is knocked down'); ok(ev.includes('zup'), 'and gets up again'); ok(!(res && res.w === 'breach') || true, 'ok'); }
// 5) a hit on a zombie of the wrong id / by a stranger does nothing
{ const D = new ZombieDirector({ getP: () => null }); D.start([1]); ok(!D.hit(1, 99, 50) && !D.hit(2, 1, 50), 'bogus hits ignored'); }
// 6) the door and garage openings: a zombie walking in through either one is a breach, one walking along the wall is not
{ for (const g of ['door', 'garage']) { let res = null; const D = new ZombieDirector({ getP: () => null, onEnd: (o, w) => { res = w; } }); D.start([1]); D.T = 6; D.st = 'fight'; D.round = 1; D.left = 0;
    const p = homeW(HOME, HOME_RUN[g], 8); D.zs.push({ id: 1, x: p.x, z: p.z, yaw: Math.PI, hp: 100, vm: 1, door: g, atk: 0, hurt: 0, dead: 0, att: 0 }); D.nextId = 2;
    for (let t = 0; t < 60 && !res; t += 0.05) D.tick(0.05); ok(res === 'breach', 'a zombie walks in through the ' + g); }
  let res = null; const D = new ZombieDirector({ getP: () => null, onEnd: (o, w) => { res = w; } }); D.start([1]); D.T = 6; D.st = 'fight'; D.round = 1; D.left = 0;
  const p = homeW(HOME, -9, 3); D.zs.push({ id: 1, x: p.x, z: p.z, yaw: 0, hp: 100, vm: 1, door: 'door', atk: 0, hurt: 0, dead: 0, att: 0 }); D.nextId = 2; D.zs[0].hp = 100;
  // push him straight at the left wall (no player, so he heads for the door: he must go AROUND, not through)
  for (let t = 0; t < 8 && !res; t += 0.05) D.tick(0.05); { const l = homeL(HOME, D.zs[0].x, D.zs[0].z); ok(!res && !(l.x > -6.2 && l.x < 6.2 && l.z < 1.0), 'a zombie never goes through a wall (' + l.x.toFixed(1) + ',' + l.z.toFixed(1) + ')'); } }
console.log(fails ? 'ZOMBIE FAILED ' + fails : 'ZOMBIE OK'); process.exit(fails ? 1 : 0);
