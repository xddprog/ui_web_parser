import styled, {css} from "styled-components";

const Button = styled.button`
    background-origin: border-box;
    box-shadow: inset 0 100vw white;
    border: 1px solid rgba(126, 123, 123, 0.58);
    height: 50px;
    width: 50px;
    font-size: 15px;
    border-radius: 18px;
    margin-left: 10px;
    

    &:focus {
        border: 1px solid transparent;
        background-image: linear-gradient(
            120deg,
            rgba(227, 65, 154, 0.72) 10%,
            rgba(227, 65, 154, 0.72) 0.01%,
            rgba(92, 82, 176, 0.72),
            rgba(95, 146, 250, 0.72)
        );
    }
`

const ButtonText = styled.text`
    margin: 0;
    display: inline-block;
    ${props => props.isCurrent && css`
        background-image: linear-gradient(
            120deg,
            rgba(227, 65, 154, 0.72) 10%,
            rgba(227, 65, 154, 0.72) 0.01%,
            rgba(92, 82, 176, 0.72),
            rgba(95, 146, 250, 0.72)
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    `}
`

function PaginationButton({number, isCurrent}) {
    return (
        <Button>
            <ButtonText isCurrent={isCurrent}>
                {number}
            </ButtonText>
        </Button>
    )
}


export function Pagination({pageQuantity, setCurrentPageNumber}) {
    return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: 'center'}}>
            <svg viewBox="64 64 896 896" focusable="false" data-icon="left" width="1em" height="1em" fill="currentColor"
                 aria-hidden="true">
                <path
                    d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
            </svg>
            {Array(pageQuantity).fill(0).map(
                (_, index) => (<PaginationButton number={index + 1} isCurrent={false}/>)
            )}
            <svg viewBox="64 64 896 896" focusable="false" data-icon="right" width="1em" height="1em"
                 fill="currentColor" aria-hidden="true">
                <path
                    d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
            </svg>
        </div>
    )
}