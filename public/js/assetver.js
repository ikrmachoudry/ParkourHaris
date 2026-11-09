// v220: asset URLs carry a version (?v=...). The server tells the phone to keep versioned files for a year, so models, sounds and animations are downloaded ONCE
// and every later start reads them from the phone. The version changes only when a file in models/ audio/ anim/ changes.
// v462: Android phones read the lighter copies in models-lite/ (same file names); everything else is unchanged.
const LITE = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent || '') && !/[?&]hd=1/.test(typeof location !== 'undefined' ? location.search : '');
// v474: each file has its own version (window.__AVM maps path -> version); a file not in the map falls back to the global one.
export const av = (u) => { const p = LITE && u.startsWith('models/') ? 'models-lite/' + u.slice(7) : u; const m = typeof window !== 'undefined' && window.__AVM; return p + (u.indexOf('?') >= 0 ? '&' : '?') + 'v=' + ((m && m[p.split('?')[0]]) || (typeof window !== 'undefined' && window.__AV) || '0'); };
