import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';
import Socket from '../socket';

const sagaMiddleware = createSagaMiddleware();

let middleware;

if (process && process.env && process.env.NODE_ENV === 'production') {
  middleware = applyMiddleware(sagaMiddleware);
} else {
  middleware = composeWithDevTools(applyMiddleware(sagaMiddleware));
}
const store = createStore(reducers, middleware);

const socket = Socket(store.dispatch);

sagaMiddleware.run(rootSaga, socket);

export default store;
