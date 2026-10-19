# Parkour Haris

3D multiplayer obstacle race (1-4 players), 6 levels, bat, power-ups, mobile touch controls. Three.js + Node/WebSocket.

## Play on your own PC / Wi-Fi
Double-click **START.bat**. It prints the link for this PC and for phones on the same Wi-Fi.

## Put it on the internet (Railway, no domain needed)
Railway gives every service a free public HTTPS address like `parkour-haris-production.up.railway.app`.
WebSockets work automatically (the game switches to `wss://` by itself).

1. Make a NEW private GitHub repo (e.g. `parkour-haris`) and put these files in it (`node_modules` is ignored by `.gitignore`).
2. Railway -> **New Project** (a separate project, so other projects are untouched) -> **Deploy from GitHub repo** -> pick `parkour-haris`
   (when GitHub asks which repos Railway may see, choose **Only select repositories** and tick just this one).
3. Open the service -> **Settings -> Networking -> Generate Domain**. Set **Region** to *US East (Virginia)* (good for California + Florida + Karachi).
4. Send everybody that link. Every `git push` redeploys automatically.

Health check: `/health`. Port: Railway sets `PORT` automatically. Limits built in: 4 players per room, 12 connections per IP, flood protection.

## The map (v25)
- The city is 8 x 8 blocks (avenues from -240 to 240), a ring highway (half-size 280) goes round it, Mount Haris is in the north-west, the stunt park and coast highway are in the east.
- Every block is a slot (`BLK` in `public/js/gta.js`): it gets random buildings unless it is listed in `PARKS` or `CUSTOM_BLOCKS`.
  To put an airport / hospital / anything on a block: add the block to `CUSTOM_BLOCKS` (the random buildings go away) and build the landmark on it in `public/js/gtaworld.js`
  (see the bank and the police station there). The empty land between the ring road and the coast is free for bigger landmarks.

## Credits
Walking and running animation: motion-capture data from the CMU Graphics Lab Motion Capture Database (mocap.cs.cmu.edu, free for all uses), converted by tools/mocap_bake.mjs onto the game's own character skeleton.
Player bodies: MakeHuman base mesh and rig data (CC0, makehumancommunity/makehuman), skinned and dressed by tools/mh_build.py; the same game animations drive them (public/js/glbactor.js).
