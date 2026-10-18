// Server-side Jungle Hunt with 2 players: wave on entering the arena, gun kills + tracer relay, gate, plates need BOTH, door event, lift weights.
import WebSocket from 'ws';
import { huntLayout, plateXs } from '../public/js/hunt.js';
const URL = 'ws://localhost:' + (process.env.PORT || 3998) + '/ws';
const mk = () => new Promise((res) => { const ws = new WebSocket(URL); const q = []; ws.msgs = q; ws.on('message', (d) => q.push(JSON.parse(d))); ws.on('open', () => res(ws)); });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const last = (ws, t) => [...ws.msgs].reverse().find((m) => m.t === t);
const has = (ws, f) => ws.msgs.some(f);
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const L = huntLayout(), C = L.chapters[0];
const P = [await mk(), await mk()];
P[0].send(JSON.stringify({ t: 'create', name: 'A', char: 0 })); await wait(150);
const code = last(P[0], 'joined').code;
P[1].send(JSON.stringify({ t: 'join', code, name: 'B', char: 1 })); await wait(150);
P[0].send(JSON.stringify({ t: 'level', level: 6 })); await wait(60); P[0].send(JSON.stringify({ t: 'start' })); await wait(120);
const go = last(P[1], 'go'); ok(go && go.level === 6, 'hunt starts');
await wait(go.t0 - Date.now() + 400);
const an0 = last(P[0], 'an'); ok(an0 && an0.a.length === 12 && an0.a.every((x) => x[5] === 8), 'server streams 12 hidden beasts');
const pos = (i, x, y, z) => P[i].send(JSON.stringify({ t: 's', x, y, z, r: 0, a: 1, sp: 0, ts: Date.now(), rs: 0 }));
const hold = async (f, ms) => { for (let t = 0; t < ms; t += 100) { f(); await wait(100); } };
await hold(() => { pos(0, 0, 0, C.trigZ - 2); pos(1, 2, 0, C.trigZ - 2); }, 500);
ok(has(P[1], (m) => m.t === 'hev' && m.k === 'wave' && m.n === 4), 'entering the arena -> wave of 4 beasts for 2 players');
const live = () => last(P[0], 'an').a.filter((x) => x[0] < 6 && x[5] !== 8);
ok(live().length === 4, 'four beasts are awake');
// shoot every beast from player 0 (stand near them); player 1 should see tracers
let n = 0;
while (live().length && n++ < 120) {
  const t = live()[0]; pos(0, t[1], 0, t[3] + 10); pos(1, 0, 0, C.trigZ - 2);
  P[0].send(JSON.stringify({ t: 'shoot', id: t[0], ox: t[1], oy: 1, oz: t[3] + 9, tx: t[1], ty: 1.5, tz: t[3] })); await wait(170);
}
ok(live().length === 0, `all beasts shot dead (${n} shots)`);
ok(has(P[1], (m) => m.t === 'aev' && m.k === 'kill'), 'kill events reach the other player');
ok(has(P[1], (m) => m.t === 'shot' && m.pid === last(P[0], 'joined').id), 'tracers are relayed to the other player');
ok(!has(P[0], (m) => m.t === 'shot'), 'shooter does not get their own tracer back');
await wait(200);
ok(has(P[0], (m) => m.t === 'hev' && m.k === 'gate'), 'gate event');
ok(last(P[0], 'h').ph === 2, 'machine phase');
// shooting a hidden beast is ignored
P[0].send(JSON.stringify({ t: 'shoot', id: 7, ox: 0, oy: 1, oz: 0, tx: 0, ty: 1, tz: -5 })); await wait(200);
ok(last(P[0], 'an').a[7][8] === last(P[0], 'an').a[7][8] && last(P[0], 'an').a[7][5] === 8, 'hidden beast cannot be shot');
// plates: both needed
const xs = plateXs(2);
await hold(() => { pos(0, xs[0], 0, C.machZ); pos(1, 0, 0, C.machZ + 14); }, 1800);
ok(!has(P[0], (m) => m.t === 'hev' && m.k === 'door'), 'one player on a plate: door stays shut');
ok(last(P[0], 'h').occ.join() === '1,0', 'occupancy shown');
await hold(() => { pos(0, xs[0], 0, C.machZ); pos(1, xs[1], 0, C.machZ); }, 1800);
ok(has(P[1], (m) => m.t === 'hev' && m.k === 'door'), 'both on plates -> door event');
await wait(3600);
ok(last(P[0], 'h').m[0][0] === 1 && last(P[0], 'h').m[0][1] === 1, 'door fully up and latched');
// a late joiner gets the state
const late = await mk(); late.send(JSON.stringify({ t: 'join', code, name: 'C', char: 2 })); await wait(300);
ok(has(late, (m) => m.t === 'h' && m.ch === 0), 'late joiner receives hunt state');
P.forEach((p) => p.close()); late.close(); await wait(100);
console.log(fails ? 'FAILED' : 'HUNT NET OK'); process.exit(fails ? 1 : 0);
