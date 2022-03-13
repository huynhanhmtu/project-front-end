import * as ActionTypes from './constants';

const initialState = {
  message: null,
  loading: false,
}

const signUpReducer = (state = initialState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case ActionTypes.SIGN_UP_REQUEST: {
      state.message = null;
      state.loading = true;
      return { ...state }
    }
    case ActionTypes.SIGN_UP_SUCCESS: {
      state.loading = false;
      state.message = "Sign Up Successfully!";
      return { ...state }
    }
    case ActionTypes.SIGN_UP_FAILED: {
      state.loading = false;
      state.message = payload.response.data.message;
      return { ...state }
    }
    default:
      return { ...state }
  }
}

export default signUpReducer;