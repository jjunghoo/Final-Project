/** @format */

import axios from "axios";

import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import {
  MANAGER_LECTURE_INFO_GET_REQUEST,
  MANAGER_LECTURE_INFO_GET_SUCCESS,
  MANAGER_LECTURE_INFO_GET_FAILURE,
} from "../type";
/** @format */

const axiosManagerLectureInfoGet = (action) => {
  console.log(action);
  return axios.get(`/project`);
};

function* managerLectureInfoGet(action) {
  console.log("saga진입");
  try {
    console.log("try");
    const posts = yield call(axiosManagerLectureInfoGet, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield console.log("aaaaaaaaaaaaaaaaaaaaa", posts.data);
    yield console.log(action.payload);
    yield put({
      type: MANAGER_LECTURE_INFO_GET_SUCCESS,
      payload: { lectureListInfo: posts.data },
    }); // 성공 액션 디스패치
  } catch (e) {
    yield put({
      type: MANAGER_LECTURE_INFO_GET_FAILURE,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchManagerLectureInfoGet() {
  yield takeEvery(MANAGER_LECTURE_INFO_GET_REQUEST, managerLectureInfoGet);
}
export function* managerSaga() {
  yield all([fork(watchManagerLectureInfoGet)]);
}
