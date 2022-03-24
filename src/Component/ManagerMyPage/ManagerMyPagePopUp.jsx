/** @format */
/** @format */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProjectAdd from "./image/ProjectAdd.svg";
import { ManagerLectureCard } from "./ManagerLectureCard";
import xLogo from "./image/x.svg";
import { PROJECT_SHEET_INFO_GET_REQUEST } from "../../redux/type";

const ManagerMyPagePopUpJsx = styled.div`
  position: absolute;
  width: 700px;
  height: 500px;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  left: 50%;
  top: 50vh;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  height: 70px;
  //   background: black;

  color: #222222;
  display: flex;
  padding: 20px 0px 12px 39px;
  box-sizing: border-box;
  justify-content: space-between;

  & > div {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    // text-transform: uppercase;
    align-items: center;
  }
  border-bottom: 0.7px solid #cccccc;
  position: relative;
`;

const Content = styled.div`
  height: 100%;

  //   background: black;
  padding: 40px 40px 20px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.input`
  display: block;
  height: 137px;

  background: #fafafa;
  border-radius: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 20px 20px;
  background: #fafafa;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  test-align: center;
  vertical-align: top;

  // text-transform: uppercase;

  color: #423232;

  border: none;
  &:focus {
    outline: none;
  }
`;

const XLogo = styled.img`
  position: absolute;
  width: 18px;
  height: 18px;
  right: 29px;
  top: 22px;
`;

const AddProjectBtn = styled.div`
  position: absolute;
  width: 171px;
  height: 45px;
  right: 38px;
  top: 424px;

  background: #ff6a00;
  border-radius: 10px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  //   line-height: 29px;

  color: #ffffff;
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  //   vertical-align: center;
`;
export const ManagerMyPagePopUp = ({ setPopUp, setPopMsg }) => {
  const dispatch = useDispatch();
  return (
    <ManagerMyPagePopUpJsx>
      <Title>
        <div>신규프로젝트 생성하기</div>
        <XLogo
          src={xLogo}
          onClick={() => {
            setPopUp(0);
            setPopMsg("");
          }}
        />
      </Title>
      <Content>
        <ContentBox
          // autocomplete="off"
          id="sheetID"
          placeholder="엑셀의 상세주소를 입력해주세요"
        ></ContentBox>
        <ContentBox
          // autocomplete="off"
          id="sheetURL"
          placeholder="엑셀의 링크를 복사하여 입력해주세요"
        ></ContentBox>
      </Content>
      <AddProjectBtn
        onClick={() => {
          let sheetID = document.getElementById("sheetID");
          let sheetURL = document.getElementById("sheetURL");
          console.log(sheetID.value, sheetURL.value);
          dispatch({
            type: PROJECT_SHEET_INFO_GET_REQUEST,
            payload: { urlKey: sheetID.value, url: sheetURL.value },
          });
        }}
      >
        프로젝트 추가
      </AddProjectBtn>
    </ManagerMyPagePopUpJsx>
  );
};
