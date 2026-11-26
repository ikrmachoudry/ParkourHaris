/* v632 KEY BINDINGS: every keyboard action can be given any key (Settings > CONTROLS > KEYBOARD KEYS).
   How it works: the game code keeps listening for the DEFAULT key of each action (Z = crouch ...). A capture-phase listener on the window sits in front of it: when you press a key that you have assigned to an action, it swallows that key press and sends the game the action's default key instead (a synthetic KeyboardEvent). A default key that you gave away to another action is blocked, so it no longer does the old job.
   Giving a key that another action already uses SWAPS the two (nobody ends up without a key). Keys nobody changed are not touched at all (zero cost, nothing can break).
   Saved in localStorage. Not for touch screens (they use the on-screen buttons). The mouse buttons are not changeable. */
const LS = 'ph_keybinds_v1';
/* id, label, default code, group. The default codes are unique: one key = one action here (the game's other uses of the same key stay with that action). */
export const ACTIONS = [
  ['fwd', 'Move forward', 'KeyW', 'MOVE'], ['back', 'Move back', 'KeyS', 'MOVE'], ['left', 'Move left', 'KeyA', 'MOVE'], ['right', 'Move right', 'KeyD', 'MOVE'],
  ['jump', 'Jump  (handbrake in a vehicle)', 'Space', 'MOVE'], ['sprint', 'Sprint  /  dive in the air', 'ShiftLeft', 'MOVE'],
  ['crouch', 'Crouch', 'KeyZ', 'MOVE'], ['prone', 'Prone (lie down)', 'KeyX', 'MOVE'], ['peekL', 'Peek left', 'KeyQ', 'MOVE'], ['peekR', 'Peek right', 'KeyE', 'MOVE'],
  ['car', 'Get in / out of a vehicle  /  pull up (skydive)', 'KeyC', 'MOVE'], ['jet', 'Jetpack  (fly on / off)', 'KeyJ', 'MOVE'],
  ['reload', 'Reload', 'KeyR', 'FIGHT'], ['punch', 'Punch  /  pick up  /  use', 'KeyF', 'FIGHT'], ['next', 'Next weapon', 'KeyV', 'FIGHT'], ['fmode', 'Fire mode  /  melee swing', 'KeyB', 'FIGHT'],
  ['nade', 'Grenade  (press again to change type)', 'KeyG', 'FIGHT'], ['molo', 'Molotov  /  rifle scope on-off', 'KeyN', 'FIGHT'],
  ['zin', 'Scope zoom in', 'Equal', 'FIGHT'], ['zout', 'Scope zoom out', 'Minus', 'FIGHT'],
  ['s1', 'Weapon slot 1', 'Digit1', 'ITEMS'], ['s2', 'Weapon slot 2', 'Digit2', 'ITEMS'], ['s3', 'Grenade  (smoke if no grenade)', 'Digit3', 'ITEMS'], ['s4', 'Molotov', 'Digit4', 'ITEMS'], ['s5', 'Molotov  (alternate)', 'Digit5', 'ITEMS'],
  ['i6', 'Use first aid kit', 'Digit6', 'ITEMS'], ['i7', 'Use pain pills', 'Digit7', 'ITEMS'], ['i8', 'Use adrenaline', 'Digit8', 'ITEMS'], ['i9', 'Smoke grenade', 'Digit9', 'ITEMS'], ['i0', 'Use scope item', 'Digit0', 'ITEMS'],
  ['bag', 'Backpack', 'KeyI', 'MENUS'], ['map', 'Map  (Tab also opens the backpack in Jang)', 'Tab', 'MENUS'], ['mapm', 'Map  /  sound on-off', 'KeyM', 'MENUS'], ['pause', 'Pause menu  (Esc always works too)', 'KeyP', 'MENUS'],
  ['talk', 'Team microphone  (hold)', 'KeyT', 'MENUS'], ['spk', 'Lights  /  team speaker', 'KeyL', 'MENUS'], ['horn', 'Horn', 'KeyH', 'MENUS'],
].map(([id, label, code, group]) => ({ id, label, code, group }));
const BY = new Map(ACTIONS.map((a) => [a.id, a]));
const RESERVED = /^(Escape|F\d+|Meta.*|ContextMenu|OSLeft|OSRight|PrintScreen|Pause|NumLock|ScrollLock|Insert)$/;
let user = {};                 // action id -> code (only the ones that differ from the default)
const tr = new Map();          // physical code -> default code to send ('' = blocked)
let cap = null;                // {id, btn} while "press a key" is waiting

