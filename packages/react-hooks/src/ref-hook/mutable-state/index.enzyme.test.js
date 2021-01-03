import React from "react";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";
import { MutableStateRefHook } from "./index";

describe('Mutable State Ref Hook > Enzyme', function () {
  it('should increment render count for each change action in input field', function () {
    const wrapper = mount(<MutableStateRefHook/>);
    ["a", "b", "c"].forEach(char => {
      act(() => {
        wrapper.find('input').props().onChange({ target: { value: char } });
        wrapper.update();
      });
    })
    expect(wrapper.find('#render-count').text()).toBe("Render Count: 3");
  });
});