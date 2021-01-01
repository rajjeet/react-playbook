import { render, unmountComponentAtNode } from "react-dom";
import { TimerEffectsHook } from "./index";
import React from "react";
import { act } from "react-dom/test-utils";

describe('Timers > React Test Utils', function () {
  let container = null;
  beforeEach(() => {
    jest.useFakeTimers();
    container = document.createElement("div");
    document.body.appendChild(container);
  })
  afterEach(() => {
    jest.clearAllTimers();
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  })
  it('should have disabled buttons for first 2 seconds', function () {
    act(() => {
      render(<TimerEffectsHook/>, container);
    })
    const button = container.querySelector("button[id='1']")
    expect(button.hasAttribute("disabled")).toBe(true);
  });
  it('should have enabled buttons after 2 seconds', function () {
    act(() => {
      render(<TimerEffectsHook/>, container);
    })
    act(() => {
      jest.runAllTimers()
    });
    const button = container.querySelector("button[id='1']")
    expect(button.hasAttribute("disabled")).toBe(false);
  });
});