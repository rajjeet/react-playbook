import React, { forwardRef, useImperativeHandle, useRef } from 'react';

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    specialFocus: () => {
      inputRef.current.focus();
    }
  }))
  return <input ref={inputRef} />
});


export const ImperativeHandleHook = () => {
  const inputRef = useRef();
  const onClick = () => {
    inputRef.current.specialFocus();
  }
  return (
    <div>
      <h2>Imperative Hook</h2>
      <button onClick={onClick}>Special Focus</button>
      <Input ref={inputRef} />
    </div>
  );
};
