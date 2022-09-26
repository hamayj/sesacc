import React, { useState } from "react";

const Event = () => {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const onChangeUsername = (e) => setUsername(e.target.value);
    const onChangeMessage = (e) => setUsername(e.target.value);
    const onClick = () => {
        alert(username + ": " + message);
        setUsername("");
        setMessage("");
    };

    const onKeyPress = (e) => {
        if(e.key === "Enter") {
            onClick();
        }
    }
};

