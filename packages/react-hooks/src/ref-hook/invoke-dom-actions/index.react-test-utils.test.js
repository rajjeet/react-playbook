import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { InvokeDOMActionsRefHook } from "./index";

describe('Invoke DOM Action Ref Hook > React Test Utils', function () {
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
  it('should focus on the input field after clicking the button', function () {
    act(() => {
      render(<InvokeDOMActionsRefHook/>, container);
    })
    const button = container.querySelector('button');
    const input = container.querySelector('input');
    button.dispatchEvent(new Event('click', { bubbles: true }));
    expect(document.activeElement).toEqual(input);
  });
});