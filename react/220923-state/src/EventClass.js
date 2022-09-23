import React, {Component} from "react";

class EventClass extends Component {

    constructor(props){
        super(props);
        this.printConsole = this.printConsole.bind(this);
    }

    printConsole(msg) {
        console.log("printConsole");
        console.log(msg);
        console.log(this);
    }

    printConsole2 = () => {
        console.log("printConsole2");
        console.log(this);
    }

    sendParameter = () => {
        this.printConsole( )
    }

    // printConsole() {
    //     console.log(this);
    //     // 정의되지 않은 this가 나오는 것. -> undefined가 뜸.
    //     // 이 this가 없으면 state나 props를 쓰지 못함.
    //     // 이 문제를 해결하기 위해 bind를 씀(constructor에서 씀.)
    // }
    
    render() {
        return (
            <div>
                <button onClick={this.sendParameter}>printConsole</button>
                <button onClick={this.printConsole2}>printConsole2</button>
                {/* 클래스에서는 this 안붙이면 찾지 못함. */}
            </div>
        )
    }
}

export default EventClass;