import styled from "styled-components";
import {GradientInput} from "../../components/inputs/GradientInput.jsx";
import GradientButton from "../../components/buttons/GradientButton.jsx";
import {Link} from "react-router-dom";
import {Container, Title} from "../../components/BaseComponents.jsx";


const StyledLink = styled(Link)`
    color: #5f92fa;
    margin-left: 5px;
`


export function LoginPage() {
    return (
        <Container>
            <Title className="title-text">Войти в аккаунт</Title>
            <GradientInput placeholder='Введите почту' isRequired={true}/>
            <GradientInput placeholder='Введите пароль' isRequired={true}/>
            <GradientButton text='Войти'/>
            <p>
                Нет аккаунта?
                <StyledLink to='/register'>Зарегистрироваться</StyledLink>
            </p>
        </Container>
    )
}