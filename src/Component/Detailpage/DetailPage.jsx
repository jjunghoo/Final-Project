import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { EMPLOYEE_INFO_GET } from "../../redux/type";
import styled from "@emotion/styled";

import { DetailPageCardFront } from "./DetailPageCardFront";
import { DetailPageCardBack } from "./DetailPageCardBack";

import fireImg from "./images/fireImg.svg";
import teacherImg from "./images/teacherImg.svg";
import teacherBadgeImg from "./images/teacherBadgeImg.svg";

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
  margin-bottom: 80px;
`;

const TeacherCommentWrapDiv = styled.div`
  // display: flex;
  // align-items: center;
  // border: 1px solid black;
  // border-radius: 10px;
  // padding: 21px 0;
  // background: rgba(244, 246, 251, 1);
  // > img {
  //   // margin-left: 4.25px;
  //   // margin-right: 36.25px;
  //   margin: 0 16px;
  // }
  // > span {
  //   font-size: 32px;
  //   font-style: normal;
  //   font-weight: 700;
  //   line-height: 38px;
  //   letter-spacing: 0em;
  //   text-align: left;
  //   padding-top: 1px;
  //   color: rgba(0, 0, 0, 1);
  // }
`;

const TeacherCommentHeader = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
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

const CommentWrapDiv = styled.div`
  padding: 43px 66px 40px;
  > span {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(66, 50, 50, 1);
  }
`;

const CommentDiv = styled.div`
  border: 1px solid red;
  margin-top: 20px;
  display: flex;
  > img {
    margin: 3px 4px 2px 0;
  }
  > div > p {
    margin: 0;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(0, 0, 0, 1);
    display: flex;
    > img {
      margin-left: 4px;
    }
  }
  > div > span {
    display: inline-block;
    margin-top: 8px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 1);
  }
`;

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

  // job 확인
  const selectJob = {
    dataScience: dataScience,
    design: design,
    marketing: marketing,
    programming: programming,
  };
  console.log("selectJob", selectJob);

  // job 확인
  const getJob = [];
  for (let key in selectJob) {
    selectJob[key] === "1" && getJob.push(key);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    params.id && dispatch({ type: EMPLOYEE_INFO_GET, paload: params.id });
  }, [dispatch, params.id]);
  return (
    <StyledWrap>
      <StyledDetailsTitle>수강생 상세정보</StyledDetailsTitle>
      <StyledCardWrap>
        <DetailPageCardFront
          getJob={getJob}
          badge={badge}
          employeeInfo={employeeInfo}
        />
        <DetailPageCardBack
          teamEvaluate={teamEvaluate}
          getJob={getJob}
          comment={comment}
        />
      </StyledCardWrap>
      {/* 강사 추천사 */}
      <TeacherCommentWrapDiv>
        <TeacherCommentHeader>
          <img src={fireImg} alt="강사 추천사 로고 이미지" />
          <span>메가바이트 강사님 추천사에요</span>
        </TeacherCommentHeader>
        {comment &&
          comment.map((item) => (
            <CommentWrapDiv key={item}>
              <span>{item[2]}</span>
              <CommentDiv>
                <img src={teacherImg} alt="강사 프로필 이미지" />
                <div>
                  <p>
                    {item[1]}님{" "}
                    <img src={teacherBadgeImg} alt="강사 인증 뱃지 이미지" />
                  </p>
                  <span>{`현) UI/UX 디렉터, Front-end 개발 강사`}</span>
                </div>
              </CommentDiv>
            </CommentWrapDiv>
          ))}
      </TeacherCommentWrapDiv>
    </StyledWrap>
  );
};
