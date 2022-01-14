import { Children } from "react";
import "./ButtonCss.css";
import classNames from "classnames";

const getType = (typeButton) => {
  switch (typeButton) {
    case "reset":
      return { typbtn: "reset", valuebtn: "Reset Button" };
    case "submit":
      return { typbtn: "submit", valuebtn: "Submit Button" };
    case "button":
      return { typbtn: "button", valuebtn: "" };
    default:
      return { typbtn: "button", valuebtn: "" };
  }
};

const getcolor = (btnColor) => {
  switch (btnColor) {
    case "primary":
      return "btn-primary";
    case "outline-primary":
      return "btn-outline-primary";
    case "secondary":
      return "btn-secondary";
    case "outline-secondary":
      return "btn-outline-secondary";
    case "success":
      return "btn-success";
    case "outline-success":
      return "btn-outline-success";
    case "info":
      return "btn-info";
    case "outline-info":
      return "btn-outline-info";
    case "danger":
      return "btn-danger";
    case "outline-danger":
      return "btn-outline-danger";
    case "dark":
      return "btn-dark";
    case "outline-dark":
      return "btn-outline-dark";
    case "light":
      return "btn-light";
    case "outline-light":
      return "btn-outline-light";
    case "link":
      return "btn-link";
    case "outline-link":
      return "btn-outline-link";
    default:
      return "";
  }
};
const getSize = (btnSize) => {
  switch (btnSize) {
    case "lg":
      return "btn-lg";
    case "sm":
      return "btn-sm";
    default:
      return "";
  }
};
const ButtonCommon = ({
  type = "",
  variant = "",
  children = "",
  size = "",
  addClass = "",
  isLoading = false
}) => {
  return (
    <div>
      {isLoading ? (
        <button
          className={classNames(
            addClass,
            getcolor(variant),
            "btn",
            getSize(size)
          )}
        >
          <span className="spinner-border spinner-border-sm "></span>
          Loading...
        </button>
      ) : (
        <button
          type={getType(type).typbtn}
          value={getType(type).valuebtn}
          className={classNames(
            addClass,
            getcolor(variant),
            "btn",
            getSize(size)
          )}
        >
          {children}
        </button>
      )}
    </div>
  );
};
export default ButtonCommon;
