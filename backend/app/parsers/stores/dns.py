from bs4 import Tag

from app.parsers.stores.base import BaseParser


class DNSParser(BaseParser):
    def get_item_name(self, item_info: Tag) -> str:
        pass

    def get_item_url(self, item_info: Tag) -> int:
        pass

    def get_item_bonus(self, item_info: Tag) -> int:
        pass

    def get_item_old_price(self, item_info: Tag) -> int:
        pass

    def get_item_price(self, item_info: Tag) -> int:
        pass

    def get_item(self, card: Tag) -> dict:
        pass

    def parse(self, category: str) -> list[dict]:
        pass
