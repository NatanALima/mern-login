import "./Form.css";

export default function Form({title, content}) {
    return(
        <form>
            <h1>{title}</h1>
            {content}
        </form>
    )
}