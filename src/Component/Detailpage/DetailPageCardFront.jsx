import styled from "@emotion/styled";

import characterImg from "./images/character1_img.png";
import LogoAttendance from "./images/LogoAttendance.svg";
import LogoCollector from "./images/LogoCollector.svg";
import LogoComplete from "./images/LogoComplete.svg";
import LogoExperienced from "./images/LogoExperienced.svg";
import LogoHackathon from "./images/LogoHackathon.svg";
import LogoMento from "./images/LogoMento.svg";
import LogoMinority from "./images/LogoMinority.svg";
import LogoRecommanded from "./images/LogoRecommanded.svg";
import LogoSnsStar from "./images/LogoSnsStar.svg";
import FrontUnlikeStar from "./images/frontUnlikeStar.svg";
import FrontRedLikeStar from "./images/frontRedLikeStar.svg";
import FrontYellowLikeStar from "./images/frontYellowLikeStar.svg";
import FrontGreenLikeStar from "./images/frontGreenLikeStar.svg";
import FrontPurpleLikeStar from "./images/frontPurpleLikeStar.svg";

const StyledCardFront = styled.div`
  object {
    position: absolute;
    right: 13.5px;
    top: 13.97px;
    path {
      fill: red;
    }
  }
  > img {
    :first-of-type {
      margin-top: 80px;
      margin-bottom: 29.19px;
    }
  }
  position: relative;
  width: 370px;
  height: 590px;
  margin-right: 51px;
  background: rgba(248, 248, 248, 1);
  text-align: center;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  ${({ state }) => {
    switch (state) {
      case "dataScience":
        return `border: 10px solid rgba(17, 192, 203, 1)`;
      case "design":
        return `border: 10px solid rgba(255, 168, 0, 1)`;
      case "marketing":
        return `border: 10px solid rgba(255, 80, 80, 1)`;
      case "programming":
        return `border: 10px solid rgba(186, 109, 246, 1)`;
      default:
        return;
    }
  }}
`;

const StyledNameDiv = styled.div`
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 48px;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgba(34, 34, 34, 1);
`;

const StyledJobDiv = styled.div`
  margin: 5px 0 31px;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 38px;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgba(255, 80, 80, 1);
`;

const StyledBadgeWrap = styled.div`
  border-top: 1px dashed rgba(153, 153, 153, 1);
  // padding: 28px 0px 5px;
  > div {
    :first-of-type {
      display: flex;
      width: fit-content;
      justify-content: center;
      flex-wrap: wrap;
      height: 192px;
      align-items: center;
      align-content: center;
      text-align: center;
      img {
        // padding: 1px 3px;
        margin: 5px 10px;
        height: fit-content;
      }
    }
  }
`;

export const DetailPageCardFront = ({ getJob, badge, employeeInfo, liked }) => {
  // 뱃지 확인
  const getBadge = [];
  for (let key in badge) {
    badge[key] > 0 && getBadge.push(key);
  }
  // console.log("front_getJob", getJob, liked);
  return (
    <StyledCardFront state={getJob[0]}>
      {getJob[0] === "marketing" && (
        <object data={liked ? FrontRedLikeStar : FrontUnlikeStar}>''</object>
      )}
      {getJob[0] === "design" && (
        <object data={liked ? FrontYellowLikeStar : FrontUnlikeStar}>''</object>
      )}
      {getJob[0] === "dataScience" && (
        <object data={liked ? FrontGreenLikeStar : FrontUnlikeStar}>''</object>
      )}
      {getJob[0] === "programming" && (
        <object data={liked ? FrontPurpleLikeStar : FrontUnlikeStar}>''</object>
      )}
      <img src={characterImg} alt="캐릭터 이미지" />
      <StyledNameDiv>{employeeInfo.이름}</StyledNameDiv>
      <StyledJobDiv>
        {getJob[0] === "dataScience" && "데이터 엔지니어"}
        {getJob[0] === "design" && "UXUI 디자이너"}
        {getJob[0] === "marketing" && "콘텐츠 마케터"}
        {getJob[0] === "programming" && "백앤드 개발자"}
      </StyledJobDiv>
      <StyledBadgeWrap>
        <div>
          {getBadge.map((item) => {
            switch (item) {
              case "LogoAttendance":
                return (
                  <img
                    src={LogoAttendance}
                    alt="개근왕 뱃지 이미지"
                    key={item}
                  />
                );
              case "LogoCollector":
                return (
                  <img
                    src={LogoCollector}
                    alt="컬렉터 뱃지 이미지"
                    key={item}
                  />
                );
              case "LogoComplete":
                return (
                  <img
                    src={LogoComplete}
                    alt="컴플리트 뱃지 이미지"
                    key={item}
                  />
                );
              case "LogoExperienced":
                return (
                  <img
                    src={LogoExperienced}
                    alt="중고신입 뱃지 이미지"
                    key={item}
                  />
                );
              case "LogoHackathon":
                return (
                  <img
                    src={LogoHackathon}
                    alt="해커톤 뱃지 이미지"
                    key={item}
                  />
                );
              case "LogoMento":
                return (
                  <img src={LogoMento} alt="멘토 뱃지 이미지" key={item} />
                );
              case "LogoMinority":
                return (
                  <img
                    src={LogoMinority}
                    alt="일기당천 뱃지 이미지"
                    key={item}
                  />
                );
              case "LogoRecommanded":
                return (
                  <img
                    src={LogoRecommanded}
                    alt="추천받음 뱃지 이미지"
                    key={item}
                  />
                );
              case "LogoSnsStar":
                return (
                  <img
                    src={LogoSnsStar}
                    alt="SNS_STAR 뱃지 이미지"
                    key={item}
                  />
                );
              default:
                break;
            }
          })}
        </div>
      </StyledBadgeWrap>
    </StyledCardFront>
  );
};
