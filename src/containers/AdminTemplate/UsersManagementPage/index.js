import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AdminModal from '../_components/Modal'
import { actDeleteUser, actFetchUsersData } from './modules/actions';

export default function UsersManagementPage() {
  const dispatch = useDispatch();
  const [method, setMethod] = useState("ADD");
  const [searchType, setSearchType] = useState("name");

  const usersData = useSelector(state => state.usersManagementReducer.data);

  useEffect(() => {
    dispatch(actFetchUsersData());
  }, []);

  const handleDeleteUser = id => {
    // dispatch(actDeleteUser(id));
  }

  const handleRenderTable = () => {
    return usersData?.map((user, index) => {
      return (
        <tr key={user._id}>
          <th scope="row">{index + 1}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>
            <button className='btn btn-info mx-1' data-toggle="modal" data-target="#addModal" onClick={() => { setMethod("EDIT") }}>Edit</button>
            <button className='btn btn-danger mx-1' onClick={handleDeleteUser(user._id)}>×</button>
          </td>
        </tr>
      )
    })
  }

  return (
    <div>
      <h5 className='text-center mb-3'>USERS MANAGEMENT</h5>
      <p>In progress...</p>
      <div className='d-flex justify-content-between mx-5'>
        <form className="form-inline my-2 my-lg-0">
          <div className="form-group">
            <select className="form-control" onChange={(e) => { setSearchType(e.target.value) }}>
              <option value="name">By Name</option>
              <option value="email">By Email</option>
              <option value="role">By Role</option>
            </select>
          </div>
          <input className="form-control m-0" type="search" placeholder="Find User" aria-label="Search" />
          <button className="btn btn-outline-success m-0" type="submit">Search</button>
        </form>
        <button className="btn btn-primary" data-toggle="modal" data-target="#addModal">Add User</button>
      </div>
      <AdminModal method={method} />

      <table className="table table-striped mt-5 text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Manage</th>
          </tr>
        </thead>
        <tbody>
          {handleRenderTable()}
        </tbody>
      </table>
    </div>
  )
}
