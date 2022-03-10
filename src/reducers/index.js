import { combineReducers } from "redux";
import jobTypesReducer from "containers/HomeTemplate/_components/Navbar/modules/reducer";
import searchingReducer from "containers/HomeTemplate/HomePage/modules/reducer";
import subJobsReducer from "containers/HomeTemplate/SubJobsPage/modules/reducer";

export const rootReducer = combineReducers({
  jobTypesReducer,
  searchingReducer,
  subJobsReducer
});