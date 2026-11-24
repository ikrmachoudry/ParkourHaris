// v473: "Download Jang" - on Android every model, sound and animation is downloaded ONCE into the phone's own storage (the same cache the service worker reads),
// so later starts load from the phone instead of the network.
// v623: TIERED: the models + pictures (needed to play) come first ("core"), the sounds + animations after. The player can start once the core is in; the rest
// finishes quietly from the menu (never during a match). Missing files are simply fetched from the network by the service worker, so a half-finished pack is safe.
// v623: navigator.storage.persist() so the phone does not throw the pack away when it is short of space.
const CACHE = 'ph-assets-1', KEY = 'ph_pack', CORE = 'ph_pack_core';
const AVN = () => (typeof window !== 'undefined' && window.__AV) || '0';
const isCore = (f) => /^(models-lite|models|img)\//.test(f.u);
export const packSupported = () => typeof caches !== 'undefined' && typeof fetch === 'function';
export const packDone = () => { try { return localStorage.getItem(KEY) === AVN(); } catch (e) { return false; } };
export const packCoreDone = () => { try { return localStorage.getItem(CORE) === AVN() || packDone(); } catch (e) { return false; } };
export const packHas = () => { try { return !!(localStorage.getItem(KEY) || localStorage.getItem(CORE)); } catch (e) { return false; } };
export async function packInfo() { const r = await fetch('/api/pack?lite=' + (/Android/i.test(navigator.userAgent || '') ? 1 : 0), { cache: 'no-store' }); if (!r.ok) throw new Error('list'); const info = await r.json(); info.files.sort((a, b) => (isCore(b) ? 1 : 0) - (isCore(a) ? 1 : 0)); info.coreBytes = info.files.reduce((s, f) => s + (isCore(f) ? f.s : 0), 0); return info; }
export async function askPersist() { try { if (navigator.storage && navigator.storage.persist && !(await navigator.storage.persisted())) await navigator.storage.persist(); } catch (e) { /* the browser said no: harmless */ } }
// opts.pause: function, true = wait (a match is running); opts.coreOnly: stop after the models + pictures (marks the core as done); opts.workers: parallel downloads (4 on the download screen, 2 in the background)
export async function downloadPack(info, onProgress, opts) {
  const o = opts || {}, coreOnly = !!o.coreOnly, files = coreOnly ? info.files.filter(isCore) : info.files;
  askPersist();
  const c = await caches.open(CACHE); const total = (coreOnly ? info.coreBytes : info.bytes) || 1; let got = 0, failed = 0, i = 0;
  const one = async (f) => {
    const req = new Request(f.u);
    if (await c.match(req)) { got += f.s; return; }
    for (let t = 0; t < 3; t++) { try { const res = await fetch(req); if (res.ok && res.status === 200) { await c.put(req, res.clone()); got += f.s; return; } } catch (e) { /* retry */ } await new Promise((r) => setTimeout(r, 800 * (t + 1))); }
    failed++;
  };
  const worker = async () => { while (i < files.length) { if (o.pause) while (o.pause()) await new Promise((r) => setTimeout(r, 3000)); const f = files[i++]; await one(f); onProgress && onProgress(Math.min(1, got / total), failed); } };
  const n = Math.max(1, Math.min(6, o.workers || 4)), ws = []; for (let k = 0; k < n; k++) ws.push(worker()); await Promise.all(ws);
  if (failed) throw new Error(failed + ' files failed');
  if (coreOnly) { try { localStorage.setItem(CORE, info.v); } catch (e) { /* no storage */ } }
  else {
    try { const keep = new Set(info.files.map((f) => new URL(f.u, location.href).href)); for (const k of await c.keys()) { if (/\/(models-lite|models|audio|anim|img)\//.test(k.url) && !keep.has(k.url)) c.delete(k); } } catch (e) { /* old files stay: harmless */ }
    try { localStorage.setItem(KEY, info.v); localStorage.setItem(CORE, info.v); } catch (e) { /* no storage */ }
  }
  try { if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {}); } catch (e) { /* ok */ }
}
// v474: after an update (or after a core-only download), a phone that already started the pack quietly fetches ONLY the missing files in the background (no screen, no full re-download).
// v623: 2 parallel downloads only, and skipped while a match is running (busy() true): a background download must never cost a frame in a match.
let quietBusy = false;
export async function packQuietUpdate(busy) { try { if (quietBusy || !packSupported() || !packHas() || packDone()) return; if (busy && busy()) return; quietBusy = true; await downloadPack(await packInfo(), null, { workers: 2, pause: busy }); } catch (e) { /* next start retries */ } quietBusy = false; }
