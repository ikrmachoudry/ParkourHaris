// v220: asset URLs carry a version (?v=...). The server tells the phone to keep versioned files for a year, so models, sounds and animations are downloaded ONCE
// and every later start reads them from the phone. The version changes only when a file in models/ audio/ anim/ changes.
export const av = (u) => u + (u.indexOf('?') >= 0 ? '&' : '?') + 'v=' + ((typeof window !== 'undefined' && window.__AV) || '0');
