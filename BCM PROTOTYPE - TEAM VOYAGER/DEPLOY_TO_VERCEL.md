# 🚀 How to Deploy BCM to Vercel via GitHub (1-Click Guide)

This repository is pre-configured for **instant zero-configuration deployment** to Vercel via GitHub.

---

## 📋 Step-by-Step Instructions

### Step 1: Initialize Git & Push to GitHub
Open your terminal in this directory and run:

```bash
# 1. Initialize Git repository
git init

# 2. Add all files
git add .

# 3. Commit files
git commit -m "Initial commit: BCM Alternative Credit Intelligence"

# 4. Link to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/BCM.git

# 5. Push to GitHub
git branch -M main
git push -u origin main
```

---

### Step 2: Import & Deploy on Vercel

1. Go to **[vercel.com/new](https://vercel.com/new)**.
2. Select your **BCM** GitHub repository from the list and click **Import**.
3. In the **Configure Project** screen:
   - **Framework Preset**: Leave as `Other` (or `None`).
   - **Root Directory**: Leave as `./` (Default).
   - **Build and Output Settings**: Leave default.
   - **Environment Variables**: None required.
4. Click **Deploy**.

---

## 🌟 Why This Deployment Works Out-of-the-Box
* **Direct Root Index**: `index.html` is located right in the project root so Vercel never returns `404 NOT_FOUND`.
* **Clean Code Structure**: Dedicated folders (`frontend/`, `backend/`, and `ml/`) remain cleanly separated for judges and reviewers.
* **Serverless Backend Ready**: `api/index.py` and `vercel.json` automatically expose the FastAPI endpoints on Vercel's serverless infrastructure.
* **Offline Fallback**: Even without network connectivity, the frontend dashboard has embedded synthetic telemetry for all 4 personas.
