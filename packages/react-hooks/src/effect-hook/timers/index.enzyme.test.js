import { TimerEffectsHook } from "./index";
import React from "react";
import { shallow, mount } from "enzyme";
import { act } from "react-dom/test-utils";

describe('Timers > Enzyme', function () {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  afterEach(() => {
    jest.clearAllTimers();
  })
  it('should have disabled buttons for first 2 seconds', function () {
    const wrapper = shallow(<TimerEffectsHook/>);
    const button = wrapper.find('button[id=1]');
    expect(button.props().disabled).toBe(true);
  });
  it('should have enabled buttons after 2 seconds', function () {
    const wrapper = mount(<TimerEffectsHook/>);
    const button = wrapper.find('button[id=1]');
    act(() => {
      jest.runAllTimers();
    });
    setTimeout(() => {
      expect(button.props().disabled).toBe(false);
    })
  });
});