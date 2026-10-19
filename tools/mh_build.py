#!/usr/bin/env python3
"""Builds public/models/<name>.glb : a MakeHuman (CC0 data) male, skinned to the game's 17-bone humanoid skeleton,
dressed with vertex colours (hoodie, jeans, sneakers, hair, beard), decimated for phones.  Usage: python3 tools/mh_build.py out.glb [tris] [variant]
Data: https://github.com/makehumancommunity/makehuman (CC0).  The GLB is played by public/js/glbactor.js with the game's own animations."""
import sys, os, json, struct, numpy as np
sys.path.insert(0, os.path.dirname(__file__))
import mh_core as mh

OUT = sys.argv[1] if len(sys.argv) > 1 else 'hero.glb'
TRIS = int(sys.argv[2]) if len(sys.argv) > 2 else 9000
VAR = int(sys.argv[3]) if len(sys.argv) > 3 else 3     # character slot 0..3 (Haris, Hannan, Hanbal, Dawood): colours match HERO_LOOKS in actor.js
hx = lambda h: tuple(int(h[i:i + 2], 16) / 255 for i in (1, 3, 5))
LOOKS = [dict(shirt='#b53a2e', pants='#2b3140', skin='#c68e63', hair='#16110d', cap='#ff5fb4', beard=False, weight=0.50),
         dict(shirt='#2f7a5a', pants='#3a3a44', skin='#8d5a3b', hair='#0d0a08', cap='#3b82f6', beard=False, weight=0.55),
         dict(shirt='#d9a52b', pants='#27384f', skin='#e0ac85', hair='#4a3020', cap='#3ddc84', beard=False, weight=0.45),
         dict(shirt='#5b4aa8', pants='#22252b', skin='#a8714e', hair='#120d0a', cap='#ffc233', beard=True, weight=0.50)]
L_ = LOOKS[VAR]
SK = dict(shirt=hx(L_['shirt']), pants=hx(L_['pants']), shoes=(0.08, 0.08, 0.08), hair=hx(L_['hair']), cap=hx(L_['cap']), beard=L_['beard'], skin=hx(L_['skin']))

def srgb2lin(c): c = np.array(c, float); return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)

# ---------- body ----------
V, F, G = mh.load_obj()
V = mh.macro(V, gender=1.0, age=0.52, muscle=0.62, weight=L_['weight'], african=.12, asian=.28, caucasian=.60)
body = [f for f, g in zip(F, G) if g == 'body']
tris = []
for f in body:
    for i in range(1, len(f) - 1): tris.append([f[0], f[i], f[i + 1]])
tris = np.array(tris)
skel = json.load(open(mh.D + '/rigs/default.mhskel')); J = skel['joints']; B = skel['bones']
jp = lambda n: V[J[n]].mean(0)
bpos = lambda b, end: jp(B[b][end])

# ---------- 17-bone driver skeleton on MakeHuman joints ----------
S = {}   # name -> (parent, world pos)
def P(n, par, p): S[n] = (par, np.array(p, float))
P('hips', None, bpos('spine05', 'head')); P('spine', 'hips', bpos('spine04', 'head')); P('chest', 'spine', bpos('spine02', 'head'))
P('neck', 'chest', bpos('neck01', 'head')); P('head', 'neck', bpos('neck03', 'head'))
top = V[:, 1][np.array(sorted(set(tris.flatten())))].max(); hp = bpos('neck03', 'head')
P('headtop', 'head', [hp[0], top, hp[2] + 0.2])
for s in 'LR':
    P('upperarm.' + s, 'chest', bpos('upperarm01.' + s, 'head')); P('forearm.' + s, 'upperarm.' + s, bpos('lowerarm01.' + s, 'head'))
    P('hand.' + s, 'forearm.' + s, bpos('wrist.' + s, 'head')); P('middle.' + s, 'hand.' + s, bpos('finger3-3.' + s, 'tail'))
    P('upperleg.' + s, 'hips', bpos('upperleg01.' + s, 'head')); P('lowerleg.' + s, 'upperleg.' + s, bpos('lowerleg01.' + s, 'head'))
    P('foot.' + s, 'lowerleg.' + s, bpos('foot.' + s, 'head'))
    P('toe.' + s, 'foot.' + s, bpos('toe3-3.' + s, 'tail'))
