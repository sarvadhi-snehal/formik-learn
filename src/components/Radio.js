import { Fragment } from "react";
import { Feild, ErrorMessage } from "formik";
import TextError from "./TextError";
const Radio = ({ name, label, options, ...rest }) => {
  return (
    <div className="from-control">
      <label htmlFor={name}>{label}</label>
      <Feild name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <Fragment key={option.key}>
                <input
                  type="radio"
                  {...field}
                  id={option.value}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </Fragment>
            );
          });
        }}
      </Feild>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default Radio;
