// TEAM UP COMBAT: two players in a combat room start by themselves; a normal room is kept apart.  Run: PORT=3997 node server.js & node tools/nettest_combat.js
import WebSocket from 'ws';
const URL = 'ws://localhost:' + (process.env.PORT || 3997) + '/ws'; let bad = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) bad++; };
const mk = () => new Promise((res) => { const w = new WebSocket(URL); w.msgs = []; w.on('message', (d) => w.msgs.push(JSON.parse(d))); w.on('open', () => res(w)); });
const send = (w, o) => w.send(JSON.stringify(o)); const wait = (ms) => new Promise((r) => setTimeout(r, ms)); const has = (w, t) => w.msgs.find((m) => m.t === t);
const a = await mk(), b = await mk(), c = await mk();
send(a, { t: 'create', name: 'A', char: 0, room: 'TEAMX', combat: true }); await wait(300);
ok(has(a, 'lobby') && has(a, 'lobby').combat === true, 'combat room is flagged');
send(b, { t: 'join', name: 'B', char: 1, room: 'TEAMX', combat: true }); await wait(300); ok(has(b, 'lobby') && has(b, 'lobby').players.length === 2, 'teammate joins the combat room');
send(c, { t: 'join', name: 'C', char: 2, room: 'TEAMX', combat: false }); await wait(300); ok(has(c, 'err') && !has(c, 'lobby'), 'a normal player cannot join a combat room');
send(a, { t: 'start' }); await wait(500); ok(has(a, 'go') && has(b, 'go'), 'host START starts the round for the team');
await wait(7500); ok(has(a, 'm_go') && has(b, 'm_go') && has(a, 'm_go').mission === 'combat', 'the combat mission starts by itself for both players');
ok(!has(c, 'm_go'), 'the outsider gets nothing');
for (const w of [a, b, c]) w.close(); console.log(bad ? 'COMBAT NET FAIL' : 'COMBAT NET OK'); process.exit(bad ? 1 : 0);
