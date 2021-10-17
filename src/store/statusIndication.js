const initialState = {
  isLoading: true,
  isError: false,
};

export function statusReducer(state = initialState, action) {
  switch (action.type) {
    case LOADIND_STATE_CHANGED: {
      return { ...state, isLoading: action.payload };
    }
    case ERROR_STATE_CHANGED: {
      return { ...state, isError: action.payload };
    }
    default:
      return state;
  }
}

//selectors
export const getIsLoading = (state) => state.status.isLoading;
export const getIsError = (state) => state.status.isError;

//action types
export const LOADIND_STATE_CHANGED = 'status/loadingStateChanged';
export const ERROR_STATE_CHANGED = 'status/errorStateChanged';

//action creators
export const changeLoadingState = (loadingState) => ({
  type: LOADIND_STATE_CHANGED,
  payload: loadingState,
});

export const changeErrorState = (errorState) => ({
  type: ERROR_STATE_CHANGED,
  payload: errorState,
});
