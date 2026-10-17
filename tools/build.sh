#!/bin/sh
# Bundles the game into public/game.js (works on old iPhones without import maps).
# Usage: ESBUILD=/path/to/esbuild sh tools/build.sh
${ESBUILD:-esbuild} public/js/main.js --bundle --minify --format=iife --target=es2019 --outfile=public/game.js
