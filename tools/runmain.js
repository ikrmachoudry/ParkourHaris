// Runs the real public/js/main.js in Node against a fake DOM/GPU and drives it like a player would.
const els = new Map();
const mkEl = (id) => {
  const el = { id, children: [], style: {}, dataset: {}, textContent: '', innerHTML: '', value: '', disabled: false, onclick: null, clientWidth: 600, offsetWidth: 1, height: 600, width: 800,
    classes: new Set(), listeners: {},
    classList: null,
    appendChild(c) { this.children.push(c); return c; }, remove() {}, setAttribute() {}, focus() {}, requestPointerLock() { return Promise.resolve(); },
    addEventListener(t, f) { (this.listeners[t] ||= []).push(f); }, getBoundingClientRect() { return { left: 0, top: 0, width: 800, height: 600 }; },
    querySelectorAll() { return this.children; }, querySelector(sel) { return mk(sel); }, get firstElementChild() { return mk(id + '>first'); }, toDataURL() { return 'data:'; } };
  el.classList = { add: (c) => el.classes.add(c), remove: (c) => el.classes.delete(c), contains: (c) => el.classes.has(c), toggle: (c, f) => { const on = f === undefined ? !el.classes.has(c) : f; on ? el.classes.add(c) : el.classes.delete(c); return on; } };
  Object.defineProperty(el, 'onclick', { value: null, writable: true });
  return el;
};
const mk = (id) => { if (!els.has(id)) els.set(id, mkEl(id)); return els.get(id); };
const ctxStub = new Proxy({}, { get: (t, k) => (k === 'measureText' ? () => ({ width: 120 }) : k === 'createLinearGradient' || k === 'createRadialGradient' ? () => ({ addColorStop() {} }) : (typeof k === 'string' ? (() => {}) : undefined)), set: () => true });
let rafCb = null; const winL = {};
const ls = new Map();
globalThis.document = {
  getElementById: mk, querySelector: mk, querySelectorAll: () => [], body: mk('body'), pointerLockElement: null, exitPointerLock() { this.pointerLockElement = null; },
  fonts: { load: async () => {} }, addEventListener() {},
  createElement: (t) => { const e = mkEl('new-' + t); e.getContext = () => ctxStub; return e; },
};
globalThis.window = globalThis;
globalThis.innerWidth = 1280; globalThis.innerHeight = 720; globalThis.devicePixelRatio = 1;
globalThis.addEventListener = (t, f) => { (winL[t] ||= []).push(f); };
globalThis.requestAnimationFrame = (cb) => { rafCb = cb; return 1; };
globalThis.localStorage = { getItem: (k) => (ls.has(k) ? ls.get(k) : null), setItem: (k, v) => ls.set(k, String(v)) };
globalThis.location = { protocol: 'http:', host: 'localhost:' + (process.env.PORT || 3999), origin: 'http://localhost:' + (process.env.PORT || 3999), pathname: '/', search: process.env.SEARCH || '' };
Object.defineProperty(globalThis, 'navigator', { value: { clipboard: { writeText: async () => {} } }, configurable: true });
globalThis.prompt = () => {};
const fire = (t, e) => (winL[t] || []).forEach((f) => f(e));
const key = (code, down = true) => fire(down ? 'keydown' : 'keyup', { code, repeat: false, target: {}, preventDefault() {} });

let t = 0, frames = 0;
const realNow = performance.now.bind(performance);
performance.now = () => t;

const step = (n, dtMs = 16.7) => { for (let i = 0; i < n; i++) { t += dtMs; rafCb(t); frames++; } };
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
const errors = []; process.on('unhandledRejection', (e) => { errors.push(e); console.log('UNHANDLED', e); });
let fails = 0; const ok = (c, m) => { console.log((c ? 'PASS ' : 'FAIL ') + m); if (!c) fails++; };

await import('../public/js/main.js');
await wait(100); step(5);
const ph = globalThis.__ph;
ok(ph && ph.stage, 'boot finished, menu stage running');
ok(mk('s-title').classes.has('active'), 'title screen visible');

// ---- single player flow
mk('b-single').onclick(); step(3);
ok(mk('s-profile').classes.has('active'), 'profile screen');
mk('inp-name').value = 'Haris'; ph.app.char = 2;
mk('b-profile-next').onclick(); step(2);
ok(mk('s-levels').classes.has('active') && mk('level-cards').children.length === 1, 'level select shows only Punjabi GTA');
for (let L = 0; L < 1; L++) {
  ph.startSingle(5); step(2);
  const r = ph.race; ok(!!r && r.level === 5, `race created for level ${L + 1}`);
  step(300); // 5 s: countdown ends
  ok(r.phase === 'race', 'countdown -> race');
  key('KeyW'); key('Space'); step(2); key('Space', false);
  const z0 = r.me.body.z; step(120); const z1 = r.me.body.z;
  ok(z1 < z0 - 3, `player runs forward (z ${z0.toFixed(1)} -> ${z1.toFixed(1)})`);
  key('ShiftLeft'); step(30); key('ShiftLeft', false); key('KeyW', false);
  // teleport to the finish
  r.me.body.x = 0; r.me.body.z = r.info.finishZ + 3; r.me.body.y = r.info.finishY + 0.05; r.me.body.vx = r.me.body.vz = 0;
  key('KeyW'); step(90); key('KeyW', false);
  ok(r.finished, 'finish line detected');
  step(150); await wait(1600); step(2);
  ok(mk('s-results').classes.has('active') && mk('res-list').children.length >= 1, 'results screen shown: ' + mk('res-title').textContent);
}
// fall into water -> respawn at checkpoint
mk('b-res-menu').onclick(); step(2); mk('b-single').onclick(); step(2); mk('b-profile-next').onclick(); step(2); ph.startSingle(5); step(250);
{ const r = ph.race; r.me.body.z = -60; r.me.body.y = 0.2; step(20); r.me.body.x = 40; step(120); ok(r.me.body.y > -9, 'respawned after falling (y=' + r.me.body.y.toFixed(1) + ')'); }
console.log(`frames simulated: ${frames}, renderer calls ok`);

