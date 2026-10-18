// MISSIONS (shared by the server and the single-player client): a tiny state machine, no DOM, no three.js.
//   idle -> (everybody stands on the lobby pad, anybody presses START) -> brief (teleport to the start line, countdown) -> run -> done (all passed)
//   if any player fails: retry (everybody is put back on the start line) -> brief -> run ...
// emit(msg) broadcasts a message to every player of the room.  Messages: m_lobby, m_go, m_run, m_st, m_end, m_idle.
export const BRIEF_MS = 6500, RETRY_MS = 4200, DONE_MS = 8000;

export class MissionHub {
  constructor(emit, mission = 'stunt') {
    this.emit = emit; this.mission = mission; this.timers = []; this.reset();
  }
  reset() { this.clear(); this.phase = 'idle'; this.inLobby = new Set(); this.members = []; this.res = new Map(); this.round = 0; }
  clear() { for (const t of this.timers) clearTimeout(t); this.timers = []; }
  later(ms, fn) { this.timers.push(setTimeout(fn, ms)); }
  lobbyMsg(all) { return { t: 'm_lobby', mission: this.mission, in: [...this.inLobby].filter((i) => all.includes(i)), total: all.length, phase: this.phase }; }
  // a player steps on / off the lobby pad
  lobby(id, on, all) {
    if (this.phase !== 'idle') return;
    if (on) this.inLobby.add(id); else this.inLobby.delete(id);
    for (const i of [...this.inLobby]) if (!all.includes(i)) this.inLobby.delete(i);
    this.emit(this.lobbyMsg(all));
  }
  // anybody on the pad can start once EVERYBODY in the room is on the pad
  start(id, all) {
    if (this.phase !== 'idle' || !this.inLobby.has(id)) return false;
    if (!all.length || !all.every((i) => this.inLobby.has(i))) return false;
    this.members = [...all]; this.round = 0; this.go(); return true;
  }
  go() {
    this.clear(); this.phase = 'brief'; this.round++; this.res = new Map();
    this.emit({ t: 'm_go', mission: this.mission, round: this.round, members: this.members.map((id, seat) => ({ id, seat })), briefMs: BRIEF_MS });
    const r = this.round;
    this.later(BRIEF_MS, () => { if (this.phase === 'brief' && this.round === r) { this.phase = 'run'; this.emit({ t: 'm_run', round: r }); } });
  }
  // a player reports the result of the current run
  result(id, ok, why, round) {
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
    this.members = this.members.filter((i) => i !== id); this.res.delete(id);
    if (!this.members.length) { this.reset(); this.emit({ t: 'm_idle' }); return; }
    if (this.phase === 'run') this.checkDone();
  }
}
