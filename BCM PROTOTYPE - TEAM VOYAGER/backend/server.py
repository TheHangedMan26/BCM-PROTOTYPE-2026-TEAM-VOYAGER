"""
BCM (Because Credit Matters) - High-Performance Standard Server
Zero external dependency server supporting the complete REST API and static frontend.
Ensures instant hackathon demonstration without environment friction.
"""
import http.server
import socketserver
import json
import os
import mimetypes
from urllib.parse import urlparse, parse_qs
from backend.models import RawTransaction, IngestionRequest
from backend.normalization import normalize_transactions
from backend.policy import PolicyDecisionEngine
from ml.features import compute_behavioral_metrics
from ml.scorer import calculate_score, simulate_what_if
from ml.sample_data import PERSONAS

FRONTEND_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "frontend")

def to_dict(obj):
    if hasattr(obj, "dict") and callable(obj.dict):
        return obj.dict()
    if hasattr(obj, "__dict__"):
        res = {}
        for k, v in obj.__dict__.items():
            if hasattr(v, "dict") and callable(v.dict):
                res[k] = v.dict()
            elif isinstance(v, list):
                res[k] = [to_dict(x) for x in v]
            elif hasattr(v, "__dict__"):
                res[k] = to_dict(v)
            else:
                res[k] = v
        return res
USERS_DB = {
    "alex.turner@bcmcredit.io": {
        "id": "usr_alex_01",
        "email": "alex.turner@bcmcredit.io",
        "name": "Alex Turner",
        "password": "Password123!",
        "role": "Fintech Risk Analyst",
        "account_type": "BANK"
    },
    "rohan.m@bcmcredit.io": {
        "id": "usr_rohan_02",
        "email": "rohan.m@bcmcredit.io",
        "name": "Rohan M.",
        "password": "Password123!",
        "role": "Gig Mobility Partner",
        "account_type": "BORROWER"
    }
}

class BCMRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def send_json(self, status_code: int, data: any):
        payload = json.dumps(data, default=to_dict).encode("utf-8")
        self.send_response(status_code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path.rstrip("/")

        if path == "/api/v1/health":
            self.send_json(200, {
                "status": "healthy",
                "brand": "BCM (Because Credit Matters)",
                "engine": "Credit Intelligence for Underserved v1.0"
            })
            return

        if path == "/api/v1/presets":
            presets = [
                {
                    "id": p["id"],
                    "name": p["name"],
                    "role": p["role"],
                    "headline": p["headline"],
                    "transaction_count": len(p["transactions"])
                }
                for p in PERSONAS.values()
            ]
            self.send_json(200, presets)
            return

        if path.startswith("/api/v1/presets/") and path.endswith("/score"):
            parts = path.split("/")
            preset_id = parts[4]
            if preset_id not in PERSONAS:
                self.send_json(404, {"error": f"Preset '{preset_id}' not found"})
                return

            persona = PERSONAS[preset_id]
            normalized = normalize_transactions(persona["transactions"])
            metrics = compute_behavioral_metrics(normalized)
            assessment = calculate_score(metrics, user_id=persona["id"])
            policy_result = PolicyDecisionEngine.evaluate_policy(assessment)
            assessment.decision = policy_result["policy_decision"]

            res = {
                "persona": {
                    "id": persona["id"],
                    "name": persona["name"],
                    "role": persona["role"],
                    "headline": persona["headline"]
                },
                "assessment": assessment,
                "policy": policy_result,
                "sample_transactions": [
                    {
                        "id": t.id,
                        "date": t.timestamp[:10],
                        "desc": t.merchant_clean,
                        "category": t.category,
                        "amount": t.amount,
                        "type": t.type,
                        "balance": t.balance_after
                    }
                    for t in normalized
                ]
            }
            self.send_json(200, res)
            return

        # Serve static frontend
        filepath = os.path.join(FRONTEND_DIR, "index.html" if path in ["", "/"] else path.lstrip("/"))
        if os.path.exists(filepath) and not os.path.isdir(filepath):
            mime_type, _ = mimetypes.guess_type(filepath)
            with open(filepath, "rb") as f:
                content = f.read()
            self.send_response(200)
            self.send_header("Content-Type", mime_type or "application/octet-stream")
            self.send_header("Content-Length", str(len(content)))
            self.end_headers()
            self.wfile.write(content)
        else:
            # Fallback to index.html for SPA routing
            index_file = os.path.join(FRONTEND_DIR, "index.html")
            if os.path.exists(index_file):
                with open(index_file, "rb") as f:
                    content = f.read()
                self.send_response(200)
                self.send_header("Content-Type", "text/html")
                self.send_header("Content-Length", str(len(content)))
                self.end_headers()
                self.wfile.write(content)
            else:
                self.send_json(404, {"error": "Not Found"})

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path.rstrip("/")
        content_len = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(content_len).decode("utf-8") if content_len > 0 else "{}"
        try:
            data = json.loads(body) if body else {}
        except Exception:
            data = {}

        if path == "/api/v1/auth/login":
            email_clean = data.get("email", "").strip().lower()
            password = data.get("password", "")
            if not email_clean or "@" not in email_clean:
                self.send_json(400, {"detail": "Please enter a valid email address."})
                return
            if not password or len(password) < 6:
                self.send_json(400, {"detail": "Password must be at least 6 characters long."})
                return

            if email_clean in USERS_DB:
                user = USERS_DB[email_clean]
                if user["password"] != password:
                    self.send_json(401, {"detail": "Invalid password. Please check your credentials."})
                    return
            else:
                user = {
                    "id": f"usr_{abs(hash(email_clean)) % 100000}",
                    "email": email_clean,
                    "name": email_clean.split("@")[0].replace(".", " ").title(),
                    "role": "Credit Intelligence User",
                    "account_type": "BORROWER"
                }
                USERS_DB[email_clean] = {**user, "password": password}

            token = f"bcm_jwt_{abs(hash(email_clean + password)) % 10000000}"
            self.send_json(200, {
                "status": "SUCCESS",
                "token": token,
                "user": {
                    "id": user["id"],
                    "email": user["email"],
                    "name": user["name"],
                    "role": user["role"],
                    "account_type": user["account_type"]
                },
                "message": "Welcome back! Authentication successful."
            })
            return

        if path == "/api/v1/auth/register":
            email_clean = data.get("email", "").strip().lower()
            password = data.get("password", "")
            full_name = data.get("full_name", "")
            account_type = data.get("account_type", "BORROWER")
            if not email_clean or "@" not in email_clean:
                self.send_json(400, {"detail": "Valid email is required."})
                return
            if not password or len(password) < 6:
                self.send_json(400, {"detail": "Password must be at least 6 characters."})
                return

            user = {
                "id": f"usr_{abs(hash(email_clean)) % 100000}",
                "email": email_clean,
                "name": full_name or email_clean.split("@")[0].title(),
                "password": password,
                "role": "Registered Account",
                "account_type": account_type
            }
            USERS_DB[email_clean] = user
            token = f"bcm_jwt_{abs(hash(email_clean + password)) % 10000000}"
            self.send_json(200, {
                "status": "SUCCESS",
                "token": token,
                "user": {
                    "id": user["id"],
                    "email": user["email"],
                    "name": user["name"],
                    "role": user["role"],
                    "account_type": user["account_type"]
                },
                "message": "Account created successfully."
            })
            return

        if path == "/api/v1/auth/forgot-password":
            email_clean = data.get("email", "").strip().lower()
            if not email_clean or "@" not in email_clean:
                self.send_json(400, {"detail": "Please enter a valid email address."})
                return
            self.send_json(200, {
                "status": "SUCCESS",
                "message": f"A secure password recovery link has been sent to {email_clean}."
            })
            return

        if path == "/api/v1/simulate":
            base_score = int(data.get("base_score", 650))
            buffer_days = float(data.get("buffer_days_adjustment", 0.0))
            discipline = float(data.get("discipline_adjustment", 0.0))
            volatility_pct = float(data.get("volatility_reduction_pct", 0.0))

            sim_result = simulate_what_if(
                base_score=base_score,
                buffer_days_adjustment=buffer_days,
                discipline_adjustment=discipline,
                volatility_reduction_pct=volatility_pct
            )
            self.send_json(200, sim_result)
            return

        if path == "/api/v1/transactions/ingest":
            user_id = data.get("user_id", "usr_custom")
            raw_txs = [
                RawTransaction(
                    id=t.get("id", f"tx_{i}"),
                    timestamp=t.get("timestamp", "2026-08-01T00:00:00Z"),
                    amount=float(t.get("amount", 0.0)),
                    type=t.get("type", "DEBIT"),
                    description=t.get("description", "Direct Transaction"),
                    balance_after=t.get("balance_after")
                )
                for i, t in enumerate(data.get("transactions", []))
            ]

            normalized = normalize_transactions(raw_txs)
            metrics = compute_behavioral_metrics(normalized)
            assessment = calculate_score(metrics, user_id=user_id)
            policy_result = PolicyDecisionEngine.evaluate_policy(assessment)
            assessment.decision = policy_result["policy_decision"]

            self.send_json(200, {
                "status": "SUCCESS",
                "processed_count": len(normalized),
                "user_id": user_id,
                "assessment": assessment,
                "policy": policy_result
            })
            return

        self.send_json(404, {"error": "Endpoint not found"})

def run_server(port=8000):
    handler = BCMRequestHandler
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"[*] BCM Server active at http://127.0.0.1:{port}")
        httpd.serve_forever()

if __name__ == "__main__":
    p = 8000
    if len(sys.argv) > 1:
        try:
            p = int(sys.argv[1])
        except ValueError:
            pass
    run_server(port=p)

