import React, { useMemo, useState } from 'react';

function factorial(n) {
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

export const MemoHook = () => {
  const [counter, setCounter] = useState(1);
  const result = useMemo(() => {
    // do something expensive that depends on counter
    console.log('calculate', counter);
    return factorial(counter);
  }, [counter]);
  console.log('render', { counter });
  return (
    <div>
      <h2>Memo Hook</h2>
      <div>Factorial of {counter} is: <span>{result}</span></div>
      <div>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </div>
  );
};

