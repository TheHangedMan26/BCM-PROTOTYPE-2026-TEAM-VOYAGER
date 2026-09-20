"""
BCM (Because Credit Matters) - Domain Models & Database Schemas
Dual-compatible with Pydantic and standard library Dataclasses to guarantee 
100% execution on any system even under strict Application Control policies.
"""
from datetime import datetime
from typing import List, Optional, Dict, Any
from enum import Enum
import json

class TransactionType(str, Enum):
    CREDIT = "CREDIT"
    DEBIT = "DEBIT"

class TransactionCategory(str, Enum):
    INCOME = "INCOME"
    BUSINESS_INFLOW = "BUSINESS_INFLOW"
    UTILITY = "UTILITY"
    SUPPLIER = "SUPPLIER"
    RENT = "RENT"
    GROCERY = "GROCERY"
    LOAN_REPAYMENT = "LOAN_REPAYMENT"
    DISCRETIONARY = "DISCRETIONARY"
    OTHER = "OTHER"

try:
    from pydantic import BaseModel, Field

    class RawTransaction(BaseModel):
        id: str
        timestamp: str
        amount: float
        type: str
        description: str
        category: Optional[str] = None
        balance_after: Optional[float] = None

    class NormalizedTransaction(BaseModel):
        id: str
        timestamp: str
        amount: float
        type: str
        category: str
        balance_after: float
        is_recurring: bool = False
        merchant_clean: str

    class BehavioralMetrics(BaseModel):
        cashflow_entropy: float
        income_volatility: float
        payment_discipline_index: float
        business_activity_velocity: float
        debt_stress_ratio: float
        liquidity_buffer_days: float

    class FeatureContribution(BaseModel):
        feature_name: str
        display_name: str
        impact_points: int
        direction: str
        summary: str

    class CreditAssessment(BaseModel):
        assessment_id: str
        user_id: str
        score: int
        tier: str
        decision: str
        recommended_limit: float
        indicative_apr: float
        confidence_score: float
        behavioral_metrics: BehavioralMetrics
        explainability: List[FeatureContribution]
        flagged_for_human_review: bool
        review_reasons: List[str] = []
        generated_at: str

    class IngestionRequest(BaseModel):
        user_id: str
        persona_id: Optional[str] = None
        transactions: List[RawTransaction]

    class IngestionResponse(BaseModel):
        status: str
        processed_count: int
        user_id: str
        assessment: CreditAssessment

    class SimulationRequest(BaseModel):
        base_score: int
        buffer_days_adjustment: float = 0.0
        discipline_adjustment: float = 0.0
        volatility_reduction_pct: float = 0.0

    class SimulationResponse(BaseModel):
        projected_score: int
        delta: int
        projected_tier: str
        projected_apr: float
        projected_limit: float

    class LoginRequest(BaseModel):
        email: str
        password: str
        remember_me: bool = False

    class RegisterRequest(BaseModel):
        full_name: str
        email: str
        password: str
        account_type: str = "BORROWER"

    class ForgotPasswordRequest(BaseModel):
        email: str

    class AuthResponse(BaseModel):
        status: str
        token: str
        user: Dict[str, Any]
        message: str = "Authenticated successfully"

except Exception:
    # Standard library fallback when C-extensions/Pydantic are blocked by OS policy
    class BaseDataClass:
        def __init__(self, **kwargs):
            for k, v in kwargs.items():
                setattr(self, k, v)
        def dict(self):
            res = {}
            for k, v in self.__dict__.items():
                if hasattr(v, "dict"):
                    res[k] = v.dict()
                elif isinstance(v, list):
                    res[k] = [x.dict() if hasattr(x, "dict") else x for x in v]
                else:
                    res[k] = v
            return res

    class RawTransaction(BaseDataClass):
        id: str
        timestamp: str
        amount: float
        type: str
        description: str
        category: Optional[str] = None
        balance_after: Optional[float] = None

    class NormalizedTransaction(BaseDataClass):
        id: str
        timestamp: str
        amount: float
        type: str
        category: str
        balance_after: float
        is_recurring: bool = False
        merchant_clean: str

    class BehavioralMetrics(BaseDataClass):
        cashflow_entropy: float
        income_volatility: float
        payment_discipline_index: float
        business_activity_velocity: float
        debt_stress_ratio: float
        liquidity_buffer_days: float

    class FeatureContribution(BaseDataClass):
        feature_name: str
        display_name: str
        impact_points: int
        direction: str
        summary: str

    class CreditAssessment(BaseDataClass):
        assessment_id: str
        user_id: str
        score: int
        tier: str
        decision: str
        recommended_limit: float
        indicative_apr: float
        confidence_score: float
        behavioral_metrics: BehavioralMetrics
        explainability: List[FeatureContribution]
        flagged_for_human_review: bool
        review_reasons: List[str]
        generated_at: str

    class IngestionRequest(BaseDataClass):
        user_id: str
        transactions: List[Any]
        persona_id: Optional[str] = None

    class IngestionResponse(BaseDataClass):
        status: str
        processed_count: int
        user_id: str
        assessment: Any

    class SimulationRequest(BaseDataClass):
        base_score: int
        buffer_days_adjustment: float = 0.0
        discipline_adjustment: float = 0.0
        volatility_reduction_pct: float = 0.0

    class SimulationResponse(BaseDataClass):
        projected_score: int
        delta: int
        projected_tier: str
        projected_apr: float
        projected_limit: float

    class LoginRequest(BaseDataClass):
        email: str
        password: str
        remember_me: bool = False

    class RegisterRequest(BaseDataClass):
        full_name: str
        email: str
        password: str
        account_type: str = "BORROWER"

    class ForgotPasswordRequest(BaseDataClass):
        email: str

    class AuthResponse(BaseDataClass):
        status: str
        token: str
        user: Dict[str, Any]
        message: str = "Authenticated successfully"
