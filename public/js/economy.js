// ECONOMY: the player's cash, the weapons he owns and their ammunition, saved in the browser (localStorage), plus the price lists.
// Pure logic (no three.js) so it can be tested in node.
const KEY = 'pgta_save_v1';

export const WEAPONS = {
  bat:    { name: 'BASEBALL BAT', price: 35,   melee: true, dmg: 2,   reach: 2.3, desc: 'Two hits drop most people.' },
  pistol: { name: 'PISTOL',       price: 625,  mag: 12, ammoPack: 24, ammoPrice: 8,   dmg: 1.2, rate: 0.28, range: 45, spread: 0.035, recoil: 0.022, reload: 1.3, auto: false, desc: 'Accurate, 12 rounds a magazine.' },
  ak:     { name: 'AK-47',        price: 1400, mag: 30, ammoPack: 60, ammoPrice: 40,  dmg: 1.6, rate: 0.1,  range: 70, spread: 0.07, recoil: 0.013, reload: 2.3,  auto: true,  desc: 'Full auto. Loud. Expensive.' },
  sniper: { name: 'SNIPER RIFLE', price: 1400, mag: 5,  ammoPack: 10, ammoPrice: 60,  dmg: 6.0, rate: 1.4,  range: 420, spread: 0.002, recoil: 0.085, reload: 3.0, auto: false, scope: true, desc: 'Hold AIM to look through the scope. One slow, very powerful shot; reaches across the whole hill.' },
};
// the grenade is a throwable: you buy them one at a time ($15 each) and carry a stack (wallet.nades); one is used up per throw
WEAPONS.grenade = { name: 'GRENADE', price: 15, grenade: true, melee: true, dmg: 4, radius: 7, fuse: 2.6, desc: 'Pull, throw, run: it goes off 2.6 s after it leaves your hand. Buy as many as you need.' };
// guns found on the COMBAT map only (not in the shop): cls = which of the three hand poses / sounds they use
WEAPONS.revolver = { name: 'REVOLVER', cls: 'pistol', combatOnly: true, mag: 6, ammoPack: 12, dmg: 2.6, rate: 0.55, range: 55, spread: 0.025, auto: false, recoil: 0.05, reload: 2.2, desc: 'Six heavy rounds.' };
WEAPONS.smg = { name: 'SMG', cls: 'ak', combatOnly: true, mag: 25, ammoPack: 50, dmg: 0.85, rate: 0.065, range: 38, spread: 0.1, auto: true, recoil: 0.009, reload: 1.8, desc: 'Fast and close.' };
WEAPONS.m4 = { name: 'M4 RIFLE', cls: 'ak', combatOnly: true, mag: 30, ammoPack: 60, dmg: 1.4, rate: 0.085, range: 85, spread: 0.045, auto: true, recoil: 0.011, reload: 2.1, desc: 'Accurate full auto.' };
WEAPONS.ak49 = { name: 'AK-49', cls: 'ak', combatOnly: true, mag: 40, ammoPack: 80, dmg: 2.2, rate: 0.085, range: 95, spread: 0.05, auto: true, recoil: 0.014, reload: 2.4, desc: 'Rare. Hits harder than the AK-47.' };
WEAPONS.shotgun = { name: 'SHOTGUN', cls: 'ak', combatOnly: true, mag: 6, ammoPack: 12, dmg: 3.4, rate: 0.85, range: 28, spread: 0.07, auto: false, recoil: 0.06, reload: 2.8, desc: 'Devastating up close.' };
export const wcls = (w) => (WEAPONS[w] && WEAPONS[w].cls) || w;   // the pose / sound family of a weapon: pistol | ak | sniper
export const WEAPON_ORDER = ['bat', 'pistol', 'revolver', 'smg', 'ak', 'ak49', 'm4', 'shotgun', 'sniper', 'grenade'];

// Real US prices (2026): Louisville Slugger ash bat about $34, Glock 19 Gen5 about $626, Zastava ZPAP M70 (AK-47) about $1,420, 9mm about $0.33 and 7.62x39 about $0.67 a round.
// Pay is small on purpose: the game will have many missions, so a pistol takes a few of them and an AK-47 a good evening.
export const MISSION_PAY = { stunt: 150, thief: 250, snipe: 4000, zombie: 5000, poli: 4000, combat: 300 };
export const MISSION_PAY_DEFAULT = 120;
export const PAY = { hit: 2, down: 8, kill: 15, jackBonus: 0 };