names = list(S.keys()); NI = {n: i for i, n in enumerate(names)}
def drv(b):
    s = b[-2:] if b[-2:] in ('.L', '.R') else ''
    base = b[:-2] if s else b
    if base in ('root', 'spine05', 'pelvis'): return 'hips'
    if base in ('spine04', 'spine03'): return 'spine'
    if base in ('spine02', 'spine01', 'breast', 'clavicle'): return 'chest'
    if base.startswith('neck'): return 'neck'
    if base.startswith('shoulder'): return 'upperarm' + s
    if base.startswith('upperarm'): return 'upperarm' + s
    if base.startswith('lowerarm'): return 'forearm' + s
    if base.startswith(('wrist', 'finger', 'metacarpal')): return 'hand' + s
    if base.startswith('upperleg'): return 'upperleg' + s
    if base.startswith('lowerleg'): return 'lowerleg' + s
    if base.startswith(('foot',)): return 'foot' + s
    if base.startswith('toe'): return 'foot' + s
    return 'head'   # head, jaw, eyes, face muscles, tongue
W = json.load(open(mh.D + '/rigs/default_weights.mhw'))['weights']
wt = np.zeros((len(V), len(names)))
for b, lst in W.items():
    d = drv(b)
    for i, w in lst: wt[i, NI[d]] += w

# ---------- fists: curl the finger vertices around the MakeHuman finger joints (weights straight from the rig) ----------
def rot(v, o, ax, ang):
    k = ax / np.linalg.norm(ax); d = v - o; c, s_ = np.cos(ang), np.sin(ang)
    return o + d * c + np.cross(k, d) * s_ + np.outer(d @ k, k) * (1 - c)
Vf = V.copy()
# relaxed open hand (fingers softly curled), like a person jogging - not a fist
CURL = {2: (0.30, 0.38, 0.30), 3: (0.34, 0.42, 0.32), 4: (0.40, 0.48, 0.36), 5: (0.46, 0.54, 0.40), 1: (0.75, 0.5, 0.3)}
for sd in 'LR':
    nrm_ = np.array([-1.0, 0, 0]) if sd == 'L' else np.array([1.0, 0, 0])
    for n in range(1, 6):
        js = [bpos(f'finger{n}-{k}.{sd}', 'head') for k in (1, 2, 3)]
        d = bpos(f'finger{n}-3.{sd}', 'tail') - js[0]; d /= np.linalg.norm(d)
        nn = nrm_ - d * (d @ nrm_); ax = np.cross(d, nn)
        if n == 1:   # thumb: fold toward the palm / index finger root instead of across the palm
            tv = bpos(f'finger3-1.{sd}', 'head') - js[0]; tv = tv - d * (d @ tv); ax = np.cross(d, tv)
        ws = [np.zeros(len(V)) for _ in range(3)]
        for k in range(3):
            for i, w in W.get(f'finger{n}-{k + 1}.{sd}', []): ws[k][i] += w
        tot = sum(ws); idx_ = np.nonzero(tot > 1e-6)[0]
        if not len(idx_): continue
        p0 = V[idx_]; acc = np.zeros_like(p0)
        T1 = lambda p: rot(p, js[0], ax, CURL[n][0]); T2 = lambda p: T1(rot(p, js[1], ax, CURL[n][1])); T3 = lambda p: T1(rot(p, js[1], ax, CURL[n][1])) if False else T1(rot(rot(p, js[2], ax, CURL[n][2]), js[1], ax, CURL[n][1]))
        acc = ws[0][idx_, None] * T1(p0) + ws[1][idx_, None] * T2(p0) + ws[2][idx_, None] * T3(p0) + (1 - tot[idx_, None]) * p0
        Vf[idx_] = acc
