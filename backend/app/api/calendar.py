from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.member import Member

router = APIRouter(
    prefix="/calendar",
    tags=["Calendar"]
)


@router.get("/events")
def get_calendar_events(
    db: Session = Depends(get_db)
):
    members = db.query(Member).all()

    events = []

    for member in members:
        events.append(
            {
                "id": member.id,
                "title": f"🎂 {member.name}",
                "date": str(member.birthday),
                "department": member.department,
                "designation": member.designation,
            }
        )

    return events