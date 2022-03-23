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
import whiteStar from "./image/white-star.svg";
import styled from "@emotion/styled";
import { AvartarIcon } from "./CardComponent/AvatarIcon";
import { BadgeBox } from "./CardComponent/BadgeBox";
import { useEffect, useState } from "react";

import bgimg from "./image/card-back-bgimg.svg";
import showDetailImg from "./image/show_Detail_Img.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EMPLOYER_BOOKMARK_EDIT_REQUEST } from "../../redux/type";

const FlipCardBackJsx = styled.div`
  height: 590px;
  width: 372px;
  min-width: 372px;
  padding-left: 33px;
  //   display: flex;
  //   flex-direction:column

  background-color: ${(props) => props.color};
  margin: 0px 5px 0px 5px;
  box-sizing: border-box;
  //   border: 10px solid ${(props) => props.color};
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  transition: transform 0.8s;
  transform-style: preserve-3d;
  a {
    z-index: 999;
  }
`;

const BgImg = styled.img`
  position: absolute;
  z-index: 3;
  top: 290px;
  left: 70px;
  //   right: 20px;
  //   top: 20px;
  opacity: 0.25;
`;
const TeamEvaluateWrap = styled.div`
  //   background-color: black;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 40px;
  margin-left: 9px;
  z-index: 5;
`;

const TeamEvaluateJsx = styled.div`
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.02em;
  text-transform: capitalize;

  color: ${(props) => props.color};
`;

const CommentJsx = styled.div`
  font-family: "Pretendard Variable";
  font-style: normal;
  z-index: 5;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #ffffff;
  margin: 55px 33px 13px 0px;

  color: ${(props) => props.color};
`;

const CommentNameJsx = styled.div`
  text-align: left;
  z-index: 5;
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;

  color: #ffffff;

  color: ${(props) => props.color};
`;

const StyledShowDetailImg = styled.img`
  width: 143px;
  height: 26px;
  position: absolute;
  right: 40px;
  bottom: 24.83px;
`;
const teamEvaluate = (num, index, color) => {
  //   console.log(num);
  switch (num) {
    case "능숙한발표왕":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          # 능숙한<b>_발표왕</b>
        </TeamEvaluateJsx>
      );
    case "피피티장인":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          # <b>피피티_</b>장인
        </TeamEvaluateJsx>
      );
    case "유창한말솜씨":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          # 유창한<b>_말솜씨</b>
        </TeamEvaluateJsx>
      );
    case "아이디어부자":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          # <b>아이디어_</b>부자
        </TeamEvaluateJsx>
      );
    case "시간약속정확":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          # <b>시간_</b>약속_정확
        </TeamEvaluateJsx>
      );
    case "자기주도학습자":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          # <b>자기주도_</b>학습자
        </TeamEvaluateJsx>
      );
    case "우리조장님":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          # 우리_<b>조장</b>님
        </TeamEvaluateJsx>
      );
    case "린앤애자일":
      return <TeamEvaluateJsx color={color}># 린_앤_애자일</TeamEvaluateJsx>;
    case "팀의백과사전":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          # 팀의<b>_백과사전</b>
        </TeamEvaluateJsx>
      );
    case "멀티플래이어":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          # <b>멀티</b>플레이어
        </TeamEvaluateJsx>
      );
    case "성장형캐릭터":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          #<b>성장</b>형_캐릭터
        </TeamEvaluateJsx>
      );
    case "조용한연구자":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          # 조용한<b>_연구</b>자
        </TeamEvaluateJsx>
      );
    case "친화력대박":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          # <b>친화력_</b>대박
        </TeamEvaluateJsx>
      );
    case "온화한조정자":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          # 온화한<b>_조정</b>자
        </TeamEvaluateJsx>
      );
    case "무한긍정_에너지":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          # <b>무한긍정_</b>에너지
        </TeamEvaluateJsx>
      );
    case "사회생활만렙":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          <b>사회생활_</b>만렙
        </TeamEvaluateJsx>
      );
    case "데이터마스터":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          <b>데이터_</b>마스터
        </TeamEvaluateJsx>
      );
    case "디벨롭마스터":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          <b>디벨롭_</b>마스터
        </TeamEvaluateJsx>
      );
    case "디자인마스터":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          <b>디자인_</b>마스터
        </TeamEvaluateJsx>
      );
    case "마케팅마스터":
      return (
        <TeamEvaluateJsx color={color} key={index}>
          <b>마케팅_</b>마스터
        </TeamEvaluateJsx>
      );

    default:
      return null;
  }
};

