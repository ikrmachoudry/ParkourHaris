// v426: the first-time JANG guide: "coach marks" on the REAL screen. The game is dimmed, a glowing ring + an animated finger shows each real control one step at a time (NEXT / SKIP).
// It starts by itself the first time a player lands in a Jang match (the player cannot be hurt while it is open), is remembered on the phone, and can be replayed with HOW TO PLAY in the Jang menu.
const KEY = 'ph_guide_jang';
let open = null, started = false;

const seen = () => { try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; } };
const mark = (v) => { try { localStorage.setItem(KEY, v ? '1' : '0'); } catch (e) { /* noop */ } };

const rectOf = (ids) => {
  let l = 1e9, t = 1e9, r = -1e9, b = -1e9, n = 0;
  for (const id of ids) {
    const el = document.getElementById(id); if (!el) continue; const q = el.getBoundingClientRect();
    if (q.width < 8 || q.height < 8 || getComputedStyle(el).display === 'none' || getComputedStyle(el).visibility === 'hidden') continue;
    l = Math.min(l, q.left); t = Math.min(t, q.top); r = Math.max(r, q.right); b = Math.max(b, q.bottom); n++;
  }
  return n ? { l, t, r, b } : null;
};

const homeStick = () => {   // where the move stick lives (its home spot, plus a dragged layout position)
  const W = innerWidth, H = innerHeight; let cx = Math.max(18, W * 0.03) + 75, cy = H - Math.max(14, H * 0.05) - 75;
  try { const L = JSON.parse(localStorage.getItem('ph_layout') || '{}'); if (L.joy) { cx += (L.joy.x || 0) * W; cy += (L.joy.y || 0) * H; } } catch (e) { /* noop */ }
  return { l: cx - 75, t: cy - 75, r: cx + 75, b: cy + 75 };
};

const TOUCH = [
  { t: 'MOVE', x: 'Put your left thumb on the stick and drag. Push it all the way up to sprint.', a: 'drag', rect: homeStick },
  { t: 'LOOK AROUND', x: 'Slide your finger anywhere on the right and the upper left of the screen to turn the camera.', a: 'swipe', rect: () => ({ l: innerWidth * 0.42, t: innerHeight * 0.18, r: innerWidth * 0.74, b: innerHeight * 0.62 }) },
  { t: 'FIRE', x: 'Hold to shoot. With no gun in your hands this button punches.', a: 'tap', ids: ['a-punch'] },
  { t: 'AIM', x: 'Tap to zoom in for a steadier, more accurate shot.', a: 'tap', ids: ['a-aim'] },
  { t: 'JUMP, CROUCH, PRONE', x: 'Jump over things. Crouch or lie flat to hide and be a smaller target.', a: 'tap', ids: ['a-jump', 'a-crouch', 'a-prone'] },
  { t: 'RELOAD AND WEAPONS', x: 'Reload your gun, change the fire mode, or swap to another weapon.', a: 'tap', ids: ['a-reload', 'a-fmode', 'a-weapon'] },
  { t: 'PEEK', x: 'Lean left or right to look round a corner without showing your whole body.', a: 'tap', ids: ['a-leanl', 'a-leanr'] },
  { t: 'BAG AND HEALING', x: 'Open your bag to use medkits, bandages and other items. You cannot shoot while healing.', a: 'tap', ids: ['c-bag'] },
  { t: 'MAP AND ZONE', x: 'The circle on the map is the safe ZONE. It shrinks: stay inside it or you take damage.', a: 'none', ids: ['minimap'] },
  { t: 'LOOT', x: 'Walk over guns, armor, helmets and medkits to pick them up. Look inside buildings for the best loot.', a: 'none' },
  { t: 'WIN THE MATCH', x: 'Be the last team standing. In solo you get 3 lives and drop from the plane again each time. Good luck!', a: 'none' },
];
const KEYS = [
  { t: 'MOVE', x: 'W A S D to move, Shift to sprint, Space to jump.', a: 'none' },
  { t: 'LOOK AND FIRE', x: 'Move the mouse to look. Left click fires, right click aims.', a: 'none' },
  { t: 'RELOAD AND WEAPONS', x: 'R reloads, 1-5 or V changes weapon, B switches the fire mode.', a: 'none' },
  { t: 'CROUCH, PRONE AND PEEK', x: 'Z crouches, Ctrl or X goes prone, Q and E peek left and right.', a: 'none' },
  { t: 'HEAL AND MAP', x: 'Open your bag to heal. The circle on the map is the safe ZONE and it shrinks.', a: 'none' },
  TOUCH[9], TOUCH[10],
];

