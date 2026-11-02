# v326: shrink the user's modern_stairs02.glb (32k tris, three 1024 px PNG maps) for phones.
# Every connected part (tread, landing, stringer, post, rail) becomes its own convex hull (bevels / lathe turnings dropped), flat shaded, with box-projected UVs
# over the wood part of the base colour map (cropped, 512x256 JPEG). usage: python3 tools/stairs_prep.py in.glb out.glb
# result: origin = centre of the footprint, y = 0 at the floor, flights along x (A lane z -0.58..0.58, B lane z -1.79..-0.63 in the ORIGINAL frame), 4.1 m tall.
import sys, io, numpy as np, trimesh
from scipy.sparse import coo_matrix
from scipy.sparse.csgraph import connected_components
from scipy.spatial import ConvexHull
from PIL import Image
import fast_simplification as fs
src, dst = sys.argv[1], sys.argv[2]
sc = trimesh.load(src, force='scene'); m = sc.to_geometry() if hasattr(sc, 'to_geometry') else sc.dump(concatenate=True)
V = np.asarray(m.vertices, float); F = np.asarray(m.faces); img = m.visual.material.baseColorTexture
u, inv = np.unique(np.round(V, 4), axis=0, return_inverse=True); G = inv.ravel()[F]; n = len(u)
A = coo_matrix((np.ones(len(G) * 3), (np.r_[G[:, 0], G[:, 1], G[:, 2]], np.r_[G[:, 1], G[:, 2], G[:, 0]])), shape=(n, n)); k, lab = connected_components(A, directed=False); fl = lab[G[:, 0]]
tris = []
for c in range(k):
    pts = u[np.unique(G[fl == c])]
    try: h = ConvexHull(pts)
    except Exception: continue
    ext0 = pts.max(0) - pts.min(0)
    if ext0[0] < 0.1 and ext0[2] < 0.1: lo0, hi0 = pts.min(0), pts.max(0); pts = np.array([[x, y, z] for x in (lo0[0], hi0[0]) for y in (lo0[1], hi0[1]) for z in (lo0[2], hi0[2])]); h = ConvexHull(pts)   # posts (lathe turned) -> plain square posts
    hv = pts[h.vertices]; remap = {int(o): i for i, o in enumerate(h.vertices)}; hf = np.vectorize(remap.get)(h.simplices).astype(np.int32)
    ext = pts.max(0) - pts.min(0); nf0 = int((fl == c).sum()); tgt = 12 if (ext[0] < 0.1 and ext[2] < 0.1) else (64 if nf0 > 2000 else 28)
    if len(hf) > tgt:
        try: hv, hf = fs.simplify(hv.astype(np.float32), hf, target_count=tgt, agg=7); hv = hv.astype(float)
        except Exception as e: print('simp', e)
    if len(hf) > 3 * tgt:   # thin diagonal rails / panels do not simplify: an oriented bounding box (PCA frame) = 12 triangles
        c0 = pts.mean(0); e, vec = np.linalg.eigh(np.cov((pts - c0).T)); pr = (pts - c0) @ vec; l0, h0 = pr.min(0), pr.max(0)
        cr = np.array([[x, y, z] for x in (l0[0], h0[0]) for y in (l0[1], h0[1]) for z in (l0[2], h0[2])]); hh2 = ConvexHull(cr); hv = cr[hh2.vertices] @ vec.T + c0
        rm2 = {int(o): i for i, o in enumerate(hh2.vertices)}; hf = np.vectorize(rm2.get)(hh2.simplices).astype(np.int32)
    ctr = hv.mean(0)
    for s in hf:
        a, b, d = hv[s]; nrm = np.cross(b - a, d - a)
        if np.dot(nrm, a - ctr) < 0: b, d = d, b
        tris.append([a, b, d])
P = np.array(tris).reshape(-1, 3); lo, hi = P.min(0), P.max(0); cx, cz = (lo[0] + hi[0]) / 2, (lo[2] + hi[2]) / 2; P = P - np.array([cx, 0, cz])
nrm = np.cross(P[1::3] - P[0::3], P[2::3] - P[0::3]); nrm /= np.linalg.norm(nrm, axis=1, keepdims=True) + 1e-12
UV = np.zeros((len(P), 2)); S = 1.0 / 0.9
for i in range(len(P) // 3):
    q = P[i * 3:i * 3 + 3]; ax = np.argmax(np.abs(nrm[i])); a, b = [(1, 2), (0, 2), (0, 1)][ax]
    UV[i * 3:i * 3 + 3] = np.stack([q[:, a] * S, 1 - q[:, b] * S], 1)   # glTF: v runs downwards; trimesh flips on export, repeat wrap
print('tris', len(P) // 3, 'bounds', P.min(0), P.max(0), 'offset', cx, cz)
tm = trimesh.Trimesh(vertices=P, faces=np.arange(len(P)).reshape(-1, 3), process=False)
W, H = img.size; im = img.convert('RGB').crop((int(W * 0.04), 0, int(W * 0.96), int(H * 0.52))).resize((512, 256), Image.LANCZOS)
buf = io.BytesIO(); im.save(buf, 'JPEG', quality=80); im = Image.open(io.BytesIO(buf.getvalue()))
tm.visual = trimesh.visual.TextureVisuals(uv=UV, material=trimesh.visual.material.PBRMaterial(baseColorTexture=im, metallicFactor=0.0, roughnessFactor=0.8, doubleSided=True))
tm.export(dst)
