from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.dependencies import get_db
from app.models.member import Member
from app.schemas.member import MemberCreate

router = APIRouter(
    prefix="/members",
    tags=["Members"]
)


@router.get("/")
def get_members(db: Session = Depends(get_db)):
    return db.query(Member).all()


@router.get("/{member_id}")
def get_member(
    member_id: int,
    db: Session = Depends(get_db)
):
    member = (
        db.query(Member)
        .filter(Member.id == member_id)
        .first()
    )

    if not member:
        raise HTTPException(
            status_code=404,
            detail="Member not found"
        )

    return member


@router.post("/")
def create_member(
    member: MemberCreate,
    db: Session = Depends(get_db)
):
    db_member = Member(
        name=member.name,
        email=member.email,
        department=member.department,
        designation=member.designation,
        birthday=member.birthday,
    )

    db.add(db_member)
    db.commit()
    db.refresh(db_member)

    return db_member


@router.put("/{member_id}")
def update_member(
    member_id: int,
    updated_member: MemberCreate,
    db: Session = Depends(get_db)
):
    member = (
        db.query(Member)
        .filter(Member.id == member_id)
        .first()
    )

    if not member:
        raise HTTPException(
            status_code=404,
            detail="Member not found"
        )

    member.name = updated_member.name
    member.email = updated_member.email
    member.department = updated_member.department
    member.designation = updated_member.designation
    member.birthday = updated_member.birthday

    db.commit()
    db.refresh(member)

    return member


@router.delete("/{member_id}")
def delete_member(
    member_id: int,
    db: Session = Depends(get_db)
):
    member = (
        db.query(Member)
        .filter(Member.id == member_id)
        .first()
    )

    if not member:
        raise HTTPException(
            status_code=404,
            detail="Member not found"
        )

    db.delete(member)
    db.commit()

    return {
        "message": "Member deleted successfully"
    }