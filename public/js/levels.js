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
