// AGE OF WAR: the simulation. Pure JS (no three.js) so the SERVER (multiplayer) and the CLIENT (single player) run exactly the same rules.
// Team 0 = all the humans (they SHARE one pool of resources). Team 1 = the computer, which builds its own army.
// The AI's strength follows the number of humans in the room (w.n): even ONE player gets an easy, fair game.
export const W = { HX: 70, HZ: 70, LIMIT: 600 };
export const UK = {
  vil:    { name: 'Villager', hp: 40,  speed: 4.4, r: 0.7,  cost: { food: 50 },             time: 6,  dmg: 3,  range: 0.8,  mil: 0, sight: 10 },
  spear:  { name: 'Spearman', hp: 70,  speed: 4.8, r: 0.8, cost: { food: 40, wood: 20 },   time: 7,  dmg: 9,  range: 1.0,  mil: 1, sight: 12 },
  arch:   { name: 'Archer',   hp: 45,  speed: 4.8, r: 0.75,  cost: { wood: 40, gold: 25 },   time: 8,  dmg: 7,  range: 10.5, mil: 1, sight: 13 },
  knight: { name: 'Knight',   hp: 120, speed: 7.6, r: 1.0,  cost: { food: 60, gold: 50 },   time: 11, dmg: 13, range: 1.1,  mil: 1, sight: 12 },
};
export const UKIDS = ['vil', 'spear', 'arch', 'knight'];
export const BK = {
  tc:       { name: 'Town Center', hp: 1500, r: 4.6, cost: {}, build: 0, pop: 10, train: ['vil'] },
  house:    { name: 'House',       hp: 220,  r: 2.0, cost: { wood: 30 }, build: 12, pop: 5, train: [] },
  barracks: { name: 'Barracks',    hp: 520,  r: 3.3, cost: { wood: 120 }, build: 22, pop: 0, train: ['spear', 'arch', 'knight'] },
  tower:    { name: 'Tower',       hp: 380,  r: 1.9, cost: { stone: 70, wood: 40 }, build: 20, pop: 0, train: [], atk: { dmg: 8, range: 15 } },
};
export const BKIDS = ['tc', 'house', 'barracks', 'tower'];
const MULT = { spear: { knight: 2.2 }, knight: { arch: 2.0 }, arch: { spear: 1.8 } };   // rock - paper - scissors
const BMULT = { vil: 0.4, spear: 0.8, arch: 0.35, knight: 0.7 };                           // damage against buildings
const RATE = { tree: 1.7, gold: 1.3, stone: 1.3, berry: 1.7 }, RES = { tree: 'wood', gold: 'gold', stone: 'stone', berry: 'food' }, CAP = 8;
export const NODE_R = { tree: 1.0, gold: 1.4, stone: 1.3, berry: 1.0 };

function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
const dist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const radOf = (e) => (e.hp === undefined ? NODE_R[e.kind] : BK[e.kind] ? BK[e.kind].r : UK[e.kind].r);
const isB = (e) => !!BK[e.kind];

