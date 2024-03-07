import "./Form.css";

export default function Form({title, content, validateLogin}) {

    return(
        <form onSubmit={validateLogin}>
            <h1>{title}</h1>
            {content}
        </form>
    )
}