import React, { useCallback, useEffect, useState } from 'react';

export const CallbackHook = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  // only create this function once for the lifetime of this component
  const getMousePosition = useCallback((e) => {
    setScrollPosition(`(${e.offsetX},${e.offsetY})`);
  }, []);
  useEffect(() => {
    window.addEventListener("mousemove", getMousePosition);
    return () => window.removeEventListener("mousemove", getMousePosition)
  }, [])
  return (
    <div>
      <h2>Callback Hook</h2>
      <div>Mouse Position: {scrollPosition}</div>
    </div>
  );
};