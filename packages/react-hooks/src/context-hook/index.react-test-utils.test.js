import React from "react";
import { Button, Message, ThemeContext } from "./index";
import { act } from "react-dom/test-utils";
import { unmountComponentAtNode, render } from "react-dom";

describe('Context Hook > React Test Utils', function () {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    jest.clearAllMocks();
  })
  describe('Message', function () {
    it('should show the color specified by theme context', function () {
      const spyInstance = jest.spyOn(React, "useContext")
        .mockImplementation(() => ({
          foreground: "#ffffff",
          background: "#222222"
        }));
      act(() => {
        render(<Message/>, container);
      });
      expect(spyInstance).toBeCalled();
      const { color, backgroundColor } = container.querySelector("span").style
      expect(color).toBe("rgb(255, 255, 255)");
      expect(backgroundColor).toBe("rgb(34, 34, 34)")
    });
    it('should show the color specified by theme context (Alternative)', function () {
      act(() => {
        render(
          <ThemeContext.Provider value={{
            foreground: "#ffffff",
            background: "#222222"
          }}>
            <Message/>
          </ThemeContext.Provider>,
          container);
      });
      const { color, backgroundColor } = container.querySelector("span").style
      expect(color).toBe("rgb(255, 255, 255)");
      expect(backgroundColor).toBe("rgb(34, 34, 34)")
    });
  });
  describe('Button', function () {
    it('should show the color specified by theme context', function () {
      act(() => {
        render(
          <ThemeContext.Provider value={{
            foreground: "#ffffff",
            background: "#222222"
          }}>
            <Button/>
          </ThemeContext.Provider>,
          container);
      });
      const { color, backgroundColor } = container.querySelector("button").style
      expect(color).toBe("rgb(34, 34, 34)");
      expect(backgroundColor).toBe("rgb(255, 255, 255)")
    });
  });
});