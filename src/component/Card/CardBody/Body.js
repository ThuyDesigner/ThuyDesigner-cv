import classNames from "classnames";
const Body = ({ children, addClass = "" }) => {
  return (
    <div className={classNames("card-body",  addClass )}>{children}</div>
  );
};
export default Body;
