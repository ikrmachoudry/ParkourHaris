// Jungle map: layout data + the animal "brain". Pure JS (no three.js) so the SERVER (multiplayer) and the CLIENT (single player) run the same code.
export const J = { HX: 90, ZS: 12, ZN: -228 };            // inner walls: x = +-90, z = 12 (south) .. -228 (north)
export const HILL = { x: 52, z: -110, x0: 33, x1: 71, z0: -176, z1: -76, summitY: 15, sx: 52, sz: -165 };

export const KINDS = {
  lion:     { name: 'LION',     walk: 3.0, run: 9.0,  aggro: 22, hp: 4, r: 1.5, ride: 1.9,  seat: 1.65, big: 1, sound: 'ROAR!' },
  leopard:  { name: 'LEOPARD',  walk: 3.4, run: 11.0, aggro: 22, hp: 4, r: 1.3, ride: 2.2,  seat: 1.45,  big: 0, sound: 'GRRR!' },
  elephant: { name: 'ELEPHANT', walk: 2.4, run: 6.0,  aggro: 18, hp: 6, r: 2.3, ride: 1.35, seat: 3.5, big: 1, sound: 'TOOOT!' },
  horse:    { name: 'HORSE',    walk: 3.2, run: 11.5, aggro: 15, hp: 3, r: 1.5, ride: 2.3,  seat: 2.05, big: 0, sound: 'NEIGH!' },
  coyote:   { name: 'COYOTE',   walk: 3.2, run: 9.5,  aggro: 24, hp: 5, r: 1.2, ride: 2.0,  seat: 1.35, big: 0, sound: 'YIP!' },
  boar:     { name: 'WILD BOAR', walk: 3.0, run: 9.0, aggro: 24, hp: 6, r: 1.3, ride: 1.9,  seat: 1.4,  big: 0, sound: 'OINK!' },
  hyena:    { name: 'HYENA',    walk: 3.4, run: 11.0, aggro: 24, hp: 7, r: 1.3, ride: 2.2,  seat: 1.4,  big: 0, sound: 'HAHA!' },
  bear:     { name: 'BEAR',     walk: 2.8, run: 8.5,  aggro: 24, hp: 8, r: 2.0, ride: 1.6,  seat: 2.6,  big: 1, sound: 'GROWL!' },
  gorilla:  { name: 'GORILLA',  walk: 3.0, run: 9.0,  aggro: 24, hp: 9, r: 2.0, ride: 1.7,  seat: 2.7,  big: 1, sound: 'OOH OOH!' },
  dino:     { name: 'DINOSAUR', walk: 2.6, run: 8.0,  aggro: 0,  hp: 6, r: 2.7, ride: 1.75, seat: 3.35,  big: 1, sound: 'RAWR!' },
};
export const ANIMAL_DEFS = [
  { id: 0, kind: 'lion', x: -50, z: -70 },
  { id: 1, kind: 'leopard', x: -28, z: -160 },
  { id: 2, kind: 'elephant', x: 15, z: -185 },
  { id: 3, kind: 'horse', x: -62, z: -115 },
  { id: 4, kind: 'dino', x: HILL.sx, z: HILL.sz, y: HILL.summitY },
];

// animal state codes (sent to clients)
export const ST = { IDLE: 0, WALK: 1, CHASE: 2, ATTACK: 3, STAGGER: 4, TIED: 5, PET: 6, RIDDEN: 7, HIDDEN: 8 };
export const active = { defs: ANIMAL_DEFS }; // the animal table of the map being played (clients set this; used to find a mount's seat height)

function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

let cache = null;
export function jungleLayout() {
  if (cache) return cache;
  const R = rng(20260601), trees = [];
  for (let tries = 0; tries < 6000 && trees.length < 72; tries++) {
    const x = -84 + R() * 168, z = 6 - R() * 226;
    if (Math.hypot(x, z) < 17) continue;                                                              // spawn clearing
    if (x > HILL.x0 - 5 && x < HILL.x1 + 5 && z > HILL.z0 - 5 && z < HILL.z1 + 5) continue;            // hill
    if (trees.some((t) => Math.hypot(t.x - x, t.z - z) < 9)) continue;
    trees.push({ x, z, r: 1.25, s: 0.85 + R() * 0.7, k: Math.floor(R() * 3) });
  }
  cache = { trees, hill: HILL };
  return cache;
}

export const inHill = (x, z, pad = 0) => x > HILL.x0 - pad && x < HILL.x1 + pad && z > HILL.z0 - pad && z < HILL.z1 + pad;

