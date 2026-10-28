// Shared between browser and server. finishZ/finishY are measured from the real level
// builders by tools/measure.js (run: node tools/measure.js) - keep them in sync.
export const MAX_PLAYERS = 4;

export const CHARACTERS = [
  { id: 0, name: 'Blaze', tag: '', color: '#ff5fb4' },
  { id: 1, name: 'Scout', tag: '', color: '#3b82f6' },
  { id: 2, name: 'Commando', tag: '', color: '#3ddc84' },
  { id: 3, name: 'Viper', tag: '', color: '#ffc233' },
];

// every look a player can pick: 0..3 = the four GTA heroes, 4..7 = the four Jang soldiers (also allowed in GTA). char = the slot (0..3) the game logic uses.
export const SKINS = [
  ...CHARACTERS.map((c) => ({ skin: c.id, name: c.name, color: c.color, char: c.id, jang: false })),
  { skin: 4, name: 'Agent', color: '#cfd6dd', char: 0, jang: true }, { skin: 5, name: 'Racer', color: '#e0313d', char: 1, jang: true },
  { skin: 6, name: 'Rigger', color: '#f59e0b', char: 2, jang: true }, { skin: 7, name: 'Ghost', color: '#9aa4ae', char: 3, jang: true },
  { skin: 8, name: 'Army', color: '#8a9a5b', char: 0, jang: true },   // the camo soldier (the first FBX character), now also a Jang soldier
];

export const LEVEL_META = [
  { id: 0, key: 'gta', name: 'Punjabi GTA', sub: 'Open World', stars: 3, limit: 0, finishZ: -99999, finishY: 99999, free: true, city: true,
    colors: ['#3a86ff', '#ff9f1c'], blurb: 'A big open city! Skyscrapers, avenues with traffic, parks, a coast highway and a real MOUNTAIN with a road spiralling to the snowy summit. Jump in any parked car with C and drive anywhere. Up to 4 friends together.' },
];
