// Parkour Haris - game server (static files + WebSocket rooms). Works locally and on Railway.
import express from 'express';
import compression from 'compression';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { WebSocketServer } from 'ws';
import { LEVEL_META, MAX_PLAYERS, CHARACTERS } from './public/js/levelmeta.js';
import { HUNT_DEFS, huntAnimalLayout, huntLayout, newHunt, stepHunt, packHunt, shootAnimal } from './public/js/hunt.js';
import { TH, newThugs, stealThug, hitThug, stepThugs, packThugs } from './public/js/thugs.js';
import { gtaH, gtaCars } from './public/js/gta.js';
import { newQuest, stepQuest, questLayout, questAnimalLayout, QUEST_DEFS } from './public/js/quest.js';
import { KINDS, newAnimals, stepAnimals, hitAnimal, releaseOwner, packAnimals, jungleLayout } from './public/js/jlayout.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

const app = express();
app.disable('x-powered-by');
app.use(compression());
app.get('/health', (_q, r) => r.send('ok'));
app.use('/vendor/three', express.static(path.join(__dirname, 'node_modules/three'), { maxAge: '7d' }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 0, etag: true })); // always re-check with ETag: players get new versions right after a deploy, 304 keeps it cheap

const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/ws', maxPayload: 4096, perMessageDeflate: false });

// ---------------------------------------------------------------- rooms
const rooms = new Map();
let nextId = 1;
const COUNTDOWN_MS = 4500;
const GRACE_MS = 8000; // others can still finish after the first player crosses the gate

const send = (ws, o) => { if (ws.readyState === 1) ws.send(JSON.stringify(o)); };
// Snapshot-type messages are superseded by the next one, so a client with a clogged socket (slow phone / bad wifi) simply skips
// them instead of building a growing queue (that queue was the "everything lags and players freeze" bug).
const LOSSY = new Set(['s', 'an', 'q']);
function bcast(room, o, exceptId) {
  const s = JSON.stringify(o), lossy = LOSSY.has(o.t);
  for (const p of room.players.values()) {
    if (p.id === exceptId || p.ws.readyState !== 1) continue;
    if (lossy && p.ws.bufferedAmount > 12000) continue;
    p.ws.send(s);
  }
}
const cleanName = (n) => String(n || 'Player').replace(/[^\p{L}\p{N} _.\-]/gu, '').trim().slice(0, 14) || 'Player';
const num = (v, lo, hi) => (typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi);

function genCode() {
  const A = 'ABCDEFGHJKMNPQRSTUVWXYZ';
  for (;;) {
    let c = '';
    for (let i = 0; i < 4; i++) c += A[Math.floor(Math.random() * A.length)];
    if (!rooms.has(c)) return c;
  }
}

function lobbyMsg(room) {
  return {
    t: 'lobby', code: room.code, hostId: room.hostId, level: room.level, phase: room.phase,
    players: [...room.players.values()].map((p) => ({ id: p.id, name: p.name, char: p.char })),
  };
}

function freeChar(room, wanted, selfId) {
  const taken = new Set([...room.players.values()].filter((p) => p.id !== selfId).map((p) => p.char));
  if (Number.isInteger(wanted) && wanted >= 0 && wanted < CHARACTERS.length && !taken.has(wanted)) return wanted;
  for (let i = 0; i < CHARACTERS.length; i++) if (!taken.has(i)) return i;
  return 0;
}

function clearTimers(room) {
  for (const t of room.timers) clearTimeout(t);
  room.timers = [];
}

function endRound(room, reason) {
  if (room.phase !== 'race' && room.phase !== 'countdown') return;
  room.phase = 'results';
  clearTimers(room);
  const list = [...room.players.values()];
  const fin = list.filter((p) => p.finished).sort((a, b) => a.finTime - b.finTime);
  const rest = list.filter((p) => !p.finished).sort((a, b) => a.z - b.z); // smaller z = closer to the gate
  const results = [...fin, ...rest].map((p, i) => ({
    id: p.id, name: p.name, char: p.char, finished: p.finished, time: p.finished ? p.finTime : null,
    progress: Math.max(0, Math.min(1, -p.z / -LEVEL_META[room.level].finishZ)), place: i + 1,
  }));
  bcast(room, { t: 'end', results, winnerId: results[0] ? results[0].id : null, reason });
}

