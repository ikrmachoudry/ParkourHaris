/* v564 PUBG-style aim-down-sights overlay for every gun except the sniper rifle.
   v569: ONE PICTURE PER GUN (AK-47 wood, AK-49 black + gold, M4 rails + tan guard, SMG heat shroud, pistol, revolver, shotgun wood pump) so you see at a glance which gun is aimed.
   One SVG per sight picture: the sight itself sits dead centre (the red dot / front post is exactly on the crosshair, so the
   bullets go where it points), the gun body and the gloved hands come up from the bottom edge, and the rest of the screen is clear.
   The SVG is 1000 x 900 units and is sized by the screen HEIGHT (centre = 500,450), so it looks the same on a phone and a laptop. */

const DEFS = (p) => `<defs>
<linearGradient id="${p}M" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#454c56"/><stop offset=".45" stop-color="#1c2025"/><stop offset="1" stop-color="#0a0c0f"/></linearGradient>
<linearGradient id="${p}B" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#0c0e11"/><stop offset=".3" stop-color="#2b3138"/><stop offset=".5" stop-color="#363d45"/><stop offset=".7" stop-color="#262b32"/><stop offset="1" stop-color="#0b0d10"/></linearGradient>
<linearGradient id="${p}G" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3c4048"/><stop offset=".55" stop-color="#1b1e23"/><stop offset="1" stop-color="#0e1013"/></linearGradient>
<linearGradient id="${p}S" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#59664a"/><stop offset=".6" stop-color="#3c4635"/><stop offset="1" stop-color="#262d22"/></linearGradient>
<linearGradient id="${p}W" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#3a2410"/><stop offset=".3" stop-color="#7a4d22"/><stop offset=".55" stop-color="#94602b"/><stop offset=".8" stop-color="#6a4120"/><stop offset="1" stop-color="#33200e"/></linearGradient>
<linearGradient id="${p}Y" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#6b4f06"/><stop offset=".35" stop-color="#d9a91c"/><stop offset=".55" stop-color="#ffe48a"/><stop offset=".8" stop-color="#c79614"/><stop offset="1" stop-color="#5e4505"/></linearGradient>
<linearGradient id="${p}T" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#1c2631"/><stop offset=".35" stop-color="#5d7288"/><stop offset=".55" stop-color="#8fa4b9"/><stop offset=".8" stop-color="#506579"/><stop offset="1" stop-color="#18222d"/></linearGradient>
<radialGradient id="${p}R"><stop offset="0" stop-color="#ff5a4a" stop-opacity=".95"/><stop offset=".25" stop-color="#ff2a22" stop-opacity=".55"/><stop offset="1" stop-color="#ff1a10" stop-opacity="0"/></radialGradient>
<linearGradient id="${p}L" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#bcd8ff" stop-opacity=".16"/><stop offset=".5" stop-color="#bcd8ff" stop-opacity=".02"/><stop offset="1" stop-color="#bcd8ff" stop-opacity="0"/></linearGradient>
</defs>`;

/* a glove: palm blob + four fingers that wrap over the gun + a thumb (all drawn from a few numbers) */
const fingers = (p, x, y, n, w, dx, dy, rot, h = 40) => {
  let s = '';
  for (let i = 0; i < n; i++) s += `<rect x="${x + i * dx}" y="${y + i * dy}" width="${w}" height="${h}" rx="${h / 2}" fill="url(#${p}G)" stroke="#050607" stroke-width="3" transform="rotate(${rot} ${x + i * dx} ${y + i * dy + h / 2})"/><path d="M${x + i * dx + 16} ${y + i * dy + 9} h${w - 38}" stroke="#5a606a" stroke-opacity=".55" stroke-width="3" stroke-linecap="round" transform="rotate(${rot} ${x + i * dx} ${y + i * dy + h / 2})"/>`;
  return s;
};


