import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  EMPLOYER_BOOKMARK_EDIT_REQUEST,
  EMPLOYER_INFO_GET_REQUEST,
  EMPLOYER_SUPERMATCHING_EDIT_REQUEST,
} from "../../redux/type";
import { StudentInfoCard } from "./StudentInfoCard";

const StyledWrapDiv = styled.div`
  width: 100%;
  max-width: 1920px;
  font-family: Pretendard;

  padding: 22px 127px 301px;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  border: 1px solid;
  position: relative;
`;

const CancelProposalWrapDiv = styled.div`
  position: absolute;
  left: 796px;
  bottom: 206px;
  span {
    padding: 8px 16px;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    border-radius: 2222px;
    margin: 0 10px;
    :first-of-type {
      border: 1px solid rgba(204, 204, 204, 1);
      color: rgba(109, 95, 94, 1);
    }
    :last-of-type {
      border: 1px solid rgba(255, 14, 0, 1);
      color: rgba(255, 14, 0, 1);
    }
  }
`;

// 알람

const floating = keyframes`
    0 {
      transform: translateY(-90px);
      opacity: 0;    
    }
    40% {
      transform: translateY(-120px);
      opacity: 0.7;
    }
    100% {
      transform: translateY(-120px);
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
  bottom: -90px;
  opacity: 0;
  animation: ${floating} 2.5s linear;
`;

export const Employermypage = () => {
  const selector = useSelector((state) => state.employerReducer);
  const params = useParams();
  const dispatch = useDispatch();

  let [checkStudent, setCheckStudent] = useState([]);

  useEffect(() => {
    dispatch({ type: EMPLOYER_INFO_GET_REQUEST, payload: params.id });
  }, [dispatch, params.id]);

  const check = (studentId) => {
    let index = checkStudent.indexOf(studentId);
    if (checkStudent.length > 0 && index > -1) {
      const filterCheckStudent = checkStudent.filter(
        (item) => item !== studentId
      );
      setCheckStudent(filterCheckStudent);
    } else {
      const newCheckStudent = [];
      newCheckStudent.push(...checkStudent, studentId);
      setCheckStudent(newCheckStudent);
    }
  };

  // Like 삭제
  const deleteLike = () => {
    checkStudent.forEach((studentId) => {
      dispatch({
        type: EMPLOYER_BOOKMARK_EDIT_REQUEST,
        payload: { id: selector.id, userID: studentId },
      });
      check(studentId);
    });
  };

  const [superMaching, setSuperMaching] = useState(false);

  // SuperMaching 추가
  const addSuperMaching = () => {
    checkStudent.map((studentId) => {
      dispatch({
        type: EMPLOYER_SUPERMATCHING_EDIT_REQUEST,
        payload: { id: selector.id, userID: studentId },
      });
    });
    setSuperMaching(true);
    setTimeout(() => {
      setSuperMaching(false);
    }, 3000);
  };

  return (
    <StyledWrapDiv>
      {params.menu === "like" &&
        selector.bookmarkInfo &&
        selector.bookmarkInfo.map((data, i) => (
          <StudentInfoCard
            key={i}
            studentId={data}
            check={check}
            checkStudent={checkStudent}
          />
        ))}
      {params.menu === "supermatching" &&
        selector.superMachingInfo &&
        selector.superMachingInfo.map((data, i) => (
          <StudentInfoCard
            key={i}
            studentId={data}
            check={check}
            checkStudent={checkStudent}
          />
        ))}
      {checkStudent.length > 0 && params.menu === "like" && (
        <CancelProposalWrapDiv>
          <span onClick={deleteLike}>삭제하기</span>
          <span onClick={addSuperMaching}>채용 제안</span>
        </CancelProposalWrapDiv>
      )}
      {superMaching && (
        <AlarmDiv>수강생에게 취업제안을 완료하였습니다</AlarmDiv>
      )}
    </StyledWrapDiv>
  );
};
