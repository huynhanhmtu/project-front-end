import './style.css';
import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { actFetchJobTypes } from './modules/actions';
import { useDispatch, useSelector } from 'react-redux';
import { actSearchJobs } from 'containers/HomeTemplate/HomePage/modules/actions';
import { actChangeSubJobs } from 'containers/HomeTemplate/SubJobsPage/modules/actions';

export default function NavbarHome() {
  const btnSearch = useRef(null);
  const jobs = useSelector(state => state.jobTypesReducer.jobTypes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchJobTypes());
  }, []);

  const handleRenderJobs = () => {
    return jobs?.map((job, index) => {
      return (
        <li key={index} className="nav-item dropdown">
          <Link className="nav-link dropdown" to={`/job-types/${job._id}`} data-toggle="dropdown">{job.name}</Link>
          <div className="dropdown-menu" style={{ columnCount: "2", right: `${index >= 4 ? "0" : ""}`, left: `${index >= 4 ? "auto" : "0"}` }}>
            {handleRenderSubJobs(job)}
          </div>
        </li>
      )
    })
  };

  const handleRenderSubJobs = job => {
    const subJobs = job.subTypeJobs;
    return subJobs.map(sub => {
      return <Link key={sub._id} className="dropdown-item" to={`/sub-jobs/${sub._id}`} onClick={() => {
        dispatch(actChangeSubJobs(sub._id))
      }}>{sub.name}</Link>
    })
  }

  const handleOnChange = (e) => {
    localStorage.setItem("job-keyword", JSON.stringify(e.target.value.trim()));
  }

  const handleOnSubmit = () => {
    const keyword = localStorage.getItem("job-keyword") ? JSON.parse(localStorage.getItem("job-keyword")) : "";
    dispatch(actSearchJobs(keyword));
    btnSearch.current.click();
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
        <div className='d-flex'>
          <Link className="navbar-brand" to="/">
            <svg width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#404145"><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path></g><g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g></svg>
            <span className="sr-only">(Home Page)</span>
          </Link>
          <form className="form-inline my-2 my-lg-0" onSubmit={(e) => {
            e.preventDefault();
            handleOnSubmit();
          }}>
            <input className="form-control mr-sm-2" type="search" placeholder="Find Services" aria-label="Search" onChange={handleOnChange} />
            <Link className="btn btn-success my-2 my-sm-0" to="/search" ref={btnSearch} onClick={handleOnSubmit}>Search</Link>
          </form>
        </div>
        <div className='d-flex'>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHome" aria-controls="navbarHome" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarHome">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/" >FiverPro</NavLink>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" >Explore</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" >English</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" >US$ USD</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" >Become a Seller</Link>
              </li>
            </ul>
          </div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/login" >Sign in</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-success" to="/signup" >Join</Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr />
      <nav className="navbar navbar-expand-lg navbar-light ">
        <ul className="navbar-nav mr-auto w-100 justify-content-between">
          {handleRenderJobs()}
        </ul>
      </nav>
    </div >
  )
}