/* v572: the red-dot sight drawn like the PUBG one: a tall black housing with a big ARCHED (dome-top) clear window, a thick block under the window, small side knobs.
   Window: x 350..650, y 340..556 (dome on top); the red ring + dot stay exactly at 500,450 so bullets go where the dot is. */
const sight = (p, trim, lens, label, labCol) => `<path fill-rule="evenodd" d="M310 650 V440 A190 128 0 0 1 690 440 V650 Q690 664 676 664 H324 Q310 664 310 650Z M350 540 V440 A150 98 0 0 1 650 440 V540 Q650 556 634 556 H366 Q350 556 350 540Z" fill="url(#${p}M)" stroke="${trim || '#06080b'}" stroke-width="${trim ? 6 : 4}"/>
<path d="M318 440 A182 120 0 0 1 682 440" fill="none" stroke="#7b8490" stroke-opacity=".5" stroke-width="2"/>
<path d="M318 582 H682 M318 640 H682" stroke="#05070a" stroke-width="3"/><path d="M322 586 H678" stroke="#59616c" stroke-opacity=".45" stroke-width="1.6"/>
<rect x="690" y="470" width="34" height="92" rx="9" fill="url(#${p}M)" stroke="#05070a" stroke-width="3"/><rect x="724" y="480" width="22" height="72" rx="7" fill="#15181d" stroke="#05070a" stroke-width="3"/>
<rect x="276" y="486" width="34" height="62" rx="9" fill="url(#${p}M)" stroke="#05070a" stroke-width="3"/>
<circle cx="332" cy="614" r="6" fill="#0a0c0f" stroke="#59616c" stroke-width="1.5"/><circle cx="668" cy="614" r="6" fill="#0a0c0f" stroke="#59616c" stroke-width="1.5"/>
${label ? `<text x="500" y="620" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="20" letter-spacing="2" fill="${labCol || '#fff'}" fill-opacity=".72">${label}</text>` : ''}
<path d="M350 540 V440 A150 98 0 0 1 650 440 V540 Q650 556 634 556 H366 Q350 556 350 540Z" fill="url(#${p}L)" stroke="${lens || '#020304'}" stroke-width="7"/>
<path d="M366 470 A136 88 0 0 1 430 372" fill="none" stroke="#fff" stroke-opacity=".16" stroke-width="7" stroke-linecap="round"/>
<circle cx="500" cy="450" r="16" fill="none" stroke="#ff2b22" stroke-width="2.2" stroke-opacity=".92"/><circle cx="500" cy="450" r="11" fill="url(#${p}R)"/><circle cx="500" cy="450" r="2.6" fill="#ff3b30"/>`;

/* the gun body from under the sight to the bottom edge; fill = gradient id letter, trim = edge colour, rails = tick lines */
const hw0 = (y) => 70 + (y - 590) / 310 * 120, hw = hw0;
const body = (p, fill, trim, ticks, mark, markCol, k = 1) => {
  const hw = (y) => hw0(y) * k;
  let r = '';
  for (const y of ticks) { const h = hw(y) - 9; r += `<path d="M${500 - h} ${y} H${500 + h}" stroke="#05070a" stroke-width="${3 + (y - 590) / 70}"/><path d="M${500 - h} ${y + 4 + (y - 590) / 120} H${500 + h}" stroke="#4a525d" stroke-opacity=".55" stroke-width="1.6"/>`; }
  return `<path d="M430 566 L570 566 L${500 + hw(900)} 900 L${500 - hw(900)} 900 Z" fill="url(#${p}${fill})" stroke="${trim}" stroke-width="3"/>
<path d="M500 566 V900" stroke="#05070a" stroke-opacity=".55" stroke-width="4"/>${r}
<path d="M432 566 L${500 - hw(900) + 2} 900" stroke="#59616c" stroke-opacity=".5" stroke-width="2"/>
${mark ? `<text x="500" y="650" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="21" letter-spacing="2" fill="${markCol || '#000'}" fill-opacity=".62">${mark}</text>` : ''}`;
};

