import "./List.css";
import classNames from "classnames";
import React, { useState } from "react";
{/**
  titleLists=[{
  title: "AlertsCommon",
  section: "#section1",
  icon: Ticon.nav,
},
{
  title: "ButtonCommon",
  section: "#section2",
  icon: Ticon.nav,
}]
*/}
const ListCommon = ({ titleLists = [], addClass = "" }) => {
  const [indexItem, setIndexItem] = useState(-1);
  // get position of item clicked
  const toggleClass = (index) => {
    setIndexItem(index);
  };

  return (
    <nav className={classNames("navbar",  addClass)}>
      <ul className="navbar-nav">
        {/* item: item. index: position of item */}
        {titleLists?.map((item, index) => (
          <li key={item.id} className={classNames("nav-item " ,{
            myActive: indexItem == index,
            // compare position of item clicked with position currently
          })}>
            <a
              className="nav-link "
              href={item.section}
              onClick={() => toggleClass(index)}
            >
              {item.icon}
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default ListCommon;
