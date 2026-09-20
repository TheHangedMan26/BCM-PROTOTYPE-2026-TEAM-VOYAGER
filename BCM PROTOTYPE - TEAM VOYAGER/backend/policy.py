"""
BCM - Underwriting Policy Engine & Human Review Triage
Implements deterministic risk policies and flags edge cases for underwriter triage.
"""
from typing import Dict, Any, List
from backend.models import CreditAssessment, BehavioralMetrics

class PolicyDecisionEngine:
    @staticmethod
    def evaluate_policy(assessment: CreditAssessment) -> Dict[str, Any]:
        metrics = assessment.behavioral_metrics
        policy_checks = []
        requires_escalation = False

        # Rule 1: Cash Cushion Solvency
        if metrics.liquidity_buffer_days < 7.0:
            policy_checks.append({
                "rule_id": "POL-LIQ-01",
                "name": "Minimum Liquidity Floor",
                "status": "FAIL" if metrics.liquidity_buffer_days < 3.0 else "WARN",
                "detail": f"Liquid reserves cover {metrics.liquidity_buffer_days} days of outflows (target >= 7.0 days)."
            })
            if metrics.liquidity_buffer_days < 3.0:
                requires_escalation = True
        else:
            policy_checks.append({
                "rule_id": "POL-LIQ-01",
                "name": "Minimum Liquidity Floor",
                "status": "PASS",
                "detail": f"Sufficient liquidity runway ({metrics.liquidity_buffer_days} days)."
            })

        # Rule 2: Debt Service Coverage
        if metrics.debt_stress_ratio > 0.40:
            policy_checks.append({
                "rule_id": "POL-DEBT-02",
                "name": "Maximum Debt-Service Ratio",
                "status": "FAIL",
                "detail": f"Fixed obligations absorb {int(metrics.debt_stress_ratio * 100)}% of recurring inflows (threshold: 40%)."
            })
            requires_escalation = True
        else:
            policy_checks.append({
                "rule_id": "POL-DEBT-02",
                "name": "Maximum Debt-Service Ratio",
                "status": "PASS",
                "detail": f"Debt servicing remains within safe bounds ({int(metrics.debt_stress_ratio * 100)}%)."
            })

        # Rule 3: Repayment Discipline Streak
        if metrics.payment_discipline_index >= 80.0:
            policy_checks.append({
                "rule_id": "POL-DISC-03",
                "name": "Recurring Punctuality Benchmark",
                "status": "PASS",
                "detail": f"Exemplary payment punctuality at {metrics.payment_discipline_index}%."
            })
        elif metrics.payment_discipline_index >= 60.0:
            policy_checks.append({
                "rule_id": "POL-DISC-03",
                "name": "Recurring Punctuality Benchmark",
                "status": "WARN",
                "detail": f"Moderate payment reliability ({metrics.payment_discipline_index}%)."
            })
        else:
            policy_checks.append({
                "rule_id": "POL-DISC-03",
                "name": "Recurring Punctuality Benchmark",
                "status": "FAIL",
                "detail": f"Low punctuality or frequent overdrafts ({metrics.payment_discipline_index}%)."
            })
            requires_escalation = True

        # Rule 4: Income Volatility vs Business Velocity
        if metrics.income_volatility > 0.60 and metrics.business_activity_velocity < 40.0:
            policy_checks.append({
                "rule_id": "POL-VOL-04",
                "name": "Inflow Stability & Velocity Parity",
                "status": "WARN",
                "detail": "High revenue volatility without sufficient transactional velocity."
            })
            requires_escalation = True
        else:
            policy_checks.append({
                "rule_id": "POL-VOL-04",
                "name": "Inflow Stability & Velocity Parity",
                "status": "PASS",
                "detail": "Inflow cadence aligns with risk appetite."
            })

        return {
            "policy_decision": "MANUAL_REVIEW" if (requires_escalation or assessment.flagged_for_human_review) else assessment.decision,
            "escalated_to_underwriter": requires_escalation or assessment.flagged_for_human_review,
            "policy_checks": policy_checks,
            "approved_limit": assessment.recommended_limit,
            "apr": assessment.indicative_apr,
            "underwriter_notes": assessment.review_reasons or ["Standard automated clearance under BCM Alternative Risk Model."]
        }
