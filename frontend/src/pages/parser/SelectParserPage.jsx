import {SelectParserButton} from "../../components/buttons/SelectParserButton.jsx";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`


const Title = styled.h1`
    font-weight: 800;
    font-size: 48px;
    color: #000;
    text-align: center;
    margin-top: 225px;
    margin-bottom: 30px;
`


export default function SelectParserPage() {
    return (
        <Container>
            <Title>Выберите сайт для парсинга</Title>
            <SelectParserButton color='#ff7880' storeLabel='Мвидео' storeValue='mvideo'/>
            <SelectParserButton color='#f796ff' storeLabel='Яндекс.Маркет' storeValue='yandex'/>
            <SelectParserButton color='#ffdd9a' storeLabel='ДНС' storeValue='dns'/>
            <SelectParserButton color='#d1ff96' storeLabel='Мегамаркет' storeValue='megamarket'/>
        </Container>
    )
}