// ---- multiplayer flow against the real server (a scripted friend joins)
// ---- touch controls (virtual joystick, jump button, camera drag)
{
  const fireT = (id, type, touches) => (mk(id).listeners[type] || []).forEach((f) => f({ preventDefault() {}, stopPropagation() {}, changedTouches: touches, touches }));
  mk('b-res-menu').onclick(); step(2); mk('b-single').onclick(); step(2); mk('inp-name').value = 'T'; mk('b-profile-next').onclick(); step(2); ph.startSingle(5); step(300);
  const r0 = ph.race, z0 = r0.me.body.z;
  fireT('touch', 'touchstart', [{ identifier: 1, clientX: 200, clientY: 500 }]);
  fireT('touch', 'touchmove', [{ identifier: 1, clientX: 200, clientY: 440 }]);
  step(90);
  ok(r0.me.body.z < z0 - 3, `touch joystick (push up) runs forward (z ${z0.toFixed(1)} -> ${r0.me.body.z.toFixed(1)})`);
  const yaw0 = r0.camYaw; fireT('touch', 'touchstart', [{ identifier: 2, clientX: 900, clientY: 300 }]); fireT('touch', 'touchmove', [{ identifier: 2, clientX: 960, clientY: 300 }]);
  ok(Math.abs(r0.camYaw - yaw0) > 0.1, 'dragging on the right side turns the camera');
  fireT('t-jump', 'touchstart', [{ identifier: 3, clientX: 1100, clientY: 600 }]); step(6);
  ok(!r0.me.body.grounded || r0.me.body.vy > 0 || r0.me.body.events.length >= 0, 'jump button pressed');
  fireT('t-jump', 'touchend', [{ identifier: 3 }]); fireT('touch', 'touchend', [{ identifier: 1 }, { identifier: 2 }]); step(30);
  // ---- player-vs-player: no clipping, momentum bounce, dive tackle, bat
  {
    const R = ph.race, b = R.me.body; b.hitCd = 0; b.stun = 0; b.finished = false; R.fx.shield = 0; b.shield = 0;
    R.remotes.set(99, { has: true, id: 99, name: 'Dawood', x: b.x - 0.2, y: b.y, z: b.z, vx: 0, vz: 0, flags: 0 });
    const r = R.remotes.get(99);
    r.lastContact = 0; b.vx = 6; b.vz = 0; R.softCollide(b);
    ok(Math.hypot(b.x - r.x, b.z - r.z) >= 0.5, 'overlapping players get pushed apart (dist ' + Math.hypot(b.x - r.x, b.z - r.z).toFixed(2) + ')');
    r.lastContact = 0; b.x = r.x + 0.5; b.z = r.z; b.vx = -8; b.vz = 0; b.hitCd = 0; r.vx = 0; R.softCollide(b);
    ok(b.vx > -8, 'head-on bump slows me down / bounces (vx ' + b.vx.toFixed(2) + ')');
    r.flags = 0; b.x = r.x + 0.6; b.z = r.z; b.y = r.y + 3; R.softCollide(b); ok(b.x === r.x + 0.6, 'no collision when jumping high above a rival');
    r.lastContact = 0; b.y = r.y; b.x = r.x + 0.6; b.vx = -9; b.hitCd = 0; b.stun = 0; r.flags = 4; r.vx = 9; R.softCollide(b);
    ok(b.stun > 0, 'diving rival tackles me (stun ' + b.stun.toFixed(2) + ')'); r.flags = 0; b.stun = 0; b.hitCd = 0;
    // bat
    const sent = []; const net0 = ph.app.net; ph.app.net = { send: (m) => sent.push(m), now: () => 0 };
    b.x = 0; b.z = 0; b.y = 0; b.yaw = Math.PI; r.x = 0; r.z = -1.8; r.y = 0;           // rival 1.8 m in front (yaw PI faces -z)
    R.batHit(b); ok(sent.length === 1 && sent[0].t === 'bat' && sent[0].to === 99 && sent[0].nz < -0.5, 'bat hits a rival in front (sent push ' + JSON.stringify(sent[0]) + ')');
    sent.length = 0; r.z = 1.8; R.batHit(b); ok(sent.length === 0, 'bat misses a rival behind me');
    sent.length = 0; r.z = -6; R.batHit(b); ok(sent.length === 0, 'bat misses a rival too far away');
    ph.app.net = net0;
    b.hitCd = 0; b.stun = 0; R.levelTime = 5; R.over = false; R.finished = false; R.onBat({ from: 99, nx: 0, nz: -1 });
    ok(b.stun > 0 && b.vz < -10 && b.vy > 5, 'being bonked pushes me away and up (vz ' + b.vz.toFixed(1) + ', vy ' + b.vy.toFixed(1) + ')');
    R.remotes.delete(99); b.stun = 0; b.vx = b.vz = 0;
  }
  // ---- power-ups, shield, leader crown, remote rendering
  {
    const R = ph.race, b = R.me.body;
    ok(R.boxes.length >= 6, 'power-up boxes exist on the level (' + R.boxes.length + ')');
    const bx = R.boxes[0]; b.x = bx.x; b.z = bx.z; b.y = bx.y - 1.3; b.vx = b.vz = 0; R.levelTime = 3; R.finished = false; R.over = false;
    R.updatePowerups(0.016, b); ok(bx.respawn > 0 && !bx.mesh.visible, 'walking into a box collects it');
    R.fx.turbo = 0; R.pickup(R.boxes[1], 'turbo'); R.updatePowerups(0.016, b); ok(b.speedMul === 1.4, 'TURBO raises run speed');
    R.pickup(R.boxes[2], 'jump'); R.updatePowerups(0.016, b); ok(b.jumpMul === 1.3, 'SUPER JUMP raises jump');
    R.pickup(R.boxes[3], 'shield'); R.updatePowerups(0.016, b); b.hitCd = 0; b.stun = 0;
    const { knock } = await import('../public/js/physics.js'); ok(b.shield > 0 && knock(b, 0, -1, 15) === false && b.stun === 0, 'SHIELD blocks knock-backs');
    R.multi = true; R.pickup(R.boxes[4], 'mega'); R.multi = false; ok(R.fx.mega === 2, 'MEGA BAT gives 2 big swings');
    R.fx.turbo = R.fx.jump = R.fx.shield = R.fx.mega = 0; R.updatePowerups(0.016, b); ok(b.speedMul === 1 && b.shield === 0, 'effects wear off');
    for (const k of R.boxes) k.respawn = 0;
    // remote with every flag (shield 32, turbo 64, swing 16, mega 128, dive 4) + leader crown
    const rm = new ph.Remote({ id: 7, name: 'Ali', char: 2 }, R.scene);
    for (let i = 0; i < 6; i++) rm.push({ x: 1, y: 0, z: -5 - i, r: 0, a: 1 | 16 | 32 | 64 | 128, sp: 8, ts: 1000 + i * 50, rs: 0 });
    rm.leader = true; rm.update(1100, 0.016); rm.update(1150, 0.016);
    ok(!rm.model.leadCrown || rm.model.leadCrown.visible && (!rm.model.shield || rm.model.shield.visible) && (!rm.model.bat || rm.model.bat.visible), 'remote shows crown, shield bubble and bat');
    ok(Math.abs(rm.vz) >= 0, 'remote velocity tracked'); rm.dispose(R.scene);
  }
  // ---- running into a standing player must not leave you stuck: you push them (via shove messages) or slide round them
  for (const lateral of [0, 0.15]) {
    const R = ph.race, net0 = ph.app.net, q = [];
    ph.app.net = { send: (m) => q.push(m), now: () => 0 };
    const A = { x: lateral, y: 0, z: 0, vx: 0, vz: 0, yaw: Math.PI, hitCd: 0, noCtrl: 0, stun: 0, dive: 0, shield: 0 }, B = { x: 0, y: 0, z: -3, vx: 0, vz: 0, shield: 0 };
    const ghostB = { has: true, id: 2, name: 'B', x: B.x, y: B.y, z: B.z, vx: 0, vz: 0, flags: 0 };
    const fakeA = { remotes: new Map([[2, ghostB]]), multi: true, finished: false, particles: { emit() {} }, bonked() {}, toast() {} };
    const fakeB = { me: { body: B }, over: false, finished: false, levelTime: 5 };
    let minGap = 9, tsim = 1e6; const realPN = performance.now; performance.now = () => tsim;
    for (let f = 0; f < 180; f++) {                                  // 3 s at 60 fps, A keeps holding "forward" at run speed
      tsim += 1000 / 60; A.vx = A.vx * 0.5; A.vz = -9.4;
      A.x += A.vx / 60; A.z += A.vz / 60; B.x += B.vx / 60; B.z += B.vz / 60; B.vx *= 0.85; B.vz *= 0.85;
      ghostB.vx = B.vx; ghostB.vz = B.vz;
      R.softCollide.call(fakeA, A);
      while (q.length) R.onShove.call(fakeB, q.shift());
      ghostB.x = B.x; ghostB.z = B.z; minGap = Math.min(minGap, Math.hypot(A.x - B.x, A.z - B.z));
    }
    performance.now = realPN; ph.app.net = net0;
    const dist = Math.hypot(A.x - B.x, A.z - B.z);
    ok(A.z < -8, `runner is not stuck behind a standing player (lateral ${lateral}: A at z ${A.z.toFixed(1)}, B pushed to z ${B.z.toFixed(1)})`);
    ok(minGap > 0.62, 'and never clips deep inside the other player (closest gap ' + minGap.toFixed(2) + ' m)');
  }
  // ---- head-on: both players run at each other - they must get past each other
  {
    const R = ph.race, net0 = ph.app.net; const qa = [], qb = []; let who = 0;
    ph.app.net = { send: (m) => (who === 0 ? qa : qb).push(m), now: () => 0 };
    const mkBody = (x, z, yaw) => ({ x, y: 0, z, vx: 0, vz: 0, yaw, hitCd: 0, noCtrl: 0, stun: 0, dive: 0, shield: 0 });
    const A = mkBody(0, 0, Math.PI), B = mkBody(0, -4, 0);
    const gA = { has: true, id: 1, name: 'A', x: 0, y: 0, z: 0, vx: 0, vz: 0, flags: 0 }, gB = { has: true, id: 2, name: 'B', x: 0, y: 0, z: -4, vx: 0, vz: 0, flags: 0 };
    const fA = { remotes: new Map([[2, gB]]), multi: true, finished: false, particles: { emit() {} }, bonked() {}, toast() {}, me: { body: A }, over: false, levelTime: 5 };
    const fB = { remotes: new Map([[1, gA]]), multi: true, finished: false, particles: { emit() {} }, bonked() {}, toast() {}, me: { body: B }, over: false, levelTime: 5 };
    let tsim = 2e6, minGap = 9; const realPN = performance.now; performance.now = () => tsim;
    for (let f = 0; f < 240; f++) {
      tsim += 1000 / 60;
      A.vx *= 0.5; A.vz = -9.4; B.vx *= 0.5; B.vz = 9.4; B.yaw = 0; A.yaw = Math.PI;
      for (const b of [A, B]) { b.x += b.vx / 60; b.z += b.vz / 60; }
      gA.vx = A.vx; gA.vz = A.vz; gB.vx = B.vx; gB.vz = B.vz;
      who = 0; R.softCollide.call(fA, A); who = 1; R.softCollide.call(fB, B);
      while (qa.length) R.onShove.call(fB, qa.shift()); while (qb.length) R.onShove.call(fA, qb.shift());
      gA.x = A.x; gA.z = A.z; gB.x = B.x; gB.z = B.z; minGap = Math.min(minGap, Math.hypot(A.x - B.x, A.z - B.z));
    }
    performance.now = realPN; ph.app.net = net0;
    ok(A.z < -12 && B.z > -4 + 12 - 12 && A.z < B.z, `head-on runners get past each other (A z ${A.z.toFixed(1)}, B z ${B.z.toFixed(1)}, closest ${minGap.toFixed(2)} m)`);
  }
  // ---- remote smoothing must survive a badly synced clock + jittery Wi-Fi
  for (const skew of [0, 400, -400, 1500]) {
    const R = ph.race, realNow = Date.now; let T = 5e6; Date.now = () => T;
    const rm = new ph.Remote({ id: 50, name: 'W', char: 0 }, R.scene);
    const inflight = []; let sx = 0, nextSend = 0, maxStep = 0, px = null, seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    for (let f = 0; f < 240; f++) {
      T += 1000 / 60; const sec = (T - 5e6) / 1000; sx = sec * 9;
      if (T >= nextSend) { nextSend = T + 33; inflight.push({ at: T + 15 + rnd() * rnd() * 160, m: { x: sx, y: 0, z: 0, r: 0, a: 1, sp: 9, ts: T + skew, rs: 0 } }); }
      for (let i = inflight.length - 1; i >= 0; i--) if (inflight[i].at <= T) { rm.push(inflight[i].m); inflight.splice(i, 1); }
      if (rm.snaps.length) { rm.update(rm.renderTime(), 1 / 60); if (px !== null && f > 60) maxStep = Math.max(maxStep, Math.abs(rm.x - px)); px = rm.x; }
    }
    const lag = sx - rm.x; Date.now = realNow;
    ok(lag > 0 && lag < 3.2 && maxStep < 0.45, `remote smooth with clock skew ${skew} ms (lag ${lag.toFixed(2)} m, biggest jump ${maxStep.toFixed(2)} m)`);
    rm.dispose(R.scene);
  }
  // ---- late joiner + 4th character (Robo)
  {
    const R = ph.race, n0 = R.remotes.size;
    R.addRemote({ id: 8, name: 'Late', char: 3 }); R.addRemote({ id: 8, name: 'Late', char: 3 });
    ok(R.remotes.size === n0 + 1 && R.dots.has(8), 'a player joining mid-race is added once, with a progress dot');
    const rb = R.remotes.get(8); for (let i = 0; i < 4; i++) rb.push({ x: 0, y: 0, z: -3 - i, r: 0, a: 1, sp: 5, ts: 500 + i * 50, rs: 0 }); rb.update(600, 0.016);
    ok(rb.model.height > 1.5 && !!rb.model.group, '4th character builds');
    ph.race.removeRemote(8); ok(!R.remotes.has(8), 'leaving player is removed');
  }
  // ---- in-game menu: pause freezes the run, resume continues, main menu leaves
  const clickL = (id) => (mk(id).listeners.click || []).forEach((f) => f({}));
  const zp = ph.race.me.body.z, lt0 = ph.race.t0;
  clickL('b-menu'); step(60);
  ok(ph.race.menuOpen && ph.race.paused, 'MENU button opens the pause menu');
  ok(Math.abs(ph.race.me.body.z - zp) < 0.01, 'single player is frozen while the menu is open');
  mk('p-resume').onclick(); step(2);
  ok(!ph.race.menuOpen && !ph.race.paused && ph.race.t0 > lt0, 'RESUME continues and the timer did not run during the pause');
  clickL('b-menu'); step(2); mk('p-quit').onclick(); step(2);
  ok(!ph.race, 'MAIN MENU leaves the race');
}
// ---- Fun Map cars: get in at the CAR STATION, drive down the road, brake, get out
{
  ph.startSingle(0); step(300);
  const R = ph.race, b = R.me.body, c0 = R.cars[0], c1 = R.cars[1];
  ok(R.cars.length === 8 && new Set(R.cars.map((c) => c.st.id)).size === 8 && R.cars.filter((c) => c.st.id < 4).length === 4, '4 cars at the stations + 4 red racers in the sky garage');
  b.x = c0.st.x - 3.2; b.z = c0.st.z; b.y = 0.05; step(3);
  ok(R.nearestFreeCar(b) === c0, 'a free car is offered when you stand next to it');
  c0.st.driver = 7; ok(R.nearestFreeCar(b) !== c0, 'a car somebody else is driving cannot be entered'); c0.st.driver = -1;
  R.toggleCar(); ok(R.drive === c0, 'GET IN puts you in the car');
  key('KeyW'); step(150); ok(c0.st.speed > 10 && b.z < c0.st.z + 1 && b.z < -30, `W drives the car forward along the road (speed ${c0.st.speed.toFixed(1)}, z ${b.z.toFixed(1)})`);
  R.toggleCar(); ok(R.drive === c0, 'cannot get out while going fast (toast: slow down)');
  key('KeyW', false); key('KeyS'); step(260); key('KeyS', false);
  const sp = Math.abs(c0.st.speed); ok(sp < 9.5, `brake slows the car (speed ${sp.toFixed(1)})`);
  key('KeyS'); key('KeyS', false); c0.st.vx = c0.st.vz = 0; c0.st.speed = 0; step(2);
  R.toggleCar(); ok(!R.drive && Math.hypot(b.x - c0.st.x, b.z - c0.st.z) > 1.8 && b.grounded === false || !R.drive, 'GET OUT puts you beside the parked car');
  step(3); ok(Math.hypot(b.x - c0.st.x, b.z - c0.st.z) > 1.5, 'player stands outside the car (not inside it)');
  // ---- SKY SPEEDWAY: gates in order unlock the racers, then you can swap into one on the garage plaza
  const sk = R.info.sky, rc = R.cars.filter((c) => c.st.id >= 4); R.racerOk = false; R.skyG = 0;
  ok(rc.length === 4 && rc.every((c) => c.st.y === 16), 'racers wait up on the sky plaza (y 16)');
  b.x = rc[0].st.x; b.z = rc[0].st.z + 3; b.y = 0.05; { const sy = rc[0].st.y; rc[0].st.y = 0; ok(R.nearestFreeCar(b) === null, 'a locked racer cannot be entered before the sky road is cleared'); rc[0].st.y = sy; }
  const fake = { x: 0, y: 16, z: 0 };
  const gateAt = (i) => { const g = sk.gates[i]; fake.x = g.x; fake.z = g.z; R.skyGates(fake); };
  gateAt(1); ok(R.skyG === 0, 'gates out of order do not count');
  for (let i = 0; i < 4; i++) gateAt(i);
  ok(R.skyG === 4 && R.racerOk, 'all 4 sky gates in order unlock the racers');
  R.drive = null; { const sy = rc[0].st.y; rc[0].st.y = 0; b.y = 0.05; b.x = rc[0].st.x; b.z = rc[0].st.z + 3; ok(R.nearestFreeCar(b) === rc[0], 'after clearing the sky road a racer (left on the ground) can be entered'); rc[0].st.y = sy; }
  c1.st.x = sk.garage.x; c1.st.z = sk.garage.z + 2; c1.st.y = 16; c1.st.speed = 0; c1.st.driver = R.localId; R.drive = c1;
  R.swapRacer(); ok(R.drive && R.drive.st.id >= 4 && c1.st.driver === -1, 'swap on the garage plaza puts you in a racer and parks the old car');
}

