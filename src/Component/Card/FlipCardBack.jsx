/** @format */
// import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { Link } from "react-router-dom";
// import { jsx, css } from "@emotion/react";
import blueStar from "./image/blue-star.svg";
import yellowStar from "./image/yellow-star.svg";
import greyStar from "./image/grey-star.svg";
import redStar from "./image/red-star.svg";
import purpleStar from "./image/purple-star.svg";
import styled from "@emotion/styled";
import { AvartarIcon } from "./CardComponent/AvatarIcon";
import { BadgeBox } from "./CardComponent/BadgeBox";
import { useState } from "react";

const FlipCardBackJsx = styled.div`
  height: 590px;
  width: 372px;
  min-width: 372px;

  background-color: #f8f8f8;
  margin: 0px 5px 0px 5px;
  box-sizing: border-box;
  border: 10px solid ${(props) => props.color};
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const teamEvaluate = (num, index) => {
  switch (num) {
    case "능숙한발표왕":
      return (
        <div key={index}>
          # 능숙한<b>_발표왕</b>
        </div>
      );
    case "피피티장인":
      return (
        <div key={index}>
          # <b>피피티_</b>장인
        </div>
      );
    case "유창한말솜씨":
      return (
        <div key={index}>
          # 유창한<b>_말솜씨</b>
        </div>
      );
    case "아이디어부자":
      return (
        <div key={index}>
          # <b>아이디어_</b>부자
        </div>
      );
    case "시간약속정확":
      return (
        <div key={index}>
          # <b>시간_</b>약속_정확
        </div>
      );
    case "자기주도학습자":
      return (
        <div key={index}>
          # <b>자기주도_</b>학습자
        </div>
      );
    case "우리조장님":
      return (
        <div key={index}>
          # 우리_<b>조장</b>님
        </div>
      );
    case "린앤애자일":
      return <div># 린_앤_애자일</div>;
    case "팀의백과사전":
      return (
        <div key={index}>
          # 팀의<b>_백과사전</b>
        </div>
      );
    case "멀티플래이어":
      return (
        <div key={index}>
          # <b>멀티</b>플레이어
        </div>
      );
    case "성장형캐릭터":
      return (
        <div key={index}>
          #<b>성장</b>형_캐릭터
        </div>
      );
    case "조용한연구자":
      return (
        <div key={index}>
          # 조용한<b>_연구</b>자
        </div>
      );
    case "친화력대박":
      return (
        <div key={index}>
          # <b>친화력_</b>대박
        </div>
      );
    case "온화한조정자":
      return (
        <div key={index}>
          # 온화한<b>_조정</b>자
        </div>
      );
    case "무한긍정_에너지":
      return (
        <div key={index}>
          # <b>무한긍정_</b>에너지
        </div>
      );
    case "사회생활만렙":
      return (
        <div key={index}>
          <b>사회생활_</b>만렙
        </div>
      );
    case "데이터마스터":
      return (
        <div key={index}>
          <b>데이터_</b>마스터
        </div>
      );
    case "디벨롭마스터":
      return (
        <div key={index}>
          <b>디벨롭_</b>마스터
        </div>
      );
    case "디자인마스터":
      return (
        <div key={index}>
          <b>디자인_</b>마스터
        </div>
      );
    case "마케팅마스터":
      return (
        <div key={index}>
          <b>마케팅_</b>마스터
        </div>
      );

    default:
      return null;
  }
};

export const FlipCardBack = ({ bookmarkedInfo, cardNum, color }) => {
  const [testArray, setTestArray] = useState([
    "유창한말솜씨",
    "피피티장인",
    "능숙한발표왕",
  ]);
  return (
    <FlipCardBackJsx className="flip-back-card">
      {testArray.map((item, index) => {
        // console.log(item);
        // return "";
        return teamEvaluate(item, index);
      })}
    </FlipCardBackJsx>
  );
};
