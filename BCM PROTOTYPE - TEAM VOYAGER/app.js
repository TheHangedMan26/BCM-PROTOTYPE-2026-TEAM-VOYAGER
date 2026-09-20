/**
 * BCM (Because Credit Matters) - Premium Interactive Controller
 * Features:
 * - Dynamic Ambient Canvas Particles & Light Waves
 * - Multi-Stage Cyber Verification Sequence
 * - Confetti Burst Engine
 * - Interactive Accordion Deep-Dive Cards
 * - Real-Time "What-If" Sensitivity Simulator with Live $ Savings Counter
 */

// Pre-packaged high-fidelity persona telemetry sets
const LOCAL_FALLBACK_DATA = {
  gig_worker: {
    persona: { id: "gig_worker", name: "Rohan M.", role: "Platform Mobility & Delivery Partner", headline: "High payment discipline with volatile weekly gig disbursements", initials: "RM" },
    assessment: {
      score: 734,
      tier: "TIER_B",
      decision: "APPROVE",
      recommended_limit: 6500.0,
      indicative_apr: 14.8,
      confidence_score: 0.92,
      behavioral_metrics: {
        cashflow_entropy: 0.42,
        income_volatility: 0.54,
        payment_discipline_index: 92.0,
        business_activity_velocity: 64.0,
        debt_stress_ratio: 0.22,
        liquidity_buffer_days: 14.2
      },
      explainability: [
        { feature_name: "payment_discipline", display_name: "Payment Discipline & Obligation Punctuality", impact_points: 48, direction: "POSITIVE", summary: "Flawless recurring settlement streak with 92% punctuality rate across fuel, utilities, and two-wheeler EMI.", raw_metric: "92.0% Punctual", formula: "PDI = max(10, ρ × 92 - 15 × N_overdraft)", note: "Demonstrates consistent willingness to pay without traditional credit history." },
        { feature_name: "cashflow_entropy", display_name: "High Expenditure Predictability", impact_points: 32, direction: "POSITIVE", summary: "Low categorical entropy (0.42) demonstrates structured, non-chaotic operating expenditures.", raw_metric: "Entropy: 0.42 / 1.00", formula: "H(C) = -∑ p_k log2(p_k) / log2(K)", note: "Concentrated budget allocation in essentials indicates disciplined spending." },
        { feature_name: "income_stability", display_name: "Variable Gig Inflows", impact_points: 12, direction: "POSITIVE", summary: "Weekly disbursement volatility (0.54) mitigated by consistent multihoming on delivery platforms.", raw_metric: "CV: 0.54", formula: "CV = σ_in / μ_in", note: "Variance compensated by continuous weekly incoming cash velocity." },
        { feature_name: "liquidity_cushion", display_name: "Adequate Operating Float", impact_points: 8, direction: "POSITIVE", summary: "Holds 14.2 days of operational expense reserves in liquid cash.", raw_metric: "14.2 Days Runway", formula: "R_t = Balance / Daily_Outflow", note: "Sufficient buffer to absorb brief demand slumps." },
        { feature_name: "debt_stress", display_name: "Unencumbered Free Cash-Flow", impact_points: 22, direction: "POSITIVE", summary: "Fixed debt and rent absorb only 22% of gross monthly inflows.", raw_metric: "22% Inflow Burden", formula: "DISR = Fixed_Debt / Total_Inflow", note: "Low leverage allows flexible liquidity turnaround." }
      ],
      flagged_for_human_review: false,
      review_reasons: []
    },
    policy: {
      policy_decision: "APPROVE",
      escalated_to_underwriter: false,
      policy_checks: [
        { rule_id: "POL-LIQ-01", name: "Minimum Liquidity Floor", status: "PASS", detail: "Sufficient liquidity runway (14.2 days vs 7.0d benchmark)." },
        { rule_id: "POL-DEBT-02", name: "Maximum Debt-Service Ratio", status: "PASS", detail: "Debt servicing remains safely within bounds (22% vs 40% cap)." },
        { rule_id: "POL-DISC-03", name: "Recurring Punctuality Benchmark", status: "PASS", detail: "Exemplary payment punctuality at 92.0%." },
        { rule_id: "POL-VOL-04", name: "Inflow Stability & Velocity Parity", status: "PASS", detail: "Active gig frequency provides compensatory revenue velocity." }
      ],
      underwriter_notes: ["Automated clearance under BCM Alternative Risk Model. Prime candidate for unsecured micro-credit line."]
    },
    sample_transactions: [
      { id: "tx_g01", date: "2026-08-01", desc: "Uber Driver Payout", category: "INCOME", amount: 420.0, type: "CREDIT", balance: 580.0 },
      { id: "tx_g03", date: "2026-08-05", desc: "Electricity Board Utility", category: "UTILITY", amount: 65.0, type: "DEBIT", balance: 480.0 },
      { id: "tx_g05", date: "2026-08-10", desc: "Bajaj Two Wheeler EMI", category: "LOAN_REPAYMENT", amount: 120.0, type: "DEBIT", balance: 740.0 },
      { id: "tx_g07", date: "2026-08-15", desc: "Uber Driver Payout", category: "INCOME", amount: 410.0, type: "CREDIT", balance: 1105.0 },
      { id: "tx_g10", date: "2026-08-25", desc: "House Rent To Landlord", category: "RENT", amount: 250.0, type: "DEBIT", balance: 1210.0 }
    ]
  },
  kirana_merchant: {
    persona: { id: "kirana_merchant", name: "Sunita K.", role: "Kirana Micro-Merchant Store Owner", headline: "High daily commerce volume, disciplined inventory replenishment", initials: "SK" },
    assessment: {
      score: 785,
      tier: "TIER_A",
      decision: "APPROVE",
      recommended_limit: 10000.0,
      indicative_apr: 11.5,
      confidence_score: 0.96,
      behavioral_metrics: {
        cashflow_entropy: 0.38,
        income_volatility: 0.28,
        payment_discipline_index: 96.0,
        business_activity_velocity: 88.0,
        debt_stress_ratio: 0.15,
        liquidity_buffer_days: 28.5
      },
      explainability: [
        { feature_name: "payment_discipline", display_name: "Exemplary Supplier Settlement Record", impact_points: 48, direction: "POSITIVE", summary: "96% on-time distributor replenishment with zero supplier defaults.", raw_metric: "96.0% Punctual", formula: "PDI = 96.0", note: "Flawless supplier invoice clearing history." },
        { feature_name: "cashflow_entropy", display_name: "Strict Working Capital Cycle", impact_points: 32, direction: "POSITIVE", summary: "Predictable, concentrated cash recycling into inventory turnover.", raw_metric: "Entropy: 0.38 / 1.00", formula: "H(C) = 0.38", note: "Highly concentrated in FMCG supplier replenishment." },
        { feature_name: "income_stability", display_name: "High Cadence Daily Commerce", impact_points: 38, direction: "POSITIVE", summary: "Sustained daily UPI/POS settlement velocity with negligible volatility (0.28).", raw_metric: "CV: 0.28", formula: "CV = 0.28", note: "Daily UPI QR customer receipts buffer revenue flow." },
        { feature_name: "liquidity_cushion", display_name: "Strong Reserve Buffer", impact_points: 25, direction: "POSITIVE", summary: "Maintains 28.5 days of operational float for stock buffer.", raw_metric: "28.5 Days Runway", formula: "R_t = 28.5d", note: "High safety buffer against supply disruptions." }
      ],
      flagged_for_human_review: false,
      review_reasons: []
    },
    policy: {
      policy_decision: "APPROVE",
      escalated_to_underwriter: false,
      policy_checks: [
        { rule_id: "POL-LIQ-01", name: "Minimum Liquidity Floor", status: "PASS", detail: "Excellent liquidity runway (28.5 days)." },
        { rule_id: "POL-DEBT-02", name: "Maximum Debt-Service Ratio", status: "PASS", detail: "Minimal leverage footprint (15%)." },
        { rule_id: "POL-DISC-03", name: "Recurring Punctuality Benchmark", status: "PASS", detail: "Near-perfect supplier track record." },
        { rule_id: "POL-VOL-04", name: "Inflow Stability & Velocity Parity", status: "PASS", detail: "High commerce volume exceeds Tier A requirements." }
      ],
      underwriter_notes: ["Tier A Prime Alternative status confirmed. Eligible for immediate inventory financing line."]
    },
    sample_transactions: [
      { id: "tx_k01", date: "2026-08-01", desc: "UPIQR Store Settlement", category: "BUSINESS_INFLOW", amount: 850.0, type: "CREDIT", balance: 2400.0 },
      { id: "tx_k02", date: "2026-08-03", desc: "Metro Wholesale Inventory", category: "SUPPLIER", amount: 1200.0, type: "DEBIT", balance: 1200.0 },
      { id: "tx_k06", date: "2026-08-12", desc: "Amul Dairy Supplier Invoice", category: "SUPPLIER", amount: 800.0, type: "DEBIT", balance: 2270.0 },
      { id: "tx_k08", date: "2026-08-18", desc: "Shop Commercial Lease Rent", category: "RENT", amount: 600.0, type: "DEBIT", balance: 3120.0 }
    ]
  },
  thin_file_fresher: {
    persona: { id: "thin_file_fresher", name: "Aarav S.", role: "Entry-Level AI Software Developer", headline: "Thin credit file, zero bureau history, impeccable savings rate", initials: "AS" },
    assessment: {
      score: 710,
      tier: "TIER_B",
      decision: "APPROVE",
      recommended_limit: 6500.0,
      indicative_apr: 14.8,
      confidence_score: 0.89,
      behavioral_metrics: {
        cashflow_entropy: 0.45,
        income_volatility: 0.18,
        payment_discipline_index: 94.0,
        business_activity_velocity: 52.0,
        debt_stress_ratio: 0.28,
        liquidity_buffer_days: 42.0
      },
      explainability: [
        { feature_name: "income_stability", display_name: "Consistent Tech Payroll Inflow", impact_points: 38, direction: "POSITIVE", summary: "Regular bi-weekly direct payroll with low CV (0.18).", raw_metric: "CV: 0.18", formula: "CV = 0.18", note: "Verified corporate direct deposit payroll." },
        { feature_name: "liquidity_cushion", display_name: "High Savings Accumulation Rate", impact_points: 25, direction: "POSITIVE", summary: "42 days of net expense buffer held in primary account.", raw_metric: "42.0 Days Runway", formula: "R_t = 42.0d", note: "High savings rate offsets lack of bureau credit history." },
        { feature_name: "payment_discipline", display_name: "Punctual Rent & Fiber Utility Cleared", impact_points: 48, direction: "POSITIVE", summary: "Zero late charges or balance deficits recorded.", raw_metric: "94.0% Punctual", formula: "PDI = 94.0", note: "Clear digital trail of on-time rental payments." },
        { feature_name: "cashflow_entropy", display_name: "Controlled Discretionary Spend", impact_points: 10, direction: "POSITIVE", summary: "Healthy balance between essential living and modest leisure.", raw_metric: "Entropy: 0.45", formula: "H(C) = 0.45", note: "Balanced lifestyle expenditures." }
      ],
      flagged_for_human_review: false,
      review_reasons: []
    },
    policy: {
      policy_decision: "APPROVE",
      escalated_to_underwriter: false,
      policy_checks: [
        { rule_id: "POL-LIQ-01", name: "Minimum Liquidity Floor", status: "PASS", detail: "Exceptional cushion (42.0 days)." },
        { rule_id: "POL-DEBT-02", name: "Maximum Debt-Service Ratio", status: "PASS", detail: "No prior debt obligations (0% legacy burden)." },
        { rule_id: "POL-DISC-03", name: "Recurring Punctuality Benchmark", status: "PASS", detail: "Prompt utility and rent clearing." },
        { rule_id: "POL-VOL-04", name: "Inflow Stability & Velocity Parity", status: "PASS", detail: "Corporate payroll cadence provides high stability." }
      ],
      underwriter_notes: ["Approved under New-to-Credit Young Professional Policy."]
    },
    sample_transactions: [
      { id: "tx_f01", date: "2026-08-01", desc: "TechCorp Direct Payroll", category: "INCOME", amount: 2800.0, type: "CREDIT", balance: 3400.0 },
      { id: "tx_f02", date: "2026-08-02", desc: "Apartment Rent Transfer", category: "RENT", amount: 750.0, type: "DEBIT", balance: 2650.0 },
      { id: "tx_f03", date: "2026-08-04", desc: "Fiber Broadband Wifi", category: "UTILITY", amount: 60.0, type: "DEBIT", balance: 2590.0 },
      { id: "tx_f09", date: "2026-08-31", desc: "TechCorp Direct Payroll", category: "INCOME", amount: 2800.0, type: "CREDIT", balance: 5020.0 }
    ]
  },
  seasonal_trader: {
    persona: { id: "seasonal_trader", name: "Vikram R.", role: "Agricultural Harvest Produce Trader", headline: "Lump-sum seasonal revenues; triggers human underwriter review", initials: "VR" },
    assessment: {
      score: 618,
      tier: "TIER_C",
      decision: "MANUAL_REVIEW",
      recommended_limit: 2500.0,
      indicative_apr: 18.5,
      confidence_score: 0.76,
      behavioral_metrics: {
        cashflow_entropy: 0.72,
        income_volatility: 0.78,
        payment_discipline_index: 74.0,
        business_activity_velocity: 38.0,
        debt_stress_ratio: 0.42,
        liquidity_buffer_days: 3.2
      },
      explainability: [
        { feature_name: "income_stability", display_name: "High Revenue Volatility", impact_points: -28, direction: "NEGATIVE", summary: "Lump-sum seasonal inflows result in high monthly variance (0.78).", raw_metric: "CV: 0.78", formula: "CV = 0.78", note: "Cyclical harvest payouts create periodic liquidity dips." },
        { feature_name: "liquidity_cushion", display_name: "Thin Working Capital Buffer", impact_points: -18, direction: "NEGATIVE", summary: "Liquidity drops to 3.2 days between crop harvest cycles.", raw_metric: "3.2 Days Runway", formula: "R_t = 3.2d", note: "Requires seasonal bridge credit or harvest inventory lien." },
        { feature_name: "payment_discipline", display_name: "Moderate Repayment Regularity", impact_points: 15, direction: "POSITIVE", summary: "Tractor and fuel equipment loans paid when harvest receipts clear.", raw_metric: "74.0% Punctual", formula: "PDI = 74.0", note: "Repayments cluster around bulk harvest clearances." },
        { feature_name: "debt_stress", display_name: "Elevated Equipment Service Load", impact_points: -30, direction: "NEGATIVE", summary: "Equipment debt obligations demand 42% of baseline receipts.", raw_metric: "42% Burden", formula: "DISR = 42%", note: "Tractor lease absorption exceeds standard 40% cap." }
      ],
      flagged_for_human_review: true,
      review_reasons: [
        "High income variance masked by cyclical agricultural harvest sales.",
        "Critically thin liquidity buffer (3.2 days). Underwriter asset verification recommended."
      ]
    },
    policy: {
      policy_decision: "MANUAL_REVIEW",
      escalated_to_underwriter: true,
      policy_checks: [
        { rule_id: "POL-LIQ-01", name: "Minimum Liquidity Floor", status: "WARN", detail: "Liquidity buffer at 3.2 days (minimum target: 7.0 days)." },
        { rule_id: "POL-DEBT-02", name: "Maximum Debt-Service Ratio", status: "WARN", detail: "Debt servicing at 42% exceeds target threshold." },
        { rule_id: "POL-DISC-03", name: "Recurring Punctuality Benchmark", status: "PASS", detail: "Satisfactory post-harvest liquidation." },
        { rule_id: "POL-VOL-04", name: "Inflow Stability & Velocity Parity", status: "WARN", detail: "Elevated revenue dispersion requires collateral or guarantor review." }
      ],
      underwriter_notes: [
        "Escalated for Human Underwriter Review. Recommend crop-cycle structured repayments instead of standard monthly EMI."
      ]
    },
    sample_transactions: [
      { id: "tx_s01", date: "2026-08-02", desc: "Mandi Harvest Settlement", category: "INCOME", amount: 6200.0, type: "CREDIT", balance: 6800.0 },
      { id: "tx_s02", date: "2026-08-05", desc: "Fertilizer Supplier Payment", category: "SUPPLIER", amount: 3500.0, type: "DEBIT", balance: 3300.0 },
      { id: "tx_s03", date: "2026-08-08", desc: "Tractor Lease EMI", category: "LOAN_REPAYMENT", amount: 2100.0, type: "DEBIT", balance: 1200.0 }
    ]
  },
  custom_sandbox: {
    persona: {
      id: "custom_sandbox",
      name: "Custom Sandbox Profile",
      role: "Dynamic Cashflow Simulation",
      headline: "Interactive telemetry sandbox with real-time score tuning & statement generation",
      initials: "✨"
    },
    assessment: {
      score: 720,
      tier: "TIER_A",
      decision: "APPROVED",
      recommended_limit: 8500.0,
      indicative_apr: 12.2,
      confidence_score: 0.94,
      behavioral_metrics: {
        cashflow_entropy: 0.32,
        income_volatility: 0.22,
        payment_discipline_index: 94.0,
        business_activity_velocity: 86.0,
        debt_stress_ratio: 0.16,
        liquidity_buffer_days: 18.5
      },
      explainability: [
        { feature_name: "daily_inflow_velocity", display_name: "Real-Time Inflow Velocity", impact_points: 38, direction: "POSITIVE", summary: "Daily gross cash receipts provide steady debt-absorption headroom.", raw_metric: "₹2,500 / day", formula: "V_in = ₹2,500/d", note: "Computed directly from live sandbox turnover slider." },
        { feature_name: "volatility_score", display_name: "Cashflow Dispersion Control", impact_points: 25, direction: "POSITIVE", summary: "Low daily coefficient of variation ensures repayment predictability.", raw_metric: "CV: 0.15", formula: "CV = 0.15", note: "Adjusted via sandbox volatility selector." },
        { feature_name: "clean_mandate_history", display_name: "Zero NACH Return Record", impact_points: 32, direction: "POSITIVE", summary: "Zero bounced mandates in audited 90-day window.", raw_metric: "0 Bounces", formula: "B_90d = 0", note: "Real-time mandate status indicator." },
        { feature_name: "free_surplus_cushion", display_name: "Operating Surplus Headroom", impact_points: 22, direction: "POSITIVE", summary: "Free operating cashflow buffer supports flexible credit lines.", raw_metric: "35% Margin", formula: "DSCR_headroom = 35%", note: "Headroom above all operating and debt debits." }
      ],
      flagged_for_human_review: false,
      review_reasons: []
    },
    policy: {
      policy_decision: "AUTOMATED_APPROVAL",
      escalated_to_underwriter: false,
      policy_checks: [
        { rule_id: "POL-SANDBOX-01", name: "Dynamic Inflow Verification", status: "PASS", detail: "Daily turnover exceeds baseline underwriting hurdle rate." },
        { rule_id: "POL-SANDBOX-02", name: "Mandate Integrity Check", status: "PASS", detail: "NACH return count within approved institutional tolerance." },
        { rule_id: "POL-SANDBOX-03", name: "Surplus Headroom Floor", status: "PASS", detail: "Operating margin maintains minimum 1.5x debt service coverage." }
      ],
      underwriter_notes: [
        "Sandbox Simulated Entity: Real-time parameterized profile for interactive underwriting demonstrations."
      ]
    },
    sample_transactions: [
      { id: "tx_sb01", date: "2026-09-14", desc: "Daily UPI Settlement (QR)", category: "INCOME", amount: 2500.0, type: "CREDIT", balance: 14500.0 },
      { id: "tx_sb02", date: "2026-09-15", desc: "Inventory Restock / Operating", category: "SUPPLIER", amount: 1200.0, type: "DEBIT", balance: 13300.0 },
      { id: "tx_sb03", date: "2026-09-16", desc: "Daily UPI Settlement (QR)", category: "INCOME", amount: 2650.0, type: "CREDIT", balance: 15950.0 },
      { id: "tx_sb04", date: "2026-09-17", desc: "Utility & Platform Charges", category: "UTILITY", amount: 425.0, type: "DEBIT", balance: 15525.0 },
      { id: "tx_sb05", date: "2026-09-18", desc: "Daily UPI Settlement (QR)", category: "INCOME", amount: 2400.0, type: "CREDIT", balance: 17925.0 },
      { id: "tx_sb06", date: "2026-09-19", desc: "Scheduled Supplier Debit", category: "SUPPLIER", amount: 1100.0, type: "DEBIT", balance: 16825.0 },
      { id: "tx_sb07", date: "2026-09-20", desc: "Daily UPI Settlement (QR)", category: "INCOME", amount: 2550.0, type: "CREDIT", balance: 19375.0 }
    ]
  }
};

