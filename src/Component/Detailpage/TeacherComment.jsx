import styled from "@emotion/styled";
import fireImg from "./images/fireImg.svg";
import teacherImg from "./images/teacherImg.svg";
import teacherBadgeImg from "./images/teacherBadgeImg.svg";

const TeacherCommentWrapDiv = styled.div``;

const TeacherCommentHeader = styled.div`
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
  > div:first-of-type {
    margin-top: 38px;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(66, 50, 50, 1);
  }
`;

const CommentDiv = styled.div`
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

export const TeacherComment = ({ comment }) => {
  const markUp = (text) => {
    return { __html: text };
  };

  return (
    <TeacherCommentWrapDiv>
      <TeacherCommentHeader>
        <img src={fireImg} alt="강사 추천사 로고 이미지" />
        <span>메가바이트 강사님 추천사에요</span>
      </TeacherCommentHeader>
      {comment &&
        comment.map((item) => (
          <CommentWrapDiv key={item}>
            <span>{item.title}</span>
            <div dangerouslySetInnerHTML={markUp(item.text)}></div>
            <CommentDiv>
              <img src={teacherImg} alt="강사 프로필 이미지" />
              <div>
                <p>
                  {item.name}님{" "}
                  <img src={teacherBadgeImg} alt="강사 인증 뱃지 이미지" />
                </p>
                <span>{`현) UI/UX 디렉터, Front-end 개발 강사`}</span>
              </div>
            </CommentDiv>
          </CommentWrapDiv>
        ))}
    </TeacherCommentWrapDiv>
  );
};
