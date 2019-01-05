import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/rootReducer';
import { readRecords } from '../redux/showsReducer';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (process.env.NODE_ENV !== 'production'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const addstore = createStore(rootReducer, enhancer);
/* eslint-enable */

addstore.dispatch(readRecords('/api/shows/'));

export default addstore;
