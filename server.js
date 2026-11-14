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
  try { for (const d of ['models', 'models-lite', 'audio', 'anim']) walk(path.join(pubDir, d)); avCache = String(mx | 0); } catch { /* keep the old one */ }
  return avCache;
};
// v474: every file gets its OWN version (its change time), so after an update a phone only downloads the files that really changed
let avmCache = {}, avmAt = 0;
const assetMap = () => {
  if (Date.now() - avmAt < 30e3) return avmCache; avmAt = Date.now(); const m = {};
  const walk = (d, rel) => { for (const f of fs.readdirSync(path.join(pubDir, d), { withFileTypes: true })) { const p = rel + '/' + f.name; if (f.isDirectory()) walk(d + '/' + f.name, p); else m[p] = String(fs.statSync(path.join(pubDir, d, f.name)).mtimeMs | 0); } };
  try { for (const d of ['models', 'models-lite', 'audio', 'anim']) walk(d, d); avmCache = m; } catch { /* keep the old one */ }
  return avmCache;
};
app.use(['/models', '/models-lite', '/audio', '/anim'], (q, r, next) => { if (q.query && q.query.v) r.set('Cache-Control', 'public, max-age=31536000, immutable'); next(); });
// v473: list of every Android-lite model / sound / animation (with the versioned URL the game asks for) so the phone can download them all once ("Download Jang")
app.get('/api/pack', (q, r) => {   // v476: ?lite=1 (Android) = the light models; otherwise (iPhone) the full models. Everything else is the same: all sounds, animations and pictures.
  const lite = q.query.lite === '1', v = assetVersion(), m = assetMap(), files = [], re = lite ? /^(models-lite|audio|anim)\// : /^(models|audio|anim)\//;
  for (const p of Object.keys(m)) if (re.test(p)) { let s = 0; try { s = fs.statSync(path.join(pubDir, p)).size; } catch { /* gone */ } files.push({ u: p + '?v=' + m[p], s }); }
  try { for (const f of fs.readdirSync(path.join(pubDir, 'img'))) files.push({ u: 'img/' + f, s: fs.statSync(path.join(pubDir, 'img', f)).size }); } catch { /* no pictures */ }
  r.set('Cache-Control', 'no-store').json({ v, files, bytes: files.reduce((a, f) => a + f.s, 0) });
});
app.get(['/', '/index.html'], (_q, r) => {
  try {
    const v = Math.max(fs.statSync(path.join(pubDir, 'game.js')).mtimeMs, fs.statSync(path.join(pubDir, 'style.css')).mtimeMs) | 0;
    const html = fs.readFileSync(path.join(pubDir, 'index.html'), 'utf8').replace(/game\.js\?v=\w+/, 'game.js?v=' + v).replace(/href="style\.css(\?v=\w+)?"/, 'href="style.css?v=' + v + '"')   /* v483: the page said style.css?v=337 for ever, so this never matched - and since the phones keep versioned files, they never received a new style sheet */.replace('__AV__', assetVersion()).replace('/*AVM*/null', JSON.stringify(assetMap()));
    r.set('Cache-Control', 'no-store').type('html').send(html);
  } catch (e) { r.set('Cache-Control', 'no-store').sendFile(path.join(pubDir, 'index.html')); }
});
app.use('/vendor/three', express.static(path.join(__dirname, 'node_modules/three'), { maxAge: '7d' }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 0, etag: true, setHeaders: (res, f) => { if (/\.(js|css|html)$/.test(f)) res.setHeader('Cache-Control', 'no-cache, must-revalidate'); } })); // always re-check with ETag: players get new versions right after a deploy, 304 keeps it cheap

const server = http.createServer(app);
process.on('uncaughtException', (e) => console.error('uncaughtException (kept running)', e)); process.on('unhandledRejection', (e) => console.error('unhandledRejection', e));
const wss = new WebSocketServer({ server, path: '/ws', maxPayload: 65536, perMessageDeflate: false });

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