function startRound(room) {
  const meta = LEVEL_META[room.level];
  room.phase = 'countdown';
  room.t0 = Date.now() + COUNTDOWN_MS;
  room.finishCount = 0;
  room.firstFinish = false;
  room.cars = {};
  room.th = meta.city ? newThugs(gtaCars()) : null; room.thT = Date.now(); room.thN = 0;
  room.an = meta.hunt ? newAnimals(HUNT_DEFS()) : meta.quest ? newAnimals(QUEST_DEFS()) : meta.free && !meta.arena && !meta.city ? newAnimals() : null; room.anT = Date.now();
  room.h = meta.hunt ? newHunt() : null; room.q = meta.quest ? newQuest() : null; room.seed = 1 + Math.floor(Math.random() * 1e9); room.qT = 0;
  for (const p of room.players.values()) { p.mounted = 0; p.finished = false; p.finTime = 0; p.z = 0; p.y = 0; p.x = 0; }
  bcast(room, {
    t: 'go', t0: room.t0, level: room.level, limit: meta.limit, seed: room.seed,
    order: [...room.players.values()].map((p) => p.id),
  });
  clearTimers(room);
  room.timers.push(setTimeout(() => { if (room.phase === 'countdown') room.phase = 'race'; }, COUNTDOWN_MS));
}

function removePlayer(p) {
  const room = p.room;
  if (!room) return;
  if (room.an) releaseOwner(room.an, p.id);
  room.players.delete(p.id);
  p.room = null;
  if (room.players.size === 0) { clearTimers(room); rooms.delete(room.code); return; }
  if (room.hostId === p.id) room.hostId = room.players.values().next().value.id;
  bcast(room, { t: 'left', id: p.id });
  bcast(room, lobbyMsg(room));
  if (room.phase === 'race' || room.phase === 'countdown') {
    const all = [...room.players.values()];
    if (all.every((q) => q.finished)) endRound(room, 'finish');
  }
}

function joinRoom(p, room) {
  p.room = room;
  p.char = freeChar(room, p.char, p.id);
  room.players.set(p.id, p);
  p.finished = false; p.finTime = 0; p.x = 0; p.y = 0; p.z = 0;
  send(p.ws, { t: 'joined', id: p.id, code: room.code });
  bcast(room, lobbyMsg(room));
  if (room.phase === 'race' || room.phase === 'countdown') { // joined a race that is already running: drop in at the start line
    const meta = LEVEL_META[room.level];
    send(p.ws, { t: 'go', t0: room.t0, level: room.level, limit: meta.limit, seed: room.seed, order: [...room.players.values()].map((q) => q.id) });
    if (room.cars && Object.keys(room.cars).length) send(p.ws, { t: 'cars', cars: room.cars });
    if (room.an) send(p.ws, { t: 'an', a: packAnimals(room.an) });
    if (room.h) send(p.ws, { t: 'h', ...packHunt(room.h) });
    if (room.q) send(p.ws, { t: 'q', ch: room.q.ch, ph: room.q.ph, n: room.players.size, occ: room.q.occ, hold: 0 });
  }
}

// ---------------------------------------------------------------- sockets
// ---- public-internet safety: limit connections per IP, messages per second, and number of rooms
const MAX_PER_IP = 12, MAX_ROOMS = 40;
const ipCount = new Map();
const clientIp = (req) => { const x = req.headers['x-forwarded-for']; return (x ? String(x).split(',')[0].trim() : req.socket.remoteAddress) || '?'; };

