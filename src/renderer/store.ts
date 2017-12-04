import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import counter from './counter/module';

const store = createStore(
  combineReducers({
    counter,
  })
);

export default store;
