// merges Haris's Crawling.fbx (baked by mixamo_bake.mjs as downCrawl) into public/anim/clips.json, made IN PLACE (the game moves the body; the clip's own forward travel is removed so the feet do not double-slide):  node tools/merge_down_crawl.mjs baked.json
import fs from 'fs';
const src = JSON.parse(fs.readFileSync(process.argv[2], 'utf8')), dst = JSON.parse(fs.readFileSync('public/anim/clips.json', 'utf8'));
const c = src.clips.downCrawl, hips = c.hips.slice(); const x0 = hips[0], z0 = hips[2];
for (let i = 0; i < c.n; i++) { hips[i * 3] = x0; hips[i * 3 + 2] = z0; }
const out = { n: c.n, dur: c.dur, G: c.G, hips };
if (out.G.some((v) => !Number.isFinite(v)) || out.hips.some((v) => !Number.isFinite(v))) throw new Error('non-finite');
dst.clips.downCrawl = out; fs.writeFileSync('public/anim/clips.json', JSON.stringify(dst)); console.log('clips:', Object.keys(dst.clips).length, 'downCrawl', out.n, 'frames', out.dur, 's');
