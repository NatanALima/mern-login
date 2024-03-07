import "./Login.css";

export default function Login({handleUser}) {
    return(
        <>
            <section className="inputContainer">
                <input type="text" name="email" placeholder="" autoComplete="off" required onChange={handleUser}/>
                <label htmlFor="email">Email</label>
            </section>
            <section className="inputContainer">
                <input type="text" name="password" placeholder="" autoComplete="off" required onChange={handleUser}/>
                <label htmlFor="password">Senha</label>
            </section>

            <section className="buttonContainer">
                <button>Entrar</button>
            </section>
            

        </>
    )
}