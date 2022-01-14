import classNames from "classnames";
import BagetCommon from "../../Baget/BagetCommon";
import "./header.css";
const getColor = (type) => {
  switch (type) {
    case "blue":
      return "bg-blue";
    default:
      return "";
  }
};
const Header = ({
  children,
  addClass = "",
  color = "",
  isBaget = false,
  titleBaget = "",
}) => {
  return (
    <div
      className={classNames("card-header", addClass, getColor(color), {"d-flex  align-items-center ": isBaget,})}
    >
      {children}
      {isBaget && (
        <span className="ps-2">
          <BagetCommon bgColor="dark">{titleBaget}</BagetCommon>
        </span>
      )}
    </div>
  );
};
export default Header;
