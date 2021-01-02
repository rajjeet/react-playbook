import React, { useRef, useEffect, useState } from 'react';

export const MutableStateRefHook = () => {
  const renderCount = useRef(0);
  const [text, setText] = useState(0);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, [text]);
  const handleInputChange = (e) => setText(e.target.value);
  return (
    <div>
      <h3>Mutable State</h3>
      <div>Text: {text}</div>
      <div id={'render-count'}>Render Count: {renderCount.current || 0}</div>
      <label htmlFor={'text-input'}>Enter text here:</label>
      <input id={'text-input'} onChange={handleInputChange} />
    </div>
  );
};