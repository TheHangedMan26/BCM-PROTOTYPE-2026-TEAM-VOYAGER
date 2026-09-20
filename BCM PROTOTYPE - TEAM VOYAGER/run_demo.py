"""
BCM (Because Credit Matters) - Demo Launcher
Initializes the backend and launches the interactive dashboard in your default browser.
"""
import sys
import webbrowser
import threading
import time

def start_server():
    from backend.server import run_server
    run_server(port=8000)

def main():
    print("=" * 65)
    print("  BCM — BECAUSE CREDIT MATTERS")
    print("  Alternative Credit Intelligence for the Underserved")
    print("=" * 65)
    print("  [+] Initializing BCM Scoring Engine & Feature Pipeline...")
    print("  [+] Starting BCM Server at: http://127.0.0.1:8000")
    print("  [+] Launching Dashboard in browser...")
    print("=" * 65)

    # Open browser after short delay
    def open_browser():
        time.sleep(1.2)
        webbrowser.open("http://127.0.0.1:8000")

    threading.Thread(target=open_browser, daemon=True).start()
    
    try:
        start_server()
    except KeyboardInterrupt:
        print("\n[*] BCM Server terminated cleanly.")

if __name__ == "__main__":
    main()
