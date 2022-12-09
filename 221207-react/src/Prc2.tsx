// import { createStore } from 'redux';
// import { Provider, useSelector, useDispatch} from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// function reducer(state: number , action: object){
//     if(action.type === "")
// }


// const store = createStore(reducer, composeWithDevTools());

// function Prc2() {
//     console.log("welcome to 하마은행");
//     return (
//         <Provider store = {store} >
//             <div style = {{textAlign: 'center'}}>
//                 <Balance />
//                 <Button />
//             </div>
//         </Provider>
//     );
// }

// const Balance = () => {
//     const balance = useSelector((state) => state.balance);
//     return (
//         <div>
//             <h1>하마 은행</h1>
//             <h3>잔액 : {balance} 원 </h3>
//         </div>
//     )
// }

import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

type State = {
    money: number
}

function Prc2() {
    const money = useSelector((state:State) => state.money);
    return (
        <div style={{textAlign: 'center'}}>
            <h1>코딩온 은행</h1>
            <h3>잔액 : {money}원</h3>
            <Button />
        </div>
    );
}

const Button = () => {

    const input = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    function deposit() {
        if (input.current != null) dispatch({type: "DEPOSIT", amount: input.current.value});
    }

    function withdraw() {
        if (input.current != null) dispatch({type: "WITHDRAW", amount: input.current.value});
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <input type="text" ref={input} />
            <button onClick={deposit}>입금</button>
            <button onClick={withdraw}>출금</button>
        </div>
    )
}


export default Prc2;