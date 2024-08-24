from bs4 import Tag, BeautifulSoup

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
        file = self.driver.get_source_html(self.base_url + '/catalog/' + self.categories[category])
        soup = BeautifulSoup(file, 'lxml')

        cards = soup.find_all('div', class_='catalog-item-mobile ddl_product')
        result_items = []

        for card in cards:
            res = self.get_item(card)
            if res:
                result_items.append(self.get_item(card))

        return result_items
