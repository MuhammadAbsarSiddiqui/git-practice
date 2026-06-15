import logo from './logo.svg';
import './App.css';
import Counter from './couter';
import NameForm from './nameform';
import Toggle from './toggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter />
        <NameForm />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Toggle />
      </header>
    </div>
  );
}

export default App;
