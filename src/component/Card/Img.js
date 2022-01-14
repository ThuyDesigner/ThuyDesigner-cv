import classNames from "classnames";

const getType = (typeImg) => {
  switch (typeImg) {
    case "img-top":
      return "card-img-top";
    case "img-bottom":
      return "card-img-bottom";
    default:
      return "card-img-top";
  }
};
const Img = ({
  type = "",
  src = "",
  isFluid = false,
  isRounded = false,
  isRoundedCircle = false,
  isthumbnai = false,
}) => {
  return (
    <div>
      <img
        className={classNames(
          getType(type),
          { "img-fluid": isFluid },
          { rounded: isRounded },
          { "rounded-circle": isRoundedCircle },
          { "img-thumbnail": isthumbnai }
        )}
        src={src}
        alt="Card image"
      ></img>
    </div>
  );
};
export default Img;
