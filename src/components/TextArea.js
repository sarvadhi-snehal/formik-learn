import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
const TextArea = ({ label, name, ...rest }) => {
  return (
    <div className="from-control">
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <Field as="textarea" name={name} id={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default TextArea;
