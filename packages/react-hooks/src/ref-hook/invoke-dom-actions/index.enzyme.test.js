import React from "react";
import { mount } from "enzyme";
import { InvokeDOMActionsRefHook } from "./index";

describe('Invoke DOM Actions Ref Hook > Enzyme', function () {
  beforeEach(() => {
    const div = document.createElement("div");
    div.setAttribute('id', 'container');
    document.body.appendChild(div);
  })
  afterEach(() => {
    const div = document.getElementById('container');
    if(div) document.body.removeChild(div);
  })
  it('should focus on the input field after clicking the button', function () {
    const wrapper = mount(<InvokeDOMActionsRefHook/>, {
      attachTo: document.getElementById('container')
    })
    wrapper.find('button').props().onClick();
    expect(document.activeElement).toEqual(wrapper.find('input').getDOMNode());
    wrapper.detach();
  });
});