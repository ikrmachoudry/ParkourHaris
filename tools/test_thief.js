// the THIEF CHASE director: route sanity + a full scripted playthrough (and the failure cases)
import { ThiefDirector, buildRoute, routeAt, carIdxOf } from '../public/js/thief.js';
import { GT, CHASE, POLICE, SUMMIT, gtaH } from '../public/js/gta.js';
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
  const stages = []; let result = null; const evs = [], shots = [];
  const me = { x: 0, y: 0, z: 0, a: 0 };
  const dir = new ThiefDirector({ getP: (id) => (id === 1 ? me : null), onEnd: (okk, why) => { result = { ok: okk, why }; }, onEv: (k, x) => { evs.push(k); if (k === 'shot') shots.push(x); } });
  dir.start([1]);
  let t = 0, last = '', hitsDone = 0, shotT = 0;
  while (!result && t < 800) {
    const c = dir.car, th = dir.th;
    if (mode === 'chase') {
      if (dir.stage === 'ambush' || dir.stage === 'down') { me.x = th.x - 20; me.z = th.z; me.a = 0;   // a player on foot 20 m away, shooting whenever he is out in the open
        shotT += 0.1; if (dir.amb.ex > 0.5 && shotT > 0.3) { shotT = 0; if (dir.hit(1, 1.2)) hitsDone++; } }
      else { me.x = c.x - 10; me.z = c.z; me.a = 256 | bits(24); }
    } else if (mode === 'far') { me.x = 500; me.z = 500; me.a = 0; }
    else if (mode === 'idle-summit') { if (dir.stage === 'ambush') { me.x = 900; me.z = 900; } else { me.x = c.x - 10; me.z = c.z; me.a = 256 | bits(24); } }
    me.y = gtaH(me.x, me.z);
    dir.tick(0.1); t += 0.1;
    if (dir.stage !== last) { stages.push(dir.stage + '@' + t.toFixed(0)); last = dir.stage; }
  }
  return { result, stages, evs, shots, t, dir, hitsDone };
}
let r = play('chase');
console.log('timeline:', r.stages.join(' '));
ok(r.result && r.result.ok, 'a normal playthrough ends in MISSION PASSED (after ' + r.t.toFixed(0) + ' s)');
ok(['rob', 'drive1', 'waitA', 'trunk', 'drive2', 'summit', 'ambush', 'down'].every((s, i) => r.stages[i] && r.stages[i].startsWith(s)), 'all stages run in order');
ok(r.evs.includes('gun') && r.evs.includes('ambush') && r.evs.includes('shot') && r.evs.includes('down'), 'story events fire (gun, ambush, shot, down)');
ok(r.hitsDone >= 3 && r.hitsDone <= 6, 'it takes 3-6 pistol hits to drop him (' + r.hitsDone + ')');
ok(r.shots.length >= 1 && r.shots.every((q) => q.i === 1 && (q.h === 0 || q.h === 1) && Number.isFinite(q.x) && Number.isFinite(q.z)), 'he shoots at the player (' + r.shots.length + ' shots, ' + r.shots.filter((q) => q.h).length + ' hit)');
ok(r.t > 90 && r.t < 400, 'a good run takes a few minutes (' + r.t.toFixed(0) + ' s)');
// cover: while hiding he stands behind a tree/rock (the cover is between him and the player) and cannot be hurt
{ const me = { x: 0, y: 0, z: 0, a: 0 }, dir = new ThiefDirector({ getP: () => me }); dir.start([1]); let t = 0;
  while (dir.stage !== 'ambush' && t < 400) { me.x = dir.car.x - 10; me.z = dir.car.z; me.a = 256 | bits(24); dir.tick(0.1); t += 0.1; }
  let behind = 0, hid = 0, hurtWhileHidden = 0, exposed = 0;
  for (let i = 0; i < 900 && dir.stage === 'ambush'; i++) { me.x = SUMMIT.x - 4; me.z = SUMMIT.z + 30; dir.tick(0.1);
    if (dir.amb.phase === 'hide') { hid++; const cv = SUMMIT.covers[dir.amb.cover], a = { x: me.x - cv.x, z: me.z - cv.z }, b = { x: dir.th.x - cv.x, z: dir.th.z - cv.z }; if (a.x * b.x + a.z * b.z < 0) behind++; if (dir.hit(1, 1)) hurtWhileHidden++; }
    if (dir.amb.ex > 0.5) exposed++; }
  ok(hid > 20 && behind / hid > 0.9, 'when hiding he is on the far side of the cover (' + behind + '/' + hid + ')');
  ok(hurtWhileHidden === 0, 'bullets do nothing while he is behind cover');
  ok(exposed > 20, 'he pops out into the open now and then (' + exposed + ' ticks)'); }