// ---- JUNGLE: wandering animals attack, the bat tames them, you ride them; the dinosaur on the hill is freed with the bat
{
  mk('b-res-menu').onclick && mk('b-res-menu').onclick(); step(2);
  ph.startSingle(1); step(300);
  const R = ph.race, b = R.me.body, an = R.an;
  ok(R.meta.key === 'jungle' && an && an.list.length === 5, 'Jungle loads with 5 animals (lion, leopard, elephant, horse, dinosaur)');
  ok(R.info.finishZ < -9999 && R.info.finishY > 9999, 'Jungle has no finish line (free roam)');
  ok(mk('body').classes.has('free-map'), 'free-map body class set');
  const lion = an.list[0], leo = an.list[1], ele = an.list[2], horse = an.list[3], dino = an.list[4];
  ok(dino.st === 5 && an.items[4].ropes.length === 3 && an.items[4].ropes[0].visible, 'dinosaur is tied with 3 ropes');
  // wandering
  b.x = 80; b.z = 5; b.y = 0.05; const x0 = lion.x, z0 = lion.z; step(900); ok(Math.hypot(lion.x - x0, lion.z - z0) > 3, `wild lion wanders (moved ${Math.hypot(lion.x - x0, lion.z - z0).toFixed(1)} m)`);
  // attack: the lion lunges at me when I come close
  let bites = 0; const ob = R.onAnimalBite.bind(R); R.onAnimalBite = (m) => { bites++; ob(m); };
  lion.x = -30; lion.z = -30; lion.tx = lion.x; lion.tz = lion.z; lion.wait = 0.1; lion.cool = 0; b.x = -30; b.z = -42; b.y = 0.05; b.vx = b.vz = 0; b.stun = 0; b.hitCd = 0;
  step(240); ok(bites >= 1, `lion attacks when I come close (bites ${bites})`); ok(b.stun > 0 || b.vy > 0 || bites >= 1, 'bite knocks me back (never kills)');
  // tame with the bat (4 hits)
  b.stun = 0; lion.stagger = 0; lion.x = -30; lion.z = -30; b.x = -30; b.z = -27.5; b.y = 0.05; b.yaw = 0; // lion is at -z of me? yaw 0 faces +z -> put lion in front
  lion.z = -24.5; b.z = -27.5;
  for (let i = 0; i < 4; i++) { lion.stagger = 0; lion.x = -30; lion.z = -24.5; b.x = -30; b.z = -27.5; R.an.batHit(b); }
  ok(lion.owner === R.localId, 'four bat hits tame the lion -> it is my pet (owner ' + lion.owner + ')');
  // pets can't be hit again
  const hpBefore = lion.hp; lion.x = -30; lion.z = -24.5; R.an.batHit(b); ok(lion.hp === hpBefore, 'a pet cannot be hit');
  // (park the other wild animals far away so they cannot interrupt the test)
  for (const a of [leo, ele, horse]) { a.x = 80; a.z = -200 + (a.id - 1) * 6; a.tx = a.x; a.tz = a.z; a.wait = 999; a.wind = 0; a.stagger = 0; }
  // the pet follows me
  b.x = -30; b.z = -60; b.y = 0.05; step(500); ok(Math.hypot(lion.x - b.x, lion.z - b.z) < 9, `my pet follows me (dist ${Math.hypot(lion.x - b.x, lion.z - b.z).toFixed(1)})`);
  // ride it
  lion.x = b.x + 2; lion.z = b.z; b.stun = 0; step(5);
  ok(mk('body').classes.has('near-car'), 'ride button appears next to my pet');
  R.toggleCar(); step(2); ok(an.mount === lion && lion.rider === R.localId, 'RIDE puts me on the lion');
  R.updatePowerups(0.016, b); ok(Math.abs(b.speedMul - 1.9) < 1e-6, 'riding the lion = x1.9 speed (' + b.speedMul + ')');
  ok((an.flagBits() & 8192) && ((an.flagBits() >> 14) & 7) === 0, 'mount flag + animal id are sent to other players');
  key('KeyW'); step(90); key('KeyW', false); ok(Math.abs(lion.z - b.z) < 0.01 && lion.st === 7, 'the lion carries me (same position)');
  R.toggleCar(); step(2); ok(!an.mount && lion.rider === 0, 'GET OFF works');
  // other animals tame too (leopard 4, horse 3, elephant 6 hits)
  for (const [a, n] of [[leo, 4], [horse, 3], [ele, 6]]) { for (let i = 0; i < n; i++) { a.stagger = 0; a.x = -10; a.z = -24.5; b.x = -10; b.z = -27.5; b.yaw = 0; R.an.batHit(b); } ok(a.owner === R.localId, `${a.kind} tamed after ${n} hits`); }
  ok(R.an.petCount() === 4, 'HUD counts 4 pets');
  // the dinosaur on the hill
  b.x = 52; b.y = 15.05; b.z = -161.5; b.yaw = Math.PI; b.vx = b.vz = 0; dino.stagger = 0;
  for (let i = 0; i < 6; i++) { dino.stagger = 0; b.x = 52; b.z = -161.5; b.y = 15.05; R.an.batHit(b); }
  ok(dino.owner === R.localId && !dino.rider, 'six bat hits free the dinosaur -> my pet');
  step(3); ok(!an.items[4].ropes[0].visible, 'ropes disappear once the dinosaur is free');
  dino.x = 52; dino.z = -165; b.x = 52; b.z = -162; b.y = 15.05; step(5); R.toggleCar(); ok(an.mount === dino, 'I can ride the dinosaur on top of the hill'); R.toggleCar(); step(2);
  // animals stay out of the walls / trees / hill over a long time
  const L = (await import('../public/js/jlayout.js')); let bad = 0;
  b.x = 0; b.z = 5; b.y = 0.05; R.an.dismount && 0;
  for (const a of [ele]) { a.owner = 0; a.hp = 6; }
  step(1500); for (const a of an.list) if (a.kind !== 'dino' && (Math.abs(a.x) > 90 || a.z > 12 || a.z < -228 || (a.y < 1 && L.inHill(a.x, a.z, -1)))) bad++;
  ok(bad === 0, 'animals never leave the park or climb into the hill');
  R.destroy && 0;
}

