// v511: two real players, each in his own team with an INTELLIDROID, start the match: the server's bot list must hold two droids (flags 1 and 2).  Run: PORT=3997 node server.js & node tools/nettest_droid_start.js
import WebSocket from 'ws';
const URL = 'ws://localhost:' + (process.env.PORT || 3997) + '/ws'; let bad = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) bad++; };
const mk = () => new Promise((res) => { const w = new WebSocket(URL); w.msgs = []; w.on('message', (d) => w.msgs.push(JSON.parse(d))); w.on('open', () => res(w)); });
const send = (w, o) => w.send(JSON.stringify(o)); const wait = (ms) => new Promise((r) => setTimeout(r, ms)); const last = (w, t) => [...w.msgs].reverse().find((m) => m.t === t);
const a = await mk(), b = await mk();
send(a, { t: 'create', name: 'A', char: 0, room: 'DRS', combat: true }); await wait(300);
send(b, { t: 'join', name: 'B', char: 1, room: 'DRS', combat: true }); await wait(300);
send(a, { t: 'tsolo' }); await wait(200); send(b, { t: 'tsolo' }); await wait(300);   // v511: one tap each
const tm0 = (last(a, 'lobby') || {}).teams || []; ok(tm0.length === 2 && tm0.every((t) => t.droid && t.ids.length === 1), 'one tap: two teams, each 1 player + droid');
console.log('teams', JSON.stringify((last(a, 'lobby') || {}).teams));
send(a, { t: 'start' }); await wait(1500);
const go = last(a, 'go'); ok(!!go, 'go sent ' + JSON.stringify(go ? { teamOf: go.teamOf, names: go.teamNames } : (last(a, 'err') || {}).msg));
await wait(1500);
const cb = last(a, 'cb'); ok(!!cb, 'bot list received');
const dr = cb ? cb.b.filter((x) => x[11]) : []; ok(dr.length === 2, 'two droids in the bot list: ' + dr.map((x) => x[11]).join(','));
for (const w of [a, b]) w.close(); console.log(bad ? 'DROID START FAIL' : 'DROID START OK'); process.exit(bad ? 1 : 0);
