from backend.app.parsers.stores.base import BaseParser


class ParserService:
    def __init__(self, parser: BaseParser):
        self.parser = parser
    #
    # @staticmethod
    # async def to_dto(product: dict) -> BaseProductModel:
    #     return BaseProductModel(**product)
    #
    # async def dump_items(self, products: list[dict]) -> list[BaseProductModel]:
    #     return [await self.to_dto(product) for product in products]

    @staticmethod
    async def filter_products(
        products: list[dict[str, str | int]],
        max_price: int,
        min_price: int
    ) -> list[list[dict[str, str | int]]]:
        return list(filter(lambda product: min_price < product["price"] < max_price, products))

    async def parse(self, category: str, max_price: int, min_price: int) -> list[dict[str, str | int]]:
        self.parser()
        products = self.parser.parse(category)

        if min_price or max_price:
            return await self.filter_products(products, max_price, min_price)

        return products
