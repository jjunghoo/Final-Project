/** @format */

import axios from "axios";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";
import {
  employeeIDGet,
  employeeInfoGet,
} from "./redux/actions/employeeActions";
import { EMPLOYEE_INFO_GET, EMPLOYEE_RESUME_GET } from "./redux/type";
import { store } from "./index";

export const Helloworld1 = () => {
  const reduxvalue = useSelector((state) => state.employeeReducer);
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
          dispatch({ type: EMPLOYEE_INFO_GET, payload: 1 });
        }}
      >
        클릭
      </div>
      <div
        onClick={() => {
          dispatch({ type: EMPLOYEE_INFO_GET, payload: 2 });
        }}
      >
        클릭
      </div>
      <div
        onClick={() => {
          dispatch({ type: EMPLOYEE_INFO_GET, payload: 3 });
        }}
      >
        클릭
      </div>
      <div
        onClick={() => {
          dispatch({ type: EMPLOYEE_INFO_GET, payload: 4 });
        }}
      >
        클릭
      </div>
      <div
        onClick={() => {
          dispatch({ type: EMPLOYEE_INFO_GET, payload: 5 });
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
          dispatch({ type: EMPLOYEE_RESUME_GET, payload: reduxvalue.id });
        }}
      >
        클릭
      </div>

      {reduxvalue.id}
    </div>
  );
};
