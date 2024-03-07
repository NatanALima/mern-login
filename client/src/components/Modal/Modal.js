import './Modal.css';

export default function Modal({modalMsg}) {
    return(
        <section className="modalContainer">
            <p>{modalMsg}</p>
        </section>
    )
}