from datetime import date, datetime, timedelta

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.member import Member

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/stats")
def get_dashboard_stats(
    db: Session = Depends(get_db)
):
    members = db.query(Member).all()

    today = date.today()

    total_members = len(members)

    today_birthdays = 0
    monthly_birthdays = 0
    upcoming_birthdays = 0

    next_7_days = today + timedelta(days=7)

    for member in members:

        birthday = member.birthday

        # Convert string birthday to date
        if isinstance(birthday, str):
            birthday = datetime.strptime(
                birthday,
                "%Y-%m-%d"
            ).date()

        # Today's birthdays
        if (
            birthday.month == today.month
            and birthday.day == today.day
        ):
            today_birthdays += 1

        # Current month birthdays
        if birthday.month == today.month:
            monthly_birthdays += 1

        # Birthday in current year
        member_birthday_this_year = date(
            today.year,
            birthday.month,
            birthday.day
        )

        # Upcoming 7 days
        if (
            today
            <= member_birthday_this_year
            <= next_7_days
        ):
            upcoming_birthdays += 1

    return {
        "total_members": total_members,
        "today_birthdays": today_birthdays,
        "monthly_birthdays": monthly_birthdays,
        "upcoming_birthdays": upcoming_birthdays
    }