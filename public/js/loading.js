// v188: the loading screen - an original night-drop wallpaper, a progress bar and a status line.
// Anything slow (a model file, the battle map, new characters) is wrapped in track(); the bar follows the real files and creeps a little in between.
const L = { total: 0, done: 0, shown: false, wantHide: false, t0: 0, pct: 0, el: null, bar: null, num: null, msg: null, title: null, tip: null, raf: 0, label: '', tipT: 0 };
const TIPS = ['LAND NEAR HOUSES FOR FAST LOOT', 'PRESS AND HOLD A PEEK BUTTON TO LOOK AROUND A CORNER', 'CROUCH OR GO PRONE TO STAY HIDDEN', 'A BACKPACK LETS YOU CARRY MORE', 'USE THE SCOPE ON THE SNIPER FOR LONG SHOTS', 'HEAL BEFORE THE NEXT FIGHT', 'THE DOOR OPENS BY ITSELF - THEN DIVE'];
const SVG = `<svg viewBox="0 0 1600 720" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<defs><linearGradient id="lsSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#050b16"/><stop offset=".55" stop-color="#10243c"/><stop offset=".82" stop-color="#3a3d52"/><stop offset="1" stop-color="#b4562a"/></linearGradient>
<radialGradient id="lsFire" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#ffb347" stop-opacity=".95"/><stop offset=".45" stop-color="#e2531c" stop-opacity=".5"/><stop offset="1" stop-color="#e2531c" stop-opacity="0"/></radialGradient>
<linearGradient id="lsBeam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#cfe6ff" stop-opacity=".5"/><stop offset="1" stop-color="#cfe6ff" stop-opacity="0"/></linearGradient>
<radialGradient id="lsVig" cx=".5" cy=".45" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".72"/></radialGradient></defs>
<rect width="1600" height="720" fill="url(#lsSky)"/>
<g fill="#fff" opacity=".8"><circle cx="120" cy="60" r="1.6"/><circle cx="300" cy="140" r="1.2"/><circle cx="520" cy="40" r="1.8"/><circle cx="760" cy="110" r="1.2"/><circle cx="980" cy="50" r="1.5"/><circle cx="1180" cy="150" r="1.2"/><circle cx="1380" cy="70" r="1.8"/><circle cx="1500" cy="190" r="1.2"/><circle cx="640" cy="210" r="1"/><circle cx="1260" cy="30" r="1"/></g>
<circle cx="1240" cy="150" r="46" fill="#dfe8f5" opacity=".9"/><circle cx="1258" cy="140" r="40" fill="#10243c" opacity=".35"/>
<polygon points="150,720 90,0 210,0" fill="url(#lsBeam)"/><polygon points="1450,720 1390,0 1520,0" fill="url(#lsBeam)"/>
<path d="M0 560 L120 500 L260 540 L420 470 L600 530 L760 480 L940 540 L1120 470 L1300 530 L1460 490 L1600 530 L1600 720 L0 720Z" fill="#0a0f14"/>
<ellipse cx="800" cy="590" rx="420" ry="120" fill="url(#lsFire)"/>
<g fill="#05080c"><path d="M0 640 L0 720 L1600 720 L1600 650 L1500 660 L1440 610 L1400 660 L1300 650 L1220 600 L1150 650 L1040 640 L960 600 L880 650 L700 650 L640 590 L560 650 L440 640 L380 600 L300 650 L180 640 L120 610 L60 650Z"/>
<g><rect x="1020" y="560" width="90" height="90"/><polygon points="1010,560 1065,520 1120,560"/><rect x="170" y="570" width="70" height="80"/><polygon points="160,570 205,535 250,570"/></g>
<g><polygon points="60,650 85,560 110,650"/><polygon points="95,650 125,545 155,650"/><polygon points="1330,650 1360,555 1390,650"/><polygon points="1370,650 1400,570 1430,650"/></g></g>
<g fill="#05080c"><path d="M690 720 L700 640 q4 -34 28 -42 l8 -14 q12 -20 30 -8 l6 16 l60 -30 l8 12 l-56 34 l-2 60 l8 42 h-26 l-6 -34 l-12 34 h-26 Z"/><rect x="780" y="566" width="96" height="9" rx="3" transform="rotate(-18 780 566)"/></g>
<rect width="1600" height="720" fill="url(#lsVig)"/></svg>`;
const CSS = `#loadscr{position:fixed;inset:0;z-index:100;background:#050b16;color:#fff;font-family:"Lilita One","Fredoka One",Arial Black,Arial,sans-serif;opacity:1;transition:opacity .45s;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none}
#loadscr.out{opacity:0;pointer-events:none}#loadscr>.ls-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:none}#loadscr.jang>.ls-bg{display:block}#loadscr>.ls-hero{position:absolute;display:none;transform:translateY(-100%);pointer-events:none;filter:drop-shadow(0 6px 10px rgba(0,0,0,.35))}#loadscr.jang>.ls-hero{display:block}#loadscr.jang>svg{display:none}#loadscr>.ls-sh{position:absolute;inset:0;display:none;background:linear-gradient(180deg,rgba(5,8,14,.55) 0%,rgba(5,8,14,0) 28%,rgba(5,8,14,0) 55%,rgba(5,8,14,.88) 100%)}#loadscr.jang>.ls-sh{display:block}#loadscr>svg{position:absolute;inset:0;width:100%;height:100%}
#loadscr .ls-t{position:absolute;left:calc(max(env(safe-area-inset-left),0px) + 22px);top:calc(max(env(safe-area-inset-top),0px) + 16px);right:22px;font:800 clamp(20px,6vh,38px)/1.05 system-ui,-apple-system,"Segoe UI",Arial,sans-serif;letter-spacing:.28em;text-transform:uppercase;white-space:nowrap;color:#fff;text-shadow:0 2px 8px rgba(0,0,0,.8)}
#loadscr .ls-t::after{content:"";display:block;width:56px;height:3px;background:#d93a3a;margin-top:8px}
#loadscr .ls-t small{display:block;font-size:.34em;font-weight:700;letter-spacing:.34em;color:#c4ccd4;margin-top:6px}
#loadscr .ls-b{position:absolute;left:calc(max(env(safe-area-inset-left),0px) + 22px);right:calc(max(env(safe-area-inset-right),0px) + 22px);bottom:calc(max(env(safe-area-inset-bottom),0px) + 16px)}
#loadscr .ls-tip{font:700 clamp(11px,2.8vh,16px)/1.2 system-ui,sans-serif;letter-spacing:1.5px;color:#cfd8e6;text-align:center;margin-bottom:8px;text-shadow:0 1px 4px #000}
#loadscr .ls-m{font:600 clamp(13px,3.4vh,20px)/1.2 system-ui,sans-serif;text-align:center;margin-bottom:6px;text-shadow:0 1px 5px #000}
#loadscr .ls-bar{height:12px;border:1px solid rgba(255,255,255,.4);background:rgba(0,0,0,.6);border-radius:2px;overflow:hidden}
#loadscr .ls-fill{height:100%;width:0;background:linear-gradient(90deg,#8d1f1f,#d93a3a);box-shadow:0 0 10px rgba(217,58,58,.6)}
#loadscr .ls-n{font:700 12px system-ui,sans-serif;text-align:center;margin-top:5px;color:#fff;text-shadow:0 1px 4px #000}
#loadscr .ls-net{position:absolute;inset:0;z-index:3;display:none;align-items:center;justify-content:center;background:rgba(5,8,14,.82);text-align:center;padding:20px}#loadscr .ls-net.on{display:flex}
#loadscr .ls-net>div{max-width:460px;font:600 17px/1.4 system-ui,Arial,sans-serif}#loadscr .ls-net h2{margin:6px 0;font:800 clamp(20px,4.6vh,28px)/1.15 system-ui,Arial,sans-serif;color:#ffd23f}#loadscr .ls-net button{margin:12px 6px 0;padding:12px 22px;border:0;border-radius:10px;font:800 16px system-ui,Arial,sans-serif;cursor:pointer;touch-action:manipulation}#loadscr .ls-net .rs{background:#d93a3a;color:#fff}#loadscr .ls-net .kw{background:rgba(255,255,255,.16);color:#fff}`;
const CSS2 = `#loadscr .ls-x{position:absolute;z-index:4;right:calc(max(env(safe-area-inset-right),0px) + 22px);top:calc(max(env(safe-area-inset-top),0px) + 16px);padding:10px 20px;border:2px solid rgba(255,255,255,.55);border-left:5px solid #d93a3a;border-radius:6px;background:rgba(8,10,14,.78);color:#fff;font:800 clamp(12px,3vh,15px) system-ui,Arial,sans-serif;letter-spacing:2px;cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent}#loadscr .ls-x:hover{background:#d93a3a}`;
function build() {
  if (L.el || typeof document === 'undefined') return;
  const st = document.createElement('style'); st.textContent = CSS + CSS2; document.head.appendChild(st);
  const el = document.createElement('div'); el.id = 'loadscr'; el.className = 'out';
  el.innerHTML = SVG + '<img class="ls-bg" src="img/jang-load.jpg" alt=""><img class="ls-hero" alt=""><div class="ls-sh"></div>' + '<div class="ls-t"><span class="ls-ti">JANG</span><small class="ls-s">BATTLE ROYALE</small></div><div class="ls-b"><div class="ls-tip"></div><div class="ls-m"></div><div class="ls-bar"><div class="ls-fill"></div></div><div class="ls-n">0%</div></div><div class="ls-net"><div><div style="font-size:40px">\u26A0\uFE0F</div><h2>CHECK YOUR NETWORK AND RESTART</h2><div>The game is loading very slowly (bad connection). Nothing can hurt you while you wait.</div><button type="button" class="rs">RESTART</button><button type="button" class="kw">KEEP WAITING</button></div></div>';
  document.body.appendChild(el); L.el = el; L.bar = el.querySelector('.ls-fill'); L.num = el.querySelector('.ls-n'); L.msg = el.querySelector('.ls-m'); L.title = el.querySelector('.ls-ti'); L.sub = el.querySelector('.ls-s'); L.tip = el.querySelector('.ls-tip'); L.net = el.querySelector('.ls-net');
  { const x = document.createElement('button'); x.type = 'button'; x.className = 'ls-x'; x.textContent = 'CANCEL';   // v445: leave a loading screen you started by mistake (CANCEL button or the Esc key)
    const go = (e) => { if (e) { e.preventDefault(); e.stopPropagation(); } loadScreen.cancel(); }; x.onclick = go; x.ontouchend = go; el.appendChild(x); L.x = x;
    window.addEventListener('keydown', (e) => { if (e.code === 'Escape' && L.shown && !L.wantHide) { e.preventDefault(); e.stopPropagation(); loadScreen.cancel(); } }, true); }
  const rs = el.querySelector('.ls-net .rs'), kw = el.querySelector('.ls-net .kw');
  rs.onclick = () => location.reload(); rs.ontouchend = (e) => { e.preventDefault(); location.reload(); };
  const keep = (e) => { if (e) e.preventDefault(); L.netAt = performance.now(); L.net.classList.remove('on'); }; kw.onclick = keep; kw.ontouchend = keep;
}
/* v301: the wallpaper's skydiver is the character you picked: the old civilian is painted out of the picture and your own skydive portrait is placed where he was (same cover-fit maths as the wallpaper) */
function heroPlace() {
  const h = L.el && L.el.querySelector('.ls-hero'); if (!h) return;
  let k = 8; try { k = +(localStorage.getItem('ph_skin') || localStorage.getItem('ph_char') || 8); } catch (e) {}
  if (!(k >= 4 && k <= 8)) k = 8;
  const src = 'img/fall' + k + '.png'; if (h.getAttribute('src') !== src) h.setAttribute('src', src);
  const W = innerWidth, H = innerHeight, sc = Math.max(W / 1000, H / 450), ox = (W - 1000 * sc) / 2, oy = (H - 450 * sc) / 2;
  h.style.width = (160 * sc) + 'px'; h.style.left = (ox + (435 - 80) * sc) + 'px'; h.style.top = (oy + 428 * sc) + 'px';
}
function frame() {
  L.raf = 0; if (!L.shown) return;
  const now = performance.now(), t = (now - L.t0) / 1000, real = L.total ? L.done / L.total : 0;
  let target = Math.max(90 * (1 - Math.exp(-t / 5)), real * 92);
  /* v296: a slow network must never leave you staring at 90%: after SLOW seconds the line says so, after WARN seconds the CHECK YOUR NETWORK AND RESTART panel appears (RESTART / KEEP WAITING) */
  { const SL = (typeof window !== 'undefined' && window.__LS_SLOW) || [25, 60], tn = (now - (L.netAt || L.t0)) / 1000;
    if (!(L.wantHide && L.done >= L.total)) { if (t > SL[0] && L.msg && now - (L.slowT || 0) > 1000) { L.slowT = now; L.msg.textContent = 'SLOW NETWORK - STILL LOADING...  ' + Math.round(t) + ' s'; }
      if (tn > SL[1] && L.net && !L.net.classList.contains('on')) L.net.classList.add('on'); } else if (L.net && L.net.classList.contains('on')) L.net.classList.remove('on'); }
  if (t > 600) { L.wantHide = true; L.done = L.total; }   // last-resort fail-safe (the restart panel has been up for minutes)
  const ready = L.wantHide && L.done >= L.total && now - L.t0 > 900;
  if (ready) target = 100;
  L.pct += (target - L.pct) * 0.12 + (ready ? 0.8 : 0.02); if (L.pct > target) L.pct = target;
  if (L.bar) { L.bar.style.width = L.pct.toFixed(1) + '%'; L.num.textContent = Math.round(L.pct) + '%'; }
  if (now - L.tipT > 2600) { L.tipT = now; L.tip.textContent = 'TIP: ' + TIPS[Math.floor(Math.random() * TIPS.length)]; }
  if (ready && L.pct >= 99.5) { L.shown = false; L.el.classList.add('out'); return; }
  L.raf = requestAnimationFrame(frame);
}
export const loadScreen = {
  show(title, label) {
    if (typeof document === 'undefined') return; build(); if (!L.el) return;
    if (!L.shown) { L.shown = true; L.wantHide = false; L.t0 = performance.now(); L.netAt = 0; L.slowT = 0; if (L.net) L.net.classList.remove('on'); L.pct = 0; L.tipT = 0; L.done = Math.min(L.done, L.total); }
    L.wantHide = false; if (title) { L.title.textContent = title; if (L.sub) L.sub.textContent = /GTA/i.test(title) ? 'OPEN WORLD' : 'BATTLE ROYALE'; } L.el.classList.toggle('jang', !/GTA/i.test(title || L.title.textContent)); L.msg.textContent = label || 'LOADING...'; heroPlace(); L.el.classList.remove('out');
    if (!L.raf) L.raf = requestAnimationFrame(frame);
  },
  say(label) { if (L.msg && label) L.msg.textContent = label; },
  cancelFn: null,
  cancel() { if (!L.shown) return; const f = this.cancelFn; this.hide(); try { if (f) f(); } catch (e) { /* ignore */ } },   // v445: the player pressed CANCEL: the screen goes away at once and main.js takes him back
  hide() { L.shown = false; L.wantHide = true; if (L.raf) { cancelAnimationFrame(L.raf); L.raf = 0; } if (L.el) L.el.classList.add('out'); if (L.net) L.net.classList.remove('on'); },
  finish() { if (!L.shown) return; L.wantHide = true; if (!L.raf) L.raf = requestAnimationFrame(frame); },
  get visible() { return L.shown; },
};
// wrap any slow load (a GLB, a texture, new characters): the bar follows the real work
export function track(p, label) { L.total++; if (label && L.shown) loadScreen.say('LOADING ' + label + '...'); const d = () => { L.done++; }; p.then(d, d); return p; }
