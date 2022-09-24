import React, {Component} from "react";

const FoodComponent = props => {
    const {food} = props;
    const style = { color : "red" }
    return (        
        <div>
            <p>많이🥰드세요많😎이드세요많이드세😉요</p>
            <p>아~ {food} 좋아하시는군요 💯</p>
            <p>많이🥰드세요많😎이드세요많이드세😉요</p>
        </div>
    )
}

FoodComponent.defaultProps = {
    food : "아무거나(기본값)"
};

export default FoodComponent;