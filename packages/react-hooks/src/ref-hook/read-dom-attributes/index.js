import React, { useEffect, useState } from 'react';

export const ReadDOMAttributesRefHook = () => {
  const boxRef = React.useRef(null);
  const [boxWidth, setBoxWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {

      setBoxWidth(boxRef.current.clientWidth)
    };
    if (boxRef && boxRef.current){
      setBoxWidth(boxRef.current.clientWidth)
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [boxWidth])
  return (
    <div>
      <h3>Read DOM Attributes</h3>
      <div id={'text-box'} ref={boxRef} style={{border: "1px solid black"}}>This box's width is {boxWidth} px</div>
    </div>
  );
};