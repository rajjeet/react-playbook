import { ReadDOMAttributesRefHook } from "./index";
import React from "react";
import { mount, shallow } from "enzyme";
import { act } from "react-dom/test-utils";

describe('Mutable State Ref Hook > Enzyme', function () {
  it('should display the initial box width in the text', function () {
    // jest.spyOn(React, "useRef").mockImplementation(() => ({current: {clientWidth: 400}}));
    const wrapper = mount(<ReadDOMAttributesRefHook/>);
    // console.log(wrapper.find('#text-box').debug())
    act(() => {
      wrapper.update();
    })
    const box = wrapper.find('#text-box');
    console.log(box.getDOMNode())
    // document.body.dispatchEvent(new Event('resize'));
    // console.log(wrapper.debug());
  });
  it('should update the box width when window is resized', function () {

  });
});