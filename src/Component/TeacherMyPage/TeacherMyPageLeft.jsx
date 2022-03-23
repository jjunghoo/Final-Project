/** @format */
/** @format */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Logo from "./image/LOGO-CMPLTD.svg";
import b1 from "./image/b1.svg";
import b2 from "./image/b2.svg";
import b3 from "./image/b3.svg";
import o1 from "./image/o1.svg";
import o2 from "./image/o2.svg";
import o3 from "./image/o3.svg";

const TeacherMyPageLeftJsx = styled.div`
  width: 20%;
  //   display: flex;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  //   padding: 0px 30px;
`;

const TeachetMyPageLeftMenu = styled.div`
  height: 100px;
  width: 85%;
  background: green;
  margin-top: 10px;
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

  //   padding-left: ;
`;

const LogoImg = styled.img`
  width: 50%;
  margin-top: 80px;
  margin-bottom: 35px;
`;

const MenuImg = styled.img`
  //   width: 50%;
  //   margin-top: 80px;
`;

const MenuImgWrap = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  //   background: green;
  justify-content: center;
  align-items: center;
  margin-left: 44px;
`;

const MenuTextWrap = styled.div`
  //   width: 44px;
  //   height: 44px;
  display: flex;
  //   background: green;
  justify-content: center;
  align-items: center;
  margin-left: 47px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 58px;

  text-transform: uppercase;

  color: ${(props) => {
    if (props.menuInfo === props.menuNum) {
      return "#ff6a00";
    } else {
      return "black";
    }
  }};
`;

export const TeacherMyPageLeft = () => {
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
    <TeacherMyPageLeftJsx>
      <LogoImg
        src={Logo}
        onClick={() => {
          setMenuInfo(0);
        }}
      />
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
          hello
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
          hello
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
          hello
        </MenuTextWrap>
      </TeachetMyPageLeftMenu>
    </TeacherMyPageLeftJsx>
  );
};