// ==========================================================================
// BANK STATEMENT FINANCIAL HEALTH TRIAGE (GREEN / YELLOW / RED)
// Ingests ledger/statement records, aggregates weekly/monthly, and assigns
// deterministic underwriting flags and actions for all 4 personas.
// ==========================================================================
const TRIAGE_DATA = {
  gig_worker: {
    flag: "YELLOW",
    label: "🟡 YELLOW (Moderate Risk / Caution)",
    headlineTag: "🟡 YELLOW: Caution",
    headlineClass: "yellow",
    bulbClass: "bulb-yellow",
    actionIcon: "⚠️",
    action: "Conditional sanction with tranche-based drawdowns and daily auto-debit collection.",
    criteria: [
      { id: "dscr", target: "1.0x ≤ DSCR < 1.5x", val: "1.28x", status: "warn" },
      { id: "vol", target: "0.35 to 0.65", val: "0.432", status: "warn" },
      { id: "bounces", target: "≤ 1 delay in 90d", val: "1 delay", status: "warn" },
      { id: "surplus", target: "Controlled Deficits", val: "66.7%", status: "warn" }
    ],
    advisory: null,
    weekly: [
      { period: "Week 1", inflow: 1100.0, outflow: 1050.0, debt: 472.5, net: 50.0, surplus: true, bounces: 0 },
      { period: "Week 2", inflow: 2400.0, outflow: 1500.0, debt: 675.0, net: 900.0, surplus: true, bounces: 0 },
      { period: "Week 3", inflow: 900.0, outflow: 950.0, debt: 427.5, net: -50.0, surplus: false, bounces: 0 },
      { period: "Week 4", inflow: 1800.0, outflow: 1300.0, debt: 585.0, net: 500.0, surplus: true, bounces: 0 },
      { period: "Week 5", inflow: 2600.0, outflow: 1700.0, debt: 765.0, net: 900.0, surplus: true, bounces: 0 },
      { period: "Week 6", inflow: 800.0, outflow: 850.0, debt: 382.5, net: -50.0, surplus: false, bounces: 0 },
      { period: "Week 7", inflow: 1400.0, outflow: 1100.0, debt: 495.0, net: 300.0, surplus: true, bounces: 0 },
      { period: "Week 8", inflow: 2200.0, outflow: 1450.0, debt: 652.5, net: 750.0, surplus: true, bounces: 0 },
      { period: "Week 9", inflow: 750.0, outflow: 885.0, debt: 382.5, net: -135.0, surplus: false, bounces: 0 },
      { period: "Week 10", inflow: 1600.0, outflow: 1200.0, debt: 540.0, net: 400.0, surplus: true, bounces: 0 },
      { period: "Week 11", inflow: 2000.0, outflow: 1450.0, debt: 652.5, net: 550.0, surplus: true, bounces: 0 },
      { period: "Week 12", inflow: 650.0, outflow: 800.0, debt: 360.0, net: -150.0, surplus: false, bounces: 0 }
    ],
    monthly: [
      { period: "Month 1 (Jun)", inflow: 6200.0, outflow: 4800.0, debt: 2160.0, net: 1400.0, surplus: true, bounces: 0 },
      { period: "Month 2 (Jul)", inflow: 7000.0, outflow: 5100.0, debt: 2295.0, net: 1900.0, surplus: true, bounces: 0 },
      { period: "Month 3 (Aug)", inflow: 5000.0, outflow: 4335.0, debt: 1935.0, net: 665.0, surplus: true, bounces: 0 }
    ]
  },
  kirana_merchant: {
    flag: "GREEN",
    label: "🟢 GREEN (Safe to Lend / Prime)",
    headlineTag: "🟢 GREEN: Prime",
    headlineClass: "green",
    bulbClass: "bulb-green",
    actionIcon: "🚀",
    action: "Pre-approved for instant working capital facility; auto-disbursement eligible.",
    criteria: [
      { id: "dscr", target: "Target ≥ 1.5x", val: "2.27x", status: "pass" },
      { id: "vol", target: "Target ≤ 0.35", val: "0.086", status: "pass" },
      { id: "bounces", target: "0 NACH Bounces", val: "0 Bounces", status: "pass" },
      { id: "surplus", target: "Target ≥ 85%", val: "100.0%", status: "pass" }
    ],
    advisory: null,
    weekly: [
      { period: "Week 1", inflow: 3950.0, outflow: 1820.0, debt: 600.0, net: 2130.0, surplus: true, bounces: 0 },
      { period: "Week 2", inflow: 4542.5, outflow: 1820.0, debt: 600.0, net: 2722.5, surplus: true, bounces: 0 },
      { period: "Week 3", inflow: 3752.5, outflow: 1820.0, debt: 600.0, net: 1932.5, surplus: true, bounces: 0 },
      { period: "Week 4", inflow: 4345.0, outflow: 1820.0, debt: 600.0, net: 2525.0, surplus: true, bounces: 0 },
      { period: "Week 5", inflow: 4147.5, outflow: 1820.0, debt: 600.0, net: 2327.5, surplus: true, bounces: 0 },
      { period: "Week 6", inflow: 3555.0, outflow: 1820.0, debt: 600.0, net: 1735.0, surplus: true, bounces: 0 },
      { period: "Week 7", inflow: 4740.0, outflow: 1820.0, debt: 600.0, net: 2920.0, surplus: true, bounces: 0 },
      { period: "Week 8", inflow: 3950.0, outflow: 1820.0, debt: 600.0, net: 2130.0, surplus: true, bounces: 0 },
      { period: "Week 9", inflow: 4345.0, outflow: 1820.0, debt: 600.0, net: 2525.0, surplus: true, bounces: 0 },
      { period: "Week 10", inflow: 3752.5, outflow: 1820.0, debt: 600.0, net: 1932.5, surplus: true, bounces: 0 },
      { period: "Week 11", inflow: 4542.5, outflow: 1820.0, debt: 600.0, net: 2722.5, surplus: true, bounces: 0 },
      { period: "Week 12", inflow: 3950.0, outflow: 1820.0, debt: 600.0, net: 2130.0, surplus: true, bounces: 0 }
    ],
    monthly: [
      { period: "Month 1 (Jun)", inflow: 16590.0, outflow: 7280.0, debt: 2400.0, net: 9310.0, surplus: true, bounces: 0 },
      { period: "Month 2 (Jul)", inflow: 17380.0, outflow: 7280.0, debt: 2400.0, net: 10100.0, surplus: true, bounces: 0 },
      { period: "Month 3 (Aug)", inflow: 15602.5, outflow: 7280.0, debt: 2400.0, net: 8322.5, surplus: true, bounces: 0 }
    ]
  },
  thin_file_fresher: {
    flag: "GREEN",
    label: "🟢 GREEN (Safe to Lend / Prime)",
    headlineTag: "🟢 GREEN: Prime",
    headlineClass: "green",
    bulbClass: "bulb-green",
    actionIcon: "🚀",
    action: "Pre-approved for instant working capital facility; auto-disbursement eligible.",
    criteria: [
      { id: "dscr", target: "Target ≥ 1.5x", val: "2.33x", status: "pass" },
      { id: "vol", target: "Target ≤ 0.35", val: "0.180", status: "pass" },
      { id: "bounces", target: "0 NACH Bounces", val: "0 Bounces", status: "pass" },
      { id: "surplus", target: "Target ≥ 85%", val: "100.0%", status: "pass" }
    ],
    advisory: null,
    weekly: [
      { period: "Week 1", inflow: 2800.0, outflow: 1200.0, debt: 750.0, net: 1600.0, surplus: true, bounces: 0 },
      { period: "Week 2", inflow: 2800.0, outflow: 1200.0, debt: 750.0, net: 1600.0, surplus: true, bounces: 0 },
      { period: "Week 3", inflow: 2800.0, outflow: 1200.0, debt: 750.0, net: 1600.0, surplus: true, bounces: 0 },
      { period: "Week 4", inflow: 2800.0, outflow: 1200.0, debt: 750.0, net: 1600.0, surplus: true, bounces: 0 },
      { period: "Week 5", inflow: 2800.0, outflow: 1200.0, debt: 750.0, net: 1600.0, surplus: true, bounces: 0 },
      { period: "Week 6", inflow: 2800.0, outflow: 1200.0, debt: 750.0, net: 1600.0, surplus: true, bounces: 0 },
      { period: "Week 7", inflow: 2800.0, outflow: 1200.0, debt: 750.0, net: 1600.0, surplus: true, bounces: 0 },
      { period: "Week 8", inflow: 2800.0, outflow: 1200.0, debt: 750.0, net: 1600.0, surplus: true, bounces: 0 },
      { period: "Week 9", inflow: 2800.0, outflow: 1200.0, debt: 750.0, net: 1600.0, surplus: true, bounces: 0 },
      { period: "Week 10", inflow: 2800.0, outflow: 1200.0, debt: 750.0, net: 1600.0, surplus: true, bounces: 0 },
      { period: "Week 11", inflow: 2800.0, outflow: 1200.0, debt: 750.0, net: 1600.0, surplus: true, bounces: 0 },
      { period: "Week 12", inflow: 2800.0, outflow: 1200.0, debt: 750.0, net: 1600.0, surplus: true, bounces: 0 }
    ],
    monthly: [
      { period: "Month 1 (Jun)", inflow: 11200.0, outflow: 4800.0, debt: 3000.0, net: 6400.0, surplus: true, bounces: 0 },
      { period: "Month 2 (Jul)", inflow: 11200.0, outflow: 4800.0, debt: 3000.0, net: 6400.0, surplus: true, bounces: 0 },
      { period: "Month 3 (Aug)", inflow: 11200.0, outflow: 4800.0, debt: 3000.0, net: 6400.0, surplus: true, bounces: 0 }
    ]
  },
  seasonal_trader: {
    flag: "RED",
    label: "🔴 RED (High Risk / Cash Deficit)",
    headlineTag: "🔴 RED: Cash Deficit",
    headlineClass: "red",
    bulbClass: "bulb-red",
    actionIcon: "🛑",
    action: "Decline application; output structured advisory checklist to repair liquidity runway.",
    criteria: [
      { id: "dscr", target: "DSCR < 1.0x (Outflows > Inflows)", val: "0.70x", status: "fail" },
      { id: "vol", target: "Trigger: Volatility > 0.65", val: "1.323", status: "fail" },
      { id: "bounces", target: "Trigger: ≥ 2 Bounces", val: "2 Bounces", status: "fail" },
      { id: "surplus", target: "Persistent Deficit (< 50%)", val: "33.3%", status: "fail" }
    ],
    advisory: [
      { step: 1, title: "Immediate Cash Runway Cushion", desc: "Maintain a minimum operating liquidity floor of at least 14 days of average weekly outflows before seeking incremental credit facilities." },
      { step: 2, title: "Consolidate High-Cost Fixed Obligations", desc: "Restructure or consolidate short-term micro-loans to lower immediate weekly debt servicing requirements below 30% of gross inflows." },
      { step: 3, title: "Eliminate NACH & Debit Dishonour Penalties", desc: "Realign automated debit schedules (EMIs, supplier mandates) directly with verified inflow deposit dates to stop bounce charges." },
      { step: 4, title: "Smoothen Weekly Inflow Volatility", desc: "Diversify customer revenue channels or invoice milestone timing to bring weekly cashflow coefficient of variation below 0.35." },
      { step: 5, title: "60–90 Day Rehabilitation Re-audit", desc: "Demonstrate at least 6 consecutive weeks of positive net operating surplus before re-submitting for automated underwriting clearance." }
    ],
    weekly: [
      { period: "Week 1", inflow: 2500.0, outflow: 1400.0, debt: 0.0, net: 1100.0, surplus: true, bounces: 0 },
      { period: "Week 2", inflow: 0.0, outflow: 1600.0, debt: 0.0, net: -1600.0, surplus: false, bounces: 0 },
      { period: "Week 3", inflow: 400.0, outflow: 1350.0, debt: 150.0, net: -950.0, surplus: false, bounces: 1 },
      { period: "Week 4", inflow: 3100.0, outflow: 1300.0, debt: 0.0, net: 1800.0, surplus: true, bounces: 0 },
      { period: "Week 5", inflow: 0.0, outflow: 1500.0, debt: 0.0, net: -1500.0, surplus: false, bounces: 0 },
      { period: "Week 6", inflow: 0.0, outflow: 1100.0, debt: 0.0, net: -1100.0, surplus: false, bounces: 0 },
      { period: "Week 7", inflow: 1800.0, outflow: 1250.0, debt: 0.0, net: 550.0, surplus: true, bounces: 0 },
      { period: "Week 8", inflow: 200.0, outflow: 1550.0, debt: 150.0, net: -1350.0, surplus: false, bounces: 1 },
      { period: "Week 9", inflow: 0.0, outflow: 1150.0, debt: 0.0, net: -1150.0, surplus: false, bounces: 0 },
      { period: "Week 10", inflow: 2900.0, outflow: 1300.0, debt: 0.0, net: 1600.0, surplus: true, bounces: 0 },
      { period: "Week 11", inflow: 100.0, outflow: 1200.0, debt: 0.0, net: -1100.0, surplus: false, bounces: 0 },
      { period: "Week 12", inflow: 0.0, outflow: 1100.0, debt: 0.0, net: -1100.0, surplus: false, bounces: 0 }
    ],
    monthly: [
      { period: "Month 1 (Jun)", inflow: 6000.0, outflow: 5650.0, debt: 150.0, net: 350.0, surplus: true, bounces: 1 },
      { period: "Month 2 (Jul)", inflow: 2000.0, outflow: 5000.0, debt: 150.0, net: -3000.0, surplus: false, bounces: 1 },
      { period: "Month 3 (Aug)", inflow: 3000.0, outflow: 5150.0, debt: 0.0, net: -2150.0, surplus: false, bounces: 0 }
    ]
  },
  custom_sandbox: {
    flag: "GREEN",
    label: "🟢 GREEN (Auto-Sanction STP)",
    headlineTag: "🟢 GREEN: Prime STP",
    headlineClass: "green",
    bulbClass: "bulb-green",
    actionIcon: "⚡",
    action: "Auto-Sanction STP: Pre-approved instant facility based on live parameterized cashflow.",
    criteria: [
      { id: "dscr", target: "Target ≥ 1.5x", val: "1.54x", status: "pass" },
      { id: "vol", target: "Target ≤ 0.35", val: "0.15", status: "pass" },
      { id: "bounces", target: "0 NACH Bounces", val: "0 Bounces", status: "pass" },
      { id: "surplus", target: "Target ≥ 85%", val: "100.0%", status: "pass" }
    ],
    advisory: null,
    weekly: [
      { period: "Week 1", inflow: 17500.0, outflow: 11375.0, debt: 2100.0, net: 6125.0, surplus: true, bounces: 0 },
      { period: "Week 2", inflow: 18200.0, outflow: 11830.0, debt: 2100.0, net: 6370.0, surplus: true, bounces: 0 },
      { period: "Week 3", inflow: 17150.0, outflow: 11147.5, debt: 2100.0, net: 6002.5, surplus: true, bounces: 0 },
      { period: "Week 4", inflow: 17850.0, outflow: 11602.5, debt: 2100.0, net: 6247.5, surplus: true, bounces: 0 }
    ],
    monthly: [
      { period: "Month 1 (Jun)", inflow: 70700.0, outflow: 45955.0, debt: 8400.0, net: 24745.0, surplus: true, bounces: 0 },
      { period: "Month 2 (Jul)", inflow: 73500.0, outflow: 47775.0, debt: 8400.0, net: 25725.0, surplus: true, bounces: 0 },
      { period: "Month 3 (Aug)", inflow: 71000.0, outflow: 46150.0, debt: 8400.0, net: 24850.0, surplus: true, bounces: 0 }
    ]
  }
};

