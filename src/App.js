/** @format */

import logo from "./logo.svg";
import "./App.css";
import { Helloworld1 } from "./Helloworld1";
import { Helloworld2 } from "./helloworld2";

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
        <h2>Welcome to the Redux Fundamentals example app!</h2>
      </section>
      <Helloworld1></Helloworld1>
      {/* <div>잘 보이시나요?? 그럼요</div> */}
    </div>
  );
}

export default App;

// 순서 1) state 구조 정하기
// 순서 2) state action과 action의 payload 정하기
// 순서 3) 각각의 리듀서를 combineReducers를 통해서 묶을 수 있음 이를 통해 만든 것이 루트리듀서
//
