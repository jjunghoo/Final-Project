/** @format */

import axios from "axios";

import { all, call, put, takeEvery, fork } from "redux-saga/effects";
import {
  MANAGER_LECTURE_INFO_GET_REQUEST,
  PROJECT_INFO_GET_FAILURE,
  PROJECT_INFO_GET_REQUEST,
  PROJECT_INFO_GET_SUCCESS,
  PROJECT_SHEET_INFO_GET_REQUEST,
  PROJECT_SHEET_INFO_GET_SUCCESS,
  PROJECT_STAGE_GET_FAILURE,
  PROJECT_STAGE_GET_REQUEST,
  PROJECT_STAGE_GET_SUCCESS,
  PROJECT_STUDEMT_DETAIL_GET_FAILURE,
  PROJECT_STUDEMT_DETAIL_GET_REQUEST,
  PROJECT_STUDEMT_DETAIL_GET_SUCCESS,
  PROJECT_STUDENT_GET_FAILURE,
  PROJECT_STUDENT_GET_REQUEST,
  PROJECT_STUDENT_GET_SUCCESS,
} from "../type";
/** @format */

//
//
//
//
//
//
//
//
//////LECTURE만 받아오기

const axiosProjectStudentGetSaga = (action) => {
  return axios.get(`/project/${action}`);
};

