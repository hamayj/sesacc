import './App.css';

import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux'; // 무조건 최상위가 아니라 내가 상태관리 하고 싶은 곳에 Provider를 위치시키면 됨.

import { composeWithDevTools } from "redux-devtools-extension"; // 구글 개발자도구에서 볼 때 쓰는.

function reducer(state, action){
  // state : 기존 상태 state
  // action : dispatch를 실행할 때 넣었던 객체
  if ( action.type === 'INCREASE') {
    return { number : state.number + 1 };
  } else if ( action.type === 'DECREASE' ){
    return { number : state.number -1 };
  }
  return { number : 1} ; // state 초기값.
}

const store = createStore(reducer, composeWithDevTools()); // createStore를 통해 store 만들기. store에 reducer 넣어줄거고, composeWithDevTools()는 개발자 도구를 위한 툴.
// store는 프로젝트 당 하나만 만들 것 이므로, const(상수)로 선언.

function App() {
  return (
    // props로 store를 전달.
    <Provider store={store}> 
      <div id="app">
        {/* 왜 빈칸으로 들어가는지 궁금했는데 어차피 아무 것도 안들어감. */}
        <h1>number : {}</h1>
        <Box1 />
      </div>
    </Provider>
  );
}

const Box1 = () =>{
  const number = useSelector((state) => state.number); 
  /* useSelector() : 일반 Js에서의 getState함수 역할.
      리덕스 store 상태 값을 조회하기 위한 hook 함수.
      인자로 함수를 넘겨줘야 함.
      그 함수는 state를 매개변수로 받을 수 있고, return 값은 원하는 state 변수 값 설정.
  */ 
  console.log('Box1');
  return (
    <div>
      {/* // number값에 변화를 주는 action이 없어서 기본 state.number가 출력됨. */}
      <h2>Box1 컴포넌트 number : {number} </h2>
      <Box2 />
    </div>
  )
}

const Box2 = () =>{
  console.log('Box2');
  return (
    <div>
      <h3>Box2 컴포넌트 number :</h3>
      {/* 아무것도 받고 있지 않음. */}
      <Box3 />
    </div>
  )
}

const Box3 = (props) =>{
  console.log('Box3');
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();
  /* useDispatch() : Action을 발생시키는 dispatch 함수를 실행하는 hook 함수.
    인자로 원하는 Action 객체를 넘겨줘야 함.
  */
  // 결국 Box3이 보여주는 것은 return에 담겨있음.
  return (
    <div>
      <h4>Box3 컴포넌트 number : {number} </h4>
      <input type="button" value="+" onClick={()=>{dispatch({type: 'INCREASE'})}} />
      <input type="button" value="-" onClick={()=>{dispatch({type: 'DECREASE'})}} />
    </div>
  )
}

export default App;