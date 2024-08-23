from bs4 import Tag, BeautifulSoup
from unicodedata import normalize

from app.parsers.driver import ParserDriver
from app.parsers.stores.base import BaseParser


class MVideoParser(BaseParser):
    def __init__(self):
        super().__init__(
            driver=ParserDriver(),
            base_url='https://www.mvideo.ru/'
        )

    def get_item_name(self, item_info: Tag) -> str:
        return item_info.find('a', class_='product-title__text').get_text().strip()

    def get_item_url(self, item_info: Tag) -> int:
        return self.base_url + item_info.find('a', class_='product-title__text', href=True)['href']

    def get_item_bonus(self, item_info: Tag) -> int:
        item_bonus = item_info.find('div', class_='mbonus-block__count-br').get_text()

        return int(normalize('NFKD', item_bonus).replace(' ', '').strip()[2:])

    def get_item_old_price(self, item_info: Tag) -> int:
        item_old_price = item_info.find('span', class_='price__sale-value ng-star-inserted')

        if item_old_price:
            item_old_price = int(
                normalize(
                    'NFKD', item_old_price.get_text()
                ).replace(' ', '')[:-1]
            )

        return item_old_price

    def get_item_price(self, item_info: Tag) -> int:
        item_price = item_info.find('span', class_='price__main-value')

        return int(
            normalize(
                'NFKD', item_price.get_text()
            ).replace(' ', '')[:-1]
        )

    def get_item(self, card: Tag):
        item_description_block = card.find('div', class_='product-card--list__description')
        item_prices_block = card.find('div', class_='price price--list ng-star-inserted')
        item_bonus_block = card.find('div', class_='mbonus-block-container ng-star-inserted')

        return {
            'name': self.get_item_name(item_description_block),
            'price': self.get_item_price(item_prices_block),
            'oldPrice': self.get_item_old_price(item_prices_block),
            'bonus': self.get_item_bonus(item_bonus_block),
            'url': self.get_item_url(card)
        }

    def parse(self, category: str) -> list[dict]:
        file = self.driver.get_source_html(self.base_url + category.replace(' ', '%20'), lazy_load=True)

        soup = BeautifulSoup(file, 'lxml')
        cards = soup.find_all('div', class_='product-card--list ng-star-inserted')
        result_items = []

        for card in cards:
            res = self.get_item(card)
            if res:
                result_items.append(self.get_item(card))

        return result_items
