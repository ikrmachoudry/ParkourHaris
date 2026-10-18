// The four levels. Everything is built from a small "kit" of sections so each level stays readable.
import * as THREE from 'three';
import { World } from './world.js';
import { flagBoard, textBoard } from './flags.js';
import { skyLayout, makeDyn, buildSkyVisuals, SKY_Y, GZT, GZB } from './sky.js';
import { buildJungle } from './jungle.js';
import { buildQuest } from './questworld.js';
import { questLayout } from './quest.js';
import { buildHunt } from './huntworld.js';
import { huntLayout } from './hunt.js';

export const THEMES = {
  fun: {
    plat: ['#ff6b9d', '#ffd23f', '#4cc9f0', '#80ed99', '#ff9f1c'], pad: '#ffffff', icePad: '#ffffff', edgeGlow: null,
    hazard: '#ff3d68', hazard2: '#fff7d6', hub: '#6a3fa0', accent: '#ffd23f', convBase: '#7a2d9e', belt: '#ffe9a8',
  },
  jungle: {
    plat: ['#3f9d4a', '#6bbf59', '#8b5e3c', '#2f7d3a', '#a3d36b'], pad: '#c7f08a', icePad: '#ffffff', edgeGlow: null,
    hazard: '#ff7a1a', hazard2: '#fff7d6', hub: '#5a3a1e', accent: '#ffd23f', convBase: '#5a3a1e', belt: '#a3d36b',
  },
  arena: {
    plat: ['#e9d9bd', '#e9d9bd', '#e9d9bd', '#e9d9bd', '#e9d9bd'], pad: '#f6efe0', icePad: '#ffffff', edgeGlow: null,
    hazard: '#ff6b6b', hazard2: '#ffffff', hub: '#8a8f99', accent: '#ffd23f', convBase: '#9aa3b5', belt: '#dfe6f5',
  },
  maze: {
    plat: ['#ff6b9d', '#ffd23f', '#4cc9f0', '#80ed99', '#b58cff'], pad: '#ffffff', icePad: '#ffffff', edgeGlow: null,
    hazard: '#ff3d68', hazard2: '#fff7d6', hub: '#8a4fd1', accent: '#ffd23f', convBase: '#7a2d9e', belt: '#ffe9a8',
  },
  annoy: {
    plat: ['#ff6b9d', '#ffd23f', '#4cc9f0', '#80ed99', '#b58cff'], pad: '#ffffff', icePad: '#ffffff', edgeGlow: null,
    hazard: '#ff3d68', hazard2: '#fff7d6', hub: '#5b2d9e', accent: '#ffd23f', convBase: '#7a2d9e', belt: '#ffe9a8',
  },
  hunt: {
    plat: ['#3f9d4a', '#6bbf59', '#8b5e3c', '#2f7d3a', '#a3d36b'], pad: '#c7f08a', icePad: '#ffffff', edgeGlow: null,
    hazard: '#ff4d6d', hazard2: '#fff7d6', hub: '#5a3a1e', accent: '#ffd23f', convBase: '#4a3a5e', belt: '#ffe9a8',
  },
  quest: {
    plat: ['#3f9d4a', '#6bbf59', '#8b5e3c', '#2f7d3a', '#a3d36b'], pad: '#c7f08a', icePad: '#ffffff', edgeGlow: null,
    hazard: '#ff4d6d', hazard2: '#fff7d6', hub: '#5a3a1e', accent: '#ffd23f', convBase: '#4a3a5e', belt: '#ffe9a8',
  },
};
const KEYS = ['fun', 'jungle', 'quest', 'arena', 'maze', 'annoy', 'hunt'];