V = Vf
# ---------- eyes (little skinned spheres) ----------
def sphere(c, r, nu=10, nv=7):
    pts = []; tr = []
    for j in range(nv + 1):
        th = np.pi * j / nv
        for i in range(nu): ph = 2 * np.pi * i / nu; pts.append([np.sin(th) * np.sin(ph), np.cos(th), np.sin(th) * np.cos(ph)])
    for j in range(nv):
        for i in range(nu):
            a = j * nu + i; b = j * nu + (i + 1) % nu; c2 = (j + 1) * nu + i; d = (j + 1) * nu + (i + 1) % nu
            tr += [[a, c2, b], [b, c2, d]]
    p = np.array(pts); return np.array(c) + p * r, np.array(tr), p
# ---------- clothes: inflate + colours ----------
used = np.array(sorted(set(tris.flatten()))); remap = -np.ones(len(V), int); remap[used] = np.arange(len(used))
P0 = V[used].copy(); T0 = remap[tris]; W0 = wt[used]
sw = W0.sum(1, keepdims=True); W0 = np.where(sw > 1e-6, W0 / np.maximum(sw, 1e-6), np.eye(len(names))[NI['hips']])
def wsum(*ks): return sum(W0[:, NI[k]] for k in ks)
y, x, z = P0[:, 1], P0[:, 0], P0[:, 2]
ax = np.abs(x)
hipsY = S['hips'][1][1]
legs = wsum('upperleg.L', 'upperleg.R', 'lowerleg.L', 'lowerleg.R'); foot = wsum('foot.L', 'foot.R'); hand = wsum('hand.L', 'hand.R')
arms = wsum('upperarm.L', 'upperarm.R', 'forearm.L', 'forearm.R'); neckw = wsum('neck'); headw = wsum('head')
tors = wsum('hips', 'spine', 'chest')
hem = hipsY + 0.35
# skin tone variation (cheap shading detail)
rng = np.random.default_rng(3)
col = np.tile(srgb2lin(SK['skin']), (len(P0), 1))
sm = np.clip((ax - 0.55) / 0.5, 0, 1); sm = sm * sm * (3 - 2 * sm)
collar = 6.3 + 0.9 * sm - np.where(z > 0.1, 0.35 * (1 - sm), 0.0)
N = 99.0
isShirt = ((tors + arms) > 0.55) & ((neckw + headw) < 0.5) & (hand < 0.5) & ((y > hem) | (arms > 0.5)) & ((y < collar) | (arms > 0.5))
isPants = ((tors > 0.5) & (y <= hem)) | ((legs > 0.5) & (foot < 0.5)) | ((legs > 0.2) & (y > -7.0) & (foot < 0.3))
isShoe = (foot > 0.35) | ((legs > 0.3) & (y < -7.3))
col[isShirt] = srgb2lin(SK['shirt']); col[isPants] = srgb2lin(SK['pants']); col[isShoe] = srgb2lin(SK['shoes'])
col[isShoe & (y < y.min() + 0.2)] = srgb2lin((0.8, 0.8, 0.76))   # white sole
# hair cap
hz = S['head'][1][2]
hair = (headw > 0.5) & (y > top - 1.15 - 0.55 * np.clip(z - hz - 0.9, 0, 9)) & ((z < hz + 1.5) | (y > top - 0.55))
hair |= (headw > 0.5) & (y > S['head'][1][1] + 0.25) & (z < hz - 0.3)             # back and sides of head
hair &= ~((z > hz + 1.1) & (y < top - 0.7))
col[hair] = srgb2lin(SK['hair'])
cap = (headw > 0.5) & (y > top - 0.95) & ~((z > hz + 1.3) & (y < top - 0.5))
col[cap] = srgb2lin(SK['cap']); hair |= cap
# beard / moustache / eyebrows
jaw = jp(B['jaw']['head']); eyeL = jp(B['eye.L']['head'])
if SK['beard']:
    beard = (headw > 0.4) & (y < eyeL[1] - 0.55) & (y > jaw[1] - 0.45) & (z > hz + 0.3) & ~hair
    beard &= (np.abs(x) > 0.35) | (y > jaw[1] + 0.12)
    col[beard] = col[beard] * 0.35 + srgb2lin((0.04, 0.03, 0.03)) * 0.65
