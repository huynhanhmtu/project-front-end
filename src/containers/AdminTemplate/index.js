import React from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './_components/Sidebar';

export default function AdminTemplate(props) {
  const { exact, path, component } = props;

  return (
    <>
      <Sidebar />
      <Route exact={exact} path={path} component={component} />
    </>
  )
}