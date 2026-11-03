// QUICK SWITCHES on the title screen (iPhone style). Saved on the device.
const KEY = 'pgta_opts', DEF = { wanted: true, highJump: false, invincible: false, ammo: false, autoAim: true, diff: 'medium', tips: true, punjabi: true, time: 'auto', weather: 'auto', haze: '', sx: 1, sy: 0.6, xhSize: 100, xhColor: '#ffffff' };
export const OPT = Object.assign({}, DEF);
try { Object.assign(OPT, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch { /* private mode: defaults */ }
OPT.highJump = false; OPT.invincible = false; OPT.ammo = false;   // v371: the cheat switches are gone from Settings: any saved ON value is switched off so nothing stays on by itself
export function saveOpts() { try { localStorage.setItem(KEY, JSON.stringify(OPT)); } catch { /* noop */ } }
