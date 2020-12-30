import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { countReducer } from './counter/reducer';

export const store = createStore(countReducer, applyMiddleware(thunk));
