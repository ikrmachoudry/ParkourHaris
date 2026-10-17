// Server-side Jungle Quest with 3 players: circles need ALL 3, boulder event, hidden beast, team hits, gate event, dragon, victory.
import WebSocket from 'ws';
import { questLayout, circleXs } from '../public/js/quest.js';
const URL = 'ws://localhost:' + (process.env.PORT || 3998) + '/ws';
const mk = () => new Promise((res) => { const ws = new WebSocket(URL); const q = []; ws.msgs = q; ws.on('message', (d) => q.push(JSON.parse(d))); ws.on('open', () => res(ws)); });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const last = (ws, t) => [...ws.msgs].reverse().find((m) => m.t === t);
const has = (ws, f) => ws.msgs.some(f);
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const L = questLayout();
const P = [await mk(), await mk(), await mk()];
P[0].send(JSON.stringify({ t: 'create', name: 'A', char: 0 })); await wait(150);
const code = last(P[0], 'joined').code;
P[1].send(JSON.stringify({ t: 'join', code, name: 'B', char: 1 })); P[2].send(JSON.stringify({ t: 'join', code, name: 'C', char: 2 })); await wait(150);
const ids = P.map((p) => last(p, 'joined').id);
P[0].send(JSON.stringify({ t: 'level', level: 2 })); await wait(60); P[0].send(JSON.stringify({ t: 'start' })); await wait(120);
const go = last(P[1], 'go'); ok(go && go.level === 2 && go.seed > 0, 'quest starts with a maze seed (' + (go && go.seed) + ')');
await wait(go.t0 - Date.now() + 400);
const an = last(P[0], 'an'); ok(an && an.a.length === 5 && an.a.every((x) => x[5] === 8), 'server streams 5 hidden beasts');
const pos = (i, x, y, z) => P[i].send(JSON.stringify({ t: 's', x, y, z, r: 0, a: 1, sp: 0, ts: Date.now(), rs: 0 }));
const place = async (zc, k, ms) => { const xs = circleXs(3); for (let t = 0; t < ms; t += 100) { for (let i = 0; i < 3; i++) pos(i, i < k ? xs[i] : 0, 0, i < k ? zc : 5); await wait(100); } };
const C = L.chapters[0];
await place(C.plazaZ, 2, 1800);
ok(last(P[0], 'q').ph === 0 && last(P[0], 'q').n === 3 && last(P[0], 'q').occ.join() === '1,1,0', 'only 2 of 3 on circles: nothing happens, occupancy shown');
ok(!has(P[0], (m) => m.t === 'qev'), 'no event yet');
await place(C.plazaZ, 3, 1800);
ok(has(P[2], (m) => m.t === 'qev' && m.k === 'boulder' && m.ch === 0), 'all 3 on circles -> boulder event to everyone');
const q1 = last(P[1], 'q'); ok(q1.ph === 1, 'phase = beast');
ok(last(P[0], 'an').a[0][5] !== 8, 'coyote revealed');
// players 1,2,3 hit alternately (5 hits total)
const beastPos = () => last(P[0], 'an').a[0];
for (let k = 0; k < 5; k++) { const i = k % 3, bp = beastPos(); for (let j = 0; j < 3; j++) pos(j, bp[1], 0, bp[3] + 2.4); await wait(80); P[i].send(JSON.stringify({ t: 'ahit', id: 0 })); await wait(460); }
await wait(200);
ok(has(P[0], (m) => m.t === 'aev' && m.k === 'tame' && m.id === 0), 'the 5th team hit tames the coyote');
ok(has(P[1], (m) => m.t === 'qev' && m.k === 'gate' && m.ch === 0), 'gate event after the beast is defeated');
ok(last(P[2], 'q').ch === 1 && last(P[2], 'q').ph === 0, 'next chapter begins');
// hits on a still-hidden beast are ignored
const hp1 = last(P[0], 'an').a[1][8]; P[0].send(JSON.stringify({ t: 'ahit', id: 1 })); await wait(150); ok(last(P[0], 'an').a[1][8] === hp1, 'hidden beast cannot be hit');
P.forEach((p) => p.close()); await wait(100);
console.log(fails ? 'FAILED' : 'QUEST NET OK'); process.exit(fails ? 1 : 0);
