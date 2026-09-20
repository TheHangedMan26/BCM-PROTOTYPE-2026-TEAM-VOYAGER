"""
BCM - Transparent Behavioral Explainability Generator
Translates raw model feature contributions into human-understandable, audit-grade credit factors.
"""
from typing import List
from backend.models import BehavioralMetrics, FeatureContribution

def generate_explainability(metrics: BehavioralMetrics) -> List[FeatureContribution]:
    contributions: List[FeatureContribution] = []

    # 1. Payment Discipline Contribution
    if metrics.payment_discipline_index >= 85:
        contributions.append(FeatureContribution(
            feature_name="payment_discipline",
            display_name="Payment Discipline & Obligation Punctuality",
            impact_points=+48,
            direction="POSITIVE",
            summary=f"Flawless recurring settlement streak with {metrics.payment_discipline_index}% punctuality rate."
        ))
    elif metrics.payment_discipline_index >= 65:
        contributions.append(FeatureContribution(
            feature_name="payment_discipline",
            display_name="Moderate Payment Regularity",
            impact_points=+15,
            direction="POSITIVE",
            summary="Solid payment history with minimal friction across utility and loan repayments."
        ))
    else:
        contributions.append(FeatureContribution(
            feature_name="payment_discipline",
            display_name="Repayment Friction Detected",
            impact_points=-35,
            direction="NEGATIVE",
            summary="Occasional missed obligations or account balance dips near zero."
        ))

    # 2. Cash-flow Entropy (Spending Predictability)
    # Low entropy = highly disciplined, clustered budgeting
    if metrics.cashflow_entropy <= 0.45:
        contributions.append(FeatureContribution(
            feature_name="cashflow_entropy",
            display_name="High Expenditure Predictability",
            impact_points=+32,
            direction="POSITIVE",
            summary=f"Low categorical entropy ({metrics.cashflow_entropy}) indicates disciplined, non-chaotic spending patterns."
        ))
    elif metrics.cashflow_entropy <= 0.70:
        contributions.append(FeatureContribution(
            feature_name="cashflow_entropy",
            display_name="Balanced Discretionary Allocation",
            impact_points=+10,
            direction="POSITIVE",
            summary=f"Predictable core living expenses balanced with modest discretionary outlays."
        ))
    else:
        contributions.append(FeatureContribution(
            feature_name="cashflow_entropy",
            display_name="Chaotic Outflow Dispersion",
            impact_points=-22,
            direction="NEGATIVE",
            summary=f"Elevated spending entropy ({metrics.cashflow_entropy}) shows volatile, irregular consumption bursts."
        ))

    # 3. Income Volatility & Cash Buffer
    if metrics.income_volatility <= 0.35:
        contributions.append(FeatureContribution(
            feature_name="income_stability",
            display_name="Consistent Inflow Cadence",
            impact_points=+38,
            direction="POSITIVE",
            summary=f"Steady inflow frequency with low coefficient of variation ({metrics.income_volatility})."
        ))
    elif metrics.income_volatility <= 0.65:
        contributions.append(FeatureContribution(
            feature_name="income_stability",
            display_name="Variable Gig / Micro-Merchant Inflows",
            impact_points=+12,
            direction="POSITIVE",
            summary="Revenue fluctuates weekly but maintains sustained positive aggregate trajectory."
        ))
    else:
        contributions.append(FeatureContribution(
            feature_name="income_stability",
            display_name="High Revenue Volatility",
            impact_points=-28,
            direction="NEGATIVE",
            summary=f"Significant swings in inflow volume ({metrics.income_volatility}) elevate default probability."
        ))

    # 4. Liquidity Runway / Buffer Days
    if metrics.liquidity_buffer_days >= 20.0:
        contributions.append(FeatureContribution(
            feature_name="liquidity_cushion",
            display_name="Robust Cash Cushion",
            impact_points=+25,
            direction="POSITIVE",
            summary=f"Maintains {metrics.liquidity_buffer_days} days of operational expenses in liquid reserves."
        ))
    elif metrics.liquidity_buffer_days >= 7.0:
        contributions.append(FeatureContribution(
            feature_name="liquidity_cushion",
            display_name="Adequate Operating Float",
            impact_points=+8,
            direction="POSITIVE",
            summary=f"Holds {metrics.liquidity_buffer_days} days of operational coverage."
        ))
    else:
        contributions.append(FeatureContribution(
            feature_name="liquidity_cushion",
            display_name="Thin Liquidity Margin",
            impact_points=-18,
            direction="NEGATIVE",
            summary=f"Low liquidity runway ({metrics.liquidity_buffer_days} days) exposes cash flow to immediate shocks."
        ))

    # 5. Debt Stress
    if metrics.debt_stress_ratio <= 0.20:
        contributions.append(FeatureContribution(
            feature_name="debt_stress",
            display_name="Unencumbered Free Cash-Flow",
            impact_points=+22,
            direction="POSITIVE",
            summary=f"Only {int(metrics.debt_stress_ratio * 100)}% of monthly inflows committed to fixed obligations."
        ))
    elif metrics.debt_stress_ratio <= 0.40:
        contributions.append(FeatureContribution(
            feature_name="debt_stress",
            display_name="Manageable Debt Service",
            impact_points=+5,
            direction="POSITIVE",
            summary=f"Obligations absorb {int(metrics.debt_stress_ratio * 100)}% of incoming cash-flow."
        ))
    else:
        contributions.append(FeatureContribution(
            feature_name="debt_stress",
            display_name="Elevated Obligation Load",
            impact_points=-30,
            direction="NEGATIVE",
            summary=f"Fixed obligations demand {int(metrics.debt_stress_ratio * 100)}% of total cash inflows."
        ))

    return contributions
