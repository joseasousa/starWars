import { createStore, applyMiddleware } from 'redux';
import createSagaMiddeware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

export default (rootReducer, rootSaga) => {
  const sagamiddleware = createSagaMiddeware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(sagamiddleware),
    ),
  );

  sagamiddleware.run(rootSaga);
  return store;
};