export function newWar(n = 1) {
  const w = { t: 0, n: Math.max(1, n), id: 1, units: [], blds: [], nodes: [], over: 0, ev: [], limit: W.LIMIT,
    res: [{ food: 200, wood: 200, gold: 100, stone: 100 }, { food: 200, wood: 200, gold: 100, stone: 100 }], pop: [0, 0], cap: [10, 10],
    ai: { t: 0, wave: 150 + (1.5 - (0.55 + 0.32 * (Math.max(1, Math.min(4, n)) - 1))) * 70, last: 0, built: 0 }, aiRate: 0.9 };
  const R = rng(7);
  const addNode = (kind, x, z, amt) => w.nodes.push({ id: w.id++, kind, x, z, amt, amt0: amt });
  for (const [s, team] of [[1, 0], [-1, 1]]) {
    const tc = addB(w, team, 'tc', 0, s * 52, 1);
    for (let i = 0; i < 4; i++) addU(w, team, 'vil', -4 + i * 2.7, s * 52 + s * 7.5);
    // resources around the base (the same layout for both sides)
    for (let i = 0; i < 4; i++) addNode('berry', -7 + i * 4.6, s * 38 + (i % 2) * 1.5, 260);
    for (let i = 0; i < 16; i++) addNode('tree', s * 0 + (i < 8 ? -1 : 1) * (20 + (i % 4) * 3.2 + R() * 2), s * (40 + Math.floor((i % 8) / 2) * 4.2 + R() * 2), 140);
    addNode('gold', -24, s * 50, 650); addNode('gold', -27, s * 55, 650);
    addNode('stone', 25, s * 52, 450); addNode('stone', 28, s * 47, 450);
    void tc;
  }
  addNode('gold', -22, 0, 800); addNode('gold', 22, 0, 800); addNode('stone', 0, 4, 500);
  for (let i = 0; i < 18; i++) { const x = (R() - 0.5) * 120, z = (R() - 0.5) * 50; if (Math.abs(x) < 8) continue; addNode('tree', x, z, 140); }
  w.pop = [4, 4]; w.cap = [10, 10];
  return w;
}
function addU(w, team, kind, x, z) {
  const u = { id: w.id++, team, kind, x, z, hp: UK[kind].hp, order: 'idle', tgt: 0, tx: x, tz: z, cd: 0, st: 0, yaw: team ? 0 : Math.PI, carry: { t: '', n: 0 }, gp: 0 };
  w.units.push(u); return u;
}
function addB(w, team, kind, x, z, built) {
  const K = BK[kind], b = { id: w.id++, team, kind, x, z, hp: built ? K.hp : K.hp * 0.12, maxhp: K.hp, built, queue: [], cd: 0 };
  w.blds.push(b); return b;
}

// ------------------------------------------------------------------ queries
function mapOf(w) { const M = new Map(); for (const u of w.units) M.set(u.id, u); for (const b of w.blds) M.set(b.id, b); for (const n of w.nodes) M.set(n.id, n); return M; }
function nearestEnemy(w, u, range) {
  let best = null, bd = 1e9;
  for (const e of w.units) { if (e.team === u.team || e.hp <= 0) continue; const d = dist(u, e) - 3; if (d < range && d < bd) { bd = d; best = e; } }
  if (best) return best;
  bd = 1e9;
  for (const e of w.blds) { if (e.team === u.team || e.hp <= 0) continue; const d = dist(u, e) - BK[e.kind].r; if (d < range && d < bd) { bd = d; best = e; } }
  return best;
}
function nearestNode(w, x, z, res, range = 1e9, from) {
  let best = null, bd = range;
  for (const n of w.nodes) { if (n.amt <= 0 || RES[n.kind] !== res) continue; const d = Math.hypot(n.x - x, n.z - z); if (d < bd) { bd = d; best = n; } }
  void from; return best;
}
const ownTC = (w, u) => { let best = null, bd = 1e9; for (const b of w.blds) if (b.team === u.team && b.kind === 'tc' && b.built >= 1 && b.hp > 0) { const d = dist(u, b); if (d < bd) { bd = d; best = b; } } return best; };
const canPay = (r, cost) => Object.entries(cost).every(([k, v]) => r[k] >= v);
const pay = (r, cost) => { for (const [k, v] of Object.entries(cost)) r[k] -= v; };

function obstacles(w) { const o = []; for (const n of w.nodes) if (n.amt > 0) o.push({ id: n.id, x: n.x, z: n.z, r: NODE_R[n.kind] }); for (const b of w.blds) if (b.hp > 0) o.push({ id: b.id, x: b.x, z: b.z, r: BK[b.kind].r }); return o; }
function placeOK(w, kind, x, z) {
  const r = BK[kind].r;
  if (Math.abs(x) > W.HX - r - 2 || Math.abs(z) > W.HZ - r - 2) return false;
  for (const o of obstacles(w)) if (Math.hypot(o.x - x, o.z - z) < o.r + r + 1.2) return false;
  return true;
}

