import React, {Component} from "react";

class Test extends Component {
    render() {
        const name = "유정";
        const my_style = {
            backgroundColor : "blue",
            color : "orange",
            fontSize : "40px",
            padding : 12
            // 특이점 : "" 처리를 안해줘도 된다.
        } 
        return(
            <div style={my_style}> 
                {name}
            </div>
        );            
    }
}
    // style을 지정하려는데 딕셔너리 형태라는 것 들은 기억만 남.
export default Test;