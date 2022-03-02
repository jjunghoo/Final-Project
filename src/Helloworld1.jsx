/** @format */

import axios from "axios";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";
import { employeeInfoGet } from "./redux/actions/employeeActions";
import { EMPLOYEE_INFO_GET } from "./redux/type";

export const Helloworld1 = () => {
  const reduxvalue = useSelector((state) => state.employeeReducer);
  const dispatch = useDispatch();

  const onClickE = (e) => {
    // console.log(reduxvalue);
    var hello = getPosts();
    console.log(hello);
    var number = parseInt(reduxvalue.id) + 5;
    dispatch(employeeInfoGet({ ...reduxvalue, id: number }));
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
      {reduxvalue.id}
    </div>
  );
};
