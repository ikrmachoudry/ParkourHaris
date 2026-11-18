/* v564 PUBG-style aim-down-sights overlay for every gun except the sniper rifle.
   One SVG per sight picture: the sight itself sits dead centre (the red dot / front post is exactly on the crosshair, so the
   bullets go where it points), the gun body and the gloved hands come up from the bottom edge, and the rest of the screen is clear.
   The SVG is 1000 x 900 units and is sized by the screen HEIGHT (centre = 500,450), so it looks the same on a phone and a laptop. */

const DEFS = (p) => `<defs>
<linearGradient id="${p}M" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#454c56"/><stop offset=".45" stop-color="#1c2025"/><stop offset="1" stop-color="#0a0c0f"/></linearGradient>
<linearGradient id="${p}B" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0c0e11"/><stop offset=".3" stop-color="#2b3138"/><stop offset=".5" stop-color="#363d45"/><stop offset=".7" stop-color="#262b32"/><stop offset="1" stop-color="#0b0d10"/></linearGradient>
<linearGradient id="${p}G" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3c4048"/><stop offset=".55" stop-color="#1b1e23"/><stop offset="1" stop-color="#0e1013"/></linearGradient>
<linearGradient id="${p}S" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#59664a"/><stop offset=".6" stop-color="#3c4635"/><stop offset="1" stop-color="#262d22"/></linearGradient>
<radialGradient id="${p}R"><stop offset="0" stop-color="#ff5a4a" stop-opacity=".95"/><stop offset=".25" stop-color="#ff2a22" stop-opacity=".55"/><stop offset="1" stop-color="#ff1a10" stop-opacity="0"/></radialGradient>
<linearGradient id="${p}L" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#bcd8ff" stop-opacity=".16"/><stop offset=".5" stop-color="#bcd8ff" stop-opacity=".02"/><stop offset="1" stop-color="#bcd8ff" stop-opacity="0"/></linearGradient>
</defs>`;

/* a glove: palm blob + four fingers that wrap over the gun + a thumb (all drawn from a few numbers) */
const fingers = (p, x, y, n, w, dx, dy, rot, h = 40) => {
  let s = '';
  for (let i = 0; i < n; i++) s += `<rect x="${x + i * dx}" y="${y + i * dy}" width="${w}" height="${h}" rx="${h / 2}" fill="url(#${p}G)" stroke="#050607" stroke-width="3" transform="rotate(${rot} ${x + i * dx} ${y + i * dy + h / 2})"/><path d="M${x + i * dx + 16} ${y + i * dy + 9} h${w - 38}" stroke="#5a606a" stroke-opacity=".55" stroke-width="3" stroke-linecap="round" transform="rotate(${rot} ${x + i * dx} ${y + i * dy + h / 2})"/>`;
  return s;
};