export function newAnimals(defs = ANIMAL_DEFS) {
  return defs.map((d) => ({
    id: d.id, kind: d.kind, x: d.x, y: d.y || 0, z: d.z, yaw: Math.PI, vx: 0, vz: 0, st: d.hidden ? ST.HIDDEN : d.kind === 'dino' ? ST.TIED : ST.IDLE, bounds: d.bounds || null,
    hp: KINDS[d.kind].hp, owner: 0, rider: 0, tx: d.x, tz: d.z, wait: 1 + Math.random() * 3, cool: 1, wind: 0, stagger: 0, target: 0, home: { x: d.x, z: d.z },
  }));
}

// push an animal out of trees / the hill / the walls (keeps wild animals in the open grass)
function avoid(a, L, r, allowHill) {
  const B = a.bounds;
  const x0 = B ? B.x0 + r : -(J.HX - r - 1), x1 = B ? B.x1 - r : J.HX - r - 1, z0 = B ? B.z0 + r : J.ZN + r + 1, z1 = B ? B.z1 - r : J.ZS - r - 1;
  a.x = Math.max(x0, Math.min(x1, a.x)); a.z = Math.max(z0, Math.min(z1, a.z));
  for (const t of L.trees) {
    const dx = a.x - t.x, dz = a.z - t.z, d = Math.hypot(dx, dz), m = t.r + r * 0.6;
    if (d < m) { const k = d > 1e-4 ? m / d : 1; a.x = t.x + (d > 1e-4 ? dx * k : m); a.z = t.z + (d > 1e-4 ? dz * k : 0); }
  }
  if (!allowHill && !B && inHill(a.x, a.z, r * 0.5)) { // slide out through the nearest hill edge
    const dl = a.x - (HILL.x0 - r * 0.5), dr = (HILL.x1 + r * 0.5) - a.x, dn = a.z - (HILL.z0 - r * 0.5), ds = (HILL.z1 + r * 0.5) - a.z;
    const m = Math.min(dl, dr, dn, ds);
    if (m === dl) a.x = HILL.x0 - r * 0.5; else if (m === dr) a.x = HILL.x1 + r * 0.5; else if (m === dn) a.z = HILL.z0 - r * 0.5; else a.z = HILL.z1 + r * 0.5;
  }
}

function randomSpot(a, L) {
  for (let i = 0; i < 12; i++) {
    const B = a.bounds, sp = B ? 1 : 90;
    const x = B ? B.x0 + 2 + Math.random() * (B.x1 - B.x0 - 4) : a.home.x + (Math.random() - 0.5) * sp, z = B ? B.z0 + 2 + Math.random() * (B.z1 - B.z0 - 4) : a.home.z + (Math.random() - 0.5) * sp;
    if (!B && (Math.abs(x) > J.HX - 8 || z > J.ZS - 8 || z < J.ZN + 8 || inHill(x, z, 6))) continue;
    if (L.trees.some((t) => Math.hypot(t.x - x, t.z - z) < 3.5)) continue;
    return [x, z];
  }
  return [a.home.x, a.home.z];
}

function moveTo(a, tx, tz, speed, dt) {
  const dx = tx - a.x, dz = tz - a.z, d = Math.hypot(dx, dz);
  if (d < 0.05) return d;
  const want = Math.atan2(dx, dz); let dy = want - a.yaw; dy = Math.atan2(Math.sin(dy), Math.cos(dy));
  a.yaw += dy * (1 - Math.exp(-7 * dt));
  const sp = Math.min(speed, d / Math.max(dt, 1e-3));
  const k = Math.max(0.15, 1 - Math.abs(dy) / 2.2); // turn before running
  a.vx = Math.sin(a.yaw) * sp * k; a.vz = Math.cos(a.yaw) * sp * k;
  a.x += a.vx * dt; a.z += a.vz * dt;
  return d;
}

