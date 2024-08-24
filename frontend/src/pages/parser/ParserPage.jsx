import styled from "styled-components";
import GradientSelect from "../../components/select/GradientSelect.jsx";
import {Container, Title} from "../../components/BaseComponents.jsx";
import {useParams} from "react-router-dom";
import GradientButton from "../../components/buttons/GradientButton.jsx";
import {useEffect, useState} from "react";
import ProductCard from "../../components/cards/ProductCard.jsx";
import {getParsingCategories, parseStoreCategory} from "../../api/parsers.jsx";
import {GradientInput} from "../../components/inputs/GradientInput.jsx";
import ErrorMessage from "../../components/messages/ErrorMessage.jsx";
import {Pagination} from "../../components/pagination/Pagination.jsx";


export default function ParserPage() {
    const store = useParams().store
    const [parsedProducts, setParsedProducts] = useState([])
    const [errorMessage, setErrorMessage] = useState("");
    const [storeCategories, setStoreCategories] = useState(null);

    const [category, setCategory] = useState("")
    const [maxPriceInput, setMaxPriceInput] = useState("")
    const [minPriceInput, setMinPriceInput] = useState("")

    useEffect(() => {
        getParsingCategories(store).then(res => setStoreCategories(res));
    }, []);

    async function validateFields() {
        if (maxPriceInput && !/^\d+$/.test(maxPriceInput)) {
            setErrorMessage("Вы ввели некорректное число!")
            return false
        } else if(minPriceInput && !/^\d+$/.test(minPriceInput)) {
            setErrorMessage("Вы ввели некорректное число!")
            return false
        }else if (!category) {
            setErrorMessage("Вы не выбрали категорию товаров!")
            return false
        }
        setErrorMessage("")
        return true
    }

    async function parseStore(event) {
        event.preventDefault()

        if (await validateFields()) {
            return await parseStoreCategory(
                store, category, maxPriceInput, minPriceInput
            ).then(res => setParsedProducts(
                res.map(
                    (item) => (<ProductCard key={item.id} product={item} />))
                )
            );
        }

        return null
    }

    return (
        <Container>
            <Title>Парсинг сайта {store}</Title>
            <form action={parseStore}>
                <Container>
                    {errorMessage ? <ErrorMessage text={errorMessage} />: null}
                    <GradientSelect
                        handler={setCategory}
                        defaultOption="Выберите категорию"
                        options={storeCategories ? storeCategories: []}
                    />
                    <GradientInput placeholder="Минимальная цена" setInput={setMinPriceInput}/>
                    <GradientInput placeholder="Максимальная цена" setInput={setMaxPriceInput}/>
                    <GradientButton text="Начать парсинг" onClick={parseStore}/>
                </Container>
            </form>
            <div>
                {parsedProducts.length > 0 ? <Pagination items={parsedProducts}/>: null}
            </div>
        </Container>
    )
}
