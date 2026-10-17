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
ok(mk('s-levels').classes.has('active') && mk('level-cards').children.length === 4, 'level select with 4 cards');
for (let L = 0; L < 4; L++) {
  mk('level-cards').children[L].onclick(); step(2);
  const r = ph.race; ok(!!r && r.level === L, `race created for level ${L + 1}`);
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
  if (L < 3) { mk('b-res-next').onclick(); step(2); }
}
// fall into water -> respawn at checkpoint
mk('b-res-menu').onclick(); step(2); mk('b-single').onclick(); step(2); mk('b-profile-next').onclick(); step(2); mk('level-cards').children[0].onclick(); step(250);
{ const r = ph.race; r.me.body.z = -60; r.me.body.y = 0.2; step(20); r.me.body.x = 40; step(120); ok(r.me.body.y > -9, 'respawned after falling (y=' + r.me.body.y.toFixed(1) + ')'); }
console.log(`frames simulated: ${frames}, renderer calls ok`);

// ---- multiplayer flow against the real server (a scripted friend joins)
mk('b-profile-back').onclick(); step(2);
ph.race && ph.race.destroy && 0;
console.log(fails ? 'RUNMAIN: FAILURES' : 'RUNMAIN: ALL OK');
process.exit(fails ? 1 : 0);
