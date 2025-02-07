/** @format */
import styled from "@emotion/styled";
import icon from "./img/Sample.svg";
import icon1 from "./img/Sample-1.svg";
import icon2 from "./img/Sample-2.svg";
import icon3 from "./img/Sample-3.svg";
import icon4 from "./img/Sample-4.svg";
import icon5 from "./img/Sample-5.svg";
import icon6 from "./img/Sample-6.svg";
import icon7 from "./img/Sample-7.svg";
import icon8 from "./img/Sample-8.svg";
import icon9 from "./img/Sample-9.svg";
import icon10 from "./img/Sample-10.svg";
import icon11 from "./img/Sample-11.svg";
import icon12 from "./img/Sample-12.svg";
import icon13 from "./img/Sample-13.svg";
import { useEffect, useState } from "react";

const Icon = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  box-shadow: inset 0px 0px 3.19616px rgba(0, 0, 0, 0.25);
`;

const UserIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const AvartarIcon = ({ IconBGColor, cardInfo }) => {
  const [imgNum, setImgNum] = useState(icon);
  useEffect(() => {
    if (cardInfo.employeeInfo.profileNum === 0) {
      setImgNum(icon);
    } else if (cardInfo.employeeInfo.profileNum === 1) {
      setImgNum(icon1);
    } else if (cardInfo.employeeInfo.profileNum === 2) {
      setImgNum(icon2);
    } else if (cardInfo.employeeInfo.profileNum === 3) {
      setImgNum(icon3);
    } else if (cardInfo.employeeInfo.profileNum === 4) {
      setImgNum(icon4);
    } else if (cardInfo.employeeInfo.profileNum === 5) {
      setImgNum(icon5);
    } else if (cardInfo.employeeInfo.profileNum === 6) {
      setImgNum(icon6);
    } else if (cardInfo.employeeInfo.profileNum === 7) {
      setImgNum(icon7);
    } else if (cardInfo.employeeInfo.profileNum === 8) {
      setImgNum(icon8);
    } else if (cardInfo.employeeInfo.profileNum === 9) {
      setImgNum(icon9);
    } else if (cardInfo.employeeInfo.profileNum === 10) {
      setImgNum(icon10);
    } else if (cardInfo.employeeInfo.profileNum === 11) {
      setImgNum(icon11);
    } else if (cardInfo.employeeInfo.profileNum === 12) {
      setImgNum(icon12);
    } else if (cardInfo.employeeInfo.profileNum === 13) {
      setImgNum(icon13);
    }
  }, []);

  return (
    <Icon IconBGColor={IconBGColor}>
      <UserIcon src={imgNum} />
    </Icon>
  );
};
