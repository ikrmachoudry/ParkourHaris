// Server-side Age of War: 2 humans share resources, AI strength follows the player count, commands validated, snapshots stream.
import WebSocket from 'ws';
const URL = 'ws://localhost:' + (process.env.PORT || 3998) + '/ws';
const mk = () => new Promise((res) => { const ws = new WebSocket(URL); const q = []; ws.msgs = q; ws.on('message', (d) => q.push(JSON.parse(d))); ws.on('open', () => res(ws)); });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const last = (ws, t) => [...ws.msgs].reverse().find((m) => m.t === t);
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const P = [await mk(), await mk()];
P[0].send(JSON.stringify({ t: 'create', name: 'A', char: 0 })); await wait(150);
const code = last(P[0], 'joined').code;
P[1].send(JSON.stringify({ t: 'join', code, name: 'B', char: 1 })); await wait(150);
P[0].send(JSON.stringify({ t: 'level', level: 7 })); await wait(60); P[0].send(JSON.stringify({ t: 'start' })); await wait(120);
const go = last(P[1], 'go'); ok(go && go.level === 7, 'war starts for both');
await wait(go.t0 - Date.now() + 700);
let s = last(P[0], 'ws'); ok(s && s.n === 2 && s.u.length === 8 && s.b.length === 2, `snapshot: 2 humans, 4+4 villagers, 2 town centers (n=${s && s.n}, u=${s && s.u.length})`);
ok(s.na && s.na.length > 50, 'node amounts included');
const tc = s.b.find((b) => b[1] === 0);
P[1].send(JSON.stringify({ t: 'wc', c: { c: 'train', b: tc[0], kind: 'vil' } })); await wait(300);
s = last(P[0], 'ws'); ok(s.res[0] === 150, 'player B pays from the shared pool, player A sees it (food ' + s.res[0] + ')');
P[0].send(JSON.stringify({ t: 'wc', c: { c: 'train', b: tc[0], kind: 'constructor' } })); P[0].send(JSON.stringify({ t: 'wc', c: { c: 'place', kind: '__proto__', x: 1, z: 1, ids: [1] } }));
P[0].send(JSON.stringify({ t: 'wc', c: 'junk' })); P[0].send(JSON.stringify({ t: 'wc', c: { c: 'move', x: 'a', z: null, ids: 5 } })); await wait(200);
ok(last(P[0], 'ws'), 'garbage commands do not crash the server');
P[0].send(JSON.stringify({ t: 'wc', c: { c: 'place', kind: 'tower', x: 0, z: 0, ids: [] } })); await wait(200);
ok(has(P[0], (m) => m.t === 'wm'), 'failed command sends a message back');
function has(ws, f) { return ws.msgs.some(f); }
await wait(8500);
s = last(P[0], 'ws'); ok(s.u.filter((u) => u[1] === 0).length === 5, 'villager trained');
// one player leaves: the AI gets easier
P[1].send(JSON.stringify({ t: 'leave' })); await wait(300);
s = last(P[0], 'ws'); ok(s.n === 1, 'AI strength follows players (n=' + s.n + ')');
ok(s.u.some((u) => u[1] === 1), 'enemy villagers exist');
console.log(fails ? 'NETWAR: FAILURES' : 'NETWAR: ALL OK'); process.exit(fails ? 1 : 0);
