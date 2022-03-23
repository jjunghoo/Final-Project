/** @format */
/** @format */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProjectAdd from "./image/ProjectAdd.svg";

const TeacherMyPageProjectInfoJsx = styled.div`
  width: 25%;
  border: 1px solid black;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const TeacherMyPageProjectInfo = ({}) => {
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

  return <TeacherMyPageProjectInfoJsx></TeacherMyPageProjectInfoJsx>;
};
