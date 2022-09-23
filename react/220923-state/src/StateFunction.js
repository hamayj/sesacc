import React, { useState } from 'react';
// useState 사용하기.

function StateFunction () {
    const [msg, setMsg] = useState("");
    const [list, setList] = useState([]);
    // msg: 클래스형에서 name, list 같은거..
    // setMsg : msg를 바꾸기 위한거
    // this.state {
        // msg: ""
    // }

    function changeMsg(){
        setMsg("메세지");
        // setState({msg: "메세지"})
    }

    return (
        <div>
            <p>{msg}</p>
            StateFunction
            <button onClick={changeMsg}>클릭</button>
        </div>
        // 소괄호를 붙이면 렌더링 될 때 실행을 해서 보여주게 됨.
    )
}

export default StateFunction;