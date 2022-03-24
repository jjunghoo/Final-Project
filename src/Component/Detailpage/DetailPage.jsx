import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import {
  EMPLOYEE_INFO_GET,
  EMPLOYER_BOOKMARK_EDIT_REQUEST,
  EMPLOYER_INFO_GET_REQUEST,
  EMPLOYER_SUPERMATCHING_EDIT_REQUEST,
  PROJECT_INFO_GET_REQUEST,
} from "../../redux/type";
import styled from "@emotion/styled";

import { DetailPageCardFront } from "./DetailPageCardFront";
import { DetailPageCardBack } from "./DetailPageCardBack";

// 뱃지 이미지
import ChevronDownImg from "./images/ChevronDownImg.svg";
import { Resume } from "../Resume/Resume";

import { TeacherComment } from "./TeacherComment";
import { StudentBadge } from "./StudentBadge";
import { PeerReview } from "./PeerReview";
import { keyframes } from "@emotion/react";
import React from "react";

const StyledWrap = styled.div`
  position: relative;
  background: rgba(248, 248, 248, 1);
  text-align: left;
  max-width: 1920px;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 53px;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
  > p {
    width: max-content;
    margin: 0 auto;
    font-family: Pretendard Variable;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(0, 0, 0, 1);
  }
`;

const StyledDetailsTitle = styled.div`
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
  // border: 1px solid black;
  margin-bottom: 40px;
`;

const ProjectListWrapDiv = styled.div``;

const ProjectListHeaderDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 21px 0;
  background: rgba(244, 246, 251, 1);
  > img {
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

const ProjectList = styled.div`
  margin: 20px 0 0 62px;
`;

const ListWrapDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  > div:first-of-type {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 1);
  }
  :first-of-type {
    div:last-of-type {
      margin-left: 34px;
      padding: 12px 20px;
      border-radius: 30px;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(0, 44, 157, 1);
      background: rgba(0, 41, 255, 0.12);
    }
  }
  :nth-of-type(2) {
    div:last-of-type {
      margin-left: 34px;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: center;
      color: rgba(0, 0, 0, 1);
    }
  }
  :nth-of-type(3) {
    div:last-of-type {
      margin-left: 61px;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: center;
      color: rgba(0, 0, 0, 1);
    }
  }
  :nth-of-type(4) {
    > div:first-of-type {
      margin-right: 30px;
    }
    div:last-of-type {
      display: flex;
      div {
        margin: 0 4px;
        padding: 12px 20px;
        border-radius: 30px;
        background: rgba(219, 195, 237, 1);

        color: rgba(168, 57, 255, 1);
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
      }
    }
  }
  :last-of-type {
    align-items: flex-start;
    > div:first-of-type {
      margin-right: 34px;
    }
    div:last-of-type {
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
`;

const MatchAndLikeWrap = styled.div`
  width: max-content;
  margin: 44px auto 34px;
  justify-content: center;
  span {
    display: inline-block;
    margin: 0 20px;
    padding: 8px 16px;
    border-radius: 41px;
    box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 25%);
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;

    :first-of-type {
      border: 1px solid rgba(255, 106, 0, 1);
      background-color: ${(props) => props.liked};
      color: ${(props) => props.likedColor};
    }
    :last-of-type {
      border: 1px solid rgba(255, 0, 0, 1);
      background-color: ${(props) => props.supermatch};
      color: ${(props) => props.supermatchColor};
    }
  }
`;

// 알람

const floating = keyframes`
    0 {
      transform: translateY(0);
      opacity: 0;    
    }
    5% {
      transform: translateY(25px);
      opacity: 0.3;
    }
    15% {
      transform: translateY(65px);
      opacity: 0.5;
    }
    25% {
      transform: translateY(80px);
      opacity: 0.8;
    }
    35% {
      transform: translateY(85px);
      opacity: 1;
    }
    50% {
      transform: translateY(90px);
      opacity: 1;
    }
    75% {
      transform: translateY(90px);
      opacity: 1;
    }
    100% {
      transform: translateY(90px);
      opacity: 1;
    }
`;

const AlarmDiv = styled.div`
  width: fit-content;
  margin: 0 auto;
  border: 1px solid black;
  padding: 20px;
  background: rgba(66, 50, 50, 1);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.03em;
  text-align: left;
  color: rgba(255, 255, 255, 1);
  border-radius: 52px;
  position: absolute;
  left: 42.5%;
  // top: -22px;
  top: -118px;
  opacity: 0;
  animation: ${floating} 2.5s linear;
`;

export const DetailPage = React.memo(() => {
  const params = useParams();
  const selector = useSelector((state) => state.employeeReducer);
  // console.log("selector", selector);

  const className =
    selector.lectureInfo && selector.lectureInfo[0].과목명[0][0];

  // 프로젝트 리듀서 확인
  const project = useSelector((state) => state.projectReducer);
  // console.log("project", project);
  // console.log("직군", project.lectureInfo.직군 && project.lectureInfo.직군[0]);

  const studentCheck =
    project.studentList && project.studentList.includes(selector.id);
  // console.log("studentCheck", studentCheck);

  const {
    badge,
    comment,
    dataScience,
    design,
    employeeInfo,
    // id,
    marketing,
    programming,
    teamEvaluate,
  } = selector;

  // job 확인
  const selectJob = {
    dataScience: dataScience,
    design: design,
    marketing: marketing,
    programming: programming,
  };
  // console.log("selectJob", selectJob);

  // job 확인
  const getJob = [];
  for (let key in selectJob) {
    selectJob[key] === "1" && getJob.push(key);
  }

  // 기업 정보
  const employer = useSelector((state) => state.employerReducer);
  // console.log("employer", employer);

  const liked = employer.id && employer.bookmarkInfo.includes(params.id);
  const supermatch =
    employer.id && employer.superMachingInfo.includes(params.id);

  // console.log("supermatch", supermatch);

  const { pathname } = useLocation();

  const dispatch = useDispatch();
  useEffect(() => {
    params.id && dispatch({ type: EMPLOYEE_INFO_GET, paload: params.id });
    dispatch({ type: EMPLOYER_INFO_GET_REQUEST, payload: "em1" });
    className &&
      dispatch({ type: PROJECT_INFO_GET_REQUEST, payload: className });
    window.scrollTo(0, 0);
  }, [dispatch, params.id, className, pathname]);

  // 알람 기능
  const [like, setLike] = useState(false);
  const [supermatching, setSupermatching] = useState(false);

  // LIKE 추가
  const addLike = () => {
    employer.id &&
      dispatch({
        type: EMPLOYER_BOOKMARK_EDIT_REQUEST,
        payload: { id: employer.id, userID: params.id },
      });
    // like 알람 기능
    if (like) {
      return setLike(false);
    } else if (liked && like === false) {
      return setLike(false);
    }
    setLike(true);
  };

  // superMachingInfo 추가
  const addSuperMachingInfo = () => {
    employer.id &&
      dispatch({
        type: EMPLOYER_SUPERMATCHING_EDIT_REQUEST,
        payload: { id: employer.id, userID: params.id },
      });

    // supermatching 알람 기능
    if (supermatching) {
      return setSupermatching(false);
    } else if (supermatch && supermatching === false) {
      return setSupermatching(false);
    }
    setSupermatching(true);
  };

  return (
    <StyledWrap>
      {like && <AlarmDiv>수강생에게 좋아요를 완료하였습니다</AlarmDiv>}
      {supermatching && (
        <AlarmDiv>수강생에게 채용제안을 완료하였습니다</AlarmDiv>
      )}
      <StyledDetailsTitle>수강생 상세정보</StyledDetailsTitle>
      <StyledCardWrap>
        <DetailPageCardFront
          getJob={getJob}
          badge={badge}
          employeeInfo={employeeInfo}
          liked={liked}
        />
        <DetailPageCardBack
          teamEvaluate={teamEvaluate}
          getJob={getJob}
          comment={comment}
          liked={liked}
        />
      </StyledCardWrap>

      {/* MATCH & LIKE */}
      {console.log("liked", employer.id && liked)}
      <MatchAndLikeWrap
        liked={
          employer.id && liked
            ? "rgba(255, 106, 0, 1)"
            : "rgba(248, 248, 248, 1)"
        }
        likedColor={employer.id && liked ? "#fff" : "rgba(255, 106, 0, 1)"}
        supermatch={
          employer.id && supermatch
            ? "rgba(255, 0, 0, 1)"
            : "rgba(248, 248, 248, 1)"
        }
        supermatchColor={
          employer.id && supermatch ? "#fff" : "rgba(255, 0, 0, 1)"
        }
      >
        <span onClick={addLike}>좋아요</span>
        <span onClick={addSuperMachingInfo}>채용 제안</span>
      </MatchAndLikeWrap>
      {/* {employer.id && liked && supermatch ? (
        <p>해당 수강생에게 입사제안을 전달했어요!</p>
      ) : employer.id && liked ? (
        <p>해당 수강생에게 취업제안을 하고싶으시다면 MATCH를 클릭해주세요!</p>
      ) : (
        <p>수강생에게 LIKE 혹은 MATCH를 해서 상세정보를 확인해보세요</p>
      )} */}

      {/* 강사 추천사 */}
      <TeacherComment comment={comment} />

      {/* 수강생 뱃지 내역 */}
      <StudentBadge employeeInfo={employeeInfo} badge={badge} />

      {/* 다른 수강생들의 평가 */}
      <PeerReview employeeInfo={employeeInfo} teamEvaluate={teamEvaluate} />

      {/* 수강생 프로젝트 */}
      <ProjectListWrapDiv>
        <ProjectListHeaderDiv>
          <img src={ChevronDownImg} alt="수료 프로젝트 로고 이미지" />
          <span>{employeeInfo.이름} 수강생이 수료한 프로젝트에요</span>
        </ProjectListHeaderDiv>

        {studentCheck &&
          selector.lectureInfo.map((data) => (
            <ProjectList key={data}>
              <ListWrapDiv>
                <div>교육과정</div>
                <div>
                  {project.lectureInfo.직군[0] === "design" &&
                    "Megabyte School : UXUI"}
                </div>
              </ListWrapDiv>
              <ListWrapDiv>
                <div>수강일자</div>
                <div>{data["교육 기간"][0][0]}</div>
              </ListWrapDiv>
              <ListWrapDiv>
                <div>출석률</div>
                <div>
                  {Math.round((data.myAttandence / data.allAttendance) * 100)}%
                </div>
              </ListWrapDiv>
              <ListWrapDiv>
                <div>보유스킬</div>
                <div>
                  {data.스킬.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </ListWrapDiv>
              <ListWrapDiv>
                <div>교육내용</div>
                <div>
                  {data.교육내용.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </ListWrapDiv>
            </ProjectList>
          ))}
      </ProjectListWrapDiv>

      {/* 이력서 */}
      <Resume resume={selector.resume} liked={liked} supermatch={supermatch} />
    </StyledWrap>
  );
});
