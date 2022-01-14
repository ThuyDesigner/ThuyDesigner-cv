import React, { useState } from "react";
import PropTypes from "prop-types";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setChecbox] = useState("");

  function handleValueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }
  function handleValueChange2(e) {
    console.log(e.target.value);
    setPassword(e.target.email);
  }

  function handleSubmit(e) {
    // Prevent reloading browser
    e.preventDefault();
    if (!onSubmit || !value) return;
    const formValues = {
      title: value,
      password: password,
      checkbox: checkbox
    };
    onSubmit(formValues);

    // Reset form
    setValue("");
    setPassword("");
    setChecbox("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 mt-3">
        <label for="email" className="form-label">
          Email
        </label>
        <input
          className="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
          type="email"
          value={value}
          onChange={handleValueChange}
        ></input>
      </div>
      <div className="mb-3 mt-3">
        <label for="pwd" className="form-label">
          Password
        </label>
        <input
          className="form-control"
          id="pwd"
          placeholder="Enter Password"
          name="pswd"
          type="password"
          value={password}
          onChange={handleValueChange2}
        ></input>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value={checkbox}
          id="flexCheckDefault"
        ></input>
        <label className="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default TodoForm;