// a real shot (the client's maths: cover blocks the bullet, a 0.7 m tube around him is a hit) must land whenever he is out in the open, from any side
{ for (const [px, pz, name] of [[SUMMIT.x - 4, SUMMIT.z + 30, 'south'], [SUMMIT.x + 20, SUMMIT.z - 20, 'north-east'], [SUMMIT.x, SUMMIT.z - 18, 'north'], [SUMMIT.x - 14, SUMMIT.z - 9, 'close']]) {
  const me = { x: 0, y: 0, z: 0, a: 0 }, dir = new ThiefDirector({ getP: () => me }); dir.start([1]); let t = 0;
  while (dir.stage !== 'ambush' && t < 400) { me.x = dir.car.x - 10; me.z = dir.car.z; me.a = 256 | bits(24); dir.tick(0.1); t += 0.1; }
  let exp = 0, land = 0, blockedN = 0;
  for (let i = 0; i < 1500 && dir.stage === 'ambush'; i++) { me.x = px; me.z = pz; dir.tick(0.1);
    if (dir.amb.ex > 0.5) { exp++; const th = dir.th, dx = th.x - px, dz = th.z - pz, len = Math.hypot(dx, dz), fx = dx / len, fz = dz / len; let stop = len + 1;
      for (const cv of SUMMIT.covers) { const ax = cv.x - px, az = cv.z - pz, a2 = ax * fx + az * fz, pr = Math.abs(-ax * fz + az * fx); if (a2 > 0.3 && a2 < stop && pr < cv.r * 0.8) stop = a2 - cv.r * 0.4; }
      if (len < stop && len > 0.8) { land++; dir.hit(1, 1); } else blockedN++; } }
  ok(exp >= 4 && land / exp > 0.9, 'shots at the exposed thief land from the ' + name + ' (' + land + '/' + exp + ', ' + blockedN + ' blocked by cover); he ends ' + dir.stage); } }
// the cover list sits on the flat summit
ok(SUMMIT.covers.length >= 6 && SUMMIT.covers.every((c) => Math.hypot(c.x - SUMMIT.x, c.z - SUMMIT.z) < 16 && Math.abs(gtaH(c.x, c.z) - gtaH(SUMMIT.x, SUMMIT.z)) < 0.2), 'trees and boulders stand on the flat meadow');
r = play('far'); ok(r.result && !r.result.ok && r.result.why === 'lost', 'nobody near for 12 s: the thief is lost');
r = play('idle-summit'); ok(r.result && !r.result.ok && r.result.why === 'escaped', 'nobody shoots him up there: he escapes (' + r.t.toFixed(0) + ' s)');
// pacing: a player far behind makes him slow down (never out of reach), a player close keeps him fast
{ const me = { x: 0, y: 0, z: 0, a: 0 }, dir = new ThiefDirector({ getP: () => me }); dir.start([1]); let t = 0; while (dir.stage !== 'drive1' && t < 30) { dir.tick(0.1); t += 0.1; }
  let vNear = 0; for (let i = 0; i < 100 && dir.stage === 'drive1'; i++) { me.x = dir.car.x - 10; me.z = dir.car.z; dir.tick(0.1); vNear = Math.max(vNear, dir.v); }
  while (dir.stage !== 'drive2' && t < 200) { me.x = dir.car.x - 10; me.z = dir.car.z; dir.tick(0.1); t += 0.1; }
  for (let i = 0; i < 200; i++) { me.x = dir.car.x - 160; me.z = dir.car.z; dir.tick(0.1); } const vFar = dir.v;
  ok(vNear > 18 && vFar < 12, 'he slows when left behind (' + vNear.toFixed(1) + ' -> ' + vFar.toFixed(1) + ' m/s)'); }
console.log(fails ? 'THIEF: FAILURES' : 'THIEF OK'); process.exit(fails ? 1 : 0);
