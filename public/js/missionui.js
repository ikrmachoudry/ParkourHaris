// MISSIONS on the client: the Mission Lobby panel, the countdown, the STUNT JUMP judge and the pass / fail banners.
// In multiplayer the shared state lives on the server (MissionHub); in single player the same hub runs right here.
import * as A from './audio.js';
import { STUNT, LOBBY } from './gta.js';
import { MissionHub } from './mission.js';
import { CHARACTERS } from './levelmeta.js';

const $ = (id) => document.getElementById(id);
const REASON = { slow: 'TOO SLOW ON THE RAMP', short: 'NOT ENOUGH AIR', missed: 'MISSED THE RAMP', crash: 'CAR WRECKED', time: 'OUT OF TIME', off: 'LEFT THE ROAD', car: 'LEFT THE CAR', order: 'WRONG RAMP' };

export class MissionClient {
  constructor(race, send) {
    this.race = race; this.sendNet = send; this.phase = 'idle'; this.hold = false; this.inPad = false; this.lobby = { in: [], total: 1 };
    this.round = 0; this.members = []; this.res = {}; this.seat = 0; this.briefEnd = 0; this.lastN = 0; this.carIdx = -1; this.finished = false; this.bannerT = 0;
    if (!race.multi) { this.hub = new MissionHub((m) => setTimeout(() => this.onMsg(m), 0)); this.all = [race.localId]; }
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
    if (m.t === 'm_in') h.lobby(id, !!m.on, this.all); else if (m.t === 'm_start') h.start(id, this.all); else if (m.t === 'm_res') h.result(id, !!m.ok, m.why, m.round | 0);
  }
  pressStart() { if (this.phase === 'idle' && this.lobby.in.length >= this.lobby.total && this.lobby.total > 0) { this.send({ t: 'm_start' }); if (this.relock) this.relock(); } }
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
    const e = $('m-fin'); if (!e) return; e.classList.toggle('on', !!on);
    if (on) { const b = $('m-spec'); if (b) b.textContent = 'SPECTATE'; try { if (document.pointerLockElement) document.exitPointerLock(); } catch { /* noop */ } } else this.spectating = false;
  }
  // ---- messages from the server
  onMsg(m) {
    const R = this.race;
    if (m.t === 'm_lobby') { this.lobby = { in: m.in || [], total: m.total || 1 }; this.renderPanel(); }
    else if (m.t === 'm_go') this.onGo(m);
    else if (m.t === 'm_run') { if (this.phase === 'brief') { this.phase = 'run'; this.hold = false; this.runT0 = performance.now(); this.jumps = 0; this.air = false; this.finished = false; this.showFin(false); this.big('GO!', 900); A.sfx.pickup(); this.chips(); } }
    else if (m.t === 'm_st') { this.res = m.res || {}; this.chips(); }
    else if (m.t === 'm_end') {
      this.hold = false; this.showFin(false);
      if (m.pass) { this.phase = 'done'; this.big('MISSION PASSED', 5000, '#5ef0a0'); this.sub('GREAT JUMPING!', 5000); A.sfx.pickup(); this.chips(true); }
      else { this.phase = 'retry'; this.finished = true; this.big('MISSION FAILED', 3800, '#ff5a5a'); this.sub((REASON[m.why] || 'TRY AGAIN') + (m.who === R.localId ? ' (YOU)' : '') + ' - RESTARTING FOR EVERYBODY', 3800); A.sfx.bonk(); }
    } else if (m.t === 'm_idle') { this.carsHidden = false; this.showFin(false); this.phase = 'idle'; this.hold = false; this.res = {}; this.big('', 1); this.sub('', 1); this.chips(); this.lobby = { in: [], total: this.lobby.total }; this.panelClosed = false; this.inPad = false; }
  }
  onGo(m) {
    const R = this.race, st = STUNT; this.round = m.round; this.members = m.members; this.res = {}; this.phase = 'brief'; this.hold = true; this.finished = false; this.air = false; this.jumps = 0;
    const me = m.members.find((q) => q.id === R.localId); this.seat = me ? me.seat : 0; this.briefEnd = performance.now() + (m.briefMs || 6500); this.lastN = 0;
    this.showPanel(false); this.panelClosed = true; this.showFin(false);
    // every mission car goes back to the start line, repaired (and becomes visible)
    this.carsHidden = false; for (let k = 12; k < 16; k++) { const c0 = R.cars[k]; if (c0) c0.mesh.visible = true; }
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
  // ---- per-frame
  update(dt) {
    const R = this.race, b = R.me.body, P = LOBBY.pad;
    if (this.phase === 'idle') {
      if (!this.carsHidden && R.cars.length > 15) this.hideCars();
      const d = Math.hypot(b.x - P.x, b.z - P.z), on = !R.drive && d < 1.9 && Math.abs(b.y - 0.25) < 1.2, off = R.drive || d > 3.4;
      if (on && !this.inPad) { this.inPad = true; this.send({ t: 'm_in', on: true }); if (!this.panelClosed) this.showPanel(true); }
      else if (off && this.inPad) { this.inPad = false; this.panelClosed = false; this.send({ t: 'm_in', on: false }); this.showPanel(false); }
      return;
    }
    if (this.phase === 'brief') {
      const left = this.briefEnd - performance.now(), n = Math.ceil(left / 1000 - 0.05);
      if (n >= 1 && n <= 3 && n !== this.lastN) { this.lastN = n; this.big(String(n), 900, '#ffd23f'); A.sfx.tick(); }
      return;
    }
    if (this.phase !== 'run' || this.finished) return;
    const c = this.car, s = c.st, t = (performance.now() - this.runT0) / 1000, r = STUNT.ramps;
    const fail = (why) => { this.finished = true; this.send({ t: 'm_res', ok: false, why, round: this.round }); };
    if (R.drive !== c) { this.noCar = (this.noCar || 0) + dt; if (this.noCar > 1.2) fail('car'); return; } this.noCar = 0;
    if (s.hp !== undefined && s.hp <= 0) return fail('crash');
    if (t > STUNT.timeLimit) return fail('time');
    if (Math.abs(s.z) > 17 || s.x < 105) return fail('off');
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
  // the four white cars only exist while a mission runs: otherwise they are parked far away and invisible
  hideCars() {
    const R = this.race; this.carsHidden = true;
    if (R.drive && R.cars.indexOf(R.drive) >= 12) R.toggleCar(true);
    for (let k = 12; k < 16; k++) { const c = R.cars[k]; if (!c) continue; const s = c.st; s.x = 0; s.z = 1500; s.y = 0; s.speed = s.vx = s.vz = 0; s.parked = true; s.driver = -1; c.mesh.visible = false; c.mesh.position.set(0, -50, 1500); }
  }
  // ---- DOM
  showPanel(on) {
    const el = $('m-ui'); if (!el) return; el.classList.toggle('hidden', !on); document.body.classList.toggle('m-open', !!on);
    if (on) { try { if (document.pointerLockElement) document.exitPointerLock(); } catch { /* noop */ } this.renderPanel(); }
  }
  renderPanel() {
    const el = $('m-players'); if (!el) return;
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
  destroy() { this.showPanel(false); this.showFin(false); this.big('', 1); this.sub('', 1); if (this.hub) this.hub.reset(); }
}
