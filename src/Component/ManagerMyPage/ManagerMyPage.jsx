/** @format */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { MANAGER_LECTURE_INFO_GET_REQUEST } from "../../redux/type";
import { ManagerMyPageLeft } from "./ManagerMyPageLeft";
import { ManagerMyPageRight } from "./ManagerMyPageRight";

const ManagerMyPageWrap = styled.div`
  max-width: 1920px;
  position: relative;
  width: 100%;
  // height: 100px;
  display: flex;
  // background: black;
  //   height: 100vh;
  //   background: red;
`;

export const ManagerMyPage = () => {
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
    dispatch({ type: MANAGER_LECTURE_INFO_GET_REQUEST });
  }, []);

  return (
    <ManagerMyPageWrap onClick={() => {}}>
      <ManagerMyPageLeft></ManagerMyPageLeft>
      <ManagerMyPageRight></ManagerMyPageRight>
    </ManagerMyPageWrap>
  );
};
