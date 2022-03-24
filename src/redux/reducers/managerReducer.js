/** @format */

import {
  MANAGER_LECTURE_INFO_GET_FAILURE,
  MANAGER_LECTURE_INFO_GET_REQUEST,
  MANAGER_LECTURE_INFO_GET_SUCCESS,
} from "../type";

const initialState = {
  lectureListInfo: {},
};

export default function managerReducer(state = initialState, action) {
  switch (action.type) {
    //////////////////LIKED

    case MANAGER_LECTURE_INFO_GET_REQUEST:
      return {
        ...state,
        errmsg: "",
      };
    case MANAGER_LECTURE_INFO_GET_SUCCESS:
      // console.log("likedinfosuccess");

      return {
        ...state,
        lectureListInfo: action.payload.lectureListInfo,
        errmsg: "",
      };
    case MANAGER_LECTURE_INFO_GET_FAILURE:
      return {
        ...state,
        errmsg: action.payload.errmsg,
      };

    default:
      return state;
  }
}
