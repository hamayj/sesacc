import React, {useState} from "react";

const PrcUseState = () => {
    const [ number, setNumber ] = useState(0);
    
    const increase = () => setNumber( number+1 );
    const decrease = () => setNumber( number-2 );

    return (
        <div>
            <h1> {number} </h1>
            <button onClick={() => increase()}>+1</button>
            <button onClick={() => decrease()}>-2</button> 
            {/* 함수 다음에 () 안 붙여주니까 함수가 먹지 않았음.  */}
        </div>
    )


}

export default PrcUseState;