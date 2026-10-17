// JUNGLE QUEST world: one long fenced road -> 5 random mazes (each followed by team circles, a boulder, a beast arena and a gate) -> dragon cage.
// buildQuest() makes the static world + colliders (also runs headless in tests); QuestVis animates circles / boulders / gates / dragon on the client.
import * as THREE from 'three';
import { textBoard } from './flags.js';
import { Q, PH, CIRCLE_R, questLayout, circleXs } from './quest.js';
import { buildDragon, animateDragon } from './animals3d.js';

function rng(seed) { let s = (seed >>> 0) || 1; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

export const ZONES = [
  { name: 'MEADOW', ground: '#74d05a', path: '#e8d8a0', fence: '#b0763c', hedge: ['#3fae4a', '#58c25c', '#2f9a44'], leaf: ['#2e9b3f', '#3fb14c', '#58c45a', '#7ccf5a'] },
  { name: 'FOREST', ground: '#3f9a4a', path: '#cdb887', fence: '#6b4423', hedge: ['#2a7a3a', '#1f6a30', '#35893f'], leaf: ['#1f7a34', '#2a8a3c', '#27803c', '#3a9a4a'] },
  { name: 'SWAMP', ground: '#6b7a3a', path: '#a89c68', fence: '#4a4a30', hedge: ['#5a6b2a', '#4a5a24', '#6c7c34'], leaf: ['#5a7a2a', '#6c8a34', '#4a6a24', '#7a9a3c'] },
  { name: 'CANYON', ground: '#d79a58', path: '#f0cf98', fence: '#a8532f', hedge: ['#c2693a', '#b05a30', '#d07a45'], leaf: ['#c2693a', '#d07a45', '#b05a30', '#e08a50'] },
  { name: 'SNOW', ground: '#f0f8ff', path: '#cfe6f6', fence: '#9fd0f0', hedge: ['#d8efff', '#bfe3fa', '#e9f6ff'], leaf: ['#ffffff', '#e4f3ff', '#d0e9fa', '#f4fbff'] },
  { name: 'VOLCANO', ground: '#4a3a3a', path: '#6b5656', fence: '#2b2020', hedge: ['#3a2c2c', '#2f2323', '#443535'], leaf: ['#3a2c2c', '#4a3535', '#2f2323', '#5a4444'] },
];

// ---- random maze for one chapter. H[r][k]: wall on the south side of row r (r=0 entrance side, r=rows exit side), V[r][k]: wall west of column k.
export function genMaze(rows, rnd) {
  const N = Q.COLS, V = Array.from({ length: rows }, () => Array(N + 1).fill(true)), H = Array.from({ length: rows + 1 }, () => Array(N).fill(true));
  const seen = Array.from({ length: rows }, () => Array(N).fill(false)), mid = (N / 2) | 0, stack = [[0, mid]]; seen[0][mid] = true;
  while (stack.length) {
    const [r, c] = stack[stack.length - 1], o = [];
    if (r + 1 < rows && !seen[r + 1][c]) o.push([r + 1, c]); if (r - 1 >= 0 && !seen[r - 1][c]) o.push([r - 1, c]);
    if (c - 1 >= 0 && !seen[r][c - 1]) o.push([r, c - 1]); if (c + 1 < N && !seen[r][c + 1]) o.push([r, c + 1]);
    if (!o.length) { stack.pop(); continue; }
    const [nr, nc] = o[Math.floor(rnd() * o.length)];
    if (nr === r + 1) H[r + 1][c] = false; else if (nr === r - 1) H[r][c] = false; else if (nc === c - 1) V[r][c] = false; else V[r][c + 1] = false;
    seen[nr][nc] = true; stack.push([nr, nc]);
  }
  H[0][mid] = false; H[rows][mid] = false;
  // solution: BFS from the entrance cell to the exit cell
  const prev = new Map([[`0,${mid}`, null]]), qu = [[0, mid]];
  while (qu.length) {
    const [r, c] = qu.shift();
    for (const [nr, nc, wall] of [[r + 1, c, H[r + 1][c]], [r - 1, c, r > 0 ? H[r][c] : true], [r, c - 1, V[r][c]], [r, c + 1, V[r][c + 1]]])
      if (!wall && nr >= 0 && nr < rows && nc >= 0 && nc < N && !prev.has(`${nr},${nc}`)) { prev.set(`${nr},${nc}`, [r, c]); qu.push([nr, nc]); }
  }
  const sol = []; for (let cur = [rows - 1, mid]; cur; cur = prev.get(`${cur[0]},${cur[1]}`)) sol.unshift(cur);
  return { rows, V, H, sol };
}

export function buildQuest(world, th, info, seed = 1) {
  const L = questLayout(), vis = !world.headless, main = world.main, glow = world.glow, HW = Q.HW, CELL = Q.CELL;
  const R = rng((seed >>> 0) ^ 0x5bd1e995), pick = (a) => a[Math.floor(R() * a.length)];
  const zEnd = L.dr.endZ, WH = 3.4, WT = 0.8, FH = 7;
  info.startArch = 99; info.spawn = { x: 0, y: 0, z: 3 };
  world.checkpoints.push({ x: 0, y: 0, z: 6, w: 14, spawn: [0, 0, 3] });
  world.waterY = -40; world.killY = -60;
  const zoneZ = (i) => (i < Q.CH ? [L.chapters[i].mz0, L.chapters[i].next] : [L.dr.z0, L.dr.endZ]);

  // ---- floor + fences + end walls (you cannot leave the road)
  world.platform(0, 0, (12 + zEnd - 2) / 2, HW * 2 + 6, 12 - zEnd + 2, { h: 2, color: ZONES[0].ground, pad: false });
  for (let i = 0; i <= Q.CH; i++) {
    const [za, zb] = zoneZ(i), Z = ZONES[i], a = i === 0 ? 12.5 : za, b = i === Q.CH ? zEnd - 1 : zb;
    for (let z = a, k = 0; z > b + 0.01; z -= 12, k++) { const d = Math.min(12, z - b); for (const sx of [-1, 1]) world.platform(sx * (HW + 1), FH, z - d / 2, 2, d, { h: FH, color: k % 2 ? Z.fence : Z.hedge[0], pad: false }); }
    if (vis) { // ground tint of this zone + sandy centre path
      main.add(world.rbox(HW * 2, 0.04, a - b, 0.01), 0, 0.02, (a + b) / 2, Z.ground);
    }
  }
  world.platform(0, FH, 13, HW * 2 + 6, 2, { h: FH, color: ZONES[0].fence, pad: false });
  world.platform(0, FH, zEnd - 1, HW * 2 + 6, 2, { h: FH, color: ZONES[5].fence, pad: false });

  // ---- chapters
  const quest = { chapters: [], dragon: null };
  info.mazes = []; info.mazePaths = [];
  for (const C of L.chapters) {
    const Z = ZONES[C.c], rnd = rng(((seed >>> 0) + 1) * 7919 + C.c * 104729);
    const mz = genMaze(C.rows, rnd); info.mazes.push(mz);
    const cx = (k) => (k + 0.5 - Q.COLS / 2) * CELL, cz = (r) => C.mz0 - (r + 0.5) * CELL;
    // hedge walls
    for (let r = 0; r < C.rows; r++) for (let k = 0; k <= Q.COLS; k++) if (mz.V[r][k]) world.platform((k - Q.COLS / 2) * CELL, WH, cz(r), WT, CELL + WT, { h: WH, color: Z.hedge[(r + k) % 3], pad: false });
    for (let r = 0; r <= C.rows; r++) for (let k = 0; k < Q.COLS; k++) if (mz.H[r][k]) world.platform(cx(k), WH, C.mz0 - r * CELL, CELL + WT, WT, { h: WH, color: Z.hedge[(r + k + 1) % 3], pad: false });
    info.mazePaths.push(mz.sol.map(([r, k]) => [cx(k), cz(r)]));
    if (vis) {
      main.add(world.rbox(HW * 2 - 0.2, 0.05, C.rows * CELL, 0.01), 0, 0.035, (C.mz0 + C.mz1) / 2, Z.path);
    }
    // obstacles on the solution path (harder every chapter)
    const sol = mz.sol, cand = []; for (let i = 2; i < sol.length - 1; i++) cand.push(i);
    const straight = cand.filter((i) => sol[i][1] === sol[i - 1][1] && sol[i][1] === sol[i + 1][1]);
    const nConv = [0, 1, 2, 3, 4][C.c], cv = [0, 4, 5, 6, 7][C.c];
    const used = new Set(), take = (list, n, gap) => { const out = []; const idx = list.slice(); for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; } for (const i of idx) { if (out.length >= n) break; if ([...used].some((u) => Math.abs(u - i) < gap)) continue; used.add(i); out.push(i); } return out; };
    for (const i of take(straight, nConv, 2)) { const [r, k] = sol[i]; world.conveyor(cx(k), 0.05, cz(r), CELL - 1.2, CELL - WT - 0.2, cv); }

    // plaza: team circles + sign; boulder wall; arena; gate
    const bz = C.boulderZ, gz = C.gateZ;
    const bSolid = world.addSolid(-HW, 0, bz - Q.BOULDER / 2, HW, 9, bz + Q.BOULDER / 2, { name: 'boulder' });
    const gSolid = world.addSolid(-HW, 0, gz - 0.75, HW, 7, gz + 0.75, { name: 'gate' });
    const ch = { boulder: { solid: bSolid, grp: null }, gate: { solid: gSolid, grp: null } };
    if (vis) {
      main.add(world.rbox(HW * 2 - 0.2, 0.05, C.mz1 - C.arenaZ1 + 1, 0.01), 0, 0.035, (C.mz1 + C.arenaZ1) / 2 - 0.5, Z.path);
      // boulder: a wall of big rocks
      const bg = new THREE.Group(); bg.position.set(0, 0, bz);
      const rockMat = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.95, flatShading: true });
      const cols = ['#8d8a84', '#7c7a75', '#9a968e', '#6f6d69'];
      [[-8.8, 3.2, 4.2], [-4.4, 3.0, 4.4], [0, 3.4, 4.6], [4.4, 3.0, 4.4], [8.8, 3.2, 4.2], [-6.5, 7.4, 3.6], [-1.6, 7.8, 3.8], [3.4, 7.6, 3.6], [8.0, 7.2, 3.0]].forEach(([x, y, r], i) => {
        const m = new THREE.Mesh(new THREE.DodecahedronGeometry(r, 1), rockMat(cols[i % 4])); m.position.set(x, y, (i % 3 - 1) * 0.5); m.rotation.set(i, i * 2, 0); m.castShadow = true; bg.add(m);
      });
      world.group.add(bg); ch.boulder.grp = bg;
      // gate: wooden posts + planks
      const gg = new THREE.Group(); gg.position.set(0, 0, gz);
      const wood = new THREE.MeshStandardMaterial({ color: '#8a5a30', roughness: 0.8 }), wood2 = new THREE.MeshStandardMaterial({ color: '#6b4423', roughness: 0.8 });
      for (let x = -HW + 0.9; x < HW; x += 1.8) { const m = new THREE.Mesh(new THREE.BoxGeometry(1.5, 7, 1.1), (x * 10 | 0) % 2 ? wood : wood2); m.position.set(x, 3.5, 0); m.castShadow = true; gg.add(m); const t = new THREE.Mesh(new THREE.ConeGeometry(0.8, 1.2, 4), wood); t.position.set(x, 7.5, 0); t.rotation.y = Math.PI / 4; gg.add(t); }
      for (const y of [1.5, 5.2]) { const m = new THREE.Mesh(new THREE.BoxGeometry(HW * 2, 0.5, 1.5), wood2); m.position.set(0, y, 0); gg.add(m); }
      world.group.add(gg); ch.gate.grp = gg;
      // signs
      const sign = (txt, x, y, z, w, h, bg2) => { const b = textBoard(txt, w, h, { bg: bg2, fg: '#fff3c4', stroke: '#2a1204', border: '#ffd23f', frame: '#3b2410' }); b.position.set(x, y, z); world.group.add(b); };
      const pole = (x, z, h) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.3, h, 6), wood2); m.position.set(x, h / 2, z); world.group.add(m); };
      sign('STAND ON ALL CIRCLES!', 0, 10.4, C.plazaZ + 5.5, 14, 3, ['#7a4a1e', '#5a3412']); pole(-8.6, C.plazaZ + 5.5, 11); pole(8.6, C.plazaZ + 5.5, 11);
      sign(`CHAPTER ${C.c + 1} - ${Z.name}`, 0, 10.4, C.mz0 + 0.0, 14, 3, ['#2c6b3a', '#1a4a26']); pole(-7.2, C.mz0, 11); pole(7.2, C.mz0, 11);
      sign('BEAT THE BEAST WITH THE BAT!', 0, 10.4, C.arenaZ0 - 3, 15, 3, ['#8a2a1e', '#5a1a12']); pole(-7.8, C.arenaZ0 - 3, 11); pole(7.8, C.arenaZ0 - 3, 11);
    }
    quest.chapters.push(ch);
  }

  // ---- dragon cage
  const D = L.dr, cageSolid = world.addSolid(-8, 0, D.dragonZ - 8, 8, 11, D.cageZ + 6, { name: 'cage' });
  quest.dragon = { solid: cageSolid, grp: null, root: null };
  if (vis) {
    main.add(world.rbox(HW * 2 - 0.2, 0.05, D.z0 - zEnd, 0.01), 0, 0.035, (D.z0 + zEnd) / 2, ZONES[5].path);
    const cg = new THREE.Group(); cg.position.set(0, 0, (D.cageZ + 6 + D.dragonZ - 8) / 2);
    const iron = new THREE.MeshStandardMaterial({ color: '#22222a', roughness: 0.5, metalness: 0.5 });
    const len = D.cageZ + 6 - (D.dragonZ - 8);
    for (let x = -8; x <= 8.01; x += 2) { const m = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 11, 6), iron); m.position.set(x, 5.5, len / 2); cg.add(m); }
    for (const sx of [-8, 8]) for (let z = 0; z <= len + 0.01; z += 2.3) { const m = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 11, 6), iron); m.position.set(sx, 5.5, z - len / 2); cg.add(m); }
    for (const y of [0.3, 5.5, 10.8]) { const m = new THREE.Mesh(new THREE.BoxGeometry(16.4, 0.4, 0.4), iron); m.position.set(0, y, len / 2); cg.add(m); }
    const top = new THREE.Mesh(new THREE.BoxGeometry(16.4, 0.4, len), iron); top.position.set(0, 11, 0); cg.add(top);
    world.group.add(cg); quest.dragon.grp = cg;
    const sign = textBoard('FREE THE DRAGON!', 18, 4.2, { bg: ['#7a1e5a', '#4a1236'], fg: '#fff3c4', stroke: '#200618', border: '#ffd23f', frame: '#3b2410' }); sign.position.set(0, 12, D.circlesZ + 6); world.group.add(sign);
    const sign2 = textBoard('STAND ON ALL CIRCLES!', 17, 4.2, { bg: ['#7a4a1e', '#5a3412'], fg: '#fff3c4', stroke: '#2a1204', border: '#ffd23f', frame: '#3b2410' }); sign2.position.set(0, 16, D.circlesZ + 6); world.group.add(sign2);
    // start-of-road welcome board
    const w = textBoard('JUNGLE QUEST', 20, 5.2, { bg: ['#ff8a1c', '#c9400b'], fg: '#ffffff', stroke: '#5a1a00', border: '#ffe27a', frame: '#3b2410' }); w.position.set(0, 12, 2); world.group.add(w);
    decorate(world, L, R, pick);
  }
  info.quest = quest;
  info.questLayout = L;
}

