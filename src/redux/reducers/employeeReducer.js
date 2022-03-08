/** @format */

import {
  EMPLOYEE_INFO_GET,
  EMPLOYEE_RESUME_GET,
  EMPLOYEE_RESUME_EDIT,
  EMPLOYEE_ID_GET_FAILURE,
  EMPLOYEE_ID_GET_REQUEST,
  EMPLOYEE_ID_GET_SUCCESS,
  EMPLOYEE_RESUME_SUCCESS,
  EMPLOYEE_RESUME_FAILURE,
  EMPLOYEE_INFO_SUCCESS,
  EMPLOYEE_INFO_FAILURE,
} from "../type";

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
const initialState = {
  employeeInfo: { initialInfo: "initial" },
  id: 0,
  resume: {
    title: "협력하는 디자이너 Eugene입니다",
    profile: {
      name: "김유진",
      photo: "./images/profile_photo.png",
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
  },

  errmsg: "",
};

export default function employeeReducer(state = initialState, action) {
  switch (action.type) {
    //////////////////LIKED

    case EMPLOYEE_INFO_GET: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return {
        ...state,
        employeeInfo: {},
        id: "",
      };
    case EMPLOYEE_INFO_SUCCESS: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      console.log(action.payload);
      return {
        ...state,
        employeeInfo: action.payload.employeeInfo,
        id: action.payload.id,
        errmsg: "",
      };
    case EMPLOYEE_INFO_FAILURE: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      console.log(action.payload.errmsg);
      return {
        ...state,
        employeeInfo: {},
        id: "",
        errmsg: action.payload.errmsg,
      };
    //
    //  RESUME
    //

    case EMPLOYEE_RESUME_GET: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return {
        ...state,
        resume: {},
      };
    case EMPLOYEE_RESUME_SUCCESS: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return {
        ...state,
        resume: action.payload.resume,
        errmsg: "",
      };
    case EMPLOYEE_RESUME_FAILURE: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return {
        ...state,
        errmsg: action.payload.errmsg,
      };

    case EMPLOYEE_RESUME_EDIT: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return {
        ...state,
        resume: action.payload.resume,
      };
    case EMPLOYEE_ID_GET_REQUEST:
      console.log("requesting");
      return { ...state };
    case EMPLOYEE_ID_GET_SUCCESS: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      console.log("succeed");
      console.log(action.payload);

      return {
        ...state,
        employeeInfo: action.payload,
      };
    case EMPLOYEE_ID_GET_FAILURE: // payload에서 객체에 해당 값이 추가 된 객체를 주도록 한다.
      return {
        ...state,
      };
    default:
      return state;
  }
}
