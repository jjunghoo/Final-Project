/** @format */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { TeacherMyPageLeft } from "./TeacherMyPageLeft";
import { TeacherMyPageRight } from "./TeacherMyPageRight";

const TeacherMyPageWrap = styled.div`
  max-width: 1920px;
  width: 100vw;
  display: flex;
  //   height: 100vh;
  //   background: red;
`;

export const TeacherMyPage = () => {
  const [bookmarkedInfo, setBookmarkedInfo] = useState(0);
  const employerInfo = useSelector((state) => state.employerReducer);
  const cardBookmarkInfo = useSelector(
    (state) => state.employerReducer.bookmarkInfo
  );
  const params = useParams();
  const employer = useSelector((state) => state.employerReducer);

  const dispatch = useDispatch();

  const onClickedEvent = () => {};

  useEffect(() => {
    console.log(params.id);
  }, []);

  return (
    <TeacherMyPageWrap onClick={() => {}}>
      <TeacherMyPageLeft></TeacherMyPageLeft>
      <TeacherMyPageRight></TeacherMyPageRight>
    </TeacherMyPageWrap>
  );
};
