import { FiSearch } from 'react-icons/fi'
import'./styles.css';
function App() {
  return (
    <div className="Container">
      <h1 className="Title"> 
      Buscador de CEP</h1>

      <div className="ContainerInput">
      <input type="text"
      placeholder="Digite seu CEP..."
      />

    <button className="buttonSearch">
    <FiSearch 
    size={25}
    color="#FFF"/>
    </button>

      </div>

      <main className="main">
      <h2>CEP:12345678</h2>
      <span>RUA: qualquer</span>    

      </main>

    </div>
  );
}

export default App;
