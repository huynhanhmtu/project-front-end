import api from 'utils/apiUtils';
import * as ActionTypes from './constants';

export const actAddUser = info => {
  return (dispatch) => {
    dispatch(actModalRequest());
    api.post("/api/auth/signup", info)
      .then(result => {
        dispatch(actModalSuccess());
      })
      .catch(error => {
        dispatch(actModalFailed(error))
      });
  };
};

const actModalRequest = () => ({
  type: ActionTypes.MODAL_REQUEST
});

const actModalSuccess = () => ({
  type: ActionTypes.MODAL_SUCCESS,
});

const actModalFailed = error => ({
  type: ActionTypes.MODAL_FAILED,
  payload: error
});

export const actResetModal = () => {
  return dispatch => {
    dispatch({
      type: ActionTypes.MODAL_RESET
    });
  };
};