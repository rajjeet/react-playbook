import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import { MutableStateRefHook } from "./index";

describe('Mutable State Ref Hook > React Test Utils', function () {
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
  it('should increment render count for each change action in input field', function () {
    act(() => {
      render(<MutableStateRefHook/>, container);
    })
    const textInput = container.querySelector('input');
    ["a", "b", "c"].forEach(char => {
      act(() => {
        Simulate.change(textInput, {target: { value: char}});
      });
    });
    const renderCount = container.querySelector("[id='render-count']")
    expect(renderCount.textContent).toBe("Render Count: 3");
  });
});