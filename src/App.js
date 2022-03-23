/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Helloworld1 } from "./Helloworld1";
import { Resume } from "./Component/Resume/Resume";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./Component/Mainpage/Mainpage";
import { UserPage } from "./Component/Userpage/UserPage";
import { FlipCardWrapJSX } from "./Component/Card/FlipCardWrap";

import styled from "@emotion/styled";
import { MainPageHeader } from "./Component/Mainpage/Header";
import { CategoryMenu } from "./Component/Mainpage/CategoryMenu";
import { RoleCategoryPage } from "./Component/RoleCategoryPage/RoleCategoryPage";
import { RandomMatching } from "./Component/RandomMatching/RandomMatching";
import { GetDataFromSpreadSheet } from "./Component/GetDataFromSpreadSheet/GetDataFromSpreadSheet";
import { TeacherMyPage } from "./Component/TeacherMyPage/TeacherMyPage";

const AppDiv = styled.div`
  // width: 100%;
  // max-width: 1920px;
  display: flex;
  align-items: center;
  // justify-content: center;
  flex-direction: column;
`;

function App() {
  return (
    <AppDiv className="App">
      <Routes>
        <Route path="/teacherMyPage/:id" element={<div />} />

        <Route path="/*" element={<MainPageHeader />} />
      </Routes>

      <Routes>
        <Route path="/teacherMyPage/:id" element={<div />} />

        <Route path="/*" element={<CategoryMenu />} />
      </Routes>
      <Routes className="routes">
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/teacherMyPage/:id" element={<TeacherMyPage />} />

        <Route path="/resume" element={<Resume />} />
        <Route path="/test" element={<GetDataFromSpreadSheet />} />
        <Route path="/category/:id" element={<RoleCategoryPage />} />
        <Route path="/randommatching" element={<RandomMatching />} />
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </AppDiv>
  );
}

export default App;

// 순서 1) state 구조 정하기
// 순서 2) state action과 action의 payload 정하기
// 순서 3) 각각의 리듀서를 combineReducers를 통해서 묶을 수 있음 이를 통해 만든 것이 루트리듀서
//
