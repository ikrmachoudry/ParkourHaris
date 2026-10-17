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
  { id: 0, key: 'fun', name: 'Fun Map', sub: 'Chill', stars: 1, limit: 400, finishZ: -424, finishY: 0.15,
    colors: ['#80ed99', '#4cc9f0'], blurb: 'Giant theme park: rides, highways with cars to drive, a SKY SPEEDWAY to win red racers, then the maze. Nothing can kill you!' },
  { id: 1, key: 'jungle', name: 'Jungle', sub: 'Free Roam', stars: 1, limit: 0, finishZ: -99999, finishY: 99999, free: true,
    colors: ['#6bbf59', '#ffd23f'], blurb: 'Wild lion, leopard, elephant & horse roam the trees. Beat them with the BAT to tame them as pets and RIDE them - then climb the hill and free the DINOSAUR! No race, just fun.' },
];
