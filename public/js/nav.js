// ROUTE FINDER for the big map: tap a point on the map and the game draws a blue line along the REAL roads from where you are to that point.
// The road graph is built once from gtaRoads() (the same road pieces the cars drive on): every piece is cut where it crosses or touches another one, and Dijkstra finds the shortest way.
import { gtaRoads } from './gta.js';

let G = null;
function build() {
  const R = gtaRoads(), S = R.segs.map((s) => ({ ax: s.ax, az: s.az, bx: s.bx, bz: s.bz })), nodes = [], adj = [], cell = new Map(), CS = 4;
  const nodeAt = (x, z) => {
    const cx = Math.floor(x / CS), cz = Math.floor(z / CS);
    for (let i = cx - 1; i <= cx + 1; i++) for (let j = cz - 1; j <= cz + 1; j++) { const a = cell.get(i + ',' + j); if (a) for (const k of a) if (Math.hypot(nodes[k].x - x, nodes[k].z - z) < 0.3) return k; }
    const k = nodes.length; nodes.push({ x, z }); adj.push([]); const key = cx + ',' + cz; (cell.get(key) || cell.set(key, []).get(key)).push(k); return k;
  };
  const edges = [];
  for (let i = 0; i < S.length; i++) {
    const a = S[i], dx = a.bx - a.ax, dz = a.bz - a.az, L2 = dx * dx + dz * dz; if (L2 < 1e-6) continue;
    const ts = [0, 1];
    for (let j = 0; j < S.length; j++) {
      if (j === i) continue; const b = S[j], ex = b.bx - b.ax, ez = b.bz - b.az, den = dx * ez - dz * ex;
      if (Math.abs(den) > 1e-9) { const t = ((b.ax - a.ax) * ez - (b.az - a.az) * ex) / den, u = ((b.ax - a.ax) * dz - (b.az - a.az) * dx) / den; if (t > 0 && t < 1 && u >= 0 && u <= 1) ts.push(t); }
      for (const [px, pz] of [[b.ax, b.az], [b.bx, b.bz]]) { const t = ((px - a.ax) * dx + (pz - a.az) * dz) / L2; if (t > 0 && t < 1 && Math.hypot(a.ax + dx * t - px, a.az + dz * t - pz) < 5) ts.push(t); }   // a road that ends on this one joins it
    }
    ts.sort((p, q) => p - q); let prev = -1;
    for (const t of ts) { const k = nodeAt(a.ax + dx * t, a.az + dz * t); if (prev >= 0 && prev !== k) edges.push([prev, k, i]); prev = k; }
  }
  for (const [p, q, seg] of edges) { const d = Math.hypot(nodes[p].x - nodes[q].x, nodes[p].z - nodes[q].z); adj[p].push({ to: q, d }); adj[q].push({ to: p, d }); }
  for (let i = 0; i < nodes.length; i++) for (let j = i + 1; j < nodes.length; j++) { const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].z - nodes[j].z); if (d < 3) { adj[i].push({ to: j, d }); adj[j].push({ to: i, d }); } }   /* roads that end a metre or two apart still join */
  G = { nodes, adj, edges };
}
// nearest point on any road piece: { x, z, d, e (edge index) }
function snap(x, z) {
  let best = null;
  G.edges.forEach(([p, q], e) => { const a = G.nodes[p], b = G.nodes[q], dx = b.x - a.x, dz = b.z - a.z, L2 = dx * dx + dz * dz || 1, t = Math.max(0, Math.min(1, ((x - a.x) * dx + (z - a.z) * dz) / L2)), px = a.x + dx * t, pz = a.z + dz * t, d = Math.hypot(x - px, z - pz); if (!best || d < best.d) best = { x: px, z: pz, d, e }; });
  return best;
}
// the way from (x0, z0) to (x1, z1) along the roads: a list of [x, z] points, or null when there is no road link
export function findRoute(x0, z0, x1, z1) {
  if (!G) build();
  const s = snap(x0, z0), t = snap(x1, z1); if (!s || !t) return null;
  const N = G.nodes.length, S = N, T = N + 1, dist = new Float64Array(N + 2).fill(1e18), prev = new Int32Array(N + 2).fill(-1), done = new Uint8Array(N + 2);
  const extra = [[], []];   // the two virtual nodes sit on their road piece and join its two ends
  for (const [vi, sp] of [[0, s], [1, t]]) { const [p, q] = G.edges[sp.e]; for (const n of [p, q]) extra[vi].push({ to: n, d: Math.hypot(G.nodes[n].x - sp.x, G.nodes[n].z - sp.z) }); }
  const nb = (u) => { if (u === S) return extra[0]; if (u === T) return extra[1]; const l = G.adj[u]; const [p, q] = G.edges[s.e], [p2, q2] = G.edges[t.e]; let r = l; if (u === p || u === q) r = r.concat([{ to: S, d: Math.hypot(G.nodes[u].x - s.x, G.nodes[u].z - s.z) }]); if (u === p2 || u === q2) r = r.concat([{ to: T, d: Math.hypot(G.nodes[u].x - t.x, G.nodes[u].z - t.z) }]); return r; };
  if (s.e === t.e) { const pts = [[x0, z0], [s.x, s.z], [t.x, t.z], [x1, z1]]; return pts; }
  dist[S] = 0; const heap = [[0, S]];
  const push = (it) => { heap.push(it); let i = heap.length - 1; while (i > 0) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { let l = i * 2 + 1, r = l + 1, m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
  while (heap.length) { const [d, u] = pop(); if (done[u]) continue; done[u] = 1; if (u === T) break; for (const e of nb(u)) { const nd = d + e.d; if (nd < dist[e.to]) { dist[e.to] = nd; prev[e.to] = u; push([nd, e.to]); } } }
  if (!done[T]) return null;
  const path = []; for (let u = T; u >= 0; u = prev[u]) path.push(u === S ? [s.x, s.z] : u === T ? [t.x, t.z] : [G.nodes[u].x, G.nodes[u].z]); path.reverse();
  return [[x0, z0], ...path, [x1, z1]];
}
export const roadDistance = (x, z) => { if (!G) build(); const s = snap(x, z); return s ? s.d : 1e9; };
