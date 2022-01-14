import classNames from "classnames";

const getType = (selectType) => {
  switch (selectType) {
    case "border":
      return "spinner-border";
    case "grow":
      return "spinner-grow";
    default:
      return "spinner-border";
  }
};
const getColor = (selectColor) => {
  switch (selectColor) {
    case "text-muted":
      return "text-muted";
    case "text-primary":
      return "text-primary";
    case "text-success":
      return "text-info";
    case "text-warning":
      return "text-warning";
    case "text-danger":
      return "text-danger";
    case "text-secondary":
      return "text-secondary";
    case "text-dark":
      return "text-dark";
    case "text-light":
      return "text-light";
      default:
          return "text-primary"
  }
};
const SpinnersCommon = ({ type = "", color = "", addClass = "" }) => {
  return (
    <div
      className={classNames(
        "",
        getType(type),getColor(color),
        addClass
      )}
    ></div>
  );
};
export default SpinnersCommon;
