/** @format */

import {
  EMPLOYEE_INFO_GET,
  EMPLOYEE_RESUME_GET,
  EMPLOYEE_RESUME_EDIT,
  EMPLOYEE_ID_GET_FAILURE,
  EMPLOYEE_ID_GET_REQUEST,
  EMPLOYEE_ID_GET_SUCCESS,
  EMPLOYEE_RESUME_SUCCESS,
  EMPLOYEE_RESUME_FAILURE,
  EMPLOYEE_INFO_SUCCESS,
  EMPLOYEE_INFO_FAILURE,
} from "../type";

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
const initialState = {
  employeeInfo: { initialInfo: "initial" },
  id: 0,
  resume: { initialInfo: "initial" },

  errmsg: "",
};

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    //////////////////LIKED

    case EMPLOYEE_INFO_GET: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return {
        ...state,
        employeeInfo: {},
        id: "",
      };
    case EMPLOYEE_INFO_SUCCESS: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      console.log(action.payload);
      return {
        ...state,
        employeeInfo: action.payload.employeeInfo,
        id: action.payload.id,
        errmsg: "",
      };
    case EMPLOYEE_INFO_FAILURE: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      console.log(action.payload.errmsg);
      return {
        ...state,
        employeeInfo: {},
        id: "",
        errmsg: action.payload.errmsg,
      };
    //
    //  RESUME
    //

    case EMPLOYEE_RESUME_GET: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return {
        ...state,
        resume: {},
      };
    case EMPLOYEE_RESUME_SUCCESS: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return {
        ...state,
        resume: action.payload.resume,
        errmsg: "",
      };
    case EMPLOYEE_RESUME_FAILURE: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return {
        ...state,
        errmsg: action.payload.errmsg,
      };

    case EMPLOYEE_RESUME_EDIT: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return {
        ...state,
        resume: action.payload.resume,
      };
    case EMPLOYEE_ID_GET_REQUEST:
      console.log("requesting");
      return { ...state };
    case EMPLOYEE_ID_GET_SUCCESS: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      console.log("succeed");
      console.log(action.payload);

      return {
        ...state,
        employeeInfo: action.payload,
      };
    case EMPLOYEE_ID_GET_FAILURE: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return {
        ...state,
      };
    default:
      return state;
  }
}
