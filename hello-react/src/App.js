import React, {Fragment, Component} from 'react';
import './App.css'; // 불러오는 코드
import MyComponent from './MyComponent';
// import MyComponent2 from './MyComponent2';
// import MyComponent3 from './MyComponent3';
// import Event from "./Event";
// import Test from "./Test.js";
// import Test2 from "./Test2.js"

const App = () => {
  return <MyComponent name={3}>리액트</MyComponent>;
};

export default App;



// component실습
// const App = () => {
//   return (
//     <div>
//       <Test />
//       <Test2 />
//     </div>
//   );
// }
// export default App;


// const App = () => {
//   return (
//     <div>
//       <MyComponent />
//       <MyComponent2 />
//       <MyComponent3 />
//     </div>
//   );
// };



// App이라는 컴포넌트를 생성.
// 함수형 컴포넌트
// function App() {
//   const name = "뤼액트";
//   return (
//     <div>
//       {name === "리액트" ? (<h1>리액트입니다</h1>):(null)}
//     </div>
//   );
// }

// function App() {
//   const name = "리액트";
//   return <div>{name === "리액트" && <h1>리액트입니다.</h1>}</div>
// }


// function App() {
//   const number = 0;
//   // 나타날까요?
//   return number && <div>내용</div>
// }

// 실습1
// function App() {
//   return (
//     <div>"이것은 div입니다."
//       <h3>"이것은 div 안에 있는 h3태그 입니다."</h3>
//     </div>
//   ); // return에 괄호 처리 꼭 해주기.
// }

// 실습2😂
// function App() {
//   const name = "예현2";
//   const animal = "나무늘보🦥";
//   return (
//     <div>
//       <h2>제 반려 동물의 이름은 <span>{name}</span>입니다.</h2>
//       <h2><span>{name}</span>은 <span>{animal}</span>입니다.</h2>
//     </div>
//   )
// }

// 실습3
// function App() {
//   return 3+5==8 ? ("정답입니다!😎"):("오답입니다!");
// }

// 실습4 🙄 && 연산자 이용
// function App() {
//   const a = 100;
//   const b = 2;
//   var answer = ""
//   const flag = true;
//   // 삽질을 많이 했는데 if이나 계산식을 jSX 내에서 처리 불가
//   if (a>b) 
//     answer = "a가 b보다 큽니다"
    
//   // return ({a}>{b} && <div>"a가 b보다 큽니다"</div>);
//   return <div>{answer}</div>
// }

// 실습 4 두번째 시도! -> 일단 포기. 답보고 맞춤 😂
// 틀린 이유. 최상위 태그를 안만들어줬고, 
// 전체를 {}로 감싸지 않고 {a}{b} 따로따로 씀
// function App(){
//   const a = 100;
//   const b = 5;
//   return (
//     <>
//         { a > b  && <div>a가 b보다 큽니다.</div> }
//     </>
//   )
// }

//실습5 하악...-_ㅠ 중앙 정렬 🐶힘들군.
// function App() {
//   const title = "세상아 어서와🤑";
//   return (
//     <div className='container'>
//       <div className='test'>    
//           {title} <br></br>
//       </div>
//         <br />
//       <div className='inputs'>
//         아이디 : <input></input>
//         <p></p>
//         비밀번호 : <input></input>
//       </div>
//     </div>
//   );
// }


// 실습6  
// function App() {

//     return (
//         <> 
//             <div className='rainbowContainer'>
//                 <div className='red'></div>
//                 <div className='orange'></div>
//                 <div className='yellow'></div>
//                 <div className='green'></div>
//                 <div className='blue'></div>
//                 <div className='navy'></div>
//                 <div className='purple'></div>
//             </div>
//         </>
//     );
// }

// 클래스형 컴포넌트
// class App extends Component {
//   render() {
//     const name = 'react';
//     return <div className="react">{name}</div>;
//   }
// }
// export default App;
