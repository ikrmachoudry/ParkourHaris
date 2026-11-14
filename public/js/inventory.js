// The backpack screen of the match: the hands (1 bat + 2 guns) on the left, the backpack items on the right.
// Tap an item to use it (heal / throw / zoom), tap a gun to hold it, DROP to leave it on the ground. Keyboard: I opens and closes it, 6-0 use items, E swaps a gun on the ground.
import { WEAPONS } from './economy.js';

export const CAP = { med: 4, inject: 4, pills: 6, smoke: 4, molotov: 4, scope: 1, sscope: 1, grenade: 5, vest: 1, helmet: 1 };
const ITEMS = [
  { k: 'med', icon: '✚', name: 'FIRST AID', info: '+50 health, 4 s', key: 'F', col: '#ff5c5c' },
  { k: 'pills', icon: '💊', name: 'PAIN PILLS', info: '+25 health, 3 s', key: 'P', col: '#ffa94d' },
  { k: 'inject', icon: '💉', name: 'ADRENALINE', info: '+20 health, speed boost', key: 'A', col: '#5ec8ff' },
  { k: 'smoke', icon: '☁', name: 'SMOKE BOMB', info: 'throw: cover for 15 s', key: 'S', col: '#cfd6dc' },
  { k: 'molotov', icon: '🔥', name: 'MOLOTOV', info: 'throw: fire on the ground for 8 s', key: 'O', col: '#ff9a3c' },
  { k: 'grenade', icon: '💣', name: 'GRENADE', info: 'hold, then throw', key: 'G', col: '#8dff6b' },
  { k: 'sscope', icon: '🎯', name: 'TELESCOPE', info: 'Kar98 uses it by itself', key: '', col: '#7fe0ff' },
  { k: 'vest', icon: '🛡', name: 'BODY ARMOR', info: 'takes 30% of every hit', key: 'V', col: '#9ad0ff' },
  { k: 'helmet', icon: '⛑', name: 'HELMET', info: 'takes 15% of every hit', key: 'H', col: '#b0b8c0' },
  { k: 'scope', icon: '🔭', name: 'BINOCULARS', info: 'tap to look far, again to put away', key: 'B', col: '#b48cff' },
];
const GUN_NAME = { pistol: 'PISTOL', revolver: 'REVOLVER', smg: 'SMG', m4: 'M4 RIFLE', shotgun: 'SHOTGUN', ak: 'AK-47', ak49: 'AK-49', sniper: 'SNIPER RIFLE' };

