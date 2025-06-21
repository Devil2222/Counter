import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // ✅ State variable

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={{
      textAlign: 'center',
      marginTop: '50px',
      border: '1px solid blue',
      padding: '20px',
      width: '200px',
      margin: 'auto',
      borderRadius: '8px',
      backgroundColor: '#ccc'
    }}>
      <h2>🔢 Count: {count}</h2>
      <button onClick={increase}>➕</button>
      <button onClick={decrease}>➖</button>
      <button onClick={reset}>🔁</button>
    </div>
  );
}

export default Counter;
