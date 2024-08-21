import axios from "axios";

const baseUrl = 'http://localhost:8000/api/parsers';

export async function parseStoreCategory(store, category, maxPrice, minPrice) {
    let params = {}

    maxPrice ? params.max_price = maxPrice : null;
    minPrice ? params.min_price = minPrice : null;

    return await axios.get(`${baseUrl}/${store}/${category}`, {params: params}).then(
        res => {
            return res.data
        }
    );
}