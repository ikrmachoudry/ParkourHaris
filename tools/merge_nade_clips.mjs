// merges the trimmed grenade clips (baked by mixamo_bake.mjs) into public/anim/clips.json:  node tools/merge_nade_clips.mjs baked.json
// nadeThrow = Throw_Grenade frames 30..72 (wind-up .. follow-through), the hand lets go at frame 57; nadeToss = Toss_Grenade frames 18..66, release at frame 54
import fs from 'fs';
const src = JSON.parse(fs.readFileSync(process.argv[2], 'utf8')), dst = JSON.parse(fs.readFileSync('public/anim/clips.json', 'utf8'));
const cut = (c, a, b, rel) => ({ n: b - a, dur: +((b - a) / 30).toFixed(4), rel: +((rel - a) / (b - a)).toFixed(3), G: c.G.slice(a * 68, b * 68), hips: c.hips.slice(a * 3, b * 3) });
dst.clips.nadeThrow = cut(src.clips.nadeThrow, 30, 72, 57); dst.clips.nadeToss = cut(src.clips.nadeToss, 18, 66, 54);
fs.writeFileSync('public/anim/clips.json', JSON.stringify(dst)); console.log('clips:', Object.keys(dst.clips).join(','), (fs.statSync('public/anim/clips.json').size / 1024).toFixed(0) + 'KB');
