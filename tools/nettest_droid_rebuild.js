// v560: the host's bot-count message (cdiff) rebuilds the match right after START: the INTELLIDROIDS must survive it.  Run: PORT=3997 node server.js & node tools/nettest_droid_rebuild.js
import WebSocket from 'ws';
const URL = 'ws://localhost:' + (process.env.PORT || 3997) + '/ws'; let bad = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) bad++; };
const mk = () => new Promise((res) => { const w = new WebSocket(URL); w.msgs = []; w.on('message', (d) => w.msgs.push(JSON.parse(d))); w.on('open', () => res(w)); });
const send = (w, o) => w.send(JSON.stringify(o)); const wait = (ms) => new Promise((r) => setTimeout(r, ms)); const last = (w, t) => [...w.msgs].reverse().find((m) => m.t === t);
const a = await mk(), b = await mk();
send(a, { t: 'create', name: 'A', char: 0, room: 'DRB', combat: true }); await wait(300); send(b, { t: 'join', name: 'B', char: 1, room: 'DRB', combat: true }); await wait(300);
send(a, { t: 'tcreate', name: 'ALPHA' }); await wait(200); send(b, { t: 'tcreate', name: 'BRAVO' }); await wait(300);
send(a, { t: 'tdroid', on: true }); await wait(200); send(b, { t: 'tdroid', on: true }); await wait(300);
send(a, { t: 'start' }); await wait(500);
send(a, { t: 'chello' }); send(b, { t: 'chello' }); await wait(500);
const droids = (w) => ((last(w, 'cinit') || last(w, 'cb') || { b: [] }).b || []).filter((q) => q[11]).map((q) => q[11]);
ok(droids(a).length === 2, 'two droids at the start (' + droids(a) + ')');
send(a, { t: 'cdiff', d: 'medium', n: 20 }); await wait(1200); send(a, { t: 'chello' }); await wait(600);
const ci = last(a, 'cinit'); const dd = ci.b.filter((q) => q[11]).map((q) => q[11]).sort();
ok(ci.b.length === 22 && dd.length === 2 && dd[0] === 1 && dd[1] === 2, 'after the host\'s bot-count rebuild: 20 bots + both droids (team 0 and team 1) are still there: ' + ci.b.length + ' bots, droid teams ' + dd);
const c1 = a.msgs.length; await wait(700); ok(last(a, 'cb') && last(a, 'cb').b.filter((q) => q[11]).length === 2, 'live bot updates still carry both droids');
for (const w of [a, b]) w.close(); console.log(bad ? 'DROID REBUILD FAIL' : 'DROID REBUILD OK'); process.exit(bad ? 1 : 0);
