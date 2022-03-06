/** @format */

import {
  TEACHER_INFO_GET,
  TEACHER_INFO_EDIT,
  TEACHER_COMMENT_EDIT,
  TEACHER_COMMENT_ADD,
  TEACHER_COMMENT_REMOVE,
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

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
const initialState = {
  teacherInfo: { initialInfo: "initial" },
  lectureInfo: { initialInfo: "initial" },
  commentInfo: { initialInfo: "initial" },
  errmsg: "",
};

export default function employerReducer(state = initialState, action) {
  switch (action.type) {
    ////시작~~~
    case TEACHER_INFO_GET_REQUEST:
      return {
        ...state,
      };
    case TEACHER_INFO_GET_SUCCESS:
      // console.log("likedinfosuccess");

      return {
        ...state,
        ...action.payload,
      };
    case TEACHER_INFO_GET_FAILURE:
      return {
        ...state,
        errmsg: action.payload.errmsg,
      };

    case TEACHER_COMMENT_GET_REQUEST:
      return {
        ...state,
        errmsg: "",
      };
    case TEACHER_COMMENT_GET_SUCCESS:
      // console.log("likedinfosuccess");

      return {
        ...state,
        commentInfo: action.payload.commentInfo,
      };
    case TEACHER_COMMENT_GET_FAILURE:
      return {
        ...state,
        errmsg: action.payload.errmsg,
      };

    case TEACHER_LECTURE_GET_REQUEST:
      return {
        ...state,
        errmsg: "",
      };
    case TEACHER_LECTURE_GET_SUCCESS:
      // console.log("likedinfosuccess");

      return {
        ...state,
        lectureInfo: action.payload.lectureInfo,
      };
    case TEACHER_LECTURE_GET_FAILURE:
      return {
        ...state,
        errmsg: action.payload.errmsg,
      };

    //////////////////LIKED

    case TEACHER_INFO_GET: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return { ...state, ...action };
    // ADD_LIKED 를 통해 달라진 객체 적용 가능 중간 SAGA 를 통해서 이 부분들 전부 고쳐야할 필요가 있음
    case TEACHER_INFO_EDIT:
      return { ...state, teacherInfo: action.payload.teacherInfo };
    // REMOVE_LIKED 를 통해 달라진 객체 적용 가능 중간 SAGA 를 통해서 이 부분들 전부 고쳐야할 필요가 있음

    //////////////////EMPLOYER

    case TEACHER_COMMENT_ADD:
      return {
        ...state,
        commentInfo: action.payload.commentInfo,
      };
    case TEACHER_COMMENT_EDIT:
      return {
        ...state,
        commentInfo: action.payload.commentInfo,
      };
    // EMPLOYER_ADD 를 통해 달라진 객체 적용 가능 중간 SAGA 를 통해서 이 부분들 전부 고쳐야할 필요가 있음
    case TEACHER_COMMENT_REMOVE:
      return {
        ...state,
        commentInfo: action.payload.commentInfo,
      };

    // BOOKMARK_REMOVE 를 통해 달라진 객체 적용 가능 중간 SAGA 를 통해서 이 부분들 전부 고쳐야할 필요가 있음

    default:
      return state;
  }
}
