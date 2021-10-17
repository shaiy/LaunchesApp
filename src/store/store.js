import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { launchesReducer } from './launches';
import { statusReducer } from './statusIndication';

export const store = createStore(
  combineReducers({
    launches: launchesReducer,
    status: statusReducer,
  }),
  applyMiddleware(thunk)
);
