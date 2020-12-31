import React from 'react';
import ReactDOM from 'react-dom';
import { StateHook } from "./state-hook";
import { EffectHooks } from "./effect-hook";
import "regenerator-runtime";

const App = () => (
  <>
    <h1>React Hooks</h1>
      <StateHook />
      <EffectHooks />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
