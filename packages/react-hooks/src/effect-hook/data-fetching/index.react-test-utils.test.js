import React from "react";
import { DataFetchingEffectHook } from "./index";
import { act } from "react-dom/test-utils";
import {unmountComponentAtNode, render} from "react-dom";

describe('Data Fetching > React Test Utils', function () {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, text: "fake comment" }])
      }));
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    jest.clearAllMocks();
  })
  const waitForComponentToPaint = () => act(async () => {
    await new Promise(setImmediate);
  });
  describe('when data fetching is progress', function () {
    it('should show loading status',  async function () {
      render(<DataFetchingEffectHook/>, container);
      const loadingIndicator = container.querySelector("div[id='loading']")
      expect(loadingIndicator.textContent).toBe("Loading...");
      await waitForComponentToPaint();
    });
    it('should not show a list of comments', async function () {
      render(<DataFetchingEffectHook/>, container);
      const comment = container.querySelector("div[id='1']")
      expect(comment).toBeNull();
      await waitForComponentToPaint();
    });
  });

  describe('when data fetching is complete', function () {
    it('should not show loading status', async function () {
      await act( async () => {
        render(<DataFetchingEffectHook/>, container);
      });
      const loadingIndicator = container.querySelector("div[id='loading']")
      expect(loadingIndicator).toBeNull();
      });
      it('should show a list of comments', async function () {
        await act( async () => {
          render(<DataFetchingEffectHook/>, container);
        });
        const comment = container.querySelector("div[id='1']")
        expect(comment.textContent).toBe("fake comment");
      })
  });
});