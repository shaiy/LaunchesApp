import { createStore, combineReducers } from 'redux';
import { launchesReducer } from './launches';
import { statusReducer } from './statusIndication';

export const store = createStore(
  combineReducers({
    launches: launchesReducer,
    status: statusReducer,
  })
);
