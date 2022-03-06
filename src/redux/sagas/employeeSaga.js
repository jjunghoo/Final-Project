/** @format */

import axios from "axios";

import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import {
  EMPLOYEE_ID_GET_FAILURE,
  EMPLOYEE_ID_GET_REQUEST,
  EMPLOYEE_ID_GET_SUCCESS,
  EMPLOYEE_INFO_FAILURE,
  EMPLOYEE_INFO_GET,
  EMPLOYEE_INFO_SUCCESS,
  EMPLOYEE_RESUME_FAILURE,
  EMPLOYEE_RESUME_GET,
  EMPLOYEE_RESUME_SUCCESS,
} from "../type";
/** @format */

const connecting = () => {
  return axios.get("/employee");
};

function* employeeIDGetSaga(action) {
  console.log("saga진입");
  try {
    console.log("try");
    const posts = yield call(connecting); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield console.log(posts);
    yield console.log(action.payload);
    yield put({
      type: EMPLOYEE_ID_GET_SUCCESS,
      payload: posts,
    }); // 성공 액션 디스패치
  } catch (e) {
    console.log(e);
    yield put({
      type: EMPLOYEE_ID_GET_FAILURE,
      error: true,
      payload: e,
    }); // 실패 액션 디스패치
  }
}

function* watchEmployeeIDGet() {
  yield takeEvery(EMPLOYEE_ID_GET_REQUEST, employeeIDGetSaga);
}
//
//
//
//
//
//
//
//
const axiosEmployeeInfoGet = (action) => {
  return axios.get(`/employee/${action}`);
};

function* employeeInfoGetSaga(action) {
  console.log("saga진입");
  try {
    // console.log("try");
    const posts = yield call(axiosEmployeeInfoGet, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    // yield console.log(posts);
    // yield console.log(action.payload);
    yield put({
      type: EMPLOYEE_INFO_SUCCESS,
      payload: posts.data,
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
    yield put({
      type: EMPLOYEE_INFO_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchEmployeeInfoGet() {
  yield takeEvery(EMPLOYEE_INFO_GET, employeeInfoGetSaga);
}

const axiosEmployeeResumeGet = (action) => {
  return axios.get(`/employee/${action}`);
};

function* employeeResumeGetSaga(action) {
  //   console.log("saga진입");
  try {
    console.log("try");
    const posts = yield call(axiosEmployeeResumeGet, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield console.log(posts.data.resume);
    // yield console.log(action.payload);
    yield put({
      type: EMPLOYEE_RESUME_SUCCESS,
      payload: { resume: posts.data.resume },
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
    yield put({
      type: EMPLOYEE_RESUME_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchEmployeeResumeGet() {
  yield takeEvery(EMPLOYEE_RESUME_GET, employeeResumeGetSaga);
}

export function* employeeSaga() {
  yield all([
    fork(watchEmployeeInfoGet),
    fork(watchEmployeeIDGet),
    fork(watchEmployeeResumeGet),
  ]);
}