function* projectStudentGetSaga(action) {
  try {
    const posts = yield call(axiosProjectStudentGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield put({
      type: PROJECT_STUDENT_GET_SUCCESS,
      payload: { studentInfo: posts.data.studentInfo },
    }); // 성공 액션 디스패치
  } catch (e) {
    console.log(e);
    yield put({
      type: PROJECT_STUDENT_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchProjectStudentGet() {
  yield takeEvery(PROJECT_STUDENT_GET_REQUEST, projectStudentGetSaga);
}

// COMMENT만 받아오기 //

const axiosProjectStageGetSaga = (action) => {
  return axios.get(`/project/${action}`);
};

function* ProjectStageGetSaga(action) {
  try {
    const posts = yield call(axiosProjectStageGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield put({
      type: PROJECT_STAGE_GET_SUCCESS,
      payload: { stageInfo: posts.data.stageInfo },
    }); // 성공 액션 디스패치
  } catch (e) {
    console.log(e);
    yield put({
      type: PROJECT_STAGE_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchProjectStageGet() {
  yield takeEvery(PROJECT_STAGE_GET_REQUEST, ProjectStageGetSaga);
}

//project all info get 모든 정보 받아오기
const axiosProjectInfoGetSaga = (action) => {
  let url = action;
  return axios.get(`/project/${action}`);
};

function* projectInfoGetSaga(action) {
  try {
    const posts = yield call(axiosProjectInfoGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield put({
      type: PROJECT_INFO_GET_SUCCESS,
      payload: posts.data,
    }); // 성공 액션 디스패치
  } catch (e) {
    console.log(e);
    yield put({
      type: PROJECT_INFO_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchProjectInfoGet() {
  yield takeEvery(PROJECT_INFO_GET_REQUEST, projectInfoGetSaga);
}
////// 시트로부터 데이터 받아오기

const axiosProjectPostSaga = (action) => {
  return axios.post(`/project`, action);
};
const axiosProjectPutSaga = (action) => {
  return axios.put(`/project/${action.id}`, action);
};

const axiosProjectStudentPutSaga = (action) => {
  return axios.put(`/employee/${action.id}`, action);
};

const axiosProjectStudentPostSaga = (action) => {
  return axios.post(`/employee`, action);
};

const axiosProjectStudentDataGetSaga = (action) => {
  return axios.get(`/employee/${action.id}`);
};

const axiosProjectSheetGetSaga = (action) => {
  const sheetId = action.payload.urlKey;
  const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
  const sheetName = action.sheetName;
  const query = encodeURIComponent("Select *");
  const url = `${base}&sheet=${sheetName}&tq=${query}`;

  return axios.get(url);
};

function* projectSheetGetSaga(action) {
  try {
    const posts = yield call(axiosProjectSheetGetSaga, {
      sheetName: "교육정보",
      payload: action.payload,
    }); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.

    let jsonData = JSON.parse(posts.data.substring(47).slice(0, -2));
    let lectureInfoCategory = []; // 강의 정보 카테고리?? 하튼 그런 것
    let lectureInfo = []; // 본격적 강의 카테고리 아래 정보
    let lectureInfoObject = {};
    let categoryLength = jsonData.table.rows[0].c.length;
    let categoryData = jsonData.table.rows[0].c;
    let dataRows = jsonData.table.rows;
    for (let cnt = 0; cnt < categoryLength; cnt++) {
      if (categoryData[cnt] !== null) {
        lectureInfoCategory.push(categoryData[cnt].v);
      } else {
        lectureInfoCategory.push("none");
      }
      lectureInfo.push([]);
    }

    for (let cnt = 1; cnt < dataRows.length; cnt++) {
      /////행 정하기
      for (let cnt2 = 0; cnt2 < dataRows[cnt].c.length; cnt2++) {
        // dataRows[cnt].c.length -> 해당 열의 길이
        // 각 행의 길이만큼?
        if (dataRows[cnt].c[cnt2] !== null) {
          if (dataRows[cnt].c[cnt2].v !== null) {
            lectureInfo[cnt2].push(dataRows[cnt].c[cnt2].v);
          }
        }
      }
    }
    lectureInfoCategory.map((item, index) => {
      lectureInfoObject[lectureInfoCategory[index]] = lectureInfo[index];
      return 0;
    });
    const studentPosts = yield call(axiosProjectSheetGetSaga, {
      sheetName: "학생목록",
      payload: action.payload,
    });
    let jsonStudentData = JSON.parse(
      studentPosts.data.substring(47).slice(0, -2)
    );

    ///Student Info

    let lectureStudentInfoCategory = [
      "no",
      "이름",
      "생년월일",
      "전화번호",
      "성별",
      "이메일(제출)",
      "이메일(gmail)",
      "거주지",
      "LogoComplete",
      "LogoSnsStar",
      "LogoHackathon",
      "LogoMento",
      "LogoCollector",
      "LogoRecommanded",
      "LogoExperienced",
      "LogoAttendance",
      "LogoMinority",
    ]; // 강의 정보 카테고리?? 하튼 그런 것
    let lectureStudentsInfo = []; // 전체 학생 정보
    let lectureStudentRowsData = jsonStudentData.table.rows;

    for (let cnt = 0; cnt < lectureStudentRowsData.length; cnt++) {
      let studentInfoWrap = {};
      if (lectureStudentRowsData[cnt].c[0] !== null) {
        if (cnt < lectureStudentRowsData[cnt].c[0].v) {
          for (
            let cnt2 = 0;
            cnt2 < lectureStudentRowsData[cnt].c.length - 4;
            cnt2++
          ) {
            studentInfoWrap[lectureStudentInfoCategory[cnt2]] =
              lectureStudentRowsData[cnt].c[cnt2].v;
          }
          studentInfoWrap[
            lectureStudentInfoCategory[lectureStudentRowsData[cnt].c.length - 4]
          ] =
            lectureStudentRowsData[cnt].c[
              lectureStudentRowsData[cnt].c.length - 4
            ].v +
            lectureStudentRowsData[cnt].c[
              lectureStudentRowsData[cnt].c.length - 3
            ].v;

          studentInfoWrap[
            lectureStudentInfoCategory[lectureStudentRowsData[cnt].c.length - 3]
          ] =
            lectureStudentRowsData[cnt].c[
              lectureStudentRowsData[cnt].c.length - 2
            ].v +
            lectureStudentRowsData[cnt].c[
              lectureStudentRowsData[cnt].c.length - 1
            ].v;
          studentInfoWrap.id = studentInfoWrap.이름 + studentInfoWrap.전화번호;
          lectureStudentsInfo.push(studentInfoWrap);
        }
      }
    }

    lectureInfoObject.lectureID = action.payload.urlKey;
    lectureInfoObject.lectureURL = action.payload.url;
    let lectureDate = lectureInfoObject["교육 기간"][0].split("-");
    lectureDate[0] = lectureDate[0].split(".");
    lectureDate[1] = lectureDate[1].split(".");
    let now = new Date();
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth() + 1;
    let monthToSearch = [];
    if (parseInt(nowYear) > parseInt(lectureDate[1][0])) {
      for (
        let cnt = parseInt(lectureDate[0][1]);
        cnt <= parseInt(lectureDate[1][1]);
        cnt++
      ) {
        monthToSearch.push(`${cnt}월`);
      }
    } else if (parseInt(nowYear) === parseInt(lectureDate[1][0])) {
      let initialMonth = parseInt(lectureDate[0][1]);
      let initialYear = parseInt(lectureDate[0][0]);

      while (!(initialYear === nowYear && nowMonth === initialMonth)) {
        monthToSearch.push(`${initialMonth}월`);
        initialMonth++;
        if (initialMonth > 12) {
          initialYear++;
          initialMonth = 1;
        }
      }

      monthToSearch.push(`${nowMonth}월`);
    }

    let attendanceInfo = [];
    for (let cnt = 0; cnt < monthToSearch.length; cnt++) {
      let info = yield call(axiosProjectSheetGetSaga, {
        sheetName: monthToSearch[cnt],
        payload: action.payload,
      });
      attendanceInfo.push(info);
    }
    //////////////////////////////여기서부터 출석 확인용

    let attendanceDataForm = {};
    let allAttendance = 0;
    for (let attcnt = 0; attcnt < attendanceInfo.length; attcnt++) {
      let attandanceData = JSON.parse(
        attendanceInfo[attcnt].data.substring(47).slice(0, -2)
      );
      let attandanceDataRows = attandanceData.table.rows;
      for (let cnt3 = 0; cnt3 < attandanceDataRows[1].c.length; cnt3++) {
        if (attandanceDataRows[1].c[cnt3] !== null) {
          if (attandanceDataRows[1].c[cnt3].v === 1) {
            allAttendance++;
          }
        }
      }

      for (let cnt = 2; cnt < attandanceDataRows.length; cnt++) {
        if (attandanceDataRows[cnt].c[1] !== null) {
          let id =
            attandanceDataRows[cnt].c[1].v + attandanceDataRows[cnt].c[2].v;
          let attandanceCounter = 0;

          for (let cnt2 = 0; cnt2 < attandanceDataRows[cnt].c.length; cnt2++) {
            if (attandanceDataRows[cnt].c[cnt2] !== null) {
              if (attandanceDataRows[cnt].c[cnt2].v == 1) {
                if (cnt2 > 2) {
                  attandanceCounter++;
                }
              }
            }
          }
          if (attendanceDataForm[id] === undefined) {
            attendanceDataForm[id] = parseInt(attandanceCounter);
          } else {
            attendanceDataForm[id] =
              attendanceDataForm[id] + parseInt(attandanceCounter);
          }
        }
      }
    }

    let lastStudentInfo = [];
    lectureStudentsInfo.map((item) => {
      lastStudentInfo.push(item.id);
    });
    lectureInfoObject.allAttendance = allAttendance;

    let lastLectureInfo = {
      lectureInfo: lectureInfoObject,
      studentList: lastStudentInfo,
      id: lectureInfoObject.과목명[0],
    };

    try {
      const projectPost = yield call(axiosProjectPostSaga, lastLectureInfo); //특정부분 ID 확인용
      lastLectureInfo = projectPost.data;
    } catch (e) {
      const projectPut = yield call(axiosProjectPutSaga, lastLectureInfo); //특정부분 ID 확인용
      lastLectureInfo = projectPut.data;
    }

    //프로젝트 정보수정 끝

    for (let cnt = 0; cnt < lectureStudentsInfo.length; cnt++) {
      let info = lectureStudentsInfo[cnt];
      let studentForm = {
        likedInfo: [],

        id: info.id,
        comment: [],
        bookmarkInfo: [],
        supermatchingInfo: [],
        supermatchedInfo: [],
        employeeInfo: {
          id: info.id,
          거주지: info.거주지,
          생년월일: info.생년월일,
          성별: info.성별,
          이름: info.이름,
          "이메일(gmail)": info["이메일(gmail)"],
          "이메일(제출)": info["이메일(제출)"],
          전화번호: "010-1111-1137",
          profileNum: Math.floor(Math.random() * 13),
        },
        teamEvaluate: {
          능숙한발표왕: Math.floor(Math.random() * 100),
          피피티장인: Math.floor(Math.random() * 100),
          유창한말솜씨: Math.floor(Math.random() * 100),
          아이디어부자: Math.floor(Math.random() * 100),
          시간약속정확: Math.floor(Math.random() * 100),
          자기주도학습자: Math.floor(Math.random() * 100),
          우리조장님: Math.floor(Math.random() * 100),
          린앤애자일: Math.floor(Math.random() * 100),
          팀의백과사전: Math.floor(Math.random() * 100),
          멀티플래이어: Math.floor(Math.random() * 100),
          성장형캐릭터: Math.floor(Math.random() * 100),
          조용한연구자: Math.floor(Math.random() * 100),
          친화력대박: Math.floor(Math.random() * 100),
          온화한조정자: Math.floor(Math.random() * 100),
          무한긍정_에너지: Math.floor(Math.random() * 100),
          사회생활만렙: Math.floor(Math.random() * 100),
          데이터마스터: Math.floor(Math.random() * 100),
          디벨롭마스터: Math.floor(Math.random() * 100),
          디자인마스터: Math.floor(Math.random() * 100),
          마케팅마스터: Math.floor(Math.random() * 100),
        },
        programming: "0",
        design: "0",
        dataScience: "0",
        marketing: "0",
        badge: {
          LogoAttendance: info.LogoAttendance,
          LogoCollector: info.LogoCollector,
          LogoComplete: info.LogoComplete,
          LogoExperienced: info.LogoHackathon,
          LogoHackathon: info.LogoHackathon,
          LogoMento: info.LogoMento,
          LogoRecommanded: info.LogoRecommanded,
          LogoSnsStar: info.LogoSnsStar,
          LogoMinority: info.LogoMinority,
        },

        resume: {
          title: "협력하는 디자이너 Eugene입니다",
          profile: {
            name: "김유진",
            photo: "",
            job: "UX/UI Designer",
            age: "93년생, 30세",
            phone: "010-8111-1111",
            email: "asdfgh@gmail.com",
            address: "경기 성남시 분당동",
          },
          list: [
            {
              id: "1",
              name: "학력",
              list: [
                {
                  id: "1",
                  education: "한양대학교 대학원",
                  department: "디자인학부",
                  thesis: "디자인시스템 구축론(2019)",
                  startDate: "2019",
                  endDate: "2022",
                  state: "졸업예정",
                },
                {
                  id: "2",
                  education: "한양대학교",
                  department: "뉴미디어디자인학과",
                  subDepartment: "심리상담학과",
                  credit: "4.3",
                  totalCredit: "4.5",
                  startDate: "2019",
                  endDate: "2022",
                  state: "졸업",
                },
              ],
            },
            {
              id: "2",
              name: "경력",
              list: [
                {
                  id: "1",
                  company: "패스트캠퍼스",
                  department: "기획디자인팀",
                  position: "프로덕트 디자이너",
                  startDate: "2021",
                  endDate: "현재",
                  duties: ["UI리서치", "프로토타이핑", "UI/GUI 디자인"],
                },
                {
                  id: "2",
                  company: "삼성바이오",
                  department: "건강증진팀",
                  position: "UX/UI 디자이너",
                  startDate: "2020",
                  endDate: "2021",
                  duties: ["UI디자인", "온라인이벤트 기획 및 운영디자인"],
                },
                {
                  id: "3",
                  company: "아이필로",
                  department: "브랜드사업부 디자인팀",
                  position: "그래픽 디자이너",
                  startDate: "2019",
                  endDate: "2022",
                  duties: [
                    "자사몰 운영관리",
                    "웹페이지·뷰페이지· 컨텐츠 디자인",
                    "기획전·브로슈어·회사소개서 디자인",
                  ],
                },
              ],
            },
            {
              id: "3",
              name: "스킬",
              list: [
                "Figma",
                "중국어",
                "Adobe Illustrator",
                "Adobe Photoshop",
                "UI 디자인",
                "AdobeXD",
                "웹 디자인",
              ],
            },
            {
              id: "4",
              name: "교육",
              list: [
                {
                  id: "1",
                  company: "패스트캠퍼스",
                  educationName: "데이터 기반 마케팅 올인원 패키지",
                  endDate: "2021.07",
                  state: "수강중",
                },
                {
                  id: "2",
                  company: "원티드",
                  educationName: "쉽게 유저의 마음을 여는 UX writing의 비밀",
                  endDate: "2021.06",
                  state: "수강중",
                },
                {
                  id: "3",
                  company: "패스트캠퍼스",
                  educationName: "한번에 끝내는 UXUI 디자인",
                  endDate: "2021.05",
                  state: "수강 완료",
                },
              ],
            },
            {
              id: "5",
              name: "외국어",
              list: [
                {
                  id: "1",
                  language: "중국어",
                  level: "작문(중급)",
                },
                {
                  id: "2",
                  language: "영어",
                  level: "일상회화, 비즈니스 회화 가능(상급)",
                },
              ],
            },
            {
              id: "6",
              name: "수상경력",
              list: [
                {
                  id: "1",
                  awards: "2021 서울시 공모디자인 공모전 선정",
                  endDate: "2021.07",
                },
                {
                  id: "2",
                  awards: "제3회 생성마케팅 공모전 대상",
                  endDate: "2021.03",
                },
                {
                  id: "3",
                  awards: "해커톤 대상",
                  endDate: "2019.02",
                },
                {
                  id: "4",
                  awards: "2021년 제16회 유니버설디자인공모전 최우수상",
                  endDate: "2021.12",
                },
              ],
            },
            {
              id: "7",
              name: "자격증",
              list: [
                {
                  id: "1",
                  certificate: "컬러리스트기사",
                  hostOrganization: "한국산업인력공단",
                  endDate: "2019.11",
                },
                {
                  id: "2",
                  certificate: "웹디자인기능사",
                  hostOrganization: "한국산업인력공단",
                  endDate: "2017.11",
                },
              ],
            },
            {
              id: "8",
              name: "참조링크",
              list: [
                {
                  id: "1",
                  name: "인스타그램",
                  url: "https://www.instagram.com/?hl=ko",
                },
                {
                  id: "2",
                  name: "블로그",
                  url: "https://section.blog.naver.com",
                },
                {
                  id: "3",
                  name: "노트폴리오",
                  url: "https://notefolio.net",
                },
                {
                  id: "4",
                  name: "깃허브",
                  url: "https://github.com",
                },
              ],
            },
          ],
          curriculumVitae: {
            name: "경력 기술서",
            career: [
              {
                id: "1",
                company: "패스트캠퍼스",
                department: "기획디자인팀",
                startDate: "2022.02",
                endDate: "2021.03",
                list: [
                  {
                    id: "1",
                    project: "Figma 초격차클래스 구축",
                    position: "프로덕트 디자이너",
                    startDate: "2022.02",
                    endDate: "현재",
                    duties: [
                      "UI리서치, 프로토타이핑, 웹페이지, 뷰페이지 디자인",
                      "패스트캠퍼스 모바일 지원 신규 서비스 런칭",
                    ],
                  },
                ],
              },
              {
                id: "2",
                company: "삼성바이오",
                department: "건강증진팀",
                startDate: "2022.02",
                endDate: "2021.03",
                list: [
                  {
                    id: "1",
                    project: "헬스케어 B2B 서비스 지원",
                    position: "UX/UI 디자이너",
                    startDate: "2021.06",
                    endDate: "2021.10",
                    duties: [
                      "타회사 연계하여 임직원 건강관리 서비스 지원",
                      "온라인 이벤트 기획 및 운영",
                      "서비스 활성화 담당",
                      "내부 직원 연계 오프라인 건강증진 이벤트 개최",
                      "KPI 달성을 위한 대시보드 기획",
                    ],
                  },
                  {
                    id: "2",
                    project: "보건소 연계 건강증진 서비스 디자인",
                    position: "UX/UI 디자이너",
                    startDate: "2021.01",
                    endDate: "2021.06",
                    duties: [
                      "사용자 화면 기획",
                      "관리자 화면 디자인",
                      "비만관리를 위한 대시보드 디자인",
                      "보건소 내부 문제점 개선",
                    ],
                  },
                  {
                    id: "3",
                    project: "헬스케어 AI 서비스 도입",
                    position: "UX/UI 디자이너",
                    startDate: "2020.05",
                    endDate: "2021.01",
                    duties: [
                      "기존 헬스케어 서비스에 AI서비스 UXUI디자인",
                      "기존 자사 앱에 인공지능 서비스 도입",
                      "인공지능 서비스 도입을 위한 설문조사 실시",
                    ],
                  },
                ],
              },
              {
                id: "3",
                company: "패스트캠퍼스",
                department: "기획디자인팀",
                startDate: "2020.02",
                endDate: "2021.03",
                list: [
                  {
                    id: "1",
                    project: "펠드아포테케 비주얼 그래픽",
                    position: "그래픽 디자이너",
                    startDate: "2019.04",
                    endDate: "2020.04",
                    duties: [
                      "상세페이지, 웹페이지, 뷰페이지, 웹컨텐츠 디자인",
                      "기획전, 브로슈어, 회사소개서 디자인",
                    ],
                  },
                ],
              },
            ],
          },
          coverLetter: {
            name: "자기소개",
            list: [
              {
                type: "personalHistory",
                name: "성장 과정",
                text: "Extraversion : 외향적인<br />저는 새로운 것에 도전하는 것을 두려워하지 않는 사람입니다. 무엇을 하든 자유롭게 하도록 믿어주신 어머니의 가르침입니다. 중학교 3학년에 좋아하던 아이돌의 홈페이지를 만든 것이 최초의 새로운 도전이었습니다. 비록 무료였지만 호스팅을 구하는 과정을 시작으로 도메인 연결, 기획, 메모장과 쉐어웨어 버전의 포토샵으로 이미지를 만들고 야후 코리아의 검색 결과 8천 페이지를 뒤져가며 필요한 이미지와 태그를 찾는 등 2주 가까이 작업해 완성했던 추억이 있습니다. 유지보수와 운영을 하며 소통했던 친구들과는 20년째 친구로 지내고 있습니다. 웹디자이너의 길을 걷기까지 많은 시간이 걸렸지만, 새로운 분야를 열정 하나로 시작해서 모든 프로세스를 혼자 해냈던 경험은 저의 소중한 자산입니다.",
              },
              {
                type: "relationships",
                name: "대인관계",
                text: "iNtuition : 직관적인<br />‘촉이 좋다.’, ‘대화가 통한다.’ 사람이나 어떠한 현상, 업무의 프로세스를 분석하는 것이 제 특기입니다. 직장동료들과도 적당한 친근감을 유지하여 매끄러운 업무적/인간적 관계를 추구합니다. 심리학을 전공으로 삼은 이후부터 말의 행간이나 문맥에서 포인트를 잘 잡아내어 클라이언트와 기획자의 의도를 잘 파악하여 반영합니다. 어느 사람과 이야기를 해도 분야 대부분에 대해서 막힘없이 대화를 이어갈 수 있는 것이 제 의사소통의 강점입니다. 신생기업 박람회 참가할 때에도 공감적 대화를 통해 타 기업 분들과 교류하여 회사 간의 협업을 이루어낸 적이 있습니다.",
              },
              {
                type: "competence",
                name: "업무능력",
                text: "Feeling : 감각적인<br />디자이너로 일하며 가장 인정받아 온 부분은 색감과 폰트의 사용입니다. 각 작업물의 분위기에 맞게 신중하게 고른 폰트와 색채 팔레트로 깔끔하고 편안한 디자인을 추구하여 최소한의 이미지로도 효과를 극대화할 수 있는 디자인을 완성하는 일에 집중하고 있습니다. 이력 사이에는 쇼핑몰과 콘텐츠 등의 프리랜서 작업을 통해 고객 만족 평가를 받았습니다. 최근에는 기획자/개발자와 협업할 수 있는 프로토타입 프로그램 등을 추가로 학습 하여 경쟁력을 갖추고자 합니다.",
              },
              {
                type: "prosAndCons",
                name: "장점/단점",
                text: "Perceiving : 인식적인<br />“대충해, 대충.” 일하다 자주 들었던 말입니다. 자료의 오·탈자부터 꼼꼼하게 수정하고 콘텐츠 간격과 폰트, 배색까지 신경을 많이 쓰는 편입니다. 이런 작은 세부사항 쉽게 눈에 띄지 않지만 중요한 업무일수록 확인되어야 하는 부분이라 생각합니다. 적은 시간 안에 해내야 하는 일에는 고전하는 만큼 정교한 업무에는 자신 있습니다. 단점인 업무속도는 작업 효율화를 통해 개선하여 속도와 디테일을 모두 충족하는 디자이너가 되겠습니다.",
              },
            ],
          },
        },

        lectureInfo: [
          {
            과목명: [lectureInfoObject.과목명],
            "교육 기간": [lectureInfoObject["교육 기간"]],
            myAttandence: [attendanceDataForm[lectureStudentsInfo[cnt].id]],
            allAttendance: [allAttendance],
          },
        ],
      };

      try {
        const studentPost = yield call(
          axiosProjectStudentPostSaga,
          studentForm
        ); //특정부분 ID 확인용
      } catch (e) {
        console.log(e);
        const projectGet = yield call(
          axiosProjectStudentDataGetSaga,
          studentForm
        ); // 값을 일단 받아오자
        let check = 0;
        if (projectGet.data.lectureInfo !== []) {
          projectGet.data.lectureInfo.map((item, index, array) => {
            if (item["과목명"][0][0] === lectureInfoObject.과목명[0]) {
              check = 1;
              array[index] = {
                과목명: [lectureInfoObject.과목명],
                "교육 기간": [lectureInfoObject["교육 기간"]],
                myAttandence: [attendanceDataForm[lectureStudentsInfo[cnt].id]],
                allAttendance: [allAttendance],
              }; //너구나!!!!
            }
          });

          if (check !== 1) {
            //만약에 같은 값이 없다면 push 한다
            projectGet.data.lectureInfo.push(studentForm.lectureInfo[0]);
          }
        }
        let projectGetObject = { ...projectGet.data, badge: studentForm.badge };

        const projectStudentPut = yield call(
          axiosProjectStudentPutSaga,
          projectGetObject
        );
      }
    }
    yield put({
      type: PROJECT_SHEET_INFO_GET_SUCCESS,
      payload: {
        lectureInfo: lastLectureInfo.lectureInfo,
        studentList: lastLectureInfo.studentList,
        id: lastLectureInfo.id,
      },
    });

    yield put({ type: MANAGER_LECTURE_INFO_GET_REQUEST });
    // 성공 액션 디스패치
  } catch (e) {
    console.log(e);
    yield put({
      type: PROJECT_INFO_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchProjectSheetGet() {
  yield takeEvery(PROJECT_SHEET_INFO_GET_REQUEST, projectSheetGetSaga);
}

////// 시트로부터 데이터 받아오기 END

//////학생정보 세부적으로 받아오기

//project all info get 모든 정보 받아오기
const axiosProjectStudentDetailGetSaga = (action) => {
  let url = "";
  action.map((item, index) => {
    if (index === 0) {
      url = url + "id=" + item;
    } else {
      url = url + "&id=" + item;
    }
  });
  return axios.get(`/employee?${url}`);
};

function* projectStudentDetailGetSaga(action) {
  try {
    const posts = yield call(axiosProjectStudentDetailGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield put({
      type: PROJECT_STUDEMT_DETAIL_GET_SUCCESS,
      payload: { studentInfoDetail: posts.data },
    }); // 성공 액션 디스패치
  } catch (e) {
    console.log(e);
    yield put({
      type: PROJECT_STUDEMT_DETAIL_GET_FAILURE,
      error: true,
      payload: { errmsg: e },
    }); // 실패 액션 디스패치
  }
}

function* watchProjectStudentDetailGet() {
  yield takeEvery(
    PROJECT_STUDEMT_DETAIL_GET_REQUEST,
    projectStudentDetailGetSaga
  );
}

// END //

export function* projectSaga() {
  yield all([
    fork(watchProjectStudentGet),
    fork(watchProjectStageGet),
    fork(watchProjectInfoGet),
    fork(watchProjectSheetGet),
    fork(watchProjectStudentDetailGet),
  ]);
}
