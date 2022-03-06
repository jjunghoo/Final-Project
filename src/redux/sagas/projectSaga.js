/** @format */

import axios from "axios";

import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import {
  PROJECT_INFO_GET_FAILURE,
  PROJECT_INFO_GET_REQUEST,
  PROJECT_INFO_GET_SUCCESS,
  PROJECT_STAGE_GET_FAILURE,
  PROJECT_STAGE_GET_REQUEST,
  PROJECT_STAGE_GET_SUCCESS,
  PROJECT_STUDENT_GET_FAILURE,
  PROJECT_STUDENT_GET_REQUEST,
  PROJECT_STUDENT_GET_SUCCESS,
} from "../type";
/** @format */

//
//
//
//
//
//
//
//
//////LECTURE만 받아오기

const axiosProjectStudentGetSaga = (action) => {
  return axios.get(`/project/${action}`);
};

function* projectStudentGetSaga(action) {
  //   console.log("saga진입");
  //    action.payload는 기업측 id 입력 필요
  try {
    console.log("try");
    const posts = yield call(axiosProjectStudentGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield console.log(posts.data);
    console.log("Comment");
    // yield console.log(action.payload);
    yield put({
      type: PROJECT_STUDENT_GET_SUCCESS,
      payload: { studentInfo: posts.data.studentInfo },
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
    yield put({
      type: PROJECT_STUDENT_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchProjectStudentGet() {
  yield takeEvery(PROJECT_STUDENT_GET_REQUEST, projectStudentGetSaga);
}

// COMMENT만 받아오기 //

const axiosProjectStageGetSaga = (action) => {
  return axios.get(`/project/${action}`);
};

function* ProjectStageGetSaga(action) {
  //   console.log("saga진입");
  //    action.payload는 기업측 id 입력 필요
  try {
    console.log("try");
    const posts = yield call(axiosProjectStageGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield console.log(posts.data);
    console.log("Comment");
    // yield console.log(action.payload);
    yield put({
      type: PROJECT_STAGE_GET_SUCCESS,
      payload: { stageInfo: posts.data.stageInfo },
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
    yield put({
      type: PROJECT_STAGE_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchProjectStageGet() {
  yield takeEvery(PROJECT_STAGE_GET_REQUEST, ProjectStageGetSaga);
}

//project all info get 모든 정보 받아오기
const axiosProjectInfoGetSaga = (action) => {
  return axios.get(`/project/${action}`);
};

function* projectInfoGetSaga(action) {
  //   console.log("saga진입");
  //    action.payload는 기업측 id 입력 필요
  try {
    console.log("try");
    const posts = yield call(axiosProjectInfoGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield console.log(posts.data);
    console.log("teacher all Info");
    // yield console.log(action.payload);
    yield put({
      type: PROJECT_INFO_GET_SUCCESS,
      payload: posts.data,
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
    yield put({
      type: PROJECT_INFO_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchProjectInfoGet() {
  yield takeEvery(PROJECT_INFO_GET_REQUEST, projectInfoGetSaga);
}

// END //

export function* projectSaga() {
  yield all([
    fork(watchProjectStudentGet),
    fork(watchProjectStageGet),
    fork(watchProjectInfoGet),
  ]);
}
