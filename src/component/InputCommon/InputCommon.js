import classNames from "classnames";
import ButtonCommon from "../Button/ButtonCommon";
import React, { useState } from "react";

const InputCommon = ({
  ContentLabe = "",
  type = "",
  addClass = "",
  id = "",
  placeholder = "",
  name = "",
  size = "",
  isButton = false,onsubmit
}) => {
  const [value, setValue] = useState("");
  
  const handleValueChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ( !value) return;
    const formValues = {
      value: value,
    };
    // onsubmit(formValues);
    //  reset form
    setValue("");
    // console.log(value)
  };
  return (
    <form class="mb-3 mt-3" onSubmit={handleSubmit}>
      <label for="" class="form-label">
        {ContentLabe}
      </label>
      <input
        type={type}
        className={classNames("form-control", addClass, size)}
        id={id}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleValueChange}
      ></input>
      {isButton && (
        <ButtonCommon variant="primary" type="submit">
          Submit
        </ButtonCommon>
      )}
    </form>
  );
};
export default InputCommon;
