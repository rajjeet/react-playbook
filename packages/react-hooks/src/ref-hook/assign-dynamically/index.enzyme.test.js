import React from "react";
import { mount } from "enzyme";
import { AssignDynamicallyRefHooks } from "./index";

describe('Assign Dynamically Ref Hook > Enzyme', function () {
  beforeEach(() => {
    const div = document.createElement("div");
    div.setAttribute('id', 'container');
    document.body.appendChild(div);
  })
  afterEach(() => {
    const div = document.getElementById('container');
    if(div) document.body.removeChild(div);
  })
  it('should toggle the text color of the selected task', function () {
    const wrapper = mount(<AssignDynamicallyRefHooks/>, {
      attachTo: document.getElementById('container')
    });
    wrapper.find('button[id="button-2"]').props().onClick();
    expect(document.getElementById('task-2').style.color).toBe("white");
    wrapper.find('button[id="button-2"]').props().onClick();
    expect(document.getElementById('task-2').style.color).toBe("black");
    wrapper.detach();
  });
});