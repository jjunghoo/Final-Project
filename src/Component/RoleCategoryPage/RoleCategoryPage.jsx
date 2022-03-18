/** @format */

import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import {
  MATCHING_LIST_ARRAY_GET_REQUEST,
  MATCHING_SELECTED_INFO_CATEGORY,
} from "../../redux/type.js";
import { FlipCardWrapJSX } from "../Card/FlipCardWrapForJobCategoryPage";
import { useEffect } from "react";
import { useParams } from "react-router";
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

export const RoleCategoryPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const matchingReducer = useSelector((state) => state.matchingReducer);
  useEffect(() => {
    console.log(params.id);
    console.log(matchingReducer.selectedCategoryInfo);
    if (
      !matchingReducer.allInfo[0] ||
      matchingReducer.selectedCategoryInfo !== params.id //allInfo가 존재하면서 카테고리가 서로 상이해진 상태면
    ) {
      console.log("it_works");
      if (params.id !== "all") {
        console.log("파람스가 받아지는뎅....  ", params.id);
        dispatch({
          type: MATCHING_LIST_ARRAY_GET_REQUEST,
          payload: params.id,
        });
        dispatch({
          type: MATCHING_SELECTED_INFO_CATEGORY,
          payload: { selectedCategoryInfo: params.id },
        });
      } else {
        console.log("all 찾더라");
        dispatch({
          type: MATCHING_SELECTED_INFO_CATEGORY,
          payload: { selectedCategoryInfo: params.id },
        });
        dispatch({
          type: MATCHING_LIST_ARRAY_GET_REQUEST,
          payload: null,
        });
      }
    }
  }, [params]);

  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <MainPage_Div className="Main-Page">
      <FlipCardWrapJSX></FlipCardWrapJSX>
    </MainPage_Div>
  );
};
