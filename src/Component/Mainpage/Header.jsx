/** @format */
// import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { Link } from "react-router-dom";
// import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import homeLogo from "./img/LOGO-CMPLTD.svg";
import logIn from "./img/logIn.svg";
import issue from "./img/issue.svg";

const HeaderDiv = styled.div`
  height: 128px;
  width: 100%;
  max-width: 1920px;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HomeLogo = styled.img`
  width: 299px;
  max-width: 1920px;
  background-color: white;
  box-sizing: border-box;
  margin-left: 160px;
`;

const LogInWrap = styled.div`
  margin-right: 152px;
`;
const LoginImg = styled.img`
  width: 80px;
  margin-right: 8px;
`;
export const MainPageHeader = () => {
  return (
    <HeaderDiv id="main-page-header">
      <HomeLogo src={homeLogo} />
      <LogInWrap>
        <LoginImg src={issue} />
        <LoginImg src={logIn} />
      </LogInWrap>
    </HeaderDiv>
  );
};