let currentPersonaKey = "gig_worker";
let currentData = LOCAL_FALLBACK_DATA[currentPersonaKey];
let currentPerspective = "borrower"; // 'borrower' | 'bank'
let currentLang = localStorage.getItem("bcm_lang") || "en";

// ==========================================================================
// BILINGUAL LOCALIZATION DICTIONARY (ENGLISH / HINDI)
// Respectful, natural Indian financial terminology for underserved niches
// ==========================================================================
const I18N = {
  en: {
    brand_name: "Because Credit Matters",
    brand_tagline: "Alternative Credit Intelligence",
    engine_active: "Engine Active",
    borrower_view: "Borrower View",
    lender_view: "Bank / Underwriter",
    hero_title: "Your financial behavior,<br><span class=\"title-highlight\">explained.</span>",
    hero_subtitle: "Alternative credit intelligence built from real, verified financial behavior — eliminating bureau lockouts through consent-driven cashflow telemetry.",
    preset_title: "Select Preset Profile",
    preset_subtitle: "Instant Switch Archetypes",
    consent_verified: "Consent Verified",
    score_header: "Alternative Credit Score",
    score_live: "● REAL-TIME",
    score_range: "RANGE 300 - 850",
    score_projected: "Projected:",
    rec_line: "Recommended Line",
    indicative_apr: "Indicative APR",
    confidence: "Confidence",
    trajectory_label: "180-Day Trajectory",
    what_if_title: "What could improve your score?",
    what_if_sub: "Slide behaviors to project credit expansion",
    buffer_label: "Increase Liquidity Buffer",
    discipline_label: "Improve Payment Discipline",
    proj_score: "Projected Score",
    proj_apr: "Est. APR",
    proj_ceiling: "Credit Ceiling",
    savings_title: "Estimated Annual Interest Saved",
    blueprint_badge: "AI Recovery Intelligence",
    blueprint_heading: "AI Financial Health & Recovery Plan",
    blueprint_sub: "Prescriptive, telemetry-driven actions to clear halts and unlock Tier A credit lines.",
    blueprint_priority: "Priority Action Required",
    drivers_heading: "What drives your score",
    drivers_sub: "Transparent Shapley feature attribution derived from verified banking telemetry. Click any card to expand math & regulatory disclosures.",
    shapley_pill: "Shapley Additive Attribution",
    override_badge: "Manual Underwriter Decisioning",
    override_heading: "Underwriter Decision Override & Policy Triage",
    override_sub: "Enforce risk halts, grant policy exceptions, or request credit enhancement guarantees.",
    override_active_state: "Active Clearance:",
    btn_approve_exception: "Approve Exception",
    btn_request_guarantor: "Request Bridge Guarantor",
    btn_enforce_halt: "Enforce Underwriter Halt",
    audit_log_title: "Underwriter Audit Justification & Timestamped Ledger",
    policy_heading: "Underwriting Decision Rules & Risk Policy",
    policy_sub: "Institutional deterministic rule gates and policy exception criteria evaluated by BCM Engine.",
    audit_trail_pill: "Audit Trail Engine",
    committee_title: "Underwriting Committee Recommendation",
    tx_table_heading: "180-Day Transaction Telemetry Ledger",
    tx_table_sub: "Verified Account Aggregator normalized banking events.",
    th_date: "Date",
    th_desc: "Merchant / Description",
    th_category: "Category",
    th_amount: "Amount",
    th_balance: "Running Balance"
  },
  hi: {
    brand_name: "बिकॉज़ क्रेडिट मैटर्स (BCM)",
    brand_tagline: "वैकल्पिक क्रेडिट इंटेलिजेंस",
    engine_active: "इंजन सक्रिय",
    borrower_view: "उधारकर्ता दृश्य",
    lender_view: "बैंक / अंडरराइटर",
    hero_title: "आपका वित्तीय आचरण,<br><span class=\"title-highlight\">स्पष्ट और पारदर्शी।</span>",
    hero_subtitle: "सत्यापित वित्तीय व्यवहार पर आधारित आधुनिक क्रेडिट इंटेलिजेंस — सहमति-आधारित कैशफ्लो टेलीमेट्री द्वारा पारंपरिक सिबिल बाधाओं का निवारण।",
    preset_title: "प्रोफ़ाइल चुनें (Presets)",
    preset_subtitle: "त्वरित प्रोफ़ाइल स्विच",
    consent_verified: "सहमति सत्यापित (KYC)",
    score_header: "वैकल्पिक क्रेडिट स्कोर",
    score_live: "● लाइव टेलीमेट्री",
    score_range: "सीमा 300 - 850",
    score_projected: "अनुमानित स्कोर:",
    rec_line: "अनुशंसित ऋण सीमा",
    indicative_apr: "सांकेतिक ब्याज दर (APR)",
    confidence: "विश्वसनीयता इंडेक्स",
    trajectory_label: "180-दिवसीय स्कोर दिशा",
    what_if_title: "आपका स्कोर कैसे सुधर सकता है?",
    what_if_sub: "ऋण सीमा विस्तार देखने के लिए वित्तीय आदतें बदलें",
    buffer_label: "नकदी बफर (Liquidity) बढ़ाएं",
    discipline_label: "भुगतान अनुशासन (PDI) सुधारें",
    proj_score: "अनुमानित स्कोर",
    proj_apr: "अनुमानित APR",
    proj_ceiling: "ऋण सीमा सीलिंग",
    savings_title: "अनुमानित वार्षिक ब्याज बचत",
    blueprint_badge: "एआई रिकवरी इंटेलिजेंस",
    blueprint_heading: "एआई वित्तीय स्वास्थ्य एवं सुधार योजना",
    blueprint_sub: "क्रेडिट रुकावट दूर करने और टियर ए क्रेडिट अनलॉक करने के लिए सुझाव।",
    blueprint_priority: "प्राथमिकता कार्रवाई आवश्यक",
    drivers_heading: "स्कोर के मुख्य निर्धारक कारक",
    drivers_sub: "सत्यापित बैंकिंग टेलीमेट्री से प्राप्त ट्रांसपेरेंट शापले (Shapley) विश्लेषण। गणितीय फॉर्मूला देखने के लिए किसी भी कार्ड पर क्लिक करें।",
    shapley_pill: "शापले एडिटिव एट्रिब्यूशन",
    override_badge: "अंडरराइटर निर्णय नियंत्रण",
    override_heading: "अंडरराइटर निर्णय ओवरराइड और जोखिम नियंत्रण",
    override_sub: "जोखिम रोक लागू करें, विशेष छूट दें, या क्रेडिट गारंटी का अनुरोध करें।",
    override_active_state: "सक्रिय स्थिति:",
    btn_approve_exception: "विशेष स्वीकृति दें",
    btn_request_guarantor: "जमानतदार (Guarantor) मांगें",
    btn_enforce_halt: "क्रेडिट रोक लागू करें",
    audit_log_title: "अंडरराइटर ऑडिट औचित्य और समयबद्ध लेजर",
    policy_heading: "अंडरराइटिंग नियम और जोखिम नीतियां",
    policy_sub: "BCM इंजन द्वारा विश्लेषित संस्थागत नियम और नीति अपवाद मानदंड।",
    audit_trail_pill: "ऑडिट ट्रेल इंजन",
    committee_title: "अंडरराइटिंग समिति की सिफारिश",
    tx_table_heading: "180-दिवसीय लेन-देन बहीखाता (Ledger)",
    tx_table_sub: "अकाउंट एग्रीगेटर द्वारा सत्यापित मानकीकृत बैंकिंग लेन-देन।",
    th_date: "दिनांक",
    th_desc: "विवरण / मर्चेंट",
    th_category: "श्रेणी",
    th_amount: "राशि",
    th_balance: "शेष राशि (Balance)"
  }
};

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initAmbientCanvas();
  initAuthGate();
  initPerspectiveToggle();
  initPresetButtons();
  initSandboxDrawer();
  initWhatIfSliders();
  initLenderOverrides();
  initLocalization();

  // Restore persisted persona from onboarding if present
  const savedPersona = localStorage.getItem("bcm_active_persona");
  if (savedPersona && (LOCAL_FALLBACK_DATA[savedPersona] || savedPersona === "custom_sandbox")) {
    currentPersonaKey = savedPersona;
    const targetBtn = document.querySelector(`.persona-btn[data-preset="${savedPersona}"]`);
    if (targetBtn) {
      document.querySelectorAll(".persona-btn").forEach(b => b.classList.remove("selected"));
      targetBtn.classList.add("selected");
    }
  }

  loadPersonaData(currentPersonaKey);
});

// ==========================================================================
// 1. DYNAMIC AMBIENT LIGHT CANVAS (60 FPS OPTIMIZED)
// ==========================================================================
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  // Create ambient luminous nodes
  const nodeCount = 18;
  for (let i = 0; i < nodeCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 80 + 40,
      alpha: Math.random() * 0.04 + 0.02,
      color: i % 2 === 0 ? "14, 59, 46" : "95, 184, 138" // Evergreen & Sage
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -p.radius) p.x = width + p.radius;
      if (p.x > width + p.radius) p.x = -p.radius;
      if (p.y < -p.radius) p.y = height + p.radius;
      if (p.y > height + p.radius) p.y = -p.radius;

      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
      grad.addColorStop(0, `rgba(${p.color}, ${p.alpha})`);
      grad.addColorStop(1, `rgba(${p.color}, 0)`);

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }
  draw();
}

