import React from "react";
import Tweet from "./Tweet.js";

const Body = () => {
    return (

        <div>

        <div>
            <Tweet
            author={"Byron Richards"}
            date={"March 24th, 2022"}
            content={"this is my first tweet!"}
            />
            
            <Tweet
            author={"Peter Knight"}
            date={"March 14th, 2021"}
            content={"first time using twitter"}
            />
            
        </div>






        </div>

    );
    };

export default Body;