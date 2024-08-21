import styled from "styled-components";


const Card = styled.div`
    background: linear-gradient(
        120deg,
        rgba(227, 65, 154, 0.72) 10%,
        rgba(227, 65, 154, 0.72) 0.01%,
        rgba(92, 82, 176, 0.72),
        rgba(95, 146, 250, 0.72)
    );
    background-origin: border-box;
    box-shadow: inset 0 100vw white;
    border: 3px solid transparent;
    height: auto;
    width: 780px;
    font-size: 16px;
    padding: 0 15px;
    box-sizing: content-box;
    margin-top: 30px;
    border-radius: 25px;
    cursor: pointer;
    
`

const Wrapper = styled.div`
    * {
        transition: 0.3s;
    }
    
    :hover {
        transform: scale(1.02);
    }
    
    p:hover {
        transform: scale(1);
    }
`

const StyledParagraph = styled.p`
    font-weight: 500;
    display: inline;
`

export default function ProductCard({product}) {
    return (
        <Wrapper>
            <Card href={product.url}>
                <p>
                    Название товара: <StyledParagraph>{product.name}</StyledParagraph>
                </p>
                <p>
                    Цена без скидки:
                    <StyledParagraph>
                        {product.oldPrice ? ' ' + product.oldPrice : ' Не указана'}
                    </StyledParagraph>
                </p>
                <p>
                    Цена со скидкой:
                    <StyledParagraph>
                        {' ' + product.price} ₽
                    </StyledParagraph>
                </p>
                <p>
                    Бонусы за покупку:
                    <StyledParagraph>
                        {product.bonus ? ' ' + product.bonus: ' Нет бонуса'}
                    </StyledParagraph>
                </p>
            </Card>
        </Wrapper>
    )
}
