/** @format */
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import {
  EMPLOYER_BOOKMARK_EDIT_REQUEST,
  EMPLOYER_INFO_GET_REQUEST,
  MATCHING_LIST_ARRAY_GET_REQUEST,
  MATCHING_MAIN_LIST_ARRAY_GET_REQUEST,
} from "../../redux/type.js";
import { FlipCardWrapJSX } from "../Card/FlipCardWrapFroMainpage";
import { MainPageHeader } from "./Header.jsx";
import { CategoryMenu } from "./CategoryMenu.jsx";
import { BannerSlider } from "./BannerSlider.jsx";
import { useEffect } from "react";
import { BottomBanner } from "./BottomBanner.jsx";
/** @format */

// import { Link } from "react-router-dom";
const MainPage_Div = styled.div`
  max-width: 1920px;
  width: 100%;
  background-color: white;
  position: relative;
  // left: 50vw;
  // transform: translate(-50%, 0);
`;

const GetEmployerIDbutton = styled.div`
  width: 200px;
  height: 200px;
  background-color: pink;
  position: relative;
  transform: translate(-50%, 0);
`;

const TitleLogo = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  margin-top: 80px;
  // line-height: 58px;

  // text-transform: uppercase;

  color: #222222;
`;

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: MATCHING_MAIN_LIST_ARRAY_GET_REQUEST,
      payload: null,
    });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <MainPage_Div className="Main-Page">
      {/* 메인페이지입니다. */}
      <BannerSlider></BannerSlider>

      {/* <RandomMatching></RandomMatching>
      <GetEmployerIDbutton
        onClick={() => {
          dispatch({ type: EMPLOYER_INFO_GET_REQUEST, payload: "em1" });
        }}
      ></GetEmployerIDbutton> */}
      <TitleLogo>오늘의 신규회원</TitleLogo>

      <FlipCardWrapJSX></FlipCardWrapJSX>

      <TitleLogo>기획전 보러가기</TitleLogo>
      <BottomBanner></BottomBanner>
    </MainPage_Div>
  );
};
