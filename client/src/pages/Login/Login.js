import "./Login.css";

export default function Login() {
    return(
        <>
            <section className="inputContainer">
                <input type="text" name="email" placeholder="" autoComplete="off"/>
                <label htmlFor="email">Email</label>
            </section>
            <section className="inputContainer">
                <input type="text" name="senha" placeholder="" autoComplete="off"/>
                <label htmlFor="senha">Senha</label>
            </section>

            <section className="buttonContainer">
                <button>Entrar</button>
            </section>
            

        </>
    )
}