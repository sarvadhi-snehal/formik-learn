import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
const Input = ({ label, name, ...rest }) => {
  return (
    <div className="form-control mb-3">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <Field className="form-input" id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default Input;
