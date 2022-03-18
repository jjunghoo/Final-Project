/** @format */
// import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { Link } from "react-router-dom";
// import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import homeLogo from "./img/LOGO-CMPLTD.svg";
import logIn from "./img/logIn.svg";
import issue from "./img/issue.svg";
import { useParams } from "react-router";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MATCHING_LIST_ARRAY_GET_REQUEST } from "../../redux/type";
import { useEffect, useState } from "react";
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

const LinkDiv = styled(Link)`
  width: 20%;

  font-family: "Peace Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 42px;
  /* identical to box height */

  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => {
    // console.log(props.param["*"], props.category);
    if (props.param["*"] === props.category) {
      return "#FF6A00";
    } else {
      return "#222222";
    }
  }};
  position: relative;
  &:after {
    display: ${(props) => {
      if (props.param["*"] === props.category) {
        return "block";
      } else {
        return "none";
      }
    }};
    position: absolute;
    left: 0%;
    width: 100%;
    top: 45px;
    height: 5px;
    background-color: #ff6a00;
    content: " ";
  }
`;

export const CategoryMenu = () => {
  const dispatch = useDispatch();
  const realParams = useParams();
  // const

  useEffect(() => {
    var link = document.location.href.split("/");
    console.log(realParams);
  }, []);

  return (
    <CategoryMenuJsx id="main-page-header">
      <CategoryJsx>
        <LinkDiv
          param={realParams}
          category={"category/all"}
          to="/category/all"
        >
          ALL
        </LinkDiv>
      </CategoryJsx>
      <CategoryJsx>
        <LinkDiv
          param={realParams}
          category={"category/programming"}
          to="/category/programming"
        >
          PROGRAMMING
        </LinkDiv>
      </CategoryJsx>
      <CategoryJsx>
        <LinkDiv
          param={realParams}
          category={"category/design"}
          to="/category/design"
        >
          DESIGN
        </LinkDiv>
      </CategoryJsx>
      <CategoryJsx>
        <LinkDiv
          param={realParams}
          category={"category/dataScience"}
          to="/category/dataScience"
        >
          DATA SCIENCE
        </LinkDiv>
      </CategoryJsx>
      <CategoryJsx>
        <LinkDiv
          param={realParams}
          category={"category/marketing"}
          to="/category/marketing"
        >
          MARKETING
        </LinkDiv>
      </CategoryJsx>
    </CategoryMenuJsx>
  );
};
