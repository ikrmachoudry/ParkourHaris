// Jang victory page: one player alone in a combat room, and a 2-player team, both must get 'cres' after reporting cstat.  Run: PORT=3997 node server.js & node tools/nettest_victory.js
import WebSocket from 'ws';
const URL = 'ws://localhost:' + (process.env.PORT || 3997) + '/ws'; let bad = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) bad++; };
const mk = () => new Promise((res) => { const w = new WebSocket(URL); w.msgs = []; w.on('message', (d) => w.msgs.push(JSON.parse(d))); w.on('open', () => res(w)); });
const send = (w, o) => w.send(JSON.stringify(o)); const wait = (ms) => new Promise((r) => setTimeout(r, ms)); const has = (w, t) => w.msgs.find((m) => m.t === t);
for (const n of [1, 2]) {
  const ws = []; for (let i = 0; i < n; i++) ws.push(await mk());
  const room = 'V' + n + Date.now() % 1000;
  send(ws[0], { t: 'create', name: 'A', char: 0, room, combat: true }); await wait(300);
  for (let i = 1; i < n; i++) { send(ws[i], { t: 'join', name: 'B', char: i, room, combat: true }); await wait(300); }
  send(ws[0], { t: 'start' }); await wait(11000);
  console.log(n, [...new Set(ws[0].msgs.map((m) => m.t))].join(','));
  const go = has(ws[0], 'm_go'); ok(!!go, n + ' player(s): the match started');
  const rd = go ? go.round | 0 : 0;
  for (const w of ws) send(w, { t: 'cstat', rd, k: 3, d: 1, bots: { AK: 3 }, ply: {}, dby: { zone: 1 }, out: 0, fin: 1, tu: 1 });
  await wait(4500);
  ok(ws.every((w) => has(w, 'cres')), n + ' player(s): everybody gets the victory page data (cres)');
  ws.forEach((w) => w.close());
}
console.log(bad ? 'VICTORY NET FAIL' : 'VICTORY NET OK'); process.exit(bad ? 1 : 0);
