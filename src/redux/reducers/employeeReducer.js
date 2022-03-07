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
  resume: [
    {
      id: "1",
      name: "학력",
      list: [
        {
          id: "1",
          education: "한양대학교 대학원",
          department: "디자인학부",
          startDate: "2017-02-16",
          endDate: "2021-02-10",
          state: "졸업",
        },
      ],
    },
    {
      id: "2",
      name: "경력",
      list: [
        {
          id: "1",
          company: "패스트캠퍼스",
          department: "기획디자인팀",
          position: "UXUI 디자이너",
          startDate: "2019-03-15",
          endDate: "2022-03-07",
          state: "재직중",
        },
      ],
    },
    {
      id: "3",
      name: "자격증",
      list: [
        {
          id: "1",
          certificate: "컬러리스트기사",
          HostOrganization: "한국산업인력공단",
          endDate: "2019.11",
        },
      ],
    },
    {
      id: "4",
      name: "교육",
      list: [
        {
          id: "1",
          company: "패스트캠퍼스",
          educationName: "한번에 끝내는 UXUI 디자인",
          startDate: "2021-02",
          endDate: "2021-05",
          state: "수강 완료",
        },
      ],
    },
    {
      id: "5",
      name: "수상경력",
      list: [
        {
          id: "1",
          Awards: "2021 서울시 공모디자인 공모전 선정",
          endDate: "2021-05",
        },
      ],
    },
  ],
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
