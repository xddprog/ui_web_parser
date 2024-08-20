import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 auto;
`

export const Title = styled.h1`
    font-weight: 800;
    font-size: 48px;
    color: #000;
    text-align: center;
    margin-bottom: 30px;
`

export const Icon = styled.img`
    width: ${(props) => props.size};
`