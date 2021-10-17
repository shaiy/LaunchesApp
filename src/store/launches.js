import { getLaunchesData } from '../api';
import { changeLoadingState, changeErrorState } from '../store/statusIndication';

const initialState = {
  showFutureLaunches: false,
  launches: [],
};

export function launchesReducer(state = initialState, action) {
  switch (action.type) {
    case 'launches/toggleFutureLaunches': {
      return { ...state, showFutureLaunches: action.payload };
    }
    case 'launches/setLaunches': {
      return { ...state, launches: action.payload };
    }
    default:
      return state;
  }
}

//selectors
export const getShowFutureLaunches = (state) => state.launches.showFutureLaunches;
export const getLaunches = (state) => state.launches.launches;

//action types
export const FUTURE_LAUNCHES_TOGGLE = 'launches/toggleFutureLaunches';
export const SET_LAUNCHES = 'launches/setLaunches';

//action creators
export const toggleFutureLaunchesSelector = (futureLaunchesIndicator) => ({
  type: FUTURE_LAUNCHES_TOGGLE,
  payload: futureLaunchesIndicator,
});

export function fetchLaunches(isFutureLaunches) {
  return async function setLaunchesThunk(dispatch) {
    dispatch(changeLoadingState(true));
    try {
      const data = await getLaunchesData(isFutureLaunches);
      console.log(data);
      dispatch({
        type: SET_LAUNCHES,
        payload: data.data.results,
      });
    } catch (err) {
      dispatch(changeErrorState(true));
    } finally {
      dispatch(changeLoadingState(false));
    }
  };
}