brow = (headw > 0.5) & (np.abs(y - (eyeL[1] + 0.33)) < 0.1) & (np.abs(ax - eyeL[0]) < 0.42) & (z > eyeL[2] - 0.2) & ~hair
col[brow] = srgb2lin((0.03, 0.025, 0.02))
# mouth tint
mouth = (headw > 0.5) & (np.abs(y - (jaw[1] + 0.52)) < 0.045) & (ax < 0.55) & (z > hz + 1.0)
col[mouth] = col[mouth] * 0.6 + srgb2lin((0.45, 0.2, 0.17)) * 0.4
# volume for clothes and hair (decimetres)
nrm = np.zeros_like(P0)
fn = np.cross(P0[T0[:, 1]] - P0[T0[:, 0]], P0[T0[:, 2]] - P0[T0[:, 0]])
for k in range(3): np.add.at(nrm, T0[:, k], fn)
nrm /= np.maximum(np.linalg.norm(nrm, axis=1, keepdims=True), 1e-9)
infl = np.zeros(len(P0)); m_ = isShirt & (tors > 0.5); infl[m_] = (0.22 + 0.1 * np.clip((hem + 1.2 - y) / 1.2, 0, 1))[m_]; infl[isShirt & (arms > 0.5)] = 0.14; infl[isPants] = 0.10
infl[isShoe] = 0.22; infl[hair] = 0.14; infl[cap] = 0.24
# soften at borders
for _ in range(5):
    acc = np.zeros(len(P0)); cnt = np.zeros(len(P0))
    for k in range(3):
        a, b = T0[:, k], T0[:, (k + 1) % 3]
        np.add.at(acc, a, infl[b]); np.add.at(cnt, a, 1); np.add.at(acc, b, infl[a]); np.add.at(cnt, b, 1)
    infl = 0.5 * infl + 0.5 * acc / np.maximum(cnt, 1)
P0 = P0 + nrm * infl[:, None]
# loose clothing hides the body's chest / glute bumps: relax the cloth surface (Laplacian) so a hoodie and jeans look baggy, not skin-tight
def relax(mask, it, k):
    m = mask.copy(); nb_ = [[] for _ in range(len(P0))]
    for tr_ in T0:
        for q in range(3): nb_[tr_[q]] += [tr_[(q + 1) % 3], tr_[(q + 2) % 3]]
    ids = np.nonzero(m)[0]
    for _ in range(it):
        newp = P0.copy()
        for i in ids: newp[i] = (1 - k) * P0[i] + k * P0[nb_[i]].mean(0)
        P0[:] = newp
relax(isShirt & (arms < 0.5) & (y < 6.0), 10, 0.6)
relax(isPants & (y > -1.0), 8, 0.5)

# ---------- eyes ----------
ep, et, en = [], [], []
for s in 'LR':
    c = jp(B['eye.' + s]['head']) + np.array([0, 0, 0.02]); p, t, nn = sphere(c, 0.13)
    cc = np.tile(srgb2lin((0.9, 0.88, 0.85)), (len(p), 1)); iris = nn[:, 2] > 0.78; cc[iris] = srgb2lin((0.12, 0.07, 0.04)); cc[nn[:, 2] > 0.95] = srgb2lin((0.01, 0.01, 0.01))
    ep.append((p, t, cc))
