// v338: the VICTORY PAGE at the end of a Jang match: "TEAM ... WINS", the winning team dances on a stage (every player a different Mixamo dance),
// the music plays, and a "SHOW STATS" button opens the table (kills sorted high to low, which weapons killed how many bots / players, what killed him).
import * as THREE from 'three';
import { makeHero, makeSkin, loadDance, preloadActors, HERO_GLB, JANG_GLB } from './glbactor.js';
import { av } from './assetver.js';

const DANCES = ['dance0', 'dance1', 'dance2', 'dance3', 'dance4'];
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

export function closeVictory() {
  if (!cur) return; const c = cur; cur = null;
  cancelAnimationFrame(c.raf); try { c.audio.pause(); } catch (e) { /* noop */ } window.removeEventListener('resize', c.onResize);
  c.actors.forEach((a) => { c.scene.remove(a.c.group); if (a.c.dispose) a.c.dispose(); });
  try { c.renderer.dispose(); c.renderer.forceContextLoss(); } catch (e) { /* noop */ }
  c.el.remove();
}

// m = { win: team index, teams: [{tm,k,d,n}], rows: [{name,tm,ch,sk,k,d,bots,ply,dby}] }; myTm = my team index (highlight); onDone = called when the page is closed
export function showVictory(m, myTm, onDone) {
  closeVictory();
  const teams = m.teams || [], wt = teams.find((t) => t.tm === m.win) || teams[0] || { n: 'TEAM', tm: 0, k: 0 };
  const rows = (m.rows || []).map((r) => ({ ...r, bots: r.bots || {}, ply: r.ply || {}, dby: r.dby || {}, me: false })).sort((a, b) => b.k - a.k || a.d - b.d);
  const el = document.createElement('div'); el.id = 'victory';
  el.innerHTML = '<style>#victory{position:fixed;inset:0;z-index:200;background:#07090d;color:#fff;font-family:system-ui,sans-serif;overflow:hidden;user-select:none}'
    + '#victory canvas{position:absolute;inset:0;width:100%;height:100%}'
    + '#victory .vh{position:absolute;left:0;right:0;top:max(10px,env(safe-area-inset-top));text-align:center;pointer-events:none}'
    + '#victory .vh h1{margin:0;font:900 clamp(26px,6vw,54px)/1.05 system-ui;letter-spacing:2px;color:#ffd23f;text-shadow:0 3px 0 #a15b00,0 0 26px rgba(255,190,40,.7)}'
    + '#victory .vh p{margin:6px 0 0;font:700 clamp(12px,2.4vw,18px) system-ui;opacity:.85;letter-spacing:1px}'
    + '#victory .vn{position:absolute;transform:translate(-50%,0);font:800 clamp(11px,2vw,15px) system-ui;background:rgba(0,0,0,.55);padding:3px 9px;border-radius:12px;white-space:nowrap;pointer-events:none;border:1px solid rgba(255,255,255,.25)}'
    + '#victory .vb{position:absolute;left:0;right:0;bottom:max(14px,env(safe-area-inset-bottom));display:flex;gap:12px;justify-content:center}'
    + '#victory button{font:800 15px system-ui;padding:12px 22px;border-radius:12px;border:0;cursor:pointer;color:#fff;background:#d93a3a;letter-spacing:1px}'
    + '#victory button.s{background:#2d6cdf}'
    + '#victory .vp{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:min(96vw,860px);max-height:78vh;overflow:auto;background:rgba(10,12,18,.94);border:1px solid #ffd23f;border-radius:14px;padding:10px;display:none}'
    + '#victory .vp.on{display:block}'
    + '#victory table{border-collapse:collapse;width:100%;font:600 clamp(11px,1.9vw,14px) system-ui}'
    + '#victory th{position:sticky;top:0;background:#1b2130;color:#ffd23f;text-align:left;padding:7px 6px;font-size:11px;letter-spacing:1px}'
    + '#victory td{padding:6px;border-top:1px solid rgba(255,255,255,.1);vertical-align:top}'
    + '#victory tr.w td{background:rgba(255,210,63,.08)}#victory small{opacity:.7;font-weight:500}#victory td b{color:#ffd23f}#victory td i{opacity:.4}'
    + '</style><div class="vh"><h1>' + esc(String(wt.n).toUpperCase()) + ' WINS!</h1><p>' + (wt.tm === myTm ? 'VICTORY • ' : '') + wt.k + ' KILLS</p></div>'
    + '<div class="vp">' + statsTable(rows, wt.tm) + '</div>'
    + '<div class="vb"><button class="s">SHOW STATS</button><button class="c">CONTINUE</button></div>';
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
  const ring = new THREE.Mesh(new THREE.RingGeometry(4.2, 4.4, 64), new THREE.MeshBasicMaterial({ color: '#ffd23f', side: THREE.DoubleSide })); ring.rotation.x = -Math.PI / 2; ring.position.y = 0.006; scene.add(ring);
  const lights = []; for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2, b = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 8), new THREE.MeshBasicMaterial({ color: i % 2 ? '#ffd23f' : '#ff4d4d' })); b.position.set(Math.cos(a) * 4.5, 0.02, Math.sin(a) * 4.5); scene.add(b); lights.push(b); }

  // the winners: a half circle facing the camera, every one a different dance
  const win = rows.filter((r) => r.tm === wt.tm), n = win.length, order = DANCES.map((_, i) => i).sort(() => Math.random() - 0.5);
  const actors = [], labels = [];
  win.forEach((r, i) => {
    const c = actorFor(r), u = n === 1 ? 0 : i / (n - 1) - 0.5, ang = u * Math.min(1.9, 0.55 * (n - 1) + 0.2), rad = 2.1;
    c.group.position.set(Math.sin(ang) * rad, 0, 1.2 - Math.cos(ang) * rad * 0.55); c.group.rotation.y = -ang * 0.8;
    scene.add(c.group); const nl = document.createElement('div'); nl.className = 'vn'; nl.style.color = TCOL[r.tm & 3]; nl.textContent = r.name + '  •  ' + r.k; el.appendChild(nl);
    actors.push({ c, dance: DANCES[order[i % DANCES.length]], t: 0 }); labels.push(nl);
  });
  const audio = new Audio(av(MUSIC)); audio.loop = true; audio.volume = 0.8; audio.play().catch(() => { /* needs a tap on some phones: the buttons start it */ });

  const st = { el, scene, renderer, actors, audio, raf: 0, onResize: null };
  cur = st;
  const fit = () => { const w = window.innerWidth, h = window.innerHeight; renderer.setSize(w, h); cam.aspect = w / h; const wide = w / h; cam.position.set(0, 1.75, wide < 0.8 ? 10 : wide < 1.3 ? 7.6 : 5.6); cam.lookAt(0, 1.05, 0); cam.updateProjectionMatrix(); };
  st.onResize = fit; window.addEventListener('resize', fit); fit();
  Promise.all([loadDance(), preloadActors([...HERO_GLB, ...JANG_GLB])]).catch(() => {});
  let last = performance.now(); const v = new THREE.Vector3();
  const loop = (now) => {
    if (cur !== st) return; st.raf = requestAnimationFrame(loop); const dt = Math.min(0.05, (now - last) / 1000); last = now;
    for (const a of actors) { a.c.update(dt, { grounded: true, speed: 0, vy: 0, dance: a.dance }); }
    lights.forEach((b, i) => { b.material.color.set(Math.floor(now / 350 + i) % 2 ? '#ffd23f' : '#ff4d4d'); });
    actors.forEach((a, i) => { v.set(a.c.group.position.x, 0, a.c.group.position.z).project(cam); const l = labels[i]; l.style.left = ((v.x + 1) / 2 * window.innerWidth) + 'px'; l.style.top = ((1 - v.y) / 2 * window.innerHeight + 6) + 'px'; });
    renderer.render(scene, cam);
  };
  st.raf = requestAnimationFrame(loop);

  const panel = el.querySelector('.vp'), sb = el.querySelector('.s');
  sb.onclick = () => { audio.play().catch(() => {}); panel.classList.toggle('on'); sb.textContent = panel.classList.contains('on') ? 'HIDE STATS' : 'SHOW STATS'; };
  el.querySelector('.c').onclick = () => { closeVictory(); if (onDone) onDone(); };
  el.addEventListener('pointerdown', () => { if (audio.paused) audio.play().catch(() => {}); }, { once: true });
  return st;
}

if (typeof window !== 'undefined') window.__phVictory = showVictory;
