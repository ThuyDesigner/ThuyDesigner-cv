import React, { Children, useState } from "react";
import classNames from "classnames";
import "./timeline.scss";

const TimeLine = ({ times = [], content = "", addClass = "", children }) => {
  return (
    <div className={classNames("gr-timeline pt-3", addClass)}>
      <div className="row d-flex align-items-start">
        <div className="time col-lg-3 col-md-3 col-3  pl-2">
        <ul>{times.map(time =>
        <li> <span className="text-small">{time.small}</span>{time.time} </li>
          )}
          
        </ul>
        </div>
        <div className=" col-lg-9 col-md-9 col-9 text-break">
          <div className="content">{content} </div>
          <div> {children} </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
