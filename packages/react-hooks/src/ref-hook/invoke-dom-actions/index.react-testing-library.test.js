import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { InvokeDOMActionsRefHook } from "./index";

describe('Invoke DOM Action Ref Hook > React Testing Library', function () {
  it('should focus on the input field after clicking the button', function () {
    render(<InvokeDOMActionsRefHook/>);
    fireEvent(screen.getByText('Click Here to Fill Form'),
      new Event('click', { bubbles: true }))
    const input = screen.getByLabelText('Name Field:');
    expect(document.activeElement).toEqual(input);
  });
});