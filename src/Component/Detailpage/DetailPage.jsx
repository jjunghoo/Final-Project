import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { EMPLOYEE_INFO_GET } from "../../redux/type";
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

const StyledWrap = styled.div`
  text-align: left;
  max-width: 1920px;
  width: 100%;
  padding-top: 80px;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
`;

const StyledDetailsTitle = styled.div`
  border: 1px solid black;
  text-align: center;
  font-family: Pretendard;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 58px;
  letter-spacing: 0em;
  color: rgba(34, 34, 34, 1);
  margin-bottom: 40px;
`;

const StyledCardWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const StyledCardFront = styled.div`
  > img {
    :first-of-type {
      margin-top: 80px;
      margin-bottom: 29.19px;
    }
  }
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
  padding: 30px 40px;
  > div {
    :first-of-type {
      width: 296px;
      text-align: center;
      img {
        padding: 2px 6px;
      }
    }
  }
`;

const StyledCardBack = styled.div``;

export const DetailPage = () => {
  const params = useParams();
  const selector = useSelector((state) => state.employeeReducer);
  console.log(selector);
  const {
    badge,
    comment,
    dataScience,
    design,
    employeeInfo,
    id,
    marketing,
    programming,
    resume,
    teamEvaluate,
  } = selector;

  const selectJob = {
    dataScience: dataScience,
    design: design,
    marketing: marketing,
    programming: programming,
  };
  console.log("selectJob", selectJob);

  const getJob = [];
  for (let key in selectJob) {
    selectJob[key] === "1" && getJob.push(key);
  }

  const getBadge = [];
  for (let key in badge) {
    badge[key] > 0 && getBadge.push(key);
  }
  console.log("getBadge", getBadge);

  // teamEvaluate 높은 순으로 정렬
  const sortTeamEvaluate = [];
  for (let key in teamEvaluate) {
    sortTeamEvaluate.push([key, teamEvaluate[key]]);
  }

  sortTeamEvaluate.sort(function (a, b) {
    return b[1] - a[1];
  });

  const sortedTeamEvaluate = [];
  sortTeamEvaluate.forEach((item, index) => {
    if (index > 4) return;
    sortedTeamEvaluate.push(item[0]);
  });
  console.log("sortedTeamEvaluate", sortedTeamEvaluate);

  const dispatch = useDispatch();
  useEffect(() => {
    params.id && dispatch({ type: EMPLOYEE_INFO_GET, paload: params.id });
  }, [dispatch, params.id]);
  return (
    <StyledWrap>
      <StyledDetailsTitle>수강생 상세정보</StyledDetailsTitle>
      <StyledCardWrap>
        <StyledCardFront state={getJob[0]}>
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
        <StyledCardBack state={"dataScience"}>
          <div>능숙한 발표왕</div>
        </StyledCardBack>
      </StyledCardWrap>
    </StyledWrap>
  );
};
