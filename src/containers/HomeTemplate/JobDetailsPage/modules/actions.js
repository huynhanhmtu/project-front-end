import * as ActionTypes from './constants';
import api from 'utils/apiUtils';

const actFetchJobDetail = id => {
  return (dispatch) => {
    dispatch(actJobDetailRequest());
    api.get(`/api/jobs/${id}`)
      .then(result => {
        dispatch(actJobDetailSuccess(result.data));
      })
      .catch(error => {
        dispatch(actJobDetailFailed(error));
      });
  }
}

const actJobDetailRequest = () => {
  return {
    type: ActionTypes.JOB_DETAIL_REQUEST,
  }
};
const actJobDetailSuccess = data => {
  return {
    type: ActionTypes.JOB_DETAIL_SUCCESS,
    payload: data
  }
};
const actJobDetailFailed = error => {
  return {
    type: ActionTypes.JOB_DETAIL_FAILED,
    payload: error
  }
};

export default actFetchJobDetail;