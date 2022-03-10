import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchSubJobs } from './modules/actions';

export default function SubJobsPage(props) {
  const subJobs = useSelector(state => state.subJobsReducer.store);
  console.log(subJobs);

  const subId = props.match.params.subId;
  const dispatch = useDispatch();

  useEffect(() => {
    if (subId) {
      dispatch(actFetchSubJobs(subId)); //Tạo thêm thuộc tính trên reducer để khi nhấn vào link khác => thay đổi subId => render lại (dispatch action ở Navbar)
    }
  }, []);

  const MAX_TITLE_LENGTH = 50;

  const handleRenderItem = () => {
    if (subJobs && subJobs.length > 0) {
      return subJobs.map(job => {
        return (
          <div key={job._id} className=' col-3 p-3'>
            <div className="card">
              <img className="w-100" style={{ height: 220, objectFit: "cover" }} src={job.image ? job.image : "https://images.squarespace-cdn.com/content/v1/562e3dade4b0c308fbc94d7b/1603322266670-Y6WK1MCXQ09I5GUT4TFN/coming+soon+yellow.jpg?format=1500w"} />
              <div className="card-body">
                <p className="card-title" style={{height:25}}>
                  {job.subType?.name ? job.subType.name : ""}
                </p>
                <p className='card-text' style={{ height: 40 }}>
                  {job.name ? job.name.substring(0, MAX_TITLE_LENGTH) : ""}{job.name?.length > MAX_TITLE_LENGTH ? "..." : ""}
                </p>
                <span><i className="fa fa-star" style={{ color: "#ffbe5b" }}></i> 5.0 ({job.rating ? job.rating : 0})</span>
              </div>
              <hr className='m-0' />
              <div className='card-body d-flex justify-content-between align-items-center py-2'>
                <i className="fa fa-heart" style={{ color: "#b5b6ba" }}></i>
                <p className='mb-0'>STARTING AT<span> US${job.price}</span></p>
              </div>
            </div>
          </div>
        )
      });
    }
    return (
      <div className='m-auto py-4 text-center'>
        <p>No Services Available.</p>
        <Link to="/" >Back to Homepage</Link>
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
