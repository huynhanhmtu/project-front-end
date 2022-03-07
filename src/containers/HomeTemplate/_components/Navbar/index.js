import './style.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavbarHome() {
  // const handleLogout = () => {
  //   if (window.confirm("Logout?")) {
  //     localStorage.removeItem("UserInfo");
  //   }
  // }

  const handleRenderLink = () => {
    // if (localStorage.getItem("UserInfo")) {
    //   return (
    //     <>
    //       <Link className="nav-link px-1" to="/dashboard">Dashboard</Link>
    //       <a className="nav-link px-1" style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</a>
    //     </>
    //   )
    // }
    return (
      <>
        <Link className="nav-link px-1" to="/login">Login</Link>
        <Link className="nav-link px-1" to="/signup">Signup</Link>
      </>
    )
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <div className='d-flex'>
        <Link className="navbar-brand" to="/">Logo</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent01" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact activeClassName="active" className="nav-link" to="/">HomePage</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" className="nav-link" to="/search">SearchPage</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className='d-flex'>
        {handleRenderLink()}
      </div>
    </nav>
  )
}