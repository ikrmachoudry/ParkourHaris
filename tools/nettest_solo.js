// a ghost (frozen / silent) second connection must not stop the only active player from starting a mission
import WebSocket from 'ws';
const URL = 'ws://localhost:' + (process.env.PORT || 3999) + '/ws';
const mk = () => new Promise((res) => { const ws = new WebSocket(URL); const q = []; ws.msgs = q; ws.on('message', (d) => q.push(JSON.parse(d))); ws.on('open', () => res(ws)); });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const last = (ws, t) => [...ws.msgs].reverse().find((m) => m.t === t);
const S = (ws, o) => ws.send(JSON.stringify(o));
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };
const a = await mk(), b = await mk();
S(a, { t: 'create', name: 'A', char: 0 }); await wait(150);
const code = last(a, 'joined').code; S(b, { t: 'join', code, name: 'Ghost', char: 1 }); await wait(100);
S(a, { t: 'level', level: 0 }); await wait(80); S(a, { t: 'start' }); await wait(100);
const go = last(a, 'go'); await wait(go.t0 - Date.now() + 200);
const beat = setInterval(() => S(a, { t: 's', x: 0, y: 0, z: 0, r: 0, a: 1, sp: 0, ts: Date.now(), rs: 0 }), 100);   // A keeps talking, the ghost B says nothing
await wait(6500);
S(a, { t: 'm_in', on: true }); await wait(100);
ok(last(a, 'm_lobby') && last(a, 'm_lobby').total === 1, 'the silent ghost is not counted (total ' + (last(a, 'm_lobby') || {}).total + ')');
S(a, { t: 'm_start' }); await wait(150);
ok(last(a, 'm_go') && last(a, 'm_go').members.length === 1, 'the only active player starts the mission alone');
clearInterval(beat); console.log(fails ? 'FAILED' : 'SOLO NET OK'); process.exit(fails ? 1 : 0);
