/** @format */
// import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { Link } from "react-router-dom";
// import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import homeLogo from "./img/LOGO-CMPLTD.svg";
import logIn from "./img/logIn.svg";
import issue from "./img/issue.svg";
import { useDispatch } from "react-redux";
import { EMPLOYER_INFO_GET_REQUEST } from "../../redux/type";
import { Link } from "react-router-dom";

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

const LoginLink = styled(Link)`
  // width: 80px;
  // margin-right: 8px;
`;
const LoginImg = styled.img`
  width: 80px;
  margin-right: 8px;
`;
export const MainPageHeader = () => {
  const dispatch = useDispatch();
  return (
    <HeaderDiv id="main-page-header">
      <LoginLink to="/">
        <HomeLogo src={homeLogo} />
      </LoginLink>
      <LogInWrap>
        <LoginImg src={issue} />
        <LoginImg
          onClick={() => {
            console.log("hello");
            dispatch({
              type: EMPLOYER_INFO_GET_REQUEST,
              payload: "em1",
            });
          }}
          src={logIn}
        />
      </LogInWrap>
    </HeaderDiv>
  );
};
