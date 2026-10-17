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
