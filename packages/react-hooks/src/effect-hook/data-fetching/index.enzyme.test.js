import React from "react";
import { mount, shallow } from "enzyme";
import { DataFetchingEffectHook } from "./index";
import { act } from "react-dom/test-utils";

describe('Data Fetching > Enzyme', function () {
  afterEach(() => {
    jest.clearAllMocks();
  })
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, text: "fake comment" }])
      }));
  });
  describe('when data fetching is progress', function () {
    it('should show loading status', function () {
      const wrapper = shallow(<DataFetchingEffectHook/>);
      expect(wrapper.find('[id="loading"]')).toHaveLength(1);
    });
    it('should not show a list of comments', function () {
      const wrapper = shallow(<DataFetchingEffectHook/>);
      expect(wrapper.find('[id=1]')).toHaveLength(0);
    });
  });

  const waitForComponentToPaint = async (wrapper) => {
    await act(async () => {
      await new Promise(setImmediate);
      wrapper.update();
    });
  };
  describe('when data fetching is complete', function () {
    it('should not show loading status', async function () {
      const wrapper = mount(<DataFetchingEffectHook/>);
      await waitForComponentToPaint(wrapper);
      expect(wrapper.find('[id="loading"]')).toHaveLength(0);
    });
    it('should show a list of comments', async function () {
      const wrapper = mount(<DataFetchingEffectHook/>);
      await waitForComponentToPaint(wrapper);
      expect(wrapper.find('[id=1]')).toHaveLength(1);
    })
  });
});