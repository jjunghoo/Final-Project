/** @format */

import { arrayMove } from "@dnd-kit/sortable";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";

import { store } from "../../index";

import checkImg from "./image/checkSign.svg";
import bgimg from "./image/card-back-bgimg.svg";
import {
  EMPLOYER_BOOKMARK_EDIT,
  EMPLOYER_BOOKMARK_EDIT_REQUEST,
  EMPLOYER_INFO_GET_REQUEST,
  MATCHING_LIST_ARRAY_GET_REQUEST,
  MATCHING_RANDOM_MATCHING_GET_FAILURE,
  MATCHING_RANDOM_MATCHING_GET_REQUEST,
} from "../../redux/type";
import { FlipCard } from "./FlipCard";
import { useEffect, useState } from "react";
//
//
//
//
const FlipCardWrap = styled.div`
  max-width: 1920px;
  // background-color: yellow;
  min-height = 100vh;
  display: flex;
  position: relative;
  justify-content: start;
  margin: 0px 0px 50px 0px;
  padding: 50px 0px 50px 0px;
  flex-wrap: wrap;
`;

const GetStudendInfo = styled.div`
  & > div > div {
    width: 100px;
    height: 100px;
    background-color: white;
    margin-top: 10px;
  }
`;

const HashTagWrap = styled.div`
  // background: green;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 70px;
`;
const HashTagTitle = styled.div`
  margin-top: 84px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  /* identical to box height */

  text-transform: uppercase;

  color: #222222;
  margin-bottom: 40px;
`;
const HashTagIconWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 14px 0px;
  box-sizing: border-box;
`;
const HashTagIcon = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: ${(props) => {
    if (props.info) {
      if (props.info[props.logo] == props.num) {
        console.log(props.logo, props.info[props.logo], props.num);
        return "white";
      } else {
        return "#ff6a00";
      }
    }
  }};
  background: ${(props) => {
    if (props.info) {
      if (props.info[props.logo] == props.num) {
        console.log(props.logo, props.info[props.logo], props.num);
        return "#ff6a00";
      } else {
        return "white";
      }
    }
  }};
  display: flex;
  justify-content: center;
  margin: 0px 20px;
  padding: 8px 16px;

  border: 3px solid #ff6a00;
  box-sizing: border-box;
  border-radius: 2222px;
`;
const TotalPeople = styled.div``;
const CheckImg = styled.img`
  width: 34px;
  height: 34px;
`;

