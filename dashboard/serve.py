#!/usr/bin/env python3
"""Serve the live draft dashboard on http://127.0.0.1:8080"""
from __future__ import annotations

import http.server
import os
import socketserver

PORT = int(os.environ.get("PORT", "8080"))
ROOT = os.path.dirname(os.path.abspath(__file__))


class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def log_message(self, fmt, *args):
        print("[%s] " % self.log_date_time_string() + (fmt % args))


if __name__ == "__main__":
    os.chdir(ROOT)
    socketserver.ThreadingTCPServer.allow_reuse_address = True
    with socketserver.ThreadingTCPServer(("0.0.0.0", PORT), Handler) as httpd:
        print(f"Bada Bing dashboard → http://127.0.0.1:{PORT}", flush=True)
        print("Refresh in the page pulls live Sleeper picks. Ctrl+C to stop.", flush=True)
        httpd.serve_forever()
