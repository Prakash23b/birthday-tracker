from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.member import Member

router = APIRouter(
    prefix="/banner",
    tags=["Banner Generator"]
)


@router.get("/members")
def get_banner_members(
    db: Session = Depends(get_db)
):
    return db.query(Member).all()