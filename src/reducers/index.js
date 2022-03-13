import { combineReducers } from "redux";
import jobTypesReducer from "containers/HomeTemplate/_components/Navbar/modules/reducer";
import searchingReducer from "containers/HomeTemplate/HomePage/modules/reducer";
import subJobsReducer from "containers/HomeTemplate/SubJobsPage/modules/reducer";
import jobDetailReducer from "containers/HomeTemplate/JobDetailsPage/modules/reducer";
import userLoginReducer from "containers/AdminTemplate/LoginPage/modules/reducer";

export const rootReducer = combineReducers({
  jobTypesReducer,
  searchingReducer,
  subJobsReducer,
  jobDetailReducer,
  userLoginReducer
});