/** @format */

import {
  EMPLOYER_LIKED_ADD,
  EMPLOYER_LIKED_REMOVE,
  EMPLOYER_COMPANY_EDIT,
  EMPLOYER_COMPANY_ADD,
  EMPLOYER_COMPANY_REMOVE,
  EMPLOYER_BOOKMARK_EDIT,
  EMPLOYER_BOOKMARK_ADD,
  EMPLOYER_BOOKMARK_REMOVE,
  EMPLOYER_INFO_GET_REQUEST,
  EMPLOYER_INFO_GET_SUCCESS,
  EMPLOYER_INFO_GET_FAILURE,
  EMPLOYER_LIKED_GET_FAILURE,
  EMPLOYER_LIKED_GET_REQUEST,
  EMPLOYER_LIKED_GET_SUCCESS,
  EMPLOYER_BOOKMARK_GET_FAILURE,
  EMPLOYER_BOOKMARK_GET_REQUEST,
  EMPLOYER_BOOKMARK_GET_SUCCESS,
  EMPLOYER_SUPERMATCHING_GET_REQUEST,
  EMPLOYER_SUPERMATCHING_GET_SUCCESS,
  EMPLOYER_SUPERMATCHING_GET_FAILURE,
  EMPLOYER_BOOKMARK_EDIT_REQUEST,
  EMPLOYER_BOOKMARK_EDIT_SUCCESS,
  EMPLOYER_BOOKMARK_EDIT_FAILURE,
} from "../type";

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
const initialState = {
  employerInfo: { initialInfo: "initial" }, // 기업 정보
  likedInfo: { initialInfo: "initial" }, // 기업이 고용하고 싶은 회원 정보
  bookmarkInfo: { initialInfo: "initial" }, // 기업이 고용은 안했고 눈여겨보는 회원 정보
  superMachingInfo: { initialInfo: "initial" }, // 기업의 매칭된 상태의 정보
  superMachedInfo: { initialInfo: "initial" }, // 왜넣었지 ;;;
  errmsg: "",
};

export default function employerReducer(state = initialState, action) {
  switch (action.type) {
    // 이하 다시 만든 것들

    case EMPLOYER_INFO_GET_REQUEST: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return {
        ...state,
        companyInfo: [],
        likedInfo: [],
        bookmarkInfo: [],
        superMachingInfo: [],
      };
    case EMPLOYER_INFO_GET_SUCCESS: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return { ...action.payload };
    case EMPLOYER_INFO_GET_FAILURE: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return { ...state, errmsg: action.errmsg };

    case EMPLOYER_LIKED_GET_REQUEST:
      return {
        ...state,
        likedInfo: "",
      };
    case EMPLOYER_LIKED_GET_SUCCESS:
      // console.log("likedinfosuccess");

      return {
        ...state,
        likedInfo: action.payload.likedInfo,
      };
    case EMPLOYER_LIKED_GET_FAILURE:
      return {
        ...state,
        errmsg: action.payload.errmsg,
      };

    case EMPLOYER_BOOKMARK_GET_REQUEST:
      return {
        ...state,
        bookmarkInfo: "",
      };
    case EMPLOYER_BOOKMARK_GET_SUCCESS:
      // console.log("likedinfosuccess");

      return {
        ...state,
        bookmarkInfo: action.payload.bookmarkInfo,
      };
    case EMPLOYER_BOOKMARK_GET_FAILURE:
      return {
        ...state,
        errmsg: action.payload.errmsg,
      };

    case EMPLOYER_SUPERMATCHING_GET_REQUEST:
      return {
        ...state,
        superMachingInfo: "",
      };
    case EMPLOYER_SUPERMATCHING_GET_SUCCESS:
      // console.log("likedinfosuccess");

      return {
        ...state,
        superMachingInfo: action.payload.superMachingInfo,
      };
    case EMPLOYER_SUPERMATCHING_GET_FAILURE:
      return {
        ...state,
        errmsg: action.payload.errmsg,
      };

    //////////////////LIKED

    // 아래는 사실상 노필요

    case EMPLOYER_LIKED_ADD: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return { ...state, likedInfo: action.payload.likedInfo };
    // ADD_LIKED 를 통해 달라진 객체 적용 가능 중간 SAGA 를 통해서 이 부분들 전부 고쳐야할 필요가 있음
    case EMPLOYER_LIKED_REMOVE:
      return { ...state, likedInfo: action.payload.likedInfo };
    // REMOVE_LIKED 를 통해 달라진 객체 적용 가능 중간 SAGA 를 통해서 이 부분들 전부 고쳐야할 필요가 있음

    //////////////////EMPLOYER

    case EMPLOYER_COMPANY_EDIT:
      return {
        ...state,
        companyInfo: action.payload.companyInfo,
      };
    case EMPLOYER_COMPANY_ADD:
      return {
        ...state,
        companyInfo: action.payload.companyInfo,
      };
    // EMPLOYER_ADD 를 통해 달라진 객체 적용 가능 중간 SAGA 를 통해서 이 부분들 전부 고쳐야할 필요가 있음
    case EMPLOYER_COMPANY_REMOVE:
      return {
        ...state,
        companyInfo: action.payload.companyInfo,
      };

    // BOOKMARK_REMOVE 를 통해 달라진 객체 적용 가능 중간 SAGA 를 통해서 이 부분들 전부 고쳐야할 필요가 있음

    case EMPLOYER_BOOKMARK_EDIT:
      return {
        ...state,
        companyInfo: action.payload.companyInfo,
      };
    case EMPLOYER_BOOKMARK_ADD:
      return {
        ...state,
        companyInfo: action.payload.companyInfo,
      };
    // EMPLOYER_ADD 를 통해 달라진 객체 적용 가능 중간 SAGA 를 통해서 이 부분들 전부 고쳐야할 필요가 있음
    case EMPLOYER_BOOKMARK_REMOVE:
      return {
        ...state,
        companyInfo: action.payload.companyInfo,
      };
    // EMPLOYER_REMOVE 를 통해 달라진 객체 적용 가능 중간 SAGA 를 통해서 이 부분들 전부 고쳐야할 필요가 있음

    case EMPLOYER_BOOKMARK_EDIT_REQUEST:
      return {
        ...state,
        bookmarkInfo: "",
      };
    case EMPLOYER_BOOKMARK_EDIT_SUCCESS:
      return {
        ...state,
        bookmarkInfo: action.payload.bookmarkInfo,
      };
    // EMPLOYER_ADD 를 통해 달라진 객체 적용 가능 중간 SAGA 를 통해서 이 부분들 전부 고쳐야할 필요가 있음
    case EMPLOYER_BOOKMARK_EDIT_FAILURE:
      return {
        ...state,
        errmsg: action.payload.errmsg,
      };
    // EMPLOYER_REMOVE 를 통해 달라진 객체 적용 가능 중간 SAGA 를 통해서 이 부분들 전부 고쳐야할 필요가 있음

    default:
      return state;
  }
}
