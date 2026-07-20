from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.members import router as members_router
from app.api.dashboard import router as dashboard_router
from app.api.birthdays import router as birthdays_router
from app.api.weekly import router as weekly_router
from app.api.monthly import router as monthly_router
from app.api.banner import router as banner_router
from app.api.calendar import router as calendar_router
from app.api.auth import router as auth_router

from app.core.database import Base, engine

import app.models.member
import app.models.user

app = FastAPI(
    title="Birthday Tracker API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create tables
Base.metadata.create_all(bind=engine)

# Routers
app.include_router(members_router)
app.include_router(dashboard_router)
app.include_router(birthdays_router)
app.include_router(weekly_router)
app.include_router(monthly_router)
app.include_router(banner_router)
app.include_router(calendar_router)

# Authentication Router
app.include_router(auth_router)


@app.get("/")
def root():
    return {
        "message": "Birthday Tracker API Running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }