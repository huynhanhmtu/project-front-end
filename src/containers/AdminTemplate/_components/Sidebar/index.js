import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function AdminSidebar() {
  const history = useHistory();
  const handleLogout = () => {
    if (window.confirm("Logout?")) {
      localStorage.removeItem("UserInfo");
      history.replace("./");
    }
  }

  return (
    <div>
      <h5 className='text-center'>Dashboard</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/">Homepage</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user-page">Admin Info</Link>
        </li>
        <div className='my-4'>
          <li className="nav-item">
            <NavLink activeClassName='sidebar-active' className="nav-link" to="/users-management">Users Management</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName='sidebar-active' className="nav-link" to="/services-management">Services Management</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName='sidebar-active' className="nav-link" to="/catalog-management">Catalog Management</NavLink>
          </li>
        </div>
        <button className="btn btn-light" onClick={handleLogout}>Logout</button>
      </ul>
    </div>
  )
}