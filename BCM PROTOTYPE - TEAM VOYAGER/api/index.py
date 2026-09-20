"""
BCM (Because Credit Matters) - Vercel Serverless Function Entry Point
Exposes the FastAPI application to Vercel's serverless Python runtime.
"""
import sys
import os

# Add root directory to python path for backend and ml imports
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from backend.main import app

# Vercel serverless requires the FastAPI instance to be named `app`
__all__ = ["app"]
