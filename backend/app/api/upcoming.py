from datetime import date, datetime

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.member import Member

router = APIRouter(
    prefix="/birthdays",
    tags=["Birthdays"]
)


@router.get("/upcoming")
def get_upcoming_birthdays(
    db: Session = Depends(get_db)
):
    members = db.query(Member).all()

    today = date.today()

    upcoming = []

    for member in members:

        birthday = member.birthday

        if isinstance(birthday, str):
            birthday = datetime.strptime(
                birthday,
                "%Y-%m-%d"
            ).date()

        next_birthday = date(
            today.year,
            birthday.month,
            birthday.day
        )

        if next_birthday < today:
            next_birthday = date(
                today.year + 1,
                birthday.month,
                birthday.day
            )

        days_remaining = (
            next_birthday - today
        ).days

        upcoming.append({
            "id": member.id,
            "name": member.name,
            "department": member.department,
            "designation": member.designation,
            "birthday": str(birthday),
            "days_remaining": days_remaining
        })

    upcoming.sort(
        key=lambda item: item["days_remaining"]
    )

    return upcoming[:5]