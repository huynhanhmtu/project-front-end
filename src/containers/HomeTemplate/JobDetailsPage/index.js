import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actFetchJobDetail from './modules/actions';

export default function JobDetailPage(props) {
  const jobData = useSelector(state => state.jobDetailReducer.jobData);
  const jobId = props.match.params.jobId;
  console.log(jobData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchJobDetail(jobId));
  }, []);


  if (jobData) {
    return (
      <div>
        <div>Navbar cho Job Detail : Overview, Description, FAQ, Reviews, About the seller, Compare packages, Recommendations</div>




      </div>
    )
  }
  return (
    <></>
  )
}
