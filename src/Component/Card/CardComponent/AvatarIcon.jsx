/** @format */
// import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { Link } from "react-router-dom";
// import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import icon from "./img/Sample.svg";
import icon1 from "./img/Sample-1.svg";
import icon2 from "./img/Sample-2.svg";
import icon3 from "./img/Sample-3.svg";
import icon4 from "./img/Sample-4.svg";
import icon5 from "./img/Sample-5.svg";
import icon6 from "./img/Sample-6.svg";
import icon7 from "./img/Sample-7.svg";
import icon8 from "./img/Sample-8.svg";
import icon9 from "./img/Sample-9.svg";
import icon10 from "./img/Sample-10.svg";
import icon11 from "./img/Sample-11.svg";
import icon12 from "./img/Sample-12.svg";
import icon13 from "./img/Sample-13.svg";
const Icon = styled.div`
  // background-color: ${(props) => props.IconBGColor};
  // background-color: black;
  width: 160px;
  height: 160px;
  //   position: absolute;
  //   left: 50%;
  //   transform: translate(-50%, 0%);
  //   top: 80px;
  //   margin-top: 80px;
  border-radius: 50%;
  box-shadow: inset 0px 0px 3.19616px rgba(0, 0, 0, 0.25);
`;
const ProfileImg = styled.div``;
export const AvartarIcon = ({ IconBGColor, cardInfo }) => {
  return <Icon IconBGColor={IconBGColor}></Icon>;
};
