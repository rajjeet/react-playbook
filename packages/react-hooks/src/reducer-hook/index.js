import React, { useReducer } from 'react';

export const ReducerHook = () => {
  const initialState = { count: 0 };

  function countReducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <div>
      <h2>Reducer Hook</h2>
      <div>
        Count: {state.count}
      </div>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
};