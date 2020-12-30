import { createStore, applyMiddleware } from 'redux';
import { countReducer } from './counter/reducer';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";

function* exampleSaga() {
  console.log("Example saga reached");
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(countReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(exampleSaga);
