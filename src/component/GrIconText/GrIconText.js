import React, { useState } from "react";
import classNames from "classnames";

import "./IconText.scss";

const GrIconText = ({ icon = "", text="" , addClass="", isLink= false , addLink=""}) => {
  
  return (
    <div className= {classNames("gr-icon-text ", addClass) }>
      <div className="row d-flex align-items-center">
        <div className="icon col-lg-2 col-md-3 col-sm-2 col-2">  <img
                        src={icon}
                        class="rounded-circle"
                        alt="Cinque Terre"
                      ></img></div>
        <div className="text col-lg-10 col-md-9 col-sm-9 col-10 text-break">
        {isLink? (<a href={addLink}>{text}</a>):(text)}
       
        
        </div>
      </div>
    </div>
  );
};

export default GrIconText;
