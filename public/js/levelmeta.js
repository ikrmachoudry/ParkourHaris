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
  { id: 0, key: 'candy', name: 'Candy Meadow', sub: 'Easy', stars: 1, limit: 110, finishZ: -321.9, finishY: 0,
    colors: ['#ff7ab8', '#7be8ff'], blurb: 'Sweet hills, bouncy mushrooms, spinning bars' },
  { id: 1, key: 'canyon', name: 'Sunset Canyon', sub: 'Medium', stars: 2, limit: 130, finishZ: -314, finishY: 5,
    colors: ['#ff8a3d', '#8b2fc9'], blurb: 'Lava, hammers, conveyors and rolling balls' },
  { id: 2, key: 'frost', name: 'Frozen Peak', sub: 'Hard', stars: 3, limit: 150, finishZ: -332.7, finishY: 10.5,
    colors: ['#9fe3ff', '#3b82f6'], blurb: 'Slippery ice, snowballs, lifts and bounce pads' },
  { id: 3, key: 'neon', name: 'Neon Space', sub: 'Insane', stars: 4, limit: 170, finishZ: -412.5, finishY: 5,
    colors: ['#22f2ff', '#ff2bd6'], blurb: 'Vanishing tiles, giant fans and pistons in space' },
  { id: 4, key: 'fair', name: 'Funfair Frenzy', sub: 'Extreme', stars: 5, limit: 180, finishZ: -421.6, finishY: 0,
    colors: ['#ffd23f', '#ff4d6d'], blurb: 'Seesaws, bungee bounce, roller coaster and pitfalls' },
  { id: 5, key: 'fun', name: 'Fun Map', sub: 'Chill', stars: 1, limit: 400, finishZ: -424, finishY: 0.15,
    colors: ['#80ed99', '#4cc9f0'], blurb: 'Giant theme park: rides, a speedway with 4 cars to drive, then the maze. Nothing can kill you!' },
];
