import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

let middleware;

if (process && process.env && process.env.NODE_ENV === 'production') {
  middleware = applyMiddleware(sagaMiddleware);
} else {
  middleware = composeWithDevTools(
    applyMiddleware(sagaMiddleware),
  );
}
const store = createStore(reducers, middleware);

sagaMiddleware.run(rootSaga);

export default store;
