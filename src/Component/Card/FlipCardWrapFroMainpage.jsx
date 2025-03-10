/** @format */
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { FlipCard } from "./FlipCard";
import { useEffect, useState } from "react";

const FlipCardWrap = styled.div`
  max-width: 1920px;
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
  const cardArrayInfo = useSelector(
    (state) => state.matchingReducer.mainPageAllInfo
  );
  const cardBookmarkInfo = useSelector(
    (state) => state.employerReducer.bookmarkInfo
  );

  const [colorArray, setColorArray] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let localColorArray = [];
    for (let cnt = 0; cnt < cardArrayInfo.length; cnt++) {
      let color = "#000000";
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
    setColorArray(localColorArray);
  }, [cardArrayInfo]);

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