// players: [{ id, x, y, z, r, mounted (0/1) }]. Returns events: {k:'bite'|'tame'|'hit', ...}
export function stepAnimals(list, dt, players, L, out = []) {
  for (const a of list) {
    const K = KINDS[a.kind], pl = a.owner ? players.find((p) => p.id === a.owner) : null;
    a.vx = a.vz = 0;
    if (a.st === ST.HIDDEN) continue;
    // ---- ridden: the rider's body IS the animal's position
    if (a.rider) {
      const rp = players.find((p) => p.id === a.rider);
      if (!rp) { a.rider = 0; } else { a.x = rp.x; a.y = rp.y; a.z = rp.z; a.yaw = rp.r; a.st = ST.RIDDEN; continue; }
    }
    if (a.cool > 0) a.cool -= dt;
    // ---- staggered by a bat hit
    if (a.stagger > 0) { a.stagger -= dt; a.x += (a.kvx || 0) * dt; a.z += (a.kvz || 0) * dt; a.kvx *= 0.9; a.kvz *= 0.9; avoid(a, L, K.r, a.kind === 'dino'); a.st = ST.STAGGER; continue; }
    // ---- tied dinosaur: stays put (rope)
    if (a.kind === 'dino' && !a.owner) { a.st = ST.TIED; continue; }
    // ---- pets: follow the owner on the grass
    if (a.owner) {
      a.st = ST.PET;
      if (pl && a.y < 1.5 && pl.y < 2.5 && !pl.mounted) {
        const d = Math.hypot(pl.x - a.x, pl.z - a.z);
        if (L.petBounds) a.bounds = L.petBounds;
        if (d > (L.petBounds ? 16 : 60)) { a.x = pl.x - 3; a.z = pl.z + 3; }
        else if (d > 5.5) { moveTo(a, pl.x, pl.z, Math.min(K.run, 3 + d * 0.9), dt); a.st = ST.WALK; }
        else if (d < 3) { moveTo(a, a.x + (a.x - pl.x), a.z + (a.z - pl.z), K.walk, dt); a.st = ST.WALK; }
        avoid(a, L, K.r, false);
      }
      if (a.y < 1.5) a.y = 0;
      continue;
    }
    // ---- wild: look for somebody to attack
    let tgt = null, bd = K.aggro;
    for (const p of players) {
      if (p.mounted || p.y > 2.5) continue;
      if (a.bounds && (p.x < a.bounds.x0 - 1 || p.x > a.bounds.x1 + 1 || p.z < a.bounds.z0 - 1 || p.z > a.bounds.z1 + 1)) continue;
      const d = Math.hypot(p.x - a.x, p.z - a.z);
      if (d < bd) { bd = d; tgt = p; }
    }
    if (a.wind > 0) { // winding up a lunge
      a.wind -= dt; a.st = ST.ATTACK;
      if (a.wind <= 0) {
        for (const p of players) {
          if (p.mounted || p.y > 2.5) continue;
          const dx = p.x - a.x, dz = p.z - a.z, d = Math.hypot(dx, dz);
          if (d < K.r + 2.6) { const l = d || 1; out.push({ k: 'bite', id: a.id, pid: p.id, nx: dx / l, nz: dz / l, big: K.big }); }
        }
        a.cool = 2.6; a.recover = 0.7;
      }
      continue;
    }
    if (a.recover > 0) { a.recover -= dt; a.st = ST.IDLE; continue; }
    if (tgt) {
      a.st = ST.CHASE;
      const d = moveTo(a, tgt.x, tgt.z, K.run, dt);
      if (d < K.r + 2.0 && a.cool <= 0) { a.wind = 0.5; }
    } else {
      // wander
      if (a.wait > 0) { a.wait -= dt; a.st = ST.IDLE; }
      else {
        a.st = ST.WALK;
        const d = moveTo(a, a.tx, a.tz, K.walk, dt);
        if (d < 1.2) { a.wait = 2 + Math.random() * 5; [a.tx, a.tz] = randomSpot(a, L); }
      }
    }
    avoid(a, L, K.r, false);
    a.y = 0;
    if (a.st === ST.WALK && Math.hypot(a.vx, a.vz) < 0.2) { [a.tx, a.tz] = randomSpot(a, L); } // stuck on a tree: pick another way
  }
  return out;
}

// a bat hit on animal `a` by player pid. Returns events.
export function hitAnimal(a, pid, px, pz, out = []) {
  if (a.owner || a.rider || a.st === ST.HIDDEN) return out;  // pets are friends: no hitting them (and hidden beasts can't be hit)
  const K = KINDS[a.kind];
  a.hp -= 1; a.stagger = 0.7; a.wind = 0; a.cool = 1.4;
  const dx = a.x - px, dz = a.z - pz, l = Math.hypot(dx, dz) || 1;
  const kick = a.kind === 'dino' ? 0 : 6;
  a.kvx = dx / l * kick; a.kvz = dz / l * kick;
  out.push({ k: 'hit', id: a.id, hp: a.hp });
  if (a.hp <= 0) { a.hp = K.hp; a.owner = pid; a.st = ST.PET; out.push({ k: 'tame', id: a.id, pid }); }
  return out;
}

export function releaseOwner(list, pid) {
  for (const a of list) {
    if (a.owner === pid) { a.owner = 0; a.hp = KINDS[a.kind].hp; if (a.kind === 'dino') { a.st = ST.TIED; a.x = HILL.sx; a.z = HILL.sz; a.y = HILL.summitY; } }
    if (a.rider === pid) a.rider = 0;
  }
}

export const packAnimals = (list) => list.map((a) => [a.id, +a.x.toFixed(2), +a.y.toFixed(2), +a.z.toFixed(2), +a.yaw.toFixed(2), a.st, a.owner, a.rider, a.hp]);
