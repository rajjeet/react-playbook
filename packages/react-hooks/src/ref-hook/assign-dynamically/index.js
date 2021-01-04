import React, { useRef } from 'react';

const tasks = [
  { name: "Task 1", color: "red" },
  { name: "Task 2", color: "green" },
  { name: "Task 3", color: "yellow" },
  { name: "Task 4", color: "gray" }
];

export const AssignDynamicallyRefHooks = () => {
  const refsArray = useRef([]);
  const handleButtonClick = (id) => () => {
    refsArray.current[id].style.color = refsArray.current[id].style.color === "white"
      ? "black" : "white";
  };
  return (
    <div>
      <h3>Assign Refs Dynamically</h3>
      {tasks.map((task, i) => {
        return (
          <button
            key={i}
            id={`button-${i}`}
            onClick={handleButtonClick(i)}>
            Toggle {task.name}
          </button>
        );
      })}
      <div>
        {tasks.map((task, i) => (
          <div
            key={i}
            id={`task-${i}`}
            ref={ref => {
              refsArray.current[i] = ref;
            }}
            style={{ padding: "30px", display: 'inline-block',  backgroundColor: task.color }}>
          {task.name}
        </div>
        ))}
      </div>
    </div>
  );
};
