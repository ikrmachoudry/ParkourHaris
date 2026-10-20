// ECONOMY: the player's cash, the weapons he owns and their ammunition, saved in the browser (localStorage), plus the price lists.
// Pure logic (no three.js) so it can be tested in node.
const KEY = 'pgta_save_v1';

export const WEAPONS = {
  bat:    { name: 'BASEBALL BAT', price: 35,   melee: true, dmg: 2,   reach: 2.3, desc: 'Two hits drop most people.' },
  pistol: { name: 'PISTOL',       price: 625,  mag: 12, ammoPack: 24, ammoPrice: 8,   dmg: 1.2, rate: 0.28, range: 45, spread: 0.035, auto: false, desc: 'Accurate, 12 rounds a magazine.' },
  ak:     { name: 'AK-47',        price: 1400, mag: 30, ammoPack: 60, ammoPrice: 40,  dmg: 1.6, rate: 0.1,  range: 70, spread: 0.07,  auto: true,  desc: 'Full auto. Loud. Expensive.' },
  sniper: { name: 'SNIPER RIFLE', price: 1400, mag: 5,  ammoPack: 10, ammoPrice: 60,  dmg: 6.0, rate: 1.4,  range: 420, spread: 0.002, auto: false, scope: true, desc: 'Hold AIM to look through the scope. One slow, very powerful shot; reaches across the whole hill.' },
};
export const WEAPON_ORDER = ['bat', 'pistol', 'ak', 'sniper'];

// Real US prices (2026): Louisville Slugger ash bat about $34, Glock 19 Gen5 about $626, Zastava ZPAP M70 (AK-47) about $1,420, 9mm about $0.33 and 7.62x39 about $0.67 a round.
// Pay is small on purpose: the game will have many missions, so a pistol takes a few of them and an AK-47 a good evening.
export const MISSION_PAY = { stunt: 150, thief: 250, snipe: 400 };
export const MISSION_PAY_DEFAULT = 120;
export const PAY = { hit: 2, down: 8, kill: 15, jackBonus: 0 };

// what INTELLIMUM AUTOS pays for a stolen car (traffic cars are ids 11..18); the paint and condition count
export const CAR_VALUE = { 11: 350, 12: 480, 13: 420, 14: 650, 15: 380, 16: 800, 17: 450, 18: 600 };
export const carPrice = (id, hp) => Math.round((CAR_VALUE[id] || 400) * (0.35 + 0.65 * Math.max(0, Math.min(100, hp === undefined ? 100 : hp)) / 100) / 10) * 10;

const fresh = () => ({ money: 400, owned: {}, ammo: {}, mag: {} });
let mem = null;
function load() {
  if (mem) return mem;
  try { const s = JSON.parse(localStorage.getItem(KEY) || 'null'); mem = s && typeof s.money === 'number' ? { ...fresh(), ...s } : fresh(); } catch (e) { mem = fresh(); }
  return mem;
}
function save() { try { localStorage.setItem(KEY, JSON.stringify(mem)); } catch (e) { /* private window: keep it in memory */ } }

export class Wallet {
  constructor() { this.s = load(); this.on = null; }
  get money() { return this.s.money; }
  add(n, why) { n = Math.round(n); if (!n) return; this.s.money = Math.max(0, this.s.money + n); save(); if (this.on) this.on(n, why); }
  canPay(n) { return this.s.money >= n; }
  spend(n) { if (this.s.money < n) return false; this.s.money -= n; save(); if (this.on) this.on(-n, 'buy'); return true; }
  owns(w) { return !!this.s.owned[w]; }
  buy(w) { const W = WEAPONS[w]; if (!W || this.owns(w) || !this.spend(W.price)) return false; this.s.owned[w] = true; if (!W.melee) { this.s.mag[w] = W.mag; this.s.ammo[w] = (this.s.ammo[w] || 0) + W.ammoPack; } save(); return true; }
  buyAmmo(w) { const W = WEAPONS[w]; if (!W || W.melee || !this.owns(w) || !this.spend(W.ammoPrice)) return false; this.s.ammo[w] = (this.s.ammo[w] || 0) + W.ammoPack; save(); return true; }
  // an issued weapon (the police pistol in the thief mission): owned, loaded, with spare magazines; a gun you already own just gets topped up
  gift(w) { const W = WEAPONS[w]; if (!W || W.melee) return false; if (!this.owns(w)) { this.s.owned[w] = true; this.s.mag[w] = W.mag; this.s.ammo[w] = (this.s.ammo[w] || 0) + W.ammoPack * 1.5; save(); return true; } if (this.mag(w) + this.reserve(w) < 24) { this.s.ammo[w] = (this.s.ammo[w] || 0) + W.ammoPack; save(); return true; } return false; }
  mag(w) { return this.s.mag[w] || 0; }
  reserve(w) { return this.s.ammo[w] || 0; }
  // fire one round; false when the magazine is empty
  shoot(w) { if ((this.s.mag[w] || 0) <= 0) return false; this.s.mag[w]--; save(); return true; }
  reload(w) { const W = WEAPONS[w]; if (!W || W.melee) return false; const need = W.mag - (this.s.mag[w] || 0), take = Math.min(need, this.s.ammo[w] || 0); if (take <= 0) return false; this.s.mag[w] = (this.s.mag[w] || 0) + take; this.s.ammo[w] -= take; save(); return true; }
  // weapons the player can cycle through (fist first)
  cycle() { return [null, ...WEAPON_ORDER.filter((w) => this.owns(w))]; }
}
export const money = (n) => '$' + Math.round(n).toLocaleString('en-US');
