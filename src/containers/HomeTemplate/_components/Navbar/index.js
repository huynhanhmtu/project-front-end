import './style.css';
import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { actFetchJobTypes } from './modules/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function NavbarHome() {
  const jobs = useSelector(state => state.jobTypesReducer.jobTypes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchJobTypes());
  }, []);

  const handleRenderJobs = () => {
    return jobs?.map((job, index) => {
      return (
        <li key={index} className="nav-item dropdown" >
          <Link className="nav-link dropdown" to="/" data-toggle="dropdown">{job.name}</Link>
          <div className="dropdown-menu" style={{ columnCount: "2", right: `${index >= 4 ? "0" : ""}`, left: `${index >= 4 ? "auto" : "0"}` }}>
            {handleRenderSubJobs(job)}
          </div>
        </li>
      )
    })
  };

  const handleRenderSubJobs = (job) => {
    const subJobs = job.subTypeJobs;
    return subJobs.map(sub => {
      return <Link key={sub._id} className="dropdown-item" to="/" >{sub.name}</Link>
    })
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
        <div className='d-flex'>
          <Link className="navbar-brand" to="/">Logo<span className="sr-only">(Home Page)</span></Link>
          <form className="form-inline my-2 my-lg-0" onSubmit={(e) => { e.preventDefault() }}>
            <input className="form-control mr-sm-2" type="search" placeholder="Find Services" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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
              <Link className="nav-link" to="/signup" >Join</Link>
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