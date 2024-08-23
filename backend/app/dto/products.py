from pydantic import BaseModel


class BaseProductModel(BaseModel):
    name: str
    oldPrice: int | None = None
    price: int
    bonus: int | None = None
    url: str
