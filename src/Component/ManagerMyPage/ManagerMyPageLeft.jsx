/** @format */
/** @format */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Logo from "./image/LOGO-CMPLTD.svg";
import b3 from "./image/b1.svg";
import b2 from "./image/b2.svg";
import b1 from "./image/b3.svg";
import o3 from "./image/o1.svg";
import o2 from "./image/o2.svg";
import o1 from "./image/o3.svg";
import { Link } from "react-router-dom";

const ManagerMyPageLeftJsx = styled.div`
  width: 20%;
  //   display: flex;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  // align-items: center;
  box-sizing: border-box;
  padding: 0px 26px;
  // background: black;
`;

const TeachetMyPageLeftMenu = styled.div`
  // height: 100px;
  // width: 85%;
  // display: inline-block;
  background: green;
  margin-top: 10px;
  padding: 10px 6px;
  background: ${(props) => {
    if (props.menuInfo === props.menuNum) {
      return "rgba(255, 107, 87, 0.1)";
    } else {
      return "none";
    }
  }};
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 14px;

  //   padding-left: ;
`;
const LogoImgBox = styled(Link)`
  width: 50%;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: 16px;
`;

const LogoImg = styled.img`
  width: 100%;
`;

const MenuImg = styled.img`
  width: 24px;
  height: 24px;
`;

const MenuImgWrap = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  //   background: green;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const MenuTextWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // background: red;
  margin-left: 12px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;

  color: #585858;
  color: ${(props) => {
    if (props.menuInfo === props.menuNum) {
      return "#ff6a00";
    } else {
      return "black";
    }
  }};
`;

export const ManagerMyPageLeft = () => {
  const [menuInfo, setMenuInfo] = useState(0);
  const employerInfo = useSelector((state) => state.employerReducer);
  const cardBookmarkInfo = useSelector(
    (state) => state.employerReducer.bookmarkInfo
  );
  const params = useParams();
  const employer = useSelector((state) => state.employerReducer);

  const dispatch = useDispatch();

  const onClickedEvent = () => {};

  useEffect(() => {
    console.log(params.id);
  }, []);

  return (
    <ManagerMyPageLeftJsx>
      <LogoImgBox to={`/`}>
        <LogoImg
          src={Logo}
          onClick={() => {
            setMenuInfo(0);
          }}
        />
      </LogoImgBox>

      <TeachetMyPageLeftMenu
        menuNum={0}
        menuInfo={menuInfo}
        onClick={() => {
          setMenuInfo(0);
        }}
      >
        <MenuImgWrap>
          {menuInfo === 0 ? <MenuImg src={o1} /> : <MenuImg src={b1} />}
        </MenuImgWrap>
        <MenuTextWrap menuNum={0} menuInfo={menuInfo}>
          대시보드
        </MenuTextWrap>
      </TeachetMyPageLeftMenu>
      <TeachetMyPageLeftMenu
        menuNum={1}
        menuInfo={menuInfo}
        onClick={() => {
          setMenuInfo(1);
        }}
      >
        <MenuImgWrap>
          {menuInfo === 1 ? <MenuImg src={o2} /> : <MenuImg src={b2} />}
        </MenuImgWrap>
        <MenuTextWrap menuNum={1} menuInfo={menuInfo}>
          프로젝트 현황보기
        </MenuTextWrap>
      </TeachetMyPageLeftMenu>
      <TeachetMyPageLeftMenu
        menuNum={2}
        menuInfo={menuInfo}
        onClick={() => {
          setMenuInfo(2);
        }}
      >
        <MenuImgWrap>
          {menuInfo === 2 ? <MenuImg src={o3} /> : <MenuImg src={b3} />}
        </MenuImgWrap>

        <MenuTextWrap menuNum={2} menuInfo={menuInfo}>
          설정
        </MenuTextWrap>
      </TeachetMyPageLeftMenu>
    </ManagerMyPageLeftJsx>
  );
};
