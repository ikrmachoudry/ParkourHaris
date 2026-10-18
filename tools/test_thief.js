// the THIEF CHASE director: route sanity + a full scripted playthrough (and the failure cases)
import { ThiefDirector, buildRoute, routeAt, carIdxOf } from '../public/js/thief.js';
import { GT, CHASE, POLICE, gtaH } from '../public/js/gta.js';
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const R = buildRoute();
console.log('route: points', R.n, 'length', R.total.toFixed(0), 'm, first stop at', R.sA.toFixed(0), 'm');
ok(R.total > 1300 && R.total < 2200, 'route length is sensible (' + R.total.toFixed(0) + ' m)');
// every city point lies on an avenue (inside the 6.5 m road half-width + the rounded bends)
let worst = 0; for (const p of R.pts) { if (Math.abs(p.x) > 126 || Math.abs(p.z) > 126) continue; const d = Math.min(...GT.GRID.map((g) => Math.min(Math.abs(p.x - g), Math.abs(p.z - g)))); worst = Math.max(worst, d); }
ok(worst < 12.5, 'the city part stays on the avenues (worst off-centre ' + worst.toFixed(1) + ' m)');
const end = routeAt(R, R.total); ok(Math.hypot(end.x - CHASE.flee.x, end.z - CHASE.flee.z) < 9, 'the route ends on the summit plaza');
let maxClimb = 0; for (let i = 1; i < R.n; i++) maxClimb = Math.max(maxClimb, Math.abs(gtaH(R.pts[i].x, R.pts[i].z) - gtaH(R.pts[i - 1].x, R.pts[i - 1].z)) / 1.5);
ok(maxClimb < 0.2, 'the road is never steeper than 20% (max ' + (maxClimb * 100).toFixed(0) + '%)');
ok(R.vlim.every((v) => v >= 7 && v <= 40), 'speed limits are sane');

const bits = (i) => ((i & 15) << 9) | (((i >> 4) & 1) << 24);
function play(mode) {
  const stages = []; let result = null; const evs = [];
  const me = { x: 0, y: 0, z: 0, a: 0 };
  const dir = new ThiefDirector({ getP: (id) => (id === 1 ? me : null), onEnd: (okk, why) => { result = { ok: okk, why }; }, onEv: (k) => evs.push(k) });
  dir.start([1]);
  let t = 0, last = '';
  while (!result && t < 800) {
    const c = dir.car, th = dir.th;
    if (mode === 'chase') {
      if (dir.stage === 'flee') { me.x = th.x - 6; me.z = th.z; me.a = 0; if (dir.fleeT > 6) { me.x = th.x + 1; me.z = th.z; } }
      else if (dir.stage === 'cuffed') { me.x = th.x + 4; me.z = th.z; me.a = 256 | bits(24); }
      else if (dir.stage === 'deliver') { const Z = POLICE.zone; const k = Math.min(1, (dir.st) / 4); me.x = th.x + (Z.x - th.x) * k; me.z = th.z + (Z.z - th.z) * k; me.a = 256 | bits(24); if (dir.st > 4) { me.x = Z.x; me.z = Z.z; } }
      else { me.x = c.x - 10; me.z = c.z; me.a = 256 | bits(24); }
    } else if (mode === 'far') { me.x = 500; me.z = 500; me.a = 0; }
    else if (mode === 'idle-summit') { if (dir.stage === 'flee') { me.x = 900; me.z = 900; } else { me.x = c.x - 10; me.z = c.z; me.a = 256 | bits(24); } }
    me.y = gtaH(me.x, me.z);
    dir.tick(0.1); t += 0.1;
    if (dir.stage !== last) { stages.push(dir.stage + '@' + t.toFixed(0)); last = dir.stage; }
  }
  return { result, stages, evs, t, dir };
}
let r = play('chase');
console.log('timeline:', r.stages.join(' '));
ok(r.result && r.result.ok, 'a normal playthrough ends in MISSION PASSED (after ' + r.t.toFixed(0) + ' s)');
ok(['rob', 'drive1', 'waitA', 'trunk', 'drive2', 'summit', 'flee', 'cuffed', 'deliver', 'done'].every((s, i) => r.stages[i] && r.stages[i].startsWith(s)), 'all stages run in order');
ok(r.evs.includes('gun') && r.evs.includes('arrest') && r.evs.includes('loaded'), 'story events fire (gun, arrest, loaded)');
ok(r.t > 90 && r.t < 330, 'a good run takes a few minutes (' + r.t.toFixed(0) + ' s)');
r = play('far'); ok(r.result && !r.result.ok && r.result.why === 'lost', 'nobody near for 12 s: the thief is lost');
r = play('idle-summit'); ok(r.result && !r.result.ok && r.result.why === 'escaped', 'nobody catches him on the summit: he escapes (' + r.t.toFixed(0) + ' s)');
// pacing: a player far behind makes him slow down (never out of reach), a player close keeps him fast
{ const me = { x: 0, y: 0, z: 0, a: 0 }, dir = new ThiefDirector({ getP: () => me }); dir.start([1]); let t = 0; while (dir.stage !== 'drive1' && t < 30) { dir.tick(0.1); t += 0.1; }
  let vNear = 0; for (let i = 0; i < 100 && dir.stage === 'drive1'; i++) { me.x = dir.car.x - 10; me.z = dir.car.z; dir.tick(0.1); vNear = Math.max(vNear, dir.v); }
  while (dir.stage !== 'drive2' && t < 200) { me.x = dir.car.x - 10; me.z = dir.car.z; dir.tick(0.1); t += 0.1; }
  for (let i = 0; i < 200; i++) { me.x = dir.car.x - 160; me.z = dir.car.z; dir.tick(0.1); } const vFar = dir.v;
  ok(vNear > 18 && vFar < 12, 'he slows when left behind (' + vNear.toFixed(1) + ' -> ' + vFar.toFixed(1) + ' m/s)'); }
console.log(fails ? 'THIEF: FAILURES' : 'THIEF OK'); process.exit(fails ? 1 : 0);