wss.on('connection', (ws, req) => {
  try { req.socket.setNoDelay(true); } catch { /* ignore */ }
  const ip = clientIp(req), n = (ipCount.get(ip) || 0) + 1;
  if (n > MAX_PER_IP) { ws.close(1013, 'busy'); return; }
  ipCount.set(ip, n);
  ws.on('close', () => { const c = (ipCount.get(ip) || 1) - 1; if (c <= 0) ipCount.delete(ip); else ipCount.set(ip, c); });
  let bucket = 120, lastMsg = Date.now();
  const p = { id: nextId++, ws, name: 'Player', char: 0, room: null, finished: false, finTime: 0, x: 0, y: 0, z: 0, lastS: 0, alive: true };
  ws.isAlive = true;
  ws.on('pong', () => { ws.isAlive = true; });

  ws.on('message', (raw) => {
    const nowT = Date.now(); bucket = Math.min(120, bucket + (nowT - lastMsg) / 1000 * 80); lastMsg = nowT; if (--bucket < 0) return; // flood protection
    let m;
    try { m = JSON.parse(raw); } catch { return; }
    if (!m || typeof m.t !== 'string') return;
    const room = p.room;

    switch (m.t) {
      case 'ping': send(ws, { t: 'pong', c: m.c, s: Date.now() }); break;

      case 'create': {
        if (rooms.size >= MAX_ROOMS && !room) return send(ws, { t: 'err', msg: 'Server is busy. Try again in a minute.' });
        if (room) removePlayer(p);
        p.name = cleanName(m.name); p.char = m.char | 0;
        const r = { code: genCode(), hostId: p.id, level: 0, phase: 'lobby', players: new Map(), timers: [], t0: 0 };
        rooms.set(r.code, r);
        joinRoom(p, r);
        break;
      }
      case 'join': { // with a code -> that room; without -> the room a friend already created (no code needed)
        let r;
        if (m.code) {
          r = rooms.get(String(m.code).toUpperCase().trim());
          if (!r) return send(ws, { t: 'err', msg: 'Room not found. Check the code.' });
        } else {
          const all = [...rooms.values()];
          r = all.find((x) => (x.phase === 'lobby' || x.phase === 'results') && x.players.size < MAX_PLAYERS) || all.find((x) => x.players.size < MAX_PLAYERS);
          if (!r) {
            if (!all.length) return send(ws, { t: 'err', retry: true, msg: 'No room yet. Ask your friend to tap CREATE ROOM - you will join automatically.' });
            return send(ws, { t: 'err', retry: true, msg: `The room is full (${MAX_PLAYERS} players max). Waiting for a free spot...` });
          }
        }
        if (r.players.size >= MAX_PLAYERS) return send(ws, { t: 'err', msg: `Room is full (${MAX_PLAYERS} players max).` });
        if (room) removePlayer(p);
        p.name = cleanName(m.name); p.char = m.char | 0;
        joinRoom(p, r);
        break;
      }
      case 'char': {
        if (!room || room.phase === 'race' || room.phase === 'countdown') return;
        const c = m.char | 0;
        const taken = [...room.players.values()].some((q) => q.id !== p.id && q.char === c);
        if (taken || c < 0 || c >= CHARACTERS.length) return;
        p.char = c;
        bcast(room, lobbyMsg(room));
        break;
      }
      case 'name': {
        if (!room) return;
        p.name = cleanName(m.name);
        bcast(room, lobbyMsg(room));
        break;
      }
      case 'level': {
        if (!room || room.hostId !== p.id || room.phase === 'race' || room.phase === 'countdown') return;
        const l = m.level | 0;
        if (l < 0 || l >= LEVEL_META.length) return;
        room.level = l;
        bcast(room, lobbyMsg(room));
        break;
      }
      case 'start': {
        if (!room || room.hostId !== p.id || (room.phase !== 'lobby' && room.phase !== 'results')) return;
        startRound(room);
        break;
      }
      case 'again': {
        if (!room || room.hostId !== p.id || room.phase !== 'results') return;
        room.phase = 'lobby';
        bcast(room, lobbyMsg(room));
        break;
      }
      case 'leave': removePlayer(p); break;

      case 'shove': { // running into another player pushes them too (relay only)
        if (!room || room.phase !== 'race') return;
        const q = room.players.get(m.to);
        if (!q || q === p || !q.ws) return;
        const t = Date.now();
        if (t - (p.lastShove || 0) < 40) return;
        if (!num(m.nx, -1.01, 1.01) || !num(m.nz, -1.01, 1.01) || !num(m.p, 0, 14)) return;
        if (Math.hypot((p.x || 0) - (q.x || 0), (p.z || 0) - (q.z || 0)) > 4) return;
        p.lastShove = t;
        send(q.ws, { t: 'shove', from: p.id, nx: m.nx, nz: m.nz, p: m.p });
        break;
      }
      case 'carpark': { // a driver got out: remember where the car stays (late joiners get it)
        if (!room || room.phase !== 'race') return;
        const t = Date.now();
        if (t - (p.lastCar || 0) < 250) return;
        if (!num(m.c, 0, 7) || !num(m.x, -400, 400) || !num(m.z, -2000, 400) || !num(m.r, -10, 10)) return;
        p.lastCar = t; room.cars = room.cars || {};
        const cy = num(m.y, -5, 120) ? m.y : 0;
        room.cars[m.c | 0] = { x: m.x, y: cy, z: m.z, r: m.r };
        bcast(room, { t: 'carpark', c: m.c | 0, x: m.x, y: cy, z: m.z, r: m.r }, p.id);
        break;
      }
      case 'steal': { // press C next to a vehicle with a thug in it: he jumps out and fights
        if (!room || room.phase !== 'race' || !room.th || !Number.isInteger(m.v)) return;
        const t = room.th[m.v]; if (!t || t.st !== TH.SEAT) return;
        if (Math.hypot((p.x || 0) - t.x, (p.z || 0) - t.z) > 9) return;
        stealThug(room.th, m.v, p.id, p.x || 0, p.z || 0, t.x, t.z);
        break;
      }
      case 'thit': { // bat swing at a thug (range-checked against the swinger's last known position)
        if (!room || room.phase !== 'race' || !room.th || !Number.isInteger(m.v) || !num(m.fx, -1.01, 1.01) || !num(m.fz, -1.01, 1.01)) return;
        const now = Date.now(); if (now - (p.lastThit || 0) < 450) return; p.lastThit = now;
        hitThug(room.th, m.v, p.x || 0, p.z || 0, m.fx, m.fz, m.m === 1);
        break;
      }
      case 'bat': { // baseball bat hit: relay a push to the victim (never kills)
        if (!room || room.phase !== 'race') return;
        const q = room.players.get(m.to);
        if (!q || q === p || !q.ws) return;
        const t = Date.now();
        if (t - (p.lastBat || 0) < 600) return;
        if (!num(m.nx, -1.01, 1.01) || !num(m.nz, -1.01, 1.01)) return;
        if (Math.hypot((p.x || 0) - (q.x || 0), (p.z || 0) - (q.z || 0)) > 8) return; // too far apart: ignore
        p.lastBat = t;
        send(q.ws, { t: 'bat', from: p.id, nx: m.nx, nz: m.nz, p: m.p === 2 ? 2 : 1, ax: num(m.ax, -400, 400) ? m.ax : undefined, az: num(m.az, -2000, 400) ? m.az : undefined });
        break;
      }
      case 'shoot': { // Jungle Hunt gun: damage a beast (unlimited ammo) and show the tracer to everybody else
        if (!room || room.phase !== 'race' || !room.h || !room.an) return;
        const t = Date.now(); if (t - (p.lastShot || 0) < 140) return; p.lastShot = t;
        const a = Number.isInteger(m.id) && m.id >= 0 ? room.an[m.id] : null;
        if (a) {
          if (a.st === 8 || a.owner || Math.hypot((p.x || 0) - a.x, (p.z || 0) - a.z) > 70) return;
          for (const e of shootAnimal(a, p.id)) bcast(room, { t: 'aev', k: e.k, id: e.id, hp: e.hp, pid: e.pid });
        }
        if (['ox', 'oy', 'oz', 'tx', 'ty', 'tz'].every((k) => num(m[k], -2000, 400))) bcast(room, { t: 'shot', pid: p.id, ox: m.ox, oy: m.oy, oz: m.oz, tx: m.tx, ty: m.ty, tz: m.tz }, p.id);
        break;
      }
      case 'ahit': { // bat hit on a jungle animal (tames it after enough hits)
        if (!room || room.phase !== 'race' || !room.an) return;
        const a = room.an[m.id | 0]; if (!a || !Number.isInteger(m.id) || a.st === 8) return;
        const t = Date.now(); if (t - (p.lastAHit || 0) < 380) return;
        const K = KINDS[a.kind];
        if (Math.hypot((p.x || 0) - a.x, (p.z || 0) - a.z) > K.r + 6 || Math.abs((p.y || 0) - a.y) > 5 || p.mounted) return;
        p.lastAHit = t;
        for (const e of hitAnimal(a, p.id, p.x || 0, p.z || 0)) bcast(room, { t: 'aev', k: e.k, id: e.id, hp: e.hp, pid: e.pid });
        break;
      }
      case 'aride': { // get on / off an animal you tamed
        if (!room || room.phase !== 'race' || !room.an) return;
        const a = room.an[m.id | 0]; if (!a) return;
        if (m.on) {
          if (a.owner !== p.id || a.rider || p.mounted) return;
          if (Math.hypot((p.x || 0) - a.x, (p.z || 0) - a.z) > 10 || Math.abs((p.y || 0) - a.y) > 5) return;
          a.rider = p.id; p.mounted = 1;
        } else if (a.rider === p.id) { a.rider = 0; p.mounted = 0; }
        break;
      }
      case 's': { // position snapshot
        if (!room || (room.phase !== 'race' && room.phase !== 'countdown')) return;
        const t = Date.now();
        if (t - p.lastS < 12) return;
        p.lastS = t;
        if (!num(m.x, -400, 400) || !num(m.y, -200, 300) || !num(m.z, -2000, 400) || !num(m.r, -10, 10)) return;
        p.x = m.x; p.y = m.y; p.z = m.z; p.r = m.r;
        bcast(room, { t: 's', id: p.id, x: m.x, y: m.y, z: m.z, r: m.r, a: m.a | 0, sp: num(m.sp, 0, 100) ? m.sp : 0, ts: num(m.ts, 0, 1e15) ? m.ts : t, rs: m.rs | 0 }, p.id);
        const meta = LEVEL_META[room.level];
        if (room.phase === 'race' && !p.finished && m.z < meta.finishZ && m.y > meta.finishY - 3 && Math.abs(m.x) < 16) {
          p.finished = true;
          p.finTime = Math.max(0, (t - room.t0) / 1000);
          room.finishCount++;
          bcast(room, { t: 'fin', id: p.id, time: p.finTime, place: room.finishCount });
          const all = [...room.players.values()];
          if (all.every((q) => q.finished)) endRound(room, 'finish');
          else if (!room.firstFinish) {
            room.firstFinish = true;
            room.timers.push(setTimeout(() => endRound(room, 'finish'), GRACE_MS));
          }
        }
        break;
      }
    }
  });

  ws.on('close', () => removePlayer(p));
  ws.on('error', () => {});
});

