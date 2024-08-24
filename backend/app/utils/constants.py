MEGAMARKET_CATEGORIES = {
    'смартфоны': 'smartfony',
    'ноутбуки': 'noutbuki',
    'телевизоры': 'televizory',
    'планшеты': 'planshety'
}


YANDEX_MARKET_CATEGORIES = {
    'Смартфоны': '91491',
    'Ноутбуки': '91013',
    'Телевизоры': '90639',
    'Планшеты': '6427100'
}


MVIDEO_CATEGORIES = {
    'Смартфоны': 'smartfony-i-svyaz-10/smartfony-205',
    'Ноутбуки': 'noutbuki-planshety-komputery-8/noutbuki-118',
    'Пелевизоры': 'televizory-i-cifrovoe-tv-1/televizory-65',
    'Планшеты': 'noutbuki-planshety-komputery-8/planshety-195'
}


DNS_CATEGORIES = {
    'Смартфоны': '17a8a01d16404e77/smartfony/',
    'Ноутбуки': '17a892f816404e77/noutbuki/',
    'Телевизоры': '17a8ae4916404e77/televizory/',
    'Планшеты': '17a8a05316404e77/planshety/'
}


ALL_STORES: dict[str, dict] = {
    'Мвидео': MVIDEO_CATEGORIES,
    'Мегамаркет': MEGAMARKET_CATEGORIES,
    'ДНС': DNS_CATEGORIES,
    'Яндекс Маркет': YANDEX_MARKET_CATEGORIES
}
