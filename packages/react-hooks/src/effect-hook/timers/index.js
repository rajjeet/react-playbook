import React, { useEffect, useState } from "react";

export const TimerEffectsHook = () => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setText("Select an option!");
      setIsLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  const onSelect = (id) => {
    setText(`You have selected: ${id}`);
  }
  return <>
    <h3>Timers</h3>
    {[1, 2, 3, 4].map(choice => (
      <button
        id={choice}
        key={choice}
        onClick={() => onSelect(choice)}
        disabled={isLoading}
      >
        {choice}
      </button>
    ))}
    <div>{text}</div>
  </>
}