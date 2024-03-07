import {useState} from 'react';
import axios from 'axios';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Form from './components/Form/Form';
import Modal from './components/Modal/Modal';
const urlUser = "http://localhost:8080/user";

function App() {
  const [loginUser, setLoginUser] = useState({});
  const [user, setUser] = useState({});
  const [isLogged, setIsLogged] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  const handleUser = (e) => {
    setLoginUser({...loginUser, [e.target.name]: e.target.value});

  }

  const validateLogin = async (e) => {
    e.preventDefault();
    let email = loginUser.email;
    let senha = loginUser.password;

    if(!email || !senha) {
      console.log("Um ou mais campos vazios!");
    }

    try {
      const res = await axios.get(`${urlUser}/${email}/${senha}`)
      if(res.data[0]) {
        setIsLogged(true);
        setUser(res.data[0]);
        setModalMsg("Usuário Logado com Sucesso!");
        console.log(user);

      } else {
        console.log('Não logou');
        console.log(user)
        setModalMsg("Email ou Senha incorretos!");

      }
      setShowModal(true);


    } catch(err) {
      console.log(err);
    }

  }

  const logout = () => {
    setIsLogged(false);
    setUser({});
    setShowModal(true);
    setModalMsg("Usuário Deslogado com sucesso!");
  }

  setTimeout(() => {
    if (showModal) {
      setShowModal(false);
    }
  }, 1300);

  return (
    <>
      {showModal && <Modal isLogged={isLogged} modalMsg={modalMsg}/>}
      <main>
        {isLogged ? <Home user={user} handleLogout={logout}/> : 
        <Form title={"Efetuar Login"} content={<Login handleUser={handleUser}/>} validateLogin={validateLogin}/>}
      </main>
    </>
  );
}

export default App;
