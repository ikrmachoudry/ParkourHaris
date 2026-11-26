// v638: the GOJRA team-up match runs here, in a worker thread with PH_MAP=gojra: combat.js builds ONE map when it is first loaded, so the server (default map) cannot also hold the Gojra town in the same thread.
// combatremote.js (main thread) forwards every call of CombatHost to this thread and passes the broadcasts / private messages back.
import { parentPort } from 'node:worker_threads';
import { CombatHost } from './combatserver.js';
let host = null;
const post = (m) => parentPort.postMessage(m);
parentPort.on('message', (m) => {
  try {
    if (m.c === 'new') { host = new CombatHost(m.seed, (o) => post({ c: 'bcast', o }), (id, o) => post({ c: 'send', id, o }), m.diff, m.n); post({ c: 'ready' }); return; }
    if (!host) return;
    switch (m.c) {
      case 'init': host.init(m.id); break;
      case 'droid': host.addDroid(m.tm); break;
      case 'tick': host.tick(m.dt, m.pl); post({ c: 'bots', a: host.sim.bots.map((b) => (b.alive ? 1 : 0) | (b.droid ? 2 : 0)) }); break;
      case 'call': if (typeof host[m.f] === 'function' && ['shoot', 'melee', 'blast', 'take', 'drop', 'smoke', 'fire', 'drev'].includes(m.f)) host[m.f](m.p, m.m); break;
      default: break;
    }
  } catch (e) { console.error('gojra combat worker', e); }
});
