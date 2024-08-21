from app import parsers
from app.services.parser_service import ParserService


def get_parser_service(store_name: str):

    stores = {
        'megamarket': parsers.MegaMarketParser,
        'yandex_market': parsers.YandexMarketParser,
    }

    return ParserService(stores[store_name]())
