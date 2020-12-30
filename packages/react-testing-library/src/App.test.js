import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

describe("App Component", function () {
  it("should have hello world message", function () {
    let { getByText } = render(<App />);
    expect(getByText("Hello world React!")).toMatchInlineSnapshot(`
      <h1>
        Hello world React!
      </h1>
    `);
  });
});
