import styled from "@emotion/styled";
import LogoAttendance from "./images/LogoAttendance.svg";
import LogoCollector from "./images/LogoCollector.svg";
import LogoComplete from "./images/LogoComplete.svg";
import LogoExperienced from "./images/LogoExperienced.svg";
import LogoHackathon from "./images/LogoHackathon.svg";
import LogoMento from "./images/LogoMento.svg";
import LogoMinority from "./images/LogoMinority.svg";
import LogoRecommanded from "./images/LogoRecommanded.svg";
import LogoSnsStar from "./images/LogoSnsStar.svg";
import badgeImg from "./images/badgeImg.svg";

const StudentBadgeWrapDiv = styled.div``;

const StudentBadgeHeader = styled.div`
  display: flex;
  align-items: center;
  // border: 1px solid black;
  border-radius: 10px;
  padding: 21px 0;
  background: rgba(244, 246, 251, 1);
  > img {
    // margin-left: 4.25px;
    // margin-right: 36.25px;
    margin: 0 16px;
  }
  > span {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    padding-top: 1px;
    color: rgba(0, 0, 0, 1);
  }
`;

const BadgeListWrapDiv = styled.div`
  padding: 5px 66px 30px;
  > div {
    position: relative;
    margin: 20px 0;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    > span {
      position: absolute;
      left: 245px;
      font-family: Pretendard Variable;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;

export const StudentBadge = ({ employeeInfo, badge }) => {
  // badge 확인
  const getBadge = [];
  for (let key in badge) {
    badge[key] > 0 && getBadge.push(key);
  }

  return (
    <StudentBadgeWrapDiv>
      <StudentBadgeHeader>
        <img src={badgeImg} alt="뱃지 로고 이미지" />
        <span>{employeeInfo.이름} 수강생이 받은 컴플리티드 뱃지에요</span>
      </StudentBadgeHeader>
      <BadgeListWrapDiv>
        {getBadge.map((item) => {
          switch (item) {
            case "LogoAttendance":
              return (
                <div key={item}>
                  <img
                    src={LogoAttendance}
                    alt="개근왕 뱃지 이미지"
                    key={item}
                  />
                  <span>수료 과정 출석률이 100%에요</span>
                </div>
              );
            case "LogoCollector":
              return (
                <div key={item}>
                  <img
                    src={LogoCollector}
                    alt="컬렉터 뱃지 이미지"
                    key={item}
                  />
                  <span>메가바이트스쿨에 2회 이상 수료 경험이 있어요</span>
                </div>
              );
            case "LogoComplete":
              return (
                <div key={item}>
                  <img
                    src={LogoComplete}
                    alt="컴플리트 뱃지 이미지"
                    key={item}
                  />
                  <span>컴플리티드를 통해 취업하였어요</span>
                </div>
              );
            case "LogoExperienced":
              return (
                <div key={item}>
                  <img
                    src={LogoExperienced}
                    alt="중고신입 뱃지 이미지"
                    key={item}
                  />
                  <span>연관 직군 직무 경력자에요</span>
                </div>
              );
            case "LogoHackathon":
              return (
                <div key={item}>
                  <img
                    src={LogoHackathon}
                    alt="해커톤 뱃지 이미지"
                    key={item}
                  />
                  <span>해커톤에 참여하여 완주하였어요</span>
                </div>
              );
            case "LogoMento":
              return (
                <div key={item}>
                  <img src={LogoMento} alt="멘토 뱃지 이미지" key={item} />
                  <span>메가바이트스쿨 멘토 경험이 있어요</span>
                </div>
              );
            case "LogoMinority":
              return (
                <div key={item}>
                  <img
                    src={LogoMinority}
                    alt="일기당천 뱃지 이미지"
                    key={item}
                  />
                  <span>
                    팀 프로젝트를 혼자서 완주했어요 / 개인 프로젝트를 수료했어요
                  </span>
                </div>
              );
            case "LogoRecommanded":
              return (
                <div key={item}>
                  <img
                    src={LogoRecommanded}
                    alt="추천받음 뱃지 이미지"
                    key={item}
                  />
                  <span>강사/멘토님께 추천을 받았어요</span>
                </div>
              );
            case "LogoSnsStar":
              return (
                <div key={item}>
                  <img
                    src={LogoSnsStar}
                    alt="SNS_STAR 뱃지 이미지"
                    key={item}
                  />
                  <span>내가 참여한 프로젝트가 광고로 사용되었어요</span>
                </div>
              );
            default:
              break;
          }
        })}
      </BadgeListWrapDiv>
    </StudentBadgeWrapDiv>
  );
};
