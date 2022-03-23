/** @format */
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { PROJECT_SHEET_INFO_GET_REQUEST } from "../../redux/type";

// import { Link } from "react-router-dom";

const GetDataSheetBox = styled.div`
  width: 500px;
  max-width: 500px;
  height: 500px;
  font-size: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: tomato;
`;

export const GetDataFromSpreadSheet = () => {
  const dispatch = useDispatch();
  return (
    <GetDataSheetBox
      onClick={() => {
        dispatch({ type: PROJECT_SHEET_INFO_GET_REQUEST });
      }}
      className="User-Page"
    >
      데이터를 받아오자
    </GetDataSheetBox>
  );
};
