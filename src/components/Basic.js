import { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const Basic = () => {
  const [values, setValues] = useState(null);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    address: "",
    phoneNumbers: [""],
  };

  const savedValues = {
    firstName: "dsfdsf",
    lastName: "sdfdsfds",
    email: "dfds@gmail.com",
    city: "hjhgjg",
    address: "hjghj",
    phoneNumbers: ["9537207753"],
  };

  const onSubmit = (values, onSubmitProps) => {
    console.log("ptop ", onSubmitProps);
    alert(JSON.stringify(values, null, 2));
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };
  const validateAbout = (values) => {
    let error;
    if (!values) {
      error = "Required";
    }
    return error;
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    city: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={values || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnChange={false}
      // validateOnBlur={false}
    >
      {(formik) => {
        console.log(formik);
        return (
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
              <div className="col"></div>
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
                          {index > 0 ? (
                            <button type="button" onClick={() => remove(index)}>
                              Remove
                            </button>
                          ) : null}
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
              <label htmlFor="address">About</label>
              <Field
                as="textarea"
                name="address"
                id="address"
                validate={validateAbout}
                className="form-contro"
              />

              <ErrorMessage component={TextError} name="address" />
            </div>

            <div className="col-12">
              {/* <button
                type="button"
                onClick={() => formik.setFieldTouched("address")}
              >
                Visit comments
              </button>

              <button
                type="button"
                onClick={() =>
                  formik.setTouched({
                    firstName: true,
                    email: true,

                    address: true,
                  })
                }
              >
                Visit all
              </button>
              <button
                className="btn btn-info"
                onClick={() => formik.validateField("address")}
                type="button"
              >
                Validate About
              </button>
              <button
                className="btn btn-primary"
                onClick={() => formik.validateForm()}
                type="submit"
              >
                Validate All
              </button> */}

              <button type="button" onClick={() => setValues(savedValues)}>
                Load Save Data
              </button>
              <button
                className="btn btn-success"
                // disabled={!formik.dirty}
                disabled={!formik.isValid || formik.isSubmitting}
                type="submit"
              >
                Submit form
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Basic;