// ==========================================================================
// 3. AUTHENTICATION & CONSENT GATE CONTROLLER
// Strict Validation:
// - Mobile Number: Exactly 10 digits excluding +91
// - Aadhaar Number: Exactly 12 digits strictly
// Multi-Stage Cyber Verification Sequence
// ==========================================================================
function initAuthGate() {
  const overlay = document.getElementById("login-overlay");
  const portal = document.getElementById("main-portal");
  const userSessionBar = document.getElementById("user-session-bar");
  const userSessionDetails = document.getElementById("user-session-details");
  const btnLogout = document.getElementById("btn-logout");
  const cardholderDisplay = document.getElementById("cardholder-name-display");

  // Views
  const viewSignin = document.getElementById("view-signin");
  const viewRegister = document.getElementById("view-register");
  const viewForgot = document.getElementById("view-forgot");

  // Signin Elements
  const formSignin = document.getElementById("form-signin");
  const inputEmail = document.getElementById("signin-email");
  const inputPassword = document.getElementById("signin-password");
  const btnTogglePassword = document.getElementById("btn-toggle-password");
  const eyeShow = btnTogglePassword ? btnTogglePassword.querySelector(".eye-show") : null;
  const eyeHide = btnTogglePassword ? btnTogglePassword.querySelector(".eye-hide") : null;
  const checkboxRemember = document.getElementById("signin-remember");
  const btnSubmitSignin = document.getElementById("btn-submit-signin");
  const signinSpinner = document.getElementById("signin-spinner");
  const signinBtnText = document.getElementById("signin-btn-text");
  const emailError = document.getElementById("signin-email-error");
  const passwordError = document.getElementById("signin-password-error");
  const loginAlert = document.getElementById("login-alert-banner");
  const loginAlertText = document.getElementById("login-alert-text");

  // Demo buttons
  const btnDemoAlex = document.getElementById("btn-demo-alex");
  const btnDemoRohan = document.getElementById("btn-demo-rohan");

  // View switchers
  const linkGotoRegister = document.getElementById("link-goto-register");
  const linkRegisterToLogin = document.getElementById("link-register-to-login");
  const linkGotoForgot = document.getElementById("link-goto-forgot");
  const linkForgotToLogin = document.getElementById("link-forgot-to-login");

  // Register Elements
  const formRegister = document.getElementById("form-register");
  const regName = document.getElementById("reg-name");
  const regEmail = document.getElementById("reg-email");
  const regPassword = document.getElementById("reg-password");
  const regRole = document.getElementById("reg-role");
  const btnSubmitRegister = document.getElementById("btn-submit-register");
  const registerSpinner = document.getElementById("register-spinner");
  const registerBtnText = document.getElementById("register-btn-text");
  const registerAlert = document.getElementById("register-alert-banner");
  const registerAlertText = document.getElementById("register-alert-text");

  // Forgot Elements
  const formForgot = document.getElementById("form-forgot");
  const forgotEmail = document.getElementById("forgot-email");
  const btnSubmitForgot = document.getElementById("btn-submit-forgot");
  const forgotSpinner = document.getElementById("forgot-spinner");
  const forgotBtnText = document.getElementById("forgot-btn-text");
  const forgotAlert = document.getElementById("forgot-alert-banner");
  const forgotAlertText = document.getElementById("forgot-alert-text");

  // 1. Check existing session
  try {
    const rawSession = localStorage.getItem("bcm_session");
    if (rawSession) {
      const savedUser = JSON.parse(rawSession);
      if (savedUser && savedUser.email) {
        unlockPortal(savedUser, false);
      } else {
        lockPortal();
      }
    } else {
      lockPortal();
    }
  } catch (e) {
    lockPortal();
  }

  // Check remembered email
  const rememberedEmail = localStorage.getItem("bcm_remember_email");
  if (rememberedEmail && inputEmail) {
    inputEmail.value = rememberedEmail;
    if (checkboxRemember) checkboxRemember.checked = true;
  }

  // 2. Password Visibility Toggle
  if (btnTogglePassword && inputPassword) {
    btnTogglePassword.addEventListener("click", () => {
      const isPassword = inputPassword.type === "password";
      inputPassword.type = isPassword ? "text" : "password";
      if (eyeShow && eyeHide) {
        if (isPassword) {
          eyeShow.classList.add("hidden");
          eyeHide.classList.remove("hidden");
        } else {
          eyeShow.classList.remove("hidden");
          eyeHide.classList.add("hidden");
        }
      }
    });
  }

  // 3. View Switching
  function switchView(target) {
    [viewSignin, viewRegister, viewForgot].forEach(v => {
      if (v) v.classList.add("hidden");
    });
    if (target) target.classList.remove("hidden");
    hideAlerts();
  }

  if (linkGotoRegister) linkGotoRegister.addEventListener("click", () => switchView(viewRegister));
  if (linkRegisterToLogin) linkRegisterToLogin.addEventListener("click", () => switchView(viewSignin));
  if (linkGotoForgot) linkGotoForgot.addEventListener("click", () => switchView(viewForgot));
  if (linkForgotToLogin) linkForgotToLogin.addEventListener("click", () => switchView(viewSignin));

  function hideAlerts() {
    if (loginAlert) loginAlert.classList.add("hidden");
    if (registerAlert) registerAlert.classList.add("hidden");
    if (forgotAlert) forgotAlert.classList.add("hidden");
  }

  // 4. Real-Time Validation Helpers
  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((val || "").trim());
  }

  if (inputEmail) {
    inputEmail.addEventListener("blur", () => {
      if (inputEmail.value && !isValidEmail(inputEmail.value)) {
        inputEmail.classList.add("input-error");
        if (emailError) emailError.classList.remove("hidden");
      } else {
        inputEmail.classList.remove("input-error");
        if (emailError) emailError.classList.add("hidden");
      }
    });
    inputEmail.addEventListener("input", () => {
      if (isValidEmail(inputEmail.value)) {
        inputEmail.classList.remove("input-error");
        if (emailError) emailError.classList.add("hidden");
      }
    });
  }

  if (inputPassword) {
    inputPassword.addEventListener("input", () => {
      if (inputPassword.value.length >= 6) {
        inputPassword.classList.remove("input-error");
        if (passwordError) passwordError.classList.add("hidden");
      }
    });
  }

  // 5. Persona Profiles & Adaptive Telemetry Configuration
  const PERSONA_PROFILES = {
    gig_worker: {
      name: "Rohan M.",
      email: "rohan.m@bcmcredit.io",
      password: "Password123!",
      role: "Gig Mobility Partner",
      accountType: "BORROWER",
      tier: "TITANIUM CAUTION",
      score: 684,
      scoreTier: "Tier B Caution",
      growthNum: "+18.4%",
      growthPeriod: "Monthly Stability"
    },
    kirana_merchant: {
      name: "Sunita K.",
      email: "sunita.k@bcmcredit.io",
      password: "Password123!",
      role: "Kirana Micro-Merchant",
      accountType: "BORROWER",
      tier: "TITANIUM PRIME",
      score: 785,
      scoreTier: "Tier A Prime Alt",
      growthNum: "+24.8%",
      growthPeriod: "Turnover Growth"
    },
    thin_file_fresher: {
      name: "Aarav S.",
      email: "aarav.s@bcmcredit.io",
      password: "Password123!",
      role: "Student / Gen-Z",
      accountType: "BORROWER",
      tier: "TITANIUM PRIME",
      score: 742,
      scoreTier: "Tier A Prime Alt",
      growthNum: "+12.1%",
      growthPeriod: "Consistent Inflow"
    },
    seasonal_trader: {
      name: "Vikram R.",
      email: "vikram.r@bcmcredit.io",
      password: "Password123!",
      role: "Agricultural Produce Trader",
      accountType: "BORROWER",
      tier: "TITANIUM HIGH RISK",
      score: 618,
      scoreTier: "Tier C High Risk",
      growthNum: "-8.5%",
      growthPeriod: "Cyclical Volatility"
    },
    alex: {
      name: "Alex Turner",
      email: "alex.turner@bcmcredit.io",
      password: "Password123!",
      role: "Fintech Risk Analyst",
      accountType: "BANK",
      tier: "TITANIUM PRIME (BANK)",
      score: 785,
      scoreTier: "Tier A Prime Alt",
      growthNum: "+18.4%",
      growthPeriod: "Portfolio Stability"
    }
  };

  let selectedOnboardingPersona = "gig_worker";
  const onboardingCards = document.querySelectorAll(".onboarding-persona-card");
  const groupVendorGig = document.getElementById("adaptive-group-vendor-gig");
  const groupStudent = document.getElementById("adaptive-group-student");
  const groupAgri = document.getElementById("adaptive-group-agri");

  // Dynamic visual elements on right stage card
  const cardTierDisplay = document.getElementById("login-card-tier");
  const loginScoreVal = document.getElementById("login-score-val");
  const loginScoreTier = document.getElementById("login-score-tier");
  const loginGrowthNum = document.getElementById("login-growth-num");
  const loginGrowthPeriod = document.getElementById("login-growth-period");

  function selectBorrowerPersona(personaKey, autofillInputs = true) {
    if (!personaKey) return;
    const profile = PERSONA_PROFILES[personaKey];
    if (!profile) return;

    if (profile.accountType === "BORROWER") {
      selectedOnboardingPersona = personaKey;

      // Update segment cards
      onboardingCards.forEach(c => {
        if (c.getAttribute("data-persona") === personaKey) {
          c.classList.add("active");
        } else {
          c.classList.remove("active");
        }
      });

      // Toggle adaptive fields
      if (groupVendorGig) groupVendorGig.classList.toggle("hidden", personaKey !== "gig_worker" && personaKey !== "kirana_merchant");
      if (groupStudent) groupStudent.classList.toggle("hidden", personaKey !== "thin_file_fresher");
      if (groupAgri) groupAgri.classList.toggle("hidden", personaKey !== "seasonal_trader");
    } else {
      // For Bank analyst, keep borrower cards unselected
      onboardingCards.forEach(c => c.classList.remove("active"));
    }

    // Update demo pills active state
    document.querySelectorAll(".demo-credential-pill").forEach(pill => {
      const pKey = pill.getAttribute("data-persona");
      if (pKey === personaKey) {
        pill.classList.add("active");
      } else {
        pill.classList.remove("active");
      }
    });

    // Populate inputs cleanly
    if (autofillInputs) {
      if (inputEmail) inputEmail.value = profile.email;
      if (inputPassword) inputPassword.value = profile.password;
      if (inputEmail) inputEmail.classList.remove("input-error");
      if (inputPassword) inputPassword.classList.remove("input-error");
      if (emailError) emailError.classList.add("hidden");
      if (passwordError) passwordError.classList.add("hidden");
      hideAlerts();
    }

    // Update Right Visual Titanium Card Mockup
    if (cardholderDisplay) cardholderDisplay.textContent = profile.name.toUpperCase();
    if (cardTierDisplay) cardTierDisplay.textContent = profile.tier;
    if (loginScoreVal) loginScoreVal.textContent = profile.score;
    if (loginScoreTier) loginScoreTier.textContent = profile.scoreTier;
    if (loginGrowthNum) loginGrowthNum.textContent = profile.growthNum;
    if (loginGrowthPeriod) loginGrowthPeriod.textContent = profile.growthPeriod;
  }

  // Bind Borrower Segment Cards
  onboardingCards.forEach(card => {
    card.addEventListener("click", () => {
      const pKey = card.getAttribute("data-persona");
      selectBorrowerPersona(pKey, true);
    });
  });

  // Bind All Demo Credential Pills
  document.querySelectorAll(".demo-credential-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const pKey = pill.getAttribute("data-persona");
      selectBorrowerPersona(pKey, true);
    });
  });

  // Initialize initial state to Rohan M. (Gig Worker) without forcing override if remembered
  if (!rememberedEmail) {
    selectBorrowerPersona("gig_worker", false);
  }

  // Feature 1: Terms & AA Data Consent Modal Controller
  const termsModal = document.getElementById("terms-consent-modal");
  const termsPreview = document.getElementById("terms-meta-preview");
  const btnTermsCancel = document.getElementById("btn-terms-cancel");
  const btnTermsConfirm = document.getElementById("btn-terms-confirm");
  const btnTermsClose = document.getElementById("btn-terms-close");
  const linkOpenTerms = document.getElementById("link-open-terms");
  const btnNavTerms = document.getElementById("btn-nav-terms");
  const chkAgreeTerms = document.getElementById("chk-agree-terms");

  let pendingAuthUser = null;
  let pendingRemember = false;
  let pendingEmail = "";

  function closeTermsModal() {
    if (termsModal) {
      termsModal.classList.add("hidden");
      termsModal.style.display = "none";
    }
    pendingAuthUser = null;
  }

  function promptTermsConsent(user, remember, email) {
    pendingAuthUser = user;
    pendingRemember = remember;
    pendingEmail = email;

    if (termsPreview) {
      const personaTitles = {
        gig_worker: "🛵 Mobility / Gig Delivery Partner",
        kirana_merchant: "🏪 Kirana Micro-Merchant",
        thin_file_fresher: "🎓 Student / Gen-Z (New-to-Credit)",
        seasonal_trader: "🌾 Agri / Seasonal Produce Trader"
      };
      const title = personaTitles[selectedOnboardingPersona] || "Consenting Borrower";
      let details = "";
      if (selectedOnboardingPersona === "gig_worker" || selectedOnboardingPersona === "kirana_merchant") {
        const bName = document.getElementById("onboard-business-name")?.value || "Business Partner";
        const turnover = document.getElementById("onboard-daily-turnover")?.value || "2,200";
        const qr = document.getElementById("onboard-qr-provider")?.value || "UPI";
        details = `Entity: <strong>${escapeHtml(bName)}</strong> • Daily UPI Volume: <strong>₹${escapeHtml(turnover)}</strong> (${escapeHtml(qr)})`;
      } else if (selectedOnboardingPersona === "thin_file_fresher") {
        const college = document.getElementById("onboard-student-college")?.value || "University Student";
        const stipend = document.getElementById("onboard-student-stipend")?.value || "12,000";
        const fam = document.getElementById("onboard-family-income")?.value || "MID";
        details = `Institution: <strong>${escapeHtml(college)}</strong> • Monthly Stipend: <strong>₹${escapeHtml(stipend)}</strong> • Family Tier: <strong>${fam}</strong>`;
      } else {
        const crop = document.getElementById("onboard-agri-crop")?.value || "Produce / Craft";
        const cycle = document.getElementById("onboard-agri-cycle")?.value || "Biannual";
        details = `Commodity: <strong>${escapeHtml(crop)}</strong> • Inflow Cycle: <strong>${escapeHtml(cycle)}</strong>`;
      }
      termsPreview.innerHTML = `Borrower Segment: <strong>${title}</strong><br>${details}`;
    }

    if (termsModal) {
      termsModal.classList.remove("hidden");
      termsModal.style.display = "flex";
    }
  }

  if (btnTermsCancel) {
    btnTermsCancel.addEventListener("click", closeTermsModal);
  }

  if (btnTermsClose) {
    btnTermsClose.addEventListener("click", closeTermsModal);
  }

  if (termsModal) {
    termsModal.addEventListener("click", (e) => {
      if (e.target === termsModal) {
        closeTermsModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && termsModal && !termsModal.classList.contains("hidden") && termsModal.style.display !== "none") {
      closeTermsModal();
    }
  });

  if (linkOpenTerms) {
    linkOpenTerms.addEventListener("click", (e) => {
      e.preventDefault();
      promptTermsConsent(null, false, "");
    });
  }

  if (btnNavTerms) {
    btnNavTerms.addEventListener("click", (e) => {
      e.preventDefault();
      promptTermsConsent(null, false, "");
    });
  }

  if (btnTermsConfirm) {
    btnTermsConfirm.addEventListener("click", () => {
      if (!chkAgreeTerms || chkAgreeTerms.checked) {
        closeTermsModal();

        const activePersona = selectedOnboardingPersona || "gig_worker";
        localStorage.setItem("bcm_active_persona", activePersona);
        currentPersonaKey = activePersona;

        // If pendingAuthUser exists from signin submission, complete that auth
        if (pendingAuthUser) {
          handleAuthSuccess(pendingAuthUser, pendingRemember, pendingEmail);
        } else {
          // If triggered manually, authenticate as active borrower persona to unlock portal
          const fallbackNames = {
            gig_worker: "Rohan M.",
            kirana_merchant: "Sunita K.",
            thin_file_fresher: "Aarav S.",
            seasonal_trader: "Vikram R."
          };
          const personaUser = {
            id: `usr_${activePersona}`,
            email: `${activePersona}@bcmcredit.io`,
            name: fallbackNames[activePersona] || "Verified Borrower",
            role: "Verified Borrower",
            account_type: "BORROWER"
          };
          handleAuthSuccess(personaUser, true, personaUser.email);
          showToast(currentLang === "hi" ? "✓ सहमति दर्ज की गई और पोर्टल अनलॉक हुआ" : "✓ Consent authorized & portal unlocked", "success");
        }

        loadPersonaData(activePersona);

        // Select corresponding button in preset pills
        const targetBtn = document.querySelector(`.persona-btn[data-preset="${activePersona}"]`);
        if (targetBtn) {
          document.querySelectorAll(".persona-btn").forEach(b => b.classList.remove("selected"));
          targetBtn.classList.add("selected");
        }
      } else {
        alert("Please accept the Account Aggregator authorization to continue.");
      }
    });
  }

  // 6. Sign In Submission
  if (formSignin) {
    formSignin.addEventListener("submit", async (e) => {
      e.preventDefault();
      hideAlerts();

      let emailVal = (inputEmail.value || "").trim();
      let pwdVal = inputPassword.value || "";
      const rememberVal = checkboxRemember ? checkboxRemember.checked : false;

      // Smart default: If user clicks Sign In with blank fields, autofill with active persona
      if (!emailVal || !pwdVal) {
        const activeProfile = PERSONA_PROFILES[selectedOnboardingPersona] || PERSONA_PROFILES.gig_worker;
        if (!emailVal) {
          emailVal = activeProfile.email;
          inputEmail.value = emailVal;
        }
        if (!pwdVal) {
          pwdVal = activeProfile.password;
          inputPassword.value = pwdVal;
        }
        inputEmail.classList.remove("input-error");
        inputPassword.classList.remove("input-error");
        if (emailError) emailError.classList.add("hidden");
        if (passwordError) passwordError.classList.add("hidden");
      }

      let hasError = false;
      if (!isValidEmail(emailVal)) {
        inputEmail.classList.add("input-error");
        if (emailError) emailError.classList.remove("hidden");
        hasError = true;
      }
      if (pwdVal.length < 6) {
        inputPassword.classList.add("input-error");
        if (passwordError) passwordError.classList.remove("hidden");
        hasError = true;
      }
      if (hasError) {
        showLoginAlert("Please provide a valid email and minimum 6 character password.", "error");
        return;
      }

      // Loading state
      btnSubmitSignin.disabled = true;
      if (signinSpinner) signinSpinner.classList.remove("hidden");
      if (signinBtnText) signinBtnText.textContent = "Signing In...";

      try {
        const response = await fetch("/api/v1/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailVal,
            password: pwdVal,
            remember_me: rememberVal
          })
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.detail || data.error || "Authentication failed. Please verify credentials.");
        }

        if (data.user && (data.user.account_type === "BANK" || data.user.account_type === "LENDER")) {
          handleAuthSuccess(data.user, rememberVal, emailVal);
        } else {
          promptTermsConsent(data.user, rememberVal, emailVal);
        }
      } catch (err) {
        console.warn("[BCM Auth] Server request fallback:", err.message);

        // Graceful fallback for static demo or sandbox
        if (pwdVal.length >= 6) {
          let demoUser = null;
          const lowerEmail = emailVal.toLowerCase();

          if (lowerEmail.includes("alex") || lowerEmail.includes("bank")) {
            demoUser = {
              id: "usr_alex_01",
              email: emailVal,
              name: "Alex Turner",
              role: "Fintech Risk Analyst",
              account_type: "BANK"
            };
          } else if (lowerEmail.includes("rohan")) {
            demoUser = {
              id: "usr_rohan_02",
              email: emailVal,
              name: "Rohan M.",
              role: "Gig Mobility Partner",
              account_type: "BORROWER"
            };
          } else if (lowerEmail.includes("sunita")) {
            demoUser = {
              id: "usr_sunita_03",
              email: emailVal,
              name: "Sunita K.",
              role: "Kirana Micro-Merchant",
              account_type: "BORROWER"
            };
          } else if (lowerEmail.includes("aarav")) {
            demoUser = {
              id: "usr_aarav_04",
              email: emailVal,
              name: "Aarav S.",
              role: "Student / Gen-Z",
              account_type: "BORROWER"
            };
          } else if (lowerEmail.includes("vikram")) {
            demoUser = {
              id: "usr_vikram_05",
              email: emailVal,
              name: "Vikram R.",
              role: "Agricultural Produce Trader",
              account_type: "BORROWER"
            };
          } else {
            demoUser = {
              id: `usr_${Math.abs(emailVal.length * 17) % 1000}`,
              email: emailVal,
              name: emailVal.split("@")[0].replace(".", " ").replace(/\b\w/g, c => c.toUpperCase()),
              role: "Verified Borrower",
              account_type: "BORROWER"
            };
          }

          if (demoUser.account_type === "BANK") {
            handleAuthSuccess(demoUser, rememberVal, emailVal);
          } else {
            promptTermsConsent(demoUser, rememberVal, emailVal);
          }
        } else {
          showLoginAlert(err.message || "Invalid credentials. Please verify your email and password.", "error");
        }
      } finally {
        btnSubmitSignin.disabled = false;
        if (signinSpinner) signinSpinner.classList.add("hidden");
        if (signinBtnText) signinBtnText.textContent = "Sign In";
      }
    });
  }

  // 7. Register Form Submission
  if (formRegister) {
    formRegister.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = (regName.value || "").trim();
      const email = (regEmail.value || "").trim();
      const pwd = regPassword.value || "";
      const role = regRole.value || "BORROWER";

      if (!isValidEmail(email)) {
        showRegisterAlert("Please enter a valid email address.", "error");
        return;
      }
      if (pwd.length < 6) {
        showRegisterAlert("Password must be at least 6 characters long.", "error");
        return;
      }

      btnSubmitRegister.disabled = true;
      if (registerSpinner) registerSpinner.classList.remove("hidden");
      if (registerBtnText) registerBtnText.textContent = "Creating Account...";

      try {
        const response = await fetch("/api/v1/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            password: pwd,
            full_name: name,
            account_type: role
          })
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.detail || "Account creation failed.");
        }
        handleAuthSuccess(data.user, true, email);
      } catch (err) {
        // Fallback for static demo
        const newUser = {
          id: `usr_${Date.now() % 10000}`,
          email: email,
          name: name || email.split("@")[0].toUpperCase(),
          role: (role === "BANK" || role === "LENDER") ? "Institutional Underwriter" : "Consenting Borrower",
          account_type: role
        };
        handleAuthSuccess(newUser, true, email);
      } finally {
        btnSubmitRegister.disabled = false;
        if (registerSpinner) registerSpinner.classList.add("hidden");
        if (registerBtnText) registerBtnText.textContent = "Create Account";
      }
    });
  }

  // 8. Forgot Password Submission
  if (formForgot) {
    formForgot.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = (forgotEmail.value || "").trim();
      if (!isValidEmail(email)) {
        showForgotAlert("Please enter a valid email address.", "error");
        return;
      }

      btnSubmitForgot.disabled = true;
      if (forgotSpinner) forgotSpinner.classList.remove("hidden");
      if (forgotBtnText) forgotBtnText.textContent = "Sending Link...";

      try {
        const response = await fetch("/api/v1/auth/forgot-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: email })
        });
        const data = await response.json();
        showForgotAlert(data.message || `Recovery instructions dispatched to ${email}.`, "success");
      } catch (err) {
        showForgotAlert(`A secure password recovery link has been dispatched to ${email}.`, "success");
      } finally {
        btnSubmitForgot.disabled = false;
        if (forgotSpinner) forgotSpinner.classList.add("hidden");
        if (forgotBtnText) forgotBtnText.textContent = "Send Recovery Link";
      }
    });
  }

  // 9. Auth Success Handler & Session
  function handleAuthSuccess(user, remember, email) {
    localStorage.setItem("bcm_session", JSON.stringify(user));
    if (remember) {
      localStorage.setItem("bcm_remember_email", email);
    } else {
      localStorage.removeItem("bcm_remember_email");
    }
    unlockPortal(user, true);
  }

  function unlockPortal(user, isAnimated) {
    const displayName = user.name || user.email.split("@")[0];
    const roleBadge = user.role || ((user.account_type === "BANK" || user.account_type === "LENDER") ? "Bank / Underwriter" : "Borrower");
    userSessionDetails.textContent = `${displayName} • ${user.email} (${roleBadge})`;
    userSessionBar.classList.remove("hidden");

    if (cardholderDisplay) {
      cardholderDisplay.textContent = (user.name || displayName).toUpperCase();
    }

    // Auto-match perspective toggle if bank account
    if (user.account_type === "BANK" || user.account_type === "LENDER") {
      const btnLender = document.getElementById("toggle-lender");
      if (btnLender) btnLender.click();
    }

    overlay.classList.add("hidden");
    overlay.style.display = "none";
    portal.classList.remove("portal-locked");

    if (isAnimated) {
      portal.style.animation = "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    }
  }

  function lockPortal() {
    userSessionBar.classList.add("hidden");
    portal.classList.add("portal-locked");
    overlay.style.display = "flex";
    overlay.classList.remove("hidden");
    switchView(viewSignin);
  }

  // Logout Handler
  if (btnLogout) {
    btnLogout.addEventListener("click", () => {
      localStorage.removeItem("bcm_session");
      lockPortal();
      if (inputPassword) inputPassword.value = "";
    });
  }

  // Alert presentation helpers
  function showLoginAlert(msg, type = "error") {
    if (!loginAlert) return;
    loginAlertText.textContent = msg;
    loginAlert.className = `login-alert-banner ${type}`;
    loginAlert.classList.remove("hidden");
  }

  function showRegisterAlert(msg, type = "error") {
    if (!registerAlert) return;
    registerAlertText.textContent = msg;
    registerAlert.className = `login-alert-banner ${type}`;
    registerAlert.classList.remove("hidden");
  }

  function showForgotAlert(msg, type = "error") {
    if (!forgotAlert) return;
    forgotAlertText.textContent = msg;
    forgotAlert.className = `login-alert-banner ${type}`;
    forgotAlert.classList.remove("hidden");
  }
}

