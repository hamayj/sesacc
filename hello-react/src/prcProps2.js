import React, { Component } from "react";
import cover from "./book.jpg"

const BookComponent = (props) => {
    const {title, author, price, type} = props;
    return (
        <div className="bookContainer">
            <div className="bookTop">
                이번주 베스트셀러<br/><br/>
                <img className="cover" src={cover}></img> <br/>
                <br/> <span style={{color:"black", textDecoration:"none"}}>{title}</span> <br/><br/>
            </div>   
            <div className="contents" style={{fontWeight:"bold"}}>
                저자: {author}<br/>
                판매가: {price}원<br/>
                구분: {type}
            </div>
        </div>
    )
}

export default BookComponent;