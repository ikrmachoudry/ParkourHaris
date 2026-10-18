// MISSIONS on the client: the Mission Lobby panel, the countdown, the STUNT JUMP judge and the pass / fail banners.
// In multiplayer the shared state lives on the server (MissionHub); in single player the same hub runs right here.
import * as A from './audio.js';
import { STUNT, LOBBY, PARK, CHASE, BANK, POLICE } from './gta.js';
import { ThiefScene } from './thiefscene.js';
import { MissionHub } from './mission.js';
import { CHARACTERS } from './levelmeta.js';

const $ = (id) => document.getElementById(id);
const REASON = { slow: 'TOO SLOW ON THE RAMP', short: 'NOT ENOUGH AIR', missed: 'MISSED THE RAMP', crash: 'CAR WRECKED', time: 'OUT OF TIME', off: 'LEFT THE ROAD', car: 'LEFT THE CAR', order: 'WRONG RAMP', lost: 'YOU LOST HIM', escaped: 'HE ESCAPED OVER THE HILL' };
const IDX_BITS = (i) => ((i & 15) << 9) | (((i >> 4) & 1) << 24), PAXF = 33554432;
const DESC = {
  stunt: 'Everybody gets the same white super car on the coast highway. Hit BOTH ramps at full speed and fly. If anybody fails, everybody restarts.',
  thief: 'A thief has robbed the CITY BANK! Two of you share each police car: one drives, one rides along. Chase him across the city and up Mount Haris, catch him on foot, put him in the back of your police car and drive him to the POLICE STATION.',
};
const TITLE = { stunt: 'STUNT JUMP', thief: 'THIEF CHASE' };

export class MissionClient {
  constructor(race, send) {
    this.race = race; this.sendNet = send; this.phase = 'idle'; this.mission = 'stunt'; this.hold = false; this.inPad = false; this.lobby = { in: [], total: 1 };
    this.round = 0; this.members = []; this.res = {}; this.seat = 0; this.briefEnd = 0; this.lastN = 0; this.carIdx = -1; this.finished = false; this.bannerT = 0;
    this.ts = new ThiefScene(race);
    if (!race.multi) { this.hub = new MissionHub((m) => setTimeout(() => this.onMsg(m), 0), { getP: () => this.localP() }); this.all = [race.localId]; }
    for (const b of document.querySelectorAll('#m-pick button')) b.onclick = () => { this.send({ t: 'm_pick', mission: b.dataset.m }); };
    this.spectating = false; this.specId = -1;
    const st = $('m-start'), cl = $('m-close'), sp = $('m-spec'), pl = $('m-play');
    if (sp) sp.onclick = () => { this.spectate(); };
    if (pl) pl.onclick = () => { this.spectating = false; this.showFin(false); this.sub('FREE ROAM - THE OTHERS ARE STILL RUNNING', 4000); if (this.relock) this.relock(); };
    if (st) st.onclick = () => { this.pressStart(); };
    if (cl) cl.onclick = () => { this.panelClosed = true; this.showPanel(false); if (this.relock) this.relock(); };
  }
  // ---- to the server (or the local hub)
  send(m) {
    if (this.race.multi) { this.sendNet(m); return; }
    const id = this.race.localId, h = this.hub;
    if (m.t === 'm_in') h.lobby(id, !!m.on, this.all); else if (m.t === 'm_pick') h.pick(id, String(m.mission), this.all); else if (m.t === 'm_start') h.start(id, this.all); else if (m.t === 'm_res') h.result(id, !!m.ok, m.why, m.round | 0);
  }
  pressStart() { if (this.phase === 'idle' && this.lobby.in.length >= this.lobby.total && this.lobby.total > 0) { this.send({ t: 'm_start' }); if (this.relock) this.relock(); } }
  // where I am, as the thief director wants to know it (the same numbers the server keeps in multiplayer)
  localP() {
    const R = this.race, b = R.me.body, d = R.drive, st = d && d.st;
    return { x: st ? st.x : b.x, y: st ? st.y : b.y, z: st ? st.z : b.z, a: d ? (R.paxMode ? PAXF : 256) | IDX_BITS(R.cars.indexOf(d)) : 0 };
  }
  get car() { return this.race.cars[12 + this.seat]; }
  nameOf(id) { const p = this.race.players.find((q) => q.id === id); return p ? p.name : '?'; }
  colorOf(id) { const p = this.race.players.find((q) => q.id === id); return p ? CHARACTERS[p.char].color : '#fff'; }

