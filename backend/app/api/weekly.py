from datetime import date, datetime, timedelta

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.member import Member

router = APIRouter(
    prefix="/birthdays",
    tags=["Birthdays"]
)


@router.get("/weekly")
def get_weekly_birthdays(
    db: Session = Depends(get_db)
):
    members = db.query(Member).all()

    today = date.today()
    next_7_days = today + timedelta(days=7)

    weekly_birthdays = []

    for member in members:

        birthday = member.birthday

        if isinstance(birthday, str):
            birthday = datetime.strptime(
                birthday,
                "%Y-%m-%d"
            ).date()

        birthday_this_year = date(
            today.year,
            birthday.month,
            birthday.day
        )

        if (
            today
            <= birthday_this_year
            <= next_7_days
        ):
            weekly_birthdays.append(member)

    return weekly_birthdays