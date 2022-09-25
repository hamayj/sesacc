import React, {Component} from "react";

const FoodComponent = props => {
    const {food} = props;
    // const styleR = { color : "red" }
    return (        
        <div>
            <p>많이🥰드세요많😎이드세요많이드세😉요</p>
            아~ <span style={{color:"red", textDecoration:"none"}}>{food}</span> 좋아하시는군요 💯
            <p>많이🥰드세요많😎이드세요많이드세😉요</p>
        </div>
    )
}

FoodComponent.defaultProps = {
    food : "아무거나(기본값)"
};

export default FoodComponent;