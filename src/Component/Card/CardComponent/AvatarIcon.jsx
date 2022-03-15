/** @format */
// import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { Link } from "react-router-dom";
// import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
const Icon = styled.div`
  background-color: ${(props) => props.IconBGColor};
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

export const AvartarIcon = ({ IconBGColor }) => {
  return <Icon IconBGColor={IconBGColor}></Icon>;
};
