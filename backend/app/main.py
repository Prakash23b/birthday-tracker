from fastapi import FastAPI

from app.api.members import router as members_router
from app.core.database import Base, engine

import app.models.member

app = FastAPI(
    title="Birthday Tracker API",
    version="1.0.0"
)

# Create database tables
Base.metadata.create_all(bind=engine)

# Register API routes
app.include_router(members_router)


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