from abc import ABC, abstractmethod

from bs4 import Tag

from backend.app.parsers.driver import ParserDriver


class BaseParser(ABC):
    def __init__(self, driver: ParserDriver, base_url: str):
        self.driver = driver
        self.base_url = base_url

    @abstractmethod
    def get_item_price(self, item_info: Tag) -> int:
        raise NotImplementedError

    @abstractmethod
    def get_item_old_price(self, item_info: Tag) -> int | None:
        raise NotImplementedError

    @abstractmethod
    def get_item_bonus(self, item_info: Tag) -> int | None:
        raise NotImplementedError

    @abstractmethod
    def get_item_url(self, item_info: Tag) -> int:
        raise NotImplementedError

    @abstractmethod
    def get_item_name(self, item_info: Tag) -> str:
        raise NotImplementedError

    @abstractmethod
    def get_item(self, card: Tag) -> dict:
        raise NotImplementedError

    @abstractmethod
    def parse(self, category: str) -> list[dict]:
        raise NotImplementedError
