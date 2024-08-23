from bs4 import BeautifulSoup, Tag, ResultSet
from unicodedata import normalize

from backend.app.parsers.driver import ParserDriver
from backend.app.parsers.stores.base import BaseParser


class MegaMarketParser(BaseParser):
    def __init__(self):
        super().__init__(
            driver=ParserDriver(),
            base_url='https://megamarket.ru'
        )

    def get_item_name(self, item_info: Tag) -> str:
        return item_info.find('a', class_='ddl_product_link').get_text().strip()

    def get_item_url(self, item_info: Tag) -> str:
        return self.base_url + item_info.find('a', href=True)['href']

    def get_item_price(self, item_info: Tag) -> int:
        item_price = item_info.find('div', class_='item-price')

        if item_price:
            item_price = int(normalize('NFKD', item_info.find(
                'span'
            ).get_text()).replace(' ', ''))

        return item_price

    def get_item_bonus(self, item_info: Tag) -> int:
        item_bonus = item_info.find('div', class_='item-bonus')

        if isinstance(item_bonus, Tag):
            item_bonus = int(item_bonus.find(
                'span', 'bonus-amount bonus-amount_without-percent'
            ).get_text().replace(' ', ''))

        return item_bonus

    def get_item_old_price(self, item_info: Tag) -> int:
        item_old_price = item_info.find('span', class_='crossed-old-price-discount__price')

        if item_old_price:
            item_old_price = int(normalize('NFKD', item_info.find(
                'span', class_='crossed-old-price-discount__price'
            ).get_text()).replace(' ', ''))

        return item_old_price

    def get_item(self, card: Tag):
        item_info = card.find('div', class_='item-info')

        return {
            'name': self.get_item_name(item_info),
            'price': self.get_item_price(item_info),
            'old_price': self.get_item_old_price(item_info),
            'bonus': self.get_item_bonus(item_info),
            'url': self.get_item_url(card)
        }

    def parse(self, category: str) -> list[dict]:
        file = self.driver.get_source_html(self.base_url + '/catalog/' + category.replace(' ', '%20'))
        soup = BeautifulSoup(file, 'lxml')

        cards = soup.find_all('div', class_='catalog-item-mobile ddl_product')
        result_items = []

        for card in cards:
            res = self.get_item(card)
            if res:
                result_items.append(self.get_item(card))

        return result_items
