/** @format */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  MANAGER_LECTURE_INFO_GET_REQUEST,
  PROJECT_INFO_GET_REQUEST,
  PROJECT_SHEET_INFO_GET_REQUEST,
  PROJECT_STUDEMT_DETAIL_GET_REQUEST,
  PROJECT_STUDENT_GET_REQUEST,
} from "../../redux/type";
import logo from "./img/LOGO-CMPLTD.svg";

import LogoOneFor1000 from "./img/LOGO-1-FOR-1000.svg";
import LogoAttendance1 from "./img/LOGO-ATTENDANCE.svg";
import LogoAttendance2 from "./img/LOGO-ATTENDANCE2.svg";
import LogoCollector from "./img/LOGO-COLLECTOR.svg";
import LogoComplete from "./img/LOGO-COMPLETE.svg";
import LogoExperienced from "./img/LOGO-EXPERIENCED.svg";
import LogoHackathon from "./img/LOGO-HACKATHON.svg";
import LogoMento from "./img/LOGO-MENTO.svg";
import LogoMinority from "./img/LOGO-MINORITY.svg";
import LogoRecommanded from "./img/LOGO-RECOMMANDED.svg";
import LogoSnsStar from "./img/LOGO-SNSSTAR.svg";

const ManagerProjectPageJsx = styled.div`
  max-width: 1920px;
  width: 100vw;
  position: relative;
  width: 100%;
  // background: grey;
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #ff6a00; /*스크롤바의 색상*/
  }

  &::-webkit-scrollbar-track {
    // background-color: yellow; /*스크롤바 트랙 색상*/
  }
  color: #222222;
`;
const ManagerProjectPageHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 80px 0px 0px 91px;
  // height: 100px;
  // background: green;
  color: #222222;
`;

const ManagerProjectPageTitle = styled.div`
  // height: 100px;
  display: flex;
  // background: yellow;
  margin-top: 80px;
  justify-content: space-between;
  box-sizing: border-box;
  width: 1615px;
  margin-left: 91px;
  & > div {
    display: flex;
  }
  color: #222222;
`;

const ManagerProjectPageTitleText = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
  // margin-left: 91px;

  color: #222222;
`;
const ManagerProjectPageTitleBtn1 = styled.div`
  // width: 123px;
  height: 53px;
  margin-right: 10px;

  background: #ff6a00;
  border-radius: 10px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  // line-height: 29px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 12px 20px 12px 20px;

  /* identical to box height */

  text-transform: uppercase;

  color: #ffffff;
`;
const ManagerProjectPageTitleBtn2 = styled.a`
  display: block;
  // width: 123px;
  height: 53px;

  background: #ff6a00;
  border-radius: 10px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 12px 20px 12px 20px;

  text-transform: uppercase;

  color: #ffffff;
`;

const ManagerProjectPageLectureDetail = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  // background: red;
  width: 1660px;
  overflow: hidden;
  margin-left: 80px;
  margin-top: 40px;
  color: #222222;
`;
const ManagerProjectPageLecture1Floor = styled.div`
  height: 100px;
  // background: red;
  color: #222222;
`;

const ManagerProjectPageLecture1FloorTitle = styled.div`
  height: 72px;
  background: #ff6a00;
  display: flex;
  align-items: center;
`;
const ManagerProjectPageLecture1FloorContent = styled.div`
  height: 102px;
  display: flex;
  align-items: center;
  color: #222222;
`;

const ManagerProjectPageLecture1FloorTitle2 = styled.div`
  height: 72px;
  background: #ff6a00;
  display: flex;
  align-items: center;
`;
const ManagerProjectPageLecture1FloorContent2 = styled.div`
  min-height: 102px;
  display: flex;
  align-items: start;
  color: #222222;
`;

const ManagerProjectPageLecture1TitleTextBox = styled.div`
  // min-height: 102px;

  display: flex;
  align-items: center;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  text-transform: uppercase;
  justify-content: center;
  color: #222222;

  width: ${(props) => {
    return props.boxWidth;
  }}px;
