from typing import Annotated

from fastapi import APIRouter, Depends

from app.services.parser_service import ParserService
from app.utils.constants import ALL_STORES
from app.utils.dependencies import get_parser_service

router = APIRouter(
    prefix="/api",
    tags=['parsers'],
)


@router.get("/parsers/{store_name}")
async def parse_store(
    store_name: str,
    category: str,
    parser_service: Annotated[ParserService, Depends(get_parser_service)],
    max_price: int | None = None,
    min_price: int | None = None,
) -> list[dict[str, str | int]]:
    return await parser_service.parse(category, max_price, min_price)


@router.get('/parsers/{store_name}/categories')
async def get_categories(
    store_name: str,
) -> list[str]:
    return ALL_STORES[store_name].keys()
