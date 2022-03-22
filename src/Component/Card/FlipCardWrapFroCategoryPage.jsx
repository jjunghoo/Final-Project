/** @format */

import { arrayMove } from "@dnd-kit/sortable";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";

import { store } from "../../index";

import bgimg from "./image/card-back-bgimg.svg";
import {
  EMPLOYER_BOOKMARK_EDIT,
  EMPLOYER_BOOKMARK_EDIT_REQUEST,
  EMPLOYER_INFO_GET_REQUEST,
  MATCHING_LIST_ARRAY_GET_REQUEST,
  MATCHING_RANDOM_MATCHING_GET_FAILURE,
  MATCHING_RANDOM_MATCHING_GET_REQUEST,
} from "../../redux/type";
import { FlipCard } from "./FlipCard";
import { useEffect, useState } from "react";
//
//
//
//
const FlipCardWrap = styled.div`
  max-width: 1920px;
  // background-color: yellow;
  display: flex;
  position: relative;
  justify-content: start;
  margin: 0px 0px 50px 0px;
  padding: 50px 0px 50px 0px;
  flex-wrap: wrap;
`;

const GetStudendInfo = styled.div`
  & > div > div {
    width: 100px;
    height: 100px;
    background-color: white;
    margin-top: 10px;
  }
`;

export const FlipCardWrapJSX = () => {
  const cardArrayInfo = useSelector((state) => state.matchingReducer.allInfo);
  const cardBookmarkInfo = useSelector(
    (state) => state.employerReducer.bookmarkInfo
  );

  const [colorArray, setColorArray] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(cardArrayInfo);
    let localColorArray = [];
    for (let cnt = 0; cnt < cardArrayInfo.length; cnt++) {
      let color = "#000000";
      // console.log(cardArrayInfo[cnt]);
      console.log(cardArrayInfo[cnt]);
      if (cardArrayInfo[cnt].design === "1") {
        color = "#FFA800";
      } else if (cardArrayInfo[cnt].marketing === "1") {
        color = "#FF5050";
      } else if (cardArrayInfo[cnt].programming === "1") {
        color = "#BA6DF6";
      } else if (cardArrayInfo[cnt].dataScience === "1") {
        // eslint-disable-next-line no-unused-vars
        color = "#11C0CB";
      }
      localColorArray.push(color);
    }
    console.log(localColorArray);
    setColorArray(localColorArray);
  }, [cardArrayInfo]);

  // const dispatch=useDispatch();

  return (
    <FlipCardWrap>
      {cardArrayInfo.map((item, index, array) => {
        if (index > array.length - 16 - 1) {
          if (colorArray.length > index)
            return (
              <FlipCard
                key={index}
                cardInfo={item}
                bookmarkedInfo={0}
                cardNum={0}
                color={colorArray[index]}
              ></FlipCard>
            );
          else
            return (
              <FlipCard
                key={index}
                cardInfo={item}
                bookmarkedInfo={0}
                cardNum={0}
              ></FlipCard>
            );
        } else {
          return "";
        }
      })}
    </FlipCardWrap>
  );
};
