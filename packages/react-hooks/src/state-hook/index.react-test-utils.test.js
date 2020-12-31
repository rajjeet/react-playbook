import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { StateHook } from "./index";
import React from "react";

describe('State Hook > React Test Utils', function () {
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
  it('should initialize count with 0', function () {
    act(() => {
      render(<StateHook/>, container);
    });
    const countDisplay = document.querySelector("[id=count-display]");
    expect(countDisplay.innerHTML).toBe("Count: 0")
  });
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