`;
const ManagerProjectPageLecture1ContentTextBox1 = styled.div`
  min-height: 102px;
  display: flex;
  align-items: center;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  text-align: center;
  text-transform: uppercase;
  justify-content: center;
  color: #222222;

  width: ${(props) => {
    return props.boxWidth;
  }}px;
`;

const ManagerProjectPageLecture1ContentTextBox2 = styled.div`
  min-height: 102px;
  display: flex;
  flex-direction: column;
  // align-items: start;
  // background: yellow;
  justify-content: start;
  width: ${(props) => {
    return props.boxWidth;
  }}px;
  padding-top: 42px;
  padding-bottom: 42px;
  color: #222222;
`;

const ManagerProjectPageLecture1ContentTextBox2List = styled.div`
  // min-height: 102px;
  // display: flex;
  align-items: center;
  // background: green;
  justify-content: center;
  width: ${(props) => {
    return props.boxWidth;
  }}px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 38px;
  text-transform: uppercase;

  color: #222222;
`;

const LogoImgWrap = styled(Link)``;

const LogoImg = styled.img`
  // background: red;
  height: 48px;
`;
const ManagerProjectPageStudent = styled.div`
  // height: 100px;
  // width: 5000px;
  // background: blue;
  margin-left: 116px;
  margin-top: 35px;
  color: #222222;
`;

const ManagerProjectPageStudentTitle = styled.div`
  // height: 100px;
  width: 3000px;
  display: flex;
  // background: blue;
  border-bottom: 0.7px solid #cccccc;
  padding-bottom: 20px;
  color: #222222;
`;

const ManagerProjectPageStudentTitleList = styled.div`
  // height: 100px;
  // width: 5000px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 33px;
  /* identical to box height, or 105% */

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #222222;
  // background: blue;

  width: ${(props) => {
    return props.boxWidth;
  }}px;
`;
const ManagerProjectPageStudentContent = styled.div`
  // height: 100px;
  width: 3300px;
  display: flex;
  // background: blue;
  color: #222222;
`;
const ManagerProjectPageStudentContentList = styled.div`
  // height: 100px;
  width: 5000px;
  // background: blue;
  color: #222222;
`;

const ManagerProjectPageStudentContentBox = styled.div`
  min-height: 102px;
  display: flex;
  flex-direction: column;
  // align-items: start;
  // background: yellow;
  justify-content: start;
  width: ${(props) => {
    return props.boxWidth;
  }}px;
  padding: 6px 0px;
  color: #222222;
`;

const ManagerProjectPageStudentContentBoxList = styled.div`
  align-items: center;
  // background: green;
  justify-content: center;
  // height: 33px;
  width: ${(props) => {
    return props.boxWidth;
  }}px;
  margin: 6px 0px;
  box-sizing: border-box;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height, or 139% */

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #222222;
  display: flex;
`;
const ManagerProjectPageStudentContentBoxBadgeBox = styled.div`
  // min-width: 100px;
  width: 100px;
  // background: red;
  height: 100%;
  display: flex;
  color: #222222;
`;

const Tagimg = styled.img`
  height: 33px;
  // height: 100%;
  color: #222222;
`;

const ManagerProjectPageStudentContentBoxListLink = styled(Link)`
  width: 119px;
  height: 33px;
  background: rgba(204, 204, 204, 0.4);
  border-radius: 10px;
  box-sizing: border-box;
  display: block;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  color: #222222;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

