import styled from "styled-components";
import SelectParseCategory from "../../components/select/SelectParseCategory.jsx";
import {Title} from "../../components/BaseComponents.jsx";
import {useParams} from "react-router-dom";
import GradientButton from "../../components/buttons/GradientButton.jsx";
import {useState} from "react";
import ProductCard from "../../components/cards/ProductCard.jsx";


const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`


export default function ParserPage() {
    const store = useParams().store
    const [category, setCategory] = useState("")

    function parseStore() {
        return
    }

    return (
        <Container>
            <Title>Парсинг сайта {store}</Title>
            <SelectParseCategory handleCategory={setCategory}/>
            <GradientButton text="Начать парсинг" onClick={parseStore}/>
            <div>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </Container>
    )
}