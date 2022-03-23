/** @format */
/** @format */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { TeacherMyPageProjectWrap } from "./TeacherMyPageProjectWrap";

const TeacherMyPageRightJsx = styled.div`
  width: 80%;
  display: flex;
  height: 100%;
  //   background: tomato;
`;

const TeacherMyPageProjectName = styled.div`
  font-family: "Peace Sans";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => {
    let element = props.windowWidth;
    // console.log(element);
    element = parseInt(element * 0.8 * 0.25 * 0.05);
    element = String(element) + "px";
    console.log(element);

    return element;
  }};
  line-height: 67px;
  text-transform: uppercase;

  color: ${(props) => {
    return props.color;
  }};
`;

export const TeacherMyPageRight = () => {
  const [bookmarkedInfo, setBookmarkedInfo] = useState(0);
  const [fontSize, setFontSize] = useState(0);
  const employerInfo = useSelector((state) => state.employerReducer);
  const cardBookmarkInfo = useSelector(
    (state) => state.employerReducer.bookmarkInfo
  );
  const [width, setWidth] = useState(0);

  const resizeWindow = () => {
    setWidth(window.innerWidth);
    console.log(width);
  };
  const params = useParams();
  const employer = useSelector((state) => state.employerReducer);

  const dispatch = useDispatch();

  const onClickedEvent = () => {};

  useEffect(() => {
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  });

  return (
    <TeacherMyPageRightJsx>
      <TeacherMyPageProjectWrap
        color={`#BA6DF6`}
        role={"PROGRAMMING"}
        width={width}
      ></TeacherMyPageProjectWrap>
      <TeacherMyPageProjectWrap
        color={`#FF5050`}
        role={"MARKETING"}
        width={width}
      ></TeacherMyPageProjectWrap>
      <TeacherMyPageProjectWrap
        color={`#FFA800`}
        role={"DESIGN"}
        width={width}
      ></TeacherMyPageProjectWrap>
      <TeacherMyPageProjectWrap
        color={`#11C0CB`}
        role={"DATA SCIENCE"}
        width={width}
      ></TeacherMyPageProjectWrap>
    </TeacherMyPageRightJsx>
  );
};
