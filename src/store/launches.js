const initialState = {
  showFutureLaunches: false,
  launches: [],
};

export function launchesReducer(state = initialState, action) {
  switch (action.type) {
    case 'toggleFutureLaunches': {
      return { ...state, showFutureLaunches: action.payload };
    }
    case 'setLaunches': {
      return { ...state, launches: action.payload };
    }
    default:
      return state;
  }
}
