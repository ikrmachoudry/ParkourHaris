// v638: a CombatHost that lives in a worker thread (see combatworker.js) so a team-up room can play the GOJRA map while the server itself stays on the default map. Same calls as CombatHost; `sim.bots` is a light mirror ({alive, droid}) for the win check.
import { Worker } from 'node:worker_threads';
export class RemoteHost {
  constructor(seed, bcast, sendTo, diff, n, map = 'gojra') {
    this.bcast = bcast; this.sendTo = sendTo; this.sim = { bots: [] }; this.dead = false;
    this.w = new Worker(new URL('./combatworker.js', import.meta.url), { env: { ...process.env, PH_MAP: map } });
    this.w.on('message', (m) => { if (this.dead) return; if (m.c === 'bcast') this.bcast(m.o); else if (m.c === 'send') this.sendTo(m.id, m.o); else if (m.c === 'bots') this.sim.bots = m.a.map((v) => ({ alive: !!(v & 1), droid: !!(v & 2) })); });
    this.w.on('error', (e) => console.error('combat worker error', e)); this.w.unref();
    this.w.postMessage({ c: 'new', seed: seed | 0, diff, n });
  }
  post(m) { if (!this.dead) this.w.postMessage(m); }
  init(id) { this.post({ c: 'init', id }); }
  addDroid(tm) { this.post({ c: 'droid', tm }); }
  tick(dt, players) { this.post({ c: 'tick', dt, pl: players }); }
  call(f, p, m) { this.post({ c: 'call', f, p: { id: p.id, jx: p.jx, jz: p.jz, jtm: p.jtm, jal: p.jal }, m }); }
  shoot(p, m) { this.call('shoot', p, m); } melee(p, m) { this.call('melee', p, m); } blast(p, m) { this.call('blast', p, m); } take(p, m) { this.call('take', p, m); }
  drop(p, m) { this.call('drop', p, m); } smoke(p, m) { this.call('smoke', p, m); } fire(p, m) { this.call('fire', p, m); } drev(p, m) { this.call('drev', p, m); }
  destroy() { if (this.dead) return; this.dead = true; try { this.w.terminate(); } catch (e) { /* gone */ } }
}
