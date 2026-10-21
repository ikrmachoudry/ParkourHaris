// SNIPE THE TRUCK: the director plays the whole story with scripted players (no browser)
import { SnipeDirector, snipeRoute, snipeAt, ZONES, TRUCK_IDX, snipeRole, snipePaths, SNIPE_BRIEF_MS } from '../public/js/snipe.js';
import { SNIPE, gtaH } from '../public/js/gta.js';
let fails = 0; const ok = (c, m) => { if (!c) { fails++; console.log('FAIL', m); } else console.log('PASS', m); };
const R = snipeRoute();
ok(R.total > 400 && R.total < 600, 'route length ' + R.total.toFixed(0));
ok(R.sBail < R.sTun0 && R.sTun0 < R.sTun1 && R.sTun1 < R.sStop + 5, 'route order: bail < tunnel entry < exit');
{ const a = snipeAt(R, R.sBail); ok(Math.abs(a.z - SNIPE.bail.z) < 3 && Math.abs(a.x - 63.25) < 0.5, 'bail point on the road ' + a.x.toFixed(1) + ',' + a.z.toFixed(1)); }
for (let s = 0; s < R.total; s += 5) { const q = snipeAt(R, s); if (Math.abs(gtaH(q.x, q.z)) > 0.9) { ok(false, 'route is level at s=' + s + ' h=' + gtaH(q.x, q.z)); break; } }
ok(snipeRole(0, 1) === 'sniper' && snipeRole(0, 2) === 'truck' && snipeRole(1, 2) === 'sniper' && snipeRole(2, 3) === 'blocker' && snipeRole(3, 4) === 'blocker', 'roles');
ok(snipePaths('truck', 0).lines[0].pts.length > 20 && snipePaths('sniper', 1).marks.length === 1 && snipePaths('blocker', 3).marks[0].x === ZONES[1].x, 'map lines');

