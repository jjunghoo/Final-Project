/** @format */
// import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { Link } from "react-router-dom";
// import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
export const Slide2 = ({ sliderNum }) => {
  const Slider1 = styled.div`
    height: 720px;
    width: 100%;
    max-width: 1920px;
    background-color: green;
    position: absolute;
    left: ${sliderNum * -100 + 100}%;
    box-sizing: border-box;
  `;

  return <Slider1 id="slide2"></Slider1>;
};
