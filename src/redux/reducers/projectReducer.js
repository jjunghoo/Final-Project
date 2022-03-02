/** @format */

import { PROJECT_INFO_GET } from "../type";

const initialState = {
  student: { initialInfo: "initial" },
  educationProject: { initialInfo: "initial" },
};

export default function matchingReducer(state = initialState, action) {
  switch (action.type) {
    //////////////////LIKED

    case PROJECT_INFO_GET: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return { ...state, ...action.payload };

    default:
      return state;
  }
}
