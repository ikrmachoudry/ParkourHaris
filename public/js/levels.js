// The four levels. Everything is built from a small "kit" of sections so each level stays readable.
import * as THREE from 'three';
import { World } from './world.js';
import { flagBoard, textBoard } from './flags.js';

export const THEMES = {
  candy: {
    plat: ['#ff7ab8', '#ffb347', '#5ad6c4', '#a78bfa', '#ffd84d'], pad: '#fff6fc', icePad: '#e8fbff',
    hazard: '#ff3b6b', hazard2: '#ffffff', hub: '#6b4de6', accent: '#ffdc3a', convBase: '#7a56e8', belt: '#ffe8f4',
  },
  canyon: {
    plat: ['#e0793a', '#f2b05e', '#c4503d', '#b8452f', '#f5c77e'], pad: '#ffe6c2', icePad: '#fff',
    hazard: '#4b2a9e', hazard2: '#ffd23f', hub: '#4a2a1c', accent: '#ffd23f', convBase: '#5a2d1e', belt: '#ffb35e',
  },
  frost: {
    plat: ['#d6efff', '#9fd6ff', '#bfe9ff', '#8ec5f5', '#f4fbff'], pad: '#ffffff', icePad: '#f4fcff',
    hazard: '#ff4d6d', hazard2: '#ffffff', hub: '#2f5d9e', accent: '#ff8a5b', convBase: '#3a6db0', belt: '#cfe9ff',
  },
  fair: {
    plat: ['#ff5d73', '#ffd23f', '#3ec6e0', '#8bd450', '#ff9f43'], pad: '#fff7e0', icePad: '#fff', edgeGlow: null,
    hazard: '#ff2d55', hazard2: '#fff6d6', hub: '#5b2a86', accent: '#ffd23f', convBase: '#7a2d9e', belt: '#ffe9a8',
  },
  fun: {
    plat: ['#ff6b9d', '#ffd23f', '#4cc9f0', '#80ed99', '#ff9f1c'], pad: '#ffffff', icePad: '#ffffff', edgeGlow: null,
    hazard: '#ff3d68', hazard2: '#fff7d6', hub: '#6a3fa0', accent: '#ffd23f', convBase: '#7a2d9e', belt: '#ffe9a8',
  },
  neon: {
    plat: ['#2a1d6e', '#3a1785', '#1f2f7a', '#4c1a7c', '#2f2273'], pad: '#4a36b0', icePad: '#4a36b0', edgeGlow: '#22f2ff',
    hazard: '#ff2bd6', hazard2: '#22f2ff', hub: '#0e0a2e', accent: '#7cff3d', convBase: '#18104a', belt: '#3a2a9a',
  },
};
const KEYS = ['candy', 'canyon', 'frost', 'neon', 'fair', 'fun'];

const sstep = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

