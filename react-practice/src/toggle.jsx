import React, { useState } from 'react';

function Toggle() {
  // State for whether something is ON or OFF (true/false)
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    // Set isOn to the opposite of its current value
    setIsOn(!isOn);
  };

  return (
    <div>
      <p>The light is {isOn ? 'ON' : 'OFF'}</p>
      <button onClick={toggle}>
        Turn {isOn ? 'OFF' : 'ON'}
      </button>
    </div>
  );
}

export default Toggle;