// what INTELLIMUM AUTOS pays for a stolen car (traffic cars are ids 11..18); the paint and condition count
export const CAR_VALUE = { 11: 350, 12: 480, 13: 420, 14: 650, 15: 380, 16: 800, 17: 450, 18: 600 };
export const carPrice = (id, hp) => Math.round((CAR_VALUE[id] || 400) * (0.35 + 0.65 * Math.max(0, Math.min(100, hp === undefined ? 100 : hp)) / 100) / 10) * 10;

const fresh = () => ({ money: 400, owned: {}, ammo: {}, mag: {}, nades: 0 });
let mem = null;
function load() {
  if (mem) return mem;
  try { const s = JSON.parse(localStorage.getItem(KEY) || 'null'); mem = s && typeof s.money === 'number' ? { ...fresh(), ...s } : fresh(); } catch (e) { mem = fresh(); }
  return mem;
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) { /* private window: keep it in memory */ } }

export class Wallet {
  constructor() { this.s = load(); this.on = null; this.kit = false; this.cb = null; }   // cb: the COMBAT MISSION backpack (only what you picked up on that map; the saved weapons stay safe)
  get w() { return this.cb || this.s; }   // kit: the free full kit of the ZOMBIE ATTACK mission (bat, pistol, AK-47, grenades, unlimited ammo; nothing is saved)
  get money() { return this.s.money; }
  add(n, why) { n = Math.round(n); if (!n) return; this.s.money = Math.max(0, this.s.money + n); save(); if (this.on) this.on(n, why); }
  canPay(n) { return this.s.money >= n; }
  spend(n) { if (this.s.money < n) return false; this.s.money -= n; save(); if (this.on) this.on(-n, 'buy'); return true; }
  owns(w) { if (this.kit && (w === 'bat' || w === 'pistol' || w === 'ak' || w === 'grenade')) return true; return w === 'grenade' ? this.nades > 0 : !!this.w.owned[w]; }
  get nades() { return this.kit ? 99 : this.w.nades | 0; }
  useNade() { if (this.kit) return true; if (this.nades <= 0) return false; this.w.nades--; save(); return true; }
  buy(w) { const W = WEAPONS[w]; if (W && W.grenade) { if (!this.spend(W.price)) return false; this.s.nades = (this.s.nades | 0) + 1; save(); return true; }
    if (!W || this.owns(w) || !this.spend(W.price)) return false; this.s.owned[w] = true; if (!W.melee) { this.s.mag[w] = W.mag; this.s.ammo[w] = (this.s.ammo[w] || 0) + W.ammoPack; } save(); return true; }
  buyAmmo(w) { const W = WEAPONS[w]; if (!W || W.melee || W.grenade || !this.owns(w) || !this.spend(W.ammoPrice)) return false; this.s.ammo[w] = (this.s.ammo[w] || 0) + W.ammoPack; save(); return true; }
  // an issued weapon (the police pistol in the thief mission): owned, loaded, with spare magazines; a gun you already own just gets topped up
  gift(w) { const W = WEAPONS[w]; if (!W || W.melee || W.grenade) return false; if (!this.owns(w)) { this.w.owned[w] = true; this.w.mag[w] = W.mag; this.w.ammo[w] = (this.w.ammo[w] || 0) + W.ammoPack * 1.5; save(); return true; } if (this.mag(w) + this.reserve(w) < 24) { this.w.ammo[w] = (this.w.ammo[w] || 0) + W.ammoPack; save(); return true; } return false; }
  mag(w) { if (this.kit && WEAPONS[w] && WEAPONS[w].mag) return WEAPONS[w].mag; return this.w.mag[w] || 0; }
  reserve(w) { if (this.kit) return 999; return this.w.ammo[w] || 0; }
  // fire one round; false when the magazine is empty
  shoot(w) { if (this.kit) return true; if ((this.w.mag[w] || 0) <= 0) return false; this.w.mag[w]--; save(); return true; }
  reload(w) { const W = WEAPONS[w]; if (!W || W.melee || W.grenade) return false; const need = W.mag - (this.w.mag[w] || 0), take = Math.min(need, this.w.ammo[w] || 0); if (take <= 0) return false; this.w.mag[w] = (this.w.mag[w] || 0) + take; this.w.ammo[w] -= take; save(); return true; }
  // weapons the player can cycle through (fist first)
  cycle() { return [null, ...WEAPON_ORDER.filter((w) => this.owns(w))]; }
}
export const money = (n) => '$' + Math.round(n).toLocaleString('en-US');
