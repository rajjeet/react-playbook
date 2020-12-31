import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { StateHook } from "./index";
import React from "react";

describe('State Hook', function () {
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
  it('should increment count when increment button is clicked', function () {
    act(() => {
      render(<StateHook/>, container);
    });
    const incrementButton = document.querySelector("[id=increment-btn]");
    act(() => {
      incrementButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    const countDisplay = document.querySelector("[id=count-display]");
    expect(countDisplay.innerHTML).toBe("Count: 1")
  });
});