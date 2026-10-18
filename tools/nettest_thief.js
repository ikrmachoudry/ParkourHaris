// two players through the real server: pick THIEF CHASE, start, both get the story broadcast; a player 'driving' next to the thief keeps him alive
import WebSocket from 'ws';
const URL = 'ws://localhost:' + (process.env.PORT || 3999) + '/ws';
const mk = () => new Promise((res) => { const ws = new WebSocket(URL); const q = []; ws.msgs = q; ws.on('message', (d) => q.push(JSON.parse(d))); ws.on('open', () => res(ws)); });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const last = (ws, t) => [...ws.msgs].reverse().find((m) => m.t === t);
const S = (ws, o) => ws.send(JSON.stringify(o));
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const a = await mk(), b = await mk();
S(a, { t: 'create', name: 'A', char: 0 }); await wait(150);
const code = last(a, 'joined').code; S(b, { t: 'join', code, name: 'B', char: 1 }); await wait(100);
S(a, { t: 'level', level: 0 }); await wait(80); S(a, { t: 'start' }); await wait(100);
const go = last(b, 'go'); await wait(go.t0 - Date.now() + 200);
S(a, { t: 'm_in', on: true }); S(b, { t: 'm_in', on: true }); await wait(100);
S(b, { t: 'm_pick', mission: 'thief' }); await wait(100);
ok(last(a, 'm_lobby').mission === 'thief' && last(b, 'm_lobby').mission === 'thief', 'both see THIEF CHASE picked');
S(a, { t: 'm_start' }); await wait(150);
ok(last(a, 'm_go') && last(a, 'm_go').mission === 'thief' && last(b, 'm_go').members.length === 2, 'mission starts for both');
const bits = (i) => ((i & 15) << 9) | (((i >> 4) & 1) << 24);
// both sit in police car 24 (A drives, B passenger) and stay close to the thief
let t0 = Date.now();
while (Date.now() - t0 < 12000) {
  const th = last(a, 'm_th'); const c = th ? th.c : [30, 63, 0];
  const x = c[0] - 8, z = c[1];
  S(a, { t: 's', x, y: 0.4, z, r: 0, a: 256 | bits(24), sp: 10, ts: Date.now(), rs: 0 });
  S(b, { t: 's', x, y: 0.4, z, r: 0, a: 33554432 | bits(24), sp: 10, ts: Date.now(), rs: 0 });
  await wait(60);
}
const th = last(a, 'm_th');
ok(th && th.st === 'drive1' && last(b, 'm_th'), 'the director runs on the server and both players receive the story (' + (th && th.st) + ')');
ok(th && th.c[3] > 5, 'the thief car is moving (' + (th && th.c[3]) + ' m/s)');
ok(last(a, 'm_ev') && last(a, 'm_ev').k === 'chase', 'story events are broadcast');
S(b, { t: 'm_res', ok: false, why: 'x', round: 1 }); await wait(100); ok(!last(a, 'm_end'), 'a player cannot fail the thief mission');
console.log(fails ? 'FAILED' : 'THIEF NET OK'); process.exit(fails ? 1 : 0);
