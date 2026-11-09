// v471: Android service worker: versioned big files (?v=...) are answered from the phone's own cache after the first visit. Pages, the server API and anything without a version go to the network as before.
const CACHE = 'ph-assets-1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (e) => {
  const r = e.request; if (r.method !== 'GET' || r.headers.has('range')) return;
  const u = new URL(r.url); if (u.origin !== location.origin) return;
  if (/^\/img\//.test(u.pathname) && !u.search) { e.respondWith(caches.open(CACHE).then(async (c) => { const hit = await c.match(r); const net = fetch(r).then((res) => { if (res && res.ok && res.status === 200) c.put(r, res.clone()).catch(() => {}); return res; }).catch(() => null); return hit || (await net) || Response.error(); })); return; }   // v476: pictures: shown from the phone at once, refreshed quietly
  if (!/[?&]v=/.test(u.search)) return;
  if (!/^\/(models-lite|models|audio|anim|img)\//.test(u.pathname) && !/^\/(game\.js|style\.css)$/.test(u.pathname)) return;
  e.respondWith(caches.open(CACHE).then(async (c) => { const hit = await c.match(r); if (hit) return hit; const res = await fetch(r); if (res && res.ok && res.status === 200) { c.put(r, res.clone()).catch(() => {}); c.keys().then((ks) => { if (ks.length > 500) ks.slice(0, 120).forEach((k) => c.delete(k)); }); } return res; }));
});
