#!/usr/bin/env python3
"""Parkour Haris - one-click local launcher.
Usage:  python run.py        (Windows)   |   python3 run.py   (Mac/Linux)
Installs packages on first run, starts the server (auto-restarts when files change),
opens the browser and prints the link to type on your phone (same Wi-Fi)."""
import os, shutil, socket, subprocess, sys, threading, time, webbrowser

HERE = os.path.dirname(os.path.abspath(__file__))
os.chdir(HERE)

node, npm = shutil.which("node"), shutil.which("npm")
if not node or not npm:
    print("Node.js not found. Install it from https://nodejs.org (LTS), then run this again.")
    sys.exit(1)

def port_free(p):
    s = socket.socket(); s.settimeout(0.5)
    try:
        return s.connect_ex(("127.0.0.1", p)) != 0
    finally:
        s.close()

def lan_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80)); return s.getsockname()[0]
    except Exception:
        return None
    finally:
        s.close()

want = int(os.environ.get("PORT", "3000"))
PORT = want
while not port_free(PORT) and PORT < want + 20:
    PORT += 1
if PORT != want:
    print(f"\n!! Port {want} is already used by an OLD game window. Close that old black window to avoid confusion.")
    print(f"!! Using port {PORT} instead.\n")

if not os.path.isdir(os.path.join(HERE, "node_modules", "three")):
    print("First run: installing packages (needs internet, ~1 minute)...")
    if subprocess.call([npm, "install", "--no-audit", "--no-fund"]) != 0:
        print("npm install failed."); sys.exit(1)

url = f"http://localhost:{PORT}"
ip = lan_ip()
threading.Thread(target=lambda: (time.sleep(1.5), webbrowser.open(url)), daemon=True).start()
print("=" * 60)
print(f"  Game on this PC : {url}")
if ip:
    print(f"  On your PHONE   : http://{ip}:{PORT}   (same Wi-Fi as this PC)")
print("  Stop with Ctrl+C. Files update automatically - just refresh (Ctrl+F5).")
print("=" * 60)
try:
    subprocess.call([node, "--watch", "server.js"], env={**os.environ, "PORT": str(PORT), "DEV": "1"})
except KeyboardInterrupt:
    pass
