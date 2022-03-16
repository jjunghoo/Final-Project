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
  background-color: yellow;
  display: flex;
  position: relative;
  left: 50vw;
  transform: translate(-50%, 0%);
  justify-content: center;
  margin: 50px 0px 50px 0px;
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
    console.log(cardArrayInfo.length);
    let localColorArray = [];
    for (let cnt = 0; cnt < cardArrayInfo.length; cnt++) {
      let rand = Math.floor(Math.random() * 4);
      let color = "#000000";

      if (rand === 0) {
        color = "#FFA800";
      } else if (rand === 1) {
        color = "#FF5050";
      } else if (rand === 2) {
        color = "#BA6DF6";
      } else if (rand === 3) {
        // eslint-disable-next-line no-unused-vars
        color = "#11C0CB";
      }
      localColorArray.push(color);
    }

    setColorArray(localColorArray);
  }, [cardArrayInfo]);

  // const dispatch=useDispatch();

  return (
    <FlipCardWrap>
      {1 ? (
        <GetStudendInfo>
          <div>
            <div
              onClick={() => {
                console.log(store.getState());
                console.log(cardBookmarkInfo);
              }}
              key="getState"
            >
              {" "}
              bookmarkinfo
            </div>
            <div
              onClick={() => {
                dispatch({
                  type: EMPLOYER_INFO_GET_REQUEST,
                  payload: "em1",
                });
              }}
            >
              login
            </div>

            <div>bookmarkset</div>
            <div
              onClick={() => {
                dispatch({
                  type: MATCHING_LIST_ARRAY_GET_REQUEST,
                  payload: "programming",
                });
              }}
            >
              programming
            </div>
            <div
              onClick={() => {
                dispatch({
                  type: MATCHING_LIST_ARRAY_GET_REQUEST,
                  payload: "dataScience",
                });
              }}
            >
              dataScience
            </div>
            <div
              onClick={() => {
                dispatch({
                  type: MATCHING_LIST_ARRAY_GET_REQUEST,
                  payload: "design",
                });
              }}
            >
              design
            </div>
            <div
              onClick={() => {
                dispatch({
                  type: MATCHING_LIST_ARRAY_GET_REQUEST,
                  payload: "marketing",
                });
              }}
            >
              marketing
            </div>
            <div
              onClick={() => {
                dispatch({
                  type: MATCHING_LIST_ARRAY_GET_REQUEST,
                  payload: null,
                });
              }}
            >
              all
            </div>
          </div>
        </GetStudendInfo>
      ) : (
        ""
      )}
      {cardArrayInfo.map((item, index) => {
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
      })}
    </FlipCardWrap>
  );
};