// ==========================================================================
// 4. PERSPECTIVE TOGGLE & DASHBOARD CONTROLS
// ==========================================================================
function initPerspectiveToggle() {
  const btnBorrower = document.getElementById("toggle-borrower");
  const btnLender = document.getElementById("toggle-lender");
  const borrowerSection = document.getElementById("borrower-view-section");
  const lenderSection = document.getElementById("lender-view-section");

  btnBorrower.addEventListener("click", () => {
    currentPerspective = "borrower";
    btnBorrower.classList.add("active");
    btnLender.classList.remove("active");
    borrowerSection.classList.remove("hidden");
    lenderSection.classList.remove("active");
  });

  btnLender.addEventListener("click", () => {
    currentPerspective = "lender";
    btnLender.classList.add("active");
    btnBorrower.classList.remove("active");
    borrowerSection.classList.add("hidden");
    lenderSection.classList.add("active");
  });
}

function initPresetButtons() {
  const buttons = document.querySelectorAll(".persona-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const presetId = btn.getAttribute("data-preset");
      buttons.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      loadPersonaData(presetId);
    });
  });
}

async function loadPersonaData(presetId) {
  currentPersonaKey = presetId;
  const drawer = document.getElementById("sandbox-tuning-drawer");

  if (presetId === "custom_sandbox") {
    if (drawer) {
      drawer.classList.remove("hidden");
    }
    updateSandboxCalculations();
    return;
  } else {
    if (drawer) {
      drawer.classList.add("hidden");
    }
  }

  try {
    const res = await fetch(`/api/v1/presets/${presetId}/score`, { cache: "no-store" });
    if (res.ok) {
      currentData = await res.json();
    } else {
      currentData = LOCAL_FALLBACK_DATA[presetId];
    }
  } catch (err) {
    currentData = LOCAL_FALLBACK_DATA[presetId];
  }

  renderDashboard(currentData);
}

function renderDashboard(data) {
  const { persona, assessment, policy, sample_transactions } = data;

  // Editorial Hero Profile Tag
  const heroProfileTag = document.getElementById("hero-profile-tag");
  if (heroProfileTag) {
    heroProfileTag.textContent = `PROFILE: ${(persona.role || persona.name).toUpperCase()}`;
  }

  // Persona Header & Initials
  document.getElementById("profile-name").textContent = persona.name;
  document.getElementById("profile-role").textContent = `${persona.role} • ${persona.headline}`;
  const avatarEl = document.getElementById("profile-avatar");
  if (avatarEl) {
    avatarEl.textContent = persona.initials || persona.name.split(" ").map(n => n[0]).join("");
  }

  // Human Review Tag
  const reviewTag = document.getElementById("human-review-badge");
  if (assessment.flagged_for_human_review || policy.escalated_to_underwriter) {
    reviewTag.className = "human-review-tag";
    reviewTag.innerHTML = `⚠️ Flagged for Underwriter Review`;
  } else {
    reviewTag.className = "human-review-tag clear";
    reviewTag.innerHTML = `✓ Automated Clearance`;
  }

  // Underwriting Decision Stamp (Approved vs Manual Review)
  const decisionStamp = document.getElementById("decision-stamp");
  if (decisionStamp) {
    if (assessment.flagged_for_human_review || policy.escalated_to_underwriter || assessment.decision !== "APPROVE") {
      decisionStamp.className = "financial-decision-stamp stamp-review";
      decisionStamp.innerHTML = `<span class="stamp-meta">BCM UNDERWRITING</span><span class="stamp-text">MANUAL REVIEW</span>`;
    } else {
      decisionStamp.className = "financial-decision-stamp stamp-approved";
      decisionStamp.innerHTML = `<span class="stamp-meta">BCM UNDERWRITING</span><span class="stamp-text">APPROVED</span>`;
    }
  }

  // Hero Score Card & Animated SVG Ring
  const scoreEl = document.getElementById("score-val");
  animateNumber(scoreEl, parseInt(scoreEl.textContent) || 500, assessment.score, 650);

  document.getElementById("tier-pill").textContent = assessment.tier.replace("_", " ");
  document.getElementById("rec-limit").textContent = `₹${assessment.recommended_limit.toLocaleString()}`;
  document.getElementById("indicative-apr").textContent = `${assessment.indicative_apr}%`;

  const confEl = document.getElementById("confidence-score");
  if (confEl) {
    confEl.textContent = `${Math.round((assessment.confidence_score || 0.92) * 100)}%`;
  }

  const maxScore = 850;
  const minScore = 300;
  const ratio = Math.max(0, Math.min(1, (assessment.score - minScore) / (maxScore - minScore)));
  const offset = 502 - (ratio * 502);
  const circle = document.getElementById("score-circle-progress");
  if (circle) {
    circle.style.strokeDashoffset = offset;
  }
  const circleGhost = document.getElementById("score-circle-ghost");
  if (circleGhost) {
    circleGhost.style.strokeDashoffset = offset;
    circleGhost.style.opacity = "0";
  }
  const projBadge = document.getElementById("score-projected-badge");
  if (projBadge) {
    projBadge.classList.add("hidden");
  }

  // Reset What-If Sliders
  document.getElementById("slider-buffer").value = 0;
  document.getElementById("val-buffer").textContent = "+0 Days";
  document.getElementById("slider-discipline").value = 0;
  document.getElementById("val-discipline").textContent = "+0%";
  updateWhatIfSimulation();

  // Specification 3: Render Personalized AI Financial Recovery Blueprint
  renderRecoveryBlueprint(data);

  // Behavioral Breakdown Cards with Accordion
  renderExplainabilityCards(assessment.explainability);

  // Bank Policy Rules Table
  renderPolicyTable(policy);

  // Transactions Table
  renderTransactionsTable(sample_transactions || []);

  // Bank Statement Financial Health Triage (Green / Yellow / Red)
  renderBankStatementTriage(currentPersonaKey);
}