export const ManagerProjectPage = () => {
  const [bookmarkedInfo, setBookmarkedInfo] = useState(0);
  const employerInfo = useSelector((state) => state.employerReducer);
  const lectureInfo = useSelector((state) => state.projectReducer.lectureInfo);
  const studentInfo = useSelector((state) => state.projectReducer.studentList);
  const studentInfoDetail = useSelector(
    (state) => state.projectReducer.studentInfoDetail
  );

  const params = useParams();
  const employer = useSelector((state) => state.employerReducer);

  const dispatch = useDispatch();

  const onClickedEvent = () => {};

  useEffect(() => {
    dispatch({ type: PROJECT_INFO_GET_REQUEST, payload: params.id });
  }, []);

  useEffect(() => {
    dispatch({
      type: PROJECT_STUDEMT_DETAIL_GET_REQUEST,
      payload: studentInfo,
    });
  }, [lectureInfo]);

  return (
    <ManagerProjectPageJsx onClick={() => {}}>
      <ManagerProjectPageHeader>
        <LogoImgWrap to="/">
          <LogoImg src={logo} />
          {/* dsdsdsd */}
        </LogoImgWrap>
      </ManagerProjectPageHeader>
      <ManagerProjectPageTitle>
        <ManagerProjectPageTitleText>
          메가바이트스쿨 프로젝트 상세 보기
        </ManagerProjectPageTitleText>
        <div>
          <ManagerProjectPageTitleBtn1
            onClick={() => {
              console.log(lectureInfo);
              dispatch({
                type: PROJECT_SHEET_INFO_GET_REQUEST,
                payload: {
                  urlKey: lectureInfo.lectureID,
                  url: lectureInfo.lectureURL,
                },
              });
            }}
          >
            새로고침
          </ManagerProjectPageTitleBtn1>
          <ManagerProjectPageTitleBtn2 href={lectureInfo.lectureURL}>
            엑셀 바로가기
          </ManagerProjectPageTitleBtn2>
        </div>
      </ManagerProjectPageTitle>
      <ManagerProjectPageLectureDetail>
        <ManagerProjectPageLecture1FloorTitle>
          <ManagerProjectPageLecture1TitleTextBox boxWidth={500}>
            과목명
          </ManagerProjectPageLecture1TitleTextBox>
          <ManagerProjectPageLecture1TitleTextBox boxWidth={395}>
            교육기간
          </ManagerProjectPageLecture1TitleTextBox>
          <ManagerProjectPageLecture1TitleTextBox boxWidth={215}>
            교육장소
          </ManagerProjectPageLecture1TitleTextBox>
          <ManagerProjectPageLecture1TitleTextBox boxWidth={170}>
            교육시수
          </ManagerProjectPageLecture1TitleTextBox>
          <ManagerProjectPageLecture1TitleTextBox boxWidth={160}>
            수료인원
          </ManagerProjectPageLecture1TitleTextBox>
          <ManagerProjectPageLecture1TitleTextBox
            boxWidth={1660 - 500 - 395 - 215 - 170 - 160}
          >
            취업완료
          </ManagerProjectPageLecture1TitleTextBox>
        </ManagerProjectPageLecture1FloorTitle>
        <ManagerProjectPageLecture1FloorContent>
          <ManagerProjectPageLecture1TitleTextBox boxWidth={500}>
            {lectureInfo["과목명"] ? lectureInfo["과목명"][0] : ""}
          </ManagerProjectPageLecture1TitleTextBox>
          <ManagerProjectPageLecture1TitleTextBox boxWidth={395}>
            {lectureInfo["교육 기간"] ? lectureInfo["교육 기간"][0] : ""}
          </ManagerProjectPageLecture1TitleTextBox>
          <ManagerProjectPageLecture1TitleTextBox boxWidth={215}>
            {lectureInfo["교육장소"] ? lectureInfo["교육장소"][0] : ""}
          </ManagerProjectPageLecture1TitleTextBox>
          <ManagerProjectPageLecture1TitleTextBox boxWidth={170}>
            {lectureInfo["교육시수"] ? lectureInfo["교육시수"][0] : ""}
          </ManagerProjectPageLecture1TitleTextBox>
          <ManagerProjectPageLecture1TitleTextBox boxWidth={160}>
            {studentInfo ? studentInfo.length : ""}명
          </ManagerProjectPageLecture1TitleTextBox>
          <ManagerProjectPageLecture1TitleTextBox
            boxWidth={1660 - 500 - 395 - 215 - 170 - 160}
          ></ManagerProjectPageLecture1TitleTextBox>
        </ManagerProjectPageLecture1FloorContent>
        <ManagerProjectPageLecture1FloorTitle2>
          {" "}
          <ManagerProjectPageLecture1TitleTextBox boxWidth={300}>
            담당자
          </ManagerProjectPageLecture1TitleTextBox>
          <ManagerProjectPageLecture1TitleTextBox boxWidth={250}>
            강사진
          </ManagerProjectPageLecture1TitleTextBox>
          <ManagerProjectPageLecture1TitleTextBox boxWidth={450}>
            담당 과목
          </ManagerProjectPageLecture1TitleTextBox>
          <ManagerProjectPageLecture1TitleTextBox boxWidth={400}>
            참여 기업
          </ManagerProjectPageLecture1TitleTextBox>
          <ManagerProjectPageLecture1TitleTextBox
            boxWidth={1660 - 300 - 250 - 450 - 400}
          ></ManagerProjectPageLecture1TitleTextBox>
        </ManagerProjectPageLecture1FloorTitle2>
        <ManagerProjectPageLecture1FloorContent2>
          <ManagerProjectPageLecture1ContentTextBox2 boxWidth={300}>
            {lectureInfo["담당자"]
              ? lectureInfo["담당자"].map((item, index) => {
                  return (
                    <ManagerProjectPageLecture1ContentTextBox2List
                      key={item + index}
                    >
                      {item}
                    </ManagerProjectPageLecture1ContentTextBox2List>
                  );
                })
              : ""}
          </ManagerProjectPageLecture1ContentTextBox2>
          <ManagerProjectPageLecture1ContentTextBox2 boxWidth={250}>
            {lectureInfo["강사진"]
              ? lectureInfo["강사진"].map((item, index) => {
                  return (
                    <ManagerProjectPageLecture1ContentTextBox2List
                      key={item + index}
                    >
                      {item}
                    </ManagerProjectPageLecture1ContentTextBox2List>
                  );
                })
              : ""}
          </ManagerProjectPageLecture1ContentTextBox2>
          <ManagerProjectPageLecture1ContentTextBox2 boxWidth={450}>
            {lectureInfo["담당 과목"]
              ? lectureInfo["담당 과목"].map((item, index) => {
                  return (
                    <ManagerProjectPageLecture1ContentTextBox2List
                      key={item + index}
                    >
                      {item}
                    </ManagerProjectPageLecture1ContentTextBox2List>
                  );
                })
              : ""}
          </ManagerProjectPageLecture1ContentTextBox2>
          <ManagerProjectPageLecture1ContentTextBox2 boxWidth={400}>
            {lectureInfo["참여 기업"]
              ? lectureInfo["참여 기업"].map((item, index) => {
                  return (
                    <ManagerProjectPageLecture1ContentTextBox2List
                      key={item + index}
                    >
                      {item}
                    </ManagerProjectPageLecture1ContentTextBox2List>
                  );
                })
              : ""}
          </ManagerProjectPageLecture1ContentTextBox2>
          <ManagerProjectPageLecture1ContentTextBox2
            boxWidth={1660 - 300 - 250 - 450 - 400}
          ></ManagerProjectPageLecture1ContentTextBox2>
        </ManagerProjectPageLecture1FloorContent2>
      </ManagerProjectPageLectureDetail>
      <ManagerProjectPageStudent>
        <ManagerProjectPageStudentTitle>
          <ManagerProjectPageStudentTitleList boxWidth={85}>
            이름
          </ManagerProjectPageStudentTitleList>
          <ManagerProjectPageStudentTitleList boxWidth={175}>
            생년월일
          </ManagerProjectPageStudentTitleList>
          <ManagerProjectPageStudentTitleList boxWidth={220}>
            전화번호
          </ManagerProjectPageStudentTitleList>
          <ManagerProjectPageStudentTitleList boxWidth={62}>
            성별
          </ManagerProjectPageStudentTitleList>
          <ManagerProjectPageStudentTitleList boxWidth={425}>
            이메일(아이디)
          </ManagerProjectPageStudentTitleList>
          <ManagerProjectPageStudentTitleList boxWidth={380}>
            구글 이메일
          </ManagerProjectPageStudentTitleList>
          <ManagerProjectPageStudentTitleList boxWidth={220}>
            거주지
          </ManagerProjectPageStudentTitleList>
          <ManagerProjectPageStudentTitleList boxWidth={265}>
            출석률
          </ManagerProjectPageStudentTitleList>
          <ManagerProjectPageStudentTitleList boxWidth={150}>
            추천사
          </ManagerProjectPageStudentTitleList>
          <ManagerProjectPageStudentTitleList boxWidth={160}>
            취업여부
          </ManagerProjectPageStudentTitleList>
          <ManagerProjectPageStudentTitleList boxWidth={200}>
            상세보기
          </ManagerProjectPageStudentTitleList>
          <ManagerProjectPageStudentTitleList>
            뱃지
          </ManagerProjectPageStudentTitleList>
        </ManagerProjectPageStudentTitle>
        <ManagerProjectPageStudentContent>
          <ManagerProjectPageStudentContentBox boxWidth={85}>
            {studentInfoDetail[0]
              ? studentInfoDetail.map((item, index) => {
                  return (
                    <ManagerProjectPageStudentContentBoxList key={"k" + index}>
                      {item.employeeInfo["이름"]}
                    </ManagerProjectPageStudentContentBoxList>
                  );
                })
              : ""}
          </ManagerProjectPageStudentContentBox>
          <ManagerProjectPageStudentContentBox boxWidth={175}>
            {studentInfoDetail[0]
              ? studentInfoDetail.map((item, index) => {
                  return (
                    <ManagerProjectPageStudentContentBoxList key={"k" + index}>
                      {item.employeeInfo["생년월일"]}
                    </ManagerProjectPageStudentContentBoxList>
                  );
                })
              : ""}
          </ManagerProjectPageStudentContentBox>
          <ManagerProjectPageStudentContentBox boxWidth={220}>
            {studentInfoDetail[0]
              ? studentInfoDetail.map((item, index) => {
                  return (
                    <ManagerProjectPageStudentContentBoxList key={"k" + index}>
                      {item.employeeInfo["전화번호"]}
                    </ManagerProjectPageStudentContentBoxList>
                  );
                })
              : ""}
          </ManagerProjectPageStudentContentBox>
          <ManagerProjectPageStudentContentBox boxWidth={62}>
            {studentInfoDetail[0]
              ? studentInfoDetail.map((item, index) => {
                  return (
                    <ManagerProjectPageStudentContentBoxList key={"k" + index}>
                      {item.employeeInfo["성별"]}
                    </ManagerProjectPageStudentContentBoxList>
                  );
                })
              : ""}
          </ManagerProjectPageStudentContentBox>
          <ManagerProjectPageStudentContentBox boxWidth={425}>
            {studentInfoDetail[0]
              ? studentInfoDetail.map((item, index) => {
                  return (
                    <ManagerProjectPageStudentContentBoxList key={"k" + index}>
                      {item.employeeInfo["이메일(제출)"]}
                    </ManagerProjectPageStudentContentBoxList>
                  );
                })
              : ""}
          </ManagerProjectPageStudentContentBox>
          <ManagerProjectPageStudentContentBox boxWidth={380}>
            {studentInfoDetail[0]
              ? studentInfoDetail.map((item, index) => {
                  return (
                    <ManagerProjectPageStudentContentBoxList key={"k" + index}>
                      {item.employeeInfo["이메일(gmail)"]}
                    </ManagerProjectPageStudentContentBoxList>
                  );
                })
              : ""}
          </ManagerProjectPageStudentContentBox>
          <ManagerProjectPageStudentContentBox boxWidth={220}>
            {studentInfoDetail[0]
              ? studentInfoDetail.map((item, index) => {
                  return (
                    <ManagerProjectPageStudentContentBoxList key={"k" + index}>
                      {item.employeeInfo["거주지"]}
                    </ManagerProjectPageStudentContentBoxList>
                  );
                })
              : ""}
          </ManagerProjectPageStudentContentBox>
          <ManagerProjectPageStudentContentBox boxWidth={265}>
            {studentInfoDetail[0]
              ? studentInfoDetail.map((item, index) => {
                  console.log(lectureInfo, item, "아라라라라");
                  return (
                    <ManagerProjectPageStudentContentBoxList key={"k" + index}>
                      {item.lectureInfo.map((item, index2) => {
                        if (item["과목명"][0][0] === lectureInfo["과목명"][0]) {
                          return (
                            item.myAttandence[0] +
                            "/" +
                            lectureInfo.allAttendance +
                            " (" +
                            parseInt(
                              (item.myAttandence[0] /
                                lectureInfo.allAttendance) *
                                100
                            ) +
                            "%)"
                          );
                        }
                      })}
                    </ManagerProjectPageStudentContentBoxList>
                  );
                })
              : ""}
          </ManagerProjectPageStudentContentBox>
          <ManagerProjectPageStudentContentBox boxWidth={150}>
            {studentInfoDetail[0]
              ? studentInfoDetail.map((item, index) => {
                  return (
                    <ManagerProjectPageStudentContentBoxList key={"k" + index}>
                      {item.comment.length === 0
                        ? "없음"
                        : item.comment.length + "개"}
                    </ManagerProjectPageStudentContentBoxList>
                  );
                })
              : ""}
          </ManagerProjectPageStudentContentBox>
          <ManagerProjectPageStudentContentBox boxWidth={160}>
            {studentInfoDetail[0]
              ? studentInfoDetail.map((item, index) => {
                  return (
                    <ManagerProjectPageStudentContentBoxList key={"k" + index}>
                      {"미취업"}
                    </ManagerProjectPageStudentContentBoxList>
                  );
                })
              : ""}
          </ManagerProjectPageStudentContentBox>
          <ManagerProjectPageStudentContentBox boxWidth={200}>
            {studentInfoDetail[0]
              ? studentInfoDetail.map((item, index) => {
                  return (
                    <ManagerProjectPageStudentContentBoxList key={"k" + index}>
                      <ManagerProjectPageStudentContentBoxListLink to={`/`}>
                        상세정보 보기
                      </ManagerProjectPageStudentContentBoxListLink>
                    </ManagerProjectPageStudentContentBoxList>
                  );
                })
              : ""}
          </ManagerProjectPageStudentContentBox>
          <ManagerProjectPageStudentContentBox>
            {studentInfoDetail[0]
              ? studentInfoDetail.map((item, index) => {
                  console.log(item.badge);
                  return (
                    <ManagerProjectPageStudentContentBoxList key={"k" + index}>
                      <ManagerProjectPageStudentContentBoxBadgeBox>
                        {item.badge.LogoAttendance === 1 ? (
                          <Tagimg src={LogoAttendance1} />
                        ) : (
                          ""
                        )}
                        {item.badge.LogoAttendance === 2 ? (
                          <Tagimg src={LogoAttendance2} />
                        ) : (
                          ""
                        )}
                        {item.badge.LogoCollector === 1 ? (
                          <Tagimg src={LogoCollector} />
                        ) : (
                          ""
                        )}
                        {item.badge.LogoComplete === 1 ? (
                          <Tagimg src={LogoComplete} />
                        ) : (
                          ""
                        )}
                        {item.badge.LogoExperienced === 1 ? (
                          <Tagimg src={LogoExperienced} />
                        ) : (
                          ""
                        )}
                        {item.badge.LogoHackathon === 1 ? (
                          <Tagimg src={LogoHackathon} />
                        ) : (
                          ""
                        )}
                        {item.badge.LogoMento === 1 ? (
                          <Tagimg src={LogoMento} />
                        ) : (
                          ""
                        )}
                        {item.badge.LogoMinority === 1 ? (
                          <Tagimg src={LogoMinority} />
                        ) : (
                          ""
                        )}
                        {item.badge.LogoMinority === 2 ? (
                          <Tagimg src={LogoOneFor1000} />
                        ) : (
                          ""
                        )}
                        {item.badge.LogoRecommanded === 1 ? (
                          <Tagimg src={LogoRecommanded} />
                        ) : (
                          ""
                        )}
                        {item.badge.LogoSnsStar === 1 ? (
                          <Tagimg src={LogoSnsStar} />
                        ) : (
                          ""
                        )}
                      </ManagerProjectPageStudentContentBoxBadgeBox>
                    </ManagerProjectPageStudentContentBoxList>
                  );
                })
              : ""}
          </ManagerProjectPageStudentContentBox>
        </ManagerProjectPageStudentContent>
      </ManagerProjectPageStudent>
    </ManagerProjectPageJsx>
  );
};
