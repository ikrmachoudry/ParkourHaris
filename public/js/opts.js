// QUICK SWITCHES on the title screen (iPhone style). Saved on the device.
const KEY = 'pgta_opts', DEF = { wanted: true, highJump: false, invincible: false, ammo: false };
export const OPT = Object.assign({}, DEF);
try { Object.assign(OPT, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch { /* private mode: defaults */ }
export function saveOpts() { try { localStorage.setItem(KEY, JSON.stringify(OPT)); } catch { /* noop */ } }
