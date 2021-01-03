import React, { useEffect, useRef } from "react";
import { mount } from "enzyme";
import { ForwardingRefHook } from "./index";

describe('Forwarding Ref Hook > Enzyme', function () {
  beforeEach(() => {
    const div = document.createElement("div");
    div.setAttribute('id', 'container');
    document.body.appendChild(div);
  })
  afterEach(() => {
    const div = document.getElementById('container');
    if(div) document.body.removeChild(div);
  })
  it('should focus on the input field after parent component invokes the command', function () {
    const MockParentComponent = () => {
      const inputRef = useRef(null);
      useEffect(() => {
        if (inputRef && inputRef.current) inputRef.current.focus();
      }, [])
      return <ForwardingRefHook ref={inputRef}/>;
    };
    const wrapper = mount(<MockParentComponent/>, {
      attachTo: document.getElementById('container')
    });
    expect(document.activeElement).toEqual(wrapper.find('input').getDOMNode());
    wrapper.detach();
  });
});