zf = z[cap].max(); yb = y[cap & (z > zf - 0.5)].min() + 0.15
pts = [[0, yb, zf - 0.2]]; ang = np.linspace(-1.25, 1.25, 11)
for t_ in ang: pts.append([1.15 * np.sin(t_), yb - 0.1 * np.cos(t_), zf - 0.2 + 1.2 * np.cos(t_)])
pts = np.array(pts); tr_ = []
for i in range(1, len(pts) - 1): tr_ += [[0, i, i + 1], [0, i + 1, i]]
ep.append((pts, np.array(tr_), np.tile(srgb2lin(SK['cap']) * 0.9, (len(pts), 1))))
allP = [P0]; allT = [T0]; allC = [col]; allW = [W0]
for p, t, cc in ep:
    allT.append(t + sum(len(a) for a in allP)); allP.append(p); allC.append(cc)
    w = np.zeros((len(p), len(names))); w[:, NI['head']] = 1; allW.append(w)
P1 = np.vstack(allP); T1 = np.vstack(allT); C1 = np.vstack(allC); W1 = np.vstack(allW)

# ---------- normalise: metres, feet on floor, centred ----------
ymin = P1[:, 1].min(); cx = 0.0; sc = 0.1
P1 = (P1 - np.array([cx, ymin, 0])) * sc
for n in S: S[n] = (S[n][0], (S[n][1] - np.array([cx, ymin, 0])) * sc)
# eyes are tiny: keep them from being decimated by splitting simplification (body only), then append eyes
nb = len(P0)
# ---------- decimate body with meshoptimizer ----------
import meshoptimizer as mo
idx = T1[:len(T0)].astype(np.uint32).flatten()
Pb = np.ascontiguousarray(P1[:nb].astype(np.float32))
target = int(TRIS * 3)
newidx = np.zeros(len(idx), dtype=np.uint32)
import ctypes as ct
from meshoptimizer import simplifier as _S
_S.lib.meshopt_simplifyWithAttributes.argtypes = [ct.c_void_p, ct.c_void_p, ct.c_size_t, ct.c_void_p, ct.c_size_t, ct.c_size_t, ct.c_void_p, ct.c_size_t, ct.c_void_p, ct.c_size_t, ct.c_void_p, ct.c_size_t, ct.c_float, ct.c_uint, ct.c_void_p]
_S.lib.meshopt_simplifyWithAttributes.restype = ct.c_size_t
# colours (clothing borders) and skin weights steer which edges collapse, so hems and joints stay clean
attr = np.ascontiguousarray(np.hstack([C1[:nb] * 4.0, W1[:nb] * 1.0]).astype(np.float32))
aw = np.ones(attr.shape[1], np.float32)
cnt = _S.lib.meshopt_simplifyWithAttributes(newidx.ctypes.data, idx.ctypes.data, len(idx), Pb.ctypes.data, nb, 12, attr.ctypes.data, attr.shape[1] * 4, aw.ctypes.data, attr.shape[1], None, target, 1.0, 0, None)
newidx = newidx[:cnt]
newidx = newidx.reshape(-1, 3)
keep = np.array(sorted(set(newidx.flatten()))); rm = -np.ones(nb, int); rm[keep] = np.arange(len(keep))
bodyP = P1[:nb][keep]; bodyT = rm[newidx]; bodyC = C1[:nb][keep]; bodyW = W1[:nb][keep]
ne = len(P1) - nb
Pf = np.vstack([bodyP, P1[nb:]]); Tf = np.vstack([bodyT, T1[len(T0):] - nb + len(bodyP)]); Cf = np.vstack([bodyC, C1[nb:]]); Wf = np.vstack([bodyW, W1[nb:]])
# normals
Nf = np.zeros_like(Pf); fn = np.cross(Pf[Tf[:, 1]] - Pf[Tf[:, 0]], Pf[Tf[:, 2]] - Pf[Tf[:, 0]])
for k in range(3): np.add.at(Nf, Tf[:, k], fn)
Nf /= np.maximum(np.linalg.norm(Nf, axis=1, keepdims=True), 1e-9)
# joints/weights: top 4
order = np.argsort(-Wf, axis=1)[:, :4]
Jf = order.astype(np.uint16); Wt = np.take_along_axis(Wf, order, 1); Wt /= np.maximum(Wt.sum(1, keepdims=True), 1e-9)
print('verts', len(Pf), 'tris', len(Tf))