export const FlipCardWrapJSX = () => {
  const cardArrayInfo = useSelector((state) => state.matchingReducer.allInfo);
  const cardBookmarkInfo = useSelector(
    (state) => state.employerReducer.bookmarkInfo
  );

  const [colorArray, setColorArray] = useState([]);
  const [cardArray, setCardArray] = useState([]);
  const [cardHashTag, setCardHashTag] = useState({
    LogoAttendance: 0,
    LogoCollector: 0,
    LogoComplete: 0,
    LogoExperienced: 0,
    LogoHackathon: 0,
    LogoMento: 0,
    LogoRecommanded: 0,
    LogoSnsStar: 0,
    LogoMinority: 0,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cardArrayInfo) {
      dispatch({
        type: MATCHING_LIST_ARRAY_GET_REQUEST,
        payload: null,
      });
    }
  }, []);
  useEffect(() => {
    console.log(cardArrayInfo, "cardArrayInfo");
    // console.log(cardArrayInfo[0].badge, "badge");
    let localCardArrayInfo = [];
    let localColorArray = [];
    let flag = 1;
    for (let cnt = 0; cnt < cardArrayInfo.length; cnt++) {
      if (cardHashTag.LogoAttendance !== 0) {
        //카드 해시태그를 비교해라!!!
        if (
          cardHashTag.LogoAttendance === cardArrayInfo[cnt].badge.LogoAttendance
        ) {
          flag = 1;
          // console.log(
          //   cardHashTag.LogoAttendance,
          //   cardArrayInfo[cnt].badge.LogoAttendance,
          //   "같음ㅁㅁㅁ",
          //   cnt,
          //   cardHashTag,
          //   cardArrayInfo[cnt].badge
          // );
        } else {
          flag = 0;
          // console.log(
          //   cardHashTag.LogoAttendance,
          //   cardArrayInfo[cnt].badge.LogoAttendance,
          //   "다름ㅁㅁㅁ",
          //   cnt,
          //   cardHashTag,
          //   cardArrayInfo[cnt].badge
          // );
        }
      }
      if (cardHashTag.LogoCollector !== 0) {
        if (
          cardHashTag.LogoCollector === cardArrayInfo[cnt].badge.LogoCollector
        ) {
        } else {
          flag = 0;
        }
      }
      if (cardHashTag.LogoComplete !== 0) {
        if (
          cardHashTag.LogoComplete === cardArrayInfo[cnt].badge.LogoComplete
        ) {
        } else {
          flag = 0;
        }
      }
      if (cardHashTag.LogoExperienced !== 0) {
        if (
          cardHashTag.LogoExperienced ===
          cardArrayInfo[cnt].badge.LogoExperienced
        ) {
        } else {
          flag = 0;
        }
      }
      if (cardHashTag.LogoHackathon !== 0) {
        if (
          cardHashTag.LogoHackathon === cardArrayInfo[cnt].badge.LogoHackathon
        ) {
        } else {
          flag = 0;
        }
      }
      if (cardHashTag.LogoMento !== 0) {
        if (cardHashTag.LogoMento === cardArrayInfo[cnt].badge.LogoMento) {
        } else {
          flag = 0;
        }
      }
      if (cardHashTag.LogoSnsStar !== 0) {
        if (cardHashTag.LogoSnsStar === cardArrayInfo[cnt].badge.LogoSnsStar) {
        } else {
          flag = 0;
        }
      }
      if (cardHashTag.LogoMinority !== 0) {
        if (
          cardHashTag.LogoMinority === cardArrayInfo[cnt].badge.LogoMinority
        ) {
          console.log(
            "같음",
            cardHashTag.LogoMinority,
            cardArrayInfo[cnt].badge.LogoMinority
          );
          flag = 1;
        } else {
          console.log(
            "다름",
            cardHashTag.LogoMinority,
            cardArrayInfo[cnt].badge.LogoMinority
          );
          flag = 0;
        }
      }
      if (flag !== 0) {
        let color = "#000000";
        console.log(cardArrayInfo[cnt]);
        if (cardArrayInfo[cnt].design === "1") {
          color = "#FFA800";
        } else if (cardArrayInfo[cnt].marketing === "1") {
          color = "#FF5050";
        } else if (cardArrayInfo[cnt].programming === "1") {
          color = "#BA6DF6";
        } else if (cardArrayInfo[cnt].dataScience === "1") {
          // eslint-disable-next-line no-unused-vars
          color = "#11C0CB";
        }
        localCardArrayInfo.push(cardArrayInfo[cnt]);
        localColorArray.push(color);
      }
    }
    console.log(localColorArray, localCardArrayInfo, "dddddddd");

    setColorArray(localColorArray);
    setCardArray(localCardArrayInfo);
  }, [cardArrayInfo, cardHashTag]);

  // const dispatch=useDispatch();

  return (
    <FlipCardWrap>
      <HashTagWrap>
        <HashTagTitle>우리회사를 위한 인재영입하기</HashTagTitle>
        <HashTagIconWrap onClick={console.log(cardHashTag, "klklklkl")}>
          <HashTagIcon
            logo={"LogoRecommanded"}
            info={cardHashTag}
            num="1"
            onClick={() => {
              let logoStr = "LogoRecommanded";
              let localCardHashTag = { ...cardHashTag };
              if (localCardHashTag[logoStr] !== 0) {
                localCardHashTag[logoStr] = 0;
              } else {
                localCardHashTag[logoStr] = 1;
              }
              // console.log("localCardHashTag", localCardHashTag);
              setCardHashTag(localCardHashTag);
            }}
          >
            {cardHashTag.LogoRecommanded === 1 ? (
              <CheckImg src={checkImg} />
            ) : (
              ""
            )}{" "}
            추천받음
          </HashTagIcon>
          <HashTagIcon
            logo={"LogoExperienced"}
            info={cardHashTag}
            num="1"
            onClick={() => {
              let logoStr = "LogoExperienced";
              let localCardHashTag = { ...cardHashTag };
              if (localCardHashTag[logoStr] !== 0) {
                localCardHashTag[logoStr] = 0;
              } else {
                localCardHashTag[logoStr] = 1;
              }
              setCardHashTag(localCardHashTag);
            }}
          >
            {cardHashTag.LogoExperienced === 1 ? (
              <CheckImg src={checkImg} />
            ) : (
              ""
            )}
            중고신입
          </HashTagIcon>
          <HashTagIcon
            logo={"LogoAttendance"}
            info={cardHashTag}
            num="2"
            onClick={() => {
              let logoStr = "LogoAttendance";
              let localCardHashTag = { ...cardHashTag };
              if (localCardHashTag[logoStr] === 2) {
                localCardHashTag[logoStr] = 0;
              } else if (localCardHashTag[logoStr] === 1) {
                localCardHashTag[logoStr] = 2;
              } else {
                localCardHashTag[logoStr] = 2;
              }
              setCardHashTag(localCardHashTag);
            }}
          >
            {" "}
            {cardHashTag.LogoAttendance === 2 ? (
              <CheckImg src={checkImg} />
            ) : (
              ""
            )}
            개근왕
          </HashTagIcon>
          <HashTagIcon
            logo={"LogoMinority"}
            info={cardHashTag}
            num="2"
            onClick={() => {
              let logoStr = "LogoMinority";
              let localCardHashTag = { ...cardHashTag };
              if (localCardHashTag[logoStr] === 1) {
                localCardHashTag[logoStr] = 2;
              } else if (localCardHashTag[logoStr] === 2) {
                localCardHashTag[logoStr] = 0;
              } else {
                localCardHashTag[logoStr] = 2;
              }
              setCardHashTag(localCardHashTag);
            }}
          >
            {" "}
            {cardHashTag.LogoMinority === 2 ? <CheckImg src={checkImg} /> : ""}
            일기당천
          </HashTagIcon>
          <HashTagIcon
            logo={"LogoAttendance"}
            info={cardHashTag}
            num="1"
            onClick={() => {
              let logoStr = "LogoAttendance";
              let localCardHashTag = { ...cardHashTag };
              if (localCardHashTag[logoStr] === 1) {
                localCardHashTag[logoStr] = 0;
              } else if (localCardHashTag[logoStr] === 2) {
                localCardHashTag[logoStr] = 1;
              } else {
                localCardHashTag[logoStr] = 1;
              }
              setCardHashTag(localCardHashTag);
            }}
          >
            {cardHashTag.LogoAttendance === 1 ? (
              <CheckImg src={checkImg} />
            ) : (
              ""
            )}
            출석체크
          </HashTagIcon>
          <HashTagIcon
            logo={"LogoMinority"}
            info={cardHashTag}
            num="1"
            onClick={() => {
              let logoStr = "LogoMinority";
              let localCardHashTag = { ...cardHashTag };
              if (localCardHashTag[logoStr] === 1) {
                localCardHashTag[logoStr] = 0;
              } else if (localCardHashTag[logoStr] === 2) {
                localCardHashTag[logoStr] = 1;
              } else {
                localCardHashTag[logoStr] = 1;
              }
              setCardHashTag(localCardHashTag);
            }}
          >
            {cardHashTag.LogoMinority === 1 ? <CheckImg src={checkImg} /> : ""}
            소수정예
          </HashTagIcon>
        </HashTagIconWrap>
        <HashTagIconWrap>
          <HashTagIcon
            logo={"LogoComplete"}
            info={cardHashTag}
            num="1"
            onClick={() => {
              let logoStr = "LogoComplete";
              let localCardHashTag = { ...cardHashTag };
              if (localCardHashTag[logoStr] !== 0) {
                localCardHashTag[logoStr] = 0;
              } else {
                localCardHashTag[logoStr] = 1;
              }
              setCardHashTag(localCardHashTag);
            }}
          >
            {cardHashTag.LogoComplete === 1 ? <CheckImg src={checkImg} /> : ""}
            COMPLETE
          </HashTagIcon>
          <HashTagIcon
            logo={"LogoSnsStar"}
            info={cardHashTag}
            num="1"
            onClick={() => {
              let logoStr = "LogoSnsStar";
              let localCardHashTag = { ...cardHashTag };
              if (localCardHashTag[logoStr] !== 0) {
                localCardHashTag[logoStr] = 0;
              } else {
                localCardHashTag[logoStr] = 1;
              }
              setCardHashTag(localCardHashTag);
            }}
          >
            {cardHashTag.LogoSnsStar === 1 ? <CheckImg src={checkImg} /> : ""}
            SNS STAR
          </HashTagIcon>
          <HashTagIcon
            logo={"LogoHackathon"}
            info={cardHashTag}
            num="1"
            onClick={() => {
              let logoStr = "LogoHackathon";
              let localCardHashTag = { ...cardHashTag };
              if (localCardHashTag[logoStr] !== 0) {
                localCardHashTag[logoStr] = 0;
              } else {
                localCardHashTag[logoStr] = 1;
              }
              setCardHashTag(localCardHashTag);
            }}
          >
            {cardHashTag.LogoHackathon === 1 ? <CheckImg src={checkImg} /> : ""}
            HACKATHON
          </HashTagIcon>
          <HashTagIcon
            logo={"LogoMento"}
            info={cardHashTag}
            num="1"
            onClick={() => {
              let logoStr = "LogoMento";
              let localCardHashTag = { ...cardHashTag };
              if (localCardHashTag[logoStr] !== 0) {
                localCardHashTag[logoStr] = 0;
              } else {
                localCardHashTag[logoStr] = 1;
              }
              setCardHashTag(localCardHashTag);
            }}
          >
            {cardHashTag.LogoMento === 1 ? <CheckImg src={checkImg} /> : ""}
            MENTO
          </HashTagIcon>
          <HashTagIcon
            logo={"LogoCollector"}
            info={cardHashTag}
            num="1"
            onClick={() => {
              let logoStr = "LogoCollector";
              let localCardHashTag = { ...cardHashTag };
              if (localCardHashTag[logoStr] !== 0) {
                localCardHashTag[logoStr] = 0;
              } else {
                localCardHashTag[logoStr] = 1;
              }
              setCardHashTag(localCardHashTag);
            }}
          >
            {cardHashTag.LogoCollector === 1 ? <CheckImg src={checkImg} /> : ""}
            COLLECTOR
          </HashTagIcon>
        </HashTagIconWrap>
        <TotalPeople></TotalPeople>
      </HashTagWrap>
      {cardArray.map((item, index, array) => {
        if (colorArray.length > index)
          return (
            <FlipCard
              key={index + "hello"}
              cardInfo={item}
              bookmarkedInfo={0}
              cardNum={0}
              color={colorArray[index]}
            ></FlipCard>
          );
        else
          return (
            <FlipCard
              key={index + "hello"}
              cardInfo={item}
              bookmarkedInfo={0}
              cardNum={0}
            ></FlipCard>
          );
      })}
    </FlipCardWrap>
  );
};
