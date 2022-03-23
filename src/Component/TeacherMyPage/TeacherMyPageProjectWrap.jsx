/** @format */
/** @format */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProjectAdd from "./image/ProjectAdd.svg";

const TeacherMyPageProjectWrapJsx = styled.div`
  width: 25%;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TeacherMyPageProjectName = styled.div`
  font-family: "Peace Sans";
  font-style: normal;
  font-weight: 400;
  margin: 70px 0px 10px 0px;
  font-size: ${(props) => {
    let element = props.windowWidth;
    console.log(element);
    element = parseInt(element * 0.8 * 0.25 * 0.1);
    element = String(element) + "px";
    console.log(element);

    return element;
  }};
  //   line-height: 67px;
  text-transform: uppercase;

  color: ${(props) => {
    // console.log(props.color);
    return props.color;
  }};
`;

const ProjectImg = styled.img`
  //   margin-right: 10%;
  height: 40px;
`;

const ProjectImgWrap = styled.div`
  width: 100%;
  //   background: black;
  display: flex;
  //   padding-right: 20%;
  justify-content: end;
`;

export const TeacherMyPageProjectWrap = ({ color, role, width }) => {
  const [bookmarkedInfo, setBookmarkedInfo] = useState(0);
  const [fontSize, setFontSize] = useState(0);
  const employerInfo = useSelector((state) => state.employerReducer);
  const cardBookmarkInfo = useSelector(
    (state) => state.employerReducer.bookmarkInfo
  );

  const params = useParams();
  const employer = useSelector((state) => state.employerReducer);

  const dispatch = useDispatch();

  const onClickedEvent = () => {};

  return (
    <TeacherMyPageProjectWrapJsx>
      <TeacherMyPageProjectName
        windowWidth={width}
        id={`teacher-menu-${role}`}
        color={color}
      >
        {role}
      </TeacherMyPageProjectName>
      <ProjectImgWrap>
        <ProjectImg src={ProjectAdd} />
      </ProjectImgWrap>
    </TeacherMyPageProjectWrapJsx>
  );
};
