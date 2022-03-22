/** @format */
// import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { Link } from "react-router-dom";
// import { jsx, css } from "@emotion/react";
import blueStar from "./image/blue-star.svg";
import yellowStar from "./image/yellow-star.svg";
import greyStar from "./image/grey-star.svg";
import redStar from "./image/red-star.svg";
import purpleStar from "./image/purple-star.svg";
import styled from "@emotion/styled";
import { AvartarIcon } from "./CardComponent/AvatarIcon";
import { BadgeBox } from "./CardComponent/BadgeBox";
import { FlipCardBack } from "./FlipCardBack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EMPLOYER_BOOKMARK_EDIT_REQUEST } from "../../redux/type";
const FlipCardDesign = styled.div`
  height: 590px;
  width: 372px;
  min-width: 372px;
  background-color: #f8f8f8;
  box-sizing: border-box;
  border: 10px solid ${(props) => props.color};
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  // position: relative;
  display: flex;
  flex-direction: column;
  position: absolute;

  backface-visibility: hidden;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const FlipCardcase = styled.div`
  // opacity: 0.5;
  position: absolute;

  z-index: ${(props) => {
    // console.log(props.zIndex);
    if (props.zIndex === 1) {
      return 10;
    } else return 5;
  }};
  left: 50%;
  top: 50%;
  background-color: yellow;
  margin: 0px 0px 40px 0px;
  perspective: 1000px;

  transition: transform
    ${(props) => {
      // console.log(props);
      // console.log(props.Cardx);
      // console.log(props.Cardy);
      if (props.Cardx == 1) {
        return "3s";
      } else if (props.Cardy == 1) {
        return "3s";
      } else {
        return "0s";
      }
    }};
  transform: translate(
    ${(props) => {
      if (props.Cardx == 1) {
        return props.uiWidth + "px";
      } else {
        return "-50%";
      }
    }},
    ${(props) => {
      if (props.Cardy == 1) {
        return "-500%";
      } else {
        return "-50%";
      }
    }}
  );
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  &:hover > .flip-card-inner {
    transform: rotateY(180deg);
  }
  &:hover > .flip-back-card {
    transform: rotateY(360deg);
  }
`;

const Star = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
  background: none;
`;
const returnStarColor = (bookmarkedInfo, color, onClickedEvent) => {
  if (bookmarkedInfo === 0) {
    return <Star onClick={onClickedEvent} src={greyStar} />;
  } else if (color === "#FFA800") {
    return <Star onClick={onClickedEvent} src={yellowStar} />;
  } else if (color === "#FF5050") {
    return <Star onClick={onClickedEvent} src={redStar} />;
  } else if (color === "#11C0CB") {
    return <Star onClick={onClickedEvent} src={blueStar} />;
  } else if (color === "#BA6DF6") {
    return <Star onClick={onClickedEvent} src={purpleStar} />;
  }
};

const NameInfo = styled.div`
  font-family: "Pretendard Variable";
  margin-top: 29px;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.03em;
  color: #222222;
`;
const AvartarIconWrap = styled.div`
  width: 100%;
  // background-color: black;
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

const Role = styled.div`
  font-family: "Pretendard Variable";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: -0.03em;

  color: ${(props) => props.color};
  margin-top: 5px;
`;

const Badge = styled.div`
  border-top: 1px dashed #999999;
  margin-top: 35px;
  padding: 0px 20px;
  position: relative;
  flex: 1;
  // background-color: blue;
`;

export const FlipCard = ({ cardInfo, color, Cardx, Cardy, zIndex }) => {
  const [bookmarkedInfo, setBookmarkedInfo] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [uiWidth, setUiWidth] = useState(0);
  const employerInfo = useSelector((state) => state.employerReducer);

  const cardBookmarkInfo = useSelector(
    (state) => state.employerReducer.bookmarkInfo
  );

  const randommatchingIndex = useSelector(
    (state) => state.matchingReducer.randommatchingIndex
  );
  const employer = useSelector((state) => state.employerReducer);

  const dispatch = useDispatch();

  const roleSelect = (cardInfo, color) => {
    // console.log(cardInfo, color);
    // console.log(cardInfo.programming);
    if (parseInt(cardInfo.programming) === 1) {
      // console.log("1");
      return <Role color={color}>프로그래머</Role>;
    } else if (parseInt(cardInfo.marketing) === 1) {
      // console.log("2");
      return <Role color={color}>온라인 마케터</Role>;
    } else if (parseInt(cardInfo.design) === 1) {
      // console.log("3");
      return <Role color={color}>UX/UI 디자이너</Role>;
    } else if (parseInt(cardInfo.dataScience) === 1) {
      // console.log("4");
      return <Role color={color}>데이터 사이언스</Role>;
    } else {
      // console.log(cardInfo);
      return 0;
    }
  };

  const onClickedEvent = () => {
    dispatch({
      type: EMPLOYER_BOOKMARK_EDIT_REQUEST,
      payload: { id: employer.id, userID: cardInfo.id },
    });
  };
  const resizeHandleEvent = () => {
    let localUiWidth = document.getElementById("UI-RD");
    console.log(localUiWidth.offsetWidth);

    setUiWidth(localUiWidth.offsetWidth);
  };
  useEffect(() => {
    let localUiWidth = document.getElementById("UI-RD");
    setUiWidth(localUiWidth.offsetWidth);
    window.addEventListener("resize", resizeHandleEvent);
    return () => {
      console.log("doneWQEQWDSADAS!!!");
      window.removeEventListener("resize", resizeHandleEvent);
    };
  }, []);
  useEffect(() => {
    if (employerInfo.bookmarkInfo) {
      if (employerInfo.bookmarkInfo.indexOf(cardInfo.id) > -1) {
        setBookmarkedInfo(1);
      } else {
        setBookmarkedInfo(0);
      }
    }
  }, [employerInfo.bookmarkInfo, randommatchingIndex]);

  return (
    <FlipCardcase
      className="cardCase"
      id="cardCase"
      uiWidth={uiWidth}
      Cardx={Cardx}
      Cardy={Cardy}
      zIndex={zIndex}
    >
      <FlipCardDesign color={color} className="flip-card-inner">
        {returnStarColor(bookmarkedInfo, color, onClickedEvent)}
        {/* <Star src={yellowStar} /> */}
        <AvartarIconWrap>
          <AvartarIcon IconBGColor={"white"}></AvartarIcon>
        </AvartarIconWrap>
        <NameInfo>{cardInfo.employeeInfo.이름}</NameInfo>
        {roleSelect(cardInfo, color)}
        <Badge>
          <BadgeBox cardInfo={cardInfo}></BadgeBox>
        </Badge>
      </FlipCardDesign>
      <FlipCardBack
        bookmarkedInfo={bookmarkedInfo}
        color={color}
        cardInfo={cardInfo}
        className="flip-back-card"
      ></FlipCardBack>
    </FlipCardcase>
  );
};
