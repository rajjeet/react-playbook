import { render, screen, fireEvent } from "@testing-library/react";
import { PersistentStateRefHook } from "./index";
import React from "react";

describe('Persistent State Ref Hook > React Testing Library', function () {
  it('should increment render count for each change action in input field', function () {
    render(<PersistentStateRefHook/>);
    const input = screen.getByLabelText("Enter text here:");
    ['a', 'b', 'c'].forEach(char => {
      fireEvent.change(input, { target: { value: char } });
    })
    expect(screen.queryByText("Render Count: 3")).toBeDefined();
  });
});