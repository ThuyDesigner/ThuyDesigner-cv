import React, { useState } from "react";
import classNames from "classnames";
import "./title.scss";
const TitleContent =({title="", sub="" ,decription="", addClass="", svg=""}) =>{
    return(
        <div className={ classNames("title", addClass)} > 
            
            <div className="title-main "> <span className="pr-1 icon">{svg}</span> {title}<span className="subtitle ps-2">{sub}</span></div>
            <div className="bg-title"></div>
            <div className="title-decription"> {decription}</div>
        </div>
    );
};

export default TitleContent;
