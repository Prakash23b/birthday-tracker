from sqlalchemy import Column, Integer, String

from app.core.database import Base


class Member(Base):
    __tablename__ = "members"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, nullable=False)

    email = Column(String)

    department = Column(String)

    designation = Column(String)

    birthday = Column(String)