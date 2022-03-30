import React from "react";

const User = (props) => { 
    return(
    <div>
        <p>{props.author}</p>
        <p>{props.date}</p>
        <p>{props.content}</p>

    </div>

    )}

export default User;