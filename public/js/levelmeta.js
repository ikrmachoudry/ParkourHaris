// Shared between browser and server. finishZ/finishY are measured from the real level
// builders by tools/measure.js (run: node tools/measure.js) - keep them in sync.
export const MAX_PLAYERS = 4;

export const CHARACTERS = [
  { id: 0, name: 'Bubbles', tag: 'The Royal Bean', color: '#ff5fb4' },
  { id: 1, name: 'Ninja', tag: 'The Silent Bean', color: '#3b82f6' },
  { id: 2, name: 'Dino', tag: 'The Chunky Dino', color: '#3ddc84' },
  { id: 3, name: 'Robo', tag: 'The Bolt Bot', color: '#ffc233' },
];

export const LEVEL_META = [
  { id: 0, key: 'gta', name: 'Punjabi GTA', sub: 'Open World', stars: 3, limit: 0, finishZ: -99999, finishY: 99999, free: true, city: true,
    colors: ['#3a86ff', '#ff9f1c'], blurb: 'A big open city! Skyscrapers, avenues with traffic, parks, a coast highway and a real MOUNTAIN with a road spiralling to the snowy summit. Jump in any parked car with C and drive anywhere. Up to 4 friends together.' },
];