const CSS = '#gd{position:fixed;inset:0;z-index:9000;touch-action:none;font-family:system-ui,sans-serif;color:#fff}'
  + '#gd .gh{position:absolute;border-radius:16px;box-shadow:0 0 0 100vmax rgba(4,6,10,.72);transition:all .35s ease;pointer-events:none}'
  + '#gd .gr{position:absolute;border-radius:16px;border:3px solid #ffd23f;box-shadow:0 0 18px #ffd23f;animation:gdp 1.1s ease-in-out infinite;pointer-events:none;transition:all .35s ease}'
  + '@keyframes gdp{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.07);opacity:.55}}'
  + '#gd .gf{position:absolute;width:44px;height:44px;margin:-8px 0 0 -14px;pointer-events:none;font-size:40px;line-height:44px;filter:drop-shadow(0 3px 6px #000);transition:left .35s,top .35s}'
  + '#gd .gf.tap{animation:gdt 1s ease-in-out infinite}@keyframes gdt{0%,100%{transform:translateY(8px) scale(1)}50%{transform:translateY(0) scale(.9)}}'
  + '#gd .gf.drag{animation:gdd 1.6s ease-in-out infinite}@keyframes gdd{0%,100%{transform:translate(-26px,16px)}25%{transform:translate(0,-26px)}50%{transform:translate(26px,16px)}75%{transform:translate(0,30px)}}'
  + '#gd .gf.swipe{animation:gds 1.4s ease-in-out infinite}@keyframes gds{0%,100%{transform:translateX(-46px)}50%{transform:translateX(46px)}}'
  + '#gd .gc{position:absolute;width:min(360px,46vw);background:rgba(10,12,18,.96);border:1px solid rgba(255,255,255,.25);border-top:3px solid #d93a3a;padding:12px 14px;box-sizing:border-box;pointer-events:auto}'
  + '#gd .gc b{display:block;font:900 clamp(15px,2.4vw,20px) system-ui;letter-spacing:2px;margin-bottom:5px;color:#ffd23f}'
  + '#gd .gc p{margin:0 0 10px;font:600 clamp(12px,1.9vw,15px)/1.35 system-ui;opacity:.95}'
  + '#gd .gc .gb{display:flex;gap:8px;align-items:center}#gd .gc i{flex:1;font:700 11px system-ui;opacity:.6;font-style:normal;letter-spacing:1px}'
  + '#gd button{font:800 12px system-ui;letter-spacing:2px;padding:9px 16px;border:1px solid rgba(255,255,255,.25);border-left:4px solid #d93a3a;background:rgba(8,10,14,.9);color:#fff;cursor:pointer}'
  + '#gd button.n{background:#d93a3a;border-color:#d93a3a;border-left-color:#fff}';

function close(done) {
  if (!open) return; const o = open; open = null; clearTimeout(o.tm); window.removeEventListener('resize', o.re); o.el.remove(); o.st.remove();
  if (o.cs) o.cs.guideOn = false; if (done) mark(true);
}

