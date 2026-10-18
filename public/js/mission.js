// MISSIONS (shared by the server and the single-player client): a tiny state machine, no DOM, no three.js.
//   idle -> (everybody stands on the lobby pad, anybody presses START) -> brief (teleport to the start line, countdown) -> run -> done (all passed)
//   if any player fails: retry (everybody is put back on the start line) -> brief -> run ...
// emit(msg) broadcasts a message to every player of the room.  Messages: m_lobby, m_go, m_run, m_st, m_end, m_idle.
import { ThiefDirector, THIEF_BRIEF_MS } from './thief.js';
export const MISSIONS = ['stunt', 'thief'];
export const BRIEF_MS = 6500, RETRY_MS = 4200, DONE_MS = 8000;

export class MissionHub {
  // opts.getP(id) -> { x, y, z, a } of a player (the thief director needs to know where everybody is)
  constructor(emit, opts = {}) {
    this.emit = emit; this.mission = 'stunt'; this.getP = opts.getP || (() => null); this.timers = []; this.iv = null; this.dir = null; this.reset();
  }
  reset() { this.clear(); this.phase = 'idle'; this.inLobby = new Set(); this.members = []; this.res = new Map(); this.round = 0; }
  clear() { for (const t of this.timers) clearTimeout(t); this.timers = []; if (this.iv) { clearInterval(this.iv); this.iv = null; } }
  later(ms, fn) { this.timers.push(setTimeout(fn, ms)); }
  lobbyMsg(all) { return { t: 'm_lobby', mission: this.mission, in: [...this.inLobby].filter((i) => all.includes(i)), total: all.length, phase: this.phase }; }
  // a player steps on / off the lobby pad
  lobby(id, on, all) {
    if (this.phase !== 'idle') return;
    if (on) this.inLobby.add(id); else this.inLobby.delete(id);
    for (const i of [...this.inLobby]) if (!all.includes(i)) this.inLobby.delete(i);
    this.emit(this.lobbyMsg(all));
  }
  // somebody on the pad chooses the mission
  pick(id, mission, all) {
    if (this.phase !== 'idle' || !this.inLobby.has(id) || !MISSIONS.includes(mission) || mission === this.mission) return;
    this.mission = mission; this.emit(this.lobbyMsg(all));
  }
  // anybody on the pad can start once EVERYBODY in the room is on the pad
  start(id, all) {
    if (this.phase !== 'idle' || !this.inLobby.has(id)) return false;
    if (!all.length || !all.every((i) => this.inLobby.has(i))) return false;
    this.members = [...all]; this.round = 0; this.go(); return true;
  }
  go() {
    this.clear(); this.phase = 'brief'; this.round++; this.res = new Map();
    const thief = this.mission === 'thief', ms = thief ? THIEF_BRIEF_MS : BRIEF_MS;
    this.emit({ t: 'm_go', mission: this.mission, round: this.round, members: this.members.map((id, seat) => ({ id, seat })), briefMs: ms });
    const r = this.round;
    this.later(ms, () => { if (this.phase === 'brief' && this.round === r) { this.phase = 'run'; this.emit({ t: 'm_run', round: r }); } });
    if (thief) this.startThief();
  }
  // ---- THIEF CHASE: the story is played by a director that lives right here (server in multiplayer), everybody just draws what it broadcasts
  startThief() {
    if (!this.dir) this.dir = new ThiefDirector({ getP: (id) => this.getP(id), onEv: (k) => this.emit({ t: 'm_ev', k, d: this.dir ? Math.round(this.dir.dmin) : 0 }), onEnd: (ok, why) => this.thiefEnd(ok, why) });
    this.dir.start(this.members); let last = Date.now();
    this.iv = setInterval(() => { const n = Date.now(), dt = Math.min(0.25, (n - last) / 1000); last = n; if (this.dir && (this.phase === 'brief' || this.phase === 'run')) { this.dir.tick(dt); this.emit({ t: 'm_th', ...this.dir.snap() }); } }, 100);
  }
  thiefEnd(ok, why) {
    if (this.phase !== 'brief' && this.phase !== 'run') return;
    if (!ok) { this.fail(0, String(why || 'lost').slice(0, 24)); return; }
    this.clear(); this.phase = 'done'; this.emit({ t: 'm_end', pass: true, round: this.round });
    this.later(DONE_MS, () => { this.reset(); this.emit({ t: 'm_idle' }); });
  }
  // a player reports the result of the current run
  result(id, ok, why, round) {
    if (this.mission !== 'stunt') return;
    if (this.phase !== 'run' || !this.members.includes(id) || (round && round !== this.round) || this.res.has(id)) return;
    this.res.set(id, !!ok);
    if (!ok) { this.fail(id, String(why || '').slice(0, 24)); return; }
    this.emit({ t: 'm_st', round: this.round, res: Object.fromEntries(this.res) });
    this.checkDone();
  }
  fail(id, why) {
    this.clear(); this.phase = 'retry';
    this.emit({ t: 'm_end', pass: false, who: id, why, round: this.round });
    this.later(RETRY_MS, () => { if (this.phase === 'retry' && this.members.length) this.go(); else this.reset(); });
  }
  checkDone() {
    if (this.phase !== 'run' || !this.members.length) return;
    if (this.members.every((i) => this.res.get(i) === true)) {
      this.clear(); this.phase = 'done'; this.emit({ t: 'm_end', pass: true, round: this.round });
      this.later(DONE_MS, () => { this.reset(); this.emit({ t: 'm_idle' }); });
    }
  }
  // somebody left the room / disconnected
  drop(id, all) {
    this.inLobby.delete(id);
    if (this.phase === 'idle') { this.emit(this.lobbyMsg(all)); return; }
    this.members = this.members.filter((i) => i !== id); this.res.delete(id); if (this.dir) this.dir.members = this.members;
    if (!this.members.length) { this.reset(); this.emit({ t: 'm_idle' }); return; }
    if (this.phase === 'run') this.checkDone();
  }
}
