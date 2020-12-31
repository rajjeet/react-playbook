import React from "react";
import { render, screen, fireEvent } from '@testing-library/react'
import { StateHook } from "./index";

describe('State Hook > React Testing Library', function () {
  it('should initialize count with 0', function () {
    render(<StateHook/>);
    expect(screen.getByText("Count: 0")).toBeDefined();
  });
  it('should increment count when increment button is clicked', function () {
    render(<StateHook/>);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText("Count: 1")).toBeDefined();
  });
});