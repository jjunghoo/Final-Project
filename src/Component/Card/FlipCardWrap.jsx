/** @format */
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { FlipCard } from "./FlipCard";
import { useEffect, useState } from "react";

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
  const [colorArray, setColorArray] = useState([]);

  useEffect(() => {
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

  return (
    <FlipCardWrap>
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
