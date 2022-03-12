import * as ActionTypes from './constants';
import api from 'utils/apiUtils';

const actFetchJobDetail = id => {
  return (dispatch) => {
    dispatch(actJobDetailRequest());
    dispatch(actListCommentRequest());
    api.get(`/api/jobs/${id}`)
      .then(result => {
        dispatch(actJobDetailSuccess(result.data));
      })
      .catch(error => {
        dispatch(actJobDetailFailed(error));
      });
    api.get(`/api/comments/by-job/${id}`)
      .then(result => {
        dispatch(actListCommentSuccess(result.data));
      })
      .catch(error => {
        dispatch(actListCommentFailed(error));
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

const actListCommentRequest = () => {
  return {
    type: ActionTypes.LIST_COMMENT_REQUEST,
  }
}
const actListCommentSuccess = data => {
  return {
    type: ActionTypes.LIST_COMMENT_SUCCESS,
    payload: data
  }
}
const actListCommentFailed = error => {
  return {
    type: ActionTypes.LIST_COMMENT_FAILED,
    payload: error
  }
}

export default actFetchJobDetail;