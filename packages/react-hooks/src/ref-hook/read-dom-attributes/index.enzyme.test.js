import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { ReadDOMAttributesRefHook } from "./index";

describe('Read DOM Attributes Ref Hook > Enzyme', function () {
  beforeEach(() => {
    const div = document.createElement("div");
    div.setAttribute('id', 'container');
    document.body.appendChild(div);
  })
  afterEach(() => {
    const div = document.getElementById('container');
    if(div) document.body.removeChild(div);
  })
  it('should display the initial box width in text', function () {
    const wrapper = mount(<ReadDOMAttributesRefHook/>);
    expect(wrapper.find('#text-box').text()).toBe("This box's width is 0 px");
  });
  it('should update the box width when window is resized', function () {
    const wrapper = mount(<ReadDOMAttributesRefHook/>, {
      attachTo: document.getElementById('container')
    })
    const textBox = document.body.querySelector("[id='text-box']");
    jest.spyOn(textBox, "clientWidth", "get").mockImplementation(() => 100);
    act(() => {
      window.dispatchEvent(new Event('resize'));
      wrapper.update();
    })
    expect(wrapper.find('#text-box').text()).toBe("This box's width is 100 px");
  });
});