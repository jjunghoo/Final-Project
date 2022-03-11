/** @format */
// import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { Link } from "react-router-dom";
// import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { Slide1 } from "./Slide1";
import { Slide2 } from "./Slide2";
import { Slide3 } from "./Slide3";

const SliderArea = styled.div`
  height: 720px;
  width: 100%;
  background-color: white;
  border: 1px solid black;
  position: relative;
  // overflow: hidden;
  box-sizing: border-box;
`;

const SliderButton = styled.button`
  height: 100px;
  width: 100px;
  position: absolute;
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
    <SliderArea className="slider-area">
      <Slide1 sliderNum={sliderNum}></Slide1>
      <Slide2 sliderNum={sliderNum}></Slide2>
      <Slide3 sliderNum={sliderNum}></Slide3>
      {sliderNum < 2 ? (
        <SliderButton onClick={ClickButtonEvent}></SliderButton>
      ) : (
        ""
      )}
    </SliderArea>
  );
};
