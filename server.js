// Parkour Haris - game server (static files + WebSocket rooms). Works locally and on Railway.
import express from 'express';
import compression from 'compression';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { WebSocketServer } from 'ws';
import { LEVEL_META, MAX_PLAYERS, CHARACTERS } from './public/js/levelmeta.js';
import { MissionHub } from './public/js/mission.js';
import { CombatHost } from './combatserver.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

const app = express();
app.disable('x-powered-by');
app.use(compression());
app.get('/health', (_q, r) => r.send('ok'));
// voice chat: the phones connect to each other (WebRTC); this tells them which relay servers to use when a direct line is blocked by the mobile network.
// Free relay: set TURN_URL (comma separated, e.g. turn:global.relay.metered.ca:80,turns:global.relay.metered.ca:443?transport=tcp) + TURN_USER + TURN_PASS, or METERED_APP + METERED_KEY (metered.ca free plan)
let iceCache = null, iceAt = 0;
app.get('/ice', async (_q, r) => {
  r.set('Cache-Control', 'no-store');
  const base = [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:stun1.l.google.com:19302' }];
  try {
    if (process.env.METERED_APP && process.env.METERED_KEY) {
      if (!iceCache || Date.now() - iceAt > 3600e3) { const x = await fetch(`https://${process.env.METERED_APP}.metered.live/api/v1/turn/credentials?apiKey=${process.env.METERED_KEY}`); const j = await x.json(); if (Array.isArray(j) && j.length) { iceCache = j; iceAt = Date.now(); } }
      if (iceCache) return r.json({ iceServers: [...base, ...iceCache] });
    }
    if (process.env.TURN_URL) return r.json({ iceServers: [...base, { urls: process.env.TURN_URL.split(',').map((u) => u.trim()), username: process.env.TURN_USER || '', credential: process.env.TURN_PASS || '' }] });
  } catch { /* fall back to STUN only */ }
  r.json({ iceServers: base });
});
// the page itself is never cached, and its script / style links carry the build time: a phone (or a home-screen shortcut) can never keep running an old copy
const pubDir = path.join(__dirname, 'public');
// v220: version of the big asset files (models / audio / anim): changes only when one of them changes. Versioned requests are cached by the phone for a year.
let avCache = '0', avAt = 0;
const assetVersion = () => {
  if (Date.now() - avAt < 30e3) return avCache; avAt = Date.now();
  let mx = 0; const walk = (d) => { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const q = path.join(d, f.name); if (f.isDirectory()) walk(q); else mx = Math.max(mx, fs.statSync(q).mtimeMs); } };
  try { for (const d of ['models', 'audio', 'anim']) walk(path.join(pubDir, d)); avCache = String(mx | 0); } catch { /* keep the old one */ }
  return avCache;
};
app.use(['/models', '/audio', '/anim'], (q, r, next) => { if (q.query && q.query.v) r.set('Cache-Control', 'public, max-age=31536000, immutable'); next(); });
app.get(['/', '/index.html'], (_q, r) => {
  try {
    const v = Math.max(fs.statSync(path.join(pubDir, 'game.js')).mtimeMs, fs.statSync(path.join(pubDir, 'style.css')).mtimeMs) | 0;
    const html = fs.readFileSync(path.join(pubDir, 'index.html'), 'utf8').replace(/game\.js\?v=\w+/, 'game.js?v=' + v).replace('href="style.css"', 'href="style.css?v=' + v + '"').replace('__AV__', assetVersion());
    r.set('Cache-Control', 'no-store').type('html').send(html);
  } catch (e) { r.set('Cache-Control', 'no-store').sendFile(path.join(pubDir, 'index.html')); }
});
app.use('/vendor/three', express.static(path.join(__dirname, 'node_modules/three'), { maxAge: '7d' }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 0, etag: true, setHeaders: (res, f) => { if (/\.(js|css|html)$/.test(f)) res.setHeader('Cache-Control', 'no-cache, must-revalidate'); } })); // always re-check with ETag: players get new versions right after a deploy, 304 keeps it cheap

const server = http.createServer(app);
const wss = new WebSocketServer({ server, path: '/ws', maxPayload: 8192, perMessageDeflate: false });

// ---------------------------------------------------------------- rooms
const rooms = new Map();
let nextId = 1;
const COUNTDOWN_MS = 4500;
const GRACE_MS = 8000; // others can still finish after the first player crosses the gate