/* three kinds of front hand: wrapped over the handguard (AK-47), a fist round a vertical grip (AK-49 / SMG), a C-clamp from the side (M4) */
const sleeveL = (p) => `<path d="M120 900 C128 800 188 748 262 728 L330 800 L300 900Z" fill="url(#${p}S)" stroke="#12160f" stroke-width="3"/>`;
const handR = (p) => `<path d="M650 900 C664 846 770 826 846 848 C886 860 906 884 910 900Z" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>`;
const handWrap = (p) => `${sleeveL(p)}
<path d="M246 770 C292 704 436 690 524 718 C594 742 640 822 622 900 L262 900 C232 862 228 806 246 770Z" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
${fingers(p, 430, 742, 4, 150, 0, 36, -14)}
<ellipse cx="328" cy="742" rx="30" ry="58" transform="rotate(18 328 742)" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
<path d="M300 700 C330 690 352 700 360 716" fill="none" stroke="#5a606a" stroke-opacity=".5" stroke-width="3"/>${handR(p)}`;
const handFist = (p, accent) => `<path d="M170 900 C178 830 236 790 316 788 L350 900Z" fill="url(#${p}S)" stroke="#12160f" stroke-width="3"/>
<rect x="468" y="676" width="64" height="100" rx="22" fill="url(#${p}M)" stroke="#05070a" stroke-width="3.5"/>${accent ? `<rect x="468" y="676" width="64" height="100" rx="22" fill="none" stroke="${accent}" stroke-width="3"/>` : ''}
<path d="M350 900 C336 810 366 750 440 736 L560 736 C634 750 664 810 650 900Z" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
${[752, 790, 828].map((y) => `<rect x="396" y="${y}" width="208" height="34" rx="17" fill="url(#${p}G)" stroke="#050607" stroke-width="3"/><path d="M420 ${y + 9} h160" stroke="#5a606a" stroke-opacity=".5" stroke-width="3" stroke-linecap="round"/>`).join('')}
<ellipse cx="372" cy="782" rx="26" ry="52" transform="rotate(14 372 782)" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>${handR(p)}`;
const handClamp = (p) => `<path d="M150 900 C158 800 222 740 312 722 L392 770 L420 900Z" fill="url(#${p}S)" stroke="#12160f" stroke-width="3"/>
<path d="M290 790 C300 730 360 700 430 712 L470 900 L270 900Z" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
<ellipse cx="420" cy="690" rx="28" ry="84" transform="rotate(7 420 690)" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/><path d="M412 630 C418 660 424 700 424 744" fill="none" stroke="#5a606a" stroke-opacity=".5" stroke-width="3"/>
${[0, 1, 2, 3].map((i) => `<rect x="${566 + i * 6}" y="${742 + i * 36}" width="96" height="32" rx="16" fill="url(#${p}G)" stroke="#050607" stroke-width="3"/>`).join('')}${handR(p)}`;

const wrapSvg = (cls, p, inner) => `<svg class="k-${cls}" viewBox="0 0 1000 900" preserveAspectRatio="xMidYMin meet">${DEFS(p)}${inner}</svg>`;

/* AK-47: wooden handguard, steel gas tube, the hand wraps over the wood */
const ak = () => { const p = 'a1'; let grain = ''; for (let i = 0; i < 7; i++) grain += `<path d="M${470 + i * 10} 590 C${468 + i * 11} 700 ${456 + i * 14} 800 ${440 + i * 20} 900" stroke="#2c1a0a" stroke-opacity=".35" stroke-width="2" fill="none"/>`;
  return wrapSvg('ak', p, `${body(p, 'W', '#1f1208', [638, 700, 770, 850], '')}${grain}<path d="M484 566 L516 566 L${500 + 26} 900 L${500 - 26} 900Z" fill="url(#${p}T)" fill-opacity=".85" stroke="#05070a" stroke-width="2"/>${sight(p, '', '', 'AK-47', '#ffe0a8')}${handWrap(p)}`); };