// v338: Jang victory page: the winning team = the last team standing, or (time up) the team with the most kills
function buildRes(room, rd) {
  if (room.cresDone === rd) return; room.cresDone = rd; clearTimeout(room.cresT);
  const rows = [...room.players.values()].filter((q) => q.cs && q.cs.rd === rd).map((q) => ({ id: q.id, ...q.cs })); for (const g of room.csGone || []) if (g.rd === rd && !rows.some((r) => r.id === g.id)) rows.push({ ...g });
  if (!rows.length) return;
  const T = {}; for (const r of rows) { const t = T[r.tm] = T[r.tm] || { tm: r.tm, k: 0, d: 0, out: 1 }; t.k += r.k; t.d += r.d; if (!r.out) t.out = 0; }
  const teams = Object.values(T).sort((a, b) => (a.out - b.out) || (b.k - a.k) || (a.d - b.d));   // alive teams first, then most kills, then fewest deaths
  const noWin = teams.length === 1 && teams[0].out;   // v446: a lone team that was wiped out (everybody eliminated) has NOT won: it gets the DEFEAT page and song
  rows.sort((a, b) => b.k - a.k || a.d - b.d);
  bcast(room, { t: 'cres', rd, win: noWin ? -1 : teams[0].tm, rows, teams: teams.map((t) => ({ tm: t.tm, k: t.k, d: t.d, n: String(((room.teams || [])[t.tm] || {}).name || ('TEAM ' + (t.tm + 1))).slice(0, 24) })) });
  room.phase = 'results'; room.chost = null; bcast(room, lobbyMsg(room));   // v433: the match is over: the room is back in its lobby state (teams are kept) so the host can start the next one without making a new room
}
function evalWin(room, rd, timeUp) {
  if (room.cresDone === rd) return;
  const inM = [...room.players.values()].filter((q) => q.jtm !== undefined || (q.cs && q.cs.rd === rd));
  const alive = new Set(), all = new Set(); for (const q of inM) { const t = q.cs && q.cs.rd === rd ? q.cs.tm : q.jtm & 3; all.add(t); if (!(q.cs && q.cs.rd === rd && q.cs.out)) alive.add(t); }
  if (all.size >= 2 && alive.size <= 1) { if (room.cwinRd !== rd) { room.cwinRd = rd; bcast(room, { t: 'cwin', rd }); clearTimeout(room.cresT); room.cresT = setTimeout(() => buildRes(room, rd), 2500); } }
  if (inM.every((q) => q.cs && q.cs.rd === rd && q.cs.fin)) buildRes(room, rd);
  else if (timeUp && room.cresRd !== rd) { room.cresRd = rd; clearTimeout(room.cresT); room.cresT = setTimeout(() => buildRes(room, rd), 3000); }
}

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

