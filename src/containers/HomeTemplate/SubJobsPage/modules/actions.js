import * as ActionTypes from './constants';
import api from 'utils/apiUtils';

export const actFetchSubJobs = (id) => {
  return (dispatch) => {
    dispatch(actFetchRequest());
    api.get(`api/jobs/by-sub-type?subType=${id}&skip=0&llimit=10`)
      .then(result => {
        dispatch(actFetchSuccess(result.data));
      })
      .catch(error => {
        dispatch(actFetchFailed(error));
      });
  }
}

const actFetchRequest = () => {
  return {
    type: ActionTypes.SUB_JOBS_REQUEST,
  }
};
const actFetchSuccess = data => {
  return {
    type: ActionTypes.SUB_JOBS_SUCCESS,
    payload: data
  }
};
const actFetchFailed = error => {
  return {
    type: ActionTypes.SUB_JOBS_FAILED,
    payload: error
  }
};