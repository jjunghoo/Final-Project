/** @format */

import {
  EMPLOYEE_INFO_GET,
  EMPLOYEE_RESUME_GET,
  EMPLOYEE_RESUME_EDIT,
} from "../type";

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
const initialState = {
  employeeInfo: { initialInfo: "initial" },
  id: 0,
  resume: { initialInfo: "initial" },
};

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    //////////////////LIKED

    case EMPLOYEE_INFO_GET: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return {
        ...state,
        employeeInfo: action.payload.employeeInfo,
        id: action.payload.id,
        resume: action.payload.resume,
      };
    case EMPLOYEE_RESUME_GET: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return {
        ...state,
        resume: action.payload.resume,
      };
    case EMPLOYEE_RESUME_EDIT: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return {
        ...state,
        resume: action.payload.resume,
      };

    default:
      return state;
  }
}
