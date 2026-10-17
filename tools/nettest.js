import WebSocket from 'ws';
import { LEVEL_META } from '../public/js/levelmeta.js';
const URL = 'ws://localhost:' + (process.env.PORT || 3999) + '/ws';
const mk = (name) => new Promise((res) => { const ws = new WebSocket(URL); const q = []; ws.msgs = q; ws.on('message', (d) => q.push(JSON.parse(d))); ws.on('open', () => res(ws)); });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const last = (ws, t) => [...ws.msgs].reverse().find((m) => m.t === t);
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };

const a = await mk(), b = await mk(), c = await mk(), d = await mk(), e = await mk();
a.send(JSON.stringify({ t: 'create', name: 'Haris', char: 0 })); await wait(150);
const code = last(a, 'joined').code; ok(/^[A-Z]{4}$/.test(code), 'room code ' + code);
b.send(JSON.stringify({ t: 'join', code, name: 'Dawood', char: 0 })); await wait(100); // wants char 0 (taken)
const lob = last(a, 'lobby'); ok(lob.players.length === 2 && lob.players[1].char !== 0, 'second player gets a free character (' + lob.players[1].char + ')');
c.send(JSON.stringify({ t: 'join', code, name: 'Ali', char: 2 })); await wait(100);
d.send(JSON.stringify({ t: 'join', code, name: 'Fourth', char: 1 })); await wait(100);
ok(last(a, 'lobby').players.length === 4, 'fourth player accepted (limit is 4)');
e.send(JSON.stringify({ t: 'join', code, name: 'Fifth', char: 1 })); await wait(100);
ok(last(e, 'err') && /full/i.test(last(e, 'err').msg), 'fifth player rejected (room full)');
a.send(JSON.stringify({ t: 'level', level: 0 })); await wait(80);
ok(last(b, 'lobby').level === 0, 'host selected level 0');
b.send(JSON.stringify({ t: 'start' })); await wait(80);
ok(!last(a, 'go'), 'non-host cannot start');
a.send(JSON.stringify({ t: 'start' })); await wait(100);
const go = last(b, 'go'); ok(go && go.level === 0 && go.order.length === 4 && go.t0 > Date.now(), 'go broadcast with future t0');
await wait(go.t0 - Date.now() + 100);
const meta = LEVEL_META[0];
a.send(JSON.stringify({ t: 's', x: 1, y: 0, z: -50, r: 3.14, a: 1, sp: 10, ts: Date.now(), rs: 0 })); await wait(60);
ok(last(b, 's') && last(b, 's').z === -50, 'position relayed to others');
b.send(JSON.stringify({ t: 's', x: 0, y: meta.finishY, z: meta.finishZ - 1, r: 3.14, a: 1, sp: 10, ts: Date.now(), rs: 0 })); await wait(80);
const fin = last(a, 'fin'); ok(fin && fin.place === 1, 'first finisher recorded');
a.send(JSON.stringify({ t: 's', x: 0, y: meta.finishY, z: meta.finishZ - 2, r: 3.14, a: 1, sp: 10, ts: Date.now(), rs: 0 })); await wait(60);
c.send(JSON.stringify({ t: 's', x: 0, y: meta.finishY, z: meta.finishZ - 3, r: 3.14, a: 1, sp: 10, ts: Date.now(), rs: 0 })); await wait(60);
d.send(JSON.stringify({ t: 's', x: 0, y: meta.finishY, z: meta.finishZ - 4, r: 3.14, a: 1, sp: 10, ts: Date.now(), rs: 0 })); await wait(150);
const end = last(c, 'end'); ok(end && end.results.length === 4 && end.winnerId === fin.id && end.reason === 'finish', 'round ended when all finished, winner = first');
a.send(JSON.stringify({ t: 'again' })); await wait(80);
ok(last(b, 'lobby').phase === 'lobby', 'host returned room to lobby');
// ---- Jungle: server-side animal brain, bat taming, riding
a.send(JSON.stringify({ t: 'level', level: 1 })); await wait(50);
a.send(JSON.stringify({ t: 'start' })); await wait(100);
const go2 = last(a, 'go'); ok(go2 && go2.level === 1, 'host starts the Jungle');
await wait(go2.t0 - Date.now() + 300);
let an0 = last(b, 'an'); ok(an0 && an0.a.length === 5, 'server streams 5 animals (' + (an0 ? an0.a.length : 0) + ')');
const lion0 = an0.a[0]; const pos = (ws, x, z) => ws.send(JSON.stringify({ t: 's', x, y: 0, z, r: 0, a: 1, sp: 0, ts: Date.now(), rs: 0 }));
pos(b, 80, 5); pos(c, 80, 8); pos(d, 85, 8); // others far away
let moved = 0; for (let k = 0; k < 80 && moved < 0.5; k++) { await wait(100); const l1 = last(b, 'an').a[0]; moved = Math.hypot(l1[1] - lion0[1], l1[3] - lion0[3]); } ok(moved > 0.5, 'wild lion wanders on the server (moved ' + moved.toFixed(1) + ' m)');
// player a walks up to the lion: it attacks (abite sent only to the victim)
let bite = false; const lx = () => last(b, 'an').a[0];
{ const l = lx(); pos(a, l[1], l[3] + 8); for (let k = 0; k < 60 && !bite; k++) { const l2 = lx(); pos(a, l2[1] + (k ? 0 : 0), l[3] + 8); await wait(100); bite = !!last(a, 'abite'); } }
ok(bite, 'lion attacks the player standing next to it (abite received)');
ok(!last(b, 'abite'), 'bite is sent only to the victim');
// tame it with 4 bat hits (ahit), rate limited to ~380 ms
for (let k = 0; k < 4; k++) { const l = lx(); pos(a, l[1], l[3] + 2.5); await wait(60); a.send(JSON.stringify({ t: 'ahit', id: 0 })); await wait(450); }
const tame = [...b.msgs].reverse().find((m) => m.t === 'aev' && m.k === 'tame');
ok(tame && tame.id === 0 && tame.pid === last(a, 'joined').id, 'four hits tame the lion; everybody gets the event');
await wait(150); ok(lx()[6] === last(a, 'joined').id, 'animal state shows the owner');
// cheating checks: far away hit ignored, riding someone else's pet refused
b.send(JSON.stringify({ t: 'ahit', id: 1 })); await wait(100); ok(last(b, 'an').a[1][8] === 4, 'a hit from far away is ignored');
b.send(JSON.stringify({ t: 'aride', id: 0, on: 1 })); await wait(150); ok(lx()[7] === 0, 'another player cannot ride my pet');
const l2 = lx(); pos(a, l2[1] + 2, l2[3]); await wait(80);
a.send(JSON.stringify({ t: 'aride', id: 0, on: 1 })); await wait(150); ok(lx()[7] === last(a, 'joined').id && lx()[5] === 7, 'owner can ride the pet');
pos(a, -20, -20); await wait(150); const l3 = lx(); ok(Math.hypot(l3[1] + 20, l3[3] + 20) < 1, 'ridden animal stays under the rider');
a.send(JSON.stringify({ t: 'aride', id: 0, on: 0 })); await wait(120); ok(lx()[7] === 0, 'owner can get off');
b.close(); c.close(); d.close(); await wait(150);
ok(last(a, 'lobby').players.length === 1, 'leaving players removed');
a.close(); d.close();
console.log(fails ? 'FAILED' : 'ALL NET TESTS PASSED'); process.exit(fails ? 1 : 0);