const pic = (cs, k, fb) => { const u = cs.icon && cs.icon(k); return u ? '<img alt="" src="' + u + '">' : fb; };
export class Inventory {
  constructor(cs) { this.cs = cs; this.el = null; this.btn = null; this.open = false; }
  isOpen() { return this.open; }
  build() {
    if (this.el) return;
    const el = document.createElement('div'); el.id = 'c-inv'; el.style.display = 'none';
    el.innerHTML = '<div class="iv-box"><div class="iv-h"><b>BACKPACK</b><span class="iv-cap"></span><button type="button" class="iv-x" aria-label="Close">✕</button></div><div class="iv-cols"><div class="iv-col iv-hands"><h4>IN YOUR HANDS</h4><div class="iv-list" data-l="hands"></div></div><div class="iv-col"><h4>ITEMS</h4><div class="iv-list" data-l="items"></div></div></div><div class="iv-hint">TAB = open / close • F first aid • P pain pills • A adrenaline • S smoke • O molotov • G grenade • V armor • H helmet • B binoculars</div></div>';
    el.addEventListener('pointerdown', (e) => { if (e.target === el) { e.preventDefault(); this.toggle(false); } });
    el.querySelector('.iv-x').addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); this.toggle(false); });
    document.body.appendChild(el); this.el = el;
  }
  bag() {   // the round bag button next to the map buttons
    if (this.btn) return;
    const b = document.createElement('button'); b.id = 'c-bag'; b.type = 'button'; b.setAttribute('aria-label', 'Backpack'); b.innerHTML = '🎒';
    b.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); this.toggle(); }); document.body.appendChild(b); this.btn = b;
  }
  showBag(on) { this.bag(); this.btn.style.display = on ? 'flex' : 'none'; if (!on) this.toggle(false); }
  toggle(force) {
    this.build(); const open = force === undefined ? !this.open : !!force; if (open && (!this.cs.active || this.cs.dropping)) return; const was = this.open; this.open = open; this.el.style.display = open ? 'flex' : 'none'; if (was && !open) { document.dispatchEvent(new Event('inv-closed')); swallowTap(); }
    if (open) { try { if (document.pointerLockElement) document.exitPointerLock(); } catch (e) { /* ignore */ } this.render(); this.cs.R.fireHeld = false; }
  }
  render() {
    if (!this.el || !this.open) return; const cs = this.cs, R = cs.R, cb = R.wallet && R.wallet.cb; if (!cb) return;
    const hands = this.el.querySelector('[data-l="hands"]'), items = this.el.querySelector('[data-l="items"]'); hands.innerHTML = ''; items.innerHTML = '';
    const gs = cs.guns(); for (let i = 0; i < 2; i++) {
      const w = gs[i], row = document.createElement('div'); row.className = 'iv-row' + (w ? '' : ' empty') + (w && R.weapon === w ? ' sel' : '');
      if (w) { row.innerHTML = '<i>' + pic(cs, w, '🔫') + '</i><div><b>' + GUN_NAME[w] + '</b><small>' + (cb.mag[w] | 0) + ' / ' + (cb.ammo[w] | 0) + ' ammo</small></div><button type="button" class="iv-drop">DROP</button>'; row.addEventListener('pointerdown', (e) => { e.preventDefault(); if (e.target.classList.contains('iv-drop')) { cs.dropGun(w); return; } R.equip(w); this.render(); }); }
      else row.innerHTML = '<i>🔫</i><div><b>GUN SLOT ' + (i + 1) + '</b><small>empty</small></div>';
      hands.appendChild(row);
    }
    { const row = document.createElement('div'); row.className = 'iv-row' + (!R.weapon ? ' sel' : ''); row.innerHTML = '<i>✊</i><div><b>FISTS</b><small>punch / kick</small></div>'; row.addEventListener('pointerdown', (e) => { e.preventDefault(); R.equip('fist'); this.render(); }); hands.appendChild(row); }
    let used = 0;
    for (const it of ITEMS) {
      const n = cs.count(it.k); used += n; const row = document.createElement('div'); row.className = 'iv-row item' + (n > 0 ? '' : ' empty') + (it.k === 'scope' && R.telescope ? ' sel' : '');
      row.style.setProperty('--c', it.col); row.innerHTML = '<i>' + pic(cs, it.k, it.icon) + '</i><div><b>' + it.name + '</b><small>' + it.info + '</small></div><em>x' + n + (it.key ? '<u>' + it.key + '</u>' : '') + '</em>' + (n > 0 ? '<button type="button" class="iv-drop">DROP</button>' : '');   /* v281: EVERY item can be dropped (one at a time) so a teammate can pick it up */
      row.addEventListener('pointerdown', (e) => { e.preventDefault(); if (e.target.classList && e.target.classList.contains('iv-drop')) { e.stopPropagation(); cs.dropItem(it.k); return; } cs.useItem(it.k); this.render(); }); items.appendChild(row);
    }
    this.el.querySelector('.iv-cap').textContent = used + ' items';
  }
}

// v361: closing on pointerdown let the finger-up CLICK fall onto the gear button right under the close button and open Settings: swallow taps for a moment after closing
function swallowTap() { const t0 = performance.now(), f = (e) => { if (performance.now() - t0 > 500) { off(); return; } e.stopImmediatePropagation(); e.preventDefault(); }, evs = ['click'], off = () => evs.forEach((n) => window.removeEventListener(n, f, true)); evs.forEach((n) => window.addEventListener(n, f, true)); setTimeout(off, 520); }

const BAG_ICON = '<svg viewBox="0 0 32 32" fill="#fff"><path d="M12.2 5.6a3.8 3.8 0 0 1 7.6 0v.6c3.4.9 5.6 3.8 5.6 7.4v11.2a3.2 3.2 0 0 1-3.2 3.2H9.8a3.2 3.2 0 0 1-3.2-3.2V13.6c0-3.6 2.2-6.5 5.6-7.4z"/><path d="M13.8 5.8a2.2 2.2 0 0 1 4.4 0v.4h-4.4z" fill="#222" opacity=".55"/><rect x="10.4" y="17.6" width="11.2" height="7.2" rx="1.8" fill="#222" opacity=".45"/><rect x="13.6" y="13" width="4.8" height="2.2" rx="1" fill="#222" opacity=".45"/></svg>';
