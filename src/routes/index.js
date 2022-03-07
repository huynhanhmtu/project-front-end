import AdminTemplate from "containers/AdminTemplate";
import DashboardPage from "containers/AdminTemplate/DashboardPage";
import LoginPage from "containers/AdminTemplate/LoginPage";
import SignupPage from "containers/AdminTemplate/SignupPage";
import HomeTemplate from "containers/HomeTemplate";
import HomePage from "containers/HomeTemplate/HomePage";
import InfoPage from "containers/HomeTemplate/InfoPage";
import JobDetailPage from "containers/HomeTemplate/JobDetailsPage";
import SearchPage from "containers/HomeTemplate/SearchPage";
import { lazy } from "react";
import { Route } from "react-router-dom";

const routesHome = [
  {
    exact: true,
    path: "/",
    conponent: HomePage
    // component: lazy(() => { import("containers/HomeTemplate/HomePage") })
  },
  {
    exact: true,
    path: "/search",
    component: SearchPage
    // component: lazy(() => { import("containers/HomeTemplate/SearchPage") })
  },
  {
    exact: true,
    path: "/job-detail/:id",
    component: JobDetailPage
    // component: lazy(() => { import("containers/HomeTemplate/JobDetailsPage") })
  },
  {
    exact: true,
    path: "/info/:id",
    component: InfoPage
    // component: lazy(() => { import("containers/HomeTemplate/InfoPage") })
  },
];

const routesUser = [
  {
    exact: true,
    path: "/login",
    component: LoginPage
    // component: lazy(() => { import("containers/AdminTemplate/LoginPage") })
  },
  {
    exact: true,
    path: "/signup",
    component: SignupPage
    // component: lazy(() => { import("containers/AdminTemplate/SignupPage") })
  }
];

const routesAdmin = [
  {
    exact: true,
    path: "/dashboard",
    component: DashboardPage
    // component: lazy(() => { import("containers/AdminTemplate/DashboardPage") })
  }
];

const renderRoutesHome = () => {
  routesHome.map((route, index) => (<HomeTemplate
    key={index}
    exact={route.exact}
    path={route.path}
    component={route.component}
  />))
};
const renderRoutesUser = () => {
  routesHome.map((route, index) => (<Route
    key={index}
    exact={route.exact}
    path={route.path}
    component={route.component}
  />))
};
const renderRoutesAdmin = () => {
  routesHome.map((route, index) => (<AdminTemplate
    key={index}
    exact={route.exact}
    path={route.path}
    component={route.component}
  />))
};

export { renderRoutesHome, renderRoutesUser, renderRoutesAdmin }