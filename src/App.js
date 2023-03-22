import { FiSearch } from 'react-icons/fi'
function App() {
  return (
    <div className="Conteiner">
      <h1 className="Title"> 
      Buscador de CEP</h1>

      <div className="ConteinerInput">
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