try { const o = JSON.parse(localStorage.getItem(LS) || '{}'); if (o && typeof o === 'object') for (const k of Object.keys(o)) if (BY.has(k) && typeof o[k] === 'string' && !RESERVED.test(o[k])) user[k] = o[k]; } catch (e) { /* no saved keys */ }
const bound = (id) => user[id] || BY.get(id).code;
export const keyOf = (id) => bound(id);
function fixUnique() {   // a corrupt / hand-edited save could give one key to two actions: keep the first, put the others back to their own default (or drop them)
  const seen = new Set(); for (const a of ACTIONS) { let c = bound(a.id); if (seen.has(c)) { delete user[a.id]; c = a.code; } seen.add(c); }
}
function rebuild() {
  tr.clear(); const set = new Set(); for (const a of ACTIONS) { const b = bound(a.id); set.add(b); if (b !== a.code) tr.set(b, a.code); }
  for (const a of ACTIONS) if (!set.has(a.code)) tr.set(a.code, '');   // a default key that was given away does nothing now
}
function save() { try { if (Object.keys(user).length) localStorage.setItem(LS, JSON.stringify(user)); else localStorage.removeItem(LS); } catch (e) { /* private mode */ } }

export function keyName(code) {
  if (!code) return '-'; let m;
  if ((m = /^Key([A-Z])$/.exec(code))) return m[1]; if ((m = /^Digit(\d)$/.exec(code))) return m[1]; if ((m = /^Numpad(.+)$/.exec(code))) return 'NUM ' + m[1].replace('Add', '+').replace('Subtract', '-').replace('Multiply', '*').replace('Divide', '/').replace('Decimal', '.').toUpperCase();
  const N = { Space: 'SPACE', ShiftLeft: 'L-SHIFT', ShiftRight: 'R-SHIFT', ControlLeft: 'L-CTRL', ControlRight: 'R-CTRL', AltLeft: 'L-ALT', AltRight: 'R-ALT', ArrowUp: '↑', ArrowDown: '↓', ArrowLeft: '←', ArrowRight: '→', Equal: '=', Minus: '-', Tab: 'TAB', Backquote: '`', Backslash: '\\', BracketLeft: '[', BracketRight: ']', Semicolon: ';', Quote: "'", Comma: ',', Period: '.', Slash: '/', Enter: 'ENTER', Backspace: 'BACKSPACE', CapsLock: 'CAPS', Delete: 'DEL', Home: 'HOME', End: 'END', PageUp: 'PGUP', PageDown: 'PGDN' };
  return N[code] || code.toUpperCase();
}
function keyChar(code, e) {   // the e.key the game would have seen for that default code
  let m; if ((m = /^Key([A-Z])$/.exec(code))) return e.shiftKey ? m[1] : m[1].toLowerCase(); if ((m = /^Digit(\d)$/.exec(code))) return m[1];
  return { Space: ' ', ShiftLeft: 'Shift', ShiftRight: 'Shift', ControlLeft: 'Control', ControlRight: 'Control', Equal: '=', Minus: '-' }[code] || code;
}

/* ---------- the interceptor (capture phase, in front of every game listener) ---------- */
function onKey(e) {
  if (e.__phk) return;                                   // our own synthetic event: let the game have it
  if (cap) { e.preventDefault(); e.stopImmediatePropagation(); if (e.type === 'keydown' && !e.repeat) finish(e.code); return; }
  if (!tr.size) return;
  const to = tr.get(e.code); if (to === undefined) return;   // not a changed key: untouched
  const t = e.target; if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return;   // typing a name: letters stay letters
  if (e.metaKey || e.altKey || (e.ctrlKey && e.code.slice(0, 7) !== 'Control')) return;   // browser shortcuts (Ctrl+R ...) stay alone
  e.preventDefault(); e.stopImmediatePropagation();
  if (!to) return;
  try { const ev = new KeyboardEvent(e.type, { code: to, key: keyChar(to, e), repeat: e.repeat, shiftKey: e.shiftKey, ctrlKey: e.ctrlKey, bubbles: true, cancelable: true, composed: true }); ev.__phk = true; (t || window).dispatchEvent(ev); } catch (x) { /* very old browser: the key just does nothing */ }
}
try { addEventListener('keydown', onKey, true); addEventListener('keyup', onKey, true); } catch (e) { /* no window (test tools) */ }

