import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     {/* Select picker de memes*/}
      <select>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
        
      </select>


      {/* Input text - primer linea*/}
      <input type="text" />

       {/* Input text- Segunda linea*/}
       <input type="text" />

      {/* Boton exportar */}
      <button>Exportar</button>


    </div>
  );
}

export default App;