const Star = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
  // background: tomato;
`;
const returnStarColor = (bookmarkedInfo, color, onClickedEvent) => {
  if (bookmarkedInfo === 0) {
    return <Star onClick={onClickedEvent} src={whiteStar} />;
  } else if (color === "#FFA800") {
    return <Star onClick={onClickedEvent} src={yellowStar} />;
  } else if (color === "#FF5050") {
    return <Star onClick={onClickedEvent} src={redStar} />;
  } else if (color === "#11C0CB") {
    return <Star onClick={onClickedEvent} src={blueStar} />;
  } else if (color === "#BA6DF6") {
    return <Star onClick={onClickedEvent} src={purpleStar} />;
  }
};
export const FlipCardBack = ({ cardInfo, cardNum, color }) => {
  const [bookmarkedInfo, setBookmarkedInfo] = useState(0);
  const [testArray, setTestArray] = useState([]);
  const cardBookmarkInfo = useSelector(
    (state) => state.employerReducer.bookmarkInfo
  );
  const employer = useSelector((state) => state.employerReducer);

  const employerInfo = useSelector((state) => state.employerReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    let arr = [];

    for (let number in cardInfo.teamEvaluate) {
      arr.push([number, cardInfo.teamEvaluate[number]]);
    }

    arr.sort(function (a, b) {
      return b[1] - a[1];
    });
    arr = arr.slice(0, 4);
    setTestArray(arr);
  }, []);

  const onClickedEvent = () => {
    dispatch({
      type: EMPLOYER_BOOKMARK_EDIT_REQUEST,
      payload: { id: employer.id, userID: cardInfo.id },
    });
  };
  useEffect(() => {
    // console.log(employerInfo.bookmarkInfo);
    if (employerInfo.bookmarkInfo) {
      if (employerInfo.bookmarkInfo.indexOf(cardInfo.id) > -1) {
        setBookmarkedInfo(1);
      } else {
        setBookmarkedInfo(0);
      }
    }
  }, [employerInfo.bookmarkInfo]);

  return (
    <FlipCardBackJsx color={color} className="flip-back-card">
      <TeamEvaluateWrap>
        {returnStarColor(bookmarkedInfo, color, onClickedEvent)}

        {testArray.map((item, index) => {
          let textColor = "white";
          if (color === "#11C0CB") {
            textColor = "#005358";
          } else if (color === "#BA6DF6") {
            textColor = "#57009a";
          } else if (color === "#FFA800") {
            textColor = "#8c2a00";
          } else {
            textColor = "#8b0000";
          }
          // console.log(item);
          // return "";
          return teamEvaluate(item[0], index, textColor);
        })}
      </TeamEvaluateWrap>
      <CommentJsx>
        {" "}
        {cardInfo.comment[0] ? cardInfo.comment[0][2] : ""}
      </CommentJsx>
      <CommentNameJsx>
        {cardInfo.comment[0] ? cardInfo.comment[0][1] : ""}
      </CommentNameJsx>
      <BgImg src={bgimg} />
      <Link to={`/detailPage/${cardInfo.id}`}>
        <StyledShowDetailImg
          src={showDetailImg}
          alt="상세 페이지 이동 이미지"
        />
      </Link>
    </FlipCardBackJsx>
  );
};
