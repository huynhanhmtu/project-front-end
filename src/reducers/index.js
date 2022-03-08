import { combineReducers } from "redux";
import jobTypesReducer from "containers/HomeTemplate/_components/Navbar/modules/reducer";
import searchingReducer from "containers/HomeTemplate/HomePage/modules/reducer";

export const rootReducer = combineReducers({
  jobTypesReducer,
  searchingReducer,
});