// ------------------------------------------------------------------ movement
function moveTo(w, u, tx, tz, dt, ob) {
  const K = UK[u.kind]; let dx = tx - u.x, dz = tz - u.z; const d = Math.hypot(dx, dz);
  if (d < 1e-3) return 0;
  dx /= d; dz /= d;
  const step = Math.min(K.speed * dt, d); let vx = dx * step, vz = dz * step;
  for (const o of ob) {
    const ox = u.x + vx - o.x, oz = u.z + vz - o.z, rr = o.r + K.r, dd = Math.hypot(ox, oz);
    if (dd >= rr) continue;
    const nx = ox / (dd || 1), nz = oz / (dd || 1), inward = vx * nx + vz * nz;
    if (inward < 0) { vx -= inward * nx; vz -= inward * nz; const tg = (nx * dz - nz * dx) >= 0 ? 1 : -1; vx += -nz * tg * step * 0.55; vz += nx * tg * step * 0.55; }
  }
  u.x += vx; u.z += vz; if (Math.abs(vx) + Math.abs(vz) > 1e-4) u.yaw = Math.atan2(vx, vz);
  return d;
}
const face = (u, t) => { u.yaw = Math.atan2(t.x - u.x, t.z - u.z); };
const reach = (u, e) => dist(u, e) - radOf(e) - UK[u.kind].r;

function hit(w, u, t) {
  const K = UK[u.kind];
  const mult = isB(t) ? BMULT[u.kind] : (MULT[u.kind] && MULT[u.kind][t.kind]) || 1;
  t.hp -= K.dmg * mult;
  w.ev.push(K.range > 3 ? ['shot', +u.x.toFixed(1), +u.z.toFixed(1), +t.x.toFixed(1), +t.z.toFixed(1)] : ['hit', +t.x.toFixed(1), +t.z.toFixed(1)]);
}

function stepUnit(w, u, dt, M, ob) {
  const K = UK[u.kind]; u.cd = Math.max(0, u.cd - dt); u.st = 0;
  if (u.order === 'idle' && K.mil) { const e = nearestEnemy(w, u, K.sight); if (e) { u.order = 'attack'; u.tgt = e.id; u.auto = 1; u.home = { x: u.x, z: u.z }; } }
  else if (u.order === 'idle' && !K.mil && u.team === 0 && u.autoWork) { /* villagers fetched by their TC rally */ }
  if (u.order === 'amove') {
    const e = nearestEnemy(w, u, K.sight);
    if (e) { u.order = 'attack'; u.tgt = e.id; u.auto = 1; u.home = null; }
    else { const d = moveTo(w, u, u.tx, u.tz, dt, ob); u.st = 1; if (d < 3) { u.order = 'idle'; u.amove = 0; } }
  } else if (u.order === 'move') {
    const d = moveTo(w, u, u.tx, u.tz, dt, ob); u.st = 1; if (d < 0.5) u.order = 'idle';
  } else if (u.order === 'attack') {
    const t = M.get(u.tgt);
    if (!t || t.hp <= 0 || t.team === u.team || t.amt !== undefined) { u.order = u.amove ? 'amove' : 'idle'; return; }
    if (u.auto && u.home && Math.hypot(u.x - u.home.x, u.z - u.home.z) > 26) { u.order = 'idle'; u.auto = 0; return; }
    if (reach(u, t) > K.range) { moveTo(w, u, t.x, t.z, dt, ob); u.st = 1; }
    else { u.st = 2; face(u, t); if (u.cd <= 0) { u.cd = 1.0; hit(w, u, t); } }
  } else if (u.order === 'gather') {
    let nd = M.get(u.tgt);
    if (u.gp === 0) {
      if (!nd || nd.amt <= 0) { const alt = nd ? nearestNode(w, nd.x, nd.z, RES[nd.kind], 24) : null; if (alt) { u.tgt = alt.id; nd = alt; } else if (u.carry.n > 0) u.gp = 2; else { u.order = 'idle'; return; } }
      if (nd && reach(u, nd) > 0.7) { moveTo(w, u, nd.x, nd.z, dt, ob); u.st = 1; } else if (nd) { u.gp = 1; }
    } else if (u.gp === 1) {
      if (!nd || nd.amt <= 0) { u.gp = u.carry.n > 0 ? 2 : 0; return; }
      u.st = 3; face(u, nd);
      const take = Math.min(RATE[nd.kind] * dt, nd.amt, CAP - u.carry.n); u.carry.t = RES[nd.kind]; u.carry.n += take; nd.amt -= take;
      if (u.carry.n >= CAP - 1e-6) u.gp = 2;
    } else {
      const tc = ownTC(w, u); if (!tc) { u.order = 'idle'; return; }
      if (reach(u, tc) > 0.9) { moveTo(w, u, tc.x, tc.z, dt, ob); u.st = 1; }
      else { w.res[u.team][u.carry.t] += u.carry.n * (u.team ? w.aiRate : 1); u.carry.n = 0; u.gp = 0; }
    }
  } else if (u.order === 'build') {
    const b = M.get(u.tgt);
    if (!b || b.hp <= 0 || b.built >= 1) { u.order = 'idle'; return; }
    if (reach(u, b) > 0.9) { moveTo(w, u, b.x, b.z, dt, ob); u.st = 1; }
    else {
      u.st = 4; face(u, b); const k = dt / BK[b.kind].build;
      b.built = Math.min(1, b.built + k); b.hp = Math.min(b.maxhp, b.hp + b.maxhp * 0.88 * k);
      if (b.built >= 1) { b.hp = Math.max(b.hp, b.maxhp * 0.95); w.ev.push(['built', +b.x.toFixed(1), +b.z.toFixed(1)]); }
    }
  }
}

