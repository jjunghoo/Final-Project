/** @format */
// import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { Link } from "react-router-dom";
// import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { RandomMatchingleft } from "./RandomMatchingleft";
import { RandomMatchingUI } from "./RandomMatchingUI";

const SliderArea = styled.div`
  height: 720px;
  width: 100%;
  background-color: white;
  border: 1px solid black;
  position: relative;
  box-sizing: border-box;
  display: flex;
`;

const SliderButton = styled.button`
  height: 100px;
  width: 100px;
  background-color: black;
  left: 100%;
  top: 50%;
  transform: translate(-100%, -50%);
  box-sizing: border-box;
  transition: all ease 2s 0s;
`;

export const RandomMatching = () => {
  const [sliderNum, setSliderNum] = useState(0);
  const slides = ["#33a", "#8c9", "#f3e074"];

  const ClickButtonEvent = () => {
    if (sliderNum < 2) {
      setSliderNum(sliderNum + 1);
    }
  };

  return (
    <SliderArea>
      <RandomMatchingleft></RandomMatchingleft>
      <RandomMatchingUI className="matching-UI"></RandomMatchingUI>
    </SliderArea>
  );
};