function renderExplainabilityCards(factors) {
  const container = document.getElementById("factors-list");
  container.innerHTML = "";

  factors.forEach((item, idx) => {
    const isPos = item.direction === "POSITIVE";
    const sign = isPos ? "+" : "";
    const badgeClass = isPos ? "positive" : "negative";

    const card = document.createElement("div");
    card.className = `factor-card ${badgeClass}`;
    card.setAttribute("tabindex", "0");
    card.innerHTML = `
      <div class="factor-top-row">
        <span class="factor-title">${escapeHtml(item.display_name)}</span>
        <span class="factor-impact ${badgeClass}">${sign}${item.impact_points} pts</span>
      </div>
      <p class="factor-summary">${escapeHtml(item.summary)}</p>
      <div class="factor-bar-track">
        <div class="factor-bar-fill ${badgeClass}" style="width: ${Math.min(100, Math.abs(item.impact_points) * 2)}%;"></div>
      </div>
      <div class="factor-expand-row">
        <span>Click to inspect telemetry math & formula</span>
        <span class="expand-chevron">▼</span>
      </div>
      <div class="factor-deep-dive">
        <div class="deep-dive-grid">
          <div class="deep-dive-item">
            <label>Telemetry Metric</label>
            <div class="val">${escapeHtml(item.raw_metric || 'Verified')}</div>
          </div>
          <div class="deep-dive-item">
            <label>Quantitative Model</label>
            <div class="val" style="font-family: var(--font-mono); font-size: 11px;">${escapeHtml(item.formula || 'Shapley Additive')}</div>
          </div>
        </div>
        <p style="font-size: 12px; color: var(--bcm-charcoal-muted); margin-top: 8px;">
          ${escapeHtml(item.note || 'Contributes directly to baseline confidence index under FCRA adverse action transparency guidelines.')}
        </p>
      </div>
    `;

    // Interactive Accordion Click
    card.addEventListener("click", () => {
      const isExpanded = card.classList.contains("expanded");
      document.querySelectorAll(".factor-card").forEach(c => c.classList.remove("expanded"));
      if (!isExpanded) {
        card.classList.add("expanded");
      }
    });

    container.appendChild(card);
  });
}

function renderPolicyTable(policy) {
  const container = document.getElementById("policy-rules-list");
  container.innerHTML = "";

  (policy.policy_checks || []).forEach(rule => {
    const row = document.createElement("div");
    row.className = "policy-row";
    row.innerHTML = `
      <div>
        <div class="policy-rule-name">${escapeHtml(rule.name)} (${rule.rule_id})</div>
        <div class="policy-rule-desc">${escapeHtml(rule.detail)}</div>
      </div>
      <span class="policy-badge ${rule.status}">${rule.status}</span>
    `;
    container.appendChild(row);
  });

  const notesEl = document.getElementById("underwriter-notes");
  if (notesEl && policy.underwriter_notes) {
    notesEl.textContent = policy.underwriter_notes.join(" ");
  }
}

