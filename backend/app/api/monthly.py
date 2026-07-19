from datetime import date, datetime

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.member import Member

router = APIRouter(
    prefix="/birthdays",
    tags=["Birthdays"]
)


@router.get("/monthly")
def get_monthly_birthdays(
    db: Session = Depends(get_db)
):
    members = db.query(Member).all()

    current_month = date.today().month

    monthly_birthdays = []

    for member in members:

        birthday = member.birthday

        if isinstance(birthday, str):
            birthday = datetime.strptime(
                birthday,
                "%Y-%m-%d"
            ).date()

        if birthday.month == current_month:
            monthly_birthdays.append(member)

    return monthly_birthdays