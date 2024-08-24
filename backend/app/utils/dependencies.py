from app import parsers
from app.services.parser_service import ParserService


def get_parser_service(store_name: str):

    stores = {
        'Мегамаркет': parsers.MegaMarketParser,
        'Яндекс Маркет': parsers.YandexMarketParser,
        'Мвидео': parsers.MVideoParser
    }

    return ParserService(stores[store_name])
