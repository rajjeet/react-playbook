import React, { useEffect, useRef } from "react";
import { render, screen } from "@testing-library/react";
import { ForwardingRefHook } from "./index";

describe('Forwarding Ref Hook > React Testing Library', function () {
  it('should focus on the input field after parent component invokes the command', function () {
    const MockParentComponent = () => {
      const inputRef = useRef(null);
      useEffect(() => {
        if (inputRef && inputRef.current) inputRef.current.focus();
      }, [])
      return <ForwardingRefHook ref={inputRef}/>;
    };
    render(<MockParentComponent/>);
    const input = screen.getByLabelText('Name Field:');
    expect(document.activeElement).toEqual(input);
  });
});