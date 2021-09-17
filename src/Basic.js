import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  city: "",
};

const onSubmit = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const validationSchma = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),
  city: Yup.string().required("Required"),
});
const Basic = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchma,
  });

  return (
    <div classNameName="flex-center">
      <h1>Sign up</h1>
      <form
        className="row g-3 needs-validation"
        onSubmit={formik.handleSubmit}
        novalidate
      >
        <div className="col">
          <label for="firstName" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={formik.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="form-error">{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className="col">
          <label for="lastName" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={formik.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="form-error">{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div className="col">
          <label for="email" className="form-label">
            Email
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              id="email"
              aria-describedby="inputGroupPrepend"
              value={formik.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className="form-error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="col">
          <label for="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={formik.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="form-error">{formik.errors.city}</div>
          ) : null}
        </div>

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Basic;
