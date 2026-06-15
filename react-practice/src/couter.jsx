// Import useState from React
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named 'count', initialized to 0
  // setCount is the function to update 'count'
  const [count, setCount] = useState(0);

  // This function runs when button is clicked
  const handleClick = () => {
    // setCount updates 'count' to count + 1
    // After this line, React re-renders the component
    setCount(count + 1);
  };

  return (
    <div>
      {/* Display the current count */}
      <p>You clicked {count} times</p>
      {/* When clicked, run handleClick */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Counter;