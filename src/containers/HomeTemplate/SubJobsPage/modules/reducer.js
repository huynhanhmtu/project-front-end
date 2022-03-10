import * as ActionTypes from './constants';

const initialState = {
  store: null,
  loading: false,
  error: null,
  subId: null,
}

const subJobsReducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case ActionTypes.SUB_JOBS_REQUEST: {
      state.store = null;
      state.loading = true;
      state.error = null;
      state.subId = null;
      return { ...state };
    }
    case ActionTypes.SUB_JOBS_SUCCESS: {
      state.store = payload;
      state.loading = false;
      state.error = null;
      return { ...state };
    }
    case ActionTypes.SUB_JOBS_FAILED: {
      state.store = null;
      state.loading = false;
      state.error = payload.response.data.message;
      return { ...state };
    }
    case ActionTypes.SUB_JOBS_CHANGED: {
      state.subId = payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
}

export default subJobsReducer;