// ------------------------------------------------------------------ scenery outside the fences (and a few bits inside), per zone
function decorate(world, L, R, pick) {
  const main = world.main, glow = world.glow, HW = Q.HW;
  const sph = (r, w = 7, h = 5) => new THREE.SphereGeometry(r, w, h), cyl = (a, b, h, s = 7) => new THREE.CylinderGeometry(a, b, h, s), cone = (r, h, s = 7) => new THREE.ConeGeometry(r, h, s);
  const tree = (kind, x, z, s, Z) => {
    const h = 7 * s;
    if (kind === 'round') { main.add(cyl(0.5 * s, 0.8 * s, h), x, h / 2, z, '#7a4b27'); main.add(sph(3.6 * s), x, h + 2 * s, z, pick(Z.leaf)); main.add(sph(2.6 * s), x + 2.3 * s, h + 0.6 * s, z + 0.5 * s, pick(Z.leaf)); }
    else if (kind === 'pine') { main.add(cyl(0.4 * s, 0.6 * s, h * 0.6), x, h * 0.3, z, '#6b4423'); for (let i = 0; i < 4; i++) main.add(cone((3.6 - i * 0.7) * s, 3.4 * s, 8), x, h * 0.55 + i * 2.1 * s, z, pick(Z.leaf)); }
    else if (kind === 'dead') { main.add(cyl(0.3 * s, 0.7 * s, h * 1.1), x, h * 0.55, z, '#3a3022'); for (let i = 0; i < 3; i++) main.add(cyl(0.12 * s, 0.25 * s, 3 * s), x + (i - 1) * 1.1 * s, h * (0.8 + i * 0.1), z, '#3a3022', 0, 0, (i - 1) * 0.9); }
    else if (kind === 'pillar') { const w = (2.5 + R() * 2.5) * s, hh = (10 + R() * 14) * s; main.add(world.rbox(w, hh, w * 0.9, 0.5), x, hh / 2, z, pick(['#c2693a', '#b05a30', '#d07a45', '#e0975a']), 0, R() * 3); main.add(world.rbox(w * 1.15, 1.2, w, 0.3), x, hh * 0.6, z, '#e8b27a', 0, R() * 3); }
    else if (kind === 'snowpine') { main.add(cyl(0.4 * s, 0.6 * s, h * 0.5), x, h * 0.25, z, '#5a3a22'); for (let i = 0; i < 4; i++) { main.add(cone((3.4 - i * 0.7) * s, 3.2 * s, 8), x, h * 0.45 + i * 2.0 * s, z, '#2f6f58'); main.add(cone((2.6 - i * 0.6) * s, 1.6 * s, 8), x, h * 0.45 + i * 2.0 * s + 1.1 * s, z, '#ffffff'); } }
    else { const hh = (8 + R() * 14) * s; main.add(cone((3 + R() * 3) * s, hh, 6), x, hh / 2, z, pick(['#2d2323', '#3a2c2c', '#241c1c']), 0, R() * 3); glow.add(cone(0.9 * s, hh * 0.6, 5), x, hh * 0.3, z, '#ff6a1a'); }
  };
  const kinds = [['round', 'round', 'pine'], ['pine', 'pine', 'round'], ['dead', 'dead', 'round'], ['pillar', 'pillar', 'pillar'], ['snowpine', 'snowpine', 'snowpine'], ['rock', 'rock', 'rock']];
  const zs = [...L.chapters.map((C) => [C.mz0, C.next]), [L.dr.z0, L.dr.endZ]];
  zs.forEach(([za, zb], i) => {
    const Z = ZONES[i];
    for (let z = (i === 0 ? 14 : za); z > (i === Q.CH ? zb - 12 : zb); z -= 5.2 + R() * 3.4)
      for (const sx of [-1, 1]) {
        const x = sx * (HW + 4.5 + R() * 20), s = 0.8 + R() * 0.8;
        tree(pick(kinds[i]), x, z + (R() - 0.5) * 3, s, Z);
        if (R() < 0.45) tree(pick(kinds[i]), sx * (HW + 28 + R() * 30), z + (R() - 0.5) * 6, 1.3 + R() * 1.2, Z);
      }
    // little things on the roadside (inside the fence, along the edges)
    for (let k = 0; k < 40; k++) {
      const x = (R() < 0.5 ? -1 : 1) * (HW - 1.2 - R() * 0.9), z = za - R() * (za - zb);
      if (i === 0 || i === 1) { main.add(cyl(0.05, 0.05, 0.7, 4), x, 0.35, z, '#3a8f3a'); main.add(sph(0.26, 6, 4), x, 0.78, z, pick(['#ff5fa8', '#ffd23f', '#ffffff', '#ff7a1a', '#b58cff'])); }
      else if (i === 2) { main.add(cyl(0.25, 0.3, 0.9, 6), x, 0.45, z, '#fff3e0'); main.add(sph(0.8, 8, 5), x, 1.0, z, '#8ed36a', 0, 0, 0, 1, 0.55, 1); }
      else if (i === 3) main.add(sph(1, 6, 5), x, 0.3, z, pick(['#a8532f', '#c2693a']), R(), R(), 0, 1.2, 0.6, 1.0);
      else if (i === 4) main.add(sph(1, 7, 5), x, 0.3, z, '#ffffff', 0, 0, 0, 1.4, 0.7, 1.2);
      else { main.add(sph(1, 6, 5), x, 0.3, z, '#2d2323', R(), R(), 0, 1.2, 0.6, 1.0); glow.add(sph(0.35, 6, 4), x, 0.2, z, '#ff6a1a'); }
    }
  });
  // distant coloured hills behind the whole road
  for (let z = 10; z > L.dr.endZ - 30; z -= 28) for (const sx of [-1, 1]) {
    const i = Math.min(Q.CH, Math.max(0, zs.findIndex(([a, b]) => z <= a && z > b))), Z = ZONES[i === -1 ? 0 : i];
    main.add(sph(1, 12, 8), sx * (HW + 110 + R() * 40), 0, z, Z.ground, 0, 0, 0, 38 + R() * 24, 22 + R() * 20, 30 + R() * 14);
  }
}

