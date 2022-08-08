import styled from "@emotion/styled";
import { useState } from "react";
import { useParams } from "react-router";
import { DetailPageCardBack } from "../Detailpage/DetailPageCardBack";
import characterImg from "../Detailpage/images/character1_img.png";

import LogoAttendance from "../Detailpage/images/LogoAttendance.svg";
import LogoCollector from "../Detailpage/images/LogoCollector.svg";
import LogoComplete from "../Detailpage/images/LogoComplete.svg";
import LogoExperienced from "../Detailpage/images/LogoExperienced.svg";
import LogoHackathon from "../Detailpage/images/LogoHackathon.svg";
import LogoMento from "../Detailpage/images/LogoMento.svg";
import LogoMinority from "../Detailpage/images/LogoMinority.svg";
import LogoRecommanded from "../Detailpage/images/LogoRecommanded.svg";
import LogoSnsStar from "../Detailpage/images/LogoSnsStar.svg";

const WrapDiv = styled.div`
  position: relative;
  perspective: 1000px;
  margin: 0 8px 22px;

  &:hover > div:first-of-type {
    transform: rotateY(180deg);
  }
  &:hover > div:last-of-type {
    transform: rotateY(360deg);
  }

  > div:first-of-type {
    position: absolute;
    transition: transform 1s 0.8s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
  > div:last-of-type {
    transform: rotateY(180deg);
    transition: transform 1s 0.8s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
`;

const CardWrap = styled.div`
  width: 370px;
  height: 590px;
  border: 1px solid black;
  background: rgba(248, 248, 248, 1);
  box-shadow: 2px 4px 4px 0px rgb(0 0 0 / 25%);
  border-radius: 20px;
  position: relative;
  > img {
    margin-top: 80px;
    margin-bottom: 29.19px;
  }

  label {
    position: absolute;
    top: 14px;
    left: 14px;
  }

  input[type="checkbox"] {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  .checkbox {
    display: inline-block;
    height: 28px;
    width: 28px;
    background: #fff;
    margin-right: 4px;
    border: 4px solid rgba(255, 106, 0, 1);
    border-radius: 10px;
  }

  .checkbox--active {
    background-color: rgba(255, 106, 0, 1);
    border-color: rgba(255, 106, 0, 1);
  }

  ${({ state }) => {
    switch (state) {
      case "dataScience":
        return `border: 10px solid rgba(17, 192, 203, 1);
                color: rgba(17, 192, 203, 1)`;
      case "design":
        return `border: 10px solid rgba(255, 168, 0, 1);
                color: rgba(255, 168, 0, 1)`;
      case "marketing":
        return `border: 10px solid rgba(255, 80, 80, 1);
                color: rgba(255, 80, 80, 1)`;
      case "programming":
        return `border: 10px solid rgba(186, 109, 246, 1);
                color: rgba(186, 109, 246, 1)`;
      default:
        return;
    }
  }}
`;

const NameDiv = styled.div`
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 48px;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgba(34, 34, 34, 1);
`;

const JobDiv = styled.div`
  margin: 5px 0 31px;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 38px;
  letter-spacing: -0.03em;
  text-align: center;
`;

const StyledBadgeWrap = styled.div`
  border-top: 1px dashed rgba(153, 153, 153, 1);
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
        margin: 5px 10px;
        height: fit-content;
      }
    }
  }
`;

export const StudentInfoCard = ({ studentId, check, checkStudent }) => {
  // job 확인
  const selectJob = {
    dataScience: studentId.dataScience,
    design: studentId.design,
    marketing: studentId.marketing,
    programming: studentId.programming,
  };

  // job 확인
  const getJob = [];
  for (let key in selectJob) {
    selectJob[key] === "1" && getJob.push(key);
  }

  // 뱃지 확인
  const getBadge = [];
  for (let key in studentId.badge) {
    studentId.badge[key] > 0 && getBadge.push(key);
  }

  const params = useParams();

  //   체크박스
  const [isChecked, setIsChecked] = useState(
    checkStudent.includes(studentId.id) ? true : false
  );

  // 카드 뒷면 작업중....
  const { comment, teamEvaluate } = studentId;

  return (
    <WrapDiv>
      <CardWrap state={getJob[0]}>
        {/* 체크박스 */}
        {params.menu === "like" && (
          <label>
            <input
              type="checkbox"
              onChange={(event) => {
                setIsChecked(!isChecked);
                event.target.checked
                  ? check(studentId.id)
                  : check(studentId.id);
              }}
            />
            <svg
              className={`checkbox ${isChecked ? "checkbox--active" : ""}`}
              aria-hidden="true"
              viewBox="0 0 15 11"
              fill="none"
            >
              <path
                d="M1 4.5L5 9L14 1"
                strokeWidth="2"
                stroke={isChecked ? "#fff" : "none"}
              />
            </svg>
          </label>
        )}

        <img src={characterImg} alt="아바타 이미지" />
        <NameDiv>{studentId.employeeInfo.이름}</NameDiv>
        <JobDiv>
          {getJob[0] === "dataScience" && "데이터 엔지니어"}
          {getJob[0] === "design" && "UXUI 디자이너"}
          {getJob[0] === "marketing" && "콘텐츠 마케터"}
          {getJob[0] === "programming" && "백앤드 개발자"}
        </JobDiv>

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
      </CardWrap>
      {/* 카드 뒷면 작업중.... */}
      <DetailPageCardBack
        teamEvaluate={teamEvaluate}
        getJob={getJob}
        comment={comment}
        studentId={studentId}
      />
    </WrapDiv>
  );
};
