"""
BCM (Because Credit Matters) - FastAPI Core Application Server
Exposes Transaction Ingestion, Scoring, Simulation, and Underwriting APIs.
"""
import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from backend.models import (
    IngestionRequest, IngestionResponse,
    SimulationRequest, SimulationResponse,
    LoginRequest, RegisterRequest, ForgotPasswordRequest, AuthResponse
)
from backend.normalization import normalize_transactions
from backend.policy import PolicyDecisionEngine
from ml.features import compute_behavioral_metrics
from ml.scorer import calculate_score, simulate_what_if
from ml.sample_data import PERSONAS

app = FastAPI(
    title="BCM (Because Credit Matters) — Credit Intelligence API",
    description="Consent-driven alternative credit intelligence engine for underserved individuals and micro-businesses.",
    version="1.0.0"
)

# Enable CORS for frontend integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/v1/health")
def health_check():
    return {
        "status": "healthy",
        "brand": "BCM (Because Credit Matters)",
        "version": "1.0.0"
    }

@app.get("/api/v1/presets")
def get_presets():
    """Returns available borrower personas for hackathon demonstration."""
    return [
        {
            "id": p["id"],
            "name": p["name"],
            "role": p["role"],
            "headline": p["headline"],
            "transaction_count": len(p["transactions"])
        }
        for p in PERSONAS.values()
    ]

@app.post("/api/v1/transactions/ingest", response_model=IngestionResponse)
def ingest_and_score(request: IngestionRequest):
    """
    Core Ingestion & Scoring Pipeline:
    1. Normalizes raw transactions
    2. Computes behavioral metrics (entropy, volatility, discipline)
    3. Generates transparent credit score and explainability factors
    4. Evaluates underwriting policy decision
    """
    if not request.transactions:
        raise HTTPException(status_code=400, detail="Transaction list cannot be empty.")

    # 1. Normalization
    normalized = normalize_transactions(request.transactions)

    # 2. Behavioral Feature Engineering
    metrics = compute_behavioral_metrics(normalized)

    # 3. Alternative Credit Scoring & Explainability
    assessment = calculate_score(metrics, user_id=request.user_id)

    # 4. Underwriting Policy Engine
    policy_result = PolicyDecisionEngine.evaluate_policy(assessment)
    assessment.decision = policy_result["policy_decision"]

    return IngestionResponse(
        status="SUCCESS",
        processed_count=len(normalized),
        user_id=request.user_id,
        assessment=assessment
    )

@app.get("/api/v1/presets/{preset_id}/score")
def score_preset(preset_id: str):
    """Convenience endpoint to immediately score a pre-packaged persona."""
    if preset_id not in PERSONAS:
        raise HTTPException(status_code=404, detail=f"Preset persona '{preset_id}' not found.")

    persona = PERSONAS[preset_id]
    normalized = normalize_transactions(persona["transactions"])
    metrics = compute_behavioral_metrics(normalized)
    assessment = calculate_score(metrics, user_id=persona["id"])
    policy_result = PolicyDecisionEngine.evaluate_policy(assessment)
    assessment.decision = policy_result["policy_decision"]

    return {
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

@app.post("/api/v1/simulate", response_model=SimulationResponse)
def run_simulation(request: SimulationRequest):
    """What-If interactive simulator endpoint."""
    result = simulate_what_if(
        base_score=request.base_score,
        buffer_days_adjustment=request.buffer_days_adjustment,
        discipline_adjustment=request.discipline_adjustment,
        volatility_reduction_pct=request.volatility_reduction_pct
    )
    return SimulationResponse(**result)

# In-memory user store for prototype authentication
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
    },
    "sunita.k@bcmcredit.io": {
        "id": "usr_sunita_03",
        "email": "sunita.k@bcmcredit.io",
        "name": "Sunita K.",
        "password": "Password123!",
        "role": "Kirana Micro-Merchant",
        "account_type": "BORROWER"
    },
    "aarav.s@bcmcredit.io": {
        "id": "usr_aarav_04",
        "email": "aarav.s@bcmcredit.io",
        "name": "Aarav S.",
        "password": "Password123!",
        "role": "Student / Gen-Z",
        "account_type": "BORROWER"
    },
    "vikram.r@bcmcredit.io": {
        "id": "usr_vikram_05",
        "email": "vikram.r@bcmcredit.io",
        "name": "Vikram R.",
        "password": "Password123!",
        "role": "Agricultural Produce Trader",
        "account_type": "BORROWER"
    }
}

@app.post("/api/v1/auth/login")
def login(request: LoginRequest):
    """
    Authenticates user with email and password.
    Supports pre-seeded accounts and standard test credentials.
    """
    email_clean = request.email.strip().lower()
    if not email_clean or "@" not in email_clean:
        raise HTTPException(status_code=400, detail="Please enter a valid email address.")
    
    if not request.password or len(request.password) < 6:
        raise HTTPException(status_code=400, detail="Password must be at least 6 characters long.")

    # Check known users or accept valid demo password
    if email_clean in USERS_DB:
        user = USERS_DB[email_clean]
        if user["password"] != request.password:
            raise HTTPException(status_code=401, detail="Invalid password. Please check your credentials.")
    else:
        # Dynamic user provisioning for demo testing
        user = {
            "id": f"usr_{abs(hash(email_clean)) % 100000}",
            "email": email_clean,
            "name": email_clean.split("@")[0].replace(".", " ").title(),
            "role": "Credit Intelligence User",
            "account_type": "BORROWER"
        }
        USERS_DB[email_clean] = {**user, "password": request.password}

    token = f"bcm_jwt_{abs(hash(email_clean + request.password)) % 10000000}"
    return {
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
    }

@app.post("/api/v1/auth/register")
def register(request: RegisterRequest):
    """Registers a new user account."""
    email_clean = request.email.strip().lower()
    if not email_clean or "@" not in email_clean:
        raise HTTPException(status_code=400, detail="Valid email is required.")
    if not request.password or len(request.password) < 6:
        raise HTTPException(status_code=400, detail="Password must be at least 6 characters.")

    user = {
        "id": f"usr_{abs(hash(email_clean)) % 100000}",
        "email": email_clean,
        "name": request.full_name or email_clean.split("@")[0].title(),
        "password": request.password,
        "role": "Registered Account",
        "account_type": request.account_type
    }
    USERS_DB[email_clean] = user
    token = f"bcm_jwt_{abs(hash(email_clean + request.password)) % 10000000}"
    return {
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
    }

@app.post("/api/v1/auth/forgot-password")
def forgot_password(request: ForgotPasswordRequest):
    """Handles password reset request."""
    email_clean = request.email.strip().lower()
    if not email_clean or "@" not in email_clean:
        raise HTTPException(status_code=400, detail="Please enter a valid email address.")
    return {
        "status": "SUCCESS",
        "message": f"A secure password recovery link has been sent to {email_clean}."
    }

# Mount frontend directory if it exists
frontend_path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "frontend")
if os.path.exists(frontend_path):
    app.mount("/static", StaticFiles(directory=frontend_path), name="static")

    @app.get("/")
    def serve_index():
        return FileResponse(os.path.join(frontend_path, "index.html"))
