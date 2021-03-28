import logo from './logo.svg';
import './App.css';
import preval from 'preval.macro';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the automation challenge.
        </p>
        <p>
          Build Date: {preval`module.exports = new Date().toLocaleString();`}.
        </p>
      </header>
    </div>
  );
}


export default App;
