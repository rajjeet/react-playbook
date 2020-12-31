import React from 'react';
import { DataFetchingEffectHook } from "./data-fetching";
import { TimerEffectsHook } from "./timers";

export const EffectHooks = () => {
  return (
    <div>
      <h2>Effect Hooks</h2>
      <DataFetchingEffectHook />
      <TimerEffectsHook />
    </div>
  );
};
