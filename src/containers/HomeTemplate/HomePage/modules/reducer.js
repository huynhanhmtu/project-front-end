import * as ActionTypes from './constants';

const initialState = {
  store: null,
  loading: false,
  error: null
}

const searchingReducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case ActionTypes.SEARCHING_REQUEST: {
      state.store = null;
      state.loading = true;
      state.error = null;
      return { ...state };
    }
    case ActionTypes.SEARCHING_SUCCESS: {
      state.store = payload;
      state.loading = false;
      state.error = null;
      console.log(payload);
      return { ...state };
    }
    case ActionTypes.SEARCHING_FAILED: {
      state.store = null;
      state.loading = false;
      state.error = payload.response.data.message;
      return { ...state };
    }
    default:
      return { ...state };
  }
}

export default searchingReducer;