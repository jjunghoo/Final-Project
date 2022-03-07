/** @format */

import { all, call, delay, fork, put, takeEvery } from "redux-saga/effects";
import { employeeSaga } from "./employeeSaga";
import { employerSaga } from "./employerSaga";
import { teacherSaga } from "./teacherSaga";
import { projectSaga } from "./projectSaga";

// export function* helloSaga() {
//   console.log("Hello Saga!");
// }

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    fork(employeeSaga),
    fork(employerSaga),
    fork(teacherSaga),
    fork(projectSaga),
  ]);
}
