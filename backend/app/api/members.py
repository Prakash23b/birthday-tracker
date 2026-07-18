from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(
    prefix="/members",
    tags=["Members"]
)

members = [
    {
        "id": 1,
        "name": "Prakash",
        "department": "Engineering"
    }
]


class Member(BaseModel):
    name: str
    department: str


@router.get("/")
def get_members():
    return members


@router.post("/")
def create_member(member: Member):
    new_member = {
        "id": len(members) + 1,
        "name": member.name,
        "department": member.department
    }

    members.append(new_member)

    return {
        "message": "Member added successfully",
        "member": new_member
    }