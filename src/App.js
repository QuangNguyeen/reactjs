import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Quang"
  const age = 19
  const isMale = true
  const student = {
    name: 'Easy FrontEnd'
  }
  const colorList = ['green', 'blue', 'red'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <p>Xin chao {name} - {age} - {isMale ? "Male":"Female"}</p>
        </p>
        <ul>
          {colorList.map((color) => (
              <li key = {color} style={{color}}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
