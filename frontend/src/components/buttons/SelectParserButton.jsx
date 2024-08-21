import styled from "styled-components";
import {Link} from "react-router-dom";


const ParserButton = styled.button`
    background-color: ${(props) => props.color};
    font-weight: 400;
    font-size: 22px;
    cursor: pointer;
    height: 70px;
    width: 415px;
    border: 0;
    align-self: center;
    align-items: center;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
`

export function SelectParserButton({color, storeLabel, storeValue}) {
    return <Link to={`/main/parser/${storeValue}`}>
        <ParserButton color={color}>{storeLabel}</ParserButton>
    </Link>
}