import styled, {css} from "styled-components";
import {useEffect, useState} from "react";
import ProductCard from "../cards/ProductCard.jsx";
import {Container} from "../BaseComponents.jsx";

const Button = styled.button`
    background-origin: border-box;
    box-shadow: inset 0 100vw white;
    border: ${props => props.isCurrent ? `1px solid transparent`: `none`};
    height: 50px;
    width: 50px;
    font-size: 15px;
    border-radius: 18px;
    background-image: ${props => props.isCurrent ? `linear-gradient(
        120deg,
        rgba(227, 65, 154, 0.72) 10%,
        rgba(227, 65, 154, 0.72) 0.01%,
        rgba(92, 82, 176, 0.72),
        rgba(95, 146, 250, 0.72)
    );`: `none`};
    cursor: pointer;
`

const NextPrevButton = styled.button`
    background: none;
    border: none;
    padding: 14px 15px;
    border-radius: 18px;
    cursor: pointer;
    
    &:active {
        background: ${props => props.disabled ? `none`: `rgba(126, 123, 123, 0.20);`}
    }
`

const PaginationContainer = styled.div`
    margin-top: 30px;
`

function PaginationButton({number, isCurrent, setCurrentPage}) {
    return (
        <Button onClick={() => setCurrentPage(number)} isCurrent={isCurrent}>
            {number + 1}
        </Button>
    )
}


export function Pagination({items}) {
    const [currentPage, setCurrentPage] = useState(1)
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(4)

    console.log(currentPage, left, right)

    function handleNextButton() {
        setCurrentPage(currentPage + 1)
        setLeft(right)
        setRight(right + 4)
    }

    function handlePrevButton() {
        setCurrentPage(currentPage - 1)
        setRight(left)
        setLeft(left - 4)
    }

    function handlePaginationButton(number) {
        setCurrentPage(number)
        setLeft(number * 4)
        setRight(number * 4 + 4)
    }

    return (
        <Container>
            <div>
                {items.slice(left, right)}
            </div>

            <PaginationContainer>
                <NextPrevButton
                    onClick={handlePrevButton}
                    disabled={currentPage === 0}
                >
                    <svg viewBox="64 64 896 896"
                         focusable="false"
                         data-icon="left"
                         width="1em"
                         height="1em"
                         fill="currentColor"
                         aria-hidden="true"
                    >
                        <path
                            d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3
                            486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1
                            12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281
                            360-281.1c3.8-3 6.1-7.7 6.1-12.6z"
                        >
                        </path>
                    </svg>
                </NextPrevButton>

                {Array(Math.ceil(items.length / 4)).fill(0).map(
                    (_, index) => (
                        <PaginationButton
                            number={index}
                            isCurrent={index === currentPage}
                            setCurrentPage={handlePaginationButton}
                        />
                    )
                )}

                <NextPrevButton
                    onClick={handleNextButton}
                    disabled={currentPage === Math.ceil(items.length / 4) - 1}
                >
                    <svg
                        viewBox="64 64 896 896"
                        focusable="false"
                        data-icon="right"
                        width="1em" height="1em"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0
                            4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1
                            7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9
                            6.3l450.8-352.1a31.96 31.96 0 000-50.4z"
                        >
                        </path>
                    </svg>
                </NextPrevButton>
            </PaginationContainer>
        </Container>
    )
}