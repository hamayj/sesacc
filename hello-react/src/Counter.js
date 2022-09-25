import React, { Component } from "react";

class Counter extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         number: 0,
    //         fixedNumber: 0
    //     };
    // }
    state = {
        number: 0,
        fixedNumber: 0
    } 

    render(){
        const { number, fixedNumber } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button 
                    onClick={()=>{
                    this.setState(prevState => {
                        return {
                            number : prevState.number + 1
                        }
                    });

                    // 위코드와 아래코드는 완전히 동일한 기능을 함.
                    // 아래 코드는 함수에서 바로 객체를 반환함.
                    this.setState(prevState => ({
                        number: prevState.number + 1
                    }));
                }}>+1</button>
            </div>
        )
    }
}

export default Counter;