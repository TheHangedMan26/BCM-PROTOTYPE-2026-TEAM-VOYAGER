"""
BCM - Behavioral Feature Engineering Pipeline
Calculates:
1. Cash-flow Entropy (Shannon Entropy of categorical expenses)
2. Inflow Volatility (Coefficient of Variation)
3. Payment Discipline Index (Punctuality and overdraft resistance)
4. Business Activity Velocity
5. Debt-Stress & Liquidity Buffer Days
"""
import math
from typing import List, Dict
from collections import defaultdict
from backend.models import NormalizedTransaction, BehavioralMetrics

def calculate_shannon_entropy(category_spend: Dict[str, float]) -> float:
    total = sum(category_spend.values())
    if total <= 0:
        return 0.0
    
    entropy = 0.0
    for amt in category_spend.values():
        if amt > 0:
            p = amt / total
            entropy -= p * math.log2(p)
            
    max_entropy = math.log2(max(8, len(category_spend)))
    return round(min(1.0, entropy / max_entropy), 3) if max_entropy > 0 else 0.5

def compute_behavioral_metrics(transactions: List[NormalizedTransaction]) -> BehavioralMetrics:
    if not transactions:
        return BehavioralMetrics(
            cashflow_entropy=0.5,
            income_volatility=0.4,
            payment_discipline_index=50.0,
            business_activity_velocity=50.0,
            debt_stress_ratio=0.3,
            liquidity_buffer_days=14.0
        )

    category_spend: Dict[str, float] = defaultdict(float)
    inflows: List[float] = []
    outflows: List[float] = []
    recurring_bills_paid = 0
    recurring_bills_total = 0
    negative_balance_events = 0

    for tx in transactions:
        tx_type = tx.type.upper() if isinstance(tx.type, str) else str(tx.type)
        cat_str = tx.category if isinstance(tx.category, str) else str(tx.category)

        if "CREDIT" in tx_type:
            inflows.append(tx.amount)
        else:
            outflows.append(tx.amount)
            category_spend[cat_str] += tx.amount
            if tx.is_recurring and any(x in cat_str for x in ["RENT", "UTILITY", "LOAN_REPAYMENT"]):
                recurring_bills_total += 1
                recurring_bills_paid += 1

        if tx.balance_after < 0:
            negative_balance_events += 1

    entropy = calculate_shannon_entropy(category_spend)

    if inflows:
        mean_inflow = sum(inflows) / len(inflows)
        variance = sum((x - mean_inflow) ** 2 for x in inflows) / len(inflows)
        std_inflow = math.sqrt(variance)
        cv_inflow = (std_inflow / mean_inflow) if mean_inflow > 0 else 0.5
        income_volatility = round(min(1.0, cv_inflow), 3)
    else:
        income_volatility = 0.8

    base_discipline = 82.0
    if recurring_bills_total > 0:
        punctuality_ratio = recurring_bills_paid / recurring_bills_total
        base_discipline = punctuality_ratio * 92.0
    
    penalty = negative_balance_events * 15.0
    payment_discipline = round(max(10.0, min(99.0, base_discipline - penalty)), 1)

    tx_count = len(transactions)
    velocity = min(100.0, tx_count * 3.2)

    total_inflow = sum(inflows) or 1.0
    debt_payments = category_spend.get("LOAN_REPAYMENT", 0.0) + (category_spend.get("RENT", 0.0) * 0.4)
    debt_stress = round(min(1.0, debt_payments / total_inflow), 3)

    avg_daily_outflow = (sum(outflows) / 30.0) if outflows else 1.0
    latest_balance = transactions[-1].balance_after if transactions else 0.0
    buffer_days = round(max(0.0, latest_balance / avg_daily_outflow), 1)

    return BehavioralMetrics(
        cashflow_entropy=entropy,
        income_volatility=income_volatility,
        payment_discipline_index=payment_discipline,
        business_activity_velocity=round(velocity, 1),
        debt_stress_ratio=debt_stress,
        liquidity_buffer_days=buffer_days
    )
