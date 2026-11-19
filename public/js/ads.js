/* v579: pictures now come from the real gun GLB renders (see gunPic). v564 PUBG-style aim-down-sights overlay for every gun except the sniper rifle.
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

const wrapSvg = (cls, p, inner) => `<svg class="k-${cls}" viewBox="0 0 1000 1120" preserveAspectRatio="xMidYMin meet">${DEFS(p)}${inner}</svg>`;

/* v582: the pictures were 800 x 720 and ended at the bottom of the SVG, so tilting for a peek lifted that cut edge into view (a gap under the gun). Now every picture is 800 x 784 (the last row of the gun carried 64 rows further down) and the SVG viewBox is 1000 x 1120, so the gun runs far below the screen like a real viewmodel and no tilt can show its end.
   v579: THE REAL GUNS. Every sight picture below is a render of YOUR gun GLB (and your red-dot GLB mounted on the AK / AK-49 / M4) seen from the shooter's eye along the sight line, so the sight sits dead centre
   (the aim point is at 500,450) and the gun is exactly the model you see everywhere else. The files are public/models/ads/adsgun-<gun>.webp (800 x 720, transparent). No hands are drawn (they only hid the gun). */
const gunPic = (cls, key, dot) => { const p = 'g' + key; return wrapSvg(cls, p, `<g transform="translate(500 450) scale(1.25) translate(-500 -450)"><image href="models/ads/adsgun-${key}.webp" x="0" y="0" width="1000" height="980" preserveAspectRatio="none"/></g>${dot ? `<circle cx="500" cy="450" r="16" fill="none" stroke="#ff2b22" stroke-width="2.2" stroke-opacity=".92"/><circle cx="500" cy="450" r="11" fill="url(#${p}R)"/><circle cx="500" cy="450" r="2.6" fill="#ff3b30"/>` : `<circle cx="500" cy="450" r="2.4" fill="#ff3b30" fill-opacity=".85"/>`}`); };
const ak = () => gunPic('ak', 'ak', true);
const ak49 = () => gunPic('ak49', 'ak', true);
const m4 = () => gunPic('m4', 'm4', true);
const smg = () => gunPic('smg', 'smg', true);
const pistol = () => gunPic('pistol', 'pistol', false);
const revolver = () => gunPic('revolver', 'revolver', false);
const shotgun = () => gunPic('shotgun', 'shotgun', true);
const iron = () => gunPic('iron', 'iron', false);

export const ADS_HTML = ak() + ak49() + m4() + smg() + pistol() + revolver() + shotgun() + iron();

/* which sight picture each gun uses (one picture per gun; 'iron' = a rifle with its red dot switched off), and how far the camera zooms in (vertical FOV; the normal view is 62) */
export const ADS_KIND = { ak: 'ak', ak49: 'ak49', m4: 'm4', smg: 'smg', pistol: 'pistol', revolver: 'revolver', shotgun: 'shotgun' };
export const ADS_KINDS = ['ak', 'ak49', 'm4', 'smg', 'pistol', 'revolver', 'shotgun', 'iron'];
export const ADS_FOV = { ak: 46, ak49: 46, m4: 44, smg: 46, pistol: 54, revolver: 52, shotgun: 52 };
