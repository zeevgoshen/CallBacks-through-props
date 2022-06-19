import React, { useState } from 'react';
import Counter from './Counter';
import Increase from './Increase';

import './style.css';

export default function App() {
  const [count, setCount] = useState(0);

  console.log('App');

  return (
    <div>
      <div style={{ width: '150px', height: '150px', border: '1px solid red' }}>
      <p>Parent here:</p>
        <p>You clicked {count} times</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click me
        </button>
      </div>
      <div style={{ width: '150px', height: '150px', border: '1px solid blue' }}>
      <p>Children here here:</p>
      <Counter count={count} />
      <Increase count={count} increaseCount={() => setCount(count + 1)} />
      </div>
    </div>
  );
}
