#!/bin/sh
# Builds the real-recording sound bank (public/audio/*.mp3) from CC0 packs (see public/audio/LICENSES.txt).
# Needs: ffmpeg, and two checkouts:  CC0=<lavenderdotpet/CC0-Public-Domain-Sounds>  KR=<KenneyNL/Starter-Kit-Racing>
CC0=${CC0:-/home/claude/lavenderdotpet/cc0-public-domain-sounds}; KR=${KR:-/home/claude/Starter-Kit-Racing}; O=$(dirname "$0")/../public/audio
enc() { # enc <out-name> <input> [ffmpeg audio filters]   -> mono 44.1k mp3
  n=$1; src=$2; shift 2; f=${1:-anull}
  ffmpeg -v error -y -i "$src" -ac 1 -ar 44100 -af "$f" -c:a libmp3lame -b:a 80k "$O/$n.mp3" || echo "FAILED $n"
}
K=$CC0/kenney_impactsounds/Audio; U=$CC0/kenney_interfacesounds/Audio; W=$CC0/warfork-cc0/sounds; S=$CC0/40-cc0-water-splash-slime-sfx; S2=$CC0/100-cc0-sfx-2; X=$CC0/100-CC0-SFX; J=$CC0/kenney_musicjingles/Audio
# ---- engines: real steady-rpm recordings, pitch-shifted at run time to follow the revs; the variants change the character of the engine
enc eng_car   "$KR/audio/engine.ogg"
enc eng_moto  "$KR/audio/engine-motorcycle.ogg"
enc eng_v8    "$KR/audio/engine.ogg" "asetrate=44100*0.72,aresample=44100,equalizer=f=70:width_type=o:w=1.4:g=7,lowpass=f=3200"
enc eng_diesel "$KR/audio/engine.ogg" "asetrate=44100*0.52,aresample=44100,equalizer=f=60:width_type=o:w=1.4:g=6,lowpass=f=1500,acompressor=threshold=0.15:ratio=5:attack=4:release=60"
enc eng_boat  "$KR/audio/engine-motorcycle.ogg" "asetrate=44100*0.68,aresample=44100,equalizer=f=90:width_type=o:w=1.4:g=6,highpass=f=45,lowpass=f=4200"
# ---- tyres, impacts
enc skid  "$KR/audio/skid.ogg"
enc crash0 "$KR/audio/impact.ogg"
i=0; for f in impactMetal_heavy_000 impactMetal_heavy_002 impactMetal_heavy_004; do enc mh$i "$K/$f.ogg"; i=$((i+1)); done
i=0; for f in impactMetal_medium_000 impactMetal_medium_002 impactMetal_medium_004; do enc mm$i "$K/$f.ogg"; i=$((i+1)); done
i=0; for f in impactMetal_light_000 impactMetal_light_002 impactMetal_light_004; do enc ml$i "$K/$f.ogg"; i=$((i+1)); done
i=0; for f in impactGlass_heavy_001 impactGlass_medium_002; do enc gl$i "$K/$f.ogg"; i=$((i+1)); done
i=0; for f in impactGeneric_light_000 impactGeneric_light_002 impactGeneric_light_004; do enc th$i "$K/$f.ogg"; i=$((i+1)); done
# ---- footsteps: concrete, grass, wood (pier)
i=0; for f in footstep_concrete_000 footstep_concrete_001 footstep_concrete_002 footstep_concrete_003; do enc fsc$i "$K/$f.ogg"; i=$((i+1)); done
i=0; for f in footstep_grass_000 footstep_grass_001 footstep_grass_002 footstep_grass_003; do enc fsg$i "$K/$f.ogg"; i=$((i+1)); done
i=0; for f in footstep_wood_000 footstep_wood_001 footstep_wood_002 footstep_wood_003; do enc fsw$i "$K/$f.ogg"; i=$((i+1)); done
# ---- water: splashes (big / medium / small), diving in / climbing out, sea and lapping loops, rain
enc spl_big0 "$S/splash_04.ogg"; enc spl_big1 "$S/splash_11.ogg"; enc spl_med0 "$S/splash_02.ogg"; enc spl_med1 "$S/splash_08.ogg"
enc spl_sm0 "$S/splash_09.ogg"; enc spl_sm1 "$S/splash_10.ogg"; enc spl_sm2 "$S/splash_15.ogg"; enc spl_sm3 "$S/splash_14.ogg"
enc water_in "$W/world/water_in.ogg"; enc water_out "$W/world/water_out.ogg"
enc sea_loop "$S2/sfx100v2_loop_water_03.ogg" "lowpass=f=2600,highpass=f=60"
enc lap_loop "$S/loop_water_02.ogg"
enc rain_loop "$S/loop_rain.ogg"
enc city_loop "$S2/sfx100v2_loop_highway.ogg" "lowpass=f=1800,highpass=f=40"
# ---- interface + game events
enc ui_click "$U/click_003.ogg"; enc ui_select "$U/select_002.ogg"; enc ui_back "$U/back_002.ogg"; enc ui_tick "$U/tick_001.ogg"; enc ui_ok "$U/confirmation_002.ogg"; enc ui_ok2 "$U/confirmation_004.ogg"
enc ui_open "$U/open_001.ogg"; enc ui_warn "$U/error_003.ogg"; enc ui_bong "$U/bong_001.ogg"
enc pickup "$W/items/item_spawn.ogg"; enc cash "$W/items/ammo_pickup.ogg"; enc respawn "$W/world/player_respawn.ogg"; enc bouncepad "$W/world/jumppad.ogg"; enc noammo "$W/weapons/weapon_noammo.ogg"
enc boom0 "$W/weapons/gren_strong_explosion1.ogg"; enc boom1 "$W/weapons/rocket_strong_explosion.ogg"; enc boom2 "$X/explosion.ogg"
enc win "$J/Sax jingles/jingles_SAX00.ogg"; enc fin "$J/Steel jingles/jingles_STEEL00.ogg"
enc door_o "$K/impactMetal_light_001.ogg"; enc door_c "$K/impactMetal_medium_001.ogg" "volume=0.9"; enc latch "$X/switch_01.ogg"
ls -la "$O"/*.mp3 | wc -l; du -ch "$O"/*.mp3 | tail -1