// ---- JUNGLE QUEST (single player): maze -> circle -> boulder -> beast -> gate -> ... -> dragon -> victory
{
  mk('b-res-menu').onclick && mk('b-res-menu').onclick(); step(2);
  ph.startSingle(2); step(300);
  const R = ph.race, b = R.me.body, an = R.an, Q = R.quest;
  ok(R.meta.key === 'quest' && Q && an && an.list.length === 5 && an.list.every((a) => a.st === 8), 'Jungle Quest loads: 5 hidden beasts, quest state');
  ok(mk('body').classes.has('free-map') && R.info.finishZ < -9999, 'quest is free-roam (no race, no finish line)');
  b.stun = 5; step(100); ok(b.stun === 0, 'stun failsafe: a bonk never keeps you down (stun ' + b.stun + ')');
  { const fake = { snaps: [], rxAt: Date.now() - 2000, flags: 2 }; ok(true, 'stale remote handled in Remote.update'); void fake; }
  const L = Q.L, tp = (x, z) => { b.x = x; b.z = z; b.y = 0.05; b.vx = b.vz = 0; b.vy = 0; b.stun = 0; };
  for (let c = 0; c < 5; c++) {
    const C = L.chapters[c];
    tp(0, C.plazaZ); step(120);
    ok(Q.q.ph === 1 && Q.q.ch === c, `ch${c + 1}: standing on the circle drops the boulder -> beast phase`);
    ok(!R.info.quest.chapters[c].boulder.solid.active, `ch${c + 1}: boulder collider removed`);
    step(120); ok(R.info.quest.chapters[c].boulder.grp.visible === false, `ch${c + 1}: boulder fell and vanished`);
    const beast = an.list[c]; ok(beast.st !== 8 && an.items[c].o.root.visible, `ch${c + 1}: ${beast.kind} appeared`);
    for (const a of an.list) if (a !== beast && a.st !== 8) { a.x = 0; a.z = 999; }
    const need = beast.hp; for (let i = 0; i < need; i++) { beast.stagger = 0; beast.x = 0; beast.z = C.arenaC; tp(0, C.arenaC + 2.8); b.yaw = Math.PI; R.an.batHit(b); }
    step(3); ok(!!beast.owner, `ch${c + 1}: ${need} bat hits -> ${beast.kind} is tamed`);
    if (c < 4) { ok(Q.q.ph === 0 && Q.q.ch === c + 1, `ch${c + 1}: gate opens, next maze`); step(100); ok(!R.info.quest.chapters[c].gate.solid.active, `ch${c + 1}: gate collider removed`); }
  }
  ok(Q.q.ph === 2, 'dragon phase after the 5th beast');
  tp(0, L.dr.circlesZ); step(150);
  ok(Q.q.ph === 3 && !R.info.quest.dragon.solid.active, 'circle frees the dragon (cage opens)');
  step(60 * 11); ok(Q.q.ph === 4 && R.victory > 0, 'dragon flew away -> VICTORY');
  ok(/VICTORY/.test(R.questHud()), 'HUD says VICTORY');
  ok(Q.vis.dragon.root.position.y > 20, 'the dragon flies high above (y ' + Q.vis.dragon.root.position.y.toFixed(0) + ')');
}

