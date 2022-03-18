/** @format */
// import styled from "@emotion/styled";
import { css } from "@emotion/react";
// import { Link } from "react-router-dom";
// import { jsx, css } from "@emotion/react";

import LogoOneFor1000 from "../image/LOGO-1-FOR-1000.svg";
import LogoAttendance1 from "../image/LOGO-ATTENDANCE.svg";
import LogoAttendance2 from "../image/LOGO-ATTENDANCE2.svg";
import LogoCollector from "../image/LOGO-COLLECTOR.svg";
import LogoComplete from "../image/LOGO-COMPLETE.svg";
import LogoExperienced from "../image/LOGO-EXPERIENCED.svg";
import LogoHackathon from "../image/LOGO-HACKATHON.svg";
import LogoMento from "../image/LOGO-MENTO.svg";
import LogoMinority from "../image/LOGO-MINORITY.svg";
import LogoRecommanded from "../image/LOGO-RECOMMANDED.svg";
import LogoSnsStar from "../image/LOGO-SNSSTAR.svg";

import styled from "@emotion/styled";
import { useEffect } from "react";
const BadgeBoxJsxWrap = styled.div`
  height: 100%;
  position: relative;
  //   background-color: green;
`;

const BadgeBoxJsx = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  //   background-color: red;
  transform: translate(0px, -50%);
`;

const BadgeImg = styled.img`
  height: 28px;
`;

export const BadgeBox = ({ cardInfo }) => {
  useEffect(() => {
    // console.log(cardInfo);
  }, []);
  return (
    <BadgeBoxJsxWrap>
      <BadgeBoxJsx>
        {cardInfo.badge.LogoAttendance === 1 ? (
          <BadgeImg src={LogoAttendance1} />
        ) : (
          ""
        )}
        {cardInfo.badge.LogoAttendance === 2 ? (
          <BadgeImg src={LogoAttendance2} />
        ) : (
          ""
        )}
        {cardInfo.badge.LogoCollector === 1 ? (
          <BadgeImg src={LogoCollector} />
        ) : (
          ""
        )}
        {cardInfo.badge.LogoComplete === 1 ? (
          <BadgeImg src={LogoComplete} />
        ) : (
          ""
        )}
        {cardInfo.badge.LogoExperienced === 1 ? (
          <BadgeImg src={LogoExperienced} />
        ) : (
          ""
        )}
        {cardInfo.badge.LogoHackathon === 1 ? (
          <BadgeImg src={LogoHackathon} />
        ) : (
          ""
        )}
        {cardInfo.badge.LogoMento === 1 ? <BadgeImg src={LogoMento} /> : ""}
        {cardInfo.badge.LogoMinority === 1 ? (
          <BadgeImg src={LogoMinority} />
        ) : (
          ""
        )}
        {cardInfo.badge.LogoMinority === 2 ? (
          <BadgeImg src={LogoOneFor1000} />
        ) : (
          ""
        )}
        {cardInfo.badge.LogoRecommanded === 1 ? (
          <BadgeImg src={LogoRecommanded} />
        ) : (
          ""
        )}
        {cardInfo.badge.LogoSnsStar === 1 ? <BadgeImg src={LogoSnsStar} /> : ""}
      </BadgeBoxJsx>
    </BadgeBoxJsxWrap>
  );
};
