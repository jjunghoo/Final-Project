/** @format */

import {
  PROJECT_INFO_GET,
  PROJECT_INFO_GET_FAILURE,
  PROJECT_INFO_GET_REQUEST,
  PROJECT_INFO_GET_SUCCESS,
  PROJECT_STAGE_GET_FAILURE,
  PROJECT_STAGE_GET_REQUEST,
  PROJECT_STAGE_GET_SUCCESS,
  PROJECT_STUDENT_GET_FAILURE,
  PROJECT_STUDENT_GET_REQUEST,
  PROJECT_STUDENT_GET_SUCCESS,
} from "../type";

const initialState = {
  id: "",
  studentInfo: { initialInfo: "initial" },
  stageInfo: { initialInfo: "initial" },
  errmsg: "",
};

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    //////////////////LIKED

    case PROJECT_INFO_GET_REQUEST:
      return {
        ...state,
        errmsg: "",
      };
    case PROJECT_INFO_GET_SUCCESS:
      // console.log("likedinfosuccess");

      return {
        ...state,
        ...action.payload,
        errmsg: "",
      };
    case PROJECT_INFO_GET_FAILURE:
      return {
        ...state,
        errmsg: action.payload.errmsg,
      };

    case PROJECT_STUDENT_GET_REQUEST:
      return {
        ...state,
        errmsg: "",
      };
    case PROJECT_STUDENT_GET_SUCCESS:
      console.log(action.payload);

      return {
        ...state,
        studentInfo: action.payload.studentInfo,
      };
    case PROJECT_STUDENT_GET_FAILURE:
      return {
        ...state,
        errmsg: action.payload.errmsg,
      };

    case PROJECT_STAGE_GET_REQUEST:
      return {
        ...state,
        errmsg: "",
      };
    case PROJECT_STAGE_GET_SUCCESS:
      // console.log("likedinfosuccess");

      return {
        ...state,
        stageInfo: action.payload.stageInfo,
      };
    case PROJECT_STAGE_GET_FAILURE:
      return {
        ...state,
        stageInfo: action.payload.errmsg,
      };

    default:
      return state;
  }
}
