// The only level: Punjabi GTA (an open city). buildLevel(0) builds it; the layout itself lives in gta.js / gtaworld.js.
import { World } from './world.js';
import { buildGta } from './gtaworld.js';

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
export function buildEmptyLevel() {
  const th = THEMES.gta, world = new World(th, false);
  world.key = 'gta'; world.waterY = -40; world.killY = -60; world.terrain = () => 0; world.finalize();
  return { world, info: { key: 'gta', spawn: { x: 0, y: 0, z: 1.5 }, signs: [], pads: [], cars: [], track: { terrain: () => 0 }, finishZ: -99999, length: 99999, checkpoints: [], endZ: -230, finishPlat: { far: -230 } } };
}
