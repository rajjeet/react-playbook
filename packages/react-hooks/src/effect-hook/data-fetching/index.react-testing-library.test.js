import React from "react";
import { DataFetchingEffectHook } from "./index";
import { render, screen, act, waitForElementToBeRemoved } from "@testing-library/react";

describe('Data Fetching > React Testing Library', function () {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, text: "fake comment" }])
      }));
  });
  afterEach(() => {
    jest.clearAllMocks();
  })
  describe('when data fetching is progress', function () {
    it('should show loading status',  async function () {
      act(() => {
        render(<DataFetchingEffectHook/>);
      });
      const loadingIndicator = screen.queryByText("Loading...");
      expect(loadingIndicator).toBeDefined();
      await waitForElementToBeRemoved(loadingIndicator);
    });
    it('should not show a list of comments', async function () {
      act(() => {
        render(<DataFetchingEffectHook/>);
      });
      const comment = screen.queryByText("fake comment");
      expect(comment).toBeNull();
      await waitForElementToBeRemoved(screen.getByText("Loading..."));
    });
  });

  describe('when data fetching is complete', function () {
    it('should not show loading status', async function () {
      await act(async () => {
        render(<DataFetchingEffectHook/>);
      });
      const loadingIndicator = screen.queryByText("Loading...");
      expect(loadingIndicator).toBeNull();
    });
    it('should show a list of comments', async function () {
      await act( async () => {
        render(<DataFetchingEffectHook/>);
      });
      const comment = screen.queryByText("fake comment");
      expect(comment).toBeDefined();
    })
  });
});