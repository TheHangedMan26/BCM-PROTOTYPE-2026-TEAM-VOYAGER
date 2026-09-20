"""
BCM - Credit Scoring Engine
Maps behavioral financial features into an alternative credit score (300-850),
underwriting tiers, recommended credit lines, and indicative APRs.
"""
import uuid
from datetime import datetime
from backend.models import BehavioralMetrics, CreditAssessment
from ml.explainability import generate_explainability

BASE_SCORE = 580

def calculate_score(metrics: BehavioralMetrics, user_id: str = "usr_demo") -> CreditAssessment:
    explainability = generate_explainability(metrics)
    
    total_impact = sum(item.impact_points for item in explainability)
    velocity_bonus = int((metrics.business_activity_velocity / 100.0) * 30)
    
    raw_score = BASE_SCORE + total_impact + velocity_bonus
    final_score = max(300, min(850, raw_score))

    flagged_for_human_review = False
    review_reasons = []

    if final_score >= 740:
        tier = "TIER_A"
        decision = "APPROVE"
        recommended_limit = 10000.0
        indicative_apr = 11.5
    elif final_score >= 670:
        tier = "TIER_B"
        decision = "APPROVE"
        recommended_limit = 6500.0
        indicative_apr = 14.8
    elif final_score >= 590:
        tier = "TIER_C"
        decision = "CONDITIONAL"
        recommended_limit = 2500.0
        indicative_apr = 18.5
    else:
        tier = "TIER_D"
        decision = "DECLINE"
        recommended_limit = 500.0
        indicative_apr = 24.0

    if metrics.income_volatility > 0.65 and metrics.payment_discipline_index > 80:
        flagged_for_human_review = True
        review_reasons.append("High income variance masked by resilient payment discipline. Manual cashflow audit recommended.")

    if metrics.liquidity_buffer_days < 5.0 and final_score >= 670:
        flagged_for_human_review = True
        review_reasons.append("Eligible score but critical low-liquidity cushion (< 5 days). Review secondary reserves.")

    if metrics.debt_stress_ratio > 0.45:
        flagged_for_human_review = True
        review_reasons.append("Elevated debt servicing ratio (> 45% of gross inflow).")

    confidence_score = round(min(0.98, 0.70 + (metrics.business_activity_velocity * 0.0028)), 2)

    return CreditAssessment(
        assessment_id=f"BCM-ASSESS-{uuid.uuid4().hex[:8].upper()}",
        user_id=user_id,
        score=final_score,
        tier=tier,
        decision=decision,
        recommended_limit=recommended_limit,
        indicative_apr=indicative_apr,
        confidence_score=confidence_score,
        behavioral_metrics=metrics,
        explainability=explainability,
        flagged_for_human_review=flagged_for_human_review,
        review_reasons=review_reasons,
        generated_at=datetime.utcnow().isoformat()
    )

def simulate_what_if(
    base_score: int,
    buffer_days_adjustment: float = 0.0,
    discipline_adjustment: float = 0.0,
    volatility_reduction_pct: float = 0.0
) -> dict:
    score_delta = 0
    
    if buffer_days_adjustment > 0:
        score_delta += int(min(35, buffer_days_adjustment * 1.5))
    
    if discipline_adjustment > 0:
        score_delta += int(min(45, discipline_adjustment * 0.8))
        
    if volatility_reduction_pct > 0:
        score_delta += int(min(30, (volatility_reduction_pct / 100.0) * 35))

    projected_score = min(850, base_score + score_delta)
    
    if projected_score >= 740:
        projected_tier = "TIER_A (Prime Alt)"
        projected_apr = 11.5
        projected_limit = 10000.0
    elif projected_score >= 670:
        projected_tier = "TIER_B (Near-Prime)"
        projected_apr = 14.8
        projected_limit = 6500.0
    elif projected_score >= 590:
        projected_tier = "TIER_C (Conditional)"
        projected_apr = 18.5
        projected_limit = 2500.0
    else:
        projected_tier = "TIER_D (Referral)"
        projected_apr = 24.0
        projected_limit = 500.0

    return {
        "projected_score": projected_score,
        "delta": score_delta,
        "projected_tier": projected_tier,
        "projected_apr": projected_apr,
        "projected_limit": projected_limit
    }
