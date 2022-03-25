import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const StyledWrapDiv = styled.div`
  width: 100%;
  max-width: 1920px;
  font-family: Pretendard;
  > div:first-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 38.77px 144.76px 40.23px;
  }
  > div:nth-of-type(2) {
    display: flex;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    padding: 11px 150px 0;
    background: rgba(255, 106, 0, 0.2);
    a {
      padding: 8px 16px 11px;
      margin: 0 10px;
      text-decoration: none;
      color: rgba(34, 34, 34, 1);
      &.active {
        border-bottom: 5px solid rgba(255, 106, 0, 1);
        color: rgba(255, 106, 0, 1);
      }
    }
  }
`;

const HeaderTitleDiv = styled.div`
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 58px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(34, 34, 34, 1);
`;

const SubMenuWrap = styled.div`
  margin-top: 26px;
  display: flex;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  div {
    padding: 0 10px;
  }
`;

export const EmployermypageHeader = () => {
  const selector = useSelector((state) => state.employerReducer);

  return (
    <StyledWrapDiv>
      {/* header */}
      <div>
        <HeaderTitleDiv>컴플리티드 이용현황</HeaderTitleDiv>
        <SubMenuWrap>
          <div>회원정보수정</div>
          <div>로그아웃</div>
        </SubMenuWrap>
      </div>
      {/* nav */}
      <div>
        {/* <LinkDiv
          param={realParams}
          category={"category/all"}
          to="/category/all"
        > */}
        <NavLink to="/employerMyPage/em1/like">
          좋아요 {selector.bookmarkInfo.length}
        </NavLink>
        <NavLink to="/employerMyPage/em1/supermatching">
          채용제안 {selector.superMachingInfo.length}
        </NavLink>
      </div>
    </StyledWrapDiv>
  );
};
