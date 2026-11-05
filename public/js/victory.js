// v338: the VICTORY PAGE at the end of a Jang match: "TEAM ... WINS", the winning team dances on a stage (every player a different Mixamo dance),
// the music plays, and a "SHOW STATS" button opens the table (kills sorted high to low, which weapons killed how many bots / players, what killed him).
import * as THREE from 'three';
import { makeHero, makeSkin, loadDance, loadSad, preloadActors, HERO_GLB, JANG_GLB } from './glbactor.js';
import { av } from './assetver.js';
import * as A from './audio.js';

const DANCES = ['dance0', 'dance1', 'dance2', 'dance3', 'dance4'];
const SADS = ['sad0', 'sad1', 'sad2', 'sad3'], SAD_DUR = { sad0: 6.27, sad1: 4.8, sad2: 17.3, sad3: 4.17 };   // v417: the loser page: crying, rejected, bad golf shot, sitting in disbelief (random)
const LOSE = 'audio/lose.mp3';   // 0:00 - 1:43 of the song, looped
const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const TCOL = ['#ffd23f', '#4aa8ff', '#ff5a5a', '#5ef0a0'];
const MUSIC = 'audio/win.mp3';   // drop the track in public/audio/win.mp3 (the page plays it in a loop; no file = silence)
let cur = null;

function actorFor(r) {
  const sk = r.sk === undefined || r.sk === null ? r.ch | 0 : r.sk | 0;
  return sk >= 4 ? makeSkin(sk) : makeHero(r.ch | 0);
}
function chips(o, who) {
  const e = Object.entries(o || {}).sort((a, b) => b[1] - a[1]);
  return e.length ? e.map(([w, n]) => '<b>' + esc(w) + '</b> ' + n + who).join(' &nbsp; ') : '<i>-</i>';
}
function statsTable(rows, winTm) {
  let h = '<table class="vt"><thead><tr><th>#</th><th>PLAYER</th><th>KILLS</th><th>DEATHS</th><th>KILLED WITH (bots / players)</th><th>DIED TO</th></tr></thead><tbody>';
  rows.forEach((r, i) => {
    const bots = Object.values(r.bots || {}).reduce((a, b) => a + b, 0), ply = Object.values(r.ply || {}).reduce((a, b) => a + b, 0);
    const ws = new Set([...Object.keys(r.bots || {}), ...Object.keys(r.ply || {})]);
    const wl = [...ws].sort((a, b) => ((r.bots[b] || 0) + (r.ply[b] || 0)) - ((r.bots[a] || 0) + (r.ply[a] || 0))).map((w) => '<b>' + esc(w) + '</b> ' + (r.bots[w] ? r.bots[w] + ' bots' : '') + (r.bots[w] && r.ply[w] ? ' + ' : '') + (r.ply[w] ? r.ply[w] + ' players' : '')).join('<br>') || '<i>-</i>';
    h += '<tr' + (r.tm === winTm ? ' class="w"' : '') + (r.me ? ' style="outline:1px solid #fff"' : '') + '><td>' + (i + 1) + '</td><td><span style="color:' + TCOL[r.tm & 3] + '">●</span> ' + esc(r.name) + '</td><td><b>' + r.k + '</b><br><small>' + bots + ' bots • ' + ply + ' players</small></td><td>' + r.d + '</td><td>' + wl + '</td><td>' + chips(r.dby, '×') + '</td></tr>';
  });
  return h + '</tbody></table>';
}

