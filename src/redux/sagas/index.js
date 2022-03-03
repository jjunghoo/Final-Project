/** @format */

import { all, call, delay, fork, put, takeEvery } from "redux-saga/effects";
import { EMPLOYEE_ID_GET_REQUEST, EMPLOYEE_ID_GET_SUCCESS } from "../type";
import { postsSaga } from "./employeeSaga";

// export function* helloSaga() {
//   console.log("Hello Saga!");
// }

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([fork(postsSaga)]);
}
