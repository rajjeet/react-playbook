import React from "react";
import { shallow } from "enzyme";
import { StateHook } from "./index";

describe('State Hook > Enzyme', function () {
  it('should initialize count with 0', function () {
    const wrapper = shallow(<StateHook/>);
    expect(wrapper.find('[id="count-display"]').text()).toBe("Count: 0");
  });
  it('should increment count when increment button is clicked', function () {
    const wrapper = shallow(<StateHook/>);
    wrapper.find('[id="increment-btn"]').props().onClick();
    expect(wrapper.find('[id="count-display"]').text()).toBe("Count: 1");
  });
});