let pre = null, preLost = false;   // v411: the victory song, started the moment the match ends (5 s before the page opens) and then HANDED to the page, so it never restarts
const mkSong = (lost) => { const a = new Audio(av(lost ? LOSE : MUSIC)); a.loop = true; a.volume = 0.8; a.muted = A.isMusicMuted(); a.play().catch(() => { /* needs a tap on some phones: the page buttons start it */ }); return a; };
export function startWinSong(lost) { lost = !!lost; if (cur) return; if (pre && preLost === lost) return; if (pre) { try { pre.pause(); } catch (e) { /* noop */ } pre = null; } try { A.blockMenuMusic(true); A.hush(true); } catch (e) { /* noop */ } pre = mkSong(lost); preLost = lost; }   // v417: the DEFEAT page has its own song
export function cancelWinSong() { if (!pre) return; try { pre.pause(); } catch (e) { /* noop */ } pre = null; try { A.hush(false); } catch (e) { /* noop */ } }
// v417: fetch the clips + the soldiers' models BEFORE the page opens (the winners used to stand still until the dance file arrived)
export function prepareVictory(lost) { try { Promise.all([lost ? loadSad() : loadDance(), preloadActors([...HERO_GLB, ...JANG_GLB])]).catch(() => {}); } catch (e) { /* noop */ } }
export function closeVictory() {
  if (!cur) return; const c = cur; cur = null;
  cancelAnimationFrame(c.raf); try { A.hush(false); } catch (e) { /* noop */ } try { c.audio.pause(); } catch (e) { /* noop */ } window.removeEventListener('resize', c.onResize);
  c.actors.forEach((a) => { c.scene.remove(a.c.group); if (a.c.dispose) a.c.dispose(); });
  try { c.renderer.dispose(); c.renderer.forceContextLoss(); } catch (e) { /* noop */ }
  c.el.remove();
}