function renderTransactionsTable(transactions) {
  const tbody = document.getElementById("tx-table-body");
  tbody.innerHTML = "";

  transactions.forEach(t => {
    const isCredit = t.type === "CREDIT";
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${t.date}</td>
      <td><strong>${escapeHtml(t.desc)}</strong></td>
      <td><span style="background: var(--bcm-sandstone-elevated); padding: 2px 6px; border-radius: 4px; font-size: 11px;">${t.category}</span></td>
      <td class="${isCredit ? 'amount-credit' : 'amount-debit'}">${isCredit ? '+' : '-'}₹${t.amount.toFixed(2)}</td>
      <td>₹${t.balance.toFixed(2)}</td>
    `;
    tbody.appendChild(row);
  });
}

// ==========================================================================
// BANK STATEMENT FINANCIAL HEALTH TRIAGE CONTROLLER
// ==========================================================================
let currentTriageTab = "weekly";

function renderBankStatementTriage(personaKey) {
  const triage = TRIAGE_DATA[personaKey] || TRIAGE_DATA["gig_worker"];
  if (!triage) return;

  // 1. Update Card Theme Class
  const card = document.getElementById("bank-statement-triage-card");
  if (card) {
    card.className = `triage-main-card ${triage.flag}`;
  }

  // 2. Update Profile Header Badge
  const headlineBadge = document.getElementById("profile-triage-badge");
  if (headlineBadge) {
    headlineBadge.className = `triage-headline-badge ${triage.headlineClass}`;
    headlineBadge.textContent = triage.headlineTag;
  }

  // 3. Update Traffic Light Display
  const bulb = document.getElementById("main-traffic-bulb");
  if (bulb) {
    bulb.className = `traffic-bulb ${triage.bulbClass}`;
  }
  const label = document.getElementById("main-traffic-label");
  if (label) {
    label.textContent = triage.label;
  }

  // 4. Update Action Box
  const actionBox = document.getElementById("main-triage-action-box");
  if (actionBox) {
    actionBox.className = `triage-action-box ${triage.flag}`;
  }
  const actionIcon = document.getElementById("main-triage-action-icon");
  if (actionIcon) {
    actionIcon.textContent = triage.actionIcon;
  }
  const actionText = document.getElementById("main-triage-action-text");
  if (actionText) {
    actionText.textContent = triage.action;
  }

  // 5. Update Criteria Checklist
  triage.criteria.forEach(c => {
    const targetEl = document.getElementById(`crit-${c.id}-target`);
    const valEl = document.getElementById(`crit-${c.id}-val`);
    if (targetEl) targetEl.textContent = c.target;
    if (valEl) {
      valEl.textContent = c.val;
      valEl.className = `criteria-pill-status ${c.status}`;
    }
  });

  // 6. Update Advisory Checklist (for RED)
  const advisoryWrapper = document.getElementById("main-triage-advisory");
  const advisorySteps = document.getElementById("main-triage-advisory-steps");
  if (advisoryWrapper && advisorySteps) {
    if (triage.advisory && triage.advisory.length > 0) {
      advisoryWrapper.classList.remove("hidden");
      advisorySteps.innerHTML = triage.advisory.map(step => `
        <div class="triage-step-item">
          <div class="triage-step-number">${step.step}</div>
          <div class="triage-step-content">
            <strong>${escapeHtml(step.title)}</strong>
            <p>${escapeHtml(step.desc)}</p>
          </div>
        </div>
      `).join("");
    } else {
      advisoryWrapper.classList.add("hidden");
      advisorySteps.innerHTML = "";
    }
  }

  // 7. Render Aggregations Table
  renderTriageAggregationTable(personaKey, currentTriageTab);
}

function renderTriageAggregationTable(personaKey, tab) {
  const triage = TRIAGE_DATA[personaKey] || TRIAGE_DATA["gig_worker"];
  if (!triage) return;

  const tbody = document.getElementById("triage-table-body");
  if (!tbody) return;

  const rows = tab === "monthly" ? triage.monthly : triage.weekly;

  tbody.innerHTML = rows.map(r => `
    <tr>
      <td><strong>${escapeHtml(r.period)}</strong></td>
      <td style="color: #107C41; font-weight: 600;">+₹${r.inflow.toFixed(2)}</td>
      <td style="color: var(--bcm-charcoal-muted);">-₹${r.outflow.toFixed(2)}</td>
      <td>₹${r.debt.toFixed(2)}</td>
      <td style="font-weight: 700; color: ${r.net >= 0 ? '#107C41' : '#C5221F'};">
        ${r.net >= 0 ? '+' : ''}₹${r.net.toFixed(2)}
      </td>
      <td>
        <span class="${r.surplus ? 't-tag-surplus' : 't-tag-deficit'}">
          ${r.surplus ? '✓ SURPLUS' : '⚠️ DEFICIT'}
        </span>
      </td>
      <td>
        ${r.bounces > 0 ? `<span class="t-tag-bounce">${r.bounces} BOUNCE</span>` : '<span style="color: #9CA3AF;">0</span>'}
      </td>
    </tr>
  `).join("");
}

function switchTriageTable(tab) {
  currentTriageTab = tab;
  const btnWeekly = document.getElementById("btn-triage-weekly");
  const btnMonthly = document.getElementById("btn-triage-monthly");
  if (btnWeekly) btnWeekly.classList.toggle("active", tab === "weekly");
  if (btnMonthly) btnMonthly.classList.toggle("active", tab === "monthly");
  
  renderTriageAggregationTable(currentPersonaKey || "gig_worker", tab);
}
window.switchTriageTable = switchTriageTable;


// ==========================================================================
// 5. WHAT-IF SENSITIVITY SIMULATOR & ANNUAL SAVINGS
// ==========================================================================
function initWhatIfSliders() {
  const sliderBuffer = document.getElementById("slider-buffer");
  const sliderDiscipline = document.getElementById("slider-discipline");

  sliderBuffer.addEventListener("input", (e) => {
    document.getElementById("val-buffer").textContent = `+${e.target.value} Days`;
    updateWhatIfSimulation();
  });

  sliderDiscipline.addEventListener("input", (e) => {
    document.getElementById("val-discipline").textContent = `+${e.target.value}%`;
    updateWhatIfSimulation();
  });
}

function updateWhatIfSimulation() {
  const baseScore = currentData.assessment.score;
  const bufferVal = parseFloat(document.getElementById("slider-buffer").value) || 0;
  const discVal = parseFloat(document.getElementById("slider-discipline").value) || 0;

  const delta = Math.round((bufferVal * 1.4) + (discVal * 0.75));
  const projectedScore = Math.min(850, baseScore + delta);

  let projApr = currentData.assessment.indicative_apr;
  let projLimit = currentData.assessment.recommended_limit;

  if (projectedScore >= 740) {
    projApr = 11.5;
    projLimit = 10000;
  } else if (projectedScore >= 670) {
    projApr = 14.8;
    projLimit = 6500;
  } else if (projectedScore >= 590) {
    projApr = 18.5;
    projLimit = 2500;
  }

  // Celebration banner & soft Sage dial glow when crossing 740 into Tier A
  const celebrationBanner = document.getElementById("tier-a-celebration-banner");
  const radialGlow = document.getElementById("score-radial-glow");
  if (projectedScore >= 740) {
    if (celebrationBanner) celebrationBanner.classList.remove("hidden");
    if (radialGlow) radialGlow.classList.add("tier-a-glow");
  } else {
    if (celebrationBanner) celebrationBanner.classList.add("hidden");
    if (radialGlow) radialGlow.classList.remove("tier-a-glow");
  }

  // Specification 2: Dual-Ghost Arc Physics & Live Delta Badge
  const circleGhost = document.getElementById("score-circle-ghost");
  const circleProgress = document.getElementById("score-circle-progress");
  const projBadge = document.getElementById("score-projected-badge");
  const projNum = document.getElementById("score-proj-num");
  const projDelta = document.getElementById("score-proj-delta");

  const baseRatio = Math.max(0, Math.min(1, (baseScore - 300) / 550));
  const baseOffset = 502 - (baseRatio * 502);

  // Baseline arc strictly stays at baseline score
  if (circleProgress) {
    circleProgress.style.strokeDashoffset = baseOffset;
  }

  if (delta > 0) {
    const projRatio = Math.max(0, Math.min(1, (projectedScore - 300) / 550));
    const projOffset = 502 - (projRatio * 502);

    if (circleGhost) {
      circleGhost.style.strokeDashoffset = projOffset;
      circleGhost.style.opacity = "1";
    }
    if (projBadge) {
      projBadge.classList.remove("hidden");
    }
    if (projNum) {
      projNum.textContent = projectedScore;
    }
    if (projDelta) {
      projDelta.textContent = `(+${delta} pts)`;
    }
  } else {
    if (circleGhost) {
      circleGhost.style.strokeDashoffset = baseOffset;
      circleGhost.style.opacity = "0";
    }
    if (projBadge) {
      projBadge.classList.add("hidden");
    }
  }

  // Annual savings calculation (₹ / year)
  const baseApr = currentData.assessment.indicative_apr;
  const aprSavingsPct = Math.max(0, baseApr - projApr);
  const annualSavings = Math.round((projLimit * (aprSavingsPct / 100)));

  const deltaBadge = document.getElementById("sim-delta-badge");
  deltaBadge.textContent = delta > 0 ? `+${delta} pts projection` : (currentLang === "hi" ? "आधारभूत (Baseline)" : "Baseline");

  document.getElementById("proj-score").textContent = projectedScore;
  document.getElementById("proj-apr").textContent = `${projApr}%`;
  document.getElementById("proj-limit").textContent = `₹${projLimit.toLocaleString()}`;
  document.getElementById("proj-savings").textContent = annualSavings > 0 
    ? `+₹${annualSavings} ${currentLang === "hi" ? "/ वर्ष बचत" : "/ year saved"}` 
    : (currentLang === "hi" ? "₹0 / वर्ष (आधारभूत)" : "₹0 / year (Baseline)");
}

// ==========================================================================
// SPECIFICATION 3: AI FINANCIAL RECOVERY BLUEPRINT
// ==========================================================================
function renderRecoveryBlueprint(data) {
  const { assessment, persona, policy } = data;
  const container = document.getElementById("ai-recovery-blueprint");
  const actionsList = document.getElementById("blueprint-actions-list");
  const statusTag = document.getElementById("blueprint-status-tag");
  if (!container || !actionsList) return;

  const isLowOrHalted = assessment.score < 670 || assessment.tier === "TIER_C" || assessment.flagged_for_human_review || policy.escalated_to_underwriter;

  if (isLowOrHalted) {
    container.classList.remove("hidden");
    if (statusTag) {
      statusTag.className = "blueprint-status-tag priority";
      statusTag.textContent = currentLang === "hi" ? "प्राथमिकता कार्रवाई आवश्यक" : "Priority Action Required";
    }

    const m = assessment.behavioral_metrics || {};
    const liquidityDays = m.liquidity_buffer_days || 3.2;

    const items = [
      {
        icon: "💼",
        title: currentLang === "hi" ? "कार्यशील पूंजी (Liquidity) बफर बढ़ाएं" : "Working Capital Buffer Enhancement",
        desc: currentLang === "hi" 
          ? `वर्तमान लिक्विडिटी ${liquidityDays} दिनों से बढ़ाकर 14 दिन करें। फसल बिक्री का अधिशेष बनाए रखें।`
          : `Elevate liquid cash float from ${liquidityDays} days to 14.0 days by holding post-harvest proceeds.`,
        impact: "+35 pts PDI",
        timeframe: currentLang === "hi" ? "45-60 दिन" : "45-60 Days"
      },
      {
        icon: "⚖️",
        title: currentLang === "hi" ? "ऋण सेवा अनुपात (DSR) सामान्यीकरण" : "Debt-Service Ratio Normalization",
        desc: currentLang === "hi"
          ? `उपकरण और ट्रैक्टर लीज भुगतानों को फसल चक्र के अनुसार पुनर्गठित कर DSR को 40% से नीचे लाएं।`
          : `Restructure equipment and tractor lease payments to align with harvest receipt cycles, reducing DSR below 40%.`,
        impact: "+28 pts DISR",
        timeframe: currentLang === "hi" ? "30-45 दिन" : "30-45 Days"
      },
      {
        icon: "📱",
        title: currentLang === "hi" ? "डिजिटल मंडी लेन-देन प्रवाह" : "Digital Mandi Transaction Cadence",
        desc: currentLang === "hi"
          ? `मंडी के 35% से अधिक लेन-देन को सत्यापित UPI QR के माध्यम से संचालित करें ताकि निरंतर डिजिटल रिकॉर्ड बने।`
          : `Route 35% more agricultural settlement proceeds through verified UPI QR trails to evidence consistent business velocity.`,
        impact: "+22 pts Velocity",
        timeframe: currentLang === "hi" ? "15-30 दिन" : "15-30 Days"
      }
    ];

    actionsList.innerHTML = items.map(item => `
      <div class="blueprint-action-item">
        <div class="action-top-cluster">
          <div class="action-icon-disc">${item.icon}</div>
          <div class="action-content">
            <h5>${escapeHtml(item.title)}</h5>
            <p>${escapeHtml(item.desc)}</p>
          </div>
        </div>
        <div class="action-footer-meta">
          <span class="action-impact-badge">${escapeHtml(item.impact)}</span>
          <span class="action-timeframe">${escapeHtml(item.timeframe)}</span>
        </div>
      </div>
    `).join("");
  } else {
    // Cleanly hide for prime profiles (Tier A / B with automated clearance)
    container.classList.add("hidden");
  }
}

// ==========================================================================
// SPECIFICATION 4: BANK MANUAL OVERRIDE & AUDIT TRIAGE TOOLBAR
// ==========================================================================
function initLenderOverrides() {
  const btnApprove = document.getElementById("btn-override-approve");
  const btnGuarantor = document.getElementById("btn-override-guarantor");
  const btnHalt = document.getElementById("btn-override-halt");

  if (btnApprove) {
    btnApprove.addEventListener("click", () => applyUnderwriterOverride("APPROVE_EXCEPTION"));
  }
  if (btnGuarantor) {
    btnGuarantor.addEventListener("click", () => applyUnderwriterOverride("REQUEST_GUARANTOR"));
  }
  if (btnHalt) {
    btnHalt.addEventListener("click", () => applyUnderwriterOverride("ENFORCE_HALT"));
  }
}

function applyUnderwriterOverride(actionType) {
  const now = new Date();
  const timeStr = now.toISOString().replace("T", " ").substring(0, 19);
  const reviewBadge = document.getElementById("human-review-badge");
  const decisionStamp = document.getElementById("decision-stamp");
  const stateBadge = document.getElementById("override-state-badge");

  if (actionType === "APPROVE_EXCEPTION") {
    currentData.assessment.flagged_for_human_review = false;
    currentData.policy.escalated_to_underwriter = false;
    currentData.assessment.decision = "APPROVE";

    if (reviewBadge) {
      reviewBadge.className = "human-review-tag clear";
      reviewBadge.innerHTML = currentLang === "hi" ? "✓ विशेष स्वीकृति प्रदान की गई" : "✓ Approved via Underwriter Exception";
    }
    if (decisionStamp) {
      decisionStamp.className = "financial-decision-stamp stamp-approved";
      decisionStamp.innerHTML = `<span class="stamp-meta">BCM UNDERWRITING</span><span class="stamp-text">APPROVED</span>`;
    }
    if (stateBadge) {
      stateBadge.className = "state-badge approved";
      stateBadge.textContent = currentLang === "hi" ? "विशेष स्वीकृति सक्रिय" : "Exception Approved";
    }

    appendAuditEntry(timeStr, "[OVERRIDE-APP-01]", "Underwriter exception granted based on alternative asset evaluation and verified merchant credentials.");
    showToast(currentLang === "hi" ? "✓ अंडरराइटर द्वारा विशेष स्वीकृति प्रदान की गई" : "✓ Profile approved under Exception Policy POL-EXC-09", "success");
  } else if (actionType === "ENFORCE_HALT") {
    currentData.assessment.flagged_for_human_review = true;
    currentData.policy.escalated_to_underwriter = true;
    currentData.assessment.decision = "HALT";

    if (reviewBadge) {
      reviewBadge.className = "human-review-tag halted";
      reviewBadge.innerHTML = currentLang === "hi" ? "⛔ अंडरराइटर द्वारा ऋण रोक" : "⛔ Halted by Risk Underwriter";
    }
    if (decisionStamp) {
      decisionStamp.className = "financial-decision-stamp stamp-review";
      decisionStamp.innerHTML = `<span class="stamp-meta">BCM UNDERWRITING</span><span class="stamp-text">HALTED</span>`;
    }
    if (stateBadge) {
      stateBadge.className = "state-badge halted";
      stateBadge.textContent = currentLang === "hi" ? "ऋण रोक लागू" : "Halted by Underwriter";
    }

    appendAuditEntry(timeStr, "[OVERRIDE-HALT-03]", "Risk halt enforced. Unhedged seasonal cashflow volatility and excessive leverage threshold breach.");
    showToast(currentLang === "hi" ? "⚠️ अंडरराइटर जोखिम नीति द्वारा खाता रोका गया" : "⚠️ Profile halted by risk underwriter policy", "halt");
  } else if (actionType === "REQUEST_GUARANTOR") {
    currentData.assessment.decision = "CONDITIONAL_APPROVAL";

    if (reviewBadge) {
      reviewBadge.className = "human-review-tag guarantor";
      reviewBadge.innerHTML = currentLang === "hi" ? "🛡️ सशर्त स्वीकृति (गारंटर आवश्यक)" : "🛡️ Conditional Approval (Guarantor Required)";
    }
    if (decisionStamp) {
      decisionStamp.className = "financial-decision-stamp stamp-review";
      decisionStamp.innerHTML = `<span class="stamp-meta">BCM UNDERWRITING</span><span class="stamp-text">CONDITIONAL</span>`;
    }
    if (stateBadge) {
      stateBadge.className = "state-badge guarantor";
      stateBadge.textContent = currentLang === "hi" ? "गारंटर आवश्यक" : "Guarantor Required";
    }

    appendAuditEntry(timeStr, "[OVERRIDE-GUA-02]", "Conditional approval registered. Bridge financing conditional upon co-guarantor pledge or invoice lien.");
    showToast(currentLang === "hi" ? "🛡️ सशर्त स्वीकृति: गारंटर या जमानतदार आवश्यक" : "🛡️ Conditional approval recorded (Guarantor required)", "guarantor");
  }

  renderRecoveryBlueprint(currentData);
}

function appendAuditEntry(time, code, text) {
  const auditLog = document.getElementById("underwriter-audit-log");
  if (!auditLog) return;
  const entry = document.createElement("div");
  entry.className = "audit-entry";
  entry.innerHTML = `
    <span class="audit-time">${escapeHtml(time)}</span>
    <span class="audit-code">${escapeHtml(code)}</span>
    <span class="audit-text">${escapeHtml(text)}</span>
  `;
  auditLog.prepend(entry);
}

function showToast(message, type = "success") {
  const container = document.getElementById("bcm-toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = `bcm-toast ${type}`;
  toast.innerHTML = `<span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ==========================================================================
// SPECIFICATION 5: BILINGUAL LOCALIZATION SYSTEM
// ==========================================================================
function initLocalization() {
  const btnEn = document.getElementById("lang-en");
  const btnHi = document.getElementById("lang-hi");

  if (btnEn) {
    btnEn.addEventListener("click", () => setLanguage("en"));
  }
  if (btnHi) {
    btnHi.addEventListener("click", () => setLanguage("hi"));
  }

  // Apply initial saved language
  setLanguage(currentLang);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("bcm_lang", lang);

  const btnEn = document.getElementById("lang-en");
  const btnHi = document.getElementById("lang-hi");
  if (btnEn && btnHi) {
    btnEn.classList.toggle("active", lang === "en");
    btnHi.classList.toggle("active", lang === "hi");
  }

  const dict = I18N[lang] || I18N.en;

  // Translate all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Re-render dynamic elements with current language strings
  if (currentData) {
    renderRecoveryBlueprint(currentData);
    updateWhatIfSimulation();
  }
}

function animateNumber(el, start, end, duration) {
  if (start === end) {
    el.textContent = end;
    return;
  }
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(start + (end - start) * ease);
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ==========================================================================
// FEATURE 2: LIVE PARAMETER TUNING DRAWER & TELEMETRY ENGINE
// ==========================================================================
let sandboxParams = {
  revenue: 2500,
  volatility: "low",    // "low" (0.15), "medium" (0.42), "high" (0.85)
  bounces: 0,           // 0, 1, 2
  surplus: 35,          // 10 to 50 (%)
  studentMode: false,
  stipend: 12000,
  familyTier: "mid"     // "low" (<3L), "mid" (3L-8L), "high" (>8L)
};

function initSandboxDrawer() {
  const drawer = document.getElementById("sandbox-tuning-drawer");
  if (!drawer) return;

  // 1. Revenue Slider
  const sliderRev = document.getElementById("slider-sandbox-revenue");
  const lblRev = document.getElementById("lbl-sandbox-revenue");
  if (sliderRev) {
    sliderRev.addEventListener("input", (e) => {
      sandboxParams.revenue = parseInt(e.target.value, 10);
      if (lblRev) lblRev.textContent = `₹${sandboxParams.revenue.toLocaleString()} / day`;
      updateSandboxCalculations();
    });
  }

  // 2. Volatility Segmented Control
  const segVol = document.getElementById("seg-sandbox-volatility");
  const lblVol = document.getElementById("lbl-sandbox-volatility");
  if (segVol) {
    const btns = segVol.querySelectorAll(".seg-btn");
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        btns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        sandboxParams.volatility = btn.getAttribute("data-val");
        if (lblVol) {
          const valMap = { low: "Low (0.15)", medium: "Medium (0.42)", high: "High (0.85)" };
          lblVol.textContent = valMap[sandboxParams.volatility] || sandboxParams.volatility;
        }
        updateSandboxCalculations();
      });
    });
  }

  // 3. NACH Bounces Segmented Control
  const segBounces = document.getElementById("seg-sandbox-bounces");
  const lblBounces = document.getElementById("lbl-sandbox-bounces");
  if (segBounces) {
    const btns = segBounces.querySelectorAll(".seg-btn");
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        btns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        sandboxParams.bounces = parseInt(btn.getAttribute("data-val"), 10);
        if (lblBounces) {
          lblBounces.textContent = sandboxParams.bounces === 0 ? "0 Bounces" : sandboxParams.bounces === 1 ? "1 Delay" : "2+ Bounces";
        }
        updateSandboxCalculations();
      });
    });
  }

  // 4. Free Surplus Margin Slider
  const sliderSurplus = document.getElementById("slider-sandbox-surplus");
  const lblSurplus = document.getElementById("lbl-sandbox-surplus");
  if (sliderSurplus) {
    sliderSurplus.addEventListener("input", (e) => {
      sandboxParams.surplus = parseInt(e.target.value, 10);
      if (lblSurplus) lblSurplus.textContent = `${sandboxParams.surplus}% Surplus`;
      updateSandboxCalculations();
    });
  }

  // 5. Student Mode Toggle
  const chkStudent = document.getElementById("chk-student-mode");
  const studentControls = document.getElementById("student-addon-controls");
  if (chkStudent) {
    chkStudent.addEventListener("change", (e) => {
      sandboxParams.studentMode = e.target.checked;
      if (studentControls) {
        studentControls.classList.toggle("hidden", !sandboxParams.studentMode);
      }
      updateSandboxCalculations();
    });
  }

  // 6. Student Stipend Slider
  const sliderStipend = document.getElementById("slider-sandbox-stipend");
  const lblStipend = document.getElementById("lbl-sandbox-stipend");
  if (sliderStipend) {
    sliderStipend.addEventListener("input", (e) => {
      sandboxParams.stipend = parseInt(e.target.value, 10);
      if (lblStipend) lblStipend.textContent = `₹${sandboxParams.stipend.toLocaleString()} / mo`;
      updateSandboxCalculations();
    });
  }

  // 7. Student Family Tier Segmented Control
  const segFamily = document.getElementById("seg-sandbox-family");
  const lblFamily = document.getElementById("lbl-sandbox-family");
  if (segFamily) {
    const btns = segFamily.querySelectorAll(".seg-btn");
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        btns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        sandboxParams.familyTier = btn.getAttribute("data-val");
        if (lblFamily) {
          const map = { low: "< ₹3L", mid: "₹3L – ₹8L", high: "> ₹8L" };
          lblFamily.textContent = `${map[sandboxParams.familyTier]} / yr`;
        }
        updateSandboxCalculations();
      });
    });
  }
}