# ---------- write GLB ----------
bufs = []; views = []; accs = []
def add(arr, target=None, comp=None, typ=None, minmax=False, norm=False):
    b = arr.tobytes(); pad = (-len(b)) % 4
    off = sum(len(x) for x in bufs); bufs.append(b + b'\0' * pad)
    views.append({'buffer': 0, 'byteOffset': off, 'byteLength': len(b), **({'target': target} if target else {})})
    a = {'bufferView': len(views) - 1, 'componentType': comp, 'count': len(arr), 'type': typ}
    if norm: a['normalized'] = True
    if minmax: a['min'] = arr.min(0).tolist(); a['max'] = arr.max(0).tolist()
    accs.append(a); return len(accs) - 1
FL, UB, US, UI = 5126, 5121, 5123, 5125
aP = add(Pf.astype(np.float32), 34962, FL, 'VEC3', True); aN = add(Nf.astype(np.float32), 34962, FL, 'VEC3')
Cs = np.clip(Cf, 0, 1); aC = add(np.hstack([Cs, np.ones((len(Cs), 1))]).astype(np.float32), 34962, FL, 'VEC4')
aJ = add(Jf, 34962, US, 'VEC4'); aW = add(Wt.astype(np.float32), 34962, FL, 'VEC4')
aI = add(Tf.astype(np.uint32).flatten(), 34963, UI, 'SCALAR')
nodes = []; 
for n in names:
    par, p = S[n]; t = p - (S[par][1] if par else 0)
    nodes.append({'name': n.replace('.', '_'), 'translation': [float(v) for v in t], 'children': []})
for n in names:
    par = S[n][0]
    if par: nodes[NI[par]]['children'].append(NI[n])
for nd in nodes:
    if not nd['children']: del nd['children']
ibm = np.zeros((len(names), 16), np.float32)
for n in names:
    M = np.eye(4); M[:3, 3] = -S[n][1]; ibm[NI[n]] = M.T.flatten()
aB = add(ibm, None, FL, 'MAT4')
mesh_node = len(nodes); nodes.append({'name': 'body', 'mesh': 0, 'skin': 0})
gltf = {'asset': {'version': '2.0', 'generator': 'tools/mh_build.py (MakeHuman CC0 data)'},
        'scene': 0, 'scenes': [{'nodes': [NI['hips'], mesh_node]}], 'nodes': nodes,
        'skins': [{'joints': list(range(len(names))), 'inverseBindMatrices': aB, 'skeleton': NI['hips']}],
        'meshes': [{'primitives': [{'attributes': {'POSITION': aP, 'NORMAL': aN, 'COLOR_0': aC, 'JOINTS_0': aJ, 'WEIGHTS_0': aW}, 'indices': aI, 'material': 0}]}],
        'materials': [{'name': 'skin_cloth', 'pbrMetallicRoughness': {'baseColorFactor': [1, 1, 1, 1], 'metallicFactor': 0, 'roughnessFactor': 0.82}}],
        'accessors': accs, 'bufferViews': views, 'buffers': [{'byteLength': sum(len(b) for b in bufs)}]}
js = json.dumps(gltf, separators=(',', ':')).encode(); js += b' ' * ((-len(js)) % 4)
bin_ = b''.join(bufs)
with open(OUT, 'wb') as f:
    f.write(struct.pack('<III', 0x46546C67, 2, 12 + 8 + len(js) + 8 + len(bin_)))
    f.write(struct.pack('<II', len(js), 0x4E4F534A) + js); f.write(struct.pack('<II', len(bin_), 0x004E4942) + bin_)
print('wrote', OUT, os.path.getsize(OUT) // 1024, 'KB')
