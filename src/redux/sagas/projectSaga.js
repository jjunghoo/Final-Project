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
  //   console.log("saga진입");
  //    action.payload는 기업측 id 입력 필요
  try {
    console.log("try");
    const posts = yield call(axiosProjectStudentGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield console.log(posts.data);
    console.log("Comment");
    // yield console.log(action.payload);
    yield put({
      type: PROJECT_STUDENT_GET_SUCCESS,
      payload: { studentInfo: posts.data.studentInfo },
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
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
  //   console.log("saga진입");
  //    action.payload는 기업측 id 입력 필요
  try {
    console.log("try");
    const posts = yield call(axiosProjectStageGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield console.log(posts.data);
    console.log("Comment");
    // yield console.log(action.payload);
    yield put({
      type: PROJECT_STAGE_GET_SUCCESS,
      payload: { stageInfo: posts.data.stageInfo },
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
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
  //   console.log("saga진입");
  //    action.payload는 기업측 id 입력 필요
  try {
    console.log("try");
    const posts = yield call(axiosProjectInfoGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield console.log(posts.data);
    console.log("teacher all Info");
    // yield console.log(action.payload);
    yield put({
      type: PROJECT_INFO_GET_SUCCESS,
      payload: posts.data,
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
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
  console.log(action);
  // return 0;
  return axios.post(`/project`, action);
};
const axiosProjectPutSaga = (action) => {
  console.log(action);
  // return 0;
  return axios.put(`/project/${action.id}`, action);
};

const axiosProjectStudentPutSaga = (action) => {
  console.log(action);
  // return 0;
  return axios.put(`/employee/${action.id}`, action);
};

const axiosProjectStudentPostSaga = (action) => {
  // console.log(action);
  // return 0;
  return axios.post(`/employee`, action);
};

const axiosProjectStudentDataGetSaga = (action) => {
  // console.log(action);
  // return 0;
  return axios.get(`/employee/${action.id}`);
};

const axiosProjectSheetGetSaga = (action) => {
  console.log(action.payload);
  const sheetId = action.payload.urlKey;
  const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
  const sheetName = action.sheetName;
  const query = encodeURIComponent("Select *");
  const url = `${base}&sheet=${sheetName}&tq=${query}`;
  console.log(url);

  return axios.get(url);
};

function* projectSheetGetSaga(action) {
  //    action.payload는 기업측 id 입력 필요
  try {
    const posts = yield call(axiosProjectSheetGetSaga, {
      sheetName: "교육정보",
      payload: action.payload,
    }); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.

    let jsonData = JSON.parse(posts.data.substring(47).slice(0, -2));
    yield console.log(jsonData.table, "아하하하");
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
            // console.log(cnt2, dataRows[cnt].c.length, dataRows[cnt].c[cnt2].v);
            lectureInfo[cnt2].push(dataRows[cnt].c[cnt2].v);
          }
        }
      }
    }
    lectureInfoCategory.map((item, index) => {
      lectureInfoObject[lectureInfoCategory[index]] = lectureInfo[index];
      return 0;
    });
    console.log(lectureInfoCategory, "kaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    // console.log(lectureInfo);
    // yield console.log("lectureInfo", lectureInfoObject);
    const studentPosts = yield call(axiosProjectSheetGetSaga, {
      sheetName: "학생목록",
      payload: action.payload,
    });
    let jsonStudentData = JSON.parse(
      studentPosts.data.substring(47).slice(0, -2)
    );
    // console.log(jsonStudentData.table.cols);

    // console.log(jsonStudentData.table.rows);
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
    let lectureStudentInfoObject = {};
    let lectureStudentRowsData = jsonStudentData.table.rows;
    // console.log(jsonStudentData.table.rows);

    // console.log(lectureStudentInfoCategory);
    // console.log(lectureStudentRowsData);
    for (let cnt = 0; cnt < lectureStudentRowsData.length; cnt++) {
      // console.log(
      //   cnt,
      //   lectureStudentRowsData.length,
      //   lectureStudentRowsData[cnt].c
      // );
      // console.log();

      // console.log()
      let studentInfoWrap = {};
      // console.log("dedede", lectureStudentRowsData[cnt].c);
      if (lectureStudentRowsData[cnt].c[0] !== null) {
        if (cnt < lectureStudentRowsData[cnt].c[0].v) {
          // console.log(cnt, lectureStudentRowsData[cnt].c[0].v);
          // console.log(cnt < lectureStudentRowsData[cnt].c[0].v);
          for (
            let cnt2 = 0;
            cnt2 < lectureStudentRowsData[cnt].c.length - 4;
            cnt2++
          ) {
            studentInfoWrap[lectureStudentInfoCategory[cnt2]] =
              lectureStudentRowsData[cnt].c[cnt2].v;
            // console.log(cnt2, lectureStudentInfoCategory[cnt2]);
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
          console.log(lectureStudentsInfo, "koko");
        }
      }
      console.log(cnt, studentInfoWrap);
      console.log(lectureStudentsInfo);
    }
    // console.log(lectureStudentsInfo); //////// 학생정보들 취합
    // console.log(lectureInfoObject); ////강의 정보 취합
    lectureInfoObject.lectureID = action.payload.urlKey;
    lectureInfoObject.lectureURL = action.payload.url;
    let lectureDate = lectureInfoObject["교육 기간"][0].split("-");
    lectureDate[0] = lectureDate[0].split(".");
    lectureDate[1] = lectureDate[1].split(".");
    let now = new Date();
    let nowYear = now.getFullYear();
    let nowMonth = now.getMonth() + 1;
    // console.log(lectureDate);
    let monthToSearch = [];
    if (parseInt(nowYear) > parseInt(lectureDate[1][0])) {
      // console.log("hello");
      // console.log(parseInt(lectureDate[0][1]), parseInt(lectureDate[1][1]));
      for (
        let cnt = parseInt(lectureDate[0][1]);
        cnt <= parseInt(lectureDate[1][1]);
        cnt++
      ) {
        // console.log(`${cnt}월`);
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
        // console.log(initialYear, initialMonth, nowYear, nowMonth);
      }

      monthToSearch.push(`${nowMonth}월`);
    }
    // console.log(nowYear + nowMonth);
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
      // let Allattendance = 0;
      // console.log(attendanceInfo[attcnt]);
      let attandanceData = JSON.parse(
        attendanceInfo[attcnt].data.substring(47).slice(0, -2)
      );
      let attandanceDataRows = attandanceData.table.rows;
      // console.log("aaaaaaaaaaaaaaaaaaaa", attandanceDataRows[1].c);
      for (let cnt3 = 0; cnt3 < attandanceDataRows[1].c.length; cnt3++) {
        if (attandanceDataRows[1].c[cnt3] !== null) {
          if (attandanceDataRows[1].c[cnt3].v === 1) {
            allAttendance++;
            // console.log("bbbbbbbbbbbbbbbbbbbbb", cnt3, allAttendance);
          }
        }
      }

      // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", attandanceDataRows[1].c);

      // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa", allAttendance);
      // console.log(attandanceDataRows);
      for (let cnt = 2; cnt < attandanceDataRows.length; cnt++) {
        if (attandanceDataRows[cnt].c[1] !== null) {
          let id =
            attandanceDataRows[cnt].c[1].v + attandanceDataRows[cnt].c[2].v;
          let attandanceCounter = 0;

          // console.log(id);
          // console.log(attandanceDataRows[cnt].c);
          for (let cnt2 = 0; cnt2 < attandanceDataRows[cnt].c.length; cnt2++) {
            if (attandanceDataRows[cnt].c[cnt2] !== null) {
              // console.log("test", attandanceDataRows[cnt].c[cnt2].v);
              if (attandanceDataRows[cnt].c[cnt2].v == 1) {
                // console.log("hello");
                if (cnt2 > 2) {
                  attandanceCounter++;
                }
              }
            }
          }
          // if(id="")
          // console.log(id, attandanceCounter);
          if (attendanceDataForm[id] === undefined) {
            attendanceDataForm[id] = parseInt(attandanceCounter);
          } else {
            attendanceDataForm[id] =
              attendanceDataForm[id] + parseInt(attandanceCounter);
          }
        }
      }
    }
    // console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa", allAttendance);
    console.log(attendanceDataForm); //////학생 각 출석 확인 정보
    console.log(lectureStudentsInfo); //////// 학생정보들 취합
    console.log(lectureInfoObject); ////강의 정보 취합
    let lastStudentInfo = [];
    lectureStudentsInfo.map((item) => {
      lastStudentInfo.push(item.id);
    });
    lectureInfoObject.allAttendance = allAttendance;
    // console.log("adadadad", lectureInfoObject);
    let lastLectureInfo = {
      lectureInfo: lectureInfoObject,
      studentList: lastStudentInfo,
      id: lectureInfoObject.과목명[0],
    };
    // console.log(lastLectureInfo);
    // console.log("ccccccccccccccccccc", lectureInfoObject);
    // 프로젝트 정보 수정
    try {
      const projectPost = yield call(axiosProjectPostSaga, lastLectureInfo); //특정부분 ID 확인용
      // console.log(projectPost.data);
      lastLectureInfo = projectPost.data;
    } catch (e) {
      // console.log("there already have");
      // console.log(e);
      const projectPut = yield call(axiosProjectPutSaga, lastLectureInfo); //특정부분 ID 확인용
      // console.log("well done");
      // console.log(projectPut.data);
      lastLectureInfo = projectPut.data;
    }
    // console.log(lastLectureInfo); ////프로젝트 서버로 갱신 완료
    //프로젝트 정보수정 끝
    // console.log("waiting");

    // console.log("ttttttttttttttttttttttt", attendanceDataForm); //////학생 각 출석 확인 정보
    // console.log("ttttttttttttttttttttttt", lectureStudentsInfo); //////// 학생정보들 취합
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
        },
        teamEvaluate: {
          능숙한발표왕: 0,
          피피티장인: 0,
          유창한말솜씨: 0,
          아이디어부자: 0,
          시간약속정확: 0,
          자기주도학습자: 0,
          우리조장님: 0,
          린앤애자일: 0,
          팀의백과사전: 0,
          멀티플래이어: 0,
          성장형캐릭터: 0,
          조용한연구자: 0,
          친화력대박: 0,
          온화한조정자: 0,
          무한긍정_에너지: 0,
          사회생활만렙: 0,
          데이터마스터: 0,
          디벨롭마스터: 0,
          디자인마스터: 0,
          마케팅마스터: 0,
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
        resume: {},
        lectureInfo: [
          {
            과목명: [lectureInfoObject.과목명],
            "교육 기간": [lectureInfoObject["교육 기간"]],
            myAttandence: [attendanceDataForm[lectureStudentsInfo[cnt].id]],
            allAttendance: [allAttendance],
          },
        ],
      };
      // console.log(studentForm);

      try {
        const studentPost = yield call(
          axiosProjectStudentPostSaga,
          studentForm
        ); //특정부분 ID 확인용
        /////아잉
        // console.log(studentPost.data);
      } catch (e) {
        // console.log(e);
        const projectGet = yield call(
          axiosProjectStudentDataGetSaga,
          studentForm
        );
        let check = 0;
        if (projectGet.data.lectureInfo !== []) {
          projectGet.data.lectureInfo.map((item, index, array) => {
            console.log(item);
            if (item["과목명"][0] === lectureInfoObject.과목명[0]) {
              check = 1;
              array[index] = lectureInfoObject;

              // console.log("adadadadadadwwww", array);
              // console.log("wwwwwww", array[index]);
            }
          });
          // console.log("kkk", projectGet.data, studentForm);
          if (check !== 1) {
            projectGet.data.lectureInfo.push(studentForm.lectureInfo[0]);
          }
        }
        let projectGetObject = { ...projectGet.data, badge: studentForm.badge };

        const projectStudentPut = yield call(
          axiosProjectStudentPutSaga,
          projectGetObject
        );

        // console.log(projectStudentPut.data);
      }

      console.log("학생 갱신 완료");
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
  console.log(url);
  return axios.get(`/employee?${action}`);
};

function* projectStudentDetailGetSaga(action) {
  //   console.log("saga진입");
  //    action.payload는 기업측 id 입력 필요
  try {
    console.log("try");
    console.log("action.payload", action.payload);
    const posts = yield call(axiosProjectStudentDetailGetSaga, action.payload); // call 을 사용하면 특정 함수를 호출하고, 결과물이 반환 될 때까지 기다려줄 수 있습니다.
    yield console.log(posts.data);
    // yield console.log(action.payload);
    yield put({
      type: PROJECT_STUDEMT_DETAIL_GET_SUCCESS,
      payload: { studentInfoDetail: posts.data },
    }); // 성공 액션 디스패치
  } catch (e) {
    // console.log(e);
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