// ------------------------------------------------------------------ the world step
export function stepWar(w, dt) {
  if (w.over) return;
  dt = Math.min(dt, 0.1); w.t += dt;
  const M = mapOf(w), ob = obstacles(w);
  // training queues
  for (const b of w.blds) {
    if (b.hp <= 0 || b.built < 1 || !b.queue.length) continue;
    const q = b.queue[0]; q.t -= dt;
    if (q.t <= 0) {
      b.queue.shift();
      const s = b.team ? 1 : -1, u = addU(w, b.team, q.kind, b.x + (Math.random() - 0.5) * 3, b.z + s * (BK[b.kind].r + 1.4));
      w.ev.push(['train', +u.x.toFixed(1), +u.z.toFixed(1)]);
      if (b.team === 0 && q.kind === 'vil') { // a new human villager goes to work by itself (food first, then wood)
        const food = w.units.filter((v) => v.team === 0 && v.kind === 'vil' && v.order === 'gather' && M.get(v.tgt) && M.get(v.tgt).kind === 'berry').length;
        const nd = nearestNode(w, b.x, b.z, food < 4 ? 'food' : 'wood');
        if (nd) { u.order = 'gather'; u.tgt = nd.id; u.gp = 0; }
      }
    }
  }
  // defences
  for (const b of w.blds) {
    const A = b.kind === 'tower' ? BK.tower.atk : b.kind === 'tc' ? { dmg: 6, range: 14 } : null;
    if (!A || b.hp <= 0 || b.built < 1) continue;
    b.cd = Math.max(0, b.cd - dt); if (b.cd > 0) continue;
    let best = null, bd = A.range;
    for (const e of w.units) { if (e.team === b.team || e.hp <= 0) continue; const d = dist(b, e); if (d < bd) { bd = d; best = e; } }
    if (best) { b.cd = 1.0; best.hp -= A.dmg; w.ev.push(['shot', +b.x.toFixed(1), +b.z.toFixed(1), +best.x.toFixed(1), +best.z.toFixed(1)]); }
  }
  for (const u of w.units) if (u.hp > 0) stepUnit(w, u, dt, M, ob);
  // soft separation between units + map edge
  const us = w.units;
  for (let i = 0; i < us.length; i++) for (let j = i + 1; j < us.length; j++) {
    const a = us[i], c = us[j], dx = c.x - a.x, dz = c.z - a.z, rr = (UK[a.kind].r + UK[c.kind].r) * 0.95, d2 = dx * dx + dz * dz;
    if (d2 >= rr * rr || d2 < 1e-8) continue;
    const d = Math.sqrt(d2), p = (rr - d) * 0.5, nx = dx / d, nz = dz / d;
    a.x -= nx * p; a.z -= nz * p; c.x += nx * p; c.z += nz * p;
  }
  for (const u of us) {
    u.x = Math.max(-W.HX + 1, Math.min(W.HX - 1, u.x)); u.z = Math.max(-W.HZ + 1, Math.min(W.HZ - 1, u.z));
    for (const o of ob) { const dx = u.x - o.x, dz = u.z - o.z, rr = o.r + UK[u.kind].r, d = Math.hypot(dx, dz); if (d < rr && d > 1e-6) { u.x = o.x + dx / d * rr; u.z = o.z + dz / d * rr; } }
  }
  // deaths
  for (const u of us) if (u.hp <= 0) w.ev.push(['die', +u.x.toFixed(1), +u.z.toFixed(1)]);
  w.units = us.filter((u) => u.hp > 0);
  for (const b of w.blds) if (b.hp <= 0) { w.ev.push(['boom', +b.x.toFixed(1), +b.z.toFixed(1)]); if (b.kind === 'tc') w.over = b.team === 0 ? 2 : 1; }
  w.blds = w.blds.filter((b) => b.hp > 0);
  // population
  for (const t of [0, 1]) {
    w.pop[t] = w.units.filter((u) => u.team === t).length + w.blds.filter((b) => b.team === t).reduce((s, b) => s + b.queue.length, 0);
    w.cap[t] = w.blds.filter((b) => b.team === t && b.built >= 1).reduce((s, b) => s + BK[b.kind].pop, 0);
  }
  w.aiRate = 0.75 + 0.2 * strength(w);
  aiStep(w, dt);
  if (!w.over && w.t >= w.limit) { // time is up: the side whose Town Center is healthier wins
    const f = (team) => { const b = w.blds.find((x) => x.team === team && x.kind === 'tc'); return b ? b.hp / b.maxhp : 0; };
    w.over = f(0) > f(1) ? 1 : 2; w.timeUp = 1;
  }
}

