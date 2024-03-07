import './Home.css';
export default function Home({user, handleLogout}) {
    console.log(user);
    return(
        <section className="homeContainer">
            <h1>Página Home</h1>
            <h3>Informações de Usuário</h3>
            <div className='infoCollection'>
                <p><strong>ID:</strong> {user._id}</p>
                <p><strong>Nome:</strong> {user.nome}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>

            <div className='btnContainer'>
                <button onClick={handleLogout}>Sair</button>
            </div>
        </section>
    )
}