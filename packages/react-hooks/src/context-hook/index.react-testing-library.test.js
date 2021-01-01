import React from "react";
import { Message, ThemeContext } from "./index";
import { render, screen } from "@testing-library/react";

describe('Context Hook > React Testing Library', function () {
  afterEach(() => {
    jest.clearAllMocks();
  })
  it('should show the color specified by theme context', function () {
    const spyInstance = jest.spyOn(React, "useContext")
      .mockImplementation(() => ({
        foreground: "#ffffff",
        background: "#222222"
      }));
    render(<Message/>);
    expect(spyInstance).toBeCalled();
    const message = screen.getByText('This is the theme context in action!');
    expect(message).toHaveStyle(`background-color: #222222`);
    expect(message).toHaveStyle(`color: #ffffff`);
  });
  it('should show the color specified by theme context (Alternative)', function () {
    render(
      <ThemeContext.Provider value={{
        foreground: "#ffffff",
        background: "#222222"
      }}>
        <Message/>
      </ThemeContext.Provider>);
    const message = screen.getByText('This is the theme context in action!');
    expect(message).toHaveStyle(`background-color: #222222`);
    expect(message).toHaveStyle(`color: #ffffff`);
  });
});