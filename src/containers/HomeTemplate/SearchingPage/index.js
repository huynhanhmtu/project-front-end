import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { actSearchJobs } from '../HomePage/modules/actions';

const MAX_TITLE_LENGTH = 35;

export default function SearchingPage() {
  const preKeyword = useSelector(state => state.searchingReducer.keyword);
  const keyword = localStorage.getItem("job-keyword") ? JSON.parse(localStorage.getItem("job-keyword")) : preKeyword;
  const searchingList = useSelector(state => state.searchingReducer.store);

  const dispatch = useDispatch();
  useEffect(() => {
    if (keyword) {
      dispatch(actSearchJobs(keyword));
    }
  }, []);

  const handleRenderList = () => {
    if (searchingList && searchingList.length > 0) {
      return searchingList.map(job => {
        return (
          <Link key={job._id} className=' col-3 p-3' to={`/job-detail/${job._id}`}>
            <div className="card">
              <img className="w-100" style={{ height: 220, objectFit: "cover" }} src={job.image ? job.image : "https://images.squarespace-cdn.com/content/v1/562e3dade4b0c308fbc94d7b/1603322266670-Y6WK1MCXQ09I5GUT4TFN/coming+soon+yellow.jpg?format=1500w"} />
              <div className="card-body">
                <p className="card-title" style={{ height: 25 }}>
                  {job.subType?.name ? job.subType.name : ""}
                </p>
                <p className='card-text' style={{ height: 40, textTransform: "capitalize" }}>
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
          </Link>
        )
      });
    }
    return (
      <div className='m-auto py-4 text-center'>
        <img style={{ height: 200 }} src='https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/apps/empty-search-results.229c0d3.png'></img>
        <h5>No Results Found For Your Search</h5>
        <p>Try a new search or get a free quote for your project from our community of freelancers.</p>
        <Link className="btn btn-success" to="/signup" >Get a Free Quote</Link>
      </div>
    );
  }

  return (
    <div>
      <p>Suggested ...random some button onClick change localStorage + dispatch</p>
      <p>{searchingList?.length} Result for "{keyword}"</p>
      <div className='row m-auto w-100'>
        {handleRenderList()}
        {/* Render theo số lượng item/page bằng MUI */}
      </div>
    </div>
  )
}
