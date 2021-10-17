const initialState = {
  isLoading: true,
  isError: false,
};

export function statusReducer(state = initialState, action) {
  switch (action.type) {
    case 'status/setLoading': {
      return { ...state, isLoading: action.payload };
    }
    case 'status/setError': {
      return { ...state, isError: action.payload };
    }
    default:
      return state;
  }
}
