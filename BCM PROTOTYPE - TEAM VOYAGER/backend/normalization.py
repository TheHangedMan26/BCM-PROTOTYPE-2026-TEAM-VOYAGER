"""
BCM - Transaction Data Normalization Rules Engine
Standardizes merchant narrations, categorizes spending/inflows, and strips noise.
"""
import re
from datetime import datetime
from typing import List
from backend.models import RawTransaction, NormalizedTransaction, TransactionType, TransactionCategory

CATEGORY_PATTERNS = {
    TransactionCategory.INCOME: [
        r"salary", r"payroll", r"direct dep", r"payout", r"uber payout", r"upwork", r"fiverr", r"stipend"
    ],
    TransactionCategory.BUSINESS_INFLOW: [
        r"upiqr", r"pos receipt", r"customer pmt", r"merchant settle", r"invoice settle", r"card settle"
    ],
    TransactionCategory.RENT: [
        r"rent", r"landlord", r"lease", r"property mgmt"
    ],
    TransactionCategory.UTILITY: [
        r"electricity", r"power", r"water", r"broadband", r"wifi", r"telecom", r"gas bill", r"recharge"
    ],
    TransactionCategory.SUPPLIER: [
        r"wholesale", r"supplier", r"inventory", r"distributor", r"raw materials"
    ],
    TransactionCategory.LOAN_REPAYMENT: [
        r"emi", r"loan repay", r"microfinance", r"bnpl", r"credit card pay"
    ],
    TransactionCategory.GROCERY: [
        r"supermarket", r"mart", r"grocery", r"dairy", r"provisions"
    ],
    TransactionCategory.DISCRETIONARY: [
        r"cafe", r"restaurant", r"cinema", r"entertainment", r"ott", r"shopping"
    ]
}

def parse_iso_or_fallback(timestamp_str: str) -> str:
    try:
        dt = datetime.fromisoformat(timestamp_str.replace("Z", "+00:00"))
        return dt.isoformat()
    except Exception:
        return datetime.utcnow().isoformat()

def classify_category(narration: str, tx_type: str) -> str:
    clean_narration = narration.lower()
    for category, patterns in CATEGORY_PATTERNS.items():
        for pat in patterns:
            if re.search(pat, clean_narration):
                return category.value
    
    if tx_type == TransactionType.CREDIT.value:
        return TransactionCategory.INCOME.value
    return TransactionCategory.OTHER.value

def normalize_transactions(raw_transactions: List[RawTransaction]) -> List[NormalizedTransaction]:
    normalized: List[NormalizedTransaction] = []
    running_balance = 0.0

    # Sort chronological
    sorted_raw = sorted(raw_transactions, key=lambda x: x.timestamp)

    for tx in sorted_raw:
        tx_type_str = TransactionType.CREDIT.value if tx.type.upper() in ["CREDIT", "CR", "IN"] else TransactionType.DEBIT.value
        category_str = classify_category(tx.description, tx_type_str)
        
        amt = abs(tx.amount)
        if tx.balance_after is not None:
            running_balance = tx.balance_after
        else:
            if tx_type_str == TransactionType.CREDIT.value:
                running_balance += amt
            else:
                running_balance -= amt

        is_recurring = any(kw in tx.description.lower() for kw in ["salary", "rent", "emi", "bill", "broadband", "netflix"])
        
        # Clean merchant name
        clean_merchant = re.sub(r"[^A-Za-z0-9 ]+", " ", tx.description).strip()
        clean_merchant = " ".join(clean_merchant.split()[:4])

        normalized.append(
            NormalizedTransaction(
                id=tx.id,
                timestamp=parse_iso_or_fallback(tx.timestamp),
                amount=amt,
                type=tx_type_str,
                category=category_str,
                balance_after=round(running_balance, 2),
                is_recurring=is_recurring,
                merchant_clean=clean_merchant.title() or "Direct Transfer"
            )
        )

    return normalized
