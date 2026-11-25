/* v633 WHICH JANG MAP IS LOADED. The whole map (terrain, roads, buildings, loot, nav grid) is built once when the page loads, so the choice is made BEFORE that: the Jang menu stores 'gojra' in localStorage and reloads the page. Node (the server, the tests) reads the PH_MAP environment variable. Anything unknown = the default map (nothing else in the game changes). */
let id = 'default';
try {
  const inNode = typeof window === 'undefined' && typeof process !== 'undefined' && !!(process.versions && process.versions.node);   // the server and the tests: never touch web storage
  if (inNode) id = (process.env && process.env.PH_MAP) || 'default';
  else if (typeof localStorage !== 'undefined') {
    const q = typeof location !== 'undefined' ? new URLSearchParams(location.search).get('map') : null;   // ?map=gojra / ?map=default also works (for testing)
    id = q || localStorage.getItem('ph_map') || 'default';
  }
} catch (e) { /* private mode: default map */ }
if (id !== 'gojra') id = 'default';
export const MAPID = id;
export const GOJRA = id === 'gojra';
export const MAPS = [{ id: 'default', name: 'DEFAULT MAP' }, { id: 'gojra', name: 'GOJRA MAP' }];
export function setMap(next) { try { localStorage.setItem('ph_map', next === 'gojra' ? 'gojra' : 'default'); } catch (e) { /* noop */ } }
