import React, { Children, useState } from "react";
import classNames from "classnames";
import "./timeline.scss";

const TimeLine = ({ time = "", content = "", addClass = "", children }) => {
  return (
    <div className={classNames("gr-timeline pt-5", addClass)}>
      <div className="row d-flex align-items-start">
        <div className="time col-lg-3 ">{time}</div>
        <div className=" col-lg-9 text-break">
          <div className="content">{content} </div>
          <div> {children} </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
