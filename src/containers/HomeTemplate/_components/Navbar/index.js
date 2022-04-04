import './style.css';
import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { actFetchJobTypes } from './modules/actions';
import { useDispatch, useSelector } from 'react-redux';
import { actSearchJobs } from 'containers/HomeTemplate/HomePage/modules/actions';
import { actChangeSubJobs } from 'containers/HomeTemplate/SubJobsPage/modules/actions';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function NavbarHome() {
  const history = useHistory();
  const searchInput = useRef(null);
  const [isLogin, setIsLogin] = useState(localStorage.getItem("UserInfo") ? true : false);
  const jobs = useSelector(state => state.jobTypesReducer.jobTypes);
  const dispatch = useDispatch();

  const selectALl = items => { return document.querySelectorAll(items) };
  const select = dom => { return document.querySelector(dom) }

  useEffect(() => {
    dispatch(actFetchJobTypes());
  }, []);

  const handleRenderJobs = () => {
    return jobs?.map((job, index) => {
      if (index < 9) { //API(14) error
        return (
          <div key={index} className="dropdown">
            <Link className="nav-link" to={`/job-types/${job._id}`} data-toggle="dropdown">{job.name}</Link>
            <div className="dropdown-content" style={{ columnCount: "2", right: `${index >= 4 ? "0" : ""}`, left: `${index >= 4 ? "auto" : "0"}` }}>
              {handleRenderSubJobs(job)}
            </div>
          </div>
        )
      }
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
    const keyword = localStorage.getItem("job-keyword") ? JSON.parse(localStorage.getItem("job-keyword")) : searchInput.current.value;
    dispatch(actSearchJobs(keyword));
    history.push("/search");
  }

  const handleRenderLoginSpace = () => {
    if (localStorage.getItem("UserInfo") && JSON.parse(localStorage.getItem("UserInfo")).user.role === "ADMIN") {
      return (
        <>
          <a className="nav-link px-1" style={{ cursor: "pointer" }} onClick={() => {
            if (window.confirm("Logout?")) {
              localStorage.removeItem("UserInfo");
              setIsLogin(false);
            }
          }}>Logout</a>
          <li className="nav-item">
            <Link className="nav-link btn btn-primary text-white ml-1" to="/users-management">Dashboard</Link>
          </li>
        </>
      )
    } else if (localStorage.getItem("UserInfo") && JSON.parse(localStorage.getItem("UserInfo")).user.role === "CLIENT") {
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/user-page" >User Info</Link>
          </li>
          <a className="nav-link px-1" style={{ cursor: "pointer" }} onClick={() => {
            if (window.confirm("Logout?")) {
              localStorage.removeItem("UserInfo");
              setIsLogin(false);
            }
          }}>Logout</a>
        </>
      )
    } else {
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/login" >Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link btn btn-primary text-white px-3 ml-1" to="/signup" >Join</Link>
          </li>
        </>
      )
    }
  };

  const handleNavPosition = () => {
    if (document.documentElement.scrollTop > -100 && document.documentElement.scrollTop < 100) {
      select("#navbar-home")?.classList.add("navbar-transparent");
      selectALl(".nav-top .nav-link")?.forEach(nav => nav.classList.add("color-white"));
      select("#svgId")?.classList.add("svg-white");
    } else if (document.body.scrollTop || document.documentElement.scrollTop >= 100 && document.documentElement.scrollTop < 200) {
      select("#navbar-home")?.classList.remove("navbar-transparent");
      selectALl(".nav-top .nav-link")?.forEach(nav => nav.classList.remove("color-white"));
      select("#svgId")?.classList.remove("svg-white");
      selectALl(".navbar-home>hr").forEach(hr => hr.classList.add("d-none"));
      select(".navbar-search")?.classList.add("d-none");
      selectALl(".nav-bottom .nav-link")?.forEach(link => link.classList.add("disabled"));
      select(".nav-bottom")?.classList.add("nav-collapse");
      select(".nav-bottom")?.classList.remove("nav-show");
    } else if (document.body.scrollTop || document.documentElement.scrollTop >= 200) {
      select("#navbar-home")?.classList.remove("navbar-transparent");
      selectALl(".nav-top .nav-link")?.forEach(nav => nav.classList.remove("color-white"));
      select("#svgId")?.classList.remove("svg-white");
      selectALl(".navbar-home>hr").forEach(hr => hr.classList.remove("d-none"));
      select(".navbar-search")?.classList.remove("d-none");
      selectALl(".nav-bottom .nav-link")?.forEach(link => link.classList.remove("disabled"));
      select(".nav-bottom")?.classList.remove("nav-collapse");
      select(".nav-bottom")?.classList.add("nav-show");
    }
  }

  if (history.location.pathname == "/") {
    select("#navbar-home")?.classList.add("navbar-home", "navbar-transparent");
    selectALl(".nav-top .nav-link")?.forEach(nav => nav.classList.add("color-white"));
    select("#svgId")?.classList.add("svg-white");
    selectALl(".navbar-home>hr").forEach(hr => hr.classList.add("d-none"));
    select(".navbar-search")?.classList.add("d-none");
    selectALl(".nav-bottom .nav-link")?.forEach(link => link.classList.add("disabled"));
    select(".nav-bottom")?.classList.add("nav-collapse");
    handleNavPosition();
  }

  window.onscroll = () => {
    if (history.location.pathname == "/") {
      handleNavPosition();
    }
  }

  window.onbeforeunload = () => {
    document.documentElement.scrollTo({ top: 0 });
  };

  return (
    <div id='navbar-home'>
      <div className='container'>
        <nav className="navbar navbar-expand-lg nav-top">
          <div className='d-flex'>
            <Link className="navbar-brand" to="/">
              <svg width="89" height="27" viewBox="0 0 89 27" fill="none" xmlns="http://www.w3.org/2000/svg"  >
                <g className='svg-color' id='svgId'><path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path></g>
                <g fill="#1dbf73"><path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path></g>
              </svg>
            </Link>
            <form className="form-inline my-2 my-lg-0 navbar-search" onSubmit={(e) => {
              e.preventDefault();
              handleOnSubmit();
            }}>
              <input className="form-control mr-sm-2" style={{ minWidth: 400 }} type="search" placeholder={localStorage.getItem("job-keyword") ? JSON.parse(localStorage.getItem("job-keyword")) : "Find Services"} aria-label="Search" onChange={handleOnChange} ref={searchInput} />
              <button className="btn btn-outline-success" type='submit'>Search</button>
            </form>
          </div>
          <div className='d-flex'>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHome" aria-controls="navbarHome" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse mr-4" id="navbarHome">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link nav-active" to="/" >FiverPro</NavLink>
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
              {handleRenderLoginSpace()}
            </ul>
          </div>
        </nav>
      </div >
      <hr />
      <div className='container'>
        <nav className="navbar navbar-expand-lg m-0 p-0 nav-bottom">
          <div className="navbar-nav mr-auto w-100 justify-content-between">
            {handleRenderJobs()}
          </div>
        </nav>
      </div>
      <hr />
    </div>
  )
}


