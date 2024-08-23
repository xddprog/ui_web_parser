from bs4 import Tag, BeautifulSoup
from unicodedata import normalize

from app.parsers.driver import ParserDriver
from app.parsers.stores.base import BaseParser


class YandexMarketParser(BaseParser):
    def __init__(self):
        super().__init__(driver=ParserDriver(), base_url='https://market.yandex.ru')

    def get_item_name(self, item_info: Tag) -> str:
        item_name = item_info.find('div', class_='_1ENFO').find(
            'a', class_='EQlfk'
        )
        return item_name.get_text().strip()

    def get_item_url(self, item_info: Tag) -> str:
        return self.base_url + item_info.find('a', href=True)['href']

    def get_item_price(self, item_info: Tag) -> int:
        item_price = item_info.find('div', class_='_1ArMm')

        return int(
            normalize(
                'NFKD', item_price.get_text()
            ).replace(' ', '')
        )

    def get_item_bonus(self, item_info: Tag) -> None:
        return None

    def get_item_old_price(self, item_info: Tag) -> int | None:
        item_old_price = item_info.find('span', class_='_24Evj')

        if item_old_price:
            item_old_price = int(
                normalize(
                    'NFKD', item_old_price.get_text()
                ).replace(' ', '')
            )

        return item_old_price

    def get_item(self, card: Tag):
        item_info = card.find('div', class_='_1H-VK')

        return {
            'name': self.get_item_name(item_info),
            'price': self.get_item_price(item_info),
            'old_price': self.get_item_old_price(item_info),
            'bonus': self.get_item_bonus(item_info),
            'url': self.get_item_url(card)
        }

    def parse(self, category: str) -> list[dict]:
        file = self.driver.get_source_html(self.base_url + '/search?hid=' + category)
        soup = BeautifulSoup(file, 'lxml')

        cards = soup.find_all('div', class_='_2rw4E _2g7lE')
        result_items = []

        for card in cards:
            res = self.get_item(card)
            if res:
                result_items.append(self.get_item(card))

        return result_items