// ------------------------------------------------------------------ commands (validated: they come from the network)
const own = (o, k) => typeof k === 'string' && Object.prototype.hasOwnProperty.call(o, k);
export function cmdWar(w, team, c) {
  if (w.over || !c) return { ok: false };
  if ((c.kind !== undefined && !own(BK, c.kind) && !own(UK, c.kind))) return { ok: false };
  const M = mapOf(w), num = (v, lo, hi) => typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi;
  const mine = (Array.isArray(c.ids) ? c.ids.slice(0, 80) : []).map((id) => M.get(id)).filter((u) => u && u.team === team && u.hp > 0 && UK[u.kind]);
  if (c.c === 'move' || c.c === 'amove') {
    if (!num(c.x, -W.HX, W.HX) || !num(c.z, -W.HZ, W.HZ)) return { ok: false };
    const cols = Math.ceil(Math.sqrt(mine.length));
    mine.forEach((u, i) => { u.order = c.c === 'amove' && UK[u.kind].mil ? 'amove' : 'move'; u.amove = c.c === 'amove' ? 1 : 0; u.tx = c.x + ((i % cols) - (cols - 1) / 2) * 1.4; u.tz = c.z + (Math.floor(i / cols) - (cols - 1) / 2) * 1.4; u.auto = 0; });
    return { ok: true };
  }
  if (c.c === 'attack') {
    const t = M.get(c.tgt); if (!t || t.team === team || t.hp === undefined || t.hp <= 0) return { ok: false };
    for (const u of mine) { u.order = 'attack'; u.tgt = t.id; u.auto = 0; u.amove = 0; }
    return { ok: true };
  }
  if (c.c === 'gather') {
    const t = M.get(c.tgt); if (!t || t.amt === undefined || t.amt <= 0) return { ok: false };
    for (const u of mine) { if (u.kind !== 'vil') { u.order = 'move'; u.tx = t.x; u.tz = t.z - 2; continue; } if (u.carry.n > 0 && u.carry.t !== RES[t.kind]) u.carry.n = 0; u.order = 'gather'; u.tgt = t.id; u.gp = 0; }
    return { ok: true };
  }
  if (c.c === 'build') {
    const b = M.get(c.tgt); if (!b || b.team !== team || !BK[b.kind] || b.built >= 1) return { ok: false };
    for (const u of mine) if (u.kind === 'vil') { u.order = 'build'; u.tgt = b.id; }
    return { ok: true };
  }
  if (c.c === 'place') {
    const K = BK[c.kind]; if (!K || c.kind === 'tc' || !num(c.x, -W.HX, W.HX) || !num(c.z, -W.HZ, W.HZ)) return { ok: false, msg: 'Cannot build there' };
    const vs = mine.filter((u) => u.kind === 'vil').slice(0, 6); if (!vs.length) return { ok: false, msg: 'Select villagers first' };
    if (!canPay(w.res[team], K.cost)) return { ok: false, msg: 'Not enough resources' };
    if (!placeOK(w, c.kind, c.x, c.z)) return { ok: false, msg: 'No room there' };
    pay(w.res[team], K.cost); const b = addB(w, team, c.kind, c.x, c.z, 0);
    for (const u of vs) { u.order = 'build'; u.tgt = b.id; }
    return { ok: true, id: b.id };
  }
  if (c.c === 'train') {
    const b = M.get(c.b), K = UK[c.kind]; if (!b || b.team !== team || !BK[b.kind] || b.built < 1 || !K || !BK[b.kind].train.includes(c.kind)) return { ok: false };
    if (b.queue.length >= 5) return { ok: false, msg: 'Queue is full' };
    if (!canPay(w.res[team], K.cost)) return { ok: false, msg: 'Not enough resources' };
    if (w.pop[team] >= w.cap[team]) return { ok: false, msg: 'Population full - build a HOUSE!' };
    pay(w.res[team], K.cost); b.queue.push({ kind: c.kind, t: K.time, tt: K.time }); w.pop[team]++;
    return { ok: true };
  }
  return { ok: false };
}

