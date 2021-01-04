import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { AssignDynamicallyRefHooks } from "./index";

describe('Assign Dynamically Ref Hook > React Test Utils', function () {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  })
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  })
  it('should focus on the input field after parent component invokes the command', function () {
    act(() => {
      render(<AssignDynamicallyRefHooks/>, container);
    });
    const button = container.querySelector('#button-2');
    button.dispatchEvent(new Event('click', { bubbles: true }));
    const task = container.querySelector('#task-2');
    expect(task.style.color).toBe("white");
    button.dispatchEvent(new Event('click', { bubbles: true }));
    expect(task.style.color).toBe("black");
  });
});