// ---- jungle animals: one brain per room, 20 steps/second
setInterval(() => {
  const now = Date.now();
  for (const room of rooms.values()) {
    if (!room.an || room.phase !== 'race') continue;
    const dt = Math.min(0.1, (now - (room.anT || now)) / 1000); room.anT = now;
    const pl = [...room.players.values()].map((q) => ({ id: q.id, x: q.x || 0, y: q.y || 0, z: q.z || 0, r: q.r || 0, mounted: q.mounted ? 1 : 0 }));
    for (const q of room.players.values()) if (q.mounted && !room.an.some((a) => a.rider === q.id)) q.mounted = 0;
    const evs = stepAnimals(room.an, dt, pl, room.h ? huntAnimalLayout() : room.q ? questAnimalLayout() : jungleLayout());
    if (room.h) {
      for (const e of stepHunt(room.h, dt, pl, room.an, room.players.size, huntLayout(), [])) bcast(room, { t: 'hev', ...e });
      if ((room.hT = (room.hT || 0) + 1) % 2 === 0) bcast(room, { t: 'h', ...packHunt(room.h) });
    }
    if (room.q) {
      for (const e of stepQuest(room.q, dt, pl, room.an, room.players.size, questLayout(), [])) bcast(room, { t: 'qev', ...e });
      if ((room.qT = (room.qT || 0) + 1) % 2 === 0) bcast(room, { t: 'q', ch: room.q.ch, ph: room.q.ph, n: room.q.n, occ: room.q.occ, hold: +room.q.hold.toFixed(2) });
    }
    for (const e of evs) {
      if (e.k !== 'bite') continue;
      const q = room.players.get(e.pid); if (q) send(q.ws, { t: 'abite', id: e.id, nx: +e.nx.toFixed(3), nz: +e.nz.toFixed(3), big: e.big });
    }
    bcast(room, { t: 'an', a: packAnimals(room.an) });
  }
}, 50);

