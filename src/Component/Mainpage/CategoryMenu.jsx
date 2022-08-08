/** @format */
import styled from "@emotion/styled";
import { useParams } from "react-router";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const CategoryMenuJsx = styled.div`
  width: 100%;
  max-width: 1920px;
  height: 178px;
  display: flex;
  align-items: center;
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
    let link = document.location.href.split("/");
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