/* AK-49 (rare): black body with gold trim, gold sight ring, a vertical grip in a fist */
const ak49 = () => { const p = 'a2'; let st = ''; for (const o of [-34, 34]) st += `<path d="M${500 + o * 0.9} 590 L${500 + o * 2.3} 900" stroke="url(#${p}Y)" stroke-width="7" fill="none"/>`;
  return wrapSvg('ak49', p, `${body(p, 'B', '#d9a91c', [640, 702, 776, 858], 'AK-49', '#ffd23f')}${st}${sight(p, '#d9a91c', '#e8bb2c', 'AK-49', '#ffd23f')}${handFist(p, '#d9a91c')}`); };
/* M4: black quad rail (many ticks), a tan hand guard, the hand clamps from the side */
const m4 = () => { const p = 'a3'; return wrapSvg('m4', p, `${body(p, 'B', '#06070a', [616, 640, 664, 690, 718, 748, 780, 814, 850, 888], 'M4', '#d8c9a0')}<path d="M${500 - hw(740)} 740 L${500 + hw(740)} 740 L${500 + hw(900)} 900 L${500 - hw(900)} 900Z" fill="#8c7c58" fill-opacity=".55" stroke="#2c2616" stroke-width="2"/>${sight(p, '', '', 'M4', '#d8c9a0')}${handClamp(p)}`); };
/* SMG: short wide body, round heat-shroud holes, a yellow stripe, a fist round the vertical grip */
const smg = () => { const p = 'a4'; let holes = ''; for (let r = 0; r < 4; r++) for (let c = -2; c <= 2; c++) { const y = 610 + r * 22, x = 500 + c * (10 + r * 4.5); holes += `<ellipse cx="${x}" cy="${y}" rx="${2.4 + r * 0.5}" ry="${1.8 + r * 0.35}" fill="#030405"/>`; }
  return wrapSvg('smg', p, `${body(p, 'M', '#06070a', [706, 774, 852], 'SMG', '#ffd23f', 1.28)}${holes}<path d="M${500 - hw(700) * 1.28 + 6} 700 H${500 + hw(700) * 1.28 - 6}" stroke="#ffd23f" stroke-width="6"/>${sight(p, '', '', 'SMG', '#ffd23f')}${handWrap(p)}`); };

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


/* revolver: blued-steel barrel rib, the round CYLINDER with six chambers, a hammer spur, a wooden grip */
const revolver = () => {
  const p = 'a5', sw = (y) => 26 + (y - 520) / 380 * 120; let ch = '';
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2; ch += `<circle cx="${500 + Math.cos(a) * 64}" cy="${812 + Math.sin(a) * 64}" r="23" fill="#050607" stroke="#6d7a88" stroke-width="2"/>`; }
  return wrapSvg('revolver', p, `<path d="M${500 - sw(520)} 520 L${500 + sw(520)} 520 L${500 + sw(900)} 900 L${500 - sw(900)} 900Z" fill="url(#${p}T)" stroke="#06070a" stroke-width="3"/>
<path d="M500 520 V900" stroke="#cfe0f2" stroke-opacity=".45" stroke-width="3"/>
<path d="M489 456 H511 L514 524 H486Z" fill="#0b0c0e" stroke="#9fb2c6" stroke-width="1.6"/><rect x="494" y="462" width="12" height="20" fill="#ff7a1a"/>
<circle cx="500" cy="812" r="118" fill="url(#${p}T)" stroke="#05070a" stroke-width="4"/><circle cx="500" cy="812" r="104" fill="none" stroke="#cfe0f2" stroke-opacity=".35" stroke-width="2"/>${ch}<circle cx="500" cy="812" r="14" fill="#1a222b" stroke="#9fb2c6" stroke-width="2"/>
<path d="M404 706 H596 L604 742 H396Z" fill="url(#${p}T)" stroke="#040506" stroke-width="3.5"/><path d="M486 706 H514 V726 H486Z" fill="#020304"/><circle cx="440" cy="724" r="6" fill="#f4f4ee"/><circle cx="560" cy="724" r="6" fill="#f4f4ee"/>
<path d="M474 706 L492 664 L508 664 L526 706Z" fill="url(#${p}T)" stroke="#040506" stroke-width="3"/>
<text x="500" y="610" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="13" letter-spacing="1" fill="#000" fill-opacity=".65">REVOLVER</text>
<path d="M392 900 C398 850 602 850 608 900Z" fill="url(#${p}W)" stroke="#1a0e05" stroke-width="3.5"/>
<path d="M232 900 C244 826 326 790 392 808 L424 900Z" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/><path d="M768 900 C756 826 674 790 608 808 L576 900Z" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
<ellipse cx="404" cy="834" rx="22" ry="48" transform="rotate(-24 404 834)" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/><ellipse cx="596" cy="834" rx="22" ry="48" transform="rotate(24 596 834)" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>`);
};

