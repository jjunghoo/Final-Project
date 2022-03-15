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

export const BadgeBox = () => {
  return (
    <BadgeBoxJsxWrap>
      <BadgeBoxJsx>
        <BadgeImg src={LogoAttendance1} />
        {/* <BadgeImg src={LogoAttendance2} /> */}
        <BadgeImg src={LogoCollector} />
        <BadgeImg src={LogoComplete} />
        <BadgeImg src={LogoExperienced} />
        <BadgeImg src={LogoHackathon} />
        <BadgeImg src={LogoMento} />
        <BadgeImg src={LogoMinority} />
        <BadgeImg src={LogoRecommanded} />
        <BadgeImg src={LogoSnsStar} />
        {/* <BadgeImg src={LogoOneFor1000} /> */}
      </BadgeBoxJsx>
    </BadgeBoxJsxWrap>
  );
};
