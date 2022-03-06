/** @format */

import axios from "axios";

import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import {
  TEACHER_INFO_GET_REQUEST,
  TEACHER_INFO_GET_SUCCESS,
  TEACHER_INFO_GET_FAILURE,
  TEACHER_COMMENT_GET_REQUEST,
  TEACHER_COMMENT_GET_SUCCESS,
  TEACHER_COMMENT_GET_FAILURE,
  TEACHER_LECTURE_GET_REQUEST,
  TEACHER_LECTURE_GET_SUCCESS,
  TEACHER_LECTURE_GET_FAILURE,
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

const axiosTeacherLectureGetSaga = (action) => {
  return axios.get(`/teacher/${action}`);
};

function* teacherLectureGetSaga(action) {
  //   console.log("saga진입");
  //    action.payload는 기업측 id 입력 필요
  try {
    console.log("try");
    const posts = yield call(axiosTeacherLectureGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield console.log(posts.data);
    console.log("Comment");
    // yield console.log(action.payload);
    yield put({
      type: TEACHER_LECTURE_GET_SUCCESS,
      payload: { lectureInfo: posts.data.lectureInfo },
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
    yield put({
      type: TEACHER_LECTURE_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchTeacherLectureGet() {
  yield takeEvery(TEACHER_LECTURE_GET_REQUEST, teacherLectureGetSaga);
}

// COMMENT만 받아오기 //

const axiosTeacherCommentGetSaga = (action) => {
  return axios.get(`/teacher/${action}`);
};

function* teacherCommentGetSaga(action) {
  //   console.log("saga진입");
  //    action.payload는 기업측 id 입력 필요
  try {
    console.log("try");
    const posts = yield call(axiosTeacherCommentGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield console.log(posts.data);
    console.log("Comment");
    // yield console.log(action.payload);
    yield put({
      type: TEACHER_COMMENT_GET_SUCCESS,
      payload: { commentInfo: posts.data.commentInfo },
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
    yield put({
      type: TEACHER_COMMENT_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchTeacherCommentGet() {
  yield takeEvery(TEACHER_COMMENT_GET_REQUEST, teacherCommentGetSaga);
}

//teacher all info get 모든 정보 받아오기
const axiosTeacherInfoGetSaga = (action) => {
  return axios.get(`/teacher/${action}`);
};

function* teacherInfoGetSaga(action) {
  //   console.log("saga진입");
  //    action.payload는 기업측 id 입력 필요
  try {
    console.log("try");
    const posts = yield call(axiosTeacherInfoGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield console.log(posts.data);
    console.log("teacher all Info");
    // yield console.log(action.payload);
    yield put({
      type: TEACHER_INFO_GET_SUCCESS,
      payload: posts.data,
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
    yield put({
      type: TEACHER_INFO_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchTeacherInfoGet() {
  yield takeEvery(TEACHER_INFO_GET_REQUEST, teacherInfoGetSaga);
}

// END //

export function* teacherSaga() {
  yield all([
    fork(watchTeacherLectureGet),
    fork(watchTeacherCommentGet),
    fork(watchTeacherInfoGet),
  ]);
}
