import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [Centigrados, setCentigrados] = useState(0);
  const [Fahrenheit, setFahrenheit] = useState(0);
  const [Kelvin, setKelvin] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (tipo == 1) {
      setCentigrados(total);
      setFahrenheit((total * 1.8) + 32);
      setKelvin(total + 273.15);
    }
    else if (tipo == 10) {
      setCentigrados((total - 32) * (5/9));
      setFahrenheit(total);
      setKelvin(((total - 32) * (5/9)) + 273.15);
    }
    else{
      setCentigrados(total - 273.15);
      setFahrenheit(((total - 273.15) * (9/5)) + 32);
      setKelvin(total);
    }
    
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Conversor de unidades de temperatura</h1>

      <p>Centigrados: {Centigrados}</p>
      <p>Fahrenheit: {Fahrenheit}</p>
      <p>Kelvin: {Kelvin}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Centigrados</option>
        <option value={10}>Fahrenheit</option>
        <option value={100}>Kelvin</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
