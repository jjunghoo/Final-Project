/** @format */

import { combineReducers } from "redux";
import employerReducer from "./employerReducer";
import employeeReducer from "./employeeReducer";
import teacherReducer from "./teacherReducer";
import matchingReducer from "./matchingReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  employerReducer,
  projectReducer,
  teacherReducer,
  employeeReducer,
  matchingReducer,
});

export default rootReducer;
