/** @format */

import {
  MATCHING_ALL_INFO_GET,
  MATCHING_DATA_SCIENCE_INFO_GET,
  MATCHING_DESIGN_INFO_GET,
  MATCHING_MARKETING_INFO_GET,
  MATCHING_PROGRAMMING_INFO_GET,
  MATCHING_RANDOM_MATCHING_GET_REQUEST,
  MATCHING_RANDOM_MATCHING_GET_FAILURE,
  MATCHING_RANDOM_MATCHING_GET_SUCCESS,
  MATCHING_LIST_ARRAY_GET_REQUEST,
  MATCHING_LIST_ARRAY_GET_SUCCESS,
  MATCHING_LIST_ARRAY_GET_FAILURE,
  MATCHING_SELECTED_INFO_CATEGORY,
  MATCHING_MAIN_LIST_ARRAY_GET_FAILURE,
  MATCHING_MAIN_LIST_ARRAY_GET_SUCCESS,
  MATCHING_MAIN_LIST_ARRAY_GET_REQUEST,
  MATCHING_SET_RANDOMMATCHING_INDEX,
} from "../type";

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
const initialState = {
  allInfo: [],
  mainPageAllInfo: [],
  programmingInfo: { initialInfo: "initial" },
  designInfo: { initialInfo: "initial" },
  dataScienceInfo: { initialInfo: "initial" },
  marketingInfo: { initialInfo: "initial" },
  randomMatchingInfo: { initialInfo: "initial" },
  selectedCategoryInfo: "all",
  // projectInfo: {},
  randommatchingIndex: 0,
};

export default function matchingReducer(state = initialState, action) {
  switch (action.type) {
    //////////////////LIKED
    case MATCHING_SELECTED_INFO_CATEGORY:
      // console.log("testing it work well");
      // console.log(action.payload);
      return {
        ...state,
        selectedCategoryInfo: action.payload.selectedCategoryInfo,
      };
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

    case MATCHING_RANDOM_MATCHING_GET_REQUEST: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return { ...state, randomMatchingInfo: [], errmsg: "" };
    case MATCHING_RANDOM_MATCHING_GET_SUCCESS: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      // console.log(action.payload.randomMatchingInfo);
      return {
        ...state,
        randomMatchingInfo: action.payload.randomMatchingInfo,
        errmsg: "",
      };
    case MATCHING_RANDOM_MATCHING_GET_FAILURE: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return { ...state, errmsg: action.payload.errmsg };

    case MATCHING_LIST_ARRAY_GET_REQUEST: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return { ...state, allInfo: [], errmsg: "" };
    case MATCHING_LIST_ARRAY_GET_SUCCESS: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      // console.log(action.payload.randomMatchingInfo);
      return {
        ...state,
        allInfo: action.payload.allInfo,
        errmsg: "",
      };
    case MATCHING_LIST_ARRAY_GET_FAILURE: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return { ...state, errmsg: action.payload.errmsg };

    case MATCHING_MAIN_LIST_ARRAY_GET_REQUEST: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return { ...state, errmsg: "" };
    case MATCHING_MAIN_LIST_ARRAY_GET_SUCCESS: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      // console.log(action.payload.randomMatchingInfo);
      return {
        ...state,
        mainPageAllInfo: action.payload.mainPageAllInfo,
        errmsg: "",
      };
    case MATCHING_MAIN_LIST_ARRAY_GET_FAILURE: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return { ...state, errmsg: action.payload.errmsg };
    case MATCHING_SET_RANDOMMATCHING_INDEX:
      return {
        ...state,
        randommatchingIndex: action.payload.randommatchingIndex,
      };

    default:
      return state;
  }
}
