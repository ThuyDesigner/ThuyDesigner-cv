import classNames from "classnames";
import Header from "./CardHeader/Header";
import Body from "./CardBody/Body";
import Footer from "./CardFooter/Footer";
import "./Card.css";
import Img from "./Img";
import Link from "./Link";
const Card = ({ children, addClass = "" }) => {
  return <div className={classNames("card","no-gutter", { addClass })}>{children}</div>;
};

// Card.Header = Header;
// Card.Body = Body;
// Card.Footer = Footer;
// export default Card;
export default Object.assign(Card, {
  Header: Header,
  Body: Body,
  Footer: Footer,
  Img: Img ,
  Link: Link
});
