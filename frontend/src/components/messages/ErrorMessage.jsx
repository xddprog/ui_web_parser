import {Message} from "../BaseComponents.jsx";


export default function ErrorMessage({text}) {
    return (
        <Message color="#ff7d7d">
            {text}
        </Message>
    )
}