// v220 P1: ONE preload step. Everything the match needs is fetched and decoded on the loading screen (a longer wait before the game, no loading while playing).
import { track } from './loading.js';
import { preloadGuns } from './weaponmodels.js';
import { preloadActors, HERO_GLB, JANG_GLB } from './glbactor.js';
import { bankReady } from './audio.js';
const done = {};
export function preloadAssets(kind) {   // kind: 'jang' | 'gta'
  if (done[kind]) return done[kind];
  const list = kind === 'jang' ? [...JANG_GLB, HERO_GLB[2]] : HERO_GLB;   // the soldiers of Jang (+ the army soldier) / the five heroes of the city
  return done[kind] = Promise.all([preloadGuns(), preloadActors(list), track(bankReady(25000), 'SOUNDS')]).catch((e) => { console.warn('preload', e); });
}