function updateSandboxCalculations() {
  const rev = sandboxParams.revenue;
  const vol = sandboxParams.volatility;
  const bounces = sandboxParams.bounces;
  const surplus = sandboxParams.surplus;

  // 1. Live Score Calculation (300 to 900)
  // Base score 560
  const revScore = Math.min(160, Math.round(((rev - 500) / 29500) * 160));
  const volScore = vol === "low" ? 50 : vol === "medium" ? 0 : -75;
  const bounceScore = bounces === 0 ? 45 : bounces === 1 ? -45 : -190;
  const surplusScore = Math.round(((surplus - 10) / 40) * 65) - 20;

  let studentBonus = 0;
  if (sandboxParams.studentMode) {
    const stipendBonus = Math.round(((sandboxParams.stipend - 2000) / 38000) * 30);
    const familyBonus = sandboxParams.familyTier === "high" ? 25 : sandboxParams.familyTier === "mid" ? 10 : -10;
    studentBonus = stipendBonus + familyBonus;
  }

  let finalScore = Math.round(560 + revScore + volScore + bounceScore + surplusScore + studentBonus);
  finalScore = Math.max(320, Math.min(885, finalScore));

  // Hard Underwriting Caps:
  if (bounces >= 2) {
    finalScore = Math.min(finalScore, 540); // Strict RED locked
  } else if (bounces === 1) {
    finalScore = Math.min(finalScore, 695); // Cannot be prime green
  }

  // 2. Deterministic Triage Assignment
  let flag = "GREEN";
  let triageBadgeClass = "green";
  let triageTag = "🟢 Auto-Sanction STP";
  let triageAction = "Auto-Sanction STP: Pre-approved instant facility based on live parameterized cashflow.";
  let quickAction = "Auto-Sanction STP";
  let decision = "APPROVE";
  let tier = "TIER_A";

  if (bounces >= 2 || finalScore < 580) {
    flag = "RED";
    triageBadgeClass = "red";
    triageTag = "🔴 Credit Gate Locked";
    triageAction = "Credit Gate Locked: High volatility or bounce threshold breach. Rehabilitation advisory active.";
    quickAction = "Credit Gate Locked";
    decision = "HALT";
    tier = "TIER_C";
  } else if (bounces === 1 || finalScore < 720 || vol === "high") {
    flag = "YELLOW";
    triageBadgeClass = "yellow";
    triageTag = "🟡 Conditional Sanction (WFL)";
    triageAction = "Conditional sanction with tranche-based drawdowns and daily auto-debit collection.";
    quickAction = "Tranche Drawdown WFL";
    decision = "CONDITIONAL_APPROVAL";
    tier = "TIER_B";
  }

  // 3. Derived Financial Metrics
  const volFactor = vol === "low" ? 1.15 : vol === "medium" ? 0.95 : 0.72;
  const dscrNum = parseFloat(((1.0 + (surplus / 100) * 1.45) * volFactor).toFixed(2));
  const dscrVal = dscrNum.toFixed(2);

  let recLimit = 0;
  if (flag === "GREEN") {
    recLimit = Math.max(5000, Math.round((rev * 3.6) / 500) * 500);
  } else if (flag === "YELLOW") {
    recLimit = Math.max(2500, Math.round((rev * 1.8) / 500) * 500);
  } else {
    recLimit = 0;
  }

  let estApr = 12.0;
  if (flag === "GREEN") {
    estApr = parseFloat((11.0 + (885 - finalScore) * 0.018).toFixed(1));
  } else if (flag === "YELLOW") {
    estApr = parseFloat((15.2 + (720 - finalScore) * 0.026).toFixed(1));
  } else {
    estApr = parseFloat((21.5 + (580 - finalScore) * 0.02).toFixed(1));
  }

  // 4. Update Drawer UI Elements
  const liveScoreEl = document.getElementById("sandbox-live-score");
  if (liveScoreEl) liveScoreEl.textContent = finalScore;

  const liveTriageEl = document.getElementById("sandbox-live-triage");
  const liveTriageText = document.getElementById("sandbox-live-triage-text");
  if (liveTriageEl && liveTriageText) {
    liveTriageEl.className = `sandbox-triage-badge ${triageBadgeClass}`;
    liveTriageText.textContent = triageTag;
  }

  const qDscr = document.getElementById("sandbox-q-dscr");
  if (qDscr) {
    qDscr.textContent = `${dscrVal}x`;
    qDscr.className = `q-val ${triageBadgeClass}`;
  }

  const qLimit = document.getElementById("sandbox-q-limit");
  if (qLimit) {
    qLimit.textContent = flag === "RED" ? "₹0 (Locked)" : `₹${recLimit.toLocaleString()}`;
  }

  const qApr = document.getElementById("sandbox-q-apr");
  if (qApr) qApr.textContent = `${estApr}%`;

  const qAction = document.getElementById("sandbox-q-action");
  if (qAction) {
    qAction.textContent = quickAction;
    qAction.className = `q-val ${triageBadgeClass}`;
  }

  // 5. Generate 7-Day Mock Statement Ledger
  const mockTransactions = generate7DayMockLedger(rev, vol, bounces, surplus);

  // 6. Update Fallback Data for custom_sandbox
  const volCvMap = { low: 0.15, medium: 0.42, high: 0.85 };
  const volCv = volCvMap[vol] || 0.25;

  LOCAL_FALLBACK_DATA.custom_sandbox.assessment.score = finalScore;
  LOCAL_FALLBACK_DATA.custom_sandbox.assessment.tier = tier;
  LOCAL_FALLBACK_DATA.custom_sandbox.assessment.decision = decision;
  LOCAL_FALLBACK_DATA.custom_sandbox.assessment.recommended_limit = recLimit;
  LOCAL_FALLBACK_DATA.custom_sandbox.assessment.indicative_apr = estApr;
  LOCAL_FALLBACK_DATA.custom_sandbox.assessment.confidence_score = 0.95;
  LOCAL_FALLBACK_DATA.custom_sandbox.assessment.behavioral_metrics = {
    cashflow_entropy: vol === "low" ? 0.32 : vol === "medium" ? 0.54 : 0.76,
    income_volatility: volCv,
    payment_discipline_index: bounces === 0 ? 95.0 : bounces === 1 ? 72.0 : 38.0,
    business_activity_velocity: Math.min(96, Math.round(40 + (rev / 30000) * 55)),
    debt_stress_ratio: parseFloat((1 - (surplus / 100)).toFixed(2)),
    liquidity_buffer_days: parseFloat(((surplus / 100) * 45).toFixed(1))
  };

  LOCAL_FALLBACK_DATA.custom_sandbox.assessment.explainability = [
    {
      feature_name: "daily_inflow_velocity",
      display_name: "Parameterized Inflow Velocity",
      impact_points: revScore > 0 ? revScore : 10,
      direction: "POSITIVE",
      summary: `Daily turnover of ₹${rev.toLocaleString()} provides verified debt servicing headroom.`,
      raw_metric: `₹${rev.toLocaleString()} / day`,
      formula: `V_in = ₹${rev.toLocaleString()}/d`,
      note: "Adjusted in real-time from sandbox revenue slider."
    },
    {
      feature_name: "volatility_dispersion",
      display_name: "Cashflow Volatility & Stability",
      impact_points: volScore,
      direction: volScore >= 0 ? "POSITIVE" : "NEGATIVE",
      summary: vol === "low" 
        ? "Low daily dispersion provides predictable repayment safety." 
        : vol === "medium" 
        ? "Moderate variance cushioned by daily transaction velocity." 
        : "High cashflow volatility penalizes predictability and requires reserve cushion.",
      raw_metric: `CV: ${volCv}`,
      formula: `CV = ${volCv}`,
      note: "Adjusted via volatility segmented control."
    },
    {
      feature_name: "nach_mandate_integrity",
      display_name: "NACH / Auto-Debit Punctuality",
      impact_points: bounceScore,
      direction: bounceScore >= 0 ? "POSITIVE" : "NEGATIVE",
      summary: bounces === 0 
        ? "Flawless mandate clearance streak with zero dishonours in 90 days." 
        : bounces === 1 
        ? "1 payment delay registered in recent 90-day window." 
        : "≥2 mandate dishonours detected. Immediate high-risk lockout policy active.",
      raw_metric: `${bounces} Bounces`,
      formula: `B_90d = ${bounces}`,
      note: "Mandate integrity check."
    },
    {
      feature_name: "free_surplus_cushion",
      display_name: "Operating Surplus & DSCR Headroom",
      impact_points: surplusScore,
      direction: surplusScore >= 0 ? "POSITIVE" : "NEGATIVE",
      summary: `Free operating surplus of ${surplus}% provides ${dscrVal}x debt service coverage ratio.`,
      raw_metric: `${surplus}% Margin (${dscrVal}x DSCR)`,
      formula: `DSCR = ${dscrVal}x`,
      note: "Adjusted via free surplus slider."
    }
  ];

  if (sandboxParams.studentMode) {
    LOCAL_FALLBACK_DATA.custom_sandbox.assessment.explainability.push({
      feature_name: "student_proxy_matrix",
      display_name: "Student Proxy Underwriting Matrix",
      impact_points: studentBonus,
      direction: studentBonus >= 0 ? "POSITIVE" : "NEGATIVE",
      summary: `Monthly allowance of ₹${sandboxParams.stipend.toLocaleString()} with ${sandboxParams.familyTier.toUpperCase()} family economic proxy tier.`,
      raw_metric: `₹${sandboxParams.stipend.toLocaleString()}/mo • Tier: ${sandboxParams.familyTier.toUpperCase()}`,
      formula: "Proxy_Score = Stipend_Flow + Family_Tier",
      note: "Active student underwriting matrix."
    });
  }

  LOCAL_FALLBACK_DATA.custom_sandbox.assessment.flagged_for_human_review = (flag === "RED");
  LOCAL_FALLBACK_DATA.custom_sandbox.policy.escalated_to_underwriter = (flag === "RED");
  LOCAL_FALLBACK_DATA.custom_sandbox.policy.policy_decision = flag === "GREEN" ? "APPROVE" : flag === "YELLOW" ? "CONDITIONAL" : "HALT";
  LOCAL_FALLBACK_DATA.custom_sandbox.sample_transactions = mockTransactions;

  // 7. Update TRIAGE_DATA for custom_sandbox
  const weeklyInflow = Math.round(rev * 7);
  const weeklyOutflow = Math.round(weeklyInflow * (1 - surplus / 100));
  const weeklyDebt = Math.round(weeklyInflow * 0.12);
  const weeklyNet = weeklyInflow - weeklyOutflow;

  TRIAGE_DATA.custom_sandbox = {
    flag: flag,
    label: flag === "GREEN" ? "🟢 GREEN (Safe to Lend / Prime)" : flag === "YELLOW" ? "🟡 YELLOW (Moderate Risk / Caution)" : "🔴 RED (High Risk / Cash Deficit)",
    headlineTag: flag === "GREEN" ? "🟢 GREEN: Prime STP" : flag === "YELLOW" ? "🟡 YELLOW: Caution" : "🔴 RED: High Deficit",
    headlineClass: triageBadgeClass,
    bulbClass: `bulb-${triageBadgeClass}`,
    actionIcon: flag === "GREEN" ? "🚀" : flag === "YELLOW" ? "⚠️" : "🛑",
    action: triageAction,
    criteria: [
      { id: "dscr", target: "Target ≥ 1.5x", val: `${dscrVal}x`, status: dscrNum >= 1.5 ? "pass" : dscrNum >= 1.0 ? "warn" : "fail" },
      { id: "vol", target: "Target ≤ 0.35", val: `${volCv}`, status: volCv <= 0.35 ? "pass" : volCv <= 0.65 ? "warn" : "fail" },
      { id: "bounces", target: "0 NACH Bounces", val: `${bounces} Bounce${bounces === 1 ? "" : "s"}`, status: bounces === 0 ? "pass" : bounces === 1 ? "warn" : "fail" },
      { id: "surplus", target: "Target ≥ 85%", val: flag === "GREEN" ? "100.0%" : flag === "YELLOW" ? "75.0%" : "25.0%", status: flag === "GREEN" ? "pass" : flag === "YELLOW" ? "warn" : "fail" }
    ],
    advisory: flag === "RED" ? [
      { step: 1, title: "Immediate Operating Cash Runway", desc: "Build minimum 14-day operational cash float from daily UPI collections before seeking credit drawdowns." },
      { step: 2, title: "Resolve NACH Mandate Dishonour Charges", desc: "Align auto-debit presentation dates to coincide directly with highest gross inflow settlement days." },
      { step: 3, title: "Expenditure Consolidation & Pruning", desc: "Trim discretionary outflows to elevate free operating surplus margin from current levels toward 25%+." },
      { step: 4, title: "Inflow Dispersion Smoothing", desc: "Broaden QR customer acceptance to suppress weekly variance coefficient below 0.35." },
      { step: 5, title: "Automated Re-audit Pipeline", desc: "Maintain 4 consecutive weeks of positive net operating cashflow to unblock STP underwriting." }
    ] : null,
    weekly: [
      { period: "Week 1", inflow: weeklyInflow, outflow: weeklyOutflow, debt: weeklyDebt, net: weeklyNet, surplus: weeklyNet > 0, bounces: 0 },
      { period: "Week 2", inflow: Math.round(weeklyInflow * 1.05), outflow: weeklyOutflow, debt: weeklyDebt, net: Math.round(weeklyInflow * 1.05) - weeklyOutflow, surplus: true, bounces: 0 },
      { period: "Week 3", inflow: Math.round(weeklyInflow * (bounces >= 2 ? 0.65 : 0.95)), outflow: weeklyOutflow, debt: weeklyDebt, net: Math.round(weeklyInflow * (bounces >= 2 ? 0.65 : 0.95)) - weeklyOutflow, surplus: bounces < 2, bounces: bounces >= 1 ? 1 : 0 },
      { period: "Week 4", inflow: Math.round(weeklyInflow * 1.02), outflow: weeklyOutflow, debt: weeklyDebt, net: Math.round(weeklyInflow * 1.02) - weeklyOutflow, surplus: true, bounces: bounces >= 2 ? 1 : 0 }
    ],
    monthly: [
      { period: "Month 1 (Jun)", inflow: Math.round(weeklyInflow * 4), outflow: Math.round(weeklyOutflow * 4), debt: Math.round(weeklyDebt * 4), net: Math.round(weeklyNet * 4), surplus: weeklyNet > 0, bounces: 0 },
      { period: "Month 2 (Jul)", inflow: Math.round(weeklyInflow * 4.1), outflow: Math.round(weeklyOutflow * 4.1), debt: Math.round(weeklyDebt * 4), net: Math.round(weeklyNet * 4.1), surplus: true, bounces: bounces >= 1 ? 1 : 0 },
      { period: "Month 3 (Aug)", inflow: Math.round(weeklyInflow * (bounces >= 2 ? 3.2 : 3.9)), outflow: Math.round(weeklyOutflow * 4), debt: Math.round(weeklyDebt * 4), net: Math.round(weeklyInflow * (bounces >= 2 ? 3.2 : 3.9)) - Math.round(weeklyOutflow * 4), surplus: bounces < 2, bounces: bounces >= 2 ? 1 : 0 }
    ]
  };

  // 8. Re-render Dashboard
  currentData = LOCAL_FALLBACK_DATA.custom_sandbox;
  renderDashboard(currentData);
}

function generate7DayMockLedger(rev, vol, bounces, surplus) {
  const dates = [
    "2026-09-14",
    "2026-09-15",
    "2026-09-16",
    "2026-09-17",
    "2026-09-18",
    "2026-09-19",
    "2026-09-20"
  ];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const volMult = vol === "low" ? 0.08 : vol === "medium" ? 0.25 : 0.55;

  let balance = Math.round(rev * 5.5);
  const txs = [];

  for (let i = 0; i < 7; i++) {
    const wave = Math.sin((i + 1) * 1.5);
    let creditAmt = Math.round(rev * (1 + wave * volMult));
    creditAmt = Math.max(200, creditAmt);
    balance += creditAmt;

    // Credit entry (Daily UPI Settlement)
    txs.push({
      id: `tx_sb_${i + 1}a`,
      date: dates[i],
      desc: `Daily UPI Merchant Settlement (${days[i]})`,
      category: "INCOME",
      amount: creditAmt,
      type: "CREDIT",
      balance: balance
    });

    // Outflow entry (Supplier / Inventory / Operating)
    const outflowRatio = 1 - (surplus / 100);
    const debitAmt = Math.round(creditAmt * outflowRatio * (0.85 + ((i % 3) * 0.1)));
    if (debitAmt > 0) {
      balance -= debitAmt;
      const categories = ["SUPPLIER", "INVENTORY", "UTILITY", "OPERATING"];
      const descList = [
        "Inventory Restock / Supplier Payment",
        "Utility & Platform Services Debit",
        "Commercial Fuel & Logistics",
        "Store Operating Supplies"
      ];
      txs.push({
        id: `tx_sb_${i + 1}b`,
        date: dates[i],
        desc: descList[i % descList.length],
        category: categories[i % categories.length],
        amount: debitAmt,
        type: "DEBIT",
        balance: balance
      });
    }

    // NACH bounce entry if applicable
    if (bounces >= 1 && (i === 2 || (bounces >= 2 && i === 5))) {
      const penalty = 450.0;
      balance -= penalty;
      txs.push({
        id: `tx_sb_bounce_${i}`,
        date: dates[i],
        desc: "⚠️ NACH Mandate Return (Insufficient Funds Penalty)",
        category: "BOUNCE_PENALTY",
        amount: penalty,
        type: "DEBIT",
        balance: balance
      });
    }
  }

  return txs.slice(-7);
}

