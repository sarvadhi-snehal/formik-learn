import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
const Select = ({ label, name, options }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} id={name} className="form-select">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default Select;
