import React, { useEffect, useRef } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { ForwardingRefHook } from "./index";

describe('Forwarding Ref Hook > React Test Utils', function () {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  })
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  })
  it('should focus on the input field after parent component invokes the command', function () {
    const MockParentComponent = () => {
      const inputRef = useRef(null);
      useEffect(() => {
        if (inputRef && inputRef.current) inputRef.current.focus();
      }, [])
      return <ForwardingRefHook ref={inputRef}/>;
    };
    act(() => {
      render(<MockParentComponent/>, container);
    })
    const input = container.querySelector('input');
    expect(document.activeElement).toEqual(input);
  });
});