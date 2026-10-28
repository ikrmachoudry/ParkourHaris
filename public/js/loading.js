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
<g fill="#06090f"><path d="M300 250 L620 214 L664 222 L690 206 L706 210 L690 238 L760 246 L760 258 L690 262 L650 282 L560 292 L330 286 Z"/><path d="M560 224 L620 150 L650 150 L640 222Z"/><rect x="418" y="288" width="8" height="26"/><rect x="498" y="290" width="8" height="26"/></g>
<g fill="#06090f" opacity=".7"><circle cx="396" cy="316" r="14"/><circle cx="476" cy="318" r="14"/></g>
<g><path d="M820 300 a64 50 0 0 1 128 0 Z" fill="#3b4b32"/><path d="M820 300 a64 50 0 0 1 42 -44 L884 300Z M906 256 a64 50 0 0 1 42 44 L906 300 Z" fill="#c8b568"/><g stroke="#cfd6c8" stroke-width="1.4"><line x1="820" y1="300" x2="878" y2="420"/><line x1="948" y1="300" x2="890" y2="420"/><line x1="884" y1="300" x2="884" y2="420"/></g><path d="M870 420 h28 l4 18 h-8 l-2 28 h-8 l-2 -28 h-8 Z" fill="#06090f"/><circle cx="884" cy="412" r="9" fill="#06090f"/></g>
<g transform="translate(1090 360) scale(.8)"><path d="M0 0 a64 50 0 0 1 128 0 Z" fill="#46523a"/><path d="M0 0 a64 50 0 0 1 42 -44 L64 0Z M86 -44 a64 50 0 0 1 42 44 L86 0Z" fill="#9a8f58"/><g stroke="#cfd6c8" stroke-width="1.4"><line x1="0" y1="0" x2="58" y2="120"/><line x1="128" y1="0" x2="70" y2="120"/></g><path d="M50 120 h28 l4 18 h-8 l-2 28 h-8 l-2 -28 h-8 Z" fill="#06090f"/><circle cx="64" cy="112" r="9" fill="#06090f"/></g>
<path d="M0 560 L120 500 L260 540 L420 470 L600 530 L760 480 L940 540 L1120 470 L1300 530 L1460 490 L1600 530 L1600 720 L0 720Z" fill="#0a0f14"/>
<ellipse cx="800" cy="590" rx="420" ry="120" fill="url(#lsFire)"/>
<g fill="#05080c"><path d="M0 640 L0 720 L1600 720 L1600 650 L1500 660 L1440 610 L1400 660 L1300 650 L1220 600 L1150 650 L1040 640 L960 600 L880 650 L700 650 L640 590 L560 650 L440 640 L380 600 L300 650 L180 640 L120 610 L60 650Z"/>
<g><rect x="1020" y="560" width="90" height="90"/><polygon points="1010,560 1065,520 1120,560"/><rect x="170" y="570" width="70" height="80"/><polygon points="160,570 205,535 250,570"/></g>
<g><polygon points="60,650 85,560 110,650"/><polygon points="95,650 125,545 155,650"/><polygon points="1330,650 1360,555 1390,650"/><polygon points="1370,650 1400,570 1430,650"/></g></g>
<g fill="#05080c"><path d="M690 720 L700 640 q4 -34 28 -42 l8 -14 q12 -20 30 -8 l6 16 l60 -30 l8 12 l-56 34 l-2 60 l8 42 h-26 l-6 -34 l-12 34 h-26 Z"/><rect x="780" y="566" width="96" height="9" rx="3" transform="rotate(-18 780 566)"/></g>
<rect width="1600" height="720" fill="url(#lsVig)"/></svg>`;
const CSS = `#loadscr{position:fixed;inset:0;z-index:100;background:#050b16;color:#fff;font-family:"Lilita One","Fredoka One",Arial Black,Arial,sans-serif;opacity:1;transition:opacity .45s;overflow:hidden;touch-action:none;-webkit-user-select:none;user-select:none}
#loadscr.out{opacity:0;pointer-events:none}#loadscr>svg{position:absolute;inset:0;width:100%;height:100%}
#loadscr .ls-t{position:absolute;left:calc(max(env(safe-area-inset-left),0px) + 22px);top:calc(max(env(safe-area-inset-top),0px) + 16px);right:22px;font:800 clamp(20px,6vh,38px)/1.05 system-ui,-apple-system,"Segoe UI",Arial,sans-serif;letter-spacing:.28em;text-transform:uppercase;white-space:nowrap;color:#fff;text-shadow:0 2px 8px rgba(0,0,0,.8)}
#loadscr .ls-t::after{content:"";display:block;width:56px;height:3px;background:#d93a3a;margin-top:8px}
#loadscr .ls-t small{display:block;font-size:.34em;font-weight:700;letter-spacing:.34em;color:#c4ccd4;margin-top:6px}
#loadscr .ls-b{position:absolute;left:calc(max(env(safe-area-inset-left),0px) + 22px);right:calc(max(env(safe-area-inset-right),0px) + 22px);bottom:calc(max(env(safe-area-inset-bottom),0px) + 16px)}
#loadscr .ls-tip{font:700 clamp(11px,2.8vh,16px)/1.2 system-ui,sans-serif;letter-spacing:1.5px;color:#cfd8e6;text-align:center;margin-bottom:8px;text-shadow:0 1px 4px #000}
#loadscr .ls-m{font:600 clamp(13px,3.4vh,20px)/1.2 system-ui,sans-serif;text-align:center;margin-bottom:6px;text-shadow:0 1px 5px #000}
#loadscr .ls-bar{height:12px;border:1px solid rgba(255,255,255,.4);background:rgba(0,0,0,.6);border-radius:2px;overflow:hidden}
#loadscr .ls-fill{height:100%;width:0;background:linear-gradient(90deg,#8d1f1f,#d93a3a);box-shadow:0 0 10px rgba(217,58,58,.6)}
#loadscr .ls-n{font:700 12px system-ui,sans-serif;text-align:center;margin-top:5px;color:#fff;text-shadow:0 1px 4px #000}`;
function build() {
  if (L.el || typeof document === 'undefined') return;
  const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
  const el = document.createElement('div'); el.id = 'loadscr'; el.className = 'out';
  el.innerHTML = SVG + '<div class="ls-t"><span class="ls-ti">JANG</span><small class="ls-s">BATTLE ROYALE</small></div><div class="ls-b"><div class="ls-tip"></div><div class="ls-m"></div><div class="ls-bar"><div class="ls-fill"></div></div><div class="ls-n">0%</div></div>';
  document.body.appendChild(el); L.el = el; L.bar = el.querySelector('.ls-fill'); L.num = el.querySelector('.ls-n'); L.msg = el.querySelector('.ls-m'); L.title = el.querySelector('.ls-ti'); L.sub = el.querySelector('.ls-s'); L.tip = el.querySelector('.ls-tip');
}
function frame() {
  L.raf = 0; if (!L.shown) return;
  const now = performance.now(), t = (now - L.t0) / 1000, real = L.total ? L.done / L.total : 0;
  let target = Math.max(90 * (1 - Math.exp(-t / 5)), real * 92);
  if (t > 45) { L.wantHide = true; L.done = L.total; }   // never stuck
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
    if (!L.shown) { L.shown = true; L.wantHide = false; L.t0 = performance.now(); L.pct = 0; L.tipT = 0; L.done = Math.min(L.done, L.total); }
    L.wantHide = false; if (title) { L.title.textContent = title; if (L.sub) L.sub.textContent = /GTA/i.test(title) ? 'OPEN WORLD' : 'BATTLE ROYALE'; } L.msg.textContent = label || 'LOADING...'; L.el.classList.remove('out');
    if (!L.raf) L.raf = requestAnimationFrame(frame);
  },
  say(label) { if (L.msg && label) L.msg.textContent = label; },
  finish() { if (!L.shown) return; L.wantHide = true; if (!L.raf) L.raf = requestAnimationFrame(frame); },
  get visible() { return L.shown; },
};
// wrap any slow load (a GLB, a texture, new characters): the bar follows the real work
export function track(p, label) { L.total++; if (label && L.shown) loadScreen.say('LOADING ' + label + '...'); const d = () => { L.done++; }; p.then(d, d); return p; }
