import {GradientInput} from "../../components/inputs/GradientInput.jsx";
import GradientButton from "../../components/buttons/GradientButton.jsx";
import {Container, Title} from "../../components/BaseComponents.jsx";
import styled from "styled-components";
import {Link} from "react-router-dom";


const StyledLink = styled(Link)`
    color: #5f92fa;
    margin-left: 5px;
`


export function RegisterPage() {
     return (
        <Container>
            <Title className="title-text">Регистрация</Title>
            <GradientInput placeholder='Введите почту' isRequired={true}/>
            <GradientInput placeholder='Введите пароль' isRequired={true}/>
            <GradientInput placeholder='Введите телеграмм' isRequired={false}/>
            <GradientButton text='Войти'/>
            <p>
                Уже есть аккаунт?
                <StyledLink to='/login'>Войти</StyledLink>
            </p>
        </Container>
    )
}