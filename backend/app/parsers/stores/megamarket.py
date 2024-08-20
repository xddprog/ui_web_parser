import bs4.element
from bs4 import BeautifulSoup
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions

from backend.app.parsers.driver import ParserDriver


class MegaMarketParser:
    def __init__(self, driver: ParserDriver):
        self.driver = driver
        self.base_url = 'https://megamarket.ru'

    def get_item(self, card):
        item_info = card.find('div', class_='item-info')
        item_old_price = item_info.find('span', class_='crossed-old-price-discount__price')
        if isinstance(item_old_price, bs4.element.Tag):
            item_bonus = item_info.find('div', class_='item-bonus')
            if isinstance(item_bonus, bs4.element.Tag):
                item_price = int(item_info.find(
                    'span', class_='bonus-amount bonus-amount_without-percent'
                ).get_text().replace(' ', ''))
                item_bonus = int(item_bonus.find(
                    'span', 'bonus-amount bonus-amount_without-percent'
                ).get_text().replace(' ', ''))
                item_href = self.base_url + card.find('a', href=True)['href']
                item_name = item_info.find('a', class_='ddl_product_link').get_text()
                return {
                    'item_name': item_name.lstrip(),
                    'item_price': item_price,
                    'item_old_price': item_old_price.get_text(),
                    'item_bonus': item_bonus,
                    'item_href': item_href
                }

    def parse(self, category: str) -> list[dict[str, str]]:
        file = self.driver.get_source_html(self.base_url + '/catalog/' + category.replace(' ', '%20'))
        soup = BeautifulSoup(file, 'lxml')

        mobile_cards = soup.find_all('div', class_='catalog-item-mobile ddl_product')
        result_items = []

        for card in mobile_cards:
            result_items.append(self.get_item(card))

        result_items.sort(key=lambda z: int(z['item_bonus']))
        return result_items


x = MegaMarketParser(ParserDriver())
print(x.get_items('noutbuki'))