/* rifle / SMG with a red-dot sight */
const dot = () => {
  const p = 'ad', hw = (y) => 70 + (y - 590) / 310 * 120;
  let rails = '';
  for (const y of [624, 656, 694, 738, 790, 852]) { const h = hw(y) - 9; rails += `<path d="M${500 - h} ${y} H${500 + h}" stroke="#05070a" stroke-width="${3 + (y - 590) / 70}"/><path d="M${500 - h} ${y + 4 + (y - 590) / 120} H${500 + h}" stroke="#4a525d" stroke-opacity=".55" stroke-width="1.6"/>`; }
  let knurl = '';
  for (let i = 0; i < 9; i++) knurl += `<path d="M${774} ${400 + i * 12} h28" stroke="#05070a" stroke-width="2.4"/>`;
  let knurl2 = '';
  for (let i = 0; i < 9; i++) knurl2 += `<path d="M${440 + i * 15} 308 v18" stroke="#05070a" stroke-width="2.4"/>`;
  return `<svg class="k-dot" viewBox="0 0 1000 900" preserveAspectRatio="xMidYMin meet">${DEFS(p)}
<path d="M430 566 L570 566 L${500 + hw(900)} 900 L${500 - hw(900)} 900 Z" fill="url(#${p}B)" stroke="#06070a" stroke-width="3"/>
<path d="M500 566 V900" stroke="#05070a" stroke-opacity=".55" stroke-width="4"/>${rails}
<path d="M432 566 L${500 - hw(900) + 2} 900" stroke="#59616c" stroke-opacity=".5" stroke-width="2"/>
<path d="M398 568 H602 L628 612 H372 Z" fill="url(#${p}M)" stroke="#05070a" stroke-width="3"/>
<path fill-rule="evenodd" d="M348 332 h304 a48 48 0 0 1 48 48 v148 a48 48 0 0 1 -48 48 h-304 a48 48 0 0 1 -48 -48 v-148 a48 48 0 0 1 48 -48Z M345 372 h310 a28 28 0 0 1 28 28 v100 a28 28 0 0 1 -28 28 h-310 a28 28 0 0 1 -28 -28 v-100 a28 28 0 0 1 28 -28Z" fill="url(#${p}M)" stroke="#06080b" stroke-width="4"/>
<rect x="306" y="338" width="388" height="232" rx="43" fill="none" stroke="#6a727e" stroke-opacity=".55" stroke-width="1.6"/>
<rect x="436" y="306" width="128" height="30" rx="7" fill="url(#${p}M)" stroke="#05070a" stroke-width="3"/>${knurl2}
<rect x="700" y="394" width="40" height="112" rx="9" fill="url(#${p}M)" stroke="#05070a" stroke-width="3"/><rect x="740" y="402" width="26" height="96" rx="7" fill="#15181d" stroke="#05070a" stroke-width="3"/>
<rect x="260" y="414" width="40" height="64" rx="9" fill="url(#${p}M)" stroke="#05070a" stroke-width="3"/>
<circle cx="333" cy="356" r="7" fill="#0a0c0f" stroke="#59616c" stroke-width="1.5"/><circle cx="667" cy="356" r="7" fill="#0a0c0f" stroke="#59616c" stroke-width="1.5"/>
<path d="M345 372 h310 a28 28 0 0 1 28 28 v100 a28 28 0 0 1 -28 28 h-310 a28 28 0 0 1 -28 -28 v-100 a28 28 0 0 1 28 -28Z" fill="url(#${p}L)" stroke="#020304" stroke-width="7"/>
<path d="M352 380 L402 380 L352 440Z" fill="#fff" fill-opacity=".1"/>
<circle cx="500" cy="450" r="44" fill="none" stroke="#ff2b22" stroke-width="3.4" stroke-opacity=".92"/><circle cx="500" cy="450" r="30" fill="url(#${p}R)"/><circle cx="500" cy="450" r="4.5" fill="#ff3b30"/>
<path d="M120 900 C128 800 188 748 262 728 L330 800 L300 900Z" fill="url(#${p}S)" stroke="#12160f" stroke-width="3"/>
<path d="M246 770 C292 704 436 690 524 718 C594 742 640 822 622 900 L262 900 C232 862 228 806 246 770Z" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
${fingers(p, 430, 742, 4, 150, 0, 36, -14)}
<ellipse cx="328" cy="742" rx="30" ry="58" transform="rotate(18 328 742)" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
<path d="M300 700 C330 690 352 700 360 716" fill="none" stroke="#5a606a" stroke-opacity=".5" stroke-width="3"/>
<path d="M650 900 C664 846 770 826 846 848 C886 860 906 884 910 900Z" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
</svg>`;
};

