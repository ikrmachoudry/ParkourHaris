#!/bin/sh
# Cuts the clips in tools/audio_src (sounds supplied by the game's owner) into the short effects in public/audio.
# mk <out> <src> <start s> <len s> <peak dB> <lowpass Hz> <fade-out s> [pitch/speed multiplier]
D=$(dirname "$0"); O=$D/../public/audio; S=$D/audio_src; T=$(mktemp -d)
mk() {
  ffmpeg -v error -y -ss "$3" -t "$4" -i "$S/$2.mp3" -ac 1 -ar 44100 -af "aresample=44100,asetrate=44100*${8:-1},aresample=44100,lowpass=f=$6,afade=t=in:d=0.004,afade=t=out:st=$(awk "BEGIN{print $4-$7}"):d=$7" "$T/$1.wav"
  mx=$(ffmpeg -hide_banner -i "$T/$1.wav" -af volumedetect -f null - 2>&1 | grep -o "max_volume: [-0-9.]*" | cut -d' ' -f2)
  g=$(awk "BEGIN{print $5-($mx)}")
  ffmpeg -v error -y -i "$T/$1.wav" -af "volume=${g}dB" -c:a libmp3lame -b:a 80k "$O/$1.mp3" && echo "$1 gain ${g}dB"
}
mk u_pistol  pistol    0.13 0.95 -4 9000 0.5
mk u_sniper  sniper    0.06 2.2  -3 8500 1.0
mk u_ak1     ak47      0.40 0.24 -4 9000 0.1
mk u_ak2     ak47      0.40 0.95 -4 9000 0.55
mk u_boom    explosion 0.0  2.8  -3 7000 0.8
mk u_thud    thud      0.11 0.9  -3 6000 0.4
mk u_woosh   woosh     0.28 0.8  -4 9000 0.3
mk fsc0 steps 0.28 0.32 -8 7000 0.1
mk fsc1 steps 3.16 0.32 -8 7000 0.1
mk fsc2 steps 4.12 0.32 -8 7000 0.1
mk fsc3 steps 6.06 0.32 -8 7000 0.1
mk u_death death 0.04 0.95 -3 9000 0.25
mk u_scared0 death 0.04 0.38 -4 9000 0.1 1.3
mk u_scared1 death 0.05 0.5 -4 9000 0.12 1.15
mk u_scared2 death 0.08 0.34 -4 9000 0.1 1.5
rm -rf "$T"
