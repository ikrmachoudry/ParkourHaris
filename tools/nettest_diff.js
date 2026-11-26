// v656: the host's BOT DIFFICULTY reaches the guests' lobby; a guest cannot change it; the repeat cdiff does not loop.  Run: PORT=3997 node server.js & node tools/nettest_diff.js
import WebSocket from 'ws';
const URL = 'ws://localhost:' + (process.env.PORT || 3997) + '/ws'; let bad = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) bad++; };
const mk = () => new Promise((res) => { const w = new WebSocket(URL); w.msgs = []; w.on('message', (d) => w.msgs.push(JSON.parse(d))); w.on('open', () => res(w)); });
const send = (w, o) => w.send(JSON.stringify(o)); const wait = (ms) => new Promise((r) => setTimeout(r, ms)); const lastLobby = (w) => [...w.msgs].reverse().find((m) => m.t === 'lobby');
const a = await mk(), b = await mk();
send(a, { t: 'create', name: 'A', char: 0, room: 'DIFFX', combat: true }); await wait(300);
ok(lastLobby(a).diff === 'medium', 'a new room starts at MEDIUM');
send(b, { t: 'join', name: 'B', char: 1, room: 'DIFFX', combat: true }); await wait(300);
send(a, { t: 'cdiff', d: 'hard' }); await wait(300);
ok(lastLobby(b).diff === 'hard', 'the guest sees HARD after the host picks it');
send(b, { t: 'cdiff', d: 'easy' }); await wait(300);
ok(lastLobby(b).diff === 'hard' && lastLobby(a).diff === 'hard', 'a guest cannot change it');
const n0 = b.msgs.filter((m) => m.t === 'lobby').length; send(a, { t: 'cdiff', d: 'hard' }); send(a, { t: 'cdiff', d: 'hard' }); await wait(400);
ok(b.msgs.filter((m) => m.t === 'lobby').length === n0, 'a repeated cdiff sends no extra lobby message (no loop)');
send(a, { t: 'cdiff', d: 'easy' }); await wait(300); ok(lastLobby(b).diff === 'easy', 'the host can change it again');
for (const w of [a, b]) w.close(); console.log(bad ? 'DIFF NET FAIL' : 'DIFF NET OK'); process.exit(bad ? 1 : 0);
