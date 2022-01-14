import { Children } from "react";
import "./BagetCss.css";
import classNames from "classnames";
const getbgColor = (color) => {
  switch (color) {
    case "primary":
      return "bg-primary";
    case "secondary":
      return "bg-secondary";
    case "success":
      return "bg-success";
    case "danger":
      return "bg-danger";
    case "warning":
      return "bg-warning";
    case "info":
      return "bg-info";
    case "light":
      return "bg-light";
    case "dark":
      return "bg-dark";
    default:
      return "";
  }
};
const BagetCommon = ({
  bgColor = "",
  isPill = false,
  children,
  addClass = ""
}) => {
  return (
    <span
      className={classNames(
        "badge",
        { "rounded-pill": isPill },
        addClass,
        getbgColor(bgColor)
      )}
    >
      {children}
    </span>
  );
};
export default BagetCommon;