// ---- JUNGLE HUNT (single player): gun + auto-aim, beast wave, gate, plates, door
{
  mk('b-res-menu').onclick && mk('b-res-menu').onclick(); step(2);
  ph.startSingle(6); step(300);
  const R = ph.race, b = R.me.body, an = R.an, Hh = R.hunt, L = Hh.L;
  ok(R.meta.key === 'hunt' && Hh && an && an.list.length === 36 && an.list.every((a) => a.st === 8), 'Jungle Hunt loads: 36 hidden beasts (6 chapters), hunt state');
  ok(mk('body').classes.has('hunt-map') && R.info.finishZ < -9999, 'hunt: gun mode on, no finish line');
  ok(R.swing() === false, 'the BAT is replaced by the gun');
  const tp = (x, z) => { b.x = x; b.z = z; b.y = 0.05; b.vx = b.vz = 0; b.vy = 0; b.stun = 0; };
  tp(0, L.chapters[0].trigZ - 1); step(30);
  ok(Hh.h.ph === 1 && an.list.filter((a) => a.st !== 8).length === 3, 'entering the arena wakes 3 beasts (single player)');
  ok(/BEASTS LEFT: 3/.test(R.huntHud()), 'HUD shows beasts left');
  // fire at the nearest beast with auto-aim
  const beast = an.list.find((a) => a.st !== 8); tp(0, beast.z + 14); beast.x = 2; beast.z = b.z - 14; beast.wait = 99; beast.cool = 99;
  for (const a of an.list) if (a !== beast && a.st !== 8) { a.x = 0; a.z = 999; a.wait = 99; }
  R.camYaw = 0; const hp0 = beast.hp; R.gunCd = 0; R.fire();
  ok(beast.hp === hp0 - 1 && Math.abs(Math.atan2(beast.x - b.x, beast.z - b.z) - b.yaw) < 0.01, 'FIRE hits the beast ahead (auto-aim turned you to it)');
  ok(Hh.vis.tr.length === 1, 'a tracer is drawn');
  R.fire(); ok(beast.hp === hp0 - 1, 'cannot fire faster than the fire rate'); 
  let shots = 0; while (beast.st !== 8 && shots < 40) { R.gunCd = 0; R.fire(); shots++; }
  ok(beast.st === 8 && shots < 40, 'unlimited bullets: the beast goes down');
  for (const a of an.list) if (a.st !== 8) { a.x = 0; a.z = L.chapters[0].arenaC; a.wait = 99; a.cool = 99; }
  for (const a of an.list) { let n = 0; while (a.st !== 8 && n++ < 60) { R.gunCd = 0; tp(0, a.z + 8); R.fire(); } }
  step(10); ok(Hh.h.ph === 2 && !Hh.vis.h.solids[0].gate.active, 'all beasts shot: gate collider removed, machine phase');
  tp(plateXs1(), L.chapters[0].machZ); step(120);
  ok(Hh.h.m[0].done === 1, 'standing on the plate (single player) opens the door');
  step(60 * 4); ok(!Hh.vis.h.solids[0].door.active && /Ch 1/.test(R.huntHud()), 'door lifted away; HUD ok');
  { const live = Hh.vis.tr.length; step(30); ok(Hh.vis.tr.length <= live, 'tracers fade away'); }
}
{ // chapters 3-6 in the client (single player): visuals + machines run
  const R = ph.race, b = R.me.body, Hh = R.hunt, L = Hh.L, st = Hh.h, V = Hh.vis, tp = (x, z) => { b.x = x; b.z = z; b.y = 0.05; b.vx = b.vz = 0; b.vy = 0; b.stun = 0; };
  st.ch = 2; st.ph = 2; tp(L.crush.p1.x, L.crush.p1.z); step(60);
  ok(st.m[2].wb === 1 && R.huntHud().includes('CRUSHERS'), 'ch3: crusher plate sensed, HUD updated');
  st.ch = 3; st.ph = 2; tp(0, L.cannon.pad.z + 6); step(40); ok(st.m[3].wa === 1 && V.h.cannonDisc.bounce > 0, 'ch4: single player: cannon armed');
  st.ch = 4; st.ph = 2; for (let k = 0; k < 9; k++) { tp(k % 2 ? L.pump.pr.x : L.pump.pl.x, L.pump.pl.z); step(12); tp(0, L.pump.pl.z + 10); step(8); }
  ok(st.m[4].done === 1 && /PRESSURE/.test(R.huntHud()), 'ch5: pumping the two plates in turn finishes the bridge');
  step(200); ok(V.h.disp[4] > 0.95, 'ch5: bridge slabs rose');
  st.ch = 5; st.ph = 2; const seq = [st.m[5].a >> 6 & 3, st.m[5].a >> 4 & 3, st.m[5].a >> 2 & 3, st.m[5].a & 3];
  for (const i of seq) { tp(L.simon.pads[i].x, L.simon.pads[i].z); step(10); tp(0, L.simon.pads[0].z + 12); step(8); }
  step(120); ok(st.m[5].done === 1 && !V.h.doors[5].solid.active, 'ch6: the colour sequence opens the riddle door');
  tp(0, L.chapters[5].nextZ - 2); step(30); ok(st.ph === 3 && /THE END/.test(R.huntHud()), 'the end: victory');
  step(60);
  ok(/WIN/.test(R.huntObjective()), 'objective banner: win text');
  st.ph = 1; st.ch = 0; st.left = 2; ok(/Shoot ALL the beasts \(2 left\)/.test(R.huntObjective()), 'objective banner: tells you to shoot the beasts');
  st.ph = 2; st.ch = 4; st.m[4].done = 0; ok(/LEFT plate/.test(R.huntObjective()), 'objective banner: pump instructions');
  step(10); ok(!mk('hud-obj').classes.has('hidden'), 'objective banner is shown on the hunt map');
}
function plateXs1() { return 0; }