// m = { win: team index, teams: [{tm,k,d,n}], rows: [{name,tm,ch,sk,k,d,bots,ply,dby}] }; myTm = my team index (highlight); onDone = called when the page is closed
export function showVictory(m, myTm, onDone) {
  closeVictory(); A.blockMenuMusic(true); try { A.hush(true); } catch (e) { /* noop */ }   /* v407: no game sound on the victory page */
  const teams = m.teams || [], wt = teams.find((t) => t.tm === m.win) || teams[0] || { n: 'TEAM', tm: 0, k: 0 };
  const rows = (m.rows || []).map((r) => ({ ...r, bots: r.bots || {}, ply: r.ply || {}, dby: r.dby || {}, me: false })).sort((a, b) => b.k - a.k || a.d - b.d);
  const lost = !!m.lost || (m.win !== undefined && m.win !== null && myTm !== undefined && myTm !== null && myTm !== m.win);   // v417: my team lost: the DEFEAT page (my own team on the stage, sad moves, its own song)
  const mt = teams.find((t) => t.tm === myTm) || { n: 'YOUR TEAM', tm: myTm | 0, k: 0 }, lrows = rows.filter((r) => r.tm === mt.tm), lshow = lrows.length ? lrows : rows.filter((r) => r.me).slice(0, 1).concat(rows.slice(0, 1)).slice(0, 1);
  const wrows = rows.filter((r) => r.tm === wt.tm), title = lost ? String((lrows.length === 1 && lrows[0].name) || mt.n || 'YOUR TEAM') : String((wrows.length === 1 && wrows[0].name) || wt.n || 'PLAYER');   // v345: a lone winner (solo, or a team of one) is announced by his own NAME
  const el = document.createElement('div'); el.id = 'victory';
  el.innerHTML = '<style>#victory{position:fixed;inset:0;z-index:200;background:#07090d;color:#fff;font-family:system-ui,sans-serif;overflow:hidden;user-select:none}'
    + '#victory canvas{position:absolute;inset:0;width:100%;height:100%}'
    + '#victory .vh{position:absolute;left:0;right:0;top:max(10px,env(safe-area-inset-top));text-align:center;pointer-events:none}'
    + '#victory .vh h1{margin:0;font:900 clamp(26px,6vw,54px)/1.05 system-ui;letter-spacing:6px;color:#fff;text-shadow:0 2px 14px rgba(0,0,0,.8)}#victory .vh h1:after{content:"";display:block;width:84px;height:4px;background:#d93a3a;margin:10px auto 0}'
    + '#victory .vh p{margin:6px 0 0;font:700 clamp(12px,2.4vw,18px) system-ui;opacity:.85;letter-spacing:1px}'
    + '#victory .vn{position:absolute;transform:translate(-50%,0);font:800 clamp(11px,2vw,15px) system-ui;background:rgba(0,0,0,.55);padding:3px 9px;border-radius:0;white-space:nowrap;pointer-events:none;border:1px solid rgba(255,255,255,.25);border-left:3px solid #d93a3a;letter-spacing:1px}'
    + '#victory .vb{position:absolute;left:0;right:0;bottom:max(14px,env(safe-area-inset-bottom));display:flex;gap:12px;justify-content:center}'
    + '#victory button{font:800 13px system-ui;padding:13px 24px;border-radius:0;border:1px solid rgba(255,255,255,.22);border-left:4px solid #d93a3a;cursor:pointer;color:#fff;background:rgba(8,10,14,.82);letter-spacing:3px;text-transform:uppercase}#victory button:hover{background:rgba(40,16,16,.9)}'
    + '#victory button.c{background:#d93a3a;border-color:#d93a3a;border-left-color:#fff}'
    + '#victory .vc{position:absolute;left:0;right:0;bottom:max(2px,env(safe-area-inset-bottom));text-align:center;font:800 11px system-ui;letter-spacing:3px;opacity:.6;pointer-events:none}'
    + '#victory .vb{bottom:max(24px,calc(env(safe-area-inset-bottom) + 14px))!important}'
    + '#victory .vp{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(96vw,860px);max-height:78vh;overflow:auto;background:rgba(10,12,18,.94);border:1px solid rgba(255,255,255,.22);border-top:3px solid #d93a3a;border-radius:0;padding:10px;display:none}'
    + '#victory .vp.on{display:block}'
    + '#victory table{border-collapse:collapse;width:100%;font:600 clamp(11px,1.9vw,14px) system-ui}'
    + '#victory th{position:sticky;top:0;background:#14171e;color:#fff;text-align:left;padding:7px 6px;font-size:11px;letter-spacing:1px}'
    + '#victory td{padding:6px;border-top:1px solid rgba(255,255,255,.1);vertical-align:top}'
    + '#victory tr.w td{background:rgba(217,58,58,.14)}#victory small{opacity:.7;font-weight:500}#victory td b{color:#ff6a5a}#victory td i{opacity:.4}'
    + '@media (max-height:540px){#victory .vh h1{font-size:clamp(22px,5.2vh,34px);letter-spacing:4px}#victory .vh h1:after{width:60px;height:3px;margin:5px auto 0}#victory .vh p{margin:3px 0 0;font-size:12px}#victory button{padding:8px 16px;font-size:11px;letter-spacing:2px}#victory .vb{gap:8px;bottom:max(18px,calc(env(safe-area-inset-bottom) + 10px))!important}#victory .vc{font-size:9px;letter-spacing:2px}}'
    + '</style><div class="vh"><h1>' + (lost ? (title.toUpperCase() === 'YOU' ? 'YOU LOST' : esc(title.toUpperCase()) + ' LOST') : (title.toUpperCase() === 'YOU' ? 'YOU WIN!' : esc(title.toUpperCase()) + ' WINS!')) + '</h1><p>' + (lost ? 'DEFEAT \u2022 ' + (mt.k | 0) + ' KILLS' + (wt && wt.tm !== mt.tm ? ' \u2022 ' + esc(String(wt.n || 'TEAM').toUpperCase()) + ' WON' : '') : (wt.tm === myTm ? 'VICTORY • ' : '') + wt.k + ' KILLS') + '</p></div>'
    + '<div class="vp">' + statsTable(rows, wt.tm) + '</div>'
    + '<div class="vb"><button class="mm">MUTE MUSIC</button><button class="s">SHOW STATS</button><button class="sh">SHARE</button><button class="c">CONTINUE</button></div><div class="vc">CREDITS: HARIS GAMES</div>';
  document.body.appendChild(el);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false }); renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  el.insertBefore(renderer.domElement, el.firstChild);
  const scene = new THREE.Scene(); scene.background = new THREE.Color('#0a0d14'); scene.fog = new THREE.Fog('#0a0d14', 9, 26);
  const cam = new THREE.PerspectiveCamera(40, 1, 0.1, 80);
  scene.add(new THREE.HemisphereLight('#bcd0ff', '#2a2018', 1.1));
  const key = new THREE.SpotLight('#fff1c9', 90, 30, 0.7, 0.5, 1.2); key.position.set(2.5, 7, 5); key.target.position.set(0, 1, 0); scene.add(key, key.target);
  const rim = new THREE.PointLight('#ff5a3a', 25, 14); rim.position.set(-4, 2.5, -3); scene.add(rim);
  const rim2 = new THREE.PointLight('#3a8aff', 25, 14); rim2.position.set(4, 2.5, -3); scene.add(rim2);
  const stage = new THREE.Mesh(new THREE.CylinderGeometry(4.6, 4.8, 0.3, 56), new THREE.MeshStandardMaterial({ color: '#1a1f2a', roughness: 0.5, metalness: 0.4 })); stage.position.y = -0.16; scene.add(stage);
  const ring = new THREE.Mesh(new THREE.RingGeometry(4.2, 4.4, 64), new THREE.MeshBasicMaterial({ color: '#d93a3a', side: THREE.DoubleSide })); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.006; scene.add(ring);
  const lights = [];   // v359: the cartoon light bulbs round the stage are gone (real lamp models later)

  // the winners: a half circle facing the camera, every one a different dance
  const win = lost ? lshow : rows.filter((r) => r.tm === wt.tm), n = win.length, MOVES = lost ? SADS : DANCES, order = MOVES.map((_, i) => i).sort(() => Math.random() - 0.5);
  const actors = [], labels = [];
  win.forEach((r, i) => {
    const c = actorFor(r), u = n === 1 ? 0 : i / (n - 1) - 0.5, ang = u * Math.min(1.9, 0.55 * (n - 1) + 0.2), rad = 2.1;
    c.group.position.set(Math.sin(ang) * rad, 0, 1.2 - Math.cos(ang) * rad * 0.55); c.group.rotation.y = -ang * 0.8;
    scene.add(c.group); const nl = document.createElement('div'); nl.className = 'vn'; nl.style.color = TCOL[r.tm & 3]; nl.textContent = r.name + '  •  ' + r.k; el.appendChild(nl);
    actors.push({ c, dance: MOVES[order[i % MOVES.length]], t: 0, until: lost ? SAD_DUR[MOVES[order[i % MOVES.length]]] * (MOVES[order[i % MOVES.length]] === 'sad2' ? 0.6 : 1) : 0, stool: null }); labels.push(nl);
    if (lost) { const sl = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.2, 0.49, 18), new THREE.MeshStandardMaterial({ color: '#3a3f4c', roughness: 0.7 })); sl.position.set(c.group.position.x, 0.245, c.group.position.z - 0.02); scene.add(sl); actors[actors.length - 1].stool = sl; sl.visible = MOVES[order[i % MOVES.length]] === 'sad3'; }   // the one who sits in disbelief sits on a stool
  });
  if (lost) { key.color.set('#c9d8ff'); rim.color.set('#3a5a9a'); rim2.color.set('#2a3a6a'); }
  if (pre && preLost !== lost) { try { pre.pause(); } catch (e) { /* noop */ } pre = null; }
  const audio = pre || new Audio(av(lost ? LOSE : MUSIC)); pre = null; audio.loop = true; audio.volume = 0.8; audio.muted = A.isMusicMuted(); if (audio.paused) audio.play().catch(() => { /* needs a tap on some phones: the buttons start it */ });   // v411: keeps playing if it was started 5 s earlier

  const st = { el, scene, renderer, actors, audio, raf: 0, onResize: null };
  cur = st;
  /* v420: the 3D stage is fitted into the free band BETWEEN the title and the buttons (name tags sit under the feet, still above the buttons), so nothing overlaps on any screen */
  const fit = () => {
    const w = window.innerWidth, h = window.innerHeight; renderer.setSize(w, h); cam.aspect = w / h; const wide = w / h;
    const vh = el.querySelector('.vh'), vb = el.querySelector('.vb'), TAG = 30;
    const top = vh ? vh.getBoundingClientRect().bottom + 6 : 0, bot = (vb ? vb.getBoundingClientRect().top : h) - 6 - TAG, band = Math.max(80, bot - top);
    const tan = Math.tan(cam.fov * Math.PI / 360), need = 2.3 * h / (2 * tan * 0.94 * band), d = Math.max(wide < 0.8 ? 10 : wide < 1.3 ? 7.6 : 5.6, need);
    cam.position.set(0, 1.75, d); cam.lookAt(0, 1.05, 0);
    const cy = (top + bot) / 2; cam.setViewOffset(w, h, 0, h / 2 - cy, w, h);   /* moves the actors' middle to the middle of the free band */
    cam.updateProjectionMatrix(); st.tagMax = bot + TAG;
  };
  st.onResize = fit; window.addEventListener('resize', fit); fit();
  prepareVictory(lost);
  let last = performance.now(); const v = new THREE.Vector3();
  const loop = (now) => {
    if (cur !== st) return; st.raf = requestAnimationFrame(loop); const dt = Math.min(0.05, (now - last) / 1000); last = now;
    for (const a of actors) {
      if (lost) { a.t += dt; if (a.t >= a.until) { let nx = SADS[Math.floor(Math.random() * SADS.length)]; if (nx === a.dance && Math.random() < 0.7) nx = SADS[(SADS.indexOf(nx) + 1 + Math.floor(Math.random() * 3)) % 4]; a.dance = nx; a.until = a.t + SAD_DUR[nx] * (nx === 'sad2' ? 0.6 : 1 + Math.floor(Math.random() * 2)); if (a.stool) a.stool.visible = nx === 'sad3'; } }   // random sad move; the next one is picked when the clip has played
      a.c.update(dt, { grounded: true, speed: 0, vy: 0, dance: a.dance }); }
    lights.forEach((b, i) => { b.material.color.set(Math.floor(now / 350 + i) % 2 ? '#ffd23f' : '#ff4d4d'); });
    actors.forEach((a, i) => { v.set(a.c.group.position.x, 0, a.c.group.position.z).project(cam); const l = labels[i]; l.style.left = ((v.x + 1) / 2 * window.innerWidth) + 'px'; l.style.top = Math.min((1 - v.y) / 2 * window.innerHeight + 6, (st.tagMax || 1e9) - 24) + 'px'; });
    renderer.render(scene, cam);
  };
  st.raf = requestAnimationFrame(loop);

  const panel = el.querySelector('.vp'), sb = el.querySelector('.s');
  sb.onclick = () => { audio.play().catch(() => {}); panel.classList.toggle('on'); sb.textContent = panel.classList.contains('on') ? 'HIDE STATS' : 'SHOW STATS'; };
  const shb = el.querySelector('.sh'); if (lost) shb.style.display = 'none';
  shb.onclick = async () => {
    const url = location.origin + location.pathname, txt = title + ' won with ' + wt.k + ' kills in JANG by Haris Games! Play with me:';
    try { if (navigator.share) { await navigator.share({ title: 'JANG - Haris Games', text: txt, url }); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
    const full = txt + ' ' + url; let ok = false;
    try { await navigator.clipboard.writeText(full); ok = true; } catch (e) { const ta = document.createElement('textarea'); ta.value = full; ta.style.cssText = 'position:fixed;opacity:0'; document.body.appendChild(ta); ta.select(); try { ok = document.execCommand('copy'); } catch (e2) { /* noop */ } ta.remove(); }
    shb.textContent = ok ? 'LINK COPIED!' : url; setTimeout(() => { shb.textContent = 'SHARE'; }, 2500);
  };
  { const mb = el.querySelector('.mm'), upd = () => { mb.textContent = A.isMusicMuted() ? 'MUSIC: OFF' : 'MUTE MUSIC'; audio.muted = A.isMusicMuted(); }; mb.onclick = () => { A.setMusicMuted(!A.isMusicMuted()); upd(); audio.play().catch(() => { /* noop */ }); }; upd(); }
  el.querySelector('.c').onclick = () => { closeVictory(); A.blockMenuMusic(false); if (onDone) onDone(); try { A.startMusic(99); } catch (e) { /* noop */ } };
  el.addEventListener('pointerdown', () => { if (audio.paused) audio.play().catch(() => {}); }, { once: true });
  return st;
}

if (typeof window !== 'undefined') window.__phVictory = showVictory;
