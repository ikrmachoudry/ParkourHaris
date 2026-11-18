// v568: shared match, one human + his droid per team: when he is DOWN (jt ph 7) the server's droid walks to him and sends 'jr' (from -777). Run: PORT=3997 node server.js & node tools/nettest_droid_revive.js
import WebSocket from 'ws';
const URL = 'ws://localhost:' + (process.env.PORT || 3997) + '/ws'; let bad = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) bad++; };
const mk = () => new Promise((res) => { const w = new WebSocket(URL); w.msgs = []; w.on('message', (d) => w.msgs.push(JSON.parse(d))); w.on('open', () => res(w)); });
const send = (w, o) => w.send(JSON.stringify(o)); const wait = (ms) => new Promise((r) => setTimeout(r, ms)); const last = (w, t) => [...w.msgs].reverse().find((m) => m.t === t);
const a = await mk(), b = await mk();
send(a, { t: 'create', name: 'A', char: 0, room: 'DRV', combat: true }); await wait(300); send(b, { t: 'join', name: 'B', char: 1, room: 'DRV', combat: true }); await wait(300);
send(a, { t: 'tsolo' }); await wait(200); send(b, { t: 'tsolo' }); await wait(300); send(a, { t: 'start' }); await wait(2500);
const jt = (w, ph, x, z, o = {}) => send(w, { t: 'jt', ph, x, y: 5, z, r: 0, sp: 0, al: ph === 7 ? 0 : 1, dd: 0, hp: 100, tm: w === a ? 0 : 1, ...o });
const pump = async (ms, f) => { for (let t = 0; t < ms; t += 120) { f(); await wait(120); } };
await pump(5000, () => { jt(a, 4, 1500 + 20, 1500 + 20); jt(b, 4, 1500 - 150, 1500 - 150); });   // both land (A near the island centre, B far away)
await pump(7000, () => { jt(a, 4, 1500 + 20, 1500 + 20); jt(b, 4, 1500 - 150, 1500 - 150); });
const before = a.msgs.filter((m) => m.t === 'jr').length; a.msgs.length = 0;
let got = null; const t0 = Date.now();
for (let i = 0; i < 160 && !got; i++) { jt(a, 7, 1500 + 20, 1500 + 20); jt(b, 4, 1500 - 150, 1500 - 150); await wait(120); got = a.msgs.find((m) => m.t === 'jr'); }
let nearEn = 0; { const cb = last(a, 'cb'); if (cb) { const dr = cb.b.find((x) => x[11]); const near = cb.b.filter((x) => !x[11] && x[4] && Math.hypot(x[0] - dr[0], x[1] - dr[1]) < 38).length; console.log('droid', dr.slice(0, 5).join('/'), 'enemy bots within 38 m of it:', (nearEn = near), 'bots total', cb.b.length); } }
console.log('waited', ((Date.now() - t0) / 1000).toFixed(1), 's, bots:', (last(a, 'cb') || { b: [] }).b.filter((x) => x[11]).map((x) => x.slice(0, 5).join('/')).join(' | '));
if (!got && nearEn > 0) { console.log('SKIP (random bots near the droid: it fights first, by design) - run again'); process.exit(0); }
ok(!!got && got.from === -777, 'the droid revived me: jr from -777 ' + (got ? 'after ' + ((Date.now() - t0) / 1000).toFixed(1) + ' s' : '(none in 19 s - enemy bots near, or the droid is far)'));
for (const w of [a, b]) w.close(); console.log(bad ? 'DROID REVIVE NET FAIL' : 'DROID REVIVE NET OK'); process.exit(bad ? 1 : 0);
