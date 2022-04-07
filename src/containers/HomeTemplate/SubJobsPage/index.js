import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchSubJobs } from './modules/actions';
import './style.css';
const MAX_TITLE_LENGTH = 35;
export default function SubJobsPage(props) {
  const subJobs = useSelector(state => state.subJobsReducer.store);
  const subId = useSelector(state => state.subJobsReducer.subId) || props.match.params.subId;

  const dispatch = useDispatch();
  useEffect(() => {
    if (subId) {
      dispatch(actFetchSubJobs(subId));
    }
  }, [subId]);

  const handleRenderItem = () => {
    if (subJobs && subJobs.length > 0) {
      return subJobs.map(job => {
        return (
          // Tạo form chung cho chức năng search và render item
          <Link key={job._id} className=' col-lg-3 col-sm-6 col-12 p-3 job-item' to={`/job-detail/${job._id}`}>
            <div className="card">
              <img className="w-100 job-img" style={{ height: 220, objectFit: "cover" }} src={job.image ? job.image : "https://images.squarespace-cdn.com/content/v1/562e3dade4b0c308fbc94d7b/1603322266670-Y6WK1MCXQ09I5GUT4TFN/coming+soon+yellow.jpg?format=1500w"} />
              <div className="card-body">
                <p className="card-title">
                  {job.subType?.name ? job.subType.name : "Title"}
                </p>
                <p className='card-text job-text' style={{ height: 40 }}>
                  {job.name ? job.name.substring(0, MAX_TITLE_LENGTH) : ""}{job.name?.length > MAX_TITLE_LENGTH ? "..." : ""}
                </p>
                <span className="job-rating"><i className="fa fa-star"></i> 5.0 <span className="job-count">({job.rating ? job.rating : 0})</span></span>
              </div>
              <hr className='m-0' />
              <div className='card-body d-flex justify-content-between align-items-center'>
                <i className="fa fa-heart" style={{ color: "#b5b6ba" }}></i>
                <p className='mb-0 job-starting'>STARTING AT<span className='job-cash'> ${job.price}</span></p>
              </div>
            </div>
          </Link>
        )
      });
    }
    return (
      <div className='m-auto py-4 text-center'>
        <p>No Services Available.</p>
        <Link to="" onClick={()=>{props.history.goBack()}} >Back to previous</Link>
      </div>
    );
  }

  return (
    <div>
      <p>{subJobs?.length} Services Available</p>
      <div className='row m-auto w-100'>
        {handleRenderItem()}
      </div>
    </div>
  )
}
