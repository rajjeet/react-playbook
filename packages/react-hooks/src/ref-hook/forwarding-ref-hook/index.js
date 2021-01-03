import React, { forwardRef, useRef } from 'react';

export const ForwardingRefHook = forwardRef((props, ref) => {
  return (
    <div>
      <h3>Forwarding Refs</h3>
      <div>
        <label htmlFor={'name-field'}>Name Field:</label>
        <input id={'name-field'} ref={ref}/>
      </div>
    </div>
  );
});