from pydantic import BaseModel


class MemberCreate(BaseModel):
    name: str
    email: str
    department: str
    designation: str
    birthday: str


class MemberResponse(MemberCreate):
    id: int

    class Config:
        from_attributes = True