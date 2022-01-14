import { Children } from "react";
import "./Avata.css";
import AvataImg from "./AvataImg";
import BagetCommon from "../Baget/BagetCommon";
import Ticon from "../Icon/TIcon";
const AvataUser = ({
  img = "",
  size = "nomal",
  name = "",
  info = "",
  subInfo = "",
  isBaget = false,
  isBtnAction = false
}) => {
  return (
    <div className="avata-user">
      <div className=" ">
        <AvataImg srcImg={img} size={size} isRoundedCircle="true"></AvataImg>
      </div>
      <div className="body-avata  ">
        <div className="title-avata ">
          {name}
          {isBaget && (
            <span className="px-2 ">
              <BagetCommon bgColor="primary">New</BagetCommon>
            </span>
          )}
        </div>
        <div className="sub-info pt-0">
          <span>
            {" "}
            {info} <span> - </span> {subInfo}
          </span>
        </div>
      </div>
      {isBtnAction && (
        <div className=" d-flex align-items-center ">
          <div className="row ">
            <span type="button" class=" col px-2 action-icon-delete ">
              {Ticon.delete}
            </span>
            <span type="button" class=" col  px-2 action-icon-edit">
              {Ticon.edit}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default AvataUser;
