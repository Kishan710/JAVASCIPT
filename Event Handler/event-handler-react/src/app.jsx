import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>React Event Handler Example</h1>
      <p>You clicked the button <strong>{count}</strong> times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
