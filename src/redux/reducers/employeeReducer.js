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
      name: "경력",
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
      personalHistory: {
        name: "성장 과정",
        text: "Extraversion : 외향적인 저는 새로운 것에 도전하는 것을 두려워하지 않는 사람입니다. 무엇을 하든 자유롭게 하도록 믿어주신 어머니의 가르침입니다. 중학교 3학년에 좋아하던 아이돌의 홈페이지를 만든 것이 최초의 새로운 도전이었습니다. 비록 무료였지만 호스팅을 구하는 과정을 시작으로 도메인 연결, 기획, 메모장과 쉐어웨어 버전의 포토샵으로 이미지를 만들고 야후 코리아의 검색 결과 8천 페이지를 뒤져가며 필요한 이미지와 태그를 찾는 등 2주 가까이 작업해 완성했던 추억이 있습니다. 유지보수와 운영을 하며 소통했던 친구들과는 20년째 친구로 지내고 있습니다. 웹디자이너의 길을 걷기까지 많은 시간이 걸렸지만, 새로운 분야를 열정 하나로 시작해서 모든 프로세스를 혼자 해냈던 경험은 저의 소중한 자산입니다.",
      },
      relationships: {
        name: "대인관계",
        text: "iNtuition : 직관적인 ‘촉이 좋다.’, ‘대화가 통한다.’ 사람이나 어떠한 현상, 업무의 프로세스를 분석하는 것이 제 특기입니다. 직장동료들과도 적당한 친근감을 유지하여 매끄러운 업무적/인간적 관계를 추구합니다. 심리학을 전공으로 삼은 이후부터 말의 행간이나 문맥에서 포인트를 잘 잡아내어 클라이언트와 기획자의 의도를 잘 파악하여 반영합니다. 어느 사람과 이야기를 해도 분야 대부분에 대해서 막힘없이 대화를 이어갈 수 있는 것이 제 의사소통의 강점입니다. 신생기업 박람회 참가할 때에도 공감적 대화를 통해 타 기업 분들과 교류하여 회사 간의 협업을 이루어낸 적이 있습니다.",
      },
      competence: {
        name: "업무능력",
        text: "Feeling : 감각적인디자이너로 일하며 가장 인정받아 온 부분은 색감과 폰트의 사용입니다. 각 작업물의 분위기에 맞게 신중하게 고른 폰트와 색채 팔레트로 깔끔하고 편안한 디자인을 추구하여 최소한의 이미지로도 효과를 극대화할 수 있는 디자인을 완성하는 일에 집중하고 있습니다. 이력 사이에는 쇼핑몰과 콘텐츠 등의 프리랜서 작업을 통해 고객 만족 평가를 받았습니다. 최근에는 기획자/개발자와 협업할 수 있는 프로토타입 프로그램 등을 추가로 학습 하여 경쟁력을 갖추고자 합니다.",
      },
      prosAndCons: {
        name: "장점/단점",
        text: "Perceiving : 인식적인 “대충해, 대충.” 일하다 자주 들었던 말입니다. 자료의 오·탈자부터 꼼꼼하게 수정하고 콘텐츠 간격과 폰트, 배색까지 신경을 많이 쓰는 편입니다. 이런 작은 세부사항 쉽게 눈에 띄지 않지만 중요한 업무일수록 확인되어야 하는 부분이라 생각합니다. 적은 시간 안에 해내야 하는 일에는 고전하는 만큼 정교한 업무에는 자신 있습니다. 단점인 업무속도는 작업 효율화를 통해 개선하여 속도와 디테일을 모두 충족하는 디자이너가 되겠습니다.",
      },
    },
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
