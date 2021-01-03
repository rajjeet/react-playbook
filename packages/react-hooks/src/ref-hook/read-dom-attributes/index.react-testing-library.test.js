import { render, screen, fireEvent } from "@testing-library/react";
import { ReadDOMAttributesRefHook } from "./index";
import React from "react";
import { act } from "react-dom/test-utils";

describe('Read DOM Attributes Ref Hook > React Testing Library', function () {
  it('should display the initial box width in text', function () {
    render(<ReadDOMAttributesRefHook/>);
    expect(screen.getByText("This box's width is 0 px"));
  });
  it('should update the box width when window is resized', function () {
    render(<ReadDOMAttributesRefHook/>);
    const textBox = document.body.querySelector('[id="text-box"]');
    jest.spyOn(textBox, "clientWidth", "get").mockImplementation(() => 100);
    act(() => {
      window.dispatchEvent(new Event('resize'));
    })
    expect(screen.getByText("This box's width is 100 px"));
  });
});