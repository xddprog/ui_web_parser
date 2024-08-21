import styled from "styled-components";

const Button = styled.button`
    height: 70px;
    width: 455px;
    border-radius: 25px;
    background: linear-gradient(
        120deg,
        rgba(227, 65, 154, 0.72) 10%,
        rgba(227, 65, 154, 0.72) 0.01%,
        rgba(92, 82, 176, 0.72),
        rgba(95, 146, 250, 0.72)
    );
    font-weight: 200;
    font-size: 22px;
    color: #fff;
    cursor: pointer;
    border: none;
    margin-bottom: 30px;
    transition: all 0.3s ease;

    &:hover { 
        //background: linear-gradient(
        //    120deg,
        //    rgba(95, 146, 250, 0.72), 
        //    rgba(227, 65, 154, 0.72) 35%,
        //    rgba(227, 65, 154, 0.72) 15%,
        //    rgba(92, 82, 176, 0.72)
        //);
        opacity: 0.85;
    }
`;

export default function GradientButton({ text, onClick, type }) {
    return <Button onClick={onClick} type={type}>{text}</Button>;
}