/* pistol / revolver: iron sights, slide, two gloved hands */
const pistol = () => {
  const p = 'ap', sw = (y) => 30 + (y - 520) / 380 * 150;
  let ser = '';
  for (let i = 0; i < 7; i++) { const y = 806 + i * 13, w = sw(y) - 24; ser += `<path d="M${500 + w * 0.55} ${y} v9 M${500 - w * 0.55} ${y} v9" stroke="#030405" stroke-width="3"/>`; }
  return `<svg class="k-pistol" viewBox="0 0 1000 900" preserveAspectRatio="xMidYMin meet">${DEFS(p)}
<path d="M${500 - sw(520)} 520 L${500 + sw(520)} 520 L${500 + sw(900)} 900 L${500 - sw(900)} 900Z" fill="url(#${p}B)" stroke="#06070a" stroke-width="3"/>
<path d="M500 520 V900" stroke="#6b7480" stroke-opacity=".35" stroke-width="3"/>${ser}
<path d="M366 700 H468 V724 Q500 736 532 724 V700 H634 L642 752 H358Z" fill="url(#${p}M)" stroke="#040506" stroke-width="3.5"/>
<circle cx="414" cy="728" r="8" fill="#f4f4ee"/><circle cx="586" cy="728" r="8" fill="#f4f4ee"/>
<path d="M489 458 H511 L514 524 H486Z" fill="#0b0c0e" stroke="#4b535e" stroke-width="1.6"/><circle cx="500" cy="470" r="6" fill="#f4f4ee"/>
<path d="M232 900 C244 826 326 790 392 808 L424 900Z" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
<path d="M768 900 C756 826 674 790 608 808 L576 900Z" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
<ellipse cx="404" cy="834" rx="22" ry="48" transform="rotate(-24 404 834)" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
<ellipse cx="596" cy="834" rx="22" ry="48" transform="rotate(24 596 834)" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
<path d="M340 900 C350 868 650 868 660 900Z" fill="url(#${p}G)" stroke="#050607" stroke-width="3"/>
</svg>`;
};

/* shotgun, and any rifle with its scope taken off: a front bead on a ribbed barrel, a gloved hand on the forend */
const iron = () => {
  const p = 'ai', bw = (y) => 16 + (y - 520) / 380 * 96;
  let ribs = '';
  for (const y of [560, 604, 656, 716, 786, 866]) ribs += `<path d="M${500 - bw(y) + 5} ${y} H${500 + bw(y) - 5}" stroke="#040506" stroke-width="3"/>`;
  return `<svg class="k-iron" viewBox="0 0 1000 900" preserveAspectRatio="xMidYMin meet">${DEFS(p)}
<path d="M${500 - bw(520)} 520 L${500 + bw(520)} 520 L${500 + bw(900)} 900 L${500 - bw(900)} 900Z" fill="url(#${p}B)" stroke="#06070a" stroke-width="3"/>
<path d="M500 520 V900" stroke="#9aa3ae" stroke-opacity=".5" stroke-width="3"/>${ribs}
<rect x="493" y="458" width="14" height="66" fill="#0a0b0d" stroke="#4b535e" stroke-width="1.5"/><circle cx="500" cy="454" r="8.5" fill="#f2f0e8" stroke="#0a0b0d" stroke-width="2.5"/>
<path d="M410 742 H462 V792 H404Z M538 742 H590 L596 792 H538Z" fill="url(#${p}M)" stroke="#040506" stroke-width="3.5"/>
<path d="M200 900 C214 818 300 770 380 788 C470 806 540 832 580 900Z" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
${fingers(p, 380, 770, 4, 150, 0, 34, -8)}
<ellipse cx="338" cy="806" rx="30" ry="54" transform="rotate(-10 338 806)" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
<path d="M120 900 C130 830 190 790 244 800 L270 900Z" fill="url(#${p}S)" stroke="#12160f" stroke-width="3"/>
<path d="M660 900 C676 850 780 836 850 856 C890 868 906 888 910 900Z" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
</svg>`;
};

export const ADS_HTML = dot() + pistol() + iron();

/* which sight picture each gun uses, and how far the camera zooms in (vertical FOV; the normal view is 62) */
export const ADS_KIND = { ak: 'dot', ak49: 'dot', m4: 'dot', smg: 'dot', pistol: 'pistol', revolver: 'pistol', shotgun: 'iron' };
export const ADS_FOV = { ak: 46, ak49: 46, m4: 44, smg: 50, pistol: 54, revolver: 52, shotgun: 52 };