  // ---- after you finish while others are still running: SPECTATE (camera follows a runner, press again for the next one) or KEEP PLAYING (free roam)
  runners() { return this.members.filter((q) => q.id !== this.race.localId && !this.res[q.id] && this.race.remotes && this.race.remotes.get(q.id) && this.race.remotes.get(q.id).has).map((q) => q.id); }
  spectate() {
    const l = this.runners(); if (!l.length) { this.spectating = false; return; }
    const i = l.indexOf(this.specId); this.specId = l[(i + 1) % l.length]; this.spectating = true; this.race.camInit = false;
    const b = $('m-spec'); if (b) b.textContent = 'NEXT PLAYER';
    this.sub('WATCHING ' + this.nameOf(this.specId).toUpperCase(), 60000);
  }
  specTarget() {
    if (!this.spectating || this.phase !== 'run') return null;
    let r = this.race.remotes && this.race.remotes.get(this.specId);
    if (!r || this.res[this.specId] || !r.has) { const l = this.runners(); if (!l.length) { this.spectating = false; return null; } this.specId = l[0]; r = this.race.remotes.get(l[0]); this.sub('WATCHING ' + this.nameOf(this.specId).toUpperCase(), 60000); }
    return r;
  }
  showFin(on) {
    const e = $('m-fin'); if (!e) return; e.classList.toggle('on', !!on); document.body.classList.toggle('m-fin-open', !!on);   // (the touch layer is hidden meanwhile so the two buttons can be tapped)
    if (on) { const b = $('m-spec'); if (b) b.textContent = 'SPECTATE'; try { if (document.pointerLockElement) document.exitPointerLock(); } catch { /* noop */ } } else this.spectating = false;
  }
  // ---- messages from the server
  onMsg(m) {
    const R = this.race;
    if (m.t === 'm_lobby') { this.lobby = { in: m.in || [], total: m.total || 1 }; if (m.mission) this.mission = m.mission; this.renderPanel(); }
    else if (m.t === 'm_th') this.ts.apply(m);
    else if (m.t === 'm_ev') this.onEv(m.k);
    else if (m.t === 'm_go') this.onGo(m);
    else if (m.t === 'm_run') { if (this.phase === 'brief') { this.phase = 'run'; this.hold = false; this.runT0 = performance.now(); this.jumps = 0; this.air = false; this.finished = false; this.showFin(false); this.big('GO!', 900); A.sfx.pickup(); this.chips(); } }
    else if (m.t === 'm_st') { this.res = m.res || {}; this.chips(); }
    else if (m.t === 'm_end') {
      this.hold = false; this.showFin(false);
      if (m.pass) { this.phase = 'done'; this.big('MISSION PASSED', 5000, '#5ef0a0'); this.sub(this.mission === 'thief' ? 'THE THIEF IS BEHIND BARS!' : 'GREAT JUMPING!', 5000); A.sfx.pickup(); this.chips(true); }
      else { this.phase = 'retry'; this.finished = true; this.big('MISSION FAILED', 3800, '#ff5a5a'); this.sub((REASON[m.why] || 'TRY AGAIN') + (m.who === R.localId ? ' (YOU)' : '') + ' - RESTARTING FOR EVERYBODY', 3800); A.sfx.bonk(); }
    } else if (m.t === 'm_idle') { this.showFin(false); this.parkT = 1; this.parkAll = true; this.phase = 'idle'; this.hold = false; this.res = {}; this.big('', 1); this.sub('', 1); this.chips(); this.ts.clear(); this.lobby = { in: [], total: this.lobby.total }; this.panelClosed = false; this.inPad = false; }
  }
  onGo(m) {
    if (m.mission === 'thief') return this.onGoThief(m);
    this.mission = m.mission || 'stunt'; this.ts.clear();
    const R = this.race, st = STUNT; this.round = m.round; this.members = m.members; this.res = {}; this.phase = 'brief'; this.hold = true; this.finished = false; this.air = false; this.jumps = 0;
    const me = m.members.find((q) => q.id === R.localId); this.seat = me ? me.seat : 0; this.briefEnd = performance.now() + (m.briefMs || 6500); this.lastN = 0;
    this.showPanel(false); this.panelClosed = true; this.showFin(false);
    // every mission car goes back to the start line, repaired (and becomes visible)
    for (let k = 0; k < st.lanes.length; k++) {
      const c = R.cars[12 + k]; if (!c) continue; const s = c.st;
      s.x = st.startX; s.z = st.lanes[k]; s.yaw = st.yaw; s.vx = s.vz = s.speed = 0; s.yr = 0; s.vy = 0; s.air = false; s.hp = 100; s.wreck = false; s.burnT = 0; s.wreckT = 0; s.steer = 0; s.skid = 0;
      s.y = R.info.track && R.info.track.terrain ? R.info.track.terrain(s.x, s.z) : 0; s.parked = true; s.driver = -1; s.pitch = 0;
      if (c.mesh.userData.hero) { c.mesh.userData.hero.repair(); R.restoreMission && R.restoreMission(c.mesh); }
    }
    if (R.drive) R.toggleCar(true);
    const b = R.me.body, c = this.car;
    if (c) { b.x = c.st.x - 2.4; b.z = c.st.z; b.y = c.st.y + 0.05; b.vx = b.vz = b.vy = 0; b.stun = 0; b.yaw = st.yaw; b.hitCd = 0.5; R.crouch = false; R.camYaw = st.yaw + Math.PI; R.camInit = false;
      R.toggleCar(); if (R.drive !== c) { R.drive = c; c.st.driver = R.localId; c.st.parked = false; document.body.classList.add('driving'); } }
    this.big('STUNT JUMP', 2500, '#5ef0ff'); this.sub('TWO RAMPS: HIT BOTH AT FULL SPEED AND FLY', 6000); this.chips();
  }
  // ---- THIEF CHASE: everybody is put into a police car at the bank (even seat = driver, odd seat = rides along), the thief robs the bank in front of them
  onGoThief(m) {
    const R = this.race; this.mission = 'thief'; this.round = m.round; this.members = m.members; this.res = {}; this.phase = 'brief'; this.hold = true; this.finished = false;
    const me = m.members.find((q) => q.id === R.localId); this.seat = me ? me.seat : 0; this.briefEnd = performance.now() + (m.briefMs || 9000); this.lastN = 0;
    this.showPanel(false); this.panelClosed = true; this.showFin(false); this.ts.clear(); this.ts.resetShot();
    if (R.drive) R.toggleCar(true);
    CHASE.copIdx.forEach((k, j) => {   // both police cars: repaired, parked nose-to-the-bank
      const c = R.cars[k]; if (!c) return; const s = c.st, q = CHASE.cops[j];
      s.x = q.x; s.z = q.z; s.yaw = q.yaw; s.vx = s.vz = s.speed = 0; s.yr = 0; s.vy = 0; s.air = false; s.hp = 100; s.wreck = false; s.burnT = 0; s.wreckT = 0; s.steer = 0; s.skid = 0; s.pitch = 0;
      s.y = R.info.track && R.info.track.terrain ? R.info.track.terrain(s.x, s.z) : 0; s.parked = true; s.driver = -1; s.pax = -1; s.mcar = true; c.mesh.visible = true;
      if (c.mesh.userData.hero) { c.mesh.userData.hero.repair(); R.restoreMission && R.restoreMission(c.mesh); }
    });
    const c = R.cars[CHASE.copIdx[Math.min(1, this.seat >> 1)]], b = R.me.body;
    if (c) {
      const pax = (this.seat & 1) === 1; b.x = c.st.x; b.z = c.st.z; b.y = c.st.y + 0.05; b.vx = b.vz = b.vy = 0; b.stun = 0; b.yaw = c.st.yaw; b.hitCd = 0.5; R.crouch = false; R.camInit = false;
      R.drive = c; R.paxMode = pax; if (pax) c.st.pax = R.localId; else { c.st.driver = R.localId; c.st.parked = false; }
      document.body.classList.add('driving'); document.body.classList.remove('near-car');
    }
    this.big('THIEF CHASE', 2600, '#ff6b6b'); this.sub(this.seat & 1 ? 'YOU RIDE ALONG - YOUR PARTNER DRIVES' : 'YOU DRIVE - WATCH THE BANK', 7000); this.chips();
  }
  onEv(k) {
    const T = { chase: ['GET HIM!', 'STAY CLOSE - HE SLOWS DOWN IF YOU FALL BEHIND', '#ff6b6b'], stopA: ['', 'HE STOPPED - GET CLOSE', ''], trunk: ['WHAT IS HE DOING?', 'HE IS OPENING THE BOOT...', '#ffd23f'], gun: ['HE HAS A GUN!', '', '#ff4040'],
      drive2: ['AFTER HIM!', 'HE IS HEADING FOR MOUNT HARIS', '#ff6b6b'], flee: ['CATCH HIM ON FOOT!', 'RUN HIM DOWN - HE IS RUNNING ROUND THE SUMMIT', '#ffd23f'], arrest: ['GOT HIM!', 'BRING A POLICE CAR NEXT TO HIM', '#5ef0a0'], loaded: ['IN THE BACK!', 'TAKE HIM TO THE POLICE STATION', '#5ef0a0'] }[k];
    if (!T) return; if (T[0]) this.big(T[0], 2200, T[2]); if (T[1]) this.sub(T[1], 6000); if (k === 'gun') A.sfx.bonk(); else A.sfx.pickup();
  }
  // the camera shot during the cut-scene (null = the normal camera)
  camShot(dt) { return this.mission === 'thief' && this.phase === 'brief' ? this.ts.shot(dt) : null; }
  // markers for the mini-map
  marks() {
    if (this.mission !== 'thief' || (this.phase !== 'run' && this.phase !== 'brief') || !this.ts.snap) return null;
    const s = this.ts.snap, out = [], foot = s.p[5] === 'foot';
    if (s.st === 'deliver') out.push({ x: POLICE.zone.x, z: POLICE.zone.z, color: '#2a5bd7', glyph: '\u{1F693}' });
    else if (s.st !== 'rob') out.push({ x: foot ? this.ts.px : this.ts.cx, z: foot ? this.ts.pz : this.ts.cz, color: '#e11d2e', glyph: '\u{1F9B9}' });
    return out;
  }
  // ---- per-frame
  update(dt) {
    const R = this.race, b = R.me.body, P = LOBBY.pad;
    this.ts.update(dt);
    { const cap = this.mission === 'stunt' && (this.phase === 'brief' || this.phase === 'run') ? 33.3 : 36.1; for (const k of [12, 13, 14, 15, 24, 25]) { const c = R.cars[k]; if (c) c.st.topCap = cap; } }   // 130 km/h always, 120 km/h while the STUNT JUMP runs (same for everybody)
    if (this.phase === 'idle') {
      this.parkT = (this.parkT === undefined ? 1 : this.parkT) - dt; if (this.parkT <= 0) { this.parkT = 2; this.parkCars(this.parkAll); this.parkAll = false; }
      const d = Math.hypot(b.x - P.x, b.z - P.z), on = !R.drive && d < 1.9 && Math.abs(b.y - 0.25) < 1.2, off = R.drive || d > 3.4;
      if (on && !this.inPad) { this.inPad = true; this.send({ t: 'm_in', on: true }); if (!this.panelClosed) this.showPanel(true); }
      else if (off && this.inPad) { this.inPad = false; this.panelClosed = false; this.send({ t: 'm_in', on: false }); this.showPanel(false); }
      return;
    }
    if (this.phase === 'brief') {
      const left = this.briefEnd - performance.now(), n = Math.ceil(left / 1000 - 0.05);
      if (this.mission !== 'thief' && n >= 1 && n <= 3 && n !== this.lastN) { this.lastN = n; this.big(String(n), 900, '#ffd23f'); A.sfx.tick(); }
      return;
    }
    if (this.mission === 'thief' || this.phase !== 'run' || this.finished) return;
    const c = this.car, s = c.st, t = (performance.now() - this.runT0) / 1000, r = STUNT.ramps;
    const fail = (why) => { this.finished = true; this.send({ t: 'm_res', ok: false, why, round: this.round }); };
    if (R.drive !== c) { this.noCar = (this.noCar || 0) + dt; if (this.noCar > 1.2) fail('car'); return; } this.noCar = 0;
    if (s.hp !== undefined && s.hp <= 0) return fail('crash');
    if (t > STUNT.timeLimit) return fail('time');
    if (Math.abs(s.z) > 17 || s.x < 265) return fail('off');
    if (s.air && !this.air) { this.air = true; this.airT = 0; this.takeX = s.x; this.takeZ = s.z; this.takeV = Math.hypot(s.vx, s.vz); }
    if (this.air) this.airT += dt;
    if (!s.air && this.air) {   // landed: was it a proper jump off the next ramp?
      this.air = false;
      const k = r.findIndex((q) => Math.abs(this.takeX - (q[0] + q[3])) < 9 && Math.abs(this.takeZ - q[1]) < q[5] / 2 + 2);
      if (k >= 0) {
        if (k !== this.jumps) return fail('order');
        if (this.takeV < STUNT.minSpeed) return fail('slow');
        if (this.airT < STUNT.minAir) return fail('short');
        this.jumps++; A.sfx.pickup();
      }
    }
    if (this.jumps < r.length) { const q = r[this.jumps]; if (!this.air && s.x > q[0] + q[3] + 8) return fail('missed'); }
    if (this.jumps >= r.length && s.x >= STUNT.finishX && Math.abs(s.z) < 8) { this.finished = true; this.send({ t: 'm_res', ok: true, round: this.round }); this.big('YOU MADE IT!', 2500, '#5ef0a0'); this.sub('WAITING FOR THE OTHERS...', 30000); if (this.runners().length) this.showFin(true); }
  }
  // when no mission runs the four white cars wait in the Stunt Park (free to drive); a car somebody is sitting in stays where it is
  parkCars(all) {
    const R = this.race, P = PARK.spawn;
    CHASE.copIdx.forEach((k, j) => {   // the police cars used in the THIEF CHASE go back to the station once nobody is in them
      const c = R.cars[k]; if (!c || c === R.drive || c.st.driver !== -1 || !c.st.mcar || (c.st.pax !== undefined && c.st.pax !== -1)) return; const s = c.st, h = CHASE.copsHome[j];
      s.x = h.x; s.z = h.z; s.yaw = h.yaw; s.vx = s.vz = s.speed = 0; s.yr = 0; s.vy = 0; s.air = false; s.parked = true; s.steer = 0; s.pitch = 0; s.mcar = false; s.y = R.info.track && R.info.track.terrain ? R.info.track.terrain(s.x, s.z) : 0; c.mesh.visible = true;
    });
    for (let k = 12; k < 16; k++) { const c = R.cars[k]; if (!c || c === R.drive || c.st.driver !== -1) continue; const s = c.st; if (!all && !(Math.abs(s.z) < 24 && s.x > 230)) continue;   // after a mission: any left on the highway go home
       s.x = P.x; s.z = P.z + (k - 12) * P.step; s.yaw = P.yaw; s.vx = s.vz = s.speed = 0; s.yr = 0; s.vy = 0; s.air = false; s.parked = true; s.steer = 0; s.pitch = 0; s.y = R.info.track && R.info.track.terrain ? R.info.track.terrain(s.x, s.z) : 0; c.mesh.visible = true; }
  }
  // ---- DOM
  showPanel(on) {
    const el = $('m-ui'); if (!el) return; el.classList.toggle('hidden', !on); document.body.classList.toggle('m-open', !!on);
    if (on) { try { if (document.pointerLockElement) document.exitPointerLock(); } catch { /* noop */ } this.renderPanel(); }
  }
  renderPanel() {
    const el = $('m-players'); if (!el) return;
    { const mi = this.mission || 'stunt', t = document.querySelector('#m-ui .m-title'), d = document.querySelector('#m-ui .m-desc'); if (t) t.textContent = TITLE[mi]; if (d) d.textContent = DESC[mi];
      for (const b of document.querySelectorAll('#m-pick button')) b.classList.toggle('on', b.dataset.m === mi); }
    const all = this.race.multi ? this.race.players : [{ id: this.race.localId, name: this.race.me.name, char: this.race.me.char }];
    el.innerHTML = all.map((p) => `<div class="m-p ${this.lobby.in.includes(p.id) ? 'in' : ''}"><i style="background:${CHARACTERS[p.char].color}"></i><b>${String(p.name).replace(/[<>&]/g, '')}</b><span>${this.lobby.in.includes(p.id) ? 'READY' : 'WAITING'}</span></div>`).join('');
    const ready = this.lobby.in.length >= this.lobby.total && this.lobby.total > 0, st = $('m-start');
    if (st) { st.disabled = !ready; st.textContent = ready ? 'START MISSION' : 'WAITING FOR EVERYBODY (' + this.lobby.in.length + '/' + this.lobby.total + ')'; }
  }
  big(txt, ms, col) { const e = $('m-big'); if (!e) return; e.textContent = txt; e.style.color = col || '#fff'; e.classList.remove('pop'); void e.offsetWidth; if (txt) e.classList.add('pop'); clearTimeout(this.bigT); if (ms && txt) this.bigT = setTimeout(() => { e.textContent = ''; }, ms); }
  sub(txt, ms) { const e = $('m-sub'); if (!e) return; e.textContent = txt; clearTimeout(this.subT); if (ms && txt) this.subT = setTimeout(() => { e.textContent = ''; }, ms); }
  chips(all) {
    const e = $('m-chips'); if (!e) return;
    e.innerHTML = this.phase === 'idle' ? '' : this.members.map((q) => `<span style="border-color:${this.colorOf(q.id)}">${all || this.res[q.id] ? '&#10003;' : '&middot;'}</span>`).join('');
  }
  destroy() { this.ts.dispose(); this.showPanel(false); this.showFin(false); this.big('', 1); this.sub('', 1); if (this.hub) this.hub.reset(); }
}
