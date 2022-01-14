import "./AlertsCss.css";
import classNames from "classnames";
import { useState } from "react";
const svgicon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-x"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const getType = (typeAlerts) => {
  var classAlert = "alert-primary";
  switch (typeAlerts) {
    case "secondary":
      classAlert = "alert-secondary";
      break;
    case "success":
      classAlert = "alert-success";
      break;
    case "danger":
      classAlert = "alert-danger";
      break;
    case "warning":
      classAlert = "alert-warning";
      break;
    case "info":
      classAlert = "alert-info";
      break;
    case "light":
      classAlert = "alert-light";
      break;
    case "dark":
      classAlert = "alert-dark";
      break;

    default:
      break;
  }
  return classAlert;
};

const AlertsCommon = ({
  type = "",
  isbtnbutton = false,
  children = "",
  icon = ""
}) => {
  const [show, setShow] = useState(true);
  const handleOnClickCloseButton = () => {
    setShow(false);
  };
  if (show) {
    return (
      <div
        className={classNames(
          "alert d-flex align-self-center",
          getType(type),
          { "alert-dismissible": isbtnbutton },
          { " d-flex align-items-center": icon }
        )}
        role="alert"
      >
        {icon}
        {children}
        {isbtnbutton && (
          //-----------btn-close nomarl
          // <div className="btn-close-x col align-self-center">
          //   <button
          //     type="button"
          //     class="icon-close"
          //     data-bs-dismiss="alert"
          //     aria-label="Close"
          //     onClick={handleOnClickCloseButton}
          //   >
          //     <span aria-hidden="true">{svgicon}</span>
          //   </button>
          // </div>
          //-----------btn-close other
          <span className="close-other">
            <button
              type="button"
              class="btn-close-other"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={handleOnClickCloseButton}
            >
              <span aria-hidden="true">{svgicon}</span>
            </button>
          </span>
        )}
      </div>
    );
  }
  return (
    <p onClick={() => setShow(true)}>
      <p className="show-notification">Show notification</p>
    </p>
  );
};
export default AlertsCommon;
