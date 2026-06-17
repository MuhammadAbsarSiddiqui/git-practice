import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, clearTodos } from './store/todoSlice';
import './App.css';

function App() {
  // useState hook manages the local state of the input field
  const [inputText, setInputText] = useState('');

  /**
   * useSelector is a hook that allows you to extract data from the Redux store state.
   * It takes a selector function as an argument.
   * Here, we access state.todos (the slice) and then .todos (the array inside the slice's initial state).
   */
  const todos = useSelector((state) => state.todos.todos);

  /**
   * useDispatch is a hook that returns a reference to the dispatch function from the Redux store.
   * You use it to dispatch actions as needed.
   */
  const dispatch = useDispatch();

  /**
   * Handles adding a new todo when the user submits the form or clicks the add button.
   */
  const handleAddTodo = () => {
    if (inputText.trim()) {
      // Dispatch the addTodo action, passing the input text as the payload
      dispatch(addTodo(inputText.trim()));
      // Clear the input field after adding
      setInputText('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>React + Redux Toolkit Todo</h2>
      
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new task..."
          style={{ flex: 1, padding: '0.5rem' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAddTodo();
          }}
        />
        <button onClick={handleAddTodo} style={{ padding: '0.5rem 1rem' }}>Add</button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => dispatch(clearTodos())} style={{ padding: '0.5rem', width: '100%' }}>
          Clear All Todos
        </button>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.5rem',
              borderBottom: '1px solid #ccc',
            }}
          >
            {/* Clicking the text toggles the completed status */}
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? '#888' : '#000',
                flex: 1
              }}
            >
              {todo.text}
            </span>
            
            {/* Clicking the delete button removes the todo */}
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'red',
                fontSize: '1rem'
              }}
              title="Delete"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666' }}>No todos yet. Add some!</p>
      )}
    </div>
  );
}

export default App;
