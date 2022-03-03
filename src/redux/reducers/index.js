/** @format */
import { delay, put, takeEvery, takeLatest, all } from "redux-saga/effects";

import { combineReducers } from "redux";
import employerReducer from "./employerReducer";
import employeeReducer from "./employeeReducer";
import teacherReducer from "./teacherReducer";
import matchingReducer from "./matchingReducer";
import projectReducer from "./projectReducer";
import counter, { counterSaga } from "../sagas/counter";

const rootReducer = combineReducers({
  employerReducer,
  projectReducer,
  teacherReducer,
  employeeReducer,
  matchingReducer,
  counter,
});

export default rootReducer;