const COMBAT_TEAMS = 4, TEAM_MAX = 4, capOf = (r) => (r && r.combat ? COMBAT_TEAMS * TEAM_MAX : MAX_PLAYERS);   // v274: Jang rooms hold up to 4 teams of 2-4 (PUBG custom room; v418: was 3)
let teamSeq = 1;
function teamsOf(room) { for (const t of room.teams || []) if (t.droid && t.ids.size !== 1) t.droid = false; /* v507: the INTELLIDROID belongs only to a team with exactly ONE real player */ return (room.teams || []).map((t) => ({ id: t.id, name: t.name, leader: t.leader, fill: !!t.fill, droid: !!t.droid, ids: [...t.ids] })); }
function leaveTeam(room, p) {
  if (!room || !room.teams || p.team == null) return; const t = room.teams.find((q) => q.id === p.team); p.team = null; if (!t) return; t.ids.delete(p.id);
  if (!t.ids.size) room.teams = room.teams.filter((q) => q !== t); else if (t.leader === p.id) t.leader = t.ids.values().next().value;
}
function lobbyMsg(room) {
  return {
    t: 'lobby', code: room.code, hostId: room.hostId, level: room.level, phase: room.phase, combat: !!room.combat, teams: teamsOf(room),
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

// v274: before a Jang match: players without a team are placed (FILL teams first, then a new team, then any free seat); with 2+ players every team needs 2 to 4 members
function prepTeams(room, ws) {
  room.teams = room.teams || []; const players = [...room.players.values()];
  if (players.length > 1) {
    const loose = players.filter((q) => q.team == null).sort(() => Math.random() - 0.5);
    const put = (t, q) => { t.ids.add(q.id); q.team = t.id; };
    /* v381: loose players are GROUPED (3 players with no team = ONE team of 3, not three teams of 1 that then fail the "2 to 4" rule): 1) teams with fewer than 2 are topped up, 2) FILL teams take the rest up to 4, 3) the others form new teams of 2-4 (dealt evenly), 4) a last single player joins the smallest team with a free seat */
    for (const t of room.teams) while (t.ids.size + (t.droid ? 1 : 0) < 2 && loose.length) put(t, loose.shift());
    for (const t of room.teams.filter((x) => x.fill)) while (t.ids.size + (t.droid ? 1 : 0) < TEAM_MAX && loose.length) put(t, loose.shift());
    if (loose.length === 1 && players.length === 2 && room.teams.some((t) => t.droid) && room.teams.length < COMBAT_TEAMS) { const q = loose.shift(), t = { id: teamSeq++, name: 'TEAM ' + (room.teams.length + 1), leader: q.id, fill: false, ids: new Set() }; room.teams.push(t); put(t, q); }   // v460: the other real player of a 1 v droid match gets his own team
    if (loose.length) {
      const free = COMBAT_TEAMS - room.teams.length, k = Math.min(Math.ceil(loose.length / TEAM_MAX), Math.floor(loose.length / 2), free);
      if (k >= 1) { const ts = []; for (let i = 0; i < k; i++) { const t = { id: teamSeq++, name: 'TEAM ' + (room.teams.length + 1), leader: loose[i].id, fill: false, ids: new Set() }; room.teams.push(t); ts.push(t); } loose.forEach((q, i) => put(ts[i % k], q)); }
      else for (const q of loose) { const t = room.teams.filter((x) => x.ids.size < TEAM_MAX).sort((u, v) => u.ids.size - v.ids.size)[0]; if (!t) { send(ws, { t: 'err', msg: 'No free team seats.' }); return false; } put(t, q); }
    }
    if (room.teams.some((t) => t.ids.size > TEAM_MAX)) { send(ws, { t: 'err', msg: 'No free team seats.' }); return false; }
    for (const t of room.teams) if (t.droid && (players.length < 2 || t.ids.size !== 1)) t.droid = false;   // v507: every team with exactly ONE real player may bring its own INTELLIDROID (2+ real players in the room)
    const hasDroid = room.teams.some((t) => t.droid), small = room.teams.find((t) => t.ids.size + (t.droid ? 1 : 0) < 2 && !(hasDroid && players.length === 2));   // v460: with the droid and only 2 real players it is 1 human + droid v 1 human
    if (small) { send(ws, { t: 'err', msg: `Team ${small.name} has only 1 player. Every team needs 2 to 4 players (or the player can leave the team).` }); return false; }
    bcast(room, lobbyMsg(room));
  } else if (!room.teams.length) { const q = players[0]; const t = { id: teamSeq++, name: 'TEAM 1', leader: q.id, fill: false, ids: new Set([q.id]) }; room.teams.push(t); q.team = t.id; }
  return true;
}
const goMsg = (room, meta) => ({
  t: 'go', t0: room.t0, level: room.level, limit: meta.limit, seed: room.seed, order: [...room.players.values()].map((p) => p.id),
  ...(room.combat ? { teamOf: Object.fromEntries([...room.players.values()].map((p) => [p.id, Math.max(0, (room.teams || []).findIndex((t) => t.id === p.team))])), teamNames: (room.teams || []).map((t) => t.name) } : null),
});

function startRound(room) {
  const meta = LEVEL_META[room.level];
  room.cresDone = null; room.cwinRd = null; room.cresRd = null; clearTimeout(room.cresT); room.csGone = []; for (const q of room.players.values()) q.csSnap = null; for (const q of room.players.values()) q.cs = null;   // v433: a rematch starts clean
  room.phase = 'countdown';
  room.t0 = Date.now() + (meta.city ? 0 : COUNTDOWN_MS);   // the open-world city has no 3-2-1: you simply start
  room.finishCount = 0;
  room.firstFinish = false;
  room.cars = {};
  room.busyIds = [];
  room.seed = 1 + Math.floor(Math.random() * 1e9);
  for (const p of room.players.values()) { p.mounted = 0; p.finished = false; p.finTime = 0; p.z = 0; p.y = 0; p.x = 0; }
  room.chost = room.combat && room.players.size >= 2 ? new CombatHost(room.seed, (o) => bcast(room, o), (id, o) => { const q = room.players.get(id); if (q && q.ws) send(q.ws, o); }, room.diff, room.botN) : null;   // v245: the shared Jang match: the server runs the bots + loot
  if (room.combat) for (const q of room.players.values()) q.jtm = Math.max(0, (room.teams || []).findIndex((t) => t.id === q.team));
  if (room.chost) (room.teams || []).forEach((t, di) => { if (t.droid && t.ids.size === 1) room.chost.addDroid(di); });   // v507: one INTELLIDROID for every team that asked for one (it takes the empty seat of a 1-player team)
  bcast(room, goMsg(room, meta));
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
  const gone = p.cs || p.csSnap; if (gone) { room.csGone = (room.csGone || []).filter((g) => g.id !== p.id); room.csGone.push({ id: p.id, ...gone }); }   // v456: a teammate who died and pressed LEAVE (or dropped) still appears on the victory / defeat table
  leaveTeam(room, p); room.players.delete(p.id);
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
  p.char = room.combat ? (Number.isInteger(p.char) && p.char >= 0 && p.char < CHARACTERS.length ? p.char : 0) : freeChar(room, p.char, p.id); if (!(p.skin >= 0 && p.skin < 9) || (p.skin < 4 && p.skin !== p.char)) p.skin = p.char;   // a GTA hero look belongs to its slot; the Jang soldiers (4..8) can sit in any slot
  if (p.skin >= 4 && !room.combat) { const used = new Set([...room.players.values()].filter((q) => q.id !== p.id).map((q) => q.skin)); if (used.has(p.skin)) { let k = 4; while (k < 9 && used.has(k)) k++; p.skin = k < 9 ? k : p.char; } }
  room.players.set(p.id, p);
  p.finished = false; p.finTime = 0; p.x = 0; p.y = 0; p.z = 0;
  send(p.ws, { t: 'joined', id: p.id, code: room.code }); sendBusy(room, p);
  bcast(room, lobbyMsg(room));
  if (room.phase === 'race' || room.phase === 'countdown') { // joined a race that is already running: drop in at the start line
    const meta = LEVEL_META[room.level];
    send(p.ws, goMsg(room, meta));
    if (room.cars && Object.keys(room.cars).length) send(p.ws, { t: 'cars', cars: room.cars });
  }
}

// ---------------------------------------------------------------- sockets
// ---- public-internet safety: limit connections per IP, messages per second, and number of rooms
const MAX_PER_IP = 24, MAX_ROOMS = 40;   // v431: was 12: 16 friends on ONE home wifi (or one mobile carrier address) share a public IP, so the 13th was refused
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

  const onMsg = (raw) => {
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
        if ((p.team == null ? null : p.team) !== (q.team == null ? null : q.team)) return;   // v429: voice groups: the main lobby (no team) and every team are separate; nobody can hear another group
        const out = { t: 'vc', from: p.id, k: m.k, d: m.d }, js = JSON.stringify(out); if (js.length > 7000) return;
        if (q.ws.readyState === 1) q.ws.send(js); break;
      }
      case 'rooms': { const open = [...rooms.values()].filter((x) => x.players.size < capOf(x) && !!x.combat === !!m.combat); send(ws, { t: 'rooms', n: open.length, l: open.slice(0, 8).map((x) => x.code) }); break; }   // lets the JOIN button know whether a room exists

      case 'create': {
        if (rooms.size >= MAX_ROOMS && !room) return send(ws, { t: 'err', msg: 'Server is busy. Try again in a minute.' });
        const want = roomKey(m.room);
        if (want && rooms.has(want) && !(room && room.code === want)) {   // v433: the name is taken: instead of a dead end the player simply JOINS that room (like a PUBG custom room code)
          const ex = rooms.get(want);
          if (!!ex.combat !== !!m.combat || ex.players.size >= capOf(ex)) return send(ws, { t: 'err', msg: ex.players.size >= capOf(ex) ? `Room ${want} is full.` : `A room named ${want} already exists. Choose another name.` });
          if (room) removePlayer(p);
          p.name = cleanName(m.name); p.char = m.char | 0; p.skin = m.skin | 0; p.zom = !!m.zom; joinRoom(p, ex); break;
        }
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
          r = all.find((x) => (x.phase === 'lobby' || x.phase === 'results') && x.players.size < capOf(x)) || all.find((x) => x.players.size < capOf(x));
          if (!r) {
            if (!all.length) return send(ws, { t: 'err', msg: 'No room has been created yet. Ask the host to tap CREATE ROOM first, then tap JOIN ROOM.' });
            return send(ws, { t: 'err', msg: `The room is full (${MAX_PLAYERS} players max).` });
          }
        }
        if (r.players.size >= capOf(r)) return send(ws, { t: 'err', msg: `Room is full (${capOf(r)} players max).` });
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
        p.jx = m.x; p.jy = m.y; p.jz = m.z; p.jal = (m.ph | 0) >= 4 && m.al ? 1 : 0; p.jtm = m.tm & 3; p.jsp = num(m.sp, 0, 100) ? m.sp : 0; p.jst = (m.st | 0) & 3;   // v245: where I am and whether the bots may shoot me
        bcast(room, { t: 'jt', id: p.id, ph: m.ph & 7, x: m.x, y: m.y, z: m.z, r: m.r, sp: num(m.sp, 0, 100) ? m.sp : 0, c: p.char | 0, sk: (p.skin | 0) & 15, nm: p.name, tm: m.tm & 3, vi: (m.vi | 0) & 15, ps: m.ps & 3, wp: typeof m.wp === 'string' && m.wp.length < 12 ? m.wp : '', ai: m.ai ? 1 : 0, hn: m.hn ? 1 : 0, rv: m.rv ? 1 : 0, al: m.al ? 1 : 0, dd: m.dd ? 1 : 0, st: (m.st | 0) & 32767, lv: num(m.lv, -1, 1) ? m.lv : 0, rl: num(m.rl, 0, 1) ? m.rl : 0, cp: num(m.cp, -2, 2) ? m.cp : 0, nt: (m.nt | 0) & 3, vy: num(m.vy, -60, 60) ? m.vy : 0, iv: typeof m.iv === 'string' && m.iv.length < 160 && /^[\w,]*$/.test(m.iv) ? m.iv : undefined }, p.id); break;
      }
      case 'jr': {   // v244: a teammate revives me (relay only)
        if (!room || !room.combat || room.phase !== 'race') return;
        const q = room.players.get(m.to); if (!q || q === p || !q.ws) return;
        const t = Date.now(); if (t - (p.lastJr || 0) < 500) return; p.lastJr = t;
        send(q.ws, { t: 'jr', from: p.id }); break;
      }
      case 'cdiff': { if (room && p.id === room.hostId && ['easy', 'medium', 'hard'].includes(m.d)) { room.diff = m.d; room.botN = Number.isInteger(m.n) && m.n >= 4 && m.n <= 32 ? m.n : 0;   /* v379: the HOST's phone / laptop picks the bot count (phones get fewer) */ if (room.chost) { room.chost.sim.setDiff(m.d); if (room.botN && room.chost.sim.t < 20 && room.chost.sim.bots.length !== room.botN) { room.chost = new CombatHost(room.seed, (o) => bcast(room, o), (id, o) => { const q = room.players.get(id); if (q && q.ws) send(q.ws, o); }, room.diff, room.botN); for (const q of room.players.values()) room.chost.init(q.id); } } } break; }   // v379: the host's cdiff arrives just after the match starts: rebuild the bots at the host's count while the match is brand new   // v331: the room host's BOT DIFFICULTY
      case 'chello': { if (room && room.chost) room.chost.init(p.id); break; }   // v245: shared match: the phone asks for the bots + loot
      case 'cshoot': case 'cmelee': case 'cblast': case 'ctake': case 'cdrop': case 'csmoke': case 'cfire': {
        if (!room || !room.chost || room.phase !== 'race') return;
        const t = Date.now();
        if (m.t === 'cdrop') { if (t - (p.dropW || 0) > 1000) { p.dropW = t; p.dropN = 0; } if (++p.dropN > 40) return; }   // v301: a dead player's whole kit is 8-20 drops in ONE tick: the 25 ms gap below threw all but the first away, so other players never saw the gold box's items
        else { if (t - (p.lastC || 0) < 25) return; p.lastC = t; }
        const h = room.chost; ({ cshoot: () => h.shoot(p, m), cmelee: () => h.melee(p, m), cblast: () => h.blast(p, m), ctake: () => h.take(p, m), cdrop: () => h.drop(p, m), csmoke: () => h.smoke(p, m), cfire: () => h.fire(p, m) })[m.t](); break;
      }
      case 'cstat': {   // v338: Jang: every player reports his own end-of-match stats; the server picks the winning team and sends the victory page data to everybody
        if (!room || !room.combat || room.phase !== 'race') return;
        const clean = (o) => { const r = {}; if (o && typeof o === 'object') for (const k of Object.keys(o).slice(0, 14)) if (k.length < 14 && num(o[k], 0, 999)) r[k] = o[k] | 0; return r; };
        if (m.snap) { p.csSnap = { rd: m.rd | 0, name: String(p.name || '').slice(0, 24), tm: p.jtm & 3, ch: p.char | 0, sk: (p.skin | 0) & 15, k: num(m.k, 0, 999) ? m.k | 0 : 0, d: num(m.d, 0, 999) ? m.d | 0 : 0, bots: clean(m.bots), ply: clean(m.ply), dby: clean(m.dby), out: 1, fin: 0 }; break; }   // v456: a player who is out reports once, so the table still lists him if he leaves before the end
        p.cs = { rd: m.rd | 0, name: String(p.name || '').slice(0, 24), tm: p.jtm & 3, ch: p.char | 0, sk: (p.skin | 0) & 15, k: num(m.k, 0, 999) ? m.k | 0 : 0, d: num(m.d, 0, 999) ? m.d | 0 : 0, bots: clean(m.bots), ply: clean(m.ply), dby: clean(m.dby), out: m.out ? 1 : 0, fin: m.fin ? 1 : 0 };
        evalWin(room, p.cs.rd, !!m.tu); break;
      }
      case 'cpv': case 'cpk': {   // v246: PvP (relay only, checked): a shot at a player of the OTHER team / the kill credit for the shooter
        if (!room || !room.combat || room.phase !== 'race') return;
        const q = room.players.get(m.to); if (!q || q === p || !q.ws) return;
        const t = Date.now(); if (t - (p[m.t === 'cpv' ? 'lastPv' : 'lastPk'] || 0) < (m.t === 'cpv' ? 40 : 800)) return; p[m.t === 'cpv' ? 'lastPv' : 'lastPk'] = t;
        if (m.t === 'cpv') { if (!num(m.d, 0, 60) || p.jtm === q.jtm || !q.jal || !p.jal || !Number.isFinite(p.jx) || !Number.isFinite(q.jx) || Math.hypot(p.jx - q.jx, p.jz - q.jz) > 320) return; send(q.ws, { t: 'cpv', from: p.id, d: m.d, w: typeof m.w === 'string' && m.w.length < 12 ? m.w : '' }); }
        else send(q.ws, { t: 'cpk' });
        break;
      }
      case 'jf': {   // v241: Jang: somebody fired (position + gun type) so everybody nearby hears it from the right side
        if (!room || !room.combat || room.phase !== 'race') return;
        const t = Date.now(); if (t - (p.lastJf || 0) < 70) return; p.lastJf = t;
        if (!num(m.x, -2000, 2000) || !num(m.z, -2000, 2000)) return;
        bcast(room, { t: 'jf', id: p.id, x: m.x, z: m.z, w: m.w & 3, r: num(m.r, -1e4, 1e4) ? m.r : 0 }, p.id); break;
      }
      case 'cpin': {   // v410: Jang: a teammate's map PIN (a flag with his name) goes to his own team only; on = 0 removes it
        if (!room || !room.combat || room.phase !== 'race') return;
        const t = Date.now(); if (t - (p.lastPin || 0) < 250) return; p.lastPin = t;
        const on = m.on ? 1 : 0; if (on && (!num(m.x, -2000, 2000) || !num(m.z, -2000, 2000))) return; if (p.team == null) return;
        const o = JSON.stringify({ t: 'cpin', id: p.id, nm: String(p.name || '').slice(0, 14), c: p.char | 0, x: on ? m.x : 0, z: on ? m.z : 0, on });
        for (const q of room.players.values()) if (q.id !== p.id && q.team === p.team && q.ws.readyState === 1) q.ws.send(o);
        break;
      }
      case 'emote': {   // v227: a lobby gesture (wave, salute...) is shown to everybody in the room
        if (!room || room.phase !== 'lobby' || !['wave', 'hi', 'salute', 'cheer'].includes(m.g)) return;
        bcast(room, { t: 'emote', char: p.char | 0, g: m.g }); break;
      }
      case 'char': {
        if (!room || room.phase === 'race' || room.phase === 'countdown') return;
        const c = m.char | 0;
        const taken = !room.combat && [...room.players.values()].some((q) => q.id !== p.id && q.char === c);
        if (taken || c < 0 || c >= CHARACTERS.length) return;
        const sk = m.skin | 0; if (!room.combat && sk >= 4 && sk < 9 && [...room.players.values()].some((q) => q.id !== p.id && q.skin === sk)) return;   // two players never wear the same soldier
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
      case 'tcreate': case 'tjoin': case 'tleave': case 'tfill': {   // v274 PUBG custom room: make a team (name), join a team, leave it, FILL switch
        if (!room || !room.combat || (room.phase !== 'lobby' && room.phase !== 'results')) return; room.teams = room.teams || [];
        if (m.t === 'tcreate') { if (room.teams.length >= COMBAT_TEAMS) return send(ws, { t: 'err', msg: `Only ${COMBAT_TEAMS} teams fit in a match. Join one of them.` }); leaveTeam(room, p); const t = { id: teamSeq++, name: cleanName(m.name || 'Team').slice(0, 12).toUpperCase() || 'TEAM', leader: p.id, fill: false, ids: new Set([p.id]) }; room.teams.push(t); p.team = t.id; }
        else if (m.t === 'tjoin') { const t = room.teams.find((q) => q.id === (m.team | 0)); if (!t) return; if (t.ids.has(p.id)) return; if (t.ids.size >= TEAM_MAX) return send(ws, { t: 'err', msg: 'That team is full (4 players).' }); if (t.droid) return send(ws, { t: 'err', msg: 'That team plays as 1 player + INTELLIDROID. Its leader must switch the droid OFF before another player can join.' }); leaveTeam(room, p); t.ids.add(p.id); p.team = t.id; }
        else if (m.t === 'tleave') leaveTeam(room, p);
        else { const t = room.teams.find((q) => q.id === p.team); if (!t || t.leader !== p.id) return; t.fill = !!m.on; }
        bcast(room, lobbyMsg(room));
        break;
      }
      case 'tsolo': {   // v511: ONE TAP: "my own team + INTELLIDROID" (leaves the current team, makes a team named after me, switches the droid on)
        if (!room || !room.combat || (room.phase !== 'lobby' && room.phase !== 'results')) return; room.teams = room.teams || [];
        if (room.players.size < 2) return send(ws, { t: 'err', msg: 'INTELLIDROID needs at least 2 real players in the room.' });
        const cur = room.teams.find((q) => q.id === p.team);
        if (cur && cur.ids.size === 1 && cur.leader === p.id) cur.droid = true;
        else { if (room.teams.length - (cur && cur.ids.size === 1 ? 1 : 0) >= COMBAT_TEAMS) return send(ws, { t: 'err', msg: `Only ${COMBAT_TEAMS} teams fit in a match.` }); leaveTeam(room, p); const t = { id: teamSeq++, name: cleanName(p.name || 'Team').slice(0, 12).toUpperCase() || 'TEAM', leader: p.id, fill: false, ids: new Set([p.id]), droid: true }; room.teams.push(t); p.team = t.id; }
        bcast(room, lobbyMsg(room)); break;
      }
      case 'tdroid': {   // v507: INTELLIDROID: the leader of a team with exactly ONE real player adds / removes his own AI teammate (every such team may have one)
        if (!room || !room.combat || (room.phase !== 'lobby' && room.phase !== 'results')) return;
        const t = (room.teams || []).find((q) => q.id === p.team); if (!t || t.leader !== p.id) return;
        if (m.on) { if (room.players.size < 2) return send(ws, { t: 'err', msg: 'INTELLIDROID needs at least 2 real players in the room.' }); if (t.ids.size !== 1) return send(ws, { t: 'err', msg: 'INTELLIDROID joins only a team that has exactly 1 real player.' }); t.droid = true; } else t.droid = false;
        bcast(room, lobbyMsg(room)); break;
      }
      case 'tshuffle': {   // v433: the host mixes everybody into new teams (team names are kept)
        if (!room || !room.combat || room.hostId !== p.id || (room.phase !== 'lobby' && room.phase !== 'results')) return;
        const pl = [...room.players.values()].sort(() => Math.random() - 0.5), n = pl.length; if (n < 2) return;
        room.teams = room.teams || []; let k = Math.min(COMBAT_TEAMS, Math.max(room.teams.length, Math.ceil(n / TEAM_MAX), 2)); while (k > 1 && Math.floor(n / k) < 2) k--;
        while (room.teams.length < k) room.teams.push({ id: teamSeq++, name: 'TEAM ' + (room.teams.length + 1), leader: 0, fill: false, ids: new Set() });
        room.teams = room.teams.slice(0, k); for (const t of room.teams) { t.ids = new Set(); t.droid = false; } for (const q of pl) q.team = null;
        pl.forEach((q, i) => { const t = room.teams[i % k]; t.ids.add(q.id); q.team = t.id; if (!t.leader || !t.ids.has(t.leader)) t.leader = q.id; });
        bcast(room, lobbyMsg(room)); break;
      }
      case 'start': {
        if (!room || room.hostId !== p.id || (room.phase !== 'lobby' && room.phase !== 'results')) return;
        if (room.combat && !prepTeams(room, ws)) return;
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
        bcast(room, { t: 'gr', id: p.id, k: 1, x: m.x, y: m.y, z: m.z, vx: m.vx, vy: m.vy, vz: m.vz, aim: m.aim ? 1 : 0, sm: m.sm ? 1 : 0, mo: m.mo ? 1 : 0 }, p.id);
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
        bcast(room, { t: 's', id: p.id, x: m.x, y: m.y, z: m.z, r: m.r, a: m.a | 0, w: m.w & 127, vm: num(m.vm, 0, 60) ? m.vm | 0 : 0, sp: num(m.sp, 0, 100) ? m.sp : 0, ts: num(m.ts, 0, 1e15) ? m.ts : t, rs: m.rs | 0 }, p.id);
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
  };
  ws.on('message', (raw) => { try { onMsg(raw); } catch (e) { console.error('message handler error (connection kept)', e); } });   // v281: one bad message used to throw out of the handler and CRASH the whole server = everybody disconnected

  ws.on('close', () => { try { removePlayer(p); } catch (e) { console.error('removePlayer', e); } });
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
    const pl = []; for (const q of room.players.values()) if (Number.isFinite(q.jx)) pl.push({ id: q.id, tm: q.jtm & 3, x: q.jx, y: q.jy, z: q.jz, al: q.jal, mv: q.jsp || 0, stn: q.jst === 2 ? 2 : q.jst === 1 ? 1 : 0 });
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

process.on('SIGTERM', () => { try { for (const ws of wss.clients) if (ws.readyState === 1) ws.send(JSON.stringify({ t: 'err', msg: 'The server is updating to a new version - wait about a minute, then reload the page and rejoin.' })); } catch { /* ignore */ } setTimeout(() => process.exit(0), 400); });   // v283: a deploy restarts the server; players are told why instead of a silent drop
server.listen(PORT, '0.0.0.0', () => console.log(`Parkour Haris running on http://localhost:${PORT}`));
