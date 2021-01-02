import React from 'react';
import ReactDOM from 'react-dom';
import { StateHook } from "./state-hook";
import { EffectHooks } from "./effect-hook";
import "regenerator-runtime";
import { ContextHook } from "./context-hook";
import { RefHooks } from "./ref-hook";

const App = () => (
  <>
    <h1>React Hooks</h1>
      <StateHook />
      <EffectHooks />
      <ContextHook />
      <RefHooks />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
