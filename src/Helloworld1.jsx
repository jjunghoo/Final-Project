/** @format */

import axios from "axios";

import blueStar from "./";
import styled from "@emotion/styled";
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
import { FlipCard } from "./Component/Card/FlipCard";

const FlipCardWrap = styled.div`
  max-width: 1920px;
  background-color: yellow;
  display: flex;
  position: relative;
  left: 50vw;
  transform: translate(-50%, 0%);
  justify-content: center;
  margin: 50px 0px 50px 0px;
  padding: 50px 0px 50px 0px;
`;

export const Helloworld1 = () => {
  const reduxvalue = useSelector((state) => state.employeeReducer.resume);
  const dispatch = useDispatch();

  const onClickE = (e) => {
    // console.log(reduxvalue);
    // var hello = getPosts();
    // console.log(hello);
    // var number = parseInt(reduxvalue.id) + 5;
    // dispatch(employeeIDGet({ ...reduxvalue }));
  };

  // const getPosts = async () => {
  //   await axios
  //     .get(
  //       `https://docs.google.com/spreadsheets/d/1Di7pkSxTor17eTRY25wRF8hlYBw73ExAVRkO2RB8Xa8/gviz/tq?&sheet=test&tq=Select%20*`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     });
  //   // return response.data;
  // };

  const getPostById = async (id) => {
    const response = await axios.get(`/posts/${id}`);
    return response.data;
  };
  return (
    <FlipCardWrap>
      <FlipCard color={"#FFA800"}></FlipCard>
      <FlipCard color={"#FF5050"}></FlipCard>
      <FlipCard color={"#11C0CB"}></FlipCard>
      <FlipCard color={"#BA6DF6"}></FlipCard>
    </FlipCardWrap>
    // <div onClick={() => getPosts()}>{"helllllloo"}</div>
    // <div
    //   style={{ backgroundColor: "tomato" }}
    //   className="job-wrap"
    //   onClick={onClickE}
    // >
    //   <div
    //     onClick={() => {
    //       dispatch({ type: PROJECT_INFO_GET_REQUEST, payload: "p1" }); // UI dispatch를 함 ->>>
    //     }}
    //   >
    //     PROJECT_INFO_GET_REQUEST
    //   </div>
    //   <div
    //     onClick={() => {
    //       dispatch({ type: PROJECT_INFO_GET_REQUEST, payload: "p2" });
    //     }}
    //   >
    //     클릭
    //   </div>
    //   <div
    //     onClick={() => {
    //       dispatch({ type: PROJECT_INFO_GET_REQUEST, payload: "p3" });
    //     }}
    //   >
    //     클릭
    //   </div>

    //   <div
    //     onClick={() => {
    //       console.log(store.getState());
    //     }}
    //   >
    //     {" "}
    //     스토어 확인
    //   </div>

    //   <div
    //     onClick={() => {
    //       dispatch({
    //         type: PROJECT_STAGE_GET_REQUEST,
    //         payload: "p2",
    //       });
    //     }}
    //   >
    //     stage 클릭
    //   </div>

    //   <div
    //     onClick={() => {
    //       dispatch({
    //         type: PROJECT_STUDENT_GET_REQUEST,
    //         payload: "p2",
    //         hamberger:"cheese"
    //       });
    //     }}
    //   >
    //     PROJECT_STUDENT_GET_REQUEST 클릭
    //   </div>
    //   {reduxvalue.id}
    // </div>
  );
};
