import { useState, useReducer } from 'react';

// 첫번째로 들어가는 함수에는 2개의 파라미터를 받음. 현재 상태값과 내가 전달한 액션값.
function reducer(state, action) {
    switch (action.type){
        case "INCREMENT" :
            return {value : state.value + 1};
        case "DECREMENT" :
            return { value: state.value -1};
        default :
            
    }
    // 리턴을 할 때 새로운 상태로 반환해야 됨. 딕셔너리 값으로 보내줘야함. state라는거로 관리하고 있으니까
    // state는 value라는 키값으로 관리 중이니까. 

}
// 현재 상태는 초기값.
const Reducer = () => {
    const [state, dispatch ] = useReducer(reducer, {value: 0});
    // useReducer첫번째 파라미터에는 함수가 들어감. 두번째 파라미터에는 상태의 기본값이 들어감.
    // 그래서 state.value= 0
    // dispatch는

    return (
        <div>
            <h1> {state.value} </h1>
            {/* 액션값의 타입을 보내줌. */}
            <button onClick={() => {dispatch( {type: "DECREMENT"})}}>-1</button>
            <button onClick={() => {dispatch( {type: "INCREMENT"})}}>+1</button>
        </div>
    )
}

export default Reducer;