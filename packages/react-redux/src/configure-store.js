import { createStore } from 'redux';
import { countReducer } from './counter/reducer';

export const store = createStore(countReducer);