// opts: n players; fn(world, t, dir) decides what everybody does
function play(n, opt = {}) {
  const evs = [], P = {}; let res = null;
  const D = new SnipeDirector({ getP: (id) => P[id] || null, onEv: (k, x) => evs.push([k, x, +D.T.toFixed(1)]), onEnd: (okk, why) => { res = { ok: okk, why, T: D.T }; } });
  const ids = [...Array(n).keys()].map((i) => 100 + i); D.start(ids, opt.solo);
  const truckId = n >= 2 || opt.solo === 'truck' ? ids[0] : -1, sniperId = opt.solo === 'truck' ? -1 : n >= 2 ? ids[1] : ids[0];
  const spd = opt.blockSpeed || 26, dt = 0.1; let hitAt = null, bailed = false;
  for (let t = 0; t < 330 && !res; t += dt) {
    const tk = D.tk;
    // the tanker's driver chases the thief 30 m behind and jumps out at the red line (opt.early / opt.never change that)
    if (truckId >= 0) {
      if (!bailed) { const s = Math.max(0, D.s - 30), q = snipeAt(R, s); const out = (opt.early && q.z > 120) || (!opt.never && q.z > SNIPE.bail.z + 6);
        if (out) { bailed = true; delete P[truckId]; P[truckId] = { x: q.x + 3, y: 0, z: q.z, a: 0 }; } else if (D.T > 1) P[truckId] = { x: q.x, y: 0, z: q.z, a: 256 | ((TRUCK_IDX & 15) << 9) | (((TRUCK_IDX >> 4) & 1) << 24) }; }
    }
    // the sniper waits on the pad and shoots a second after the tanker is rolling on its own
    if (sniperId >= 0) P[sniperId] = { x: SNIPE.pad.x, y: 18, z: SNIPE.pad.z, a: 0 };
    if (sniperId >= 0 && !opt.noShot && D.tk.mode === 2 && hitAt === null) hitAt = D.T + (opt.shotDelay || 1.5);
    if (hitAt !== null && D.T >= hitAt && D.tk.mode === 2) { const r = D.hit(sniperId, 1); if (r) hitAt = 1e9; }
    // the blockers need `arrive` seconds to get there
    ids.slice(2).forEach((id, i) => { P[id] = D.T > (opt.arrive || 24) + (opt.late || 0) ? { x: ZONES[i].x, y: 0, z: ZONES[i].z, a: 256 } : { x: 130, y: 0, z: 100, a: 256 }; });
    D.tick(dt);
  }
  return { res, evs, D };
}
// everybody must be in position: the thief waits at the gate for a sniper who is still far away, then goes on when he arrives
{ const P = { 1: { x: 130, y: 0, z: 100, a: 0 } }; let res = null; const evs = []; const D = new SnipeDirector({ getP: (id) => P[id] || null, onEv: (k) => evs.push(k), onEnd: (o, w) => { res = { o, w }; } }); D.start([1]);
  for (let i = 0; i < 900; i++) D.tick(0.1);   // 90 s with the sniper still on the avenue
  ok(!res && D.s <= R.sGate + 0.01 && D.s > R.sGate - 12 && evs.includes('hold'), 'the thief waits at the gate for a sniper who is still driving (s ' + D.s.toFixed(0) + ' / ' + R.sGate.toFixed(0) + ')');
  P[1] = { x: SNIPE.pad.x, y: 18, z: SNIPE.pad.z, a: 0 }; for (let i = 0; i < 80; i++) D.tick(0.1); ok(D.s > R.sGate + 10, 'he drives on once the sniper is at the pad'); }
{ const P = { 1: { x: 130, y: 0, z: 100, a: 0 } }; const D = new SnipeDirector({ getP: (id) => P[id] || null, onEv() {}, onEnd() {} }); D.start([1]); for (let i = 0; i < 1800; i++) D.tick(0.1); ok(D.s > R.sGate + 10 || D.ended, 'the wait is limited (does not hang forever)'); }
// a shot tanker keeps rolling, burning, into the tunnel and comes to rest inside it
{ const r = play(2, { shotDelay: 20 }); const D = r.D; ok(D.tk.mode === 4 && D.tk.z > 428 && D.tk.z < 446 && D.tk.v < 0.5, 'a shot tanker rolls on into the tunnel and stops inside (z ' + D.tk.z.toFixed(1) + ' mode ' + D.tk.mode + ' v ' + D.tk.v.toFixed(2) + ')'); }
{ const D = new SnipeDirector({ getP: () => null, onEv() {}, onEnd() {} }); D.start([1]); D.stage = 'chase'; D.tk.mode = 5; ok(D.hit(1, 6) === true && D.tk.mode === 3, 'a bullet still counts while the tanker is stopped in the tunnel mouth'); }
const names = (r) => r.evs.map((e) => e[0]).join(',');
for (const n of [1, 2, 3, 4]) {
  const r = play(n); ok(r.res && r.res.ok, n + ' players: mission passed (' + (r.res && (r.res.why || 'ok')) + ' at ' + (r.res && r.res.T.toFixed(0)) + ' s)');
  if (n === 4) console.log('  events', names(r), 'bail z', r.D.tk.bailZ && r.D.tk.bailZ.toFixed(0));
}
{ const r = play(2, { noShot: true }); ok(r.res && !r.res.ok && r.res.why === 'missed', 'tanker not shot -> fails (missed): ' + JSON.stringify(r.res)); }
{ const r = play(3, { late: 40 }); ok(r.res && r.res.ok, 'blocker 40 s late: the thief waits for him and the mission still passes: ' + JSON.stringify(r.res)); }
{ const r = play(3, { late: 200 }); ok(r.res && !r.res.ok && r.res.why === 'escaped', 'blocker hopelessly late (the wait runs out) -> the thief escapes: ' + JSON.stringify(r.res)); }
{ const r = play(2, { early: true }); ok(r.res && !r.res.ok && r.res.why === 'early', 'driver jumps out too early -> fails: ' + JSON.stringify(r.res)); }
{ const r = play(2, { never: true }); ok(r.res && !r.res.ok && r.res.why === 'late', 'driver never jumps out -> fails (late): ' + JSON.stringify(r.res)); }
{ const r = play(1); const e = names(r); ok(/chase.*bail.*boom.*trap|chase.*trap.*bail.*boom|chase.*bail.*trap.*boom/.test(e) || /boom/.test(e), 'solo events: ' + e); }
{ const r = play(1, { solo: 'truck' }); ok(r.res && r.res.ok && /boom/.test(names(r)), 'solo TRUCK DRIVER: the AI sniper shoots and the mission passes: ' + JSON.stringify(r.res)); }
{ const r = play(1, { solo: 'truck', never: true }); ok(r.res && !r.res.ok && r.res.why === 'late', 'solo truck driver who never jumps out fails (late): ' + JSON.stringify(r.res)); }
{ const r = play(2, { shotDelay: 40 }); ok(r.res && !r.res.ok, 'sniper far too slow fails: ' + JSON.stringify(r.res)); }
// the explosion only counts after the driver is out
{ const D = new SnipeDirector({ getP: () => null, onEv() {}, onEnd() {} }); D.start([1, 2]); for (let i = 0; i < 100; i++) D.tick(0.1); ok(D.hit(2, 1) === false, 'no hit before the driver is out'); }
{ const D = new SnipeDirector({ getP: () => null, onEv() {}, onEnd() {} }); D.start([1]); D.tick(0.1); const sn = D.snap(); ok(sn.k.length === 6 && sn.c.length === 5 && sn.p.length === 6, 'snapshot shape'); }
// the hub: pick the mission in the lobby, start it, the director's snapshots flow
{ const { MissionHub } = await import('../public/js/mission.js'); const msgs = []; const hub = new MissionHub((m) => msgs.push(m), { getP: () => ({ x: 0, y: 0, z: 0, a: 0 }) });
  hub.lobby(1, true, [1]); hub.pick(1, 'snipe', [1]); ok(hub.mission === 'snipe', 'the lobby accepts SNIPE THE TRUCK'); ok(hub.start(1, [1]), 'start'); await new Promise((r) => setTimeout(r, 450));
  const go = msgs.find((m) => m.t === 'm_go'), sn = msgs.filter((m) => m.t === 'm_sn'); ok(go && go.mission === 'snipe' && go.briefMs === SNIPE_BRIEF_MS && go.members.length === 1, 'm_go for the snipe mission'); ok(sn.length >= 3 && sn[0].k && sn[0].c, 'the hub broadcasts m_sn snapshots (' + sn.length + ')'); hub.reset(); }
console.log(fails ? 'SNIPE FAILED ' + fails : 'SNIPE OK'); process.exit(fails ? 1 : 0);
