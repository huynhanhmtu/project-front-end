import React from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import AdminModal from '../Modal';

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
      <button className='btn btn-primary w-100' onClick={() => { history.push("/dashboard") }}>DASHBOARD</button>
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" to="/">Homepage</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/user-page">User Info</NavLink>
        </li>
        <li className="nav-item">
          {/* Thay đổi chức năng thành modal */}
          <a className="nav-link" data-toggle="modal" data-target="#addModal">Add User</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{ cursor: "pointer" }} onClick={handleLogout}>Logout</a>
        </li>
      </ul>
      <AdminModal />
    </div>
  )
}