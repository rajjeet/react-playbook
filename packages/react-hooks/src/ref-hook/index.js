import React from 'react';
import { MutableStateRefHook } from "./mutable-state";
import { ReadDOMAttributesRefHook } from "./read-dom-attributes";

export const RefHooks = () => {
  return (
    <div>
      <h2>Ref Hooks</h2>
      <MutableStateRefHook />
      <ReadDOMAttributesRefHook />
    </div>
  );
};
