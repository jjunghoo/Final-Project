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
} from "../type";

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
const initialState = {
  companyInfo: { initialInfo: "initial" },
  likedInfo: { initialInfo: "initial" },
  bookmarkInfo: { initialInfo: "initial" },
};

export default function employerReducer(state = initialState, action) {
  switch (action.type) {
    //////////////////LIKED

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

    default:
      return state;
  }
}
