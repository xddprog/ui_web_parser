from pydantic import BaseModel


class BaseProductModel(BaseModel):
    name: str
    oldPrice: float | None = None
    price: int
    bonus: int | None = None
    url: str
