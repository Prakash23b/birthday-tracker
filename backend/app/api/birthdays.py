from datetime import date, datetime

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.member import Member

router = APIRouter(
    prefix="/birthdays",
    tags=["Birthdays"]
)


@router.get("/today")
def get_todays_birthdays(
    db: Session = Depends(get_db)
):
    today = date.today()

    members = db.query(Member).all()

    birthday_members = []

    for member in members:

        birthday = member.birthday

        if isinstance(birthday, str):
            birthday = datetime.strptime(
                birthday,
                "%Y-%m-%d"
            ).date()

        if (
            birthday.month == today.month
            and birthday.day == today.day
        ):
            birthday_members.append(member)

    return birthday_members