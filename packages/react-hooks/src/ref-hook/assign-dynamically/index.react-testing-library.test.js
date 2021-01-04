import React, { useEffect, useRef } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AssignDynamicallyRefHooks } from "./index";

describe('Assign Dynamically Ref Hook > React Testing Library', function () {
  it('should focus on the input field after parent component invokes the command', function () {
    render(<AssignDynamicallyRefHooks/>);
    const button = screen.getByText('Toggle Task 2');
    fireEvent(button, new Event('click', { bubbles: true }));
    const task = screen.getByText("Task 2");
    expect(task.style.color).toBe("white");
    fireEvent(button, new Event('click', { bubbles: true }));
    expect(task.style.color).toBe("black");
  });
});