// ------------------------------------------------------------------ client animation + visuals
export class QuestVis {
  constructor(world, info) {
    this.world = world; this.info = info; this.L = questLayout(); this.q = info.quest; this.t = 0;
    this.state = this.L.chapters.map(() => ({ boulder: 'closed', gate: 'closed', bt: 0, gt: 0 }));
    this._fresh = true; this.cage = 'closed'; this.fly = 0; this.n = 0; this.occ = []; this.circleZ = null;
    this.g = new THREE.Group(); world.group.add(this.g);
    this.circles = [];
    for (let i = 0; i < 4; i++) {
      const c = new THREE.Group();
      const disc = new THREE.Mesh(new THREE.CylinderGeometry(CIRCLE_R, CIRCLE_R, 0.12, 40), new THREE.MeshBasicMaterial({ color: '#ffd23f', transparent: true, opacity: 0.55, toneMapped: false }));
      const ring = new THREE.Mesh(new THREE.TorusGeometry(CIRCLE_R, 0.14, 8, 40), new THREE.MeshBasicMaterial({ color: '#ffffff', toneMapped: false })); ring.rotation.x = Math.PI / 2; ring.position.y = 0.08;
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(CIRCLE_R * 0.9, CIRCLE_R * 0.9, 5, 24, 1, true), new THREE.MeshBasicMaterial({ color: '#ffd23f', transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false, toneMapped: false })); beam.position.y = 2.5;
      const lab = textBoard('STAND HERE', 3.8, 1.2, { bg: ['#ffd23f', '#ff9f1c'], fg: '#3a1c00', stroke: '#ffffff', border: '#ffffff' }); lab.position.y = 5.4;
      c.add(disc, ring, beam, lab); c.visible = false; c.userData = { disc, ring, beam, lab }; this.g.add(c); this.circles.push(c);
    }
    // dragon (hidden until the finale section; sits in the cage)
    this.dragon = buildDragon(); this.dragon.root.position.set(0, 0, this.L.dr.dragonZ); this.dragon.root.scale.setScalar(1.15); this.g.add(this.dragon.root);
    this.flags = { boulder: [], gate: [] };
  }
  // instant or animated state changes
  openBoulder(c, instant) { const s = this.state[c]; if (s.boulder !== 'closed') return; this.q.chapters[c].boulder.solid.active = false; if (instant) { s.boulder = 'gone'; this.q.chapters[c].boulder.grp.visible = false; } else { s.boulder = 'falling'; s.bt = 0; } }
  openGate(c, instant) { const s = this.state[c]; if (s.gate !== 'closed') return; this.q.chapters[c].gate.solid.active = false; if (instant) { s.gate = 'open'; this.q.chapters[c].gate.grp.position.y = 9; } else { s.gate = 'rising'; s.gt = 0; } }
  openCage(instant) { if (this.cage !== 'closed') return; this.q.dragon.solid.active = false; this.cage = 'open'; this.fly = instant ? 99 : 0; }
  // authoritative quest state {ch, ph, n, occ}
  setState(q) {
    for (let c = 0; c < Q.CH; c++) {
      if (c < q.ch || (c === q.ch && q.ph !== PH.MAZE)) { this.openBoulder(c, this._fresh); }
      if (c < q.ch) this.openGate(c, this._fresh);
    }
    if (q.ph >= PH.FLY) this.openCage(this._fresh);
    this._fresh = false;
    this.n = q.n; this.occ = q.occ || []; this.ph = q.ph;
    const zc = q.ph === PH.MAZE ? this.L.chapters[q.ch].plazaZ : q.ph === PH.DRAGON ? this.L.dr.circlesZ : null;
    this.circleZ = zc; const xs = circleXs(Math.max(1, q.n));
    this.circles.forEach((c, i) => { c.visible = zc !== null && i < xs.length; if (c.visible) c.position.set(xs[i], 0.06, zc); });
  }
  event(ev) {
    if (ev.k === 'boulder') this.openBoulder(ev.ch, false);
    else if (ev.k === 'gate') this.openGate(ev.ch, false);
    else if (ev.k === 'cage') this.openCage(false);
  }
  update(dt) {
    this.t += dt; const t = this.t;
    this.circles.forEach((c, i) => {
      if (!c.visible) return; const on = this.occ[i], u = c.userData, p = 0.5 + 0.5 * Math.sin(t * 4 + i);
      u.disc.material.color.set(on ? '#3dff7a' : '#ffd23f'); u.disc.material.opacity = on ? 0.8 : 0.4 + 0.25 * p; u.beam.material.color.set(on ? '#3dff7a' : '#ffd23f');
      u.beam.scale.y = on ? 1.2 : 1; u.ring.scale.setScalar(1 + (on ? 0 : 0.05 * p)); u.lab.visible = !on; u.lab.position.y = 5.2 + 0.3 * Math.sin(t * 2.4 + i);
    });
    this.q.chapters.forEach((ch, c) => {
      const s = this.state[c];
      if (s.boulder === 'falling') { s.bt += dt; const g = ch.boulder.grp, u = Math.min(1, s.bt / 1.5); g.position.y = -u * u * 11; g.position.x = Math.sin(s.bt * 40) * 0.25 * (1 - u); g.rotation.x = u * 0.5; if (u >= 1) { g.visible = false; s.boulder = 'gone'; } }
      if (s.gate === 'rising') { s.gt += dt; const g = ch.gate.grp, u = Math.min(1, s.gt / 1.4); g.position.y = u * 9; if (u >= 1) s.gate = 'open'; }
    });
    const d = this.dragon, L = this.L;
    if (this.cage === 'closed') { animateDragon(d, t, 0.15); d.root.rotation.y = Math.sin(t * 0.6) * 0.15; }
    else {
      this.fly += dt; const f = this.fly, cg = this.q.dragon.grp;
      if (cg) cg.position.y = Math.min(f, 2) * 6, cg.visible = f < 2.2;
      const u = Math.max(0, f - 1.6) / 7.4, e = Math.min(1, u);
      d.root.rotation.y = Math.PI * Math.min(1, Math.max(0, f - 0.8) / 1.2);
      d.root.position.set(Math.sin(f * 0.8) * 3 * e, e * e * 46 + Math.min(1, e * 4) * 3, L.dr.dragonZ - e * 150);
      d.root.scale.setScalar(1.15 * (1 - e * 0.55)); animateDragon(d, t, 1);
    }
  }
}