const send = (ws, o) => { if (ws.readyState === 1) ws.send(JSON.stringify(o)); };
// Snapshot-type messages are superseded by the next one, so a client with a clogged socket (slow phone / bad wifi) simply skips
// them instead of building a growing queue (that queue was the "everything lags and players freeze" bug).
const LOSSY = new Set(['s', 'an', 'q', 'tf', 'pd']);
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

// room names typed by players ("room IKRMA", "Pakistan", "usa 1") -> one canonical key, so everybody who types the same name lands in the SAME room
function roomKey(n) { let t = String(n || '').toUpperCase().replace(/[^\p{L}\p{N} ]/gu, ' ').trim().replace(/^ROOM\s+/, ''); return t.replace(/\s+/g, '').slice(0, 14); }
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
    t: 'lobby', code: room.code, hostId: room.hostId, level: room.level, phase: room.phase, combat: !!room.combat,
    players: [...room.players.values()].map((p) => ({ id: p.id, name: p.name, char: p.char, skin: p.skin, zom: !!p.zom })),
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
// the missions of a room (the Mission Lobby): one hub per room, created when the first player uses it
function hubOf(room) { if (!room.hub) room.hub = new MissionHub((msg) => missionEmit(room, msg), { getP: (id) => { const q = room.players.get(id); return q ? { x: q.x || 0, y: q.y || 0, z: q.z || 0, a: q.a | 0 } : null; } }); return room.hub; }
// Mission messages go only to the players IN the mission (the others keep playing in the open city); lobby / idle messages go to everybody.
// 'm_busy' tells everybody who is inside a running mission, so players inside and outside never see or touch each other (GTA Online style private instance).
function missionEmit(room, msg) {
  const h = room.hub, mem = h && h.members && h.members.length ? h.members : null;
  if (!mem || msg.t === 'm_lobby' || msg.t === 'm_idle') bcast(room, msg); else for (const id of mem) { const q = room.players.get(id); if (q) send(q.ws, msg); }
  if (msg.t === 'm_go' || (msg.t === 'm_end' && !msg.pass) || msg.t === 'm_idle' || (msg.t === 'm_end' && msg.pass)) { room.busyIds = msg.t === 'm_go' || (msg.t === 'm_end' && !msg.pass) ? [...(mem || [])] : []; sendBusy(room); }
}
// who is inside a mission right now, told to everybody (also to a player who joins later, and again every few seconds so a missed / stale list can never leave two players invisible to each other)
function sendBusy(room, to) {
  // the truth is the mission hub itself (not the events that happened to be sent): a mission that was reset without an 'idle' message can never leave its players hidden from everybody
  const h = room.hub; room.busyIds = h && h.phase !== 'idle' ? [...(h.members || [])] : [];
  const ids = room.busyIds.filter((id) => room.players.has(id)), msg = { t: 'm_busy', ids };
  if (to) send(to.ws, msg); else bcast(room, msg);
}
// who counts for a mission: everybody whose connection is alive and has spoken in the last 6 s (a frozen tab or a ghost
// connection must never block a solo player from starting)
const pids = (room, selfId) => [...room.players.values()].filter((q) => q.id === selfId || (q.ws.readyState === 1 && Date.now() - (q.seen || 0) < 6000)).map((q) => q.id);

function endRound(room, reason) {
  room.chost = null;
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
  room.t0 = Date.now() + (meta.city ? 0 : COUNTDOWN_MS);   // the open-world city has no 3-2-1: you simply start
  room.finishCount = 0;
  room.firstFinish = false;
  room.cars = {};
  room.busyIds = [];
  room.seed = 1 + Math.floor(Math.random() * 1e9);
  for (const p of room.players.values()) { p.mounted = 0; p.finished = false; p.finTime = 0; p.z = 0; p.y = 0; p.x = 0; }
  room.chost = room.combat && room.players.size >= 2 ? new CombatHost(room.seed, (o) => bcast(room, o), (id, o) => { const q = room.players.get(id); if (q && q.ws) send(q.ws, o); }) : null;   // v245: the shared Jang match: the server runs the bots + loot
  bcast(room, {
    t: 'go', t0: room.t0, level: room.level, limit: meta.limit, seed: room.seed,
    order: [...room.players.values()].map((p) => p.id),
  });
  clearTimers(room);
  room.timers.push(setTimeout(() => { if (room.phase === 'countdown') room.phase = 'race'; }, meta.city ? 0 : COUNTDOWN_MS));
  if (false && room.combat) room.timers.push(setTimeout(() => {   // v189: off - every player runs Jang alone on their own map; the server starts no shared mission   // TEAM UP COMBAT: once everybody has loaded the city the mission starts by itself, with the whole team in it
    if (room.phase !== 'race' || !room.players.size) return; const h = hubOf(room), ids = [...room.players.keys()];
    if (h.phase !== 'idle') return; for (const id of ids) h.lobby(id, true, ids); h.pick(room.hostId, 'combat', ids); h.start(room.hostId, ids);
  }, 7000));
}

