import React from 'react';
import ReactDOM from 'react-dom';
import { StateHook } from "./state-hook";

const App = () => (
  <>
    <h1>React Hooks</h1>
      <StateHook />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
