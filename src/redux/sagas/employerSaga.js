/** @format */

import axios from "axios";

import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import {
  EMPLOYER_INFO_GET_FAILURE,
  EMPLOYER_INFO_GET_REQUEST,
  EMPLOYER_INFO_GET_SUCCESS,
  EMPLOYER_LIKED_GET_FAILURE,
  EMPLOYER_LIKED_GET_SUCCESS,
  EMPLOYER_LIKED_GET_REQUEST,
  EMPLOYER_BOOKMARK_GET_REQUEST,
  EMPLOYER_BOOKMARK_GET_SUCCESS,
  EMPLOYER_BOOKMARK_GET_FAILURE,
  EMPLOYER_SUPERMATCHING_GET_SUCCESS,
  EMPLOYER_SUPERMATCHING_GET_FAILURE,
  EMPLOYER_SUPERMATCHING_GET_REQUEST,
  EMPLOYER_BOOKMARK_EDIT_REQUEST,
  EMPLOYER_BOOKMARK_EDIT_FAILURE,
  EMPLOYER_BOOKMARK_EDIT_SUCCESS,
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

const axiosEmployerInfoGetSaga = (action) => {
  return axios.get(`/employer/${action}`);
};

function* employerInfoGetSaga(action) {
  //   console.log("saga진입");
  //    action.payload는 기업측 id 입력 필요
  try {
    // console.log("try");
    const posts = yield call(axiosEmployerInfoGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    // yield console.log(posts.data);
    // yield console.log(action.payload);
    yield put({
      type: EMPLOYER_INFO_GET_SUCCESS,
      payload: posts.data,
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
    yield put({
      type: EMPLOYER_INFO_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchEmployerInfoGet() {
  yield takeEvery(EMPLOYER_INFO_GET_REQUEST, employerInfoGetSaga);
}

// LIKED GET //

const axiosEmployerLikedGetSaga = (action) => {
  return axios.get(`/employer/${action}`);
};

function* employerLikedGetSaga(action) {
  //   console.log("saga진입");
  //    action.payload는 기업측 id 입력 필요
  try {
    // console.log("try");
    const posts = yield call(axiosEmployerLikedGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield console.log(posts.data.likedInfo);
    // yield console.log(action.payload);
    yield put({
      type: EMPLOYER_LIKED_GET_SUCCESS,
      payload: { likedInfo: posts.data.likedInfo },
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
    yield put({
      type: EMPLOYER_LIKED_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchEmployerLikedGet() {
  yield takeEvery(EMPLOYER_LIKED_GET_REQUEST, employerLikedGetSaga);
}

// BOOKMARK GET //

const axiosEmployerBookmarkGetSaga = (action) => {
  return axios.get(`/employer/${action}`);
};

function* employerBookmarkGetSaga(action) {
  //   console.log("saga진입");
  //    action.payload는 기업측 id 입력 필요
  try {
    // console.log("try");
    const posts = yield call(axiosEmployerBookmarkGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield console.log(posts.data);
    console.log("bookmarkget");
    // yield console.log(action.payload);
    yield put({
      type: EMPLOYER_BOOKMARK_GET_SUCCESS,
      payload: { bookmarkInfo: posts.data.bookmarkInfo },
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
    yield put({
      type: EMPLOYER_BOOKMARK_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchEmployerBookmarkGet() {
  yield takeEvery(EMPLOYER_BOOKMARK_GET_REQUEST, employerBookmarkGetSaga);
}

///BOOKMARK EDIT////

const axiosEmployerBookmarkEditSaga = (action) => {
  console.log(action);
  // return 0;
  return axios.put(`/employer/${action.id}`, action);
};
function* employerBookmarkEditSaga(action) {
  //   console.log("saga진입");
  //    action.payload는 기업측 id 입력 필요
  try {
    console.log(action.payload);
    let posts = yield call(axiosEmployerBookmarkGetSaga, action.payload.id); //특정부분 ID 확인용
    yield console.log(posts.data.bookmarkInfo);
    let index = yield posts.data.bookmarkInfo.indexOf(action.payload.userID);
    if (index > -1) {
      posts.data.bookmarkInfo.splice(index, 1);
    } else {
      posts.data.bookmarkInfo.push(action.payload.userID);
    }
    console.log(posts.data.bookmarkInfo);
    console.log(posts.data);

    posts = yield call(axiosEmployerBookmarkEditSaga, posts.data);
    // console.log("bookmarkget");
    yield console.log(posts.data);
    yield put({
      type: EMPLOYER_BOOKMARK_EDIT_SUCCESS,
      payload: { bookmarkInfo: posts.data.bookmarkInfo },
    }); // 성공 액션 디스패치
  } catch (e) {
    console.log(e);
    yield put({
      type: EMPLOYER_BOOKMARK_EDIT_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchEmployerBookmarkEdit() {
  yield takeEvery(EMPLOYER_BOOKMARK_EDIT_REQUEST, employerBookmarkEditSaga);
}

const axiosEmployerSupermachingGetSaga = (action) => {
  return axios.get(`/employer/${action}`);
};

function* employerSupermatchingGetSaga(action) {
  //   console.log("saga진입");
  //    action.payload는 기업측 id 입력 필요
  try {
    console.log("try");
    const posts = yield call(axiosEmployerSupermachingGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    // 위에서 서버 값을 받아옴
    yield console.log(posts.data);
    console.log("bookmarkget");
    // yield console.log(action.payload);
    yield put({
      type: EMPLOYER_SUPERMATCHING_GET_SUCCESS,
      payload: { superMachingInfo: posts.data.superMachingInfo },
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
    yield put({
      type: EMPLOYER_SUPERMATCHING_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchEmployerSupermachingGet() {
  yield takeEvery(
    EMPLOYER_SUPERMATCHING_GET_REQUEST,
    employerSupermatchingGetSaga
  );
}

// END //

export function* employerSaga() {
  yield all([
    fork(watchEmployerInfoGet),
    fork(watchEmployerLikedGet),
    fork(watchEmployerBookmarkGet),
    fork(watchEmployerBookmarkEdit),
    fork(watchEmployerSupermachingGet),
  ]);
}
