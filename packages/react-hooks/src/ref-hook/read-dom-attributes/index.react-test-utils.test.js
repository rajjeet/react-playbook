import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ReadDOMAttributesRefHook } from "./index";

describe('Read DOM Attributes Ref Hook > React Test Utils', function () {
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
  it('should display the initial box width in text', function () {
    act(() => {
      render(<ReadDOMAttributesRefHook/>, container);
    })
    const textBox = container.querySelector('[id="text-box"]');
    expect(textBox.textContent).toBe("This box's width is 0 px");
  });
  it('should update the box width when window is resized', function () {
    act(() => {
      render(<ReadDOMAttributesRefHook/>, container);
    })
    const textBox = container.querySelector('[id="text-box"]');
    jest.spyOn(textBox, "clientWidth", "get").mockImplementation(() => 100);
    act(() => {
      window.dispatchEvent(new Event('resize'));
    })
    expect(textBox.textContent).toBe("This box's width is 100 px");
  });
});