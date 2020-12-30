import React from 'react';

export const Component = ({ count, handleIncrementClick, handleDecrementClick }) => (
  <div>
    <h1>Hello world Redux Thunk! {count}</h1>
    <button onClick={handleDecrementClick}>Decrement</button>
    <button onClick={handleIncrementClick}>Increment</button>
  </div>
);
