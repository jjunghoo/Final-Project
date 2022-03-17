/** @format */
// import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { Link } from "react-router-dom";
// import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import bottomBannerImg1 from "./img/bottomBanner1.svg";
import bottomBannerImg2 from "./img/bottomBanner2.svg";
import bottomBannerImg3 from "./img/bottomBanner3.svg";

const BottomBannerJsx = styled.div`
  min-height: 100px;
  //   background-color: blue;
  display: flex;

  box-sizing: border-box;
  margin: 40px 160px 0px 160px;

  justify-content: space-between;
  flex-wrap: wrap;
`;

const BannerImg1 = styled.img`
  width: 100%;
`;
const BannerImg2 = styled.img``;

const BannerImg2Wrap = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  //   background-color: red;
  justify-content: space-between;
`;

export const BottomBanner = () => {
  const [sliderNum, setSliderNum] = useState(0);

  return (
    <BottomBannerJsx className="slider-area">
      <BannerImg1 src={bottomBannerImg3}></BannerImg1>

      <BannerImg2Wrap>
        <BannerImg2 src={bottomBannerImg1}></BannerImg2>
        <BannerImg2 src={bottomBannerImg2}></BannerImg2>,
      </BannerImg2Wrap>
    </BottomBannerJsx>
  );
};
