# `react-hooks`

This guide explores each React hook and how it can be correctly unit tested using React Test Utils.

## Usage

```
git clone https://github.com/rajjeet/react-playbook
cd react-playbook/packages/react-hooks
npm install
npm test
npm start
```
    
## `useState`: The State Hook
Using the `useState` hook, we can manage internal state within a React component. The most basic example of `useState
` is a simple counter.

`src/state-hook/data-fetching.js` 
```
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
```
Using `useState(0)`, we pass in the initial state to the hook function and get back: (1) state in the first index and
(2) a setter function in the second index. We use the setter function in `button` click handler to modify the state and
 display the state within the `div`. 
 
 ### Testing
 See `src/state-hook/index.react-test-utils.test.js` for the test of `useState`. We simply create a mouse event of type _click_ for the
  `button`. After the act phase, the DOM updates, and we can assert that the count display shows in the incremented
   state. It's important to test the resulting behaviour of the state change (i.e. the count display being increment
   ) rather than testing the internal state of the component, which would be testing implementation. Testing
    implementation leads to brittle test, as test fail easily when the underlying implementation changes, while
     keeping the behaviour the same.`