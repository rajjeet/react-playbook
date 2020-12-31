import { render, screen, act } from "@testing-library/react";
import { TimerEffectsHook } from "./index";
import React from "react";

describe('Timers > React Testing Library', function () {
  beforeEach(() => {
    jest.useFakeTimers();
  })
  afterEach(() => {
    jest.clearAllTimers();
  })
  it('should have disabled buttons for first 2 seconds', function () {
    render(<TimerEffectsHook/>);
    expect(screen.getByText("1").hasAttribute("disabled")).toBe(true);
  });
  it('should have enabled buttons after 2 seconds', function () {
    render(<TimerEffectsHook/>);
    act(() => {
      jest.runAllTimers();
    });
    expect(screen.getByText("1").hasAttribute("disabled")).toBe(false);
  });
});