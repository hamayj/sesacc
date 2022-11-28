// import { createStore } from 'redux';
// import { Provider, useSelector, useDispatch } from 'react-redux';
// import { composeWithDevTools } from "redux-devtools-extension";
// import { useRef } from 'react';

// function reducer(state, action) {
//     if (action.type === 'DEPOSIT') {
//         return { balance : state.balance + Number(action.balance)};
//         // return state + Number(action.balance);
//     } else if (action.type === 'WITHDRAW') {
//         return { balance : state.balance - Number(action.balance)};
//     } return state;
// }

// const store = createStore(reducer, composeWithDevTools());

// // react 다시 공부해야 함. 함수형 컴포넌트가 잘 기억나지 않음.
// function PracticeDefault() {
//     console.log("하마 은행 입장");
//     const balance = useSelector((state) => state.balance);
//     console.log("하마 은행 입장1");

//     return (
//         <Provider store = {store}>
//             <div style={{textAlign: 'center'}}>
//                 <h1>코딩온 은행</h1>
//                 <h3>잔액 : {balance} </h3>
//                 <Button />
//             </div>
//         </Provider>
//     );
// }

// const Button = () => {
//     const input = useRef();
//     const dispatch = useDispatch();

//     function deposit () {
//         console.log(input.current); // useRef()는 .current로 받음.
//         dispatch({ type:'DEPOSIT', balance : input.current.value});
//     };

//     function withdraw () {
//         console.log(input.current); 
//         dispatch({ type:'WITHDRAW', balance : input.current.value});
//     };


//     return (
//         <div style={{ display: "flex", justifyContent: "center" }}>
//             <input type="text" />
//             <button onClick={deposit}>입금</button>
//             <button onClick={withdraw}>출금</button>
//         </div>
//     );
// }

// export default PracticeDefault;

import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { useRef } from 'react';

function reducer(state, action){
    if(action.type === 'DEPOSIT'){
        return { balance : state.balance + Number(action.balance)};
    } else if ( action.type === 'WITHDRAW'){
        return { balance : state.balance - Number(action.balance)};
    } return { balance : 0 } ;
}

const store = createStore(reducer, composeWithDevTools());

function PracticeDefault() {
    console.log("하마 은행 입장");
    // const dispatch = useDispatch();
    // 왜 이거 쓰면 화면이 안보이지?
    
    return (
        <Provider store = {store} >
            <div style={{textAlign: 'center'}}>
            <Balance/>
            <Button />
            </div>
        </Provider>
    );
}

// Balance를 따로 빼줬음.
const Balance = () => {
    const balance = useSelector((state) => state.balance);
    return (
        <div>
            <h1>코딩온 은행</h1>
            <h3>잔액 : {balance} 원</h3>
        </div>
    )
}

const Button = () => {
    const input = useRef();
    const dispatch = useDispatch();

    function deposit () {
        console.log("input.current : ", input.current);
        dispatch({ type: 'DEPOSIT', balance : input.current.value });
    }

    function withdraw () {
        dispatch({ type : 'WITHDRAW', balance : input.current.value});
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <input type="text" ref={input}/>
            <button onClick={deposit}>입금</button>
            <button onClick={withdraw}>출금</button>
        </div>
    )
}

export default PracticeDefault;