import React, { useRef } from 'react';

export const InvokeDOMActionsRefHook = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    if (inputRef && inputRef.current){
      inputRef.current.focus();
    }
  }
  return (
    <div>
      <h3>Invoke DOM Actions</h3>
      <button onClick={handleClick} >Click Here to Fill Form</button>
      <div>
        <label htmlFor={'name-field'}>Name Field:</label>
        <input id={'name-field'} ref={inputRef}/>
      </div>
    </div>
  );
};