function removePlayer(p) {
  const room = p.room;
  if (!room) return;
  room.players.delete(p.id);
  p.room = null;
  if (room.hub) room.hub.drop(p.id, pids(room));
  if (room.players.size === 0) { clearTimers(room); if (room.hub) room.hub.reset(); rooms.delete(room.code); return; }
  if (room.hostId === p.id) room.hostId = room.players.values().next().value.id;
  bcast(room, { t: 'left', id: p.id });
  bcast(room, lobbyMsg(room)); sendBusy(room);
  if (room.phase === 'race' || room.phase === 'countdown') {
    const all = [...room.players.values()];
    if (all.every((q) => q.finished)) endRound(room, 'finish');
  }
}

function joinRoom(p, room) {
  p.room = room;
  p.char = freeChar(room, p.char, p.id); if (!(p.skin >= 0 && p.skin < 9) || (p.skin < 4 && p.skin !== p.char)) p.skin = p.char;   // a GTA hero look belongs to its slot; the Jang soldiers (4..8) can sit in any slot
  if (p.skin >= 4) { const used = new Set([...room.players.values()].filter((q) => q.id !== p.id).map((q) => q.skin)); if (used.has(p.skin)) { let k = 4; while (k < 9 && used.has(k)) k++; p.skin = k < 9 ? k : p.char; } }
  room.players.set(p.id, p);
  p.finished = false; p.finTime = 0; p.x = 0; p.y = 0; p.z = 0;
  send(p.ws, { t: 'joined', id: p.id, code: room.code }); sendBusy(room, p);
  bcast(room, lobbyMsg(room));
  if (room.phase === 'race' || room.phase === 'countdown') { // joined a race that is already running: drop in at the start line
    const meta = LEVEL_META[room.level];
    send(p.ws, { t: 'go', t0: room.t0, level: room.level, limit: meta.limit, seed: room.seed, order: [...room.players.values()].map((q) => q.id) });
    if (room.cars && Object.keys(room.cars).length) send(p.ws, { t: 'cars', cars: room.cars });
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
  const p = { id: nextId++, ws, name: 'Player', char: 0, room: null, finished: false, finTime: 0, x: 0, y: 0, z: 0, lastS: 0, alive: true, seen: Date.now() };
  ws.isAlive = true;
  ws.on('pong', () => { ws.isAlive = true; });

  ws.on('message', (raw) => {
    const nowT = Date.now(); bucket = Math.min(120, bucket + (nowT - lastMsg) / 1000 * 80); lastMsg = nowT; p.seen = nowT; if (--bucket < 0) return; // flood protection
    let m;
    try { m = JSON.parse(raw); } catch { return; }
    if (!m || typeof m.t !== 'string') return;
    const room = p.room;

    switch (m.t) {
      case 'ping': send(ws, { t: 'pong', c: m.c, s: Date.now() }); break;
      case 'vc': {   // voice chat connect message (offer / answer / network candidate): relayed to one player of the same room, nothing is stored
        if (!room || (m.k !== 'o' && m.k !== 'a' && m.k !== 'i') || !m.d || typeof m.d !== 'object') return;
        const q = room.players.get(m.to | 0); if (!q || q.id === p.id || !q.ws) return;
        if (p.team != null && q.team != null && p.team !== q.team) return;   // different teams never hear each other (teams are not used yet: a room is one team)
        const out = { t: 'vc', from: p.id, k: m.k, d: m.d }, js = JSON.stringify(out); if (js.length > 7000) return;
        if (q.ws.readyState === 1) q.ws.send(js); break;
      }
      case 'rooms': { const open = [...rooms.values()].filter((x) => x.players.size < MAX_PLAYERS && !!x.combat === !!m.combat); send(ws, { t: 'rooms', n: open.length, l: open.slice(0, 8).map((x) => x.code) }); break; }   // lets the JOIN button know whether a room exists

      case 'create': {
        if (rooms.size >= MAX_ROOMS && !room) return send(ws, { t: 'err', msg: 'Server is busy. Try again in a minute.' });
        const want = roomKey(m.room);
        if (want && rooms.has(want) && !(room && room.code === want)) return send(ws, { t: 'err', msg: `A room named ${want} already exists. Tap JOIN ROOM to enter it, or choose another name.` });
        if (room) removePlayer(p);
        p.name = cleanName(m.name); p.char = m.char | 0; p.skin = m.skin | 0; p.zom = !!m.zom;
        const r = { code: want || genCode(), hostId: p.id, level: 0, phase: 'lobby', players: new Map(), timers: [], t0: 0, combat: !!m.combat };   // combat: a TEAM UP room for the COMBAT MISSION (the match starts by itself when the host presses START)
        rooms.set(r.code, r);
        joinRoom(p, r);
        break;
      }
      case 'join': { // with a code -> that room; without -> the room a friend already created (no code needed)
        let r;
        const want = roomKey(m.room || m.code);
        if (want) {
          r = rooms.get(want);
          if (r && !!r.combat !== !!m.combat) return send(ws, { t: 'err', msg: r.combat ? 'That room is a COMBAT team room. Use COMBAT MISSION on the main menu to join it.' : 'That is a normal room. Use MULTIPLAYER on the main menu to join it.' });
          if (!r) return send(ws, { t: 'err', msg: `No room named ${want} yet. Ask the host to create it first (same name), then tap JOIN ROOM.` });
        } else {
          const all = [...rooms.values()].filter((x) => !!x.combat === !!m.combat);
          if (all.length > 1) return send(ws, { t: 'err', msg: 'There is more than one room open - type the room name your friend made, then tap JOIN ROOM.' });
          r = all.find((x) => (x.phase === 'lobby' || x.phase === 'results') && x.players.size < MAX_PLAYERS) || all.find((x) => x.players.size < MAX_PLAYERS);
          if (!r) {
            if (!all.length) return send(ws, { t: 'err', msg: 'No room has been created yet. Ask the host to tap CREATE ROOM first, then tap JOIN ROOM.' });
            return send(ws, { t: 'err', msg: `The room is full (${MAX_PLAYERS} players max).` });
          }
        }
        if (r.players.size >= MAX_PLAYERS) return send(ws, { t: 'err', msg: `Room is full (${MAX_PLAYERS} players max).` });
        if (room) removePlayer(p);
        p.name = cleanName(m.name); p.char = m.char | 0; p.skin = m.skin | 0; p.zom = !!m.zom;
        joinRoom(p, r);
        break;
      }
      case 'zom': {   // zombie skin on / off (looks only)
        if (!room || room.phase === 'race' || room.phase === 'countdown') return;
        p.zom = !!m.zom; bcast(room, lobbyMsg(room));
        break;
      }
      case 'jt': {   // v235: Jang team: where my teammates are during the plane ride, the jump, the fall and the walk (10 per second, tiny)
        if (!room || !room.combat || (room.phase !== 'race' && room.phase !== 'countdown')) return;
        const t = Date.now(); if (t - (p.lastJt || 0) < 60) return; p.lastJt = t;
        if (!num(m.x, -2000, 2000) || !num(m.y, -300, 600) || !num(m.z, -2000, 2000) || !num(m.r, -1e4, 1e4)) return;
        p.jx = m.x; p.jz = m.z; p.jal = (m.ph | 0) >= 4 && m.al ? 1 : 0; p.jtm = m.tm & 1;   // v245: where I am and whether the bots may shoot me
        bcast(room, { t: 'jt', id: p.id, ph: m.ph & 7, x: m.x, y: m.y, z: m.z, r: m.r, sp: num(m.sp, 0, 100) ? m.sp : 0, c: p.char | 0, tm: m.tm & 1, vi: (m.vi | 0) & 15, ps: m.ps & 3, wp: typeof m.wp === 'string' && m.wp.length < 12 ? m.wp : '', ai: m.ai ? 1 : 0 }, p.id); break;
      }
      case 'jr': {   // v244: a teammate revives me (relay only)
        if (!room || !room.combat || room.phase !== 'race') return;
        const q = room.players.get(m.to); if (!q || q === p || !q.ws) return;
        const t = Date.now(); if (t - (p.lastJr || 0) < 500) return; p.lastJr = t;
        send(q.ws, { t: 'jr', from: p.id }); break;
      }
      case 'chello': { if (room && room.chost) room.chost.init(p.id); break; }   // v245: shared match: the phone asks for the bots + loot
      case 'cshoot': case 'cmelee': case 'cblast': case 'ctake': case 'cdrop': case 'csmoke': {
        if (!room || !room.chost || room.phase !== 'race') return;
        const t = Date.now(); if (t - (p.lastC || 0) < 25) return; p.lastC = t;
        const h = room.chost; ({ cshoot: () => h.shoot(p, m), cmelee: () => h.melee(p, m), cblast: () => h.blast(p, m), ctake: () => h.take(p, m), cdrop: () => h.drop(p, m), csmoke: () => h.smoke(p, m) })[m.t](); break;
      }
      case 'cpv': case 'cpk': {   // v246: PvP (relay only, checked): a shot at a player of the OTHER team / the kill credit for the shooter
        if (!room || !room.combat || room.phase !== 'race') return;
        const q = room.players.get(m.to); if (!q || q === p || !q.ws) return;
        const t = Date.now(); if (t - (p[m.t === 'cpv' ? 'lastPv' : 'lastPk'] || 0) < (m.t === 'cpv' ? 40 : 800)) return; p[m.t === 'cpv' ? 'lastPv' : 'lastPk'] = t;
        if (m.t === 'cpv') { if (!num(m.d, 0, 60) || p.jtm === q.jtm || !q.jal || !p.jal || !Number.isFinite(p.jx) || !Number.isFinite(q.jx) || Math.hypot(p.jx - q.jx, p.jz - q.jz) > 320) return; send(q.ws, { t: 'cpv', from: p.id, d: m.d }); }
        else send(q.ws, { t: 'cpk' });
        break;
      }
      case 'jf': {   // v241: Jang: somebody fired (position + gun type) so everybody nearby hears it from the right side
        if (!room || !room.combat || room.phase !== 'race') return;
        const t = Date.now(); if (t - (p.lastJf || 0) < 70) return; p.lastJf = t;
        if (!num(m.x, -2000, 2000) || !num(m.z, -2000, 2000)) return;
        bcast(room, { t: 'jf', id: p.id, x: m.x, z: m.z, w: m.w & 3, r: num(m.r, -1e4, 1e4) ? m.r : 0 }, p.id); break;
      }
      case 'emote': {   // v227: a lobby gesture (wave, salute...) is shown to everybody in the room
        if (!room || room.phase !== 'lobby' || !['wave', 'hi', 'salute', 'cheer'].includes(m.g)) return;
        bcast(room, { t: 'emote', char: p.char | 0, g: m.g }); break;
      }
      case 'char': {
        if (!room || room.phase === 'race' || room.phase === 'countdown') return;
        const c = m.char | 0;
        const taken = [...room.players.values()].some((q) => q.id !== p.id && q.char === c);
        if (taken || c < 0 || c >= CHARACTERS.length) return;
        const sk = m.skin | 0; if (sk >= 4 && sk < 9 && [...room.players.values()].some((q) => q.id !== p.id && q.skin === sk)) return;   // two players never wear the same soldier
        p.char = c; p.skin = sk >= 4 && sk < 9 ? sk : c;
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
        if (l < 0 || l >= LEVEL_META.length || LEVEL_META[l].hidden) return;
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

      // ---- missions (Mission Lobby): the server only keeps the shared state, the players judge their own run
      case 'm_in': { if (!room || room.phase !== 'race') return; hubOf(room).lobby(p.id, !!m.on, pids(room, p.id)); break; }
      case 'm_pick': { if (!room || room.phase !== 'race') return; hubOf(room).pick(p.id, String(m.mission || ''), pids(room, p.id)); break; }
      case 'm_start': { if (!room || room.phase !== 'race') return; hubOf(room).start(p.id, pids(room, p.id), m.role); break; }
      case 'm_hit': { if (!room || room.phase !== 'race' || !room.hub) return; room.hub.hit(p.id, Math.min(2, +m.dmg || 1)); break; }
      case 'm_zh': { if (!room || room.phase !== 'race' || !room.hub) return; room.hub.zhit(p.id, m.z | 0, Math.max(1, Math.min(200, +m.d || 0))); break; }
      case 'm_pr': { if (!room || room.phase !== 'race' || !room.hub) return; room.hub.rick(p.id, { x: +m.x, z: +m.z, yaw: +m.yaw, sp: +m.sp, hp: +m.hp, drv: m.drv ? 1 : 0 }); break; }
      case 'm_res': { if (!room || room.phase !== 'race' || !room.hub) return; room.hub.result(p.id, !!m.ok, m.why, m.round | 0); break; }

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
      case 'ph': { // I hit somebody else's police (an officer or a patrol car): tell the player who owns that police (relay only, they run the real chase)
        if (!room || room.phase !== 'race') return;
        const q = room.players.get(m.to); if (!q || q === p || !q.ws) return;
        const t = Date.now(); if (t - (p.lastPh || 0) < 40) return; p.lastPh = t;
        if (m.k !== 'f' && m.k !== 'c') return; if (!Number.isFinite(m.n) || !Number.isFinite(m.d) || m.d < 0 || m.d > 200) return;
        send(q.ws, { t: 'ph', from: p.id, k: m.k, n: m.n | 0, d: +m.d });
        break;
      }
      case 'jack': { // somebody took the car I was driving: tell the driver (relay only)
        if (!room || room.phase !== 'race') return;
        const q = room.players.get(m.to);
        if (!q || q === p || !q.ws) return;
        if (!Number.isInteger(m.c) || m.c < 0 || m.c > 63) return;
        if (Math.hypot((p.x || 0) - (q.x || 0), (p.z || 0) - (q.z || 0)) > 10) return;
        send(q.ws, { t: 'jack', from: p.id, c: m.c });
        break;
      }
      case 'carpark': { // a driver got out: remember where the car stays (late joiners get it)
        if (!room || room.phase !== 'race') return;
        const t = Date.now();
        if (t - (p.lastCar || 0) < 250) return;
        if (!num(m.c, 0, 63) || !num(m.x, -2000, 2000) || !num(m.z, -2000, 2000) || !num(m.r, -10, 10)) return;
        p.lastCar = t; room.cars = room.cars || {};
        const cy = num(m.y, -5, 120) ? m.y : 0;
        room.cars[m.c | 0] = { x: m.x, y: cy, z: m.z, r: m.r };
        bcast(room, { t: 'carpark', c: m.c | 0, x: m.x, y: cy, z: m.z, r: m.r }, p.id);
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
        send(q.ws, { t: 'bat', from: p.id, nx: m.nx, nz: m.nz, p: m.p === 2 ? 2 : m.p === 0.5 ? 0.5 : 1, ax: num(m.ax, -400, 400) ? m.ax : undefined, az: num(m.az, -2000, 400) ? m.az : undefined });
        break;
      }
      // ---- shared city world: ONE player (the room host) runs the pedestrians and the traffic and streams them to everybody else;
      // the others send what they do to them (punch, shot, horn, carjack) to the host as events. The server only relays.
      case 'tf': case 'pd': { // host -> everybody: traffic / pedestrian state
        if (!room || room.phase !== 'race' || room.hostId !== p.id || !Array.isArray(m.d) || m.d.length > 90) return;
        bcast(room, { t: m.t, d: m.d, h: Array.isArray(m.h) ? m.h.slice(0, 4) : undefined, lt: num(m.lt, -1e4, 1e7) ? m.lt : undefined }, p.id);
        break;
      }
      case 'ev': { // guest -> host: an action on the shared world
        if (!room || room.phase !== 'race' || room.hostId === p.id || typeof m.k !== 'string' || m.k.length > 8) return;
        const h = room.players.get(room.hostId); if (!h || !h.ws) return;
        const t = Date.now(); if (t - (p.lastEv || 0) < 20) return; p.lastEv = t;
        send(h.ws, { ...m, t: 'ev', from: p.id });
        break;
      }
      case 'pc': { // a player's police (cars + officers on foot): shown to everybody else as harmless ghosts
        if (!room || room.phase !== 'race') return;
        const t = Date.now(); if (t - (p.lastPc || 0) < 70) return; p.lastPc = t;
        const cl = (arr, n, k) => (Array.isArray(arr) ? arr.slice(0, n).filter(Array.isArray).map((e) => e.slice(0, k).map((v) => (typeof v === 'number' && isFinite(v) ? v : 0))) : []);
        bcast(room, { t: 'pc', id: p.id, c: cl(m.c, 8, 5), f: cl(m.f, 10, 6) }, p.id);
        break;
      }
      case 'fx': { // a shot (tracer + sound) for everybody
        if (!room || room.phase !== 'race') return;
        const t = Date.now(); if (t - (p.lastFx || 0) < 60) return; p.lastFx = t;
        if (!num(m.x, -2000, 2000) || !num(m.y, -5, 300) || !num(m.z, -2000, 2000) || !num(m.dx, -1.01, 1.01) || !num(m.dz, -1.01, 1.01) || !num(m.l, 0, 120)) return;
        bcast(room, { t: 'fx', id: p.id, x: m.x, y: m.y, z: m.z, dx: m.dx, dz: m.dz, l: m.l, w: m.w & 3 }, p.id);
        break;
      }
      case 'gr': { // a grenade: k 0 = he starts the throw (everybody plays the animation), k 1 = it leaves his hand (everybody simulates the same flight and blast)
        if (!room || room.phase !== 'race') return;
        const t = Date.now(); if (t - (p.lastGr || 0) < 80) return; p.lastGr = t;
        if (m.k === 0) { bcast(room, { t: 'gr', id: p.id, k: 0, toss: m.toss ? 1 : 0 }, p.id); break; }
        if (m.k !== 1 || !num(m.x, -2000, 2000) || !num(m.y, -5, 300) || !num(m.z, -2000, 2000) || !num(m.vx, -40, 40) || !num(m.vy, -40, 40) || !num(m.vz, -40, 40)) return;
        bcast(room, { t: 'gr', id: p.id, k: 1, x: m.x, y: m.y, z: m.z, vx: m.vx, vy: m.vy, vz: m.vz }, p.id);
        break;
      }
      case 'ph': { // host -> a player: an AI pedestrian punched him
        if (!room || room.phase !== 'race' || room.hostId !== p.id) return;
        const q = room.players.get(m.to); if (!q || !q.ws || !num(m.nx, -1.01, 1.01) || !num(m.nz, -1.01, 1.01)) return;
        send(q.ws, { t: 'ph', nx: m.nx, nz: m.nz });
        break;
      }
      case 's': { // position snapshot
        if (!room || (room.phase !== 'race' && room.phase !== 'countdown')) return;
        const t = Date.now();
        if (t - p.lastS < 12) return;
        p.lastS = t;
        if (!num(m.x, -2000, 2000) || !num(m.y, -200, 300) || !num(m.z, -2000, 2000) || !num(m.r, -1e4, 1e4)) return;
        m.r = Math.atan2(Math.sin(m.r), Math.cos(m.r));   // a turn angle that has wound up past +-10 rad (spinning the camera, driving in circles) used to get the whole packet thrown away: that player froze / vanished for everybody else
        p.x = m.x; p.y = m.y; p.z = m.z; p.r = m.r; p.a = m.a | 0;
        bcast(room, { t: 's', id: p.id, x: m.x, y: m.y, z: m.z, r: m.r, a: m.a | 0, w: m.w & 31, vm: num(m.vm, 0, 60) ? m.vm | 0 : 0, sp: num(m.sp, 0, 100) ? m.sp : 0, ts: num(m.ts, 0, 1e15) ? m.ts : t, rs: m.rs | 0 }, p.id);
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

// keep every lobby panel honest: if somebody froze / left, the 'waiting for everybody' count updates within a couple of seconds
setInterval(() => {
  for (const room of rooms.values()) {
    if (room.phase === 'race' && room.players.size > 1) { sendBusy(room); if ((room.lobbyTick = (room.lobbyTick || 0) + 1) % 3 === 0) bcast(room, lobbyMsg(room)); }   // the roster again every 6 s: a client that missed a join packet heals itself
    const h = room.hub; if (!h || h.phase !== 'idle' || !h.inLobby.size) continue;
    const ids = pids(room), msg = JSON.stringify(h.lobbyMsg(ids));
    if (msg !== h.lastLobbyMsg) { h.lastLobbyMsg = msg; bcast(room, JSON.parse(msg)); }
  }
}, 2000);

// v245: the shared Jang match: the server moves the bots 20 times a second
setInterval(() => {
  for (const room of rooms.values()) {
    const h = room.chost; if (!h || room.phase !== 'race') continue;
    const pl = []; for (const q of room.players.values()) if (Number.isFinite(q.jx)) pl.push({ id: q.id, x: q.jx, z: q.jz, al: q.jal });
    try { h.tick(0.05, pl); } catch (e) { console.error('combat tick', e); }
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
