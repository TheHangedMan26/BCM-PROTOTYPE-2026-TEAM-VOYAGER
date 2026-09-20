import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * ============================================================================
 * BECAUSE CREDIT MATTERS (BCM) - ALTERNATIVE CREDIT INTELLIGENCE
 * Feature 1: Persona-Adaptive Onboarding & Consent Flow
 * Feature 2: 5th Dynamic Profile - Custom Sandbox Simulator
 *
 * Technologies: React, Tailwind CSS, Framer Motion
 * Design Palette: Evergreen (#0E3B2E), Sage (#5FB88A), Sandstone (#FAF7F1)
 * Currency: Indian Rupee (₹)
 * Institutional Stakeholder: Banks / Underwriters
 * ============================================================================
 */

// ============================================================================
// FEATURE 1: PERSONA-ADAPTIVE ONBOARDING FLOW
// ============================================================================

export const BORROWER_PERSONAS = [
  {
    id: "kirana_merchant",
    title: "Micro-Vendor / Kirana",
    icon: "🏪",
    tagline: "High daily inventory turn & retail commerce",
    presetKey: "kirana_merchant"
  },
  {
    id: "gig_worker",
    title: "Gig Economy Worker",
    icon: "🛵",
    tagline: "Mobility & delivery partner with weekly payouts",
    presetKey: "gig_worker"
  },
  {
    id: "thin_file_fresher",
    title: "Student / Gen-Z (New-to-Credit)",
    icon: "🎓",
    tagline: "College student with UPI pocket money & stipends",
    presetKey: "thin_file_fresher"
  },
  {
    id: "seasonal_trader",
    title: "Agri / Seasonal Artisan",
    icon: "🌾",
    tagline: "Cyclical harvest or handcrafted artisanal trades",
    presetKey: "seasonal_trader"
  }
];

export function PersonaAdaptiveOnboarding({ onCompleteOnboarding }) {
  const [selectedPersona, setSelectedPersona] = useState("kirana_merchant");
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [consentChecked, setConsentChecked] = useState(true);

  // Form Fields
  const [formData, setFormData] = useState({
    businessName: "Radhe Shyam General Store",
    dailyTurnover: "2800",
    qrProvider: "PhonePe QR",
    institution: "Delhi University",
    yearOfStudy: "3rd Year B.Com",
    monthlyStipend: "12000",
    familyIncomeBand: "3L_8L",
    parentalProfession: "Salaried Government Service",
    cropCraft: "Organic Wheat & Spices",
    inflowCycle: "Quarterly Post-Harvest"
  });

  const handleFieldChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInitiateVerification = (e) => {
    e.preventDefault();
    setIsTermsModalOpen(true);
  };

  const handleConfirmConsent = () => {
    if (!consentChecked) {
      alert("Please confirm Account Aggregator authorization to continue.");
      return;
    }
    // Persist active persona to application state & localStorage
    localStorage.setItem("bcm_active_persona", selectedPersona);
    setIsTermsModalOpen(false);
    if (onCompleteOnboarding) {
      onCompleteOnboarding(selectedPersona, formData);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#FAF7F1] border border-[#E6E0D4] rounded-2xl p-6 sm:p-8 shadow-xl text-[#1F2937]">
      {/* Header */}
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0E3B2E]/10 text-[#0E3B2E] border border-[#0E3B2E]/20 mb-2">
          Step 1: Borrower Profile Classification
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0E3B2E]">
          Persona-Adaptive Onboarding
        </h2>
        <p className="text-sm text-[#4B5563] mt-1">
          Select your primary operating niche so Bank underwriting models adapt to your verified cashflow telemetry.
        </p>
      </div>

      {/* Persona Selector Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {BORROWER_PERSONAS.map((p) => {
          const isSelected = selectedPersona === p.id;
          return (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedPersona(p.id)}
              className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 flex items-start gap-3 ${
                isSelected
                  ? "border-[#0E3B2E] bg-[#0E3B2E]/5 ring-2 ring-[#0E3B2E]/20 shadow-sm"
                  : "border-[#E5E7EB] bg-white hover:border-[#5FB88A]"
              }`}
            >
              <span className="text-2xl p-2 rounded-lg bg-sandstone border border-[#E6E0D4]">
                {p.icon}
              </span>
              <div>
                <h4 className="font-semibold text-sm text-[#0E3B2E]">{p.title}</h4>
                <p className="text-xs text-[#6B7280] mt-0.5 leading-snug">{p.tagline}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Dynamic Adaptive Fields Form */}
      <form onSubmit={handleInitiateVerification} className="space-y-4">
        <AnimatePresence mode="wait">
          {/* Vendor / Gig Fields */}
          {(selectedPersona === "kirana_merchant" || selectedPersona === "gig_worker") && (
            <motion.div
              key="vendor-gig"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-4 rounded-xl border border-[#E5E7EB] space-y-3"
            >
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#0E3B2E]">
                Business & Settlement Telemetry
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Registered Trade / Entity Name
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleFieldChange("businessName", e.target.value)}
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0E3B2E]"
                    placeholder="Store / Partner Handle"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Average Daily Turnover (₹)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500 font-semibold text-sm">₹</span>
                    <input
                      type="number"
                      value={formData.dailyTurnover}
                      onChange={(e) => handleFieldChange("dailyTurnover", e.target.value)}
                      required
                      className="w-full pl-7 pr-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0E3B2E]"
                      placeholder="2,500"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Primary Settlement Channel / QR Provider
                </label>
                <select
                  value={formData.qrProvider}
                  onChange={(e) => handleFieldChange("qrProvider", e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0E3B2E]"
                >
                  <option value="PhonePe QR">PhonePe Merchant QR (Settled Daily)</option>
                  <option value="BharatPe QR">BharatPe Club QR (Instant Settlement)</option>
                  <option value="Google Pay Business">Google Pay for Business</option>
                  <option value="Paytm Soundbox">Paytm Soundbox POS QR</option>
                  <option value="Direct UPI VPA">Direct Bank UPI Handle</option>
                </select>
              </div>
            </motion.div>
          )}

          {/* Student / Gen-Z Fields */}
          {selectedPersona === "thin_file_fresher" && (
            <motion.div
              key="student-fields"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-4 rounded-xl border border-[#E5E7EB] space-y-3"
            >
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#0E3B2E]">
                Student & Household Economic Proxy
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Educational Institution & Year
                  </label>
                  <input
                    type="text"
                    value={formData.institution}
                    onChange={(e) => handleFieldChange("institution", e.target.value)}
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0E3B2E]"
                    placeholder="e.g. IIT Bombay / Final Year B.Tech"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Monthly Pocket Money / Stipend (₹)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500 font-semibold text-sm">₹</span>
                    <input
                      type="number"
                      value={formData.monthlyStipend}
                      onChange={(e) => handleFieldChange("monthlyStipend", e.target.value)}
                      required
                      className="w-full pl-7 pr-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0E3B2E]"
                      placeholder="12,000"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Household Annual Income Band
                  </label>
                  <select
                    value={formData.familyIncomeBand}
                    onChange={(e) => handleFieldChange("familyIncomeBand", e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0E3B2E]"
                  >
                    <option value="LT_3L">&lt; ₹3,00,000 / year</option>
                    <option value="3L_8L">₹3,00,000 – ₹8,00,000 / year</option>
                    <option value="GT_8L">&gt; ₹8,00,000 / year</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Parental Profession (Proxy Underwriting)
                  </label>
                  <input
                    type="text"
                    value={formData.parentalProfession}
                    onChange={(e) => handleFieldChange("parentalProfession", e.target.value)}
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0E3B2E]"
                    placeholder="e.g. Salaried Corporate / State Service"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Agri / Seasonal Artisan Fields */}
          {selectedPersona === "seasonal_trader" && (
            <motion.div
              key="agri-fields"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="bg-white p-4 rounded-xl border border-[#E5E7EB] space-y-3"
            >
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#0E3B2E]">
                Agricultural / Craft Cycle Telemetry
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Primary Crop / Craft Commodity
                  </label>
                  <input
                    type="text"
                    value={formData.cropCraft}
                    onChange={(e) => handleFieldChange("cropCraft", e.target.value)}
                    required
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0E3B2E]"
                    placeholder="e.g. Basmati Paddy / Terracotta"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Cash Realization Frequency
                  </label>
                  <select
                    value={formData.inflowCycle}
                    onChange={(e) => handleFieldChange("inflowCycle", e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0E3B2E]"
                  >
                    <option value="Biannual Mandi Settlement">Biannual Mandi Settlement (Kharif / Rabi)</option>
                    <option value="Quarterly Post-Harvest">Quarterly Post-Harvest Consignment</option>
                    <option value="Monthly Contract Payout">Monthly Farm Contract / Milk Society</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#0E3B2E] text-white font-medium rounded-xl hover:bg-[#124b3b] transition shadow-md flex items-center justify-center gap-2"
        >
          <span>Continue to Bank Consent Governance</span>
          <span>&rarr;</span>
        </button>
      </form>

      {/* Modal: Terms & Account Aggregator Data Governance */}
      <AnimatePresence>
        {isTermsModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-200"
            >
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-4">
                <span className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-xl border border-emerald-100">
                  🛡️
                </span>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#0E3B2E]">
                    Account Aggregator Data Governance & Consent
                  </h3>
                  <p className="text-xs text-gray-500">RBI Licensed Account Aggregator (AA) Framework</p>
                </div>
              </div>

              <div className="bg-[#FAF7F1] p-3.5 rounded-xl border border-[#E6E0D4] text-xs text-gray-700 space-y-1.5 mb-4">
                <div className="font-semibold text-[#0E3B2E]">Selected Borrower Profile:</div>
                <div className="font-medium text-gray-900">
                  {BORROWER_PERSONAS.find(p => p.id === selectedPersona)?.title}
                </div>
                <div className="text-[11px] text-gray-600">
                  Data Scope: Read-only encrypted telemetry (UPI QR velocity, NACH mandate punctuality, statement cashflow entropy). Zero credentials stored.
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-gray-600 mb-5 max-h-40 overflow-y-auto pr-1">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Deterministic Auditing:</strong> Cashflow health evaluated by RBI-supervised automated underwriting rules.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Revocable Consent:</strong> You retain the statutory right to freeze or revoke AA telemetry access at any moment.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Bank-Direct Underwriting:</strong> Facilitates instant credit line sans third-party predatory middlemen.</span>
                </div>
              </div>

              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-gray-800 mb-6 bg-gray-50 p-3 rounded-lg border border-gray-200">
                <input
                  type="checkbox"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  className="mt-0.5 rounded text-[#0E3B2E] focus:ring-[#0E3B2E]"
                />
                <span>
                  I grant explicit, electronic, revocable consent to ingest bank statement and UPI telemetry for alternative credit intelligence.
                </span>
              </label>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsTermsModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmConsent}
                  className="px-5 py-2.5 text-xs font-semibold bg-[#0E3B2E] text-white rounded-xl hover:bg-[#124b3b] shadow-sm transition"
                >
                  Confirm & Enter Dashboard
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// FEATURE 2: 5TH DYNAMIC PROFILE - CUSTOM SANDBOX SIMULATOR
// ============================================================================

export function CustomSandboxSimulator() {
  const [params, setParams] = useState({
    revenue: 2500,
    volatility: "low", // 'low' (0.15) | 'medium' (0.42) | 'high' (0.85)
    bounces: 0,        // 0 | 1 | 2
    surplus: 35,       // 10 to 50 (%)
    studentMode: false,
    stipend: 12000,
    familyTier: "mid"  // 'low' | 'mid' | 'high'
  });

  // Reactive Math Engine: 300 - 900 BCM Score Calculation
  const evaluation = useMemo(() => {
    const revScore = Math.min(160, Math.round(((params.revenue - 500) / 29500) * 160));
    const volScore = params.volatility === "low" ? 50 : params.volatility === "medium" ? 0 : -75;
    const bounceScore = params.bounces === 0 ? 45 : params.bounces === 1 ? -45 : -190;
    const surplusScore = Math.round(((params.surplus - 10) / 40) * 65) - 20;

    let studentBonus = 0;
    if (params.studentMode) {
      const stipendBonus = Math.round(((params.stipend - 2000) / 38000) * 30);
      const familyBonus = params.familyTier === "high" ? 25 : params.familyTier === "mid" ? 10 : -10;
      studentBonus = stipendBonus + familyBonus;
    }

    let calculatedScore = Math.round(560 + revScore + volScore + bounceScore + surplusScore + studentBonus);
    calculatedScore = Math.max(320, Math.min(885, calculatedScore));

    // Hard Rules & Underwriting Guardrails:
    if (params.bounces >= 2) {
      calculatedScore = Math.min(calculatedScore, 540); // Strict RED locked
    } else if (params.bounces === 1) {
      calculatedScore = Math.min(calculatedScore, 695); // Cannot be Prime Green
    }

    // Triage Gate Assignment
    let flag = "GREEN";
    let badgeClass = "bg-emerald-50 text-emerald-800 border-emerald-300";
    let triageTag = "🟢 Auto-Sanction STP (Prime)";
    let action = "Pre-approved for instant working capital facility; auto-disbursement eligible.";
    let actionShort = "Auto-Sanction STP";

    if (params.bounces >= 2 || calculatedScore < 580) {
      flag = "RED";
      badgeClass = "bg-rose-50 text-rose-800 border-rose-300";
      triageTag = "🔴 Credit Gate Locked (High Risk)";
      action = "Credit Gate Locked: High volatility or NACH bounce threshold breach. Rehabilitation advisory active.";
      actionShort = "Credit Gate Locked";
    } else if (params.bounces === 1 || calculatedScore < 720 || params.volatility === "high") {
      flag = "YELLOW";
      badgeClass = "bg-amber-50 text-amber-800 border-amber-300";
      triageTag = "🟡 Conditional Sanction (Moderate Risk)";
      action = "Conditional sanction with tranche-based drawdowns and daily auto-debit collection.";
      actionShort = "Tranche Drawdown WFL";
    }

    // Derived Financial Metrics
    const volFactor = params.volatility === "low" ? 1.15 : params.volatility === "medium" ? 0.95 : 0.72;
    const dscrVal = ((1.0 + (params.surplus / 100) * 1.45) * volFactor).toFixed(2);

    let recLimit = 0;
    if (flag === "GREEN") {
      recLimit = Math.max(5000, Math.round((params.revenue * 3.6) / 500) * 500);
    } else if (flag === "YELLOW") {
      recLimit = Math.max(2500, Math.round((params.revenue * 1.8) / 500) * 500);
    } else {
      recLimit = 0;
    }

    let estApr = 12.0;
    if (flag === "GREEN") {
      estApr = (11.0 + (885 - calculatedScore) * 0.018).toFixed(1);
    } else if (flag === "YELLOW") {
      estApr = (15.2 + (720 - calculatedScore) * 0.026).toFixed(1);
    } else {
      estApr = (21.5 + (580 - calculatedScore) * 0.02).toFixed(1);
    }

    return {
      score: calculatedScore,
      flag,
      badgeClass,
      triageTag,
      action,
      actionShort,
      dscrVal,
      recLimit,
      estApr
    };
  }, [params]);

  // Dynamic 7-Day Mock Statement Ledger Generator
  const mockLedger = useMemo(() => {
    const dates = ["14 Sep", "15 Sep", "16 Sep", "17 Sep", "18 Sep", "19 Sep", "20 Sep"];
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const volMult = params.volatility === "low" ? 0.08 : params.volatility === "medium" ? 0.25 : 0.55;

    let balance = Math.round(params.revenue * 5.5);
    const txs = [];

    for (let i = 0; i < 7; i++) {
      const wave = Math.sin((i + 1) * 1.5);
      let creditAmt = Math.round(params.revenue * (1 + wave * volMult));
      creditAmt = Math.max(200, creditAmt);
      balance += creditAmt;

      // Credit entry
      txs.push({
        id: `tx_${i}_cr`,
        date: `${dates[i]} (2026)`,
        desc: `Daily UPI Merchant Settlement (${days[i]})`,
        category: "INCOME",
        amount: creditAmt,
        type: "CREDIT",
        balance: balance
      });

      // Debit entry
      const outflowRatio = 1 - (params.surplus / 100);
      const debitAmt = Math.round(creditAmt * outflowRatio * (0.85 + ((i % 3) * 0.1)));
      if (debitAmt > 0) {
        balance -= debitAmt;
        const descs = [
          "Supplier Inventory Replenishment",
          "Platform & Utility Charges",
          "Commercial Fuel & Logistics",
          "Operational Sundries"
        ];
        txs.push({
          id: `tx_${i}_dr`,
          date: `${dates[i]} (2026)`,
          desc: descs[i % descs.length],
          category: "OPERATING",
          amount: debitAmt,
          type: "DEBIT",
          balance: balance
        });
      }

      // NACH Bounce
      if (params.bounces >= 1 && (i === 2 || (params.bounces >= 2 && i === 5))) {
        const bounceFee = 450.0;
        balance -= bounceFee;
        txs.push({
          id: `tx_${i}_bnc`,
          date: `${dates[i]} (2026)`,
          desc: "⚠️ NACH Mandate Return Penalty (Insufficient Funds)",
          category: "BOUNCE_PENALTY",
          amount: bounceFee,
          type: "DEBIT",
          balance: balance
        });
      }
    }

    return txs.slice(-7);
  }, [params]);

  return (
    <div className="w-full bg-[#FAF7F1] border-2 border-[#5FB88A]/60 rounded-2xl p-6 sm:p-8 shadow-xl text-[#1F2937]">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E6E0D4] pb-5 mb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0E3B2E] text-[#FAF7F1]">
            ✨ Interactive Underwriting Sandbox
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0E3B2E] mt-1">
            Live Cashflow Parameter Tuning Drawer
          </h3>
          <p className="text-xs text-gray-600 mt-0.5">
            Adjust telemetry inputs in real-time. Watch BCM's 300–900 scoring algorithm, Bank triage gate, and statement ledger react dynamically.
          </p>
        </div>

        {/* Live Reactive Badge & Score */}
        <div className="flex items-center gap-4 bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm shrink-0">
          <div className="text-right">
            <div className="text-[11px] font-semibold text-gray-500 uppercase">Live BCM Score</div>
            <div className="text-2xl font-extrabold text-[#0E3B2E] leading-tight">
              {evaluation.score}
            </div>
          </div>
          <div className={`px-3 py-1.5 rounded-lg border text-xs font-semibold ${evaluation.badgeClass}`}>
            {evaluation.triageTag}
          </div>
        </div>
      </div>

      {/* Control Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Control 1: Daily Revenue */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-xs font-medium">
            <span className="text-gray-700 font-semibold">Daily Revenue / Inflow</span>
            <span className="text-[#0E3B2E] font-bold text-sm">
              ₹{params.revenue.toLocaleString()} / day
            </span>
          </div>
          <input
            type="range"
            min="500"
            max="30000"
            step="250"
            value={params.revenue}
            onChange={(e) => setParams(p => ({ ...p, revenue: parseInt(e.target.value, 10) }))}
            className="w-full accent-[#0E3B2E] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-gray-400 font-mono">
            <span>₹500</span>
            <span>₹10,000</span>
            <span>₹20,000</span>
            <span>₹30,000</span>
          </div>
        </div>

        {/* Control 2: Inflow Volatility */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-xs font-medium">
            <span className="text-gray-700 font-semibold">Inflow Volatility (CV)</span>
            <span className="text-[#0E3B2E] font-bold text-sm">
              {params.volatility === "low" ? "Low (0.15)" : params.volatility === "medium" ? "Medium (0.42)" : "High (0.85)"}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "low", label: "Low (0.15)" },
              { id: "medium", label: "Med (0.42)" },
              { id: "high", label: "High (0.85)" }
            ].map(v => (
              <button
                key={v.id}
                type="button"
                onClick={() => setParams(p => ({ ...p, volatility: v.id }))}
                className={`py-1.5 text-xs font-medium rounded-lg border transition ${
                  params.volatility === v.id
                    ? "bg-[#0E3B2E] text-white border-[#0E3B2E]"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
          <div className="text-[11px] text-gray-500">
            High volatility heavily penalizes cashflow predictability.
          </div>
        </div>

        {/* Control 3: NACH Bounces */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-xs font-medium">
            <span className="text-gray-700 font-semibold">Mandate / NACH Bounces (90d)</span>
            <span className={`font-bold text-sm ${params.bounces === 0 ? "text-emerald-700" : params.bounces === 1 ? "text-amber-700" : "text-rose-700"}`}>
              {params.bounces === 0 ? "0 Bounces" : params.bounces === 1 ? "1 Delay" : "2+ Bounces"}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { val: 0, label: "0 Bounces" },
              { val: 1, label: "1 Delay" },
              { val: 2, label: "2+ Bounces" }
            ].map(b => (
              <button
                key={b.val}
                type="button"
                onClick={() => setParams(p => ({ ...p, bounces: b.val }))}
                className={`py-1.5 text-xs font-medium rounded-lg border transition ${
                  params.bounces === b.val
                    ? "bg-[#0E3B2E] text-white border-[#0E3B2E]"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
          <div className="text-[11px] text-gray-500">
            ≥2 bounces immediately triggers Red Credit Gate Lock.
          </div>
        </div>

        {/* Control 4: Free Surplus Margin */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-xs font-medium">
            <span className="text-gray-700 font-semibold">Free Operating Surplus (DSCR)</span>
            <span className="text-[#0E3B2E] font-bold text-sm">
              {params.surplus}% Margin
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="50"
            step="5"
            value={params.surplus}
            onChange={(e) => setParams(p => ({ ...p, surplus: parseInt(e.target.value, 10) }))}
            className="w-full accent-[#0E3B2E] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-gray-400 font-mono">
            <span>10% (Tight)</span>
            <span>25% (Balanced)</span>
            <span>40%</span>
            <span>50% (Comfort)</span>
          </div>
        </div>
      </div>

      {/* Student / Gen-Z Proxy Matrix Toggle & Addon */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={params.studentMode}
            onChange={(e) => setParams(p => ({ ...p, studentMode: e.target.checked }))}
            className="h-4 w-4 rounded text-[#0E3B2E] focus:ring-[#0E3B2E]"
          />
          <div>
            <span className="text-xs font-bold text-[#0E3B2E] uppercase tracking-wide">
              🎓 Enable Student / Gen-Z Proxy Underwriting Matrix
            </span>
            <p className="text-[11px] text-gray-500">
              Factor in regular UPI pocket money / stipends and household economic tiers for thin-file freshers.
            </p>
          </div>
        </label>

        {params.studentMode && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span>Monthly Allowance / Stipend</span>
                <span className="text-[#0E3B2E] font-bold">₹{params.stipend.toLocaleString()} / mo</span>
              </div>
              <input
                type="range"
                min="2000"
                max="40000"
                step="1000"
                value={params.stipend}
                onChange={(e) => setParams(p => ({ ...p, stipend: parseInt(e.target.value, 10) }))}
                className="w-full accent-[#0E3B2E] cursor-pointer"
              />
            </div>
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span>Family Economic Tier</span>
                <span className="text-[#0E3B2E] font-bold">
                  {params.familyTier === "low" ? "< ₹3L" : params.familyTier === "mid" ? "₹3L – ₹8L" : "> ₹8L"} / yr
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "low", label: "< ₹3L" },
                  { id: "mid", label: "₹3L–₹8L" },
                  { id: "high", label: "> ₹8L" }
                ].map(f => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setParams(p => ({ ...p, familyTier: f.id }))}
                    className={`py-1 text-xs font-medium rounded-lg border transition ${
                      params.familyTier === f.id
                        ? "bg-[#0E3B2E] text-white border-[#0E3B2E]"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Reactive Output Quick Telemetry Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#FAF7F1] p-3 rounded-xl border border-[#E6E0D4] mb-6">
        <div className="text-center p-2 rounded-lg bg-white border border-gray-200">
          <div className="text-[10px] uppercase font-semibold text-gray-500">Calculated DSCR</div>
          <div className="text-base font-extrabold text-[#0E3B2E]">{evaluation.dscrVal}x</div>
        </div>
        <div className="text-center p-2 rounded-lg bg-white border border-gray-200">
          <div className="text-[10px] uppercase font-semibold text-gray-500">Recommended Limit</div>
          <div className="text-base font-extrabold text-[#0E3B2E]">
            {evaluation.flag === "RED" ? "₹0 (Locked)" : `₹${evaluation.recLimit.toLocaleString()}`}
          </div>
        </div>
        <div className="text-center p-2 rounded-lg bg-white border border-gray-200">
          <div className="text-[10px] uppercase font-semibold text-gray-500">Estimated APR</div>
          <div className="text-base font-extrabold text-[#0E3B2E]">{evaluation.estApr}%</div>
        </div>
        <div className="text-center p-2 rounded-lg bg-white border border-gray-200">
          <div className="text-[10px] uppercase font-semibold text-gray-500">Bank Action</div>
          <div className="text-xs font-bold truncate text-[#0E3B2E]">{evaluation.actionShort}</div>
        </div>
      </div>

      {/* Dynamic 7-Day Mock Statement Ledger Generator */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="px-4 py-3 bg-[#FAF7F1] border-b border-gray-200 flex justify-between items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0E3B2E]">
            Dynamic 7-Day Mock Statement Ledger (Simulated Telemetry)
          </span>
          <span className="text-[11px] text-gray-500">Synced to Live Tuner Numbers</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 border-b border-gray-100 text-[11px] uppercase tracking-wider text-gray-500 font-medium">
              <tr>
                <th className="px-4 py-2.5">Date</th>
                <th className="px-4 py-2.5">Transaction Narrative</th>
                <th className="px-4 py-2.5">Category</th>
                <th className="px-4 py-2.5 text-right">Amount</th>
                <th className="px-4 py-2.5 text-right">Account Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 font-mono text-[11px]">
              {mockLedger.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50/80 transition">
                  <td className="px-4 py-2 text-gray-600 font-sans">{tx.date}</td>
                  <td className="px-4 py-2 text-gray-900 font-sans font-medium">{tx.desc}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-sans font-semibold ${
                      tx.category === "INCOME"
                        ? "bg-emerald-50 text-emerald-700"
                        : tx.category === "BOUNCE_PENALTY"
                        ? "bg-rose-50 text-rose-700 font-bold"
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {tx.category}
                    </span>
                  </td>
                  <td className={`px-4 py-2 text-right font-bold ${
                    tx.type === "CREDIT" ? "text-emerald-700" : "text-rose-600"
                  }`}>
                    {tx.type === "CREDIT" ? "+" : "-"}₹{tx.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-2 text-right text-gray-700">
                    ₹{tx.balance.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
