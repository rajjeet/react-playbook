import React, { useState } from 'react';

export const StateHook = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>State Hook</h2>
      <div id={"count-display"}>Count: {count}</div>
      <button id={"increment-btn"} onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};