/** @format */

import {
  MATCHING_ALL_INFO_GET,
  MATCHING_DATA_SCIENCE_INFO_GET,
  MATCHING_DESIGN_INFO_GET,
  MATCHING_MARKETING_INFO_GET,
  MATCHING_PROGRAMMING_INFO_GET,
} from "../type";

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
const initialState = {
  allInfo: { initialInfo: "initial" },
  programmingInfo: { initialInfo: "initial" },
  designInfo: { initialInfo: "initial" },
  dataScienceInfo: { initialInfo: "initial" },
  marketingInfo: { initialInfo: "initial" },
};

export default function matchingReducer(state = initialState, action) {
  switch (action.type) {
    //////////////////LIKED

    case MATCHING_ALL_INFO_GET: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return { ...state, allInfo: action.payload.allInfo };
    case MATCHING_DATA_SCIENCE_INFO_GET: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return { ...state, allInfo: action.payload.dataScienceInfo };
    case MATCHING_MARKETING_INFO_GET: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return { ...state, allInfo: action.payload.marketingInfo };
    case MATCHING_DESIGN_INFO_GET: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return { ...state, allInfo: action.payload.designInfo };
    case MATCHING_PROGRAMMING_INFO_GET: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return { ...state, allInfo: action.payload.programmingInfo };

    default:
      return state;
  }
}
