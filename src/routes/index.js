import { lazy } from "react";
import { Route } from "react-router-dom";
import AdminTemplate from "../containers/AdminTemplate";
import DashboardPage from "../containers/AdminTemplate/DashboardPage";
import LoginPage from "../containers/AdminTemplate/LoginPage";
import SignupPage from "../containers/AdminTemplate/SignupPage";
import HomeTemplate from "../containers/HomeTemplate";
import HomePage from "../containers/HomeTemplate/HomePage";
import InfoPage from "../containers/HomeTemplate/InfoPage";
import JobDetailPage from "../containers/HomeTemplate/JobDetailsPage";
import SearchPage from "../containers/HomeTemplate/SearchPage";

const routesHome = [
  {
    exact: true,
    path: "/",
    conponent: HomePage
    // component: lazy(() => { import("../containers/HomeTemplate/HomePage") })
  },
  {
    exact: false,
    path: "/search",
    component: SearchPage
    // component: lazy(() => { import("../containers/HomeTemplate/SearchPage") })
  },
  {
    exact: false,
    path: "/job-detail/:id",
    component: JobDetailPage
    // component: lazy(() => { import("../containers/HomeTemplate/JobDetailsPage") })
  },
  {
    exact: false,
    path: "/info/:id",
    component: InfoPage
    // component: lazy(() => { import("../containers/HomeTemplate/InfoPage") })
  },
];

const routesUser = [
  {
    exact: false,
    path: "/login",
    component: LoginPage
    // component: lazy(() => { import("../containers/AdminTemplate/LoginPage") })
  },
  {
    exact: false,
    path: "/signup",
    component: SignupPage
    // component: lazy(() => { import("../containers/AdminTemplate/SignupPage") })
  }
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: DashboardPage
    // component: lazy(() => { import("../containers/AdminTemplate/DashboardPage") })
  }
];

const renderRoutesHome = () => {
  return routesHome.map((route, index) => {
    return <HomeTemplate
      key={index}
      exact={route.exact}
      path={route.path}
      component={route.component}
    />
  })
};
const renderRoutesUser = () => {
  return routesUser.map((route, index) => {
    return <Route
      key={index}
      exact={route.exact}
      path={route.path}
      component={route.component}
    />
  })
};
const renderRoutesAdmin = () => {
  return routesAdmin.map((route, index) => {
    return <AdminTemplate
      key={index}
      exact={route.exact}
      path={route.path}
      component={route.component}
    />
  })
};

export { renderRoutesHome, renderRoutesUser, renderRoutesAdmin }