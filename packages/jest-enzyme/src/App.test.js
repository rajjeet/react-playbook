import React from 'react';
import { shallow } from "enzyme";
import { App } from "./App";

describe('Test App Entry point', function () {
  it('should have a header tag with Hello world React!', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.find("h1").text()).toEqual("Hello world React!");
  });
});