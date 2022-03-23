/** @format */
// import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { Link } from "react-router-dom";
// import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MATCHING_RANDOM_MATCHING_GET_REQUEST,
  MATCHING_RANDOM_MATCHING_GET_SUCCESS,
  EMPLOYER_BOOKMARK_EDIT_REQUEST,
  MATCHING_SET_RANDOMMATCHING_INDEX,
  MATCHING_LIST_ARRAY_GET_REQUEST,
  EMPLOYER_SUPERMATCHING_EDIT_REQUEST,
} from "../../redux/type";
import { FlipCard } from "./FlipCard";
// import { FlipCardWrapJSX } from "./FlipCardWrap.jsx";

import { store } from "../../index";

const Slider1 = styled.div`
  height: 720px;
  width: 63%;
  max-width: 1920px;
  background-color: red;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`;

const Box = styled.div`
  height: 100px;
  width: 100%;
  background-color: green;
  box-sizing: border-box;
`;
const Box2 = styled.div`
  height: 100px;
  width: 100%;
  background-color: tomato;
  box-sizing: border-box;
`;
const Box3 = styled.div`
  height: 100px;
  width: 100%;
  background-color: black;
  box-sizing: border-box;
`;
export const RandomMatchingUI = ({ sliderNum }) => {
  const [test, setTest] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const [colorArray, setColorArray] = useState([]);
  const [card1X, setCard1X] = useState(0);
  const [card1Y, setCard1Y] = useState(0);
  const [card2X, setCard2X] = useState(0);
  const [card2Y, setCard2Y] = useState(0);
  const [card1Index, setCard1Index] = useState(1);
  const [card2Index, setCard2Index] = useState(0);
  const [card1Content, setCard1Content] = useState(1);
  const [card2Content, setCard2Content] = useState(0);
  const [testNum, setTestNum] = useState(0);

  const cardArrayInfo = useSelector(
    (state) => state.matchingReducer.randomMatchingInfo
  );
  const randommatchingIndex = useSelector(
    (state) => state.matchingReducer.randommatchingIndex
  );
  const employerReducer = useSelector((state) => state.employerReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cardArrayInfo[0]) {
      console.log("hello");
      return 0;
    } else {
      dispatch({ type: MATCHING_RANDOM_MATCHING_GET_REQUEST });
      console.log("hello2");
    }
  }, []);

  useEffect(() => {
    // console.log(cardArrayInfo);
    let localColorArray = [];
    for (let cnt = 0; cnt < cardArrayInfo.length; cnt++) {
      let color = "#000000";
      // console.log(cardArrayInfo[cnt]);
      // console.log(cardArrayInfo[cnt]);
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

  const onCLickHandleEventX = (cardArrayInfo) => {
    let arrayLength = cardArrayInfo.length;
    setTestNum(1);
    if (randommatchingIndex < arrayLength - 1) {
      if (
        employerReducer.bookmarkInfo.indexOf(
          cardArrayInfo[randommatchingIndex + 1].id
        ) < 0
      ) {
        console.log(
          cardArrayInfo[randommatchingIndex + 1].id,
          cardArrayInfo[randommatchingIndex + 1].employeeInfo.이름,
          "이 추가됨"
        );
        dispatch({
          type: EMPLOYER_BOOKMARK_EDIT_REQUEST,
          payload: {
            id: employerReducer.id,
            userID: cardArrayInfo[randommatchingIndex + 1].id,
          },
        });
      }
      dispatch({
        type: MATCHING_SET_RANDOMMATCHING_INDEX,
        payload: { randommatchingIndex: randommatchingIndex + 1 },
      });
    }
    console.log(randommatchingIndex);
    if (randommatchingIndex % 2 === 0) {
      console.log("111");
      setCard1X(1);
      setCard2X(0);
      setCard2Y(0);
      setCard1Content(0);
      setCard2Content(1);
      setTimeout(() => {
        setCard1Index(0);
        setCard2Index(1);
        setTestNum(0);
      }, 1000);
    } else {
      console.log("222");
      setCard1X(0);
      setCard1Y(0);
      setCard2X(1);
      setCard1Content(1);
      setCard2Content(0);

      setTimeout(() => {
        setCard1Index(1);
        setCard2Index(0);
        setTestNum(0);
      }, 1000);
    }
    // console.log(cardArrayInfo);
  };

  const onCLickHandleEventY = (cardArrayInfo) => {
    let arrayLength = cardArrayInfo.length;
    setTestNum(1);
    if (randommatchingIndex < arrayLength - 1) {
      if (
        employerReducer.superMachingInfo.indexOf(
          cardArrayInfo[randommatchingIndex + 1].id
        ) < 0
      ) {
        console.log(
          cardArrayInfo[randommatchingIndex + 1].id,
          cardArrayInfo[randommatchingIndex + 1].employeeInfo.이름,
          "이 슈퍼매칭 추가됨"
        );
        dispatch({
          type: EMPLOYER_SUPERMATCHING_EDIT_REQUEST,
          payload: {
            id: employerReducer.id,
            userID: cardArrayInfo[randommatchingIndex + 1].id,
          },
        });
      }
      dispatch({
        type: MATCHING_SET_RANDOMMATCHING_INDEX,
        payload: { randommatchingIndex: randommatchingIndex + 1 },
      });
    }
    console.log(randommatchingIndex);
    if (randommatchingIndex % 2 === 0) {
      console.log("111");
      setCard1X(1);
      setCard2X(0);
      setCard2Y(0);
      setCard1Content(0);
      setCard2Content(1);
      setTimeout(() => {
        setCard1Index(0);
        setCard2Index(1);
        setTestNum(0);
      }, 1000);
    } else {
      console.log("222");
      setCard1X(0);
      setCard1Y(0);
      setCard2X(1);
      setCard1Content(1);
      setCard2Content(0);

      setTimeout(() => {
        setCard1Index(1);
        setCard2Index(0);
        setTestNum(0);
      }, 1000);
    }
    // console.log(cardArrayInfo);
  };

  // const onCLickHandleEventY = (cardArrayInfo) => {
  //   let arrayLength = cardArrayInfo.length;
  //   setTestNum(1);
  //   if (randommatchingIndex < arrayLength - 1) {
  //     dispatch({
  //       type: MATCHING_SET_RANDOMMATCHING_INDEX,
  //       payload: { randommatchingIndex: randommatchingIndex + 1 },
  //     });
  //   }
  //   console.log(randommatchingIndex);
  //   if (randommatchingIndex % 2 === 0) {
  //     console.log("111");
  //     setCard1Y(1);
  //     setCard2Y(0);
  //     setCard2X(0);
  //     setCard1Content(0);
  //     setCard2Content(1);
  //     setTimeout(() => {
  //       setCard1Index(0);
  //       setCard2Index(1);
  //       setTestNum(0);
  //     }, 1000);
  //   } else {
  //     console.log("222");
  //     setCard1Y(0);
  //     setCard1X(0);
  //     setCard2Y(1);
  //     setCard1Content(1);
  //     setCard2Content(0);

  //     setTimeout(() => {
  //       setCard1Index(1);
  //       setCard2Index(0);
  //       setTestNum(0);
  //     }, 1000);
  //   }
  //   // console.log(cardArrayInfo);
  // };

  return (
    <Slider1 id="UI-RD" sliderNum={sliderNum}>
      <Box
        onClick={(randommatchingIndex) => {
          if (testNum === 0) {
            onCLickHandleEventX(cardArrayInfo);
          }
        }}
      ></Box>
      <Box2
        // onClick={() => {
        //   dispatch({
        //     type: MATCHING_RANDOM_MATCHING_GET_REQUEST,
        //     payload: "programming",
        //   });
        // }}
        onClick={(randommatchingIndex) => {
          if (testNum === 0) {
            onCLickHandleEventY(cardArrayInfo);
          }
        }}
      ></Box2>
      <Box3
        onClick={() => {
          console.log(store.getState());
        }}
      ></Box3>
      {cardArrayInfo[randommatchingIndex + card1Content] ? (
        <FlipCard
          Cardx={card1X}
          Cardy={card1Y}
          zIndex={card1Index}
          cardInfo={cardArrayInfo[randommatchingIndex + card1Content]}
          cardNum={randommatchingIndex}
          color={colorArray[randommatchingIndex + card1Content]}
        ></FlipCard>
      ) : (
        ""
      )}
      {cardArrayInfo[randommatchingIndex + card2Content] ? (
        <FlipCard
          Cardx={card2X}
          Cardy={card2Y}
          zIndex={card2Index}
          cardInfo={cardArrayInfo[randommatchingIndex + card2Content]}
          color={colorArray[randommatchingIndex + card2Content]}
        ></FlipCard>
      ) : (
        ""
      )}
    </Slider1>
  );
};
