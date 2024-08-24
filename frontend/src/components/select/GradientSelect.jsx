import styled from "styled-components";


const SelectCategory = styled.select`
    background-image: linear-gradient(
        120deg,
        rgba(227, 65, 154, 0.72) 10%,
        rgba(227, 65, 154, 0.72) 0.01%,
        rgba(92, 82, 176, 0.72),
        rgba(95, 146, 250, 0.72)
    );
    background-origin: border-box;
    box-shadow: inset 0 100vw white;
    border: 2px solid transparent;
    height: 70px;
    width: 415px;
    font-size: 16px;
    padding: 0 15px;
    box-sizing: content-box;
    margin-bottom: 30px;
`


export default function GradientSelect({handler, defaultOption, options}) {
    return (
        <SelectCategory onChange={(event) => handler(event.target.value)}>
            <option value="" disabled selected>{defaultOption}</option>
            {options.map(
                (option) => (<option value={option}>{option}</option>)
            )}
        </SelectCategory>
    )
}