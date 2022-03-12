import * as ActionTypes from './constants';

const initialState = {
  keyword: null,
  store: null,
  loading: false,
  error: null,
}

const searchingReducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case ActionTypes.SEARCHING_REQUEST: {
      state.keyword = null;
      state.store = null;
      state.loading = true;
      state.error = null;
      return { ...state };
    }
    case ActionTypes.SEARCHING_SUCCESS: {
      state.keyword = payload.keyword;
      state.store = payload.data;
      state.loading = false;
      state.error = null;
      return { ...state };
    }
    case ActionTypes.SEARCHING_FAILED: {
      state.keyword = null;
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