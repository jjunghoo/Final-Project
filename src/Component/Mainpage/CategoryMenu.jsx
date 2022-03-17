/** @format */
// import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { Link } from "react-router-dom";
// import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import homeLogo from "./img/LOGO-CMPLTD.svg";
import logIn from "./img/logIn.svg";
import issue from "./img/issue.svg";

const CategoryMenuJsx = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 178px;
  display: flex;
  align-items: center;
  //   background-color: tomato;
`;

const CategoryJsx = styled.div`
  width: 20%;

  font-family: "Peace Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 42px;
  /* identical to box height */

  text-transform: uppercase;

  color: #222222;
`;
export const CategoryMenu = () => {
  return (
    <CategoryMenuJsx id="main-page-header">
      <CategoryJsx>ALL</CategoryJsx>
      <CategoryJsx>PROGRAMMING</CategoryJsx>
      <CategoryJsx>DESIGN</CategoryJsx>
      <CategoryJsx>DATA SCIENCE</CategoryJsx>
      <CategoryJsx>MARKETING</CategoryJsx>
    </CategoryMenuJsx>
  );
};
