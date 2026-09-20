# BCM — Because Credit Matters
### Credit Intelligence for the Underserved

BCM is a consent-driven alternative credit intelligence engine designed to assess individuals and small businesses with limited or non-existent traditional credit bureau histories.

---

## 🎨 Theme & Design System
- **Evergreen (`#0E3B2E`)**: Primary brand identity, dark cards, elevated surfaces.
- **Sage Green (`#5FB88A`)**: Positive feature impact, score ring visualizer, success highlights.
- **Sandstone Cream (`#FAF7F1`)**: Warm, premium canvas background.
- **Deep Charcoal (`#2C2A28`)**: High-contrast typography and data points.

---

## 🏛 Clean Architecture Overview

```
BCM/
├── frontend/                     # Interactive Minimalist Dashboard
│   ├── index.html                # Preset selector, toggle, cards, "What-If" slider
│   ├── styles.css                # Spring micro-animations, glassmorphism design system
│   └── app.js                    # Reactive state, gauge renderer, sensitivity math
│
├── backend/                      # Ingestion & Underwriting Policy Layer
│   ├── main.py                   # Production FastAPI application & routes
│   ├── server.py                 # Zero-dependency HTTP server for instant demo
│   ├── models.py                 # Pydantic & MongoDB document schemas
│   ├── normalization.py          # Merchant categorization & stream sanitization
│   ├── policy.py                 # Rule-based decisioning & human review escalation
│   └── requirements.txt          # Production dependencies
│
├── ml/                           # Behavioral Feature Engineering & Modeling
│   ├── features.py               # Shannon entropy, volatility CV, payment discipline
│   ├── scorer.py                 # Calibrated 300–850 scoring engine & tiers
│   ├── explainability.py         # Factor contribution & attribution points generator
│   └── sample_data.py            # 4 real-world personas & transaction streams
│
├── run_demo.py                   # One-click launcher script
└── BCM_Prototype.zip             # Ready-to-submit standalone archive
```

---

## ⚡ Quick Start

### 1. Instant One-Click Run (Zero Setup)
```bash
python run_demo.py
```
This starts the local server and automatically launches `http://127.0.0.1:8000` in your browser.

### 2. Standalone Browser Run
You can also directly double-click `frontend/index.html` to open and test the complete interactive dashboard offline.

---

## 🌟 Hackathon Wow Moment
Instead of a single opaque score, BCM delivers a **transparent behavioral profile**:
- **Spending Predictability**: Measured via Shannon entropy of expenditure categories.
- **Payment Discipline Streak**: On-time utility, supplier, and micro-loan settlement ratios.
- **"What-If" Sensitivity Simulator**: Interactive slider showing real-time score and APR improvements.
- **Human-Review Triage**: Deterministic safety checks flagging volatile edge cases for underwriters.
