import './App.css';
import Login from './pages/Login/Login';
import Form from './components/Form/Form';

function App() {
  return (
    <main>
      <Form title={"Efetuar Login"} content={<Login/>}/>
    </main>
  );
}

export default App;
