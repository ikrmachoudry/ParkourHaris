// JUNGLE map: a big grassy park with trees, grass-covered walls (with AKRMA x2 + HARIS x2 painted on them), bounce mushrooms and a hill.
// The animals live in animalsys.js / jlayout.js; this file only builds the static world.
import * as THREE from 'three';
import { textBoard } from './flags.js';
import { J, HILL, jungleLayout, inHill } from './jlayout.js';

export const STAKES = [[-7.5, 3.5], [7.5, 3.5], [0, -8.5]]; // wooden stakes around the dinosaur (offsets from the summit centre)
const URDU = 'عکرمہ';                // the name in Urdu/Arabic script

function rng(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

export function buildJungle(world, th, info) {
  const L = jungleLayout(), W = J.HX, ZS = J.ZS, ZN = J.ZN, LEN = ZS - ZN, vis = !world.headless;
  const R = rng(9137), pick = (a) => a[Math.floor(R() * a.length)];
  const main = world.main;

  info.startArch = 99; info.jungle = true;
  info.spawn = { x: 0, y: 0, z: 1.5 };
  world.checkpoints.push({ x: 0, y: 0, z: 6, w: 14, spawn: [0, 0, 3] });

  // ---- floor + tall grassy walls (nothing can be fallen off)
  world.platform(0, 0, (ZS + ZN) / 2, W * 2 + 4, LEN + 4, { h: 2, color: '#5cbf4a', pad: false });
  const greens = ['#2f8a3c', '#3fa24a', '#267a34', '#4bb35a'];
  for (let z = ZS + 2, k = 0; z > ZN - 4; z -= 14, k++) for (const sx of [-1, 1]) world.platform(sx * (W + 1), 26, z - 7, 2, 14, { h: 26, color: greens[(k + (sx > 0 ? 2 : 0)) % 4], pad: false });
  world.platform(0, 26, ZS + 1, W * 2 + 4, 2, { h: 26, color: greens[1], pad: false });
  world.platform(0, 26, ZN - 1, W * 2 + 4, 2, { h: 26, color: greens[3], pad: false });

  // ---- the hill (3 stepped tiers with ramps) - the dinosaur waits on top
  const HX = HILL.x, HZ = HILL.z, earth = ['#8a6a47', '#7a5a3a', '#6e5236'], gp = '#63c24c';
  world.platform(HX, 5, HZ - 14, 32, 48, { h: 5, color: earth[0], padColor: gp });
  world.platform(HX, 10, HZ - 37, 24, 26, { h: 10, color: earth[1], padColor: gp });
  world.platform(HX, 15, HZ - 55, 18, 18, { h: 15, color: earth[2], padColor: gp });
  world.ramp(HX - 8, HZ + 30, 0, HZ + 10, 5, 9, { color: '#9a7a52', padColor: '#7bd35c' });
  world.ramp(HX + 8, HZ - 4, 5, HZ - 24, 10, 9, { color: '#9a7a52', padColor: '#7bd35c' });
  world.ramp(HX - 6, HZ - 30, 10, HZ - 46, 15, 9, { color: '#9a7a52', padColor: '#7bd35c' });

  // ---- tree trunks are solid
  for (const t of L.trees) world.addSolid(t.x - 0.85 * t.s, 0, t.z - 0.85 * t.s, t.x + 0.85 * t.s, 7 * t.s, t.z + 0.85 * t.s);

  // ---- bouncy mushrooms (fun!) in free spots
  const free = (x, z, pad = 4) => !(Math.abs(x) > W - 6 || z > ZS - 6 || z < ZN + 6 || inHill(x, z, 6) || Math.hypot(x, z) < 11 || L.trees.some((t) => Math.hypot(t.x - x, t.z - z) < pad + t.r));
  const spots = (n, pad, tries = 800) => { const o = []; for (let i = 0; i < tries && o.length < n; i++) { const x = (R() - 0.5) * 2 * (W - 8), z = ZS - 8 - R() * (LEN - 16); if (free(x, z, pad) && !o.some((p) => Math.hypot(p[0] - x, p[1] - z) < pad * 1.6)) o.push([x, z]); } return o; };
  const shrooms = spots(7, 5);
  shrooms.forEach(([x, z], i) => world.disc(x, 0, z, 2.8, { bounce: 21 + (i % 3) * 2, color: pick(['#ff5d73', '#ff8a3d', '#ffd23f', '#ff6bd0']) }));
  info.shrooms = shrooms;

  if (!vis) return;

  // ================================================================ visuals
  const sph = (r, w = 8, h = 6) => new THREE.SphereGeometry(r, w, h);
  const cyl = (rt, rb, h, s = 8) => new THREE.CylinderGeometry(rt, rb, h, s);
  const cone = (r, h, s = 8) => new THREE.ConeGeometry(r, h, s);
  const leafCols = ['#2e9b3f', '#3fb14c', '#58c45a', '#27863a', '#7ccf5a'];

  // leafy bumps covering every wall (grass-covered look)
  const leaf = sph(1, 5, 4);
  const clump = (x, y, z, ew) => main.add(leaf, x, y, z, pick(leafCols), R() * 3, R() * 3, 0, ew ? 0.9 + R() * 0.6 : 2.0 + R() * 1.5, 1.4 + R() * 1.0, ew ? 2.0 + R() * 1.5 : 0.9 + R() * 0.6);
  for (let y = 2.2; y < 26; y += 5.4) {
    for (let z = ZS - 1; z > ZN + 1; z -= 4.2) { clump(-W + 0.1, y + R() * 1.6, z + R(), true); clump(W - 0.1, y + R() * 1.6, z + R(), true); }
    for (let x = -W + 4; x < W - 3; x += 4.2) { clump(x + R(), y + R() * 1.6, ZN + 0.1, false); clump(x + R(), y + R() * 1.6, ZS - 0.1, false); }
  }
  // grass lip along the top of the walls
  for (let z = ZS; z > ZN; z -= 3.4) { main.add(cone(1.1, 2.4, 5), -W, 26.6, z, '#58c45a'); main.add(cone(1.1, 2.4, 5), W, 26.6, z, '#58c45a'); }
  for (let x = -W; x < W; x += 3.4) { main.add(cone(1.1, 2.4, 5), x, 26.6, ZN, '#58c45a'); main.add(cone(1.1, 2.4, 5), x, 26.6, ZS, '#58c45a'); }

  // ---- names painted on the grassy walls: AKRMA (Urdu/Arabic script) twice + HARIS twice, on random walls at random positions
  {
    const rr = rng(Math.floor(Date.now() / 1000) % 97 + 1); // different arrangement each time the map is loaded (but fixed within a round for one player)
    const walls = [
      { rot: Math.PI / 2, at: (t) => [-W + 2.2, ZS - 32 - t * (LEN - 64)] },
      { rot: -Math.PI / 2, at: (t) => [W - 2.2, ZS - 32 - t * (LEN - 64)] },
      { rot: 0, at: (t) => [-60 + t * 120, ZN + 2.2] },
      { rot: Math.PI, at: (t) => [-60 + t * 120, ZS - 2.2] },
    ];
    for (let i = walls.length - 1; i > 0; i--) { const j = Math.floor(rr() * (i + 1)); [walls[i], walls[j]] = [walls[j], walls[i]]; }
    const kinds = ['u', 'h', 'u', 'h'];
    walls.forEach((w, i) => {
      const u = kinds[i] === 'u';
      const b = u ? textBoard(URDU, 30, 15, { urdu: true, bg: ['#0b6b3a', '#01411c'], fg: '#ffffff', stroke: '#00230f', border: '#ffd23f', frame: '#2f6b2a' })
        : textBoard('HARIS', 34, 13, { bg: ['#ff8a1c', '#c9400b'], fg: '#ffffff', stroke: '#5a1a00', border: '#ffe27a', frame: '#2f6b2a' });
      const [x, z] = w.at(0.12 + rr() * 0.76);
      b.position.set(x, 10.5 + rr() * 5, z); b.rotation.y = w.rot; world.group.add(b);
    });
  }

  // ---- trees
  for (const t of L.trees) {
    const s = t.s, h = 7 * s;
    main.add(cyl(0.5 * s, 0.8 * s, h, 7), t.x, h / 2, t.z, pick(['#7a4b27', '#6b4423', '#8a5a30']));
    for (let r = 0; r < 4; r++) main.add(cone(0.35 * s, 1.3 * s, 5), t.x + Math.cos(r * 1.6) * 0.8 * s, 0.5, t.z + Math.sin(r * 1.6) * 0.8 * s, '#6b4423', 0, 0, Math.cos(r) * 0.8); // roots
    if (t.k === 0) { // round jungle tree
      main.add(sph(3.6 * s), t.x, h + 2.2 * s, t.z, pick(leafCols)); main.add(sph(2.6 * s), t.x + 2.4 * s, h + 0.6 * s, t.z + 0.6 * s, pick(leafCols)); main.add(sph(2.5 * s), t.x - 2.2 * s, h + 0.9 * s, t.z - 0.8 * s, pick(leafCols));
    } else if (t.k === 1) { // pine
      for (let i = 0; i < 4; i++) main.add(cone((3.6 - i * 0.7) * s, 3.4 * s, 8), t.x, h * 0.62 + i * 2.1 * s, t.z, i % 2 ? '#2f8f46' : '#27803c');
    } else { // palm-ish: tall with a crown of leaves
      main.add(cyl(0.3 * s, 0.5 * s, 3.2 * s, 6), t.x, h + 1.4 * s, t.z, '#8a5a30');
      for (let i = 0; i < 7; i++) { const a = i * 0.9; main.add(cone(0.9 * s, 5.2 * s, 4), t.x + Math.cos(a) * 2.1 * s, h + 3.4 * s, t.z + Math.sin(a) * 2.1 * s, pick(leafCols), Math.sin(a) * 1.25, 0, -Math.cos(a) * 1.25 + 0 * a); }
      main.add(sph(0.55 * s, 6, 5), t.x + 0.5 * s, h + 2.9 * s, t.z, '#7a4b27'); main.add(sph(0.55 * s, 6, 5), t.x - 0.4 * s, h + 2.8 * s, t.z + 0.4 * s, '#7a4b27');
    }
  }

  // ---- bushes, flowers, rocks, grass tufts, mushrooms
  for (const [x, z] of spots(60, 1.6, 2500)) { const s = 0.8 + R() * 0.9; main.add(sph(1.2 * s, 7, 5), x, 0.7 * s, z, pick(leafCols), 0, 0, 0, 1.3, 0.8, 1.1); main.add(sph(0.9 * s, 7, 5), x + 1.0 * s, 0.6 * s, z + 0.5 * s, pick(leafCols)); }
  for (const [x, z] of spots(240, 0.7, 3000)) { main.add(cyl(0.05, 0.05, 0.7, 4), x, 0.35, z, '#3a8f3a'); main.add(sph(0.26, 6, 4), x, 0.78, z, pick(['#ff5fa8', '#ffd23f', '#ffffff', '#ff7a1a', '#b58cff'])); }
  for (const [x, z] of spots(34, 2.2, 1500)) { const s = 0.8 + R() * 1.5; main.add(sph(1, 6, 5), x, 0.4 * s, z, pick(['#8e9097', '#7c7f87', '#a5a7ad']), R(), R(), 0, 1.4 * s, 0.8 * s, 1.0 * s); }
  for (const [x, z] of spots(14, 2.4, 1500)) { main.add(cyl(0.25, 0.3, 1.0, 6), x, 0.5, z, '#fff3e0'); main.add(sph(0.9, 8, 5), x, 1.1, z, '#e8403d', 0, 0, 0, 1, 0.55, 1); for (let i = 0; i < 4; i++) main.add(sph(0.14, 5, 4), x + Math.cos(i * 1.6) * 0.45, 1.45, z + Math.sin(i * 1.6) * 0.45, '#ffffff'); }
  for (let i = 0; i < 620; i++) { const x = (R() - 0.5) * 2 * (W - 2), z = ZS - 2 - R() * (LEN - 4); if (inHill(x, z, 0)) continue; main.add(cone(0.16, 0.7 + R() * 0.5, 4), x, 0.35, z, pick(['#3da043', '#56b947', '#2f8a3c']), 0, R() * 3, (R() - 0.5) * 0.5); }

  // ---- wooden stakes + hill decoration
  const sx0 = HILL.sx, sz0 = HILL.sz, top = HILL.summitY;
  for (const [dx, dz] of STAKES) { main.add(cyl(0.28, 0.34, 2.4, 7), sx0 + dx, top + 1.2, sz0 + dz, '#6b4423'); main.add(sph(0.32, 6, 5), sx0 + dx, top + 2.45, sz0 + dz, '#8a5a30'); }
  for (let i = 0; i < 16; i++) { const a = R() * 6.28, rr2 = 8 + R() * 5; main.add(sph(1, 6, 5), HX + Math.cos(a) * rr2 * 1.6, 5.5, HZ - 14 + Math.sin(a) * rr2 * 2.4, pick(['#8e9097', '#7c7f87']), R(), R(), 0, 1.3, 0.9, 1.1); }
  for (let i = 0; i < 26; i++) { const a = R() * 6.28; main.add(cone(0.7, 1.8, 5), HX + Math.cos(a) * 15, 5.9 + (R() < 0.3 ? 5 : 0), HZ - 14 + (R() - 0.5) * 40, pick(leafCols)); }

  // ---- signs
  const sign = (txt, x, z, ry, w = 16, h = 7, bg = ['#7a4a1e', '#5a3412']) => {
    const b = textBoard(txt, w, h, { bg, fg: '#fff3c4', stroke: '#2a1204', border: '#ffd23f', frame: '#3b2410' }); b.position.set(x, 3.6 + h / 2, z); b.rotation.y = ry; world.group.add(b);
    main.add(cyl(0.3, 0.3, 4 + h / 2, 6), x - w / 2 + 1, (4 + h / 2) / 2, z, '#5a3412'); main.add(cyl(0.3, 0.3, 4 + h / 2, 6), x + w / 2 - 1, (4 + h / 2) / 2, z, '#5a3412');
  };
  sign('WELCOME TO THE JUNGLE', 0, -14, 0, 20, 5.5);
  sign('BEAT ANIMALS WITH THE BAT = NEW PET!', 0, -22, 0, 24, 5);
  sign('DINO HILL  >>>', HX - 8, HZ + 44, 0, 16, 5.5);
}
