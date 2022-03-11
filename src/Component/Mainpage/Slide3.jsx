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
} from "../../redux/type";
const Slider1 = styled.div`
  height: 720px;
  width: 100%;
  max-width: 1920px;
  background-color: blue;
  position: absolute;
  left: ${(props) => props.sliderNum * -100 + 200}%;
  box-sizing: border-box;
`;
const Card1 = styled.div`
  height: 670px;
  width: 470px;
  background-color: grey;
  box-sizing: border-box;
  position: absolute;
  font-size: 100px;
  left: ${(props) => props.card1Location}%;
  transform: translate(-50%, 0);
  transition-property: left;
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
`;

const Card2 = styled.div`
  height: 670px;
  width: 470px;
  background-color: tomato;
  box-sizing: border-box;
  position: absolute;
  left: ${(props) => props.card2Location}%;
  transform: translate(-50%, 0);
  font-size: 100px;
  transition-property: left;
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
`;

const Card3 = styled.div`
  height: 670px;
  width: 470px;
  background-color: #129489;
  box-sizing: border-box;
  position: absolute;
  left: ${(props) => props.card3Location}%;
  transform: translate(-50%, 0);
  font-size: 100px;
  transition-property: left;
  transition-timing-function: ease-in-out;
  transition-duration: 1s;
`;

const SliderButton = styled.button`
  height: 100px;
  width: 100px;
  position: absolute;
  background-color: pink;
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0%);
  box-sizing: border-box;
  transition-duration: 400ms;
  font-size: 100px;
  // transition: all ease 2s 2s;
`;

const EditEmployerBookmarkButton = styled.div`
  width: 200px;
  height: 200px;
  //   width: 100%;
  background-color: red;
  position: relative;
  //   left: 50vw;
  //   transform: translate(-50%, 0);
`;
export const Slide3 = ({ sliderNum }) => {
  const [cardPosition, setCardPosition] = useState(0);
  const [cardPosition2, setCardPosition2] = useState(0);
  const [cardPosition3, setCardPosition3] = useState(0);
  const [card1Location, setCard1Location] = useState(-50);
  const [card2Location, setCard2Location] = useState(50);
  const [card3Location, setCard3Location] = useState(150);

  const [test, setTest] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);

  const randomMatchingReducer = useSelector((state) => state.matchingReducer);
  const employerReducer = useSelector((state) => state.employerReducer);

  const dispatch = useDispatch();
  const card3ClickEvent = () => {
    // console.log(cardPosition);
    const Card1 = document.getElementById("test1");
    const Card2 = document.getElementById("test2");
    const Card3 = document.getElementById("test3");
    const Card4 = document.getElementById("test4");

    // console.log(Card4.innerText);

    // Card4.removeEventListener("click", card3ClickEvent);
    console.log(parseFloat(getComputedStyle(Card3).left.slice(0, -2)));

    if (parseFloat(getComputedStyle(Card1).left.slice(0, -2)) < 0) {
      console.log("1");
      Card1.style.left = "150%";
      Card2.style.left = "-50%";
      Card3.style.left = "50%";
      Card1.style.display = "none";

      setCardPosition2(parseInt(Card4.innerText) + 1);
      //   setCardPosition3(parseInt(Card4.innerText) + 2);
      //   setCardPosition(parseInt(Card4.innerText) + 3);

      Card4.removeEventListener("click", card3ClickEvent);

      setTimeout(() => {
        Card1.style.display = "block";
        Card4.addEventListener("click", card3ClickEvent);
      }, 1000);
      //
    } else if (parseFloat(getComputedStyle(Card2).left.slice(0, -2)) < 0) {
      console.log("2");
      Card1.style.left = "50%";
      Card2.style.left = "150%";
      Card3.style.left = "-50%";
      Card2.style.display = "none";

      //   setCardPosition2(parseInt(Card4.innerText) + 1);
      setCardPosition3(parseInt(Card4.innerText) + 2);
      //   setCardPosition(parseInt(Card4.innerText) + 3);

      Card4.removeEventListener("click", card3ClickEvent);
      setTimeout(() => {
        Card2.style.display = "block";
        Card4.addEventListener("click", card3ClickEvent);
      }, 1000);
      //
    } else {
      console.log("3");
      Card1.style.left = "-50%";
      Card2.style.left = "50%";
      Card3.style.left = "150%";
      Card3.style.display = "none";

      //   setCardPosition2(parseInt(Card4.innerText) + 1);
      //   setCardPosition3(parseInt(Card4.innerText) + 2);
      setCardPosition(parseInt(Card4.innerText) + 3);

      Card4.removeEventListener("click", card3ClickEvent);

      setTimeout(() => {
        Card3.style.display = "block";
        Card4.addEventListener("click", card3ClickEvent);
      }, 1000);
    }
    // console.log(cardPosition);
  };

  useEffect(() => {
    dispatch({ type: MATCHING_RANDOM_MATCHING_GET_REQUEST });
    // console.log("에에에엥??");
    const Card4 = document.getElementById("test4");
    Card4.addEventListener("click", card3ClickEvent);
  }, []);

  return (
    <Slider1 sliderNum={sliderNum} id="slide3">
      <Card1 card1Location={card1Location} id="test1">
        {test[cardPosition3]} card1 cardPosition3{" "}
        {randomMatchingReducer.randomMatchingInfo[cardPosition3] !== undefined
          ? randomMatchingReducer.randomMatchingInfo[cardPosition3].id
          : ""}
      </Card1>
      <Card2
        card2Location={card2Location}
        id="test2"
        onClick={() => {
          //   console.log(randomMatchingReducer);
          //   console.log();
          //   console.log("hello");
        }}
      >
        {test[cardPosition]} card2 cardPosition{" "}
        {randomMatchingReducer.randomMatchingInfo[cardPosition] !== undefined
          ? randomMatchingReducer.randomMatchingInfo[cardPosition].id
          : ""}
      </Card2>
      <Card3 card3Location={card3Location} id="test3">
        {test[cardPosition2]} card3 cardPosition2{" "}
        {randomMatchingReducer.randomMatchingInfo[cardPosition2] !== undefined
          ? randomMatchingReducer.randomMatchingInfo[cardPosition2].id
          : ""}
      </Card3>
      <SliderButton id="test4">{cardPosition}</SliderButton>

      <EditEmployerBookmarkButton
        onClick={() => {
          var maxNum = Math.max(cardPosition, cardPosition2, cardPosition3);

          //   alert(maxNum);
          dispatch({
            type: EMPLOYER_BOOKMARK_EDIT_REQUEST,
            payload: {
              employerReducer: employerReducer,
              userID: randomMatchingReducer.randomMatchingInfo[maxNum].id,
            },
          });
        }}
      ></EditEmployerBookmarkButton>
    </Slider1>
  );
};
