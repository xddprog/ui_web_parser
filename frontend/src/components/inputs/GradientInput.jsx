import styled from "styled-components";


const Input = styled.input`
    background-image: linear-gradient(
        120deg,
        rgba(227, 65, 154, 0.72) 10%,
        rgba(227, 65, 154, 0.72) 0.01%,
        rgba(92, 82, 176, 0.72),
        rgba(95, 146, 250, 0.72)
    );
    background-origin: border-box;
    box-shadow: inset 0 100vw white;
    border: 3px solid transparent;
    height: 70px;
    width: 415px;
    font-size: 17px;
    padding: 0 15px;
    margin-bottom: 30px;
`

export function GradientInput({placeholder, isRequired}) {
    return <Input placeholder={placeholder} required={isRequired} />
}