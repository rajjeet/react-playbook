import React from "react";
import { shallow, mount } from "enzyme";
import { Message, ThemeContext } from "./index";

describe('Context Hook > Enzyme', function () {
  afterEach(() => {
    jest.clearAllMocks();
  })
  it('should show the color specified by theme context', function () {
    const spyInstance = jest.spyOn(React, "useContext")
      .mockImplementation(() => ({
        foreground: "#ffffff",
        background: "#222222"
      }));
    const wrapper = shallow(<Message/>);
    expect(spyInstance).toBeCalled();
    const styles = wrapper.find('span').props().style;
    expect(styles.color).toBe('#ffffff');
    expect(styles.backgroundColor).toBe('#222222');
  });
  it('should show the color specified by theme context (Alternative)', function () {
    const wrapper = mount(
      <ThemeContext.Provider value={{
        foreground: "#ffffff",
        background: "#222222"
      }}>
        <Message/>
      </ThemeContext.Provider>
    );
    const styles = wrapper.find('span').props().style;
    expect(styles.color).toBe('#ffffff');
    expect(styles.backgroundColor).toBe('#222222');
  });
});