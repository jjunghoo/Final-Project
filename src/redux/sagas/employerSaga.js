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
  EMPLOYER_SUPERMATCHING_EDIT_REQUEST,
  EMPLOYER_SUPERMATCHING_EDIT_SUCCESS,
  EMPLOYER_SUPERMATCHING_EDIT_FAILURE,
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
  try {
    const posts = yield call(axiosEmployerInfoGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield put({
      type: EMPLOYER_INFO_GET_SUCCESS,
      payload: posts.data,
    }); // 성공 액션 디스패치
  } catch (e) {
    console.log(e);
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
  try {
    const posts = yield call(axiosEmployerLikedGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield put({
      type: EMPLOYER_LIKED_GET_SUCCESS,
      payload: { likedInfo: posts.data.likedInfo },
    }); // 성공 액션 디스패치
  } catch (e) {
    console.log(e);
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
  try {
    const posts = yield call(axiosEmployerBookmarkGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield put({
      type: EMPLOYER_BOOKMARK_GET_SUCCESS,
      payload: { bookmarkInfo: posts.data.bookmarkInfo },
    }); // 성공 액션 디스패치
  } catch (e) {
    console.log(e);
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

const axiosEmployeeInfoGet = (action) => {
  return axios.get(`/employee/${action}`);
};

const axiosEmployerBookmarkEditSaga = (action) => {
  return axios.put(`/employer/${action.id}`, action);
};
function* employerBookmarkEditSaga(action) {
  try {
    let posts = yield call(axiosEmployerBookmarkGetSaga, action.payload.id); //특정부분 ID 확인용
    let employeeData = yield call(axiosEmployeeInfoGet, action.payload.userID);
    let index;
    try {
      posts.data.bookmarkInfo.forEach((data, i) => {
        index = -1;
        if (data["id"] === action.payload.userID) {
          index = i;
          throw new Error("stop loop");
        }
      });
    } catch (error) {}

    if (index > -1) {
      posts.data.bookmarkInfo.splice(index, 1);
    } else {
      posts.data.bookmarkInfo.push(employeeData.data);
    }

    posts = yield call(axiosEmployerBookmarkEditSaga, posts.data);

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

//// SUPERMATCHING EDIT

const axiosEmployerSupermatchingEditSaga = (action) => {
  return axios.put(`/employer/${action.id}`, action);
};

function* employerSupermatchingEditSaga(action) {
  try {
    let posts = yield call(
      axiosEmployerSupermatchingGetSaga,
      action.payload.id
    );
    let employeeData = yield call(axiosEmployeeInfoGet, action.payload.userID);
    let index;
    try {
      posts.data.superMachingInfo.forEach((data, i) => {
        index = -1;
        if (data["id"] === action.payload.userID) {
          index = i;
          throw new Error("stop loop");
        }
      });
    } catch (error) {}

    if (index > -1) {
      posts.data.superMachingInfo.splice(index, 1);
    } else {
      posts.data.superMachingInfo.push(employeeData.data);
    }

    posts = yield call(axiosEmployerSupermatchingEditSaga, posts.data);
    yield put({
      type: EMPLOYER_SUPERMATCHING_EDIT_SUCCESS,
      payload: { superMachingInfo: posts.data.superMachingInfo },
    }); // 성공 액션 디스패치
  } catch (e) {
    console.log(e);
    yield put({
      type: EMPLOYER_SUPERMATCHING_EDIT_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchEmployerSupermatchingEdit() {
  yield takeEvery(
    EMPLOYER_SUPERMATCHING_EDIT_REQUEST,
    employerSupermatchingEditSaga
  );
}

/// SUPERMATCHING EDIT DONE

const axiosEmployerSupermatchingGetSaga = (action) => {
  return axios.get(`/employer/${action}`);
};

function* employerSupermatchingGetSaga(action) {
  try {
    console.log("try");
    const posts = yield call(axiosEmployerSupermatchingGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    // 위에서 서버 값을 받아옴
    yield put({
      type: EMPLOYER_SUPERMATCHING_GET_SUCCESS,
      payload: { superMachingInfo: posts.data.superMachingInfo },
    }); // 성공 액션 디스패치
  } catch (e) {
    console.log(e);
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
    fork(watchEmployerSupermatchingEdit),
  ]);
}