export function buildLevel(idx, headless = false, arrow = null) {
  const key = KEYS[idx], th = THEMES[key];
  const world = new World(th, headless);
  world.arrowTexture = arrow;
  world.key = key; world.waterY = idx === 5 ? -40 : -5.5; world.killY = idx === 5 ? -60 : -9.5;
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

  const start = () => { c.z = 6; c.y = 0; const p = plat(18, 22); info.startArch = p.near - 8; return p; };
  function stones(n, size, gap, spread, o = {}) {
    let p;
    for (let i = 0; i < n; i++) p = plat(size, size, { gap, x: Math.sin(i * 2.1 + 0.6) * spread, ...o });
    return p;
  }
  function ramp(len, dy, w = 12, o = {}) {
    const r = world.ramp(0, c.z, c.y, c.z - len, c.y + dy, w, o);
    c.z -= len; c.y += dy; return r;
  }
  function moversX(gapLen, count, w, d, amp, period) {
    const sp = gapLen / (count + 1);
    for (let i = 0; i < count; i++) {
      const z = c.z - sp * (i + 1), ph = i * Math.PI;
      world.mover(0, c.y, z, w, d, (t) => [amp * Math.sin(t * 2 * Math.PI / period + ph), 0, 0]);
    }
    c.z -= gapLen;
  }
  function elevators(gapLen, count, w, d, rise, period) {
    const sp = gapLen / (count + 1);
    for (let i = 0; i < count; i++) {
      const z = c.z - sp * (i + 1), ph = i * Math.PI * 0.9;
      world.mover(0, c.y, z, w, d, (t) => [0, rise * (0.5 - 0.5 * Math.cos(t * 2 * Math.PI / period + ph)), 0], { stripes: true });
    }
    c.z -= gapLen;
  }
  function bouncePads(n, spacing, power) {
    for (let i = 0; i < n; i++) {
      const z = c.z - 4.5 - i * spacing;
      world.disc((i % 2 ? 2 : -2), c.y, z, 2.5, { bounce: power, color: i % 2 ? th.hazard : th.accent });
    }
    c.z -= 9 + (n - 1) * spacing;
  }
  function discs(n, r, omegas, edge, withBar) {
    for (let i = 0; i < n; i++) {
      const cz = c.z - edge - r;
      world.disc(0, c.y, cz, r, { omega: omegas[i % omegas.length], phase: i * 1.3 });
      if (withBar) world.bar(0, c.y + 0.12, cz, r * 1.9, { omega: -withBar * (i % 2 ? -1 : 1), h: 1.0, w: 1.0, phase: i });
      c.z = cz - r;
    }
  }
  function liftGates(rows, w, spacing, gap = 0) {
    const p = plat(w, rows * spacing + 8, { gap });
    for (let r = 0; r < rows; r++) {
      const z = p.near - 7 - r * spacing, n = 3, dw = w / n;
      for (let k = 0; k < n; k++) {
        const ph = r * 1.7 + k * 2.1, per = 3.4 + (k % 2) * 0.6;
        world.mover(p.x - w / 2 + dw * (k + 0.5), p.top + 3.4, z, dw - 0.08, 0.9,
          (t) => [0, 2.9 * sstep(0.35, 0.62, 0.5 + 0.5 * Math.sin(t * 2 * Math.PI / per + ph)), 0], { h: 3.4, stripes: true, pad: false, color: th.hazard2 });
      }
    }
    return p;
  }
  function hammerHall(w, d, count, L, spacing, gap = 0, omega = 1.5) {
    const p = plat(w, d, { gap });
    for (let i = 0; i < count; i++) {
      world.hammer(p.x, p.top + L + 1.45, p.near - 7 - i * spacing, L, { amp: 1.2, omega: omega + 0.08 * i, phase: i * 1.9, span: w / 2 + 0.8, baseY: p.top, r: 1.3 });
    }
    return p;
  }
  function pistons(w, d, rows, gap = 0) {
    const p = plat(w, d, { gap });
    const half = w / 2;
    for (let r = 0; r < rows; r++) {
      const z = p.near - 7 - r * ((d - 12) / Math.max(1, rows - 1) || 8);
      const pw = 5.5, A = half - pw / 2, per = 3.2 + (r % 2) * 0.5;
      world.mover(p.x - half + pw / 2, p.top + 2.6, z, pw, 1.1, (t) => [A * (0.5 - 0.5 * Math.cos(t * 2 * Math.PI / per + r)) * 2 * (r % 2 ? 1 : 1), 0, 0], { h: 2.6, stripes: true, pad: false, color: th.hazard2 });
      world.mover(p.x + half - pw / 2, p.top + 2.6, z - 3.2, pw, 1.1, (t) => [-A * (0.5 - 0.5 * Math.cos(t * 2 * Math.PI / (per + 0.4) + r + 1)) * 2, 0, 0], { h: 2.6, stripes: true, pad: false, color: th.hazard2 });
    }
    return p;
  }
  function tiles(rows, cols, size, edge = 2.2, gapZ = 1.8) {
    for (let r = 0; r < rows; r++) {
      const z = c.z - edge - size / 2 - r * (size + gapZ);
      for (let k = 0; k < cols; k++) {
        const x = (k - (cols - 1) / 2) * (size + 1.4);
        world.platform(x, c.y, z, size, size, { color: th.plat[(r + k) % th.plat.length] }); // solid stepping tiles (the old vanishing tiles were too hard)
      }
    }
    c.z -= edge + rows * size + (rows - 1) * gapZ;
  }
  function rampBalls(len, dy, w, speed, period, r) {
    const rp = ramp(len, dy, w);
    const yAt = (z) => rp.yN + (rp.yF - rp.yN) * ((rp.zN - z) / (rp.zN - rp.zF));
    const lanes = [-w * 0.32, 0, w * 0.32];
    lanes.forEach((x, i) => world.balls(x, rp.zF, rp.zN - 2, yAt, r, speed, period, [i * period / 3], {}));
    return rp;
  }
  function seesaw(w, L, end, period, phase, gap = 1.4) {
    const near = c.z - gap, cz = near - L / 2;
    const r = world.seesaw(0, c.y, cz, w, L, end, period, phase);
    c.z = near - L;
    return r;
  }
  // grid of square floor cells; '#' = floor, '.' = hole (pitfall: fall in and you restart at the checkpoint)
  function pitfield(rows, cell, gap = 0) {
    c.z -= gap;
    rows.forEach((row, r) => {
      const cz = c.z - cell / 2 - r * cell;
      for (let k = 0; k < row.length; k++) {
        if (row[k] !== '#') continue;
        world.platform((k - (row.length - 1) / 2) * cell, c.y, cz, cell, cell, { color: th.plat[(r + k) % th.plat.length], pad: true });
      }
    });
    c.z -= rows.length * cell;
  }
  function bungeeGap(gapLen, discFrom, depth, power) {
    world.bungee(0, c.z - discFrom, c.y - depth, 5.5, power, c.y + 15);
    c.z -= gapLen;
  }
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

  // ------------------------------------------------------------ the levels
  if (idx === 0) { // ---------------------------------------------- CANDY MEADOW
    start();
    stones(5, 6, 3, 3.2);
    let p = plat(16, 10, { gap: 3 }); cp(p, 3);
    p = plat(18, 34, { gap: 2.5 });
    world.bar(p.x, p.top, p.near - 10, 18, { omega: 1.3, h: 1.0, w: 1.1 });
    world.bar(p.x, p.top, p.near - 24, 18, { omega: -1.6, h: 1.0, w: 1.1, phase: 1 });
    cp(p, 3.5);
    ramp(14, 3, 12); p = plat(14, 10); cp(p, 3);
    moversX(20, 2, 6.2, 6.2, 5, 5.2);
    p = plat(14, 10); cp(p, 3);
    bouncePads(3, 9, 16.5);
    p = plat(14, 10); cp(p, 3);
    discs(3, 5, [0.9, -1.0, 1.1], 2.6);
    p = plat(16, 10, { gap: 2.6 }); cp(p, 3);
    p = liftGates(3, 18, 11, 1);
    ramp(16, -3, 12);
    finish();
  } else if (idx === 1) { // ---------------------------------------- SUNSET CANYON (lava)
    start();
    stones(3, 7, 3, 2.6);
    let p = plat(18, 10, { gap: 3 }); cp(p, 3);
    p = hammerHall(18, 36, 3, 8, 11, 2.5, 1.5);
    p = plat(14, 8, { gap: 3 }); cp(p, 3);
    p = world.conveyor(0, c.y, c.z - 15, 14, 30, +5.0);
    world.bar(0, c.y, c.z - 10, 14, { omega: 1.5, h: 1.0 });
    world.bar(0, c.y, c.z - 23, 14, { omega: -1.8, h: 1.0, phase: 2 });
    c.z -= 30;
    p = plat(14, 8); cp(p, 3);
    tiles(6, 3, 4.6);
    p = plat(14, 8, { gap: 2.2 }); cp(p, 3);
    rampBalls(40, 5, 14, 11, 6, 1.5);
    p = plat(22, 28);
    world.bar(p.x, p.top, p.near - 14, 22, { omega: 1.05, arms: 2, h: 1.1 });
    cp(p, 3);
    p = pistons(16, 36, 3, 2.5);
    finish();
  } else if (idx === 2) { // ---------------------------------------- FROZEN PEAK (ice)
    start();
    let p = plat(10, 40, { gap: 2.5, ice: true });
    world.bar(p.x, p.top, p.near - 14, 10, { omega: 0.9, h: 0.95, w: 1.0 });
    world.bar(p.x, p.top, p.near - 28, 10, { omega: -1.1, h: 0.95, w: 1.0, phase: 1.5 });
    stones(4, 6.5, 3.2, 2.5, { ice: true });
    p = plat(16, 10, { gap: 3.2, ice: true }); cp(p, 3);
    discs(3, 6, [0.8, -1.0, 1.2], 2.8, 1.9);
    p = plat(18, 10, { gap: 2.8 }); cp(p, 3);
    rampBalls(36, 6, 14, 12, 5.4, 1.4);
    p = plat(16, 10); cp(p, 3);
    elevators(18, 2, 6.2, 6.2, 3.2, 4.4);
    p = plat(14, 10); cp(p, 3);
    world.disc(0, c.y, c.z - 4, 3, { bounce: 22, color: th.hazard });
    p = plat(16, 12, { gap: 11, dy: 4.5 }); cp(p, 3);
    p = plat(12, 24, { ice: true });
    world.bar(p.x, p.top, p.near - 12, 12, { omega: 1.4, h: 1.0 });
    p = plat(22, 32, { ice: true });
    world.bar(p.x, p.top, p.near - 16, 22, { omega: -1.25, arms: 2, h: 1.1 });
    finish();
  } else if (idx === 4) { // --------------------------------------- FUNFAIR FRENZY (rides + pitfalls)
    start();
    let p;
    for (let i = 0; i < 3; i++) { seesaw(9, 12, 1.4, 3.4 + i * 0.5, i * 2.1); p = plat(12, 6, { gap: 1.4 }); }
    cp(p, 3);
    pitfield(['#####', '#.#.#', '##.##', '.#.#.', '.##..', '..#.#', '.###.', '#####'], 3.2, 1.2);
    world.checkpoint(0, c.y, c.z + 1.6, 14);
    ramp(30, 8, 12); p = plat(12, 12); cp(p, 3);
    bungeeGap(20, 9, 9, 32);
    p = plat(16, 14); cp(p, 3);
    ramp(30, -8, 12); p = plat(16, 8); cp(p, 3);
    coaster(44, 12);
    p = plat(16, 10); cp(p, 3);
    tiles(5, 3, 4.6, 2.2, 1.7);
    p = plat(14, 8, { gap: 2.2 }); cp(p, 3);
    discs(3, 6, [0.9, -1.1, 1.0], 2.6, 1.6);
    p = plat(16, 10, { gap: 2.6 }); cp(p, 3);
    p = plat(22, 30);
    world.bar(p.x, p.top, p.near - 15, 22, { omega: 1.2, arms: 2, h: 1.1 });
    finish();
  } else if (idx === 5) { // --------------------------------------- FUN MAP (nothing can kill you - just play, then find the final door)
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

    // ---- F: HIGHWAY + SPEEDWAY: a long road down the whole right side of the park, joined to an oval track.  The 4 cars wait at the CAR STATION near the start.
    const HX = 56, HW = 7, RC = { x: 0, z: -300 }, RR = 29, RSZ = 1.35, RN = 72, SZ0 = -27, SZ1 = -420;
    const SIDES = [1, -1];   // a highway on BOTH sides of the park (x = +56 and x = -56), joined by the oval in the middle
    const segs = [], plazas = [];
    const ringPt = (i) => { const a = (i / RN) * Math.PI * 2; return [RC.x + RR * Math.cos(a), RC.z + RR * RSZ * Math.sin(a)]; };
    for (let i = 0; i < RN; i++) { const [ax, az] = ringPt(i), [bx, bz] = ringPt(i + 1); segs.push({ ax, az, bx, bz, hw: HW, g: 'ring' }); }
    for (const sd of SIDES) {
      plazas.push({ x: HX * sd, z: SZ0, r: 13, g: 'p0' + sd }, { x: HX * sd, z: SZ1, r: 13, g: 'p1' + sd });
      segs.push({ ax: HX * sd, az: SZ0, bx: HX * sd, bz: SZ1, hw: HW, g: 'hwy' + sd });
      segs.push({ ax: HX * sd, az: -300, bx: RC.x + RR * sd, bz: -300, hw: HW, g: 'con' + sd });
    }
    const TR = { segs, plazas, boosts: [{ x: HX, z: -110, r: 4 }, { x: HX, z: -210, r: 4 }, { x: HX, z: -370, r: 4 }, { x: -HX, z: -110, r: 4 }, { x: -HX, z: -210, r: 4 }, { x: -HX, z: -370, r: 4 }, { x: -RR, z: -300, r: 4 }, { x: 0, z: RC.z - RR * RSZ, r: 4 }] };
    info.track = TR;
    info.cars = [[HX - 3.5, -33], [HX + 3.5, -33], [-HX - 3.5, -33], [-HX + 3.5, -33]].map(([x, z], i) => ({ id: i, x, z, yaw: Math.PI }));   // 2 cars at each CAR STATION
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
  } else { // ------------------------------------------------------ NEON SPACE (hard)
    start();
    for (let i = 0; i < 4; i++) plat(2.8, 12, { gap: 3.3, x: i % 2 ? 2.6 : -2.6 });
    let p = plat(18, 12, { gap: 3.3 }); cp(p, 3);
    tiles(6, 3, 4.4, 2.2, 1.9);
    p = plat(16, 10, { gap: 2.2 }); cp(p, 3);
    discs(3, 6.5, [1.0, -1.2, 1.4], 2.8, 1.7);
    p = plat(16, 10, { gap: 2.8 }); cp(p, 3);
    p = world.conveyor(0, c.y, c.z - 17, 14, 34, +6.0);
    world.hammer(0, c.y + 8.5, c.z - 10, 7, { amp: 1.2, omega: 1.7, phase: 0, span: 8, baseY: c.y, r: 1.2 });
    world.hammer(0, c.y + 8.5, c.z - 24, 7, { amp: 1.2, omega: 1.7, phase: 2.2, span: 8, baseY: c.y, r: 1.2 });
    c.z -= 34;
    p = plat(16, 10); cp(p, 3);
    p = pistons(18, 38, 3, 0);
    cp(p, 3);
    moversX(18, 2, 6, 6, 5.5, 4.4);
    p = plat(14, 8); cp(p, 3);
    elevators(20, 2, 6, 6, 3.4, 4.0);
    p = plat(14, 10); cp(p, 3);
    world.disc(0, c.y, c.z - 4, 3, { bounce: 24, color: th.hazard });
    p = plat(16, 12, { gap: 11.5, dy: 5 }); cp(p, 3);
    p = plat(22, 36);
    world.bar(p.x, p.top, p.near - 18, 22, { omega: 1.25, arms: 3, h: 1.15 });
    finish();
  }

  world.finalize();
  const fp = info.finishPlat;
  info.length = -info.finishZ;
  info.checkpoints = world.checkpoints;
  info.endZ = fp.far;
  return { world, info };
}
