import classNames from "classnames";
import "./Drop.css";
import React, { useState, useEffect, useRef } from "react";
const DropDownCommon = ({
  ListItem = [],
  addClass = "",
  nameBtn = " Dropdown button",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  // get width button
  const refButton = useRef(null);
  const [width, setWidth] = useState(20);
  useEffect(() => {
    console.log("refButton.current", refButton.current);
    setWidth(refButton.current.clientWidth);// get width of button and set width for list item
  }, []);

  return (
    <div className="dropdown">
      <button
        ref={refButton}
        className= {classNames("btn  dropdown-toggle",addClass)}
        type="button"
        data-bs-toggle="dropdown"
        onClick={toggling}
        aria-expanded="false"
      >
        {nameBtn}
      </button>
      {isOpen && (
        <ul className="dropdown-menu show " style={{ width: width }}>
          {ListItem?.map((item) => (
            <li key= {item.id} className="border-bottom">
              <a className="dropdown-item" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropDownCommon;
