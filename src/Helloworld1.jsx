/** @format */

import axios from "axios";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";
import {
  employeeIDGet,
  employeeInfoGet,
} from "./redux/actions/employeeActions";
import {
  EMPLOYEE_INFO_GET,
  EMPLOYEE_RESUME_GET,
  EMPLOYER_BOOKMARK_GET_REQUEST,
  EMPLOYER_INFO_GET_REQUEST,
  EMPLOYER_LIKED_GET_REQUEST,
  PROJECT_INFO_GET_REQUEST,
  PROJECT_STAGE_GET_REQUEST,
  PROJECT_STUDENT_GET_REQUEST,
  TEACHER_COMMENT_GET_REQUEST,
  TEACHER_INFO_GET_REQUEST,
  TEACHER_LECTURE_GET_REQUEST,
} from "./redux/type";
import { store } from "./index";

export const Helloworld1 = () => {
  const reduxvalue = useSelector((state) => state.projectReducer);
  const dispatch = useDispatch();

  const onClickE = (e) => {
    // console.log(reduxvalue);
    // var hello = getPosts();
    // console.log(hello);
    // var number = parseInt(reduxvalue.id) + 5;
    // dispatch(employeeIDGet({ ...reduxvalue }));
  };

  const getPosts = async () => {
    const response = await axios.get("/example");
    return response.data;
  };

  const getPostById = async (id) => {
    const response = await axios.get(`/posts/${id}`);
    return response.data;
  };
  return (
    <div
      style={{ backgroundColor: "tomato" }}
      className="job-wrap"
      onClick={onClickE}
    >
      <div
        onClick={() => {
          dispatch({ type: PROJECT_INFO_GET_REQUEST, payload: "p1" });
        }}
      >
        EMPLOYER_LIKED_GET_REQUEST
      </div>
      <div
        onClick={() => {
          dispatch({ type: PROJECT_INFO_GET_REQUEST, payload: "p2" });
        }}
      >
        클릭
      </div>
      <div
        onClick={() => {
          dispatch({ type: PROJECT_INFO_GET_REQUEST, payload: "p3" });
        }}
      >
        클릭
      </div>

      <div
        onClick={() => {
          console.log(store.getState());
        }}
      >
        {" "}
        스토어 확인
      </div>

      <div
        onClick={() => {
          dispatch({
            type: PROJECT_STAGE_GET_REQUEST,
            payload: "p2",
          });
        }}
      >
        stage 클릭
      </div>

      <div
        onClick={() => {
          dispatch({
            type: PROJECT_STUDENT_GET_REQUEST,
            payload: "p2",
          });
        }}
      >
        PROJECT_STUDENT_GET_REQUEST 클릭
      </div>
      {reduxvalue.id}
    </div>
  );
};
