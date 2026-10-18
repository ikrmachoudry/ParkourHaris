// Headless checks for the mission state machine (public/js/mission.js)
import { MissionHub, BRIEF_MS, RETRY_MS } from '../public/js/mission.js';
let bad = 0; const ok = (c, m) => { if (!c) bad++; console.log((c ? 'PASS ' : 'FAIL ') + m); };
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const log = []; const h = new MissionHub((m) => log.push(m)); const all = ['a', 'b'];
const last = (t) => [...log].reverse().find((m) => m.t === t);
h.lobby('a', true, all); ok(last('m_lobby').in.length === 1 && last('m_lobby').total === 2, 'lobby shows 1 of 2 on the pad');
ok(!h.start('a', all), 'cannot start until everybody is on the pad');
h.lobby('b', true, all); ok(h.start('b', all), 'anybody can start once everybody is on the pad');
ok(last('m_go').members.length === 2 && last('m_go').members[1].seat === 1 && last('m_go').round === 1, 'm_go seats everybody');
await wait(BRIEF_MS + 150); ok(h.phase === 'run' && !!last('m_run'), 'countdown ends: run');
h.result('a', true, '', 1); ok(h.phase === 'run' && last('m_st').res.a === true, 'one pass: still waiting for the other');
h.result('b', false, 'slow', 1); ok(h.phase === 'retry' && last('m_end').pass === false && last('m_end').who === 'b', 'one failure fails the mission for everybody');
await wait(RETRY_MS + 150); ok(h.phase === 'brief' && last('m_go').round === 2, 'the mission restarts for all (round 2)');
await wait(BRIEF_MS + 150); h.result('a', true, '', 2); h.result('b', true, '', 2);
ok(h.phase === 'done' && last('m_end').pass === true, 'everybody passes: MISSION PASSED');
h.reset(); const solo = []; const s = new MissionHub((m) => solo.push(m)); s.lobby('x', true, ['x']); ok(s.start('x', ['x']), 'single player can start alone'); s.reset();
const d = new MissionHub((m) => solo.push(m)); d.lobby('a', true, all); d.lobby('b', true, all); d.start('a', all); await wait(BRIEF_MS + 100); d.result('a', true, '', 1); d.drop('b', ['a']); ok(d.phase === 'done', 'a player who leaves does not block the others'); d.reset();
{ // THIEF CHASE through the hub: pick, start, the director broadcasts, a player far away loses him
  const L = []; const t = new MissionHub((m) => L.push(m), { getP: () => ({ x: 900, y: 0, z: 900, a: 0 }) });
  t.lobby('a', true, ['a']); t.pick('a', 'thief', ['a']); ok(L.filter((m) => m.t === 'm_lobby').pop().mission === 'thief', 'a player on the pad picks THIEF CHASE');
  ok(t.start('a', ['a']), 'thief mission starts'); ok(L.find((m) => m.t === 'm_go').mission === 'thief' && L.find((m) => m.t === 'm_go').briefMs > 6500, 'm_go carries the mission and a longer cut-scene');
  await wait(450); ok(L.some((m) => m.t === 'm_th' && m.st === 'rob'), 'the director broadcasts the story (m_th)');
  t.result('a', false, 'x', 1); ok(t.phase === 'brief', 'players cannot fail a thief mission by themselves'); t.reset();
  t.lobby('a', true, ['a']); t.pick('a', 'stunt', ['a']); ok(t.mission === 'stunt', 'and switch back to the stunt jump'); t.reset(); }
console.log(bad ? 'MISSION: FAILURES' : 'MISSION OK'); process.exit(bad ? 1 : 0);