/* ---------- the screen ---------- */
let root = null, msgEl = null;
function say(t) { if (msgEl) msgEl.textContent = t || ''; }
function cancel() { if (!cap) return; cap.btn.classList.remove('wait'); cap = null; paint(); }
function finish(code) {
  const c = cap; if (!c) return; cap.btn.classList.remove('wait'); cap = null;
  if (code === 'Escape') { say('Cancelled'); paint(); return; }
  if (RESERVED.test(code)) { say(keyName(code) + ' can not be used - pick another key'); paint(); return; }
  assign(c.id, code); paint();
}
export function assign(id, code) {
  const a = BY.get(id); if (!a) return; const old = bound(id); if (old === code) { say(''); return; }
  const other = ACTIONS.find((x) => x.id !== id && bound(x.id) === code);
  if (other) { setB(other.id, old); say(keyName(code) + ' was used by "' + other.label.split('  ')[0] + '" - the two swapped keys (it now uses ' + keyName(old) + ')'); } else say(a.label.split('  ')[0] + ' = ' + keyName(code));
  setB(id, code); rebuild(); save(); hint();
}
function setB(id, code) { if (code === BY.get(id).code) delete user[id]; else user[id] = code; }
export function resetAll() { user = {}; rebuild(); save(); say('All keys are back to the normal ones'); paint(); hint(); }
function paint() {
  if (!root) return;
  for (const b of root.querySelectorAll('.kb-key')) { const id = b.dataset.id, c = bound(id); if (cap && cap.id === id) continue; b.textContent = keyName(c); b.classList.toggle('chg', c !== BY.get(id).code); }
}
function hint() {   // the little key line at the bottom of the match screen
  const el = document.getElementById('kb-hint'); if (!el) return; const k = (id) => keyName(bound(id));
  el.innerHTML = '<b>' + k('reload') + '</b> Reload <b>' + k('s1') + '-' + k('s5') + '</b> Weapons <b>' + k('next') + '</b> Next <b>' + k('fmode') + '</b> Fire mode <b>' + k('crouch') + '</b> Crouch <b>' + k('prone') + '</b> Prone <b>' + k('jump') + '</b> Jump <b>' + k('punch') + '</b> Punch <b>RMB</b> Aim <b>Wheel</b> Zoom <b>' + k('map') + '</b> Map <b>' + k('car') + '</b> Car <b>' + k('horn') + '</b> Horn';
}
function build() {
  const host = document.querySelector('#s-settings .ps-pc'); if (!host || root) return;
  if (!document.getElementById('kb-css')) { const s = document.createElement('style'); s.id = 'kb-css'; s.textContent =
    '#kb-root{margin:6px 0 18px}#kb-root .kb-top{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin:6px 0 10px}#kb-root .kb-note{font:600 12px/1.5 system-ui,sans-serif;color:rgba(255,255,255,.7);margin:0 0 8px}' +
    '#kb-root .kb-msg{min-height:18px;font:700 12px system-ui,sans-serif;color:#ffd84f;margin:2px 0 6px}#kb-root .kb-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:2px 22px}@media(max-width:760px){#kb-root .kb-grid{grid-template-columns:1fr}}' +
    '#kb-root .kb-row{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:5px 2px;border-bottom:1px solid rgba(255,255,255,.08);font:700 12px system-ui,sans-serif;color:#fff}#kb-root .kb-row span{flex:1;min-width:0}' +
    '#kb-root .kb-key{min-width:78px;padding:7px 10px;border:1px solid rgba(255,255,255,.35);border-radius:6px;background:rgba(255,255,255,.08);color:#fff;font:800 12px system-ui,sans-serif;letter-spacing:1px;cursor:pointer}' +
    '#kb-root .kb-key.chg{border-color:#ffd84f;color:#ffd84f}#kb-root .kb-key.wait{background:#d93a3a;border-color:#fff;color:#fff}#kb-root .kb-h{grid-column:1/-1;margin:14px 0 2px;font:800 11px system-ui,sans-serif;letter-spacing:3px;color:#ff6a5a}'; document.head.appendChild(s); }
  root = document.createElement('div'); root.id = 'kb-root';
  let h = '<div class="kb-top"><button class="ps-btn" id="kb-reset" type="button">RESET ALL KEYS</button></div><p class="kb-note">Click a key button, then press the key you want. If that key is already used, the two actions swap keys. The yellow ones are changed. Mouse buttons stay the same. Esc always opens the menu.</p><div class="kb-msg" id="kb-msg"></div><div class="kb-grid">', g = '';
  for (const a of ACTIONS) { if (a.group !== g) { g = a.group; h += '<div class="kb-h">' + g + '</div>'; } h += '<div class="kb-row"><span>' + a.label + '</span><button class="kb-key" type="button" data-id="' + a.id + '"></button></div>'; }
  root.innerHTML = h + '</div>';
  const ul = host.querySelector('.ps-keys'); if (ul) ul.replaceWith(root); else host.appendChild(root);
  msgEl = root.querySelector('#kb-msg');
  root.addEventListener('click', (e) => {
    const b = e.target.closest('.kb-key'), r = e.target.closest('#kb-reset');
    if (r) { cancel(); resetAll(); return; }
    if (!b) return; if (cap && cap.btn === b) { cancel(); return; } cancel();
    cap = { id: b.dataset.id, btn: b }; b.classList.add('wait'); b.textContent = 'PRESS A KEY'; say('');
  });
  document.addEventListener('pointerdown', (e) => { if (cap && !(e.target.closest && e.target.closest('.kb-key'))) cancel(); }, true);
  paint();
}
fixUnique(); rebuild();
const go = () => { try { build(); hint(); } catch (e) { /* the keys still work without the screen */ } };
try { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go(); } catch (e) { /* noop */ }
try { window.phKeys = { ACTIONS, assign, resetAll, keyOf, keyName, tr, get user() { return user; } }; } catch (e) { /* noop */ }
