import { lazy } from "react"; //Lazy loading để sau khi hoàn thành đầy đủ các chức năng
import { Route } from "react-router-dom";
import AdminTemplate from "containers/AdminTemplate";
import DashboardPage from "containers/AdminTemplate/DashboardPage";
import LoginPage from "containers/AdminTemplate/LoginPage";
import SignupPage from "containers/AdminTemplate/SignupPage";
import HomeTemplate from "containers/HomeTemplate";
import HomePage from "containers/HomeTemplate/HomePage";
import InfoPage from "containers/HomeTemplate/InfoPage";
import JobDetailPage from "containers/HomeTemplate/JobDetailsPage";
import JobTypesPage from "containers/HomeTemplate/JobTypesPage";
import SearchingPage from "containers/HomeTemplate/SearchingPage";
import SubJobsPage from "containers/HomeTemplate/SubJobsPage";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage
    // component: lazy(() => { import("containers/HomeTemplate/HomePage") })
  },
  {
    exact: true,
    path: "/search",
    component: SearchingPage
    // component: lazy(() => { import("containers/HomeTemplate/SearchingPage") })
  },
  {
    exact: true,
    path: "/job-types/:typeId",
    component: JobTypesPage
    // component: lazy(() => { import("containers/HomeTemplate/JobTypesPage") })
  },
  {
    exact: true,
    path: "/sub-jobs/:subId",
    component: SubJobsPage
    // component: lazy(() => { import("containers/HomeTemplate/SubJobsPage") })
  },
  {
    exact: true,
    path: "/job-detail/:jobId",
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