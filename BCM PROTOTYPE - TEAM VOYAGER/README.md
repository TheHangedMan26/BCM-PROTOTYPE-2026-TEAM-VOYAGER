# BCM — Because Credit Matters
> **Consent-driven alternative credit intelligence & bank statement financial health triage for underserved borrowers.**

---

## ⚡ How to Run on Your PC

You can run this project in **less than 1 minute** using either method below:

### Method 1: One-Click Python Launcher (Recommended)
Make sure you have **Python 3.10+** installed:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/bcm-credit-intelligence.git
cd "bcm-credit-intelligence"

# 2. Run the launcher script
python run_demo.py
```
> The application will start and automatically open **`http://127.0.0.1:8000`** in your browser.

---

### Method 2: Zero-Install Standalone Run (No Python Needed)
If you don't have Python or want to test instantly:
1. Open the project folder on your PC.
2. Double-click **`index.html`** to launch it directly in Chrome, Edge, Safari, or Firefox.
3. Everything runs 100% locally with built-in mock telemetry.

---

## 🔑 Demo Accounts (One-Click Login)

You can click any **⚡ Demo Account pill** on the login screen to auto-fill credentials instantly, or use the accounts below:

| Role / Segment | Name | Email | Password | Triage Flag |
| :--- | :--- | :--- | :--- | :--- |
| 🏦 **Bank Underwriter** | Alex Turner | `alex.turner@bcmcredit.io` | `Password123!` | *Underwriter Console* |
| 🛵 **Gig Worker** | Rohan M. | `rohan.m@bcmcredit.io` | `Password123!` | 🟡 **YELLOW** (Caution) |
| 🏪 **Kirana Store Owner** | Sunita K. | `sunita.k@bcmcredit.io` | `Password123!` | 🟢 **GREEN** (Prime) |
| 🎓 **Student / Gen-Z** | Aarav S. | `aarav.s@bcmcredit.io` | `Password123!` | 🟢 **GREEN** (Prime) |
| 🌾 **Agri Produce Trader** | Vikram R. | `vikram.r@bcmcredit.io` | `Password123!` | 🔴 **RED** (Cash Deficit) |

> 💡 **Shortcut**: Click **"Sign In"** without typing anything to immediately log into the active demo profile!

---

## 🧭 Key Features to Explore

1. **🚦 Financial Health Triage (Green / Yellow / Red)**:
   - **🟢 Green**: Safe to lend, pre-approved for instant working capital facility.
   - **🟡 Yellow**: Moderate risk, conditional sanction with tranche drawdowns & daily auto-debit.
   - **🔴 Red**: High risk, application halt with a structured 5-step AI recovery plan.
   - Toggle between **Weekly** and **Monthly** statement aggregations in the table.

2. **🧑‍💼 Borrower Persona Switcher**:
   - Switch between **Kirana**, **Gig Worker**, **Student**, and **Agri Trader** from the top bar to observe how telemetry, scores, and limits change.

3. **🔄 Perspective Toggle (Top Right)**:
   - **Borrower View**: Plain-language credit score, Shapley attribution cards, and interactive **"What-If"** simulator with annual interest savings in **₹ (INR)**.
   - **Bank View**: Policy rule checklist, underwriter override toolbar (`Approve Exception`, `Request Guarantor`, `Enforce Halt`), and timestamped audit logs.

4. **✨ Dynamic Cashflow Sandbox**:
   - Click **"✨ Open Dynamic Sandbox"** to customize turnover, volatility, and bounces in real time.

5. **🌐 English / Hindi Toggle**:
   - Click **"🌐 English / हिंदी"** in the top bar to switch language.

---

## 🧪 Running Automated Tests

Verify the deterministic financial health triage engine:
```bash
python test_triage.py
```
*(All 4 test suites pass with 100% OK status)*

---

## 📁 Project Structure

```
BCM/
├── index.html        # Main application dashboard & login experience
├── styles.css        # Fintech UI stylesheet (Evergreen & Sage theme)
├── app.js            # Reactive application logic & telemetry engine
├── run_demo.py       # One-click demo launcher
├── test_triage.py    # Automated test suite
├── backend/          # Backend API (FastAPI & zero-dependency server)
└── ml/               # Scoring models, feature engineering & sample data
```

---

## 📜 License
MIT License. Created for **BCM (Because Credit Matters)**.
