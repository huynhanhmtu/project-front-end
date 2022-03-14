import api from 'utils/apiUtils';
import * as ActionType from './constants';

export const actLogin = (userInfo, history) => {
  return (dispatch) => {
    dispatch(actLoginRequest());

    api.post("/api/auth/signin", userInfo)
      .then(result => {
        if (result.data.user.role === "CLIENT") {
          dispatch(actLoginSuccess(result.data));
          history.goBack();
        } else if (result.data.user.role === "ADMIN") {
          dispatch(actLoginSuccess(result.data));
          history.replace("/users-management");
        } else {
          return Promise.reject({
            response: {
              data: {
                message: "Does not have permission to access!"
              }
            }
          });
        }
        localStorage.setItem("UserInfo", JSON.stringify(result.data));
      })
      .catch(error => {
        dispatch(actLoginFailed(error));
      });
  }
}

const actLoginRequest = () => {
  return {
    type: ActionType.LOGIN_REQUEST,
  }
};
const actLoginSuccess = (data) => {
  return {
    type: ActionType.LOGIN_SUCCESS,
    payload: data
  }
};
const actLoginFailed = (error) => {
  return {
    type: ActionType.LOGIN_FAILED,
    payload: error
  }
};

export const actLoginReset = () => {
  return {
    type: ActionType.LOGIN_RESET
  }
}