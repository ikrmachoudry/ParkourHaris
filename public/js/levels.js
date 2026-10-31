// The only level: Punjabi GTA (an open city). buildLevel(0) builds it; the layout itself lives in gta.js / gtaworld.js.
import { World } from './world.js';
import { buildGta } from './gtaworld.js';
import { layout as cmbLayout, CMB, cmbInside, cmbG as cmbH, ROADS } from './combat.js';
import { jangJeeps, garageCars } from './jangcars.js';

export const THEMES = {
  gta: {
    plat: ['#cfd8e3', '#e8c9a0', '#a8c5e8', '#f1e0a6', '#b9d9b0'], pad: '#ffffff', icePad: '#ffffff', edgeGlow: null,
    hazard: '#ff4d6d', hazard2: '#fff7d6', hub: '#5a6270', accent: '#ffd23f', convBase: '#4a3a5e', belt: '#ffe9a8',
  },
};

export function buildLevel(idx, headless = false, arrow = null, seed = 1) {
  const key = 'gta', th = THEMES[key];
  const world = new World(th, headless);
  world.arrowTexture = arrow;
  world.key = key; world.waterY = -40; world.killY = -60;
  const info = { key, spawn: { x: 0, y: 0, z: 1.5 }, signs: [], pads: [] };
  buildGta(world, th, info, seed);
  info.finishPlat = { far: -230 };
  world.finalize();
  info.length = -info.finishZ;
  info.checkpoints = world.checkpoints;
  info.endZ = info.finishPlat.far;
  return { world, info };
}

// v197: JANG is separate from the GTA city - it gets this empty World (no buildings, roads, traffic, scenery): flat ground and nothing else, so it loads fast and stays light
export function buildEmptyLevel(seed = 0) {
  const th = THEMES.gta, world = new World(th, false);
  world.key = 'gta'; world.waterY = -40; world.killY = -60;
  // the battle island's ground and every wall / roof / tree is what the player walks on (physics) - without it the player walks on a flat y=0 plane UNDER the hills and sinks through the map
  const T = (x, z) => (cmbInside(x, z) ? cmbH(x - CMB.x, z - CMB.z) : 0); world.terrain = T;
  { const L = cmbLayout(); for (const q of L.solids) { const ws = world.addStatic(CMB.x + q.x0, q.y0, CMB.z + q.z0, CMB.x + q.x1, q.y1, CMB.z + q.z1, { name: q.k === 'tree' || q.k === 'rock' || q.k === 'prop' ? 'prop' : 'building' }); if (q.k === 'shutter') q._ws = ws; } }
  world.finalize();
  return { world, info: { key: 'gta', spawn: { x: CMB.x, y: 0, z: CMB.z }, signs: [], pads: [], cars: [...jangJeeps(3, seed), ...garageCars()], track: { terrain: T, boxes: [], edge: 1900, waterY: -40, plazas: [], segs: ROADS.flatMap((r) => r.pts.slice(0, -1).map((p, i) => ({ ax: CMB.x + p[0], az: CMB.z + p[1], bx: CMB.x + r.pts[i + 1][0], bz: CMB.z + r.pts[i + 1][1], hw: r.w / 2 + 1 }))) }, finishZ: -99999, length: 99999, checkpoints: [], endZ: -230, finishPlat: { far: -230 } } };
}
