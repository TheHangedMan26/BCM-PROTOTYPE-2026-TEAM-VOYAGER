"""
Test Suite for Bank Statement Financial Health Triage (Green / Yellow / Red)
Automated verification of underwriting criteria boundaries, aggregations, and deterministic flags.
"""

import sys
import unittest
from financial_health_triage import (
    StatementRecord,
    aggregate_weekly_and_monthly,
    compute_triage_metrics,
    evaluate_financial_health_triage,
    get_prime_green_dataset,
    get_moderate_yellow_dataset,
    get_high_risk_red_dataset,
)

class TestFinancialHealthTriage(unittest.TestCase):

    def test_prime_green_criteria(self):
        """
        Verify 🟢 GREEN (Safe to Lend / Prime) criteria:
        - DSCR ≥ 1.5x
        - Weekly Volatility ≤ 0.35
        - 0 Debit/NACH Bounces
        - Positive net surplus in ≥ 85% of audited weeks
        - Action: Pre-approved for instant working capital facility; auto-disbursement eligible.
        """
        records = get_prime_green_dataset()
        result = evaluate_financial_health_triage(records)

        self.assertEqual(result["flag"], "GREEN")
        self.assertIn("🟢 GREEN", result["status_label"])
        self.assertEqual(
            result["action"],
            "Pre-approved for instant working capital facility; auto-disbursement eligible."
        )

        metrics = result["metrics"]
        self.assertGreaterEqual(metrics["dscr"], 1.5, "DSCR must be >= 1.5x for Green")
        self.assertLessEqual(metrics["weekly_volatility"], 0.35, "Volatility must be <= 0.35 for Green")
        self.assertEqual(metrics["total_bounces"], 0, "Bounces must be exactly 0 for Green")
        self.assertGreaterEqual(metrics["surplus_weeks_pct"], 85.0, "Surplus weeks % must be >= 85% for Green")
        self.assertIsNone(result["advisory_checklist"], "Green should not require red advisory checklist")

    def test_moderate_yellow_criteria(self):
        """
        Verify 🟡 YELLOW (Moderate Risk / Caution) criteria:
        - 1.0x ≤ DSCR < 1.5x
        - Volatility between 0.35 and 0.65
        - ≤ 1 payment delay/bounce in 90 days
        - Action: Conditional sanction with tranche-based drawdowns and daily auto-debit collection.
        """
        records = get_moderate_yellow_dataset()
        result = evaluate_financial_health_triage(records)

        self.assertEqual(result["flag"], "YELLOW")
        self.assertIn("🟡 YELLOW", result["status_label"])
        self.assertEqual(
            result["action"],
            "Conditional sanction with tranche-based drawdowns and daily auto-debit collection."
        )

        metrics = result["metrics"]
        self.assertGreaterEqual(metrics["dscr"], 1.0, "DSCR must be >= 1.0x for Yellow")
        self.assertLess(metrics["dscr"], 1.5, "DSCR must be < 1.5x for Yellow")
        self.assertGreater(metrics["weekly_volatility"], 0.35, "Volatility must be > 0.35 for Yellow")
        self.assertLessEqual(metrics["weekly_volatility"], 0.65, "Volatility must be <= 0.65 for Yellow")
        self.assertLessEqual(metrics["delays_or_bounces_90d"], 1, "Delays/bounces in 90d must be <= 1 for Yellow")
        self.assertIsNone(result["advisory_checklist"])

    def test_high_risk_red_criteria(self):
        """
        Verify 🔴 RED (High Risk / Cash Deficit) criteria:
        - DSCR < 1.0x (Outflows exceed inflows), Volatility > 0.65, ≥ 2 bounced debits, or persistent weekly deficit
        - Action: Decline application; output structured advisory checklist to repair liquidity runway.
        """
        records = get_high_risk_red_dataset()
        result = evaluate_financial_health_triage(records)

        self.assertEqual(result["flag"], "RED")
        self.assertIn("🔴 RED", result["status_label"])
        self.assertEqual(
            result["action"],
            "Decline application; output structured advisory checklist to repair liquidity runway."
        )

        metrics = result["metrics"]
        # Trigger conditions
        self.assertTrue(
            metrics["dscr"] < 1.0 or
            metrics["weekly_volatility"] > 0.65 or
            metrics["total_bounces"] >= 2 or
            metrics["persistent_weekly_deficit"],
            "At least one primary Red condition must trigger"
        )
        self.assertLess(metrics["dscr"], 1.0, "Outflows exceed inflows so DSCR < 1.0x")
        self.assertGreaterEqual(metrics["total_bounces"], 2, "Bounces count >= 2")

        # Advisory checklist validation
        self.assertIsNotNone(result["advisory_checklist"])
        self.assertEqual(len(result["advisory_checklist"]), 5)
        step_titles = [item["title"] for item in result["advisory_checklist"]]
        self.assertIn("Immediate Cash Runway Cushion", step_titles)
        self.assertIn("Consolidate High-Cost Fixed Obligations", step_titles)
        self.assertIn("Eliminate NACH & Debit Dishonour Penalties", step_titles)
        self.assertIn("Smoothen Weekly Inflow Volatility", step_titles)
        self.assertIn("60–90 Day Rehabilitation Re-audit", step_titles)

    def test_weekly_and_monthly_aggregations(self):
        """
        Verify statement time-series weekly and monthly aggregations sum properly.
        """
        records = get_prime_green_dataset()
        agg = aggregate_weekly_and_monthly(records)

        self.assertIn("weekly", agg)
        self.assertIn("monthly", agg)
        self.assertEqual(len(agg["weekly"]), 12)
        self.assertGreaterEqual(len(agg["monthly"]), 3)

        total_weekly_inflows = sum(w["inflow"] for w in agg["weekly"])
        total_monthly_inflows = sum(m["inflow"] for m in agg["monthly"])
        raw_inflows = sum(r.amount for r in records if r.type == "CREDIT")

        self.assertAlmostEqual(total_weekly_inflows, raw_inflows, places=2)
        self.assertAlmostEqual(total_monthly_inflows, raw_inflows, places=2)

if __name__ == "__main__":
    unittest.main(verbosity=2)
