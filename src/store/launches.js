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
