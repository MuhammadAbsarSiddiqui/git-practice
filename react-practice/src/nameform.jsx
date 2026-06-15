import React, { useState } from 'react';

function NameForm() {
  // State to hold the current text in the input field
  const [name, setName] = useState('');

  // Runs every time the user types in the input
  const handleChange = (event) => {
    // event.target refers to the <input> DOM element
    // event.target.value is what the user typed
    setName(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <input
        type="text"
        value={name}           // Binds the input value to state
        onChange={handleChange} // Updates state on every keystroke
        placeholder="Enter your name"
      />
      <button onClick={handleSubmit}>Greet me</button>
      <p>Your name: {name}</p>
    </div>
  );
}

export default NameForm;