/** @format */
/** @format */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { ManagerLectureCard } from "./ManagerLectureCard";
import { ManagerMyPagePopUp } from "./ManagerMyPagePopUp";
import { ManagerMyPageProjectWrap } from "./ManagerMyPageProjectWrap";
import { Link } from "react-router-dom";

const ManagerMyPageRightJsx = styled.div`
  width: 80%;
  display: flex;
  height: 100%;
  min-height: 100vh;
  position: relative;
  background: #fafafa;
  //   background: tomato;
`;

const LoginLink = styled(Link)`
  // width: 80px;
  // margin-right: 8px;
`;

const ManagerMyPageProjectName = styled.div`
  font-family: "Peace Sans";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => {
    let element = props.windowWidth;
    // console.log(element);
    element = parseInt(element * 0.8 * 0.25 * 0.05);
    element = String(element) + "px";
    console.log(element);

    return element;
  }};
  line-height: 67px;
  text-transform: uppercase;

  color: ${(props) => {
    return props.color;
  }};
`;

export const ManagerMyPageRight = () => {
  const [popUp, setPopUp] = useState(0);
  const [popMsg, setPopMsg] = useState("");
  const [width, setWidth] = useState(0);

  const managerReducer = useSelector((state) => state.managerReducer);
  const dispatch = useDispatch();

  const [lectureArray, setLectureArray] = useState([[], [], [], []]);
  useEffect(() => {
    let managerReducerCopy = { ...managerReducer };
    let lectureCopy = managerReducerCopy.lectureListInfo;
    let localLectureArray = [[], [], [], []];
    console.log(lectureCopy);
    if (lectureCopy[0]) {
      lectureCopy.map((item) => {
        if (item.lectureInfo["직군"][0] === "programming") {
          localLectureArray[0].push(item);
        } else if (item.lectureInfo["직군"][0] === "marketing") {
          localLectureArray[1].push(item);
        } else if (item.lectureInfo["직군"][0] === "design") {
          localLectureArray[2].push(item);
        } else if (item.lectureInfo["직군"][0] === "dataScience") {
          localLectureArray[3].push(item);
        }
      });
    }
    console.log("dddddddddddddddddd", localLectureArray);
    setLectureArray(localLectureArray);
  }, [managerReducer]);

  return (
    <ManagerMyPageRightJsx>
      <ManagerMyPageProjectWrap
        color={`#BA6DF6`}
        role={"PROGRAMMING"}
        sampleWidth={width}
        setPopUp={setPopUp}
        popMsg={popMsg}
        setPopMsg={setPopMsg}
        lectureListInfo={lectureArray[0]}
      ></ManagerMyPageProjectWrap>
      <ManagerMyPageProjectWrap
        color={`#FF5050`}
        role={"MARKETING"}
        sampleWidth={width}
        setPopUp={setPopUp}
        popMsg={popMsg}
        setPopMsg={setPopMsg}
        lectureListInfo={lectureArray[1]}
      ></ManagerMyPageProjectWrap>
      <ManagerMyPageProjectWrap
        color={`#FFA800`}
        role={"DESIGN"}
        sampleWidth={width}
        setPopUp={setPopUp}
        popMsg={popMsg}
        setPopMsg={setPopMsg}
        lectureListInfo={lectureArray[2]}
      ></ManagerMyPageProjectWrap>
      <ManagerMyPageProjectWrap
        color={`#11C0CB`}
        role={"DATA SCIENCE"}
        sampleWidth={width}
        setPopUp={setPopUp}
        popMsg={popMsg}
        setPopMsg={setPopMsg}
        lectureListInfo={lectureArray[3]}
      ></ManagerMyPageProjectWrap>
      {popUp ? (
        <ManagerMyPagePopUp
          // popUp={popUp}
          setPopUp={setPopUp}
          popMsg={popMsg}
          setPopMsg={setPopMsg}
        ></ManagerMyPagePopUp>
      ) : (
        ""
      )}
    </ManagerMyPageRightJsx>
  );
};
