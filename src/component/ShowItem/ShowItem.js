import classNames from "classnames";
import { Children } from "react";
import BagetCommon from "../Baget/BagetCommon";
import "./Show.css";

const ShowItem = ({ children, directions = [], name = "" ,id="", bgEx=""}) => {
  return (
    <div className="show-component mt-5 " id={id}>
      <div className=" title  col ">
        {/* <BagetCommon bgColor="secondary" isPill="true" isPill="true">
          Component
        </BagetCommon> */}
        <h2 className=""> {name} </h2>
        {directions?.map?.((direction) => (
          <h6>
            Direction
            <span className="txt-secondary px-2">{direction}</span>
          </h6>
        ))}
      </div>
      <div className={classNames("example " ,{bgEx})}>
        <div className="row">{children}</div>
      </div>
    </div>
  );
};
export default ShowItem;
