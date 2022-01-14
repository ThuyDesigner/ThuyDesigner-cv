import classNames from "classnames";
import ButtonCommon from "../../Button/ButtonCommon";
const Footer = ({ children, addClass = "", isButton = false, btn1="", btn2="" }) => {
  return (
    <div className={classNames("card-footer", { addClass })}>
      {children}
      {isButton && (
        <div className="row">
          <div className="col-md-6"><ButtonCommon variant="primary" addClass="w-100">{btn1}</ButtonCommon></div>
          <div className="col-md-6"><ButtonCommon variant="outline-primary" addClass="w-100">{btn2}</ButtonCommon></div>
          
          
        </div>
      )}
    </div>
  );
};
export default Footer;
