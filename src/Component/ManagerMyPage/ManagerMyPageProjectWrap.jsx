/** @format */
/** @format */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ProjectAdd from "./image/ProjectAdd.svg";
import { ManagerLectureCard } from "./ManagerLectureCard";

const ManagerMyPageProjectWrapJsx = styled.div`
  width: 25%;
  // border: 1px solid black;
  box-sizing: border-box;
  padding: 0 21px;
  // display: flex;
  // align-items: center;
  // flex-direction: column;
`;

const ManagerMyPageProjectName = styled.div`
  font-family: "Peace Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  text-transform: uppercase;
  text-transform: uppercase;
  // background: black;
  margin: 40px 0px;
  color: ${(props) => {
    // console.log(props.color);
    return props.color;
  }};
`;

const ProjectImg = styled.img`
  //   margin-right: 10%;
  height: 40px;
`;

const ProjectImgWrap = styled.div`
  width: 100%;
  //   background: black;
  display: flex;
  //   padding-right: 20%;
  justify-content: end;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
`;

const ManagerLectureCardWrap = styled.div`
  // width: 100%;
  // height: 100%;
  // background: black;
  // flex-shrink: 1;
  // flex-grow: 1;

  display: flex;
  // display: flex;
  align-items: center;
  flex-direction: column;

  padding: 0px 20px;
  // justify-content: end;
`;
export const ManagerMyPageProjectWrap = ({
  setPopUp,
  setPopMsg,
  color,
  role,
  lectureListInfo,
}) => {
  const params = useParams();
  const dispatch = useDispatch();
  const employerInfo = useSelector((state) => state.employerReducer);
  const cardBookmarkInfo = useSelector(
    (state) => state.employerReducer.bookmarkInfo
  );

  useEffect(() => {
    console.log(lectureListInfo[0], "ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ ");
  }, [lectureListInfo]);

  const [lectureArray, setLectureArray] = useState([[], [], [], []]);
  const managerReducer = useSelector((state) => state.managerReducer);

  return (
    <ManagerMyPageProjectWrapJsx>
      <ManagerMyPageProjectName id={`Manager-menu-${role}`} color={color}>
        {role}
      </ManagerMyPageProjectName>
      <ProjectImgWrap
        onClick={() => {
          setPopUp(1);
          if (role === "PROGRAMMING") {
            console.log(1);
            setPopMsg("programming");
          } else if (role === "MARKETING") {
            console.log(2);
            setPopMsg("marketing");
          } else if (role === "DATA SCIENCE") {
            console.log(3);
            setPopMsg("dataScience");
          } else if (role === "DESIGN") {
            console.log(4);
            setPopMsg("design");
          }
        }}
      >
        <ProjectImg src={ProjectAdd} />
      </ProjectImgWrap>
      <ManagerLectureCardWrap>
        {lectureListInfo[0]
          ? lectureListInfo.map((item, index) => {
              return (
                <ManagerLectureCard
                  cardInfo={item}
                  key={"lecture" + index}
                ></ManagerLectureCard>
              );
            })
          : ""}
      </ManagerLectureCardWrap>
    </ManagerMyPageProjectWrapJsx>
  );
};