// ---- Haris City thugs: one brain per room, 20 steps/second, state broadcast 10 times/second
setInterval(() => {
  const now = Date.now();
  for (const room of rooms.values()) {
    if (!room.th || room.phase !== 'race') continue;
    const dt = Math.min(0.1, (now - (room.thT || now)) / 1000); room.thT = now;
    const pl = [...room.players.values()].map((q) => ({ id: q.id, x: q.x || 0, y: q.y || 0, z: q.z || 0 }));
    for (const e of stepThugs(room.th, dt, pl, gtaH)) if (e.k === 'hit') bcast(room, { t: 'thev', k: 'hit', v: e.v, pid: e.pid, nx: +e.nx.toFixed(3), nz: +e.nz.toFixed(3) });
    if ((room.thN = (room.thN || 0) + 1) % 2 === 0) bcast(room, { t: 'th', a: packThugs(room.th) });
  }
}, 50);

// drop dead connections (proxies sometimes leave half-open sockets)
setInterval(() => {
  for (const ws of wss.clients) {
    if (ws.isAlive === false) { ws.terminate(); continue; }
    ws.isAlive = false;
    if (ws.readyState === 1) ws.ping();
  }
}, 25000);

server.listen(PORT, '0.0.0.0', () => console.log(`Parkour Haris running on http://localhost:${PORT}`));