function run(cs) {
  const touch = document.body.classList.contains('touch'), steps = (touch ? TOUCH : KEYS).filter((s) => !s.ids && !s.rect ? true : (s.rect ? true : !!rectOf(s.ids)));
  if (!steps.length) return;
  const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
  const el = document.createElement('div'); el.id = 'gd';
  el.innerHTML = '<div class="gh"></div><div class="gr"></div><div class="gf">☝️</div><div class="gc"><b></b><p></p><div class="gb"><i></i><button class="s">SKIP</button><button class="n">NEXT</button></div></div>';
  document.body.appendChild(el);
  const hole = el.querySelector('.gh'), ring = el.querySelector('.gr'), fin = el.querySelector('.gf'), card = el.querySelector('.gc'), tt = card.querySelector('b'), tx = card.querySelector('p'), cnt = card.querySelector('i'), nb = card.querySelector('.n');
  let i = 0; open = { el, st, cs, tm: 0, re: null }; if (cs) cs.guideOn = true;
  ['touchstart', 'touchmove', 'mousedown', 'pointerdown', 'click', 'keydown'].forEach((ev) => el.addEventListener(ev, (e) => { if (!e.target.closest || !e.target.closest('button')) { e.stopPropagation(); if (ev !== 'keydown') e.preventDefault(); } }, { passive: false }));
  const show = () => {
    const s = steps[i], W = innerWidth, H = innerHeight, p = 10;
    let r = s.rect ? s.rect() : s.ids ? rectOf(s.ids) : null;
    tt.textContent = s.t; tx.textContent = s.x; cnt.textContent = (i + 1) + ' / ' + steps.length; nb.textContent = i === steps.length - 1 ? 'START PLAYING' : 'NEXT';
    if (r) {
      const l = Math.max(2, r.l - p), t = Math.max(2, r.t - p), w = Math.min(W - 4, r.r + p) - l, h = Math.min(H - 4, r.b + p) - t;
      for (const e of [hole, ring]) { e.style.display = 'block'; e.style.left = l + 'px'; e.style.top = t + 'px'; e.style.width = w + 'px'; e.style.height = h + 'px'; }
      fin.style.display = s.a === 'none' ? 'none' : 'block'; fin.className = 'gf ' + s.a; fin.style.left = (l + w / 2) + 'px'; fin.style.top = (t + h / 2) + 'px';
      const cw = Math.min(360, W * 0.46), onLeft = l + w / 2 > W / 2;   // the card goes to the side of the screen the control is NOT on
      card.style.left = onLeft ? Math.max(8, W * 0.04) + 'px' : 'auto'; card.style.right = onLeft ? 'auto' : Math.max(8, W * 0.04) + 'px'; card.style.width = cw + 'px';
      card.style.top = (t + h / 2 > H / 2 ? Math.max(8, H * 0.06) : Math.min(H - 190, H * 0.5)) + 'px';
    } else {
      hole.style.display = 'block'; hole.style.left = (W / 2) + 'px'; hole.style.top = (H / 2) + 'px'; hole.style.width = '0'; hole.style.height = '0'; ring.style.display = 'none'; fin.style.display = 'none';
      card.style.left = (W / 2 - Math.min(360, W * 0.46) / 2) + 'px'; card.style.right = 'auto'; card.style.width = Math.min(360, W * 0.46) + 'px'; card.style.top = (H / 2 - 70) + 'px';
    }
  };
  open.re = () => show(); window.addEventListener('resize', open.re);
  nb.onclick = () => { if (i >= steps.length - 1) close(true); else { i++; show(); } };
  card.querySelector('.s').onclick = () => close(true);
  show();
}

window.phGuide = {
  seen,
  /* called when the player lands in a Jang match; force = replay from the menu */
  maybeStart(cs) { if (open || started && !this.force) return; if (seen() && !this.force) return; this.force = false; started = true; setTimeout(() => { if (!open && cs && !cs.over) run(cs); }, 900); },
  replay() { mark(false); started = false; this.force = true; },
  close,
};
