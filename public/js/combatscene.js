/* v648 TEAM SLOT COLOURS: slot 1 = YOU, 2.. = your mates (the same number + colour in the team panel, over his head in the world and on both maps) */
/* v649: the real FREEZE of a hidden bot: three.js walks into every child of a frozen group anyway (the parent's update forces its children), so the v645 flags saved nothing; this instance-level no-op skips the bot's whole ~340-node subtree */
const NOOP_UMW = () => {};
export const SLOT_COL = ['#e3a02c', '#e8672b', '#2d9bd6', '#34b36a', '#8e6ad8'];
// COMBAT MISSION on the client: drops the player onto the hidden battle map, draws the bots and the loot, runs the 5 minute match (combat.js has the brain),
// shows the HUD (time, kills, health) and turns the player's bullets, fists and grenades into hits on the bots.
import * as THREE from 'three';
import { makeHero, makeSkin } from './glbactor.js';
import { buildCabin } from './planecabin.js';
import { av } from './assetver.js';
import { preloadAssets } from './preload.js';
import { mkLoader } from './gltfload.js';
import { track, loadScreen } from './loading.js';
import { makeWeaponModel } from './weaponmodels.js';
import * as A from './audio.js';
import { WEAPONS } from './economy.js';
const IS_ANDROID = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent || '');
import { CombatSim, CMB, COMBAT_MS, TW, botCount, layout, surfaceAt, inBld, cmbH, cmbG, supportY, hitsSolid, rayWalls, shotClear, groundBlocks, ballOK, underRoof, gunDamage, zoneOf, GUNS, los, FRAG_REACH, fragDmg } from './combat.js';
import { Inventory, CAP } from './inventory.js';
import { Jet, jetModel, JET, RemoteJet } from './jetpack.js';
import { renderIcons } from './icons.js';
import { propModel, hasProp, propDim, preloadProps } from './props.js';
import { makeZone, zoneAt, bombAt, bombSpot, AIR } from './zone.js';
import { zoneFx, zoneNear } from './zonefx.js';
import { NetSim } from './netsim.js';
import { buildBattleMap } from './battlemap.js';
import { Glass } from './glass.js';
import { LOBBY } from './gta.js';
import { showVictory, startWinSong, cancelWinSong, prepareVictory } from './victory.js';
import { OPT } from './opts.js';
const _hipV = new THREE.Vector3(), RV_A0 = Math.atan2(0.58, -0.29);   // v595
export const rvYaw = (hx, hz, rx, rz) => Math.atan2(rx - hx, rz - hz) - RV_A0;

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const nhf = (mode) => ([0.64, 0.75, 0.643, 0.614, 0.545][mode | 0] || 0.64) * 0.86;   /* v615: where the cocked-back hold pose sits in the throw clip (same as NADE_REL x NADE_HOLDK in main.js) */
const LOOT_COL = { pistol: '#7fd0ff', revolver: '#5fa8ff', smg: '#ffd23f', ak: '#ffb347', m4: '#ff8a47', ak49: '#ffd700', shotgun: '#ff6b6b', sniper: '#ff6bd6', bat: '#cfa36a', grenade: '#8dff6b', molotov: '#ff9a3c', ammo: '#ffe55c', med: '#ff5c5c', inject: '#5ec8ff', pills: '#ffa94d', smoke: '#cfd6dc', scope: '#b48cff', sscope: '#7fe0ff', vest: '#9ad0ff', helmet: '#b0b8c0', skin: '#8fbf5a', jet: '#ff9a2e', jfuel: '#ff6a3a' };
const fitPx = (c, t, px, maxW) => { c.font = '900 ' + px + 'px Impact, Arial Black, sans-serif'; const w = c.measureText(t).width; return Math.max(18, Math.floor(w > maxW ? px * maxW / w : px)); };   // v271: shrink a name to fit the canopy
const LOOT_NAME = { pistol: 'PISTOL', revolver: 'REVOLVER', smg: 'SMG', m4: 'M4 RIFLE', shotgun: 'SHOTGUN', ak: 'AK-47', ak49: 'AK-49', sniper: 'SNIPER RIFLE', bat: 'BASEBALL BAT', grenade: 'GRENADE', ammo: 'AMMO', med: 'FIRST AID', inject: 'ADRENALINE', pills: 'PAIN PILLS', smoke: 'SMOKE BOMB', molotov: 'MOLOTOV', scope: 'BINOCULARS', sscope: 'TELESCOPE (Kar98)', vest: 'BODY ARMOR', helmet: 'HELMET', skin: 'MILITARY SKIN', jet: 'JETPACK', jfuel: 'JET FUEL' };
const newCb = () => ({ owned: {}, mag: {}, ammo: {}, nades: 0, inv: { med: 0, inject: 0, pills: 0, smoke: 0, molotov: 0, scope: 0, sscope: 0, vest: 0, helmet: 0, skin: 0, jet: 0, jfuel: 0 }, vestHp: 0, helmHp: 0 });
const ITEM_K = ['med', 'inject', 'pills', 'smoke', 'molotov', 'scope', 'sscope', 'vest', 'helmet', 'skin', 'jet', 'jfuel'];
// v523: a small corner chip (red-zone warning: shows for about a second and fades out; same on laptop and phone)
function cornerChip(id, text, ms) { try { let e = document.getElementById(id); if (!e) { e = document.createElement('div'); e.id = id; e.style.cssText = 'position:fixed;left:max(150px,calc(2vw + 140px));top:max(10px,2vh);z-index:9;padding:5px 10px;border-radius:8px;background:rgba(190,20,10,.88);color:#fff;font:800 12px system-ui,sans-serif;letter-spacing:.4px;pointer-events:none;opacity:0;transition:opacity .25s'; document.body.appendChild(e); } e.textContent = text; e.style.opacity = '1'; clearTimeout(e._t); e._t = setTimeout(() => { e.style.opacity = '0'; }, ms || 1000); } catch (er) { /* noop */ } }
const isGunK = (w) => !!(WEAPONS[w] && !WEAPONS[w].melee && !WEAPONS[w].grenade);
const USE = { med: { dur: 6, hp: 75, cap: 75, name: 'FIRST AID' }, pills: { dur: 6, hp: 0, name: 'PAIN PILLS', boost: 60 }, inject: { dur: 8, hp: 0, name: 'ADRENALINE', boost: 100 } };   /* v540 PUBG: first aid heals up to 75 HP; painkillers / adrenaline fill the BOOST bar (+60 / +100) which heals you slowly and, when high, makes you run faster */
const TRAIN_INFO = {   // v442: training yard text: [title, what it is / how to use it]
  pistol: ['PISTOL', '12 rounds per magazine. Accurate and quiet, weak damage. Single shot: one click, one bullet. A good first gun.'],
  revolver: ['REVOLVER', '6 heavy rounds per magazine. Hits much harder than the pistol but fires slowly and reloads slowly. Aim for the body.'],
  smg: ['SMG', '25 rounds, very fast fire. Great at close range, weak and inaccurate far away. Hold fire to spray.'],
  ak: ['AK-47', '30 rounds, full auto, strong damage but it kicks up. Fire short bursts and pull down against the recoil.'],
  ak49: ['AK-49  (RARE)', '40 rounds and hits harder than the AK-47. The best all-round rifle. You will not find many.'],
  m4: ['M4 RIFLE', '30 rounds, full auto, the most accurate rifle with low recoil. Good at medium range.'],
  shotgun: ['SHOTGUN', '6 shells, DOUBLE damage point-blank (under about 5 m), still strong to about 25 m, useless far away. Slow pump: one shot at a time.'],
  sniper: ['SNIPER RIFLE (Kar98)', '5 rounds, one very powerful slow shot, range 400 m+. Hold AIM (right mouse) to look through the scope. Fit a TELESCOPE first for zoom.'],
  ammo: ['AMMO BOX', 'Fills the spare ammo of every gun you carry. You can pick it up even with no gun: it waits in your backpack for your first gun.'],
  med: ['FIRST AID', 'Heals up to 75 health (never above 75) but takes 4 seconds. You walk slowly while using it, and a hit stops it (it is not used up). Press 6 to use.'],
  pills: ['PAIN PILLS', 'Adds +60 to the BOOST bar in 5 seconds. Boost heals you slowly. Press 7 to use.'],
  inject: ['ADRENALINE', 'Fills +100 of the BOOST bar in 4 seconds. Boost heals you over time, and from 50 up it makes you run a bit faster. Press 8 to use.'],
  grenade: ['GRENADE', 'Press 3, 4 or G to take it in your hand. TAP FIRE to throw at once, or HOLD FIRE to pull the pin: your hand stays cocked, the fuse counts down on the orange number and a thin red line shows where it lands. Let go to throw (CANCEL keeps it). Held past 0 it blows up in your hand. Fuse 2.6 s, blast: lethal within 3.5 m, weaker out to 10 m (it hurts teammates and you too).'],
  smoke: ['SMOKE BOMB', 'Throw it to hide yourself or a teammate while healing or crossing open ground. Press 9 (or 3 / G to cycle) to take it in hand, then FIRE.'],
  molotov: ['MOLOTOV', 'Throw it to start a fire on the ground that burns anyone standing in it. Great for pushing people out of a room. Press 4 or N (or G to cycle) to take it in hand, then FIRE.'],
  scope: ['BINOCULARS', 'Press 0 to look far away with zoom (mouse wheel zooms). A separate item: it cannot be used on the sniper rifle.'],
  sscope: ['TELESCOPE (Kar98)', 'Clips onto the sniper rifle. Hold AIM to look through it; the mouse wheel zooms. Needs the sniper rifle first.'],
  vest: ['BODY ARMOR', 'PUBG Level 2 vest: takes 40% of every body shot until its 220 points run out. Worn automatically.'],
  skin: ['MILITARY SKIN', 'A dead soldier can carry one. Open the BACKPACK and tap it to put the olive military uniform on (tap again to take it off). It is only yours for this match: you must find another one next match.'],
  jet: ['JETPACK', 'Found on the ROOFS. On the ground or on a roof press J (phone: tap JET): it lifts you about 12 m and flies you forward (about 5 seconds of flight; climbing burns the fuel faster than flying or hovering). The tank refills in 25 s, only while you stand on the ground. When the fuel ends a soft cushion keeps you from getting hurt. Everybody near sees your pack and the blue flame. Find JET FUEL cans to refill the tank.'],
  jfuel: ['JET FUEL', 'A red fuel can. Open the BACKPACK and tap it (or just press J when the tank is empty) to refill the JETPACK tank to full, even in the air. You can carry 3.'],
  helmet: ['HELMET', 'PUBG Level 2 helmet: takes 40% of every headshot until its 150 points run out. Worn automatically.'],
};
const MY_DMG = 100;
/* v558: PLAYER-vs-PLAYER damage per bullet (100 hp). PUBG-like: the AK used to do 35 (3 shots); now ~6 shots to kill, the sniper 2-3, a shotgun blast close up 2-3 */
const STH_PV = [1.8, 1.25, 0.6];   // v605: a player's hit-box height standing / crouched / prone
const PVP_SCALE = 1;   /* v563 PUBG damage model: a player hit takes the real PUBG numbers (AKM 48 body / 113 head, M416 40 / 94 ...) from GUNS in combat.js; this is the ONE knob to scale player-vs-player damage if it feels too strong */