// ------------------------------------------------------------------ the computer opponent
export const strength = (w) => 0.55 + 0.32 * (Math.max(1, Math.min(4, w.n)) - 1);   // 1 player 0.55 (easy) ... 4 players 1.5 (hard)
function aiStep(w, dt) {
  const A = w.ai; A.t += dt; if (A.t < 1.2) return; A.t = 0;
  const T = 1, k = strength(w), R = w.res[T], M = mapOf(w);
  const my = w.units.filter((u) => u.team === T), vils = my.filter((u) => u.kind === 'vil'), army = my.filter((u) => UK[u.kind].mil);
  const tc = w.blds.find((b) => b.team === T && b.kind === 'tc'); if (!tc) return;
  const bar = w.blds.filter((b) => b.team === T && b.kind === 'barracks'), houses = w.blds.filter((b) => b.team === T && b.kind === 'house'), towers = w.blds.filter((b) => b.team === T && b.kind === 'tower');
  const under = w.blds.filter((b) => b.team === T && b.built < 1);
  // 1) villagers
  const wantV = Math.round(6 + 4 * k), qV = tc.queue.filter((q) => q.kind === 'vil').length;
  if (vils.length + qV < wantV && tc.queue.length < 2) cmdWar(w, T, { c: 'train', b: tc.id, kind: 'vil' });
  // 2) put idle villagers to work (balance the four resources)
  const count = { food: 0, wood: 0, gold: 0, stone: 0 };
  for (const v of vils) if (v.order === 'gather') { const n = M.get(v.tgt); if (n) count[RES[n.kind]]++; }
  for (const v of vils) {
    if (v.order !== 'idle') continue;
    const need = ['food', 'wood', 'gold', 'stone'].map((r) => [r, count[r] / ({ food: 3, wood: 3, gold: 2, stone: 1 }[r])]).sort((a, b) => a[1] - b[1]);
    for (const [r] of need) { const nd = nearestNode(w, tc.x, tc.z, r, 40); if (nd) { v.order = 'gather'; v.tgt = nd.id; v.gp = 0; count[r]++; break; } }
  }
  // 3) buildings
  const builders = () => vils.filter((v) => v.order === 'gather' || v.order === 'idle').sort((a, b) => dist(a, tc) - dist(b, tc)).slice(0, 2);
  const spot = (kind) => { for (let i = 0; i < 40; i++) { const a = Math.random() * Math.PI * 2, d = 11 + Math.random() * 9, x = tc.x + Math.cos(a) * d, z = tc.z + Math.sin(a) * d * 0.8; if (placeOK(w, kind, x, z)) return [x, z]; } return null; };
  const doBuild = (kind) => { const s = spot(kind), v = builders(); if (!s || !v.length) return; cmdWar(w, T, { c: 'place', kind, x: s[0], z: s[1], ids: v.map((u) => u.id) }); };
  if (!under.length) {
    if (w.pop[T] + 2 >= w.cap[T] && R.wood >= 30) doBuild('house');
    else if (bar.length < 1 + Math.floor(k * 0.9) && R.wood >= 120 && w.t > 40 + (1.6 - k) * 30) doBuild('barracks');
    else if (towers.length < Math.floor(k * 1.3) && R.stone >= 70 && R.wood >= 40 && bar.length) doBuild('tower');
  }
  void houses;
  // 4) army: pick the unit that counters what the humans have
  const hum = w.units.filter((u) => u.team === 0 && UK[u.kind].mil), c = { spear: 0, arch: 0, knight: 0 }; for (const u of hum) c[u.kind]++;
  for (const b of bar) {
    if (b.built < 1 || b.queue.length >= 2) continue;
    let kind = ['spear', 'arch', 'spear', 'knight'][Math.floor(Math.random() * 4)];
    if (hum.length >= 3 && Math.random() < 0.7) { const top = Object.entries(c).sort((a, b2) => b2[1] - a[1])[0][0]; kind = { knight: 'spear', arch: 'knight', spear: 'arch' }[top]; }
    if (!canPay(R, UK[kind].cost)) kind = canPay(R, UK.spear.cost) ? 'spear' : null;
    if (kind) cmdWar(w, T, { c: 'train', b: b.id, kind });
  }
  // 5) defend, then attack in waves (bigger and faster with more humans)
  const intruder = w.units.find((u) => u.team === 0 && Math.hypot(u.x - tc.x, u.z - tc.z) < 30);
  const idle = army.filter((u) => u.order === 'idle' || u.order === 'move');
  if (intruder && army.length) { for (const u of army) if (u.order !== 'attack') { u.order = 'attack'; u.tgt = intruder.id; u.auto = 0; u.amove = 1; u.tx = tc.x; u.tz = tc.z + 12; } }
  const waveSize = Math.round(3 + 2.4 * k + w.t / 150);
  if (w.t >= A.wave && idle.length >= waveSize) {
    const target = w.blds.find((b) => b.team === 0 && b.kind === 'tc') || w.blds.find((b) => b.team === 0);
    if (target) for (const u of idle) { u.order = 'amove'; u.amove = 1; u.tx = target.x; u.tz = target.z - 6; u.auto = 0; }
    A.wave = w.t + Math.max(40, 85 / k); A.last = w.t;
  }
  // rally idle soldiers near home
  for (const u of idle) if (u.order === 'idle' && Math.hypot(u.x - tc.x, u.z - (tc.z + 14)) > 12) { u.order = 'move'; u.tx = tc.x + (Math.random() - 0.5) * 14; u.tz = tc.z + 12 + Math.random() * 4; }
}

// ------------------------------------------------------------------ network form
export const packWar = (w, full) => {
  const m = { t: 'ws', tm: +w.t.toFixed(1), res: [w.res[0].food | 0, w.res[0].wood | 0, w.res[0].gold | 0, w.res[0].stone | 0], pop: w.pop, cap: w.cap, over: w.over, up: w.timeUp ? 1 : 0, n: w.n,
    u: w.units.map((u) => [u.id, u.team, UKIDS.indexOf(u.kind), +u.x.toFixed(2), +u.z.toFixed(2), Math.ceil(u.hp), u.st, +u.yaw.toFixed(2)]),
    b: w.blds.map((b) => [b.id, b.team, BKIDS.indexOf(b.kind), +b.x.toFixed(1), +b.z.toFixed(1), Math.ceil(b.hp), +b.built.toFixed(2), b.queue.length ? UKIDS.indexOf(b.queue[0].kind) : -1, b.queue.length ? +(1 - b.queue[0].t / b.queue[0].tt).toFixed(2) : 0, b.queue.length]),
    ev: w.ev };
  if (full) m.na = w.nodes.map((n) => Math.round(n.amt));
  return m;
};
