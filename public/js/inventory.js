// The backpack screen of the match: the hands (1 bat + 2 guns) on the left, the backpack items on the right.
// Tap an item to use it (heal / throw / zoom), tap a gun to hold it, DROP to leave it on the ground. Keyboard: I opens and closes it, 6-0 use items, E swaps a gun on the ground.
import { WEAPONS } from './economy.js';

export const CAP = { med: 4, inject: 4, pills: 6, smoke: 4, scope: 1, grenade: 5 };
const ITEMS = [
  { k: 'med', icon: '✚', name: 'FIRST AID', info: '+50 health, 4 s', key: '6', col: '#ff5c5c' },
  { k: 'pills', icon: '💊', name: 'PAIN PILLS', info: '+25 health, 3 s', key: '7', col: '#ffa94d' },
  { k: 'inject', icon: '💉', name: 'ADRENALINE', info: '+20 health, speed boost', key: '8', col: '#5ec8ff' },
  { k: 'smoke', icon: '☁', name: 'SMOKE BOMB', info: 'throw: cover for 15 s', key: '9', col: '#cfd6dc' },
  { k: 'grenade', icon: '💣', name: 'GRENADE', info: 'hold, then throw', key: '', col: '#8dff6b' },
  { k: 'scope', icon: '🔭', name: 'TELESCOPE', info: 'tap again to put away', key: '0', col: '#b48cff' },
];
const GUN_NAME = { pistol: 'PISTOL', revolver: 'REVOLVER', smg: 'SMG', m4: 'M4 RIFLE', shotgun: 'SHOTGUN', ak: 'AK-47', sniper: 'SNIPER RIFLE' };

export class Inventory {
  constructor(cs) { this.cs = cs; this.el = null; this.btn = null; this.open = false; }
  isOpen() { return this.open; }
  build() {
    if (this.el) return;
    const el = document.createElement('div'); el.id = 'c-inv'; el.style.display = 'none';
    el.innerHTML = '<div class="iv-box"><div class="iv-h"><b>BACKPACK</b><span class="iv-cap"></span><button type="button" class="iv-x" aria-label="Close">✕</button></div><div class="iv-cols"><div class="iv-col iv-hands"><h4>IN YOUR HANDS</h4><div class="iv-list" data-l="hands"></div></div><div class="iv-col"><h4>ITEMS</h4><div class="iv-list" data-l="items"></div></div></div><div class="iv-hint">I = close • 6 first aid • 7 pills • 8 adrenaline • 9 smoke • 0 telescope • E swap gun</div></div>';
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
    this.build(); const open = force === undefined ? !this.open : !!force; if (open && (!this.cs.active || this.cs.dropping)) return; const was = this.open; this.open = open; this.el.style.display = open ? 'flex' : 'none'; if (was && !open) document.dispatchEvent(new Event('inv-closed'));
    if (open) { try { if (document.pointerLockElement) document.exitPointerLock(); } catch (e) { /* ignore */ } this.render(); this.cs.R.fireHeld = false; }
  }
  render() {
    if (!this.el || !this.open) return; const cs = this.cs, R = cs.R, cb = R.wallet && R.wallet.cb; if (!cb) return;
    const hands = this.el.querySelector('[data-l="hands"]'), items = this.el.querySelector('[data-l="items"]'); hands.innerHTML = ''; items.innerHTML = '';
    const gs = cs.guns(); for (let i = 0; i < 2; i++) {
      const w = gs[i], row = document.createElement('div'); row.className = 'iv-row' + (w ? '' : ' empty') + (w && R.weapon === w ? ' sel' : '');
      if (w) { row.innerHTML = '<i>🔫</i><div><b>' + GUN_NAME[w] + '</b><small>' + (cb.mag[w] | 0) + ' / ' + (cb.ammo[w] | 0) + ' ammo</small></div><button type="button" class="iv-drop">DROP</button>'; row.addEventListener('pointerdown', (e) => { e.preventDefault(); if (e.target.classList.contains('iv-drop')) { cs.dropGun(w); return; } R.equip(w); this.render(); }); }
      else row.innerHTML = '<i>🔫</i><div><b>GUN SLOT ' + (i + 1) + '</b><small>empty</small></div>';
      hands.appendChild(row);
    }
    { const row = document.createElement('div'); row.className = 'iv-row' + (cb.owned.bat ? '' : ' empty') + (R.weapon === 'bat' ? ' sel' : ''); row.innerHTML = '<i>🏏</i><div><b>BASEBALL BAT</b><small>' + (cb.owned.bat ? 'melee' : 'empty') + '</small></div>'; if (cb.owned.bat) row.addEventListener('pointerdown', (e) => { e.preventDefault(); R.equip('bat'); this.render(); }); hands.appendChild(row); }
    { const row = document.createElement('div'); row.className = 'iv-row' + (!R.weapon ? ' sel' : ''); row.innerHTML = '<i>✊</i><div><b>FISTS</b><small>punch / kick</small></div>'; row.addEventListener('pointerdown', (e) => { e.preventDefault(); R.equip('fist'); this.render(); }); hands.appendChild(row); }
    let used = 0;
    for (const it of ITEMS) {
      const n = cs.count(it.k); used += n; const row = document.createElement('div'); row.className = 'iv-row item' + (n > 0 ? '' : ' empty') + (it.k === 'scope' && R.telescope ? ' sel' : '');
      row.style.setProperty('--c', it.col); row.innerHTML = '<i>' + it.icon + '</i><div><b>' + it.name + '</b><small>' + it.info + '</small></div><em>x' + n + (it.key ? '<u>' + it.key + '</u>' : '') + '</em>';
      row.addEventListener('pointerdown', (e) => { e.preventDefault(); cs.useItem(it.k); this.render(); }); items.appendChild(row);
    }
    this.el.querySelector('.iv-cap').textContent = used + ' items';
  }
}