/* shotgun: a heavy ribbed barrel with a brass bead and a wooden PUMP forend under a gloved hand */
const shotgun = () => {
  const p = 'a6', bw = (y) => 22 + (y - 520) / 380 * 112; let grv = '';
  for (let i = 0; i < 7; i++) grv += `<path d="M${392 + i * 36} 758 V826" stroke="#2a190a" stroke-width="4"/>`;
  return wrapSvg('shotgun', p, `<path d="M${500 - bw(520)} 520 L${500 + bw(520)} 520 L${500 + bw(900)} 900 L${500 - bw(900)} 900Z" fill="url(#${p}B)" stroke="#06070a" stroke-width="3"/>
<path d="M${500 - 8} 520 V900 M${500 + 8} 520 V900" stroke="#9aa3ae" stroke-opacity=".45" stroke-width="3"/>
<path d="M${500 - bw(600)} 600 L${500 - bw(600)} 604 H${500 + bw(600)} V600Z" fill="#040506"/>
<rect x="493" y="456" width="14" height="66" fill="#0a0b0d" stroke="#4b535e" stroke-width="1.5"/><circle cx="500" cy="452" r="9.5" fill="#e3b341" stroke="#0a0b0d" stroke-width="2.5"/>
<text x="500" y="690" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="22" letter-spacing="2" fill="#fff" fill-opacity=".5">SHOTGUN</text>
<rect x="380" y="744" width="240" height="96" rx="30" fill="url(#${p}W)" stroke="#1a0e05" stroke-width="3.5"/>${grv}
<path d="M200 900 C214 818 300 770 380 788 C470 806 540 832 580 900Z" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
${fingers(p, 370, 760, 4, 160, 0, 34, -6)}<ellipse cx="338" cy="806" rx="30" ry="54" transform="rotate(-10 338 806)" fill="url(#${p}G)" stroke="#050607" stroke-width="3.5"/>
<path d="M120 900 C130 830 190 790 244 800 L270 900Z" fill="url(#${p}S)" stroke="#12160f" stroke-width="3"/>${handR(p)}`);
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

export const ADS_HTML = ak() + ak49() + m4() + smg() + pistol() + revolver() + shotgun() + iron();

/* which sight picture each gun uses (one picture per gun; 'iron' = a rifle with its red dot switched off), and how far the camera zooms in (vertical FOV; the normal view is 62) */
export const ADS_KIND = { ak: 'ak', ak49: 'ak49', m4: 'm4', smg: 'smg', pistol: 'pistol', revolver: 'revolver', shotgun: 'shotgun' };
export const ADS_KINDS = ['ak', 'ak49', 'm4', 'smg', 'pistol', 'revolver', 'shotgun', 'iron'];
export const ADS_FOV = { ak: 46, ak49: 46, m4: 44, smg: 50, pistol: 54, revolver: 52, shotgun: 52 };
