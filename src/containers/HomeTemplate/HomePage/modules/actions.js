import * as ActionTypes from './constants';
import api from 'utils/apiUtils';

export const actSearchJobs = (job) => {
  return (dispatch) => {
    dispatch(actSearchRequest());
    api.get(`/api/jobs/by-name?name=${job}`)
      .then(result => {
        dispatch(actSearchSuccess(result.data));
      })
      .catch(error => {
        dispatch(actSearchFailed(error));
      });
  }
}

const actSearchRequest = () => {
  return {
    type: ActionTypes.SEARCHING_REQUEST,
  }
};
const actSearchSuccess = data => {
  return {
    type: ActionTypes.SEARCHING_SUCCESS,
    payload: data
  }
};
const actSearchFailed = error => {
  return {
    type: ActionTypes.SEARCHING_FAILED,
    payload: error
  }
};