import { createStore } from 'redux';
import { launchesReducer } from './launches';

export const store = createStore(launchesReducer);
