import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import AdminSidebar from './_components/Sidebar';

export default function AdminTemplate(props) {
  const { exact, path, component } = props;

  if (!localStorage.getItem("UserInfo") || JSON.parse(localStorage.getItem("UserInfo")).user.role != "ADMIN") {
    return <Redirect to="/"></Redirect>
  };
  return (
    <div className='row m-0 pt-3'>
      <div className='col-3'>
        <AdminSidebar />
      </div>
      <div className='col-9'>
        <Route exact={exact} path={path} component={component} />
      </div>
      <ScrollToTop smooth style={{ width: 50, height: 50, backgroundColor:"#ffffffcc" }} />
    </div>
  )
}