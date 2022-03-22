/** @format */
// import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { Link } from "react-router-dom";
// import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MATCHING_RANDOM_MATCHING_GET_REQUEST,
  MATCHING_RANDOM_MATCHING_GET_SUCCESS,
  EMPLOYER_BOOKMARK_EDIT_REQUEST,
} from "../../redux/type";
const Slider1 = styled.div`
  height: 720px;
  width: 37%;
  max-width: 1920px;
  background-color: blue;
  box-sizing: border-box;
`;
export const RandomMatchingleft = ({ sliderNum }) => {
  const [test, setTest] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);

  const randomMatchingReducer = useSelector((state) => state.matchingReducer);
  const employerReducer = useSelector((state) => state.employerReducer);

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return <Slider1>dsdsadsadas</Slider1>;
};
