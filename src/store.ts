import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

function makeStore() {
  const store = createStore(rootReducer, {}, composeWithDevTools());

  return store;
}

export default makeStore;
