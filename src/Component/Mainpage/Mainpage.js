/** @format */

import { RandomMatching } from "./RandomMatching.jsx";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { EMPLOYER_INFO_GET_REQUEST } from "../../redux/type.js";
/** @format */

// import { Link } from "react-router-dom";
const MainPage_Div = styled.div`
  //   height: 720px;
  max-width: 1920px;
  width: 100%;
  background-color: black;
  position: relative;
  left: 50vw;
  transform: translate(-50%, 0);
  //   position: absolute;
  // z-index: 5;
`;

const GetEmployerIDbutton = styled.div`
  width: 200px;
  height: 200px;
  //   width: 100%;
  background-color: pink;
  position: relative;
  //   left: 50vw;
  transform: translate(-50%, 0);
`;

const EditEmployerBookmarkButton = styled.div`
  width: 200px;
  height: 200px;
  //   width: 100%;
  background-color: red;
  position: relative;
  //   left: 50vw;
  transform: translate(-50%, 0);
`;
export const MainPage = () => {
  const dispatch = useDispatch();

  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <MainPage_Div className="Main-Page">
      메인페이지입니다.
      <RandomMatching></RandomMatching>
      <GetEmployerIDbutton
        onClick={() => {
          dispatch({ type: EMPLOYER_INFO_GET_REQUEST, payload: "em1" });
        }}
      ></GetEmployerIDbutton>
      <EditEmployerBookmarkButton
        onClick={() => {}}
      ></EditEmployerBookmarkButton>
    </MainPage_Div>
  );
};
