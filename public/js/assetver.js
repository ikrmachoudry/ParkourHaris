// v220: asset URLs carry a version (?v=...). The server tells the phone to keep versioned files for a year, so models, sounds and animations are downloaded ONCE
// and every later start reads them from the phone. The version changes only when a file in models/ audio/ anim/ changes.
// v462: Android phones read the lighter copies in models-lite/ (same file names); everything else is unchanged.
const LITE = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent || '') && !/[?&]hd=1/.test(typeof location !== 'undefined' ? location.search : '');
export const av = (u) => (LITE && u.startsWith('models/') ? 'models-lite/' + u.slice(7) : u) + (u.indexOf('?') >= 0 ? '&' : '?') + 'v=' + ((typeof window !== 'undefined' && window.__AV) || '0');
