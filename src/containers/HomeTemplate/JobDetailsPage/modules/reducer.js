import * as ActionTypes from './constants';

const initialState = {
  jobData: null,
  loading: false,
  error: null,
  comments: null,
  commentLoading: false,
  commentError: null,
}

const jobDetailReducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case ActionTypes.JOB_DETAIL_REQUEST: {
      state.jobData = null;
      state.loading = true;
      state.error = null;
      return { ...state };
    }
    case ActionTypes.JOB_DETAIL_SUCCESS: {
      state.jobData = payload;
      state.loading = false;
      state.error = null;
      return { ...state };
    }
    case ActionTypes.JOB_DETAIL_FAILED: {
      state.jobData = null;
      state.loading = false;
      state.error = payload.response.data.message;
      return { ...state };
    }
    case ActionTypes.LIST_COMMENT_REQUEST: {
      state.comments = null;
      state.commentLoading = true;
      state.commentError = null;
      return { ...state };
    }
    case ActionTypes.LIST_COMMENT_SUCCESS: {
      state.comments = payload;
      state.commentLoading = false;
      state.commentError = null;
      return { ...state };
    }
    case ActionTypes.LIST_COMMENT_FAILED: {
      state.comments = null;
      state.commentLoading = false;
      state.commentError = payload.response.data.message;
      return { ...state };
    }
    default:
      return { ...state };
  }
}

export default jobDetailReducer;