import React from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
  l,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const Basic = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    about: "",
    phoneNumbers: [""],
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    city: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="flex-center flex-column">
        <h1>Sign up</h1>
        <Form className=" g-3 ">
          <div className="col">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <Field
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
            />
            <ErrorMessage component={TextError} name="firstName" />
          </div>
          <div className="col">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <Field
              type="text"
              className="form-control"
              name="lastName"
              id="lastName"
            />
            <ErrorMessage component={TextError} name="lastName" />
          </div>
          <div className="col">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="Field-group">
              <Field
                type="text"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="FieldGroupPrepend"
              />
            </div>
            <ErrorMessage component={TextError} name="email" />
          </div>
          <div className="col">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <FastField
              type="text"
              className="form-control"
              id="city"
              name="city"
            />
            <ErrorMessage component={TextError} name="city" />
          </div>
          <div className="col">
            <label htmlFor="phoneNumbers" className="form-label">
              Phone NUmber
            </label>
            <FieldArray
              type="text"
              className="form-control"
              id="phoneNumbers"
              name="phoneNumbers"
            >
              {(fieldArrayProps) => {
                const { push, remove, form } = fieldArrayProps;
                const { values } = form;
                const { phoneNumbers } = values;
                console.log(form.errors);
                return (
                  <div>
                    {phoneNumbers.map((phoneNumbers, index) => (
                      <div key={index}>
                        <Field name={`phoneNumbers[${index}]`} />
                        <button type="button" onClick={() => remove(index)}>
                          Remove
                        </button>
                        <button type="button" onClick={() => push("")}>
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                );
              }}
            </FieldArray>
            <ErrorMessage component={TextError} name="phoneNumbers" />
          </div>
          <div className="col">
            <label htmlFor="about">About</label>
            <Field name="about">
              {(props) => {
                const { field, meta, form } = props;
                return (
                  <textarea className="form-control" id="address" {...field} />
                );
              }}
            </Field>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};

export default Basic;
