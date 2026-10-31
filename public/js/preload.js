// v220 P1: ONE preload step. Everything the match needs is fetched and decoded on the loading screen (a longer wait before the game, no loading while playing).
import { track } from './loading.js';
import { preloadGuns } from './weaponmodels.js';
import { preloadActors, HERO_GLB, JANG_GLB } from './glbactor.js';
import { bankReady } from './audio.js';
import { preloadProps } from './props.js';
const done = {};
// v265: a bad network must never start the game with the old code-made stand-in characters: show a clear warning, block the game, offer TRY AGAIN
function netFail(why) {
  if (typeof document === 'undefined' || document.getElementById('netfail')) return;
  const el = document.createElement('div'); el.id = 'netfail';
  el.style.cssText = 'position:fixed;inset:0;z-index:100000;background:rgba(5,8,14,.96);color:#fff;display:flex;align-items:center;justify-content:center;text-align:center;font:600 18px/1.4 system-ui,Arial,sans-serif;padding:24px';
  el.innerHTML = '<div style="max-width:460px"><div style="font-size:44px">\u26A0\uFE0F</div><div style="font-size:24px;font-weight:800;margin:8px 0;color:#ffd23f">CHECK YOUR NETWORK</div><div style="opacity:.9">The game files could not be downloaded' + (why ? ' (' + String(why).replace(/[<>&]/g, '').slice(0, 80) + ')' : '') + '. The game will NOT start until your internet works, so you never get broken placeholder characters.</div><button id="netfail-btn" style="margin-top:18px;padding:12px 26px;font:800 18px system-ui;border:0;border-radius:8px;background:#ffd23f;color:#111;cursor:pointer">TRY AGAIN</button></div>';
  document.body.appendChild(el); const b = el.querySelector('#netfail-btn'); b.onclick = () => location.reload(); b.ontouchend = (e) => { e.preventDefault(); location.reload(); };
}
export function preloadAssets(kind) {   // kind: 'jang' | 'gta'
  if (done[kind]) return done[kind];
  if (typeof navigator !== 'undefined' && navigator.onLine === false) netFail('you are offline');
  const list = kind === 'jang' ? [...JANG_GLB, HERO_GLB[2], 'models/bag.glb'] : [...HERO_GLB, 'models/bag.glb'];   // the soldiers of Jang (+ the army soldier) / the five heroes of the city
  return done[kind] = Promise.all([preloadGuns(), preloadActors(list), kind === 'jang' ? preloadProps() : null, track(bankReady(25000), 'SOUNDS')]).catch((e) => { console.warn('preload', e); netFail(e && e.message || 'network error'); });
}