let TR_GEO = null, TR_MAT = null;
const DOOR_T = 3;   /* v632: the plane's back door opens 3 s after take-off (was 6 s) */
const IS_PHONE = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent), IS_ANDR = /Android/i.test(navigator.userAgent), BOT_VIS2 = (IS_ANDR ? 190 : IS_PHONE ? 230 : 330) ** 2, BOT_MID2 = (IS_ANDR ? 40 : 70) ** 2;   /* v471: Android: bots are drawn up to 190 m and animated at a quarter of the rate beyond 40 m */   // bots: not drawn beyond this (m, squared) / animated at a third of the rate beyond 70 m
const LOOT_NEAR2 = (/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent) ? 26 : 30) ** 2, d2n = (x, z) => x * x + z * z;   /* v657: items are drawn in full only this near (see the loot loop) */
const LOOT_VIS2 = (/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent) ? 46 : 64) ** 2;   /* v629: twice the items on the map, so each is drawn a little nearer (phone 70 -> 46 m, laptop 85 -> 64 m): the draw calls near a busy place stay about what they were */   // v513: laptop 85 m (was 120): every gun on the ground is ~12 draws   // loot is drawn only this close (metres, squared)
// Shared loot parts (v221, P4): every crate / pill / ring of the same kind uses ONE material and ONE geometry, so the phone keeps a few dozen GPU objects instead of hundreds.
const WING_STYLES = [{ k: 'flag' }, { k: 'solid', a: '#d62828', b: '#ffffff' }, { k: 'solid', a: '#1d4ed8', b: '#ffd23f' }, { k: 'solid', a: '#f97316', b: '#1f2937' }, { k: 'solid', a: '#15803d', b: '#fef08a' }, { k: 'solid', a: '#7e22ce', b: '#f9a8d4' }, { k: 'solid', a: '#0d9488', b: '#ffffff' }, { k: 'camo', base: '#4b5d2a', c: ['#2f3d1c', '#6e7f3c', '#1f2a14'] }, { k: 'camo', base: '#c8b27a', c: ['#a78d55', '#e0cf9e', '#7d6b42'] }, { k: 'dig', base: '#6b7078', c: ['#3a3d40', '#8b9096', '#22252a'] }, { k: 'camo', base: '#e8edf0', c: ['#aab4bc', '#cfd8dd', '#8a959e'] }, { k: 'camo', base: '#3b4a2c', c: ['#1d2614', '#5b6b3a', '#7a6a3c'] }];   /* v630: parafoil looks */
const _SH = new Map(), _TINT = new Map(), _TINTD = new Map();   // _TINT: the red enemy tint is made once per soldier material, not once per bot
const GEO = (k, ...a) => { const id = k + a.join(','); let g = _SH.get(id); if (!g) { g = new THREE[k + 'Geometry'](...a); _SH.set(id, g); } return g; };
const SM = (c, r) => { const id = 'S' + c + (r || ''); let m = _SH.get(id); if (!m) { m = new THREE.MeshStandardMaterial(r ? { color: c, roughness: r } : { color: c }); _SH.set(id, m); } return m; };
const RM = (c, o) => { const id = 'R' + c + o; let m = _SH.get(id); if (!m) { m = new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: o, side: THREE.DoubleSide, depthWrite: false }); _SH.set(id, m); } return m; };
export class CombatScene {
  constructor(race) {
    this.R = race; this.on = false; this.sim = null; this.bots = new Map(); this.mates = new Map(); this.loot = new Map(); this.dsm = new Map(); this.group = new THREE.Group(); this.group.visible = false; race.scene.add(this.group);
    this.hp = MY_DMG; this.time = COMBAT_MS / 1000; this.st = { bots: {}, ply: {}, dby: {} }; this.over = false; this.t = 0; this.hud = null; this.deadT = 0; this.kills = 0; this.deaths = 0; this.tr = [];
    this.tmpV = new THREE.Vector3(); this.using = null; this.boost = 0; this.promptIt = null; this.inv = new Inventory(this); this.jet = new Jet(this);
  }
  get active() { return this.on && !this.down && !this.over && !!this.sim && this.R.mission && this.R.mission.phase === 'run' && this.deadT <= 0; }
  // ---------------------------------------------------------------- HUD
  showHud(on) {
    if (!this.hud) {
      if (!on) return;
      const e = document.createElement('div'); e.id = 'c-hud';
      e.style.cssText = 'position:fixed;left:50%;top:max(6px,env(safe-area-inset-top));transform:translateX(-50%);z-index:30;pointer-events:none;text-align:center;font:800 12px/1 system-ui,sans-serif;color:#fff;background:rgba(0,0,0,.35);border-radius:10px;padding:4px 10px;text-shadow:0 1px 2px #000';
      e.innerHTML = '<div class="ch-t" style="font-size:12px;letter-spacing:1px">15:00</div><div class="ch-s" style="display:none"></div>';
      document.body.appendChild(e); this.hud = e;
      const hb = document.createElement('div'); hb.id = 'c-hp'; hb.style.cssText = 'position:fixed;left:50%;bottom:max(8px,2.5vh);transform:translateX(-50%);z-index:30;pointer-events:none;width:min(26vw,260px);font:800 11px/1 system-ui,sans-serif;color:#fff;text-shadow:0 1px 3px #000;text-align:center';
      hb.innerHTML = '<div class="cp-bs" style="display:flex;gap:3px;margin:0 0 3px">' + [0, 1, 2, 3].map(() => '<div style="flex:1;height:5px;background:#0008;border:1px solid #fff6;border-radius:3px;overflow:hidden"><i style="display:block;height:100%;width:0;background:#ffb020"></i></div>').join('') + '</div><div style="display:flex;justify-content:space-between;margin:0 4px 4px"><span></span><span class="cp-n">100</span></div><div class="cp-g" style="display:none;justify-content:center;gap:10px;margin:0 0 4px;font-size:11px"><span class="cp-v" style="display:none;background:#0009;border:1px solid #6fe39a;border-radius:8px;padding:2px 7px;color:#6fe39a">&#128737; VEST <b></b></span><span class="cp-h" style="display:none;background:#0009;border:1px solid #9ad7ff;border-radius:8px;padding:2px 7px;color:#9ad7ff">&#9937; HELMET <b></b></span></div><div style="height:8px;background:#0008;border:1px solid #fff9;border-radius:5px;overflow:hidden"><i class="cp-b" style="display:block;height:100%;width:100%;background:#4ade80;transition:width .2s"></i></div>';
      document.body.appendChild(hb); this.hpBar = hb;
      const vg = document.createElement('div'); vg.style.cssText = 'position:fixed;inset:0;z-index:29;pointer-events:none;opacity:0;transition:opacity .2s;background:radial-gradient(ellipse at center,transparent 45%,rgba(220,0,0,.8) 100%)'; document.body.appendChild(vg); this.vig = vg;
      const ov = document.createElement('div'); ov.style.cssText = 'position:fixed;inset:0;z-index:40;display:none;place-items:center;pointer-events:none;background:rgba(0,0,0,.55);color:#fff;font:800 20px/1.5 system-ui,sans-serif;text-align:center;text-shadow:0 2px 6px #000'; document.body.appendChild(ov); this.ov = ov;
      const jb = document.createElement('button'); jb.id = 'c-jump'; jb.innerHTML = '<svg viewBox="0 0 32 32" width="34" height="34" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M16 5v18M8 15l8-10 8 10"/><path d="M9 27h14"/></svg><b>JUMP</b>';
      jb.style.cssText = 'position:fixed;right:max(22px,6vw);bottom:34%;z-index:45;display:none;flex-direction:column;align-items:center;gap:2px;width:92px;height:92px;border-radius:50%;border:3px solid #fffd;background:rgba(20,24,20,.62);color:#fff;font:800 14px system-ui,sans-serif;justify-content:center;touch-action:none;cursor:pointer';
      const jd = (e) => { e.preventDefault(); e.stopPropagation(); this.jumpReq = true; }; jb.addEventListener('pointerdown', jd); jb.addEventListener('touchstart', jd, { passive: false });
      document.body.appendChild(jb); this.jumpBtn = jb;
    }
    this.inv.showBag(on); this.hud.style.display = on ? 'block' : 'none'; if (!on && this._thEl) { this._thEl.style.display = 'none'; this._thSig = ''; } this.hpBar.style.display = on ? 'block' : 'none'; if (!on) { this.using = null; this.R.telescope = false; this.promptIt = null; if (this.useBar) this.useBar.style.display = 'none'; if (this.pickBtn) this.pickBtn.style.display = 'none'; this.vig.style.opacity = 0; this.ov.style.display = 'none'; this.jumpBtn.style.display = 'none'; }
  }
  updateHud() {
    if (!this.hud) return; const m = Math.max(0, Math.ceil(this.time)), mm = Math.floor(m / 60), ss = m % 60;
    { const ct = this.hud.querySelector('.ch-t'); ct.textContent = mm + ':' + (ss < 10 ? '0' : '') + ss + (this.sim && this.sim.bots ? '  \u2022  BOTS ' + this.sim.bots.filter((q) => q.alive && !q.droid).length : '') + (this.zoneTxt && !this.dropping ? '  \u2022  ' + this.zoneTxt : '') + (this.soloTeam() && this.lives > 0 ? '  \u2022  LIVES ' + this.lives : ''); ct.style.color = this.outZone ? '#ff6b6b' : '#fff'; }
    this.hud.querySelector('.ch-s').textContent = 'KILLS ' + this.kills + '   •   DEATHS ' + this.deaths;
    const h = clamp(this.hp, 0, MY_DMG); this.hpBar.querySelector('.cp-n').textContent = Math.round(h); const b = this.hpBar.querySelector('.cp-b'); b.style.width = h + '%'; b.style.background = h > 55 ? '#4ade80' : h > 25 ? '#facc15' : '#ef4444';
    { const cb = this.R.wallet && this.R.wallet.cb, vh = cb && cb.inv && cb.inv.vest > 0 ? Math.max(0, Math.round(cb.vestHp)) : 0, hh = cb && cb.inv && cb.inv.helmet > 0 ? Math.max(0, Math.round(cb.helmHp)) : 0;   // v414: you can SEE what armor you wear: icons above the health bar + the gear on your soldier
      const g = this.hpBar.querySelector('.cp-g'), cv = g.querySelector('.cp-v'), ch = g.querySelector('.cp-h'); g.style.display = vh > 0 || hh > 0 ? 'flex' : 'none'; cv.style.display = vh > 0 ? '' : 'none'; ch.style.display = hh > 0 ? '' : 'none'; cv.lastElementChild.textContent = vh; ch.lastElementChild.textContent = hh;
      this.gearV = vh > 0; this.gearH = hh > 0; const mm = this.R.me && this.R.me.model; if (mm && mm.setGear) mm.setGear(this.gearV, this.gearH); }
  }
  // ---------------------------------------------------------------- start / stop
  begin(m, seat) {
    this.gate = true;   // v296: the match is HELD while the loading screen is up (the plane does not fly, nothing can hurt you, no zone damage): a slow network used to drop you into the game behind the loading screen
    this.clear(); const R = this.R, b = R.me.body; A.setCommentary(false); this.on = true;   // no Punjabi commentary in the combat mission
 this.over = false; this.respDrop = false; this._snapSent = false; this.victoryOpen = false; this.st = { bots: {}, ply: {}, dby: {} }; this.kills = 0; this.deaths = 0; this.hp = MY_DMG; this.time = COMBAT_MS / 1000; this.deadT = 0; this.lives = 3; this.spec = null; this.specHide();
    { const T = R.jangTeam; this.practice = !!(window.phGuide && window.phGuide.practice); this.train = !!(window.phGuide && window.phGuide.train); if (window.phGuide) { window.phGuide.practice = false; window.phGuide.train = false; } this._pracPlaced = false; this.shared = !!(T && T.shared && T.net); this.sim = this.shared ? new NetSim((m.round * 7919 + 13) | 0, T.net, T.myId) : new CombatSim(((Math.random() * 2147483000) | 0) || 77, this.train ? 0 : this.practice ? 2 : botCount(OPT.diff || 'medium', !!R.isTouch));   /* v432: HOW TO PLAY practice = 2 easy bots */ if (!this.shared) this.sim.noRespawn = true; this.setBotDiff(); this.soloT = null; const wd = !!window.phSoloDroid; window.phSoloDroid = false; if (!this.shared && wd && !this.practice && !this.train) { this.sim.soloDroid = true; this.sim.addDroid(0); this.soloT = { tm: 0, myId: -1, seatOf: { '-1': 0 }, seed: 0, si: 0, net: { send() {} } }; } }   /* v461: SOLO + INTELLIDROID */   /* v378: easy 5 / medium 8 / hard 12 bots; a dead bot stays dead; kill them all = MISSION PASSED */   /* v264: a solo match has its own random seed: loot, bots and zone are different every game */   // v245: 2+ players = the SERVER runs the bots and the loot
    this.group.visible = true; this.pay = 0;
    if (R.world && R.world.group) R.world.group.visible = false;   // the city is 800 000 triangles and 1.5 km away: do not draw it during the match
    this.ensureMap();
    if (this.glass) this.glass.reset();   /* v351: every window whole again */
    if (!this.zipG) this.buildZip();   // the landscape is built the first time a match starts (the city never pays for it)
    if (this.jet) this.jet.reset();
    if (R.wallet) { R.wallet.cb = newCb(); R.weapon = null; R.aiming = false; R.syncAct && R.syncAct(); R.updateAmmoHud && R.updateAmmoHud(); }
    this.respawn(seat | 0); this.map.warm(R.me.body); this.showHud(true); this.updateHud(); this.syncLoot();
    if (this.train) this.startTrain(); else this.startDrop();
  }
  // ---------------------------------------------------------------- v442 TRAINING YARD (level 1): a flat, empty spot on the island with two long tables: every gun on one, every other item on the other. A text bar at the bottom says what the item near you is and how to use it.
  startTrain() {
    const R = this.R, b = R.me.body, L = layout(), sim = this.sim; this.time = 1e7; this.lives = 99; sim.noRespawn = true;
    const SEA = -1.2, gridOk = (cx, cz) => { let lo = 1e9, hi = -1e9; for (let dx = -22; dx <= 22; dx += 4) for (let dz = -8; dz <= 22; dz += 4) { const x = cx + dx, z = cz + dz; if (Math.abs(x) > CMB.half - 12 || Math.abs(z) > CMB.half - 12) return null; const h = cmbH(x, z); lo = Math.min(lo, h); hi = Math.max(hi, h); if (h < SEA + 2.2 || hitsSolid(L, x, z, 2.5, h)) return null; for (const t of L.trees || []) if (Math.abs(t.x - x) < 5 && Math.abs(t.z - z) < 5) return null; for (const t of L.rocks || []) if (Math.abs(t.x - x) < 5 && Math.abs(t.z - z) < 5) return null; } return hi - lo; };
    let best = null, bv = 1e9; for (let i = 0; i < 700 && bv > 0.35; i++) { const cx = (Math.random() * 2 - 1) * (CMB.half - 40), cz = (Math.random() * 2 - 1) * (CMB.half - 40), v = gridOk(cx, cz); if (v !== null && v < bv) { bv = v; best = { x: cx, z: cz }; } }
    if (!best) best = { x: L.spawns[0].x, z: L.spawns[0].z }; this.yard = best;
    const gy = cmbH(best.x, best.z), TOP = 0.95, GUNS = ['pistol', 'revolver', 'smg', 'ak', 'ak49', 'm4', 'shotgun', 'sniper'], ITEMS = ['ammo', 'med', 'pills', 'inject', 'grenade', 'smoke', 'molotov', 'scope', 'sscope', 'vest', 'helmet'];
    const tm = new THREE.MeshLambertMaterial({ color: 0x6a4a30 }), g = new THREE.Group(); this.trainG = g; this.stations = [];
    const row = (kinds, z0) => { const sp = 3, n = kinds.length, w = n * sp, box = new THREE.Mesh(new THREE.BoxGeometry(w, TOP, 1.4), tm); box.position.set(CMB.x + best.x, gy + TOP / 2, CMB.z + best.z + z0); g.add(box);
      kinds.forEach((k, i) => { const x = best.x + (i - (n - 1) / 2) * sp, it = sim.addLootAt(k, x, best.z + z0, {}); it.y = gy + TOP + 0.05; it.tk = 1; this.stations.push({ k, x, z: best.z + z0 }); }); };
    row(GUNS, 18); row(ITEMS, 8);
    this.group.add(g); b.x = CMB.x + best.x; b.z = CMB.z + best.z - 6; b.y = cmbH(best.x, best.z - 6) + 0.05; b.vx = b.vz = b.vy = 0; R.camInit = false; R.camYaw = 0;
    this.dropping = false; this.endDrop(true); this.trainBar();
    R.toast && R.toast('TRAINING YARD  -  level 1: walk up to each item and read the text at the bottom', 5);
  }
  trainBar() {
    if (this.tbar) return; const e = document.createElement('div'); e.id = 'c-train';
    e.style.cssText = 'position:fixed;left:50%;bottom:max(64px,9vh);transform:translateX(-50%);z-index:29;pointer-events:none;width:min(560px,50vw);box-sizing:border-box;text-align:center;font:700 12px/1.3 system-ui,sans-serif;color:#fff;background:rgba(10,14,22,.82);border:2px solid #4aa3ff;border-radius:12px;padding:8px 12px;text-shadow:0 1px 2px #000';
    e.innerHTML = '<b style="display:block;color:#ffd23f;letter-spacing:1px;font-size:14px"></b><span></span>'; document.body.appendChild(e); this.tbar = e;
    const x = document.createElement('button'); x.id = 'c-train-x'; x.type = 'button'; x.textContent = 'EXIT TRAINING'; x.style.cssText = 'position:fixed;right:max(10px,env(safe-area-inset-right));top:max(60px,8vh);z-index:31;font:800 11px system-ui,sans-serif;letter-spacing:1px;padding:7px 12px;border:1px solid #ffffff55;border-left:4px solid #d93a3a;background:rgba(8,10,14,.85);color:#fff;border-radius:6px;cursor:pointer';
    const ex = (ev) => { ev.preventDefault(); ev.stopPropagation(); if (this.R.onCombatDone) this.R.onCombatDone(); }; x.addEventListener('pointerdown', ex); document.body.appendChild(x); this.tx = x;
  }
  trainTick() {
    if (!this.tbar) return; const b = this.R.me.body, px = b.x - CMB.x, pz = b.z - CMB.z; let st = null, bd = 3.6 * 3.6; for (const s of this.stations || []) { const d = (s.x - px) ** 2 + (s.z - pz) ** 2; if (d < bd) { bd = d; st = s; } }
    const tc = !!this.R.isTouch, H = st ? TRAIN_INFO[st.k] : null; if (this.tbar.dataset.k !== (st ? st.k : '')) { this.tbar.dataset.k = st ? st.k : ''; const bs = this.tbar.querySelector('b'), sp = this.tbar.querySelector('span'); bs.textContent = H ? H[0] : 'TRAINING YARD - LEVEL 1'; sp.textContent = H ? H[1] : (tc ? 'Walk to the tables. Left: the 8 guns. Right: ammo, healing, grenades, scopes and armor. Walk into an item to pick it up - it comes back after a moment. Open the BACKPACK button to use things.' : 'Walk (W A S D) to the tables. Far table: the 8 guns. Near table: ammo, healing, grenades, scopes and armor. Walk into an item to pick it up - it comes back after a moment. Press I for the backpack.'); }
  }
  respawn(seat) {
    const R = this.R, b = R.me.body, L = layout(); let p = L.spawns[((seat === undefined ? Math.floor(Math.random() * L.spawns.length) : seat * 5 + 1) % L.spawns.length + L.spawns.length) % L.spawns.length];
    if (seat === undefined && this.z && this.sim) { const zz = this.z, ins = L.spawns.filter((q) => Math.hypot(q.x - zz.nx, q.z - zz.nz) < zz.nr * 0.8 && Math.hypot(q.x - zz.x, q.z - zz.z) < zz.r * 0.8); p = ins.length ? ins[Math.floor(Math.random() * ins.length)] : this.sim.zoneSpot(zz.nx, zz.nz, zz.nr); this.safeUntil = this.t + 4; R.toast && R.toast('RESPAWNED INSIDE THE SAFE ZONE (blue circle) - look at the minimap', 4); }   // v251: after you die you come back INSIDE the safe circle, never in the danger zone
    b.x = CMB.x + p.x; b.z = CMB.z + p.z; b.y = cmbH(p.x, p.z) + 0.05; b.vx = b.vz = b.vy = 0; b.stun = 0; b.hitCd = 0.5; R.crouch = false; R.camInit = false; R.camYaw = Math.random() * 6.28;
  }
  clear() {
    try { if (this.jet) this.jet.reset(); } catch (e) { /* ok */ } try { if (this.jet && this.jet.hud) this.jet.hud.style.display = 'none'; if (this.jet && this.jet.btn) this.jet.btn.style.display = 'none'; } catch (e) { /* ok */ }   /* v654: the JET fuel bar / button stayed on the main menu after a match (they are only hidden by the per-frame tick, which stops when the match ends) */
    try { A.ambSet(0, false); } catch (e) { /* ok */ }   // v626: wind off when the match ends
    if (this.trainG) { this.group.remove(this.trainG); this.trainG = null; } if (this.tbar) { this.tbar.remove(); this.tbar = null; } if (this.tx) { this.tx.remove(); this.tx = null; } this.stations = null;   // v442
    for (const [, a] of this.bots) { this.group.remove(a.g); a.m.dispose && a.m.dispose(); } this.bots.clear();
    if (this._winT || this._winAt) { clearTimeout(this._winFade); if (this._fadeEl) { this._fadeEl.remove(); this._fadeEl = null; } clearTimeout(this._winT); this._winT = 0; this._winAt = 0; cancelWinSong(); }
    if (this._jtTimer) { clearInterval(this._jtTimer); this._jtTimer = 0; } for (const [, g] of this.mates) { if (g.tg) this.group.remove(g.tg); if (g.bd) this.group.remove(g.bd); this.group.remove(g.m.group); this.group.remove(g.ch); g.m.dispose && g.m.dispose(); } this.mates.clear(); A.remoteEngineStop && A.remoteEngineStop(); A.remoteHorn && A.remoteHorn(false); if (this.R.mateCars) this.R.mateCars.clear();
    for (const [, l] of this.loot) this.group.remove(l.g); this.loot.clear(); for (const [, sm] of this.dsm) this.group.remove(sm.g); this.dsm.clear(); for (const q of this.tr) this.group.remove(q); this.tr.length = 0;
    this.down = false; this.reviving = null; if (this.reviveBtn) this.reviveBtn.style.display = 'none'; this.spec = null; this.specHide();
    if (this.bw) { this.group.remove(this.bw); for (const q of this.bombs) this.group.remove(q.m); this.bw = null; this.bombs = null; } if (this.airs) { for (const a of this.airs) { this.group.remove(a.plane); this.group.remove(a.crate); } A.planeSound(null); this.airs = null; } this._bk = -1; this._bmsg = 0;
    zoneFx(false); zoneNear(0, 0, false); if (this.zw) { this.group.remove(this.zw); this.zw = null; } if (this.zl) { this.group.remove(this.zl); this.zl = null; } this.Z = null; this.z = null; if (this.R.minimap) { this.R.minimap.zone = null; this.R.minimap.droidPin = null; this.R.minimap.bomb = null; this.R.minimap.air = null; }
    if (this._dnEl) { this._dnEl.style.display = 'none'; this._dnTx = ''; } if (this.R.minimap) this.R.minimap.downs = [];   /* v589: the red 'TEAMMATE IS DOWN' banner (+ map pin) must go when the match ends / you leave / a new game starts */
    this.endDrop(); this.sim = null; this.on = false; this.group.visible = false; if (this.R.world && this.R.world.group) this.R.world.group.visible = !this.R.jang; this.showHud(false); document.body.classList.remove('jang-fight'); this._fight = null; if (this.slotEl) this.slotEl.style.display = 'none'; if (this.tipEl) { this.tipEl.style.display = 'none'; this._tipOn = false; } A.setCommentary(OPT.punjabi !== false);
  }
  // back to the city (the mission is over for everybody): the backpack is emptied, the saved weapons come back, you stand outside the mission lobby
  leave() {
    if (this.edgeEl) this.edgeEl.style.display = 'none'; if (this.glideEl) this.glideEl.style.display = 'none'; if (this.ddEl) this.ddEl.style.display = 'none'; this._ddOn = false; clearTimeout(this._songT); this._songT = 0;
    if (this.hitRing) { this.hitRing.remove(); this.hitRing = null; this.hitArr = []; }
    if (this.chuteBadge) { this.chuteBadge.remove(); this.chuteBadge = null; } this.ownChute = false;
    this.gate = false;
    if (!this.on && !(this.R.wallet && this.R.wallet.cb)) { this.clear(); return; }
    const R = this.R, b = R.me.body; this.clear();
    if (R.wallet) { R.wallet.cb = null; if (R.weapon && !R.wallet.owns(R.weapon)) R.weapon = null; R.syncAct && R.syncAct(); R.updateAmmoHud && R.updateAmmoHud(); }
    const x = LOBBY.x, z = LOBBY.z + LOBBY.d / 2 + 3.5; b.x = x; b.z = z; b.y = (R.world && R.world.terrain ? R.world.terrain(x, z) : 0) + 0.05; b.vx = b.vz = b.vy = 0; b.stun = 0; R.camInit = false;
  }
  // ---------------------------------------------------------------- the drop: a transport plane flies over the island, you jump, free-fall and open the parachute
  loadPlane() {
    if (this.planeP) return this.planeP;
    return this.planeP = track(new Promise((res) => mkLoader().load(av('models/c130.glb'), (g) => {
      const inner = g.scene; inner.position.set(3.83, 0, -4.73); const w = new THREE.Group(); w.add(inner); w.rotation.y = 0.9235; this.planeProps = [];   // the scan faces the wrong way: turn the nose to +Z, centre it
      const COL = (n) => /FUZEL/.test(n) ? '#e4e9f2' : /KRIL|OPER|Object05|NGon|Box09/.test(n) ? '#27478a' : /KIL/.test(n) ? '#27478a' : /Cylinder0[12]/.test(n) ? '#aab3c4' : '#c9d0dd';
      inner.updateMatrixWorld(true);
      inner.traverse((o) => { if (!o.isMesh) return; let p = o; while (p.parent && p.parent !== inner.children[0] && p.parent !== inner) p = p.parent; const nm = p.name || o.name; const m = new THREE.MeshStandardMaterial({ color: COL(nm), roughness: 0.55, metalness: 0.25 }); if (o.material) { (Array.isArray(o.material) ? o.material : [o.material]).forEach((q) => { if (q.map) q.map.dispose(); q.dispose(); }); } o.material = m; o.castShadow = false; });   // flat paint: no insignia from the scan
      const E = [['Cone09', 'Cylinder15', 'Cylinder16', 'Cylinder17', 'Cylinder18'], ['Cone08', 'Cylinder11', 'Cylinder12', 'Cylinder13', 'Cylinder14'], ['Cone04', 'Cylinder03', 'Cylinder04', 'Cylinder05', 'Cylinder06'], ['Cone05', 'Cylinder07', 'Cylinder08', 'Cylinder09', 'Cylinder10']];
      w.updateMatrixWorld(true);
      for (const names of E) { const nodes = names.map((n) => inner.getObjectByName(n)).filter(Boolean); if (!nodes.length || !nodes[0]) continue;
        const bb = new THREE.Box3().setFromObject(nodes[0]), c = bb.getCenter(new THREE.Vector3()); const pv = new THREE.Group(); pv.position.copy(w.worldToLocal(c.clone())); w.add(pv); pv.updateMatrixWorld(true); for (const nd of nodes) pv.attach(nd); this.planeProps.push(pv); }
      buildCabin(w, inner);
      w.scale.setScalar(1.25); res(w);
    }, undefined, () => res(null))), 'PLANE');
  }
  // v220: called behind the loading screen: waits for every file, builds the bots, then draws EVERYTHING once off-screen (shaders compiled, textures + models uploaded to the graphics card),
  // so nothing is compiled or uploaded while you play (that was the stutter when a gun, bot or the plane first came into view)
  prepare() {
    const R = this.R;
    return Promise.race([Promise.all([preloadAssets('jang'), this.loadPlane()]), new Promise((r) => setTimeout(r, /Android/i.test(navigator.userAgent || '') ? 8000 : 25000))]).catch(() => {}).then(() => Promise.race([preloadProps(), new Promise((r) => setTimeout(r, 20000))])).catch(() => {}).then(() => { try { loadScreen.stage('BOTS'); this.refreshMap();   /* v503: the tower ladders and walls are part of the map: wait for the small prop files even if the big preload timed out */  this._icons = null; for (const [, l] of this.loot) this.group.remove(l.g); this.loot.clear(); } catch (e) { /* ignore */ }   /* v392: anything built before the item models arrived (grey stand-in boxes, blank icons) is rebuilt with the real GLB models */ try { if (this.sim && this.on) for (const s of this.sim.bots) this.bot(s); } catch (e) { /* ignore */ } return new Promise((res) => setTimeout(res, 250)); }).then(() => { if (!(this.R.isTouch && /Android/i.test(navigator.userAgent || '')) || !this.on) return; try { loadScreen.say('BUILDING THE MAP...'); loadScreen.stage('MAP'); } catch (e) { /* ignore */ } return new Promise((res) => setTimeout(res, 60)).then(() => { try { this.ensureMap(); } catch (e) { console.warn('map build', e); } }).then(() => new Promise((res) => setTimeout(res, 60))); }).then(() => {   // (the soldiers attach their model a moment after they are created)
      try {
        if (!this.sim || !this.on) return;
        const vis = []; const show = (o) => { if (o) { vis.push([o, o.visible]); o.visible = true; } };
        for (const [, l] of this.loot) show(l.g); for (const [, a] of this.bots) show(a.g); show(this.plane);
        if (this.plane && !this.plane.children.length) this.loadPlane().then((w) => { if (w && this.plane && !this.plane.children.length) this.plane.add(w); });
        try { loadScreen.say('PREPARING GRAPHICS...'); loadScreen.stage('GRAPHICS'); } catch (e) { /* ignore */ }
        try { while (this.tr.length < 8) { const q = new THREE.Mesh(TR_GEO || (TR_GEO = new THREE.BoxGeometry(0.04, 0.04, 1)), TR_MAT || (TR_MAT = new THREE.MeshBasicMaterial({ color: '#ffd978', transparent: true, opacity: 0.9 }))); q.visible = false; this.group.add(q); this.tr.push(q); } } catch (e) { /* tracers are made on demand anyway */ }   // v481: the bullet tracers exist (and their shader is compiled) before the first shot
        const wu = R.warmUp(); if (wu && wu.then) return Promise.race([wu, new Promise((r) => setTimeout(r, 25000))]).catch(() => {}).then(() => { for (const [o, v] of vis) o.visible = v; });   // v475: on Android the shaders compile in parallel without freezing the phone
        for (const [o, v] of vis) o.visible = v;
      } catch (e) { console.warn('warm-up skipped', e); }
    });
  }
  refreshMap() {   /* v503: the match can begin before the small prop files (ladders, walls) have arrived: the map was then built with stand-in boxes; behind the loading screen it is rebuilt once with the real models */
    if (!this.map || this.map.propsOk || !hasProp('ladder')) return; const old = this.map, R = this.R;
    try { this.group.remove(old.group); old.group.traverse((o) => { if (o.geometry) o.geometry.dispose(); }); this.map = null; this.glass = null; this.ensureMap(); if (this.map && R.me && R.me.body) this.map.warm(R.me.body); } catch (e) { console.warn('map refresh', e); }
  }
  ensureMap() {   // v452: the landscape is built once; on Android it is built behind the loading screen (not at the first frame of the match, which froze weak phones at 94%)
    const R = this.R; if (this.map) return;
    const t0 = performance.now(); this.map = buildBattleMap(R.isTouch ? 0 : 2); this.buildMs = Math.round(performance.now() - t0); this.group.add(this.map.group); try { R.setFar && R.setFar(); } catch { /* noop */ }
    try { this.glass = new Glass(this.map.group, layout().buildings, R.isTouch ? 0 : 2, R.camera, R.particles); } catch (e) { this.glass = null; }
  }
  /* v501 LATE-LIFE KIT (solo): a life that starts when the match is already old no longer comes back empty-handed into 10+ bots. More than 10 min left: nothing (loot as usual). 5-10 min left: a pistol + 2 bandages. 5 min or less: an M4 + a pistol, ammo, 3 bandages, vest, helmet, 2 grenades. */
  giveKit() {
    const R = this.R, cb = R.wallet && R.wallet.cb, left = this.time; if (!cb || !(left < 600)) return; const full = left <= 300;
    const gun = (w, packs) => { const S = WEAPONS[w]; if (!S) return false; cb.owned[w] = true; cb.mag[w] = S.mag; cb.ammo[w] = Math.max(90, (S.ammoPack || 30) * packs); return true; };
    const got = [];
    if (full) { if (gun('m4', 2)) got.push('M4'); if (gun('pistol', 1)) got.push('PISTOL'); cb.inv.med = 3; cb.inv.vest = Math.max(1, cb.inv.vest | 0); cb.vestHp = 220; cb.inv.helmet = Math.max(1, cb.inv.helmet | 0); cb.helmHp = 60; cb.nades = 2; got.push('3 BANDAGES', 'VEST', 'HELMET', '2 GRENADES'); }
    else { if (gun('pistol', 2)) got.push('PISTOL'); cb.inv.med = 2; got.push('2 BANDAGES'); }
    const first = full ? 'm4' : 'pistol'; if (cb.owned[first]) R.equip && R.equip(first);
    R.syncAct && R.syncAct(); R.updateAmmoHud && R.updateAmmoHud(); this.updateHud(); if (this.inv) this.inv.render && this.inv.render();
    R.toast && R.toast('LATE-MATCH KIT: ' + got.join(' + '), 5);
  }
  startDrop() {
    const R = this.R, b = R.me.body, T = R.jangTeam, rr = (k) => { const x = Math.sin((T ? T.seed : 0) * 12.9898 + k * 78.233) * 43758.5453; return x - Math.floor(x); };   // team match: the whole room shares one flight line, the second team gets its own plane flying the other way
    const a0 = T ? rr(1) * Math.PI * 2 : Math.random() * Math.PI * 2, tn = T ? T.tm | 0 : 0, a = tn === 1 ? a0 + Math.PI : tn === 2 ? a0 + Math.PI / 2 : tn === 3 ? a0 + Math.PI * 1.5 : a0, hd = [Math.sin(a), Math.cos(a)], off0 = T ? (rr(2) - 0.5) * 240 : (Math.random() - 0.5) * 240, off = tn === 1 ? -off0 * 0.6 + 40 : tn === 2 ? off0 * 0.4 - 30 : tn === 3 ? -off0 * 0.3 - 50 : off0, L = 760;
    const cx = CMB.x - hd[1] * off, cz = CMB.z + hd[0] * off;   // a straight line across the island, a little off centre
    this.drop = { ph: 'plane', t: 0, hd, a, sx: cx - hd[0] * L / 2, sz: cz - hd[1] * L / 2, L, v: 34, alt: 300, vx: 0, vz: 0, hint: 0, ch: 0 };
    this.dropping = true; this.dropPose = 0; if (window.phVoiceUI) window.phVoiceUI();
    if (!this.plane) { this.plane = new THREE.Group(); this.group.add(this.plane); }
    this.plane.visible = true; this.plane.clear(); this.loadPlane().then((w) => { if (w && this.plane && this.drop) { this.plane.clear(); this.plane.add(w); } });
    this.placeDrop(0); b.vx = b.vz = b.vy = 0; b.grounded = false; R.camInit = false; R.camYaw = a; R.toast && R.toast('✈ move (W / joystick) to stand up, walk to the back door and press JUMP', 4);
  }
  placeDrop(t) { const d = this.drop, b = this.R.me.body; const x = d.sx + d.hd[0] * d.v * t, z = d.sz + d.hd[1] * d.v * t;
    if (this.plane) { this.plane.position.set(x, d.alt, z); this.plane.rotation.y = d.a; }
    if (d.ph === 'plane') { b.x = x; b.y = d.alt - 1.2; b.z = z; b.yaw = d.a; } }
  stepDrop(dt, inp, b) {   // called by the main loop instead of the ground physics while dropping
    const d = this.drop; if (!d) { this.dropping = false; return; }
    if (this.gate) { dt = 0; if (inp) inp.jumpPressed = false; this.jumpReq = false; }   // v296: held while loading
    const R = this.R, g = R.me.model && R.me.model.group; d.t += dt;
    if (this.plane && this.planeProps) for (const pv of this.planeProps) { pv.rotation.z += dt * 38; pv.visible = d.ph !== 'plane'; }   // v211: the propeller blades are not drawn while you stand inside the cabin
    if (d.ph === 'plane') {
      this.placeDrop(d.t); if (g) g.visible = true; const w = this.plane && this.plane.children[0]; if (w && w.userData.scan) { w.userData.scan.visible = false; w.userData.cabin.visible = true; }
      const ml = Math.hypot(inp.mx, inp.mz), sd = w && w.userData.seat, rampOpen = Math.max(0, Math.min(1, (d.t - DOOR_T) / 1.8));   // v301: the cargo ramp swings down over 1.8 s after the countdown (v632: 3 s, was 6 s)
      if (!d.stand && ml > 0.25 && d.t > 0.6) { d.stand = true; d.lu = -1.1; d.lv = -1.0; R.toast && R.toast('WALK to the back door, then tap JUMP', 3.5); }   // get up and walk
      if (d.stand && w) {   // walking in the cabin: the plane's own frame (u along the fuselage, v across), the body keeps the floor
        const ca = Math.cos(d.a), sa = Math.sin(d.a), spd = 4.4, du = (inp.mx * d.hd[0] + inp.mz * d.hd[1]) * spd * dt / 1.25, dv = (inp.mx * ca - inp.mz * sa) * spd * dt / 1.25;
        d.lu = Math.max(rampOpen >= 1 ? -10.6 : -7.9, Math.min(5.4, d.lu + du)); d.lv = Math.max(-1.0, Math.min(1.0, d.lv + dv));
        this.plane.updateMatrixWorld(true); const v = w.localToWorld(new THREE.Vector3(d.lv, -0.49 - Math.max(0, -8.3 - d.lu) * 0.2, d.lu)); b.x = v.x; b.y = v.y; b.z = v.z; b.grounded = true; this.dropPose = 0;
        b.vx = ml > 0.1 ? inp.mx * spd : 0; b.vz = ml > 0.1 ? inp.mz * spd : 0; if (ml > 0.1) d.fy = Math.atan2(inp.mx, inp.mz); else { const aw = d.a + Math.PI; if (d.fy === undefined) d.fy = aw; let df = aw - d.fy; df = Math.atan2(Math.sin(df), Math.cos(df)); d.fy += df * Math.min(1, dt * 5); } b.yaw = d.fy;   /* v652: standing still in the plane he turns his BACK to the camera (placeDrop used to leave him facing it) */
      } else if (sd) { b.grounded = false; this.dropPose = 3; this.plane.updateMatrixWorld(true); const v = sd.getWorldPosition(new THREE.Vector3()), so = ((this.R.jangTeam ? this.R.jangTeam.si : 0) - 1.5) * 0.6; b.x = v.x + d.hd[0] * so; b.y = v.y - 0.3; b.z = v.z + d.hd[1] * so; b.yaw = d.a + Math.PI; b.vx = b.vz = 0; }   // v316: sitting on the left bench, facing the back door (the camera looks that way too)
      const open = d.t >= DOOR_T; if (w && w.userData.door) w.userData.door.visible = rampOpen < 0.05; if (w && w.userData.ramp) { const e = rampOpen * rampOpen * (3 - 2 * rampOpen); w.userData.ramp.rotation.x = Math.PI / 2 + (-0.2 - Math.PI / 2) * e; }   // v182: the back door opens by itself after 3 s (v632) - nobody can dive before that
      { if (!this.doorEl) { const e = document.createElement('div'); e.style.cssText = 'position:fixed;left:50%;top:max(44px,7vh);transform:translateX(-50%);z-index:31;pointer-events:none;font:800 14px/1.2 system-ui,sans-serif;color:#fff;background:rgba(0,0,0,.45);border-radius:10px;padding:5px 12px;text-shadow:0 1px 2px #000;white-space:nowrap'; document.body.appendChild(e); this.doorEl = e; }
        const t = open ? (d.stand ? 'DOOR OPEN  -  GO TO THE BACK AND DIVE' : 'DOOR OPEN  -  WALK TO THE BACK DOOR, THEN DIVE') : 'DOOR OPENS IN ' + Math.ceil(DOOR_T - d.t); if (this.doorEl.textContent !== t) this.doorEl.textContent = t; this.doorEl.style.display = 'block'; }
      const dist = d.v * d.t, atDoor = d.stand && d.lu < -8.0 && rampOpen >= 1;
      { const jb = document.getElementById('a-jump'); if (jb) jb.classList.toggle('ready', !!atDoor); } if (this.jumpReq) { inp.jumpPressed = true; this.jumpReq = false; } if (this.jumpBtn) { this.jumpBtn.style.display = 'flex'; this.jumpBtn.style.borderColor = atDoor ? '#6dff8a' : '#fffd'; this.jumpBtn.style.background = atDoor ? 'rgba(30,140,60,.75)' : 'rgba(20,24,20,.62)'; }
      if (inp.jumpPressed && dist > 40 && !atDoor) { d.hint = (d.hint || 0) + 1; R.toast && R.toast(d.stand ? 'Go to the back door and dive' : 'Walk to the back door, then DIVE', 2.5); }
      if ((inp.jumpPressed && dist > 40 && atDoor) || dist > d.L - 20) {   // out of the plane
        d.ph = 'fall'; this.dropPose = 1; if (this.doorEl) this.doorEl.style.display = 'none'; { const jb = document.getElementById('a-jump'); if (jb) jb.classList.remove('ready'); } if (this.jumpBtn) this.jumpBtn.style.display = 'none'; if (w && w.userData.scan) { w.userData.scan.visible = true; w.userData.cabin.visible = false; } b.y += 0.6; d.vx = d.hd[0] * d.v * 0.7; d.vz = d.hd[1] * d.v * 0.7; b.vy = 0; R.camInit = false; }
      return;
    }
    if (this.plane) { this.plane.position.x += d.hd[0] * d.v * dt; this.plane.position.z += d.hd[1] * d.v * dt; if (d.t > 40) this.plane.visible = false; }
    if (d.tw) { this.stepGlide(dt, inp, b); return; }
    const gy = cmbH(b.x - CMB.x, b.z - CMB.z), h = b.y - gy;
    if (d.ph === 'fall' && (inp.jumpPressed && d.t > (d.mt || 1.2) || h < (d.oh || 110))) { const sp0 = Math.hypot(d.vx, d.vz); d.ph = 'chute'; d.ch = 0; d.tw = true; d.air = true; d.gh = sp0 > 3 ? Math.atan2(d.vx, d.vz) : b.yaw; d.sp = Math.max(9, Math.min(20, sp0)); d.bank = 0; this.R.toast && this.R.toast(this.R.isTouch ? 'PARAFOIL OPEN - steer with the stick, DIVE = faster, PULL UP = brakes' : 'PARAFOIL OPEN - steer with A / D, Shift = DIVE (faster), C = brakes', 3.5); this.stepGlide(dt, inp, b); return; }   // v630: the parafoil (a ram-air wing) opens by hand or automatically at 110 m: from here on the same flight as the tower paraglider (air-tuned)
    this.diveUI(d.ph === 'fall' || d.ph === 'chute'); const dv = (this.diveHold.dive || inp.sprint ? 1 : 0) - (this.diveHold.up ? 1 : 0); d.dvv = dv; d.tilt = (d.tilt || 0) + ((d.ph === 'fall' ? (dv > 0 ? 1.05 : dv < 0 ? 0 : 0.2) : 0) - (d.tilt || 0)) * Math.min(1, dt * 5);   /* v630: Shift OR sprint = DIVE */   // v234: PUBG-style: DIVE (Shift) = head down, faster; PULL UP (C) = flare, slower and floating
    const free = d.ph === 'fall'; const maxH = (free ? 26 : 12) * (dv > 0 ? (free ? 1.45 : 1.8) : dv < 0 ? 0.55 : 1), ml = Math.hypot(inp.mx, inp.mz);
    const tx = inp.mx * maxH, tz = inp.mz * maxH, k = Math.min(1, dt * (free ? 1.6 : 1.1)); d.vx += (tx - d.vx) * k; d.vz += (tz - d.vz) * k;
    const vyT = free ? (dv > 0 ? -78 : dv < 0 ? -34 : -52) : (dv > 0 ? -15 : dv < 0 ? -3.6 : -6.5); b.vy += (vyT - b.vy) * Math.min(1, dt * (free ? 1.1 : 1.7)); if (free && dv >= 0) b.vy -= 9 * dt * (b.vy > -40 ? 1 : 0);
    const py = b.y, Lm = layout(); let nx = b.x + d.vx * dt, nz = b.z + d.vz * dt;
    { const hs = hitsSolid(Lm, nx - CMB.x, nz - CMB.z, 0.38, py); if (hs && hs.k !== 'tree' && hs.k !== 'roof' && hs.k !== 'floor') { nx = b.x; nz = b.z; d.vx *= 0.2; d.vz *= 0.2; } }   // the chute cannot go through a wall
    b.x = nx; b.z = nz; b.y += b.vy * dt; b.vx = d.vx; b.vz = d.vz; b.grounded = false; if (ml > 0.1 || Math.hypot(d.vx, d.vz) > 3) b.yaw = Math.atan2(d.vx, d.vz);
    this.dropPose = free ? 1 : 2;
    const gy2 = Math.max(gy, supportY(Lm, b.x - CMB.x, b.z - CMB.z, 0.3, py));   // land on a roof or a crate, not through it
    if (b.y <= gy2 + 0.05) { b.y = gy2 + 0.05; b.vy = 0; b.vx = d.vx * 0.3; b.vz = d.vz * 0.3; b.grounded = true; this.endDrop(true); return; }
    this.chuteVis(d.ph === 'chute', b, dt);
  }
  glideUI(show) {   // v379: the parafoil icon: a big tap button on a phone, a small "press JUMP" box (with the icon) on a laptop
    if (!this.glideEl) {
      const e = document.createElement('button'); e.id = 'c-glide'; const touch = !!this.R.isTouch;
      const svg = '<svg viewBox="0 0 64 64" width="' + (touch ? 46 : 40) + '" height="' + (touch ? 46 : 40) + '" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 27C8 9 24 4 32 4s24 5 27 23c-3-5-8-6-12-3-3-4-9-4-15-4s-12 0-15 4c-4-3-9-2-12 3z" fill="#fff"/><path d="M6 28 30 50M16 25 31 50M32 22V50M48 25 33 50M58 28 34 50"/><circle cx="32" cy="53" r="2.6" fill="#fff"/><path d="M32 56v4M29 60l3-3 3 3"/></svg>';
      e.innerHTML = svg + (touch ? '<b>PARAGLIDE</b>' : '<b>PRESS JUMP (SPACE)<br>TO DEPLOY PARAGLIDER</b>');
      e.style.cssText = touch ? 'position:fixed;right:27vw;bottom:calc(16vh + 4px);z-index:46;display:none;flex-direction:column;align-items:center;justify-content:center;gap:2px;width:92px;height:92px;border-radius:50%;border:3px solid #6dff8a;background:rgba(20,70,35,.78);color:#fff;font:800 10px system-ui,sans-serif;touch-action:none;cursor:pointer;animation:glidePulse 0.9s ease-in-out infinite'
        : 'position:fixed;left:50%;top:max(120px,22vh);transform:translateX(-50%);z-index:70;display:none;flex-direction:row;align-items:center;gap:12px;padding:10px 18px;border-radius:12px;border:3px solid #6dff8a;background:rgba(20,70,35,.88);color:#fff;font:800 16px/1.25 system-ui,sans-serif;text-align:left;pointer-events:none';
      if (touch) { const dn = (ev) => { ev.preventDefault(); ev.stopPropagation(); this.jumpReq = true; }; e.addEventListener('pointerdown', dn); e.addEventListener('contextmenu', (ev) => ev.preventDefault()); }
      if (!document.getElementById('glide-css')) { const s = document.createElement('style'); s.id = 'glide-css'; s.textContent = '@keyframes glidePulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}'; document.head.appendChild(s); }
      document.body.appendChild(e); this.glideEl = e;
      if (window.phApplyLayout) setTimeout(window.phApplyLayout, 0);
    }
    const sh = show ? (this.R.isTouch ? 'flex' : 'flex') : 'none'; if (this.glideEl.style.display !== sh) this.glideEl.style.display = sh;
  }
  /* v377: the paraglider is back as a CHOICE: fall off a TOWER (more than ~6 m above the ground, falling; roofs do not count) and tap the PARAGLIDE icon (phone) / press JUMP (laptop) in the air to open the flag wing; if you do not, the fall still hurts as before (v357). Returns true on the frame it opens. */
  glideCheck(b, inp, dt) {
    const off = () => { this._gt = 0; this._gHint = false; if (this.glideEl && this.glideEl.style.display !== 'none') this.glideUI(false); return false; };
    if (b.grounded && this.on) { const ox0 = b.x - CMB.x, oz0 = b.z - CMB.z; let on = false; for (const t of layout().towers || []) if (Math.abs(ox0 - t.x) < TW.O + 4.5 && Math.abs(oz0 - t.z) < TW.O + 4.5 && b.y > t.gy + 5) { on = true; break; } this._onTower = on; }   // v379: the paraglider is for the TOWERS only (PUBG): remember whether the last place you stood was up a tower
    if (!this._onTower) return off();
    if (!this.on || this.dropping || this.down || this.hp <= 0 || this.deadT > 0 || this.over || this.gate || b.grounded || b.inWater || b.swim || this.R.drive || this.R.hang || this.R.zipR || this.R.ladR) return off();
    const ox = b.x - CMB.x, oz = b.z - CMB.z, gy = Math.max(cmbH(ox, oz), supportY(layout(), ox, oz, 0.3, b.y)), h = b.y - gy;
    if (b.vy > -4 || h < 6) return off();
    this._gt = (this._gt || 0) + dt; if (this._gt > 0.2 && !this._gHint) { this._gHint = true; this.R.toast && this.R.toast(this.R.isTouch ? 'Tap the PARAGLIDE icon to open the parafoil' : 'Press JUMP (SPACE) to deploy the parafoil', 2.5); }
    if (!inp.jumpPressed && !this.jumpReq) { if (this._gt > 0.2) this.glideUI(true); return false; }
    inp.jumpPressed = false; this.jumpReq = false; this.glideUI(false); const sp0 = Math.hypot(b.vx || 0, b.vz || 0);
    this.drop = { ph: 'chute', tw: true, t: 0, mt: 0.45, oh: 18, hd: [0, 1], a: 0, sx: b.x, sz: b.z, L: 0, v: 0, alt: 0, vx: b.vx || 0, vz: b.vz || 0, hint: 0, ch: 0, gh: sp0 > 1 ? Math.atan2(b.vx, b.vz) : b.yaw, sp: Math.max(6, Math.min(13, sp0 + 4)), bank: 0 };
    this.dropping = true; this.dropPose = 2; b.vy = Math.max(b.vy, -6); this.R.camInit = false; this.R.toast && this.R.toast('PARAGLIDER OPEN - steer with the stick, DIVE = faster, PULL UP = brakes', 3.5); return true;
  }
  /* v257: the TOWER PARAGLIDER (a ram-air wing): it opens at once, flies forward all the time, the stick turns it, DIVE = speed bar (fast, steep), PULL UP = brakes (slow, shallow). Trim 13 m/s forward at 2 m/s down = glide ratio 6.5: a 43 m tower reaches ~280 m */
  stepGlide(dt, inp, b) {
    const d = this.drop, Lm = layout(), dv = (this.diveHold && (this.diveHold.dive || inp.sprint) ? 1 : 0) - (this.diveHold && this.diveHold.up ? 1 : 0), ml = Math.hypot(inp.mx, inp.mz);
    this.diveUI(true); d.dvv = dv; d.tilt = (d.tilt || 0) * (1 - Math.min(1, dt * 5));
    let turn = 0; if (ml > 0.15) { let df = Math.atan2(inp.mx, inp.mz) - d.gh; df = Math.atan2(Math.sin(df), Math.cos(df)); turn = Math.max(-1, Math.min(1, df * 1.6)); d.gh += turn * 1.25 * dt; }
    d.bank += (turn - d.bank) * Math.min(1, dt * 3);
    const air = !!d.air, spT = air ? (dv > 0 ? 21 : dv < 0 ? 9 : 14) : (dv > 0 ? 19 : dv < 0 ? 8.5 : 13), sinkT = (air ? (dv > 0 ? 12 : dv < 0 ? 2.8 : 5.2) : (dv > 0 ? 9.5 : dv < 0 ? 1.2 : 2.0)) * (1 + 0.5 * Math.abs(d.bank));   // v630: out of the plane the wing is steeper (glide ratio ~2.7: from 110 m about 300 m of flight); off a tower it keeps 6.5
    d.sp += (spT - d.sp) * Math.min(1, dt * 1.1); b.vy += (-sinkT - b.vy) * Math.min(1, dt * (dv > 0 ? 4 : 2.2));
    d.vx = Math.sin(d.gh) * d.sp; d.vz = Math.cos(d.gh) * d.sp;
    const py = b.y; let nx = b.x + d.vx * dt, nz = b.z + d.vz * dt;
    { const hs = hitsSolid(Lm, nx - CMB.x, nz - CMB.z, 0.38, py); if (hs && hs.k !== 'tree' && hs.k !== 'roof' && hs.k !== 'floor') { nx = b.x; nz = b.z; d.sp *= 0.35; } }
    b.x = nx; b.z = nz; b.y += b.vy * dt; b.vx = d.vx; b.vz = d.vz; b.grounded = false; b.yaw = d.gh; this.dropPose = 2;
    const gy = cmbH(b.x - CMB.x, b.z - CMB.z), gy2 = Math.max(gy, supportY(Lm, b.x - CMB.x, b.z - CMB.z, 0.3, py));
    if (b.y <= gy2 + 0.05) { b.y = gy2 + 0.05; b.vy = 0; b.vx = d.vx * 0.3; b.vz = d.vz * 0.3; b.grounded = true; this.endDrop(true); return; }
    this.chuteVis(true, b, dt);
  }
  myName() { try { const n = (localStorage.getItem('ph_name') || '').trim().toUpperCase().slice(0, 14); return n || 'HARIS'; } catch { return 'HARIS'; } }   // v271: the player's own name goes on his parachute / paraglider
  /* v630: PARAFOIL colours: every player / teammate / the droid has his own wing (picked from his id): plain colours with panel stripes, the Pakistan flag, and 5 camouflages (woodland, dark forest, desert, urban digital, snow). One 512x160 canvas each (the same cost as before). */
  mkGlider(nm = this.myName(), seed) {
    const g = new THREE.Group(), cv = document.createElement('canvas'); cv.width = 512; cv.height = 160; const c = cv.getContext('2d');
    let h = 2166136261; for (const ch of String(seed === undefined ? (this.R.localId || nm) : seed)) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } h >>>= 0;
    let rs = h || 1; const rnd = () => { rs = (rs + 0x6D2B79F5) | 0; let t = Math.imul(rs ^ (rs >>> 15), 1 | rs); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    const W = WING_STYLES[h % WING_STYLES.length];
    if (W.k === 'flag') {   /* the PAKISTAN FLAG: green, white hoist stripe, crescent and star */
      c.fillStyle = '#01411c'; c.fillRect(0, 0, 512, 160); c.save(); c.scale(1, 0.7); c.fillStyle = '#fff'; c.fillRect(0, 0, 128, 160);
      c.beginPath(); c.arc(318, 80, 56, 0, 7); c.fill(); c.fillStyle = '#01411c'; c.beginPath(); c.arc(340, 70, 49, 0, 7); c.fill();
      c.fillStyle = '#fff'; c.beginPath(); for (let i = 0; i < 10; i++) { const r = i % 2 ? 11 : 27, a = -Math.PI / 2 + i * Math.PI / 5 + 0.5; c.lineTo(386 + Math.cos(a) * r, 52 + Math.sin(a) * r); } c.closePath(); c.fill(); c.restore();
    } else if (W.k === 'solid') {   /* a plain wing: one colour, a centre band in the second colour, the cell seams of a real parafoil */
      c.fillStyle = W.a; c.fillRect(0, 0, 512, 160); c.fillStyle = W.b; c.fillRect(204, 0, 104, 160); c.fillRect(0, 0, 512, 14);
      c.strokeStyle = 'rgba(0,0,0,.28)'; c.lineWidth = 3; for (let x = 28; x < 512; x += 57) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, 160); c.stroke(); }
    } else {   /* camouflage: blotches (woodland, desert, snow) or small squares (urban digital) from the id */
      c.fillStyle = W.base; c.fillRect(0, 0, 512, 160);
      for (let n = 0; n < (W.k === 'dig' ? 260 : 46); n++) { c.fillStyle = W.c[(rnd() * W.c.length) | 0]; const x = rnd() * 512, y = rnd() * 160;
        if (W.k === 'dig') c.fillRect((x / 16 | 0) * 16, (y / 10 | 0) * 10, 16 + (rnd() < 0.4 ? 16 : 0), 10 + (rnd() < 0.3 ? 10 : 0));
        else { c.beginPath(); c.ellipse(x, y, 16 + rnd() * 30, 9 + rnd() * 16, rnd() * 3.14, 0, 7); c.fill(); } }
      c.strokeStyle = 'rgba(0,0,0,.22)'; c.lineWidth = 3; for (let x = 28; x < 512; x += 57) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, 160); c.stroke(); }
    }
    c.fillStyle = '#ffd23f'; c.strokeStyle = '#000'; c.lineWidth = 7; c.font = '900 ' + fitPx(c, nm, 62, 440) + 'px Impact, Arial Black, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.strokeText(nm, 256, 130); c.fillText(nm, 256, 130);   /* v258: the big name on the wing */
    const tx = new THREE.CanvasTexture(cv); tx.anisotropy = 2;
    const span = 9.4, chord = 2.9, geo = new THREE.PlaneGeometry(span, chord, 28, 6), P = geo.attributes.position;
    for (let i = 0; i < P.count; i++) { const x = P.getX(i), y = P.getY(i), u = x / (span / 2); P.setXYZ(i, x, -u * u * 1.9 + 0.3 * (1 - (y / (chord / 2)) ** 2) - (y > 0 ? 0 : 0.18 * (1 + y / (chord / 2)) * 0), y); }   // a curved wing: the tips droop, a little camber
    geo.computeVertexNormals();
    const wing = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ map: tx, side: THREE.DoubleSide })); wing.position.set(0, 4.6, 0.5); g.add(wing);
    const lp = [], V = THREE.Vector3; const top = (x, z) => { const u = x / (span / 2); return [x, 4.6 - u * u * 1.9 + 0.12, 0.5 + z]; };
    for (let k = 0; k < 9; k++) { const x = -4.1 + k * 1.025, sx = x < 0 ? -0.24 : 0.24; for (const z of [-0.9, 0.9]) { const a = top(x, z); lp.push(a[0], a[1], a[2], sx, 1.62, 0.02); } }
    const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(lp, 3)); g.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0xe8e4d6 })));
    const hm = new THREE.MeshStandardMaterial({ color: '#23262b', roughness: 0.8 }); for (const sx of [-1, 1]) { const sb = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.55, 0.3), hm); sb.position.set(sx * 0.21, 1.4, 0); g.add(sb); }
    return g;
  }
  diveUI(on) {
    if (!this.diveHold) { this.diveHold = { dive: false, up: false };
      const mk = (id, txt, svg, bot, key) => { const e = document.createElement('button'); e.id = id; const kc = (typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches) ? '' : '<i style="font-style:normal;font:800 10px system-ui,sans-serif;background:#ffd23f;color:#111;border-radius:4px;padding:0 5px;margin-top:2px">' + (key === 'dive' ? 'SHIFT' : 'C') + '</i>'; e.innerHTML = svg + '<b>' + txt + '</b>' + kc;   /* v311: laptop players see which key does it (not shown on phones) */ e.style.cssText = 'position:fixed;right:27vw;bottom:' + bot + ';z-index:45;display:none;flex-direction:column;align-items:center;justify-content:center;gap:1px;width:78px;height:78px;border-radius:50%;border:3px solid #fffd;background:rgba(20,24,20,.62);color:#fff;font:800 11px system-ui,sans-serif;touch-action:none;cursor:pointer';
        const dn = (ev) => { ev.preventDefault(); ev.stopPropagation(); this.diveHold[key] = true; e.style.background = 'rgba(30,110,200,.8)'; }, up = () => { this.diveHold[key] = false; e.style.background = 'rgba(20,24,20,.62)'; };
        e.addEventListener('pointerdown', dn); for (const n of ['pointerup', 'pointercancel', 'pointerleave']) e.addEventListener(n, up); e.addEventListener('contextmenu', (ev) => ev.preventDefault()); document.body.appendChild(e); return e; };   // (v236: the player's own button layout applies to these too)
      this.diveBtn = mk('c-dive', 'DIVE', '<svg viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 5v20M8 17l8 10 8-10"/></svg>', 'calc(16vh + 88px)', 'dive');
      this.upBtn = mk('c-pullup', 'PULL UP', '<svg viewBox="0 0 32 32" width="26" height="26" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M16 27V7M8 15l8-10 8 10"/></svg>', '16vh', 'up');
      if (window.phApplyLayout) setTimeout(window.phApplyLayout, 0);
      const kk = (v) => (e) => { if (!this.dropping) return; if (e.key === 'Shift' || e.code === 'ShiftLeft' || e.code === 'ShiftRight') this.diveHold.dive = v; else if (e.code === 'KeyC') this.diveHold.up = v; };
      addEventListener('keydown', kk(true)); addEventListener('keyup', kk(false)); addEventListener('blur', () => { this.diveHold.dive = this.diveHold.up = false; }); }
    const sh = on ? 'flex' : 'none'; if (this.diveBtn.style.display !== sh) { this.diveBtn.style.display = this.upBtn.style.display = sh; if (!on) this.diveHold.dive = this.diveHold.up = false; }
    if (on && !this.diveHint) { this.diveHint = true; this.R.toast && this.R.toast('DIVE (Shift) = faster down  -  PULL UP (C) = slow down and glide', 4.5); }
  }
  mkChute(nm = this.myName(), seed) { return this.mkGlider(nm, seed); }   // v630: no round parachute any more - everybody (you, teammates, the droid) hangs under a PARAFOIL wing
  chuteVis(on, b, dt) {
    const d = this.drop; if (!this.glider) { this.glider = this.mkGlider(); this.group.add(this.glider); }
    const hid = !!(this.R && this.R._airSc), o = this.glider; o.visible = on && !hid; if (!on) return;   /* v586: looking through a scope in the air you are inside the soldier's head: your own wing / lines are hidden */
    d.ch = Math.min(1, d.ch + dt * 2); o.scale.setScalar(0.25 + 0.75 * d.ch); o.position.set(b.x, b.y, b.z);
    o.rotation.set(0.12, d.gh, -d.bank * 0.4 + Math.sin(this.t * 1.1) * 0.03, 'YXZ');
  }
  endDrop(landed) { if (landed && this.practice && !this._pracPlaced && this.sim && !this.shared) this.placePracticeBots(); if (landed && window.phGuide && !this.train && this.practice) window.phGuide.maybeStart(this);   /* v443: the animated guide only from the HOW TO PLAY button, never in a normal solo / team match */ this.diveHint = false; if (window.phVoiceUI) window.phVoiceUI(); if (this.glideEl) this.glideEl.style.display = 'none'; if (this.diveBtn) { this.diveBtn.style.display = this.upBtn.style.display = 'none'; this.diveHold.dive = this.diveHold.up = false; } if (this.doorEl) this.doorEl.style.display = 'none'; { const jb = document.getElementById('a-jump'); if (jb) jb.classList.remove('ready'); } if (this.jumpBtn) this.jumpBtn.style.display = "none"; this.hasChute = !!this.ownChute; if (this.glider) this.glider.visible = false; if (this.plane && !landed) this.plane.visible = false; { const d0 = this.drop; if (landed && d0 && d0.v > 0 && this.plane && this.plane.visible) this._pf = { hd: d0.hd, v: d0.v, t: d0.t }; } this.dropping = false; this.dropPose = 0; const g = this.R.me && this.R.me.model && this.R.me.model.group; if (g) g.visible = true; this.drop = null; if (landed) { this.R.camInit = false; } }
  // ---------------------------------------------------------------- the world (bots, loot)
  icon(k) {   // v258: a picture of the real model (cached)
    if (!this._icons) { if (!hasProp('syringe') || !hasProp('medkit')) return ''; this._icons = {}; try { const m = {}; for (const q of ['pistol', 'revolver', 'smg', 'ak', 'ak49', 'm4', 'shotgun', 'sniper', 'grenade', 'med', 'pills', 'inject', 'smoke', 'molotov', 'sscope', 'scope', 'ammo', 'vest', 'helmet', 'jet', 'jfuel']) m[q] = this.lootModel(q, true); this._icons = renderIcons(m); } catch (e) { this._icons = {}; } }
    return this._icons[k] || '';
  }
  lootModel(k, icon) {   // v263: ONE place builds every item's 3D model from the real GLB files (ground loot and the icons use the same thing)
    const G = { ammo: 'ammo', med: 'medkit', pills: 'pills', inject: 'syringe', grenade: 'grenade', smoke: 'grenade', molotov: 'molotov', sscope: 'scope', scope: 'smgscope', vest: 'vest', helmet: 'helmet', skin: 'vest' }[k], wrap = new THREE.Group();
    if (G && hasProp(G)) {
      const m = propModel(G, k === 'smoke' ? '#9aa6ae' : k === 'skin' ? '#5d7a34' : null); if (k === 'smoke') m.scale.multiplyScalar(1.25); if (k === 'molotov') m.scale.multiplyScalar(1.6); if (!icon && (k === 'sscope' || k === 'scope')) m.scale.multiplyScalar(0.5); wrap.add(m);   /* v300: a scope lying on the floor is half as big */
      if (!icon) { if (k === 'inject') wrap.rotation.z = Math.PI / 2; else if (k === 'med' || k === 'vest' || k === 'skin') wrap.rotation.x = -Math.PI / 2; } else if (k === 'inject') wrap.rotation.z = Math.PI / 2;
      return wrap;
    }
    if (isGunK(k) || k === 'grenade' || k === 'bat') { const mdl = makeWeaponModel(k); mdl.scale.setScalar(k === 'grenade' ? 2.2 : k === 'bat' ? 1.5 : k === 'pistol' || k === 'revolver' ? 2.4 : 1.5); if (k === 'bat') mdl.rotation.z = Math.PI / 2; else mdl.rotation.y = Math.PI / 2; return mdl; }
    if (k === 'jfuel') { const c = new THREE.Group(), body = new THREE.Mesh(GEO('Box', 0.3, 0.38, 0.14), SM('#d8402a', 0.55)); body.position.y = 0.19; c.add(body); const top = new THREE.Mesh(GEO('Box', 0.3, 0.05, 0.14), SM('#9b2a1a', 0.6)); top.position.y = 0.395; c.add(top); const sp = new THREE.Mesh(GEO('Cylinder', 0.035, 0.04, 0.09, 8), SM('#ffd23a', 0.5)); sp.position.set(0.09, 0.46, 0); c.add(sp); const hd = new THREE.Mesh(GEO('Box', 0.1, 0.06, 0.05), SM('#7b2216', 0.6)); hd.position.set(-0.07, 0.43, 0); c.add(hd); const st = new THREE.Mesh(GEO('Box', 0.31, 0.07, 0.145), SM('#ffd23a', 0.5)); st.position.y = 0.2; c.add(st); c.scale.setScalar(icon ? 1.3 : 1); wrap.add(c); return wrap; }
    if (k === 'jet') { const m = jetModel(false); m.scale.setScalar(icon ? 1.1 : 0.9); if (!icon) { m.rotation.x = -Math.PI / 2; m.position.y = 0.14; } else m.rotation.y = 0.6; wrap.add(m); return wrap; }
    wrap.add(new THREE.Mesh(GEO('Box', 0.3, 0.2, 0.3), SM('#8a8f96', 0.7))); return wrap;
  }
  syncLoot() {
    const sim = this.sim; if (!sim) return;
    for (const it of sim.loot) { if (!it.alive || this.loot.has(it.id)) continue; const g = new THREE.Group(), col = it.gold ? '#ffd23f' : LOOT_COL[it.k];
      const mdl = this.lootModel(it.k);
      const glbK = ['ammo', 'med', 'pills', 'inject', 'grenade', 'smoke', 'molotov', 'sscope', 'scope', 'vest', 'helmet', 'skin', 'jet', 'jfuel'].includes(it.k), gunish = !glbK, lay = new THREE.Group(); lay.add(mdl); if (gunish) lay.rotation.x = Math.PI / 2; const pivot = new THREE.Group(); pivot.add(lay); pivot.rotation.y = (it.id * 2.399) % 6.28; pivot.position.y = gunish ? 0.11 : (it.k === 'med' || it.k === 'vest' || it.k === 'inject' || it.k === 'skin') ? 0.09 : 0.03; g.add(pivot); g.userData.pivot = pivot;
      if (it.gold === 1) { const gb = propModel('goldbox'), hh = (propDim('goldbox') || { y: 0.3 }).y; if (gb) g.add(gb); pivot.position.y += hh + 0.02; }   // v251/v263: a dead enemy's GOLD box (the real loot box model): everything he carried lies on it
      const ring = new THREE.Mesh(GEO('Ring',0.46, 0.52, 40), RM(col, 0.75)); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.025; { const disc = new THREE.Mesh(GEO('Circle',0.46, 32), RM(col, 0.12)); disc.rotation.x = -Math.PI / 2; disc.position.y = 0.02; g.add(disc); } g.add(ring);
      if (it.gold === 1) {   // v264: a dead bot / player: a thin GREEN smoke column over his loot box (one column per box, however many items lie on it)
        const key = Math.round(it.x / 2) + ',' + Math.round(it.z / 2); let sm = this.dsm.get(key);
        if (!sm) { const sg = this.mkPuffs(new THREE.Group(), 12, 0x3be36a, 0x23b84e); sg.userData.sm = { H: 16, life: 5, s0: 0.8, s1: 3.4, drift: 3, a: 0.5 }; sg.position.set(CMB.x + it.x, (it.y !== undefined ? it.y : cmbH(it.x, it.z)) + 0.5, CMB.z + it.z); this.group.add(sg); sm = { g: sg, ids: new Set(), x: CMB.x + it.x, z: CMB.z + it.z }; this.dsm.set(key, sm); }
        sm.ids.add(it.id); }
      /* no light beam: PUBG items just lie there with a ring */
      g.position.set(CMB.x + it.x, it.y !== undefined ? it.y : Math.max(cmbH(it.x, it.z), cmbG(it.x, it.z)), CMB.z + it.z); g.traverse((o) => { if (o.isMesh) o.castShadow = false; }); g.visible = false; this.group.add(g); this.loot.set(it.id, { g, it, ph: Math.random() * 6 }); }   // loot casts no shadow (a tiny shadow under a gun nobody sees, but a whole extra draw)
  }
  tintDroid(grp) { grp.traverse((o) => { if (o.isMesh && o.material && o.material.color) { let t = _TINTD.get(o.material); if (!t) { t = o.material.clone(); t.color.multiply(new THREE.Color('#9a2c3e')); _TINTD.set(o.material, t); } o.material = t; } }); }
  /* v459: the INTELLIDROID flies WITH you: while you are in the plane / skydiving / under the parachute a copy of your flight is shown beside you (seated next to you in the plane, jumping with you, its own parachute); when you land the real droid (the server's bot) appears right beside you and stays within ~10 m */
  mimicDroid(src) {
    const T = (this.R.jangTeam || this.soloT); if (!T || !this.sim || !this.sim.bots) return; const D = this.sim.bots.find((q) => q.droid && q.dtm === T.tm); if (!D) return;
    if (!D.alive || this.respDrop) { const g = this.mates.get(-777); if (g) { this.group.remove(g.m.group); this.group.remove(g.ch); if (g.tg) this.group.remove(g.tg); this.mates.delete(-777); } return; }   /* v529: a DEAD droid is not copied onto the parachute / plane any more */
    if (src.ph === 5 || src.ph === 6) {   // v467: I drive / ride in a vehicle: INTELLIDROID rides in a free seat of the same vehicle (a passenger seat; not in a tractor, which has one seat)
      const R = this.R, car = R.cars[src.vi | 0], ci = src.vi | 0; let seat = -1;
      if (car && !car.st.wreck && (ci < 12 || ci >= 16)) { const cap = R.seatCap(car), pp = car.st.paxs || [], used = this.paxSeats(ci); if (src.ph === 6) used.push(src.ps | 0); for (let k = 0; k < cap - 1; k++) if ((pp[k] === undefined || pp[k] === -1) && !used.includes(k)) { seat = k; break; } }
      if (seat >= 0) { if (T.seatOf && T.seatOf[-777] === undefined) T.seatOf[-777] = Object.keys(T.seatOf).length; this.onMate({ ...src, ph: 6, vi: ci, ps: seat, id: -777, c: 0, sk: 4, nm: 'INTELLIDROID', tm: T.tm, x: src.x, z: src.z, al: 1, dd: 0, wp: '', ai: 0, st: 0, hn: 0, rv: 0, iv: undefined }); return; }
    }
    if (src.ph >= 4 || !this.on) { const g = this.mates.get(-777); if (g) { this.group.remove(g.m.group); this.group.remove(g.ch); if (g.tg) this.group.remove(g.tg); this.mates.delete(-777); } return; }
    if (T.seatOf && T.seatOf[-777] === undefined) T.seatOf[-777] = Object.keys(T.seatOf).length;
    const off = src.ph <= 1 ? 0 : 1.6, aw = src.ph >= 2 && src.ph <= 3 && this.R.weapon && isGunK(this.R.weapon) ? this.R.weapon : '', fr = aw && (this.R.shootT > 0 || this.R.aimOn);   /* v579: while it hangs under its parachute it holds the rifle you hold and aims / fires with you */ this.onMate({ ...src, id: -777, c: 0, sk: 4, nm: 'INTELLIDROID', tm: T.tm, x: src.x + off, z: src.z + off * 0.6, al: 1, dd: 0, wp: aw, ai: fr ? 1 : 0, st: 0, hn: 0, rv: 0, vi: 0, ps: 0, iv: undefined });
  }
  bot(b) {
    let a = this.bots.get(b.id); if (a) return a;
    if (b.droid) { const dm = makeSkin(4, undefined, false); this.tintDroid(dm.group); this.group.add(dm.group); a = { g: dm.group, m: dm, last: 0 }; this.bots.set(b.id, a); return a; }   // v457: INTELLIDROID = the military soldier in dark maroon camouflage
    const m = makeHero(b.id % 4, undefined, false); m.group.traverse((o) => { if (o.isMesh && o.material && o.material.color) { let t = _TINT.get(o.material); if (!t) { t = o.material.clone(); t.color.multiply(new THREE.Color('#e08a7a')); _TINT.set(o.material, t); } o.material = t; } });   // a reddish tint: the enemy
    this.group.add(m.group); { const u0 = m.update.bind(m); m.update = (dt, st) => { u0(dt, st); if (m.farGun && m.ch && m.ch.gun) m.ch.gun.visible = false; if (m.farLod) { m._flw = true; if (m.pack) m.pack.visible = false; const gr = m._gear; if (gr) { gr.vest.visible = false; gr.helm.visible = false; } } else if (m._flw) { m._flw = false; if (m.pack) m.pack.visible = true; const gr = m._gear; if (gr) { gr.vest.visible = !!m._gv; gr.helm.visible = !!m._gh; } } }; }   /* v610: a far bot also hides its backpack and armour (3 meshes, tiny at that distance) */   /* v513: on every device (laptops too) */   /* v499 Android: beyond 60 m a bot's gun is not drawn (a gun is 1-5 draw calls) */
    a = { g: m.group, m, last: 0 }; this.bots.set(b.id, a); return a;
  }
  wallClip(wx, wz, dx, dz, len, ya, yb) { try { return Number.isFinite(ya) && Number.isFinite(yb) ? rayWalls(layout(), wx - CMB.x, wz - CMB.z, dx, dz, len, 1.3, ya, (q) => ya + (yb - ya) * q / len) : rayWalls(layout(), wx - CMB.x, wz - CMB.z, dx, dz, len, 1.3); } catch (e) { return len; } }   // v614: the drawn bullet line is tested along its real (sloped) height   // v486: how far a line from a world point runs before a wall
  tracer(x0, y0, z0, x1, y1, z1) {
    { const ddx = x1 - x0, ddz = z1 - z0, dl = Math.hypot(ddx, ddz); if (dl > 1) { const w = this.wallClip(x0, z0, ddx / dl, ddz / dl, dl, y0, y1); if (w < dl - 0.3) { const k = Math.max(0.05, w - 0.05) / dl; x1 = x0 + ddx * k; z1 = z0 + ddz * k; y1 = y0 + (y1 - y0) * k; this.impactFx(x1, y1, z1, 1); } } }   /* v486: a bullet line stops at the wall it hits (it used to draw through); v624: and kicks up dust there */
    if (this.glass) this.glass.seg(x0 - CMB.x, y0, z0 - CMB.z, x1 - CMB.x, y1, z1 - CMB.z);   // v351: a bullet shatters every window it crosses
    let q = this.tr.find((t) => !t.visible); if (!q) { if (this.tr.length > 14) return; q = new THREE.Mesh(TR_GEO || (TR_GEO = new THREE.BoxGeometry(0.04, 0.04, 1)), TR_MAT || (TR_MAT = new THREE.MeshBasicMaterial({ color: '#ffd978', transparent: true, opacity: 0.9 }))); this.group.add(q); this.tr.push(q); }   /* v481: every tracer shares ONE box and ONE material (each used to make its own = a new shader set-up in the middle of a firefight) */
    const dx = x1 - x0, dy = y1 - y0, dz = z1 - z0, l = Math.hypot(dx, dy, dz) || 1; q.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2); { const cp = this.R.camera.position, md = Math.hypot((x0 + x1) / 2 - cp.x, (z0 + z1) / 2 - cp.z); let w = Math.min(0.5, Math.max(0.06, md * 0.0035)) / 0.04; { const t = Math.max(0, Math.min(1, ((cp.x - x0) * dx + (cp.y - y0) * dy + (cp.z - z0) * dz) / (l * l))), cd = Math.hypot(cp.x - (x0 + dx * t), cp.y - (y0 + dy * t), cp.z - (z0 + dz * t)); if (cd < 3) w = Math.min(w, Math.max(0.01, cd * 0.012) / 0.04); if (cd < 0.7) { q.visible = false; return; } } q.scale.set(w, w, l); }   /* v632: a bullet line that passes right by the camera (a bot behind you) is thinned / hidden so it can never fill the screen */   /* v606: a tracer is 6 cm wide near and grows with the distance (0.35% of it, max 50 cm) so it stays a visible line at 100+ m (the 4 cm box was under one pixel there) */
    q.lookAt(x1, y1, z1); q.visible = true; q.userData.t = 0.1;
  }
  /* v624 BULLET IMPACTS: a small puff of dust (and one spark on a wall) where a bullet lands, so you can see where fire is going and where it comes from. Cost: 1 - 3 particles from the shared pool (500, drawn in one call, no new objects), at most one impact every 35 ms (70 ms on phones), none beyond 90 m. kind 1 = wall / solid, 0 = ground. */
  impactFx(x, y, z, kind) {
    const P = this.R.particles; if (!P) return;
    const c = this.R.camera.position, dx = x - c.x, dz = z - c.z, d2 = dx * dx + dz * dz; if (d2 > 8100) return;
    const now = performance.now(); if (now - (this._ifT || 0) < (IS_PHONE ? 70 : 35)) return; this._ifT = now;
    const near = d2 < 900, n = IS_PHONE ? (near ? 2 : 1) : (near ? 3 : 2);
    P.emit(x, y, z, n, { color: kind ? '#c9c2b4' : '#a79a7e', speed: 0.9, up: 0.9, life: 0.5, size: near ? 0.22 : 0.4, gravity: -0.4, spread: 0.12, grow: 2.2, alpha: 0.7 });
    if (kind && near) P.emit(x, y, z, 1, { color: '#ffd68a', speed: 2.2, up: 1.4, life: 0.14, size: 0.07, gravity: 9, spread: 0.05 });
  }
  /* v606: the MUZZLE FLASH tells you where a shot comes from. Its size follows the distance to the camera (2.5% of it, 0.5 - 4 m) so it is a clear bright dot at 150 m too (the old 14 cm sparks were smaller than a pixel beyond ~30 m). */
  muzzleFlash(x, y, z) { const P = this.R.particles; if (!P) return; const c = this.R.camera.position, cd = Math.hypot(x - c.x, z - c.z); P.emit(x, y, z, 1, { color: '#fff2b8', speed: 0, up: 0, spread: 0.04, life: 0.16, size: Math.min(4, Math.max(0.5, cd * 0.025)), gravity: 0 }); }
  glassShot(x0, y0, z0, x1, y1, z1) { if (this.glass) this.glass.seg(x0 - CMB.x, y0, z0 - CMB.z, x1 - CMB.x, y1, z1 - CMB.z); }   // my own bullets (called from main.js)
  glassBlast(x, y, z, r) { if (this.glass) this.glass.blast(x - CMB.x, y, z - CMB.z, r); }
  // ---------------------------------------------------------------- per frame
  // ---------------------------------------------------------------- v235 team: my teammates (ghost soldiers) in the plane, in the air and on the ground
  sendMate(dt) {
    const T = this.R.jangTeam; if (!T || !T.net) return;
    { this._fps = (this._fps || 60) * 0.95 + (dt > 0 ? 1 / dt : 60) * 0.05; this._nh = (this._nh || 0) + dt;   /* v282: a tiny live network line (ping, frame rate, how old the last packet of each teammate is) so a lag complaint says WHERE the lag is */
      if (this._nh > 0.5) { this._nh = 0; let nl = this.netLine; if (!nl) { nl = this.netLine = document.createElement('div'); nl.style.cssText = 'position:fixed;top:44px;left:50%;transform:translateX(-50%);z-index:6;padding:1px 8px;border-radius:8px;background:rgba(0,0,0,.4);color:#cfe;font:600 10px system-ui,sans-serif;pointer-events:none;white-space:nowrap'; document.body.appendChild(nl); }
        const now = performance.now(), ms = []; for (const [, g] of this.mates) ms.push((g.nm ? String(g.nm).slice(0, 6) : 'mate') + ' ' + (g.at ? Math.min(99, (now - g.at) / 1000).toFixed(1) + 's' : 'no data')); const lg = (typeof window !== 'undefined' && window.__lag) ? window.__lag.avg : 0; nl.textContent = 'PING ' + Math.round(T.net.rtt || 0) + ' ms' + (lg > 60 ? ' (DEVICE BUSY ' + Math.round(lg) + ' ms: net ~' + Math.max(20, Math.round((T.net.rtt || 0) - lg * 2)) + ')' : '') + '  |  FPS ' + Math.round(this._fps) + (window.__ph && window.__ph.renderer ? '  |  DC ' + window.__ph.renderer.info.render.calls + ' TRI ' + Math.round(window.__ph.renderer.info.render.triangles / 1000) + 'k CPU ' + Math.round(window.__cpuMs || 0) + 'ms' : '') + '  |  ' + (ms.length ? ms.join('  ') : 'no teammates seen'); } }
    this._jt = (this._jt || 0) + dt; if (!this._jtTimer) this._jtTimer = setInterval(() => { try { if (this.on && performance.now() - (this._jtAt || 0) > 900) this.sendJt(); } catch (e) { /* noop */ } }, 1000);   /* v299: a tab / phone in the background stops drawing frames, so this function stopped and the others lost the player after 4 s: a timer keeps the position going out about once a second */
    if (this._jt < 0.1) return; this._jt = 0; this.sendJt();
  }
  // v446: what a spectating teammate sees of ME: health, armor, the two guns with their ammo, the throwable and the backpack counts (sent about 3 times a second, 60 bytes)
  ivBits() {
    const now = performance.now(); if (now - (this._ivAt || 0) < 330) return {}; this._ivAt = now; const R = this.R, cb = R.wallet && R.wallet.cb; if (!cb) return {}; const gs = this.guns(), iv = cb.inv || {}, g = (k) => (k ? k + ',' + (cb.mag[k] | 0) + ',' + (cb.ammo[k] | 0) : ',0,0');
    return { iv: [Math.max(0, Math.round(this.hp)), iv.vest > 0 ? Math.round(cb.vestHp) : 0, iv.helmet > 0 ? Math.round(cb.helmHp) : 0, cb.nades | 0, iv.molotov | 0, iv.smoke | 0, iv.med | 0, iv.pills | 0, iv.inject | 0, iv.scope | 0, iv.sscope | 0, R.heldThrow || '', g(gs[0]), g(gs[1])].join(',') };
  }
  sendJt() {
    const T = (this.R.jangTeam || this.soloT); if (!T || !T.net || !this.on) return; this._jtAt = performance.now();
    const b = this.R.me.body, d = this.drop; let ph = 4, x = b.x, y = b.y, z = b.z;
    const dv = this.R.drive && !this.R.paxMode ? this.R.drive : null, vi = dv ? this.R.cars.indexOf(dv) : -1; const px = this.R.drive && this.R.paxMode ? this.R.drive : null, pvi = px ? this.R.cars.indexOf(px) : -1;
    if (this.down || this.deadT > 0) ph = 7;   // v244: lying down (v292: also when dead - the others used to see a dead teammate standing, or nothing)
    else if (px && pvi >= 0) { ph = 6; x = px.st.x; y = px.st.y; z = px.st.z; }
    else if (dv && vi >= 0) { ph = 5; x = dv.st.x; y = dv.st.y; z = dv.st.z; }   // v240: driving a jeep: its place goes out instead of mine, so everybody sees the jeep move
    else if (this.dropping && d) { if (d.ph === 'plane') { ph = d.stand ? 0 : 1; x = d.lv || 0; z = d.lu || 0; y = 0; } else ph = d.ph === 'fall' ? 2 : 3; }
    T.net.send(this._lastJt = { t: 'jt', ph, x: +x.toFixed(2), y: +y.toFixed(2), z: +z.toFixed(2), r: +(ph === 5 ? dv.st.yaw : ph === 6 ? px.st.yaw : b.yaw).toFixed(3), sp: ph === 5 ? +dv.st.speed.toFixed(1) : ph === 6 ? 0 : +Math.min(99, Math.hypot(b.vx || 0, b.vz || 0)).toFixed(1), al: this.hp > 0 && this.deadT <= 0 && !this.down ? 1 : 0, dd: this.deadT > 0 ? 1 : 0, hp: Math.max(0, Math.min(100, Math.round(this.hp / MY_DMG * 100))), tm: T.tm, ...this.ivBits(), vi: ph === 5 ? vi : ph === 6 ? pvi : 0, ps: ph === 6 ? this.R.paxSeat | 0 : 0, wp: this.R.weapon || '', ai: this.R.aiming ? 1 : 0, hn: ph === 5 && A.hornOn && A.hornOn() ? 1 : 0, rv: this.reviving ? 1 : 0, rd: this.respDrop ? 1 : 0, jp: this.jet && ph === 4 && this.hp > 0 ? (this.jet.on ? 2 : this.jet.has() && !this.dropping ? 1 : 0) : 0, ...this.poseBits(ph) }); try { this.mimicDroid(this._lastJt); } catch (e) { /* never break the flight */ }
  }
  /* v320: every movement the others can see (PUBG): crouch, prone, jump / fall, vault, reload, lean, punch, kick, grenade throw, camera pitch for the aim */
  poseBits(ph) { const R = this.R, b = R.me.body; if (ph !== 4) return { st: 0 };
    const st = (R.crouch ? 1 : 0) | (R.prone ? 2 : 0) | (!b.grounded && !R.hang ? 4 : 0) | (R.vlt ? 32 : 0) | (R.reloadT > 0 ? 16 : 0) | (R.punchT > 0 && !R.kickK ? 128 : 0) | (R.punchT > 0 && R.kickK ? 256 : 0) | (R.nadeT > 0 ? 512 : 0) | (R.nadeHolding ? 64 : 0) | (R.zipR ? 1024 : 0) | (R.ladR ? 8 : 0) | (this.gearV ? 2048 : 0) | (this.gearH ? 4096 : 0) | (this.using && !this.using.pz ? ({ med: 1, inject: 2, pills: 3 }[this.using.k] || 0) << 13 : 0);   /* v512: bits 13-14 = which heal item I am using (everybody sees the animation) */
    return { st, lv: +(R.leanV || 0).toFixed(2), rl: R.reloadT > 0 && R.reloadTot ? +Math.max(0, 1 - R.reloadT / R.reloadTot).toFixed(2) : 0, cp: +(R.camPitch || 0).toFixed(2), nt: R.nadeToss | 0, vy: +(R.ladR ? (R.ladR.v || 0) : (b.vy || 0)).toFixed(1) }; }   /* v524: on a ladder bit 8 is set and vy carries the climb speed, so everybody sees him climb */
  onMate(m) {
    const T = (this.R.jangTeam || this.soloT); if (!T || m.id === T.myId || !this.on) return; let g = this.mates.get(m.id);
    if (!g) { const sk = m.sk | 0, mo = sk >= 4 && sk <= 8 ? makeSkin(sk, undefined, false) : makeHero((m.c | 0) % 4, undefined, false); if (m.id === -777) this.tintDroid(mo.group); const nm0 = String(m.nm || '').toUpperCase().slice(0, 14) || 'HARIS', ch = this.mkChute(nm0, m.id); ch.visible = false; this.group.add(mo.group); this.group.add(ch); g = { m: mo, ch, x: 0, y: -99, z: 0, has: false, nm: nm0 }; this.mates.set(m.id, g); }
    if (typeof m.iv === 'string' && m.iv.length < 200) g.iv = m.iv.split(',');
    g.id = m.id; g.c = m.c; g.sk = m.sk | 0; g.wp = m.wp || ''; g.ai = m.ai; g.hn = m.hn ? 1 : 0; g.rvg = m.rv ? 1 : 0; g.jp = m.jp | 0; g.al = m.al === undefined ? 1 : m.al; g.dd = m.dd ? 1 : 0; g.hpv = m.hp === undefined ? 100 : Math.max(0, Math.min(100, m.hp | 0)); { const st = m.st | 0, o = g.st | 0; if ((st & 128) && !(o & 128)) g.pt = 0.001; if ((st & 256) && !(o & 256)) g.pt = 0.001; if ((st & 32) && !(o & 32)) g.vt = 0.001; if ((st & 512) && !(o & 512)) g.nt0 = performance.now(); if ((o & 64) && !(st & 64) && (st & 512)) g.nt0 = performance.now() - nhf(m.nt) * ([1.12, 1.3, 1.4, 1.47, 1.47][m.nt | 0] || 1.12) * 1000; g.st = st;   /* v615: he let go of a cooked grenade: the arm carries on from the cocked pose */ g.lv = +m.lv || 0; g.rl = +m.rl || 0; g.cp = +m.cp || 0; g.nts = m.nt | 0; g.vy = +m.vy || 0; } { const np = performance.now(); if (g.at && m.ph === 4 && g.ph === 4) { const dtp = (np - g.at) / 1000; if (dtp > 0.03 && dtp < 0.5) { const ddx = m.x - g.tx, ddz = m.z - g.tz; if (ddx * ddx + ddz * ddz < 36) { g.vx = (g.vx || 0) * 0.4 + ddx / dtp * 0.6; g.vz = (g.vz || 0) * 0.4 + ddz / dtp * 0.6; } else g.vx = g.vz = 0; } } else g.vx = g.vz = 0; }   /* v512: velocity from the last two packets - the mate is drawn a little AHEAD along his run, so a runner glides instead of stepping 10 times a second */
    g.ph = m.ph; g.vi = m.vi | 0; g.ps = m.ps | 0; g.tx = m.x; g.ty = m.y; g.tz = m.z; g.r = m.r; g.sp = m.sp; g.tm = m.tm; g.at = performance.now();
  }
  // ---------------------------------------------------------------- v243 safe zone (PUBG): the circle shrinks, outside it you take damage
  stepZone(dt) {
    if (this.train) { if (this.zw) this.zw.visible = false; this.outZone = false; zoneFx(false); zoneNear(0, 0, false); this.zoneTxt = 'TRAINING YARD'; this.z = { x: 0, z: 0, r: 9999, nx: 0, nz: 0, nr: 9999, i: 0, shrinking: false, last: false, left: 999, dps: 0 }; return; }   // v442: no blue zone in the training yard
    const R = this.R, T = R.jangTeam; if (!this.Z) this.Z = this.shared && T ? makeZone(T.seed) : this.sim.Z;   // v251: the same circles the bots (and the server) use
    const z = zoneAt(this.Z, this.t), wasShr = this.z ? this.z.shrinking : false, wasI = this.z ? this.z.i : 0; this.z = z;
    if (!this.zw) {   // v440: the wall is a glowing LASER curtain (bright at the ground, vertical beams, light bands rising) so it can be seen from far away
      // v448: the wall is a LASER fence: bright blue beams from the ground up to the sky with a thin haze between them, plus flashes of LIGHTNING that jump along it
      const cv = document.createElement('canvas'); cv.width = 128; cv.height = 512; const g = cv.getContext('2d');
      const hz = g.createLinearGradient(0, 512, 0, 0); hz.addColorStop(0, 'rgba(50,130,255,.75)'); hz.addColorStop(0.25, 'rgba(40,110,255,.45)'); hz.addColorStop(0.7, 'rgba(40,100,255,.22)'); hz.addColorStop(1, 'rgba(40,100,255,.12)'); g.fillStyle = hz; g.fillRect(0, 0, 128, 512);   // v450: a soft blue HAZE instead of white beams
      g.globalCompositeOperation = 'destination-out'; for (let k = 0; k < 6; k++) { const cx = Math.random() * 128, gr = g.createRadialGradient(cx, 0, 0, cx, 0, 60 + Math.random() * 60); gr.addColorStop(0, 'rgba(0,0,0,.35)'); gr.addColorStop(1, 'rgba(0,0,0,0)'); g.fillStyle = gr; g.fillRect(0, 0, 128, 512); } g.globalCompositeOperation = 'source-over';   // gentle patchy drifting cloud
      const tx = new THREE.CanvasTexture(cv); tx.wrapS = THREE.RepeatWrapping; tx.wrapT = THREE.ClampToEdgeWrapping; tx.repeat.set(10, 1); if (THREE.SRGBColorSpace) tx.colorSpace = THREE.SRGBColorSpace;
      const m = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 600, 96, 1, true), new THREE.MeshBasicMaterial({ map: tx, color: 0xffffff, transparent: true, opacity: 0.85, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false, fog: false })); m.frustumCulled = false; this.group.add(m); this.zw = m; this.zwTex = tx;
      const lc = document.createElement('canvas'); lc.width = 256; lc.height = 512; const lg = lc.getContext('2d'); lg.lineCap = 'round'; lg.lineJoin = 'round';
      for (let n = 0; n < 3; n++) { let x = 30 + n * 80 + Math.random() * 20, y = 512; const pts = [[x, y]]; while (y > 20) { y -= 14 + Math.random() * 26; x += (Math.random() - 0.5) * 36; pts.push([x, y]); }
        for (const [w, col] of [[7, 'rgba(60,140,255,.16)'], [3, 'rgba(100,180,255,.45)'], [1.1, 'rgba(210,235,255,.85)']]) { lg.strokeStyle = col; lg.lineWidth = w; lg.beginPath(); pts.forEach(([px, py], k) => k ? lg.lineTo(px, py) : lg.moveTo(px, py)); lg.stroke(); } }
      const lt = new THREE.CanvasTexture(lc); lt.wrapS = THREE.RepeatWrapping; lt.repeat.set(4, 1); if (THREE.SRGBColorSpace) lt.colorSpace = THREE.SRGBColorSpace;
      const lm = new THREE.Mesh(new THREE.CylinderGeometry(0.998, 0.998, 600, 96, 1, true), new THREE.MeshBasicMaterial({ map: lt, color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false, fog: false })); lm.frustumCulled = false; this.group.add(lm); this.zl = lm; this.zlTex = lt; this.zlT = 0; }
    if (this.zwTex) { this.zwTex.offset.x = (this.zwTex.offset.x + dt * 0.01) % 1; this.zw.material.opacity = 0.8 + 0.1 * Math.sin(this.t * 1.5); }   // the beams hum and flicker
    if (this.zl) { this.zlT -= dt; const mt = this.zl.material; if (this.zlT <= 0) { this.zlT = 1.6 + Math.random() * 3.2; mt.opacity = 0.6; this.zlTex.offset.x = Math.random(); } else mt.opacity = Math.max(0, mt.opacity - dt * 1.5) * (Math.random() < 0.3 ? 0.4 : 1); }   // flashes of lightning along the wall
    this.zw.position.set(CMB.x + z.x, 250, CMB.z + z.z); this.zw.scale.set(z.r, 1, z.r); if (this.zl) { this.zl.position.copy(this.zw.position); this.zl.scale.copy(this.zw.scale); this.zl.visible = this.zw.visible && !(this.R.isTouch && /Android/i.test(navigator.userAgent || '')); }   /* v452: lightning is a soft occasional touch; Android keeps only the haze (cheaper) */
    this.zw.visible = !this.dropping && (z.shrinking || z.i > 0 || z.left < 90);   /* v440: the wall shows 90 s before the first closing (it was 30 s) */   /* v267: no blue wall during the plane drop / the first minutes: it only appears when the first circle is about to close */
    if (R.minimap) R.minimap.zone = z;
    { const show = !!this.dropping && !this.over;   /* v523: while you are in the plane / on the parachute the NEXT safe circle (white) is drawn in the world and an arrow + distance shows where it is, so you can land inside it without opening the map */
      if (!this.sw) { const m = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 400, 128, 1, true), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false, fog: false })); m.frustumCulled = false; m.visible = false; this.group.add(m); this.sw = m; }
      this.sw.visible = show; if (show) { this.sw.position.set(CMB.x + z.nx, 190, CMB.z + z.nz); this.sw.scale.set(Math.max(5, z.nr), 1, Math.max(5, z.nr)); this.sw.material.opacity = 0.2 + 0.07 * Math.sin(this.t * 3); }
      let ch = this._szc; if (!ch) { ch = document.createElement('div'); ch.id = 'sz-chip'; ch.style.cssText = 'position:fixed;left:50%;top:72px;transform:translateX(-50%);z-index:9;display:none;align-items:center;gap:8px;padding:5px 12px;border-radius:18px;background:rgba(0,0,0,.6);color:#fff;font:800 13px system-ui,sans-serif;pointer-events:none;border:2px solid #fff'; ch.innerHTML = '<span class="a" style="display:inline-block;font-size:18px;transition:transform .08s">\u25B2</span><span class="t"></span>'; document.body.appendChild(ch); this._szc = ch; }
      if (show) { const b9 = R.me.body, dx = CMB.x + z.nx - b9.x, dz = CMB.z + z.nz - b9.z, dist = Math.hypot(dx, dz), cy = R.camYaw || 0, fwx = -Math.sin(cy), fwz = -Math.cos(cy), rx = Math.cos(cy), rz = -Math.sin(cy), rel = Math.atan2(dx * rx + dz * rz, dx * fwx + dz * fwz), inside = dist < z.nr;
        ch.style.display = 'flex'; ch.firstChild.style.transform = 'rotate(' + (rel * 57.3).toFixed(0) + 'deg)'; ch.lastChild.textContent = inside ? 'INSIDE SAFE CIRCLE' : 'SAFE CIRCLE  ' + Math.round(dist - z.nr) + ' m'; ch.style.borderColor = inside ? '#7dff9a' : '#fff'; }
      else if (ch.style.display !== 'none') ch.style.display = 'none'; }
    const fm = (s) => { s = Math.max(0, Math.ceil(s)); return Math.floor(s / 60) + ':' + (s % 60 < 10 ? '0' : '') + (s % 60); };
    this.zoneTxt = z.last ? 'ZONE: FINAL' : (z.shrinking ? 'ZONE CLOSING ' : 'ZONE ') + fm(z.left);
    if (!this.dropping) {
      if (z.shrinking && (!wasShr || z.i !== wasI)) R.toast && R.toast('THE ZONE IS CLOSING - move into the blue circle', 3.5);
      else if (!z.shrinking && !z.last && z.left < 20.2 && z.left > 19.6 && !this._zw20) { this._zw20 = true; R.toast && R.toast('The zone starts closing in 20 s', 2.5); } else if (z.left > 21) this._zw20 = false;
    }
    const b = R.me.body, out = Math.hypot(b.x - CMB.x - z.x, b.z - CMB.z - z.z) > z.r, inAir = this.dropping || (this.drop && this.drop.ph === 'plane'); this.outZone = out && !inAir; zoneFx(this.outZone && this.hp > 0 && !this.gate); { const dEdge = z.r - Math.hypot(b.x - CMB.x - z.x, b.z - CMB.z - z.z), live = this.hp > 0 && !this.gate && !inAir && this.zw.visible; zoneNear(live && !out && dEdge < 45 ? 1 - Math.max(0, dEdge) / 45 : 0, dEdge, live && out); }   /* v440: warning glow + distance BEFORE you cross the wall, and a text while outside */   /* v434: blue lightning screen while you stand in the damaging zone */   /* v375: no zone damage / hurt sound / red HUD while you are in the plane or still dropping */
    if (inAir) { this.zt = 0; this.grace = 3; } else if (this.grace > 0) { this.grace -= dt; this.zt = 0; }   // v375: 3 s of grace after you land (landing outside the circle no longer grunts on the first frame)
    if (this.outZone && !(this.grace > 0) && this.hp > 0 && this.deadT <= 0 && !this.gate) { this.zt = (this.zt || 0) + dt; if (this.zt >= 1) { this.zt -= 1; this._zoneHit = true; try { this.hurt(z.dps, undefined, undefined, 'zone'); } finally { this._zoneHit = false; } }   /* v514: the blue zone's damage does not stop a heal (PUBG: you can heal in the storm) */ } else this.zt = 0;
  }
  // ---------------------------------------------------------------- v251 the red BOMBING circle: twice per match, 115 s each, anywhere on the island (independent of the blue circle); bombs fall from the sky
  stepBomb(dt) {
    if (this.train) return;
    const R = this.R, Z = this.Z; if (!Z) return; const bz = bombAt(Z, this.t), THR = THREE;
    if (R.minimap) R.minimap.bomb = bz;
    if (!bz) { if (this.bw) this.bw.visible = false; this._bk = -1; this._bmsg = 0; this._bchip = 0; return; }
    if (!this.bw) { const m = new THR.Mesh(new THR.CylinderGeometry(1, 1, 70, 40, 1, true), new THR.MeshBasicMaterial({ color: 0xff2a1a, transparent: true, opacity: 0.45, alphaMap: (() => { const c = document.createElement('canvas'); c.width = 4; c.height = 64; const g = c.getContext('2d'), gr = g.createLinearGradient(0, 64, 0, 0); gr.addColorStop(0, '#fff'); gr.addColorStop(0.25, '#9a9a9a'); gr.addColorStop(0.6, '#000'); g.fillStyle = gr; g.fillRect(0, 0, 4, 64); return new THR.CanvasTexture(c); })(), side: THR.DoubleSide, depthWrite: false, fog: false }));   /* v354: the red circle is a LOW wall that fades out with height (it was a 120 m solid cylinder whose top rim hung in the sky) */ m.frustumCulled = false; this.group.add(m); this.bw = m; this.bombs = []; for (let i = 0; i < 6; i++) { const q = new THR.Mesh(new THR.SphereGeometry(0.3, 8, 6), new THR.MeshBasicMaterial({ color: 0x23262b })); q.scale.set(0.7, 0.7, 1.7); q.visible = false; q.frustumCulled = false; this.group.add(q); this.bombs.push({ m: q, on: false, x: 0, z: 0, t: 0 }); } }
    this.bw.visible = true; this.bw.position.set(CMB.x + bz.x, 35, CMB.z + bz.z); this.bw.scale.set(bz.r, 1, bz.r); this.bw.material.opacity = bz.warn ? 0.1 + 0.08 * Math.sin(this.t * 6) : 0.2 + 0.05 * Math.sin(this.t * 3);
    { const m1 = Math.max(0, Math.ceil(bz.warn ? bz.tl : 0)); if (bz.warn && !this._bchip) { this._bchip = 1; cornerChip('rz-chip', '\u26A0 RED ZONE in ' + m1 + ' s', 1100); } else if (!bz.warn && this._bchip !== 2) { this._bchip = 2; cornerChip('rz-chip', '\u26A0 AIR RAID - GET OUT OF THE RED', 1100); } }   /* v523: the warning shows even while you are on the parachute */
    if (!this.dropping) { const m = Math.max(0, Math.ceil(bz.warn ? bz.tl : 0)); if (bz.warn && !this._bmsg) { this._bmsg = 1; R.toast && R.toast('BOMBING ZONE (RED CIRCLE) in ' + m + ' s - stay out of it!', 4); A.sfx.click && A.sfx.click(); } else if (!bz.warn && this._bmsg !== 2) { this._bmsg = 2; R.toast && R.toast('AIR RAID! bombs are falling in the red circle for ' + Math.round(bz.left) + ' s - GET OUT', 4); } }
    if (bz.warn) return;
    const k = Math.floor((this.t - bz.t0) / 0.8);   // one bomb every 0.8 s: the same spot on every phone
    if (k !== this._bk) { this._bk = k; const sp = bombSpot(Z, bz, k), q = this.bombs.find((o) => !o.on); if (q) { q.on = true; q.x = sp.x; q.z = sp.z; q.t = 1.7; q.m.visible = true; { const sy = supportY(layout(), sp.x, sp.z, 0.5, 1e4); q.gy = Math.max(cmbH(sp.x, sp.z), sy > -1e8 ? sy : -1e9); }   /* v594: the bomb lands on the highest roof / floor / canopy over this spot (house, tower, silo...), never through it */ } }
    const b = R.me.body;
    for (const q of this.bombs) { if (!q.on) continue; q.t -= dt; const wx = CMB.x + q.x, wz = CMB.z + q.z, gy = q.gy !== undefined ? q.gy : cmbH(q.x, q.z), f = Math.max(0, q.t / 1.7); q.m.position.set(wx, gy + 0.3 + f * f * 130, wz); q.m.rotation.x = Math.PI / 2 * 0 + 1.2;
      if (q.t <= 0) { q.on = false; q.m.visible = false; const d = Math.hypot(b.x - wx, b.z - wz), dc = Math.hypot(wx - R.camera.position.x, wz - R.camera.position.z);
        if (this.glass) this.glass.blast(q.x, gy + 1.2, q.z, 9); R.particles && R.particles.emit(wx, gy + 1, wz, 14, { color: '#ff9a3c', speed: 6, up: 5, life: 0.7, size: 0.7 }); R.particles && R.particles.emit(wx, gy + 1.5, wz, 8, { color: '#444', speed: 3, up: 4, life: 1.2, size: 1.0 });
        if (dc < 140) { A.sfx.boom && A.sfx.boom(Math.max(0.12, 1 - dc / 140)); if (R.shake !== undefined && dc < 40) R.shake = Math.max(R.shake, 0.5 * (1 - dc / 40)); }
        if (d < 9 && !this.dropping && this.hp > 0 && this.deadT <= 0 && !this.down && b.y > gy - 1.6 && b.y < gy + 3.4 && !underRoof(layout(), b.x - CMB.x, b.z - CMB.z, b.y, 80)) this.hurt(Math.round(48 * (1 - d / 9)) + 6, undefined, undefined, 'zone');   /* v448: nobody indoors is hurt by a red-circle bomb; v594: nor anybody under any roof / floor of a house or tower (the bomb bursts ON the roof, the blast only reaches what is at its own level) */ } }
  }
  // ---------------------------------------------------------------- v251 the AIRDROP (PUBG care package): a plane crosses the island, a crate falls on a parachute, red smoke shows where, the loot is gold
  airKit() {
    const THR = THREE, g = new THR.Group(), body = SM('#8d9aa6', 0.6), dark = SM('#4a5560', 0.7);
    const fu = new THR.Mesh(new THR.CylinderGeometry(1.5, 1.2, 20, 10), body); fu.rotation.x = Math.PI / 2; const wing = new THR.Mesh(new THR.BoxGeometry(26, 0.35, 3.6), body), tail = new THR.Mesh(new THR.BoxGeometry(7, 0.3, 2.2), body), fin = new THR.Mesh(new THR.BoxGeometry(0.3, 3.4, 2.4), dark); wing.position.z = 1; tail.position.z = -9.5; fin.position.set(0, 1.8, -9.4); g.add(fu, wing, tail, fin); g.scale.setScalar(1.25); return g;
  }
  planeAudio(dt) {   // v536: the loot plane is HEARD when it flies near (up to ~520 m): louder as it comes closer, from its side, Doppler up when it comes at you and down when it leaves
    let best = null, bd = 1e18; const c = this.R.camera.position;
    if (this.airs && !this.dropping) for (const a of this.airs) { if (!a.plane.visible) continue; const p = a.plane.position, d2 = (p.x - c.x) ** 2 + (p.y - c.y) ** 2 + (p.z - c.z) ** 2; if (d2 < bd) { bd = d2; best = a; } }
    const d = Math.sqrt(bd);
    if (!best || d > 520) { if (this._paOn) { this._paOn = false; this._pd = null; A.planeSound(null); } return; }
    const p = best.plane.position, prev = this._pd == null ? d : this._pd; this._pd = d; this._pv = (this._pv || 0) * 0.92 + Math.max(-90, Math.min(90, (prev - d) / Math.max(dt, 0.008))) * 0.08; this._paOn = true;
    A.planeSound(Math.pow(1 - d / 520, 1.7), this.panOf(p.x, p.z), 1 + this._pv / 340, d);
  }
  airCrate() {   // v263: the real PUBG airdrop box + the real parachute models
    const THR = THREE, g = new THR.Group(), cr = propModel('airdrop'); if (cr) { cr.scale.setScalar(1.5 / 1.8); g.add(cr); }
    const ch = new THR.Group(), cm = propModel('chute'); if (cm) { cm.scale.setScalar(1.25); cm.position.y = 1.15; ch.add(cm); } g.add(ch); g.userData.ch = ch;
    this.mkPuffs(g, 30, 0x2fdc5a, 0x1fae45); g.userData.sm = { H: 120, life: 16, s0: 3, s1: 20, drift: 26, a: 0.6 };   /* v264: a BIG green column (120 m, 23 m wide at the top, no fog) so the care package is seen from far across the island */
    return g;
  }
  mkPuffs(g, n, c1, c2) {   // soft smoke puffs (sprites, no fog: seen from far) that rise, billow and thin out; stepSmoke moves them
    const THR = THREE, tex = this._smokeTex || (this._smokeTex = (() => { const cv = document.createElement('canvas'); cv.width = cv.height = 64; const c = cv.getContext('2d'), gr = c.createRadialGradient(32, 32, 2, 32, 32, 31); gr.addColorStop(0, 'rgba(255,255,255,0.95)'); gr.addColorStop(0.55, 'rgba(255,255,255,0.55)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); c.fillStyle = gr; c.fillRect(0, 0, 64, 64); return new THR.CanvasTexture(cv); })());
    const puffs = []; for (let i = 0; i < n; i++) { const sp = new THR.Sprite(new THR.SpriteMaterial({ map: tex, color: i % 3 ? c1 : c2, transparent: true, opacity: 0, depthWrite: false, fog: false })); sp.userData.ph = i / n; sp.userData.rx = Math.random() - 0.5; sp.userData.rz = Math.random() - 0.5; sp.visible = false; sp.renderOrder = 4; g.add(sp); puffs.push(sp); }
    g.userData.puffs = puffs; return g;
  }
  stepSmoke(g, dt, on) {   /* each puff lives `life` s, climbs H metres, swells and fades; the wind leans the column */
    const P = g.userData.puffs, M = g.userData.sm; if (!P || !M) return; for (const sp of P) { const u = sp.userData; u.ph = (u.ph + dt / M.life) % 1; const k = u.ph; sp.visible = on; if (!on) continue; sp.position.set(u.rx * 1.2 * (1 + k * 3) + k * M.drift, 1.3 + k * M.H, u.rz * 1.2 * (1 + k * 3) + k * M.drift * 0.3); const sc = M.s0 + k * M.s1; sp.scale.set(sc, sc, 1); sp.material.opacity = Math.min(1, k * 8) * (1 - k) * M.a; }
  }
  onAirplane(e) {
    if (this.airs) for (const a of this.airs) if (a.n === e.n) return; (this.airs || (this.airs = [])).push({ n: e.n, x: e.x, z: e.z, hd: e.hd, t: 0, plane: this.airKit(), crate: this.airCrate(), landed: false, rm: 0 });
    const a = this.airs[this.airs.length - 1]; a.crate.visible = false; this.group.add(a.plane); this.group.add(a.crate);
    this.loadPlane().then((w) => { try { if (!w || !a.plane.parent) return; const cp = w.clone(true); cp.userData = {}; a.plane.clear(); a.plane.add(cp); a.plane.scale.setScalar(1); } catch (e) { /* noop */ } });   // v300: the airdrop plane is the real transport plane, not a grey box with wings
    if (!this.dropping && this.R.toast) this.R.toast('AIRDROP! A plane is dropping a care package - watch the sky, then run to the GREEN smoke (yellow square on the minimap)', 5);
    if (this.R.minimap) this.R.minimap.air = { x: e.x, z: e.z };
  }
  onAirland(e) { const a = this.airs && this.airs.find((q) => q.n === e.n); if (a) { a.landed = true; a.t = Math.max(a.t, AIR.back / AIR.v + AIR.alt / AIR.fall); } if (this.R.minimap) this.R.minimap.air = { x: e.x, z: e.z }; if (!this.dropping && this.R.toast) this.R.toast('AIRDROP LANDED - gold loot at the green smoke', 3.5); }
  stepAir(dt) {
    if (this.train) return;
    { const pf = this._pf; if (pf && this.plane) { if (!this.plane.visible || pf.t > 60 || this.dropping) this._pf = null; else { pf.t += dt; this.plane.position.x += pf.hd[0] * pf.v * dt; this.plane.position.z += pf.hd[1] * pf.v * dt; if (this.planeProps) for (const pv of this.planeProps) { pv.rotation.z += dt * 38; pv.visible = true; } if (pf.t > 55) { this.plane.visible = false; this._pf = null; } } } }   /* v300: the transport plane did not stand still in the sky after you landed: it flies on at its speed and leaves */
    this.planeAudio(dt);
    if (!this.airs) return; const tp = AIR.back / AIR.v;
    for (let i = this.airs.length - 1; i >= 0; i--) { const a = this.airs[i]; a.t += dt;
      const sx = a.x - a.hd[0] * AIR.back, sz = a.z - a.hd[1] * AIR.back, tt = Math.min(a.t, 2 * tp + 6);
      if (a.py === undefined) a.py = cmbH(a.x, a.z) + AIR.alt + 5; a.plane.position.set(CMB.x + sx + a.hd[0] * AIR.v * tt, a.py, CMB.z + sz + a.hd[1] * AIR.v * tt); a.plane.rotation.y = Math.atan2(a.hd[0], a.hd[1]); a.plane.visible = a.t < 2 * tp + 6;
      if (a.t >= tp + 18 / AIR.v) { const gy = cmbH(a.x, a.z), fall = Math.max(0, AIR.alt - Math.max(0, a.t - tp - 18 / AIR.v) * AIR.fall), on = fall <= 0.05 || a.landed, rel = a.t - (tp + 18 / AIR.v); a.crate.visible = true; a.crate.position.set(CMB.x + a.x, gy + (on ? 0 : fall), CMB.z + a.z); a.crate.userData.ch.visible = !on; a.crate.userData.ch.scale.setScalar(Math.max(0.05, Math.min(1, (rel - 0.4) / 1.4)));   /* v300: the crate leaves the plane's tail ramp and its parachute opens a moment later */ a.crate.userData.ch.rotation.y += dt * 0.3; this.stepSmoke(a.crate, dt, a.t < tp + AIR.alt / AIR.fall + 110); }
      if (a.landed || a.t > tp + AIR.alt / AIR.fall) { a.rm += dt; if (a.rm > 420) { this.group.remove(a.plane); this.group.remove(a.crate); this.airs.splice(i, 1); if (this.R.minimap && this.R.minimap.air && !this.airs.length) this.R.minimap.air = null; } }
    }
  }
  // a dead player's things stay on the ground in a GOLD box (shared match): the one who shot him can take everything
  dropAll() {
    const R = this.R, cb = R.wallet && R.wallet.cb, b = R.me.body; if (!cb || !this.sim || !this.shared) return; const bx = b.x - CMB.x, bz = b.z - CMB.z, list = [];
    for (const w of Object.keys(cb.owned)) if (cb.owned[w]) list.push([w, isGunK(w) ? { mag: cb.mag[w] | 0, res: cb.ammo[w] | 0 } : 0]);
    for (let i = 0; i < Math.min(3, cb.nades | 0); i++) list.push(['grenade', 0]); for (const k of ITEM_K) for (let i = 0; i < Math.min(2, (cb.inv && cb.inv[k]) | 0); i++) list.push([k, 0]);
    list.forEach(([k, am], i) => { const a = i * 1.1, it = this.sim.dropLoot(k, bx + Math.cos(a) * 0.8, bz + Math.sin(a) * 0.8, true); this.dropY(it, b); if (am) it.am = am; });
  }
  onMateShot(m) {   // v241: another player's shot: the same positional gunshot as the bots'
    if (!this.on || m.id === (this.R.jangTeam && this.R.jangTeam.myId)) return; { const g = this.mates.get(m.id); if (g && g.has) { g.fire = 0.45; g.fAt = performance.now(); const r = Number.isFinite(m.r) && m.r ? m.r : g.r, fx = Math.sin(r), fz = Math.cos(r), y0 = g.y + 1.35; this.tracer(g.x + fx * 0.8, y0, g.z + fz * 0.8, g.x + fx * 45, y0 - 0.5, g.z + fz * 45); this.muzzleFlash(g.x + fx * 0.9, y0, g.z + fz * 0.9); this.R.particles && this.R.particles.emit(g.x + fx * 0.9, y0, g.z + fz * 0.9, 4, { color: '#ffd978', speed: 1.5, up: 0.4, life: 0.1, size: 0.18 }); } }   // v251: you SEE his muzzle flash and tracer
    const c = this.R.camera.position, cd = Math.hypot(m.x - c.x, m.z - c.z); if (cd > 170) return;
    const v = Math.max(0.22, 1 - cd / 170), pn = this.panOf(m.x, m.z); m.w === 1 ? A.sfx.akShot && A.sfx.akShot(pn, v) : m.w === 2 && A.sfx.sniperShot ? A.sfx.sniperShot(pn, v) : A.sfx.shot(pn, v);
  }
  paxSeats(ci) { const o = []; for (const [, g] of this.mates) if (g.ph === 6 && g.vi === ci && performance.now() - g.at < 2500) o.push(g.ps | 0); return o; }   // v242: seats of the jeep taken by other players
  mateSounds(dt) {   // v241: footsteps of players on foot (up to 40 m) and the engine of the nearest jeep another player drives (up to 90 m)
    const c = this.R.camera.position; let best = null, bd = 1e9;
    for (const [, g] of this.mates) {
      if (!g.has || !g.m.group.visible) continue; const d = Math.hypot(g.x - c.x, g.z - c.z);
      if (g.ph === 4 && g.vv > 0.8 && d < 40) { g.stT = (g.stT === undefined ? 0 : g.stT) - dt * (g.vv > 3.5 ? 3.4 : 2.1); if (g.stT <= 0) { g.stT = 1; A.stepAt && A.stepAt(surfaceAt(g.x - CMB.x, g.z - CMB.z), Math.max(0.06, 0.5 * (1 - d / 40)), this.panOf(g.x, g.z), d > 18 ? 2200 : 0, this.bkOf(g.x, g.z)); } }   /* v626: the step sound follows the ground under him (grass / concrete / wood / metal) */
      if (g.ph === 5 && d < 90 && d < bd) { bd = d; best = g; }
    }
    { let hb = null, hd = 1e9; for (const [, g] of this.mates) { if (!g.has || g.ph !== 5 || !g.hn) continue; const d = Math.hypot(g.x - c.x, g.z - c.z); if (d < 150 && d < hd) { hd = d; hb = g; } }   // v302: a teammate honking
      if (A.remoteHorn) { if (hb) A.remoteHorn(true, Math.max(0.03, 0.2 * Math.pow(1 - hd / 150, 1.5)), this.panOf(hb.x, hb.z), 420); else A.remoteHorn(false); } }
    if (best && A.remoteEngine) A.remoteEngine(0.2 * (1 - bd / 90), Math.min(1, (best.sp || 0) / 22), this.panOf(best.x, best.z)); else if (A.remoteEngineStop) A.remoteEngineStop();
  }
  /* v457 TEAM NAME TAGS: a small name above every teammate (and an INTELLIDROID teammate), readable through walls, tiny so it never gets in the way of the shooting */
  mkDeadTag() {   // v492: the dead droid's name over his body: the COMPLETE words, in red (the old small tag was cut at both ends)
    const cv = document.createElement('canvas'); cv.width = 512; cv.height = 96; const c = cv.getContext('2d'), txt = 'INTELLIDROID DEAD'; c.font = '900 ' + fitPx(c, txt, 56, 470) + 'px system-ui, Arial, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.lineWidth = 10; c.lineJoin = 'round'; c.strokeStyle = 'rgba(0,0,0,.9)'; c.fillStyle = '#ff2b2b'; c.strokeText(txt, 256, 50); c.fillText(txt, 256, 50);
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthTest: false, depthWrite: false, fog: false })); sp.scale.set(2.0, 0.375, 1); sp.renderOrder = 998; sp.frustumCulled = false; this.group.add(sp); return sp; }
  mkDroidTag() {   // v568: the INTELLIDROID's name: dark black letters with a white edge and a black arrow pointing at its head; drawn through walls, never hidden
    const cv = document.createElement('canvas'); cv.width = 384; cv.height = 128; const c = cv.getContext('2d'), txt = 'INTELLIDROID'; c.font = '900 ' + fitPx(c, txt, 54, 360) + 'px system-ui, Arial, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.lineJoin = 'round'; c.lineWidth = 11; c.strokeStyle = '#fff'; c.fillStyle = '#050505'; c.strokeText(txt, 192, 40); c.fillText(txt, 192, 40);
    c.beginPath(); c.moveTo(152, 78); c.lineTo(232, 78); c.lineTo(192, 118); c.closePath(); c.lineWidth = 9; c.strokeStyle = '#fff'; c.stroke(); c.fillStyle = '#050505'; c.fill();
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthTest: false, depthWrite: false, fog: false })); sp.scale.set(1.5, 0.5, 1); sp.renderOrder = 998; sp.frustumCulled = false; sp._dk = 1; this.group.add(sp); return sp; }
  mkTag(txt, col) {
    const cv = document.createElement('canvas'); cv.width = 256; cv.height = 56; const c = cv.getContext('2d'); c.font = '800 ' + fitPx(c, txt, 34, 236) + 'px system-ui, Arial, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.lineWidth = 7; c.strokeStyle = 'rgba(0,0,0,.85)'; c.fillStyle = col; c.strokeText(txt, 128, 30); c.fillText(txt, 128, 30);
    const tex = new THREE.CanvasTexture(cv), sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false, opacity: 0.9, fog: false })); sp.scale.set(1.0, 0.22, 1); sp.renderOrder = 998; sp.frustumCulled = false; this.group.add(sp); return sp; }
  mkBadge(n) {   /* v648 PUBG-style TEAMMATE BADGE: his squad number in a bold coloured disc (dark ring + white ring + white digit), drawn through walls, about 20 px on the screen at any distance */
    const cv = document.createElement('canvas'); cv.width = cv.height = 128; const c = cv.getContext('2d'), col = SLOT_COL[(n - 1 + SLOT_COL.length) % SLOT_COL.length];
    c.beginPath(); c.arc(64, 64, 62, 0, 7); c.fillStyle = 'rgba(0,0,0,.95)'; c.fill(); c.beginPath(); c.arc(64, 64, 56, 0, 7); c.fillStyle = '#fff'; c.fill(); c.beginPath(); c.arc(64, 64, 51, 0, 7); c.fillStyle = col; c.fill();
    c.font = '900 84px system-ui, Arial, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.lineJoin = 'round'; c.lineWidth = 10; c.strokeStyle = 'rgba(0,0,0,.85)'; c.strokeText(String(n), 64, 68); c.fillStyle = '#fff'; c.fillText(String(n), 64, 68);
    const tex = new THREE.CanvasTexture(cv); if (THREE.SRGBColorSpace) tex.colorSpace = THREE.SRGBColorSpace; const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false, opacity: 1, fog: false })); sp.scale.set(0.3, 0.3, 1); sp.renderOrder = 999; sp.frustumCulled = false; sp._bn = n; this.group.add(sp); return sp; }
  tagTick() {
    const T = (this.R.jangTeam || this.soloT); if (!T || !this.sim) return; const c = this.R.camera.position;
    for (const [, g] of this.mates) {
      if (g.tm !== T.tm) { if (g.tg) g.tg.visible = false; if (g.bd) g.bd.visible = false; continue; }
      const gp = g.m.group, dg = g.id === -777, ok = g.has && gp.visible && g.al !== 0 && !g.dd && (dg || g.ph > 1);
      if (!ok) { if (g.tg) g.tg.visible = false; if (g.bd) g.bd.visible = false; continue; }
      if (dg) { if (!g.tg || !g.tg._dk) { if (g.tg) this.group.remove(g.tg); g.tg = this.mkDroidTag(); } const dd = Math.hypot(gp.position.x - c.x, gp.position.z - c.z), k = Math.max(1, Math.min(5, dd * 0.03)); g.tg.scale.set(1.5 * k, 0.5 * k, 1); g.tg.position.set(gp.position.x, gp.position.y + 2.5 + (k - 1) * 0.25, gp.position.z); g.tg.visible = true; continue; }   /* v568: the flying copy of the droid keeps its name all the time too */
      { const nm = g.slot > 0 ? g.slot : 2, dd = Math.hypot(gp.position.x - c.x, gp.position.z - c.z), dy = gp.position.y + 2.5 - c.y, d3 = Math.hypot(dd, dy), sz = Math.max(0.17, d3 * 0.034);   /* v648: the number badge: at least 0.17 m, then it grows with the distance so it stays about 26 px big (1080p) (readable from far, never huge up close) */
        if (!g.bd || g.bd._bn !== nm) { if (g.bd) { this.group.remove(g.bd); g.bd.material.map.dispose(); g.bd.material.dispose(); } g.bd = this.mkBadge(nm); } g.bd.scale.set(sz, sz, 1); g.bd.position.set(gp.position.x, gp.position.y + 2.28 + sz * 0.5, gp.position.z); g.bd.visible = true;
        if (dd < 25) { if (!g.tg) g.tg = this.mkTag(g.nm || 'MATE', '#9dffb0'); g.tg.position.set(gp.position.x, gp.position.y + 2.0, gp.position.z); g.tg.visible = true; } else if (g.tg) g.tg.visible = false; }
    }
    for (const s of this.sim.bots) {
      if (!s.droid) continue; const a = this.bots.get(s.id); if (!a) continue;
      if (s.dtm !== T.tm) { if (a.tg) a.tg.visible = false; if (a.tgD) a.tgD.visible = false; continue; }
      { const dead = !s.alive && s.placed !== false;   // v486: a dead INTELLIDROID keeps a (grey) name on its body, and a small line on the screen says it is dead
        if (dead !== !!this._ddOn) { this._ddOn = dead; if (!this.ddEl) { const e = this.ddEl = document.createElement('div'); e.textContent = '\u2620 INTELLIDROID IS DEAD'; e.id = 'dd-line'; e.style.cssText = 'position:fixed;left:10px;top:190px;z-index:30;pointer-events:none;font:800 10px system-ui,sans-serif;letter-spacing:1px;color:#ff4a4a;background:rgba(24,26,34,.7);padding:3px 9px;border-radius:9px;border:1px solid rgba(255,90,90,.7);display:none;white-space:nowrap'; document.body.appendChild(e); } this.ddEl.style.display = dead ? 'block' : 'none'; { const mm = document.getElementById('minimap'); if (mm && dead) { const r = mm.getBoundingClientRect(); if (r.height > 20) { this.ddEl.style.left = Math.max(6, r.left + r.width / 2 - 62) + 'px'; this.ddEl.style.top = Math.round(r.bottom + 6) + 'px'; } } }   /* v492: the permanent line sits right under the minimap, not in the middle of the screen */ if (dead && this.R.toast) this.R.toast('INTELLIDROID IS DEAD'); }
        if (dead) { if (a.tg) a.tg.visible = false; if (a.g.visible) { if (!a.tgD) a.tgD = this.mkDeadTag(); a.tgD.position.set(a.g.position.x, a.g.position.y + 0.75, a.g.position.z); a.tgD.visible = true; } else if (a.tgD) a.tgD.visible = false; continue; }
        if (a.tgD) a.tgD.visible = false; }
      if (s.placed === false || this.mates.has(-777)) { if (a.tg) a.tg.visible = false; continue; }
      { const vis = a.g.visible, gx = vis ? a.g.position.x : CMB.x + s.x, gz = vis ? a.g.position.z : CMB.z + s.z, gy = vis ? a.g.position.y : (s.y != null ? s.y : cmbH(s.x, s.z));   /* v568: the name stays over its head ALL the time - far away, behind walls, while you are on the parachute (the mesh may be culled: then the tag follows the real position) */
        if (!a.tg || !a.tg._dk) { if (a.tg) this.group.remove(a.tg); a.tg = this.mkDroidTag(); } const dd = Math.hypot(gx - c.x, gz - c.z), k = Math.max(1, Math.min(5, dd * 0.03)); a.tg.scale.set(1.5 * k, 0.5 * k, 1); a.tg.position.set(gx, gy + 2.5 + (k - 1) * 0.25, gz); a.tg.visible = true; }
    }
    { const D = this.droidAlive(); if (this.R.minimap) this.R.minimap.droidPin = D ? { x: D.x, z: D.z } : null; }   /* v568: the droid's place on the minimap + big map (also on the parachute) */
    this.enemyMarks(T);
  }
  /* v498 ANDROID: on the low graphics tier a bot is a few blurry pixels in the same colours as the ground. Every living enemy 14-160 m away gets a small RED arrow over his head (it is hidden when something is in front of it, so it never shows through a wall); it grows with the distance so it stays about as big on the screen. Only the nearest 12 get one. */
  enemyMarks(T) {
    if (!IS_ANDROID) return; const cam = this.R.camera.position, all = []; if (!this._em) this._em = [];
    if (!this._emTex) { const cv = document.createElement('canvas'); cv.width = cv.height = 64; const c = cv.getContext('2d'); c.beginPath(); c.moveTo(6, 8); c.lineTo(58, 8); c.lineTo(32, 56); c.closePath(); c.lineWidth = 7; c.strokeStyle = 'rgba(0,0,0,.9)'; c.stroke(); c.fillStyle = '#ff2d2d'; c.fill(); this._emTex = new THREE.CanvasTexture(cv); this._emMat = new THREE.SpriteMaterial({ map: this._emTex, transparent: true, depthTest: true, depthWrite: false, fog: false }); }
    if (!this.dropping) for (const s of this.sim.bots) { if (!s.alive || s.placed === false) continue; if (s.droid && s.dtm === T.tm) continue; const a = this.bots.get(s.id); if (!a || !a.g.visible) continue; const d = Math.hypot(a.g.position.x - cam.x, a.g.position.z - cam.z); if (d < 14 || d > 160) continue; all.push([d, a]); }
    all.sort((x, y) => x[0] - y[0]); const n = Math.min(12, all.length);
    for (let i = 0; i < n; i++) { const [d, a] = all[i]; let m = this._em[i]; if (!m) { m = this._em[i] = new THREE.Sprite(this._emMat); m.renderOrder = 997; m.frustumCulled = false; this.group.add(m); } const sc = Math.max(0.45, d * 0.034); m.scale.set(sc, sc, 1); m.position.set(a.g.position.x, a.g.position.y + 2.0 + sc * 0.55, a.g.position.z); m.visible = true; }
    for (let i = n; i < this._em.length; i++) this._em[i].visible = false;
  }
  downTick(now) {   // v551: teammates who are DOWN: a red warning line with the seconds left (40 s like your own bleed-out), and a pin on the map
    const l = []; for (const [, g] of this.mates) if (g.dnAt && g.has) l.push({ x: g.x, z: g.z, nm: g.nm || 'TEAMMATE', left: Math.max(0, 40 - (now - g.dnAt) / 1000) });
    if (this.R.minimap) this.R.minimap.downs = l;
    let e = this._dnEl; if (!l.length) { if (e) e.style.display = 'none'; return; }
    if (!e) { e = this._dnEl = document.createElement('div'); e.id = 'dn-warn'; e.style.cssText = 'position:fixed;left:50%;top:78px;transform:translateX(-50%);z-index:30;pointer-events:none;text-align:center;font:900 15px Arial,sans-serif;letter-spacing:1px;color:#fff;text-shadow:0 1px 3px #000;display:none'; document.body.appendChild(e); }
    const tx = l.map((q) => '\u26A0 ' + q.nm + ' IS DOWN - ' + Math.ceil(q.left) + ' s').join('   |   '); if (tx !== this._dnTx) { this._dnTx = tx; e.innerHTML = ''; for (const q of l) { const d = document.createElement('div'); d.style.cssText = 'background:rgba(190,20,20,.88);border:2px solid #fff;border-radius:10px;padding:5px 14px;margin:3px auto;width:max-content;animation:dnpulse .9s ease-in-out infinite alternate'; d.textContent = '\u26A0 ' + q.nm + ' IS DOWN - ' + Math.ceil(q.left) + ' s'; e.appendChild(d); } }
    e.style.display = 'block'; if (!document.getElementById('dn-css')) { const st = document.createElement('style'); st.id = 'dn-css'; st.textContent = '@keyframes dnpulse{from{opacity:.75}to{opacity:1}}'; document.head.appendChild(st); }
  }
  // v556: TEAM HEALTH PANEL (left, under the minimap).  v565: PUBG MOBILE look: a coloured number badge, the name, a thin health bar under it, a mic that lights up while that player talks;
  // DOWN (red) / OUT (grey) when knocked or dead.  Row 1 is YOU.  On a phone the rows are short and see-through so the view stays clear.
  teamHp(now) {
    if (now - (this._thAt || 0) < 250) return; this._thAt = now; const T = this.R.jangTeam || this.soloT, rows = [], talk = (id) => !!(this.R.isTalking && this.R.isTalking(id));
    if (T && this.on && !this.over) for (const [id, g] of this.mates) { if (g.tm !== T.tm || id === -777) continue; const out = !!g.dd, dn = g.ph === 7 && !g.dd, hp = out ? 0 : dn ? 0 : id === -777 ? 100 : (g.hpv === undefined ? 100 : g.hpv); rows.push({ nm: g.nm || 'MATE', hp, st: out ? 'OUT' : dn ? 'DOWN' : '', mic: talk(id), gid: id }); }
    if (T && this.on && !this.over && this.sim && this.sim.bots) { const D = this.sim.bots.find((q) => q.droid && q.dtm === T.tm); if (D) rows.push({ nm: 'INTELLIDROID', hp: D.alive ? Math.max(1, Math.min(100, Math.round(D.hp / 2.6))) : 0, st: D.alive ? '' : 'OUT', mic: false }); }   /* v558: the droid is a server bot after landing (not a mate), so it gets its own row; its max health is 260 */
    if (rows.length) { const dead = this.deadT > 0 || (this.hp <= 0 && !this.down); rows.unshift({ nm: this.myName(), hp: dead ? 0 : this.down ? 0 : Math.max(0, Math.min(100, Math.round(this.hp))), st: dead ? 'OUT' : this.down ? 'DOWN' : '', mic: !!(T && talk(T.myId)), me: true }); }
    for (const [, g] of this.mates) g.slot = 0; rows.forEach((q, i) => { if (q.gid !== undefined) { const g = this.mates.get(q.gid); if (g) { g.slot = i + 1; g.slotCol = SLOT_COL[i % SLOT_COL.length]; } } });   /* v648: the number each mate wears over his head = his row in this panel */
    let e = this._thEl; if (!e) { e = this._thEl = document.createElement('div'); e.id = 'tm-hp'; const tc = !!this.R.isTouch || (typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches); e.className = tc ? 'tmh phone' : 'tmh'; e.style.top = 'calc(max(10px,env(safe-area-inset-top),2vh) + ' + (tc ? 'clamp(78px,17vmin,112px)' : 'clamp(88px,19vmin,142px)') + ' + 6px)'; document.body.appendChild(e); }
    const sig = rows.map((q) => q.nm + q.st + Math.round(q.hp / 4) + (q.mic ? 'm' : '')).join('|'); if (sig === this._thSig) return; this._thSig = sig;
    if (!rows.length) { e.style.display = 'none'; return; } e.style.display = 'block';
    const COL = SLOT_COL, MIC = '<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="currentColor" d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V22h2v-3.1A7 7 0 0 0 19 12z"/></svg>', PIN = '<svg viewBox="0 0 24 24" width="100%" height="100%"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.500a2.500 2.500 0 1 1 0-5 2.500 2.500 0 0 1 0 5z"/></svg>';
    e.innerHTML = rows.map((q, i) => { const c = q.st === 'DOWN' ? '#ef4444' : q.st ? '#6b7280' : q.hp > 50 ? '#f4f4f4' : q.hp > 25 ? '#f5b82e' : '#ef4444'; return '<div class="tmr' + (q.st === 'DOWN' ? ' dn' : q.st ? ' out' : '') + (q.me ? ' me' : '') + '"><b class="n" style="background:' + COL[i % COL.length] + '">' + (i + 1) + '</b><div class="bx"><div class="l1"><span class="nm">' + String(q.nm).replace(/[<>&]/g, '') + '</span>' + (q.st ? '<em>' + q.st + '</em>' : '') + (q.mic ? '<u class="mic">' + MIC + '</u>' : q.me ? '<u class="pin">' + PIN + '</u>' : '') + '</div><div class="hb"><i style="width:' + (q.st === 'DOWN' ? 100 : q.hp) + '%;background:' + c + '"></i></div></div></div>'; }).join('');
  }
  /* v595 CPR geometry (measured on the real rig): the downed soldier lies on his back with his hips on the spot where he went down (head one way, feet the other); the reviver kneels at his chest side, 0.65 m from those hips, leaning over him with the adrenaline syringe. rvYaw gives the lying body's heading from where the reviver kneels, so both screens agree without sending anything extra. */
  reviverOf(g) { const b = this.R.me.body; if (this.reviving === g && this.hp > 0) return { x: b.x, z: b.z }; for (const [, r] of this.mates) if (r !== g && r.rvg && !r.dd && r.ph === 4 && Math.hypot(r.x - g.x, r.z - g.z) < 1.5) return r; return null; }
  lieSelf(dt) { const b = this.R.me.body; let rv = null; if (this.down && this.hp > 0) for (const [, r] of this.mates) if (r.rvg && !r.dd && r.ph === 4 && Math.hypot(r.x - b.x, r.z - b.z) < 1.5) { rv = r; break; } this.selfLieK = (this.selfLieK || 0) + ((rv ? 1 : 0) - (this.selfLieK || 0)) * Math.min(1, dt * (rv ? 1.6 : 2.6)); if (!rv && this.selfLieK < 0.02) this.selfLieK = 0; if (rv) this.selfLieY = rvYaw(b.x, b.z, rv.x, rv.z); return this.selfLieK; }
  lieFix(m, hx, hz) { try { const hb = m.hipsBone && m.hipsBone(); if (!hb) return; m.group.updateMatrixWorld(true); hb.getWorldPosition(_hipV); m.group.position.x -= _hipV.x - hx; m.group.position.z -= _hipV.z - hz; } catch (e) { /* never break the frame */ } }
  stepMates(dt) {
    const T = (this.R.jangTeam || this.soloT); if (!T) return; if (this.R.jangTeam) { this.sendMate(dt); this.mateSounds(dt); } else { this._jt = (this._jt || 0) + dt; if (this._jt >= 0.1) { this._jt = 0; this.sendJt(); } } this.tagTick();   /* solo droid: only the flight copy, no team networking */
    const w = this.plane && this.plane.visible && this.plane.children[0], now = performance.now(); this.downTick(now); this.teamHp(now);
    for (const [, g] of this.mates) {
      const inP = g.ph <= 1; let x = g.tx, y = g.ty, z = g.tz, show = now - g.at < 9000; if (g.ph === 4 && (g.vx || g.vz)) { const ex = Math.min(0.25, (now - g.at) / 1000); x += g.vx * ex; z += g.vz * ex; }   // v512
      if (inP) { if (g.tm !== T.tm || !w || !this.drop) show = false; else { this.plane.updateMatrixWorld(true); const sd = w.userData.seat;
        if (g.ph === 1 && sd) { const v = sd.getWorldPosition(new THREE.Vector3()), si = Math.min(3, T.seatOf[g.id] != null ? T.seatOf[g.id] : 0);   /* v537: seat slot 0..3 only (the droid's slot used to be 4+: its seat landed inside the wall) */ x = v.x + this.drop.hd[0] * (si - 1.5) * 0.6; y = v.y - 0.3; z = v.z + this.drop.hd[1] * (si - 1.5) * 0.6; if (g.id === -777) { const bd = this.R.me.body, so0 = ((this.R.jangTeam ? this.R.jangTeam.si : 0) - 1.5) * 0.6, dd = (si - 1.5) * 0.6 - so0; x = bd.x + this.drop.hd[0] * dd; y = bd.y; z = bd.z + this.drop.hd[1] * dd; } }   /* v581: the droid is placed relative to MY body (same frame, same plane pose): from the plane matrix alone it was a frame off and shook */
        else { const isD = g.id === -777, d0 = this.drop, live = isD && d0.stand && d0.lv !== undefined; let lv = Math.max(-1.0, Math.min(1.0, live ? d0.lv : g.tx)), lu = Math.max(-10.6, Math.min(5.4, live ? d0.lu : g.tz)); const m0 = lv, m1 = lu;   /* v630: the droid walks beside YOU (your position of THIS frame): from the 10-per-second packets his offset to you swung 1.2 m back and forth (stutter) and he walked through you (his bag stuck out of your body) */
          if (isD) { const ro = Math.max(0, Math.min(1, (this.drop.t - DOOR_T) / 1.8)); lu = Math.max(ro >= 1 ? -9.6 : -6.9, Math.min(5.0, lu + 0.9)); if (g.sd === undefined) g.sd = lv > 0 ? -1 : 1; else if (lv > 0.35) g.sd = -1; else if (lv < -0.35) g.sd = 1; lv = Math.max(-0.5, Math.min(0.5, lv + g.sd * 0.55)); lu = Math.max(ro >= 1 ? -9.6 : -6.4, lu); }   /* v545/v581: the droid stays in the aisle (|v| <= 0.5), 0.5 m away from the closed back door; it keeps ONE side of you (it used to flip sides every time you crossed the middle = shaking) */
          const kk = 1 - Math.exp(-14 * dt); if (!g.pl) g.pl = [lv, lu]; else { g.pl[0] += (lv - g.pl[0]) * kk; g.pl[1] += (lu - g.pl[1]) * kk; } lv = g.pl[0]; lu = g.pl[1];   /* v581: smoothed in the PLANE's own frame: smoothing the world position made it trail 3-4 m behind the moving plane and clip into the wall */
          const yl = (u) => -0.49 - Math.max(0, -8.3 - u) * 0.2;
          if (isD) { const bd = this.R.me.body, ca = Math.cos(this.drop.a), sa = Math.sin(this.drop.a), dx = lv - m0, dz = lu - m1; x = bd.x + dx * ca + dz * sa; z = bd.z - dx * sa + dz * ca; y = bd.y + yl(lu) - yl(m1); }   /* placed from MY body, never from the plane matrix of another moment */
          else { const v = w.localToWorld(new THREE.Vector3(lv, yl(lu), lu)); x = v.x; y = v.y; z = v.z; } } } }
      if (g.hadCar !== undefined && (g.ph !== 5 || !show || g.vi !== g.hadCar) && this.R.mateCars) { this.R.mateCars.delete(g.hadCar); { const oc = this.R.cars[g.hadCar]; if (oc && oc.st.driver === g.id) { oc.st.driver = -1; oc.st.parked = true; oc.st.speed = 0; oc.st.vx = oc.st.vz = 0; } } g.hadCar = undefined; }   /* v299: the car he left is FREE again on my screen (it stayed 'driven' by him for ever: nobody could enter it) */   // he got out: the jeep stays where it is
      g.m.group.visible = show; if (!show) { g.ch.visible = false; continue; }
      if (!IS_ANDROID && g.has) { const cp = this.R.camera.position, fs = (g.x - cp.x) ** 2 + (g.z - cp.z) ** 2 > 3844, rdy = !!g.m.ready; if (g.shFar !== fs || (fs && g.shR !== rdy)) { g.shFar = fs; g.shR = rdy; g.m.group.traverse((o) => { if (o.isMesh) o.castShadow = !fs; }); } }   // v514: a teammate / opponent more than 80 m away casts no shadow
      if (!g.has || inP || Math.abs(x - g.x) + Math.abs(z - g.z) > 12 || Math.abs(y - g.y) > 25) { g.x = x; g.y = y; g.z = z; g.has = true; g.vv = 0; } else {   /* v513: a teammate who respawned (or got dropped / teleported) APPEARS at the new place - the smoothing used to make him fly along the ground all the way from where he died */ const f = 1 - Math.exp(-14 * dt), px = g.x, pz = g.z; g.x += (x - g.x) * f; g.y += (y - g.y) * f; g.z += (z - g.z) * f; g.vv = dt > 0 ? Math.hypot(g.x - px, g.z - pz) / dt : 0; }
      if (g.ph !== 5 && g.ph !== 6) { const gr = g.m.group; gr.scale.setScalar(1); gr.rotation.order = 'YXZ'; gr.rotation.x = 0; gr.rotation.z = 0; }   /* v299: getting out of a car left the soldier at the seat's scale (0.0001 for the Civic = invisible!) and tilted */
      g.m.group.position.set(g.x, g.y + (g.ph === 4 && g.sp > 0.3 && !g.dd ? Math.max(0, Math.min(0.28, (cmbG(g.x - CMB.x + Math.sin(g.r) * 0.5, g.z - CMB.z + Math.cos(g.r) * 0.5) - cmbG(g.x - CMB.x, g.z - CMB.z)) * 0.9)) : 0), g.z); g.ryaw = g.ph === 1 && this.drop ? this.drop.a + Math.PI / 2 : g.r; g.m.group.rotation.y = g.ryaw + (g.ph === 4 && ((g.st | 0) & 8) ? Math.PI : 0);
      if (g.m.setGear) g.m.setGear(!!(g.st & 2048), !!(g.st & 4096));
      if (g.fire > 0) g.fire -= dt; const on4 = g.ph === 4, gs = on4 ? g.st | 0 : 0; if (g.pt > 0) { g.pt += dt / 0.72; if (g.pt >= 1) g.pt = 0; } if (g.vt > 0) { g.vt += dt / 1.25; if (g.vt >= 1) g.vt = 0; } const nadeP = on4 && (gs & 512) && g.nt0 ? Math.min((gs & 64) ? nhf(g.nts) : 0.999, (now - g.nt0) / 1000 / ([1.12, 1.3, 1.4, 1.47, 1.47][g.nts | 0] || 1.12)) : 0;   /* v615: bit 64 = the pin is out and he holds it: frozen cocked back */
      const dyS = g.py !== undefined && dt > 0 ? (g.y - g.py) / dt : 0; g.py = g.y; g.sa = (g.sa || 0) + ((dyS > 0.9 && on4 && !(gs & 4) ? 1 : 0) - (g.sa || 0)) * Math.min(1, dt * 6);   // v323: a teammate climbing a flight (rising fast on the ground)
      g.dT = g.ph === 7 && g.dd ? (g.dT || 0) + dt : 0;
      /* v595: a downed mate who is being revived LIES ON HIS BACK beside the kneeling reviver (both see it); a dead one plays his death animation (it used to jump straight to the last frame) and the body is centred on the spot where he fell */
      const rvR = g.ph === 7 && !g.dd ? this.reviverOf(g) : null; g.lieK = (g.lieK || 0) + ((rvR ? 1 : 0) - (g.lieK || 0)) * Math.min(1, dt * (rvR ? 1.6 : 2.6)); if (!rvR && g.lieK < 0.02) g.lieK = 0;
      const lieDead = g.ph === 7 && g.dd, lieRv = !lieDead && g.lieK > 0.02, lieSp = lieDead ? { zpose: ['dieF', 'dieB', 'dieR', 'dieL'][(g.id | 0) & 3], zp: Math.min(1, g.dT / 2.4) } : lieRv ? { zpose: 'dieL', zp: Math.min(1, g.lieK) } : null;
      if (lieRv && rvR) g.m.group.rotation.y = rvYaw(g.x, g.z, rvR.x, rvR.z);
      const bkM = (g.ph === 5 || g.ph === 6) && !!(this.R.cars[g.vi] && this.R.cars[g.vi].mesh.userData.bike);   // v607: a teammate (or the INTELLIDROID) on a motorbike rides it (driver: hands on the bars, passenger: hands on his hips)
      g.m.update(dt, { ...lieSp, jet: g.ph === 4 && !g.dd && (g.jp | 0) === 2, stairs: g.sa > 0.6, ladder: on4 && !!(gs & 8), ladslide: on4 && !!(gs & 8) && (g.vy || 0) < -4, ladv: on4 && (gs & 8) ? (g.vy || 0) * 2 : 0, weapon: (g.ph === 4 || g.ph === 3 || g.ph === 2) && !g.rvg && !((gs >> 13) & 3) ? (g.wp || null) : null, ...(on4 && ((gs >> 13) & 3) && !g.rvg ? { heal: (gs >> 13) & 3, healT: (g.ht = (g.ht || 0) + dt) } : (g.ht = 0, null)), aiming: (g.ph === 4 || g.ph === 3) && (g.fire > 0 || !!g.ai), crouch: !!(gs & 1), prone: !!(gs & 2), ghillie: !!(gs & 3) && this.inGrass(g.x - CMB.x, g.z - CMB.z, (gs & 2) ? 2 : 1) || (g.ph === 7 && !g.dd), vy: on4 ? g.vy : 0, shooting: (on4 || g.ph === 3) && g.fire > 0, peek: on4 ? g.lv : 0, reload: on4 && (gs & 16) ? g.rl : 0, punch: on4 && g.pt > 0 ? g.pt : 0, kick: on4 && !!(gs & 256), nade: nadeP, nadeToss: g.nts | 0, aimElev: on4 ? Math.atan((0.34 - g.cp) * 0.9) : 0, ...(on4 && g.vt > 0 ? { vault: true, zp: g.vt } : null), speed: g.ph === 0 ? Math.min(g.sp, 3.4) : g.ph === 4 || (g.ph === 7 && !g.dd) ? g.sp : 0, grounded: g.ph === 0 || g.ph === 1 || g.ph === 5 || g.ph === 6 || g.ph === 7 || (on4 && !(gs & 4) && !(gs & 1024)), skydive: g.ph === 2 ? 1 : g.ph === 3 || (on4 && (gs & 1024)) ? 2 : 0, ...(g.ph === 4 && g.rvg ? { heal: 2, kneel: true } : null), down: g.ph === 7 && !g.dd && !lieRv, ...(g.vt > 0 || lieSp ? null : { zp: 1 }), seated: g.ph === 1 || g.ph === 5 || g.ph === 6, pax: g.ph === 1 || (g.ph === 6 && bkM), bike: bkM, mvF: 1, mvR: 0, faceCam: false });
      { const jp = g.ph === 4 && !g.dd ? (g.jp | 0) : 0; if (jp || g.rj) { if (!g.rj) g.rj = new RemoteJet(this.R); g.rj.update(dt, g.m, jp); if (!jp && !g.rj.packG) g.rj = null; } }   /* v642: the others see his jetpack + flame */
      if (lieSp) this.lieFix(g.m, g.x, g.z);
      if (g.ph === 5) {   // v240: he drives a jeep: the real jeep of this match moves with him and his soldier sits in it
        const car = this.R.cars[g.vi]; if (car && car.mesh && car.mesh.visible !== false && (this.R.drive !== car || this.R.paxMode)) {   /* v595: no car drawn = nobody sits in the air */   // v291: a PASSENGER of this car (drive === car, paxMode) must also get the driver's movement, otherwise the car stands still on his screen

          const R = this.R; if (!R.mateCars) R.mateCars = new Map(); g.ry = g.ry === undefined ? g.r : g.ry + ((((g.r - g.ry) % 6.2832) + 9.4248) % 6.2832 - 3.1416) * (1 - Math.exp(-14 * dt));
          R.mateCars.set(g.vi, { id: g.id, x: g.x, y: g.y, z: g.z, yaw: g.ry, sp: g.sp }); g.hadCar = g.vi; R.seatModel(g.m.group, { st: { x: g.x, y: g.y, z: g.z, yaw: g.ry, id: car.st.id }, mesh: car.mesh }); }
        else g.m.group.visible = false; }
      else if (g.ph === 6) {   // v242: he rides along as a passenger: seated in his seat of the jeep
        const car = this.R.cars[g.vi]; if (car && car.mesh && car.mesh.visible !== false) { g.m.group.visible = true; this.R.seatModel(g.m.group, car, true, g.ps | 0); g.x = car.st.x; g.y = car.st.y; g.z = car.st.z; } else g.m.group.visible = false; }
      else g.ry = undefined;
      { const dn = g.ph === 7 && !g.dd && g.id !== -777 && g.tm === T.tm && g.has; if (dn) { if (rvR && g.dnAt) g.dnAt += dt * 1000; if (!g.dnAt) { g.dnAt = now; this.R.toast && this.R.toast('\u26A0 ' + (g.nm || 'TEAMMATE') + ' IS DOWN - run to revive him!', 4); try { A.sfx.click(); } catch (e) { /* noop */ } } } else g.dnAt = 0; }   /* v551: a teammate who goes down: warning line + pin + time left */
      g.ch.visible = g.ph === 3; if (g.ph === 3) { g.ch.position.set(g.x, g.y, g.z); g.ch.rotation.y = g.m.group.rotation.y; }   /* v549: same yaw as his body */
    }
    for (const [, g] of this.mates) {   // v613: an OPPONENT (another team's player) crouching / lying in tall grass is not drawn beyond the hiding distance (see grassHidden); a teammate always is
      if (!g.m || !g.m.group.visible || g.tm === T.tm || g.id === -777 || g.ph !== 4 || g.dd) continue;
      const gs = g.st | 0, stn = (gs & 2) ? 2 : (gs & 1) ? 1 : 0; if (!stn) { g.cGr = false; continue; }
      const cp = this.R.camera.position, d2 = (g.x - cp.x) ** 2 + (g.z - cp.z) ** 2;
      if (this.grassHidden(g, g.x - CMB.x, g.z - CMB.z, stn, d2, g.sp || 0, g.fire > 0 || (g.fAt && performance.now() - g.fAt < 2500))) { g.m.group.visible = false; g.ch.visible = false; }
    }
  }
  // v269: VEHICLE HITS: any car / jeep / Civic that moves faster than ~14 km/h hurts whoever it runs into: bots, enemy players (PvP), and ME when somebody else's car hits me. Damage grows with the speed (about 22 m/s kills).
  vehHits(dt, P) {
    const R = this.R, sim = this.sim, b = R.me.body, T = R.jangTeam, now = performance.now(); if (!this.vp) this.vp = new Map();
    for (let ci = 0; ci < R.cars.length; ci++) {
      const c = R.cars[ci];
      const st = c.st, pv = this.vp.get(c); this.vp.set(c, { x: st.x, z: st.z, t: now }); if (!pv || dt <= 0) continue;
      { const mcr = R.mateCars && R.mateCars.get(ci), dg = mcr && this.mates.get(mcr.id); if (dg && T && dg.tm === T.tm) continue; }   /* v651: a car driven by MY TEAMMATE never hurts me (it used to: every car that was not mine could hit me) */
      const vx = (st.x - pv.x) / dt, vz = (st.z - pv.z) / dt, sp = Math.hypot(vx, vz); if (sp < 4 || sp > 90) continue;
      if (c._vhCd > 0) { c._vhCd -= dt; continue; }
      const fx = vx / sp, fz = vz / sp, hl = (st.hl || 2.2) + 0.45, hw = (st.hw || 0.95) + 0.45, dmg = Math.min(110, (sp - 3.5) * 5.2), mine = c === R.drive && !R.paxMode;
      const inBox = (x, z, y) => { if (Math.abs((y === undefined ? st.y : y) - st.y) > 2.4) return false; const dx = x - st.x, dz = z - st.z, lz = dx * fx + dz * fz, lx = -dx * fz + dz * fx; return lz > -0.3 && lz < hl + 0.2 && Math.abs(lx) < hw; };
      let hit = false;
      for (const bt of sim.bots) { if (!bt.alive || !inBox(CMB.x + bt.x, CMB.z + bt.z)) continue; if (this.shared && !mine) continue; if (bt.droid && ((T && bt.dtm === T.tm) || sim.friendly(bt, mine ? undefined : -3))) continue;   /* v651: my own AI teammate (the droid) is never run over */ hit = true; sim.hurt(bt, dmg, st.x - CMB.x, st.z - CMB.z, mine ? undefined : -3); }
      if (hit && mine && this.shared) sim.net.send({ t: 'cmelee', x: +(st.x - CMB.x + fx * 1.2).toFixed(2), z: +(st.z - CMB.z + fz * 1.2).toFixed(2), fx: +fx.toFixed(3), fz: +fz.toFixed(3), reach: +Math.min(4.4, hl + 0.3).toFixed(2), dmg: +Math.min(60, dmg).toFixed(1) });
      if (!mine && !R.drive && P.alive && !this.dropping && this.hp > 0 && this.deadT <= 0 && b.hitCd <= 0 && inBox(b.x, b.z, b.y)) { this.hurt(Math.round(dmg)); hit = true; }
      if (mine && this.shared && T) for (const [, g] of this.mates) { if (g.tm === T.tm || !g.has || g.ph < 4 || g.ph > 7 || now - g.at > 1500) continue; if (inBox(g.x, g.z)) { T.net.send({ t: 'cpv', to: g.id, d: +Math.min(60, dmg).toFixed(1) }); hit = true; } }
      if (hit) c._vhCd = 0.7;
    }
  }
  update(dt) {
    this.hitUpd(dt); this.pinTick(dt);
    const R = this.R; if (!this.on || !this.sim) return; if (this.gate && !loadScreen.visible) this.gate = false; if (R.jangTeam || this.soloT) this.stepMates(dt); const nwT = performance.now(), rdt = Math.min(30, Math.max(dt, this._tw ? (nwT - this._tw) / 1000 : dt)); this._tw = nwT; this.rdt = rdt;   /* v354: the match clock follows the real clock (a frame stall or a hidden tab used to make the clock run slow) */ this.t += rdt; if (this.shared && this.sim.srvAt) this.t = this.sim.srvT + (performance.now() - this.sim.srvAt) / 1000; this.stepZone(dt); this.stepBomb(dt); this.stepAir(dt); const sim = this.sim, b = R.me.body, M = R.mission;
    const P = { mv: Math.hypot(b.vx || 0, b.vz || 0), stn: R.prone ? 2 : R.crouch ? 1 : 0, x: b.x - CMB.x, z: b.z - CMB.z, y: b.y, hp: this.hp, tm: 0, alive: this.hp > 0 && this.deadT <= 0 && !this.dropping, dn: !!this.down, rd: !!this.respDrop };
    { const ox0 = b.x - CMB.x, oz0 = b.z - CMB.z, ed = CMB.half - 8 - Math.max(Math.abs(ox0), Math.abs(oz0));   /* v354 MAP EDGE (PUBG): near the edge of the island a red warning tells you to turn back (the cliff wall + the invisible limit stay) */
      if (!this.edgeEl) { const e = this.edgeEl = document.createElement('div'); e.style.cssText = 'position:fixed;left:50%;top:max(92px,calc(env(safe-area-inset-top) + 86px));transform:translateX(-50%);z-index:30;pointer-events:none;font:800 12px system-ui;letter-spacing:1.5px;color:#fff;background:rgba(200,30,30,.78);padding:4px 12px;border-radius:10px;border:1px solid #ff8a8a;display:none'; document.body.appendChild(e); }
      const sh = ed < 30 && !this.dropping && this.hp > 0; if (sh) { this.edgeEl.textContent = 'MAP EDGE  ' + Math.max(0, Math.round(ed)) + ' m  -  TURN BACK'; if (this.edgeEl.style.display !== 'block') this.edgeEl.style.display = 'block'; } else if (this.edgeEl.style.display !== 'none') this.edgeEl.style.display = 'none'; }
    { const lim = CMB.half - 8;   // never leave the island, never fall under it (v207): pushed back inside / put back on the ground
      const ox = b.x - CMB.x, oz = b.z - CMB.z, cx = Math.max(-lim, Math.min(lim, ox)), cz = Math.max(-lim, Math.min(lim, oz));
      if (cx !== ox || cz !== oz) { b.x = CMB.x + cx; b.z = CMB.z + cz; b.vx = b.vz = 0; if (this.drop) { this.drop.vx = 0; this.drop.vz = 0; } }
      if (!this.dropping && b.y < cmbH(cx, cz) - 3) { b.y = cmbH(cx, cz) + 1.2; b.vy = 0; b.grounded = false; b.swim = 0; b.inWater = false; } }
    { const f = !this.dropping && this.hp > 0, air = !!(this.dropping && this.drop && this.drop.ph !== 'plane' && this.hp > 0 && this.deadT <= 0 && !this.over); if (this._fight !== f) { this._fight = f; document.body.classList.toggle('jang-fight', f); } if (this._air !== air) { this._air = air; document.body.classList.toggle('jang-air', air); this._sk = ''; if (!air && this.R.aiming && this.dropping) this.R.aiming = false; } this.slotsTick(); }   /* v579: free-fall / parachute / paraglider (not the plane): the fire, aim, reload and weapon buttons and the weapon slots are there, you can shoot */
    const run = M && M.phase === 'run' && !this.over;
    /* v300: the big PARAGLIDER TOWER instruction box is gone (it covered the screen) */
    // v357: no parachute on the towers / roofs (PUBG): a fall from a height hurts by the height (main.js 'land')
    if (run) {
      this.time -= this.rdt || dt; this.stepDown(dt);
      // the ammo / health / weapons on the ground
      if (!(P.alive && !this.dropping)) { this.using = null; if (this.R.telescope) this.R.telescope = false; }
      if (P.alive && !this.dropping && !this.down) { const it = sim.take(P.x, P.z, (q) => this.canTake(q) && this.autoOk(q), b.y); if (it) this.pickup(it); this.promptTick(P); this.useTick(dt); if (this.train) this.trainTick(); } else this.promptIt = null;
      sim.tick(dt, P); this.vehHits(dt, P);
      for (const e of sim.drain()) this.event(e, b);
      if (this.spec) { this.specTick(); this.specHud(); { const mb = this.R.me.body; mb.stun = 9; mb.vx = 0; mb.vz = 0; } }   /* v539: a dead player who spectates stays put (after the 4 s death stun the keys moved the corpse around) */
      if (this.deadT > 0 || this.spec) this.dieP = Math.min(1, (this.dieP || 0) + dt / 2.4);   /* v641: the dying animation always plays (also when you were DOWN first, or are watching your team) and ends lying on the floor */
      if (this.deadT > 0) { this.deadT -= dt; if (this.deadT <= 0) { this.hp = MY_DMG; this.down = false; this.respawn(); if (this.soloTeam()) { R.prone = false; this.respDrop = true; this.startDrop(); R.toast && R.toast('LIFE ' + (4 - this.lives) + ' OF 3 - JUMP FROM THE PLANE', 4); } if (R.wallet) { R.wallet.cb = newCb(); R.weapon = null; R.aiming = false; R.syncAct && R.syncAct(); R.updateAmmoHud && R.updateAmmoHud(); this.giveKit(); } if (this.ov) this.ov.style.display = 'none'; } }
      if (this.time <= 0) this.finish();
      else if (!this.shared && !this.over && !this.dropping && this.sim.bots.length && this.sim.bots.every((q) => !q.alive || q.droid) && this.hp > 0 && this.deadT <= 0 && !this.down) { this.R.toast && this.R.toast('ALL BOTS ELIMINATED', 3); this.finish('', 'win'); }   // v378: solo: every bot dead before time is up = MISSION PASSED
      else if (this.shared && !this.over && !this.dropping && this.sim.ready && this.t > 30 && this.R.jangTeam && this.sim.bots.length && this.sim.bots.every((q) => !q.alive) && this.hp > 0 && this.deadT <= 0 && !this.down && this.mates.size && [...this.mates.values()].every((g) => g.tm === this.R.jangTeam.tm)) { this.R.toast && this.R.toast('ALL BOTS ELIMINATED', 3); this.finish('', 'win'); }   // v379: a room with ONE team only (friends vs the bots): every bot dead = MISSION PASSED. With rival teams in the room the last team standing wins (bots do not count: nobody has to hunt the last bot)
    }
    if (!run && sim.bots) for (const s of sim.bots) if (!s.alive) s.dieT = (s.dieT > 0 ? s.dieT : 0) + dt;   /* v488: after the match ends the sim stops - the LAST bot froze at the start of his fall (stood in the air). Dying bots keep falling until they lie flat */
    this.syncLoot(); if (this.map) this.map.update(dt, R.camera.position); if (this.glass) this.glass.update(dt);
    for (const [key, sm] of this.dsm) {   // the green smoke over dead players' boxes: gone when the last item is taken; drawn within 260 m
      for (const id of sm.ids) if (!this.loot.has(id)) sm.ids.delete(id);
      if (!sm.ids.size) { this.group.remove(sm.g); this.dsm.delete(key); continue; }
      const pb = this.R.me.body, dx = pb.x - sm.x, dz = pb.z - sm.z; this.stepSmoke(sm.g, dt, dx * dx + dz * dz < 67600); }
    for (const [id, l] of this.loot) {   // spin and bob the loot; remove what was taken
      if (!l.it.alive) { this.group.remove(l.g); this.loot.delete(id); continue; }
      { const pb = this.R.me.body, dx = pb.x - CMB.x - l.it.x, dz = pb.z - CMB.z - l.it.z, vis = dx * dx + dz * dz < LOOT_VIS2 * (this.dropping ? 4 : this.R.scoped ? ((this._vtier | 0) === 0 ? 2.25 : 1) : 1);   /* v602: scoped, items are drawn to 127 m (was 170) and only to the normal range when the frames are already slow */   // v219: items only exist on screen near you (64 guns / items over the whole island were ~45% of all triangles and draw calls)
        if (l.g.visible !== vis) l.g.visible = vis;
        /* v657 LOOT LEVEL OF DETAIL + FROZEN FAR LOOT. A ground gun is built from ~24 separate meshes (24 draw calls, 8-23k triangles EACH) and was drawn out to 64 m: in a Gojra street 14 of them were 330 of the 670 draw calls of a frame = the laptop's 90-120 ms CPU frames. Now the item itself is drawn only within 30 m (26 m on phones, wider when scoped); farther away the coloured ring + disc (cheap, same colour per kind) still show where it lies. Out of range the whole item is also frozen (its ~25 nodes were re-computed every frame, 377 items = ~9,000 nodes). */
        const pv = l.g.userData.pivot, nr2 = LOOT_NEAR2 * (this.R.scoped ? 2.25 : 1), nr = l.nr ? d2n(dx, dz) < nr2 * 1.3 : d2n(dx, dz) < nr2;
        if (pv) { if (pv.visible !== (vis && nr)) pv.visible = vis && nr; l.nr = nr; }
        if (!vis) { if (!l.frz) { l.frz = true; l.g.matrixAutoUpdate = false; l.g.matrixWorldAutoUpdate = false; l.g.updateMatrixWorld = NOOP_UMW; } }
        else if (l.frz) { l.frz = false; delete l.g.updateMatrixWorld; l.g.matrixAutoUpdate = true; l.g.matrixWorldAutoUpdate = true; l.g.updateMatrix(); l.g.updateMatrixWorld(true); } }
    }
    const g0 = (x, z) => Math.max(cmbH(x, z), cmbG(x, z));
    const gLift = (x, z, yaw, stn, c) => { const L = stn === 2 ? 0.9 : stn === 1 ? 0.45 : 0.3, fx = Math.sin(yaw) * L, fz = Math.cos(yaw) * L, sx = fz * 0.8, sz = -fx * 0.8; let m = c; for (const [ax, az] of [[fx, fz], [-fx, -fz], [sx, sz], [-sx, -sz]]) { const h = Math.max(cmbG(x + ax, z + az), cmbH(x + ax, z + az)); if (h > m) m = h; } return Math.min(0.45, m - c); };   /* v533: a bot on a slope / cliff foot / ledge stands on the HIGHEST ground under his body (feet, both sides; a lying bot: head and feet) - the middle point alone sank him into the hill */   // v509: bots stand on the DRAWN mesh (the sim's analytic height is up to 0.4+ m below it on hills)
    const ft = (this._ft = (this._ft || 16) * 0.93 + Math.min(200, dt * 1000) * 0.07), tr0 = this._vtier | 0, tier = ft > 55 || (tr0 === 2 && ft > 48) ? 2 : ft > 38 || (tr0 >= 1 && ft > 32) ? 1 : 0; this._vtier = tier; const slow = tier > 0, vsl = tier === 2 ? 0.75 : tier === 1 ? 0.88 : 1;   /* v645: a slow frame used to pull the draw distance in to 0.5 / 0.72 x, so half-fogged bots at 165-240 m vanished in front of you; the cost is cut elsewhere now (one mesh per gun, frozen hidden bots), so the distance only eases to 0.88 / 0.75 x */   /* v598: the draw distance only changes tier with a gap (38 / 32 ms, 55 / 48 ms): a frame time hovering at a limit made EVERY bot at that distance pop in and out */   /* v560: SLOW machine (laptop under ~26 fps with many bots): bots are drawn up to 0.5-0.7x as far and bots beyond 25 m animate every 3rd frame */
    { const pb = this.R.me.body, fr = (this._fr = (this._fr || 0) + 1);   // v219: bot level of detail - far bots are not drawn or animated, middle ones animate every 3rd frame (every bot was a 9000-triangle skinned model animated 60 times a second wherever it stood)
      const fogLim = ((this.R.scene.fog ? this.R.scene.fog.far : 400) + 20) ** 2;   /* v618: a bot beyond the haze is fully fogged: it is not drawn at all */
      let bi = 0; const cmE = this.R.camera.matrixWorld.elements, cfx = -cmE[8], cfy = -cmE[9], cfz = -cmE[10], cmx = cmE[12], cmy = cmE[13], cmz = cmE[14];
      for (const s of sim.bots) {
        const a = this.bot(s), dx = pb.x - CMB.x - s.x, dz = pb.z - CMB.z - s.z, d2 = dx * dx + dz * dz, vlim = Math.min(BOT_VIS2 * vsl * vsl * (this.R.scoped ? ((this._vtier | 0) === 0 ? 4 : (this._vtier | 0) === 1 ? 2.25 : 1.4) : this.dropping ? (this.drop && this.drop.ph === 'plane' ? 1 : 2.25) : 1), this.dropping ? 1e9 : fogLim), far = (a.farS ? d2 > vlim : d2 > vlim * 1.21) && !(s.alive && a.shotAt && performance.now() - a.shotAt < 2500 && d2 < 420 * 420); a.farS = far; bi++;   /* v598: a bot is drawn from the limit inwards but only hidden again 10 % beyond it (no flicker on the edge) */   /* v486: a bot that is shooting at you is always drawn (up to 420 m) - he used to vanish at 190-330 m while his bullets kept coming */   // (scoped with a sniper: twice as far)
        if (s.droid && this.mates.has(-777)) { if (a.g.visible) a.g.visible = false; continue; }
        if (!s.alive && !s.droid && s.dieT >= (this.R.isTouch ? 45 : 1e9)) { if (a.g.visible) a.g.visible = false; continue; }   /* v486: the droid's body never disappears */
        a.g.rotation.set(0, s.yaw, 0); a.g.position.set(CMB.x + s.x, (() => { const c = g0(s.x, s.z); return s.y != null ? Math.max(s.y, c) : c + Math.max(s.alive && s.speed > 0.3 ? Math.max(0, Math.min(0.28, (cmbG(s.x + Math.sin(s.yaw) * 0.5, s.z + Math.cos(s.yaw) * 0.5) - cmbG(s.x, s.z)) * 0.9)) : 0, d2 < 40000 ? gLift(s.x, s.z, s.yaw, s.stn | 0, c) : 0); })(), CMB.z + s.z);   // v516: walking uphill the toes no longer dig in
        const behind = !far && d2 > 1600 && !(s.alive && a.shotAt && performance.now() - a.shotAt < 2500) && ((CMB.x + s.x - cmx) * cfx + ((s.y == null ? 0 : s.y) + 1 - cmy) * cfy + (CMB.z + s.z - cmz) * cfz) < -0.3 * Math.sqrt((CMB.x + s.x - cmx) ** 2 + (CMB.z + s.z - cmz) ** 2);   /* v612: a bot more than 40 m away BEHIND the camera is not drawn (its skinned parts are never frustum-culled, so it was drawn: 7-35 draws and 8-20k triangles each, for nothing); the 96-degree limit is far outside the real view */
        const hidG = !far && !behind && s.alive && !s.droid && s.stn >= 1 && this.grassHidden(a, s.x, s.z, s.stn, d2, s.speed || 0, a.shotAt && performance.now() - a.shotAt < 2500);   /* v613 */
        /* v618 OCCLUSION: a bot more than 30 m away that cannot be seen from the camera - every one of 6 lines (head and chest, centre and 0.45 m to each side) is stopped by a wall, floor, roof or hill - is not drawn (each bot is 7-35 draw calls). Re-tested every 0.15 s (0.3 s when nobody moved); a bot that is shooting at you is always drawn. */
        let hidO = false; if (!far && !behind && !hidG && d2 > 1600 && !s.droid && !this.dropping && !(a.shotAt && performance.now() - a.shotAt < 2500)) {
          a.occT = (a.occT || 0) - dt; if (a.occT <= 0 || a.occV === undefined) {
            const ax = cmx - CMB.x, az = cmz - CMB.z, by = a.g.position.y, still = a.occV !== undefined && Math.abs(ax - a.ocx) < 0.4 && Math.abs(az - a.ocz) < 0.4 && Math.abs(cmy - a.ocy) < 0.3 && Math.abs(s.x - a.obx) < 0.4 && Math.abs(s.z - a.obz) < 0.4 && Math.abs(by - a.oby) < 0.3;
            a.occT = still ? 0.3 : (a.occV ? 0.07 : 0.15) + (bi % 5) * 0.01;   /* v645: a hidden bot is re-tested every 0.07 s (it used to take up to 0.15 s before a bot stepping out from behind a corner was drawn) */   /* v620: nobody moved: the last answer stands (a bot that stands still and a camera that stands still are most of a match) */
            if (!still) {
              a.ocx = ax; a.ocz = az; a.ocy = cmy; a.obx = s.x; a.obz = s.z; a.oby = by;
              const ddx = s.x - ax, ddz = s.z - az, dl = Math.hypot(ddx, ddz) || 1, px = -ddz / dl * 0.8, pz = ddx / dl * 0.8, L0 = layout(); let seen = false;
              if (groundBlocks(ax, az, cmy, s.x, s.z, by + 1.6)) { a.occV = true; }   /* a hill in the way of the head line: hidden (the cheap ground test can only say hidden when it is really there) */
              else {
                /* v620: head then chest, centre then 0.45 m to each side, WITHOUT temporary arrays (the ground was tested once above) */
                for (let hi = 0; hi < 3 && !seen; hi++) { const hh = hi === 0 ? 1.6 : hi === 1 ? 0.8 : 0.25; for (let oi = 0; oi < 3; oi++) { const o = oi === 0 ? 0 : oi === 1 ? 1 : -1; if (shotClear(L0, ax, az, s.x + px * o, s.z + pz * o, cmy, by, 0, hh, true)) { seen = true; break; } } }
                a.occV = !seen; }
            } }
          if (a.occV) { if (!a.occSince) a.occSince = performance.now(); } else a.occSince = 0; hidO = !!a.occV && performance.now() - a.occSince > 450; } else { a.occV = undefined; a.occSince = 0; }   /* v645: SHOWN AT ONCE, HIDDEN ONLY AFTER 0.45 s of being covered, tested with 9 lines (head, chest and legs, centre and 0.8 m to each side, was 6 lines at 0.45 m) and only beyond 40 m (was 30): a bot at a corner or a window edge no longer blinks */
        if (far || behind || hidG || hidO) { if (a.g.visible) a.g.visible = false; if (!a.frz) { a.frz = true; a.g.matrixAutoUpdate = false; a.g.matrixWorldAutoUpdate = false; a.g.updateMatrixWorld = NOOP_UMW; } a.acc = 0; continue; }   /* v645: a hidden bot's ~340 nodes are no longer re-computed every frame (they were 1/3 of the scene's matrix work) */
        if (a.frz) { a.frz = false; delete a.g.updateMatrixWorld; a.g.matrixAutoUpdate = true; a.g.matrixWorldAutoUpdate = true; a.g.updateMatrix(); a.g.updateMatrixWorld(true); }   /* shown again: its matrices are brought up to date in the same frame (no stale pose / no one-frame jump) */
        a.m.farLod = !this.R.scoped && d2 > (IS_ANDROID ? 2500 : 6400) && !(s.alive && a.shotAt && performance.now() - a.shotAt < 2500);   // v610
        a.m.farGun = !this.R.scoped && !(s.alive && a.shotAt && performance.now() - a.shotAt < 2500) && d2 > (IS_ANDROID ? 3600 : 9000);   // v513: laptops: a bot's gun is not drawn beyond 95 m either (1-5 draws each)
        if (!IS_ANDROID && this.R.sunCast !== false) { const fs = d2 > 2209, rdy = !!a.m.ready; if (fs ? (!a.shFar || a.shReady !== rdy || (fr + bi) % 90 === 0) : a.shFar !== false) { a.shFar = fs; a.shReady = rdy; a.g.traverse((o) => { if (o.isMesh) o.castShadow = !fs; }); } }   /* v612: the sun's shadow box is only +-40 m around you, but a bot beyond ~62 m was still drawn into the shadow map (skinned parts are never culled) - and the old switch was lost whenever the model arrived after it (every far bot showed cast=true); now it is re-applied when the model is ready and every 1.5 s */   /* v513: a bot more than 80 m away casts no shadow (its 17 parts were drawn twice) */
        a.acc = (a.acc || 0) + dt; const dying = !s.alive && !a.fin; const skip = !dying && (d2 > (slow ? 625 : BOT_MID2) && (fr + bi) % (IS_ANDR ? 4 : 3) !== 0) || (IS_PHONE && d2 > 324 && d2 <= BOT_MID2 && (fr + bi) % 2 !== 0); if (!s.alive && a.fin && a.g.visible) continue; if (skip && a.g.visible) continue;   /* v481: phones: bots 18 - 40 m away are animated every 2nd frame */   // (a bot that was hidden is always updated once when it comes back)
        const adt = a.acc; a.acc = 0;
        if (s.alive && s.speed > 0.8 && d2 < 1600) { a.stepT = (a.stepT === undefined ? 0 : a.stepT) - adt * (s.speed > 3.5 ? 3.4 : 2.1); if (a.stepT <= 0) { a.stepT = 1; const dd = Math.sqrt(d2), v = Math.max(0.06, 0.5 * (1 - dd / 40)); if (A.stepAt) A.stepAt(surfaceAt(s.x, s.z), Math.min(0.9, v * 1.35), this.panOf(CMB.x + s.x, CMB.z + s.z), dd > 18 ? 2200 : 0, this.bkOf(CMB.x + s.x, CMB.z + s.z)); } }   /* v626: surface-aware */   // v239: you hear enemy footsteps (up to 40 m, louder when running, from the side they are on)
        { const yy = s.y == null ? 0 : s.y; a.sv = a.ly === undefined || adt <= 0 ? 0 : (yy - a.ly) / adt; a.ly = yy; a.sa = s.y != null && a.sv > 0.4 ? Math.min(1, (a.sa || 0) + adt * 4) : Math.max(0, (a.sa || 0) - adt * 4); }   // v342: a bot climbing a staircase / tower spiral plays the real stair-climb clip
        if (s.alive) { a.fin = false; a.g.visible = true; a.m.update(adt, { seated: false, stairs: a.sa > 0.6, speed: s.speed, grounded: true, weapon: s.weapon, aiming: s.seen && !(s.thr > 0), crouch: s.stn === 1, prone: s.stn === 2, ghillie: s.stn >= 1 && this.inGrass(s.x, s.z, s.stn), nade: s.thr > 0 ? Math.min(0.999, s.thr) : 0, nadeToss: s.stn === 2 ? 4 : s.stn === 1 ? 3 : 2, vy: 0, stun: 0 }); }
        else { const dk = ['dieF', 'dieB', 'dieR', 'dieL', 'dieF', 'dieB'][(s.id | 0) % 6], dT = s.dieT > 0 ? s.dieT : 0, fin = dT >= 2.5 || !a.g.visible; a.m.update(fin ? 1 : adt, { seated: false, speed: 0, grounded: true, zpose: dk, zp: Math.min(1, dT / 2.4), weapon: s.weapon }); if (dT >= 2.5) a.fin = true;   /* v487: a dead bot always ends flat on the floor (full snap to the last frame; before, a skipped / late frame left some hanging in the air) */ a.g.visible = !!s.droid || s.dieT < (this.R.isTouch ? 45 : 1e9); }
      } }
    for (const q of this.tr) if (q.visible) { q.userData.t -= dt; if (q.userData.t <= 0) q.visible = false; }
    if (this.vig && this.vig.style.opacity > 0) this.vig.style.opacity = Math.max(0, this.vig.style.opacity - dt * 1.6);
    this.hudT = (this.hudT || 0) - dt; if (this.hudT <= 0) { this.hudT = 0.2; this.updateHud(); }
    this.ambT = (this.ambT || 0) - dt; if (this.ambT <= 0) { this.ambT = 0.5; try { const R = this.R, b = R.me.body, plane = this.dropping && this.drop && this.drop.ph === 'plane', quiet = this.over || this.R.over || plane || this.gate, inb = !quiet && !R.drive && !this.dropping && inBld(b.x - CMB.x, b.z - CMB.z), lv = quiet ? 0 : R.drive ? 0.35 : inb ? 0.3 : 1, gun = performance.now() - Math.max(this._shS || 0, this.shotAt || 0) < 9000; A.ambSet(lv, lv > 0.5 && !gun && !this.down); } catch (e) { /* sound never breaks the match */ } }   /* v626: quiet wind (softer indoors and in a vehicle) + a bird now and then when nothing has been shot for 9 s */
  }
  // v239 PUBG-style 3D sound: how far left / right of the camera a world point is (-1..1)
  bkOf(wx, wz) { const c = this.R.camera, m = c.matrixWorld.elements, dx = wx - c.position.x, dz = wz - c.position.z, l = Math.hypot(dx, dz) || 1; return Math.max(0, Math.min(1, (dx * m[8] + dz * m[10]) / l * 0.9 + 0.1)); }   /* v531: 0 = in front of the camera, 1 = right behind you (the sound gets duller + quieter, so you can tell front from back) */
  panOf(wx, wz) { const c = this.R.camera, m = c.matrixWorld.elements, dx = wx - c.position.x, dz = wz - c.position.z, l = Math.hypot(dx, dz) || 1; return Math.max(-1, Math.min(1, (dx * m[0] + dz * m[2]) / l * 1.1)); }
  event(e, b) {
    const R = this.R;
    if (e.k === 'shot') {
      { const ab = this.bots.get(e.id); if (ab) ab.shotAt = performance.now(); }   /* v625 FIX: this looked the shooter up with b.id, but b is the PLAYER's body (no id), so shotAt was never set and every 'a bot that shoots at you is always drawn' rule (far, behind you, in grass, behind a wall) never applied: his bullets were drawn but the bot was not. The shooter is e.id. */
      const wx = CMB.x + e.x, wz = CMB.z + e.z, tx = e.hit ? b.x : b.x + (Math.random() - 0.5) * 3, tz = e.hit ? b.z : b.z + (Math.random() - 0.5) * 3, cd = Math.hypot(wx - R.camera.position.x, wz - R.camera.position.z), mine = !this.shared || e.tp === (R.jangTeam && R.jangTeam.myId);   // v245: a bot shooting at ANOTHER player: the tracer goes to him, I do not get hurt
      const gy = cmbH(e.x, e.z), shN = performance.now(), shOk = cd < 45 || shN - (this._shT || 0) > 45; if (shOk) { this._shT = shN; this.tracer(wx, gy + 1.4, wz, mine ? tx : CMB.x + e.tx, mine ? b.y + 1.3 : gy + 1.3, mine ? tz : CMB.z + e.tz); { const mx = (mine ? tx : CMB.x + e.tx) - wx, mz = (mine ? tz : CMB.z + e.tz) - wz, ml = Math.hypot(mx, mz) || 1; this.muzzleFlash(wx + mx / ml * 0.6, gy + 1.3, wz + mz / ml * 0.6); } R.particles && cd < 45 && R.particles.emit(wx, gy + 1.4, wz, 3, { color: '#ffd978', speed: 1.5, up: 0.5, life: 0.12, size: 0.14 }); if (mine && !e.hit && cd < 90) this.impactFx(tx, cmbH(tx - CMB.x, tz - CMB.z) + 0.05, tz, 0); }   /* v486: in a firefight of many bots only the near shots draw every tracer / spark - far ones at most ~22 / s (the laptop stuck while 10+ bots fired) */
      const sNow = performance.now(), sOk = !IS_PHONE || sNow - (this._shS || 0) > (cd > 80 ? 220 : 70);   // v480: Android: a firefight of many bots made dozens of sounds per second; near shots at most ~14 / s, far ones ~4 / s
      if (cd < 160 && sOk) { this._shS = sNow; const v = Math.max(0.22, 1 - cd / 160), pn = this.panOf(wx, wz); e.w === 'ak' ? A.sfx.akShot && A.sfx.akShot(pn, v) : e.w === 'sniper' && A.sfx.sniperShot ? A.sfx.sniperShot(pn, v) : A.sfx.shot(pn, v); }   // v239: pan + a longer hearing range
      if (cd > 55 && cd < 170 && A.echoShot && sNow - (this._shE || 0) > (IS_PHONE ? 450 : 160)) { this._shE = sNow; A.echoShot(e.w, Math.max(0.2, 1 - cd / 170), this.panOf(wx, wz), 0.18 + cd / 900); }   /* v626: a shot from far away comes back as a soft, dull echo a moment later (1 voice, at most ~6 a second, ~2 on phones) */
      if (mine && !e.hit && cd < 60 && R.shake !== undefined && !R.scoped && !this.down) R.shake = Math.max(R.shake, 0.05 + 0.03 * (1 - cd / 60));   /* v624: a bullet that just misses you gives a small flinch (a third of a real hit's shake); not while scoped, so it never spoils a sniper shot */
      if (!e.hit && cd < 90 && A.sfx.whiz && (!IS_PHONE || sNow - (this._shW || 0) > 250)) { this._shW = sNow; const pn = this.panOf(wx, wz); setTimeout(() => A.sfx.whiz(pn * 0.6, Math.max(0.35, 1 - cd / 90)), Math.min(250, cd * 2.5)); }   // the bullets that miss fly past you
      if (mine && e.hit && this.hp > 0 && this.deadT <= 0) { this.lastHit = { who: b && b.droid ? 'INTELLIDROID' : 'BOT ' + ((e.id != null ? e.id : 0) + 1), w: e.w, d: Math.hypot(wx - R.me.body.x, wz - R.me.body.z), at: performance.now() }; this.hurt(e.dmg, wx, wz, e.zn | 0); }   /* v632 FIX: the hit zone used to share the key 'z' with the shooter's z (the later key won), so every bot shot started at z = 0..2 on the map: the hit arrow pointed the wrong way and the tracer was a huge pale band across the screen. The zone is now 'zn'. */
    } else if (e.k === 'kill') {
      this._lastKillAt = performance.now();
      if (e.by !== -2 && e.by !== -3 && (!this.shared || e.by === (R.jangTeam && R.jangTeam.myId))) { this.kills++;   /* v421: a bot the ZONE killed (by -2) is not your kill */ this.stRec('bots', this.myW); R.toast && R.toast('ENEMY DOWN'); this.hitX(true); this.feed('YOU', this.wName(this.myW), 'BOT ' + ((e.id | 0) + 1), true); } else if (this.shared && this.myW === 'sniper' && e.by !== -2 && e.by !== -3 && performance.now() - (this.shotAt || 0) < 2500) this.hitX(true);   /* v487: a sniper kill that lands late (bullet flight + ping) still shows the red cross */
      { const dd = Math.hypot(CMB.x + e.x - R.me.body.x, CMB.z + e.z - R.me.body.z); if (dd < 90) A.voice.death(Math.max(0.15, 1 - dd / 90)); }   // v222: no money in Jang (kills used to pay $100) A.sfx.pickup && A.sfx.pickup();
      R.particles && R.particles.emit(CMB.x + e.x, cmbH(e.x, e.z) + 1.2, CMB.z + e.z, 10, { color: '#ff5a4a', speed: 3, up: 2, life: 0.4, size: 0.2 });
    } else if (e.k === 'nade') {   // v331: a bot throws a frag: it flies in an arc and lands where the sim says; the damage comes with the 'nbang' event
      const x0 = CMB.x + e.x, z0 = CMB.z + e.z, y0 = cmbH(e.x, e.z) + 1.4, tx = CMB.x + e.lx, tz = CMB.z + e.lz, ty = cmbH(e.lx, e.lz) + 0.07, dx = tx - x0, dz = tz - z0, d = Math.hypot(dx, dz), T = Math.max(0.5, Math.min(1.5, 0.45 + d * 0.03)), vy = (ty - y0 + 0.5 * 18 * T * T) / T;
      if (R.spawnNade && Math.hypot(x0 - R.me.body.x, z0 - R.me.body.z) < 130) { const n = R.spawnNade(x0, y0, z0, dx / T, vy, dz / T, false); if (n) { n.aim = true; n.bot = true; if (e.mo) { n.molo = true; n.t = T + 0.15; R.nadeLook && R.nadeLook(n); } } A.sfx.swing && A.sfx.swing(false); }
    } else if (e.k === 'drev') { if (this.down && !this.over) { this.getUp(40); this.R.toast && this.R.toast('INTELLIDROID REVIVED YOU', 3); }   /* v568 */
    } else if (e.k === 'nbang') { if (this.glass) this.glass.blast(e.x, cmbH(e.x, e.z) + 1.2, e.z, 6.5); if ((!this.shared || e.tp === (R.jangTeam && R.jangTeam.myId)) && this.hp > 0 && this.deadT <= 0 && !this.dropping) { this.lastHit = { who: 'BOT GRENADE', w: 'grenade', d: 0, at: performance.now() }; this.hurt(e.dmg, CMB.x + e.x, CMB.z + e.z); }
    } else if (e.k === 'airplane') this.onAirplane(e); else if (e.k === 'airland') this.onAirland(e);
    else if (e.k === 'bothit') { if (this.shared && performance.now() - (this.shotAt || 0) < (this.myW === 'sniper' ? 2500 : 450)) { this.hitX(!!e.h); if (e.h) R.toast && R.toast('HEADSHOT', 0.8); } const dd = Math.hypot(CMB.x + e.x - R.me.body.x, CMB.z + e.z - R.me.body.z); if (dd < 60) A.voice.grunt(Math.max(0.12, 0.8 - dd / 75)); R.particles && R.particles.emit(CMB.x + e.x, cmbH(e.x, e.z) + 1.2, CMB.z + e.z, 6, { color: '#ff5a4a', speed: 3, up: 2, life: 0.35, size: 0.2 }); }
  }
  /* v318 PUBG kill feed + hit marker: top-right feed lines ("YOU > AK-47 > BOT 3"), a white X on the crosshair when your bullet hits and a red one on a kill; the death screen says who killed you, with what and from how far */
  wName(w) { return ({ ak: 'AK-47', ak49: 'AK-49', sniper: 'KAR98', smg: 'SMG', pistol: 'PISTOL', shotgun: 'SHOTGUN', bat: 'BAT', fist: 'FIST', grenade: 'GRENADE', molotov: 'MOLOTOV', car: 'VEHICLE' })[w] || String(w || 'GUN').toUpperCase(); }
  feed(a, wn, b, hot) {
    let f = this.feedEl; if (!f) { f = this.feedEl = document.createElement('div'); f.style.cssText = 'position:fixed;right:84px;top:max(58px,8vh);z-index:30;pointer-events:none;display:flex;flex-direction:column;align-items:flex-end;gap:3px;font:800 13px/1.15 system-ui,sans-serif;color:#fff;text-shadow:0 1px 2px #000'; document.body.appendChild(f); }
    const e = document.createElement('div'); e.style.cssText = 'background:rgba(0,0,0,.5);border-radius:6px;padding:3px 9px;border-left:3px solid ' + (hot ? '#ffd23f' : '#ff5a4a'); e.innerHTML = '<span style="color:' + (hot ? '#ffd23f' : '#fff') + '"></span> <span style="color:#bbb;font-weight:600"></span> <span></span>';
    const sp = e.querySelectorAll('span'); sp[0].textContent = a; sp[1].textContent = '\u25B8 ' + wn + ' \u25B8'; sp[2].textContent = b; f.appendChild(e); while (f.children.length > 4) f.firstChild.remove(); setTimeout(() => e.remove(), 6000); }
  setBotDiff() { const d = this.practice ? 'easy' : (OPT.diff || 'medium'), T = this.R.jangTeam; if (this.shared) { if (T && T.net) T.net.send({ t: 'cdiff', d, n: botCount(d, !!this.R.isTouch) }); } else if (this.sim && this.sim.setDiff) this.sim.setDiff(d); }   // v331: BOT DIFFICULTY (solo: the sim; shared match: the room host's choice goes to the server)
  hitX(kill) {
    let m = this.hitXEl; if (!m) { m = this.hitXEl = document.createElement('div'); m.style.cssText = 'position:fixed;left:50%;top:50%;width:34px;height:34px;margin:-17px 0 0 -17px;z-index:60;pointer-events:none;opacity:0;transition:opacity .12s;background:linear-gradient(45deg,transparent 46%,currentColor 46% 54%,transparent 54%),linear-gradient(-45deg,transparent 46%,currentColor 46% 54%,transparent 54%);filter:drop-shadow(0 0 2px #000)'; document.body.appendChild(m); }
    m.style.color = kill ? '#ff3b30' : '#fff'; m.style.opacity = 1; clearTimeout(this._hxT); this._hxT = setTimeout(() => { m.style.opacity = 0; }, kill ? 650 : 160); }
  /* v313 PUBG HIT DIRECTION: a red arc on a ring round the crosshair shows where a shot came from; it turns with the camera and fades in ~2 s */
  hitMark(sx, sz) {   /* v597: a NARROW bright wedge (was a 120 px wide triangle) whose tip points at the shooter; the angle comes from the real camera matrix; two shots from the same side share one wedge (many triangles at once hid the real direction) */
    if (!Number.isFinite(sx) || !Number.isFinite(sz)) return; let ring = this.hitRing;
    if (!ring) { ring = this.hitRing = document.createElement('div'); ring.style.cssText = 'position:fixed;left:50%;top:50%;width:0;height:0;z-index:28;pointer-events:none'; document.body.appendChild(ring); this.hitArr = []; }
    const an = this.hitAng(sx, sz); for (const h of this.hitArr) { let d = an - this.hitAng(h.x, h.z); d = Math.atan2(Math.sin(d), Math.cos(d)); if (Math.abs(d) < 0.3) { h.x = sx; h.z = sz; h.t = 2; return; } }
    const e = document.createElement('div'); e.style.cssText = 'position:absolute;left:-20px;top:-168px;width:40px;height:54px;transform-origin:20px 168px;pointer-events:none;background:linear-gradient(to top,rgba(255,40,40,.15),rgba(255,50,50,1));clip-path:polygon(50% 0,100% 100%,0 100%);' + (IS_PHONE ? '' : ';filter:drop-shadow(0 0 5px #f22)'); ring.appendChild(e);   /* v481: phones: no blur filter on the hit arrows (a filtered layer repainted every frame is slow) */
    this.hitArr.push({ e, x: sx, z: sz, t: 2 }); if (this.hitArr.length > (IS_PHONE ? 3 : 5)) { const o = this.hitArr.shift(); o.e.remove(); } }
  hitAng(x, z) { const R = this.R, c = R.camera, b = R.me.body; let fx = -Math.sin(R.camYaw || 0), fz = -Math.cos(R.camYaw || 0), rx = Math.cos(R.camYaw || 0), rz = -Math.sin(R.camYaw || 0); if (c && c.matrixWorld) { const m = c.matrixWorld.elements, fl = Math.hypot(m[8], m[10]) || 1, rl = Math.hypot(m[0], m[2]) || 1; if (fl > 0.2) { fx = -m[8] / fl; fz = -m[10] / fl; rx = m[0] / rl; rz = m[2] / rl; } } const dx = x - b.x, dz = z - b.z; return Math.atan2(dx * rx + dz * rz, dx * fx + dz * fz); }
  hitUpd(dt) { const a = this.hitArr; if (!a || !a.length) return;
    for (let i = a.length - 1; i >= 0; i--) { const h = a[i]; h.t -= dt; if (h.t <= 0) { h.e.remove(); a.splice(i, 1); continue; } h.e.style.transform = 'rotate(' + this.hitAng(h.x, h.z) + 'rad)'; h.e.style.opacity = Math.min(1, h.t / 0.8); } }
  hurt(d, sx, sz, zone) {
    if (this.gate) return;   // v296: nothing (and no hurt sound) while the loading screen is up
    if (this.guideOn) return;   // v426: nothing can hurt you while the first-time guide is open
    if (this.over || this.R.over || this.R.finished || this.R.victory > 0) return;   // v401: after the match is over / at the victory place nothing hurts you any more (the damage sound kept coming back during the dance)
    if (this.dropping && this.drop && this.drop.ph === 'plane') return;   // v375: nothing can hurt you in the plane
    if (this.safeUntil && this.t < this.safeUntil) return;   // v251: 4 s of protection after you respawn
    if (this.down && sx !== undefined && d > 0) this.hitMark(sx, sz);
    if (this.down) { this.downT -= d * 0.5; if (this.vig) this.vig.style.opacity = 0.7; if (this.downT <= 0) this.die(); return; }   // v244: already down: more hits make you bleed out faster
    { const cb = this.R.wallet && this.R.wallet.cb; if (cb) { if (zone !== 'zone' && zone !== 2) { if (zone !== 1 && cb.vestHp > 0) { const a = Math.min(cb.vestHp, d * 0.4); cb.vestHp -= a; d -= a; if (cb.vestHp <= 0) { cb.inv.vest = 0; this.R.toast && this.R.toast('BODY ARMOR BROKE', 2); } } else if (zone === 1 && cb.helmHp > 0) { const a = Math.min(cb.helmHp, d * 0.4); cb.helmHp -= a; d -= a; if (cb.helmHp <= 0) { cb.inv.helmet = 0; this.R.toast && this.R.toast('HELMET BROKE', 2); } } } } }   /* v563 PUBG armor: Level 2 = 40% of the hit is absorbed (vest on the body, helmet on the head, none on legs, none against the blue zone); the armor loses what it absorbed */
    if (sx !== undefined && d > 0) this.hitMark(sx, sz);
    if (this.using && d > 0.5 && !this._zoneHit) this.cancelUse('HIT!  HEALING STOPPED  -  the item is not used up');   // v432 (PUBG): a hit interrupts healing
    this.hp -= d; if (this.vig) this.vig.style.opacity = Math.min(1, 0.4 + d / 20); if (this.R.shake !== undefined) this.R.shake = Math.max(this.R.shake, 0.25);
    A.voice.grunt(0.8);
    if (this.hp <= 0) { if (this.canDown()) this.goDown(); else if (this.teamWiped()) this.teamLost(); else this.die(); }
  }
  die() { if (this.shared && !this.over && this.teamWiped()) { this.teamLost(); return; } const solo = !this.over && this.soloTeam(); if (solo) { this.lives--; if (this.lives <= 0) { this.teamLost(); return; } } const toSpec = !solo && this.shared && !this.over; this.recDeath(); this.ejectCar(); if (this.shared && this.lastBy && performance.now() - (this.lastByAt || 0) < 9000 && this.R.jangTeam && this.R.jangTeam.net) { this.R.jangTeam.net.send({ t: 'cpk', to: this.lastBy }); this.lastBy = 0; } try { this.dropAll(); } catch (e) {} A.voice.death(1); this.ownChute = false; this.hasChute = false; this.hp = 0; this.boost = 0; this.down = false; { const rb = this.R; if (this.dropping) { this.dropping = false; this.drop = null; this.dropPose = 0; try { this.endDrop(false); } catch (e) {} } this.jumpReq = false; if (rb.ladR) rb.ladR = null; if (rb.zipR) rb.zipR = null; if (rb.hang) rb.hang = null; const bb = rb.me.body; bb.grounded = false; bb.ground = null; bb.noSnap = 0; bb.vy = Math.min(bb.vy || 0, 0); bb.dive = 0; }   /* v542: dying in the air (paraglider, ladder, zipline, hanging) left the body floating: all those states are cleared so gravity drops it to the floor */ this.reviving = null; this.deaths++; this.dieP = 0; try { if (this.jet && this.jet.reset) this.jet.reset(); } catch (e) { /* noop */ } this.deadT = toSpec ? 1e9 : 4; if (toSpec) this.spec = { id: null }; this.R.me.body.stun = 4; this.R.fireHeld = false; if (this.ov) { this.ov.style.display = 'grid'; { const lh = this.lastHit, pv = this.lastBy && performance.now() - (this.lastByAt || 0) < 6000, rec = lh && performance.now() - lh.at < 6000 ? 'KILLED BY ' + lh.who + '  \u2022  ' + this.wName(lh.w) + '  \u2022  ' + Math.round(lh.d) + ' m' : pv ? 'KILLED BY AN ENEMY PLAYER' : 'YOU WERE KILLED'; this.ov.textContent = rec + (solo ? '  -  LIVES LEFT: ' + this.lives + '  -  DROPPING IN FROM THE PLANE...' : toSpec ? '  -  YOU ARE OUT  -  WATCHING YOUR TEAM' : '  -  RESPAWNING...'); if (toSpec) setTimeout(() => this.specShow(), 1800); if (lh && rec.indexOf('BOT') > 0) this.feed(lh.who, this.wName(lh.w), 'YOU', false); } } }
  // ---------------------------------------------------------------- v244 knocked down + revive (PUBG): with a teammate alive you do not die at once, you are DOWN for 40 s and he can pick you up
  droidAlive() { const T = this.R.jangTeam || this.soloT; if (!T || !this.sim || !this.sim.bots) return null; const D = this.sim.bots.find((q) => q.droid && q.dtm === T.tm); return D && D.alive && D.placed !== false ? D : null; }   /* v568 */
  canDown() { const T = this.R.jangTeam; if (this.dropping || this.down) return false; const now = performance.now(); if (T) for (const [, g] of this.mates) if (g.tm === T.tm && g.ph >= 4 && g.ph <= 6 && g.has && now - g.at < 3000) return true; return !!this.droidAlive(); }   /* v568: a living INTELLIDROID also counts as a teammate: you are knocked DOWN (not dead) and it comes to revive you */
  // v418: LIVES: alone (solo, or a team of one) you have 3 lives, each one starts again in the plane; in a team you cannot respawn: you WATCH a teammate until the team is out
  soloTeam() { const T = this.R.jangTeam; if (!T) return true; for (const [, g] of this.mates) if (g.tm === T.tm) return false; return true; }
  /* v642 SPECTATE: the list holds every teammate who is still in the match - on the ground, in a car, skydiving, under a parachute, flying the jetpack, even DOWN (alive ones first). Before, a teammate who was in the plane, in the air or down was not in the list, so the camera jumped back to your own corpse. */
  specList(aliveOnly) { const T = this.R.jangTeam, now = performance.now(), a = [], d = []; if (!T) return a; for (const [id, g] of this.mates) { if (g.tm !== T.tm || !g.has || g.dd || now - g.at > 3000) continue; if (g.ph === 7 || g.al === 0) d.push(id); else a.push(id); } return aliveOnly ? a : a.concat(d); }
  /* where the camera looks: the spot where his body is DRAWN this frame (smoothed, on the plane / in the car / on the jetpack) and the way he faces */
  specCam() { if (!this.spec) return null; const l = this.specList(), cu = this.spec.id != null ? this.mates.get(this.spec.id) : null, keep = !!(cu && cu.has && !cu.dd && performance.now() - cu.at < 15000); if (!l.length && !keep) return null; if (this.spec.id == null || (!l.includes(this.spec.id) && !keep)) {   /* v654: a lag spike (packet older than 3 s) no longer throws the camera back onto my body: the one I watch is kept for 15 s */ this.spec.id = l[0]; this.R.camInit = false; this.specLabel(); } const g = this.mates.get(this.spec.id); if (!g) return null; const gr = g.m && g.m.group, p = gr && gr.visible !== false && g.y > -90 ? gr.position : null, yaw = g.ph === 5 && g.ry !== undefined ? g.ry : g.ryaw !== undefined ? g.ryaw : g.r || 0; return { x: p ? p.x : g.x, y: p ? p.y : g.y, z: p ? p.z : g.z, vx: 0, vz: 0, yaw, ph: g.ph, jet: (g.jp | 0) === 2 }; }
  specNext() { const l = this.specList(); if (!l.length) return; const i = l.indexOf(this.spec && this.spec.id); if (this.spec) this.spec.id = l[(i + 1) % l.length]; this.R.camInit = false; this.specLabel(); }
  specLabel() { if (!this.specEl) return; const g = this.spec && this.mates.get(this.spec.id), n = this.specEl.querySelector('.sp-n'); if (n) n.textContent = 'WATCHING ' + String((g && g.nm) || 'TEAMMATE').toUpperCase(); }
  specShow() {
    if (!this.spec) return; if (this.ov) this.ov.style.display = 'none';
    if (!this.specEl) { const e = document.createElement('div'); e.style.cssText = 'position:fixed;left:50%;bottom:max(140px,19vh);transform:translateX(-50%);z-index:60;display:flex;gap:10px;align-items:center;font:800 13px system-ui,sans-serif;color:#fff;letter-spacing:2px;background:transparent;border:0;padding:8px 12px;text-shadow:0 1px 4px #000;';
      e.innerHTML = '<span class="sp-n"></span><button class="sp-x" style="display:none;font:800 12px system-ui;letter-spacing:2px;padding:9px 14px;border:1px solid #fff5;background:#14171e;color:#fff;cursor:pointer">NEXT</button><button class="sp-l" style="font:800 12px system-ui;letter-spacing:2px;padding:9px 14px;border:1px solid #fff6;background:rgba(217,58,58,.45);color:#fff;cursor:pointer">LEAVE</button>';
      document.body.appendChild(e); this.specEl = e; e.querySelector('.sp-x').onclick = () => { this.specNext(); }; e.querySelector('.sp-l').onclick = () => { if (this.over) return; this.spec = null; this.specHide(); this.leaveAfterWin(); }; }
    try { window.phClosePause && window.phClosePause(); } catch (e) { /* noop */ } if (!this._snapSent && this.shared) { this._snapSent = true; try { const T = this.R.jangTeam; T && T.net && T.net.send({ t: 'cstat', snap: 1, rd: this.R.mission ? this.R.mission.round | 0 : 0, k: this.kills, d: this.deaths, bots: this.st.bots, ply: this.st.ply, dby: this.st.dby }); } catch (e) { /* noop */ } } this.specEl.style.display = 'flex'; this.specLabel(); try { if (document.pointerLockElement) document.exitPointerLock(); } catch (e) { /* noop */ }
  }
  specHide() { if (this.specEl) this.specEl.style.display = 'none'; if (this.spH) this.spH.style.display = 'none'; if (this.spS) this.spS.style.display = 'none'; if (this.spI) this.spI.style.display = 'none'; if (this.hpBar) this.hpBar.style.visibility = ''; if (this.slotEl) this.slotEl.style.visibility = ''; this._sk = ''; this._spK = ''; }
  // v446: SPECTATING: the watched teammate's health bar, armor, weapon slots with ammo, throwable and backpack counts are shown exactly as he sees them (his own are hidden)
  specHud() {
    const g = this.spec && this.mates.get(this.spec.id); if (!g || !g.iv) return; const v = g.iv, key = v.join(',') + '|' + (g.wp || '') + '|' + this.spec.id + '|' + (this.R.isTouch ? 1 : 0); if (key === this._spK && this.spH && this.spH.style.display !== 'none') return; this._spK = key;
    if (!this.spH) {
      const h = document.createElement('div'); h.id = 'c-sphp'; h.style.cssText = 'position:fixed;left:50%;bottom:max(8px,2.5vh);transform:translateX(-50%);z-index:46;pointer-events:none;width:min(34vw,300px);font:800 11px/1.2 system-ui,sans-serif;color:#fff;text-shadow:0 1px 3px #000;text-align:center';
      h.innerHTML = '<div style="display:flex;justify-content:space-between;margin:0 4px 3px"><span class="sh-n"></span><span class="sh-h">100</span></div><div style="height:9px;background:rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.4);border-radius:5px;overflow:hidden"><div class="sh-b" style="height:100%;width:100%"></div></div>';
      document.body.appendChild(h); this.spH = h; const sl = document.createElement('div'); sl.id = 'c-spslots'; document.body.appendChild(sl); this.spS = sl;
      const inf = document.createElement('div'); inf.id = 'c-spinfo'; inf.style.cssText = 'position:fixed;left:50%;bottom:98px;transform:translateX(-50%);z-index:46;pointer-events:none;width:min(46vw,420px);text-align:center;font:700 10px/1.25 system-ui,sans-serif;text-shadow:0 1px 3px #000'; inf.innerHTML = '<div class="sh-a" style="color:#9fd0ff"></div><div class="sh-i" style="color:#e2e8ee"></div>'; document.body.appendChild(inf); this.spI = inf; }
    const hp = +v[0] || 0, vest = +v[1] || 0, hel = +v[2] || 0, nd = +v[3] | 0, mo = +v[4] | 0, sm = +v[5] | 0, md = +v[6] | 0, pl = +v[7] | 0, ij = +v[8] | 0, sc = +v[9] | 0, ss = +v[10] | 0, ht = v[11] || '', G1 = [v[12], v[13], v[14]], G2 = [v[15], v[16], v[17]], wp = g.wp || '';
    this.spH.style.display = 'block'; this.spH.querySelector('.sh-n').textContent = String(g.nm || 'TEAMMATE').toUpperCase(); this.spH.querySelector('.sh-h').textContent = hp; const b = this.spH.querySelector('.sh-b'); b.style.width = Math.max(0, Math.min(100, hp)) + '%'; b.style.background = hp > 55 ? '#4ade80' : hp > 25 ? '#facc15' : '#ef4444';
    this.spI.querySelector('.sh-a').textContent = (vest ? 'VEST ' + vest : '') + (vest && hel ? '  \u2022  ' : '') + (hel ? 'HELMET ' + hel : '');
    this.spI.querySelector('.sh-i').textContent = ['MED ' + md, 'PILLS ' + pl, 'ADRENALINE ' + ij, 'SMOKE ' + sm, 'MOLOTOV ' + mo, 'BINOCULARS ' + sc, 'TELESCOPE ' + ss].filter((t) => !/ 0$/.test(t)).join('  \u2022  ');
    const tk = nd > 0 ? 'grenade' : mo > 0 ? 'molotov' : sm > 0 ? 'smoke' : '', hk = tk && wp === 'grenade' && ht && ((ht === 'molotov' && mo > 0) || (ht === 'smoke' && sm > 0) || ht === 'grenade') ? ht : (tk || 'grenade'), hn = hk === 'grenade' ? nd : hk === 'molotov' ? mo : sm;
    const list = [G1[0] ? G1 : null, G2[0] ? G2 : null, tk ? [hk, 'x' + hn] : null];
    this.spS.innerHTML = list.map((e, i) => '<button type="button" class="' + (e ? '' : 'empty ') + (e && (e[0] === wp || (i === 2 && wp === 'grenade')) ? 'sel' : '') + '"><u>' + (i + 1) + '</u>' + (e && this.icon(e[0] === 'molotov' || e[0] === 'smoke' ? 'grenade' : e[0]) ? '<img alt="" src="' + this.icon(e[0] === 'molotov' || e[0] === 'smoke' ? 'grenade' : e[0]) + '">' : '') + (e ? '<b>' + String(e[0]).toUpperCase() + '</b><small>' + (i === 2 ? e[1] : (e[1] | 0) + '/' + (e[2] | 0)) + '</small>' : '') + '</button>').join('');
    this.spS.style.display = 'flex'; this.spI.style.display = 'block'; if (this.hpBar) this.hpBar.style.visibility = 'hidden'; if (this.slotEl) this.slotEl.style.visibility = 'hidden';
  }
  specTick() { if (!this.spec || this.over) return; this._spT = (this._spT || 0) - 0.016; if (this._spT > 0) return; this._spT = 0.5; if (!this.specList(true).length && this.teamWiped()) this.teamLost(); }   // the last teammate fell: the team is out
  // v286 PUBG: when EVERY player of a team is down (or dead) nobody can pick anybody up: the team is out and the match is over for it
  teamWiped() { const T = this.R.jangTeam; if (!T || !this.shared || this.dropping) return false; const now = performance.now(); let seen = 0; for (const [, g] of this.mates) { if (g.tm !== T.tm || !g.has || now - g.at > 3000) continue; seen++; if (g.al !== 0 && g.ph !== 7) return false; } return seen > 0; }
  teamLost() {
    if (this.over) return; const T = this.R.jangTeam, nm = String((T && T.teamName) || 'YOUR TEAM').toUpperCase();
    try { prepareVictory(true); } catch (e) { /* noop */ }   // v417: the defeat clips load while the verdict is on its way
    const was = !!this.spec; this.spec = null; this.specHide(); this.deadT = 0;
    if (!was) { this.recDeath(); this.ejectCar(); }
    this.hp = 0; this.down = false; this.reviving = null; if (!was) { this.deaths++; try { this.dropAll(); } catch (e) { /* noop */ } A.voice.death(1); } this.R.fireHeld = false; this.R.aiming = false;
    this.R.toast && this.R.toast('TEAM ' + nm + ' LOST', 6); this.finish('TEAM ' + nm + ' LOST', 'out');
  }
  // v292: knocked down or killed inside a car / jeep / Civic: you are thrown out beside it (the others see you lying there, and the car coasts to a stop) - before this you stayed seated, hidden inside the car
  ejectCar() { const R = this.R, c = R.drive; if (!c) return; const pax = R.paxMode, sp = Math.abs(c.st.speed || 0); try { R.toggleCar(true); } catch (e) { console.warn(e); } if (!pax && sp > 1 && R.rolling && !R.rolling.includes(c)) { c.st.driver = -1; c.st.parked = false; R.rolling.push(c); } if (R.drive === c) { R.drive = null; R.paxMode = false; document.body.classList.remove('driving'); } }
  goDown() {
    this.ejectCar(); const R = this.R, T = R.jangTeam; this.down = true; this.downT = 40; this.hp = 1; R.me.body.stun = 0; R.fireHeld = false; R.aiming = false; R.prone = true; R.crouch = false; R.weapon = null; R.telescope = false; this.using = null;   /* v396: knocked down = crawl on the knees (move keys only) to a teammate */ A.voice.death(0.6);
    if (this.ov) { this.ov.style.display = 'grid'; } R.toast && R.toast('YOU ARE DOWN - a teammate can revive you', 4);
  }
  getUp(hp) { this.down = false; this.downT = 0; this.hp = hp; this.R.me.body.stun = 0; this.R.prone = false; if (this.ov) this.ov.style.display = 'none'; this.R.toast && this.R.toast('YOU WERE REVIVED', 3); }
  onRevive() { if (this.down) this.getUp(40); }
  stepDown(dt) {   // bleeding out / reviving
    if (this.down && this.teamWiped()) { this.teamLost(); return; }
    const R = this.R, T = R.jangTeam, b = R.me.body;
    let beingRv = false; if (this.down && this.hp > 0) { for (const [, r] of this.mates) if (r.rvg && !r.dd && r.ph === 4 && Math.hypot(r.x - b.x, r.z - b.z) < 1.8) { beingRv = true; break; } if (!beingRv) { const D0 = this.droidAlive(); if (D0 && Math.hypot(D0.x - (b.x - CMB.x), D0.z - (b.z - CMB.z)) < 2.6) beingRv = true; } }   /* v641: the bleed-out clock STOPS the moment a teammate (or the INTELLIDROID) starts reviving you */
    this.beingRv = beingRv;
    if (this.down) { if (!beingRv) this.downT -= dt; b.stun = 0; R.prone = true; if (this.ov) { const D = this.droidAlive(), nr = D && Math.hypot(D.x - (b.x - CMB.x), D.z - (b.z - CMB.z)) < 2.6; this.ov.textContent = 'YOU ARE DOWN  -  ' + Math.max(0, Math.ceil(this.downT)) + ' s' + (beingRv ? ' (PAUSED)' : '') + '  -  ' + (beingRv && !D ? 'YOU ARE BEING REVIVED' : D ? (nr ? 'INTELLIDROID IS REVIVING YOU' : 'INTELLIDROID IS COMING TO REVIVE YOU') : 'crawl to a teammate (move keys)'); } if (this.downT <= 0) this.die(); }
    // a teammate of mine lies down close to me: the REVIVE button; hold on for 7 s next to him and he gets up
    let near = null; if (T && !this.down && this.hp > 0 && this.deadT <= 0 && !this.dropping) for (const [, g] of this.mates) if (g.ph === 7 && !g.dd && g.tm === T.tm && g.has && Math.hypot(g.x - b.x, g.z - b.z) < 3.2) { near = g; break; }
    /* v653: no downed human beside me but my INTELLIDROID lies dead within 3 m: the same F / REVIVE button (7 s kneeling) gets it up again */
    if (!near && !this.down && this.hp > 0 && this.deadT <= 0 && !this.dropping && this.sim && this.sim.bots && performance.now() > (this._dRvOk || 0)) { const T2 = T || this.soloT; if (T2) { const Dd = this.sim.bots.find((q) => q.droid && q.dtm === T2.tm && !q.alive && q.placed !== false); if (Dd && Math.hypot(Dd.x - (b.x - CMB.x), Dd.z - (b.z - CMB.z)) < 3.2 && Math.abs(b.y - (Dd.y == null ? cmbH(Dd.x, Dd.z) : Dd.y)) < 2.4) { const P = this._dPs || (this._dPs = { id: -777, rv: 0, droid: null, x: 0, z: 0 }); if (P.droid !== Dd) { P.droid = Dd; P.rv = 0; } P.x = CMB.x + Dd.x; P.z = CMB.z + Dd.z; near = P; } } }
    if (this.reviving) { const g = this.reviving; if (!near || near !== g || this.hp <= 0) { this.reviving = null; R.toast && R.toast('REVIVE CANCELLED', 1.5); } else { { const bb = R.me.body; bb.yaw = rvYaw(g.x, g.z, bb.x, bb.z);   /* v595: kneel at his chest side, facing across his body */ bb.vx = bb.vz = 0; if (this.rvAt && Math.hypot(bb.x - this.rvAt.x, bb.z - this.rvAt.z) > 0.15) { bb.x = this.rvAt.x; bb.z = this.rvAt.z; } } g.rv = (g.rv || 0) + dt; if (g.rv >= 7) { g.rv = 0; this.reviving = null; if (g.droid) { this.sim.reviveDroid(g.droid); this._dRvOk = performance.now() + 2500; R.toast && R.toast('INTELLIDROID REVIVED', 2.5); } else { T.net && T.net.send({ t: 'jr', to: g.id }); R.toast && R.toast('TEAMMATE REVIVED', 2.5); } } } }
    if (!this.reviveBtn) { const rb = document.createElement('button'); rb.id = 'c-rev'; rb.type = 'button'; rb.textContent = 'F  -  REVIVE TEAMMATE'; rb.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); this.startRevive(); }); document.body.appendChild(rb); this.reviveBtn = rb; }
    { const tx = near && near.droid ? 'F  -  REVIVE INTELLIDROID' : 'F  -  REVIVE TEAMMATE'; if (this.reviveBtn.textContent !== tx) this.reviveBtn.textContent = tx; }
    const show = !!near && !this.reviving; if ((this.reviveBtn.style.display === 'block') !== show) this.reviveBtn.style.display = show ? 'block' : 'none'; this.nearDown = near;
    if (this.reviving && this.reviving.rv !== undefined && this.ov) { this.ov.style.display = 'none'; }
    { let rp = this.rvRing; if (!rp) { rp = this.rvRing = document.createElement('div'); rp.id = 'c-rvp'; document.body.appendChild(rp); } const on = !!this.reviving; if (on) { const k = Math.min(1, (this.reviving.rv || 0) / 7); rp.style.background = 'conic-gradient(#ffd23f ' + (k * 360) + 'deg, rgba(0,0,0,0.55) 0)'; rp.dataset.t = (7 - (this.reviving.rv || 0)).toFixed(1); } if ((rp.style.display === 'flex') !== on) rp.style.display = on ? 'flex' : 'none'; }   /* the PUBG revive ring with the seconds left */
  }
  startRevive() { const g = this.nearDown; if (!g || this.reviving || this.down || this.hp <= 0) return false; g.rv = 0; this.reviving = g;
    { const b = this.R.me.body, dx = b.x - g.x, dz = b.z - g.z, d = Math.hypot(dx, dz) || 1, nx = g.x + dx / d * 0.65, nz = g.z + dz / d * 0.65; if (!hitsSolid(layout(), nx - CMB.x, nz - CMB.z, 0.38, b.y)) { b.x = nx; b.z = nz; } b.vx = b.vz = 0; this.rvAt = { x: b.x, z: b.z }; }   /* v279: you kneel right beside him (0.9 m), facing him - the CPR pose used to play where you stood, 3 m away */ this.R.toast && this.R.toast('REVIVING... stay next to him', 4); return true; }
  // ---------------------------------------------------------------- inventory: 1 bat + 2 guns in the hands, everything else in the backpack
  // v443 (PUBG): 3 / 4 / G pick up the next throwable (grenade, molotov, smoke) into the hand, FIRE throws it; 5 / N = molotov, 9 = smoke. Pressing the same key again puts it away.
  throwList() { const cb = this.R.wallet && this.R.wallet.cb; if (!cb) return []; const l = []; if ((cb.nades | 0) > 0) l.push('grenade'); if (cb.inv && cb.inv.molotov > 0) l.push('molotov'); if (cb.inv && cb.inv.smoke > 0) l.push('smoke'); return l; }
  /* v601: is a crouching (1) / prone (2) body at this local map position inside the tall grass (patches + the whole river bed)? */
  /* v613 GRASS HIDING THAT NEVER DEPENDS ON THE DRAWN GRASS: a soldier who is crouching / lying in tall grass is not drawn at all once you are further than 40 m (crouched) / 22 m (prone) from him (x1.5 through a scope), unless he is moving fast or has just fired. The sim already lets bots see a prone player in grass only from 7 m (20 m crouched); now the picture follows the same rule, so nobody is "revealed" at 150 m when the far grass is thin or not drawn (laptop AND phone: the rule is distance, not what the GPU managed to draw). o keeps the on/off state so it does not flicker at the limit. */
  grassHidden(o, x, z, stn, d2, spd, fired) {
    if (!(stn >= 1) || fired || spd > 2.5 || !this.inGrass(x, z, stn)) { o.cGr = false; return false; }
    const R = (stn === 2 ? 22 : 40) * (this.R.scoped ? 1.5 : 1); o.cGr = o.cGr ? d2 > R * R * 0.7225 : d2 > R * R; return o.cGr;
  }
  inGrass(x, z, stn) { try { return stn >= 1 && this.sim.L.grassHide(x, z, stn) < Infinity; } catch (e) { return false; } }
  cycleThrow(want, keep, skip) {   // keep (the number keys on a laptop): the throwable already in your hands stays there (v596); skip (v651): a kind left out of the cycle (key 3 / the grenade slot cycle grenade + smoke only, the molotov has its own key 4 and slot)
    const R = this.R, l = this.throwList().filter((q) => q !== skip); if (this.over || this.dropping || R.drive || this.down) return false;
    if (!l.length) { R.toast && R.toast(skip === 'molotov' ? 'NO GRENADE / SMOKE - pick some up first' : 'NO GRENADE / MOLOTOV / SMOKE - pick some up first'); return false; }
    const cur = R.weapon === 'grenade' ? (R.heldThrow || 'grenade') : null; let k;
    if (want) { if (!l.includes(want)) { R.toast && R.toast('NO ' + want.toUpperCase()); return false; } if (cur === want) { if (keep) return true; R.equip('fist'); R.heldThrow = null; this._sk = ''; return true; } k = want; }
    else { const i = cur ? l.indexOf(cur) : -1; if (cur && i === l.length - 1 && l.length === 1) { if (keep) return true; R.equip('fist'); R.heldThrow = null; this._sk = ''; return true; } k = l[(i + 1) % l.length]; }
    R.heldThrow = k; R.equip('grenade'); this._sk = ''; R.toast && R.toast((LOOT_NAME[k] || k.toUpperCase()) + ' IN HAND - FIRE to throw' + (l.length > 1 ? '  (press again: next throwable)' : ''), 2.2); return true;
  }
  slotsTick() {   // PUBG-style weapon slots: tap a slot to hold it, tap the held one to put it away
    const R = this.R, cb = R.wallet && R.wallet.cb; if (!cb) return;
    if (!this.slotEl) { const e = document.createElement('div'); e.id = 'c-slots'; document.body.appendChild(e); this.slotEl = e;
      e.addEventListener('pointerdown', (ev) => { const t = ev.target.closest('[data-w]'); if (!t) return; ev.preventDefault(); ev.stopPropagation(); const w = t.dataset.w; if (!w) return; if (w === 'throw3') { this.cycleThrow(undefined, false, 'molotov'); return; } if (w === 'molotov') { this.cycleThrow('molotov'); return; } R.equip(R.weapon === w && w !== 'fist' ? 'fist' : w); this._sk = ''; }); }
    /* v651: FOUR slots: 1 / 2 the guns, 3 grenade (tap again: smoke), 4 MOLOTOV with its own picture and key (it used to share slot 3 with the grenade and showed the grenade picture) */
    const gs = this.guns(), nd = cb.nades | 0, mo = (cb.inv && cb.inv.molotov) | 0, sm = (cb.inv && cb.inv.smoke) | 0, ht = R.weapon === 'grenade' ? R.heldThrow : null, k3 = ht === 'smoke' && sm > 0 ? 'smoke' : nd > 0 ? 'grenade' : sm > 0 ? 'smoke' : '', k4 = mo > 0 ? 'molotov' : '', list = [gs[0] || '', gs[1] || '', k3, k4];
    const key = list.join() + '|' + nd + '|' + sm + '|' + mo + '|' + (R.weapon || 'fist') + '|' + (ht || '') + '|' + (this._fight || this._air ? 1 : 0);
    if (key === this._sk) return; this._sk = key; this.slotEl.style.display = this._fight || this._air ? 'flex' : 'none';
    this.slotEl.innerHTML = list.map((w, i) => { const th = i >= 2, sel = th ? (w && R.weapon === 'grenade' && (i === 3 ? ht === 'molotov' : ht !== 'molotov')) : (w && R.weapon === w), dw = i === 2 ? 'throw3' : w, cnt = w === 'grenade' ? nd : w === 'smoke' ? sm : w === 'molotov' ? mo : 0;
      return '<button type="button" data-w="' + dw + '" class="' + (w ? '' : 'empty ') + (sel ? 'sel' : '') + '"><u>' + (i + 1) + '</u>' + (w && this.icon(w) ? '<img alt="" src="' + this.icon(w) + '">' : '') + (w ? '<b>' + (w === 'bat' ? 'BAT' : w.toUpperCase()) + '</b><small>' + (w === 'bat' ? '' : th ? 'x' + cnt : ((cb.mag[w] | 0) + '/' + (cb.ammo[w] | 0))) + '</small>' : '') + '</button>'; }).join('');
  }
  guns() { const cb = this.R.wallet && this.R.wallet.cb; return cb ? Object.keys(cb.owned).filter((w) => cb.owned[w] && isGunK(w)) : []; }
  count(k) { const cb = this.R.wallet && this.R.wallet.cb; if (!cb) return 0; return k === 'grenade' ? cb.nades | 0 : (cb.inv && cb.inv[k]) | 0; }
  autoOk(it) {   // v360 SETTINGS > PICK UP: a category switched OFF is not picked up by walking over it (take it from the BACKPACK button)
    const pk = (OPT && OPT.pk) || null; if (!pk) return true; const k = it.k;
    const g = isGunK(k) ? 'gun' : k === 'ammo' ? 'ammo' : (k === 'med' || k === 'inject' || k === 'pills') ? 'med' : (k === 'vest' || k === 'helmet') ? 'armor' : (k === 'grenade' || k === 'smoke' || k === 'molotov') ? 'throw' : (k === 'scope' || k === 'sscope' || k === 'skin' || k === 'jet' || k === 'jfuel') ? 'gear' : '';
    if (g === 'gun' && pk['w_' + k] !== undefined && !pk['w_' + k]) return false;   // v522: each weapon has its own auto-pick-up switch (Settings > Pick Up)
    return !g || pk[g] === undefined || !!pk[g];
  }
  canTake(it) {
    const cb = this.R.wallet && this.R.wallet.cb; if (!cb) return false; const k = it.k;
    if (isGunK(k)) { if (cb.owned[k]) return (cb.ammo[k] || 0) < ((WEAPONS[k] && WEAPONS[k].ammoPack) || 0) * 3; return this.guns().length < 2; }   /* v454: a gun you already own is no longer dead weight on the floor: walking over it gives you ITS AMMO (until your reserve is 3 full packs) */   // a full pair of hands: press F to swap. v438: a gun you already own stays on the floor ("ALREADY OWNED")
    if (k === 'bat') return false;   /* v263: no bat in Jang (GTA only) */
    if (k === 'ammo') return true;   /* v255: PUBG: you can always pick ammo up; it waits in the backpack for your first gun */
    return this.count(k) < (CAP[k] || 4);
  }
  // E: swap the gun in your hands (or the first one) for the gun on the ground in front of you
  promptTick(P) {
    const it = this.sim.near(P.x, P.z, this.R.me.body.y); { const cb0 = this.R.wallet && this.R.wallet.cb; this.promptIt = it && isGunK(it.k) && !(cb0 && cb0.owned[it.k]) && !this.canTake(it) ? it : null; }
    if (it && !this.promptIt && !this.canTake(it)) { const nw = performance.now(); if (nw - (this._noT || 0) > 1800) { this._noT = nw; const nm = LOOT_NAME[it.k] || it.k.toUpperCase(); this.R.toast && this.R.toast(it.k === 'ammo' ? 'AMMO BOX - you need a gun first' : it.k === 'bat' ? 'You already have a BASEBALL BAT' : (isGunK(it.k) || CAP[it.k] === 1 ? 'ALREADY OWNED - ' + nm + (isGunK(it.k) ? ' (your ammo for it is full)' : '') : nm + ' - BACKPACK FULL (' + this.count(it.k) + '/' + (CAP[it.k] || 4) + ')'), 1.8); } }   // v247: always say WHY an item cannot be taken
    if (!this.pickBtn) { const b = document.createElement('button'); b.id = 'c-pick'; b.type = 'button'; b.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); this.swapPick(); }); document.body.appendChild(b); this.pickBtn = b; }
    { const b = this.R.me.body, nw = performance.now(); for (const t of layout().towers) { const dx = b.x - CMB.x - t.x, dz = b.z - CMB.z - t.z - 5.6; if (Math.abs(b.y - t.gy) < 1.5 && Math.hypot(dx, dz) < 3.2 && nw - (this._twT || 0) > 15000) { this._twT = nw; this.R.toast && this.R.toast('Walk in through the DOOR - the stairs wind up inside the tower', 3); } } }
    { const b = this.R.me.body; let ln = null; if (!this.R.ladR && !this.R.zipR && !this.down && !this.dropping && this.hp > 0) { const ox = b.x - CMB.x, oz = b.z - CMB.z; for (const L of layout().ladders || []) { if (Math.abs(ox - L.tw.x) > 5 || Math.abs(oz - L.tw.z) > 5) continue; if (Math.abs(b.y - L.y0) < 0.7 && Math.hypot(ox - L.fx, oz - L.fz) < 1.25) { ln = { L, dir: 'up' }; break; } if (Math.abs(b.y - L.y1) < 0.7 && Math.hypot(ox - L.tx, oz - L.tz) < 1.4) { ln = { L, dir: 'down' }; break; } } } this.ladNear = ln; }   // v503: near a tower ladder (foot = climb up, hatch edge = climb down)
    { const Z = layout().zip, b = this.R.me.body; let zn = false; if (Z && !this.R.zipR && !this.down) { const ox = b.x - CMB.x, oz = b.z - CMB.z; zn = Math.hypot(ox - Z.ax, oz - Z.az) < 1.9 && Math.abs(b.y - Z.ay) < 1.3; } this.zipNear = zn; }
    const on = (!!this.promptIt || this.zipNear || !!this.ladNear) && !this.inv.isOpen(); if (on) { const tc = !!this.R.isTouch, t = this.promptIt ? (tc ? '\u21C4  TAP: SWAP FOR ' : 'F  -  SWAP FOR ') + LOOT_NAME[this.promptIt.k] : this.ladNear ? (tc ? 'TAP: ' : 'F  -  ') + (this.ladNear.dir === 'up' ? 'CLIMB THE LADDER' : 'CLIMB DOWN') : this.zipBusy() ? 'ZIP LINE IN USE' : (tc ? 'TAP: RIDE ZIP LINE' : 'F  -  RIDE ZIP LINE');   /* v435: no keyboard letter on phones */ if (this.pickBtn.textContent !== t) this.pickBtn.textContent = t; } if ((this.pickBtn.style.display !== 'none') !== on) this.pickBtn.style.display = on ? 'block' : 'none';
  }
  buildZip() {   // v329: code-made placeholder (two posts, a steel cable, a handle) until the real zip line GLB arrives
    const Z = layout().zip; if (!Z) return; const g = new THREE.Group(), mat = new THREE.MeshLambertMaterial({ color: 0x2b2f33 }), cab = new THREE.MeshLambertMaterial({ color: 0xc9ced3 });
    const A = new THREE.Vector3(CMB.x + Z.ax, Z.ah, CMB.z + Z.az), B = new THREE.Vector3(CMB.x + Z.bx, Z.bh, CMB.z + Z.bz), d = B.clone().sub(A), len = d.length();
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, len, 6), cab); c.position.copy(A).addScaledVector(d, 0.5); c.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize()); g.add(c);
    const post = (x, y0, z, h) => { const m = new THREE.Mesh(new THREE.BoxGeometry(0.16, h, 0.16), mat); m.position.set(CMB.x + x, y0 + h / 2, CMB.z + z); g.add(m); };
    post(Z.ax, Z.ay, Z.az, Z.H + 0.05); post(Z.bx, Z.by, Z.bz, Z.H + 0.05);
    const h = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 0.06), mat); h.position.copy(A).add(new THREE.Vector3(0, -0.05, 0)); g.add(h); this.zipHandle = h; this.zipA = A; this.zipB = B;
    this.zipG = g; this.group.add(g); }
  /* v410: TEAM PINS in the world: a flag with 'PIN - NAME' and the distance, drawn on top of walls (a screen-size sprite, so it is readable from far away) */
  setPins(list) {
    this.pinObjs = this.pinObjs || new Map(); const keep = new Set(list.map((q) => q.id));
    for (const [id, o] of this.pinObjs) if (!keep.has(id)) { this.group.remove(o.s); o.s.material.map.dispose(); o.s.material.dispose(); this.pinObjs.delete(id); }
    for (const q of list) { let o = this.pinObjs.get(q.id);
      if (!o) { const cv = document.createElement('canvas'); cv.width = 256; cv.height = 112; const tex = new THREE.CanvasTexture(cv), s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false, depthWrite: false, sizeAttenuation: false })); s.scale.set(0.2, 0.0875, 1); s.renderOrder = 999; s.frustumCulled = false; this.group.add(s); o = { s, cv, tex, d: -1 }; this.pinObjs.set(q.id, o); }
      o.q = q; o.d = -1; o.s.position.set(q.x, cmbH(q.x - CMB.x, q.z - CMB.z) + 7, q.z); }
    this._pinT = 0;
  }
  pinTick(dt) {
    if (!this.pinObjs || !this.pinObjs.size) return; this._pinT = (this._pinT || 0) - dt; if (this._pinT > 0) return; this._pinT = 0.4; const b = this.R.me.body;
    for (const [, o] of this.pinObjs) { const d = Math.round(Math.hypot(o.q.x - b.x, o.q.z - b.z)); if (d === o.d) continue; o.d = d;
      const g = o.cv.getContext('2d'), W = 256, H = 112; g.clearRect(0, 0, W, H); g.fillStyle = 'rgba(10,14,22,.78)'; g.strokeStyle = o.q.col || '#e11d48'; g.lineWidth = 5; g.beginPath(); g.roundRect ? g.roundRect(4, 4, W - 8, H - 8, 16) : g.rect(4, 4, W - 8, H - 8); g.fill(); g.stroke();
      g.font = '38px sans-serif'; g.textAlign = 'left'; g.textBaseline = 'middle'; g.fillStyle = '#fff'; g.fillText('\u{1F6A9}', 14, H / 2);
      g.font = '900 24px Arial, sans-serif'; { const tx = o.q.me ? 'YOUR PIN' : 'PIN - ' + o.q.nm, mw = g.measureText(tx).width; g.save(); g.translate(66, 36); if (mw > 178) g.scale(178 / mw, 1); g.fillText(tx, 0, 0); g.restore(); } g.fillStyle = '#ffd23f'; g.font = '900 30px Arial, sans-serif'; g.fillText(d + ' m', 66, 78); o.tex.needsUpdate = true; }
  }
  zipBusy() { for (const [, g] of this.mates) if (g.ph === 4 && ((g.st | 0) & 1024)) return true; return false; }
  swapPick() {
    if (this.nearDown && this.startRevive()) return true;   // v244: F next to a downed teammate = revive him
    if (this.ladNear && !this.promptIt) return this.R.startLadder && this.R.startLadder(this.ladNear.L, this.ladNear.dir);
    if (this.zipNear && !this.promptIt) { if (this.zipBusy()) { this.R.toast && this.R.toast('Zip line in use - wait your turn', 1.6); return true; } return this.R.startZip && this.R.startZip(); }
    const R = this.R, cb = R.wallet && R.wallet.cb, it = this.promptIt; if (!cb || !it || !it.alive || !this.active) return false;
    const held = R.weapon && cb.owned[R.weapon] && isGunK(R.weapon) ? R.weapon : this.guns()[0]; if (!held) return false;
    this.dropGun(held, true);
    it.alive = false; if (this.shared) { if (it.id > 0) this.R.jangTeam.net.send({ t: 'ctake', id: it.id }); } else { if (it.spot >= 0) this.sim.used.delete(it.spot); this.sim.events.push({ k: 'lootgone', id: it.id }); } this.pickup(it, true); this.promptIt = null; return true;
  }
  dropSpot(b, far = true) {   // v327: a dropped item lands 3+ m away (outside the 1.8 m auto pick-up ring), on a free spot with floor under it, so you do not pick the same thing up again at once
    const ox = b.x - CMB.x, oz = b.z - CMB.z, L = layout(), hi = b.y > cmbH(ox, oz) + 0.35;
    if (far) for (const dist of [3.4, 3.0, 2.6, 2.2]) for (const da of [0, 0.5, -0.5, 1.0, -1.0, 3.14]) { const x = ox + Math.sin(b.yaw + da) * dist, z = oz + Math.cos(b.yaw + da) * dist;
      if (hitsSolid(L, x, z, 0.25, b.y)) continue; if (hi && supportY(L, x, z, 0.1, b.y + 0.3) < b.y - 0.4) continue; return { x, z }; }
    return { x: ox + Math.sin(b.yaw) * 1.2, z: oz + Math.cos(b.yaw) * 1.2 };
  }
  dropY(it, b) { if (b.y > cmbH(it.x, it.z) + 0.35) it.y = b.y; }   // v301: an item dropped on a floor / roof / stairs lies THERE for everybody (the server and the other phones used to put it on the ground under the building)
  dropGun(w, silent) {
    const R = this.R, cb = R.wallet && R.wallet.cb, b = R.me.body; if (!cb || !cb.owned[w]) return false;
    const am = { mag: cb.mag[w] | 0, res: cb.ammo[w] | 0 }, dp = this.dropSpot(b, !silent), x = dp.x, z = dp.z;
    const it = this.sim.dropLoot(w, x, z); this.dropY(it, b); it.am = am; cb.owned[w] = false; delete cb.mag[w]; delete cb.ammo[w];
    if (R.weapon === w) { const left = this.guns()[0]; R.equip(left || (cb.owned.bat ? 'bat' : 'fist')); }
    if (!silent) { R.toast && R.toast('DROPPED ' + LOOT_NAME[w]); A.sfx.click && A.sfx.click(); }
    R.updateAmmoHud && R.updateAmmoHud(); R.syncAct && R.syncAct(); this.syncLoot(); if (this.inv) this.inv.render(); return true;
  }
  dropItem(k) {   // v281: drop ONE of anything from the backpack (heals, smoke, grenade, scopes, armour) on the ground in front of you: a teammate (or you) can pick it up again
    const R = this.R, cb = R.wallet && R.wallet.cb, b = R.me.body; if (!cb || !this.sim || this.dropping || this.down) return false;
    const n = k === 'grenade' ? cb.nades | 0 : (cb.inv && cb.inv[k]) | 0; if (n <= 0) return false;
    if (k === 'grenade') { cb.nades = n - 1; if (R.weapon === 'grenade' && cb.nades <= 0) R.equip(this.guns()[0] || 'fist'); } else { cb.inv[k] = n - 1; if (k === 'vest' && cb.inv.vest <= 0) cb.vestHp = 0; if (k === 'helmet' && cb.inv.helmet <= 0) cb.helmHp = 0; if (k === 'scope' && cb.inv.scope <= 0 && R.telescope) { try { R.telescope = false; } catch (e) { /* noop */ } } }
    const dp = this.dropSpot(b), it = this.sim.dropLoot(k, dp.x, dp.z); this.dropY(it, b);
    R.toast && R.toast('DROPPED ' + (LOOT_NAME[k] || String(k).toUpperCase())); A.sfx.click && A.sfx.click(); void it;
    R.updateAmmoHud && R.updateAmmoHud(); R.syncAct && R.syncAct(); this._sk = ''; this.syncLoot(); this.updateHud && this.updateHud(); if (this.inv) this.inv.render(); return true;
  }
  // v271: a small PUBG-style pick-up feed (bottom left, above the hotbar): every pick-up shows what you got for ~2.6 s
  feed(txt, col) {
    let f = this.pkFeed; if (!f) { f = this.pkFeed = document.createElement('div'); f.style.cssText = 'position:fixed;left:14px;bottom:140px;z-index:6;display:flex;flex-direction:column-reverse;gap:3px;pointer-events:none;font:700 13px system-ui,sans-serif;letter-spacing:.5px'; document.body.appendChild(f); }
    const e = document.createElement('div'); e.textContent = txt; e.style.cssText = 'padding:3px 9px;border-left:3px solid ' + (col || '#ffd23f') + ';background:rgba(0,0,0,.55);color:#fff;border-radius:3px;transition:opacity .5s,transform .5s;opacity:0;transform:translateX(-10px)'; f.appendChild(e);
    requestAnimationFrame(() => { e.style.opacity = 1; e.style.transform = 'none'; }); setTimeout(() => { e.style.opacity = 0; }, 2400); setTimeout(() => e.remove(), 3000); while (f.children.length > 4) f.firstChild.remove();
  }
  pickup(it) {
    if (this.train && it.tk) { const tk = it.tk; setTimeout(() => { if (this.on && this.train && this.sim) { const n = this.sim.addLootAt(it.k, it.x, it.z, {}); n.y = it.y; n.tk = tk; } }, 2500); }   // v442: a training item comes back 2.5 s after you take it
    this.feed('+ ' + (LOOT_NAME[it.k] || String(it.k).toUpperCase()));
    const R = this.R, W = R.wallet, cb = W && W.cb; if (!cb) return; if (!cb.inv) cb.inv = { med: 0, inject: 0, pills: 0, smoke: 0, molotov: 0, scope: 0, sscope: 0 }; const k = it.k, A_ = (m) => { R.toast && R.toast(m); A.sfx.pickup && A.sfx.pickup(); };
    const gun = (w) => { const S = WEAPONS[w]; if (!cb.owned[w]) { cb.owned[w] = true; cb.mag[w] = it.am ? it.am.mag : S.mag; cb.ammo[w] = (it.am ? it.am.res : S.ammoPack) + (cb.spare | 0) * (S.ammoPack || 0); cb.spare = 0; if (!R.weapon || R.weapon === 'bat' || R.weapon === 'fist' || it.am) R.equip(w); A_('PICKED UP ' + LOOT_NAME[w]); } else { cb.ammo[w] = (cb.ammo[w] || 0) + S.ammoPack; A_(LOOT_NAME[w] + ' - EXTRA AMMO'); } };
    if (isGunK(k)) gun(k);
    else if (k === 'bat') { cb.owned.bat = true; if (!R.weapon) R.equip('bat'); A_('PICKED UP BASEBALL BAT'); }
    else if (k === 'grenade') { cb.nades = (cb.nades | 0) + 1; A_('PICKED UP GRENADE  x' + cb.nades + '  (BACKPACK)'); }
    else if (k === 'ammo') { let n = 0; if (!Object.keys(cb.owned).some((w) => cb.owned[w] && WEAPONS[w] && WEAPONS[w].mag)) { cb.spare = (cb.spare | 0) + 1; A_('AMMO BOX picked up - it goes to your first gun'); R.updateAmmoHud && R.updateAmmoHud(); this.updateHud(); if (this.inv) this.inv.render(); return; } for (const w of Object.keys(cb.owned)) if (WEAPONS[w] && WEAPONS[w].mag && cb.owned[w]) { cb.ammo[w] = (cb.ammo[w] || 0) + WEAPONS[w].ammoPack; n++; } A_(n ? 'AMMO BOX  -  ammo for ' + Object.keys(cb.owned).filter((w) => WEAPONS[w] && WEAPONS[w].mag && cb.owned[w]).map((w) => LOOT_NAME[w] || w.toUpperCase()).join(', ') : 'AMMO BOX - FIND A GUN FIRST'); }
    else if (ITEM_K.includes(k)) { cb.inv[k] = (cb.inv[k] | 0) + 1; if (k === 'vest') cb.vestHp = 220; if (k === 'helmet') cb.helmHp = 150; A_('PICKED UP ' + LOOT_NAME[k] + '  x' + cb.inv[k] + '  (BACKPACK)'); }
    R.updateAmmoHud && R.updateAmmoHud(); R.syncAct && R.syncAct(); this.updateHud(); if (this.inv) this.inv.render();
  }
  // use something from the backpack: heals take a few seconds (you walk slower and the hand goes to the face), a smoke bomb is thrown, the telescope zooms
  useItem(k) {
    const R = this.R, cb = R.wallet && R.wallet.cb; if (!cb || !this.active || this.dropping || R.drive || this.over) return false; const have = this.count(k);
    if (k === 'sscope') { if (have <= 0) { R.toast && R.toast('NO TELESCOPE'); return false; } if (!cb.owned.sniper) { R.toast && R.toast('You need the SNIPER RIFLE (Kar98) first - the scope clips onto it', 3); return false; } R.equip('sniper'); R.toast && R.toast('SCOPE FITTED to the Kar98 - hold AIM (right mouse / AIM button) to look through it; the mouse wheel or the + / - buttons on screen zoom', 4.5); if (this.inv) this.inv.toggle(false); return true; }
    if (k === 'scope') { if (have <= 0) { R.toast && R.toast('NO BINOCULARS'); return false; } if (R.weapon === 'sniper') { R.toast && R.toast('BINOCULARS are a separate item - they cannot be used on the Kar98 (it has its own TELESCOPE). Put the rifle away first.', 3.5); return false; } const nowT = performance.now(); if (nowT - (this._tsT || 0) < 1000) return false; this._tsT = nowT; R.telescope = !R.telescope; R.toast && R.toast(R.telescope ? 'BINOCULARS  -  mouse wheel / the + - buttons zoom' : 'BINOCULARS AWAY'); if (this.inv) this.inv.toggle(false); return true; }
    if (k === 'grenade') { if (have <= 0) return false; R.heldThrow = 'grenade'; R.equip('grenade'); if (this.inv) this.inv.toggle(false); return true; }
    if (k === 'vest' || k === 'helmet') { R.toast && R.toast(have > 0 ? (k === 'vest' ? 'BODY ARMOR ON: ' + Math.round(cb.vestHp) + ' left, takes 40% of every body shot' : 'HELMET ON: ' + Math.round(cb.helmHp) + ' left, takes 40% of every headshot') : 'NONE', 2.5); return false; }
    if (k === 'jfuel') { if (have <= 0) { R.toast && R.toast('NO JET FUEL'); return false; } if (!this.jet || !this.jet.has()) { R.toast && R.toast('JET FUEL refills a JETPACK - find one on a ROOF first', 3); return false; } if (this.jet.fuel > JET.FUEL - 0.25) { R.toast && R.toast('JETPACK TANK IS ALREADY FULL', 2); return false; } cb.inv.jfuel = Math.max(0, (cb.inv.jfuel | 0) - 1); this.jet.fuel = JET.FUEL; R.toast && R.toast('JETPACK REFUELLED  -  ' + cb.inv.jfuel + ' can' + (cb.inv.jfuel === 1 ? '' : 's') + ' left', 2.5); try { A.sfx.pickup && A.sfx.pickup(); } catch (e) { /* noop */ } this.updateHud(); if (this.inv) { this.inv.render(); this.inv.toggle(false); } return true; }
    if (k === 'jet') { R.toast && R.toast(have > 0 ? (R.isTouch ? 'JETPACK on your back: tap JET on the ground / a roof' : 'JETPACK on your back: press J on the ground / a roof') : 'NO JETPACK  -  find one on a ROOF', 3); if (have > 0 && this.inv) this.inv.toggle(false); return false; }
    if (k === 'skin') { if (have <= 0) { R.toast && R.toast('NO MILITARY SKIN'); return false; } this.skinOn = !this.skinOn; this.applySkin(); R.toast && R.toast(this.skinOn ? 'MILITARY SKIN ON' : 'MILITARY SKIN OFF  (it stays in your backpack)', 2.4); if (this.inv) this.inv.render(); return true; }
    if (have <= 0) { R.toast && R.toast('NONE LEFT'); return false; }
    if (k === 'smoke' || k === 'molotov') { R.nadeKind = k; const ok = R.throwNade(); if (!ok) R.nadeKind = null; else if (this.inv) this.inv.toggle(false); return ok; }
    const U = USE[k]; if (!U) return false; if (this.using) { this.using = null; R.toast && R.toast('CANCELLED'); return false; }
    if (this.hp >= MY_DMG) { R.toast && R.toast('HEALTH IS FULL'); return false; }
    this.using = { k, t: 0, dur: U.dur, given: 0 }; R.aiming = false; R.fireHeld = false;   /* v414: no shooting / ammo use while healing */ if (this.inv) this.inv.toggle(false); return true;
  }
  /* v432: practice (HOW TO PLAY): the 2 easy bots wait 40-100 m from where YOU landed, so the player meets them straight away instead of searching the whole island */
  placePracticeBots() {
    this._pracPlaced = true; const sim = this.sim, b = this.R.me.body, px = b.x - CMB.x, pz = b.z - CMB.z;
    const cand = sim.L.spawns.map((sp) => ({ sp, d: Math.hypot(sp.x - px, sp.z - pz) })).filter((c) => c.d > 38 && c.d < 105).sort((a, c) => a.d - c.d);
    const pool = cand.length >= 2 ? cand : sim.L.spawns.map((sp) => ({ sp, d: Math.hypot(sp.x - px, sp.z - pz) })).filter((c) => c.d > 22).sort((a, c) => a.d - c.d);
    const used = []; sim.bots.forEach((bt, i) => { const c = pool.find((q) => !used.includes(q) && (used.length === 0 || Math.hypot(q.sp.x - used[0].sp.x, q.sp.z - used[0].sp.z) > 15)) || pool[i % Math.max(1, pool.length)]; if (!c) return; used.push(c); bt.x = c.sp.x; bt.z = c.sp.z; bt.path = null; bt.pi = 0; bt.seen = false; bt.alert = 0; bt.cool = 2.5; bt.react = 0; bt.yaw = Math.atan2(px - c.sp.x, pz - c.sp.z); });
  }
  boostSpd() { const b = this.boost || 0; return b >= 75 ? 1.062 : b >= 50 ? 1.025 : 1; }
  /* v580 MILITARY SKIN (Jang only): found on some dead soldiers, worn from the BACKPACK, lost at the end of the match. It re-colours a private copy of the player's own character materials (the shared ones are never touched, so every other soldier keeps his look). */
  applySkin() {
    const m = this.R.me && this.R.me.model; if (!m || !m.group) return; const on = !!this.skinOn; if (m._skinOn === on) return; m._skinOn = on;
    m.group.traverse((o) => { if (!o.isMesh || !o.material || Array.isArray(o.material)) return; const u = o.userData; if (!u.m0) { u.m0 = o.material; if (!o.material.color) return; u.m1 = o.material.clone(); u.m1.color.multiply(new THREE.Color(0x8fa86a)); }
      if (u.m1) o.material = on ? u.m1 : u.m0; });
  }
  skinTick() {
    if (this.skinOn && this.count('skin') <= 0) { this.skinOn = false; this.applySkin(); this.R.toast && this.R.toast('MILITARY SKIN OFF', 2); }
    const m = this.R.me && this.R.me.model; if (m && this.skinOn && m._skinOn !== true) this.applySkin();
  }
  cancelUse(msg) { if (!this.using) return; this.using = null; if (this.useBar) this.useBar.style.display = 'none'; this.R.toast && this.R.toast(msg || 'HEALING STOPPED', 2.2); }
  useTick(dt) {
    this.skinTick();
    if (this.boost > 0) {   /* v540 PUBG boost bar: drains 1 per second; while it lasts it heals (tier 1-4 = 0.2 / 0.4 / 0.6 / 0.8 HP per second); from 50 it adds +2.5% run speed, from 75 +6% */
      if (this.hp > 0 && !this.down && !this.dropping) { const tr = this.boost >= 75 ? 3 : this.boost >= 50 ? 2 : this.boost >= 25 ? 1 : 0; if (this.hp < MY_DMG) this.hp = Math.min(MY_DMG, this.hp + (0.2 + tr * 0.2) * dt); this.boost = Math.max(0, this.boost - dt); }
      else if (this.hp <= 0) this.boost = 0;
    }
    { const bq = Math.round((this.boost || 0) * 2); if (bq !== this._bq) { this._bq = bq; const bs = this.hpBar && this.hpBar.querySelectorAll('.cp-bs i'); if (bs) for (let i = 0; i < 4; i++) bs[i].style.width = Math.max(0, Math.min(100, ((this.boost || 0) - i * 25) * 4)) + '%'; const hn = this.hpBar && this.hpBar.querySelector('.cp-n'); if (hn) hn.textContent = Math.round(clamp(this.hp, 0, MY_DMG)); const hbb = this.hpBar && this.hpBar.querySelector('.cp-b'); if (hbb) { const h = clamp(this.hp, 0, MY_DMG); hbb.style.width = h + '%'; hbb.style.background = h > 55 ? '#4ade80' : h > 25 ? '#facc15' : '#ef4444'; } } }
    const u = this.using, R = this.R, cb = R.wallet && R.wallet.cb; if (!u) { if (this.useBar && this.useBar.style.display !== 'none') this.useBar.style.display = 'none'; return; }
    if (!cb || this.hp <= 0 || R.drive) { this.using = null; return; }
    { const bd = R.me.body, spd = Math.hypot(bd.vx || 0, bd.vz || 0), busy = spd > (u.pz ? 3.0 : 3.4) || R.fireHeld || R.shootT > 0 || (!bd.grounded && !R.hang);   /* v515: running, jumping or FIRING pauses the heal (the progress is kept); when you stand, walk, crouch or lie down again it CONTINUES by itself - no need to use the item again */
      if (busy !== !!u.pz) { u.pz = busy; if (busy && R.toast) R.toast('HEAL PAUSED  -  stop running / firing and it continues', 2); } }
    const U = USE[u.k]; if (!u.pz) u.t += dt; const f = Math.min(1, u.t / u.dur);   /* v432 (PUBG): NOTHING is healed until the item is used up; if it is interrupted nothing is healed and nothing is used */
    if (!this.useBar) { const b = document.createElement('div'); b.id = 'c-use'; b.innerHTML = '<span></span><i></i>'; document.body.appendChild(b); this.useBar = b; }
    this.useBar.style.display = 'block'; this.useBar.firstChild.textContent = (u.pz ? 'PAUSED ' : 'USING ') + U.name + '  ' + Math.round(f * 100) + '%'; this.useBar.lastChild.style.width = (f * 100) + '%';
    if (u.t >= u.dur) { cb.inv[u.k] = Math.max(0, (cb.inv[u.k] | 0) - 1); if (U.cap) this.hp = Math.max(this.hp, Math.min(U.cap, this.hp + U.hp)); else this.hp = Math.min(MY_DMG, this.hp + (U.hp || 0)); if (U.boost) { this.boost = Math.min(100, (this.boost || 0) + U.boost); R.toast && R.toast(U.name + '  +' + U.boost + ' BOOST'); } else R.toast && R.toast(U.name + '  HEALED'); A.sfx.pickup && A.sfx.pickup(); this.using = null; this.updateHud(); if (this.inv) this.inv.render(); }
  }
  finish(msg, why) {
    if (this.jet) this.jet.reset();
    if (this.over) return; this.over = true; const R = this.R; R.fireHeld = false;
    try { const left = this.sim && this.sim.bots ? this.sim.bots.filter((q) => q.alive && !q.droid).length : 0, why2 = msg ? msg : why === 'win' ? (left ? 'LAST TEAM STANDING (server)' : 'ALL BOTS ELIMINATED') : 'TIME UP'; window.__endWhy = why2 + ' | bots left ' + left + ' | t ' + Math.round(this.t); console.log('[match end]', window.__endWhy); if (!msg && left > 0 && R.toast) R.toast('MATCH ENDED: ' + why2 + ' - BOTS LEFT ' + left, 6); } catch (e) { /* noop */ }   /* v598: the end of a match always says WHY (and how many bots were left) */
    this.ov.style.display = 'grid'; this.ov.innerHTML = '<div><div style="font-size:34px;color:' + (msg ? '#ff6a6a' : '#ffd23f') + '">' + (msg || (why === 'win' ? 'MISSION PASSED' : 'MATCH OVER')) + '</div><div>KILLS: ' + this.kills + '  \u2022  DEATHS: ' + this.deaths + '</div><div style="color:#5ef0a0">EARNED $' + (this.pay || 0) + '</div>' + (this.shared ? '<div style="font-size:14px;opacity:.8;margin-top:6px">Waiting for the other players...</div>' : '') + '</div>';
    // v338: the victory page: the shared match waits for the server's verdict (team scores), a solo match shows it at once
    const T = R.jangTeam; this.timeUp = !msg; this.resSent = false; if (!msg && !(this.shared && why !== 'win')) this.beginWin();   /* v417: a shared TIME-UP waits for the verdict (win song or defeat song) */   /* v411: a decided match (win / time up): stay in the scene with the victory song */
    if (this.shared && T && T.net) { T.net.send({ t: 'cstat', rd: R.mission ? R.mission.round | 0 : 0, k: this.kills, d: this.deaths, bots: this.st.bots, ply: this.st.ply, dby: this.st.dby, out: why === 'out' ? 1 : 0, fin: 1, tu: !msg ? 1 : 0 }); this.resT = setTimeout(() => this.sendRes(), 14000); }
    else { this.showWin({ win: 0, lost: !!msg, teams: [{ tm: 0, k: this.kills, d: this.deaths, n: String((T && T.teamName) || 'YOUR TEAM') }], rows: [{ id: 0, name: R.me.name || 'YOU', tm: 0, ch: R.me.char | 0, sk: R.me.skin === undefined ? R.me.char | 0 : R.me.skin | 0, k: this.kills, d: this.deaths, bots: this.st.bots, ply: this.st.ply, dby: this.st.dby }] }); }
  }
  backToRoom() { this.sendRes(); const R = this.R; setTimeout(() => { if (R.onBackToRoom) R.onBackToRoom(); else if (R.onCombatDone) R.onCombatDone(); }, 150); }   // v433: rematch in the same room
  leaveAfterWin() { this.sendRes(); const R = this.R; setTimeout(() => { if (R.onCombatDone) R.onCombatDone(); }, 350); }   // v361: CONTINUE goes straight to the menu (it used to leave a broken empty scene on screen for ~8 s)
  sendRes() { if (this.resSent) return; this.resSent = true; clearTimeout(this.resT); const R = this.R; if (R.mission) R.mission.send({ t: 'm_res', ok: true, round: R.mission.round }); }
  stRec(kind, w) { const o = this.st[kind], n = this.wName(w); o[n] = (o[n] || 0) + 1; }
  recDeath() { const now = performance.now(), lh = this.lastHit, pv = this.lastBy && now - (this.lastByAt || 0) < 9000; this.stRec('dby', pv ? (this.lastByW || 'gun') : lh && now - lh.at < 6000 ? lh.w : 'zone'); }
  onWin() { if (!this.over) this.finish('', 'win'); }   // the server: only one team is left
  /* v411: when the match is decided the player STAYS in the last scene for 5 s with the victory song playing (game sounds off), then the victory page opens and the song carries on without a break */
  beginWin(lost) { try { prepareVictory(!!lost); } catch (e) { /* noop */ } const go = () => { this._songT = 0; try { startWinSong(!!lost); } catch (e) { /* noop */ } };
    if (this._winAt) { if (lost !== undefined) { if (this._songT && !!lost === !!this._songLost) return; clearTimeout(this._songT); go(); } return; }
    const dl = !lost && performance.now() - (this._lastKillAt || 0) < 900 ? 1700 : 0;   /* v494: the LAST bot's kill sound (shot + death cry) is heard first - the victory song starts 1.7 s later (it used to start at once and hush every other sound); the quiet last scene and the victory page are shifted by the same time */
    this._winAt = performance.now() + dl; this._songLost = !!lost; if (dl) this._songT = setTimeout(go, dl); else go(); if (this.ov) this.ov.style.display = 'none'; }   // the song and the quiet last scene start the moment the match is decided
  winScene(m, tm) { if (this._winT) return; const lost = !!m.lost || (m.win !== undefined && m.win !== null && tm !== undefined && tm !== null && tm !== m.win); this.beginWin(lost);
    /* v420: the player keeps walking round the last scene for 6 s with the song playing, then the screen FADES to black (0.7 s) and the victory / defeat page opens; it never opens sooner than 6 s after the match was decided */
    const FADE = 700, el0 = performance.now() - this._winAt, showAt = Math.max(6000, el0 + FADE), fadeIn = Math.max(0, showAt - FADE - el0);
    this._winFade = setTimeout(() => { const f = document.createElement('div'); f.id = 'win-fade'; f.style.cssText = 'position:fixed;inset:0;z-index:199;background:#000;opacity:0;pointer-events:none;transition:opacity ' + FADE + 'ms ease-in'; document.body.appendChild(f); this._fadeEl = f; requestAnimationFrame(() => requestAnimationFrame(() => { f.style.opacity = '1'; })); }, fadeIn);
    this._winT = setTimeout(() => { this._winT = 0; this._winAt = 0; const f = this._fadeEl; this._fadeEl = null; this.victoryOpen = true; showVictory(m, tm, () => this.leaveAfterWin(), this.shared && this.R.jangTeam && this.R.jangTeam.net ? { back: () => this.backToRoom() } : null); if (f) { f.style.transition = 'opacity 400ms'; f.style.opacity = '0'; setTimeout(() => f.remove(), 450); } }, showAt - el0); }
  onRes(m) { clearTimeout(this.resT); if (!this.over) this.finish(''); this.winScene(m, this.R.jangTeam && this.R.jangTeam.tm); }
  showWin(m) { this.winScene(m, 0); }
  // ---------------------------------------------------------------- the player's attacks (called by main.js; coordinates are world coordinates)
  shoot(ox, oz, fx, fz, range, dmg, w, y, bal) {
    if (!this.active) return -1; this.myW = w; this.shotAt = performance.now(); const ev0 = this.sim.events ? this.sim.events.length : 0; let d = this.sim.shoot(ox - CMB.x, oz - CMB.z, fx, fz, range, dmg, y, undefined, undefined, bal, w); const T = this.R.jangTeam; this._hitB = false; if (this.sim.events) for (let i = ev0; i < this.sim.events.length; i++) { const q = this.sim.events[i]; if (q.k === 'kill' || q.k === 'bothit') { this._hitB = true; break; } }   /* v624: did this bullet hit a bot (no dust on a body) */
    if (!this.shared && this.sim.events) { for (let i = ev0; i < this.sim.events.length; i++) { const q = this.sim.events[i]; if (q.k === 'kill' || q.k === 'bothit') { this.hitX(q.k === 'kill' || !!q.h); if (q.h) this.R.toast && this.R.toast('HEADSHOT', 0.8); break; } } }   // solo: the hit is known at once
    if (this.shared && T && T.net) {   // v246 PvP: a player of the OTHER team on the line of fire (before any wall / bot): the server takes his health. Teammates are never hurt.
      const lim = d > 0 ? d : range, now = performance.now(); let hit = null, hd = lim;
      /* v605 PUBG HIT BOX: a player used to be hit by a bullet passing up to 0.95-1.45 m from his centre (a 2-3 m wide target, the bots' is 1.1-1.2 m) and a crouching / prone player was as tall as a standing one, so opponents landed far more bullets than the PUBG capsule (about 0.3 m radius) allows. Now: radius 0.55 m (+2 mm per metre of range, max +0.2 m for the lag of the picture) and a height that follows the stance (standing 1.8 m, crouched 1.25 m, prone 0.6 m, like the bots). */
      for (const [, g] of this.mates) { if (g.tm === T.tm || !g.has || g.ph < 4 || g.ph > 7 || now - g.at > 1500 || !g.m.group.visible) continue; const dx = g.x - ox, dz = g.z - oz, a = dx * fx + dz * fz; if (a < 0.2 || a > hd) continue; if (Math.abs(-dx * fz + dz * fx) > 0.55 + Math.min(0.2, a * 0.002)) continue; const gs = g.ph === 4 ? g.st | 0 : 0, Hg = gs & 2 ? STH_PV[2] : gs & 1 ? STH_PV[1] : STH_PV[0]; if (bal) { const yb = bal.y + bal.sl * a - bal.k * a * a; if (!(yb > g.y - 0.15 && yb < g.y + Hg + 0.12)) continue; } hit = g; hd = a; hit.Hg = Hg; }
      if (hit) { const Hh = hit.Hg || 1.8, rel = bal ? bal.y + bal.sl * hd - bal.k * hd * hd - hit.y : undefined, zn = zoneOf(rel, Hh, Hh < 0.7 ? 0.22 : Hh < 1.5 ? 0.28 : 0.35), dm = GUNS[w] ? gunDamage(w, hd, zn, rel, Hh) * PVP_SCALE : dmg * 12; T.net.send({ t: 'cpv', to: hit.id, d: +Math.min(250, dm).toFixed(1), z: zn, w: String(w || '').slice(0, 11) }); return hd; }
    }
    return d;
  }
  hurtPv(m) { if (!this.on || this.hp <= 0 || this.deadT > 0 || this.dropping) return; this.lastBy = m.from; this.lastByW = m.w || ''; this.lastByAt = performance.now(); { const g = this.mates.get(m.from); this.hurt(Math.max(0, Math.min(250, +m.d || 0)), g && g.has ? g.x : undefined, g && g.has ? g.z : undefined, (m.z | 0) & 3); } }   // v246: shot by a player of the other team
  onKillCredit() { this.kills++; this.stRec('ply', this.myW); this.R.toast && this.R.toast('ENEMY DOWN'); this.hitX(true); this.feed('YOU', this.wName(this.myW), 'ENEMY PLAYER', true); }
  melee(x, z, fx, fz, reach, kind) { if (!this.active) return 0; const dm = kind === 'bat' ? 55 : kind === 'kick' ? 30 : 22; return this.sim.melee(x - CMB.x, z - CMB.z, fx, fz, reach, dm); }
  blast(x, z, r) {
    if (!this.active) return; this.sim.blast(x - CMB.x, z - CMB.z, r, 3.2);
  }
  /* v604 PUBG: a frag grenade hurts EVERYBODY in the blast - the other team, your own teammates and YOU (from = the thrower's id, undefined = my own grenade). Every screen judges its own player (exact position). Lethal within 3.5 m, moderate to 8.5 m, light to 10 m, measured in 3D, nothing through walls; a vest takes 40% off (and is not damaged), a helmet does nothing, prone takes 20% less. An enemy's grenade credits him with the kill; a teammate's or my own does not. */
  blastMe(x, y, z, from) {
    const R = this.R, T = R.jangTeam, self = from === undefined; if (!this.on || this.hp <= 0 || this.deadT > 0 || this.dropping) return; if (!self && !(this.shared && T)) return;
    const b = R.me.body, dh = Math.hypot(b.x - x, b.z - z), d = Math.hypot(dh, (b.y + 1) - y); if (d > FRAG_REACH) return;
    if (dh > 1.5 && !los(layout(), x - CMB.x, z - CMB.z, b.x - CMB.x, b.z - CMB.z)) return;
    let dm = fragDmg(d); if (R.prone) dm *= 0.8; { const cb = R.wallet && R.wallet.cb; if (cb && cb.vestHp > 0) dm *= 0.6; }
    const foe = !self && ((((T.teamOf || {})[from]) | 0) !== (T.tm | 0)), now = performance.now();
    if (foe) { this.lastBy = from; this.lastByW = 'grenade'; this.lastByAt = now; } else this.lastHit = { who: self ? 'YOUR OWN GRENADE' : 'TEAMMATE GRENADE', w: 'grenade', d: 0, at: now };
    this.hurt(dm, x, z, 'zone');   // 'zone' = my armor was already counted above
  }
  /* v604 PUBG molotov: standing in the flames 12.5 damage per second, and burning (10 per second) for 4 s after catching fire; armor does not help; it burns the thrower and the thrower's team too. from = the thrower (undefined = me). */
  burnHurt(d, from) {
    if (!this.on || this.hp <= 0 || this.deadT > 0 || this.dropping) return; const T = this.R.jangTeam, now = performance.now();
    if (from !== undefined && from >= 0 && T && ((((T.teamOf || {})[from]) | 0) !== (T.tm | 0))) { this.lastBy = from; this.lastByW = 'molotov'; this.lastByAt = now; } else this.lastHit = { who: from === undefined ? 'YOUR OWN FIRE' : from < 0 ? 'BOT FIRE' : 'FIRE', w: 'molotov', d: 0, at: now };
    this.hurt(d, undefined, undefined, 'zone');
  }
}