const CANNON_VY = 37, CANNON_VZ = 28;
const FAN_GAP = 15, FAN_VY = 26, FAN_VZ = 11, TR_VY = 28, TR_VZ = 15, TR_GAP = 12;
export function buildLevel(idx, headless = false, arrow = null, seed = 1) {
  const key = KEYS[idx], th = THEMES[key];
  const world = new World(th, headless);
  world.arrowTexture = arrow;
  world.key = key; world.waterY = -40; world.killY = -60;
  const c = { z: 0, y: 0 };
  const info = { key, spawn: { x: 0, y: 0, z: 1.5 }, signs: [], pads: [] };

  // ------------------------------------------------------------ kit
  function plat(w, d, o = {}) {
    const near = c.z - (o.gap ?? 0), cz = near - d / 2, top = c.y + (o.dy ?? 0), x = o.x ?? 0;
    const s = world.platform(x, top, cz, w, d, o);
    c.z = near - d; c.y = top;
    return { s, x, cz, near, far: near - d, top, w, d };
  }
  function cp(p, off = 3.5) { return world.checkpoint(p.x, p.top, p.near - off, Math.min(p.w, 16)); }

  // two roller-coaster carts shuttling between stations (staggered), riding a hilly curved rail
  function coaster(D, T, cx = 0) {
    const zA = c.z - 0.9 - 3, lanes = [-4.7 + cx, 4.7 + cx];
    lanes.forEach((lx, i) => {
      const ph = i * Math.PI;
      const pos = (t) => { const u = 0.5 - 0.5 * Math.cos(2 * Math.PI * t / T + ph); return [1.2 * Math.sin(2 * Math.PI * u), 2.3 * Math.sin(2 * Math.PI * u), -D * u]; }; // offsets from the lane centre
      world.mover(lx, c.y, zA, 6, 6, (t) => pos(t), { h: 1.3, stripes: true, color: i ? th.plat[2] : th.plat[0] });
      const pts = [], N = 48;
      for (let k = 0; k <= N; k++) { const u = k / N, o = [lx + 1.2 * Math.sin(2 * Math.PI * u), 2.3 * Math.sin(2 * Math.PI * u), -D * u]; pts.push([o[0], c.y - 1.5 + o[1], zA + o[2]]); }
      for (const sx of [-2.2, 2.2]) world.tube(pts.map((p) => [p[0] + sx, p[1], p[2]]), 0.14, th.hazard);
      world.tube(pts.map((p) => [p[0], p[1] - 0.3, p[2]]), 0.2, th.hub);
      for (let k = 0; k <= N; k += 4) { const p = pts[k]; world.tube([[p[0], p[1] - 0.3, p[2]], [p[0], c.y - 14, p[2]]], 0.22, th.hub); }
    });
    c.z = zA - D - 3 - 0.9;
  }
  function finish() {
    const p = plat(22, 34, { gap: 0, color: th.plat[0] });
    const gz = p.near - 12;
    world.arch(0, p.top, gz, 20, th.accent, false);
    info.finishZ = gz; info.finishY = p.top; info.finishPlat = p;
    return p;
  }


  // ------------------------------------------------------------ the maps
  if (idx === 0) { // --------------------------------------- FUN MAP (nothing can kill you - just play, then find the final door)
    const GW = 140, ZEND = 440;
    info.startArch = -2; c.z = -16; c.y = 0;
    // one huge floor + tall fences around the whole park (so there is no way to fall off)
    world.platform(0, 0, (10 - ZEND) / 2, GW, ZEND + 10, { h: 2, color: '#92e66c', pad: false });
    for (let z = 4, k = 0; z > -ZEND - 6; z -= 14, k++) for (const sx of [-1, 1]) world.platform(sx * (GW / 2 + 1), 22, z - 7, 2, 14, { h: 22, color: th.plat[(k + (sx > 0 ? 2 : 0)) % th.plat.length], pad: false });
    world.platform(0, 22, 11, GW + 4, 2, { h: 22, color: th.plat[1], pad: false });
    world.platform(0, 22, -ZEND - 1, GW + 4, 2, { h: 22, color: th.plat[3], pad: false });
    if (!world.headless) world.main.add(world.rbox(12, 0.03, 232, 0.01), 0, 0.02, -128, '#f8ebb8'); // sandy main road
    if (!world.headless) { // big boards on the park walls: Pakistan + Palestine flags, MADE BY HARIS, and the name in Urdu
      const WX = GW / 2 - 0.3, URDU = '\u0639\u06a9\u0631\u0645\u06c1';
      const put = (obj, side, z, y = 12) => { obj.position.set(side * WX, y, z); obj.rotation.y = side < 0 ? Math.PI / 2 : -Math.PI / 2; world.group.add(obj); };
      put(flagBoard('pk', 30, 20), -1, -50); put(flagBoard('ps', 30, 20), 1, -50);
      put(flagBoard('ps', 30, 20), -1, -290); put(flagBoard('pk', 30, 20), 1, -290);
      put(textBoard('MADE BY HARIS', 44, 13, { bg: ['#ff3d68', '#ff9f1c'], fg: '#ffffff', stroke: '#6a1020', border: '#ffd23f' }), -1, -130); put(textBoard('MADE BY HARIS', 44, 13, { bg: ['#4cc9f0', '#3a2d9e'], fg: '#ffd23f', stroke: '#101040', border: '#ffffff' }), 1, -170);
      put(textBoard(URDU, 30, 15, { urdu: true, bg: ['#0b6b3a', '#01411c'], fg: '#ffffff', stroke: '#00230f', border: '#ffd23f' }), -1, -210); put(textBoard(URDU, 30, 15, { urdu: true, bg: ['#0b6b3a', '#01411c'], fg: '#ffffff', stroke: '#00230f', border: '#ffd23f' }), 1, -330);
    }
    const strip = (z) => world.platform(0, 0.04, z, 8, 14, { boost: 1, color: '#ffd23f', pad: false, h: 0.5 });
    world.checkpoint(0, 0, -70, 16);

    // ---- A: trampoline park, air pad, sky deck
    strip(-30); strip(-52);
    [[-16, -26, 3.2, 20, 0], [-22, -36, 3.2, 24, 1], [-14, -46, 3.4, 28, 2], [16, -28, 3.2, 22, 3], [22, -38, 3.4, 26, 4]].forEach(([x, z, r, pw, k]) => world.disc(x, 0, z, r, { bounce: pw, color: th.plat[k] }));
    world.platform(31, 9, -52, 12, 12, { color: th.plat[1] });                 // sky deck
    world.disc(20, 0, -50, 3.4, { bounce: 29, color: th.hazard });             // launches you onto the deck
    world.airpad(-26, -62, 3.6, 0, 15);                                        // updraft ...
    world.platform(-34, 13, -62, 8, 8, { color: th.plat[2] });                 // ... to a cloud platform

    // ---- more rides: flying chairs, cannon, pirate ship, drop tower
    world.orbit(-32, -18, 6, 1.6, 3, 0.8);
    world.cannon(22, -14, 16, [0, -17]);
    world.pirate(28, -70, 16, 0.55, 6.5);
    world.dropTower(-32, -82, 14, 13);

    // ---- B: slide tower, boxing ring, seesaws
    world.checkpoint(0, 0, -72, 16);
    world.ramp(-14, -72, 0, -98, 10, 8, { color: th.plat[3] });
    world.platform(-28, 10, -104, 30, 12, { color: th.plat[1] });
    world.punch(-44, 11.2, -104, 1, 0, 8, { off: 0 }); world.punch(-12.2, 11.2, -104, -1, 0, 8, { off: 1.6 });
    [-38, -28, -18].forEach((x, k) => world.ramp(x, -110, 10, -152, 0, 7, { conv: [0, -14], ice: true, color: th.plat[(k * 2) % 5], padColor: '#ffffff' }));
    world.platform(26, 1.2, -90, 14, 14, { color: th.plat[4] });                // boxing ring
    world.punch(17.2, 2.4, -90, 1, 0, 7, { off: 0 }); world.punch(34.8, 2.4, -90, -1, 0, 7, { off: 1.6 });
    world.punch(26, 2.4, -98.8, 0, 1, 7, { off: 0.8 }); world.punch(26, 2.4, -81.2, 0, -1, 7, { off: 2.4 });
    for (let i = 0; i < 3; i++) world.seesaw(26, 2.0, -112 - i * 16, 9, 12, 1.4, 3.4 + i * 0.4, i * 2.1);
    strip(-118);

    // ---- C: bungee, ferris wheel, coaster, merry-go-round, tea cups
    world.checkpoint(0, 0, -150, 16);
    world.ramp(-30, -156, 0, -182, 8, 10, { color: th.plat[2] });
    world.platform(-30, 8, -188, 12, 12, { color: th.plat[0] });
    world.bungee(-30, -203, 0, 5.5, 30, 15);
    world.ferris(-30, 11, -224, 9, 6, 0.4);
    world.ramp(26, -156, 0, -164, 3, 14, { color: th.plat[3] });
    c.z = -164; c.y = 3; plat(16, 8, { x: 26 }); coaster(36, 11, 26); plat(16, 8, { x: 26 });
    world.ramp(26, c.z, 3, c.z - 8, 0, 14, { color: th.plat[3] });
    world.disc(0, 0.3, -180, 8.5, { omega: 0.7, color: th.plat[0] });          // merry-go-round
    if (!world.headless) { world.main.add(new THREE.CylinderGeometry(0.5, 0.5, 9, 10), 0, 4.8, -180, '#ffffff'); world.main.add(new THREE.ConeGeometry(10, 3.2, 20), 0, 10.4, -180, th.hazard); }
    [-160, -172, -184].forEach((z, k) => { world.disc(-14, 0.3, z, 3.5, { omega: k % 2 ? 1.5 : -1.5, color: th.plat[(k + 1) % 5] }); world.bar(-14, 0.4, z, 6.4, { omega: k % 2 ? -1.1 : 1.1, h: 0.9, w: 0.9 }); });
    world.checkpoint(0, 0, -232, 16);


    world.checkpoint(0, 0, -244, 16);

    // ---- F: HIGHWAYS + RECTANGLE LOOP: a long road down each side of the park, joined by two cross roads into one big rectangle (obstacle-free racing track).
    //          The 4 cars wait at the two CAR STATIONS near the start.
    const HX = 56, HW = 7, RC = { x: 0, z: (GZT + GZB) / 2 }, SZ0 = -27, SZ1 = -420;
    const SIDES = [1, -1];
    const segs = [], plazas = [];
    for (const sd of SIDES) {
      plazas.push({ x: HX * sd, z: SZ0, r: 13, g: 'p0' + sd }, { x: HX * sd, z: SZ1, r: 13, g: 'p1' + sd });
      segs.push({ ax: HX * sd, az: SZ0, bx: HX * sd, bz: SZ1, hw: HW, g: 'hwy' + sd });
    }
    segs.push({ ax: -HX, az: GZT, bx: HX, bz: GZT, hw: HW, g: 'con-top' }, { ax: -HX, az: GZB, bx: HX, bz: GZB, hw: HW, g: 'con-bot' });
    const hb = []; for (const sd of SIDES) for (const z of [-110, -210, -370]) hb.push({ x: HX * sd, z, r: 4 });
    const TR = { segs, plazas, boosts: [...hb, { x: 30, z: GZT, r: 4 }, { x: -30, z: GZT, r: 4 }, { x: 30, z: GZB, r: 4 }, { x: -30, z: GZB, r: 4 }] };
    info.track = TR;
    info.cars = [[HX - 3.5, -33], [HX + 3.5, -33], [-HX - 3.5, -33], [-HX + 3.5, -33]].map(([x, z], i) => ({ id: i, x, z, yaw: Math.PI }));   // 2 cars at each CAR STATION
    const SK = skyLayout();
    if (!world.headless) {
      const wm = world.main, ASPH = '#3b3f4d';
      const nearOther = (x, z, g) => { for (const q of segs) { if (q.g === g) continue; const abx = q.bx - q.ax, abz = q.bz - q.az, l2 = abx * abx + abz * abz; let t = ((x - q.ax) * abx + (z - q.az) * abz) / l2; t = Math.max(0, Math.min(1, t)); if (Math.hypot(x - (q.ax + abx * t), z - (q.az + abz * t)) < q.hw - 0.4) return true; } for (const p of plazas) if (p.g !== g && Math.hypot(x - p.x, z - p.z) < p.r - 0.4) return true; return false; };
      // cut every road piece into <= 12 m visual pieces
      const pieces = []; segs.forEach((q) => { const L = Math.hypot(q.bx - q.ax, q.bz - q.az), n = Math.max(1, Math.ceil(L / 12)); for (let k = 0; k < n; k++) pieces.push({ ax: q.ax + (q.bx - q.ax) * k / n, az: q.az + (q.bz - q.az) * k / n, bx: q.ax + (q.bx - q.ax) * (k + 1) / n, bz: q.az + (q.bz - q.az) * (k + 1) / n, hw: q.hw, g: q.g }); });
      pieces.forEach((q, i) => {
        const dx = q.bx - q.ax, dz = q.bz - q.az, L = Math.hypot(dx, dz), mx = (q.ax + q.bx) / 2, mz = (q.az + q.bz) / 2, ang = -Math.atan2(dz, dx), nx = -dz / L, nz = dx / L;
        wm.add(world.rbox(L + 0.7, 0.08, q.hw * 2, 0.02), mx, q.g.startsWith('hwy') ? 0.053 : q.g.startsWith('con') ? 0.056 : 0.05, mz, ASPH, 0, ang, 0);
        for (const sg of [-1, 1]) {
          const kx = mx + nx * sg * (q.hw - 0.45), kz = mz + nz * sg * (q.hw - 0.45);
          if (!nearOther(kx, kz, q.g)) wm.add(world.rbox(L + 0.05, 0.09, 0.9, 0.02), kx, 0.1, kz, (i + (sg > 0 ? 1 : 0)) % 2 ? '#ff3b3b' : '#ffffff', 0, ang, 0);
          if (i % 2 === 0) { const tx = mx + nx * sg * (q.hw + 1.3), tz = mz + nz * sg * (q.hw + 1.3); if (!nearOther(tx, tz, q.g)) { wm.add(new THREE.CylinderGeometry(0.75, 0.75, 0.7, 10), tx, 0.35, tz, '#23252e'); wm.add(new THREE.CylinderGeometry(0.78, 0.78, 0.22, 10), tx, 0.85, tz, (i / 2) % 2 ? '#ff3b3b' : '#ffffff'); } }
        }
        if (i % 2 === 0 && !nearOther(mx, mz, q.g)) wm.add(world.rbox(Math.min(L, 5) * 0.55, 0.06, 0.3, 0.02), mx, 0.1, mz, '#ffffff', 0, ang, 0);
      });
      for (const p of plazas) {
        wm.add(new THREE.CircleGeometry(p.r, 48), p.x, 0.054, p.z, ASPH, -Math.PI / 2, 0, 0);
        for (let k = 0; k < 40; k++) { const a = (k / 40) * Math.PI * 2, x = p.x + Math.cos(a) * (p.r - 0.45), z = p.z + Math.sin(a) * (p.r - 0.45); if (!nearOther(x, z, p.g)) wm.add(world.rbox(2.0, 0.09, 0.9, 0.02), x, 0.1, z, k % 2 ? '#ff3b3b' : '#ffffff', 0, -a + Math.PI / 2, 0); }
        for (let k = 0; k < 20; k++) { const a = (k / 20) * Math.PI * 2, x = p.x + Math.cos(a) * (p.r + 1.3), z = p.z + Math.sin(a) * (p.r + 1.3); if (!nearOther(x, z, p.g)) { wm.add(new THREE.CylinderGeometry(0.75, 0.75, 0.7, 10), x, 0.35, z, '#23252e'); wm.add(new THREE.CylinderGeometry(0.78, 0.78, 0.22, 10), x, 0.85, z, k % 2 ? '#ff3b3b' : '#ffffff'); } }
      }
      // turbo pads
      for (const b of TR.boosts) { wm.add(world.rbox(10, 0.07, 8, 0.02), b.x, 0.12, b.z, '#ff9f1c'); for (let i = 0; i < 3; i++) wm.add(new THREE.ConeGeometry(1.5, 2.0, 3), b.x, 0.16, b.z + 2 - i * 2, '#fff3b0', -Math.PI / 2 * 0, Math.PI, 0); }
      // oval infield: grandstand
      for (let i = 0; i < 5; i++) wm.add(world.rbox(26 - i * 2, 1.1, 2.4, 0.1), RC.x, 0.55 + i * 1.1, RC.z - 2 + i * -2.2, th.plat[i % 5]);
      // ---- CAR STATION (one on each highway): canopy over 2 colour-coded parking bays, start line + gantry
      const BAYC = ['#0b6b3a', '#2f7bff', '#ffb21e', '#a855f7'];
      info.cars.forEach((c, i) => { wm.add(world.rbox(7.5, 0.07, 9.5, 0.03), c.x, 0.12, c.z, BAYC[i]); wm.add(world.rbox(6.9, 0.075, 8.9, 0.03), c.x, 0.125, c.z, ASPH); });
      for (const sd of SIDES) {
        const X = HX * sd;
        for (const [px, pz] of [[X - 10.5, -14], [X + 10.5, -14], [X - 10.5, -38], [X + 10.5, -38]]) wm.add(world.rbox(0.8, 6, 0.8, 0.2), px, 3, pz, th.plat[1]);
        wm.add(world.rbox(23, 0.7, 27, 0.2), X, 6.3, SZ0, th.hazard); wm.add(world.rbox(21, 0.4, 25, 0.2), X, 6.75, SZ0, '#ffffff');
        for (let i = 0; i < 10; i++) for (let j = 0; j < 2; j++) wm.add(world.rbox(1.4, 0.07, 1.4, 0.01), X - 6.3 + i * 1.4, 0.13, -48 - j * 1.4, (i + j) % 2 ? '#111111' : '#ffffff');
        for (const sg of [-1, 1]) wm.add(world.rbox(0.8, 6.4, 0.8, 0.2), X + sg * 8.2, 3.2, -48, th.plat[1]);
        wm.add(world.rbox(17.6, 1.0, 1.2, 0.2), X, 6.4, -48, th.hazard);
      }
    }
    // ---- G: SKY SPEEDWAY (elevated obstacle road; clearing it unlocks the 4 red racers waiting on the sky plaza)
    segs.push(...SK.segs); TR.plazas.push(...SK.plazas); TR.boosts.push(...SK.boosts); TR.slicks = SK.slicks;
    SK.dyn = makeDyn(SK.defs); TR.dyn = SK.dyn;
    info.cars.push(...SK.racers);
    info.sky = { y: SKY_Y, gates: SK.gates, garage: SK.garage, racerIds: [4, 5, 6, 7], pillars: SK.pillars };
    if (!world.headless) buildSkyVisuals(world, SK, th);
    if (!world.headless) {
      const mk = (txt, w, h, o, x, y, z, ry) => { const b = textBoard(txt, w, h, o); b.position.set(x, y, z); b.rotation.y = ry; world.group.add(b); return b; };
      const station = { bg: ['#1f8de6', '#14609f'], fg: '#ffffff', stroke: '#06223d', border: '#ffd23f' };
      for (const sd of SIDES) {
        const X = HX * sd;
        mk('CAR STATION', 20, 4.6, station, X - 11.8, 8.8, SZ0, -Math.PI / 2); mk('CAR STATION', 20, 4.6, station, X + 11.8, 8.8, SZ0, Math.PI / 2);
        for (const [x, z] of [[16, -8], [34, -14]]) { const post = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 4, 8), new THREE.MeshStandardMaterial({ color: '#e8e8f0' })); post.position.set(x * sd, 2, z); world.group.add(post); mk(sd > 0 ? 'CAR STATION \u2192' : '\u2190 CAR STATION', 12, 3.2, station, x * sd, 4.6, z, 0); }
        mk('LONG ROAD \u2192 DRIVE THE WHOLE MAP', 22, 3.2, { bg: ['#ff9f1c', '#e0601a'], fg: '#ffffff', stroke: '#4a1c00', border: '#ffffff' }, X, 5.2, -60, 0);
      }
    }

    // ---- D: the hedge maze (perfect maze, generated with a fixed seed) -> final door
    const CELL = 8, N = 7, WT = 1.2, WH = 6, MZ = -356;
    let seed = 20261017; const rnd = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    const V = Array.from({ length: N }, () => Array(N + 1).fill(true)), H = Array.from({ length: N + 1 }, () => Array(N).fill(true)), seen = Array.from({ length: N }, () => Array(N).fill(false));
    const stack = [[0, 3]]; seen[0][3] = true;
    while (stack.length) {
      const [r, cc] = stack[stack.length - 1], opts = [];
      if (r + 1 < N && !seen[r + 1][cc]) opts.push([r + 1, cc]); if (r - 1 >= 0 && !seen[r - 1][cc]) opts.push([r - 1, cc]);
      if (cc - 1 >= 0 && !seen[r][cc - 1]) opts.push([r, cc - 1]); if (cc + 1 < N && !seen[r][cc + 1]) opts.push([r, cc + 1]);
      if (!opts.length) { stack.pop(); continue; }
      const [nr, nc] = opts[Math.floor(rnd() * opts.length)];
      if (nr === r + 1) H[r + 1][cc] = false; else if (nr === r - 1) H[r][cc] = false; else if (nc === cc - 1) V[r][cc] = false; else V[r][cc + 1] = false;
      seen[nr][nc] = true; stack.push([nr, nc]);
    }
    H[0][3] = false; H[N][3] = false;
    const hedge = ['#3fae4a', '#58c25c', '#2f9a44'];
    for (let r = 0; r < N; r++) for (let k = 0; k <= N; k++) if (V[r][k]) world.platform((k - N / 2) * CELL, WH, MZ - (r + 0.5) * CELL, WT, CELL + WT, { h: WH, color: hedge[(r + k) % 3], pad: false });
    for (let r = 0; r <= N; r++) for (let k = 0; k < N; k++) if (H[r][k]) world.platform((k + 0.5 - N / 2) * CELL, WH, MZ - r * CELL, CELL + WT, WT, { h: WH, color: hedge[(r + k + 1) % 3], pad: false });
    // solution path (cell centres) for tests
    const prev = new Map(), q = [[0, 3]]; prev.set('0,3', null);
    while (q.length) {
      const [r, k] = q.shift();
      const nb = [[r + 1, k, H[r + 1][k]], [r - 1, k, r > 0 ? H[r][k] : true], [r, k - 1, V[r][k]], [r, k + 1, V[r][k + 1]]];
      for (const [nr, nk, wall] of nb) if (!wall && nr >= 0 && nr < N && nk >= 0 && nk < N && !prev.has(nr + ',' + nk)) { prev.set(nr + ',' + nk, [r, k]); q.push([nr, nk]); }
    }
    const path = []; for (let cur = [N - 1, 3]; cur; cur = prev.get(cur[0] + ',' + cur[1])) path.unshift([(cur[1] + 0.5 - N / 2) * CELL, MZ - (cur[0] + 0.5) * CELL]);
    info.mazePath = path;
    world.checkpoint(0, 0, MZ + 2, 16);
    c.z = MZ - N * CELL; c.y = 0.15;
    finish();
  } else if (idx === 4) { // ------------------------------------------ MAZE: one long candy obstacle race (doors, water hops, fans, swings, boat, hammers, seesaws)
    world.waterY = -3; world.killY = -9;
    info.startArch = 3;
    let rs = ((seed | 0) * 9301 + 49297) % 233280; const rnd = () => (rs = (rs * 9301 + 49297) % 233280) / 233280;
    const P = th.plat;
    // ---- start
    const st = plat(22, 22, { gap: -4, color: P[3] });
    cp(st, 4);
    // ---- A: DOOR DASH - two walls of doors; some are solid fakes, run into the real ones
    const a = plat(21, 30, { color: P[1] });
    const fakes = (n, keep) => { const f = Array.from({ length: n }, () => rnd() < 0.62); if (f.every(Boolean)) f[keep] = false; return f; };
    world.doorWall(0, a.top, a.near - 7, 21, 7, fakes(7, 2 + Math.floor(rnd() * 3)));
    world.doorWall(0, a.top, a.near - 20, 21, 5, fakes(5, Math.floor(rnd() * 5)));
    cp(a, 27);
    // ---- B: vanishing candy tiles over the water
    const rows = 5; let bz = c.z - 5;
    for (let r = 0; r < rows; r++) for (let k = 0; k < 3; k++) world.tile((k - 1) * 7.5, c.y, bz - r * 8, 5.4, 5.4, { period: 7, solidT: 5.2, warn: 1.2, off: k * 2.33 + r * 1.3, color: P[(r + k) % 5] });
    c.z = bz - (rows - 1) * 8 - 5.4 / 2 - 3.2;
    const b2 = plat(20, 14, { color: P[2] }); cp(b2, 4);
    // ---- C: FAN BRIDGE - a narrow beam, giant fans blowing you sideways
    const cb = plat(10, 56, { color: P[4] });
    [[6, 14, 1], [20, 28, -1], [34, 42, 1], [46, 54, -1]].forEach(([n0, n1, sg]) => world.fan(sg > 0 ? -5 : -5, 5, cb.near - n1, cb.near - n0, cb.top - 0.5, cb.top + 5, sg * 4.6, 0));
    cp(cb, 54);
    const c2 = plat(16, 12, { color: P[0] });
    // ---- D: GRAB-SWINGS across three gaps (hold G / GRAB, jump to let go)
    const swingGap = (gap, ph, per = 4.2) => {
      const s0 = c.z, far = plat(9, 10, { gap, color: P[(Math.floor(rnd() * 5))] });
      world.swing(0, far.top + 8.5, s0 - gap / 2, 9, 0.95, per, ph);
      return far;
    };
    swingGap(14, 0); const d2 = swingGap(15, 1.9); cp(d2, 4); const d3 = swingGap(16, 3.9, 4.6);
    const d4 = plat(14, 12, { color: P[1], gap: 0 }); cp(d4, 4);
    // ---- E: THE BOAT - a rowing boat shuttles across the lake
    const bdock = plat(14, 10, { color: P[2] });
    const BA = 34, BT = 18, boatTop = bdock.top;
    const bz0 = bdock.far - 5.5;
    world.mover(0, boatTop, bz0, 9, 7, (t) => { const u = 0.5 - 0.5 * Math.cos(2 * Math.PI * t / BT); return [0, 0, -BA * u]; }, { h: 1.2, color: '#b5651d', padColor: '#e8c48a', stripes: false });
    if (!world.headless) {
      const bg = new THREE.Group(); world.add(bg);
      const bow = new THREE.Mesh(new THREE.ConeGeometry(2.0, 3.2, 4), world.mat('#b5651d')); bow.rotation.x = -Math.PI / 2; bow.rotation.z = Math.PI / 4; bow.position.set(0, -0.3, -5.1); bg.add(bow);
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 4.5, 8), world.mat('#ffffff')); mast.position.set(0, 2.2, 1.6); bg.add(mast);
      const flag = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.1, 1.8), world.mat(th.hazard)); flag.position.set(0, 3.9, 0.7); bg.add(flag);
      const oars = [-1, 1].map((sd) => { const pv = new THREE.Group(); pv.position.set(sd * 4.5, 0.9, 0); const o = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 5.4), world.mat('#7a4a1e')); o.position.set(sd * 1.2, 0, 0); o.rotation.y = 0; const bl = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.12, 1.4), world.mat('#ffd23f')); bl.position.set(sd * 2.0, 0, 0); pv.add(o, bl); pv.rotation.y = sd * 1.5; bg.add(pv); return { pv, sd }; });
      world.updaters.push((t) => { const u = 0.5 - 0.5 * Math.cos(2 * Math.PI * t / BT); bg.position.set(0, boatTop, bz0 - BA * u); oars.forEach(({ pv, sd }) => { pv.rotation.z = Math.sin(t * 3.2) * 0.35 * sd; }); flag.rotation.y = Math.sin(t * 5) * 0.2; });
    }
    c.z = bdock.far - 45; // far dock sits 2 m past the boat's far end
    const bfar = plat(14, 12, { gap: 0, color: P[3] }); cp(bfar, 4);
    info.cannon = { x: -4.5, z: bdock.far + 3.5, vy: CANNON_VY, push: [0, -CANNON_VZ] };
    world.cannon(info.cannon.x, info.cannon.z, CANNON_VY, info.cannon.push);
    info.boatFar = bfar;
    // ---- F: GIANT HAMMERS
    const hm = plat(14, 44, { color: P[0] });
    [8, 22, 36].forEach((o, i) => world.hammer(0, hm.top + 11.6, hm.near - o, 10, { amp: 1.0, omega: 1.5, phase: i * 2.1, r: 2.0, span: 9, baseY: hm.top - 0.5 }));
    cp(hm, 42);
    // ---- G: SEESAW RIDGE
    const sp0 = plat(12, 8, { color: P[4] });
    for (let i = 0; i < 4; i++) { world.seesaw(0, c.y + 0.4, c.z - 5.5 - i * 13.5, 8, 11, 0.9, 3.6 + (i % 2) * 0.6, i * 2.1); }
    c.z -= 4 * 13.5 + 0.0; // past the last plank (2.5 m jump gaps)
    const sp1 = plat(14, 10, { color: P[2], gap: 0 }); cp(sp1, 4);
    // ---- G2: ROLLING CANDY BALLS - giant balls roll down the lanes towards you
    const bl = plat(14, 64, { color: P[3] });
    [[-4.6, [0, 1.9]], [0, [0.95, 2.85]], [4.6, [1.9, 3.8]]].forEach(([x, ph]) => world.balls(x, bl.far, bl.near, () => 0, 1.5, 10, 3.8, ph));
    cp(bl, 60);
    // ---- G3: DONUT SWEEPER - a round platform with a spinning arm (jump over it!)
    const sw0 = plat(10, 8, { color: P[1] });
    const swc = c.z - 1.3 - 9.5;
    world.disc(0, 0, swc, 9.5, { color: P[4] });
    world.bar(0, 0.4, swc, 17, { omega: 1.0, h: 0.9, w: 1.0, arms: 1 });
    c.z = swc - 9.5 - 1.3;
    const sw1 = plat(12, 8, { color: P[2], gap: 0 }); cp(sw1, 4);
    // ---- G4: BOUNCE LADDER - bouncy mushrooms launch you up two sky decks, then an icy slide brings you back down
    const lad0 = plat(14, 12, { color: P[0] });
    world.disc(0, 0, lad0.far + 1.5, 3.2, { bounce: 30, color: th.hazard });
    const lad1 = plat(12, 12, { gap: 7, dy: 7, color: P[4] });
    world.disc(0, 7, lad1.far + 1.5, 3.2, { bounce: 30, color: th.hazard });
    const lad2 = plat(12, 12, { gap: 7, dy: 7, color: P[1] }); cp(lad2, 4);
    world.ramp(0, lad2.far, 14, lad2.far - 46, 0, 8, { conv: [0, -14], ice: true, color: P[2], padColor: '#ffffff' });
    c.z = lad2.far - 46; c.y = 0;
    const lad3 = plat(14, 12, { gap: 0, color: P[3] }); cp(lad3, 4);
    // ---- H: SKY SWINGS - two high swings and a shaky tile between them, then the finish
    const e1 = swingGap(15, 0.7, 3.8); const e2 = swingGap(16, 2.8, 4.0); cp(e2, 4);
    finish();
  } else if (idx === 5) { // ------------------------------------------ ANNOYING MAZE: 5 tunnels, 2 ferris wheels, fan + trampolines, flag shuttles with blades, 5 cutters
    world.waterY = -1.5; world.killY = -8;           // water only ~5 ft below the platforms
    info.startArch = 3;
    let rs = ((seed | 0) * 7919 + 12345) % 233280; const rnd = () => (rs = (rs * 9301 + 49297) % 233280) / 233280;
    const P = th.plat;
    // ---- start plaza
    const st = plat(36, 22, { gap: -4, color: P[3] }); cp(st, 4);
    // ---- 1: FIVE TUNNELS (red, white, black, green, blue). Only ONE goes through - the others are dead ends!
    const TL = 16, tcz = c.z - TL / 2, TC = ['#e63946', '#f5f5f5', '#2b2b2b', '#2ecc71', '#3a86ff'], TN = ['red', 'white', 'black', 'green', 'blue'];
    const real = Math.floor(rnd() * 5); info.tunnelReal = real; info.tunnelNames = TN;
    for (let i = 0; i < 5; i++) {
      const xi = (i - 2) * 7;
      world.platform(xi, 0, tcz, 7, TL, { color: TC[i], pad: false });                       // coloured floor
      world.platform(xi, 5.0, tcz, 7, TL, { h: 0.5, color: TC[i], pad: false });            // coloured roof
      if (i !== real) world.platform(xi, 4.5, tcz - TL / 2 + 0.5, 6, 1, { h: 4.5, color: TC[i], pad: false });   // dead end
    }
    for (let k = -3; k <= 2; k++) world.platform(k * 7 + 3.5, 4.5, tcz, 1, TL, { h: 4.5, color: '#e8e2f5', pad: false });
    c.z = tcz - TL / 2;
    const tp = plat(36, 10, { color: P[1] }); cp(tp, 4);
    // ---- 2: TWO FERRIS WHEELS: ride up wheel 1, jump off onto the middle deck, jump into wheel 2, ride round and step off
    const FR = 8, FO = 0.55;
    const w1s = plat(10, 8, { color: P[2] });
    const cz1 = c.z - 1.5;                                   // the cabin at the bottom overlaps the start deck by 1 m so you just walk on
    world.ferris(0, FR, cz1 - 0.0, FR, 6, FO);
    const deckNear = cz1 - FR - 3.5, deckFar = deckNear - 14;
    world.platform(0, FR, (deckNear + deckFar) / 2, 8, 14, { color: P[0], h: 1 });
    world.checkpoint(0, FR, deckNear - 3.5, 8);
    const cz2 = deckFar - 1 - 2.5 - FR;
    world.ferris(0, FR, cz2, FR, 6, FO);
    c.z = cz2 - 1.5; c.y = 0;
    const w2e = plat(10, 10, { color: P[4], gap: 0 }); cp(w2e, 4);
    info.ferris = { cz1, cz2, R: FR, om: FO, deckNear, deckFar };
    // ---- 3: WATER + FAN: a fan hovers over the water; jump on it and the wind throws you onto the next platform (with trampolines)
    const FG = FAN_GAP;
    info.fan = { x: 0, z: c.z - FG / 2, top: 0, vy: FAN_VY, push: [0, -FAN_VZ] };
    world.disc(0, 0, info.fan.z, 4.8, { bounce: FAN_VY, push: info.fan.push, fan: true, color: th.hazard });
    const tr = plat(14, 22, { gap: FG, color: P[0] }); cp(tr, 3);
    world.disc(-3.5, 0, tr.near - 7, 2.2, { bounce: 18, color: P[1] }); world.disc(3.5, 0, tr.near - 11, 2.2, { bounce: 20, color: P[2] });
    info.tramp = { x: 0, z: tr.far + 2.5, vy: TR_VY, push: [0, -TR_VZ] };
    world.disc(0, 0, info.tramp.z, 2.4, { bounce: TR_VY, push: info.tramp.push, color: th.hazard });
    // ---- 4: FLAG SHUTTLES (Pakistan + Spain) with BLADES: ride across the long gap; the blades slam the middle of the decks
    const sd1 = plat(22, 10, { gap: TR_GAP, color: P[3] }); cp(sd1, 3);
    const SD = 34, SP = 5, ST = 24, scz0 = sd1.far - 2 - SP;
    world.flagShuttle(-5.5, 0, scz0, SD, ST, 0, 9, 10, 'pk');
    world.flagShuttle(5.5, 0, scz0, SD, ST, Math.PI, 9, 10, 'es');
    info.shuttle = { z0: scz0, D: SD, T: ST, dp: 10 };
    c.z = scz0 - SD - SP - 2; c.y = 0;
    const sd2 = plat(22, 12, { gap: 0, color: P[1] }); cp(sd2, 4);
    // ---- 5: FIVE CUTTERS - spinning blades sweep the platform; the only safe spot is the small green lane on the right
    const cut = plat(22, 64, { color: P[2] });
    for (let i = 0; i < 5; i++) world.bar(-3, 0.1, cut.near - 9 - i * 10.5, 16, { omega: i % 2 ? -1.25 : 1.25, h: 2.4, w: 1.0, arms: 1, phase: i * 1.3 });
    world.platform(8.3, 0.04, cut.cz, 5, 62, { color: '#7be495', pad: false, h: 0.3 });
    info.cutters = { x: -3, len: 16, safeX: [5.9, 10.8] };
    cp(cut, 60);
    finish();
  } else if (idx === 3) { // ------------------------------------------ SMALL ROOM (120 x 120, plain walls, one high slide, four bungee pads)
    info.startArch = 99; info.spawn = { x: 0, y: 0, z: -10 };
    world.checkpoints.push({ x: 0, y: 0, z: 0, w: 14, spawn: [0, 0, -10] });
    world.waterY = -40; world.killY = -60;
    const Z0 = 6, Z1 = -114, WALL = 30, wc = ['#d9e6f7', '#cfe0f5'];
    world.platform(0, 0, (Z0 + Z1) / 2, 120, 120, { h: 2, color: '#efe3c8', pad: false });
    world.platform(-61, WALL, (Z0 + Z1) / 2, 2, 124, { h: WALL, color: wc[0], pad: false }); world.platform(61, WALL, (Z0 + Z1) / 2, 2, 124, { h: WALL, color: wc[0], pad: false });
    world.platform(0, WALL, Z0 + 1, 124, 2, { h: WALL, color: wc[1], pad: false }); world.platform(0, WALL, Z1 - 1, 124, 2, { h: WALL, color: wc[1], pad: false });
    // the high slide (left side): walk up the ramp, then ride the icy slide down
    const SX = -40, SH = 16;
    world.ramp(SX, -6, 0, -46, SH, 8, { color: '#f2a65a', padColor: '#ffe3b8' });
    world.platform(SX, SH, -52, 12, 12, { h: 3, color: '#f2a65a', padColor: '#ffe3b8' });
    world.ramp(SX, -58, SH, -100, 0, 8, { conv: [0, -14], ice: true, color: '#5bc0eb', padColor: '#ffffff' });
    info.slide = { x: SX, top: SH, zTop: -58, zEnd: -100 };
    // four bungee pads on the right side
    info.pads = [[22, -28], [46, -28], [22, -88], [46, -88]];
    for (const [x, z] of info.pads) world.bungee(x, z, 0, 5.5, 30, 15);
    info.finishZ = -99999; info.finishY = 99999; info.finishPlat = { far: Z1 };
  } else if (idx === 6) { // ------------------------------------------ JUNGLE HUNT (co-op gun map: beasts + machines)
    buildHunt(world, th, info, seed);
    info.finishZ = -99999; info.finishY = 99999; info.finishPlat = { far: huntLayout().endZ };
  } else if (idx === 2) { // ------------------------------------------ JUNGLE QUEST (road of random mazes, team circles, beasts, dragon)
    buildQuest(world, th, info, seed);
    info.finishZ = -99999; info.finishY = 99999; info.finishPlat = { far: questLayout().dr.endZ };
  } else { // ------------------------------------------------------ JUNGLE (free roam: animals, a dinosaur hill, no race)
    buildJungle(world, th, info);
    info.finishZ = -99999; info.finishY = 99999; info.finishPlat = { far: -230 }; // free roam: there is no finish line
  }

  world.finalize();
  const fp = info.finishPlat;
  info.length = -info.finishZ;
  info.checkpoints = world.checkpoints;
  info.endZ = fp.far;
  return { world, info };
}
