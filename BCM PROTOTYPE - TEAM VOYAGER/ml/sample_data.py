"""
BCM - Sample Personas & Synthetic Financial Transaction Streams
Provides ready-to-test data presets for the Hackathon Demo.
"""
from typing import Dict, List
from backend.models import RawTransaction

PERSONAS: Dict[str, dict] = {
    "gig_worker": {
        "id": "gig_worker",
        "name": "Rohan M.",
        "role": "Platform Mobility & Delivery Partner",
        "headline": "High payment discipline with volatile weekly gig disbursements",
        "transactions": [
            RawTransaction(id="tx_g01", timestamp="2026-08-01T10:00:00Z", amount=420.0, type="CREDIT", description="Uber Driver Weekly Payout", balance_after=580.0),
            RawTransaction(id="tx_g02", timestamp="2026-08-02T14:30:00Z", amount=35.0, type="DEBIT", description="Shell Fuel Station petrol", balance_after=545.0),
            RawTransaction(id="tx_g03", timestamp="2026-08-05T09:15:00Z", amount=65.0, type="DEBIT", description="Electricity Board Monthly Utility", balance_after=480.0),
            RawTransaction(id="tx_g04", timestamp="2026-08-08T18:20:00Z", amount=380.0, type="CREDIT", description="Zomato Fleet Delivery Payout", balance_after=860.0),
            RawTransaction(id="tx_g05", timestamp="2026-08-10T11:00:00Z", amount=120.0, type="DEBIT", description="Bajaj Microfinance Two Wheeler EMI", balance_after=740.0),
            RawTransaction(id="tx_g06", timestamp="2026-08-12T16:40:00Z", amount=45.0, type="DEBIT", description="Local Grocery Provisions", balance_after=695.0),
            RawTransaction(id="tx_g07", timestamp="2026-08-15T10:30:00Z", amount=410.0, type="CREDIT", description="Uber Driver Weekly Payout", balance_after=1105.0),
            RawTransaction(id="tx_g08", timestamp="2026-08-18T13:10:00Z", amount=40.0, type="DEBIT", description="Airtel Broadband Prepaid Recharge", balance_after=1065.0),
            RawTransaction(id="tx_g09", timestamp="2026-08-22T19:00:00Z", amount=395.0, type="CREDIT", description="Zomato Fleet Delivery Payout", balance_after=1460.0),
            RawTransaction(id="tx_g10", timestamp="2026-08-25T15:20:00Z", amount=250.0, type="DEBIT", description="House Rent Payment To Landlord", balance_after=1210.0),
            RawTransaction(id="tx_g11", timestamp="2026-08-28T12:00:00Z", amount=30.0, type="DEBIT", description="Shell Fuel Station petrol", balance_after=1180.0),
            RawTransaction(id="tx_g12", timestamp="2026-08-30T17:45:00Z", amount=450.0, type="CREDIT", description="Uber Driver Weekly Payout", balance_after=1630.0),
        ]
    },
    "kirana_merchant": {
        "id": "kirana_merchant",
        "name": "Sunita K.",
        "role": "Kirana Micro-Merchant Store Owner",
        "headline": "High daily commerce volume, disciplined inventory replenishment",
        "transactions": [
            RawTransaction(id="tx_k01", timestamp="2026-08-01T21:00:00Z", amount=850.0, type="CREDIT", description="UPIQR Daily Store Settlement PayTM", balance_after=2400.0),
            RawTransaction(id="tx_k02", timestamp="2026-08-03T11:00:00Z", amount=1200.0, type="DEBIT", description="Metro Cash & Carry Wholesale Supplier Inventory", balance_after=1200.0),
            RawTransaction(id="tx_k03", timestamp="2026-08-05T21:30:00Z", amount=920.0, type="CREDIT", description="UPIQR Daily Store Settlement PayTM", balance_after=2120.0),
            RawTransaction(id="tx_k04", timestamp="2026-08-07T14:15:00Z", amount=150.0, type="DEBIT", description="Commercial Power Electricity Bill", balance_after=1970.0),
            RawTransaction(id="tx_k05", timestamp="2026-08-10T20:45:00Z", amount=1100.0, type="CREDIT", description="UPIQR Daily Store Settlement PayTM", balance_after=3070.0),
            RawTransaction(id="tx_k06", timestamp="2026-08-12T10:30:00Z", amount=800.0, type="DEBIT", description="Amul Dairy Supplier Batch Invoice", balance_after=2270.0),
            RawTransaction(id="tx_k07", timestamp="2026-08-15T22:00:00Z", amount=1450.0, type="CREDIT", description="Independence Day Weekend POS Receipts", balance_after=3720.0),
            RawTransaction(id="tx_k08", timestamp="2026-08-18T16:00:00Z", amount=600.0, type="DEBIT", description="Shop Commercial Lease Rent", balance_after=3120.0),
            RawTransaction(id="tx_k09", timestamp="2026-08-22T21:15:00Z", amount=980.0, type="CREDIT", description="UPIQR Daily Store Settlement PayTM", balance_after=4100.0),
            RawTransaction(id="tx_k10", timestamp="2026-08-26T11:40:00Z", amount=1100.0, type="DEBIT", description="ITC FMCG Distributor Wholesale Order", balance_after=3000.0),
            RawTransaction(id="tx_k11", timestamp="2026-08-29T21:00:00Z", amount=1050.0, type="CREDIT", description="UPIQR Daily Store Settlement PayTM", balance_after=4050.0),
        ]
    },
    "thin_file_fresher": {
        "id": "thin_file_fresher",
        "name": "Aarav S.",
        "role": "Entry-Level AI Software Developer",
        "headline": "Thin credit file, zero bureau history, impeccable savings rate",
        "transactions": [
            RawTransaction(id="tx_f01", timestamp="2026-08-01T09:00:00Z", amount=2800.0, type="CREDIT", description="TechCorp Global Direct Payroll Salary", balance_after=3400.0),
            RawTransaction(id="tx_f02", timestamp="2026-08-02T12:00:00Z", amount=750.0, type="DEBIT", description="Apartment Society Rent Transfer", balance_after=2650.0),
            RawTransaction(id="tx_f03", timestamp="2026-08-04T15:30:00Z", amount=60.0, type="DEBIT", description="High Speed Fiber Broadband Wifi Bill", balance_after=2590.0),
            RawTransaction(id="tx_f04", timestamp="2026-08-08T18:00:00Z", amount=110.0, type="DEBIT", description="Fresh Supermarket Grocery Basket", balance_after=2480.0),
            RawTransaction(id="tx_f05", timestamp="2026-08-12T20:15:00Z", amount=45.0, type="DEBIT", description="Cloud Streaming OTT Subscription", balance_after=2435.0),
            RawTransaction(id="tx_f06", timestamp="2026-08-16T13:40:00Z", amount=85.0, type="DEBIT", description="Weekend Dining Cafe", balance_after=2350.0),
            RawTransaction(id="tx_f07", timestamp="2026-08-20T17:10:00Z", amount=95.0, type="DEBIT", description="Fresh Supermarket Grocery Basket", balance_after=2255.0),
            RawTransaction(id="tx_f08", timestamp="2026-08-25T11:00:00Z", amount=35.0, type="DEBIT", description="Electricity Utility Power Bill", balance_after=2220.0),
            RawTransaction(id="tx_f09", timestamp="2026-08-31T09:00:00Z", amount=2800.0, type="CREDIT", description="TechCorp Global Direct Payroll Salary", balance_after=5020.0),
        ]
    },
    "seasonal_trader": {
        "id": "seasonal_trader",
        "name": "Vikram R.",
        "role": "Agricultural Harvest Produce Trader",
        "headline": "Lump-sum seasonal revenues; triggers human underwriter review",
        "transactions": [
            RawTransaction(id="tx_s01", timestamp="2026-08-02T10:00:00Z", amount=6200.0, type="CREDIT", description="Mandi Grain Harvest Bulk Settlement", balance_after=6800.0),
            RawTransaction(id="tx_s02", timestamp="2026-08-05T14:00:00Z", amount=3500.0, type="DEBIT", description="Fertilizer & Seed Supplier Payment", balance_after=3300.0),
            RawTransaction(id="tx_s03", timestamp="2026-08-08T11:30:00Z", amount=2100.0, type="DEBIT", description="Tractor Lease Equipment EMI", balance_after=1200.0),
            RawTransaction(id="tx_s04", timestamp="2026-08-12T16:00:00Z", amount=900.0, type="DEBIT", description="Irrigation Diesel Fuel Expenses", balance_after=300.0),
            RawTransaction(id="tx_s05", timestamp="2026-08-15T19:00:00Z", amount=250.0, type="DEBIT", description="Household Groceries", balance_after=50.0),
            RawTransaction(id="tx_s06", timestamp="2026-08-20T10:00:00Z", amount=400.0, type="CREDIT", description="Secondary Crop Market Sale", balance_after=450.0),
            RawTransaction(id="tx_s07", timestamp="2026-08-25T15:30:00Z", amount=380.0, type="DEBIT", description="Farm Labor Weekly Wages", balance_after=70.0),
        ]
    }
}
