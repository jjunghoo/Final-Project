/** @format */
/** @format */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProjectAdd from "./image/ProjectAdd.svg";
import CMPLTD from "./image/cmpltd.svg";
import { Link } from "react-router-dom";

const ManagerLectureCardJsx = styled(Link)`
  display: block;
  width: 100%;
  height: 205px;
  // border: 1px solid black;
  background: tomato;

  box-sizing: border-box;
  background: #ffffff;
  box-shadow: 0px 2.34167px 2.34167px rgba(0, 0, 0, 0.25);
  border-radius: 5.85417px;
  margin: 22px 0px;
  padding: 24px 0px 20px 20px;
  position: relative;
`;

const ManagerLectureCardTextJsx = styled.div`
  text-align: left;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  text-transform: uppercase;

  color: #222222;
`;

const ManagerLectureCardCmpltd = styled.img`
  position: absolute;
  bottom: 24px;
  left: 20px;
`;

export const ManagerLectureCard = ({ cardInfo }) => {
  const cardBookmarkInfo = useSelector(
    (state) => state.employerReducer.bookmarkInfo
  );

  const params = useParams();
  const employer = useSelector((state) => state.employerReducer);

  const dispatch = useDispatch();
  // useEffect(()=>{
  //   console.log(cardInfo)
  // })
  return (
    <ManagerLectureCardJsx
      to={`/manager/${cardInfo.id}`}
      onClick={() => {
        console.log(cardInfo.lectureInfo);
      }}
    >
      <ManagerLectureCardTextJsx>
        {cardInfo.lectureInfo["과목명"]}
      </ManagerLectureCardTextJsx>
      <ManagerLectureCardTextJsx>
        {cardInfo.lectureInfo["교육 기간"]}
      </ManagerLectureCardTextJsx>
      <ManagerLectureCardTextJsx>
        {"수료 " + cardInfo.studentList.length + "명"}
      </ManagerLectureCardTextJsx>
      <ManagerLectureCardCmpltd src={CMPLTD}></ManagerLectureCardCmpltd>
    </ManagerLectureCardJsx>
  );
};
