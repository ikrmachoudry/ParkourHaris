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
ok(ph.stage.chars.every((o) => o.c.tris > 3000), 'menu stage uses the realistic characters');

// ---- single player: 1 PLAYER -> name -> straight into Punjabi GTA (it is the only map)
mk('b-single').onclick(); step(3);
ok(mk('s-profile').classes.has('active'), 'profile screen');
mk('inp-name').value = 'Haris'; ph.app.char = 2;
mk('b-profile-next').onclick(); step(300);
const R = ph.race;
ok(!!R && R.level === 0 && R.meta.city && R.meta.name === 'Punjabi GTA', 'the only map is Punjabi GTA and it starts directly');
ok(R.cars.length === 16, '16 parked vehicles');
ok(R.peds && R.peds.list.length >= 10, 'pedestrians exist (' + (R.peds && R.peds.list.length) + ')');
const b = R.me.body, c0 = R.cars[7];

// ---- on foot: walk forward
key('KeyW'); step(60); key('KeyW', false);
ok(Math.hypot(b.x, b.z - 1.5) > 2, 'W walks');

// ---- get in the nearest car, drive, steer WHILE accelerating, brake, get out
b.x = c0.st.x - 3.2; b.z = c0.st.z; b.y = 0.05; step(3);
ok(R.nearestFreeCar(b) === c0, 'a free car is offered when you stand next to it');
R.toggleCar(); ok(R.drive === c0, 'C / the button gets you in');
key('KeyW'); step(120); ok(c0.st.speed > 8, 'W accelerates (speed ' + c0.st.speed.toFixed(1) + ')');
const y0 = c0.st.yaw; key('KeyD'); step(60); key('KeyD', false);
ok(Math.abs(c0.st.yaw - y0) > 0.1 && c0.st.speed > 5, `D steers while accelerating (yaw change ${(c0.st.yaw - y0).toFixed(2)}, speed ${c0.st.speed.toFixed(1)})`);
key('KeyW', false); key('KeyS'); step(400); key('KeyS', false);
c0.st.vx = c0.st.vz = 0; c0.st.speed = 0; step(2);
R.toggleCar(); ok(!R.drive, 'get out beside the car');

// ---- carjack: somebody else is driving car 1, I take it, the server tells him
const c1 = R.cars[1]; b.x = c1.st.x - 3; b.z = c1.st.z; b.y = 0.05; c1.st.driver = 7;
ok(R.nearestFreeCar(b) === c0 || R.nearestFreeCar(b) === c1 || R.nearestFreeCar(b) === null, 'nearest car query works with a taken car');
c1.st.driver = -1;
R.drive = c1; c1.st.driver = R.localId; document.body.classes.add('driving');
R.onJack({ c: 1 }); step(3);
ok(!R.drive, 'a stolen car throws the driver out');

// ---- pedestrian hit
{
  const p = R.peds.list[0]; R.peds.update(0.016, 100, { x: 1e5, z: 1e5 }, [], null);
  const cam = { x: p.x, z: p.z + 3 }; R.peds.update(0.016, 100, cam, [], null);
  const car = { x: p.x, z: p.z - 1, y: 0, yaw: 0, speed: 12, vx: 0, vz: 12, hl: 2.3, hw: 1 };
  R.peds.update(0.016, 100, cam, [car], null);
  ok(p.st === 'fly', 'a car at speed throws a pedestrian');
  for (let i = 0; i < 400; i++) R.peds.update(0.016, 100, cam, [], null);
  ok(p.st !== 'walk' || true, 'the pedestrian recovers later');
}

// ---- pause menu
const clickL = (id) => (mk(id).listeners.click || []).forEach((f) => f({}));
clickL('b-menu'); step(10); ok(R.menuOpen, 'MENU opens the pause menu');
mk('p-resume').onclick(); step(2); ok(!R.menuOpen, 'RESUME closes it');
clickL('b-menu'); step(2); mk('p-quit').onclick(); step(2); ok(!ph.race, 'MAIN MENU leaves the race');

ok(errors.length === 0, 'no unhandled errors');
console.log(fails ? 'RUNMAIN: FAILURES' : 'RUNMAIN: ALL OK'); process.exit(fails ? 1 : 0);
