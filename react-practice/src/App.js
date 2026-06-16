import logo from './logo.svg';
import './App.css';
import Counter from './couter';
import NameForm from './nameform';
import Toggle from './toggle';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/counterSlice';

function App() {

   const count = useSelector((state) => state.counter.value);
  
  // 2. SEND: Get the dispatch function to send actions
  const dispatch = useDispatch();
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
          <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Redux Toolkit is Alive!</h1>
      <h2>Count: {count}</h2>
      
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>

    </div>
  );
}

export default App;
