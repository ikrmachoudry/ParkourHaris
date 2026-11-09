// v473: "Download Jang" - on Android every model, sound and animation is downloaded ONCE into the phone's own storage (the same cache the service worker reads),
// so later starts load from the phone instead of the network.
const CACHE = 'ph-assets-1', KEY = 'ph_pack';
const AVN = () => (typeof window !== 'undefined' && window.__AV) || '0';
export const packSupported = () => typeof caches !== 'undefined' && typeof fetch === 'function';
export const packDone = () => { try { return localStorage.getItem(KEY) === AVN(); } catch (e) { return false; } };
export async function packInfo() { const r = await fetch('/api/pack', { cache: 'no-store' }); if (!r.ok) throw new Error('list'); return r.json(); }
export async function downloadPack(info, onProgress) {
  const c = await caches.open(CACHE); const total = info.bytes || 1; let got = 0, failed = 0, i = 0;
  const one = async (f) => {
    const req = new Request(f.u);
    if (await c.match(req)) { got += f.s; return; }
    for (let t = 0; t < 3; t++) { try { const res = await fetch(req); if (res.ok && res.status === 200) { await c.put(req, res.clone()); got += f.s; return; } } catch (e) { /* retry */ } await new Promise((r) => setTimeout(r, 800 * (t + 1))); }
    failed++;
  };
  const worker = async () => { while (i < info.files.length) { const f = info.files[i++]; await one(f); onProgress && onProgress(Math.min(1, got / total), failed); } };
  await Promise.all([worker(), worker(), worker(), worker()]);
  if (failed) throw new Error(failed + ' files failed');
  try { const keep = new Set(info.files.map((f) => new URL(f.u, location.href).href)); for (const k of await c.keys()) { if (/\/(models-lite|audio|anim)\//.test(k.url) && !keep.has(k.url)) c.delete(k); } } catch (e) { /* old files stay: harmless */ }
  try { localStorage.setItem(KEY, info.v); } catch (e) { /* no storage */ }
  try { if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => {}); } catch (e) { /* ok */ }
}
// v474: after an update, a phone that already downloaded Jang quietly fetches ONLY the changed files in the background (no screen, no full re-download)
export async function packQuietUpdate() { try { if (!packSupported() || !packHas() || packDone()) return; await downloadPack(await packInfo(), null); } catch (e) { /* next start retries */ } }
export const packHas = () => { try { return !!localStorage.getItem(KEY); } catch (e) { return false; } };
