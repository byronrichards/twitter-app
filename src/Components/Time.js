import React from "react";
import moment from "moment";

const Time = ({ time }) => (
    <i>Posted { moment(time).fromNow() }</i>
)

export default Time;