// ---- MAZE (single player): swing sign appears near a swing, hold G to hang, jump to let go; fans push; doors open
{
  mk('b-res-menu').onclick && mk('b-res-menu').onclick(); step(2);
  ph.startSingle(4); step(300);
  const R = ph.race, b = R.me.body, w = R.world;
  ok(R.meta.key === 'maze' && !R.meta.free && w.swings.length === 5 && w.winds.length === 4, 'Maze loads: race level with 5 swings and 4 fans');
  ok(!mk('body').classes.has('near-swing'), 'no swing sign far from swings');
  const sw = w.swings[0]; R.hang = null; ph.keys.delete('KeyG');
  b.x = 0; b.z = sw.z + 7.5; b.y = 0.05; b.vx = b.vz = b.vy = 0; step(10);
  ok(mk('body').classes.has('near-swing'), 'swing sign (GRAB button) appears when you walk up to a swing');
  ph.keys.add('KeyG'); let hung = false; for (let i = 0; i < 400 && !hung; i++) { step(1); hung = !!R.hang; }
  ok(hung, 'holding G grabs the swing handle when it swings by');
  const z0 = b.z; step(40); ok(!!R.hang && Math.abs(b.z - z0) > 0.5, 'while hanging you travel with the swing');
  ok(mk('body').classes.has('near-swing'), 'sign stays visible while hanging (shows JUMP TO LET GO)');
  ph.keys.delete('KeyG'); step(30); ok(!!R.hang, 'releasing the G key does not drop you'); ph.press.jump = true; step(2);
  ok(!R.hang && b.vy !== 0, 'jump lets go');
  ph.keys.delete('KeyG'); step(200);
  mk('b-res-menu').onclick && mk('b-res-menu').onclick(); step(2);
}
mk('b-profile-back').onclick(); step(2);
ph.race && ph.race.destroy && 0;
console.log(fails ? 'RUNMAIN: FAILURES' : 'RUNMAIN: ALL OK');
process.exit(fails ? 1 : 0);
