import { Children } from "react";
import "./Avata.css";
import classNames from "classnames";
const getSize = (sizeImg) => {
  switch (sizeImg) {
    case "small":
      return "small";
    case "nomal":
      return "nomal";
    case "big":
      return "big";
    default:
      return "";
  }
};
const AvataImg = ({
  srcImg = "",
  isFluid = false,
  isRounded = false,
  isRoundedCircle = false,
  isthumbnai = false,
  addClass = "",
  width = "",
  height = "",
  size = ""
}) => {
  return (
    <img
      alt=""
      src={srcImg}
      className={classNames(
        "float-start",
        { "img-fluid": isFluid },
        { rounded: isRounded },
        { "rounded-circle": isRoundedCircle },
        { "img-thumbnail": isthumbnai },
        addClass,
        getSize(size)
      )}
      width={width}
      height={height}
    ></img>
  );
};
export default AvataImg;
